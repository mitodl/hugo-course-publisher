---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: VJhDWandNwc
    parent_uid: ebf265e13cf097a3071a6db96aa080df
    title: Video-YouTube-Stream
    type: Video
    uid: b9337bcb58a307ea5cf2be46fcc79802
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/VJhDWandNwc/default.jpg'
    parent_uid: ebf265e13cf097a3071a6db96aa080df
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 4b6398724e595a1c37c977572d92d3ce
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: VJhDWandNwc
    parent_uid: ebf265e13cf097a3071a6db96aa080df
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 200589973bb7b896271f1b469e4e17cc
  - id: VJhDWandNwc.srt
    parent_uid: ebf265e13cf097a3071a6db96aa080df
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/mixed-random-variables/VJhDWandNwc.srt
    title: 3play caption file
    type: null
    uid: c936a236a1365edc33a705df0b0d97fe
  - id: VJhDWandNwc.pdf
    parent_uid: ebf265e13cf097a3071a6db96aa080df
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/mixed-random-variables/VJhDWandNwc.pdf
    title: 3play pdf file
    type: null
    uid: 29b49f966fe08a76a2192e24b28e51dd
  - id: Caption-3Play YouTube id-SRT
    parent_uid: ebf265e13cf097a3071a6db96aa080df
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: fe5f27547a5024741d7ba3301ecab8c8
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: ebf265e13cf097a3071a6db96aa080df
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 0d16ace1803fb7005c8897f189d1563c
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L09-06_300k.mp4
    parent_uid: ebf265e13cf097a3071a6db96aa080df
    title: Video-Internet Archive-MP4
    type: Video
    uid: 45ff5daaae33766156cd9c4143afceca
