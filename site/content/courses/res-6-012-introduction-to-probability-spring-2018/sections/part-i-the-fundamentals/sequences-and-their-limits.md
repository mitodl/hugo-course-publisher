---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: kuhlfBPQPq0
    parent_uid: 157a587804d90871cc35477ea14c482a
    title: Video-YouTube-Stream
    type: Video
    uid: 5bba39035282d8a81fd84b18e63ad68e
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/kuhlfBPQPq0/default.jpg'
    parent_uid: 157a587804d90871cc35477ea14c482a
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 5892f160a727d8d02673960698e89e08
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: kuhlfBPQPq0
    parent_uid: 157a587804d90871cc35477ea14c482a
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: b6b88ab54961c83826625a7b94c9f9bc
  - id: kuhlfBPQPq0.srt
    parent_uid: 157a587804d90871cc35477ea14c482a
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/sequences-and-their-limits/kuhlfBPQPq0.srt
    title: 3play caption file
    type: null
    uid: 7a2067f0ee850be8a1bcf8779eee4a8c
  - id: kuhlfBPQPq0.pdf
    parent_uid: 157a587804d90871cc35477ea14c482a
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/sequences-and-their-limits/kuhlfBPQPq0.pdf
    title: 3play pdf file
    type: null
    uid: fcd5a1ef912434ae724e4accf97139f9
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 157a587804d90871cc35477ea14c482a
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: f67ef03e2d755fa07bea99bd0e0283a8
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 157a587804d90871cc35477ea14c482a
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: cc120237a4e825ea25c95c9762939e12
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_S01-03_300k.mp4
    parent_uid: 157a587804d90871cc35477ea14c482a
    title: Video-Internet Archive-MP4
    type: Video
    uid: a4c76c1ccbd637732200d41776d43646
