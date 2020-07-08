---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: 5kdv3r-YgK0
    parent_uid: 8917b94992304ac6dc1f68ae4ad12b15
    title: Video-YouTube-Stream
    type: Video
    uid: 2b200bf1327d58a037c2818b13cba332
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/5kdv3r-YgK0/default.jpg'
    parent_uid: 8917b94992304ac6dc1f68ae4ad12b15
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 44238e801ffa66c0e2b2115ff5690e29
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: 5kdv3r-YgK0
    parent_uid: 8917b94992304ac6dc1f68ae4ad12b15
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: c121a8d919c13fbfca05e3608abceccc
  - id: 5kdv3r-YgK0.srt
    parent_uid: 8917b94992304ac6dc1f68ae4ad12b15
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-iii-random-processes/example-the-distribution-of-a-busy-period/5kdv3r-YgK0.srt
    title: 3play caption file
    type: null
    uid: 7119520195cefcf53cba69453b07b501
  - id: 5kdv3r-YgK0.pdf
    parent_uid: 8917b94992304ac6dc1f68ae4ad12b15
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-iii-random-processes/example-the-distribution-of-a-busy-period/5kdv3r-YgK0.pdf
    title: 3play pdf file
    type: null
    uid: 766d14cd2799794a9fbd7406aab98611
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 8917b94992304ac6dc1f68ae4ad12b15
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 4775462bddeb4a53c71634a632067f2e
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 8917b94992304ac6dc1f68ae4ad12b15
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 24842a5bf7833b7006c098fe1502b5cd
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L21-06_300k.mp4
    parent_uid: 8917b94992304ac6dc1f68ae4ad12b15
    title: Video-Internet Archive-MP4
    type: Video
    uid: 10ed408c319f7a6a9adfcf953992e064
inline_embed_id: 65148129examplethedistributionofabusyperiod72550871
order_index: 1970
parent_uid: ea0e960c7d6bb5ec3c28c2657fe85c0d
related_resources_text: ''
short_url: example-the-distribution-of-a-busy-period
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-iii-random-processes/example-the-distribution-of-a-busy-period
title: 'Example: The Distribution of a Busy Period'
transcript: >-
  <p><span m='1680'>Here is an example of a problem related to the
  Bernoulli</span> <span m='4990'>process, which can be tricky, but is
  actually</span> <span m='8590'>easy to answer if one makes good use</span>
  <span m='11010'>of the fresh-start property.</span> </p><p><span
  m='13270'>Here is the setting.</span> </p><p><span m='14910'>Time is discrete,
  divided into slots.</span> </p><p><span m='17700'>We have a server that
  receives tasks to process.</span> </p><p><span m='22010'>Tasks received gets
  processed in the same time slot.</span> </p><p><span m='26070'>So slots are
  divided into busy ones--</span> <span m='29640'>those are the slots during
  which a task gets processed.</span> </p><p><span m='33290'>And idle slots--
  these are the slots</span> <span m='36080'>during which there is no task to be
  processed.</span> </p><p><span m='39080'>We assume that the process of job
  arrivals</span> <span m='41230'>is described by a Bernoulli process</span>
  <span m='43260'>with some known parameter p.</span> </p><p><span m='46070'>So,
  during each slot there is probability, p,</span> <span m='49820'>that a job is
  present, and different slots</span> <span m='52750'>are independent of each
  other.</span> </p><p><span m='55010'>We're interested in the first busy period
  of the server.</span> </p><p><span m='59270'>The first busy period starts at
  the first slot</span> <span m='64319'>during which there is a job
  present.</span> </p><p><span m='68070'>And the busy period extends until
  just</span> <span m='71990'>before the next idle slot.</span> </p><p><span
  m='77050'>For an example, it could be the case</span> <span m='80250'>that the
  first slot is busy, in which case</span> <span m='83750'>the busy period
  starts right here.</span> </p><p><span m='86110'>And the busy periods, in this
  example,</span> <span m='88340'>extends for three time units.</span>
  </p><p><span m='91360'>It ends just before the next idle slot.</span>
  </p><p><span m='95509'>It could also be the case that the first slot is
  idle.</span> </p><p><span m='98910'>In that case, the busy period
  starts</span> <span m='101240'>with the first busy slot that shows up.</span>
  </p><p><span m='104940'>It's this slot in this example.</span> </p><p><span
  m='107180'>And extends until just before the first idle slot</span> <span
  m='111229'>that we observe.</span> </p><p><span m='112550'>So in this example,
  the busy period</span> <span m='114509'>extends for four time steps.</span>
  </p><p><span m='117539'>What is the length of the first busy period?</span>
  </p><p><span m='120860'>Well, the length of the first busy period</span> <span
  m='123200'>is a random variable.</span> </p><p><span m='124320'>So what we
  mean by this question is,</span> <span m='126680'>what is the distribution of
  this random variable?</span> </p><p><span m='130820'>Here's how we go about
  it.</span> </p><p><span m='133210'>The process starts, we wait until a first
  busy slot</span> <span m='137950'>appears.</span> </p><p><span m='139390'>This
  is a random time, which is actually the first arrival</span> <span
  m='143630'>time.</span> </p><p><span m='144880'>And at that time, by our
  earlier discussion,</span> <span m='149710'>the process will start
  fresh.</span> </p><p><span m='152590'>Starting from this next the slot here
  and going on forward,</span> <span m='157690'>what we have is a Bernoulli
  process.</span> </p><p><span m='160320'>And at each slot, there's probability
  p that it is busy,</span> <span m='163810'>and probability 1 minus p that it
  is idle.</span> </p><p><span m='167610'>Now, what is this slot here?</span>
  </p><p><span m='170570'>This is the first idle slot in this Bernoulli
  process</span> <span m='175360'>that starts fresh at this particular
  time.</span> </p><p><span m='180530'>At each time step there is probability 1
  minus p</span> <span m='184790'>that the slot is idle.</span> </p><p><span
  m='187120'>Think now of idle slots as successes.</span> </p><p><span
  m='190440'>How long does it take until the first success?</span> </p><p><span
  m='193860'>We know that this is a geometric random variable with
  parameter</span> <span m='200690'>equal to the probability of success.</span>
  </p><p><span m='203170'>Since we're thinking of the idle slot as being a
  success,</span> <span m='207079'>the parameter, in this case, is going to be 1
  minus p.</span> </p><p><span m='211160'>So, the length of this blue
  interval</span> <span m='215370'>that starts at this slot and extends</span>
  <span m='218790'>until the first idle slot has a geometric distribution</span>
  <span m='223790'>with parameter 1 minus p.</span> </p><p><span m='227130'>But
  now notice that the length of this blue interval</span> <span m='230900'>is
  exactly the same as the length of this red interval.</span> </p><p><span
  m='235680'>The red interval is just the same as the blue interval,</span>
  <span m='238460'>but shifted by 1, but their lengths are the same.</span>
  </p><p><span m='242410'>And the length of the red interval</span> <span
  m='244460'>is the length of the first busy period.</span> </p><p><span
  m='247030'>So we conclude that the first busy period is also</span> <span
  m='251040'>a geometric random variable with parameter 1 minus p.</span> </p>
uid: 8917b94992304ac6dc1f68ae4ad12b15
type: courses
layout: video
---
