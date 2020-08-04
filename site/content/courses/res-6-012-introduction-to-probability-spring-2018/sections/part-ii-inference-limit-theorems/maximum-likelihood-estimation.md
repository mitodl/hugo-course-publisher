---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: ZgCBmERwZlI
    parent_uid: cf092724db8c19761236d90415fe9f52
    title: Video-YouTube-Stream
    type: Video
    uid: 0369221dfd1364d132126fb1f3abb75a
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/ZgCBmERwZlI/default.jpg'
    parent_uid: cf092724db8c19761236d90415fe9f52
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: ec826593c328c84ac03b8ced618b5f8f
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: ZgCBmERwZlI
    parent_uid: cf092724db8c19761236d90415fe9f52
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 3acad40c4b6d29367bcd53084d5c473c
  - id: ZgCBmERwZlI.srt
    parent_uid: cf092724db8c19761236d90415fe9f52
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/maximum-likelihood-estimation/ZgCBmERwZlI.srt
    title: 3play caption file
    type: null
    uid: 4927f7cf7e0d273acb73dd6bcdfb0fa8
  - id: ZgCBmERwZlI.pdf
    parent_uid: cf092724db8c19761236d90415fe9f52
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/maximum-likelihood-estimation/ZgCBmERwZlI.pdf
    title: 3play pdf file
    type: null
    uid: d32d4bc09be20c9c6b2da1c9f765664c
  - id: Caption-3Play YouTube id-SRT
    parent_uid: cf092724db8c19761236d90415fe9f52
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 40ad6c8799d4e486f83949f199aee74c
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: cf092724db8c19761236d90415fe9f52
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 44fe13c54f3ab446d96de5a5e9e74257
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L20-09_300k.mp4
    parent_uid: cf092724db8c19761236d90415fe9f52
    title: Video-Internet Archive-MP4
    type: Video
    uid: 0f38d1c0cd471d0f167e1e2e19cbd286
