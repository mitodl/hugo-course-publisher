---
about_this_resource_text: >-
  <p><strong>Description:</strong> This lecture covers table resizing, amortized
  analysis, string matching with the Karp-Rabin algorithm, and rolling
  hashes.</p> <p><strong>Instructor:</strong> Erik Demaine</p>
embedded_media:
  - id: Video-YouTube-Stream
    media_location: BRO7mVIFt08
    parent_uid: a601e0b64a32c32e4af0f5950e031d10
    title: Video-YouTube-Stream
    type: Video
    uid: 3ba4c58c066b430fc530ae17b16fd746
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/BRO7mVIFt08/default.jpg'
    parent_uid: a601e0b64a32c32e4af0f5950e031d10
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 68748377c36c94047ea6353d01d8e797
  - id: Video-iTunesU-MP4
    media_location: >-
      https://itunes.apple.com/us/itunes-u/lecture-9-table-doubling-karp/id585700718?i=126127761
    parent_uid: a601e0b64a32c32e4af0f5950e031d10
    title: Video-iTunes U-MP4
    type: Video
    uid: 1ae8737be884c11eb5152e8bac35be39
  - id: Video-InternetArchive-MP4
    media_location: 'http://www.archive.org/download/MIT6.006F11/MIT6_006F11_lec09_300k.mp4'
    parent_uid: a601e0b64a32c32e4af0f5950e031d10
    title: Video-Internet Archive-MP4
    type: Video
    uid: 29659a77abe716386d989b920042678e
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: BRO7mVIFt08
    parent_uid: a601e0b64a32c32e4af0f5950e031d10
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 737f11088a651d9afa3511604fffe79b
  - id: BRO7mVIFt08.srt
    parent_uid: a601e0b64a32c32e4af0f5950e031d10
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/lecture-videos/lecture-9-table-doubling-karp-rabin/BRO7mVIFt08.srt
    title: 3play caption file
    type: null
    uid: c2d8f7a17fa91985b766eb3e4da1f8d0
  - id: BRO7mVIFt08.pdf
    parent_uid: a601e0b64a32c32e4af0f5950e031d10
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/lecture-videos/lecture-9-table-doubling-karp-rabin/BRO7mVIFt08.pdf
    title: 3play pdf file
    type: null
    uid: f2de40a0c331a562108f26da644bfa5e
  - id: Caption-3Play YouTube id-SRT
    parent_uid: a601e0b64a32c32e4af0f5950e031d10
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 82117ae338a7cd7de267018e6a1aec70
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: a601e0b64a32c32e4af0f5950e031d10
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 65678fa6cff56fc95cf6eaacc1c39332
inline_embed_id: '76238220lecture9:tabledoubling,karp-rabin28992044'
order_index: 136
parent_uid: 6af424cb24d70b69cb7c86df8a25a92a
related_resources_text: ''
short_url: lecture-9-table-doubling-karp-rabin
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/lecture-videos/lecture-9-table-doubling-karp-rabin
title: 'Lecture 9: Table Doubling, Karp-Rabin'
transcript: >-
  <p><span m='80'>The</span> <span m='180'>following</span> <span
  m='620'>content</span> <span m='1210'>is</span> <span m='1330'>provided</span>
  <span m='1770'>under</span> <span m='2050'>a</span> <span
  m='2090'>Creative</span> <span m='2490'>Commons</span> <span
  m='2900'>license.</span> <span m='4010'>Your</span> <span
  m='4200'>support</span> <span m='4700'>will</span> <span m='4860'>help</span>
  <span m='5100'>MIT</span> <span m='5560'>OpenCourseWare</span> <span
  m='6350'>continue</span> <span m='6860'>to</span> <span m='6940'>offer</span>
  <span m='7350'>high</span> <span m='7590'>quality</span> <span
  m='8109'>educational</span> <span m='8740'>resources</span> <span
  m='9360'>for</span> <span m='9510'>free.</span> <span m='10720'>To</span>
  <span m='10820'>make</span> <span m='10930'>a</span> <span
  m='10970'>donation</span> <span m='11660'>or</span> <span
  m='11930'>view</span> <span m='12370'>additional</span> <span
  m='12790'>materials</span> <span m='13330'>from</span> <span
  m='13480'>hundreds</span> <span m='13910'>of</span> <span m='14020'>MIT</span>
  <span m='14450'>courses,</span> <span m='15550'>visit</span> <span
  m='15780'>MIT</span> <span m='16200'>OpenCourseWare</span> <span
  m='17250'>at</span> <span m='17410'>ocw.mit.edu.</span> </p><p><span
  m='22120'>PROFESSOR: A</span> <span m='22210'>trilogy,</span> <span
  m='22790'>if</span> <span m='22890'>you</span> <span m='23020'>will,</span>
  <span m='23530'>on</span> <span m='23800'>hashing.</span> <span
  m='26120'>We</span> <span m='26350'>did</span> <span m='26510'>a</span> <span
  m='26590'>lot</span> <span m='27140'>of</span> <span m='27360'>cool</span>
  <span m='27600'>hashing</span> <span m='27960'>stuff.</span> <span
  m='28230'>In</span> <span m='28310'>some</span> <span m='28470'>sense,</span>
  <span m='28680'>we</span> <span m='28850'>already</span> <span
  m='29150'>have</span> <span m='29510'>what</span> <span m='29690'>we</span>
  <span m='29830'>want</span> <span m='30660'>with</span> <span
  m='30820'>hashing.</span> <span m='31320'>Hashing</span> <span
  m='31760'>with</span> <span m='31850'>chaining,</span> <span
  m='32689'>we</span> <span m='32850'>can</span> <span m='32980'>do</span> <span
  m='35940'>constant</span> <span m='36380'>expected</span> <span
  m='36900'>time,</span> <span m='37220'>I</span> <span m='37310'>should</span>
  <span m='37510'>say,</span> <span m='39430'>constant</span> <span
  m='40380'>as</span> <span m='40590'>long</span> <span m='40980'>as--</span>
  <span m='42370'>yeah.</span> <span m='43610'>If</span> <span
  m='43770'>we're</span> <span m='43840'>doing</span> <span
  m='44100'>insert,</span> <span m='45100'>delete,</span> <span
  m='46050'>and</span> <span m='46250'>exact</span> <span
  m='46740'>search.</span> <span m='47710'>Is</span> <span m='47890'>this</span>
  <span m='48050'>key</span> <span m='48300'>in</span> <span
  m='48410'>there?</span> <span m='48750'>If so,</span> <span
  m='49000'>return</span> <span m='49310'>the</span> <span
  m='49400'>item.</span> <span m='49730'>Otherwise,</span> <span
  m='50080'>say</span> <span m='50280'>no.</span> <span m='52170'>And</span>
  <span m='52500'>we</span> <span m='52590'>do</span> <span
  m='52710'>that</span> <span m='52880'>with</span> <span
  m='52970'>hashing</span> <span m='53330'>with</span> <span
  m='53450'>chaining.</span> <span m='54390'>Under</span> <span
  m='55240'>the</span> <span m='55790'>analysis</span> <span m='56290'>we</span>
  <span m='56410'>did</span> <span m='56620'>was</span> <span
  m='56770'>with</span> <span m='56900'>simple</span> <span
  m='57230'>uniform</span> <span m='57700'>hashing.</span> </p><p><span
  m='58760'>An</span> <span m='58860'>alternative</span> <span m='59390'>is
  to</span> <span m='59510'>use</span> <span m='59710'>universal</span> <span
  m='60210'>hashing,</span> <span m='60810'>which</span> <span
  m='61140'>is</span> <span m='61250'>not</span> <span m='61430'>really</span>
  <span m='61640'>in</span> <span m='61740'>this</span> <span
  m='61900'>class.</span> <span m='62360'>But</span> <span m='63380'>if</span>
  <span m='63680'>you</span> <span m='63990'>find</span> <span
  m='64290'>this</span> <span m='64440'>weird,</span> <span
  m='65340'>then</span> <span m='65530'>this</span> <span m='65700'>is</span>
  <span m='65780'>less</span> <span m='66010'>weird.</span> <span
  m='67970'>And</span> <span m='69310'>hashing</span> <span
  m='69680'>with</span> <span m='69770'>chaining,</span> <span
  m='70170'>the</span> <span m='70270'>idea</span> <span m='70590'>was</span>
  <span m='70760'>we</span> <span m='70850'>had</span> <span
  m='70960'>this</span> <span m='71080'>giant</span> <span
  m='71540'>universe</span> <span m='71970'>of</span> <span m='72060'>all</span>
  <span m='72240'>keys,</span> <span m='72810'>could</span> <span
  m='72970'>be</span> <span m='73140'>actually</span> <span m='73950'>all</span>
  <span m='74260'>integers.</span> <span m='74950'>So</span> <span
  m='75160'>it's</span> <span m='75300'>infinite.</span> <span
  m='77190'>But</span> <span m='77330'>then</span> <span m='77560'>what</span>
  <span m='77730'>we</span> <span m='77880'>actually</span> <span
  m='78440'>are</span> <span m='78540'>storing</span> <span m='79000'>in</span>
  <span m='79080'>our</span> <span m='79180'>structure is</span> <span
  m='79600'>some</span> <span m='79810'>finite</span> <span m='80290'>set</span>
  <span m='80550'>of</span> <span m='80750'>n keys.</span> <span
  m='81980'>Here,</span> <span m='82230'>I'm</span> <span
  m='82340'>labeling</span> <span m='82710'>them</span> <span
  m='82870'>k1</span> <span m='83260'>through</span> <span m='83390'>k4,</span>
  <span m='83980'>n</span> <span m='84130'>is</span> <span
  m='84260'>four.</span> <span m='85000'>But</span> <span m='85110'>in</span>
  <span m='85200'>general,</span> <span m='86120'>you</span> <span
  m='86230'>don't</span> <span m='86360'>know</span> <span m='86490'>what</span>
  <span m='86630'>they're</span> <span m='86740'>going</span> <span
  m='86870'>to</span> <span m='86930'>be.</span> <span m='89490'>We</span> <span
  m='89750'>reduce</span> <span m='90160'>that</span> <span m='90380'>to</span>
  <span m='90490'>a</span> <span m='90570'>table</span> <span
  m='90980'>of</span> <span m='91090'>size</span> <span m='91520'>m</span> <span
  m='92970'>by</span> <span m='93220'>this</span> <span m='93400'>hash</span>
  <span m='93720'>function</span> <span m='94090'>h--</span> <span
  m='94840'>stuff</span> <span m='95160'>drawn</span> <span m='95400'>in</span>
  <span m='95480'>red.</span> <span m='96260'>And</span> <span
  m='96430'>so</span> <span m='96520'>here</span> <span m='96830'>I</span> <span
  m='96880'>have</span> <span m='97050'>a</span> <span m='97110'>three</span>
  <span m='97360'>way</span> <span m='97500'>collision.</span> <span
  m='97980'>These</span> <span m='98210'>three</span> <span
  m='98420'>keys</span> <span m='98770'>all</span> <span m='98990'>map</span>
  <span m='99300'>to</span> <span m='99420'>one,</span> <span
  m='100110'>and</span> <span m='100270'>so</span> <span m='100350'>I</span>
  <span m='100430'>store</span> <span m='100760'>a</span> <span
  m='100820'>linked</span> <span m='101070'>list</span> <span
  m='101430'>of</span> <span m='101660'>k1,</span> <span m='102140'>k4</span>
  <span m='103200'>and</span> <span m='103550'>k2.</span> <span
  m='104560'>They're</span> <span m='104740'>in</span> <span
  m='104770'>no</span> <span m='105030'>particular</span> <span
  m='105510'>order.</span> <span m='106040'>That's</span> <span
  m='106160'>the</span> <span m='106270'>point</span> <span m='106510'>of</span>
  <span m='106600'>that</span> <span m='106900'>picture.</span> <span
  m='107880'>Here</span> <span m='108100'>k3</span> <span
  m='108550'>happens</span> <span m='108910'>to</span> <span
  m='109020'>map</span> <span m='109290'>to</span> <span m='109460'>its</span>
  <span m='109600'>own</span> <span m='109790'>slot.</span> <span
  m='110760'>And</span> <span m='111110'>the</span> <span
  m='111180'>other</span> <span m='111360'>slots</span> <span
  m='111660'>are</span> <span m='111740'>empty,</span> <span
  m='112050'>so</span> <span m='112180'>they</span> <span m='112320'>just</span>
  <span m='112510'>have</span> <span m='112650'>a</span> <span
  m='112710'>null</span> <span m='113170'>saying</span> <span
  m='113960'>there's</span> <span m='114170'>an</span> <span
  m='114270'>empty</span> <span m='114580'>linked</span> <span
  m='114800'>list</span> <span m='115050'>there.</span> </p><p><span
  m='117250'>Total</span> <span m='117500'>size</span> <span
  m='117850'>of</span> <span m='117940'>this</span> <span
  m='118050'>structure</span> <span m='118640'>is</span> <span
  m='120380'>n</span> <span m='120610'>plus</span> <span m='120960'>m.</span>
  <span m='121830'>There's</span> <span m='122040'>m</span> <span
  m='122460'>to</span> <span m='122600'>store</span> <span m='122930'>the</span>
  <span m='123430'>table.</span> <span m='124520'>There's</span> <span
  m='124770'>n</span> <span m='125050'>to</span> <span m='125130'>store</span>
  <span m='125890'>the</span> <span m='125990'>sum</span> <span
  m='126350'>of</span> <span m='126500'>the</span> <span
  m='127330'>lengths</span> <span m='127650'>of</span> <span
  m='127740'>all</span> <span m='127890'>the</span> <span
  m='127960'>lists</span> <span m='128280'>is</span> <span
  m='128380'>going</span> <span m='128520'>to</span> <span m='128580'>be</span>
  <span m='128759'>n.</span> <span m='130460'>And</span> <span
  m='130650'>then</span> <span m='130880'>we</span> <span m='131000'>said</span>
  <span m='131980'>the</span> <span m='132140'>expected</span> <span
  m='132670'>chain</span> <span m='132980'>length,</span> <span
  m='135170'>if</span> <span m='135370'>everything's</span> <span
  m='135790'>uniform,</span> <span m='137120'>then</span> <span
  m='137480'>the</span> <span m='137560'>probability</span> <span
  m='138210'>of</span> <span m='138280'>a</span> <span
  m='138350'>particular</span> <span m='138810'>key</span> <span
  m='139020'>going</span> <span m='139250'>to a</span> <span
  m='139320'>particular</span> <span m='139780'>slot</span> <span
  m='140410'>is</span> <span m='140590'>1/m.</span> <span m='142140'>And</span>
  <span m='142510'>if</span> <span m='142980'>everything's</span> <span
  m='143420'>nice and</span> <span m='143670'>independent</span> <span
  m='144650'>or</span> <span m='145090'>if</span> <span m='145260'>you</span>
  <span m='145420'>use</span> <span m='145590'>universal</span> <span
  m='146040'>hashing,</span> <span m='146440'>you</span> <span
  m='146570'>can</span> <span m='146720'>show</span> <span
  m='147450'>that</span> <span m='148200'>the</span> <span
  m='148650'>total</span> <span m='148970'>expected</span> <span
  m='149430'>chain</span> <span m='149650'>length</span> <span
  m='149870'>is</span> <span m='150040'>n/m.</span> <span m='152020'>n</span>
  <span m='152400'>independent</span> <span m='152790'>trials,</span> <span
  m='153230'>each</span> <span m='153500'>probability</span> <span
  m='153910'>1/m</span> <span m='154520'>of</span> <span
  m='154920'>falling</span> <span m='155270'>here.</span> <span
  m='155970'>And</span> <span m='156170'>we</span> <span m='156250'>call</span>
  <span m='156460'>that</span> <span m='156690'>alpha,</span> <span
  m='157120'>the</span> <span m='157210'>load</span> <span
  m='157500'>factor.</span> <span m='159500'>And</span> <span
  m='159740'>we</span> <span m='159970'>concluded</span> <span
  m='160570'>that</span> <span m='160820'>the</span> <span
  m='161100'>operation</span> <span m='161760'>time</span> <span
  m='162010'>to</span> <span m='162080'>do</span> <span m='162190'>an</span>
  <span m='162270'>insert,</span> <span m='162670'>delete,</span> <span
  m='163170'>or</span> <span m='163360'>search</span> <span
  m='164170'>was</span> <span m='164570'>order</span> <span m='164920'>1</span>
  <span m='165160'>plus</span> <span m='165430'>alpha.</span> <span
  m='168820'>So</span> <span m='168990'>that's</span> <span m='169240'>n</span>
  <span m='169390'>expectation.</span> <span m='170940'>So</span> <span
  m='171000'>that</span> <span m='171190'>was</span> <span
  m='171320'>hashing</span> <span m='171640'>with</span> <span
  m='171730'>chaining.</span> </p><p><span m='172560'>This</span> <span
  m='172730'>is</span> <span m='172830'>good</span> <span
  m='173010'>news.</span> <span m='173680'>As</span> <span
  m='173860'>long</span> <span m='174070'>as</span> <span
  m='174180'>alpha</span> <span m='174370'>is</span> <span m='174550'>a</span>
  <span m='174630'>constant,</span> <span m='175560'>we</span> <span
  m='175710'>get</span> <span m='175870'>constant</span> <span
  m='176290'>time.</span> <span m='177540'>And</span> <span
  m='177930'>just</span> <span m='178860'>for</span> <span
  m='179690'>recollection,</span> <span m='181410'>today</span> <span
  m='181820'>we're</span> <span m='181950'>not</span> <span
  m='182140'>really</span> <span m='182360'>going</span> <span
  m='182470'>to</span> <span m='182530'>be</span> <span
  m='182720'>thinking</span> <span m='182990'>too</span> <span
  m='183120'>much</span> <span m='183310'>about</span> <span
  m='183470'>what</span> <span m='183610'>the</span> <span
  m='183680'>hash</span> <span m='183970'>function</span> <span
  m='184330'>is,</span> <span m='185000'>but</span> <span m='185130'>just</span>
  <span m='185460'>remember</span> <span m='185890'>two</span> <span
  m='186080'>of</span> <span m='186180'>them</span> <span m='186330'>I</span>
  <span m='186400'>talked</span> <span m='186680'>about--</span> <span
  m='187940'>this</span> <span m='188200'>one</span> <span m='188340'>we</span>
  <span m='188460'>actually</span> <span m='188900'>will use</span> <span
  m='189060'>today,</span> <span m='190400'>where</span> <span
  m='190610'>you</span> <span m='190700'>just</span> <span
  m='190890'>take</span> <span m='191060'>the</span> <span m='191150'>key</span>
  <span m='191350'>and</span> <span m='191440'>take</span> <span
  m='191550'>it</span> <span m='191710'>module</span> <span m='192270'>m.</span>
  <span m='192480'>That's</span> <span m='192680'>one</span> <span
  m='192900'>easy</span> <span m='193170'>way</span> <span m='193330'>of</span>
  <span m='193420'>mapping</span> <span m='193780'>all</span> <span
  m='194010'>integers</span> <span m='194880'>into the</span> <span
  m='195160'>space</span> <span m='195480'>zero through m</span> <span
  m='195910'>minus</span> <span m='196390'>1.</span> <span
  m='197440'>That's</span> <span m='197630'>called</span> <span
  m='197790'>the</span> <span m='197870'>division</span> <span
  m='198210'>method.</span> <span m='198590'>Multiplication</span> <span
  m='199190'>method</span> <span m='199440'>is</span> <span
  m='199560'>more</span> <span m='199740'>fancy.</span> <span
  m='200850'>You</span> <span m='201010'>multiply</span> <span m='201440'>by
  a</span> <span m='201610'>random</span> <span m='201980'>integer,</span> <span
  m='202990'>and</span> <span m='203220'>then</span> <span m='203460'>you</span>
  <span m='204290'>look</span> <span m='204540'>at</span> <span
  m='204630'>the</span> <span m='204710'>middle</span> <span
  m='205030'>of</span> <span m='205120'>that</span> <span
  m='205300'>multiplication.</span> <span m='206210'>And</span> <span
  m='206230'>that's</span> <span m='206480'>where</span> <span
  m='206870'>lots</span> <span m='207160'>of</span> <span
  m='207260'>copies</span> <span m='207830'>of</span> <span
  m='208640'>the</span> <span m='208740'>key</span> <span m='208970'>k</span>
  <span m='209690'>get</span> <span m='209980'>mixed</span> <span
  m='210440'>up</span> <span m='210860'>together</span> <span
  m='211300'>and</span> <span m='211380'>that's</span> <span
  m='211520'>sort</span> <span m='211670'>of</span> <span m='211770'>the</span>
  <span m='212190'>name</span> <span m='212410'>of</span> <span
  m='212470'>hashing.</span> <span m='213980'>And</span> <span
  m='214150'>that's</span> <span m='214360'>a</span> <span
  m='214410'>better</span> <span m='214770'>hash</span> <span
  m='215222'>function</span> <span m='216580'>in</span> <span
  m='216840'>the</span> <span m='216930'>real</span> <span
  m='217140'>world.</span> <span m='219070'>So</span> <span
  m='219240'>that's</span> <span m='219400'>hashing</span> <span
  m='219550'>with</span> <span m='219750'>chaining.</span> <span
  m='220750'>Cool?</span> </p><p><span m='221610'>Now,</span> <span
  m='223740'>it</span> <span m='223880'>seemed</span> <span
  m='224100'>like</span> <span m='224260'>a</span> <span
  m='224340'>complete</span> <span m='224700'>picture,</span> <span
  m='225430'>but</span> <span m='225550'>there's</span> <span
  m='225710'>one</span> <span m='226100'>crucial</span> <span
  m='226610'>thing</span> <span m='226810'>that</span> <span
  m='226910'>we're</span> <span m='227040'>missing</span> <span
  m='227360'>here.</span> <span m='228210'>Any</span> <span
  m='228380'>suggestions?</span> <span m='230410'>If I</span> <span
  m='230520'>went</span> <span m='230790'>to</span> <span m='230920'>go</span>
  <span m='231180'>to</span> <span m='231240'>implement</span> <span
  m='231760'>this</span> <span m='233540'>data</span> <span
  m='233770'>structure,</span> <span m='235490'>what</span> <span
  m='235860'>don't</span> <span m='236090'>I</span> <span m='236170'>know</span>
  <span m='236350'>how</span> <span m='236530'>to</span> <span
  m='236650'>do?</span> <span m='240150'>And</span> <span m='240430'>one</span>
  <span m='240810'>answer</span> <span m='241060'>could</span> <span
  m='241150'>be</span> <span m='241230'>the</span> <span m='241310'>hash</span>
  <span m='241550'>function,</span> <span m='241930'>but</span> <span
  m='242380'>we're</span> <span m='242460'>going</span> <span
  m='242810'>to</span> <span m='243090'>ignore that.</span> <span m='244050'>I
  know you know</span> <span m='244210'>the</span> <span
  m='244570'>answer.</span> <span m='244880'>Does anyone</span> <span
  m='245140'>else</span> <span m='245340'>know</span> <span
  m='245430'>the</span> <span m='245560'>answer?</span> <span
  m='246490'>Yeah.</span> </p><p><span m='247270'>AUDIENCE: Grow the</span>
  <span m='247696'>table.</span> </p><p><span m='248550'>PROFESSOR: Grow</span>
  <span m='248930'>the</span> <span m='249080'>table.</span> <span
  m='249560'>Yeah.</span> <span m='250070'>The</span> <span
  m='250180'>question</span> <span m='250590'>is,</span> <span
  m='251480'>what</span> <span m='252220'>should</span> <span
  m='252500'>m</span> <span m='252900'>be?</span> <span m='254650'>OK,</span>
  <span m='254920'>we</span> <span m='255180'>have</span> <span
  m='255350'>to</span> <span m='255470'>create</span> <span m='255780'>a</span>
  <span m='255850'>table</span> <span m='256140'>size</span> <span
  m='256430'>m,</span> <span m='257390'>and</span> <span m='257630'>we</span>
  <span m='257829'>put</span> <span m='258160'>our</span> <span
  m='258269'>keys</span> <span m='258550'>into</span> <span
  m='258820'>it.</span> <span m='259240'>We</span> <span m='259399'>know</span>
  <span m='259640'>we'd</span> <span m='259800'>like</span> <span
  m='260430'>m</span> <span m='260829'>to</span> <span m='260970'>be</span>
  <span m='261130'>about</span> <span m='261410'>the</span> <span
  m='261490'>same</span> <span m='261800'>as</span> <span m='261910'>n.</span>
  <span m='263200'>But</span> <span m='263490'>the</span> <span
  m='263580'>trouble</span> <span m='263880'>is</span> <span
  m='263970'>we</span> <span m='264090'>don't</span> <span
  m='264230'>really</span> <span m='264460'>know</span> <span
  m='264730'>n</span> <span m='265540'>because</span> <span
  m='266160'>insertions</span> <span m='266680'>come</span> <span
  m='266830'>along,</span> <span m='267240'>and</span> <span
  m='267340'>then</span> <span m='267410'>we</span> <span
  m='267510'>might</span> <span m='267680'>have</span> <span
  m='267830'>to</span> <span m='267940'>grow</span> <span m='268180'>the</span>
  <span m='268290'>table.</span> <span m='268670'>If</span> <span
  m='269240'>n</span> <span m='269360'>gets</span> <span
  m='269550'>really</span> <span m='269870'>big</span> <span
  m='270190'>relative</span> <span m='270550'>to</span> <span
  m='270640'>m,</span> <span m='271910'>we're</span> <span m='272100'>in</span>
  <span m='272160'>trouble</span> <span m='272710'>because</span> <span
  m='274140'>this</span> <span m='274300'>factor</span> <span
  m='274620'>will</span> <span m='274730'>go</span> <span m='274890'>up</span>
  <span m='275100'>and it</span> <span m='275170'>will</span> <span
  m='275260'>be</span> <span m='275370'>no</span> <span m='275520'>longer</span>
  <span m='275780'>constant</span> <span m='276170'>time.</span> </p><p><span
  m='277380'>The</span> <span m='277470'>other</span> <span
  m='277600'>hand,</span> <span m='277840'>if</span> <span m='277940'>we</span>
  <span m='278040'>set</span> <span m='278120'>m</span> <span
  m='278390'>to</span> <span m='278520'>be</span> <span m='278670'>really</span>
  <span m='279010'>big,</span> <span m='280600'>we're</span> <span
  m='280830'>also</span> <span m='281900'>kind</span> <span m='282150'>of</span>
  <span m='282230'>wasteful.</span> <span m='283000'>The</span> <span
  m='283150'>whole</span> <span m='283400'>point</span> <span
  m='283680'>of</span> <span m='283740'>this</span> <span
  m='283830'>structure</span> <span m='284230'>was</span> <span
  m='284400'>to</span> <span m='284520'>avoid</span> <span
  m='285340'>having</span> <span m='285750'>one</span> <span
  m='286000'>slot</span> <span m='286440'>for</span> <span
  m='286580'>every</span> <span m='286810'>possible</span> <span
  m='287290'>key</span> <span m='287950'>because</span> <span
  m='288130'>that</span> <span m='288350'>was</span> <span
  m='289410'>giant.</span> <span m='290450'>We</span> <span
  m='290530'>want</span> <span m='290760'>it</span> <span m='290990'>to</span>
  <span m='291340'>save</span> <span m='291640'>space.</span> <span
  m='292680'>So</span> <span m='292890'>we</span> <span m='292970'>want</span>
  <span m='293240'>m</span> <span m='293440'>to</span> <span
  m='293560'>be</span> <span m='293690'>big</span> <span
  m='293940'>enough</span> <span m='294200'>that</span> <span
  m='294360'>our</span> <span m='294540'>structure is</span> <span
  m='295030'>fast,</span> <span m='295440'>but</span> <span
  m='295600'>small</span> <span m='295900'>enough</span> <span
  m='296150'>that</span> <span m='296260'>it's</span> <span
  m='296410'>not</span> <span m='296710'>wasteful</span> <span
  m='297040'>in</span> <span m='297190'>space.</span> <span
  m='298550'>And</span> <span m='298730'>so</span> <span
  m='299520'>that's</span> <span m='299780'>the</span> <span
  m='299860'>remaining</span> <span m='300090'>question.</span> <span
  m='312710'>We</span> <span m='312770'>want</span> <span m='313040'>m</span>
  <span m='313280'>to</span> <span m='313400'>be</span> <span
  m='313600'>theta</span> <span m='313870'>n.</span> <span m='316170'>We</span>
  <span m='316270'>want</span> <span m='316560'>it to</span> <span
  m='316670'>be</span> <span m='317860'>omega</span> <span m='318830'>n.</span>
  <span m='319200'>So</span> <span m='319520'>we</span> <span
  m='319660'>want</span> <span m='319880'>it to</span> <span
  m='319960'>be</span> <span m='320060'>at</span> <span m='320120'>least</span>
  <span m='320580'>some</span> <span m='320830'>constant</span> <span
  m='321200'>times</span> <span m='321420'>n,</span> <span m='321620'>in</span>
  <span m='321710'>order</span> <span m='321890'>to</span> <span
  m='321990'>make</span> <span m='322210'>alpha</span> <span
  m='322630'>be</span> <span m='322970'>a</span> <span
  m='323100'>constant.</span> <span m='324100'>And</span> <span
  m='324250'>we</span> <span m='324330'>want</span> <span m='324600'>it
  to</span> <span m='324710'>be</span> <span m='324930'>big</span> <span
  m='325180'>O</span> <span m='325400'>of</span> <span m='325665'>n</span> <span
  m='325930'>in</span> <span m='326100'>order</span> <span m='326290'>to</span>
  <span m='326410'>make</span> <span m='326570'>the</span> <span
  m='326650'>space</span> <span m='327010'>linear.</span> <span
  m='336620'>And</span> <span m='337210'>the</span> <span m='337350'>way</span>
  <span m='337490'>we're</span> <span m='337610'>going</span> <span
  m='337730'>to</span> <span m='337810'>do</span> <span m='337930'>this,</span>
  <span m='338280'>as</span> <span m='338680'>we</span> <span
  m='339090'>suggested,</span> <span m='339800'>is</span> <span
  m='340160'>to</span> <span m='340240'>grow</span> <span m='340570'>the</span>
  <span m='340700'>table.</span> </p><p><span m='346630'>We're</span> <span
  m='346780'>going</span> <span m='346880'>to</span> <span
  m='346950'>start</span> <span m='347320'>with</span> <span m='347560'>m</span>
  <span m='347760'>equals</span> <span m='348100'>some</span> <span
  m='348290'>constant.</span> <span m='348970'>Pick</span> <span
  m='349120'>your</span> <span m='349210'>favorite</span> <span
  m='349500'>constant.</span> <span m='352370'>That's</span> <span
  m='352780'>20.</span> <span m='354020'>My</span> <span
  m='354160'>favorite</span> <span m='354440'>constant's</span> <span
  m='354815'>7.</span> <span m='355890'>Probably</span> <span
  m='356210'>want</span> <span m='356440'>it to</span> <span
  m='356500'>be</span> <span m='356590'>a</span> <span m='356660'>power</span>
  <span m='356870'>of</span> <span m='356990'>two,</span> <span
  m='357450'>but</span> <span m='357948'>what the hell?</span> <span
  m='360440'>And</span> <span m='361560'>then</span> <span
  m='361800'>we're</span> <span m='361980'>going</span> <span
  m='362260'>to</span> <span m='363070'>grow</span> <span m='363470'>and</span>
  <span m='363630'>shrink</span> <span m='363930'>as</span> <span
  m='364070'>necessary.</span> <span m='366580'>This</span> <span
  m='366780'>is</span> <span m='366900'>a</span> <span m='366980'>pretty</span>
  <span m='367660'>obvious</span> <span m='368100'>idea.</span> <span
  m='369520'>The</span> <span m='369620'>interesting</span> <span
  m='369950'>part</span> <span m='370170'>is</span> <span m='370300'>to</span>
  <span m='370420'>get</span> <span m='370570'>it</span> <span
  m='370720'>to</span> <span m='370880'>work.</span> <span m='372450'>And</span>
  <span m='372670'>it's</span> <span m='372770'>going</span> <span
  m='372950'>to</span> <span m='373040'>introduce</span> <span
  m='373520'>a</span> <span m='373590'>whole</span> <span m='373950'>new</span>
  <span m='374140'>concept,</span> <span m='376020'>which</span> <span
  m='376370'>is</span> <span m='376610'>amortization.</span> <span
  m='380340'>So</span> <span m='381100'>it's</span> <span
  m='381990'>going</span> <span m='382090'>to</span> <span m='382130'>be</span>
  <span m='382240'>cool.</span> <span m='382610'>Trust</span> <span
  m='382920'>me.</span> <span m='384450'>Not</span> <span m='384700'>only</span>
  <span m='384940'>are we going</span> <span m='385110'>to</span> <span
  m='385180'>solve</span> <span m='385460'>this</span> <span
  m='385610'>problem</span> <span m='386340'>of</span> <span
  m='386460'>how</span> <span m='386630'>to</span> <span
  m='386740'>choose</span> <span m='386990'>m,</span> <span
  m='387250'>we're</span> <span m='387440'>also</span> <span
  m='387890'>going</span> <span m='388150'>to</span> <span
  m='388240'>figure</span> <span m='388600'>out</span> <span
  m='388930'>how</span> <span m='390520'>the</span> <span
  m='390700'>Python</span> <span m='391030'>data</span> <span
  m='391220'>structure</span> <span m='391510'>called</span> <span
  m='391710'>list,</span> <span m='392520'>also</span> <span
  m='392780'>known</span> <span m='392990'>as</span> <span
  m='393160'>array,</span> <span m='394030'>is</span> <span
  m='394300'>implemented.</span> <span m='394840'>So</span> <span
  m='395000'>it's</span> <span m='395120'>the</span> <span
  m='395750'>exactly</span> <span m='396160'>the</span> <span
  m='396270'>same</span> <span m='396510'>problem.</span> <span
  m='397650'>I'll</span> <span m='397790'>get</span> <span m='397950'>to</span>
  <span m='398030'>that</span> <span m='398250'>in a</span> <span
  m='398300'>moment.</span> </p><p><span m='399730'>So</span> <span
  m='405840'>for</span> <span m='405970'>example,</span> <span
  m='406480'>let's</span> <span m='406830'>say</span> <span
  m='407090'>that</span> <span m='407380'>we--</span> <span m='407780'>I</span>
  <span m='408180'>said</span> <span m='408540'>m</span> <span
  m='408720'>should</span> <span m='408880'>be</span> <span
  m='409030'>theta</span> <span m='409400'>n.</span> <span
  m='410170'>Let's</span> <span m='410440'>say</span> <span m='410590'>we</span>
  <span m='410760'>want</span> <span m='411080'>m</span> <span
  m='411340'>to</span> <span m='411480'>be</span> <span m='411940'>at</span>
  <span m='412110'>least</span> <span m='412590'>n</span> <span
  m='413300'>at</span> <span m='413660'>all</span> <span
  m='413890'>times.</span> <span m='415550'>So</span> <span
  m='416130'>what</span> <span m='416290'>happens,</span> <span
  m='416680'>we</span> <span m='416780'>start</span> <span
  m='417050'>with</span> <span m='417180'>m</span> <span
  m='417350'>equals</span> <span m='417660'>8.</span> <span
  m='418580'>And</span> <span m='418790'>so,</span> <span
  m='419330'>let's</span> <span m='419540'>say</span> <span m='419650'>we</span>
  <span m='419770'>start</span> <span m='419990'>with</span> <span
  m='420130'>an</span> <span m='420290'>empty</span> <span
  m='422330'>hash</span> <span m='422620'>table,</span> <span m='423000'>an
  empty</span> <span m='423250'>dictionary.</span> <span m='424320'>And</span>
  <span m='424490'>then</span> <span m='424930'>I</span> <span
  m='425080'>insert</span> <span m='425710'>eight</span> <span
  m='425970'>things.</span> <span m='426710'>And</span> <span
  m='426830'>then</span> <span m='426960'>I</span> <span m='427010'>go</span>
  <span m='427180'>to</span> <span m='427260'>insert</span> <span
  m='427700'>the</span> <span m='427790'>ninth</span> <span
  m='428100'>thing.</span> <span m='429280'>And</span> <span m='429340'>I
  say,</span> <span m='429600'>oh,</span> <span m='429860'>now</span> <span
  m='430160'>m</span> <span m='430370'>is</span> <span m='430500'>bigger</span>
  <span m='430720'>than</span> <span m='430870'>n.</span> <span
  m='431170'>What</span> <span m='431930'>should</span> <span
  m='432100'>I</span> <span m='432150'>do?</span> <span m='440030'>So</span>
  <span m='440140'>this</span> <span m='440320'>would</span> <span
  m='440400'>be</span> <span m='440540'>like</span> <span m='440740'>at</span>
  <span m='440870'>the</span> <span m='441060'>end</span> <span m='442050'>of
  an</span> <span m='442310'>insertion</span> <span m='442840'>algorithm.</span>
  <span m='445190'>After I</span> <span m='445550'>insert</span> <span
  m='445860'>something</span> <span m='446280'>and say oh,</span> <span
  m='446720'>if</span> <span m='446900'>m</span> <span m='447090'>is</span>
  <span m='447200'>greater</span> <span m='447410'>than</span> <span
  m='447590'>n,</span> <span m='447820'>then</span> <span m='447970'>I'm</span>
  <span m='448090'>getting</span> <span m='448370'>worried</span> <span
  m='448740'>that</span> <span m='448860'>m</span> <span m='449040'>is</span>
  <span m='449170'>getting</span> <span m='449420'>much</span> <span
  m='449660'>bigger</span> <span m='449900'>than</span> <span
  m='450060'>n.</span> <span m='450610'>So</span> <span m='450770'>I'd</span>
  <span m='450940'>like</span> <span m='451100'>to</span> <span
  m='451200'>grow</span> <span m='451450'>the</span> <span
  m='451570'>table.</span> <span m='453370'>OK?</span> <span
  m='453970'>Let's</span> <span m='454790'>take</span> <span m='455050'>a</span>
  <span m='455160'>little</span> <span m='455440'>diversion</span> <span
  m='456000'>to</span> <span m='456160'>what</span> <span m='456420'>does</span>
  <span m='456640'>grow a</span> <span m='456950'>table</span> <span
  m='457280'>mean.</span> <span m='464020'>So</span> <span
  m='465100'>maybe</span> <span m='465500'>I</span> <span m='465550'>have</span>
  <span m='466480'>current</span> <span m='466800'>size</span> <span
  m='467170'>m</span> <span m='467620'>and</span> <span m='467950'>I'd</span>
  <span m='468170'>like</span> <span m='468360'>to</span> <span
  m='468450'>go</span> <span m='468600'>to</span> <span m='468690'>a</span>
  <span m='468750'>new</span> <span m='468960'>size,</span> <span
  m='469340'>m</span> <span m='469590'>prime.</span> <span
  m='471940'>This</span> <span m='472110'>would</span> <span
  m='472240'>actually</span> <span m='472500'>work</span> <span
  m='472740'>if</span> <span m='472830'>you're</span> <span
  m='472950'>growing</span> <span m='473290'>or</span> <span
  m='473440'>shrinking,</span> <span m='474040'>but</span> <span
  m='475016'>m</span> <span m='475400'>could</span> <span m='475770'>be</span>
  <span m='475920'>bigger</span> <span m='476270'>or</span> <span
  m='476350'>smaller</span> <span m='476710'>than</span> <span
  m='476890'>m</span> <span m='477040'>prime.</span> <span
  m='478130'>What</span> <span m='478280'>should</span> <span
  m='478490'>I</span> <span m='478560'>do--</span> <span m='479370'>what</span>
  <span m='479440'>do</span> <span m='479550'>I</span> <span
  m='479630'>need</span> <span m='479820'>to</span> <span m='479920'>do</span>
  <span m='480200'>in</span> <span m='480410'>order</span> <span
  m='480660'>to</span> <span m='481580'>build</span> <span m='481840'>a</span>
  <span m='481880'>new</span> <span m='482040'>table</span> <span m='482470'>of
  this</span> <span m='482560'>size?</span> <span m='487680'>Easy</span> <span
  m='487930'>warm</span> <span m='488180'>up.</span> <span
  m='489430'>Yeah?</span> </p><p><span m='490360'>AUDIENCE: Allocate</span>
  <span m='490825'>the memory</span> <span m='491290'>and then</span> <span
  m='491755'>rehash</span> <span m='492220'>[INAUDIBLE].</span> </p><p><span
  m='493620'>PROFESSOR: Yeah.</span> <span m='493950'>Allocate</span> <span
  m='494430'>the</span> <span m='494500'>memory and</span> <span
  m='494910'>rehash.</span> <span m='496060'>So</span> <span
  m='496780'>we</span> <span m='496910'>have</span> <span m='497110'>all</span>
  <span m='497240'>these</span> <span m='497410'>keys.</span> <span
  m='497860'>They're</span> <span m='497950'>stored</span> <span
  m='498780'>with</span> <span m='498920'>some</span> <span
  m='499120'>hash</span> <span m='499400'>function in</span> <span
  m='499850'>here,</span> <span m='500660'>in</span> <span
  m='500910'>table</span> <span m='501220'>size</span> <span
  m='501470'>m.</span> <span m='502330'>I</span> <span m='502460'>need</span>
  <span m='502630'>to</span> <span m='502710'>build</span> <span
  m='502950'>an</span> <span m='503050'>entirely</span> <span
  m='503590'>new</span> <span m='503740'>table,</span> <span
  m='504070'>size</span> <span m='504320'>m</span> <span
  m='504470'>prime,</span> <span m='506890'>and</span> <span
  m='507040'>then</span> <span m='507130'>I</span> <span m='507190'>need</span>
  <span m='507330'>to</span> <span m='507450'>rehash</span> <span
  m='507920'>everything.</span> <span m='534660'>One</span> <span
  m='534890'>way</span> <span m='535020'>to</span> <span m='535130'>think</span>
  <span m='535330'>of</span> <span m='535420'>this</span> <span
  m='535670'>is</span> <span m='536040'>for</span> <span m='536360'>each</span>
  <span m='536620'>item</span> <span m='537630'>in</span> <span
  m='537800'>the</span> <span m='537930'>old</span> <span
  m='538180'>table,</span> <span m='542180'>insert</span> <span
  m='542730'>into</span> <span m='542950'>the</span> <span m='543060'>new</span>
  <span m='543200'>table,</span> <span m='549090'>T</span> <span
  m='549530'>prime.</span> <span m='551490'>I</span> <span
  m='551580'>think</span> <span m='551830'>that's</span> <span
  m='552990'>worth</span> <span m='553180'>a</span> <span
  m='553290'>cushion.</span> <span m='555820'>You</span> <span
  m='555980'>got</span> <span m='556170'>one?</span> <span m='557360'>You don't
  want to get</span> <span m='557650'>hit.</span> <span m='558826'>It's
  fine.</span> <span m='559290'>We're</span> <span m='559570'>not</span> <span
  m='559760'>burning</span> <span m='560050'>through</span> <span
  m='560240'>these</span> <span m='560490'>questions</span> <span
  m='560840'>fast</span> <span m='561130'>enough,</span> <span
  m='561380'>so</span> <span m='562070'>answer</span> <span
  m='562320'>more</span> <span m='562450'>questions.</span> <span
  m='565430'>OK.</span> <span m='565820'>So</span> <span m='566030'>how</span>
  <span m='566140'>much</span> <span m='566400'>time</span> <span
  m='566630'>does</span> <span m='566760'>this</span> <span
  m='566920'>take?</span> <span m='567880'>That's</span> <span
  m='568160'>the</span> <span m='568310'>main</span> <span
  m='568510'>point</span> <span m='568710'>of</span> <span
  m='568780'>this</span> <span m='568940'>exercise.</span> <span
  m='578011'>Yeah?</span> </p><p><span m='579500'>AUDIENCE: Order n.</span>
  </p><p><span m='580600'>PROFESSOR: Order</span> <span m='580940'>n.</span>
  <span m='582160'>Yeah,</span> <span m='582350'>I</span> <span
  m='582420'>think</span> <span m='582700'>as</span> <span
  m='582860'>long</span> <span m='583300'>as</span> <span m='583610'>m</span>
  <span m='584000'>and</span> <span m='584130'>m</span> <span
  m='584310'>prime</span> <span m='584890'>are</span> <span
  m='585110'>theta</span> <span m='585490'>n,</span> <span
  m='586060'>this</span> <span m='586290'>is</span> <span
  m='586410'>order</span> <span m='586700'>n.</span> <span m='587720'>In</span>
  <span m='587890'>general,</span> <span m='588870'>it's</span> <span
  m='589070'>going</span> <span m='589230'>to</span> <span m='589280'>be</span>
  <span m='589800'>n</span> <span m='590160'>plus</span> <span
  m='590500'>m</span> <span m='590730'>plus</span> <span m='590960'>m</span>
  <span m='591100'>prime,</span> <span m='593270'>but</span> <span
  m='593740'>you're</span> <span m='593860'>right.</span> <span
  m='594100'>Most</span> <span m='594340'>of the</span> <span
  m='594440'>time</span> <span m='594700'>that's--</span> <span
  m='595110'>I</span> <span m='595180'>mean,</span> <span m='595380'>in</span>
  <span m='595540'>the</span> <span m='595620'>situation</span> <span
  m='596180'>we're</span> <span m='596320'>going</span> <span
  m='596550'>to</span> <span m='596650'>construct,</span> <span
  m='597440'>this</span> <span m='597620'>will</span> <span m='597720'>be</span>
  <span m='597900'>theta</span> <span m='598180'>n.</span> <span
  m='600310'>But</span> <span m='600460'>in</span> <span
  m='600570'>general,</span> <span m='601770'>there's</span> <span
  m='601930'>this</span> <span m='602080'>issue</span> <span
  m='602380'>that,</span> <span m='602610'>for</span> <span
  m='602730'>example,</span> <span m='603050'>to</span> <span
  m='603240'>iterate</span> <span m='603610'>over</span> <span
  m='603830'>every</span> <span m='604090'>item</span> <span
  m='604370'>in</span> <span m='604440'>the</span> <span m='604530'>table</span>
  <span m='604880'>you</span> <span m='604960'>have</span> <span
  m='605120'>to</span> <span m='605230'>look</span> <span m='605420'>at</span>
  <span m='605480'>every</span> <span m='605700'>slot.</span> <span
  m='606410'>And</span> <span m='606560'>so</span> <span m='606700'>you</span>
  <span m='607070'>have</span> <span m='607260'>to</span> <span
  m='607370'>pay</span> <span m='607560'>order</span> <span m='607790'>m</span>
  <span m='608070'>just</span> <span m='608240'>to</span> <span
  m='608310'>visit</span> <span m='608580'>every</span> <span
  m='608810'>slot,</span> <span m='609690'>order</span> <span
  m='609920'>n</span> <span m='610100'>to</span> <span m='610150'>visit</span>
  <span m='610400'>all</span> <span m='610540'>those</span> <span
  m='610740'>lists,</span> <span m='612050'>m</span> <span
  m='612290'>prime</span> <span m='613160'>just</span> <span
  m='613360'>to</span> <span m='613430'>build</span> <span m='613840'>the</span>
  <span m='613900'>new</span> <span m='614250'>table,</span> <span
  m='614670'>size</span> <span m='614930'>m prime.</span> <span
  m='615850'>Initialize</span> <span m='616110'>it</span> <span
  m='616370'>all</span> <span m='616580'>to nil.</span> <span
  m='618400'>Good.</span> </p><p><span m='622590'>I</span> <span
  m='622680'>guess</span> <span m='622870'>another</span> <span
  m='623180'>main</span> <span m='623390'>point</span> <span
  m='623620'>here</span> <span m='623810'>is</span> <span m='623900'>that</span>
  <span m='624000'>we</span> <span m='624090'>have</span> <span
  m='624260'>to</span> <span m='624350'>build</span> <span m='624580'>a</span>
  <span m='624610'>new</span> <span m='624770'>hash</span> <span
  m='625070'>function.</span> <span m='625860'>Why</span> <span
  m='626110'>do</span> <span m='626200'>we</span> <span m='626260'>need</span>
  <span m='626420'>to</span> <span m='626480'>build</span> <span m='626770'>a
  new</span> <span m='626830'>hash</span> <span m='627100'>function?</span>
  <span m='627460'>Because</span> <span m='628520'>the</span> <span
  m='628620'>hash</span> <span m='628880'>function--</span> <span m='630150'>why
  did I</span> <span m='630320'>call</span> <span m='630570'>it</span> <span
  m='630670'>f</span> <span m='630920'>prime?</span> <span m='632200'>Calling
  it</span> <span m='632630'>h</span> <span m='632920'>prime.</span> <span
  m='637300'>The</span> <span m='637390'>hash</span> <span
  m='637660'>function</span> <span m='637980'>is</span> <span
  m='638100'>all</span> <span m='638290'>about</span> <span
  m='638590'>mapping</span> <span m='639130'>the</span> <span
  m='639250'>universe</span> <span m='639660'>of</span> <span
  m='639750'>keys</span> <span m='640210'>to</span> <span m='640370'>a</span>
  <span m='640460'>table</span> <span m='640810'>of</span> <span
  m='640900'>size</span> <span m='641220'>m.</span> <span m='642160'>So
  if</span> <span m='642320'>m</span> <span m='642540'>changes,</span> <span
  m='643000'>we</span> <span m='643550'>definitely</span> <span
  m='643870'>need</span> <span m='644030'>a</span> <span m='644070'>new</span>
  <span m='644190'>hash function.</span> <span m='644670'>If you use</span>
  <span m='645050'>the</span> <span m='645170'>old</span> <span
  m='645350'>hash</span> <span m='645600'>function,</span> <span
  m='645930'>you</span> <span m='646030'>would</span> <span
  m='646160'>just</span> <span m='646420'>use</span> <span m='646610'>the</span>
  <span m='646690'>beginning</span> <span m='647140'>of</span> <span
  m='647210'>the</span> <span m='647320'>table.</span> <span
  m='648180'>If</span> <span m='648230'>you</span> <span m='648360'>add</span>
  <span m='648690'>more</span> <span m='648940'>slots</span> <span
  m='649320'>down</span> <span m='649500'>here,</span> <span
  m='649670'>you're</span> <span m='649780'>not</span> <span
  m='649950'>going</span> <span m='650050'>to</span> <span m='650090'>use</span>
  <span m='650330'>them.</span> <span m='651610'>For</span> <span
  m='651770'>every</span> <span m='652050'>key you've</span> <span
  m='652370'>got</span> <span m='652530'>to</span> <span
  m='652620'>rehash</span> <span m='653130'>it,</span> <span
  m='653300'>figure</span> <span m='653540'>out</span> <span
  m='653600'>where</span> <span m='653750'>it</span> <span
  m='653810'>goes.</span> <span m='654920'>I</span> <span
  m='655070'>think</span> <span m='655270'>I've</span> <span
  m='655870'>drilled</span> <span m='656090'>that</span> <span
  m='656300'>home</span> <span m='657030'>enough</span> <span
  m='657250'>times.</span> <span m='657960'>So</span> <span
  m='658330'>the</span> <span m='658460'>question</span> <span
  m='658820'>becomes</span> <span m='659380'>when</span> <span
  m='660000'>we</span> <span m='660170'>see</span> <span m='660450'>that</span>
  <span m='660620'>our</span> <span m='660740'>table</span> <span
  m='661120'>is</span> <span m='661230'>too</span> <span m='661380'>big,</span>
  <span m='664490'>we</span> <span m='664610'>need</span> <span
  m='664780'>to</span> <span m='664850'>make</span> <span m='665040'>it</span>
  <span m='665090'>bigger.</span> <span m='665430'>But</span> <span
  m='665550'>how</span> <span m='665810'>much</span> <span
  m='666140'>bigger?</span> <span m='668440'>Suggestions?</span> <span
  m='670156'>Yeah?</span> </p><p><span m='671122'>AUDIENCE: 2x.</span>
  </p><p><span m='672090'>PROFESSOR: 2x.</span> <span m='673560'>Twice</span>
  <span m='673970'>m.</span> <span m='674590'>Good</span> <span
  m='674750'>suggestion.</span> <span m='675140'>Any</span> <span
  m='675320'>other</span> <span m='675450'>suggestions?</span> <span
  m='678550'>3x?</span> <span m='681340'>OK.</span> <span m='684090'>m</span>
  <span m='684530'>prime</span> <span m='685180'>equals</span> <span
  m='685560'>2</span> <span m='685800'>m</span> <span m='686190'>is</span> <span
  m='686560'>the</span> <span m='686800'>correct</span> <span
  m='687230'>answer.</span> <span m='687910'>But</span> <span
  m='688170'>for</span> <span m='688500'>fun,</span> <span m='689810'>or</span>
  <span m='690250'>for</span> <span m='690430'>pain</span> <span
  m='690770'>I</span> <span m='690830'>guess,</span> <span
  m='691430'>let's</span> <span m='691640'>think</span> <span
  m='691800'>about</span> <span m='691980'>the</span> <span
  m='692100'>wrong</span> <span m='692410'>answer,</span> <span
  m='693140'>which</span> <span m='693360'>would</span> <span
  m='693460'>be,</span> <span m='693660'>just</span> <span
  m='693900'>make</span> <span m='694040'>it</span> <span m='694160'>one</span>
  <span m='694450'>bigger.</span> <span m='695690'>That'll</span> <span
  m='695890'>make</span> <span m='696160'>m</span> <span m='696340'>equal</span>
  <span m='696590'>to</span> <span m='696680'>n</span> <span
  m='696900'>again,</span> <span m='697560'>so</span> <span
  m='697730'>that</span> <span m='697950'>seems--</span> <span
  m='698900'>it's</span> <span m='699150'>at</span> <span
  m='699180'>least</span> <span m='699360'>safe.</span> <span
  m='699790'>It</span> <span m='699880'>will</span> <span
  m='700010'>maintain</span> <span m='700360'>my</span> <span
  m='700490'>invariant</span> <span m='700870'>that</span> <span
  m='701020'>m</span> <span m='701290'>is</span> <span m='701840'>at</span>
  <span m='702020'>least</span> <span m='702380'>n.</span> <span
  m='703250'>I</span> <span m='703330'>get</span> <span m='703500'>this</span>
  <span m='703660'>wrong--</span> <span m='705010'>sorry,</span> <span
  m='705565'>that's</span> <span m='705820'>the</span> <span
  m='705920'>wrong</span> <span m='706150'>way.</span> <span m='708510'>n</span>
  <span m='708670'>is</span> <span m='708790'>greater</span> <span
  m='709060'>than</span> <span m='709250'>m.</span> <span m='710470'>I want
  m</span> <span m='710780'>to</span> <span m='710940'>be</span> <span
  m='711330'>greater</span> <span m='711580'>than or</span> <span
  m='711630'>equal</span> <span m='711860'>to</span> <span m='711990'>n.</span>
  </p><p><span m='714700'>So</span> <span m='715050'>if</span> <span
  m='715240'>we</span> <span m='715350'>just</span> <span
  m='715600'>incremented</span> <span m='716320'>our</span> <span
  m='716500'>table</span> <span m='716810'>size,</span> <span
  m='718160'>then</span> <span m='718700'>the</span> <span
  m='718810'>question</span> <span m='719220'>becomes,</span> <span
  m='720310'>what</span> <span m='720640'>is</span> <span m='720810'>the</span>
  <span m='720940'>cost</span> <span m='721560'>of</span> <span
  m='722010'>n</span> <span m='722370'>insertions?</span> <span
  m='725590'>So</span> <span m='725740'>say</span> <span m='725910'>we</span>
  <span m='726030'>start</span> <span m='726270'>with</span> <span
  m='726390'>an</span> <span m='726490'>empty</span> <span
  m='726760'>table</span> <span m='728180'>and</span> <span m='728390'>it</span>
  <span m='728450'>has</span> <span m='728680'>size</span> <span
  m='729120'>eight</span> <span m='729430'>or</span> <span
  m='729510'>whatever,</span> <span m='730120'>some</span> <span
  m='730330'>constant,</span> <span m='731570'>and</span> <span
  m='732270'>we</span> <span m='732810'>insert</span> <span m='733270'>n</span>
  <span m='733500'>times.</span> <span m='735100'>Then</span> <span
  m='735410'>after</span> <span m='735820'>eight</span> <span
  m='735950'>insertions</span> <span m='736550'>when</span> <span
  m='736710'>we</span> <span m='736820'>insert</span> <span m='737420'>we</span>
  <span m='737540'>have</span> <span m='737680'>to</span> <span
  m='737990'>rebuild</span> <span m='738460'>our</span> <span
  m='738580'>entire</span> <span m='738890'>table.</span> <span
  m='739220'>That</span> <span m='739390'>takes</span> <span
  m='739630'>linear</span> <span m='739910'>time.</span> <span
  m='740710'>After</span> <span m='741100'>we</span> <span
  m='741310'>insert</span> <span m='741600'>one</span> <span
  m='741790'>more,</span> <span m='742280'>we</span> <span
  m='742390'>have</span> <span m='742480'>to</span> <span
  m='742610'>rebuild.</span> <span m='742990'>That</span> <span
  m='743150'>takes</span> <span m='743370'>linear</span> <span
  m='743640'>time.</span> <span m='744520'>And</span> <span m='744700'>so</span>
  <span m='744840'>the</span> <span m='744960'>cost</span> <span
  m='745380'>is</span> <span m='745510'>going</span> <span m='745740'>to</span>
  <span m='745860'>be</span> <span m='746520'>something</span> <span
  m='746860'>like,</span> <span m='748500'>after</span> <span
  m='748780'>you</span> <span m='748930'>get</span> <span m='749170'>to</span>
  <span m='749340'>8,</span> <span m='749780'>it's</span> <span
  m='749980'>going</span> <span m='750090'>to</span> <span m='750140'>be</span>
  <span m='750250'>1</span> <span m='750490'>plus</span> <span
  m='750780'>2</span> <span m='750980'>plus</span> <span m='751260'>3</span>
  <span m='751460'>plus</span> <span m='751740'>4.</span> <span m='752365'>So
  a</span> <span m='752670'>triangular</span> <span m='753180'>number.</span>
  <span m='754540'>Every</span> <span m='754900'>time</span> <span
  m='755150'>we</span> <span m='755270'>insert,</span> <span
  m='755600'>we</span> <span m='755720'>have</span> <span m='755910'>to</span>
  <span m='756120'>rebuild</span> <span m='756510'>everything.</span> <span
  m='758690'>So</span> <span m='758830'>this</span> <span m='759080'>is</span>
  <span m='759710'>quadratic,</span> <span m='760280'>this</span> <span
  m='760450'>is</span> <span m='760620'>bad.</span> </p><p><span
  m='765970'>Fortunately,</span> <span m='767170'>if</span> <span
  m='767350'>all</span> <span m='767540'>we</span> <span m='767650'>do</span>
  <span m='767810'>is</span> <span m='768040'>double</span> <span
  m='768450'>m,</span> <span m='769500'>we're</span> <span
  m='769730'>golden.</span> <span m='770940'>And</span> <span
  m='771140'>this</span> <span m='771310'>is</span> <span m='771430'>sort of
  the</span> <span m='771740'>point</span> <span m='772090'>of</span> <span
  m='773440'>why</span> <span m='773890'>it's</span> <span
  m='774070'>called</span> <span m='774450'>table--</span> <span m='775390'>I 
  call it</span> <span m='775630'>table</span> <span m='775890'>resizing</span>
  <span m='776440'>there.</span> <span m='777070'>Or to</span> <span
  m='777260'>not</span> <span m='777310'>give</span> <span m='777480'>it</span>
  <span m='777540'>away,</span> <span m='777760'>but this</span> <span
  m='778060'>is</span> <span m='778320'>a</span> <span
  m='778430'>technique</span> <span m='778800'>called</span> <span
  m='779090'>table</span> <span m='779390'>doubling.</span> <span
  m='782380'>And</span> <span m='782550'>let's</span> <span
  m='782720'>just</span> <span m='782870'>think</span> <span
  m='783060'>of</span> <span m='783160'>the</span> <span m='783250'>cost</span>
  <span m='783600'>of</span> <span m='783710'>n</span> <span
  m='783930'>insertions.</span> <span m='785960'>There's</span> <span
  m='786130'>also</span> <span m='786420'>deletions.</span> <span
  m='787200'>But</span> <span m='787580'>if</span> <span m='787680'>we</span>
  <span m='787780'>just,</span> <span m='788100'>again,</span> <span
  m='788380'>start</span> <span m='788630'>with</span> <span
  m='788760'>an</span> <span m='788830'>empty</span> <span
  m='789100'>table,</span> <span m='790060'>and</span> <span
  m='790270'>we</span> <span m='790410'>repeatedly</span> <span
  m='790980'>insert,</span> <span m='791860'>then</span> <span
  m='792010'>the</span> <span m='792100'>cost</span> <span m='792470'>we</span>
  <span m='792560'>get--</span> <span m='796770'>if</span> <span
  m='796910'>we</span> <span m='797020'>double</span> <span
  m='797420'>each</span> <span m='797610'>time</span> <span
  m='798220'>and</span> <span m='798340'>we're</span> <span
  m='798450'>inserting,</span> <span m='799460'>after</span> <span
  m='799820'>we</span> <span m='800240'>get</span> <span m='800430'>to</span>
  <span m='800560'>8,</span> <span m='801340'>we insert,</span> <span
  m='801610'>we</span> <span m='801710'>double</span> <span m='801980'>to</span>
  <span m='802050'>16.</span> <span m='803550'>Then</span> <span
  m='803610'>we</span> <span m='803780'>insert</span> <span
  m='804160'>eight</span> <span m='804330'>more</span> <span
  m='804520'>times,</span> <span m='804920'>then</span> <span
  m='805030'>we</span> <span m='805130'>double</span> <span m='805510'>to</span>
  <span m='805590'>32.</span> <span m='806540'>Then</span> <span
  m='806730'>we</span> <span m='806900'>insert</span> <span m='807460'>16</span>
  <span m='808000'>times,</span> <span m='808480'>then</span> <span
  m='808620'>we</span> <span m='808730'>double</span> <span m='809070'>to</span>
  <span m='809160'>64.</span> <span m='810540'>All</span> <span
  m='810700'>these</span> <span m='810860'>numbers</span> <span
  m='811170'>are</span> <span m='811390'>roughly</span> <span
  m='811720'>the</span> <span m='811840'>same.</span> <span
  m='812180'>They're</span> <span m='812240'>within</span> <span
  m='812490'>a</span> <span m='812720'>factor</span> <span m='813110'>of</span>
  <span m='813350'>two of each</span> <span m='813570'>other.</span> <span
  m='814380'>Every</span> <span m='814620'>time</span> <span
  m='814860'>we're</span> <span m='815020'>rebuilding</span> <span
  m='815500'>in</span> <span m='815590'>linear</span> <span
  m='815900'>time,</span> <span m='816670'>but</span> <span
  m='816840'>we're</span> <span m='817010'>only</span> <span
  m='817330'>doing</span> <span m='817730'>it</span> <span
  m='818050'>like</span> <span m='818220'>log</span> <span m='818540'>end</span>
  <span m='818860'>times.</span> </p><p><span m='820990'>If</span> <span
  m='821120'>we're</span> <span m='821210'>going</span> <span
  m='821420'>from</span> <span m='822190'>one</span> <span m='822540'>to</span>
  <span m='822670'>n,</span> <span m='823440'>their</span> <span
  m='823590'>log</span> <span m='823860'>end</span> <span
  m='824130'>growths--</span> <span m='824560'>log end</span> <span
  m='824920'>doublings</span> <span m='825330'>that</span> <span
  m='825530'>we're</span> <span m='825690'>able</span> <span
  m='825950'>to</span> <span m='826060'>do.</span> <span m='827030'>So
  you</span> <span m='827160'>might</span> <span m='827300'>think,</span> <span
  m='827570'>oh,</span> <span m='827950'>it's</span> <span m='828850'>n</span>
  <span m='829040'>log</span> <span m='829360'>n.</span> <span
  m='829890'>But</span> <span m='830020'>we</span> <span m='830120'>don't</span>
  <span m='830260'>want</span> <span m='830490'>n</span> <span m='830710'>log
  n.</span> <span m='830970'>That</span> <span m='831120'>would</span> <span
  m='831250'>be</span> <span m='831380'>binary</span> <span
  m='831700'>search</span> <span m='831910'>trees.</span> <span
  m='832150'>We</span> <span m='832250'>want</span> <span m='832460'>to</span>
  <span m='832530'>do</span> <span m='832650'>better</span> <span
  m='832880'>than</span> <span m='833140'>n log</span> <span
  m='833390'>n.</span> <span m='834430'>If</span> <span m='834470'>you</span>
  <span m='834560'>think</span> <span m='834810'>about</span> <span
  m='835330'>the</span> <span m='835460'>costs</span> <span
  m='835980'>here,</span> <span m='837040'>the</span> <span
  m='837160'>cost</span> <span m='837490'>to</span> <span
  m='837570'>rebuild</span> <span m='837930'>the</span> <span
  m='838000'>first</span> <span m='838380'>time</span> <span
  m='839160'>is</span> <span m='839360'>concepts,</span> <span
  m='840080'>like</span> <span m='840430'>8.</span> <span m='841590'>And</span>
  <span m='841730'>then</span> <span m='841850'>the</span> <span m='841940'>cost
  to</span> <span m='842370'>rebuild</span> <span m='842580'>the</span> <span
  m='842650'>second</span> <span m='842970'>time</span> <span
  m='843300'>is</span> <span m='843390'>16,</span> <span m='845190'>so</span>
  <span m='845340'>twice</span> <span m='845670'>that.</span> <span
  m='846310'>The cost to</span> <span m='846630'>build</span> <span
  m='847180'>the</span> <span m='847290'>next</span> <span
  m='847550'>time</span> <span m='847850'>is</span> <span m='848010'>64.</span>
  <span m='850490'>So</span> <span m='850670'>these</span> <span
  m='850900'>go</span> <span m='851090'>up</span> <span
  m='852600'>geometrically.</span> <span m='854240'>You've</span> <span
  m='854450'>got</span> <span m='854640'>to</span> <span m='854690'>get</span>
  <span m='854940'>from</span> <span m='855160'>1</span> <span
  m='855470'>to</span> <span m='855600'>n</span> <span m='856330'>with</span>
  <span m='856500'>log</span> <span m='856780'>end</span> <span
  m='856900'>steps.</span> <span m='857200'>The</span> <span
  m='857500'>natural</span> <span m='857870'>way</span> <span
  m='857970'>to</span> <span m='858070'>do</span> <span m='858190'>it is</span>
  <span m='858290'>by</span> <span m='858400'>doubling,</span> <span
  m='858910'>and</span> <span m='859000'>you</span> <span m='859130'>can</span>
  <span m='859310'>prove</span> <span m='860020'>that</span> <span
  m='860140'>indeed</span> <span m='860490'>this</span> <span
  m='860700'>is</span> <span m='860860'>the</span> <span m='860960'>case.</span>
  <span m='862230'>So</span> <span m='862380'>this</span> <span
  m='862600'>is</span> <span m='862720'>a</span> <span
  m='862790'>geometric</span> <span m='863300'>series.</span> <span
  m='864490'>Didn't mean</span> <span m='864680'>to</span> <span
  m='864770'>cross</span> <span m='865070'>it out</span> <span
  m='865290'>there.</span> <span m='866140'>And</span> <span
  m='866300'>so</span> <span m='866390'>this</span> <span m='866630'>is</span>
  <span m='866810'>theta</span> <span m='867030'>n.</span> </p><p><span
  m='870570'>Now,</span> <span m='870720'>it's</span> <span m='870940'>a</span>
  <span m='870990'>little</span> <span m='871170'>strange</span> <span
  m='871560'>to</span> <span m='871610'>be</span> <span
  m='871710'>talking</span> <span m='871980'>about</span> <span
  m='872180'>theta</span> <span m='872440'>n.</span> <span
  m='872670'>This</span> <span m='872820'>is</span> <span m='872920'>a</span>
  <span m='872990'>data</span> <span m='873230'>structure</span> <span
  m='873600'>supposed</span> <span m='873900'>to</span> <span
  m='873980'>be</span> <span m='874190'>constant</span> <span
  m='874730'>time</span> <span m='875000'>per</span> <span
  m='875250'>operation.</span> <span m='876640'>This</span> <span
  m='876830'>data</span> <span m='877010'>structure</span> <span
  m='877340'>is</span> <span m='877540'>not</span> <span
  m='878210'>constant</span> <span m='878650'>time</span> <span
  m='878910'>per</span> <span m='879070'>operation.</span> <span
  m='880520'>Even</span> <span m='880830'>ignoring</span> <span
  m='881200'>all</span> <span m='881340'>the</span> <span
  m='881410'>hashing</span> <span m='882480'>business,</span> <span
  m='883610'>all</span> <span m='883860'>you're</span> <span
  m='883990'>trying</span> <span m='884210'>to</span> <span m='884290'>do
  is</span> <span m='884510'>grow a</span> <span m='884710'>table.</span> <span
  m='885630'>It</span> <span m='885780'>takes</span> <span
  m='886030'>more</span> <span m='886310'>than</span> <span
  m='886460'>constant</span> <span m='886810'>time</span> <span
  m='887010'>for</span> <span m='887130'>some</span> <span
  m='887360'>operations.</span> <span m='888820'>Near</span> <span
  m='889030'>the</span> <span m='889210'>end,</span> <span m='890080'>you</span>
  <span m='890210'>have</span> <span m='890400'>to</span> <span
  m='890550'>rebuild</span> <span m='891090'>the</span> <span
  m='891290'>last</span> <span m='891720'>time,</span> <span
  m='892760'>you're</span> <span m='893710'>restructuring</span> <span
  m='894370'>the</span> <span m='894480'>entire</span> <span
  m='894960'>table.</span> <span m='895330'>That</span> <span
  m='895490'>take</span> <span m='895690'>linear</span> <span
  m='896030'>time</span> <span m='896330'>for</span> <span m='896510'>one</span>
  <span m='896960'>operation.</span> <span m='899470'>You</span> <span
  m='899560'>might</span> <span m='899770'>say</span> <span
  m='899910'>that's</span> <span m='900200'>bad.</span> <span
  m='901970'>But</span> <span m='902410'>the</span> <span
  m='902550'>comforting</span> <span m='903040'>thing</span> <span
  m='903270'>is</span> <span m='903400'>that</span> <span m='903540'>there
  are</span> <span m='903690'>only</span> <span m='903970'>a</span> <span
  m='904020'>few</span> <span m='904380'>operations,</span> <span
  m='904990'>log</span> <span m='905270'>end</span> <span m='905380'>of</span>
  <span m='905480'>them,</span> <span m='905640'>that</span> <span
  m='905790'>are</span> <span m='905880'>really</span> <span
  m='906100'>expensive.</span> <span m='906980'>The</span> <span
  m='907120'>rest</span> <span m='907420'>are</span> <span m='907500'>all</span>
  <span m='907650'>constant</span> <span m='908030'>time.</span> <span
  m='908240'>You</span> <span m='908310'>don't</span> <span m='908500'>do</span>
  <span m='908640'>anything.</span> <span m='909060'>You</span> <span
  m='909140'>just</span> <span m='909420'>add</span> <span
  m='909730'>into</span> <span m='909810'>the</span> <span
  m='909940'>table.</span> </p><p><span m='911560'>So</span> <span
  m='911600'>this</span> <span m='911840'>is</span> <span m='912130'>an</span>
  <span m='912260'>idea</span> <span m='912570'>we</span> <span
  m='912710'>call</span> <span m='914080'>amortization.</span> <span
  m='924000'>Maybe</span> <span m='924190'>I</span> <span
  m='924240'>should</span> <span m='924450'>write</span> <span
  m='924660'>here--</span> <span m='925510'>we</span> <span
  m='925640'>call</span> <span m='925960'>this</span> <span
  m='926210'>table</span> <span m='926530'>doubling.</span> <span
  m='938370'>So</span> <span m='938660'>the</span> <span m='938790'>idea
  with</span> <span m='938960'>amortization,</span> <span m='939640'>let</span>
  <span m='939750'>me</span> <span m='939840'>give</span> <span
  m='940000'>you</span> <span m='940110'>a</span> <span
  m='940170'>definition.</span> <span m='958618'>Actually,</span> <span
  m='959140'>I'm</span> <span m='959620'>going</span> <span m='959710'>to</span>
  <span m='959760'>be</span> <span m='959870'>a</span> <span
  m='959930'>little</span> <span m='960190'>bit</span> <span
  m='960340'>vague</span> <span m='960470'>here</span> <span
  m='960690'>and</span> <span m='960930'>just</span> <span
  m='961010'>say--</span> <span m='963210'>T</span> <span m='963360'>of
  n.</span> <span m='963970'>Let me see</span> <span m='964200'>what it
  says</span> <span m='964603'>in my notes.</span> <span m='968910'>Yeah.</span>
  <span m='969520'>I</span> <span m='969540'>say</span> <span
  m='969760'>T</span> <span m='969950'>of n.</span> </p><p><span
  m='997590'>So</span> <span m='998660'>we're</span> <span
  m='998800'>going</span> <span m='998910'>to</span> <span m='998950'>use</span>
  <span m='999090'>a</span> <span m='999150'>concept</span> <span
  m='999740'>of--</span> <span m='1000670'>usually</span> <span
  m='1000980'>we</span> <span m='1001060'>say</span> <span
  m='1001820'>running</span> <span m='1002170'>time is</span> <span
  m='1002530'>T</span> <span m='1002720'>of</span> <span m='1002800'>n.</span>
  <span m='1003890'>And</span> <span m='1004160'>we</span> <span
  m='1004250'>started</span> <span m='1004680'>saying</span> <span
  m='1005400'>the</span> <span m='1005500'>expected</span> <span
  m='1006090'>running</span> <span m='1006380'>time</span> <span
  m='1007310'>is</span> <span m='1007980'>some</span> <span m='1008270'>T</span>
  <span m='1008460'>of</span> <span m='1008530'>n</span> <span
  m='1009600'>plus</span> <span m='1009780'>alpha</span> <span
  m='1010110'>or</span> <span m='1010170'>whatever.</span> <span
  m='1011790'>Now,</span> <span m='1012020'>we're</span> <span
  m='1012180'>going</span> <span m='1012300'>to</span> <span
  m='1012350'>be</span> <span m='1012470'>able</span> <span
  m='1012620'>to</span> <span m='1012690'>say</span> <span
  m='1013080'>the</span> <span m='1013350'>amortized</span> <span
  m='1013980'>running</span> <span m='1014260'>time</span> <span
  m='1015050'>is</span> <span m='1015270'>T</span> <span m='1015470'>of</span>
  <span m='1015590'>n,</span> <span m='1016120'>or</span> <span
  m='1016750'>the</span> <span m='1017240'>running</span> <span
  m='1017480'>time</span> <span m='1017730'>is</span> <span m='1017920'>T of
  n</span> <span m='1018260'>amortized.</span> <span m='1019440'>That's</span>
  <span m='1019590'>what</span> <span m='1019880'>this is</span> <span
  m='1020180'>saying.</span> <span m='1021490'>And</span> <span
  m='1021720'>what</span> <span m='1021870'>that</span> <span
  m='1022080'>means</span> <span m='1023030'>is</span> <span
  m='1023260'>that</span> <span m='1024060'>it's</span> <span
  m='1024319'>not</span> <span m='1024569'>any</span> <span
  m='1024859'>statement</span> <span m='1025369'>about</span> <span
  m='1025500'>the</span> <span m='1025609'>individual</span> <span
  m='1026250'>running</span> <span m='1026480'>time</span> <span
  m='1026730'>of</span> <span m='1026780'>the</span> <span
  m='1026900'>operations.</span> <span m='1027295'>It's</span> <span
  m='1027690'>saying</span> <span m='1028000'>if</span> <span
  m='1028170'>you</span> <span m='1028270'>do</span> <span m='1028430'>a</span>
  <span m='1028460'>whole</span> <span m='1028750'>bunch</span> <span
  m='1029020'>of</span> <span m='1029109'>operations,</span> <span
  m='1029660'>k</span> <span m='1029940'>of</span> <span
  m='1030040'>them,</span> <span m='1031040'>then</span> <span
  m='1031310'>the</span> <span m='1031430'>total</span> <span
  m='1031859'>running</span> <span m='1032150'>time</span> <span
  m='1033420'>is,</span> <span m='1033859'>at</span> <span
  m='1034020'>most,</span> <span m='1034280'>k</span> <span
  m='1034520'>times</span> <span m='1034900'>T of</span> <span
  m='1035069'>n.</span> <span m='1035849'>This</span> <span
  m='1036030'>is</span> <span m='1036170'>a</span> <span m='1036250'>way</span>
  <span m='1036440'>to</span> <span m='1036630'>amortize,</span> <span
  m='1037329'>or</span> <span m='1037470'>to--</span> <span
  m='1037839'>yeah,</span> <span m='1038190'>amortize--</span> <span
  m='1038890'>this</span> <span m='1039089'>is</span> <span
  m='1039210'>in</span> <span m='1040240'>the</span> <span
  m='1040640'>economic</span> <span m='1041190'>sense</span> <span
  m='1041430'>of</span> <span m='1041540'>amortize,</span> <span
  m='1042050'>I</span> <span m='1042109'>guess.</span> </p><p><span
  m='1042810'>You</span> <span m='1042910'>spread</span> <span
  m='1043339'>out</span> <span m='1043589'>the</span> <span
  m='1043660'>high</span> <span m='1043890'>costs</span> <span
  m='1044990'>so</span> <span m='1045240'>that's</span> <span
  m='1045530'>it's</span> <span m='1046180'>cheap</span> <span
  m='1046480'>on</span> <span m='1046650'>average</span> <span
  m='1047470'>all</span> <span m='1047690'>the</span> <span
  m='1047770'>time.</span> <span m='1048700'>It's</span> <span
  m='1048840'>kind</span> <span m='1049070'>of</span> <span
  m='1049140'>like--</span> <span m='1049890'>normally,</span> <span
  m='1050250'>we</span> <span m='1050390'>pay</span> <span
  m='1050610'>rent</span> <span m='1051070'>every</span> <span
  m='1051460'>month.</span> <span m='1052640'>But</span> <span
  m='1052950'>you</span> <span m='1053110'>could</span> <span
  m='1053340'>think</span> <span m='1053570'>of</span> <span
  m='1053700'>it</span> <span m='1053790'>instead</span> <span
  m='1054240'>as</span> <span m='1054350'>you're</span> <span
  m='1054520'>only</span> <span m='1054780'>paying</span> <span
  m='1055710'>$50</span> <span m='1056310'>a</span> <span m='1056360'>day</span>
  <span m='1056800'>or</span> <span m='1056830'>something</span> <span
  m='1057300'>for</span> <span m='1057490'>your</span> <span
  m='1057710'>monthly</span> <span m='1058070'>rent.</span> <span
  m='1059490'>It's</span> <span m='1059900'>maybe--</span> <span
  m='1062890'>if</span> <span m='1063040'>you</span> <span
  m='1063130'>want</span> <span m='1063290'>to</span> <span
  m='1063360'>smooth</span> <span m='1063640'>things</span> <span
  m='1063880'>out,</span> <span m='1064180'>that would</span> <span
  m='1064400'>be</span> <span m='1064520'>a</span> <span m='1064560'>nice</span>
  <span m='1064770'>way</span> <span m='1064920'>to</span> <span
  m='1064960'>think</span> <span m='1065140'>about</span> <span
  m='1065380'>paying</span> <span m='1065600'>rent,</span> <span
  m='1065790'>or</span> <span m='1066030'>every</span> <span
  m='1066260'>second</span> <span m='1066690'>you're</span> <span
  m='1066800'>paying</span> <span m='1067780'>a</span> <span
  m='1067930'>penny</span> <span m='1068450'>or</span> <span
  m='1068500'>something.</span> <span m='1072610'>It's</span> <span
  m='1072760'>close,</span> <span m='1073290'>actually.</span> <span
  m='1074830'>Little</span> <span m='1075010'>bit</span> <span
  m='1075150'>off,</span> <span m='1075680'>factor</span> <span m='1076010'>or
  two.</span> </p><p><span m='1077350'>Anyway,</span> <span
  m='1078010'>so</span> <span m='1079090'>that's</span> <span
  m='1079430'>the</span> <span m='1079520'>idea.</span> <span
  m='1079920'>So</span> <span m='1080070'>you</span> <span
  m='1080190'>can</span> <span m='1080340'>think</span> <span
  m='1080580'>of--</span> <span m='1091770'>this is</span> <span
  m='1091990'>kind</span> <span m='1092210'>of</span> <span
  m='1092290'>like</span> <span m='1092510'>saying</span> <span
  m='1092820'>that</span> <span m='1092970'>the</span> <span
  m='1093070'>running</span> <span m='1093320'>time</span> <span
  m='1093540'>of</span> <span m='1093600'>an</span> <span
  m='1093680'>operation</span> <span m='1094110'>is</span> <span m='1094280'>T
  of</span> <span m='1094540'>n</span> <span m='1094900'>on</span> <span
  m='1095160'>average.</span> <span m='1096530'>But</span> <span
  m='1096890'>put</span> <span m='1097050'>that</span> <span
  m='1097190'>in</span> <span m='1097290'>quotes.</span> <span
  m='1097600'>We</span> <span m='1097710'>don't</span> <span
  m='1097860'>usually</span> <span m='1098140'>use</span> <span
  m='1098320'>that</span> <span m='1098520'>terminology.</span> <span
  m='1101280'>Maybe</span> <span m='1101580'>put</span> <span
  m='1101900'>a</span> <span m='1101990'>Tilda</span> <span
  m='1102190'>here.</span> <span m='1105440'>Where</span> <span
  m='1105560'>the</span> <span m='1105730'>average</span> <span
  m='1109620'>is</span> <span m='1109810'>taken</span> <span
  m='1110280'>over</span> <span m='1110670'>all</span> <span
  m='1110880'>the</span> <span m='1110970'>operations.</span> <span
  m='1116810'>So</span> <span m='1116910'>this</span> <span
  m='1117130'>is</span> <span m='1117230'>something</span> <span
  m='1117520'>that</span> <span m='1117650'>only</span> <span
  m='1117910'>makes</span> <span m='1118140'>sense</span> <span
  m='1118370'>for</span> <span m='1118480'>data</span> <span
  m='1118760'>structures.</span> <span m='1119380'>Data</span> <span
  m='1119600'>structures</span> <span m='1120170'>are</span> <span
  m='1121090'>things</span> <span m='1121320'>that</span> <span
  m='1121410'>have</span> <span m='1121580'>lots</span> <span
  m='1121840'>of</span> <span m='1121930'>operations</span> <span
  m='1122480'>on</span> <span m='1122630'>them</span> <span
  m='1122780'>over</span> <span m='1122980'>time.</span> <span
  m='1124230'>And</span> <span m='1124870'>if</span> <span
  m='1125050'>you</span> <span m='1125140'>just--</span> <span
  m='1125460'>instead</span> <span m='1125800'>of</span> <span
  m='1126200'>counting</span> <span m='1126520'>individual</span> <span
  m='1126990'>operation</span> <span m='1127550'>times</span> <span
  m='1127890'>and</span> <span m='1127990'>then</span> <span
  m='1128210'>adding</span> <span m='1128490'>them</span> <span
  m='1128640'>up,</span> <span m='1129350'>if</span> <span
  m='1129500'>you</span> <span m='1129850'>add</span> <span
  m='1130090'>them</span> <span m='1130230'>up</span> <span
  m='1130550'>and</span> <span m='1130690'>then</span> <span
  m='1130820'>divide</span> <span m='1131240'>by</span> <span
  m='1131350'>the</span> <span m='1131450'>number</span> <span
  m='1131680'>of</span> <span m='1131750'>operations,</span> <span
  m='1132970'>that's</span> <span m='1133150'>your</span> <span
  m='1133290'>amortized</span> <span m='1133740'>running</span> <span
  m='1133980'>time.</span> </p><p><span m='1134300'>So</span> <span
  m='1134470'>the</span> <span m='1134590'>point</span> <span
  m='1134830'>is,</span> <span m='1135610'>in</span> <span
  m='1135820'>table</span> <span m='1136180'>doubling,</span> <span
  m='1138740'>the</span> <span m='1138890'>amortized</span> <span
  m='1139470'>running</span> <span m='1139720'>time</span> <span
  m='1140010'>is</span> <span m='1143360'>beta</span> <span
  m='1143600'>1.</span> <span m='1146120'>Because</span> <span
  m='1146340'>it's</span> <span m='1146530'>n</span> <span m='1146780'>in</span>
  <span m='1146900'>total--</span> <span m='1148270'>at</span> <span
  m='1148560'>this</span> <span m='1148720'>point we've</span> <span
  m='1149010'>only</span> <span m='1149240'>analyzed</span> <span
  m='1149590'>insertions.</span> <span m='1150460'>We</span> <span
  m='1150840'>haven't</span> <span m='1151110'>talked</span> <span
  m='1151330'>about</span> <span m='1151530'>deletions.</span> <span
  m='1163340'>So</span> <span m='1163660'>k</span> <span
  m='1164115'>inserts.</span> <span m='1168480'>If</span> <span
  m='1168650'>we're</span> <span m='1168750'>just doing</span> <span
  m='1169030'>insertions,</span> <span m='1169870'>take</span> <span
  m='1170060'>beta</span> <span m='1170150'>k</span> <span
  m='1170550'>time</span> <span m='1172430'>in</span> <span
  m='1172560'>total.</span> <span m='1173250'>So</span> <span
  m='1173430'>this</span> <span m='1173680'>means</span> <span
  m='1175460'>constant</span> <span m='1175850'>amortized</span> <span
  m='1181330'>per</span> <span m='1181830'>insert.</span> </p><p><span
  m='1184415'>OK,</span> <span m='1184860'>it's</span> <span
  m='1185070'>a</span> <span m='1185120'>simple</span> <span
  m='1185420'>idea,</span> <span m='1185830'>but</span> <span
  m='1186050'>a</span> <span m='1186070'>useful</span> <span
  m='1186470'>one</span> <span m='1186820'>because</span> <span
  m='1187820'>typically--</span> <span m='1189460'>unless</span> <span
  m='1189670'>you're</span> <span m='1189850'>in</span> <span
  m='1190010'>like</span> <span m='1190220'>a</span> <span
  m='1190330'>real</span> <span m='1190540'>time</span> <span
  m='1190760'>system--</span> <span m='1191680'>you</span> <span
  m='1191800'>typically</span> <span m='1192940'>only</span> <span
  m='1193190'>care</span> <span m='1193440'>about</span> <span
  m='1193790'>the</span> <span m='1194030'>overall</span> <span
  m='1194470'>running</span> <span m='1194710'>time</span> <span
  m='1194940'>of</span> <span m='1195010'>your</span> <span
  m='1195130'>algorithm,</span> <span m='1195820'>which</span> <span
  m='1195880'>might</span> <span m='1196060'>use</span> <span
  m='1196290'>a</span> <span m='1196360'>data</span> <span
  m='1196600'>structure</span> <span m='1197110'>as</span> <span
  m='1197660'>a</span> <span m='1197720'>sub</span> <span
  m='1197940'>routine.</span> <span m='1198850'>You</span> <span
  m='1199000'>don't</span> <span m='1199150'>care</span> <span
  m='1199290'>if</span> <span m='1199370'>individual</span> <span
  m='1199790'>operations</span> <span m='1200290'>are</span> <span
  m='1200330'>expensive</span> <span m='1200790'>as</span> <span
  m='1200910'>long</span> <span m='1201130'>as</span> <span
  m='1201240'>all</span> <span m='1201470'>the</span> <span
  m='1201570'>operations</span> <span m='1202010'>together</span> <span
  m='1202750'>are</span> <span m='1202890'>cheap.</span> <span
  m='1204620'>You're</span> <span m='1204720'>using</span> <span
  m='1205040'>hashing</span> <span m='1205570'>to</span> <span
  m='1205690'>solve</span> <span m='1205980'>some</span> <span
  m='1206150'>other</span> <span m='1206320'>problem,</span> <span
  m='1206790'>like</span> <span m='1207460'>counting</span> <span
  m='1207870'>duplicate</span> <span m='1208300'>words</span> <span
  m='1209250'>in</span> <span m='1209470'>doc</span> <span
  m='1209770'>dist.</span> <span m='1211080'>You</span> <span
  m='1211260'>just</span> <span m='1211590'>care</span> <span
  m='1211740'>about</span> <span m='1211910'>the</span> <span
  m='1211990'>running</span> <span m='1212220'>time</span> <span m='1212480'>of
  counting</span> <span m='1212920'>duplicate</span> <span
  m='1213130'>words.</span> <span m='1213360'>You</span> <span
  m='1213470'>don't</span> <span m='1213630'>care</span> <span
  m='1213830'>about</span> <span m='1214500'>how</span> <span
  m='1215050'>long</span> <span m='1215360'>each</span> <span
  m='1215910'>step</span> <span m='1216220'>of</span> <span
  m='1216420'>the</span> <span m='1216630'>for</span> <span
  m='1216840'>loop</span> <span m='1217040'>takes,</span> <span
  m='1218390'>just</span> <span m='1218610'>the</span> <span
  m='1218700'>aggregate.</span> <span m='1220420'>So</span> <span
  m='1220580'>this</span> <span m='1220720'>is</span> <span
  m='1220830'>good</span> <span m='1221360'>most</span> <span m='1221600'>of
  the</span> <span m='1221700'>time.</span> <span m='1222020'>And</span> <span
  m='1222690'>we've</span> <span m='1223030'>proved</span> <span m='1223250'>it
  for</span> <span m='1223630'>insertions.</span> </p><p><span
  m='1224550'>It's</span> <span m='1224790'>also</span> <span
  m='1225160'>true</span> <span m='1228260'>when</span> <span
  m='1228410'>you</span> <span m='1228470'>have</span> <span
  m='1228630'>deletions.</span> <span m='1230430'>You have</span> <span
  m='1230590'>k</span> <span m='1231010'>inserts</span> <span
  m='1231400'>and</span> <span m='1231510'>deletes.</span> <span
  m='1238530'>They</span> <span m='1239060'>certainly</span> <span
  m='1239510'>take</span> <span m='1240740'>order</span> <span
  m='1241030'>k</span> <span m='1241290'>time.</span> <span
  m='1242400'>Actually,</span> <span m='1242570'>this</span> <span
  m='1242770'>is</span> <span m='1242910'>easy</span> <span
  m='1243140'>to</span> <span m='1243230'>prove</span> <span
  m='1243480'>at</span> <span m='1243570'>this</span> <span
  m='1243720'>point</span> <span m='1244240'>because</span> <span
  m='1244460'>we</span> <span m='1244580'>haven't</span> <span
  m='1244820'>changed</span> <span m='1245190'>delete.</span> <span
  m='1245890'>So,</span> <span m='1246190'>what</span> <span
  m='1246340'>delete</span> <span m='1246420'>does</span> <span
  m='1246840'>is</span> <span m='1246980'>it</span> <span
  m='1247080'>just</span> <span m='1247280'>deletes</span> <span
  m='1247540'>something</span> <span m='1247850'>from</span> <span
  m='1247990'>the</span> <span m='1248090'>table,</span> <span
  m='1248650'>leaves</span> <span m='1248940'>the</span> <span
  m='1249030'>table</span> <span m='1249350'>the</span> <span
  m='1249430'>same</span> <span m='1249680'>size.</span> <span
  m='1254020'>And</span> <span m='1254210'>so</span> <span m='1254650'>it</span>
  <span m='1254850'>actually</span> <span m='1255230'>makes</span> <span
  m='1255610'>life</span> <span m='1255840'>better</span> <span
  m='1256150'>for</span> <span m='1256370'>us</span> <span
  m='1256750'>because</span> <span m='1257410'>if</span> <span
  m='1257690'>it</span> <span m='1258270'>decreases</span> <span
  m='1258810'>m,</span> <span m='1259730'>in</span> <span
  m='1259910'>order</span> <span m='1260060'>to</span> <span
  m='1260170'>make</span> <span m='1260370'>m</span> <span
  m='1260610'>big</span> <span m='1260850'>again,</span> <span
  m='1261210'>you</span> <span m='1261310'>have</span> <span
  m='1261410'>to</span> <span m='1261510'>do</span> <span
  m='1261610'>more</span> <span m='1261780'>insertions</span> <span
  m='1262280'>than</span> <span m='1262360'>you</span> <span
  m='1262440'>had</span> <span m='1262630'>to</span> <span
  m='1262740'>before.</span> <span m='1263820'>And</span> <span
  m='1264280'>the</span> <span m='1264490'>only</span> <span
  m='1264740'>extra</span> <span m='1265000'>cost</span> <span
  m='1265330'>we're</span> <span m='1265420'>thinking</span> <span
  m='1265720'>about</span> <span m='1265920'>here</span> <span
  m='1266120'>is</span> <span m='1266240'>the</span> <span
  m='1267140'>growing,</span> <span m='1267760'>the</span> <span
  m='1267890'>rebuild</span> <span m='1268280'>cost</span> <span
  m='1268690'>from</span> <span m='1268940'>inserting</span> <span
  m='1269440'>too big.</span> <span m='1270890'>And</span> <span
  m='1271050'>so</span> <span m='1271180'>this</span> <span
  m='1271420'>is</span> <span m='1271570'>still</span> <span
  m='1271930'>true.</span> <span m='1272220'>Deletions</span> <span
  m='1272710'>only</span> <span m='1272920'>help</span> <span
  m='1273200'>us.</span> </p><p><span m='1274740'>If you</span> <span
  m='1274810'>have</span> <span m='1274940'>k</span> <span
  m='1275310'>total</span> <span m='1275780'>inserts</span> <span
  m='1276130'>and</span> <span m='1276220'>deletes,</span> <span
  m='1277320'>then</span> <span m='1278220'>still</span> <span
  m='1278440'>be</span> <span m='1278570'>order</span> <span
  m='1278770'>k.</span> <span m='1279090'>So</span> <span
  m='1279290'>still</span> <span m='1279510'>get</span> <span
  m='1279690'>constant</span> <span m='1280030'>amortized.</span> <span
  m='1283956'>But</span> <span m='1285360'>this</span> <span
  m='1285510'>is</span> <span m='1285630'>not</span> <span
  m='1285830'>totally</span> <span m='1286140'>satisfying</span> <span
  m='1286980'>because</span> <span m='1287740'>of</span> <span
  m='1288260'>table</span> <span m='1288960'>might</span> <span
  m='1289090'>get</span> <span m='1289120'>big</span> <span
  m='1289460'>again.</span> <span m='1290330'>m</span> <span
  m='1290780'>might</span> <span m='1291020'>become</span> <span
  m='1291360'>much</span> <span m='1291620'>larger</span> <span
  m='1291980'>than</span> <span m='1292150'>n.</span> <span
  m='1292800'>For</span> <span m='1292940'>example,</span> <span
  m='1293740'>suppose</span> <span m='1294120'>I</span> <span
  m='1294170'>do</span> <span m='1294400'>n</span> <span
  m='1294600'>inserts</span> <span m='1295710'>and</span> <span
  m='1295870'>then</span> <span m='1296030'>I</span> <span m='1296100'>do</span>
  <span m='1296350'>n</span> <span m='1296550'>deletes.</span> <span
  m='1297820'>So</span> <span m='1298000'>now I</span> <span
  m='1298100'>have</span> <span m='1298250'>an</span> <span
  m='1298370'>empty</span> <span m='1298700'>table,</span> <span
  m='1299610'>n</span> <span m='1299810'>equals</span> <span
  m='1300120'>0,</span> <span m='1301070'>but</span> <span m='1301280'>m</span>
  <span m='1301640'>is</span> <span m='1301760'>going</span> <span
  m='1301920'>to</span> <span m='1301990'>be</span> <span
  m='1302160'>around</span> <span m='1303530'>the</span> <span
  m='1303650'>original</span> <span m='1303940'>value</span> <span
  m='1304190'>of</span> <span m='1304250'>n,</span> <span m='1304990'>or</span>
  <span m='1305070'>the</span> <span m='1305190'>maximum</span> <span
  m='1305710'>value</span> <span m='1306040'>of</span> <span
  m='1306110'>n</span> <span m='1306790'>over</span> <span
  m='1307000'>time.</span> <span m='1310050'>So</span> <span
  m='1312150'>we</span> <span m='1312300'>can</span> <span
  m='1312500'>fix</span> <span m='1312740'>that.</span> <span
  m='1314710'>Suggestions</span> <span m='1315230'>on</span> <span
  m='1315360'>how</span> <span m='1315460'>to</span> <span
  m='1315530'>fix</span> <span m='1315780'>that?</span> <span
  m='1320860'>This</span> <span m='1320960'>is</span> <span m='1321050'>a</span>
  <span m='1321110'>little</span> <span m='1321380'>more</span> <span
  m='1321700'>subtle.</span> <span m='1323040'>There's</span> <span
  m='1323110'>two</span> <span m='1323280'>obvious</span> <span
  m='1323610'>answers.</span> <span m='1324550'>One</span> <span
  m='1324810'>is</span> <span m='1324980'>correct</span> <span m='1325315'>and
  the</span> <span m='1325650'>other is</span> <span
  m='1325940'>incorrect.</span> <span m='1328460'>Yeah?</span> </p><p><span
  m='1329420'>AUDIENCE: [INAUDIBLE]</span> </p><p><span m='1334220'>PROFESSOR:
  Good.</span> <span m='1335660'>So</span> <span m='1336630'>option</span> <span
  m='1337130'>one</span> <span m='1337950'>is</span> <span m='1338550'>if</span>
  <span m='1338960'>the</span> <span m='1339090'>table</span> <span
  m='1341060'>becomes</span> <span m='1341840'>half the</span> <span
  m='1342280'>size,</span> <span m='1343440'>then</span> <span
  m='1343690'>shrink--</span> <span m='1347970'>to</span> <span
  m='1348410'>half</span> <span m='1348590'>the</span> <span
  m='1348680'>size?</span> <span m='1351000'>Sure.</span> <span
  m='1357390'>OK.</span> <span m='1358540'>That's</span> <span
  m='1358740'>on</span> <span m='1358840'>the</span> <span
  m='1358920'>right</span> <span m='1359110'>track.</span> <span
  m='1359590'>Anyone</span> <span m='1359930'>see</span> <span
  m='1360040'>a</span> <span m='1360110'>problem</span> <span
  m='1360360'>with</span> <span m='1360470'>that?</span> <span
  m='1362288'>Yeah?</span> </p><p><span m='1363240'>AUDIENCE: [INAUDIBLE]</span>
  <span m='1364192'>when you're going</span> <span m='1364670'>from like 8 to
  9,</span> <span m='1365790'>you can go from</span> <span m='1366170'>8 to
  9,</span> <span m='1366536'>9 to 8,</span> <span
  m='1366902'>[INAUDIBLE].</span> </p><p><span m='1367270'>PROFESSOR:
  Good.</span> <span m='1368710'>So</span> <span m='1369170'>if you're</span>
  <span m='1369530'>sizing</span> <span m='1370000'>and</span> <span
  m='1370090'>say</span> <span m='1370230'>you</span> <span
  m='1373500'>have</span> <span m='1373730'>eight</span> <span
  m='1373950'>items</span> <span m='1374280'>in</span> <span
  m='1374360'>your</span> <span m='1374490'>table,</span> <span
  m='1377150'>you</span> <span m='1377560'>add</span> <span m='1377840'>a</span>
  <span m='1377880'>ninth</span> <span m='1378250'>item</span> <span
  m='1378810'>and</span> <span m='1378930'>so</span> <span
  m='1379020'>you</span> <span m='1379130'>double</span> <span
  m='1379490'>to</span> <span m='1379580'>16.</span> <span
  m='1381390'>Then</span> <span m='1381540'>you</span> <span
  m='1381650'>delete</span> <span m='1382090'>that</span> <span
  m='1382280'>ninth</span> <span m='1382550'>item,</span> <span
  m='1383110'>you're</span> <span m='1383200'>back</span> <span
  m='1383450'>to</span> <span m='1383590'>eight.</span> <span
  m='1383820'>And</span> <span m='1383960'>then</span> <span
  m='1384090'>you</span> <span m='1384190'>say</span> <span
  m='1384360'>oh,</span> <span m='1384840'>now</span> <span m='1385130'>m</span>
  <span m='1385340'>equals</span> <span m='1385600'>n/2,</span> <span
  m='1386440'>so</span> <span m='1386560'>I'm</span> <span
  m='1386620'>going</span> <span m='1386700'>to</span> <span
  m='1386740'>shrink</span> <span m='1387050'>to</span> <span
  m='1387140'>half</span> <span m='1387360'>the</span> <span
  m='1387450'>size.</span> <span m='1388620'>And if I</span> <span
  m='1388860'>insert</span> <span m='1389200'>again--</span> <span
  m='1389760'>delete,</span> <span m='1390140'>insert,</span> <span
  m='1390670'>delete,</span> <span m='1390960'>insert--</span> <span
  m='1391860'>I</span> <span m='1392080'>spend</span> <span
  m='1392390'>linear</span> <span m='1392770'>time</span> <span
  m='1393220'>for</span> <span m='1393480'>every</span> <span
  m='1393800'>operation.</span> <span m='1395030'>So</span> <span
  m='1395150'>that's</span> <span m='1395460'>the</span> <span
  m='1395510'>problem.</span> <span m='1398810'>This</span> <span
  m='1399080'>is</span> <span m='1399790'>slow.</span> <span
  m='1402690'>If</span> <span m='1402790'>we</span> <span m='1402900'>go</span>
  <span m='1403130'>from</span> <span m='1403350'>2</span> <span
  m='1403560'>to</span> <span m='1403640'>the</span> <span m='1403780'>k</span>
  <span m='1405330'>to</span> <span m='1405600'>2 to the</span> <span
  m='1405740'>k</span> <span m='1406350'>plus</span> <span m='1406720'>1,</span>
  <span m='1407830'>we</span> <span m='1407960'>go</span> <span
  m='1408110'>this</span> <span m='1408330'>way</span> <span
  m='1408520'>via--</span> <span m='1409530'>oh sorry,</span> <span
  m='1409850'>2 to</span> <span m='1410080'>the</span> <span
  m='1410200'>k</span> <span m='1410440'>plus</span> <span m='1410820'>1.</span>
  <span m='1411950'>Then,</span> <span m='1412920'>I</span> <span
  m='1412950'>said</span> <span m='1413190'>it</span> <span
  m='1413260'>right,</span> <span m='1414740'>insert</span> <span
  m='1415110'>to</span> <span m='1415270'>go</span> <span m='1415440'>to</span>
  <span m='1415560'>the</span> <span m='1415660'>right,</span> <span
  m='1416010'>delete</span> <span m='1416220'>to go to</span> <span
  m='1416340'>the</span> <span m='1416580'>left.</span> <span
  m='1417560'>Then</span> <span m='1418070'>we'll</span> <span
  m='1418320'>get</span> <span m='1418610'>linear</span> <span
  m='1418920'>time</span> <span m='1419190'>for</span> <span
  m='1419330'>operation.</span> <span m='1424550'>That</span> <span
  m='1424790'>is</span> <span m='1425070'>that.</span> <span
  m='1426820'>So,</span> <span m='1427070'>how</span> <span
  m='1427230'>do</span> <span m='1427300'>we</span> <span m='1427420'>fix</span>
  <span m='1427650'>this?</span> <span m='1428948'>Yeah.</span> </p><p><span
  m='1430310'>AUDIENCE: Maybe m</span> <span m='1430764'>equal</span> <span
  m='1431218'>m/3</span> <span m='1431672'>or something?</span> </p><p><span
  m='1432580'>PROFESSOR: M equals</span> <span m='1433020'>n</span> <span
  m='1433130'>over</span> <span m='1433300'>3.</span> <span
  m='1433910'>Yep.</span> </p><p><span m='1434783'>AUDIENCE: And then still
  leave it</span> <span m='1435266'>[INAUDIBLE].</span> </p><p><span
  m='1444926'>PROFESSOR: Good.</span> <span m='1445910'>I'm going to</span>
  <span m='1446020'>do</span> <span m='1446260'>4,</span> <span m='1446790'>if
  you don't</span> <span m='1447020'>mind.</span> <span m='1447360'>I'll</span>
  <span m='1447540'>keep</span> <span m='1447640'>it powers</span> <span
  m='1448040'>of</span> <span m='1448400'>2.</span> <span m='1448680'>Any</span>
  <span m='1448910'>number</span> <span m='1449200'>bigger</span> <span
  m='1449430'>than</span> <span m='1449590'>3</span> <span m='1449810'>will
  work--</span> <span m='1450240'>or</span> <span m='1450490'>any</span> <span
  m='1450680'>number</span> <span m='1450940'>bigger</span> <span
  m='1451170'>than</span> <span m='1451330'>2</span> <span
  m='1451720'>will</span> <span m='1452010'>work here.</span> <span
  m='1453970'>But it's</span> <span m='1454440'>kind</span> <span
  m='1454720'>of</span> <span m='1454790'>nice to stick to</span> <span
  m='1455250'>powers</span> <span m='1455530'>of</span> <span
  m='1455620'>two.</span> <span m='1457700'>Just</span> <span
  m='1457910'>for</span> <span m='1458000'>fun.</span> <span
  m='1458380'>I</span> <span m='1458460'>mean,</span> <span
  m='1458610'>doesn't</span> <span m='1458810'>really</span> <span
  m='1458990'>matter</span> <span m='1459280'>because,</span> <span
  m='1459550'>as</span> <span m='1459660'>you</span> <span
  m='1459760'>say,</span> <span m='1460320'>we're</span> <span
  m='1460450'>still</span> <span m='1460690'>going</span> <span
  m='1460910'>to</span> <span m='1460970'>shrink</span> <span
  m='1461310'>to</span> <span m='1461450'>half</span> <span
  m='1461800'>the</span> <span m='1461900'>size,</span> <span
  m='1462910'>but</span> <span m='1463040'>we're</span> <span
  m='1463190'>only</span> <span m='1463340'>going</span> <span
  m='1463440'>to</span> <span m='1463520'>trigger</span> <span
  m='1463910'>it</span> <span m='1464010'>when</span> <span m='1464160'>we
  are</span> <span m='1465100'>3/4</span> <span m='1465730'>empty.</span> <span
  m='1467350'>We're</span> <span m='1467550'>only</span> <span
  m='1467770'>using</span> <span m='1468000'>a</span> <span
  m='1468090'>quarter</span> <span m='1468340'>of</span> <span
  m='1468400'>the</span> <span m='1468510'>space.</span> <span
  m='1469290'>Then,</span> <span m='1469970'>it</span> <span
  m='1470070'>turns</span> <span m='1470320'>out</span> <span
  m='1470480'>you</span> <span m='1470590'>can</span> <span
  m='1470720'>afford</span> <span m='1471130'>to</span> <span
  m='1471190'>shrink</span> <span m='1471470'>to</span> <span
  m='1471550'>half</span> <span m='1471880'>the</span> <span
  m='1471990'>size</span> <span m='1472790'>because</span> <span
  m='1473140'>in</span> <span m='1473240'>order</span> <span
  m='1474080'>to</span> <span m='1474420'>explode</span> <span
  m='1474900'>again,</span> <span m='1475120'>in order to</span> <span
  m='1475450'>need</span> <span m='1475630'>to</span> <span
  m='1475700'>grow</span> <span m='1476000'>again,</span> <span
  m='1476340'>you</span> <span m='1476440'>have</span> <span
  m='1476490'>to</span> <span m='1476620'>still</span> <span
  m='1476880'>insert</span> <span m='1477340'>n</span> <span
  m='1477480'>over</span> <span m='1478410'>m--</span> <span
  m='1480920'>m</span> <span m='1481110'>over</span> <span m='1481350'>2</span>
  <span m='1481570'>items.</span> <span m='1482900'>Because</span> <span
  m='1483130'>it's</span> <span m='1483270'>half</span> <span
  m='1483560'>empty.</span> </p><p><span m='1484060'>So</span> <span
  m='1484280'>when</span> <span m='1484400'>you're</span> <span
  m='1485000'>only</span> <span m='1485210'>a</span> <span
  m='1485280'>quarter</span> <span m='1485580'>full,</span> <span
  m='1486360'>you</span> <span m='1486470'>shrink</span> <span
  m='1486730'>to</span> <span m='1486820'>become</span> <span
  m='1487130'>a</span> <span m='1487160'>half</span> <span
  m='1487460'>full</span> <span m='1488120'>because</span> <span
  m='1488420'>then</span> <span m='1488580'>to</span> <span
  m='1488710'>grow</span> <span m='1489000'>again</span> <span
  m='1489740'>requires</span> <span m='1490100'>a</span> <span
  m='1490140'>lot</span> <span m='1490280'>of</span> <span
  m='1490350'>insertions.</span> <span m='1490950'>I</span> <span
  m='1491050'>haven't</span> <span m='1491230'>proved</span> <span
  m='1491630'>anything</span> <span m='1491980'>here,</span> <span
  m='1492700'>but</span> <span m='1492820'>it</span> <span
  m='1492890'>turns</span> <span m='1493110'>out</span> <span
  m='1493270'>if</span> <span m='1493470'>you</span> <span m='1493580'>do</span>
  <span m='1493740'>this,</span> <span m='1494840'>the</span> <span
  m='1495080'>amortized</span> <span m='1495660'>time</span> <span
  m='1501460'>becomes</span> <span m='1502140'>constant.</span> <span
  m='1505050'>For</span> <span m='1505430'>k</span> <span
  m='1505850'>insertions</span> <span m='1506400'>and</span> <span
  m='1506530'>deletions,</span> <span m='1507180'>arbitrary</span> <span
  m='1507690'>combination,</span> <span m='1509360'>you'll</span> <span
  m='1509510'>maintain</span> <span m='1509980'>linear</span> <span
  m='1510320'>size</span> <span m='1510760'>because</span> <span
  m='1511080'>of</span> <span m='1511180'>these</span> <span
  m='1511380'>two--</span> <span m='1512130'>because</span> <span
  m='1512450'>you're</span> <span m='1512740'>maintaining</span> <span
  m='1513240'>the</span> <span m='1513330'>invariant</span> <span
  m='1513840'>that</span> <span m='1514030'>m</span> <span m='1514310'>is</span>
  <span m='1514490'>between</span> <span m='1521200'>n</span> <span
  m='1521420'>and</span> <span m='1521520'>4n.</span> <span
  m='1524800'>You</span> <span m='1524900'>maintain</span> <span
  m='1525250'>that</span> <span m='1525420'>invariant.</span> <span
  m='1525890'>That's</span> <span m='1526030'>easy</span> <span
  m='1526250'>to</span> <span m='1526350'>check.</span> <span
  m='1526770'>So</span> <span m='1526920'>you</span> <span
  m='1527040'>always</span> <span m='1527240'>have</span> <span
  m='1527390'>linear</span> <span m='1527710'>size.</span> <span
  m='1528850'>And</span> <span m='1529170'>the</span> <span
  m='1529280'>amortized</span> <span m='1529790'>running</span> <span
  m='1530020'>time</span> <span m='1530210'>becomes</span> <span
  m='1530600'>constant.</span> <span m='1532090'>We</span> <span
  m='1532170'>don't</span> <span m='1532340'>really</span> <span
  m='1532520'>have</span> <span m='1532690'>time</span> <span
  m='1532910'>to</span> <span m='1532990'>prove</span> <span
  m='1533325'>that</span> <span m='1533660'>in</span> <span
  m='1533820'>the</span> <span m='1533910'>class. It's a</span> <span
  m='1534330'>little</span> <span m='1534530'>bit</span> <span
  m='1534680'>tricky.</span> <span m='1535830'>Read</span> <span
  m='1536090'>the</span> <span m='1536170'>textbook</span> <span
  m='1536515'>if</span> <span m='1536860'>you</span> <span
  m='1536890'>want</span> <span m='1537070'>to</span> <span
  m='1537110'>know</span> <span m='1537740'>it.</span> </p><p><span
  m='1541640'>That's</span> <span m='1541800'>table</span> <span
  m='1542100'>doubling.</span> <span m='1542700'>Questions?</span> <span
  m='1545910'>All</span> <span m='1545980'>right.</span> <span
  m='1547790'>Boring.</span> <span m='1548680'>No.</span> <span
  m='1548980'>It's</span> <span m='1549530'>cool</span> <span
  m='1550240'>because</span> <span m='1550810'>not</span> <span
  m='1551140'>only</span> <span m='1551440'>can</span> <span
  m='1551640'>we</span> <span m='1551760'>solve</span> <span
  m='1552330'>the</span> <span m='1552760'>hashing</span> <span
  m='1553240'>problem</span> <span m='1553610'>of</span> <span
  m='1553700'>how</span> <span m='1553910'>do</span> <span m='1554010'>we</span>
  <span m='1554110'>set</span> <span m='1554380'>m</span> <span
  m='1554700'>in</span> <span m='1554810'>order</span> <span
  m='1555000'>to</span> <span m='1555100'>keep</span> <span m='1555360'>alpha
  a</span> <span m='1555780'>constant,</span> <span m='1556800'>we</span> <span
  m='1556910'>can</span> <span m='1557040'>also</span> <span
  m='1557290'>solve</span> <span m='1557730'>Python</span> <span
  m='1558120'>lists.</span> <span m='1558700'>Python</span> <span
  m='1559060'>lists</span> <span m='1559950'>are</span> <span
  m='1560750'>also</span> <span m='1561010'>known</span> <span
  m='1561270'>as</span> <span m='1561910'>resizable</span> <span
  m='1562550'>arrays.</span> <span m='1566250'>You</span> <span m='1566360'>may
  have</span> <span m='1566520'>wondered</span> <span m='1566860'>how</span>
  <span m='1567030'>they</span> <span m='1567160'>work.</span> <span
  m='1567480'>Because</span> <span m='1567790'>they</span> <span
  m='1567940'>offer</span> <span m='1568260'>random</span> <span
  m='1568650'>access,</span> <span m='1569120'>we</span> <span
  m='1569260'>can</span> <span m='1569410'>go</span> <span m='1569580'>to</span>
  <span m='1569670'>the</span> <span m='1570380'>ith</span> <span
  m='1570640'>item</span> <span m='1571040'>in</span> <span
  m='1571130'>constant</span> <span m='1571550'>time</span> <span
  m='1572480'>and</span> <span m='1572710'>modify</span> <span
  m='1573280'>it</span> <span m='1573420'>or</span> <span m='1573570'>get</span>
  <span m='1573800'>the</span> <span m='1573870'>value.</span> <span
  m='1574930'>We</span> <span m='1575140'>can</span> <span
  m='1575410'>add</span> <span m='1575660'>a</span> <span m='1575710'>new</span>
  <span m='1575930'>item</span> <span m='1576220'>at</span> <span
  m='1576340'>the</span> <span m='1576480'>end in</span> <span
  m='1576890'>constant</span> <span m='1577290'>time.</span> <span
  m='1577990'>That's</span> <span m='1578620'>append.</span> <span
  m='1579900'>list.append.</span> <span m='1584990'>And</span> <span
  m='1585210'>we</span> <span m='1585360'>can</span> <span
  m='1585500'>delete</span> <span m='1585860'>the</span> <span
  m='1585940'>last</span> <span m='1586270'>item</span> <span
  m='1586490'>in</span> <span m='1586570'>constant</span> <span
  m='1586940'>time.</span> <span m='1588830'>One</span> <span
  m='1589210'>version is</span> <span m='1589720'>list.pop.</span> <span
  m='1590375'>It's</span> <span m='1590640'>also</span> <span
  m='1590960'>delete</span> <span m='1591430'>list,</span> <span
  m='1592280'>square</span> <span m='1592610'>bracket</span> <span
  m='1592930'>minus</span> <span m='1593210'>1.</span> <span
  m='1595300'>You</span> <span m='1595600'>should</span> <span
  m='1595860'>know</span> <span m='1596220'>that</span> <span
  m='1596350'>deleting</span> <span m='1596630'>the</span> <span
  m='1596700'>first</span> <span m='1596990'>item</span> <span
  m='1597190'>is</span> <span m='1597280'>not</span> <span
  m='1597510'>constant</span> <span m='1597860'>time.</span> <span
  m='1598070'>That</span> <span m='1598240'>takes</span> <span
  m='1598430'>linear</span> <span m='1598720'>time</span> <span
  m='1599100'>because</span> <span m='1599330'>what</span> <span
  m='1599520'>it</span> <span m='1599620'>does</span> <span
  m='1599860'>is</span> <span m='1599990'>it</span> <span
  m='1600250'>copies</span> <span m='1600640'>all</span> <span
  m='1600750'>the</span> <span m='1600810'>values</span> <span
  m='1601170'>over.</span> <span m='1602860'>Python</span> <span
  m='1603190'>lists</span> <span m='1603430'>are</span> <span
  m='1603510'>implemented</span> <span m='1603940'>by</span> <span
  m='1604090'>arrays.</span> </p><p><span m='1605280'>But</span> <span
  m='1605400'>how</span> <span m='1605650'>do</span> <span
  m='1605720'>you</span> <span m='1605870'>support</span> <span
  m='1606270'>this</span> <span m='1606430'>dynamicness</span> <span
  m='1607260'>where</span> <span m='1607420'>you</span> <span
  m='1607550'>can</span> <span m='1607830'>increase</span> <span
  m='1608250'>the</span> <span m='1608350'>length</span> <span
  m='1608650'>and</span> <span m='1608760'>decrease</span> <span
  m='1609130'>the</span> <span m='1609220'>length,</span> <span
  m='1609470'>and</span> <span m='1609600'>still</span> <span
  m='1609800'>keep</span> <span m='1610050'>linear</span> <span
  m='1610410'>space?</span> <span m='1611630'>Well,</span> <span
  m='1611870'>you</span> <span m='1612030'>do</span> <span
  m='1612190'>table</span> <span m='1612500'>doubling.</span> <span
  m='1613950'>And</span> <span m='1614120'>I</span> <span
  m='1614180'>don't</span> <span m='1614300'>know</span> <span
  m='1614440'>whether</span> <span m='1614740'>Python</span> <span
  m='1615080'>uses</span> <span m='1615360'>two</span> <span
  m='1615760'>or</span> <span m='1615910'>some</span> <span
  m='1616090'>other</span> <span m='1616270'>constant,</span> <span
  m='1617160'>but</span> <span m='1617980'>any</span> <span
  m='1618170'>constant</span> <span m='1618550'>will</span> <span
  m='1618700'>do,</span> <span m='1619010'>as</span> <span
  m='1619120'>long</span> <span m='1619370'>as</span> <span
  m='1619550'>the</span> <span m='1619690'>deletion</span> <span
  m='1620130'>constant</span> <span m='1620540'>is</span> <span
  m='1620710'>smaller</span> <span m='1621200'>than</span> <span
  m='1621440'>the</span> <span m='1622030'>insertion</span> <span
  m='1622440'>constant.</span> <span m='1625350'>And</span> <span
  m='1625900'>that's</span> <span m='1626080'>how</span> <span
  m='1626150'>they</span> <span m='1626240'>work.</span> <span
  m='1626690'>So</span> <span m='1626930'>in</span> <span
  m='1627020'>fact,</span> <span m='1627520'>list.append</span> <span
  m='1628250'>and</span> <span m='1628330'>list.pop</span> <span
  m='1629010'>are</span> <span m='1629180'>constant</span> <span
  m='1629600'>amortized.</span> <span m='1632240'>Before,</span> <span
  m='1632900'>we</span> <span m='1633040'>just</span> <span
  m='1633210'>said</span> <span m='1634270'>for</span> <span
  m='1634370'>simplicity,</span> <span m='1634920'>they're</span> <span
  m='1635060'>constant</span> <span m='1635630'>time</span> <span
  m='1636300'>and</span> <span m='1636680'>for the</span> <span
  m='1636790'>most</span> <span m='1637010'>part</span> <span
  m='1637170'>you</span> <span m='1637250'>can</span> <span
  m='1637340'>just</span> <span m='1637470'>think</span> <span
  m='1637630'>of</span> <span m='1637690'>them</span> <span
  m='1637810'>as</span> <span m='1637930'>constant</span> <span
  m='1638290'>time.</span> <span m='1638500'>But</span> <span
  m='1638620'>in</span> <span m='1638720'>reality,</span> <span m='1639680'>they
  are</span> <span m='1639850'>constant</span> <span
  m='1640210'>amortized.</span> </p><p><span m='1640720'>Now</span> <span
  m='1640850'>for</span> <span m='1641000'>fun,</span> <span
  m='1641490'>just</span> <span m='1641720'>in</span> <span
  m='1641760'>case</span> <span m='1641990'>you're</span> <span
  m='1642080'>curious,</span> <span m='1643110'>you</span> <span
  m='1643300'>can</span> <span m='1643530'>do</span> <span m='1643970'>all
  of</span> <span m='1644350'>this</span> <span m='1644520'>stuff</span> <span
  m='1644870'>in</span> <span m='1645030'>constant</span> <span
  m='1645600'>worst</span> <span m='1645930'>case</span> <span
  m='1646190'>time</span> <span m='1646560'>per</span> <span
  m='1646670'>operation.</span> <span m='1647870'>May be</span> <span
  m='1648210'>a</span> <span m='1648260'>fun</span> <span
  m='1648480'>exercise.</span> <span m='1650870'>Do you</span> <span
  m='1650990'>want</span> <span m='1651130'>to</span> <span
  m='1651170'>know</span> <span m='1651330'>how?</span> <span
  m='1653090'>Yeah?</span> <span m='1654350'>Rough</span> <span
  m='1654620'>idea</span> <span m='1655090'>is</span> <span
  m='1656380'>when</span> <span m='1656540'>you</span> <span
  m='1656670'>realize</span> <span m='1657150'>that</span> <span
  m='1657280'>you're</span> <span m='1659680'>getting</span> <span
  m='1660070'>kind</span> <span m='1660470'>of</span> <span
  m='1660560'>full,</span> <span m='1661560'>you</span> <span
  m='1661690'>start</span> <span m='1662100'>building</span> <span
  m='1662500'>on</span> <span m='1662650'>the</span> <span
  m='1662740'>side</span> <span m='1663240'>a</span> <span
  m='1663290'>new</span> <span m='1663510'>table of</span> <span
  m='1663960'>twice</span> <span m='1664270'>the</span> <span
  m='1664360'>size.</span> <span m='1665740'>And</span> <span
  m='1665950'>every</span> <span m='1666220'>time</span> <span
  m='1666580'>you</span> <span m='1666890'>insert</span> <span
  m='1667260'>into</span> <span m='1667490'>the</span> <span
  m='1667650'>actual</span> <span m='1668070'>table,</span> <span
  m='1668940'>you</span> <span m='1669080'>move</span> <span
  m='1669390'>like</span> <span m='1669590'>five</span> <span
  m='1670020'>of</span> <span m='1670150'>the</span> <span
  m='1670310'>items</span> <span m='1670620'>over</span> <span
  m='1670960'>to</span> <span m='1671060'>the</span> <span
  m='1671180'>new</span> <span m='1671330'>table,</span> <span
  m='1672280'>or</span> <span m='1672380'>some</span> <span
  m='1672730'>constant--</span> <span m='1673055'>it needs</span> <span
  m='1673380'>to</span> <span m='1673460'>be</span> <span m='1673560'>a</span>
  <span m='1673610'>big</span> <span m='1673800'>enough</span> <span
  m='1674000'>constant.</span> <span m='1674900'>So that</span> <span
  m='1675010'>by</span> <span m='1675210'>the</span> <span
  m='1675320'>time</span> <span m='1675590'>you're</span> <span
  m='1675740'>full,</span> <span m='1676430'>you</span> <span
  m='1676540'>just</span> <span m='1676630'>switch</span> <span
  m='1677010'>over</span> <span m='1677240'>immediately</span> <span
  m='1677660'>to</span> <span m='1677780'>the</span> <span
  m='1677900'>other</span> <span m='1678070'>structure.</span> <span
  m='1678880'>It's</span> <span m='1679230'>kind</span> <span
  m='1679310'>of</span> <span m='1679380'>cool.</span> <span
  m='1680720'>It's</span> <span m='1680960'>very</span> <span
  m='1681140'>tricky</span> <span m='1681430'>to</span> <span
  m='1681500'>actually</span> <span m='1681760'>get</span> <span
  m='1681900'>that</span> <span m='1682060'>to</span> <span
  m='1682150'>work.</span> <span m='1682370'>But</span> <span
  m='1682890'>if</span> <span m='1683050'>you're</span> <span
  m='1683350'>in</span> <span m='1683440'>a</span> <span m='1683490'>real</span>
  <span m='1683680'>time</span> <span m='1683890'>system,</span> <span
  m='1684200'>you</span> <span m='1684320'>might</span> <span
  m='1684510'>care</span> <span m='1684710'>to</span> <span
  m='1684780'>know</span> <span m='1684920'>that.</span> <span
  m='1685710'>For</span> <span m='1685780'>the</span> <span
  m='1685870'>most</span> <span m='1686100'>part,</span> <span
  m='1686280'>people</span> <span m='1686500'>don't</span> <span
  m='1686660'>implement</span> <span m='1687100'>those</span> <span
  m='1687300'>things</span> <span m='1688210'>because</span> <span
  m='1688620'>they're</span> <span m='1688750'>complicated,</span> <span
  m='1689470'>but</span> <span m='1689690'>it</span> <span m='1689790'>is</span>
  <span m='1689930'>possible</span> <span m='1690750'>to</span> <span
  m='1690940'>get</span> <span m='1691070'>rid</span> <span
  m='1691250'>of</span> <span m='1691350'>all</span> <span
  m='1691490'>these</span> <span m='1691650'>amortized.</span> <span
  m='1694590'>Cool.</span> <span m='1694875'>&nbsp;</span> </p><p><span
  m='1697450'>Let's</span> <span m='1697660'>move</span> <span
  m='1697850'>onto</span> <span m='1698390'>the</span> <span
  m='1698580'>next</span> <span m='1698940'>topic,</span> <span
  m='1700980'>which</span> <span m='1701130'>is</span> <span
  m='1701270'>more</span> <span m='1701570'>hashing</span> <span
  m='1701970'>related.</span> <span m='1703770'>This</span> <span
  m='1703960'>was</span> <span m='1704050'>sort</span> <span
  m='1704200'>of</span> <span m='1704290'>general</span> <span
  m='1704640'>data</span> <span m='1704870'>structures</span> <span
  m='1705400'>in</span> <span m='1705570'>order</span> <span
  m='1705780'>to</span> <span m='1705890'>implement</span> <span
  m='1706730'>hashing</span> <span m='1707110'>with</span> <span
  m='1707230'>chaining,</span> <span m='1707710'>but</span> <span
  m='1708570'>didn't</span> <span m='1708790'>really</span> <span
  m='1709060'>care</span> <span m='1709390'>about</span> <span
  m='1709900'>hashing</span> <span m='1710860'>per</span> <span
  m='1711060'>se.</span> <span m='1712650'>We</span> <span
  m='1712810'>assumed</span> <span m='1713190'>here</span> <span
  m='1713410'>that</span> <span m='1713540'>we</span> <span
  m='1713670'>can</span> <span m='1713800'>evaluate</span> <span
  m='1714300'>the</span> <span m='1714360'>hash</span> <span
  m='1714610'>function</span> <span m='1714930'>in</span> <span
  m='1715030'>constant</span> <span m='1715530'>time,</span> <span
  m='1716080'>that</span> <span m='1716210'>we</span> <span
  m='1716320'>can</span> <span m='1716430'>do</span> <span
  m='1716530'>insertion</span> <span m='1716970'>in</span> <span
  m='1717050'>constant</span> <span m='1717420'>time,</span> <span
  m='1717660'>but</span> <span m='1717750'>that's</span> <span
  m='1717990'>the</span> <span m='1718060'>name</span> <span
  m='1718250'>of</span> <span m='1718310'>the</span> <span
  m='1718390'>game</span> <span m='1718610'>here.</span> <span
  m='1719670'>But</span> <span m='1719830'>otherwise,</span> <span
  m='1720250'>we</span> <span m='1720350'>didn't</span> <span
  m='1720500'>really</span> <span m='1720690'>care--</span> <span
  m='1721100'>as</span> <span m='1721220'>long</span> <span
  m='1721440'>as</span> <span m='1721580'>the</span> <span
  m='1721690'>rebuilding</span> <span m='1722130'>was</span> <span
  m='1722260'>linear</span> <span m='1722560'>time,</span> <span
  m='1723060'>this</span> <span m='1723230'>technique</span> <span
  m='1723600'>works.</span> </p><p><span m='1728240'>Now</span> <span
  m='1728430'>we're</span> <span m='1728540'>going</span> <span
  m='1728660'>to</span> <span m='1728740'>look</span> <span
  m='1728970'>at</span> <span m='1733250'>a</span> <span m='1733330'>new</span>
  <span m='1733500'>problem</span> <span m='1735090'>that has</span> <span
  m='1735470'>lots</span> <span m='1735900'>of</span> <span
  m='1735990'>practical</span> <span m='1736430'>applications.</span> <span
  m='1737570'>I</span> <span m='1737670'>mentioned</span> <span
  m='1738000'>some</span> <span m='1738200'>of</span> <span
  m='1738240'>these</span> <span m='1738410'>problems in the</span> <span
  m='1738900'>last</span> <span m='1739200'>class,</span> <span
  m='1741170'>which</span> <span m='1741340'>is</span> <span
  m='1741700'>string</span> <span m='1742010'>matching.</span> <span
  m='1742750'>This</span> <span m='1742940'>is</span> <span
  m='1743070'>essentially</span> <span m='1743510'>the</span> <span
  m='1743620'>problem.</span> <span m='1744120'>How</span> <span
  m='1744160'>many</span> <span m='1744320'>people</span> <span m='1744600'>have
  used</span> <span m='1744840'>Grep</span> <span m='1745340'>in</span> <span
  m='1745490'>their</span> <span m='1745610'>life?</span> <span
  m='1746800'>OK,</span> <span m='1747020'>most</span> <span
  m='1747260'>of</span> <span m='1747340'>you.</span> <span
  m='1749510'>How</span> <span m='1749640'>many</span> <span
  m='1749790'>people</span> <span m='1750060'>have</span> <span
  m='1750170'>used</span> <span m='1750790'>Find</span> <span
  m='1751210'>in</span> <span m='1751380'>a</span> <span m='1751670'>text</span>
  <span m='1751950'>editor?</span> <span m='1753132'>OK,</span> <span
  m='1753510'>the rest of</span> <span m='1753850'>you.</span> <span
  m='1755680'>And</span> <span m='1755780'>so</span> <span
  m='1756050'>this</span> <span m='1756270'>are</span> <span
  m='1756370'>the</span> <span m='1756500'>same</span> <span
  m='1756820'>sorts</span> <span m='1757040'>of</span> <span
  m='1757120'>problems.</span> <span m='1757440'>You</span> <span
  m='1757540'>want</span> <span m='1757670'>to</span> <span
  m='1757730'>search</span> <span m='1758200'>for</span> <span
  m='1759500'>a</span> <span m='1759610'>pattern,</span> <span
  m='1760440'>which</span> <span m='1760470'>is</span> <span
  m='1760520'>just</span> <span m='1760670'>going</span> <span
  m='1760770'>to</span> <span m='1760810'>be</span> <span m='1760930'>a</span>
  <span m='1760990'>substring</span> <span m='1761920'>in</span> <span
  m='1762090'>some</span> <span m='1762380'>giant</span> <span
  m='1762850'>string</span> <span m='1763260'>which</span> <span
  m='1763360'>is</span> <span m='1763470'>your</span> <span
  m='1763660'>document,</span> <span m='1764720'>your</span> <span
  m='1764890'>file,</span> <span m='1765230'>if</span> <span
  m='1765600'>you</span> <span m='1765970'>will.</span> </p><p><span
  m='1766850'>So</span> <span m='1767700'>state</span> <span
  m='1768040'>this</span> <span m='1768260'>formally--</span> <span
  m='1773520'>given</span> <span m='1773740'>two</span> <span
  m='1774060'>strings,</span> <span m='1776258'>s</span> <span
  m='1776680'>and</span> <span m='1777240'>t,</span> <span
  m='1780150'>you</span> <span m='1780280'>want</span> <span
  m='1780450'>to</span> <span m='1780520'>know</span> <span
  m='1780750'>does</span> <span m='1781740'>s</span> <span
  m='1782440'>occur</span> <span m='1784480'>as</span> <span
  m='1785040'>a</span> <span m='1785090'>substring</span> <span
  m='1791091'>of</span> <span m='1791572'>t?</span> <span m='1794460'>So</span>
  <span m='1794620'>for</span> <span m='1794770'>example,</span> <span
  m='1795810'>maybe</span> <span m='1796010'>s</span> <span
  m='1796760'>is</span> <span m='1797140'>a</span> <span
  m='1797190'>string</span> <span m='1798800'>6006</span> <span
  m='1800730'>and</span> <span m='1801230'>t</span> <span m='1801610'>is</span>
  <span m='1803370'>your</span> <span m='1803620'>entire--</span> <span
  m='1805870'>the</span> <span m='1805980'>mail</span> <span m='1806240'>that
  you've</span> <span m='1806470'>ever</span> <span m='1806680'>received</span>
  <span m='1807080'>in</span> <span m='1807160'>your</span> <span
  m='1807280'>life</span> <span m='1807640'>or</span> <span
  m='1807780'>your</span> <span m='1807930'>inbox,</span> <span
  m='1808470'>or</span> <span m='1808530'>something.</span> <span
  m='1810130'>So</span> <span m='1810260'>t</span> <span m='1810460'>is</span>
  <span m='1810590'>big,</span> <span m='1811060'>typically,</span> <span
  m='1811650'>and</span> <span m='1811740'>s is</span> <span
  m='1812100'>small.</span> <span m='1812920'>It's what</span> <span
  m='1813060'>you</span> <span m='1813150'>type</span> <span
  m='1813790'>usually.</span> <span m='1814700'>Maybe</span> <span
  m='1814940'>you're</span> <span m='1815030'>searching</span> <span
  m='1815360'>for</span> <span m='1815500'>all</span> <span
  m='1815680'>email</span> <span m='1815950'>from</span> <span
  m='1816270'>Piazza,</span> <span m='1816450'>so</span> <span
  m='1816780'>you</span> <span m='1816930'>put</span> <span
  m='1817150'>the</span> <span m='1817470'>Piazza</span> <span
  m='1818060'>from</span> <span m='1818390'>string</span> <span
  m='1818720'>or</span> <span m='1818780'>whatever.</span> <span
  m='1820040'>You're</span> <span m='1820190'>searching</span> <span
  m='1820560'>for</span> <span m='1820670'>that</span> <span
  m='1820960'>in</span> <span m='1821060'>this</span> <span
  m='1821240'>giant</span> <span m='1822140'>thing and</span> <span
  m='1822370'>you'd</span> <span m='1822560'>like</span> <span
  m='1822740'>to</span> <span m='1822830'>do</span> <span
  m='1822940'>that</span> <span m='1823330'>quickly.</span> <span
  m='1826600'>Another</span> <span m='1826930'>application,</span> <span
  m='1827990'>s</span> <span m='1828310'>is</span> <span m='1828580'>what</span>
  <span m='1828750'>you</span> <span m='1828870'>type</span> <span
  m='1829150'>in</span> <span m='1829340'>Google.</span> <span
  m='1829990'>t</span> <span m='1830310'>is</span> <span m='1830470'>the</span>
  <span m='1830580'>entire</span> <span m='1830990'>web.</span> <span
  m='1831650'>That's</span> <span m='1831860'>what</span> <span
  m='1832000'>Google</span> <span m='1832260'>does.</span> <span
  m='1832620'>It</span> <span m='1832980'>searches</span> <span
  m='1833430'>for</span> <span m='1834250'>the</span> <span
  m='1834340'>string</span> <span m='1834640'>in</span> <span
  m='1834720'>the</span> <span m='1834800'>entire</span> <span
  m='1835150'>web.</span> <span m='1836570'>I'm</span> <span
  m='1836700'>not</span> <span m='1837060'>joking.</span> <span
  m='1839230'>OK?</span> <span m='1840660'>Fine.</span> <span
  m='1843220'>So</span> <span m='1843370'>we'd</span> <span
  m='1843490'>like</span> <span m='1843660'>to</span> <span
  m='1843750'>do</span> <span m='1843940'>that.</span> <span
  m='1845140'>What's</span> <span m='1845360'>the</span> <span
  m='1845520'>obvious</span> <span m='1845890'>way</span> <span
  m='1846130'>to</span> <span m='1846440'>search</span> <span
  m='1846780'>for</span> <span m='1848690'>a</span> <span
  m='1848780'>substring</span> <span m='1849830'>in</span> <span
  m='1849960'>a</span> <span m='1850030'>giant</span> <span
  m='1850600'>string?</span> <span m='1851968'>Yeah?</span> </p><p><span
  m='1853924'>AUDIENCE: Check</span> <span m='1854413'>each</span> <span
  m='1854902'>substring</span> <span m='1855391'>of that</span> <span
  m='1855880'>length.</span> </p><p><span m='1856370'>PROFESSOR: Just</span>
  <span m='1856530'>check</span> <span m='1856770'>each</span> <span
  m='1857000'>substring</span> <span m='1857460'>of</span> <span
  m='1857540'>the</span> <span m='1857640'>right</span> <span
  m='1857840'>length.</span> <span m='1858420'>So</span> <span
  m='1858550'>it's</span> <span m='1858690'>got</span> <span
  m='1858860'>to</span> <span m='1858890'>be</span> <span m='1859620'>the</span>
  <span m='1859700'>length</span> <span m='1859940'>of</span> <span
  m='1860050'>s.</span> <span m='1861260'>And</span> <span
  m='1862130'>there's</span> <span m='1862320'>only</span> <span
  m='1862530'>a</span> <span m='1862580'>linear</span> <span
  m='1862820'>number</span> <span m='1863110'>of them,</span> <span
  m='1863320'>so</span> <span m='1863460'>check</span> <span
  m='1863690'>each</span> <span m='1863830'>one.</span> <span
  m='1864800'>Let's</span> <span m='1864970'>analyze</span> <span
  m='1865410'>that.</span> <span m='1885460'>So</span> <span
  m='1885840'>a</span> <span m='1887170'>simple</span> <span
  m='1887530'>algorithm--</span> <span m='1896460'>actually,</span> <span
  m='1896740'>just</span> <span m='1897000'>for</span> <span
  m='1897100'>fun,</span> <span m='1897450'>I</span> <span
  m='1897560'>have</span> <span m='1897860'>pseudocode</span> <span
  m='1898340'>for</span> <span m='1898570'>it.</span> <span m='1903462'>I
  have</span> <span m='1903940'>Python</span> <span m='1904360'>code</span>
  <span m='1904580'>for</span> <span m='1904940'>it.</span> <span
  m='1905450'>Even</span> <span m='1905948'>more</span> <span
  m='1906446'>cool.</span> <span m='1929370'>OK.</span> <span m='1929940'>I
  don't know</span> <span m='1930150'>if you</span> <span
  m='1930260'>know</span> <span m='1930390'>all</span> <span
  m='1930550'>these</span> <span m='1930670'>Python</span> <span
  m='1931030'>features,</span> <span m='1931900'>but</span> <span
  m='1932030'>you</span> <span m='1932090'>should.</span> <span
  m='1932410'>They're</span> <span m='1932520'>super</span> <span
  m='1932800'>cool.</span> <span m='1933440'>This</span> <span
  m='1933680'>is</span> <span m='1934100'>string</span> <span
  m='1934580'>splicing.</span> <span m='1935510'>So</span> <span
  m='1936620'>we're</span> <span m='1936790'>looking</span> <span
  m='1937490'>in</span> <span m='1937680'>t--</span> <span
  m='1938840'>let</span> <span m='1938900'>me</span> <span
  m='1938990'>draw</span> <span m='1939140'>the</span> <span
  m='1939260'>picture.</span> <span m='1939890'>Here</span> <span
  m='1940020'>we</span> <span m='1940090'>have</span> <span
  m='1940250'>s,</span> <span m='1941220'>here</span> <span
  m='1941350'>we</span> <span m='1941420'>have</span> <span
  m='1941620'>t.</span> <span m='1942660'>Think of it as</span> <span
  m='1942770'>a</span> <span m='1942810'>big</span> <span
  m='1943000'>string.</span> <span m='1944080'>We'd</span> <span
  m='1944300'>like</span> <span m='1944540'>to</span> <span
  m='1944700'>compare</span> <span m='1945350'>s</span> <span
  m='1946280'>like</span> <span m='1946470'>that,</span> <span
  m='1947710'>and</span> <span m='1947820'>then</span> <span
  m='1947960'>we'd</span> <span m='1948080'>like</span> <span
  m='1948250'>to</span> <span m='1948360'>compare</span> <span
  m='1950000'>s</span> <span m='1950290'>shifted</span> <span
  m='1950640'>over</span> <span m='1950900'>one</span> <span
  m='1951100'>to</span> <span m='1952010'>see</span> <span
  m='1952190'>whether</span> <span m='1952730'>all</span> <span m='1953010'>of
  the</span> <span m='1953090'>characters</span> <span m='1953430'>match</span>
  <span m='1953700'>there.</span> <span m='1954410'>And then</span> <span
  m='1954560'>shifted</span> <span m='1954820'>over</span> <span
  m='1955070'>one</span> <span m='1955240'>more,</span> <span
  m='1956220'>and</span> <span m='1956320'>so</span> <span
  m='1956380'>on.</span> </p><p><span m='1957790'>And</span> <span
  m='1957960'>so</span> <span m='1958070'>we're</span> <span
  m='1958150'>looking</span> <span m='1958400'>at</span> <span
  m='1958480'>a</span> <span m='1958540'>substring</span> <span
  m='1959020'>of</span> <span m='1959130'>t</span> <span m='1959470'>from</span>
  <span m='1959740'>position</span> <span m='1960200'>i</span> <span
  m='1960440'>the</span> <span m='1960550'>position</span> <span
  m='1960940'>i</span> <span m='1961100'>plus</span> <span
  m='1961370'>the</span> <span m='1961460'>length</span> <span
  m='1961730'>of</span> <span m='1961860'>s,</span> <span m='1962610'>not</span>
  <span m='1962820'>including</span> <span m='1963200'>the</span> <span
  m='1963280'>last</span> <span m='1963600'>one.</span> <span
  m='1964300'>So</span> <span m='1964450'>that's</span> <span
  m='1964770'>of</span> <span m='1964910'>length</span> <span
  m='1965180'>exactly,</span> <span m='1965810'>length</span> <span
  m='1966010'>of</span> <span m='1966120'>s.</span> <span m='1966980'>This
  is</span> <span m='1967180'>s.</span> <span m='1968828'>This is</span> <span
  m='1969240'>t.</span> <span m='1971040'>And</span> <span m='1971230'>so</span>
  <span m='1971370'>each</span> <span m='1971590'>of</span> <span
  m='1971660'>these</span> <span m='1971910'>looks</span> <span
  m='1972260'>like</span> <span m='1972470'>that</span> <span
  m='1972690'>pattern.</span> <span m='1973080'>We</span> <span
  m='1973190'>compare</span> <span m='1973600'>s</span> <span
  m='1973990'>to</span> <span m='1974380'>t.</span> <span
  m='1974770'>What</span> <span m='1974960'>this</span> <span
  m='1975150'>comparison</span> <span m='1975660'>operation</span> <span
  m='1976060'>does in</span> <span m='1976350'>Python</span> <span
  m='1976810'>is it</span> <span m='1976870'>checks</span> <span
  m='1977120'>the</span> <span m='1977190'>first</span> <span
  m='1977430'>characters,</span> <span m='1977760'>see if</span> <span
  m='1978090'>they're</span> <span m='1978240'>equal.</span> <span
  m='1979260'>If</span> <span m='1979430'>they</span> <span
  m='1979580'>are,</span> <span m='1979840'>keep</span> <span
  m='1980050'>going</span> <span m='1980430'>until</span> <span
  m='1980680'>they</span> <span m='1980730'>find</span> <span
  m='1980970'>a</span> <span m='1981010'>mismatch.</span> <span
  m='1981800'>If</span> <span m='1982030'>there's</span> <span
  m='1982180'>no</span> <span m='1982300'>mismatch,</span> <span
  m='1982880'>then</span> <span m='1983050'>you</span> <span
  m='1983180'>return</span> <span m='1983760'>true.</span> <span
  m='1984510'>Otherwise, you</span> <span m='1984760'>return</span> <span
  m='1985110'>false.</span> <span m='1987170'>And</span> <span
  m='1987380'>then</span> <span m='1987480'>we</span> <span
  m='1987580'>do</span> <span m='1987770'>this</span> <span
  m='1988610'>roughly</span> <span m='1989060'>length</span> <span
  m='1989350'>of</span> <span m='1989480'>t</span> <span
  m='1989700'>times</span> <span m='1990770'>because</span> <span
  m='1990930'>that's</span> <span m='1991090'>how</span> <span
  m='1991170'>many</span> <span m='1991330'>shifts</span> <span
  m='1991690'>there are,</span> <span m='1991900'>except</span> <span
  m='1992230'>at</span> <span m='1992330'>the</span> <span
  m='1992480'>end</span> <span m='1993270'>we</span> <span
  m='1993390'>run</span> <span m='1993610'>out</span> <span
  m='1993790'>of</span> <span m='1993940'>room.</span> <span
  m='1994150'>We</span> <span m='1994240'>don't</span> <span
  m='1994430'>care</span> <span m='1994930'>if</span> <span
  m='1995050'>we</span> <span m='1995130'>shift</span> <span
  m='1995850'>beyond</span> <span m='1996280'>the</span> <span
  m='1996370'>right</span> <span m='1996570'>because</span> <span
  m='1996760'>that's</span> <span m='1996950'>clearly</span> <span
  m='1997210'>not</span> <span m='1997380'>going</span> <span
  m='1997480'>to</span> <span m='1997540'>match.</span> <span
  m='1998520'>And</span> <span m='1998730'>so</span> <span
  m='1998850'>it's</span> <span m='1998950'>actually</span> <span
  m='1999180'>length</span> <span m='1999400'>of t</span> <span
  m='1999650'>minus</span> <span m='2000010'>like</span> <span
  m='2000200'>of</span> <span m='2000310'>s.</span> <span m='2000750'>That's the
  number</span> <span m='2001030'>of</span> <span m='2001170'>iterations.</span>
  </p><p><span m='2002970'>Hopefully</span> <span m='2003330'>I</span> <span
  m='2003410'>got</span> <span m='2003580'>all</span> <span
  m='2003720'>the</span> <span m='2004280'>index</span> <span
  m='2005260'>arithmetic</span> <span m='2005730'>right.</span> <span
  m='2006200'>And</span> <span m='2006280'>there's</span> <span
  m='2006430'>no</span> <span m='2006540'>plus</span> <span m='2006930'>ones
  or</span> <span m='2007010'>minus</span> <span m='2007270'>ones.</span> <span
  m='2007460'>I</span> <span m='2007540'>think</span> <span
  m='2007780'>this</span> <span m='2007940'>is</span> <span
  m='2008090'>correct.</span> <span m='2010220'>We</span> <span
  m='2010360'>want</span> <span m='2010540'>to</span> <span
  m='2010600'>know</span> <span m='2010750'>whether</span> <span
  m='2011020'>any</span> <span m='2011260'>of</span> <span
  m='2011320'>these</span> <span m='2011510'>match.</span> <span
  m='2012380'>If</span> <span m='2012550'>so,</span> <span
  m='2012870'>the</span> <span m='2013000'>answer</span> <span
  m='2013260'>is</span> <span m='2014580'>yes,</span> <span m='2015280'>s</span>
  <span m='2015520'>occurs</span> <span m='2017650'>as</span> <span
  m='2017870'>a</span> <span m='2017920'>substring</span> <span
  m='2018360'>of</span> <span m='2018450'>t.</span> <span m='2019040'>Of course,
  in</span> <span m='2019320'>reality</span> <span m='2019790'>you want</span>
  <span m='2020045'>to</span> <span m='2020300'>know</span> <span
  m='2020700'>not</span> <span m='2020920'>just</span> <span
  m='2021200'>do</span> <span m='2021370'>any</span> <span
  m='2021570'>match,</span> <span m='2022010'>but</span> <span
  m='2022600'>show</span> <span m='2022860'>them</span> <span
  m='2023040'>to</span> <span m='2023220'>me,</span> <span
  m='2023580'>things</span> <span m='2023770'>like</span> <span
  m='2023920'>that.</span> <span m='2024170'>But</span> <span
  m='2024310'>you</span> <span m='2024440'>can</span> <span
  m='2025630'>change</span> <span m='2025910'>that.</span> <span
  m='2027430'>Same amount of</span> <span m='2027900'>time.</span> <span
  m='2028140'>So</span> <span m='2028280'>what's</span> <span
  m='2028470'>the</span> <span m='2028560'>running</span> <span
  m='2028810'>time</span> <span m='2029070'>of this</span> <span
  m='2029230'>algorithm?</span> <span m='2034916'>So</span> <span
  m='2035340'>my</span> <span m='2036230'>relevant</span> <span
  m='2036590'>things</span> <span m='2036810'>are</span> <span
  m='2037140'>the</span> <span m='2037310'>length</span> <span
  m='2037580'>of</span> <span m='2037680'>s</span> <span m='2037940'>and</span>
  <span m='2038040'>the</span> <span m='2038100'>length</span> <span
  m='2038380'>of</span> <span m='2038510'>t.</span> <span
  m='2041130'>What's</span> <span m='2041330'>the</span> <span
  m='2041420'>running</span> <span m='2041700'>time?</span> </p><p><span
  m='2043044'>AUDIENCE: [INAUDIBLE]</span> </p><p><span m='2044280'>PROFESSOR:
  Sorry?</span> </p><p><span m='2045495'>AUDIENCE: [INAUDIBLE]</span>
  </p><p><span m='2046145'>PROFESSOR: T</span> <span m='2046450'>by--</span>
  <span m='2047130'>t</span> <span m='2047460'>multiplied</span> <span
  m='2047800'>by</span> <span m='2047970'>s,</span> <span
  m='2048230'>yeah.</span> <span m='2048520'>Exactly.</span> <span
  m='2050380'>Technically,</span> <span m='2051090'>it's</span> <span
  m='2051469'>length</span> <span m='2051730'>of</span> <span
  m='2051840'>s</span> <span m='2053230'>times</span> <span
  m='2053610'>length</span> <span m='2053820'>of</span> <span
  m='2053949'>t</span> <span m='2054070'>minus</span> <span
  m='2054469'>s.</span> <span m='2058760'>But</span> <span
  m='2059900'>typically,</span> <span m='2061239'>this</span> <span
  m='2061440'>is</span> <span m='2061620'>just</span> <span m='2062240'>s</span>
  <span m='2062610'>times</span> <span m='2063000'>t.</span> <span
  m='2064429'>And</span> <span m='2064650'>it's</span> <span
  m='2064820'>always</span> <span m='2064940'>at</span> <span m='2065030'>most
  s</span> <span m='2065389'>times</span> <span m='2065690'>t,</span> <span
  m='2065900'>and</span> <span m='2065969'>it's</span> <span
  m='2066080'>usually</span> <span m='2066540'>the</span> <span
  m='2066639'>same</span> <span m='2066889'>thing</span> <span
  m='2067100'>because</span> <span m='2067270'>s</span> <span
  m='2067489'>is</span> <span m='2067560'>usually</span> <span
  m='2068010'>smaller--</span> <span m='2068870'>at</span> <span
  m='2068940'>least</span> <span m='2069130'>a</span> <span
  m='2069170'>constant</span> <span m='2069510'>factor</span> <span
  m='2069800'>than</span> <span m='2069980'>t.</span> <span
  m='2072800'>This</span> <span m='2072989'>is</span> <span
  m='2073090'>kind</span> <span m='2073320'>of</span> <span
  m='2073380'>slow.</span> <span m='2073909'>If</span> <span
  m='2074050'>you're</span> <span m='2074179'>searching</span> <span
  m='2074590'>for</span> <span m='2074730'>a</span> <span m='2074770'>big</span>
  <span m='2074960'>string,</span> <span m='2077250'>it's</span> <span
  m='2077440'>not</span> <span m='2077630'>so</span> <span
  m='2077750'>great.</span> <span m='2078840'>I</span> <span
  m='2079050'>mean,</span> <span m='2079670'>certainly</span> <span
  m='2080020'>you</span> <span m='2080110'>need</span> <span
  m='2080570'>s</span> <span m='2081139'>plus</span> <span m='2081500'>t.</span>
  <span m='2081870'>You've got to</span> <span m='2082070'>look</span> <span
  m='2082280'>at</span> <span m='2082360'>the</span> <span
  m='2082449'>strings.</span> <span m='2083570'>But</span> <span
  m='2083830'>s</span> <span m='2084030'>times</span> <span m='2084420'>t</span>
  <span m='2084590'>is</span> <span m='2084750'>kind</span> <span
  m='2084960'>of-- it</span> <span m='2085270'>could</span> <span
  m='2085510'>be</span> <span m='2085610'>quadratic,</span> <span
  m='2085935'>if</span> <span m='2086260'>you're</span> <span
  m='2086409'>searching</span> <span m='2086699'>for</span> <span
  m='2086870'>a</span> <span m='2086969'>really</span> <span
  m='2087070'>long</span> <span m='2087340'>string</span> <span
  m='2088100'>in</span> <span m='2088300'>another</span> <span
  m='2088560'>string.</span> <span m='2089199'>So</span> <span m='2089400'>what
  we'd</span> <span m='2089540'>like</span> <span m='2089730'>to</span> <span
  m='2089860'>do</span> <span m='2090060'>today</span> <span
  m='2090449'>is</span> <span m='2090560'>use</span> <span
  m='2090730'>hashing</span> <span m='2091719'>to</span> <span
  m='2091820'>get</span> <span m='2091989'>this</span> <span
  m='2092179'>down</span> <span m='2092610'>to</span> <span
  m='2093250'>linear</span> <span m='2093550'>time.</span> <span
  m='2096290'>So,</span> <span m='2097700'>ideas?</span> <span
  m='2098820'>How</span> <span m='2098980'>could</span> <span
  m='2099110'>we</span> <span m='2099220'>do</span> <span
  m='2099340'>that?</span> <span m='2109350'>Using</span> <span
  m='2109660'>hashing.</span> <span m='2110390'>Subtle</span> <span
  m='2110710'>hint.</span> <span m='2111613'>Yeah?</span> </p><p><span
  m='2114571'>AUDIENCE: If we</span> <span m='2115557'>take something</span>
  <span m='2116050'>into</span> <span m='2116543'>account</span> <span
  m='2117036'>[INAUDIBLE].</span> </p><p><span m='2125920'>PROFESSOR: OK,</span>
  <span m='2126050'>so you want</span> <span m='2126160'>to</span> <span
  m='2126230'>decompose</span> <span m='2126710'>your string</span> <span
  m='2127040'>into</span> <span m='2127260'>words</span> <span
  m='2127800'>and</span> <span m='2128020'>use</span> <span
  m='2128340'>the</span> <span m='2128430'>fact</span> <span m='2128720'>that
  there</span> <span m='2128840'>are</span> <span m='2128880'>fewer</span> <span
  m='2129200'>words than</span> <span m='2129610'>characters.</span> <span
  m='2131290'>You</span> <span m='2131430'>could</span> <span
  m='2131560'>probably</span> <span m='2131810'>get</span> <span
  m='2131970'>something</span> <span m='2132270'>out</span> <span m='2132430'>of
  that,</span> <span m='2132660'>and</span> <span m='2132870'>old</span> <span
  m='2133200'>search</span> <span m='2133470'>engines</span> <span
  m='2134380'>used</span> <span m='2134650'>to</span> <span
  m='2134770'>do</span> <span m='2134900'>that.</span> <span
  m='2137050'>But</span> <span m='2137320'>it's</span> <span
  m='2137450'>not</span> <span m='2137600'>necessary,</span> <span
  m='2138280'>turns out.</span> <span m='2140050'>And it will</span> <span
  m='2140220'>also</span> <span m='2140450'>depend</span> <span
  m='2140780'>on</span> <span m='2140870'>what</span> <span
  m='2141010'>your</span> <span m='2141120'>average</span> <span
  m='2141390'>word</span> <span m='2141760'>length</span> <span
  m='2142050'>is.</span> <span m='2144470'>We</span> <span
  m='2144845'>are,</span> <span m='2145220'>in</span> <span
  m='2145360'>the</span> <span m='2145490'>end,</span> <span
  m='2146130'>today,</span> <span m='2147090'>we're</span> <span
  m='2147230'>not</span> <span m='2147350'>going</span> <span
  m='2147440'>to</span> <span m='2147480'>analyze</span> <span
  m='2147860'>it</span> <span m='2147980'>fully,</span> <span
  m='2148370'>but</span> <span m='2148470'>we</span> <span
  m='2148570'>are</span> <span m='2148650'>going</span> <span
  m='2148750'>to</span> <span m='2148810'>get</span> <span m='2148950'>an</span>
  <span m='2149050'>algorithm</span> <span m='2149460'>that</span> <span
  m='2149590'>runs</span> <span m='2149880'>in</span> <span
  m='2149970'>this</span> <span m='2150190'>time</span> <span
  m='2150670'>guaranteed.</span> <span m='2152490'>In</span> <span
  m='2152630'>expectation</span> <span m='2153900'>because of</span> <span
  m='2153940'>a</span> <span m='2154090'>randomized--</span> <span
  m='2155150'>yeah?</span> </p><p><span m='2156891'>AUDIENCE: If we were</span>
  <span m='2157388'>to hash</span> <span m='2157885'>[INAUDIBLE]</span> <span
  m='2158879'>size s,</span> <span m='2160370'>that would</span> <span
  m='2160867'>[INAUDIBLE]</span> <span m='2161861'>and then</span> <span
  m='2162358'>we would</span> <span m='2162855'>check the</span> <span
  m='2163352'>hash</span> <span m='2163849'>[INAUDIBLE].</span> </p><p><span
  m='2166334'>PROFESSOR: Good.</span> <span m='2166831'>So</span> <span
  m='2167350'>the</span> <span m='2167490'>idea</span> <span
  m='2167810'>is</span> <span m='2168070'>to--</span> <span
  m='2168410'>what</span> <span m='2168570'>we're</span> <span
  m='2168680'>looking</span> <span m='2169000'>at</span> <span
  m='2169090'>is</span> <span m='2169180'>a</span> <span
  m='2169290'>rolling</span> <span m='2169750'>window</span> <span
  m='2170080'>of</span> <span m='2170220'>t</span> <span
  m='2171100'>always</span> <span m='2171210'>of</span> <span
  m='2171290'>size</span> <span m='2171610'>s.</span> <span
  m='2172070'>And</span> <span m='2172490'>at</span> <span
  m='2172710'>each</span> <span m='2172920'>time</span> <span
  m='2173170'>we</span> <span m='2173250'>want</span> <span
  m='2173440'>to</span> <span m='2173490'>know,</span> <span
  m='2173670'>is</span> <span m='2173840'>it</span> <span m='2173940'>the</span>
  <span m='2174030'>same</span> <span m='2174290'>as</span> <span
  m='2174420'>s?</span> <span m='2175250'>Now,</span> <span
  m='2175520'>if</span> <span m='2175660'>somehow--</span> <span
  m='2176550'>it's</span> <span m='2176920'>expensive</span> <span
  m='2177500'>to</span> <span m='2177600'>check</span> <span m='2177900'>whether
  a</span> <span m='2178210'>string</span> <span m='2178470'>is</span> <span
  m='2178570'>equal</span> <span m='2178800'>to</span> <span
  m='2178900'>a</span> <span m='2178960'>string.</span> <span
  m='2179250'>There's</span> <span m='2179380'>no way</span> <span
  m='2179620'>getting</span> <span m='2179920'>around</span> <span
  m='2180250'>that.</span> <span m='2181202'>Well,</span> <span
  m='2181580'>there</span> <span m='2181880'>are</span> <span
  m='2182000'>ways,</span> <span m='2182310'>but</span> <span
  m='2183710'>there</span> <span m='2183870'>isn't</span> <span
  m='2184030'>a</span> <span m='2184080'>way</span> <span m='2184250'>for</span>
  <span m='2184400'>just</span> <span m='2184610'>given</span> <span
  m='2184850'>two</span> <span m='2185010'>strings.</span> <span
  m='2185640'>But</span> <span m='2185820'>if</span> <span
  m='2185970'>somehow</span> <span m='2186430'>instead</span> <span
  m='2186830'>of</span> <span m='2187330'>checking</span> <span
  m='2187690'>the</span> <span m='2187790'>strings</span> <span
  m='2188210'>we</span> <span m='2188330'>could</span> <span
  m='2188480'>check</span> <span m='2189040'>a</span> <span
  m='2189060'>hash</span> <span m='2189560'>function</span> <span
  m='2189960'>of</span> <span m='2190170'>the</span> <span
  m='2190270'>strings,</span> <span m='2190630'>because</span> <span
  m='2190720'>strings</span> <span m='2191110'>are</span> <span
  m='2191170'>big,</span> <span m='2191710'>potentially.</span> <span
  m='2192340'>We</span> <span m='2192450'>don't</span> <span
  m='2192590'>know</span> <span m='2192670'>how</span> <span
  m='2192870'>big</span> <span m='2193040'>s</span> <span m='2193340'>is.</span>
  </p><p><span m='2194220'>And</span> <span m='2194390'>so</span> <span
  m='2194790'>the</span> <span m='2195010'>universe</span> <span
  m='2195610'>of</span> <span m='2196140'>strings</span> <span
  m='2196690'>of</span> <span m='2196790'>length</span> <span
  m='2197070'>s</span> <span m='2197790'>is</span> <span
  m='2198550'>potentially</span> <span m='2198980'>very</span> <span
  m='2199170'>big.</span> <span m='2199430'>It's</span> <span
  m='2199560'>expensive</span> <span m='2199980'>to</span> <span
  m='2200090'>compare</span> <span m='2200440'>things.</span> <span
  m='2200710'>If</span> <span m='2200880'>we</span> <span
  m='2200980'>could</span> <span m='2201090'>just</span> <span
  m='2201270'>hash</span> <span m='2201610'>it</span> <span
  m='2201710'>down</span> <span m='2201920'>to</span> <span
  m='2201990'>some</span> <span m='2202270'>reasonable</span> <span
  m='2202740'>size,</span> <span m='2203190'>to</span> <span
  m='2203300'>something</span> <span m='2203570'>that</span> <span
  m='2203900'>fits</span> <span m='2203990'>in a</span> <span
  m='2204040'>word,</span> <span m='2205050'>then</span> <span
  m='2205200'>we</span> <span m='2205300'>can</span> <span
  m='2205450'>compare</span> <span m='2205800'>whether</span> <span
  m='2206040'>those</span> <span m='2206230'>two</span> <span
  m='2206370'>words</span> <span m='2206640'>are</span> <span
  m='2206830'>equal,</span> <span m='2206990'>whether</span> <span
  m='2207180'>those</span> <span m='2207350'>two</span> <span
  m='2207450'>hash</span> <span m='2207760'>values</span> <span
  m='2208080'>are</span> <span m='2208170'>equal,</span> <span
  m='2208760'>whether</span> <span m='2209000'>there's</span> <span
  m='2209200'>a</span> <span m='2209280'>collision</span> <span
  m='2210490'>in</span> <span m='2210600'>the</span> <span
  m='2210700'>table.</span> <span m='2211660'>That</span> <span
  m='2212010'>would</span> <span m='2213340'>somehow--</span> <span
  m='2214160'>that</span> <span m='2214320'>would</span> <span
  m='2214450'>make</span> <span m='2214590'>things</span> <span
  m='2214790'>go</span> <span m='2214910'>faster.</span> <span
  m='2215500'>We</span> <span m='2215630'>could</span> <span
  m='2215750'>do</span> <span m='2215840'>that</span> <span m='2215980'>in
  constant</span> <span m='2216580'>time</span> <span m='2217250'>per</span>
  <span m='2217510'>operation.</span> <span m='2219940'>How</span> <span
  m='2220210'>could</span> <span m='2220380'>we</span> <span
  m='2220480'>do</span> <span m='2220750'>that?</span> <span m='2221760'>That's
  the</span> <span m='2222030'>tricky</span> <span m='2222340'>part,</span>
  <span m='2222580'>but</span> <span m='2222710'>that</span> <span
  m='2222870'>is</span> <span m='2222990'>exactly</span> <span
  m='2223370'>the</span> <span m='2223490'>right</span> <span
  m='2224150'>idea.</span> <span m='2226480'>So--</span> <span m='2231491'>make
  some</span> <span m='2231910'>space.</span> </p><p><span m='2248130'>I</span>
  <span m='2248150'>think</span> <span m='2250870'>I'm going to</span> <span
  m='2250980'>do</span> <span m='2251100'>things</span> <span
  m='2251330'>a</span> <span m='2251400'>little out</span> <span
  m='2251680'>of</span> <span m='2251750'>order</span> <span m='2252220'>from
  what I</span> <span m='2252340'>have</span> <span m='2252570'>in my</span>
  <span m='2252720'>notes,</span> <span m='2253580'>and</span> <span
  m='2253790'>tell</span> <span m='2254040'>you</span> <span
  m='2254200'>about</span> <span m='2254720'>something</span> <span
  m='2254980'>called</span> <span m='2255200'>rolling</span> <span
  m='2255560'>hashes.</span> <span m='2257690'>And</span> <span
  m='2257840'>then</span> <span m='2257960'>we'll</span> <span
  m='2258090'>see</span> <span m='2258290'>how</span> <span
  m='2258490'>they're</span> <span m='2258610'>used.</span> <span
  m='2260870'>So</span> <span m='2261030'>shelve</span> <span
  m='2261340'>that</span> <span m='2261540'>idea.</span> <span
  m='2262170'>We're</span> <span m='2262320'>going</span> <span
  m='2262410'>to</span> <span m='2262480'>come</span> <span
  m='2262630'>back</span> <span m='2262870'>to</span> <span
  m='2263000'>it.</span> <span m='2263720'>We</span> <span
  m='2263880'>need</span> <span m='2265220'>a</span> <span
  m='2265310'>data</span> <span m='2265570'>structure</span> <span
  m='2265980'>to</span> <span m='2266060'>help</span> <span
  m='2266300'>us</span> <span m='2266440'>do</span> <span
  m='2266570'>this.</span> <span m='2268430'>Because</span> <span
  m='2268850'>if</span> <span m='2269010'>we</span> <span
  m='2269120'>just</span> <span m='2269310'>compute</span> <span
  m='2269690'>the</span> <span m='2269770'>hash</span> <span
  m='2270080'>function</span> <span m='2270450'>of</span> <span
  m='2270550'>this</span> <span m='2270750'>thing,</span> <span
  m='2271380'>compare</span> <span m='2271730'>it to</span> <span
  m='2271860'>the</span> <span m='2272130'>hash</span> <span
  m='2272280'>function of</span> <span m='2272350'>this</span> <span
  m='2272520'>thing,</span> <span m='2272680'>and</span> <span m='2272760'>then
  compute</span> <span m='2273100'>the</span> <span m='2273160'>hash</span>
  <span m='2273360'>function</span> <span m='2273660'>of the</span> <span
  m='2274160'>shifted</span> <span m='2274500'>value</span> <span m='2274820'>of
  t</span> <span m='2275110'>and compare it,</span> <span m='2276130'>we</span>
  <span m='2276320'>don't</span> <span m='2276490'>have</span> <span
  m='2276650'>to</span> <span m='2276760'>recompute</span> <span
  m='2277170'>the</span> <span m='2277240'>hash</span> <span
  m='2277500'>of</span> <span m='2277920'>s.</span> <span
  m='2278350'>That's</span> <span m='2278620'>going</span> <span
  m='2278740'>to</span> <span m='2278800'>be</span> <span
  m='2278930'>free</span> <span m='2279190'>once you</span> <span
  m='2279340'>do</span> <span m='2279460'>it</span> <span
  m='2279610'>once.</span> <span m='2280960'>But</span> <span
  m='2281110'>computing</span> <span m='2281600'>the</span> <span
  m='2281750'>hash</span> <span m='2281990'>function</span> <span
  m='2282280'>of</span> <span m='2282360'>this</span> <span m='2282650'>and then
  the</span> <span m='2282850'>hash</span> <span m='2283200'>function of</span>
  <span m='2283360'>this and the</span> <span m='2283580'>hash</span> <span
  m='2283870'>function</span> <span m='2284120'>of</span> <span
  m='2284180'>this,</span> <span m='2284700'>usually</span> <span
  m='2285190'>to</span> <span m='2285390'>compute</span> <span m='2285680'>each
  of those</span> <span m='2285880'>hash</span> <span
  m='2286130'>function</span> <span m='2286420'>would</span> <span
  m='2286530'>take</span> <span m='2286940'>length</span> <span
  m='2287190'>of</span> <span m='2287290'>s</span> <span
  m='2287510'>time.</span> <span m='2288355'>And</span> <span
  m='2288610'>so</span> <span m='2288730'>we're</span> <span
  m='2288830'>not</span> <span m='2289040'>saving</span> <span
  m='2289380'>any</span> <span m='2289550'>time.</span> <span
  m='2290810'>Somehow,</span> <span m='2291470'>if</span> <span
  m='2291630'>we</span> <span m='2291690'>have</span> <span
  m='2291780'>the</span> <span m='2291840'>hash</span> <span
  m='2292150'>function</span> <span m='2292470'>of</span> <span
  m='2292580'>this,</span> <span m='2293660'>the</span> <span
  m='2293770'>first</span> <span m='2294200'>substring</span> <span
  m='2294690'>of</span> <span m='2294790'>length</span> <span
  m='2295010'>s,</span> <span m='2295710'>we'd</span> <span
  m='2295860'>like</span> <span m='2296020'>to</span> <span
  m='2296110'>very</span> <span m='2296350'>quickly</span> <span
  m='2296930'>compute</span> <span m='2297440'>the</span> <span
  m='2297500'>hash</span> <span m='2297750'>function</span> <span
  m='2298010'>of</span> <span m='2298270'>the next</span> <span
  m='2299190'>substring</span> <span m='2300140'>in</span> <span
  m='2300310'>constant</span> <span m='2300870'>time.</span> <span
  m='2301718'>Yeah?</span> </p><p><span m='2302206'>AUDIENCE: You already</span>
  <span m='2302694'>have, like,</span> <span m='2303182'>s minus</span> <span
  m='2303670'>1</span> <span m='2304158'>of the</span> <span
  m='2304646'>characters</span> <span m='2305134'>of the--</span> </p><p><span
  m='2305622'>PROFESSOR: Yeah.</span> <span m='2306110'>If</span> <span
  m='2306450'>you</span> <span m='2306560'>look</span> <span
  m='2306750'>at</span> <span m='2306890'>this</span> <span
  m='2307130'>portion</span> <span m='2307500'>of</span> <span
  m='2307640'>s</span> <span m='2308460'>and</span> <span
  m='2308630'>this</span> <span m='2308820'>portion</span> <span
  m='2309170'>of</span> <span m='2309280'>s,</span> <span
  m='2310690'>they</span> <span m='2310810'>share</span> <span
  m='2311820'>s</span> <span m='2312050'>minus</span> <span m='2312340'>1</span>
  <span m='2312480'>of</span> <span m='2312550'>the</span> <span
  m='2312630'>characters.</span> <span m='2313600'>Just</span> <span
  m='2313770'>one</span> <span m='2314150'>character</span> <span
  m='2314550'>different.</span> <span m='2315540'>First</span> <span
  m='2315840'>one</span> <span m='2315980'>gets</span> <span
  m='2316120'>deleted,</span> <span m='2316860'>last</span> <span
  m='2317180'>character</span> <span m='2317580'>gets</span> <span
  m='2317910'>added.</span> <span m='2318980'>So</span> <span
  m='2319080'>here's</span> <span m='2319310'>what</span> <span
  m='2319440'>we</span> <span m='2319540'>want.</span> <span
  m='2323230'>Given</span> <span m='2323880'>a</span> <span
  m='2323930'>hash</span> <span m='2324870'>value--</span> <span
  m='2325810'>maybe</span> <span m='2326070'>I</span> <span
  m='2326110'>should</span> <span m='2326290'>call</span> <span
  m='2326480'>this</span> <span m='2327080'>r.</span> <span
  m='2327960'>It's</span> <span m='2328350'>not</span> <span
  m='2328490'>the</span> <span m='2328560'>hash</span> <span
  m='2328810'>function.</span> <span m='2331820'>Give</span> <span
  m='2332010'>it</span> <span m='2332490'>a</span> <span
  m='2332670'>rolling</span> <span m='2332970'>hash</span> <span
  m='2333290'>value.</span> <span m='2333670'>You</span> <span
  m='2333790'>might</span> <span m='2334010'>say,</span> <span
  m='2334560'>I'd</span> <span m='2334720'>like</span> <span
  m='2334850'>to</span> <span m='2334930'>be</span> <span
  m='2335010'>able</span> <span m='2335170'>to</span> <span
  m='2335300'>append</span> <span m='2335790'>a</span> <span
  m='2335870'>character.</span> <span m='2337490'>I</span> <span
  m='2337580'>should</span> <span m='2337790'>say,</span> <span
  m='2339970'>r</span> <span m='2340920'>maintains</span> <span
  m='2344900'>a</span> <span m='2345000'>string.</span> <span
  m='2349100'>There's</span> <span m='2349260'>some</span> <span
  m='2349450'>string,</span> <span m='2350340'>let's</span> <span
  m='2350490'>call</span> <span m='2350750'>it</span> <span
  m='2351870'>x.</span> <span m='2353740'>And</span> <span
  m='2354360'>what</span> <span m='2354620'>r.append</span> <span
  m='2355080'>of</span> <span m='2355790'>c</span> <span m='2355940'>does</span>
  <span m='2356640'>is</span> <span m='2357320'>add</span> <span
  m='2358730'>character</span> <span m='2359160'>c</span> <span
  m='2361430'>to</span> <span m='2361640'>the</span> <span
  m='2361860'>end</span> <span m='2362210'>of</span> <span m='2362410'>x.</span>
  </p><p><span m='2365620'>And</span> <span m='2365840'>then</span> <span
  m='2366060'>we</span> <span m='2366270'>also</span> <span m='2366610'>want
  an</span> <span m='2366830'>operation</span> <span m='2367460'>which</span>
  <span m='2367660'>is--</span> <span m='2368050'>you</span> <span
  m='2368450'>might</span> <span m='2368560'>call it</span> <span
  m='2368910'>pop</span> <span m='2369160'>left</span> <span
  m='2369530'>in</span> <span m='2369630'>Python.</span> <span
  m='2370160'>I'm</span> <span m='2370310'>going</span> <span
  m='2370500'>to</span> <span m='2370570'>call</span> <span
  m='2370770'>it</span> <span m='2370930'>skip.</span> <span
  m='2372900'>Shorter.</span> <span m='2374480'>Delete</span> <span
  m='2378850'>the</span> <span m='2378930'>first</span> <span
  m='2379270'>character</span> <span m='2380300'>of</span> <span
  m='2380450'>x.</span> <span m='2384370'>And</span> <span
  m='2384920'>assuming</span> <span m='2390270'>it's</span> <span
  m='2390660'>c.</span> <span m='2392690'>So</span> <span m='2393090'>we</span>
  <span m='2393220'>can</span> <span m='2393360'>do</span> <span
  m='2393500'>this</span> <span m='2393770'>because</span> <span
  m='2394780'>over</span> <span m='2394990'>here,</span> <span
  m='2395370'>what</span> <span m='2395580'>we</span> <span
  m='2395670'>want</span> <span m='2395870'>to</span> <span
  m='2395930'>do</span> <span m='2396090'>is</span> <span m='2396360'>add</span>
  <span m='2397030'>this</span> <span m='2397280'>character,</span> <span
  m='2398180'>which</span> <span m='2398610'>is</span> <span
  m='2398760'>like</span> <span m='2399050'>t</span> <span m='2399950'>of</span>
  <span m='2400390'>length</span> <span m='2400720'>of</span> <span
  m='2400840'>s.</span> <span m='2401960'>And</span> <span m='2402110'>we</span>
  <span m='2402190'>want</span> <span m='2402350'>to</span> <span
  m='2402420'>delete</span> <span m='2403210'>this</span> <span
  m='2403400'>character</span> <span m='2403730'>from</span> <span
  m='2403880'>the</span> <span m='2403950'>front,</span> <span
  m='2404290'>which</span> <span m='2404430'>is</span> <span
  m='2404520'>t</span> <span m='2404780'>of</span> <span m='2404860'>0.</span>
  <span m='2406080'>Then</span> <span m='2406260'>we</span> <span
  m='2406400'>will</span> <span m='2406590'>get</span> <span
  m='2407300'>the</span> <span m='2407410'>next</span> <span
  m='2407990'>strength.</span> <span m='2410125'>And at</span> <span
  m='2410390'>all</span> <span m='2410690'>times,</span> <span
  m='2411820'>r--</span> <span m='2412530'>what's</span> <span
  m='2412680'>the</span> <span m='2412770'>point</span> <span
  m='2413010'>of</span> <span m='2413090'>this</span> <span
  m='2413270'>r?</span> <span m='2415200'>You</span> <span
  m='2415470'>can</span> <span m='2415750'>say</span> <span
  m='2416110'>r--</span> <span m='2416580'>let's</span> <span
  m='2416810'>say</span> <span m='2417170'>open</span> <span
  m='2417455'>paren,</span> <span m='2418100'>close</span> <span
  m='2418370'>paren--</span> <span m='2419010'>this</span> <span
  m='2419200'>will</span> <span m='2419310'>give</span> <span
  m='2419500'>you</span> <span m='2420170'>a</span> <span
  m='2420220'>hash</span> <span m='2420570'>value</span> <span
  m='2422030'>of</span> <span m='2422270'>the</span> <span
  m='2422370'>current</span> <span m='2422710'>strength.</span> <span
  m='2425280'>So</span> <span m='2425430'>this</span> <span
  m='2425620'>is</span> <span m='2425720'>basically</span> <span
  m='2426080'>h</span> <span m='2426340'>of</span> <span m='2426440'>x</span>
  <span m='2428900'>for</span> <span m='2429030'>some</span> <span
  m='2429300'>hash</span> <span m='2429560'>function</span> <span
  m='2429930'>h,</span> <span m='2430215'>some</span> <span
  m='2430500'>reasonable</span> <span m='2431010'>hash</span> <span
  m='2431240'>function.</span> </p><p><span m='2432960'>If</span> <span
  m='2433140'>we</span> <span m='2433270'>could</span> <span
  m='2433450'>do</span> <span m='2433590'>this</span> <span
  m='2433910'>and</span> <span m='2434000'>we</span> <span
  m='2434100'>could</span> <span m='2434240'>do</span> <span
  m='2434340'>each</span> <span m='2434580'>of</span> <span
  m='2434630'>these</span> <span m='2434790'>operations</span> <span
  m='2435320'>in</span> <span m='2435440'>constant</span> <span
  m='2435890'>time,</span> <span m='2437390'>then</span> <span
  m='2437660'>we</span> <span m='2437870'>can</span> <span m='2438040'>do</span>
  <span m='2438180'>string</span> <span m='2438420'>matching.</span> <span
  m='2439070'>Let</span> <span m='2439200'>me</span> <span
  m='2439330'>tell</span> <span m='2439570'>you</span> <span
  m='2440540'>how.</span> <span m='2442210'>This</span> <span
  m='2442410'>is</span> <span m='2442540'>called</span> <span
  m='2442930'>the</span> <span m='2444040'>Karp-Rabin</span> <span
  m='2444680'>string</span> <span m='2444920'>matching</span> <span
  m='2445270'>algorithm.</span> <span m='2456269'>And if</span> <span
  m='2456780'>it's</span> <span m='2456920'>not</span> <span
  m='2457100'>clear</span> <span m='2457320'>exactly</span> <span
  m='2457650'>what's</span> <span m='2458160'>allowed</span> <span
  m='2458520'>here,</span> <span m='2458760'>you'll</span> <span
  m='2458910'>see</span> <span m='2459110'>it</span> <span m='2459760'>as</span>
  <span m='2459950'>we</span> <span m='2460070'>use</span> <span
  m='2460330'>it.</span> <span m='2472740'>First</span> <span
  m='2472990'>thing</span> <span m='2473190'>I'd</span> <span
  m='2473270'>like</span> <span m='2473450'>to</span> <span
  m='2473550'>do</span> <span m='2473720'>is</span> <span
  m='2473850'>compute</span> <span m='2474360'>the</span> <span
  m='2474450'>hash</span> <span m='2474700'>function</span> <span
  m='2474980'>of</span> <span m='2475080'>s.</span> <span m='2475500'>I</span>
  <span m='2475650'>only</span> <span m='2475740'>need</span> <span
  m='2475880'>to</span> <span m='2475970'>do</span> <span
  m='2476060'>that</span> <span m='2476280'>once,</span> <span
  m='2477150'>so</span> <span m='2477600'>I'll</span> <span
  m='2477720'>do</span> <span m='2477910'>it.</span> <span m='2478060'>In</span>
  <span m='2478200'>this</span> <span m='2478850'>data</span> <span
  m='2479090'>structure,</span> <span m='2479510'>the</span> <span
  m='2479640'>only</span> <span m='2479830'>thing</span> <span
  m='2479960'>you're</span> <span m='2480110'>allowed</span> <span
  m='2480290'>to</span> <span m='2480350'>do</span> <span m='2480450'>is</span>
  <span m='2480540'>add</span> <span m='2480790'>characters.</span> <span
  m='2481310'>Initially</span> <span m='2481780'>you have</span> <span
  m='2481870'>an</span> <span m='2481950'>empty</span> <span
  m='2482220'>string.</span> <span m='2483110'>And</span> <span
  m='2483200'>so</span> <span m='2483350'>for</span> <span
  m='2483510'>each</span> <span m='2483670'>character</span> <span
  m='2484200'>in</span> <span m='2484640'>s</span> <span m='2484770'>I'll</span>
  <span m='2484930'>just append it,</span> <span m='2485770'>and</span> <span
  m='2485920'>now</span> <span m='2486200'>rs</span> <span
  m='2487040'>gives</span> <span m='2487240'>me</span> <span
  m='2487680'>a</span> <span m='2488340'>hash</span> <span
  m='2488660'>value</span> <span m='2489090'>of</span> <span
  m='2489260'>s.</span> <span m='2490510'>OK?</span> </p><p><span
  m='2491880'>Now,</span> <span m='2494800'>I'd</span> <span
  m='2495000'>like</span> <span m='2495220'>to</span> <span
  m='2495620'>get</span> <span m='2495810'>started</span> <span
  m='2496350'>and</span> <span m='2496550'>compute</span> <span
  m='2497340'>the</span> <span m='2497430'>hash</span> <span
  m='2497710'>function</span> <span m='2498090'>of</span> <span
  m='2498260'>the</span> <span m='2498360'>first</span> <span
  m='2498920'>s</span> <span m='2499240'>characters</span> <span
  m='2499890'>of</span> <span m='2500050'>t.</span> <span m='2503840'>So</span>
  <span m='2504060'>this</span> <span m='2504300'>would</span> <span
  m='2504440'>be</span> <span m='2505450'>t</span> <span m='2507340'>up
  to</span> <span m='2507600'>length</span> <span m='2507870'>of</span> <span
  m='2507970'>s.</span> <span m='2511650'>And</span> <span
  m='2512120'>I'm</span> <span m='2512210'>going</span> <span
  m='2512300'>to</span> <span m='2512390'>call</span> <span
  m='2512630'>this</span> <span m='2512850'>thing</span> <span
  m='2513100'>rt,</span> <span m='2513890'>that's my</span> <span
  m='2514230'>rolling</span> <span m='2514730'>hash</span> <span m='2515220'>for
  t.</span> <span m='2520140'>And</span> <span m='2520300'>append those</span>
  <span m='2520480'>characters.</span> <span m='2520860'>So</span> <span
  m='2521010'>now</span> <span m='2521390'>rs</span> <span m='2521610'>is</span>
  <span m='2522160'>a</span> <span m='2522260'>rolling</span> <span
  m='2522550'>hash</span> <span m='2522840'>of</span> <span
  m='2522980'>s.</span> <span m='2523820'>rt is</span> <span
  m='2523930'>a</span> <span m='2524010'>rolling</span> <span
  m='2524230'>hash</span> <span m='2524500'>of</span> <span
  m='2524560'>the</span> <span m='2524650'>first</span> <span
  m='2525480'>s</span> <span m='2525720'>characters</span> <span
  m='2526830'>in</span> <span m='2527060'>t.</span> <span m='2527960'>So</span>
  <span m='2528080'>I</span> <span m='2528160'>should</span> <span
  m='2528310'>check</span> <span m='2528520'>whether</span> <span
  m='2528680'>they're</span> <span m='2528790'>equal.</span> <span
  m='2529600'>If</span> <span m='2529760'>they're</span> <span
  m='2529860'>not,</span> <span m='2531900'>shift</span> <span
  m='2532150'>over</span> <span m='2532380'>by</span> <span
  m='2532530'>one.</span> <span m='2532840'>Add</span> <span
  m='2533010'>one</span> <span m='2533180'>character</span> <span
  m='2533540'>at</span> <span m='2533630'>the</span> <span
  m='2533750'>end,</span> <span m='2534270'>delete</span> <span
  m='2534600'>character from the</span> <span m='2534920'>beginning.</span>
  <span m='2535980'>I'm going to</span> <span m='2536110'>have to</span> <span
  m='2536350'>do</span> <span m='2536450'>this</span> <span
  m='2536600'>many</span> <span m='2536850'>times.</span> </p><p><span
  m='2538970'>So</span> <span m='2540540'>I</span> <span
  m='2540570'>guess</span> <span m='2541310'>technically,</span> <span
  m='2541810'>I</span> <span m='2541930'>need</span> <span m='2542140'>to</span>
  <span m='2542250'>check</span> <span m='2543410'>whether</span> <span
  m='2543670'>these</span> <span m='2543880'>are</span> <span
  m='2543950'>equal</span> <span m='2544250'>first.</span> <span
  m='2547580'>If</span> <span m='2547780'>they're</span> <span
  m='2547920'>equal,</span> <span m='2548380'>then</span> <span
  m='2549060'>we'll</span> <span m='2549260'>talk</span> <span
  m='2549490'>about</span> <span m='2549750'>it in</span> <span
  m='2549870'>a</span> <span m='2549930'>moment.</span> <span
  m='2551160'>The</span> <span m='2551250'>main</span> <span
  m='2551470'>thing</span> <span m='2551640'>I</span> <span
  m='2551680'>need</span> <span m='2551870'>to</span> <span
  m='2551960'>do</span> <span m='2552210'>is</span> <span
  m='2552340'>this</span> <span m='2552510'>for</span> <span
  m='2552720'>loop,</span> <span m='2553960'>which</span> <span
  m='2554330'>checks</span> <span m='2554820'>all</span> <span
  m='2555070'>of</span> <span m='2555170'>the</span> <span
  m='2555330'>other.</span> <span m='2565530'>And</span> <span
  m='2565910'>all</span> <span m='2566110'>I</span> <span
  m='2566170'>need</span> <span m='2566360'>to</span> <span
  m='2566470'>do</span> <span m='2567250'>is</span> <span
  m='2567620'>throw</span> <span m='2567900'>away</span> <span
  m='2568080'>the</span> <span m='2568240'>first</span> <span
  m='2568510'>letter,</span> <span m='2569840'>which</span> <span
  m='2570250'>I</span> <span m='2570380'>know</span> <span m='2570680'>is</span>
  <span m='2570860'>t</span> <span m='2571080'>of</span> <span
  m='2571170'>i</span> <span m='2571340'>minus</span> <span
  m='2572660'>length</span> <span m='2572980'>of</span> <span
  m='2573150'>s.</span> <span m='2576240'>And</span> <span
  m='2576760'>add</span> <span m='2577030'>the</span> <span
  m='2577140'>next</span> <span m='2577420'>letter,</span> <span
  m='2578850'>which</span> <span m='2579150'>is</span> <span
  m='2579200'>going</span> <span m='2579320'>to</span> <span
  m='2579370'>be</span> <span m='2579500'>t of</span> <span
  m='2579700'>i.</span> <span m='2584660'>And</span> <span
  m='2584850'>then</span> <span m='2585210'>after</span> <span
  m='2585530'>I</span> <span m='2585550'>do</span> <span
  m='2585700'>that,</span> <span m='2586200'>I</span> <span
  m='2586400'>don't</span> <span m='2586580'>change</span> <span
  m='2586830'>hs</span> <span m='2587450'>because</span> <span
  m='2587580'>that's</span> <span m='2587790'>fixed.</span> <span
  m='2588250'>That's</span> <span m='2588470'>just--</span> <span
  m='2588900'>or,</span> <span m='2589320'>sorry, I</span> <span
  m='2589650'>switched</span> <span m='2589910'>from</span> <span
  m='2590080'>h</span> <span m='2590400'>to--</span> <span m='2591710'>in</span>
  <span m='2591820'>my</span> <span m='2591920'>notes</span> <span
  m='2592160'>I</span> <span m='2592190'>have</span> <span m='2592400'>h.</span>
  <span m='2593860'>I've been</span> <span m='2594040'>switching</span> <span
  m='2594390'>to r,</span> <span m='2594880'>so</span> <span
  m='2595180'>all</span> <span m='2595390'>those</span> <span
  m='2595550'>h's</span> <span m='2595860'>are</span> <span
  m='2596190'>r's.</span> <span m='2597615'>Sorry about</span> <span
  m='2598090'>that.</span> </p><p><span m='2600440'>So</span> <span
  m='2600600'>then</span> <span m='2600940'>if</span> <span
  m='2601690'>rs</span> <span m='2603450'>equals</span> <span
  m='2605370'>rt,</span> <span m='2610250'>then</span> <span
  m='2613200'>potentially</span> <span m='2615240'>that</span> <span
  m='2615500'>substring</span> <span m='2616000'>of</span> <span
  m='2616120'>t</span> <span m='2616410'>matches</span> <span
  m='2616940'>s.</span> <span m='2618120'>But</span> <span
  m='2618260'>it's</span> <span m='2618430'>potentially</span> <span
  m='2619250'>because</span> <span m='2620710'>we're</span> <span
  m='2620840'>hashing.</span> <span m='2621410'>Things</span> <span
  m='2621780'>are</span> <span m='2622090'>only</span> <span
  m='2622450'>true</span> <span m='2622840'>in</span> <span
  m='2622920'>expectation.</span> <span m='2624830'>There's</span> <span
  m='2625020'>some</span> <span m='2625240'>probability</span> <span
  m='2625870'>of</span> <span m='2625940'>failure.</span> <span
  m='2627020'>Just</span> <span m='2627210'>because</span> <span
  m='2627520'>the</span> <span m='2627610'>hash</span> <span
  m='2627970'>function</span> <span m='2628650'>of</span> <span
  m='2629030'>two</span> <span m='2629330'>strings</span> <span
  m='2630050'>comes</span> <span m='2630310'>out</span> <span
  m='2630490'>equal</span> <span m='2630820'>doesn't</span> <span
  m='2631060'>mean</span> <span m='2631210'>the</span> <span
  m='2631290'>strings</span> <span m='2631620'>themselves</span> <span
  m='2632020'>are</span> <span m='2632120'>equal,</span> <span
  m='2632930'>because</span> <span m='2633130'>there</span> <span
  m='2633280'>are</span> <span m='2633340'>collisions.</span> <span
  m='2634910'>Even</span> <span m='2635180'>distinct</span> <span
  m='2635610'>strings</span> <span m='2635940'>may</span> <span
  m='2636050'>map</span> <span m='2636290'>to</span> <span
  m='2636390'>the</span> <span m='2636500'>same</span> <span
  m='2636880'>slot</span> <span m='2637270'>in</span> <span
  m='2637360'>the</span> <span m='2637450'>table.</span> <span
  m='2638520'>So</span> <span m='2638690'>what</span> <span
  m='2638840'>we</span> <span m='2638960'>do</span> <span m='2639210'>in</span>
  <span m='2639410'>this</span> <span m='2639610'>situation</span> <span
  m='2640720'>is</span> <span m='2641030'>check</span> <span
  m='2644810'>whether</span> <span m='2649250'>s</span> <span
  m='2649780'>equals</span> <span m='2651350'>t--</span> <span m='2651835'>I
  did</span> <span m='2652320'>it</span> <span m='2652480'>slightly</span> <span
  m='2652840'>less</span> <span m='2653070'>conveniently</span> <span
  m='2653630'>than</span> <span m='2653790'>before--</span> <span
  m='2655040'>it's</span> <span m='2655280'>like</span> <span
  m='2655530'>i</span> <span m='2655900'>minus</span> <span
  m='2656330'>length</span> <span m='2656640'>of</span> <span
  m='2656810'>s</span> <span m='2657100'>plus</span> <span m='2657420'>1</span>
  <span m='2659280'>to</span> <span m='2661290'>i</span> <span
  m='2661530'>plus</span> <span m='2661730'>1.</span> <span m='2663100'>Oh
  well.</span> <span m='2663790'>It</span> <span m='2663830'>wasn't</span> <span
  m='2664000'>very</span> <span m='2664180'>beautiful</span> <span
  m='2664880'>but</span> <span m='2665930'>it</span> <span
  m='2666020'>works.</span> </p><p><span m='2668790'>So</span> <span
  m='2668960'>in</span> <span m='2669090'>this</span> <span
  m='2669270'>case,</span> <span m='2669520'>I'm</span> <span
  m='2669610'>going</span> <span m='2669720'>to</span> <span
  m='2669810'>check</span> <span m='2670060'>it</span> <span
  m='2670690'>character</span> <span m='2671100'>by</span> <span
  m='2671230'>character.</span> <span m='2672810'>OK?</span> <span
  m='2674840'>If</span> <span m='2675110'>they're</span> <span
  m='2675300'>equal,</span> <span m='2677160'>then</span> <span
  m='2677310'>we</span> <span m='2677430'>found</span> <span
  m='2677660'>a</span> <span m='2677700'>match.</span> <span
  m='2679330'>So</span> <span m='2679670'>it's</span> <span
  m='2679890'>kind</span> <span m='2680070'>of</span> <span
  m='2680170'>OK</span> <span m='2680780'>that</span> <span m='2680910'>I</span>
  <span m='2680980'>spent</span> <span m='2681260'>all</span> <span
  m='2681400'>this</span> <span m='2681540'>time</span> <span
  m='2682410'>to</span> <span m='2682480'>check</span> <span
  m='2682750'>them.</span> <span m='2682930'>In</span> <span
  m='2683030'>particular,</span> <span m='2683440'>if I'm</span> <span
  m='2683600'>just</span> <span m='2683800'>looking</span> <span
  m='2684030'>for</span> <span m='2684130'>the</span> <span
  m='2684220'>first</span> <span m='2684550'>match--</span> <span
  m='2684870'>like</span> <span m='2685560'>you're</span> <span
  m='2685670'>searching</span> <span m='2686030'>through</span> <span
  m='2686740'>a</span> <span m='2686850'>text</span> <span
  m='2687100'>document,</span> <span m='2687410'>you</span> <span
  m='2687720'>just</span> <span m='2687870'>care</span> <span
  m='2688000'>about</span> <span m='2688170'>the</span> <span
  m='2688240'>first</span> <span m='2688540'>match--</span> <span
  m='2689540'>then</span> <span m='2690180'>you're</span> <span
  m='2690330'>done.</span> <span m='2690660'>So</span> <span
  m='2690740'>yeah,</span> <span m='2691140'>I</span> <span
  m='2691260'>spent</span> <span m='2691940'>order s</span> <span
  m='2692560'>time</span> <span m='2692930'>to</span> <span
  m='2693040'>do</span> <span m='2693200'>this,</span> <span
  m='2694750'>but</span> <span m='2694850'>if</span> <span
  m='2694940'>they're</span> <span m='2695050'>equal</span> <span
  m='2695730'>it's</span> <span m='2695800'>sort of</span> <span
  m='2695890'>worth</span> <span m='2696120'>that</span> <span
  m='2696300'>effort.</span> <span m='2696660'>I</span> <span
  m='2696770'>found</span> <span m='2697000'>the</span> <span
  m='2697060'>match.</span> <span m='2698760'>If</span> <span
  m='2698930'>they're</span> <span m='2699050'>not</span> <span
  m='2699270'>equal,</span> <span m='2701660'>we</span> <span
  m='2701900'>basically</span> <span m='2702950'>hope</span> <span
  m='2703990'>or</span> <span m='2704110'>we</span> <span
  m='2704660'>will</span> <span m='2704900'>engineer</span> <span
  m='2705500'>it</span> <span m='2705670'>so</span> <span
  m='2705870'>that</span> <span m='2706910'>this</span> <span
  m='2707160'>happens</span> <span m='2708500'>with</span> <span
  m='2708640'>probability</span> <span m='2709280'>at</span> <span
  m='2709370'>most</span> <span m='2709600'>1/s.</span> <span m='2720840'>If
  we</span> <span m='2721110'>can</span> <span m='2721220'>do</span> <span
  m='2721350'>that,</span> <span m='2722000'>then</span> <span
  m='2722240'>the</span> <span m='2722340'>expected</span> <span
  m='2722920'>time</span> <span m='2723300'>here</span> <span
  m='2724210'>is</span> <span m='2724380'>constant.</span> </p><p><span
  m='2733910'>So</span> <span m='2734040'>that</span> <span
  m='2734190'>would</span> <span m='2734260'>be</span> <span
  m='2734360'>good</span> <span m='2737300'>because</span> <span
  m='2737620'>then,</span> <span m='2739730'>if skip</span> <span
  m='2740140'>and</span> <span m='2740230'>append</span> <span
  m='2740530'>take</span> <span m='2740710'>constant</span> <span
  m='2741090'>time</span> <span m='2742320'>and</span> <span
  m='2743030'>this</span> <span m='2743470'>sort</span> <span
  m='2743660'>of</span> <span m='2743980'>double</span> <span
  m='2744350'>checking</span> <span m='2744890'>only</span> <span
  m='2745120'>takes</span> <span m='2745370'>constant</span> <span
  m='2745730'>expected</span> <span m='2746180'>time--</span> <span
  m='2746420'>except</span> <span m='2746690'>when</span> <span
  m='2746790'>we</span> <span m='2746900'>find</span> <span
  m='2747180'>matches</span> <span m='2747620'>and</span> <span
  m='2747700'>then</span> <span m='2748340'>we're</span> <span
  m='2748590'>OK</span> <span m='2748860'>with</span> <span
  m='2749020'>it--</span> <span m='2749480'>then</span> <span
  m='2749620'>this</span> <span m='2749740'>overall</span> <span
  m='2750160'>thing</span> <span m='2750430'>will</span> <span
  m='2750550'>take</span> <span m='2750990'>linear</span> <span
  m='2751300'>time.</span> <span m='2752760'>In fact,</span> <span
  m='2754380'>the</span> <span m='2754500'>proper</span> <span
  m='2754880'>thing</span> <span m='2755090'>would</span> <span
  m='2755230'>be</span> <span m='2755410'>this</span> <span
  m='2755660'>is</span> <span m='2759980'>you</span> <span
  m='2760190'>pay</span> <span m='2760400'>s</span> <span
  m='2760600'>plus</span> <span m='2760850'>t,</span> <span
  m='2762570'>then</span> <span m='2762730'>you</span> <span
  m='2762860'>also</span> <span m='2763210'>pay--</span> <span
  m='2764140'>for</span> <span m='2764300'>each</span> <span
  m='2764550'>match</span> <span m='2765100'>that</span> <span
  m='2765260'>you</span> <span m='2765380'>want</span> <span
  m='2765540'>to</span> <span m='2765600'>report,</span> <span
  m='2767370'>you</span> <span m='2767490'>pay</span> <span
  m='2768100'>length</span> <span m='2768330'>of</span> <span
  m='2768430'>s.</span> <span m='2771240'>I'm</span> <span
  m='2771360'>not</span> <span m='2771540'>sure</span> <span
  m='2771870'>whether</span> <span m='2772050'>you</span> <span
  m='2772190'>can</span> <span m='2772250'>get</span> <span
  m='2772390'>rid</span> <span m='2772510'>of</span> <span
  m='2772600'>that</span> <span m='2772810'>term.</span> <span
  m='2773030'>But</span> <span m='2773180'>in</span> <span
  m='2773290'>particular,</span> <span m='2773750'>if</span> <span
  m='2773850'>you</span> <span m='2773950'>just</span> <span
  m='2774050'>care</span> <span m='2774060'>about</span> <span
  m='2774250'>one</span> <span m='2774430'>match,</span> <span
  m='2775120'>this</span> <span m='2775280'>is</span> <span
  m='2775390'>linear</span> <span m='2775740'>time.</span> <span
  m='2779167'>It's</span> <span m='2779610'>pretty</span> <span
  m='2779790'>cool.</span> </p><p><span m='2783670'>There's</span> <span
  m='2783980'>one</span> <span m='2784180'>remaining</span> <span
  m='2784470'>question,</span> <span m='2785090'>which</span> <span
  m='2785280'>is</span> <span m='2785670'>how</span> <span m='2785890'>do</span>
  <span m='2785960'>you</span> <span m='2786080'>build</span> <span
  m='2786410'>this</span> <span m='2787170'>data</span> <span
  m='2787380'>structure?</span> <span m='2788400'>Is</span> <span
  m='2788580'>the</span> <span m='2788700'>algorithm</span> <span
  m='2789110'>clear</span> <span m='2789380'>though?</span> <span
  m='2790700'>I</span> <span m='2790720'>mean,</span> <span m='2790860'>I</span>
  <span m='2791050'>wrote</span> <span m='2791250'>it</span> <span
  m='2791350'>out</span> <span m='2791510'>in</span> <span
  m='2791660'>gory</span> <span m='2791890'>detail</span> <span
  m='2792270'>so</span> <span m='2792370'>you</span> <span
  m='2792430'>can</span> <span m='2792550'>really</span> <span
  m='2792820'>see</span> <span m='2793070'>what's</span> <span
  m='2793270'>happening,</span> <span m='2793690'>also</span> <span
  m='2793930'>because</span> <span m='2794200'>you</span> <span
  m='2794280'>need</span> <span m='2794450'>to</span> <span
  m='2794530'>do</span> <span m='2794690'>it in</span> <span
  m='2794840'>your</span> <span m='2794950'>problem</span> <span
  m='2795290'>set</span> <span m='2796070'>so I</span> <span
  m='2796490'>give</span> <span m='2796660'>you</span> <span
  m='2796770'>as</span> <span m='2796870'>much</span> <span
  m='2797590'>code</span> <span m='2797840'>to</span> <span
  m='2797930'>work</span> <span m='2798120'>from</span> <span
  m='2798310'>as</span> <span m='2798430'>possible.</span> <span
  m='2799660'>Question?</span> </p><p><span m='2800800'>AUDIENCE: What is
  rs?</span> </p><p><span m='2802300'>PROFESSOR: rs</span> <span
  m='2803010'>is</span> <span m='2804470'>going</span> <span
  m='2804580'>to</span> <span m='2804640'>represent</span> <span
  m='2805070'>a</span> <span m='2805110'>hash</span> <span
  m='2805550'>value</span> <span m='2806040'>of</span> <span
  m='2806380'>s.</span> <span m='2809100'>You</span> <span
  m='2809230'>could</span> <span m='2809380'>just</span> <span
  m='2809500'>say</span> <span m='2809650'>h</span> <span m='2809880'>of</span>
  <span m='2809990'>s.</span> <span m='2810770'>But</span> <span
  m='2812030'>what</span> <span m='2812230'>I</span> <span
  m='2812310'>like</span> <span m='2812470'>to</span> <span
  m='2812550'>show</span> <span m='2812950'>is that</span> <span
  m='2813360'>all</span> <span m='2813620'>you</span> <span
  m='2813750'>need</span> <span m='2814090'>are</span> <span
  m='2814210'>these</span> <span m='2814460'>operations.</span> <span
  m='2815790'>And</span> <span m='2815910'>so</span> <span
  m='2816040'>given</span> <span m='2816330'>a</span> <span
  m='2816420'>data</span> <span m='2816640'>structure</span> <span
  m='2816940'>that</span> <span m='2817060'>will</span> <span
  m='2817200'>compute</span> <span m='2817790'>a</span> <span
  m='2817870'>hash</span> <span m='2818200'>function,</span> <span
  m='2819290'>given</span> <span m='2819550'>the</span> <span
  m='2819670'>append</span> <span m='2820060'>operation,</span> <span
  m='2821620'>what</span> <span m='2821920'>I</span> <span
  m='2822340'>did</span> <span m='2822510'>up</span> <span
  m='2822680'>here</span> <span m='2822990'>was</span> <span
  m='2823720'>just</span> <span m='2823910'>append</span> <span
  m='2824260'>every</span> <span m='2824600'>letter</span> <span
  m='2824920'>of</span> <span m='2824990'>s</span> <span m='2826330'>into</span>
  <span m='2826630'>this</span> <span m='2826910'>thing,</span> <span
  m='2827310'>and</span> <span m='2827460'>then</span> <span
  m='2827650'>rs</span> <span m='2828460'>open</span> <span
  m='2828880'>paren,</span> <span m='2828970'>close</span> <span
  m='2829200'>paren</span> <span m='2829420'>gives</span> <span
  m='2829580'>me</span> <span m='2829670'>the</span> <span
  m='2829740'>hash</span> <span m='2830000'>function</span> <span
  m='2830280'>of</span> <span m='2830350'>s.</span> </p><p><span
  m='2832232'>AUDIENCE: You said you can do</span> <span
  m='2832726'>r.append</span> <span m='2833220'>over here,</span> <span
  m='2833714'>but then you said</span> <span m='2834208'>rs--</span>
  </p><p><span m='2835690'>PROFESSOR: Yeah.</span> <span m='2836580'>So</span>
  <span m='2836710'>there</span> <span m='2836890'>are</span> <span
  m='2837100'>two</span> <span m='2837450'>rolling</span> <span
  m='2837750'>hashes.</span> <span m='2838140'>One's</span> <span
  m='2838340'>called</span> <span m='2838520'>rs</span> <span
  m='2838810'>and</span> <span m='2838960'>one's</span> <span
  m='2839360'>called</span> <span m='2840120'>rt.</span> <span
  m='2842500'>This</span> <span m='2842710'>was</span> <span
  m='2842870'>an</span> <span m='2843470'>ADT</span> <span
  m='2843890'>and</span> <span m='2843980'>I</span> <span
  m='2844500'>didn't</span> <span m='2844840'>say</span> <span m='2845110'>it at
  the beginning--</span> <span m='2845800'>line</span> <span
  m='2846040'>one</span> <span m='2846270'>I</span> <span m='2846360'>say</span>
  <span m='2846530'>rs</span> <span m='2846930'>equals</span> <span
  m='2847190'>a</span> <span m='2847260'>new</span> <span
  m='2847420'>rolling</span> <span m='2847680'>hash.</span> <span
  m='2847990'>rt</span> <span m='2848380'>equals</span> <span
  m='2848640'>a</span> <span m='2848710'>new</span> <span
  m='2848880'>rolling</span> <span m='2849130'>hash.</span> <span
  m='2849890'>Sorry, I should</span> <span m='2850310'>bind</span> <span
  m='2850510'>my</span> <span m='2850600'>variables.</span> <span
  m='2852880'>So</span> <span m='2852920'>I'm</span> <span
  m='2853000'>using</span> <span m='2853240'>two</span> <span
  m='2853460'>of</span> <span m='2853520'>them</span> <span
  m='2853650'>because</span> <span m='2853940'>I</span> <span
  m='2853990'>want</span> <span m='2854160'>to</span> <span
  m='2854220'>compare</span> <span m='2854580'>their</span> <span
  m='2854720'>values,</span> <span m='2855825'>like</span> <span
  m='2856300'>this.</span> <span m='2859390'>Other</span> <span
  m='2859460'>questions?</span> <span m='2862090'>It's</span> <span
  m='2862320'>actually a</span> <span m='2862650'>pretty</span> <span
  m='2862880'>big</span> <span m='2863130'>idea.</span> <span
  m='2863450'>This</span> <span m='2863650'>is</span> <span
  m='2863860'>an</span> <span m='2864070'>algorithm</span> <span
  m='2864460'>from</span> <span m='2864680'>the</span> <span
  m='2865350'>'90s,</span> <span m='2866960'>so</span> <span
  m='2867210'>it's</span> <span m='2867370'>fairly</span> <span
  m='2868220'>recent.</span> <span m='2871769'>And</span> <span
  m='2872230'>it's</span> <span m='2872540'>one</span> <span
  m='2872710'>of</span> <span m='2872790'>the</span> <span
  m='2872900'>first</span> <span m='2873240'>examples</span> <span
  m='2874290'>of</span> <span m='2874480'>really</span> <span
  m='2874730'>using</span> <span m='2875100'>randomization</span> <span
  m='2875850'>in</span> <span m='2875970'>a</span> <span
  m='2876070'>super</span> <span m='2876390'>cool</span> <span
  m='2876660'>way,</span> <span m='2877860'>other</span> <span
  m='2878120'>than</span> <span m='2878260'>just</span> <span
  m='2878450'>hashing</span> <span m='2879120'>as</span> <span
  m='2879270'>a</span> <span m='2879320'>data</span> <span
  m='2879570'>structure.</span> <span m='2884240'>All</span> <span
  m='2884310'>right.</span> </p><p><span m='2884790'>So</span> <span
  m='2885760'>the</span> <span m='2885860'>remaining</span> <span
  m='2886220'>thing</span> <span m='2886410'>to</span> <span
  m='2886540'>do</span> <span m='2887420'>is</span> <span
  m='2887640'>figure</span> <span m='2887950'>out</span> <span
  m='2888400'>how</span> <span m='2888600'>to</span> <span
  m='2888700'>build</span> <span m='2889260'>this</span> <span
  m='2889540'>ADT.</span> <span m='2890210'>What's</span> <span
  m='2890410'>the</span> <span m='2890470'>data</span> <span
  m='2890690'>structure</span> <span m='2891010'>that</span> <span
  m='2891150'>implements</span> <span m='2891640'>this,</span> <span
  m='2892780'>spending</span> <span m='2893120'>constant</span> <span
  m='2893600'>time</span> <span m='2893990'>for</span> <span
  m='2894150'>each</span> <span m='2894330'>of</span> <span
  m='2894400'>these</span> <span m='2894580'>operations.</span> <span
  m='2904370'>Now,</span> <span m='2904630'>to</span> <span
  m='2904770'>tell</span> <span m='2904910'>you</span> <span
  m='2904970'>the</span> <span m='2905070'>truth,</span> <span
  m='2905350'>doing</span> <span m='2905820'>it</span> <span
  m='2905990'>depends</span> <span m='2906440'>on</span> <span
  m='2906530'>which</span> <span m='2907030'>hashing</span> <span
  m='2907430'>method</span> <span m='2907750'>you</span> <span
  m='2907870'>use,</span> <span m='2908290'>which</span> <span
  m='2908490'>hash</span> <span m='2908750'>function</span> <span
  m='2909150'>you</span> <span m='2909270'>want</span> <span
  m='2909460'>to</span> <span m='2909500'>use.</span> <span m='2910940'>I</span>
  <span m='2911070'>just</span> <span m='2911240'>erased</span> <span
  m='2911550'>the</span> <span m='2911640'>multiplication</span> <span
  m='2912250'>method</span> <span m='2912540'>because</span> <span
  m='2912940'>it's</span> <span m='2913150'>a</span> <span
  m='2913210'>pain</span> <span m='2913480'>to</span> <span
  m='2913520'>use</span> <span m='2913740'>the</span> <span
  m='2913820'>multiplication</span> <span m='2914540'>method.</span> <span
  m='2920360'>Though</span> <span m='2920620'>I'll bet</span> <span
  m='2920850'>you</span> <span m='2920980'>could</span> <span
  m='2921160'>use</span> <span m='2921400'>it,</span> <span
  m='2921690'>actually.</span> <span m='2922900'>That's</span> <span
  m='2923320'>an</span> <span m='2923420'>exercise</span> <span
  m='2924000'>for</span> <span m='2924200'>you</span> <span
  m='2924300'>think</span> <span m='2924680'>about.</span> </p><p><span
  m='2925400'>I'm</span> <span m='2925590'>going</span> <span
  m='2925770'>to</span> <span m='2925880'>use</span> <span
  m='2926000'>the</span> <span m='2926080'>division</span> <span
  m='2926420'>method</span> <span m='2926750'>because</span> <span
  m='2926910'>it's</span> <span m='2927050'>the</span> <span
  m='2927140'>simplest</span> <span m='2927580'>hash</span> <span
  m='2927800'>function.</span> <span m='2928660'>And</span> <span
  m='2928760'>it</span> <span m='2928830'>turns</span> <span
  m='2929080'>out,</span> <span m='2929220'>in</span> <span
  m='2929390'>this</span> <span m='2929570'>setting</span> <span
  m='2930050'>it</span> <span m='2930220'>does</span> <span
  m='2930440'>work.</span> <span m='2930790'>We're</span> <span
  m='2930910'>not</span> <span m='2931080'>going</span> <span
  m='2931180'>to</span> <span m='2931250'>prove</span> <span
  m='2933070'>that</span> <span m='2933210'>this</span> <span
  m='2933420'>is</span> <span m='2933550'>true.</span> <span
  m='2933760'>This</span> <span m='2933930'>is</span> <span
  m='2934050'>going</span> <span m='2934170'>to</span> <span
  m='2934220'>be</span> <span m='2934330'>true</span> <span
  m='2934850'>in</span> <span m='2934970'>expectation.</span> <span
  m='2936860'>Expected</span> <span m='2937350'>time.</span> <span
  m='2942110'>But</span> <span m='2943040'>Karp</span> <span m='2943440'>and 
  Rabin</span> <span m='2943810'>proved</span> <span m='2944300'>that</span>
  <span m='2944480'>this</span> <span m='2945300'>running</span> <span
  m='2945540'>time</span> <span m='2946270'>holds,</span> <span
  m='2947470'>even</span> <span m='2947770'>if</span> <span
  m='2947870'>you</span> <span m='2947950'>just</span> <span
  m='2948150'>use</span> <span m='2948320'>a</span> <span
  m='2948390'>simple</span> <span m='2948810'>hash</span> <span
  m='2949040'>function</span> <span m='2949930'>of</span> <span
  m='2950040'>the</span> <span m='2950140'>division</span> <span
  m='2950490'>method</span> <span m='2950820'>where</span> <span
  m='2951570'>m</span> <span m='2951980'>is</span> <span
  m='2952150'>chosen</span> <span m='2952500'>to</span> <span
  m='2952610'>be</span> <span m='2952860'>a</span> <span
  m='2952960'>random</span> <span m='2953480'>prime.</span> <span
  m='2958800'>Let's</span> <span m='2959090'>say</span> <span
  m='2959290'>about</span> <span m='2959600'>is</span> <span
  m='2959730'>big</span> <span m='2960080'>as--</span> <span
  m='2961010'>let's</span> <span m='2961230'>say</span> <span
  m='2961710'>at</span> <span m='2961790'>least</span> <span
  m='2962050'>as</span> <span m='2962170'>big</span> <span m='2962530'>as</span>
  <span m='2962790'>length</span> <span m='2963020'>of</span> <span
  m='2963130'>s.</span> <span m='2966050'>The</span> <span
  m='2966150'>bigger</span> <span m='2966440'>you</span> <span
  m='2966580'>make</span> <span m='2966810'>it,</span> <span
  m='2967000'>the</span> <span m='2967060'>higher</span> <span
  m='2967510'>probability</span> <span m='2968160'>this</span> <span
  m='2968340'>is</span> <span m='2968450'>going</span> <span
  m='2968660'>to</span> <span m='2968730'>be</span> <span
  m='2968850'>true.</span> <span m='2969640'>But</span> <span
  m='2969780'>length</span> <span m='2970010'>of</span> <span
  m='2970120'>s</span> <span m='2970320'>will</span> <span
  m='2970430'>give</span> <span m='2970620'>you</span> <span
  m='2970740'>this</span> <span m='2971240'>on</span> <span
  m='2972400'>average.</span> </p><p><span m='2974660'>So</span> <span
  m='2974760'>we're</span> <span m='2974930'>not</span> <span
  m='2975120'>going</span> <span m='2975260'>to</span> <span
  m='2975360'>talk</span> <span m='2975610'>about</span> <span
  m='2975840'>in</span> <span m='2975910'>this</span> <span
  m='2976070'>class</span> <span m='2976400'>how</span> <span
  m='2976540'>to</span> <span m='2976620'>find</span> <span m='2976850'>a</span>
  <span m='2976900'>random</span> <span m='2977160'>prime,</span> <span
  m='2977750'>but</span> <span m='2979070'>the</span> <span
  m='2979210'>algorithm</span> <span m='2979620'>is</span> <span
  m='2980130'>choose</span> <span m='2980330'>a</span> <span
  m='2980400'>random</span> <span m='2980660'>number</span> <span m='2981040'>of
  about</span> <span m='2981290'>the</span> <span m='2981370'>right</span> <span
  m='2981570'>size</span> <span m='2982650'>and</span> <span
  m='2983080'>check</span> <span m='2983310'>whether</span> <span
  m='2983500'>it's</span> <span m='2983620'>prime.</span> <span
  m='2984030'>If</span> <span m='2984250'>it's</span> <span
  m='2984420'>not,</span> <span m='2984680'>do</span> <span
  m='2984800'>it</span> <span m='2984870'>again.</span> <span
  m='2986030'>And</span> <span m='2987560'>by</span> <span
  m='2987700'>the</span> <span m='2987760'>prime</span> <span
  m='2988000'>number</span> <span m='2988220'>theorem,</span> <span
  m='2988950'>after</span> <span m='2989310'>log end</span> <span
  m='2989700'>trials</span> <span m='2990100'>you</span> <span
  m='2990210'>will</span> <span m='2990320'>find</span> <span
  m='2990540'>a</span> <span m='2990600'>prime.</span> <span
  m='2992130'>And</span> <span m='2992510'>we're</span> <span
  m='2992600'>not</span> <span m='2992760'>going</span> <span
  m='2992850'>to</span> <span m='2992900'>talk</span> <span
  m='2993050'>about</span> <span m='2993290'>how to</span> <span
  m='2993350'>check</span> <span m='2993650'>whether a</span> <span
  m='2993880'>number's</span> <span m='2994240'>prime,</span> <span
  m='2995130'>but</span> <span m='2995370'>it</span> <span
  m='2995470'>can</span> <span m='2995620'>be</span> <span
  m='2995710'>done.</span> <span m='2997870'>All</span> <span
  m='2997940'>right.</span> <span m='2998480'>So</span> <span
  m='3000415'>we're</span> <span m='3000850'>basically</span> <span
  m='3001410'>done.</span> </p><p><span m='3002220'>The</span> <span
  m='3002360'>point</span> <span m='3002740'>is</span> <span
  m='3003010'>to</span> <span m='3003190'>look</span> <span
  m='3003593'>at--</span> <span m='3003996'>if</span> <span
  m='3004400'>you</span> <span m='3005270'>look</span> <span
  m='3005540'>at</span> <span m='3005610'>an</span> <span
  m='3005730'>append</span> <span m='3006110'>operation</span> <span
  m='3010630'>and</span> <span m='3010780'>you</span> <span
  m='3010870'>think</span> <span m='3011120'>about</span> <span
  m='3011890'>how</span> <span m='3012320'>this</span> <span
  m='3012690'>hash</span> <span m='3013020'>function</span> <span
  m='3013400'>changes</span> <span m='3015380'>when</span> <span
  m='3015620'>you</span> <span m='3015770'>add</span> <span m='3016050'>a</span>
  <span m='3016100'>single</span> <span m='3016510'>character.</span> <span
  m='3017350'>Oh,</span> <span m='3017720'>I</span> <span
  m='3017800'>should</span> <span m='3018000'>tell</span> <span
  m='3018180'>you.</span> <span m='3020470'>We're</span> <span
  m='3020630'>going</span> <span m='3020730'>to</span> <span
  m='3020820'>treat</span> <span m='3022470'>the</span> <span
  m='3022570'>string</span> <span m='3022940'>x</span> <span
  m='3024380'>as</span> <span m='3024760'>a</span> <span
  m='3024840'>multi</span> <span m='3025250'>digit</span> <span
  m='3025690'>number.</span> <span m='3029650'>This</span> <span
  m='3029830'>is</span> <span m='3029930'>the</span> <span
  m='3030090'>sort</span> <span m='3030290'>of</span> <span
  m='3030360'>prehash</span> <span m='3030840'>function.</span> <span
  m='3036480'>And</span> <span m='3036730'>the</span> <span
  m='3036810'>base</span> <span m='3038080'>is</span> <span
  m='3038480'>the</span> <span m='3038590'>size</span> <span
  m='3038910'>of</span> <span m='3038970'>your</span> <span
  m='3039100'>alphabet.</span> <span m='3042750'>So</span> <span
  m='3043060'>if</span> <span m='3043140'>you're</span> <span
  m='3043280'>using</span> <span m='3043910'>Ascii,</span> <span
  m='3044940'>it's</span> <span m='3045170'>256.</span> <span
  m='3045920'>If</span> <span m='3045990'>you're</span> <span
  m='3046070'>using</span> <span m='3046330'>some</span> <span
  m='3046560'>unique code,</span> <span m='3047060'>it</span> <span
  m='3047120'>might</span> <span m='3047290'>be</span> <span
  m='3047400'>larger.</span> <span m='3048860'>But</span> <span
  m='3048910'>whatever</span> <span m='3050010'>the</span> <span
  m='3050080'>size</span> <span m='3050330'>of</span> <span
  m='3050400'>your</span> <span m='3050550'>characters</span> <span
  m='3051060'>in</span> <span m='3051170'>your</span> <span
  m='3051310'>string,</span> <span m='3052750'>then</span> <span
  m='3052790'>when</span> <span m='3052940'>I</span> <span
  m='3053050'>add</span> <span m='3053390'>a</span> <span
  m='3053440'>character,</span> <span m='3054820'>this</span> <span
  m='3054910'>is</span> <span m='3055070'>like</span> <span
  m='3055320'>taking</span> <span m='3055720'>my</span> <span
  m='3055860'>number,</span> <span m='3056950'>shifting</span> <span
  m='3057450'>it</span> <span m='3057540'>over</span> <span
  m='3057860'>by</span> <span m='3058030'>one,</span> <span
  m='3058770'>and</span> <span m='3058920'>then</span> <span
  m='3059060'>adding</span> <span m='3059410'>a</span> <span
  m='3059430'>new</span> <span m='3059590'>value.</span> </p><p><span
  m='3060660'>So</span> <span m='3060800'>how</span> <span m='3060920'>do</span>
  <span m='3061000'>I</span> <span m='3061070'>shift</span> <span
  m='3061360'>over</span> <span m='3061590'>by</span> <span
  m='3061730'>one?</span> <span m='3062390'>I</span> <span
  m='3062490'>multiply</span> <span m='3063070'>by</span> <span
  m='3063310'>a.</span> <span m='3064630'>So</span> <span m='3064750'>if</span>
  <span m='3064840'>I</span> <span m='3064910'>have</span> <span
  m='3065100'>some</span> <span m='3065250'>value,</span> <span
  m='3066320'>some</span> <span m='3066450'>current</span> <span
  m='3067470'>hash</span> <span m='3067780'>value</span> <span
  m='3068710'>u,</span> <span m='3070330'>it</span> <span
  m='3070490'>changes</span> <span m='3070970'>to</span> <span
  m='3071260'>u</span> <span m='3071700'>times</span> <span
  m='3072270'>a--</span> <span m='3073150'>or</span> <span
  m='3073270'>sorry,</span> <span m='3073440'>this</span> <span
  m='3073660'>is</span> <span m='3073800'>the</span> <span
  m='3075850'>number</span> <span m='3076460'>represented</span> <span
  m='3076980'>by</span> <span m='3077110'>the</span> <span
  m='3077220'>string.</span> <span m='3077890'>I</span> <span
  m='3077990'>multiply</span> <span m='3078480'>by</span> <span
  m='3078670'>a</span> <span m='3079070'>and then</span> <span
  m='3079190'>I</span> <span m='3079280'>add</span> <span m='3079550'>on</span>
  <span m='3079710'>the</span> <span m='3079800'>character.</span> <span
  m='3080460'>Or,</span> <span m='3080720'>in</span> <span
  m='3080840'>Python</span> <span m='3081300'>you'd</span> <span
  m='3081460'>write</span> <span m='3082150'>ord</span> <span
  m='3082510'>of</span> <span m='3082620'>the</span> <span
  m='3082730'>character.</span> <span m='3083620'>That's</span> <span
  m='3083860'>the</span> <span m='3084330'>number</span> <span
  m='3084680'>associated</span> <span m='3085130'>with</span> <span
  m='3085230'>that</span> <span m='3085400'>character.</span> <span
  m='3087860'>That</span> <span m='3088420'>gives me</span> <span
  m='3088640'>the new string.</span> <span m='3089160'>Very</span> <span
  m='3089400'>easy.</span> <span m='3089770'>If</span> <span
  m='3089810'>I</span> <span m='3089880'>want</span> <span m='3090090'>to</span>
  <span m='3090170'>do</span> <span m='3090650'>is</span> <span
  m='3090800'>skip,</span> <span m='3091700'>it's</span> <span
  m='3092140'>slightly</span> <span m='3092480'>more</span> <span
  m='3092690'>annoying.</span> <span m='3093720'>But</span> <span
  m='3094150'>skip</span> <span m='3094530'>means</span> <span
  m='3095020'>just</span> <span m='3095590'>annihilate</span> <span
  m='3096020'>this</span> <span m='3096190'>value.</span> <span
  m='3097290'>And</span> <span m='3097460'>so</span> <span
  m='3097710'>it's</span> <span m='3097860'>like</span> <span
  m='3098780'>u</span> <span m='3099070'>goes</span> <span m='3099370'>to</span>
  <span m='3099500'>u</span> <span m='3099840'>minus</span> <span
  m='3102940'>the</span> <span m='3103050'>character</span> <span
  m='3104360'>times</span> <span m='3105130'>a</span> <span
  m='3105310'>to</span> <span m='3105370'>the</span> <span
  m='3105500'>power</span> <span m='3106080'>size</span> <span
  m='3106500'>of</span> <span m='3106630'>u</span> <span
  m='3106810'>minus</span> <span m='3107220'>1.</span> <span
  m='3108980'>I</span> <span m='3109070'>have</span> <span m='3109190'>to</span>
  <span m='3109280'>shift</span> <span m='3110260'>this</span> <span
  m='3110410'>character</span> <span m='3110810'>over</span> <span
  m='3111100'>to</span> <span m='3111210'>that</span> <span
  m='3111390'>position</span> <span m='3112160'>and</span> <span
  m='3112210'>then</span> <span m='3112310'>annihilated</span> <span
  m='3112800'>it</span> <span m='3112880'>with</span> <span m='3113050'>a</span>
  <span m='3113240'>minus</span> <span m='3113600'>sign.</span> <span
  m='3113830'>You could also</span> <span m='3114280'>do</span> <span
  m='3114540'>x or.</span> </p><p><span m='3116340'>And</span> <span
  m='3116520'>when</span> <span m='3116720'>I</span> <span m='3116800'>do</span>
  <span m='3117060'>this,</span> <span m='3117910'>I</span> <span
  m='3118190'>just</span> <span m='3118330'>think</span> <span
  m='3118500'>about</span> <span m='3118690'>how</span> <span
  m='3118820'>the</span> <span m='3118890'>hash</span> <span
  m='3119160'>function</span> <span m='3119470'>is</span> <span
  m='3119560'>changing.</span> <span m='3120250'>Everything</span> <span
  m='3120720'>is</span> <span m='3120800'>just</span> <span
  m='3120970'>modulo</span> <span m='3121540'>m.</span> <span
  m='3122540'>So</span> <span m='3122680'>if</span> <span m='3122790'>I</span>
  <span m='3122900'>have</span> <span m='3123090'>some</span> <span
  m='3123280'>hash</span> <span m='3123580'>value</span> <span
  m='3123920'>here,</span> <span m='3124200'>r,</span> <span
  m='3125370'>I</span> <span m='3125980'>take</span> <span m='3126310'>r</span>
  <span m='3126690'>times</span> <span m='3127160'>a</span> <span
  m='3128390'>plus</span> <span m='3128940'>ord</span> <span
  m='3129180'>of</span> <span m='3129270'>c</span> <span m='3129640'>and
  I</span> <span m='3129770'>just</span> <span m='3130000'>do</span> <span
  m='3130130'>that</span> <span m='3130340'>computation</span> <span
  m='3130990'>modulo</span> <span m='3131460'>m,</span> <span
  m='3132950'>and</span> <span m='3133100'>I'll</span> <span
  m='3133210'>get</span> <span m='3133360'>the</span> <span
  m='3133450'>new</span> <span m='3134240'>hash</span> <span
  m='3134590'>value.</span> <span m='3135140'>Do</span> <span
  m='3135230'>the</span> <span m='3135320'>same</span> <span
  m='3135600'>thing</span> <span m='3135780'>down</span> <span
  m='3136010'>here,</span> <span m='3136890'>I'll</span> <span
  m='3136930'>get</span> <span m='3137070'>the</span> <span
  m='3137170'>new</span> <span m='3137260'>hash</span> <span
  m='3137580'>value.</span> <span m='3138630'>So</span> <span
  m='3138840'>what</span> <span m='3139020'>r</span> <span
  m='3139290'>stores</span> <span m='3140470'>is</span> <span
  m='3140930'>the</span> <span m='3141100'>current</span> <span
  m='3141460'>hash</span> <span m='3141760'>value.</span> <span
  m='3142730'>And</span> <span m='3142790'>it</span> <span
  m='3142880'>stores</span> <span m='3143410'>a</span> <span
  m='3143570'>to</span> <span m='3143650'>the</span> <span
  m='3143780'>power</span> <span m='3144530'>length</span> <span
  m='3144850'>of</span> <span m='3144970'>u</span> <span m='3147260'>or</span>
  <span m='3147550'>length</span> <span m='3147810'>of</span> <span
  m='3147940'>x,</span> <span m='3148890'>whatever you</span> <span
  m='3148990'>want</span> <span m='3149140'>to</span> <span
  m='3149210'>call</span> <span m='3149460'>it.</span> <span m='3150200'>I guess
  that would be</span> <span m='3150570'>a</span> <span
  m='3150600'>little</span> <span m='3150810'>better.</span> <span
  m='3153650'>And</span> <span m='3153800'>then</span> <span
  m='3153920'>it</span> <span m='3154000'>can</span> <span m='3154180'>do</span>
  <span m='3154340'>these</span> <span m='3154620'>in</span> <span
  m='3154760'>constant</span> <span m='3155170'>a</span> <span
  m='3155210'>number</span> <span m='3155480'>of</span> <span
  m='3155560'>operations.</span> <span m='3156280'>Just</span> <span
  m='3156490'>compute</span> <span m='3156920'>everything</span> <span
  m='3157300'>modulo</span> <span m='3157700'>m,</span> <span
  m='3157955'>one</span> <span m='3158210'>multiplication,</span> <span
  m='3158870'>one</span> <span m='3159030'>addition.</span> <span
  m='3160130'>You</span> <span m='3160280'>can</span> <span
  m='3160420'>do</span> <span m='3160600'>append</span> <span
  m='3160940'>and</span> <span m='3161070'>skip,</span> <span
  m='3161420'>and</span> <span m='3161610'>then</span> <span
  m='3161690'>you</span> <span m='3161790'>have</span> <span
  m='3162030'>the</span> <span m='3162090'>hash</span> <span
  m='3162370'>value</span> <span m='3163010'>instantly.</span> <span
  m='3163560'>It's</span> <span m='3163890'>just</span> <span
  m='3164060'>stored.</span> <span m='3164820'>And</span> <span
  m='3164950'>then</span> <span m='3165040'>you</span> <span
  m='3165130'>can</span> <span m='3165310'>make</span> <span
  m='3165500'>all</span> <span m='3165630'>this</span> <span
  m='3165780'>work.</span> </p>
uid: a601e0b64a32c32e4af0f5950e031d10
type: courses
layout: video
---
