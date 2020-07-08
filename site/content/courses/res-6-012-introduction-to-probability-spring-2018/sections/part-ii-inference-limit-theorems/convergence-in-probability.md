---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: Ajar_6MAOLw
    parent_uid: 9146faf023809410af5927d1b7cfcd03
    title: Video-YouTube-Stream
    type: Video
    uid: f1d4d0534cd1c65b313ac1b3b28ae954
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/Ajar_6MAOLw/default.jpg'
    parent_uid: 9146faf023809410af5927d1b7cfcd03
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: b7b451ba783796d4ee0c8877e2638e24
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: Ajar_6MAOLw
    parent_uid: 9146faf023809410af5927d1b7cfcd03
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 989d11ab6a35b1a3ca5722adff157d29
  - id: Ajar_6MAOLw.srt
    parent_uid: 9146faf023809410af5927d1b7cfcd03
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/convergence-in-probability/Ajar_6MAOLw.srt
    title: 3play caption file
    type: null
    uid: 0ebba5d6a826b3800001061e3abb52f3
  - id: Ajar_6MAOLw.pdf
    parent_uid: 9146faf023809410af5927d1b7cfcd03
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/convergence-in-probability/Ajar_6MAOLw.pdf
    title: 3play pdf file
    type: null
    uid: 5cc6f5af94dfa6b23f007671ad78cd73
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 9146faf023809410af5927d1b7cfcd03
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 34a0583e8f923710817ed349d94bb26b
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 9146faf023809410af5927d1b7cfcd03
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 2fb904c6e5bb8b9540cff9c4756690df
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L18-06_300k.mp4
    parent_uid: 9146faf023809410af5927d1b7cfcd03
    title: Video-Internet Archive-MP4
    type: Video
    uid: 8c4e739c00ca875458546a6a1b4881cd
