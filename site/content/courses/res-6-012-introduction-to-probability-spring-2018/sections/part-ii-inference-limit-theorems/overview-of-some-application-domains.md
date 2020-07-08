---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: z1lAn4GMaFs
    parent_uid: 66f2a1bf71ca4b7b047c1560a32a87a8
    title: Video-YouTube-Stream
    type: Video
    uid: 9484de9757e8a2bba6954c5583e95bbf
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/z1lAn4GMaFs/default.jpg'
    parent_uid: 66f2a1bf71ca4b7b047c1560a32a87a8
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 4b5238ceb1ca22951593f9a47fcfbd58
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: z1lAn4GMaFs
    parent_uid: 66f2a1bf71ca4b7b047c1560a32a87a8
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: e70ec1d4c872790fab3f3e5553a2d3ac
  - id: z1lAn4GMaFs.srt
    parent_uid: 66f2a1bf71ca4b7b047c1560a32a87a8
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/overview-of-some-application-domains/z1lAn4GMaFs.srt
    title: 3play caption file
    type: null
    uid: 60af0c7e153ef118c7ed5c8bdcb4a4ee
  - id: z1lAn4GMaFs.pdf
    parent_uid: 66f2a1bf71ca4b7b047c1560a32a87a8
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/overview-of-some-application-domains/z1lAn4GMaFs.pdf
    title: 3play pdf file
    type: null
    uid: a136008c7a81516278ec22341c105754
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 66f2a1bf71ca4b7b047c1560a32a87a8
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 9fe19a194fa0668048ac71c14a3f18cb
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 66f2a1bf71ca4b7b047c1560a32a87a8
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: e12558f1bc823b871e6636944ec4d0cb
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L14-02_300k.mp4
    parent_uid: 66f2a1bf71ca4b7b047c1560a32a87a8
    title: Video-Internet Archive-MP4
    type: Video
    uid: d109669b8fad5c2e300f5fd7eabec833
