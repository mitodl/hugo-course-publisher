---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: 6stYmO_N7LI
    parent_uid: 86da8e224a91eea220192518cfa3e2b2
    title: Video-YouTube-Stream
    type: Video
    uid: e135395710aa5a6ea192e00f3ec5ae53
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/6stYmO_N7LI/default.jpg'
    parent_uid: 86da8e224a91eea220192518cfa3e2b2
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 528f4cbe7ed67dbc3a1dcacf27bf4bfb
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: 6stYmO_N7LI
    parent_uid: 86da8e224a91eea220192518cfa3e2b2
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 81f654e6856b09283d734d614a00960d
  - id: 6stYmO_N7LI.srt
    parent_uid: 86da8e224a91eea220192518cfa3e2b2
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-iii-random-processes/time-of-the-k2013th-arrival/6stYmO_N7LI.srt
    title: 3play caption file
    type: null
    uid: 724bb50357ac195090d9f371165a8bb3
  - id: 6stYmO_N7LI.pdf
    parent_uid: 86da8e224a91eea220192518cfa3e2b2
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-iii-random-processes/time-of-the-k2013th-arrival/6stYmO_N7LI.pdf
    title: 3play pdf file
    type: null
    uid: 07d56aff4ff488ac86d4dc7b5cbd54c6
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 86da8e224a91eea220192518cfa3e2b2
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 55aeb8c1491b74077d2e2672bede6098
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 86da8e224a91eea220192518cfa3e2b2
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 08571300faa9ba3746a14ae5f4bd21fd
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L22-07_300k.mp4
    parent_uid: 86da8e224a91eea220192518cfa3e2b2
    title: Video-Internet Archive-MP4
    type: Video
    uid: 1b150073478d5da36c41c624265b9d3b
