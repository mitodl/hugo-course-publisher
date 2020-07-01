---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: O4QYcoxuLHE
    parent_uid: 8d816a5424029085db1d4e93e47f1b00
    title: Video-YouTube-Stream
    type: Video
    uid: fc88717bf199a66d237f031696bee259
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/O4QYcoxuLHE/default.jpg'
    parent_uid: 8d816a5424029085db1d4e93e47f1b00
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: be3a094531898b4e3d46c2e6a287b0af
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: O4QYcoxuLHE
    parent_uid: 8d816a5424029085db1d4e93e47f1b00
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: adb3f4617e78d17da8a62271ff8ff92b
  - id: O4QYcoxuLHE.srt
    parent_uid: 8d816a5424029085db1d4e93e47f1b00
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/joint-pdfs/O4QYcoxuLHE.srt
    title: 3play caption file
    type: null
    uid: 7d9083b71a134e8b450c78bdfb6b7146
  - id: O4QYcoxuLHE.pdf
    parent_uid: 8d816a5424029085db1d4e93e47f1b00
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/joint-pdfs/O4QYcoxuLHE.pdf
    title: 3play pdf file
    type: null
    uid: c496baed1ba5d68539970144c1465c98
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 8d816a5424029085db1d4e93e47f1b00
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 9ab875dc8a753f00d4243e622b38bcd2
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 8d816a5424029085db1d4e93e47f1b00
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: e919ffd2f5175eb2b30afbc3b03b3778
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L09-07_300k.mp4
    parent_uid: 8d816a5424029085db1d4e93e47f1b00
    title: Video-Internet Archive-MP4
    type: Video
    uid: 6f70dff6272e1767121e567073d2ca84
