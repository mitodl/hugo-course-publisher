---
about_this_resource_text: >-
  <p><strong>Description:</strong> In this lecture, Professor Devadas introduces
  divide-and-conquer algorithms and problems that can be solved using
  divide-and-conquer approaches.</p><p><strong>Instructor:</strong> Srinivas
  Devadas</p>
embedded_media:
  - id: 3Play-3PlayYouTubeid-Stream
    media_location: EzeYI7p9MjU
    parent_uid: 474792fc830ea3c02d11673904612c16
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: da19fe9ecd95a84d538ef70dc33322f4
  - id: Video-YouTube-Stream
    media_location: EzeYI7p9MjU
    parent_uid: 474792fc830ea3c02d11673904612c16
    title: Video-YouTube-Stream
    type: Video
    uid: ef4c5869d516ec775ada26528c02bac1
  - id: Video-iTunesU-MP4
    media_location: 'https://itunes.apple.com/us/itunes-u/id1081126744'
    parent_uid: 474792fc830ea3c02d11673904612c16
    title: Video-iTunes U-MP4
    type: Video
    uid: ade3582f68c0698afc4a4d8b80565e99
  - id: Video-InternetArchive-MP4
    media_location: 'https://archive.org/download/MIT6.046JS15/MIT6_046JS15_lec02_300k.mp4'
    parent_uid: 474792fc830ea3c02d11673904612c16
    title: Video-Internet Archive-MP4
    type: Video
    uid: 2fcd47178725fa09e1f7c88a75eb720f
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/EzeYI7p9MjU/default.jpg'
    parent_uid: 474792fc830ea3c02d11673904612c16
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 282e9a882543f3b03597c14127caea86
  - id: EzeYI7p9MjU.srt
    parent_uid: 474792fc830ea3c02d11673904612c16
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-046j-design-and-analysis-of-algorithms-spring-2015/lecture-videos/lecture-2-divide-conquer-convex-hull-median-finding/EzeYI7p9MjU.srt
    title: 3play caption file
    type: null
    uid: 6b1e15e5e745a16318c3ab298cdf097d
  - id: EzeYI7p9MjU.pdf
    parent_uid: 474792fc830ea3c02d11673904612c16
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-046j-design-and-analysis-of-algorithms-spring-2015/lecture-videos/lecture-2-divide-conquer-convex-hull-median-finding/EzeYI7p9MjU.pdf
    title: 3play pdf file
    type: null
    uid: 461c3f2a75384eaaffce53f66f153a50
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 474792fc830ea3c02d11673904612c16
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 2ae56a4d39d8f85d8847c6428fc605f2
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 474792fc830ea3c02d11673904612c16
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 51d447dc661d2f52db503ebeaf39ba9f
inline_embed_id: '58313170lecture2:divide&conquer:convexhull,medianfinding40406296'
parent_uid: 59a7a862feb85c8b52509910c07728e5
related_resources_text: ''
short_url: lecture-2-divide-conquer-convex-hull-median-finding
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-046j-design-and-analysis-of-algorithms-spring-2015/lecture-videos/lecture-2-divide-conquer-convex-hull-median-finding
title: 'Lecture 2: Divide & Conquer: Convex Hull, Median Finding'
transcript: >-
  <p><span m='89'>The following content is provided under a Creative Commons
  license. Your support will</span> <span m='4820'>help MIT OpenCourseWare
  continue to offer high quality educational resources for free.</span> <span
  m='10680'>To make a donation or view additional materials from hundreds of MIT
  courses,</span> <span m='15520'>visit MIT OpenCourseWare at
  ocw.mit.edu.</span> </p><p><span m='21320'>PROFESSOR: All right. Good morning,
  everyone. Let's get started. So we're going to start</span> <span
  m='29810'>6.046 in earnest today. We're going to start with our first module
  on divide and conquer.</span> </p><p><span m='38000'>You've all seen divide
  and conquer algorithms before. Merge sort is a classic divide and</span> <span
  m='44149'>conquer algorithm. I'm going to spend just a couple minutes talking
  about the paradigm,</span> <span m='50469'>give you a slightly more general
  setting than merge sort. And then we'll get into two really</span> <span
  m='55680'>cool divide and conquer problems in the sense that these are
  problems for which divide and</span> <span m='64059'>conquer works very well--
  mainly, convex hall and median finding.</span> </p><p><span m='70149'>So
  before I get started on the material, let me remind you that you should be
  signing up</span> <span m='76340'>for a recitation section on Stellar. And
  please do that even if you don't plan on attending</span> <span
  m='82779'>sections. Because we need that so we can assign your problem sets to
  be graded, OK?</span> </p><p><span m='90139'>So that's our way of partitioning
  problem sets as well. And then the other thing is</span> <span
  m='96310'>problem set one is going to go out today. And that it's a one week
  problem set.</span> <span m='102259'>All problem sets are going to be a week
  in duration. Please read these problem sets the</span> <span m='109479'>day
  that they come out. Spend 5, 10 minutes reading them.</span> </p><p><span
  m='114158'>Some things are going to look like they're magic, that they're--
  how could I possibly</span> <span m='119700'>prove this? If you think about it
  for a bit, it'll become obvious. We promise you that.</span> <span
  m='125959'>But get started early. Don't get started at 7:00 PM when we have
  11:59 PM deadline on</span> <span m='132459'>Thursday, all right? That four
  hours or five hours of time may not be enough to go from</span> <span
  m='139110'>magical to obvious, OK?</span> </p><p><span m='143150'>So let's get
  started with the paradigm associated with divide and conquer. It's just a
  beautiful</span> <span m='151930'>notion that you can break up the problem
  into smaller parts and somehow compose the solutions</span> <span
  m='161159'>to the smaller parts. And of course, the details are going to be
  what's important when we take</span> <span m='167689'>a particular problem
  instance.</span> </p><p><span m='170650'>But let's say we're given a problem
  of size n. We're going to divide it into a sub problems--</span> <span
  m='179900'>I'll put that in quotes so you know it's a symbol-- a sub problems
  of size n over b.</span> <span m='193459'>And here, a is an integer.</span>
  <span m='197319'>And a is going to be greater than or equal to 1. It could be
  two. It could be three.</span> <span m='202609'>It could be four.</span>
  </p><p><span m='203569'>This is the generalization I alluded to. And b does
  not have to be two or even an integer.</span> <span m='212549'>But it has to
  be strictly greater than one.</span> <span m='215400'>Otherwise, there's no
  notion of divide and conquer. You're not breaking things up into</span> <span
  m='220519'>smaller problems. So b should be strictly greater than one. So
  that's the general setting.</span> <span m='228549'>And then you'll solve each
  sub problem recursively. And the idea here is that once the sub
  problems</span> <span m='238379'>become really small, they become constant
  size, it's relatively easy to solve them.</span> <span m='246249'>You can just
  do exhaustive search.</span> </p><p><span m='248829'>If you have 10 elements
  and you're doing effectively a cubic search, well, 10 cubed is 1,000.
  That's</span> <span m='256738'>a constant. You're in great shape as long as
  the constants are small enough.</span> <span m='262449'>And so you're going to
  recurse until these problems get small. And then typically-- this</span> <span
  m='268849'>is not true for all divide and conquer approaches. But for most of
  them, and certainly the ones</span> <span m='275590'>we're going to cover
  today, the smarts is going to be in the combination step-- when</span> <span
  m='282370'>you combine these problems, the solutions of these sub problems,
  into the overall solution.</span> <span m='301960'>And so that's the
  story.</span> </p><p><span m='304310'>Typically, what happens in terms of
  efficiency is that you can write a recurrence that's</span> <span
  m='312530'>associated with this divide and conquer algorithm. And you say t of
  n, which is a running time,</span> <span m='322849'>for a problem of size n is
  going to be a times tfn over b-- and this is a recurrence-- plus</span> <span
  m='332879'>the work that you need to do for the merge operational or the
  combine. This is the same</span> <span m='341729'>as merge.</span> <span
  m='345639'>And so you get a recurrence. And you're not quite done yet in terms
  of the analysis. Because</span> <span m='353129'>once you have the recurrence,
  you do have to solve the recurrence. And it's usually</span> <span
  m='357159'>not that hard and certainly it's not going to be particularly
  difficult for the divide</span> <span m='361430'>and conquer examples that
  we're going to look, at least today.</span> </p><p><span m='366360'>But we
  also have this theorem that's called the master theorem that is essentially
  something</span> <span m='373270'>where you can fairly mechanically plug in
  the a's and the b's and whatever you have</span> <span m='381659'>there--
  maybe it's theta n, maybe it's theta n square-- and get the solution to the
  recurrence.</span> </p><p><span m='387199'>I'm actually not going to do that
  today. But you'll hear once again about the massive theorem</span> <span
  m='394419'>tomorrow in section. And it's a fairly straightforward template
  that you can use for most of the</span> <span m='402379'>divide and conquer
  examples we're going to look at in 046 with one exception that we'll</span>
  <span m='408280'>look at in median finding today that will simply give you the
  solution to the recurrence,</span> <span m='412949'>OK?</span> </p><p><span
  m='413919'>So you've see most of these things before. That's a little bit of
  setup. And so let's</span> <span m='418520'>dive right in into convex hull,
  which is my favorite problem when it comes to using divide</span> <span
  m='431080'>and conquer.</span> <span m='432620'>So convex hull, I got a little
  prop here which will save me from writing on the board and</span> <span
  m='439509'>hopefully be more understandable. But the idea here is that in this
  case, we have a</span> <span m='448330'>two dimensional problem with a bunch
  of points in a two dimensional plane. You can certainly</span> <span
  m='455830'>do convex hull for three dimensions, many dimensions. And convexity
  is something that</span> <span m='463460'>is a fundamental notion in
  optimization.</span> <span m='466280'>And maybe we'll get to that in 6046 in
  advanced topics, maybe not. But in the context of today's</span> <span
  m='472400'>lecture, what we're interested in doing is essentially finding an
  envelope or a hull</span> <span m='478729'>associated with a collection of
  points on a two dimensional plane. And this hull obviously</span> <span
  m='485490'>is going to be something, as you can guess, that encloses all of
  these points, OK?</span> </p><p><span m='494849'>So what I have here, if I
  make this string taut enough-- this is not working so well,</span> <span
  m='503250'>but I think you get the picture. All right, so that's not a convex
  hull. This is not a</span> <span m='515159'>convex hull for the reason that I
  have a bunch of points outside of the hull.</span> <span m='520419'>All right,
  so let me just-- that is a convex hull. And now if I start stretching like
  that</span> <span m='533120'>or like this or like that, that's still a convex
  hull, OK? So that's the game.</span> </p><p><span m='539940'>We have to find
  an algorithm. And we look at a couple of different ones that will find</span>
  <span m='548400'>all of these segments that are associated with this convex
  hull, OK? So this is a segment</span> <span m='554390'>that's part of the
  convex hull.</span> <span m='555790'>That's a segment that's part of the
  convex hull. If, in fact, I had something like this--</span> <span
  m='563570'>and this was stretched out-- because I have those two points
  outside the convex hull,</span> <span m='568710'>this may still be a segment
  that's part of the electronics hall but this one is not,</span> <span
  m='575970'>right? So that's-- the game here is to find these segments. So if
  you're going to working</span> <span m='581480'>with segments or tangents--
  they're going to be used synonymously-- all of the tangents</span> <span
  m='591340'>or segments associated with the entirety of the convex hull and we
  have to discover them.</span> <span m='596080'>And only input that we have is
  the set of pointx-- xiy coordinates.</span> </p><p><span m='601780'>And
  there's just a variety of algorithms that you can use to do this. The one that
  I wish</span> <span m='608200'>I had time to explain but I'll just mention is
  what's called a gift wrapping algorithm.</span> <span m='614330'>You might not
  have done this, but I guarantee you I said you probably have taken a
  misshapen</span> <span m='622070'>gift, right, and tried to wrap it in gift
  wrapping paper.</span> <span m='626200'>And when you're doing that, you're
  essentially-- if you're doing it right you're essentially</span> <span
  m='630250'>trying to find the convex hull of this three dimensional structure.
  You're trying to tighten</span> <span m='635090'>it up. You're trying to find
  the minimum amount of gift wrapping paper.</span> </p><p><span m='639750'>I'm
  not sure if you've ever thought about minimizing gift wrapping paper, but you
  should</span> <span m='643730'>have. And that's the convex hull of this three
  dimensional shape. But we'll stick to two</span> <span m='650030'>dimensions
  because we'll have to draw things on the board. So let me just spec this
  out</span> <span m='656710'>a bit.</span> <span m='657990'>I've been given
  endpoints in a plane. And those set of points are s, xi, yi such that</span>
  <span m='672910'>i equals 1, 2 to n. And we're just going to assume here, just
  to make things easy because</span> <span m='681200'>we don't want to have
  segments that are null or segments that are a little bit different</span>
  <span m='688610'>because they're discontinuous. But we're going to assume that
  no two have the same x-coordinate.</span> </p><p><span m='697270'>This is just
  a matter of convenience. And no two have the same y-coordinate. And then
  finally, no three in a line.</span> <span m='716020'>Because we want to be
  able to look at pairs of points and find these segments. And it</span> <span
  m='721840'>just gets kind of inconvenient. You have to do special cases if
  there of them are on a</span> <span m='728070'>line. And so the convex hull
  itself is the smallest polygon containing all points in</span> <span
  m='749700'>s. And we're going to call that ch of s-- convex hull of s.</span>
  </p><p><span m='756810'>STUDENT: Smallest convex polygon.</span> </p><p><span
  m='759440'>PROFESSOR: The smallest convex polygon-- thank you. And so just as
  an example on the</span> <span m='775520'>board, when you have something like
  this, you're going to have your convex hull being</span> <span
  m='782660'>that. This one is inside of it.</span> <span m='787690'>These two
  points are inside of it. And all the other ones form the hull. And so we
  might</span> <span m='793490'>have p, q, r, s, t, u. And v and x are inside of
  the hull. They're not part of the specification</span> <span m='805750'>of ch
  of s, which I haven't quite told you how we're going to specify that.</span>
  </p><p><span m='810000'>But the way you're going to specify that is simply by
  representing it as a sequence of</span> <span m='818290'>points that are on
  the boundary on the hull in clockwise order. And you can think of this</span>
  <span m='834390'>as being a doubly linked list in terms of the data structure
  that you'd use if you coded</span> <span m='840160'>this up. So in this case,
  it would be p to q to r to s.</span> <span m='851080'>You're going to start
  with t in this case. It's a doubly linked list. So you could
  conceivably</span> <span m='858800'>start with anything. But that's the
  representation of the convex hull.</span> <span m='866120'>And we're going to
  use clockwise just because we want to be clear on as to what order
  we're</span> <span m='873890'>enumerating these points. It's going to become
  important when we do the divide and conquer</span> <span m='878180'>algorithm.
  So let's say that we didn't care about divide and conquer just for the
  heck</span> <span m='886170'>of it and I gave you a bunch of points over
  here.</span> </p><p><span m='897610'>Can you think of a simple-- forget
  efficiency for just a couple of minutes. Can you think</span> <span
  m='907510'>of a simple algorithm that would generate the segments of the
  convex hull? For example,</span> <span m='918720'>I do not want to generate
  this segment vx.</span> </p><p><span m='921940'>If I think of a segment as
  being something that is defined by two points, then I don't</span> <span
  m='927890'>want to generate the segment vx because clearly the segment is not
  part of the convex hull.</span> <span m='932480'>But whereas the segment pq,
  qr, rs, et cetera, they're all part of the convex hull, right?</span> <span
  m='938820'>So what is the obvious brute force algorithm, forgetting
  efficiency, that given this set</span> <span m='946360'>of points will
  generate one by one the segments of the convex hull?</span> <span
  m='953670'>Anybody? Did you have your head up? No? Go ahead. Yep.</span>
  </p><p><span m='961550'>STUDENT: Draw the line and check how many other lines
  intersect with it.</span> </p><p><span m='966380'>PROFESSOR: Draw the line and
  check how many lines it intersects with.</span> </p><p><span
  m='969860'>STUDENT: Yeah.</span> <span m='971120'>PROFESSOR: Is there-- I
  think you got-- you draw the line. That's good, right?</span> </p><p><span
  m='975180'>STUDENT: [LAUGHS] AUDIENCE: [LAUGHING]</span> </p><p><span
  m='978470'>PROFESSOR: Well-- but you want to do a little more. Yeah, go
  ahead.</span> </p><p><span m='983670'>STUDENT: For every pair of points you
  see, make a half-plane and see where they complete</span> <span m='988110'>all
  of their other points. [INAUDIBLE]</span> </p><p><span m='991260'>PROFESSOR:
  Ah, so that's good. That's good. That's good.</span> <span m='993330'>All
  right, so the first person who breaks the ice here always gets a Frisbee.
  Sorry</span> <span m='1001420'>man. At least I only hit the lecturer-- no
  liability considerations here. OK, now I'm</span> <span m='1007180'>getting
  scared.</span> <span m='1009240'>Right, so I think there's a certain amount of
  when I throw this, am I going to choke</span> <span m='1015250'>or not, right?
  But it's going to get higher when one of you guys in the back answers a</span>
  <span m='1021450'>question. So you're exactly right.</span> <span
  m='1023860'>And you draw a line. And then you just look at it. And you look at
  the half plane.</span> <span m='1030128'>And if all the points are to one
  side, it is a segment of the convex hull. If they're</span> <span
  m='1037869'>not, it's not a segment-- beautiful. All right, are we done? Can
  we go and enjoy the good</span> <span m='1043029'>weather outside?</span>
  <span m='1044159'>No, we've got ways to go here. So this is not the segment
  whereas one-- let me draw</span> <span m='1051110'>that. I should draw these
  in a dotted way.</span> </p><p><span m='1056039'>This is not a segment. This
  is not a segment. This is a segment.</span> <span m='1061480'>And I violated
  my rule of these three not being in a straight line. So I'll move this</span>
  <span m='1065850'>over here. And then that's a segment and so on and so forth,
  OK? Right?</span> </p><p><span m='1071640'>STUDENT: It's no longer a side with
  the ones below it.</span> </p><p><span m='1073900'>PROFESSOR: I'm
  sorry?</span> </p><p><span m='1075700'>STUDENT: It would have to go directly
  to the bottom one from the left one.</span> </p><p><span
  m='1078580'>PROFESSOR: Oh, you're right. That's a good point. That's an
  excellent point.</span> <span m='1082139'>SO what happened here was when I
  moved that out-- exactly right. Thank you. This is good.</span> <span
  m='1088340'>So when I moved this out here, what happened was-- and I drew
  this-- well, this one here,</span> <span m='1096700'>my convex hull, changed.
  The problem specification changed on me. It was my fault. But then what</span>
  <span m='1103230'>would happen, of course, is as I move this, that would
  become the segment that was part</span> <span m='1108080'>of the convex hull,
  OK?</span> </p><p><span m='1110389'>So sorry to confuse people. But what we
  have here in terms of an algorithm, if I leave</span> <span m='1116240'>the
  points the same, works perfectly well. So let me just leave the points the
  same and</span> <span m='1123679'>just quickly recap, which is, I'm going to
  take a pair of points.</span> <span m='1128029'>And I'm going to draw-- and
  let me just draw this in a dotted fashion first. And I'm going</span> <span
  m='1134200'>to say that's the segment. And I'm going to take a look at that
  line and say this breaks</span> <span m='1138240'>up the plane into two half
  planes. Are all about points on one side?</span> <span m='1144779'>And if the
  answer is yes, I'm going to go ahead and, boom, say that is a segment
  of</span> <span m='1149799'>my convex hull. If the answers is no, like in this
  case, I'm going to drop that segment,</span> </p><p><span m='1156110'>OK? So
  now let's talk about complexity.</span> <span m='1159950'>Let's say that there
  are n points here. And how many segments do I have? I have O n square</span>
  <span m='1170000'>theta n square segments.</span> <span m='1171860'>And what
  is the complexity of the test? What is the complexity of the test that's
  associated</span> <span m='1178399'>with, once I've drawn the segments,
  deciding whether the segment is going to be a tangent</span> <span
  m='1183149'>which is part of the convex hull or not? What is the
  complexity?</span> </p><p><span m='1185490'>STUDENT: O n.</span> </p><p><span
  m='1186360'>PROFESSOR: O n-- exactly right. So on test complexity-- and so we
  got over theta n cubed</span> <span m='1199680'>complexity, OK? So it makes
  sense to do divide and conquer if you can do better than this.</span>
  </p><p><span m='1205059'>Because this is a really simple algorithm. The good
  news is we will be able to do better</span> <span m='1210230'>than that. And
  now that we have a particular algorithm-- I'm not quite ready to show
  you</span> <span m='1218990'>that yet.</span> <span m='1219700'>Now that we
  have a particular algorithm, we can think about how we can improve
  things.</span> <span m='1226590'>And of course we're going to use divide and
  conquer. So let's go ahead and do that. And</span> <span m='1234210'>so
  generally, the divide and conquer, as I mentioned before, in most cases, the
  division</span> <span m='1240909'>is pretty straightforward.</span> <span
  m='1244240'>And that's the case here as well. All the fun is going to be in
  the merge step. Right,</span> <span m='1250629'>so what we're going to do, as
  you can imagine, is we're going to take these points.</span> <span
  m='1254460'>And we're going to break them up. And the way we're going to break
  them up is by dividing</span> <span m='1259690'>them into half lengths. We're
  going to just draw a line.</span> <span m='1263409'>And we're going to say
  everything to the left of the line is one sub problem, everything</span> <span
  m='1267980'>to the right of the line is another sub problem, go off and find
  the convex hull for each of</span> <span m='1274440'>the sub problems. If you
  have two points, you're done, obviously. It's trivial.</span> </p><p><span
  m='1280509'>And at some point, you can say I'm just going to deal with brute
  force. If we can go down</span> <span m='1284899'>to order n cubed, if n is
  small, I can just apply that algorithm. So it doesn't even have</span> <span
  m='1290789'>to be the base case of n equals 1 or n equals 2. That's a
  perfectly fine thing to do.</span> <span m='1296059'>But you could certainly
  go with n equals 10, as I mentioned before, and run this brute</span> <span
  m='1299749'>force algorithm. And so at that point, you know that you can get
  down to small enough</span> <span m='1304360'>size sub problems for which you
  can find the convex hull efficiently. And then you've got</span> <span
  m='1310779'>these two convex hulls which are clearly on two different half
  planes because that's the</span> <span m='1317539'>way you defined
  them.</span> <span m='1319019'>And now you've got to merge them. And that's
  where all the fun is, OK? So let's just write</span> <span m='1324820'>this
  out again.</span> </p><p><span m='1326460'>You're going to sort the points by
  x-coordinates. And we're going to do this once and for all.</span> <span
  m='1337850'>We don't have to keep sorting here because we're just going to be
  partitioning based</span> <span m='1342299'>on x-coordinates.</span> <span
  m='1342929'>And we can keep splitting based on x-coordinates because we want
  to generate these half-lengths,</span> <span m='1347509'>right? So if we can
  do those once and for all-- and for the input set S, we're going</span> <span
  m='1361640'>to divide into the left half A and right half B by the
  x-coordinates. And then we're going</span> <span m='1380200'>to compute CH of
  A and CH of B recursively.</span> <span m='1388700'>And then we're going to
  combine. So the only difference here from what we had before is</span> <span
  m='1394399'>the specification of the division. It looked pretty
  generic.</span> </p><p><span m='1398909'>It's similar to the paradigm that I
  wrote before. But I've specified exactly how I'm</span> <span
  m='1403769'>going to break this up. So let's start with the merge operation.
  We're going to spend</span> <span m='1414419'>most of our time specing
  that.</span> <span m='1416929'>And again, there's many ways you could do the
  merge. And we want the most efficient</span> <span m='1422909'>way. That's
  obviously going to determine complexity. So, big question-- how to
  merge.</span> </p><p><span m='1436139'>So what I have here, if I look at the
  merge step, is I've created my two sub problems</span> <span
  m='1443169'>corresponding to these two half planes. And what I have here is--
  let's say I've generated,</span> <span m='1451240'>at this point, a convex
  hull associated with each of these sub problems. So what I have</span> <span
  m='1458820'>here is a1, a2.</span> <span m='1463129'>I'm going to go clockwise
  to specify the convex hull. And the other thing that I'm going to</span> <span
  m='1470249'>do is in the sub problem case, my starting point is going to be
  for the left sub problem,</span> <span m='1479350'>the coordinate that has the
  highest x value, OK? So that's a1 in this case-- the highest</span> <span
  m='1487159'>x value going over. x is increasing to the right.</span> <span
  m='1490470'>And for the right half of the problem, it's going to be the
  coordinate that has the lowest</span> <span m='1498999'>x value. And I'm going
  to go clockwise in both of these cases. So when you see an ordering</span>
  <span m='1507009'>associated with the subscripts for these points, start with
  a1 or b1 and then go clockwise.</span> <span m='1514970'>And that's how we
  number this-- so just notational, nothing profound here.</span> </p><p><span
  m='1520159'>So I got these two convex hulls-- these sub hulls, if you will.
  And what I need to do</span> <span m='1526519'>now is merge them together. And
  you can obviously look at this and it's kind of obvious what</span> <span
  m='1532850'>the overall convex hull is, right?</span> </p><p><span
  m='1537210'>But the key thing is, I'm going to have to look at each of the
  pairs of points that are</span> <span m='1546779'>associated with this and
  that and try to generate the tangents, the new tangents, that are not</span>
  <span m='1556490'>part of the sub hulls, but they're part of the overall hull,
  right? So in this case,</span> <span m='1564169'>you can imagine an algorithm
  that is going to kind of do what this brute force algorithm</span> <span
  m='1571600'>does except that it's looking at a point from here and a point
  from here.</span> </p><p><span m='1580879'>So you could imagine that I'm going
  to do a pairwise generation of segments. And then</span> <span m='1588529'>I'm
  going to check to see whether these segments are actually tangents that are
  part of the</span> <span m='1592240'>overall convex hull or not. So what I
  would do here is I'd look at this.</span> <span m='1598240'>And is that going
  to be part of the overall hull? No, and precisely why not? Someone tell</span>
  <span m='1605820'>me why this segment a1 b1 is not part of the overall hull?
  Yeah, go ahead.</span> </p><p><span m='1613620'>STUDENT: If we were to draw a
  line through the whole thing there would be one on both sides.</span>
  </p><p><span m='1616940'>PROFESSOR: Exactly right-- that's exactly right. So
  here you go. So that's not part</span> <span m='1623700'>of it. Now, if I look
  at this-- well, same reason that's not part of it.</span> <span m='1630249'>In
  this case-- and this is a fairly obvious example. I'm going to do something
  that's</span> <span m='1634499'>slightly less obvious in case you get your
  hopes up that we have this trivial algorithm,</span> </p><p><span
  m='1639509'>OK? This is looking good, right? That's supposed to be a straight
  line, by the way.</span> <span m='1647820'>So a4 b2-- I mean, that's looking
  good, right? Because all the points are on one side. So</span> <span
  m='1653220'>a4 b2 is our upper tangent. Right, so our upper tangent is
  something that we're going</span> <span m='1661669'>to define as-- if I look
  at each of these things, I'm going to say they have a yij.</span> </p><p><span
  m='1669249'>OK, what is yij? yij is the y-coordinate. of the segment that I'm
  looking at, the ij</span> <span m='1679669'>segment.</span> <span
  m='1680129'>So this yij is for ai and bj. So what I have here is y42 out here.
  And this is-- for the</span> <span m='1689970'>upper tangent, yij is going to
  be maximum, right? Because that's essentially something</span> <span
  m='1696399'>which would ensure me that there are no points higher than that,
  right?</span> <span m='1700850'>So if I go up all the way and I find this that
  has the maximum yij, that is going to</span> <span m='1706759'>be my upper
  tangent. Because only for that will I have no points ahead of that, OK?
  So</span> <span m='1712580'>yij is upper tangent.</span> <span
  m='1714409'>This is going to be maximum. And I'm not going to write this down,
  but it makes sense that</span> <span m='1721799'>the lower tangent is going to
  have the lowest yij. Are we all good here? Yeah, question.</span> </p><p><span
  m='1730480'>STUDENT: So I am just wondering, I couldn't hear what she said why
  we moved out a1 b1.</span> </p><p><span m='1735660'>PROFESSOR: OK, so good.
  Let me-- that reason we moved out a1 b1 is because if I just drew</span> <span
  m='1742379'>a1 b1 like this-- and I'm extrapolating this. This is again
  supposed to be a straight line.</span> <span m='1749450'>Then you clearly see
  that there are points on either side of the a1 b1 segment when you</span>
  <span m='1754039'>look at the overall problem, correct? You see that on a1 b1,
  b2 is on this side, b3</span> <span m='1760860'>is on this side if I just
  extend this line all the way to infinity in both directions.</span> <span
  m='1765450'>And that violates the requirement that the segment be part of the
  overall hull, OK?</span> <span m='1772059'>That make sense? Good. So,
  everybody with me?</span> </p><p><span m='1776639'>So clearly, there's a
  trivial merge algorithm here. And the trivial merge algorithm is to</span>
  <span m='1785580'>look at not every pair of points-- every ab pair, right?
  Every aibj pair.</span> <span m='1795039'>And so what is the complexity of
  doing that? If I have n total points, the complexity would</span> <span
  m='1804259'>be-- would be in square, right? Because maybe I'd have half here
  and half here, ignore constants.</span> <span m='1810769'>And you could say,
  well, it's going to be n squared divided by 4, but that's theta n</span> <span
  m='1816110'>squared. So there's an obvious merge algorithm that is theta n
  square looking at all pairs</span> <span m='1830190'>of points. And when I
  mean all pairs of points, I mean like an a and a b.</span> <span
  m='1838759'>Because I want to pick a pair when I go left of that dividing line
  and then right of the</span> <span m='1844720'>dividing line. But either way,
  it's theta n square, OK? So now you look at that and</span> <span
  m='1849259'>you go, huh. Can I do a better?</span> </p><p><span
  m='1853879'>What if I just went for the highest a point and the highest b
  point and I just, no, that's</span> <span m='1862179'>it? I'm done-- constant
  time. Wouldn't that be wonderful? Yeah, wonderful, but incorrect,</span> <span
  m='1868600'>OK?</span> </p><p><span m='1869409'>Right, so what is an example.
  And so this is something that I spent a little bit</span> <span m='1874559'>of
  time last night concocting. So I'm like you guys too. I do my problem set the
  night</span> <span m='1881659'>before.</span> <span m='1882950'>Well, don't do
  as I do. Do as I say. But I've done this before. So that's the
  difference.</span> </p><p><span m='1895539'>But this particular example is
  new. So what I have here is I'm going to show you why there's</span> <span
  m='1902359'>not a trivial algorithm, OK, that-- I got to get these angles
  right-- that you can't</span> <span m='1914809'>just pick the highest points
  and keep going, right?</span> <span m='1920759'>And then that would be
  constant time. So that's my a over here. And let's assume that I have</span>
  <span m='1926470'>my dividing line like that. And then what I'm going to do
  here-- and I hope I get this</span> <span m='1931109'>right-- is I'm going to
  have something like this, like that.</span> <span m='1937960'>And then I'm
  going to have b1 here clockwise-- so b2, b3, and b4. So as you can see
  here,</span> <span m='1950409'>if I look at a4-- a little adjustment
  necessary. OK, so if I look at that, a4 to b1 versus--</span> <span
  m='1969389'>I mean, just eyeball it.</span> <span m='1970710'>A3 to b1--
  right, is a4 to b1 going to be the upper tangent? No, right? So now a3
  is</span> <span m='1978669'>lower than a4. You guys see that?</span>
  </p><p><span m='1981859'>And b1 is lower than b2, right? So it's clear that if
  I just took a4 to b2 that it will</span> <span m='1988320'>not be an upper
  tangent. Everybody see that?</span> <span m='1992489'>Yep, all right, good. So
  we can't have a constant time algorithm. We have theta and square in</span>
  <span m='1999590'>the back. So it is there something-- maybe theta n?</span>
  </p><p><span m='2004289'>How would we do this merge and find the upper tangent
  by being a little smarter about searching</span> <span m='2014429'>for pairs
  of points that give us this maximum yij? I mean, the goal here is simple. At
  some</span> <span m='2023570'>level, if you looked at the brute force, I would
  generate each of these things.</span> <span m='2027220'>I would find the yj
  intercepts associated with this line. And I just pick the maximum.</span>
  <span m='2033340'>And the constant time algorithm doesn't work.</span> <span
  m='2036070'>The theta n squared algorithm definitely works. But we don't like
  it. So there has to be something</span> <span m='2041730'>in between. So, any
  ideas? Yeah, back there.</span> </p><p><span m='2045990'>STUDENT: So... I had
  a question. [INAUDIBLE]</span> </p><p><span m='2054000'>PROFESSOR: No, you're
  just finding-- no, you're maximizing the yij. So for once you have this</span>
  <span m='2059139'>segment-- so the question was, isn't the obvious merge
  algorithm theta n cubed, right? And</span> <span m='2065940'>my answer is no,
  because the theta n extra factor came from the fact that you had to</span>
  <span m='2071668'>check every point, every endpoint, to see on which side of
  the plane it was. Whereas</span> <span m='2076739'>here, what I'm doing is
  I've got this one line here that is basically y equals 0, if</span> <span
  m='2081070'>you like, or y equals some-- I'm sorry, x equals 0 or x equals
  some value.</span> <span m='2087909'>And I just need to, once I have the
  equation for the line associated with a4 b1 or a4 b2,</span> <span
  m='2095270'>I just have to find the intercept of it, which is constant time,
  right? And then once I find</span> <span m='2100500'>the intercept of it, I
  just maximize that intercept to get my yij. So I'm good, OK?</span>
  </p><p><span m='2106750'>So it's only theta n squared, right? Good question.
  So this is actually quite-- very,</span> <span m='2115230'>very, very
  clever.</span> <span m='2117620'>This particular algorithm is called the two
  finger algorithm. And I do have multiple fingers,</span> <span m='2122370'>but
  it's going to work a lot better if I borrow Eric's finger. And we're going to
  demonstrate</span> <span m='2127790'>to you the two finger algorithm for
  merging these two convex hulls. And then we'll talk</span> <span
  m='2136300'>about the complexity of it.</span> <span m='2139160'>And my
  innovation again last night was to turn this from a two-finger algorithm.
  Not</span> <span m='2144470'>only did I have the bright idea of using Eric-- I
  decided it was going to become the two finger</span> <span m='2148660'>an
  string algorithm. So this is wild.</span> </p><p><span m='2152720'>This is my
  contribution to 046 lore-- come on. So the way the two finger algorithm
  works--</span> <span m='2164420'>this pseudo code should be incomprehensible.
  If you just look at it and you go, what, right?</span> <span m='2170220'>But
  this demo is going to clear everything up. Right so here's what you do. So now
  we're</span> <span m='2175100'>going to do a demo of the merge algorithm that
  is a clever merge algorithm than the</span> <span m='2182150'>one that uses
  order n square time. And it's correct. It's going to get you the
  correct</span> <span m='2189070'>upper tangent and what we are starting at
  here is with Erik’s left finger on A1, which</span> <span m='2197290'>is
  defined to be the point that's closest to the vertical line that you see here,
  the</span> <span m='2205400'>one that has the highest x-coordinate. And my
  finger is on B1, which is the point that</span> <span m='2210580'>has the
  smallest X-coordinate on the right hand side sub-hull. And what we do is we
  compute,</span> <span m='2218760'>for the segment A1 B1, we compute by Yij, in
  this case Y11, which is the intercept on</span> <span m='2226460'>the vertical
  line that you see here that Erik just marked with a red dot. And you can
  look</span> <span m='2233730'>at the pseudocode over on, to my right if I face
  the board. And what happens now is</span> <span m='2239960'>I'm going to move
  clockwise, and I'm going to go from B1 to B4. And what happened here?</span>
  </p><p><span m='2246730'>Did the Yij increase or decrease? Well, as you can
  see it decreased. And so I'm going</span> <span m='2254010'>to go back to B1.
  And we're not quite done with this step here. Erik’s going to go</span> <span
  m='2260930'>counterclockwise over to A4. And we're going to check again, yeah,
  keep the string taught,</span> <span m='2267360'>check again whether Yij
  increased or decreased and as is clear from here Yij increased. So</span>
  <span m='2273440'>now we move to this point. And as of this moment we think
  that A4 B1 has the highest</span> </p><p><span m='2280700'>Yij. But we have a
  while loop. We’re going to have to continue with this while loop,</span> <span
  m='2285220'>and now what happens is, I’m going to go from B1 clockwise again
  to B4. And when this</span> <span m='2293370'>happens, did Yij increase or
  decrease? Well it decreased. So I'm going to go back to B1</span> <span
  m='2299570'>and Erik now is going to go counterclockwise to A3. And as you can
  see Y31 increased a</span> <span m='2312430'>little bit, so we're going to now
  stop this iteration of the algorithm and we're at A3</span> <span
  m='2319350'>B1, which we think at this point is our upper tangent, but let's
  check that. Start over</span> <span m='2326860'>again on my side B1 to B4,
  what happened? Well Yij decreased. So I'm going to go back</span> <span
  m='2334750'>to B1. And then Erik’s going to try. He’s going conterclockwise,
  he's going to go A3</span> <span m='2339350'>to A2 and, well, big decrease in
  Yij. Now Erik goes back to A3. At this point we've</span> <span
  m='2348760'>tried both moves, my clockwise move and Erik’s counterclockwise
  move. My move from B1 to</span> <span m='2357040'>B4 and Erik’s move from A3
  to A2. So we've converged, we're out of the while loop, A3</span> <span
  m='2364890'>B1 for this example is our upper tangent. All right. You can have
  your finger back Erik.</span> </p><p><span m='2374010'>So the reason this
  works is because we have a convex hull here and a convex hull here.</span>
  <span m='2382810'>We are starting with the points that are closest to each
  other in terms of A1 being the closest</span> <span m='2391100'>to this
  vertical line, B1 being the closest to this vertical line, and we are moving
  upward</span> <span m='2398240'>in both directions because I went clockwise
  and Erik went counterclockwise. And that's</span> <span m='2404570'>the
  intuition of why this algorithm works. We're not going to do a formal proof of
  this</span> <span m='2409000'>algorithm, but the monotonicity property
  corresponding to the convexity of this subhull and the convexity</span> <span
  m='2417490'>of the subhull essentially can give you a formal proof of
  correctness of this algorithm,</span> <span m='2424100'>but as I said we won't
  cover that in 046. So all that remains now is to look at our</span> <span
  m='2431010'>pseudocode which matches the execution that you just saw and talk
  about the complexity</span> <span m='2437850'>of the pseudocode.</span> <span
  m='2439310'>So what is the complexity of this algorithm? It's order n, right?
  So what has happening</span> <span m='2446300'>here, if you look at this while
  loop, is that while I have two counters, I'm essentially</span> <span
  m='2451970'>looking at two operations per loop.</span> </p><p><span
  m='2456490'>And either one of those counters is guaranteed to increment
  through the loop. And so since</span> <span m='2463860'>I have in this case p
  points, in one case p plus q equals n-- so let's say I had p points</span>
  <span m='2471750'>here and I have q points here. And got p plus q equals
  n.</span> <span m='2479500'>And I got a theta n merge simply because I'm going
  to be running through and incrementing--</span> <span m='2489250'>as long as
  I'm in the loop, I'm going to be incrementing either the i or the j. And
  the</span> <span m='2495430'>maximum they can go to are p and q before I
  bounce out of the loop or before they rotate</span> <span
  m='2501830'>around.</span> </p><p><span m='2502850'>And so that's why this is
  theta n. And so you put it all together in terms of what the</span> <span
  m='2510780'>merge corresponds to in terms of complexity and put that together
  with the overall divide</span> <span m='2517190'>and conquer. We have a case
  where this is looking like a recurrence that you've seen</span> <span
  m='2526270'>many a time t of n.</span> <span m='2528460'>I've broken it up
  into two sub problems. So I have 2. And I could certainly choose this</span>
  <span m='2537890'>l over here that's my line l to be such that I have a good
  partition between the two sets</span> <span m='2547750'>of points.</span>
  </p><p><span m='2548400'>Now, if I choose l to be all the way on the right
  hand side, then I have this large sub</span> <span m='2553210'>problem-- makes
  no sense whatsoever. So what I can do-- there's nothing that's stopping</span>
  <span m='2558360'>me when I've sorted these points by the x-coordinates to do
  the division such that there's exactly</span> <span m='2566610'>the same
  number, assuming an even number of points n, exactly the same number on the
  left</span> <span m='2572140'>hand side or the right hand side. But I can get
  that right roughly certainly within one</span> <span m='2577340'>very
  easily.</span> <span m='2579000'>So that's where the n over 2 comes from, OK?
  In the next problem that we'll look at, the</span> <span m='2584510'>median
  finding problem, we'll find that trying to get the sub problems to be of
  roughly equal</span> <span m='2589540'>size is actually a little difficult,
  OK? But I want to point out that in this particular</span> <span
  m='2594620'>case, it's easy to get sub problems that are half the size because
  you've done the sorting.</span> </p><p><span m='2600970'>And then you just
  choose the line, the vertical line such that you've got a bunch of
  points</span> <span m='2606970'>that are on either side. And then in terms of
  the merge operation, we have 2t n over</span> <span m='2613320'>2 plus theta
  n. People recognize this recurrence? It's the old merge sort
  recurrence.</span> <span m='2621310'>So we did all of this in-- well, it's not
  merge sort. Clearly the algorithm is not merge</span> <span m='2625920'>sort.
  We got the same recurrence.</span> <span m='2628340'>And so this is theta n
  log n-- so a lot better than theta nq. And there's no convex hull</span> <span
  m='2636960'>algorithm that's in the general case better than this. Even the
  gift wrapping algorithm</span> <span m='2642850'>that I mentioned to you, with
  the right data structures, it gets down to that in terms</span> <span
  m='2647720'>of theta n log n, but no better.</span> </p><p><span
  m='2651010'>OK, so good. That's pretty much what I had here. Again, like I
  said, happy to answer</span> <span m='2657890'>questions about the correctness
  of this loop algorithm for merge later. Any other questions</span> <span
  m='2665750'>associated with this?</span> </p><p><span m='2667570'>STUDENT:
  Question.</span> <span m='2668560'>Yeah, back there.</span> </p><p><span
  m='2669770'>STUDENT: If the input is recorded by x coordinates, can you do
  better than [INAUDIBLE]?</span> </p><p><span m='2673940'>PROFESSOR: No, you
  can't, because-- I mean, the n log n for the pre-sorting, I mean,
  there's</span> <span m='2681100'>another theta n log n for the sorting at the
  top level. And we didn't actually use that,</span> <span m='2688120'>right? So
  the question was, can we do better if the input was pre sorted?</span>
  </p><p><span m='2694010'>And I actually did not even use the complexity of the
  sort. We just matched it in this case.</span> <span m='2700920'>So theta n log
  n-- and then you can imagine maybe that you could do a theta n sort if</span>
  <span m='2705220'>these points were small enough and you rounded them up and
  you could use a bucket sort or</span> <span m='2709860'>a counting sort and
  lower that.</span> </p><p><span m='2712130'>So this theta n log n is kind of
  fundamental to the divide and conquer algorithm. The only</span> <span
  m='2717720'>way you can improve that is by making a merge process that's even
  faster. And we obviously</span> <span m='2723530'>tried to cook up a theta one
  merge process. But that didn't work out, OK?</span> </p><p><span
  m='2729470'>STUDENT: But are there algorithms that [INAUDIBLE] ?</span>
  </p><p><span m='2733720'>PROFESSOR: First-- if you assume certain things about
  the input, you're absolutely, right?</span> <span m='2738930'>So one thing
  you'll discover in algorithms in 6046 as well is that we're never
  satisfied.</span> </p><p><span m='2745540'>OK, so I just said, oh, you can't
  do better than theta n log n.</span> <span m='2749630'>But that's in the
  general case. And I think I mentioned that. You're on the right track.</span>
  <span m='2754620'>If the input is pre sorted, you can take that away-- no, it
  doesn't help in that particular</span> <span m='2760440'>instance if you have
  general settings. But if you-- the two dimensional case-- if the</span> <span
  m='2769110'>hull, all the segments have a certain characteristic-- not quite
  planar, but something that's a little</span> <span m='2777140'>more stringent
  than that-- you could imagine that you can do improvements. I don't
  know</span> <span m='2781430'>if any compelling special case input for convex
  hull from which you can do better than theta</span> <span m='2787750'>n log
  n.</span> </p><p><span m='2788540'>But that's a fine exercise for you, which
  is in what cases, given some structure on</span> <span m='2794520'>the points,
  can I do better than theta n log n? So that's something that keeps coming
  up</span> <span m='2798690'>in the algorithm literature, if you can use that,
  OK? Yeah, back there-- question.</span> </p><p><span m='2805890'>STUDENT:
  Where's your [INAUDIBLE] step?</span> <span m='2807710'>You also have to
  figure out which lines to remove from each of your two...</span> </p><p><span
  m='2813000'>PROFESSOR: Ah, good point. And you're exactly, absolutely right.
  And I just realized that</span> <span m='2818560'>I skipped that step,
  right?</span> </p><p><span m='2820060'>Thank you so much. So the question was,
  how do I remove the lines? And it's actually fairly</span> <span
  m='2825360'>straightforward.</span> <span m='2826090'>Let's keep this up here.
  And we don't need this incomprehensible pseudo code, right?</span> <span
  m='2833720'>So let's erase that.</span> <span m='2836800'>And thank you for
  asking that question. So it's a little simple cut and paste approach</span>
  <span m='2844060'>where let's say that I find the upper tangent ai bj. And I
  find the lower tangent.</span> </p><p><span m='2859440'>Let's call it ak bm.
  And in this particular instance, what do I have? I have a1, a2, a3,</span>
  <span m='2871430'>a4 as being one of my sub hulls. And then I have b1, b2, b3,
  b4 as the other one.</span> <span m='2880850'>Now, what did we determine to be
  the upper tangent? Was it a3 b1? Right, a3 b1?</span> <span m='2890830'>So a3
  b1 was my upper tangent. And I guess it was a1-- a1 b4? A1 b4 was my lower
  tangent.</span> </p><p><span m='2907370'>So the big question is, now that I've
  found these two, how do I generate the collect representation</span> <span
  m='2914580'>of the overall convex hull? And so it turns out that you have to
  do this-- and then the</span> <span m='2920990'>complexity of this is
  important as well. And you need to do what's called a cut and paste</span>
  <span m='2926660'>that's associated with this where we're going to just look
  at this and that.</span> <span m='2930350'>So if we're going to have these two
  things, then we've got to generate a list of points.</span> <span
  m='2934740'>Now, clearly a4 is not going to be part of that, right? A4 is not
  going to be part of</span> <span m='2940200'>the overall hull.</span> <span
  m='2941490'>What is it that we want? We want something like a1, a2, a3, b1,
  b2, b3, b4, right? But</span> <span m='2951880'>there's a point that we have
  to discard here. Agree?</span> </p><p><span m='2956210'>And so the way we do
  this is very mechanical. That's the good news here. I mean, you don't</span>
  <span m='2962780'>have to look at it pictorially.</span> <span m='2964230'>I
  just made that up looking at-- eyeballing it. Clearly, a computer doesn't have
  eyeballs,</span> <span m='2970840'>right? And so what we're going to do is
  we're going to say the first link-- in general,</span> <span m='2977430'>the
  first link is ai to bj.</span> <span m='2980960'>Because that's my upper
  tangent, OK? And in this case, it's going to be a3 d1, OK? And</span> <span
  m='2989940'>then I'm going to go down the b list until you see bm, which is
  the lower tangent.</span> <span m='3008820'>You're on the b list. So you're
  looking for the lower tangent point. And then you're going</span> <span
  m='3012640'>to jump until you see bm. You link it to ak, OK?</span> <span
  m='3020240'>You link it to ak and continue until you return to ai. And then
  you have your circular</span> <span m='3034310'>list, OK? So what you see here
  is you have a3 here. So I'm going to go ahead and write</span> <span
  m='3042910'>out the execution of what I just wrote here.</span> </p><p><span
  m='3047980'>So I have a3. And I'm going to go jump over to b1. So I'm going to
  write down b1. Then</span> <span m='3054500'>I'm going to along the b's until
  I get to b4.</span> <span m='3058340'>In this case, I'm going to include all
  of the b's. So I got b1, b2, b3, b4. And then</span> <span m='3065440'>I'm
  going to jump from b4 to a1 because that's part of my lower tangent.</span>
  <span m='3073810'>And I got a1 here, a2. And then I'm back to a3, which is
  great. Because then I'm done,</span> <span m='3085250'>OK?</span> <span
  m='3086290'>And so exactly what I said happened, thank goodness, which is we
  dropped a4 but we kept</span> <span m='3092050'>all the other points. Does
  that answer your question? Good.</span> </p><p><span m='3098300'>What is the
  complexity of cut and paste? It's order n. I'm just walking through these
  lists.</span> <span m='3104520'>So there's no hidden complexity here, OK?
  Good, good-- thank you. You definitely deserve</span> <span m='3110730'>a
  Frisbee.</span> <span m='3111440'>In fact, you deserve two, right? Where are
  you? I-- oh, could you stand up?</span> <span m='3119400'>Yeah, right-- two
  colors. All right. Oh, so he-- well, you can give it to him if you
  like.</span> <span m='3129570'>So good, thank you.</span> </p><p><span
  m='3132380'>So are we done? Are we done with convex hull? OK, good. So let's
  go on and do median finding.</span> <span m='3140760'>Very different-- very
  different set of issues here.</span> <span m='3145960'>Still on divide and
  conquer, but a very different set of issues. The specification here is,</span>
  <span m='3157960'>of course, straightforward. You can think of it as I just
  want a better algorithm than</span> <span m='3164210'>sorting and looking for
  the median at the particular position-- in over two position,</span> <span
  m='3171480'>for example. Let's say n is odd. And it's floor of n over 2. You
  can find that median.</span> <span m='3181680'>Right, so it's pretty easy if
  you can do sorting. But we're never satisfied with using a standard</span>
  <span m='3190300'>algorithm. If we think that we can do better than that. So
  the whole game here is going</span> <span m='3194970'>to be I'm going to find
  the median.</span> <span m='3198970'>And I want to do it in better than theta
  n log n time. OK, so that's what median finding</span> <span m='3212910'>is
  all about. You're going to use divide and conquer for this.</span>
  </p><p><span m='3217070'>And so in general, we're going to define, given a set
  of n numbers, define rank of x</span> <span m='3233880'>as the numbers in the
  set that are greater than-- I'm sorry, less than or equal to x.</span> <span
  m='3246510'>I mean, you could have defined it differently. We're going to go
  with less than or equal</span> <span m='3249270'>to.</span> <span
  m='3250750'>So in general, the rank, of course, is something that could be
  used very easily to find the</span> <span m='3258570'>median. So if you want
  to find the element of rank n plus 1 divided by 2 floor, that's</span> <span
  m='3268930'>what we call the lower median. And n plus 1 divided by 2 ceiling
  is the upper median.</span> <span m='3278650'>And they may be the same if n is
  odd.</span> <span m='3283730'>But that's what we want. So you can think of it
  as it's not median finding, but finding</span> <span m='3288210'>elements with
  a certain rank. And we want to do this in linear time, OK?</span> </p><p><span
  m='3295200'>So we're going to apply divide and conquer here. And as always,
  the template can be instantiated.</span> <span m='3305400'>And the devil is in
  the details of either division or merge.</span> <span m='3311780'>And we had
  most of our fun with convex hull on the merge operation. It turns out
  most</span> <span m='3319460'>of the fun here with respect to median finding
  is in the divide, OK? So what I want is the</span> <span
  m='3332770'>definition of a select routine that takes a set of numbers
  s.</span> <span m='3338780'>And this is the rank. So I want a rank i. And that
  i might be n over 2-- well, floor</span> <span m='3349340'>of n plus 1 over 2,
  whatever?</span> </p><p><span m='3352560'>And so what does the divide and
  conquer look like? Well, the first thing you need to do</span> <span
  m='3356500'>is divide. And as of now, we're just going to say you're going to
  pick some element x</span> <span m='3364920'>belonging to s.</span> <span
  m='3366240'>And this choice is going to be crucial. But at this point, I'm not
  ready to specify this</span> <span m='3370230'>choice yet, OK? So we're going
  to have to do this cleverly. And then what we're going</span> <span
  m='3375640'>to do is we're going to compute on k, which is the rank of x, and
  generate two sub arrays</span> <span m='3390220'>such that I want to find the
  fifth highest element. I want to find the median element.</span> <span
  m='3395680'>I want to find the 10th highest element. So I have to keep track
  of what happens in the</span> <span m='3400910'>sub problems. Because the sub
  problems are going to determine, depending on how many</span> <span
  m='3406990'>elements are inside those sub problems, which I can only determine
  after I've solved those</span> <span m='3412700'>sub problems. I'm going to
  have to collect that information and put it together in the</span> <span
  m='3416740'>merge operation.</span> </p><p><span m='3419080'>So if I want to
  find the 10th highest element and I've broken it up relatively
  arbitrarily,</span> <span m='3425700'>it's quite possible that the 10th
  highest element is going to be discovered in the left</span> <span
  m='3430240'>one or the right one. And I have to show that it's the 10th
  highest. And it might be that</span> <span m='3435150'>there's four elements
  in the left and five on the right that are-- let's see.</span> <span
  m='3444090'>If I defined the rank as less than or equal to x, there's four on
  the left and five on</span> <span m='3449010'>the right that are smaller. And
  that's why this is the 10th highest element. And that's</span> <span
  m='3454680'>essentially what we have to look at. So b and c are going to
  correspond to the sub arrays</span> <span m='3464330'>that you can clearly
  eliminate one of them.</span> <span m='3469600'>You can count the number of
  elements in b, count the number of elements in c. And you</span> <span
  m='3475350'>can eliminate one of them in this recursion as you're discovering
  this element with the</span> <span m='3483810'>correct rank-- in this case, i.
  So let me write the rest of this out and make sure we're</span> <span
  m='3489320'>all on the same page.</span> </p><p><span m='3491710'>What I have
  here pictorially is I've generated b here and c. So this is all of b and
  that's</span> <span m='3503570'>all of c. I have k minus 1 elements here in
  b.</span> <span m='3510970'>And let's say I have n minus k elements in c. And
  I'm going to do-- essentially take--</span> <span m='3524170'>once I've
  selected a particular element, I'm going to look at all of the elements
  that</span> <span m='3529080'>are less than it and put it into the array b.
  I'm going to look at all the elements that</span> <span m='3532510'>are better
  than it.</span> <span m='3533560'>Let's assume all elements are unique. I'm
  going to put all of them into c. And I'm going</span> <span m='3538830'>to
  recur on b and c. Those two are my sub problems.</span> <span m='3546030'>But
  what I have to do is once I recur and I discover the ranks of the sub
  problems,</span> <span m='3557120'>I have to put them together. So what I have
  here is if k equals i-- so I computed the</span> <span m='3563300'>rank and I
  realized that if k equals-- equals i, I should say-- if k equals i, then
  I'm</span> <span m='3572430'>going to just return x. I'm done at this
  point.</span> <span m='3575360'>I got lucky. I picked an element x and it
  magically ended up having the correct rank,</span> <span m='3582610'>OK? Not
  always going to happen. And so in other case, if k is greater than i, then
  going</span> <span m='3593030'>to return select bi.</span> </p><p><span
  m='3601540'>So what I've done here is if k is greater than i, then I'm going
  to say, oh, so now</span> <span m='3607670'>I'm going to have to find the
  element in b. I know that it's going to be in b because</span> <span
  m='3611540'>k is greater than i. And I've got to find the exact position
  depending on what i is</span> <span m='3615740'>over here. But it's going to
  be somewhere between 1 and k minus 1.</span> <span m='3623530'>And then the
  last case is if k is less than i, then this is a little more tricky.
  I'm</span> <span m='3634350'>going to turn on c of i minus k, OK? So what
  happens here is that my k is-- the rank for</span> <span m='3647080'>the x
  that I looked at over here is less than i.</span> </p><p><span m='3650520'>So
  I know that I'm going to find this element that I'm looking for in c. But if I
  just look</span> <span m='3657110'>at c, I don't want to look at c and look
  for an element of rank i within c, right? That</span> <span
  m='3665050'>doesn't make sense because I'm looking for an element of rank i in
  the overall array</span> <span m='3669880'>that was given to me.</span> <span
  m='3671300'>So I have to subtract out the k elements that correspond to x and
  all of the k minus 1 elements</span> <span m='3678730'>that are in b to go
  figure out exactly what position or rank I'm looking for in the sub</span>
  <span m='3685450'>array corresponding to c, OK? So, people buy that. So that's
  just a small, little thing</span> <span m='3691830'>that you have to keep in
  mind as you do this.</span> <span m='3694660'>So that's pretty
  straightforward, looking pretty good. And you say, well, am I done</span>
  <span m='3701480'>here? And as you can imagine, the answer is no, because we
  haven't specified this value.</span> </p><p><span m='3709750'>Now, can someone
  tell me, at least from an efficiency standpoint, what might happen,</span>
  <span m='3719070'>what we're looking for here? As you can imagine, we want to
  improve on theta n log n. And so</span> <span m='3724790'>you could you say,
  well, I'm happy with theta n. That theta n complexity algorithm is
  better</span> <span m='3730070'>than a theta n log n complexity algorithm,
  which is kind of in the bag.</span> <span m='3733770'>Because we know how to
  sort and we know how to index. So we want a theta n algorithm.</span> <span
  m='3738340'>Now, if you take this and if I just picked, let's say, the biggest
  element-- I kept picking</span> <span m='3748880'>x to be n or n minus 1 or
  just picked a constant value. I picked x to be in the middle.</span>
  </p><p><span m='3756560'>I picked the index. I can always pick an element
  based on its index. I can always go for the</span> <span m='3762130'>middle
  one.</span> <span m='3763680'>So what is the worst case complexity of this
  algorithm? If I don't specify or I give you</span> <span m='3771340'>this
  arbitrary selection corresponding to x belonging to s, what is the worst case
  complexity</span> <span m='3776170'>of this algorithm? Yeah, go ahead.</span>
  </p><p><span m='3779300'>STUDENT: N squared.</span> </p><p><span
  m='3780160'>PROFESSOR: N squared-- why is that?</span> </p><p><span
  m='3781400'>STUDENT: Because if you [INAUDIBLE] take like the least
  element.</span> </p><p><span m='3784360'>PROFESSOR: Yep.</span> <span
  m='3785100'>STUDENT: How do you compare like N o against the other
  analysis?</span> </p><p><span m='3788820'>PROFESSOR: Exactly right. That's
  exactly right. So what happens is that you're doing a bunch</span> <span
  m='3792560'>of work here with this theta n work.</span> <span
  m='3795430'>Right here, this is theta n work, OK? So given that you're doing
  theta n work here, you have</span> <span m='3801650'>to be really careful as
  to how you pick the x element. So what might happen is that you</span> <span
  m='3807930'>end up picking the x over here.</span> <span m='3810160'>And given
  the particular rank you're looking for, you have to now-- you're left with
  a</span> <span m='3814740'>large array that has n minus 1 elements in the
  worst case. You started with n. You did</span> <span m='3820160'>not go to n
  over 2 and n over 2, which is what divide and conquer is all about--
  even</span> <span m='3825460'>n over b, OK?</span> </p><p><span
  m='3827180'>You went to n minus 1. And then you go to n minus 2. And you go to
  n minus 3 because</span> <span m='3832200'>you're constantly picking-- this is
  worst case analysis. You're constantly picking these</span> <span
  m='3836140'>sub arrays to be extremely unbalanced.</span> <span m='3839990'>So
  when the sub arrays are extremely unbalanced, you end up doing theta n work in
  each</span> <span m='3845440'>level of the recursion. And those theta n's,
  because you're going down all the way from</span> <span m='3850980'>n to one,
  are going to be theta n square when you keep doing that, OK? So thanks for
  that</span> <span m='3858600'>analysis.</span> <span m='3862010'>And so this
  is theta n squared if you have a batch selection. So we won't talk
  about</span> <span m='3872170'>randomized algorithms, but the problem with
  randomized algorithms is that the analysis</span> <span m='3878520'>will be
  given a probability distribution. And it'll be expected time.</span>
  </p><p><span m='3885140'>What we want here is a deterministic algorithm that
  is guaranteed to run in worst case theta</span> <span m='3891890'>n. So we
  want a deterministic way of picking x belonging to s such that all of this
  works</span> <span m='3900740'>out and when we get our recurrence and we solve
  it, somehow magically we're getting</span> <span m='3905320'>fully balanced
  partitions-- firmly balanced sub problems in the sense that it's not n</span>
  <span m='3912860'>minus 1 and 1. It's something like-- it could even be n over
  10 and 9n over 10.</span> <span m='3917540'>But as long as you guarantee that,
  you're shaking things down geometrically. And the</span> <span
  m='3922320'>asymptotics is going to work out. but the determinism is what we
  need.</span> <span m='3928320'>And so we're going to pick x cleverly. And we
  don't want the rank x to be extreme.</span> <span m='3942190'>So this is not
  the only way you could do it, but this is really very clever.</span>
  </p><p><span m='3949000'>There's a deterministic way. And you're going to see
  some arbitrary constants here. And</span> <span m='3957880'>we'll talk about
  them once I've described it. But what we're going to do is we're going</span>
  <span m='3963910'>to arrange s into columns of size 5, right?</span> <span
  m='3968270'>We're going to take this single array. And we're going to make it
  a two dimensional array</span> <span m='3972130'>where the number of rows is
  five and the number of columns that you have is n over 5-- the</span> <span
  m='3980040'>ceiling in this case. And then we're going to sort it each column,
  big elements on top.</span> <span m='3995570'>And we're going to do this in
  linear time.</span> <span m='3998180'>And you might say, how did that happen?
  Well, there's only five elements. So it's linear.</span> <span m='4004460'>You
  could do whatever you wanted. You could do n raised to four.</span>
  </p><p><span m='4007360'>But it's five raised to four and it's constants.
  Don't you love theory? So then we're going</span> <span m='4015230'>to find
  what we're going to call the median of medians.</span> <span m='4019630'>So
  I'm going to explain this. This works for arbitrary rank, but it's a little
  easier to</span> <span m='4024380'>focus in on the median to just explain the
  particular example. Because as you can see,</span> <span m='4029790'>there's
  an intricacy here associated with the break up.</span> <span m='4038090'>And
  so here we go. I'm going to draw out a picture. And we're going to try and
  argue</span> <span m='4043890'>that this deterministic strategy that I'll
  specify gives you fairly balanced partitions</span> <span m='4052560'>in all
  cases, OK?</span> </p><p><span m='4055730'>So what we see here is we see--
  pictorially, you see columns of length five. Each of these</span> <span
  m='4067270'>dots corresponds to a number. This one dimensional array got
  turned into a two dimensional right.</span> <span m='4080640'>So I got four
  full columns. And it's suddenly possible, given n, that my fifth column
  is</span> <span m='4088010'>not full, right? So that's certainly possible. So
  that's why I have that up here. It so what</span> <span m='4096299'>I've here
  is I'm going to lay them out this way.</span> <span m='4099420'>And I'm going
  to look at that. I'm going to look at the middle elements of each of
  these</span> <span m='4111889'>n over five columns. That's exactly what I'm
  going to look at. Now, if I look at what I</span> <span m='4121549'>want, what
  I want over here is this x. If I want to find--</span> <span m='4128179'>I'm
  going to find the median of medians. So is x. Now, it is true the first
  that</span> <span m='4139109'>these columns-- I'm just putting that up here
  imagining that that's x.</span> </p><p><span m='4143269'>That's not guaranteed
  to be x because the columns themselves aren't-- well, these columns</span>
  <span m='4152568'>are sorted. And what I'm going to have to guarantee, of
  course, is that when I go find</span> <span m='4158849'>this median of medians
  is that it ends up being something that gives me balanced partitions.</span>
  <span m='4165749'>So maybe say a little bit more before I explain what's going
  on.</span> </p><p><span m='4172749'>Each of these columns is sorted. And s is
  arranged into columns of size 5 like I just</span> <span m='4178960'>said
  here. These are the medians, OK? If I look at determining the medians and I
  say</span> <span m='4191259'>that once I've determined this x, which I've
  discovered that it's the median, then this</span> <span m='4197449'>is right
  there in the middle. There's going to be a bunch of columns to the left of
  it,</span> <span m='4200710'>a bunch of elements to the left of it, and a
  bunch of elements to the right of it.</span> <span m='4204239'>And in this
  case, I have five columns. I could have had more. It happens to be the
  third</span> <span m='4208909'>one.</span> </p><p><span m='4209880'>So the
  idea is that once I find this median of medians, which corresponds to this x
  number,</span> <span m='4215909'>I can say that all of the columns-- these all
  correspond to columns that have their</span> <span m='4223999'>median element
  greater than x. These correspond to columns that have their median
  element</span> <span m='4229070'>less than x, OK? So what I have here in this
  picture is that these elements here are going</span> <span m='4239159'>to be
  greater than x.</span> <span m='4242199'>And these elements here are going to
  be less than x. So let me clear. What's happened here</span> <span
  m='4256440'>is we've not only sorted all of the columns such that you have
  large elements up here.</span> </p><p><span m='4267659'>Each of these five
  columns have been sorted that way. On top of that, I've discovered</span>
  <span m='4272360'>the particular column that corresponds to the medians of
  medians. And this is my x over</span> <span m='4279929'>here.</span> <span
  m='4280989'>And it may be the case that these columns aren't sorted. This one
  may be larger than</span> <span m='4285199'>that or vice versa-- same thing
  over there. I have no idea.</span> <span m='4289030'>But it's guaranteed that
  once I find this median that I do know all of the columns that</span> <span
  m='4296119'>have elements in this position that are less than this x. And I
  know columns that in this</span> <span m='4304550'>position have elements that
  are greater than x, OK? Yep.</span> </p><p><span m='4308450'>STUDENT:
  Shouldn't the two elements below x also be computed [INAUDIBLE] less than
  x.</span> </p><p><span m='4316200'>PROFESSOR: You're exactly right. I would
  have probably been able to get the same asymptotic</span> <span
  m='4324579'>complexity if I dropped those because I had a constant number. But
  you're absolutely exactly</span> <span m='4329440'>right.</span> </p><p><span
  m='4330199'>So the point that-- the question was-- I just redrew it. These two
  are clearly less than</span> <span m='4335429'>x as well because they're part
  of the sorting. And that's essentially I have here.</span> <span
  m='4341610'>Now, my goal here-- and you can kind of see from here as to where
  we're headed. What I've</span> <span m='4346679'>down here by this process of
  sorting each column and finding the median of medians is</span> <span
  m='4351780'>that I found this median of medians such that there's a bunch of
  columns on the left. And</span> <span m='4357760'>roughly half of those
  elements in those columns are less than x.</span> <span m='4361530'>And there
  are a bunch of columns on the right. And roughly half of those columns have
  elements</span> <span m='4367739'>that are greater than x. So what I now have
  to do is to do a little bit of math to show</span> <span m='4374030'>you
  exactly what the recurrence is. And let me do that over here.</span>
  </p><p><span m='4378079'>So that's the last thing that we have to do. I
  probably won't solve the recurrence, but</span> <span m='4383550'>that can
  wait until tomorrow. The recurrence will be something that's not
  particularly</span> <span m='4390469'>difficult to solve. So I want to now
  make a more quantitative argument that the variable</span> <span
  m='4403670'>being n as to how many elements are guaranteed to be greater than
  x.</span> <span m='4413300'>And essentially what I'm saying, which is I'm
  writing out what I have on that picture</span> <span m='4418519'>there, half
  of the n over 5 groups contribute at least three elements greater than x
  except</span> <span m='4442030'>for one group with possibly less than five
  elements, which is the one that I have all</span> <span m='4450559'>the way to
  the right, and one group that contains x. So for all the other columns, I'm
  going to</span> <span m='4467550'>get three elements that are greater than x.
  And so if you write that out, this says there</span> <span m='4475619'>are at
  least three n over 10, because I have half of all of those groups, minus
  2.</span> <span m='4487199'>And I'm not counting perfectly accurately here,
  but I have an at least. So this should</span> <span m='4493239'>all be fine.
  3n over 1d-- 3 times n over 10 minus 2 elements are strictly greater
  than</span> <span m='4502219'>x. And that comes from that picture.</span>
  </p><p><span m='4506179'>I'm going to be able to say the same thing for less
  than x as well. I can't count the</span> <span m='4514639'>one. Depending on
  how things go, maybe I could have played around and subtracted 1
  instead</span> <span m='4520960'>of a 2 in the latter case.</span> <span
  m='4523440'>But I'm just being conservative here. It is clear that I'm going
  to have a bunch of columns</span> <span m='4528829'>that are full columns,
  that are going to be contributing three elements that are greater</span> <span
  m='4534789'>than x. And in this case, I have, well, two of them here for the
  less than x.</span> <span m='4539249'>And I got one for the greater than x. So
  that's all that I'm seeing over here with respect</span> <span m='4544550'>to
  the balance of the partitions. And it turns out that's enough.</span> <span
  m='4549800'>It turns out all I have to do with this observation is to go off
  and run the recurrence. And we're</span> <span m='4557949'>going to get an
  efficient algorithm. Yep.</span> </p><p><span m='4564160'>STUDENT: Should it
  not be like greater than or equal to, because there's... [INAUDIBLE]</span>
  </p><p><span m='4568059'>PROFESSOR: No, there's nothing that's equal.</span>
  </p><p><span m='4571240'>STUDENT: So you are saying, that's all you
  need.</span> </p><p><span m='4572580'>PROFESSOR: Yeah. Yeah, I assume that--
  so, convenience, yeah. There's always a little</span> <span m='4576849'>bit of
  convenience thrown in here.</span> <span m='4579030'>We will assume that the a
  has unique elements. So there's nothing that's x, OK? Good.</span>
  </p><p><span m='4587989'>So the recurrence, once you do that, is t of n
  equals-- we're going to just say it's</span> <span m='4598190'>order one for n
  less than or equal to 140. Where did that come from? Well, like 140.</span>
  <span m='4608510'>It's just a large number. It came from the fact that you're
  going to see 10 minus 3,</span> <span m='4613630'>which is 7. And then you
  want to multiply that by 2.</span> <span m='4617119'>So some reasonably large
  number-- we're going to go off and we're going to assume that's</span> <span
  m='4621619'>a constant. So you could sort those 140 numbers and find the
  median or whatever rank. It's</span> <span m='4628400'>all constant time once
  you get down to the base case.</span> <span m='4630739'>So you just want it to
  be large enough such that you could break it up and you have something</span>
  <span m='4634659'>interesting going on with respect to the number of columns.
  So don't worry much about that</span> <span m='4639679'>number. The key thing
  here is the recurrence, all right?</span> </p><p><span m='4644230'>And this is
  what we have spent the rest of our time on. And I'll just write this
  out</span> <span m='4651980'>and explain where these numbers came from. So
  that's our recurrence for n less than or</span> <span m='4667179'>equal to
  140.</span> <span m='4668650'>And else, you're going to do this. So what is
  going on here? What are all of these components</span> <span
  m='4674590'>corresponding to this recurrence?</span> </p><p><span
  m='4678110'>Really quickly, this is simply something that says I'm finding the
  median of medians. I'm</span> <span m='4685300'>finding some element that has
  a certain rank. So this median of medians is going to be running</span> <span
  m='4691170'>on n over 5 columns. So I've got this-- there are n over 5 columns
  here.</span> <span m='4697579'>And I'm going to be calling this algorithm
  recursively, the median finding algorithm,</span> <span m='4704150'>to do
  that-- finding the median of medians. This thing over here is-- I'm going to
  be</span> <span m='4715260'>discarding at least regardless of what I do.
  Because I have these two statements here,</span> <span m='4723039'>I take the
  overall n. And I'm going to discard.</span> <span m='4727760'>In my paradigm
  over here, I'm either going to go with b or I'm either going to go with</span>
  <span m='4731849'>c depending on what I'm looking for. And given that b and c
  are not completely unbalanced,</span> </p><p><span m='4737889'>I'm going to be
  discarding 3n over 10 minus 6 elements, which simply corresponds to me</span>
  <span m='4746349'>ignoring the ceiling here and multiplying the 3 out. So
  that's 3n over 10 minus 6.</span> <span m='4752150'>So then I have 7n over 10
  plus 6. That's the maximum size partition that I'm going to recur</span> <span
  m='4758999'>on. It's only going to be exactly one of them, as you can see from
  that.</span> <span m='4762579'>It's either else. It's not recurring on both of
  them. It's recurring on one of them. So</span> <span m='4766570'>that's where
  the 7n over 10 plus 6 comes from. And then you ask where does this theta n
  come</span> <span m='4772099'>from.</span> <span m='4772749'>Well, the theta n
  comes from the fact that I do have to do some sorting. It's constant</span>
  <span m='4778780'>time sorting for every column, OK? Because it's only five
  elements.</span> </p><p><span m='4784079'>So I'm going to do constant time
  sorting. But there's order n columns. Because it's--</span> <span
  m='4789099'>then it's n over 5 columns.</span> <span m='4790909'>So this is
  the sorting of all of the columns, all right? So that's it. And I'll just
  leave</span> <span m='4800679'>you with-- you cannot apply the master theorem
  for solving this particular recurrence. But</span> <span m='4808659'>if you
  make the observation-- and you'll see this in section.</span> <span
  m='4811699'>You make the observation that n over 5 plus 7n over 10 is actually
  less than n. So you</span> <span m='4819409'>get 0.2n here and 0.7n there.
  That's actually less than n.</span> <span m='4823610'>This thing runs in
  linear time. And you'll see that in section tomorrow. So this whole</span>
  <span m='4828070'>thing is theta n time. See you next time.</span> </p>
uid: 474792fc830ea3c02d11673904612c16
type: courses
layout: video
---
