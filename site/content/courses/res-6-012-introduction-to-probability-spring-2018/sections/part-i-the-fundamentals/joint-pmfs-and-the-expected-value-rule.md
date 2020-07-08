---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: 7nu97OYx4X4
    parent_uid: 93e7014f1662b25def3030fcc4453e12
    title: Video-YouTube-Stream
    type: Video
    uid: f70dd12ec9a059f08fc006d9710db4ba
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/7nu97OYx4X4/default.jpg'
    parent_uid: 93e7014f1662b25def3030fcc4453e12
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 2f62bdaade9f07d5e85a7db6dbf5a5b8
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: 7nu97OYx4X4
    parent_uid: 93e7014f1662b25def3030fcc4453e12
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: a77d0f81ef9ef7a6738128be3cdafa9a
  - id: 7nu97OYx4X4.srt
    parent_uid: 93e7014f1662b25def3030fcc4453e12
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/joint-pmfs-and-the-expected-value-rule/7nu97OYx4X4.srt
    title: 3play caption file
    type: null
    uid: 2cd786b138f07b577bc3f24e5cf9614f
  - id: 7nu97OYx4X4.pdf
    parent_uid: 93e7014f1662b25def3030fcc4453e12
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/joint-pmfs-and-the-expected-value-rule/7nu97OYx4X4.pdf
    title: 3play pdf file
    type: null
    uid: 3cbffffb5a1c32d0154035140763389f
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 93e7014f1662b25def3030fcc4453e12
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: cb23011b36daba627b8a23ae36756f11
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 93e7014f1662b25def3030fcc4453e12
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 0ad388736744ffcc457f4ef04e3c4233
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L06-07_300k.mp4
    parent_uid: 93e7014f1662b25def3030fcc4453e12
    title: Video-Internet Archive-MP4
    type: Video
    uid: 59852a672b2784582e7009ad2561dff7
