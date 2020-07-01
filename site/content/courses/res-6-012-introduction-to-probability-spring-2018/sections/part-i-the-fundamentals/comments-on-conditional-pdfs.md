---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: mKcWk_DmS7M
    parent_uid: 3289fbc4f5a4246ad10381c48780935e
    title: Video-YouTube-Stream
    type: Video
    uid: 5a7f47e77ddf591f73d82a6928931be2
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/mKcWk_DmS7M/default.jpg'
    parent_uid: 3289fbc4f5a4246ad10381c48780935e
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 36c1dec48c7f112e6f370198be163519
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: mKcWk_DmS7M
    parent_uid: 3289fbc4f5a4246ad10381c48780935e
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 6db4c96ecae11cb69b59e4c1fcbd03a9
  - id: mKcWk_DmS7M.srt
    parent_uid: 3289fbc4f5a4246ad10381c48780935e
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/comments-on-conditional-pdfs/mKcWk_DmS7M.srt
    title: 3play caption file
    type: null
    uid: f56fae671f75d62fc6f030265f37cff2
  - id: mKcWk_DmS7M.pdf
    parent_uid: 3289fbc4f5a4246ad10381c48780935e
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/comments-on-conditional-pdfs/mKcWk_DmS7M.pdf
    title: 3play pdf file
    type: null
    uid: fb1f65be4139358eae8793f1a323acfd
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 3289fbc4f5a4246ad10381c48780935e
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 93389a2fce4f0dcf095f56fd47d7b462
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 3289fbc4f5a4246ad10381c48780935e
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 84383161d528d231d472c3f393175d5d
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L10-03_300k.mp4
    parent_uid: 3289fbc4f5a4246ad10381c48780935e
    title: Video-Internet Archive-MP4
    type: Video
    uid: 5c4c98f1153f60cb0009c7e0b28c0ae1
inline_embed_id: 89063131commentsonconditionalpdfs65497211
order_index: 933
parent_uid: 9ca6b310dc93095c9ac0f0e5f95e6930
related_resources_text: ''
short_url: comments-on-conditional-pdfs
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/comments-on-conditional-pdfs
title: Comments on Conditional PDFs
transcript: >-
  <p><span m='1100'>The definition of the</span> <span m='2000'>conditional PDF
  is very simple.</span> </p><p><span m='4660'>It is just this formula, which is
  analogous to the one for</span> <span m='8150'>the discrete case.</span>
  </p><p><span m='9600'>In all respects--</span> <span m='10630'>mathematical
  and intuitive--</span> <span m='12190'>it is very similar to the conditional
  PMF.</span> </p><p><span m='15420'>Even so, developing a solid grasp of this
  concept does</span> <span m='18770'>take some further thinking, so we will now
  make some</span> <span m='22080'>observations that should be helpful in this
  respect.</span> </p><p><span m='26580'>The first and obvious observation is
  that the</span> <span m='29230'>conditional PDF is non-negative.</span>
  </p><p><span m='33360'>It's defined when the denominator is positive,
  the</span> <span m='36790'>numerator is a non-negative quantity, so it's
  always a</span> <span m='39720'>non-negative quantity.</span> </p><p><span
  m='41510'>A more interesting observation is that for any given value of</span>
  <span m='46270'>little y, the conditional PDF looks like a slice</span> <span
  m='54500'>of the joint PDF.</span> </p><p><span m='56620'>Indeed, if you fix
  the value of little y, then the</span> <span m='62710'>denominator in this
  definition is a constant, and we have a</span> <span m='67490'>function that
  varies with x the same way that the joint</span> <span m='72470'>PDF varies
  with x.</span> </p><p><span m='76050'>Pictorially, let us consider this
  particular joint PDF, and</span> <span m='83380'>let this be the x-axis and
  let that be the y-axis.</span> </p><p><span m='90970'>If we fix a certain
  value of y, if we condition on Y having</span> <span m='97810'>taken this
  particular value so that our universe is now this</span> <span
  m='103920'>particular line, on that universe the value of the</span> <span
  m='111220'>denominator in this definition is a constant, and the</span> <span
  m='114950'>conditional PDF is going to vary according to the height</span>
  <span m='120290'>of the joint on that</span> <span m='122060'>particular
  conditional universe.</span> </p><p><span m='124240'>So the height of the
  joint, if we trace it, is one of those</span> <span m='129009'>curves up here,
  and [then]</span> <span m='132190'>goes down.</span> </p><p><span
  m='133550'>So it is really a slice taken out of the joint PDF.</span>
  </p><p><span m='139490'>If we condition on a different y, we get a different
  slice of</span> <span m='143660'>the joint PDF, and so on.</span> </p><p><span
  m='147660'>Actually, the conditional is not exactly</span> <span
  m='150190'>the same as the slice.</span> </p><p><span m='151860'>We also have
  this term on the denominator that serves as a</span> <span m='156200'>scaling
  factor.</span> </p><p><span m='157660'>It turns out that this scaling factor
  is exactly what we need</span> <span m='161300'>for the conditional PDF, given
  a specific value of little y,</span> <span m='166510'>to integrate to
  1.</span> </p><p><span m='169490'>Indeed, if we fix little y and take the
  integral over all</span> <span m='173660'>x's, using the definition, and
  because this term is a</span> <span m='178760'>constant and does not involve
  x, we only need to integrate</span> <span m='182630'>the numerator.</span>
  </p><p><span m='184470'>And we recognize that the numerator corresponds to
  our</span> <span m='188190'>earlier formula for the marginal
  distribution--</span> <span m='192140'>the marginal PDF of Y. From the joint,
  this is how we</span> <span m='197690'>recover the marginal PDF of Y.</span>
  </p><p><span m='200440'>So the numerator turns out to be the same as
  the</span> <span m='202770'>denominator, and so we get a ratio 1.</span>
  </p><p><span m='207440'>Therefore, the conditional PDF for a given value of
  the</span> <span m='212400'>random variable Y behaves in all respects</span>
  <span m='215400'>like an ordinary PDF.</span> </p><p><span m='217690'>It is
  non-negative and it integrates to 1.</span> </p><p><span m='223930'>A last
  observation is that we can take this definition and</span> <span
  m='228260'>move the denominator to the other side to obtain this</span> <span
  m='232360'>formula, which has the familiar form of the</span> <span
  m='235380'>multiplication rule.</span> </p><p><span m='238200'>The probability
  of two events happening is the probability</span> <span m='241470'>of the
  first times the probability of the second</span> <span m='244110'>given the
  first, except that here we're not really dealing</span> <span m='247270'>with
  probabilities, we're dealing with densities.</span> </p><p><span m='250860'>By
  symmetry, a similar formula must also be true when we</span> <span
  m='254540'>interchange the roles of X and Y. So, algebraically,</span> <span
  m='259320'>everything is similar to what we have seen for the case of</span>
  <span m='262440'>discrete random variables.</span> </p><p><span
  m='264060'>It's the same form of the multiplication rule, although</span>
  <span m='267690'>the interpretation is a bit different because
  densities</span> <span m='270980'>are not probabilities.</span> </p><p></p>
uid: 3289fbc4f5a4246ad10381c48780935e
type: courses
layout: video
---
