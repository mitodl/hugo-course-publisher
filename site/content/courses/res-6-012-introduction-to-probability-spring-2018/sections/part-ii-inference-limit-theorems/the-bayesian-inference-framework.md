---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: 0w_4QcvBYII
    parent_uid: 443d99627a69d164c46a6484d23258ce
    title: Video-YouTube-Stream
    type: Video
    uid: d1066acceb8edbc65d814f1496a1e92d
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/0w_4QcvBYII/default.jpg'
    parent_uid: 443d99627a69d164c46a6484d23258ce
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: a8db0ea621afd772855da1f22b519a18
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: 0w_4QcvBYII
    parent_uid: 443d99627a69d164c46a6484d23258ce
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 7373b03538bf8a406e1a4e1c73165c2a
  - id: 0w_4QcvBYII.srt
    parent_uid: 443d99627a69d164c46a6484d23258ce
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/the-bayesian-inference-framework/0w_4QcvBYII.srt
    title: 3play caption file
    type: null
    uid: f40f8429e619d0cb63908772cc428feb
  - id: 0w_4QcvBYII.pdf
    parent_uid: 443d99627a69d164c46a6484d23258ce
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/the-bayesian-inference-framework/0w_4QcvBYII.pdf
    title: 3play pdf file
    type: null
    uid: d81437e65fc3161d51d8d96e7e84bd30
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 443d99627a69d164c46a6484d23258ce
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 6c64b5d534dd4e7df8c28031b573321b
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 443d99627a69d164c46a6484d23258ce
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: a2fe63ba12e1b9d3e32611fda2bd460d
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L14-04_300k.mp4
    parent_uid: 443d99627a69d164c46a6484d23258ce
    title: Video-Internet Archive-MP4
    type: Video
    uid: 8ad6c81ebc390e79289c067327c56162
