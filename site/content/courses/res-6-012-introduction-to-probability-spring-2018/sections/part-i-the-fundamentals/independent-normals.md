---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: qOQxeYGOIag
    parent_uid: bd445cd88171b905f654169277c69f27
    title: Video-YouTube-Stream
    type: Video
    uid: 458ae61a4dffe1db5e9ef10011b50be7
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/qOQxeYGOIag/default.jpg'
    parent_uid: bd445cd88171b905f654169277c69f27
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 1ecb8c420cafff6b678976dcfff4da10
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: qOQxeYGOIag
    parent_uid: bd445cd88171b905f654169277c69f27
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: a9d393e8fb0ce7b525dd0414d6a2604d
  - id: qOQxeYGOIag.srt
    parent_uid: bd445cd88171b905f654169277c69f27
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/independent-normals/qOQxeYGOIag.srt
    title: 3play caption file
    type: null
    uid: de2d405c8480f0e590e5abfc5abd99e6
  - id: qOQxeYGOIag.pdf
    parent_uid: bd445cd88171b905f654169277c69f27
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/independent-normals/qOQxeYGOIag.pdf
    title: 3play pdf file
    type: null
    uid: 3afe795f040c2cb1abddbe60e9b4ff68
  - id: Caption-3Play YouTube id-SRT
    parent_uid: bd445cd88171b905f654169277c69f27
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: f2b0a04d9c13f7923d3bff3b37155cf8
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: bd445cd88171b905f654169277c69f27
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 2f4722e5feb31a023c72d8baf90b769c
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L10-07_300k.mp4
    parent_uid: bd445cd88171b905f654169277c69f27
    title: Video-Internet Archive-MP4
    type: Video
    uid: a1e55aefa9f80f8dca14a9e86b5e679d
