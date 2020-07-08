---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: 0IJFBMIU6x4
    parent_uid: 3e17ae0d6bc0d980e7498e2c04716f6d
    title: Video-YouTube-Stream
    type: Video
    uid: 4d753432a4d9804450a1ff6f60523d91
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/0IJFBMIU6x4/default.jpg'
    parent_uid: 3e17ae0d6bc0d980e7498e2c04716f6d
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 607299667a2c246aac11923134a764f6
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: 0IJFBMIU6x4
    parent_uid: 3e17ae0d6bc0d980e7498e2c04716f6d
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 5c7085b04ecb0162ce99a1bdd015d767
  - id: 0IJFBMIU6x4.srt
    parent_uid: 3e17ae0d6bc0d980e7498e2c04716f6d
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/linearity-of-expectations/0IJFBMIU6x4.srt
    title: 3play caption file
    type: null
    uid: 24de3638d03b35bad6edc232a59129bb
  - id: 0IJFBMIU6x4.pdf
    parent_uid: 3e17ae0d6bc0d980e7498e2c04716f6d
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/linearity-of-expectations/0IJFBMIU6x4.pdf
    title: 3play pdf file
    type: null
    uid: ece902c7d9b06eae697baded6e66b1db
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 3e17ae0d6bc0d980e7498e2c04716f6d
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 53db9f403e3c2b880cc909d10d44e2da
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 3e17ae0d6bc0d980e7498e2c04716f6d
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: c0ccc3f09370ce325c382823bd7fa9c9
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L05-11_300k.mp4
    parent_uid: 3e17ae0d6bc0d980e7498e2c04716f6d
    title: Video-Internet Archive-MP4
    type: Video
    uid: 758b03fa6b958bd1e9e7202fb43cc913
inline_embed_id: 36049711linearityofexpectations34027892
order_index: 555
parent_uid: 9ca6b310dc93095c9ac0f0e5f95e6930
related_resources_text: ''
short_url: linearity-of-expectations
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/linearity-of-expectations
title: Linearity of Expectations
transcript: >-
  <p><span m="550">We end this lecture sequence with the most important</span>
  <span m="3490">property of expectations, namely linearity.</span></p><p><span
  m="7090">The idea is pretty simple.</span></p><p><span m="9100">Suppose that
  our random variable, X, is the salary of</span> <span m="13780">a random
  person out of some population.</span></p><p><span m="16800">So that we can
  think of the expected value of X as the</span> <span m="20680">average salary
  within that population.</span></p><p><span m="25440">And now suppose that
  everyone gets a raise, and</span> <span m="30380">Y is the new
  salary.</span></p><p><span m="34530">And generously, the new salary is twice
  the old salary plus a</span> <span m="41510">bonus of $100.</span></p><p><span
  m="46170">What happens to the expected value of the salary, or the</span>
  <span m="50140">average salary?</span></p><p><span m="51770">Well the new
  average salary, which is the expected value of</span> <span m="57640">2X plus
  100, is twice the old average plus 100.</span></p><p><span m="66250">So
  doubling everyone's salary and giving to everyone an</span> <span
  m="69870">additional $100, what it does to the average is that it</span> <span
  m="74060">doubles the average and adds 100 to it.</span></p><p><span
  m="77950">This is the linearity property of expectation in one</span> <span
  m="80900">particular example.</span></p><p><span m="82670">It's a most
  intuitive property, but it's worth also</span> <span m="86550">deriving it in
  a formal way.</span></p><p><span m="89130">And the derivation proceeds through
  the</span> <span m="91420">expected value rule.</span></p><p><span
  m="93550">We're dealing here with a particular function, g, which</span> <span
  m="97590">is a linear function.</span></p><p><span m="99580">So we're dealing
  with a linear function, ax plus b.</span></p><p><span m="103570">And we're
  dealing with a random variable, Y, which is g</span> <span m="107720">applied
  to an original random variable, X.</span></p><p><span m="113060">So the
  expected value of Y can be calculated according to the</span> <span
  m="118090">expected value rule.</span></p><p><span m="119580">It's the sum
  over all x's of g of x times the probability of</span> <span m="125570">that
  particular x.</span></p><p><span m="128788">And we plug-in the specific form
  of the function, g, which</span> <span m="134290">is ax plus
  b.</span></p><p><span m="138390">And then we separate the sum into two
  sums.</span></p><p><span m="142710">The first sum, after pulling out a
  constant of</span> <span m="146730">a, takes this form.</span></p><p><span
  m="152840">And the second sum, after pulling out the constant, b,</span> <span
  m="156860">takes this form.</span></p><p><span m="160970">Now, the first sum
  is a times the expected value of X. This</span> <span m="166460">is just the
  definition of the expected value.</span></p><p><span m="169560">As, for the
  second sum, we realize that this quantity is</span> <span m="174470">equal to
  1 because it is the sum of the probabilities of</span> <span m="178430">all
  the different values of X. And this concludes the proof</span> <span
  m="183460">of the linearity of expected values.</span></p><p><span
  m="188050">Notice that for expected values, what we have is that</span> <span
  m="193580">the expected value of Y, which is expected value of g of X,</span>
  <span m="202150">is this same as g of the expected value of X. The</span>
  <span m="209930">expected value of a linear function is the same linear</span>
  <span m="214740">function applied to the expected value.</span></p><p><span
  m="217829">But this is an exceptional case.</span></p><p><span m="221180">This
  does not happen in general.</span></p><p><span m="225380">It's an exceptional
  function g that makes this happen.</span></p><p><span m="229470">This property
  is true for linear functions.</span></p><p><span m="232630">But for non-linear
  functions, it is generally false.</span></p><p>&nbsp;</p>
uid: 3e17ae0d6bc0d980e7498e2c04716f6d
type: courses
layout: video
---
