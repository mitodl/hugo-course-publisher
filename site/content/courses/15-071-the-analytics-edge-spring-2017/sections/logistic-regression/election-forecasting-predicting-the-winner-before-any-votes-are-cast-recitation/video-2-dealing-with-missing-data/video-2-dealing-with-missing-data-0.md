---
about_this_resource_text: ''
embedded_media:
  - id: Video-YouTube-Stream
    media_location: isTQo2B_1Ng
    parent_uid: 79124d3386ea21b34c77d47f604a52a8
    title: Video-YouTube-Stream
    type: Video
    uid: f93ec5d3e8b3388bd2ba7fc7c6b264ee
  - id: 3Play-3Play YouTube id-Stream
    media_location: isTQo2B_1Ng
    parent_uid: 79124d3386ea21b34c77d47f604a52a8
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: e86879f08bfd3c8d0e29cfc66409ef93
  - id: Thumbnail-YouTube-JPG_1
    media_location: 'https://img.youtube.com/vi/isTQo2B_1Ng/default.jpg'
    parent_uid: 79124d3386ea21b34c77d47f604a52a8
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 5991a47bf4624800386805048363b090
  - id: isTQo2B_1Ng.srt
    parent_uid: 79124d3386ea21b34c77d47f604a52a8
    technical_location: >-
      https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/logistic-regression/election-forecasting-predicting-the-winner-before-any-votes-are-cast-recitation/video-2-dealing-with-missing-data/video-2-dealing-with-missing-data-0/isTQo2B_1Ng.srt
    title: 3play caption file
    type: null
    uid: 75a8785b65174ddf2f88d36487cd3f09
  - id: isTQo2B_1Ng.pdf
    parent_uid: 79124d3386ea21b34c77d47f604a52a8
    technical_location: >-
      https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/logistic-regression/election-forecasting-predicting-the-winner-before-any-votes-are-cast-recitation/video-2-dealing-with-missing-data/video-2-dealing-with-missing-data-0/isTQo2B_1Ng.pdf
    title: 3play pdf file
    type: null
    uid: a0f9de1129fe7663d0100a512fd5446a
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 79124d3386ea21b34c77d47f604a52a8
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: f064d678506e857b5aa3d296652ac140
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 79124d3386ea21b34c77d47f604a52a8
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 9f9ca2a1aea5f68e04f1634c9a72e9ca
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MIT15.071S17/MIT15_071S17_Session_3.4.03_300k.mp4
    parent_uid: 79124d3386ea21b34c77d47f604a52a8
    title: Video-Internet Archive-MP4
    type: Video
    uid: ef899401665ab5429d8fb2b9a8b53bae
inline_embed_id: 75511773video2dealingwithmissingdata60970853
parent_uid: 43791d3a19abd5be349137c83ceb6676
related_resources_text: ''
short_url: video-2-dealing-with-missing-data-0
technical_location: >-
  https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/logistic-regression/election-forecasting-predicting-the-winner-before-any-votes-are-cast-recitation/video-2-dealing-with-missing-data/video-2-dealing-with-missing-data-0