inline_embed_id: 75331445sequencesandtheirlimits44982938
order_index: 150
parent_uid: 9ca6b310dc93095c9ac0f0e5f95e6930
related_resources_text: ''
short_url: sequences-and-their-limits
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/sequences-and-their-limits
title: Sequences and their Limits
transcript: >-
  <p><span m="280">In this segment, we will discuss what a sequence is
  and</span> <span m="3590">what it means for a sequence to
  converge.</span></p><p><span m="6480">So a sequence is nothing but some
  collection of elements</span> <span m="13580">that are coming out of some set,
  and that collection of</span> <span m="17650">elements is indexed by the
  natural numbers.</span></p><p><span m="21690">We often use the notation, and
  we say that we have a sequence</span> <span m="27530">ai, or sometimes we use
  the notation that we have a</span> <span m="31510">sequence of this kind to
  emphasize the fact that it's a</span> <span m="34830">sequence and not just a
  single number.</span></p><p><span m="37780">And what we mean by this is that
  we have i, an index that</span> <span m="43260">runs over the natural numbers,
  which is the set of positive</span> <span m="48470">integers, and each ai is
  an element of some set.</span></p><p><span m="57110">In many cases, the set is
  going to be just the real</span> <span m="60460">line, in which case we're
  dealing with a sequence of</span> <span m="63890">real
  numbers.</span></p><p><span m="65099">But it is also possible that the set
  over which our</span> <span m="69030">sequence takes values is Euclidean space
  n-dimensional</span> <span m="75000">space, in which case we're dealing
  with</span> <span m="76710">a sequence of vectors.</span></p><p><span
  m="78230">But it also could be any other kind of set.</span></p><p><span
  m="82300">Now, the definition that I gave you may</span> <span m="84410">still
  be a little vague.</span></p><p><span m="85950">You may wonder how a
  mathematician would define</span> <span m="88460">formally a
  sequence.</span></p><p><span m="90170">Formally, what a sequence is, is just a
  function that, to</span> <span m="96830">any natural number, associates an
  element of S. In</span> <span m="104700">particular, if we evaluate the
  function f at some argument i,</span> <span m="110920">this gives us the ith
  element of the sequence.</span></p><p><span m="114570">So that's what a
  sequence is.</span></p><p><span m="116590">Now, about sequences, we typically
  care whether a</span> <span m="119780">sequence converges to some number a,
  and we often use</span> <span m="125500">this notation.</span></p><p><span
  m="126360">But to make it more precise, you also add</span> <span
  m="129940">this notation here.</span></p><p><span m="131630">And we read this
  as saying that as i converges to</span> <span m="135520">infinity, the
  sequence ai converges to a</span> <span m="138460">certain number
  a.</span></p><p><span m="140360">A more formal mathematical notation would be
  the limit as</span> <span m="145380">i goes to infinity of ai is equal to a
  certain number, a.</span></p><p><span m="152470">But what exactly does this
  mean?</span></p><p><span m="155370">What does it mean for a sequence to
  converge?</span></p><p><span m="157329">What is the formal
  definition?</span></p><p><span m="159550">It is as follows.</span></p><p><span
  m="161180">Let us plot the sequence as a function of i.</span></p><p><span
  m="167050">So this is the i-axis, and here we plot entries of
  ai.</span></p><p><span m="172220">For a sequence to converge to a certain
  number a, we need to</span> <span m="176670">the following to
  happen.</span></p><p><span m="178820">If we draw a small band around that
  number a, what we want is</span> <span m="186070">that the elements of the
  sequence, as i increases,</span> <span m="191440">eventually get inside this
  band and stay</span> <span m="196140">inside that band
  forever.</span></p><p><span m="199020">Now, let us turn this into a more
  precise statement.</span></p><p><span m="202579">What we mean is the
  following.</span></p><p><span m="205600">If I give you some positive number
  epsilon, and I'm going</span> <span m="211920">to use that positive number
  epsilon to define a band</span> <span m="215790">around the number
  a.</span></p><p><span m="217820">So it's this band here.</span></p><p><span
  m="221810">If I give you a positive number epsilon, and therefore,</span>
  <span m="224150">this way, have defined a certain band, there exists a</span>
  <span m="228890">time after which the entries will get the inside the
  band.</span></p><p><span m="233430">In this picture, it would be this
  time.</span></p><p><span m="236390">So there exists a time--</span> <span
  m="243940">let's call that time i0--</span> <span m="247470">so i0 is here
  such that after that time, what we have is</span> <span m="264490">that the
  element of the sequence is</span> <span m="266430">within epsilon of
  a.</span></p><p><span m="274540">So this is the formal definition of
  convergence of a</span> <span m="278130">sequence to a certain number
  a.</span></p><p><span m="280120">The definition may look formidable and
  difficult to</span> <span m="282890">parse, but what it says in plain</span>
  <span m="285230">English is pretty simple.</span></p><p><span m="286980">No
  matter what kind of band I take around my limit a,</span> <span
  m="292150">eventually, the sequence will be inside this band and will</span>
  <span m="295570">stay inside there.</span></p><p><span m="298050">Convergence
  of sequences has some very nice properties that</span> <span m="301700">you're
  probably familiar with.</span></p><p><span m="303400">For example, if I tell
  you that a certain sequence</span> <span m="306580">converges to a number a
  and another sequence converges to</span> <span m="310670">a number b, then we
  will have that ai plus bi, which is a</span> <span m="317800">new
  sequence--</span> <span m="318650">the ith element of the sequence is this
  sum--</span> <span m="321340">will converge to a plus b.</span></p><p><span
  m="324010">Or similarly, ai times bi, which is another sequence,</span> <span
  m="328720">converges to a times b.</span></p><p><span m="331180">And if, in
  addition, g is a continuous function, then g of</span> <span m="341880">ai
  will converge to g of a.</span></p><p><span m="346840">So for example, if the
  ais converge to a, then the</span> <span m="351890">sequence ai squared is
  going to converge to a squared.</span></p><p>&nbsp;</p>
uid: 157a587804d90871cc35477ea14c482a
type: course
layout: video
---
