---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: PaI-oaOBHKU
    parent_uid: fea54d8bdc31d42ed5b701f20c437ce0
    title: Video-YouTube-Stream
    type: Video
    uid: ab20fc889dcea8c866badc800b77ffae
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/PaI-oaOBHKU/default.jpg'
    parent_uid: fea54d8bdc31d42ed5b701f20c437ce0
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: ccf6159a4947cde8536995abdd0d9d46
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: PaI-oaOBHKU
    parent_uid: fea54d8bdc31d42ed5b701f20c437ce0
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: d9b2126624700594557376c1a75e747a
  - id: PaI-oaOBHKU.srt
    parent_uid: fea54d8bdc31d42ed5b701f20c437ce0
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/the-monotonic-case/PaI-oaOBHKU.srt
    title: 3play caption file
    type: null
    uid: 88d9c7e350d2313a01ed9054668b2e31
  - id: PaI-oaOBHKU.pdf
    parent_uid: fea54d8bdc31d42ed5b701f20c437ce0
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/the-monotonic-case/PaI-oaOBHKU.pdf
    title: 3play pdf file
    type: null
    uid: addf8ee2101aacc321b655fa88b03826
  - id: Caption-3Play YouTube id-SRT
    parent_uid: fea54d8bdc31d42ed5b701f20c437ce0
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: e9c347c363497b9235ab777369e0f81b
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: fea54d8bdc31d42ed5b701f20c437ce0
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 6b8e568b9c6d64fe794eea403cc7244a
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L11-06_300k.mp4
    parent_uid: fea54d8bdc31d42ed5b701f20c437ce0
    title: Video-Internet Archive-MP4
    type: Video
    uid: 4dda14ed648c3603394a3ac297a0b73f
