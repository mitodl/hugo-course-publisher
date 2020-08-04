---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: AVVbUKstn8A
    parent_uid: 079a22e8d1861f0582aefebe0f6bc72c
    title: Video-YouTube-Stream
    type: Video
    uid: bdc87e65d8e016077321620a5fe874d7
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/AVVbUKstn8A/default.jpg'
    parent_uid: 079a22e8d1861f0582aefebe0f6bc72c
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 41430ec0cdcaec1b539e27650ac407ef
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: AVVbUKstn8A
    parent_uid: 079a22e8d1861f0582aefebe0f6bc72c
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 047973dde44d251b74a9a8d4cd9e9764
  - id: AVVbUKstn8A.srt
    parent_uid: 079a22e8d1861f0582aefebe0f6bc72c
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/joint-cdfs/AVVbUKstn8A.srt
    title: 3play caption file
    type: null
    uid: bbf908c9fd66bdc33b99da1e7c475181
  - id: AVVbUKstn8A.pdf
    parent_uid: 079a22e8d1861f0582aefebe0f6bc72c
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/joint-cdfs/AVVbUKstn8A.pdf
    title: 3play pdf file
    type: null
    uid: eab48c9b7ab8d2291581a1730ad47a6c
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 079a22e8d1861f0582aefebe0f6bc72c
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 9f6a2f3affa73df4ff037e2c24ba29eb
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 079a22e8d1861f0582aefebe0f6bc72c
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: f3a6be4a710aa4e6e318bbac4e9483fa
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L09-10_300k.mp4
    parent_uid: 079a22e8d1861f0582aefebe0f6bc72c
    title: Video-Internet Archive-MP4
    type: Video
    uid: 5614d08a5c088f86777b1bc82df6b199
inline_embed_id: 29037815jointcdfs26671827
order_index: 906
parent_uid: 9ca6b310dc93095c9ac0f0e5f95e6930
related_resources_text: ''
short_url: joint-cdfs
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/joint-cdfs
title: Joint CDFs
transcript: >-
  <p><span m='1310'>Besides PMFs and PDFs, we can also describe the
  distribution</span> <span m='5530'>of a random variable, as we know, using a
  CDF.</span> </p><p><span m='9330'>A CDF is always well-defined.</span>
  </p><p><span m='12260'>And for the case of a continuous random
  variable,</span> <span m='14970'>the CDF can be found by integrating the
  PDF.</span> </p><p><span m='18640'>And conversely, we can recover the PDF from
  the CDF by</span> <span m='23230'>differentiating.</span> </p><p><span
  m='25040'>There is something similar that happens for the case of</span> <span
  m='28010'>multiple random variables, as well.</span> </p><p><span m='30410'>We
  can define the joint CDF as the probability that X and Y,</span> <span
  m='37390'>the pair X-Y, takes values that are below certain</span> <span
  m='43290'>numbers, little x and little y.</span> </p><p><span m='46360'>So we
  are talking about the probability of the blue set in</span> <span
  m='51930'>this diagram.</span> </p><p><span m='55780'>This probability can be
  found by integrating the joint PDF</span> <span m='65140'>over the blue
  set.</span> </p><p><span m='67830'>And, since we're using x and y to be some
  specific numbers,</span> <span m='72300'>let us use some different dummy
  variables to carry out</span> <span m='76070'>the integration.</span>
  </p><p><span m='82310'>What is the range of the integration?</span>
  </p><p><span m='85000'>The first variable, which is s in this integral, ranges
  from</span> <span m='89160'>minus infinity up to x.</span> </p><p><span
  m='94021'>And the other variable, which is the one that we're</span> <span
  m='97520'>integrating with respect to, in the outer integral--</span> <span
  m='102150'>the t variable--</span> <span m='103380'>ranges from minus infinity
  to y.</span> </p><p><span m='110000'>Now, let us see what happens if we start
  taking derivatives</span> <span m='113870'>of this expression.</span>
  </p><p><span m='115610'>If we take the derivative of this expression with
  respect</span> <span m='119960'>to y, what is left is the inner
  integral.</span> </p><p><span m='127010'>And if we take, now, a derivative
  with respect to x</span> <span m='131810'>of this inner integral, we will be
  left with</span> <span m='135550'>just the joint PDF.</span> </p><p><span
  m='140090'>And it will be the joint PDF evaluated at the particular</span>
  <span m='144600'>limits of the integration.</span> </p><p><span m='146329'>So,
  it's going to be f sub xy at little x, little y.</span> </p><p><span
  m='152420'>So, we have this particular formula.</span> </p><p><span
  m='155010'>By taking derivative with respect to x, and then with</span> <span
  m='158320'>respect to y, or maybe in the opposite order.</span> </p><p><span
  m='161075'>It doesn't matter.</span> </p><p><span m='162790'>This particular
  derivative gives us back the PDF.</span> </p><p><span m='168000'>Let us look
  at an example.</span> </p><p><span m='170190'>Suppose that we have a
  uniform</span> <span m='172730'>distribution on the unit square.</span>
  </p><p><span m='176820'>So the PDF is equal to 1 on this green square.</span>
  </p><p><span m='181540'>And is equal to 0 otherwise.</span> </p><p><span
  m='184610'>So, in this example, if we take some x and y, so that the</span>
  <span m='188970'>xy pair falls inside the rectangle, the probability of</span>
  <span m='196060'>the blue set is going to be just the probability of
  that</span> <span m='200400'>little rectangle here.</span> </p><p><span
  m='202140'>Because everything outside has zero probability.</span>
  </p><p><span m='205860'>With a uniform joint PDF, which is equal to 1,
  the</span> <span m='210240'>probability is just the area of the set that we
  are</span> <span m='213329'>considering.</span> </p><p><span m='214150'>And
  since this set that we are considering is a rectangle</span> <span
  m='217390'>with [sides]</span> <span m='218120'>x and y, the joint CDF is
  equal to x times y.</span> </p><p><span m='224280'>Now, if we take the
  derivative of this expression with</span> <span m='227340'>respect to x, and
  then with respect to y, then we're left</span> <span m='233180'>just with a
  constant equal to 1--</span> <span m='239620'>which is as it should be, so
  that it integrates to one.</span> </p><p><span m='244590'>So, we have seen
  that CDFs also apply to the case of</span> <span m='248870'>multiple random
  variables, and that we can recover the joint</span> <span m='252610'>PDF from
  the joint CDF.</span> </p><p></p>
uid: 079a22e8d1861f0582aefebe0f6bc72c
type: course
layout: video
---
