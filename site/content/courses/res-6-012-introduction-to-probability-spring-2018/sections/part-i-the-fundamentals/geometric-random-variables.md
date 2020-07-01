---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: whbKmwMmB4s
    parent_uid: e2a931562f1da978adfc2e08360c695b
    title: Video-YouTube-Stream
    type: Video
    uid: 3690857acbe53160a8ba01c44230bb0d
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/whbKmwMmB4s/default.jpg'
    parent_uid: e2a931562f1da978adfc2e08360c695b
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: c53bbe55466dbd8faa45ff49173b342c
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: whbKmwMmB4s
    parent_uid: e2a931562f1da978adfc2e08360c695b
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 53879ff994a81e6862087d708ad000dd
  - id: whbKmwMmB4s.srt
    parent_uid: e2a931562f1da978adfc2e08360c695b
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/geometric-random-variables/whbKmwMmB4s.srt
    title: 3play caption file
    type: null
    uid: ac424b6c7da06bb7319cbd5ebf308f2a
  - id: whbKmwMmB4s.pdf
    parent_uid: e2a931562f1da978adfc2e08360c695b
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/geometric-random-variables/whbKmwMmB4s.pdf
    title: 3play pdf file
    type: null
    uid: 59cca1ab42f9464d0a4846b5689373ee
  - id: Caption-3Play YouTube id-SRT
    parent_uid: e2a931562f1da978adfc2e08360c695b
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: d0849ccc8f8a18336adae9cdd1be47ed
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: e2a931562f1da978adfc2e08360c695b
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 325a50e38a9c75f977c0b017d2a816d4
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L05-07_300k.mp4
    parent_uid: e2a931562f1da978adfc2e08360c695b
    title: Video-Internet Archive-MP4
    type: Video
    uid: f8a7b3492b4f73c83f18d96d201c7437