inline_embed_id: 45728926themonotoniccase34600277
order_index: 1059
parent_uid: 9ca6b310dc93095c9ac0f0e5f95e6930
related_resources_text: ''
short_url: the-monotonic-case
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/the-monotonic-case
title: The Monotonic Case
transcript: >-
  <p><span m='1300'>We have already worked through some examples in which X was
  a</span> <span m='6490'>random variable with a given PDF, and we considered
  the</span> <span m='10220'>problem of finding the PDF of Y for the case where
  Y was the</span> <span m='15490'>function x cubed or the function of the form
  a/X. What</span> <span m='22120'>both of these examples have in common is that
  Y is a</span> <span m='26540'>monotonic function of X.</span> </p><p><span
  m='28680'>In this case, Y is increasing with X. In this case, Y was</span>
  <span m='34200'>decreasing with X. It turns out that there is a general</span>
  <span m='37970'>formula that gives us the PDF of Y in terms of the PDF of
  X</span> <span m='43160'>in the special case where we're dealing</span> <span
  m='45330'>with a monotonic function.</span> </p><p><span m='47530'>So, let us
  assume that g is a strictly increasing function.</span> </p><p><span
  m='52510'>And what that means is that, if x is a number or smaller</span>
  <span m='56560'>than some other number x prime, the value of g of x is</span>
  <span m='61890'>going to be smaller than the value of g x prime.</span>
  </p><p><span m='66560'>So, when you increase the argument of the function,
  the</span> <span m='68900'>function increases.</span> </p><p><span
  m='71470'>To keep things simple, we will also assume that the function</span>
  <span m='75110'>g is smooth, in particular that it is differentiable.</span>
  </p><p><span m='80120'>Then we have a diagram such as this one.</span>
  </p><p><span m='82600'>Here is x, and y is given by a function of x.</span>
  </p><p><span m='87330'>It's a smooth function, and that function keeps</span>
  <span m='90590'>increasing.</span> </p><p><span m='92710'>Now, because of the
  assumptions we have made on g,</span> <span m='95979'>we have an interesting
  situation.</span> </p><p><span m='98570'>Given a value of x, a corresponding
  value of y will</span> <span m='103450'>be determined according to the
  function g.</span> </p><p><span m='106550'>But we can also go the other
  way.</span> </p><p><span m='109450'>If I tell you a value of y, then you can
  specify for me</span> <span m='114630'>one and only one value of x that gives
  rise to this</span> <span m='119100'>particular y.</span> </p><p><span
  m='120600'>So, the function g takes us from x's to y's, but you can</span>
  <span m='124550'>also go back the opposite way from y's to values of x.</span>
  </p><p><span m='130020'>And the mapping that takes us from y's to x's, this is
  the</span> <span m='134030'>inverse of the function g.</span> </p><p><span
  m='136820'>And we give a name to that inverse function,</span> <span
  m='139310'>and we call it h.</span> </p><p><span m='141150'>So, h of y is the
  value of x that produces a</span> <span m='146900'>specific value y.</span>
  </p><p><span m='151370'>Let us now move on with the program of finding the PDF
  of</span> <span m='156079'>Y. We will follow the usual two step
  procedure.</span> </p><p><span m='160650'>And the first step is to find the
  CDF of Y.</span> </p><p><span m='170390'>So we fix some little y, And we want
  to find the</span> <span m='174380'>probability that the random variable y
  takes a value in</span> <span m='178810'>this range.</span> </p><p><span
  m='180500'>When does this happen?</span> </p><p><span m='182960'>For Y to take
  a value in this range, it must be the case</span> <span m='187530'>that X
  takes a value in this range here.</span> </p><p><span m='193780'>Values of X
  smaller than this particular number result in</span> <span m='198690'>values
  of Y that are less than or equal to</span> <span m='202130'>this particular
  number.</span> </p><p><span m='203730'>So, we can rewrite the event of
  interest in terms of the</span> <span m='207230'>random variable X and write
  it as follows.</span> </p><p><span m='212270'>We need to have x less than or
  equal to h of little y.</span> </p><p><span m='219590'>But this is just the
  CDF of X evaluated at h of y.</span> </p><p><span m='226470'>We now carry out
  to the second step of our program.</span> </p><p><span m='230710'>We take
  derivatives of both sides and we find that the PDF</span> <span m='234600'>of
  Y is equal to the derivative of the right hand</span> <span m='238329'>side,
  the derivative of the CDF is a PDF.</span> </p><p><span m='243540'>And then
  the chain rule tells us that we also need to take</span> <span m='246760'>the
  derivative of the term inside here with respect to</span> <span m='251412'>its
  argument.</span> </p><p><span m='257329'>And this is a general formula for the
  PDF of a strictly</span> <span m='262440'>increasing function of a random
  variable X. How about</span> <span m='268670'>the case of a decreasing
  function?</span> </p><p><span m='272070'>So, let us assume that g now is a
  strictly decreasing</span> <span m='277510'>function of X.</span> </p><p><span
  m='282659'>So, we might have a plot for g that looks</span> <span
  m='286020'>something like this.</span> </p><p><span m='291040'>What happens in
  this case?</span> </p><p><span m='293250'>We can start doing a calculation of
  this kind.</span> </p><p><span m='302710'>But now, how can we rewrite this
  event?</span> </p><p><span m='307060'>The random variable Y will take a value
  less than or</span> <span m='311790'>equal to this number little y.</span>
  </p><p><span m='315310'>When does this happen?</span> </p><p><span
  m='318370'>When the value of g of x is less than y.</span> </p><p><span
  m='322420'>And that happens for x's in this range.</span> </p><p><span
  m='326100'>So, this is the set of x's for which is the value of g of x</span>
  <span m='331690'>is less than or equal to this particular number y.</span>
  </p><p><span m='335650'>So the event of interest in that case is the event
  that X</span> <span m='340260'>is larger than or equal to h of y, which is 1
  minus the</span> <span m='348200'>probability that X is less than h of
  y.</span> </p><p><span m='355880'>Because X is a continuous random variable,
  we can change</span> <span m='359330'>this inequality to one that allows
  the</span> <span m='363460'>possibility of equality.</span> </p><p><span
  m='365540'>And so this is 1 minus the CDF of X evaluated at h of y.</span>
  </p><p><span m='372790'>Now we take the derivatives of both sides and we find
  the PDF</span> <span m='377270'>or Y being equal to, there's a minus sign
  here, then the</span> <span m='382960'>derivative of the CDF, which is the
  PDF.</span> </p><p><span m='389100'>And finally, the derivative of the
  function h.</span> </p><p><span m='396400'>Now in this case, g is a decreasing
  function of x.</span> </p><p><span m='401970'>So when x goes down, y goes
  up.</span> </p><p><span m='405240'>When x goes up, y goes down.</span>
  </p><p><span m='409510'>This means that when y goes up, x goes down.</span>
  </p><p><span m='414920'>So it means that the inverse function h is going to be
  also</span> <span m='420350'>monotonically decreasing.</span> </p><p><span
  m='425900'>Since it is decreasing, it means that the slope, the</span> <span
  m='430030'>derivative of the function h is going to</span> <span m='433220'>be
  either 0 or negative.</span> </p><p><span m='437200'>And so minus a negative
  value gives us the absolute value of</span> <span m='443150'>that
  number.</span> </p><p><span m='444300'>So we can rewrite this by removing this
  minus sign here,</span> <span m='452820'>and putting an absolute value in this
  place.</span> </p><p><span m='458250'>Of course, in the case where g is an
  increasing function,</span> <span m='462650'>when x goes up, y goes up.</span>
  </p><p><span m='464740'>This means that when y goes up, x goes up.</span>
  </p><p><span m='468500'>So h in that case would have been an increasing
  function,</span> <span m='472550'>so this number here would have been a
  non-negative number,</span> <span m='476060'>and so it would be the same as
  the absolute value.</span> </p><p><span m='479800'>So using these absolute
  values, we obtain formulas</span> <span m='482485'>that are exactly the same
  in both cases of increasing and</span> <span m='486420'>decreasing functions,
  and so our final conclusion is that</span> <span m='490950'>in either case,
  the PDF of Y is given in terms of the PDF</span> <span m='496574'>of X times
  the derivative of this inverse function.</span> </p><p><span m='501770'>Let us
  now apply the formula that we have in our hands for</span> <span
  m='506180'>the monotonic case to a particular example, where y is</span> <span
  m='510990'>the square of X, and where X is uniform on the</span> <span
  m='515440'>interval 0 to 1.</span> </p><p><span m='517679'>So the function g,
  in our case, the function g is the</span> <span m='525350'>square
  function.</span> </p><p><span m='531550'>Now, you could argue here that this
  function is not</span> <span m='534910'>monotonic, so how can we apply our
  results?</span> </p><p><span m='538000'>On the other hand, the random variable
  X takes values on the</span> <span m='541540'>interval from 0 to 1, and
  therefore the form of the</span> <span m='547240'>function g outside that
  range does not concern us.</span> </p><p><span m='552000'>Over the range of
  values of interest, the function g is a</span> <span m='556060'>monotonic
  function.</span> </p><p><span m='558750'>So, what is the
  correspondence?</span> </p><p><span m='561060'>y is going to be equal to x
  squared.</span> </p><p><span m='566100'>That's the g of x function.</span>
  </p><p><span m='568840'>And when that happens, we have the relation that x is
  going</span> <span m='574460'>to be the square root of y.</span> </p><p><span
  m='578350'>This tells us that the inverse function, h of y, which tells</span>
  <span m='584250'>us what is the particular x associated with a given y,
  the</span> <span m='589200'>inverse function takes the form square root of
  y.</span> </p><p><span m='594510'>So now we can go ahead and use the
  formula.</span> </p><p><span m='598190'>The density at some particular little
  y where that little y,</span> <span m='603080'>belongs to the range of values
  of interest, x things values</span> <span m='608150'>between 0 and 1, so y
  also takes values between 0 and 1.</span> </p><p><span m='614380'>So over that
  range, the density of Y is the density of</span> <span m='619540'>X, which is
  uniform, therefore it is equal to 1, times the</span> <span
  m='628300'>derivative of the square root function.</span> </p><p><span
  m='631360'>And the derivative of the square root function is 1 over</span>
  <span m='636130'>2 times the square root of y.</span> </p><p><span
  m='640250'>As you can see, the amount of calculations involved here are</span>
  <span m='644290'>rather simpler compared to what we would have to do if
  we</span> <span m='648580'>were to go through our two step program</span>
  <span m='651440'>and work with CDFs.</span> </p><p><span m='654130'>All that
  you need to do is essentially to identify the</span> <span m='657950'>inverse
  function that given a y produces x's, and write down</span> <span
  m='663890'>the corresponding derivative.</span> </p><p></p>
uid: fea54d8bdc31d42ed5b701f20c437ce0
type: course
layout: video
---
