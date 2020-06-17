---
about_this_resource_text: ''
embedded_media:
  - id: Video-YouTube-Stream
    media_location: qhOVXxNXAug
    parent_uid: 4e41dd76b35c6d67c10d2253c4352758
    title: Video-YouTube-Stream
    type: Video
    uid: 41157e5fb3594a065b07aadc548c97fb
  - id: 3Play-3Play YouTube id-Stream
    media_location: qhOVXxNXAug
    parent_uid: 4e41dd76b35c6d67c10d2253c4352758
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 13d0979eced02a7348f55e313a16b7ba
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/qhOVXxNXAug/default.jpg'
    parent_uid: 4e41dd76b35c6d67c10d2253c4352758
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 2839f77803189d137213a66263870484
  - id: qhOVXxNXAug.srt
    parent_uid: 4e41dd76b35c6d67c10d2253c4352758
    technical_location: >-
      https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/text-analytics/predictive-coding-bringing-text-analytics-to-the-courtroom-recitation/video-3-pre-processing/video-3-pre-processing-0/qhOVXxNXAug.srt
    title: 3play caption file
    type: null
    uid: e712d1b97a5ef64914f165b65dfe7475
  - id: qhOVXxNXAug.pdf
    parent_uid: 4e41dd76b35c6d67c10d2253c4352758
    technical_location: >-
      https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/text-analytics/predictive-coding-bringing-text-analytics-to-the-courtroom-recitation/video-3-pre-processing/video-3-pre-processing-0/qhOVXxNXAug.pdf
    title: 3play pdf file
    type: null
    uid: 33f7f61c6a8d9bf13510b5cd773e96db
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 4e41dd76b35c6d67c10d2253c4352758
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: d5cf166431b71b4089381035d56b84b4
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 4e41dd76b35c6d67c10d2253c4352758
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 884eac53fd0c2e9b7c62e6192197b24d
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MIT15.071S17/MIT15_071S17_Session_5.4.04_300k.mp4
    parent_uid: 4e41dd76b35c6d67c10d2253c4352758
    title: Video-Internet Archive-MP4
    type: Video
    uid: 14c06adf087be91d016de2d72c83ccb8
inline_embed_id: 6834329video3preprocessing57525130
parent_uid: 1924c416bffb731966228542170e6c66
related_resources_text: ''
short_url: video-3-pre-processing-0
technical_location: >-
  https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/text-analytics/predictive-coding-bringing-text-analytics-to-the-courtroom-recitation/video-3-pre-processing/video-3-pre-processing-0
