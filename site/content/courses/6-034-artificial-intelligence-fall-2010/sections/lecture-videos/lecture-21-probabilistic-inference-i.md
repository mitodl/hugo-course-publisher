---
about_this_resource_text: >-
  <p><strong>Description:</strong> We begin this lecture with basic probability
  concepts, and then discuss belief nets, which capture causal relationships
  between events and allow us to specify the model more simply. We can then use
  the chain rule to calculate the joint probability table.</p>
  <p><strong>Instructor:</strong> Patrick H. Winston</p>
embedded_media:
  - id: Video-YouTube-Stream
    media_location: A6Ud6oUCRak
    parent_uid: 9ec82d943c58e90f2285b48074e1de01
    title: Video-YouTube-Stream
    type: Video
    uid: fcacf258276cfa62c5e171351b7558ce
  - id: Video-iTunesU-MP4
    media_location: >-
      https://itunes.apple.com/us/itunes-u/lecture-21-probabilistic-inference/id765641080?i=194480720
    parent_uid: 9ec82d943c58e90f2285b48074e1de01
    title: Video-iTunes U-MP4
    type: Video
    uid: 40f4cacde1616034ecce2ec79f580d9f
  - id: Video-InternetArchive-MP4
    media_location: 'http://www.archive.org/download/MIT6.034F10/MIT6_034F10_lec21_300k.mp4'
    parent_uid: 9ec82d943c58e90f2285b48074e1de01
    title: Video-Internet Archive-MP4
    type: Video
    uid: 182aab3d308d2c000cf92b9e6ef2a4a2
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/A6Ud6oUCRak/default.jpg'
    parent_uid: 9ec82d943c58e90f2285b48074e1de01
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: bcc1f781046277133c4eb17af94ad606
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: A6Ud6oUCRak
    parent_uid: 9ec82d943c58e90f2285b48074e1de01
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 29154405aab3ff6bc20c930e86dd3523
  - id: A6Ud6oUCRak.srt
    parent_uid: 9ec82d943c58e90f2285b48074e1de01
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-034-artificial-intelligence-fall-2010/lecture-videos/lecture-21-probabilistic-inference-i/A6Ud6oUCRak.srt
    title: 3play caption file
    type: null
    uid: 6429af7ad0aecbfb5706aa44be10323a
  - id: A6Ud6oUCRak.pdf
    parent_uid: 9ec82d943c58e90f2285b48074e1de01
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-034-artificial-intelligence-fall-2010/lecture-videos/lecture-21-probabilistic-inference-i/A6Ud6oUCRak.pdf
    title: 3play pdf file
    type: null
    uid: bbc0d3658c1df7d9ff7d7356866350d3
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 9ec82d943c58e90f2285b48074e1de01
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 80e99e29b13a38e766359a857dc9bd63
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 9ec82d943c58e90f2285b48074e1de01
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 09452c8e2aabf08e0dec918667fee0a1
inline_embed_id: '80665812lecture21:probabilisticinferencei3452966'
parent_uid: 28d36d6426366698bf1ded18c6190be7
related_resources_text: ''
short_url: lecture-21-probabilistic-inference-i
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-034-artificial-intelligence-fall-2010/lecture-videos/lecture-21-probabilistic-inference-i
title: 'Lecture 21: Probabilistic Inference I'
transcript: >-
  <p><span m='9082'>PATRICK WINSTON: Here we are, down to the final
  sprint.</span> </p><p><span m='13380'>Three to go.</span> </p><p><span
  m='15480'>And we're going to take some of the last three, maybe two</span>
  <span m='17955'>of the last three, to talk a little bit about stuff
  having</span> <span m='22640'>to do with probabilistic approaches--</span>
  <span m='24920'>use of probability in artificial intelligence.</span>
  </p><p><span m='28400'>Now, for many of you, this will be kind of a
  review,</span> <span m='31060'>because I know many of you learned about
  probability over</span> <span m='33370'>the [? sand ?] table and every year
  since then.</span> </p><p><span m='37230'>But maybe we'll put another little
  twist into it,</span> <span m='39780'>especially toward the end of the hour
  when we get into a</span> <span m='42340'>discussion of that which has come to
  be called belief nets.</span> </p><p><span m='52160'>But first, I was driving
  in this morning, and I was quite</span> <span m='58530'>astonished to see, as
  I drove in, this thing here.</span> </p><p><span m='65670'>And my first
  reaction was, oh my god, it's the world's</span> <span m='69720'>greatest
  hack.</span> </p><p><span m='72710'>And then I decided, well, maybe it's a
  piece of art.</span> </p><p><span m='79170'>So I'd like to address the
  question of how I could come</span> <span m='82420'>to grips with that
  issue.</span> </p><p><span m='83890'>There's a distinct possibility that this
  thing is a</span> <span m='88530'>consequence of a hat, possibly the result
  of</span> <span m='92070'>some kind of art show.</span> </p><p><span
  m='96740'>And in any event, some sort of statue appeared, and statues</span>
  <span m='103960'>don't usually appear like that.</span> </p><p><span
  m='106190'>So I got the possibility of thinking about how all these</span>
  <span m='108710'>things might occur together or not occur together.</span>
  </p><p><span m='114150'>So the natural thing is to build myself some sort
  of</span> <span m='120670'>table to keep track of my observations.</span>
  </p><p><span m='125640'>So I have three columns in my table.</span>
  </p><p><span m='128478'>I've got the possibility of a statue appearing, a
  hack</span> <span m='133680'>having occurred, and some sort of art
  show.</span> </p><p><span m='137960'>And so I can make a table of all the
  combinations of those</span> <span m='142090'>things that might appear.</span>
  </p><p><span m='148290'>And I happen to have already guessed that there are
  going</span> <span m='152520'>to be eight rows in my table.</span>
  </p><p><span m='156010'>So it's going to look like this.</span> </p><p><span
  m='164430'>And this is the set of combinations in this row where</span> <span
  m='167460'>none of that occurs at all.</span> </p><p><span m='170110'>And down
  here is the situation where all of</span> <span m='173030'>those things
  occur.</span> </p><p><span m='174150'>After all, it's possible that we can
  have an art show and</span> <span m='177620'>have a hack be a legitimate
  participant in the art show.</span> </p><p><span m='180320'>That's why we have
  that final row.</span> </p><p><span m='183440'>So we have all manner of
  combinations in between.</span> </p><p><span m='188810'>So those are those
  combinations.</span> </p><p><span m='191063'>Then we have F, F, T, T, F, F, T,
  T, F, T, F, T, F, T, F, T.</span> </p><p><span m='201880'>So it's plain that
  the number of rows in the table, or these</span> <span m='206150'>binary
  possibilities, is 2 to the number of variables.</span> </p><p><span
  m='211820'>And that could be a big number.</span> </p><p><span m='213610'>In
  fact, I'd love to do a bigger example, but I don't</span> <span
  m='218329'>have the patience to do it.</span> </p><p><span m='220795'>But
  anyhow, what we might do is in order to figure out how</span> <span
  m='224940'>likely any of these combinations are, is we might</span> <span
  m='227970'>have observed the area outside the student center and rest
  of</span> <span m='230590'>campus over a long period of time and keep track of
  what</span> <span m='234370'>happens on 1,000 days.</span> </p><p><span
  m='238020'>Or maybe 1,000 months or 1,000 years.</span> </p><p><span
  m='241230'>I don't know.</span> </p><p><span m='242730'>The trouble is, these
  events don't happen very often.</span> </p><p><span m='244980'>So the period
  of time that I use for measurement needs to</span> <span m='248690'>be fairly
  long.</span> </p><p><span m='249440'>Probably a day is not short
  enough.</span> </p><p><span m='250950'>But in any case, I can keep a tally of
  how often I see these</span> <span m='256720'>various combinations.</span>
  </p><p><span m='258420'>So this one might be, for example, 405, this one
  might</span> <span m='262330'>be 45, this one might be 225, this one
  might</span> <span m='266820'>be 40, and so on.</span> </p><p><span
  m='270000'>And so having done all those measurements, kept track of</span>
  <span m='272720'>all that data, then I could say, well, the probability</span>
  <span m='277340'>that at any given time period one of these things
  occurs</span> <span m='285350'>will just be the frequency--</span> <span
  m='288280'>the number of tallies divided by the</span> <span m='289670'>total
  number of tallies.</span> </p><p><span m='291760'>So that would be a number
  between 0 and 1.</span> </p><p><span m='296330'>So that's the probability for
  each of these events.</span> </p><p><span m='300990'>And it's readily
  calculated from my data.</span> </p><p><span m='303690'>And once I do that,
  then I can say that I got myself a joint</span> <span m='309020'>probability
  table, and I could perform all manner of miracles</span> <span
  m='314160'>using that joint probability table.</span> </p><p><span
  m='317220'>So let me perform a few of those miracles,</span> <span
  m='318950'>while we're at it.</span> </p><p><span m='328240'>There's the
  table.</span> </p><p><span m='329730'>And now, what I want to do is I want to
  count up the</span> <span m='336010'>probability in all the rows where the
  statue appears.</span> </p><p><span m='339280'>So that's going to be the
  probability</span> <span m='341740'>of the statue appearing.</span>
  </p><p><span m='343770'>So I'll just check off those four boxes there.</span>
  </p><p><span m='347990'>And it looks like the probability of the statue</span>
  <span m='349800'>appearing is about 0.355 in my model.</span> </p><p><span
  m='354210'>I don't think it's quite that frequent, but this is a</span> <span
  m='356320'>classroom exercise, right?</span> </p><p><span m='357590'>So I can
  make up whatever numbers I want.</span> </p><p><span m='364560'>Now, I could
  say, well, what's the probability of a statue</span> <span
  m='369170'>occurring given that there's an art show?</span> </p><p><span
  m='375220'>Well, I can limit my tallies to those in which art show is</span>
  <span m='378180'>true, like so.</span> </p><p><span m='382030'>And in that
  case, the probability</span> <span m='383210'>has just zoomed up.</span>
  </p><p><span m='384410'>So if I know there's an art show, there's a much
  higher</span> <span m='386490'>probability that a statue will appear.</span>
  </p><p><span m='393540'>And if I know there's a hack as well as an art show
  going</span> <span m='397400'>on, it goes up higher still to 0.9.</span>
  </p><p><span m='401750'>We can also do other kinds of things.</span>
  </p><p><span m='403180'>For example, we can go back to the original
  table.</span> </p><p><span m='406060'>And instead of counting up the
  probability we've got a</span> <span m='413450'>statue, as we just did, we're
  going to calculate the</span> <span m='416310'>probability that there is an
  art show.</span> </p><p><span m='419680'>I guess that would be that one and
  that one, not that one,</span> <span m='422800'>but that one.</span>
  </p><p><span m='423890'>So the probability there's an art show is one chance
  in 10.</span> </p><p><span m='429310'>Or we can do the same thing with a
  hack.</span> </p><p><span m='431030'>In that case, we get that one off, that
  one on, that one</span> <span m='436085'>off, that one on, that one off, that
  one</span> <span m='437565'>on, that one off.</span> </p><p><span
  m='438930'>So the probability of a hack on any given time period is</span>
  <span m='441420'>about 50-50.</span> </p><p><span m='445230'>So I've cooked up
  this little demo so it does the "ands" of</span> <span m='447750'>all these
  things.</span> </p><p><span m='448240'>It could do "ors," too, with a little
  more work.</span> </p><p><span m='449980'>But these are just the "ands" of
  these various combinations.</span> </p><p><span m='453130'>Then you can ask
  more complicated questions, like</span> <span m='455270'>for example, you
  could say, what is the probability of a</span> <span m='458130'>hack given
  that there's a statue?</span> </p><p><span m='463540'>And that would be
  limiting the calculations to those rows in</span> <span m='468620'>which the
  statue thing is true.</span> </p><p><span m='472840'>And then what I get is
  0.781.</span> </p><p><span m='477430'>Now, what would happen to the
  probability that it's a hack</span> <span m='484010'>if I know that there's an
  art show?</span> </p><p><span m='487930'>Will that number go up or
  down?</span> </p><p><span m='492580'>Well, let's try it.</span> </p><p><span
  m='495010'>Ah, it went down.</span> </p><p><span m='497600'>So that's sort of
  because the existence of the art show sort</span> <span m='501530'>of explains
  why the statue might be there.</span> </p><p><span m='507810'>Now, just for
  fun, I'm going to switch to another</span> <span m='509660'>situation, very
  similar.</span> </p><p><span m='511610'>And the situation here is that a
  neighbor's dog often barks.</span> </p><p><span m='519100'>It might be because
  of a burglar.</span> </p><p><span m='520770'>It might be because of a
  raccoon.</span> </p><p><span m='522480'>Sometimes, there's a burglar and a
  raccoon.</span> </p><p><span m='525660'>Sometimes, the damn dog just
  barks.</span> </p><p><span m='528900'>So let's do some calculations there and
  calculate the</span> <span m='535370'>probability that a raccoon is true,
  similar to</span> <span m='538310'>what we did last time.</span> </p><p><span
  m='540660'>Looks like on any given night--</span> <span m='543240'>it's kind
  of a wooded are-- there's a high probability of</span> <span m='545550'>a
  raccoon showing up.</span> </p><p><span m='548600'>And then we can ask, well,
  what is the probability of the</span> <span m='556130'>dog barking given that
  a raccoon shows up?</span> </p><p><span m='559670'>Well, in that case, we want
  to just limit the number of rows</span> <span m='561960'>to those where a
  raccoon--</span> <span m='563190'>or where the dog is barking.</span>
  </p><p><span m='566430'>Looks like the probability of the dog barking,
  knowing</span> <span m='570320'>nothing else, is about [? 3/7. ?]</span> <span
  m='576790'>But now we want to know the probability of the raccoon--</span>
  <span m='580290'>that's these guys here need to get checked.</span>
  </p><p><span m='583030'>These are off.</span> </p><p><span m='584570'>So
  that's the probability of a raccoon.</span> </p><p><span m='589400'>Did I get
  that right?</span> </p><p><span m='592490'>Oh, that's probability of a
  burglar.</span> </p><p><span m='594340'>Sorry, that was too hard.</span>
  </p><p><span m='597540'>So let me go back and calculate--</span> <span
  m='599550'>I want to get the probability of a raccoon.</span> </p><p><span
  m='602050'>That's true, false, true, false, true, false, true.</span>
  </p><p><span m='610930'>So the probability of a raccoon, as I</span> <span
  m='612560'>said before is 0.5.</span> </p><p><span m='614570'>Now, what
  happens to that probability if I know the dog</span> <span m='618220'>is
  barking?</span> </p><p><span m='620050'>Well, all I need to do is limit my
  rows to those where</span> <span m='623690'>the dog is barking, those bottom
  four.</span> </p><p><span m='626510'>And I'll click that there, and you'll
  notice all these</span> <span m='628800'>tallies up above the midpoint have
  gone to zero, because</span> <span m='633690'>we're only considering those
  cases</span> <span m='635380'>where the dog is barking.</span> </p><p><span
  m='637590'>In that case, the probability that there's a raccoon--</span> <span
  m='640140'>just the number of tallies over the</span> <span m='641500'>total
  number of tallies--</span> <span m='643740'>gee, I guess it's 225 plus 50
  divided by 370.</span> </p><p><span m='648150'>That turns out to be
  0.743.</span> </p><p><span m='651050'>So about 75% of the time, the dog
  barking is accounted for--</span> <span m='656400'>well, the probability of a
  raccoon under those conditions</span> <span m='659680'>is pretty high.</span>
  </p><p><span m='661560'>And now, once again, I'm going to ask, well, what is
  the</span> <span m='664560'>probability of a raccoon, given that the dog is
  barking</span> <span m='668810'>and there's a burglar?</span> </p><p><span
  m='672170'>Any guess what will happen there?</span> </p><p><span m='674040'>We
  did this once before with the statue.</span> </p><p><span
  m='678120'>Probability first went up when we saw the statue and then</span>
  <span m='680680'>went down when we saw another explanation.</span>
  </p><p><span m='683340'>Here's this one here.</span> </p><p><span
  m='684860'>Wow, look at that.</span> </p><p><span m='685930'>It went back to
  its original condition, its a priori</span> <span
  m='689830'>probability.</span> </p><p><span m='692120'>So somehow, the
  existence of the burglar and the dog</span> <span m='695850'>barking means
  that the probability of a raccoon is</span> <span m='699740'>just what it was
  before we started this game.</span> </p><p><span m='702402'>So those are kind
  of interesting questions, and</span> <span m='704350'>there's a lot we can do
  when we have this table by way of</span> <span m='707090'>those kinds of
  calculations.</span> </p><p><span m='710220'>And in fact, the whole miracle of
  probabilistic inference is</span> <span m='714760'>right in front of
  us.</span> </p><p><span m='715480'>It's the table.</span> </p><p><span
  m='718130'>So why don't we go home?</span> </p><p><span m='720060'>Well,
  because there's a little problem with this table--</span> <span
  m='723980'>with these two tables that I've shown you by way of</span> <span
  m='726370'>illustration.</span> </p><p><span m='728210'>And the problem is
  that there are a lot of rows.</span> </p><p><span m='737250'>And I had a hard
  time making up those numbers.</span> </p><p><span m='739160'>I didn't have the
  patience to wait and make observations.</span> </p><p><span m='741910'>That
  would take too long.</span> </p><p><span m='743580'>So I had to kind of make
  some guesses.</span> </p><p><span m='745910'>And I could kind of manage it
  with eight rows--</span> <span m='749730'>those up there.</span> </p><p><span
  m='751290'>I could put in some tallies.</span> </p><p><span m='753740'>It
  wasn't that big of a deal.</span> </p><p><span m='755670'>So I got myself all
  those eight numbers</span> <span m='759330'>up there like that.</span>
  </p><p><span m='762760'>And similarly, for the art show calculations,
  produced</span> <span m='768130'>eight numbers.</span> </p><p><span
  m='770000'>But what if I added something else to the mix?</span> </p><p><span
  m='773250'>What if I added the day of the week or</span> <span m='777310'>what
  I had for breakfast?</span> </p><p><span m='779530'>Each of those things would
  double the number of rows of</span> <span m='783000'>their binary
  variables.</span> </p><p><span m='786350'>So if I have to consider 10
  influences all working</span> <span m='792860'>together, then I'd have 2 to
  the 10th.</span> </p><p><span m='794790'>I'd have 1,000 numbers to deal
  with.</span> </p><p><span m='798810'>And that would be hard.</span>
  </p><p><span m='801020'>But if I had a joint probability table, then I
  can</span> <span m='803110'>do these kinds of miracles.</span> </p><p><span
  m='804850'>But Dave, if I could have this little projector now, please.</span>
  </p><p><span m='811570'>I just want to emphasize that although we're talking
  about</span> <span m='814780'>probabilistic inference, and it's a very
  powerful tool,</span> <span m='818430'>it's not the only tool we need in our
  bag.</span> </p><p><span m='821500'>Trouble with most ideas in artificial
  intelligence is</span> <span m='824080'>that their hardcore proponents think
  that they're the only</span> <span m='826630'>thing to do.</span> </p><p><span
  m='828420'>And probabilistic inference has a role to play in</span> <span
  m='832720'>developing a theory of human intelligence.</span> </p><p><span
  m='834550'>And it certainly has a practical value, but it's not</span> <span
  m='836880'>the only thing.</span> </p><p><span m='838070'>And to illustrate
  that point, I'd like to imagine for a few</span> <span m='841300'>moments that
  MIT were founded in 1861 BC instead of 1861 AD.</span> </p><p><span
  m='850920'>And if that were so, then it might be the case that there</span>
  <span m='855660'>would be a research program on what floats.</span>
  </p><p><span m='859220'>And this, of course, would be a problem in
  experimental</span> <span m='861980'>physics, and we could imagine that those
  people back there</span> <span m='865880'>in that early MIT would, being
  experimentally minded, try</span> <span m='869800'>some things.</span>
  </p><p><span m='870900'>Oh, I didn't know that's what happened.</span>
  </p><p><span m='873210'>It looks like chalk floats.</span> </p><p><span
  m='875660'>Here's a rock.</span> </p><p><span m='878384'>No, it didn't
  float.</span> </p><p><span m='880710'>Here's some money.</span> </p><p><span
  m='883300'>Doesn't float.</span> </p><p><span m='884910'>Here's a
  pencil.</span> </p><p><span m='888630'>No, it doesn't float.</span>
  </p><p><span m='889600'>Here's a pen.</span> </p><p><span m='891690'>Here's a
  piece of tin foil I got from Kendra.</span> </p><p><span m='894075'>That
  floats.</span> </p><p><span m='895490'>That's a metal.</span> </p><p><span
  m='896130'>The other stuff's metal, too.</span> </p><p><span m='897180'>Now
  I'm really getting confused.</span> </p><p><span m='898830'>Here's a little
  wad of paper.</span> </p><p><span m='901530'>Here's a cell ph-- no,
  actually,</span> <span m='904670'>I've tried that before.</span> </p><p><span
  m='905660'>They don't float.</span> </p><p><span m='906910'>And they also
  don't work afterward, either.</span> </p><p><span m='910950'>I don't need to
  do any of that in the MIT of 1861 AD and</span> <span m='916840'>beyond,
  because I know that Archimedes</span> <span m='919330'>worked this all
  out.</span> </p><p><span m='920410'>And all I have to do is measure the volume
  of the</span> <span m='922300'>stuff, divide that by the weight, and if that
  ratio is</span> <span m='927380'>big enough, then the thing will float.</span>
  </p><p><span m='929970'>But back in the old days, I would have to try a lot
  of</span> <span m='932220'>stuff and make a big table, taking into account
  such</span> <span m='935470'>factors as how hard it is, how big it is, how
  heavy it is,</span> <span m='940400'>whether it's alive or not.</span>
  </p><p><span m='942740'>Most things that are alive float.</span> </p><p><span
  m='944540'>Some don't.</span> </p><p><span m='946290'>Fish don't, for
  instance.</span> </p><p><span m='949030'>So it would be foolhardy to do
  that.</span> </p><p><span m='952790'>That's sort of a probabilistic
  inference.</span> </p><p><span m='956580'>On the other hand, there are lots of
  things where I don't</span> <span m='958430'>know all the stuff I need to know
  in order to make the</span> <span m='960480'>calculation.</span> </p><p><span
  m='961600'>I know all the stuff I need to know in order to decide if</span>
  <span m='963490'>something floats, but not all the stuff I need to know
  in</span> <span m='966530'>order, for example, to decide if the child of a
  Republican</span> <span m='974210'>is likely to be a Republican.</span>
  </p><p><span m='977860'>There are a lot of subtle influences there, and it
  is</span> <span m='980390'>the case that the children of Republicans and the
  children</span> <span m='983365'>of Democrats are more likely to share the
  political party</span> <span m='986010'>of their parents.</span> </p><p><span
  m='988360'>But I don't have any direct way of calculating whether</span> <span
  m='990280'>that will be true or not.</span> </p><p><span m='992310'>All I can
  do in that case is what I've done over here, is</span> <span m='995590'>do
  some measurements, get some frequencies, take some</span> <span
  m='998950'>snapshots of the way the world is and incorporate that into
  a</span> <span m='1002440'>set of probabilities that can help me determine if
  any given</span> <span m='1005630'>parent is a Republican, given that I've
  observed the voting</span> <span m='1010100'>behavior their children.</span>
  </p><p><span m='1012930'>So probability has a place, but it's not the</span>
  <span m='1016010'>only tool we need.</span> </p><p><span m='1017760'>And that
  is an important preamble to all the stuff</span> <span m='1020250'>we're going
  to do today.</span> </p><p><span m='1022200'>Now, we're really through,
  because this joint probability</span> <span m='1024770'>table is all that
  there is to it, except for the fact we</span> <span m='1028240'>can't either
  record all those numbers, and it becomes</span> <span m='1033290'>quickly a
  pain to guess at them.</span> </p><p><span m='1036579'>There are two ways to
  think about all this.</span> </p><p><span m='1039348'>We can think about these
  probabilities as probabilities</span> <span m='1042880'>that come out of
  looking at some data.</span> </p><p><span m='1045230'>That's a frequentist
  view of the probabilities.</span> </p><p><span m='1048180'>Or we could say,
  well, we can't do those measurements.</span> </p><p><span m='1050310'>So I can
  just make them up.</span> </p><p><span m='1052500'>That's sort of the
  subjective view of where these</span> <span m='1054820'>probabilities come
  from.</span> </p><p><span m='1057530'>And in some cases, some people like to
  talk about natural</span> <span m='1061480'>propensities, like in quantum
  mechanics.</span> </p><p><span m='1064790'>But for our purposes, we either
  make them up, or we do</span> <span m='1067330'>some tallying.</span>
  </p><p><span m='1069140'>Trouble is, we can't deal with this kind of
  table.</span> </p><p><span m='1072440'>So as a consequence of not being able
  to deal with this</span> <span m='1074920'>kind of table, a gigantic industry
  has emerged for</span> <span m='1080020'>dealing with probabilities without
  the need to work up</span> <span m='1084370'>this full table.</span>
  </p><p><span m='1086340'>And that's where we're going to go for</span> <span
  m='1087570'>the rest of the hour.</span> </p><p><span m='1092620'>And here's
  the path we're going to take.</span> </p><p><span m='1095408'>We're going to
  talk about some basic overview of basic</span> <span
  m='1098050'>probability.</span> </p><p><span m='1099380'>Then we're going to
  move ourselves step by step toward</span> <span m='1103080'>the so-called
  belief networks, which make it possible to make</span> <span m='1106500'>this
  a practical tool.</span> </p><p><span m='1109550'>So let us begin.</span>
  </p><p><span m='1111120'>The first thing is basic probability.</span>
  </p><p><span m='1113950'>Let us say basic.</span> </p><p><span m='1119270'>And
  basic probability--</span> <span m='1121060'>all probability flows from a
  small number of axioms.</span> </p><p><span m='1124830'>We have the
  probability of some event a has got to be</span> <span m='1130730'>greater
  than 0 and less than 1.</span> </p><p><span m='1134400'>That's axiom number
  one.</span> </p><p><span m='1139460'>In a binary world, things have a
  probability of being true.</span> </p><p><span m='1142745'>Some have a
  probability of being false.</span> </p><p><span m='1145190'>But the true event
  doesn't have any possibility of being</span> <span m='1147530'>anything other
  than true, so the probability of true is</span> <span m='1152470'>equal to 1,
  and the probability of false--</span> <span m='1156850'>the false event, the
  false condition--</span> <span m='1160480'>has no possibility of being true,
  so that's 0.</span> </p><p><span m='1164430'>Then the third of the axioms of
  probability is that the</span> <span m='1171190'>probability of a plus the
  probability of b minus the</span> <span m='1179760'>probability of a and b is
  equal to the</span> <span m='1187510'>probability of a or b.</span>
  </p><p><span m='1194040'>Yeah, that makes sense, right?</span> </p><p><span
  m='1196380'>I guess it would make more sense if I didn't switch my</span>
  <span m='1198900'>notation in midstream--</span> <span m='1200730'>a and
  b.</span> </p><p><span m='1203970'>So those are the axioms that mathematicians
  love to start</span> <span m='1206290'>up that way, and they can derive
  everything there is to</span> <span m='1208180'>derive from that.</span>
  </p><p><span m='1209040'>But I never can deal with stuff that way.</span>
  </p><p><span m='1212210'>I have to draw a picture and think of this stuff in a
  more</span> <span m='1214270'>intuitionist type of way.</span> </p><p><span
  m='1216530'>So that's the formal approach to dealing with probability,</span>
  <span m='1220530'>and it's mirrored by intuitions that have to do</span> <span
  m='1228810'>with discussions of spaces, like so, in which we have</span> <span
  m='1234410'>circles, or areas, representing a and b.</span> </p><p><span
  m='1242120'>And to keep my notation consistent,</span> <span m='1245260'>I'll
  make those lowercase.</span> </p><p><span m='1249330'>So you can think of
  those as spaces of all possible worlds</span> <span m='1253580'>in which these
  things might occur.</span> </p><p><span m='1254990'>Or you can think of them
  as sample spaces.</span> </p><p><span m='1258100'>But in any event, you
  associate with the probability</span> <span m='1261290'>of a the size of this
  area here relative to the total</span> <span m='1266330'>area in the
  rectangle--</span> <span m='1268860'>the universe.</span> </p><p><span
  m='1270850'>So the probability of a is the size of this circle divided
  by</span> <span m='1275570'>the size of this rectangle in this picture.</span>
  </p><p><span m='1278690'>So now all these axioms make sense.</span>
  </p><p><span m='1282210'>The probability that a is certain is just when
  that</span> <span m='1285250'>fills up the whole thing, and there's no other
  place for a</span> <span m='1289010'>sample to be, that means it has to be
  a.</span> </p><p><span m='1291590'>So that probability goes all the way up to
  1.</span> </p><p><span m='1295570'>On the other hand, if the size of a is just
  an infinitesimal</span> <span m='1299450'>dot, then the chances of landing in
  that world is 0.</span> </p><p><span m='1304230'>That's the bound on the other
  end.</span> </p><p><span m='1306900'>So this--</span> <span m='1308860'>axiom
  number one-- makes sense in terms of that</span> <span m='1310900'>picture
  over there.</span> </p><p><span m='1312250'>Likewise, axiom number two.</span>
  </p><p><span m='1314290'>What about axiom number three?</span> </p><p><span
  m='1317500'>Does that make sense in terms of all this stuff?</span>
  </p><p><span m='1323150'>And the answer is, sure, because we can just look
  at</span> <span m='1328430'>those areas with a little bit of colored
  chalk.</span> </p><p><span m='1332850'>And so the probability of a is just
  this area here.</span> </p><p><span m='1336920'>The probability of b is this
  area here.</span> </p><p><span m='1341300'>And if we want to know the
  probability that we're in</span> <span m='1343330'>either a or b, then we just
  have to add up those areas.</span> </p><p><span m='1347700'>But when we add up
  those areas, this intersection part</span> <span m='1350040'>is added in
  twice.</span> </p><p><span m='1352260'>So we've got to subtract that off in
  order to make this</span> <span m='1355675'>thing make a rational equation, so
  that makes sense.</span> </p><p><span m='1358300'>And axiom three makes sense,
  just as</span> <span m='1360230'>axioms one and two did.</span> </p><p><span
  m='1363110'>So that's all there is to basic probability.</span> </p><p><span
  m='1365370'>And now you could do all sorts of algebra on that, and it's</span>
  <span m='1368060'>elegant, because it's like circuit theory or</span> <span
  m='1371420'>electromagnetism, because from a very</span> <span
  m='1374240'>small number of axioms--</span> <span m='1375970'>in this case
  three--</span> <span m='1377730'>you can build an elegant mathematical
  system.</span> </p><p><span m='1382180'>And that's what probability subjects
  do.</span> </p><p><span m='1383910'>But we're not going to go there, because
  we're sort of</span> <span m='1386760'>focused on getting down to a point
  where we can deal with</span> <span m='1390740'>that joint probability table
  that we</span> <span m='1392570'>currently can't deal with.</span>
  </p><p><span m='1394260'>So we're not going to go into a whole lot of algebra
  with</span> <span m='1397050'>these things.</span> </p><p><span
  m='1397810'>Just what we need in order to go through that network.</span>
  </p><p><span m='1402620'>So the next thing we need to deal with is
  conditional</span> <span m='1405440'>probability.</span> </p><p><span
  m='1407220'>And whereas those are axioms, this is a definition.</span>
  </p><p><span m='1415100'>We say that the probability of a given b is equal to,
  by</span> <span m='1421620'>definition, the probability of a and b.</span>
  </p><p><span m='1426760'>I'm using that common notation to mean
  [INAUDIBLE]</span> <span m='1428880'>as is conventional in the field.</span>
  </p><p><span m='1431760'>And then we're going to divide that by the
  probability of B.</span> </p><p><span m='1437190'>You can take that as a
  definition, and then it's just</span> <span m='1439390'>a little bit of
  mysterious algebra.</span> </p><p><span m='1441970'>Or you could do like we
  did up there and take an intuitionist</span> <span m='1445600'>approach and
  ask what that stuff means in terms of a</span> <span m='1453100'>circle
  diagram and some sort of space.</span> </p><p><span m='1457560'>And let's see,
  what does that mean?</span> </p><p><span m='1458960'>It means that we're
  trying to restrict the probability of a</span> <span m='1463320'>to those
  circumstances where b is known to be so.</span> </p><p><span m='1469370'>And
  we're going to say that--</span> <span m='1473080'>we've got this part here,
  and then we've got the</span> <span m='1477810'>intersection of a with
  b.</span> </p><p><span m='1481370'>And so it does make sense as a definition,
  because it says</span> <span m='1484680'>that if you've got b, then the
  probability that you're going</span> <span m='1487210'>to get a is the size of
  that intersection--</span> <span m='1490190'>the pink and orange
  stuff--</span> <span m='1492140'>divided by the whole of b.</span>
  </p><p><span m='1495240'>So it's as if we restricted the universe of
  consideration</span> <span m='1498450'>to just that part of the original
  universe</span> <span m='1500950'>as covered by b.</span> </p><p><span
  m='1503220'>So that makes sense as a definition.</span> </p><p><span
  m='1507370'>And we can rewrite that, of course, as P of a and b is</span>
  <span m='1514430'>equal to the probability of a given b times the</span> <span
  m='1519190'>probability of b.</span> </p><p><span m='1523740'>That's all basic
  stuff.</span> </p><p><span m='1527370'>Now, we do want to do a little bit of
  algebra here, because I</span> <span m='1531370'>want to consider not just two
  cases, but what if we divide</span> <span m='1534570'>this space up into three
  parts?</span> </p><p><span m='1537960'>Then we'll say that the probability of
  a, b, and c is</span> <span m='1544310'>equal to what?</span> </p><p><span
  m='1548900'>Well, there are lots of ways to think about that.</span>
  </p><p><span m='1551000'>But one way to think about it is that we are
  restricting the</span> <span m='1554360'>universe to that part of the world
  where b</span> <span m='1556410'>and c are both true.</span> </p><p><span
  m='1559530'>So let's say that y is equal to b and c--</span> <span
  m='1568330'>the intersection of b and c, where a and b are both true.</span>
  </p><p><span m='1572980'>Then we can use this formula over here to say
  that</span> <span m='1578570'>probability of a, b, and c is equal to the
  probability of a</span> <span m='1584270'>and y, which is equal to the
  probability of a given y times</span> <span m='1593670'>the probability of
  y.</span> </p><p><span m='1596090'>And then we can expand that back out and
  say that P of a</span> <span m='1602260'>given b and c is equal to the
  probability--</span> <span m='1608020'>sorry, times the probability of y, but
  y is equal to the</span> <span m='1612500'>probability of b and c, like
  so.</span> </p><p><span m='1620990'>Ah, but wait--</span> <span m='1622720'>we
  can run this idea over that one, too, and we can say that</span> <span
  m='1626365'>this whole works is equal to the probability of a given b</span>
  <span m='1629760'>and c times the probability of b given c times the</span>
  <span m='1636130'>probability of c.</span> </p><p><span m='1639480'>And now,
  when we stand back and let that sing to us, we</span> <span m='1642086'>can
  see that some magic is beginning to happen here,</span> <span
  m='1645010'>because we've taken this probability of all things</span> <span
  m='1649660'>being so, and we've broken up into a product of three</span> <span
  m='1654850'>probabilities.</span> </p><p><span m='1657020'>The first two are
  conditional probabilities, so they're</span> <span m='1659150'>really all
  conditional probabilities.</span> </p><p><span m='1660690'>The last one's
  conditional on nothing.</span> </p><p><span m='1663530'>But look what happens
  as we go from left to right.</span> </p><p><span m='1666405'>a is dependent on
  two things.</span> </p><p><span m='1669220'>b is only dependent on one thing
  and nothing to the left.</span> </p><p><span m='1672910'>c is dependent on
  nothing and nothing to the left.</span> </p><p><span m='1677040'>So you can
  sense a generalization coming.</span> </p><p><span m='1680890'>So let's write
  it down.</span> </p><p><span m='1691820'>So let's go from here over to here
  and say that the</span> <span m='1697530'>probability of a whole bunch of
  things--</span> <span m='1699970'>x1 through x10--</span> <span m='1705250'>is
  equal to some product of probabilities.</span> </p><p><span m='1708675'>We'll
  let the index i run from n to 1.</span> </p><p><span m='1712760'>Probability
  of x to the last one in the series, conditioned</span> <span m='1717680'>on
  all the other ones--</span> <span m='1719060'>sorry, that's probability of i,
  i minus 1</span> <span m='1724235'>down to x1 like so.</span> </p><p><span
  m='1729040'>And for the first one in this product, i will be equal to
  n.</span> </p><p><span m='1732950'>For the second one, i will be equal to n
  minus 1.</span> </p><p><span m='1736160'>But you'll notice that as I go from n
  toward 1, these</span> <span m='1740740'>conditionals get smaller--</span>
  <span m='1742340'>the number of things on condition get smaller, and</span>
  <span m='1746740'>none of these things are on the left.</span> </p><p><span
  m='1751930'>They're only stuff that I have on the right.</span> </p><p><span
  m='1755190'>So what I mean to say is all of these things have an index</span>
  <span m='1758690'>that's smaller than this index.</span> </p><p><span
  m='1761240'>None of the ones that have a higher index are appearing in</span>
  <span m='1763930'>that conditional.</span> </p><p><span m='1765870'>So it's a
  way of taking a probability of the end of a</span> <span m='1768900'>whole
  bunch of things and writing it as a product of</span> <span
  m='1772180'>conditional probabilities.</span> </p><p><span m='1774690'>So
  we're making good progress.</span> </p><p><span m='1776000'>We've done
  one.</span> </p><p><span m='1778010'>We've done two.</span> </p><p><span
  m='1779420'>And now we've done three, because this</span> <span m='1781220'>is
  the chain rule.</span> </p><p><span m='1787850'>And we're about halfway
  through our diagram, halfway</span> <span m='1791340'>to the point where we
  can do something fun.</span> </p><p><span m='1794710'>But we still have a
  couple more concepts to deal with,</span> <span m='1796900'>and the next
  concept is the concept of conditional</span> <span
  m='1799960'>probability.</span> </p><p><span m='1802730'>So that's all this
  stuff up here--</span> <span m='1806400'>oops.</span> </p><p><span
  m='1810860'>All this stuff here is the definition of conditional</span> <span
  m='1813740'>probability.</span> </p><p><span m='1819800'>And now I want to go
  to the definition of independence.</span> </p><p><span m='1844800'>So that's
  another definitional deal.</span> </p><p><span m='1846870'>But it's another
  definitional deal that makes some sense</span> <span m='1849560'>with a
  diagram as well.</span> </p><p><span m='1851940'>So the definition goes like
  this.</span> </p><p><span m='1859080'>We say that P of a given b is equal to P
  of a if a</span> <span m='1870640'>independent of b.</span> </p><p><span
  m='1880480'>So that says that the probability of a doesn't</span> <span
  m='1883690'>depend on what's going on with b.</span> </p><p><span
  m='1886980'>It's the same either way.</span> </p><p><span m='1889520'>So it's
  independent.</span> </p><p><span m='1890630'>b doesn't matter.</span>
  </p><p><span m='1893310'>So what does that look like if we try to do an</span>
  <span m='1895550'>intuitionist diagram?</span> </p><p><span m='1898490'>Well,
  let's see.</span> </p><p><span m='1902809'>Here's a.</span> </p><p><span
  m='1904300'>Here's b.</span> </p><p><span m='1906440'>Now, the probability of
  a given b--</span> <span m='1910890'>well, let's see.</span> </p><p><span
  m='1911890'>That must be this part here divided by this part here.</span>
  </p><p><span m='1924060'>So the ratio of those areas is the probability of a
  given b.</span> </p><p><span m='1928760'>So that's the probability of this way
  divided by the</span> <span m='1936300'>probability of both ways.</span>
  </p><p><span m='1944090'>So what's the probability of a in terms of these
  areas?</span> </p><p><span m='1948380'>Well, probability of a in terms of
  these areas is the</span> <span m='1952000'>probability--</span> <span
  m='1954240'>let's see, have I got this right?</span> </p><p><span
  m='1955680'>I've got this upside down.</span> </p><p><span m='1961610'>The
  probability of a given b is the probability of the</span> <span
  m='1964790'>stuff in the intersection--</span> <span m='1966000'>so that's
  both ways--</span> <span m='1969810'>divided by the probability of the stuff
  in b, which</span> <span m='1973460'>is going this way.</span> </p><p><span
  m='1978620'>And let's see, the probability of a not conditioned on</span>
  <span m='1983040'>anything except being in this universe is all these
  hash</span> <span m='1988510'>marks, like so, divided by the universe.</span>
  </p><p><span m='2001170'>So when we say that something's independent,
  it</span> <span m='2003530'>means that those two ratios are the same.</span>
  </p><p><span m='2008170'>That's all it means in the intuitionist's point of
  view.</span> </p><p><span m='2010610'>So it says that this little area here
  divided by this</span> <span m='2013710'>whole area is the same as this whole
  area for a divided by</span> <span m='2016970'>the size of the
  universe.</span> </p><p><span m='2019000'>So that's what independence
  means.</span> </p><p><span m='2023050'>Now, that's quite a lot of work.</span>
  </p><p><span m='2025270'>But we're not done with independence, because
  we've</span> <span m='2026980'>got conditional independence to deal
  with.</span> </p><p><span m='2041360'>And that, too, can be viewed as a
  definition.</span> </p><p><span m='2048340'>And what we're going to say is
  that the probability of a</span> <span m='2051810'>given b and z is equal to
  the probability of a given z.</span> </p><p><span m='2063350'>What's that
  mean?</span> </p><p><span m='2064210'>That means that if you know that we're
  dealing with z,</span> <span m='2068010'>then the probability of a doesn't
  depend on b.</span> </p><p><span m='2073100'>b doesn't matter anymore once
  you're</span> <span m='2075239'>restricted to being in z.</span> </p><p><span
  m='2078900'>So you can look at that this way.</span> </p><p><span
  m='2087070'>Here's a, and here's b, and here is z.</span> </p><p><span
  m='2095600'>So what we're saying is that we're restricting the world to</span>
  <span m='2098360'>being in this part of the universe where z is.</span>
  </p><p><span m='2101860'>So the probability of a given b and z is this piece
  in here.</span> </p><p><span m='2112340'>a given b and z is that part
  there.</span> </p><p><span m='2116050'>And the probability of a given z is
  this part here</span> <span m='2123340'>divided by all of z.</span>
  </p><p><span m='2127280'>So we're saying that the ratio of this little piece
  here to</span> <span m='2132580'>this part, which I'll mark that way, ratio of
  this to</span> <span m='2139010'>this is the same as the ratio of that to
  that.</span> </p><p><span m='2142080'>So that's conditional
  independence.</span> </p><p><span m='2145410'>So you can infer from these
  things, with a little bit of</span> <span m='2149810'>algebra, that P of a and
  b given z is equal to P of a</span> <span m='2161352'>given z times P of b in
  z.</span> </p><p><span m='2169260'>Boy, that's been quite a journey, but we
  got all the</span> <span m='2172400'>way through one, two, three, four, and
  five.</span> </p><p><span m='2176200'>And now the next thing is belief nets,
  and I'm going to</span> <span m='2178070'>ask you to forget everything I've
  said for a minute or two.</span> </p><p><span m='2182400'>And we'll come back
  to it.</span> </p><p><span m='2184420'>I want to talk about the dog and the
  burglar and the</span> <span m='2189360'>raccoon again.</span> </p><p><span
  m='2192300'>And now, forgetting about probability, I can say, look,</span>
  <span m='2196070'>the dog barks if a raccoon shows up.</span> </p><p><span
  m='2200700'>The dog barks if a burglar shows up.</span> </p><p><span
  m='2204790'>A burglar doesn't show up because the dog is barking.</span>
  </p><p><span m='2208110'>A raccoon doesn't show up because the dog is
  barking.</span> </p><p><span m='2211470'>So the causality flows from the
  burglar and the raccoon to</span> <span m='2214580'>the barking.</span>
  </p><p><span m='2216020'>So we can make a diagram of that.</span> </p><p><span
  m='2218570'>And our diagram will look like this.</span> </p><p><span
  m='2221310'>Here is the burglar, and here is the raccoon.</span> </p><p><span
  m='2227540'>And these have causal relations to the dog barking.</span>
  </p><p><span m='2235390'>So that's an interesting idea, because now I can say
  that--</span> <span m='2242080'>well, I can't say anything yet, because I want
  to add a</span> <span m='2244550'>little more complexity to it.</span>
  </p><p><span m='2246190'>I'm going to add two more variables.</span>
  </p><p><span m='2248920'>You might call the police, depending on how vigorous
  the</span> <span m='2254640'>dog is barking, I guess.</span> </p><p><span
  m='2256430'>And the raccoon has a propensity to knocking over</span> <span
  m='2260300'>the trash can.</span> </p><p><span m='2262660'>So now, I've got
  five variables.</span> </p><p><span m='2264600'>How big a joint probability
  table am I going to need to</span> <span m='2267900'>keep my tallies
  straight?</span> </p><p><span m='2270020'>Well, it'll be 2 to the 5th.</span>
  </p><p><span m='2270980'>That's 32.</span> </p><p><span m='2273900'>But what
  I'm going to say is that this diagram is a</span> <span m='2279780'>statement,
  that every node in it depends on its parents and</span> <span
  m='2287820'>nothing else that's not a descendant.</span> </p><p><span
  m='2290630'>Now, I need to say that about 50 times, because you've got</span>
  <span m='2293380'>to say it right.</span> </p><p><span m='2295020'>Every node
  there is independent of every</span> <span m='2298070'>non-descendant other
  then its parents.</span> </p><p><span m='2300620'>No, that's not quite
  right.</span> </p><p><span m='2302310'>Given its parents, every node is
  independent of all other</span> <span m='2306380'>non-descendants.</span>
  </p><p><span m='2308670'>Well, what does that mean?</span> </p><p><span
  m='2312070'>Here's the deal with calling the police.</span> </p><p><span
  m='2314730'>Here's its one and only parent.</span> </p><p><span m='2317180'>So
  given this parent, the probability that they were</span> <span
  m='2320400'>going to call the police doesn't depend on anything</span> <span
  m='2324120'>like B, R, or T. It's because all of the causality is</span> <span
  m='2328520'>flowing through this dog barking.</span> </p><p><span
  m='2331600'>I'm not going to call the police in a way that's</span> <span
  m='2335150'>dependent on anything else other than whether the dog is</span>
  <span m='2337240'>barking or not.</span> </p><p><span m='2338860'>Because this
  guy has this as a parent, and these are not</span> <span
  m='2344430'>descendants of calling the police, so this is independent</span>
  <span m='2350245'>of B, R, and T.</span> </p><p><span m='2353730'>So let's go
  walk through the others.</span> </p><p><span m='2356220'>Here's the
  dog.</span> </p><p><span m='2357470'>The dog's parents are burger</span> <span
  m='2359360'>appearing and raccoon appearing.</span> </p><p><span
  m='2361950'>So the probability that the dog appears is independent of</span>
  <span m='2367590'>that trash can over there, because that's not a</span> <span
  m='2369580'>descendant.</span> </p><p><span m='2370850'>It is dependent on
  these parents.</span> </p><p><span m='2373660'>How about the trash can?</span>
  </p><p><span m='2375790'>It depends only on the raccoon.</span> </p><p><span
  m='2380070'>It doesn't depend on any other non-descendant, so
  therefore,</span> <span m='2383810'>it doesn't depend on D, B, or P. How about
  B?</span> </p><p><span m='2390190'>It has no parents.</span> </p><p><span
  m='2392900'>So it depends on nothing else, because everything else is</span>
  <span m='2398210'>either a non-descendant, because B does not dependent</span>
  <span m='2409070'>on R and T, because they're not descendants.</span>
  </p><p><span m='2416400'>It's interesting that B might depend on D and P,
  because</span> <span m='2419160'>those are descendants.</span> </p><p><span
  m='2422950'>So it's important to understand that there's this</span> <span
  m='2426120'>business of independence given the parents of all other</span>
  <span m='2433020'>non-descendants.</span> </p><p><span m='2435200'>And you'll
  see why that funny, strange language is important</span> <span m='2437620'>in
  a minute.</span> </p><p><span m='2440060'>But now, let's see--</span> <span
  m='2440710'>I want to make a model of what's going to happen here.</span>
  </p><p><span m='2443920'>So let me see what kind of probabilities I'm going
  to</span> <span m='2447540'>have to figure out.</span> </p><p><span
  m='2450300'>This guy doesn't depend on anything upstream.</span> </p><p><span
  m='2454790'>So we could just say that all we need there is the</span> <span
  m='2456460'>probability that a burglar is going to appear.</span> </p><p><span
  m='2458990'>Let's say it's a fairly high-crime neighborhood--</span> <span
  m='2461880'>1 chance in 10--</span> <span m='2463020'>1 day in 10, a burglar
  appears.</span> </p><p><span m='2466330'>The raccoon doesn't depend on
  anything other than its own</span> <span m='2471760'>propensity, so its
  probability,</span> <span m='2474130'>we'll say, is 0.5.</span> </p><p><span
  m='2476970'>Raccoons love the place, so it shows up about 1 day in 2.</span>
  </p><p><span m='2482340'>So what about the dog barking?</span> </p><p><span
  m='2484300'>That depends on whether there's a burglar, and the</span> <span
  m='2488690'>other parent is whether there's a raccoon.</span> </p><p><span
  m='2491110'>So we need to keep track of the probability that the dog</span>
  <span m='2494270'>will bark for all four combinations.</span> </p><p><span
  m='2502060'>So this will be the burglar, and this will be the raccoon.</span>
  </p><p><span m='2506980'>This will be false, false, true, true--</span> <span
  m='2511980'>oops-- false, false, true, false,</span> <span m='2515400'>false,
  true, true, true.</span> </p><p><span m='2519360'>So let's say it's a
  wonderful dog, and it always barks if</span> <span m='2523450'>there's a
  burglar.</span> </p><p><span m='2525700'>So that would say that the
  probability here is 1.0, and</span> <span m='2530500'>the probability here is
  1.0.</span> </p><p><span m='2533170'>And if there's neither a burglar nor a
  raccoon, the dog</span> <span m='2537875'>still likes to bark just for
  fun.</span> </p><p><span m='2539420'>So we'll say that's a chance of 1 in
  10.</span> </p><p><span m='2542130'>And then in case there's a burglar, let's
  say this.</span> </p><p><span m='2546370'>There's no burglar, but there is a
  raccoon--</span> <span m='2548290'>he's tired of the raccoons, so he only
  barks half the time.</span> </p><p><span m='2551710'>Do these numbers, by the
  way, have to add up to 1?</span> </p><p><span m='2554280'>They clearly
  don't.</span> </p><p><span m='2556290'>These numbers don't add up to
  one.</span> </p><p><span m='2557370'>What adds up to 1 is this is the
  probability</span> <span m='2560690'>that the dog barks.</span> </p><p><span
  m='2563210'>And then the other phantom probability is out here.</span>
  </p><p><span m='2567310'>And these have to add up to 1.</span> </p><p><span
  m='2568935'>So that would be 0.9, that would be 0.0, that would be</span>
  <span m='2572850'>0.5, and this would be 0.0.</span> </p><p><span
  m='2577050'>So because those are just 1 minus the numbers in these</span>
  <span m='2581820'>columns, I don't bother to write them down.</span>
  </p><p><span m='2586830'>Well, we still have a couple more things to
  do.</span> </p><p><span m='2588540'>The probability that we'll call the police
  depends only</span> <span m='2591280'>on the dog.</span> </p><p><span
  m='2592405'>So we'll have a column for the dog, and then we'll have a</span>
  <span m='2594770'>probability of calling the police.</span> </p><p><span
  m='2599070'>There's a probability for that being false and a
  probability</span> <span m='2602770'>for that being true.</span> </p><p><span
  m='2604760'>So if the dog doesn't bark, there's really hardly any</span> <span
  m='2608790'>chance we'll call the police.</span> </p><p><span m='2610730'>So
  make that 0, 0, 1.</span> </p><p><span m='2612820'>If the dog is barking, if
  he barks vigorously enough, maybe</span> <span m='2616420'>1 chance in
  10.</span> </p><p><span m='2620430'>Here, we have the trash can-- the final
  thing we have to</span> <span m='2623640'>think about.</span> </p><p><span
  m='2624830'>There's the trash can; rather, the raccoon.</span> </p><p><span
  m='2628240'>And here's the trash can probability.</span> </p><p><span
  m='2631890'>Depends on the raccoon being either present or not present.</span>
  </p><p><span m='2637460'>If the raccoon is not present, the probability the
  trash can</span> <span m='2640270'>is knocked over by, say, the wind is 1 in
  1,000.</span> </p><p><span m='2644650'>If the raccoon is there, oh man, that
  guy always likes to</span> <span m='2648510'>go in there, so that's
  0.8.</span> </p><p><span m='2651340'>So now I'm done specifying this
  model.</span> </p><p><span m='2654580'>And the question is, how many numbers
  did I have to specify?</span> </p><p><span m='2658570'>Well, let's see.</span>
  </p><p><span m='2661140'>I have to specify that one, that one, that one, that
  one,</span> <span m='2665150'>that one, that one-- that's 6, 7, 8, 9,
  10.</span> </p><p><span m='2669060'>So I had to specify 10 numbers.</span>
  </p><p><span m='2672540'>If I just try to build myself a joint probability
  table</span> <span m='2675480'>straightaway, how many numbers would I have to
  supply?</span> </p><p><span m='2679586'>Well, it's 2 to the n.</span>
  </p><p><span m='2681970'>So it's 2 to the 5th, that's 32.</span> </p><p><span
  m='2688970'>Considerable saving.</span> </p><p><span m='2691560'>By the way,
  how do you suppose I made that table?</span> </p><p><span m='2694910'>Not by
  doing all those numbers.</span> </p><p><span m='2697220'>By making this belief
  network and then using the belief</span> <span m='2701460'>network to
  calculate those numbers.</span> </p><p><span m='2704470'>And that's why this
  is a miracle, because with these</span> <span m='2707900'>numbers, I can
  calculate those numbers instead of making them</span> <span m='2711400'>up or
  making a whole lot of tally-type measurements.</span> </p><p><span
  m='2715420'>So I'd like to make sure that that's true.</span> </p><p><span
  m='2718540'>And I can use this stuff here to calculate the full joint</span>
  <span m='2724150'>probability table.</span> </p><p><span m='2727440'>So here's
  how this works.</span> </p><p><span m='2730890'>I have the probability of some
  combination--</span> <span m='2736020'>let's say the police, the dog, the
  burglar, the trash can,</span> <span m='2744150'>and the raccoon.</span>
  </p><p><span m='2750220'>All the combinations that are possible there will
  give me an</span> <span m='2752400'>entry in the table-- one row.</span>
  </p><p><span m='2754582'>But let's see--</span> <span m='2756280'>there's some
  miracle here.</span> </p><p><span m='2757150'>Oh, this chain rule.</span>
  </p><p><span m='2759670'>Let's use the chain rule.</span> </p><p><span
  m='2761920'>We can write that as a probability that we call the</span> <span
  m='2765820'>police given d, b, t, and r.</span> </p><p><span m='2770950'>And
  then the next one in my chain is probability of d</span> <span
  m='2774480'>given b, t, and r.</span> </p><p><span m='2777950'>Then the next
  one in the chain is the probability of</span> <span m='2780090'>b given t and
  r.</span> </p><p><span m='2783920'>And the next one in my chain is P of t
  given r.</span> </p><p><span m='2788470'>And the final one in my chain is p of
  r.</span> </p><p><span m='2793860'>Now, we have some conditional
  independence</span> <span m='2796200'>knowledge, too, don't we?</span>
  </p><p><span m='2798170'>We know that this probability here depends only on d
  because</span> <span m='2805740'>there are no descendants.</span> </p><p><span
  m='2807150'>So therefore, we don't have to think about that, and all
  the</span> <span m='2809880'>numbers we need here are produced by this
  table.</span> </p><p><span m='2814100'>How about this one here?</span>
  </p><p><span m='2815190'>Probability that the dog barks depends only on its
  parents, b</span> <span m='2818850'>and r, so it doesn't depend on t.</span>
  </p><p><span m='2825390'>So b, in turn, depends on--</span> <span
  m='2829080'>what does it depend on?</span> </p><p><span m='2829960'>It doesn't
  depend on anything.</span> </p><p><span m='2832030'>So we can scratch
  those.</span> </p><p><span m='2834330'>Probability of t given r, yeah, there's
  a probability</span> <span m='2837890'>there, but we can get that from the
  table.</span> </p><p><span m='2840030'>And finally, P or r.</span>
  </p><p><span m='2842680'>So that's why I went through all that probability
  junk,</span> <span m='2845550'>because if we arrange things in the expansion
  of this, from</span> <span m='2850680'>bottom to top, then we arrange things
  so that none of these</span> <span m='2855100'>guys depends on a descendant in
  this formula.</span> </p><p><span m='2859860'>And we have a limited number of
  things that it</span> <span m='2861510'>depends on above it.</span>
  </p><p><span m='2864720'>So that's the way we can calculate back the full
  joint</span> <span m='2866750'>probability table.</span> </p><p><span
  m='2871845'>And that brings us to the end of the discussion today.</span>
  </p><p><span m='2874380'>But the thing we're going to think about is, how
  much</span> <span m='2876940'>saving do we really get out of this?</span>
  </p><p><span m='2879850'>In this particular case, we only had to devise
  10</span> <span m='2883940'>numbers out of 32.</span> </p><p><span
  m='2885290'>What if we had 10 properties or 100 properties?</span>
  </p><p><span m='2889400'>How much saving would we get then?</span>
  </p><p><span m='2891270'>That's what we'll take up next time,</span> <span
  m='2893070'>after the quiz on Wednesday.</span> </p><p></p>
uid: 9ec82d943c58e90f2285b48074e1de01
type: courses
layout: video
---
