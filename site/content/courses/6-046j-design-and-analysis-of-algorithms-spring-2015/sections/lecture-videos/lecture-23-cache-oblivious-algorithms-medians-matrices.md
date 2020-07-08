---
about_this_resource_text: >-
  <p><strong>Description:</strong> In this lecture, Professor Demaine introduces
  cache-oblivious algorithms.</p> <p><strong>Instructors:</strong> Erik
  Demaine</p>
embedded_media:
  - id: Video-YouTube-Stream
    media_location: CSqbjfCCLrU
    parent_uid: 36de4aed40b6873c5a4130464bacc185
    title: Video-YouTube-Stream
    type: Video
    uid: fb2cf7e7bb5f22323312f371921fe715
  - id: 3Play-3PlayVideoid-Stream
    media_location: '1409658'
    parent_uid: 36de4aed40b6873c5a4130464bacc185
    title: 3Play-3Play Video id
    type: 3Play
    uid: ad4a8580f61d23dc68c288182ef4de53
  - id: Video-iTunesU-MP4
    media_location: 'https://itunes.apple.com/us/itunes-u/id1081126744'
    parent_uid: 36de4aed40b6873c5a4130464bacc185
    title: Video-iTunes U-MP4
    type: Video
    uid: 8c508c97a65937466bb4bc01a6c96f5d
  - id: Video-InternetArchive-MP4
    media_location: 'https://archive.org/download/MIT6.046JS15/MIT6_046JS15_lec23_300k.mp4'
    parent_uid: 36de4aed40b6873c5a4130464bacc185
    title: Video-Internet Archive-MP4
    type: Video
    uid: 67980301b3fb56f9632b957e299f586f
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/CSqbjfCCLrU/default.jpg'
    parent_uid: 36de4aed40b6873c5a4130464bacc185
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: e65f672d59120099b06b05c11eac25d6
  - id: 1409658.srt
    parent_uid: 36de4aed40b6873c5a4130464bacc185
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-046j-design-and-analysis-of-algorithms-spring-2015/lecture-videos/lecture-23-cache-oblivious-algorithms-medians-matrices/1409658.srt
    title: 3play caption file
    type: null
    uid: 57dc5b503ddae94672b07382b51fdb8d
  - id: 1409658.pdf
    parent_uid: 36de4aed40b6873c5a4130464bacc185
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-046j-design-and-analysis-of-algorithms-spring-2015/lecture-videos/lecture-23-cache-oblivious-algorithms-medians-matrices/1409658.pdf
    title: 3play pdf file
    type: null
    uid: b93568c747321a13d79ef7721be6d50e
  - id: Caption-3Play Video id-SRT
    parent_uid: 36de4aed40b6873c5a4130464bacc185
    title: Caption-3Play Video id-SRT-English - US
    type: Caption
    uid: 60e9e2dc7243df9f00b91a25c2217bc0
  - id: Transcript-3Play Video id-PDF
    parent_uid: 36de4aed40b6873c5a4130464bacc185
    title: Transcript-3Play Video id-PDF-English - US
    type: Transcript
    uid: b1a838f99cad3a2f0e8939ead2dc0f57
