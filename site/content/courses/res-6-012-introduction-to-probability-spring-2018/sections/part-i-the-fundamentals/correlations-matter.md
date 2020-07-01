---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: 6-gN0dDHU-4
    parent_uid: c299d0486eda22cf19eeaaa17333a826
    title: Video-YouTube-Stream
    type: Video
    uid: 693a7b8511047161f739b19f0ca3bc3f
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/6-gN0dDHU-4/default.jpg'
    parent_uid: c299d0486eda22cf19eeaaa17333a826
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: dbbe4fc36010f6d71ad2ad45c6d810e1
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: 6-gN0dDHU-4
    parent_uid: c299d0486eda22cf19eeaaa17333a826
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 37c5d302a71d52a9f114dd3c2c45e044
  - id: 6-gN0dDHU-4.srt
    parent_uid: c299d0486eda22cf19eeaaa17333a826
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/correlations-matter/6-gN0dDHU-4.srt
    title: 3play caption file
    type: null
    uid: bd882a32c4c9aefec290830b5b1f0249
  - id: 6-gN0dDHU-4.pdf
    parent_uid: c299d0486eda22cf19eeaaa17333a826
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/correlations-matter/6-gN0dDHU-4.pdf
    title: 3play pdf file
    type: null
    uid: 505cef77456cbcb14f67d34c27d74ff0
  - id: Caption-3Play YouTube id-SRT
    parent_uid: c299d0486eda22cf19eeaaa17333a826
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: ae19421b694403bd3aed357c8df96543
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: c299d0486eda22cf19eeaaa17333a826
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: a445144d322632f530388c98eda2e543
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L12-11_300k.mp4
    parent_uid: c299d0486eda22cf19eeaaa17333a826
    title: Video-Internet Archive-MP4
    type: Video
    uid: 676fec4b745c92e8c07827c12ceb031a
