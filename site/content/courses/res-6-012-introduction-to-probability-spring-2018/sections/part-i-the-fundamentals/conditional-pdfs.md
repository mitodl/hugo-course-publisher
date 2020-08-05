---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: Kj6iEzXsFkI
    parent_uid: 690b7de84538a157b02c5a57d491daa6
    title: Video-YouTube-Stream
    type: Video
    uid: b57c0b805b6479bf1c901f75bfe17664
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/Kj6iEzXsFkI/default.jpg'
    parent_uid: 690b7de84538a157b02c5a57d491daa6
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 0a1456b7ac110e144c8274a9a2b83ac2
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: Kj6iEzXsFkI
    parent_uid: 690b7de84538a157b02c5a57d491daa6
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: cb2346543f82345267095c6b07ed63ce
  - id: Kj6iEzXsFkI.srt
    parent_uid: 690b7de84538a157b02c5a57d491daa6
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/conditional-pdfs/Kj6iEzXsFkI.srt
    title: 3play caption file
    type: null
    uid: 886c29a34d41292d06b7e81e2f09a529
  - id: Kj6iEzXsFkI.pdf
    parent_uid: 690b7de84538a157b02c5a57d491daa6
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/conditional-pdfs/Kj6iEzXsFkI.pdf
    title: 3play pdf file
    type: null
    uid: ec94fc1cae8752a70198baf58cd6a1c5
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 690b7de84538a157b02c5a57d491daa6
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: b3202005a626ef30be9cb4bea2f597b9
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 690b7de84538a157b02c5a57d491daa6
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: dd33adacbad63b644bd49008386ebedf
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L10-02_300k.mp4
    parent_uid: 690b7de84538a157b02c5a57d491daa6
    title: Video-Internet Archive-MP4
    type: Video
    uid: c429efda8151238417157d0785783a31
