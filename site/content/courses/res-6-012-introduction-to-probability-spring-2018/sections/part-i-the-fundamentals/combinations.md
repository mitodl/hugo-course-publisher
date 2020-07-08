---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: o_qO7RYBF10
    parent_uid: d74ab93a80aec4cf8de5c8fa1bf04d7b
    title: Video-YouTube-Stream
    type: Video
    uid: fb0870a37cc1f212ca1d81b74af73dfc
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/o_qO7RYBF10/default.jpg'
    parent_uid: d74ab93a80aec4cf8de5c8fa1bf04d7b
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 46e5c500f236b7ab1288592d1f828d0d
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: o_qO7RYBF10
    parent_uid: d74ab93a80aec4cf8de5c8fa1bf04d7b
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: f3acc2bba8936fce2afa21f934fd210c
  - id: o_qO7RYBF10.srt
    parent_uid: d74ab93a80aec4cf8de5c8fa1bf04d7b
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/combinations/o_qO7RYBF10.srt
    title: 3play caption file
    type: null
    uid: e9f9a60e2c07e1c5f747c591cf68f5bb
  - id: o_qO7RYBF10.pdf
    parent_uid: d74ab93a80aec4cf8de5c8fa1bf04d7b
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/combinations/o_qO7RYBF10.pdf
    title: 3play pdf file
    type: null
    uid: 02a411b5653c7f16ce238c3b058e93d9
  - id: Caption-3Play YouTube id-SRT
    parent_uid: d74ab93a80aec4cf8de5c8fa1bf04d7b
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 918c9e577929fdeae6f3467f8e8aa4a3
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: d74ab93a80aec4cf8de5c8fa1bf04d7b
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: f9158a53bf7a1b8cc7ea7a7fee2e7570
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L04-04_300k.mp4
    parent_uid: d74ab93a80aec4cf8de5c8fa1bf04d7b
    title: Video-Internet Archive-MP4
    type: Video
    uid: 015f1fa5dfab838f2d98b060091190bb