inline_embed_id: 10132937overviewofsomeapplicationdomains17357213
order_index: 1345
parent_uid: b8cdf274e2b0f82662e4cd137e85d308
related_resources_text: ''
short_url: overview-of-some-application-domains
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/overview-of-some-application-domains
title: Overview of some Application Domains
transcript: >-
  <p><span m='740'>Before we get going with our discussion</span> <span
  m='2760'>of inference methods, it is worth</span> <span m='4800'>looking at
  the big picture for some perspective.</span> </p><p><span m='7550'>So far, we
  have concentrated on ways</span> <span m='9680'>to analyze probability
  models.</span> </p><p><span m='11860'>This part of the picture.</span>
  </p><p><span m='14230'>If our model has been selected in a careful way,</span>
  <span m='18190'>then it should also be relevant to the real world</span> <span
  m='21730'>and help us make predictions or decisions.</span> </p><p><span
  m='26000'>But how do we know that this is the case?</span> </p><p><span
  m='28480'>This is why we need to look at data that are generated</span> <span
  m='32450'>by the real world, and then use these to come up with a
  model.</span> </p><p><span m='37010'>This is what the field of inference and
  statistics</span> <span m='39760'>is all about.</span> </p><p><span
  m='41230'>This field has undergone a radical transformation</span> <span
  m='43950'>in recent years.</span> </p><p><span m='45670'>I will exaggerate a
  little, but in the past,</span> <span m='48490'>a statistician might be called
  to look</span> <span m='50480'>at problems such as this one.</span>
  </p><p><span m='53360'>You're given data on a few patients,</span> <span
  m='56000'>and you need to figure out whether a certain treatment is</span>
  <span m='60200'>effective or not.</span> </p><p><span m='61850'>But today, a
  statistician lives in a dreamland.</span> </p><p><span m='65510'>There are
  tons of data that are generated everywhere.</span> </p><p><span
  m='69370'>These allow us to build quite detailed large models involving</span>
  <span m='75010'>thousands of parameters.</span> </p><p><span m='77100'>And we
  do have the computational power to do all that.</span> </p><p><span
  m='80890'>In this landscape, the opportunities</span> <span m='82700'>for a
  statistician are endless.</span> </p><p><span m='85030'>So let me give you a
  small representative sample.</span> </p><p><span m='89130'>In a somewhat
  traditional setting,</span> <span m='90960'>one designs a data collection
  method,</span> <span m='93670'>and then uses these data to make a simple
  prediction.</span> </p><p><span m='98310'>This is the case, for example, in
  polling.</span> </p><p><span m='101200'>Where the purpose is to predict the
  outcome of an election.</span> </p><p><span m='105479'>Another field is
  marketing and advertising,</span> <span m='108330'>where the situation is
  somewhat similar.</span> </p><p><span m='110220'>Except now, we want to make
  predictions</span> <span m='112729'>not for a population as a whole,
  but</span> <span m='115229'>for each individual consumer.</span> </p><p><span
  m='118220'>And a particular application has to do</span> <span m='120260'>with
  so-called recommendation systems.</span> </p><p><span m='123350'>You collect
  ratings that people give to movies, as</span> <span m='127400'>in a famous
  competition that was announced by Netflix.</span> </p><p><span m='131550'>So
  you have data for every movie and the people</span> <span m='136600'>who have
  watched them.</span> </p><p><span m='139250'>You make a note of what rating
  that person</span> <span m='142840'>gave to a particular movie.</span>
  </p><p><span m='145530'>And now after you collect huge amounts of data of this
  kind,</span> <span m='149880'>you try to use this information to guess</span>
  <span m='153240'>whether, for example, this person is</span> <span
  m='157280'>interested in this particular movie or not.</span> </p><p><span
  m='161640'>This is a quite difficult problem.</span> </p><p><span m='164060'>A
  quite complicated one.</span> </p><p><span m='166030'>And it gave the
  community an opportunity</span> <span m='168870'>to develop fancier and
  fancier combinations of methods</span> <span m='172760'>in order to come up
  with good predictions</span> <span m='175870'>of unknown entries in this
  table.</span> </p><p><span m='179060'>Another field is, of course,
  finance.</span> </p><p><span m='181770'>The markets are truly
  uncertain.</span> </p><p><span m='183960'>And there are quite complete
  historical data.</span> </p><p><span m='187090'>Lots of them.</span>
  </p><p><span m='188210'>How do we use these data to make predictions?</span>
  </p><p><span m='191670'>Coming now to the natural sciences,</span> <span
  m='193650'>a revolution has been taking place in the life sciences.</span>
  </p><p><span m='198010'>There are tons of genomic data to be processed to find
  out</span> <span m='202220'>what combination of genes causes what
  disease.</span> </p><p><span m='206810'>Or we may want to find out the
  details</span> <span m='209870'>of the chemical reactions inside a living
  cell.</span> </p><p><span m='213100'>And there is an upcoming new frontier,
  neuroscience,</span> <span m='217880'>where there will be vast amounts of data
  that will be generated.</span> </p><p><span m='223110'>These will consist of
  brain measurements.</span> </p><p><span m='225420'>Of measurements of what
  each neuron is doing.</span> </p><p><span m='228290'>And hopefully, these will
  lead us one day</span> <span m='231710'>to finding out what the brain really
  does and how it works.</span> </p><p><span m='236870'>In the sciences, the
  list is endless.</span> </p><p><span m='239430'>It goes on and on.</span>
  </p><p><span m='241240'>In modeling climate and the environment,</span> <span
  m='244070'>scientists are using a huge models these days.</span> </p><p><span
  m='247690'>Which they try to calibrate using lots of available data.</span>
  </p><p><span m='251610'>And in physics as well, scientists</span> <span
  m='254640'>to use fancy inference methods trying to find</span> <span
  m='257820'>needles in a haystack.</span> </p><p><span m='259959'>Like rare
  particles or remote planets.</span> </p><p><span m='264120'>Finally,
  engineering is a fight against noise.</span> </p><p><span m='268680'>Engineers
  try to make devices that</span> <span m='271110'>will work in uncertain
  environments.</span> </p><p><span m='273800'>The field of signal processing is
  a prime example</span> <span m='276510'>where the generic question is to
  recover</span> <span m='279050'>the content of a signal.</span> </p><p><span
  m='280850'>For example, the content of a radio transmission</span> <span
  m='284260'>when a signal is received after it gets corrupted by noise.</span>
  </p><p><span m='289550'>I could go on and on for hours generating lists of
  this kind,</span> <span m='293800'>but we have to stop somewhere.</span>
  </p><p><span m='295620'>The bottom line is that the opportunities and the
  needs</span> <span m='299500'>are vast.</span> </p><p><span m='300960'>For
  this reason, we will look into the core methodologies</span> <span
  m='304750'>that come into play.</span> </p><p><span m='306560'>Fortunately for
  us, the fundamental concepts</span> <span m='309720'>and approaches turn out
  to be the same independent</span> <span m='313790'>of the particular
  application.</span> </p><p></p>
uid: 66f2a1bf71ca4b7b047c1560a32a87a8
type: courses
layout: video
---