inline_embed_id: 49735949maximumlikelihoodestimation50282730
order_index: 1894
parent_uid: b8cdf274e2b0f82662e4cd137e85d308
related_resources_text: ''
short_url: maximum-likelihood-estimation
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/maximum-likelihood-estimation
title: Maximum Likelihood Estimation
transcript: >-
  <p><span m='880'>We will finish our discussion of classical statistical</span>
  <span m='3630'>methods by discussing a general method for estimation,</span>
  <span m='7330'>the so-called maximum likelihood method.</span> </p><p><span
  m='10650'>If an unknown parameter can be expressed as an expectation,</span>
  <span m='14150'>we have seen that there's a natural way of estimating
  it.</span> </p><p><span m='17710'>But what if this is not the case?</span>
  </p><p><span m='20730'>Suppose there's no apparent way of interpreting theta
  as</span> <span m='24660'>an expectation.</span> </p><p><span m='25760'>So we
  need to do something else.</span> </p><p><span m='28410'>So rather than using
  this approach, we will use a</span> <span m='32110'>different approach, which
  is the following.</span> </p><p><span m='34550'>We will find a value of theta
  that makes the data that we</span> <span m='39780'>have seen most
  likely.</span> </p><p><span m='42420'>That is, we will find the value of theta
  under which the</span> <span m='46970'>probability of obtaining the particular
  x</span> <span m='49950'>that we have seen--</span> <span m='51710'>that
  probability is as large as possible.</span> </p><p><span m='54900'>And that
  value of theta is going to be our estimate, the</span> <span m='57780'>maximum
  likelihood estimate.</span> </p><p><span m='59900'>Here, I wrote a PMF.</span>
  </p><p><span m='62240'>That's what you would do if X was a</span> <span
  m='64129'>discrete random variable.</span> </p><p><span m='65470'>But the same
  procedure, of course, applies when X is a</span> <span m='70170'>continuous
  random variable.</span> </p><p><span m='72440'>And more generally, this
  procedure also applies when X</span> <span m='76039'>is a vector of
  observations and when theta is a vector of</span> <span
  m='80550'>parameters.</span> </p><p><span m='82480'>But what does this method
  really do?</span> </p><p><span m='85289'>It is instructive to compare maximum
  likelihood estimation</span> <span m='88420'>to a Bayesian approach.</span>
  </p><p><span m='90160'>In a Bayesian setting, what we do is, we find the
  posterior</span> <span m='94270'>distribution of the unknown parameter, which
  is now</span> <span m='97330'>treated as a random variable.</span>
  </p><p><span m='100180'>And then we look for the most likely value of
  theta.</span> </p><p><span m='105729'>We look at this distribution and try to
  find its peak.</span> </p><p><span m='109050'>So we want to maximize this
  quantity over theta.</span> </p><p><span m='113210'>The denominator does not
  involve any thetas.</span> </p><p><span m='115870'>So we ignore it.</span>
  </p><p><span m='117320'>And suppose now that we use a prior for</span> <span
  m='122000'>theta, which is flat.</span> </p><p><span m='124760'>Suppose that
  this prior is constant over the range of</span> <span m='129389'>possible
  values of theta.</span> </p><p><span m='131630'>In that case, what we need to
  do is to just take this</span> <span m='135520'>expression and to maximize it
  over all thetas.</span> </p><p><span m='139750'>And this looks very similar to
  what is happening here, where</span> <span m='142960'>we take this expression
  and maximize it over all thetas.</span> </p><p><span m='147400'>So
  operationally, maximum likelihood estimation is the</span> <span
  m='151579'>same as Bayesian estimation, in which we find the peak of</span>
  <span m='156790'>the posterior for the special case where we're using</span>
  <span m='161160'>constant or a flat prior.</span> </p><p><span m='163910'>But
  despite this similarity, the two methods are</span> <span
  m='167030'>philosophically very different.</span> </p><p><span m='169505'>In
  the Bayesian setting, you're asking the question,</span> <span m='173010'>what
  is the most likely value of theta?</span> </p><p><span m='177090'>Whereas in
  the maximum likelihood setting, you're</span> <span m='180500'>asking, what is
  the value of theta that makes</span> <span m='184750'>my data most
  likely?</span> </p><p><span m='188070'>Or what is the value of theta under
  which my data are the</span> <span m='192380'>least surprising?</span>
  </p><p><span m='194610'>So the interpretation of the two methods is
  quite</span> <span m='199579'>different, even though the mechanics</span>
  <span m='202579'>can be fairly similar.</span> </p><p><span m='204810'>The
  maximum likelihood method has some remarkable properties</span> <span
  m='209350'>that we would like now to discuss.</span> </p><p><span
  m='211430'>But first, one comment--</span> <span m='213560'>we need to take
  the probability of the observed</span> <span m='218230'>data given
  theta.</span> </p><p><span m='219579'>This is a function of theta, and
  maximize it over theta.</span> </p><p><span m='223300'>In some problems, we
  can find closed form solutions for the</span> <span m='227190'>optimal value
  of theta, which is going to be our estimate</span> <span m='230400'>but more
  often, and especially for large problems, one has to</span> <span
  m='234190'>do this maximization in a numerical way.</span> </p><p><span
  m='237960'>This is possible these days, and routinely, people solve</span>
  <span m='241440'>very high dimensional problems with lots of data and lots
  of</span> <span m='244700'>parameters using the maximum likelihood
  methodology.</span> </p><p><span m='248530'>The maximum likelihood methodology
  is very popular</span> <span m='251480'>because it has a very sound
  theoretical basis.</span> </p><p><span m='256399'>I will list a few facts,
  which we will not attempt to prove</span> <span m='259990'>or even
  justify.</span> </p><p><span m='261829'>But they're useful to know as general
  background.</span> </p><p><span m='265760'>Suppose that we have n pieces of
  data that are drawn from a</span> <span m='269770'>model from a certain
  structure.</span> </p><p><span m='272450'>Then under mild assumptions, the
  maximum likelihood</span> <span m='277050'>estimator has the property that it
  is consistent.</span> </p><p><span m='280190'>That is, as we draw more and
  more data, our estimate is</span> <span m='283720'>going to converge to the
  true value of the parameter.</span> </p><p><span m='287640'>In addition, we
  know quite a bit more.</span> </p><p><span m='290070'>Asymptotically, the
  maximum likelihood estimator behaves</span> <span m='293870'>like a normal
  random variable.</span> </p><p><span m='295930'>That is, after we normalize,
  subtract the target and divide</span> <span m='300330'>by its standard
  deviation, it approaches a standard normal</span> <span
  m='304480'>distribution.</span> </p><p><span m='305440'>So in this sense, it
  behaves the same way that the sample</span> <span m='310360'>mean
  behaves.</span> </p><p><span m='312370'>Notice that this expression here
  involves the standard</span> <span m='315940'>error of the maximum likelihood
  estimator.</span> </p><p><span m='318840'>This is an important
  quantity.</span> </p><p><span m='320710'>And for this reason, people have
  developed either</span> <span m='323960'>analytical or simulation methods for
  calculating or</span> <span m='327320'>approximating this standard
  error.</span> </p><p><span m='330160'>Once you have an estimate or an
  approximation of the</span> <span m='333530'>standard error in your hands, you
  can further use it to</span> <span m='337400'>construct confidence
  intervals.</span> </p><p><span m='340140'>Using the asymptotic normality, then
  we can</span> <span m='343980'>construct a confidence interval in exactly the
  same</span> <span m='346710'>way as we did for the case of the sample mean
  estimator.</span> </p><p><span m='350690'>And this, for example, would be a
  95% confidence interval.</span> </p><p><span m='356010'>Finally, one last
  important property is that the maximum</span> <span m='359650'>likelihood
  estimator is what is called an asymptotically</span> <span
  m='365670'>efficient estimator.</span> </p><p><span m='367700'>That is, it is
  the best possible estimator in the</span> <span m='371720'>sense that it
  achieves the smallest possible variance.</span> </p><p><span m='376070'>So all
  of these are very strong properties.</span> </p><p><span m='378710'>And this
  is the reason why maximum likelihood estimation</span> <span m='382790'>is the
  most common approach for problems that do not have</span> <span m='386780'>any
  particular special structure that</span> <span m='389520'>you can exploit
  otherwise.</span> </p><p></p>
uid: cf092724db8c19761236d90415fe9f52
type: course
layout: video
---