inline_embed_id: 48352289independentnormals852990
order_index: 969
parent_uid: 9ca6b310dc93095c9ac0f0e5f95e6930
related_resources_text: ''
short_url: independent-normals
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/independent-normals
title: Independent Normals
transcript: >-
  <p><span m='390'>Just in order to get some more familiarity with joint
  PDFs,</span> <span m='3920'>let us look at independent normals.</span>
  </p><p><span m='6770'>Actually, this is an important example because noise is
  often</span> <span m='10330'>modeled by normal random variables, and noise
  terms</span> <span m='13580'>that show up at different parts of a system, or
  at</span> <span m='16870'>different times, are often assumed to be
  independent.</span> </p><p><span m='20300'>Suppose that we have two standard
  normal random</span> <span m='22570'>variables, X and Y, with zero means and
  unit variances.</span> </p><p><span m='26510'>If their independent, their
  joint PDF is the product of</span> <span m='29700'>the marginal PDFs and takes
  this form.</span> </p><p><span m='32980'>This is just the PDF of a standard
  normal X and the PDF</span> <span m='37640'>of a standard normal Y and we
  multiply them.</span> </p><p><span m='40830'>If we are to plot this joint PDF
  we obtain this figure.</span> </p><p><span m='45400'>It looks like a bell
  which is centered at the origin--</span> <span m='50070'>at the point with
  coordinates zero, zero.</span> </p><p><span m='53500'>One way to think about
  what is going on here is to rewrite</span> <span m='58150'>this expression as
  1 over 2pi, and then the exponential of</span> <span m='65980'>minus 1/2 x
  squared plus y squared.</span> </p><p><span m='74900'>If we look at the unit
  circle in xy space, which is the set</span> <span m='82250'>of points at which
  x squared plus y squared is equal to 1,</span> <span m='88210'>then, on that
  circle, the PDF takes a constant value because</span> <span m='94150'>this
  quantity is constant on that circle.</span> </p><p><span m='97370'>And the
  same is true for any other circle.</span> </p><p><span m='100789'>On any
  circle the PDF takes a constant value, of course, a</span> <span
  m='104870'>different constant.</span> </p><p><span m='106450'>So the circles
  centered at the origin are the so-called</span> <span m='109991'>contours of
  the joint PDF.</span> </p><p><span m='112259'>On each contour the joint PDF is
  a constant.</span> </p><p><span m='117780'>Let us now generalize.</span>
  </p><p><span m='119830'>Consider two independent normal random variables,
  but</span> <span m='123110'>with general means mu x and mu y, and variances
  sigma x</span> <span m='129340'>squared and sigma y squared.</span>
  </p><p><span m='132660'>The joint is, again, the product of the marginal
  PDFs</span> <span m='136870'>and, therefore, takes this form.</span>
  </p><p><span m='139760'>This looks intimidating but, in fact, it is pretty
  simple.</span> </p><p><span m='144410'>This part is just a normalizing
  constant.</span> </p><p><span m='148060'>It is the constant that's needed so
  that the joint PDF</span> <span m='150770'>integrates to 1.</span>
  </p><p><span m='153500'>What we have here is the negative exponential of
  a</span> <span m='157460'>quadratic function of x and y.</span> </p><p><span
  m='160680'>Let us plot the contours of this quadratic.</span> </p><p><span
  m='163710'>Remember that contour is the set of points where the</span> <span
  m='166600'>quadratic takes a constant value.</span> </p><p><span
  m='169610'>And by consequence, the joint PDF also</span> <span
  m='172480'>takes a constant value.</span> </p><p><span m='174910'>If you have
  set this quadratic to a constant, what you have</span> <span m='178740'>is the
  equation that describes an ellipse.</span> </p><p><span m='181320'>And it is
  an ellipse whose principal axes run along the x</span> <span m='185300'>and y
  directions, and those ellipses are all centered at</span> <span
  m='189490'>this particular point, mu x, mu y.</span> </p><p><span
  m='193590'>The joint PDF is largest when the exponent is equal to zero.</span>
  </p><p><span m='199390'>And this happens when x is equal to mu x, and y</span>
  <span m='203270'>is equal to mu y.</span> </p><p><span m='204760'>That is,
  right at the center of the ellipse.</span> </p><p><span m='207450'>That's
  where the joint PDF is largest.</span> </p><p><span m='211150'>As you move to
  ellipses that are further out on this outer</span> <span m='215470'>ellipse,
  this expression is a constant.</span> </p><p><span m='218329'>It's the
  exponential of the negative of</span> <span m='221100'>some positive
  numbers.</span> </p><p><span m='223260'>So you get a smaller value for the
  joint PDF.</span> </p><p><span m='227540'>If you move to a further ellipse
  further out, then</span> <span m='230860'>again, the joint PDF will be a
  constant, but it's going to be</span> <span m='234030'>a smaller
  constant.</span> </p><p><span m='236770'>Now, for the case of standard
  normals, the joint PDF was</span> <span m='240240'>circularly
  symmetric.</span> </p><p><span m='242300'>The contours were actually circles,
  instead of ellipses.</span> </p><p><span m='246300'>But this is not the case
  in general.</span> </p><p><span m='248600'>For example, suppose that the
  variance of Y is bigger than</span> <span m='253390'>the variance of X. Then
  you get a shape as the one shown</span> <span m='258100'>in this
  figure.</span> </p><p><span m='259700'>Since the variance of Y is larger, we
  expect Y to take</span> <span m='264070'>values over a bigger range, and to be
  larger typically</span> <span m='269300'>than the values of X. And so the bell
  shape that we have</span> <span m='273630'>for the joint PDF is stretched in
  the y direction.</span> </p><p><span m='277490'>It extends further out in the
  y direction than it does in</span> <span m='281120'>the x direction.</span>
  </p><p><span m='283159'>To conclude, the joint PDF of two independent normals
  has</span> <span m='287290'>the shape of a bell.</span> </p><p><span
  m='289240'>The center of the bell is determined by the means.</span>
  </p><p><span m='293130'>Furthermore, the bell is stretched in the x and
  y</span> <span m='296300'>directions by an amount that is determined by the
  variances</span> <span m='300150'>of x and y.</span> </p><p><span
  m='302310'>However, the stretching is always along</span> <span m='305580'>the
  coordinate axes.</span> </p><p><span m='307960'>If you wanted a bell that
  stretches in some diagonal</span> <span m='311610'>direction, or if you have
  contours that are ellipses but</span> <span m='315880'>with some different
  kinds of axes, then you will have</span> <span m='320790'>dependence between
  the two random variables.</span> </p><p><span m='323740'>In that case, we will
  be dealing with a so-called</span> <span m='326710'>bivariate normal
  distribution, but we will not pursue this</span> <span m='331470'>any further
  at this point.</span> </p><p></p>
uid: bd445cd88171b905f654169277c69f27
type: course
layout: video
---
