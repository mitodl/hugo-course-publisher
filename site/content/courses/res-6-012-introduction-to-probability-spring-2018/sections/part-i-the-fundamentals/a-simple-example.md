---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: '-0pzpXHq_io'
    parent_uid: a480bf766ee93e5e5f9e205a1a0dc450
    title: Video-YouTube-Stream
    type: Video
    uid: da1869959626e02c151b8fce5ccf76bd
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/-0pzpXHq_io/default.jpg'
    parent_uid: a480bf766ee93e5e5f9e205a1a0dc450
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 406525481880f991514ccae9bc735948
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: '-0pzpXHq_io'
    parent_uid: a480bf766ee93e5e5f9e205a1a0dc450
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: e3146900c80d75d522d42a44b4e9aad5
  - id: '-0pzpXHq_io.srt'
    parent_uid: a480bf766ee93e5e5f9e205a1a0dc450
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/a-simple-example/-0pzpXHq_io.srt
    title: 3play caption file
    type: null
    uid: e1ed7f4c4fc2a07ee137fd8e0d00ca26
  - id: '-0pzpXHq_io.pdf'
    parent_uid: a480bf766ee93e5e5f9e205a1a0dc450
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/a-simple-example/-0pzpXHq_io.pdf
    title: 3play pdf file
    type: null
    uid: 3bfb25aec8b83dc734c9a24e2b351080
  - id: Caption-3Play YouTube id-SRT
    parent_uid: a480bf766ee93e5e5f9e205a1a0dc450
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: a903bae213a144e6d4bf7a8ea50779f2
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: a480bf766ee93e5e5f9e205a1a0dc450
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: ef6b08a28fe51b958a0119a780eedb14
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L13-08_300k.mp4
    parent_uid: a480bf766ee93e5e5f9e205a1a0dc450
    title: Video-Internet Archive-MP4
    type: Video
    uid: de29de5f67673e68150492299c398594