title: 'Video 2: Dealing with Missing Data'
transcript: >-
  <p><span m='4500'>As</span> <span m='4739'>usual,</span> <span
  m='4978'>we</span> <span m='5217'>will</span> <span m='5456'>start</span>
  <span m='5695'>by</span> <span m='5934'>reading</span> <span
  m='6173'>in</span> <span m='6412'>our</span> <span m='6651'>data</span> <span
  m='6890'>and</span> <span m='7197'>looking</span> <span m='7505'>at</span>
  <span m='7812'>it</span> <span m='8120'>in</span> <span m='8427'>the</span>
  <span m='8735'>R</span> <span m='9042'>console.</span> </p><p><span
  m='9350'>So</span> <span m='9672'>we</span> <span m='9994'>can</span> <span
  m='10316'>create</span> <span m='10638'>a</span> <span m='10961'>data</span>
  <span m='11283'>frame</span> <span m='11605'>called</span> <span
  m='11927'>polling</span> <span m='12250'>using</span> <span
  m='13043'>the</span> <span m='13837'>read.csv</span> <span
  m='14631'>function</span> <span m='15425'>for</span> <span
  m='16218'>our</span> <span m='17012'>PollingData.csv</span> <span
  m='17806'>file.</span> </p><p><span m='18600'>And</span> <span
  m='18985'>we</span> <span m='19370'>can</span> <span m='19756'>take</span>
  <span m='20141'>a</span> <span m='20526'>look</span> <span m='20912'>at</span>
  <span m='21297'>its</span> <span m='21683'>structure</span> <span
  m='22068'>with</span> <span m='22453'>the</span> <span m='22839'>str</span>
  <span m='23224'>command.</span> </p><p><span m='23610'>And</span> <span
  m='23908'>what</span> <span m='24207'>we</span> <span m='24506'>can</span>
  <span m='24805'>see</span> <span m='25104'>is</span> <span
  m='25403'>that</span> <span m='25702'>as</span> <span
  m='26001'>expected,</span> <span m='26300'>we</span> <span
  m='26587'>have</span> <span m='26874'>a</span> <span m='27161'>state</span>
  <span m='27449'>and</span> <span m='27736'>a</span> <span
  m='28023'>year</span> <span m='28310'>variable</span> <span
  m='28598'>for</span> <span m='28885'>each</span> <span
  m='29172'>observation,</span> <span m='29460'>as</span> <span
  m='29715'>well</span> <span m='29971'>as</span> <span m='30226'>some</span>
  <span m='30482'>polling</span> <span m='30737'>data</span> <span
  m='30993'>and</span> <span m='31248'>the</span> <span m='31504'>outcome</span>
  <span m='31760'>variable,</span> <span m='32690'>Republican.</span>
  </p><p><span m='33620'>So</span> <span m='33852'>something</span> <span
  m='34085'>we</span> <span m='34317'>notice</span> <span m='34550'>right</span>
  <span m='34782'>off</span> <span m='35015'>the</span> <span
  m='35247'>bat</span> <span m='35480'>is</span> <span m='35732'>that</span>
  <span m='35985'>even</span> <span m='36238'>though</span> <span
  m='36490'>there</span> <span m='36743'>are</span> <span m='36996'>50</span>
  <span m='37249'>states</span> <span m='37501'>and</span> <span
  m='37754'>three</span> <span m='38007'>election</span> <span
  m='38260'>years,</span> <span m='38767'>so</span> <span m='39274'>we</span>
  <span m='39781'>would</span> <span m='40288'>expect</span> <span
  m='40795'>150</span> <span m='41302'>observations,</span> <span
  m='41810'>we</span> <span m='42273'>actually</span> <span
  m='42736'>only</span> <span m='43199'>have</span> <span m='43662'>145</span>
  <span m='44125'>observations</span> <span m='44588'>in</span> <span
  m='45051'>the</span> <span m='45514'>data</span> <span m='45977'>frame.</span>
  </p><p><span m='46440'>So</span> <span m='46764'>using</span> <span
  m='47088'>the</span> <span m='47412'>table</span> <span
  m='47737'>function,</span> <span m='48061'>we</span> <span
  m='48385'>can</span> <span m='48710'>look</span> <span m='49104'>at</span>
  <span m='49498'>the</span> <span m='49892'>breakdown</span> <span
  m='50286'>of</span> <span m='50680'>the</span> <span m='51074'>polling</span>
  <span m='51468'>data</span> <span m='51862'>frame's</span> <span
  m='52256'>Year</span> <span m='52650'>variable.</span> </p><p><span
  m='54340'>And</span> <span m='54657'>what</span> <span m='54975'>we</span>
  <span m='55293'>see</span> <span m='55610'>is</span> <span
  m='55928'>that</span> <span m='56246'>while</span> <span m='56563'>in</span>
  <span m='56881'>the</span> <span m='57199'>2004</span> <span
  m='57516'>and</span> <span m='57834'>2008</span> <span
  m='58152'>elections,</span> <span m='58470'>all</span> <span
  m='58854'>50</span> <span m='59238'>states</span> <span m='59622'>have</span>
  <span m='60006'>data</span> <span m='60390'>reported,</span> <span
  m='60774'>in</span> <span m='61158'>2012,</span> <span m='61542'>only</span>
  <span m='61926'>45</span> <span m='62310'>of</span> <span m='62663'>the</span>
  <span m='63016'>50</span> <span m='63370'>states</span> <span
  m='63723'>have</span> <span m='64076'>data.</span> </p><p><span
  m='64430'>And</span> <span m='64673'>actually,</span> <span
  m='64916'>what</span> <span m='65160'>happened</span> <span
  m='65403'>here</span> <span m='65646'>is</span> <span m='65890'>that</span>
  <span m='66206'>pollsters</span> <span m='66522'>were</span> <span
  m='66838'>so</span> <span m='67154'>sure</span> <span m='67470'>about</span>
  <span m='67786'>the</span> <span m='68102'>five</span> <span
  m='68418'>missing</span> <span m='68734'>states</span> <span
  m='69050'>that</span> <span m='69295'>they</span> <span
  m='69540'>didn't</span> <span m='69786'>perform</span> <span
  m='70031'>any</span> <span m='70277'>polls</span> <span m='70522'>in</span>
  <span m='70768'>the</span> <span m='71013'>months</span> <span
  m='71259'>leading</span> <span m='71504'>up</span> <span m='71750'>to</span>
  <span m='72247'>the</span> <span m='72745'>2012</span> <span
  m='73242'>election.</span> </p><p><span m='73740'>So</span> <span
  m='74055'>since</span> <span m='74371'>these</span> <span
  m='74686'>states</span> <span m='75002'>are</span> <span
  m='75317'>particularly</span> <span m='75633'>easy</span> <span
  m='75948'>to</span> <span m='76264'>predict,</span> <span m='76580'>we</span>
  <span m='76945'>feel</span> <span m='77311'>pretty</span> <span
  m='77677'>comfortable</span> <span m='78042'>moving</span> <span
  m='78408'>forward,</span> <span m='78774'>making</span> <span
  m='79140'>predictions</span> <span m='79747'>just</span> <span
  m='80354'>for</span> <span m='80961'>the</span> <span m='81568'>45</span>
  <span m='82175'>remaining</span> <span m='82782'>states.</span> </p><p><span
  m='83390'>So</span> <span m='83592'>the</span> <span m='83795'>second</span>
  <span m='83998'>thing</span> <span m='84201'>that</span> <span
  m='84404'>we</span> <span m='84607'>notice</span> <span m='84810'>is</span>
  <span m='85053'>that</span> <span m='85297'>there</span> <span
  m='85541'>are</span> <span m='85785'>these</span> <span m='86028'>NA</span>
  <span m='86272'>values,</span> <span m='86516'>which</span> <span
  m='86760'>signify</span> <span m='87440'>missing</span> <span
  m='88120'>data.</span> </p><p><span m='88800'>So</span> <span
  m='89045'>to</span> <span m='89290'>get</span> <span m='89535'>a</span> <span
  m='89780'>handle</span> <span m='90025'>on</span> <span m='90270'>just</span>
  <span m='90515'>how</span> <span m='90760'>many</span> <span
  m='91005'>values</span> <span m='91250'>are</span> <span
  m='91495'>missing,</span> <span m='91740'>we</span> <span m='92160'>can</span>
  <span m='92581'>use</span> <span m='93002'>our</span> <span
  m='93423'>summary</span> <span m='93844'>function</span> <span
  m='94265'>on</span> <span m='94686'>the</span> <span m='95107'>polling</span>
  <span m='95528'>data</span> <span m='95949'>frame.</span> </p><p><span
  m='96370'>And</span> <span m='96565'>what</span> <span m='96760'>we</span>
  <span m='96955'>see</span> <span m='97150'>is</span> <span
  m='97345'>that</span> <span m='97540'>while</span> <span m='97735'>for</span>
  <span m='97930'>the</span> <span m='98125'>majority</span> <span
  m='98320'>of</span> <span m='98666'>our</span> <span
  m='99012'>variables,</span> <span m='99358'>there's</span> <span
  m='99705'>actually</span> <span m='100051'>no</span> <span
  m='100397'>missing</span> <span m='100743'>data,</span> <span
  m='101090'>we</span> <span m='101380'>see</span> <span m='101670'>that</span>
  <span m='101960'>for</span> <span m='102250'>the</span> <span
  m='102540'>Rasmussen</span> <span m='102830'>polling</span> <span
  m='103120'>data</span> <span m='103410'>and</span> <span
  m='103881'>also</span> <span m='104352'>for</span> <span m='104824'>the</span>
  <span m='105295'>SurveyUSA</span> <span m='105767'>polling</span> <span
  m='106238'>data,</span> <span m='106710'>there</span> <span
  m='107055'>are</span> <span m='107400'>a</span> <span m='107745'>decent</span>
  <span m='108090'>number</span> <span m='108435'>of</span> <span
  m='108780'>missing</span> <span m='109125'>values.</span> </p><p><span
  m='109470'>So</span> <span m='109632'>let's</span> <span
  m='109794'>take</span> <span m='109956'>a</span> <span m='110118'>look</span>
  <span m='110281'>at</span> <span m='110443'>just</span> <span
  m='110605'>how</span> <span m='110767'>we</span> <span m='110930'>can</span>
  <span m='111495'>handle</span> <span m='112061'>this</span> <span
  m='112627'>missing</span> <span m='113193'>data.</span> </p><p><span
  m='113759'>There</span> <span m='114030'>are</span> <span m='114302'>a</span>
  <span m='114573'>number</span> <span m='114845'>of</span> <span
  m='115116'>simple</span> <span m='115388'>approaches</span> <span
  m='115660'>to</span> <span m='116156'>dealing</span> <span
  m='116652'>with</span> <span m='117148'>missing</span> <span
  m='117644'>data.</span> </p><p><span m='118140'>One</span> <span
  m='118506'>would</span> <span m='118873'>be</span> <span m='119240'>to</span>
  <span m='119606'>delete</span> <span m='119973'>observations</span> <span
  m='120340'>that</span> <span m='120726'>are</span> <span
  m='121112'>missing</span> <span m='121498'>at</span> <span
  m='121885'>least</span> <span m='122271'>one</span> <span
  m='122657'>variable</span> <span m='123043'>value.</span> </p><p><span
  m='123430'>Unfortunately,</span> <span m='123736'>in</span> <span
  m='124042'>this</span> <span m='124348'>case,</span> <span
  m='124654'>that</span> <span m='124960'>would</span> <span
  m='125226'>result</span> <span m='125492'>in</span> <span
  m='125758'>throwing</span> <span m='126025'>away</span> <span
  m='126291'>more</span> <span m='126557'>than</span> <span
  m='126823'>50%</span> <span m='127090'>of</span> <span m='127623'>the</span>
  <span m='128156'>observations.</span> </p><p><span m='128690'>And</span> <span
  m='128903'>further,</span> <span m='129116'>we</span> <span
  m='129329'>want</span> <span m='129542'>to</span> <span m='129755'>be</span>
  <span m='129968'>able</span> <span m='130181'>to</span> <span
  m='130394'>make</span> <span m='130607'>predictions</span> <span
  m='130820'>for</span> <span m='131104'>all</span> <span
  m='131388'>states,</span> <span m='131673'>not</span> <span
  m='131957'>just</span> <span m='132242'>for</span> <span m='132526'>the</span>
  <span m='132811'>ones</span> <span m='133095'>that</span> <span
  m='133380'>report</span> <span m='133871'>all</span> <span
  m='134363'>of</span> <span m='134854'>their</span> <span
  m='135346'>variable</span> <span m='135837'>values.</span> </p><p><span
  m='136329'>Another</span> <span m='136661'>observation</span> <span
  m='136993'>would</span> <span m='137326'>be</span> <span m='137658'>to</span>
  <span m='137990'>remove</span> <span m='138323'>the</span> <span
  m='138655'>variables</span> <span m='138987'>that</span> <span
  m='139320'>have</span> <span m='139691'>missing</span> <span
  m='140062'>values,</span> <span m='140433'>in</span> <span
  m='140805'>this</span> <span m='141176'>case,</span> <span
  m='141547'>the</span> <span m='141918'>Rasmussen</span> <span
  m='142290'>and</span> <span m='143196'>SurveyUSA</span> <span
  m='144103'>variables.</span> </p><p><span m='145010'>However,</span> <span
  m='145520'>we</span> <span m='146030'>expect</span> <span
  m='146540'>Rasmussen</span> <span m='147050'>and</span> <span
  m='147560'>SurveyUSA</span> <span m='148070'>to</span> <span
  m='148550'>be</span> <span m='149030'>qualitatively</span> <span
  m='149510'>different</span> <span m='149990'>from</span> <span
  m='150470'>aggregate</span> <span m='150950'>variables,</span> <span
  m='151430'>such</span> <span m='151827'>as</span> <span
  m='152224'>DiffCount</span> <span m='152621'>and</span> <span
  m='153018'>PropR,</span> <span m='153415'>so</span> <span m='153812'>we</span>
  <span m='154210'>want</span> <span m='154513'>to</span> <span
  m='154817'>retain</span> <span m='155121'>them</span> <span
  m='155425'>in</span> <span m='155728'>our</span> <span m='156032'>data</span>
  <span m='156336'>set.</span> </p><p><span m='156640'>A</span> <span
  m='156880'>third</span> <span m='157120'>approach</span> <span
  m='157360'>would</span> <span m='157600'>be</span> <span m='157840'>to</span>
  <span m='158080'>fill</span> <span m='158320'>the</span> <span
  m='158560'>missing</span> <span m='158800'>data</span> <span
  m='159040'>points</span> <span m='159562'>with</span> <span
  m='160085'>average</span> <span m='160607'>values.</span> </p><p><span
  m='161130'>So</span> <span m='161435'>for</span> <span
  m='161740'>Rasmussen</span> <span m='162046'>and</span> <span
  m='162351'>SurveyUSA,</span> <span m='162657'>the</span> <span
  m='162962'>average</span> <span m='163268'>value</span> <span
  m='163573'>for</span> <span m='163879'>a</span> <span m='164184'>poll</span>
  <span m='164490'>would</span> <span m='164773'>be</span> <span
  m='165056'>very</span> <span m='165339'>close</span> <span
  m='165622'>to</span> <span m='165905'>zero</span> <span
  m='166188'>across</span> <span m='166471'>all</span> <span
  m='166754'>the</span> <span m='167037'>times</span> <span
  m='167320'>with</span> <span m='167577'>it</span> <span
  m='167835'>reported,</span> <span m='168092'>which</span> <span
  m='168350'>is</span> <span m='168607'>roughly</span> <span m='168865'>a</span>
  <span m='169122'>tie</span> <span m='169380'>between</span> <span
  m='169856'>the</span> <span m='170333'>Democrat</span> <span
  m='170810'>and</span> <span m='171286'>Republican</span> <span
  m='171763'>candidate.</span> </p><p><span m='172240'>However,</span> <span
  m='172669'>if</span> <span m='173098'>PropR</span> <span m='173527'>is</span>
  <span m='173956'>very</span> <span m='174385'>close</span> <span
  m='174814'>to</span> <span m='175243'>one</span> <span m='175672'>or</span>
  <span m='176101'>zero,</span> <span m='176530'>we</span> <span
  m='176945'>would</span> <span m='177361'>expect</span> <span
  m='177777'>the</span> <span m='178192'>Rasmussen</span> <span
  m='178608'>or</span> <span m='179024'>SurveyUSA</span> <span
  m='179440'>values</span> <span m='179802'>that</span> <span
  m='180164'>are</span> <span m='180526'>currently</span> <span
  m='180888'>missing</span> <span m='181250'>to</span> <span
  m='181918'>be</span> <span m='182586'>positive</span> <span
  m='183255'>or</span> <span m='183923'>negative,</span> <span
  m='184591'>respectively.</span> </p><p><span m='185260'>This</span> <span
  m='185542'>leads</span> <span m='185825'>to</span> <span m='186108'>a</span>
  <span m='186391'>more</span> <span m='186674'>complicated</span> <span
  m='186957'>approach</span> <span m='187240'>called</span> <span
  m='187528'>multiple</span> <span m='187816'>imputation</span> <span
  m='188104'>in</span> <span m='188392'>which</span> <span m='188680'>we</span>
  <span m='188968'>fill</span> <span m='189256'>in</span> <span
  m='189544'>the</span> <span m='189832'>missing</span> <span
  m='190120'>values</span> <span m='190495'>based</span> <span
  m='190871'>on</span> <span m='191246'>the</span> <span
  m='191622'>non-missing</span> <span m='191997'>values</span> <span
  m='192373'>for</span> <span m='192748'>an</span> <span
  m='193124'>observation.</span> </p><p><span m='193500'>So</span> <span
  m='193848'>for</span> <span m='194197'>instance,</span> <span
  m='194546'>if</span> <span m='194895'>the</span> <span
  m='195244'>Rasmussen</span> <span m='195593'>variable</span> <span
  m='195942'>is</span> <span m='196291'>reported</span> <span
  m='196640'>and</span> <span m='197023'>is</span> <span m='197406'>very</span>
  <span m='197790'>negative,</span> <span m='198173'>then</span> <span
  m='198556'>the</span> <span m='198940'>missing</span> <span
  m='199323'>SurveyUSA</span> <span m='199706'>value</span> <span
  m='200090'>would</span> <span m='200429'>likely</span> <span
  m='200768'>be</span> <span m='201107'>filled</span> <span m='201446'>in</span>
  <span m='201785'>as</span> <span m='202124'>a</span> <span
  m='202463'>negative</span> <span m='202802'>value</span> <span
  m='203141'>as</span> <span m='203480'>well.</span> </p><p><span
  m='203820'>Just</span> <span m='204200'>like</span> <span m='204580'>in</span>
  <span m='204960'>the</span> <span m='205340'>sample.split</span> <span
  m='205720'>function,</span> <span m='206100'>multiple</span> <span
  m='206606'>runs</span> <span m='207112'>of</span> <span
  m='207618'>multiple</span> <span m='208124'>imputation</span> <span
  m='208630'>will</span> <span m='209031'>in</span> <span
  m='209432'>general</span> <span m='209833'>result</span> <span
  m='210234'>in</span> <span m='210635'>different</span> <span
  m='211036'>missing</span> <span m='211437'>values</span> <span
  m='211838'>being</span> <span m='212240'>filled</span> <span
  m='212759'>in</span> <span m='213278'>based</span> <span m='213797'>on</span>
  <span m='214316'>the</span> <span m='214835'>random</span> <span
  m='215354'>seed</span> <span m='215873'>that</span> <span m='216392'>is</span>
  <span m='216911'>set.</span> </p><p><span m='217430'>Although</span> <span
  m='217783'>multiple</span> <span m='218136'>imputation</span> <span
  m='218490'>is</span> <span m='218843'>in</span> <span
  m='219196'>general</span> <span m='219550'>a</span> <span
  m='220145'>mathematically</span> <span m='220740'>sophisticated</span> <span
  m='221335'>approach,</span> <span m='221930'>we</span> <span
  m='222231'>can</span> <span m='222532'>use</span> <span m='222833'>it</span>
  <span m='223134'>rather</span> <span m='223435'>easily</span> <span
  m='223736'>through</span> <span m='224037'>pre-existing</span> <span
  m='224338'>R</span> <span m='224640'>libraries.</span> </p><p><span
  m='225840'>We</span> <span m='226103'>will</span> <span m='226366'>use</span>
  <span m='226630'>the</span> <span m='226893'>Multiple</span> <span
  m='227156'>Imputation</span> <span m='227420'>by</span> <span
  m='228013'>Chained</span> <span m='228606'>Equations,</span> <span
  m='229200'>or</span> <span m='229793'>mice</span> <span
  m='230386'>package.</span> </p><p><span m='230980'>So</span> <span
  m='231284'>just</span> <span m='231588'>like</span> <span m='231893'>we</span>
  <span m='232197'>did</span> <span m='232502'>in</span> <span
  m='232806'>lecture</span> <span m='233111'>with</span> <span
  m='233415'>the</span> <span m='233720'>ROCR</span> <span
  m='234024'>package,</span> <span m='234329'>we're</span> <span
  m='234589'>going</span> <span m='234849'>to</span> <span
  m='235109'>install</span> <span m='235369'>and</span> <span
  m='235629'>then</span> <span m='235889'>load</span> <span m='236150'>a</span>
  <span m='236610'>new</span> <span m='237070'>package,</span> <span
  m='237530'>the</span> <span m='237990'>mice</span> <span
  m='238450'>package.</span> </p><p><span m='238910'>So</span> <span
  m='239498'>we</span> <span m='240086'>run</span> <span
  m='240675'>install.packages,</span> <span m='241263'>and</span> <span
  m='241851'>we</span> <span m='242440'>pass</span> <span m='242639'>it</span>
  <span m='242838'>mice,</span> <span m='243037'>which</span> <span
  m='243236'>is</span> <span m='243435'>the</span> <span m='243634'>name</span>
  <span m='243833'>of</span> <span m='244032'>the</span> <span
  m='244231'>package</span> <span m='244430'>we</span> <span
  m='244630'>want</span> <span m='245193'>to</span> <span
  m='245756'>install.</span> </p><p><span m='246320'>So</span> <span
  m='246745'>you</span> <span m='247170'>have</span> <span m='247595'>to</span>
  <span m='248020'>select</span> <span m='248445'>a</span> <span
  m='248870'>mirror</span> <span m='249295'>near</span> <span
  m='249720'>you</span> <span m='250145'>for</span> <span m='250570'>the</span>
  <span m='250995'>installation,</span> <span m='251420'>and</span> <span
  m='252071'>hopefully</span> <span m='252723'>everything</span> <span
  m='253375'>will</span> <span m='254026'>go</span> <span
  m='254678'>smoothly</span> <span m='255330'>and</span> <span
  m='255632'>you'll</span> <span m='255935'>get</span> <span
  m='256238'>the</span> <span m='256541'>package</span> <span
  m='256844'>mice</span> <span m='257147'>installed.</span> </p><p><span
  m='257450'>So</span> <span m='257683'>after</span> <span
  m='257916'>it's</span> <span m='258150'>installed,</span> <span
  m='258383'>we</span> <span m='258616'>still</span> <span
  m='258850'>need</span> <span m='259044'>to</span> <span m='259239'>load</span>
  <span m='259433'>it</span> <span m='259628'>so</span> <span
  m='259822'>that</span> <span m='260017'>we</span> <span m='260211'>can</span>
  <span m='260406'>actually</span> <span m='260600'>use</span> <span
  m='260795'>it,</span> <span m='260990'>so</span> <span m='261345'>we</span>
  <span m='261700'>do</span> <span m='262055'>that</span> <span
  m='262410'>with</span> <span m='262765'>the</span> <span
  m='263120'>library</span> <span m='263475'>command.</span> </p><p><span
  m='263830'>If</span> <span m='264045'>you</span> <span m='264261'>have</span>
  <span m='264477'>to</span> <span m='264692'>use</span> <span
  m='264908'>it</span> <span m='265124'>in</span> <span m='265340'>the</span>
  <span m='265555'>future,</span> <span m='265771'>all</span> <span
  m='265987'>you'll</span> <span m='266202'>have</span> <span
  m='266418'>to</span> <span m='266634'>do</span> <span m='266850'>is</span>
  <span m='267205'>run</span> <span m='267561'>library</span> <span
  m='267916'>instead</span> <span m='268272'>of</span> <span
  m='268627'>installing</span> <span m='268983'>and</span> <span
  m='269338'>then</span> <span m='269694'>running</span> <span
  m='270050'>library.</span> </p><p><span m='271600'>So</span> <span
  m='272076'>for</span> <span m='272552'>our</span> <span
  m='273028'>multiple</span> <span m='273504'>imputation</span> <span
  m='273980'>to</span> <span m='274456'>be</span> <span
  m='274932'>useful,</span> <span m='275409'>we</span> <span
  m='275592'>have</span> <span m='275775'>to</span> <span m='275958'>be</span>
  <span m='276141'>able</span> <span m='276324'>to</span> <span
  m='276507'>find</span> <span m='276691'>out</span> <span m='276874'>the</span>
  <span m='277057'>values</span> <span m='277240'>of</span> <span
  m='277423'>our</span> <span m='277606'>missing</span> <span
  m='277790'>variables</span> <span m='278420'>without</span> <span
  m='279050'>using</span> <span m='279680'>the</span> <span
  m='280310'>outcome</span> <span m='280940'>of</span> <span
  m='281570'>Republican.</span> </p><p><span m='282200'>So,</span> <span
  m='282488'>what</span> <span m='282777'>we're</span> <span
  m='283066'>going</span> <span m='283355'>to</span> <span m='283643'>do</span>
  <span m='283932'>here</span> <span m='284221'>is</span> <span
  m='284510'>we're</span> <span m='284722'>going</span> <span
  m='284934'>to</span> <span m='285146'>limit</span> <span m='285358'>our</span>
  <span m='285571'>data</span> <span m='285783'>frame</span> <span
  m='285995'>to</span> <span m='286207'>just</span> <span m='286420'>the</span>
  <span m='286878'>four</span> <span m='287336'>polling</span> <span
  m='287794'>related</span> <span m='288252'>variables</span> <span
  m='288710'>before</span> <span m='289253'>we</span> <span
  m='289796'>actually</span> <span m='290340'>perform</span> <span
  m='290883'>multiple</span> <span m='291426'>imputation.</span> </p><p><span
  m='291970'>So</span> <span m='292277'>we're</span> <span
  m='292584'>going</span> <span m='292891'>to</span> <span
  m='293199'>create</span> <span m='293506'>a</span> <span m='293813'>new</span>
  <span m='294120'>data</span> <span m='294428'>frame</span> <span
  m='294735'>called</span> <span m='295042'>simple,</span> <span
  m='295350'>and</span> <span m='295599'>that's</span> <span
  m='295848'>just</span> <span m='296097'>going</span> <span
  m='296346'>to</span> <span m='296595'>be</span> <span m='296844'>our</span>
  <span m='297093'>original</span> <span m='297342'>polling</span> <span
  m='297591'>data</span> <span m='297840'>frame</span> <span
  m='299628'>limited</span> <span m='301416'>to</span> <span
  m='303205'>Rasmussen,</span> <span m='304993'>SurveyUSA,</span> <span
  m='306781'>PropR,</span> <span m='308570'>and</span> <span
  m='308910'>DiffCount.</span> </p><p><span m='314390'>We</span> <span
  m='314720'>can</span> <span m='315050'>take</span> <span m='315380'>a</span>
  <span m='315710'>look</span> <span m='316040'>at</span> <span
  m='316370'>the</span> <span m='316700'>simple</span> <span
  m='317030'>data</span> <span m='317360'>frame</span> <span
  m='318022'>using</span> <span m='318684'>the</span> <span
  m='319346'>summary</span> <span m='320008'>command.</span> </p><p><span
  m='320670'>What</span> <span m='320883'>we</span> <span m='321097'>can</span>
  <span m='321311'>see</span> <span m='321525'>is</span> <span
  m='321738'>that</span> <span m='321952'>we</span> <span
  m='322166'>haven't</span> <span m='322380'>done</span> <span
  m='322640'>anything</span> <span m='322900'>fancy</span> <span
  m='323160'>yet.</span> </p><p><span m='323420'>We</span> <span
  m='323775'>still</span> <span m='324130'>have</span> <span
  m='324485'>our</span> <span m='324840'>missing</span> <span
  m='325195'>values.</span> </p><p><span m='325550'>All</span> <span
  m='325781'>that's</span> <span m='326012'>changed</span> <span
  m='326244'>is</span> <span m='326475'>now</span> <span m='326707'>we</span>
  <span m='326938'>have</span> <span m='327170'>a</span> <span
  m='327687'>smaller</span> <span m='328204'>number</span> <span
  m='328721'>of</span> <span m='329238'>variables</span> <span
  m='329755'>in</span> <span m='330272'>total.</span> </p><p><span
  m='330790'>So</span> <span m='331252'>again,</span> <span
  m='331714'>multiple</span> <span m='332176'>imputation,</span> <span
  m='332638'>if</span> <span m='333101'>you</span> <span m='333563'>ran</span>
  <span m='334025'>it</span> <span m='334487'>twice,</span> <span
  m='334950'>you</span> <span m='335194'>would</span> <span
  m='335438'>get</span> <span m='335683'>different</span> <span
  m='335927'>values</span> <span m='336172'>that</span> <span
  m='336416'>were</span> <span m='336661'>filled</span> <span
  m='336905'>in.</span> </p><p><span m='337150'>So,</span> <span
  m='337658'>to</span> <span m='338167'>make</span> <span m='338676'>sure</span>
  <span m='339185'>that</span> <span m='339693'>everybody</span> <span
  m='340202'>following</span> <span m='340711'>along</span> <span
  m='341220'>gets</span> <span m='341578'>the</span> <span
  m='341936'>same</span> <span m='342295'>results</span> <span
  m='342653'>from</span> <span m='343011'>imputation,</span> <span
  m='343370'>we're</span> <span m='343642'>going</span> <span
  m='343914'>to</span> <span m='344186'>set</span> <span m='344458'>the</span>
  <span m='344730'>random</span> <span m='345002'>seed</span> <span
  m='345274'>to</span> <span m='345546'>a</span> <span m='345818'>value.</span>
  </p><p><span m='346090'>It</span> <span m='346333'>doesn't</span> <span
  m='346576'>really</span> <span m='346820'>matter</span> <span
  m='347063'>what</span> <span m='347306'>value</span> <span
  m='347550'>we</span> <span m='348026'>pick,</span> <span m='348502'>so</span>
  <span m='348978'>we'll</span> <span m='349454'>just</span> <span
  m='349930'>pick</span> <span m='350406'>my</span> <span
  m='350882'>favorite</span> <span m='351358'>number,</span> <span
  m='351834'>144.</span> </p><p><span m='352310'>And</span> <span
  m='352567'>now</span> <span m='352824'>we're</span> <span
  m='353081'>ready</span> <span m='353338'>to</span> <span m='353595'>do</span>
  <span m='353852'>imputation,</span> <span m='354110'>which</span> <span
  m='354404'>is</span> <span m='354698'>just</span> <span m='354992'>one</span>
  <span m='355286'>line.</span> </p><p><span m='355580'>So</span> <span
  m='355975'>we're</span> <span m='356370'>going</span> <span
  m='356766'>to</span> <span m='357161'>create</span> <span m='357557'>a</span>
  <span m='357952'>new</span> <span m='358348'>data</span> <span
  m='358743'>frame</span> <span m='359139'>called</span> <span
  m='359534'>imputed,</span> <span m='359930'>and</span> <span
  m='360291'>we're</span> <span m='360652'>going</span> <span
  m='361013'>to</span> <span m='361375'>use</span> <span m='361736'>the</span>
  <span m='362097'>function</span> <span m='362458'>complete,</span> <span
  m='362820'>called</span> <span m='363188'>on</span> <span
  m='363557'>the</span> <span m='363926'>function</span> <span
  m='364295'>mice,</span> <span m='364663'>called</span> <span
  m='365032'>on</span> <span m='365401'>simple.</span> </p><p><span
  m='368400'>So</span> <span m='368769'>the</span> <span
  m='369138'>output</span> <span m='369507'>here</span> <span
  m='369876'>shows</span> <span m='370245'>us</span> <span
  m='370614'>that</span> <span m='370983'>five</span> <span
  m='371352'>rounds</span> <span m='371721'>of</span> <span
  m='372090'>imputation</span> <span m='372460'>have</span> <span
  m='372855'>been</span> <span m='373251'>run,</span> <span
  m='373646'>and</span> <span m='374042'>now</span> <span m='374437'>all</span>
  <span m='374833'>of</span> <span m='375228'>the</span> <span
  m='375624'>variables</span> <span m='376020'>have</span> <span
  m='376282'>been</span> <span m='376545'>filled</span> <span
  m='376807'>in.</span> </p><p><span m='377070'>So</span> <span
  m='377321'>there's</span> <span m='377573'>no</span> <span
  m='377825'>more</span> <span m='378076'>missing</span> <span
  m='378328'>values,</span> <span m='378580'>and</span> <span
  m='379059'>we</span> <span m='379538'>can</span> <span m='380017'>see</span>
  <span m='380496'>that</span> <span m='380975'>using</span> <span
  m='381454'>the</span> <span m='381933'>summary</span> <span
  m='382412'>function</span> <span m='382891'>on</span> <span
  m='383370'>imputed.</span> </p><p><span m='383850'>So</span> <span
  m='384223'>Rasmussen</span> <span m='384597'>and</span> <span
  m='384971'>SurveyUSA</span> <span m='385345'>both</span> <span
  m='385718'>have</span> <span m='386092'>no</span> <span m='386466'>more</span>
  <span m='386840'>of</span> <span m='387248'>those</span> <span
  m='387656'>NA</span> <span m='388065'>or</span> <span
  m='388473'>missing</span> <span m='388881'>values.</span> </p><p><span
  m='389290'>So</span> <span m='389728'>the</span> <span m='390167'>last</span>
  <span m='390606'>step</span> <span m='391045'>in</span> <span
  m='391483'>this</span> <span m='391922'>imputation</span> <span
  m='392361'>process</span> <span m='392800'>is</span> <span
  m='393207'>to</span> <span m='393615'>actually</span> <span
  m='394022'>copy</span> <span m='394430'>the</span> <span
  m='394837'>Rasmussen</span> <span m='395245'>and</span> <span
  m='395652'>SurveyUSA</span> <span m='396060'>variables</span> <span
  m='396459'>back</span> <span m='396859'>into</span> <span
  m='397259'>our</span> <span m='397659'>original</span> <span
  m='398059'>polling</span> <span m='398459'>data</span> <span
  m='398859'>frame,</span> <span m='399259'>which</span> <span
  m='399659'>has</span> <span m='399969'>all</span> <span m='400279'>the</span>
  <span m='400589'>variables</span> <span m='400899'>for</span> <span
  m='401209'>the</span> <span m='401519'>problem.</span> </p><p><span
  m='401830'>And</span> <span m='402187'>we</span> <span m='402545'>can</span>
  <span m='402903'>do</span> <span m='403261'>that</span> <span
  m='403618'>with</span> <span m='403976'>two</span> <span
  m='404334'>simple</span> <span m='404692'>assignments.</span> </p><p><span
  m='405050'>So</span> <span m='405514'>we'll</span> <span
  m='405978'>just</span> <span m='406442'>copy</span> <span
  m='406906'>over</span> <span m='407370'>to</span> <span
  m='407834'>polling</span> <span m='408298'>Rasmussen,</span> <span
  m='408762'>the</span> <span m='409226'>value</span> <span
  m='409690'>from</span> <span m='410221'>the</span> <span
  m='410752'>imputed</span> <span m='411283'>data</span> <span
  m='411815'>frame,</span> <span m='412346'>and</span> <span
  m='412877'>then</span> <span m='413408'>we'll</span> <span
  m='413940'>do</span> <span m='414588'>the</span> <span m='415237'>same</span>
  <span m='415885'>for</span> <span m='416534'>the</span> <span
  m='417182'>SurveyUSA</span> <span m='417831'>variable.</span> </p><p><span
  m='421170'>And</span> <span m='421636'>we'll</span> <span
  m='422102'>use</span> <span m='422568'>one</span> <span
  m='423035'>final</span> <span m='423501'>check</span> <span
  m='423967'>using</span> <span m='424433'>summary</span> <span
  m='424900'>on</span> <span m='425383'>the</span> <span m='425866'>final</span>
  <span m='426350'>polling</span> <span m='426833'>data</span> <span
  m='427316'>frame.</span> </p><p><span m='427800'>And</span> <span
  m='428182'>as</span> <span m='428565'>we</span> <span m='428947'>can</span>
  <span m='429330'>see,</span> <span m='429712'>Rasmussen</span> <span
  m='430095'>and</span> <span m='430477'>SurveyUSA</span> <span
  m='430860'>are</span> <span m='431320'>no</span> <span
  m='431780'>longer</span> <span m='432240'>missing</span> <span
  m='432700'>values.</span> </p>
uid: 79124d3386ea21b34c77d47f604a52a8
type: courses
layout: video
---
