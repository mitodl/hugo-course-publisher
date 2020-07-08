---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: xDN5Onmu0mk
    parent_uid: 47b123db8beba90ed35b3e6822207096
    title: Video-YouTube-Stream
    type: Video
    uid: c3b38b584f50a05c3c2f944ee95e6a24
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/xDN5Onmu0mk/default.jpg'
    parent_uid: 47b123db8beba90ed35b3e6822207096
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 9024cf9fa90e7759443b53ad4181fb1a
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: xDN5Onmu0mk
    parent_uid: 47b123db8beba90ed35b3e6822207096
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 224d0562a2e9156ddf4cf8d3387ee87b
  - id: xDN5Onmu0mk.srt
    parent_uid: 47b123db8beba90ed35b3e6822207096
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-iii-random-processes/the-time-until-the-first-or-last-lightbulb-burns-out/xDN5Onmu0mk.srt
    title: 3play caption file
    type: null
    uid: 6319b8e1f197c938ba370720a459fa05
  - id: xDN5Onmu0mk.pdf
    parent_uid: 47b123db8beba90ed35b3e6822207096
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-iii-random-processes/the-time-until-the-first-or-last-lightbulb-burns-out/xDN5Onmu0mk.pdf
    title: 3play pdf file
    type: null
    uid: b32dad0771ec6aa63c696c9a1a24ae25
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 47b123db8beba90ed35b3e6822207096
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 0971e5d834947cc8e731f7c31767dc92
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 47b123db8beba90ed35b3e6822207096
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: ee08282050a80896c14d1cf1e3247e18
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L23-05_300k.mp4
    parent_uid: 47b123db8beba90ed35b3e6822207096
    title: Video-Internet Archive-MP4
    type: Video
    uid: 14e10db8aede470ee42412015aeae0a7
