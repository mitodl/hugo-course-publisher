---
about_this_resource_text: >-
  <p><strong>Description:</strong> We begin by discussing neural net formulas,
  including the sigmoid and performance functions and their derivatives. We then
  work Problem 2 of Quiz 3, Fall 2008, which includes running one step of back
  propagation and matching neural nets with classifiers.</p>
  <p><strong>Instructor:</strong> Mark Seifter</p>
embedded_media:
  - id: Video-YouTube-Stream
    media_location: JMrFgnqSS0w
    parent_uid: f8ea3e2b98f340fd56adf8d9e5ee9da7
    title: Video-YouTube-Stream
    type: Video
    uid: 35be437178079cdf07d0c99aa1af3b11
  - id: Video-iTunesU-MP4
    media_location: >-
      https://itunes.apple.com/us/itunes-u/mega-recitation-4-neural-nets/id765641080?i=194482717
    parent_uid: f8ea3e2b98f340fd56adf8d9e5ee9da7
    title: Video-iTunes U-MP4
    type: Video
    uid: 413b179ba85877494e16972e3809a8c1
  - id: Video-InternetArchive-MP4
    media_location: 'http://www.archive.org/download/MIT6.034F10/MIT6_034F10_rec04_300k.mp4'
    parent_uid: f8ea3e2b98f340fd56adf8d9e5ee9da7
    title: Video-Internet Archive-MP4
    type: Video
    uid: 2c6565f0725519f2dcc5ddf5bd225c91
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/JMrFgnqSS0w/default.jpg'
    parent_uid: f8ea3e2b98f340fd56adf8d9e5ee9da7
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: f7f16b70bd545fd3025c933b63fdb4c8
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: JMrFgnqSS0w
    parent_uid: f8ea3e2b98f340fd56adf8d9e5ee9da7
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 0cf46fabda4d187f6785e2c2b6535fdb
  - id: JMrFgnqSS0w.srt
    parent_uid: f8ea3e2b98f340fd56adf8d9e5ee9da7
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-034-artificial-intelligence-fall-2010/mega-recitation-videos/mega-recitation-4-neural-nets/JMrFgnqSS0w.srt
    title: 3play caption file
    type: null
    uid: df342ccec1a3c28be25d72ff0d7609a1
  - id: JMrFgnqSS0w.pdf
    parent_uid: f8ea3e2b98f340fd56adf8d9e5ee9da7
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-034-artificial-intelligence-fall-2010/mega-recitation-videos/mega-recitation-4-neural-nets/JMrFgnqSS0w.pdf
    title: 3play pdf file
    type: null
    uid: ccacf3638d0ee2595a45d5f1fd407596
  - id: Caption-3Play YouTube id-SRT
    parent_uid: f8ea3e2b98f340fd56adf8d9e5ee9da7
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 257b11555fdeab1ef968472c39ae4a67
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: f8ea3e2b98f340fd56adf8d9e5ee9da7
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 6296e69d175ebaf7fefc2f0e1713452a
inline_embed_id: '76976421mega-recitation4:neuralnets19355255'
order_index: 280
parent_uid: 6be7704ddfe26b4e12703167347dd5bb
related_resources_text: >-
  <p><a href="./resolveuid/bd67a9fc7d5fd4caf676e7af65d4ad44"
  target="_blank">Quiz 3, Fall 2008 (PDF)</a></p>
