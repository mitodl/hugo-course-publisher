---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: NInNhFm046w
    parent_uid: 2f1481e0a138dd53c3bdf230ae82035f
    title: Video-YouTube-Stream
    type: Video
    uid: b4b2c1bd99961ca623fefa7b96ad7a3e
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/NInNhFm046w/default.jpg'
    parent_uid: 2f1481e0a138dd53c3bdf230ae82035f
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: ca2c2ca90e64da622e8fbef72d51e6ef
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: NInNhFm046w
    parent_uid: 2f1481e0a138dd53c3bdf230ae82035f
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: e690b87f79a0e3cc7819f383e63b80d2
  - id: NInNhFm046w.srt
    parent_uid: 2f1481e0a138dd53c3bdf230ae82035f
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/confidence-intervals/NInNhFm046w.srt
    title: 3play caption file
    type: null
    uid: f02efa6c73470efb6c27276cda35e491
  - id: NInNhFm046w.pdf
    parent_uid: 2f1481e0a138dd53c3bdf230ae82035f
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/confidence-intervals/NInNhFm046w.pdf
    title: 3play pdf file
    type: null
    uid: c5ae72fd3a1c8bb116d92acfc3ac5244
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 2f1481e0a138dd53c3bdf230ae82035f
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 5b23622c4188d7b14677954980bc532d
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 2f1481e0a138dd53c3bdf230ae82035f
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: c1b1ae12edbe0376cf45d864c1bb21ef
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L20-05_300k.mp4
    parent_uid: 2f1481e0a138dd53c3bdf230ae82035f
    title: Video-Internet Archive-MP4
    type: Video
    uid: 0c188cc16d4bb544dedf94a39521fc32