inline_embed_id: 10553079thetimeuntilthefirstorlastlightbulbburnsout52986291
order_index: 2141
parent_uid: ea0e960c7d6bb5ec3c28c2657fe85c0d
related_resources_text: ''
short_url: the-time-until-the-first-or-last-lightbulb-burns-out
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-iii-random-processes/the-time-until-the-first-or-last-lightbulb-burns-out
title: The Time Until the First (or Last) Lightbulb Burns Out
transcript: >-
  <p><span m='500'>We will now go through a beautiful example, in which
  we</span> <span m='3580'>approach the same question in a number of different
  ways</span> <span m='8150'>and see that by reasoning based on the
  intuitive</span> <span m='11300'>properties of a Poisson process, we</span>
  <span m='13630'>can arrive quickly to the right answer.</span> </p><p><span
  m='16750'>The problem is as follows.</span> </p><p><span m='18130'>We have
  three lightbulbs, and each light bulb</span> <span m='21080'>is being lit at
  time zero, it starts working,</span> <span m='24920'>and the light bulb lasts
  for a certain amount</span> <span m='28010'>of time, which is random.</span>
  </p><p><span m='29630'>So this light bulb lasts so long, this one lasts so
  long,</span> <span m='33090'>this one lasts that long.</span> </p><p><span
  m='36080'>The lifetime of a light bulb, the time until it burns out,</span>
  <span m='40090'>will be a random variable, and we</span> <span m='42380'>make
  the following assumptions.</span> </p><p><span m='44220'>The lifetimes of the
  three light bulbs,</span> <span m='46670'>which we denote by X, Y, and Z,
  will</span> <span m='50100'>be independent random variables, each of
  which</span> <span m='52880'>is an exponential random variable with the
  parameter</span> <span m='55760'>lambda.</span> </p><p><span m='56680'>We're
  interested in the question of calculating</span> <span m='58880'>the expected
  time until a light bulb burns out</span> <span m='62430'>for the first
  time.</span> </p><p><span m='63680'>So in this picture, the light bulb that
  burned out first</span> <span m='66870'>is the second light bulb, and this
  quantity</span> <span m='69920'>is the time until the first burnout.</span>
  </p><p><span m='72740'>How do we calculate this quantity?</span> </p><p><span
  m='75270'>The time until a first light bulb burns out</span> <span
  m='78200'>is the minimum of the times at which each one of them</span> <span
  m='82800'>burns out.</span> </p><p><span m='84370'>So we're interested in the
  expected</span> <span m='86490'>value of this quantity.</span> </p><p><span
  m='88560'>It's a random variable, which is a function of three</span> <span
  m='91030'>random variables.</span> </p><p><span m='92440'>How do we calculate
  the expected value</span> <span m='94740'>of a function of random
  variables?</span> </p><p><span m='96740'>We can use the expected value
  rule.</span> </p><p><span m='99370'>Let us take the function of
  interest,</span> <span m='102410'>which is the minimum of three
  numbers.</span> </p><p><span m='105210'>Then we need to multiply by the joint
  PDF or these three</span> <span m='110370'>random variables X, Y and Z.
  Now,</span> <span m='112970'>because these three random variables are
  independent,</span> <span m='115570'>the joint PDF is the product of their
  individual PDFs,</span> <span m='120130'>which are all exponential.</span>
  </p><p><span m='122230'>And so we obtain this expression for the joint
  PDF.</span> </p><p><span m='126440'>And we need to integrate this over all
  x's, y's, and z's.</span> </p><p><span m='132370'>So it's going to be an
  integral that</span> <span m='134290'>goes for each one of the three variables
  from 0 to infinity.</span> </p><p><span m='139730'>And here we have dx, dy,
  dz.</span> </p><p><span m='144650'>So this is one approach that can give
  us</span> <span m='147270'>the answer if you're able to manipulate and
  keep</span> <span m='151980'>track of everything that happens in this
  three-dimensional</span> <span m='156370'>integral.</span> </p><p><span
  m='157310'>But this is too tedious and this is not a good way to go.</span>
  </p><p><span m='161770'>Let us try to think of an alternative way.</span>
  </p><p><span m='164329'>Can we figure out the distribution</span> <span
  m='166990'>of this random variable?</span> </p><p><span m='168891'>It's a
  function of three random variables, so in some sense,</span> <span
  m='171390'>it's a derived distribution problem,</span> <span m='173530'>so we
  can try to calculate the cumulative distribution</span> <span
  m='177320'>function of the minimum of the three.</span> </p><p><span
  m='180650'>So for the cumulative, we would be looking at the
  probability</span> <span m='185350'>that the minimum of these three random
  variables is less than</span> <span m='190160'>or equal to a certain
  number.</span> </p><p><span m='192220'>It turns out that the
  calculations</span> <span m='194400'>are a little faster if we look at the
  probability</span> <span m='197570'>that this is larger than or equal to a
  certain number.</span> </p><p><span m='201560'>What is this event?</span>
  </p><p><span m='203130'>The minimum is larger than or equal to t,</span> <span
  m='206060'>if, and only if, all three of them</span> <span m='209660'>are
  larger than or equal to t.</span> </p><p><span m='212000'>So the probability
  of this event is the same as the probability</span> <span m='214930'>that X is
  larger than or equal to t,</span> <span m='217210'>Y larger than or equal to
  t, and Z larger than or equal to t.</span> </p><p><span m='221910'>But now X,
  Y, and Z are independent,</span> <span m='225110'>so we need to multiply the
  probability that X</span> <span m='228230'>is larger than or equal to t,
  which</span> <span m='230570'>for an exponential random variable</span> <span
  m='232170'>is e to the minus lambda t, then the probability</span> <span
  m='235250'>of the second event which is again e to the minus lambda t,</span>
  <span m='239060'>and, finally, the probability of the third event,
  which</span> <span m='241630'>is, again, e to the minus lambda t,</span> <span
  m='244010'>which is e to the minus 3 lambda t.</span> </p><p><span
  m='250730'>Now, we look at this expression for the probability</span> <span
  m='253630'>that the random variable is larger than or equal</span> <span
  m='255740'>to t and recognize that this is the expression that we have</span>
  <span m='259790'>when we have an exponential random variable with
  parameter</span> <span m='265050'>equal to 3 lambda.</span> </p><p><span
  m='267190'>If you want to do it formally, subtract this quantity from 1</span>
  <span m='270680'>to find the CDF, take the derivative,</span> <span
  m='273210'>and you will find an exponential PDF.</span> </p><p><span
  m='275820'>So the conclusion is that this random variable</span> <span
  m='279700'>is exponential with parameter 3 lambda.</span> </p><p><span
  m='286000'>And since it's an exponential with parameter 3 lambda,</span> <span
  m='289250'>then we know what the expected value is.</span> </p><p><span
  m='292070'>It is going to be 1 over 3 lambda.</span> </p><p><span
  m='295270'>And this is the answer to the question</span> <span m='297540'>that
  we were interested in.</span> </p><p><span m='300350'>Now, the fact that this
  is an exponential random variable,</span> <span m='303630'>but with a
  different parameter, is a pretty clean fact,</span> <span m='308380'>and so it
  should have a good explanation.</span> </p><p><span m='312190'>Let us now try
  to think about a good explanation for this fact.</span> </p><p><span
  m='318930'>Whenever we deal with an exponential random variable,</span> <span
  m='322660'>one way of thinking about it is that</span> <span m='325120'>this
  exponential random variable is the first time in a Poisson</span> <span
  m='329370'>process.</span> </p><p><span m='330300'>So imagine that there's a
  Poisson process that</span> <span m='333040'>runs forever, and X is the first
  arrival time.</span> </p><p><span m='338400'>For this light bulb, we can think
  the same way,</span> <span m='341180'>and since X and Y are assumed to be
  independent,</span> <span m='344650'>we can assume that here we have an
  independent Poisson</span> <span m='348010'>process, independent from the
  first one,</span> <span m='350360'>it has its own arrival times, and Y is the
  first arrival</span> <span m='353690'>time in this Poisson process.</span>
  </p><p><span m='355640'>And finally, we have a third independent Poisson
  process,</span> <span m='359040'>and the random variable Z is the first
  arrival</span> <span m='362180'>time in that Poisson process.</span>
  </p><p><span m='364290'>So X, Y and Z are interpreted as first arrivals</span>
  <span m='368010'>in three independent Poisson processes.</span> </p><p><span
  m='371040'>Now, let us take these three Poisson processes</span> <span
  m='374200'>and merge them.</span> </p><p><span m='375540'>If we merge these
  three processes, what we obtain</span> <span m='378750'>is a merged process,
  which is Poisson with parameter</span> <span m='382890'>equal to the sum of
  the rates or parameters of each one</span> <span m='387500'>of the processes,
  so it's a Poisson process</span> <span m='389820'>with parameter 3
  lambda.</span> </p><p><span m='392450'>Now, how can we interpret the random
  variable of interest,</span> <span m='397280'>the first burnout time, in terms
  of the merged process?</span> </p><p><span m='401420'>So the merged process
  has an arrival</span> <span m='404200'>whenever one of those three processes
  has an arrival.</span> </p><p><span m='407680'>The first arrival in the merged
  process</span> <span m='410570'>will happen the first time that one of these
  three processes</span> <span m='415390'>is going to have an arrival.</span>
  </p><p><span m='417570'>Therefore, we can interpret the random variable</span>
  <span m='420990'>of interest, the first burnout time,</span> <span
  m='423180'>as the first arrival time in a merged process.</span> </p><p><span
  m='426650'>But now the merged process is Poisson with parameter 3</span> <span
  m='430045'>lambda, therefore, this random variable</span> <span m='433740'>is
  going to be an exponential random variable with parameter</span> <span
  m='438100'>3 lambda.</span> </p><p><span m='439830'>And from this, we also
  obtain the expected value</span> <span m='443010'>of that random
  variable.</span> </p><p><span m='445890'>The beauty of this last approach for
  coming up with the answer</span> <span m='450270'>by reasoning in terms of
  merged Poisson processes</span> <span m='453390'>is that we didn't have to do
  any calculations at all, just</span> <span m='457540'>use the intuitive
  understanding of Poisson processes</span> <span m='460960'>and, especially,
  the interpretation</span> <span m='463010'>of an exponential random variable
  as the first arrival</span> <span m='466830'>time in a Poisson process.</span>
  </p><p><span m='470400'>Let us now try to solve a somewhat harder
  problem.</span> </p><p><span m='474190'>Let us try to calculate the expected
  time</span> <span m='476750'>until all the light bulbs burn out.</span>
  </p><p><span m='481430'>So one light bulb will burn out, then another one will
  burn out,</span> <span m='485540'>and, finally, the third one will burn
  out.</span> </p><p><span m='488110'>We want to find the expected time until
  this happens.</span> </p><p><span m='491700'>Once more, we will be thinking of
  these burnout times</span> <span m='495720'>as the first arrival times in
  Poisson processes.</span> </p><p><span m='502560'>The total time until the
  third burnout</span> <span m='505780'>can be split into different
  periods.</span> </p><p><span m='509860'>There's a time until one light bulb
  burns out.</span> </p><p><span m='513808'>And the expected value of this
  period</span> <span m='517058'>here is going to be 1 over 3 lambda.</span>
  </p><p><span m='523049'>What happens at this time?</span> </p><p><span
  m='525540'>The second light bulb has burned out, so we can forget about
  it,</span> <span m='530300'>take it out of the picture.</span> </p><p><span
  m='532960'>We have two lightbulbs.</span> </p><p><span m='535830'>Let us look
  at the time it will take</span> <span m='538390'>until one of these two light
  bulbs burns out.</span> </p><p><span m='542610'>So we're interested in this
  period of time.</span> </p><p><span m='547110'>Now, the Poisson process starts
  fresh at this time.</span> </p><p><span m='551370'>After this time, whatever
  happens</span> <span m='553940'>is just an ordinary Poisson process</span>
  <span m='556640'>as if it were starting at this time.</span> </p><p><span
  m='559350'>So this is going to be an exponential random variable</span> <span
  m='563630'>starting from this time.</span> </p><p><span m='564930'>And this is
  going to be another exponential random variable.</span> </p><p><span
  m='568680'>So the time until the next light bulb burns out in this case</span>
  <span m='572670'>is going to be the minimum of two</span> <span
  m='574410'>exponential random variables.</span> </p><p><span m='576370'>We can
  think again about merging these two Poisson</span> <span m='579300'>processes
  to obtain a Poisson process with total rate 2</span> <span m='582475'>lambda,
  and the time until one of these two turns out</span> <span m='586450'>is going
  to be the first arrival time in that merged process.</span> </p><p><span
  m='590670'>And so the expected time until the first arrival</span> <span
  m='594775'>of the merged process is going to be 1 over 2 lambda.</span>
  </p><p><span m='599730'>And finally, once this burnout has happened,</span>
  <span m='603540'>we can forget about this light bulb.</span> </p><p><span
  m='606160'>We're left just with one light bulb, and starting from here,</span>
  <span m='610200'>we wait until that light bulb burns out.</span> </p><p><span
  m='613130'>Once more, because of the fresh start property of the
  Poisson</span> <span m='616480'>process, starting from here until it burns
  out</span> <span m='619960'>is going to be a random variable, which</span>
  <span m='622010'>is an exponential random variable.</span> </p><p><span
  m='624210'>And in this case, an exponential random variable with rate</span>
  <span m='627150'>just lambda.</span> </p><p><span m='628620'>And by adding
  these three quantities,</span> <span m='631100'>we get the expected time until
  all three have burned out.</span> </p><p><span m='638440'>This is a problem
  that would have</span> <span m='639970'>been quite hard to solve in a more
  analytical way.</span> </p><p><span m='644960'>We're dealing with a random
  variable, which is now</span> <span m='647670'>the maximum of X, Y, and Z. And
  the distribution</span> <span m='652450'>of this random variable is not so
  simple to write down.</span> </p><p><span m='656770'>So that would not be a
  very good approach</span> <span m='660130'>for going about this
  problem.</span> </p><p><span m='662430'>But we managed to find the expected
  value</span> <span m='664930'>of this random variable without having to write
  down</span> <span m='668030'>its distribution, by breaking this random
  variable</span> <span m='672020'>into a sum of three particular random
  variables, each of which</span> <span m='677650'>had a nice intuitive
  interpretation.</span> </p><p><span m='680490'>And that was the key to the
  solution of this problem.</span> </p>
uid: 47b123db8beba90ed35b3e6822207096
type: courses
layout: video
---