inline_embed_id: 25264805thebayesianinferenceframework53441312
order_index: 1363
parent_uid: b8cdf274e2b0f82662e4cd137e85d308
related_resources_text: ''
short_url: the-bayesian-inference-framework
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/the-bayesian-inference-framework
title: The Bayesian Inference Framework
transcript: >-
  <p><span m='1240'>We can finally go ahead and introduce the basic
  elements</span> <span m='5370'>of the Bayesian inference framework.</span>
  </p><p><span m='8660'>There is an unknown quantity, which</span> <span
  m='11700'>we treat as a random variable, and this is what's special</span>
  <span m='15900'>and why we call this the Bayesian inference framework.</span>
  </p><p><span m='19780'>This is in contrast to other frameworks</span> <span
  m='22295'>in which the unknown quantity theta is just</span> <span
  m='25850'>treated as an unknown constant.</span> </p><p><span m='28110'>But
  here, we treat it as a random variable,</span> <span m='30260'>and as such, it
  has a distribution.</span> </p><p><span m='32980'>This is the prior
  distribution.</span> </p><p><span m='34660'>This is what we believe about
  Theta</span> <span m='36890'>before we obtain any data.</span> </p><p><span
  m='39590'>And then, we obtain some data, which are some observation.</span>
  </p><p><span m='44720'>That observation is a random variable,</span> <span
  m='47250'>but when the process gets realized,</span> <span m='49510'>we
  observe an actual value, numerical value,</span> <span m='53310'>of this
  random variable.</span> </p><p><span m='55000'>The observation process is
  modeled,</span> <span m='58280'>again in terms of a probabilistic
  model.</span> </p><p><span m='60710'>We specify the distribution of X,</span>
  <span m='63810'>but we actually specify the conditional distribution of
  X.</span> </p><p><span m='67510'>We say how X will behave if Theta
  happens</span> <span m='72750'>to take on a specific value.</span>
  </p><p><span m='75870'>These two pieces, the prior and the model of the
  observations,</span> <span m='80690'>are the two components of the
  model</span> <span m='82580'>that we will be working with.</span> </p><p><span
  m='85370'>Once we have obtained a specific value for the observations,</span>
  <span m='89560'>then we can use the Bayes rule to calculate</span> <span
  m='93220'>the conditional distribution of Theta,</span> <span m='97090'>either
  a conditional PMF if Theta is discrete</span> <span m='100750'>or a
  conditional PDF if Theta is continuous.</span> </p><p><span m='104970'>And
  this will be a complete solution, in some sense,</span> <span m='108310'>of
  the Bayesian inference problem.</span> </p><p><span m='111740'>There's one
  philosophical issue about this framework, which</span> <span m='115550'>is
  where does this prior distribution come from?</span> </p><p><span
  m='119870'>How do we choose it?</span> </p><p><span m='121810'>Sometimes we
  can choose it using a symmetry argument.</span> </p><p><span m='125110'>If
  there's a number of possible choices for Theta</span> <span m='128000'>and
  there's a reason to believe that they're all</span> <span m='130860'>equally
  likely, we have no reason</span> <span m='132630'>to believe that one is more
  likely than the other, then</span> <span m='135300'>the symmetry consideration
  gives us a uniform prior.</span> </p><p><span m='139800'>We definitely take
  into account any information</span> <span m='142760'>we have about the range
  of the parameter Theta,</span> <span m='146520'>so we use that range and we
  assign 0 prior probability</span> <span m='152220'>for values of Theta outside
  the range.</span> </p><p><span m='155130'>Sometimes, we have some knowledge
  about Theta</span> <span m='157720'>from previous studies of a certain
  problem, that tell us</span> <span m='162740'>a little bit about what Theta
  might be,</span> <span m='165640'>and then when we obtain new
  observations,</span> <span m='168090'>we refine those results that were
  obtained</span> <span m='171280'>from previous studies by applying the Bayes
  rule.</span> </p><p><span m='174450'>And in some cases, finally, the
  choice</span> <span m='176750'>could be arbitrary or subjective just
  reflecting our beliefs</span> <span m='181510'>about Theta, some plausible
  judgment</span> <span m='185280'>about the relative likelihoods of different
  choices of Theta.</span> </p><p><span m='190690'>Now, as we just discussed,
  the complete solution</span> <span m='194140'>or the complete answer to a
  Bayesian inference problem</span> <span m='198020'>is just the specification
  of the posterior distribution</span> <span m='201690'>of Theta given the
  particular observation that we</span> <span m='204810'>have obtained.</span>
  </p><p><span m='206430'>Pictorially, if Theta is discrete,</span> <span
  m='209000'>a complete answer might be in the form of such a diagram
  that</span> <span m='213220'>tells us that certain values of Theta</span>
  <span m='215380'>are possible with certain probabilities.</span> </p><p><span
  m='218120'>Or if Theta is continuous, a complete solution</span> <span
  m='221500'>might be in the form of a conditional PDF that again</span> <span
  m='225090'>tells us the conditional distribution of Theta.</span> </p><p><span
  m='229380'>To appreciate the idea here, consider the problem</span> <span
  m='233160'>of guessing the number of electoral votes</span> <span
  m='237360'>that a candidate gets in the presidential election.</span>
  </p><p><span m='241470'>The electoral votes are certain votes</span> <span
  m='244210'>that the candidate gets from each one</span> <span m='246190'>of
  the states in the United States.</span> </p><p><span m='249210'>And there is a
  certain number that the candidate</span> <span m='251690'>needs to get in
  order to be elected president.</span> </p><p><span m='254540'>One possible
  prediction could be a statement</span> <span m='257149'>that I predict that
  candidate A will win,</span> <span m='260670'>but actually a more complete
  presentation</span> <span m='263160'>of the results of a poll could be</span>
  <span m='265480'>a diagram of this kind, which is essentially a PMF.</span>
  </p><p><span m='270190'>Here, a particular pollster collected all the
  data</span> <span m='274270'>and gave the posterior probability
  distribution</span> <span m='278240'>for the different possible numbers of
  electoral votes.</span> </p><p><span m='283500'>And this diagram is a lot more
  informative</span> <span m='285900'>than the simple statement that we expect a
  certain candidate</span> <span m='290230'>to get more than the required
  electoral votes.</span> </p><p><span m='294409'>So what is next?</span>
  </p><p><span m='296810'>As we just discussed, the complete solution</span>
  <span m='299190'>is in terms of a posterior distribution,</span> <span
  m='301950'>but sometimes, you may want to summarize this posterior</span>
  <span m='305480'>distribution in a single number or a single estimate,</span>
  <span m='309810'>and this could be a further stage</span> <span m='311930'>of
  processing of the results.</span> </p><p><span m='314670'>So let us talk about
  this.</span> </p><p><span m='318170'>Once you have in your hands the posterior
  distribution</span> <span m='321780'>of Theta, either in a discrete or in a
  continuous setting,</span> <span m='326260'>and if you're asked to provide a
  single guess about what</span> <span m='330280'>Theta is, how might you
  proceed?</span> </p><p><span m='333430'>In the discrete case, you could argue
  as follows.</span> </p><p><span m='336480'>These values of Theta all have some
  chance of occurring.</span> </p><p><span m='340210'>This value of Theta is the
  one which is the most likely,</span> <span m='343540'>so I'm going to report
  this value</span> <span m='346420'>as my best guess of what Theta is.</span>
  </p><p><span m='349760'>And using a similar philosophy, you</span> <span
  m='351760'>could look at the continuous case</span> <span m='353690'>and find
  the value of Theta at which the PDF is largest</span> <span m='359000'>and
  report that particular value.</span> </p><p><span m='362350'>This particular
  way of estimating Theta</span> <span m='365600'>is called the maximum a
  posteriori probability rule.</span> </p><p><span m='369530'>We already have in
  our hands the specific value of X,</span> <span m='373460'>and therefore, we
  have determined</span> <span m='375130'>the conditional distribution for
  Theta.</span> </p><p><span m='377920'>What we then do is to find the value of
  theta</span> <span m='381230'>that maximizes over all possible thetas the
  conditional PMF</span> <span m='387200'>of this random variables capital
  Theta.</span> </p><p><span m='390090'>And similarly in the continuous
  case,</span> <span m='391950'>the value of theta that maximizes the
  conditional PDF</span> <span m='397380'>of the random variable Theta.</span>
  </p><p><span m='399400'>This is one way of coming up with an estimate.</span>
  </p><p><span m='402360'>One can think of other ways.</span> </p><p><span
  m='404360'>For example, I might want to report instead, the mean</span> <span
  m='409180'>of the conditional distribution, which in this diagram</span> <span
  m='411890'>might be somewhere here, and in this picture,</span> <span
  m='414920'>it might be somewhere here.</span> </p><p><span m='417380'>This way
  of estimating theta is the conditional expectation</span> <span
  m='422250'>estimator.</span> </p><p><span m='423320'>It just reports the value
  of the conditional expectation,</span> <span m='426500'>the mean of this
  conditional distribution.</span> </p><p><span m='429410'>It is called the
  least mean squares estimator,</span> <span m='433190'>because it has a certain
  useful and important property.</span> </p><p><span m='436940'>It is the
  estimator that gives you</span> <span m='439290'>the smallest mean squared
  error.</span> </p><p><span m='441710'>We will discuss this particular
  issue</span> <span m='444120'>in much more depth a little later.</span>
  </p><p><span m='447910'>Now, let me make two comments about
  terminology.</span> </p><p><span m='451610'>What we have produced here is an
  estimate.</span> </p><p><span m='455540'>I gave you the conditional PDF or
  conditional PMF,</span> <span m='459700'>and you tell me a number.</span>
  </p><p><span m='461710'>This number, the estimate, is obtained</span> <span
  m='465730'>by starting with the data, doing some processing to the
  data,</span> <span m='469960'>and eventually, coming up with a numerical
  value.</span> </p><p><span m='474880'>Now, g is the way that we process the
  data.</span> </p><p><span m='478940'>It's a certain rule.</span> </p><p><span
  m='480670'>Now, if we know the value of the data,</span> <span m='483570'>we
  know what the estimate is going to be.</span> </p><p><span m='486290'>But if I
  do not tell you the value of the data</span> <span m='489580'>and you look at
  the situation more abstractly,</span> <span m='492580'>then the only thing you
  can tell me</span> <span m='494700'>is that I will be seeing a random
  variable,</span> <span m='497900'>capital X, I will do some processing to
  it,</span> <span m='501480'>and then I will obtain a certain quantity.</span>
  </p><p><span m='505070'>Because capital X is random, the quantity that I will
  obtain</span> <span m='509370'>will also be random.</span> </p><p><span
  m='510800'>It's a random variable.</span> </p><p><span m='512679'>This random
  variable, capital Theta hat,</span> <span m='516490'>we call it an
  estimator.</span> </p><p><span m='518750'>Sometimes, we might also use the
  term estimator</span> <span m='521610'>to [refer to] the function g,
  which</span> <span m='523429'>is the way that we process the data.</span>
  </p><p><span m='526390'>In any case, it is important to keep this distinction
  in mind.</span> </p><p><span m='529810'>The estimator is the rule that we use
  to process the data,</span> <span m='534680'>and it is equivalent to a certain
  random variable.</span> </p><p><span m='538810'>An estimate is the specific
  numerical value</span> <span m='542110'>that we get when the data take a
  specific numerical value.</span> </p><p><span m='548410'>So if little x is the
  numerical value of capital X,</span> <span m='551890'>in that case, little
  theta hat is the numerical value</span> <span m='556730'>of the estimator
  capital Theta hat.</span> </p><p><span m='562010'>So at this point, we have a
  complete conceptual framework.</span> </p><p><span m='566750'>We know,
  abstractly speaking, what</span> <span m='569440'>it takes to calculate
  conditional distributions,</span> <span m='573610'>and we have two specific
  estimators at hand.</span> </p><p><span m='577520'>All that's left for us to
  do now is</span> <span m='579870'>to consider various examples in which we can
  discuss what</span> <span m='583780'>it takes to go through these various
  steps.</span> </p><p></p>
uid: 443d99627a69d164c46a6484d23258ce
type: courses
layout: video
---
