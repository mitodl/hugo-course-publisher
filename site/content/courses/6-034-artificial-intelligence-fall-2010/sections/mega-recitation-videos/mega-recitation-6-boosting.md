---
about_this_resource_text: >-
  <p><strong>Description:</strong> This mega-recitation covers the boosting
  problem from Quiz 4, Fall 2009. We determine which classifiers to use, then
  perform three rounds of boosting, adjusting the weights in each round. This
  gives us an expression for the final classifier.</p>
  <p><strong>Instructor:</strong> Mark Seifter</p>
embedded_media:
  - id: Video-YouTube-Stream
    media_location: ZZmzMJB-tow
    parent_uid: c711b49802b55f7046bebaaca1f2f882
    title: Video-YouTube-Stream
    type: Video
    uid: 07647f47395d6bdd6dc8368647193b89
  - id: Video-iTunesU-MP4
    media_location: >-
      https://itunes.apple.com/us/itunes-u/mega-recitation-6-boosting/id765641080?i=194482868
    parent_uid: c711b49802b55f7046bebaaca1f2f882
    title: Video-iTunes U-MP4
    type: Video
    uid: f0e60e3fbde54256244072cbbd706288
  - id: Video-InternetArchive-MP4
    media_location: 'http://www.archive.org/download/MIT6.034F10/MIT6_034F10_rec06_300k.mp4'
    parent_uid: c711b49802b55f7046bebaaca1f2f882
    title: Video-Internet Archive-MP4
    type: Video
    uid: 61bb2dc0b2602cbe3471127cb9f9aef8
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/ZZmzMJB-tow/default.jpg'
    parent_uid: c711b49802b55f7046bebaaca1f2f882
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 33548d8259cf4acd4e1ba85bee509937
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: ZZmzMJB-tow
    parent_uid: c711b49802b55f7046bebaaca1f2f882
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 07f8c4f02a345aeca5ab4de69b03e781
  - id: ZZmzMJB-tow.srt
    parent_uid: c711b49802b55f7046bebaaca1f2f882
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-034-artificial-intelligence-fall-2010/mega-recitation-videos/mega-recitation-6-boosting/ZZmzMJB-tow.srt
    title: 3play caption file
    type: null
    uid: 2599a50e6d2654efa81a4e2c9981b459
  - id: ZZmzMJB-tow.pdf
    parent_uid: c711b49802b55f7046bebaaca1f2f882
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-034-artificial-intelligence-fall-2010/mega-recitation-videos/mega-recitation-6-boosting/ZZmzMJB-tow.pdf
    title: 3play pdf file
    type: null
    uid: dc39866c70b0ea8114d0e5daa19ab4e6
  - id: Caption-3Play YouTube id-SRT
    parent_uid: c711b49802b55f7046bebaaca1f2f882
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 199ecadd1e25d92e52517b8c30a2af79
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: c711b49802b55f7046bebaaca1f2f882
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 3306e739b8a1580a8ed4a1a7762165bc
inline_embed_id: '11214643mega-recitation6:boosting25776667'
parent_uid: 6be7704ddfe26b4e12703167347dd5bb
related_resources_text: >-
  <p><a href="./resolveuid/47e0a5f385ea3126d928bdc239f1eecd"
  target="_blank">Quiz 4, Fall 2009 (PDF)</a></p>
