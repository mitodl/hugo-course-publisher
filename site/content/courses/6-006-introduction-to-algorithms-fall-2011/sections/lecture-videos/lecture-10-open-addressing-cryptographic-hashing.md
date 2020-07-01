---
about_this_resource_text: >-
  <p><strong>Description:</strong> This lecture covers open addressing, which is
  another approach to dealing with collisions (hashing with chaining was covered
  in Lecture 8). Cryptographic hashing is also introduced.</p>
  <p><strong>Instructor:</strong> Srini Devadas</p>
embedded_media:
  - id: Video-YouTube-Stream
    media_location: rvdJDijO2Ro
    parent_uid: bd150a3fc0039e971b46e7cb296105cc
    title: Video-YouTube-Stream
    type: Video
    uid: 374e67a64bdda14238f340940b041a44
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/rvdJDijO2Ro/default.jpg'
    parent_uid: bd150a3fc0039e971b46e7cb296105cc
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: d1e0af5c1d92418b7df330e07fcc026c
  - id: Video-iTunesU-MP4
    media_location: >-
      https://itunes.apple.com/us/itunes-u/lecture-10-open-addressing/id585700718?i=126127764
    parent_uid: bd150a3fc0039e971b46e7cb296105cc
    title: Video-iTunes U-MP4
    type: Video
    uid: 61d44dac29a6b849beed884862acda92
  - id: Video-InternetArchive-MP4
    media_location: 'http://www.archive.org/download/MIT6.006F11/MIT6_006F11_lec10_300k.mp4'
    parent_uid: bd150a3fc0039e971b46e7cb296105cc
    title: Video-Internet Archive-MP4
    type: Video
    uid: e379bfd72fbd42e6c7add9580ca09ec9
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: rvdJDijO2Ro
    parent_uid: bd150a3fc0039e971b46e7cb296105cc
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 9ff304c5986e3f0cb630460307e1bccf
  - id: rvdJDijO2Ro.srt
    parent_uid: bd150a3fc0039e971b46e7cb296105cc
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/lecture-videos/lecture-10-open-addressing-cryptographic-hashing/rvdJDijO2Ro.srt
    title: 3play caption file
    type: null
    uid: 59b7b01516eafb5521056e057055ade4
  - id: rvdJDijO2Ro.pdf
    parent_uid: bd150a3fc0039e971b46e7cb296105cc
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/lecture-videos/lecture-10-open-addressing-cryptographic-hashing/rvdJDijO2Ro.pdf
    title: 3play pdf file
    type: null
    uid: 0224c2fd2a7dc217eda6c172b1d16e01
  - id: Caption-3Play YouTube id-SRT
    parent_uid: bd150a3fc0039e971b46e7cb296105cc
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 9b5a507b8e689a2b1cff922952e2a16f
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: bd150a3fc0039e971b46e7cb296105cc
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 94110602bbab893a2dcb87a36efb7f05
inline_embed_id: '27509256lecture10:openaddressing,cryptographichashing36027134'
order_index: 146
parent_uid: 6af424cb24d70b69cb7c86df8a25a92a
related_resources_text: ''
short_url: lecture-10-open-addressing-cryptographic-hashing
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/lecture-videos/lecture-10-open-addressing-cryptographic-hashing
title: 'Lecture 10: Open Addressing, Cryptographic Hashing'
transcript: >-
  <p><span m='50'>The</span> <span m='180'>following</span> <span
  m='620'>content</span> <span m='1210'>is</span> <span m='1330'>provided</span>
  <span m='1770'>under</span> <span m='2050'>a</span> <span
  m='2090'>Creative</span> <span m='2490'>Commons</span> <span
  m='2900'>license.</span> <span m='4000'>Your</span> <span
  m='4190'>support</span> <span m='4690'>will</span> <span m='4860'>help</span>
  <span m='5100'>MIT</span> <span m='5550'>OpenCourseWare</span> <span
  m='6340'>continue</span> <span m='6850'>to</span> <span m='6930'>offer</span>
  <span m='7350'>high</span> <span m='7580'>quality</span> <span
  m='8100'>educational</span> <span m='8730'>resources</span> <span
  m='9350'>for</span> <span m='9500'>free.</span> <span m='10710'>To</span>
  <span m='10810'>make</span> <span m='10920'>a</span> <span
  m='10960'>donation</span> <span m='11650'>or</span> <span
  m='11920'>view</span> <span m='12360'>additional</span> <span
  m='12780'>materials</span> <span m='13320'>from</span> <span
  m='13460'>hundreds</span> <span m='13900'>of</span> <span m='14010'>MIT</span>
  <span m='14440'>courses,</span> <span m='15540'>visit</span> <span
  m='15770'>MIT</span> <span m='16180'>OpenCourseWare</span> <span
  m='17230'>at</span> <span m='17390'>ocw.mit.edu.</span> </p><p><span
  m='22300'>PROFESSOR: One</span> <span m='22660'>more</span> <span
  m='23530'>exacting</span> <span m='24060'>lecture</span> <span
  m='24960'>on</span> <span m='25150'>hashing.</span> <span m='27160'>And</span>
  <span m='27940'>a</span> <span m='28010'>couple</span> <span
  m='28290'>reminders.</span> <span m='29010'>I</span> <span
  m='29540'>don't</span> <span m='29680'>want</span> <span m='29790'>to</span>
  <span m='30510'>start</span> <span m='31110'>out</span> <span
  m='31660'>saying</span> <span m='31910'>unpopular</span> <span
  m='32530'>things,</span> <span m='32960'>but</span> <span m='33940'>we</span>
  <span m='34100'>do</span> <span m='34340'>have</span> <span m='34470'>a</span>
  <span m='34540'>quiz</span> <span m='35000'>coming</span> <span
  m='35250'>up</span> <span m='35390'>next</span> <span m='35680'>week</span>
  <span m='36120'>on</span> <span m='36510'>Tuesday.</span> <span
  m='37410'>There</span> <span m='37510'>will</span> <span m='37660'>not</span>
  <span m='37930'>be</span> <span m='38060'>a</span> <span
  m='38120'>lecture</span> <span m='39070'>next</span> <span
  m='39350'>Tuesday,</span> <span m='41430'>but</span> <span
  m='41830'>there</span> <span m='41950'>will</span> <span m='42090'>be</span>
  <span m='42220'>a</span> <span m='42290'>quiz.</span> <span
  m='43110'>7:30</span> <span m='43750'>to</span> <span m='43830'>9:30</span>
  <span m='44980'>Tuesday</span> <span m='46920'>evening.</span> <span
  m='47690'>I</span> <span m='47830'>will</span> <span m='47970'>send</span>
  <span m='48200'>announcement.</span> <span m='49140'>There's</span> <span
  m='49390'>going</span> <span m='49520'>to</span> <span m='49560'>be</span>
  <span m='49650'>a</span> <span m='49710'>couple</span> <span
  m='49970'>rooms.</span> <span m='51480'>Some</span> <span m='51690'>of</span>
  <span m='51770'>you</span> <span m='51890'>will</span> <span
  m='51970'>be</span> <span m='52060'>in</span> <span m='52150'>this</span>
  <span m='52370'>room.</span> <span m='52930'>Some</span> <span
  m='53130'>of</span> <span m='53220'>you</span> <span m='53350'>will</span>
  <span m='53440'>have</span> <span m='53570'>to</span> <span
  m='53630'>go</span> <span m='53770'>to</span> <span m='54110'>a</span> <span
  m='54210'>different</span> <span m='54510'>room,</span> <span
  m='54800'>since</span> <span m='55130'>this</span> <span m='55340'>room</span>
  <span m='55540'>really</span> <span m='55820'>can't</span> <span
  m='55990'>hold</span> <span m='56890'>180</span> <span
  m='57430'>students</span> <span m='58080'>taking</span> <span
  m='58360'>a</span> <span m='58420'>quiz.</span> <span m='60070'>All</span>
  <span m='60180'>right?</span> </p><p><span m='61400'>So</span> <span
  m='62320'>hashing.</span> <span m='64370'>I'm</span> <span
  m='64500'>pretty</span> <span m='64670'>excited</span> <span
  m='65019'>about</span> <span m='65160'>this</span> <span
  m='65290'>lecture,</span> <span m='65630'>because</span> <span
  m='66700'>I</span> <span m='66810'>think</span> <span m='67500'>as</span>
  <span m='67650'>I</span> <span m='67680'>was</span> <span
  m='67800'>talking</span> <span m='68090'>with</span> <span
  m='68360'>Victor</span> <span m='69090'>just</span> <span
  m='69280'>before</span> <span m='69580'>this,</span> <span m='70390'>if</span>
  <span m='70530'>there's</span> <span m='70700'>one</span> <span
  m='71000'>thing</span> <span m='71270'>you</span> <span m='71400'>want</span>
  <span m='71540'>to</span> <span m='71580'>remember</span> <span
  m='72660'>about</span> <span m='72880'>hashing</span> <span
  m='74150'>and</span> <span m='74330'>you</span> <span m='74440'>want</span>
  <span m='74820'>to</span> <span m='74900'>go</span> <span
  m='75050'>implement</span> <span m='75490'>a</span> <span
  m='75530'>hash</span> <span m='75880'>table,</span> <span
  m='76700'>it's</span> <span m='76980'>open</span> <span
  m='77320'>addressing.</span> <span m='78410'>It's</span> <span
  m='78650'>the</span> <span m='78770'>simplest</span> <span
  m='79330'>way</span> <span m='79680'>that</span> <span m='79860'>you</span>
  <span m='79980'>can</span> <span m='80110'>possibly</span> <span
  m='80680'>implement</span> <span m='81100'>a</span> <span
  m='81140'>hash</span> <span m='81410'>table.</span> <span m='82720'>You</span>
  <span m='82900'>can</span> <span m='83020'>implement</span> <span
  m='83340'>a</span> <span m='83380'>hash</span> <span m='83650'>table</span>
  <span m='84010'>using</span> <span m='84330'>an</span> <span
  m='84390'>array.</span> <span m='86030'>We've</span> <span
  m='86580'>obviously</span> <span m='87040'>talked</span> <span
  m='87380'>about</span> <span m='88800'>link</span> <span
  m='89160'>lists</span> <span m='90000'>and</span> <span
  m='90230'>chaining</span> <span m='92200'>to</span> <span
  m='92360'>implement</span> <span m='92760'>hash</span> <span
  m='93020'>tables</span> <span m='93820'>in</span> <span
  m='94050'>previous</span> <span m='94380'>lectures,</span> <span
  m='95360'>but</span> <span m='95520'>we're</span> <span m='95630'>going</span>
  <span m='95770'>to</span> <span m='95810'>actually</span> <span
  m='96540'>get</span> <span m='96720'>rid</span> <span m='96850'>of</span>
  <span m='96970'>pointers</span> <span m='97730'>and</span> <span
  m='97920'>link</span> <span m='98190'>lists,</span> <span m='98930'>and</span>
  <span m='99200'>implement</span> <span m='99610'>a</span> <span
  m='99670'>hash</span> <span m='99920'>table</span> <span
  m='100320'>using</span> <span m='100800'>a</span> <span
  m='100890'>single</span> <span m='101270'>array</span> <span
  m='101630'>data</span> <span m='101850'>structure,</span> <span
  m='102890'>and</span> <span m='103090'>that's</span> <span
  m='103280'>the</span> <span m='103370'>notion</span> <span
  m='103660'>of</span> <span m='103830'>open</span> <span
  m='104070'>addressing.</span> </p><p><span m='106830'>Now</span> <span
  m='106970'>in</span> <span m='107120'>order</span> <span m='107290'>to</span>
  <span m='107340'>get</span> <span m='107520'>open</span> <span
  m='107790'>addressing</span> <span m='108180'>to</span> <span
  m='108270'>work,</span> <span m='109360'>there's</span> <span
  m='109550'>no</span> <span m='109690'>free</span> <span
  m='109910'>lunch,</span> <span m='110410'>right?</span> <span
  m='110660'>So</span> <span m='110740'>you</span> <span m='110820'>have</span>
  <span m='110930'>a</span> <span m='110980'>simple</span> <span
  m='111320'>implementation.</span> <span m='112560'>It turns</span> <span
  m='112760'>out</span> <span m='113010'>that</span> <span m='114120'>in</span>
  <span m='114290'>order</span> <span m='114470'>to</span> <span
  m='114540'>make</span> <span m='114910'>open</span> <span
  m='115190'>addressing</span> <span m='115590'>efficient,</span> <span
  m='116240'>you</span> <span m='116350'>have</span> <span m='116450'>to</span>
  <span m='116510'>be</span> <span m='116620'>a</span> <span
  m='116670'>little</span> <span m='116970'>more</span> <span
  m='117170'>careful</span> <span m='118170'>than</span> <span
  m='118510'>if</span> <span m='118600'>you're</span> <span
  m='118800'>using</span> <span m='120240'>the</span> <span
  m='120710'>hash</span> <span m='120950'>tables</span> <span
  m='121300'>with</span> <span m='121500'>chaining.</span> <span
  m='122390'>And</span> <span m='123230'>we're</span> <span m='123520'>going
  to</span> <span m='123670'>have</span> <span m='123800'>to</span> <span
  m='123860'>make</span> <span m='124030'>an</span> <span
  m='124110'>assumption</span> <span m='125070'>about</span> <span
  m='125360'>uniform</span> <span m='125880'>hashing.</span> <span
  m='126820'>I'll</span> <span m='127050'>say a</span> <span
  m='127130'>little</span> <span m='127290'>bit</span> <span
  m='127430'>more</span> <span m='127610'>about</span> <span
  m='127860'>that.</span> <span m='128289'>But</span> <span
  m='128350'>it's</span> <span m='128490'>a</span> <span
  m='128550'>different</span> <span m='129030'>assumption</span> <span
  m='130050'>from</span> <span m='130320'>simple</span> <span
  m='130740'>uniform</span> <span m='131140'>hashing</span> <span
  m='131780'>that</span> <span m='132060'>Eric</span> <span
  m='132320'>talked</span> <span m='132590'>about.</span> <span
  m='133480'>And</span> <span m='133660'>we'll</span> <span
  m='133840'>state</span> <span m='134110'>this</span> <span
  m='134220'>uniform</span> <span m='134630'>hashing</span> <span
  m='134990'>assumption.</span> </p><p><span m='136160'>And</span> <span
  m='137000'>we</span> <span m='137180'>look</span> <span m='137460'>at</span>
  <span m='138910'>what</span> <span m='139110'>the</span> <span
  m='139190'>performance</span> <span m='139710'>is</span> <span
  m='140440'>of</span> <span m='140710'>open</span> <span
  m='140990'>addressing</span> <span m='141530'>under</span> <span
  m='141830'>this</span> <span m='142040'>assumption.</span> <span
  m='143390'>And</span> <span m='144500'>this</span> <span m='144930'>is</span>
  <span m='145090'>assumption</span> <span m='145430'>is</span> <span
  m='145540'>going</span> <span m='145730'>to</span> <span
  m='145850'>give</span> <span m='146180'>us</span> <span m='146330'>a</span>
  <span m='146410'>sense</span> <span m='146970'>of</span> <span
  m='147760'>what</span> <span m='148630'>good</span> <span
  m='148960'>hash</span> <span m='149230'>functions</span> <span
  m='149730'>are</span> <span m='150470'>for</span> <span m='150920'>open</span>
  <span m='151170'>addressing</span> <span m='151650'>applications</span> <span
  m='152460'>or</span> <span m='152620'>for</span> <span m='152760'>open</span>
  <span m='152960'>addressing</span> <span m='153350'>hash</span> <span
  m='153570'>tables.</span> </p><p><span m='154770'>And</span> <span
  m='155110'>finally</span> <span m='156840'>we'll</span> <span
  m='157810'>talk</span> <span m='157990'>about</span> <span
  m='158220'>cryptographic</span> <span m='158780'>hashing.</span> <span
  m='159330'>This</span> <span m='159520'>is</span> <span m='159610'>not</span>
  <span m='159800'>really</span> <span m='160250'>6006</span> <span
  m='161010'>material,</span> <span m='162100'>but</span> <span
  m='162490'>it's</span> <span m='162690'>kind</span> <span m='162850'>of</span>
  <span m='163080'>cool</span> <span m='163300'>material.</span> <span
  m='164290'>It</span> <span m='164920'>has</span> <span m='165130'>a</span>
  <span m='165190'>lot</span> <span m='165420'>of</span> <span
  m='165740'>applications</span> <span m='166480'>in</span> <span
  m='166850'>computer</span> <span m='167230'>security</span> <span
  m='167890'>and</span> <span m='168080'>cryptography.</span> <span
  m='169100'>And</span> <span m='169260'>so</span> <span m='169990'>as</span>
  <span m='170550'>we'll</span> <span m='171350'>describe</span> <span
  m='171820'>the</span> <span m='171890'>notion</span> <span
  m='172360'>of</span> <span m='172530'>a</span> <span
  m='172620'>cryptographic</span> <span m='173190'>hash,</span> <span
  m='173710'>and</span> <span m='173990'>we'll</span> <span
  m='174170'>talk</span> <span m='174400'>about</span> <span m='174890'>a</span>
  <span m='174970'>couple</span> <span m='175240'>of</span> <span
  m='175430'>real</span> <span m='175810'>simple</span> <span
  m='177080'>and</span> <span m='177260'>pervasive</span> <span
  m='177970'>applications</span> <span m='179010'>like</span> <span
  m='179220'>password</span> <span m='179640'>storage</span> <span
  m='180560'>and</span> <span m='181300'>file</span> <span
  m='181920'>corruption</span> <span m='182440'>detectors</span> <span
  m='183400'>that</span> <span m='183600'>you</span> <span m='183760'>can</span>
  <span m='184430'>implement</span> <span m='185240'>using</span> <span
  m='185580'>cryptographic</span> <span m='186220'>hash</span> <span
  m='186450'>functions,</span> <span m='187280'>which</span> <span
  m='187450'>are</span> <span m='187890'>quite</span> <span
  m='188190'>different</span> <span m='188950'>from</span> <span
  m='189280'>the</span> <span m='189400'>regular</span> <span
  m='189740'>hash</span> <span m='189960'>functions</span> <span
  m='190440'>that</span> <span m='190560'>we're</span> <span
  m='190650'>using</span> <span m='191580'>in</span> <span
  m='192030'>hash</span> <span m='192290'>tables.</span> <span
  m='193060'>Be</span> <span m='193330'>it</span> <span
  m='194560'>chaining</span> <span m='195020'>hash</span> <span
  m='195290'>tables</span> <span m='196130'>or</span> <span
  m='196560'>open</span> <span m='196840'>addressing</span> <span
  m='197230'>hash</span> <span m='197470'>tables.</span> <span m='198460'>All
  right?</span> </p><p><span m='199690'>So</span> <span m='200050'>let's</span>
  <span m='200240'>get</span> <span m='200360'>started</span> <span
  m='201840'>and</span> <span m='202210'>talk</span> <span
  m='202370'>about</span> <span m='202560'>open</span> <span
  m='202810'>addressing.</span> <span m='210080'>This</span> <span
  m='210310'>is</span> <span m='210430'>another</span> <span
  m='210780'>approach</span> <span m='211880'>to</span> <span
  m='211990'>dealing</span> <span m='212250'>with</span> <span
  m='212390'>collisions.</span> <span m='214200'>If</span> <span
  m='214320'>you</span> <span m='214390'>didn't</span> <span
  m='214530'>have</span> <span m='214680'>collisions,</span> <span
  m='215220'>obviously</span> <span m='215600'>an</span> <span
  m='215710'>array</span> <span m='215950'>would</span> <span
  m='216130'>work,</span> <span m='217020'>right?</span> <span
  m='217190'>If</span> <span m='217260'>you</span> <span m='217310'>could</span>
  <span m='217430'>somehow</span> <span m='217690'>guarantee</span> <span
  m='218210'>that</span> <span m='218360'>there</span> <span
  m='218450'>were</span> <span m='218510'>no</span> <span
  m='218670'>collisions.</span> <span m='219830'>When you</span> <span
  m='220010'>have</span> <span m='220220'>collisions,</span> <span
  m='220900'>you</span> <span m='221030'>have</span> <span m='221150'>to</span>
  <span m='221230'>worry</span> <span m='221510'>about</span> <span
  m='222030'>the</span> <span m='222160'>chaining</span> <span
  m='222770'>and</span> <span m='223660'>ensuring</span> <span
  m='224450'>that</span> <span m='224660'>you</span> <span m='224770'>can</span>
  <span m='224880'>still</span> <span m='225240'>find</span> <span
  m='225580'>the</span> <span m='225660'>keys</span> <span
  m='226150'>even</span> <span m='226390'>though</span> <span
  m='226590'>you</span> <span m='226690'>had</span> <span m='226910'>two</span>
  <span m='227100'>keys</span> <span m='227420'>that</span> <span
  m='227550'>collided</span> <span m='228380'>into</span> <span
  m='228570'>the</span> <span m='228700'>same</span> <span
  m='228950'>slot.</span> </p><p><span m='230800'>And</span> <span
  m='232990'>we</span> <span m='233130'>don't</span> <span
  m='233260'>want</span> <span m='233350'>to</span> <span m='233390'>use</span>
  <span m='233590'>chaining.</span> <span m='236820'>The</span> <span
  m='236890'>simplest</span> <span m='237250'>data</span> <span
  m='237450'>structure</span> <span m='237830'>that</span> <span
  m='237990'>we</span> <span m='238110'>can</span> <span
  m='238210'>possibly</span> <span m='238640'>use are</span> <span
  m='238900'>arrays.</span> <span m='239910'>Back</span> <span
  m='240160'>when</span> <span m='240260'>I</span> <span m='240280'>was</span>
  <span m='240380'>a</span> <span m='240440'>grad</span> <span
  m='240710'>student,</span> <span m='241810'>I</span> <span
  m='241920'>went</span> <span m='242130'>through</span> <span
  m='242710'>and</span> <span m='242880'>got a</span> <span
  m='243080'>PhD</span> <span m='244430'>writing</span> <span
  m='245250'>programs</span> <span m='245710'>in</span> <span
  m='245840'>C,</span> <span m='246800'>never</span> <span
  m='247230'>using</span> <span m='247640'>any</span> <span
  m='247870'>other</span> <span m='248070'>structure</span> <span
  m='248940'>than</span> <span m='249210'>arrays,</span> <span
  m='250480'>because</span> <span m='250700'>I</span> <span
  m='250760'>didn't</span> <span m='250910'>like</span> <span
  m='251080'>pointers.</span> <span m='252370'>And</span> <span
  m='252550'>so</span> <span m='252730'>open</span> <span
  m='252980'>addressing</span> <span m='253410'>is</span> <span
  m='254920'>a</span> <span m='254980'>way</span> <span m='255250'>that</span>
  <span m='255410'>you</span> <span m='255530'>can</span> <span
  m='255650'>implement</span> <span m='255980'>hash</span> <span
  m='256220'>tables</span> <span m='257130'>doing</span> <span
  m='257360'>exactly</span> <span m='257850'>this.</span> </p><p><span
  m='258810'>And</span> <span m='259019'>in</span> <span
  m='259140'>particular,</span> <span m='261360'>what</span> <span
  m='261529'>we're</span> <span m='261649'>going</span> <span
  m='261790'>to</span> <span m='261880'>do</span> <span m='262300'>is</span>
  <span m='263040'>assume</span> <span m='263640'>an</span> <span
  m='263830'>array</span> <span m='264220'>structure</span> <span
  m='264610'>with</span> <span m='264790'>items.</span> <span
  m='271810'>And</span> <span m='272440'>we're</span> <span
  m='272570'>going</span> <span m='272690'>to</span> <span
  m='272760'>assume</span> <span m='273830'>that</span> <span
  m='274190'>this</span> <span m='274860'>one</span> <span
  m='275390'>item--</span> <span m='276930'>at</span> <span
  m='277080'>most</span> <span m='277390'>one</span> <span
  m='277580'>item</span> <span m='277950'>per</span> <span
  m='278320'>slot.</span> <span m='281580'>So</span> <span m='281950'>m</span>
  <span m='282230'>has</span> <span m='282500'>to</span> <span
  m='282580'>be</span> <span m='282690'>greater</span> <span
  m='282960'>than</span> <span m='283150'>or</span> <span
  m='283290'>equal</span> <span m='283550'>to</span> <span m='283660'>n,</span>
  <span m='284740'>right?</span> <span m='284970'>So</span> <span
  m='285050'>this</span> <span m='285200'>is</span> <span
  m='285280'>important</span> <span m='286360'>because</span> <span
  m='286620'>we</span> <span m='286720'>don't</span> <span
  m='286920'>have</span> <span m='287210'>link</span> <span
  m='287440'>lists.</span> <span m='288240'>We</span> <span
  m='288420'>can't</span> <span m='289260'>arbitrarily</span> <span
  m='290650'>increase</span> <span m='291140'>the</span> <span
  m='291260'>storage</span> <span m='291960'>of a</span> <span
  m='292150'>slot</span> <span m='293060'>using</span> <span m='294330'>a</span>
  <span m='294420'>chain,</span> <span m='295420'>and</span> <span
  m='295770'>have</span> <span m='296860'>n,</span> <span
  m='297660'>which</span> <span m='297830'>is</span> <span m='297920'>the</span>
  <span m='297990'>number</span> <span m='298220'>of</span> <span
  m='298310'>elements,</span> <span m='299060'>be</span> <span
  m='299220'>greater</span> <span m='299570'>than</span> <span
  m='299790'>m,</span> <span m='300910'>right?</span> <span
  m='301040'>Which</span> <span m='301270'>you</span> <span
  m='301400'>could</span> <span m='302470'>in</span> <span m='303375'>the</span>
  <span m='303640'>link</span> <span m='303980'>list</span> <span
  m='304110'>table</span> <span m='304400'>with</span> <span
  m='305160'>chaining.</span> </p><p><span m='306290'>But</span> <span
  m='306400'>here</span> <span m='306740'>you</span> <span
  m='306880'>only</span> <span m='307100'>have</span> <span
  m='307940'>these</span> <span m='308250'>area</span> <span
  m='308530'>locations,</span> <span m='309100'>these</span> <span
  m='309320'>indices</span> <span m='309820'>that</span> <span
  m='309960'>you</span> <span m='310070'>can</span> <span m='310220'>put</span>
  <span m='310370'>items</span> <span m='310700'>into.</span> <span
  m='311510'>So</span> <span m='312630'>it's</span> <span
  m='312790'>pretty</span> <span m='312930'>much</span> <span
  m='313080'>guaranteed</span> <span m='314180'>that</span> <span
  m='314590'>if</span> <span m='314710'>you</span> <span m='314790'>want</span>
  <span m='314950'>a</span> <span m='315000'>working</span> <span
  m='316340'>open</span> <span m='316620'>addressing</span> <span
  m='317040'>hash</span> <span m='317300'>table</span> <span
  m='318170'>that</span> <span m='318440'>m,</span> <span
  m='319740'>which</span> <span m='321140'>is</span> <span m='321280'>the</span>
  <span m='321350'>number</span> <span m='321580'>of</span> <span
  m='321640'>slots</span> <span m='323990'>in</span> <span m='324120'>the</span>
  <span m='324230'>table,</span> <span m='326730'>should</span> <span
  m='326930'>be</span> <span m='327050'>greater</span> <span
  m='327300'>than</span> <span m='327520'>or</span> <span
  m='327610'>equal</span> <span m='327950'>to</span> <span m='328780'>the</span>
  <span m='328870'>number</span> <span m='329080'>of</span> <span
  m='329180'>elements,</span> <span m='330330'>all</span> <span
  m='330410'>right?</span> <span m='331660'>That's</span> <span
  m='331840'>important.</span> </p><p><span m='334580'>Now</span> <span
  m='334820'>how</span> <span m='334940'>does</span> <span
  m='335070'>this</span> <span m='335200'>work.</span> <span
  m='336510'>Well,</span> <span m='337340'>we're</span> <span
  m='337450'>going</span> <span m='337550'>to</span> <span
  m='337590'>have</span> <span m='337950'>this</span> <span
  m='338110'>notion</span> <span m='338500'>of</span> <span
  m='338600'>probing.</span> <span m='344250'>And</span> <span
  m='344580'>the</span> <span m='344650'>notion</span> <span
  m='344920'>of</span> <span m='345030'>probing</span> <span
  m='346620'>is</span> <span m='346960'>that</span> <span
  m='348000'>we're</span> <span m='348160'>going</span> <span
  m='348420'>to</span> <span m='349720'>try</span> <span m='350630'>to</span>
  <span m='350810'>see</span> <span m='351130'>if</span> <span
  m='351250'>we</span> <span m='351370'>can</span> <span
  m='351600'>insert</span> <span m='352200'>something</span> <span
  m='353160'>into</span> <span m='353370'>this</span> <span
  m='353550'>hash</span> <span m='353850'>table,</span> <span
  m='354800'>and</span> <span m='354980'>if</span> <span m='355070'>you</span>
  <span m='355200'>fail</span> <span m='356130'>we're</span> <span
  m='356250'>actually</span> <span m='356530'>going</span> <span
  m='356670'>to</span> <span m='356740'>recompute</span> <span
  m='357390'>a</span> <span m='357450'>slightly</span> <span
  m='357940'>different</span> <span m='358230'>hash</span> <span
  m='359320'>for</span> <span m='359730'>the</span> <span m='359900'>key</span>
  <span m='360420'>that</span> <span m='360580'>we're</span> <span
  m='360690'>trying</span> <span m='360890'>to</span> <span
  m='360930'>insert,</span> <span m='361520'>the</span> <span
  m='361680'>key</span> <span m='361830'>value</span> <span
  m='362160'>pair</span> <span m='362460'>that we're</span> <span
  m='362640'>trying to</span> <span m='362850'>insert.</span> <span
  m='363760'>All</span> <span m='363820'>right?</span> <span
  m='364020'>So</span> <span m='364160'>this</span> <span m='364340'>is</span>
  <span m='364400'>an</span> <span m='364500'>iterative</span> <span
  m='364880'>process,</span> <span m='365750'>and</span> <span
  m='365880'>we're</span> <span m='365960'>going</span> <span
  m='366070'>to</span> <span m='366140'>continually</span> <span
  m='366730'>probe</span> <span m='367630'>until</span> <span
  m='367870'>we</span> <span m='368010'>find</span> <span m='368490'>an</span>
  <span m='368560'>empty</span> <span m='368880'>slot</span> <span
  m='369920'>into which</span> <span m='370420'>we</span> <span
  m='370510'>can</span> <span m='370720'>insert</span> <span
  m='371230'>this</span> <span m='372460'>key value</span> <span
  m='372920'>pair.</span> <span m='373560'>The</span> <span
  m='373930'>key</span> <span m='374320'>should</span> <span
  m='374570'>index</span> <span m='374980'>into</span> <span
  m='375200'>it.</span> </p><p><span m='375750'>So</span> <span
  m='376560'>you</span> <span m='376740'>do</span> <span m='376900'>have</span>
  <span m='377960'>different</span> <span m='378470'>hashes</span> <span
  m='379450'>that</span> <span m='379570'>are</span> <span
  m='379730'>going</span> <span m='379920'>to</span> <span m='379970'>be</span>
  <span m='380100'>computed</span> <span m='381080'>based</span> <span
  m='381430'>on</span> <span m='381590'>this</span> <span
  m='381770'>probing</span> <span m='382190'>notion</span> <span
  m='382850'>for</span> <span m='383170'>a</span> <span m='383200'>given</span>
  <span m='383540'>key.</span> <span m='384480'>All right?</span> <span
  m='387050'>And</span> <span m='388860'>so</span> <span m='389060'>what</span>
  <span m='389180'>we</span> <span m='389290'>need</span> <span
  m='389570'>now</span> <span m='389750'>is</span> <span m='389870'>a</span>
  <span m='389920'>hash</span> <span m='390260'>function</span> <span
  m='391390'>that's</span> <span m='391830'>different</span> <span
  m='392300'>from</span> <span m='393790'>the</span> <span
  m='394240'>standard</span> <span m='394590'>hash</span> <span
  m='394830'>functions</span> <span m='395370'>that</span> <span
  m='396140'>we've</span> <span m='396260'>talked</span> <span
  m='396490'>about</span> <span m='396740'>so</span> <span
  m='396910'>far,</span> <span m='398000'>which</span> <span
  m='400160'>specifies</span> <span m='402470'>the</span> <span
  m='402600'>order</span> <span m='404026'>of</span> <span
  m='404400'>slots</span> <span m='408329'>to</span> <span
  m='408800'>probe,</span> <span m='409640'>which</span> <span
  m='409770'>is</span> <span m='409860'>basically</span> <span
  m='411210'>to</span> <span m='411330'>try</span> <span m='411710'>for</span>
  <span m='411910'>a</span> <span m='411950'>key.</span> <span
  m='418570'>And</span> <span m='418950'>this</span> <span m='419120'>is</span>
  <span m='419220'>going</span> <span m='419340'>to</span> <span
  m='419380'>be</span> <span m='419490'>true</span> <span m='419790'>for</span>
  <span m='420180'>insert,</span> <span m='422060'>search,</span> <span
  m='424390'>and</span> <span m='424570'>delete,</span> <span
  m='426080'>which</span> <span m='426330'>are</span> <span
  m='426840'>three</span> <span m='427030'>basic</span> <span
  m='427360'>operations.</span> </p><p><span m='428190'>And</span> <span
  m='428390'>they're</span> <span m='428800'>a</span> <span
  m='428820'>little</span> <span m='429080'>bit</span> <span
  m='429220'>different,</span> <span m='430140'>all</span> <span
  m='430250'>right?</span> <span m='430820'>Just</span> <span
  m='431010'>like</span> <span m='431220'>they</span> <span
  m='431420'>were</span> <span m='431510'>different</span> <span
  m='431940'>for</span> <span m='433270'>the</span> <span
  m='433460'>chaining</span> <span m='433870'>hash</span> <span
  m='434130'>table,</span> <span m='434940'>they're</span> <span
  m='435090'>different</span> <span m='435420'>here,</span> <span
  m='435670'>but</span> <span m='435780'>they're</span> <span
  m='435880'>kind</span> <span m='435990'>of</span> <span m='436040'>more</span>
  <span m='436310'>different</span> <span m='436640'>here.</span> <span
  m='437190'>And</span> <span m='437450'>you'll</span> <span
  m='437860'>see</span> <span m='438030'>what</span> <span m='438150'>I</span>
  <span m='438190'>mean</span> <span m='438770'>when</span> <span
  m='438890'>we</span> <span m='438980'>go</span> <span
  m='439120'>through</span> <span m='439300'>this.</span> <span
  m='442660'>And</span> <span m='443830'>this</span> <span m='444020'>is</span>
  <span m='444070'>not</span> <span m='444390'>just</span> <span m='444620'>for
  one</span> <span m='444880'>slot.</span> <span m='445270'>It's</span> <span
  m='445410'>going</span> <span m='445540'>to</span> <span
  m='445600'>specify</span> <span m='446130'>an</span> <span
  m='446240'>order</span> <span m='446580'>of</span> <span
  m='446660'>slots.</span> </p><p><span m='448190'>And</span> <span
  m='448480'>so</span> <span m='448760'>our</span> <span m='448920'>hash</span>
  <span m='449160'>function</span> <span m='450310'>h</span> <span
  m='451560'>is</span> <span m='451930'>going</span> <span m='452180'>to</span>
  <span m='452260'>take</span> <span m='452560'>the</span> <span
  m='453720'>universe</span> <span m='454330'>of</span> <span
  m='454450'>keys</span> <span m='464050'>and</span> <span
  m='465520'>also</span> <span m='465930'>take</span> <span
  m='469890'>what</span> <span m='470070'>we're</span> <span
  m='470150'>going</span> <span m='470260'>to</span> <span
  m='470330'>call</span> <span m='471320'>the</span> <span
  m='471470'>trial</span> <span m='472010'>count.</span> <span
  m='473120'>So</span> <span m='473580'>if</span> <span m='473670'>you're</span>
  <span m='473750'>lucky--</span> <span m='475870'>well,</span> <span
  m='476070'>you</span> <span m='476140'>get</span> <span
  m='476250'>lucky</span> <span m='476490'>in</span> <span
  m='476560'>your</span> <span m='476660'>first</span> <span
  m='476940'>trial.</span> <span m='477660'>And</span> <span
  m='478630'>if</span> <span m='478740'>you're</span> <span
  m='478830'>not,</span> <span m='479320'>you</span> <span
  m='479460'>hope</span> <span m='479630'>to</span> <span m='479690'>get</span>
  <span m='479820'>lucky in</span> <span m='480130'>your</span> <span
  m='480260'>second</span> <span m='480590'>trial,</span> <span
  m='481320'>and</span> <span m='481510'>so</span> <span m='481650'>on</span>
  <span m='481770'>and</span> <span m='481860'>so</span> <span
  m='482010'>forth.</span> </p><p><span m='482710'>But</span> <span
  m='482750'>the</span> <span m='482810'>hash</span> <span
  m='483040'>function</span> <span m='484760'>is</span> <span
  m='484940'>going</span> <span m='485080'>to</span> <span
  m='485160'>take</span> <span m='485780'>two</span> <span
  m='485970'>arguments.</span> <span m='488090'>It's</span> <span
  m='488310'>going</span> <span m='488450'>to</span> <span
  m='488530'>take</span> <span m='489810'>the</span> <span m='490310'>key</span>
  <span m='490550'>as</span> <span m='490680'>an</span> <span
  m='490760'>argument,</span> <span m='492580'>and</span> <span
  m='492830'>it's</span> <span m='492940'>going</span> <span
  m='493060'>to</span> <span m='493130'>take</span> <span m='494120'>a</span>
  <span m='494280'>trial,</span> <span m='495410'>which</span> <span
  m='495560'>is</span> <span m='495700'>an</span> <span
  m='495920'>integer</span> <span m='496560'>between</span> <span
  m='496850'>0</span> <span m='497110'>to</span> <span m='497210'>n</span> <span
  m='497340'>minus</span> <span m='497610'>1,</span> <span m='498095'>all</span>
  <span m='498580'>right?</span> <span m='499440'>And</span> <span
  m='499790'>it's</span> <span m='499910'>going</span> <span
  m='500050'>to</span> <span m='500110'>produce--</span> <span
  m='500680'>just</span> <span m='500920'>like</span> <span
  m='502030'>the</span> <span m='502140'>chaining</span> <span
  m='502520'>hash</span> <span m='502760'>function</span> <span
  m='503960'>it's</span> <span m='504110'>going</span> <span
  m='504220'>to</span> <span m='504400'>produce</span> <span m='504580'>a</span>
  <span m='504630'>number</span> <span m='506450'>between</span> <span
  m='507160'>0</span> <span m='508690'>and</span> <span m='510420'>m</span>
  <span m='510590'>minus</span> <span m='510920'>1,</span> <span
  m='511250'>right?</span> <span m='511660'>Where</span> <span
  m='512010'>m</span> <span m='512210'>is</span> <span m='512299'>the</span>
  <span m='512360'>number</span> <span m='512539'>of</span> <span
  m='512590'>slots</span> <span m='512909'>in</span> <span m='512970'>the</span>
  <span m='513049'>table.</span> <span m='514030'>All</span> <span
  m='514090'>right.</span> <span m='515919'>So</span> <span
  m='516179'>that's</span> <span m='516429'>the</span> <span
  m='516520'>story.</span> </p><p><span m='519150'>In</span> <span
  m='519330'>order</span> <span m='519669'>to</span> <span
  m='521650'>ensure</span> <span m='522280'>that</span> <span
  m='523720'>you</span> <span m='524280'>are</span> <span
  m='524440'>using</span> <span m='526210'>the</span> <span
  m='527760'>hash</span> <span m='528050'>table</span> <span
  m='528360'>corresponding</span> <span m='528920'>to</span> <span
  m='529200'>open</span> <span m='529470'>addressing</span> <span
  m='530030'>properly,</span> <span m='531820'>what</span> <span
  m='533410'>you</span> <span m='533530'>want</span> <span
  m='534770'>is--</span> <span m='536580'>and</span> <span
  m='536700'>this</span> <span m='536830'>is</span> <span m='536970'>an</span>
  <span m='537060'>important</span> <span m='537440'>property--</span> <span
  m='538440'>that</span> <span m='538800'>h</span> <span m='539233'>k</span>
  <span m='540100'>1,</span> <span m='541680'>so</span> <span
  m='541790'>that's</span> <span m='542020'>a</span> <span m='542060'>key</span>
  <span m='542370'>that</span> <span m='542510'>you're</span> <span
  m='542630'>given.</span> <span m='543640'>And</span> <span
  m='544560'>this</span> <span m='544770'>could</span> <span
  m='544880'>be</span> <span m='544990'>an</span> <span
  m='545090'>arbitrary</span> <span m='545680'>key,</span> <span
  m='545950'>mind</span> <span m='546240'>you.</span> <span m='548360'>So</span>
  <span m='553690'>arbitrary</span> <span m='554570'>key</span> <span
  m='555330'>k.</span> <span m='557770'>And</span> <span m='558200'>what</span>
  <span m='558360'>you</span> <span m='558450'>have</span> <span
  m='559250'>in</span> <span m='559410'>terms</span> <span m='559670'>of</span>
  <span m='559760'>the</span> <span m='559830'>slots</span> <span
  m='560320'>that</span> <span m='560430'>are</span> <span
  m='560490'>being</span> <span m='560700'>computed</span> <span
  m='562200'>is</span> <span m='562430'>this,</span> <span m='565790'>h k</span>
  <span m='566210'>1,</span> <span m='566650'>h</span> <span m='566905'>k</span>
  <span m='567160'>2,</span> <span m='567880'>and</span> <span
  m='568140'>so</span> <span m='568280'>on</span> <span m='568470'>and so</span>
  <span m='568660'>forth</span> <span m='569550'>to</span> <span m='569870'>h
  k</span> <span m='570310'>n</span> <span m='570500'>minus</span> <span
  m='570780'>1.</span> </p><p><span m='573520'>And</span> <span
  m='573890'>what</span> <span m='574080'>you</span> <span
  m='574150'>want</span> <span m='574560'>is</span> <span m='575420'>for</span>
  <span m='575620'>this</span> <span m='579130'>vector</span> <span
  m='580990'>to</span> <span m='581100'>be</span> <span m='581310'>a</span>
  <span m='581470'>permutation</span> <span m='589160'>of</span> <span
  m='589630'>0</span> <span m='590070'>1</span> <span m='591900'>and</span>
  <span m='592060'>so</span> <span m='592220'>on</span> <span m='592400'>to
  n</span> <span m='592580'>minus</span> <span m='592860'>1.</span> <span
  m='594510'>And</span> <span m='595040'>the</span> <span
  m='595170'>reason</span> <span m='595400'>for</span> <span
  m='595480'>this</span> <span m='595960'>hopefully</span> <span
  m='596280'>is</span> <span m='596430'>clear.</span> <span
  m='597320'>It's</span> <span m='597540'>because</span> <span
  m='600080'>you</span> <span m='600220'>want</span> <span m='600410'>to</span>
  <span m='600460'>be</span> <span m='600630'>able</span> <span
  m='600960'>to</span> <span m='601050'>use</span> <span m='601900'>the</span>
  <span m='602200'>entirety</span> <span m='602890'>of</span> <span
  m='603000'>your</span> <span m='603240'>hash</span> <span
  m='603530'>table.</span> <span m='604660'>You</span> <span
  m='604850'>don't</span> <span m='605040'>want</span> <span
  m='605460'>particular</span> <span m='605940'>slots</span> <span
  m='606400'>to</span> <span m='606500'>go</span> <span
  m='606670'>unused.</span> </p><p><span m='607810'>And</span> <span
  m='608830'>when</span> <span m='608990'>you</span> <span m='609090'>get</span>
  <span m='609260'>to</span> <span m='609320'>the</span> <span
  m='609410'>point</span> <span m='609760'>where</span> <span
  m='612020'>the</span> <span m='612170'>number</span> <span
  m='612390'>of</span> <span m='612490'>elements</span> <span
  m='612970'>n</span> <span m='613920'>is</span> <span m='614130'>pretty</span>
  <span m='614410'>close</span> <span m='614830'>to</span> <span
  m='615010'>m,</span> <span m='616336'>and</span> <span m='616780'>maybe</span>
  <span m='617070'>there's</span> <span m='617270'>just</span> <span
  m='617440'>one</span> <span m='617830'>slot</span> <span
  m='618270'>left,</span> <span m='619360'>OK?</span> <span
  m='620030'>And</span> <span m='620220'>you</span> <span m='620330'>want</span>
  <span m='620490'>to</span> <span m='620550'>fill</span> <span
  m='620900'>up</span> <span m='621070'>this</span> <span m='621300'>last</span>
  <span m='621720'>slot</span> <span m='622780'>with</span> <span
  m='623950'>this</span> <span m='624350'>key</span> <span m='624690'>k</span>
  <span m='625280'>that</span> <span m='625460'>you</span> <span
  m='625590'>want</span> <span m='625730'>to</span> <span m='625780'>put</span>
  <span m='625940'>in</span> <span m='626060'>there,</span> <span
  m='626880'>and</span> <span m='627550'>what</span> <span m='627740'>you</span>
  <span m='627820'>want</span> <span m='628020'>to</span> <span
  m='628180'>be</span> <span m='628300'>able</span> <span m='628420'>to</span>
  <span m='628490'>say</span> <span m='628690'>is</span> <span
  m='628820'>that</span> <span m='628980'>for</span> <span
  m='629110'>this</span> <span m='629350'>arbitrary</span> <span
  m='629910'>key</span> <span m='630190'>k</span> <span m='630460'>that</span>
  <span m='630620'>you</span> <span m='630710'>want</span> <span
  m='630830'>to</span> <span m='630890'>put</span> <span m='631520'>in</span>
  <span m='631680'>there</span> <span m='632440'>that</span> <span
  m='633050'>the</span> <span m='633170'>one</span> <span m='633390'>slot</span>
  <span m='633770'>that's</span> <span m='633970'>free--</span> <span
  m='634260'>and</span> <span m='634350'>it</span> <span m='634450'>could</span>
  <span m='634590'>be</span> <span m='634790'>that</span> <span
  m='635100'>first</span> <span m='635390'>slot.</span> <span m='635730'>It
  could</span> <span m='635830'>be</span> <span m='635950'>the</span> <span
  m='636570'>17th</span> <span m='637000'>slot.</span> <span
  m='637400'>Whatever--</span> <span m='638150'>That</span> <span
  m='638340'>eventually</span> <span m='638850'>the</span> <span
  m='638980'>sequence</span> <span m='639370'>of</span> <span
  m='639490'>probes</span> <span m='640340'>is</span> <span
  m='640500'>going</span> <span m='640630'>to</span> <span m='640680'>be</span>
  <span m='640860'>able</span> <span m='641030'>to</span> <span
  m='641090'>allow</span> <span m='641370'>you</span> <span m='641990'>to</span>
  <span m='642090'>insert</span> <span m='642530'>into</span> <span
  m='642680'>that</span> <span m='642960'>slot.</span> <span
  m='643920'>All</span> <span m='644000'>right?</span> </p><p><span
  m='645230'>And</span> <span m='645470'>we</span> <span
  m='645550'>generalize</span> <span m='646130'>this</span> <span
  m='646310'>notion</span> <span m='647020'>into</span> <span
  m='647450'>the</span> <span m='647750'>uniform</span> <span
  m='648210'>hashing</span> <span m='648590'>assumption</span> <span
  m='649560'>in</span> <span m='650110'>a</span> <span m='650160'>few</span>
  <span m='650330'>minutes,</span> <span m='651180'>but</span> <span
  m='651460'>hopefully</span> <span m='651830'>this</span> <span
  m='652000'>makes</span> <span m='652210'>sense</span> <span
  m='652840'>from</span> <span m='653020'>a</span> <span
  m='653070'>standpoint</span> <span m='653650'>of</span> <span
  m='655220'>really</span> <span m='655500'>load</span> <span
  m='655820'>balancing</span> <span m='656340'>the</span> <span
  m='656440'>table</span> <span m='657150'>and</span> <span
  m='657310'>ensuring</span> <span m='657830'>that</span> <span
  m='658570'>all</span> <span m='658920'>slots</span> <span m='659340'>in</span>
  <span m='659420'>the</span> <span m='659520'>table</span> <span
  m='660590'>are</span> <span m='660720'>sort of</span> <span
  m='660900'>equal</span> <span m='661190'>opportunity</span> <span
  m='661690'>slots.</span> <span m='662600'>That</span> <span
  m='663590'>you're</span> <span m='664200'>going</span> <span
  m='664340'>to</span> <span m='664380'>be</span> <span m='664500'>able</span>
  <span m='664640'>to</span> <span m='664720'>put</span> <span
  m='665200'>keys</span> <span m='665500'>in</span> <span m='665650'>them</span>
  <span m='666180'>as</span> <span m='666440'>long</span> <span
  m='666870'>as</span> <span m='668060'>you</span> <span m='668270'>probe</span>
  <span m='668740'>long</span> <span m='669060'>enough</span> <span
  m='669950'>that</span> <span m='670150'>you're</span> <span
  m='670250'>going</span> <span m='670340'>to</span> <span m='670380'>be</span>
  <span m='670460'>able</span> <span m='670600'>to</span> <span
  m='670650'>get</span> <span m='670870'>there.</span> </p><p><span
  m='671670'>Now</span> <span m='671750'>of</span> <span
  m='671830'>course</span> <span m='672320'>the</span> <span
  m='672640'>fact</span> <span m='673140'>that</span> <span
  m='673960'>you're</span> <span m='674150'>using</span> <span
  m='674490'>one</span> <span m='674650'>particular</span> <span
  m='675010'>slot</span> <span m='675360'>for</span> <span m='675490'>one</span>
  <span m='675650'>particular</span> <span m='676010'>key</span> <span
  m='676650'>depends</span> <span m='677030'>on</span> <span
  m='677310'>the</span> <span m='677430'>order</span> <span m='677810'>of</span>
  <span m='677940'>keys</span> <span m='678340'>that you're</span> <span
  m='678580'>inserting</span> <span m='679100'>into</span> <span
  m='679240'>this</span> <span m='679450'>table.</span> <span
  m='680300'>Again,</span> <span m='680590'>you'll</span> <span
  m='680740'>see</span> <span m='680910'>that</span> <span m='681440'>as</span>
  <span m='681620'>we</span> <span m='681710'>go</span> <span
  m='681840'>through</span> <span m='681970'>an</span> <span
  m='682050'>example,</span> <span m='682865'>all</span> <span
  m='683280'>right?</span> </p><p><span m='684140'>So</span> <span
  m='684310'>that's</span> <span m='684490'>the</span> <span
  m='684590'>set</span> <span m='684810'>up.</span> <span
  m='685260'>That's</span> <span m='685490'>the</span> <span
  m='685580'>open</span> <span m='685840'>addressing</span> <span
  m='686960'>notion.</span> <span m='687800'>And</span> <span
  m='688290'>that</span> <span m='688830'>as</span> <span m='689040'>you</span>
  <span m='689140'>can</span> <span m='689230'>see,</span> <span
  m='690200'>we're</span> <span m='690410'>just</span> <span
  m='690670'>going</span> <span m='690920'>to</span> <span m='691820'>go</span>
  <span m='692090'>through</span> <span m='692730'>a</span> <span
  m='692820'>sequence</span> <span m='693220'>of</span> <span
  m='693310'>probes</span> <span m='694080'>and</span> <span
  m='694230'>our</span> <span m='694320'>hash</span> <span
  m='694580'>function</span> <span m='695450'>is</span> <span
  m='695620'>going</span> <span m='695790'>to</span> <span
  m='695870'>tell</span> <span m='696060'>us</span> <span m='696200'>what</span>
  <span m='696390'>the</span> <span m='696500'>sequences</span> <span
  m='696885'>is,</span> <span m='697480'>and</span> <span m='697610'>so</span>
  <span m='697700'>we</span> <span m='697800'>don't</span> <span
  m='697920'>need</span> <span m='698090'>any</span> <span
  m='698320'>pointers</span> <span m='698950'>or</span> <span
  m='699020'>anything</span> <span m='699250'>like</span> <span
  m='699440'>that.</span> </p><p><span m='701350'>So</span> <span
  m='701510'>let's</span> <span m='701690'>take</span> <span m='701850'>a</span>
  <span m='701890'>look</span> <span m='702130'>at</span> <span
  m='704600'>how</span> <span m='704810'>this</span> <span
  m='704960'>might</span> <span m='705150'>work</span> <span
  m='707130'>in</span> <span m='707970'>practice.</span> <span
  m='710340'>So</span> <span m='712100'>maybe</span> <span m='712320'>the</span>
  <span m='712420'>easiest</span> <span m='712690'>thing</span> <span
  m='712840'>to</span> <span m='712940'>do</span> <span m='713170'>is</span>
  <span m='713820'>to</span> <span m='713930'>run</span> <span
  m='714120'>through</span> <span m='714310'>an</span> <span
  m='714590'>example,</span> <span m='715890'>and</span> <span
  m='716390'>then</span> <span m='716500'>I'll show you</span> <span
  m='716630'>some</span> <span m='716770'>pseudocode.</span> <span
  m='717870'>But</span> <span m='718050'>let's</span> <span
  m='718240'>say</span> <span m='718410'>that</span> <span m='718670'>I</span>
  <span m='718750'>have</span> <span m='720400'>a</span> <span
  m='720490'>table</span> <span m='720870'>here,</span> <span
  m='721800'>and</span> <span m='722220'>I'm</span> <span
  m='722370'>going</span> <span m='722470'>to</span> <span
  m='722530'>concentrate</span> <span m='723210'>on</span> <span
  m='723580'>the</span> <span m='724120'>insert</span> <span
  m='724570'>operation.</span> <span m='727060'>And</span> <span
  m='727290'>I'm</span> <span m='727360'>going</span> <span m='727470'>to</span>
  <span m='727520'>start</span> <span m='728260'>inserting</span> <span
  m='728860'>things</span> <span m='729200'>into</span> <span
  m='730100'>this</span> <span m='730230'>table.</span> <span
  m='737130'>And</span> <span m='737330'>right</span> <span
  m='737520'>here</span> <span m='737820'>I</span> <span m='737850'>have</span>
  <span m='738280'>seven</span> <span m='738540'>slots</span> <span
  m='738920'>up</span> <span m='739070'>there.</span> </p><p><span
  m='739690'>So</span> <span m='740030'>let's</span> <span m='740220'>say</span>
  <span m='740390'>that</span> <span m='743690'>I</span> <span
  m='743810'>want</span> <span m='743940'>to</span> <span
  m='743980'>insert</span> <span m='744680'>586</span> <span
  m='745730'>into</span> <span m='745920'>the</span> <span
  m='746050'>table,</span> <span m='747840'>and</span> <span m='748050'>I</span>
  <span m='748110'>compute</span> <span m='749120'>h</span> <span
  m='749530'>of</span> <span m='749680'>586</span> <span m='751290'>comma</span>
  <span m='751580'>1,</span> <span m='752770'>and</span> <span
  m='753290'>that</span> <span m='753460'>gives</span> <span
  m='753670'>me</span> <span m='753820'>1.</span> <span m='755020'>OK?</span>
  <span m='755760'>This</span> <span m='755870'>is</span> <span
  m='755940'>the</span> <span m='756020'>first</span> <span
  m='756310'>insert.</span> <span m='757220'>So</span> <span
  m='757400'>I'm</span> <span m='757520'>going</span> <span m='757650'>to</span>
  <span m='757700'>go</span> <span m='757860'>ahead</span> <span
  m='758670'>and</span> <span m='758850'>stick</span> <span
  m='759110'>586</span> <span m='759830'>in</span> <span m='759960'>here,</span>
  <span m='761480'>all</span> <span m='761560'>right?</span> <span
  m='762650'>And</span> <span m='762800'>then</span> <span m='763050'>I</span>
  <span m='763310'>insert,</span> <span m='763870'>for</span> <span
  m='764050'>argument's</span> <span m='764320'>sake,</span> <span
  m='765770'>133.</span> <span m='767730'>I</span> <span
  m='767920'>insert</span> <span m='768760'>204</span> <span
  m='769570'>out</span> <span m='769690'>here.</span> <span
  m='770600'>And</span> <span m='770860'>these</span> <span
  m='771030'>are</span> <span m='771140'>all</span> <span
  m='771400'>things</span> <span m='771630'>because</span> <span
  m='771850'>the</span> <span m='771910'>hash</span> <span
  m='772170'>table</span> <span m='772490'>is</span> <span
  m='772630'>empty.</span> <span m='774490'>481</span> <span
  m='775240'>out</span> <span m='775460'>here</span> <span m='776740'>and</span>
  <span m='776950'>so</span> <span m='777120'>on.</span> <span
  m='777900'>And</span> <span m='778030'>because</span> <span
  m='778230'>the</span> <span m='778290'>hash</span> <span
  m='778490'>table</span> <span m='778720'>is</span> <span
  m='778830'>empty,</span> <span m='779800'>my</span> <span
  m='780000'>very</span> <span m='780290'>first</span> <span
  m='781240'>trial</span> <span m='781850'>is</span> <span
  m='781990'>successful,</span> <span m='783300'>all</span> <span
  m='783370'>right?</span> </p><p><span m='783800'>So</span> <span
  m='784640'>h</span> <span m='786420'>of</span> <span m='787090'>481--</span>
  <span m='788070'>I'm</span> <span m='788150'>not</span> <span
  m='788270'>going</span> <span m='788370'>to</span> <span
  m='788410'>write</span> <span m='788590'>this</span> <span
  m='788720'>all</span> <span m='788950'>out, but</span> <span
  m='789370'>h</span> <span m='789630'>481</span> <span m='790300'>1</span>
  <span m='791190'>happens</span> <span m='791610'>to</span> <span
  m='791710'>be</span> <span m='792090'>6</span> <span m='793890'>and</span>
  <span m='794270'>so</span> <span m='794460'>on.</span> <span
  m='795280'>All</span> <span m='795380'>right?</span> <span
  m='795820'>Now</span> <span m='796110'>I</span> <span m='796200'>get</span>
  <span m='796390'>to</span> <span m='796450'>the</span> <span
  m='796540'>point</span> <span m='796910'>where</span> <span
  m='798060'>I</span> <span m='798190'>want</span> <span m='798350'>to</span>
  <span m='798400'>insert</span> <span m='799580'>496.</span> <span
  m='804910'>And</span> <span m='805280'>when</span> <span m='805410'>I</span>
  <span m='805710'>try</span> <span m='805900'>to</span> <span
  m='805960'>insert</span> <span m='807170'>496,</span> <span
  m='809020'>I</span> <span m='809190'>have</span> <span m='814690'>h</span>
  <span m='816060'>496</span> <span m='818750'>1.</span> <span
  m='820700'>It</span> <span m='820740'>happens</span> <span
  m='821120'>to</span> <span m='821220'>be</span> <span m='822150'>4.</span>
  <span m='823490'>OK?</span> </p><p><span m='824450'>So</span> <span
  m='825710'>the</span> <span m='825800'>first</span> <span
  m='826010'>thing</span> <span m='826140'>that</span> <span
  m='826240'>happens</span> <span m='826570'>is</span> <span m='826900'>I</span>
  <span m='826990'>go</span> <span m='827150'>in</span> <span
  m='827270'>here,</span> <span m='828230'>and</span> <span m='828410'>I</span>
  <span m='828480'>say</span> <span m='828890'>oops.</span> <span
  m='830070'>This</span> <span m='831420'>slot</span> <span m='831950'>is</span>
  <span m='832110'>occupied,</span> <span m='833350'>because</span> <span
  m='833720'>this--</span> <span m='834860'>I'm</span> <span
  m='834990'>going</span> <span m='835090'>to</span> <span
  m='835130'>have</span> <span m='836060'>a</span> <span
  m='836170'>special</span> <span m='836610'>flag</span> <span
  m='837210'>associated</span> <span m='837710'>with</span> <span
  m='837940'>an</span> <span m='838840'>empty</span> <span
  m='839240'>slot,</span> <span m='840470'>and</span> <span m='840650'>we</span>
  <span m='841150'>can</span> <span m='841630'>say</span> <span
  m='842630'>it's</span> <span m='842890'>none.</span> <span
  m='843830'>And</span> <span m='844250'>if it's</span> <span
  m='844510'>not</span> <span m='844750'>none,</span> <span
  m='845110'>then</span> <span m='845290'>it's</span> <span
  m='845420'>occupied.</span> <span m='846020'>And</span> <span
  m='846150'>204</span> <span m='846680'>is</span> <span m='846780'>not</span>
  <span m='846950'>equal</span> <span m='847190'>to</span> <span
  m='847290'>none.</span> <span m='848080'>So</span> <span m='848940'>I</span>
  <span m='849460'>look</span> <span m='849640'>at</span> <span
  m='849710'>this,</span> <span m='849930'>and</span> <span m='850030'>I</span>
  <span m='850100'>say</span> <span m='850420'>the</span> <span
  m='851590'>first</span> <span m='851890'>probe</span> <span
  m='852640'>actually</span> <span m='853060'>failed.</span> <span
  m='854510'>OK?</span> <span m='855160'>And</span> <span m='855400'>so</span>
  <span m='855870'>h</span> <span m='856100'>496</span> <span
  m='856630'>1</span> <span m='856920'>equals</span> <span m='857200'>4</span>
  <span m='859030'>fails,</span> <span m='860050'>so</span> <span
  m='860250'>I</span> <span m='860380'>need</span> <span m='860600'>to</span>
  <span m='860680'>go</span> <span m='862160'>do</span> <span
  m='866090'>h</span> <span m='866750'>496</span> <span m='868620'>2.</span>
  </p><p><span m='870150'>And</span> <span m='870480'>h</span> <span
  m='870740'>496</span> <span m='871380'>2</span> <span m='872610'>may</span>
  <span m='873600'>also</span> <span m='873990'>fail.</span> <span
  m='876180'>You</span> <span m='876420'>might</span> <span m='876740'>be</span>
  <span m='876810'>in</span> <span m='876890'>a</span> <span
  m='876940'>situation</span> <span m='877540'>where</span> <span
  m='879550'>h</span> <span m='880080'>496</span> <span m='880720'>2</span>
  <span m='882390'>gives</span> <span m='882730'>you</span> <span
  m='884980'>586.</span> <span m='885910'>So</span> <span m='886070'>this</span>
  <span m='886270'>was</span> <span m='887210'>h</span> <span
  m='887740'>496</span> <span m='889171'>1</span> <span m='890602'>h</span>
  <span m='891079'>496</span> <span m='891556'>2</span> <span
  m='894190'>might</span> <span m='894450'>give</span> <span
  m='894620'>you</span> <span m='895450'>586.</span> <span m='896850'>And</span>
  <span m='897150'>finally</span> <span m='897850'>it</span> <span
  m='898000'>may</span> <span m='898180'>be</span> <span m='898470'>that</span>
  <span m='899430'>h</span> <span m='899720'>496</span> <span
  m='901510'>3,</span> <span m='901920'>which</span> <span m='902040'>is</span>
  <span m='902120'>your</span> <span m='902290'>third</span> <span
  m='902560'>attempt,</span> <span m='903650'>equals</span> <span
  m='904140'>3.</span> <span m='905130'>So</span> <span m='905420'>you</span>
  <span m='905570'>go</span> <span m='905770'>in,</span> <span
  m='906430'>and</span> <span m='906570'>you</span> <span m='906660'>say</span>
  <span m='906960'>great.</span> <span m='907560'>I</span> <span
  m='907660'>can</span> <span m='907800'>insert</span> <span
  m='909230'>496.</span> <span m='910210'>And</span> <span m='910470'>let
  me</span> <span m='910680'>write</span> <span m='910750'>that</span> <span
  m='910930'>in</span> <span m='911020'>bold</span> <span
  m='911410'>here.</span> <span m='914830'>Out</span> <span
  m='914950'>there.</span> <span m='916190'>All</span> <span
  m='916260'>right?</span> <span m='916780'>So</span> <span
  m='916940'>pretty</span> <span m='917140'>straightforward.</span> </p><p><span
  m='918750'>In</span> <span m='918960'>this</span> <span
  m='919160'>case,</span> <span m='920420'>you've</span> <span
  m='920720'>gone</span> <span m='920970'>through</span> <span
  m='922020'>three</span> <span m='922270'>trials</span> <span
  m='923310'>in</span> <span m='923470'>order</span> <span m='923620'>to</span>
  <span m='923710'>find</span> <span m='924150'>an</span> <span
  m='924230'>empty</span> <span m='924510'>slot.</span> <span
  m='925490'>And</span> <span m='925670'>so</span> <span m='925870'>the</span>
  <span m='925960'>big</span> <span m='926120'>question</span> <span
  m='926490'>really</span> <span m='926730'>here</span> <span
  m='927020'>is</span> <span m='928560'>other</span> <span
  m='928750'>than</span> <span m='929650'>taking</span> <span
  m='929900'>care</span> <span m='930170'>of</span> <span m='930690'>search
  and</span> <span m='931130'>delete,</span> <span m='932080'>how</span> <span
  m='932210'>long</span> <span m='932470'>is</span> <span m='932580'>this</span>
  <span m='932750'>process</span> <span m='933110'>going</span> <span
  m='933220'>to</span> <span m='933300'>take?</span> <span m='934060'>All</span>
  <span m='934130'>right?</span> <span m='934990'>And</span> <span
  m='935400'>I'm</span> <span m='935550'>talking</span> <span
  m='935840'>about</span> <span m='935990'>that</span> <span
  m='936630'>in</span> <span m='936800'>a</span> <span m='936850'>few</span>
  <span m='937010'>minutes,</span> <span m='937800'>but</span> <span
  m='938320'>let</span> <span m='938500'>me</span> <span
  m='939840'>explain,</span> <span m='940800'>now</span> <span
  m='941030'>that</span> <span m='941200'>you've</span> <span
  m='941350'>seen</span> <span m='941650'>insert,</span> <span
  m='942890'>how</span> <span m='944100'>search</span> <span
  m='944470'>would</span> <span m='944650'>work,</span> <span
  m='945600'>right?</span> <span m='945820'>Or</span> <span
  m='945890'>maybe</span> <span m='946090'>I</span> <span m='946130'>get</span>
  <span m='946430'>one</span> <span m='946560'>of</span> <span
  m='946610'>you</span> <span m='946730'>guys</span> <span m='946970'>to</span>
  <span m='948010'>explain</span> <span m='948410'>to</span> <span
  m='948520'>me</span> <span m='950510'>once</span> <span m='950900'>you</span>
  <span m='951010'>have</span> <span m='951270'>insert,</span> <span
  m='952530'>how</span> <span m='953310'>would</span> <span
  m='953490'>search</span> <span m='953800'>work?</span> <span
  m='955360'>Someone?</span> <span m='958550'>Someone</span> <span
  m='958850'>from</span> <span m='959000'>the</span> <span
  m='959460'>back?</span> <span m='963290'>No</span> <span
  m='963330'>one.</span> <span m='964800'>You</span> <span
  m='964880'>guys</span> <span m='965070'>are</span> <span
  m='965140'>always</span> <span m='965370'>answering</span> <span
  m='965680'>questions.</span> <span m='968450'>Yeah,</span> <span
  m='968900'>all</span> <span m='969050'>the</span> <span m='969100'>way</span>
  <span m='969190'>in the</span> <span m='969290'>back.</span> </p><p><span
  m='969800'>AUDIENCE: Would</span> <span m='970280'>you just</span> <span
  m='970760'>do the</span> <span m='971240'>same</span> <span m='971720'>kind
  of</span> <span m='972200'>probing</span> <span m='972680'>[INAUDIBLE]</span>
  <span m='975080'>where</span> <span m='975560'>you find</span> <span
  m='976040'>it or</span> <span m='976520'>you</span> <span m='977000'>don't
  find</span> <span m='977480'>it?</span> </p><p><span m='978440'>PROFESSOR:
  Right.</span> <span m='978730'>So</span> <span m='978880'>you do</span> <span
  m='979140'>exactly.</span> <span m='979560'>It's</span> <span
  m='979660'>very</span> <span m='979930'>similar</span> <span
  m='980350'>to</span> <span m='980430'>insert.</span> <span
  m='983810'>You</span> <span m='983940'>have</span> <span m='984120'>a</span>
  <span m='984170'>situation</span> <span m='984710'>where</span> <span
  m='986130'>you're</span> <span m='986380'>going</span> <span
  m='986670'>to</span> <span m='987730'>none</span> <span
  m='989160'>would</span> <span m='989360'>indicate</span> <span
  m='989920'>an</span> <span m='990080'>empty</span> <span
  m='991790'>slot.</span> <span m='993840'>And</span> <span
  m='994230'>you</span> <span m='994410'>can think</span> <span
  m='994550'>of</span> <span m='994610'>this</span> <span m='994770'>as</span>
  <span m='994900'>being</span> <span m='995080'>a</span> <span
  m='995230'>flag.</span> <span m='997660'>And</span> <span m='998150'>in
  the</span> <span m='998410'>case of</span> <span m='998670'>insert,</span>
  <span m='1000130'>what</span> <span m='1000340'>you</span> <span
  m='1000440'>did</span> <span m='1000720'>was</span> <span
  m='1002220'>you--</span> <span m='1005450'>insert</span> <span
  m='1005940'>k</span> <span m='1006150'>v</span> <span m='1010220'>would</span>
  <span m='1010450'>say</span> <span m='1011180'>keep</span> <span
  m='1011500'>probing.</span> <span m='1013120'>I'm</span> <span m='1013150'>not
  going to</span> <span m='1013290'>write</span> <span m='1013460'>the</span>
  <span m='1013540'>pseudocode</span> <span m='1014000'>for</span> <span
  m='1014170'>it.</span> <span m='1016020'>Keep</span> <span
  m='1016300'>probing</span> <span m='1018420'>until</span> <span
  m='1019940'>an</span> <span m='1020190'>empty</span> <span
  m='1022710'>slot</span> <span m='1023270'>is</span> <span
  m='1023490'>found.</span> <span m='1026630'>And</span> <span
  m='1026800'>then</span> <span m='1026990'>when</span> <span
  m='1027130'>it's</span> <span m='1027270'>found,</span> <span
  m='1027680'>insert</span> <span m='1028079'>item.</span> </p><p><span
  m='1036560'>And</span> <span m='1036869'>as</span> <span
  m='1037030'>long</span> <span m='1037200'>as</span> <span
  m='1037290'>you</span> <span m='1037359'>have</span> <span
  m='1037560'>the</span> <span m='1037660'>permutation</span> <span
  m='1039410'>property</span> <span m='1039930'>that</span> <span
  m='1040089'>we</span> <span m='1040190'>have</span> <span
  m='1040400'>up</span> <span m='1040560'>there,</span> <span
  m='1041369'>and</span> <span m='1042010'>given</span> <span
  m='1042310'>that</span> <span m='1042490'>m</span> <span m='1042730'>is</span>
  <span m='1042849'>greater</span> <span m='1043050'>than</span> <span
  m='1043150'>or</span> <span m='1043250'>equal</span> <span
  m='1043500'>to</span> <span m='1043599'>n,</span> <span
  m='1044430'>you're</span> <span m='1044569'>guaranteed</span> <span
  m='1045180'>that</span> <span m='1045349'>insert</span> <span
  m='1046260'>is</span> <span m='1046430'>going</span> <span
  m='1046609'>to</span> <span m='1046680'>find</span> <span m='1047010'>a</span>
  <span m='1047060'>slot.</span> <span m='1048119'>OK?</span> <span
  m='1048560'>That's</span> <span m='1048780'>the</span> <span
  m='1048870'>good</span> <span m='1049020'>news.</span> <span m='1049870'>Now
  it</span> <span m='1050080'>might</span> <span m='1050250'>take</span> <span
  m='1050400'>awhile,</span> <span m='1051030'>and</span> <span
  m='1051240'>so</span> <span m='1051340'>we</span> <span
  m='1051420'>have</span> <span m='1051530'>a</span> <span
  m='1051590'>talk</span> <span m='1051770'>about</span> <span
  m='1051950'>performance</span> <span m='1053590'>a</span> <span
  m='1053680'>bit</span> <span m='1053820'>later,</span> <span
  m='1054590'>but</span> <span m='1054900'>it'll</span> <span
  m='1055110'>work.</span> <span m='1055970'>OK?</span> </p><p><span
  m='1056800'>Now</span> <span m='1056950'>search</span> <span
  m='1058290'>is</span> <span m='1058460'>a</span> <span
  m='1058510'>little</span> <span m='1058650'>bit</span> <span
  m='1058790'>different.</span> <span m='1062490'>You're</span> <span
  m='1062630'>searching</span> <span m='1063070'>for</span> <span
  m='1064660'>a</span> <span m='1064740'>key</span> <span m='1065070'>k,</span>
  <span m='1067940'>and</span> <span m='1069890'>you</span> <span
  m='1070340'>essentially</span> <span m='1070730'>say</span> <span
  m='1071000'>you're going to</span> <span m='1071170'>keep</span> <span
  m='1071430'>probing.</span> <span m='1072080'>And you</span> <span
  m='1072550'>say</span> <span m='1072710'>as</span> <span
  m='1072940'>long</span> <span m='1073380'>as</span> <span
  m='1073590'>the</span> <span m='1073800'>slots</span> <span
  m='1078130'>encountered</span> <span m='1084290'>are</span> <span
  m='1088920'>occupied</span> <span m='1089680'>by</span> <span
  m='1091290'>keys</span> <span m='1092500'>not</span> <span
  m='1092770'>equal</span> <span m='1093040'>to k.</span> <span
  m='1094160'>So</span> <span m='1094370'>every</span> <span
  m='1094610'>time</span> <span m='1094830'>you</span> <span
  m='1094960'>probe,</span> <span m='1095860'>you</span> <span
  m='1095970'>go</span> <span m='1096120'>in</span> <span
  m='1096220'>there</span> <span m='1096440'>and</span> <span
  m='1096590'>you</span> <span m='1096680'>say</span> <span m='1097400'>I</span>
  <span m='1097500'>got</span> <span m='1097640'>a</span> <span
  m='1097700'>key.</span> <span m='1098440'>I</span> <span
  m='1098880'>found</span> <span m='1099070'>a</span> <span
  m='1099120'>hash</span> <span m='1099420'>for</span> <span
  m='1099675'>it.</span> <span m='1100830'>I</span> <span m='1100930'>go</span>
  <span m='1101100'>to</span> <span m='1101210'>this</span> <span
  m='1101420'>particular</span> <span m='1101770'>slot.</span> <span
  m='1102500'>I</span> <span m='1102600'>look</span> <span
  m='1102780'>inside</span> <span m='1103200'>of</span> <span
  m='1103330'>it,</span> <span m='1103910'>and</span> <span m='1104060'>I</span>
  <span m='1104680'>check</span> <span m='1104930'>to</span> <span
  m='1105030'>see</span> <span m='1105270'>whether</span> <span
  m='1105480'>the</span> <span m='1106090'>key</span> <span
  m='1106340'>that's</span> <span m='1106550'>stored</span> <span
  m='1106810'>inside</span> <span m='1107180'>of</span> <span
  m='1107300'>it</span> <span m='1108000'>is</span> <span m='1108210'>the</span>
  <span m='1108330'>same</span> <span m='1108720'>as</span> <span
  m='1109440'>the</span> <span m='1109700'>key</span> <span
  m='1109930'>I'm</span> <span m='1110020'>searching</span> <span
  m='1110370'>for.</span> <span m='1111170'>If</span> <span
  m='1111360'>not,</span> <span m='1112650'>I</span> <span m='1113360'>go</span>
  <span m='1113530'>to</span> <span m='1113600'>the</span> <span
  m='1113700'>next</span> <span m='1113960'>trial.</span> <span
  m='1114990'>If</span> <span m='1115110'>it</span> <span m='1115190'>is,</span>
  <span m='1115630'>then</span> <span m='1115810'>I</span> <span
  m='1115880'>return</span> <span m='1116240'>it.</span> <span
  m='1117280'>Right?</span> <span m='1117630'>So</span> <span
  m='1117740'>that's</span> <span m='1118390'>pretty</span> <span
  m='1118610'>much</span> <span m='1118820'>it.</span> </p><p><span
  m='1121440'>And</span> <span m='1121980'>we</span> <span
  m='1122130'>keep</span> <span m='1122360'>probing</span> <span
  m='1130690'>until</span> <span m='1135630'>you</span> <span
  m='1135810'>either</span> <span m='1136180'>encounter</span> <span
  m='1136760'>k</span> <span m='1140060'>or</span> <span m='1140340'>find</span>
  <span m='1140690'>an</span> <span m='1140760'>empty</span> <span
  m='1141030'>slot.</span> <span m='1144930'>And</span> <span
  m='1145140'>this</span> <span m='1145270'>is</span> <span
  m='1145370'>the</span> <span m='1145470'>key.</span> <span
  m='1148730'>No</span> <span m='1148890'>pun</span> <span
  m='1149080'>intended.</span> <span m='1152230'>A</span> <span
  m='1152400'>notion</span> <span m='1152960'>which</span> <span
  m='1153160'>is</span> <span m='1153300'>that</span> <span
  m='1153530'>when</span> <span m='1154420'>you</span> <span
  m='1154500'>find</span> <span m='1154910'>an</span> <span
  m='1154980'>empty</span> <span m='1155260'>slot,</span> <span
  m='1156680'>it</span> <span m='1156870'>means</span> <span
  m='1157270'>that</span> <span m='1158520'>you</span> <span
  m='1159200'>have</span> <span m='1159530'>failed</span> <span
  m='1159860'>to</span> <span m='1159950'>discover</span> <span
  m='1160390'>this</span> <span m='1160620'>key.</span> <span
  m='1161840'>You</span> <span m='1161990'>fail</span> <span
  m='1162270'>to--</span> <span m='1162430'>yeah,</span> <span
  m='1162640'>question</span> <span m='1162950'>back</span> <span
  m='1163110'>there?</span> </p><p><span m='1164272'>AUDIENCE: What</span> <span
  m='1164733'>happens</span> <span m='1165194'>if you</span> <span
  m='1165655'>were to</span> <span m='1166116'>delete</span> <span m='1166577'>a
  key</span> <span m='1167038'>though?</span> </p><p><span
  m='1167499'>PROFESSOR: I'll</span> <span m='1167960'>make you</span> <span
  m='1168430'>answer that</span> <span m='1168580'>question</span> <span
  m='1169000'>for a</span> <span m='1169180'>cushion.</span> <span
  m='1172200'>So</span> <span m='1172380'>we'll</span> <span
  m='1172900'>get</span> <span m='1173090'>to</span> <span
  m='1173150'>delete</span> <span m='1173740'>in</span> <span
  m='1174070'>a</span> <span m='1174120'>minute.</span> <span
  m='1174950'>But</span> <span m='1175090'>I</span> <span
  m='1175120'>want</span> <span m='1175250'>to</span> <span
  m='1175290'>make</span> <span m='1175420'>sure</span> <span
  m='1175860'>you're</span> <span m='1176070'>all</span> <span
  m='1176160'>on</span> <span m='1176310'>board</span> <span
  m='1176660'>with</span> <span m='1177390'>insert</span> <span
  m='1177560'>and</span> <span m='1178030'>search.</span> <span
  m='1179170'>OK?</span> <span m='1179920'>So</span> <span
  m='1180620'>these</span> <span m='1180860'>are</span> <span
  m='1180910'>actually</span> <span m='1181170'>fairly</span> <span
  m='1181460'>straightforward</span> <span m='1182720'>in</span> <span
  m='1182890'>comparison</span> <span m='1183340'>to</span> <span
  m='1183440'>delete.</span> <span m='1183780'>It's</span> <span
  m='1183890'>not</span> <span m='1184020'>like</span> <span
  m='1184170'>delete</span> <span m='1184460'>is</span> <span
  m='1184570'>much</span> <span m='1184820'>more</span> <span
  m='1184980'>complicated,</span> <span m='1185850'>but</span> <span
  m='1186070'>there</span> <span m='1186210'>is</span> <span
  m='1186470'>a</span> <span m='1186730'>subtlety</span> <span
  m='1187190'>there.</span> </p><p><span m='1189040'>And</span> <span
  m='1189220'>so</span> <span m='1189310'>that's</span> <span
  m='1189500'>kind</span> <span m='1189600'>of</span> <span
  m='1189650'>neat,</span> <span m='1190020'>right?</span> <span
  m='1190270'>I</span> <span m='1190300'>mean</span> <span
  m='1190420'>this</span> <span m='1190820'>actually</span> <span
  m='1191070'>works.</span> <span m='1192630'>So</span> <span
  m='1193150'>if</span> <span m='1193310'>you</span> <span
  m='1194140'>had</span> <span m='1194390'>a</span> <span
  m='1194440'>situation</span> <span m='1195090'>where</span> <span
  m='1196290'>you</span> <span m='1197310'>were</span> <span
  m='1197450'>just</span> <span m='1197980'>accumulating</span> <span
  m='1198700'>keys,</span> <span m='1199900'>and</span> <span
  m='1200290'>you're</span> <span m='1200420'>looking</span> <span
  m='1200680'>for</span> <span m='1200780'>the</span> <span
  m='1200890'>number</span> <span m='1201160'>of</span> <span
  m='1201260'>distinct</span> <span m='1202030'>elements</span> <span
  m='1202920'>in</span> <span m='1203030'>the</span> <span
  m='1203150'>stream</span> <span m='1203630'>of</span> <span
  m='1203740'>data</span> <span m='1203990'>that</span> <span
  m='1204110'>was</span> <span m='1204260'>coming</span> <span
  m='1204560'>in,</span> <span m='1205360'>and</span> <span
  m='1205930'>that</span> <span m='1206040'>was</span> <span
  m='1206140'>pretty</span> <span m='1206290'>much</span> <span
  m='1206470'>it</span> <span m='1206770'>with</span> <span
  m='1206920'>respect</span> <span m='1207200'>to your</span> <span
  m='1207340'>program,</span> <span m='1208090'>you'd</span> <span
  m='1208410'>never have</span> <span m='1208560'>to</span> <span
  m='1208630'>delete</span> <span m='1208990'>keys,</span> <span
  m='1209620'>and</span> <span m='1209960'>this</span> <span
  m='1210290'>would</span> <span m='1210700'>be</span> <span
  m='1211035'>all</span> <span m='1211940'>that</span> <span
  m='1212050'>you'd</span> <span m='1212160'>have</span> <span
  m='1212340'>to</span> <span m='1212420'>implement.</span> <span
  m='1213410'>Right?</span> </p><p><span m='1214280'>But</span> <span
  m='1215400'>let's</span> <span m='1215600'>talk</span> <span
  m='1215730'>about</span> <span m='1215950'>delete.</span> <span
  m='1217690'>Every</span> <span m='1217970'>once</span> <span
  m='1218170'>in</span> <span m='1218230'>awhile</span> <span
  m='1218580'>we'd</span> <span m='1218760'>want</span> <span
  m='1218930'>to</span> <span m='1219020'>delete</span> <span
  m='1219280'>a</span> <span m='1219390'>key?</span> <span
  m='1219870'>Yeah,</span> <span m='1219990'>you</span> <span
  m='1220100'>had</span> <span m='1220190'>a</span> <span
  m='1220220'>question?</span> </p><p><span m='1220570'>AUDIENCE: I</span> <span
  m='1221048'>have a question</span> <span m='1221526'>about search.</span>
  <span m='1222004'>Why</span> <span m='1222482'>do you</span> <span
  m='1222960'>stop searching</span> <span m='1223438'>once</span> <span
  m='1223916'>you find</span> <span m='1224394'>an empty</span> <span
  m='1224872'>slot?</span> </p><p><span m='1225350'>PROFESSOR: Because</span>
  <span m='1226040'>you're</span> <span m='1226170'>searching.</span> <span
  m='1227070'>So</span> <span m='1228510'>what</span> <span
  m='1228670'>that</span> <span m='1228800'>means</span> <span
  m='1229090'>is</span> <span m='1229230'>that</span> <span
  m='1229790'>you're</span> <span m='1230010'>looking</span> <span
  m='1230570'>to</span> <span m='1230680'>see</span> <span m='1231070'>if</span>
  <span m='1231190'>this</span> <span m='1231410'>key</span> <span
  m='1231670'>were</span> <span m='1232030'>already</span> <span
  m='1232710'>in</span> <span m='1232930'>the</span> <span
  m='1233060'>table.</span> <span m='1234120'>And</span> <span
  m='1235190'>if</span> <span m='1235310'>key</span> <span
  m='1235530'>were</span> <span m='1235720'>already</span> <span
  m='1236140'>in</span> <span m='1236240'>the</span> <span
  m='1236360'>table,</span> <span m='1237150'>you</span> <span
  m='1237280'>want</span> <span m='1237410'>to</span> <span
  m='1237450'>return</span> <span m='1237770'>the</span> <span
  m='1237860'>value</span> <span m='1238350'>associated</span> <span
  m='1238830'>with</span> <span m='1238950'>that</span> <span
  m='1239150'>key.</span> <span m='1239870'>If</span> <span
  m='1239990'>you</span> <span m='1240100'>find</span> <span
  m='1240570'>an</span> <span m='1240640'>empty</span> <span
  m='1240930'>slot,</span> <span m='1241800'>since</span> <span
  m='1242080'>you're</span> <span m='1242260'>using</span> <span
  m='1242620'>the</span> <span m='1242720'>same</span> <span
  m='1245830'>deterministic</span> <span m='1246530'>sequence</span> <span
  m='1246870'>of</span> <span m='1246980'>probes</span> <span
  m='1247540'>that</span> <span m='1247700'>you</span> <span
  m='1247830'>would</span> <span m='1248000'>have</span> <span
  m='1248620'>if</span> <span m='1248790'>you</span> <span
  m='1248950'>had</span> <span m='1249150'>inserted</span> <span
  m='1249620'>it,</span> <span m='1250220'>then--</span> <span
  m='1251300'>that</span> <span m='1251430'>make</span> <span
  m='1251550'>sense?</span> <span m='1252210'>Good.</span> <span
  m='1253320'>All</span> <span m='1253430'>right.</span> <span
  m='1254080'>So</span> <span m='1255290'>so</span> <span m='1255450'>far</span>
  <span m='1255600'>so</span> <span m='1255720'>good?</span> <span
  m='1256500'>That's</span> <span m='1256700'>what</span> <span
  m='1256810'>works</span> <span m='1257240'>for</span> <span
  m='1258510'>insert</span> <span m='1258950'>and</span> <span
  m='1259390'>search.</span> </p><p><span m='1260550'>Let's</span> <span
  m='1260960'>talk</span> <span m='1261120'>delete.</span> <span
  m='1261530'>So</span> <span m='1261970'>back</span> <span
  m='1262180'>there.</span> <span m='1264216'>How</span> <span
  m='1264700'>does</span> <span m='1264720'>delete</span> <span
  m='1264890'>work?</span> </p><p><span m='1269070'>AUDIENCE: Well</span> <span
  m='1270934'>[INAUDIBLE]</span> <span m='1271930'>if you</span> <span
  m='1272428'>search</span> <span m='1272926'>until</span> <span
  m='1273424'>you</span> <span m='1273922'>find</span> <span
  m='1274420'>the</span> <span m='1274918'>none</span> <span
  m='1275416'>and</span> <span m='1275914'>assume</span> <span m='1276412'>that
  the</span> <span m='1276910'>key</span> <span m='1277408'>you're</span> <span
  m='1277906'>searching</span> <span m='1278404'>for was</span> <span
  m='1278902'>not put</span> <span m='1279400'>in there.</span> <span
  m='1280396'>But</span> <span m='1280894'>let's</span> <span
  m='1281392'>say</span> <span m='1281890'>you had</span> <span
  m='1282388'>one</span> <span m='1282886'>that was</span> <span m='1283384'>in
  that</span> <span m='1283882'>slot</span> <span m='1284380'>before</span>
  <span m='1285210'>and</span> <span m='1285520'>it got</span> <span
  m='1285965'>put back in,</span> <span m='1286410'>but then</span> <span
  m='1286855'>you delete</span> <span m='1287300'>the one that</span> <span
  m='1287745'>was in the slot before.</span> </p><p><span m='1288190'>PROFESSOR:
  Great,</span> <span m='1288560'>great.</span> <span m='1289750'>You</span>
  <span m='1289950'>haven't</span> <span m='1290260'>told me</span> <span
  m='1290430'>how</span> <span m='1290580'>to</span> <span
  m='1290660'>fix</span> <span m='1290890'>it</span> <span
  m='1291000'>yet,</span> <span m='1291330'>but</span> <span
  m='1293340'>do</span> <span m='1293630'>you have</span> <span
  m='1293790'>the</span> <span m='1294180'>guts</span> <span m='1294566'>for
  this?</span> <span m='1295340'>No.</span> <span m='1297040'>OK,</span> <span
  m='1297680'>I</span> <span m='1297830'>think</span> <span
  m='1297990'>this</span> <span m='1298500'>veers</span> <span m='1298580'>to
  the</span> <span m='1298680'>right.</span> <span m='1299460'>I</span> <span
  m='1299730'>always</span> <span m='1299810'>wanted</span> <span
  m='1300000'>to</span> <span m='1300110'>do</span> <span
  m='1300260'>this</span> <span m='1300460'>to</span> <span
  m='1300560'>somebody</span> <span m='1300850'>in</span> <span
  m='1300930'>the</span> <span m='1301020'>back.</span> <span
  m='1301906'>All</span> <span m='1302372'>right.</span> <span
  m='1304236'>Whoa.</span> <span m='1305170'>All</span> <span
  m='1305370'>right,</span> <span m='1305730'>good</span> <span
  m='1305900'>catch.</span> <span m='1308580'>All</span> <span
  m='1308800'>right.</span> <span m='1309230'>OK.</span> <span
  m='1309820'>So</span> <span m='1309920'>you</span> <span
  m='1310040'>pointed</span> <span m='1310350'>out</span> <span
  m='1310460'>the</span> <span m='1310560'>problem,</span> <span
  m='1311560'>and</span> <span m='1311730'>I'm</span> <span
  m='1311830'>going</span> <span m='1311950'>to</span> <span
  m='1311990'>ask</span> <span m='1312160'>somebody</span> <span
  m='1312440'>else for</span> <span m='1312630'>a</span> <span
  m='1313020'>solution.</span> <span m='1313800'>All</span> <span
  m='1313880'>right?</span> </p><p><span m='1315800'>But</span> <span
  m='1316000'>here's</span> <span m='1316180'>the</span> <span
  m='1316260'>problem.</span> <span m='1317570'>Here's</span> <span
  m='1317820'>the</span> <span m='1317880'>problem,</span> <span
  m='1318240'>and</span> <span m='1318660'>we</span> <span
  m='1318830'>can</span> <span m='1318910'>look</span> <span
  m='1319100'>at</span> <span m='1319190'>it</span> <span
  m='1319870'>from</span> <span m='1320030'>a</span> <span
  m='1320080'>standpoint</span> <span m='1320720'>of</span> <span
  m='1321050'>that</span> <span m='1322290'>example</span> <span
  m='1322740'>right</span> <span m='1323040'>there.</span> <span
  m='1324560'>Let's</span> <span m='1324780'>say</span> <span
  m='1324940'>for</span> <span m='1325110'>argument's</span> <span
  m='1325600'>sake</span> <span m='1327300'>that</span> <span
  m='1327470'>I'm</span> <span m='1327620'>searching--</span> <span
  m='1328370'>now</span> <span m='1328700'>I've</span> <span
  m='1329110'>done</span> <span m='1329390'>all</span> <span
  m='1329620'>of</span> <span m='1329720'>the</span> <span
  m='1329800'>inserts</span> <span m='1330330'>that</span> <span
  m='1330470'>I</span> <span m='1330530'>have</span> <span m='1330720'>up</span>
  <span m='1330880'>there,</span> <span m='1331590'>OK?</span> <span
  m='1331840'>So</span> <span m='1332080'>I've</span> <span
  m='1332520'>inserted</span> <span m='1332670'>496.</span> <span
  m='1334200'>All</span> <span m='1334270'>right?</span> <span
  m='1334860'>Then</span> <span m='1336120'>I</span> <span
  m='1336290'>delete</span> <span m='1337910'>586</span> <span
  m='1339900'>from</span> <span m='1340390'>the</span> <span
  m='1340490'>table,</span> <span m='1341400'>OK?</span> <span
  m='1341840'>I</span> <span m='1341960'>delete</span> <span
  m='1342320'>586</span> <span m='1343150'>from</span> <span
  m='1343330'>the</span> <span m='1343430'>table.</span> <span
  m='1344500'>So</span> <span m='1344910'>let's</span> <span
  m='1345120'>just</span> <span m='1345290'>say</span> <span
  m='1345540'>that</span> <span m='1349560'>what</span> <span
  m='1349740'>I</span> <span m='1349830'>end</span> <span m='1349970'>up</span>
  <span m='1350080'>doing--</span> <span m='1352920'>I</span> <span
  m='1353060'>have</span> <span m='1353230'>586,</span> <span
  m='1354724'>133,</span> <span m='1356716'>496,</span> <span
  m='1358630'>and</span> <span m='1358770'>then</span> <span
  m='1358910'>I</span> <span m='1358940'>have</span> <span
  m='1359170'>204,</span> <span m='1360840'>and</span> <span
  m='1361090'>then</span> <span m='1361230'>a</span> <span
  m='1361290'>481.</span> <span m='1362780'>And</span> <span
  m='1363120'>this</span> <span m='1363450'>is</span> <span
  m='1363730'>0,</span> <span m='1364120'>1,</span> <span m='1364630'>2,</span>
  <span m='1366770'>et</span> <span m='1366890'>cetera.</span> </p><p><span
  m='1367770'>So</span> <span m='1367850'>I'm</span> <span
  m='1368120'>deleting</span> <span m='1368670'>586,</span> <span
  m='1369450'>and</span> <span m='1369550'>let's</span> <span
  m='1369730'>say</span> <span m='1369900'>I</span> <span
  m='1369940'>replace</span> <span m='1370410'>it</span> <span
  m='1370580'>with</span> <span m='1370760'>none.</span> <span
  m='1372270'>OK?</span> <span m='1373300'>Let's</span> <span m='1373460'>just
  say</span> <span m='1373620'>I</span> <span m='1373770'>replace</span> <span
  m='1374100'>it</span> <span m='1374220'>with</span> <span
  m='1374370'>none.</span> <span m='1375130'>Now</span> <span
  m='1375840'>what</span> <span m='1376020'>happens</span> <span
  m='1376380'>is</span> <span m='1376600'>that</span> <span
  m='1377250'>when</span> <span m='1377380'>I</span> <span
  m='1377470'>search</span> <span m='1379250'>for</span> <span
  m='1380400'>496,</span> <span m='1383270'>according</span> <span
  m='1383670'>to</span> <span m='1383910'>this</span> <span
  m='1384470'>search</span> <span m='1384980'>algorithm</span> <span
  m='1388640'>what</span> <span m='1388790'>am</span> <span m='1388860'>I</span>
  <span m='1388920'>going</span> <span m='1389060'>to</span> <span
  m='1389100'>get?</span> </p><p><span m='1389940'>AUDIENCE: None.</span>
  </p><p><span m='1392040'>PROFESSOR: Well</span> <span m='1393070'>the</span>
  <span m='1393170'>first</span> <span m='1393690'>slot</span> <span
  m='1394070'>I'm</span> <span m='1394160'>going</span> <span
  m='1394270'>to</span> <span m='1394320'>look</span> <span
  m='1394490'>at</span> <span m='1394650'>is</span> <span m='1394770'>1,</span>
  <span m='1395690'>and</span> <span m='1396210'>according</span> <span
  m='1396500'>to</span> <span m='1396560'>this</span> <span
  m='1396700'>search</span> <span m='1397010'>algorithm,</span> <span
  m='1398340'>I</span> <span m='1398470'>find</span> <span m='1398830'>an</span>
  <span m='1398930'>empty</span> <span m='1399320'>slot,</span> <span
  m='1400320'>right?</span> <span m='1401030'>And</span> <span
  m='1401230'>when</span> <span m='1401330'>I</span> <span
  m='1401400'>find</span> <span m='1401690'>an</span> <span
  m='1401770'>empty</span> <span m='1402080'>slot,</span> <span
  m='1403130'>I'm</span> <span m='1403270'>going</span> <span
  m='1403400'>to</span> <span m='1403470'>say</span> <span m='1404170'>I</span>
  <span m='1404300'>failed</span> <span m='1404800'>in</span> <span
  m='1404890'>the</span> <span m='1404980'>search.</span> <span
  m='1406700'>If</span> <span m='1406830'>you</span> <span
  m='1406940'>encounter</span> <span m='1407480'>k,</span> <span
  m='1408430'>you</span> <span m='1408570'>succeed</span> <span
  m='1411780'>and</span> <span m='1411960'>return</span> <span
  m='1412360'>the</span> <span m='1412460'>key</span> <span
  m='1412630'>value</span> <span m='1412970'>pair,</span> <span
  m='1414120'>right?</span> <span m='1414320'>Success</span> <span
  m='1414690'>means</span> <span m='1414970'>you</span> <span
  m='1415090'>return</span> <span m='1415380'>the</span> <span
  m='1415460'>value.</span> <span m='1416510'>And</span> <span
  m='1416800'>if</span> <span m='1416880'>you</span> <span
  m='1417180'>encounter</span> <span m='1417680'>an</span> <span
  m='1417740'>empty</span> <span m='1418080'>slot,</span> <span
  m='1418790'>it</span> <span m='1418920'>means</span> <span
  m='1419250'>that</span> <span m='1419430'>you've</span> <span
  m='1419590'>decided</span> <span m='1420620'>that</span> <span
  m='1420880'>this</span> <span m='1421100'>key</span> <span
  m='1421310'>is</span> <span m='1421420'>not</span> <span m='1421690'>in</span>
  <span m='1421790'>the</span> <span m='1421900'>table.</span> <span
  m='1423630'>And</span> <span m='1424100'>you</span> <span
  m='1424230'>say</span> <span m='1424690'>couldn't</span> <span
  m='1424870'>find</span> <span m='1425140'>it,</span> <span
  m='1425860'>right?</span> <span m='1426510'>That</span> <span
  m='1426660'>make</span> <span m='1426780'>sense?</span> </p><p><span
  m='1427980'>So</span> <span m='1428380'>this</span> <span
  m='1428620'>is</span> <span m='1428720'>obviously</span> <span
  m='1429030'>wrong,</span> <span m='1429790'>right?</span> <span
  m='1429970'>Because</span> <span m='1430160'>I</span> <span
  m='1430210'>just</span> <span m='1430420'>inserted</span> <span
  m='1430930'>496</span> <span m='1432090'>into</span> <span
  m='1432880'>the</span> <span m='1433010'>table.</span> <span
  m='1434200'>So</span> <span m='1434290'>this</span> <span
  m='1434760'>would</span> <span m='1435010'>fail</span> <span
  m='1436130'>incorrectly.</span> <span m='1440560'>So</span> <span
  m='1440770'>failed</span> <span m='1441220'>to</span> <span
  m='1441360'>find</span> <span m='1441690'>the</span> <span
  m='1441780'>key,</span> <span m='1442260'>which</span> <span
  m='1442410'>is</span> <span m='1442520'>OK.</span> <span m='1442990'>I</span>
  <span m='1443030'>mean</span> <span m='1443160'>failure is</span> <span
  m='1443550'>OK</span> <span m='1443910'>if</span> <span m='1444090'>the</span>
  <span m='1444330'>key isn't</span> <span m='1444440'>there.</span> <span
  m='1445200'>But</span> <span m='1445510'>you don't</span> <span
  m='1445630'>want</span> <span m='1445740'>to</span> <span
  m='1445780'>fail</span> <span m='1446070'>incorrectly.</span> <span
  m='1447200'>Right?</span> <span m='1447650'>Everyone</span> <span
  m='1447980'>buy</span> <span m='1448130'>that?</span> <span
  m='1449590'>Everyone</span> <span m='1449870'>buy</span> <span
  m='1450010'>that?</span> <span m='1450650'>Good.</span> </p><p><span
  m='1451510'>All</span> <span m='1451630'>right.</span> <span
  m='1452000'>So</span> <span m='1452590'>how</span> <span m='1452960'>do
  I</span> <span m='1453220'>fix</span> <span m='1453480'>it.</span> <span
  m='1454170'>Someone</span> <span m='1454480'>else?</span> <span
  m='1455460'>How do</span> <span m='1455610'>I fix</span> <span
  m='1456040'>this?</span> <span m='1456960'>Someone</span> <span
  m='1457180'>who</span> <span m='1457300'>doesn't</span> <span
  m='1457600'>have</span> <span m='1457700'>a</span> <span
  m='1457740'>cushion.</span> <span m='1458563'>All</span> <span
  m='1459036'>right,</span> <span m='1459510'>you.</span> </p><p><span
  m='1460686'>AUDIENCE: [INAUDIBLE]</span> <span m='1465646'>you</span> <span
  m='1466142'>can mark</span> <span m='1466638'>that spot</span> <span
  m='1468126'>by</span> <span m='1468622'>a,</span> <span m='1469118'>and</span>
  <span m='1469614'>when</span> <span m='1470110'>search</span> <span
  m='1470606'>comes</span> <span m='1471102'>across</span> <span
  m='1471598'>a,</span> <span m='1472094'>you just</span> <span
  m='1472590'>[INAUDIBLE].</span> </p><p><span m='1474580'>PROFESSOR:
  Right,</span> <span m='1475730'>great</span> <span m='1476390'>answer.</span>
  <span m='1478020'>We're</span> <span m='1478150'>now</span> <span
  m='1478300'>going</span> <span m='1478400'>to</span> <span
  m='1478440'>have</span> <span m='1478610'>to</span> <span
  m='1478700'>do</span> <span m='1479050'>a</span> <span
  m='1479140'>couple</span> <span m='1479370'>of</span> <span
  m='1479450'>different</span> <span m='1479760'>things</span> <span
  m='1480480'>for</span> <span m='1480700'>insert</span> <span
  m='1480810'>and</span> <span m='1481280'>search,</span> <span
  m='1482030'>OK?</span> <span m='1482340'>It's</span> <span
  m='1482690'>going</span> <span m='1482800'>to</span> <span
  m='1482840'>be</span> <span m='1483250'>subtly</span> <span
  m='1483670'>different,</span> <span m='1484400'>but</span> <span
  m='1484650'>the</span> <span m='1484720'>first</span> <span
  m='1485000'>thing</span> <span m='1485110'>we're</span> <span
  m='1485190'>going</span> <span m='1485300'>to</span> <span
  m='1485370'>do</span> <span m='1485560'>is</span> <span
  m='1485750'>we're</span> <span m='1485850'>going</span> <span
  m='1485950'>to</span> <span m='1485990'>have</span> <span
  m='1486210'>this</span> <span m='1486500'>flag,</span> <span m='1486930'>and
  I'll</span> <span m='1487090'>just</span> <span m='1487290'>call</span> <span
  m='1487440'>it</span> <span m='1487540'>delete</span> <span
  m='1487880'>me</span> <span m='1488080'>flag.</span> <span
  m='1488920'>OK?</span> <span m='1490620'>And</span> <span
  m='1491460'>we're</span> <span m='1491710'>going</span> <span
  m='1491820'>to</span> <span m='1491870'>say</span> <span
  m='1493130'>that</span> <span m='1494422'>when</span> <span
  m='1494760'>I</span> <span m='1494940'>delete</span> <span
  m='1495350'>something,</span> <span m='1500350'>replace</span> <span
  m='1502850'>deleted</span> <span m='1503420'>item</span> <span
  m='1508220'>with</span> <span m='1508800'>not</span> <span
  m='1509030'>the</span> <span m='1509100'>non</span> <span
  m='1509450'>flag,</span> <span m='1509960'>but</span> <span
  m='1510140'>a</span> <span m='1510200'>different</span> <span
  m='1510540'>flag</span> <span m='1511450'>that</span> <span
  m='1511580'>we'll</span> <span m='1511990'>call</span> <span
  m='1512400'>delete</span> <span m='1512790'>me.</span> <span
  m='1515200'>Is</span> <span m='1515410'>different</span> <span
  m='1519740'>from</span> <span m='1520030'>none.</span> <span
  m='1524230'>And</span> <span m='1525120'>that's</span> <span
  m='1525380'>going</span> <span m='1525480'>to</span> <span
  m='1525520'>be</span> <span m='1525560'>important,</span> <span
  m='1526040'>because</span> <span m='1526410'>now</span> <span
  m='1526700'>that</span> <span m='1526850'>you</span> <span
  m='1526950'>have</span> <span m='1527160'>a</span> <span
  m='1527470'>different</span> <span m='1527620'>flag,</span> <span
  m='1528600'>and</span> <span m='1528730'>you</span> <span
  m='1528840'>replace</span> <span m='1529270'>586</span> <span
  m='1533430'>with</span> <span m='1534430'>delete</span> <span
  m='1534810'>me,</span> <span m='1535530'>you</span> <span
  m='1535670'>can</span> <span m='1535780'>now</span> <span
  m='1536060'>do</span> <span m='1536190'>different</span> <span
  m='1536640'>things</span> <span m='1537730'>in</span> <span
  m='1538200'>insert</span> <span m='1538970'>versus</span> <span
  m='1539360'>search,</span> <span m='1540350'>right?</span> </p><p><span
  m='1540900'>So</span> <span m='1541050'>in</span> <span
  m='1541190'>particular,</span> <span m='1542460'>what</span> <span
  m='1542690'>you</span> <span m='1542800'>would</span> <span
  m='1542930'>do</span> <span m='1543900'>is</span> <span
  m='1544370'>you'd</span> <span m='1548540'>have</span> <span
  m='1548710'>to</span> <span m='1549270'>modify</span> <span
  m='1549710'>this</span> <span m='1549980'>slightly,</span> <span
  m='1551170'>because</span> <span m='1551460'>the</span> <span
  m='1551540'>notion</span> <span m='1551800'>of</span> <span
  m='1551880'>an</span> <span m='1551950'>empty</span> <span
  m='1552240'>slot</span> <span m='1552580'>means</span> <span
  m='1552810'>that</span> <span m='1552960'>you're</span> <span
  m='1553090'>looking</span> <span m='1553390'>for</span> <span
  m='1553540'>none,</span> <span m='1554630'>right?</span> <span
  m='1555380'>And</span> <span m='1555890'>all</span> <span
  m='1556000'>it</span> <span m='1556080'>means</span> <span
  m='1556380'>is</span> <span m='1556530'>that--</span> <span
  m='1559010'>well</span> <span m='1559130'>actually</span> <span
  m='1559670'>in</span> <span m='1559750'>some</span> <span
  m='1559940'>sense,</span> <span m='1560650'>the</span> <span
  m='1560730'>pseudo</span> <span m='1560880'>code</span> <span
  m='1561080'>doesn't</span> <span m='1561340'>really</span> <span
  m='1561530'>change</span> <span m='1562500'>because</span> <span
  m='1564150'>if</span> <span m='1564800'>you</span> <span
  m='1565470'>say</span> <span m='1565780'>you</span> <span
  m='1565900'>either</span> <span m='1566180'>encounter</span> <span
  m='1566750'>k</span> <span m='1568160'>or</span> <span m='1571320'>you</span>
  <span m='1571570'>would--</span> <span m='1572920'>even</span> <span
  m='1573320'>if</span> <span m='1573380'>you</span> <span m='1573450'>encounter
  a</span> <span m='1573940'>delete</span> <span m='1574330'>me,</span> <span
  m='1574510'>you</span> <span m='1574650'>keep</span> <span
  m='1574930'>going.</span> <span m='1575735'>All</span> <span
  m='1576040'>right?</span> <span m='1576220'>That's</span> <span
  m='1576900'>the</span> <span m='1577020'>important</span> <span
  m='1577420'>thing.</span> <span m='1578650'>So</span> <span
  m='1578660'>I</span> <span m='1578730'>guess</span> <span
  m='1578900'>it</span> <span m='1579010'>does</span> <span
  m='1579230'>change,</span> <span m='1579640'>because</span> <span
  m='1579920'>I</span> <span m='1580250'>assume</span> <span
  m='1580570'>that</span> <span m='1580750'>you</span> <span
  m='1580850'>have</span> <span m='1581530'>only</span> <span
  m='1581780'>two</span> <span m='1581960'>cases</span> <span
  m='1582380'>here,</span> <span m='1583170'>but</span> <span
  m='1583850'>what</span> <span m='1584040'>you</span> <span
  m='1584130'>really</span> <span m='1584310'>have</span> <span
  m='1584510'>now</span> <span m='1584710'>are</span> <span
  m='1584950'>three</span> <span m='1585160'>cases.</span> </p><p><span
  m='1586075'>The</span> <span m='1586390'>three</span> <span
  m='1586590'>cases</span> <span m='1587010'>are</span> <span
  m='1587700'>when</span> <span m='1587840'>you're</span> <span
  m='1587940'>doing</span> <span m='1588150'>the</span> <span
  m='1588260'>search</span> <span m='1589080'>is</span> <span
  m='1589210'>that</span> <span m='1589330'>you</span> <span
  m='1589430'>encounter</span> <span m='1589950'>the</span> <span
  m='1590030'>key,</span> <span m='1590800'>which</span> <span
  m='1590860'>is</span> <span m='1590940'>the</span> <span
  m='1591040'>easy</span> <span m='1591320'>case.</span> <span
  m='1591960'>You</span> <span m='1592180'>return</span> <span
  m='1592510'>it.</span> <span m='1592690'>You</span> <span
  m='1592790'>return</span> <span m='1593010'>the</span> <span
  m='1593070'>value.</span> <span m='1594440'>Or</span> <span
  m='1594770'>you</span> <span m='1594920'>can</span> <span
  m='1595100'>encounter</span> <span m='1596220'>a</span> <span
  m='1596440'>delete</span> <span m='1596800'>me</span> <span
  m='1596990'>flag,</span> <span m='1597950'>in</span> <span
  m='1598090'>which</span> <span m='1598290'>case</span> <span
  m='1598530'>you</span> <span m='1598680'>keep</span> <span
  m='1599010'>going.</span> <span m='1600240'>OK?</span> <span
  m='1602140'>And</span> <span m='1602740'>if</span> <span
  m='1602920'>you</span> <span m='1603340'>encounter</span> <span
  m='1603770'>an</span> <span m='1603890'>empty</span> <span
  m='1604240'>slot,</span> <span m='1604860'>which</span> <span
  m='1604930'>corresponds</span> <span m='1605370'>to</span> <span
  m='1605470'>none,</span> <span m='1606290'>at</span> <span
  m='1606420'>that</span> <span m='1606570'>point</span> <span m='1606780'>you
  know you</span> <span m='1607130'>failed</span> <span m='1607500'>and</span>
  <span m='1607570'>the</span> <span m='1607640'>key</span> <span
  m='1607800'>doesn't</span> <span m='1608020'>exist</span> <span
  m='1608430'>in</span> <span m='1608540'>the</span> <span
  m='1608630'>table.</span> <span m='1609630'>All</span> <span
  m='1609700'>right?</span> </p><p><span m='1610570'>So</span> <span
  m='1610840'>let</span> <span m='1610940'>me</span> <span
  m='1611010'>just</span> <span m='1611170'>write</span> <span
  m='1611340'>that</span> <span m='1611460'>out.</span> <span
  m='1614310'>Insert</span> <span m='1617290'>treats</span> <span
  m='1619940'>delete</span> <span m='1620330'>me</span> <span
  m='1622090'>the</span> <span m='1622270'>same</span> <span
  m='1622630'>as</span> <span m='1622780'>none.</span> <span
  m='1627250'>But</span> <span m='1628110'>search</span> <span
  m='1635780'>keeps</span> <span m='1636100'>going</span> <span
  m='1640050'>and</span> <span m='1640270'>treats</span> <span
  m='1640500'>it</span> <span m='1640620'>differently.</span> <span
  m='1652320'>And</span> <span m='1652460'>that's</span> <span
  m='1652600'>pretty</span> <span m='1652750'>much</span> <span
  m='1652920'>it.</span> </p><p><span m='1653200'>So</span> <span
  m='1653420'>what</span> <span m='1653550'>would</span> <span
  m='1653660'>happen</span> <span m='1653960'>in</span> <span
  m='1654100'>our</span> <span m='1654200'>example?</span> <span
  m='1655260'>Well,</span> <span m='1656670'>going</span> <span
  m='1656870'>through</span> <span m='1656970'>exactly</span> <span
  m='1657390'>the</span> <span m='1657500'>same</span> <span
  m='1657710'>example,</span> <span m='1659840'>we</span> <span
  m='1660080'>started</span> <span m='1660420'>from</span> <span
  m='1660570'>here,</span> <span m='1661380'>and</span> <span
  m='1661520'>then</span> <span m='1661630'>we</span> <span
  m='1661710'>decided</span> <span m='1662090'>to</span> <span
  m='1662180'>delete</span> <span m='1662510'>586.</span> <span
  m='1663750'>And</span> <span m='1663920'>so if</span> <span m='1664060'>we
  replaced</span> <span m='1664560'>586</span> <span m='1666350'>not</span>
  <span m='1667172'>with</span> <span m='1668790'>none,</span> <span
  m='1669990'>but</span> <span m='1670200'>with</span> <span
  m='1670360'>delete</span> <span m='1670740'>me,</span> <span
  m='1671580'>and</span> <span m='1672030'>the</span> <span
  m='1672140'>next</span> <span m='1672360'>time</span> <span
  m='1672550'>around</span> <span m='1673050'>when</span> <span
  m='1673200'>you</span> <span m='1673290'>search</span> <span
  m='1673660'>for</span> <span m='1673930'>496,</span> <span
  m='1675260'>you're</span> <span m='1675390'>searching</span> <span
  m='1675770'>for</span> <span m='1675900'>496.</span> <span
  m='1677360'>And</span> <span m='1677960'>what would</span> <span
  m='1678180'>happen</span> <span m='1678470'>is</span> <span
  m='1678600'>that</span> <span m='1678760'>you</span> <span
  m='1678870'>would</span> <span m='1679000'>go</span> <span
  m='1680040'>look</span> <span m='1680350'>at</span> <span
  m='1680920'>586--</span> <span m='1681750'>the</span> <span
  m='1681870'>slot</span> <span m='1682410'>that</span> <span
  m='1682660'>contained</span> <span m='1683020'>586,</span> <span
  m='1684010'>and</span> <span m='1684130'>you</span> <span
  m='1684260'>see</span> <span m='1684500'>that</span> <span
  m='1684680'>there's</span> <span m='1684850'>a</span> <span
  m='1684920'>delete</span> <span m='1685230'>me</span> <span
  m='1685370'>flag</span> <span m='1685690'>in</span> <span
  m='1685780'>there.</span> <span m='1686360'>And</span> <span
  m='1686540'>so</span> <span m='1686630'>you</span> <span m='1686810'>go</span>
  <span m='1686990'>to</span> <span m='1687050'>the</span> <span
  m='1687150'>next</span> <span m='1687450'>trial.</span> </p><p><span
  m='1688400'>And</span> <span m='1688610'>then</span> <span
  m='1689060'>in</span> <span m='1689170'>the</span> <span
  m='1689240'>next</span> <span m='1689490'>trial,</span> <span
  m='1690400'>you</span> <span m='1690630'>discover</span> <span
  m='1691190'>that,</span> <span m='1691700'>in</span> <span
  m='1691830'>this</span> <span m='1692010'>case,</span> <span
  m='1694800'>you</span> <span m='1694980'>have--</span> <span
  m='1698710'>I'm</span> <span m='1698980'>sorry.</span> <span
  m='1699210'>I</span> <span m='1699250'>had</span> <span m='1699400'>204</span>
  <span m='1700380'>first</span> <span m='1700710'>as</span> <span
  m='1700920'>the</span> <span m='1701010'>first</span> <span
  m='1701300'>trial,</span> <span m='1702330'>and</span> <span
  m='1702500'>then</span> <span m='1702970'>in</span> <span
  m='1703490'>the</span> <span m='1703580'>second</span> <span
  m='1703920'>trial</span> <span m='1704360'>I</span> <span
  m='1704440'>had</span> <span m='1704600'>586.</span> <span
  m='1706110'>And</span> <span m='1706330'>I</span> <span
  m='1706360'>would</span> <span m='1706510'>continue</span> <span
  m='1707180'>beyond</span> <span m='1707570'>the</span> <span
  m='1707660'>second</span> <span m='1707970'>trial</span> <span
  m='1708790'>and</span> <span m='1709010'>get</span> <span
  m='1709250'>to</span> <span m='1711100'>third</span> <span
  m='1711360'>trial,</span> <span m='1712060'>and</span> <span
  m='1712250'>in</span> <span m='1712350'>fact</span> <span
  m='1712630'>return</span> <span m='1713030'>496</span> <span
  m='1713710'>in</span> <span m='1713800'>this</span> <span
  m='1713970'>case.</span> <span m='1716080'>I</span> <span
  m='1716200'>would</span> <span m='1716310'>get</span> <span
  m='1716570'>to</span> <span m='1717260'>returning</span> <span
  m='1717630'>496</span> <span m='1718330'>in</span> <span m='1718430'>my</span>
  <span m='1718650'>third</span> <span m='1718900'>trial,</span> <span
  m='1719640'>which</span> <span m='1719840'>is</span> <span
  m='1719950'>exactly</span> <span m='1720320'>what</span> <span
  m='1720440'>I</span> <span m='1720480'>want.</span> </p><p><span
  m='1723780'>The</span> <span m='1724060'>interesting</span> <span
  m='1724470'>thing</span> <span m='1724670'>here</span> <span
  m='1724870'>is</span> <span m='1724960'>that</span> <span
  m='1725140'>you</span> <span m='1725260'>can</span> <span
  m='1725430'>reuse</span> <span m='1725990'>storage.</span> <span
  m='1726810'>I</span> <span m='1727160'>mean</span> <span
  m='1727310'>the</span> <span m='1727370'>whole</span> <span
  m='1727570'>point</span> <span m='1727830'>of</span> <span
  m='1727930'>deleting</span> <span m='1728850'>is</span> <span
  m='1729100'>that</span> <span m='1729510'>you</span> <span
  m='1729690'>can</span> <span m='1730530'>take</span> <span
  m='1730820'>the</span> <span m='1730940'>storage</span> <span
  m='1731470'>and</span> <span m='1731650'>insert</span> <span
  m='1732080'>other</span> <span m='1732330'>keys</span> <span
  m='1732620'>in</span> <span m='1732750'>there.</span> <span
  m='1733880'>Once</span> <span m='1734530'>you've</span> <span
  m='1734700'>freed</span> <span m='1734930'>up</span> <span
  m='1735090'>the</span> <span m='1735180'>storage.</span> <span
  m='1736140'>And</span> <span m='1737270'>you</span> <span
  m='1737420'>can</span> <span m='1737530'>do</span> <span
  m='1737650'>that</span> <span m='1738350'>by</span> <span
  m='1738570'>making</span> <span m='1739040'>insert</span> <span
  m='1740310'>treat</span> <span m='1740830'>delete</span> <span
  m='1741170'>me</span> <span m='1741780'>the</span> <span
  m='1741900'>same</span> <span m='1742200'>as</span> <span
  m='1742310'>the</span> <span m='1742400'>none.</span> <span
  m='1743690'>So</span> <span m='1743930'>the</span> <span
  m='1744020'>next</span> <span m='1744220'>time</span> <span
  m='1744390'>you</span> <span m='1744480'>want</span> <span
  m='1744620'>to</span> <span m='1744670'>insert</span> <span
  m='1745100'>you</span> <span m='1745190'>could--</span> <span
  m='1745500'>if</span> <span m='1745960'>you</span> <span
  m='1746050'>happen</span> <span m='1746420'>to</span> <span
  m='1746640'>index</span> <span m='1747050'>into</span> <span
  m='1748140'>the</span> <span m='1748480'>index</span> <span
  m='1749230'>corresponding</span> <span m='1749620'>to</span> <span
  m='1749700'>586,</span> <span m='1750910'>you</span> <span
  m='1751030'>can</span> <span m='1751620'>override</span> <span
  m='1752080'>that.</span> <span m='1752650'>The</span> <span
  m='1752730'>delete</span> <span m='1753060'>me</span> <span
  m='1753250'>flag</span> <span m='1753610'>goes</span> <span
  m='1753830'>away,</span> <span m='1754530'>and</span> <span
  m='1754720'>some</span> <span m='1754900'>other</span> <span
  m='1755100'>key--</span> <span m='1755920'>call</span> <span
  m='1756000'>it</span> <span m='1756220'>999</span> <span m='1756720'>or</span>
  <span m='1757080'>something--</span> <span m='1758330'>would</span> <span
  m='1759080'>get</span> <span m='1759240'>in</span> <span
  m='1759350'>there.</span> <span m='1760740'>And</span> <span
  m='1762050'>you're</span> <span m='1762280'>all</span> <span
  m='1762390'>set</span> <span m='1762650'>with</span> <span
  m='1762710'>that.</span> <span m='1763700'>OK?</span> <span
  m='1764540'>Any</span> <span m='1764650'>questions?</span> <span
  m='1766380'>This</span> <span m='1766570'>all</span> <span
  m='1766680'>makes</span> <span m='1766840'>sense?</span> </p><p><span
  m='1768530'>So</span> <span m='1769680'>you</span> <span
  m='1769800'>could</span> <span m='1769900'>imagine</span> <span
  m='1770810'>coding</span> <span m='1771040'>this</span> <span
  m='1771200'>up</span> <span m='1771380'>with</span> <span
  m='1771510'>an</span> <span m='1771590'>array</span> <span
  m='1771820'>structure</span> <span m='1773050'>is</span> <span
  m='1773330'>fairly</span> <span m='1773610'>straightforward.</span> <span
  m='1775100'>What</span> <span m='1775940'>remains</span> <span
  m='1776450'>here</span> <span m='1777030'>to</span> <span
  m='1777140'>be</span> <span m='1777830'>discussed</span> <span
  m='1778890'>is</span> <span m='1779900'>how</span> <span
  m='1780110'>well</span> <span m='1780440'>does</span> <span
  m='1780630'>this</span> <span m='1780780'>work,</span> <span
  m='1781790'>right?</span> <span m='1782170'>You</span> <span
  m='1782280'>have</span> <span m='1782540'>this</span> <span
  m='1783290'>extra</span> <span m='1783920'>requirement</span> <span
  m='1784720'>on</span> <span m='1784940'>the</span> <span
  m='1785030'>hash</span> <span m='1785310'>function</span> <span
  m='1786270'>corresponding</span> <span m='1786870'>to</span> <span
  m='1788260'>creating</span> <span m='1789180'>an</span> <span
  m='1789330'>extra</span> <span m='1789600'>argument</span> <span
  m='1790930'>as</span> <span m='1791150'>an</span> <span
  m='1791250'>input</span> <span m='1791570'>to</span> <span
  m='1791700'>it,</span> <span m='1792030'>which</span> <span
  m='1792190'>is</span> <span m='1792370'>this</span> <span
  m='1792550'>trial</span> <span m='1793070'>count.</span> <span
  m='1793950'>And</span> <span m='1794960'>you'd</span> <span
  m='1795190'>like</span> <span m='1795420'>to</span> <span
  m='1795520'>have</span> <span m='1795750'>this</span> <span
  m='1795880'>nice</span> <span m='1796100'>property</span> <span
  m='1796510'>of</span> <span m='1796780'>corresponding</span> <span
  m='1797200'>to a</span> <span m='1797410'>permutation.</span> <span
  m='1798340'>Can</span> <span m='1798500'>we</span> <span
  m='1798630'>actually</span> <span m='1798990'>design</span> <span
  m='1799440'>hash</span> <span m='1799680'>functions</span> <span
  m='1800070'>like</span> <span m='1800310'>this?</span> <span
  m='1801150'>And</span> <span m='1801380'>we'll</span> <span
  m='1801490'>take</span> <span m='1801630'>a</span> <span
  m='1801680'>look</span> <span m='1801850'>at</span> <span m='1802330'>a
  bad</span> <span m='1802610'>hash</span> <span m='1802850'>function,</span>
  <span m='1803380'>and</span> <span m='1803500'>then</span> <span
  m='1803690'>at</span> <span m='1803880'>a</span> <span
  m='1803960'>better</span> <span m='1804190'>one.</span> </p><p><span
  m='1805600'>So</span> <span m='1805830'>let's</span> <span
  m='1806020'>talk</span> <span m='1806200'>about</span> <span
  m='1806430'>probing</span> <span m='1806760'>strategies,</span> <span
  m='1807700'>which</span> <span m='1808260'>is</span> <span
  m='1808440'>essentially</span> <span m='1813280'>the</span> <span
  m='1813420'>same</span> <span m='1813760'>as</span> <span
  m='1814260'>taking</span> <span m='1814650'>a</span> <span
  m='1814670'>hash</span> <span m='1814920'>function</span> <span
  m='1815910'>and</span> <span m='1816940'>changing</span> <span
  m='1817390'>it</span> <span m='1817570'>so</span> <span m='1817700'>it</span>
  <span m='1818040'>is</span> <span m='1818260'>actually</span> <span
  m='1818570'>applicable</span> <span m='1819770'>to</span> <span
  m='1819970'>open</span> <span m='1820220'>addressing.</span> <span
  m='1821240'>So</span> <span m='1822140'>the</span> <span
  m='1822190'>notion</span> <span m='1822470'>of</span> <span
  m='1822560'>linear</span> <span m='1822950'>probing</span> <span
  m='1828310'>is</span> <span m='1830480'>that</span> <span
  m='1830690'>you</span> <span m='1830850'>do</span> <span m='1831360'>h</span>
  <span m='1831760'>k</span> <span m='1832160'>i</span> <span
  m='1834460'>equals</span> <span m='1835910'>h</span> <span
  m='1839950'>prime</span> <span m='1840380'>k,</span> <span
  m='1840840'>which</span> <span m='1840920'>is some</span> <span
  m='1841180'>hash</span> <span m='1841420'>function</span> <span
  m='1841800'>that</span> <span m='1841920'>you've</span> <span
  m='1842080'>chosen,</span> <span m='1843220'>plus</span> <span
  m='1843510'>i</span> <span m='1844730'>mod</span> <span m='1846130'>m,</span>
  <span m='1847080'>where</span> <span m='1847640'>this</span> <span
  m='1847990'>is</span> <span m='1848120'>an</span> <span
  m='1848430'>ordinary</span> <span m='1848930'>hash</span> <span
  m='1849190'>function.</span> <span m='1854620'>OK?</span> <span
  m='1855460'>So</span> <span m='1855790'>that</span> <span
  m='1855930'>looks</span> <span m='1856080'>pretty</span> <span
  m='1856250'>straightforward.</span> </p><p><span m='1861280'>What</span> <span
  m='1861470'>happens</span> <span m='1861780'>here?</span> <span
  m='1862100'>Does</span> <span m='1862280'>this</span> <span
  m='1862400'>satisfy</span> <span m='1862970'>the</span> <span
  m='1863110'>permutation</span> <span m='1864840'>argument?</span> <span
  m='1868785'>Before</span> <span m='1869240'>I</span> <span
  m='1869330'>forget.</span> <span m='1870500'>Does</span> <span
  m='1870670'>it</span> <span m='1870770'>satisfy</span> <span
  m='1871180'>the</span> <span m='1871290'>permutation</span> <span
  m='1871830'>property</span> <span m='1873680'>that</span> <span
  m='1874300'>I</span> <span m='1874400'>want</span> <span m='1874690'>h</span>
  <span m='1875035'>k</span> <span m='1875380'>1,</span> <span
  m='1875675'>h</span> <span m='1875970'>k</span> <span m='1876170'>2,</span>
  <span m='1876470'>h k m</span> <span m='1876820'>minus</span> <span
  m='1877150'>1</span> <span m='1877910'>to</span> <span m='1877990'>be a</span>
  <span m='1878090'>permutation?</span> <span m='1879800'>That</span> <span
  m='1879850'>make</span> <span m='1880000'>sense?</span> <span
  m='1880580'>Yep,</span> <span m='1880920'>yep.</span> <span
  m='1881380'>Because</span> <span m='1882160'>I</span> <span m='1882400'>then
  I</span> <span m='1882450'>start</span> <span m='1882660'>adding.</span> <span
  m='1883240'>The</span> <span m='1883340'>mod</span> <span
  m='1883645'>is</span> <span m='1883950'>precisely</span> <span
  m='1884980'>kind</span> <span m='1885130'>of</span> <span
  m='1885210'>this</span> <span m='1885380'>round</span> <span
  m='1885630'>robin</span> <span m='1885950'>cycle,</span> <span
  m='1886780'>so</span> <span m='1887000'>it's</span> <span
  m='1887160'>going</span> <span m='1887270'>to</span> <span
  m='1887330'>satisfy</span> <span m='1887760'>the</span> <span
  m='1887860'>permutation.</span> <span m='1888780'>That's</span> <span
  m='1888970'>good.</span> </p><p><span m='1894120'>What's</span> <span
  m='1894320'>wrong</span> <span m='1894530'>with</span> <span
  m='1894630'>this?</span> <span m='1897170'>What's</span> <span
  m='1897760'>wrong</span> <span m='1897920'>with</span> <span
  m='1898010'>this?</span> <span m='1899870'>Someone?</span> </p><p><span
  m='1903120'>AUDIENCE: The</span> <span m='1903620'>fact</span> <span
  m='1904120'>that</span> <span m='1904620'>[INAUDIBLE]</span> <span
  m='1905620'>keys,</span> <span m='1906620'>which</span> <span
  m='1907120'>they're</span> <span m='1907620'>all filled,</span> <span
  m='1908120'>then if</span> <span m='1908620'>you hit</span> <span
  m='1909120'>anywhere</span> <span m='1909620'>in here</span> <span
  m='1910120'>[INAUDIBLE]</span> <span m='1910620'>list of</span> <span
  m='1911120'>consecutive</span> <span m='1911620'>keys.</span> </p><p><span
  m='1912120'>AUDIENCE: Right.</span> <span m='1912640'>That's</span> <span
  m='1912810'>excellent.</span> <span m='1913390'>Excellent,</span> <span
  m='1913860'>excellent</span> <span m='1914170'>answer.</span> <span
  m='1914740'>So</span> <span m='1914880'>this</span> <span
  m='1915040'>notion</span> <span m='1915410'>of</span> <span
  m='1915950'>clustering</span> <span m='1917150'>is</span> <span
  m='1919010'>basically</span> <span m='1919390'>what's</span> <span
  m='1919590'>wrong</span> <span m='1919800'>with</span> <span
  m='1919930'>this</span> <span m='1920120'>probing</span> <span
  m='1920510'>strategy.</span> <span m='1921370'>And</span> <span
  m='1921550'>in</span> <span m='1921650'>fact,</span> <span
  m='1923330'>I'm</span> <span m='1923450'>not</span> <span
  m='1923580'>going</span> <span m='1923670'>to</span> <span
  m='1923720'>do</span> <span m='1923840'>this</span> <span
  m='1924020'>particular</span> <span m='1924290'>analysis,</span> <span
  m='1925430'>but</span> <span m='1925810'>I'll</span> <span
  m='1926040'>give</span> <span m='1926170'>you</span> <span
  m='1926280'>a</span> <span m='1926350'>sense</span> <span
  m='1926710'>of</span> <span m='1927450'>why</span> <span
  m='1928970'>the</span> <span m='1929180'>statement</span> <span
  m='1929550'>I'm</span> <span m='1929630'>going</span> <span
  m='1929750'>to</span> <span m='1929790'>make</span> <span
  m='1930820'>is</span> <span m='1931030'>true.</span> </p><p><span
  m='1931760'>But</span> <span m='1932030'>the</span> <span
  m='1932100'>notion</span> <span m='1932340'>of</span> <span
  m='1932420'>clustering</span> <span m='1932960'>is</span> <span
  m='1933140'>that</span> <span m='1933730'>you</span> <span
  m='1933840'>start</span> <span m='1934160'>getting</span> <span
  m='1934530'>consecutive</span> <span m='1935190'>groups</span> <span
  m='1935535'>of</span> <span m='1935880'>occupied</span> <span
  m='1936470'>slots,</span> <span m='1938080'>OK?</span> <span
  m='1947850'>Which</span> <span m='1948030'>keep</span> <span
  m='1948320'>growing.</span> <span m='1952820'>And</span> <span
  m='1952980'>so</span> <span m='1953080'>these</span> <span
  m='1953260'>clusters</span> <span m='1953740'>get</span> <span
  m='1954040'>longer</span> <span m='1954360'>and</span> <span
  m='1954510'>longer.</span> <span m='1956780'>And</span> <span
  m='1957060'>if</span> <span m='1957150'>you</span> <span
  m='1957230'>have</span> <span m='1957470'>a</span> <span
  m='1957540'>big</span> <span m='1957730'>cluster,</span> <span
  m='1958780'>it's</span> <span m='1958950'>more</span> <span
  m='1959180'>likely</span> <span m='1959700'>to</span> <span
  m='1959800'>grow</span> <span m='1960010'>bigger,</span> <span
  m='1960800'>right?</span> <span m='1961020'>Which</span> <span
  m='1961170'>is</span> <span m='1961300'>bad.</span> <span m='1961840'>This
  is</span> <span m='1961960'>exactly</span> <span m='1962640'>the</span> <span
  m='1962780'>wrong</span> <span m='1963080'>thing</span> <span
  m='1963370'>for</span> <span m='1963520'>load</span> <span
  m='1963740'>balancing,</span> <span m='1964690'>right?</span> <span
  m='1965030'>And</span> <span m='1965210'>clustering</span> <span
  m='1965700'>is</span> <span m='1965840'>the</span> <span
  m='1965920'>reverse</span> <span m='1966260'>of</span> <span
  m='1966340'>load</span> <span m='1966510'>balancing,</span> <span
  m='1966940'>right?</span> <span m='1967170'>If</span> <span
  m='1967250'>you</span> <span m='1967320'>have</span> <span
  m='1967420'>a</span> <span m='1967470'>bunch</span> <span
  m='1967690'>of</span> <span m='1967830'>clumps</span> <span
  m='1968730'>and</span> <span m='1968900'>you</span> <span
  m='1968970'>have</span> <span m='1969090'>a</span> <span
  m='1969130'>bunch</span> <span m='1969330'>of</span> <span
  m='1969410'>empty</span> <span m='1969700'>space</span> <span
  m='1970090'>in</span> <span m='1970180'>your</span> <span
  m='1970450'>table,</span> <span m='1971090'>that's</span> <span
  m='1971280'>bad.</span> <span m='1972150'>Right?</span> </p><p><span
  m='1972600'>The</span> <span m='1972700'>problem</span> <span
  m='1973100'>with</span> <span m='1973190'>linear</span> <span
  m='1973480'>probing</span> <span m='1973950'>is</span> <span
  m='1974100'>that</span> <span m='1974680'>once</span> <span
  m='1974930'>you</span> <span m='1975040'>start</span> <span
  m='1975320'>getting</span> <span m='1975530'>a</span> <span
  m='1975610'>cluster,</span> <span m='1976760'>given</span> <span
  m='1977180'>the,</span> <span m='1977760'>let's</span> <span
  m='1977850'>say,</span> <span m='1977940'>the</span> <span
  m='1978030'>randomness</span> <span m='1978490'>in</span> <span
  m='1978560'>the</span> <span m='1978630'>hash</span> <span
  m='1978850'>function,</span> <span m='1979260'>and</span> <span
  m='1979390'>h</span> <span m='1979630'>prime</span> <span m='1979930'>k</span>
  <span m='1980110'>is</span> <span m='1980230'>a</span> <span
  m='1980300'>pretty</span> <span m='1980500'>good</span> <span
  m='1980660'>hash</span> <span m='1980890'>function</span> <span
  m='1981620'>and</span> <span m='1981770'>can</span> <span
  m='1981910'>randomly</span> <span m='1982370'>go</span> <span
  m='1982560'>anywhere.</span> <span m='1983470'>Well,</span> <span
  m='1983750'>if you</span> <span m='1983790'>have</span> <span
  m='1983940'>100</span> <span m='1984300'>slots</span> <span
  m='1984840'>and</span> <span m='1984970'>you</span> <span
  m='1985030'>have</span> <span m='1985150'>a</span> <span
  m='1985210'>cluster</span> <span m='1985640'>of</span> <span
  m='1985720'>size</span> <span m='1986160'>4,</span> <span
  m='1987140'>well</span> <span m='1987490'>there's</span> <span
  m='1987710'>a</span> <span m='1988150'>for</span> <span
  m='1988700'>4/100</span> <span m='1989190'>chance,</span> <span
  m='1989780'>which</span> <span m='1989980'>is</span> <span
  m='1990520'>obviously</span> <span m='1990900'>four</span> <span
  m='1991100'>times</span> <span m='1991370'>greater</span> <span
  m='1991580'>than</span> <span m='1991740'>1/100,</span> <span
  m='1992800'>even</span> <span m='1993000'>I</span> <span
  m='1993060'>can</span> <span m='1993190'>do</span> <span
  m='1993310'>that,</span> <span m='1995050'>to</span> <span
  m='1995990'>go</span> <span m='1996180'>into</span> <span
  m='1996450'>those</span> <span m='1996710'>four</span> <span
  m='1996950'>slots.</span> <span m='1997760'>And</span> <span
  m='1997870'>if</span> <span m='1997930'>you</span> <span
  m='1998020'>going</span> <span m='1998270'>into</span> <span
  m='1998320'>those</span> <span m='1998520'>four</span> <span
  m='1998720'>slots</span> <span m='1999480'>you're</span> <span
  m='1999660'>going to</span> <span m='1999740'>keep</span> <span
  m='2000910'>going</span> <span m='2001190'>down</span> <span
  m='2001500'>to</span> <span m='2001560'>the</span> <span
  m='2001650'>bottom,</span> <span m='2002440'>and</span> <span
  m='2002570'>you're</span> <span m='2002660'>going</span> <span
  m='2002740'>to</span> <span m='2002790'>make</span> <span
  m='2002970'>that</span> <span m='2003690'>a</span> <span
  m='2003780'>cluster</span> <span m='2004150'>of</span> <span
  m='2004220'>size</span> <span m='2005070'>five,</span> <span
  m='2006130'>right?</span> </p><p><span m='2007500'>So</span> <span
  m='2007650'>that's</span> <span m='2008000'>the</span> <span
  m='2008470'>problem</span> <span m='2008880'>the</span> <span
  m='2009330'>linear</span> <span m='2009640'>probing,</span> <span
  m='2010520'>and</span> <span m='2010750'>you</span> <span
  m='2010870'>can</span> <span m='2011250'>essentially</span> <span
  m='2011740'>argue</span> <span m='2013050'>through</span> <span
  m='2014020'>making</span> <span m='2014290'>some</span> <span
  m='2016680'>probabilistic</span> <span m='2017410'>assumptions</span> <span
  m='2019122'>that</span> <span m='2019590'>if,</span> <span
  m='2019760'>in</span> <span m='2019870'>fact,</span> <span
  m='2020180'>you</span> <span m='2020250'>use</span> <span
  m='2020520'>linear</span> <span m='2020850'>probing</span> <span
  m='2022050'>that</span> <span m='2022260'>you</span> <span
  m='2022400'>lose</span> <span m='2022820'>your</span> <span
  m='2024410'>average</span> <span m='2026160'>constant</span> <span
  m='2026700'>time</span> <span m='2027040'>look</span> <span
  m='2027250'>up</span> <span m='2028090'>in</span> <span
  m='2028290'>your</span> <span m='2028520'>hash</span> <span
  m='2028780'>table</span> <span m='2029730'>for</span> <span
  m='2029940'>most</span> <span m='2030300'>load</span> <span
  m='2030560'>factors.</span> <span m='2031760'>So</span> <span
  m='2032330'>what's</span> <span m='2032530'>happening</span> <span
  m='2032850'>out</span> <span m='2032980'>here</span> <span
  m='2033470'>pictorially</span> <span m='2034120'>really</span> <span
  m='2034900'>is</span> <span m='2035110'>that</span> <span
  m='2035360'>you</span> <span m='2035490'>have</span> <span
  m='2035660'>a</span> <span m='2035730'>table</span> <span
  m='2036790'>and</span> <span m='2036900'>let's</span> <span
  m='2037040'>say</span> <span m='2037170'>you</span> <span
  m='2037230'>have</span> <span m='2037370'>a</span> <span
  m='2037440'>cluster.</span> </p><p><span m='2042060'>And</span> <span
  m='2042600'>this</span> <span m='2042820'>is</span> <span
  m='2042940'>your</span> <span m='2043080'>cluster.</span> <span
  m='2046220'>So</span> <span m='2046440'>if</span> <span
  m='2046750'>your</span> <span m='2046810'>h</span> <span m='2048170'>k</span>
  <span m='2049090'>1--</span> <span m='2049600'>it</span> <span
  m='2050050'>doesn't</span> <span m='2050310'>really</span> <span
  m='2050440'>matter</span> <span m='2051639'>what</span> <span
  m='2051790'>it</span> <span m='2051870'>is--</span> <span
  m='2052120'>but</span> <span m='2052340'>h</span> <span m='2052500'>k i</span>
  <span m='2053610'>maps</span> <span m='2054090'>to</span> <span
  m='2054190'>this</span> <span m='2054400'>cluster,</span> <span
  m='2055679'>then</span> <span m='2056300'>you're</span> <span
  m='2056489'>going</span> <span m='2056770'>to--</span> <span
  m='2057940'>linear</span> <span m='2058310'>probing</span> <span
  m='2058679'>says</span> <span m='2059100'>that</span> <span
  m='2059600'>the</span> <span m='2059690'>next</span> <span
  m='2059949'>thing</span> <span m='2060070'>you're</span> <span
  m='2060179'>going</span> <span m='2060320'>to</span> <span
  m='2060389'>try</span> <span m='2061239'>is</span> <span m='2061909'>if</span>
  <span m='2062050'>you</span> <span m='2062139'>map</span> <span
  m='2062429'>to</span> <span m='2063670'>42</span> <span m='2064150'>in</span>
  <span m='2064230'>the</span> <span m='2064310'>cluster,</span> <span
  m='2065110'>the</span> <span m='2065190'>next</span> <span
  m='2065360'>thing</span> <span m='2065469'>you're</span> <span
  m='2065560'>going</span> <span m='2065650'>to</span> <span
  m='2065719'>try</span> <span m='2065960'>is</span> <span
  m='2066120'>43,</span> <span m='2066949'>44,</span> <span
  m='2068159'>until</span> <span m='2068389'>you</span> <span
  m='2068540'>get</span> <span m='2068770'>maybe</span> <span
  m='2069159'>to</span> <span m='2069989'>this</span> <span
  m='2070260'>slot</span> <span m='2070570'>here,</span> <span
  m='2071389'>which</span> <span m='2071560'>is</span> <span
  m='2071679'>57,</span> <span m='2072370'>for</span> <span
  m='2072510'>argument's</span> <span m='2072820'>sake.</span> <span
  m='2074270'>Right?</span> </p><p><span m='2074520'>So</span> <span
  m='2074670'>you're</span> <span m='2074780'>going</span> <span
  m='2074870'>to</span> <span m='2074940'>keep</span> <span
  m='2075230'>going,</span> <span m='2075949'>and</span> <span
  m='2076070'>you're</span> <span m='2076190'>going</span> <span
  m='2076310'>to</span> <span m='2076409'>try</span> <span m='2076730'>15</span>
  <span m='2077280'>times</span> <span m='2078460'>in</span> <span
  m='2078679'>this</span> <span m='2079530'>relatively</span> <span
  m='2079989'>dumb</span> <span m='2080300'>fashion</span> <span
  m='2081300'>to</span> <span m='2081380'>go</span> <span
  m='2082250'>down</span> <span m='2083040'>to</span> <span
  m='2083120'>get</span> <span m='2083389'>to</span> <span
  m='2083480'>the</span> <span m='2083820'>open</span> <span
  m='2084100'>slot,</span> <span m='2084580'>which</span> <span
  m='2084639'>is</span> <span m='2084750'>57.</span> <span
  m='2085730'>And</span> <span m='2085980'>oh,</span> <span
  m='2086159'>by</span> <span m='2086350'>the</span> <span
  m='2086440'>way,</span> <span m='2086730'>at</span> <span
  m='2086860'>the</span> <span m='2086920'>end</span> <span
  m='2087100'>of</span> <span m='2087199'>this</span> <span
  m='2087699'>you</span> <span m='2087840'>just</span> <span
  m='2088050'>increased</span> <span m='2088440'>your</span> <span
  m='2088610'>cluster</span> <span m='2089030'>length</span> <span
  m='2089929'>by</span> <span m='2090110'>one.</span> <span
  m='2091159'>All</span> <span m='2091250'>right?</span> <span
  m='2091969'>So</span> <span m='2092489'>it</span> <span
  m='2092550'>doesn't</span> <span m='2092780'>really</span> <span
  m='2092949'>work.</span> </p><p><span m='2093820'>And</span> <span
  m='2094060'>in</span> <span m='2094159'>fact,</span> <span
  m='2095699'>under</span> <span m='2096239'>reasonable</span> <span
  m='2096800'>probabilistic</span> <span m='2097370'>assumptions</span> <span
  m='2098790'>in</span> <span m='2098960'>terms</span> <span
  m='2099250'>of</span> <span m='2099590'>what</span> <span
  m='2099840'>your</span> <span m='2099970'>hash</span> <span
  m='2100200'>functions</span> <span m='2100630'>are,</span> <span
  m='2101780'>you</span> <span m='2101990'>can</span> <span
  m='2102120'>say</span> <span m='2102550'>that</span> <span
  m='2104500'>when</span> <span m='2104750'>you</span> <span
  m='2104840'>have</span> <span m='2105700'>alpha,</span> <span
  m='2106290'>which</span> <span m='2106460'>is</span> <span
  m='2107270'>essentially</span> <span m='2107850'>your</span> <span
  m='2108970'>load</span> <span m='2109260'>factor,</span> <span
  m='2109690'>which</span> <span m='2109820'>is</span> <span
  m='2109920'>n</span> <span m='2110120'>over</span> <span m='2110230'>m</span>
  <span m='2111750'>less</span> <span m='2112090'>than</span> <span
  m='2113300'>0.99,</span> <span m='2115613'>you</span> <span
  m='2116016'>see</span> <span m='2116420'>clusters</span> <span
  m='2118490'>of</span> <span m='2118930'>size</span> <span
  m='2121710'>log</span> <span m='2122010'>n,</span> <span
  m='2123270'>OK?</span> <span m='2124840'>Right.</span> </p><p><span
  m='2125470'>So</span> <span m='2125680'>this</span> <span
  m='2126520'>is</span> <span m='2126600'>a</span> <span
  m='2126680'>probabilistic</span> <span m='2127240'>argument,</span> <span
  m='2128520'>and</span> <span m='2128690'>you're</span> <span
  m='2128810'>assuming</span> <span m='2129250'>that</span> <span
  m='2129530'>you</span> <span m='2129620'>have</span> <span
  m='2129780'>a</span> <span m='2129820'>hash</span> <span
  m='2130050'>function</span> <span m='2130930'>that's</span> <span
  m='2131110'>a</span> <span m='2131180'>pretty</span> <span
  m='2131390'>good</span> <span m='2131540'>hash</span> <span
  m='2131750'>function.</span> <span m='2132045'>So</span> <span
  m='2132340'>h</span> <span m='2132630'>prime</span> <span m='2132970'>k</span>
  <span m='2133750'>can</span> <span m='2133920'>be</span> <span
  m='2134080'>this</span> <span m='2134710'>perfect</span> <span
  m='2135130'>hash</span> <span m='2135350'>function,</span> <span
  m='2136370'>all</span> <span m='2136410'>right?</span> <span
  m='2136680'>So</span> <span m='2136770'>there's</span> <span
  m='2136910'>a</span> <span m='2136970'>problem</span> <span
  m='2137320'>here</span> <span m='2137590'>beyond</span> <span
  m='2138170'>the</span> <span m='2138250'>choice</span> <span
  m='2138670'>of</span> <span m='2138790'>h</span> <span
  m='2139060'>prime</span> <span m='2139350'>k,</span> <span
  m='2140070'>which</span> <span m='2140310'>is</span> <span
  m='2140440'>this</span> <span m='2140590'>hash</span> <span
  m='2140820'>function</span> <span m='2141220'>that</span> <span
  m='2141350'>worked</span> <span m='2141670'>really</span> <span
  m='2142010'>well</span> <span m='2142900'>for</span> <span
  m='2143090'>chaining.</span> <span m='2144080'>All</span> <span
  m='2144140'>right?</span> <span m='2144630'>And</span> <span
  m='2145030'>the</span> <span m='2145230'>problem</span> <span
  m='2145550'>here</span> <span m='2145820'>is</span> <span
  m='2145930'>the</span> <span m='2146010'>linear</span> <span
  m='2146340'>probing</span> <span m='2146720'>aspect</span> <span
  m='2147070'>of</span> <span m='2147200'>it.</span> </p><p><span
  m='2149410'>So</span> <span m='2149590'>what</span> <span
  m='2149710'>does</span> <span m='2149770'>that</span> <span
  m='2149990'>mean?</span> <span m='2150570'>If</span> <span
  m='2150700'>you</span> <span m='2150760'>have</span> <span
  m='2150950'>clusters</span> <span m='2151410'>of</span> <span
  m='2151810'>theta</span> <span m='2152050'>log</span> <span
  m='2152310'>n,</span> <span m='2153590'>then</span> <span
  m='2153800'>your</span> <span m='2153980'>search</span> <span
  m='2154940'>and</span> <span m='2155090'>your</span> <span
  m='2155260'>insert</span> <span m='2156240'>are</span> <span
  m='2156600'>not</span> <span m='2156830'>going</span> <span
  m='2156930'>to</span> <span m='2156970'>be</span> <span
  m='2157040'>constant</span> <span m='2157370'>time</span> <span
  m='2157570'>anymore.</span> <span m='2158560'>Right?</span> <span
  m='2158850'>Which</span> <span m='2158980'>is</span> <span
  m='2159110'>bad</span> <span m='2160370'>in</span> <span m='2160520'>a</span>
  <span m='2160580'>probabilistic</span> <span m='2161170'>sense.</span> <span
  m='2162180'>OK?</span> </p><p><span m='2164080'>So</span> <span
  m='2164260'>how</span> <span m='2164360'>do</span> <span m='2164430'>we</span>
  <span m='2164560'>fix</span> <span m='2164810'>that?</span> <span
  m='2166010'>Well,</span> <span m='2169300'>one</span> <span
  m='2170410'>strategy</span> <span m='2170930'>that</span> <span
  m='2171080'>works</span> <span m='2171360'>reasonably</span> <span
  m='2171810'>well</span> <span m='2174590'>is</span> <span
  m='2174860'>called</span> <span m='2175100'>double</span> <span
  m='2175400'>hashing.</span> <span m='2178590'>And</span> <span
  m='2179140'>it</span> <span m='2179290'>literally</span> <span
  m='2181500'>means</span> <span m='2181910'>what</span> <span m='2182080'>it
  says.</span> <span m='2183120'>You</span> <span m='2183230'>have</span> <span
  m='2183360'>to</span> <span m='2183630'>run</span> <span m='2185120'>a</span>
  <span m='2185240'>couple</span> <span m='2185470'>of</span> <span
  m='2185540'>hashes.</span> <span m='2186970'>And</span> <span
  m='2187210'>so</span> <span m='2187400'>the</span> <span
  m='2187500'>notion</span> <span m='2187800'>of</span> <span
  m='2189190'>double</span> <span m='2189510'>hashing</span> <span
  m='2192830'>is</span> <span m='2193150'>that</span> <span
  m='2194170'>you</span> <span m='2194280'>have</span> <span
  m='2194480'>h</span> <span m='2194826'>k</span> <span m='2195520'>i</span>
  <span m='2197270'>equals</span> <span m='2198120'>h1</span> <span
  m='2198770'>k</span> <span m='2200430'>plus</span> <span m='2202630'>i</span>
  <span m='2203170'>h2</span> <span m='2203720'>k</span> <span
  m='2206220'>mod</span> <span m='2206650'>m.</span> <span
  m='2207910'>And</span> <span m='2208120'>h1</span> <span
  m='2208590'>and</span> <span m='2208800'>h2</span> <span
  m='2208990'>are</span> <span m='2209210'>just</span> <span
  m='2209440'>ordinary</span> <span m='2209890'>hash</span> <span
  m='2210100'>functions.</span> <span m='2211310'>OK?</span> </p><p><span
  m='2213140'>Now</span> <span m='2214770'>the</span> <span
  m='2214870'>first</span> <span m='2215080'>thing</span> <span
  m='2215190'>that</span> <span m='2215290'>we</span> <span
  m='2215380'>need</span> <span m='2215540'>to</span> <span
  m='2215630'>do</span> <span m='2216000'>is</span> <span
  m='2217180'>figure</span> <span m='2217560'>out</span> <span
  m='2217780'>how</span> <span m='2218200'>we</span> <span
  m='2218370'>can</span> <span m='2219160'>guarantee</span> <span
  m='2219780'>a</span> <span m='2219860'>permutation,</span> <span
  m='2221600'>right?</span> <span m='2221910'>Because</span> <span
  m='2222170'>we</span> <span m='2222270'>still</span> <span
  m='2222490'>have</span> <span m='2222710'>that</span> <span
  m='2222870'>requirement,</span> <span m='2223510'>and</span> <span
  m='2223670'>it</span> <span m='2223720'>was</span> <span m='2223840'>OK</span>
  <span m='2224040'>for</span> <span m='2224150'>the</span> <span
  m='2224190'>linear</span> <span m='2224550'>probing</span> <span
  m='2224880'>part,</span> <span m='2225570'>but</span> <span
  m='2225680'>you</span> <span m='2225770'>still</span> <span
  m='2225970'>have</span> <span m='2226130'>this</span> <span
  m='2226260'>requirement</span> <span m='2227270'>that</span> <span
  m='2227590'>you</span> <span m='2227740'>need</span> <span
  m='2228070'>a</span> <span m='2228410'>permutation.</span> <span
  m='2229770'>And</span> <span m='2230010'>so</span> <span
  m='2231650'>those</span> <span m='2231820'>of</span> <span
  m='2231920'>you</span> <span m='2234250'>who are</span> <span
  m='2234430'>into</span> <span m='2234630'>number</span> <span
  m='2234890'>theory,</span> <span m='2235770'>can</span> <span
  m='2235880'>you</span> <span m='2236370'>tell</span> <span
  m='2236580'>me</span> <span m='2237600'>what</span> <span
  m='2237910'>property,</span> <span m='2239210'>what</span> <span
  m='2239410'>neat</span> <span m='2239700'>property</span> <span
  m='2240680'>of</span> <span m='2242550'>h2</span> <span m='2243410'>and</span>
  <span m='2243630'>m</span> <span m='2244560'>can</span> <span
  m='2244700'>we</span> <span m='2244810'>ask</span> <span
  m='2245140'>for</span> <span m='2245510'>to</span> <span
  m='2245600'>guarantee</span> <span m='2246200'>a</span> <span
  m='2246270'>permutation?</span> <span m='2248150'>Do</span> <span
  m='2248540'>you</span> <span m='2248670'>have</span> <span
  m='2248770'>a</span> <span m='2248810'>question?</span> <span
  m='2250124'>You</span> <span m='2250566'>already</span> <span
  m='2251010'>do.</span> <span m='2251310'>Do</span> <span
  m='2251640'>you</span> <span m='2251740'>have</span> <span
  m='2251840'>a</span> <span m='2251870'>question?</span> </p><p><span
  m='2254520'>AUDIENCE: [INAUDIBLE].</span> </p><p><span m='2255980'>PROFESSOR:
  [INAUDIBLE]</span> <span m='2256200'>relatively</span> <span
  m='2256280'>prime.</span> <span m='2256720'>OK,</span> <span
  m='2256890'>good.</span> <span m='2257460'>So</span> <span
  m='2257830'>I</span> <span m='2258080'>figured</span> <span
  m='2258400'>some</span> <span m='2258550'>of</span> <span
  m='2258640'>you</span> <span m='2258890'>knew the</span> <span
  m='2258980'>answer,</span> <span m='2259320'>but</span> <span
  m='2259770'>I've</span> <span m='2259940'>seen</span> <span
  m='2260140'>you</span> <span m='2260230'>before.</span> <span
  m='2262010'>Right.</span> <span m='2262710'>Exactly</span> <span
  m='2263060'>right.</span> <span m='2263300'>Relatively</span> <span
  m='2263770'>prime.</span> <span m='2265300'>Just</span> <span
  m='2265770'>hand</span> <span m='2265920'>it</span> <span
  m='2266000'>to</span> <span m='2266370'>Victor.</span> <span
  m='2267950'>So</span> <span m='2268400'>h2</span> <span m='2268820'>k</span>
  <span m='2269310'>and</span> <span m='2269530'>m</span> <span
  m='2270230'>being</span> <span m='2270490'>relatively</span> <span
  m='2271050'>prime,</span> <span m='2272600'>if</span> <span
  m='2284700'>that</span> <span m='2284860'>implies</span> <span
  m='2285240'>a</span> <span m='2285300'>permutation.</span> <span
  m='2288640'>It's</span> <span m='2288820'>similar</span> <span
  m='2289150'>to</span> <span m='2289230'>what</span> <span
  m='2289370'>we</span> <span m='2289460'>had</span> <span
  m='2289640'>before.</span> <span m='2290050'>You're</span> <span
  m='2290240'>multiplying</span> <span m='2290790'>this</span> <span
  m='2291170'>by</span> <span m='2291410'>i.</span> <span m='2291870'>i</span>
  <span m='2292040'>keeps</span> <span m='2292340'>increasing,</span> <span
  m='2293260'>and</span> <span m='2293350'>you're</span> <span
  m='2293430'>going</span> <span m='2293510'>to</span> <span
  m='2293610'>roll</span> <span m='2293850'>around.</span> <span
  m='2294550'>All</span> <span m='2294610'>right?</span> <span
  m='2294900'>I</span> <span m='2294990'>mean</span> <span
  m='2295080'>you</span> <span m='2295150'>could</span> <span
  m='2295260'>do</span> <span m='2295360'>a</span> <span
  m='2295430'>proof</span> <span m='2295680'>of</span> <span
  m='2295820'>it,</span> <span m='2296020'>but</span> <span
  m='2296400'>I'm</span> <span m='2296570'>not</span> <span
  m='2296710'>going</span> <span m='2296800'>to</span> <span
  m='2296840'>bother.</span> </p><p><span m='2298220'>The</span> <span
  m='2298600'>important</span> <span m='2299020'>thing</span> <span
  m='2299200'>here</span> <span m='2299530'>is</span> <span
  m='2299690'>that</span> <span m='2300230'>you</span> <span
  m='2300360'>can</span> <span m='2300660'>now do</span> <span
  m='2300780'>something</span> <span m='2301100'>as</span> <span
  m='2301260'>simple</span> <span m='2301660'>as</span> <span
  m='2302410'>m</span> <span m='2302620'>equals</span> <span
  m='2302990'>2</span> <span m='2303150'>raised</span> <span
  m='2303460'>to</span> <span m='2303580'>r,</span> <span m='2304760'>and</span>
  <span m='2305030'>h2</span> <span m='2305450'>k</span> <span
  m='2306630'>for</span> <span m='2306950'>all</span> <span m='2307270'>k</span>
  <span m='2309190'>is</span> <span m='2309460'>odd,</span> <span
  m='2311660'>and</span> <span m='2312000'>now</span> <span
  m='2312190'>you're</span> <span m='2312840'>in</span> <span
  m='2313050'>great</span> <span m='2313280'>shape.</span> <span
  m='2313620'>You</span> <span m='2313720'>can</span> <span
  m='2313840'>have</span> <span m='2314160'>your</span> <span
  m='2315190'>array</span> <span m='2315540'>to</span> <span
  m='2315610'>be</span> <span m='2315780'>2</span> <span
  m='2315930'>raised</span> <span m='2316250'>to</span> <span
  m='2316350'>something,</span> <span m='2317000'>which</span> <span
  m='2317180'>is</span> <span m='2317480'>what</span> <span
  m='2317690'>you</span> <span m='2317790'>really</span> <span
  m='2318190'>want.</span> <span m='2319090'>And</span> <span
  m='2319560'>you</span> <span m='2319760'>just</span> <span
  m='2319980'>use</span> <span m='2320190'>h2</span> <span m='2320690'>k.</span>
  <span m='2321360'>You</span> <span m='2321460'>could</span> <span
  m='2321540'>even</span> <span m='2321720'>take</span> <span
  m='2321910'>a</span> <span m='2321960'>regular</span> <span
  m='2322260'>hash</span> <span m='2322480'>function</span> <span
  m='2323390'>and</span> <span m='2326140'>truncate</span> <span
  m='2326550'>it</span> <span m='2327235'>to</span> <span
  m='2327510'>make</span> <span m='2327670'>sure</span> <span
  m='2327890'>it's</span> <span m='2328000'>odd.</span> <span
  m='2328800'>You</span> <span m='2328930'>can</span> <span
  m='2329000'>do</span> <span m='2329100'>a</span> <span
  m='2329150'>bunch</span> <span m='2329360'>of</span> <span
  m='2329430'>things.</span> <span m='2330140'>There's</span> <span
  m='2330780'>hash</span> <span m='2330960'>functions</span> <span
  m='2331360'>that</span> <span m='2331550'>produce</span> <span
  m='2331850'>odd</span> <span m='2332010'>values,</span> <span
  m='2332980'>and</span> <span m='2333130'>you</span> <span
  m='2333220'>can</span> <span m='2333300'>use</span> <span
  m='2333520'>that.</span> <span m='2334380'>All</span> <span
  m='2334460'>right?</span> </p><p><span m='2335180'>And</span> <span
  m='2335350'>so</span> <span m='2335410'>double</span> <span
  m='2335660'>hashing</span> <span m='2336000'>works</span> <span
  m='2336480'>fairly</span> <span m='2336800'>well</span> <span
  m='2337010'>in</span> <span m='2337100'>practice.</span> <span
  m='2338560'>It's</span> <span m='2339340'>a</span> <span
  m='2339390'>good</span> <span m='2341570'>way</span> <span
  m='2341980'>of</span> <span m='2342830'>getting</span> <span
  m='2343160'>open</span> <span m='2343420'>addressing</span> <span
  m='2343860'>to</span> <span m='2343940'>work.</span> <span
  m='2345290'>And</span> <span m='2347050'>in</span> <span
  m='2347210'>order</span> <span m='2347370'>to</span> <span
  m='2347440'>prove</span> <span m='2347750'>that</span> <span
  m='2347910'>open</span> <span m='2348150'>addressing</span> <span
  m='2348490'>actually</span> <span m='2348810'>works</span> <span
  m='2350800'>to</span> <span m='2350890'>the</span> <span
  m='2350990'>level</span> <span m='2351310'>at</span> <span
  m='2351430'>which</span> <span m='2352350'>chaining</span> <span
  m='2352830'>works,</span> <span m='2354200'>we</span> <span
  m='2354410'>have</span> <span m='2354700'>to</span> <span
  m='2356190'>make</span> <span m='2356500'>an</span> <span
  m='2356570'>assumption</span> <span m='2357830'>corresponding</span> <span
  m='2358380'>to</span> <span m='2359710'>uniform</span> <span
  m='2360290'>hashing.</span> <span m='2360960'>And</span> <span
  m='2361320'>I'm</span> <span m='2361440'>not</span> <span
  m='2361580'>going</span> <span m='2361690'>to</span> <span
  m='2361730'>actually</span> <span m='2362030'>do</span> <span
  m='2364810'>a</span> <span m='2364910'>proof,</span> <span
  m='2365390'>but</span> <span m='2365680'>it'll</span> <span
  m='2365840'>be</span> <span m='2365960'>in</span> <span m='2366030'>the</span>
  <span m='2366120'>notes.</span> </p><p><span m='2367320'>But</span> <span
  m='2367510'>I</span> <span m='2367580'>do</span> <span m='2367720'>want</span>
  <span m='2367880'>to</span> <span m='2368510'>talk</span> <span
  m='2368770'>about</span> <span m='2370710'>the</span> <span
  m='2371190'>theorem</span> <span m='2371850'>and</span> <span
  m='2373070'>the</span> <span m='2373240'>result</span> <span
  m='2373720'>that</span> <span m='2373840'>the</span> <span
  m='2375160'>theorem</span> <span m='2375570'>implies,</span> <span
  m='2376830'>assuming</span> <span m='2378320'>you</span> <span
  m='2378410'>have</span> <span m='2378650'>the</span> <span
  m='2378730'>uniform</span> <span m='2379180'>hashing</span> <span
  m='2379550'>assumption.</span> <span m='2380700'>And</span> <span
  m='2381260'>let</span> <span m='2381390'>me</span> <span
  m='2381520'>first</span> <span m='2381770'>say</span> <span
  m='2381960'>that</span> <span m='2382140'>this</span> <span
  m='2382280'>is</span> <span m='2382420'>not</span> <span
  m='2383580'>the</span> <span m='2383720'>same</span> <span
  m='2384170'>as</span> <span m='2385590'>simple</span> <span
  m='2386050'>uniform</span> <span m='2386460'>happening,</span> <span
  m='2389790'>which</span> <span m='2389920'>talks</span> <span
  m='2390270'>about</span> <span m='2390490'>the</span> <span
  m='2390550'>independence</span> <span m='2392020'>of</span> <span
  m='2392210'>keys</span> <span m='2393300'>in</span> <span
  m='2393470'>terms</span> <span m='2393730'>of</span> <span
  m='2393860'>their</span> <span m='2394020'>mapping</span> <span
  m='2394410'>to</span> <span m='2394540'>slots.</span> <span
  m='2395650'>The</span> <span m='2395750'>uniform</span> <span
  m='2396190'>hashing</span> <span m='2396560'>assumption</span> <span
  m='2397730'>says</span> <span m='2397980'>that</span> <span
  m='2398460'>each</span> <span m='2398780'>key</span> <span
  m='2402080'>is</span> <span m='2402520'>equally</span> <span
  m='2402950'>likely</span> <span m='2408390'>to</span> <span
  m='2408520'>have</span> <span m='2411230'>any</span> <span
  m='2411590'>one</span> <span m='2413550'>of</span> <span
  m='2413740'>the</span> <span m='2414340'>m</span> <span
  m='2414600'>factorial</span> <span m='2417120'>permutations--</span> <span
  m='2419250'>so</span> <span m='2419380'>we're</span> <span
  m='2419460'>talking</span> <span m='2419640'>about</span> <span
  m='2419810'>random</span> <span m='2420240'>permutations</span> <span
  m='2421020'>here--</span> <span m='2423780'>as</span> <span
  m='2424060'>its</span> <span m='2424250'>probe</span> <span
  m='2424490'>sequence.</span> <span m='2431080'>All</span> <span
  m='2431170'>right?</span> </p><p><span m='2431650'>This</span> <span
  m='2432140'>is</span> <span m='2432310'>very</span> <span
  m='2432480'>hard</span> <span m='2432750'>to</span> <span
  m='2432800'>get</span> <span m='2432990'>in</span> <span
  m='2433090'>practice.</span> <span m='2433930'>You</span> <span
  m='2434080'>can</span> <span m='2434630'>get</span> <span
  m='2434780'>pretty</span> <span m='2435000'>close</span> <span
  m='2435380'>using</span> <span m='2435690'>double</span> <span
  m='2435930'>hashing.</span> <span m='2438110'>But</span> <span
  m='2438370'>nobody's</span> <span m='2438690'>discovered</span> <span
  m='2439610'>a</span> <span m='2439770'>perfect</span> <span
  m='2440430'>hash</span> <span m='2440670'>function,</span> <span
  m='2441120'>deterministic</span> <span m='2441700'>hash</span> <span
  m='2441940'>function</span> <span m='2442770'>that</span> <span
  m='2443080'>satisfies</span> <span m='2443640'>this</span> <span
  m='2444310'>property.</span> <span m='2444650'>At</span> <span
  m='2444710'>least</span> <span m='2445020'>not</span> <span
  m='2445190'>that</span> <span m='2445290'>I</span> <span
  m='2445350'>know</span> <span m='2445530'>off.</span> </p><p><span
  m='2448290'>So</span> <span m='2448480'>what</span> <span m='2448600'>does
  this</span> <span m='2448830'>imply?</span> <span m='2449380'>Assuming</span>
  <span m='2449650'>that</span> <span m='2450520'>you</span> <span
  m='2450770'>have</span> <span m='2451050'>this</span> <span
  m='2451330'>and</span> <span m='2451990'>double</span> <span
  m='2452220'>hatching</span> <span m='2453340'>gives</span> <span
  m='2453710'>you</span> <span m='2454820'>this</span> <span
  m='2455090'>property,</span> <span m='2456550'>to</span> <span
  m='2456690'>a</span> <span m='2456740'>large</span> <span
  m='2457000'>extent</span> <span m='2458360'>what</span> <span
  m='2458540'>this</span> <span m='2458690'>means</span> <span
  m='2459020'>is</span> <span m='2459180'>that</span> <span
  m='2459990'>if</span> <span m='2460160'>alpha</span> <span
  m='2460750'>is</span> <span m='2461230'>n</span> <span m='2461450'>over</span>
  <span m='2461740'>m,</span> <span m='2462890'>you</span> <span
  m='2463050'>can</span> <span m='2463170'>show</span> <span
  m='2463650'>that</span> <span m='2469090'>the</span> <span
  m='2469660'>cost</span> <span m='2471510'>of</span> <span
  m='2472840'>operations</span> <span m='2473420'>such</span> <span
  m='2473730'>as</span> <span m='2475070'>search,</span> <span
  m='2477180'>insert,</span> <span m='2477840'>delete,</span> <span
  m='2478280'>et</span> <span m='2478620'>cetera.</span> <span
  m='2479690'>And</span> <span m='2479860'>in</span> <span
  m='2479950'>particular</span> <span m='2480340'>we</span> <span
  m='2480440'>talk</span> <span m='2480660'>about</span> <span
  m='2481540'>insert</span> <span m='2482740'>is</span> <span
  m='2483100'>less</span> <span m='2483340'>than</span> <span
  m='2483510'>or</span> <span m='2483650'>equal</span> <span
  m='2483960'>to</span> <span m='2484090'>1</span> <span
  m='2484440'>divided</span> <span m='2484760'>by</span> <span
  m='2484910'>1</span> <span m='2485150'>minus</span> <span
  m='2485470'>alpha.</span> <span m='2487210'>OK?</span> </p><p><span
  m='2489150'>So</span> <span m='2489650'>obviously</span> <span
  m='2490010'>this</span> <span m='2490220'>goes</span> <span
  m='2491120'>as</span> <span m='2491620'>alpha</span> <span
  m='2492200'>tends</span> <span m='2492540'>to</span> <span
  m='2492650'>1.</span> <span m='2493650'>As</span> <span
  m='2493850'>alpha</span> <span m='2494160'>tends</span> <span
  m='2494480'>to</span> <span m='2494590'>1,</span> <span m='2496990'>the</span>
  <span m='2497440'>load</span> <span m='2497740'>factor</span> <span
  m='2498190'>in</span> <span m='2498290'>the</span> <span
  m='2498410'>table</span> <span m='2499610'>gets</span> <span
  m='2499950'>large,</span> <span m='2500990'>and</span> <span
  m='2501330'>the</span> <span m='2501430'>number</span> <span
  m='2501770'>of</span> <span m='2502380'>expected</span> <span
  m='2503130'>probes</span> <span m='2504180'>that</span> <span
  m='2504340'>you</span> <span m='2504420'>need</span> <span
  m='2504640'>to</span> <span m='2504730'>do</span> <span
  m='2505030'>when</span> <span m='2505140'>you</span> <span
  m='2505260'>get</span> <span m='2505420'>an</span> <span
  m='2505520'>insert</span> <span m='2506810'>grows.</span> <span
  m='2507920'>And</span> <span m='2508110'>if</span> <span
  m='2508200'>alpha</span> <span m='2508450'>is</span> <span
  m='2508580'>0.99,</span> <span m='2510130'>you're</span> <span
  m='2510450'>going,</span> <span m='2510880'>on</span> <span
  m='2511080'>average,</span> <span m='2512130'>require</span> <span
  m='2512630'>100</span> <span m='2513040'>probes.</span> <span
  m='2514200'>It's</span> <span m='2514460'>a</span> <span
  m='2514530'>constant</span> <span m='2514920'>number,</span> <span
  m='2515250'>but</span> <span m='2515410'>it's</span> <span
  m='2515540'>a</span> <span m='2515590'>pretty</span> <span
  m='2515760'>bad</span> <span m='2516010'>constant.</span> <span
  m='2516980'>Right?</span> </p><p><span m='2517460'>So</span> <span
  m='2517600'>you</span> <span m='2517820'>really</span> <span
  m='2518050'>want</span> <span m='2519030'>alpha</span> <span
  m='2519470'>to</span> <span m='2519560'>be</span> <span
  m='2519800'>fairly</span> <span m='2520160'>small.</span> <span
  m='2521050'>And</span> <span m='2521320'>in</span> <span
  m='2521780'>practice</span> <span m='2521900'>it</span> <span
  m='2522030'>turns</span> <span m='2522280'>out</span> <span
  m='2522480'>that</span> <span m='2523020'>you</span> <span m='2523130'>have
  to</span> <span m='2523240'>re-size</span> <span m='2523920'>you're</span>
  <span m='2524170'>open</span> <span m='2524370'>addressing</span> <span
  m='2524760'>table</span> <span m='2525720'>when</span> <span
  m='2526040'>alpha</span> <span m='2526380'>gets</span> <span
  m='2527080'>beyond</span> <span m='2527430'>about</span> <span
  m='2527650'>0.5,</span> <span m='2528300'>0.6</span> <span
  m='2528870'>or</span> <span m='2528990'>so,</span> <span
  m='2530190'>because</span> <span m='2530420'>by</span> <span
  m='2530570'>then</span> <span m='2531200'>you're</span> <span
  m='2531380'>really</span> <span m='2531640'>in</span> <span
  m='2532410'>trouble.</span> <span m='2533190'>Remember</span> <span
  m='2533300'>this</span> <span m='2533420'>is</span> <span
  m='2533470'>an</span> <span m='2533580'>average</span> <span
  m='2534000'>case</span> <span m='2534310'>we're</span> <span
  m='2534520'>talking</span> <span m='2534770'>about.</span> <span
  m='2535340'>All</span> <span m='2535480'>of</span> <span
  m='2535580'>this</span> <span m='2535810'>is</span> <span
  m='2535960'>using</span> <span m='2536280'>a</span> <span
  m='2536650'>probabilistic</span> <span m='2537210'>assumption.</span>
  </p><p><span m='2538250'>But</span> <span m='2538990'>as</span> <span
  m='2539220'>you</span> <span m='2539320'>get</span> <span
  m='2539550'>to</span> <span m='2539810'>high</span> <span
  m='2540060'>alphas,</span> <span m='2540860'>suddenly</span> <span
  m='2541780'>by</span> <span m='2542000'>the time</span> <span
  m='2542140'>you</span> <span m='2542220'>get</span> <span
  m='2542350'>to</span> <span m='2542430'>0.7,</span> <span
  m='2543430'>open</span> <span m='2543670'>addressing</span> <span
  m='2544720'>doesn't</span> <span m='2544960'>work</span> <span
  m='2545180'>well</span> <span m='2545810'>in</span> <span
  m='2545930'>relation</span> <span m='2546360'>to</span> <span
  m='2547030'>an</span> <span m='2547090'>equivalent</span> <span
  m='2548000'>table</span> <span m='2548930'>with</span> <span
  m='2549550'>the</span> <span m='2549750'>overall</span> <span
  m='2550200'>number</span> <span m='2550440'>of</span> <span
  m='2550500'>slots</span> <span m='2551540'>that</span> <span
  m='2552460'>correspond</span> <span m='2553030'>to</span> <span
  m='2553150'>a</span> <span m='2553230'>changing</span> <span
  m='2553660'>table,</span> <span m='2554630'>OK?</span> <span
  m='2555190'>So</span> <span m='2556890'>open</span> <span
  m='2557110'>addressing</span> <span m='2557610'>is</span> <span
  m='2557780'>easy</span> <span m='2558060'>to</span> <span
  m='2558110'>implement.</span> <span m='2559020'>It</span> <span
  m='2559220'>uses</span> <span m='2559580'>less</span> <span
  m='2559800'>memory</span> <span m='2560510'>because</span> <span
  m='2560670'>you</span> <span m='2560750'>don't</span> <span
  m='2560880'>need</span> <span m='2561040'>pointers.</span> <span
  m='2562170'>But</span> <span m='2562640'>you</span> <span
  m='2562770'>better</span> <span m='2562950'>be</span> <span
  m='2563080'>careful</span> <span m='2563940'>that</span> <span
  m='2564140'>your</span> <span m='2564310'>alpha</span> <span
  m='2565080'>stays</span> <span m='2566160'>around</span> <span
  m='2566750'>0.5</span> <span m='2567370'>and</span> <span
  m='2567660'>no</span> <span m='2567840'>more.</span> </p><p><span
  m='2568480'>So</span> <span m='2568840'>all</span> <span
  m='2569010'>that</span> <span m='2569120'>means</span> <span
  m='2569380'>is</span> <span m='2569980'>you can</span> <span
  m='2570180'>still</span> <span m='2570360'>use</span> <span
  m='2570590'>it.</span> <span m='2570880'>You</span> <span
  m='2571000'>just</span> <span m='2571220'>have</span> <span
  m='2571340'>to</span> <span m='2571440'>re-size</span> <span
  m='2571890'>your</span> <span m='2572020'>table.</span> <span
  m='2572690'>You</span> <span m='2572810'>have</span> <span
  m='2572940'>slightly</span> <span m='2573260'>different</span> <span
  m='2573510'>strategies</span> <span m='2574130'>for</span> <span
  m='2574270'>resizing</span> <span m='2574790'>your</span> <span
  m='2574950'>table</span> <span m='2575670'>when you</span> <span
  m='2575790'>use</span> <span m='2576180'>open</span> <span
  m='2576430'>addressing</span> <span m='2577430'>as</span> <span
  m='2577630'>opposed</span> <span m='2578010'>to</span> <span
  m='2581960'>chaining</span> <span m='2582220'>hash</span> <span
  m='2582430'>tables.</span> <span m='2583580'>All</span> <span
  m='2583650'>right?</span> <span m='2584350'>So</span> <span
  m='2584480'>that's</span> <span m='2584710'>a</span> <span
  m='2584760'>summary</span> <span m='2585100'>of</span> <span
  m='2585190'>open</span> <span m='2585410'>addressing.</span> <span
  m='2586130'>I</span> <span m='2586220'>want</span> <span m='2586370'>to</span>
  <span m='2586600'>spend</span> <span m='2586850'>some</span> <span
  m='2586970'>time</span> <span m='2587320'>on</span> <span
  m='2588300'>cryptographic</span> <span m='2588740'>hashes</span> <span
  m='2589670'>in</span> <span m='2589750'>the</span> <span
  m='2589840'>time</span> <span m='2590040'>that</span> <span
  m='2590150'>I</span> <span m='2590180'>have</span> <span
  m='2590350'>left.</span> <span m='2590600'>I</span> <span
  m='2590640'>guess</span> <span m='2590830'>I have a</span> <span
  m='2591090'>few</span> <span m='2591230'>minutes</span> <span
  m='2591460'>left.</span> <span m='2592380'>But</span> <span
  m='2593160'>any</span> <span m='2593310'>questions</span> <span
  m='2595050'>about</span> <span m='2595310'>open</span> <span
  m='2595520'>addressing?</span> <span m='2595940'>Yep?</span> </p><p><span
  m='2597114'>AUDIENCE: On</span> <span m='2597531'>this</span> <span
  m='2597950'>delete</span> <span m='2598290'>part,</span> <span
  m='2598630'>what's going</span> <span m='2599120'>to happen</span> <span
  m='2599610'>if,</span> <span m='2600100'>say, you fill</span> <span
  m='2600590'>the table up</span> <span m='2601080'>and then</span> <span
  m='2601570'>delete</span> <span m='2602060'>everything,</span> <span
  m='2602550'>and then</span> <span m='2603040'>you start</span> <span
  m='2603530'>searching.</span> <span m='2604020'>Isn't that</span> <span
  m='2604510'>going to</span> <span m='2605000'>be bad</span> <span
  m='2605490'>because</span> <span m='2605980'>it's going to</span> <span
  m='2606470'>search through everything?</span> </p><p><span
  m='2606970'>PROFESSOR: So</span> <span m='2608030'>that's</span> <span
  m='2608230'>right.</span> <span m='2609680'>The</span> <span
  m='2609770'>bad</span> <span m='2610000'>thing</span> <span
  m='2610290'>about</span> <span m='2610640'>open</span> <span
  m='2610840'>addressing</span> <span m='2611210'>is</span> <span
  m='2611330'>that</span> <span m='2612130'>delete</span> <span
  m='2612500'>isn't</span> <span m='2612760'>instantaneous,</span> <span
  m='2614420'>right?</span> <span m='2614990'>In</span> <span
  m='2615320'>the</span> <span m='2615410'>sense</span> <span
  m='2615630'>that</span> <span m='2615740'>if</span> <span
  m='2615810'>you</span> <span m='2615890'>deleted</span> <span
  m='2616290'>something</span> <span m='2616650'>from</span> <span
  m='2616910'>the</span> <span m='2617020'>link</span> <span
  m='2617300'>list</span> <span m='2617890'>in</span> <span
  m='2618000'>your</span> <span m='2618150'>chaining</span> <span
  m='2618530'>table,</span> <span m='2619260'>then</span> <span
  m='2619760'>even</span> <span m='2620000'>if</span> <span
  m='2620080'>you</span> <span m='2620190'>went</span> <span
  m='2620430'>to</span> <span m='2620520'>that</span> <span
  m='2621080'>same</span> <span m='2621320'>thing,</span> <span
  m='2621510'>the</span> <span m='2621670'>chain</span> <span
  m='2621960'>got</span> <span m='2622180'>smaller,</span> <span
  m='2623470'>and</span> <span m='2623880'>that</span> <span
  m='2624080'>helps</span> <span m='2624300'>you,</span> <span
  m='2624530'>because</span> <span m='2624800'>your</span> <span
  m='2624920'>table</span> <span m='2625370'>now</span> <span
  m='2625450'>has</span> <span m='2625700'>lower</span> <span
  m='2625980'>load.</span> <span m='2626850'>But</span> <span
  m='2627050'>there's</span> <span m='2627220'>a</span> <span
  m='2627330'>delay</span> <span m='2627770'>associated</span> <span
  m='2628220'>with</span> <span m='2628370'>load</span> <span
  m='2629990'>when</span> <span m='2630450'>you</span> <span
  m='2630550'>have</span> <span m='2630760'>the</span> <span
  m='2630840'>delete</span> <span m='2631130'>me</span> <span
  m='2631280'>flag.</span> <span m='2632210'>OK?</span> </p><p><span
  m='2632630'>So</span> <span m='2632750'>in</span> <span
  m='2632840'>some</span> <span m='2633020'>sense</span> <span
  m='2633300'>the</span> <span m='2633420'>alpha</span> <span
  m='2633850'>that</span> <span m='2633980'>you</span> <span
  m='2634080'>want</span> <span m='2634220'>to</span> <span
  m='2634320'>think</span> <span m='2634610'>about,</span> <span
  m='2636610'>you</span> <span m='2637510'>should</span> <span
  m='2637640'>be</span> <span m='2637730'>careful</span> <span
  m='2638480'>as</span> <span m='2638650'>to</span> <span m='2638730'>how</span>
  <span m='2638870'>you</span> <span m='2638990'>define</span> <span
  m='2639350'>alpha.</span> <span m='2639900'>And</span> <span
  m='2639940'>that's</span> <span m='2640090'>one</span> <span
  m='2640250'>of</span> <span m='2640300'>the</span> <span
  m='2640370'>reasons</span> <span m='2640680'>why</span> <span
  m='2641190'>when</span> <span m='2641740'>you</span> <span
  m='2641850'>get</span> <span m='2642190'>alpha</span> <span
  m='2642570'>being</span> <span m='2642770'>0.5,</span> <span
  m='2643440'>0.6</span> <span m='2644120'>you</span> <span
  m='2644240'>get</span> <span m='2644360'>into</span> <span
  m='2644520'>trouble,</span> <span m='2645150'>because</span> <span
  m='2645310'>if</span> <span m='2645380'>you</span> <span
  m='2645460'>have</span> <span m='2645630'>all</span> <span
  m='2645770'>these</span> <span m='2645970'>delete</span> <span
  m='2646290'>me</span> <span m='2646450'>flags,</span> <span
  m='2646755'>they're</span> <span m='2647060'>still</span> <span
  m='2647350'>hurting</span> <span m='2647780'>you.</span> </p><p><span
  m='2649080'>AUDIENCE: And</span> <span m='2649280'>when you</span> <span
  m='2649753'>resize</span> <span m='2650226'>do those</span> <span
  m='2650699'>delete me</span> <span m='2651172'>flags get</span> <span
  m='2651645'>deleted?</span> </p><p><span m='2652880'>PROFESSOR: When</span>
  <span m='2653050'>you</span> <span m='2653540'>completely</span> <span
  m='2653930'>resize</span> <span m='2654210'>and</span> <span
  m='2654490'>you</span> <span m='2654640'>redo</span> <span
  m='2654920'>the</span> <span m='2655040'>whole</span> <span
  m='2655240'>thing,</span> <span m='2655410'>then</span> <span
  m='2655590'>you</span> <span m='2655720'>can</span> <span
  m='2655980'>clean</span> <span m='2656210'>up</span> <span
  m='2656360'>the</span> <span m='2656460'>delete</span> <span
  m='2656750'>me's</span> <span m='2656960'>and</span> <span
  m='2657070'>turn</span> <span m='2657230'>them</span> <span
  m='2657370'>into</span> <span m='2657530'>nones</span> <span
  m='2657920'>because</span> <span m='2658750'>you're</span> <span
  m='2659270'>rehashing</span> <span m='2659535'>it.</span> <span
  m='2662210'>All</span> <span m='2662270'>right.</span> <span
  m='2662850'>So</span> <span m='2663580'>yeah,</span> <span
  m='2664040'>back</span> <span m='2664190'>there.</span> <span
  m='2664360'>Question?</span> </p><p><span m='2664840'>AUDIENCE: Yes,</span>
  <span m='2665225'>can</span> <span m='2665610'>you</span> <span
  m='2665940'>explain  how you</span> <span m='2666130'>got the</span> <span
  m='2666310'>equation</span> <span m='2666530'>that the</span> <span
  m='2666820'>cost</span> <span m='2667210'>of</span> <span
  m='2667520'>operation</span> <span m='2667790'>insert</span> <span
  m='2668065'>is less</span> <span m='2668340'>than</span> <span m='2668747'>or
  equal</span> <span m='2669154'>to</span> <span m='2669561'>1 over</span> <span
  m='2669970'>[INAUDIBLE].</span> </p><p><span m='2671140'>PROFESSOR: That's
  a</span> <span m='2671220'>longish</span> <span m='2671690'>proof,</span>
  <span m='2672410'>but</span> <span m='2672810'>let</span> <span
  m='2672920'>me</span> <span m='2673360'>explain</span> <span
  m='2673750'>to</span> <span m='2674160'>you</span> <span
  m='2674980'>how</span> <span m='2675220'>that</span> <span
  m='2675390'>comes</span> <span m='2675620'>out.</span> <span
  m='2676630'>Basically</span> <span m='2677700'>the</span> <span
  m='2678200'>intuition</span> <span m='2678750'>behind</span> <span
  m='2679020'>the</span> <span m='2679100'>proof</span> <span
  m='2679370'>is</span> <span m='2679540'>that</span> <span
  m='2680310'>we're</span> <span m='2680460'>going</span> <span
  m='2680750'>to</span> <span m='2682840'>assume</span> <span
  m='2683050'>some</span> <span m='2683270'>probability</span> <span
  m='2683910'>p.</span> <span m='2685080'>And</span> <span
  m='2685470'>initially</span> <span m='2687190'>you're</span> <span
  m='2687780'>going</span> <span m='2687890'>to</span> <span
  m='2687960'>say</span> <span m='2688110'>something</span> <span
  m='2688410'>like</span> <span m='2689110'>if</span> <span
  m='2689870'>the</span> <span m='2690050'>table,</span> <span
  m='2693710'>your</span> <span m='2694160'>p--</span> <span
  m='2694760'>I'll</span> <span m='2694910'>just</span> <span
  m='2695070'>write</span> <span m='2695230'>this</span> <span
  m='2695390'>out</span> <span m='2695600'>here--</span> <span
  m='2698080'>is</span> <span m='2698460'>m</span> <span
  m='2698720'>minus</span> <span m='2699890'>n</span> <span
  m='2700280'>divided</span> <span m='2700680'>by</span> <span
  m='2700880'>m.</span> <span m='2702300'>So</span> <span
  m='2702450'>what</span> <span m='2702600'>is</span> <span
  m='2702720'>that?</span> <span m='2703350'>Right</span> <span
  m='2703650'>now</span> <span m='2703820'>I</span> <span
  m='2703940'>have</span> <span m='2704520'>n</span> <span
  m='2704860'>elements</span> <span m='2705450'>in</span> <span
  m='2705680'>the</span> <span m='2705800'>table,</span> <span
  m='2706620'>and</span> <span m='2706800'>I</span> <span
  m='2706840'>have</span> <span m='2707440'>m</span> <span
  m='2708450'>slots,</span> <span m='2709550'>OK?</span> </p><p><span
  m='2712390'>So</span> <span m='2713460'>the</span> <span
  m='2713560'>probability</span> <span m='2714220'>that</span> <span
  m='2714480'>my</span> <span m='2714630'>very</span> <span
  m='2714940'>first</span> <span m='2715340'>trial</span> <span
  m='2716200'>is</span> <span m='2716380'>going</span> <span
  m='2716530'>to</span> <span m='2716610'>succeed</span> <span
  m='2717530'>is</span> <span m='2717710'>going</span> <span
  m='2717960'>to</span> <span m='2718070'>be</span> <span m='2719060'>m</span>
  <span m='2719270'>minus</span> <span m='2719770'>n</span> <span
  m='2720140'>divided</span> <span m='2720480'>by</span> <span
  m='2720710'>m,</span> <span m='2721820'>because</span> <span
  m='2722130'>these</span> <span m='2722360'>are</span> <span
  m='2722430'>the</span> <span m='2722520'>number</span> <span
  m='2722770'>of</span> <span m='2722980'>empty</span> <span
  m='2723390'>slots.</span> <span m='2724250'>And</span> <span
  m='2724420'>assuming</span> <span m='2724790'>my</span> <span
  m='2724970'>permutation</span> <span m='2725720'>argument,</span> <span
  m='2726580'>I</span> <span m='2726700'>could</span> <span
  m='2726860'>go</span> <span m='2727020'>into</span> <span
  m='2727210'>one</span> <span m='2727390'>of</span> <span
  m='2727490'>them.</span> <span m='2728240'>And</span> <span
  m='2728390'>so</span> <span m='2728470'>that's</span> <span
  m='2728660'>what</span> <span m='2728820'>I</span> <span
  m='2728880'>have</span> <span m='2729080'>here.</span> <span
  m='2730260'>And</span> <span m='2730390'>if</span> <span
  m='2730460'>you</span> <span m='2730540'>look</span> <span
  m='2730680'>at</span> <span m='2730750'>what</span> <span
  m='2730940'>this</span> <span m='2731303'>is,</span> <span
  m='2731666'>this</span> <span m='2732030'>is</span> <span m='2732870'>1</span>
  <span m='2733260'>minus</span> <span m='2734220'>alpha,</span> <span
  m='2735380'>OK?</span> </p><p><span m='2736010'>And</span> <span
  m='2736200'>so</span> <span m='2736430'>then</span> <span
  m='2736700'>you</span> <span m='2736960'>run</span> <span
  m='2737170'>off</span> <span m='2737460'>and</span> <span
  m='2737590'>you</span> <span m='2737820'>remember</span> <span
  m='2738470'>6041</span> <span m='2739290'>or</span> <span
  m='2739410'>the</span> <span m='2740060'>high</span> <span
  m='2740240'>school</span> <span m='2740470'>probability</span> <span
  m='2740960'>course that</span> <span m='2741370'>you</span> <span
  m='2741470'>take,</span> <span m='2742020'>and</span> <span
  m='2742140'>you</span> <span m='2742230'>say</span> <span
  m='2743000'>generally</span> <span m='2743390'>speaking,</span> <span
  m='2744380'>you're</span> <span m='2744530'>going</span> <span
  m='2744630'>to</span> <span m='2744670'>be</span> <span m='2744760'>no</span>
  <span m='2745010'>worse</span> <span m='2745380'>than</span> <span
  m='2745550'>p</span> <span m='2746170'>for</span> <span
  m='2746350'>every</span> <span m='2746630'>trial.</span> <span
  m='2747470'>And</span> <span m='2747680'>so</span> <span m='2747880'>if</span>
  <span m='2748040'>you</span> <span m='2748380'>assume</span> <span
  m='2748700'>the</span> <span m='2748810'>worst</span> <span
  m='2749150'>and</span> <span m='2749270'>say</span> <span
  m='2749840'>every</span> <span m='2750100'>trial</span> <span
  m='2750440'>has</span> <span m='2750610'>a</span> <span
  m='2750670'>probability</span> <span m='2751240'>of</span> <span
  m='2751320'>success</span> <span m='2751665'>of</span> <span
  m='2752010'>p,</span> <span m='2752390'>the</span> <span
  m='2752640'>expected</span> <span m='2753130'>number</span> <span
  m='2753350'>of</span> <span m='2753430'>trials</span> <span
  m='2753800'>is</span> <span m='2753920'>1/p,</span> <span
  m='2755460'>OK?</span> <span m='2756040'>And</span> <span
  m='2756230'>that's</span> <span m='2756380'>how</span> <span
  m='2756470'>you</span> <span m='2756590'>got</span> <span
  m='2756740'>the</span> <span m='2756830'>1</span> <span
  m='2756990'>over</span> <span m='2757800'>1</span> <span
  m='2758020'>minus</span> <span m='2758260'>alpha.</span> <span
  m='2760080'>So</span> <span m='2760260'>you'll</span> <span
  m='2760560'>see</span> <span m='2760700'>that</span> <span
  m='2761170'>written</span> <span m='2761410'>in</span> <span
  m='2761610'>gory</span> <span m='2761890'>detail</span> <span
  m='2762660'>in</span> <span m='2762800'>the</span> <span
  m='2762870'>notes.</span> <span m='2764030'>All</span> <span
  m='2764130'>right?</span> <span m='2765030'>OK.</span> </p><p><span
  m='2766270'>Expected</span> <span m='2766520'>to</span> <span
  m='2766580'>have</span> <span m='2766750'>a</span> <span
  m='2766780'>little</span> <span m='2766920'>more</span> <span
  m='2767080'>time</span> <span m='2768370'>in</span> <span
  m='2768640'>terms</span> <span m='2768900'>of</span> <span
  m='2769000'>talking</span> <span m='2769300'>about</span> <span
  m='2770020'>cryptographic</span> <span m='2770580'>hashes,</span> <span
  m='2771380'>but</span> <span m='2771730'>cryptographic</span> <span
  m='2772540'>hashes</span> <span m='2773070'>are</span> <span
  m='2773210'>not</span> <span m='2773470'>going</span> <span
  m='2773590'>to</span> <span m='2773630'>be</span> <span m='2773750'>on</span>
  <span m='2773850'>the</span> <span m='2773940'>quiz.</span> <span
  m='2775040'>This</span> <span m='2775230'>is</span> <span
  m='2775750'>purely</span> <span m='2777750'>material</span> <span
  m='2778510'>FYI.</span> <span m='2779920'>For</span> <span
  m='2780170'>your</span> <span m='2780420'>interest</span> <span
  m='2780820'>only.</span> <span m='2782160'>And</span> <span
  m='2783460'>again</span> <span m='2783690'>I</span> <span
  m='2783710'>have</span> <span m='2783860'>some</span> <span
  m='2784000'>notes</span> <span m='2784270'>on</span> <span
  m='2784420'>it,</span> <span m='2784580'>but</span> <span m='2784730'>I</span>
  <span m='2784800'>want</span> <span m='2784940'>to</span> <span
  m='2784990'>give</span> <span m='2785120'>you</span> <span
  m='2785250'>a</span> <span m='2785320'>sense</span> <span
  m='2785690'>of</span> <span m='2785910'>the</span> <span
  m='2786320'>other</span> <span m='2786610'>kinds</span> <span
  m='2787130'>of</span> <span m='2787230'>hashes</span> <span
  m='2788390'>that</span> <span m='2788610'>exist</span> <span
  m='2790740'>in</span> <span m='2793000'>the</span> <span
  m='2793380'>world,</span> <span m='2793730'>I</span> <span
  m='2793780'>guess.</span> <span m='2794370'>And</span> <span
  m='2795480'>hashes</span> <span m='2795890'>that</span> <span
  m='2795980'>are</span> <span m='2796040'>used</span> <span
  m='2796910'>for</span> <span m='2797130'>many</span> <span
  m='2797380'>different</span> <span m='2797690'>applications.</span>
  </p><p><span m='2799850'>So</span> <span m='2799910'>maybe</span> <span
  m='2800130'>the</span> <span m='2800220'>best</span> <span
  m='2800450'>way</span> <span m='2800620'>of</span> <span
  m='2800730'>motivating</span> <span m='2801250'>this</span> <span
  m='2802070'>is</span> <span m='2802290'>through</span> <span
  m='2802450'>an</span> <span m='2802530'>example.</span> <span
  m='2803990'>So</span> <span m='2804080'>let's</span> <span
  m='2804280'>talk</span> <span m='2804490'>about</span> <span
  m='2804710'>an</span> <span m='2804790'>example</span> <span
  m='2805970'>that</span> <span m='2806880'>is</span> <span
  m='2808510'>near</span> <span m='2808780'>and dear to</span> <span
  m='2809250'>every</span> <span m='2809560'>security</span> <span
  m='2810020'>person's</span> <span m='2810420'>heart</span> <span
  m='2811280'>and</span> <span m='2811460'>probably</span> <span
  m='2811920'>to</span> <span m='2812820'>people</span> <span
  m='2813070'>who</span> <span m='2813150'>aren't</span> <span
  m='2813530'>interested</span> <span m='2813830'>in</span> <span
  m='2813910'>security</span> <span m='2815050'>as</span> <span
  m='2815230'>well,</span> <span m='2816100'>which</span> <span
  m='2816260'>is</span> <span m='2816390'>password</span> <span
  m='2816820'>storage.</span> <span m='2818620'>So</span> <span
  m='2819310'>think</span> <span m='2819460'>about</span> <span
  m='2820050'>how,</span> <span m='2820680'>let's</span> <span
  m='2820840'>say,</span> <span m='2820950'>Unix</span> <span
  m='2821320'>systems</span> <span m='2821750'>work</span> <span
  m='2822490'>when</span> <span m='2823030'>you</span> <span
  m='2823200'>type</span> <span m='2823430'>in</span> <span
  m='2823520'>your</span> <span m='2823640'>password.</span> <span
  m='2824650'>You're</span> <span m='2824770'>typing</span> <span m='2825090'>in
  your</span> <span m='2825210'>password</span> <span
  m='2825610'>[INAUDIBLE],</span> <span m='2826650'>and</span> <span
  m='2826970'>this</span> <span m='2827130'>is</span> <span
  m='2827250'>true</span> <span m='2827440'>for</span> <span
  m='2827990'>other</span> <span m='2828160'>systems</span> <span
  m='2828520'>as</span> <span m='2828630'>well,</span> <span
  m='2829460'>but</span> <span m='2830060'>you</span> <span
  m='2830200'>have</span> <span m='2830340'>a</span> <span
  m='2830400'>password.</span> <span m='2831650'>And</span> <span
  m='2833290'>my</span> <span m='2833430'>password</span> <span
  m='2833880'>is</span> <span m='2834020'>a</span> <span
  m='2834100'>permutation</span> <span m='2834680'>of</span> <span
  m='2834750'>my</span> <span m='2835710'>first</span> <span
  m='2835990'>daughters</span> <span m='2836470'>first</span> <span
  m='2836930'>name.</span> </p><p><span m='2838910'>[LAUGHTER]</span>
  </p><p><span m='2841040'>Yeah,</span> <span m='2841360'>but</span> <span
  m='2842820'>haven't</span> <span m='2843050'>given</span> <span
  m='2843270'>it</span> <span m='2843320'>away,</span> <span
  m='2843640'>right?</span> <span m='2844880'>Haven't</span> <span
  m='2845100'>given</span> <span m='2845250'>it</span> <span
  m='2845320'>away.</span> <span m='2847290'>And</span> <span
  m='2847840'>so</span> <span m='2848010'>this</span> <span
  m='2848180'>password</span> <span m='2849100'>is</span> <span
  m='2849240'>something</span> <span m='2849510'>that</span> <span
  m='2849610'>I'm</span> <span m='2849770'>typing</span> <span
  m='2850250'>in</span> <span m='2851680'>every</span> <span
  m='2851890'>day,</span> <span m='2852520'>right?</span> <span
  m='2853430'>Now</span> <span m='2854420'>the</span> <span
  m='2854640'>sum</span> <span m='2854840'>check</span> <span
  m='2855330'>that</span> <span m='2855490'>needs</span> <span
  m='2855730'>to</span> <span m='2855810'>happen</span> <span
  m='2856760'>to</span> <span m='2856910'>ensure</span> <span
  m='2857420'>that</span> <span m='2858230'>I'm</span> <span
  m='2858420'>typing</span> <span m='2858730'>in</span> <span
  m='2858820'>the</span> <span m='2858910'>right</span> <span
  m='2859160'>password.</span> <span m='2860660'>So</span> <span
  m='2860870'>what</span> <span m='2861040'>is</span> <span m='2861470'>a</span>
  <span m='2861540'>dumb</span> <span m='2861890'>way</span> <span
  m='2862080'>of</span> <span m='2862190'>doing</span> <span
  m='2862440'>things.</span> <span m='2863610'>What's</span> <span
  m='2863770'>a</span> <span m='2863840'>dumb</span> <span
  m='2864090'>way</span> <span m='2864260'>of</span> <span
  m='2864360'>building</span> <span m='2864640'>systems?</span> </p><p><span
  m='2866210'>AUDIENCE: Storing</span> <span m='2866710'>[INAUDIBLE].</span>
  </p><p><span m='2869510'>PROFESSOR: This</span> <span m='2869610'>is</span>
  <span m='2869730'>kind</span> <span m='2869900'>of a</span> <span
  m='2869980'>freebie.</span> </p><p><span m='2872522'>AUDIENCE:
  [INAUDIBLE].</span> </p><p><span m='2874414'>PROFESSOR: In situ</span> <span
  m='2874887'>hashing.</span> <span m='2875360'>That's</span> <span
  m='2875833'>better.</span> <span m='2878710'>So</span> <span
  m='2879100'>you'd</span> <span m='2879390'>store</span> <span
  m='2879890'>it.</span> <span m='2880010'>I</span> <span
  m='2880180'>offered</span> <span m='2880290'>the</span> <span
  m='2880380'>dumb</span> <span m='2880560'>way.</span> <span
  m='2881070'>So</span> <span m='2881530'>there's</span> <span
  m='2881670'>a</span> <span m='2882000'>perfectly</span> <span
  m='2882320'>valid</span> <span m='2882630'>answer.</span> <span
  m='2883230'>So</span> <span m='2883350'>you</span> <span
  m='2883540'>could</span> <span m='2883700'>clearly</span> <span
  m='2883830'>store</span> <span m='2884090'>this</span> <span
  m='2884350'>in</span> <span m='2884480'>plain</span> <span
  m='2884810'>text</span> <span m='2885590'>in</span> <span
  m='2885710'>some</span> <span m='2886000'>file</span> <span
  m='2886450'>and</span> <span m='2886530'>you</span> <span
  m='2886610'>could</span> <span m='2886700'>call</span> <span
  m='2886910'>it</span> <span m='2887030'>slash</span> <span
  m='2887410'>etc</span> <span m='2888130'>slaw</span> <span
  m='2888430'>password.</span> <span m='2889720'>And</span> <span
  m='2890600'>you could</span> <span m='2891510'>make</span> <span
  m='2891720'>it</span> <span m='2892300'>read</span> <span
  m='2892740'>for</span> <span m='2892910'>the</span> <span
  m='2893020'>work,</span> <span m='2893530'>right?</span> <span
  m='2894200'>And</span> <span m='2894580'>that'd</span> <span
  m='2894640'>be</span> <span m='2894760'>great,</span> <span
  m='2895070'>and</span> <span m='2895200'>people</span> <span
  m='2895380'>do</span> <span m='2895490'>that,</span> <span
  m='2896110'>right?</span> </p><p><span m='2897290'>But</span> <span
  m='2897540'>what</span> <span m='2897720'>you</span> <span
  m='2898210'>would</span> <span m='2898340'>rather</span> <span
  m='2898430'>do</span> <span m='2899200'>is</span> <span m='2899620'>you</span>
  <span m='2899770'>want</span> <span m='2899930'>to</span> <span
  m='2900040'>make</span> <span m='2900220'>sure</span> <span
  m='2900430'>that</span> <span m='2900590'>even</span> <span
  m='2900840'>the</span> <span m='2900940'>sysadmin</span> <span
  m='2903820'>doesn't</span> <span m='2904090'>know</span> <span
  m='2904580'>my</span> <span m='2904850'>password</span> <span
  m='2905870'>or</span> <span m='2906000'>your</span> <span
  m='2906160'>password,</span> <span m='2907140'>right?</span> <span
  m='2907630'>So</span> <span m='2907780'>how</span> <span m='2907910'>do</span>
  <span m='2907970'>you</span> <span m='2908040'>do</span> <span
  m='2908150'>that?</span> <span m='2909140'>Well</span> <span
  m='2909410'>you</span> <span m='2909600'>do</span> <span
  m='2909740'>that</span> <span m='2910000'>using</span> <span
  m='2910290'>a</span> <span m='2910370'>cryptographic</span> <span
  m='2911070'>hash</span> <span m='2911970'>that</span> <span
  m='2912110'>has</span> <span m='2912440'>this</span> <span
  m='2912660'>interesting</span> <span m='2913170'>property</span> <span
  m='2914120'>that</span> <span m='2914260'>is</span> <span
  m='2914410'>one</span> <span m='2914810'>way,</span> <span
  m='2916100'>OK?</span> <span m='2916400'>And</span> <span
  m='2916570'>what</span> <span m='2916730'>that</span> <span
  m='2916880'>means</span> <span m='2917230'>is</span> <span
  m='2917400'>that</span> <span m='2918940'>given</span> <span
  m='2920720'>h</span> <span m='2921010'>of</span> <span m='2921170'>x--</span>
  <span m='2922160'>OK,</span> <span m='2922370'>this</span> <span
  m='2922510'>is</span> <span m='2922630'>the</span> <span
  m='2922720'>value</span> <span m='2923260'>of</span> <span
  m='2923380'>the</span> <span m='2923460'>hash--</span> <span
  m='2925150'>it</span> <span m='2925460'>is</span> <span
  m='2926470'>very</span> <span m='2927030'>hard</span> <span
  m='2929870'>to</span> <span m='2930400'>find</span> <span
  m='2931060'>the</span> <span m='2932110'>x</span> <span
  m='2933850'>such</span> <span m='2934120'>that</span> <span
  m='2934930'>x</span> <span m='2935230'>basically</span> <span
  m='2935620'>hashes</span> <span m='2935880'>to this</span> <span
  m='2936350'>value.</span> </p><p><span m='2936790'>So if</span> <span
  m='2936950'>h</span> <span m='2937180'>of</span> <span m='2937310'>x</span>
  <span m='2937520'>equals</span> <span m='2940520'>let's</span> <span
  m='2940700'>call</span> <span m='2940820'>it</span> <span
  m='2941240'>q,</span> <span m='2942380'>then</span> <span
  m='2946450'>you're</span> <span m='2946660'>only</span> <span
  m='2947000'>given</span> <span m='2947200'>h</span> <span
  m='2947360'>of</span> <span m='2947490'>x.</span> <span m='2948910'>And</span>
  <span m='2950460'>so</span> <span m='2950940'>what</span> <span
  m='2951050'>do</span> <span m='2951090'>you</span> <span m='2951160'>do</span>
  <span m='2951380'>now?</span> <span m='2951750'>Well,</span> <span
  m='2952100'>it's</span> <span m='2952300'>beautiful.</span> <span
  m='2953360'>Assuming</span> <span m='2953610'>you</span> <span
  m='2953690'>have</span> <span m='2953930'>this</span> <span
  m='2954060'>one</span> <span m='2954260'>way</span> <span
  m='2954420'>hash,</span> <span m='2954870'>this</span> <span
  m='2955080'>cryptographic</span> <span m='2955660'>hash,</span> <span
  m='2956710'>in</span> <span m='2957000'>your</span> <span
  m='2957210'>etc</span> <span m='2957990'>slash</span> <span
  m='2958230'>password</span> <span m='2958690'>file,</span> <span
  m='2962910'>you</span> <span m='2963110'>have</span> <span
  m='2963380'>something</span> <span m='2963690'>like</span> <span
  m='2964840'>login</span> <span m='2965180'>name,</span> <span
  m='2965990'>[INAUDIBLE],</span> <span m='2971780'>which</span> <span
  m='2971920'>happens</span> <span m='2972290'>to</span> <span
  m='2972380'>be</span> <span m='2972570'>the</span> <span
  m='2972660'>hash</span> <span m='2973560'>of</span> <span
  m='2973700'>my</span> <span m='2973830'>daughter's</span> <span
  m='2974150'>first</span> <span m='2974380'>name,</span> <span
  m='2975450'>or</span> <span m='2975560'>something.</span> </p><p><span
  m='2976530'>But</span> <span m='2977670'>this is</span> <span
  m='2977790'>what's</span> <span m='2978020'>stored</span> <span
  m='2979120'>in</span> <span m='2979290'>there</span> <span
  m='2980050'>and</span> <span m='2980300'>the</span> <span
  m='2980585'>same</span> <span m='2980870'>thing</span> <span m='2981000'>for
  a</span> <span m='2981040'>bunch</span> <span m='2981220'>of</span> <span
  m='2981290'>different</span> <span m='2981510'>users,</span> <span
  m='2982630'>right?</span> <span m='2983140'>So</span> <span
  m='2983390'>when</span> <span m='2983540'>I</span> <span
  m='2983600'>log</span> <span m='2983880'>in</span> <span
  m='2984210'>and</span> <span m='2984330'>I</span> <span
  m='2984410'>type</span> <span m='2984710'>in</span> <span
  m='2985310'>the</span> <span m='2985440'>actual</span> <span
  m='2985790'>password,</span> <span m='2986970'>what</span> <span
  m='2987130'>does</span> <span m='2987330'>the</span> <span
  m='2987440'>system</span> <span m='2987910'>do?</span> <span
  m='2988670'>What</span> <span m='2988790'>does the</span> <span
  m='2989010'>system</span> <span m='2989250'>do?</span> <span
  m='2991120'>It</span> <span m='2991260'>hashes</span> <span
  m='2991490'>it.</span> <span m='2992130'>It</span> <span
  m='2992300'>takes</span> <span m='2992650'>x</span> <span
  m='2992920'>prime,</span> <span m='2994700'>which</span> <span
  m='2994770'>is</span> <span m='2994900'>the</span> <span
  m='2995030'>typed</span> <span m='2995390'>in</span> <span
  m='2995590'>password,</span> <span m='2999260'>which</span> <span
  m='3000300'>may</span> <span m='3000480'>or</span> <span
  m='3000560'>may</span> <span m='3000660'>not</span> <span
  m='3000890'>be</span> <span m='3000990'>equal</span> <span
  m='3003220'>to</span> <span m='3004110'>my</span> <span
  m='3004300'>password,</span> <span m='3004750'>because</span> <span
  m='3004940'>somebody</span> <span m='3005210'>else</span> <span
  m='3005410'>might be</span> <span m='3005690'>trying</span> <span
  m='3005870'>to</span> <span m='3005920'>break</span> <span
  m='3006160'>in,</span> <span m='3006390'>or</span> <span m='3006860'>I</span>
  <span m='3006960'>just</span> <span m='3007160'>mistyped,</span> <span
  m='3007420'>or</span> <span m='3007680'>forgot</span> <span
  m='3008050'>my</span> <span m='3008130'>daughter's</span> <span
  m='3008440'>first</span> <span m='3008710'>name,</span> <span
  m='3011520'>which</span> <span m='3011680'>would</span> <span
  m='3011800'>be</span> <span m='3011900'>bad.</span> </p><p><span
  m='3013250'>And</span> <span m='3014630'>it</span> <span
  m='3014790'>will</span> <span m='3014910'>just</span> <span
  m='3015130'>check</span> <span m='3016010'>to</span> <span
  m='3016130'>see--</span> <span m='3016650'>it</span> <span
  m='3017080'>doesn't</span> <span m='3017330'>need</span> <span
  m='3017520'>x,</span> <span m='3018270'>because</span> <span
  m='3018520'>it's</span> <span m='3018700'>stored</span> <span
  m='3019210'>h</span> <span m='3019440'>of</span> <span m='3019590'>x</span>
  <span m='3020790'>in</span> <span m='3020990'>the</span> <span
  m='3021100'>system,</span> <span m='3022050'>so</span> <span
  m='3022220'>it</span> <span m='3022300'>doesn't</span> <span
  m='3022500'>need</span> <span m='3022670'>x.</span> <span
  m='3023650'>So</span> <span m='3024010'>if</span> <span m='3024160'>we</span>
  <span m='3024240'>just</span> <span m='3024410'>compare</span> <span
  m='3025500'>against</span> <span m='3026440'>what</span> <span
  m='3026810'>I</span> <span m='3026880'>typed</span> <span
  m='3027200'>in,</span> <span m='3027300'>it would</span> <span
  m='3027450'>compute</span> <span m='3027760'>the</span> <span
  m='3027830'>hash</span> <span m='3028090'>again.</span> <span
  m='3028830'>And</span> <span m='3028970'>then</span> <span
  m='3029270'>would</span> <span m='3029410'>let</span> <span
  m='3029600'>me</span> <span m='3029760'>in</span> <span
  m='3030630'>assuming</span> <span m='3032660'>that</span> <span
  m='3033200'>these</span> <span m='3033490'>things</span> <span
  m='3033700'>matched</span> <span m='3034390'>and</span> <span
  m='3034560'>would</span> <span m='3034680'>not</span> <span
  m='3034880'>let</span> <span m='3035040'>me</span> <span m='3035190'>in</span>
  <span m='3035480'>if</span> <span m='3035560'>it</span> <span
  m='3035650'>didn't.</span> <span m='3036530'>So</span> <span
  m='3036640'>now</span> <span m='3036840'>we</span> <span
  m='3036930'>can</span> <span m='3037020'>talk</span> <span
  m='3037220'>about--</span> <span m='3038050'>and</span> <span
  m='3038230'>I</span> <span m='3038250'>don't</span> <span
  m='3038420'>have</span> <span m='3038530'>time</span> <span
  m='3038730'>for</span> <span m='3038810'>this,</span> <span
  m='3039060'>but</span> <span m='3039950'>you can</span> <span
  m='3040200'>certainly</span> <span m='3040390'>read</span> <span
  m='3040550'>up</span> <span m='3040710'>on</span> <span m='3040850'>it</span>
  <span m='3040890'>on</span> <span m='3041230'>Wikipedia</span> <span
  m='3041835'>and</span> <span m='3042220'>a</span> <span
  m='3042400'>bunch</span> <span m='3042630'>in</span> <span
  m='3042710'>the</span> <span m='3042780'>notes.</span> <span m='3043490'>You
  can</span> <span m='3043600'>talk</span> <span m='3043800'>about</span> <span
  m='3044000'>what</span> <span m='3044240'>properties</span> <span
  m='3044760'>should</span> <span m='3044980'>this</span> <span
  m='3045130'>hash</span> <span m='3045350'>function</span> <span
  m='3045720'>have,</span> <span m='3046740'>namely</span> <span
  m='3047120'>one</span> <span m='3047380'>way</span> <span
  m='3047710'>collision</span> <span m='3048240'>resistance,</span> <span
  m='3049130'>in</span> <span m='3049300'>order</span> <span
  m='3049510'>to</span> <span m='3049900'>solve</span> <span
  m='3050280'>these</span> <span m='3050470'>problems</span> <span
  m='3050950'>and</span> <span m='3051060'>other</span> <span
  m='3051220'>problems.</span> <span m='3052020'>I'm</span> <span
  m='3052140'>happy</span> <span m='3052350'>to</span> <span
  m='3052420'>stick</span> <span m='3052620'>around</span> <span
  m='3052910'>and</span> <span m='3052980'>answer</span> <span
  m='3053220'>questions.</span> </p>
uid: bd150a3fc0039e971b46e7cb296105cc
type: courses
layout: video
---