inline_embed_id: 34855723geometricrandomvariables30200228
order_index: 519
parent_uid: 9ca6b310dc93095c9ac0f0e5f95e6930
related_resources_text: ''
short_url: geometric-random-variables
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/geometric-random-variables
title: Geometric Random Variables
transcript: >-
  <p><span m="2660">The last discrete random variable that we will
  discuss</span> <span m="5830">is the so-called geometric random
  variable.</span></p><p><span m="8730">It shows up in the context of the
  following experiment.</span></p><p><span m="12060">We have a coin and we toss
  it infinitely many times and</span> <span
  m="16970">independently.</span></p><p><span m="18260">And at each coin toss we
  have a fixed probability of heads,</span> <span m="21420">which is some given
  number, p.</span></p><p><span m="23120">This is a parameter that specifies the
  experiment.</span></p><p><span m="28310">When we say that the infinitely many
  tosses are</span> <span m="31270">independent, what we mean in a mathematical
  and formal sense</span> <span m="36690">is that any finite subset of those
  tosses are independent</span> <span m="41030">of each
  other.</span></p><p><span m="42270">I'm only making this comment because we
  introduced a</span> <span m="44850">definition of independence of finitely
  many events, but had</span> <span m="48340">never defined the notion of
  independence or infinitely</span> <span m="51570">many
  events.</span></p><p><span m="53910">The sample space for this experiment is
  the set of</span> <span m="56530">infinite sequences of heads and
  tails.</span></p><p><span m="58980">So a typical outcome of this
  experiment</span> <span m="61640">might look like this.</span></p><p><span
  m="63340">It's a sequence of heads and tails in some arbitrary
  order.</span></p><p><span m="67990">And of course, it's an infinite sequence,
  so it</span> <span m="70570">continues forever.</span></p><p><span
  m="71940">But I'm only showing you here the</span> <span m="73539">beginning
  of that sequence.</span></p><p><span m="76100">We're interested in the
  following random variable, X,</span> <span m="79550">which is the number of
  tosses until the first heads.</span></p><p><span m="83160">So if our sequence
  looked like this, our random variable</span> <span m="87170">would be taking a
  value of 5.</span></p><p><span m="90950">A random variable of this kind
  appears in many applications</span> <span m="94100">and many real world
  contexts.</span></p><p><span m="96120">In general, it models situations where
  we're waiting</span> <span m="99390">for something to
  happen.</span></p><p><span m="101770">Suppose that we keep doing trials at
  each time and the</span> <span m="106710">trial can result either in success
  or failure.</span></p><p><span m="110110">And we're counting the number of
  trials it takes until a</span> <span m="113550">success is observed for the
  first time.</span></p><p><span m="117670">Now, these trials could be
  experiments of some kind,</span> <span m="121370">could be processes of some
  kind, or they could be whether</span> <span m="125470">a customer shows up in
  a store in a particular second or not.</span></p><p><span m="130020">So there
  are many diverse interpretations of the words</span> <span m="132940">trial
  and of the word success that would allow us to apply</span> <span
  m="137820">this particular model to a given situation.</span></p><p><span
  m="141720">Now, let us move to the calculation of the PMF of this</span> <span
  m="145010">random variable.</span></p><p><span m="146300">By definition, what
  we need to calculate is the probability</span> <span m="150280">that the
  random variable takes on a</span> <span m="152530">particular numerical
  value.</span></p><p><span m="155160">What does it mean for X to be equal to
  k?</span></p><p><span m="158690">What it means is that the first heads was
  observed in</span> <span m="163250">the k-th trial, which means that the first
  k minus 1</span> <span m="167690">trials were tails, and then were followed by
  heads in the</span> <span m="173440">k-th trial.</span></p><p><span
  m="176530">This is an event that only concerns the first k trials,</span>
  <span m="180400">and the probability of this event can be calculated
  using</span> <span m="184030">the fact that different coin tosses or different
  trials are</span> <span m="187400">independent.</span></p><p><span
  m="188100">It is the probability of tails in the first coin toss times</span>
  <span m="192620">the probability of tails in the second coin toss, and
  so</span> <span m="195840">on, k minus 1 times.</span></p><p><span
  m="198000">So we get an exponent here of k minus 1 times the</span> <span
  m="201600">probability of heads in the k-th coin toss.</span></p><p><span
  m="205120">So this is the form of the PMF of this particular random</span>
  <span m="208380">variable, and that formula applies for the possible</span>
  <span m="211630">values of k, which are the positive
  integers.</span></p><p><span m="216310">Because the time of the first head can
  only</span> <span m="219790">be a positive integer.</span></p><p><span
  m="221829">And any positive integer is possible, so our random</span> <span
  m="225430">variable takes values in a discrete but infinite
  set.</span></p><p><span m="230770">The geometric PMF has a shape of this
  type.</span></p><p><span m="234670">Here we see the plot for the case where p
  equals to 1/3.</span></p><p><span m="240070">The probability that the first
  head shows up in the first</span> <span m="243670">trial is equal to p, that's
  the probability of heads.</span></p><p><span m="247490">The probability that
  it shows up in the next trial, that the</span> <span m="251130">first head
  appears in the second trial, this is the</span> <span m="254760">probability
  that we had heads following a tail.</span></p><p><span m="260529">So we have
  the probability of a tail and then times the</span> <span
  m="263070">probability of a head.</span></p><p><span m="264580">And then each
  time that we move to a further entry, we</span> <span m="268220">multiply by a
  further factor of 1 minus p.</span></p><p><span m="274110">Finally, one little
  technical remark.</span></p><p><span m="278420">There's a possible and rather
  annoying outcome of this</span> <span m="282080">experiment, which would be
  that we observe a sequence of</span> <span m="286640">tails forever and no
  heads.</span></p><p><span m="290210">In that case, our random variable is not
  well-defined,</span> <span m="293450">because there is no first heads to
  consider.</span></p><p><span m="296480">You might say that in this case our
  random variable takes</span> <span m="300190">a value of infinity, but we
  would rather not have to deal</span> <span m="304150">with random variables
  that could be infinite.</span></p><p><span m="307410">Fortunately, it turns
  out that this particular event has 0</span> <span m="311760">probability of
  occurring, which I will now try to show.</span></p><p><span m="316890">So this
  is the event that we always see tails.</span></p><p><span m="320980">Let us
  compare it with the event where we see tails in</span> <span m="325630">the
  first k trials.</span></p><p><span m="330860">How do these two events
  relate?</span></p><p><span m="335344">If we have always tails, then we will
  have tails in the</span> <span m="340990">first k trials.</span></p><p><span
  m="342720">So this event implies that event.</span></p><p><span
  m="346730">This event is smaller than that event.</span></p><p><span
  m="350540">So the probability of this event is less than or equal to</span>
  <span m="354140">the probability of that second event.</span></p><p><span
  m="357620">And the probability of that second event is 1</span> <span
  m="360240">minus p to the k.</span></p><p><span m="364800">Now, this is true
  no matter what k we choose.</span></p><p><span m="369700">And by taking k
  arbitrarily large, this number here</span> <span m="374720">becomes
  arbitrarily small.</span></p><p><span m="379310">Why does it become
  arbitrarily small?</span></p><p><span m="381790">Well, we're assuming that p
  is positive, so 1 minus p is a</span> <span m="385880">number less than
  1.</span></p><p><span m="387590">And when we multiply a number strictly less
  than 1 by itself</span> <span m="391040">over and over, we get arbitrarily
  small numbers.</span></p><p><span m="394659">So the probability of never
  seeing a head is less than or</span> <span m="399409">equal to an arbitrarily
  small positive number.</span></p><p><span m="403130">So the only possibility
  for this is that it is equal to 0.</span></p><p><span m="409040">So the
  probability of not ever seeing any heads is equal to</span> <span
  m="413010">0, and this means that we can ignore</span> <span m="416350">this
  particular outcome.</span></p><p><span m="420840">And as a side consequence of
  this, the sum of the</span> <span m="425340">probabilities of the different
  possible values of k is going</span> <span m="429650">to be equal to 1,
  because we're certain that the random</span> <span m="433830">variable is
  going to take a finite value.</span></p><p><span m="437260">And so when we sum
  probabilities of all the</span> <span m="439530">possible finite values, that
  sum will have</span> <span m="442460">to be equal to 1.</span></p><p><span
  m="443800">And indeed, you can use the formula for the geometric</span> <span
  m="446910">series to verify that, indeed, the sum of these numbers
  here,</span> <span m="451300">when you add over all values of k, is, indeed,
  equal to 1.</span></p><p>&nbsp;</p>
uid: e2a931562f1da978adfc2e08360c695b
type: courses
layout: video
---