short_url: mega-recitation-4-neural-nets
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-034-artificial-intelligence-fall-2010/mega-recitation-videos/mega-recitation-4-neural-nets
title: 'Mega-Recitation 4: Neural Nets'
transcript: >-
  <p><span m='60'>The</span> <span m='180'>following</span> <span
  m='620'>content</span> <span m='1220'>is</span> <span m='1330'>provided</span>
  <span m='1780'>under</span> <span m='2060'>a</span> <span
  m='2100'>Creative</span> <span m='2500'>Commons</span> <span
  m='2910'>license.</span> <span m='4019'>Your</span> <span
  m='4210'>support</span> <span m='4710'>will</span> <span m='4870'>help</span>
  <span m='5110'>MIT</span> <span m='5570'>OpenCourseWare</span> <span
  m='6360'>continue</span> <span m='6870'>to</span> <span m='6950'>offer</span>
  <span m='7360'>high</span> <span m='7600'>quality</span> <span
  m='8119'>educational</span> <span m='8750'>resources</span> <span
  m='9370'>for</span> <span m='9520'>free.</span> <span m='10730'>To</span>
  <span m='10740'>make</span> <span m='10940'>a</span> <span
  m='10990'>donation</span> <span m='11670'>or</span> <span
  m='11940'>view</span> <span m='12380'>additional</span> <span
  m='12810'>materials</span> <span m='13340'>from</span> <span
  m='13490'>hundreds</span> <span m='13930'>of</span> <span m='14040'>MIT</span>
  <span m='14470'>courses,</span> <span m='15570'>visit</span> <span
  m='15790'>MIT</span> <span m='16219'>OpenCourseWare</span> <span
  m='17270'>at</span> <span m='17430'>ocw.mit.edu.</span> </p><p><span
  m='21340'>PROFESSOR: Today</span> <span m='21435'>we</span> <span
  m='21530'>are</span> <span m='21600'>introducing</span> <span
  m='23080'>an</span> <span m='23180'>exciting</span> <span m='23650'>new</span>
  <span m='23930'>pledge</span> <span m='24420'>in 6034.</span> <span
  m='25330'>Anyone</span> <span m='25680'>who</span> <span m='25810'>has</span>
  <span m='26040'>already</span> <span m='26380'>looked</span> <span
  m='26790'>at</span> <span m='27130'>any</span> <span m='27400'>of</span> <span
  m='27520'>the</span> <span m='27610'>neural</span> <span m='27890'>net</span>
  <span m='28130'>problems</span> <span m='29280'>will have</span> <span
  m='29730'>easily</span> <span m='30060'>been</span> <span
  m='30170'>able</span> <span m='30380'>to</span> <span m='30500'>see</span>
  <span m='30800'>that</span> <span m='31050'>even</span> <span
  m='31290'>though</span> <span m='31450'>Patrick</span> <span
  m='31860'>only</span> <span m='32070'>has</span> <span m='32290'>them</span>
  <span m='32340'>back</span> <span m='32600'>up</span> <span
  m='32720'>to</span> <span m='32830'>2006</span> <span m='33550'>now,</span>
  <span m='34300'>there's</span> <span m='34510'>still--</span> <span
  m='36000'>well</span> <span m='36280'>out of</span> <span m='36700'>four
  tests,</span> <span m='37490'>perhaps</span> <span m='38270'>two</span> <span
  m='38480'>or</span> <span m='38680'>three</span> <span
  m='39500'>different</span> <span m='39870'>ways</span> <span
  m='40420'>that</span> <span m='40730'>the</span> <span m='40820'>neural
  nets</span> <span m='41190'>were</span> <span m='41350'>drawn.</span> <span
  m='42140'>Our</span> <span m='42300'>exciting</span> <span
  m='42660'>new</span> <span m='42850'>pledge</span> <span m='43190'>is</span>
  <span m='43980'>we're</span> <span m='44210'>going</span> <span
  m='44430'>to</span> <span m='44510'>draw</span> <span m='44730'>them</span>
  <span m='44960'>in</span> <span m='45040'>a</span> <span
  m='45100'>particular</span> <span m='45600'>way</span> <span
  m='45830'>this</span> <span m='46090'>year.</span> <span m='47110'>And</span>
  <span m='48510'>I</span> <span m='48650'>will</span> <span
  m='48780'>show</span> <span m='49020'>you</span> <span m='49510'>which</span>
  <span m='49870'>way,</span> <span m='50810'>assuming</span> <span
  m='51180'>that</span> <span m='51320'>this</span> <span
  m='51490'>works.</span> <span m='52350'>Yes.</span> </p><p><span
  m='53820'>We</span> <span m='53960'>are</span> <span m='54030'>going</span>
  <span m='54300'>to</span> <span m='54360'>draw</span> <span
  m='54550'>them</span> <span m='54730'>like</span> <span m='54930'>the</span>
  <span m='55000'>one</span> <span m='55170'>on</span> <span
  m='55370'>the</span> <span m='55490'>right.</span> <span m='57580'>The</span>
  <span m='57590'>one</span> <span m='57810'>on</span> <span
  m='57900'>the</span> <span m='57970'>left</span> <span m='58210'>is</span>
  <span m='58330'>the</span> <span m='58420'>same</span> <span
  m='58700'>as</span> <span m='58800'>the</span> <span m='58870'>one</span>
  <span m='59040'>on</span> <span m='59150'>the</span> <span
  m='59250'>right.</span> <span m='61050'>At</span> <span
  m='61280'>first,</span> <span m='61810'>not</span> <span
  m='62130'>having</span> <span m='62580'>had</span> <span m='62810'>to</span>
  <span m='62860'>explain</span> <span m='63460'>the</span> <span
  m='64140'>difference</span> <span m='64420'>between</span> <span
  m='64690'>the</span> <span m='64780'>two</span> <span m='64930'>of</span>
  <span m='65030'>them,</span> <span m='65209'>you</span> <span
  m='65340'>might</span> <span m='65600'>think</span> <span m='65790'>you</span>
  <span m='65890'>want</span> <span m='66190'>the</span> <span
  m='66260'>one</span> <span m='66440'>on</span> <span m='66550'>the</span>
  <span m='66650'>left.</span> <span m='67310'>But</span> <span
  m='67930'>you</span> <span m='68090'>really</span> <span m='68300'>want</span>
  <span m='68510'>the</span> <span m='68600'>one</span> <span
  m='68780'>on</span> <span m='68890'>the</span> <span m='68980'>right,</span>
  <span m='69590'>and</span> <span m='69880'>I'll</span> <span
  m='70100'>explain</span> <span m='70470'>why.</span> <span
  m='71590'>The</span> <span m='71710'>2007</span> <span m='72120'>quiz</span>
  <span m='72940'>was</span> <span m='73450'>drawn,</span> <span
  m='73760'>roughly</span> <span m='74250'>similarly,</span> <span
  m='74830'>to</span> <span m='74950'>this.</span> <span
  m='75810'>Although</span> <span m='76350'>if</span> <span m='76560'>you</span>
  <span m='76710'>somehow</span> <span m='77220'>wind</span> <span
  m='77470'>up</span> <span m='77630'>in</span> <span m='78640'>tutorial</span>
  <span m='79140'>or</span> <span m='79260'>somewhere</span> <span
  m='79610'>else</span> <span m='79860'>doing</span> <span m='80150'>one</span>
  <span m='80300'>of</span> <span m='80400'>the</span> <span
  m='80660'>older</span> <span m='80980'>quizzes,</span> <span
  m='81360'>a</span> <span m='81470'>lot</span> <span m='81720'>of</span> <span
  m='81800'>them</span> <span m='81930'>were</span> <span m='82030'>drawn</span>
  <span m='82290'>exactly</span> <span m='82750'>like</span> <span
  m='83010'>this.</span> </p><p><span m='84040'>In</span> <span
  m='84240'>this</span> <span m='84610'>representation,</span> <span
  m='86200'>one</span> <span m='86470'>thing</span> <span m='86600'>I</span>
  <span m='86680'>really</span> <span m='86950'>don't</span> <span
  m='87240'>like,</span> <span m='87650'>is</span> <span m='87960'>that</span>
  <span m='88140'>the</span> <span m='88300'>inputs</span> <span
  m='88750'>are</span> <span m='88920'>called</span> <span m='89240'>x's,</span>
  <span m='89930'>and</span> <span m='90320'>the</span> <span
  m='90420'>outputs</span> <span m='90900'>are</span> <span
  m='91040'>called</span> <span m='91430'>y's,</span> <span m='92110'>but</span>
  <span m='95140'>there's</span> <span m='95420'>two</span> <span
  m='95690'>x's,</span> <span m='96180'>so</span> <span m='96370'>the</span>
  <span m='96640'>inputs</span> <span m='96940'>are</span> <span
  m='97020'>not</span> <span m='97330'>x</span> <span m='97570'>and</span> <span
  m='97720'>y,</span> <span m='98120'>and</span> <span m='98450'>then</span>
  <span m='98570'>they</span> <span m='98690'>often</span> <span
  m='99090'>correspond</span> <span m='99400'>to</span> <span
  m='99480'>x's</span> <span m='99880'>of</span> <span m='99980'>a</span> <span
  m='100040'>graph,</span> <span m='100690'>and</span> <span
  m='100870'>then</span> <span m='101240'>people</span> <span
  m='101540'>get</span> <span m='101660'>confused.</span> <span
  m='103720'>Additional</span> <span m='104950'>issues</span> <span
  m='105310'>that</span> <span m='105440'>many</span> <span
  m='105610'>people</span> <span m='105850'>have</span> <span
  m='106980'>are</span> <span m='107190'>the</span> <span m='107280'>fact</span>
  <span m='107540'>that</span> <span m='107730'>the</span> <span
  m='107950'>summation</span> <span m='109100'>and</span> <span
  m='109750'>the</span> <span m='110170'>multiplication</span> <span
  m='110880'>with</span> <span m='111030'>the</span> <span
  m='111110'>weight</span> <span m='111430'>is</span> <span
  m='111580'>implied.</span> <span m='112190'>The</span> <span
  m='112260'>weights</span> <span m='112560'>are</span> <span
  m='112670'>written</span> <span m='112940'>on</span> <span
  m='113080'>the</span> <span m='113210'>edges,</span> <span
  m='113570'>where</span> <span m='113770'>outputs</span> <span
  m='114030'>and</span> <span m='114290'>inputs</span> <span
  m='114780'>go,</span> <span m='115600'>and</span> <span m='115790'>the</span>
  <span m='115860'>summation</span> <span m='116390'>of</span> <span
  m='116490'>the</span> <span m='116590'>two</span> <span
  m='116770'>inputs</span> <span m='117740'>into</span> <span
  m='118000'>the</span> <span m='118080'>node</span> <span m='118390'>are</span>
  <span m='118860'>also</span> <span m='119240'>implied.</span> </p><p><span
  m='120540'>But</span> <span m='121290'>take</span> <span m='121450'>a</span>
  <span m='121500'>look</span> <span m='121740'>here.</span> <span
  m='122970'>This</span> <span m='123280'>is</span> <span m='123400'>the</span>
  <span m='123500'>same</span> <span m='124060'>net.</span> <span
  m='125560'>These</span> <span m='127200'>w's</span> <span
  m='127670'>here</span> <span m='128699'>would</span> <span
  m='129130'>be</span> <span m='129229'>the</span> <span m='129350'>w's</span>
  <span m='130039'>that</span> <span m='134430'>are</span> <span
  m='134790'>written</span> <span m='137500'>onto</span> <span
  m='137790'>these</span> <span m='138040'>lines</span> <span
  m='138930'>are</span> <span m='139140'>here.</span> <span
  m='140610'>Actually</span> <span m='141100'>the</span> <span
  m='141200'>better</span> <span m='141490'>way</span> <span
  m='141680'>to</span> <span m='141880'>draw</span> <span m='142240'>it</span>
  <span m='142450'>would</span> <span m='142800'>be</span> <span
  m='149000'>like</span> <span m='149280'>so,</span> <span
  m='151280'>since</span> <span m='151950'>each</span> <span
  m='152120'>of</span> <span m='152210'>these</span> <span m='152380'>can</span>
  <span m='152490'>have</span> <span m='152710'>their</span> <span
  m='152950'>own</span> <span m='153200'>w,</span> <span m='155990'>which</span>
  <span m='156240'>is</span> <span m='156500'>different.</span> <span
  m='160730'>So</span> <span m='160910'>each</span> <span m='161100'>of</span>
  <span m='161200'>the</span> <span m='161320'>w's</span> <span m='161780'>that
  are</span> <span m='161950'>down</span> <span m='162260'>here,</span> <span
  m='164020'>are</span> <span m='164150'>being</span> <span
  m='164380'>explicitly</span> <span m='165200'>set to a</span> <span
  m='165590'>multiplier.</span> <span m='166250'>Where as</span> <span
  m='166510'>here,</span> <span m='166730'>you</span> <span
  m='166930'>just</span> <span m='167140'>had</span> <span m='167310'>to</span>
  <span m='167440'>remember</span> <span m='168470'>to</span> <span
  m='168600'>multiply</span> <span m='169040'>the</span> <span
  m='169140'>weight</span> <span m='169520'>by</span> <span
  m='169770'>the</span> <span m='170370'>input</span> <span m='170690'>that
  was</span> <span m='170870'>coming</span> <span m='171080'>by.</span> <span
  m='171700'>Here</span> <span m='171870'>you</span> <span m='172000'>see</span>
  <span m='172480'>an</span> <span m='172570'>input,</span> <span
  m='173350'>comes</span> <span m='173640'>to a</span> <span
  m='173760'>multiplier,</span> <span m='174260'>you</span> <span
  m='174760'>multiply</span> <span m='175310'>by</span> <span
  m='175490'>the</span> <span m='175610'>weight,</span> <span
  m='177870'>then</span> <span m='178270'>once</span> <span
  m='178510'>you</span> <span m='178620'>multiplied</span> <span
  m='179180'>all</span> <span m='179300'>the inputs</span> <span
  m='179660'>by</span> <span m='179770'>the</span> <span
  m='179870'>weight,</span> <span m='180070'>then</span> <span
  m='180150'>you</span> <span m='180250'>send</span> <span
  m='180500'>them</span> <span m='180630'>to</span> <span m='180740'>a</span>
  <span m='180810'>sum,</span> <span m='182410'>so</span> <span
  m='182520'>the</span> <span m='182630'>sigma</span> <span m='183040'>is</span>
  <span m='183200'>just</span> <span m='183410'>a</span> <span
  m='183470'>sum,</span> <span m='183930'>you</span> <span m='184060'>sum</span>
  <span m='184370'>them,</span> <span m='184650'>add</span> <span
  m='184760'>them</span> <span m='184870'>all</span> <span
  m='185160'>together,</span> <span m='186140'>send</span> <span
  m='186660'>the</span> <span m='186740'>result</span> <span
  m='187150'>of</span> <span m='187280'>that</span> <span m='187740'>into</span>
  <span m='187980'>the</span> <span m='188080'>sigmoid</span> <span
  m='188640'>function,</span> <span m='189910'>our</span> <span
  m='190030'>old</span> <span m='190350'>buddy,</span> <span m='190870'>1</span>
  <span m='191090'>over</span> <span m='191260'>1</span> <span
  m='191440'>plus</span> <span m='191640'>e</span> <span m='191760'>to
  the</span> <span m='191940'>negative</span> <span m='193700'>whatever</span>
  <span m='194330'>our</span> <span m='194600'>input</span> <span
  m='194810'>was,</span> <span m='196180'>with</span> <span m='196440'>a</span>
  <span m='196520'>weight</span> <span m='197100'>for</span> <span
  m='197370'>an</span> <span m='197480'>offset,</span> <span
  m='198900'>and</span> <span m='199080'>then</span> <span m='199290'>we</span>
  <span m='199360'>send</span> <span m='199560'>the</span> <span
  m='199620'>result</span> <span m='199910'>of</span> <span
  m='200050'>that</span> <span m='200740'>into</span> <span
  m='201230'>more</span> <span m='201500'>multipliers</span> <span
  m='202350'>with</span> <span m='202520'>more</span> <span
  m='202720'>weights,</span> <span m='203890'>more</span> <span
  m='204700'>sums,</span> <span m='205790'>more</span> <span
  m='206520'>sigmoids.</span> </p><p><span m='208360'>So</span> <span
  m='209490'>this</span> <span m='209720'>is</span> <span m='209870'>how
  it's</span> <span m='210090'>going</span> <span m='210310'>to</span> <span
  m='210380'>look</span> <span m='210610'>like</span> <span m='210850'>on</span>
  <span m='210980'>the</span> <span m='211060'>quiz.</span> <span
  m='213340'>And</span> <span m='213820'>this</span> <span m='214030'>is</span>
  <span m='214090'>a</span> <span m='214170'>conversion</span> <span
  m='214890'>guide</span> <span m='216440'>from</span> <span
  m='216840'>version</span> <span m='220400'>0.9</span> <span
  m='221310'>data</span> <span m='221610'>into</span> <span
  m='221960'>version</span> <span m='222260'>1.0.</span> <span
  m='222940'>So</span> <span m='223580'>if</span> <span m='223710'>you</span>
  <span m='223870'>see</span> <span m='225350'>something</span> <span
  m='225690'>that</span> <span m='225860'>looks</span> <span
  m='226060'>like</span> <span m='226270'>this,</span> <span m='227250'>on
  one</span> <span m='227450'>of</span> <span m='227520'>the</span> <span
  m='227610'>old</span> <span m='227830'>quizzes</span> <span
  m='228160'>that</span> <span m='228300'>you're</span> <span
  m='228420'>doing,</span> <span m='229610'>see if</span> <span
  m='229700'>you</span> <span m='230000'>can</span> <span
  m='230130'>convert</span> <span m='230500'>it,</span> <span
  m='231090'>and</span> <span m='231270'>then</span> <span
  m='231450'>solve</span> <span m='231700'>the</span> <span
  m='231790'>problem.</span> <span m='232980'>Chances</span> <span
  m='233250'>are</span> <span m='233510'>if</span> <span m='233650'>you</span>
  <span m='233810'>can</span> <span m='233970'>convert</span> <span
  m='234390'>it,</span> <span m='234880'>you're</span> <span
  m='235090'>probably</span> <span m='235410'>going</span> <span
  m='235590'>to</span> <span m='235660'>do</span> <span m='235820'>fine.</span>
  <span m='241970'>We'll</span> <span m='242160'>start</span> <span
  m='242460'>off</span> <span m='242660'>not</span> <span m='242890'>only</span>
  <span m='243140'>with</span> <span m='243320'>this</span> <span
  m='243790'>conversion</span> <span m='244310'>guide,</span> <span
  m='244550'>but</span> <span m='244730'>also--</span> <span
  m='255940'>I'll</span> <span m='256110'>leave</span> <span
  m='256290'>that</span> <span m='256440'>up</span> <span
  m='256570'>here--</span> <span m='256970'>also</span> <span
  m='257839'>I'm</span> <span m='258019'>going</span> <span m='258100'>to</span>
  <span m='258160'>work</span> <span m='258320'>out</span> <span
  m='258480'>the</span> <span m='258579'>formulas</span> <span
  m='259310'>for</span> <span m='259490'>you</span> <span m='259620'>guys</span>
  <span m='259950'>one</span> <span m='260120'>more</span> <span
  m='260310'>time.</span> </p><p><span m='261230'>These</span> <span
  m='261420'>are</span> <span m='261570'>all the</span> <span
  m='261930'>formulae</span> <span m='264360'>that</span> <span
  m='265190'>you're</span> <span m='265500'>going</span> <span
  m='265690'>to</span> <span m='265760'>need</span> <span m='265980'>on</span>
  <span m='266110'>the</span> <span m='266200'>quiz.</span> <span
  m='267100'>And</span> <span m='267310'>then</span> <span
  m='267500'>we're</span> <span m='267650'>going</span> <span
  m='267920'>to</span> <span m='268180'>decide</span> <span
  m='269490'>what</span> <span m='269700'>will</span> <span
  m='269850'>change</span> <span m='270670'>in</span> <span
  m='270880'>the</span> <span m='270970'>formulae,</span> <span
  m='271930'>if,</span> <span m='273270'>and</span> <span m='273430'>this</span>
  <span m='273600'>is</span> <span m='273770'>a</span> <span
  m='274250'>very</span> <span m='274480'>likely</span> <span
  m='275110'>if,</span> <span m='275820'>there</span> <span
  m='276140'>seems</span> <span m='276470'>to</span> <span m='276550'>be</span>
  <span m='277550'>good</span> <span m='277720'>amount</span> <span
  m='278110'>of times that</span> <span m='278290'>this</span> <span
  m='278520'>happens,</span> <span m='279090'>is</span> <span
  m='279420'>that</span> <span m='280240'>the</span> <span
  m='280340'>sigmoid</span> <span m='280870'>function</span> <span
  m='281360'>in</span> <span m='281560'>those</span> <span
  m='281820'>neurons</span> <span m='282310'>out</span> <span
  m='282450'>there</span> <span m='283220'>was</span> <span
  m='283350'>ever</span> <span m='283640'>changed</span> <span
  m='284530'>into</span> <span m='284800'>some</span> <span
  m='285010'>other</span> <span m='285180'>kind</span> <span
  m='285400'>of</span> <span m='285500'>function.</span> <span
  m='286140'>Hint.</span> <span m='286550'>It's</span> <span
  m='286840'>changed</span> <span m='287240'>into a</span> <span
  m='287480'>plus</span> <span m='288490'>already</span> <span
  m='288970'>in</span> <span m='289080'>the</span> <span
  m='289170'>problem</span> <span m='289460'>we're</span> <span
  m='289580'>about</span> <span m='289890'>to</span> <span m='289980'>do.</span>
  <span m='290800'>People</span> <span m='291090'>change</span> <span
  m='291440'>it</span> <span m='291600'>all</span> <span m='291980'>the</span>
  <span m='292090'>time</span> <span m='292530'>into</span> <span
  m='292720'>some</span> <span m='293080'>bizarro</span> <span
  m='293700'>function.</span> <span m='294420'>I've</span> <span
  m='294600'>seen</span> <span m='294840'>arc tangent,</span> <span
  m='295730'>I</span> <span m='295850'>think.</span> <span m='297680'>So</span>
  <span m='298540'>here</span> <span m='298730'>we</span> <span
  m='298840'>go.</span> </p><p><span m='300010'>Let's</span> <span
  m='300240'>look</span> <span m='300310'>at</span> <span m='300390'>the</span>
  <span m='300480'>front</span> <span m='300780'>of it.</span> <span
  m='301160'>First of all,</span> <span m='301310'>sigmoid.</span> <span
  m='302220'>Well</span> <span m='302780'>our</span> <span m='302950'>old</span>
  <span m='303150'>buddy,</span> <span m='303410'>sigmoid,</span> <span
  m='304280'>I</span> <span m='304410'>just</span> <span m='304710'>said</span>
  <span m='304940'>it a</span> <span m='306120'>moment</span> <span
  m='306430'>ago,</span> <span m='306910'>sigmoid</span> <span
  m='307490'>is</span> <span m='307820'>1</span> <span m='308240'>over</span>
  <span m='308600'>1</span> <span m='308970'>plus</span> <span
  m='309290'>e</span> <span m='309450'>to</span> <span m='309590'>the</span>
  <span m='309650'>minus</span> <span m='310000'>x.</span> <span
  m='318330'>Also,</span> <span m='319590'>fun</span> <span
  m='319850'>fact</span> <span m='320150'>about</span> <span
  m='320400'>sigmoid,</span> <span m='323130'>the</span> <span
  m='323310'>derivative</span> <span m='323900'>of</span> <span
  m='324030'>sigmoid,</span> <span m='334940'>is</span> <span
  m='336810'>itself--</span> <span m='339640'>the</span> <span
  m='339770'>derivative</span> <span m='340190'>of</span> <span
  m='340370'>sigmoid</span> <span m='341210'>is--</span> <span
  m='345000'>let's</span> <span m='345270'>say</span> <span
  m='345390'>that</span> <span m='345730'>the</span> <span
  m='345820'>sigmoid--</span> <span m='346690'>we'll</span> <span
  m='347040'>just</span> <span m='347250'>turn</span> <span
  m='347530'>sigmoid</span> <span m='348870'>into</span> <span
  m='350020'>like</span> <span m='350350'>the</span> <span
  m='350460'>letter</span> <span m='351520'>say</span> <span
  m='351630'>y.</span> <span m='353001'>Y</span> <span m='353460'>is</span>
  <span m='353650'>the</span> <span m='353740'>result,</span> <span
  m='354330'>right?</span> <span m='354670'>So</span> <span m='355340'>if</span>
  <span m='355480'>you</span> <span m='355600'>say</span> <span
  m='355780'>y</span> <span m='356330'>equals</span> <span m='358270'>1</span>
  <span m='358660'>over</span> <span m='358940'>1</span> <span
  m='359180'>plus</span> <span m='359520'>e</span> <span m='359740'>to</span>
  <span m='359870'>the</span> <span m='359970'>negative</span> <span
  m='360420'>x,</span> <span m='362650'>then</span> <span m='363270'>the</span>
  <span m='363580'>derivative</span> <span m='364200'>of</span> <span
  m='364400'>sigmoid</span> <span m='365100'>is</span> <span m='366130'>y</span>
  <span m='367550'>times</span> <span m='368460'>1</span> <span
  m='368770'>minus</span> <span m='369110'>y.</span> <span m='373330'>You</span>
  <span m='373740'>can</span> <span m='373880'>also</span> <span
  m='374200'>write</span> <span m='374430'>out</span> <span
  m='374630'>the</span> <span m='374710'>whole</span> <span
  m='374970'>nasty</span> <span m='375420'>thing,</span> <span
  m='375740'>it's</span> <span m='375870'>1</span> <span m='376170'>over</span>
  <span m='376350'>1</span> <span m='376510'>plus</span> <span m='376740'>e to
  the</span> <span m='376860'>negative</span> <span m='377240'>x</span> <span
  m='377630'>times</span> <span m='378050'>1</span> <span
  m='378480'>minus</span> <span m='379040'>1</span> <span m='379380'>over</span>
  <span m='379590'>1</span> <span m='379760'>plus</span> <span
  m='379980'>e</span> <span m='380140'>to</span> <span
  m='380290'>negative</span> <span m='380670'>x.</span> <span m='381780'>So
  the</span> <span m='381910'>nice</span> <span m='382300'>property</span> <span
  m='382710'>of sigmoid</span> <span m='383690'>it's</span> <span
  m='383820'>going</span> <span m='384020'>to</span> <span m='384070'>be</span>
  <span m='384170'>important</span> <span m='384770'>for</span> <span
  m='384960'>us</span> <span m='386460'>in</span> <span m='386600'>the</span>
  <span m='386660'>very</span> <span m='387030'>near</span> <span
  m='387260'>future,</span> <span m='388160'>and</span> <span
  m='388400'>that</span> <span m='388640'>future</span> <span
  m='388960'>begins</span> <span m='389480'>now.</span> </p><p><span
  m='391900'>So</span> <span m='392150'>now</span> <span m='392580'>the</span>
  <span m='392700'>performance</span> <span m='393240'>function.</span> <span
  m='393790'>This</span> <span m='394020'>is</span> <span m='394080'>a</span>
  <span m='394150'>function</span> <span m='394480'>we</span> <span
  m='394600'>used</span> <span m='394930'>to</span> <span m='395770'>tell</span>
  <span m='398390'>neural</span> <span m='398580'>nets</span> <span
  m='398700'>when they inevitably</span> <span m='399210'>act</span> <span
  m='399480'>up</span> <span m='399690'>and</span> <span m='399890'>give</span>
  <span m='400020'>us</span> <span m='400390'>really</span> <span
  m='401730'>crappy</span> <span m='402070'>results.</span> <span
  m='402700'>At</span> <span m='403170'>first</span> <span m='404110'>we</span>
  <span m='404320'>tell</span> <span m='404490'>them</span> <span
  m='404670'>just</span> <span m='405460'>how</span> <span
  m='405600'>long</span> <span m='406040'>they</span> <span
  m='406190'>are,</span> <span m='407510'>with</span> <span
  m='407730'>our</span> <span m='407830'>performance</span> <span
  m='408290'>function.</span> <span m='409430'>The</span> <span
  m='409630'>first</span> <span m='410030'>function</span> <span
  m='410360'>can</span> <span m='410550'>be</span> <span m='410720'>any</span>
  <span m='411090'>sane</span> <span m='412100'>function</span> <span
  m='413060'>that</span> <span m='416070'>gives</span> <span
  m='416410'>you</span> <span m='418790'>a</span> <span m='419140'>better</span>
  <span m='419640'>score,</span> <span m='420540'>where</span> <span
  m='420720'>better</span> <span m='421090'>can</span> <span
  m='421220'>be</span> <span m='421490'>decided</span> <span
  m='421980'>as</span> <span m='422150'>lower</span> <span m='422410'>or</span>
  <span m='422620'>higher,</span> <span m='423040'>if</span> <span
  m='423050'>you</span> <span m='423150'>feel</span> <span
  m='423400'>like,</span> <span m='425000'>that</span> <span
  m='425440'>gives</span> <span m='425610'>you</span> <span m='425700'>a</span>
  <span m='425730'>better</span> <span m='426040'>score,</span> <span
  m='426360'>if</span> <span m='426450'>your</span> <span
  m='426610'>answers</span> <span m='426910'>are</span> <span
  m='426980'>closer</span> <span m='427410'>to</span> <span
  m='427640'>the</span> <span m='427820'>answer</span> <span
  m='428120'>you're</span> <span m='428240'>looking</span> <span
  m='428590'>for.</span> <span m='429920'>However,</span> <span
  m='430210'>in</span> <span m='430310'>this</span> <span
  m='430600'>case,</span> <span m='432220'>we</span> <span
  m='432400'>have,</span> <span m='433480'>for</span> <span m='433670'>a</span>
  <span m='433730'>very</span> <span m='434050'>sneaky</span> <span
  m='435530'>reason,</span> <span m='437360'>chosen</span> <span
  m='437680'>the</span> <span m='437770'>performance</span> <span
  m='438050'>function</span> <span m='438590'>to</span> <span
  m='438740'>be</span> <span m='440300'>1/2</span> <span m='442765'>d,</span>
  <span m='443751'>which</span> <span m='444250'>is</span> <span
  m='444380'>the</span> <span m='444470'>desired</span> <span
  m='445030'>output,</span> <span m='447000'>minus</span> <span
  m='447265'>o,</span> <span m='447530'>the</span> <span
  m='448740'>actual</span> <span m='449250'>output</span> <span
  m='450330'>squared.</span> <span m='453770'>So</span> <span
  m='455120'>we</span> <span m='455250'>want</span> <span m='455490'>a</span>
  <span m='455550'>small,</span> <span m='457360'>well</span> <span
  m='457610'>it's</span> <span m='457770'>negative,</span> <span
  m='458900'>So</span> <span m='459490'>we</span> <span m='459600'>want</span>
  <span m='459840'>a</span> <span m='459900'>small</span> <span
  m='460360'>negative</span> <span m='460960'>or</span> <span
  m='461200'>0.</span> <span m='463450'>That</span> <span
  m='463680'>would</span> <span m='463800'>mean</span> <span
  m='463930'>we</span> <span m='464050'>performed</span> <span
  m='464460'>well.</span> </p><p><span m='467130'>So</span> <span
  m='467330'>why</span> <span m='467650'>this?</span> <span
  m='470560'>Well</span> <span m='472640'>the</span> <span
  m='472790'>main</span> <span m='473080'>reason</span> <span
  m='473750'>is</span> <span m='477040'>ddx</span> <span m='477890'>of</span>
  <span m='478270'>performance</span> <span m='485090'>is,</span> <span
  m='486440'>the</span> <span m='486550'>2</span> <span m='486770'>comes</span>
  <span m='487090'>down,</span> <span m='488560'>the o is the</span> <span
  m='488630'>variable</span> <span m='489220'>that</span> <span
  m='489330'>we're</span> <span m='489450'>actually,</span> <span
  m='489890'>so</span> <span m='490760'>maybe</span> <span m='491000'>I</span>
  <span m='491050'>should say</span> <span m='491310'>ddo,</span> <span
  m='495210'>that</span> <span m='495480'>negative</span> <span
  m='495890'>comes</span> <span m='496180'>out,</span> <span
  m='496930'>we</span> <span m='497090'>get</span> <span m='498070'>a</span>
  <span m='498170'>simple</span> <span m='501480'>d minus</span> <span
  m='501910'>o.</span> <span m='505980'>And</span> <span m='506430'>yeah,</span>
  <span m='506870'>we're</span> <span m='506960'>using</span> <span
  m='507250'>derivatives</span> <span m='507740'>here.</span> <span
  m='509370'>So</span> <span m='511470'>those</span> <span m='511690'>are
  fine.</span> <span m='512049'>These</span> <span m='512299'>are</span> <span
  m='512400'>two</span> <span m='512600'>assumptions.</span> <span
  m='513620'>They</span> <span m='513780'>could</span> <span
  m='513970'>be</span> <span m='514120'>changed</span> <span
  m='514530'>on</span> <span m='514730'>your</span> <span
  m='514860'>test.</span> <span m='515870'>We're</span> <span
  m='516030'>going</span> <span m='516130'>to</span> <span
  m='516179'>figure</span> <span m='516400'>out</span> <span
  m='516480'>what</span> <span m='516610'>happens,</span> <span
  m='516990'>if</span> <span m='517100'>we</span> <span m='517220'>change</span>
  <span m='517559'>them,</span> <span m='517909'>if</span> <span
  m='518030'>we</span> <span m='518130'>change</span> <span
  m='518419'>the</span> <span m='518520'>performance,</span> <span
  m='519220'>if</span> <span m='519340'>we</span> <span m='519460'>change</span>
  <span m='519610'>the</span> <span m='519780'>sigmoid,</span> <span
  m='520140'>that</span> <span m='521440'>is</span> <span m='521850'>if</span>
  <span m='521909'>we</span> <span m='522360'>change</span> <span
  m='522820'>the</span> <span m='522970'>sigmoid to</span> <span
  m='523080'>some</span> <span m='523299'>other</span> <span
  m='523549'>function,</span> <span m='524890'>what's</span> <span
  m='525020'>going</span> <span m='525120'>to</span> <span
  m='525160'>happen</span> <span m='525460'>to</span> <span
  m='525570'>the</span> <span m='525740'>next</span> <span
  m='526130'>three</span> <span m='526300'>functions,</span> <span
  m='526800'>which</span> <span m='527010'>are</span> <span
  m='527120'>basically</span> <span m='527640'>the</span> <span
  m='527760'>only</span> <span m='528180'>things</span> <span
  m='528470'>that</span> <span m='528590'>you</span> <span
  m='528690'>need</span> <span m='528920'>to</span> <span m='529040'>know</span>
  <span m='529350'>to</span> <span m='529530'>do</span> <span
  m='529780'>backpropagation.</span> </p><p><span m='531410'>So</span> <span
  m='531760'>let's</span> <span m='531970'>look</span> <span
  m='532120'>at</span> <span m='532210'>that.</span> <span
  m='532880'>First,</span> <span m='533290'>w</span> <span
  m='533620'>prime.</span> <span m='534210'>This</span> <span
  m='534300'>is</span> <span m='534370'>the</span> <span
  m='534450'>formula</span> <span m='534890'>for</span> <span
  m='535150'>a</span> <span m='535180'>new</span> <span
  m='535510'>weight.</span> <span m='536820'>After</span> <span
  m='537130'>one</span> <span m='537430'>step</span> <span m='537970'>of</span>
  <span m='538270'>backpropagation.</span> <span m='539520'>A</span> <span
  m='539590'>new</span> <span m='539790'>weight</span> <span
  m='540120'>in</span> <span m='540350'>any</span> <span m='540600'>of</span>
  <span m='540670'>these</span> <span m='540950'>positions</span> <span
  m='541490'>that</span> <span m='541620'>you</span> <span m='541690'>can</span>
  <span m='541810'>see</span> <span m='542130'>up</span> <span
  m='542330'>here</span> <span m='542560'>on</span> <span m='543500'>this</span>
  <span m='544890'>beautiful</span> <span m='546010'>neural</span> <span
  m='546310'>net.</span> <span m='547370'>That</span> <span
  m='547600'>w--</span> <span m='548160'>each</span> <span m='548470'>of</span>
  <span m='548730'>the</span> <span m='548850'>w's</span> <span
  m='549110'>will</span> <span m='549370'>have</span> <span m='549520'>to</span>
  <span m='549650'>change</span> <span m='550370'>step</span> <span
  m='550660'>by</span> <span m='550830'>step.</span> <span
  m='551670'>That's,</span> <span m='551900'>in</span> <span
  m='552010'>fact,</span> <span m='552230'>how</span> <span
  m='552470'>you</span> <span m='552680'>do</span> <span m='553170'>the</span>
  <span m='553300'>hill climbing</span> <span m='553940'>neural</span> <span
  m='554060'>nets.</span> <span m='554330'>You</span> <span
  m='554440'>change</span> <span m='554880'>the</span> <span
  m='554980'>weights</span> <span m='556160'>incrementally.</span> <span
  m='556635'>You</span> <span m='557110'>step</span> <span m='557460'>a</span>
  <span m='557540'>little</span> <span m='557870'>bit</span> <span
  m='558090'>in</span> <span m='558180'>the</span> <span
  m='558280'>direction</span> <span m='559000'>towards</span> <span
  m='559530'>giving</span> <span m='559740'>you</span> <span
  m='559860'>your</span> <span m='560010'>desired</span> <span
  m='560580'>results</span> <span m='561580'>until</span> <span
  m='561860'>eventually,</span> <span m='563010'>you</span> <span
  m='563170'>hope,</span> <span m='564380'>you</span> <span
  m='564590'>have</span> <span m='565080'>an</span> <span
  m='565130'>intelligent</span> <span m='565430'>neural</span> <span
  m='565730'>net.</span> <span m='567100'>And</span> <span m='567350'>maybe
  you</span> <span m='567770'>have</span> <span m='568060'>many</span> <span
  m='568340'>different</span> <span m='568690'>training</span> <span
  m='569010'>examples</span> <span m='569265'>that</span> <span
  m='569520'>you</span> <span m='569750'>run it</span> <span
  m='570080'>on,</span> <span m='570440'>in a cycle,</span> <span
  m='571840'>hoping</span> <span m='572140'>that</span> <span
  m='572260'>you</span> <span m='572340'>don't</span> <span m='572560'>over
  fit</span> <span m='573140'>to your</span> <span m='573350'>one</span> <span
  m='573630'>sample,</span> <span m='574900'>on</span> <span m='575020'>a</span>
  <span m='575080'>computer.</span> <span m='575980'>But</span> <span
  m='576480'>on the test,</span> <span m='576640'>we</span> <span
  m='576800'>will</span> <span m='576990'>probably</span> <span m='577260'>will
  not do that.</span> </p><p><span m='578510'>So</span> <span
  m='579080'>let's</span> <span m='579320'>take</span> <span m='579490'>a</span>
  <span m='579560'>look</span> <span m='579880'>at</span> <span
  m='580170'>how</span> <span m='580340'>you</span> <span
  m='580500'>calculate</span> <span m='580750'>the</span> <span
  m='580880'>weights</span> <span m='581140'>for</span> <span
  m='581450'>the</span> <span m='581580'>next</span> <span
  m='582040'>level.</span> <span m='583060'>And</span> <span
  m='583070'>then</span> <span m='583180'>you</span> <span
  m='583310'>have</span> <span m='583570'>the</span> <span
  m='583650'>weights</span> <span m='584490'>for</span> <span
  m='584600'>the</span> <span m='584970'>current level.</span> <span
  m='585570'>So</span> <span m='586720'>first</span> <span
  m='587000'>things</span> <span m='587200'>first.</span> <span
  m='588080'>New</span> <span m='588410'>weight,</span> <span
  m='588790'>weight</span> <span m='589040'>prime</span> <span
  m='589400'>equals--</span> <span m='589810'>starts</span> <span
  m='590250'>with</span> <span m='590430'>the</span> <span m='590580'>old</span>
  <span m='590800'>weight.</span> <span m='591500'>That</span> <span
  m='591710'>has</span> <span m='591930'>to</span> <span m='592020'>go</span>
  <span m='592250'>there</span> <span m='592480'>because</span> <span
  m='592860'>otherwise</span> <span m='593990'>we're</span> <span
  m='594110'>just</span> <span m='595050'>going</span> <span
  m='595220'>to</span> <span m='595320'>jump</span> <span m='595590'>off</span>
  <span m='595920'>somewhere</span> <span m='596410'>at random.</span> <span
  m='596910'>We</span> <span m='596940'>want</span> <span m='597300'>to</span>
  <span m='597870'>make</span> <span m='598060'>a</span> <span
  m='598150'>little</span> <span m='598550'>step</span> <span
  m='599130'>in</span> <span m='599260'>some</span> <span
  m='599490'>direction,</span> <span m='600010'>so</span> <span
  m='600150'>we</span> <span m='600240'>want</span> <span m='600420'>to</span>
  <span m='600470'>start</span> <span m='600860'>where</span> <span
  m='600990'>we</span> <span m='601170'>are,</span> <span m='601860'>with</span>
  <span m='602050'>the</span> <span m='602130'>weight.</span> <span
  m='603250'>And</span> <span m='603340'>then</span> <span
  m='603740'>we're</span> <span m='603890'>going</span> <span
  m='604110'>to</span> <span m='604380'>add</span> <span m='607960'>three</span>
  <span m='608200'>things.</span> <span m='608720'>So</span> <span
  m='609820'>if</span> <span m='610040'>we're</span> <span
  m='610160'>talking</span> <span m='610380'>about</span> <span
  m='610610'>the</span> <span m='610690'>weight</span> <span
  m='611050'>between</span> <span m='612710'>some</span> <span
  m='613020'>i</span> <span m='614800'>and</span> <span m='614990'>some</span>
  <span m='615190'>j--</span> <span m='616980'>there's</span> <span
  m='617390'>some</span> <span m='617610'>examples</span> <span
  m='618380'>of</span> <span m='618560'>the</span> <span m='618660'>names</span>
  <span m='618970'>of</span> <span m='619110'>weights.</span> <span
  m='620190'>So</span> <span m='620260'>this</span> <span m='620430'>is</span>
  <span m='620590'>w</span> <span m='621020'>1</span> <span m='621370'>i,</span>
  <span m='621900'>that's</span> <span m='622150'>the</span> <span
  m='622240'>weight</span> <span m='622420'>between</span> <span
  m='623440'>1</span> <span m='624240'>and--</span> <span m='624860'>so</span>
  <span m='625000'>this</span> <span m='625100'>is</span> <span
  m='625560'>w</span> <span m='625810'>1</span> <span m='626150'>a,</span> <span
  m='626490'>it's the</span> <span m='626740'>weight</span> <span
  m='627070'>between</span> <span m='627560'>1</span> <span
  m='628170'>and</span> <span m='628400'>a.</span> <span m='629332'>This</span>
  <span m='629800'>is</span> <span m='629910'>w</span> <span m='630230'>2</span>
  <span m='630550'>b,</span> <span m='631160'>which</span> <span
  m='631300'>is</span> <span m='631400'>the weight</span> <span
  m='631560'>between</span> <span m='631920'>2</span> <span
  m='632510'>and</span> <span m='632690'>b .</span> <span
  m='634920'>Makes</span> <span m='635140'>sense?</span> </p><p><span
  m='636170'>Well</span> <span m='636560'>makes sense</span> <span
  m='636850'>so</span> <span m='637060'>far,</span> <span m='637300'>but</span>
  <span m='637550'>what</span> <span m='638270'>if</span> <span
  m='638380'>it's</span> <span m='638750'>just</span> <span
  m='638940'>called</span> <span m='639170'>w b,</span> <span
  m='641990'>then</span> <span m='642390'>it's the</span> <span
  m='642470'>weight</span> <span m='642600'>between--</span> <span
  m='643860'>these</span> <span m='644520'>w's</span> <span m='644880'>that
  only</span> <span m='645240'>have</span> <span m='645370'>one</span> <span
  m='645620'>letter,</span> <span m='646320'>we'll</span> <span
  m='646460'>get</span> <span m='646650'>to</span> <span
  m='646790'>later.</span> <span m='647070'>They're</span> <span
  m='647300'>the</span> <span m='647350'>bias.</span> <span
  m='647930'>They're</span> <span m='648050'>the</span> <span
  m='648170'>offset.</span> <span m='649560'>They</span> <span
  m='650100'>are</span> <span m='650270'>always</span> <span
  m='650560'>attached</span> <span m='650920'>to</span> <span
  m='650970'>a</span> <span m='651030'>negative</span> <span
  m='651390'>1.</span> <span m='652020'>So</span> <span m='652270'>you</span>
  <span m='652450'>can</span> <span m='652610'>pretty</span> <span
  m='652830'>much</span> <span m='653040'>treat</span> <span m='656050'>them
  as</span> <span m='656270'>being</span> <span m='656470'>a</span> <span
  m='659830'>negative</span> <span m='660290'>1</span> <span
  m='660520'>here,</span> <span m='661590'>that</span> <span
  m='661960'>is</span> <span m='662170'>then</span> <span m='662510'>fed
  into</span> <span m='662840'>a</span> <span m='662940'>multiplier</span> <span
  m='663450'>with</span> <span m='663640'>this</span> <span m='663820'>w</span>
  <span m='663990'>b,</span> <span m='664840'>if</span> <span
  m='664960'>you</span> <span m='665200'>like.</span> <span
  m='670880'>This</span> <span m='671090'>is</span> <span
  m='671220'>implied</span> <span m='671720'>to</span> <span
  m='671800'>be</span> <span m='671930'>that.</span> <span m='672370'>All</span>
  <span m='672770'>of the</span> <span m='673190'>offsets</span> <span
  m='673610'>are</span> <span m='673700'>implied</span> <span
  m='674050'>to</span> <span m='674130'>be</span> <span m='674250'>that.</span>
  <span m='675920'>So</span> <span m='677420'>w</span> <span
  m='677860'>plus</span> <span m='679070'>sum</span> <span m='679510'>of</span>
  <span m='679800'>alpha--</span> <span m='682460'>why</span> <span
  m='682730'>is this</span> <span m='682880'>Greek</span> <span
  m='683220'>letter?</span> <span m='684130'>Where</span> <span m='684560'>does
  it</span> <span m='684620'>come</span> <span m='684900'>from?</span> <span
  m='685240'>How do</span> <span m='685480'>we</span> <span m='685670'>calculate
  it?</span> </p><p><span m='686320'>Well</span> <span m='686730'>alpha</span>
  <span m='687230'>is</span> <span m='687710'>just</span> <span
  m='688140'>some</span> <span m='690640'>value</span> <span
  m='690940'>told</span> <span m='691380'>to</span> <span m='691470'>you</span>
  <span m='691650'>on</span> <span m='691790'>the</span> <span
  m='691880'>quiz.</span> <span m='692240'>You'll</span> <span
  m='692350'>find</span> <span m='692740'>it</span> <span
  m='692920'>somewhere.</span> <span m='693190'>There's</span> <span
  m='693440'>no</span> <span m='693590'>way</span> <span
  m='693840'>you're</span> <span m='693990'>going</span> <span
  m='694080'>to</span> <span m='694120'>have</span> <span m='694310'>to</span>
  <span m='694430'>calculate</span> <span m='694870'>alpha.</span> <span
  m='695810'>You</span> <span m='695950'>might</span> <span m='696160'>be</span>
  <span m='696260'>asked</span> <span m='696440'>to</span> <span
  m='696530'>try</span> <span m='696670'>to</span> <span m='696730'>give</span>
  <span m='696870'>us</span> <span m='697070'>an</span> <span
  m='697290'>alpha,</span> <span m='698090'>but</span> <span
  m='698300'>probably</span> <span m='698720'>not.</span> <span
  m='699530'>Alpha</span> <span m='699980'>is</span> <span
  m='700650'>supposed</span> <span m='701120'>to</span> <span
  m='701180'>give</span> <span m='701420'>the</span> <span
  m='701500'>size</span> <span m='701840'>of</span> <span m='701950'>our</span>
  <span m='702040'>little</span> <span m='702270'>steps</span> <span
  m='702660'>that</span> <span m='702770'>we</span> <span m='702900'>take</span>
  <span m='703250'>when</span> <span m='703370'>we're</span> <span
  m='703470'>doing</span> <span m='703770'>hill climbing.</span> <span
  m='704650'>Very</span> <span m='704860'>large</span> <span
  m='705170'>alpha,</span> <span m='705610'>take</span> <span
  m='705780'>a</span> <span m='705840'>huge</span> <span m='706200'>step.</span>
  <span m='706600'>Very</span> <span m='706810'>small</span> <span
  m='707280'>alpha,</span> <span m='707810'>take</span> <span
  m='708050'>tentative</span> <span m='708510'>steps.</span> <span
  m='709410'>So</span> <span m='709600'>alpha</span> <span m='710140'>is</span>
  <span m='710410'>there,</span> <span m='711460'>basically,</span> <span
  m='711840'>to</span> <span m='711960'>change</span> <span
  m='712280'>this</span> <span m='712490'>answer</span> <span
  m='713250'>and</span> <span m='714430'>to</span> <span m='715050'>make</span>
  <span m='715400'>the</span> <span m='715490'>new</span> <span
  m='715730'>value</span> <span m='716680'>either</span> <span
  m='716880'>very</span> <span m='717120'>close</span> <span
  m='717470'>to</span> <span m='717570'>w,</span> <span m='717920'>or</span>
  <span m='718190'>far</span> <span m='718450'>from</span> <span
  m='718630'>w,</span> <span m='718900'>depending</span> <span
  m='719300'>on</span> <span m='719580'>our</span> <span
  m='719800'>taste.</span> <span m='720770'>So</span> <span
  m='721450'>plus</span> <span m='721740'>alpha</span> <span
  m='722570'>times</span> <span m='728000'>i,</span> <span m='730700'>so</span>
  <span m='731150'>i</span> <span m='731780'>is</span> <span
  m='733730'>the</span> <span m='733810'>value</span> <span
  m='734250'>coming</span> <span m='734630'>in</span> <span
  m='741400'>into</span> <span m='741720'>the</span> <span
  m='741830'>node.</span> <span m='744170'>We're</span> <span
  m='744370'>changing</span> <span m='744690'>the</span> <span
  m='744770'>weight</span> <span m='744970'>here.</span> <span
  m='745290'>So</span> <span m='745620'>i</span> <span m='745840'>is</span>
  <span m='746070'>the</span> <span m='747220'>value,</span> <span
  m='748030'>for</span> <span m='748220'>instance,</span> <span
  m='748660'>i</span> <span m='748830'>sub</span> <span m='749120'>1</span>
  <span m='749740'>here,</span> <span m='750870'>i</span> <span
  m='751090'>would</span> <span m='751280'>be</span> <span m='751450'>the</span>
  <span m='752380'>value</span> <span m='754020'>of</span> <span
  m='754110'>WAC,</span> <span m='754900'>i</span> <span m='755050'>would</span>
  <span m='755170'>be</span> <span m='755260'>the</span> <span
  m='755340'>value</span> <span m='755610'>coming</span> <span
  m='756080'>output</span> <span m='756670'>of</span> <span
  m='757950'>node</span> <span m='758190'>a.</span> <span m='760170'>WBC,</span>
  <span m='760900'>i</span> <span m='761050'>would</span> <span
  m='761160'>be</span> <span m='761240'>the</span> <span
  m='761510'>output</span> <span m='761795'>of</span> <span
  m='762080'>node</span> <span m='762460'>b.</span> <span m='763600'>i</span>
  <span m='763910'>is</span> <span m='764220'>sometimes</span> <span
  m='764720'>as</span> <span m='764930'>little</span> <span m='765380'>as</span>
  <span m='765480'>i</span> <span m='765850'>is</span> <span
  m='765970'>the</span> <span m='766120'>input</span> <span
  m='766780'>coming</span> <span m='767150'>in</span> <span m='767630'>to</span>
  <span m='767870'>meet</span> <span m='768180'>that</span> <span
  m='768470'>weight</span> <span m='768890'>at</span> <span
  m='769310'>the</span> <span m='769560'>multiplier.</span> <span
  m='771140'>And</span> <span m='771350'>then</span> <span
  m='771580'>it's</span> <span m='771750'>multiplied</span> <span
  m='772520'>by</span> <span m='774490'>delta</span> <span m='774960'>j.</span>
  <span m='776700'>Your</span> <span m='776880'>delta</span> <span
  m='777960'>is</span> <span m='778210'>the</span> <span m='778320'>delta</span>
  <span m='778710'>that</span> <span m='778880'>belongs</span> <span
  m='779560'>to</span> <span m='780100'>these</span> <span
  m='780380'>neural</span> <span m='780680'>net</span> <span
  m='780980'>nodes.</span> </p><p><span m='782200'>What</span> <span
  m='782380'>is</span> <span m='782500'>a</span> <span m='782580'>delta,</span>
  <span m='782970'>you</span> <span m='783180'>said?</span> <span
  m='784160'>Funny</span> <span m='784450'>you</span> <span
  m='784560'>may</span> <span m='784720'>ask.</span> <span m='785420'>It</span>
  <span m='785660'>is</span> <span m='785920'>a strange</span> <span
  m='786280'>Greek</span> <span m='786540'>letter.</span> <span
  m='787590'>It</span> <span m='787880'>sort</span> <span m='788090'>of</span>
  <span m='788180'>comes from the fact</span> <span m='788670'>that</span> <span
  m='788790'>we're</span> <span m='788930'>doing</span> <span
  m='789130'>some</span> <span m='789310'>partial</span> <span
  m='789590'>derivatives</span> <span m='790040'>and</span> <span
  m='790180'>stuff,</span> <span m='790580'>but</span> <span
  m='791390'>the</span> <span m='791490'>main</span> <span m='791750'>way</span>
  <span m='791890'>you're</span> <span m='792030'>going</span> <span
  m='792210'>to</span> <span m='792260'>figure</span> <span
  m='792420'>out</span> <span m='792500'>what</span> <span m='792630'>the</span>
  <span m='792680'>deltas</span> <span m='793020'>are</span> <span
  m='793335'>are</span> <span m='793650'>these</span> <span
  m='793960'>two</span> <span m='794540'>formulae</span> <span
  m='795190'>that</span> <span m='795330'>I've</span> <span
  m='795540'>not</span> <span m='795810'>written</span> <span
  m='796000'>in</span> <span m='796170'>yet.</span> <span m='797040'>So</span>
  <span m='798150'>hold</span> <span m='798420'>off</span> <span
  m='798740'>on</span> <span m='800420'>trying</span> <span m='800670'>to</span>
  <span m='800720'>figure</span> <span m='800910'>out</span> <span
  m='800970'>what</span> <span m='801090'>the</span> <span
  m='801180'>delta</span> <span m='801640'>is</span> <span
  m='802950'>until--</span> <span m='804100'>well</span> <span
  m='804330'>right</span> <span m='804540'>now,</span> <span m='804980'>I'm
  about to</span> <span m='805140'>tell</span> <span m='805390'>you</span> <span
  m='805500'>the</span> <span m='805630'>delta</span> <span
  m='805910'>is.</span> <span m='806710'>So</span> <span m='806880'>the</span>
  <span m='806980'>delta</span> <span m='807630'>is</span> <span
  m='807790'>basically,</span> <span m='809630'>think</span> <span
  m='809820'>of</span> <span m='809930'>the</span> <span m='810060'>delta</span>
  <span m='810670'>as</span> <span m='812130'>using</span> <span
  m='812520'>partial</span> <span m='813250'>derivatives</span> <span
  m='813930'>to</span> <span m='814270'>figure</span> <span
  m='814600'>out</span> <span m='814870'>which</span> <span
  m='815060'>way</span> <span m='815260'>you're</span> <span
  m='815390'>going</span> <span m='815610'>to</span> <span
  m='815690'>step,</span> <span m='816420'>when</span> <span
  m='816590'>you're</span> <span m='816690'>doing</span> <span m='816970'>hill
  climbing.</span> <span m='817940'>Because</span> <span m='818350'>you know
  when</span> <span m='818470'>you're</span> <span m='818550'>doing</span> <span
  m='818790'>hill</span> <span m='818920'>climbing,</span> <span
  m='819240'>you</span> <span m='819660'>look</span> <span
  m='819830'>around,</span> <span m='820430'>you</span> <span
  m='820530'>figure</span> <span m='820900'>out,</span> <span
  m='821370'>OK,</span> <span m='821810'>this</span> <span m='822090'>is</span>
  <span m='822180'>the</span> <span m='822280'>direction</span> <span
  m='823210'>of</span> <span m='823870'>the highest</span> <span
  m='824070'>increase,</span> <span m='824320'>and then</span> <span
  m='824630'>you</span> <span m='824730'>step</span> <span m='825020'>off</span>
  <span m='825240'>in</span> <span m='825360'>that</span> <span
  m='825540'>direction.</span> </p><p><span m='826980'>So</span> <span
  m='827050'>the</span> <span m='827160'>deltas</span> <span
  m='827460'>are</span> <span m='827970'>telling</span> <span
  m='828180'>you</span> <span m='828350'>which</span> <span
  m='828560'>way</span> <span m='828720'>to</span> <span m='828820'>step,</span>
  <span m='829390'>with</span> <span m='829650'>the</span> <span
  m='829820'>weights.</span> <span m='831270'>And</span> <span
  m='831490'>the</span> <span m='831560'>way</span> <span m='831710'>they</span>
  <span m='831860'>do</span> <span m='832040'>that</span> <span
  m='832420'>is</span> <span m='832730'>by</span> <span m='833240'>taking</span>
  <span m='833500'>the</span> <span m='833580'>partial</span> <span
  m='834060'>derivative</span> <span m='835480'>of--</span> <span
  m='836470'>basically</span> <span m='836755'>you</span> <span
  m='837040'>try</span> <span m='837300'>to</span> <span
  m='837460'>figure</span> <span m='837760'>out</span> <span
  m='838460'>how</span> <span m='838810'>the</span> <span
  m='838960'>weight</span> <span m='839850'>that</span> <span
  m='840030'>you're</span> <span m='840230'>currently</span> <span
  m='840740'>looking</span> <span m='841090'>at</span> <span
  m='842320'>is</span> <span m='843140'>contributing</span> <span
  m='843533'>to</span> <span m='845350'>the</span> <span
  m='845460'>performance</span> <span m='846210'>of</span> <span
  m='846440'>the</span> <span m='846520'>net.</span> <span
  m='847470'>Contributing</span> <span m='847970'>to,</span> <span
  m='849040'>either</span> <span m='849270'>the</span> <span
  m='849380'>good</span> <span m='849620'>performance</span> <span
  m='850070'>of</span> <span m='850180'>the</span> <span m='850270'>net,</span>
  <span m='850470'>or</span> <span m='850520'>the</span> <span
  m='850630'>bad</span> <span m='850940'>performance</span> <span
  m='851380'>of</span> <span m='851640'>the net.</span> <span
  m='854630'>So</span> <span m='855160'>when</span> <span
  m='855360'>you're</span> <span m='855450'>dealing</span> <span
  m='855830'>with</span> <span m='858670'>the</span> <span
  m='858750'>weights,</span> <span m='859800'>like</span> <span
  m='860160'>WBC,</span> <span m='860770'>WAC,</span> <span
  m='861330'>that</span> <span m='861530'>pretty</span> <span
  m='861690'>much</span> <span m='861890'>directly</span> <span
  m='862370'>feed</span> <span m='862620'>into</span> <span
  m='863190'>the</span> <span m='863420'>end</span> <span m='864640'>of</span>
  <span m='864950'>the</span> <span m='865030'>net.</span> <span
  m='867090'>They</span> <span m='867290'>feed</span> <span
  m='867560'>into</span> <span m='867620'>the</span> <span
  m='867700'>last</span> <span m='868140'>node,</span> <span m='868405'>and
  it</span> <span m='868670'>then</span> <span m='868880'>comes</span> <span
  m='869140'>out.</span> <span m='869330'>It's</span> <span
  m='869400'>the</span> <span m='869570'>output.</span> <span
  m='871990'>That's</span> <span m='872650'>pretty</span> <span
  m='873000'>easy.</span> <span m='873590'>You</span> <span
  m='873790'>can</span> <span m='873960'>tell</span> <span
  m='874450'>exactly</span> <span m='874930'>how</span> <span
  m='875090'>much</span> <span m='875510'>those</span> <span
  m='875820'>weights,</span> <span m='876270'>and</span> <span
  m='876460'>the</span> <span m='876520'>values</span> <span
  m='876820'>coming</span> <span m='877060'>from</span> <span
  m='877200'>them,</span> <span m='877280'>are contributing</span> <span
  m='878040'>to</span> <span m='878180'>the</span> <span m='878380'>end.</span>
  <span m='879440'>And</span> <span m='879820'>we</span> <span
  m='879940'>do</span> <span m='880110'>that</span> <span m='880640'>by</span>
  <span m='885520'>essentially,</span> <span m='886580'>remember</span> <span
  m='886950'>what</span> <span m='887100'>the</span> <span
  m='887180'>partial</span> <span m='887540'>derivative,</span> <span
  m='889020'>so</span> <span m='890610'>partial</span> <span
  m='891030'>derivative</span> <span m='891430'>here</span> <span
  m='893120'>is,</span> <span m='895550'>in</span> <span m='895760'>fact,</span>
  <span m='897300'>the</span> <span m='897400'>way</span> <span
  m='897490'>that</span> <span m='897790'>the</span> <span
  m='897990'>final</span> <span m='898310'>weights</span> <span
  m='898610'>are</span> <span m='898690'>contributing</span> <span
  m='899240'>to</span> <span m='899380'>the</span> <span
  m='899490'>performance,</span> <span m='900540'>is</span> <span
  m='900990'>just</span> <span m='901180'>the</span> <span
  m='901280'>performance</span> <span m='901790'>function.</span> </p><p><span
  m='902850'>Partial</span> <span m='903200'>derivative--</span> <span
  m='904690'>I've</span> <span m='904890'>already</span> <span
  m='905160'>figured</span> <span m='905420'>out</span> <span
  m='905630'>the</span> <span m='905710'>derivative</span> <span
  m='906110'>here,</span> <span m='906340'>it's</span> <span
  m='906570'>just</span> <span m='906910'>d</span> <span m='907320'>minus</span>
  <span m='907575'>o.</span> <span m='911800'>This</span> <span
  m='912010'>is</span> <span m='912140'>for</span> <span m='914360'>sort</span>
  <span m='914590'>of</span> <span m='914750'>final</span> <span
  m='915140'>weights,</span> <span m='915490'>the</span> <span
  m='915580'>weights</span> <span m='916200'>in</span> <span
  m='916330'>the</span> <span m='916420'>last</span> <span
  m='916790'>level.</span> <span m='917670'>D</span> <span
  m='917800'>minus</span> <span m='918040'>o,</span> <span
  m='918590'>except</span> <span m='918740'>we're</span> <span
  m='918840'>not</span> <span m='919090'>done</span> <span
  m='919290'>yet,</span> <span m='919790'>because</span> <span
  m='920530'>when</span> <span m='920730'>we</span> <span m='920850'>do</span>
  <span m='921030'>derivatives,</span> <span m='921490'>remember</span> <span
  m='921790'>the</span> <span m='921930'>chain</span> <span
  m='922250'>rule.</span> <span m='924560'>To</span> <span m='924890'>get</span>
  <span m='925290'>from</span> <span m='925440'>the</span> <span
  m='925590'>end</span> <span m='926590'>to</span> <span m='927050'>these</span>
  <span m='927280'>weights,</span> <span m='928580'>we</span> <span
  m='928760'>pass</span> <span m='929020'>through,</span> <span
  m='929330'>well</span> <span m='929670'>it</span> <span m='929820'>should be
  a</span> <span m='930220'>sigmoid,</span> <span m='930580'>here</span> <span
  m='930770'>it's</span> <span m='930920'>not,</span> <span
  m='931540'>we're</span> <span m='931700'>going</span> <span
  m='931800'>to</span> <span m='931860'>pretend</span> <span
  m='932220'>it</span> <span m='932290'>is</span> <span m='933220'>for</span>
  <span m='933320'>the</span> <span m='933420'>moment,</span> <span
  m='933730'>we</span> <span m='933860'>pass</span> <span m='934150'>through
  a</span> <span m='934320'>sigmoid,</span> <span m='936000'>and</span> <span
  m='936300'>since</span> <span m='936460'>we</span> <span
  m='936580'>passed</span> <span m='936950'>through</span> <span
  m='937170'>the</span> <span m='937280'>sigmoid,</span> <span
  m='937820'>we</span> <span m='937940'>had</span> <span
  m='938100'>better</span> <span m='938420'>take</span> <span
  m='938710'>the</span> <span m='938950'>derivative</span> <span
  m='939390'>of</span> <span m='939540'>the</span> <span
  m='939610'>sigmoid</span> <span m='940070'>function.</span> <span
  m='941050'>That</span> <span m='941290'>is,</span> <span m='944800'>y</span>
  <span m='945300'>times 1</span> <span m='945630'>minus</span> <span
  m='945910'>y.</span> <span m='946700'>Well</span> <span m='946910'>what</span>
  <span m='947070'>is</span> <span m='947180'>y?</span> <span
  m='947510'>What</span> <span m='947690'>is</span> <span m='947790'>the</span>
  <span m='947920'>output</span> <span m='948340'>of</span> <span
  m='948440'>the</span> <span m='948540'>sigmoid?</span> <span
  m='950150'>It's</span> <span m='950380'>up.</span> <span m='951970'>So</span>
  <span m='952270'>that's</span> <span m='953060'>also</span> <span
  m='953350'>multiplied</span> <span m='953800'>by</span> <span
  m='955100'>o</span> <span m='955610'>times</span> <span m='955920'>1</span>
  <span m='956120'>minus</span> <span m='956320'>o.</span> </p><p><span
  m='962667'>However,</span> <span m='963610'>there</span> <span
  m='963960'>is</span> <span m='964380'>a--</span> <span m='964960'>let me
  see,</span> <span m='965480'>let me</span> <span m='965540'>see,</span> <span
  m='966540'>yes--</span> <span m='968276'>sorry,</span> <span
  m='968710'>I'm</span> <span m='969440'>carefully</span> <span
  m='969980'>studying</span> <span m='970300'>this</span> <span
  m='970700'>sheet</span> <span m='970780'>to make</span> <span
  m='970930'>sure</span> <span m='971120'>my</span> <span
  m='971390'>nomenclature</span> <span m='972300'>is</span> <span
  m='972520'>exactly</span> <span m='973000'>right</span> <span
  m='973250'>for</span> <span m='973360'>our</span> <span m='973450'>new</span>
  <span m='973720'>nomenclature,</span> <span m='974510'>which</span> <span
  m='975530'>so</span> <span m='975930'>new</span> <span m='976300'>and</span>
  <span m='976430'>brave,</span> <span m='977120'>that</span> <span
  m='977290'>we're</span> <span m='977720'>doing</span> <span
  m='977990'>it,</span> <span m='978130'>that</span> <span m='978500'>we</span>
  <span m='978620'>only</span> <span m='978860'>knew</span> <span
  m='979010'>for</span> <span m='979170'>sure</span> <span
  m='979360'>we're</span> <span m='979510'>going</span> <span
  m='979710'>to</span> <span m='979770'>do</span> <span m='979910'>it</span>
  <span m='980010'>on</span> <span m='980170'>Wednesday.</span> <span
  m='981450'>So</span> <span m='982210'>we</span> <span m='982370'>have</span>
  <span m='982690'>d</span> <span m='982870'>minus</span> <span
  m='983130'>o</span> <span m='983950'>times</span> <span m='985180'>o</span>
  <span m='985360'>times</span> <span m='985630'>1</span> <span
  m='985790'>minus</span> <span m='986080'>o.</span> <span m='989100'>So</span>
  <span m='990870'>you</span> <span m='991030'>say,</span> <span
  m='991810'>that's</span> <span m='992110'>fine,</span> <span m='992790'>that
  can get</span> <span m='993150'>us</span> <span m='994240'>these</span> <span
  m='994920'>weights</span> <span m='995440'>here,</span> <span
  m='996560'>even</span> <span m='996860'>this</span> <span m='997100'>w</span>
  <span m='997480'>c,</span> <span m='998700'>how</span> <span
  m='998960'>are</span> <span m='998980'>we</span> <span m='999080'>going</span>
  <span m='999300'>to</span> <span m='999360'>get</span> <span
  m='1001060'>the</span> <span m='1001160'>deltas</span> <span
  m='1001460'>for</span> <span m='1001980'>the</span> <span
  m='1007150'>new</span> <span m='1007330'>weights</span> <span
  m='1007620'>here?</span> <span m='1011330'>Oh,</span> <span
  m='1011770'>I</span> <span m='1011890'>realize--</span> <span
  m='1014438'>yeah,</span> <span m='1014930'>I</span> <span
  m='1015100'>got</span> <span m='1015600'>it.</span> <span
  m='1015870'>So</span> <span m='1016030'>the</span> <span
  m='1016160'>delta--</span> <span m='1017110'>by</span> <span
  m='1017560'>the</span> <span m='1017620'>way,</span> <span
  m='1017700'>this</span> <span m='1017910'>is a delta c,</span> <span
  m='1018860'>how</span> <span m='1019160'>is</span> <span
  m='1019520'>neuron</span> <span m='1019940'>c</span> <span
  m='1020140'>contributing</span> <span m='1020550'>to</span> <span
  m='1020630'>the</span> <span m='1020700'>output?</span> <span m='1020980'>Well
  it's</span> <span m='1021280'>directly</span> <span
  m='1021790'>contributing</span> <span m='1022230'>to</span> <span
  m='1022300'>the</span> <span m='1022390'>output</span> <span
  m='1022705'>,</span> <span m='1023020'>and</span> <span
  m='1023360'>it's</span> <span m='1023500'>got</span> <span m='1023740'>a
  sigmoid</span> <span m='1024160'>in</span> <span m='1024300'>it.</span> <span
  m='1024819'>It</span> <span m='1025050'>doesn't</span> <span
  m='1025359'>really,</span> <span m='1025619'>but</span> <span
  m='1025780'>we're</span> <span m='1025910'>pretending</span> <span
  m='1026225'>it does</span> <span m='1026540'>for</span> <span
  m='1026650'>now.</span> <span m='1027290'>d</span> <span
  m='1027430'>minus</span> <span m='1027640'>o</span> <span
  m='1028250'>times</span> <span m='1028560'>1</span> <span
  m='1029069'>minus</span> <span m='1029339'>o.</span> </p><p><span
  m='1030440'>What</span> <span m='1030640'>about</span> <span
  m='1031010'>inner</span> <span m='1031609'>node?</span> <span
  m='1032329'>Node</span> <span m='1032690'>d,</span> <span
  m='1033230'>node</span> <span m='1033520'>a,</span> <span
  m='1034210'>what</span> <span m='1034390'>are</span> <span
  m='1034450'>we</span> <span m='1034560'>going</span> <span
  m='1034680'>to</span> <span m='1034730'>have</span> <span
  m='1034890'>to</span> <span m='1035000'>do?</span> <span
  m='1035780'>Well</span> <span m='1036220'>the</span> <span
  m='1036359'>way</span> <span m='1036560'>they</span> <span
  m='1036750'>contribute</span> <span m='1037250'>to</span> <span
  m='1037329'>the</span> <span m='1037430'>output</span> <span
  m='1038150'>is</span> <span m='1038329'>that</span> <span
  m='1038460'>they</span> <span m='1038599'>contribute</span> <span
  m='1039160'>to</span> <span m='1039250'>node</span> <span
  m='1039550'>c.</span> <span m='1040819'>So</span> <span m='1041660'>we</span>
  <span m='1041829'>can</span> <span m='1041970'>do</span> <span
  m='1042079'>this</span> <span m='1042319'>problem</span> <span
  m='1042849'>recursively.</span> <span m='1045170'>So</span> <span
  m='1045599'>let's</span> <span m='1046089'>do</span> <span
  m='1046270'>this</span> <span m='1046480'>recursively.</span> <span
  m='1047680'>First</span> <span m='1048050'>of</span> <span
  m='1048130'>all,</span> <span m='1048980'>as you have</span> <span
  m='1049250'>probably</span> <span m='1049530'>figured</span> <span
  m='1049830'>out,</span> <span m='1050080'>all</span> <span m='1050560'>of them
  are</span> <span m='1050720'>going</span> <span m='1050890'>to</span> <span
  m='1050950'>have</span> <span m='1051140'>an</span> <span m='1051280'>o</span>
  <span m='1051430'>times</span> <span m='1051710'>1</span> <span
  m='1051880'>minus</span> <span m='1052100'>o</span> <span
  m='1052350'>factoring</span> <span m='1052880'>from</span> <span
  m='1053050'>the</span> <span m='1053160'>chain</span> <span
  m='1053440'>rule,</span> <span m='1053860'>because</span> <span
  m='1054080'>they're</span> <span m='1054230'>all</span> <span
  m='1054640'>sigmoid,</span> <span m='1055190'>pretending</span> <span
  m='1055570'>that</span> <span m='1055690'>they're</span> <span
  m='1055820'>all</span> <span m='1056100'>sigmoids.</span> <span
  m='1059430'>We</span> <span m='1059550'>also</span> <span
  m='1059760'>have</span> <span m='1059850'>a</span> <span
  m='1059920'>dearth</span> <span m='1060530'>of</span> <span
  m='1060740'>good</span> <span m='1060980'>problems</span> <span
  m='1061440'>that are</span> <span m='1061580'>actually</span> <span
  m='1062030'>sigmoid</span> <span m='1062660'>on</span> <span
  m='1064200'>the</span> <span m='1064260'>web</span> <span
  m='1064500'>right</span> <span m='1064650'>now.</span> <span
  m='1064800'>There's</span> <span m='1065030'>only</span> <span
  m='1065410'>2007.</span> <span m='1066990'>But</span> <span
  m='1068610'>here's</span> <span m='1068990'>o</span> <span
  m='1069140'>times</span> <span m='1069390'>1</span> <span
  m='1069530'>minus</span> <span m='1069780'>o,</span> <span
  m='1070650'>what</span> <span m='1070800'>are</span> <span
  m='1070830'>we</span> <span m='1070950'>going</span> <span
  m='1071160'>to</span> <span m='1071220'>do</span> <span m='1071850'>for</span>
  <span m='1072360'>the</span> <span m='1072520'>rest</span> <span
  m='1072850'>of</span> <span m='1072950'>it?</span> <span
  m='1073070'>How</span> <span m='1073240'>does</span> <span
  m='1073380'>it</span> <span m='1073460'>contribute</span> <span
  m='1074050'>to</span> <span m='1074510'>our</span> <span
  m='1074660'>final</span> <span m='1074950'>result?</span> </p><p><span
  m='1075770'>Well</span> <span m='1076240'>it</span> <span
  m='1076350'>contributes</span> <span m='1076890'>to</span> <span
  m='1076980'>our</span> <span m='1077090'>final</span> <span
  m='1077390'>result</span> <span m='1078010'>recursively.</span> <span
  m='1080460'>So</span> <span m='1080670'>we're</span> <span
  m='1080890'>talking</span> <span m='1081080'>about</span> <span
  m='1081230'>delta</span> <span m='1081490'>i.</span> <span
  m='1081920'>I</span> <span m='1082350'>is</span> <span m='1082540'>an</span>
  <span m='1082670'>inner</span> <span m='1084690'>node.</span> <span
  m='1084930'>It's</span> <span m='1085130'>not</span> <span
  m='1085910'>a</span> <span m='1085960'>final</span> <span
  m='1086360'>node.</span> <span m='1086740'>It's</span> <span
  m='1086940'>somewhere</span> <span m='1087140'>along</span> <span
  m='1087390'>the</span> <span m='1087460'>way.</span> <span
  m='1088390'>So</span> <span m='1089930'>sum</span> <span
  m='1090320'>over</span> <span m='1090630'>j</span> <span m='1093950'>of</span>
  <span m='1094940'>w,</span> <span m='1095010'>going</span> <span
  m='1097020'>from</span> <span m='1097220'>i</span> <span m='1097480'>to</span>
  <span m='1097630'>j,</span> <span m='1100870'>times</span> <span
  m='1102480'>delta</span> <span m='1102800'>j.</span> <span
  m='1104500'>Now</span> <span m='1105320'>sum</span> <span
  m='1105640'>over</span> <span m='1105910'>all</span> <span
  m='1106250'>j,</span> <span m='1107216'>j</span> <span m='1107700'>such</span>
  <span m='1108200'>that</span> <span m='1108450'>i</span> <span
  m='1109140'>leads</span> <span m='1109610'>to</span> <span
  m='1109740'>j.</span> <span m='1112000'>I</span> <span
  m='1112180'>needs</span> <span m='1112460'>to</span> <span
  m='1112570'>have</span> <span m='1112800'>a</span> <span
  m='1112860'>direct</span> <span m='1113230'>path</span> <span
  m='1113520'>into</span> <span m='1113800'>j.</span> <span
  m='1114860'>So</span> <span m='1115250'>if</span> <span m='1116000'>i,</span>
  <span m='1116550'>in</span> <span m='1116670'>this</span> <span
  m='1116840'>instance,</span> <span m='1117150'>was</span> <span
  m='1117370'>j,</span> <span m='1118830'>everyone,</span> <span
  m='1120560'>the</span> <span m='1120710'>only</span> <span
  m='1120950'>possible</span> <span m='1121320'>j</span> <span
  m='1121740'>in</span> <span m='1121970'>this</span> <span
  m='1122250'>would</span> <span m='1122440'>be</span> <span
  m='1124620'>c.</span> <span m='1125240'>That's</span> <span
  m='1125450'>right.</span> <span m='1126170'>We</span> <span
  m='1126300'>would</span> <span m='1126410'>not</span> <span
  m='1127180'>sum</span> <span m='1127500'>over</span> <span
  m='1128430'>b</span> <span m='1128860'>as</span> <span m='1129030'>one</span>
  <span m='1129210'>of</span> <span m='1129320'>the</span> <span
  m='1129420'>j.</span> <span m='1129940'>i</span> <span m='1130190'>does</span>
  <span m='1130370'>not</span> <span m='1130580'>lead</span> <span
  m='1130890'>to</span> <span m='1132740'>b,</span> <span m='1133030'>or</span>
  <span m='1133320'>a</span> <span m='1133520'>does</span> <span
  m='1133620'>not</span> <span m='1133870'>lead to</span> <span
  m='1133960'>b,</span> <span m='1134230'>a</span> <span m='1134510'>only</span>
  <span m='1134570'>leads</span> <span m='1134620'>to</span> <span
  m='1134740'>c.</span> <span m='1135470'>Also</span> <span
  m='1135770'>note</span> <span m='1135990'>that</span> <span
  m='1136340'>c</span> <span m='1136690'>does</span> <span
  m='1136870'>not</span> <span m='1137120'>need</span> <span
  m='1137270'>to</span> <span m='1137360'>be</span> <span
  m='1137610'>here.</span> <span m='1137820'>That's</span> <span
  m='1138060'>going</span> <span m='1138240'>backwards.</span> <span
  m='1139860'>So</span> <span m='1140040'>you</span> <span
  m='1140230'>just--</span> <span m='1140700'>to</span> <span
  m='1140790'>figure</span> <span m='1141020'>out</span> <span
  m='1141150'>which</span> <span m='1141370'>j</span> <span
  m='1141660'>you're</span> <span m='1141800'>looking</span> <span
  m='1142090'>at,</span> <span m='1142760'>look</span> <span
  m='1143340'>directly</span> <span m='1144050'>forwards</span> <span
  m='1144930'>at</span> <span m='1145090'>the</span> <span
  m='1145180'>next</span> <span m='1145640'>one.</span> <span
  m='1147430'>So</span> <span m='1147850'>if</span> <span
  m='1148010'>there</span> <span m='1148120'>was</span> <span
  m='1148230'>another</span> <span m='1148580'>d</span> <span
  m='1149040'>here,</span> <span m='1149700'>or</span> <span
  m='1150220'>that</span> <span m='1150530'>a</span> <span m='1150980'>does  
  not go to d,</span> <span m='1151030'>a</span> <span m='1151310'>goes</span>
  <span m='1152020'>to</span> <span m='1152150'>c.</span> </p><p><span
  m='1154770'>You only</span> <span m='1154910'>look</span> <span
  m='1155040'>at</span> <span m='1155120'>the</span> <span
  m='1155200'>next</span> <span m='1155450'>level</span> <span
  m='1155660'>children,</span> <span m='1155970'>and</span> <span
  m='1156280'>you</span> <span m='1156440'>sum</span> <span
  m='1156730'>over</span> <span m='1156970'>all</span> <span
  m='1158750'>those</span> <span m='1159000'>children,</span> <span
  m='1160890'>the</span> <span m='1160980'>weight</span> <span
  m='1161270'>between</span> <span m='1161640'>them,</span> <span
  m='1162580'>multiplied</span> <span m='1163050'>by</span> <span
  m='1163690'>the</span> <span m='1163820'>child's</span> <span
  m='1164170'>delta.</span> <span m='1165040'>That</span> <span
  m='1165250'>makes</span> <span m='1165470'>sense,</span> <span
  m='1165860'>right?</span> <span m='1166440'>Because</span> <span
  m='1167240'>the</span> <span m='1167340'>way</span> <span
  m='1167630'>we</span> <span m='1168050'>affect,</span> <span
  m='1168820'>if</span> <span m='1169010'>the</span> <span
  m='1169120'>child's</span> <span m='1169570'>delta</span> <span
  m='1169880'>is</span> <span m='1170000'>the</span> <span
  m='1170070'>way</span> <span m='1170180'>the</span> <span
  m='1170380'>child</span> <span m='1170650'>affects</span> <span
  m='1171270'>the</span> <span m='1171400'>output,</span> <span
  m='1172820'>calling</span> <span m='1173105'>these</span> <span
  m='1173390'>children</span> <span m='1173850'>for</span> <span
  m='1174060'>a</span> <span m='1174120'>moment,</span> <span
  m='1175040'>and</span> <span m='1175540'>then</span> <span
  m='1175960'>if</span> <span m='1176110'>this</span> <span
  m='1176690'>one</span> <span m='1176870'>directly</span> <span
  m='1177260'>affects</span> <span m='1177500'>the</span> <span
  m='1177600'>output,</span> <span m='1177960'>then</span> <span
  m='1178110'>the</span> <span m='1178190'>way</span> <span
  m='1178320'>this</span> <span m='1178580'>one</span> <span
  m='1178750'>affects</span> <span m='1179110'>it</span> <span
  m='1179260'>is--</span> <span m='1181820'>it</span> <span
  m='1182190'>affects</span> <span m='1182480'>it</span> <span
  m='1182780'>because</span> <span m='1183090'>it</span> <span
  m='1183200'>affects</span> <span m='1183540'>this,</span> <span
  m='1184290'>but</span> <span m='1184430'>it's</span> <span
  m='1184580'>also</span> <span m='1185000'>multiplied</span> <span
  m='1185480'>by</span> <span m='1185670'>it's</span> <span
  m='1185870'>weight.</span> <span m='1186960'>So</span> <span
  m='1187180'>in</span> <span m='1187320'>fact,</span> <span
  m='1188710'>for</span> <span m='1188880'>instance,</span> <span
  m='1189260'>if</span> <span m='1189290'>the</span> <span
  m='1189390'>weight</span> <span m='1189610'>between</span> <span m='1190040'>a
  and c</span> <span m='1190320'>were</span> <span m='1190720'>0,</span> <span
  m='1192440'>then</span> <span m='1192630'>a</span> <span
  m='1192790'>doesn't</span> <span m='1193030'>affect</span> <span
  m='1193310'>the</span> <span m='1193430'>output</span> <span
  m='1193570'>at</span> <span m='1193660'>all,</span> <span
  m='1195060'>right?</span> <span m='1195690'>Because</span> <span
  m='1196310'>its</span> <span m='1196470'>weight</span> <span
  m='1196690'>is</span> <span m='1196850'>0,</span> <span m='1197910'>and</span>
  <span m='1198670'>when</span> <span m='1199010'>we</span> <span
  m='1199740'>do</span> <span m='1199930'>this</span> <span
  m='1200130'>problem,</span> <span m='1200600'>we</span> <span
  m='1200750'>go</span> <span m='1202140'>this</span> <span
  m='1202660'>times</span> <span m='1202920'>0,</span> <span
  m='1203860'>and</span> <span m='1204010'>then</span> <span
  m='1204110'>we</span> <span m='1204210'>try</span> <span m='1204380'>to</span>
  <span m='1204450'>add</span> <span m='1204730'>it in</span> <span
  m='1204850'>there,</span> <span m='1205010'>doesn't</span> <span
  m='1205300'>affect</span> <span m='1205630'>anything.</span> <span
  m='1206510'>It's</span> <span m='1206660'>weight is</span> <span
  m='1207080'>very</span> <span m='1207300'>high,</span> <span
  m='1207880'>it's</span> <span m='1208080'>going</span> <span
  m='1208210'>to</span> <span m='1208350'>really</span> <span
  m='1208620'>dominate</span> <span m='1211340'>c,</span> <span
  m='1212350'>and</span> <span m='1212730'>that</span> <span
  m='1212960'>is</span> <span m='1213110'>taken</span> <span
  m='1213340'>into</span> <span m='1213490'>account</span> <span
  m='1213780'>here,</span> <span m='1214280'>and</span> <span
  m='1214410'>then</span> <span m='1214570'>multiply</span> <span
  m='1215050'>by</span> <span m='1215990'>the</span> <span
  m='1216110'>delta</span> <span m='1216400'>for</span> <span
  m='1216740'>the</span> <span m='1216980'>right</span> <span
  m='1217550'>node.</span> </p><p><span m='1219090'>So</span> <span
  m='1221340'>the</span> <span m='1221430'>following</span> <span
  m='1221790'>question,</span> <span m='1222390'>and</span> <span
  m='1222560'>since</span> <span m='1222730'>I</span> <span
  m='1222800'>spent</span> <span m='1223010'>a</span> <span
  m='1223060'>lot</span> <span m='1223190'>of</span> <span
  m='1223270'>time</span> <span m='1223430'>with</span> <span
  m='1223500'>formulae</span> <span m='1224070'>and</span> <span
  m='1224300'>not</span> <span m='1225380'>that</span> <span
  m='1225580'>much</span> <span m='1225850'>time</span> <span
  m='1226610'>starting</span> <span m='1226890'>on</span> <span
  m='1226970'>the</span> <span m='1227050'>problem,</span> <span
  m='1228120'>I</span> <span m='1228760'>will</span> <span
  m='1229170'>not</span> <span m='1229670'>call</span> <span m='1229940'>on
  someone at</span> <span m='1230210'>random,</span> <span
  m='1230650'>but</span> <span m='1230880'>rather</span> <span
  m='1231130'>take</span> <span m='1231340'>a</span> <span
  m='1231380'>volunteer.</span> <span m='1232152'>If</span> <span
  m='1232690'>no</span> <span m='1232870'>one   volunteers,</span> <span
  m='1233320'>I'll</span> <span m='1233615'>eventually</span> <span
  m='1233910'>tell</span> <span m='1234160'>you,</span> <span
  m='1234880'>which</span> <span m='1235100'>is,</span> <span
  m='1235750'>we've</span> <span m='1235940'>got</span> <span
  m='1236160'>some</span> <span m='1236320'>nice</span> <span
  m='1236560'>formulae</span> <span m='1237530'>on</span> <span
  m='1237710'>the</span> <span m='1237780'>bottom</span> <span
  m='1238270'>three.</span> <span m='1239970'>If</span> <span
  m='1240090'>we</span> <span m='1240240'>change</span> <span
  m='1240570'>the</span> <span m='1240680'>sigmoid</span> <span
  m='1241130'>function,</span> <span m='1242120'>what</span> <span
  m='1242340'>has</span> <span m='1242550'>to</span> <span
  m='1242660'>change?</span> <span m='1250770'>That's</span> <span
  m='1251410'>the</span> <span m='1251630'>only</span> <span
  m='1251920'>thing</span> <span m='1252050'>that</span> <span
  m='1252140'>changes</span> <span m='1253560'>in</span> <span
  m='1253720'>this</span> <span m='1253960'>crazy</span> <span
  m='1254410'>assed</span> <span m='1254600'>problem</span> <span
  m='1254970'>right</span> <span m='1255190'>here,</span> <span
  m='1255430'>which by the way,</span> <span m='1256000'>changes</span> <span
  m='1256410'>the</span> <span m='1256490'>sigmoid</span> <span
  m='1256780'>functions</span> <span m='1257140'>into adders,</span> <span
  m='1258820'>is</span> <span m='1258875'>that</span> <span
  m='1258930'>we</span> <span m='1259080'>take</span> <span
  m='1259430'>all</span> <span m='1259870'>of the</span> <span
  m='1260090'>o</span> <span m='1260340'>times</span> <span m='1260580'>1</span>
  <span m='1260690'>minus</span> <span m='1260860'>o</span> <span
  m='1262780'>in</span> <span m='1263080'>delta</span> <span
  m='1263430'>f</span> <span m='1263670'>and</span> <span m='1263820'>the</span>
  <span m='1263930'>delta</span> <span m='1264180'>i,</span> <span
  m='1264440'>and</span> <span m='1264700'>we</span> <span
  m='1264820'>change</span> <span m='1265100'>it</span> <span m='1265200'>to
  a</span> <span m='1265410'>new</span> <span m='1265660'>derivative.</span>
  <span m='1266750'>We</span> <span m='1266940'>then</span> <span
  m='1267440'>do</span> <span m='1267580'>the</span> <span
  m='1267670'>exact</span> <span m='1268160'>same</span> <span
  m='1268390'>thing</span> <span m='1268650'>that we</span> <span
  m='1268840'>would've</span> <span m='1269090'>done.</span> <span
  m='1269850'>Correct.</span> </p><p><span m='1270650'>And</span> <span
  m='1271220'>on a</span> <span m='1271580'>similar</span> <span
  m='1271930'>note,</span> <span m='1272180'>if you</span> <span
  m='1272450'>change the</span> <span m='1272540'>performance</span> <span
  m='1273040'>function,</span> <span m='1274210'>how</span> <span
  m='1274300'>many</span> <span m='1274530'>of</span> <span
  m='1274590'>these</span> <span m='1274800'>equations</span> <span
  m='1275090'>at all</span> <span m='1275540'>have</span> <span
  m='1275720'>to</span> <span m='1275880'>change</span> <span m='1277630'>out of
  the</span> <span m='1277710'>bottom</span> <span m='1278350'>three.</span>
  <span m='1281360'>Yeah.</span> <span m='1282070'>That's</span> <span
  m='1282510'>right, just</span> <span m='1282790'>one,</span> <span
  m='1283230'>just</span> <span m='1283500'>delta</span> <span
  m='1283770'>f.</span> <span m='1284430'>Take</span> <span
  m='1284710'>the</span> <span m='1284800'>d minus</span> <span
  m='1285130'>o,</span> <span m='1285660'>make it</span> <span
  m='1285810'>the</span> <span m='1285890'>new</span> <span
  m='1286070'>derivative</span> <span m='1286480'>of</span> <span
  m='1286580'>the</span> <span m='1286670'>new</span> <span
  m='1286810'>performance</span> <span m='1287260'>function.</span> <span
  m='1288390'>And</span> <span m='1288780'>in</span> <span
  m='1288890'>fact,</span> <span m='1289440'>delta i</span> <span
  m='1289610'>doesn't</span> <span m='1289910'>change</span> <span
  m='1290150'>at</span> <span m='1290210'>all.</span> <span
  m='1291920'>Does</span> <span m='1292050'>everyone</span> <span
  m='1292290'>see</span> <span m='1292450'>that?</span> <span
  m='1293220'>Because</span> <span m='1293625'>it</span> <span
  m='1294030'>is</span> <span m='1294310'>very</span> <span
  m='1294760'>common</span> <span m='1295210'>for</span> <span
  m='1295630'>something</span> <span m='1296050'>to</span> <span
  m='1296140'>be</span> <span m='1296270'>replaced,</span> <span
  m='1297530'>I</span> <span m='1297640'>think</span> <span
  m='1297980'>three</span> <span m='1298190'>of</span> <span
  m='1298310'>the</span> <span m='1298390'>four</span> <span
  m='1298620'>the</span> <span m='1298890'>quizzes</span> <span
  m='1299160'>that</span> <span m='1299250'>we</span> <span
  m='1299380'>have,</span> <span m='1299670'>replaced</span> <span
  m='1300170'>in</span> <span m='1300280'>some--</span> <span
  m='1300890'>changed</span> <span m='1301190'>something</span> <span
  m='1301650'>in</span> <span m='1301750'>some</span> <span
  m='1302000'>way.</span> </p><p><span m='1303400'>All</span> <span
  m='1303470'>right.</span> <span m='1303690'>Let's</span> <span
  m='1303910'>go.</span> <span m='1304620'>We're</span> <span
  m='1304770'>going</span> <span m='1304940'>to</span> <span
  m='1305040'>do</span> <span m='1305960'>2008</span> <span
  m='1306930'>quiz,</span> <span m='1307300'>because</span> <span
  m='1307560'>it</span> <span m='1307690'>has</span> <span m='1307850'>a</span>
  <span m='1307930'>part</span> <span m='1308160'>of</span> <span
  m='1308220'>the</span> <span m='1308320'>end</span> <span
  m='1308570'>that</span> <span m='1308690'>screwed</span> <span
  m='1309010'>up</span> <span m='1309160'>everyone,</span> <span
  m='1309710'>and</span> <span m='1309940'>so</span> <span
  m='1310090'>let's</span> <span m='1310300'>make</span> <span
  m='1310440'>sure</span> <span m='1310530'>we</span> <span
  m='1310620'>get</span> <span m='1310890'>to</span> <span
  m='1310950'>that</span> <span m='1311150'>part.</span> <span
  m='1311510'>That's</span> <span m='1311760'>going</span> <span
  m='1311850'>to</span> <span m='1311890'>be</span> <span m='1311980'>the</span>
  <span m='1312090'>part</span> <span m='1312370'>that</span> <span
  m='1312530'>you</span> <span m='1312650'>probably</span> <span
  m='1312960'>care</span> <span m='1313110'>about</span> <span
  m='1313250'>the</span> <span m='1313330'>most</span> <span
  m='1313690'>at</span> <span m='1313790'>this</span> <span
  m='1313970'>point.</span> <span m='1314920'>So</span> <span
  m='1315480'>these</span> <span m='1315730'>are</span> <span
  m='1315820'>all</span> <span m='1316010'>adders</span> <span
  m='1316470'>instead</span> <span m='1316790'>of</span> <span
  m='1316870'>sigmoids.</span> <span m='1318050'>That</span> <span
  m='1318250'>means</span> <span m='1318630'>that</span> <span
  m='1319950'>they</span> <span m='1320180'>simply</span> <span
  m='1320610'>add</span> <span m='1320860'>up</span> <span
  m='1321070'>everything</span> <span m='1322120'>as</span> <span
  m='1322360'>normal,</span> <span m='1323180'>for</span> <span
  m='1323380'>a</span> <span m='1323430'>normal</span> <span
  m='1323750'>neural</span> <span m='1324020'>net,</span> <span
  m='1324400'>and</span> <span m='1324560'>then</span> <span
  m='1324720'>there's</span> <span m='1324960'>no</span> <span
  m='1325190'>sigmoid</span> <span m='1325610'>threshold.</span> <span
  m='1326070'>They</span> <span m='1326210'>just</span> <span
  m='1326440'>give</span> <span m='1326670'>some kind of</span> <span
  m='1327060'>value.</span> <span m='1327710'>Question?</span> </p><p><span
  m='1328450'>STUDENT: So we talked</span> <span m='1328934'>about</span> <span
  m='1329418'>those</span> <span m='1329902'>multiplier</span> <span
  m='1330386'>things,</span> <span m='1331354'>we</span> <span
  m='1331838'>don't</span> <span m='1332322'>have those</span> <span
  m='1332806'>in nodes?</span> </p><p><span m='1334750'>PROFESSOR:
  They're</span> <span m='1334990'>not</span> <span m='1335390'>neural</span>
  <span m='1335730'>net</span> <span m='1335950'>nodes.</span> <span
  m='1336940'>That</span> <span m='1337160'>is</span> <span
  m='1337300'>one</span> <span m='1337550'>of</span> <span
  m='1337640'>the</span> <span m='1337760'>reasons</span> <span
  m='1340630'>why</span> <span m='1340790'>that</span> <span
  m='1340950'>other</span> <span m='1341290'>form</span> <span
  m='1341760'>that</span> <span m='1341830'>you</span> <span m='1342020'>can
  see</span> <span m='1342360'>over</span> <span m='1342490'>there</span> <span
  m='1342700'>is</span> <span m='1342810'>elegant.</span> <span
  m='1343940'>It</span> <span m='1344040'>only</span> <span
  m='1344290'>has</span> <span m='1344590'>the</span> <span
  m='1344670'>actual</span> <span m='1344980'>nodes</span> <span
  m='1345300'>on</span> <span m='1345490'>it.</span> <span m='1345720'>It is
  very</span> <span m='1345960'>compact.</span> <span m='1346970'>It's</span>
  <span m='1347130'>one</span> <span m='1347310'>of</span> <span
  m='1347390'>the</span> <span m='1347950'>front</span> <span
  m='1348210'>we've</span> <span m='1348390'>used</span> <span
  m='1348800'>in</span> <span m='1349080'>the</span> <span
  m='1349640'>previous</span> <span m='1350030'>tests.</span> <span
  m='1350210'>The</span> <span m='1350300'>question</span> <span
  m='1350640'>is,</span> <span m='1351020'>do</span> <span
  m='1351140'>those</span> <span m='1351430'>multipliers</span> <span
  m='1352060'>count as</span> <span m='1352430'>nodes?</span> <span
  m='1355020'>However</span> <span m='1356360'>by</span> <span m='1356580'>not
  putting</span> <span m='1357020'>in</span> <span m='1357090'>the</span> <span
  m='1357160'>multipliers,</span> <span m='1358110'>we</span> <span
  m='1358290'>feel</span> <span m='1358670'>it</span> <span
  m='1358890'>sometimes</span> <span m='1359400'>confuses</span> <span
  m='1359850'>people</span> <span m='1360150'>of</span> <span
  m='1360340'>explicitness.</span> <span m='1361410'>The</span> <span
  m='1361500'>ones</span> <span m='1361880'>that</span> <span
  m='1362050'>are</span> <span m='1362200'>nodes</span> <span
  m='1362650'>will</span> <span m='1362840'>always</span> <span
  m='1363410'>have</span> <span m='1364160'>a</span> <span
  m='1364260'>label,</span> <span m='1364760'>like</span> <span
  m='1365040'>a</span> <span m='1365420'>or</span> <span
  m='1365640'>here,</span> <span m='1365920'>you</span> <span
  m='1366060'>see</span> <span m='1366230'>there's</span> <span
  m='1366470'>a</span> <span m='1366560'>sigmoid</span> <span
  m='1366980'>and</span> <span m='1367060'>an</span> <span
  m='1367260'>L1.</span> <span m='1369240'>The</span> <span
  m='1369290'>multipliers</span> <span m='1370070'>are</span> <span
  m='1371140'>there</span> <span m='1371340'>for</span> <span
  m='1371510'>your</span> <span m='1371760'>convenience,</span> <span
  m='1372490'>to</span> <span m='1372570'>remind</span> <span m='1372970'>you
  to</span> <span m='1373170'>multiply,</span> <span m='1373710'>and</span>
  <span m='1374040'>also</span> <span m='1374310'>those,</span> <span
  m='1374870'>if</span> <span m='1374990'>you</span> <span
  m='1375110'>look</span> <span m='1375300'>those</span> <span
  m='1375500'>sigmoids</span> <span m='1376010'>that are</span> <span
  m='1376130'>over</span> <span m='1376350'>there,</span> <span
  m='1376650'>are</span> <span m='1376880'>there</span> <span
  m='1377050'>for</span> <span m='1377180'>your</span> <span
  m='1377380'>convenience</span> <span m='1377860'>to</span> <span
  m='1377930'>remind</span> <span m='1378320'>you</span> <span
  m='1378380'>to</span> <span m='1378760'>add.</span> </p><p><span
  m='1380330'>In</span> <span m='1380460'>fact,</span> <span
  m='1380850'>the</span> <span m='1380900'>only</span> <span
  m='1381970'>thing</span> <span m='1382220'>that</span> <span
  m='1382360'>counts</span> <span m='1382850'>as</span> <span
  m='1383010'>a</span> <span m='1383070'>node</span> <span m='1383630'>in</span>
  <span m='1383790'>the</span> <span m='1383890'>neural</span> <span
  m='1384260'>net--</span> <span m='1384610'>and that's a</span> <span
  m='1384650'>very</span> <span m='1384910'>good</span> <span
  m='1385070'>question--</span> <span m='1386100'>is</span> <span
  m='1386310'>usually</span> <span m='1386730'>the</span> <span
  m='1386810'>sigmoids,</span> <span m='1387810'>here</span> <span
  m='1388100'>it's</span> <span m='1388230'>the</span> <span
  m='1388390'>adders.</span> <span m='1390440'>We've</span> <span
  m='1390640'>essentially</span> <span m='1391120'>taken</span> <span
  m='1391400'>out</span> <span m='1391520'>the</span> <span
  m='1391600'>sigmoids.</span> <span m='1392090'>These</span> <span
  m='1392390'>adders</span> <span m='1392840'>are</span> <span
  m='1393200'>the--</span> <span m='1395080'>oh,</span> <span
  m='1395530'>here's</span> <span m='1395780'>the</span> <span
  m='1395870'>way</span> <span m='1396000'>to</span> <span
  m='1396110'>tell.</span> <span m='1397370'>If</span> <span
  m='1397500'>it's</span> <span m='1397760'>got a</span> <span
  m='1398310'>threshold</span> <span m='1399160'>weight</span> <span
  m='1399640'>associated</span> <span m='1400350'>with</span> <span
  m='1400560'>it,</span> <span m='1402010'>then</span> <span
  m='1402380'>it's</span> <span m='1402610'>one</span> <span
  m='1402850'>of</span> <span m='1403010'>the</span> <span
  m='1403210'>actual</span> <span m='1403640'>nodes.</span> <span
  m='1405200'>A</span> <span m='1405300'>threshold</span> <span
  m='1405920'>weight.</span> <span m='1406220'>I</span> <span
  m='1406340'>guess</span> <span m='1406600'>the</span> <span
  m='1406680'>multipliers</span> <span m='1407110'>look</span> <span
  m='1407290'>like</span> <span m='1407440'>they</span> <span
  m='1407540'>have</span> <span m='1407720'>a</span> <span
  m='1407780'>weight,</span> <span m='1407960'>but</span> <span
  m='1408150'>this</span> <span m='1408290'>is</span> <span
  m='1408420'>just</span> <span m='1408590'>the</span> <span
  m='1408680'>weight</span> <span m='1408780'>that</span> <span
  m='1408890'>is</span> <span m='1409040'>being</span> <span
  m='1409260'>multiplied</span> <span m='1409970'>in.</span> <span
  m='1412120'>This</span> <span m='1412290'>is</span> <span
  m='1412340'>our</span> <span m='1412420'>witness</span> <span
  m='1412710'>be</span> <span m='1412820'>multiplied</span> <span
  m='1413085'>in</span> <span m='1413350'>with</span> <span
  m='1413460'>the</span> <span m='1413560'>input,</span> <span
  m='1413940'>but</span> <span m='1414020'>if</span> <span m='1414120'>it</span>
  <span m='1414210'>has</span> <span m='1414400'>a</span> <span
  m='1414550'>threshold</span> <span m='1414990'>weight,</span> <span
  m='1415360'>like</span> <span m='1415570'>wa,</span> <span
  m='1415973'>wb--</span> <span m='1416780'>oh,</span> <span
  m='1416980'>I</span> <span m='1417090'>promised</span> <span
  m='1417440'>I</span> <span m='1417460'>would</span> <span
  m='1417590'>tell</span> <span m='1417930'>you guys the</span> <span
  m='1418080'>difference</span> <span m='1418370'>between</span> <span
  m='1418590'>the</span> <span m='1418700'>two</span> <span
  m='1418880'>weights.</span> </p><p><span m='1419760'>So</span> <span
  m='1419820'>let's</span> <span m='1420040'>do</span> <span
  m='1420140'>that</span> <span m='1420360'>very</span> <span
  m='1420590'>quickly.</span> <span m='1421960'>The</span> <span
  m='1422330'>kinds</span> <span m='1422610'>of</span> <span
  m='1422700'>weights</span> <span m='1423020'>that,</span> <span
  m='1423910'>say</span> <span m='1424080'>w2b</span> <span
  m='1425040'>or</span> <span m='1425140'>w1a,</span> <span
  m='1426250'>our</span> <span m='1426470'>weight</span> <span
  m='1426740'>the</span> <span m='1426860'>comes</span> <span
  m='1427210'>between</span> <span m='1428580'>input</span> <span
  m='1428930'>1</span> <span m='1429470'>and</span> <span m='1430210'>a</span>
  <span m='1430800'>or</span> <span m='1431240'>between</span> <span
  m='1431600'>a and</span> <span m='1431950'>c,</span> <span
  m='1432660'>then</span> <span m='1432860'>mentally</span> <span
  m='1433110'>multiplying</span> <span m='1434040'>the</span> <span
  m='1434310'>input</span> <span m='1434980'>by</span> <span
  m='1435140'>this</span> <span m='1435350'>weight,</span> <span
  m='1437590'>and</span> <span m='1437740'>then</span> <span
  m='1437930'>eventually</span> <span m='1438350'>that's</span> <span
  m='1438560'>added</span> <span m='1438830'>together.</span> <span
  m='1439840'>The</span> <span m='1439950'>threshold</span> <span
  m='1440580'>weights,</span> <span m='1442420'>they</span> <span
  m='1442770'>just</span> <span m='1442960'>have</span> <span
  m='1443460'>like</span> <span m='1443670'>wb,</span> <span
  m='1443930'>wa,</span> <span m='1444740'>wc.</span> <span m='1446040'>They
  are</span> <span m='1446300'>essentially</span> <span m='1446800'>to</span>
  <span m='1446910'>decide</span> <span m='1447290'>the</span> <span
  m='1447380'>threshold</span> <span m='1448750'>for</span> <span
  m='1449160'>a</span> <span m='1449340'>success</span> <span
  m='1449900'>or</span> <span m='1450170'>failure,</span> <span
  m='1450580'>for</span> <span m='1450710'>a</span> <span m='1450800'>1</span>
  <span m='1451100'>or</span> <span m='1451260'>a</span> <span
  m='1451360'>0,</span> <span m='1453940'>or</span> <span
  m='1454140'>anything</span> <span m='1454360'>in</span> <span
  m='1454440'>between,</span> <span m='1454715'>at</span> <span
  m='1454990'>any</span> <span m='1455470'>of</span> <span
  m='1455560'>the</span> <span m='1455640'>given</span> <span
  m='1456080'>nodes.</span> <span m='1457150'>So</span> <span
  m='1457470'>the</span> <span m='1457620'>idea</span> <span
  m='1457960'>is</span> <span m='1458570'>maybe</span> <span
  m='1459220'>you</span> <span m='1459810'>at</span> <span
  m='1460040'>some</span> <span m='1460270'>node</span> <span
  m='1460500'>want</span> <span m='1460720'>to</span> <span
  m='1460820'>have</span> <span m='1461070'>a</span> <span
  m='1461170'>really</span> <span m='1461460'>high</span> <span
  m='1461770'>cut</span> <span m='1462050'>off,</span> <span
  m='1462260'>you</span> <span m='1462360'>have</span> <span
  m='1462500'>to</span> <span m='1462610'>very</span> <span
  m='1463030'>high</span> <span m='1463180'>value</span> <span
  m='1463520'>coming</span> <span m='1463810'>in,</span> <span m='1463950'>or
  else</span> <span m='1464200'>it's</span> <span m='1464300'>a</span> <span
  m='1464350'>0.</span> <span m='1465180'>So</span> <span m='1465340'>you</span>
  <span m='1465470'>put</span> <span m='1465680'>a</span> <span
  m='1465710'>high</span> <span m='1465930'>threshold.</span> <span
  m='1467060'>The</span> <span m='1467210'>weight</span> <span
  m='1467420'>is</span> <span m='1467520'>multiplied</span> <span
  m='1467870'>by</span> <span m='1467960'>negative</span> <span
  m='1468310'>1.</span> <span m='1469200'>And</span> <span m='1469570'>in</span>
  <span m='1469690'>fact,</span> <span m='1474860'>the</span> <span
  m='1475110'>threshold</span> <span m='1475620'>weight</span> <span
  m='1476550'>won't--</span> <span m='1477080'>one</span> <span
  m='1477460'>could</span> <span m='1477880'>consider</span> <span
  m='1478340'>if</span> <span m='1478470'>you wanted</span> <span
  m='1478800'>to</span> <span m='1479060'>that the</span> <span
  m='1479210'>threshold</span> <span m='1479830'>weight</span> <span
  m='1480500'>times</span> <span m='1480850'>negative</span> <span
  m='1481110'>1. was</span> <span m='1481740'>also</span> <span
  m='1482190'>added</span> <span m='1482490'>in</span> <span
  m='1482640'>it</span> <span m='1482710'>that</span> <span
  m='1482950'>sum,</span> <span m='1484030'>instead</span> <span
  m='1484410'>of</span> <span m='1484510'>putting</span> <span
  m='1485550'>at</span> <span m='1485740'>the</span> <span
  m='1485820'>same</span> <span m='1486010'>location</span> <span
  m='1486420'>as</span> <span m='1486550'>the</span> <span
  m='1486630'>node.</span> <span m='1487560'>If</span> <span
  m='1487720'>that</span> <span m='1487920'>works</span> <span
  m='1488170'>better</span> <span m='1488430'>for</span> <span
  m='1488600'>you,</span> <span m='1489180'>when</span> <span
  m='1489420'>you're</span> <span m='1489550'>converting</span> <span
  m='1489980'>it,</span> <span m='1490140'>you</span> <span
  m='1490240'>can</span> <span m='1490340'>also</span> <span
  m='1490660'>think</span> <span m='1490840'>of</span> <span
  m='1490920'>it</span> <span m='1491050'>that</span> <span
  m='1491270'>way.</span> <span m='1492010'>Because</span> <span
  m='1492350'>the</span> <span m='1492440'>threshold</span> <span
  m='1492910'>weight</span> <span m='1493160'>is</span> <span
  m='1493290'>essentially</span> <span m='1494090'>multiplied</span> <span
  m='1494460'>by</span> <span m='1494610'>negative</span> <span
  m='1494950'>1</span> <span m='1495230'>and added</span> <span m='1495510'>in
  at</span> <span m='1495790'>that</span> <span m='1495990'>same</span> <span
  m='1496230'>sum</span> <span m='1496530'>over</span> <span
  m='1496740'>there.</span> <span m='1498130'>So</span> <span
  m='1498270'>that's</span> <span m='1498930'>another</span> <span
  m='1499200'>way</span> <span m='1499320'>to</span> <span m='1499430'>do</span>
  <span m='1499660'>it.</span> </p><p><span m='1502080'>There's</span> <span
  m='1502260'>a</span> <span m='1502350'>lot</span> <span m='1502580'>of</span>
  <span m='1502650'>ways</span> <span m='1502850'>to</span> <span
  m='1502930'>visualize</span> <span m='1503510'>these</span> <span
  m='1503700'>neural nets.</span> <span m='1504270'>Just</span> <span
  m='1504460'>make</span> <span m='1504650'>sure</span> <span
  m='1504860'>you</span> <span m='1505140'>have</span> <span
  m='1505290'>a</span> <span m='1505370'>way</span> <span
  m='1506170'>that</span> <span m='1506680'>makes</span> <span
  m='1506930'>sense</span> <span m='1507220'>to</span> <span
  m='1507320'>you,</span> <span m='1508030'>and</span> <span
  m='1508240'>that</span> <span m='1508360'>you</span> <span
  m='1508480'>can</span> <span m='1508650'>tell</span> <span
  m='1509040'>pretty</span> <span m='1509220'>much</span> <span
  m='1509370'>whatever</span> <span m='1509690'>we write,</span> <span
  m='1510130'>as</span> <span m='1510220'>long</span> <span
  m='1510360'>as</span> <span m='1510450'>it</span> <span
  m='1510530'>looks</span> <span m='1510710'>vaguely</span> <span
  m='1511120'>like</span> <span m='1511330'>that,</span> <span
  m='1512050'>how</span> <span m='1512280'>to</span> <span
  m='1512340'>get</span> <span m='1512640'>it</span> <span m='1512930'>in</span>
  <span m='1513060'>your</span> <span m='1513190'>mind,</span> <span
  m='1513800'>into</span> <span m='1514110'>the</span> <span
  m='1514210'>representation</span> <span m='1515160'>that</span> <span
  m='1515280'>works</span> <span m='1515470'>for</span> <span
  m='1515630'>you.</span> <span m='1515950'>Because</span> <span
  m='1516070'>once</span> <span m='1516310'>you</span> <span
  m='1516390'>have</span> <span m='1516490'>the</span> <span
  m='1516550'>representation</span> <span m='1517170'>right for you,</span>
  <span m='1518140'>you're</span> <span m='1518480'>more</span> <span
  m='1518650'>than</span> <span m='1518800'>halfway</span> <span
  m='1519210'>to</span> <span m='1519380'>solving</span> <span
  m='1519750'>these</span> <span m='1519940'>guys.</span> <span
  m='1520360'>They</span> <span m='1520530'>aren't</span> <span
  m='1520720'>that</span> <span m='1521080'>bad.</span> <span
  m='1521660'>They</span> <span m='1521790'>just</span> <span
  m='1522190'>look</span> <span m='1522400'>nasty.</span> <span
  m='1523080'>They</span> <span m='1523190'>don't</span> <span
  m='1523410'>bite.</span> <span m='1524310'>OK.</span> </p><p><span
  m='1524900'>These</span> <span m='1525110'>are</span> <span
  m='1525170'>just</span> <span m='1525390'>adders.</span> <span m='1526560'>So
  if</span> <span m='1526780'>it's</span> <span m='1527020'>just</span> <span
  m='1527270'>an</span> <span m='1527400'>adder,</span> <span
  m='1528200'>then</span> <span m='1528360'>that</span> <span
  m='1528570'>means</span> <span m='1528970'>that,</span> <span
  m='1529290'>if</span> <span m='1529390'>we</span> <span
  m='1529520'>take</span> <span m='1529860'>all</span> <span
  m='1531500'>the</span> <span m='1532200'>x</span> <span
  m='1533120'>inputs</span> <span m='1533520'>coming</span> <span
  m='1533790'>in--</span> <span m='1534410'>let's</span> <span
  m='1534730'>do</span> <span m='1534910'>x</span> <span m='1535110'>and</span>
  <span m='1535230'>y</span> <span m='1535450'>for</span> <span
  m='1535610'>the</span> <span m='1535670'>moment,</span> <span
  m='1536150'>so</span> <span m='1536170'>we</span> <span m='1536250'>can</span>
  <span m='1536340'>figure</span> <span m='1536540'>out</span> <span
  m='1536630'>the</span> <span m='1536730'>derivative--</span> <span
  m='1538350'>then</span> <span m='1539190'>what</span> <span
  m='1539400'>comes</span> <span m='1539660'>out</span> <span
  m='1539980'>after</span> <span m='1540680'>we</span> <span
  m='1540790'>just</span> <span m='1541020'>add</span> <span
  m='1541390'>up</span> <span m='1541710'>the</span> <span m='1541830'>x,</span>
  <span m='1542430'>what</span> <span m='1542600'>comes</span> <span
  m='1542840'>out,</span> <span m='1543320'>y</span> <span
  m='1543650'>equals</span> <span m='1545570'>x,</span> <span
  m='1546580'>right?</span> <span m='1546830'>We're</span> <span
  m='1546950'>just</span> <span m='1547190'>adding</span> <span
  m='1547520'>it</span> <span m='1547610'>up.</span> <span m='1548770'>Adding
  up</span> <span m='1548910'>all</span> <span m='1549505'>the</span> <span
  m='1549770'>input,</span> <span m='1550270'>we're</span> <span
  m='1550390'>not</span> <span m='1550630'>doing</span> <span
  m='1550850'>anything</span> <span m='1551290'>to</span> <span
  m='1551420'>it.</span> <span m='1552290'>Y</span> <span
  m='1552560'>equals</span> <span m='1552910'>x</span> <span
  m='1553390'>is</span> <span m='1553540'>what</span> <span
  m='1553700'>this</span> <span m='1553990'>node does.</span> <span
  m='1555910'>You</span> <span m='1556010'>people</span> <span
  m='1556100'>see</span> <span m='1556250'>that?</span> <span
  m='1556790'>So</span> <span m='1556970'>the</span> <span
  m='1557020'>derivative</span> <span m='1557470'>is</span> <span
  m='1557640'>just</span> <span m='1559340'>one.</span> <span
  m='1560690'>So</span> <span m='1560810'>that's</span> <span
  m='1561060'>pretty</span> <span m='1561320'>easy,</span> <span
  m='1561640'>because</span> <span m='1562130'>the</span> <span
  m='1562210'>first</span> <span m='1562490'>problem</span> <span
  m='1562810'>says,</span> <span m='1564590'>what</span> <span
  m='1564950'>is</span> <span m='1565110'>the</span> <span
  m='1565190'>new</span> <span m='1566870'>formula,</span> <span
  m='1567800'>delta</span> <span m='1568290'>f.</span> <span
  m='1570850'>So</span> <span m='1571850'>I'll</span> <span
  m='1572070'>just</span> <span m='1572240'>tell</span> <span
  m='1572460'>you.</span> <span m='1572890'>You guys</span> <span
  m='1573120'>probably</span> <span m='1573310'>figured</span> <span
  m='1573680'>it out.</span> <span m='1574810'>o</span> <span
  m='1575010'>times</span> <span m='1575310'>1</span> <span
  m='1575490'>minus</span> <span m='1575770'>o.</span> <span
  m='1577538'>Because</span> <span m='1577980'>we</span> <span
  m='1578120'>replaced</span> <span m='1578560'>d</span> <span
  m='1578700'>minus</span> <span m='1578990'>o</span> <span
  m='1579090'>with</span> <span m='1579270'>1.</span> <span
  m='1581530'>OK?</span> <span m='1582230'>Makes</span> <span
  m='1582430'>sense</span> <span m='1582650'>so</span> <span
  m='1582810'>far?</span> <span m='1583480'>Please</span> <span
  m='1583700'>ask</span> <span m='1583880'>questions</span> <span
  m='1584190'>along</span> <span m='1584380'>the</span> <span
  m='1584460'>way,</span> <span m='1584630'>because</span> <span
  m='1585410'>I'm</span> <span m='1585550'>not</span> <span
  m='1585690'>going</span> <span m='1585790'>to</span> <span
  m='1585830'>be</span> <span m='1585890'>asking</span> <span
  m='1586270'>you</span> <span m='1586430'>guys.</span> <span
  m='1586660'>I'll</span> <span m='1587250'>do it</span> <span
  m='1587510'>myself.</span> <span m='1587940'>Question?</span> </p><p><span
  m='1588305'>STUDENT: Why</span> <span m='1588670'>to we use d minus o of
  1?</span> </p><p><span m='1592890'>PROFESSOR: That's</span> <span
  m='1593000'>a</span> <span m='1593060'>good</span> <span
  m='1593320'>question.</span> <span m='1594600'>The</span> <span
  m='1594740'>reason</span> <span m='1595070'>is</span> <span
  m='1595400'>because</span> <span m='1595750'>I</span> <span
  m='1595940'>did</span> <span m='1596130'>the</span> <span
  m='1596230'>wrong</span> <span m='1596500'>thing.</span> <span
  m='1597510'>So</span> <span m='1598040'>see,</span> <span
  m='1599450'>it's</span> <span m='1599620'>good</span> <span
  m='1599770'>that</span> <span m='1599870'>you</span> <span
  m='1599960'>guys</span> <span m='1600160'>are</span> <span
  m='1600230'>asking</span> <span m='1600500'>questions.</span> <span
  m='1602230'>It</span> <span m='1602410'>actually</span> <span
  m='1602760'>should</span> <span m='1602900'>be</span> <span
  m='1603070'>replaced</span> <span m='1603270'>with</span> <span
  m='1603390'>o</span> <span m='1603840'>times</span> <span m='1604000'>1</span>
  <span m='1604170'>minus</span> <span m='1604500'>o with 1.</span> <span
  m='1604850'>The</span> <span m='1605010'>answer</span> <span
  m='1605430'>is</span> <span m='1605620'>delta</span> <span
  m='1605850'>f</span> <span m='1606120'>equals</span> <span
  m='1606760'>d</span> <span m='1606910'>minus</span> <span
  m='1607160'>o.</span> <span m='1609350'>So</span> <span
  m='1609550'>yes,</span> <span m='1610730'>perhaps</span> <span
  m='1611460'>I</span> <span m='1611510'>did it</span> <span
  m='1611730'>to</span> <span m='1611830'>trick you.</span> <span
  m='1612170'>No, I</span> <span m='1612410'>actually</span> <span
  m='1612780'>messed up.</span> <span m='1614570'>But</span> <span
  m='1614730'>yes,</span> <span m='1615370'>please</span> <span
  m='1615610'>ask</span> <span m='1615770'>questions</span> <span
  m='1616050'>along</span> <span m='1616210'>the</span> <span
  m='1616280'>way.</span> <span m='1616820'>Again,</span> <span
  m='1617620'>I</span> <span m='1617780'>don't</span> <span
  m='1617950'>have</span> <span m='1618060'>time</span> <span
  m='1618330'>to</span> <span m='1618460'>call</span> <span
  m='1618660'>on</span> <span m='1618790'>you</span> <span
  m='1618850'>guys</span> <span m='1619080'>at</span> <span
  m='1619190'>random</span> <span m='1619460'>to</span> <span
  m='1619540'>figure</span> <span m='1619810'>out</span> <span
  m='1619920'>if</span> <span m='1620030'>you</span> <span
  m='1620130'>guys</span> <span m='1620320'>are</span> <span
  m='1620380'>following</span> <span m='1620760'>along.</span> <span
  m='1621520'>So</span> <span m='1621810'>I'll</span> <span
  m='1622040'>do</span> <span m='1622120'>it</span> <span
  m='1622230'>myself.</span> <span m='1623020'>We're</span> <span
  m='1623230'>placing</span> <span m='1623510'>the</span> <span
  m='1623630'>o</span> <span m='1623800'>times</span> <span m='1624030'>1</span>
  <span m='1624220'>minus</span> <span m='1624530'>o</span> <span
  m='1624910'>with</span> <span m='1625380'>1</span> <span
  m='1625880'>because</span> <span m='1626180'>of</span> <span
  m='1626240'>the</span> <span m='1626310'>fact</span> <span m='1626530'>that
  the</span> <span m='1626710'>sigmoid</span> <span m='1627100'>is</span> <span
  m='1627270'>gone,</span> <span m='1627860'>and</span> <span
  m='1628040'>we</span> <span m='1628150'>get</span> <span
  m='1628520'>just</span> <span m='1628870'>delta f</span> <span
  m='1629360'>equals</span> <span m='1629590'>d</span> <span
  m='1629740'>minus</span> <span m='1630050'>o.</span> </p><p><span
  m='1630960'>So</span> <span m='1632830'>great.</span> <span
  m='1633660'>We</span> <span m='1633840'>now</span> <span
  m='1634840'>want</span> <span m='1634970'>to</span> <span
  m='1635060'>know</span> <span m='1635240'>what</span> <span
  m='1635460'>the</span> <span m='1635540'>equation</span> <span
  m='1635980'>is</span> <span m='1636340'>for</span> <span
  m='1636670'>delta</span> <span m='1637035'>i,</span> <span
  m='1638320'>at</span> <span m='1638610'>the</span> <span
  m='1638750'>node</span> <span m='1639340'>a.</span> <span
  m='1639720'>So</span> <span m='1639940'>delta</span> <span
  m='1640360'>a.</span> <span m='1641740'>Well</span> <span
  m='1642650'>let's</span> <span m='1642940'>take</span> <span
  m='1643120'>a</span> <span m='1643180'>look.</span> <span
  m='1644270'>The</span> <span m='1644430'>o times</span> <span m='1644850'>1
  minus</span> <span m='1645200'>o is</span> <span m='1645500'>gone.</span>
  <span m='1646530'>Now</span> <span m='1646770'>we</span> <span
  m='1646870'>just</span> <span m='1647100'>have</span> <span
  m='1647520'>the</span> <span m='1647600'>sum</span> <span
  m='1648210'>over</span> <span m='1648460'>j,</span> <span
  m='1648950'>which</span> <span m='1649650'>you guys</span> <span
  m='1649920'>already</span> <span m='1650210'>told</span> <span
  m='1650500'>me</span> <span m='1650590'>is,</span> <span
  m='1650720'>only</span> <span m='1651050'>c</span> <span m='1652155'>of</span>
  <span m='1652530'>WAC</span> <span m='1653920'>times</span> <span
  m='1654960'>delta</span> <span m='1655310'>c.</span> <span
  m='1656120'>We</span> <span m='1656270'>know</span> <span
  m='1656470'>that</span> <span m='1656570'>delta</span> <span
  m='1656830'>c</span> <span m='1656980'>is</span> <span m='1657130'>d</span>
  <span m='1657280'>minus</span> <span m='1657590'>o.</span> <span
  m='1658350'>The</span> <span m='1658450'>answer</span> <span
  m='1658840'>is</span> <span m='1659140'>delta</span> <span
  m='1659430'>a</span> <span m='1659700'>is</span> <span m='1659850'>just</span>
  <span m='1660080'>WAC</span> <span m='1661390'>times</span> <span
  m='1661690'>d</span> <span m='1661840'>minus</span> <span
  m='1662150'>o.</span> <span m='1663590'>That</span> <span
  m='1663840'>time,</span> <span m='1664060'>I got it right.</span> <span
  m='1666050'>I</span> <span m='1666250'>see</span> <span m='1666780'>the</span>
  <span m='1666860'>answer</span> <span m='1667260'>here.</span> <span
  m='1668050'>Though</span> <span m='1668100'>it's</span> <span
  m='1668210'>written</span> <span m='1668470'>in</span> <span
  m='1668560'>a</span> <span m='1668610'>very</span> <span
  m='1668850'>different</span> <span m='1669220'>format</span> <span
  m='1669600'>from</span> <span m='1669730'>the</span> <span
  m='1669820'>old</span> <span m='1670030'>quiz.</span> <span
  m='1672290'>Any</span> <span m='1672420'>questions</span> <span
  m='1672790'>on</span> <span m='1672900'>that?</span> </p><p><span
  m='1674590'>Well</span> <span m='1675060'>that's</span> <span
  m='1675290'>part</span> <span m='1675640'>a</span> <span
  m='1675930'>that</span> <span m='1676120'>we</span> <span
  m='1676250'>finished</span> <span m='1676750'>out</span> <span
  m='1677040'>of</span> <span m='1677230'>c.</span> <span
  m='1678070'>Let's</span> <span m='1678250'>go</span> <span
  m='1678350'>to</span> <span m='1678430'>part</span> <span
  m='1678720'>b.</span> <span m='1679300'>Part</span> <span m='1679595'>b</span>
  <span m='1679890'>is</span> <span m='1680220'>doing</span> <span
  m='1680490'>one</span> <span m='1680740'>step</span> <span
  m='1681090'>backpropagation.</span> <span m='1681625'>There's</span> <span
  m='1682000'>almost</span> <span m='1682380'>always</span> <span
  m='1682590'>going</span> <span m='1682720'>to</span> <span
  m='1682760'>be</span> <span m='1682870'>one</span> <span m='1683030'>of</span>
  <span m='1683140'>these</span> <span m='1683360'>in</span> <span
  m='1683480'>here.</span> <span m='1684430'>So</span> <span
  m='1685810'>the</span> <span m='1685900'>first</span> <span
  m='1686220'>thing</span> <span m='1686390'>it</span> <span
  m='1686520'>asks</span> <span m='1687100'>is</span> <span
  m='1687300'>to</span> <span m='1687400'>figure</span> <span
  m='1687590'>out</span> <span m='1687740'>what</span> <span
  m='1687900'>the</span> <span m='1688000'>output</span> <span m='1688400'>o
  is</span> <span m='1689820'>for</span> <span m='1690820'>this</span> <span
  m='1691050'>neural net</span> <span m='1691510'>if</span> <span
  m='1691710'>all</span> <span m='1692090'>weights</span> <span
  m='1692470'>are</span> <span m='1692550'>initially</span> <span
  m='1692940'>1</span> <span m='1693480'>except</span> <span
  m='1694770'>that</span> <span m='1694980'>this</span> <span
  m='1695170'>guy</span> <span m='1695320'>right</span> <span
  m='1695540'>here</span> <span m='1695670'>is</span> <span
  m='1695790'>negative</span> <span m='1696070'>0.5.</span> <span
  m='1698120'>All</span> <span m='1698310'>the</span> <span
  m='1698400'>other</span> <span m='1698610'>ones</span> <span
  m='1698960'>start</span> <span m='1699240'>off</span> <span
  m='1699380'>as</span> <span m='1699530'>1.</span> <span
  m='1702120'>Let's</span> <span m='1702440'>do</span> <span
  m='1702830'>a</span> <span m='1703220'>step--</span> <span
  m='1704230'>oh,</span> <span m='1704390'>let's</span> <span
  m='1704660'>see</span> <span m='1704750'>what</span> <span
  m='1704900'>are</span> <span m='1704950'>the</span> <span
  m='1705080'>inputs.</span> <span m='1705560'>The</span> <span
  m='1705660'>inputs</span> <span m='1705970'>are</span> <span
  m='1706100'>also</span> <span m='1706490'>all</span> <span
  m='1706760'>1.</span> <span m='1708040'>Desired</span> <span
  m='1708590'>output</span> <span m='1709150'>is</span> <span
  m='1709290'>also</span> <span m='1709770'>1.</span> <span
  m='1711320'>And</span> <span m='1712170'>in</span> <span
  m='1712300'>fact,</span> <span m='1713280'>the</span> <span
  m='1713310'>rate</span> <span m='1713530'>constant</span> <span
  m='1713970'>alpha</span> <span m='1714750'>is</span> <span
  m='1714890'>also</span> <span m='1715270'>1.</span> <span
  m='1717980'>This</span> <span m='1718170'>is</span> <span
  m='1718270'>the</span> <span m='1718360'>only</span> <span
  m='1718620'>thing</span> <span m='1718760'>that</span> <span
  m='1718890'>isn't</span> <span m='1719110'>1,</span> <span
  m='1719410'>folks.</span> </p><p><span m='1720490'>So</span> <span
  m='1720640'>let's</span> <span m='1720840'>see</span> <span
  m='1720940'>what</span> <span m='1721050'>happens.</span> <span
  m='1722070'>1</span> <span m='1722550'>times</span> <span m='1722780'>1</span>
  <span m='1723540'>is</span> <span m='1723690'>1,</span> <span
  m='1726030'>then</span> <span m='1726370'>this</span> <span
  m='1726610'>is</span> <span m='1726720'>a</span> <span
  m='1727540'>negative</span> <span m='1727960'>1</span> <span
  m='1728210'>times</span> <span m='1728510'>1</span> <span
  m='1729600'>is</span> <span m='1729770'>negative</span> <span
  m='1730140'>1.</span> <span m='1730870'>That's</span> <span
  m='1731130'>0.</span> <span m='1733190'>The</span> <span m='1733470'>exact
  same</span> <span m='1733720'>thing</span> <span m='1733940'>happens</span>
  <span m='1734290'>here because</span> <span m='1734750'>it's</span> <span
  m='1734920'>symmetrical.</span> <span m='1735520'>So</span> <span
  m='1735720'>these</span> <span m='1735900'>are</span> <span
  m='1735970'>both</span> <span m='1736280'>0.</span> <span m='1737546'>0</span>
  <span m='1737970'>times</span> <span m='1738260'>1</span> <span
  m='1738710'>is</span> <span m='1738910'>0,</span> <span m='1739345'>0</span>
  <span m='1739780'>times</span> <span m='1740040'>1</span> <span
  m='1740320'>is</span> <span m='1740500'>0.</span> <span
  m='1743150'>Then</span> <span m='1743370'>this</span> <span
  m='1743510'>is</span> <span m='1743600'>negative</span> <span
  m='1743980'>1</span> <span m='1744230'>times</span> <span
  m='1744510'>negative</span> <span m='1744840'>0.5</span> <span
  m='1745650'>is</span> <span m='1745830'>positive</span> <span
  m='1746450'>0.5,</span> <span m='1747770'>so</span> <span m='1748290'>0</span>
  <span m='1748690'>plus</span> <span m='1748940'>0</span> <span
  m='1749390'>plus</span> <span m='1749610'>a</span> <span
  m='1749640'>positive</span> <span m='1750110'>0.5,</span> <span
  m='1751280'>the</span> <span m='1751390'>output</span> <span
  m='1751830'>is</span> <span m='1752320'>positive</span> <span
  m='1752720'>0.5.</span> <span m='1754740'>Does</span> <span
  m='1754880'>everyone</span> <span m='1755210'>see</span> <span
  m='1755380'>that?</span> <span m='1756700'>If</span> <span
  m='1756870'>not,</span> <span m='1759780'>you</span> <span
  m='1759940'>can</span> <span m='1760110'>convince</span> <span
  m='1760410'>yourself</span> <span m='1760830'>that</span> <span m='1760970'>it
  is</span> <span m='1761110'>positive</span> <span m='1761450'>0.5.</span>
  <span m='1761900'>That</span> <span m='1762180'>would</span> <span
  m='1762280'>be</span> <span m='1762360'>a</span> <span m='1762410'>good</span>
  <span m='1762630'>exercise</span> <span m='1763230'>for</span> <span
  m='1763350'>you,</span> <span m='1763570'>run</span> <span
  m='1763730'>through</span> <span m='1763960'>one</span> <span
  m='1764290'>forward</span> <span m='1764720'>run.</span> <span
  m='1765470'>The</span> <span m='1765540'>output</span> <span
  m='1766030'>is</span> <span m='1766200'>definitely</span> <span
  m='1766800'>positive</span> <span m='1767210'>0.5.</span> <span
  m='1768650'>First</span> <span m='1768920'>time</span> <span
  m='1768980'>around.</span> <span m='1770000'>OK?</span> </p><p><span
  m='1771130'>Now</span> <span m='1771380'>we</span> <span
  m='1771470'>have</span> <span m='1771580'>to</span> <span
  m='1771680'>do</span> <span m='1771800'>one</span> <span m='1772080'>step
  of</span> <span m='1772350'>backpropagation.</span> <span
  m='1774000'>To</span> <span m='1774150'>do</span> <span
  m='1774300'>that,</span> <span m='1774570'>let's</span> <span
  m='1774790'>calculate</span> <span m='1775210'>all</span> <span
  m='1775340'>the</span> <span m='1775450'>delta</span> <span m='1775900'>so
  that</span> <span m='1776420'>we</span> <span m='1776700'>can calculate</span>
  <span m='1776890'>all</span> <span m='1777080'>the</span> <span
  m='1777200'>new</span> <span m='1777450'>weights,</span> <span
  m='1777810'>the</span> <span m='1778080'>the</span> <span
  m='1778180'>new</span> <span m='1778400'>weight</span> <span
  m='1778730'>primes.</span> <span m='1779560'>So</span> <span
  m='1780500'>delta</span> <span m='1780820'>c.</span> <span
  m='1782660'>That's</span> <span m='1782770'>easy.</span> <span
  m='1783490'>You</span> <span m='1783630'>guys</span> <span
  m='1783870'>can</span> <span m='1784000'>tell</span> <span
  m='1784180'>me</span> <span m='1784300'>what</span> <span
  m='1784480'>delta</span> <span m='1784750'>c</span> <span
  m='1784930'>is.</span> <span m='1785060'>We</span> <span
  m='1785210'>figured</span> <span m='1785510'>out</span> <span
  m='1785760'>what</span> <span m='1785900'>the</span> <span
  m='1785980'>new</span> <span m='1786150'>delta</span> <span m='1786490'>c
  is</span> <span m='1786610'>going</span> <span m='1786710'>to</span> <span
  m='1786760'>be.</span> <span m='1787440'>So</span> <span
  m='1787590'>simple</span> <span m='1788680'>addition</span> <span
  m='1788960'>or</span> <span m='1789050'>subtraction</span> <span
  m='1789590'>problem?</span> <span m='1790500'>Everyone,</span> <span
  m='1790930'>delta</span> <span m='1791270'>c</span> <span
  m='1791510'>is?</span> </p><p><span m='1792306'>STUDENT: 0.5.</span>
  </p><p><span m='1793000'>PROFESSOR: 0.5,</span> <span m='1793720'>one</span>
  <span m='1794080'>half,</span> <span m='1794740'>yes.</span> <span
  m='1798120'>All</span> <span m='1798200'>right.</span> <span
  m='1802250'>We</span> <span m='1802320'>know</span> <span
  m='1802520'>that</span> <span m='1802880'>delta a and</span> <span
  m='1803140'>delta</span> <span m='1803380'>b</span> <span
  m='1803870'>are</span> <span m='1804050'>just</span> <span
  m='1804430'>WAC</span> <span m='1806700'>times</span> <span
  m='1807080'>delta</span> <span m='1807400'>c,</span> <span
  m='1807690'>and</span> <span m='1807830'>WBC</span> <span
  m='1808500'>times</span> <span m='1808710'>delta</span> <span
  m='1808810'>c.</span> <span m='1809150'>So</span> <span
  m='1809280'>they</span> <span m='1809490'>are?</span> </p><p><span
  m='1810660'>STUDENT: One  half.</span> </p><p><span m='1811460'>PROFESSOR:
  Also</span> <span m='1811970'>one</span> <span m='1812390'>half,</span> <span
  m='1813160'>because</span> <span m='1813550'>all</span> <span
  m='1813710'>the</span> <span m='1813790'>weights</span> <span
  m='1813940'>were</span> <span m='1814140'>1.</span> <span
  m='1816970'>Easy</span> <span m='1817240'>street.</span> <span
  m='1817750'>OK.</span> <span m='1818600'>We've</span> <span
  m='1818760'>got</span> <span m='1819100'>all</span> <span
  m='1819370'>of</span> <span m='1819450'>the</span> <span
  m='1819500'>deltas</span> <span m='1819820'>are one</span> <span
  m='1820200'>half.</span> <span m='1820980'>And</span> <span
  m='1821190'>all</span> <span m='1821480'>but a</span> <span
  m='1821770'>few</span> <span m='1821860'>of the weights</span> <span
  m='1822440'>are</span> <span m='1822550'>1.</span> <span m='1823290'>So</span>
  <span m='1823670'>let's</span> <span m='1823880'>figure</span> <span
  m='1824060'>out</span> <span m='1824140'>what</span> <span
  m='1824250'>the</span> <span m='1824350'>new</span> <span
  m='1824550'>weights</span> <span m='1824850'>are.</span> <span
  m='1829910'>New</span> <span m='1830130'>WAC,</span> <span
  m='1831990'>OK.</span> <span m='1837520'>Yeah,</span> <span
  m='1837820'>so</span> <span m='1838020'>let's</span> <span
  m='1838210'>see.</span> <span m='1838320'>What's</span> <span
  m='1838640'>going</span> <span m='1838770'>to</span> <span
  m='1838830'>be</span> <span m='1838940'>the</span> <span
  m='1839070'>new</span> <span m='1839350'>WAC?</span> <span
  m='1840480'>So</span> <span m='1840730'>the</span> <span
  m='1840810'>new</span> <span m='1841020'>WAC</span> <span
  m='1841770'>is</span> <span m='1841910'>going</span> <span
  m='1842160'>to</span> <span m='1842280'>be</span> <span m='1844860'>old</span>
  <span m='1845080'>WAC,</span> <span m='1845425'>which</span> <span
  m='1845770'>is</span> <span m='1845850'>1,</span> <span
  m='1846430'>because</span> <span m='1846620'>all</span> <span m='1846950'>of
  them are</span> <span m='1847090'>1</span> <span m='1847320'>except</span>
  <span m='1847600'>for</span> <span m='1847700'>wc,</span> <span
  m='1848880'>plus</span> <span m='1849450'>the</span> <span
  m='1849570'>rate</span> <span m='1849750'>constant</span> <span
  m='1850140'>which</span> <span m='1850290'>is</span> <span
  m='1850390'>1,</span> <span m='1851180'>times</span> <span
  m='1853200'>the</span> <span m='1853330'>input</span> <span
  m='1853700'>coming</span> <span m='1853960'>in</span> <span
  m='1854030'>here,</span> <span m='1854500'>but</span> <span
  m='1854600'>remember</span> <span m='1855080'>that</span> <span
  m='1855330'>was</span> <span m='1855490'>0,</span> <span m='1857270'>so</span>
  <span m='1857860'>actually</span> <span m='1858220'>it's just</span> <span
  m='1858520'>going</span> <span m='1858700'>to</span> <span
  m='1858740'>be</span> <span m='1858990'>the</span> <span
  m='1859090'>same</span> <span m='1859370'>as the old</span> <span
  m='1859660'>WAC.</span> <span m='1861500'>This</span> <span m='1862640'>is a
  metrical</span> <span m='1863070'>problem</span> <span
  m='1863490'>between</span> <span m='1863880'>b and a,</span> <span
  m='1864550'>at</span> <span m='1864710'>the</span> <span
  m='1864780'>moment,</span> <span m='1866000'>this</span> <span
  m='1866190'>is</span> <span m='1866290'>going</span> <span
  m='1866420'>to</span> <span m='1866580'>be the same.</span> </p><p><span
  m='1868720'>All</span> <span m='1868910'>right.</span> <span
  m='1869830'>Somethings</span> <span m='1870280'>are going to</span> <span
  m='1870540'>change</span> <span m='1870810'>though.</span> <span
  m='1870990'>What</span> <span m='1871120'>about</span> <span
  m='1871320'>wc,</span> <span m='1871900'>that</span> <span m='1872180'>was
  the</span> <span m='1872390'>one that was</span> <span
  m='1872560'>actually</span> <span m='1872860'>not</span> <span
  m='1873200'>1?</span> <span m='1874960'>OK.</span> <span m='1875610'>So</span>
  <span m='1876340'>new</span> <span m='1876580'>wc,</span> <span
  m='1880530'>remember,</span> <span m='1881950'>the</span> <span
  m='1882210'>i</span> <span m='1882510'>for</span> <span m='1882710'>wc,</span>
  <span m='1885120'>the</span> <span m='1885320'>i that</span> <span
  m='1885740'>we</span> <span m='1885840'>use</span> <span m='1886030'>in</span>
  <span m='1886140'>this</span> <span m='1886330'>equation</span> <span
  m='1886720'>is</span> <span m='1886930'>always</span> <span
  m='1887280'>negative</span> <span m='1887680'>1 because</span> <span
  m='1888180'>it's</span> <span m='1888350'>a</span> <span
  m='1888430'>threshold.</span> <span m='1889680'>So</span> <span
  m='1889950'>we</span> <span m='1890080'>have</span> <span
  m='1890280'>the</span> <span m='1890410'>old</span> <span
  m='1890650'>wc,</span> <span m='1891000'>which</span> <span
  m='1891130'>is</span> <span m='1891250'>negative</span> <span
  m='1891600'>0.5,</span> <span m='1892230'>plus</span> <span
  m='1893010'>1</span> <span m='1894330'>times</span> <span
  m='1897700'>negative</span> <span m='1898090'>1</span> <span
  m='1898780'>times</span> <span m='1900090'>delta</span> <span
  m='1900420'>c,</span> <span m='1900710'>which</span> <span
  m='1900880'>is</span> <span m='1901040'>one</span> <span
  m='1901320'>half.</span> <span m='1901990'>So</span> <span
  m='1902150'>we</span> <span m='1902230'>have</span> <span
  m='1902380'>negative</span> <span m='1902740'>0.5</span> <span
  m='1903340'>plus</span> <span m='1903840'>negative</span> <span
  m='1904200'>0.5</span> <span m='1905580'>equals</span> <span
  m='1906610'>negative</span> <span m='1906880'>1.</span> <span
  m='1909330'>w</span> <span m='1909570'>1</span> <span m='1910070'>a,</span>
  <span m='1911950'>well</span> <span m='1913220'>we've</span> <span
  m='1913420'>got</span> <span m='1914140'>w</span> <span m='1914440'>1</span>
  <span m='1914650'>a</span> <span m='1914820'>starts</span> <span
  m='1915210'>out as</span> <span m='1915410'>1.</span> <span
  m='1917260'>Then</span> <span m='1919300'>we</span> <span
  m='1919540'>also</span> <span m='1919890'>know</span> <span
  m='1920540'>that</span> <span m='1922900'>w</span> <span m='1923230'>1</span>
  <span m='1923430'>a</span> <span m='1923700'>is</span> <span
  m='1923920'>going</span> <span m='1924180'>to</span> <span
  m='1924310'>be</span> <span m='1924760'>equal</span> <span
  m='1925030'>to</span> <span m='1925160'>1</span> <span m='1925710'>plus</span>
  <span m='1926130'>1</span> <span m='1927220'>times</span> <span
  m='1927550'>the</span> <span m='1927680'>input,</span> <span
  m='1928030'>which</span> <span m='1928090'>is</span> <span
  m='1928210'>1,</span> <span m='1929510'>times</span> <span
  m='1930680'>delta</span> <span m='1931630'>of</span> <span
  m='1931840'>a,</span> <span m='1932350'>which</span> <span
  m='1932540'>is</span> <span m='1932700'>one</span> <span
  m='1932960'>half,</span> <span m='1933430'>so</span> <span
  m='1933890'>1.5.</span> <span m='1938420'>And</span> <span
  m='1938740'>since</span> <span m='1938860'>it's</span> <span
  m='1939070'>symmetrical</span> <span m='1939620'>between</span> <span
  m='1939920'>a and</span> <span m='1940560'>b,</span> <span
  m='1942890'>then</span> <span m='1944320'>w</span> <span m='1944740'>2</span>
  <span m='1945000'>b</span> <span m='1946440'>is</span> <span
  m='1946660'>also</span> <span m='1947100'>1.5.</span> <span
  m='1949400'>And</span> <span m='1949780'>then</span> <span
  m='1951220'>finally,</span> <span m='1951610'>wa</span> <span
  m='1951980'>and</span> <span m='1952330'>wb,</span> <span
  m='1952800'>the</span> <span m='1952930'>offsets</span> <span
  m='1953430'>here,</span> <span m='1954410'>well</span> <span
  m='1955590'>they</span> <span m='1955730'>start at</span> <span
  m='1956140'>1</span> <span m='1956770'>plus</span> <span m='1957050'>1</span>
  <span m='1957980'>times</span> <span m='1958350'>negative</span> <span
  m='1958910'>1</span> <span m='1959900'>times</span> <span
  m='1960390'>0.5.</span> <span m='1961250'>So</span> <span
  m='1961380'>they're</span> <span m='1961660'>both,</span> <span
  m='1964040'>everyone?</span> </p><p><span m='1964150'>STUDENT: One
  half.</span> </p><p><span m='1965371'>PROFESSOR: One half.</span> <span
  m='1965780'>That's right.</span> <span m='1975330'>That's</span> <span
  m='1975540'>right.</span> <span m='1976080'>Because</span> <span
  m='1977960'>negative</span> <span m='1978420'>1</span> <span
  m='1978900'>is</span> <span m='1979260'>their</span> <span
  m='1979560'>i.</span> <span m='1980780'>Negative</span> <span
  m='1981160'>1</span> <span m='1981360'>times</span> <span
  m='1981590'>one</span> <span m='1981920'>half</span> <span
  m='1982240'>plus</span> <span m='1983390'>positive</span> <span
  m='1983720'>1</span> <span m='1983930'>is</span> <span m='1984170'>just</span>
  <span m='1984430'>one half.</span> <span m='1985440'>That's</span> <span
  m='1985650'>one full</span> <span m='1986020'>step.</span> <span
  m='1987690'>Maybe</span> <span m='1987920'>a</span> <span
  m='1987990'>mite</span> <span m='1988310'>easier</span> <span
  m='1988600'>than</span> <span m='1988810'>you</span> <span
  m='1988920'>might</span> <span m='1989100'>be</span> <span
  m='1989200'>used</span> <span m='1989390'>to</span> <span
  m='1989450'>seeing,</span> <span m='1990180'>but</span> <span
  m='1990570'>there's</span> <span m='1990760'>a</span> <span
  m='1990820'>full</span> <span m='1991010'>step.</span> <span m='1991390'>And
  it asks</span> <span m='1991670'>what's</span> <span m='1991950'>going</span>
  <span m='1992080'>to</span> <span m='1992120'>be</span> <span
  m='1992210'>the</span> <span m='1992330'>output</span> <span
  m='1992820'>after</span> <span m='1993270'>one</span> <span
  m='1993510'>step</span> <span m='1993790'>of</span> <span
  m='1993890'>backpropagation?</span> <span m='1995560'>We</span> <span
  m='1995650'>can</span> <span m='1995800'>take</span> <span
  m='1995990'>a</span> <span m='1996060'>look.</span> <span
  m='1999860'>So</span> <span m='2000110'>we</span> <span
  m='2000200'>have</span> <span m='2000550'>1</span> <span
  m='2001070'>times</span> <span m='2001480'>the</span> <span
  m='2001550'>new</span> <span m='2001760'>wa,</span> <span
  m='2002430'>which</span> <span m='2002580'>is</span> <span
  m='2002650'>1.5,</span> <span m='2003934'>you've got</span> <span
  m='2004790'>1.5,</span> <span m='2006280'>then</span> <span
  m='2006540'>the</span> <span m='2006620'>new</span> <span
  m='2006840'>wa</span> <span m='2007630'>is just</span> <span
  m='2008090'>0.5,</span> <span m='2009010'>now is</span> <span
  m='2009130'>0.5,</span> <span m='2009620'>that's</span> <span
  m='2009780'>a</span> <span m='2009830'>1</span> <span
  m='2010340'>coming</span> <span m='2010580'>into</span> <span
  m='2010750'>an</span> <span m='2010830'>adder.</span> <span
  m='2011920'>We've</span> <span m='2012090'>got</span> <span
  m='2012250'>another</span> <span m='2012590'>1</span> <span
  m='2012860'>coming</span> <span m='2013120'>in</span> <span
  m='2013190'>here</span> <span m='2013440'>because</span> <span
  m='2013650'>it's</span> <span m='2013780'>symmetrical.</span> <span
  m='2014910'>So</span> <span m='2015150'>1</span> <span m='2015470'>and
  a</span> <span m='2015690'>1,</span> <span m='2016610'>1</span> <span
  m='2016960'>times</span> <span m='2017270'>WAC</span> <span
  m='2018290'>is</span> <span m='2018420'>1.</span> <span m='2019370'>1</span>
  <span m='2019620'>times</span> <span m='2019810'>WBC</span> <span
  m='2020250'>is</span> <span m='2020370'>1.</span> <span m='2021020'>So</span>
  <span m='2021240'>we have two</span> <span m='2021500'>1s</span> <span
  m='2021900'>coming</span> <span m='2022150'>in</span> <span
  m='2022240'>here,</span> <span m='2022620'>they're</span> <span
  m='2022840'>added,</span> <span m='2023640'>that's</span> <span
  m='2023920'>2.</span> <span m='2024990'>Then</span> <span
  m='2025750'>this</span> <span m='2026040'>has</span> <span
  m='2026290'>become</span> <span m='2027230'>negative</span> <span
  m='2027610'>1,</span> <span m='2027990'>in</span> <span
  m='2028150'>fact,</span> <span m='2029210'>at</span> <span
  m='2029330'>this</span> <span m='2029540'>point.</span> <span
  m='2030860'>So</span> <span m='2031680'>negative</span> <span
  m='2031930'>1</span> <span m='2032110'>times</span> <span
  m='2032320'>negative</span> <span m='2032580'>1,</span> <span
  m='2032905'>that's</span> <span m='2033230'>3,</span> <span
  m='2034120'>and</span> <span m='2034280'>the</span> <span
  m='2034350'>output</span> <span m='2034690'>is</span> <span
  m='2035670'>3.</span> <span m='2038540'>All</span> <span
  m='2038650'>right.</span> <span m='2039070'>Cool.</span> <span
  m='2039590'>We've</span> <span m='2039750'>now</span> <span
  m='2040000'>finished</span> <span m='2040270'>part</span> <span
  m='2040880'>b,</span> <span m='2041670'>which</span> <span
  m='2041910'>is</span> <span m='2042250'>over</span> <span
  m='2042540'>half</span> <span m='2043000'>of</span> <span
  m='2043140'>everything.</span> <span m='2043880'>Oh</span> <span
  m='2044010'>no,</span> <span m='2044210'>we've</span> <span
  m='2044380'>not.</span> <span m='2045250'>One</span> <span
  m='2045440'>more</span> <span m='2045610'>thing.</span> </p><p><span
  m='2050929'>These</span> <span m='2051020'>are</span> <span
  m='2051159'>adders.</span> <span m='2051690'>They're</span> <span
  m='2051820'>not</span> <span m='2052159'>sigmoids.</span> <span
  m='2056210'>What if</span> <span m='2056480'>we</span> <span
  m='2056610'>train</span> <span m='2056909'>this</span> <span
  m='2057070'>entire</span> <span m='2057389'>neural</span> <span
  m='2058380'>net</span> <span m='2059095'>to</span> <span
  m='2059440'>try</span> <span m='2059639'>to</span> <span
  m='2059710'>learn</span> <span m='2059940'>this</span> <span
  m='2060210'>data,</span> <span m='2060870'>so</span> <span
  m='2061110'>that</span> <span m='2061300'>it</span> <span
  m='2061389'>can</span> <span m='2062650'>draw</span> <span m='2062969'>a
  line</span> <span m='2063409'>on</span> <span m='2063560'>a</span> <span
  m='2063650'>graph,</span> <span m='2064330'>or</span> <span
  m='2064580'>draw</span> <span m='2064770'>some</span> <span
  m='2065090'>lines,</span> <span m='2065520'>or</span> <span
  m='2065620'>do</span> <span m='2065870'>some</span> <span
  m='2066210'>kind</span> <span m='2066480'>of</span> <span
  m='2066699'>learning,</span> <span m='2067190'>to</span> <span
  m='2067409'>separate</span> <span m='2067850'>off</span> <span
  m='2068510'>the</span> <span m='2068590'>minuses</span> <span
  m='2069199'>from</span> <span m='2069409'>all</span> <span
  m='2069670'>the</span> <span m='2069770'>pluses.</span> <span
  m='2071070'>You've</span> <span m='2071250'>seen,</span> <span
  m='2071820'>maybe,</span> <span m='2072429'>and</span> <span
  m='2072699'>if</span> <span m='2072830'>not,</span> <span m='2073480'>you are
  about</span> <span m='2073610'>to in a</span> <span m='2073710'>second,</span>
  <span m='2074020'>because</span> <span m='2074280'>it</span> <span
  m='2074780'>asks you</span> <span m='2074960'>to</span> <span
  m='2075100'>do</span> <span m='2075210'>this</span> <span
  m='2075360'>in</span> <span m='2075469'>detail,</span> <span
  m='2076300'>than</span> <span m='2076560'>neural</span> <span
  m='2076750'>nets</span> <span m='2077000'>can</span> <span
  m='2077199'>usually</span> <span m='2077600'>draw</span> <span
  m='2078210'>one</span> <span m='2078540'>line</span> <span
  m='2078800'>on</span> <span m='2078929'>the</span> <span
  m='2079020'>graph</span> <span m='2079540'>for</span> <span
  m='2079730'>each</span> <span m='2080190'>of</span> <span
  m='2080580'>these,</span> <span m='2080830'>sort</span> <span
  m='2080980'>of,</span> <span m='2081060'>nodes</span> <span
  m='2081489'>in</span> <span m='2081670'>the</span> <span
  m='2081760'>net,</span> <span m='2082320'>because</span> <span
  m='2082500'>each</span> <span m='2082670'>of</span> <span
  m='2082750'>the</span> <span m='2082830'>nodes</span> <span
  m='2083120'>has</span> <span m='2083290'>some</span> <span
  m='2083540'>kind</span> <span m='2083699'>of</span> <span
  m='2083790'>threshold.</span> <span m='2084449'>And</span> <span
  m='2084480'>you</span> <span m='2084610'>can</span> <span
  m='2084719'>do</span> <span m='2084810'>some</span> <span
  m='2085000'>logic</span> <span m='2085449'>between</span> <span
  m='2085770'>them</span> <span m='2086060'>like</span> <span
  m='2086500'>ands</span> <span m='2086590'>or</span> <span
  m='2087090'>ors.</span> </p><p><span m='2089480'>What</span> <span
  m='2089639'>do</span> <span m='2089679'>you</span> <span
  m='2089810'>guys</span> <span m='2090040'>think</span> <span
  m='2090230'>this</span> <span m='2090480'>net</span> <span m='2090840'>is
  going</span> <span m='2090960'>to</span> <span m='2091030'>draw?</span> <span
  m='2092830'>Anyone</span> <span m='2093170'>could</span> <span
  m='2093310'>volunteer,</span> <span m='2093820'>I'm</span> <span
  m='2093900'>not</span> <span m='2094100'>going</span> <span
  m='2094310'>to</span> <span m='2094750'>ask</span> <span
  m='2095040'>anyone</span> <span m='2095389'>to</span> <span
  m='2095469'>give</span> <span m='2095630'>this</span> <span
  m='2095810'>answer.</span> <span m='2098260'>That's</span> <span
  m='2098860'>a</span> <span m='2099720'>little</span> <span
  m='2099960'>bit</span> <span m='2100190'>tricky,</span> <span
  m='2100630'>because</span> <span m='2101080'>usually</span> <span
  m='2101510'>if</span> <span m='2101620'>you</span> <span
  m='2101740'>had</span> <span m='2101960'>this</span> <span
  m='2102090'>many</span> <span m='2102300'>nodes,</span> <span
  m='2103110'>you</span> <span m='2103270'>could</span> <span
  m='2103400'>easily</span> <span m='2103890'>draw</span> <span
  m='2104710'>a</span> <span m='2104770'>box</span> <span m='2105270'>and</span>
  <span m='2105380'>box</span> <span m='2105700'>off</span> <span
  m='2106190'>the</span> <span m='2106370'>minuses</span> <span m='2106470'>from
  the</span> <span m='2107030'>pluses.</span> <span m='2107750'>However,</span>
  <span m='2110580'>it</span> <span m='2110710'>draws</span> <span
  m='2111040'>this.</span> <span m='2111680'>And</span> <span
  m='2112080'>it</span> <span m='2112200'>asks</span> <span
  m='2112400'>what</span> <span m='2112590'>is</span> <span
  m='2112680'>the</span> <span m='2112780'>error?</span> <span
  m='2113350'>The</span> <span m='2113450'>error</span> <span
  m='2113840'>is--</span> <span m='2114330'>oh yeah, it</span> <span
  m='2114620'>even</span> <span m='2114940'>tells</span> <span
  m='2115270'>you</span> <span m='2115350'>the error</span> <span
  m='2115690'>is</span> <span m='2115800'>1/8,</span> <span
  m='2116570'>because</span> <span m='2118050'>why?</span> <span
  m='2119260'>These</span> <span m='2119450'>are</span> <span
  m='2119550'>all</span> <span m='2119820'>adders.</span> <span
  m='2120660'>You</span> <span m='2120790'>can't</span> <span
  m='2121050'>actually</span> <span m='2121310'>do</span> <span
  m='2121430'>anything</span> <span m='2121780'>logical.</span> <span
  m='2123460'>This</span> <span m='2123670'>entire</span> <span
  m='2124090'>net</span> <span m='2124330'>boils</span> <span
  m='2124630'>down</span> <span m='2124840'>to</span> <span
  m='2124940'>just</span> <span m='2125110'>one</span> <span
  m='2125390'>node,</span> <span m='2125760'>because</span> <span
  m='2125940'>it</span> <span m='2126030'>just</span> <span
  m='2126230'>adds</span> <span m='2126560'>up</span> <span
  m='2126740'>every</span> <span m='2127010'>time.</span> <span
  m='2127530'>It</span> <span m='2127610'>never</span> <span
  m='2127880'>takes</span> <span m='2128130'>a</span> <span
  m='2128210'>threshold</span> <span m='2128690'>at</span> <span
  m='2128740'>any</span> <span m='2129020'>point.</span> <span
  m='2130330'>So</span> <span m='2130600'>you</span> <span
  m='2131070'>can't</span> <span m='2131360'>turn</span> <span
  m='2131570'>into</span> <span m='2131860'>logical</span> <span
  m='2132110'>ones</span> <span m='2132530'>and</span> <span
  m='2132650'>zeroes,</span> <span m='2133160'>because</span> <span
  m='2134460'>it's</span> <span m='2134950'>basically</span> <span
  m='2135670'>not</span> <span m='2135940'>digital</span> <span
  m='2136360'>at</span> <span m='2136420'>all,</span> <span
  m='2136740'>its</span> <span m='2136870'>analog.</span> <span
  m='2137440'>It's</span> <span m='2137700'>giving</span> <span
  m='2137970'>us</span> <span m='2138100'>some</span> <span
  m='2138280'>very</span> <span m='2138500'>high</span> <span
  m='2138690'>number.</span> <span m='2139500'>So</span> <span
  m='2139740'>it</span> <span m='2139790'>all</span> <span
  m='2139970'>boils</span> <span m='2140210'>down</span> <span
  m='2140330'>to</span> <span m='2140420'>one</span> <span
  m='2140730'>cut</span> <span m='2140950'>off.</span> <span
  m='2141840'>And</span> <span m='2142260'>that's</span> <span
  m='2142510'>the</span> <span m='2142590'>best</span> <span
  m='2142970'>one.</span> <span m='2143850'>The</span> <span
  m='2143950'>one</span> <span m='2144190'>that I</span> <span
  m='2144290'>drew</span> <span m='2144600'>right</span> <span
  m='2144740'>here.</span> <span m='2146700'>OK.</span> </p><p><span
  m='2148060'>Did</span> <span m='2148450'>that not</span> <span
  m='2148640'>make sense</span> <span m='2148930'>to you?</span> <span
  m='2149220'>That's</span> <span m='2149440'>OK.</span> <span
  m='2150280'>This</span> <span m='2150460'>problem</span> <span
  m='2150740'>is</span> <span m='2150850'>much</span> <span
  m='2151100'>harder.</span> <span m='2152080'>And</span> <span
  m='2152510'>putting</span> <span m='2152780'>them</span> <span
  m='2152880'>both</span> <span m='2153130'>on</span> <span
  m='2153270'>the</span> <span m='2153350'>same</span> <span
  m='2153620'>quiz,</span> <span m='2154480'>was</span> <span
  m='2154580'>a</span> <span m='2154630'>bit</span> <span
  m='2154905'>brutal,</span> <span m='2156040'>but</span> <span
  m='2156840'>by</span> <span m='2157000'>the</span> <span
  m='2157080'>time</span> <span m='2157280'>you're</span> <span
  m='2157370'>done</span> <span m='2157520'>with</span> <span
  m='2157640'>this,</span> <span m='2157880'>you'll</span> <span
  m='2158130'>understand</span> <span m='2158820'>what</span> <span
  m='2159160'>a</span> <span m='2159440'>neural</span> <span
  m='2159640'>net</span> <span m='2159700'>can</span> <span
  m='2159900'>do</span> <span m='2160100'>or not.</span> <span
  m='2160380'>I</span> <span m='2160450'>put</span> <span
  m='2160790'>these</span> <span m='2161030'>in</span> <span
  m='2161140'>simplified</span> <span m='2161760'>form</span> <span
  m='2162100'>because</span> <span m='2162370'>of</span> <span
  m='2162440'>the</span> <span m='2162520'>fact</span> <span
  m='2162840'>that</span> <span m='2163390'>we</span> <span
  m='2163560'>don't</span> <span m='2163730'>care</span> <span
  m='2163990'>about</span> <span m='2164170'>their</span> <span
  m='2164320'>values</span> <span m='2165020'>or</span> <span
  m='2165100'>anything</span> <span m='2165410'>like</span> <span
  m='2165590'>that.</span> <span m='2166350'>But</span> <span
  m='2167170'>inside</span> <span m='2167660'>of these</span> <span
  m='2167840'>little</span> <span m='2168010'>circles</span> <span
  m='2168390'>is</span> <span m='2168470'>a</span> <span
  m='2168550'>sigmoid,</span> <span m='2169570'>the</span> <span
  m='2169850'>multipliers</span> <span m='2170630'>and</span> <span
  m='2170810'>the</span> <span m='2170970'>summers</span> <span
  m='2171470'>are</span> <span m='2171610'>implied.</span> <span
  m='2173860'>I</span> <span m='2174010'>think</span> <span m='2174210'>in
  the</span> <span m='2174710'>simplified</span> <span m='2175320'>form</span>
  <span m='2175580'>when</span> <span m='2175710'>we're</span> <span
  m='2175820'>not</span> <span m='2176070'>actually</span> <span
  m='2176380'>doing</span> <span m='2176570'>backpropagation</span> <span
  m='2177270'>is</span> <span m='2177380'>easier</span> <span
  m='2177670'>to</span> <span m='2177760'>view</span> <span
  m='2178100'>it,</span> <span m='2178320'>and</span> <span
  m='2178450'>see</span> <span m='2178590'>how</span> <span
  m='2178710'>many</span> <span m='2178880'>nodes</span> <span m='2179180'>there
  are.</span> <span m='2179950'>For</span> <span m='2180090'>the</span> <span
  m='2180200'>same</span> <span m='2180380'>reason</span> <span
  m='2180570'>you</span> <span m='2180680'>asked</span> <span
  m='2180890'>your</span> <span m='2181020'>question</span> <span
  m='2181310'>about</span> <span m='2181520'>how</span> <span
  m='2181660'>many</span> <span m='2181840'>there</span> <span
  m='2182155'>are.</span> <span m='2182850'>So</span> <span m='2183800'>all
  of</span> <span m='2184120'>those</span> <span m='2184360'>big</span> <span
  m='2184590'>circles</span> <span m='2185140'>are</span> <span
  m='2185360'>node.</span> <span m='2186130'>And</span> <span
  m='2186410'>in</span> <span m='2186590'>those</span> <span
  m='2186830'>nodes</span> <span m='2187135'>is</span> <span m='2187440'>a
  sigmoid</span> <span m='2187670'>now,</span> <span m='2188150'>not</span>
  <span m='2188450'>those</span> <span m='2188680'>crazy</span> <span
  m='2189010'>adders.</span> </p><p><span m='2190080'>We</span> <span
  m='2190240'>have</span> <span m='2190450'>the</span> <span
  m='2190530'>following</span> <span m='2191020'>problem.</span> <span
  m='2191680'>We</span> <span m='2191760'>have</span> <span
  m='2191990'>to</span> <span m='2192330'>try</span> <span m='2192580'>to</span>
  <span m='2192670'>match</span> <span m='2193240'>each of</span> <span
  m='2193330'>a,</span> <span m='2193590'>b, c, d, e, f</span> <span
  m='2194870'>to</span> <span m='2195050'>1,</span> <span m='2195380'>2,</span>
  <span m='2195470'>3,</span> <span m='2195640'>4,</span> <span
  m='2195920'>5,</span> <span m='2196160'>6,</span> <span
  m='2196330'>using</span> <span m='2196710'>each</span> <span
  m='2196950'>of</span> <span m='2197070'>them</span> <span
  m='2197690'>only</span> <span m='2198060'>once.</span> <span
  m='2199100'>That's</span> <span m='2199250'>important,</span> <span
  m='2200230'>because</span> <span m='2201020'>some</span> <span
  m='2201230'>of</span> <span m='2201310'>the</span> <span
  m='2201370'>more</span> <span m='2201590'>powerful</span> <span
  m='2202580'>networks</span> <span m='2203140'>in</span> <span
  m='2203260'>here</span> <span m='2203480'>can</span> <span
  m='2203610'>do</span> <span m='2203730'>a</span> <span m='2203800'>lot</span>
  <span m='2204100'>of</span> <span m='2204230'>these.</span> <span
  m='2205730'>So</span> <span m='2207310'>it's</span> <span
  m='2207510'>like</span> <span m='2207590'>yes,</span> <span
  m='2208020'>the</span> <span m='2208120'>powerful</span> <span
  m='2208530'>networks</span> <span m='2208870'>could</span> <span
  m='2209050'>do</span> <span m='2209170'>some</span> <span
  m='2209340'>of</span> <span m='2209390'>the</span> <span
  m='2209560'>easier</span> <span m='2209860'>problems</span> <span
  m='2210330'>here,</span> <span m='2210620'>but</span> <span
  m='2210810'>we</span> <span m='2210920'>want</span> <span
  m='2211150'>to</span> <span m='2211430'>match</span> <span
  m='2212030'>each</span> <span m='2212310'>net</span> <span m='2212670'>to
  a</span> <span m='2212760'>problem</span> <span m='2213120'>it</span> <span
  m='2213200'>can</span> <span m='2213470'>do,</span> <span
  m='2213940'>and</span> <span m='2214070'>there</span> <span
  m='2214170'>is</span> <span m='2214380'>exactly</span> <span
  m='2214920'>one</span> <span m='2215190'>mapping</span> <span
  m='2216090'>that</span> <span m='2216260'>will</span> <span
  m='2216390'>map--</span> <span m='2217600'>that</span> <span
  m='2217720'>is</span> <span m='2217850'>one</span> <span m='2218100'>to</span>
  <span m='2218200'>one,</span> <span m='2218650'>and</span> <span
  m='2218920'>maps</span> <span m='2219740'>exactly,</span> <span
  m='2220710'>uses</span> <span m='2221080'>all</span> <span
  m='2221410'>six</span> <span m='2221680'>of</span> <span
  m='2221760'>the</span> <span m='2221860'>nets</span> <span
  m='2222290'>to</span> <span m='2222410'>solve</span> <span
  m='2222790'>all</span> <span m='2222990'>six</span> <span
  m='2223220'>of</span> <span m='2223310'>these</span> <span
  m='2223480'>problems</span> <span m='2223920'>here.</span> </p><p><span
  m='2224700'>So</span> <span m='2225330'>some of</span> <span
  m='2225580'>you</span> <span m='2225710'>may</span> <span
  m='2225820'>be</span> <span m='2226000'>going</span> <span
  m='2226190'>like,</span> <span m='2226390'>what?</span> <span
  m='2227030'>How</span> <span m='2227410'>am I going to</span> <span
  m='2227550'>solve</span> <span m='2227790'>these</span> <span
  m='2227970'>problems?</span> <span m='2228870'>I</span> <span
  m='2228950'>gave</span> <span m='2229230'>away</span> <span m='2229560'>a
  hint</span> <span m='2229860'>before,</span> <span m='2230810'>which</span>
  <span m='2231050'>is</span> <span m='2231490'>that</span> <span
  m='2232830'>each</span> <span m='2233780'>node</span> <span
  m='2234550'>in</span> <span m='2234740'>the</span> <span m='2234830'>neural
  net,</span> <span m='2235180'>each</span> <span m='2235580'>sigmoid</span>
  <span m='2236150'>node</span> <span m='2236940'>can</span> <span
  m='2237150'>usually</span> <span m='2237650'>draw</span> <span
  m='2237940'>one</span> <span m='2238500'>line</span> <span
  m='2239750'>on</span> <span m='2240350'>the--</span> <span m='2240950'>it can
  draw</span> <span m='2241310'>one</span> <span m='2241600'>line</span> <span
  m='2241840'>into</span> <span m='2242050'>the</span> <span
  m='2242140'>picture.</span> <span m='2243290'>The</span> <span
  m='2243400'>line</span> <span m='2243660'>can</span> <span
  m='2243740'>be</span> <span m='2243860'>diagonal</span> <span
  m='2244540'>if</span> <span m='2244670'>that</span> <span
  m='2244890'>nodes</span> <span m='2245225'>receives</span> <span
  m='2245560'>both</span> <span m='2245850'>of</span> <span
  m='2245990'>the</span> <span m='2246180'>inputs,</span> <span
  m='2246890'>which</span> <span m='2247150'>is</span> <span
  m='2247230'>here,</span> <span m='2247480'>i</span> <span m='2247650'>1
  and</span> <span m='2247910'>i</span> <span m='2248220'>2.</span> <span
  m='2248320'>See</span> <span m='2248460'>there</span> <span m='2248630'>is
  an</span> <span m='2248730'>i</span> <span m='2248850'>1</span> <span
  m='2249070'>and an</span> <span m='2249240'>i</span> <span
  m='2249360'>2</span> <span m='2249570'>axis.</span> <span
  m='2250470'>Like</span> <span m='2250790'>x-</span> <span m='2251020'>and
  a</span> <span m='2251150'>y-axis.</span> <span m='2252330'>The</span> <span
  m='2252430'>node</span> <span m='2252870'>has</span> <span
  m='2253160'>to</span> <span m='2253240'>be</span> <span
  m='2253380'>horizontal,</span> <span m='2253930'>or</span> <span
  m='2254040'>vertical,</span> <span m='2254660'>if--</span> <span
  m='2254980'>sorry,</span> <span m='2256420'>the</span> <span
  m='2256890'>line</span> <span m='2257180'>has</span> <span m='2257360'>to
  be</span> <span m='2257400'>horizontal</span> <span m='2257830'>or vertical
  if</span> <span m='2258270'>the node</span> <span m='2258690'>only</span>
  <span m='2258920'>receives</span> <span m='2260170'>one</span> <span
  m='2260400'>of</span> <span m='2260470'>the</span> <span
  m='2260550'>inputs.</span> <span m='2261810'>And</span> <span
  m='2262030'>then,</span> <span m='2262800'>if</span> <span
  m='2262930'>you</span> <span m='2263060'>have</span> <span
  m='2263190'>a</span> <span m='2263260'>deeper</span> <span
  m='2263770'>level,</span> <span m='2266560'>these</span> <span
  m='2267470'>secondary</span> <span m='2268210'>level</span> <span
  m='2268480'>nodes</span> <span m='2269030'>can</span> <span
  m='2269240'>sort</span> <span m='2269460'>of</span> <span
  m='2269540'>do</span> <span m='2269660'>a</span> <span
  m='2269750'>logical,</span> <span m='2271090'>can</span> <span
  m='2271210'>do</span> <span m='2271320'>some</span> <span
  m='2271500'>kind</span> <span m='2271650'>of</span> <span
  m='2271770'>brilliant</span> <span m='2272100'>thing</span> <span
  m='2272280'>like</span> <span m='2272590'>and or</span> <span
  m='2273070'>or</span> <span m='2273440'>of</span> <span m='2273810'>the</span>
  <span m='2274030'>first</span> <span m='2274380'>two,</span> <span
  m='2275530'>which</span> <span m='2275720'>can</span> <span
  m='2275850'>help</span> <span m='2276060'>you</span> <span
  m='2276190'>out.</span> <span m='2278020'>All</span> <span
  m='2278120'>right.</span> <span m='2278770'>And</span> <span
  m='2279540'>so</span> <span m='2279770'>let's</span> <span
  m='2280010'>try</span> <span m='2280130'>to</span> <span
  m='2280200'>figure</span> <span m='2280490'>it</span> <span
  m='2280580'>out.</span> </p><p><span m='2281530'>So</span> <span
  m='2281700'>right</span> <span m='2281990'>off</span> <span
  m='2282170'>the</span> <span m='2282250'>bat,</span> <span
  m='2282760'>and</span> <span m='2283040'>I</span> <span
  m='2283080'>hope</span> <span m='2283380'>that</span> <span
  m='2283510'>people</span> <span m='2283790'>will</span> <span
  m='2283990'>help</span> <span m='2284590'>and</span> <span
  m='2284650'>call</span> <span m='2285030'>this out,</span> <span
  m='2285400'>because</span> <span m='2285690'>I know</span> <span
  m='2286200'>we</span> <span m='2286700'>don't</span> <span
  m='2286930'>have</span> <span m='2287050'>enough</span> <span
  m='2287170'>time</span> <span m='2287400'>that</span> <span
  m='2287480'>I</span> <span m='2287570'>can</span> <span
  m='2288140'>force</span> <span m='2288450'>you</span> <span
  m='2288550'>guys</span> <span m='2288880'>to all</span> <span
  m='2289180'>get</span> <span m='2289370'>it.</span> <span
  m='2290030'>But</span> <span m='2290130'>right off the bat,</span> <span
  m='2290300'>which</span> <span m='2290450'>one</span> <span
  m='2290610'>of</span> <span m='2290690'>these</span> <span
  m='2290850'>looks</span> <span m='2290990'>like</span> <span
  m='2291080'>it's</span> <span m='2291190'>the</span> <span
  m='2291360'>easiest</span> <span m='2291700'>one?</span> </p><p><span
  m='2292850'>STUDENT: Six.</span> </p><p><span m='2293240'>PROFESSOR:
  Six.</span> <span m='2293810'>That's</span> <span m='2294020'>great.</span>
  <span m='2294530'>Six</span> <span m='2294780'>is</span> <span
  m='2294890'>definitely</span> <span m='2295155'>the</span> <span
  m='2295420'>easiest</span> <span m='2295600'>one.</span> <span
  m='2295820'>It's</span> <span m='2295940'>a</span> <span
  m='2296000'>single</span> <span m='2296360'>line.</span> <span
  m='2297220'>So</span> <span m='2297260'>this</span> <span
  m='2297450'>is</span> <span m='2297590'>just</span> <span
  m='2297750'>how</span> <span m='2297900'>I</span> <span m='2298050'>would
  have</span> <span m='2298350'>solved</span> <span m='2298600'>this</span>
  <span m='2298760'>problem,</span> <span m='2299430'>is</span> <span
  m='2299920'>find the</span> <span m='2300320'>easiest</span> <span
  m='2300400'>one.</span> <span m='2300530'>Which</span> <span
  m='2300760'>of</span> <span m='2300900'>these</span> <span
  m='2301170'>is</span> <span m='2301410'>the</span> <span
  m='2301530'>crappiest</span> <span m='2302080'>net?</span> </p><p><span
  m='2303100'>STUDENT: A.</span> </p><p><span m='2303510'>PROFESSOR: A</span>
  <span m='2303910'>is</span> <span m='2304290'>the</span> <span
  m='2304380'>crappiest</span> <span m='2304830'>net.</span> <span
  m='2305500'>But</span> <span m='2305700'>there's</span> <span
  m='2305950'>no</span> <span m='2306270'>way</span> <span m='2306650'>in</span>
  <span m='2306750'>hell</span> <span m='2307100'>that</span> <span
  m='2307270'>A</span> <span m='2307440'>is</span> <span
  m='2307610'>going</span> <span m='2307770'>to</span> <span
  m='2307830'>be</span> <span m='2307900'>able</span> <span
  m='2307990'>to</span> <span m='2308050'>get</span> <span
  m='2308200'>any</span> <span m='2308440'>of</span> <span
  m='2308550'>these</span> <span m='2308820'>except</span> <span
  m='2308910'>for</span> <span m='2309410'>six.</span> <span
  m='2310510'>So</span> <span m='2310940'>let's,</span> <span
  m='2311180'>right</span> <span m='2311460'>off</span> <span
  m='2311610'>the</span> <span m='2311680'>bat,</span> <span
  m='2312080'>say</span> <span m='2312250'>that</span> <span
  m='2312470'>six</span> <span m='2312710'>is A.</span> <span
  m='2318610'>All</span> <span m='2318650'>right.</span> <span
  m='2319240'>Six</span> <span m='2319520'>is</span> <span m='2319640'>A.</span>
  <span m='2320924'>That's</span> <span m='2321352'>A.</span> <span
  m='2321780'>We</span> <span m='2321910'>don't</span> <span
  m='2322050'>have</span> <span m='2322140'>to</span> <span
  m='2322230'>worry</span> <span m='2322390'>about</span> <span
  m='2322620'>A.</span> <span m='2323700'>OK.</span> <span
  m='2324550'>Cool.</span> <span m='2325560'>Now</span> <span
  m='2325750'>let's</span> <span m='2326000'>look</span> <span
  m='2326150'>at</span> <span m='2326240'>some</span> <span
  m='2326430'>other</span> <span m='2326680'>ones</span> <span m='2326970'>that
  are</span> <span m='2327080'>very</span> <span m='2327330'>interesting.</span>
  <span m='2329400'>All</span> <span m='2329660'>the</span> <span
  m='2329780'>rest</span> <span m='2330070'>of</span> <span
  m='2330220'>these</span> <span m='2330570'>draw</span> <span
  m='2330760'>two</span> <span m='2331390'>lines,</span> <span
  m='2332430'>well</span> <span m='2332590'>these three</span> <span
  m='2333030'>draw</span> <span m='2333200'>two</span> <span
  m='2333410'>lines.</span> <span m='2333835'>These three</span> <span
  m='2334150'>draw</span> <span m='2334570'>three</span> <span
  m='2334990'>lines.</span> <span m='2335380'>They</span> <span
  m='2335520'>draw</span> <span m='2335795'>a</span> <span
  m='2336340'>triangle.</span> <span m='2338800'>So</span> <span
  m='2339720'>despite</span> <span m='2340110'>the</span> <span
  m='2340180'>fact</span> <span m='2340530'>that this</span> <span
  m='2340830'>c</span> <span m='2341110'>is</span> <span m='2341240'>a</span>
  <span m='2341290'>very</span> <span m='2341870'>powerful</span> <span
  m='2342430'>node,</span> <span m='2342740'>that</span> <span
  m='2342970'>indeed,</span> <span m='2344410'>with</span> <span
  m='2345070'>three</span> <span m='2345600'>whole</span> <span
  m='2346160'>levels</span> <span m='2346620'>here of</span> <span
  m='2347100'>sigmoids,</span> <span m='2349470'>it</span> <span
  m='2349600'>looks</span> <span m='2349880'>like</span> <span
  m='2350100'>there's</span> <span m='2350240'>only</span> <span
  m='2350580'>two</span> <span m='2351720'>that's</span> <span
  m='2352400'>in</span> <span m='2352560'>our</span> <span
  m='2352760'>little</span> <span m='2352970'>stable</span> <span m='2353360'>of
  nets that</span> <span m='2353770'>are</span> <span
  m='2354070'>equipped</span> <span m='2354490'>to</span> <span
  m='2354600'>handle</span> <span m='2354880'>number</span> <span
  m='2355120'>one</span> <span m='2355380'>and</span> <span
  m='2355520'>two.</span> <span m='2356460'>And</span> <span
  m='2356610'>those</span> <span m='2356840'>are?</span> <span m='2358530'>E and
  F,</span> <span m='2359570'>because</span> <span m='2360010'>E and</span>
  <span m='2360250'>F</span> <span m='2361080'>have</span> <span
  m='2362020'>three</span> <span m='2362330'>nodes</span> <span
  m='2362610'>at</span> <span m='2362680'>the</span> <span
  m='2362770'>first</span> <span m='2363060'>level.</span> <span
  m='2363335'>They</span> <span m='2363610'>can draw</span> <span
  m='2363850'>three</span> <span m='2364110'>lines.</span> <span
  m='2365530'>And</span> <span m='2365690'>then</span> <span
  m='2365790'>they</span> <span m='2365880'>can</span> <span
  m='2366010'>do</span> <span m='2366120'>something</span> <span
  m='2366450'>logical</span> <span m='2366840'>about</span> <span
  m='2367060'>those</span> <span m='2367260'>lines,</span> <span
  m='2367650'>like</span> <span m='2367820'>for</span> <span
  m='2367940'>instance,</span> <span m='2368190'>maybe,</span> <span
  m='2369230'>if</span> <span m='2369350'>it's</span> <span
  m='2369480'>inside</span> <span m='2369920'>all</span> <span m='2370210'>of
  those</span> <span m='2370440'>lines.</span> <span m='2371690'>There's</span>
  <span m='2371910'>a</span> <span m='2372010'>way</span> <span
  m='2372170'>to</span> <span m='2372280'>do</span> <span
  m='2372410'>that.</span> <span m='2372960'>You</span> <span
  m='2373000'>just--</span> <span m='2373870'>basically</span> <span
  m='2374220'>you</span> <span m='2374300'>can</span> <span
  m='2374480'>give</span> <span m='2375080'>negative</span> <span
  m='2375660'>and</span> <span m='2375800'>positive</span> <span
  m='2376260'>weights</span> <span m='2376830'>as</span> <span
  m='2377040'>you</span> <span m='2377140'>so</span> <span
  m='2377360'>choose</span> <span m='2377700'>to</span> <span
  m='2377790'>make</span> <span m='2377980'>sure</span> <span
  m='2378120'>that</span> <span m='2378260'>it's</span> <span
  m='2378430'>under</span> <span m='2378810'>certain</span> <span
  m='2379080'>ones,</span> <span m='2379340'>above</span> <span
  m='2379710'>other</span> <span m='2379950'>ones,</span> <span m='2380340'>and
  then make</span> <span m='2380540'>the</span> <span
  m='2380620'>threshold</span> <span m='2381250'>such</span> <span
  m='2381520'>that</span> <span m='2381650'>it</span> <span
  m='2381750'>has</span> <span m='2381940'>to</span> <span
  m='2382040'>follow</span> <span m='2382390'>all</span> <span
  m='2382740'>three</span> <span m='2382930'>of</span> <span
  m='2383020'>your</span> <span m='2383170'>rules.</span> <span
  m='2385160'>So</span> <span m='2386500'>between</span> <span m='2386910'>E and
  F,</span> <span m='2388430'>which</span> <span m='2388690'>one</span> <span
  m='2388930'>should</span> <span m='2389110'>be</span> <span m='2389620'>two
  and</span> <span m='2389830'>which</span> <span m='2389980'>one should</span>
  <span m='2390070'>be</span> <span m='2390190'>one.</span> <span
  m='2392050'>Anyone</span> <span m='2392170'>see?</span> </p><p><span
  m='2393160'>Well</span> <span m='2393420'>let's</span> <span
  m='2393640'>look</span> <span m='2393800'>at</span> <span
  m='2393960'>two</span> <span m='2394110'>and</span> <span
  m='2394260'>one.</span> <span m='2395140'>Which</span> <span
  m='2395400'>one</span> <span m='2395640'>is</span> <span
  m='2395880'>easier</span> <span m='2396200'>to</span> <span
  m='2396290'>do?</span> <span m='2396790'>Between</span> <span
  m='2397150'>two</span> <span m='2397310'>and</span> <span
  m='2397440'>one.</span> <span m='2397880'>Two.</span> <span
  m='2399120'>It's</span> <span m='2399310'>got</span> <span
  m='2399530'>a</span> <span m='2399570'>horizontal</span> <span m='2400130'>and
  a</span> <span m='2400290'>vertical.</span> <span m='2400820'>One</span> <span
  m='2401170'>has</span> <span m='2401450'>all</span> <span
  m='2401770'>three</span> <span m='2402030'>diagonal.</span> <span
  m='2403350'>And</span> <span m='2403750'>which</span> <span
  m='2404090'>one</span> <span m='2404350'>of these is</span> <span
  m='2404510'>a</span> <span m='2404590'>weaker</span> <span
  m='2404920'>net,</span> <span m='2405180'>between</span> <span m='2405440'>E
  and F.</span> <span m='2408262'>F. F has</span> <span m='2408680'>one</span>
  <span m='2408930'>node</span> <span m='2409070'>that</span> <span
  m='2409190'>can</span> <span m='2409450'>only</span> <span
  m='2409670'>do</span> <span m='2409900'>a</span> <span
  m='2410000'>horizontal,</span> <span m='2410620'>and</span> <span
  m='2410730'>one node</span> <span m='2410920'>that</span> <span
  m='2411220'>can</span> <span m='2411380'>only</span> <span
  m='2411620'>do</span> <span m='2412000'>a</span> <span
  m='2412100'>vertical</span> <span m='2412590'>line.</span> <span
  m='2413630'>So</span> <span m='2414070'>which</span> <span
  m='2414280'>one</span> <span m='2414460'>is</span> <span m='2414550'>F</span>
  <span m='2414780'>going to</span> <span m='2414820'>have</span> <span
  m='2414960'>to</span> <span m='2415060'>do?</span> <span
  m='2416370'>Two.</span> <span m='2417850'>And E</span> <span
  m='2418010'>does</span> <span m='2418310'>what?</span> <span
  m='2419210'>Good</span> <span m='2419330'>job,</span> <span
  m='2419590'>guys.</span> <span m='2420530'>Good job,</span> <span
  m='2420860'>you got this.</span> </p><p><span m='2422470'>So</span> <span
  m='2423630'>now</span> <span m='2423790'>let's</span> <span
  m='2424010'>look</span> <span m='2424130'>at</span> <span
  m='2424190'>the</span> <span m='2424260'>last</span> <span
  m='2424760'>three.</span> <span m='2431070'>Number</span> <span
  m='2431380'>three</span> <span m='2431720'>is</span> <span
  m='2431850'>definitely</span> <span m='2432220'>the</span> <span
  m='2432310'>hardest.</span> <span m='2432790'>It's</span> <span
  m='2433010'>an</span> <span m='2433230'>exceller.</span> <span
  m='2435470'>Those</span> <span m='2435780'>of</span> <span
  m='2435870'>you</span> <span m='2436120'>who've</span> <span
  m='2436500'>played</span> <span m='2436860'>around</span> <span
  m='2437260'>with</span> <span m='2438400'>double</span> <span m='2438740'>o 2
  kind of</span> <span m='2438900'>stuff,</span> <span m='2439080'>or</span>
  <span m='2439750'>even</span> <span m='2439960'>just</span> <span
  m='2440170'>logic,</span> <span m='2441750'>probably</span> <span
  m='2442260'>know</span> <span m='2443210'>that</span> <span
  m='2443420'>there</span> <span m='2443610'>is</span> <span
  m='2443800'>no</span> <span m='2444090'>way</span> <span m='2445560'>to</span>
  <span m='2447760'>make</span> <span m='2447980'>a</span> <span
  m='2448080'>sort</span> <span m='2448350'>of</span> <span
  m='2448430'>simple</span> <span m='2448980'>linear</span> <span
  m='2449280'>combination</span> <span m='2452080'>in</span> <span
  m='2452270'>one</span> <span m='2452490'>level</span> <span
  m='2452840'>of</span> <span m='2452910'>logic</span> <span
  m='2454280'>to</span> <span m='2454640'>create</span> <span
  m='2454900'>an</span> <span m='2455000'>x</span> <span m='2455280'>or.</span>
  <span m='2455610'>x</span> <span m='2455820'>or</span> <span
  m='2456220'>is</span> <span m='2456720'>very</span> <span
  m='2457010'>difficult</span> <span m='2457540'>to</span> <span
  m='2457750'>create.</span> <span m='2458660'>There</span> <span
  m='2459120'>are</span> <span m='2459840'>some</span> <span
  m='2460050'>interesting</span> <span m='2460450'>problems</span> <span
  m='2460830'>involving</span> <span m='2461280'>trying</span> <span
  m='2461660'>to</span> <span m='2462680'>teach</span> <span
  m='2462920'>an</span> <span m='2462990'>exceller</span> <span
  m='2463440'>to</span> <span m='2463620'>a</span> <span m='2463870'>neural
  net.</span> <span m='2464560'>Because</span> <span m='2464700'>a</span> <span
  m='2464760'>neural net</span> <span m='2465830'>is</span> <span
  m='2465960'>not</span> <span m='2466130'>to</span> <span m='2466220'>be</span>
  <span m='2466280'>able</span> <span m='2466410'>to</span> <span
  m='2466470'>get</span> <span m='2466670'>the</span> <span m='2466740'>x</span>
  <span m='2466980'>or,</span> <span m='2467220'>because</span> <span
  m='2467570'>of</span> <span m='2467630'>the</span> <span
  m='2467700'>fact</span> <span m='2467970'>that</span> <span
  m='2468880'>you</span> <span m='2469070'>can</span> <span
  m='2469230'>tell</span> <span m='2469560'>it,</span> <span
  m='2469720'>OK,</span> <span m='2470470'>I</span> <span
  m='2470570'>want</span> <span m='2470910'>this</span> <span
  m='2471140'>one</span> <span m='2471300'>to</span> <span m='2471390'>be</span>
  <span m='2471500'>high,</span> <span m='2472830'>and</span> <span
  m='2473000'>this</span> <span m='2473150'>one</span> <span
  m='2473300'>to</span> <span m='2473370'>be</span> <span
  m='2473510'>low.</span> <span m='2474120'>That's</span> <span
  m='2474370'>fine.</span> <span m='2474930'>You</span> <span
  m='2475140'>say</span> <span m='2475300'>these</span> <span
  m='2475500'>both</span> <span m='2475770'>have</span> <span
  m='2475920'>to</span> <span m='2476010'>be</span> <span
  m='2476130'>high.</span> <span m='2476610'>That's</span> <span
  m='2476870'>fine.</span> <span m='2477620'>It's</span> <span
  m='2477700'>hard</span> <span m='2478020'>to</span> <span
  m='2478110'>say,</span> <span m='2478620'>it's</span> <span
  m='2480190'>pretty</span> <span m='2480360'>much</span> <span
  m='2480480'>impossible</span> <span m='2480880'>to</span> <span
  m='2480940'>say,</span> <span m='2481110'>this</span> <span
  m='2481410'>one</span> <span m='2481690'>or</span> <span
  m='2481930'>this</span> <span m='2482130'>one,</span> <span
  m='2482290'>but</span> <span m='2482450'>not</span> <span
  m='2482650'>the</span> <span m='2482760'>other,</span> <span
  m='2483640'>because</span> <span m='2484640'>need</span> <span
  m='2484860'>to</span> <span m='2484920'>be</span> <span
  m='2485020'>high</span> <span m='2485570'>in</span> <span m='2485720'>a</span>
  <span m='2485780'>single</span> <span m='2486140'>node,</span> <span
  m='2486510'>because</span> <span m='2486770'>of</span> <span
  m='2486820'>the</span> <span m='2486910'>fact</span> <span
  m='2487100'>that</span> <span m='2487230'>if</span> <span
  m='2487340'>you</span> <span m='2487460'>just</span> <span
  m='2488070'>play</span> <span m='2488270'>with</span> <span
  m='2488440'>it,</span> <span m='2488620'>you'll</span> <span
  m='2488770'>see.</span> </p><p><span m='2489460'>You</span> <span
  m='2489580'>need</span> <span m='2489760'>to</span> <span
  m='2489840'>set</span> <span m='2490000'>a</span> <span
  m='2490060'>threshold</span> <span m='2490620'>somewhere,</span> <span
  m='2491470'>and</span> <span m='2491940'>it's</span> <span
  m='2492150'>not</span> <span m='2492340'>going</span> <span
  m='2492460'>to</span> <span m='2492500'>be</span> <span
  m='2492640'>able</span> <span m='2492780'>to</span> <span
  m='2492860'>distinguish</span> <span m='2493680'>between,</span> <span
  m='2494620'>if</span> <span m='2494770'>the</span> <span
  m='2494870'>threshold</span> <span m='2495310'>is</span> <span
  m='2495390'>set</span> <span m='2495630'>such</span> <span
  m='2495840'>that</span> <span m='2496280'>the</span> <span
  m='2496470'>or</span> <span m='2496740'>is</span> <span
  m='2496830'>going</span> <span m='2496930'>to</span> <span
  m='2496990'>work,</span> <span m='2497220'>the</span> <span
  m='2497320'>whole</span> <span m='2497730'>or</span> <span
  m='2497910'>is</span> <span m='2498030'>going</span> <span
  m='2498140'>to</span> <span m='2498190'>work.</span> <span
  m='2498450'>It's</span> <span m='2498610'>going</span> <span
  m='2498770'>to</span> <span m='2498840'>accept</span> <span
  m='2499930'>when</span> <span m='2500090'>both</span> <span
  m='2500380'>of</span> <span m='2500490'>them</span> <span
  m='2500590'>are</span> <span m='2500670'>positive</span> <span
  m='2501100'>as</span> <span m='2501200'>well.</span> <span
  m='2502060'>So</span> <span m='2502230'>how</span> <span m='2502440'>we</span>
  <span m='2502530'>can</span> <span m='2502710'>do</span> <span
  m='2502930'>x</span> <span m='2503180'>or?</span> <span m='2503360'>We</span>
  <span m='2503470'>need</span> <span m='2503630'>more</span> <span
  m='2503810'>logic.</span> <span m='2504730'>We</span> <span
  m='2504850'>need</span> <span m='2505040'>to</span> <span
  m='2505110'>use</span> <span m='2505480'>some</span> <span
  m='2505700'>combinations</span> <span m='2506290'>of</span> <span
  m='2506390'>ands</span> <span m='2506690'>and</span> <span
  m='2506900'>ors</span> <span m='2506990'>in</span> <span m='2507080'>a</span>
  <span m='2507210'>two</span> <span m='2507430'>level</span> <span
  m='2507720'>way.</span> <span m='2508480'>To</span> <span
  m='2508580'>do</span> <span m='2508730'>that</span> <span
  m='2508990'>we</span> <span m='2509080'>need</span> <span
  m='2509450'>the</span> <span m='2509570'>deepest</span> <span
  m='2509835'>neural net</span> <span m='2510370'>that</span> <span
  m='2510560'>we</span> <span m='2510790'>have.</span> <span
  m='2511520'>There's</span> <span m='2511590'>only</span> <span
  m='2511830'>one</span> <span m='2512060'>that's</span> <span
  m='2512230'>capable</span> <span m='2512710'>of</span> <span
  m='2512750'>that.</span> <span m='2513390'>And</span> <span
  m='2513580'>that</span> <span m='2513760'>is?</span> <span
  m='2514680'>It's</span> <span m='2514990'>C.</span> </p><p><span
  m='2516180'>There</span> <span m='2516310'>are</span> <span
  m='2516340'>many</span> <span m='2516620'>different</span> <span
  m='2516870'>ways</span> <span m='2517050'>to</span> <span
  m='2517150'>do</span> <span m='2517320'>it.</span> <span
  m='2517410'>Let's</span> <span m='2517670'>think</span> <span
  m='2517850'>of</span> <span m='2517920'>a</span> <span
  m='2518000'>possibility.</span> <span m='2519510'>i</span> <span
  m='2519690'>1</span> <span m='2520060'>and</span> <span m='2520170'>i</span>
  <span m='2520550'>2</span> <span m='2520930'>draw</span> <span
  m='2521130'>these</span> <span m='2521430'>two</span> <span
  m='2521590'>lines.</span> <span m='2524230'>Let's</span> <span
  m='2524450'>call</span> <span m='2524610'>these</span> <span
  m='2525620'>one,</span> <span m='2526070'>two,</span> <span
  m='2526680'>three,</span> <span m='2527110'>four,</span> <span
  m='2527580'>five,</span> <span m='2528450'>node</span> <span
  m='2528770'>1</span> <span m='2528940'>and</span> <span
  m='2529000'>node</span> <span m='2529170'>2</span> <span
  m='2530010'>draw</span> <span m='2530200'>these</span> <span
  m='2530470'>two</span> <span m='2530650'>lines.</span> <span
  m='2532010'>And</span> <span m='2532110'>I'll</span> <span
  m='2532210'>just</span> <span m='2532220'>sort</span> <span
  m='2532400'>of</span> <span m='2532480'>draw</span> <span
  m='2532700'>it</span> <span m='2532830'>here</span> <span
  m='2533080'>for</span> <span m='2533260'>you</span> <span
  m='2533390'>guys.</span> <span m='2534680'>Then</span> <span
  m='2534880'>maybe</span> <span m='2535020'>node 3</span> <span
  m='2536990'>gives</span> <span m='2537310'>value</span> <span
  m='2537890'>to--</span> <span m='2539890'>yeah,</span> <span
  m='2540050'>let</span> <span m='2540180'>me</span> <span
  m='2540260'>see--</span> <span m='2540520'>node</span> <span
  m='2541050'>three</span> <span m='2541360'>can</span> <span
  m='2541640'>give</span> <span m='2541980'>value</span> <span
  m='2542385'>to</span> <span m='2545200'>perhaps--</span> <span
  m='2549450'>let's</span> <span m='2549810'>see--</span> <span
  m='2550060'>node</span> <span m='2550375'>3 can</span> <span
  m='2550690'>give</span> <span m='2550860'>value</span> <span
  m='2551240'>to</span> <span m='2551610'>everything</span> <span
  m='2551945'>that is--</span> <span m='2556580'>there</span> <span
  m='2557170'>are</span> <span m='2557190'>a</span> <span m='2557250'>lot</span>
  <span m='2557400'>of</span> <span m='2557470'>possibilities</span> <span
  m='2557745'>here.</span> <span m='2558090'>Node 3</span> <span
  m='2558400'>can</span> <span m='2558750'>give</span> <span
  m='2558940'>value</span> <span m='2559410'>to</span> <span
  m='2560850'>everything</span> <span m='2561330'>that</span> <span
  m='2561580'>is</span> <span m='2566410'>up</span> <span
  m='2566770'>here.</span> <span m='2568410'>Actually</span> <span
  m='2569260'>node</span> <span m='2569470'>3 can</span> <span
  m='2569560'>give</span> <span m='2569840'>value</span> <span
  m='2570120'>to</span> <span m='2570260'>everything</span> <span
  m='2570650'>except</span> <span m='2570930'>for</span> <span
  m='2571030'>this</span> <span m='2571230'>bottom</span> <span
  m='2571560'>part,</span> <span m='2573430'>and</span> <span
  m='2574040'>then</span> <span m='2576630'>node</span> <span
  m='2577010'>4</span> <span m='2578620'>could</span> <span
  m='2579170'>give</span> <span m='2579700'>value</span> <span
  m='2581246'>to</span> <span m='2581680'>say--</span> <span
  m='2584385'>doesn't</span> <span m='2584770'>do</span> <span
  m='2584920'>it</span> <span m='2585010'>yet,</span> <span
  m='2585510'>but</span> <span m='2585820'>there's</span> <span
  m='2586050'>a</span> <span m='2586120'>few--</span> <span
  m='2586360'>there's</span> <span m='2587010'>a</span> <span
  m='2587060'>few</span> <span m='2587230'>different</span> <span
  m='2587500'>ways</span> <span m='2587700'>to</span> <span
  m='2587780'>do</span> <span m='2587890'>it if</span> <span
  m='2587990'>you</span> <span m='2588120'>played</span> <span
  m='2588360'>around.</span> <span m='2589130'>The</span> <span
  m='2590300'>key</span> <span m='2590470'>idea</span> <span
  m='2590830'>is</span> <span m='2591370'>that</span> <span
  m='2591720'>node</span> <span m='2591970'>3 and</span> <span
  m='2592120'>node</span> <span m='2592300'>4</span> <span
  m='2592470'>can</span> <span m='2592940'>give</span> <span
  m='2593140'>value</span> <span m='2593500'>to</span> <span
  m='2593660'>some</span> <span m='2593900'>combination</span> <span
  m='2594560'>and</span> <span m='2595020'>or</span> <span m='2595340'>or</span>
  <span m='2595660'>not,</span> <span m='2597350'>and</span> <span
  m='2598040'>then</span> <span m='2598410'>node</span> <span
  m='2598780'>5</span> <span m='2599150'>can</span> <span
  m='2599380'>give</span> <span m='2599520'>value</span> <span
  m='2600090'>based</span> <span m='2601710'>on</span> <span
  m='2601820'>being</span> <span m='2602240'>above</span> <span
  m='2602820'>or</span> <span m='2603110'>below</span> <span
  m='2603490'>a</span> <span m='2603550'>certain</span> <span
  m='2603820'>threshold,</span> <span m='2604470'>combination</span> <span
  m='2605010'>of</span> <span m='2605180'>3</span> <span m='2605340'>and</span>
  <span m='2605510'>4.</span> <span m='2606280'>You</span> <span
  m='2606450'>can</span> <span m='2606570'>build</span> <span
  m='2606780'>an</span> <span m='2606860'>exceller</span> <span
  m='2607360'>out</span> <span m='2607570'>of</span> <span
  m='2607680'>the</span> <span m='2607740'>logic</span> <span
  m='2608090'>gates.</span> </p><p><span m='2609200'>I</span> <span
  m='2609800'>will</span> <span m='2610050'>ponder</span> <span
  m='2610380'>on</span> <span m='2610530'>that</span> <span
  m='2610760'>in</span> <span m='2610860'>the</span> <span
  m='2610930'>back</span> <span m='2611240'>burner</span> <span
  m='2611490'>for</span> <span m='2611680'>a</span> <span
  m='2611780'>moment,</span> <span m='2612820'>as</span> <span
  m='2613050'>we</span> <span m='2613160'>continue</span> <span
  m='2613490'>onward,</span> <span m='2613800'>but</span> <span
  m='2614030'>clearly</span> <span m='2614840'>C</span> <span
  m='2615200'>has</span> <span m='2615490'>to</span> <span m='2615590'>do</span>
  <span m='2615910'>number</span> <span m='2616200'>three.</span> <span
  m='2618010'>OK.</span> <span m='2618620'>Now</span> <span
  m='2618860'>we're</span> <span m='2618970'>left</span> <span
  m='2619010'>with</span> <span m='2619200'>four</span> <span
  m='2619450'>and</span> <span m='2619570'>five.</span> <span
  m='2620490'>I</span> <span m='2620640'>think,</span> <span
  m='2621240'>interestingly,</span> <span m='2621840'>five</span> <span
  m='2622410'>looks</span> <span m='2622510'>like it</span> <span
  m='2622640'>may be</span> <span m='2622860'>more</span> <span
  m='2623070'>complicated</span> <span m='2623610'>than</span> <span
  m='2623780'>four,</span> <span m='2624180'>because</span> <span
  m='2624470'>of</span> <span m='2624550'>the</span> <span
  m='2624610'>fact</span> <span m='2625030'>that</span> <span
  m='2625990'>it</span> <span m='2626640'>needs</span> <span
  m='2626890'>to</span> <span m='2626970'>do</span> <span
  m='2627110'>both</span> <span m='2627490'>different</span> <span
  m='2627780'>directions</span> <span m='2628125'>instead  of</span> <span
  m='2628470'>two of</span> <span m='2628660'>the</span> <span
  m='2628820'>same</span> <span m='2629070'>direction.</span> <span
  m='2632930'>So</span> <span m='2633200'>however,</span> <span
  m='2633530'>just</span> <span m='2633700'>the</span> <span
  m='2633890'>idea</span> <span m='2634240'>of</span> <span
  m='2634430'>the</span> <span m='2634490'>one</span> <span
  m='2634680'>with</span> <span m='2634800'>the</span> <span
  m='2634890'>fewer</span> <span m='2635200'>lines,</span> <span
  m='2635720'>being</span> <span m='2635970'>a</span> <span
  m='2636030'>simpler</span> <span m='2636530'>one,</span> <span
  m='2637110'>may</span> <span m='2637700'>not</span> <span
  m='2637890'>get</span> <span m='2638030'>us</span> <span
  m='2638240'>through</span> <span m='2638470'>here.</span> <span
  m='2638720'>And</span> <span m='2638840'>there's</span> <span
  m='2638990'>a</span> <span m='2639120'>reason</span> <span
  m='2639430'>why.</span> <span m='2639860'>Look</span> <span
  m='2640070'>what</span> <span m='2640220'>we</span> <span
  m='2640320'>have</span> <span m='2640550'>left</span> <span m='2640800'>to
  use.</span> <span m='2641180'>We</span> <span m='2641300'>have</span> <span
  m='2641550'>to</span> <span m='2641640'>use</span> <span m='2641950'>D</span>
  <span m='2642820'>or</span> <span m='2642970'>B.</span> <span
  m='2644700'>What</span> <span m='2644990'>is</span> <span
  m='2645140'>the</span> <span m='2645220'>property</span> <span
  m='2645800'>of</span> <span m='2646010'>the</span> <span
  m='2646120'>two</span> <span m='2646280'>lines</span> <span m='2646610'>that
  D</span> <span m='2646710'>can</span> <span m='2647090'>draw?</span> <span
  m='2648740'>D being</span> <span m='2649110'>the</span> <span
  m='2649200'>simpler</span> <span m='2649590'>one.</span> <span
  m='2651930'>One</span> <span m='2652220'>horizontal,</span> <span
  m='2652880'>one</span> <span m='2653110'>vertical,</span> <span
  m='2653570'>that's</span> <span m='2653820'>right.</span> <span
  m='2654760'>So</span> <span m='2654890'>even</span> <span
  m='2655090'>though</span> <span m='2655220'>it</span> <span
  m='2655280'>may</span> <span m='2655510'>look</span> <span
  m='2655740'>simpler</span> <span m='2656260'>to</span> <span
  m='2656390'>just</span> <span m='2656570'>have</span> <span
  m='2656720'>two</span> <span m='2656950'>horizontal</span> <span
  m='2657380'>lines,</span> <span m='2657740'>it</span> <span
  m='2657890'>actually</span> <span m='2658470'>requires</span> <span
  m='2659070'>B.</span> <span m='2659890'>B</span> <span m='2660300'>is</span>
  <span m='2660410'>the</span> <span m='2660530'>only</span> <span
  m='2660720'>one</span> <span m='2660800'>that</span> <span
  m='2660860'>can</span> <span m='2661050'>draw</span> <span
  m='2661390'>two</span> <span m='2661740'>horizontal</span> <span
  m='2662140'>lines</span> <span m='2662470'>because</span> <span
  m='2662640'>D</span> <span m='2663300'>has</span> <span m='2663490'>to</span>
  <span m='2663590'>draw</span> <span m='2663740'>one</span> <span
  m='2664030'>horizontal</span> <span m='2664530'>and one</span> <span
  m='2664760'>vertical.</span> <span m='2665660'>So</span> <span
  m='2666140'>that</span> <span m='2666360'>leaves</span> <span
  m='2666610'>us</span> <span m='2666820'>with,</span> <span m='2667930'>B
  on</span> <span m='2668360'>this,</span> <span m='2670470'>D</span> <span
  m='2670660'>on</span> <span m='2670890'>this.</span> <span
  m='2673180'>Excellent,</span> <span m='2673590'>we have</span> <span
  m='2673700'>a</span> <span m='2673780'>question.</span> <span
  m='2674410'>I</span> <span m='2674530'>would've</span> <span
  m='2674840'>thought</span> <span m='2675720'>it</span> <span
  m='2675840'>would</span> <span m='2675970'>have been</span> <span
  m='2676200'>possible</span> <span m='2676590'>that we</span> <span
  m='2676700'>had</span> <span m='2676840'>no</span> <span
  m='2676950'>questions,</span> <span m='2677360'>or</span> <span
  m='2677450'>maybe</span> <span m='2677700'>I</span> <span
  m='2677800'>just</span> <span m='2677990'>explained</span> <span
  m='2678360'>it</span> <span m='2678450'>the</span> <span
  m='2678530'>best</span> <span m='2678840'>I</span> <span
  m='2678890'>ever</span> <span m='2679070'>have.</span> <span
  m='2679700'>Question.</span> </p><p><span m='2679970'>STUDENT: I didn't</span>
  <span m='2680240'>get why</span> <span m='2680677'>B</span> <span
  m='2681114'>has</span> <span m='2681551'>to be two horizontal lines.</span>
  </p><p><span m='2684220'>PROFESSOR: All</span> <span m='2684320'>right.</span>
  <span m='2684700'>So</span> <span m='2684890'>the</span> <span
  m='2684990'>question</span> <span m='2685280'>is,</span> <span
  m='2685510'>I</span> <span m='2685640'>don't</span> <span
  m='2685910'>understand</span> <span m='2686260'>why</span> <span
  m='2686390'>B</span> <span m='2686860'>to</span> <span m='2686950'>be</span>
  <span m='2687320'>two</span> <span m='2687470'>horizontal</span> <span
  m='2687910'>lines.</span> <span m='2688200'>The answer</span> <span
  m='2688470'>is,</span> <span m='2689240'>it</span> <span
  m='2689390'>doesn't.</span> <span m='2692340'>B</span> <span
  m='2692570'>can</span> <span m='2692740'>be</span> <span
  m='2692880'>anything,</span> <span m='2693720'>but</span> <span
  m='2694050'>D</span> <span m='2694300'>can't</span> <span
  m='2694620'>be</span> <span m='2694780'>two</span> <span
  m='2694930'>horizontal</span> <span m='2695390'>lines.</span> <span
  m='2696510'>And</span> <span m='2696820'>so</span> <span m='2696970'>by</span>
  <span m='2697090'>process</span> <span m='2697470'>of</span> <span
  m='2697550'>elimination,</span> <span m='2698180'>it's</span> <span
  m='2698360'>B.</span> <span m='2701430'>Well</span> <span
  m='2701820'>take</span> <span m='2701910'>a</span> <span
  m='2701970'>look</span> <span m='2702180'>at</span> <span
  m='2702300'>D,</span> <span m='2702550'>right.</span> <span
  m='2703680'>So</span> <span m='2704610'>D</span> <span m='2704860'>has</span>
  <span m='2705180'>three</span> <span m='2705370'>nodes,</span> <span
  m='2706800'>one,</span> <span m='2707390'>two,</span> <span
  m='2707970'>three.</span> <span m='2709530'>Node</span> <span m='2709760'>1
  and</span> <span m='2710050'>node</span> <span m='2710280'>2</span> <span
  m='2711180'>can</span> <span m='2711320'>just</span> <span
  m='2711550'>draw</span> <span m='2711800'>a</span> <span
  m='2711840'>line</span> <span m='2712240'>anywhere</span> <span
  m='2712660'>they</span> <span m='2712820'>want,</span> <span
  m='2713390'>involving</span> <span m='2713890'>the inputs</span> <span
  m='2714260'>they</span> <span m='2714360'>receive.</span> <span
  m='2715140'>What</span> <span m='2715410'>input</span> <span
  m='2715660'>does</span> <span m='2715820'>node</span> <span
  m='2716010'>1</span> <span m='2716200'>receive?</span> <span
  m='2718470'>Let's</span> <span m='2718700'>go</span> <span
  m='2718820'>to</span> <span m='2718930'>node</span> <span
  m='2719180'>1.</span> <span m='2721910'>So</span> <span m='2722840'>it</span>
  <span m='2722990'>can</span> <span m='2723220'>only</span> <span
  m='2723550'>make</span> <span m='2723840'>a</span> <span
  m='2723890'>cut</span> <span m='2724200'>off</span> <span
  m='2724430'>based</span> <span m='2724700'>on</span> <span
  m='2724840'>i</span> <span m='2725050'>1.</span> <span m='2726550'>So</span>
  <span m='2726720'>therefore,</span> <span m='2728120'>it</span> <span
  m='2728430'>can</span> <span m='2728800'>only</span> <span
  m='2729120'>draw</span> <span m='2729610'>by making</span> <span
  m='2729930'>the</span> <span m='2730030'>cut</span> <span
  m='2730450'>off</span> <span m='2730800'>above and</span> <span
  m='2730910'>below</span> <span m='2731640'>a</span> <span
  m='2731780'>certain</span> <span m='2732010'>point.</span> <span
  m='2732200'>Node</span> <span m='2732280'>1</span> <span
  m='2732570'>can</span> <span m='2732780'>only</span> <span
  m='2733030'>draw</span> <span m='2733740'>vertical</span> <span
  m='2734110'>lines.</span> <span m='2734990'>Node</span> <span
  m='2735220'>2</span> <span m='2735910'>can</span> <span
  m='2736050'>only</span> <span m='2736220'>draw</span> <span
  m='2736430'>a</span> <span m='2736450'>horizontal</span> <span
  m='2737050'>line,</span> <span m='2737280'>because</span> <span
  m='2737490'>it</span> <span m='2737570'>can</span> <span
  m='2737720'>only</span> <span m='2737930'>make</span> <span
  m='2738090'>a</span> <span m='2738160'>cut off</span> <span
  m='2738590'>based</span> <span m='2738910'>on</span> <span
  m='2739620'>where</span> <span m='2739840'>it</span> <span
  m='2739890'>is</span> <span m='2740050'>an</span> <span m='2740180'>i
  2.</span> <span m='2741780'>Therefore</span> <span m='2742320'>they</span>
  <span m='2742450'>can't</span> <span m='2742780'>both</span> <span
  m='2743050'>draw</span> <span m='2743240'>a</span> <span
  m='2743260'>horizontal.</span> <span m='2744390'>That's</span> <span
  m='2744680'>why</span> <span m='2744890'>this</span> <span
  m='2745110'>is</span> <span m='2745260'>the</span> <span
  m='2745740'>trickiest</span> <span m='2746260'>part.</span> <span
  m='2746640'>This</span> <span m='2746820'>last</span> <span
  m='2747070'>part,</span> <span m='2747280'>because</span> <span
  m='2747930'>B</span> <span m='2748240'>is</span> <span m='2748450'>more</span>
  <span m='2748700'>powerful.</span> <span m='2749160'>B does</span> <span
  m='2749640'>not</span> <span m='2749970'>only</span> <span
  m='2750240'>have</span> <span m='2750450'>to</span> <span
  m='2750550'>do</span> <span m='2750720'>two</span> <span
  m='2751030'>horizontal lines.</span> <span m='2751340'>It</span> <span
  m='2751430'>can</span> <span m='2751590'>do</span> <span
  m='2752360'>two</span> <span m='2753430'>diagonal</span> <span
  m='2754050'>lines.</span> <span m='2754280'>It</span> <span
  m='2754360'>can</span> <span m='2754510'>do</span> <span
  m='2754610'>anything</span> <span m='2755010'>it</span> <span
  m='2755050'>wants.</span> <span m='2755490'>It</span> <span
  m='2755610'>just</span> <span m='2755800'>happens</span> <span
  m='2756160'>that</span> <span m='2756340'>it's stuck</span> <span
  m='2756740'>doing</span> <span m='2756990'>this</span> <span
  m='2757680'>somewhat</span> <span m='2758090'>easier</span> <span
  m='2758450'>problem,</span> <span m='2758860'>because</span> <span
  m='2759110'>the</span> <span m='2759200'>fact</span> <span m='2759680'>that it
  is</span> <span m='2759840'>the</span> <span m='2759930'>only</span> <span
  m='2760110'>one</span> <span m='2760300'>left</span> <span
  m='2760570'>that</span> <span m='2760680'>has</span> <span
  m='2760860'>the</span> <span m='2760950'>power</span> <span
  m='2761200'>to</span> <span m='2761300'>do</span> <span m='2761450'>it.</span>
  </p><p><span m='2762490'>So</span> <span m='2763030'>let's</span> <span
  m='2763280'>see,</span> <span m='2764760'>we're</span> <span
  m='2764910'>done,</span> <span m='2765280'>and</span> <span
  m='2765590'>we'd</span> <span m='2765760'>have</span> <span
  m='2766430'>aced</span> <span m='2766760'>this</span> <span
  m='2767030'>part</span> <span m='2767340'>of the</span> <span
  m='2767410'>quiz</span> <span m='2767750'>that like</span> <span
  m='2768090'>no</span> <span m='2768510'>one</span> <span
  m='2768840'>got,</span> <span m='2769490'>well</span> <span
  m='2769640'>not</span> <span m='2769850'>no one,</span> <span m='2770180'>but
  very</span> <span m='2770550'>few</span> <span m='2770740'>people</span> <span
  m='2770990'>got,</span> <span m='2771240'>when</span> <span
  m='2771360'>we</span> <span m='2771510'>put</span> <span m='2771660'>it</span>
  <span m='2771760'>on</span> <span m='2772030'>in</span> <span
  m='2772510'>2008.</span> <span m='2773660'>The</span> <span
  m='2773760'>only</span> <span m='2773950'>thing</span> <span
  m='2774140'>we</span> <span m='2774280'>have</span> <span
  m='2774700'>left</span> <span m='2775390'>to</span> <span
  m='2775700'>ask</span> <span m='2777140'>is--</span> <span m='2779680'>let me
  see--</span> <span m='2780390'>yeah,</span> <span m='2780610'>the</span> <span
  m='2780700'>only</span> <span m='2780890'>thing</span> <span
  m='2780990'>we</span> <span m='2781070'>have</span> <span
  m='2781380'>left</span> <span m='2781700'>to</span> <span
  m='2781890'>ask</span> <span m='2782430'>is</span> <span
  m='2783510'>what</span> <span m='2783860'>are</span> <span
  m='2784110'>we</span> <span m='2784260'>going</span> <span
  m='2784590'>to</span> <span m='2784700'>do</span> <span
  m='2785320'>here</span> <span m='2787070'>for</span> <span
  m='2787570'>this?</span> <span m='2790090'>All</span> <span
  m='2790200'>right.</span> <span m='2790430'>Let's</span> <span
  m='2790720'>see.</span> <span m='2793860'>For</span> <span
  m='2794300'>the</span> <span m='2794530'>x</span> <span m='2794840'>or,</span>
  <span m='2796550'>let's</span> <span m='2796740'>see</span> <span
  m='2796820'>if</span> <span m='2796930'>I</span> <span m='2797010'>can</span>
  <span m='2797260'>do</span> <span m='2797450'>this</span> <span
  m='2797680'>x</span> <span m='2797950'>or.</span> <span m='2801360'>OK.</span>
  <span m='2803240'>How</span> <span m='2803410'>about</span> <span
  m='2803640'>this</span> <span m='2803800'>one.</span> <span
  m='2804970'>Right.</span> <span m='2805510'>I'm</span> <span
  m='2805700'>an</span> <span m='2805840'>idiot.</span> <span m='2806180'>This
  is</span> <span m='2806390'>the</span> <span m='2806530'>easiest</span> <span
  m='2806890'>way.</span> <span m='2807910'>Number</span> <span
  m='2808220'>one</span> <span m='2808660'>draws</span> <span
  m='2808860'>this</span> <span m='2809140'>line.</span> <span
  m='2809930'>Number</span> <span m='2810140'>two</span> <span
  m='2810360'>draws</span> <span m='2810570'>this</span> <span
  m='2810800'>line.</span> <span m='2811050'>Number</span> <span
  m='2811260'>three</span> <span m='2812970'>ends</span> <span
  m='2813320'>the</span> <span m='2813610'>line,</span> <span
  m='2814470'>the</span> <span m='2814660'>two</span> <span
  m='2814860'>lines.</span> <span m='2815360'>Number</span> <span
  m='2815550'>three</span> <span m='2815740'>says</span> <span
  m='2816110'>only</span> <span m='2816360'>if both</span> <span
  m='2816680'>of</span> <span m='2816760'>them</span> <span
  m='2816890'>are</span> <span m='2816970'>true,</span> <span m='2817220'>will
  I</span> <span m='2817620'>accept.</span> <span m='2818360'>Number</span>
  <span m='2818620'>four</span> <span m='2820530'>maps</span> <span
  m='2820910'>the</span> <span m='2821050'>two</span> <span
  m='2821240'>lines.</span> <span m='2822510'>And</span> <span
  m='2822610'>number</span> <span m='2822820'>five</span> <span
  m='2823470'>ors</span> <span m='2823930'>between</span> <span
  m='2824360'>three</span> <span m='2824590'>and</span> <span
  m='2825070'>four.</span> <span m='2828430'>Thank</span> <span
  m='2828680'>you.</span> <span m='2829740'>No,</span> <span
  m='2830070'>it's</span> <span m='2830260'>not</span> <span
  m='2830410'>that</span> <span m='2830570'>hard.</span> <span
  m='2831840'>I</span> <span m='2832010'>just</span> <span
  m='2832410'>completely</span> <span m='2832910'>blanked,</span> <span
  m='2833680'>because</span> <span m='2833950'>there's</span> <span
  m='2834110'>another</span> <span m='2834450'>way</span> <span
  m='2834620'>that</span> <span m='2834760'>a</span> <span
  m='2834820'>lot</span> <span m='2835010'>of</span> <span
  m='2835070'>people</span> <span m='2835320'>like</span> <span
  m='2835490'>to</span> <span m='2835590'>do</span> <span m='2835740'>it.</span>
  <span m='2835860'>It involves</span> <span m='2836260'>drawing</span> <span
  m='2836550'>in</span> <span m='2836610'>a</span> <span m='2836680'>lot</span>
  <span m='2836930'>of</span> <span m='2837010'>lines,</span> <span
  m='2837300'>and then making</span> <span m='2837640'>the</span> <span
  m='2837720'>clef</span> <span m='2838220'>b</span> <span m='2838450'>2.</span>
  <span m='2838570'>But I</span> <span m='2838640'>can't</span> <span
  m='2838840'>remember</span> <span m='2839200'>it at</span> <span
  m='2839280'>the</span> <span m='2839360'>moment.</span> <span m='2840280'>Or 
  there</span> <span m='2840380'>any</span> <span m='2840610'>other</span> <span
  m='2840800'>questions?</span> <span m='2841610'>Because</span> <span
  m='2842110'>I</span> <span m='2844780'>think</span> <span
  m='2845200'>if</span> <span m='2845450'>you</span> <span
  m='2845680'>have</span> <span m='2845800'>a</span> <span
  m='2845860'>question</span> <span m='2846280'>now,</span> <span
  m='2846990'>like</span> <span m='2847180'>four</span> <span
  m='2847510'>other</span> <span m='2847700'>people</span> <span
  m='2848030'>have</span> <span m='2848310'>it</span> <span m='2848530'>and just
  aren't</span> <span m='2848840'>raising</span> <span m='2849070'>their</span>
  <span m='2849200'>hand.</span> <span m='2849630'>So</span> <span
  m='2849760'>ask any</span> <span m='2850200'>questions</span> <span
  m='2850570'>about</span> <span m='2850840'>this drawing</span> <span
  m='2851140'>thing.</span> <span m='2851470'>Question?</span> </p><p><span
  m='2851850'>STUDENT: Why do we do this?</span> </p><p><span
  m='2853590'>PROFESSOR: Why</span> <span m='2853860'>do</span> <span
  m='2854140'>we do</span> <span m='2854430'>this drawing</span> <span
  m='2854890'>thing?</span> <span m='2855360'>That's</span> <span
  m='2855530'>a</span> <span m='2855930'>very</span> <span
  m='2856260'>good</span> <span m='2856530'>question.</span> <span
  m='2857680'>The</span> <span m='2857780'>answer</span> <span
  m='2858300'>is</span> <span m='2858970'>so</span> <span
  m='2859280'>that</span> <span m='2859450'>you</span> <span
  m='2859570'>can</span> <span m='2859700'>see</span> <span
  m='2860010'>what</span> <span m='2860320'>kinds</span> <span
  m='2860530'>of</span> <span m='2860640'>nets</span> <span
  m='2860990'>you</span> <span m='2861110'>might</span> <span
  m='2861410'>need</span> <span m='2861640'>to</span> <span
  m='2861760'>use</span> <span m='2862200'>in</span> <span
  m='2862390'>these</span> <span m='2862640'>simple</span> <span
  m='2863180'>problems,</span> <span m='2863680'>to</span> <span
  m='2864470'>answer these</span> <span m='2864930'>simple</span> <span
  m='2865220'>problems.</span> <span m='2865590'>So</span> <span
  m='2866340'>that</span> <span m='2867030'>if</span> <span
  m='2870050'>Athena</span> <span m='2870390'>forbid</span> <span
  m='2870780'>that</span> <span m='2870880'>you</span> <span
  m='2871320'>have</span> <span m='2871590'>to</span> <span
  m='2872180'>use</span> <span m='2872640'>a</span> <span m='2872840'>neural
  net</span> <span m='2873110'>in</span> <span m='2873530'>a</span> <span
  m='2874050'>job</span> <span m='2874340'>somewhere</span> <span
  m='2874800'>to</span> <span m='2874930'>do</span> <span
  m='2875070'>some</span> <span m='2875240'>actual</span> <span
  m='2875640'>learning,</span> <span m='2876640'>and</span> <span
  m='2877090'>you</span> <span m='2877180'>see</span> <span
  m='2877640'>some</span> <span m='2878490'>sort</span> <span
  m='2878700'>of</span> <span m='2878800'>quality</span> <span
  m='2879200'>about</span> <span m='2879410'>the</span> <span
  m='2879490'>problem,</span> <span m='2880260'>you know</span> <span
  m='2880510'>not</span> <span m='2881260'>to</span> <span m='2881320'>make
  a</span> <span m='2881490'>net</span> <span m='2881570'>that's</span> <span
  m='2882030'>too</span> <span m='2882220'>simple,</span> <span
  m='2882910'>for</span> <span m='2883050'>instance.</span> <span
  m='2883720'>And</span> <span m='2883970'>you</span> <span
  m='2884050'>wouldn't</span> <span m='2884280'>want</span> <span m='2884470'>a
  net</span> <span m='2884550'>that</span> <span m='2884720'>is</span> <span
  m='2884840'>more</span> <span m='2885030'>complex</span> <span
  m='2885510'>than</span> <span m='2885640'>it</span> <span
  m='2885700'>has</span> <span m='2885910'>to</span> <span
  m='2885990'>be.</span> <span m='2886660'>So</span> <span
  m='2887010'>you</span> <span m='2887140'>can</span> <span
  m='2887320'>sort</span> <span m='2887550'>of</span> <span
  m='2887680'>see</span> <span m='2888860'>what</span> <span m='2889180'>the
  net's</span> <span m='2889820'>do</span> <span m='2890140'>at</span> <span
  m='2890240'>each</span> <span m='2890490'>level,</span> <span
  m='2890840'>and</span> <span m='2891380'>more</span> <span
  m='2891740'>visibly</span> <span m='2892430'>understand.</span> <span
  m='2893140'>I</span> <span m='2893180'>think</span> <span m='2893410'>a</span>
  <span m='2893470'>lot</span> <span m='2893680'>of</span> <span
  m='2893780'>people</span> <span m='2894030'>who</span> <span
  m='2894200'>drew</span> <span m='2894450'>problems</span> <span
  m='2894800'>like</span> <span m='2895030'>this</span> <span
  m='2895800'>just</span> <span m='2895970'>want</span> <span
  m='2896240'>to</span> <span m='2896300'>make</span> <span
  m='2896490'>sure</span> <span m='2896680'>people</span> <span
  m='2896970'>know,</span> <span m='2897660'>oh yeah, it's</span> <span
  m='2897890'>not</span> <span m='2898050'>just</span> <span
  m='2898200'>these</span> <span m='2898390'>numbers</span> <span
  m='2898800'>that</span> <span m='2898910'>we're</span> <span
  m='2899030'>mindlessly</span> <span m='2899530'>backpropagating</span> <span
  m='2900550'>from</span> <span m='2900740'>the</span> <span
  m='2900840'>other</span> <span m='2901030'>part</span> <span
  m='2901200'>of</span> <span m='2901240'>the</span> <span
  m='2901340'>problem</span> <span m='2901760'>to</span> <span
  m='2901860'>make</span> <span m='2902050'>them</span> <span
  m='2902160'>higher</span> <span m='2902490'>or</span> <span
  m='2902570'>lower.</span> </p><p><span m='2903720'>This</span> <span
  m='2904070'>is</span> <span m='2904180'>what</span> <span
  m='2904550'>we're</span> <span m='2904660'>doing</span> <span
  m='2905110'>at</span> <span m='2905380'>each</span> <span
  m='2905430'>level.</span> <span m='2905760'>This</span> <span
  m='2905930'>is</span> <span m='2906880'>the</span> <span
  m='2907050'>space</span> <span m='2907840'>that</span> <span
  m='2908030'>we're</span> <span m='2908140'>looking</span> <span
  m='2908490'>at.</span> <span m='2909280'>Each</span> <span
  m='2909550'>node</span> <span m='2910050'>is</span> <span
  m='2910240'>performing</span> <span m='2910660'>logic</span> <span
  m='2911260'>on</span> <span m='2911530'>the</span> <span
  m='2911610'>steps</span> <span m='2911930'>before.</span> <span
  m='2912780'>So</span> <span m='2913030'>that</span> <span
  m='2913220'>if</span> <span m='2913320'>you</span> <span
  m='2913450'>actually</span> <span m='2913740'>have</span> <span
  m='2913990'>to</span> <span m='2914070'>use</span> <span m='2914280'>a</span>
  <span m='2914430'>neural</span> <span m='2914660'>net</span> <span
  m='2914910'>later</span> <span m='2915160'>on,</span> <span
  m='2916430'>down</span> <span m='2916680'>the</span> <span
  m='2916780'>road,</span> <span m='2918320'>then</span> <span
  m='2918700'>you'll</span> <span m='2918950'>be</span> <span
  m='2919090'>able</span> <span m='2919430'>to</span> <span
  m='2921450'>figure</span> <span m='2921700'>out</span> <span
  m='2921950'>what</span> <span m='2922140'>your</span> <span m='2922430'>net's
  going to need</span> <span m='2922660'>to</span> <span m='2922780'>look</span>
  <span m='2922990'>like.</span> <span m='2923200'>You'll</span> <span
  m='2923390'>be</span> <span m='2923490'>able</span> <span
  m='2923590'>to</span> <span m='2923640'>figure</span> <span
  m='2923840'>out</span> <span m='2924280'>what</span> <span
  m='2924510'>it's</span> <span m='2924780'>doing.</span> <span
  m='2925530'>At</span> <span m='2925660'>least</span> <span
  m='2926010'>as</span> <span m='2926360'>well as</span> <span
  m='2926820'>you</span> <span m='2926930'>can</span> <span
  m='2927200'>figure</span> <span m='2927430'>out</span> <span
  m='2927550'>what</span> <span m='2927700'>it's</span> <span
  m='2927880'>doing,</span> <span m='2928110'>for</span> <span
  m='2928260'>a</span> <span m='2928390'>neural net,</span> <span
  m='2928590'>since</span> <span m='2929200'>it</span> <span
  m='2929360'>often</span> <span m='2930110'>will</span> <span
  m='2930260'>start</span> <span m='2930660'>getting</span> <span
  m='2930840'>up</span> <span m='2930950'>these</span> <span
  m='2931160'>really</span> <span m='2931490'>crazy</span> <span
  m='2931930'>numbers,</span> <span m='2932380'>will</span> <span
  m='2932470'>have</span> <span m='2932640'>all</span> <span
  m='2932880'>sorts</span> <span m='2933180'>of</span> <span
  m='2933300'>nodes</span> <span m='2933700'>in</span> <span
  m='2933840'>it,</span> <span m='2934070'>and</span> <span
  m='2934680'>like</span> <span m='2934860'>a</span> <span
  m='2934890'>real</span> <span m='2935280'>neural net</span> <span
  m='2935590'>that's</span> <span m='2935950'>being</span> <span
  m='2936160'>used</span> <span m='2936490'>nowadays,</span> <span
  m='2937180'>there'll</span> <span m='2937300'>be</span> <span m='2937640'>tons
  of</span> <span m='2937740'>nodes,</span> <span m='2938180'>and</span> <span
  m='2938410'>you'll</span> <span m='2938660'>just see</span> <span
  m='2938800'>the</span> <span m='2938910'>numbers</span> <span
  m='2939320'>fluctuate</span> <span m='2939740'>wildly,</span> <span
  m='2940090'>and</span> <span m='2940180'>then</span> <span
  m='2940320'>suddenly</span> <span m='2940680'>it's</span> <span
  m='2940860'>going</span> <span m='2940990'>to</span> <span
  m='2941050'>start</span> <span m='2941380'>working</span> <span
  m='2941970'>or</span> <span m='2942120'>not.</span> <span
  m='2944460'>That's</span> <span m='2944590'>a</span> <span
  m='2944610'>good</span> <span m='2944820'>question.</span> <span
  m='2945360'>Any</span> <span m='2945470'>other</span> <span
  m='2945660'>questions?</span> <span m='2946120'>We</span> <span
  m='2946260'>still</span> <span m='2946470'>have</span> <span
  m='2946590'>a</span> <span m='2946660'>few</span> <span
  m='2946910'>minutes.</span> <span m='2948220'>Not</span> <span
  m='2948390'>many,</span> <span m='2948640'>but</span> <span
  m='2948800'>a</span> <span m='2948950'>few.</span> <span m='2949340'>Any
  other</span> <span m='2949655'>questions about</span> <span m='2949970'>any
  of</span> <span m='2950450'>this</span> <span m='2950760'>stuff?</span> <span
  m='2951572'>Sorry.</span> </p><p><span m='2952064'>STUDENT: Talk</span> <span
  m='2952204'>about</span> <span m='2952274'>what</span> <span
  m='2952345'>you</span> <span m='2952415'>just</span> <span
  m='2952485'>asked.</span> <span m='2952556'>Just because</span> <span
  m='2953048'>we draw it, does the</span> <span m='2953540'>machine</span> <span
  m='2954032'>need</span> <span m='2954524'>to learn--</span> </p><p><span
  m='2960930'>PROFESSOR: You're</span> <span m='2961200'>confused</span> <span
  m='2961780'>why</span> <span m='2962030'>the</span> <span
  m='2962260'>machine</span> <span m='2962720'>is run</span> <span
  m='2962890'>what,</span> <span m='2963220'>by</span> <span
  m='2963360'>the</span> <span m='2963640'>pictures</span> <span
  m='2964030'>on</span> <span m='2964160'>the</span> <span
  m='2964300'>right?</span> <span m='2966140'>Oh</span> <span
  m='2966490'>OK.</span> <span m='2967340'>Machine</span> <span
  m='2967660'>does</span> <span m='2967780'>not</span> <span
  m='2968160'>have</span> <span m='2968200'>to</span> <span
  m='2968300'>learn</span> <span m='2968530'>by</span> <span
  m='2968700'>drawing</span> <span m='2968970'>pictures</span> <span
  m='2969280'>and</span> <span m='2969390'>calling</span> <span
  m='2969720'>them</span> <span m='2969890'>in.</span> <span
  m='2970740'>Let</span> <span m='2970910'>me</span> <span
  m='2970990'>give</span> <span m='2971120'>you</span> <span
  m='2971240'>some</span> <span m='2971410'>real</span> <span
  m='2971550'>applications.</span> <span m='2972300'>My</span> <span
  m='2972530'>friend</span> <span m='2973320'>at</span> <span
  m='2973640'>the</span> <span m='2973910'>University</span> <span
  m='2974430'>of</span> <span m='2974510'>Maryland</span> <span
  m='2975110'>recently</span> <span m='2975820'>actually</span> <span
  m='2976430'>used</span> <span m='2976800'>neural</span> <span
  m='2977050'>nets</span> <span m='2978300'>because,</span> <span
  m='2978820'>yeah,</span> <span m='2979320'>he</span> <span
  m='2979550'>actually</span> <span m='2979930'>did,</span> <span
  m='2980360'>because</span> <span m='2981110'>of</span> <span
  m='2981160'>the</span> <span m='2981220'>fact</span> <span
  m='2981410'>that</span> <span m='2981510'>he</span> <span
  m='2981640'>was</span> <span m='2981800'>doing</span> <span
  m='2982110'>an</span> <span m='2983410'>game</span> <span
  m='2983700'>plan</span> <span m='2983910'>competition,</span> <span
  m='2984700'>where</span> <span m='2985410'>the</span> <span
  m='2985510'>game</span> <span m='2985910'>was</span> <span
  m='2986160'>not</span> <span m='2986590'>known</span> <span
  m='2987450'>when</span> <span m='2987700'>you were</span> <span
  m='2987890'>designing</span> <span m='2988300'>your</span> <span
  m='2988430'>AI.</span> <span m='2988795'>It had</span> <span
  m='2989160'>to</span> <span m='2989220'>be</span> <span
  m='2989300'>able</span> <span m='2989530'>to--</span> <span
  m='2989740'>there</span> <span m='2990050'>was</span> <span
  m='2990140'>some</span> <span m='2990800'>very</span> <span
  m='2991050'>elegant,</span> <span m='2991490'>general</span> <span
  m='2992030'>game</span> <span m='2992490'>solver</span> <span
  m='2993070'>thing</span> <span m='2993410'>that</span> <span
  m='2993550'>you</span> <span m='2993680'>had</span> <span
  m='2993890'>be</span> <span m='2993950'>able</span> <span
  m='2994070'>to</span> <span m='2994220'>hook</span> <span
  m='2994510'>up</span> <span m='2994660'>into,</span> <span
  m='2994950'>and</span> <span m='2995030'>then</span> <span
  m='2995120'>they</span> <span m='2995240'>made</span> <span
  m='2995470'>up</span> <span m='2995610'>the</span> <span
  m='2995740'>rules,</span> <span m='2996760'>and</span> <span
  m='2997530'>you</span> <span m='2997680'>had</span> <span m='2997780'>a</span>
  <span m='2997820'>little</span> <span m='2998050'>bit</span> <span
  m='2998140'>of</span> <span m='2998240'>time,</span> <span
  m='2998590'>and</span> <span m='2998660'>then</span> <span
  m='2998780'>it</span> <span m='2998880'>started.</span> <span
  m='2999570'>Some</span> <span m='2999860'>of</span> <span
  m='3000010'>the</span> <span m='3000200'>AI's,</span> <span
  m='3001030'>what</span> <span m='3001180'>they</span> <span
  m='3001260'>did</span> <span m='3001510'>was,</span> <span
  m='3002410'>they</span> <span m='3002660'>trained,</span> <span
  m='3003320'>once</span> <span m='3003610'>they</span> <span
  m='3003720'>found</span> <span m='3003970'>out</span> <span
  m='3004030'>what</span> <span m='3004180'>the</span> <span
  m='3004280'>rules</span> <span m='3004570'>were</span> <span
  m='3004860'>on</span> <span m='3005050'>their</span> <span
  m='3005280'>own,</span> <span m='3005780'>with</span> <span
  m='3006010'>the</span> <span m='3006110'>rules,</span> <span
  m='3006570'>in</span> <span m='3006720'>his</span> <span
  m='3006930'>case</span> <span m='3007090'>he</span> <span
  m='3007160'>had</span> <span m='3007300'>a</span> <span m='3007360'>neural
  net,</span> <span m='3008030'>because</span> <span m='3008380'>it</span> <span
  m='3008450'>was</span> <span m='3008570'>so</span> <span
  m='3008780'>generic,</span> <span m='3009720'>you</span> <span
  m='3009860'>just</span> <span m='3010010'>have</span> <span
  m='3010110'>a</span> <span m='3010160'>web</span> <span m='3010470'>of</span>
  <span m='3010680'>random</span> <span m='3011050'>gook.</span> <span
  m='3011660'>He thought</span> <span m='3011990'>it</span> <span
  m='3012490'>could</span> <span m='3012640'>learn</span> <span
  m='3012890'>anything,</span> <span m='3013970'>and</span> <span
  m='3014240'>then--</span> <span m='3014950'>he</span> <span
  m='3015070'>never</span> <span m='3015280'>did</span> <span
  m='3015510'>tell</span> <span m='3015640'>me</span> <span
  m='3015720'>how</span> <span m='3015860'>it</span> <span
  m='3015910'>went,</span> <span m='3016680'>probably</span> <span
  m='3016910'>didn't</span> <span m='3017110'>go</span> <span
  m='3017260'>well.</span> <span m='3018090'>But</span> <span
  m='3018340'>maybe</span> <span m='3018600'>it</span> <span
  m='3018860'>did.</span> <span m='3020700'>It</span> <span
  m='3021110'>basically</span> <span m='3021640'>tried</span> <span
  m='3022950'>to</span> <span m='3023220'>learn</span> <span m='3024220'>some
  things</span> <span m='3024720'>about</span> <span m='3024890'>the</span>
  <span m='3024990'>rules.</span> <span m='3025340'>Some</span> <span
  m='3025530'>of</span> <span m='3025610'>the</span> <span
  m='3025720'>other</span> <span m='3025950'>people</span> <span
  m='3026260'>who</span> <span m='3026390'>are</span> <span
  m='3026430'>more</span> <span m='3026660'>principled</span> <span
  m='3027140'>game</span> <span m='3027380'>players</span> <span
  m='3027780'>actually</span> <span m='3028530'>tried</span> <span
  m='3028800'>to</span> <span m='3028860'>find</span> <span
  m='3029280'>out</span> <span m='3029930'>fundamental</span> <span
  m='3030760'>properties</span> <span m='3031105'>of</span> <span
  m='3031740'>the</span> <span m='3031840'>space</span> <span
  m='3032380'>of</span> <span m='3032530'>the</span> <span
  m='3032640'>rules</span> <span m='3032950'>by</span> <span
  m='3033070'>testing</span> <span m='3033510'>a</span> <span
  m='3033590'>few</span> <span m='3033840'>different</span> <span
  m='3034240'>things,</span> <span m='3034820'>so</span> <span
  m='3035070'>they</span> <span m='3035200'>could</span> <span
  m='3035450'>view</span> <span m='3035905'>more</span> <span
  m='3036360'>knowledge</span> <span m='3036640'>is</span> <span
  m='3036780'>less</span> <span m='3037010'>search</span> <span
  m='3037470'>so</span> <span m='3037660'>they</span> <span
  m='3037840'>could</span> <span m='3037970'>do</span> <span
  m='3038090'>less</span> <span m='3038360'>search</span> <span
  m='3039110'>when</span> <span m='3039490'>the</span> <span
  m='3039860'>actual</span> <span m='3040200'>game playing</span> <span
  m='3040660'>came</span> <span m='3040930'>on.</span> <span
  m='3041180'>And</span> <span m='3041360'>then</span> <span
  m='3041570'>when</span> <span m='3041660'>the</span> <span
  m='3041720'>actual</span> <span m='3041990'>game</span> <span
  m='3042200'>playing</span> <span m='3042490'>came</span> <span
  m='3042700'>on,</span> <span m='3043390'>pretty</span> <span
  m='3043590'>much</span> <span m='3043800'>everyone</span> <span
  m='3045220'>did</span> <span m='3045530'>some</span> <span
  m='3045800'>kind</span> <span m='3046680'>of</span> <span
  m='3047590'>game</span> <span m='3047820'>tree</span> <span
  m='3048070'>based</span> <span m='3048360'>stuff.</span> </p><p><span
  m='3048680'>He's</span> <span m='3049470'>telling</span> <span
  m='3049840'>me</span> <span m='3050220'>that</span> <span m='3050360'>a</span>
  <span m='3050430'>lot</span> <span m='3050720'>of</span> <span
  m='3050860'>Monte</span> <span m='3051200'>Carlo</span> <span
  m='3051640'>based</span> <span m='3052860'>game</span> <span
  m='3053160'>tree</span> <span m='3053360'>stuff</span> <span
  m='3053780'>that</span> <span m='3053930'>is</span> <span
  m='3054200'>this</span> <span m='3054430'>very</span> <span
  m='3054640'>non</span> <span m='3054800'>deterministic</span> <span
  m='3055340'>as</span> <span m='3055430'>what</span> <span
  m='3055610'>they're</span> <span m='3055740'>doing</span> <span
  m='3055990'>nowadays,</span> <span m='3056550'>rather</span> <span
  m='3056800'>than</span> <span m='3057530'>what</span> <span
  m='3057700'>determines</span> <span m='3058050'>the</span> <span
  m='3058160'>alpha</span> <span m='3058390'>beta,</span> <span
  m='3058780'>although</span> <span m='3059030'>he</span> <span
  m='3059140'>said</span> <span m='3059590'>it</span> <span
  m='3059700'>converges</span> <span m='3060280'>to</span> <span
  m='3060380'>alpha</span> <span m='3060660'>beta,</span> <span
  m='3061010'>if</span> <span m='3061120'>you've</span> <span
  m='3061360'>given</span> <span m='3061570'>enough</span> <span
  m='3061820'>time.</span> <span m='3062380'>That's</span> <span
  m='3062590'>what</span> <span m='3062740'>he</span> <span
  m='3062890'>told</span> <span m='3063140'>me,</span> <span
  m='3063880'>But</span> <span m='3064450'>that</span> <span
  m='3064660'>someone</span> <span m='3064950'>I</span> <span
  m='3065050'>know</span> <span m='3065360'>who</span> <span
  m='3065640'>is</span> <span m='3065860'>using</span> <span
  m='3066140'>neural</span> <span m='3066320'>nets.</span> <span
  m='3066570'>I've</span> <span m='3066700'>also</span> <span
  m='3067050'>in</span> <span m='3067180'>a</span> <span
  m='3067240'>cognitive</span> <span m='3067570'>science</span> <span
  m='3067860'>class</span> <span m='3068090'>I</span> <span
  m='3068180'>took,</span> <span m='3068800'>saw</span> <span
  m='3068990'>neural</span> <span m='3069110'>nets</span> <span
  m='3069300'>that</span> <span m='3069610'>tried</span> <span
  m='3069950'>to</span> <span m='3070260'>attach</span> <span
  m='3070680'>like</span> <span m='3070890'>qualities</span> <span
  m='3071720'>to</span> <span m='3071840'>objects,</span> <span
  m='3072470'>by</span> <span m='3072610'>having</span> <span m='3072860'>just
  this</span> <span m='3073160'>huge,</span> <span m='3074170'>huge</span> <span
  m='3074760'>number</span> <span m='3075030'>of</span> <span
  m='3075110'>nodes</span> <span m='3075620'>in</span> <span
  m='3075800'>levels</span> <span m='3076120'>in</span> <span
  m='3076220'>between,</span> <span m='3076740'>and</span> <span
  m='3076860'>then</span> <span m='3077010'>eventually</span> <span
  m='3077450'>it</span> <span m='3077530'>was</span> <span
  m='3077640'>like,</span> <span m='3078160'>a</span> <span
  m='3078280'>duck</span> <span m='3078570'>flies,</span> <span
  m='3079010'>and</span> <span m='3079220'>you're</span> <span
  m='3079300'>like,</span> <span m='3079590'>how's</span> <span m='3079970'>it
  doing</span> <span m='3080300'>this</span> <span m='3080430'>again?</span>
  <span m='3080780'>I'm</span> <span m='3080950'>not</span> <span
  m='3081160'>sure,</span> <span m='3081550'>but</span> <span
  m='3081720'>it</span> <span m='3081800'>is.</span> <span m='3082640'>So</span>
  <span m='3083220'>the</span> <span m='3083320'>basic</span> <span
  m='3083680'>idea</span> <span m='3084070'>is</span> <span
  m='3084280'>that</span> <span m='3084380'>when--</span> <span
  m='3085860'>one</span> <span m='3086010'>of</span> <span
  m='3086050'>the</span> <span m='3086110'>main</span> <span
  m='3086320'>reasons</span> <span m='3086620'>that</span> <span
  m='3086760'>neural</span> <span m='3086930'>nets were</span> <span
  m='3087050'>used</span> <span m='3087335'>so</span> <span
  m='3087620'>much</span> <span m='3088140'>back</span> <span
  m='3088410'>in</span> <span m='3088490'>the</span> <span m='3088590'>day
  is</span> <span m='3089070'>that</span> <span m='3089160'>people</span> <span
  m='3089970'>on</span> <span m='3090200'>many</span> <span
  m='3090490'>different</span> <span m='3090890'>sides</span> <span
  m='3091340'>of</span> <span m='3091530'>this</span> <span
  m='3091720'>problem,</span> <span m='3092110'>cognitive</span> <span
  m='3092430'>science,</span> <span m='3092930'>AI,</span> <span
  m='3093450'>whatever,</span> <span m='3093760'>were</span> <span
  m='3094380'>all</span> <span m='3094640'>saying,</span> <span
  m='3095070'>wait</span> <span m='3095345'>a minute,</span> <span
  m='3095620'>there's</span> <span m='3095890'>networks</span> <span
  m='3096320'>of</span> <span m='3096450'>neurons,</span> <span
  m='3096990'>and</span> <span m='3097120'>they</span> <span
  m='3097240'>can</span> <span m='3097530'>do</span> <span
  m='3097720'>stuff,</span> <span m='3098610'>and</span> <span
  m='3098780'>we're</span> <span m='3098930'>seeing</span> <span m='3099260'>it
  in</span> <span m='3099360'>different</span> <span m='3099740'>places.</span>
  <span m='3100360'>And</span> <span m='3100490'>when you've</span> <span
  m='3100700'>seen</span> <span m='3101050'>it in so</span> <span
  m='3101260'>many</span> <span m='3101410'>different</span> <span
  m='3101640'>places</span> <span m='3101910'>at</span> <span
  m='3102030'>once,</span> <span m='3102860'>must</span> <span
  m='3103180'>be</span> <span m='3103410'>a</span> <span
  m='3103550'>genius</span> <span m='3104010'>idea</span> <span
  m='3104300'>that's</span> <span m='3104390'>going</span> <span
  m='3104490'>to</span> <span m='3104550'>revolutionize</span> <span
  m='3105200'>everything.</span> </p><p><span m='3106140'>And</span> <span
  m='3106300'>so</span> <span m='3106470'>then</span> <span
  m='3106620'>everyone</span> <span m='3107160'>started</span> <span
  m='3107450'>using</span> <span m='3107780'>them</span> <span
  m='3108660'>to</span> <span m='3109160'>try</span> <span m='3109390'>to</span>
  <span m='3109470'>connect</span> <span m='3109840'>all</span> <span
  m='3110010'>these</span> <span m='3110180'>things</span> <span
  m='3110320'>together,</span> <span m='3110530'>which</span> <span
  m='3110660'>I</span> <span m='3110720'>think</span> <span
  m='3110860'>is</span> <span m='3110970'>a</span> <span
  m='3111030'>noble</span> <span m='3111380'>endeavor,</span> <span
  m='3111760'>but</span> <span m='3111930'>unfortunately</span> <span
  m='3113090'>people</span> <span m='3113340'>just</span> <span
  m='3113530'>stopped</span> <span m='3113820'>using</span> <span
  m='3114140'>it.</span> <span m='3114300'>It</span> <span
  m='3114410'>didn't</span> <span m='3114720'>work</span> <span
  m='3115300'>as</span> <span m='3115470'>they</span> <span
  m='3115660'>wanted.</span> <span m='3116180'>It</span> <span
  m='3116640'>turned</span> <span m='3116910'>out</span> <span
  m='3117110'>that</span> <span m='3117280'>figuring</span> <span
  m='3117610'>out</span> <span m='3117820'>our</span> <span
  m='3118010'>neurons</span> <span m='3118280'>worked</span> <span
  m='3118450'>in</span> <span m='3118570'>our</span> <span
  m='3118680'>head</span> <span m='3118950'>was</span> <span
  m='3119140'>not</span> <span m='3119760'>the</span> <span
  m='3121090'>way</span> <span m='3121280'>to</span> <span
  m='3121380'>solve</span> <span m='3121610'>all</span> <span
  m='3121890'>AI</span> <span m='3122140'>hard</span> <span
  m='3122380'>problems</span> <span m='3122820'>at</span> <span
  m='3122910'>once.</span> <span m='3123860'>And</span> <span
  m='3124390'>they</span> <span m='3124530'>fall</span> <span
  m='3124800'>into</span> <span m='3125070'>disfavor,</span> <span
  m='3125465'>although</span> <span m='3125860'>are</span> <span
  m='3126070'>still</span> <span m='3126360'>used</span> <span
  m='3126680'>for</span> <span m='3126800'>some</span> <span
  m='3127050'>reasons,</span> <span m='3127470'>like</span> <span
  m='3127780'>the</span> <span m='3128380'>sum</span> <span
  m='3128590'>is</span> <span m='3128800'>like</span> <span
  m='3128990'>that.</span> <span m='3129510'>So</span> <span
  m='3129700'>we</span> <span m='3129800'>wouldn't</span> <span
  m='3130110'>use</span> <span m='3130280'>it</span> <span
  m='3130410'>just</span> <span m='3130550'>to</span> <span
  m='3130640'>draw</span> <span m='3130860'>these</span> <span
  m='3131090'>pictures.</span> <span m='3131610'>The</span> <span
  m='3131720'>reason</span> <span m='3131950'>why</span> <span
  m='3132090'>we</span> <span m='3132200'>have</span> <span
  m='3132390'>these</span> <span m='3132640'>pictures</span> <span
  m='3133660'>is</span> <span m='3133820'>because</span> <span
  m='3134050'>we</span> <span m='3134240'>give</span> <span
  m='3134410'>you</span> <span m='3134510'>simple</span> <span m='3134910'>nets
  that</span> <span m='3135360'>you</span> <span m='3135490'>can</span> <span
  m='3135590'>work</span> <span m='3135760'>it</span> <span
  m='3135860'>out</span> <span m='3135950'>by</span> <span
  m='3135970'>hand</span> <span m='3136220'>on</span> <span
  m='3136340'>the</span> <span m='3136410'>quiz.</span> <span
  m='3137720'>Any</span> <span m='3137990'>net</span> <span m='3138280'>that
  is</span> <span m='3138570'>really</span> <span m='3138820'>used</span> <span
  m='3139300'>nowadays</span> <span m='3140340'>would</span> <span
  m='3140590'>make</span> <span m='3142610'>your</span> <span
  m='3142780'>head</span> <span m='3142970'>explode,</span> <span
  m='3143490'>if</span> <span m='3143590'>we</span> <span
  m='3143700'>tried</span> <span m='3143950'>to</span> <span
  m='3144030'>make</span> <span m='3144240'>you</span> <span
  m='3144360'>do</span> <span m='3144490'>something</span> <span
  m='3144840'>with</span> <span m='3145010'>it</span> <span
  m='3145110'>on</span> <span m='3145240'>the</span> <span
  m='3145320'>quiz.</span> <span m='3146140'>It</span> <span
  m='3146260'>would</span> <span m='3146390'>just</span> <span
  m='3146610'>be</span> <span m='3146740'>horrible.</span> </p><p><span
  m='3147660'>So</span> <span m='3147890'>I</span> <span
  m='3148050'>think</span> <span m='3148200'>that's</span> <span
  m='3148340'>a</span> <span m='3148390'>good</span> <span
  m='3148550'>question.</span> <span m='3149700'>If</span> <span
  m='3149910'>there's</span> <span m='3150110'>no</span> <span
  m='3150240'>other</span> <span m='3150390'>questions,</span> <span
  m='3150760'>or</span> <span m='3150840'>even</span> <span
  m='3150990'>if</span> <span m='3151090'>they</span> <span
  m='3151160'>are,</span> <span m='3151440'>because</span> <span
  m='3151610'>we</span> <span m='3151800'>have</span> <span
  m='3151990'>to</span> <span m='3152090'>head</span> <span
  m='3152240'>out,</span> <span m='3153410'>if</span> <span
  m='3153550'>there's</span> <span m='3153710'>any</span> <span
  m='3153860'>other</span> <span m='3154030'>questions,</span> <span
  m='3154390'>you</span> <span m='3154510'>can</span> <span
  m='3154660'>see</span> <span m='3154910'>me</span> <span m='3155210'>as</span>
  <span m='3155510'>I'm</span> <span m='3155810'>walking out.</span> </p>
uid: f8ea3e2b98f340fd56adf8d9e5ee9da7
type: courses
layout: video
---