inline_embed_id: 78630294confidenceintervals40632140
order_index: 1858
parent_uid: b8cdf274e2b0f82662e4cd137e85d308
related_resources_text: ''
short_url: confidence-intervals
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/confidence-intervals
title: Confidence Intervals
transcript: >-
  <p><span m='1030'>In this segment we introduce the concept of</span> <span
  m='3150'>a confidence interval.</span> </p><p><span m='5120'>The starting
  point is that an estimate, the value of an</span> <span m='8109'>estimator,
  does not tell the whole story.</span> </p><p><span m='11110'>One option is to
  also provide the standard error of the</span> <span m='13910'>estimator, but a
  more common practice is to report a</span> <span m='17290'>confidence
  interval.</span> </p><p><span m='18910'>What is that?</span> </p><p><span
  m='20040'>We'll introduce the notion of a confidence</span> <span
  m='22060'>interval through a story.</span> </p><p><span m='23740'>You're
  working for a polling company.</span> </p><p><span m='25910'>You carry out a
  poll, and then you go and report to your boss</span> <span m='31520'>that my
  estimate is this particular number.</span> </p><p><span m='38000'>And then
  your boss says, I appreciate the five digit</span> <span m='41620'>accuracy,
  but are your conclusions that accurate?</span> </p><p><span m='45510'>You go
  back to your desk, you do some more calculations, and</span> <span
  m='49240'>then you tell your boss, here is a 95% confidence interval.</span>
  </p><p><span m='58480'>Your boss tells you, that looks great, but what
  does</span> <span m='61930'>that exactly mean?</span> </p><p><span
  m='63570'>You go back to your textbook, you pull out the definition,</span>
  <span m='66980'>and you reply as follows.</span> </p><p><span m='69420'>Well,
  a 95% confidence interval--</span> <span m='73130'>so here I am letting alpha
  to be 5%--</span> <span m='77550'>a 95% confidence interval is an interval
  that has the</span> <span m='82800'>following property.</span> </p><p><span
  m='84360'>That the unknown value of the parameter that we're trying to</span>
  <span m='87710'>estimate falls inside this interval with</span> <span
  m='92060'>probability at least 95%.</span> </p><p><span m='95320'>And if you
  wish, I could also let alpha be equal to 1%, in</span> <span m='99390'>which
  case I could give you a 99% confidence interval.</span> </p><p><span
  m='103630'>Your boss replies, no, that sounds good.</span> </p><p><span
  m='106220'>A 95% interval sounds fine.</span> </p><p><span m='109920'>And your
  boss goes out to the press, holds a press</span> <span m='113310'>conference,
  and reports that the true value of the</span> <span m='118740'>parameter lies
  inside this range, inside the reported</span> <span m='124490'>confidence
  interval with probability at least 95%.</span> </p><p><span m='131680'>Does
  this statement make sense?</span> </p><p><span m='134610'>Actually, no.</span>
  </p><p><span m='136220'>This statement is the most common misconception of
  what a</span> <span m='140300'>confidence interval is.</span> </p><p><span
  m='142740'>To see why this statement does not make</span> <span
  m='144790'>sense, look at it carefully.</span> </p><p><span m='147030'>We're
  talking about the probability of something.</span> </p><p><span m='149880'>But
  that something does not involve anything random.</span> </p><p><span
  m='153460'>0.3 and 0.52 are just numbers.</span> </p><p><span m='156300'>And
  theta is also a number which we do not know what it</span> <span
  m='161079'>is, but it is not random.</span> </p><p><span m='162816'>It is a
  constant.</span> </p><p><span m='164650'>So this statement is incorrect on a
  purely syntactic basis.</span> </p><p><span m='169350'>I mean the true
  parameter theta either is inside this</span> <span m='172370'>interval, or it
  is not.</span> </p><p><span m='174190'>But there's nothing random here, and so
  this statement</span> <span m='177640'>does not make sense.</span>
  </p><p><span m='179980'>Instead, let us look carefully at this
  definition.</span> </p><p><span m='184070'>This statement does make sense
  because it</span> <span m='186810'>involves random variables.</span>
  </p><p><span m='189230'>The lower and the upper end of the confidence interval
  are</span> <span m='193150'>quantities that are determined by the data, and
  therefore</span> <span m='197140'>they are random.</span> </p><p><span
  m='198530'>So we do have random variables in here.</span> </p><p><span
  m='201400'>And so it makes sense to talk about probabilities.</span>
  </p><p><span m='205160'>To really understand what's going on, think as
  follows.</span> </p><p><span m='209590'>We're dealing with a poll that is
  trying to estimate some</span> <span m='213860'>unknown value, theta.</span>
  </p><p><span m='216860'>You carry out the poll, and you come up with a
  confidence</span> <span m='220860'>interval based on the data.</span>
  </p><p><span m='222990'>You might be lucky, and your confidence interval
  happens to</span> <span m='226820'>capture the true parameter.</span>
  </p><p><span m='229100'>You carry the poll one more time, maybe on another
  day.</span> </p><p><span m='232579'>You come up with another confidence
  interval.</span> </p><p><span m='235170'>And you're again lucky, and it
  captures the true parameter.</span> </p><p><span m='238360'>You carry it on
  another day, and you come up with a</span> <span m='241260'>confidence
  interval.</span> </p><p><span m='242550'>And maybe the data that you got were
  kind of skewed.</span> </p><p><span m='246770'>You were unlucky, and your
  confidence interval does not</span> <span m='250010'>capture the true
  parameter.</span> </p><p><span m='252750'>Having a 95% confidence interval
  means that 95% of the</span> <span m='258870'>time, 95% of the polls that you
  carry out will capture the</span> <span m='264980'>true parameter.</span>
  </p><p><span m='266380'>So the word 95% really talks about your method
  of</span> <span m='270190'>constructing confidence intervals.</span>
  </p><p><span m='272490'>It's a method that 95% of the time will</span> <span
  m='275850'>capture the true parameter.</span> </p><p><span m='277590'>It is
  not a statement about the actual numbers that you</span> <span m='282380'>are
  reporting on one specific poll.</span> </p><p><span m='286040'>So it is
  important to keep this in mind, and to always</span> <span
  m='289190'>interpret confidence intervals the correct way.</span> </p><p><span
  m='293700'>So how does one come up with confidence intervals?</span>
  </p><p><span m='296909'>The most common method is based on normal</span> <span
  m='299240'>approximations, as we will be seeing next.</span> </p><p></p>
uid: 2f1481e0a138dd53c3bdf230ae82035f
type: course
layout: video
---
