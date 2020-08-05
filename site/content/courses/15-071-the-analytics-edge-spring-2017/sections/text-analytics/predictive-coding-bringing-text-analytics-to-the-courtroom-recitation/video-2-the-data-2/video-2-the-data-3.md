---
about_this_resource_text: ''
embedded_media:
  - id: Video-YouTube-Stream
    media_location: S-UZTbRqjeo
    parent_uid: 8abd48638cc08b379da77662cae86d88
    title: Video-YouTube-Stream
    type: Video
    uid: e91855d1fdd31b093c5ed80d8b9b4547
  - id: 3Play-3Play YouTube id-Stream
    media_location: S-UZTbRqjeo
    parent_uid: 8abd48638cc08b379da77662cae86d88
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 492d584b2a863bee94d6774a49937b63
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/S-UZTbRqjeo/default.jpg'
    parent_uid: 8abd48638cc08b379da77662cae86d88
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: fdacc34b58883c987f09f90d89b132f3
  - id: S-UZTbRqjeo.srt
    parent_uid: 8abd48638cc08b379da77662cae86d88
    technical_location: >-
      https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/text-analytics/predictive-coding-bringing-text-analytics-to-the-courtroom-recitation/video-2-the-data-2/video-2-the-data-3/S-UZTbRqjeo.srt
    title: 3play caption file
    type: null
    uid: e8f152c710df204b7b0e5c595cc026f3
  - id: S-UZTbRqjeo.pdf
    parent_uid: 8abd48638cc08b379da77662cae86d88
    technical_location: >-
      https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/text-analytics/predictive-coding-bringing-text-analytics-to-the-courtroom-recitation/video-2-the-data-2/video-2-the-data-3/S-UZTbRqjeo.pdf
    title: 3play pdf file
    type: null
    uid: 72f1f5ef5a42b0681592fb25d0c3e89e
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 8abd48638cc08b379da77662cae86d88
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 4d76c20d3b72210ae0923da98ff6f59d
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 8abd48638cc08b379da77662cae86d88
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 0dca1b3f582a5cf39738e0fe8370266d
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MIT15.071S17/MIT15_071S17_Session_5.4.03_300k.mp4
    parent_uid: 8abd48638cc08b379da77662cae86d88
    title: Video-Internet Archive-MP4
    type: Video
    uid: 463e29a5b1a172283715b8d120ded218
inline_embed_id: 72362090video2thedata9029388
order_index: 1217
parent_uid: d2b6e4bccf8f0017b1fc3de36e683c9a
related_resources_text: ''
short_url: video-2-the-data-3
technical_location: >-
  https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/text-analytics/predictive-coding-bringing-text-analytics-to-the-courtroom-recitation/video-2-the-data-2/video-2-the-data-3