inline_embed_id: 44080265conditionalpdfs53620119
order_index: 924
parent_uid: 9ca6b310dc93095c9ac0f0e5f95e6930
related_resources_text: ''
short_url: conditional-pdfs
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/conditional-pdfs
title: Conditional PDFs
transcript: >-
  <p><span m='1260'>By now, we have introduced all sorts of PMFs for</span>
  <span m='5320'>the discrete case.</span> </p><p><span m='6710'>The joint PMF,
  the conditional PMF--</span> <span m='9990'>given an event--</span> <span
  m='11670'>and the conditional PMF of one random variable given another.</span>
  </p><p><span m='15450'>And we're moving along with the program of
  defining</span> <span m='18060'>analogous concepts for the continuous
  case.</span> </p><p><span m='20720'>We have already discussed the joint PDF
  and the conditional</span> <span m='24630'>PDF, given an event.</span>
  </p><p><span m='28030'>The next item in our menu is to define a conditional
  PDF of</span> <span m='32560'>one random variable, given another random
  variable.</span> </p><p><span m='36150'>We proceed by first looking at the
  definition for the</span> <span m='38800'>discrete case.</span> </p><p><span
  m='40120'>A typical entry of the conditional PMF is just a</span> <span
  m='43720'>conditional probability, but in different notation.</span>
  </p><p><span m='47090'>And using the definition of conditional
  probabilities,</span> <span m='49790'>this is equal to the ratio of the joint
  divided by the</span> <span m='53540'>probability of the conditioning
  event.</span> </p><p><span m='56610'>Unfortunately, in the continuous case, a
  definition</span> <span m='59560'>of this form would be problematic, because
  the event</span> <span m='63140'>that Y takes on a specific value is an event
  that has 0</span> <span m='67150'>probability.</span> </p><p><span
  m='67930'>And we know that we cannot condition on a</span> <span m='70700'>0
  probability event.</span> </p><p><span m='72930'>However, we can take this
  expression as a guide on how</span> <span m='76830'>to define a conditional
  PDF in the continuous case.</span> </p><p><span m='80110'>And this is the
  definition, which just mimics the formula</span> <span m='83530'>that we have
  up here.</span> </p><p><span m='85430'>Notice that this conditional PDF--
  defined this way-- is</span> <span m='89050'>well defined, as long as the
  denominator</span> <span m='92229'>is a positive quantity.</span> </p><p><span
  m='94670'>Let us now try to make sense of this definition.</span> </p><p><span
  m='97370'>Let us first recall the interpretation of the</span> <span
  m='99789'>conditional PDF, given an event, A, that has positive</span> <span
  m='103820'>probability.</span> </p><p><span m='105320'>We know that the PDF is
  used to determine the probability</span> <span m='108280'>of a small
  interval.</span> </p><p><span m='109740'>And similarly, the conditional PDF is
  used to calculate the</span> <span m='114780'>conditional probability of a
  small interval given the</span> <span m='118620'>conditioning event.</span>
  </p><p><span m='120880'>We would like to do something similar for the
  conditional</span> <span m='123610'>PDF, where we would like to take the event
  A to be</span> <span m='127780'>something like the event that Y is equal to
  some particular</span> <span m='132070'>value-- little y.</span> </p><p><span
  m='133450'>But as we said, this is problematic, because this</span> <span
  m='135780'>event does not have positive probability.</span> </p><p><span
  m='139110'>So instead, we can take A to be the event that Y is</span> <span
  m='143480'>approximately equal to a certain value.</span> </p><p><span
  m='146670'>So we're dealing with a little interval around this value,</span>
  <span m='149910'>little y, which in general would be an event of
  positive</span> <span m='153500'>probability.</span> </p><p><span
  m='154540'>And we can try to have a similar interpretation.</span>
  </p><p><span m='158530'>Let us see how this works out.</span> </p><p><span
  m='161140'>So what does it mean that Y is approximately equal to some</span>
  <span m='165510'>particular value, little y?</span> </p><p><span m='167000'>We
  interpret that as follows.</span> </p><p><span m='169420'>We're told that the
  random variable, Y, takes a value</span> <span m='173050'>that is within
  epsilon--</span> <span m='174660'>where epsilon is a small number--</span>
  <span m='176590'>of a given value, little y.</span> </p><p><span
  m='178780'>And given this conditioning information, we want to</span> <span
  m='181290'>calculate the probability of a small interval.</span> </p><p><span
  m='184160'>How do we do that?</span> </p><p><span m='185600'>Well,
  here--</span> <span m='186370'>because this, in general, will be a</span>
  <span m='188485'>positive probability event--</span> <span m='190110'>we can
  use the definition of conditional probabilities.</span> </p><p><span
  m='193920'>And it would be equal to the probability of both events</span>
  <span m='197900'>happening, divided by the probability of the</span> <span
  m='200600'>conditioning event.</span> </p><p><span m='202820'>What is the
  probability of both events happening?</span> </p><p><span m='205010'>This is a
  probability of a small rectangle in xy space.</span> </p><p><span
  m='210700'>At that rectangle, the joint PDF, has a certain value.</span>
  </p><p><span m='218570'>And because we're integrating over that
  rectangle--</span> <span m='221670'>and that rectangle has dimensions delta
  and epsilon--</span> <span m='225000'>of that probability, that small
  rectangle, is</span> <span m='228150'>approximately equal to this.</span>
  </p><p><span m='230690'>Then we need the denominator, which is the probability
  of</span> <span m='234190'>the conditioning event.</span> </p><p><span
  m='235829'>And this is approximately equal to the density of Y</span> <span
  m='240750'>evaluated at that point, times the length</span> <span
  m='243350'>of the small interval.</span> </p><p><span m='245370'>We cancel the
  epsilons.</span> </p><p><span m='248940'>And then we notice that the ratio we
  have here is what we</span> <span m='252250'>defined as the conditional
  PDF.</span> </p><p><span m='256290'>So we get this relation times
  delta.</span> </p><p><span m='262390'>So what do we see?</span> </p><p><span
  m='265010'>We see that the probability of a small interval is equal to
  a</span> <span m='272760'>PDF times the length of the small interval.</span>
  </p><p><span m='276060'>However, because we are conditioning on Y being</span>
  <span m='280530'>approximately equal to a certain value, we end up
  using</span> <span m='284520'>a corresponding conditional PDF, where the
  conditional PDF</span> <span m='288060'>is defined this way.</span>
  </p><p><span m='289680'>So we now have an interpretation of the</span> <span
  m='292020'>conditional PDF in terms of</span> <span m='294470'>probabilities
  of small intervals.</span> </p><p><span m='299890'>Now that we have an
  intuitive interpretation of the</span> <span m='302100'>conditional PDF, we
  can also use it to calculate</span> <span m='306940'>conditional probabilities
  of more general</span> <span m='309330'>events, not just intervals.</span>
  </p><p><span m='311860'>And we do this as follows.</span> </p><p><span
  m='314920'>In general, for continuous random variables, we can find</span>
  <span m='317660'>the probability that X belongs to a certain set by</span>
  <span m='320240'>integrating a PDF over that set.</span> </p><p><span
  m='323340'>Because here we're dealing with a conditional situation</span>
  <span m='326470'>where we're given the value of Y, we use the conditional
  PDF</span> <span m='330570'>instead of the true PDF.</span> </p><p><span
  m='332340'>And this way, we calculate the conditional probability.</span>
  </p><p><span m='335710'>Now, the difficulty is that this conditional
  probability</span> <span m='339120'>is not a well-defined quantity according
  to what we did early</span> <span m='343409'>on in this class.</span>
  </p><p><span m='344340'>We cannot condition on zero probability events.</span>
  </p><p><span m='346960'>But we can get the around this difficulty as
  follows.</span> </p><p><span m='350270'>This quantity is well-defined.</span>
  </p><p><span m='353580'>And we can use this quantity as the definition of
  this</span> <span m='358640'>conditional probability.</span> </p><p><span
  m='360630'>And so we have managed to provide definition of</span> <span
  m='363800'>conditional probabilities, given a 0 probability event of</span>
  <span m='367810'>a certain type.</span> </p><p><span m='370250'>It turns out
  that this definition is sound and</span> <span m='373140'>consistent with
  everything else that we are doing.</span> </p><p><span m='376780'>But when
  we're dealing with particular problems and</span> <span
  m='380770'>applications, we can generally forget about all of these</span>
  <span m='384420'>subtleties that we have been discussing here.</span>
  </p><p><span m='387800'>The bottom line is that we will be</span> <span
  m='389540'>treating conditional PDFs--</span> <span m='392190'>given the value
  of a random variable, Y--</span> <span m='395480'>just as ordinary PDFs, but
  given the information that</span> <span m='401980'>this random variable took
  on a specific value.</span> </p><p><span m='404940'>And in that conditional
  universe, we will calculate</span> <span m='407640'>probabilities the usual
  way, by using conditional PDFs</span> <span m='411770'>instead of ordinary
  PDFs.</span> </p><p></p>
uid: 690b7de84538a157b02c5a57d491daa6
type: course
layout: video
---
