---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: 5CHUuMZZzSY
    parent_uid: d650aa643493fafc25aab5e948418693
    title: Video-YouTube-Stream
    type: Video
    uid: f1dfd5b24e6c6bac2e11763182f6cf25
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/5CHUuMZZzSY/default.jpg'
    parent_uid: d650aa643493fafc25aab5e948418693
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: eafbf5dc9fc3436152c6364be75fac10
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: 5CHUuMZZzSY
    parent_uid: d650aa643493fafc25aab5e948418693
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 84991c28276d04174d3a52f9dd369f98
  - id: 5CHUuMZZzSY.srt
    parent_uid: d650aa643493fafc25aab5e948418693
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/conditioning-example/5CHUuMZZzSY.srt
    title: 3play caption file
    type: null
    uid: 1c998e97abab10337ae6d1a493e2c089
  - id: 5CHUuMZZzSY.pdf
    parent_uid: d650aa643493fafc25aab5e948418693
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/conditioning-example/5CHUuMZZzSY.pdf
    title: 3play pdf file
    type: null
    uid: cdc90d3893e8fc7716e04fb2a01332c1
  - id: Caption-3Play YouTube id-SRT
    parent_uid: d650aa643493fafc25aab5e948418693
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 88eaa4b3025430096311099e69269a7b
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: d650aa643493fafc25aab5e948418693
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 8c804a18033b04cea4195b5d7cf01f2b
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L09-03_300k.mp4
    parent_uid: d650aa643493fafc25aab5e948418693
    title: Video-Internet Archive-MP4
    type: Video
    uid: bbc31e6ea87f87349060358fdab5e741
inline_embed_id: 63448468conditioningexample28801605
order_index: 843
parent_uid: 9ca6b310dc93095c9ac0f0e5f95e6930
related_resources_text: ''
short_url: conditioning-example
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/conditioning-example
title: Conditioning Example
transcript: >-
  <p><span m='1520'>Let us now look at an example.</span> </p><p><span
  m='3480'>Consider a piecewise constant PDF of the form</span> <span
  m='6300'>shown in this diagram.</span> </p><p><span m='8000'>Suppose that we
  condition on the event that x lies between</span> <span m='15740'>a plus b
  over 2, which is here, and b.</span> </p><p><span m='23130'>So we're
  conditioning on x lying in this</span> <span m='26440'>particular red
  interval.</span> </p><p><span m='29950'>What is the conditional PDF?</span>
  </p><p><span m='32490'>The conditional PDF is going to be 0 outside of
  the</span> <span m='38050'>interval on which we are conditioning.</span>
  </p><p><span m='42200'>So the conditional PDF is 0 in this range, and also, it
  is 0</span> <span m='48010'>in this range.</span> </p><p><span
  m='51770'>Within the range of values of x that are allowed given the</span>
  <span m='57420'>conditioning information, the conditional PDF must
  retain</span> <span m='63270'>the same shape as the unconditional one.</span>
  </p><p><span m='65590'>And the unconditional one is constant in that
  range.</span> </p><p><span m='68580'>So the conditional PDF will also be a
  constant.</span> </p><p><span m='75830'>Because in this case the length of
  this interval is</span> <span m='80789'>half of the distance between b minus
  a--</span> <span m='84050'>so the length of this interval is b minus a over
  2--</span> <span m='88510'>in order for the area under this curve to be equal
  to 1,</span> <span m='92870'>it means that the height of this curve has to be
  equal to</span> <span m='96370'>2 over b minus a.</span> </p><p><span
  m='101550'>The conditional expectation in this example is just the</span>
  <span m='104789'>ordinary expectation but applied to</span> <span
  m='106970'>the conditional model.</span> </p><p><span m='108470'>Since the
  conditional PDF is uniform, the conditional</span> <span
  m='111860'>expectation will be the midpoint of the range of this</span> <span
  m='115500'>conditional PDF.</span> </p><p><span m='116970'>And in this case,
  the midpoint is 1/2 the left end of the</span> <span m='123810'>interval,
  which is a plus b over 2 plus 1/2 the right end</span> <span m='130870'>point
  of the interval, which is b.</span> </p><p><span m='133260'>And so this
  evaluates to 1/4 times a plus 3/4 times b.</span> </p><p><span m='144390'>We
  can also calculate the expected value of X squared in</span> <span
  m='148079'>the conditional model using the expected value rule.</span>
  </p><p><span m='151860'>According to the expected value rule, it's going to
  be</span> <span m='154400'>an integral of the conditional PDF, which is 2 over
  b minus a</span> <span m='161090'>multiplied by x squared.</span> </p><p><span
  m='164650'>And this integral runs over the range where the</span> <span
  m='168390'>conditional PDF is actually non-zero.</span> </p><p><span
  m='171240'>So it's an integral that ranges from a plus b</span> <span
  m='175880'>over 2 up to b.</span> </p><p><span m='178950'>And this an integral
  which is not too hard to evaluate, and</span> <span m='182920'>there's no
  point in carrying out the evaluation to the end.</span> </p><p></p>
uid: d650aa643493fafc25aab5e948418693
type: course
layout: video
---