inline_embed_id: 72191108correlationsmatter32638805
order_index: 1185
parent_uid: 9ca6b310dc93095c9ac0f0e5f95e6930
related_resources_text: ''
short_url: correlations-matter
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/correlations-matter
title: Correlations Matter
transcript: >-
  <p><span m='740'>In this segment, we make a connection between the</span>
  <span m='3140'>correlation coefficient and some fairly realistic real</span>
  <span m='6870'>world situations.</span> </p><p><span m='8470'>The bottom line
  will be that the presence or absence of</span> <span m='11100'>correlations
  can make a huge difference.</span> </p><p><span m='14250'>Suppose that you run
  an investment company that</span> <span m='17310'>invests in real estate, and
  you have 100 million of</span> <span m='20870'>capital that you want to
  invest.</span> </p><p><span m='23020'>Now you have learned or believe that it
  helps to</span> <span m='26090'>diversify, to not put all of your eggs in the
  same basket.</span> </p><p><span m='30290'>And for that reason, you're going
  to invest some of your</span> <span m='33770'>money into different
  states.</span> </p><p><span m='36850'>You will be investing in 10 different
  states, and in each</span> <span m='40050'>state, you will invest 10 million
  so that your total</span> <span m='43290'>investment is spread between those
  10 states.</span> </p><p><span m='48010'>For each state, you have a model that
  tells you that the</span> <span m='51110'>return on your investment, that is
  your profit--</span> <span m='54190'>It's, of course, random, but you expect
  it to be 1 million</span> <span m='57730'>on the average, that is, in terms of
  the expected value,</span> <span m='61380'>but there's also a fair amount of
  randomness, and so the</span> <span m='64000'>standard deviation is
  1.3.</span> </p><p><span m='67480'>Now, if you look at one state in isolation,
  it would be a</span> <span m='72260'>pretty risky investment because the
  standard deviation</span> <span m='75650'>is comparable to the mean.</span>
  </p><p><span m='78150'>It's not an unlikely event to have a return that's
  one</span> <span m='81780'>standard deviation below the mean.</span>
  </p><p><span m='84150'>And if that happens, your return is going to be</span>
  <span m='86900'>negative, and you're losing money.</span> </p><p><span
  m='89230'>But then you argue that you're investing in</span> <span
  m='91930'>10 different states.</span> </p><p><span m='93320'>Yes, you might
  lose money in some of them, but overall, you</span> <span m='97120'>would
  expect to have a pretty high confidence that you will</span> <span
  m='102060'>end up having a positive return.</span> </p><p><span m='105130'>Is
  this correct or not?</span> </p><p><span m='107970'>Let us do some
  calculations.</span> </p><p><span m='110210'>We will look at the variance of
  your total return.</span> </p><p><span m='116200'>The variance of the sum of
  random variables is given by</span> <span m='119840'>the formula that we have
  developed.</span> </p><p><span m='121490'>It's the sum of the
  variances.</span> </p><p><span m='122920'>But then you also have a bunch of
  covariance terms that have</span> <span m='127160'>to do with the relation of
  the different random variables.</span> </p><p><span m='131430'>Now, you make
  the assumption that the different states are</span> <span m='135170'>different
  markets--</span> <span m='136240'>one doesn't affect the other--</span> <span
  m='137950'>so that the Xi's are uncorrelated.</span> </p><p><span
  m='141230'>In that case, in this variance formula, the covariance terms</span>
  <span m='145079'>are all 0, and they disappear and you're left with the
  sum</span> <span m='148250'>of 10 variance terms.</span> </p><p><span
  m='150230'>Now, each one of these variances is equal to the</span> <span
  m='154110'>square of the standard deviation.</span> </p><p><span
  m='159390'>And we have a variance of 16.9.</span> </p><p><span m='165360'>You
  then take the square root to find the standard deviation</span> <span
  m='169350'>and the square root of this number is 4.1.</span> </p><p><span
  m='174640'>Now, your expected return is equal to 10, which is 2 and</span>
  <span m='186240'>1/2 standard deviations.</span> </p><p><span m='188380'>You
  will only lose money if the outcome is 2 and 1/2</span> <span
  m='192380'>standard deviations below the mean.</span> </p><p><span
  m='194890'>And that's a fairly unlikely outcome, and so in this</span> <span
  m='197810'>situation you feel very confident that you will have a</span> <span
  m='201810'>positive profit.</span> </p><p><span m='204070'>Suppose, however,
  that your assumption is wrong, and that</span> <span m='208310'>actually the
  different Xi's are</span> <span m='210400'>correlated with each other.</span>
  </p><p><span m='212760'>And suppose that the correlation is</span> <span
  m='214480'>pretty high, 0.9.</span> </p><p><span m='216650'>Essentially, this
  means that the real estate market in one</span> <span m='220400'>state is
  strongly related to the behavior of the market in</span> <span
  m='226050'>another state.</span> </p><p><span m='227270'>And that could be,
  perhaps, because the markets in</span> <span m='229860'>different states are
  affected by some more global phenomenon</span> <span m='233880'>that operates
  on a national level.</span> </p><p><span m='237270'>So in this case, the
  covariance of Xi with Xj is</span> <span m='246580'>going to be the
  correlation coefficient times the standard</span> <span m='250340'>deviation
  of Xi times the standard deviation of Xj,</span> <span m='255190'>which is 0.9
  times 1.3 times 1.3.</span> </p><p><span m='264790'>And so the co-variance
  turns out to be 1.52.</span> </p><p><span m='272840'>And in that case, the
  variance of the sum, using this formula</span> <span m='281970'>here, is going
  to be equal to 10 times the variance that you</span> <span m='287159'>have in
  each state, which is 1.3 squared, plus you have a</span> <span
  m='293140'>bunch of terms here.</span> </p><p><span m='294340'>How many
  terms?</span> </p><p><span m='295650'>There's 90 of them, and each one of
  these</span> <span m='300960'>terms is equal to 1.52.</span> </p><p><span
  m='307520'>And the variance turns out to be 154.</span> </p><p><span
  m='311610'>Now you take the square root of that, and you find a</span> <span
  m='314510'>standard deviation of 12.4.</span> </p><p><span m='319010'>Now,
  your expected profit is 10, but the standard</span> <span m='322860'>deviation
  is 12.4.</span> </p><p><span m='325240'>And if you happen to be one standard
  deviation below the</span> <span m='329540'>expectation, which is something
  that has a sizable</span> <span m='332840'>probability of occurring, then your
  profit</span> <span m='335890'>is going to be negative.</span> </p><p><span
  m='338090'>So in the uncorrelated case, you're pretty certain that you</span>
  <span m='342030'>will have a positive profit, but if the correlations</span>
  <span m='345530'>actually turn out to be significant, then you're</span> <span
  m='348060'>facing a very risky situation.</span> </p><p><span m='351120'>To
  some extent, this is similar to what happened</span> <span m='354740'>during
  the great financial crisis.</span> </p><p><span m='357970'>That is, many
  investment companies thought that they</span> <span m='360740'>were secure by
  diversifying and by investing in different</span> <span m='365180'>housing
  markets in different states, but then when the</span> <span m='368360'>economy
  moved as a whole, it turned out that there were</span> <span m='371180'>high
  correlations between the different states, and so the</span> <span
  m='375980'>unthinkable, that is large losses, actually did occur.</span>
  </p><p></p>
uid: c299d0486eda22cf19eeaaa17333a826
type: courses
layout: video
---
