---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: 46Ym07yKf4A
    parent_uid: 5aa563820bc21b034be0cb4c3f371190
    title: Video-YouTube-Stream
    type: Video
    uid: 89157afb747a2fa44e89a28452e8f626
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/46Ym07yKf4A/default.jpg'
    parent_uid: 5aa563820bc21b034be0cb4c3f371190
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 3f4ac6e47f4e8c80fdcb7d0b0a1d5f1a
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: 46Ym07yKf4A
    parent_uid: 5aa563820bc21b034be0cb4c3f371190
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: ca4f1c0032f23bd2ecdbf201a0d8f964
  - id: 46Ym07yKf4A.srt
    parent_uid: 5aa563820bc21b034be0cb4c3f371190
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/inferring-the-unknown-bias-of-a-coin-and-the-beta-distribution/46Ym07yKf4A.srt
    title: 3play caption file
    type: null
    uid: a9769627c153a3910b1187f7996efff9
  - id: 46Ym07yKf4A.pdf
    parent_uid: 5aa563820bc21b034be0cb4c3f371190
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/inferring-the-unknown-bias-of-a-coin-and-the-beta-distribution/46Ym07yKf4A.pdf
    title: 3play pdf file
    type: null
    uid: 1e6450fb351633bb7666be3e5b99a75e
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 5aa563820bc21b034be0cb4c3f371190
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: d5455005b72570d55a8c5e2a887b021a
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 5aa563820bc21b034be0cb4c3f371190
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 1bfc9eedb53a13cc83c82a64baa4003e
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L14-08_300k.mp4
    parent_uid: 5aa563820bc21b034be0cb4c3f371190
    title: Video-Internet Archive-MP4
    type: Video
    uid: 8a0e6399b2f371352be67816b0f3059d