inline_embed_id: 42763393asimpleexample10763799
order_index: 1275
parent_uid: 9ca6b310dc93095c9ac0f0e5f95e6930
related_resources_text: ''
short_url: a-simple-example
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/a-simple-example
title: A Simple Example
transcript: >-
  <p><span m='550'>We will now go through an example, which is
  essentially</span> <span m='3440'>a drill, to consolidate our understanding of
  the</span> <span m='6290'>conditional expectation and the conditional
  variance.</span> </p><p><span m='9890'>Consider a random variable X, which is
  continuous and is</span> <span m='12870'>described by a PDF of this
  form.</span> </p><p><span m='16079'>Whenever we have a PDF that seems to
  consist of different</span> <span m='19890'>pieces, it's always useful to
  divide and conquer.</span> </p><p><span m='23930'>And the way we will do that
  will be to consider two</span> <span m='26490'>different scenarios.</span>
  </p><p><span m='27610'>That X falls in this range.</span> </p><p><span
  m='29940'>And in that scenario, we say that the certain random</span> <span
  m='32910'>variable Y is equal to 1.</span> </p><p><span m='34880'>And another
  scenario in which X falls in this range, and in</span> <span m='38450'>that
  case, we say that Y is equal to 2.</span> </p><p><span m='42850'>Let us now
  look at the conditional expectation of X</span> <span m='45600'>given Y. What
  is it?</span> </p><p><span m='47760'>Well, it is a random variable which can
  take a different</span> <span m='51210'>values depending on what Y is.</span>
  </p><p><span m='53960'>If Y happens to take a value of 1, then</span> <span
  m='57980'>we are in this range.</span> </p><p><span m='59560'>And the
  conditional PDF of X, given that Y falls in this</span> <span m='63380'>range,
  keeps the same shape, it's uniform.</span> </p><p><span m='66270'>And so it's
  mean is going to be equal to the midpoint of</span> <span m='70390'>this
  interval, which is 1/2.</span> </p><p><span m='74260'>And this is something
  that happens when Y is equal to 1.</span> </p><p><span m='78320'>What is the
  probability of this happening?</span> </p><p><span m='80340'>The probability
  that Y is equal to 1 is the area under</span> <span m='84020'>the PDF in this
  range.</span> </p><p><span m='86610'>And since the height of the PDF is 1/2,
  this</span> <span m='89730'>probability is 1/2.</span> </p><p><span
  m='93830'>The alternative scenario is that Y happens to take the</span> <span
  m='97180'>value of 2.</span> </p><p><span m='98020'>In which case, X lives in
  this interval.</span> </p><p><span m='101650'>Given that X has fallen in this
  interval, the conditional</span> <span m='106690'>expectation of X is the
  midpoint of this interval.</span> </p><p><span m='110509'>And the midpoint of
  this interval is at 2.</span> </p><p><span m='116229'>And this is an event
  that, again, happens with</span> <span m='119170'>probability 1/2, because the
  area under the PDF in this</span> <span m='123610'>region is equal to
  1/2.</span> </p><p><span m='126520'>So the conditional expectation is a random
  variable that</span> <span m='129720'>takes these values with these
  probabilities.</span> </p><p><span m='132730'>Since we now have a complete
  probabilistic description of</span> <span m='136060'>this random variable,
  we're able to calculate the</span> <span m='139250'>expectation of this random
  variable.</span> </p><p><span m='141250'>What is it?</span> </p><p><span
  m='142230'>With probability 1/2, the random variable takes the</span> <span
  m='145840'>value of 1/2.</span> </p><p><span m='147610'>And with probability
  1/2, it takes a value of 2.</span> </p><p><span m='151970'>And so the expected
  value of the conditional</span> <span m='154500'>expectation is 5/4.</span>
  </p><p><span m='157840'>But the law of iterated expectations tells us
  that</span> <span m='160720'>this quantity is also the same as the expected
  value of X. So</span> <span m='165620'>we have managed to find the expected
  value of X by the</span> <span m='168730'>divide and conquer method, by
  considering different cases.</span> </p><p><span m='172670'>Let us now turn to
  the conditional variance of X</span> <span m='175820'>given Y. Once more, this
  quantity is a random variable.</span> </p><p><span m='180160'>The value of
  that quantity depends on what Y</span> <span m='183370'>turns out to
  be.</span> </p><p><span m='184780'>And we have, again, the same two
  possibilities.</span> </p><p><span m='186930'>Y could be equal to 1, or Y
  could be equal to 2.</span> </p><p><span m='190510'>And these possibilities
  happen with equal probabilities.</span> </p><p><span m='196820'>If Y is equal
  to 1, conditional on that event, X</span> <span m='200850'>has a uniform PDF
  on this range, on an interval of</span> <span m='205170'>length one.</span>
  </p><p><span m='205970'>And we know that the variance of a uniform PDF on
  an</span> <span m='209550'>interval of length one is 1/12.</span> </p><p><span
  m='212440'>If on the other hand, Y takes a value of 2, then X is a</span>
  <span m='217380'>uniform random variable on an interval of length 2.</span>
  </p><p><span m='222030'>And the variance in this case is 2 squared, where this
  2</span> <span m='227790'>stands for the length of the interval, divided by
  12, which</span> <span m='231750'>is the same as 4/12.</span> </p><p><span
  m='237880'>So we now have a complete probabilistic description of</span> <span
  m='241210'>the conditional variance as a random variable.</span> </p><p><span
  m='243580'>It's a random variable that with these probabilities,</span> <span
  m='246890'>takes these two particular values.</span> </p><p><span
  m='249630'>Since we know the distribution of this random variable, we</span>
  <span m='252570'>can certainly calculate its expected value.</span>
  </p><p><span m='255640'>And the expected value is found as follows.</span>
  </p><p><span m='257790'>With probability 1/2, the random variable of
  interest</span> <span m='261170'>takes a value of 1/12.</span> </p><p><span
  m='264000'>And with probability 1/2, this random variable</span> <span
  m='268000'>takes a value of 4/12.</span> </p><p><span m='272690'>And this
  number happens to be 5/24.</span> </p><p><span m='278590'>Finally, let us
  calculate the variance of the conditional</span> <span
  m='282130'>expectation.</span> </p><p><span m='283480'>Since we have complete
  information about the</span> <span m='285790'>distribution of the conditional
  expectation,</span> <span m='288340'>calculating its variance is not going to
  be difficult.</span> </p><p><span m='292750'>So what is it?</span>
  </p><p><span m='294380'>With probability 1/2, the conditional expectation
  takes</span> <span m='299780'>a value of 1/2.</span> </p><p><span
  m='302380'>We subtract from this is the mean of the conditional</span> <span
  m='305990'>expectation, which is 5/4.</span> </p><p><span m='309600'>And we
  take the square of that.</span> </p><p><span m='312120'>So this term is the
  square or the deviation of the value of</span> <span m='318360'>the random
  variable of 1/2 from the mean</span> <span m='321730'>of that random
  variable.</span> </p><p><span m='323610'>And we get a similar term.</span>
  </p><p><span m='325900'>If Y happens to be equal to 2.</span> </p><p><span
  m='329540'>With probability 1/2 half, our random variable takes a value</span>
  <span m='334470'>of 2, which is so much away from the mean</span> <span
  m='338500'>of the random variable.</span> </p><p><span m='341400'>And then we
  square that quantity.</span> </p><p><span m='343720'>If we carry out the
  algebra, the answer turns out</span> <span m='346770'>to be 9 over 16.</span>
  </p><p><span m='350240'>And now we can go back to the law of the total
  variance and</span> <span m='354170'>calculate that the total variance is
  equal to the</span> <span m='357560'>expected value of the variance, which is
  5/24.</span> </p><p><span m='363230'>And then we have the variance of the
  expected</span> <span m='365960'>value, which is 9/16.</span> </p><p><span
  m='371070'>And this number evaluates to 37/48.</span> </p><p><span
  m='379860'>So we have managed to find the variance of this random</span> <span
  m='382730'>variable using the divide and conquer methods and the law of</span>
  <span m='386930'>the total variance.</span> </p><p></p>
uid: a480bf766ee93e5e5f9e205a1a0dc450
type: courses
layout: video
---