inline_embed_id: 49934637combinations14454896
order_index: 411
parent_uid: 9ca6b310dc93095c9ac0f0e5f95e6930
related_resources_text: ''
short_url: combinations
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/combinations
title: Combinations
transcript: >-
  <p><span m="1980">Let us now study a very important counting problem,</span>
  <span m="4910">the problem of counting combinations.</span></p><p><span
  m="7360">What is a combination?</span></p><p><span m="9520">We start with a
  set of n elements.</span></p><p><span m="13830">And we're also given a
  non-negative integer, k.</span></p><p><span m="18580">And we want to construct
  or to choose a subset of the</span> <span m="22780">original set that has
  exactly k elements.</span></p><p><span m="27480">In different language, we
  want to pick a combination of k</span> <span m="30990">elements of the
  original set.</span></p><p><span m="32820">In how many ways can this be
  done?</span></p><p><span m="36160">Let us introduce some
  notation.</span></p><p><span m="38870">We use this notation here, which we
  read as &quot;n-choose-k,&quot;</span> <span m="44460">to denote exactly the
  quantity that we want to calculate,</span> <span m="47830">namely the number
  of subsets of a given n-element set,</span> <span m="52540">where we only
  count those subsets that</span> <span m="54770">have exactly k
  elements.</span></p><p><span m="57980">How are we going to calculate this
  quantity?</span></p><p><span m="60870">Instead of proceeding directly, we're
  going to</span> <span m="63450">consider a somewhat different counting problem
  which we're</span> <span m="66430">going to approach in two different ways,
  get two</span> <span m="69220">different answers, compare those answers, and
  by</span> <span m="72050">comparing them, we're going to get an equation,
  which is</span> <span m="75180">going to give us in the end, the desired
  number.</span></p><p><span m="79150">The alternative problem that we're
  going</span> <span m="81610">to use is the following.</span></p><p><span
  m="84050">We start, as before, with our given set that</span> <span
  m="87850">consists of n elements.</span></p><p><span m="90240">But instead of
  picking a subset, what we want to do is</span> <span m="95229">to construct a
  list, an ordered sequence, that</span> <span m="99940">consists of k distinct
  elements taken out of the</span> <span m="104630">original
  set.</span></p><p><span m="106060">So we think of having k different slots,
  and we want</span> <span m="110370">to fill each one of those slots with one
  of the elements</span> <span m="113910">of the original
  set.</span></p><p><span m="115910">In how many ways can this be
  done?</span></p><p><span m="120590">Well, we want to use the counting
  principle.</span></p><p><span m="123130">So we want to decompose this problem
  into stages.</span></p><p><span m="127630">So what we can do is to choose each
  one of the k items that</span> <span m="131300">go into this list one at a
  time.</span></p><p><span m="133620">We first choose an item that goes to the
  first position, to</span> <span m="137270">the first slot.</span></p><p><span
  m="138640">Having used one of the items in that set, we're left with n</span>
  <span m="142120">minus 1 choices for the item that can go</span> <span
  m="146329">into the second slot.</span></p><p><span m="147990">And we continue
  similarly.</span></p><p><span m="150730">When we're ready to fill the last
  slot, we have already</span> <span m="153920">used k minus one of the items,
  which means that the number of</span> <span m="159230">choices that we're
  going to have at that stage is n</span> <span m="162420">minus k plus
  1.</span></p><p><span m="166050">At this point, it's also useful to simplify
  that</span> <span m="168520">expression a bit.</span></p><p><span
  m="169670">We observe that this is the same as n factorial divided by</span>
  <span m="176180">n the minus k factorial.</span></p><p><span m="179990">Why is
  this the case?</span></p><p><span m="181510">You can verify that this is
  correct by moving the</span> <span m="184310">denominator to the other
  side.</span></p><p><span m="186540">And when you do that, you realize that you
  have the</span> <span m="188870">product of all terms from n down to n minus k
  plus 1.</span></p><p><span m="193640">And then you have the product of n minus
  k going all the way</span> <span m="197780">down to one.</span></p><p><span
  m="199210">And that's exactly the product, which is the same as</span> <span
  m="202320">n factorial.</span></p><p><span m="203190">It's a product of all
  integers from n all the way down to 1.</span></p><p><span m="208390">So this
  was the first method of constructing the</span> <span m="210870">list that we
  wanted.</span></p><p><span m="212940">How about a second
  method?</span></p><p><span m="217120">What we can do is to first choose k
  items out of the</span> <span m="223620">original set, and then take those k
  terms and order them</span> <span m="232620">in a sequence to obtain an
  ordered list.</span></p><p><span m="237860">So we construct our ordered list
  in two stages.</span></p><p><span m="242240">In the first stage, how many
  choices [do] we have?</span></p><p><span m="244770">That's the number of
  subsets with k elements out of the</span> <span m="248490">original
  set.</span></p><p><span m="249990">This number, we don't know what it
  is.</span></p><p><span m="251950">That's what we're trying to
  calculate.</span></p><p><span m="253650">But we have a symbol for
  it.</span></p><p><span m="255890">It's n-choose-k.</span></p><p><span
  m="257950">How about the second stage?</span></p><p><span m="260459">We have k
  elements, and we want to</span> <span m="262410">arrange them in a
  sequence.</span></p><p><span m="264830">That is, we want to form a</span>
  <span m="266780">permutation of those k elements.</span></p><p><span
  m="269020">This is a problem that we have already studied, and we know</span>
  <span m="271850">that the answer is k factorial.</span></p><p><span
  m="275140">According to the counting principle, the number of ways</span>
  <span m="279070">that this two-stage construction can be made is</span> <span
  m="282790">equal to the product of the number of ways, number of</span> <span
  m="286790">options that we have in the first stage times the number</span>
  <span m="290390">of options that we have in the second
  stage.</span></p><p><span m="295659">So this is one answer for the number
  of</span> <span m="299280">possible ordered sequences.</span></p><p><span
  m="301280">This is another answer.</span></p><p><span m="302920">Of course,
  both of them are correct.</span></p><p><span m="305050">And therefore, they
  have to be equal.</span></p><p><span m="310940">And by using that equality, we
  can now find a formula for</span> <span m="315600">this coefficient n-choose-k
  simply by taking this k</span> <span m="319380">factorial factor and sending
  it to the denominator of that</span> <span
  m="323630">expression.</span></p><p><span m="324700">So by equating this
  expression with that expression here, we</span> <span m="329630">find the
  final answer, which is that the number of choices,</span> <span
  m="335920">n-choose-k, is equal to this expression here.</span></p><p><span
  m="340830">Now, this expression is valid only for</span> <span
  m="344409">numbers that make sense.</span></p><p><span m="346040">So n can be
  any integer, any non-negative integer.</span></p><p><span m="352400">And k,
  the only k's that make sense, would be k's</span> <span m="356240">from 0, 1
  up to n.</span></p><p><span m="359990">You may be wondering about some of the
  extreme cases of</span> <span m="363410">that formula.</span></p><p><span
  m="364250">What does it mean for n to be 0 or for k equal to
  0?</span></p><p><span m="369350">So let us consider now some of these extreme
  cases and make a</span> <span m="373190">sanity check about this
  formula.</span></p><p><span m="378990">So this is the formula that we have
  and</span> <span m="381520">that we want to check.</span></p><p><span
  m="382770">The first case to consider is the extreme case of</span> <span
  m="386900">n-choose-n.</span></p><p><span m="389310">What does that correspond
  to?</span></p><p><span m="390800">Out of a set with n elements, we want to
  choose a subset</span> <span m="394390">that has n
  elements.</span></p><p><span m="396030">There's not much of a choice
  here.</span></p><p><span m="397700">We just have to take all of the elements
  of the original</span> <span m="401270">set and put them in the
  subset.</span></p><p><span m="403190">So the subset is the same as the set
  itself.</span></p><p><span m="406940">So we only have one choice
  here.</span></p><p><span m="409190">That should be the
  answer.</span></p><p><span m="410820">Let's check it with the
  formula.</span></p><p><span m="412920">The formula gives us n factorial</span>
  <span m="415960">divided by n factorial.</span></p><p><span m="418909">And
  then, since k is equal to n, here we get zero factorial.</span></p><p><span
  m="425250">Is this correct?</span></p><p><span m="426730">Well, it becomes
  correct as long as we adopt the</span> <span m="429610">convention that zero
  factorial is equal to 1.</span></p><p><span m="433930">We're going to adopt
  this convention and keep it</span> <span m="436530">throughout this
  course.</span></p><p><span m="441230">Let's look at another extreme case now,
  the</span> <span m="444920">coefficient n choose 0.</span></p><p><span
  m="447150">This time let us start from the formula.</span></p><p><span
  m="449250">The formula tells us that this should be n factorial divided</span>
  <span m="453340">by 0 factorial and divided by n factorial, since the
  number</span> <span m="459370">k is equal to 0.</span></p><p><span
  m="461740">Using the convention that we have, this is equal to
  1.</span></p><p><span m="465520">So this is, again, equal to
  1.</span></p><p><span m="468630">Is it the correct answer?</span></p><p><span
  m="470420">How many subsets of a given set are there that have</span> <span
  m="474250">exactly zero elements?</span></p><p><span m="477190">Well, there's
  only one subset that has exactly 0 elements,</span> <span m="480940">and this
  is the empty set.</span></p><p><span m="484420">So this explains this
  particular answer and shows</span> <span m="487300">that it is meaningful and
  that it makes sense.</span></p><p><span m="492550">Now, let us use our
  understanding of those</span> <span m="495860">coefficients to solve a
  somewhat harder problem.</span></p><p><span m="502440">Suppose that for some
  reason, you want to</span> <span m="504320">calculate this
  sum.</span></p><p><span m="506340">What is it going to be?</span></p><p><span
  m="508800">One way of approaching this problem is to use the formula</span>
  <span m="513390">for these coefficients, do a lot of
  algebra.</span></p><p><span m="517710">And if you're really patient and
  careful, eventually you</span> <span m="521250">should be able to get the
  right answer.</span></p><p><span m="523320">But this is very
  painful.</span></p><p><span m="525110">Let us think whether there's a clever
  way, a shortcut, of</span> <span m="528590">obtaining this
  answer.</span></p><p><span m="530050">Let us try to think what this sum is all
  about.</span></p><p><span m="535170">This sum includes this term, which is the
  number of</span> <span m="538730">zero-element subsets.</span></p><p><span
  m="541360">This number, which is the number of subsets that have</span> <span
  m="544190">one element.</span></p><p><span m="545420">And we keep going all
  the way to the number of subsets that</span> <span m="549930">have exactly n
  elements.</span></p><p><span m="553110">So we're counting zero-element
  subsets, one-element subsets,</span> <span m="556670">all the way up to
  n.</span></p><p><span m="558820">So what we're counting really is the number
  of all subsets</span> <span m="564160">of our given set.</span></p><p><span
  m="567620">But this is a number that we know what it is.</span></p><p><span
  m="571450">The number of subsets of a given set with n</span> <span
  m="574470">elements is 2 to the n.</span></p><p><span m="578290">So by
  thinking carefully and interpreting the terms in this</span> <span
  m="582680">sum, we were able to solve this problem very fast,</span> <span
  m="587830">something that would be extremely tedious if we had</span> <span
  m="590810">tried to do it algebraically.</span></p><p><span m="594390">For
  some practice with this idea, why don't you pause at</span> <span
  m="597680">this point and try to solve a problem of a similar
  nature?</span></p><p>&nbsp;</p>
uid: d74ab93a80aec4cf8de5c8fa1bf04d7b
type: courses
layout: video
---