short_url: mega-recitation-6-boosting
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-034-artificial-intelligence-fall-2010/mega-recitation-videos/mega-recitation-6-boosting
title: 'Mega-Recitation 6: Boosting'
transcript: >-
  <p><span m='50'>The</span> <span m='180'>following</span> <span
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
  m='10990'>donation</span> <span m='11680'>or</span> <span
  m='11940'>view</span> <span m='12380'>additional</span> <span
  m='12810'>materials</span> <span m='13340'>from</span> <span
  m='13490'>hundreds</span> <span m='13930'>of</span> <span m='14040'>MIT</span>
  <span m='14470'>courses,</span> <span m='15570'>visit</span> <span
  m='15790'>MIT</span> <span m='16219'>OpenCourseWare</span> <span
  m='17270'>at</span> <span m='17430'>ocw.mit.edu.</span> </p><p><span
  m='21738'>PROFESSOR: Good morning,</span> <span m='22495'>everyone.</span>
  <span m='25090'>Today,</span> <span m='25430'>we're</span> <span
  m='25560'>going</span> <span m='25680'>to</span> <span m='25770'>talk</span>
  <span m='25970'>about</span> <span m='26370'>boosting.</span> <span
  m='28820'>Boosting</span> <span m='29080'>is</span> <span
  m='29380'>pretty</span> <span m='29650'>awesome,</span> <span
  m='30410'>and</span> <span m='32509'>it's</span> <span m='33240'>not</span>
  <span m='33400'>as</span> <span m='33490'>hard</span> <span
  m='33900'>as</span> <span m='34030'>it</span> <span m='34110'>might</span>
  <span m='34330'>seem.</span> <span m='34630'>It's</span> <span
  m='34750'>actually</span> <span m='35090'>pretty</span> <span
  m='35380'>easy,</span> <span m='36870'>as</span> <span m='37020'>long</span>
  <span m='37360'>as</span> <span m='37470'>you</span> <span m='37580'>do</span>
  <span m='37750'>it</span> <span m='37870'>right.</span> </p><p><span
  m='39050'>So</span> <span m='39640'>let's</span> <span m='40030'>take</span>
  <span m='40190'>a</span> <span m='40250'>look</span> <span m='40490'>at</span>
  <span m='40770'>this</span> <span m='41070'>boosting</span> <span
  m='41400'>problem.</span> <span m='42610'>Just</span> <span m='42860'>like
  with</span> <span m='43100'>ID</span> <span m='43440'>trees,</span> <span
  m='44400'>you</span> <span m='44520'>may have</span> <span
  m='44680'>noticed</span> <span m='45100'>there's</span> <span
  m='45600'>the</span> <span m='45740'>ID</span> <span m='46090'>tree</span>
  <span m='46340'>problem</span> <span m='46700'>where</span> <span
  m='46790'>there's</span> <span m='47060'>a</span> <span
  m='47120'>graph,</span> <span m='47950'>and</span> <span m='48700'>all
  of</span> <span m='49020'>the</span> <span m='49160'>tests</span> <span
  m='49560'>are</span> <span m='49770'>x</span> <span m='50030'>and</span> <span
  m='50150'>y-axis</span> <span m='50730'>tests</span> <span m='51010'>on</span>
  <span m='51130'>that</span> <span m='51250'>graph.</span> <span
  m='52200'>And</span> <span m='52370'>then</span> <span
  m='52540'>there's</span> <span m='52840'>the</span> <span m='53030'>ID</span>
  <span m='53430'>tree</span> <span m='53680'>problem</span> <span
  m='54150'>where</span> <span m='54780'>there</span> <span m='54990'>are</span>
  <span m='55010'>a</span> <span m='55070'>lot</span> <span m='55340'>of</span>
  <span m='56270'>crazy</span> <span m='56690'>different</span> <span
  m='57120'>classifiers</span> <span m='57950'>about</span> <span
  m='58750'>characteristics</span> <span m='59510'>that are</span> <span
  m='59710'>discrete.</span> <span m='60480'>And</span> <span
  m='60730'>then</span> <span m='61290'>all</span> <span m='61590'>of</span>
  <span m='61730'>the</span> <span m='63640'>sort</span> <span
  m='63890'>of</span> <span m='64030'>ID</span> <span m='64430'>tree</span>
  <span m='65640'>stumps,</span> <span m='66920'>if</span> <span
  m='67080'>you</span> <span m='67210'>will,</span> <span m='67530'>are</span>
  <span m='67590'>built out</span> <span m='68000'>of those</span> <span
  m='68400'>discrete</span> <span m='68670'>qualities.</span> </p><p><span
  m='69730'>This</span> <span m='70230'>is</span> <span m='70710'>an</span>
  <span m='70890'>example</span> <span m='71230'>of a</span> <span
  m='71430'>boosting</span> <span m='71840'>problem</span> <span
  m='72300'>of</span> <span m='72460'>the</span> <span m='72900'>second</span>
  <span m='73340'>type</span> <span m='73910'>with</span> <span
  m='74120'>a</span> <span m='74160'>bunch</span> <span m='74440'>of</span>
  <span m='74560'>discrete</span> <span m='75000'>qualities,</span> <span
  m='75510'>like</span> <span m='76080'>evil,</span> <span m='76880'>emo,</span>
  <span m='77610'>transforms,</span> <span m='78620'>sparkly.</span> <span
  m='80040'>And</span> <span m='80670'>it</span> <span m='80800'>has</span>
  <span m='81020'>an</span> <span m='81210'>numerical</span> <span
  m='81740'>quality</span> <span m='82110'>number</span> <span
  m='82410'>of</span> <span m='82510'>romantic</span> <span
  m='82990'>interests.</span> <span m='84820'>So</span> <span
  m='85120'>it's</span> <span m='85250'>one</span> <span m='85510'>of</span>
  <span m='85600'>basically</span> <span m='86060'>the</span> <span
  m='86210'>two</span> <span m='86420'>kinds</span> <span m='86680'>of</span>
  <span m='86770'>boosting</span> <span m='86860'>problems</span> <span
  m='87040'>that</span> <span m='87260'>you</span> <span m='87420'>might</span>
  <span m='87700'>see.</span> </p><p><span m='87930'>And now,</span> <span
  m='88350'>there is</span> <span m='89290'>the</span> <span
  m='91170'>two-axis</span> <span m='91770'>Cartesian</span> <span
  m='92350'>problem.</span> <span m='92850'>A</span> <span m='92930'>good</span>
  <span m='93110'>example</span> <span m='93540'>of</span> <span
  m='93640'>that</span> <span m='93850'>is</span> <span m='94110'>the</span>
  <span m='94720'>hours</span> <span m='94990'>of</span> <span
  m='95090'>sleep</span> <span m='95400'>versus</span> <span
  m='95830'>coffee</span> <span m='97040'>problem,</span> <span
  m='98570'>which</span> <span m='100300'>I,</span> <span m='100470'>for</span>
  <span m='100670'>one,</span> <span m='100910'>am</span> <span
  m='101010'>planning</span> <span m='101290'>on</span> <span m='101500'>doing
  in</span> <span m='101830'>tutorial</span> <span m='102380'>on</span> <span
  m='102560'>Monday</span> <span m='103860'>so</span> <span
  m='104760'>that</span> <span m='104950'>you</span> <span
  m='105050'>guys</span> <span m='105330'>sort</span> <span m='105430'>of</span>
  <span m='106790'>get</span> <span m='106980'>a</span> <span
  m='107030'>sense</span> <span m='107880'>of both</span> <span
  m='108140'>types</span> <span m='108410'>of</span> <span
  m='108520'>problems.</span> </p><p><span m='109390'>This</span> <span
  m='109610'>one</span> <span m='109820'>looks</span> <span
  m='110080'>big.</span> <span m='110990'>I</span> <span m='111130'>think</span>
  <span m='111470'>it</span> <span m='111610'>looks--</span> <span
  m='111865'>I</span> <span m='112120'>mean,</span> <span m='112310'>it
  has</span> <span m='112880'>ten</span> <span m='113260'>different</span> <span
  m='113580'>vampires</span> <span m='114190'>or</span> <span
  m='114290'>non-vampires</span> <span m='115170'>to</span> <span
  m='115270'>classify.</span> <span m='116880'>It</span> <span
  m='117090'>has</span> <span m='117540'>a</span> <span m='117610'>whole</span>
  <span m='117840'>bunch</span> <span m='118120'>of</span> <span
  m='118230'>possible</span> <span m='118570'>classifiers.</span> <span
  m='119920'>But</span> <span m='121180'>if</span> <span m='121310'>you</span>
  <span m='121390'>do</span> <span m='121640'>it</span> <span
  m='121780'>right,</span> <span m='122640'>you</span> <span
  m='122680'>can</span> <span m='122870'>do</span> <span m='123040'>it</span>
  <span m='123210'>fast.</span> </p><p><span m='124340'>So</span> <span
  m='124580'>here's</span> <span m='124840'>the</span> <span
  m='124940'>prompt</span> <span m='125230'>for</span> <span
  m='125330'>the</span> <span m='125450'>problem.</span> <span
  m='127290'>Let's</span> <span m='127750'>see.</span> <span
  m='128550'>After</span> <span m='128850'>graduating</span> <span
  m='129340'>MIT,</span> <span m='129650'>you</span> <span m='129960'>get</span>
  <span m='130240'>a</span> <span m='130340'>job</span> <span
  m='130840'>working</span> <span m='131170'>for</span> <span
  m='131350'>Van</span> <span m='131600'>Helsing</span> <span
  m='131880'>and</span> <span m='132120'>Sommers,</span> <span
  m='132620'>a</span> <span m='132680'>famous</span> <span
  m='133050'>vampire-hunting</span> <span m='134100'>consulting</span> <span
  m='134690'>agency.</span> <span m='136160'>Gabriel</span> <span
  m='136590'>Van</span> <span m='136770'>Helsing,</span> <span
  m='136930'>one</span> <span m='137310'>of the</span> <span
  m='137460'>two</span> <span m='137620'>founders,</span> <span
  m='138080'>once</span> <span m='138310'>attended</span> <span
  m='138710'>several</span> <span m='138960'>6.034</span> <span
  m='139620'>lectures</span> <span m='140000'>as</span> <span
  m='140140'>a</span> <span m='140180'>guest,</span> <span m='140670'>and</span>
  <span m='140750'>he</span> <span m='140850'>remembers</span> <span
  m='141230'>Professor</span> <span m='141630'>Winston's</span> <span
  m='142010'>vampire</span> <span m='142520'>identification</span> <span
  m='143270'>tree</span> <span m='143510'>lecture.</span> <span
  m='144320'>He</span> <span m='144580'>assigns you</span> <span
  m='144840'>the</span> <span m='144950'>task</span> <span m='145240'>of</span>
  <span m='145370'>creating</span> <span m='145720'>a</span> <span
  m='145770'>superior</span> <span m='146350'>classifier</span> <span
  m='146890'>for</span> <span m='147030'>vampires</span> <span
  m='147700'>by</span> <span m='147860'>using</span> <span
  m='148200'>boosting</span> <span m='148750'>on</span> <span
  m='148910'>the</span> <span m='149000'>following</span> <span
  m='149400'>data.</span> </p><p><span m='150740'>So</span> <span
  m='152560'>we've</span> <span m='152750'>got</span> <span
  m='153390'>the</span> <span m='153550'>ID</span> <span
  m='154000'>number,</span> <span m='154550'>which</span> <span
  m='154650'>we</span> <span m='154770'>can</span> <span m='154910'>use</span>
  <span m='155160'>to</span> <span m='155270'>just</span> <span
  m='155470'>write</span> <span m='155740'>things</span> <span
  m='155990'>out</span> <span m='156310'>in</span> <span
  m='156420'>shorthand.</span> <span m='157170'>We've got</span> <span
  m='157280'>the</span> <span m='157390'>name</span> <span m='157830'>of</span>
  <span m='158230'>several</span> <span m='158590'>vampires</span> <span
  m='159300'>and</span> <span m='159440'>non-vampires.</span> <span
  m='160980'>Then</span> <span m='161480'>you</span> <span m='161670'>see</span>
  <span m='161930'>whether they're a</span> <span m='162350'>vampire</span>
  <span m='162880'>or</span> <span m='162960'>not.</span> <span
  m='163620'>That's</span> <span m='163860'>whether</span> <span
  m='164140'>their</span> <span m='164300'>classification</span> <span
  m='164960'>is</span> <span m='165240'>a</span> <span m='165320'>plus</span>
  <span m='165680'>or</span> <span m='165810'>minus</span> <span
  m='166590'>for</span> <span m='166830'>the</span> <span m='166930'>quality
  of</span> <span m='167270'>vampire.</span> </p><p><span
  m='168590'>After</span> <span m='168890'>that,</span> <span
  m='170540'>there's</span> <span m='172270'>a</span> <span
  m='172340'>bunch</span> <span m='173030'>of</span> <span
  m='173440'>possible</span> <span m='173940'>ways</span> <span
  m='174260'>to</span> <span m='174350'>classify</span> <span
  m='174840'>whether</span> <span m='175080'>they're a</span> <span
  m='175290'>vampire</span> <span m='175590'>or</span> <span
  m='175890'>not.</span> <span m='176170'>There's</span> <span
  m='176750'>whether</span> <span m='177030'>or</span> <span
  m='177060'>not</span> <span m='177280'>they're</span> <span
  m='177480'>evil,</span> <span m='178300'>whether</span> <span
  m='178530'>or</span> <span m='178570'>not</span> <span
  m='178800'>they're</span> <span m='178910'>emo,</span> <span
  m='180110'>whether</span> <span m='180370'>or</span> <span
  m='180410'>not</span> <span m='180600'>they</span> <span
  m='180710'>transform,</span> <span m='181740'>and</span> <span
  m='182050'>whether</span> <span m='182280'>or</span> <span
  m='182320'>not</span> <span m='182550'>they're</span> <span
  m='182730'>sparkly,</span> <span m='184200'>as</span> <span
  m='184360'>well</span> <span m='184540'>as</span> <span m='184650'>the</span>
  <span m='184750'>number</span> <span m='185020'>of</span> <span
  m='185110'>romantic</span> <span m='185600'>interests</span> <span
  m='185905'>that</span> <span m='186210'>they</span> <span
  m='186340'>have.</span> </p><p><span m='188260'>So</span> <span
  m='188630'>for</span> <span m='188810'>instance,</span> <span
  m='189400'>on</span> <span m='189590'>the</span> <span m='189660'>one</span>
  <span m='189870'>hand,</span> <span m='190080'>you</span> <span
  m='190160'>have</span> <span m='190310'>Dracula,</span> <span
  m='190990'>who's</span> <span m='191420'>evil,</span> <span
  m='192160'>but</span> <span m='192280'>he's</span> <span m='192450'>not</span>
  <span m='192700'>emo.</span> <span m='193160'>He</span> <span
  m='193310'>can</span> <span m='193440'>transform</span> <span
  m='193830'>into</span> <span m='194000'>a</span> <span m='194060'>bat</span>
  <span m='194520'>or</span> <span m='195674'>a</span> <span m='197450'>cloud
  of</span> <span m='197843'>mist.</span> <span m='199250'>He</span> <span
  m='199410'>does</span> <span m='199610'>not</span> <span
  m='199850'>sparkle,</span> <span m='200530'>and</span> <span
  m='200740'>he</span> <span m='200860'>has</span> <span m='201090'>five</span>
  <span m='201540'>romantic</span> <span m='201910'>interests--</span> <span
  m='202390'>those three</span> <span m='202780'>vampire</span> <span
  m='203290'>chicks</span> <span m='203550'>at</span> <span
  m='203630'>the</span> <span m='203690'>beginning,</span> <span
  m='204810'>Wilhelmina</span> <span m='205300'>Murray,</span> <span
  m='205860'>and</span> <span m='206400'>Lucy</span> <span
  m='207160'>Westenra.</span> </p><p><span m='208200'>So</span> <span
  m='209790'>on</span> <span m='209960'>the</span> <span m='210050'>other</span>
  <span m='210250'>hand,</span> <span m='210550'>you</span> <span
  m='210670'>have</span> <span m='213200'>Squall</span> <span
  m='213750'>Leonhart,</span> <span m='214300'>who's</span> <span
  m='214640'>the</span> <span m='214920'>protagonist</span> <span
  m='215370'>of</span> <span m='215510'><i>Final</i></span> <span
  m='215570'><i>Fantasy</i></span> <span m='215850'><i>VII</i>,</span> <span
  m='216190'>is</span> <span m='216520'>extremely</span> <span
  m='217070'>emo</span> <span m='217510'>and</span> <span
  m='217630'>doesn't</span> <span m='217910'>have</span> <span
  m='218030'>any</span> <span m='218220'>of</span> <span m='218290'>the</span>
  <span m='218370'>other</span> <span m='218550'>characteristics.</span> <span
  m='221350'>And</span> <span m='221570'>he's</span> <span m='221770'>not</span>
  <span m='221970'>a</span> <span m='222080'>vampire.</span> <span
  m='223790'>However,</span> <span m='224120'>he's</span> <span
  m='224320'>a</span> <span m='224360'>nice</span> <span
  m='224660'>counterexample</span> <span m='225280'>for</span> <span
  m='225630'>a</span> <span m='225710'>possible</span> <span
  m='226170'>rule</span> <span m='226540'>that</span> <span
  m='226720'>all</span> <span m='226960'>emo</span> <span
  m='227550'>people</span> <span m='227750'>are</span> <span
  m='227820'>vampires</span> <span m='228590'>because</span> <span
  m='229000'>he's</span> <span m='229170'>very,</span> <span
  m='229500'>very</span> <span m='229790'>emo, and</span> <span
  m='229960'>he's</span> <span m='230180'>not</span> <span m='230440'>a
  vampire.</span> </p><p><span m='231390'>So</span> <span m='232140'>how</span>
  <span m='232440'>will we</span> <span m='232700'>go</span> <span
  m='232830'>about</span> <span m='233050'>tackling</span> <span
  m='233510'>this</span> <span m='233700'>problem</span> <span
  m='234080'>with</span> <span m='234200'>boosting?</span> <span
  m='235020'>Well,</span> <span m='235230'>there's</span> <span
  m='235380'>a</span> <span m='235420'>whole</span> <span
  m='235670'>bunch</span> <span m='235950'>of</span> <span
  m='236040'>different</span> <span m='236320'>classifiers.</span> <span
  m='237060'>And</span> <span m='237130'>if</span> <span m='237220'>you</span>
  <span m='237320'>think</span> <span m='237560'>this</span> <span
  m='237750'>is</span> <span m='237860'>all of</span> <span
  m='238160'>them--</span> <span m='239520'>like</span> <span
  m='239820'>evil,</span> <span m='240340'>emo,</span> <span
  m='240730'>transforms,</span> <span m='241210'>sparkly.</span> <span
  m='241640'>romantics</span> <span m='242030'>interests,</span> <span
  m='243230'>and</span> <span m='243630'>true--</span> <span
  m='244470'>it's</span> <span m='244600'>actually</span> <span
  m='244990'>only</span> <span m='245230'>half</span> <span m='245510'>of</span>
  <span m='245660'>them.</span> <span m='246380'>The</span> <span
  m='246500'>other</span> <span m='246720'>half</span> <span
  m='246990'>are</span> <span m='247110'>the</span> <span
  m='247270'>opposite</span> <span m='247750'>versions,</span> <span
  m='248930'>but</span> <span m='249070'>we'll</span> <span
  m='249210'>ignore</span> <span m='249460'>them</span> <span
  m='249650'>for</span> <span m='249820'>now.</span> </p><p><span
  m='253300'>So</span> <span m='253860'>if</span> <span m='254000'>you</span>
  <span m='254120'>look at</span> <span m='254310'>these,</span> <span
  m='254460'>you</span> <span m='254870'>can</span> <span
  m='255070'>probably</span> <span m='255280'>figure</span> <span
  m='255630'>out</span> <span m='255780'>what</span> <span
  m='256010'>they</span> <span m='256130'>mean--</span> <span
  m='257089'>evil</span> <span m='257360'>equals</span> <span
  m='257630'>yes</span> <span m='257990'>means</span> <span
  m='258230'>vampire</span> <span m='259470'>is</span> <span
  m='259589'>what</span> <span m='259779'>we're</span> <span
  m='259870'>saying</span> <span m='260149'>here--</span> <span
  m='260810'>except</span> <span m='261130'>maybe</span> <span
  m='261490'>true.</span> <span m='261990'>You</span> <span
  m='262089'>might</span> <span m='262260'>be</span> <span
  m='262330'>saying,</span> <span m='262610'>why</span> <span
  m='262920'>is</span> <span m='263120'>there</span> <span m='263240'>one</span>
  <span m='263450'>that</span> <span m='263510'>just</span> <span
  m='263670'>says</span> <span m='263970'>true?</span> <span m='264730'>The
  one</span> <span m='265080'>that just</span> <span m='265250'>says</span>
  <span m='265450'>true</span> <span m='265830'>says</span> <span
  m='266130'>that</span> <span m='266300'>everybody</span> <span m='266610'>is
  a</span> <span m='266920'>vampire.</span> <span m='268500'>You</span> <span
  m='268600'>might</span> <span m='268770'>think,</span> <span
  m='269030'>oh,</span> <span m='269190'>that</span> <span
  m='269430'>sucks.</span> <span m='269880'>But</span> <span
  m='270040'>it's</span> <span m='270200'>not</span> <span
  m='270360'>that</span> <span m='270530'>bad</span> <span
  m='270850'>since</span> <span m='271110'>seven</span> <span m='271440'>of
  the</span> <span m='271550'>10</span> <span m='271810'>samples</span> <span
  m='272250'>are</span> <span m='272330'>vampires.</span> </p><p><span
  m='273530'>The</span> <span m='273650'>key,</span> <span
  m='275180'>crucial</span> <span m='276250'>thing</span> <span
  m='276520'>about</span> <span m='276840'>boosting</span> <span
  m='278690'>is</span> <span m='279250'>that</span> <span m='280240'>for</span>
  <span m='280590'>any</span> <span m='280930'>possible</span> <span
  m='281770'>classifier,</span> <span m='282520'>like</span> <span
  m='283410'>classifying</span> <span m='283590'>on</span> <span
  m='283740'>the</span> <span m='283860'>evil</span> <span
  m='284200'>dimension--</span> <span m='285770'>which actually</span> <span
  m='286000'>sounds</span> <span m='286310'>like</span> <span
  m='286530'>some</span> <span m='286800'>kind</span> <span m='287020'>of</span>
  <span m='287140'>weird</span> <span m='287400'>place</span> <span
  m='287650'>that</span> <span m='287750'>you'd</span> <span m='287900'>go in
  a</span> <span m='288090'>comic</span> <span m='288490'>book.</span> <span
  m='288730'>But</span> <span m='289290'>classifying</span> <span
  m='289850'>on</span> <span m='289960'>the</span> <span m='290060'>emo</span>
  <span m='290350'>dimension</span> <span m='290830'>or</span> <span
  m='290910'>whatever,</span> <span m='291690'>as</span> <span
  m='291890'>long</span> <span m='292260'>as</span> <span m='292360'>it's</span>
  <span m='292550'>not</span> <span m='292970'>a</span> <span
  m='293050'>50-50</span> <span m='294000'>split</span> <span
  m='295090'>of</span> <span m='295490'>the</span> <span m='295720'>data,</span>
  <span m='296970'>you're</span> <span m='297190'>guaranteed</span> <span
  m='299120'>to</span> <span m='299250'>be</span> <span m='299420'>able</span>
  <span m='299650'>to</span> <span m='299790'>use</span> <span
  m='300080'>it</span> <span m='300990'>in</span> <span m='301120'>some</span>
  <span m='301410'>way</span> <span m='302020'>for</span> <span
  m='302180'>boosting.</span> </p><p><span m='303630'>If</span> <span
  m='303760'>there is</span> <span m='304010'>a</span> <span
  m='304070'>50-50</span> <span m='304760'>split,</span> <span
  m='305140'>it's</span> <span m='305310'>like</span> <span
  m='305520'>flipping</span> <span m='305860'>a</span> <span
  m='305960'>coin,</span> <span m='307220'>so</span> <span
  m='307500'>it's</span> <span m='307620'>useless.</span> <span
  m='308670'>Because</span> <span m='310180'>if</span> <span
  m='310330'>you</span> <span m='310440'>had</span> <span m='310600'>some</span>
  <span m='310740'>other</span> <span m='311320'>thing,</span> <span
  m='311490'>like</span> <span m='312000'>gender</span> <span
  m='312400'>equals</span> <span m='312650'>male</span> <span
  m='312940'>or</span> <span m='312990'>female-- and</span> <span
  m='313430'>let's</span> <span m='313630'>say</span> <span
  m='313740'>that</span> <span m='313900'>was</span> <span
  m='314020'>50-50.</span> <span m='314580'>It's</span> <span
  m='314760'>not.</span> <span m='315700'>But</span> <span
  m='315920'>let's</span> <span m='316090'>say</span> <span m='316200'>it
  was</span> <span m='316310'>50-50</span> <span m='316840'>between</span> <span
  m='317180'>vampire</span> <span m='317450'>and</span> <span
  m='317720'>non-vampire--</span> <span m='319140'>it's</span> <span
  m='319290'>a</span> <span m='319380'>useless</span> <span
  m='320070'>classifier</span> <span m='321390'>because</span> <span
  m='323900'>it</span> <span m='324060'>would</span> <span m='324180'>be</span>
  <span m='324320'>just</span> <span m='324530'>the</span> <span
  m='324620'>same</span> <span m='324870'>as</span> <span
  m='324980'>flipping</span> <span m='325080'>a</span> <span
  m='325230'>coin.</span> <span m='325495'>You'd get</span> <span
  m='325760'>no</span> <span m='325930'>information.</span> </p><p><span
  m='326690'>Now,</span> <span m='326800'>you</span> <span
  m='326940'>might</span> <span m='327180'>say,</span> <span
  m='327770'>wait</span> <span m='327860'>a</span> <span
  m='327900'>minute.</span> <span m='328210'>What</span> <span
  m='328280'>about</span> <span m='328700'>classifiers</span> <span
  m='329260'>that</span> <span m='329340'>get</span> <span
  m='329710'>worse</span> <span m='330160'>than</span> <span
  m='330330'>50-50?</span> <span m='331960'>What</span> <span
  m='332090'>about</span> <span m='332320'>them?</span> <span
  m='333470'>Might</span> <span m='333970'>not</span> <span m='334340'>they
  be</span> <span m='334690'>even</span> <span m='334890'>worse</span> <span
  m='335280'>than a</span> <span m='335500'>50-50</span> <span
  m='335720'>classifier?</span> <span m='336430'>I</span> <span
  m='336690'>claim</span> <span m='337640'>a</span> <span
  m='337750'>classifier</span> <span m='337990'>that</span> <span
  m='338250'>gets</span> <span m='338510'>less</span> <span
  m='338890'>than</span> <span m='339010'>50-50</span> <span
  m='339325'>is</span> <span m='339640'>still</span> <span
  m='339990'>better</span> <span m='340720'>than</span> <span
  m='340850'>a</span> <span m='340910'>classifier</span> <span
  m='341540'>that</span> <span m='341760'>gets</span> <span
  m='342040'>exactly</span> <span m='342530'>a</span> <span
  m='342790'>50-50</span> <span m='342910'>split.</span> <span
  m='344242'>Is</span> <span m='344700'>there a</span> <span
  m='344860'>question?</span> </p><p><span m='345240'>AUDIENCE: Yeah.</span>
  <span m='345738'>In the</span> <span m='346236'>ID tree</span> <span
  m='346734'>example,</span> <span m='347232'>somebody</span> <span
  m='347730'>said</span> <span m='347896'>you</span> <span
  m='348062'>used</span> <span m='348228'>50-50</span> <span
  m='348726'>classifiers</span> <span m='349224'>and played</span> <span
  m='349722'>around.</span> <span m='351714'>And after</span> <span
  m='352212'>you already</span> <span m='353208'>produced the</span> <span
  m='353706'>elements</span> <span m='354204'>per set, then</span> <span
  m='354702'>you only</span> <span m='355200'>used</span> <span
  m='355698'>50-50</span> <span m='356196'>classifiers</span> <span
  m='356694'>[INAUDIBLE]</span> <span m='357192'>per set.</span> </p><p><span
  m='357690'>PROFESSOR: So</span> <span m='357970'>the</span> <span
  m='358230'>question is,</span> <span m='358710'>in</span> <span
  m='358820'>the</span> <span m='358900'>ID</span> <span m='359190'>tree</span>
  <span m='359440'>example,</span> <span m='360350'>you</span> <span
  m='360420'>might</span> <span m='360780'>use</span> <span
  m='361180'>50-50</span> <span m='361650'>classifiers</span> <span
  m='362460'>in</span> <span m='362580'>later</span> <span
  m='362880'>rounds</span> <span m='363900'>if,</span> <span
  m='364260'>for</span> <span m='364450'>instance,</span> <span
  m='367170'>there's</span> <span m='367380'>a</span> <span
  m='367430'>50-50</span> <span m='367880'>classifier</span> <span
  m='368670'>except</span> <span m='369110'>for</span> <span
  m='369270'>that</span> <span m='369670'>most</span> <span m='370060'>of</span>
  <span m='370110'>the</span> <span m='370180'>things</span> <span
  m='370490'>off</span> <span m='370710'>of</span> <span m='370860'>that</span>
  <span m='371110'>side</span> <span m='371420'>have been</span> <span
  m='371530'>already</span> <span m='371970'>removed.</span> <span
  m='373410'>Let's</span> <span m='373660'>say</span> <span
  m='373780'>there's</span> <span m='374090'>20</span> <span
  m='374410'>data</span> <span m='374680'>points,</span> <span
  m='375750'>and</span> <span m='376090'>there's a</span> <span
  m='376260'>classifier</span> <span m='376520'>that</span> <span
  m='376650'>splits</span> <span m='376940'>it</span> <span m='377210'>10
  and</span> <span m='377650'>10.</span> <span m='379750'>And</span> <span
  m='380250'>it</span> <span m='380380'>gets</span> <span m='380480'>half</span>
  <span m='381170'>plus</span> <span m='381450'>half</span> <span
  m='381710'>minus</span> <span m='382070'>on</span> <span
  m='382200'>both</span> <span m='382550'>sides.</span> </p><p><span
  m='384650'>But</span> <span m='385580'>all</span> <span m='385950'>the</span>
  <span m='386060'>pluses</span> <span m='386530'>from</span> <span
  m='386710'>the</span> <span m='386810'>right</span> <span
  m='387070'>side</span> <span m='387440'>have been</span> <span
  m='387610'>removed</span> <span m='388040'>by</span> <span
  m='388160'>some</span> <span m='388350'>other</span> <span
  m='388550'>classifier.</span> <span m='389000'>You</span> <span
  m='389110'>might</span> <span m='389350'>use</span> <span
  m='389530'>it.</span> <span m='389670'>That's</span> <span
  m='389960'>true.</span> <span m='390360'>But in</span> <span
  m='390620'>boosting,</span> <span m='390880'>you will</span> <span
  m='391060'>never</span> <span m='391330'>use</span> <span
  m='391530'>something</span> <span m='392030'>that's</span> <span
  m='392360'>a</span> <span m='392430'>50-50</span> <span
  m='392940'>classifier.</span> <span m='394410'>You</span> <span
  m='394620'>never</span> <span m='394900'>use</span> <span
  m='395130'>something</span> <span m='395470'>that</span> <span
  m='395670'>has</span> <span m='397530'>exactly</span> <span
  m='397785'>a</span> <span m='398040'>50-50</span> <span
  m='398600'>chance</span> <span m='398970'>of</span> <span
  m='399050'>being</span> <span m='399270'>correct.</span> <span
  m='400690'>Because</span> <span m='401700'>if</span> <span
  m='401850'>it</span> <span m='401940'>has a</span> <span
  m='402180'>50-50</span> <span m='402260'>chance</span> <span
  m='402780'>of</span> <span m='402850'>being correct,</span> <span
  m='403070'>it's</span> <span m='403440'>useless.</span> </p><p><span
  m='404620'>And</span> <span m='404880'>if</span> <span m='407340'>it</span>
  <span m='407480'>has</span> <span m='407670'>a</span> <span
  m='407750'>50-50</span> <span m='408330'>chance</span> <span
  m='409030'>of--</span> <span m='410080'>no,</span> <span
  m='410260'>sorry.</span> <span m='411080'>Let</span> <span
  m='411750'>me</span> <span m='411870'>specify</span> <span
  m='412690'>again.</span> <span m='413630'>You'll</span> <span
  m='413770'>never</span> <span m='414150'>use</span> <span
  m='414350'>something</span> <span m='418480'>that</span> <span m='418920'>has
  a</span> <span m='418970'>50-50</span> <span m='419470'>chance</span> <span
  m='420530'>of</span> <span m='420820'>giving</span> <span m='420970'>you
  the</span> <span m='421110'>right</span> <span m='421300'>answer</span> <span
  m='421700'>given</span> <span m='422040'>the</span> <span
  m='422130'>weights.</span> <span m='423480'>That's</span> <span
  m='423690'>very,</span> <span m='424140'>very</span> <span
  m='424280'>important.</span> <span m='424870'>And</span> <span
  m='425360'>that</span> <span m='425540'>may</span> <span m='425680'>be</span>
  <span m='427170'>what</span> <span m='427320'>your</span> <span
  m='427410'>question was</span> <span m='427830'>getting</span> <span
  m='428080'>at.</span> <span m='428940'>As</span> <span m='429260'>I'm</span>
  <span m='429410'>about</span> <span m='429660'>to</span> <span
  m='429750'>show</span> <span m='429930'>you</span> <span m='430050'>and</span>
  <span m='430190'>as</span> <span m='431330'>Patrick</span> <span
  m='431800'>told you</span> <span m='432070'>in</span> <span
  m='432230'>the</span> <span m='432310'>lecture,</span> <span
  m='433450'>in</span> <span m='433640'>later</span> <span
  m='433920'>rounds</span> <span m='434180'>of</span> <span
  m='434220'>boosting,</span> <span m='434910'>you</span> <span
  m='435080'>change</span> <span m='435490'>the</span> <span
  m='435590'>weights</span> <span m='436570'>of</span> <span
  m='437160'>each</span> <span m='437380'>of</span> <span m='437490'>the</span>
  <span m='437600'>10</span> <span m='437830'>data</span> <span
  m='438080'>points.</span> </p><p><span m='438430'>At</span> <span
  m='438600'>first,</span> <span m='438790'>you</span> <span
  m='438880'>start</span> <span m='439170'>with</span> <span
  m='439290'>all</span> <span m='439600'>weights</span> <span
  m='439910'>being</span> <span m='440490'>1/10.</span> <span
  m='442120'>The</span> <span m='442250'>weights</span> <span
  m='442430'>have</span> <span m='442560'>add up</span> <span m='442910'>to
  1.</span> <span m='443680'>In</span> <span m='443850'>this</span> <span
  m='444080'>case,</span> <span m='444570'>you</span> <span
  m='444730'>never,</span> <span m='445140'>ever</span> <span
  m='445360'>choose</span> <span m='445580'>a</span> <span
  m='445630'>classifier</span> <span m='446850'>that</span> <span
  m='447280'>gets</span> <span m='447520'>five</span> <span m='447780'>of</span>
  <span m='447820'>them</span> <span m='447940'>right</span> <span
  m='448090'>and</span> <span m='448190'>five of</span> <span
  m='448470'>them</span> <span m='448640'>wrong.</span> <span
  m='449540'>In</span> <span m='449670'>the</span> <span m='449720'>later</span>
  <span m='450120'>rounds,</span> <span m='450720'>you'll</span> <span
  m='450910'>never,</span> <span m='451250'>ever</span> <span
  m='451530'>choose</span> <span m='451750'>a</span> <span
  m='451820'>classifier</span> <span m='453220'>that</span> <span
  m='453340'>gets</span> <span m='454410'>half</span> <span m='454800'>of</span>
  <span m='454950'>the</span> <span m='455030'>weight</span> <span
  m='456750'>wrong--</span> <span m='457880'>exactly</span> <span
  m='458540'>half</span> <span m='458860'>of</span> <span m='459010'>the</span>
  <span m='459080'>weight</span> <span m='459510'>wrong.</span> </p><p><span
  m='460430'>But</span> <span m='461060'>half</span> <span m='461320'>of</span>
  <span m='461400'>the</span> <span m='461480'>weight</span> <span
  m='461850'>may</span> <span m='462040'>not</span> <span m='462310'>be</span>
  <span m='463220'>half</span> <span m='463490'>of the</span> <span
  m='463640'>data</span> <span m='463880'>points.</span> <span
  m='464590'>So</span> <span m='464760'>it's</span> <span
  m='464910'>possible</span> <span m='465360'>to</span> <span
  m='465470'>choose</span> <span m='465680'>a</span> <span
  m='465920'>classifier</span> <span m='466390'>that</span> <span
  m='466740'>gets</span> <span m='467450'>half</span> <span m='467660'>of</span>
  <span m='467730'>the</span> <span m='467830'>data</span> <span
  m='468100'>points</span> <span m='468370'>wrong</span> <span
  m='468710'>if</span> <span m='468810'>it</span> <span
  m='468920'>doesn't</span> <span m='469130'>get</span> <span
  m='469260'>half</span> <span m='469490'>of</span> <span m='469570'>the</span>
  <span m='469650'>weight</span> <span m='469920'>wrong.</span> <span
  m='470630'>And</span> <span m='470690'>that's</span> <span
  m='470910'>similar</span> <span m='471280'>to</span> <span
  m='471470'>an</span> <span m='471600'>ID</span> <span m='471940'>tree</span>
  <span m='472370'>when</span> <span m='473420'>you've</span> <span
  m='473650'>already</span> <span m='473920'>gotten</span> <span
  m='474230'>things</span> <span m='474510'>right</span> <span
  m='474850'>before.</span> <span m='475330'>Because</span> <span
  m='475710'>you'll</span> <span m='475900'>see</span> <span m='476080'>that
  the</span> <span m='476250'>weight</span> <span m='476450'>is</span> <span
  m='476580'>going</span> <span m='476680'>to</span> <span m='476730'>go</span>
  <span m='476920'>to</span> <span m='477070'>the</span> <span
  m='477140'>ones</span> <span m='477320'>you</span> <span m='477410'>got</span>
  <span m='477680'>wrong.</span> </p><p><span m='478730'>So</span> <span
  m='480150'>I'm</span> <span m='480330'>not</span> <span
  m='480590'>saying</span> <span m='480770'>that</span> <span
  m='480890'>you</span> <span m='480950'>should</span> <span
  m='481220'>throw</span> <span m='481470'>out</span> <span
  m='481760'>right</span> <span m='481940'>away</span> <span
  m='482740'>anything</span> <span m='483140'>that</span> <span
  m='483190'>gets</span> <span m='483470'>five</span> <span m='483760'>of
  the</span> <span m='483850'>points</span> <span m='484100'>wrong.</span> <span
  m='484690'>Hell,</span> <span m='485280'>you</span> <span
  m='485420'>shouldn't</span> <span m='485680'>even</span> <span
  m='485900'>throw out</span> <span m='486170'>right</span> <span
  m='486310'>away</span> <span m='486600'>something</span> <span
  m='486850'>that</span> <span m='486900'>gets</span> <span
  m='487120'>seven</span> <span m='487500'>of</span> <span m='487570'>the</span>
  <span m='487690'>points wrong.</span> <span m='488120'>It's</span> <span
  m='488380'>possible--</span> <span m='489264'>possible--</span> <span
  m='490150'>that</span> <span m='490340'>you</span> <span m='490450'>can</span>
  <span m='490580'>get</span> <span m='490770'>seven</span> <span
  m='490960'>of</span> <span m='491050'>the</span> <span
  m='491130'>points</span> <span m='491390'>wrong,</span> <span
  m='492070'>or</span> <span m='492210'>getting</span> <span
  m='492520'>less</span> <span m='492830'>than</span> <span
  m='492990'>half</span> <span m='493270'>of</span> <span m='493360'>the</span>
  <span m='493450'>weight</span> <span m='493590'>wrong if</span> <span
  m='494040'>those</span> <span m='494230'>other</span> <span
  m='494410'>three</span> <span m='494670'>points</span> <span
  m='494970'>are</span> <span m='495070'>really,</span> <span
  m='495610'>really</span> <span m='495980'>annoying</span> <span
  m='496870'>to</span> <span m='496980'>get</span> <span
  m='497170'>right.</span> <span m='498050'>And</span> <span
  m='498170'>we'll</span> <span m='498330'>see</span> <span
  m='498570'>that</span> <span m='499020'>later</span> <span
  m='499270'>on.</span> </p><p><span m='499930'>But</span> <span
  m='500020'>for</span> <span m='500150'>insight,</span> <span
  m='501260'>at</span> <span m='501450'>every</span> <span
  m='501780'>step</span> <span m='502180'>along</span> <span
  m='502580'>the</span> <span m='502660'>way,</span> <span
  m='504660'>we're</span> <span m='504770'>willing</span> <span
  m='505260'>to</span> <span m='505370'>choose</span> <span
  m='505710'>any</span> <span m='505940'>classifier</span> <span
  m='506530'>that</span> <span m='506620'>doesn't</span> <span
  m='506820'>get</span> <span m='507030'>50-50.</span> <span
  m='509380'>However,</span> <span m='511840'>we</span> <span
  m='512140'>want</span> <span m='512490'>to</span> <span
  m='512610'>choose</span> <span m='512970'>the</span> <span
  m='513080'>classifier</span> <span m='514330'>that</span> <span
  m='514370'>gets</span> <span m='514590'>the</span> <span
  m='514669'>most</span> <span m='515230'>of</span> <span m='515799'>the</span>
  <span m='515900'>weight</span> <span m='516990'>right.</span> <span
  m='518010'>By</span> <span m='518169'>most</span> <span m='518490'>of</span>
  <span m='518539'>the</span> <span m='518600'>weight,</span> <span
  m='519059'>at</span> <span m='519260'>first,</span> <span m='519500'>we</span>
  <span m='519610'>mean</span> <span m='519789'>most</span> <span
  m='520039'>of</span> <span m='520090'>the</span> <span
  m='520169'>points</span> <span m='520500'>right.</span> <span
  m='521030'>Later,</span> <span m='521620'>we</span> <span
  m='521740'>will</span> <span m='521850'>mean</span> <span
  m='523299'>exactly</span> <span m='523690'>what</span> <span
  m='523750'>I</span> <span m='523820'>said--</span> <span
  m='524100'>most</span> <span m='524330'>of</span> <span m='524380'>the</span>
  <span m='524460'>weight.</span> </p><p><span m='524810'>And</span> <span
  m='524940'>if</span> <span m='525020'>you</span> <span m='525130'>don't</span>
  <span m='525310'>understand</span> <span m='525810'>that,</span> <span
  m='526950'>it's</span> <span m='527140'>sometimes</span> <span
  m='528110'>hard</span> <span m='528370'>to</span> <span m='528450'>get</span>
  <span m='528610'>it</span> <span m='528900'>right</span> <span
  m='529100'>away</span> <span m='530890'>when</span> <span
  m='531050'>Patrick</span> <span m='531460'>just</span> <span
  m='531670'>lectures</span> <span m='531830'>through  it,</span> <span
  m='531990'>introduces</span> <span m='532560'>a</span> <span
  m='532610'>new</span> <span m='532760'>concept.</span> <span m='533220'>If
  you</span> <span m='533360'>don't</span> <span m='533530'>understand</span>
  <span m='533930'>that,</span> <span m='534150'>you'll</span> <span
  m='534330'>see</span> <span m='534510'>what</span> <span m='534610'>I</span>
  <span m='534680'>mean</span> <span m='534940'>when</span> <span
  m='535100'>we</span> <span m='535200'>go</span> <span
  m='535450'>through,</span> <span m='535800'>all</span> <span
  m='536220'>right?</span> </p><p><span m='538040'>So</span> <span
  m='538470'>my</span> <span m='539050'>point I</span> <span
  m='539500'>was</span> <span m='539660'>making</span> <span
  m='539820'>before</span> <span m='540170'>is,</span> <span
  m='540300'>what</span> <span m='540560'>about</span> <span
  m='540850'>things</span> <span m='541100'>that</span> <span
  m='541180'>get</span> <span m='542300'>less</span> <span
  m='542700'>than</span> <span m='542850'>half</span> <span m='543180'>of</span>
  <span m='543300'>the</span> <span m='543370'>weight</span> <span
  m='543680'>right?</span> <span m='544150'>Well,</span> <span
  m='544350'>those</span> <span m='544590'>are</span> <span
  m='544650'>always</span> <span m='544930'>OK</span> <span
  m='545310'>because</span> <span m='545540'>you</span> <span
  m='545650'>can</span> <span m='545760'>just</span> <span
  m='545960'>flip</span> <span m='546210'>them</span> <span
  m='546340'>around,</span> <span m='546830'>use</span> <span
  m='547050'>their</span> <span m='547190'>inverse,</span> <span
  m='548450'>and</span> <span m='548620'>that</span> <span
  m='548840'>gets</span> <span m='549380'>more</span> <span
  m='549540'>than</span> <span m='549710'>half</span> <span m='549900'>of</span>
  <span m='550000'>the</span> <span m='550080'>weight</span> <span
  m='550270'>right.</span> </p><p><span m='552010'>It's</span> <span
  m='552210'>sort</span> <span m='552410'>of</span> <span
  m='552530'>like--</span> <span m='555130'>yeah,</span> <span
  m='555260'>it's</span> <span m='555420'>sort</span> <span m='555570'>of</span>
  <span m='555670'>like</span> <span m='557020'>my</span> <span
  m='557170'>girlfriend</span> <span m='557620'>always</span> <span
  m='557850'>tells</span> <span m='558120'>me</span> <span
  m='558270'>that</span> <span m='558470'>she</span> <span m='558810'>is</span>
  <span m='559100'>more</span> <span m='559420'>than</span> <span
  m='559570'>50%</span> <span m='560250'>likely</span> <span m='560600'>to
  choose</span> <span m='560850'>the</span> <span m='560970'>wrong</span> <span
  m='561230'>direction</span> <span m='561790'>when</span> <span
  m='562070'>you're</span> <span m='562220'>trying</span> <span
  m='562560'>to</span> <span m='562670'>go</span> <span
  m='562850'>between</span> <span m='563200'>two</span> <span
  m='563350'>places,</span> <span m='564410'>which</span> <span
  m='564740'>I'm</span> <span m='564980'>kind</span> <span m='565230'>of</span>
  <span m='565290'>skeptical</span> <span m='565740'>of.</span> <span
  m='565920'>But</span> <span m='566020'>I</span> <span m='566100'>said,</span>
  <span m='566300'>if</span> <span m='566460'>that's</span> <span
  m='566650'>really</span> <span m='566980'>true,</span> <span
  m='567910'>then</span> <span m='568560'>we</span> <span m='568710'>can</span>
  <span m='568860'>just</span> <span m='569050'>go</span> <span
  m='569320'>wherever</span> <span m='569810'>you</span> <span
  m='570000'>didn't</span> <span m='570310'>say</span> <span
  m='570500'>to</span> <span m='570650'>go,</span> <span m='571200'>and</span>
  <span m='571650'>we'll</span> <span m='571940'>be</span> <span
  m='572040'>more</span> <span m='572260'>likely</span> <span
  m='572600'>to</span> <span m='572660'>go</span> <span m='572820'>the</span>
  <span m='572930'>right</span> <span m='573110'>way.</span> <span
  m='573280'>So</span> <span m='573400'>you're</span> <span
  m='573570'>actually</span> <span m='573910'>really</span> <span
  m='574140'>good</span> <span m='574430'>at</span> <span
  m='574590'>finding</span> <span m='574970'>the</span> <span
  m='575080'>place</span> <span m='575980'>that</span> <span
  m='576070'>we</span> <span m='576190'>want</span> <span m='576360'>to</span>
  <span m='576410'>go.</span> </p><p><span m='576700'>And</span> <span
  m='576790'>then</span> <span m='576910'>she's</span> <span
  m='577040'>like,</span> <span m='577180'>no,</span> <span
  m='577390'>that</span> <span m='577570'>won't</span> <span
  m='577720'>work.</span> <span m='577950'>Because</span> <span
  m='578280'>then</span> <span m='578570'>I'll</span> <span
  m='579150'>know</span> <span m='579360'>that you're</span> <span
  m='579600'>going</span> <span m='579730'>to</span> <span m='579800'>do</span>
  <span m='579940'>that,</span> <span m='580270'>and</span> <span
  m='582050'>I'll</span> <span m='582350'>double</span> <span
  m='582620'>say</span> <span m='582800'>the</span> <span
  m='582950'>wrong</span> <span m='583200'>way.</span> <span
  m='583500'>And</span> <span m='583600'>then</span> <span
  m='583610'>you'll</span> <span m='583750'>go</span> <span
  m='583870'>the</span> <span m='583970'>wrong</span> <span
  m='584150'>way</span> <span m='584410'>again.</span> </p><p><span
  m='584740'>But</span> <span m='585930'>that</span> <span m='586180'>not</span>
  <span m='586330'>withstanding,</span> <span m='586740'>you</span> <span
  m='586890'>can</span> <span m='587020'>see</span> <span m='587420'>you</span>
  <span m='587670'>can</span> <span m='587760'>apply</span> <span
  m='588100'>the</span> <span m='588210'>same</span> <span
  m='588780'>concept</span> <span m='589660'>to</span> <span
  m='589800'>boosting.</span> <span m='590250'>And</span> <span
  m='590340'>that's</span> <span m='590580'>why</span> <span
  m='591030'>underneath</span> <span m='591590'>of</span> <span
  m='591740'>this,</span> <span m='592270'>I</span> <span m='592440'>have</span>
  <span m='592770'>all</span> <span m='593060'>the</span> <span
  m='593160'>opposite</span> <span m='593590'>versions</span> <span
  m='594060'>of</span> <span m='594160'>all</span> <span m='594340'>these</span>
  <span m='594560'>tests.</span> <span m='595450'>So</span> <span
  m='596140'>what</span> <span m='596350'>should</span> <span
  m='596490'>we</span> <span m='596600'>be</span> <span m='596750'>doing</span>
  <span m='597770'>to</span> <span m='599750'>solve</span> <span m='600180'>this
  problem</span> <span m='600290'>more</span> <span m='600520'>quickly?</span>
  <span m='601270'>First,</span> <span m='601890'>let's</span> <span
  m='602170'>figure</span> <span m='602400'>out</span> <span
  m='602580'>which</span> <span m='603000'>data</span> <span
  m='603310'>points</span> <span m='603670'>are</span> <span
  m='603800'>misclassified</span> <span m='604900'>by</span> <span
  m='605070'>each</span> <span m='605420'>of</span> <span
  m='605670'>these</span> <span m='605950'>classifiers.</span> <span
  m='606980'>In</span> <span m='607130'>other</span> <span
  m='607310'>words,</span> <span m='608230'>if</span> <span m='608330'>we</span>
  <span m='608440'>say</span> <span m='608910'>all the</span> <span
  m='609220'>evil</span> <span m='609520'>things</span> <span
  m='609780'>are</span> <span m='609930'>vampires</span> <span
  m='610460'>and</span> <span m='610560'>all</span> <span m='611040'>the</span>
  <span m='611330'>non-evil</span> <span m='611860'>things</span> <span
  m='612090'>are</span> <span m='612160'>not</span> <span
  m='612400'>vampires,</span> <span m='613250'>what</span> <span
  m='613520'>do</span> <span m='613560'>we</span> <span m='613650'>get</span>
  <span m='613830'>wrong?</span> </p><p><span m='614850'>And</span> <span
  m='615210'>if</span> <span m='615330'>we</span> <span m='615440'>do</span>
  <span m='615640'>that</span> <span m='615850'>for</span> <span
  m='616020'>every</span> <span m='616260'>classifier,</span> <span
  m='617740'>then</span> <span m='618280'>that'll</span> <span
  m='618490'>make</span> <span m='618660'>it</span> <span
  m='618810'>faster</span> <span m='619270'>later</span> <span
  m='619560'>on.</span> <span m='619830'>Because</span> <span
  m='620120'>later</span> <span m='620450'>on,</span> <span
  m='620690'>we're</span> <span m='620830'>going</span> <span
  m='620960'>to</span> <span m='621030'>go</span> <span
  m='621250'>through</span> <span m='621430'>classifiers,</span> <span
  m='622630'>and</span> <span m='623190'>we're</span> <span
  m='623310'>going</span> <span m='623400'>to</span> <span
  m='623450'>have</span> <span m='623550'>to</span> <span m='623650'>add</span>
  <span m='623890'>up</span> <span m='624040'>the</span> <span
  m='624110'>ones</span> <span m='624320'>they</span> <span
  m='624410'>got</span> <span m='624630'>wrong.</span> <span
  m='625450'>So</span> <span m='625720'>this</span> <span
  m='626140'>chart</span> <span m='626350'>over</span> <span
  m='626510'>here</span> <span m='626640'>is</span> <span
  m='626760'>going</span> <span m='626860'>to</span> <span m='626900'>be</span>
  <span m='628260'>extremely</span> <span m='628850'>useful.</span> <span
  m='629670'>And</span> <span m='629930'>on</span> <span m='630170'>the</span>
  <span m='630290'>test</span> <span m='630560'>that this</span> <span
  m='630640'>appeared</span> <span m='630945'>in,</span> <span
  m='631420'>they</span> <span m='631560'>even</span> <span
  m='631770'>made</span> <span m='631980'>you</span> <span
  m='632070'>fill</span> <span m='632350'>it</span> <span m='632620'>in
  to</span> <span m='632690'>help</span> <span m='632930'>yourself</span> <span
  m='633300'>out.</span> </p><p><span m='634020'>So</span> <span
  m='634720'>let's</span> <span m='634960'>see.</span> <span
  m='635440'>If</span> <span m='635580'>we</span> <span m='635690'>said</span>
  <span m='635980'>that</span> <span m='636180'>all</span> <span
  m='636420'>the</span> <span m='636540'>evil</span> <span
  m='636820'>equals</span> <span m='637130'>yes</span> <span
  m='637630'>are</span> <span m='637800'>vampires</span> <span
  m='638560'>and</span> <span m='638810'>all</span> <span m='639010'>the
  evil</span> <span m='639120'>equals</span> <span m='639810'>no</span> <span
  m='640670'>are</span> <span m='640820'>not</span> <span
  m='641260'>vampires,</span> <span m='643130'>then--</span> <span
  m='644940'>I'll</span> <span m='645140'>do</span> <span m='645210'>the</span>
  <span m='645330'>first</span> <span m='645640'>one</span> <span
  m='645780'>for</span> <span m='645980'>you.</span> <span m='647400'>So</span>
  <span m='649210'>we</span> <span m='649390'>get</span> <span m='649670'>all
  of</span> <span m='649970'>the</span> <span m='650070'>non-vampires</span>
  <span m='650940'>correct</span> <span m='651450'>because</span> <span
  m='651680'>they</span> <span m='651800'>are</span> <span m='652040'>all</span>
  <span m='652270'>evil</span> <span m='652550'>equals</span> <span
  m='652850'>no.</span> <span m='653390'>But</span> <span
  m='653560'>unfortunately,</span> <span m='656500'>we</span> <span
  m='656640'>get</span> <span m='656880'>Angel,</span> <span
  m='657680'>Edward</span> <span m='658040'>Cullen,</span> <span
  m='658700'>Saya</span> <span m='659070'>Otonashi,</span> <span
  m='659770'>and</span> <span m='660170'>Lestat</span> <span
  m='660380'>de</span> <span m='660740'>Lioncourt</span> <span
  m='661360'>wrong</span> <span m='662040'>because</span> <span
  m='662370'>they</span> <span m='662510'>are</span> <span
  m='662710'>vampires,</span> <span m='666880'>and</span> <span
  m='667180'>they're</span> <span m='667370'>evil</span> <span
  m='667650'>equals</span> <span m='668000'>no.</span> </p><p><span
  m='671420'>Apparently,</span> <span m='671890'>Lestat</span> <span
  m='672350'>is</span> <span m='672490'>iffy.</span> <span m='672840'>But</span>
  <span m='674430'>I</span> <span m='674530'>never</span> <span
  m='674750'>read</span> <span m='674960'>those</span> <span
  m='675160'>books,</span> <span m='675470'>and the</span> <span
  m='675650'>Wikipedia</span> <span m='676150'>article</span> <span
  m='676530'>said</span> <span m='676880'>that</span> <span m='677000'>in</span>
  <span m='677100'>the</span> <span m='677210'>end,</span> <span
  m='677370'>he</span> <span m='677480'>wasn't</span> <span m='677740'>that
  evil.</span> <span m='678540'>So</span> <span m='679610'>there</span> <span
  m='679850'>we</span> <span m='679960'>go.</span> <span m='680310'>Evil</span>
  <span m='680910'>equals</span> <span m='681150'>yes</span> <span
  m='681540'>misclassifies</span> <span m='682140'>2,</span> <span
  m='682330'>3,</span> <span m='682610'>4,</span> <span m='682850'>and</span>
  <span m='682940'>5.</span> </p><p><span m='684060'>All right,</span> <span
  m='685470'>so</span> <span m='686680'>let's</span> <span m='687010'>try</span>
  <span m='687490'>emo</span> <span m='687770'>equals</span> <span
  m='688040'>yes.</span> <span m='688310'>I'll</span> <span
  m='688490'>have</span> <span m='688760'>someone</span> <span
  m='688930'>else</span> <span m='689205'>do it.</span> <span
  m='689950'>So</span> <span m='691246'>let's</span> <span m='691650'>see</span>
  <span m='691850'>if</span> <span m='691940'>you</span> <span
  m='692040'>guys</span> <span m='692300'>got</span> <span m='692510'>it.</span>
  <span m='692750'>So</span> <span m='693420'>if</span> <span
  m='693580'>we</span> <span m='693690'>say</span> <span m='693870'>that</span>
  <span m='694040'>all</span> <span m='694240'>the</span> <span
  m='694330'>emo</span> <span m='694820'>people</span> <span
  m='695120'>are</span> <span m='695180'>vampires</span> <span
  m='695485'>and</span> <span m='695790'>all the</span> <span
  m='696020'>non-emo</span> <span m='696490'>people</span> <span
  m='696710'>are</span> <span m='696800'>not</span> <span
  m='697060'>vampires,</span> <span m='697930'>what</span> <span
  m='698160'>do</span> <span m='698200'>we</span> <span m='698280'>get</span>
  <span m='698460'>wrong?</span> </p><p><span m='699175'>AUDIENCE: 1, 6,</span>
  <span m='699570'>7,</span> <span m='699965'>9.</span> </p><p><span
  m='700360'>PROFESSOR: 1,</span> <span m='700550'>6,</span> <span
  m='700770'>7,</span> <span m='701070'>9--</span> <span
  m='701240'>that's</span> <span m='701390'>exactly</span> <span
  m='701860'>right,</span> <span m='702210'>and</span> <span
  m='702430'>fast.</span> <span m='702810'>Good.</span> <span
  m='704350'>We</span> <span m='704480'>get</span> <span m='704710'>1,</span>
  <span m='705000'>6,</span> <span m='705270'>7, and</span> <span
  m='705610'>9</span> <span m='705870'>wrong.</span> <span m='706230'>1,</span>
  <span m='706530'>6,</span> <span m='707020'>and</span> <span
  m='707200'>7</span> <span m='707490'>are</span> <span m='707580'>wrong</span>
  <span m='707960'>because</span> <span m='708220'>they</span> <span
  m='708390'>are</span> <span m='708570'>not</span> <span m='708910'>emo,</span>
  <span m='709410'>but</span> <span m='709560'>they're</span> <span
  m='709680'>vampires.</span> <span m='710240'>9</span> <span
  m='710430'>is</span> <span m='710520'>wrong</span> <span
  m='710800'>because</span> <span m='711220'>Squall</span> <span m='711710'>is
  emo,</span> <span m='712210'>and he</span> <span m='712380'>is not</span>
  <span m='712530'>a</span> <span m='712800'>vampire.</span> <span
  m='716210'>Good.</span> </p><p><span m='717040'>OK,</span> <span
  m='718220'>what</span> <span m='718380'>if</span> <span m='718490'>we</span>
  <span m='718610'>said</span> <span m='718820'>that</span> <span
  m='718970'>exactly</span> <span m='719730'>the</span> <span
  m='720170'>transforming</span> <span m='721270'>characters</span> <span
  m='721990'>are</span> <span m='722150'>vampires</span> <span
  m='722790'>and</span> <span m='722920'>the</span> <span m='722990'>ones</span>
  <span m='723390'>that</span> <span m='723580'>do</span> <span
  m='723670'>not</span> <span m='723980'>transform</span> <span
  m='724520'>are</span> <span m='724640'>not</span> <span
  m='724860'>vampires?</span> <span m='725560'>Which ones</span> <span
  m='725820'>will we</span> <span m='726110'>get</span> <span
  m='726310'>wrong?</span> </p><p><span m='731690'>AUDIENCE: [INAUDIBLE].</span>
  </p><p><span m='734180'>PROFESSOR: Transforms</span> <span m='734678'>is
  the</span> <span m='735176'>next one</span> <span m='736172'>over.</span>
  </p><p><span m='736670'>AUDIENCE: All of</span> <span m='737168'>the
  ones</span> <span m='737666'>[INAUDIBLE].</span> </p><p><span
  m='738662'>PROFESSOR: So which ones</span> <span m='739160'>would we get
  wrong</span> <span m='739658'>if we said that</span> <span m='740156'>said
  transforms</span> <span m='740654'>yes were</span> <span m='741152'>vampires
  and</span> <span m='741650'>transforms no</span> <span m='742148'>were</span>
  <span m='742646'>not</span> <span m='743144'>vampires?</span> </p><p><span
  m='743642'>AUDIENCE: We'd</span> <span m='744140'>get</span> <span
  m='744638'>8</span> <span m='745136'>wrong.</span> </p><p><span
  m='745660'>PROFESSOR: We'd</span> <span m='745840'>definitely</span> <span
  m='746240'>8</span> <span m='746550'>wrong</span> <span m='747036'>because
  she's</span> <span m='747522'>not a vampire.</span> </p><p><span
  m='750438'>AUDIENCE: [INAUDIBLE].</span> </p><p><span m='753840'>PROFESSOR:
  Well, no.</span> <span m='756170'>It's</span> <span m='756310'>actually</span>
  <span m='756570'>on</span> <span m='756790'>there.</span> </p><p><span
  m='757582'>AUDIENCE: And</span> <span m='761310'>3 and</span> <span
  m='761740'>4</span> <span m='762170'>we'd</span> <span m='762600'>also
  get</span> <span m='763030'>wrong.</span> </p><p><span m='763460'>PROFESSOR:
  Yep.</span> </p><p><span m='763720'>AUDIENCE: As well</span> <span
  m='763980'>as 5.</span> </p><p><span m='764710'>PROFESSOR: Yes,</span> <span
  m='765170'>exactly.</span> <span m='765200'>OK.</span> <span
  m='766230'>Oh,</span> <span m='766410'>man.</span> <span m='766700'>You</span>
  <span m='766990'>didn't see</span> <span m='767370'>the chart.</span> <span
  m='767630'>You were</span> <span m='767980'>just</span> <span
  m='768330'>like,</span> <span m='768750'>hmmm.</span> <span
  m='770580'>You</span> <span m='770840'>saw the</span> <span
  m='771100'>left.</span> <span m='771470'>You just</span> <span
  m='771755'>said,</span> <span m='772040'>hm,</span> <span m='772380'>which
  one  of</span> <span m='772870'>these are the</span> <span
  m='773360'>transforming characters?</span> <span m='773850'>OK, that's</span>
  <span m='774340'>pretty</span> <span m='774830'>hardcore.</span> </p><p><span
  m='775320'>AUDIENCE: [LAUGHTER].</span> </p><p></p><p><span
  m='779240'>PROFESSOR: But</span> <span m='779720'>yeah,</span> <span
  m='780010'>3, 4,</span> <span m='780300'>5,</span> <span m='780570'>and
  8.</span> <span m='781140'>No,</span> <span m='781370'>no,</span> <span
  m='781620'>it's</span> <span m='781820'>definitely</span> <span
  m='782210'>given</span> <span m='782520'>to</span> <span
  m='782640'>you.</span> <span m='782780'>That</span> <span
  m='782990'>would</span> <span m='783090'>be</span> <span
  m='783250'>like</span> <span m='783480'>the</span> <span
  m='783560'>worst</span> <span m='783950'>test</span> <span
  m='784210'>ever</span> <span m='785420'>for</span> <span
  m='785550'>international</span> <span m='786200'>students.</span> <span
  m='786920'>Ah,</span> <span m='787010'>if you don't</span> <span
  m='787250'>know</span> <span m='787400'>these</span> <span
  m='787670'>ten</span> <span m='787890'>characters</span> <span
  m='789430'>as</span> <span m='789710'>vampires,</span> <span
  m='790320'>you</span> <span m='790560'>lose.</span> </p><p><span
  m='792270'>All</span> <span m='792350'>right,</span> <span
  m='792640'>so</span> <span m='793810'>what</span> <span
  m='793980'>about</span> <span m='794380'>that</span> <span
  m='794630'>sparkly</span> <span m='795390'>equals</span> <span
  m='795810'>yes</span> <span m='796430'>is</span> <span m='796570'>a</span>
  <span m='796610'>vampire,</span> <span m='797940'>and</span> <span
  m='798220'>if</span> <span m='798320'>it's</span> <span m='798510'>not</span>
  <span m='798790'>sparkly,</span> <span m='799160'>it's</span> <span
  m='799290'>not</span> <span m='799490'>a</span> <span
  m='799530'>vampire?</span> <span m='800770'>This</span> <span
  m='800920'>is</span> <span m='801010'>guaranteed</span> <span
  m='801370'>not</span> <span m='801550'>to</span> <span m='801620'>go</span>
  <span m='801800'>well.</span> <span m='802050'>What</span> <span
  m='802190'>do</span> <span m='802230'>you</span> <span m='802330'>think</span>
  <span m='802520'>it's</span> <span m='802660'>going</span> <span
  m='802750'>to</span> <span m='802790'>get</span> <span
  m='802960'>wrong?</span> </p><p><span m='804875'>AUDIENCE: For sparkly?</span>
  </p><p><span m='806330'>PROFESSOR: Yeah,</span> <span m='806660'>sparkly
  equals</span> <span m='807010'>yes are the</span> <span m='807380'>only
  vampires.</span> </p><p><span m='809223'>AUDIENCE: [INAUDIBLE]</span> <span
  m='809714'>wrong.</span> <span m='810205'>Angel's</span> <span
  m='811187'>going to be</span> <span m='811678'>wrong.</span> <span
  m='814133'>Saya--</span> <span m='816045'>so</span> <span m='816470'>1,
  2,</span> <span m='816925'>4,</span> <span m='818290'>5,</span> <span
  m='819120'>6,</span> <span m='820880'>7,</span> <span m='823030'>and</span>
  <span m='823475'>8.</span> </p><p><span m='823920'>PROFESSOR: And 8--</span>
  <span m='824360'>yes,</span> <span m='824790'>that's</span> <span
  m='824970'>right.</span> <span m='825250'>It gets 1,</span> <span
  m='825530'>2, 4,</span> <span m='825870'>5, 6, 7,</span> <span
  m='826080'>and</span> <span m='826480'>8</span> <span m='826970'>wrong.</span>
  <span m='827950'>That's</span> <span m='828160'>pretty</span> <span
  m='828420'>awful.</span> <span m='830980'>But</span> <span
  m='831400'>dammit,</span> <span m='831610'>it</span> <span
  m='831940'>gets</span> <span m='832190'>Edward</span> <span
  m='832500'>Cullen</span> <span m='832940'>right.</span> <span
  m='833760'>And</span> <span m='833870'>he's</span> <span
  m='834120'>hard</span> <span m='834370'>to</span> <span m='834440'>get</span>
  <span m='834670'>correct</span> <span m='836850'>due</span> <span
  m='837030'>to the</span> <span m='837130'>fact that</span> <span
  m='837330'>he's</span> <span m='837600'>not</span> <span
  m='837830'>very</span> <span m='838020'>much</span> <span
  m='838290'>like</span> <span m='838430'>a</span> <span
  m='838480'>vampire.</span> <span m='838860'>He's</span> <span m='839240'>more
  of a</span> <span m='839540'>superhero</span> <span m='839950'>who</span>
  <span m='840360'>says</span> <span m='840620'>he's a</span> <span
  m='840770'>vampire.</span> </p><p><span m='842100'>OK,</span> <span
  m='843060'>so</span> <span m='843710'>next,</span> <span
  m='844240'>number</span> <span m='844610'>of</span> <span
  m='844700'>romantic</span> <span m='845190'>interest</span> <span
  m='845620'>greater</span> <span m='845890'>than</span> <span
  m='846110'>two.</span> <span m='846620'>So if</span> <span
  m='846920'>they</span> <span m='847120'>have</span> <span
  m='848270'>more</span> <span m='848520'>than</span> <span
  m='848720'>two</span> <span m='848930'>romantic</span> <span
  m='849270'>interest,</span> <span m='849580'>they're a</span> <span
  m='849760'>vampire.</span> <span m='850510'>And</span> <span
  m='850680'>otherwise,</span> <span m='851060'>they're</span> <span
  m='851210'>not</span> <span m='851450'>a</span> <span
  m='851490'>vampire.</span> <span m='852520'>So</span> <span
  m='853080'>which</span> <span m='853260'>ones</span> <span
  m='853440'>would</span> <span m='853530'>that</span> <span
  m='854530'>get</span> <span m='854720'>wrong?</span> <span
  m='855371'>Hm?</span> </p><p><span m='855852'>AUDIENCE: 3 and 10.</span>
  </p><p><span m='856333'>PROFESSOR: Just 3 and</span> <span
  m='856814'>10,</span> <span m='857295'>that's</span> <span
  m='857776'>right.</span> <span m='858740'>Because</span> <span
  m='859190'>Circe</span> <span m='860000'>had</span> <span
  m='861510'>Odysseus.</span> <span m='862850'>She</span> <span
  m='863180'>had</span> <span m='863600'>Telemachus.</span> <span
  m='864360'>Actually,</span> <span m='865220'>she</span> <span
  m='865410'>had</span> <span m='865590'>that</span> <span m='865740'>guy
  she</span> <span m='866120'>turned</span> <span m='866290'>into</span> <span
  m='866460'>a</span> <span m='866500'>woodpecker.</span> <span
  m='867360'>She</span> <span m='867510'>had</span> <span m='868380'>that</span>
  <span m='868600'>other</span> <span m='868860'>guy</span> <span
  m='869360'>who</span> <span m='869680'>was</span> <span m='870080'>a</span>
  <span m='870320'>sea</span> <span m='870590'>god</span> <span
  m='870930'>who</span> <span m='871510'>caused</span> <span m='871850'>her to
  turn</span> <span m='872250'>Scylla</span> <span m='872570'>into</span> <span
  m='872850'>the</span> <span m='872950'>nine-headed</span> <span
  m='873490'>thing,</span> <span m='873800'>and</span> <span
  m='874115'>probably</span> <span m='874430'>at least</span> <span
  m='874880'>one</span> <span m='875060'>other</span> <span
  m='875260'>person.</span> <span m='876130'>So</span> <span
  m='876750'>Circe</span> <span m='877050'>it</span> <span
  m='877310'>gets</span> <span m='877450'>wrong.</span> </p><p><span
  m='877770'>And it</span> <span m='877970'>also</span> <span
  m='878270'>gets</span> <span m='878540'>Edward</span> <span
  m='878830'>Cullen</span> <span m='879120'>wrong</span> <span
  m='879420'>because</span> <span m='879830'>he</span> <span
  m='879940'>only</span> <span m='880140'>has</span> <span
  m='880340'>one.</span> <span m='881530'>So</span> <span m='882660'>3
  and</span> <span m='882680'>10.</span> <span m='885240'>You</span> <span
  m='885370'>can</span> <span m='885490'>tell</span> <span m='885690'>I</span>
  <span m='885810'>thought</span> <span m='886140'>about</span> <span
  m='886370'>this</span> <span m='886530'>problem</span> <span
  m='887150'>when</span> <span m='887350'>I</span> <span m='887370'>was</span>
  <span m='887540'>writing</span> <span m='887820'>it</span> <span
  m='887900'>up.</span> <span m='888430'>I</span> <span m='888590'>wrote</span>
  <span m='888830'>this</span> <span m='889000'>one.</span> </p><p><span
  m='889580'>All right,</span> <span m='890710'>number</span> <span
  m='891060'>of</span> <span m='891300'>romantic</span> <span
  m='891580'>interest</span> <span m='891960'>greater</span> <span
  m='892210'>than</span> <span m='892430'>four.</span> <span
  m='893400'>So</span> <span m='893690'>it's</span> <span m='893790'>a</span>
  <span m='893850'>little</span> <span m='894100'>bit</span> <span
  m='894260'>different</span> <span m='894570'>this</span> <span
  m='894760'>time.</span> <span m='895460'>Now</span> <span
  m='895650'>you</span> <span m='895740'>have to</span> <span
  m='895900'>have</span> <span m='896080'>at</span> <span
  m='896160'>least</span> <span m='896400'>four</span> <span
  m='896770'>romantic</span> <span m='897270'>interests--</span> <span
  m='898700'>or actually,</span> <span m='899050'>greater</span> <span
  m='899470'>than</span> <span m='899690'>four,</span> <span
  m='899930'>but</span> <span m='900050'>there</span> <span
  m='900190'>are</span> <span m='900290'>none that are</span> <span
  m='900620'>exactly</span> <span m='900970'>four--</span> <span
  m='901580'>to</span> <span m='901650'>be</span> <span
  m='901730'>classified</span> <span m='902200'>as</span> <span
  m='902300'>a</span> <span m='902340'>vampire.</span> <span
  m='903100'>Which</span> <span m='903170'>ones do</span> <span
  m='903340'>you</span> <span m='903450'>think</span> <span
  m='903570'>it's</span> <span m='903730'>going</span> <span m='903890'>to
  get</span> <span m='904010'>wrong?</span> </p><p><span m='904270'>AUDIENCE:
  3,</span> <span m='905683'>4,</span> <span m='906625'>10.</span> </p><p><span
  m='909460'>PROFESSOR: Yup,</span> <span m='912600'>it</span> <span
  m='912920'>is</span> <span m='913260'>going</span> <span m='913440'>to</span>
  <span m='913490'>get</span> <span m='913680'>3,</span> <span
  m='913970'>4,</span> <span m='914430'>and 10</span> <span
  m='914846'>wrong.</span> <span m='916510'>Because</span> <span
  m='916740'>now,</span> <span m='918110'>you</span> <span m='918330'>run</span>
  <span m='918550'>into</span> <span m='918780'>the</span> <span
  m='919050'>fact</span> <span m='919330'>that</span> <span
  m='921970'>Saya</span> <span m='922630'>has</span> <span
  m='923400'>that</span> <span m='923700'>blond</span> <span
  m='924170'>[INAUDIBLE]</span> <span m='924570'>guy,</span> <span
  m='925150'>Haji,</span> <span m='925750'>and</span> <span
  m='926330'>Kai.</span> <span m='927250'>So</span> <span m='928310'>the</span>
  <span m='928460'>last</span> <span m='929040'>of</span> <span
  m='929350'>the</span> <span m='929510'>positive</span> <span
  m='930080'>ones--</span> <span m='930390'>because</span> <span
  m='932180'>I</span> <span m='932240'>claim I can</span> <span
  m='932400'>derive</span> <span m='932740'>all</span> <span
  m='932860'>the</span> <span m='932940'>negative</span> <span m='933290'>ones
  if</span> <span m='933550'>you</span> <span m='933690'>guys</span> <span
  m='933890'>give me</span> <span m='934040'>the</span> <span
  m='934140'>positive</span> <span m='934580'>ones.</span> <span m='935220'>The
  last</span> <span m='935470'>of the</span> <span m='935540'>positive</span>
  <span m='935830'>ones</span> <span m='936000'>is</span> <span
  m='936200'>everybody's</span> <span m='936640'>a</span> <span
  m='936690'>vampire.</span> <span m='936970'>Who does</span> <span
  m='937250'>that</span> <span m='937650'>get</span> <span
  m='937760'>wrong?</span> </p><p><span m='939393'>AUDIENCE: 8,</span> <span
  m='939874'>9,</span> <span m='940355'>10.</span> </p><p><span
  m='940836'>PROFESSOR: Yes,</span> <span m='942280'>OK.</span> <span
  m='946210'>Now,</span> <span m='947010'>I</span> <span m='947170'>can</span>
  <span m='947340'>derive</span> <span m='947650'>all</span> <span
  m='947780'>the</span> <span m='947870'>negative</span> <span m='948220'>ones
  from</span> <span m='948680'>this</span> <span m='950280'>without</span> <span
  m='950590'>a</span> <span m='950640'>sweat.</span> <span
  m='951750'>Evil</span> <span m='952010'>equals</span> <span
  m='952300'>no--</span> <span m='953140'>well,</span> <span
  m='953590'>it's</span> <span m='953740'>1,</span> <span m='954140'>6,</span>
  <span m='954540'>7,</span> <span m='954940'>8, 9,</span> <span
  m='955405'>10</span> <span m='960530'>without</span> <span
  m='960900'>looking</span> <span m='961130'>at</span> <span
  m='961220'>the</span> <span m='961330'>chart.</span> </p><p><span
  m='965720'>Raise</span> <span m='966130'>your</span> <span
  m='966370'>hand</span> <span m='966650'>if you</span> <span
  m='966770'>see</span> <span m='966990'>why</span> <span m='967440'>it's</span>
  <span m='967610'>1,</span> <span m='967810'>6,</span> <span m='968010'>7,
  8,</span> <span m='968190'>9, 10</span> <span m='968680'>without</span> <span
  m='968990'>looking</span> <span m='969190'>at</span> <span
  m='969260'>the</span> <span m='969360'>chart.</span> <span m='971390'>Raise
  your</span> <span m='971530'>hand</span> <span m='971790'>if</span> <span
  m='971850'>you</span> <span m='971990'>don't.</span> <span
  m='973780'>Nobody,</span> <span m='974480'>OK--</span> <span
  m='975400'>wait.</span> <span m='975910'>One</span> <span
  m='976150'>hand.</span> <span m='976920'>OK,</span> <span m='977240'>I</span>
  <span m='977330'>saw</span> <span m='977510'>another</span> <span
  m='977760'>one</span> <span m='977880'>back</span> <span
  m='978090'>there</span> <span m='978270'>too</span> <span
  m='978470'>later.</span> <span m='978730'>They</span> <span
  m='978860'>were</span> <span m='978940'>just</span> <span
  m='979150'>more</span> <span m='979310'>tentative.</span> </p><p><span
  m='979740'>OK,</span> <span m='980150'>it's</span> <span m='980300'>the</span>
  <span m='980390'>complement</span> <span m='980980'>of</span> <span
  m='982180'>A</span> <span m='982800'>because</span> <span m='983030'>A
  is</span> <span m='983410'>evil</span> <span m='983540'>equals</span> <span
  m='983800'>yes is</span> <span m='984150'>a</span> <span
  m='984220'>vampire.</span> <span m='985200'>It</span> <span
  m='985320'>gets</span> <span m='985530'>2, 3,</span> <span
  m='985820'>4,</span> <span m='985990'>and</span> <span m='986080'>5</span>
  <span m='986370'>wrong.</span> <span m='986690'>So</span> <span
  m='986950'>therefore,</span> <span m='987360'>evil</span> <span
  m='987590'>equals</span> <span m='987920'>no is</span> <span
  m='988330'>a</span> <span m='988440'>vampire</span> <span m='988870'>is</span>
  <span m='989080'>guaranteed</span> <span m='989470'>to</span> <span
  m='989650'>get</span> <span m='989850'>all</span> <span m='990040'>the</span>
  <span m='990150'>opposite</span> <span m='990530'>ones.</span> </p><p><span
  m='990810'>AUDIENCE: Oh,</span> <span m='991090'>we could</span> <span
  m='991475'>have looked</span> <span m='991860'>at</span> <span m='992245'>that
  too?</span> </p><p><span m='992630'>PROFESSOR: Yeah,</span> <span
  m='992960'>we're</span> <span m='993060'>looking</span> <span
  m='993340'>here,</span> <span m='993510'>but</span> <span
  m='993650'>we're</span> <span m='993770'>not</span> <span
  m='993980'>looking</span> <span m='994180'>at</span> <span
  m='994290'>the</span> <span m='994370'>big</span> <span
  m='994550'>chart</span> <span m='994810'>there.</span> </p><p><span
  m='995370'>AUDIENCE: You can</span> <span m='995780'>look at any?</span>
  </p><p><span m='996190'>PROFESSOR: Oh,</span> <span m='996500'>yeah.</span>
  <span m='996710'>If you</span> <span m='996830'>can't</span> <span
  m='997100'>look</span> <span m='997260'>at</span> <span
  m='997320'>anything,</span> <span m='997710'>then you're</span> <span
  m='997950'>screwed--</span> <span m='999590'>unless</span> <span
  m='1000920'>not</span> <span m='1001380'>only are</span> <span m='1001480'>you
  as</span> <span m='1001780'>hardcore</span> <span m='1002490'>as</span> <span
  m='1002870'>this</span> <span m='1003080'>guy,</span> <span
  m='1003250'>but</span> <span m='1003380'>you've</span> <span
  m='1003540'>also</span> <span m='1003880'>memorized</span> <span
  m='1004370'>the</span> <span m='1004460'>numbers.</span> <span
  m='1006700'>All</span> <span m='1006800'>right,</span> <span
  m='1007270'>so</span> <span m='1007540'>emo</span> <span
  m='1007890'>equals</span> <span m='1008210'>no</span> <span
  m='1008670'>is</span> <span m='1008970'>going</span> <span
  m='1009100'>to</span> <span m='1009150'>be</span> <span m='1009380'>2,</span>
  <span m='1010190'>3,</span> <span m='1010980'>4,</span> <span
  m='1012020'>5,</span> <span m='1013660'>8,</span> <span m='1015100'>10.</span>
  <span m='1016470'>Transforms</span> <span m='1017050'>equals</span> <span
  m='1017320'>no</span> <span m='1017630'>is</span> <span m='1017870'>1,
  2,</span> <span m='1019842'>6,</span> <span m='1020828'>7,</span> <span
  m='1021321'>9,</span> <span m='1021814'>10.</span> <span
  m='1023450'>Sparkle</span> <span m='1023890'>equals</span> <span
  m='1024280'>no</span> <span m='1024990'>is</span> <span m='1026540'>3,</span>
  <span m='1028025'>9,</span> <span m='1029510'>10.</span> </p><p><span
  m='1031490'>Romantic</span> <span m='1031859'>interest</span> <span
  m='1032140'>less</span> <span m='1032440'>than</span> <span
  m='1032630'>two</span> <span m='1032910'>is</span> <span
  m='1033050'>everything</span> <span m='1033640'>except</span> <span
  m='1033859'>3 and</span> <span m='1034140'>10--</span> <span
  m='1034440'>1,</span> <span m='1034940'>2,</span> <span m='1035440'>4,</span>
  <span m='1035940'>5,</span> <span m='1036940'>6,</span> <span
  m='1037440'>7,</span> <span m='1038440'>8,</span> <span m='1039440'>9.</span>
  <span m='1040805'>1,</span> <span m='1041715'>2,</span> <span
  m='1042625'>5,</span> <span m='1043750'>6,</span> <span m='1044579'>7,</span>
  <span m='1045520'>8,</span> <span m='1046380'>9.</span> <span
  m='1047140'>And</span> <span m='1047300'>then</span> <span
  m='1047530'>finally,</span> <span m='1048500'>everything</span> <span
  m='1048860'>but</span> <span m='1048990'>8,</span> <span m='1050400'>9,</span>
  <span m='1050750'>and</span> <span m='1050900'>10,</span> <span
  m='1051400'>so</span> <span m='1051790'>1, 2,</span> <span
  m='1052284'>3,</span> <span m='1053272'>4,</span> <span m='1053766'>5,</span>
  <span m='1054754'>6,</span> <span m='1055742'>7.</span> </p><p><span
  m='1056240'>All right,</span> <span m='1056820'>so</span> <span
  m='1057080'>when we</span> <span m='1057230'>started</span> <span
  m='1057640'>off,</span> <span m='1057860'>we</span> <span m='1057960'>know
  what</span> <span m='1058180'>everything</span> <span m='1058520'>gets</span>
  <span m='1058730'>wrong.</span> <span m='1059370'>I</span> <span
  m='1059530'>then</span> <span m='1059670'>make</span> <span
  m='1059830'>a</span> <span m='1059880'>bold</span> <span
  m='1060290'>claim,</span> <span m='1060650'>because</span> <span
  m='1061380'>there</span> <span m='1061740'>are</span> <span m='1061980'>n
  of</span> <span m='1062120'>these,</span> <span m='1062460'>which is</span>
  <span m='1062760'>14.</span> <span m='1064560'>I</span> <span m='1064980'>make
  the</span> <span m='1065200'>claim</span> <span m='1065330'>that there</span>
  <span m='1065430'>are</span> <span m='1065510'>only</span> <span
  m='1065790'>six</span> <span m='1066700'>that,</span> <span
  m='1067720'>in</span> <span m='1067860'>your</span> <span
  m='1068010'>wildest</span> <span m='1068600'>dreams,</span> <span
  m='1069130'>you</span> <span m='1069230'>would</span> <span
  m='1069360'>ever</span> <span m='1069740'>possibly</span> <span
  m='1070370'>even</span> <span m='1070620'>consider</span> <span
  m='1071370'>using</span> <span m='1072030'>ever.</span> <span
  m='1073820'>And</span> <span m='1073970'>the</span> <span
  m='1074060'>rest,</span> <span m='1074350'>you would</span> <span
  m='1074460'>never,</span> <span m='1074810'>ever</span> <span
  m='1075060'>use.</span> <span m='1076170'>Question?</span> </p><p><span
  m='1076570'>AUDIENCE: Yeah, I</span> <span m='1077066'>just have a</span>
  <span m='1077562'>question about the</span> <span m='1078554'>number of</span>
  <span m='1079050'>romantic</span> <span m='1079546'>interests.</span>
  </p><p><span m='1080042'>PROFESSOR: Yes.</span> </p><p><span
  m='1080538'>AUDIENCE: You negated</span> <span m='1081034'>it without</span>
  <span m='1081530'>an</span> <span m='1082026'>equals on</span> <span
  m='1082522'>either side.</span> </p><p><span m='1083018'>PROFESSOR: That's
  true.</span> <span m='1084010'>That works</span> <span m='1084506'>only
  because</span> <span m='1085002'>there</span> <span m='1085500'>are</span>
  <span m='1085730'>[INAUDIBLE]</span> <span m='1086045'>2 or</span> <span
  m='1086360'>4.</span> <span m='1087000'>But</span> <span m='1087250'>it</span>
  <span m='1087370'>should</span> <span m='1087530'>have</span> <span
  m='1087610'>been</span> <span m='1087740'>negated</span> <span
  m='1088140'>with</span> <span m='1088330'>a</span> <span m='1088500'>less than
  or</span> <span m='1088710'>equal.</span> <span m='1089300'>I'm</span> <span
  m='1089430'>copying</span> <span m='1089820'>off of</span> <span
  m='1089970'>the</span> <span m='1090190'>quiz.</span> <span
  m='1091250'>But</span> <span m='1091590'>yes.</span> <span
  m='1092780'>I</span> <span m='1092920'>noticed</span> <span
  m='1093190'>that</span> <span m='1093530'>this</span> <span
  m='1093690'>morning</span> <span m='1094050'>when</span> <span
  m='1094320'>I</span> <span m='1094470'>was</span> <span
  m='1095320'>putting</span> <span m='1095490'>myself</span> <span
  m='1095790'>through my</span> <span m='1095910'>pace.</span> <span
  m='1096000'>I'm</span> <span m='1096170'>like,</span> <span
  m='1096510'>there's</span> <span m='1096680'>not</span> <span
  m='1096840'>a</span> <span m='1096910'>less</span> <span
  m='1097120'>than</span> <span m='1097200'>or</span> <span
  m='1097250'>equal</span> <span m='1097440'>to.</span> <span
  m='1097530'>Wait</span> <span m='1097720'>a</span> <span
  m='1097760'>minute.</span> <span m='1098070'>And then,</span> <span
  m='1098350'>oh,</span> <span m='1098520'>wait.</span> <span
  m='1099750'>It</span> <span m='1099870'>doesn't</span> <span
  m='1100140'>have</span> <span m='1100350'>any</span> <span
  m='1100560'>2's</span> <span m='1100850'>or 4's.</span> </p><p><span
  m='1101720'>Actually,</span> <span m='1102190'>I don't</span> <span
  m='1102460'>remember</span> <span m='1102900'>writing</span> <span
  m='1103170'>them all</span> <span m='1103220'>as</span> <span
  m='1103500'>5's</span> <span m='1103780'>and</span> <span
  m='1103890'>3's.</span> <span m='1104280'>It's</span> <span
  m='1104410'>possible</span> <span m='1104860'>that</span> <span
  m='1105070'>somebody</span> <span m='1105670'>else</span> <span
  m='1106310'>in</span> <span m='1106550'>the</span> <span
  m='1106640'>post-editing</span> <span m='1107200'>process</span> <span
  m='1107690'>changed</span> <span m='1107950'>them</span> <span
  m='1108080'>all</span> <span m='1108350'>to</span> <span m='1108450'>be</span>
  <span m='1108660'>about</span> <span m='1108960'>the</span> <span
  m='1109030'>same</span> <span m='1109300'>number,</span> <span
  m='1110410'>and</span> <span m='1111020'>then</span> <span
  m='1111460'>changed</span> <span m='1111780'>the</span> <span
  m='1111890'>less</span> <span m='1112150'>than</span> <span
  m='1112280'>or</span> <span m='1112360'>equal</span> <span
  m='1112590'>tos</span> <span m='1112960'>to be</span> <span
  m='1113100'>less</span> <span m='1113330'>confusing.</span> <span
  m='1113840'>It's</span> <span m='1113950'>possible</span> <span
  m='1114250'>I</span> <span m='1114340'>had</span> <span
  m='1114600'>Circe</span> <span m='1114980'>at</span> <span
  m='1115220'>4,</span> <span m='1115660'>and</span> <span
  m='1115800'>there</span> <span m='1115890'>was</span> <span
  m='1115990'>an</span> <span m='1116110'>equal</span> <span
  m='1116410'>to</span> <span m='1116580'>somewhere.</span> <span
  m='1117270'>And</span> <span m='1117570'>they were</span> <span
  m='1117710'>like,</span> <span m='1117920'>forget</span> <span
  m='1118240'>it.</span> <span m='1118980'>Because</span> <span
  m='1119190'>I</span> <span m='1119250'>can't</span> <span
  m='1119550'>think</span> <span m='1119710'>of</span> <span
  m='1119850'>the</span> <span m='1119930'>fifth</span> <span
  m='1120230'>romantic</span> <span m='1120440'>interest</span> <span
  m='1120620'>for</span> <span m='1120740'>her.</span> </p><p><span
  m='1122390'>So</span> <span m='1122720'>yes,</span> <span
  m='1123400'>normally,</span> <span m='1123790'>you</span> <span
  m='1123890'>would</span> <span m='1124010'>have</span> <span
  m='1124300'>to</span> <span m='1124410'>negate</span> <span
  m='1124710'>it</span> <span m='1124820'>with an</span> <span
  m='1125210'>equal</span> <span m='1125500'>to</span> <span
  m='1125630'>sign,</span> <span m='1125980'>but</span> <span
  m='1126220'>there</span> <span m='1126370'>happened</span> <span
  m='1126700'>to</span> <span m='1126840'>not</span> <span m='1127120'>be</span>
  <span m='1127270'>any</span> <span m='1127530'>things</span> <span
  m='1127890'>that</span> <span m='1127990'>are</span> <span
  m='1128110'>equal</span> <span m='1128380'>to</span> <span m='1128640'>4
  or</span> <span m='1129030'>2</span> <span m='1129190'>here.</span> <span
  m='1129750'>So</span> <span m='1130740'>they</span> <span
  m='1130840'>get</span> <span m='1131080'>away</span> <span
  m='1131340'>with</span> <span m='1131520'>it</span> <span
  m='1131930'>this</span> <span m='1132320'>time.</span> <span
  m='1133640'>But</span> <span m='1135775'>it's</span> <span
  m='1136070'>good</span> <span m='1136250'>practice.</span> </p><p><span
  m='1136970'>So</span> <span m='1137090'>I'm</span> <span
  m='1137350'>claiming</span> <span m='1137660'>that in</span> <span
  m='1137800'>our</span> <span m='1137940'>wildest</span> <span
  m='1138310'>dreams,</span> <span m='1138610'>we'd</span> <span
  m='1138780'>only</span> <span m='1139200'>ever</span> <span
  m='1139460'>want</span> <span m='1139810'>to use</span> <span m='1140160'>six
  of</span> <span m='1140320'>these</span> <span m='1141110'>ever.</span> <span
  m='1141800'>And</span> <span m='1141920'>the</span> <span
  m='1142010'>other</span> <span m='1142330'>eight,</span> <span
  m='1142690'>forget</span> <span m='1142995'>it.</span> <span
  m='1144190'>So</span> <span m='1145970'>let's</span> <span
  m='1146240'>see.</span> <span m='1147860'>I</span> <span
  m='1148090'>will</span> <span m='1148370'>call on</span> <span
  m='1148700'>people</span> <span m='1148920'>at</span> <span
  m='1149040'>random</span> <span m='1149680'>to--</span> <span
  m='1150690'>the</span> <span m='1150820'>first</span> <span
  m='1151100'>people</span> <span m='1151280'>obviously are</span> <span
  m='1151610'>getting</span> <span m='1151780'>it</span> <span
  m='1151860'>really</span> <span m='1152280'>easy--</span> <span
  m='1153100'>to</span> <span m='1153300'>tell</span> <span
  m='1153480'>me</span> <span m='1153620'>which</span> <span
  m='1153910'>of</span> <span m='1154030'>these</span> <span
  m='1154330'>you</span> <span m='1154530'>think</span> <span
  m='1154860'>that</span> <span m='1155000'>you</span> <span
  m='1155110'>might</span> <span m='1155380'>ever</span> <span
  m='1155610'>want</span> <span m='1155750'>to</span> <span
  m='1155790'>use.</span> <span m='1156610'>Give</span> <span
  m='1156760'>me</span> <span m='1156870'>one</span> <span
  m='1157080'>you</span> <span m='1157160'>might</span> <span
  m='1157440'>ever</span> <span m='1157690'>want</span> <span
  m='1157850'>to</span> <span m='1157890'>use.</span> </p><p><span
  m='1158733'>AUDIENCE: E.</span> </p><p><span m='1159680'>PROFESSOR:
  Why,</span> <span m='1159810'>E?</span> <span m='1160490'>Of</span> <span
  m='1160900'>course.</span> <span m='1161310'>That's the</span> <span
  m='1161630'>best</span> <span m='1161960'>one.</span> <span
  m='1162740'>Yes,</span> <span m='1163160'>that's</span> <span
  m='1163330'>one</span> <span m='1163660'>that you</span> <span
  m='1163840'>might ever</span> <span m='1164220'>want to use.</span> <span
  m='1165180'>I'll</span> <span m='1165370'>circle</span> <span
  m='1166600'>the</span> <span m='1166710'>ones</span> <span m='1166940'>that
  you</span> <span m='1167110'>might</span> <span m='1167250'>ever want
  to</span> <span m='1167630'>use.</span> <span m='1168780'>E--</span> <span
  m='1169290'>it</span> <span m='1169410'>only</span> <span
  m='1169620'>gets</span> <span m='1169850'>3 and</span> <span
  m='1169970'>10</span> <span m='1170340'>wrong.</span> <span
  m='1170840'>That's</span> <span m='1171040'>amazing.</span> <span
  m='1171920'>It's</span> <span m='1172150'>like</span> <span
  m='1172350'>the</span> <span m='1172430'>best</span> <span m='1172740'>class
  of</span> <span m='1173100'>[INAUDIBLE].</span> </p><p><span
  m='1174220'>OK,</span> <span m='1175060'>so</span> <span
  m='1175920'>give</span> <span m='1176050'>me</span> <span
  m='1176160'>another</span> <span m='1176440'>one</span> <span
  m='1176630'>that</span> <span m='1176750'>you</span> <span
  m='1176870'>might</span> <span m='1177150'>ever</span> <span m='1177360'>want
  to</span> <span m='1177665'>us.</span> </p><p><span m='1177970'>AUDIENCE:
  F.</span> </p><p><span m='1178433'>PROFESSOR: F.</span> <span
  m='1179360'>Let's</span> <span m='1179620'>see.</span> <span
  m='1180620'>F--</span> <span m='1181120'>F</span> <span m='1181340'>is</span>
  <span m='1181500'>great.</span> <span m='1181930'>It only</span> <span
  m='1182110'>gets</span> <span m='1182350'>three</span> <span
  m='1182510'>wrong.</span> <span m='1183820'>Do</span> <span
  m='1183930'>people</span> <span m='1184240'>agree</span> <span
  m='1184530'>that</span> <span m='1184720'>you</span> <span
  m='1184910'>would</span> <span m='1185080'>ever</span> <span
  m='1185280'>want</span> <span m='1185410'>to</span> <span
  m='1185450'>use</span> <span m='1185640'>F?</span> </p><p><span
  m='1186180'>AUDIENCE: No.</span> </p><p><span m='1186810'>PROFESSOR:
  Everyone's</span> <span m='1187110'>saying</span> <span m='1187290'>no.</span>
  <span m='1188030'>Why</span> <span m='1188190'>not?</span> </p><p><span
  m='1190165'>AUDIENCE: It's like</span> <span m='1190620'>E,</span> <span
  m='1191075'>except</span> <span m='1191530'>worse.</span> </p><p><span
  m='1191990'>PROFESSOR: It's like</span> <span m='1192400'>E,</span> <span
  m='1192680'>except</span> <span m='1193120'>worse.</span> <span
  m='1194000'>It's</span> <span m='1194440'>guaranteed</span> <span
  m='1194880'>at</span> <span m='1195220'>every</span> <span
  m='1195560'>step,</span> <span m='1196005'>no</span> <span
  m='1196450'>matter</span> <span m='1196500'>what the</span> <span
  m='1196820'>weights are,</span> <span m='1197230'>to</span> <span
  m='1197370'>have a</span> <span m='1197660'>worse</span> <span
  m='1198120'>accuracy</span> <span m='1198410'>than</span> <span
  m='1198700'>E.</span> <span m='1199900'>It</span> <span m='1200060'>is</span>
  <span m='1200300'>definitely</span> <span m='1200910'>good.</span> <span
  m='1201940'>If</span> <span m='1202190'>E</span> <span
  m='1202370'>wasn't</span> <span m='1202650'>around,</span> <span
  m='1203210'>it</span> <span m='1203310'>would</span> <span
  m='1203470'>be</span> <span m='1203680'>one</span> <span m='1203860'>of</span>
  <span m='1203930'>our</span> <span m='1204040'>best</span> <span
  m='1204280'>classifiers</span> <span m='1204530'>of</span> <span
  m='1204800'>all.</span> </p><p><span m='1205580'>But</span> <span
  m='1206010'>actually,</span> <span m='1206450'>F</span> <span
  m='1206600'>is</span> <span m='1206760'>not</span> <span
  m='1207170'>one</span> <span m='1207300'>of</span> <span
  m='1207390'>the</span> <span m='1207470'>six.</span> <span
  m='1208830'>This</span> <span m='1209000'>is</span> <span
  m='1209070'>why</span> <span m='1209270'>I</span> <span m='1209740'>had</span>
  <span m='1210050'>them</span> <span m='1210310'>write</span> <span
  m='1210490'>on</span> <span m='1210630'>the</span> <span
  m='1210730'>test</span> <span m='1211070'>that</span> <span m='1211140'>there
  were</span> <span m='1211310'>six,</span> <span m='1211670'>because</span>
  <span m='1211840'>people</span> <span m='1212090'>might not</span> <span
  m='1212280'>have</span> <span m='1212470'>found</span> <span
  m='1212710'>all</span> <span m='1212860'>six.</span> <span
  m='1213870'>Because</span> <span m='1214470'>people</span> <span
  m='1214720'>who</span> <span m='1214850'>did</span> <span
  m='1215020'>figure</span> <span m='1215300'>out</span> <span
  m='1215420'>not</span> <span m='1215620'>to</span> <span m='1215700'>include
  F</span> <span m='1216130'>might</span> <span m='1216360'>not</span> <span
  m='1216570'>have</span> <span m='1216640'>figured</span> <span
  m='1216930'>out</span> <span m='1217070'>to</span> <span
  m='1217140'>include</span> <span m='1217510'>some of</span> <span
  m='1217700'>the</span> <span m='1217780'>ones</span> <span
  m='1218040'>you</span> <span m='1218150'>want</span> <span
  m='1218340'>to</span> <span m='1218380'>include.</span> <span
  m='1219470'>So--</span> </p><p><span m='1220030'>AUDIENCE: I don't</span>
  <span m='1220415'>understand why</span> <span m='1220800'>you can't</span>
  <span m='1221185'>use F.</span> </p><p><span m='1221570'>PROFESSOR: Why</span>
  <span m='1221790'>you</span> <span m='1222040'>can't</span> <span
  m='1222240'>use</span> <span m='1222380'>F,</span> <span
  m='1222640'>OK.</span> <span m='1223690'>So</span> <span m='1224970'>we</span>
  <span m='1225100'>start</span> <span m='1225490'>off with</span> <span
  m='1225600'>1/10</span> <span m='1226230'>weight</span> <span
  m='1226460'>for</span> <span m='1226600'>all</span> <span
  m='1226990'>our</span> <span m='1227790'>data</span> <span
  m='1228030'>points.</span> <span m='1228200'>But</span> <span
  m='1228350'>let's</span> <span m='1228630'>say</span> <span
  m='1228850'>during</span> <span m='1229180'>our</span> <span
  m='1229350'>time</span> <span m='1230430'>of</span> <span
  m='1230620'>boosting</span> <span m='1231190'>that</span> <span
  m='1231340'>all ten</span> <span m='1231695'>of</span> <span
  m='1232050'>the</span> <span m='1232130'>data</span> <span
  m='1232340'>points</span> <span m='1232560'>have</span> <span
  m='1232830'>now</span> <span m='1233010'>different</span> <span
  m='1233440'>weights.</span> <span m='1234470'>So</span> <span
  m='1234630'>we'll</span> <span m='1234770'>call</span> <span
  m='1235140'>whatever</span> <span m='1235330'>the</span> <span
  m='1235450'>weight</span> <span m='1235770'>of</span> <span
  m='1235980'>3</span> <span m='1236300'>is,</span> <span
  m='1236950'>which</span> <span m='1237100'>you're</span> <span
  m='1237220'>going to get</span> <span m='1237680'>wrong--</span> <span
  m='1238200'>you</span> <span m='1238320'>want</span> <span
  m='1238510'>to</span> <span m='1238630'>minimize</span> <span
  m='1239060'>the</span> <span m='1239170'>error,</span> <span
  m='1239490'>right?</span> </p><p><span m='1240200'>So</span> <span
  m='1240330'>that</span> <span m='1240510'>weight</span> <span
  m='1240710'>of</span> <span m='1240850'>3,</span> <span
  m='1241140'>which</span> <span m='1241360'>goes</span> <span
  m='1241580'>into</span> <span m='1241770'>the</span> <span m='1241890'>error
  of</span> <span m='1242300'>the</span> <span m='1242400'>E,</span> <span
  m='1242870'>is</span> <span m='1243090'>x.</span> <span m='1244080'>The</span>
  <span m='1244170'>weight</span> <span m='1244300'>of</span> <span
  m='1244600'>10 can</span> <span m='1244900'>be</span> <span
  m='1245020'>y.</span> <span m='1245600'>So</span> <span m='1246770'>if</span>
  <span m='1246830'>you're</span> <span m='1246940'>thinking</span> <span
  m='1247280'>of</span> <span m='1247380'>choosing</span> <span
  m='1247800'>3,</span> <span m='1248410'>you</span> <span
  m='1248520'>know</span> <span m='1248700'>you're--</span> <span
  m='1248900'>oh, sorry.</span> <span m='1249120'>If you're</span> <span
  m='1249560'>thinking of</span> <span m='1249710'>choosing</span> <span
  m='1249990'>E,</span> <span m='1250310'>your</span> <span
  m='1250630'>error</span> <span m='1250880'>is</span> <span
  m='1251060'>x</span> <span m='1251290'>plus</span> <span m='1251530'>y.</span>
  </p><p><span m='1252230'>AUDIENCE: Sure.</span> </p><p><span
  m='1252660'>PROFESSOR: If</span> <span m='1252780'>you're</span> <span
  m='1252880'>thinking</span> <span m='1253120'>of</span> <span
  m='1253200'>choosing</span> <span m='1253610'>F,</span> <span
  m='1254330'>your</span> <span m='1254520'>error</span> <span m='1254800'>is
  x</span> <span m='1255050'>plus</span> <span m='1255190'>y</span> <span
  m='1255360'>plus</span> <span m='1255760'>z,</span> <span
  m='1256140'>where</span> <span m='1256180'>z</span> <span
  m='1256520'>is</span> <span m='1256660'>the</span> <span m='1256760'>error
  of</span> <span m='1257040'>4.</span> <span m='1257920'>And</span> <span
  m='1258100'>since</span> <span m='1258350'>you're</span> <span
  m='1258460'>never</span> <span m='1258720'>going to have</span> <span
  m='1258920'>a</span> <span m='1258950'>negative</span> <span
  m='1259700'>weight,</span> <span m='1260280'>x</span> <span
  m='1260440'>plus</span> <span m='1260590'>y</span> <span
  m='1260750'>plus</span> <span m='1261010'>z</span> <span m='1261170'>is</span>
  <span m='1261380'>always</span> <span m='1261940'>greater</span> <span
  m='1262280'>than</span> <span m='1262760'>x</span> <span
  m='1262990'>plus</span> <span m='1263170'>y.</span> </p><p><span
  m='1263480'>AUDIENCE: You can't</span> <span m='1263770'>choose something
  without</span> <span m='1264060'>the 3 and</span> <span m='1264520'>the 10
  anymore</span> <span m='1264977'>because you</span> <span m='1265434'>already
  chose</span> <span m='1265891'>E.</span> </p><p><span m='1266350'>PROFESSOR:
  That's--</span> <span m='1266880'>yes,</span> <span m='1267720'>you
  would</span> <span m='1267920'>probably</span> <span m='1268420'>choose
  something</span> <span m='1270540'>that</span> <span m='1271010'>didn't</span>
  <span m='1271300'>get the</span> <span m='1271520'>three</span> <span
  m='1271610'>and</span> <span m='1271680'>the</span> <span
  m='1271780'>ten</span> <span m='1272010'>wrong.</span> <span
  m='1272250'>But</span> <span m='1272390'>you</span> <span
  m='1272470'>would</span> <span m='1272600'>certainly</span> <span
  m='1273020'>never</span> <span m='1273430'>choose</span> <span
  m='1273730'>F</span> <span m='1274150'>ever</span> <span
  m='1275340'>because</span> <span m='1275610'>it's</span> <span
  m='1275770'>always</span> <span m='1276140'>worse</span> <span
  m='1276480'>than</span> <span m='1276590'>E.</span> <span
  m='1277270'>In</span> <span m='1277440'>fact,</span> <span
  m='1277750'>this</span> <span m='1277990'>is</span> <span
  m='1278080'>exactly</span> <span m='1278600'>the</span> <span
  m='1278710'>process</span> <span m='1279370'>that</span> <span
  m='1279690'>will</span> <span m='1279790'>allow</span> <span
  m='1280040'>you</span> <span m='1280160'>to</span> <span
  m='1280230'>find</span> <span m='1280470'>the</span> <span
  m='1280550'>correct</span> <span m='1280820'>six.</span> <span
  m='1281600'>And</span> <span m='1281970'>by</span> <span
  m='1282270'>"will,"</span> <span m='1282710'>I</span> <span
  m='1282820'>mean</span> <span m='1283140'>"can."</span> <span m='1283930'>And
  by</span> <span m='1284070'>"can,"</span> <span m='1284390'>I</span> <span
  m='1284480'>mean,</span> <span m='1284800'>let's</span> <span
  m='1285030'>see</span> <span m='1285150'>if you</span> <span
  m='1285310'>guys</span> <span m='1285570'>get</span> <span
  m='1285740'>it.</span> <span m='1286210'>Give</span> <span
  m='1286350'>me</span> <span m='1286440'>another</span> <span
  m='1286720'>one</span> <span m='1286880'>of</span> <span
  m='1286990'>the</span> <span m='1287080'>six that</span> <span m='1287450'>you
  might</span> <span m='1287570'>keep.</span> </p><p><span m='1288580'>AUDIENCE:
  K.</span> </p><p><span m='1289590'>PROFESSOR: K</span> <span
  m='1290550'>is</span> <span m='1290900'>the</span> <span
  m='1290990'>claim--</span> <span m='1291470'>sparkly.</span> <span
  m='1292520'>K,</span> <span m='1293660'>I'm</span> <span
  m='1293860'>going</span> <span m='1294020'>to</span> <span
  m='1294080'>say</span> <span m='1294420'>will</span> <span
  m='1295340'>lose</span> <span m='1295720'>for</span> <span
  m='1295840'>the</span> <span m='1295940'>same</span> <span
  m='1296160'>reason</span> <span m='1296560'>as</span> <span
  m='1296940'>F.</span> <span m='1298170'>It's</span> <span
  m='1298440'>3,</span> <span m='1298816'>9,</span> <span m='1299192'>and
  10.</span> <span m='1300120'>It's</span> <span m='1300580'>essentially</span>
  <span m='1301270'>similar</span> <span m='1301660'>to</span> <span
  m='1302200'>3,</span> <span m='1302400'>4,</span> <span m='1302650'>and</span>
  <span m='1302780'>10.</span> </p><p><span m='1303970'>So--</span> <span
  m='1304350'>oh,</span> <span m='1304490'>by</span> <span
  m='1304630'>the</span> <span m='1304710'>way,</span> <span
  m='1305030'>we</span> <span m='1305160'>should</span> <span
  m='1305380'>not</span> <span m='1305620'>be</span> <span
  m='1305790'>only</span> <span m='1306070'>going</span> <span
  m='1306300'>for</span> <span m='1306410'>the</span> <span
  m='1306490'>ones</span> <span m='1308130'>with</span> <span
  m='1308330'>the</span> <span m='1308410'>fewest</span> <span
  m='1308980'>incorrect.</span> <span m='1310380'>You</span> <span
  m='1310510'>need</span> <span m='1310680'>to</span> <span
  m='1310730'>be</span> <span m='1310830'>going</span> <span
  m='1311070'>for</span> <span m='1311240'>ones</span> <span
  m='1311620'>that</span> <span m='1312290'>do</span> <span
  m='1312410'>not</span> <span m='1312730'>have</span> <span
  m='1313280'>something</span> <span m='1313630'>that</span> <span
  m='1313760'>is</span> <span m='1313880'>strictly</span> <span
  m='1314280'>better.</span> <span m='1315030'>In</span> <span
  m='1315180'>this</span> <span m='1315340'>case,</span> <span
  m='1315610'>3</span> <span m='1315860'>and</span> <span m='1316030'>10</span>
  <span m='1316270'>wrong</span> <span m='1316640'>is</span> <span
  m='1316760'>strictly</span> <span m='1317070'>better</span> <span
  m='1317290'>than</span> <span m='1317420'>getting</span> <span m='1317620'>3,
  9,</span> <span m='1317960'>and</span> <span m='1318300'>10</span> <span
  m='1318640'>wrong.</span> <span m='1319660'>Question?</span> </p><p><span
  m='1319990'>AUDIENCE: Oh,</span> <span m='1320438'>I was</span> <span
  m='1320886'>going to</span> <span m='1321334'>say</span> <span
  m='1321782'>transform.</span> </p><p><span m='1322230'>PROFESSOR: You
  were</span> <span m='1322560'>going to say</span> <span
  m='1322720'>transform.</span> <span m='1323490'>You are</span> <span
  m='1323856'>going to</span> <span m='1324222'>be</span> <span
  m='1324790'>correct.</span> <span m='1326460'>Transforms</span> <span
  m='1327000'>is</span> <span m='1327190'>one</span> <span m='1327350'>of
  the</span> <span m='1327470'>ones</span> <span m='1327790'>we</span> <span
  m='1327930'>need,</span> <span m='1328250'>C.</span> <span
  m='1328996'>3,</span> <span m='1329370'>4,</span> <span m='1329590'>5
  and</span> <span m='1329960'>8--</span> <span m='1330180'>there's</span> <span
  m='1330370'>nothing</span> <span m='1330910'>down</span> <span
  m='1331270'>here</span> <span m='1332450'>that</span> <span
  m='1332550'>gets</span> <span m='1332860'>fewer</span> <span
  m='1333280'>than</span> <span m='1333490'>those</span> <span
  m='1333860'>wrong.</span> <span m='1335720'>There's</span> <span
  m='1335870'>nothing</span> <span m='1336160'>that</span> <span
  m='1336200'>gets</span> <span m='1336410'>us</span> <span
  m='1336590'>3,</span> <span m='1336800'>4,</span> <span m='1337040'>5</span>
  <span m='1337390'>wrong,</span> <span m='1337650'>for</span> <span
  m='1337810'>instance.</span> <span m='1340800'>Yeah, there's</span> <span
  m='1341210'>no</span> <span m='1341350'>way</span> <span m='1341480'>to</span>
  <span m='1341530'>get</span> <span m='1341830'>3,</span> <span
  m='1342120'>4</span> <span m='1344110'>wrong</span> <span
  m='1345030'>without</span> <span m='1345530'>getting</span> <span
  m='1345750'>either</span> <span m='1345950'>10</span> <span
  m='1346200'>wrong,</span> <span m='1346430'>or</span> <span
  m='1346580'>5</span> <span m='1346860'>and 8</span> <span
  m='1347180'>wrong.</span> </p><p><span m='1348028'>AUDIENCE: So why</span>
  <span m='1348944'>is</span> <span m='1349402'>the 8</span> <span
  m='1349860'>like that?</span> </p><p><span m='1350780'>PROFESSOR: What?</span>
  </p><p><span m='1351260'>AUDIENCE: Why not</span> <span m='1351643'>G?</span>
  </p><p><span m='1352410'>PROFESSOR: Why not</span> <span m='1352690'>G?</span>
  <span m='1354030'>Why</span> <span m='1354360'>not?</span> <span
  m='1355030'>Why not</span> <span m='1355370'>G?</span> <span
  m='1355430'>Let's</span> <span m='1355850'>include</span> <span
  m='1356220'>G,</span> <span m='1356320'>too.</span> </p><p><span
  m='1358136'>AUDIENCE: Oh.</span> <span m='1358619'>We don't</span> <span
  m='1359102'>have to do</span> <span m='1359585'>it all?</span> </p><p><span
  m='1360070'>PROFESSOR: We</span> <span m='1360250'>need</span> <span
  m='1360460'>six.</span> <span m='1361420'>No,</span> <span
  m='1361640'>I</span> <span m='1361760'>just</span> <span
  m='1361940'>said</span> <span m='1362020'>give</span> <span
  m='1362160'>me</span> <span m='1362250'>any,</span> <span
  m='1362590'>and</span> <span m='1362790'>someone</span> <span
  m='1363040'>gave</span> <span m='1363170'>me</span> <span m='1363260'>the
  easiest</span> <span m='1363380'>one,</span> <span m='1363660'>E.</span> <span
  m='1364150'>Question?</span> </p><p><span m='1365310'>AUDIENCE: B</span>
  </p><p><span m='1366120'>PROFESSOR: Why not</span> <span m='1366580'>B?</span>
  <span m='1366870'>B</span> <span m='1367160'>looks</span> <span
  m='1367480'>great.</span> <span m='1367920'>I love</span> <span
  m='1368390'>B.</span> <span m='1368610'>Let's</span> <span
  m='1368810'>include</span> <span m='1369150'>B.</span> <span
  m='1371555'>Does</span> <span m='1372040'>someone</span> <span
  m='1372290'>else</span> <span m='1372500'>want</span> <span
  m='1372730'>to</span> <span m='1372930'>give</span> <span
  m='1373130'>another</span> <span m='1373380'>one</span> <span
  m='1373520'>that</span> <span m='1373630'>they</span> <span
  m='1373720'>want</span> <span m='1373850'>to</span> <span
  m='1373890'>include?</span> </p><p><span m='1374590'>AUDIENCE: A.</span>
  </p><p><span m='1375650'>PROFESSOR: A.</span> <span m='1376250'>Why</span>
  <span m='1376420'>not</span> <span m='1376700'>A?</span> <span
  m='1377480'>Sure.</span> <span m='1377820'>I</span> <span
  m='1378160'>mean,</span> <span m='1378570'>it's</span> <span
  m='1378700'>hard</span> <span m='1378930'>to</span> <span
  m='1379040'>see</span> <span m='1379230'>down</span> <span
  m='1379430'>here</span> <span m='1379560'>because</span> <span
  m='1379640'>there</span> <span m='1379790'>might</span> <span
  m='1379960'>be</span> <span m='1380040'>something</span> <span
  m='1380300'>better</span> <span m='1380520'>on</span> <span
  m='1380620'>the</span> <span m='1380690'>bottom.</span> <span
  m='1381610'>But</span> <span m='1382680'>yeah,</span> <span
  m='1382880'>there's</span> <span m='1383090'>not.</span> <span
  m='1383600'>So</span> <span m='1383970'>let's</span> <span
  m='1384150'>include</span> <span m='1384550'>A.</span> <span m='1384660'>Why
  not</span> <span m='1384910'>A?</span> <span m='1385090'>I love</span> <span
  m='1385515'>A.</span> <span m='1385940'>A's</span> <span
  m='1386200'>great.</span> <span m='1388370'>OK.</span> </p><p><span
  m='1390280'>So</span> <span m='1396580'>that</span> <span
  m='1396830'>is</span> <span m='1396980'>now</span> <span
  m='1397660'>five.</span> <span m='1398330'>There's</span> <span
  m='1398520'>one</span> <span m='1398760'>more</span> <span
  m='1398970'>that</span> <span m='1399080'>we</span> <span
  m='1399210'>need.</span> <span m='1400500'>It's</span> <span
  m='1400740'>by</span> <span m='1400930'>far</span> <span
  m='1401290'>the</span> <span m='1401380'>hardest</span> <span
  m='1401730'>one</span> <span m='1403530'>to</span> <span
  m='1403640'>find.</span> <span m='1405360'>Find me</span> <span
  m='1405740'>one</span> <span m='1406000'>more that</span> <span
  m='1406270'>there's</span> <span m='1406640'>nothing</span> <span
  m='1407040'>better</span> <span m='1407290'>than</span> <span
  m='1407540'>it.</span> <span m='1407880'>There's</span> <span
  m='1408180'>nothing</span> <span m='1409150'>that</span> <span
  m='1409330'>has</span> <span m='1409690'>a</span> <span
  m='1409810'>strict</span> <span m='1410160'>subset</span> <span
  m='1410810'>of</span> <span m='1410950'>the</span> <span
  m='1411030'>same</span> <span m='1411580'>ones</span> <span
  m='1411930'>wrong.</span> </p><p><span m='1413270'>AUDIENCE: Question.</span>
  </p><p><span m='1414090'>PROFESSOR: What?</span> </p><p><span
  m='1414520'>AUDIENCE: Sorry,</span> <span m='1414950'>can we</span> <span
  m='1415442'>quickly--</span> <span m='1415934'>why would</span> <span
  m='1416426'>you choose</span> <span m='1416918'>A before</span> <span
  m='1417410'>we chose</span> <span m='1417902'>C?</span> </p><p><span
  m='1419380'>PROFESSOR: OK, why</span> <span m='1419590'>would you
  choose</span> <span m='1420087'>A before you've</span> <span
  m='1420584'>chosen</span> <span m='1421081'>C?</span> <span
  m='1421580'>Let's</span> <span m='1421770'>say</span> <span
  m='1422190'>8</span> <span m='1422840'>was</span> <span m='1423020'>a</span>
  <span m='1423270'>real</span> <span m='1423610'>problem</span> <span
  m='1424080'>for</span> <span m='1424250'>you.</span> <span
  m='1425490'>And</span> <span m='1426040'>you</span> <span
  m='1426210'>were</span> <span m='1426310'>just</span> <span
  m='1426490'>getting--</span> <span m='1426830'>let's</span> <span
  m='1427060'>say</span> <span m='1427160'>that</span> <span m='1427380'>3,
  4</span> <span m='1427530'>and 5,</span> <span m='1427970'>they</span> <span
  m='1428090'>weren't</span> <span m='1428330'>that</span> <span
  m='1428560'>bad.</span> <span m='1429430'>They</span> <span
  m='1429530'>weren't</span> <span m='1429760'>that</span> <span
  m='1429930'>bad.</span> <span m='1430240'>They</span> <span
  m='1430310'>weren't</span> <span m='1430430'>that</span> <span
  m='1430570'>bad.</span> <span m='1430750'>OK,</span> <span
  m='1431050'>you</span> <span m='1431160'>got</span> <span
  m='1431360'>them</span> <span m='1431490'>wrong</span> <span
  m='1431770'>here</span> <span m='1432080'>with</span> <span
  m='1432190'>transforms.</span> <span m='1432680'>You chose</span> <span
  m='1433120'>C.</span> <span m='1433560'>But</span> <span
  m='1433900'>sometime</span> <span m='1434460'>later,</span> <span
  m='1435180'>8</span> <span m='1435500'>was</span> <span
  m='1435660'>just</span> <span m='1436160'>by</span> <span
  m='1436510'>far</span> <span m='1436800'>your</span> <span
  m='1436990'>issue.</span> <span m='1438600'>All</span> <span
  m='1438710'>right?</span> </p><p><span m='1439770'>3,</span> <span
  m='1439990'>4,</span> <span m='1440230'>and 5,</span> <span
  m='1440660'>and</span> <span m='1440870'>8--</span> <span
  m='1441240'>3,</span> <span m='1441610'>4 and</span> <span
  m='1441790'>5</span> <span m='1442070'>are</span> <span
  m='1442140'>much</span> <span m='1442740'>smaller</span> <span
  m='1443230'>weights</span> <span m='1443540'>than</span> <span
  m='1443660'>8.</span> <span m='1443940'>And</span> <span
  m='1444100'>then</span> <span m='1444300'>after</span> <span
  m='1445510'>you've</span> <span m='1445640'>got</span> <span
  m='1445900'>3,</span> <span m='1446020'>4,</span> <span m='1446170'>5,</span>
  <span m='1446430'>and 8</span> <span m='1446590'>wrong,</span> <span
  m='1447190'>3, 4,</span> <span m='1447590'>and 5</span> <span
  m='1447790'>were</span> <span m='1447800'>still</span> <span
  m='1448070'>not</span> <span m='1448270'>that</span> <span
  m='1448470'>bad.</span> <span m='1448840'>And 8</span> <span
  m='1449510'>still</span> <span m='1450010'>was</span> <span
  m='1450180'>a</span> <span m='1450230'>high</span> <span
  m='1450500'>number.</span> </p><p><span m='1451200'>And</span> <span
  m='1451340'>then</span> <span m='1451470'>sometime</span> <span
  m='1452250'>later</span> <span m='1452610'>down</span> <span
  m='1452870'>the</span> <span m='1452930'>line,</span> <span
  m='1453860'>you're</span> <span m='1453890'>looking</span> <span
  m='1454210'>at</span> <span m='1454340'>things.</span> <span
  m='1454640'>And</span> <span m='1454740'>you're</span> <span
  m='1454850'>saying,</span> <span m='1455090'>you</span> <span
  m='1455190'>know</span> <span m='1455340'>what?</span> <span
  m='1456220'>I</span> <span m='1456330'>really</span> <span
  m='1456650'>don't</span> <span m='1456840'>want</span> <span
  m='1456950'>to</span> <span m='1456990'>get</span> <span m='1457170'>8</span>
  <span m='1457320'>wrong</span> <span m='1457550'>again,</span> <span
  m='1457800'>but</span> <span m='1458190'>I</span> <span
  m='1458290'>don't</span> <span m='1458490'>mind</span> <span
  m='1458700'>if</span> <span m='1458810'>I</span> <span m='1458870'>get</span>
  <span m='1459040'>3,</span> <span m='1459170'>4 and</span> <span m='1459370'>5
  wrong.</span> <span m='1459810'>Maybe</span> <span m='1460060'>I'll</span>
  <span m='1460150'>get</span> <span m='1460280'>it wrong</span> <span
  m='1460540'>with</span> <span m='1460700'>2,</span> <span
  m='1460960'>which</span> <span m='1461230'>I've</span> <span
  m='1461330'>never</span> <span m='1461570'>gone</span> <span
  m='1461790'>wrong</span> <span m='1462130'>yet.</span> <span
  m='1462750'>Actually,</span> <span m='1463090'>none</span> <span
  m='1463350'>of</span> <span m='1463430'>the</span> <span
  m='1463520'>ones</span> <span m='1463710'>we've</span> <span
  m='1463830'>circled</span> <span m='1464130'>here</span> <span
  m='1464320'>get</span> <span m='1464540'>2</span> <span
  m='1464720'>wrong,</span> <span m='1465080'>so</span> <span
  m='1465280'>it's</span> <span m='1465500'>probably</span> <span
  m='1465840'>not</span> <span m='1466010'>that</span> <span
  m='1466170'>bad</span> <span m='1466410'>to</span> <span
  m='1466470'>get</span> <span m='1466730'>2</span> <span
  m='1466930'>wrong.</span> </p><p><span m='1467950'>So</span> <span
  m='1468310'>that's</span> <span m='1468630'>why--</span> <span
  m='1469100'>because</span> <span m='1470280'>it</span> <span
  m='1470430'>doesn't</span> <span m='1470780'>get</span> <span
  m='1470960'>8</span> <span m='1471170'>wrong.</span> <span
  m='1471540'>If</span> <span m='1471880'>A</span> <span m='1472170'>was</span>
  <span m='1472580'>2,</span> <span m='1472730'>3,</span> <span
  m='1472890'>4,</span> <span m='1473050'>5,</span> <span m='1473410'>8,</span>
  <span m='1474000'>you'd</span> <span m='1474160'>never</span> <span
  m='1474570'>take</span> <span m='1474830'>it.</span> <span
  m='1475405'>Do</span> <span m='1475800'>you</span> <span m='1475890'>see
  what</span> <span m='1476220'>I mean?</span> <span m='1476610'>Oh,</span>
  <span m='1477000'>did</span> <span m='1477090'>someone</span> <span
  m='1477380'>raise their</span> <span m='1477730'>hand?</span> <span
  m='1477820'>Did someone</span> <span m='1478060'>find</span> <span
  m='1478410'>it?</span> </p><p><span m='1478920'>AUDIENCE: I just have</span>
  <span m='1479406'>a question.</span> <span m='1480378'>You can</span> <span
  m='1480864'>use the</span> <span m='1481350'>same reasoning</span> <span
  m='1481836'>for</span> <span m='1482322'>choosing</span> <span
  m='1482808'>K,</span> <span m='1483294'>right?</span> <span
  m='1483780'>Because</span> <span m='1485724'>after</span> <span
  m='1486210'>E,</span> <span m='1486696'>we could have</span> <span
  m='1487182'>chosen A</span> <span m='1487668'>and said that</span> <span
  m='1489126'>9</span> <span m='1489612'>only a</span> <span
  m='1490098'>little</span> <span m='1490584'>different--</span> </p><p><span
  m='1491080'>PROFESSOR: But</span> <span m='1491450'>it's</span> <span
  m='1491820'>strictly</span> <span m='1492340'>worse.</span> </p><p><span
  m='1492770'>AUDIENCE: Sorry,</span> <span m='1493200'>sorry,</span> <span
  m='1493656'>I meant</span> <span m='1494568'>[INAUDIBLE]</span> <span
  m='1497360'>E</span> <span m='1497857'>to</span> <span m='1498354'>9</span>
  <span m='1498851'>and 10,</span> <span m='1499348'>and then</span> <span
  m='1499845'>we could have</span> <span m='1500342'>chosen</span> <span
  m='1500839'>3, 9,</span> <span m='1501336'>and 10,</span> <span
  m='1501833'>right?</span> <span m='1502330'>Because--</span> </p><p><span
  m='1502827'>PROFESSOR: But we</span> <span m='1503324'>chose to</span> <span
  m='1503821'>use</span> <span m='1504318'>E.</span> <span
  m='1504815'>Because</span> <span m='1506306'>getting only</span> <span
  m='1506803'>3, 10</span> <span m='1507300'>wrong is</span> <span
  m='1507797'>better than</span> <span m='1508294'>getting 3, 9,</span> <span
  m='1508800'>and 10 wrong</span> <span m='1509095'>in</span> <span
  m='1509390'>any</span> <span m='1509670'>universe.</span> <span
  m='1510782'>You</span> <span m='1511150'>pick.</span> <span
  m='1512310'>You</span> <span m='1512420'>see</span> <span m='1512720'>what
  I</span> <span m='1513080'>mean?</span> <span m='1513760'>It</span> <span
  m='1514100'>might not</span> <span m='1514400'>be</span> <span
  m='1514700'>that</span> <span m='1515015'>much worse.</span> <span
  m='1515940'>It</span> <span m='1516110'>might</span> <span
  m='1516370'>be</span> <span m='1516490'>only</span> <span m='1516680'>a</span>
  <span m='1516760'>little</span> <span m='1517000'>bit</span> <span
  m='1517170'>worse</span> <span m='1517430'>to</span> <span
  m='1517540'>choose</span> <span m='1517800'>K,</span> <span
  m='1517980'>but</span> <span m='1518160'>it's</span> <span
  m='1518330'>always</span> <span m='1518710'>worse.</span> <span
  m='1520170'>So</span> <span m='1520480'>it--</span> <span
  m='1521020'>question?</span> </p><p><span m='1522118'>AUDIENCE:
  [INAUDIBLE]</span> <span m='1523114'>the right one</span> <span
  m='1523612'>by</span> <span m='1524110'>reasoning</span> <span
  m='1524608'>[INAUDIBLE]</span> <span m='1525106'>we need</span> <span
  m='1525604'>one that</span> <span m='1526600'>doesn't have</span> <span
  m='1527098'>3 in</span> <span m='1527596'>it.</span> <span m='1528094'>Because
  right now,</span> <span m='1529090'>[INAUDIBLE]</span> <span
  m='1531580'>get</span> <span m='1532078'>3 wrong.</span> </p><p><span
  m='1532576'>PROFESSOR: OK,</span> <span m='1533074'>that's</span> <span
  m='1533572'>a</span> <span m='1533738'>pretty</span> <span
  m='1533904'>good</span> <span m='1534070'>insight.</span> <span
  m='1534700'>What are</span> <span m='1534870'>you thinking</span> <span
  m='1535363'>about?</span> </p><p><span m='1536349'>AUDIENCE: Well, I'm</span>
  <span m='1536842'>trying to justify</span> <span m='1537335'>D.</span>
  </p><p><span m='1538814'>PROFESSOR: You're trying</span> <span m='1539307'>to
  justify D.</span> </p><p><span m='1539800'>AUDIENCE: [INAUDIBLE].</span>
  </p><p><span m='1541070'>PROFESSOR: D</span> <span m='1541457'>is</span> <span
  m='1541844'>huge.</span> <span m='1542231'>It gets</span> <span
  m='1542620'>more than</span> <span m='1542810'>half of</span> <span
  m='1543275'>them wrong.</span> <span m='1543740'>But</span> <span
  m='1544205'>you know what?</span> <span m='1544670'>It gets</span> <span
  m='1545135'>3 right.</span> <span m='1545600'>You know</span> <span
  m='1546065'>what?</span> <span m='1546530'>It gets</span> <span m='1546995'>10
  right.</span> <span m='1547930'>And</span> <span m='1548330'>unlike our</span>
  <span m='1548772'>things that</span> <span m='1549656'>get</span> <span
  m='1550100'>3 and</span> <span m='1550500'>10</span> <span
  m='1550820'>right,</span> <span m='1551250'>which</span> <span
  m='1551760'>is</span> <span m='1551850'>B,</span> <span m='1552570'>it</span>
  <span m='1552930'>also</span> <span m='1553300'>gets</span> <span
  m='1553540'>9</span> <span m='1553900'>right.</span> <span
  m='1555660'>D</span> <span m='1556070'>is</span> <span m='1556220'>the</span>
  <span m='1556330'>last</span> <span m='1556800'>classifier.</span> <span
  m='1557450'>You</span> <span m='1557630'>got</span> <span
  m='1557920'>it.</span> </p><p><span m='1558530'>It's</span> <span
  m='1558730'>hard</span> <span m='1559280'>to</span> <span
  m='1559400'>choose</span> <span m='1559840'>one</span> <span
  m='1560270'>that</span> <span m='1560460'>has</span> <span
  m='1560730'>seven</span> <span m='1561140'>of</span> <span
  m='1561210'>them</span> <span m='1561420'>wrong,</span> <span m='1562250'>but
  D</span> <span m='1562720'>is the</span> <span m='1562800'>last</span> <span
  m='1563060'>one</span> <span m='1563190'>you</span> <span
  m='1563280'>might</span> <span m='1563470'>pick.</span> <span
  m='1564620'>It</span> <span m='1564780'>turns</span> <span
  m='1565150'>out</span> <span m='1565420'>there's</span> <span
  m='1565640'>nothing</span> <span m='1566100'>better</span> <span
  m='1566390'>than</span> <span m='1566580'>this for</span> <span
  m='1566810'>classifying</span> <span m='1568420'>correctly</span> <span
  m='1569090'>those</span> <span m='1569740'>annoying</span> <span
  m='1570560'>data</span> <span m='1570850'>points</span> <span
  m='1571320'>of</span> <span m='1571760'>Edward</span> <span
  m='1572120'>Cullen</span> <span m='1572770'>and</span> <span
  m='1573700'>Squall,</span> <span m='1574472'>and</span> <span
  m='1574860'>also</span> <span m='1575190'>Circe,</span> <span
  m='1575630'>who's</span> <span m='1575930'>not</span> <span
  m='1576130'>that</span> <span m='1576430'>annoying,</span> <span
  m='1576730'>but</span> <span m='1576930'>she</span> <span
  m='1577660'>tends</span> <span m='1577970'>to</span> <span
  m='1578050'>be</span> <span m='1578140'>a</span> <span
  m='1578230'>problem</span> <span m='1578700'>when romance</span> <span
  m='1579180'>is</span> <span m='1579300'>concerned.</span> </p><p><span
  m='1580210'>So</span> <span m='1581960'>these</span> <span
  m='1582370'>are</span> <span m='1582550'>the</span> <span
  m='1582670'>six</span> <span m='1583130'>that</span> <span
  m='1583230'>we</span> <span m='1583340'>might</span> <span
  m='1583650'>use.</span> <span m='1584240'>We</span> <span m='1584430'>can
  now</span> <span m='1584750'>ignore</span> <span m='1585110'>the</span> <span
  m='1585210'>rest</span> <span m='1585460'>of</span> <span
  m='1585550'>them</span> <span m='1585720'>forever--</span> <span
  m='1586910'>or</span> <span m='1587070'>at</span> <span
  m='1587180'>least</span> <span m='1587430'>until</span> <span
  m='1588180'>someone</span> <span m='1588540'>reuses</span> <span
  m='1588980'>this</span> <span m='1589190'>problem</span> <span
  m='1589640'>or</span> <span m='1589750'>something</span> <span
  m='1589980'>like</span> <span m='1590170'>that.</span> <span
  m='1590410'>But</span> <span m='1590860'>we</span> <span
  m='1590980'>can</span> <span m='1591100'>ignore</span> <span
  m='1591520'>everything</span> <span m='1591930'>except</span> <span
  m='1592190'>A, B,</span> <span m='1592350'>C, D,</span> <span m='1592850'>E,
  G.</span> <span m='1593000'>In   fact,</span> <span m='1593150'>why did</span>
  <span m='1593200'>I</span> <span m='1593660'>even</span> <span
  m='1593740'>bring</span> <span m='1593900'>that</span> <span
  m='1594060'>up?</span> <span m='1594470'>All</span> <span
  m='1594860'>the</span> <span m='1594960'>ones</span> <span m='1595150'>we
  want</span> <span m='1595320'>are on the</span> <span
  m='1595400'>front.</span> <span m='1596300'>I'll</span> <span
  m='1596460'>bring it</span> <span m='1596630'>back</span> <span
  m='1596920'>down.</span> </p><p><span m='1598020'>Then</span> <span
  m='1598430'>I'll</span> <span m='1598630'>cross</span> <span
  m='1598960'>this</span> <span m='1599140'>off</span> <span
  m='1599410'>with</span> <span m='1599580'>reckless</span> <span
  m='1599940'>abandon.</span> <span m='1602270'>That</span> <span
  m='1602420'>even broke</span> <span m='1602650'>off a</span> <span
  m='1603120'>piece of</span> <span m='1603210'>my</span> <span
  m='1603350'>chalk.</span> <span m='1604150'>Now,</span> <span
  m='1604650'>these</span> <span m='1604930'>are</span> <span
  m='1604990'>the</span> <span m='1605080'>ones</span> <span
  m='1605260'>that</span> <span m='1605360'>we're</span> <span
  m='1605460'>actually</span> <span m='1605770'>thinking</span> <span
  m='1606050'>about</span> <span m='1606340'>using.</span> </p><p><span
  m='1608110'>There</span> <span m='1608300'>is</span> <span
  m='1608390'>a</span> <span m='1608460'>chart</span> <span
  m='1608820'>over</span> <span m='1609010'>here</span> <span
  m='1610430'>already</span> <span m='1610810'>prepared</span> <span
  m='1611480'>to</span> <span m='1611560'>do</span> <span
  m='1611860'>some</span> <span m='1612060'>boosting</span> <span
  m='1613090'>with</span> <span m='1613300'>these</span> <span
  m='1613710'>six</span> <span m='1614120'>classifiers,</span> <span
  m='1615590'>all</span> <span m='1615670'>right?</span> <span
  m='1617020'>So</span> <span m='1617260'>let's</span> <span
  m='1617500'>give</span> <span m='1617620'>it</span> <span m='1617660'>a</span>
  <span m='1617730'>try.</span> <span m='1619710'>Now,</span> <span
  m='1619860'>remember,</span> <span m='1620190'>in</span> <span
  m='1620460'>boosting,</span> <span m='1620730'>we</span> <span
  m='1620950'>always</span> <span m='1621270'>try</span> <span
  m='1621540'>to</span> <span m='1621580'>choose</span> <span
  m='1621930'>whichever</span> <span m='1622250'>classifier has</span> <span
  m='1622580'>the least</span> <span m='1622790'>errors.</span> <span
  m='1623150'>Is</span> <span m='1623250'>there a</span> <span
  m='1623350'>question?</span> </p><p><span m='1623720'>AUDIENCE: Sorry,
  yeah.</span> <span m='1624570'>Before we</span> <span m='1625050'>move
  on,</span> <span m='1625530'>can you</span> <span m='1626010'>say</span> <span
  m='1626490'>again</span> <span m='1626970'>a little</span> <span
  m='1627450'>more slowly</span> <span m='1627930'>what</span> <span
  m='1628410'>exactly</span> <span m='1628890'>we were</span> <span
  m='1629370'>looking for</span> <span m='1629850'>when we</span> <span
  m='1630330'>were choosing</span> <span m='1630810'>our</span> <span
  m='1631290'>classifiers,</span> <span m='1632225'>like</span> <span
  m='1633087'>something</span> <span m='1633494'>about the</span> <span
  m='1633901'>subset?</span> </p><p><span m='1637590'>PROFESSOR: You</span>
  <span m='1637810'>generally</span> <span m='1638650'>want</span> <span
  m='1638900'>to</span> <span m='1639010'>take</span> <span
  m='1639270'>classifiers.</span> <span m='1640320'>So</span> <span
  m='1640450'>I'll</span> <span m='1640690'>tell</span> <span
  m='1640860'>you</span> <span m='1641010'>what</span> <span
  m='1641320'>let's</span> <span m='1641570'>you</span> <span
  m='1641700'>cross</span> <span m='1642140'>off</span> <span
  m='1642420'>a</span> <span m='1642520'>classifier.</span> <span
  m='1643220'>That</span> <span m='1643430'>may be</span> <span
  m='1643800'>a</span> <span m='1643840'>better</span> <span
  m='1644090'>way</span> <span m='1644220'>to</span> <span m='1644340'>do</span>
  <span m='1644500'>it.</span> </p><p><span m='1645210'>You</span> <span
  m='1645400'>can</span> <span m='1645590'>cross</span> <span
  m='1646040'>off</span> <span m='1646370'>a classifier</span> <span
  m='1646930'>as</span> <span m='1647130'>useless</span> <span
  m='1648380'>if--</span> <span m='1650950'>and</span> <span
  m='1651040'>by</span> <span m='1651160'>the</span> <span
  m='1651240'>way,</span> <span m='1651400'>this</span> <span
  m='1651620'>is</span> <span m='1651710'>only</span> <span
  m='1652020'>useful</span> <span m='1652670'>if</span> <span
  m='1652870'>you</span> <span m='1653070'>can</span> <span
  m='1653300'>do</span> <span m='1653480'>it</span> <span
  m='1653640'>faster</span> <span m='1654100'>than</span> <span
  m='1654330'>just</span> <span m='1654570'>wasting</span> <span
  m='1654900'>your</span> <span m='1655060'>time</span> <span
  m='1655370'>looking</span> <span m='1655650'>at</span> <span m='1655710'>all
  of</span> <span m='1656110'>them.</span> <span m='1656880'>Because</span>
  <span m='1657220'>if</span> <span m='1657320'>you</span> <span
  m='1657450'>can't</span> <span m='1658160'>cross</span> <span
  m='1658420'>off</span> <span m='1658650'>some</span> <span
  m='1658840'>of</span> <span m='1658900'>them</span> <span
  m='1659010'>as</span> <span m='1659120'>useless--</span> <span
  m='1659600'>usually</span> <span m='1660070'>on  the test,</span> <span
  m='1660400'>they</span> <span m='1660470'>won't</span> <span
  m='1660730'>make</span> <span m='1660960'>you.</span> <span m='1661200'>You
  can</span> <span m='1661340'>just</span> <span m='1662010'>waste</span> <span
  m='1662230'>your</span> <span m='1662360'>time</span> <span m='1662600'>and
  have</span> <span m='1662790'>14</span> <span m='1663310'>instead</span> <span
  m='1663600'>of</span> <span m='1663690'>six</span> <span
  m='1664110'>possibilities</span> <span m='1664780'>every</span> <span
  m='1665040'>step</span> <span m='1665290'>of</span> <span
  m='1665530'>the</span> <span m='1665750'>boosting.</span> </p><p><span
  m='1666380'>But</span> <span m='1667550'>take</span> <span
  m='1667810'>a</span> <span m='1667880'>look</span> <span m='1668540'>at</span>
  <span m='1669110'>this--</span> <span m='1669440'>1, 2,</span> <span
  m='1669875'>3, 4,</span> <span m='1670310'>5, 6,</span> <span
  m='1670745'>7.</span> <span m='1671530'>Then</span> <span
  m='1671770'>see.</span> <span m='1672260'>Do you</span> <span
  m='1672400'>have</span> <span m='1672750'>anything</span> <span
  m='1673140'>here</span> <span m='1674050'>that</span> <span
  m='1674410'>has</span> <span m='1674660'>a</span> <span
  m='1674760'>strict</span> <span m='1675190'>subset</span> <span
  m='1675940'>of</span> <span m='1676080'>these</span> <span
  m='1676790'>wrong?</span> <span m='1677680'>Oh,</span> <span
  m='1677900'>look.</span> <span m='1678110'>2,</span> <span
  m='1678270'>3,</span> <span m='1678450'>4,</span> <span m='1678670'>5</span>
  <span m='1679230'>is</span> <span m='1679370'>a</span> <span
  m='1679430'>strict</span> <span m='1679700'>subset.</span> <span
  m='1680220'>This</span> <span m='1680380'>can</span> <span
  m='1680500'>be</span> <span m='1680610'>crossed</span> <span
  m='1680990'>off.</span> <span m='1681720'>1, 2,</span> <span m='1682170'>5,
  6,</span> <span m='1682620'>7, 8,</span> <span m='1683070'>9--</span> <span
  m='1683520'>anything</span> <span m='1683850'>that's</span> <span
  m='1684020'>a</span> <span m='1684090'>strict</span> <span
  m='1684640'>subset?</span> <span m='1686170'>Yes,</span> <span
  m='1686710'>1,</span> <span m='1687060'>6,</span> <span m='1687450'>7,</span>
  <span m='1687800'>9.</span> <span m='1688510'>So</span> <span m='1688770'>it
  can</span> <span m='1688870'>be</span> <span m='1689000'>crossed off.</span>
  </p><p><span m='1689460'>1, 2,</span> <span m='1689895'>4, 5,</span> <span
  m='1690330'>6, 7, 8,</span> <span m='1690765'>9.</span> <span
  m='1692640'>Let's</span> <span m='1692890'>see.</span> <span
  m='1693660'>1,</span> <span m='1693980'>6,</span> <span m='1694380'>7,</span>
  <span m='1694730'>9</span> <span m='1695170'>is a</span> <span
  m='1695390'>strict</span> <span m='1695550'>subset.</span> <span
  m='1696040'>3,</span> <span m='1696200'>9,</span> <span m='1696440'>10.</span>
  <span m='1696820'>3,</span> <span m='1697120'>10</span> <span m='1697440'>is
  a</span> <span m='1697500'>strict</span> <span m='1697750'>subset.</span>
  <span m='1698970'>1,</span> <span m='1699250'>6, 7, 9--</span> <span
  m='1699750'>a strict</span> <span m='1700250'>subset.</span> <span
  m='1701310'>3,</span> <span m='1702570'>4,</span> <span m='1702790'>5,</span>
  <span m='1703140'>8</span> <span m='1703540'>is</span> <span m='1703770'>a
  strict</span> <span m='1703890'>subset,</span> <span m='1704350'>as</span>
  <span m='1704630'>is</span> <span m='1704790'>2, 3,</span> <span
  m='1705273'>4, 5.</span> <span m='1705756'>1, 6, 7,</span> <span m='1706240'>9
  is a</span> <span m='1706690'>strict</span> <span m='1706830'>subset.</span>
  <span m='1708000'>And</span> <span m='1708170'>up</span> <span
  m='1708350'>here,</span> <span m='1709250'>3, 4,</span> <span
  m='1709720'>10--</span> <span m='1710190'>3, 10</span> <span m='1710410'>is
  a</span> <span m='1710650'>strict</span> <span m='1710760'>subset.</span>
  <span m='1711170'>But</span> <span m='1711320'>the</span> <span
  m='1711480'>others</span> <span m='1711870'>don't</span> <span
  m='1712170'>have</span> <span m='1712440'>one,</span> <span
  m='1712670'>even</span> <span m='1713000'>1, 2, 4,</span> <span m='1713395'>5,
  6, 7,</span> <span m='1713790'>8.</span> </p><p><span m='1717620'>In</span>
  <span m='1717780'>general,</span> <span m='1718090'>you</span> <span
  m='1718230'>want</span> <span m='1718430'>to</span> <span
  m='1718560'>keep</span> <span m='1718910'>them.</span> <span
  m='1719440'>You</span> <span m='1719600'>want</span> <span
  m='1719710'>to</span> <span m='1719810'>keep</span> <span
  m='1720150'>every</span> <span m='1720400'>classifier</span> <span
  m='1720820'>you</span> <span m='1720960'>might</span> <span
  m='1721270'>use.</span> <span m='1721930'>The</span> <span
  m='1722030'>only</span> <span m='1722230'>ones</span> <span
  m='1722420'>you'll</span> <span m='1722520'>never</span> <span
  m='1722920'>use</span> <span m='1723270'>are</span> <span m='1723400'>ones
  that</span> <span m='1723690'>there's</span> <span
  m='1724050'>something</span> <span m='1724300'>else</span> <span
  m='1724460'>that's</span> <span m='1724550'>just</span> <span
  m='1724700'>better</span> <span m='1725050'>always</span> <span
  m='1725710'>by</span> <span m='1725920'>having</span> <span
  m='1726260'>a</span> <span m='1726320'>strict</span> <span
  m='1726600'>subset</span> <span m='1727080'>of</span> <span
  m='1727230'>them</span> <span m='1728060'>wrong.</span> </p><p><span
  m='1730370'>Hopefully,</span> <span m='1730770'>that</span> <span
  m='1730980'>was</span> <span m='1731500'>more</span> <span
  m='1731750'>clear.</span> <span m='1732810'>It's</span> <span
  m='1733270'>tricky.</span> <span m='1735430'>Very</span> <span
  m='1735820'>few</span> <span m='1736020'>people</span> <span
  m='1736400'>realize--</span> <span m='1737410'>we're</span> <span
  m='1737540'>brave</span> <span m='1737920'>enough</span> <span
  m='1738140'>to</span> <span m='1738280'>take</span> <span
  m='1738690'>sparkly</span> <span m='1739170'>even</span> <span
  m='1739450'>when</span> <span m='1739550'>it</span> <span
  m='1739580'>got</span> <span m='1739810'>seven</span> <span
  m='1740120'>things</span> <span m='1740400'>wrong.</span> </p><p><span
  m='1741020'>So</span> <span m='1741860'>let's</span> <span
  m='1742150'>start</span> <span m='1742490'>out some</span> <span
  m='1742640'>boosting.</span> <span m='1743670'>This</span> <span
  m='1743950'>wasn't</span> <span m='1744260'>boosting.</span> <span
  m='1744870'>This</span> <span m='1745170'>was</span> <span
  m='1745280'>setting</span> <span m='1745540'>yourself</span> <span
  m='1746010'>up.</span> <span m='1746970'>But it</span> <span
  m='1747460'>was</span> <span m='1747600'>setting</span> <span
  m='1747840'>yourself</span> <span m='1748210'>up</span> <span
  m='1748370'>with</span> <span m='1748500'>the</span> <span
  m='1748580'>knowledge</span> <span m='1749040'>of</span> <span
  m='1749120'>how</span> <span m='1749270'>boosting</span> <span
  m='1749720'>works.</span> <span m='1750260'>Less</span> <span
  m='1750550'>knowledge,</span> <span m='1750980'>less</span> <span
  m='1751310'>search.</span> <span m='1751820'>Now</span> <span m='1752020'>we
  only</span> <span m='1752230'>have to search</span> <span
  m='1752650'>six</span> <span m='1752950'>things.</span> <span m='1753700'>Ah,
  I</span> <span m='1754010'>mean</span> <span m='1754200'>more</span> <span
  m='1754410'>knowledge,</span> <span m='1754740'>less search,</span> <span
  m='1755130'>not</span> <span m='1755360'>less knowledge,</span> <span
  m='1755570'>less</span> <span m='1756050'>search.</span> </p><p><span
  m='1756980'>So</span> <span m='1760670'>we</span> <span
  m='1760840'>start</span> <span m='1761240'>off</span> <span
  m='1761560'>with</span> <span m='1761750'>all</span> <span
  m='1762040'>weights</span> <span m='1762330'>being</span> <span
  m='1762580'>equal.</span> <span m='1763180'>And</span> <span
  m='1763240'>since</span> <span m='1763420'>there's</span> <span
  m='1763650'>ten</span> <span m='1764450'>data</span> <span
  m='1764700'>points,</span> <span m='1765540'>all</span> <span
  m='1765850'>ten</span> <span m='1766020'>of</span> <span
  m='1766110'>the</span> <span m='1766190'>data</span> <span
  m='1766410'>points</span> <span m='1766650'>are</span> <span
  m='1766740'>weighted</span> <span m='1767040'>1/10.</span> <span
  m='1770710'>OK,</span> <span m='1771510'>we're</span> <span
  m='1771650'>now</span> <span m='1771880'>weighting</span> <span
  m='1772170'>all of</span> <span m='1772570'>them</span> <span
  m='1772770'>equally.</span> <span m='1773870'>Since</span> <span
  m='1774120'>we're</span> <span m='1774250'>weighting</span> <span
  m='1774490'>all of</span> <span m='1774680'>them</span> <span
  m='1774870'>equally,</span> <span m='1775330'>when</span> <span
  m='1775490'>we</span> <span m='1775600'>want</span> <span
  m='1775740'>to</span> <span m='1775790'>find</span> <span
  m='1775970'>the</span> <span m='1776030'>classifier</span> <span
  m='1776620'>that</span> <span m='1776740'>gets</span> <span
  m='1777390'>the</span> <span m='1777510'>least</span> <span
  m='1777930'>error,</span> <span m='1778240'>we</span> <span
  m='1778340'>just</span> <span m='1778550'>want</span> <span
  m='1778670'>to</span> <span m='1778720'>find</span> <span
  m='1778990'>the</span> <span m='1779060'>one</span> <span
  m='1779240'>that</span> <span m='1779280'>gets</span> <span
  m='1779500'>the</span> <span m='1779590'>fewest</span> <span
  m='1780440'>points</span> <span m='1780780'>wrong.</span> </p><p><span
  m='1781360'>Which</span> <span m='1781560'>one</span> <span
  m='1781710'>is</span> <span m='1781810'>that?</span> <span
  m='1782920'>That's</span> <span m='1783160'>our</span> <span
  m='1783290'>friend</span> <span m='1783570'>E,</span> <span
  m='1783930'>the</span> <span m='1784030'>first</span> <span
  m='1784350'>one</span> <span m='1784610'>that</span> <span
  m='1784720'>people</span> <span m='1785020'>realized</span> <span
  m='1785320'>was</span> <span m='1785570'>a good</span> <span
  m='1785680'>one.</span> <span m='1786650'>So</span> <span
  m='1786810'>we're</span> <span m='1786920'>going</span> <span
  m='1787040'>to</span> <span m='1787120'>choose</span> <span
  m='1787380'>classifier</span> <span m='1787650'>E.</span> </p><p><span
  m='1789900'>What's</span> <span m='1790120'>our</span> <span
  m='1790280'>error?</span> <span m='1791470'>It's</span> <span
  m='1791600'>just</span> <span m='1791740'>the</span> <span
  m='1791830'>sum</span> <span m='1792110'>of</span> <span
  m='1792200'>the</span> <span m='1792280'>ones</span> <span
  m='1792480'>we</span> <span m='1792570'>get</span> <span
  m='1792750'>wrong.</span> <span m='1793940'>So</span> <span m='1794220'>what's
  our</span> <span m='1794700'>error this</span> <span m='1794860'>time?</span>
  <span m='1796660'>It's</span> <span m='1796800'>1/5.</span> </p><p><span
  m='1798050'>We</span> <span m='1798180'>got</span> <span
  m='1798940'>points</span> <span m='1799320'>3 and</span> <span m='1799800'>10
  wrong.</span> <span m='1800120'>They</span> <span m='1800250'>both</span>
  <span m='1800440'>have</span> <span m='1800570'>a</span> <span
  m='1800620'>weight of</span> <span m='1800870'>1/10.</span> <span
  m='1801390'>1/10</span> <span m='1802030'>plus</span> <span
  m='1802150'>1/10</span> <span m='1802820'>is</span> <span
  m='1802930'>1/5.</span> <span m='1804430'>So I'll</span> <span
  m='1804700'>put</span> <span m='1804810'>1/5,</span> <span
  m='1805660'>and</span> <span m='1805870'>alpha.</span> <span
  m='1808070'>Alpha</span> <span m='1808570'>is</span> <span
  m='1808900'>sort</span> <span m='1809080'>of</span> <span m='1809140'>a</span>
  <span m='1809240'>vote</span> <span m='1809630'>that</span> <span
  m='1809780'>will be</span> <span m='1809940'>used</span> <span m='1810160'>at
  the</span> <span m='1810370'>very</span> <span m='1810770'>end</span> <span
  m='1811760'>to</span> <span m='1812180'>aggregate</span> <span
  m='1812920'>our</span> <span m='1813040'>classifier.</span> <span
  m='1814480'>Alpha</span> <span m='1814790'>is</span> <span
  m='1814960'>1/2</span> <span m='1815560'>natural</span> <span
  m='1816010'>log</span> <span m='1816360'>of</span> <span m='1816540'>1</span>
  <span m='1816790'>minus</span> <span m='1817220'>the</span> <span
  m='1817350'>error</span> <span m='1817840'>over</span> <span
  m='1818090'>the</span> <span m='1818250'>error.</span> </p><p><span
  m='1819090'>However,</span> <span m='1819600'>I</span> <span
  m='1819720'>have</span> <span m='1819890'>a</span> <span
  m='1819950'>little</span> <span m='1820170'>trick</span> <span
  m='1820420'>for</span> <span m='1820570'>you.</span> <span
  m='1821580'>It's</span> <span m='1821750'>not</span> <span
  m='1821960'>that</span> <span m='1822410'>impressive</span> <span
  m='1822650'>of</span> <span m='1822850'>a</span> <span
  m='1822920'>trick,</span> <span m='1823220'>but</span> <span
  m='1823340'>it's</span> <span m='1823480'>a</span> <span
  m='1823540'>little</span> <span m='1823740'>fun.</span> <span
  m='1824650'>So</span> <span m='1824900'>since</span> <span
  m='1825230'>error</span> <span m='1826050'>is</span> <span
  m='1826350'>1/2--</span> <span m='1828150'>sorry,</span> <span m='1828500'>not
  error--</span> <span m='1828870'>alpha.</span> <span m='1830100'>Alpha</span>
  <span m='1830430'>is</span> <span m='1830600'>1/2</span> <span
  m='1830950'>natural</span> <span m='1831330'>log</span> <span
  m='1831570'>of</span> <span m='1831700'>1</span> <span
  m='1831870'>minus</span> <span m='1832190'>error</span> <span m='1832550'>over
  error.</span> <span m='1837260'>If</span> <span m='1837820'>error</span> <span
  m='1838280'>is</span> <span m='1839190'>1/x,</span> <span
  m='1840880'>then</span> <span m='1841080'>alpha</span> <span
  m='1841450'>is</span> <span m='1841810'>1/2</span> <span
  m='1843570'>natural</span> <span m='1844010'>log</span> <span
  m='1844290'>of</span> <span m='1844420'>x</span> <span
  m='1844660'>minus</span> <span m='1844960'>1.</span> <span
  m='1848061'>That</span> <span m='1848510'>just</span> <span
  m='1848710'>follows</span> <span m='1849150'>from</span> <span
  m='1849550'>the</span> <span m='1849630'>math.</span> <span
  m='1849980'>It's</span> <span m='1850140'>a</span> <span
  m='1850190'>little</span> <span m='1850680'>shortcut.</span> </p><p><span
  m='1852150'>If</span> <span m='1852430'>error</span> <span
  m='1852710'>is</span> <span m='1852810'>in</span> <span m='1852890'>the</span>
  <span m='1852960'>form</span> <span m='1853310'>of</span> <span
  m='1853590'>1/x,</span> <span m='1854920'>then</span> <span
  m='1855270'>it's</span> <span m='1855490'>just</span> <span
  m='1855750'>1/2</span> <span m='1856040'>natural</span> <span
  m='1856230'>log</span> <span m='1856270'>of</span> <span m='1856450'>x</span>
  <span m='1856590'>minus</span> <span m='1856830'>1,</span> <span
  m='1857270'>which</span> <span m='1857490'>means</span> <span
  m='1857790'>since</span> <span m='1857990'>this</span> <span
  m='1858170'>is</span> <span m='1858310'>in</span> <span m='1858390'>the</span>
  <span m='1858470'>form of</span> <span m='1858740'>1/5,</span> <span
  m='1859740'>everyone,</span> <span m='1860290'>alpha</span> <span
  m='1860580'>is?</span> <span m='1863260'>1/2</span> <span
  m='1863720'>ln</span> <span m='1864050'>4.</span> <span m='1872570'>OK,</span>
  <span m='1873110'>1/2</span> <span m='1873290'>ln</span> <span
  m='1873410'>4.</span> </p><p><span m='1874340'>So</span> <span
  m='1875640'>now</span> <span m='1876000'>we</span> <span
  m='1876150'>come</span> <span m='1876460'>to</span> <span
  m='1876580'>the</span> <span m='1876700'>part</span> <span
  m='1877040'>in</span> <span m='1877130'>boosting</span> <span
  m='1877820'>that</span> <span m='1878090'>many</span> <span
  m='1878360'>people</span> <span m='1878560'>consider</span> <span
  m='1878890'>the</span> <span m='1879050'>hardest</span> <span
  m='1879430'>part,</span> <span m='1879730'>and I'm</span> <span
  m='1879910'>going to</span> <span m='1880000'>show</span> <span
  m='1880150'>you</span> <span m='1880280'>how</span> <span
  m='1880390'>to</span> <span m='1880480'>do</span> <span m='1880660'>it</span>
  <span m='1880870'>more</span> <span m='1881090'>easily.</span> <span
  m='1882090'>This</span> <span m='1882180'>is</span> <span
  m='1882280'>that</span> <span m='1882520'>part</span> <span
  m='1883020'>where</span> <span m='1883350'>we</span> <span
  m='1883530'>try</span> <span m='1883740'>to</span> <span
  m='1883800'>make</span> <span m='1884060'>all</span> <span m='1884340'>the
  ones</span> <span m='1884440'>we</span> <span m='1884530'>got</span> <span
  m='1884790'>right,</span> <span m='1885650'>we</span> <span
  m='1885920'>change</span> <span m='1886300'>their</span> <span
  m='1886430'>weights</span> <span m='1886640'>to</span> <span
  m='1886840'>be</span> <span m='1887010'>1/2.</span> <span
  m='1887570'>And</span> <span m='1887700'>all</span> <span
  m='1887870'>of</span> <span m='1887980'>the ones</span> <span m='1888180'>we
  got</span> <span m='1888630'>wrong, we</span> <span m='1888750'>change</span>
  <span m='1888970'>their</span> <span m='1889090'>weights</span> <span
  m='1889200'>to</span> <span m='1889340'>be</span> <span
  m='1889440'>1/2.</span> </p><p><span m='1890250'>Here</span> <span
  m='1890650'>is</span> <span m='1890790'>my</span> <span
  m='1890990'>automated</span> <span m='1891490'>process.</span> <span
  m='1891960'>It's</span> <span m='1892120'>called</span> <span
  m='1892360'>the</span> <span m='1892420'>numerator</span> <span
  m='1892880'>stays</span> <span m='1893200'>the</span> <span
  m='1893300'>same</span> <span m='1893570'>method.</span> <span
  m='1894330'>Here's</span> <span m='1894460'>how</span> <span
  m='1894620'>it</span> <span m='1894690'>works.</span> </p><p><span
  m='1902460'>Here's</span> <span m='1902570'>our</span> <span
  m='1902720'>ten</span> <span m='1902980'>data</span> <span
  m='1903220'>points.</span> <span m='1903900'>Their</span> <span
  m='1904100'>current</span> <span m='1904460'>weight</span> <span
  m='1904680'>is</span> <span m='1904800'>1/10,</span> <span m='1906310'>all
  of</span> <span m='1906625'>them.</span> <span m='1915410'>We're</span> <span
  m='1915610'>about</span> <span m='1915860'>to</span> <span
  m='1916040'>re-weight</span> <span m='1916530'>them</span> <span
  m='1916770'>for</span> <span m='1916890'>the</span> <span
  m='1917030'>next</span> <span m='1917420'>step.</span> <span
  m='1918900'>So</span> <span m='1920700'>you</span> <span
  m='1920820'>agree</span> <span m='1921090'>they're</span> <span
  m='1921270'>all</span> <span m='1921420'>1/10?</span> <span
  m='1921950'>They're</span> <span m='1922120'>equal,</span> <span
  m='1922490'>to</span> <span m='1922600'>start</span> <span
  m='1922860'>off.</span> </p><p><span m='1923600'>So</span> <span
  m='1925040'>step</span> <span m='1925210'>one--</span> <span
  m='1927740'>erase</span> <span m='1928220'>the</span> <span
  m='1928320'>denominators.</span> <span m='1931830'>Screw</span> <span
  m='1932170'>fractions.</span> <span m='1932620'>I</span> <span
  m='1932690'>don't</span> <span m='1932890'>like</span> <span
  m='1933160'>them.</span> <span m='1934150'>There's</span> <span
  m='1934530'>division,</span> <span m='1935850'>multiplication.</span> <span
  m='1936940'>It's</span> <span m='1937070'>a</span> <span
  m='1937140'>pain.</span> <span m='1937530'>I</span> <span
  m='1937720'>just</span> <span m='1937890'>want</span> <span
  m='1938020'>to</span> <span m='1938140'>add</span> <span
  m='1938490'>whole</span> <span m='1938800'>numbers.</span> <span
  m='1939910'>That's</span> <span m='1940140'>what</span> <span
  m='1940220'>we're</span> <span m='1940330'>going</span> <span
  m='1940460'>to</span> <span m='1940530'>do.</span> </p><p><span
  m='1941240'>So</span> <span m='1941680'>which</span> <span
  m='1941890'>ones</span> <span m='1942120'>do</span> <span
  m='1942200'>we</span> <span m='1942300'>get</span> <span
  m='1942540'>wrong?</span> <span m='1944150'>3 and</span> <span
  m='1944620'>10.</span> <span m='1945100'>Circle</span> <span
  m='1945600'>those.</span> <span m='1950940'>All</span> <span
  m='1951040'>right.</span> <span m='1953240'>Add</span> <span
  m='1953590'>the</span> <span m='1953680'>numbers</span> <span
  m='1954050'>in</span> <span m='1954140'>the</span> <span
  m='1954210'>circles</span> <span m='1955230'>and</span> <span
  m='1955380'>multiply</span> <span m='1955770'>by</span> <span
  m='1955950'>2.</span> <span m='1957600'>What</span> <span
  m='1957750'>does</span> <span m='1957880'>that</span> <span
  m='1958060'>give</span> <span m='1958210'>you?</span> <span
  m='1959800'>4.</span> <span m='1960900'>That's</span> <span m='1961250'>the
  new</span> <span m='1961390'>denominator.</span> </p><p><span
  m='1964375'>AUDIENCE: Do you</span> <span m='1964832'>always multiply</span>
  <span m='1965289'>by 2,</span> <span m='1965746'>or just--</span> </p><p><span
  m='1966210'>PROFESSOR: You</span> <span m='1966400'>always</span> <span
  m='1966700'>multiply</span> <span m='1967090'>by</span> <span
  m='1967270'>2.</span> <span m='1968900'>Add</span> <span
  m='1969130'>the</span> <span m='1969180'>numbers</span> <span
  m='1969470'>not</span> <span m='1969740'>in</span> <span
  m='1969780'>the</span> <span m='1969870'>circles.</span> <span
  m='1970760'>Multiply</span> <span m='1971070'>by</span> <span
  m='1971140'>2.</span> <span m='1971770'>What does</span> <span
  m='1971900'>that</span> <span m='1971940'>give</span> <span
  m='1972160'>you?</span> </p><p><span m='1972570'>AUDIENCE: 16.</span>
  </p><p><span m='1973210'>PROFESSOR: 16.</span> <span m='1974270'>That's</span>
  <span m='1974520'>the</span> <span m='1974600'>new</span> <span
  m='1974710'>denominator.</span> <span m='1976270'>The</span> <span
  m='1976440'>final,</span> <span m='1976850'>crucial</span> <span
  m='1977240'>step</span> <span m='1977950'>so that</span> <span
  m='1978310'>we</span> <span m='1978430'>can</span> <span m='1978620'>do</span>
  <span m='1978720'>this</span> <span m='1978880'>again</span> <span
  m='1979190'>next</span> <span m='1979510'>round</span> <span
  m='1980750'>is</span> <span m='1981010'>by</span> <span m='1981170'>far</span>
  <span m='1981630'>the</span> <span m='1981720'>most</span> <span
  m='1981960'>mathematically</span> <span m='1982550'>complicated</span> <span
  m='1983140'>thing</span> <span m='1983330'>here</span> <span
  m='1983520'>because</span> <span m='1983710'>we</span> <span
  m='1983850'>have</span> <span m='1984050'>to</span> <span
  m='1984900'>actually</span> <span m='1985170'>do</span> <span
  m='1985330'>something</span> <span m='1985670'>with</span> <span
  m='1985790'>fractions,</span> <span m='1986190'>but it's</span> <span
  m='1986350'>not</span> <span m='1986550'>too</span> <span
  m='1986670'>bad--</span> <span m='1987430'>is</span> <span
  m='1987730'>we</span> <span m='1987970'>then</span> <span
  m='1988290'>change</span> <span m='1988990'>everything</span> <span
  m='1989450'>to</span> <span m='1989550'>be</span> <span
  m='1989860'>with</span> <span m='1990070'>the</span> <span
  m='1990150'>same</span> <span m='1990430'>denominator.</span> <span
  m='1991460'>So</span> <span m='1991540'>the</span> <span
  m='1991640'>1/4's</span> <span m='1992310'>become?</span> </p><p><span
  m='1994210'>AUDIENCE: 4/16.</span> </p><p><span m='1994600'>PROFESSOR:
  4/16.</span> <span m='2001850'>All</span> <span m='2001940'>right.</span>
  <span m='2002770'>I</span> <span m='2002890'>can</span> <span
  m='2003050'>also</span> <span m='2003610'>uncircle</span> <span
  m='2004050'>these</span> <span m='2004560'>for</span> <span
  m='2004750'>next--</span> <span m='2006152'>ah.</span> <span
  m='2006618'>I</span> <span m='2007084'>hit the</span> <span
  m='2008020'>that</span> <span m='2008400'>button.</span> <span
  m='2010880'>All</span> <span m='2010950'>right.</span> <span
  m='2016290'>New</span> <span m='2016470'>weights--</span> <span
  m='2018800'>1/16,</span> <span m='2019550'>1/16,</span> <span
  m='2020735'>4/16,</span> <span m='2022320'>1/16,</span> <span
  m='2023820'>1/16,</span> <span m='2024820'>1/16,</span> <span
  m='2026320'>1/16,</span> <span m='2027758'>1/16,</span> <span
  m='2029072'>4/16.</span> <span m='2030760'>Note,</span> <span
  m='2031310'>the</span> <span m='2031420'>weights</span> <span
  m='2031700'>add</span> <span m='2031840'>up</span> <span m='2031940'>to</span>
  <span m='2032040'>1.</span> <span m='2032620'>The</span> <span
  m='2032710'>ones you</span> <span m='2032890'>got</span> <span
  m='2033120'>wrong</span> <span m='2033400'>add up</span> <span
  m='2033600'>to</span> <span m='2033680'>1/2.</span> <span m='2034160'>The
  ones</span> <span m='2034360'>you</span> <span m='2034430'>got</span> <span
  m='2034630'>right</span> <span m='2034910'>add up</span> <span
  m='2035160'>to</span> <span m='2035250'>1/2.</span> <span
  m='2036040'>You're</span> <span m='2036210'>happy.</span> </p><p><span
  m='2036910'>So</span> <span m='2038390'>now</span> <span
  m='2038730'>that</span> <span m='2038890'>you</span> <span
  m='2039030'>get</span> <span m='2039350'>4/16</span> <span
  m='2040100'>of</span> <span m='2040180'>an</span> <span
  m='2040260'>error</span> <span m='2040520'>for getting</span> <span
  m='2040850'>3</span> <span m='2041050'>wrong,</span> <span
  m='2041700'>4/16</span> <span m='2042020'>of an</span> <span
  m='2042410'>error</span> <span m='2042790'>for</span> <span
  m='2042940'>getting</span> <span m='2043160'>10</span> <span
  m='2043430'>wrong,</span> <span m='2044300'>take</span> <span
  m='2044530'>a</span> <span m='2044600'>look</span> <span m='2044780'>at</span>
  <span m='2044850'>these</span> <span m='2045050'>six.</span> <span
  m='2045650'>I'm</span> <span m='2045800'>not</span> <span
  m='2045960'>going</span> <span m='2046050'>to</span> <span
  m='2046100'>call</span> <span m='2046350'>on</span> <span
  m='2046530'>someone,</span> <span m='2046910'>just</span> <span
  m='2048610'>whoever's</span> <span m='2048920'>good</span> <span
  m='2049110'>at</span> <span m='2049210'>math</span> <span
  m='2049469'>and</span> <span m='2049510'>can</span> <span
  m='2049690'>add</span> <span m='2049900'>these</span> <span
  m='2050120'>up</span> <span m='2050360'>more</span> <span
  m='2050530'>quickly--</span> <span m='2051500'>just</span> <span m='2051800'>3
  and</span> <span m='2052120'>10</span> <span m='2052610'>count as</span> <span
  m='2052949'>4.</span> <span m='2053400'>All the</span> <span
  m='2053580'>others</span> <span m='2053800'>count</span> <span
  m='2054040'>as</span> <span m='2054110'>1.</span> <span m='2054530'>Add</span>
  <span m='2054850'>them</span> <span m='2055120'>up.</span> <span
  m='2055679'>Tell</span> <span m='2055820'>me</span> <span
  m='2055949'>which</span> <span m='2056110'>one's</span> <span
  m='2056280'>the</span> <span m='2056360'>lightest.</span> <span
  m='2056929'>What did</span> <span m='2057120'>you</span> <span
  m='2057230'>say?</span> </p><p><span m='2057505'>AUDIENCE: I'd go</span> <span
  m='2057780'>with B.</span> </p><p><span m='2058650'>PROFESSOR: You'd</span>
  <span m='2058800'>go with</span> <span m='2059090'>B.</span> <span
  m='2059560'>It</span> <span m='2059699'>doesn't</span> <span
  m='2059940'>get</span> <span m='2060159'>3</span> <span
  m='2060320'>wrong.</span> <span m='2060710'>That</span> <span
  m='2060940'>sounds</span> <span m='2061300'>pretty</span> <span
  m='2061540'>good</span> <span m='2061940'>to</span> <span
  m='2062100'>me.</span> <span m='2063330'>Does</span> <span
  m='2063469'>everyone</span> <span m='2063719'>else</span> <span
  m='2063929'>like</span> <span m='2064110'>B as</span> <span
  m='2064610'>well?</span> </p><p><span m='2065889'>I</span> <span
  m='2066040'>like</span> <span m='2066310'>it.</span> <span
  m='2067159'>I</span> <span m='2067280'>mean,</span> <span m='2067940'>all of
  our</span> <span m='2068239'>ones</span> <span m='2068449'>that</span> <span
  m='2068530'>don't</span> <span m='2068690'>get</span> <span
  m='2069219'>3</span> <span m='2069409'>wrong</span> <span
  m='2070380'>or</span> <span m='2070630'>10</span> <span
  m='2070880'>wrong,</span> <span m='2071989'>we're</span> <span
  m='2072179'>only</span> <span m='2072510'>looking</span> <span
  m='2072860'>at</span> <span m='2073050'>B and</span> <span
  m='2073455'>D.</span> <span m='2074080'>And</span> <span m='2075489'>D
  has</span> <span m='2075850'>seven.</span> <span m='2076909'>B</span> <span
  m='2077179'>has</span> <span m='2077400'>four.</span> <span
  m='2078750'>So</span> <span m='2080080'>B</span> <span m='2080429'>is</span>
  <span m='2080560'>the</span> <span m='2080630'>best.</span> <span
  m='2081360'>B</span> <span m='2081520'>gets</span> <span
  m='2081730'>4/16</span> <span m='2082380'>wrong.</span> <span
  m='2082800'>Does</span> <span m='2082920'>everyone</span> <span
  m='2083190'>see</span> <span m='2083350'>that?</span> <span
  m='2084540'>Because</span> <span m='2085600'>even</span> <span
  m='2085850'>getting</span> <span m='2086090'>one</span> <span
  m='2086500'>of</span> <span m='2086690'>3</span> <span m='2087090'>or</span>
  <span m='2087239'>10</span> <span m='2087480'>wrong</span> <span
  m='2087920'>is</span> <span m='2088090'>as</span> <span m='2088199'>bad</span>
  <span m='2088690'>as</span> <span m='2088880'>all</span> <span
  m='2089190'>the</span> <span m='2089280'>ones</span> <span
  m='2089530'>that</span> <span m='2089620'>B</span> <span
  m='2089800'>gets</span> <span m='2090030'>wrong because</span> <span
  m='2090409'>of the</span> <span m='2090580'>new</span> <span
  m='2090739'>weights.</span> </p><p><span m='2092540'>So</span> <span
  m='2092880'>cool.</span> <span m='2093270'>Let's</span> <span
  m='2093530'>choose</span> <span m='2093730'>B.</span> <span
  m='2094469'>That's</span> <span m='2094760'>right.</span> <span
  m='2095540'>And</span> <span m='2096130'>I</span> <span
  m='2096260'>sort</span> <span m='2096520'>of</span> <span
  m='2096620'>gave</span> <span m='2096800'>it</span> <span
  m='2096850'>away.</span> <span m='2098820'>What's</span> <span
  m='2099070'>the</span> <span m='2099230'>error</span> <span m='2099860'>that
  B</span> <span m='2099960'>has?</span> <span m='2100740'>It</span> <span
  m='2100850'>has</span> <span m='2101000'>four</span> <span
  m='2102430'>wrong,</span> <span m='2102760'>each</span> <span
  m='2102920'>of</span> <span m='2103000'>which</span> <span
  m='2103130'>are</span> <span m='2103190'>worth</span> <span
  m='2103410'>1/16.</span> <span m='2104050'>The</span> <span
  m='2104390'>error</span> <span m='2104820'>is?</span> <span
  m='2106300'>What?</span> <span m='2106900'>4/16,</span> <span
  m='2107670'>or</span> <span m='2107810'>1/4,</span> <span
  m='2109000'>whichever</span> <span m='2109230'>is</span> <span
  m='2109400'>your</span> <span m='2109590'>favorite,</span> <span
  m='2112180'>which</span> <span m='2112380'>means</span> <span
  m='2112600'>that</span> <span m='2112710'>the</span> <span
  m='2112860'>alpha</span> <span m='2113400'>is?</span> </p><p><span
  m='2114300'>AUDIENCE: 1/2</span> <span m='2114710'>ln</span> <span
  m='2115120'>3.</span> </p><p><span m='2115530'>PROFESSOR: 1/2</span> <span
  m='2115750'>ln</span> <span m='2116280'>3.</span> <span
  m='2121023'>Bingo.</span> <span m='2122450'>Final</span> <span
  m='2122790'>round.</span> <span m='2124190'>OK,</span> <span
  m='2124840'>what</span> <span m='2124970'>did</span> <span
  m='2125010'>we</span> <span m='2125110'>get</span> <span
  m='2125310'>wrong?</span> <span m='2126010'>We</span> <span
  m='2126130'>got</span> <span m='2126370'>1,</span> <span m='2126650'>6,</span>
  <span m='2126990'>7,</span> <span m='2127360'>and 9</span> <span
  m='2127650'>wrong.</span> <span m='2130090'>Oh yeah,</span> <span
  m='2130220'>we</span> <span m='2130330'>can</span> <span
  m='2130440'>erase</span> <span m='2132180'>the</span> <span
  m='2134930'>denominators.</span> <span m='2140640'>All</span> <span
  m='2140810'>right.</span> <span m='2141970'>What</span> <span
  m='2142220'>are</span> <span m='2142290'>the</span> <span
  m='2143380'>numbers</span> <span m='2143750'>in</span> <span
  m='2143850'>the</span> <span m='2143930'>circles,</span> <span
  m='2144440'>summed</span> <span m='2144780'>up,</span> <span
  m='2145050'>multiplied</span> <span m='2145390'>by</span> <span
  m='2145520'>2?</span> </p><p><span m='2146612'>AUDIENCE: 8.</span>
  </p><p><span m='2147010'>PROFESSOR: That's</span> <span m='2147240'>8--</span>
  <span m='2147870'>1/8.</span> <span m='2151570'>And</span> <span
  m='2151860'>what</span> <span m='2151990'>about</span> <span
  m='2152170'>the</span> <span m='2152230'>numbers</span> <span
  m='2152530'>not</span> <span m='2152760'>in</span> <span
  m='2152850'>the</span> <span m='2152910'>circle,</span> <span
  m='2154120'>summed</span> <span m='2154430'>up,</span> <span
  m='2154800'>multiplied</span> <span m='2155070'>by</span> <span
  m='2155220'>2?</span> </p><p><span m='2156340'>AUDIENCE: 24.</span>
  </p><p><span m='2157750'>PROFESSOR: That's</span> <span
  m='2157960'>right--</span> <span m='2158210'>24,</span> <span
  m='2159460'>which</span> <span m='2159660'>means</span> <span
  m='2160090'>I'm</span> <span m='2160240'>going</span> <span
  m='2160360'>to</span> <span m='2160400'>have</span> <span
  m='2160590'>to</span> <span m='2160710'>change</span> <span
  m='2161160'>all</span> <span m='2161490'>the</span> <span
  m='2161600'>numbers</span> <span m='2161910'>in</span> <span
  m='2162060'>the</span> <span m='2162140'>circle</span> <span
  m='2162560'>to</span> <span m='2165020'>3/24,</span> <span
  m='2166010'>except</span> <span m='2166170'>I</span> <span
  m='2166270'>guess</span> <span m='2166560'>I</span> <span
  m='2166640'>don't</span> <span m='2166960'>because</span> <span
  m='2167240'>this</span> <span m='2167400'>is</span> <span
  m='2167480'>the</span> <span m='2167560'>last</span> <span
  m='2167920'>round.</span> <span m='2168760'>But</span> <span m='2168970'>if
  I</span> <span m='2169040'>was</span> <span m='2169210'>going</span> <span
  m='2169480'>to</span> <span m='2169540'>do</span> <span
  m='2169680'>another</span> <span m='2170030'>round--</span> <span
  m='2170350'>let's</span> <span m='2170670'>prepare</span> <span
  m='2170950'>in</span> <span m='2171230'>case we</span> <span
  m='2171510'>where,</span> <span m='2172670'>change</span> <span
  m='2172870'>all of</span> <span m='2173010'>these</span> <span
  m='2173190'>to</span> <span m='2173280'>3/24.</span> </p><p><span
  m='2183100'>Besides,</span> <span m='2183480'>it</span> <span
  m='2183600'>makes</span> <span m='2183850'>it</span> <span
  m='2183990'>easier</span> <span m='2184480'>to</span> <span
  m='2184840'>calculate</span> <span m='2185280'>which</span> <span
  m='2185440'>one is</span> <span m='2185650'>the</span> <span
  m='2185710'>best</span> <span m='2185960'>possible</span> <span
  m='2186290'>classifier</span> <span m='2186590'>because</span> <span
  m='2186750'>you</span> <span m='2186850'>can</span> <span
  m='2186970'>just</span> <span m='2187710'>use</span> <span
  m='2187930'>the</span> <span m='2188030'>numerators</span> <span
  m='2189440'>and</span> <span m='2189620'>sort</span> <span
  m='2189730'>of</span> <span m='2189810'>add</span> <span
  m='2190080'>them</span> <span m='2190230'>up.</span> <span
  m='2190820'>So</span> <span m='2190880'>while</span> <span
  m='2191020'>I'm</span> <span m='2191290'>writing</span> <span
  m='2191580'>that</span> <span m='2191830'>up,</span> <span
  m='2192420'>you</span> <span m='2192610'>guys</span> <span
  m='2193210'>figure</span> <span m='2193480'>out</span> <span
  m='2193580'>which</span> <span m='2193710'>one</span> <span
  m='2193910'>you</span> <span m='2194050'>like</span> <span
  m='2194320'>for</span> <span m='2194450'>classifier</span> <span
  m='2196370'>and call</span> <span m='2196730'>it out to</span> <span
  m='2197200'>me when</span> <span m='2197480'>I'm</span> <span
  m='2197640'>done.</span> <span m='2199590'>3/24.</span> <span
  m='2200360'>1/24.</span> <span m='2201160'>4/24.</span> <span
  m='2203340'>1/24.</span> <span m='2205000'>1/24.</span> <span
  m='2207320'>3/24.</span> <span m='2209290'>3/24.</span> <span
  m='2212350'>1/24.</span> <span m='2214540'>3/24--</span> <span
  m='2216340'>wait.</span> <span m='2216610'>I'm off</span> <span
  m='2216700'>by</span> <span m='2217140'>one</span> <span
  m='2217390'>here.</span> <span m='2218530'>3,</span> <span
  m='2218810'>1,</span> <span m='2219200'>4--</span> </p><p><span
  m='2220940'>AUDIENCE: It's</span> <span m='2221405'>because</span> <span
  m='2221870'>w1</span> <span m='2222335'>is not</span> <span
  m='2222800'>assigned</span> <span m='2223265'>to anything.</span> <span
  m='2223730'>So  w2</span> <span m='2224195'>is really</span> <span
  m='2224660'>w1.</span> </p><p><span m='2225600'>PROFESSOR: Aha.</span> <span
  m='2226710'>You're</span> <span m='2226950'>right.</span> <span
  m='2228730'>w1</span> <span m='2229270'>is</span> <span m='2229520'>not</span>
  <span m='2229720'>assigned</span> <span m='2230050'>to</span> <span
  m='2230590'>anything,</span> <span m='2231030'>so</span> <span
  m='2231900'>w2</span> <span m='2232230'>is</span> <span
  m='2232460'>really</span> <span m='2232700'>w1</span> <span
  m='2238390'>Yeah?</span> </p><p><span m='2239176'>AUDIENCE: There's an</span>
  <span m='2239570'>extra</span> <span m='2240046'>1/16</span> <span
  m='2240998'>between</span> <span m='2241474'>w1,</span> <span
  m='2241950'>w2.</span> <span m='2242902'>There's an</span> <span
  m='2243378'>extra</span> <span m='2243854'>1/16.</span> </p><p><span
  m='2245760'>PROFESSOR: Yes,</span> <span m='2246630'>that's</span> <span
  m='2246880'>true.</span> <span m='2248390'>OK,</span> <span
  m='2248750'>well--</span> </p><p><span m='2249130'>AUDIENCE: We get</span>
  <span m='2249510'>it.</span> </p><p><span m='2249890'>PROFESSOR: You</span>
  <span m='2250020'>get it.</span> <span m='2252160'>H,</span> <span
  m='2253050'>so</span> <span m='2253290'>what</span> <span
  m='2253480'>is</span> <span m='2253600'>the</span> <span
  m='2253670'>best</span> <span m='2253940'>H?</span> <span
  m='2254950'>You</span> <span m='2255090'>get</span> <span m='2255430'>it
  because</span> <span m='2255500'>it's</span> <span m='2255670'>right</span>
  <span m='2255930'>here.</span> <span m='2258550'>See?</span> <span
  m='2259420'>The</span> <span m='2259520'>process</span> <span
  m='2259790'>is</span> <span m='2260060'>so</span> <span
  m='2260270'>foolproof,</span> <span m='2260980'>even</span> <span
  m='2261190'>a</span> <span m='2261240'>fool</span> <span
  m='2261580'>like</span> <span m='2261760'>me</span> <span
  m='2261990'>can</span> <span m='2262120'>get</span> <span
  m='2262320'>it</span> <span m='2262400'>right</span> <span
  m='2262690'>while</span> <span m='2262910'>they</span> <span
  m='2263010'>have</span> <span m='2263180'>the</span> <span
  m='2263270'>chart</span> <span m='2263600'>wrong.</span> <span
  m='2265060'>All</span> <span m='2265150'>right,</span> <span
  m='2265540'>so</span> <span m='2265780'>what's</span> <span
  m='2266020'>the</span> <span m='2266100'>best</span> <span
  m='2266430'>classifier?</span> </p><p><span m='2267220'>AUDIENCE: C.</span>
  </p><p><span m='2268300'>PROFESSOR: You</span> <span m='2268480'>say</span>
  <span m='2268680'>C.</span> <span m='2269570'>I</span> <span
  m='2269740'>say</span> <span m='2270600'>that</span> <span
  m='2270910'>seems</span> <span m='2271290'>pretty</span> <span
  m='2271570'>reasonable.</span> <span m='2272382'>It</span> <span
  m='2272790'>only</span> <span m='2272990'>gets</span> <span m='2273200'>3,
  4,</span> <span m='2273580'>5, and</span> <span m='2273840'>8</span> <span
  m='2273920'>wrong.</span> <span m='2274770'>Does</span> <span
  m='2274920'>anyone</span> <span m='2275150'>else</span> <span
  m='2275390'>get</span> <span m='2275540'>a</span> <span
  m='2275600'>different</span> <span m='2275890'>answer?</span> </p><p><span
  m='2276460'>AUDIENCE: A.</span> </p><p><span m='2277510'>PROFESSOR:
  Someone</span> <span m='2277700'>else</span> <span m='2277930'>gets</span>
  <span m='2278200'>A.</span> <span m='2278750'>I</span> <span
  m='2278880'>like</span> <span m='2279120'>A.</span> <span
  m='2280050'>Who</span> <span m='2280230'>said</span> <span
  m='2280565'>A?</span> <span m='2281950'>A</span> <span m='2282050'>lot</span>
  <span m='2282250'>of</span> <span m='2282330'>people</span> <span
  m='2282570'>said</span> <span m='2283005'>A.</span> </p><p><span
  m='2283690'>Well,</span> <span m='2284010'>let's</span> <span
  m='2284220'>figure</span> <span m='2284500'>it</span> <span
  m='2284580'>out.</span> <span m='2285750'>So</span> <span m='2286330'>A</span>
  <span m='2287300'>gets</span> <span m='2287660'>1,</span> <span
  m='2288560'>5,</span> <span m='2289690'>6,</span> <span m='2290660'>7.</span>
  <span m='2292000'>C</span> <span m='2292290'>gets</span> <span
  m='2292950'>4,</span> <span m='2293490'>5,</span> <span m='2293820'>6,</span>
  <span m='2294100'>7.</span> <span m='2294740'>They're,</span> <span
  m='2294930'>in</span> <span m='2295010'>fact,</span> <span
  m='2295550'>equal.</span> <span m='2296900'>Tie-break</span> <span
  m='2297520'>goes</span> <span m='2297850'>to</span> <span
  m='2297990'>the</span> <span m='2298380'>lower</span> <span
  m='2298730'>letter</span> <span m='2299500'>because</span> <span
  m='2300530'>that's</span> <span m='2300790'>what</span> <span
  m='2300870'>we</span> <span m='2300980'>said.</span> <span m='2302330'>In
  fact,</span> <span m='2302730'>I</span> <span m='2302850'>didn't</span> <span
  m='2303110'>tell</span> <span m='2303330'>you,</span> <span
  m='2303550'>but</span> <span m='2303700'>that's</span> <span
  m='2303870'>what</span> <span m='2303970'>we</span> <span
  m='2304070'>said.</span> <span m='2304390'>Question?</span> </p><p><span
  m='2305130'>AUDIENCE: So</span> <span m='2305620'>when we</span> <span
  m='2306110'>were deciding</span> <span m='2306600'>which classifier</span>
  <span m='2307090'>to use,</span> <span m='2307580'>can we</span> <span
  m='2308070'>only</span> <span m='2308560'>look</span> <span m='2309050'>at the
  weights,</span> <span m='2309540'>or do we</span> <span m='2310030'>also
  have</span> <span m='2310520'>to look at</span> <span m='2311010'>the</span>
  <span m='2311500'>[INAUDIBLE]--</span> </p><p><span m='2312970'>PROFESSOR:
  Ignore</span> <span m='2313230'>all</span> <span m='2313420'>previous</span>
  <span m='2313730'>rounds.</span> <span m='2315160'>The</span> <span
  m='2315230'>question</span> <span m='2315790'>is,</span> <span m='2316200'>do
  you</span> <span m='2316380'>only</span> <span m='2316600'>look</span> <span
  m='2316760'>at</span> <span m='2316820'>the</span> <span
  m='2316910'>current</span> <span m='2317300'>weights</span> <span
  m='2317700'>when</span> <span m='2318450'>determining a</span> <span
  m='2318830'>classifier?</span> <span m='2319460'>Or</span> <span
  m='2319770'>do</span> <span m='2319870'>you</span> <span
  m='2319980'>look</span> <span m='2320450'>at</span> <span
  m='2320680'>the</span> <span m='2320760'>previous</span> <span
  m='2321150'>rounds</span> <span m='2321420'>as</span> <span
  m='2321530'>well?</span> </p><p><span m='2322530'>You</span> <span
  m='2322680'>have</span> <span m='2322910'>to</span> <span
  m='2323000'>ignore</span> <span m='2323350'>the</span> <span
  m='2323460'>previous</span> <span m='2323820'>rounds.</span> <span
  m='2324360'>Trust</span> <span m='2324660'>me.</span> <span
  m='2324760'>They</span> <span m='2324930'>will</span> <span
  m='2325220'>be</span> <span m='2325390'>used</span> <span
  m='2326030'>later</span> <span m='2326420'>in</span> <span
  m='2326570'>the</span> <span m='2326640'>vote.</span> <span
  m='2327450'>But</span> <span m='2327590'>it's</span> <span
  m='2327720'>sort</span> <span m='2327920'>of</span> <span
  m='2328060'>like</span> <span m='2329240'>tainting</span> <span
  m='2329680'>the</span> <span m='2329780'>jury</span> <span
  m='2330220'>a</span> <span m='2330290'>little</span> <span
  m='2330550'>bit</span> <span m='2330940'>to</span> <span
  m='2331240'>use</span> <span m='2331560'>the</span> <span
  m='2331680'>previous</span> <span m='2332220'>rounds</span> <span
  m='2333280'>when</span> <span m='2333420'>you're</span> <span
  m='2333510'>doing</span> <span m='2333670'>the</span> <span
  m='2333750'>current</span> <span m='2333990'>round.</span> <span
  m='2334250'>Because</span> <span m='2334330'>you</span> <span
  m='2334430'>want</span> <span m='2334570'>to</span> <span
  m='2334630'>start</span> <span m='2334980'>fresh</span> <span
  m='2335750'>with</span> <span m='2335930'>these</span> <span
  m='2336170'>new</span> <span m='2336330'>weights,</span> <span
  m='2336910'>get</span> <span m='2337050'>a</span> <span m='2337080'>new</span>
  <span m='2337310'>classifier.</span> <span m='2337930'>And</span> <span
  m='2338110'>then</span> <span m='2338260'>later,</span> <span
  m='2338760'>everyone</span> <span m='2339080'>will get</span> <span
  m='2339360'>to</span> <span m='2339440'>make</span> <span
  m='2339610'>their</span> <span m='2339760'>vote.</span> <span
  m='2340460'>So</span> <span m='2340600'>you</span> <span
  m='2340790'>only</span> <span m='2341090'>do</span> <span
  m='2341260'>it</span> <span m='2341360'>based</span> <span
  m='2341590'>on</span> <span m='2341750'>the</span> <span
  m='2341870'>current</span> <span m='2342310'>weights.</span> </p><p><span
  m='2342750'>AUDIENCE: We don't</span> <span m='2343235'>take any</span> <span
  m='2343720'>consideration if</span> <span m='2344205'>the last round's</span>
  <span m='2345175'>6</span> <span m='2345660'>was wrong</span> <span
  m='2346145'>or anything.</span> </p><p><span m='2346630'>PROFESSOR:
  Nope,</span> <span m='2347120'>although</span> <span m='2347970'>the</span>
  <span m='2348040'>weights</span> <span m='2348340'>take into</span> <span
  m='2348595'>consideration</span> <span m='2348850'>is when</span> <span
  m='2349340'>it's</span> <span m='2349640'>wrong,</span> <span m='2350040'>it's
  going</span> <span m='2350517'>to increase.</span> </p><p><span
  m='2351471'>AUDIENCE: OK.</span> </p><p><span m='2352425'>PROFESSOR:
  Question?</span> </p><p><span m='2353379'>AUDIENCE: Could you</span> <span
  m='2353856'>theoretically</span> <span m='2354333'>reuse</span> <span
  m='2354810'>a</span> <span m='2355287'>classifier?</span> </p><p><span
  m='2355764'>PROFESSOR: The question is,</span> <span m='2356241'>could</span>
  <span m='2356720'>you</span> <span m='2356880'>theoretically</span> <span
  m='2357195'>reuse</span> <span m='2357510'>a</span> <span
  m='2357870'>classifier?</span> <span m='2358895'>Answer--</span> <span
  m='2359665'>you</span> <span m='2360050'>absolutely</span> <span
  m='2360570'>can.</span> <span m='2361220'>When</span> <span
  m='2361380'>that</span> <span m='2361520'>happens,</span> <span
  m='2361970'>it</span> <span m='2362170'>essentially</span> <span
  m='2362610'>gets</span> <span m='2362830'>extra</span> <span
  m='2363210'>weight</span> <span m='2363470'>because you</span> <span
  m='2363590'>used</span> <span m='2363840'>it</span> <span
  m='2363910'>again.</span> <span m='2364540'>But</span> <span
  m='2365500'>you</span> <span m='2365630'>can</span> <span
  m='2365940'>never,</span> <span m='2366520'>ever</span> <span
  m='2366810'>use</span> <span m='2367140'>it</span> <span
  m='2367270'>twice</span> <span m='2367680'>in</span> <span
  m='2367780'>a</span> <span m='2367860'>row.</span> </p><p><span
  m='2369680'>Here's</span> <span m='2369870'>why.</span> <span
  m='2370460'>Let's</span> <span m='2370790'>say</span> <span
  m='2370910'>that</span> <span m='2371010'>we</span> <span
  m='2371090'>want</span> <span m='2371280'>to</span> <span
  m='2371330'>use--</span> <span m='2372160'>which</span> <span
  m='2372410'>was</span> <span m='2372540'>the one</span> <span
  m='2372700'>we</span> <span m='2372810'>used</span> <span
  m='2373060'>last</span> <span m='2373390'>over</span> <span
  m='2373530'>there?</span> <span m='2373650'>B?</span> <span
  m='2374170'>Let's</span> <span m='2374370'>say</span> <span m='2374480'>we
  wanted</span> <span m='2374720'>to use</span> <span m='2374930'>B</span> <span
  m='2375185'>again.</span> <span m='2375440'>What</span> <span
  m='2375600'>does</span> <span m='2375750'>it</span> <span
  m='2375850'>give</span> <span m='2376020'>us?</span> <span
  m='2377780'>50-50.</span> </p><p><span m='2379890'>If</span> <span
  m='2380010'>we</span> <span m='2380090'>wanted</span> <span
  m='2380290'>to</span> <span m='2380430'>use</span> <span m='2380490'>B</span>
  <span m='2380880'>and</span> <span m='2381010'>then</span> <span
  m='2381200'>B--</span> <span m='2381670'>3,</span> <span m='2381860'>6,
  9,</span> <span m='2382243'>12</span> <span m='2383010'>wrong.</span> <span
  m='2383750'>Always</span> <span m='2384250'>guaranteed</span> <span
  m='2384870'>to</span> <span m='2384960'>give</span> <span
  m='2385110'>you</span> <span m='2385190'>50-50,</span> <span
  m='2385820'>which</span> <span m='2387390'>is</span> <span
  m='2387540'>the</span> <span m='2387680'>only</span> <span
  m='2387930'>way</span> <span m='2388130'>that you</span> <span
  m='2388300'>can</span> <span m='2388420'>be</span> <span
  m='2388500'>sure</span> <span m='2388840'>you'll</span> <span
  m='2388980'>never</span> <span m='2389300'>use</span> <span
  m='2389560'>it.</span> <span m='2390030'>In</span> <span
  m='2390130'>fact,</span> <span m='2390240'>that's</span> <span
  m='2390450'>by</span> <span m='2390600'>design.</span> <span
  m='2391880'>You</span> <span m='2391900'>could</span> <span
  m='2392130'>reuse</span> <span m='2392470'>it,</span> <span
  m='2392660'>but</span> <span m='2393160'>not</span> <span
  m='2393620'>twice</span> <span m='2393910'>in a</span> <span
  m='2394050'>row.</span> <span m='2394420'>It could</span> <span
  m='2394590'>be</span> <span m='2394690'>used</span> <span
  m='2394990'>later</span> <span m='2395380'>on</span> <span
  m='2395770'>down</span> <span m='2396030'>the</span> <span
  m='2396110'>stream.</span> </p><p><span m='2397100'>And</span> <span
  m='2397250'>it</span> <span m='2397320'>will</span> <span
  m='2397600'>be</span> <span m='2397880'>used.</span> <span
  m='2398360'>Because</span> <span m='2398860'>if</span> <span
  m='2398980'>you</span> <span m='2399130'>do</span> <span
  m='2400010'>seven</span> <span m='2400470'>rounds,</span> <span
  m='2400960'>one</span> <span m='2401170'>of</span> <span
  m='2401280'>them</span> <span m='2401430'>has</span> <span
  m='2401660'>to</span> <span m='2401720'>be</span> <span
  m='2401860'>reused.</span> <span m='2403160'>It</span> <span
  m='2403270'>just</span> <span m='2403470'>gives</span> <span
  m='2403630'>more</span> <span m='2403980'>weight</span> <span
  m='2404830'>to</span> <span m='2405050'>whichever</span> <span
  m='2405400'>one</span> <span m='2405570'>is</span> <span
  m='2405660'>reused.</span> <span m='2405980'>But</span> <span
  m='2406140'>yes,</span> <span m='2406490'>A</span> <span
  m='2406710'>wins</span> <span m='2407050'>against</span> <span
  m='2407890'>C.</span> <span m='2408205'>C</span> <span m='2408520'>was</span>
  <span m='2408640'>a</span> <span m='2408700'>perfectly</span> <span
  m='2409190'>good</span> <span m='2409480'>answer</span> <span
  m='2409730'>as</span> <span m='2409840'>well.</span> <span
  m='2410140'>Question?</span> </p><p><span m='2410510'>AUDIENCE: Wait,</span>
  <span m='2411000'>can you</span> <span m='2411490'>reuse</span> <span
  m='2411980'>[INAUDIBLE]?</span> </p><p><span m='2412960'>PROFESSOR:
  What?</span> </p><p><span m='2413340'>AUDIENCE: Instead of</span> <span
  m='2413720'>A or</span> <span m='2414174'>C.</span> </p><p><span
  m='2414628'>PROFESSOR: OK.</span> <span m='2415082'>If you</span> <span
  m='2415536'>could</span> <span m='2415990'>reuse,</span> <span m='2416444'>why
  doesn't</span> <span m='2416900'>he</span> <span m='2417130'>pick</span> <span
  m='2417410'>E?</span> <span m='2418520'>E</span> <span m='2418660'>gets</span>
  <span m='2418930'>eight</span> <span m='2419670'>out of</span> <span
  m='2419860'>24</span> <span m='2420030'>wrong.</span> <span m='2420380'>It's
  one</span> <span m='2420610'>worse</span> <span m='2420940'>than</span> <span
  m='2421410'>A and</span> <span m='2421750'>C.</span> <span
  m='2423830'>That's</span> <span m='2424160'>the</span> <span
  m='2424320'>only</span> <span m='2424510'>reason.</span> <span
  m='2425620'>Next</span> <span m='2425940'>step</span> <span
  m='2426140'>will</span> <span m='2426270'>probably</span> <span
  m='2426610'>use</span> <span m='2426850'>A--</span> <span
  m='2427340'>or</span> <span m='2427500'>sorry.</span> <span m='2427760'>Well,
  next</span> <span m='2428030'>step,</span> <span m='2428060'>we'll</span>
  <span m='2428210'>probably</span> <span m='2428420'>use</span> <span
  m='2428650'>E,</span> <span m='2429660'>frankly--</span> <span
  m='2430640'>although</span> <span m='2430720'>maybe</span> <span
  m='2431020'>not,</span> <span m='2431370'>because</span> <span
  m='2432990'>we</span> <span m='2433120'>got</span> <span m='2433350'>3</span>
  <span m='2433540'>wrong</span> <span m='2433880'>on</span> <span
  m='2434060'>A.</span> <span m='2435190'>But</span> <span
  m='2435380'>pretty</span> <span m='2435640'>soon,</span> <span
  m='2436040'>we</span> <span m='2436150'>would</span> <span
  m='2436220'>use</span> <span m='2436520'>E</span> <span
  m='2436790'>again</span> <span m='2437060'>because</span> <span
  m='2437150'>E's</span> <span m='2437420'>pretty</span> <span
  m='2437680'>awesome.</span> </p><p><span m='2438670'>But</span> <span
  m='2439050'>anyway, here</span> <span m='2439210'>we</span> <span
  m='2439340'>used</span> <span m='2439600'>A.</span> <span m='2440710'>And
  we</span> <span m='2440830'>said</span> <span m='2441010'>we</span> <span
  m='2441080'>got</span> <span m='2441260'>7/24</span> <span
  m='2442160'>wrong.</span> <span m='2443310'>Oh,</span> <span
  m='2443420'>man,</span> <span m='2443720'>we</span> <span
  m='2443840'>can't</span> <span m='2444080'>use</span> <span
  m='2444230'>my</span> <span m='2444360'>little</span> <span
  m='2444560'>shortcut.</span> <span m='2445220'>So</span> <span
  m='2445360'>the</span> <span m='2445490'>answer,</span> <span
  m='2445960'>it</span> <span m='2446260'>has</span> <span m='2446510'>to</span>
  <span m='2446580'>be</span> <span m='2446710'>17/7--</span> <span
  m='2448270'>or</span> <span m='2448460'>1/2</span> <span
  m='2448830'>natural</span> <span m='2449160'>log</span> <span
  m='2449450'>of</span> <span m='2449600'>17/7.</span> <span
  m='2455060'>So</span> <span m='2456640'>there</span> <span
  m='2456800'>we</span> <span m='2456900'>go.</span> </p><p><span
  m='2458260'>Now,</span> <span m='2458740'>we</span> <span
  m='2458860'>have</span> <span m='2459030'>to</span> <span
  m='2459120'>ask,</span> <span m='2459390'>what</span> <span
  m='2459570'>is</span> <span m='2459660'>the</span> <span
  m='2459730'>final</span> <span m='2460170'>classifier</span> <span
  m='2462600'>that</span> <span m='2462760'>we</span> <span
  m='2462870'>created</span> <span m='2463170'>from</span> <span
  m='2463310'>all</span> <span m='2463450'>these</span> <span
  m='2463660'>things?</span> <span m='2464330'>All</span> <span
  m='2464520'>we</span> <span m='2464620'>do</span> <span m='2464910'>is</span>
  <span m='2465710'>we</span> <span m='2465870'>sum</span> <span
  m='2466290'>up</span> <span m='2467020'>all</span> <span
  m='2467380'>the</span> <span m='2467460'>classifiers</span> <span
  m='2468000'>we</span> <span m='2468170'>chose.</span> <span m='2469680'>And
  we</span> <span m='2469780'>multiply</span> <span m='2470320'>them</span>
  <span m='2470530'>times</span> <span m='2470850'>their</span> <span
  m='2470980'>weight,</span> <span m='2471420'>alpha.</span> <span
  m='2472100'>So</span> <span m='2473760'>1/2</span> <span m='2475200'>ln</span>
  <span m='2475600'>4</span> <span m='2476610'>times</span> <span
  m='2477910'>E,</span> <span m='2478520'>whether</span> <span
  m='2478780'>or</span> <span m='2478820'>not</span> <span m='2479020'>E</span>
  <span m='2479170'>returns</span> <span m='2479620'>true,</span> <span
  m='2482550'>plus</span> <span m='2484750'>1/2</span> <span
  m='2485400'>ln</span> <span m='2485880'>3</span> <span
  m='2486600'>times</span> <span m='2487180'>B</span> <span
  m='2488780'>plus</span> <span m='2489900'>1/2</span> <span
  m='2491110'>ln</span> <span m='2491440'>17/7</span> <span
  m='2492830'>times</span> <span m='2493150'>A,</span> <span
  m='2494720'>is</span> <span m='2494860'>our</span> <span
  m='2494970'>final</span> <span m='2495260'>classifier,</span> <span
  m='2496020'>where</span> <span m='2496370'>E</span> <span
  m='2496990'>returns</span> <span m='2497180'>a</span> <span
  m='2497270'>plus</span> <span m='2497640'>1</span> <span m='2499240'>if</span>
  <span m='2499680'>E</span> <span m='2499870'>thinks</span> <span
  m='2500110'>it's</span> <span m='2500220'>a</span> <span
  m='2500250'>vampire,</span> <span m='2500525'>and a</span> <span
  m='2500800'>minus</span> <span m='2501150'>1</span> <span
  m='2501330'>if</span> <span m='2501430'>E</span> <span
  m='2501760'>think</span> <span m='2501840'>it's</span> <span
  m='2502020'>not.</span> <span m='2502920'>Same for</span> <span m='2503300'>B
  and</span> <span m='2503550'>A,</span> <span m='2504800'>all</span> <span
  m='2504870'>right?</span> </p><p><span m='2507020'>And</span> <span
  m='2507090'>then</span> <span m='2507710'>we</span> <span
  m='2507890'>take</span> <span m='2508100'>the</span> <span
  m='2508180'>sign</span> <span m='2508540'>of</span> <span
  m='2508660'>this.</span> <span m='2509180'>And</span> <span
  m='2509350'>I</span> <span m='2509410'>don't</span> <span
  m='2509680'>mean</span> <span m='2509870'>sine and</span> <span
  m='2510230'>cosine.</span> <span m='2510830'>I</span> <span
  m='2510940'>mean</span> <span m='2511280'>just,</span> <span
  m='2511550'>just</span> <span m='2511820'>is</span> <span
  m='2511980'>it</span> <span m='2512110'>positive</span> <span
  m='2512360'>or</span> <span m='2512640'>negative?</span> <span
  m='2514640'>OK?</span> <span m='2516190'>So</span> <span
  m='2516310'>the</span> <span m='2516390'>question</span> <span
  m='2517400'>now</span> <span m='2517900'>on</span> <span
  m='2518280'>the</span> <span m='2519060'>exam</span> <span
  m='2519480'>is,</span> <span m='2520000'>how</span> <span
  m='2520200'>many</span> <span m='2520450'>of</span> <span
  m='2520560'>the</span> <span m='2520800'>ten</span> <span
  m='2521020'>data</span> <span m='2521190'>points do</span> <span
  m='2521380'>you</span> <span m='2521480'>get</span> <span
  m='2521690'>right</span> <span m='2522120'>if</span> <span
  m='2522250'>we</span> <span m='2522360'>used</span> <span
  m='2522570'>this?</span> <span m='2524720'>Let's</span> <span
  m='2524990'>give</span> <span m='2525140'>it</span> <span m='2525220'>a</span>
  <span m='2525300'>look</span> <span m='2525570'>see.</span> <span
  m='2525906'>E</span> <span m='2526580'>is--</span> <span m='2527440'>so</span>
  <span m='2527560'>we</span> <span m='2527650'>have</span> <span
  m='2527870'>romantic</span> <span m='2528350'>interest</span> <span
  m='2528480'>greater</span> <span m='2528700'>than</span> <span
  m='2528880'>2.</span> <span m='2529830'>We</span> <span
  m='2530000'>have</span> <span m='2530470'>emo</span> <span
  m='2531100'>yes.</span> <span m='2531610'>And</span> <span
  m='2531740'>we</span> <span m='2531830'>have</span> <span
  m='2532180'>evil</span> <span m='2532500'>yes.</span> </p><p><span
  m='2533140'>So</span> <span m='2533930'>oh</span> <span m='2534100'>my</span>
  <span m='2534220'>gosh,</span> <span m='2535500'>logarithms,</span> <span
  m='2536270'>they're</span> <span m='2537760'>sometimes</span> <span
  m='2538150'>annoying.</span> <span m='2538760'>Do</span> <span
  m='2538870'>we</span> <span m='2538970'>have</span> <span
  m='2539190'>to</span> <span m='2539260'>actually</span> <span
  m='2539530'>add</span> <span m='2539710'>them</span> <span
  m='2539840'>up?</span> <span m='2540285'>I</span> <span
  m='2540730'>claim</span> <span m='2541020'>we</span> <span
  m='2541140'>don't.</span> </p><p><span m='2542290'>Here's</span> <span
  m='2542570'>a</span> <span m='2542630'>nice</span> <span
  m='2542900'>special</span> <span m='2543270'>case</span> <span
  m='2543580'>of</span> <span m='2543670'>having</span> <span
  m='2544010'>three</span> <span m='2544270'>logarithms</span> <span
  m='2544840'>on</span> <span m='2544970'>the</span> <span
  m='2545030'>board.</span> <span m='2546420'>One</span> <span
  m='2546580'>of</span> <span m='2546680'>two</span> <span
  m='2546930'>things</span> <span m='2547170'>is</span> <span
  m='2547310'>true.</span> <span m='2548040'>Either</span> <span
  m='2548360'>one</span> <span m='2548750'>of</span> <span
  m='2548860'>those</span> <span m='2549190'>three</span> <span
  m='2549440'>logarithms</span> <span m='2550090'>is</span> <span
  m='2550190'>so</span> <span m='2550540'>large</span> <span
  m='2552330'>that</span> <span m='2552840'>it's</span> <span
  m='2552980'>bigger</span> <span m='2553330'>than</span> <span
  m='2553460'>the</span> <span m='2553550'>other</span> <span
  m='2553720'>two</span> <span m='2553900'>combined,</span> <span
  m='2555380'>in</span> <span m='2555520'>which</span> <span
  m='2555730'>case,</span> <span m='2556600'>if</span> <span
  m='2556750'>that</span> <span m='2557060'>one</span> <span
  m='2557280'>returns</span> <span m='2557640'>a</span> <span
  m='2557710'>positive</span> <span m='2558780'>or a</span> <span
  m='2558930'>negative,</span> <span m='2560500'>it's</span> <span
  m='2560720'>just</span> <span m='2561180'>positive</span> <span
  m='2561550'>or</span> <span m='2561610'>negative</span> <span
  m='2562000'>because</span> <span m='2562200'>that</span> <span
  m='2562390'>one's</span> <span m='2562830'>big.</span> <span
  m='2564340'>Or</span> <span m='2566480'>one is</span> <span
  m='2566830'>not</span> <span m='2567170'>that</span> <span
  m='2567390'>large,</span> <span m='2567880'>and</span> <span
  m='2568060'>in</span> <span m='2568180'>which</span> <span
  m='2568370'>case,</span> <span m='2569270'>any</span> <span
  m='2569550'>two</span> <span m='2569840'>can</span> <span
  m='2570010'>dominate</span> <span m='2570430'>the</span> <span
  m='2570520'>other</span> <span m='2570760'>one,</span> <span
  m='2571180'>and</span> <span m='2571350'>so</span> <span m='2571660'>is
  just</span> <span m='2572200'>equivalent</span> <span m='2572770'>to</span>
  <span m='2572850'>a</span> <span m='2572880'>majority</span> <span
  m='2573350'>vote.</span> </p><p><span m='2573710'>So</span> <span
  m='2574230'>I</span> <span m='2574410'>claim we</span> <span
  m='2574690'>never</span> <span m='2574930'>have</span> <span
  m='2575090'>to</span> <span m='2575200'>add</span> <span
  m='2575500'>them</span> <span m='2575820'>when</span> <span
  m='2575990'>there's</span> <span m='2576150'>only</span> <span
  m='2576380'>three.</span> <span m='2577070'>You</span> <span
  m='2577160'>guys</span> <span m='2577350'>see</span> <span
  m='2577490'>what</span> <span m='2577570'>I</span> <span
  m='2577640'>mean?</span> <span m='2578200'>Like,</span> <span
  m='2578350'>let's</span> <span m='2578540'>say</span> <span
  m='2578630'>one</span> <span m='2578810'>of</span> <span m='2578880'>them
  was</span> <span m='2578980'>1/2</span> <span m='2579540'>log</span> <span
  m='2579760'>of</span> <span m='2579830'>a</span> <span
  m='2579910'>billion,</span> <span m='2580330'>and</span> <span
  m='2580510'>the</span> <span m='2580590'>others</span> <span
  m='2580900'>were</span> <span m='2581050'>1/2</span> <span
  m='2581230'>log</span> <span m='2581460'>of</span> <span m='2581930'>3</span>
  <span m='2582290'>and</span> <span m='2582360'>1/2</span> <span
  m='2582490'>log</span> <span m='2582610'>of</span> <span m='2582870'>4.</span>
  <span m='2583320'>Obviously,</span> <span m='2583920'>whatever</span> <span
  m='2584240'>the</span> <span m='2584350'>1/2</span> <span m='2584510'>log
  of</span> <span m='2584680'>a</span> <span m='2584990'>billion</span> <span
  m='2585500'>says,</span> <span m='2586320'>which</span> <span
  m='2586470'>is</span> <span m='2586540'>multiplied</span> <span
  m='2587060'>by</span> <span m='2587140'>1/2</span> <span
  m='2587340'>log</span> <span m='2587530'>of a</span> <span
  m='2587800'>billion,</span> <span m='2588570'>is</span> <span
  m='2589030'>it's</span> <span m='2589190'>just</span> <span
  m='2589380'>going</span> <span m='2589500'>to</span> <span
  m='2589560'>be</span> <span m='2589730'>that,</span> <span
  m='2590030'>and</span> <span m='2590140'>the</span> <span
  m='2590240'>others</span> <span m='2590480'>will</span> <span
  m='2590600'>be</span> <span m='2590710'>ignored.</span> </p><p><span
  m='2591990'>However,</span> <span m='2592310'>if</span> <span
  m='2592420'>it's</span> <span m='2592610'>not</span> <span
  m='2592870'>the</span> <span m='2592950'>case</span> <span
  m='2593150'>that</span> <span m='2593270'>one</span> <span
  m='2593460'>of</span> <span m='2593570'>them</span> <span
  m='2593750'>is</span> <span m='2593910'>larger</span> <span
  m='2594230'>than</span> <span m='2594350'>the</span> <span
  m='2594440'>other</span> <span m='2594620'>two</span> <span
  m='2594820'>combined,</span> <span m='2595630'>then</span> <span
  m='2595800'>it's</span> <span m='2595960'>a</span> <span
  m='2596030'>simple</span> <span m='2596420'>vote</span> <span
  m='2596760'>between</span> <span m='2597060'>the</span> <span
  m='2597140'>three,</span> <span m='2597690'>because</span> <span
  m='2598020'>any</span> <span m='2598290'>two</span> <span
  m='2598540'>can</span> <span m='2598840'>out-vote</span> <span
  m='2599720'>the</span> <span m='2599830'>other</span> <span
  m='2600030'>one</span> <span m='2600320'>if</span> <span
  m='2600450'>they</span> <span m='2600540'>work</span> <span
  m='2600760'>together.</span> <span m='2601820'>And</span> <span
  m='2602040'>in</span> <span m='2602140'>this</span> <span
  m='2602340'>case,</span> <span m='2603520'>let's</span> <span
  m='2603700'>see,</span> <span m='2604130'>17/7</span> <span
  m='2605610'>is</span> <span m='2606130'>not</span> <span
  m='2606550'>quite</span> <span m='2607130'>3.</span> <span
  m='2608120'>However,</span> <span m='2609090'>log</span> <span
  m='2609490'>of</span> <span m='2609720'>4</span> <span m='2611340'>is</span>
  <span m='2611500'>certainly</span> <span m='2611820'>not</span> <span
  m='2612160'>better</span> <span m='2612460'>than</span> <span
  m='2612660'>log</span> <span m='2612870'>of</span> <span m='2612980'>3</span>
  <span m='2613310'>plus</span> <span m='2613730'>log</span> <span
  m='2614050'>of</span> <span m='2614190'>17/7.</span> </p><p><span
  m='2614900'>It's</span> <span m='2615060'>not</span> <span
  m='2615270'>even--</span> <span m='2615800'>log of</span> <span
  m='2616070'>4</span> <span m='2616300'>is</span> <span
  m='2616380'>equal</span> <span m='2616550'>to</span> <span
  m='2616620'>log</span> <span m='2616820'>of</span> <span m='2616950'>2</span>
  <span m='2617190'>plus</span> <span m='2617440'>log of</span> <span
  m='2617760'>2.</span> <span m='2618450'>And</span> <span
  m='2618620'>these</span> <span m='2618820'>are</span> <span
  m='2618890'>both</span> <span m='2619240'>bigger</span> <span
  m='2619450'>than</span> <span m='2619590'>log of</span> <span
  m='2619910'>2.</span> <span m='2623270'>That's</span> <span
  m='2623510'>rules</span> <span m='2623750'>of</span> <span
  m='2623850'>logs--</span> <span m='2624260'>log  of 4</span> <span
  m='2624450'>equals</span> <span m='2624710'>log</span> <span
  m='2624840'>of</span> <span m='2626300'>2</span> <span
  m='2626500'>squared,</span> <span m='2626930'>and</span> <span m='2627130'>you
  can take</span> <span m='2627500'>the 2</span> <span m='2627730'>out.</span>
  <span m='2628260'>So</span> <span m='2629450'>these</span> <span
  m='2629820'>are</span> <span m='2630170'>not</span> <span
  m='2630520'>big</span> <span m='2630700'>enough</span> <span
  m='2630970'>that</span> <span m='2631130'>one</span> <span
  m='2631300'>of</span> <span m='2631420'>them is</span> <span
  m='2631650'>bigger</span> <span m='2631880'>than</span> <span
  m='2631980'>the</span> <span m='2632040'>other</span> <span
  m='2632220'>two</span> <span m='2632390'>combined.</span> <span
  m='2632940'>So</span> <span m='2633200'>it's just</span> <span
  m='2633400'>going to</span> <span m='2633490'>be a</span> <span
  m='2633620'>simple</span> <span m='2633990'>vote.</span> </p><p><span
  m='2634630'>So</span> <span m='2634810'>let's</span> <span
  m='2635050'>go</span> <span m='2635250'>through.</span> <span
  m='2635800'>Dracula--</span> <span m='2637040'>OK,</span> <span
  m='2637810'>he's</span> <span m='2638040'>got</span> <span
  m='2638330'>tons</span> <span m='2638850'>of</span> <span
  m='2639150'>his</span> <span m='2639420'>little</span> <span
  m='2639620'>vampyrettes.</span> <span m='2640750'>He's</span> <span
  m='2641640'>not</span> <span m='2642030'>emo,</span> <span
  m='2642480'>so</span> <span m='2643620'>E</span> <span m='2643780'>gets</span>
  <span m='2643990'>it</span> <span m='2644120'>right.</span> <span
  m='2644670'>He's</span> <span m='2644970'>not</span> <span
  m='2645330'>emo.</span> <span m='2645770'>So</span> <span
  m='2645920'>that</span> <span m='2646080'>gets</span> <span
  m='2646240'>it</span> <span m='2646330'>wrong.</span> <span
  m='2646950'>But</span> <span m='2647060'>he</span> <span m='2647240'>is</span>
  <span m='2647500'>evil.</span> <span m='2648190'>That</span> <span
  m='2648400'>gets</span> <span m='2648520'>it</span> <span
  m='2648620'>right.</span> <span m='2649070'>Two out</span> <span
  m='2649420'>of three</span> <span m='2649840'>vote</span> <span
  m='2650210'>that he's a</span> <span m='2650490'>vampire--</span> <span
  m='2651480'>correct.</span> </p><p><span m='2652780'>Next.</span> <span
  m='2653660'>Angel--</span> <span m='2654610'>OK,</span> <span
  m='2656050'>well,</span> <span m='2656250'>he was</span> <span m='2656530'>in
  a</span> <span m='2656640'>long</span> <span m='2656910'>running</span> <span
  m='2657170'>series.</span> <span m='2657640'>He's</span> <span
  m='2657920'>got</span> <span m='2658150'>plenty</span> <span
  m='2658470'>of</span> <span m='2658570'>romantic</span> <span
  m='2658880'>interests.</span> <span m='2659560'>So</span> <span
  m='2659920'>that</span> <span m='2660110'>gets</span> <span
  m='2660280'>it</span> <span m='2660410'>right.</span> <span
  m='2662140'>He's</span> <span m='2662450'>certainly</span> <span
  m='2662790'>emo.</span> <span m='2663230'>That</span> <span
  m='2663400'>gets</span> <span m='2663560'>it</span> <span
  m='2663670'>right.</span> <span m='2664370'>And</span> <span
  m='2664630'>even</span> <span m='2664820'>though</span> <span
  m='2664900'>he's</span> <span m='2665060'>not</span> <span
  m='2665310'>evil,</span> <span m='2665600'>two out</span> <span m='2665800'>of
  three</span> <span m='2666030'>says</span> <span m='2666480'>he's</span> <span
  m='2666590'>a</span> <span m='2666660'>vampire,</span> <span
  m='2667320'>so</span> <span m='2667670'>correct.</span> </p><p><span
  m='2668850'>Next,</span> <span m='2669500'>Edward</span> <span
  m='2669820'>Cullen--</span> <span m='2670510'>well,</span> <span
  m='2671880'><i>Twilight,</i></span> <span m='2672920'>here we</span> <span
  m='2673283'>come.</span> <span m='2674010'>Let's</span> <span
  m='2674350'>see.</span> <span m='2674860'>He</span> <span
  m='2675030'>only</span> <span m='2675170'>has</span> <span
  m='2675290'>one</span> <span m='2675530'>romantic</span> <span
  m='2675590'>interest,</span> <span m='2676000'>so</span> <span
  m='2676110'>that</span> <span m='2676260'>gets</span> <span
  m='2676440'>it</span> <span m='2676550'>wrong.</span> <span
  m='2677610'>OK.</span> <span m='2678610'>He's</span> <span
  m='2678870'>emo,</span> <span m='2679460'>so</span> <span
  m='2679570'>that</span> <span m='2679740'>gets</span> <span
  m='2679910'>it</span> <span m='2680010'>right.</span> <span
  m='2680410'>But</span> <span m='2680510'>he's</span> <span
  m='2680680'>not</span> <span m='2680910'>evil,</span> <span
  m='2681310'>so</span> <span m='2681510'>two</span> <span
  m='2681780'>wrong.</span> </p><p><span m='2682150'>So</span> <span
  m='2682720'>Edward's</span> <span m='2683090'>not</span> <span
  m='2683330'>a</span> <span m='2683370'>vampire</span> <span
  m='2683870'>according</span> <span m='2684210'>to</span> <span
  m='2684320'>our</span> <span m='2684480'>final</span> <span
  m='2684700'>classifier.</span> <span m='2685820'>But</span> <span
  m='2686140'>he</span> <span m='2686340'>is.</span> <span m='2686880'>So</span>
  <span m='2687240'>we</span> <span m='2687360'>got</span> <span
  m='2687600'>one</span> <span m='2687800'>of</span> <span
  m='2687900'>the</span> <span m='2687990'>data</span> <span
  m='2688250'>points</span> <span m='2688560'>wrong.</span> <span
  m='2689620'>You</span> <span m='2689710'>guys</span> <span
  m='2689920'>see</span> <span m='2690050'>that?</span> <span
  m='2690380'>Because</span> <span m='2690680'>two</span> <span m='2690890'>out
  of</span> <span m='2691020'>three</span> <span m='2691580'>of</span> <span
  m='2691680'>our</span> <span m='2692190'>classifiers</span> <span
  m='2692780'>here</span> <span m='2692970'>said</span> <span
  m='2693280'>that</span> <span m='2693770'>he was</span> <span
  m='2694040'>not</span> <span m='2694300'>a</span> <span
  m='2694340'>vampire.</span> </p><p><span m='2696590'>All</span> <span
  m='2696660'>right,</span> <span m='2696940'>let's</span> <span
  m='2697130'>see.</span> <span m='2697280'>Saya--</span> <span
  m='2698960'>well,</span> <span m='2699650'>she</span> <span
  m='2699910'>has</span> <span m='2700100'>more</span> <span
  m='2700280'>than</span> <span m='2700410'>two romantic</span> <span
  m='2700850'>interests.</span> <span m='2702410'>And</span> <span
  m='2702560'>she's</span> <span m='2702780'>emo.</span> <span
  m='2703610'>So</span> <span m='2703740'>even</span> <span
  m='2703930'>though</span> <span m='2704040'>she's</span> <span
  m='2704220'>not</span> <span m='2704450'>evil,</span> <span
  m='2704950'>we</span> <span m='2705030'>get</span> <span m='2705190'>it</span>
  <span m='2705280'>right.</span> <span m='2706600'>OK?</span> </p><p><span
  m='2707290'>Let's</span> <span m='2707540'>see.</span> <span
  m='2708260'>Lestat--</span> <span m='2709610'>he</span> <span
  m='2712680'>also</span> <span m='2713410'>has</span> <span
  m='2713770'>may</span> <span m='2713910'>love</span> <span
  m='2714140'>interests,</span> <span m='2714950'>is</span> <span
  m='2715140'>emo,</span> <span m='2715340'>and</span> <span
  m='2715760'>is</span> <span m='2715940'>not</span> <span
  m='2716140'>evil.</span> <span m='2716580'>So</span> <span
  m='2716910'>you</span> <span m='2717070'>get</span> <span
  m='2717210'>it</span> <span m='2717290'>right.</span> <span
  m='2718640'>OK,</span> <span m='2719210'>Bianca</span> <span
  m='2720090'>is</span> <span m='2720370'>evil</span> <span
  m='2720760'>with</span> <span m='2720930'>many</span> <span
  m='2721280'>love</span> <span m='2721540'>interests.</span> <span
  m='2723140'>Even</span> <span m='2723340'>though</span> <span
  m='2723420'>she's</span> <span m='2723610'>not</span> <span
  m='2723810'>emo,</span> <span m='2724060'>two out</span> <span m='2724360'>of
  three,</span> <span m='2724660'>you</span> <span m='2724770'>get</span> <span
  m='2724920'>it</span> <span m='2725020'>right.</span> </p><p><span
  m='2726620'>All right,</span> <span m='2727830'>Carmilla--</span> <span
  m='2728040'>I'm going to</span> <span m='2728520'>call her</span> <span
  m='2728840'>Karnstein--</span> <span m='2729670'>is</span> <span
  m='2730150'>basically</span> <span m='2730620'>exactly</span> <span
  m='2731050'>the</span> <span m='2731110'>same</span> <span
  m='2731400'>as</span> <span m='2731520'>Bianca</span> <span
  m='2731970'>with</span> <span m='2732220'>the</span> <span
  m='2732310'>number</span> <span m='2732520'>of</span> <span
  m='2732580'>romantic</span> <span m='2732890'>interests</span> <span
  m='2733180'>fixed</span> <span m='2733470'>the</span> <span
  m='2733550'>way</span> <span m='2733710'>it</span> <span
  m='2733790'>is.</span> <span m='2734360'>So</span> <span
  m='2735340'>she</span> <span m='2735520'>will</span> <span
  m='2735650'>always</span> <span m='2735920'>do</span> <span
  m='2736030'>the</span> <span m='2736140'>same</span> <span
  m='2736380'>thing</span> <span m='2736590'>that</span> <span
  m='2736840'>Bianca</span> <span m='2737200'>does.</span> <span
  m='2737460'>It's</span> <span m='2737600'>why</span> <span
  m='2737830'>6</span> <span m='2738050'>and</span> <span m='2738190'>7</span>
  <span m='2738450'>always</span> <span m='2738670'>travel</span> <span
  m='2738960'>together.</span> <span m='2739790'>So</span> <span
  m='2740100'>we</span> <span m='2740200'>get</span> <span m='2740330'>it</span>
  <span m='2740430'>right.</span> </p><p><span m='2741150'>Sailor</span> <span
  m='2741520'>Moon</span> <span m='2742370'>is</span> <span
  m='2742780'>supposed</span> <span m='2743210'>to</span> <span
  m='2743270'>be</span> <span m='2743360'>not</span> <span m='2743650'>a</span>
  <span m='2743680'>vampire.</span> <span m='2744710'>So</span> <span
  m='2745310'>her</span> <span m='2745430'>number</span> <span m='2745680'>of
  love</span> <span m='2745800'>interests</span> <span m='2746360'>say
  that</span> <span m='2746590'>she's</span> <span m='2746810'>not</span> <span
  m='2747020'>a</span> <span m='2747050'>vampire</span> <span
  m='2747320'>because she</span> <span m='2747590'>only</span> <span
  m='2747845'>has</span> <span m='2748100'>one.</span> <span
  m='2749040'>The</span> <span m='2749140'>fact</span> <span
  m='2749360'>that</span> <span m='2749490'>she's</span> <span
  m='2749750'>not</span> <span m='2750010'>evil</span> <span
  m='2750570'>and</span> <span m='2750790'>not</span> <span
  m='2751020'>emo</span> <span m='2751150'>says</span> <span
  m='2751620'>that</span> <span m='2751930'>actually,</span> <span
  m='2752220'>she's</span> <span m='2752480'>perfectly</span> <span
  m='2753020'>not</span> <span m='2753220'>a</span> <span
  m='2753260'>vampire.</span> <span m='2753550'>They</span> <span
  m='2753690'>all</span> <span m='2754020'>agree.</span> <span
  m='2754810'>And</span> <span m='2754940'>that's</span> <span
  m='2755300'>correct.</span> </p><p><span m='2756400'>Squall</span> <span
  m='2757310'>has</span> <span m='2757490'>only</span> <span
  m='2757650'>one</span> <span m='2757960'>love</span> <span
  m='2758160'>interest,</span> <span m='2758530'>Rinoa.</span> <span
  m='2759560'>And</span> <span m='2760040'>he's</span> <span
  m='2760970'>not</span> <span m='2761200'>evil,</span> <span m='2761750'>both
  of</span> <span m='2762060'>which</span> <span m='2762270'>of say</span> <span
  m='2762460'>he's not</span> <span m='2762640'>a</span> <span
  m='2762670'>vampire.</span> <span m='2763020'>But</span> <span
  m='2763110'>he</span> <span m='2763310'>is</span> <span
  m='2763470'>emo.</span> <span m='2763710'>But</span> <span
  m='2764060'>two</span> <span m='2764250'>out of</span> <span
  m='2764430'>three</span> <span m='2764600'>says</span> <span
  m='2764870'>he's</span> <span m='2765020'>not a</span> <span
  m='2765120'>vampire.</span> <span m='2765420'>We</span> <span
  m='2765500'>get</span> <span m='2765620'>it</span> <span
  m='2765710'>correct.</span> </p><p><span m='2766610'>And</span> <span
  m='2766980'>Circe,</span> <span m='2767660'>despite</span> <span
  m='2768050'>her</span> <span m='2768140'>many</span> <span
  m='2768390'>romantic</span> <span m='2768700'>interests</span> <span
  m='2769190'>which says</span> <span m='2769440'>she</span> <span
  m='2769740'>might</span> <span m='2770050'>be</span> <span
  m='2770140'>a</span> <span m='2770180'>vampire,</span> <span
  m='2770750'>is</span> <span m='2771380'>neither</span> <span
  m='2771520'>evil</span> <span m='2771880'>nor</span> <span
  m='2772120'>emo,</span> <span m='2772560'>and is</span> <span
  m='2772860'>not</span> <span m='2773060'>a</span> <span
  m='2773100'>vampire.</span> <span m='2773870'>So</span> <span
  m='2774210'>we</span> <span m='2774320'>got</span> <span
  m='2774600'>everything</span> <span m='2774950'>right</span> <span
  m='2775200'>except</span> <span m='2775510'>Edward</span> <span
  m='2775850'>Cullen, which</span> <span m='2776320'>perhaps</span> <span
  m='2776760'>says</span> <span m='2776900'>more</span> <span
  m='2777230'>about</span> <span m='2778090'>Stephenie</span> <span
  m='2778470'>Meyers</span> <span m='2778780'>writing</span> <span
  m='2779190'>than</span> <span m='2779470'>about</span> <span
  m='2779840'>our</span> <span m='2780060'>boosting.</span> </p><p><span
  m='2781770'>All right,</span> <span m='2782140'>final</span> <span
  m='2782630'>question--</span> <span m='2784060'>Wesley</span> <span
  m='2784510'>Wyndham,</span> <span m='2785130'>a</span> <span
  m='2785190'>fellow</span> <span m='2785500'>consultant,</span> <span
  m='2786040'>has</span> <span m='2786220'>noticed</span> <span
  m='2786530'>a</span> <span m='2786580'>few</span> <span
  m='2786930'>correlations</span> <span m='2787660'>between</span> <span
  m='2788010'>some</span> <span m='2788200'>of</span> <span
  m='2788250'>the</span> <span m='2788330'>classifiers</span> <span
  m='2788630'>you</span> <span m='2788930'>used.</span> <span
  m='2789780'>He</span> <span m='2789940'>suggests</span> <span
  m='2790350'>using</span> <span m='2790590'>a</span> <span
  m='2790610'>new</span> <span m='2790940'>set</span> <span
  m='2791230'>of</span> <span m='2791360'>weak</span> <span
  m='2791550'>classifiers</span> <span m='2792160'>consisting</span> <span
  m='2793270'>of</span> <span m='2797805'>a</span> <span m='2798190'>pair</span>
  <span m='2798610'>of your</span> <span m='2798710'>classifiers</span> <span
  m='2799440'>that</span> <span m='2799540'>are</span> <span
  m='2799730'>logically</span> <span m='2800280'>anded</span> <span
  m='2800700'>and</span> <span m='2800880'>ored</span> <span
  m='2801170'>together.</span> <span m='2801870'>For</span> <span
  m='2802030'>instance,</span> <span m='2802450'>two of</span> <span
  m='2802630'>the</span> <span m='2802770'>new</span> <span
  m='2802910'>classifiers</span> <span m='2803410'>would</span> <span
  m='2803570'>be</span> <span m='2804340'>emo</span> <span
  m='2804660'>equals</span> <span m='2804930'>yes</span> <span
  m='2805350'>or</span> <span m='2805740'>evil</span> <span
  m='2806020'>equals</span> <span m='2806380'>yes,</span> <span
  m='2807540'>or</span> <span m='2808120'>sparkly</span> <span
  m='2808560'>equals</span> <span m='2808960'>no</span> <span
  m='2809680'>and</span> <span m='2810020'>transforms</span> <span
  m='2810610'>equals</span> <span m='2810900'>yes.</span> <span
  m='2811470'>So</span> <span m='2811610'>that would</span> <span
  m='2811720'>cut out</span> <span m='2812140'>Sailor</span> <span
  m='2812770'>Moon</span> <span m='2813020'>from</span> <span
  m='2813150'>the</span> <span m='2813240'>transforms</span> <span
  m='2813810'>cloud.</span> </p><p><span m='2815230'>He</span> <span
  m='2815400'>believes</span> <span m='2815700'>that</span> <span
  m='2815810'>you'll</span> <span m='2815970'>be</span> <span
  m='2816070'>able</span> <span m='2816200'>to</span> <span
  m='2816270'>classify</span> <span m='2816830'>large</span> <span
  m='2817250'>vampire</span> <span m='2817730'>data</span> <span
  m='2818000'>sets--</span> <span m='2818270'>larger</span> <span
  m='2818530'>than</span> <span m='2818730'>this</span> <span
  m='2818900'>one,</span> <span m='2819090'>anyway--</span> <span
  m='2819980'>more</span> <span m='2820300'>quickly</span> <span
  m='2820710'>with</span> <span m='2820930'>fewer</span> <span
  m='2821200'>rounds</span> <span m='2821490'>of</span> <span
  m='2821560'>boosting</span> <span m='2822110'>using</span> <span
  m='2822400'>his</span> <span m='2822570'>system.</span> <span m='2823160'>Do
  you</span> <span m='2823340'>agree</span> <span m='2823730'>or</span> <span
  m='2823830'>disagree with</span> <span m='2824330'>Wesley?</span> <span
  m='2824710'>Explain</span> <span m='2825110'>your arguments.</span>
  </p><p><span m='2826560'>So</span> <span m='2827580'>this</span> <span
  m='2827830'>was,</span> <span m='2828170'>you</span> <span
  m='2828233'>know,</span> <span m='2828296'>the</span> <span
  m='2828360'>tough</span> <span m='2828610'>concept</span> <span
  m='2829040'>question.</span> <span m='2829890'>Does</span> <span
  m='2830030'>anyone</span> <span m='2830310'>have</span> <span m='2831070'>just
  an</span> <span m='2831330'>instinctual</span> <span m='2832100'>thing</span>
  <span m='2832310'>other</span> <span m='2832490'>than</span> <span
  m='2832650'>like,</span> <span m='2832800'>oh, man,</span> <span
  m='2833040'>it's</span> <span m='2833230'>Wesley.</span> <span
  m='2833370'>He</span> <span m='2833680'>must</span> <span
  m='2833920'>be</span> <span m='2834040'>wrong.</span> </p><p><span
  m='2839600'>AUDIENCE: You'll probably</span> <span m='2839860'>use 
  fewer</span> <span m='2840120'>rounds</span> <span m='2840601'>of
  boosting</span> <span m='2841563'>because you</span> <span m='2842044'>have
  more</span> <span m='2842525'>classifiers.</span> <span m='2843487'>But</span>
  <span m='2843968'>you'll have</span> <span m='2844450'>to search</span> <span
  m='2844760'>through more</span> <span m='2844980'>classifiers.</span>
  </p><p><span m='2846800'>PROFESSOR: Aha,</span> <span m='2847125'>that</span>
  <span m='2847450'>is</span> <span m='2847660'>the</span> <span
  m='2848025'>rare</span> <span m='2848390'>full-point</span> <span
  m='2849070'>answer.</span> <span m='2850360'>Very</span> <span
  m='2850630'>few</span> <span m='2850810'>people</span> <span
  m='2852170'>realize</span> <span m='2852620'>that</span> <span
  m='2852770'>Wesley was</span> <span m='2853210'>partially</span> <span
  m='2853590'>right.</span> <span m='2853850'>They either</span> <span
  m='2854140'>said</span> <span m='2854430'>something</span> <span
  m='2854670'>about</span> <span m='2854820'>him</span> <span
  m='2854930'>being</span> <span m='2855120'>completely</span> <span
  m='2855540'>wrong,</span> <span m='2855920'>which</span> <span
  m='2856070'>was</span> <span m='2856220'>wrong,</span> <span
  m='2856480'>or</span> <span m='2856680'>said that</span> <span
  m='2856970'>he</span> <span m='2857100'>was</span> <span
  m='2857230'>completely</span> <span m='2857590'>right.</span> </p><p><span
  m='2858220'>Yes,</span> <span m='2859020'>it</span> <span
  m='2859120'>will</span> <span m='2859220'>use</span> <span
  m='2859510'>fewer</span> <span m='2859880'>rounds</span> <span
  m='2860210'>of</span> <span m='2860300'>boosting</span> <span
  m='2860960'>because</span> <span m='2861310'>of</span> <span
  m='2861360'>the</span> <span m='2861440'>fact</span> <span
  m='2861740'>that</span> <span m='2861990'>you</span> <span
  m='2862280'>can--</span> <span m='2863490'>essentially,</span> <span
  m='2864650'>one</span> <span m='2864890'>of</span> <span
  m='2864970'>these</span> <span m='2865180'>boosting</span> <span
  m='2865510'>already</span> <span m='2865970'>does</span> <span
  m='2866420'>is</span> <span m='2866590'>sort</span> <span
  m='2866850'>of</span> <span m='2867770'>gets</span> <span
  m='2868330'>things</span> <span m='2868560'>to</span> <span
  m='2868640'>vote</span> <span m='2868920'>together</span> <span m='2869410'>in
  an</span> <span m='2869900'>[INAUDIBLE]</span> <span
  m='2870180'>fashion.</span> <span m='2870860'>So</span> <span
  m='2871530'>it</span> <span m='2871730'>will use</span> <span
  m='2871980'>approximately</span> <span m='2872470'>half</span> <span
  m='2872870'>the</span> <span m='2873030'>number</span> <span m='2873230'>of
  rounds</span> <span m='2873330'>of</span> <span m='2873560'>boosting</span>
  <span m='2873980'>by</span> <span m='2874150'>being</span> <span
  m='2874370'>able</span> <span m='2874510'>to</span> <span
  m='2874580'>combine</span> <span m='2874850'>into</span> <span
  m='2875120'>two.</span> </p><p><span m='2875770'>But</span> <span
  m='2875930'>there's</span> <span m='2876150'>a</span> <span
  m='2876330'>lot</span> <span m='2877000'>of</span> <span
  m='2877640'>ands</span> <span m='2877920'>and</span> <span
  m='2878000'>ors.</span> <span m='2878300'>There's</span> <span
  m='2878470'>in</span> <span m='2878590'>fact</span> <span m='2878850'>n</span>
  <span m='2879070'>choose</span> <span m='2879390'>2,</span> <span
  m='2879650'>where</span> <span m='2879830'>n</span> <span
  m='2879980'>is</span> <span m='2880100'>the</span> <span
  m='2880140'>number</span> <span m='2880360'>of</span> <span
  m='2880470'>vampires.</span> <span m='2881620'>And</span> <span
  m='2881800'>since</span> <span m='2882230'>using</span> <span
  m='2882570'>half</span> <span m='2882850'>the</span> <span
  m='2882920'>number</span> <span m='2883150'>of</span> <span
  m='2883240'>rounds</span> <span m='2883670'>but</span> <span
  m='2883820'>taking</span> <span m='2884130'>n</span> <span
  m='2884340'>choose</span> <span m='2884700'>2</span> <span
  m='2884920'>time</span> <span m='2885250'>for</span> <span
  m='2885400'>each</span> <span m='2885540'>round</span> <span
  m='2886250'>is</span> <span m='2886430'>not</span> <span
  m='2887160'>less</span> <span m='2887490'>time.</span> <span
  m='2888040'>So</span> <span m='2888650'>that's</span> <span
  m='2888860'>exactly</span> <span m='2889340'>correct.</span> </p><p><span
  m='2890200'>Not</span> <span m='2890430'>that</span> <span
  m='2890580'>many</span> <span m='2890740'>people</span> <span
  m='2891010'>got</span> <span m='2891360'>full</span> <span
  m='2891550'>credit</span> <span m='2891870'>on</span> <span
  m='2892700'>that</span> <span m='2892880'>one</span> <span
  m='2893520'>because</span> <span m='2894160'>sometimes,</span> <span
  m='2894520'>they</span> <span m='2894580'>were</span> <span
  m='2894710'>seduced</span> <span m='2895080'>by</span> <span
  m='2895230'>Wesley's</span> <span m='2896270'>idea.</span> <span
  m='2896660'>Or they</span> <span m='2896880'>were just</span> <span
  m='2897080'>like,</span> <span m='2897270'>it's</span> <span
  m='2897430'>Wesley.</span> <span m='2897700'>He's</span> <span
  m='2897990'>wrong--</span> <span m='2898830'>or</span> <span
  m='2899210'>just</span> <span m='2899340'>some</span> <span
  m='2899730'>other</span> <span m='2899990'>funny</span> <span
  m='2900270'>answer.</span> </p><p><span m='2903080'>Any</span> <span
  m='2903250'>questions</span> <span m='2904110'>about</span> <span
  m='2904475'>boosting?</span> <span m='2905220'>Question?</span> </p><p><span
  m='2905580'>AUDIENCE: How do you</span> <span m='2905940'>know how</span>
  <span m='2906417'>many</span> <span m='2906894'>rounds of</span> <span
  m='2907371'>boosting</span> <span m='2907848'>to take?</span> </p><p><span
  m='2909760'>PROFESSOR: The question is,</span> <span m='2910240'>how do
  you</span> <span m='2910260'>know</span> <span m='2910450'>how</span> <span
  m='2910630'>many</span> <span m='2910800'>rounds</span> <span
  m='2911110'>of</span> <span m='2911160'>boosting</span> <span
  m='2911730'>to</span> <span m='2911870'>do?</span> <span
  m='2912690'>The</span> <span m='2912780'>answer</span> <span
  m='2913370'>is--</span> <span m='2914620'>so</span> <span
  m='2915250'>on</span> <span m='2915390'>the</span> <span
  m='2915470'>quiz,</span> <span m='2915980'>it</span> <span
  m='2916140'>tells</span> <span m='2916430'>you</span> <span
  m='2916510'>that</span> <span m='2916720'>you</span> <span
  m='2917180'>have</span> <span m='2917480'>three.</span> <span
  m='2918070'>In</span> <span m='2918250'>real</span> <span
  m='2918530'>life,</span> <span m='2921480'>you</span> <span
  m='2921630'>might</span> <span m='2921860'>want</span> <span
  m='2922030'>to</span> <span m='2922140'>just</span> <span
  m='2922290'>kind</span> <span m='2922520'>of</span> <span
  m='2922590'>keep</span> <span m='2922830'>it</span> <span
  m='2922990'>running</span> <span m='2923500'>until</span> <span
  m='2924670'>it</span> <span m='2924830'>converges.</span> <span
  m='2926100'>That's</span> <span m='2926330'>one</span> <span
  m='2926600'>possibility--</span> <span m='2927780'>keep</span> <span
  m='2927970'>it</span> <span m='2928060'>running</span> <span
  m='2928330'>until</span> <span m='2928960'>it</span> <span
  m='2929080'>converges</span> <span m='2929720'>to</span> <span
  m='2929890'>an</span> <span m='2929990'>answer,</span> <span
  m='2930940'>and</span> <span m='2931150'>it</span> <span
  m='2931250'>doesn't</span> <span m='2931520'>do</span> <span
  m='2931670'>anything</span> <span m='2932010'>anymore.</span> </p><p><span
  m='2932370'>Patrick</span> <span m='2932840'>has</span> <span
  m='2933310'>a</span> <span m='2934100'>little</span> <span
  m='2934300'>widget</span> <span m='2934770'>on</span> <span
  m='2934990'>the</span> <span m='2935070'>6.034</span> <span
  m='2935960'>website,</span> <span m='2936400'>I</span> <span
  m='2936470'>think,</span> <span m='2936640'>that</span> <span
  m='2936720'>lets</span> <span m='2936900'>you</span> <span
  m='2937000'>plunk</span> <span m='2937480'>down</span> <span
  m='2937710'>some</span> <span m='2937840'>data</span> <span
  m='2938060'>points</span> <span m='2938300'>and run</span> <span
  m='2938600'>boosting on</span> <span m='2938770'>them.</span> <span
  m='2939710'>And</span> <span m='2939850'>you</span> <span
  m='2939970'>can</span> <span m='2940110'>see</span> <span
  m='2940350'>that</span> <span m='2941360'>eventually,</span> <span
  m='2941960'>it</span> <span m='2942070'>converges.</span> <span
  m='2943640'>The</span> <span m='2943740'>boosting</span> <span
  m='2944070'>converges</span> <span m='2944590'>to</span> <span
  m='2944680'>an</span> <span m='2944760'>answer,</span> <span m='2945120'>and
  it</span> <span m='2945280'>doesn't</span> <span m='2945600'>change.</span>
  </p><p><span m='2946932'>AUDIENCE: What</span> <span
  m='2947388'>converges?</span> </p><p><span m='2949524'>PROFESSOR:
  Basically,</span> <span m='2950290'>the--</span> <span m='2950960'>not</span>
  <span m='2951360'>the</span> <span m='2951960'>classifiers</span> <span
  m='2952390'>you</span> <span m='2952480'>picked,</span> <span
  m='2952730'>of</span> <span m='2952800'>course,</span> <span
  m='2953230'>or</span> <span m='2953340'>the</span> <span
  m='2953450'>weights.</span> <span m='2954050'>But what</span> <span
  m='2954300'>converges</span> <span m='2954770'>is</span> <span
  m='2954930'>which</span> <span m='2955180'>ones</span> <span
  m='2955640'>of</span> <span m='2956510'>your</span> <span
  m='2956620'>data</span> <span m='2956870'>set</span> <span m='2957100'>you
  get</span> <span m='2957430'>correct.</span> <span m='2958470'>Because</span>
  <span m='2959330'>he</span> <span m='2959580'>does</span> <span
  m='2959910'>his</span> <span m='2960180'>in</span> <span
  m='2960890'>two-dimensional</span> <span m='2961390'>space</span> <span
  m='2961720'>rather</span> <span m='2961930'>than</span> <span
  m='2962270'>like</span> <span m='2962520'>this.</span> <span
  m='2963140'>And</span> <span m='2963330'>he</span> <span
  m='2963420'>shows</span> <span m='2963740'>you</span> <span
  m='2963820'>the</span> <span m='2963950'>lines</span> <span
  m='2964360'>that</span> <span m='2964440'>boosting</span> <span
  m='2964780'>is</span> <span m='2964920'>drawing</span> <span
  m='2965430'>between</span> <span m='2965760'>classification,</span> <span
  m='2966150'>and</span> <span m='2966930'>colors</span> <span
  m='2967240'>things in</span> <span m='2967490'>green</span> <span
  m='2967780'>and</span> <span m='2967860'>red</span> <span
  m='2968130'>or</span> <span m='2968220'>something</span> <span
  m='2968440'>like</span> <span m='2968600'>that.</span> </p><p><span
  m='2969320'>And</span> <span m='2969700'>eventually,</span> <span
  m='2969960'>it</span> <span m='2970220'>converges</span> <span
  m='2970770'>where</span> <span m='2970980'>the</span> <span
  m='2971100'>lines</span> <span m='2971530'>are and</span> <span
  m='2971960'>which</span> <span m='2972130'>ones it's</span> <span
  m='2972380'>getting</span> <span m='2972610'>right.</span> <span
  m='2973020'>It generally</span> <span m='2973410'>converges</span> <span
  m='2973800'>to</span> <span m='2973870'>getting</span> <span
  m='2974120'>everything</span> <span m='2974560'>correct.</span> <span
  m='2976470'>And</span> <span m='2976630'>when</span> <span
  m='2976790'>that</span> <span m='2976980'>happens,</span> <span
  m='2977810'>then</span> <span m='2978240'>you</span> <span
  m='2978490'>can</span> <span m='2978640'>stop.</span> </p><p><span
  m='2980030'>But</span> <span m='2980210'>that's</span> <span
  m='2980400'>a</span> <span m='2980430'>good</span> <span
  m='2980670'>question.</span> <span m='2981240'>And</span> <span
  m='2981390'>it's</span> <span m='2981550'>not</span> <span
  m='2981930'>always</span> <span m='2982290'>that</span> <span
  m='2982460'>easy</span> <span m='2982880'>in</span> <span
  m='2983000'>the</span> <span m='2983100'>real</span> <span
  m='2983300'>world.</span> <span m='2983830'>You</span> <span
  m='2984030'>have</span> <span m='2984190'>to</span> <span
  m='2984310'>sometimes</span> <span m='2984900'>just</span> <span
  m='2985040'>say,</span> <span m='2986040'>this</span> <span
  m='2986220'>is</span> <span m='2986300'>enough</span> <span
  m='2986630'>for</span> <span m='2986790'>me.</span> <span
  m='2987330'>I've</span> <span m='2987690'>given</span> <span
  m='2987950'>it</span> <span m='2988550'>n</span> <span
  m='2988710'>number</span> <span m='2989070'>of</span> <span
  m='2989130'>rounds.</span> <span m='2990230'>And that's</span> <span
  m='2990720'>much</span> <span m='2990950'>more</span> <span
  m='2991090'>the</span> <span m='2991210'>number</span> <span
  m='2991450'>of</span> <span m='2991530'>classifiers,</span> <span
  m='2992320'>so</span> <span m='2992730'>maybe</span> <span
  m='2993020'>it</span> <span m='2993110'>won't</span> <span
  m='2993340'>get</span> <span m='2993450'>anything</span> <span
  m='2993750'>better.</span> </p>
uid: c711b49802b55f7046bebaaca1f2f882
type: courses
layout: video
---