inline_embed_id: '2385965lecture23:cache-obliviousalgorithms:medians&matrices63009284'
order_index: 327
parent_uid: 59a7a862feb85c8b52509910c07728e5
related_resources_text: ''
short_url: lecture-23-cache-oblivious-algorithms-medians-matrices
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-046j-design-and-analysis-of-algorithms-spring-2015/lecture-videos/lecture-23-cache-oblivious-algorithms-medians-matrices
title: 'Lecture 23: Cache-Oblivious Algorithms: Medians & Matrices'
transcript: >-
  <p><span m='60'> The following content is provided under a Creative</span>
  <span m='2500'>Commons license.</span> </p><p><span m='4010'>Your support will
  help MIT OpenCourseWare</span> <span m='6360'>continue to offer high-quality
  educational resources for free.</span> </p><p><span m='10730'>To make a
  donation or view additional materials</span> <span m='13330'>from hundreds of
  MIT courses, visit MIT OpenCourseWare</span> <span m='17236'>at
  ocw.mit.edu.</span> </p><p><span m='21690'>ERIK DEMAINE: Welcome to the final
  week of 6.046.</span> </p><p><span m='24524'>Are you excited?</span>
  </p><p><span m='25190'>[CHEERING]</span> <span m='27414'>Yeah, today--</span>
  <span m='28189'>AUDIENCE: Oh.</span> </p><p><span m='28730'>ERIK DEMAINE:
  Well, and sad, I know.</span> </p><p><span m='30080'>It's tough.</span>
  </p><p><span m='30640'>But we've got two more lectures.</span> </p><p><span
  m='32630'>They're on that one topic, which is cache oblivious
  algorithms.</span> </p><p><span m='36720'>And this is a really cool
  concept.</span> </p><p><span m='39470'>It was actually originally
  developed</span> <span m='40970'>in the context of 6.046, as sort of an
  interesting way</span> <span m='45980'>to teach cache-efficient
  algorithms.</span> </p><p><span m='48560'>But it turned into a whole research
  program</span> <span m='50710'>in the late '90s, and now it's its own
  thing.</span> </p><p><span m='55240'>It's kind of funny to bring it back to
  6.046.</span> </p><p><span m='59870'>The whole idea is in all of the
  algorithms we have seen,</span> <span m='64670'>except maybe distributed
  algorithms,</span> <span m='66520'>we've had this view that all of the data
  that we can access</span> <span m='71289'>is the same cost.</span>
  </p><p><span m='73280'>If we have an array, like a hash table,</span> <span
  m='75360'>accessing anything in a hash table is equally costly.</span>
  </p><p><span m='79020'>If we have a binary search tree, every node</span>
  <span m='80840'>costs the same to access.</span> </p><p><span m='83110'>But
  this is not real.</span> </p><p><span m='86120'>Let me give you some idea of
  what</span> <span m='87680'>a real computer looks like.</span> </p><p><span
  m='89350'>You probably know this, but we've not yet thought about it</span>
  <span m='92880'>in an algorithmic context.</span> </p><p><span
  m='102300'>These are caches, what are typically called caches,</span> <span
  m='105390'>in your computer.</span> </p><p><span m='108539'>Then you have what
  we've mostly been thinking about,</span> <span m='112640'>which is main
  memory, your RAM.</span> </p><p><span m='120660'>And then there's probably
  more stuff.</span> </p><p><span m='122260'>These days you probably have some
  big flash.</span> </p><p><span m='125512'>If you have a fancier computer,
  you</span> <span m='126970'>have flash, which is maybe caching</span> <span
  m='129030'>your disk, which is huge.</span> </p><p><span m='133000'>And then
  maybe there's the internet at the end,</span> <span m='135110'>if you
  like.</span> </p><p><span m='136860'>So the point is all the data in the world
  is not on your CPU.</span> </p><p><span m='142370'>And there's this big thing
  which is called the memory hierarchy,</span> <span m='146040'>which dictates
  which things are fast</span> <span m='149410'>and which things are slow, not
  exactly which</span> <span m='152290'>data items; that's up to you.</span>
  </p><p><span m='155530'>But the idea is that on board your CPU</span> <span
  m='157820'>you have probably, these days, up to four levels of cache.</span>
  </p><p><span m='163570'>As I've tried to draw them, they get increasingly
  big.</span> </p><p><span m='167500'>Typical values-- a level one cache</span>
  <span m='169440'>is something on the order of 10, 32 K, whatever.</span>
  </p><p><span m='172860'>Level four cache these days, as introduced</span>
  <span m='174840'>by like Haswell Architectures, has about 100
  megabytes.</span> </p><p><span m='178724'>Main memory you know; this is the
  thing you usually think.</span> </p><p><span m='181140'>About.</span>
  </p><p><span m='181470'>It's in the gigabytes.</span> </p><p><span
  m='182400'>These days you can buy computers with a terabyte of RAM.</span>
  </p><p><span m='185600'>It's not crazy.</span> </p><p><span m='186830'>Flash
  gets bigger.</span> </p><p><span m='188520'>Disk-- these days you can buy
  4-terabyte single disk,</span> <span m='192317'>but if you have a whole RAID
  of disks,</span> <span m='193900'>you can have petabytes of data on one
  computer.</span> </p><p><span m='197079'>So things are getting bigger as we go
  farther to the right.</span> </p><p><span m='200780'>But they're also getting
  slower. .</span> </p><p><span m='203329'>And the point of cache efficient
  algorithms</span> <span m='205310'>is to deal with the fact that things get
  slow</span> <span m='207710'>when they get far away.</span> </p><p><span
  m='209462'>And this makes sense from a physics standpoint.</span> </p><p><span
  m='211420'>If you think about how much data can</span> <span m='213860'>you
  store in a cubic inch or something</span> <span m='216240'>and how much could
  possibly be near your CPU, at some point,</span> <span m='221017'>you're just
  going to run out of space,</span> <span m='222600'>and you've got to go
  farther away.</span> </p><p><span m='224090'>And to go farther away is going
  to take more time.</span> </p><p><span m='227184'>So you can think of it-- I
  mean, there's</span> <span m='228850'>the speed of light argument, that
  things</span> <span m='230850'>that are farther away in your computer</span>
  <span m='232525'>are going to take longer.</span> </p><p><span
  m='234710'>Typical computers are not anywhere near</span> <span m='236630'>the
  speed of light, so there's a more real issue, which</span> <span m='239350'>is
  how long are your traces.</span> </p><p><span m='241160'>And then when you
  have physical moving parts, like a disk,</span> <span m='244640'>I don't know
  if you know, but disks actually spin,</span> <span m='246840'>and there's a
  head, and it has to move around.</span> </p><p><span m='249814'>And that's
  called seek time.</span> </p><p><span m='250980'>Moving a head around on the
  disk is really slow,</span> <span m='253550'>on the order of
  milliseconds.</span> </p><p><span m='255360'>Whereas reading from on-chip
  cache,</span> <span m='258152'>that's on the order of nanoseconds,</span>
  <span m='259610'>whatever your clock rate is, so a few billion times a
  second.</span> </p><p><span m='263180'>So there's a big spread of like a
  factor</span> <span m='266340'>of a million or 10 million from level one cache
  to disk speed.</span> </p><p><span m='271930'>That sucks.</span> </p><p><span
  m='273100'>And so you might think, well, if your data's big,</span> <span
  m='275577'>you're just screwed.</span> </p><p><span m='276409'>You've got to
  deal with disk, and disk is slow.</span> </p><p><span m='279909'>But that's
  not true.</span> </p><p><span m='282430'>Life is not so bad.</span>
  </p><p><span m='284960'>So, in general, there's two notions of speed,</span>
  <span m='307720'>and I've been kind of vague on them.</span> </p><p><span
  m='309560'>One notion is latency, which is if right now I</span> <span
  m='313300'>have the idea that I really need to fetch memory location 2</span>
  <span m='317250'>billion and 73, how long does it take for that data--
  say,</span> <span m='321100'>one word of data-- to come back?</span>
  </p><p><span m='323190'>That's latency.</span> </p><p><span m='325260'>But
  there's another issue, which is bandwidth;</span> <span m='328710'>how fat are
  these pipes?</span> </p><p><span m='332720'>What's my rate of information that
  I could pump?</span> </p><p><span m='335500'>If I said, please give me all of
  main memory in order,</span> <span m='338570'>how fast could it pump it
  back?</span> </p><p><span m='340507'>And that's actually really good.</span>
  </p><p><span m='356370'>So latency is like your start up cost.</span>
  </p><p><span m='357974'>When I ask for something, how long</span> <span
  m='359390'>does it take for that one thing to come?</span> </p><p><span
  m='361270'>But then there's a data rate.</span> </p><p><span m='364660'>And
  bandwidth you can generally make really large.</span> </p><p><span
  m='368620'>For example, in disk, bandwidth of a disk is pretty big.</span>
  </p><p><span m='372110'>But even if it weren't big, you could just add 100
  more disks.</span> </p><p><span m='376780'>And then when you ask for some
  data,</span> <span m='378410'>all 100 disks could give you data at the same
  speed,</span> <span m='383032'>and provided you don't overload your
  bus,</span> <span m='384740'>so you've got to also make more buses and so
  on.</span> </p><p><span m='387480'>You can actually really huge amount of data
  per second,</span> <span m='390567'>but still the time to get there and the
  time for all the disks</span> <span m='393150'>to seek their heads, that's
  slow.</span> </p><p><span m='394770'>It doesn't add up, actually, because
  they're all</span> <span m='396770'>doing it in parallel.</span> </p><p><span
  m='398420'>So you can't reduced latency, but you can increase
  bandwidth.</span> </p><p><span m='402620'>And let's say-- it doesn't match
  physics,</span> <span m='405630'>but we can get pretty close to arbitrarily
  high bandwidth.</span> </p><p><span m='408480'>And so in a well-designed
  computer,</span> <span m='410590'>the fatnesses of these pipes are
  going</span> <span m='412840'>to increase, or could increase, if you
  want.</span> </p><p><span m='416520'>So you can move lots of data
  around.</span> </p><p><span m='421510'>But latency we can't get rid of, and
  this is annoying</span> <span m='423840'>because from an algorithmic
  standpoint, when</span> <span m='425673'>we ask for something, we'd like it
  immediately.</span> </p><p><span m='427952'>In a sequential logarithm, we
  can't do anything</span> <span m='429910'>until that date arrives.</span>
  </p><p><span m='431530'>So cache efficiency is going to fix this by
  blocking.</span> </p><p><span m='441260'>This is an old idea, since caches
  were introduced.</span> </p><p><span m='450692'>There's the idea of
  blocking.</span> </p><p><span m='451900'>So when you ask for a single word in
  main memory,</span> <span m='456300'>you don't get one word.</span>
  </p><p><span m='458090'>You get maybe 32 kilobytes of information,</span>
  <span m='461960'>not just 4 bytes or 8 bytes.</span> </p><p><span
  m='489620'>And we're kind of free to choose these block sizes however</span>
  <span m='492490'>we want, when we designed the system.</span> </p><p><span
  m='495490'>So we can set them, in a certain sense, to hide latency.</span>
  </p><p><span m='501940'>So if you think of amortizing the cost over the
  block,</span> <span m='514799'>then you have something like amortized cost
  over block.</span> </p><p><span m='521990'>This is per word.</span>
  </p><p><span m='525600'>Essentially, we divide the latency by the block
  size.</span> </p><p><span m='534380'>And we have to pay one over
  bandwidth.</span> </p><p><span m='537330'>Bandwidth is how many words a
  second</span> <span m='539900'>you can read, say, from your memory.</span>
  </p><p><span m='542390'>So one over bandwidth is going to be your cost.</span>
  </p><p><span m='546240'>So this we can't change but.</span> </p><p><span
  m='547800'>By adding enough disks or adding enough things</span> <span
  m='550280'>at making these pipes fat enough,</span> <span m='552300'>you can
  basically make this big.</span> </p><p><span m='555500'>Latency is the thing
  we can't control.</span> </p><p><span m='558600'>But if this block is sort of
  useful,</span> <span m='564260'>then we're paying the initial start up time,
  say, hey,</span> <span m='567240'>give me this block, and then waiting for the
  response.</span> </p><p><span m='569600'>That latency we only pay once for the
  entire block.</span> </p><p><span m='572520'>So if there are block-size words
  in that block, per item,</span> <span m='578080'>we're effectively dividing
  latency by block size.</span> </p><p><span m='580380'>This is kind of rough,
  but this is the idea</span> <span m='584110'>of how to reduce latency.</span>
  </p><p><span m='585790'>Now, for this actually work, we need better
  algorithms.</span> </p><p><span m='600230'>Pretty much every algorithm you see
  in the class so far works</span> <span m='603550'>horribly in this
  model.</span> </p><p><span m='605050'>So that's the point of today and next
  class is to fix that.</span> </p><p><span m='613410'>For this kind of
  amortization to work,</span> <span m='620070'>I'm using "use" in a vague sense
  so far.</span> </p><p><span m='623370'>We'll make it formal in a
  moment.</span> </p><p><span m='624930'>When I fetch an entire block, all of
  the elements</span> <span m='628500'>in that block should be useful.</span>
  </p><p><span m='630184'>We should be able to compute something on them</span>
  <span m='632100'>that we needed to compute.</span> </p><p><span
  m='633510'>Otherwise, if I if I only needed the one item that I read
  out</span> <span m='636915'>of the block, that's not going to help me so
  much.</span> </p><p><span m='641250'>So I really want to structure my data in
  such a way</span> <span m='645382'>that when I access one element, I'm</span>
  <span m='646840'>also going to access the elements nearby it.</span>
  </p><p><span m='649890'>Then this blocking will actually be useful.</span>
  </p><p><span m='651980'>This is a property normally called spatial
  locality.</span> </p><p><span m='664190'>And the other thing we'd like-- these
  caches</span> <span m='668180'>have some size, so I can store more than just
  one block.</span> </p><p><span m='671360'>It's not like I read one block, and
  I just</span> <span m='673110'>finish processing it, and then I read the next
  block and go on.</span> </p><p><span m='676630'>Some of these caches are
  actually pretty big.</span> </p><p><span m='678505'>If you think of main
  memory as a cache to your disk,</span> <span m='681470'>that can be really
  big.</span> </p><p><span m='682740'>So ideally, the blocks that I'm using
  here</span> <span m='687355'>relate to each other in some way,</span> <span
  m='688730'>or when I access the block, I'm going</span> <span m='690990'>to
  access it for awhile, along with other blocks.</span> </p><p><span
  m='694030'>So the way this is usually said is</span> <span m='696020'>that
  we'd like to reuse the existing blocks in the cache</span> <span m='701902'>as
  much as possible.</span> </p><p><span m='705290'>And this you can think of as
  temporal locality.</span> </p><p><span m='711000'>When I access a particular
  block,</span> <span m='712530'>I'm going to access it again fairly
  soon.</span> </p><p><span m='714710'>That way it's actually useful to bring it
  into my cache,</span> <span m='717690'>and then I use it many times.</span>
  </p><p><span m='719197'>That would be even better.</span> </p><p><span
  m='720280'>I don't have to have both of these,</span> <span m='721738'>and
  exactly to what extent I have</span> <span m='723500'>them is going to dictate
  what the overall time</span> <span m='725740'>it's going to take to run my
  algorithm.</span> </p><p><span m='727570'>But these are so the ideal
  properties</span> <span m='729280'>you want in a very informal sense.</span>
  </p><p><span m='731640'>Now, in the rest today, we're going to make this
  formal,</span> <span m='736000'>and then we're going to develop some
  algorithms for this model.</span> </p><p><span m='738840'>But this is the
  motivation.</span> </p><p><span m='740740'>In reality, we're free to choose
  block size in the system.</span> </p><p><span m='744585'>Though, in a moment,
  I'm going to assume that</span> <span m='746460'>it's given to us.</span>
  </p><p><span m='747870'>You'd normally set the block size</span> <span
  m='749290'>so that these two terms come out roughly equal.</span> </p><p><span
  m='752570'>Because if you're spending the latency time to go and get</span>
  <span m='755400'>something, you might as well get a whole chunk of
  something,</span> <span m='761530'>according to whatever your bandwidth
  is.</span> </p><p><span m='763200'>If it only cost you, say, twice as</span>
  <span m='764710'>much to fetch an entire block than to fetch one word,</span>
  <span m='768350'>that seems like a pretty good block size.</span> </p><p><span
  m='770420'>So for something like disk, that block size</span> <span
  m='774160'>is on the order of megabytes, maybe even</span> <span
  m='777140'>bigger-- hundreds of megabytes.</span> </p><p><span m='778970'>So
  think of the block sizes as really big.</span> </p><p><span m='781170'>We
  really want all that data to be useful in some way.</span> </p><p><span
  m='784950'>Now it's really hard to think about a memory</span> <span
  m='788980'>hierarchy with so many levels.</span> </p><p><span m='792150'>So
  we're going to focus on two levels at a time--</span> <span m='794810'>the
  sort of the cheap and small cache</span> <span m='798530'>versus the huge
  thing, which I'll call disk,</span> <span m='801010'>just for emphasis.</span>
  </p><p><span m='806420'>So I'm going to call this two-level model</span> <span
  m='808880'>the external memory model.</span> </p><p><span m='810890'>It was
  originally introduced as a model</span> <span m='813920'>for main memory
  versus disk.</span> </p><p><span m='815626'>But you could apply it to any pair
  of levels.</span> </p><p><span m='817500'>In general, you have your problem
  size N,</span> <span m='820720'>choose the smallest level that fits N.
  Typically that's</span> <span m='825040'>main memory.</span> </p><p><span
  m='825680'>Maybe it's disk.</span> </p><p><span m='826900'>And just think of
  the level between that and the previous,</span> <span m='832160'>so the last
  level and the next to last level.</span> </p><p><span m='837120'>Often that's
  what matters.</span> </p><p><span m='838567'>Like if you run a program, and
  you run out of RAM,</span> <span m='840650'>and you start swapping the disks,
  that's when everything</span> <span m='842983'>just slows to a crawl.</span>
  </p><p><span m='845080'>You can see that difference at each of these
  levels,</span> <span m='847305'>but it's probably most dramatic at disk</span>
  <span m='848930'>just because it's so slow-- a million times slower than
  RAM,</span> <span m='853910'>or at least 1,000 times slower than RAM, I should
  say.</span> </p><p><span m='857190'>Anyway, so we have just two levels.</span>
  </p><p><span m='863730'>So let me draw a more precise picture.</span>
  </p><p><span m='865760'>We have the CPU.</span> </p><p><span m='867020'>This
  is where all of our operations</span> <span m='869160'>are doing this, where
  we add numbers and so on.</span> </p><p><span m='871210'>We'll think of it as
  having a constant number of registers.</span> </p><p><span m='873668'>Each
  register is one word.</span> </p><p><span m='876660'>And then we have a really
  fat pipe, low latency pipe,</span> <span m='882440'>to the cache.</span>
  </p><p><span m='888490'>Cache is going to be divided into blocks.</span>
  </p><p><span m='893810'>So let's say there's B words per blocks.</span>
  </p><p><span m='898800'>Instead of writing block size, I'll</span> <span
  m='900930'>just write capital B. And the number of blocks.</span> </p><p><span
  m='904910'>I'm going to call M over B. So the total size of your cache</span>
  <span m='916300'>is capital M. And then there is a relatively thin and
  slow</span> <span m='922650'>connection-- this one's fast.</span> </p><p><span
  m='928060'>This one's slow-- to your disk.</span> </p><p><span m='935460'>Disk
  we'll think of as huge, essentially infinite size.</span> </p><p><span
  m='938800'>It's also divided into blocks of size B, so same block size.</span>
  </p><p><span m='951110'>So this is the picture.</span> </p><p><span
  m='952840'>And so, initially, all of the input</span> <span m='956190'>is over
  here, all of your end data items, whatever.</span> </p><p><span m='959050'>So
  you want to sort those items.</span> </p><p><span m='961010'>And in order to
  access those items,</span> <span m='964130'>you first have to bring them into
  cache.</span> </p><p><span m='966670'>That's going to be slow, but it's done
  in a blocked manner.</span> </p><p><span m='972260'>So when I can't access an
  individual item here,</span> <span m='976230'>I have to request the entire
  block.</span> </p><p><span m='979190'>When I request that block, it gets sent
  over here.</span> </p><p><span m='981300'>It takes a while.</span>
  </p><p><span m='982409'>And then I get to choose where to store it.</span>
  </p><p><span m='984200'>Maybe I'll put it here.</span> </p><p><span
  m='985960'>And then maybe I'll grab this block</span> <span m='989000'>and
  then store it here and so on.</span> </p><p><span m='992100'>Each of those is
  a block read, so these are new instructions</span> <span m='994870'>the CPU
  can do.</span> </p><p><span m='996990'>And eventually, this cache will get
  full.</span> </p><p><span m='999680'>And then before I bring in a new
  block,</span> <span m='1001430'>I have to kick out an old lock.</span>
  </p><p><span m='1002990'>Meaning I need to take one these blocks</span> <span
  m='1004910'>and write it to some position, maybe to the same place.</span>
  </p><p><span m='1009175'>I think, in fact, we will always assume</span> <span
  m='1010800'>that you write to the same place, overwrite</span> <span
  m='1013100'>what was on the disk.</span> </p><p><span m='1014340'>You made
  some changes here, send it back.</span> </p><p><span m='1016656'>And, in
  general, what we're going to do</span> <span m='1018280'>is count how many
  times we read and write blocks.</span> </p><p><span
  m='1021100'>Question?</span> </p><p><span m='1022474'>AUDIENCE: When you
  talked about how fast the connection is,</span> <span m='1025401'>you're just
  talking about latency, right?</span> </p><p><span m='1027108'>ERIK DEMAINE:
  Yes, sorry, this is latency.</span> </p><p><span m='1028858'>AUDIENCE: Yeah,
  so like the [INAUDIBLE] connections</span> <span m='1031710'>[? just don't
  have ?] [INAUDIBLE]?</span> </p><p><span m='1033710'>ERIK DEMAINE: Right, this
  could have huge bandwidth.</span> </p><p><span m='1036020'>So in this model,
  we're assuming the block size is fixed,</span> <span m='1039089'>and then the
  latency versus bandwidth</span> <span m='1041250'>is not-- we're not going to
  think about bandwidth.</span> </p><p><span m='1043781'>We'll assume the block
  size has been</span> <span m='1045280'>chosen in some reasonable way.</span>
  </p><p><span m='1047036'>And then all we need to do is count the number of
  blocks.</span> </p><p><span m='1049410'>But underneath, yeah, you have some
  kind of bandwidth.</span> </p><p><span m='1053640'>Presumably you set the
  block size</span> <span m='1055990'>to make these two things roughly
  equal,</span> <span m='1057841'>and so then latency and bandwidth</span> <span
  m='1059216'>are kind of the same thing.</span> </p><p><span m='1061010'>That's
  the idea.</span> </p><p><span m='1061939'>But really, we're just going to
  think about counting latency,</span> <span m='1064480'>which is how many times
  do I have</span> <span m='1065870'>to request to block and wait for it to come
  over,</span> <span m='1068400'>and how much does it cost to write a
  block?</span> </p><p><span m='1071010'>How many times do I write a
  block?</span> </p><p><span m='1072650'>I'm not going to worry about how much
  physical time it</span> <span m='1075357'>takes me to do either of those
  things;</span> <span m='1076940'>I'm just going to count them and assume that
  that</span> <span m='1079000'>is what I need to minimize.</span> </p><p><span
  m='1082410'>So I'm going to count-- we call these memory transfers--</span>
  <span m='1089750'>transfers of blocks between levels,</span> <span
  m='1093334'>between these two levels.</span> </p><p><span m='1097150'>This is
  the number of blocks read from or written to disk.</span> </p><p><span
  m='1112380'>We're going to view accesses to the cache as free.</span>
  </p><p><span m='1120110'>I'm not going to count those.</span> </p><p><span
  m='1125284'>You don't need to worry about that</span> <span m='1126700'>so
  much because we can still count the number of operations</span> <span
  m='1132550'>that we do on the computer, on the CPU.</span> </p><p><span
  m='1139520'>We still can think about how much time,</span> <span
  m='1142120'>regular time, it takes to do the computation--</span> <span
  m='1144730'>how many comparisons, how many additions, things like that.</span>
  </p><p><span m='1147570'>And that would include things like reading and
  writing</span> <span m='1150030'>elements from cache-- individual
  things.</span> </p><p><span m='1152890'>But we're going to view this
  connection-- let's say,</span> <span m='1155360'>these are on the same
  ship.</span> </p><p><span m='1157120'>So reading cache is just as fast as
  reading from registers.</span> </p><p><span m='1159897'>So we're not going to
  worry about that time.</span> </p><p><span m='1161730'>What we're focusing on,
  for the purpose of this model,</span> <span m='1164230'>is between these two
  levels.</span> </p><p><span m='1166700'>So these are essentially one level
  combined.</span> </p><p><span m='1170355'>I'll change that in a little
  bit.</span> </p><p><span m='1171730'>But for now, just think about the two
  levels.</span> </p><p><span m='1174240'>And we're counting how many memory
  transfers</span> <span m='1176210'>do we have between these two levels, cache
  and disk.</span> </p><p><span m='1181660'>So we want to minimize that.</span>
  </p><p><span m='1183480'>Now, just like before, we want to minimize</span>
  <span m='1185360'>the running time in the usual traditional measure.</span>
  </p><p><span m='1189090'>And we want to minimize space and all the usual
  things</span> <span m='1191570'>we minimize.</span> </p><p><span
  m='1192240'>But now we have a new measure, which</span> <span m='1193740'>is
  number of memory transfers, and we want our algorithm</span> <span
  m='1196073'>to minimize that too, for a given block size</span> <span
  m='1199460'>and for a given cache size.</span> </p><p><span m='1205930'>And at
  this point-- I'm going to change this in a moment--</span> <span
  m='1210180'>the algorithm that we would write in this external memory</span>
  <span m='1215480'>model explicitly manages the blocks.</span> </p><p><span
  m='1219590'>It has to explicitly read and write blocks.</span> </p><p><span
  m='1231444'>And there's a software system that</span> <span
  m='1232860'>implements this model, particularly for disk,</span> <span
  m='1235350'>and lets you do this in a nice controlled way,</span> <span
  m='1237510'>maintain your memory, maintain reading and writing disk.</span>
  </p><p><span m='1240460'>The operating system tries to do this,</span> <span
  m='1242160'>but it usually does a really bad job with swapping.</span>
  </p><p><span m='1245070'>But there are software systems that</span> <span
  m='1247280'>let you take control and do much better.</span> </p><p><span
  m='1253900'>So that's a good model.</span> </p><p><span m='1254980'>External
  memory model is especially good for disk.</span> </p><p><span m='1262280'>It's
  not going to capture the finesse of all</span> <span m='1264630'>these other
  levels, and it's a little bit annoying</span> <span m='1267900'>to write
  algorithms in this way-- explicitly</span> <span m='1270245'>reading and
  writing blocks.</span> </p><p><span m='1271370'>Today I will not write any
  such algorithms.</span> </p><p><span m='1274230'>Although, you could think
  about them.</span> </p><p><span m='1276890'>I personally love this other
  model,</span> <span m='1280765'>which is cache obviousness.</span>
  </p><p><span m='1289920'>It's going to lead to, in some sense, cleaner
  algorithm.</span> </p><p><span m='1292840'>Although, it's more of a magic
  trick to get them to work.</span> </p><p><span m='1296380'>But writing the
  algorithms is very simple.</span> </p><p><span m='1298140'>Analyzing them is
  more work.</span> </p><p><span m='1300500'>And it will capture, in some sense,
  all of these levels.</span> </p><p><span m='1304740'>But, in fact, it is
  basically exactly this model, almost</span> <span m='1308320'>the same.</span>
  </p><p><span m='1309400'>We're going to change one thing, which is</span>
  <span m='1312270'>where the oblivious comes from.</span> </p><p><span
  m='1314510'>We're going to say that the algorithm doesn't</span> <span
  m='1319200'>know the cache parameters.</span> </p><p><span m='1322430'>It
  doesn't know B or M. So this is a little weird.</span> </p><p><span
  m='1328215'>We're going to have to make some other changes to make it
  work.</span> </p><p><span m='1333490'>From an analysis perspective, I want to
  count memory transfers</span> <span m='1336800'>and analyze my algorithm with
  respect to this memory</span> <span m='1339350'>hierarchy.</span> </p><p><span
  m='1340980'>But the algorithm itself isn't allowed</span> <span m='1342930'>to
  know what that member hierarchy looks like.</span> </p><p><span
  m='1345190'>Another way to say this is that the algorithm</span> <span
  m='1347250'>has to work simultaneously for all values of B</span> <span
  m='1349765'>and all values of M. As you might imagine,</span> <span
  m='1354167'>this is not so easy.</span> </p><p><span m='1355000'>But there are
  some simple things where this is easy,</span> <span m='1357166'>and more
  complicated things where this is possible.</span> </p><p><span m='1360150'>And
  it gives you all sorts of cool things.</span> </p><p><span m='1362800'>Let me
  first formalize the model a little bit.</span> </p><p><span m='1366290'>The
  other nice thing about cache oblivious algorithms</span> <span m='1368780'>is
  it corresponds much more closely</span> <span m='1372620'>to how these caches
  work.</span> </p><p><span m='1375740'>When you write code on your CPU,
  you</span> <span m='1377310'>may have noticed you don't usually</span> <span
  m='1378560'>do block reads and block writes, unless you're</span> <span
  m='1380476'>dealing with flash or disk.</span> </p><p><span m='1382760'>All of
  this is taking care for you.</span> </p><p><span m='1384590'>It's all done
  internal to the processor.</span> </p><p><span m='1386500'>When you access a
  word, behind the scenes,</span> <span m='1389360'>magically, the system, the
  computer,</span> <span m='1393260'>finds which word to read or which block to
  read.</span> </p><p><span m='1396100'>It moves the entire block into a higher
  level cache,</span> <span m='1399200'>and then it's just serving you words out
  of that block.</span> </p><p><span m='1401930'>And you don't have explicit
  control over that.</span> </p><p><span m='1405200'>So the way that works is
  when you access a word in memory--</span> <span m='1412930'>and I'm going to
  think of memory as everything;</span> <span m='1416420'>this is what's stored
  in the disk, say.</span> </p><p><span m='1422246'>This is the entire memory
  system, the entire memory</span> <span m='1424370'>hierarchy.</span>
  </p><p><span m='1425280'>And, as usual in this class, we're</span> <span
  m='1426840'>going to think of the entire memory</span> <span m='1428360'>as a
  giant array of words.</span> </p><p><span m='1436940'>Each of these squares is
  one word.</span> </p><p><span m='1441660'>But then also, the memory is now
  divided into blocks.</span> </p><p><span m='1446040'>So let's say every
  four.</span> </p><p><span m='1447440'>Let's say B equals 4.</span>
  </p><p><span m='1449160'>Every four words is a block boundary,</span> <span
  m='1453820'>just for the sake of drawing a figure.</span> </p><p><span
  m='1457960'>So this is B equals 4.</span> </p><p><span m='1460450'>When you
  access a single word, like this one,</span> <span m='1463650'>you get the
  entire block containing the word.</span> </p><p><span m='1470100'>Let's say,
  to emphasize, it's not you personally;</span> <span m='1472720'>the system
  somehow fetches the block containing that word.</span> </p><p><span
  m='1487307'>It has to do this automatically.</span> </p><p><span
  m='1488640'>We can't explicitly read and write blocks in this model</span>
  <span m='1491120'>because we don't know how big the blocks are.</span>
  </p><p><span m='1493050'>So it couldn't even name them.</span> </p><p><span
  m='1495230'>But internally, on the real system and in your analysis,</span>
  <span m='1499510'>you're going to think of whenever you touch
  something,</span> <span m='1501760'>you actually get all this into the
  cache.</span> </p><p><span m='1503630'>So you hope that you will use things
  nearby because you've</span> <span m='1506100'>already read them in.</span>
  </p><p><span m='1507300'>Ideally, they're useful.</span> </p><p><span
  m='1508300'>But you don't know how many you've read in.</span> </p><p><span
  m='1510091'>You've read in B, and you don't what B is.</span> </p><p><span
  m='1513457'>The algorithm doesn't now.</span> </p><p><span m='1517200'>One
  more detail-- the cache is going</span> <span m='1519670'>to get full pretty
  quickly.</span> </p><p><span m='1521462'>And so then, whenever you read
  something,</span> <span m='1523170'>you have to kick something out.</span>
  </p><p><span m='1524461'>In steady state, cache might as well</span> <span
  m='1526690'>always stay full-- no reason to leave anything empty.</span>
  </p><p><span m='1529250'>So which block do you kick out?</span> </p><p><span
  m='1534884'>Any suggestions?</span> </p><p><span m='1535550'>Which block
  should I kick out?</span> </p><p><span m='1537870'>If I've been reading and
  writing some blocks,</span> <span m='1540710'>reading and writing to words
  within these blocks.</span> </p><p><span m='1546228'>Yeah?</span> </p><p><span
  m='1546728'>AUDIENCE: [INAUDIBLE].</span> </p><p><span m='1548477'>ERIK
  DEMAINE: The block that was fetched farthest in the past?</span> </p><p><span
  m='1551060'>Yeah that is usually called First In, First Out.</span>
  </p><p><span m='1553480'>That's FIFO.</span> </p><p><span m='1554610'>And that
  is a good strategy.</span> </p><p><span m='1557890'>Any other
  suggestions?</span> </p><p><span m='1559352'>Yeah.</span> </p><p><span
  m='1559852'>AUDIENCE: [INAUDIBLE].</span> </p><p><span m='1562692'>ERIK
  DEMAINE: The block has been least recently used.</span> </p><p><span
  m='1564900'>So maybe you fetched it a long time ago,</span> <span
  m='1567670'>but you use it every clock cycle.</span> </p><p><span
  m='1570999'>That one you should probably not throw away</span> <span
  m='1572790'>because you use it a lot.</span> </p><p><span m='1573831'>That's
  called LRU, and that is also a good strategy.</span> </p><p><span
  m='1578730'>Other suggestions?</span> </p><p><span m='1579720'>Those are two
  good ones.</span> </p><p><span m='1581150'>If you go beyond that, I'm worried
  I won't know.</span> </p><p><span m='1583180'>But there are some bad
  strategies.</span> </p><p><span m='1584596'>Yeah?</span> </p><p><span
  m='1585890'>AUDIENCE: Just random.</span> </p><p><span m='1587050'>ERIK
  DEMAINE: Random-- yeah, random is probably pretty good.</span> </p><p><span
  m='1592435'>I don't know offhand.</span> </p><p><span m='1593310'>There are
  some randomized strategies</span> <span m='1594810'>that beat both of
  those.</span> </p><p><span m='1596160'>But from this perspective, both are
  good.</span> </p><p><span m='1598250'>We've got lots of Frisbees to go
  through, so.</span> </p><p><span m='1602760'>That's a good answer.</span>
  </p><p><span m='1603690'>Random is definitely a good idea.</span> </p><p><span
  m='1604950'>I know there's a randomized strategy called [? bit, ?]</span>
  <span m='1606930'>that in certain senses is a little bit better.</span>
  </p><p><span m='1608760'>But from my perspective, I think all of those are
  good.</span> </p><p><span m='1611051'>Random, I have to double check whether
  you lose a log factor.</span> </p><p><span m='1613600'>And expectation should
  be fine.</span> </p><p><span m='1617520'>So all of those strategies will
  work.</span> </p><p><span m='1620600'>You could define this model with any of
  them.</span> </p><p><span m='1622945'>I think it would work fine, except
  randomize,</span> <span m='1624820'>you'd get an expectation bound.</span>
  </p><p><span m='1628640'>So the system evicts, let's say, the least recently
  used page.</span> </p><p><span m='1644480'>The least recently loaded page
  would also work fine.</span> </p><p><span m='1646770'>That's FIFO.</span>
  </p><p><span m='1648136'>Sorry I'm switching to page, but I've been calling
  them blocks.</span> </p><p><span m='1651740'>Blocks and pages are the same
  thing for this lecture.</span> </p><p><span m='1656200'>And either at the end
  of this lecture or beginning of next,</span> <span m='1660690'>I'll tell you
  why that's an OK thing.</span> </p><p><span m='1662900'>But let's not worry
  about it at this point.</span> </p><p><span m='1671440'>So now we have a
  model-- cache flow oblivious.</span> </p><p><span m='1675000'>We have two
  models, actually.</span> </p><p><span m='1678186'>But I think now that the
  cache flow oblivious</span> <span m='1680060'>model is complete, we're going
  to analyze.</span> </p><p><span m='1683040'>Again, we're still counting the
  number of memory transfers</span> <span m='1686460'>in this thing.</span>
  </p><p><span m='1687260'>The algorithm's just not allowed know B and M,</span>
  <span m='1689275'>and so we had to change the model</span> <span
  m='1690900'>to make the reading and writing of blocks</span> <span
  m='1693890'>automatic because the algorithm's not</span> <span
  m='1695812'>allowed to do it.</span> </p><p><span m='1696520'>So someone's got
  to.</span> </p><p><span m='1698950'>The cool thing about cache oblivious
  model</span> <span m='1700980'>is every algorithm you see in this
  class,</span> <span m='1703870'>or most of the algorithms you see in this
  class,</span> <span m='1706260'>are in a certain sense cache oblivious
  algorithms.</span> </p><p><span m='1708510'>They weren't aware of B and M
  before, still not.</span> </p><p><span m='1712390'>What changes is now you can
  analyze them in this new way,</span> <span m='1715930'>in this new
  model.</span> </p><p><span m='1717300'>Now, as I said, all the algorithms
  we've seen</span> <span m='1719815'>are not going to perform well in this
  model-- almost all.</span> </p><p><span m='1724309'>But that makes things
  interesting,</span> <span m='1725725'>and that's why we have some work to
  do.</span> </p><p><span m='1730870'>I have some reasons why cache
  obliviousness--</span> <span m='1733180'>why would you tie your hands behind
  your back</span> <span m='1735470'>and not know B or M?</span> </p><p><span
  m='1737060'>Reason one, it's cool.</span> </p><p><span m='1740150'>I think
  it's pretty amazing you can actually do this.</span> </p><p><span
  m='1742390'>I guess that's reason two is you can actually</span> <span
  m='1743880'>do it for a lot of problems we care about.</span> </p><p><span
  m='1745930'>Cache oblivious algorithms exist that are just as good.</span>
  </p><p><span m='1748900'>So, I mean, of course they exist.</span> </p><p><span
  m='1750630'>But there are ones that are optimal.</span> </p><p><span
  m='1752700'>They're within a constant factor of the best algorithm</span>
  <span m='1755230'>when you know B or M. So that's surprising.</span>
  </p><p><span m='1758665'>That's the cool part.</span> </p><p><span
  m='1762019'>In general, the algorithms are easier</span> <span m='1763560'>to
  write down because we can use pseudo code just like before.</span>
  </p><p><span m='1767540'>We don't need to worry about blocking in the
  algorithm.</span> </p><p><span m='1770930'>The analysis is going to be harder,
  but that's unavoidable.</span> </p><p><span m='1774530'>In some sense, it
  makes it easier to write code.</span> </p><p><span m='1777510'>And it's also a
  little easier to distribute your code</span> <span m='1780820'>because every
  computer has different block</span> <span m='1783160'>sizes that
  matter.</span> </p><p><span m='1784200'>Also, as you change your value of
  N,</span> <span m='1786500'>a different level in the memory hierarchy's going
  to matter.</span> </p><p><span m='1789390'>And so it's annoying-- each of
  these levels, I didn't mention,</span> <span m='1792520'>has a different block
  size and, of course,</span> <span m='1794640'>has a different cache
  size.</span> </p><p><span m='1796360'>So tuning your code every time to a
  different B or M</span> <span m='1799840'>is annoying.</span> </p><p><span
  m='1801740'>The big gain here, though, I think,</span> <span m='1803980'>is
  that you capture the entire hierarchy, in a sense.</span> </p><p><span
  m='1808030'>So in the real world, each of these pipes</span> <span
  m='1811930'>has its own latency.</span> </p><p><span m='1812945'>And let's
  just think about latency.</span> </p><p><span m='1815110'>And you'd like to
  minimize the number of block transfers</span> <span m='1817490'>between here
  and here.</span> </p><p><span m='1818630'>You'd like to minimize the number
  block answers here here.</span> </p><p><span m='1820810'>Well, OK, I can't
  minimize all of them.</span> </p><p><span m='1822434'>That's a
  multi-dimensional problem.</span> </p><p><span m='1824580'>What I'd like to
  minimize is some weighted average</span> <span m='1827190'>of those things--
  latency times number of blocks here,</span> <span m='1830589'>plus the latency
  times the number of blocks</span> <span m='1832380'>here, plus latency times
  the number of blocks</span> <span m='1834254'>here, and so on.</span>
  </p><p><span m='1836910'>If you can find an optimal cache oblivious algorithm
  and analyze</span> <span m='1841410'>it just with respect to two
  levels,</span> <span m='1844680'>because the algorithm's not allowed to know B
  and M,</span> <span m='1847455'>it has to work for all levels.</span>
  </p><p><span m='1850130'>It has to minimize the number of block transfers
  between all</span> <span m='1854140'>these levels, and so, in
  particular,</span> <span m='1855680'>will minimize the weighted sum of
  them.</span> </p><p><span m='1859175'>It's a bit hand wavy.</span>
  </p><p><span m='1860050'>You have to prove something there.</span>
  </p><p><span m='1861520'>But you can prove it.</span> </p><p><span
  m='1866680'>So there's a paper about this from 1999</span> <span
  m='1869930'>by Frigo, Leiserson, Prokop, and Ramachandran.</span> </p><p><span
  m='1875390'>It's old enough that I remember all the names.</span> </p><p><span
  m='1877710'>After about 2001, when I became a professor,</span> <span
  m='1880387'>I can't remember anything.</span> </p><p><span m='1881470'>But
  before that, I can remember everything.</span> </p><p><span m='1884400'>So
  Frigo, we've talked about him in the context of FFTW.</span> </p><p><span
  m='1888450'>That was the fastest Fourier Transform in the West.</span>
  </p><p><span m='1890780'>So he was a student here.</span> </p><p><span
  m='1891870'>And FFTW uses a cache oblivious Fast Fourier Transform</span>
  <span m='1895810'>algorithm.</span> </p><p><span m='1897770'>Leiserson, you've
  probably seen on the cover of your textbook</span> <span m='1900490'>or
  walking around Stata.</span> </p><p><span m='1902340'>Professor Leiserson here
  at MIT.</span> </p><p><span m='1905370'>And Prokop, this is actually his [? M
  Enge ?] thesis.</span> </p><p><span m='1908270'>So pretty awesome [? M Enge ?]
  thesis.</span> </p><p><span m='1912220'>All right, so cool, I think I said all
  the things</span> <span m='1916180'>I wanted to say.</span> </p><p><span
  m='1918450'>So if you want to see the proof that you</span> <span
  m='1920195'>can solve the entire memory hierarchy,</span> <span
  m='1922140'>you can read their paper.</span> </p><p><span m='1924020'>You have
  to make a couple of assumptions,</span> <span m='1925740'>but it's
  intuitive.</span> </p><p><span m='1927200'>Cache oblivious has to work for all
  B and M,</span> <span m='1929090'>so it's going to optimize all the levels
  simultaneously.</span> </p><p><span m='1932220'>Doing that explicitly, with
  all the different B's and M's, that</span> <span m='1935220'>would be really
  messy code, probably also slower.</span> </p><p><span m='1939157'>Cache
  oblivious is just going to do it</span> <span m='1940740'>for free with the
  same code.</span> </p><p><span m='1943046'>All right, let's do some
  algorithms.</span> </p><p><span m='1949480'>There's one easy algorithm which
  works</span> <span m='1951660'>great from a cache oblivious perspective, which
  is scanning.</span> </p><p><span m='1957770'>Let we give you some Python
  code.</span> </p><p><span m='1968540'>For historical reasons, in this
  field,</span> <span m='1970850'>N is written with a capital letter.</span>
  </p><p><span m='1972730'>Don't ask, or don't worry about it.</span>
  </p><p><span m='1975707'>So here's some very simple code.</span> </p><p><span
  m='1977040'>Suppose you want to accumulate an array.</span> </p><p><span
  m='1979230'>You want to add up all of the items in the array</span> <span
  m='1981700'>or multiply them or take them in or whatever.</span> </p><p><span
  m='1984180'>This is a typical kind of thing.</span> </p><p><span
  m='1986900'>Again, an array, we're going to think of-- so here</span> <span
  m='1991200'>was my memory.</span> </p><p><span m='1992895'>We're going to
  think of the array</span> <span m='1994270'>as being stored as some
  contiguous</span> <span m='1999040'>segment of that array, let's say, this
  segment.</span> </p><p><span m='2003610'>So this is important.</span>
  </p><p><span m='2005092'>Assume array is stored contiguously, no holes,</span>
  <span m='2017090'>relative to how it's mapped on to memory.</span>
  </p><p><span m='2021760'>And this is a realistic assumption.</span>
  </p><p><span m='2023350'>When you allocate a block of memory,</span> <span
  m='2025860'>the promise by the system is that it's essentially</span> <span
  m='2028120'>a contiguous chunk of memory or disk, or whatever.</span>
  </p><p><span m='2033390'>And when Python makes an array, it does this.</span>
  </p><p><span m='2038170'>It guarantees that these things will be stored
  contiguously.</span> </p><p><span m='2041160'>If you use a dictionary, this
  would not be true.</span> </p><p><span m='2043160'>But for regular [? array's
  ?] list, this is true.</span> </p><p><span m='2045780'>So I'm accessing the
  items in the array in order,</span> <span m='2050530'>and so I start here at
  item zero.</span> </p><p><span m='2052500'>I end up with item N minus
  1.</span> </p><p><span m='2055780'>That seems good because I read this
  one.</span> </p><p><span m='2057949'>I get the whole block.</span>
  </p><p><span m='2059114'>Then I read this one.</span> </p><p><span
  m='2059989'>I already had that block.</span> </p><p><span m='2061031'>It's
  free.</span> </p><p><span m='2061710'>This one's free.</span> </p><p><span
  m='2062560'>This one's free.</span> </p><p><span m='2063389'>Here I have to
  read a new block.</span> </p><p><span m='2065260'>But then this one's
  free.</span> </p><p><span m='2066650'>So the first item I access in each
  block</span> <span m='2069130'>costs one, but as long as my cache store's at
  least one</span> <span m='2073610'>block, that's enough.</span> </p><p><span
  m='2075820'>And let's say the sum is a register;</span> <span
  m='2078010'>that's enough to remember that block so</span> <span
  m='2079684'>that the next operation I do will be free.</span> </p><p><span
  m='2083250'>So the cost is going to be-- actually,</span> <span m='2092840'>be
  a little more precise-- ceiling of N over B almost.</span> </p><p><span
  m='2102800'>Without the big O here, this is right in the external
  memory</span> <span m='2109170'>model, but not quite right in the cache
  oblivious model.</span> </p><p><span m='2116330'>Can someone tell me
  why?</span> </p><p><span m='2118154'>Yeah?</span> </p><p><span
  m='2119540'>AUDIENCE: If N is two, you could have it</span> <span
  m='2121388'>beyond a border [INAUDIBLE].</span> </p><p><span m='2123240'>ERIK
  DEMAINE: Good, N could be two.</span> </p><p><span m='2125320'>But it could
  span a block boundary.</span> </p><p><span m='2126970'>Remember, the algorithm
  has no idea</span> <span m='2128500'>where the block boundaries are.</span>
  </p><p><span m='2129791'>And again, in reality, there are block
  boundaries</span> <span m='2132750'>all over the place, and there's no way to
  know.</span> </p><p><span m='2135390'>You can't request that when you allocate
  an array</span> <span m='2138400'>it always begins in a block boundary.</span>
  </p><p><span m='2140230'>So great, you can span block boundaries in-- oh, way
  off.</span> </p><p><span m='2148066'>I just spanned a block boundary,
  sorry.</span> </p><p><span m='2152200'>So it's going to be, at most, ceiling
  over N</span> <span m='2156290'>over B plus 1 cache obviously.</span>
  </p><p><span m='2160470'>So it's just going to hurt you by one.</span>
  </p><p><span m='2162060'>But I want to point out, there's a slight
  difference</span> <span m='2164226'>between the two models, even with this
  very simple</span> <span m='2167010'>algorithm.</span> </p><p><span
  m='2168560'>In general, I'm just going to think of this</span> <span
  m='2170860'>as big O N over B plus 1.</span> </p><p><span m='2175680'>There's
  some additive constant.</span> </p><p><span m='2177790'>I guess you could even
  say it's N over B plus big O 1,</span> <span m='2180470'>but we won't worry
  about constant factors today.</span> </p><p><span m='2183960'>So that's
  scanning, cache oblivious external memory,</span> <span m='2186820'>both
  great.</span> </p><p><span m='2188500'>Slightly more interesting--</span>
  <span m='2207762'>AUDIENCE: [INAUDIBLE]?</span> </p><p><span m='2212740'>ERIK
  DEMAINE: Yeah, in the external memory algorithm,</span> <span
  m='2215949'>because you're explicitly controlling the blocks,</span> <span
  m='2217990'>you're explicitly reading and writing them.</span> </p><p><span
  m='2219970'>And you know where the block boundaries are.</span> </p><p><span
  m='2221920'>You could, if you wanted to, you don't have to,</span> <span
  m='2224680'>but you could choose the array to be aligned,</span> <span
  m='2227070'>to be starting at a block boundary.</span> </p><p><span
  m='2229370'>So that's the distinction.</span> </p><p><span m='2230490'>In the
  cache oblivious, you can't control that,</span> <span m='2232570'>so you have
  to worry about the worst case.</span> </p><p><span m='2235319'>External memory
  you could control it,</span> <span m='2236860'>and you could do better, and
  maybe you'd want to.</span> </p><p><span m='2239240'>It will hurt you buy a
  constant factor.</span> </p><p><span m='2243240'>And in disks, for example,
  you want</span> <span m='2245130'>things to be track aligned because if
  you</span> <span m='2248182'>have to go to an adjacent track, it's a lot more
  expensive.</span> </p><p><span m='2250640'>You've got to move the head.</span>
  </p><p><span m='2252320'>Track is a circle, what you can read without
  moving</span> <span m='2255220'>the head, so great.</span> </p><p><span
  m='2262170'>So slightly more interesting is you</span> <span m='2264110'>can
  do a constant number of parallel scans.</span> </p><p><span m='2267360'>So
  that was one scan.</span> </p><p><span m='2270380'>Here's an example of two
  scans.</span> </p><p><span m='2282810'>Again, we have one array of size N.
  Python notation,</span> <span m='2290360'>that would be the whole
  thing.</span> </p><p><span m='2293370'>And what I want to do is swap Ai with--
  this is not Python,</span> <span m='2301170'>but it's, I think, textbook
  notation.</span> </p><p><span m='2305780'>But you know what swap means.</span>
  </p><p><span m='2308840'>What does this do, assuming I got my minus ones
  right?</span> </p><p><span m='2315980'>Yeah?</span> </p><p><span
  m='2316480'>AUDIENCE: It reverses the array.</span> </p><p><span
  m='2317813'>ERIK DEMAINE: It reverses the array, good.</span> </p><p><span
  m='2319860'>We'll just run through these Frisbees.</span> </p><p><span
  m='2322424'>So this is a very simple algorithm</span> <span m='2323840'>for
  reversing the array.</span> </p><p><span m='2324575'>It was originally by John
  Bentley,</span> <span m='2326060'>who was Charles Leiserson's adviser--
  PhD</span> <span m='2328120'>adviser-- back in the day.</span> </p><p><span
  m='2330670'>So very simple, but what's cool about it,</span> <span
  m='2333085'>if you think about the array and the order in which you're</span>
  <span m='2336630'>accessing things, it's like I have two fingers--</span>
  <span m='2343210'>and I should have made this smaller.</span> </p><p><span
  m='2346190'>So here, we'll go down here.</span> </p><p><span m='2348340'>I
  start at the very beginning of the array</span> <span m='2350250'>and the very
  end of the array.</span> </p><p><span m='2351660'>Then I go to the second
  element, next to last element,</span> <span m='2354830'>and I advance like
  this.</span> </p><p><span m='2357740'>So as long as your cache M, the number
  of blocks in the cache</span> <span m='2362256'>is at least two, which is
  totally reasonable.</span> </p><p><span m='2364130'>You can assume this is at
  least 100, typically.</span> </p><p><span m='2367930'>You've got at least 100
  blocks, say.</span> </p><p><span m='2370100'>So for any fixed constant, we're
  going to assume N over B</span> <span m='2372837'>is bigger than a
  constant.</span> </p><p><span m='2373920'>We'll only need like two or three or
  four</span> <span m='2375628'>for the algorithms we cover.</span> </p><p><span
  m='2378320'>Then great, when I access this item,</span> <span m='2380660'>I
  will load in the block that contains it.</span> </p><p><span m='2383410'>I
  don't know how it's aligned, but don't care so much.</span> </p><p><span
  m='2387640'>And then I load in the block that contains this item.</span>
  </p><p><span m='2390120'>And then the next accesses are free until I</span>
  <span m='2392250'>advance to the next block.</span> </p><p><span
  m='2393470'>But once I advance to the next block on the left or the
  right,</span> <span m='2396340'>I'll never have to access the old ones.</span>
  </p><p><span m='2398020'>And so again, the cost here is just</span> <span
  m='2401020'>going to be equal to the number of blocks, which</span> <span
  m='2403290'>is big O of N over B plus 1.</span> </p><p><span m='2407540'>So a
  constant number of parallel scans</span> <span m='2409840'>is going to be
  basically the number of blocks in the array.</span> </p><p><span
  m='2414690'>So N is smaller than B, this is a bad idea or not so hot.</span>
  </p><p><span m='2418340'>But when N is bigger than B, this</span> <span
  m='2419760'>is just N over B. That's how much it takes</span> <span
  m='2421590'>to read in the data-- big deal.</span> </p><p><span m='2426670'>So
  these are boring cache oblivious algorithms.</span> </p><p><span
  m='2429890'>Let's do interesting ones.</span> </p><p><span m='2431830'>And I
  would say the central idea in cache</span> <span m='2434830'>oblivious
  algorithms is to use divide-and-conquer.</span> </p><p><span m='2438360'>This
  goes back to the first few lectures in this class.</span> </p><p><span
  m='2442010'>And so we will go back to examples from there.</span> </p><p><span
  m='2446390'>Today we're going to do the median finding,</span> <span
  m='2448910'>in particular, which we did in lecture two,</span> <span
  m='2452790'>so really a blast from the past.</span> </p><p><span
  m='2454620'>But it's good review because the final covers everything,</span>
  <span m='2457040'>so you've got to remember that.</span> </p><p><span
  m='2459570'>Matrix multiplication, we've talked about, but not</span> <span
  m='2462430'>usually-- well, I guess we did actually use
  divide-and-conquer</span> <span m='2466920'>for Strassen's algorithm.</span>
  </p><p><span m='2468440'>We're going to use -and-conquer even for the boring
  algorithm</span> <span m='2471310'>today.</span> </p><p><span m='2472139'>And
  then next class, we're going to go back to van Emde Boas,</span> <span
  m='2474680'>but in a completely different way.</span> </p><p><span
  m='2476150'>So if you don't like van Emde Boas,</span> <span m='2478280'>don't
  worry; it's much simpler.</span> </p><p><span m='2481800'>So let's do median
  finding.</span> </p><p><span m='2484930'>Or actually, sorry, let me first talk
  about divide-and-conquer</span> <span m='2490900'>in general.</span>
  </p><p><span m='2493860'>You know what divide-and-conquer is.</span>
  </p><p><span m='2495360'>You take your problem.</span> </p><p><span
  m='2496600'>You split it into non-overlapping subproblems,</span> <span
  m='2499390'>recursively solve them, combine them.</span> </p><p><span
  m='2502665'>But what I want to stress here is</span> <span m='2504040'>what
  it's going to look like in a cache oblivious context.</span> </p><p><span
  m='2507110'>So the algorithm is going to look</span> <span m='2509230'>like a
  regular divide-and-conquer algorithm.</span> </p><p><span m='2513380'>So, in
  particular, the algorithm will recurse all the way to,</span> <span
  m='2521800'>let's say, constant size problems,</span> <span
  m='2525090'>whatever the base case is.</span> </p><p><span m='2531900'>So same
  as usual, but what's different is the analysis.</span> </p><p><span
  m='2538410'>When we analyze a cache oblivious algorithm,</span> <span
  m='2543610'>then we get to know what B and M are.</span> </p><p><span
  m='2545274'>In some sense, we're analyzing for all B an M.</span> </p><p><span
  m='2547190'>But let's suppose B and M is given to us,</span> <span
  m='2549360'>then will tell you how many memory transfers you need.</span>
  </p><p><span m='2552451'>This kind of bound, you need to know</span> <span
  m='2553950'>what B is to know what the value of this bound is.</span>
  </p><p><span m='2557110'>But you learn it as a function of B and, in
  general,</span> <span m='2559740'>a function of B and M, and that's</span>
  <span m='2561500'>the best you could hope for as a complete
  characterization.</span> </p><p><span m='2566390'>So in the analysis, let's
  just look at one value of B</span> <span m='2569470'>and one value of M. So
  analysis knows B and M,</span> <span m='2577540'>and it's going to look at,
  let's say, the recursive level,</span> <span m='2591620'>where one of two
  things happens.</span> </p><p><span m='2595230'>Either the problem size fits
  in order one blocks.</span> </p><p><span m='2608660'>So meaning it's order B
  size.</span> </p><p><span m='2612790'>That's an interesting level.</span>
  </p><p><span m='2614690'>Another interesting level, the more obvious one
  probably,</span> <span m='2619650'>is that it fits in cache.</span>
  </p><p><span m='2624045'>So that means that the size is less than or equal to
  capital</span> <span m='2626545'>M. Everything here is counted in terms of
  words.</span> </p><p><span m='2632870'>This is the more obvious one.</span>
  </p><p><span m='2634200'>For a lot of problems, the cache size isn't so
  relevant.</span> </p><p><span m='2637247'>What really matters is the block
  size.</span> </p><p><span m='2638830'>For example, scanning, you're only
  looking through the data</span> <span m='2641430'>once.</span> </p><p><span
  m='2641930'>So it doesn't matter how big your cache is,</span> <span
  m='2643721'>as long as it's not super tiny.</span> </p><p><span m='2645970'>As
  long as it has a few blocks, then</span> <span m='2648420'>it's just a
  function of B and N, no M involved.</span> </p><p><span m='2653360'>So for
  that kind of problem this would</span> <span m='2655500'>be more useful--
  constant number of blocks.</span> </p><p><span m='2659800'>Because I think of
  the cache M as being larger</span> <span m='2662740'>than any constant times
  B, this is strictly smaller,</span> <span m='2667140'>or this is smaller or
  equal to problem fitting in cache.</span> </p><p><span m='2670870'>So when M
  is relevant, we'll look</span> <span m='2672780'>at this level and maybe the
  adjacent levels</span> <span m='2675600'>in the recursion.</span> </p><p><span
  m='2677580'>So the algorithm doesn't know what B and M are, so it's</span>
  <span m='2680150'>got to recurse all the way down-- turtles</span> <span
  m='2682610'>all the way down.</span> </p><p><span m='2684040'>But the
  analysis, because we're only</span> <span m='2685890'>thinking about one value
  B and M at a time,</span> <span m='2687780'>we can afford to just consider
  that one level,</span> <span m='2689830'>and that will be like the critical
  place</span> <span m='2691496'>where all the cost is.</span> </p><p><span
  m='2692599'>Because once things fit in cache and you've loaded things
  in,</span> <span m='2695140'>the cost will be zero.</span> </p><p><span
  m='2696570'>So below that, the base case is kind of trivial.</span>
  </p><p><span m='2698899'>So basically what this is going to do</span> <span
  m='2700440'>is make our base cases larger.</span> </p><p><span
  m='2702410'>Instead of our base case being constant,</span> <span
  m='2704510'>it's going to be order B or M.</span> </p><p><span
  m='2711650'>What don't I need?</span> </p><p><span m='2721839'>So now let's
  going to median finding.</span> </p><p><span m='2745420'>Median finding,
  you're given an unsorted array.</span> </p><p><span m='2747990'>You want to
  find the median.</span> </p><p><span m='2750560'>And in lecture two, we had a
  linear time</span> <span m='2755440'>worst case algorithm for this.</span>
  </p><p><span m='2760900'>And so my goal today is to make it this running
  time.</span> </p><p><span m='2764230'>This is what you might call linear
  time</span> <span m='2765890'>in the cache oblivious model because that's how
  long it</span> <span m='2768360'>takes just to read the data.</span>
  </p><p><span m='2772850'>It turns out basically the same algorithm
  works.</span> </p><p><span m='2775680'>First, you've got to remember the
  algorithm.</span> </p><p><span m='2777810'>So let me write it down
  quickly.</span> </p><p><span m='2780510'>This is the sort of five by in N
  array.</span> </p><p><span m='2785250'>So think of the array as being
  partitioned into, I'll</span> <span m='2789816'>call them, five
  columns.</span> </p><p><span m='2795540'>So this picture of five dots by N
  over 5 dots-- this is</span> <span m='2802990'>dot, dot, dot.</span>
  </p><p><span m='2804361'>So this is five.</span> </p><p><span m='2806240'>Now,
  we didn't talk about it then,</span> <span m='2808025'>and there's a few
  different ways you could actually</span> <span m='2810150'>implement it, but
  let's say these-- the actual array is</span> <span
  m='2812710'>one-dimensional.</span> </p><p><span m='2813810'>Let's say these
  are the first five items.</span> </p><p><span m='2815610'>These are the next
  five items.</span> </p><p><span m='2817020'>So, in other words, this matrix is
  stored column-by-column.</span> </p><p><span m='2821610'>This is just a
  conceptual view.</span> </p><p><span m='2823150'>So we can define it either
  way, however we want.</span> </p><p><span m='2825880'>So I'm going to view it
  that way.</span> </p><p><span m='2828070'>And then what the rest of the
  algorithm did was for sort</span> <span m='2832090'>each column, it's only
  five items,</span> <span m='2836150'>so you can sort it in constant time, each
  one.</span> </p><p><span m='2839137'>But, in particular, what we care
  about</span> <span m='2840720'>is the median of those five items.</span>
  </p><p><span m='2844010'>Then we recursively found the median of the
  medians.</span> </p><p><span m='2852370'>This is the step we're going to have
  to change a little bit.</span> </p><p><span m='2861150'>Then we-- leave a
  little bit of space.</span> </p><p><span m='2866350'>Then we partition the
  array by x.</span> </p><p><span m='2872580'>Meaning we split the array into
  items less than</span> <span m='2875190'>or equal to x and things greater than
  x.</span> </p><p><span m='2880350'>We probably assumed there was only one
  value equal to x,</span> <span m='2883040'>but it doesn't matter.</span>
  </p><p><span m='2885160'>And finally, we recurse on one of those two
  halves.</span> </p><p><span m='2893760'>So this is a pretty crazy
  divide-and-conquer algorithm,</span> <span m='2896070'>one of the more
  sophisticated ones.</span> </p><p><span m='2897867'>You don't need to know all
  the details here,</span> <span m='2899700'>just that it worked and it ran in
  linear time.</span> </p><p><span m='2902980'>What's crazy about it is there
  are two recursive calls.</span> </p><p><span m='2906030'>Usually, like in
  merge sort, where</span> <span m='2907460'>you do two recursive calls and
  spend linear time</span> <span m='2910090'>to do the stuff, like this
  partition,</span> <span m='2912300'>you get n log n time, like merge
  sort.</span> </p><p><span m='2914470'>Here, because this array is a lot
  smaller,</span> <span m='2917570'>this is a size N over 5.</span> </p><p><span
  m='2919690'>And this one was reasonably small;</span> <span m='2921610'>it was
  like [? M of ?] 7/10 N. Because 7/10 plus 1/5</span> <span m='2928800'>is
  strictly less than 1, this ends up being</span> <span m='2932730'>linear time
  instead of n log n.</span> </p><p><span m='2934480'>That's just review.</span>
  </p><p><span m='2936820'>Now, what I'd like to do is the same thing, same
  analysis,</span> <span m='2945270'>or same algorithm, but now I want to
  analyze it</span> <span m='2948490'>in this two-level model.</span>
  </p><p><span m='2950410'>So actually, I will erase this board.</span>
  </p><p><span m='2968740'>So now my array has been partitioned into
  blocks</span> <span m='2973820'>of size B, like this picture.</span>
  </p><p><span m='2976414'>In fact, it's quite similar.</span> </p><p><span
  m='2977580'>Here, we're partitioning things into blocks,</span> <span
  m='2979730'>but they're size five.</span> </p><p><span m='2980670'>That's
  different.</span> </p><p><span m='2981620'>Now someone has partitioned my
  array into blocks of size B.</span> </p><p><span m='2984990'>I need to count
  how many things I access.</span> </p><p><span m='2986840'>Well, let's just
  look line-by-line at this code</span> <span m='2989720'>and see what we
  do.</span> </p><p><span m='2990530'>Step one, we do absolutely nothing.</span>
  </p><p><span m='2992490'>This is a conceptual picture, so zero cost,
  great.</span> </p><p><span m='2996440'>Step one is zero, my favorite
  answer.</span> </p><p><span m='3000600'>Step two, we sort each column.</span>
  </p><p><span m='3003630'>How long does this take?</span> </p><p><span
  m='3004630'>What am I doing?</span> </p><p><span m='3012230'>It's right above
  me.</span> </p><p><span m='3017420'>AUDIENCE: N over B.</span> </p><p><span
  m='3018350'>ERIK DEMAINE: N over B because this is a scan.</span> </p><p><span
  m='3021024'>It's a little bit weird of a scan.</span> </p><p><span
  m='3022440'>We look at five items, and then we</span> <span m='3025520'>look
  at the next five items, and then the next five items.</span> </p><p><span
  m='3028370'>But it's basically a scan.</span> </p><p><span m='3029550'>You
  could think of it as almost five parallel scans, I suppose,</span> <span
  m='3032559'>or you could just break into the case</span> <span
  m='3034100'>where maybe if B is a constant, then</span> <span m='3037540'>it
  doesn't matter what you do.</span> </p><p><span m='3038790'>But if B bigger
  than a constant, then reading five items,</span> <span m='3042681'>those are
  all probably going to be in one block,</span> <span m='3044680'>except the
  ones that straddle the block boundaries.</span> </p><p><span m='3047290'>So in
  all cases, for step two-- maybe</span> <span m='3051086'>I should rewrite step
  one-- zero cost.</span> </p><p><span m='3053600'>Step two, is order N over B
  plus 1, to be careful.</span> </p><p><span m='3061240'>That's a scan.</span>
  </p><p><span m='3063636'>Actually, it's two parallel scans</span> <span
  m='3065010'>because we have to write out these medians somewhere,</span> <span
  m='3069490'>so we'll have to.</span> </p><p><span m='3070620'>Step three is
  recursively find the medians.</span> </p><p><span m='3074320'>Now, before, we
  had in T of N is T of N over 5</span> <span m='3082140'>plus T of 7/10 N plus
  linear.</span> </p><p><span m='3090110'>In this new world-- this is regular
  running time.</span> </p><p><span m='3094002'>In this new world, I'm going to
  use</span> <span m='3095460'>a different notation for the recurrence, MT of
  N</span> <span m='3098640'>for memory transfers.</span> </p><p><span
  m='3100630'>This is a good old-fashioned time,</span> <span m='3102490'>and
  this is our new modern notion of time--</span> <span m='3104900'>how many
  block transfers do I need to do for problem size N.</span> </p><p><span
  m='3107760'>So this is a recursion, and should be MT of N over 5.</span>
  </p><p><span m='3114020'>But, and this is important, for this</span> <span
  m='3120500'>to be a same problem of the same type,</span> <span m='3122850'>I
  need to know that the array that recursing on</span> <span m='3125750'>is
  stored contiguously.</span> </p><p><span m='3128660'>Before, I didn't need to
  do that.</span> </p><p><span m='3130800'>I could say, well, let's put the
  medians in the middle.</span> </p><p><span m='3134200'>So now every fifth item
  in this array is my new subarray.</span> </p><p><span m='3138341'>And so I
  could recursively call this thing</span> <span m='3140090'>and say, OK, here's
  my array, but really only think</span> <span m='3142690'>about every fifth
  item.</span> </p><p><span m='3143830'>That's like a stride in the
  array.</span> </p><p><span m='3145650'>And then the next recursive level, oh,
  only</span> <span m='3147460'>worry about every 25th item.</span> </p><p><span
  m='3148950'>And every 5-cubed item, I'm going to stop computing,</span> <span
  m='3152260'>and so on.</span> </p><p><span m='3153870'>And that would be fine
  for regular running time.</span> </p><p><span m='3157360'>But when I get my
  stride gets bigger and bigger,</span> <span m='3159554'>at some point, every
  item is going</span> <span m='3160970'>to be in a different block.</span>
  </p><p><span m='3162130'>That's bad.</span> </p><p><span m='3163130'>I don't
  want to do that.</span> </p><p><span m='3164260'>So when I find these medians,
  or when I recurse,</span> <span m='3168270'>I need that the medians that I'm
  recursing on</span> <span m='3170290'>are stored in a contiguous array.</span>
  </p><p><span m='3171670'>Now, this is easy to do.</span> </p><p><span
  m='3172690'>But we didn't have to do before.</span> </p><p><span
  m='3173900'>That's the key difference.</span> </p><p><span m='3177790'>Make
  sure they are stored contiguously.</span> </p><p><span m='3187060'>I can do
  that because when I sort each column in one scan,</span> <span m='3191760'>I
  can have a second scan which is the output, which</span> <span m='3194250'>is
  the array of medians.</span> </p><p><span m='3196360'>So as I'm scanning
  through the input,</span> <span m='3197960'>I'm going to output the
  median.</span> </p><p><span m='3199290'>It's going to be 1/5 the size.</span>
  </p><p><span m='3201059'>Then I've got all the medians nicely stored</span>
  <span m='3202850'>in a contiguous array.</span> </p><p><span m='3205070'>So
  with order-one parallel scans,</span> <span m='3207430'>same time here, this
  is actually a legitimate recursive call.</span> </p><p><span m='3213810'>Then
  we partition.</span> </p><p><span m='3215120'>Partition, again, is a bunch of
  parallel scans, I think, three.</span> </p><p><span m='3222920'>You've got one
  reading scan, which</span> <span m='3224640'>is you're reading through the
  array,</span> <span m='3226190'>and you've got to writing scans.</span>
  </p><p><span m='3227380'>You're writing out the elements less than or equal to
  x,</span> <span m='3229420'>and you're writing out the elements greater than
  x.</span> </p><p><span m='3231630'>But again, all of those are scans.</span>
  </p><p><span m='3233050'>You're always writing the next element right</span>
  <span m='3235120'>after the previous one.</span> </p><p><span m='3236460'>So
  if you already have that block in memory</span> <span m='3238350'>and if you
  assume that the number of blocks in cache</span> <span m='3241750'>is at least
  three, then three parallel scans is fine.</span> </p><p><span m='3246910'>It's
  different from the CLRS partition algorithm.</span> </p><p><span
  m='3249190'>That one was fancy to be in place.</span> </p><p><span
  m='3251260'>We're not trying to be in place or fancy at all.</span>
  </p><p><span m='3253720'>Let's just do it with a bunch of scans.</span>
  </p><p><span m='3256310'>So now we have two arrays-- the element less than
  x,</span> <span m='3258524'>the elements greater than x.</span> </p><p><span
  m='3259690'>Then we recurse on one of them, and those elements</span> <span
  m='3262070'>are consecutive already, so good.</span> </p><p><span
  m='3264260'>This is a regular recursive call.</span> </p><p><span
  m='3266630'>Again, we're maintaining the variant</span> <span m='3268320'>that
  the array is stored contiguously.</span> </p><p><span m='3272350'>And by the
  old analysis, that array is sized at most 7/10 N.</span> </p><p><span
  m='3277430'>So I get a new recurrence, which is MT of N</span> <span
  m='3281490'>is MT of N over 5 plus MT-- this analysis feels very
  "empty--"</span> <span m='3291090'>plus N over B-- sorry, bad joke-- N over B
  plus 1.</span> </p><p><span m='3297150'>So basically the same recurrence, but
  now N over B</span> <span m='3301010'>plus 1 for what we're doing here.</span>
  </p><p><span m='3303955'>But I had to change the algorithm</span> <span
  m='3305330'>a little bit for this recurrence to be correct,</span> <span
  m='3307970'>for it to correctly reflect the number of memory transfers.</span>
  </p><p><span m='3310430'>Now all we need to do is solve the recurrence.</span>
  </p><p><span m='3313920'>And actually, in some sense, more importantly,</span>
  <span m='3318100'>we need to figure out what the base case is.</span>
  </p><p><span m='3320520'>Because we could say, all right, here's the usual
  base case.</span> </p><p><span m='3325630'>If I have a constant-sized
  problem,</span> <span m='3327170'>well, that's going to be constant.</span>
  </p><p><span m='3329140'>This is our base case for every recurrence we've ever
  done.</span> </p><p><span m='3332260'>And that's enough usually.</span>
  </p><p><span m='3334220'>It's going to give us a really bad answer
  here.</span> </p><p><span m='3336900'>So let's go off to the side here and
  solve that recurrence.</span> </p><p><span m='3361060'>So if that's my base
  case, well, in particular-- so</span> <span m='3365534'>this is some recursion
  tree.</span> </p><p><span m='3366700'>It's very uneven, so it's kind of
  annoying to draw.</span> </p><p><span m='3369650'>But what I know with this
  base case,</span> <span m='3373500'>this overall MT event is going to at least
  the number</span> <span m='3377160'>of leaves in the recursion tree.</span>
  </p><p><span m='3379880'>So let's say MT of N is at least L</span> <span
  m='3382955'>of N, number of leaves in the recursion.</span> </p><p><span
  m='3389300'>So this is really if I run the algorithm,</span> <span
  m='3391520'>how many base cases of constant size do I get?</span> </p><p><span
  m='3395630'>And that satisfies-- so it's not obvious what that is.</span>
  </p><p><span m='3406050'>There's no plus here.</span> </p><p><span
  m='3407199'>Number of leaves is just how many leaves are over here,</span>
  <span m='3409490'>how many leaves are over here, and L of 1 equals 1,
  say,</span> <span m='3412560'>or some constant equals constant.</span>
  </p><p><span m='3415120'>I happen to know, because I saw lots of
  recurrences,</span> <span m='3419440'>this solves to some N to the
  alpha.</span> </p><p><span m='3423260'>I claim that L of N is N to the alpha
  for some constant alpha.</span> </p><p><span m='3428730'>Why?</span>
  </p><p><span m='3429440'>I'll just prove that it works.</span> </p><p><span
  m='3431650'>So this is now N over 5 to the alpha,</span> <span m='3436250'>and
  this is 7/10 N to the alpha.</span> </p><p><span m='3439950'>If it's going to
  work, this recurrence should be satisfied.</span> </p><p><span m='3444640'>And
  now, if you look at this equation,</span> <span m='3446830'>there's a lot of N
  to the alphas, and they all cancel.</span> </p><p><span m='3450080'>So I get 1
  equals 1/5 to the alpha plus 7/10 to the alpha.</span> </p><p><span
  m='3457305'>It's confusing because I was just</span> <span
  m='3458680'>watching the TV show Alphas, but no relation.</span> </p><p><span
  m='3462930'>So this is now something purely in terms of alpha.</span>
  </p><p><span m='3465370'>You just need to check that there is a real
  solution.</span> </p><p><span m='3467580'>There is one.</span> </p><p><span
  m='3468440'>You have to plug it into Wolfram Alpha or something,</span> <span
  m='3471630'>no pun intended.</span> </p><p><span m='3473000'>Wow, they're just
  coming out today.</span> </p><p><span m='3475967'>And then alpha is... next
  page...</span> </p><p><span m='3478947'>I can't do this by hand.</span>
  </p><p><span m='3481947'>Something like .83978.</span> </p><p><span
  m='3488207'>So we get L of N is say at least N to the 0.8th bigger.</span>
  </p><p><span m='3495487'>It's sublinear and that was enough when we cared
  about time</span> <span m='3501247'>but now it's bad news because N over
  B...</span> </p><p><span m='3503687'>our goal was to get N over B+1.</span>
  </p><p><span m='3509087'>If B is huge, if B is bigger than N to the
  0.2,</span> <span m='3513507'>then we are not achieving this bound.</span>
  </p><p><span m='3516107'>Right. We are always are paying at least N to the
  0.8.</span> </p><p><span m='3518947'>For example B is roughly N. We are way
  off!</span> </p><p><span m='3523247'>But that's because we used the wrong base
  case.</span> </p><p><span m='3525247'>Turns out if you use a better base case,
  things just work.</span> </p><p><span m='3529360'>So let's do that. I think
  its going to be smaller.</span> </p><p><span m='3533940'>So... the next
  base... I mean...</span> </p><p><span m='3536900'>When you are doing cache
  full release analysis you never use this base case.</span> </p><p><span
  m='3539760'>The first one you should think about is this one.</span>
  </p><p><span m='3543100'>If you have a problem of size that fits in a constant
  number of blocks.</span> </p><p><span m='3546320'>Well of course that's going
  to take... once they are read into the cache,</span> <span m='3550720'>you are
  not going to pay anything.</span> </p><p><span m='3552100'>How long does it
  take to read a constant number of blocks into cache?</span> </p><p><span
  m='3554940'>Constant number of memory transfers.</span> </p><p><span
  m='3556940'>Okay, this is obviously a strictly better base case than this
  one.</span> </p><p><span m='3560240'>Because we have the same thing on the
  right hand side as a constant</span> <span m='3564240'>but we've solved a
  larger problem.</span> </p><p><span m='3566240'>So clearly you should cut
  here, instead of there.</span> </p><p><span m='3569600'>Then the number of
  leaves</span> <span m='3572740'>in this recursion...</span> </p><p><span
  m='3574740'>So same recurrence- different base case.</span> </p><p><span
  m='3579100'>So we'd stop recursing conceptually in the analysis, the algorithm
  goes all the way down,</span> <span m='3582980'>but in the analysis we stop
  recursing when we reach a problem of size B.</span> </p><p><span
  m='3586940'>The number of leaves in that new recursion tree will be</span>
  <span m='3592440'>N over B to the alpha.</span> </p><p><span
  m='3595900'>That's good! That's smaller than N over B.</span> </p><p><span
  m='3599780'>OK, now I'm going to wave my hands a little bit</span> <span
  m='3602380'>and say, MT of N is order N over B plus 1.</span> </p><p><span
  m='3610780'>I guess to do that, you want to prove it</span> <span
  m='3613090'>the same way we did before when we solved this recurrence,</span>
  <span m='3616390'>which is by substitution.</span> </p><p><span
  m='3617770'>You assume this is true, you plug it in,</span> <span
  m='3619900'>verify it can actually be done with some constants.</span>
  </p><p><span m='3622750'>The intuition of what's going on is, in general, this
  recurrence</span> <span m='3625750'>is dominated by the root.</span>
  </p><p><span m='3627550'>The root cost for this recursion is N over B plus
  1.</span> </p><p><span m='3631759'>So this is the root cost.</span>
  </p><p><span m='3632800'>I claim that, up to constant factors,</span> <span
  m='3634630'>that is the overall cost.</span> </p><p><span m='3635920'>Roughly
  because, as you go down the recursion tree,</span> <span m='3638440'>the cost
  is decreasing geometrically.</span> </p><p><span m='3641431'>But that's not
  obvious for this recurrence</span> <span m='3643180'>because it's so
  uneven.</span> </p><p><span m='3644694'>But it's kind of like the master
  method, a little fancier.</span> </p><p><span m='3647110'>Intuitively, this
  should be obvious.</span> </p><p><span m='3652230'>There's the root cost and
  then there's the other ones.</span> </p><p><span m='3654490'>But to actually
  prove it, you should do substitution method.</span> </p><p><span m='3656990'>I
  want to go to more interesting algorithms instead,</span> <span
  m='3662320'>but any questions before we continue?</span> </p><p><span
  m='3667610'>All right.</span> </p><p><span m='3668150'>So next algorithm, that
  was median, now</span> <span m='3671390'>we're going to do matrix
  multiplication via divide</span> <span m='3678670'>and conquer.</span>
  </p><p><span m='3692620'>So what we just saw was an example</span> <span
  m='3694060'>where, in divide and conquer, in the analysis</span> <span
  m='3697464'>we think about the case where things fit</span> <span
  m='3699130'>in a constant number of blocks.</span> </p><p><span
  m='3700810'>That was sort of case one.</span> </p><p><span m='3702280'>The
  next example, matrix multiplication,</span> <span m='3704372'>will be the
  other case.</span> </p><p><span m='3705330'>So you get to see both
  types.</span> </p><p><span m='3713650'>So multiplying matrices,
  something</span> <span m='3715890'>we've done many times.</span> </p><p><span
  m='3717270'>For example, in the FFT lecture and in the Strassen's</span> <span
  m='3721020'>algorithm, just to remind you.</span> </p><p><span m='3723764'>I'm
  just thinking about the square case,</span> <span m='3725430'>although this
  generalizes.</span> </p><p><span m='3727860'>We have two square matrices, N by
  N.</span> </p><p><span m='3736140'>Normally, I would say C equals A times
  B,</span> <span m='3738420'>but I realized we used B for block side.</span>
  </p><p><span m='3740970'>So this is going to be s equals x times y.</span>
  </p><p><span m='3746125'>Hopefully that doesn't conflict with anything else,
  but no B's.</span> </p><p><span m='3751020'>All right, so standard
  matrix.</span> </p><p><span m='3753510'>Let's start with the standard
  algorithm.</span> </p><p><span m='3762090'>Let's start by analyzing
  that.</span> </p><p><span m='3763920'>Because if you're reasonably
  clever,</span> <span m='3766770'>this the standard algorithm is not so
  bad.</span> </p><p><span m='3770740'>So in general, this won't matter too
  much.</span> </p><p><span m='3774010'>Let's suppose we're doing z
  row-by-row,</span> <span m='3777150'>and let's say we're currently computing
  this product cell.</span> </p><p><span m='3783150'>So that product cell is the
  dot product</span> <span m='3786780'>this ZIJ here is the dot product of this
  row with this column.</span> </p><p><span m='3795410'>How do I compute dot
  products?</span> </p><p><span m='3797370'>Two parallel scans.</span>
  </p><p><span m='3798191'>Right?</span> </p><p><span m='3798690'>I scan through
  this row and I parallel</span> <span m='3800520'>scan through this
  column.</span> </p><p><span m='3802020'>Now, it depends the order in which you
  store x and y,</span> <span m='3806160'>but let's suppose we can store x in
  row major order,</span> <span m='3810000'>meaning row-by-row, and we store y
  in column major order,</span> <span m='3813240'>meaning
  column-by-column.</span> </p><p><span m='3814530'>Then this will be an
  honest-to-goodness scan</span> <span m='3816390'>of a contiguous array.</span>
  </p><p><span m='3817560'>Again, the order we store things in memory really
  matters.</span> </p><p><span m='3821550'>So let's make our life ideal.</span>
  </p><p><span m='3822990'>Let's say that this is row-by-row</span> <span
  m='3828120'>and this one is column-by-column, then hey,</span> <span
  m='3832740'>this is two parallel scans so order N over B</span> <span
  m='3835500'>to compute this cell.</span> </p><p><span m='3838300'>OK, I claim
  that computing ZIJ costs</span> <span m='3847500'>N over B, so maybe plus
  1.</span> </p><p><span m='3852360'>Again, these are end-by-end matrices, so
  total size N</span> <span m='3855240'>squared, which means the total cost is
  what?</span> </p><p><span m='3864480'>N cubed over B plus N squared, I
  guess.</span> </p><p><span m='3870480'>Seems pretty good.</span> </p><p><span
  m='3871350'>I mean, we had a running time of N cubed before</span> <span
  m='3874200'>and we divided by B. How could you possibly do better?</span>
  </p><p><span m='3877470'>Well, by being smarter.</span> </p><p><span
  m='3880140'>This is not optimal, you can do better.</span> </p><p><span
  m='3886500'>It's not obvious, but let me just spend</span> <span m='3890702'>a
  little more time convincing you this is the right answer.</span> </p><p><span
  m='3893160'>Not only is this big O, but for appropriate settings--</span>
  <span m='3896607'>in the worst case this is going to be theta.</span>
  </p><p><span m='3901110'>Because if you think of the order in which we're--
  see,</span> <span m='3903800'>we look at these rows several times.</span>
  </p><p><span m='3906680'>And if you look at, when I compute this cell and this
  cell</span> <span m='3909330'>and this cell of the z matrix, or the product
  matrix,</span> <span m='3912420'>each of them uses the same row of x.</span>
  </p><p><span m='3915750'>So maybe you could reuse that.</span> </p><p><span
  m='3918300'>You could reuse that row of x.</span> </p><p><span
  m='3921300'>That might actually be free, depending</span> <span m='3923550'>on
  how B and N relate.</span> </p><p><span m='3924910'>But the columns of y,
  those are different every time.</span> </p><p><span m='3930930'>When I compute
  this one, I use the first column</span> <span m='3932920'>of y, when I compute
  this one I use the second column of y.</span> </p><p><span m='3935760'>Unless
  the cache is so big that it</span> <span m='3938010'>can store all of y, which
  is like,</span> <span m='3940380'>you could store the entire problem in
  cache</span> <span m='3942779'>that's unrealistic.</span> </p><p><span
  m='3944460'>So unless M is bigger than N squared,</span> <span m='3948900'>in
  this algorithm at least, you have to read a new column of y</span> <span
  m='3952290'>every single time.</span> </p><p><span m='3953970'>So that's why
  it's theta N over B plus 1.</span> </p><p><span m='3955960'>You need to spend
  N over B, assuming</span> <span m='3960430'>M is less than N squared.</span>
  </p><p><span m='3966160'>OK.</span> </p><p><span m='3966660'>And I claim this
  is not the best you can do because we're</span> <span m='3969120'>going to do
  better.</span> </p><p><span m='3970380'>And we're going to do better by divide
  and conquer.</span> </p><p><span m='3988490'>Now, you've already seen divide
  and conquer used</span> <span m='3990540'>for matrix multiplication to get
  Strassen's algorithm,</span> <span m='3996930'>and the idea there is to use
  blocks.</span> </p><p><span m='4004100'>So this is sort of an algorithm you've
  already seen.</span> </p><p><span m='4006740'>I'm going to divide the matrix z
  into N over 2</span> <span m='4015080'>by N over 2 sub-matrices.</span>
  </p><p><span m='4017900'>Each of these ZIJs is an N over 2 by N over 2
  matrix.</span> </p><p><span m='4022190'>And I do the same thing for x and
  y.</span> </p><p><span m='4035400'>Numbers are right.</span> </p><p><span
  m='4036770'>1, 2, y, 2, 1, and so on.</span> </p><p><span m='4039190'>And you
  can write this out explicitly.</span> </p><p><span m='4042190'>I prefer not to
  do all of it, but let's do one of them.</span> </p><p><span m='4045345'>You
  can just think of these as two-by-two matrices,</span> <span
  m='4047470'>because matrix multiplication is associative</span> <span
  m='4049570'>and good things happen.</span> </p><p><span m='4050740'>I can just
  take these two elements--</span> <span m='4052450'>but they're actually
  matrices, sorry.</span> </p><p><span m='4054640'>I might take these two and
  dot product with these two.</span> </p><p><span m='4058192'>And I get x1,1
  y1,1 plus x1,2 y2,1,</span> <span m='4066790'>and that's what I should set
  z1,1 to.</span> </p><p><span m='4070220'>So this is a formula, but it's also a
  recursive algorithm.</span> </p><p><span m='4074020'>It says, if I want to
  compute z I'm going to say,</span> <span m='4077470'>well, there are four
  sub-problems.</span> </p><p><span m='4079510'>The first one is to compute
  z1,1,</span> <span m='4081399'>and I'm going to do that by recursively
  computing</span> <span m='4083440'>the product of x1,1 and y1,1, recursively
  computing</span> <span m='4086500'>the product of x1,2 y2,1 and then adding
  them together.</span> </p><p><span m='4090034'>This is not recursive.</span>
  </p><p><span m='4090950'>Addition is easy.</span> </p><p><span
  m='4093081'>OK.</span> </p><p><span m='4093580'>And there's two products here,
  two products here,</span> <span m='4095800'>two products here, two products
  here,</span> <span m='4097341'>a total of eight products, so we're</span>
  <span m='4098830'>going to have eight recursive calls in size N over 2.</span>
  </p><p><span m='4105055'>If we look at the number of memory transfers,</span>
  <span m='4106930'>this is 8 times recursive call on N over 2 by N</span> <span
  m='4111689'>over 2 sub-matrices plus the cost of addition.</span> </p><p><span
  m='4117550'>And I claim the cost of addition is at most N squared over
  B</span> <span m='4121300'>plus 1, because addition is basically parallel
  scans.</span> </p><p><span m='4126461'>I can scan through x, scan through
  y.</span> </p><p><span m='4130390'>As long as they're stored in the same
  order,</span> <span m='4132609'>I just am adding them element by
  element,</span> <span m='4135350'>and there's a third scan, which is writing
  out the z vector</span> <span m='4139960'>once things are linearized.</span>
  </p><p><span m='4142500'>Now, for this to work, for this to be a true
  recursion,</span> <span m='4146100'>I need that, say, x1,1 and y1,1 are stored
  as contiguous things</span> <span m='4152279'>in memory.</span> </p><p><span
  m='4153690'>So this means that the layout of a matrix,</span> <span
  m='4159809'>let's consider the matrix z, is going to be like the
  following.</span> </p><p><span m='4164430'>I'm going to recursively lay out
  1,1-- so when I say lay out,</span> <span m='4167370'>I mean what order do I
  store the elements in memory?</span> </p><p><span m='4169920'>What order do I
  store the cells in memory?</span> </p><p><span m='4172050'>And what I'm going
  to say is, recursively lay out</span> <span m='4176370'>the pieces-- there's
  four pieces-- recursively call</span> <span m='4180859'>layout of those and
  then concatenate them together.</span> </p><p><span m='4186282'>That's my
  layout.</span> </p><p><span m='4186990'>So I'm going to store all of these
  items,</span> <span m='4188430'>then I'm going to store all of these
  items,</span> <span m='4190220'>and then all of these items, then all these
  items.</span> </p><p><span m='4192510'>How do I store these items, in what
  order?</span> </p><p><span m='4195480'>Recursively.</span> </p><p><span
  m='4196107'>So I'm going to divide them like this,</span> <span
  m='4197690'>store these before these before these before these,</span> <span
  m='4199650'>how do I store these?</span> </p><p><span
  m='4200640'>Recursively.</span> </p><p><span m='4201440'>OK, same
  recursion.</span> </p><p><span m='4202455'>So it's a really weird order,
  it's</span> <span m='4204510'>a divide and conquer order.</span> </p><p><span
  m='4206820'>There's only four things here.</span> </p><p><span m='4208380'>In
  what order should I combine the four things?</span> </p><p><span
  m='4210510'>Doesn't matter.</span> </p><p><span m='4211716'>All that matters
  is that this is consecutive,</span> <span m='4213590'>this is consecutive, and
  this is consecutive,</span> <span m='4215730'>so that when I recurse, I'm
  recursing on consecutive chunks</span> <span m='4218530'>of memory.</span>
  </p><p><span m='4219030'>Otherwise the analysis just won't work.</span>
  </p><p><span m='4221070'>So for this to be right, got to have this
  layout.</span> </p><p><span m='4224690'>OK.</span> </p><p><span
  m='4226500'>Now we just need to solve the recurrence, and we're done.</span>
  </p><p><span m='4232110'>I already told you, the base case we're going to
  use</span> <span m='4234960'>is this one.</span> </p><p><span
  m='4235860'>We're going to use this one because it's</span> <span
  m='4237526'>stronger and better, and we'll need it, in this case,</span> <span
  m='4240360'>to get a better analysis.</span> </p><p><span m='4243442'>You
  could solve it using the weaker base cases,</span> <span m='4245400'>you'll
  get larger numbers.</span> </p><p><span m='4247330'>But if you use the
  strongest base case, MT of-- it's</span> <span m='4251309'>not M. Got to be a
  little careful.</span> </p><p><span m='4254180'>Because N here is actually
  just one side length.</span> </p><p><span m='4256980'>This is an end-by-end
  matrix, so the total size</span> <span m='4260445'>is N squared-- actually the
  total size is 3N squared,</span> <span m='4264720'>so this is going to be the
  square root of M over 3,</span> <span m='4269460'>at some constant, times the
  square root of N. It actually</span> <span m='4272880'>doesn't matter what the
  constant is.</span> </p><p><span m='4274510'>But this is the size of-- this
  is</span> <span m='4276240'>the value of N for which all three matrices
  will</span> <span m='4278400'>fit in cache.</span> </p><p><span m='4280890'>So
  I claim we know this costs at most M over B memory transfers,</span> <span
  m='4287309'>because we were kind of stroke here because we know</span> <span
  m='4293550'>that all of these guys fit in cache</span> <span m='4295110'>and
  because we know that they can store it consecutively</span> <span
  m='4297540'>in memory, well three consecutive chunks.</span> </p><p><span
  m='4300840'>Once, no matter what I do, there are only M over B blocks
  there,</span> <span m='4305940'>and so at worst I read them all in.</span>
  </p><p><span m='4307660'>But once the cache is filled with them,</span> <span
  m='4310470'>for the duration of this recursion,</span> <span m='4312540'>I
  won't be reading any other blocks,</span> <span m='4314100'>and so the cache
  will just stay full with the problem.</span> </p><p><span m='4316990'>And so I
  never pay more than this.</span> </p><p><span m='4319440'>So that's the base
  case.</span> </p><p><span m='4320830'>Easy, but you have to think about it for
  a second.</span> </p><p><span m='4325140'>Cool.</span> </p><p><span
  m='4325650'>Now we have a recurrence and a base case,</span> <span
  m='4328640'>and now we have a good old fashioned recursion tree.</span>
  </p><p><span m='4331210'>This one I can actually draw, because it's--
  well,</span> <span m='4333809'>partly because it's nice and uniform.</span>
  </p><p><span m='4337120'>It just explodes rather fast.</span> </p><p><span
  m='4339870'>So at the top we have a cost of N squared over B plus 1,</span>
  <span m='4345960'>and we have eight recursive calls.</span> </p><p><span
  m='4348750'>And the recursive calls are to something in size</span> <span
  m='4351960'>N over 2 squared over B, also known as N squared over 4B.</span>
  </p><p><span m='4359970'>OK, so if I add up everything on this level,</span>
  <span m='4362170'>I get N squared over B, and if I add up everything on this
  level</span> <span m='4366180'>I'm going to get 8 times N over 4-- is that
  right?</span> </p><p><span m='4373200'>Yeah.</span> </p><p><span
  m='4373740'>So 2 times N squared over B.</span> </p><p><span
  m='4378120'>OK.</span> </p><p><span m='4378870'>I did that in order to verify
  that the cost per level</span> <span m='4382170'>is increasing geometrically,
  so all that will matter</span> <span m='4386430'>is the leaf level.</span>
  </p><p><span m='4388770'>This is the proof of the master theorem.</span>
  </p><p><span m='4391520'>When things are doubling at every step--</span> <span
  m='4393300'>and this was just a special case,</span> <span m='4395059'>but
  every level would look the same-- every level</span> <span m='4398529'>of
  recursion, if you add them all up,</span> <span m='4400070'>you're getting
  twice as much as you had at the previous level.</span> </p><p><span
  m='4402653'>So all that will matter is the leaf level.</span> </p><p><span
  m='4406150'>OK, the leaf level.</span> </p><p><span m='4409430'>Actually,
  maybe I'll do it over here.</span> </p><p><span m='4412610'>First question is
  how many leaves are there?</span> </p><p><span m='4414800'>The leaves are this
  thing.</span> </p><p><span m='4417900'>So the way I would think about this is,
  because everything</span> <span m='4421300'>is nice and uniform, is 8 to the
  power of the number of levels.</span> </p><p><span m='4424499'>What's the
  number of levels?</span> </p><p><span m='4430790'>Well, we're dividing by 2
  each time,</span> <span m='4433320'>so it's going to be log of
  something,</span> <span m='4436559'>but it's no longer log N because we're
  stopping early.</span> </p><p><span m='4440130'>We're stopping when N reaches
  this value.</span> </p><p><span m='4443450'>So it turns out that is N divided
  by that value.</span> </p><p><span m='4450856'>This is, how many times do I
  have</span> <span m='4452230'>to multiply by 2 before I get to this,
  which</span> <span m='4454775'>is the same thing as how many times do I have
  to divide N</span> <span m='4457150'>by 2 before I get that?</span>
  </p><p><span m='4459636'>Think about it.</span> </p><p><span m='4460780'>OK,
  but 8 to the log.</span> </p><p><span m='4462320'>This is 2 to the 3 times
  log.</span> </p><p><span m='4464980'>2 to the log is just the thing.</span>
  </p><p><span m='4467690'>So this is N over root M over B-- so many
  overs--</span> <span m='4476830'>to the third power.</span> </p><p><span
  m='4479017'>OK, this is starting to look familiar.</span> </p><p><span
  m='4480600'>This is N cubed, that should appear somewhere,</span> <span
  m='4486080'>divided by square root of M over B.</span> </p><p><span
  m='4488480'>This is the number of leaves.</span> </p><p><span m='4490090'>Now,
  for each leaf we're paying this cost,</span> <span m='4495880'>so the overall
  cost of MT of N is going to be this times this.</span> </p><p><span
  m='4503020'>So let's do that and simplify.</span> </p><p><span m='4511930'>So
  MT of N is going to be big O, because we're taking the leaf</span> <span
  m='4518062'>level but there's some other things that's just</span> <span
  m='4520020'>going to lose us a factor of 2.</span> </p><p><span m='4523530'>We
  have this thing multiplied by this thing.</span> </p><p><span m='4526175'>So
  we've got N cubed over square root of M over B</span> <span m='4534220'>times
  M over B.</span> </p><p><span m='4540798'>AUDIENCE: You--</span> <span
  m='4542193'>PROFESSOR: I made a mistake.</span> </p><p><span m='4543360'>Yea,
  thank you.</span> </p><p><span m='4544720'>This was supposed to be
  cubed.</span> </p><p><span m='4545970'>So this was M over B to the 1/2, so now
  we have,</span> <span m='4549600'>down here, M over B to the 3/2.</span>
  </p><p><span m='4552720'>Thank you, thought that looked weird.</span>
  </p><p><span m='4559850'>All right.</span> </p><p><span m='4561890'>M over B
  to the 3/2.</span> </p><p><span m='4566531'>OK.</span> </p><p><span
  m='4567031'>AUDIENCE: [INAUDIBLE]</span> <span m='4577170'>PROFESSOR:
  Yeah.</span> </p><p><span m='4578430'>What was I doing here?</span>
  </p><p><span m='4580180'>This is supposed to be M over 3.</span> </p><p><span
  m='4581630'>I was not missing a stroke, thank you.</span> </p><p><span
  m='4583605'>M over 3, this is supposed to be M over 3.</span> </p><p><span
  m='4587824'>Wow.</span> </p><p><span m='4589240'>OK, so this is M over
  3.</span> </p><p><span m='4592260'>I'm just going to drop the-- well, I'll put
  it here.</span> </p><p><span m='4594780'>But then I'm just going to write
  theta</span> <span m='4597340'>so I can forget about the 3, because that's
  just</span> <span m='4599670'>a square root of 3 factor.</span> </p><p><span
  m='4601360'>So now this is going to be M to the 3/2.</span> </p><p><span
  m='4607405'>That makes me much happier.</span> </p><p><span m='4610546'>Did I
  get it right this time?</span> </p><p><span m='4613410'>Let's
  double-check.</span> </p><p><span m='4614430'>So this is square root of M to
  the 3 power,</span> <span m='4617910'>so that's M to the 1/2 cubed M to the
  3/2.</span> </p><p><span m='4620840'>I think that's good, this base case was
  square root of M.</span> </p><p><span m='4624850'>OK, get it right.</span>
  </p><p><span m='4627929'>So now this is M to the 3/2.</span> </p><p><span
  m='4630282'>There is a square root that's going</span> <span m='4631740'>to
  come back, there's M to the 3/2 and there's an M upstairs,</span> <span
  m='4636270'>so the one cancels.</span> </p><p><span m='4638270'>We're going to
  be left with N cubed over square root of M</span> <span m='4643439'>times B.
  OK.</span> </p><p><span m='4646112'>There was a lower order term because I
  dropped this plus 1,</span> <span m='4648570'>but let's not worry about that
  right now.</span> </p><p><span m='4651180'>Here we had N cubed divided by B,
  that</span> <span m='4653730'>was the standard algorithm.</span> </p><p><span
  m='4655200'>Now we've got M cubed divided by B divided by square root of
  M.</span> </p><p><span m='4659160'>That's big.</span> </p><p><span
  m='4660635'>I mean, this is basically, you're</span> <span
  m='4662010'>dividing by-- well, square root of your cache size.</span>
  </p><p><span m='4665450'>Wow.</span> </p><p><span m='4666030'>So who knows how
  big that is, but say,</span> <span m='4669230'>between memory and disk, we're
  talking gigabytes.</span> </p><p><span m='4672430'>So this is like
  billions.</span> </p><p><span m='4674330'>Square root of a billion is still
  pretty big,</span> <span m='4677450'>like 10 to 100,000, so this is a huge
  amount faster</span> <span m='4681324'>than the standard algorithm.</span>
  </p><p><span m='4682490'>You can do way better than scans.</span> </p><p><span
  m='4684920'>Basically because we're reusing the same rows and columns</span>
  <span m='4687650'>over and over.</span> </p><p><span m='4688727'>Now, this is
  standard matrix multiplication.</span> </p><p><span m='4690559'>You might ask,
  what about Strassen's algorithm?</span> </p><p><span m='4692610'>Well, same
  thing works.</span> </p><p><span m='4693770'>You can do the same analysis
  Strassen, of course.</span> </p><p><span m='4695960'>You get a similar
  improvement over Strassen.</span> </p><p><span m='4699020'>You can do this for
  non-square matrices and all</span> <span m='4701960'>those good things.</span>
  </p><p><span m='4703580'>And one minute left.</span> </p><p><span
  m='4705170'>And it's going to be enough, I think,</span> <span m='4707100'>to
  cover LRU block replacement.</span> </p><p><span m='4711330'>So here's what I
  want to say about LRU block replacement.</span> </p><p><span m='4719604'>So in
  the beginning, we said the model is LRU,</span> <span m='4721520'>or it could
  have been FIFO.</span> </p><p><span m='4724670'>Remember that?</span>
  </p><p><span m='4725870'>And this algorithm will work just fine from an
  LRU</span> <span m='4728210'>perspective or a FIFO perspective</span> <span
  m='4729620'>if you think about it, but how do</span> <span m='4731570'>we know
  that LRU is as good as anything?</span> </p><p><span m='4733700'>I claim, if
  you look at some sequence of block axises--</span> <span m='4738790'>so
  suppose you know what B is-- and you count,</span> <span m='4741890'>for a
  cache of size M, how many memory transfers does LRU do,</span> <span
  m='4747020'>it's going to be within a factor of 2 of the optimal.</span>
  </p><p><span m='4749930'>But not the optimal for a cache of size M,</span>
  <span m='4752780'>the optimal for a cache of size M over 2.</span>
  </p><p><span m='4755732'>This is a bit of a weird statement.</span>
  </p><p><span m='4757190'>I have a factor of 2 here and a factor of 2
  here.</span> </p><p><span m='4759950'>This is a cool idea called resource
  augmentation,</span> <span m='4767450'>fancy word for a simple idea.</span>
  </p><p><span m='4770380'>This we're used to.</span> </p><p><span
  m='4771200'>This is approximation algorithms.</span> </p><p><span
  m='4773370'>OK, but this is an approximation in cost.</span> </p><p><span
  m='4776090'>Here we're approximating the resources</span> <span
  m='4778040'>available to the algorithm.</span> </p><p><span m='4779240'>We're
  changing the machine model, dividing M by 2,</span> <span m='4782900'>and we
  get a nice result.</span> </p><p><span m='4786540'>Why is this OK?</span>
  </p><p><span m='4787670'>Because, if you look at a bound like this,</span>
  <span m='4789559'>if you change M by a factor of 2,</span> <span
  m='4791300'>it will not change the bound by more than a</span> <span
  m='4793130'>factor of square root of 2.</span> </p><p><span m='4794880'>So as
  long as you have at most, say,</span> <span m='4796910'>a linear or polynomial
  dependence on M,</span> <span m='4799670'>changing M by a constant factor will
  not</span> <span m='4801530'>change the overall running time of the
  cache</span> <span m='4803110'>for the previous algorithm.</span> </p><p><span
  m='4803690'>This is why we can assume it's LRU.</span> </p><p><span
  m='4805430'>The same is true for FIFO, it's probably</span> <span
  m='4807680'>true in expectation for random sequences.</span> </p><p><span
  m='4811660'>And I will leave it at that.</span> </p><p><span m='4816170'>If
  you want to see the-- do you want</span> <span m='4817670'>to see the proof of
  this theorem?</span> </p><p><span m='4822080'>Tomorrow?</span> </p><p><span
  m='4822680'>Or, Thursday?</span> </p><p><span m='4824120'>Yes.</span>
  </p><p><span m='4824620'>OK, we'll cover it on Thursday.</span> </p>
uid: 36de4aed40b6873c5a4130464bacc185
type: courses
layout: video
---