inline_embed_id: 15063206convergenceinprobability98254694
order_index: 1696
parent_uid: b8cdf274e2b0f82662e4cd137e85d308
related_resources_text: ''
short_url: convergence-in-probability
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/convergence-in-probability
title: Convergence in Probability
transcript: >-
  <p><span m='690'>We will now take a step towards abstraction, and</span> <span
  m='3650'>discuss the issue of</span> <span m='5300'>convergence of random
  variables.</span> </p><p><span m='7720'>Let us look at the weak law of large
  numbers.</span> </p><p><span m='10430'>It tells us that with high probability,
  the sample mean</span> <span m='14820'>falls close to the true mean as n goes
  to infinity.</span> </p><p><span m='19230'>We would like to interpret this
  statement by saying that</span> <span m='22250'>the sample mean converges to
  the true mean.</span> </p><p><span m='25190'>However, before we can make such
  a statement, we should</span> <span m='28840'>first define carefully the word
  "converges." And we need</span> <span m='34050'>a notion of convergence that
  refers to convergence of</span> <span m='37360'>random variables.</span>
  </p><p><span m='39960'>Here's a definition.</span> </p><p><span
  m='41680'>Suppose that we have a sequence of random variables</span> <span
  m='44980'>that are not necessarily independent.</span> </p><p><span
  m='47560'>We say that this sequence of random variables converges in</span>
  <span m='51870'>probability--</span> <span m='53400'>that's a particular
  notion of convergence we're defining.</span> </p><p><span m='56580'>It
  converges to a certain number if the</span> <span m='59220'>following is
  true--</span> <span m='62100'>no matter what epsilon is, as long as it is a
  positive</span> <span m='66130'>number, the probability that the random
  variable falls far</span> <span m='70440'>from this number--</span> <span
  m='71600'>that is, epsilon or further away from that number--</span> <span
  m='76100'>that probability converges to 0 as n increases.</span> </p><p><span
  m='81310'>That is, as n increases, there is higher and higher</span> <span
  m='85470'>probability that Yn will be close to this</span> <span
  m='89060'>particular number a.</span> </p><p><span m='91150'>This is the
  notion of convergence</span> <span m='92910'>that we have defined.</span>
  </p><p><span m='94350'>And notice that this notion of convergence
  corresponds</span> <span m='97229'>exactly to what is happening in the
  weak</span> <span m='99700'>law of large numbers.</span> </p><p><span
  m='101370'>And so in particular, we can describe the weak law of large</span>
  <span m='105190'>numbers as saying that Mn, the sample mean, converges to
  mu</span> <span m='111710'>as n goes to infinity, but in a particular
  sense--</span> <span m='115820'>in the sense of convergence in
  probability.</span> </p><p><span m='120370'>Let us now try to understand a
  little better what convergence</span> <span m='124030'>in probability really
  amounts to.</span> </p><p><span m='127080'>And we will do that by making a
  comparison with the ordinary</span> <span m='130690'>notion of convergence of
  real numbers.</span> </p><p><span m='133900'>When we're dealing with
  convergence of numbers, we</span> <span m='136980'>start with a sequence of
  numbers, and we are interested</span> <span m='141270'>in the statement that
  this sequence converges to a</span> <span m='144570'>certain limit.</span>
  </p><p><span m='145850'>What does that mean?</span> </p><p><span
  m='147380'>What we mean is that the elements of the sequence</span> <span
  m='152410'>eventually--</span> <span m='153579'>that is, when n is large
  enough--</span> <span m='156130'>will get and stay arbitrarily close to this
  particular</span> <span m='160230'>number a, which is the limit.</span>
  </p><p><span m='163680'>In terms of a picture, here is a, the limit.</span>
  </p><p><span m='170020'>Here is n.</span> </p><p><span m='173120'>We take a
  small band around this number a.</span> </p><p><span m='178930'>And what we
  require is that the elements of the sequence</span> <span
  m='183810'>eventually get within this band around the number a.</span>
  </p><p><span m='189790'>They might get outside the band, get inside
  again.</span> </p><p><span m='193820'>But eventually--</span> <span
  m='195250'>that is, after some time--</span> <span m='197070'>the elements of
  the sequence will only</span> <span m='199310'>stay inside this band.</span>
  </p><p><span m='201750'>Now to translate this into a more formal
  mathematical</span> <span m='204590'>statement, which is the mathematical
  definition of the</span> <span m='208350'>notion of convergence, we have the
  following--</span> <span m='211430'>if I give you some epsilon, epsilon could
  be</span> <span m='215680'>a very small number.</span> </p><p><span
  m='217860'>I form a band around a that goes from a minus epsilon to a</span>
  <span m='224230'>plus epsilon.</span> </p><p><span m='225740'>What I want is
  that there exists a certain time, n0--</span> <span m='230770'>in this
  picture, n0 would be here--</span> <span m='233900'>such that for all times
  after n0, our sequence stays within</span> <span m='242320'>epsilon from
  a.</span> </p><p><span m='243840'>That is, our sequence stays inside this
  band.</span> </p><p><span m='248080'>Now let us move to the case of random
  variables, and see what</span> <span m='252280'>convergence in probability is
  talking about.</span> </p><p><span m='256480'>Here, instead of a sequence of
  numbers, we have a sequence of</span> <span m='260480'>random
  variables.</span> </p><p><span m='262720'>And we're interested in the meaning
  of the convergence of</span> <span m='266040'>the sequence of random variables
  to</span> <span m='268280'>a particular number.</span> </p><p><span
  m='270070'>In words, what this means is that if I fix a certain</span> <span
  m='275110'>epsilon, as in this picture, then the probability that the</span>
  <span m='279730'>random variable falls outside this band converges to
  0.</span> </p><p><span m='284240'>So the picture would be as follows.</span>
  </p><p><span m='291010'>We have, again, our limit.</span> </p><p><span
  m='293640'>We fix some epsilon, which could be an</span> <span
  m='296750'>arbitrarily small number.</span> </p><p><span m='298980'>For any
  fixed choice of epsilon, we take this band,</span> <span m='303800'>and for
  any given n, we look into the probability that our</span> <span
  m='308400'>random variable falls inside that band.</span> </p><p><span
  m='311430'>So if I am to draw the distribution of our random</span> <span
  m='315570'>variable, a distribution might be something like this--</span>
  <span m='320570'>so there is a certain probability that it falls</span> <span
  m='323250'>outside this band.</span> </p><p><span m='325350'>But when n
  becomes large, this probability of falling outside</span> <span
  m='331410'>this band becomes very small.</span> </p><p><span m='335880'>So the
  probability of falling outside the band becomes tiny.</span> </p><p><span
  m='340800'>So the bulk of the distribution--</span> <span m='343300'>that is,
  most of the probability--</span> <span m='345132'>is concentrated inside this
  band.</span> </p><p><span m='348140'>And this is true, no matter how small
  epsilon is.</span> </p><p><span m='352300'>If I take a much narrower band
  around a, I still want all of</span> <span m='359430'>the probability to be
  eventually</span> <span m='361700'>concentrated inside that band.</span>
  </p><p><span m='364070'>Of course, it might take longer.</span> </p><p><span
  m='365850'>It might take a larger value of n, but I want that when n</span>
  <span m='370580'>is very large, the bulk of the distribution is, again,</span>
  <span m='375160'>concentrated inside this narrow band.</span> </p><p><span
  m='379660'>So in words, convergence in probability means that almost</span>
  <span m='384480'>all of the probability mass of the random variable Yn, when
  n</span> <span m='390590'>is large, that probability mass get concentrated
  within a</span> <span m='396020'>narrow band around the limit of the random
  variable.</span> </p><p><span m='401890'>We finally point out a few useful
  properties of</span> <span m='405090'>convergence in probability that parallel
  well-known</span> <span m='408700'>properties of convergence of
  sequences.</span> </p><p><span m='411470'>Suppose that we have a sequence of
  random variables</span> <span m='413870'>that converges in probability to a
  certain number a, and</span> <span m='417850'>another sequence that converges
  in probability to</span> <span m='420400'>some other number b.</span>
  </p><p><span m='422400'>We do not make any assumptions about
  independence.</span> </p><p><span m='425690'>We do not assume the Xn's are
  independent of each other.</span> </p><p><span m='429640'>We do not assume
  that the sequence of Xn's is</span> <span m='432710'>independent of Yn.</span>
  </p><p><span m='435640'>We then have the following properties--</span> <span
  m='439190'>if g is a continuous function, then the function of the</span>
  <span m='443260'>random variables converges to the function of the
  number.</span> </p><p><span m='446770'>So for example, the sequence of random
  variables Xn squared</span> <span m='450990'>is going to converge to a
  squared.</span> </p><p><span m='454790'>Another fact is that the sum of these
  two random variables</span> <span m='460300'>converges to the sum of their
  limits.</span> </p><p><span m='464440'>Both of these properties are analogous
  to what happens with</span> <span m='468080'>ordinary convergence of
  numbers.</span> </p><p><span m='470760'>And they tell us that, in some sense,
  convergence in</span> <span m='473400'>probability is not a very different
  notion.</span> </p><p><span m='476640'>We will not prove those properties at
  this point, but</span> <span m='480260'>they're useful to know.</span>
  </p><p><span m='481950'>However, there's an important caveat.</span>
  </p><p><span m='485100'>Xn might converge to a certain number in
  probability.</span> </p><p><span m='489590'>However, the expected value of Xn
  does not necessarily</span> <span m='494350'>converge to that same
  limit.</span> </p><p><span m='496630'>So convergence of random variables does
  not imply</span> <span m='499370'>convergence of expectations.</span>
  </p><p><span m='501370'>And we will be seeing an example where this
  convergence</span> <span m='505310'>does not take place.</span> </p><p></p>
uid: 9146faf023809410af5927d1b7cfcd03
type: courses
layout: video
---