title: 'Video 2: The Data'
transcript: >-
  <p><span m='4500'>Let's</span> <span m='4930'>begin</span> <span
  m='5360'>by</span> <span m='5790'>creating</span> <span m='6220'>a</span>
  <span m='6650'>data</span> <span m='7080'>frame</span> <span
  m='7510'>called</span> <span m='7940'>emails</span> <span
  m='8370'>using</span> <span m='9200'>the</span> <span
  m='10030'>read.csv</span> <span m='10860'>function.</span> </p><p><span
  m='11690'>And</span> <span m='12180'>loading</span> <span m='12670'>up</span>
  <span m='13160'>energy_bids.csv.</span> </p><p><span m='16710'>And</span>
  <span m='17035'>as</span> <span m='17360'>always,</span> <span
  m='17685'>in</span> <span m='18010'>the</span> <span m='18335'>text</span>
  <span m='18660'>analytics</span> <span m='18985'>week,</span> <span
  m='19310'>we're</span> <span m='20060'>going</span> <span m='20810'>to</span>
  <span m='21560'>pass</span> <span m='22310'>stringsAsFactors=FALSE</span>
  <span m='23060'>to</span> <span m='23810'>this</span> <span
  m='24560'>function.</span> </p><p><span m='26660'>So</span> <span
  m='26915'>we</span> <span m='27170'>can</span> <span m='27425'>take</span>
  <span m='27680'>a</span> <span m='27935'>look</span> <span m='28190'>at</span>
  <span m='28445'>the</span> <span m='28700'>structure</span> <span
  m='28955'>of</span> <span m='29210'>our</span> <span m='29465'>new</span>
  <span m='29720'>data</span> <span m='29975'>frame</span> <span
  m='30230'>using</span> <span m='30980'>the</span> <span m='31730'>str</span>
  <span m='32480'>function.</span> </p><p><span m='33230'>We</span> <span
  m='33583'>can</span> <span m='33937'>see</span> <span m='34291'>that</span>
  <span m='34645'>there</span> <span m='34998'>are</span> <span
  m='35352'>855</span> <span m='35706'>observations.</span> </p><p><span
  m='36060'>This</span> <span m='36393'>means</span> <span m='36727'>we</span>
  <span m='37060'>have</span> <span m='37394'>855</span> <span
  m='37728'>labeled</span> <span m='38061'>emails</span> <span
  m='38395'>in</span> <span m='38729'>the</span> <span m='39062'>data</span>
  <span m='39396'>set.</span> </p><p><span m='39730'>And</span> <span
  m='40020'>for</span> <span m='40311'>each</span> <span m='40602'>one</span>
  <span m='40893'>we</span> <span m='41184'>have</span> <span
  m='41475'>the</span> <span m='41766'>text</span> <span m='42057'>of</span>
  <span m='42348'>the</span> <span m='42639'>email</span> <span
  m='42930'>and</span> <span m='43205'>whether</span> <span m='43481'>or</span>
  <span m='43756'>not</span> <span m='44032'>it's</span> <span
  m='44307'>responsive</span> <span m='44583'>to</span> <span
  m='44858'>our</span> <span m='45134'>query</span> <span m='45410'>about</span>
  <span m='46060'>energy</span> <span m='46710'>schedules</span> <span
  m='47360'>and</span> <span m='48010'>bids.</span> </p><p><span
  m='48660'>So</span> <span m='48874'>let's</span> <span m='49088'>take</span>
  <span m='49302'>a</span> <span m='49517'>look</span> <span m='49731'>at</span>
  <span m='49945'>a</span> <span m='50160'>few</span> <span
  m='50374'>example</span> <span m='50588'>emails</span> <span
  m='50802'>in</span> <span m='51017'>the</span> <span m='51231'>data</span>
  <span m='51445'>set,</span> <span m='51660'>starting</span> <span
  m='51988'>with</span> <span m='52316'>the</span> <span m='52644'>first</span>
  <span m='52972'>one.</span> </p><p><span m='53300'>So</span> <span
  m='53890'>the</span> <span m='54480'>first</span> <span m='55070'>email</span>
  <span m='55660'>can</span> <span m='56250'>be</span> <span
  m='56840'>accessed</span> <span m='57430'>with</span> <span
  m='58020'>emails$emailemails$email[1].</span> </p><p><span
  m='58610'>Almost</span> <span m='59100'>like</span> <span m='59590'>the</span>
  <span m='60080'>first</span> <span m='60570'>one.</span> </p><p><span
  m='61060'>So</span> <span m='61448'>while</span> <span m='61836'>the</span>
  <span m='62224'>output</span> <span m='62612'>you</span> <span
  m='63000'>get</span> <span m='63388'>when</span> <span m='63776'>you</span>
  <span m='64164'>type</span> <span m='64552'>this</span> <span
  m='64940'>will</span> <span m='65336'>depend</span> <span m='65733'>on</span>
  <span m='66130'>what</span> <span m='66526'>operating</span> <span
  m='66923'>system</span> <span m='67320'>you're</span> <span
  m='67716'>running</span> <span m='68113'>on,</span> <span
  m='68510'>many</span> <span m='68723'>of</span> <span m='68936'>you</span>
  <span m='69150'>will</span> <span m='69363'>see</span> <span
  m='69576'>what</span> <span m='69790'>I'm</span> <span
  m='70003'>displaying</span> <span m='70216'>here.</span> </p><p><span
  m='70430'>Which</span> <span m='70614'>is</span> <span m='70798'>a</span>
  <span m='70983'>single</span> <span m='71167'>line</span> <span
  m='71352'>of</span> <span m='71536'>text</span> <span m='71721'>that</span>
  <span m='71905'>we</span> <span m='72090'>need</span> <span
  m='72535'>to</span> <span m='72981'>horizontally</span> <span
  m='73427'>scroll</span> <span m='73872'>to</span> <span m='74318'>read</span>
  <span m='74764'>through.</span> </p><p><span m='75210'>This</span> <span
  m='75460'>is</span> <span m='75710'>a</span> <span m='75960'>pretty</span>
  <span m='76210'>tough</span> <span m='76460'>way</span> <span
  m='76710'>to</span> <span m='76960'>read</span> <span m='77210'>a</span> <span
  m='77460'>long</span> <span m='77710'>piece</span> <span m='77960'>of</span>
  <span m='78210'>text.</span> </p><p><span m='78460'>So</span> <span
  m='78776'>if</span> <span m='79092'>you</span> <span m='79408'>have</span>
  <span m='79725'>this</span> <span m='80041'>sort</span> <span
  m='80357'>of</span> <span m='80673'>display,</span> <span m='80990'>you</span>
  <span m='81410'>can</span> <span m='81830'>use</span> <span
  m='82250'>the</span> <span m='82670'>strwrap</span> <span
  m='83090'>function</span> <span m='83510'>and</span> <span
  m='83930'>pass</span> <span m='84350'>it</span> <span m='84770'>the</span>
  <span m='85190'>long</span> <span m='85610'>string</span> <span
  m='86030'>you</span> <span m='86450'>want</span> <span m='86938'>to</span>
  <span m='87427'>print</span> <span m='87916'>out,</span> <span
  m='88405'>in</span> <span m='88893'>this</span> <span m='89382'>case</span>
  <span m='89871'>emails$email.</span> </p><p><span m='90360'>Selecting</span>
  <span m='90922'>the</span> <span m='91485'>first</span> <span
  m='92047'>one.</span> </p><p><span m='92610'>And</span> <span
  m='92841'>now</span> <span m='93073'>we</span> <span m='93304'>can</span>
  <span m='93536'>see</span> <span m='93767'>that</span> <span
  m='93999'>this</span> <span m='94230'>has</span> <span m='94462'>broken</span>
  <span m='94693'>down</span> <span m='94925'>our</span> <span
  m='95156'>long</span> <span m='95388'>string</span> <span
  m='95620'>into</span> <span m='96073'>multiple</span> <span
  m='96526'>shorter</span> <span m='96979'>lines</span> <span
  m='97432'>that</span> <span m='97885'>are</span> <span m='98338'>much</span>
  <span m='98791'>easier</span> <span m='99244'>to</span> <span
  m='99697'>read.</span> </p><p><span m='100150'>OK.</span> </p><p><span
  m='101240'>So</span> <span m='101460'>let's</span> <span
  m='101680'>take</span> <span m='101900'>a</span> <span m='102120'>look</span>
  <span m='102340'>now</span> <span m='102560'>at</span> <span
  m='102780'>this</span> <span m='103000'>email,</span> <span
  m='103220'>now</span> <span m='103540'>that</span> <span
  m='103860'>it's</span> <span m='104180'>a</span> <span m='104500'>lot</span>
  <span m='104820'>easier</span> <span m='105140'>to</span> <span
  m='105460'>read.</span> </p><p><span m='105780'>We</span> <span
  m='105993'>can</span> <span m='106206'>see</span> <span m='106419'>just</span>
  <span m='106632'>by</span> <span m='106845'>parsing</span> <span
  m='107058'>through</span> <span m='107271'>the</span> <span
  m='107484'>first</span> <span m='107697'>couple</span> <span
  m='107910'>of</span> <span m='108188'>lines</span> <span
  m='108467'>that</span> <span m='108746'>this</span> <span m='109025'>is</span>
  <span m='109303'>an</span> <span m='109582'>email</span> <span
  m='109861'>that's</span> <span m='110140'>talking</span> <span
  m='110525'>about</span> <span m='110910'>a</span> <span m='111295'>new</span>
  <span m='111680'>working</span> <span m='112065'>paper,</span> <span
  m='112450'>"The</span> <span m='113046'>Environmental</span> <span
  m='113642'>Challenges</span> <span m='114238'>and</span> <span
  m='114834'>Opportunities</span> <span m='115430'>in</span> <span
  m='115795'>the</span> <span m='116161'>Evolving</span> <span
  m='116527'>North</span> <span m='116892'>American</span> <span
  m='117258'>Electricity</span> <span m='117624'>Market"</span> <span
  m='117990'>is</span> <span m='118303'>the</span> <span m='118616'>name</span>
  <span m='118930'>of</span> <span m='119243'>the</span> <span
  m='119556'>paper.</span> </p><p><span m='119870'>And</span> <span
  m='120265'>it's</span> <span m='120661'>being</span> <span
  m='121057'>released</span> <span m='121452'>by</span> <span
  m='121848'>the</span> <span m='122244'>Commission</span> <span
  m='122640'>for</span> <span m='123172'>Environmental</span> <span
  m='123704'>Cooperation,</span> <span m='124236'>or</span> <span
  m='124768'>CEC.</span> </p><p><span m='125300'>So</span> <span
  m='125691'>while</span> <span m='126082'>this</span> <span
  m='126473'>certainly</span> <span m='126865'>deals</span> <span
  m='127256'>with</span> <span m='127647'>electricity</span> <span
  m='128038'>markets,</span> <span m='128430'>it</span> <span
  m='128748'>doesn't</span> <span m='129066'>have</span> <span
  m='129384'>to</span> <span m='129702'>do</span> <span m='130020'>with</span>
  <span m='130338'>energy</span> <span m='130656'>schedules</span> <span
  m='130974'>or</span> <span m='131292'>bids.</span> </p><p><span
  m='131610'>So</span> <span m='131997'>it</span> <span m='132385'>is</span>
  <span m='132772'>not</span> <span m='133160'>responsive</span> <span
  m='133547'>to</span> <span m='133935'>our</span> <span
  m='134322'>query.</span> </p><p><span m='134710'>So</span> <span
  m='135024'>we</span> <span m='135338'>can</span> <span m='135652'>take</span>
  <span m='135966'>a</span> <span m='136280'>look</span> <span
  m='136595'>at</span> <span m='136909'>the</span> <span m='137223'>value</span>
  <span m='137537'>in</span> <span m='137851'>the</span> <span
  m='138165'>responsive</span> <span m='138480'>variable</span> <span
  m='139375'>for</span> <span m='140270'>this</span> <span
  m='141165'>email</span> <span m='142060'>using</span> <span
  m='142955'>email$responsive</span> <span m='143850'>and</span> <span
  m='144745'>selecting</span> <span m='145640'>the</span> <span
  m='146176'>first</span> <span m='146713'>one.</span> </p><p><span
  m='147250'>And</span> <span m='147570'>we</span> <span m='147890'>have</span>
  <span m='148210'>value</span> <span m='148530'>0</span> <span
  m='148850'>there.</span> </p><p><span m='149170'>So</span> <span
  m='149397'>let's</span> <span m='149625'>take</span> <span m='149853'>a</span>
  <span m='150080'>look</span> <span m='150308'>at</span> <span
  m='150536'>the</span> <span m='150763'>second</span> <span
  m='150991'>email</span> <span m='151219'>in</span> <span m='151446'>our</span>
  <span m='151674'>data</span> <span m='151902'>set.</span> </p><p><span
  m='152130'>Again</span> <span m='152457'>I'm</span> <span
  m='152785'>going</span> <span m='153112'>to</span> <span m='153440'>use</span>
  <span m='153767'>the</span> <span m='154095'>strwrap</span> <span
  m='154422'>function.</span> </p><p><span m='154750'>I'm</span> <span
  m='155091'>going</span> <span m='155433'>to</span> <span
  m='155775'>pass</span> <span m='156116'>it</span> <span
  m='156458'>emails$emailemails$email[1].</span> </p><p><span
  m='162220'>And</span> <span m='162495'>scrolling</span> <span
  m='162770'>up</span> <span m='163045'>the</span> <span m='163320'>top</span>
  <span m='163595'>here</span> <span m='163870'>we</span> <span
  m='164145'>can</span> <span m='164420'>see</span> <span m='164665'>that</span>
  <span m='164911'>the</span> <span m='165156'>original</span> <span
  m='165402'>message</span> <span m='165647'>is</span> <span
  m='165893'>actually</span> <span m='166138'>very</span> <span
  m='166384'>short,</span> <span m='166630'>it</span> <span
  m='167045'>just</span> <span m='167461'>says</span> <span
  m='167877'>FYI,</span> <span m='168292'>for</span> <span
  m='168708'>your</span> <span m='169124'>information.</span> </p><p><span
  m='169540'>And</span> <span m='169862'>most</span> <span m='170185'>of</span>
  <span m='170507'>it</span> <span m='170830'>is</span> <span
  m='171152'>a</span> <span m='171475'>forwarded</span> <span
  m='171797'>message.</span> </p><p><span m='172120'>So</span> <span
  m='172343'>we</span> <span m='172567'>have</span> <span m='172791'>all</span>
  <span m='173015'>the</span> <span m='173238'>people</span> <span
  m='173462'>who</span> <span m='173686'>originally</span> <span
  m='173910'>received</span> <span m='174530'>the</span> <span
  m='175150'>message.</span> </p><p><span m='175770'>And</span> <span
  m='176043'>then</span> <span m='176317'>down</span> <span m='176590'>at</span>
  <span m='176864'>the</span> <span m='177138'>very</span> <span
  m='177411'>bottom</span> <span m='177685'>is</span> <span
  m='177959'>the</span> <span m='178232'>message</span> <span
  m='178506'>itself.</span> </p><p><span m='178780'>"Attached</span> <span
  m='179136'>is</span> <span m='179492'>my</span> <span m='179848'>report</span>
  <span m='180204'>prepared</span> <span m='180560'>on</span> <span
  m='180916'>behalf</span> <span m='181272'>of</span> <span
  m='181628'>the</span> <span m='181984'>California</span> <span
  m='182340'>State</span> <span m='183255'>auditor."</span> <span
  m='184170'>And</span> <span m='184638'>there's</span> <span
  m='185107'>an</span> <span m='185576'>attached</span> <span
  m='186045'>report,</span> <span m='186513'>ca</span> <span
  m='186982'>report</span> <span m='187451'>new.pdf.</span> </p><p><span
  m='187920'>Now</span> <span m='188240'>our</span> <span m='188561'>data</span>
  <span m='188882'>set</span> <span m='189203'>contains</span> <span
  m='189524'>just</span> <span m='189845'>the</span> <span
  m='190166'>text</span> <span m='190487'>of</span> <span m='190808'>the</span>
  <span m='191129'>emails</span> <span m='191450'>and</span> <span
  m='191730'>not</span> <span m='192010'>the</span> <span m='192290'>text</span>
  <span m='192570'>of</span> <span m='192850'>the</span> <span
  m='193130'>attachments.</span> </p><p><span m='193410'>But</span> <span
  m='193707'>it</span> <span m='194005'>turns</span> <span
  m='194302'>out,</span> <span m='194600'>as</span> <span m='194897'>we</span>
  <span m='195195'>might</span> <span m='195492'>expect,</span> <span
  m='195790'>that</span> <span m='196088'>this</span> <span
  m='196386'>attachment</span> <span m='196684'>had</span> <span
  m='196982'>to</span> <span m='197280'>do</span> <span m='197578'>with</span>
  <span m='197876'>Enron's</span> <span m='198174'>electricity</span> <span
  m='198472'>bids</span> <span m='198770'>in</span> <span
  m='199405'>California.</span> </p><p><span m='200040'>And</span> <span
  m='200400'>therefore</span> <span m='200760'>it</span> <span
  m='201120'>is</span> <span m='201480'>responsive</span> <span
  m='201840'>to</span> <span m='202200'>our</span> <span
  m='202560'>query.</span> </p><p><span m='202920'>And</span> <span
  m='203191'>we</span> <span m='203462'>can</span> <span m='203733'>check</span>
  <span m='204004'>this</span> <span m='204275'>in</span> <span
  m='204546'>the</span> <span m='204817'>responsive</span> <span
  m='205088'>variable.</span> </p><p><span
  m='205360'>emails$responsive[2].</span> </p><p><span m='210890'>And</span>
  <span m='211225'>we</span> <span m='211561'>see</span> <span
  m='211897'>that</span> <span m='212232'>that's</span> <span
  m='212568'>a</span> <span m='212904'>1.</span> </p><p><span
  m='213240'>So</span> <span m='213497'>now</span> <span m='213754'>let's</span>
  <span m='214011'>look</span> <span m='214268'>at</span> <span
  m='214525'>the</span> <span m='214782'>breakdown</span> <span
  m='215040'>of</span> <span m='215345'>the</span> <span
  m='215651'>number</span> <span m='215957'>of</span> <span
  m='216263'>emails</span> <span m='216569'>that</span> <span
  m='216875'>are</span> <span m='217180'>responsive</span> <span
  m='217486'>to</span> <span m='217792'>our</span> <span m='218098'>query</span>
  <span m='218404'>using</span> <span m='218710'>the</span> <span
  m='219366'>table</span> <span m='220023'>function.</span> </p><p><span
  m='220680'>We're</span> <span m='220965'>going</span> <span
  m='221250'>to</span> <span m='221535'>pass</span> <span m='221820'>it</span>
  <span m='222105'>emails$responsive.</span> </p><p><span m='225110'>And</span>
  <span m='225370'>as</span> <span m='225630'>we</span> <span
  m='225890'>can</span> <span m='226150'>see</span> <span m='226410'>the</span>
  <span m='226670'>data</span> <span m='226930'>set</span> <span
  m='227190'>is</span> <span m='227450'>unbalanced,</span> <span
  m='227710'>with</span> <span m='228082'>a</span> <span
  m='228455'>relatively</span> <span m='228827'>small</span> <span
  m='229200'>proportion</span> <span m='229572'>of</span> <span
  m='229945'>emails</span> <span m='230317'>responsive</span> <span
  m='230690'>to</span> <span m='231016'>the</span> <span
  m='231343'>query.</span> </p><p><span m='231670'>And</span> <span
  m='232113'>this</span> <span m='232557'>is</span> <span
  m='233001'>typical</span> <span m='233445'>in</span> <span
  m='233888'>predictive</span> <span m='234332'>coding</span> <span
  m='234776'>problems.</span> </p>
uid: 8abd48638cc08b379da77662cae86d88
type: course
layout: video
---