title: 'Video 3: Pre-Processing'
transcript: >-
  <p><span m='5080'>Now</span> <span m='5470'>it's</span> <span
  m='5860'>time</span> <span m='6250'>to</span> <span m='6640'>construct</span>
  <span m='7030'>and</span> <span m='7420'>preprocess</span> <span
  m='7810'>the</span> <span m='8200'>corpus.</span> </p><p><span
  m='8590'>So</span> <span m='8929'>we'll</span> <span m='9268'>start</span>
  <span m='9607'>by</span> <span m='9946'>loading</span> <span
  m='10285'>the</span> <span m='10624'>tm</span> <span m='10963'>package</span>
  <span m='11302'>with</span> <span m='11641'>library(tm).</span> </p><p><span
  m='15180'>And</span> <span m='15382'>now</span> <span m='15585'>that</span>
  <span m='15788'>we'll</span> <span m='15991'>have</span> <span
  m='16194'>done</span> <span m='16397'>that,</span> <span
  m='16600'>we'll</span> <span m='17105'>construct</span> <span
  m='17611'>a</span> <span m='18116'>variable</span> <span
  m='18622'>called</span> <span m='19127'>corpus</span> <span
  m='19633'>using</span> <span m='20138'>the</span> <span
  m='20644'>corpus</span> <span m='21150'>and</span> <span
  m='21535'>vector</span> <span m='21920'>source</span> <span
  m='22305'>functions</span> <span m='22690'>and</span> <span
  m='23075'>passing</span> <span m='23460'>in</span> <span m='23845'>all</span>
  <span m='24230'>the</span> <span m='24615'>emails</span> <span
  m='25000'>in</span> <span m='25232'>our</span> <span m='25465'>data</span>
  <span m='25698'>set,</span> <span m='25931'>which</span> <span
  m='26164'>is</span> <span m='26397'>emails$email.</span> </p><p><span
  m='31360'>So</span> <span m='31660'>now</span> <span m='31960'>that</span>
  <span m='32260'>we've</span> <span m='32560'>constructed</span> <span
  m='32860'>the</span> <span m='33160'>corpus,</span> <span m='33460'>we</span>
  <span m='33877'>can</span> <span m='34295'>output</span> <span
  m='34713'>the</span> <span m='35131'>first</span> <span m='35548'>email</span>
  <span m='35966'>in</span> <span m='36384'>the</span> <span
  m='36802'>corpus.</span> </p><p><span m='37220'>We'll</span> <span
  m='37499'>start</span> <span m='37778'>out</span> <span m='38057'>by</span>
  <span m='38336'>calling</span> <span m='38615'>the</span> <span
  m='38894'>strwrap</span> <span m='39173'>function</span> <span
  m='39452'>to</span> <span m='39731'>get</span> <span m='40010'>it</span> <span
  m='40290'>on</span> <span m='40596'>multiple</span> <span
  m='40902'>lines,</span> <span m='41209'>and</span> <span m='41515'>then</span>
  <span m='41821'>we</span> <span m='42128'>can</span> <span
  m='42434'>select</span> <span m='42740'>the</span> <span
  m='43047'>first</span> <span m='43353'>element</span> <span
  m='43660'>in</span> <span m='44025'>the</span> <span m='44391'>corpus</span>
  <span m='44756'>using</span> <span m='45122'>the</span> <span
  m='45487'>double</span> <span m='45853'>square</span> <span
  m='46218'>bracket</span> <span m='46584'>notation</span> <span
  m='46950'>and</span> <span m='47812'>selecting</span> <span
  m='48675'>element</span> <span m='49537'>1.</span> </p><p><span
  m='50400'>And</span> <span m='50810'>we</span> <span m='51220'>can</span>
  <span m='51630'>see</span> <span m='52040'>that</span> <span
  m='52450'>this</span> <span m='52860'>is</span> <span m='53270'>exactly</span>
  <span m='53680'>the</span> <span m='54094'>same</span> <span
  m='54508'>email</span> <span m='54922'>that</span> <span m='55337'>we</span>
  <span m='55751'>saw</span> <span m='56165'>originally,</span> <span
  m='56580'>the</span> <span m='57315'>email</span> <span m='58050'>about</span>
  <span m='58785'>the</span> <span m='59520'>working</span> <span
  m='60255'>paper.</span> </p><p><span m='60990'>So</span> <span
  m='61280'>now</span> <span m='61571'>we're</span> <span m='61862'>ready</span>
  <span m='62153'>to</span> <span m='62444'>preprocess</span> <span
  m='62735'>the</span> <span m='63025'>corpus</span> <span
  m='63316'>using</span> <span m='63607'>the</span> <span m='63898'>tm</span>
  <span m='64189'>map</span> <span m='64480'>function.</span> </p><p><span
  m='65640'>So</span> <span m='66063'>first,</span> <span m='66486'>we'll</span>
  <span m='66910'>convert</span> <span m='67333'>the</span> <span
  m='67756'>corpus</span> <span m='68180'>to</span> <span
  m='68518'>lowercase</span> <span m='68856'>using</span> <span
  m='69194'>tm</span> <span m='69532'>map</span> <span m='69870'>and</span>
  <span m='70208'>the</span> <span m='70546'>two</span> <span
  m='70884'>lower</span> <span m='71222'>function.</span> </p><p><span
  m='71560'>So</span> <span m='71838'>we'll</span> <span m='72117'>have</span>
  <span m='72395'>corpus</span> <span m='72674'>=</span> <span
  m='72952'>tm_map(corpus,</span> <span m='73231'>tolower).</span> </p><p><span
  m='81000'>And</span> <span m='81234'>then</span> <span m='81468'>we'll</span>
  <span m='81702'>do</span> <span m='81936'>the</span> <span
  m='82170'>exact</span> <span m='82404'>same</span> <span
  m='82638'>thing</span> <span m='82872'>except</span> <span
  m='83106'>removing</span> <span m='83340'>punctuation,</span> <span
  m='83554'>so</span> <span m='83768'>we'll</span> <span m='83982'>have</span>
  <span m='84197'>corpus</span> <span m='84411'>=</span> <span
  m='84625'>tm_map(corpus,</span> <span m='84840'>removePunctuation).</span>
  </p><p><span m='96310'>We'll</span> <span m='97281'>remove</span> <span
  m='98252'>the</span> <span m='99223'>stop</span> <span m='100194'>words</span>
  <span m='101165'>with</span> <span m='102136'>remove</span> <span
  m='103107'>words</span> <span m='104078'>function</span> <span
  m='105050'>and</span> <span m='105478'>we'll</span> <span
  m='105906'>pass</span> <span m='106334'>along</span> <span
  m='106762'>the</span> <span m='107190'>stop</span> <span
  m='107618'>words</span> <span m='108046'>of</span> <span m='108474'>the</span>
  <span m='108902'>English</span> <span m='109330'>language</span> <span
  m='109759'>as</span> <span m='110260'>the</span> <span m='110762'>words</span>
  <span m='111263'>we</span> <span m='111765'>want</span> <span
  m='112266'>to</span> <span m='112768'>remove.</span> </p><p><span
  m='113270'>And</span> <span m='113626'>lastly,</span> <span
  m='113982'>we're</span> <span m='114338'>going</span> <span
  m='114695'>to</span> <span m='115051'>stem</span> <span m='115407'>the</span>
  <span m='115763'>document.</span> </p><p><span m='116120'>So</span> <span
  m='116460'>corpus</span> <span m='116800'>=</span> <span
  m='117140'>tm_map(corpus,</span> <span m='117480'>stemDocument).</span>
  </p><p><span m='126030'>And</span> <span m='126304'>now</span> <span
  m='126578'>that</span> <span m='126852'>we've</span> <span
  m='127126'>gone</span> <span m='127400'>through</span> <span
  m='127674'>those</span> <span m='127948'>four</span> <span
  m='128222'>preprocessing</span> <span m='128496'>steps,</span> <span
  m='128770'>we</span> <span m='128994'>can</span> <span m='129219'>take</span>
  <span m='129443'>a</span> <span m='129668'>second</span> <span
  m='129893'>look</span> <span m='130117'>at</span> <span m='130342'>the</span>
  <span m='130566'>first</span> <span m='130791'>email</span> <span
  m='131016'>in</span> <span m='131240'>the</span> <span
  m='131465'>corpus.</span> </p><p><span m='131690'>So</span> <span
  m='132202'>again,</span> <span m='132715'>call</span> <span
  m='133227'>strwrap(corpusstrwrap(corpus{[1]).</span> </p><p><span
  m='140050'>And</span> <span m='140298'>now</span> <span m='140547'>it</span>
  <span m='140796'>looks</span> <span m='141045'>quite</span> <span
  m='141293'>a</span> <span m='141542'>bit</span> <span
  m='141791'>different.</span> </p><p><span m='142040'>We</span> <span
  m='142272'>can</span> <span m='142505'>come</span> <span m='142737'>up</span>
  <span m='142970'>to</span> <span m='143202'>the</span> <span
  m='143435'>top</span> <span m='143667'>here.</span> </p><p><span
  m='143900'>It's</span> <span m='144161'>a</span> <span m='144422'>lot</span>
  <span m='144683'>harder</span> <span m='144944'>to</span> <span
  m='145205'>read</span> <span m='145466'>now</span> <span
  m='145727'>that</span> <span m='145988'>we</span> <span
  m='146249'>removed</span> <span m='146510'>all</span> <span
  m='146878'>the</span> <span m='147247'>stop</span> <span
  m='147616'>words</span> <span m='147985'>and</span> <span
  m='148353'>punctuation</span> <span m='148722'>and</span> <span
  m='149091'>word</span> <span m='149460'>stems,</span> <span
  m='149829'>but</span> <span m='150066'>now</span> <span m='150303'>the</span>
  <span m='150540'>emails</span> <span m='150778'>in</span> <span
  m='151015'>this</span> <span m='151252'>corpus</span> <span
  m='151490'>are</span> <span m='151918'>ready</span> <span
  m='152347'>for</span> <span m='152775'>our</span> <span
  m='153204'>machine</span> <span m='153632'>learning</span> <span
  m='154061'>algorithms.</span> </p>
uid: 4e41dd76b35c6d67c10d2253c4352758
type: courses
layout: video
---