inline_embed_id: 29117619jointpmfsandtheexpectedvaluerule27603836
order_index: 627
parent_uid: 9ca6b310dc93095c9ac0f0e5f95e6930
related_resources_text: ''
short_url: joint-pmfs-and-the-expected-value-rule
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/joint-pmfs-and-the-expected-value-rule
title: Joint PMFs and the Expected Value Rule
transcript: >-
  <p><span m="1060">By this point, we have discussed pretty much</span> <span
  m="3380">everything that is to be said about individual discrete</span> <span
  m="7180">random variables.</span></p><p><span m="8870">Now let us move to the
  case where we're dealing with</span> <span m="12190">multiple discrete random
  variables simultaneously, and</span> <span m="15940">talk about their
  distribution.</span></p><p><span m="17420">As we will see, their distribution
  is characterized</span> <span m="19990">by a so-called joint
  PMF.</span></p><p><span m="23080">So suppose that we have a probabilistic
  model, and on</span> <span m="25660">that model we have defined two random
  variables--</span> <span m="28860">X and Y. And that we have available</span>
  <span m="32240">their individual PMFs.</span></p><p><span m="36030">These PMFs
  tell us about one random variable at the time.</span></p><p><span
  m="41120">This tells us about X, this tells us about Y. But they do</span>
  <span m="44440">not give us any information about how the two random</span>
  <span m="47430">variables are related to each other.</span></p><p><span
  m="50220">For example, if you wish to answer this question, whether</span>
  <span m="54670">the numerical values that the two random variables happen
  to</span> <span m="58810">be equal, and what is the probability of that event,
  you</span> <span m="62150">will not be able to answer this question if you
  only know</span> <span m="65060">the two individual PMFs.</span></p><p><span
  m="67280">In order to be able to answer a question of this type, we</span>
  <span m="70830">will need information that tells us what values of X
  tend</span> <span m="75530">to occur together with what values of Y. And
  this</span> <span m="79039">information is captured in the so-called joint
  PMF.</span></p><p><span m="82810">So the joint PMF is nothing but a piece of
  notation for an</span> <span m="87520">object that's
  familiar.</span></p><p><span m="88980">This is the probability that when we
  carry out the</span> <span m="91570">experiment we happen to see random
  variable X take on a</span> <span m="96039">value, little
  x.</span></p><p><span m="97610">And simultaneously see that random variable Y
  takes on a</span> <span m="101440">value, little y.</span></p><p><span
  m="103170">This quantity we indicate it with this notation.</span></p><p><span
  m="106490">The letter little p stands for a PMF.</span></p><p><span
  m="109720">The subscripts tell us which random variables</span> <span
  m="112650">we're talking about.</span></p><p><span m="114080">And finally,
  this is a function of two arguments.</span></p><p><span m="117289">Depending
  on what pair (x,y) we're interested in, we're</span> <span m="121790">going to
  get a different numerical value for this</span> <span
  m="124240">probability.</span></p><p><span m="125810">As an example of a joint
  PMF in which the two random</span> <span m="128870">variables take values in a
  finite set, we might be given</span> <span m="132650">a table of this
  form.</span></p><p><span m="134840">Using this table, we can answer questions
  such as the</span> <span m="137850">following--</span> <span m="138420">what
  is the probability that the random variables X and Y</span> <span
  m="142180">simultaneously take the values, let us say, 1 and
  3?</span></p><p><span m="147670">Then we look up in this table, and we
  identify that it's this</span> <span m="151360">probability, X takes the value
  of 1, and Y takes</span> <span m="154010">the value of 3.</span></p><p><span
  m="155900">And according to this table, the answer would be
  2/20.</span></p><p><span m="161050">Now, something to notice about joint
  PMFs.</span></p><p><span m="164370">When you add over all possible pairs, x
  and y, this exhausts</span> <span m="169400">all the
  possibilities.</span></p><p><span m="171380">And therefore, these
  probabilities should add to 1.</span></p><p><span m="174980">In terms of this
  table, all of the entries that we have here</span> <span m="178750">should add
  to 1.</span></p><p><span m="181510">Now, once we have in our hands the joint
  PMF, we can use it</span> <span m="186000">to find the individual PMFs of the
  random variables X and Y.</span></p><p><span m="191690">And these individual
  PMFs are called the marginal PMFs.</span></p><p><span m="202130">How do we
  find them?</span></p><p><span m="203770">Well, the joint PMF tells us
  everything there is to be</span> <span m="207460">known about the two random
  variables, so it should</span> <span m="209990">contain enough information for
  us to</span> <span m="212579">answer any kind of question.</span></p><p><span
  m="215450">So for example, if we wish to find the probability that the</span>
  <span m="220540">random variable X takes the value of 4, we look at all</span>
  <span m="225660">possible outcomes in which X is equal to 4, and add
  the</span> <span m="231300">probabilities of these
  outcomes.</span></p><p><span m="233170">So in this case, it would be 1/20 plus
  2/20.</span></p><p><span m="240390">So what we're doing is that if we're
  interested in a specific</span> <span m="244850">value of X, the probability
  that X takes on a specific</span> <span m="249790">value, we consider all
  possible pairs associated with</span> <span m="255870">that fixed
  x.</span></p><p><span m="257610">That is, we're considering one column of the
  PMF, and we're</span> <span m="262190">adding the corresponding
  probabilities.</span></p><p><span m="264720">So to find this entry here, let's
  say px(3), what we need</span> <span m="271670">is to add these terms on that
  column.</span></p><p><span m="276010">Similarly, we can find the PMF of the
  random variable Y.</span></p><p><span m="281720">So for example, the
  probability that the random</span> <span m="286220">variable Y takes on a
  value of, let's say, 2, can be found</span> <span m="293360">as
  follows.</span></p><p><span m="295290">You look at the probabilities of all
  pairs associated with</span> <span m="298860">this specific y, and you add
  over the x's.</span></p><p><span m="303080">So we fix Y to have a value of 2,
  and we add over all pairs</span> <span m="309550">in this
  row.</span></p><p><span m="310610">So in this example, it would be 1/20 plus
  3/20, plus 1/20.</span></p><p><span m="318560">Finally, notice that we are
  able to answer the question</span> <span m="323460">that got us motivated in
  the first place.</span></p><p><span m="326090">To find the probability that
  the two random variables take</span> <span m="328620">equal values, we look at
  all the outcomes for which the two</span> <span m="332860">random variables
  indeed take the same numerical values.</span></p><p><span m="336380">And we
  see that it is this event in this diagram, and the</span> <span
  m="340830">probability of that event is going to be 2/20.</span></p><p><span
  m="345390">So in general, once we have available the joint PMF of two</span>
  <span m="349180">random variables, we will be able to answer any
  questions</span> <span m="353520">regarding probabilities of events that have
  to do with</span> <span m="357210">these two random
  variables.</span></p><p><span m="360210">How about more than two random
  variables?</span></p><p><span m="363460">It's just a matter of
  notation.</span></p><p><span m="365140">For example, we can define the joint
  PMF of three random</span> <span m="368380">variables, and you can use the
  same idea for the joint PMF,</span> <span m="371670">let's say, of five, or
  10, or n random variables.</span></p><p><span m="375340">Let's just look at
  the notation for three.</span></p><p><span m="377960">There is a well-defined
  probability that when we carry</span> <span m="380890">out the experiment X, Y
  and Z as random variables take on</span> <span m="385060">certain specific
  values.</span></p><p><span m="387730">So we look at the probability of that
  particular triple, and</span> <span m="391010">we indicate that probability
  with this notation.</span></p><p><span m="394470">Once more, the sub-scripts
  tell us which random variables</span> <span m="398450">we're talking
  about.</span></p><p><span m="399790">And the PMF, of course, is going to be a
  function of this</span> <span m="403300">triple, little x, little y, little z,
  because each triple</span> <span m="406680">in general should have a different
  probability.</span></p><p><span m="410390">Of course, probabilities must
  always add to 1.</span></p><p><span m="413010">So when we consider all triples
  and we add their</span> <span m="415940">corresponding probabilities, we
  should get 1.</span></p><p><span m="419290">And finally, once we have the
  joint PMF, we can again</span> <span m="422370">recover the marginal
  PMF.</span></p><p><span m="425270">For example, to find the probability that
  the random</span> <span m="427690">variable takes on a specific value, little
  x, we consider</span> <span m="431810">all possible triples in which the
  random variable indeed</span> <span m="436960">takes that value, little
  x.</span></p><p><span m="440040">And then we sum over all the possible y's and
  z's that</span> <span m="446180">could go together with this particular
  x.</span></p><p><span m="449810">In the same spirit, to find the probability
  that these two</span> <span m="453800">random variables take on two specific
  values, we consider</span> <span m="458030">all the possible z's that could go
  together with this</span> <span m="462620">(x,y) pair.</span></p><p><span
  m="465000">So this way we're ranging over all outcomes in which X and Y</span>
  <span m="470330">take on these specific values.</span></p><p><span
  m="472080">But Z is free to take any value, and so we consider all</span>
  <span m="476150">those possible values of Z and sum the corresponding</span>
  <span m="479480">probabilities.</span></p><p><span m="482930">Finally, we can
  talk about functions of</span> <span m="485980">multiple random
  variables.</span></p><p><span m="488840">Suppose that we have two random
  variables, x and y, and</span> <span m="491550">that we define a function of
  them.</span></p><p><span m="493650">So this function is, of course, a random
  variable.</span></p><p><span m="497780">And we can find the PMF of this random
  variable if we</span> <span m="503260">know the joint PMF of X and
  Y.</span></p><p><span m="506350">So the PMF, which is the probability that the
  random</span> <span m="508880">variable takes on a specific numerical value,
  that's the</span> <span m="511510">probability that the function of X and Y
  takes on a specific</span> <span m="515789">numerical
  value.</span></p><p><span m="517289">And we can find this probability by
  adding the</span> <span m="522120">probabilities of all (x,y)
  pairs.</span></p><p><span m="532930">Which (x,y) pairs?</span></p><p><span
  m="534360">Those (x,y) pairs for which the value of Z would be equal</span>
  <span m="541890">to this particular number, little z, that we care
  about.</span></p><p><span m="547450">So we collect essentially all possible
  outcomes that make</span> <span m="552380">this event to happen, and we add
  the probabilities of all</span> <span m="556680">those
  outcomes.</span></p><p><span m="558390">Finally, similarly to the case where
  we have a single random</span> <span m="562590">variable and function of it,
  we now can talk about expected</span> <span m="568480">values of functions of
  two random variables, and there is</span> <span m="571925">an expected value
  rule that parallels the expected value</span> <span m="575830">rule that we
  had developed for the case of a</span> <span m="578840">function of this
  form.</span></p><p><span m="580770">The form that the expected value rule
  takes is similar,</span> <span m="585020">and it's quite
  natural.</span></p><p><span m="586430">The interpretation is as
  follows.</span></p><p><span m="589230">With this probability, a
  specific</span> <span m="592160">(x,y) pair will occur.</span></p><p><span
  m="594740">And when that occurs, the value of our random variable</span> <span
  m="598840">is a certain number.</span></p><p><span m="602370">And the
  combination of these two terms gives us a</span> <span m="605000">contribution
  to the expected value.</span></p><p><span m="607110">Now, we consider all
  possible (x,y) pairs that may occur,</span> <span m="611290">and we sum over
  all these (x,y) pairs.</span></p><p>&nbsp;</p>
uid: 93e7014f1662b25def3030fcc4453e12
type: courses
layout: video
---