inline_embed_id: 40784946inferringtheunknownbiasofacoinandthebetadistribution65652929
order_index: 1399
parent_uid: b8cdf274e2b0f82662e4cd137e85d308
related_resources_text: ''
short_url: inferring-the-unknown-bias-of-a-coin-and-the-beta-distribution
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/inferring-the-unknown-bias-of-a-coin-and-the-beta-distribution
title: Inferring the Unknown Bias of a Coin and the Beta Distribution
transcript: >-
  <p><span m='500'>We will now go through an example that</span> <span
  m='2650'>involves a continuous unknown parameter,</span> <span m='5820'>the
  unknown bias of a coin and discrete observations,</span> <span
  m='9830'>namely, the number of heads that are</span> <span m='12100'>observed
  in a sequence of coin flips.</span> </p><p><span m='14360'>This is an example
  that we will start in some detail now,</span> <span m='17880'>and we will also
  revisit later on.</span> </p><p><span m='20630'>And in the process, we will
  also have the opportunity</span> <span m='23620'>to introduce a new class of
  probability distributions.</span> </p><p><span m='27770'>This example is an
  extension of an example</span> <span m='30860'>that we have already seen, when
  we first</span> <span m='33320'>introduced the relevant version of the Bayes
  rule.</span> </p><p><span m='36970'>We have a coin.</span> </p><p><span
  m='38800'>It has a certain bias between 0 and 1, but the bias is
  unknown.</span> </p><p><span m='44110'>And consistent with the Bayesian
  philosophy,</span> <span m='47190'>we treat this unknown bias as a random
  variable,</span> <span m='50470'>and we assign a prior probability
  distribution to it.</span> </p><p><span m='54240'>We flip this coin n times
  independently,</span> <span m='57130'>where n is some positive integer,</span>
  <span m='59360'>and we record the number of heads that are obtained.</span>
  </p><p><span m='62440'>On the basis of the value of this random
  variable,</span> <span m='65030'>we would like to make inferences about
  Theta.</span> </p><p><span m='68740'>Now to make some more concrete
  progress,</span> <span m='71510'>let us make a specific assumption.</span>
  </p><p><span m='73280'>Let us assume that the prior on Theta</span> <span
  m='76820'>is uniform on the unit interval, in some sense reflecting</span>
  <span m='80840'>complete ignorance about the true value of Theta.</span>
  </p><p><span m='85260'>We observe the value of this random variable, some
  little k,</span> <span m='90789'>we fix that value, and we're interested in
  the functional</span> <span m='94400'>dependence on theta of this particular
  quantity,</span> <span m='98490'>when k is given to us.</span> </p><p><span
  m='101140'>How do we do this?</span> </p><p><span m='102650'>We use the
  appropriate form of the Bayes rule, which</span> <span m='106610'>in this
  setting is as follows.</span> </p><p><span m='109740'>it is the usual form,
  but we have</span> <span m='114289'>f's indicating densities whenever
  we're</span> <span m='117620'>talking about the distribution of Theta,</span>
  <span m='119509'>because Theta is continuous.</span> </p><p><span
  m='121440'>And whenever we talk about the distribution of K, which</span>
  <span m='124760'>is discrete, we use the symbol p,</span> <span
  m='127020'>because we're dealing with probability mass functions.</span>
  </p><p><span m='130600'>As always, the denominator term is such</span> <span
  m='134770'>that the integral of the whole expression over theta</span> <span
  m='139490'>is equal to 1.</span> </p><p><span m='140670'>This is the necessary
  normalization property,</span> <span m='143329'>and because of this, this
  denominator term</span> <span m='146180'>has to be equal to the integral of
  the numerator</span> <span m='149650'>over all theta, which is what we have
  here.</span> </p><p><span m='153250'>So now let us move, and let us apply this
  formula.</span> </p><p><span m='156990'>We first have the prior, which is
  equal to 1.</span> </p><p><span m='161320'>Then we have the probability that K
  is equal to little k.</span> </p><p><span m='165530'>This is the probability
  of obtaining exactly k heads,</span> <span m='169030'>if I tell you the bias
  or the coin.</span> </p><p><span m='171740'>But if I tell you the bias of the
  coin,</span> <span m='173860'>we're dealing with the usual model of
  independent coin</span> <span m='177410'>flips, and the probability of k
  heads</span> <span m='180270'>is given by the binomial probabilities,
  which</span> <span m='184610'>takes this form.</span> </p><p><span
  m='188900'>And finally, we have the denominator term,</span> <span
  m='194520'>which we do not need to evaluate at this point.</span> </p><p><span
  m='198260'>Now, I said earlier that we're interested in the dependence</span>
  <span m='201760'>on theta, which comes through these terms.</span>
  </p><p><span m='206250'>On the other hand, the remaining terms</span> <span
  m='209550'>do not involve any thetas, and so they</span> <span m='214090'>can
  be lumped together in just a constant.</span> </p><p><span m='218420'>And so
  we can write the answer that we</span> <span m='221140'>have found in this
  more suggestive form.</span> </p><p><span m='224980'>We have some normalizing
  constant,</span> <span m='227160'>and here we keep separately the dependence
  on theta.</span> </p><p><span m='230670'>Of course, this answer that we
  derived</span> <span m='232960'>is valid for little theta belonging to the
  unit interval.</span> </p><p><span m='237570'>Outside the unit interval,
  either the prior density</span> <span m='241660'>or the posterior density of
  Theta would be equal to 0.</span> </p><p><span m='247370'>This particular form
  of the posterior distribution</span> <span m='252130'>for Theta is a certain
  type of density,</span> <span m='255500'>and it shows up in various
  contexts.</span> </p><p><span m='258110'>And for this reason, it has a
  name.</span> </p><p><span m='260890'>It is called a Beta distribution with
  certain parameters,</span> <span m='265320'>and the parameters reflect the
  exponents</span> <span m='268040'>that we have up here in the two
  terms.</span> </p><p><span m='272390'>Note that these parameters are the
  exponents augmented by 1.</span> </p><p><span m='276150'>This is for
  historical reasons that do not concern us here.</span> </p><p><span
  m='279730'>It is just a convention.</span> </p><p><span m='281720'>The
  important thing is to be able to recognize what it takes</span> <span
  m='285840'>for a distribution to be a Beta distribution.</span> </p><p><span
  m='288760'>That this that the dependence on theta is of the form theta</span>
  <span m='292790'>to some power times 1 minus theta to some other power.</span>
  </p><p><span m='297100'>Any distribution of this form is called a Beta
  distribution.</span> </p><p><span m='301060'>So now, let's continue this
  example</span> <span m='303020'>by considering a different prior.</span>
  </p><p><span m='305270'>Suppose that the prior is itself a Beta
  distribution</span> <span m='310530'>of this form where alpha and beta
  are</span> <span m='313610'>some non-negative numbers.</span> </p><p><span
  m='317130'>What is the posterior in this case?</span> </p><p><span
  m='320250'>We just go through the same calculation as before,</span> <span
  m='323160'>but instead of using one in the place of the prior,</span> <span
  m='327150'>we now use the prior that's given to us.</span> </p><p><span
  m='335950'>The probability of k heads in the n tosses,</span> <span
  m='339909'>when we know the bias, is exactly as before.</span> </p><p><span
  m='343350'>It is given by the binomial probabilities.</span> </p><p><span
  m='347840'>And finally, we need to divide by the denominator term,
  which</span> <span m='353540'>is the normalizing constant.</span> </p><p><span
  m='356480'>What do we observe here?</span> </p><p><span m='358670'>The
  dependence on theta comes through these terms.</span> </p><p><span
  m='363750'>The remaining terms do not involve theta,</span> <span
  m='367610'>and they can all be absorbed in a constant.</span> </p><p><span
  m='371710'>Let's call that constant d, and collect the remaining terms.</span>
  </p><p><span m='376430'>We have theta to the power of alpha plus k,</span>
  <span m='382260'>and then, 1 minus theta to the power of beta plus n minus
  k.</span> </p><p><span m='393530'>And once more, this is the form of the
  posterior</span> <span m='396900'>for thetas belonging to this range.</span>
  </p><p><span m='400170'>The posterior is 0 outside this range.</span>
  </p><p><span m='403680'>So what do we see?</span> </p><p><span m='405180'>We
  started with a prior that came</span> <span m='407390'>from the Beta family of
  this form,</span> <span m='409920'>and we came up with a posterior that is
  still</span> <span m='414830'>a function of theta of this form,</span> <span
  m='417490'>but with different values of the parameters alpha and beta.</span>
  </p><p><span m='421550'>Namely, alpha gets replaced by alpha plus k,</span>
  <span m='423970'>beta gets replaced by beta plus n minus k.</span>
  </p><p><span m='428080'>So we see that if we start with a prior</span> <span
  m='430340'>from the family of Beta distributions,</span> <span m='432890'>the
  posterior will also be in that same family.</span> </p><p><span
  m='437720'>This is a beautiful property of Beta distributions</span> <span
  m='441120'>that can be exploited in various ways.</span> </p><p><span
  m='444410'>One of which is that it actually allows</span> <span m='446890'>for
  recursive ways of updating the posterior of Theta</span> <span m='451170'>as
  we get more and more observations.</span> </p>
uid: 5aa563820bc21b034be0cb4c3f371190
type: course
layout: video
---
