---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: hJjiCrdsNV8
    parent_uid: b4d72f15bdbe1dd816b45d9308019eb9
    title: Video-YouTube-Stream
    type: Video
    uid: 7f6bf4092aebb84e033584403a040083
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/hJjiCrdsNV8/default.jpg'
    parent_uid: b4d72f15bdbe1dd816b45d9308019eb9
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: bf4cfa0982718e7c920e455e3885e879
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: hJjiCrdsNV8
    parent_uid: b4d72f15bdbe1dd816b45d9308019eb9
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: c714e57623b0a3b07c10383b1551e18f
  - id: hJjiCrdsNV8.srt
    parent_uid: b4d72f15bdbe1dd816b45d9308019eb9
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/partitions/hJjiCrdsNV8.srt
    title: 3play caption file
    type: null
    uid: 8a8599debfbeff3df621c0548fceb4d0
  - id: hJjiCrdsNV8.pdf
    parent_uid: b4d72f15bdbe1dd816b45d9308019eb9
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/partitions/hJjiCrdsNV8.pdf
    title: 3play pdf file
    type: null
    uid: 6b52ed8d6905188a98b4c989f12852e2
  - id: Caption-3Play YouTube id-SRT
    parent_uid: b4d72f15bdbe1dd816b45d9308019eb9
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 087844737017765560f43791499232c3
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: b4d72f15bdbe1dd816b45d9308019eb9
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 11dee8ab6f589c971e530fdff83772f4
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L04-07_300k.mp4
    parent_uid: b4d72f15bdbe1dd816b45d9308019eb9
    title: Video-Internet Archive-MP4
    type: Video
    uid: 565df8697e46a3aa87af57cd7773ff47
inline_embed_id: 75036406partitions87755031
order_index: 438
parent_uid: 9ca6b310dc93095c9ac0f0e5f95e6930
related_resources_text: ''
short_url: partitions
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/partitions
title: Partitions
transcript: >-
  <p><span m="780">We now come to our last major class of counting
  problems.</span></p><p><span m="4520">We will count the number of ways that a
  given set can be</span> <span m="7170">partitioned into pieces of given
  sizes.</span></p><p><span m="10760">We start with a set that consists</span>
  <span m="13770">of n different elements.</span></p><p><span m="17540">And we
  have r persons.</span></p><p><span m="20300">We want to give n1 items to the
  first person, give n2</span> <span m="28960">items to the second person, and
  so on.</span></p><p><span m="34780">And finally, we want to give
  n-sub-r</span> <span m="38310">items to the rth person.</span></p><p><span
  m="42230">These numbers, n1, n2, up to nr are given to us, how many</span>
  <span m="47510">items each person should get.</span></p><p><span m="49920">And
  these numbers must add to n so that every item in the</span> <span
  m="56140">original set is given to some person.</span></p><p><span
  m="59380">We want to count to the number of ways that this can be
  done.</span></p><p><span m="64629">This is the number of ways that we can
  partition a given</span> <span m="68150">set into subsets of prescribed
  sizes.</span></p><p><span m="72650">Let's use c to denote the number of</span>
  <span m="75160">ways this can be done.</span></p><p><span m="76910">We want to
  calculate this number c.</span></p><p><span m="79620">Instead of calculating
  directly, we're going to use</span> <span m="82730">the same trick that we
  employed when we counted</span> <span m="86400">combinations and derived the
  binomial coefficient.</span></p><p><span m="90170">That is, we're going to
  consider, in a much simpler</span> <span m="93229">counting problem, the
  problem of ordering n items, taking</span> <span m="97840">the n items in our
  original set and putting them in an</span> <span m="102289">ordered
  list.</span></p><p><span m="104380">Of course, we know in how many ways this
  can be done.</span></p><p><span m="108560">Ordering n items can be done in n
  factorial ways.</span></p><p><span m="114170">This is the count of the number
  of</span> <span m="115590">permutations of n items.</span></p><p><span
  m="117960">But now let us think of a different way of ordering the</span>
  <span m="120990">n items, an indirect way.</span></p><p><span m="123150">It
  proceeds according to the following stages.</span></p><p><span m="126250">We
  start with the n items.</span></p><p><span m="128340">And we first distribute
  them to the different persons.</span></p><p><span m="134410">Having done that,
  then we ask person one to take their</span> <span m="139993">items, order
  them, and put them in the first n1</span> <span m="145079">slots of our
  list.</span></p><p><span m="148390">Then person two takes their items and puts
  them into the</span> <span m="153950">next n2 slots in our
  list.</span></p><p><span m="157430">We continue this way.</span></p><p><span
  m="158920">And finally, the last person takes the items that they</span> <span
  m="161970">possess and puts them in the last n-sub-r</span> <span
  m="165890">slots in this list.</span></p><p><span m="171810">In how many ways
  can this process be carried out?</span></p><p><span m="176050">We have c
  choices on how to partition the</span> <span m="181060">given set into
  subsets.</span></p><p><span m="184200">Then person one has n1 factorial
  choices on how to</span> <span m="192170">order the n1 items that that person
  processes.</span></p><p><span m="196570">Person two has n2 factorial choices
  for how to order the</span> <span m="201140">n2 items that it possesses, and
  so on until the last</span> <span m="205410">person, who has nr factorial
  choices for</span> <span m="210200">ordering their
  elements.</span></p><p><span m="213230">This multi-stage process results in an
  ordered list of</span> <span m="217680">the n terms.</span></p><p><span
  m="219860">This is the number of ways these multi-stage process can</span>
  <span m="222780">be carried out.</span></p><p><span m="224770">On the other
  hand, we know that the number of possible</span> <span m="228250">orderings of
  the items is n factorial.</span></p><p><span m="231520">So we have this
  equality.</span></p><p><span m="235130">We can solve this for
  c.</span></p><p><span m="237820">And we find the answer, that the number of
  ways that the n</span> <span m="242600">items can be partitioned into subsets
  of the given sizes is</span> <span m="247090">n factorial divided by the
  product of the factorials of</span> <span m="251170">the different
  ni's.</span></p><p><span m="253710">This particular expression is called the
  multinomial</span> <span m="257399">coefficient, and it generalizes the
  binomial</span> <span m="260920">coefficient.</span></p><p><span
  m="261970">The binomial coefficient was referring to the case where we</span>
  <span m="266690">essentially split our set into one subset with k
  elements,</span> <span m="274870">and then the second subset gets the
  remaining elements.</span></p><p><span m="280850">So the special case where r
  is equal to 2, and n1 is equal to</span> <span m="287600">k, n2 equals to n
  minus k, this corresponds to a</span> <span m="291940">partition of a set into
  two subsets, or what is the same</span> <span m="296210">just selecting the
  first subset and putting everything</span> <span m="300910">else in the second
  subset.</span></p><p><span m="303260">And you can check that in this
  particular case, the</span> <span m="307490">expression for the multinomial
  coefficient agrees with the</span> <span m="310480">expression that we had
  derived for the binomial coefficient.</span></p><p>&nbsp;</p>
uid: b4d72f15bdbe1dd816b45d9308019eb9
type: courses
layout: video
---