inline_embed_id: 18981498jointpdfs36317259
order_index: 879
parent_uid: 9ca6b310dc93095c9ac0f0e5f95e6930
related_resources_text: ''
short_url: joint-pdfs
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/joint-pdfs
title: Joint PDFs
transcript: >-
  <p><span m='750'>In this segment, we start a discussion of multiple</span>
  <span m='3290'>continuous random variables.</span> </p><p><span m='5710'>Here
  are some objects that we're already familiar with.</span> </p><p><span
  m='9760'>But exactly as in the discrete case, if we are dealing with</span>
  <span m='14090'>two random variables, it is not enough to know their</span>
  <span m='17930'>individual PDFs.</span> </p><p><span m='20250'>We also need to
  model the relation between the two</span> <span m='23230'>random variables,
  and this is done through a joint PDF,</span> <span m='27780'>which is the
  continuous analog of the joint PMF.</span> </p><p><span m='32800'>We will use
  this notation to indicate joint PDFs where we</span> <span m='37180'>use f to
  indicate that we're dealing with a density.</span> </p><p><span m='41650'>So
  what remains to be done is to actually define this object</span> <span
  m='45520'>and see how we use it.</span> </p><p><span m='47800'>Let us start by
  recalling that joint PMFs were defined in</span> <span m='52440'>terms of the
  probability that the pair of random variables X</span> <span m='55910'>and Y
  take certain specific values little x and little y.</span> </p><p><span
  m='61350'>Regarding joint PDFs, we start by saying that it has to be</span>
  <span m='65970'>non-negative.</span> </p><p><span m='68050'>However, a more
  precise interpretation in terms of</span> <span m='70880'>probabilities has to
  wait a little bit.</span> </p><p><span m='74490'>Joint PDFs will be used to
  calculate probabilities.</span> </p><p><span m='79270'>And this will be done
  in analogy with</span> <span m='81300'>the discrete setting.</span>
  </p><p><span m='82740'>In the discrete setting, the probability that the pair
  of</span> <span m='85820'>random variables falls inside a certain set is just
  the sum</span> <span m='90660'>of the probabilities of all of the possible
  pairs inside that</span> <span m='95390'>particular set.</span> </p><p><span
  m='97310'>For the continuous case, we introduce</span> <span m='99880'>an
  analogous formula.</span> </p><p><span m='101990'>We use the joint density
  instead of the joint PMF.</span> </p><p><span m='106120'>And instead of having
  a summation, we now integrate.</span> </p><p><span m='110700'>As in the
  discrete setting, we have one total unit of</span> <span
  m='115450'>probability.</span> </p><p><span m='118630'>The joint PDF tells us
  how this unit of probability is</span> <span m='124090'>spread over the entire
  continuous</span> <span m='126460'>two-dimensional plane.</span> </p><p><span
  m='128360'>And we use it, we use the joint PDF, to calculate the</span> <span
  m='133080'>probability of a certain set by finding the volume under</span>
  <span m='139180'>the joint PDF that lies on top of that set.</span>
  </p><p><span m='144270'>This is what this integral really represents.</span>
  </p><p><span m='147490'>We integrate over a particular two-dimensional set,
  and we</span> <span m='152170'>take this value that we integrate.</span>
  </p><p><span m='156510'>And we can think of this as the height of an object
  that's</span> <span m='160360'>sitting on top of that set.</span> </p><p><span
  m='163400'>Now, this relation here, this calculation of probabilities,</span>
  <span m='166990'>is not something that we are supposed to prove.</span>
  </p><p><span m='171140'>This is, rather, the definition of</span> <span
  m='174160'>what a joint PDF does.</span> </p><p><span m='177450'>A legitimate
  joint PDF is any function of two variables,</span> <span m='181920'>which is
  non-negative and which integrates to 1.</span> </p><p><span m='186820'>And we
  will say that two random variables are jointly</span> <span
  m='191670'>continuous if there is a legitimate joint PDF that can</span> <span
  m='198420'>be used to calculate the associated probabilities</span> <span
  m='201890'>through this particular formula.</span> </p><p><span m='204710'>So
  we have really an indirect definition.</span> </p><p><span m='207770'>Instead
  of defining the joint PDF as a probability, we</span> <span
  m='212290'>actually define it indirectly by saying what it does, how it</span>
  <span m='217610'>will be used to calculate probabilities.</span> </p><p><span
  m='222220'>A picture will be helpful here.</span> </p><p><span
  m='224780'>Here's a plot of a possible joint PDF.</span> </p><p><span
  m='228200'>These are the x and y-axes.</span> </p><p><span m='233000'>And the
  function being plotted is the joint PDF of these two</span> <span
  m='238990'>random variables.</span> </p><p><span m='241580'>This joint PDF is
  higher at some places and lower at</span> <span m='245730'>others, indicating
  that certain regions of the x,y</span> <span m='248800'>plane are more likely
  than others.</span> </p><p><span m='251480'>The joint PDF determines the
  probability of a set B by</span> <span m='255630'>integrating over that set B.
  Let's say it's this set.</span> </p><p><span m='261470'>Integrating the PDF
  over that set.</span> </p><p><span m='264940'>Pictorially, what this means is
  that we look at the volume</span> <span m='270190'>that sits on top of that
  set, but below the PDF, below the</span> <span m='276790'>joint PDF, and so we
  obtain some three-dimensional object</span> <span m='281780'>of this
  kind.</span> </p><p><span m='283100'>And this integral corresponds to actually
  finding this</span> <span m='287940'>volume here, the volume that sits on top
  of the set B but</span> <span m='292740'>which is below the joint PDF.</span>
  </p><p><span m='298080'>Let us now develop some additional understanding
  of</span> <span m='301410'>joint PDFs.</span> </p><p><span m='303680'>As we
  just discussed, for any given set B, we can integrate</span> <span
  m='312430'>the joint PDF over that set.</span> </p><p><span m='315890'>And
  this will give us the probability of</span> <span m='318770'>that particular
  set.</span> </p><p><span m='321120'>Of particular interest is the case where
  we're dealing with</span> <span m='324460'>a set which is a rectangle, in
  which case the situation is a</span> <span m='329420'>little simpler.</span>
  </p><p><span m='330750'>So suppose that we have a rectangle where the</span>
  <span m='333380'>x-coordinate ranges from A to B and the y-coordinate
  ranges</span> <span m='338460'>from some C to some D. Then, the double
  integral over this</span> <span m='344420'>particular rectangle can be written
  in a form where we</span> <span m='348520'>first integrate with respect to one
  of the variables that</span> <span m='352620'>ranges from A to B. And then, we
  integrate over all possible</span> <span m='357950'>values of y as they range
  from C to D.</span> </p><p><span m='361480'>Of particular interest is the
  special case where we're</span> <span m='365270'>dealing with a small
  rectangle such as this one.</span> </p><p><span m='370290'>A rectangle with
  sizes equal to some delta where delta is a</span> <span m='375990'>small
  number.</span> </p><p><span m='379000'>In that case, the double integral,
  which is the volume</span> <span m='382920'>on top of that rectangle, is
  simpler to evaluate.</span> </p><p><span m='388810'>It is equal to the value
  of the function that we're</span> <span m='393010'>integrating at some point
  in the rectangle --- let's take</span> <span m='396640'>that corner ---</span>
  <span m='397940'>times the area of that little rectangle, which is equal
  to</span> <span m='402640'>delta square.</span> </p><p><span m='404390'>So we
  have an interpretation of the joint PDF in terms of</span> <span
  m='407820'>probabilities of small rectangles.</span> </p><p><span
  m='410820'>Joint PDFs are not probabilities.</span> </p><p><span
  m='414140'>But rather, they are probability densities.</span> </p><p><span
  m='417560'>They tell us the probability per unit area.</span> </p><p><span
  m='423020'>And one more important comment.</span> </p><p><span m='425190'>For
  the case of a single continuous random variable, we</span> <span
  m='428450'>know that any single point has 0 probability.</span> </p><p><span
  m='432750'>This is again, true for the case of two jointly continuous</span>
  <span m='436620'>random variables.</span> </p><p><span m='437440'>But more is
  true.</span> </p><p><span m='439460'>If you take a set B that has 0
  area.</span> </p><p><span m='444350'>For example, a certain curve.</span>
  </p><p><span m='446890'>Suppose that this curve is the entire set B. Then, the
  volume</span> <span m='454890'>under the joint PDF that's sitting on top of
  that curve</span> <span m='460320'>is going to be equal to 0.</span>
  </p><p><span m='463570'>So 0 area sets have 0 probability.</span> </p><p><span
  m='468460'>And this is one of the characteristic features of</span> <span
  m='470930'>jointly continuous random variables.</span> </p><p><span
  m='474590'>Now, let's think of a particular situation.</span> </p><p><span
  m='477920'>Suppose that X is a continuous random variable, and let Y be</span>
  <span m='484160'>another random variable, which is identically equal to
  X.</span> </p><p><span m='488160'>Since X is a continuous random variable, Y
  is also a</span> <span m='491730'>continuous random variable.</span>
  </p><p><span m='493690'>However, in this situation, we are certain that the
  outcome</span> <span m='497480'>of the experiment is going to fall on the
  line</span> <span m='500890'>where x equals y.</span> </p><p><span
  m='503080'>All the probability lies on top of a line, and</span> <span
  m='506910'>a line has 0 area.</span> </p><p><span m='510140'>So we have
  positive probability on the set of 0</span> <span m='513840'>area, which
  contradicts what we discussed before.</span> </p><p><span m='517159'>Well,
  this simply means that X and Y are not jointly</span> <span
  m='521100'>continuous.</span> </p><p><span m='522230'>Each one of them is
  continuous, but together</span> <span m='524420'>they're not jointly
  continuous.</span> </p><p><span m='527840'>Essentially, joint continuity is
  something more than</span> <span m='532230'>requiring each random variable to
  be continuous by itself.</span> </p><p><span m='536370'>For joint continuity,
  we want the probability to be really</span> <span m='541010'>spread over two
  dimensions.</span> </p><p><span m='543820'>Probability is not allowed to be
  concentrated on a</span> <span m='547630'>one-dimensional set.</span>
  </p><p><span m='549140'>On the other hand, in this example, the probability
  is</span> <span m='551850'>concentrated on a one-dimensional set.</span>
  </p><p><span m='554450'>And we do not have joint continuity.</span>
  </p><p></p>
uid: 8d816a5424029085db1d4e93e47f1b00
type: courses
layout: video
---
