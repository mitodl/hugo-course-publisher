---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: _l9y2Kv8VHw
    parent_uid: 6f24211d1d5f92604cbd09b527ceeb04
    title: Video-YouTube-Stream
    type: Video
    uid: af7812379e379a3320540648cf15267f
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/_l9y2Kv8VHw/default.jpg'
    parent_uid: 6f24211d1d5f92604cbd09b527ceeb04
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 1044059d9718dada79b1fa8f58473b92
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: _l9y2Kv8VHw
    parent_uid: 6f24211d1d5f92604cbd09b527ceeb04
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: af54df6fd496683ac83cc2b425de2331
  - id: l9y2Kv8VHw.srt
    parent_uid: 6f24211d1d5f92604cbd09b527ceeb04
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/convergence-in-probability-examples/l9y2Kv8VHw.srt
    title: 3play caption file
    type: null
    uid: bbf2e54c6868bfe9f36e4ecca9a45121
  - id: l9y2Kv8VHw.pdf
    parent_uid: 6f24211d1d5f92604cbd09b527ceeb04
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/convergence-in-probability-examples/l9y2Kv8VHw.pdf
    title: 3play pdf file
    type: null
    uid: c02b521bd40ccd2c09550ce3a9883824
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 6f24211d1d5f92604cbd09b527ceeb04
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: d9050b189748b2aa54083bb2bc0c60a7
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 6f24211d1d5f92604cbd09b527ceeb04
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: acabfd5bd6964a5f321d127dcaf4a076
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L18-07_300k.mp4
    parent_uid: 6f24211d1d5f92604cbd09b527ceeb04
    title: Video-Internet Archive-MP4
    type: Video
    uid: f0574e1e636daffe066d1bea080db043
