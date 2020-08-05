---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: pd7dvQBqQqY
    parent_uid: 8b9eca393f3464166a14bb71ebd33381
    title: Video-YouTube-Stream
    type: Video
    uid: 07687f2a7aba343fb0b87d9ed4043de9
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/pd7dvQBqQqY/default.jpg'
    parent_uid: 8b9eca393f3464166a14bb71ebd33381
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 501f68a947cf2159e2f6bfb182cd03fa
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: pd7dvQBqQqY
    parent_uid: 8b9eca393f3464166a14bb71ebd33381
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 31ba05a25662757ad81f54ebb39a4af6
  - id: pd7dvQBqQqY.srt
    parent_uid: 8b9eca393f3464166a14bb71ebd33381
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/clt-examples/pd7dvQBqQqY.srt
    title: 3play caption file
    type: null
    uid: 9ff632ad46fcaa1e94c5a2d609b4cc6f
  - id: pd7dvQBqQqY.pdf
    parent_uid: 8b9eca393f3464166a14bb71ebd33381
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/clt-examples/pd7dvQBqQqY.pdf
    title: 3play pdf file
    type: null
    uid: 29b0cc3213917b691be0d898d547bff5
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 8b9eca393f3464166a14bb71ebd33381
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: de97ae0be79febddab6c679ec531eb34
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 8b9eca393f3464166a14bb71ebd33381
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: e661417006d1deedc25684f6f841c744
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L19-05_300k.mp4
    parent_uid: 8b9eca393f3464166a14bb71ebd33381
    title: Video-Internet Archive-MP4
    type: Video
    uid: 8d08a2b565beaa32ce75bfc1de07bd77
