---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: JoQDJMZA7F8
    parent_uid: 9fdc632ad33f569a6d4db299d62285b5
    title: Video-YouTube-Stream
    type: Video
    uid: ecce0984401558080ed1aeac81b15c14
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/JoQDJMZA7F8/default.jpg'
    parent_uid: 9fdc632ad33f569a6d4db299d62285b5
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: a9349d260eabf70c9985dae7f59eaa29
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: JoQDJMZA7F8
    parent_uid: 9fdc632ad33f569a6d4db299d62285b5
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: fac87eb54916816cf9fa2bd9d6c030db
  - id: JoQDJMZA7F8.srt
    parent_uid: 9fdc632ad33f569a6d4db299d62285b5
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/uniform-random-variables/JoQDJMZA7F8.srt
    title: 3play caption file
    type: null
    uid: 7e654111c8322b58b7936788cb7a2678
  - id: JoQDJMZA7F8.pdf
    parent_uid: 9fdc632ad33f569a6d4db299d62285b5
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/uniform-random-variables/JoQDJMZA7F8.pdf
    title: 3play pdf file
    type: null
    uid: 1d88bfc10e2d4117a52c8620e0437958
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 9fdc632ad33f569a6d4db299d62285b5
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 582e8a18512f05233665b12fe275560b
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 9fdc632ad33f569a6d4db299d62285b5
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: ecd172f1abad30c9efb5139bb9b70a0f
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L05-05_300k.mp4
    parent_uid: 9fdc632ad33f569a6d4db299d62285b5
    title: Video-Internet Archive-MP4
    type: Video
    uid: b287076caedc2c21f15c43f44343101c
inline_embed_id: 12543702uniformrandomvariables71084443
order_index: 501
parent_uid: 9ca6b310dc93095c9ac0f0e5f95e6930
related_resources_text: ''
short_url: uniform-random-variables
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/uniform-random-variables
title: Uniform Random Variables
transcript: >-
  <p><span m="1340">In this segment and the next two, we will introduce a
  few</span> <span m="4440">useful random variables that show up in many
  applications--</span> <span m="8590">discrete uniform random variables,
  binomial random</span> <span m="11730">variables, and geometric random
  variables So let's</span> <span m="14870">start with a discrete
  uniform.</span></p><p><span m="17030">A discrete uniform random variable is
  one that has a PMF</span> <span m="21460">of this form.</span></p><p><span
  m="23060">It takes values in a certain range, and each one of the</span> <span
  m="27530">values in that range has the same probability.</span></p><p><span
  m="31060">To be more precise, a discrete uniform is completely</span> <span
  m="35910">determined by two parameters that are two integers, a and</span>
  <span m="39970">b, which are the beginning and the end of the range of
  that</span> <span m="44290">random variable.</span></p><p><span
  m="45790">We're thinking of an experiment where we're going</span> <span
  m="47930">to pick an integer at random among the values that are</span> <span
  m="54570">between a and b with the end points a and b
  included.</span></p><p><span m="59980">And all of these values are equally
  likely.</span></p><p><span m="63120">To be more formal, our sample space is
  the set of integers</span> <span m="67230">from a until b.</span></p><p><span
  m="69402">And the number of points that we have in our sample space is</span>
  <span m="74890">b minus a plus 1 possible values.</span></p><p><span
  m="85120">What is the random variable that we're talking
  about?</span></p><p><span m="87780">If this is our sample space, the outcome
  of the experiment</span> <span m="91720">is already a
  number.</span></p><p><span m="93410">And the numerical value of the random
  variable is just the</span> <span m="97210">number that we happen to pick in
  that range.</span></p><p><span m="100820">So in this context, there isn't
  really a distinction</span> <span m="103750">between the outcome of the
  experiment and the numerical</span> <span m="106650">value of the random
  variable.</span></p><p><span m="108390">They are one in the
  same.</span></p><p><span m="111310">Now since each one of the values is
  equally likely, and</span> <span m="115090">since we have so many possible
  values, this means that the</span> <span m="118210">probability of any
  particular value is going to be 1 over b</span> <span m="124040">minus a plus
  1.</span></p><p><span m="126400">This is the choice for the probability that
  would make</span> <span m="129330">all the probabilities in the PMF sum to
  one.</span></p><p><span m="134270">What does this random variable model in the
  real world?</span></p><p><span m="138160">It models a case where we have a
  range of possible values,</span> <span m="142440">and we have complete
  ignorance, no reason to</span> <span m="145000">believe that one value is more
  likely than the other.</span></p><p><span m="148620">As an example, suppose
  that you look at your digital</span> <span m="151610">clock, and you look at
  the time.</span></p><p><span m="154050">And the time that it tells you is
  11:52 and 26 seconds.</span></p><p><span m="161780">And suppose that you just
  look at the seconds.</span></p><p><span m="165960">The seconds reading is
  something that takes values in</span> <span m="170329">the set from 0 to
  59.</span></p><p><span m="173520">So there are 60 possible
  values.</span></p><p><span m="176030">And if you just choose to look at your
  clock at a completely</span> <span m="180440">random time, there's no reason
  to expect that one reading</span> <span m="183950">would be more likely than
  the other.</span></p><p><span m="185940">All readings should be equally
  likely, and each one of them</span> <span m="188980">should have a probability
  of 1 over 60.</span></p><p><span m="193728">One final comment--</span> <span
  m="197250">let us look at the special case where the beginning and</span>
  <span m="201650">the endpoint of the range of possible values is the
  same,</span> <span m="205230">which means that our random variable can only
  take one</span> <span m="208465">value, namely that particular number
  a.</span></p><p><span m="212570">In that case, the random variable that we're
  dealing</span> <span m="215350">with is really a constant.</span></p><p><span
  m="217579">It doesn't have any randomness.</span></p><p><span m="218750">It is
  a deterministic random variable that takes a</span> <span
  m="222440">particular value of a with probability equal to
  1.</span></p><p><span m="227700">It is not random in the common sense of the
  world, but</span> <span m="231890">mathematically we can still consider it a
  random variable</span> <span m="236690">that just happens to be the same no
  matter what the</span> <span m="240520">outcome of the experiment
  is.</span></p><p>&nbsp;</p>
uid: 9fdc632ad33f569a6d4db299d62285b5
type: course
layout: video
---