inline_embed_id: 3308654convergenceinprobabilityexamples6719109
order_index: 1705
parent_uid: b8cdf274e2b0f82662e4cd137e85d308
related_resources_text: ''
short_url: convergence-in-probability-examples
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/convergence-in-probability-examples
title: Convergence in Probability Examples
transcript: >-
  <p><span m='810'>We will now go through two examples of convergence in</span>
  <span m='3520'>probability.</span> </p><p><span m='4590'>Our first example is
  quite trivial.</span> </p><p><span m='7370'>We're dealing with a sequence of
  random variables Yn that</span> <span m='11090'>are discrete.</span>
  </p><p><span m='12220'>Most of the probability is concentrated at 0.</span>
  </p><p><span m='15680'>But there is also a small probability of a large
  value.</span> </p><p><span m='19690'>Because the bulk of the probability mass
  is</span> <span m='22040'>concentrated at 0, it is a good guess that this
  sequence</span> <span m='25540'>converges to 0.</span> </p><p><span
  m='27070'>Do we have, indeed, convergence in</span> <span
  m='29380'>probability to 0?</span> </p><p><span m='30760'>We need to check the
  definition.</span> </p><p><span m='32710'>So we fix some epsilon, which is a
  positive number.</span> </p><p><span m='36930'>And we look at the probability
  of the event that our random</span> <span m='40550'>variable is epsilon or
  more away than what we think is the</span> <span m='46360'>limit of that
  sequence.</span> </p><p><span m='48460'>We look at that probability.</span>
  </p><p><span m='50370'>And in this example, it is equal to 1 over n, which
  goes</span> <span m='54590'>to 0 as n goes to infinity.</span> </p><p><span
  m='57820'>And this verifies that, indeed, in this example, Yn</span> <span
  m='61990'>converges to 0, as n goes to infinity in probability.</span>
  </p><p><span m='70330'>Now, we make the following observation.</span>
  </p><p><span m='72900'>If we are to calculate the expected value of this
  random</span> <span m='76220'>variable, what we get is the following.</span>
  </p><p><span m='79390'>We get a value of 0 with this probability, no
  contribution</span> <span m='83060'>to the expectation.</span> </p><p><span
  m='84280'>But we also get a value of n squared with</span> <span
  m='87970'>probability 1 over n.</span> </p><p><span m='90490'>And so the
  expected value is equal to n, which, actually,</span> <span m='94630'>goes to
  infinity, as n goes to infinity.</span> </p><p><span m='98440'>So we have a
  situation where the sequence of the random</span> <span m='103120'>variables
  converges to 0.</span> </p><p><span m='105220'>But the expectation does not
  converge to 0.</span> </p><p><span m='108090'>In fact, it goes to
  infinity.</span> </p><p><span m='110120'>And this example serves to make the
  point that</span> <span m='112920'>convergence in probability does not imply
  convergence of</span> <span m='116509'>expectations.</span> </p><p><span
  m='117890'>The reason is that convergence in probability has to do with</span>
  <span m='121940'>the bulk of the distribution.</span> </p><p><span
  m='124360'>It only cares that the tail of the distribution has small</span>
  <span m='128259'>probability.</span> </p><p><span m='129340'>On the other
  hand, the expectation is highly</span> <span m='131980'>sensitive to the tail
  of the distribution.</span> </p><p><span m='135410'>It might be that the tail
  only has a small probability.</span> </p><p><span m='139150'>But if that
  probability is assigned to a very large</span> <span m='141900'>value, then
  the expectation will be strongly affected and</span> <span m='146140'>can be
  quite different from the limit</span> <span m='149020'>of the random
  variable.</span> </p><p><span m='152270'>Our second example is going to be
  less trivial and more</span> <span m='155570'>interesting.</span> </p><p><span
  m='156860'>Consider random variables that are independent and</span> <span
  m='160290'>identically distributed and whose common distribution is</span>
  <span m='164050'>uniform on the unit interval, so that the</span> <span
  m='167350'>PDF takes this form.</span> </p><p><span m='170160'>Are these
  random variables convergent to something?</span> </p><p><span m='175150'>The
  answer is no.</span> </p><p><span m='176480'>And the reason is that as i
  increases, the distribution</span> <span m='180980'>does not change.</span>
  </p><p><span m='182020'>And it does not to get concentrated</span> <span
  m='184380'>around a certain number.</span> </p><p><span m='186010'>The
  distribution remains spread out over the entire</span> <span m='189130'>unit
  interval.</span> </p><p><span m='190960'>But let us look now at some related
  random variables.</span> </p><p><span m='194330'>Let us define Yn to be the
  minimum of the first n of the</span> <span m='199940'>X's that we get.</span>
  </p><p><span m='201530'>So if n is equal to 4, and we obtain these four
  values, Yn</span> <span m='205540'>would be equal to this value.</span>
  </p><p><span m='208100'>Notice that if we draw more values, then the new
  values</span> <span m='213560'>might be above the minimum, in which case the
  minimum does</span> <span m='216810'>not change.</span> </p><p><span
  m='217890'>But we might also get a value that's below the minimum, in</span>
  <span m='221610'>which case the minimum moves down.</span> </p><p><span
  m='224100'>The only thing that can happen is that the minimum goes
  down.</span> </p><p><span m='228400'>It cannot go up.</span> </p><p><span
  m='229960'>And this gives us this inequality.</span> </p><p><span
  m='232680'>So the random variables Yn tends to go down.</span> </p><p><span
  m='236420'>How far down?</span> </p><p><span m='238720'>If n is very large, we
  expect that we will obtain some X's</span> <span m='243640'>whose value
  happens to be very close to 0, which means that</span> <span m='247570'>Yn
  will go down to values that are very close to 0.</span> </p><p><span
  m='252580'>And this leads us to conjecture that, perhaps, Yn</span> <span
  m='256010'>does converge to 0.</span> </p><p><span m='258390'>This is always
  the first step when dealing with convergence</span> <span m='261209'>in
  probability.</span> </p><p><span m='262029'>The first step is to make an
  educated guess about what the</span> <span m='265940'>limit might be.</span>
  </p><p><span m='267580'>And then we want to verify that this is, indeed,
  the</span> <span m='270610'>correct limit.</span> </p><p><span m='272150'>To
  verify that, what we do is we fix some positive epsilon.</span> </p><p><span
  m='277380'>And we look for the probability that the distance</span> <span
  m='281640'>of the random variable Yn from the conjectured limit has a</span>
  <span m='286090'>magnitude that's larger than or equal to epsilon.</span>
  </p><p><span m='289610'>And what we need to show is that this quantity
  converges</span> <span m='292630'>to 0 as n goes to infinity, no matter what
  epsilon is.</span> </p><p><span m='298320'>Now, because Yn is a non-negative
  random variable,</span> <span m='301940'>this is the same as the probability
  that Yn is larger</span> <span m='305270'>than or equal to epsilon.</span>
  </p><p><span m='307330'>Now, let us distinguish between two cases.</span>
  </p><p><span m='310210'>If epsilon is bigger than 1, we're asking for
  the</span> <span m='313870'>probability that Yn is larger than or equal to a
  certain</span> <span m='318190'>number epsilon that's out there.</span>
  </p><p><span m='320460'>But this probability is 0.</span> </p><p><span
  m='322610'>There's no way that the minimum of these uniforms will</span> <span
  m='325690'>take a value that's larger than some epsilon that's</span> <span
  m='329000'>larger than 1.</span> </p><p><span m='330660'>So in that case, this
  quantity is equal to zero.</span> </p><p><span m='334150'>And we are
  done.</span> </p><p><span m='335380'>But we need to check that this quantity
  becomes small no</span> <span m='338530'>matter what epsilon is.</span>
  </p><p><span m='340290'>So now, let us consider taking a small epsilon that is
  some</span> <span m='344360'>number that's less than or equal to 1.</span>
  </p><p><span m='347260'>For that case, let us continue with the
  calculation.</span> </p><p><span m='351180'>The minimum is going to be at
  least epsilon, if, and only</span> <span m='356300'>if, all of the random
  variables</span> <span m='359490'>are at least epsilon.</span> </p><p><span
  m='364210'>So this is an equivalent way of writing this particular</span>
  <span m='367950'>event here.</span> </p><p><span m='369300'>Now, because of
  independence, this is the product of the</span> <span m='372470'>probabilities
  that each one of the random variables is larger</span> <span m='377080'>than
  or equal to epsilon.</span> </p><p><span m='380370'>The probability that X1 is
  larger than or equal to</span> <span m='383470'>epsilon can be found as
  follows.</span> </p><p><span m='386150'>If we have here epsilon, the
  probability of being larger</span> <span m='389420'>than or equal to epsilon
  is the probability</span> <span m='391540'>of this event here.</span>
  </p><p><span m='392990'>So it's the area of this rectangle.</span>
  </p><p><span m='395020'>The base of that rectangle is 1 minus epsilon.</span>
  </p><p><span m='398060'>And so we obtain 1 minus epsilon for this first
  term.</span> </p><p><span m='402409'>But because the Xi's are identically
  distributed, all</span> <span m='405180'>the other terms that we multiply are
  also the same.</span> </p><p><span m='408280'>And so the answer is this
  expression here.</span> </p><p><span m='412940'>Now, epsilon is a positive
  number.</span> </p><p><span m='415890'>So 1 minus epsilon is strictly less
  than 1.</span> </p><p><span m='418920'>And when we take higher powers of a
  number that's less than</span> <span m='423010'>1, we obtain something that
  converges to 0</span> <span m='427500'>as n goes to infinity.</span>
  </p><p><span m='429030'>And that's what we needed to verify.</span>
  </p><p><span m='431690'>Since this is the case for any epsilon, we conclude
  that the</span> <span m='436090'>random variables Yn converge to zero in the
  sense that we</span> <span m='442370'>have defined, in probability.</span>
  </p><p><span m='447270'>Generalizing from this example, when we want to
  show</span> <span m='451170'>convergence in probability, the first step is to
  make a</span> <span m='454850'>guess as to what is the value that the</span>
  <span m='458540'>sequence converges to.</span> </p><p><span m='460530'>In this
  example, that value was equal to 0.</span> </p><p><span m='464260'>Once we
  have made that conjecture, then we write down</span> <span m='468240'>an
  expression for the probability of being epsilon</span> <span m='471540'>away
  from the conjectured limit.</span> </p><p><span m='474690'>And then we
  calculate that probability either exactly, as</span> <span m='478280'>in this
  example.</span> </p><p><span m='479475'>Or we try to bound it somehow and
  still show</span> <span m='482500'>that it goes to 0.</span> </p><p></p>
uid: 6f24211d1d5f92604cbd09b527ceeb04
type: course
layout: video
---