inline_embed_id: 37927151cltexamples30681084
order_index: 1795
parent_uid: b8cdf274e2b0f82662e4cd137e85d308
related_resources_text: ''
short_url: clt-examples
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/clt-examples
title: CLT Examples
transcript: >-
  <p><span m='1080'>We will now go through a sequence of examples that</span>
  <span m='3700'>illustrate the different types of questions that we
  usually</span> <span m='7880'>answer using a normal approximation based on
  the</span> <span m='11130'>central limit theorem.</span> </p><p><span
  m='13060'>In general, one uses these approximations to make</span> <span
  m='17000'>statements of this type.</span> </p><p><span m='19820'>That the
  probability of the sum of n, i.i.d.</span> </p><p><span m='23400'>random
  variables being less than a certain number, that</span> <span m='26900'>this
  probability is approximately equal to some</span> <span m='29370'>other
  number.</span> </p><p><span m='30630'>Notice that this statement involves
  three parameters, a,</span> <span m='34770'>b, and n, and you can imagine
  problems where you are given</span> <span m='39000'>two of these parameters,
  and you're</span> <span m='41040'>asked to find the third.</span> </p><p><span
  m='42920'>And this gives us the different variations of the</span> <span
  m='45990'>questions that we might be able to answer.</span> </p><p><span
  m='49340'>So we will go through examples of each one of these</span> <span
  m='52350'>variations.</span> </p><p><span m='55210'>Our setting will be as
  follows.</span> </p><p><span m='57890'>We have a container, and the container
  receives packages.</span> </p><p><span m='62420'>Each package has a random
  weight, which is an</span> <span m='65300'>independent random variable that's
  drawn from an</span> <span m='68050'>exponential distribution with a parameter
  1/2.</span> </p><p><span m='72590'>And we load the container with 100
  packages.</span> </p><p><span m='77289'>We would like to calculate the
  probability that the total</span> <span m='81260'>weight of the 100 packages
  exceeds 210.</span> </p><p><span m='85230'>For example, 210 might be the
  capacity of the container.</span> </p><p><span m='89680'>Since we will be
  using the central limit theorem, we will</span> <span m='93160'>have to work
  with the standardized version of Sn in</span> <span m='97900'>which we
  subtract the mean of Sn and divide by the standard</span> <span
  m='102410'>deviation of Sn.</span> </p><p><span m='104976'>And to do that, we
  will need to know the mean and the</span> <span m='108390'>standard
  deviation.</span> </p><p><span m='109910'>Now for an exponential, the mean is
  the inverse of lambda</span> <span m='113950'>and the standard deviation is
  also the inverse of lambda and</span> <span m='118660'>so we know what these
  quantities are.</span> </p><p><span m='122090'>Then, the next step is to take
  this event here and rewrite it</span> <span m='128750'>in a way that involves
  this random variable.</span> </p><p><span m='133270'>So what we would do is
  that we take the original description</span> <span m='138530'>of the event,
  subtract from both sides of this inequality</span> <span m='144590'>this
  number n times mu.</span> </p><p><span m='146640'>In this case, n is 100, mu
  is 2.</span> </p><p><span m='149600'>So we subtract 200, divide by this
  quantity, square root of</span> <span m='155079'>100 is 10 times sigma, this
  gives us 20.</span> </p><p><span m='159090'>And we do the same on the other
  side of the inequality.</span> </p><p><span m='164750'>This is just an
  equivalent representation of the original</span> <span m='168250'>event, but
  we have here is the probability that this</span> <span m='172670'>standardized
  version of Sn is larger than or equal to this</span> <span m='178660'>number,
  which is 0.5.</span> </p><p><span m='181580'>And at this point, we can use the
  central limit theorem</span> <span m='184880'>approximation to say that this
  probability is approximately</span> <span m='188320'>the same if we use a
  standard normal instead of Zn.</span> </p><p><span m='195570'>Now for a
  standard normal, we can calculate probabilities in</span> <span
  m='198900'>terms of the CDF that's given in the table.</span> </p><p><span
  m='201650'>But here, we have the probability that Z is larger</span> <span
  m='204010'>than something, not smaller than something.</span> </p><p><span
  m='207740'>The CDF gives us the probability that Z is less</span> <span
  m='210810'>than something.</span> </p><p><span m='211790'>This is easy to
  handle.</span> </p><p><span m='213160'>This probability is 1 minus the
  probability that Z is less</span> <span m='220380'>than 0.5, which is 1 minus
  the CDF of the standard normal</span> <span m='228140'>evaluated at
  0.5.</span> </p><p><span m='231430'>And at this point, we look up the normal
  table, the standard</span> <span m='236610'>normal table, and value for an
  argument of 0.5.</span> </p><p><span m='244070'>The corresponding value is
  this one, so we obtain 1 minus</span> <span m='249600'>0.6915, which evaluates
  to 0.3085.</span> </p><p><span m='257339'>And this is the answer to this
  particular problem.</span> </p><p><span m='262560'>In the next example, we ask
  a somewhat different question.</span> </p><p><span m='267280'>We fix again the
  number of packages to be 100, but we're</span> <span m='272620'>given some
  probabilistic tolerance.</span> </p><p><span m='277330'>We allow the packages,
  their total weight, to exceed the</span> <span m='282360'>capacity of the
  container.</span> </p><p><span m='284790'>But we don't want that to happen too
  often, we want to</span> <span m='287970'>have only 5% probability of
  exceeding that capacity.</span> </p><p><span m='292560'>How should we choose
  the capacity of the container if</span> <span m='295820'>we want to have this
  kind of a specification?</span> </p><p><span m='300080'>So we proceed as
  follows.</span> </p><p><span m='302220'>We want this number, 0.05, to be
  approximately equal to this</span> <span m='308040'>probability.</span>
  </p><p><span m='309250'>But now, we take this event and rewrite it in terms of
  the</span> <span m='315100'>standardized random variable.</span> </p><p><span
  m='318250'>That is, we start from both sides of the inequality and</span>
  <span m='324460'>subtract n times mu, which is 200, and then divide by
  the</span> <span m='332680'>standard deviation of Sn, which is this quantity
  and</span> <span m='337490'>which is 20, exactly as in the previous
  example.</span> </p><p><span m='345540'>And now, this random variable, Zn, is
  approximately a</span> <span m='351990'>standard normal.</span> </p><p><span
  m='353460'>So we're asking for the probability of the standard</span> <span
  m='355600'>normal is larger than or equal to something which, using the</span>
  <span m='359680'>argument as in the previous example, is 1 minus the CDF
  of</span> <span m='365230'>the standard normal, evaluated at this particular
  value.</span> </p><p><span m='372550'>Now, what this tells us is that this
  quantity here, the</span> <span m='379770'>value of the CDF, should be equal
  to 1 minus 0.05.</span> </p><p><span m='385940'>So this quantity here should
  be 0.95.</span> </p><p><span m='390940'>What does this tell us about the
  argument of the CDF?</span> </p><p><span m='394200'>We can look at the table
  and try to find</span> <span m='397050'>somewhere an entry of 0.95.</span>
  </p><p><span m='401120'>And we find it either here or there.</span>
  </p><p><span m='408159'>We could choose either one, or we might decide to
  split the</span> <span m='411940'>difference and say that we get the value of
  0.95 when the</span> <span m='418310'>argument is 1.645.</span> </p><p><span
  m='424450'>And so we conclude that in order for this to be 0.95, we</span>
  <span m='431590'>need a minus 200 divided by 20 to be equal to 1.645.</span>
  </p><p><span m='440390'>And then we solve for a and we find that a should be
  232.9.</span> </p><p><span m='448310'>And we can choose the capacity of our
  container this way.</span> </p><p><span m='453390'>Our next example is a
  little more challenging.</span> </p><p><span m='457310'>Here, we will fix a
  and b and we will ask for</span> <span m='460390'>the value of n.</span>
  </p><p><span m='462430'>Here's a type of question that has this flavor.</span>
  </p><p><span m='468310'>We are given the capacity of our container.</span>
  </p><p><span m='472120'>We want to have small probability of</span> <span
  m='474840'>exceeding that capacity.</span> </p><p><span m='477070'>How many
  packages should you try to load?</span> </p><p><span m='481880'>What is the
  value of n for which this</span> <span m='485550'>relation will be
  true?</span> </p><p><span m='488360'>So we proceed, as usual, by taking this
  event and</span> <span m='493650'>rewriting it in a way that involves the
  standardized</span> <span m='498710'>version of Sn.</span> </p><p><span
  m='501430'>So we need to subtract n times mu, which in this</span> <span
  m='505680'>problem is 2 times n.</span> </p><p><span m='507680'>We subtract it
  from both sides of the inequality.</span> </p><p><span m='510960'>And then we
  divide by the square root of n times sigma,</span> <span m='514909'>which is
  2.</span> </p><p><span m='516150'>So we divide both sides of the inequality by
  this number.</span> </p><p><span m='521929'>Once more, this event here is
  identical to the original</span> <span m='525970'>event, but now it is
  expressed in terms of the standardized</span> <span m='530970'>version of
  Sn.</span> </p><p><span m='532620'>This is a random variable that's
  approximately a</span> <span m='535300'>standard normal, so once more, we're
  talking about the</span> <span m='539010'>probability that the standard normal
  exceeds a certain</span> <span m='542070'>value, and by the central limit
  theorem, this is</span> <span m='545420'>approximately equal to 1 minus the
  standard normal CDF,</span> <span m='551000'>evaluated at this particular
  value here.</span> </p><p><span m='557010'>Now we want this quantity to be
  approximately equal to</span> <span m='561870'>0.05, which, once more, means
  that this quantity should be</span> <span m='568770'>0.95 and arguing as
  before that we try to find 0.95 in</span> <span m='577310'>the standard normal
  table.</span> </p><p><span m='579320'>And this tells us that the argument of
  the normal CDF</span> <span m='583850'>should be equal to 1.645.</span>
  </p><p><span m='596050'>Here, we get an equation for n.</span> </p><p><span
  m='598620'>Unfortunately, it is a quadratic equation.</span> </p><p><span
  m='601190'>However, we can solve it.</span> </p><p><span m='603410'>And after
  you solve it, numerically or using the</span> <span m='607240'>formula for the
  solution of quadratic equations, you find</span> <span m='611360'>the value of
  n that's somewhere between 89 and 90.</span> </p><p><span m='617220'>Now, n is
  an integer, so you could choose either 89 or 90.</span> </p><p><span
  m='623420'>If you want to be conservative, then you would</span> <span
  m='626960'>set n to the smaller value of the two and set n to be 89.</span>
  </p><p><span m='635930'>Our last example is going to be a little
  different.</span> </p><p><span m='640920'>Here's what happens.</span>
  </p><p><span m='643240'>We start loading the container, and the
  container</span> <span m='646050'>has a capacity of 210.</span> </p><p><span
  m='648780'>Once we load the package and we see that the weight has</span>
  <span m='652110'>exceeded 210, we stop.</span> </p><p><span m='655630'>Let N
  be the number of packages that have been</span> <span m='658900'>loaded, and
  this number is random.</span> </p><p><span m='661990'>If you're unlucky and
  you happen to get lots of heavy</span> <span m='665220'>packages, then you
  will stop earlier.</span> </p><p><span m='668980'>We would like to calculate,
  approximately, the probability</span> <span m='672560'>that the number of
  packages that have been loaded is</span> <span m='675760'>larger than
  100.</span> </p><p><span m='678630'>Now, this problem feels a little
  different.</span> </p><p><span m='682440'>The reason is that N is not the sum
  of independent random</span> <span m='687590'>variables and so we do not have
  a version of the central</span> <span m='691390'>limit theorem that we could
  apply to N. What can we do?</span> </p><p><span m='697110'>Well, we try to
  take this event and express it in terms</span> <span m='701860'>of the
  Xi's.</span> </p><p><span m='703720'>And here's how we go about it.</span>
  </p><p><span m='705820'>What does it mean that we loaded more than 100
  packages?</span> </p><p><span m='710200'>This means that at the time we were
  loading the 100th</span> <span m='713860'>package, we didn't stop.</span>
  </p><p><span m='716740'>And this means that at that time, after we loaded
  the</span> <span m='722000'>100th package, the weight had not exceeded
  210.</span> </p><p><span m='727800'>So the event that we're dealing with here
  is the same</span> <span m='731420'>as the event that the first 100 packages
  have a total</span> <span m='738070'>weight which is less than or equal to
  210.</span> </p><p><span m='745350'>But now we're back into a problem
  that</span> <span m='747675'>we know how to solve.</span> </p><p><span
  m='749350'>And the way to solve it is to take this random variable,</span>
  <span m='753270'>standardize it--</span> <span m='754850'>this actually is
  essentially the same calculation as in our</span> <span m='758780'>very first
  example--</span> <span m='760720'>and we will get the standard normal CDF
  evaluated at 210</span> <span m='766450'>minus the mean of this random
  variable, which is 200,</span> <span m='771120'>divided by the standard
  deviation of this random</span> <span m='773610'>variable, which is 20.</span>
  </p><p><span m='775920'>So we're looking at phi of 0.5, which we look up at
  the</span> <span m='784400'>standard normal table, and has a value of
  0.6915.</span> </p><p><span m='794900'>So this was our last example, and these
  four examples that</span> <span m='799480'>we worked through cover pretty much
  all of the types of</span> <span m='804330'>problems that you might
  encounter.</span> </p><p><span m='807410'>Of course, sometimes it might not be
  entirely obvious what</span> <span m='811110'>kind of problem you are dealing
  with.</span> </p><p><span m='813370'>You may have to do some translation from
  a problem</span> <span m='816310'>statement to bring it in the form that we
  dealt with at</span> <span m='820100'>this point.</span> </p><p><span
  m='821080'>But once you bring it into a form where you can get close</span>
  <span m='826120'>to applying the central limit theorem, then the steps
  are</span> <span m='829480'>pretty much routine, as long as you carry them out
  in a</span> <span m='833340'>systematic and organized manner.</span>
  </p><p></p>
uid: 8b9eca393f3464166a14bb71ebd33381
type: course
layout: video
---
