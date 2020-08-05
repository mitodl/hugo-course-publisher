---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: poeHeiiiLKI
    parent_uid: 319bf5b353f0e7d3a8af119c41d46a5d
    title: Video-YouTube-Stream
    type: Video
    uid: ba8d84fc41b47d4f2b7668f8b419487a
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/poeHeiiiLKI/default.jpg'
    parent_uid: 319bf5b353f0e7d3a8af119c41d46a5d
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: c78b455b45a28d3acd06f9547c9f8c3a
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L04-01_300k.mp4
    parent_uid: 319bf5b353f0e7d3a8af119c41d46a5d
    title: Video-Internet Archive-MP4
    type: Video
    uid: 168231d1b3e6a2b6dcdc170d997dbfc9
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: poeHeiiiLKI
    parent_uid: 319bf5b353f0e7d3a8af119c41d46a5d
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: d5a8396ca6607c398021c1a0d9961391
  - id: poeHeiiiLKI.srt
    parent_uid: 319bf5b353f0e7d3a8af119c41d46a5d
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/lecture-overview-3/poeHeiiiLKI.srt
    title: 3play caption file
    type: null
    uid: 334125dec4e3d6c58fce66fa3ffab6ff
  - id: poeHeiiiLKI.pdf
    parent_uid: 319bf5b353f0e7d3a8af119c41d46a5d
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/lecture-overview-3/poeHeiiiLKI.pdf
    title: 3play pdf file
    type: null
    uid: e9c1d9f12a5472f34ff93e49c1f9f115
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 319bf5b353f0e7d3a8af119c41d46a5d
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 0e99d9914081961aa266954a6dff2658
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 319bf5b353f0e7d3a8af119c41d46a5d
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 799db28c1a0324fe2b91ac65b90998a8
inline_embed_id: 65046588lectureoverview94528352
order_index: 384
parent_uid: 9ca6b310dc93095c9ac0f0e5f95e6930
related_resources_text: ''
short_url: lecture-overview-3
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/lecture-overview-3
title: Lecture Overview
transcript: >-
  <p><span m='130'>A basketball coach has 20 players available.</span>
  </p><p><span m='3510'>Out of them, he needs to choose five for the
  starting</span> <span m='6500'>lineup, and seven who would be sitting on the
  bench.</span> </p><p><span m='10450'>In how many ways can the coach choose
  these 5 plus 7 players?</span> </p><p><span m='14870'>It is certainly a huge
  number, but what exactly is it?</span> </p><p><span m='18660'>In this lecture,
  we will learn how to answer</span> <span m='20800'>questions of this
  kind.</span> </p><p><span m='22810'>More abstractly, we will develop methods
  for counting</span> <span m='26190'>the number of elements of a given set
  which is described</span> <span m='29680'>in some implicit way.</span>
  </p><p><span m='31750'>Now, why do we care?</span> </p><p><span m='34530'>The
  reason is that in many models, the calculation of</span> <span
  m='37340'>probabilities reduces to counting.</span> </p><p><span
  m='39530'>Counting the number of elements of various sets.</span> </p><p><span
  m='43320'>Suppose that we have a probability model in which the</span> <span
  m='46050'>sample space, Omega, is finite, and consists of n</span> <span
  m='50570'>equally likely elements.</span> </p><p><span m='52500'>So each
  element has probability 1/n.</span> </p><p><span m='56450'>Suppose now that
  we're interested in the probability</span> <span m='59340'>of a certain set,
  A, which has k elements.</span> </p><p><span m='63500'>Since each one of the
  elements of A has probability 1/n, and</span> <span m='68750'>since A has k
  distinct elements, then by the</span> <span m='73150'>additivity axiom, the
  probability of A is equal to k</span> <span m='77289'>times 1 over n.</span>
  </p><p><span m='79800'>Therefore to find the probability of A, all we
  have</span> <span m='83440'>to do is to count the number of elements of Omega
  and the</span> <span m='87370'>number of elements of A, and so determine
  the</span> <span m='90580'>numbers k and n.</span> </p><p><span m='93180'>Of
  course, if a set is described explicitly through a</span> <span m='96390'>list
  of its elements, then counting is trivial.</span> </p><p><span m='100090'>But
  when a set is given through some abstract</span> <span m='102610'>description,
  as in our basketball team example,</span> <span m='105950'>counting can be a
  challenge.</span> </p><p><span m='108350'>In this lecture, we will start with
  a powerful tool, the</span> <span m='112340'>basic counting principle, which
  allows us to break a</span> <span m='116085'>counting problem into a sequence
  of</span> <span m='118350'>simpler counting problems.</span> </p><p><span
  m='121190'>We will then count permutations, subsets,</span> <span
  m='125230'>combinations, and partitions.</span> </p><p><span m='128139'>We
  will see shortly what all of these terms mean.</span> </p><p><span
  m='132220'>In the process we will solve a number of example problems,</span>
  <span m='135340'>and we will also derive the formula for the binomial</span>
  <span m='138600'>probabilities, the probabilities that describe</span> <span
  m='141740'>the number of heads in a sequence of</span> <span
  m='144430'>independent coin tosses.</span> </p><p><span m='146710'>So, let us
  get started.</span> </p><p></p>
uid: 319bf5b353f0e7d3a8af119c41d46a5d
type: course
layout: video
---