inline_embed_id: 51003704timeofthektharrival77129262
order_index: 2069
parent_uid: ea0e960c7d6bb5ec3c28c2657fe85c0d
related_resources_text: ''
short_url: time-of-the-k2013th-arrival
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-iii-random-processes/time-of-the-k2013th-arrival
title: Time of the K–th Arrival
transcript: >-
  <p><span m='770'>We now follow a program that parallels our development</span>
  <span m='4310'>for the case of the Bernoulli process.</span> </p><p><span
  m='6780'>We will study the time until the first arrival,</span> <span
  m='10460'>a random variable that we denote by T1.</span> </p><p><span
  m='13870'>We're interested in finding the probability</span> <span
  m='15940'>distribution of this random variable.</span> </p><p><span
  m='18050'>And later on, we will continue and try</span> <span m='20600'>to
  study the time until the kth arrival.</span> </p><p><span m='25060'>Now T1 is
  a continuous random variable,</span> <span m='27720'>because the Poisson
  process runs in continuous time.</span> </p><p><span m='30270'>And therefore,
  it has a PDF.</span> </p><p><span m='32070'>But instead of finding the PDF
  directly,</span> <span m='34550'>we will first find the CDF of this random
  variable.</span> </p><p><span m='38530'>So we fix a certain time, T. And
  we're</span> <span m='42940'>asking for the probability that the first arrival
  happens</span> <span m='45950'>during this interval.</span> </p><p><span
  m='47600'>Now this is 1 minus the probability</span> <span m='49760'>that the
  first arrival happens outside this interval.</span> </p><p><span m='52980'>So
  we can write this probability as 1 minus the probability</span> <span
  m='57060'>that T1 is bigger than t.</span> </p><p><span m='59680'>But what is
  this event?</span> </p><p><span m='61520'>The first arrival occurring after
  time, little t,</span> <span m='65760'>is the same as saying that there were
  no arrivals in the time</span> <span m='69610'>interval from 0 to little
  t.</span> </p><p><span m='73160'>And this probability of 0 arrivals</span>
  <span m='76660'>in a time interval of length t is</span> <span
  m='80170'>something for which we already have a formula.</span> </p><p><span
  m='83380'>Take this formula and replace k by 0, tau by t.</span> </p><p><span
  m='88830'>When k is equal to 0, this term is</span> <span m='91650'>something
  to the 0-th power equal to 1.</span> </p><p><span m='94289'>Using our
  convention, that 0 factorial is equal to 1,</span> <span m='97710'>we're left
  just with e to the minus lambda t.</span> </p><p><span m='100990'>And this is
  the answer for the CDF of the time</span> <span m='104479'>until the first
  arrival.</span> </p><p><span m='106440'>We then take the derivative.</span>
  </p><p><span m='108320'>And we find that the PDF of the time until the first
  arrival</span> <span m='112550'>has this form, which is the PDF of an
  exponential random</span> <span m='116700'>variable.</span> </p><p><span
  m='117650'>Of course, this calculation here is</span> <span m='119660'>only
  valid for t's that are non-negative.</span> </p><p><span m='124190'>For
  negative t's, the PDF of T1 is, of course, 0.</span> </p><p><span
  m='128910'>For the exponential random variable,</span> <span m='130669'>we
  have seen that it has certain memorylessness properties.</span> </p><p><span
  m='134600'>Namely, if I condition on an event</span> <span m='137860'>that
  nothing has occurred until a certain time,</span> <span m='141420'>t, and I am
  interested in the time from now</span> <span m='145910'>until the first
  arrival occurs, this remaining</span> <span m='149850'>until the first arrival
  is again an exponential distribution.</span> </p><p><span m='153780'>That is,
  looking ahead from this time,</span> <span m='156620'>I will still wait an
  exponentially distributed</span> <span m='159810'>amount of time until I see
  the first arrival.</span> </p><p><span m='163340'>Whatever happened in the
  past and how long</span> <span m='165490'>I have been waiting doesn't
  matter.</span> </p><p><span m='167920'>Starting from this time, I will
  still</span> <span m='170050'>wait an exponentially distributed amount of
  time.</span> </p><p><span m='173540'>This is essentially an expression</span>
  <span m='175250'>of a fresh start property of the Poisson process,
  which</span> <span m='179150'>is analogous to the fresh start properties for
  the Bernoulli</span> <span m='181870'>process.</span> </p><p><span
  m='182440'>And we will be discussing this fresh start</span> <span
  m='184640'>property a lot more.</span> </p><p><span m='186540'>Having figured
  out the distribution</span> <span m='188890'>of the time of the first
  arrival,</span> <span m='190880'>let us now study the time of the k-th
  arrival, a random variable</span> <span m='195590'>that we denote by Y sub k,
  similar to the case</span> <span m='199400'>of the Bernoulli process.</span>
  </p><p><span m='201030'>This random variable is a continuous one,</span> <span
  m='202990'>because arrivals happen in continuous time,</span> <span
  m='205260'>so it takes continuous values.</span> </p><p><span m='206940'>And
  therefore, it will be described by a PDF.</span> </p><p><span m='210110'>And
  this is what we want to find.</span> </p><p><span m='212710'>In order to find
  it, we will make use of the Poisson PMF</span> <span m='216990'>that we have
  already derived for the number of arrivals</span> <span m='220220'>during an
  interval of a fixed length.</span> </p><p><span m='223320'>One approach to
  finding the PDF of Yk</span> <span m='226650'>is the usual program, similar
  again</span> <span m='228950'>to what we did for the case of the first arrival
  time.</span> </p><p><span m='232540'>We can first find CDF, and then
  differentiate to find the PDF.</span> </p><p><span m='237470'>So what is the
  CDF?</span> </p><p><span m='239040'>We want to calculate the
  probability</span> <span m='241070'>that Yk is less than or equal to some
  number, little y.</span> </p><p><span m='247690'>Now what is this
  event?</span> </p><p><span m='249740'>The k-th arrival occurs by time
  y.</span> </p><p><span m='254820'>This means that by time y, we've had at
  least k arrivals.</span> </p><p><span m='259800'>We've had k arrivals, or
  maybe k plus 1, or maybe k plus 2.</span> </p><p><span m='264860'>We've had
  some number of arrivals, n,</span> <span m='268120'>in an interval of length,
  y.</span> </p><p><span m='272320'>And this is an event that happens with this
  probability.</span> </p><p><span m='277050'>But we need to take into account
  all of the possible values of n</span> <span m='281290'>that are at least as
  large as k.</span> </p><p><span m='285780'>Now we have a formula for this
  probability, the probability</span> <span m='289690'>of n arrivals in an
  interval of given length.</span> </p><p><span m='292420'>This is the Poisson
  PMF with appropriate changes of symbols.</span> </p><p><span m='296490'>So we
  can take this expression, substitute it here, and then</span> <span
  m='300880'>differentiate to do some algebra and find the answer.</span>
  </p><p><span m='304720'>Instead of carrying out this algebra,</span> <span
  m='306550'>however, we will proceed in a more intuitive way that</span> <span
  m='310665'>will get us there perhaps faster.</span> </p><p><span
  m='313930'>And the derivation that we would follow actually</span> <span
  m='317110'>parallels the one that we went through</span> <span m='320110'>in
  the case of the Bernoulli process.</span> </p><p><span m='322610'>The
  intuitive argument that we will use</span> <span m='324690'>will rest on the
  interpretation of a PDF</span> <span m='327690'>in terms of probabilities of
  small intervals.</span> </p><p><span m='330970'>So the PDF evaluated at some
  particular point,</span> <span m='334270'>y, times delta, is approximately the
  probability</span> <span m='338909'>that our random variable falls within a
  delta interval</span> <span m='343240'>from this number, little y, that we're
  considering.</span> </p><p><span m='346560'>So here's time 0, here's time y,
  and here's time y plus delta.</span> </p><p><span m='351870'>We want to find
  or to say something</span> <span m='354930'>about the probability of falling
  inside this small interval.</span> </p><p><span m='359560'>Now what does it
  mean for the k-th arrival</span> <span m='362880'>to fall inside this
  interval?</span> </p><p><span m='365890'>This is an event that can happen as
  follows.</span> </p><p><span m='369000'>The k-th arrival falls in this
  interval,</span> <span m='371790'>and we've had k minus 1 arrivals during the
  previous interval.</span> </p><p><span m='376840'>What is the probability of
  this event?</span> </p><p><span m='381100'>A basic assumption about the
  Poisson process</span> <span m='383280'>is the independence assumption.</span>
  </p><p><span m='385100'>Therefore, having k minus 1 arrivals in this
  interval</span> <span m='389170'>and having one arrival in this
  interval</span> <span m='391490'>are independent events.</span> </p><p><span
  m='393430'>Therefore, the probability of this scenario</span> <span
  m='395659'>is the product of the probabilities</span> <span m='399100'>that
  we've had k minus 1 arrivals in an interval</span> <span m='404250'>of length,
  y, times the probability</span> <span m='407480'>that we've had one arrival in
  an interval of length delta.</span> </p><p><span m='411560'>And that latter
  probability is approximately</span> <span m='414590'>equal to lambda times
  delta.</span> </p><p><span m='416920'>So I should write here an approximate
  equality instead</span> <span m='420050'>of an exact equality, to
  indicate</span> <span m='421880'>that there are other terms, order of delta
  squared,</span> <span m='424730'>for example, but which are much smaller
  compared to the delta.</span> </p><p><span m='429040'>However, this is not the
  only way</span> <span m='431290'>that we can get the k-th arrival in this
  interval.</span> </p><p><span m='434700'>There's an alternative
  scenario.</span> </p><p><span m='436710'>We might have had k minus 2 arrivals
  during this interval,</span> <span m='442230'>and then two arrivals during
  that little interval.</span> </p><p><span m='445950'>In this case, the k-th
  arrival again</span> <span m='448290'>occurs within that little
  interval.</span> </p><p><span m='450680'>So we need to also calculate the
  probability of this scenario.</span> </p><p><span m='455310'>The probability
  of that scenario is</span> <span m='457600'>the probability of k minus 2
  arrivals in an interval</span> <span m='460920'>of length, y, times the
  probability of two arrivals.</span> </p><p><span m='464950'>But the
  probability of two arrivals</span> <span m='466640'>is something that's order
  of delta squared.</span> </p><p><span m='470230'>And order of delta squared is
  much smaller</span> <span m='472960'>than this term, which is linear in
  delta.</span> </p><p><span m='475590'>And so this term can be ignored as long
  as we're just</span> <span m='479500'>keeping track of the dominant
  terms,</span> <span m='481580'>those are linear in delta.</span> </p><p><span
  m='483740'>And then, they would be similar expressions.</span> </p><p><span
  m='486360'>For example, the scenario that we have three arrivals up</span>
  <span m='490010'>to time y, and then three more arrivals</span> <span
  m='493610'>during that little interval, which is again</span> <span
  m='496160'>an event of probability, order of delta</span> <span
  m='498350'>squared, that we get three arrivals there.</span> </p><p><span
  m='500920'>And all of those terms are insignificant,</span> <span
  m='503620'>and we can ignore them.</span> </p><p><span m='506150'>And we end
  up with an approximate equality</span> <span m='509790'>between this term and
  this expression here.</span> </p><p><span m='517308'>Delta shows up on both
  sides, so we can cancel delta.</span> </p><p><span m='522520'>And therefore,
  we have ended up with a formula for the PDF.</span> </p><p><span m='528100'>In
  particular, the PDF is equal to this probability times</span> <span
  m='532280'>lambda.</span> </p><p><span m='533320'>What is this
  probability?</span> </p><p><span m='534640'>We have a formula for it.</span>
  </p><p><span m='536550'>But we just need to substitute.</span> </p><p><span
  m='538190'>Put k minus 1 in the place of k, and put y in the place of
  tau.</span> </p><p><span m='544500'>This gives us lambda y to the power k
  minus 1, e</span> <span m='550050'>to the minus lambda y, divided by k minus 1
  factorial.</span> </p><p><span m='556850'>And then we have the extra
  factor</span> <span m='558510'>of lambda, which can be put together with this
  lambda</span> <span m='562890'>to the k minus 1 here.</span> </p><p><span
  m='564860'>And we end up with this final formula for the PDF of Yk.</span>
  </p><p><span m='570100'>The distribution that we have here</span> <span
  m='571720'>is called an Erlang distribution.</span> </p><p><span
  m='573720'>But actually, it's not just one distribution.</span> </p><p><span
  m='576260'>We have different distributions depending</span> <span
  m='578640'>on what k we're considering.</span> </p><p><span m='581130'>The
  distribution of the time of the third arrival</span> <span m='583950'>is
  different from the distribution</span> <span m='585510'>of the 10th
  arrival.</span> </p><p><span m='587120'>So if we fix a particular k,
  then</span> <span m='589580'>we say that we have an Erlang distribution of
  order k.</span> </p><p><span m='596300'>For the case where k is equal to
  1,</span> <span m='599520'>this term here disappears, k minus 1 is equal to
  0.</span> </p><p><span m='603840'>And the denominator term disappears,</span>
  <span m='606060'>and we end up with lambda times e to the minus lambda
  y.</span> </p><p><span m='610260'>But this is the exponential
  distribution</span> <span m='612480'>that we had already derived with a
  different method earlier.</span> </p><p><span m='616730'>As you increase k, of
  course, you</span> <span m='618900'>get different distributions.</span>
  </p><p><span m='620580'>And these tend to shift towards the right.</span>
  </p><p><span m='623820'>This makes sense.</span> </p><p><span m='625610'>The
  time of the second arrival is</span> <span m='628430'>likely to take certain
  values.</span> </p><p><span m='630280'>The time of the third arrival is likely
  to take</span> <span m='632890'>values that are higher.</span> </p><p><span
  m='634310'>And the more you increase k, the more the distribution</span> <span
  m='637640'>will be shifting towards the right.</span> </p><p></p>
uid: 86da8e224a91eea220192518cfa3e2b2
type: course
layout: video
---