inline_embed_id: 2187507mixedrandomvariables38945525
order_index: 870
parent_uid: 9ca6b310dc93095c9ac0f0e5f95e6930
related_resources_text: ''
short_url: mixed-random-variables
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/mixed-random-variables
title: Mixed Random Variables
transcript: >-
  <p><span m='2240'>We now look at an example similar to the previous
  one,</span> <span m='5620'>in which we have again two scenarios, but in which
  we</span> <span m='8750'>have both discrete and continuous</span> <span
  m='11160'>random variables involved.</span> </p><p><span m='13600'>You have $1
  and the opportunity</span> <span m='15620'>to play in the lottery.</span>
  </p><p><span m='17200'>With probability 1/2, you do nothing and you're left
  with</span> <span m='21730'>the dollar that you started with.</span>
  </p><p><span m='24426'>With probability 1/2, you decide to play the
  lottery.</span> </p><p><span m='28330'>And in that case, you get back an
  amount of money which is</span> <span m='31780'>random and uniformly
  distributed</span> <span m='34120'>between zero and two.</span> </p><p><span
  m='37100'>Is the random variable, X, discrete?</span> </p><p><span
  m='40170'>The answer is no, because it takes values on</span> <span
  m='44120'>a continuous range.</span> </p><p><span m='46830'>Is the random
  variable, X, continuous?</span> </p><p><span m='50670'>The answer is no,
  because the probability that X takes the</span> <span m='56790'>value of
  exactly one is equal to 1/2.</span> </p><p><span m='64209'>Even though X takes
  values in a continuous range, this is</span> <span m='67900'>not enough to
  make it a continuous random variable.</span> </p><p><span m='70530'>We defined
  continuous random variables to be those that can</span> <span m='73460'>be
  described by a PDF.</span> </p><p><span m='75460'>And you have seen it in such
  a case, any individual point</span> <span m='78930'>should have zero
  probability.</span> </p><p><span m='80880'>But this is not the case here, and
  so X is not continuous.</span> </p><p><span m='85060'>We call X a mixed random
  variable.</span> </p><p><span m='88840'>More generally, we can have a
  situation where the random</span> <span m='92770'>variable X with some
  probability is the same as a</span> <span m='97300'>particular discrete random
  variable, and with some other</span> <span m='101320'>probability it is equal
  to some other</span> <span m='104140'>continuous random variable.</span>
  </p><p><span m='106420'>Such a random variable, X, does not have a PMF because
  it</span> <span m='110550'>is not discrete.</span> </p><p><span
  m='112240'>Also, it does not have a PDF because it is not continuous.</span>
  </p><p><span m='116880'>How do we describe such a random variable?</span>
  </p><p><span m='119479'>Well, we can describe it in terms of a
  cumulative</span> <span m='122450'>distribution function.</span> </p><p><span
  m='124070'>CDFs are always well defined for all</span> <span m='127760'>kinds
  of random variables.</span> </p><p><span m='130000'>We have two scenarios, and
  so we can use the Total</span> <span m='133290'>Probability Theorem and write
  that the CDF is equal to the</span> <span m='138890'>probability of the first
  scenario, which is p, times</span> <span m='143600'>the probability that the
  random variable Y is less than</span> <span m='147240'>or equal to x.</span>
  </p><p><span m='148820'>This is a conditional model under the first
  scenario.</span> </p><p><span m='151900'>And with some probability, we have
  the second scenario.</span> </p><p><span m='154870'>And under that scenario, X
  will take a value less than</span> <span m='158370'>little x, if and only if
  our random variable Z will take a</span> <span m='162800'>value less than
  little x.</span> </p><p><span m='165280'>Or in CDF notation, this is p times
  the CDF of the random</span> <span m='171510'>variable Y evaluated at this
  particular x plus another</span> <span m='177620'>weighted term involving the
  CDF of the random variable Z.</span> </p><p><span m='187520'>We can also
  define the expected value of X in a way</span> <span m='191820'>that is
  consistent with the Total Expectation Theorem,</span> <span m='195940'>namely
  define the expected value of X to be the</span> <span m='200290'>probability
  of the first scenario, in which case X is</span> <span m='203850'>discrete
  times the expected value of the associated</span> <span m='206870'>discrete
  random variable, plus the probability of the second</span> <span
  m='210120'>scenario, under which X is continuous, times the expected</span>
  <span m='214740'>value of the associated continuous random variable.</span>
  </p><p><span m='220200'>Going back to our original example, we have two</span>
  <span m='222670'>scenarios, the scenarios that we can call A1 and A2.</span>
  </p><p><span m='229242'>Under the first scenario, we have a uniform PDF, and
  the</span> <span m='234110'>corresponding CDF is as follows.</span>
  </p><p><span m='238010'>It's flat until zero, then it rises linearly.</span>
  </p><p><span m='241880'>And then it stays flat, and the value</span> <span
  m='244880'>here is equal to one.</span> </p><p><span m='246900'>So the slope
  here is 1/2.</span> </p><p><span m='251750'>So the slope is equal to the
  corresponding PDF.</span> </p><p><span m='255050'>Under the second scenario,
  we have a discrete, actually a</span> <span m='258029'>constant random
  variable.</span> </p><p><span m='259529'>And so the CDF is flat at zero until
  this value, and at that</span> <span m='265020'>value we have a jump equal to
  one.</span> </p><p><span m='269800'>We then use the Total Probability Theorem,
  which</span> <span m='272690'>tells us that the CDF of the mixed random
  variable will be</span> <span m='276700'>1/2 times the CDF under the first
  scenario plus 1/2 times</span> <span m='281450'>the CDF under the second
  scenario.</span> </p><p><span m='283850'>So we take 1/2 of this plot and 1/2
  of that plot</span> <span m='288590'>and add them up.</span> </p><p><span
  m='289990'>What we get is a function that rises now at the slope of
  1/4.</span> </p><p><span m='301700'>Then we have a jump, and the size of that
  to jump is going</span> <span m='305970'>to be equal to 1/2.</span>
  </p><p><span m='309970'>And then it continues at a slope of 1/4 until it
  reaches</span> <span m='316770'>this value.</span> </p><p><span m='317470'>And
  after that time, it remains flat.</span> </p><p><span m='322540'>So this is a
  simple illustration that for mixed</span> <span m='325090'>random variables
  it's not too hard to obtain the</span> <span m='327720'>corresponding CDF even
  though this random variable does not</span> <span m='331590'>have a PDF or a
  PMF of its own.</span> </p><p></p>
uid: ebf265e13cf097a3071a6db96aa080df
type: course
layout: video
---
