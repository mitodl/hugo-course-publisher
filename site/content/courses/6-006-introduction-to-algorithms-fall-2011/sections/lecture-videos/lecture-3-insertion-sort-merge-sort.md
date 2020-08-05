---
about_this_resource_text: >-
  <p><strong>Description:</strong> Sorting is introduced, and motivated by
  problems that become easier once the inputs are sorted.  The lecture covers
  insertion sort, then discusses merge sort and analyzes its running time using
  a recursion tree.</p> <p><strong>Instructor:</strong> Srini Devadas</p>
embedded_media:
  - id: Video-YouTube-Stream
    media_location: Kg4bqzAqRBM
    parent_uid: 24c75ab567c707163ea44a39a97374c8
    title: Video-YouTube-Stream
    type: Video
    uid: 100565ac8671005beaac8278b3e667df
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/Kg4bqzAqRBM/default.jpg'
    parent_uid: 24c75ab567c707163ea44a39a97374c8
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 8b3978d94134c44526bcb913c30b8c26
  - id: Video-iTunesU-MP4
    media_location: >-
      https://itunes.apple.com/us/itunes-u/lecture-3-insertion-sort-merge/id585700718?i=164305059
    parent_uid: 24c75ab567c707163ea44a39a97374c8
    title: Video-iTunes U-MP4
    type: Video
    uid: 19f1573e3c55dc14dfb67f63d5a31840
  - id: Video-InternetArchive-MP4
    media_location: 'http://www.archive.org/download/MIT6.006F11/MIT6_006F11_lec03_300k.mp4'
    parent_uid: 24c75ab567c707163ea44a39a97374c8
    title: Video-Internet Archive-MP4
    type: Video
    uid: dae7d9a81e10f78d9be8e10e81ce3e70
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: Kg4bqzAqRBM
    parent_uid: 24c75ab567c707163ea44a39a97374c8
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 63b97518b8f22f5ed3d4ff7d719d1e55
  - id: Kg4bqzAqRBM.srt
    parent_uid: 24c75ab567c707163ea44a39a97374c8
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/lecture-videos/lecture-3-insertion-sort-merge-sort/Kg4bqzAqRBM.srt
    title: 3play caption file
    type: null
    uid: 6388f0c3161c54e65985cd0d0338d799
  - id: Kg4bqzAqRBM.pdf
    parent_uid: 24c75ab567c707163ea44a39a97374c8
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/lecture-videos/lecture-3-insertion-sort-merge-sort/Kg4bqzAqRBM.pdf
    title: 3play pdf file
    type: null
    uid: ed5e6829a166846e83e8ee1aa7d68dc7
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 24c75ab567c707163ea44a39a97374c8
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: c66eddcf8400c29b5d82f0d8beb1bcc8
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 24c75ab567c707163ea44a39a97374c8
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: f7efb953854a91a7c1cf448318b3ef44
inline_embed_id: '85494837lecture3:insertionsort,mergesort2449037'
order_index: 76
parent_uid: 6af424cb24d70b69cb7c86df8a25a92a
related_resources_text: ''
short_url: lecture-3-insertion-sort-merge-sort
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/lecture-videos/lecture-3-insertion-sort-merge-sort
title: 'Lecture 3: Insertion Sort, Merge Sort'
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
  m='23290'>PROFESSOR: So</span> <span m='23890'>today's</span> <span
  m='24180'>lecture</span> <span m='24980'>is</span> <span m='25290'>on</span>
  <span m='25540'>sorting.</span> <span m='27010'>We'll</span> <span
  m='27200'>be</span> <span m='27320'>talking</span> <span
  m='27620'>about</span> <span m='27860'>specific</span> <span
  m='28770'>sorting</span> <span m='29210'>algorithms</span> <span
  m='29660'>today.</span> <span m='31310'>I</span> <span m='31400'>want</span>
  <span m='31560'>to</span> <span m='31630'>start</span> <span
  m='32350'>by</span> <span m='33070'>motivating</span> <span
  m='33690'>why</span> <span m='34570'>we're interested</span> <span
  m='34840'>in</span> <span m='35110'>sorting,</span> <span
  m='35780'>which</span> <span m='35900'>should</span> <span m='36060'>be</span>
  <span m='36190'>fairly</span> <span m='36790'>easy.</span> <span
  m='39690'>Then</span> <span m='40390'>I</span> <span m='40520'>want</span>
  <span m='40750'>to</span> <span m='40970'>discuss</span> <span
  m='41560'>a</span> <span m='41680'>particular</span> <span
  m='42160'>sorting</span> <span m='42490'>algorithm</span> <span
  m='43550'>that's</span> <span m='43760'>called</span> <span
  m='43940'>insertion</span> <span m='44500'>sort.</span> <span
  m='45470'>That's</span> <span m='46070'>probably</span> <span
  m='46520'>the</span> <span m='46640'>simplest</span> <span
  m='47070'>sorting</span> <span m='47410'>algorithm</span> <span
  m='47860'>you</span> <span m='48010'>can</span> <span m='48290'>write,</span>
  <span m='48970'>it's</span> <span m='49820'>five</span> <span
  m='50240'>lines</span> <span m='50580'>of</span> <span m='50670'>code.</span>
  <span m='52050'>It's</span> <span m='52120'>not</span> <span
  m='52300'>the</span> <span m='52380'>best</span> <span
  m='52680'>sorting</span> <span m='53000'>algorithm</span> <span
  m='53400'>that's</span> <span m='53610'>out</span> <span
  m='53820'>there</span> <span m='54510'>and</span> <span m='54610'>so</span>
  <span m='54720'>we'll</span> <span m='54860'>try</span> <span
  m='55070'>and</span> <span m='55170'>improve</span> <span m='55580'>it.</span>
  <span m='57430'>We'll</span> <span m='57590'>also</span> <span
  m='57820'>talk</span> <span m='58080'>about</span> <span
  m='59040'>merge</span> <span m='59410'>sort,</span> <span
  m='59790'>which</span> <span m='59950'>is</span> <span m='60050'>a</span>
  <span m='60150'>divide</span> <span m='60470'>and</span> <span
  m='60590'>conquer</span> <span m='61640'>algorithm</span> <span
  m='62760'>and</span> <span m='62940'>that's</span> <span
  m='63120'>going</span> <span m='63250'>to</span> <span
  m='63290'>motivate</span> <span m='65910'>the</span> <span
  m='66170'>last</span> <span m='66520'>thing</span> <span m='66680'>that</span>
  <span m='66810'>I</span> <span m='67500'>want</span> <span m='67690'>to</span>
  <span m='67830'>spend</span> <span m='68170'>time</span> <span
  m='68450'>on,</span> <span m='69010'>which</span> <span m='69230'>is</span>
  <span m='69600'>recurrences</span> <span m='69950'>and</span> <span
  m='70310'>how</span> <span m='70470'>you</span> <span m='70590'>solve</span>
  <span m='70970'>recurrences.</span> <span m='72300'>Typically</span> <span
  m='72740'>the</span> <span m='73050'>recurrences</span> <span
  m='73640'>that</span> <span m='74040'>we'll</span> <span m='74230'>be</span>
  <span m='74420'>looking</span> <span m='74730'>at</span> <span m='74890'>in
  double o</span> <span m='75080'>six</span> <span m='76160'>are</span> <span
  m='76300'>going</span> <span m='76450'>to</span> <span m='76520'>come</span>
  <span m='76800'>from</span> <span m='77790'>divide</span> <span
  m='78120'>and</span> <span m='78230'>conquer</span> <span
  m='78990'>problems</span> <span m='79800'>like</span> <span
  m='80080'>merge</span> <span m='80280'>sort</span> <span m='80760'>but</span>
  <span m='81010'>you'll</span> <span m='81170'>see</span> <span
  m='81360'>this</span> <span m='81850'>over</span> <span m='82050'>and</span>
  <span m='82180'>over.</span> </p><p><span m='84300'>So</span> <span
  m='84930'>let's</span> <span m='85130'>talk</span> <span
  m='85310'>about</span> <span m='85530'>why</span> <span m='86020'>we're</span>
  <span m='86170'>interested in</span> <span m='86710'>sorting.</span> <span
  m='90110'>There's</span> <span m='90270'>some</span> <span
  m='90420'>fairly</span> <span m='90890'>obvious</span> <span
  m='91300'>applications</span> <span m='94370'>like</span> <span
  m='95610'>if</span> <span m='95730'>you</span> <span m='95840'>want</span>
  <span m='95970'>to</span> <span m='96020'>maintain</span> <span
  m='96420'>a</span> <span m='96470'>phone</span> <span m='96860'>book,</span>
  <span m='97490'>you've</span> <span m='97590'>got</span> <span
  m='97700'>a</span> <span m='97740'>bunch</span> <span m='98030'>of</span>
  <span m='100440'>names</span> <span m='100890'>and</span> <span
  m='100980'>numbers</span> <span m='101500'>corresponding</span> <span
  m='102010'>to</span> <span m='102230'>a</span> <span
  m='102400'>telephone</span> <span m='102890'>directory</span> <span
  m='104530'>and</span> <span m='104620'>you</span> <span m='104740'>want</span>
  <span m='104850'>to</span> <span m='104900'>keep</span> <span
  m='105080'>them</span> <span m='105200'>in</span> <span
  m='105270'>sorted</span> <span m='105630'>order</span> <span
  m='105980'>so</span> <span m='106130'>it's</span> <span m='106330'>easy</span>
  <span m='106630'>to</span> <span m='106730'>search,</span> <span
  m='107750'>mp3</span> <span m='108320'>organizers,</span> <span
  m='109000'>spreadsheets,</span> <span m='110200'>et cetera.</span> <span
  m='111510'>So</span> <span m='111660'>there's</span> <span
  m='111810'>lots</span> <span m='112030'>of</span> <span
  m='112120'>obvious</span> <span m='112460'>applications.</span> <span
  m='114590'>There's</span> <span m='114770'>also</span> <span
  m='117350'>some</span> <span m='117960'>interesting</span> <span
  m='118470'>problems</span> <span m='119630'>that</span> <span
  m='119840'>become</span> <span m='120190'>easy</span> <span
  m='124740'>once</span> <span m='125130'>items</span> <span
  m='125540'>are</span> <span m='125620'>sorted.</span> <span
  m='133790'>One</span> <span m='134040'>example</span> <span
  m='134430'>of</span> <span m='134600'>that</span> <span m='136970'>is</span>
  <span m='137420'>finding</span> <span m='137840'>a</span> <span
  m='137880'>median.</span> </p><p><span m='143860'>So</span> <span
  m='144040'>let's</span> <span m='144230'>say</span> <span
  m='144380'>that</span> <span m='144570'>you</span> <span
  m='144680'>have</span> <span m='145450'>a</span> <span m='145540'>bunch</span>
  <span m='145760'>of</span> <span m='145880'>items</span> <span
  m='147220'>in</span> <span m='147500'>an</span> <span m='147610'>array</span>
  <span m='150510'>a</span> <span m='151200'>zero</span> <span
  m='151540'>through</span> <span m='151913'>n</span> <span
  m='153230'>and</span> <span m='155360'>a</span> <span m='155620'>zero</span>
  <span m='155810'>through</span> <span m='155960'>n</span> <span
  m='156210'>contains</span> <span m='156670'>n</span> <span
  m='156980'>numbers</span> <span m='157750'>and</span> <span
  m='157920'>they're</span> <span m='158020'>not</span> <span
  m='158280'>sorted.</span> <span m='164850'>When</span> <span
  m='165070'>you</span> <span m='165310'>sort,</span> <span
  m='166170'>you</span> <span m='166590'>turn</span> <span
  m='167180'>this</span> <span m='167955'>into</span> <span m='168300'>b</span>
  <span m='168610'>0</span> <span m='168950'>through</span> <span
  m='169220'>n,</span> <span m='170720'>where</span> <span m='171150'>if</span>
  <span m='171300'>it's</span> <span m='171420'>just</span> <span
  m='171620'>numbers,</span> <span m='172320'>then</span> <span
  m='172760'>you</span> <span m='172860'>may</span> <span m='173030'>sort</span>
  <span m='173340'>them</span> <span m='173540'>in</span> <span
  m='173660'>increasing</span> <span m='174140'>order</span> <span
  m='174510'>or</span> <span m='174560'>decreasing</span> <span
  m='175070'>order.</span> <span m='175660'>Let's</span> <span
  m='175810'>just</span> <span m='176010'>call</span> <span m='176150'>it</span>
  <span m='176250'>increasing</span> <span m='176670'>order</span> <span
  m='177650'>for</span> <span m='177780'>now.</span> <span m='178690'>Or</span>
  <span m='179230'>if</span> <span m='179330'>they're</span> <span
  m='179510'>records,</span> <span m='180320'>and</span> <span
  m='180490'>they're</span> <span m='180580'>not</span> <span
  m='180810'>numbers,</span> <span m='181650'>then</span> <span
  m='181850'>you</span> <span m='181940'>have</span> <span m='182140'>to</span>
  <span m='182250'>provide</span> <span m='182470'>a</span> <span
  m='182590'>comparison</span> <span m='183260'>function</span> <span
  m='184520'>to</span> <span m='184750'>determine</span> <span
  m='185380'>which</span> <span m='185610'>record</span> <span
  m='186010'>is</span> <span m='186110'>smaller</span> <span
  m='186490'>than</span> <span m='186830'>another</span> <span
  m='187180'>record.</span> <span m='188050'>And</span> <span
  m='188420'>that's</span> <span m='188660'>another</span> <span
  m='188990'>input</span> <span m='189320'>that</span> <span
  m='189430'>you</span> <span m='189520'>have</span> <span m='189660'>to</span>
  <span m='189740'>have</span> <span m='190630'>in</span> <span
  m='190800'>order</span> <span m='191000'>to</span> <span m='191200'>do</span>
  <span m='191350'>the</span> <span m='191480'>sorting.</span> </p><p><span
  m='192980'>So</span> <span m='193170'>it</span> <span
  m='193250'>doesn't</span> <span m='193450'>really</span> <span
  m='193610'>matter</span> <span m='194240'>what</span> <span
  m='194450'>the</span> <span m='194550'>items</span> <span
  m='194930'>are</span> <span m='195310'>as</span> <span m='195490'>long</span>
  <span m='195690'>as</span> <span m='195770'>you</span> <span
  m='195860'>have</span> <span m='196030'>the</span> <span
  m='196110'>comparison</span> <span m='196590'>function.</span> <span
  m='197580'>Think</span> <span m='197630'>of</span> <span m='197710'>it</span>
  <span m='197830'>as</span> <span m='198250'>less</span> <span
  m='198600'>than</span> <span m='198800'>or</span> <span
  m='198910'>equal</span> <span m='199220'>to.</span> <span
  m='199930'>And</span> <span m='200190'>if</span> <span m='200260'>you</span>
  <span m='200340'>have</span> <span m='200600'>that</span> <span
  m='201650'>and</span> <span m='201800'>it's</span> <span
  m='202020'>straightforward,</span> <span m='203750'>obviously,</span> <span
  m='204060'>to</span> <span m='204150'>check</span> <span
  m='204380'>that</span> <span m='204490'>3</span> <span m='204710'>is</span>
  <span m='204840'>less</span> <span m='205010'>than</span> <span
  m='205140'>4,</span> <span m='206170'>et</span> <span
  m='206290'>cetera.</span> <span m='207090'>But it</span> <span m='207510'>may
  be</span> <span m='207730'>a</span> <span m='207790'>little</span> <span
  m='207900'>more</span> <span m='208080'>complicated</span> <span
  m='209640'>for</span> <span m='210460'>more</span> <span
  m='210680'>sophisticated</span> <span m='211510'>sorting</span> <span
  m='211890'>applications.</span> </p><p><span m='212990'>But</span> <span
  m='213100'>the</span> <span m='213160'>bottom</span> <span
  m='213420'>line</span> <span m='213670'>is</span> <span m='213840'>that</span>
  <span m='214700'>if</span> <span m='214850'>you</span> <span
  m='214940'>have</span> <span m='215140'>your</span> <span
  m='215300'>algorithm</span> <span m='216330'>that</span> <span
  m='216570'>takes</span> <span m='216860'>a</span> <span
  m='216930'>comparison</span> <span m='217480'>function</span> <span
  m='217990'>as</span> <span m='218110'>an</span> <span m='218220'>input,</span>
  <span m='219120'>you're</span> <span m='219260'>going</span> <span
  m='219380'>to</span> <span m='219420'>be</span> <span m='219540'>able</span>
  <span m='219710'>to,</span> <span m='220960'>after</span> <span
  m='221190'>a</span> <span m='221240'>certain</span> <span
  m='221480'>amount</span> <span m='221680'>of</span> <span
  m='221790'>time,</span> <span m='222670'>get</span> <span m='223200'>B</span>
  <span m='223510'>0</span> <span m='223860'>n.</span> <span
  m='225100'>Now</span> <span m='225350'>if</span> <span m='225420'>you</span>
  <span m='225520'>wanted</span> <span m='225720'>to</span> <span
  m='225780'>find</span> <span m='226150'>the</span> <span
  m='226210'>median</span> <span m='227450'>of</span> <span
  m='227780'>the</span> <span m='227920'>set</span> <span m='228140'>of</span>
  <span m='228230'>numbers</span> <span m='228680'>that</span> <span
  m='228850'>were</span> <span m='229200'>originally</span> <span
  m='229480'>in</span> <span m='229760'>the array</span> <span
  m='230270'>A,</span> <span m='231720'>what</span> <span
  m='231870'>would</span> <span m='232000'>you</span> <span m='232100'>do</span>
  <span m='232490'>once</span> <span m='232770'>you</span> <span
  m='232890'>have</span> <span m='233100'>the sorted</span> <span
  m='233290'>array</span> <span m='233780'>B?</span> </p><p><span
  m='236090'>AUDIENCE: Isn't there</span> <span m='236550'>a more
  efficient</span> <span m='237010'>algorithm</span> <span m='237240'>for</span>
  <span m='237470'>median?</span> </p><p><span m='239310'>PROFESSOR:
  Absolutely.</span> <span m='240040'>But</span> <span m='243680'>this</span>
  <span m='243920'>is</span> <span m='244040'>sort</span> <span
  m='244170'>of</span> <span m='244260'>a</span> <span m='244320'>side</span>
  <span m='244670'>effect</span> <span m='245120'>of</span> <span
  m='245230'>having</span> <span m='245540'>a</span> <span
  m='245610'>sorted</span> <span m='246000'>list.</span> <span
  m='248120'>If</span> <span m='248390'>you</span> <span
  m='248490'>happen</span> <span m='248810'>to</span> <span
  m='248870'>have</span> <span m='249110'>a</span> <span
  m='249170'>sorted</span> <span m='249490'>list,</span> <span
  m='250240'>there's</span> <span m='250640'>many</span> <span
  m='250910'>ways</span> <span m='251360'>that</span> <span
  m='252690'>you</span> <span m='252890'>could</span> <span
  m='254200'>imagine</span> <span m='255090'>building</span> <span
  m='255450'>up</span> <span m='255590'>a</span> <span m='255660'>sorted</span>
  <span m='255990'>list.</span> <span m='256310'>One</span> <span
  m='256610'>way</span> <span m='257140'>is</span> <span m='257920'>you</span>
  <span m='258050'>have</span> <span m='258220'>something</span> <span
  m='258519'>that's</span> <span m='258690'>completely</span> <span
  m='259130'>unsorted</span> <span m='259779'>and</span> <span
  m='259899'>you</span> <span m='260019'>run</span> <span
  m='260220'>insertion</span> <span m='260709'>sort</span> <span
  m='261070'>or</span> <span m='261160'>merge</span> <span
  m='261440'>sort.</span> <span m='262620'>Another</span> <span
  m='262890'>way</span> <span m='263060'>would</span> <span m='263210'>be</span>
  <span m='263370'>to</span> <span m='263450'>maintain</span> <span
  m='264000'>a</span> <span m='264060'>sorted</span> <span
  m='264410'>list</span> <span m='264730'>as</span> <span
  m='264990'>you're</span> <span m='265140'>getting</span> <span
  m='265390'>items</span> <span m='265930'>put</span> <span
  m='266100'>into</span> <span m='266310'>the</span> <span
  m='266420'>list.</span> </p><p><span m='267660'>So if</span> <span
  m='268120'>you</span> <span m='268140'>happened</span> <span
  m='268440'>to</span> <span m='268500'>have</span> <span m='268780'>a</span>
  <span m='268840'>sorted</span> <span m='269180'>list</span> <span
  m='269640'>and</span> <span m='269810'>you</span> <span m='269970'>need</span>
  <span m='270250'>to</span> <span m='270320'>have</span> <span
  m='270530'>this</span> <span m='270710'>sorted</span> <span
  m='270910'>list</span> <span m='271130'>for</span> <span
  m='271260'>some</span> <span m='271450'>reason,</span> <span
  m='272600'>the</span> <span m='272670'>point</span> <span
  m='273670'>I'm</span> <span m='273860'>making</span> <span
  m='274110'>here</span> <span m='274320'>is</span> <span m='274410'>that</span>
  <span m='274570'>finding</span> <span m='274860'>the</span> <span
  m='274940'>median</span> <span m='275440'>is</span> <span
  m='275640'>easy.</span> <span m='277140'>And</span> <span
  m='277230'>it's</span> <span m='277360'>easy</span> <span
  m='277700'>because</span> <span m='278090'>all</span> <span
  m='278270'>you</span> <span m='278370'>have</span> <span m='278530'>to</span>
  <span m='278640'>do</span> <span m='279430'>is</span> <span
  m='281110'>look</span> <span m='281400'>at--</span> <span
  m='281820'>depending</span> <span m='282130'>on</span> <span
  m='282230'>whether</span> <span m='283190'>n</span> <span m='283450'>is</span>
  <span m='283580'>odd or</span> <span m='284030'>even--</span> <span
  m='284830'>look</span> <span m='285070'>at</span> <span m='285250'>B</span>
  <span m='285535'>of</span> <span m='285820'>n</span> <span
  m='285990'>over</span> <span m='286230'>2.</span> <span m='287590'>That</span>
  <span m='288040'>would</span> <span m='288170'>give</span> <span
  m='288300'>you</span> <span m='288400'>the</span> <span
  m='288530'>median</span> <span m='288950'>because</span> <span
  m='289210'>you'd</span> <span m='289360'>have</span> <span m='289900'>a</span>
  <span m='289980'>bunch</span> <span m='290210'>of</span> <span
  m='290270'>numbers</span> <span m='291150'>that</span> <span
  m='292190'>are</span> <span m='292300'>less</span> <span
  m='292580'>than</span> <span m='292750'>that</span> <span
  m='294210'>and</span> <span m='294630'>the</span> <span
  m='294840'>equal</span> <span m='295200'>set</span> <span m='295390'>of</span>
  <span m='295470'>numbers</span> <span m='295850'>that</span> <span
  m='295970'>are</span> <span m='296090'>greater than</span> <span
  m='296430'>that,</span> <span m='296830'>which</span> <span
  m='297020'>is</span> <span m='297140'>the</span> <span
  m='297220'>definition</span> <span m='297700'>of</span> <span
  m='297790'>median.</span> </p><p><span m='299770'>So</span> <span
  m='300800'>this</span> <span m='301010'>is</span> <span m='302720'>not</span>
  <span m='302910'>necessarily</span> <span m='303430'>the</span> <span
  m='303520'>best</span> <span m='303810'>way,</span> <span m='304050'>as</span>
  <span m='304340'>you</span> <span m='304500'>pointed</span> <span
  m='304840'>out,</span> <span m='305030'>of</span> <span
  m='305130'>finding</span> <span m='305450'>the</span> <span
  m='305530'>median.</span> <span m='306400'>But</span> <span
  m='307290'>it's</span> <span m='307720'>constant</span> <span
  m='308370'>time</span> <span m='309230'>if</span> <span m='309420'>you</span>
  <span m='309550'>have</span> <span m='309790'>a</span> <span
  m='309840'>sorted</span> <span m='310160'>list.</span> <span
  m='311320'>That's</span> <span m='311580'>the</span> <span
  m='311670'>point</span> <span m='312710'>I</span> <span
  m='312760'>wanted</span> <span m='312920'>to</span> <span
  m='313020'>make.</span> </p><p><span m='314650'>There</span> <span
  m='314820'>are other</span> <span m='315040'>things</span> <span
  m='315230'>that</span> <span m='315350'>you</span> <span
  m='315460'>could</span> <span m='315590'>do.</span> <span
  m='316720'>And</span> <span m='316910'>this</span> <span
  m='317080'>came</span> <span m='317290'>up</span> <span m='318750'>in</span>
  <span m='319160'>Erik's</span> <span m='319480'>lecture,</span> <span
  m='320780'>which</span> <span m='321060'>is</span> <span m='321260'>the</span>
  <span m='321340'>notion</span> <span m='321660'>of</span> <span
  m='321750'>binary</span> <span m='322270'>search--</span> <span
  m='324700'>finding</span> <span m='325570'>an</span> <span
  m='325910'>element</span> <span m='326460'>in an</span> <span
  m='326930'>array-- a</span> <span m='327350'>specific</span> <span
  m='327900'>element.</span> <span m='328650'>You have</span> <span
  m='328760'>a</span> <span m='329540'>list</span> <span m='329990'>of</span>
  <span m='331330'>items--</span> <span m='331820'>again</span> <span
  m='332180'>a</span> <span m='332400'>0</span> <span m='332710'>through</span>
  <span m='333020'>n.</span> <span m='334090'>And</span> <span
  m='334260'>you're</span> <span m='334370'>looking</span> <span
  m='334820'>for</span> <span m='337370'>a</span> <span
  m='337440'>specific</span> <span m='337970'>number</span> <span m='339210'>or
  item.</span> </p><p><span m='343550'>You</span> <span m='343750'>could,</span>
  <span m='343880'>obviously,</span> <span m='344240'>scan</span> <span
  m='345910'>the array,</span> <span m='346640'>and</span> <span
  m='346730'>that</span> <span m='346840'>would</span> <span
  m='346970'>take</span> <span m='347160'>you</span> <span
  m='347270'>linear</span> <span m='347640'>time</span> <span
  m='348100'>to</span> <span m='348200'>find</span> <span m='348560'>this</span>
  <span m='348720'>item.</span> <span m='350260'>If</span> <span m='350520'>the
  array</span> <span m='350960'>happened</span> <span m='351260'>to</span> <span
  m='351310'>be</span> <span m='351420'>sorted,</span> <span
  m='353100'>then</span> <span m='355740'>you</span> <span m='355890'>can</span>
  <span m='356030'>find</span> <span m='356380'>this</span> <span
  m='356760'>in</span> <span m='357110'>logarithmic</span> <span
  m='357810'>time</span> <span m='358530'>using</span> <span
  m='359060'>what's</span> <span m='359300'>called</span> <span
  m='359560'>binary</span> <span m='359970'>search.</span> <span
  m='363600'>Let's</span> <span m='363650'>say</span> <span
  m='363750'>you're</span> <span m='363850'>looking</span> <span m='364060'>for
  a specific</span> <span m='364680'>item.</span> <span m='365880'>Let's</span>
  <span m='366140'>call</span> <span m='366300'>it</span> <span
  m='366420'>k.</span> <span m='368280'>Binary</span> <span
  m='368650'>search,</span> <span m='369560'>roughly</span> <span
  m='369890'>speaking,</span> <span m='370990'>would</span> <span
  m='371140'>work</span> <span m='371420'>like--</span> <span
  m='372740'>you</span> <span m='372870'>go</span> <span
  m='373060'>compare</span> <span m='374250'>k</span> <span
  m='375600'>to,</span> <span m='376300'>again,</span> <span m='376830'>B</span>
  <span m='377180'>of</span> <span m='377450'>n</span> <span
  m='377680'>over</span> <span m='377980'>2,</span> <span m='380200'>and</span>
  <span m='380750'>decide,</span> <span m='381830'>given</span> <span
  m='382040'>that</span> <span m='382240'>B</span> <span m='382430'>is
  sorted,</span> <span m='383780'>you</span> <span m='384770'>get</span> <span
  m='385020'>to</span> <span m='385840'>look</span> <span m='386110'>at</span>
  <span m='386220'>1/2</span> <span m='386920'>of</span> <span
  m='387050'>the</span> <span m='387250'>array.</span> </p><p><span
  m='388400'>If</span> <span m='388700'>B</span> <span m='388960'>of</span>
  <span m='389070'>n</span> <span m='389200'>over</span> <span
  m='389380'>2</span> <span m='389520'>is</span> <span m='389700'>not</span>
  <span m='389810'>exactly</span> <span m='390340'>k,</span> <span
  m='391270'>then--</span> <span m='392970'>well, if</span> <span
  m='393190'>it's</span> <span m='393290'>exactly</span> <span
  m='393660'>k</span> <span m='393830'>you're</span> <span
  m='393970'>done.</span> <span m='394390'>Otherwise,</span> <span
  m='395410'>you</span> <span m='395540'>look</span> <span m='395680'>at
  the</span> <span m='395750'>left</span> <span m='396060'>half.</span> <span
  m='396770'>You</span> <span m='396910'>do</span> <span m='397020'>your</span>
  <span m='397170'>divide</span> <span m='397510'>and</span> <span
  m='397620'>conquer</span> <span m='398730'>paradigm.</span> <span
  m='399670'>And</span> <span m='400030'>you</span> <span m='400140'>can</span>
  <span m='400240'>do</span> <span m='400350'>this</span> <span
  m='400560'>in</span> <span m='400650'>logarithmic</span> <span
  m='401150'>time.</span> <span m='402820'>So</span> <span
  m='403710'>keep</span> <span m='403880'>this</span> <span m='404040'>in</span>
  <span m='404150'>mind,</span> <span m='404580'>because</span> <span
  m='405070'>binary</span> <span m='405230'>search</span> <span
  m='405700'>is</span> <span m='405800'>going</span> <span m='405920'>to</span>
  <span m='405980'>come</span> <span m='406170'>up</span> <span
  m='407220'>in</span> <span m='407520'>today's</span> <span
  m='407800'>lecture</span> <span m='408530'>and</span> <span
  m='408680'>again</span> <span m='409420'>in</span> <span
  m='409880'>other</span> <span m='410120'>lectures.</span> </p><p><span
  m='410760'>It's</span> <span m='410850'>really</span> <span
  m='411700'>a</span> <span m='411800'>great</span> <span
  m='412080'>paradigm</span> <span m='413350'>of</span> <span
  m='413600'>divide</span> <span m='413750'>and</span> <span
  m='413840'>conquer--</span> <span m='414460'>probably</span> <span
  m='414750'>the</span> <span m='414850'>simplest.</span> <span
  m='416020'>And</span> <span m='416460'>it,</span> <span
  m='416770'>essentially,</span> <span m='417170'>takes</span> <span
  m='417380'>something</span> <span m='417690'>that's</span> <span
  m='417880'>linear--</span> <span m='419910'>a</span> <span
  m='420250'>linear</span> <span m='420600'>search--</span> <span
  m='421040'>and</span> <span m='421190'>turns</span> <span m='421390'>it</span>
  <span m='421510'>into</span> <span m='421680'>logarithmic</span> <span
  m='422230'>search.</span> <span m='423770'>So</span> <span
  m='423930'>those</span> <span m='424130'>are</span> <span m='424230'>a</span>
  <span m='424280'>couple</span> <span m='424600'>of</span> <span
  m='426100'>problems</span> <span m='426540'>that</span> <span
  m='426690'>become</span> <span m='427070'>easy</span> <span
  m='428240'>if</span> <span m='428810'>you</span> <span m='429050'>have</span>
  <span m='429540'>a</span> <span m='429630'>sorted</span> <span
  m='429980'>list.</span> <span m='430950'>And</span> <span
  m='431440'>there's</span> <span m='431680'>some</span> <span
  m='433930'>not</span> <span m='434230'>so</span> <span
  m='434390'>obvious</span> <span m='438830'>applications</span> <span
  m='441270'>of</span> <span m='441410'>sorting--</span> <span
  m='442650'>for</span> <span m='442750'>example,</span> <span
  m='443380'>data</span> <span m='443710'>compression.</span> </p><p><span
  m='445150'>If</span> <span m='445310'>you</span> <span
  m='445420'>wanted</span> <span m='445640'>to</span> <span
  m='445710'>compress</span> <span m='446260'>a</span> <span
  m='446340'>file,</span> <span m='447790'>one</span> <span m='447970'>of</span>
  <span m='448050'>the</span> <span m='448120'>things</span> <span
  m='448330'>that</span> <span m='448450'>you</span> <span
  m='448580'>could</span> <span m='448800'>do</span> <span m='449540'>is</span>
  <span m='449810'>to--</span> <span m='450530'>and</span> <span
  m='450980'>it's</span> <span m='451300'>a</span> <span m='451380'>set</span>
  <span m='451810'>of</span> <span m='451980'>items--</span> <span
  m='453910'>you</span> <span m='453990'>could</span> <span
  m='454240'>sort</span> <span m='454620'>the</span> <span
  m='454720'>items.</span> <span m='455330'>And</span> <span
  m='455600'>that</span> <span m='455740'>automatically</span> <span
  m='456360'>finds</span> <span m='456840'>duplicates.</span> <span
  m='457870'>And</span> <span m='458020'>you</span> <span
  m='458110'>could</span> <span m='458240'>say,</span> <span
  m='459170'>if</span> <span m='459300'>I</span> <span m='459370'>have</span>
  <span m='459530'>100</span> <span m='460860'>items</span> <span
  m='461250'>that</span> <span m='461340'>are</span> <span m='461450'>all</span>
  <span m='461600'>identical,</span> <span m='462940'>I'm</span> <span
  m='463080'>going</span> <span m='463350'>to</span> <span
  m='463520'>compress</span> <span m='463940'>the</span> <span
  m='464030'>file</span> <span m='464490'>by</span> <span
  m='465200'>representing</span> <span m='466780'>the</span> <span
  m='466930'>item</span> <span m='467240'>once</span> <span
  m='467880'>and,</span> <span m='468040'>then,</span> <span
  m='468160'>having</span> <span m='468440'>a</span> <span
  m='468480'>number</span> <span m='468870'>associated</span> <span
  m='469320'>with</span> <span m='469420'>the</span> <span
  m='469490'>frequency</span> <span m='470030'>of</span> <span
  m='470120'>that</span> <span m='470260'>item--</span> <span
  m='471910'>similar</span> <span m='472290'>to</span> <span
  m='472390'>what</span> <span m='472770'>document</span> <span
  m='473160'>distance</span> <span m='473640'>does.</span> </p><p><span
  m='474440'>Document</span> <span m='474860'>distance</span> <span
  m='476620'>can</span> <span m='476820'>be</span> <span
  m='476910'>viewed</span> <span m='477200'>as</span> <span m='477330'>a</span>
  <span m='477530'>way</span> <span m='477750'>of</span> <span
  m='477850'>compressing</span> <span m='478500'>your</span> <span
  m='478800'>initial</span> <span m='479110'>input.</span> <span
  m='479770'>Obviously,</span> <span m='480120'>you</span> <span
  m='480240'>lose</span> <span m='480550'>the</span> <span
  m='481650'>works</span> <span m='481870'>of</span> <span
  m='481950'>Shakespeare</span> <span m='482240'>or</span> <span
  m='482530'>whatever</span> <span m='482690'>it</span> <span
  m='482910'>was.</span> <span m='483240'>And</span> <span m='483590'>it</span>
  <span m='483660'>becomes</span> <span m='484390'>a</span> <span
  m='484470'>bunch</span> <span m='484720'>of</span> <span
  m='484840'>words</span> <span m='485190'>and</span> <span
  m='485320'>frequencies.</span> <span m='486560'>But</span> <span
  m='487040'>it</span> <span m='487190'>is</span> <span
  m='487800'>something</span> <span m='488230'>that</span> <span
  m='491250'>compresses</span> <span m='491730'>the</span> <span
  m='491820'>input</span> <span m='492870'>and</span> <span
  m='493690'>gives</span> <span m='493840'>you</span> <span m='493970'>a</span>
  <span m='494020'>different</span> <span m='494280'>representation.</span>
  <span m='495590'>And</span> <span m='495770'>so</span> <span
  m='496400'>people</span> <span m='496700'>use</span> <span
  m='496980'>sorting</span> <span m='498110'>as</span> <span m='498320'>a</span>
  <span m='498410'>subroutine</span> <span m='499600'>in</span> <span
  m='499890'>data</span> <span m='500110'>compression.</span> </p><p><span
  m='503190'>Computer</span> <span m='503570'>graphics</span> <span
  m='504400'>uses</span> <span m='504750'>sorting.</span> <span
  m='507360'>Most</span> <span m='507610'>of</span> <span m='507690'>the</span>
  <span m='507760'>time,</span> <span m='508570'>when</span> <span
  m='508720'>you</span> <span m='508860'>render</span> <span
  m='510560'>scenes</span> <span m='511090'>in</span> <span
  m='511200'>computer</span> <span m='511550'>graphics,</span> <span
  m='511950'>you</span> <span m='512049'>have</span> <span
  m='512190'>many</span> <span m='512409'>layers</span> <span
  m='512870'>corresponding</span> <span m='513330'>to</span> <span
  m='513390'>the</span> <span m='513480'>scenes.</span> <span
  m='514559'>It</span> <span m='514650'>turns</span> <span m='514900'>out</span>
  <span m='515130'>that,</span> <span m='517730'>in</span> <span
  m='517880'>computer</span> <span m='518190'>graphics,</span> <span
  m='518610'>most</span> <span m='518870'>of</span> <span m='518940'>the</span>
  <span m='519030'>time</span> <span m='519289'>you're</span> <span
  m='519450'>actually</span> <span m='519770'>rendering</span> <span
  m='520299'>front</span> <span m='520970'>to</span> <span
  m='521080'>back</span> <span m='522039'>because,</span> <span
  m='523130'>when</span> <span m='523230'>you</span> <span
  m='523320'>have</span> <span m='523570'>a</span> <span m='523640'>big</span>
  <span m='523970'>opaque</span> <span m='524410'>object</span> <span
  m='525030'>in</span> <span m='525210'>front,</span> <span
  m='526970'>you</span> <span m='527160'>want</span> <span m='527290'>to</span>
  <span m='527340'>render</span> <span m='527590'>that</span> <span
  m='527900'>first,</span> <span m='529120'>so</span> <span
  m='529390'>you</span> <span m='529530'>don't</span> <span
  m='529670'>have</span> <span m='529790'>to</span> <span
  m='529860'>worry</span> <span m='530090'>about</span> <span
  m='530310'>everything</span> <span m='530690'>that's</span> <span
  m='530970'>occluded</span> <span m='531960'>by</span> <span
  m='532140'>this</span> <span m='533000'>big</span> <span
  m='533330'>opaque</span> <span m='533650'>object.</span> <span
  m='534060'>And</span> <span m='534220'>that</span> <span
  m='534580'>makes</span> <span m='534850'>things</span> <span
  m='535100'>more</span> <span m='535280'>efficient.</span> <span
  m='536590'>And</span> <span m='536770'>so</span> <span m='536980'>you</span>
  <span m='537150'>keep</span> <span m='537420'>things</span> <span
  m='537630'>sorted</span> <span m='538020'>front</span> <span
  m='538300'>to</span> <span m='538370'>back,</span> <span
  m='538700'>most</span> <span m='538930'>of</span> <span m='539000'>the</span>
  <span m='539060'>time, in</span> <span m='539470'>computer</span> <span
  m='539760'>graphics</span> <span m='540240'>rendering.</span> </p><p><span
  m='541160'>But</span> <span m='541300'>some</span> <span m='541450'>of</span>
  <span m='541510'>the</span> <span m='541590'>time,</span> <span
  m='542040'>if</span> <span m='542200'>you're</span> <span
  m='542310'>worried</span> <span m='542520'>about</span> <span
  m='542690'>transparency,</span> <span m='543860'>you</span> <span
  m='543960'>have</span> <span m='544070'>to</span> <span
  m='544140'>render</span> <span m='544430'>things</span> <span
  m='544640'>back</span> <span m='544860'>to</span> <span
  m='544950'>front.</span> <span m='545660'>So</span> <span
  m='545850'>typically,</span> <span m='546280'>you</span> <span
  m='546380'>have</span> <span m='547020'>sorted</span> <span
  m='547470'>lists</span> <span m='548390'>corresponding</span> <span
  m='548820'>to</span> <span m='548980'>the</span> <span
  m='549870'>different</span> <span m='550150'>objects</span> <span
  m='550650'>in</span> <span m='550760'>both</span> <span
  m='551010'>orders--</span> <span m='551550'>both</span> <span
  m='551790'>increasing</span> <span m='552220'>order</span> <span
  m='552520'>and</span> <span m='552710'>decreasing</span> <span
  m='553130'>order.</span> <span m='553730'>And you're</span> <span
  m='553990'>maintaining</span> <span m='554420'>that.</span> <span
  m='555230'>So</span> <span m='555670'>sorting</span> <span
  m='556050'>is</span> <span m='556515'>a</span> <span m='556820'>real</span>
  <span m='557510'>important</span> <span m='557990'>subroutine</span> <span
  m='559190'>in</span> <span m='560300'>pretty</span> <span
  m='560490'>much</span> <span m='560800'>any</span> <span
  m='561050'>sophisticated</span> <span m='561670'>application</span> <span
  m='562180'>you</span> <span m='562290'>look</span> <span m='562480'>at.</span>
  </p><p><span m='563090'>So</span> <span m='563240'>it's</span> <span
  m='563360'>worthwhile</span> <span m='564480'>to</span> <span
  m='564590'>look</span> <span m='564810'>at</span> <span m='565710'>the</span>
  <span m='565870'>variety</span> <span m='566380'>of</span> <span
  m='566450'>sorting</span> <span m='566780'>algorithms</span> <span
  m='567200'>that</span> <span m='567280'>are</span> <span m='567410'>out</span>
  <span m='567610'>there.</span> <span m='568350'>And</span> <span
  m='568470'>we're</span> <span m='568550'>going</span> <span
  m='568670'>to</span> <span m='568750'>do</span> <span m='568980'>some</span>
  <span m='569160'>simple</span> <span m='569460'>ones,</span> <span
  m='569690'>today.</span> <span m='570450'>But</span> <span
  m='570590'>if</span> <span m='570660'>you</span> <span m='570730'>go</span>
  <span m='570950'>and</span> <span m='571020'>look</span> <span
  m='571180'>at</span> <span m='571260'>Wikipedia</span> <span
  m='571890'>and</span> <span m='572960'>do</span> <span m='573070'>a</span>
  <span m='573140'>Google</span> <span m='573410'>search,</span> <span
  m='574310'>there's</span> <span m='574840'>all</span> <span
  m='575020'>sorts</span> <span m='575270'>of</span> <span
  m='575350'>sorts</span> <span m='575810'>like</span> <span
  m='576380'>cocktail</span> <span m='576880'>sort, and</span> <span
  m='577370'>bitonic</span> <span m='577775'>sort,</span> <span
  m='578030'>and</span> <span m='580780'>what</span> <span
  m='580900'>have</span> <span m='581110'>you.</span> <span
  m='581900'>And</span> <span m='582280'>there's</span> <span
  m='583360'>reasons</span> <span m='583740'>why</span> <span
  m='584050'>each</span> <span m='584230'>of</span> <span
  m='584310'>these</span> <span m='584460'>sorting</span> <span
  m='584750'>algorithms</span> <span m='585150'>exist.</span> <span
  m='585900'>Because</span> <span m='586370'>in</span> <span
  m='586490'>specific</span> <span m='587090'>cases,</span> <span
  m='588300'>they</span> <span m='588840'>end</span> <span m='589060'>up</span>
  <span m='589830'>winning</span> <span m='590710'>on</span> <span
  m='591290'>types</span> <span m='591620'>of</span> <span
  m='591720'>inputs</span> <span m='592220'>or</span> <span
  m='592430'>types</span> <span m='592680'>of</span> <span
  m='592770'>problems.</span> </p><p><span m='595660'>So</span> <span
  m='595870'>let's</span> <span m='596260'>take</span> <span m='596430'>a</span>
  <span m='596480'>look</span> <span m='596670'>at</span> <span
  m='596790'>our</span> <span m='597040'>first</span> <span
  m='598690'>sorting</span> <span m='599060'>algorithm.</span> <span
  m='599470'>I'm</span> <span m='599550'>not</span> <span
  m='599700'>going</span> <span m='599790'>to</span> <span
  m='599830'>write</span> <span m='600100'>code</span> <span
  m='601660'>but</span> <span m='602290'>it</span> <span m='602440'>will</span>
  <span m='602580'>be</span> <span m='602680'>in</span> <span
  m='602790'>the</span> <span m='602870'>notes.</span> <span
  m='603640'>And</span> <span m='604080'>it</span> <span m='604170'>is</span>
  <span m='604340'>in</span> <span m='604430'>your</span> <span
  m='604590'>document</span> <span m='605040'>distance</span> <span
  m='607300'>Python</span> <span m='607720'>files.</span> <span
  m='608860'>But</span> <span m='609130'>I'll</span> <span
  m='609230'>just</span> <span m='609420'>give</span> <span
  m='609550'>you</span> <span m='609720'>pseudocode</span> <span
  m='610290'>here</span> <span m='610770'>and</span> <span
  m='611740'>walk</span> <span m='612110'>through</span> <span
  m='612300'>what</span> <span m='612470'>insertion</span> <span
  m='612910'>sort</span> <span m='613170'>looks</span> <span
  m='613390'>like</span> <span m='613750'>because</span> <span
  m='614030'>the</span> <span m='614620'>purpose</span> <span
  m='614990'>of</span> <span m='617020'>describing</span> <span
  m='617460'>this</span> <span m='617610'>algorithm</span> <span m='617990'>to
  you</span> <span m='618770'>is</span> <span m='619020'>to</span> <span
  m='619110'>analyze</span> <span m='619520'>its</span> <span
  m='619690'>complexity.</span> <span m='620810'>We</span> <span
  m='620840'>need</span> <span m='620980'>to</span> <span m='621030'>do</span>
  <span m='621150'>some</span> <span m='621320'>counting</span> <span
  m='621870'>here,</span> <span m='622130'>with</span> <span
  m='622270'>respect</span> <span m='622590'>to</span> <span
  m='622650'>this</span> <span m='622810'>algorithm,</span> <span
  m='624440'>to</span> <span m='624830'>figure</span> <span
  m='625100'>out</span> <span m='625230'>how</span> <span m='625500'>fast</span>
  <span m='625950'>it's</span> <span m='626070'>going to</span> <span
  m='626240'>run</span> <span m='626480'>in</span> <span m='626820'>and</span>
  <span m='627730'>what</span> <span m='627930'>the</span> <span
  m='628010'>worst</span> <span m='628240'>case</span> <span
  m='628610'>complexity</span> <span m='629150'>is.</span> </p><p><span
  m='630280'>So</span> <span m='630680'>what</span> <span m='630830'>is</span>
  <span m='630940'>insertion</span> <span m='631370'>sort?</span> <span
  m='632585'>For</span> <span m='632900'>i</span> <span m='633812'>equals</span>
  <span m='634270'>1,</span> <span m='634830'>2,</span> <span
  m='635230'>through</span> <span m='635550'>n,</span> <span
  m='638320'>given</span> <span m='638850'>an</span> <span
  m='638980'>input</span> <span m='639300'>to</span> <span m='639380'>be</span>
  <span m='639480'>sorted,</span> <span m='641780'>what</span> <span
  m='641950'>we're</span> <span m='642040'>going</span> <span
  m='642190'>to</span> <span m='642260'>do</span> <span m='642460'>is</span>
  <span m='642700'>we're</span> <span m='642810'>going</span> <span
  m='642930'>to</span> <span m='642970'>insert</span> <span m='645480'>A</span>
  <span m='645610'>of</span> <span m='645770'>i</span> <span
  m='646600'>in</span> <span m='646730'>the</span> <span m='646870'>right</span>
  <span m='647240'>position.</span> <span m='648470'>And</span> <span
  m='648650'>we're</span> <span m='648710'>going</span> <span
  m='648820'>to</span> <span m='648870'>assume</span> <span
  m='649300'>that</span> <span m='650890'>we</span> <span m='651170'>are</span>
  <span m='652100'>sort</span> <span m='652290'>of</span> <span
  m='652360'>midway</span> <span m='652830'>through</span> <span
  m='653060'>the</span> <span m='653220'>sorting</span> <span
  m='653610'>process,</span> <span m='654960'>where</span> <span
  m='655220'>we</span> <span m='655480'>have sorted</span> <span
  m='658170'>A</span> <span m='658820'>0</span> <span m='659210'>through</span>
  <span m='659510'>i</span> <span m='659660'>minus</span> <span
  m='660010'>1.</span> <span m='660920'>And</span> <span m='661780'>we're</span>
  <span m='661900'>going to</span> <span m='662020'>expand</span> <span
  m='662480'>this</span> <span m='662770'>to</span> <span m='663780'>this</span>
  <span m='664040'>array</span> <span m='664340'>to</span> <span
  m='664470'>have</span> <span m='665610'>i</span> <span m='665780'>plus</span>
  <span m='666030'>1</span> <span m='666290'>elements.</span> <span
  m='667590'>And</span> <span m='668190'>A</span> <span m='668350'>of</span>
  <span m='668470'>i is</span> <span m='668850'>going to</span> <span
  m='668950'>get</span> <span m='669120'>inserted</span> <span
  m='669650'>into</span> <span m='670270'>the</span> <span
  m='670390'>correct</span> <span m='670680'>position.</span> </p><p><span
  m='672830'>And</span> <span m='673030'>we're</span> <span
  m='673110'>going</span> <span m='673230'>to</span> <span m='673300'>do</span>
  <span m='673440'>this</span> <span m='673740'>by</span> <span
  m='674570'>pairwise</span> <span m='675240'>swaps</span> <span
  m='683640'>down</span> <span m='686210'>to</span> <span m='686310'>the</span>
  <span m='686450'>correct</span> <span m='688750'>position</span> <span
  m='689350'>for</span> <span m='689660'>the</span> <span
  m='689840'>number</span> <span m='690980'>that</span> <span
  m='691310'>is</span> <span m='691530'>initially</span> <span
  m='692730'>in</span> <span m='692980'>A</span> <span m='693130'>of i.</span>
  <span m='696050'>So</span> <span m='696260'>let's</span> <span
  m='696960'>go</span> <span m='697130'>through</span> <span
  m='701170'>an</span> <span m='701290'>example</span> <span
  m='701720'>of</span> <span m='701830'>this.</span> <span
  m='702410'>We're</span> <span m='702510'>going</span> <span
  m='702600'>to</span> <span m='702660'>sort</span> <span m='703020'>in</span>
  <span m='703260'>increasing</span> <span m='703870'>order.</span> <span
  m='704840'>Just</span> <span m='704950'>have</span> <span
  m='705220'>six</span> <span m='705490'>numbers.</span> <span
  m='710430'>And</span> <span m='710620'>initially,</span> <span
  m='710970'>we</span> <span m='711050'>have</span> <span m='711230'>5,</span>
  <span m='711535'>2,</span> <span m='711840'>4,</span> <span
  m='713180'>6,</span> <span m='713570'>1,</span> <span m='713870'>3.</span>
  <span m='715250'>And</span> <span m='715470'>we're</span> <span
  m='715540'>going</span> <span m='715630'>to</span> <span
  m='715670'>take</span> <span m='715800'>a</span> <span m='715840'>look</span>
  <span m='716000'>at</span> <span m='716070'>this.</span> </p><p><span
  m='716430'>And</span> <span m='716580'>you</span> <span
  m='716790'>start</span> <span m='717250'>with</span> <span
  m='717970'>the</span> <span m='718460'>index</span> <span m='718840'>1,</span>
  <span m='719210'>or</span> <span m='719300'>the</span> <span
  m='719430'>second</span> <span m='719820'>element,</span> <span
  m='720550'>because</span> <span m='720900'>the</span> <span
  m='720990'>very</span> <span m='721220'>first</span> <span
  m='721520'>element--</span> <span m='722050'>it's</span> <span
  m='722220'>a</span> <span m='722280'>single</span> <span
  m='723230'>element</span> <span m='723620'>and</span> <span
  m='723690'>it's</span> <span m='723870'>already</span> <span
  m='724200'>sorted</span> <span m='724780'>by</span> <span
  m='724970'>definition.</span> <span m='726050'>But</span> <span
  m='726240'>you</span> <span m='726640'>start</span> <span
  m='726900'>from</span> <span m='727040'>here.</span> <span
  m='727930'>And</span> <span m='727950'>this</span> <span m='728060'>is</span>
  <span m='728160'>what</span> <span m='728340'>we</span> <span
  m='728470'>call</span> <span m='728760'>our</span> <span
  m='728870'>key.</span> <span m='730890'>And</span> <span
  m='731020'>that's</span> <span m='731510'>essentially</span> <span
  m='732810'>a</span> <span m='732910'>pointer</span> <span m='733400'>to</span>
  <span m='734235'>where</span> <span m='734650'>we're at,</span> <span
  m='734860'>right</span> <span m='735090'>now.</span> <span
  m='735250'>And</span> <span m='735420'>the key</span> <span
  m='735640'>keeps</span> <span m='735900'>moving</span> <span
  m='736230'>to</span> <span m='736310'>the</span> <span m='736420'>right</span>
  <span m='737020'>as</span> <span m='737230'>we</span> <span
  m='737330'>go</span> <span m='737480'>through</span> <span
  m='737650'>the</span> <span m='737750'>different</span> <span
  m='738040'>steps</span> <span m='738360'>of the</span> <span
  m='738490'>algorithm.</span> </p><p><span m='740200'>And</span> <span
  m='740340'>so</span> <span m='740460'>what</span> <span m='740600'>you</span>
  <span m='740680'>do</span> <span m='740880'>is</span> <span
  m='741000'>you</span> <span m='741110'>look</span> <span m='741250'>at</span>
  <span m='741320'>this</span> <span m='741590'>and</span> <span
  m='741660'>you</span> <span m='741750'>have--</span> <span
  m='743030'>this</span> <span m='743280'>is</span> <span m='743540'>A</span>
  <span m='743830'>of</span> <span m='744100'>i.</span> <span
  m='744830'>That's</span> <span m='745040'>your</span> <span
  m='745210'>key.</span> <span m='746030'>And</span> <span m='746890'>you</span>
  <span m='747000'>have</span> <span m='747210'>A of</span> <span
  m='747500'>0</span> <span m='747860'>to</span> <span m='747970'>0,</span>
  <span m='748820'>which</span> <span m='748910'>is</span> <span
  m='749130'>5.</span> <span m='750070'>And</span> <span m='752090'>since</span>
  <span m='752160'>we</span> <span m='752270'>want</span> <span
  m='752390'>to</span> <span m='752440'>sort</span> <span m='752750'>in</span>
  <span m='752850'>increasing</span> <span m='753310'>order,</span> <span
  m='754260'>this</span> <span m='754570'>is</span> <span m='754720'>not</span>
  <span m='755170'>sorted.</span> <span m='755940'>And</span> <span
  m='756080'>so</span> <span m='756190'>we</span> <span m='756280'>do</span>
  <span m='756410'>a</span> <span m='756470'>swap.</span> </p><p><span
  m='757720'>So</span> <span m='758380'>what</span> <span m='758580'>this</span>
  <span m='758720'>would</span> <span m='758890'>do</span> <span
  m='759090'>in</span> <span m='759810'>this</span> <span m='759990'>step</span>
  <span m='760620'>is</span> <span m='760770'>to</span> <span
  m='760870'>do</span> <span m='761020'>a</span> <span m='761080'>swap.</span>
  <span m='762400'>And</span> <span m='762590'>we</span> <span
  m='762700'>would</span> <span m='762830'>go</span> <span
  m='765850'>obtain</span> <span m='768070'>2,</span> <span m='768610'>5,</span>
  <span m='769560'>4,</span> <span m='770480'>6,</span> <span
  m='770830'>1,</span> <span m='771170'>3.</span> <span m='771830'>So</span>
  <span m='771960'>all</span> <span m='772150'>that's</span> <span
  m='772310'>happened</span> <span m='772610'>here,</span> <span
  m='772820'>in</span> <span m='772940'>this</span> <span
  m='773150'>step--</span> <span m='774670'>in</span> <span
  m='774820'>the</span> <span m='774890'>very</span> <span
  m='775080'>first</span> <span m='775310'>step</span> <span
  m='775600'>where</span> <span m='775680'>the</span> <span m='775770'>key
  is</span> <span m='776060'>in</span> <span m='776140'>the</span> <span
  m='776230'>second</span> <span m='776540'>position--</span> <span
  m='777360'>is</span> <span m='777850'>one</span> <span m='778500'>swap</span>
  <span m='778800'>happened.</span> </p><p><span m='780020'>Now,</span> <span
  m='780200'>your</span> <span m='780320'>key</span> <span m='780470'>is</span>
  <span m='780690'>here,</span> <span m='781880'>at</span> <span
  m='782330'>item</span> <span m='782580'>4.</span> <span
  m='783340'>Again,</span> <span m='783590'>you</span> <span
  m='783690'>need</span> <span m='783880'>to</span> <span m='784000'>put</span>
  <span m='784280'>4</span> <span m='784630'>into</span> <span
  m='784770'>the</span> <span m='784880'>right</span> <span
  m='785130'>spot.</span> <span m='785980'>And</span> <span m='786170'>so</span>
  <span m='786250'>you</span> <span m='786370'>do</span> <span
  m='786480'>pairwise</span> <span m='787580'>swaps.</span> <span
  m='788670'>And</span> <span m='789230'>in</span> <span m='789350'>this</span>
  <span m='789510'>case,</span> <span m='789900'>you</span> <span
  m='790010'>have</span> <span m='790140'>to</span> <span m='790220'>do</span>
  <span m='790320'>one</span> <span m='790560'>swap.</span> <span
  m='791280'>And</span> <span m='791400'>you</span> <span m='791470'>get</span>
  <span m='791630'>2,</span> <span m='791750'>4,</span> <span
  m='791970'>5.</span> <span m='792750'>And</span> <span
  m='792880'>you're</span> <span m='792980'>done</span> <span
  m='793220'>with</span> <span m='793640'>this</span> <span
  m='794300'>iteration.</span> </p><p><span m='795650'>So</span> <span
  m='796610'>what</span> <span m='796740'>happens</span> <span
  m='797070'>here</span> <span m='801730'>is</span> <span m='801930'>you</span>
  <span m='802060'>have</span> <span m='802830'>2,</span> <span
  m='803270'>4,</span> <span m='803790'>5,</span> <span m='805800'>6,</span>
  <span m='806270'>1,</span> <span m='806630'>3.</span> <span
  m='807850'>And</span> <span m='809600'>now,</span> <span m='810210'>the</span>
  <span m='810330'>key</span> <span m='810550'>is</span> <span
  m='810920'>over</span> <span m='811080'>here,</span> <span
  m='811380'>at</span> <span m='811500'>6.</span> <span m='813010'>Now,</span>
  <span m='813110'>at</span> <span m='813210'>this</span> <span
  m='813360'>point,</span> <span m='813990'>things</span> <span
  m='816080'>are</span> <span m='816390'>kind</span> <span m='816510'>of</span>
  <span m='816600'>easy,</span> <span m='817860'>in</span> <span
  m='818020'>the</span> <span m='818130'>sense</span> <span
  m='818450'>that</span> <span m='818930'>you</span> <span
  m='819130'>look</span> <span m='819310'>at</span> <span m='819400'>it</span>
  <span m='819590'>and</span> <span m='819670'>you</span> <span
  m='819760'>say,</span> <span m='819940'>well,</span> <span m='821100'>I</span>
  <span m='821180'>know</span> <span m='821320'>this</span> <span
  m='821620'>part</span> <span m='821850'>is</span> <span
  m='821930'>already</span> <span m='822200'>started.</span> <span
  m='823480'>6</span> <span m='823730'>is</span> <span m='823880'>greater</span>
  <span m='824070'>than</span> <span m='824240'>5.</span> <span
  m='824970'>So</span> <span m='825130'>you</span> <span m='825240'>have</span>
  <span m='825360'>to</span> <span m='825440'>do</span> <span
  m='825560'>nothing.</span> </p><p><span m='827000'>So</span> <span
  m='828190'>there's</span> <span m='828360'>no</span> <span
  m='828480'>swaps</span> <span m='828890'>that</span> <span
  m='829020'>happen</span> <span m='829690'>in</span> <span
  m='829830'>this</span> <span m='830000'>step.</span> <span
  m='831530'>So</span> <span m='833900'>all</span> <span m='834170'>that</span>
  <span m='834280'>happens</span> <span m='834600'>here</span> <span
  m='835450'>is</span> <span m='836260'>you're</span> <span
  m='836440'>going</span> <span m='836640'>to</span> <span
  m='836740'>move</span> <span m='837010'>the</span> <span m='837100'>key</span>
  <span m='838410'>to</span> <span m='839550'>one</span> <span
  m='839800'>step</span> <span m='840090'>to</span> <span m='840180'>the</span>
  <span m='840270'>right.</span> <span m='842280'>So</span> <span
  m='842400'>you</span> <span m='842470'>have</span> <span m='842620'>2,</span>
  <span m='842990'>4,</span> <span m='843520'>5,</span> <span
  m='844200'>6,</span> <span m='845190'>1,</span> <span m='845540'>3.</span>
  <span m='846370'>And</span> <span m='846590'>your</span> <span
  m='846710'>key</span> <span m='847510'>is</span> <span m='847660'>now</span>
  <span m='847840'>at</span> <span m='847970'>1.</span> <span
  m='850270'>Here,</span> <span m='850380'>you</span> <span
  m='850610'>have</span> <span m='850760'>to</span> <span m='850820'>do</span>
  <span m='850930'>more</span> <span m='851100'>work.</span> <span
  m='851910'>Now,</span> <span m='852040'>you</span> <span m='852170'>see</span>
  <span m='854310'>one</span> <span m='854550'>aspect</span> <span
  m='854960'>of</span> <span m='855020'>the</span> <span
  m='855110'>complexity</span> <span m='855650'>of</span> <span
  m='855740'>this</span> <span m='855900'>algorithm--</span> <span
  m='856770'>given</span> <span m='856980'>that</span> <span
  m='857120'>you're</span> <span m='857240'>doing</span> <span
  m='857480'>pairwise</span> <span m='857990'>swaps--</span> <span
  m='859160'>the</span> <span m='859280'>way</span> <span m='859470'>this</span>
  <span m='859760'>algorithm</span> <span m='860170'>was</span> <span
  m='860580'>defined,</span> <span m='861200'>in</span> <span
  m='861290'>pseudocode,</span> <span m='861870'>out</span> <span
  m='862030'>there,</span> <span m='862740'>was</span> <span
  m='863260'>I'm</span> <span m='863420'>going</span> <span m='863550'>to</span>
  <span m='863830'>use</span> <span m='864160'>pairwise</span> <span
  m='864720'>swaps</span> <span m='865410'>to</span> <span
  m='865690'>find</span> <span m='866090'>the</span> <span
  m='866180'>correct</span> <span m='866680'>position.</span> </p><p><span
  m='867760'>So</span> <span m='868600'>what</span> <span
  m='868790'>you're</span> <span m='868880'>going</span> <span
  m='869010'>to</span> <span m='869090'>do</span> <span m='869290'>is</span>
  <span m='869500'>you're</span> <span m='869640'>going</span> <span
  m='869780'>to</span> <span m='869840'>have</span> <span m='870100'>to</span>
  <span m='870690'>swap</span> <span m='871680'>first</span> <span
  m='872650'>1</span> <span m='872910'>and</span> <span m='873050'>6.</span>
  <span m='874080'>And</span> <span m='874220'>then</span> <span
  m='874360'>you'll</span> <span m='874530'>swap--</span> <span
  m='875020'>1</span> <span m='875270'>is</span> <span m='875370'>over</span>
  <span m='875550'>here.</span> <span m='876310'>So</span> <span
  m='876450'>you'll</span> <span m='877030'>swap</span> <span
  m='878140'>this</span> <span m='878370'>position</span> <span
  m='878760'>and</span> <span m='878840'>that</span> <span
  m='879020'>position.</span> <span m='879970'>And</span> <span
  m='880090'>then</span> <span m='880190'>you'll</span> <span
  m='880320'>swap--</span> <span m='883570'>essentially,</span> <span
  m='884580'>do</span> <span m='884740'>4</span> <span m='885060'>swaps</span>
  <span m='886370'>to</span> <span m='886700'>get</span> <span
  m='886910'>to</span> <span m='886980'>the</span> <span m='887080'>point</span>
  <span m='887430'>where</span> <span m='889040'>you</span> <span
  m='889170'>have</span> <span m='889910'>1,</span> <span m='890360'>2,</span>
  <span m='890755'>4,</span> <span m='891150'>5,</span> <span
  m='891540'>6,</span> <span m='891940'>3.</span> <span m='892970'>So</span>
  <span m='893300'>this</span> <span m='895950'>is</span> <span
  m='896170'>the</span> <span m='896260'>result.</span> <span
  m='899190'>1,</span> <span m='899660'>2,</span> <span m='900070'>4,</span>
  <span m='900480'>5,</span> <span m='901050'>6,</span> <span
  m='902310'>3.</span> </p><p><span m='903770'>And</span> <span
  m='904830'>the</span> <span m='905000'>important</span> <span
  m='905250'>thing</span> <span m='905410'>to</span> <span
  m='905460'>understand,</span> <span m='905940'>here,</span> <span
  m='906360'>is</span> <span m='906590'>that</span> <span
  m='906750'>you've</span> <span m='906900'>done</span> <span
  m='907630'>four</span> <span m='907960'>swaps</span> <span
  m='908400'>to</span> <span m='908490'>get</span> <span m='908690'>1</span>
  <span m='909050'>to</span> <span m='909120'>the</span> <span
  m='909220'>correct</span> <span m='909470'>position.</span> <span
  m='910160'>Now, you</span> <span m='910290'>could</span> <span
  m='910410'>imagine</span> <span m='910800'>a</span> <span
  m='910860'>different</span> <span m='911260'>data</span> <span
  m='911480'>structure</span> <span m='912480'>where</span> <span
  m='912940'>you</span> <span m='913670'>move</span> <span
  m='914030'>this</span> <span m='914220'>over</span> <span
  m='914390'>there</span> <span m='914760'>and</span> <span
  m='914860'>you</span> <span m='914940'>shift</span> <span
  m='915300'>them</span> <span m='915470'>all</span> <span m='916180'>to</span>
  <span m='916290'>the</span> <span m='916390'>right.</span> <span
  m='916930'>But</span> <span m='917040'>in</span> <span m='917140'>fact,</span>
  <span m='917760'>that</span> <span m='918020'>shifting</span> <span
  m='918890'>of</span> <span m='919040'>these</span> <span
  m='919220'>four</span> <span m='919470'>elements</span> <span
  m='920230'>is</span> <span m='920370'>going</span> <span m='920500'>to</span>
  <span m='920540'>be</span> <span m='920660'>computed</span> <span
  m='921620'>in</span> <span m='922240'>our</span> <span m='922450'>model</span>
  <span m='922960'>as</span> <span m='923150'>four</span> <span
  m='923630'>operations,</span> <span m='924850'>or</span> <span
  m='925030'>four</span> <span m='925270'>steps,</span> <span
  m='925820'>anyway.</span> <span m='926530'>So</span> <span
  m='926640'>there's</span> <span m='926790'>no</span> <span
  m='926910'>getting</span> <span m='927130'>away</span> <span
  m='927310'>from</span> <span m='927440'>the</span> <span
  m='927520'>fact</span> <span m='927910'>that</span> <span
  m='928450'>you</span> <span m='928550'>have</span> <span m='928660'>to</span>
  <span m='928760'>do</span> <span m='928890'>four</span> <span
  m='929210'>things</span> <span m='929600'>here.</span> <span
  m='930660'>And</span> <span m='931410'>the</span> <span m='931590'>way</span>
  <span m='933160'>the</span> <span m='933240'>code</span> <span
  m='933520'>that</span> <span m='933620'>we</span> <span m='933720'>have</span>
  <span m='933940'>for</span> <span m='934040'>insertion</span> <span
  m='934440'>sort</span> <span m='936830'>does</span> <span
  m='937150'>this</span> <span m='937410'>is</span> <span m='937570'>by</span>
  <span m='937700'>using</span> <span m='937980'>pairwise</span> <span
  m='938340'>swaps.</span> </p><p><span m='939400'>So</span> <span
  m='939520'>we're</span> <span m='939650'>almost</span> <span
  m='939920'>done.</span> <span m='941470'>Now,</span> <span
  m='941700'>we</span> <span m='941840'>have</span> <span m='942820'>the</span>
  <span m='942970'>key</span> <span m='945830'>at</span> <span
  m='947240'>3.</span> <span m='949490'>And</span> <span m='950100'>now,</span>
  <span m='950430'>3</span> <span m='950550'>needs</span> <span
  m='950700'>to</span> <span m='950810'>get</span> <span m='950970'>put</span>
  <span m='951130'>into</span> <span m='951270'>the</span> <span
  m='951360'>correct</span> <span m='951620'>position.</span> <span
  m='952910'>And</span> <span m='953170'>so</span> <span
  m='953360'>you've</span> <span m='953480'>got</span> <span
  m='953600'>to</span> <span m='953650'>do</span> <span m='953780'>a</span>
  <span m='954040'>few</span> <span m='954220'>swaps.</span> <span
  m='955350'>This</span> <span m='955500'>is the</span> <span
  m='955570'>last</span> <span m='955840'>step.</span> <span
  m='958320'>And</span> <span m='958550'>what</span> <span
  m='958670'>happens</span> <span m='958960'>here</span> <span
  m='959310'>is</span> <span m='960035'>3</span> <span m='960350'>is</span>
  <span m='960480'>going</span> <span m='960600'>to</span> <span
  m='960640'>get</span> <span m='961000'>swapped</span> <span
  m='961410'>with</span> <span m='961560'>6.</span> <span m='963580'>And</span>
  <span m='963700'>then</span> <span m='963850'>3</span> <span
  m='964040'>needs</span> <span m='964220'>to</span> <span m='964300'>get</span>
  <span m='964440'>swapped</span> <span m='964750'>with</span> <span
  m='964900'>5.</span> <span m='966520'>And</span> <span m='966640'>then</span>
  <span m='966800'>3</span> <span m='966990'>needs</span> <span
  m='967180'>to</span> <span m='967260'>get</span> <span
  m='967430'>swapped</span> <span m='967760'>with</span> <span
  m='968540'>4.</span> <span m='969770'>And</span> <span m='969910'>then,</span>
  <span m='970070'>since</span> <span m='970390'>3</span> <span
  m='970570'>is</span> <span m='970690'>greater</span> <span
  m='970870'>than</span> <span m='971090'>2,</span> <span
  m='972080'>you're</span> <span m='972270'>done.</span> <span m='972985'>So
  you</span> <span m='973330'>have</span> <span m='973590'>1,</span> <span
  m='973850'>2,</span> <span m='973950'>3,</span> <span m='974150'>4,</span>
  <span m='974660'>5,</span> <span m='976030'>6.</span> </p><p><span
  m='978880'>And</span> <span m='979060'>that's</span> <span
  m='979230'>it.</span> <span m='981180'>So,</span> <span
  m='982690'>analysis.</span> <span m='985380'>How</span> <span
  m='985510'>many</span> <span m='985680'>steps</span> <span
  m='986010'>do</span> <span m='986130'>I</span> <span m='986240'>have?</span>
  </p><p><span m='990670'>AUDIENCE: n</span> <span m='990998'>squared?</span>
  </p><p><span m='992150'>PROFESSOR: No,</span> <span m='992680'>how</span>
  <span m='992840'>many</span> <span m='992980'>steps</span> <span
  m='993350'>do</span> <span m='993470'>I</span> <span m='993550'>have?</span>
  <span m='996310'>I</span> <span m='996450'>guess</span> <span
  m='998055'>that</span> <span m='998330'>wasn't</span> <span
  m='998820'>a</span> <span m='998940'>good</span> <span
  m='999130'>question.</span> <span m='1000120'>If</span> <span
  m='1000310'>I</span> <span m='1000390'>think</span> <span
  m='1000570'>of</span> <span m='1000640'>a</span> <span m='1000700'>step</span>
  <span m='1001170'>as</span> <span m='1001540'>being</span> <span
  m='1001920'>a</span> <span m='1001980'>movement</span> <span
  m='1002450'>of</span> <span m='1002580'>the</span> <span
  m='1002690'>key,</span> <span m='1003930'>how</span> <span
  m='1004090'>many</span> <span m='1004250'>steps</span> <span
  m='1004640'>do</span> <span m='1004760'>I have?</span> <span
  m='1006215'>I</span> <span m='1006700'>have</span> <span m='1008030'>theta
  n</span> <span m='1008500'>steps.</span> <span m='1009930'>And</span> <span
  m='1012870'>in</span> <span m='1013040'>this</span> <span
  m='1013170'>case,</span> <span m='1013400'>you</span> <span
  m='1013490'>can</span> <span m='1013590'>think</span> <span
  m='1013730'>of</span> <span m='1013840'>it</span> <span m='1015070'>as</span>
  <span m='1015420'>n</span> <span m='1015590'>minus</span> <span
  m='1015870'>1</span> <span m='1016130'>steps,</span> <span
  m='1016570'>since</span> <span m='1016750'>you</span> <span
  m='1016830'>started</span> <span m='1017160'>with</span> <span
  m='1017330'>2.</span> <span m='1018030'>But</span> <span
  m='1018140'>let's</span> <span m='1018290'>just</span> <span
  m='1018440'>call</span> <span m='1018630'>it</span> <span m='1019210'>theta
  n</span> <span m='1020710'>steps,</span> <span m='1023900'>in</span> <span
  m='1024069'>terms</span> <span m='1024359'>of</span> <span
  m='1025589'>key</span> <span m='1026380'>positions.</span> </p><p><span
  m='1030060'>And</span> <span m='1030530'>you're</span> <span
  m='1030650'>right.</span> <span m='1031150'>It</span> <span
  m='1031290'>is</span> <span m='1031900'>n</span> <span
  m='1032099'>square</span> <span m='1032950'>because,</span> <span
  m='1033380'>at</span> <span m='1033579'>any</span> <span
  m='1033869'>given</span> <span m='1034140'>step,</span> <span
  m='1035349'>it's</span> <span m='1035630'>quite</span> <span
  m='1036000'>possible</span> <span m='1036780'>that</span> <span
  m='1036970'>I</span> <span m='1037010'>have</span> <span m='1037200'>to</span>
  <span m='1037329'>do</span> <span m='1038069'>theta n</span> <span
  m='1038770'>work.</span> <span m='1039730'>And</span> <span
  m='1040040'>one</span> <span m='1040200'>example</span> <span
  m='1040730'>is</span> <span m='1040849'>this</span> <span
  m='1041010'>one,</span> <span m='1041210'>right</span> <span
  m='1041390'>here,</span> <span m='1042400'>where</span> <span
  m='1043490'>I</span> <span m='1043609'>had</span> <span m='1043770'>to</span>
  <span m='1043839'>do</span> <span m='1043970'>four</span> <span
  m='1044250'>swaps.</span> <span m='1045160'>And</span> <span
  m='1045950'>in</span> <span m='1046079'>general,</span> <span
  m='1046440'>you</span> <span m='1046520'>can</span> <span
  m='1046640'>construct</span> <span m='1047040'>a</span> <span
  m='1047089'>scenario</span> <span m='1047599'>where,</span> <span
  m='1049320'>towards</span> <span m='1049610'>the</span> <span
  m='1049690'>end</span> <span m='1049980'>of</span> <span
  m='1050070'>the</span> <span m='1050160'>algorithm,</span> <span
  m='1051470'>you'd</span> <span m='1052030'>have</span> <span m='1052220'>to
  do</span> <span m='1053240'>theta n</span> <span m='1053700'>work.</span>
  <span m='1054120'>But</span> <span m='1054300'>if</span> <span
  m='1054410'>you</span> <span m='1054500'>had</span> <span m='1055100'>a</span>
  <span m='1055160'>list</span> <span m='1055480'>that</span> <span
  m='1055620'>was</span> <span m='1056090'>reverse</span> <span
  m='1056420'>sorted.</span> <span m='1057560'>You</span> <span
  m='1057790'>would,</span> <span m='1057990'>essentially,</span> <span
  m='1059080'>have</span> <span m='1059280'>to</span> <span
  m='1059390'>do,</span> <span m='1060010'>on</span> <span m='1060170'>an</span>
  <span m='1060280'>average</span> <span m='1060770'>n</span> <span
  m='1060960'>by</span> <span m='1061110'>two</span> <span
  m='1061380'>swaps</span> <span m='1062050'>as</span> <span
  m='1062270'>you</span> <span m='1062390'>go</span> <span
  m='1062550'>through</span> <span m='1062730'>each</span> <span
  m='1062960'>of</span> <span m='1063050'>the</span> <span
  m='1063130'>steps.</span> <span m='1063850'>And</span> <span
  m='1064000'>that's</span> <span m='1064190'>theta n.</span> </p><p><span
  m='1065300'>So</span> <span m='1065730'>each</span> <span
  m='1065970'>step</span> <span m='1068850'>is</span> <span m='1069960'>theta
  n</span> <span m='1071830'>swaps.</span> <span m='1075930'>And</span> <span
  m='1076330'>when</span> <span m='1076460'>I</span> <span
  m='1076530'>say</span> <span m='1077200'>swaps,</span> <span
  m='1078050'>I</span> <span m='1078190'>could</span> <span
  m='1078320'>also</span> <span m='1078740'>say</span> <span
  m='1079550'>each</span> <span m='1079770'>step</span> <span
  m='1080130'>is</span> <span m='1080350'>theta n</span> <span
  m='1081520'>compares</span> <span m='1084630'>and</span> <span
  m='1084970'>swaps.</span> <span m='1086780'>And</span> <span
  m='1086920'>this</span> <span m='1087020'>is</span> <span
  m='1087060'>going</span> <span m='1087170'>to</span> <span
  m='1087210'>be</span> <span m='1087320'>important</span> <span
  m='1088020'>because</span> <span m='1088190'>I'm</span> <span
  m='1088260'>going</span> <span m='1088370'>to</span> <span
  m='1088410'>ask</span> <span m='1088610'>you</span> <span
  m='1088750'>an</span> <span m='1088900'>interesting</span> <span
  m='1089290'>question</span> <span m='1090430'>in</span> <span
  m='1090590'>a</span> <span m='1090630'>minute.</span> <span
  m='1091700'>But</span> <span m='1091740'>let</span> <span
  m='1091850'>me</span> <span m='1092030'>summarize.</span> <span
  m='1093840'>What</span> <span m='1094050'>I</span> <span
  m='1094090'>have</span> <span m='1094280'>here</span> <span
  m='1094520'>is</span> <span m='1094610'>a</span> <span m='1094680'>theta n
  squared</span> <span m='1095520'>algorithm.</span> <span
  m='1096470'>The</span> <span m='1096570'>reason</span> <span
  m='1096860'>this</span> <span m='1096990'>is</span> <span m='1097100'>a</span>
  <span m='1097160'>theta n</span> <span m='1097450'>squared</span> <span
  m='1097970'>algorithm</span> <span m='1099030'>is</span> <span
  m='1099280'>because</span> <span m='1099860'>I</span> <span
  m='1099970'>have</span> <span m='1100170'>theta n</span> <span
  m='1100570'>steps</span> <span m='1102760'>and</span> <span
  m='1103150'>each</span> <span m='1103370'>step</span> <span
  m='1103750'>is</span> <span m='1104880'>theta n.</span> </p><p><span
  m='1106860'>When</span> <span m='1107050'>I'm</span> <span
  m='1107170'>counting,</span> <span m='1108350'>what</span> <span
  m='1108510'>am</span> <span m='1108590'>I</span> <span
  m='1108660'>counting</span> <span m='1109140'>it</span> <span
  m='1109300'>terms</span> <span m='1109450'>of</span> <span
  m='1109540'>operations?</span> <span m='1110730'>The</span> <span
  m='1111180'>assumption</span> <span m='1111650'>here--</span> <span
  m='1112020'>unspoken</span> <span m='1112560'>assumption--</span> <span
  m='1113510'>has</span> <span m='1113690'>been</span> <span
  m='1113960'>that</span> <span m='1114740'>an</span> <span
  m='1114860'>operation</span> <span m='1115370'>is</span> <span
  m='1115470'>a</span> <span m='1115530'>compare</span> <span
  m='1116090'>and</span> <span m='1116220'>a</span> <span
  m='1116390'>swap</span> <span m='1116810'>and</span> <span
  m='1117040'>they're,</span> <span m='1117300'>essentially,</span> <span
  m='1117800'>equal</span> <span m='1118080'>in</span> <span
  m='1118210'>cost.</span> </p><p><span m='1119540'>And</span> <span
  m='1119920'>in</span> <span m='1120160'>most</span> <span
  m='1120410'>computers,</span> <span m='1120890'>that's</span> <span
  m='1121090'>true.</span> <span m='1121850'>You</span> <span
  m='1121950'>have</span> <span m='1122080'>a</span> <span
  m='1122140'>single</span> <span m='1122430'>instruction</span> <span
  m='1123060'>and,</span> <span m='1123650'>say,</span> <span
  m='1123850'>the</span> <span m='1124550'>x86</span> <span
  m='1125210'>or</span> <span m='1125280'>the</span> <span
  m='1125350'>MIPS</span> <span m='1125610'>architecture</span> <span
  m='1126180'>that</span> <span m='1126340'>can</span> <span
  m='1126470'>do</span> <span m='1126590'>a</span> <span
  m='1126660'>compare,</span> <span m='1127700'>and</span> <span
  m='1127890'>the</span> <span m='1127960'>same</span> <span
  m='1128180'>thing</span> <span m='1128440'>for</span> <span
  m='1129180'>swapping</span> <span m='1129590'>registers.</span> <span
  m='1130660'>So</span> <span m='1131500'>perfectly</span> <span
  m='1131850'>reasonably</span> <span m='1132180'>assumption</span> <span
  m='1132640'>that</span> <span m='1132780'>compares</span> <span
  m='1133160'>and</span> <span m='1133270'>swaps</span> <span
  m='1134400'>for</span> <span m='1134560'>numbers</span> <span
  m='1136480'>have</span> <span m='1136780'>exactly</span> <span
  m='1137130'>the</span> <span m='1137220'>same</span> <span
  m='1137420'>cost.</span> <span m='1138410'>But</span> <span
  m='1138450'>if</span> <span m='1138520'>you</span> <span
  m='1138600'>had</span> <span m='1138740'>a</span> <span
  m='1138830'>record</span> <span m='1139440'>and</span> <span
  m='1139600'>you</span> <span m='1139720'>were</span> <span
  m='1140660'>comparing</span> <span m='1141210'>records,</span> <span
  m='1141900'>and</span> <span m='1142050'>the</span> <span
  m='1142130'>comparison</span> <span m='1142800'>function</span> <span
  m='1143730'>that</span> <span m='1143860'>you</span> <span
  m='1143960'>used</span> <span m='1144250'>for</span> <span
  m='1144350'>the</span> <span m='1144470'>records</span> <span
  m='1145490'>was</span> <span m='1145700'>in</span> <span
  m='1145800'>itself</span> <span m='1146830'>a</span> <span
  m='1146870'>method</span> <span m='1147240'>call</span> <span m='1147640'>or
  a</span> <span m='1147800'>subroutine,</span> <span m='1148820'>it's</span>
  <span m='1148960'>quite</span> <span m='1149220'>possible</span> <span
  m='1149730'>that</span> <span m='1150680'>all</span> <span
  m='1150860'>you're</span> <span m='1150980'>doing</span> <span
  m='1151290'>is</span> <span m='1152380'>swapping</span> <span
  m='1152980'>pointers</span> <span m='1153550'>or</span> <span
  m='1153660'>references</span> <span m='1154360'>to</span> <span
  m='1154480'>do</span> <span m='1154590'>the</span> <span
  m='1154790'>swap,</span> <span m='1155600'>but</span> <span
  m='1155800'>the</span> <span m='1155880'>comparison</span> <span
  m='1156490'>could</span> <span m='1156620'>be</span> <span
  m='1156730'>substantially</span> <span m='1157460'>more</span> <span
  m='1157680'>expensive.</span> </p><p><span m='1162870'>Most</span> <span
  m='1163140'>of</span> <span m='1163210'>the</span> <span
  m='1163290'>time--</span> <span m='1163790'>and</span> <span
  m='1163950'>we'll</span> <span m='1164180'>differentiate</span> <span
  m='1164920'>if</span> <span m='1165440'>it</span> <span
  m='1165590'>becomes</span> <span m='1165880'>necessary--</span> <span
  m='1166980'>we're</span> <span m='1167040'>going</span> <span m='1167150'>to
  be</span> <span m='1167330'>counting</span> <span
  m='1167850'>comparisons</span> <span m='1168510'>in</span> <span
  m='1168600'>the</span> <span m='1168690'>sorting</span> <span
  m='1169030'>algorithms</span> <span m='1169560'>that</span> <span
  m='1169900'>we'll</span> <span m='1170050'>be</span> <span
  m='1170150'>putting</span> <span m='1170400'>out.</span> <span
  m='1171230'>And</span> <span m='1171760'>we'll be</span> <span
  m='1172080'>assuming</span> <span m='1172630'>that</span> <span
  m='1173840'>either</span> <span m='1174990'>comparison</span> <span
  m='1175470'>swaps</span> <span m='1175830'>are</span> <span
  m='1176130'>roughly</span> <span m='1176530'>the</span> <span
  m='1176620'>same</span> <span m='1177500'>or that</span> <span
  m='1178590'>compares</span> <span m='1179100'>are--</span> <span
  m='1181040'>and</span> <span m='1181170'>we'll</span> <span
  m='1181260'>say</span> <span m='1181460'>which</span> <span
  m='1181640'>one,</span> <span m='1181840'>of</span> <span
  m='1181940'>course--</span> <span m='1183960'>that</span> <span
  m='1184110'>compares</span> <span m='1184570'>are</span> <span
  m='1184680'>substantially</span> <span m='1185180'>more</span> <span
  m='1185350'>expensive</span> <span m='1185880'>than</span> <span
  m='1186190'>swaps.</span> <span m='1187830'>So</span> <span
  m='1188060'>if</span> <span m='1188260'>you</span> <span
  m='1188440'>had</span> <span m='1189622'>either</span> <span
  m='1190160'>of</span> <span m='1190370'>those</span> <span
  m='1190680'>cases</span> <span m='1191190'>for</span> <span
  m='1191340'>insertion</span> <span m='1191620'>sort,</span> <span
  m='1192270'>you</span> <span m='1192370'>have</span> <span
  m='1192500'>a</span> <span m='1192560'>theta n squared</span> <span
  m='1193230'>algorithm.</span> <span m='1194290'>You have</span> <span
  m='1194490'>theta n squared</span> <span m='1194850'>compares</span> <span
  m='1195600'>and</span> <span m='1195970'>theta n squared</span> <span
  m='1196490'>swaps.</span> </p><p><span m='1198200'>Now,</span> <span
  m='1198770'>here's</span> <span m='1198980'>a</span> <span
  m='1199020'>question.</span> <span m='1200780'>Let's</span> <span
  m='1201100'>say</span> <span m='1201350'>that</span> <span
  m='1202570'>compares</span> <span m='1204140'>are</span> <span
  m='1204700'>more</span> <span m='1204970'>expensive</span> <span
  m='1208340'>than</span> <span m='1208850'>swaps.</span> <span
  m='1211190'>And</span> <span m='1211410'>so,</span> <span
  m='1211630'>I'm</span> <span m='1211820'>concerned</span> <span
  m='1212330'>about</span> <span m='1212540'>the</span> <span m='1212630'>theta
  n squared</span> <span m='1213720'>comparison</span> <span
  m='1214460'>cost.</span> <span m='1217270'>I'm</span> <span
  m='1217470'>not</span> <span m='1217740'>as</span> <span
  m='1218000'>concerned,</span> <span m='1218680'>because</span> <span
  m='1218940'>of</span> <span m='1219010'>the</span> <span
  m='1219090'>constant</span> <span m='1219570'>factors</span> <span
  m='1220030'>involved,</span> <span m='1220880'>with</span> <span
  m='1220990'>the</span> <span m='1221080'>theta n squared</span> <span
  m='1221930'>swap</span> <span m='1222450'>cost.</span> </p><p><span
  m='1225410'>This</span> <span m='1225620'>is</span> <span m='1225740'>a</span>
  <span m='1225810'>question</span> <span m='1226160'>question.</span> <span
  m='1228730'>What's</span> <span m='1228960'>a</span> <span
  m='1229050'>simple</span> <span m='1230390'>fix--</span> <span
  m='1231150'>change</span> <span m='1231780'>to</span> <span
  m='1231890'>this</span> <span m='1232100'>algorithm</span> <span
  m='1233380'>that</span> <span m='1233590'>would</span> <span
  m='1233780'>give</span> <span m='1234050'>me</span> <span m='1234580'>a</span>
  <span m='1234660'>better</span> <span m='1235000'>complexity</span> <span
  m='1236400'>in</span> <span m='1236580'>the</span> <span
  m='1236700'>case</span> <span m='1237260'>where</span> <span
  m='1238710'>compares</span> <span m='1239160'>are</span> <span
  m='1239330'>more</span> <span m='1239460'>expensive,</span> <span
  m='1239900'>or</span> <span m='1240030'>I'm</span> <span
  m='1240160'>only</span> <span m='1240330'>looking</span> <span
  m='1240640'>at</span> <span m='1241470'>the</span> <span
  m='1241810'>complexity</span> <span m='1242490'>of</span> <span
  m='1242660'>compares.</span> <span m='1243300'>So</span> <span
  m='1243450'>the</span> <span m='1243560'>theta</span> <span
  m='1244000'>whatever</span> <span m='1244850'>of</span> <span
  m='1244980'>compares.</span> <span m='1246990'>Anyone?</span> <span
  m='1247950'>Yeah,</span> <span m='1248220'>back</span> <span
  m='1248370'>there.</span> </p><p><span m='1249053'>AUDIENCE:
  [INAUDIBLE]</span> </p><p><span m='1256781'>PROFESSOR: You could</span> <span
  m='1257270'>compare with</span> <span m='1257610'>the</span> <span
  m='1257710'>middle.</span> <span m='1258230'>What did</span> <span
  m='1258380'>I</span> <span m='1258590'>call it?</span> <span
  m='1261910'>I</span> <span m='1262000'>called</span> <span
  m='1262250'>it</span> <span m='1262400'>something.</span> <span
  m='1263120'>What</span> <span m='1263270'>you</span> <span
  m='1263340'>just</span> <span m='1263560'>said,</span> <span
  m='1263820'>I</span> <span m='1263870'>called</span> <span
  m='1264120'>it</span> <span m='1264270'>something.</span> </p><p><span
  m='1266370'>AUDIENCE: Binary</span> <span m='1266850'>search.</span>
  </p><p><span m='1267160'>PROFESSOR: Binary</span> <span
  m='1267470'>search.</span> <span m='1267740'>That's</span> <span
  m='1268010'>right.</span> <span m='1268310'>Two cushions</span> <span
  m='1268830'>for</span> <span m='1268920'>this</span> <span
  m='1269100'>one.</span> <span m='1270280'>So</span> <span
  m='1270390'>you</span> <span m='1270490'>pick</span> <span
  m='1270810'>them</span> <span m='1271060'>up</span> <span
  m='1271460'>after</span> <span m='1271670'>lecture.</span> <span
  m='1272290'>So</span> <span m='1272520'>you're</span> <span
  m='1272660'>exactly</span> <span m='1273010'>right.</span> <span
  m='1273220'>You</span> <span m='1273300'>got</span> <span
  m='1273450'>it</span> <span m='1273520'>right.</span> <span
  m='1273880'>I</span> <span m='1273980'>called</span> <span
  m='1274260'>it</span> <span m='1274350'>binary</span> <span
  m='1274710'>search,</span> <span m='1275880'>up</span> <span
  m='1276060'>here.</span> </p><p><span m='1278160'>And</span> <span
  m='1278490'>so</span> <span m='1279810'>you</span> <span
  m='1279960'>can</span> <span m='1280230'>take</span> <span
  m='1280430'>insertion</span> <span m='1280890'>sort</span> <span
  m='1281620'>and</span> <span m='1281780'>you</span> <span
  m='1281870'>can</span> <span m='1281970'>sort</span> <span
  m='1282110'>of</span> <span m='1282190'>trivially</span> <span
  m='1282770'>turn it</span> <span m='1283140'>into</span> <span
  m='1283660'>a</span> <span m='1283950'>theta n</span> <span
  m='1284250'>log</span> <span m='1284510'>n</span> <span
  m='1284800'>algorithm</span> <span m='1285830'>if</span> <span
  m='1286030'>we</span> <span m='1286130'>are</span> <span
  m='1286250'>talking</span> <span m='1286600'>about</span> <span
  m='1286910'>n</span> <span m='1287200'>being</span> <span
  m='1287740'>the</span> <span m='1288220'>number</span> <span
  m='1288410'>of</span> <span m='1288480'>compares.</span> <span
  m='1289910'>And</span> <span m='1290090'>all</span> <span
  m='1290270'>you</span> <span m='1290360'>have</span> <span m='1290500'>to do
  to</span> <span m='1290570'>do</span> <span m='1290940'>that</span> <span
  m='1291520'>is</span> <span m='1291800'>to</span> <span
  m='1291940'>say,</span> <span m='1292425'>you know</span> <span
  m='1292910'>what,</span> <span m='1293540'>I'm</span> <span
  m='1293680'>going</span> <span m='1293790'>to</span> <span
  m='1293840'>replace</span> <span m='1294280'>this</span> <span
  m='1295100'>with</span> <span m='1295260'>binary</span> <span
  m='1295810'>search.</span> <span m='1297950'>And</span> <span
  m='1298120'>you</span> <span m='1298220'>can</span> <span
  m='1298340'>do</span> <span m='1298490'>that--</span> <span
  m='1299880'>and</span> <span m='1300110'>that</span> <span
  m='1300130'>was</span> <span m='1300280'>the</span> <span
  m='1300330'>key</span> <span m='1300670'>observation--</span> <span
  m='1302720'>because</span> <span m='1303470'>A</span> <span
  m='1303660'>of</span> <span m='1304020'>0</span> <span
  m='1304520'>through</span> <span m='1304850'>i</span> <span
  m='1305010'>minus</span> <span m='1305380'>1</span> <span
  m='1306090'>is</span> <span m='1306250'>already</span> <span
  m='1306610'>sorted.</span> <span m='1307990'>And</span> <span
  m='1308180'>so</span> <span m='1308330'>you</span> <span
  m='1308460'>can</span> <span m='1308580'>do</span> <span
  m='1308720'>binary</span> <span m='1308890'>search</span> <span
  m='1309410'>on</span> <span m='1309570'>that</span> <span
  m='1309860'>part</span> <span m='1310600'>of</span> <span m='1310780'>the
  array.</span> </p><p><span m='1311970'>So</span> <span m='1312080'>let</span>
  <span m='1312190'>me</span> <span m='1312260'>just</span> <span
  m='1312410'>write</span> <span m='1312590'>that</span> <span
  m='1312750'>down.</span> <span m='1316750'>Do</span> <span
  m='1316950'>a</span> <span m='1317030'>binary</span> <span
  m='1317490'>search</span> <span m='1320160'>on</span> <span
  m='1320690'>A</span> <span m='1320990'>of</span> <span m='1321330'>0</span>
  <span m='1321830'>through</span> <span m='1322200'>i</span> <span
  m='1322380'>minus</span> <span m='1322720'>1,</span> <span
  m='1324000'>which</span> <span m='1324190'>is</span> <span
  m='1324340'>already</span> <span m='1324820'>sorted.</span> <span
  m='1330540'>And</span> <span m='1330970'>essentially,</span> <span
  m='1331560'>you can</span> <span m='1331790'>think</span> <span
  m='1331920'>of</span> <span m='1332010'>it</span> <span m='1332090'>as</span>
  <span m='1332540'>theta</span> <span m='1332795'>log</span> <span
  m='1333050'>i</span> <span m='1334000'>time,</span> <span
  m='1336780'>and</span> <span m='1337020'>for</span> <span
  m='1337170'>each</span> <span m='1337330'>of</span> <span
  m='1337420'>those</span> <span m='1337570'>steps.</span> <span
  m='1338070'>And</span> <span m='1338230'>so</span> <span
  m='1338330'>then</span> <span m='1338490'>you</span> <span
  m='1338600'>get</span> <span m='1338780'>your</span> <span
  m='1338920'>theta</span> <span m='1339010'>n</span> <span m='1339100'>log
  n</span> <span m='1347110'>theta</span> <span m='1347166'>n</span> <span
  m='1347223'>log n</span> <span m='1348005'>in</span> <span
  m='1348280'>terms</span> <span m='1348510'>of</span> <span
  m='1348600'>compares.</span> </p><p><span m='1350410'>Does</span> <span
  m='1350600'>this</span> <span m='1350810'>help</span> <span
  m='1352630'>the</span> <span m='1352770'>swaps</span> <span
  m='1354220'>for</span> <span m='1354630'>an array</span> <span
  m='1355150'>data</span> <span m='1355370'>structure?</span> <span
  m='1357940'>No,</span> <span m='1358110'>because</span> <span
  m='1358380'>binary</span> <span m='1358750'>search</span> <span
  m='1359220'>will</span> <span m='1359350'>require</span> <span
  m='1359790'>insertion</span> <span m='1361280'>into</span> <span
  m='1361540'>A</span> <span m='1361800'>of</span> <span m='1362170'>0</span>
  <span m='1362600'>though</span> <span m='1363030'>i</span> <span
  m='1363170'>minus</span> <span m='1363510'>1.</span> <span
  m='1364670'>So</span> <span m='1365200'>here's</span> <span
  m='1365420'>the</span> <span m='1365500'>problem.</span> <span
  m='1365880'>Why</span> <span m='1366310'>don't</span> <span
  m='1366480'>we</span> <span m='1366600'>have</span> <span m='1367370'>a</span>
  <span m='1367460'>full-fledged</span> <span m='1368980'>theta</span> <span
  m='1369080'>n</span> <span m='1369180'>log</span> <span m='1369280'>n</span>
  <span m='1369940'>algorithm,</span> <span m='1370430'>regardless</span> <span
  m='1371050'>of</span> <span m='1371240'>the</span> <span
  m='1371820'>cost</span> <span m='1372280'>of</span> <span
  m='1372420'>compares</span> <span m='1372930'>or</span> <span
  m='1373050'>swaps?</span> <span m='1373940'>We</span> <span
  m='1374030'>don't</span> <span m='1374240'>quite</span> <span
  m='1374450'>have</span> <span m='1374750'>that.</span> <span
  m='1375470'>We</span> <span m='1375610'>don't</span> <span
  m='1375950'>quite</span> <span m='1376160'>have</span> <span
  m='1376460'>that</span> <span m='1376760'>because</span> <span
  m='1378030'>we</span> <span m='1378150'>need</span> <span
  m='1378340'>to</span> <span m='1378400'>insert</span> <span
  m='1381380'>our</span> <span m='1381600'>A of</span> <span
  m='1381820'>i</span> <span m='1382950'>into</span> <span
  m='1383170'>the</span> <span m='1383280'>right</span> <span
  m='1383580'>position</span> <span m='1384700'>into</span> <span
  m='1384870'>A</span> <span m='1385080'>of</span> <span m='1386190'>0</span>
  <span m='1386520'>through</span> <span m='1386660'>i</span> <span
  m='1386800'>minus</span> <span m='1387080'>1.</span> </p><p><span
  m='1387850'>You</span> <span m='1387950'>do</span> <span
  m='1388110'>that</span> <span m='1388340'>if</span> <span
  m='1388430'>you</span> <span m='1388500'>have an array</span> <span
  m='1388780'>structure,</span> <span m='1389790'>it</span> <span
  m='1389920'>might</span> <span m='1390130'>get</span> <span
  m='1390260'>into</span> <span m='1390400'>the</span> <span
  m='1390490'>middle.</span> <span m='1390830'>And you</span> <span
  m='1390970'>have to</span> <span m='1391070'>shift</span> <span
  m='1391470'>things</span> <span m='1391720'>over</span> <span
  m='1391960'>to</span> <span m='1392680'>the</span> <span
  m='1392790'>right.</span> <span m='1393460'>And</span> <span
  m='1393590'>when</span> <span m='1393680'>you</span> <span
  m='1393750'>shift</span> <span m='1394030'>things</span> <span
  m='1394230'>over</span> <span m='1394410'>to</span> <span
  m='1394450'>the</span> <span m='1394550'>right,</span> <span
  m='1395170'>in</span> <span m='1395270'>the</span> <span
  m='1395350'>worst</span> <span m='1395590'>case,</span> <span
  m='1395850'>you</span> <span m='1395940'>may</span> <span
  m='1396040'>be</span> <span m='1396120'>shifting</span> <span
  m='1396470'>a</span> <span m='1396520'>lot</span> <span m='1396780'>of</span>
  <span m='1396860'>things</span> <span m='1397090'>over</span> <span
  m='1397280'>to</span> <span m='1397330'>the</span> <span
  m='1397440'>right.</span> <span m='1397980'>And</span> <span
  m='1398130'>that</span> <span m='1398270'>gets</span> <span
  m='1398670'>back</span> <span m='1398940'>to</span> <span
  m='1399020'>worst</span> <span m='1399270'>case</span> <span
  m='1399480'>complexity</span> <span m='1400050'>of</span> <span
  m='1400350'>theta n.</span> </p><p><span m='1403200'>So</span> <span
  m='1403560'>a</span> <span m='1403640'>binary</span> <span
  m='1404050'>search</span> <span m='1405300'>in</span> <span
  m='1405750'>insertion</span> <span m='1406440'>sort</span> <span
  m='1407000'>gives you</span> <span m='1407320'>theta</span> <span
  m='1407400'>n</span> <span m='1407480'>log n</span> <span
  m='1408580'>for</span> <span m='1408730'>compares.</span> <span
  m='1409380'>But</span> <span m='1409580'>it's</span> <span
  m='1409710'>still</span> <span m='1409870'>theta n squared</span> <span
  m='1410490'>for</span> <span m='1410650'>swaps.</span> <span
  m='1415000'>So</span> <span m='1415450'>as</span> <span m='1415560'>you</span>
  <span m='1415620'>can</span> <span m='1415700'>see,</span> <span
  m='1415990'>there's</span> <span m='1416360'>many</span> <span
  m='1416570'>varieties of</span> <span m='1417040'>sorting</span> <span
  m='1417350'>algorithms.</span> <span m='1417770'>We</span> <span
  m='1417870'>just</span> <span m='1418050'>looked</span> <span
  m='1418190'>at</span> <span m='1418250'>a</span> <span
  m='1418300'>couple</span> <span m='1418570'>of</span> <span
  m='1418660'>them.</span> <span m='1419850'>And</span> <span
  m='1420420'>they</span> <span m='1420520'>were</span> <span
  m='1420600'>both</span> <span m='1421990'>insertion</span> <span
  m='1422560'>sort.</span> </p><p><span m='1423010'>The</span> <span
  m='1423230'>second</span> <span m='1423540'>one</span> <span
  m='1424240'>that</span> <span m='1424350'>I</span> <span
  m='1424410'>just</span> <span m='1424580'>put</span> <span
  m='1424700'>up</span> <span m='1425040'>is,</span> <span m='1426010'>I</span>
  <span m='1426100'>guess,</span> <span m='1426250'>technically</span> <span
  m='1426670'>called</span> <span m='1426920'>binary</span> <span
  m='1427370'>insertion</span> <span m='1427840'>sort</span> <span
  m='1428900'>because</span> <span m='1429220'>it</span> <span
  m='1429310'>does</span> <span m='1429480'>binary</span> <span
  m='1429650'>search.</span> <span m='1430710'>And</span> <span
  m='1430960'>the</span> <span m='1431140'>vanilla</span> <span
  m='1432120'>insertion</span> <span m='1432540'>sort</span> <span
  m='1432900'>is</span> <span m='1433000'>the</span> <span
  m='1433090'>one</span> <span m='1433800'>that</span> <span
  m='1433980'>you</span> <span m='1434060'>have</span> <span
  m='1434210'>the</span> <span m='1434290'>code</span> <span
  m='1434540'>for</span> <span m='1434870'>in the</span> <span
  m='1434980'>doc</span> <span m='1435320'>dis</span> <span
  m='1435550'>program,</span> <span m='1436676'>or</span> <span m='1437030'>at
  least</span> <span m='1437170'>one</span> <span m='1437310'>of</span> <span
  m='1437390'>the</span> <span m='1437630'>doc</span> <span
  m='1437840'>dis</span> <span m='1438050'>files.</span> </p><p><span
  m='1439400'>So</span> <span m='1439550'>let's</span> <span
  m='1439660'>move</span> <span m='1439870'>on</span> <span
  m='1440380'>and</span> <span m='1441850'>talk</span> <span
  m='1442220'>about</span> <span m='1443530'>a</span> <span
  m='1443620'>different</span> <span m='1443920'>algorithm.</span> <span
  m='1444620'>So</span> <span m='1444760'>what</span> <span
  m='1444880'>we'd</span> <span m='1445000'>like</span> <span
  m='1445160'>to</span> <span m='1445250'>do,</span> <span
  m='1445380'>now--</span> <span m='1446450'>this</span> <span
  m='1446580'>class</span> <span m='1446830'>is</span> <span
  m='1446960'>about</span> <span m='1447050'>constant</span> <span
  m='1447460'>improvement.</span> <span m='1449120'>We're</span> <span
  m='1449530'>never</span> <span m='1449770'>happy.</span> <span
  m='1451480'>We</span> <span m='1451640'>always</span> <span
  m='1451940'>want</span> <span m='1452110'>to</span> <span
  m='1452180'>do</span> <span m='1452630'>a</span> <span
  m='1452700'>little</span> <span m='1452960'>bit</span> <span
  m='1453130'>better.</span> <span m='1454370'>And</span> <span
  m='1454530'>eventually,</span> <span m='1455640'>once</span> <span
  m='1455760'>we</span> <span m='1455850'>run</span> <span
  m='1456050'>out</span> <span m='1456180'>of</span> <span
  m='1456500'>room</span> <span m='1456910'>from</span> <span
  m='1457070'>an</span> <span m='1457150'>asymptotic</span> <span
  m='1457690'>standpoint,</span> <span m='1458190'>you</span> <span
  m='1458280'>take</span> <span m='1458440'>these</span> <span
  m='1458600'>other</span> <span m='1458780'>classes</span> <span
  m='1459190'>where</span> <span m='1459340'>you</span> <span
  m='1459450'>try</span> <span m='1459940'>and</span> <span
  m='1460010'>improve</span> <span m='1460320'>constant</span> <span
  m='1460740'>factors</span> <span m='1461250'>and</span> <span
  m='1461380'>get</span> <span m='1461580'>10%,</span> <span
  m='1462180'>and</span> <span m='1462620'>5%,</span> <span
  m='1463045'>and</span> <span m='1463470'>1%,</span> <span
  m='1464380'>and</span> <span m='1464540'>so</span> <span
  m='1464640'>on,</span> <span m='1464740'>and</span> <span
  m='1464830'>so</span> <span m='1464970'>forth.</span> </p><p><span
  m='1465560'>But</span> <span m='1465760'>we'll</span> <span
  m='1465920'>stick</span> <span m='1466220'>to</span> <span
  m='1467180'>improving</span> <span m='1469690'>asymptotic</span> <span
  m='1470230'>complexity.</span> <span m='1471200'>And</span> <span
  m='1471390'>we're not</span> <span m='1471630'>quite</span> <span
  m='1471870'>happy</span> <span m='1472250'>with</span> <span
  m='1473000'>binary</span> <span m='1473380'>insertion</span> <span
  m='1473800'>sort</span> <span m='1474190'>because,</span> <span
  m='1474420'>in</span> <span m='1474490'>the</span> <span
  m='1474570'>case</span> <span m='1474770'>of</span> <span
  m='1474860'>numbers,</span> <span m='1475960'>our</span> <span
  m='1476110'>binary</span> <span m='1476430'>insertion</span> <span
  m='1476760'>sort</span> <span m='1477050'>has</span> <span
  m='1477280'>theta</span> <span m='1477353'>n</span> <span
  m='1477426'>squared</span> <span m='1478600'>complexity,</span> <span
  m='1479290'>if</span> <span m='1479390'>you</span> <span
  m='1479490'>look</span> <span m='1479500'>at</span> <span
  m='1479580'>swaps.</span> <span m='1480770'>So</span> <span
  m='1480890'>we'd</span> <span m='1480990'>like</span> <span
  m='1481150'>to</span> <span m='1481240'>go</span> <span
  m='1481810'>find</span> <span m='1482050'>an</span> <span
  m='1482130'>algorithm</span> <span m='1482570'>that</span> <span
  m='1482720'>is</span> <span m='1482830'>theta</span> <span
  m='1482915'>n</span> <span m='1483000'>log n.</span> </p><p><span
  m='1484810'>And</span> <span m='1486900'>I</span> <span
  m='1486990'>guess,</span> <span m='1487390'>eventually,</span> <span
  m='1487810'>we'll</span> <span m='1488540'>have</span> <span
  m='1488740'>to</span> <span m='1488850'>stop.</span> <span
  m='1489600'>But</span> <span m='1490090'>Erik</span> <span
  m='1490330'>will</span> <span m='1490490'>take</span> <span
  m='1490650'>care</span> <span m='1490800'>of</span> <span
  m='1490910'>that.</span> <span m='1493900'>There's</span> <span
  m='1494100'>a</span> <span m='1494140'>reason</span> <span
  m='1494420'>to</span> <span m='1494500'>stop.</span> <span
  m='1494970'>It's</span> <span m='1495380'>when</span> <span
  m='1496150'>you</span> <span m='1496310'>can</span> <span
  m='1496410'>prove</span> <span m='1496790'>that</span> <span
  m='1496880'>you</span> <span m='1496970'>can't</span> <span
  m='1497170'>do</span> <span m='1497270'>any</span> <span
  m='1497410'>better.</span> <span m='1498620'>And</span> <span
  m='1498790'>so</span> <span m='1498890'>we'll</span> <span
  m='1499010'>get</span> <span m='1499160'>to</span> <span
  m='1499230'>that,</span> <span m='1499520'>eventually.</span> </p><p><span
  m='1501210'>So</span> <span m='1501290'>merge</span> <span
  m='1501640'>sort</span> <span m='1502190'>is</span> <span
  m='1502340'>also</span> <span m='1502590'>something</span> <span
  m='1502950'>that</span> <span m='1503080'>you've</span> <span
  m='1503230'>probably</span> <span m='1504410'>seen.</span> <span
  m='1507330'>But</span> <span m='1507970'>there</span> <span
  m='1508140'>probably</span> <span m='1508430'>will be</span> <span
  m='1508550'>a</span> <span m='1508610'>couple of</span> <span
  m='1508860'>subtleties</span> <span m='1509460'>that</span> <span
  m='1510020'>come</span> <span m='1510190'>out</span> <span
  m='1510880'>as</span> <span m='1511060'>I</span> <span
  m='1511120'>describe</span> <span m='1511500'>this</span> <span
  m='1511670'>algorithm</span> <span m='1512070'>that,</span> <span
  m='1512440'>hopefully,</span> <span m='1512740'>will</span> <span
  m='1512870'>be</span> <span m='1513000'>interesting</span> <span
  m='1513650'>to</span> <span m='1513940'>those</span> <span
  m='1514140'>of</span> <span m='1514240'>you</span> <span
  m='1514790'>who</span> <span m='1514990'>already</span> <span
  m='1515340'>know</span> <span m='1515630'>merge</span> <span
  m='1515990'>sort.</span> <span m='1516810'>And for</span> <span
  m='1517140'>those</span> <span m='1517400'>of</span> <span
  m='1517500'>you</span> <span m='1517660'>who</span> <span
  m='1517760'>don't,</span> <span m='1518350'>it's</span> <span
  m='1518550'>a</span> <span m='1518590'>very</span> <span
  m='1518950'>pretty</span> <span m='1519240'>algorithm.</span> </p><p><span
  m='1521030'>It's</span> <span m='1522170'>a</span> <span
  m='1522240'>standard</span> <span m='1523230'>recursion</span> <span
  m='1525890'>algorithm--</span> <span m='1526550'>recursive</span> <span
  m='1526930'>algorithm--</span> <span m='1528220'>similar</span> <span
  m='1528620'>to</span> <span m='1528940'>a</span> <span
  m='1529060'>binary</span> <span m='1529410'>search.</span> <span
  m='1530620'>What</span> <span m='1530760'>we</span> <span
  m='1530860'>do,</span> <span m='1530980'>here,</span> <span
  m='1531440'>is</span> <span m='1531710'>we have</span> <span m='1532185'>an
  array,</span> <span m='1532660'>A.</span> <span m='1533135'>We</span> <span
  m='1533610'>split</span> <span m='1533935'>it</span> <span
  m='1534780'>into</span> <span m='1535000'>two</span> <span
  m='1535170'>parts,</span> <span m='1536320'>L</span> <span
  m='1537200'>and</span> <span m='1537430'>R.</span> <span
  m='1539680'>And</span> <span m='1540720'>essentially,</span> <span
  m='1541780'>we kind of do</span> <span m='1542200'>no</span> <span
  m='1542420'>work,</span> <span m='1542830'>really.</span> </p><p><span
  m='1543950'>In</span> <span m='1544450'>terms</span> <span
  m='1544790'>of</span> <span m='1545620'>the</span> <span m='1545990'>L
  and</span> <span m='1546360'>R</span> <span m='1547210'>in</span> <span
  m='1547330'>the</span> <span m='1547420'>sense</span> <span
  m='1547730'>that</span> <span m='1548870'>we</span> <span
  m='1549020'>just</span> <span m='1549280'>call,</span> <span
  m='1549850'>we</span> <span m='1549960'>keep</span> <span
  m='1550130'>splitting,</span> <span m='1550470'>splitting,</span> <span
  m='1550770'>splitting.</span> <span m='1551480'>And</span> <span
  m='1551610'>all</span> <span m='1551830'>the</span> <span
  m='1551910'>work</span> <span m='1552270'>is</span> <span
  m='1552430'>done</span> <span m='1552680'>down</span> <span
  m='1552900'>at</span> <span m='1552960'>the</span> <span
  m='1553040'>bottom</span> <span m='1554020'>in</span> <span
  m='1554040'>this</span> <span m='1554210'>routine</span> <span
  m='1554670'>called</span> <span m='1554960'>merge,</span> <span
  m='1555830'>where</span> <span m='1556110'>we</span> <span
  m='1556250'>are</span> <span m='1556350'>merging</span> <span
  m='1557570'>a</span> <span m='1557740'>pair</span> <span m='1558080'>of</span>
  <span m='1558190'>elements</span> <span m='1558920'>at</span> <span
  m='1559080'>the</span> <span m='1559170'>leaves.</span> <span
  m='1560110'>And</span> <span m='1560280'>then,</span> <span
  m='1560460'>we</span> <span m='1560600'>merge</span> <span
  m='1561850'>two</span> <span m='1562220'>pairs</span> <span
  m='1563470'>and</span> <span m='1563650'>get</span> <span
  m='1563800'>four</span> <span m='1564020'>elements.</span> <span
  m='1564490'>And</span> <span m='1564620'>then</span> <span
  m='1564750'>we</span> <span m='1564860'>merge</span> <span
  m='1567020'>four</span> <span m='1567290'>tuples</span> <span
  m='1567700'>of</span> <span m='1567800'>elements,</span> <span
  m='1568170'>et</span> <span m='1568280'>cetera,</span> <span
  m='1568630'>and</span> <span m='1568840'>go</span> <span
  m='1568990'>all</span> <span m='1569110'>the</span> <span
  m='1569190'>way</span> <span m='1569330'>up.</span> </p><p><span
  m='1570080'>So</span> <span m='1570780'>while</span> <span
  m='1571010'>I'm</span> <span m='1571200'>just</span> <span
  m='1571750'>saying</span> <span m='1572250'>L</span> <span
  m='1572570'>terms</span> <span m='1572930'>into</span> <span
  m='1574190'>L</span> <span m='1574410'>prime,</span> <span
  m='1576660'>out</span> <span m='1576860'>here,</span> <span
  m='1578990'>there's</span> <span m='1579220'>no</span> <span
  m='1579510'>real</span> <span m='1579730'>explicit</span> <span
  m='1580270'>code</span> <span m='1580750'>that</span> <span
  m='1580880'>you</span> <span m='1580990'>can</span> <span
  m='1581400'>see</span> <span m='1582130'>that</span> <span
  m='1582350'>turns</span> <span m='1582640'>L</span> <span
  m='1582840'>into</span> <span m='1583000'>L</span> <span
  m='1583160'>prime.</span> <span m='1583870'>It</span> <span
  m='1584000'>happens</span> <span m='1584800'>really</span> <span
  m='1585050'>later.</span> <span m='1585630'>There's</span> <span
  m='1585810'>no</span> <span m='1585990'>real</span> <span
  m='1586210'>sorting</span> <span m='1586640'>code,</span> <span
  m='1586890'>here.</span> <span m='1587190'>It</span> <span
  m='1587290'>happens</span> <span m='1587530'>in</span> <span
  m='1587610'>the</span> <span m='1587680'>merge</span> <span
  m='1588080'>routine.</span> <span m='1588790'>And</span> <span
  m='1589120'>you'll</span> <span m='1589300'>see</span> <span
  m='1589450'>that</span> <span m='1590120'>quite</span> <span
  m='1590380'>clearly</span> <span m='1590890'>when</span> <span
  m='1591080'>we</span> <span m='1591180'>run</span> <span
  m='1591350'>through</span> <span m='1591470'>an</span> <span
  m='1591550'>example.</span> </p><p><span m='1594960'>So</span> <span
  m='1595690'>you</span> <span m='1595810'>have</span> <span m='1596710'>L
  and</span> <span m='1597000'>R</span> <span m='1597290'>turn</span> <span
  m='1597560'>into</span> <span m='1599540'>L prime</span> <span
  m='1599810'>and</span> <span m='1599880'>R</span> <span
  m='1600020'>prime.</span> <span m='1601500'>And</span> <span
  m='1601980'>what</span> <span m='1602150'>we</span> <span m='1602250'>end
  up</span> <span m='1602480'>getting</span> <span m='1602810'>is</span> <span
  m='1604810'>a</span> <span m='1604920'>sorted</span> <span
  m='1605380'>array,</span> <span m='1610860'>A.</span> <span
  m='1612310'>And</span> <span m='1612710'>we</span> <span
  m='1612840'>have</span> <span m='1613550'>what's</span> <span
  m='1613760'>called</span> <span m='1613920'>a</span> <span
  m='1613980'>merge</span> <span m='1614390'>routine</span> <span
  m='1618390'>that</span> <span m='1618900'>takes</span> <span
  m='1619190'>L</span> <span m='1619390'>prime and</span> <span
  m='1619790'>R</span> <span m='1619930'>prime</span> <span
  m='1620360'>and</span> <span m='1620500'>merges</span> <span
  m='1620860'>them</span> <span m='1621110'>into</span> <span
  m='1621320'>the</span> <span m='1621550'>sorted array.</span> </p><p><span
  m='1622400'>So</span> <span m='1622550'>at the</span> <span
  m='1622680'>top</span> <span m='1622950'>level,</span> <span
  m='1623860'>what</span> <span m='1624050'>you</span> <span
  m='1624150'>see</span> <span m='1624900'>is</span> <span
  m='1627140'>split</span> <span m='1627520'>into</span> <span
  m='1627730'>two,</span> <span m='1629270'>and</span> <span
  m='1630610'>do</span> <span m='1630750'>a</span> <span m='1630810'>merge,
  and</span> <span m='1631310'>get</span> <span m='1631470'>to</span> <span
  m='1631540'>the</span> <span m='1631700'>sorted</span> <span
  m='1631890'>array.</span> <span m='1633280'>The</span> <span
  m='1633590'>input</span> <span m='1633900'>is</span> <span
  m='1634040'>of</span> <span m='1634150'>size</span> <span
  m='1634530'>n.</span> <span m='1636680'>You</span> <span
  m='1636820'>have</span> <span m='1637820'>two</span> <span
  m='1638130'>arrays</span> <span m='1641180'>of</span> <span
  m='1641270'>size</span> <span m='1642750'>n</span> <span
  m='1642930'>over</span> <span m='1643150'>2.</span> <span
  m='1644690'>These</span> <span m='1644960'>are</span> <span
  m='1645080'>two</span> <span m='1645330'>sorted</span> <span
  m='1645780'>arrays</span> <span m='1650875'>of</span> <span
  m='1651340'>size</span> <span m='1651710'>n</span> <span
  m='1651840'>over</span> <span m='1652030'>2.</span> <span
  m='1653210'>And</span> <span m='1653340'>then,</span> <span
  m='1653480'>finally,</span> <span m='1653840'>you</span> <span
  m='1653900'>have</span> <span m='1654050'>a</span> <span
  m='1654110'>sorted</span> <span m='1654350'>array</span> <span
  m='1658720'>of</span> <span m='1658850'>size</span> <span
  m='1659190'>n.</span> </p><p><span m='1662410'>So</span> <span
  m='1662550'>if</span> <span m='1662600'>you</span> <span
  m='1662710'>want</span> <span m='1662840'>to</span> <span
  m='1662880'>follow</span> <span m='1663170'>the</span> <span
  m='1663300'>recursive</span> <span m='1663630'>of</span> <span
  m='1663730'>execution</span> <span m='1664240'>of</span> <span
  m='1664350'>this</span> <span m='1664580'>in</span> <span m='1664670'>a</span>
  <span m='1664730'>small</span> <span m='1665090'>example,</span> <span
  m='1668270'>then</span> <span m='1669700'>you'll</span> <span
  m='1669870'>be</span> <span m='1669980'>able</span> <span
  m='1670100'>to</span> <span m='1670170'>see</span> <span
  m='1673030'>how</span> <span m='1673220'>this</span> <span
  m='1673380'>works.</span> <span m='1673790'>And</span> <span
  m='1673940'>we'll</span> <span m='1674050'>do</span> <span
  m='1674230'>a</span> <span m='1674990'>fairly</span> <span
  m='1675270'>straightforward</span> <span m='1675730'>example</span> <span
  m='1676120'>with</span> <span m='1677220'>8</span> <span
  m='1677390'>elements.</span> <span m='1678200'>So</span> <span
  m='1678420'>at</span> <span m='1678490'>the</span> <span
  m='1679020'>top</span> <span m='1679290'>level--</span> <span
  m='1681170'>before</span> <span m='1681410'>we</span> <span
  m='1681530'>get</span> <span m='1681730'>there,</span> <span
  m='1682570'>merge</span> <span m='1683180'>is</span> <span
  m='1683390'>going</span> <span m='1683670'>to</span> <span
  m='1684530'>assume</span> <span m='1684980'>that</span> <span
  m='1685130'>you</span> <span m='1685220'>have</span> <span
  m='1685510'>two</span> <span m='1685760'>sorted</span> <span
  m='1686180'>arrays,</span> <span m='1688640'>and</span> <span
  m='1689040'>merge them</span> <span m='1689440'>together.</span> <span
  m='1691700'>That's</span> <span m='1691980'>the invariant</span> <span
  m='1692960'>in</span> <span m='1693130'>merge</span> <span
  m='1693410'>sort,</span> <span m='1694760'>or</span> <span
  m='1694920'>for</span> <span m='1695000'>the</span> <span
  m='1695090'>merge</span> <span m='1695360'>routine.</span> <span
  m='1695960'>It</span> <span m='1696060'>assumes</span> <span
  m='1696590'>the</span> <span m='1696690'>inputs</span> <span
  m='1697060'>are</span> <span m='1697760'>sorted--</span> <span m='1698230'>L
  and R.</span> <span m='1699250'>Actually</span> <span m='1699570'>I</span>
  <span m='1699620'>should</span> <span m='1699810'>say,</span> <span
  m='1700420'>L</span> <span m='1700610'>prime</span> <span
  m='1700950'>and</span> <span m='1701060'>R</span> <span
  m='1701190'>prime.</span> </p><p><span m='1702800'>So</span> <span
  m='1702970'>let's</span> <span m='1703070'>say you</span> <span
  m='1703360'>have</span> <span m='1703410'>20,</span> <span
  m='1704712'>13,</span> <span m='1706120'>7,</span> <span
  m='1706580'>and</span> <span m='1706760'>2.</span> <span m='1707624'>You
  have</span> <span m='1708056'>12,</span> <span m='1708920'>11,</span> <span
  m='1709790'>9,</span> <span m='1710130'>and</span> <span m='1710250'>1.</span>
  <span m='1711320'>And</span> <span m='1711500'>this</span> <span
  m='1711660'>could</span> <span m='1711800'>be</span> <span
  m='1711940'>L</span> <span m='1712100'>prime.</span> <span
  m='1713400'>And</span> <span m='1713510'>this</span> <span
  m='1713660'>could</span> <span m='1713790'>be</span> <span
  m='1713910'>R</span> <span m='1714060'>prime.</span> <span
  m='1716840'>What</span> <span m='1716960'>you</span> <span
  m='1717060'>have</span> <span m='1717360'>is</span> <span
  m='1717470'>what</span> <span m='1717610'>we</span> <span
  m='1717700'>call</span> <span m='1717900'>a</span> <span
  m='1718000'>two</span> <span m='1718160'>finger</span> <span
  m='1718550'>algorithm.</span> </p><p><span m='1719650'>And</span> <span
  m='1719820'>so</span> <span m='1719960'>you've</span> <span
  m='1720070'>got</span> <span m='1720230'>two</span> <span
  m='1720360'>fingers</span> <span m='1721660'>and</span> <span
  m='1721890'>each</span> <span m='1722100'>of</span> <span
  m='1722200'>them</span> <span m='1722380'>point</span> <span
  m='1722820'>to</span> <span m='1723370'>something.</span> <span
  m='1724600'>And</span> <span m='1724660'>in</span> <span
  m='1724720'>this</span> <span m='1724880'>case,</span> <span
  m='1725120'>one</span> <span m='1725280'>of</span> <span
  m='1725330'>them</span> <span m='1725440'>is</span> <span
  m='1725530'>pointing</span> <span m='1725870'>to</span> <span
  m='1725990'>L.</span> <span m='1726355'>My</span> <span
  m='1726720'>left</span> <span m='1726940'>finger is</span> <span
  m='1727340'>pointing</span> <span m='1727610'>to</span> <span
  m='1728340'>L</span> <span m='1728520'>prime,</span> <span
  m='1729190'>or</span> <span m='1729310'>some</span> <span
  m='1729520'>element</span> <span m='1729860'>L</span> <span
  m='1729960'>prime.</span> <span m='1730800'>My</span> <span
  m='1730880'>right</span> <span m='1731100'>finger is</span> <span
  m='1731460'>pointing</span> <span m='1731780'>to</span> <span
  m='1731980'>some</span> <span m='1732080'>element</span> <span
  m='1732400'>in</span> <span m='1732520'>R</span> <span
  m='1732670'>prime.</span> </p><p><span m='1733850'>And</span> <span
  m='1734250'>I'm</span> <span m='1734390'>going</span> <span
  m='1734490'>to</span> <span m='1734540'>compare</span> <span
  m='1735630'>the</span> <span m='1736180'>two</span> <span
  m='1736410'>elements</span> <span m='1736820'>that</span> <span
  m='1736950'>my</span> <span m='1737060'>fingers</span> <span
  m='1737470'>are</span> <span m='1737530'>pointing</span> <span
  m='1737940'>to.</span> <span m='1738740'>And</span> <span
  m='1739130'>I'm</span> <span m='1739280'>going</span> <span
  m='1739530'>to</span> <span m='1740430'>choose,</span> <span
  m='1741540'>in</span> <span m='1741680'>this</span> <span
  m='1741870'>case,</span> <span m='1742170'>the</span> <span
  m='1742360'>smaller</span> <span m='1742690'>of</span> <span
  m='1742790'>those</span> <span m='1743000'>elements.</span> <span
  m='1743840'>And</span> <span m='1743980'>I'm</span> <span
  m='1744050'>going</span> <span m='1744160'>to</span> <span
  m='1744220'>put</span> <span m='1744370'>them</span> <span
  m='1744850'>into</span> <span m='1745740'>the</span> <span
  m='1746090'>sorted</span> <span m='1746560'>array.</span> </p><p><span
  m='1747790'>So</span> <span m='1748420'>start</span> <span
  m='1748700'>out</span> <span m='1748860'>here.</span> <span
  m='1750970'>Look</span> <span m='1751110'>at</span> <span
  m='1751190'>that</span> <span m='1751540'>and</span> <span
  m='1751690'>that.</span> <span m='1752480'>And I</span> <span
  m='1752560'>compared</span> <span m='1753120'>2</span> <span m='1753350'>and
  1.</span> <span m='1754340'>And</span> <span m='1754570'>which</span> <span
  m='1754690'>is</span> <span m='1754740'>smaller?</span> <span
  m='1755140'>1</span> <span m='1755350'>is</span> <span
  m='1755440'>smaller.</span> <span m='1756310'>So</span> <span
  m='1756560'>I'm</span> <span m='1756690'>going</span> <span
  m='1756800'>to</span> <span m='1756860'>write</span> <span
  m='1757720'>1</span> <span m='1758070'>down.</span> <span
  m='1759130'>This</span> <span m='1759350'>is</span> <span m='1759540'>a</span>
  <span m='1761820'>two</span> <span m='1762020'>finger</span> <span
  m='1762370'>algo</span> <span m='1762510'>for</span> <span
  m='1762720'>merge.</span> <span m='1763720'>And</span> <span
  m='1763730'>I</span> <span m='1763770'>put</span> <span m='1763940'>1</span>
  <span m='1764180'>down.</span> </p><p><span m='1764880'>When</span> <span
  m='1765010'>I</span> <span m='1765060'>put</span> <span m='1765200'>1</span>
  <span m='1765440'>down,</span> <span m='1765690'>I had</span> <span
  m='1765920'>to cross</span> <span m='1766290'>out</span> <span
  m='1766530'>1.</span> <span m='1767380'>So</span> <span
  m='1767520'>effectively,</span> <span m='1768060'>what</span> <span
  m='1768180'>happens</span> <span m='1768530'>is--</span> <span m='1769370'>let
  me</span> <span m='1769420'>just</span> <span m='1769570'>circle</span> <span
  m='1769860'>that</span> <span m='1770420'>instead</span> <span m='1770520'>of
  crossing</span> <span m='1770820'>it</span> <span m='1770890'>out.</span>
  <span m='1771460'>And</span> <span m='1771600'>my</span> <span
  m='1771720'>finger</span> <span m='1772200'>moves</span> <span
  m='1772510'>up</span> <span m='1773470'>to</span> <span m='1774080'>9.</span>
  <span m='1775450'>So</span> <span m='1775560'>now</span> <span
  m='1775680'>I'm</span> <span m='1775810'>pointing</span> <span
  m='1776670'>at</span> <span m='1776910'>2</span> <span m='1777130'>and</span>
  <span m='1777290'>9.</span> <span m='1778110'>And</span> <span
  m='1778270'>I</span> <span m='1778350'>repeat</span> <span
  m='1778670'>this</span> <span m='1778830'>step.</span> </p><p><span
  m='1780080'>So</span> <span m='1780170'>now,</span> <span
  m='1780280'>in</span> <span m='1780380'>this</span> <span
  m='1780530'>case,</span> <span m='1780760'>2 is</span> <span
  m='1781010'>smaller.</span> <span m='1781870'>So</span> <span
  m='1782010'>I'm</span> <span m='1782160'>going</span> <span
  m='1782270'>to</span> <span m='1782310'>go</span> <span
  m='1782410'>ahead</span> <span m='1782590'>and</span> <span
  m='1782670'>write</span> <span m='1782940'>2</span> <span
  m='1783100'>down.</span> <span m='1784040'>And</span> <span
  m='1784800'>I</span> <span m='1784910'>can</span> <span
  m='1785030'>cross</span> <span m='1785310'>out</span> <span
  m='1785730'>2</span> <span m='1786420'>and</span> <span
  m='1786590'>move</span> <span m='1786700'>my</span> <span
  m='1786830'>finger</span> <span m='1787110'>up</span> <span
  m='1787320'>to</span> <span m='1787880'>7.</span> <span m='1789420'>And</span>
  <span m='1789580'>so</span> <span m='1789670'>that's</span> <span
  m='1789860'>it.</span> <span m='1790840'>I</span> <span
  m='1790940'>won't</span> <span m='1791290'>bore</span> <span
  m='1791610'>you</span> <span m='1791740'>with</span> <span
  m='1791970'>the</span> <span m='1792670'>rest</span> <span
  m='1793000'>of</span> <span m='1793070'>the</span> <span
  m='1793160'>steps.</span> </p><p><span m='1794010'>It's</span> <span
  m='1794310'>essentially</span> <span m='1795380'>walking</span> <span
  m='1795790'>up.</span> <span m='1796440'>You</span> <span
  m='1796550'>have</span> <span m='1796650'>a</span> <span m='1796710'>couple
  of</span> <span m='1796990'>pointers</span> <span m='1797590'>and</span> <span
  m='1797680'>you're</span> <span m='1797780'>walking</span> <span
  m='1798150'>up</span> <span m='1798600'>these</span> <span
  m='1798830'>two</span> <span m='1799110'>arrays.</span> <span
  m='1799920'>And</span> <span m='1800150'>you're writing</span> <span
  m='1800470'>down</span> <span m='1800800'>1, 2,</span> <span
  m='1801258'>7,</span> <span m='1801716'>9,</span> <span m='1802632'>11,</span>
  <span m='1803090'>12,</span> <span m='1804006'>13,</span> <span
  m='1804922'>20.</span> <span m='1807230'>And</span> <span
  m='1807400'>that's</span> <span m='1807570'>your</span> <span
  m='1807710'>merge</span> <span m='1808090'>routine.</span> </p><p><span
  m='1808730'>And</span> <span m='1808880'>all</span> <span
  m='1809180'>of</span> <span m='1809260'>the</span> <span
  m='1809350'>work,</span> <span m='1809670'>really,</span> <span
  m='1810580'>is</span> <span m='1810810'>done</span> <span
  m='1811130'>in</span> <span m='1811260'>the</span> <span
  m='1811330'>merge</span> <span m='1811720'>routine</span> <span
  m='1812330'>because,</span> <span m='1813210'>other</span> <span
  m='1813410'>than</span> <span m='1813540'>that,</span> <span
  m='1813780'>the</span> <span m='1813860'>body</span> <span
  m='1814760'>is</span> <span m='1814920'>simply</span> <span
  m='1815460'>a</span> <span m='1815520'>recursive</span> <span
  m='1816070'>call.</span> <span m='1816620'>You</span> <span
  m='1816700'>have</span> <span m='1816860'>to,</span> <span
  m='1817010'>obviously,</span> <span m='1817280'>split</span> <span
  m='1817590'>the</span> <span m='1817660'>array.</span> <span
  m='1818420'>But</span> <span m='1818530'>that's</span> <span
  m='1818710'>fairly</span> <span m='1819010'>straightforward.</span>
  </p><p><span m='1820110'>If</span> <span m='1820230'>you</span> <span
  m='1820310'>have</span> <span m='1820470'>an</span> <span
  m='1820550'>array,</span> <span m='1821850'>A</span> <span
  m='1822150'>0</span> <span m='1822440'>through</span> <span
  m='1823340'>n--</span> <span m='1824130'>and</span> <span
  m='1824290'>depending</span> <span m='1824540'>on</span> <span
  m='1824600'>whether</span> <span m='1824840'>n</span> <span
  m='1825010'>is</span> <span m='1826940'>odd</span> <span m='1827150'>or</span>
  <span m='1827310'>even--</span> <span m='1828060'>you</span> <span
  m='1828190'>could</span> <span m='1828300'>imagine</span> <span
  m='1828740'>that</span> <span m='1829640'>you</span> <span
  m='1829790'>set</span> <span m='1831980'>L</span> <span m='1833321'>to</span>
  <span m='1833770'>be</span> <span m='1834890'>A</span> <span
  m='1836050'>0</span> <span m='1836450'>n</span> <span m='1836730'>by</span>
  <span m='1836900'>2</span> <span m='1837290'>minus</span> <span
  m='1837590'>1,</span> <span m='1838530'>and</span> <span m='1838730'>R</span>
  <span m='1839820'>similarly.</span> <span m='1841420'>And</span> <span
  m='1841600'>so</span> <span m='1841680'>you</span> <span
  m='1841800'>just</span> <span m='1841990'>split</span> <span
  m='1842160'>it</span> <span m='1842500'>halfway</span> <span
  m='1842950'>in</span> <span m='1843040'>the</span> <span
  m='1843100'>middle.</span> <span m='1844600'>I'll</span> <span
  m='1844710'>talk</span> <span m='1844890'>about</span> <span
  m='1845060'>that</span> <span m='1845200'>a</span> <span
  m='1845250'>little</span> <span m='1845350'>bit</span> <span
  m='1845490'>more.</span> <span m='1845710'>There's</span> <span
  m='1845920'>a</span> <span m='1846000'>subtlety</span> <span
  m='1846450'>associated</span> <span m='1846860'>with</span> <span
  m='1846990'>that</span> <span m='1847320'>that</span> <span
  m='1847450'>we'll</span> <span m='1847590'>get</span> <span
  m='1847790'>to</span> <span m='1848940'>in</span> <span m='1849600'>a</span>
  <span m='1850260'>few</span> <span m='1850460'>minutes.</span> </p><p><span
  m='1851200'>But</span> <span m='1851510'>to</span> <span
  m='1851620'>finish</span> <span m='1851930'>up</span> <span
  m='1852130'>in</span> <span m='1852260'>terms</span> <span
  m='1852510'>of</span> <span m='1852630'>the</span> <span
  m='1852850'>computation</span> <span m='1854150'>of</span> <span
  m='1854240'>merge</span> <span m='1854586'>sort.</span> <span
  m='1855280'>This</span> <span m='1855470'>is</span> <span
  m='1855630'>it.</span> <span m='1856110'>The</span> <span m='1856230'>merge
  routine</span> <span m='1857410'>is</span> <span m='1857610'>doing</span>
  <span m='1859340'>most,</span> <span m='1859640'>if</span> <span
  m='1859720'>not</span> <span m='1859900'>all,</span> <span
  m='1860070'>of</span> <span m='1860160'>the</span> <span
  m='1860240'>work.</span> <span m='1860920'>And</span> <span
  m='1861130'>this</span> <span m='1861290'>two</span> <span
  m='1861430'>finger</span> <span m='1861740'>algorithm</span> <span
  m='1862140'>is</span> <span m='1862250'>going</span> <span
  m='1862410'>to</span> <span m='1862480'>be</span> <span
  m='1862620'>able</span> <span m='1862750'>to</span> <span
  m='1862840'>take</span> <span m='1863110'>two</span> <span
  m='1863270'>sorted</span> <span m='1863640'>arrays</span> <span
  m='1864630'>and</span> <span m='1865570'>put</span> <span
  m='1865730'>them</span> <span m='1865850'>into</span> <span
  m='1867910'>a</span> <span m='1868070'>single</span> <span
  m='1868410'>sorted</span> <span m='1868730'>array</span> <span
  m='1869550'>by</span> <span m='1869750'>interspersing,</span> <span
  m='1870840'>or</span> <span m='1870940'>interleaving,</span> <span
  m='1871720'>these</span> <span m='1871960'>elements.</span> <span
  m='1873150'>And</span> <span m='1873300'>what's</span> <span
  m='1873470'>the</span> <span m='1873550'>complexity</span> <span
  m='1874000'>of merge</span> <span m='1875000'>if</span> <span
  m='1876080'>I</span> <span m='1876210'>have</span> <span
  m='1876800'>two</span> <span m='1876980'>arrays</span> <span
  m='1877250'>of</span> <span m='1877340'>size</span> <span m='1877680'>n</span>
  <span m='1877810'>over</span> <span m='1878000'>2,</span> <span
  m='1878180'>here?</span> <span m='1878710'>What</span> <span m='1879070'>do
  I</span> <span m='1879150'>have?</span> </p><p><span m='1881810'>AUDIENCE:
  n.</span> </p><p><span m='1882590'>PROFESSOR: n.</span> <span
  m='1883900'>We'll give</span> <span m='1884350'>you a cushion,</span> <span
  m='1884690'>too.</span> <span m='1888050'>theta n</span> <span
  m='1888900'>complexity.</span> <span m='1895470'>So</span> <span
  m='1895670'>far</span> <span m='1895830'>so</span> <span
  m='1895960'>good.</span> </p><p><span m='1898830'>I</span> <span
  m='1898950'>know</span> <span m='1899360'>you</span> <span
  m='1899450'>know</span> <span m='1899890'>the</span> <span
  m='1900130'>answer</span> <span m='1901140'>as</span> <span
  m='1901340'>to</span> <span m='1901440'>what</span> <span
  m='1901640'>the</span> <span m='1901730'>complexity</span> <span
  m='1902010'>of</span> <span m='1902290'>merge</span> <span
  m='1902380'>sort</span> <span m='1902830'>is.</span> <span
  m='1903550'>But</span> <span m='1903700'>I'm</span> <span
  m='1903850'>guessing</span> <span m='1904310'>that</span> <span
  m='1904630'>most</span> <span m='1904940'>of</span> <span
  m='1905030'>you</span> <span m='1905180'>won't</span> <span
  m='1905360'>be</span> <span m='1905420'>able</span> <span
  m='1905550'>to</span> <span m='1905610'>prove</span> <span
  m='1905890'>it</span> <span m='1905990'>to</span> <span m='1906080'>me</span>
  <span m='1906680'>because</span> <span m='1907010'>I'm</span> <span
  m='1907140'>kind</span> <span m='1907260'>of</span> <span m='1907320'>a</span>
  <span m='1907340'>hard</span> <span m='1907650'>guy</span> <span
  m='1907900'>to</span> <span m='1908040'>prove</span> <span
  m='1908260'>something</span> <span m='1908560'>to.</span> <span
  m='1910920'>And</span> <span m='1911110'>I</span> <span
  m='1911180'>could</span> <span m='1911280'>always</span> <span
  m='1911450'>say,</span> <span m='1911590'>no,</span> <span
  m='1912450'>I</span> <span m='1912540'>don't</span> <span
  m='1912700'>believe</span> <span m='1912970'>you or</span> <span m='1913110'>I
  don't understand.</span> </p><p><span m='1917960'>The</span> <span
  m='1918090'>complexity--</span> <span m='1918620'>and</span> <span
  m='1919100'>you've</span> <span m='1919280'>said</span> <span
  m='1919490'>this</span> <span m='1919620'>before,</span> <span
  m='1919980'>in</span> <span m='1920060'>class,</span> <span
  m='1920880'>and</span> <span m='1921020'>I</span> <span
  m='1921080'>think</span> <span m='1921250'>Erik's</span> <span
  m='1921510'>mentioned</span> <span m='1921910'>it--</span> <span
  m='1922580'>the</span> <span m='1922730'>overall</span> <span
  m='1923110'>complexity</span> <span m='1923680'>of</span> <span
  m='1923750'>this</span> <span m='1923910'>algorithm</span> <span
  m='1924820'>is</span> <span m='1925360'>theta</span> <span
  m='1925453'>n</span> <span m='1925546'>log n</span> <span
  m='1928370'>And</span> <span m='1928570'>where</span> <span
  m='1928700'>does</span> <span m='1928800'>that</span> <span
  m='1928980'>come</span> <span m='1929150'>from?</span> <span
  m='1929810'>How</span> <span m='1930000'>do</span> <span
  m='1930060'>you</span> <span m='1930200'>prove</span> <span
  m='1930790'>that?</span> </p><p><span m='1931790'>And</span> <span
  m='1931960'>so</span> <span m='1932160'>what</span> <span
  m='1932350'>we'll</span> <span m='1932450'>do,</span> <span
  m='1932720'>now,</span> <span m='1933780'>is</span> <span
  m='1934530'>take</span> <span m='1934720'>a</span> <span
  m='1934780'>look</span> <span m='1935020'>at</span> <span
  m='1935950'>merge</span> <span m='1936380'>sort.</span> <span
  m='1936840'>And</span> <span m='1937110'>we'll</span> <span
  m='1937940'>look</span> <span m='1938250'>at</span> <span
  m='1938310'>the</span> <span m='1938400'>recursion</span> <span
  m='1938860'>tree.</span> <span m='1939310'>And</span> <span m='1939440'>we'll
  try</span> <span m='1939890'>and--</span> <span m='1940310'>there</span> <span
  m='1940470'>are many ways of</span> <span m='1940770'>proving</span> <span
  m='1941210'>that</span> <span m='1941340'>merge</span> <span
  m='1941520'>sort</span> <span m='1941770'>is</span> <span
  m='1941830'>theta</span> <span m='1941900'>n</span> <span m='1941970'>log
  n.</span> </p><p><span m='1943370'>The</span> <span m='1943520'>way</span>
  <span m='1943710'>we're</span> <span m='1943820'>going</span> <span
  m='1943970'>to</span> <span m='1944040'>do</span> <span
  m='1944170'>this</span> <span m='1944470'>is</span> <span
  m='1945860'>what's</span> <span m='1946100'>called</span> <span
  m='1946550'>proof</span> <span m='1946900'>by</span> <span
  m='1947050'>picture.</span> <span m='1948640'>And</span> <span
  m='1949080'>it's</span> <span m='1949300'>not</span> <span
  m='1949700'>an</span> <span m='1949970'>established</span> <span
  m='1950760'>proof</span> <span m='1951030'>technique,</span> <span
  m='1952290'>but</span> <span m='1952560'>it's</span> <span
  m='1952710'>something</span> <span m='1953050'>that</span> <span
  m='1954190'>is</span> <span m='1954330'>very</span> <span
  m='1954560'>helpful</span> <span m='1955020'>to</span> <span
  m='1955110'>get</span> <span m='1955390'>an</span> <span
  m='1955950'>intuition</span> <span m='1956540'>behind</span> <span
  m='1957740'>the</span> <span m='1957810'>proof</span> <span
  m='1958100'>and</span> <span m='1958280'>why</span> <span
  m='1958910'>the</span> <span m='1959040'>result</span> <span
  m='1959380'>is</span> <span m='1959520'>true.</span> <span
  m='1960900'>And</span> <span m='1961020'>you</span> <span
  m='1961110'>can</span> <span m='1961220'>always</span> <span
  m='1961440'>take</span> <span m='1961640'>that</span> <span
  m='1961810'>and</span> <span m='1961870'>you</span> <span
  m='1961940'>can</span> <span m='1962040'>formalize</span> <span
  m='1962580'>it</span> <span m='1963100'>and</span> <span
  m='1966400'>make</span> <span m='1966630'>this</span> <span
  m='1966720'>something</span> <span m='1967030'>that</span> <span
  m='1968010'>everyone</span> <span m='1968340'>believes.</span> <span
  m='1969680'>And</span> <span m='1969920'>we'll</span> <span
  m='1970170'>also</span> <span m='1970400'>look</span> <span
  m='1970610'>at</span> <span m='1971230'>substitution,</span> <span
  m='1972570'>possibly</span> <span m='1972960'>in</span> <span
  m='1973140'>section</span> <span m='1973550'>tomorrow,</span> <span
  m='1974320'>for</span> <span m='1974730'>recurrence</span> <span
  m='1975140'>solving.</span> </p><p><span m='1976310'>So</span> <span
  m='1976570'>where</span> <span m='1976860'>we're</span> <span
  m='1977070'>right</span> <span m='1977280'>now</span> <span
  m='1977530'>is</span> <span m='1978100'>that</span> <span
  m='1978500'>we</span> <span m='1978650'>have</span> <span m='1979610'>a</span>
  <span m='1979670'>divide</span> <span m='1980000'>and</span> <span
  m='1980120'>conquer</span> <span m='1980540'>algorithm</span> <span
  m='1981920'>that</span> <span m='1983030'>has</span> <span m='1983340'>a
  merge</span> <span m='1983750'>step</span> <span m='1985500'>that</span> <span
  m='1985710'>is</span> <span m='1985970'>theta n.</span> <span
  m='1987710'>And</span> <span m='1987930'>so,</span> <span
  m='1988440'>if</span> <span m='1988610'>I</span> <span m='1988690'>just</span>
  <span m='1988920'>look</span> <span m='1989160'>at</span> <span
  m='1989350'>this</span> <span m='1989520'>structure</span> <span
  m='1990970'>that</span> <span m='1991110'>I</span> <span
  m='1991170'>have</span> <span m='1991390'>here,</span> <span
  m='1992540'>I</span> <span m='1992630'>can</span> <span
  m='1992810'>write</span> <span m='1993490'>a recurrence</span> <span
  m='1994570'>for</span> <span m='1994720'>merge</span> <span
  m='1995105'>sort</span> <span m='1996150'>that</span> <span
  m='1996360'>looks</span> <span m='1996580'>like</span> <span
  m='1996780'>this.</span> <span m='1997966'>So</span> <span
  m='1998340'>when</span> <span m='1998480'>I</span> <span
  m='1998550'>say</span> <span m='1998760'>complexity,</span> <span
  m='2002250'>I</span> <span m='2002370'>can</span> <span m='2002490'>say</span>
  <span m='2002720'>T</span> <span m='2003030'>of</span> <span
  m='2003160'>n,</span> <span m='2003640'>which</span> <span
  m='2003780'>is</span> <span m='2003880'>the</span> <span
  m='2003970'>work</span> <span m='2004290'>done</span> <span
  m='2004560'>for</span> <span m='2005060'>n</span> <span
  m='2005320'>items,</span> <span m='2006230'>is</span> <span
  m='2006380'>going</span> <span m='2006510'>to</span> <span
  m='2006550'>be</span> <span m='2006640'>some</span> <span
  m='2006960'>constant</span> <span m='2007520'>time</span> <span
  m='2008490'>in</span> <span m='2008670'>order</span> <span
  m='2008910'>to</span> <span m='2010720'>divide</span> <span m='2011050'>the
  array.</span> </p><p><span m='2011940'>So</span> <span m='2012110'>this</span>
  <span m='2012290'>could</span> <span m='2012420'>be</span> <span
  m='2013320'>the</span> <span m='2013380'>part</span> <span
  m='2013700'>corresponding</span> <span m='2014200'>to</span> <span
  m='2014250'>dividing</span> <span m='2014660'>the</span> <span
  m='2014750'>array.</span> <span m='2016360'>And</span> <span
  m='2016890'>there's</span> <span m='2017060'>going</span> <span
  m='2017200'>to</span> <span m='2017270'>be</span> <span m='2017780'>two</span>
  <span m='2017960'>problems</span> <span m='2018530'>of</span> <span
  m='2018620'>size</span> <span m='2019080'>n</span> <span
  m='2019260'>over</span> <span m='2019480'>2.</span> <span
  m='2020360'>And</span> <span m='2020620'>so</span> <span m='2020740'>I</span>
  <span m='2020820'>have</span> <span m='2021000'>2</span> <span
  m='2021220'>T</span> <span m='2021500'>of</span> <span m='2021600'>n</span>
  <span m='2021740'>over</span> <span m='2021950'>2.</span> <span
  m='2022810'>And</span> <span m='2023480'>this</span> <span
  m='2023650'>is</span> <span m='2023750'>the</span> <span
  m='2023830'>recursive</span> <span m='2024300'>part.</span> <span
  m='2028650'>And</span> <span m='2029180'>I'm</span> <span
  m='2029370'>going</span> <span m='2029480'>to</span> <span
  m='2029520'>have</span> <span m='2029670'>c</span> <span
  m='2029940'>times</span> <span m='2030270'>n,</span> <span
  m='2031340'>which</span> <span m='2031350'>is</span> <span
  m='2031450'>the</span> <span m='2031520'>merge</span> <span
  m='2031900'>part.</span> <span m='2033960'>And</span> <span
  m='2034080'>that's</span> <span m='2034310'>some</span> <span
  m='2034460'>constant</span> <span m='2034840'>times</span> <span
  m='2035070'>n,</span> <span m='2035830'>which</span> <span
  m='2035930'>is</span> <span m='2037900'>what</span> <span
  m='2038560'>we</span> <span m='2038720'>have,</span> <span
  m='2038910'>here,</span> <span m='2039150'>with</span> <span
  m='2039330'>respect</span> <span m='2039620'>to</span> <span
  m='2039670'>the</span> <span m='2039770'>theta n</span> <span
  m='2040210'>complexity.</span> </p><p><span m='2041890'>So</span> <span
  m='2042040'>you</span> <span m='2042160'>have</span> <span
  m='2042340'>a</span> <span m='2042420'>recurrence</span> <span
  m='2042800'>like</span> <span m='2042970'>this</span> <span
  m='2043620'>and</span> <span m='2043950'>I</span> <span
  m='2044000'>know</span> <span m='2044610'>some</span> <span
  m='2044810'>of</span> <span m='2044890'>you</span> <span
  m='2044980'>have</span> <span m='2045090'>seen</span> <span
  m='2045370'>recurrences</span> <span m='2045890'>in</span> <span
  m='2046010'>6.042.</span> <span m='2047150'>And</span> <span
  m='2047280'>you</span> <span m='2047370'>know</span> <span
  m='2047510'>how</span> <span m='2047600'>to</span> <span
  m='2047680'>solve</span> <span m='2048000'>this.</span> <span
  m='2049239'>What</span> <span m='2049449'>I'd</span> <span
  m='2049510'>like</span> <span m='2049670'>to</span> <span
  m='2049760'>do</span> <span m='2049920'>is</span> <span
  m='2051110'>show</span> <span m='2051340'>you</span> <span
  m='2051790'>this</span> <span m='2052409'>recursion</span> <span
  m='2052860'>tree</span> <span m='2053130'>expansion</span> <span
  m='2054469'>that,</span> <span m='2055300'>not</span> <span
  m='2055530'>only</span> <span m='2056040'>tells</span> <span
  m='2056270'>you</span> <span m='2056409'>how</span> <span
  m='2056480'>to</span> <span m='2056560'>solve</span> <span
  m='2056850'>this</span> <span m='2057040'>occurrence,</span> <span
  m='2057989'>but</span> <span m='2058310'>also</span> <span
  m='2058620'>gives</span> <span m='2058870'>you</span> <span
  m='2060750'>a</span> <span m='2061010'>means</span> <span
  m='2061480'>of</span> <span m='2061570'>solving</span> <span
  m='2062010'>recurrences</span> <span m='2062580'>where,</span> <span
  m='2063370'>instead</span> <span m='2063600'>of</span> <span
  m='2063659'>having</span> <span m='2063920'>c</span> <span m='2064130'>of
  n,</span> <span m='2064409'>you</span> <span m='2064489'>have</span> <span
  m='2064630'>something</span> <span m='2064969'>else</span> <span
  m='2065190'>out</span> <span m='2065300'>here.</span> <span
  m='2065560'>You</span> <span m='2065630'>have</span> <span
  m='2065840'>f</span> <span m='2066010'>of</span> <span m='2066120'>n,</span>
  <span m='2066500'>which</span> <span m='2066560'>is</span> <span
  m='2066670'>a</span> <span m='2066730'>different</span> <span
  m='2067070'>function</span> <span m='2067790'>from</span> <span
  m='2068030'>the</span> <span m='2068120'>linear</span> <span
  m='2068429'>function.</span> <span m='2069280'>And</span> <span
  m='2069489'>this</span> <span m='2070270'>recursion</span> <span
  m='2070880'>tree</span> <span m='2071480'>is,</span> <span
  m='2072179'>in</span> <span m='2072300'>my</span> <span
  m='2072460'>mind,</span> <span m='2073750'>the</span> <span
  m='2074000'>simplest</span> <span m='2074560'>way</span> <span
  m='2074880'>of</span> <span m='2075040'>arguing</span> <span
  m='2076900'>the</span> <span m='2077810'>theta</span> <span
  m='2077873'>n</span> <span m='2077936'>log n</span> <span
  m='2078650'>complexity</span> <span m='2079540'>of</span> <span
  m='2079830'>merge</span> <span m='2080070'>sort.</span> </p><p><span
  m='2081100'>So</span> <span m='2081230'>what</span> <span m='2081380'>I</span>
  <span m='2081400'>want</span> <span m='2081550'>to</span> <span
  m='2081590'>do</span> <span m='2081690'>is</span> <span
  m='2081780'>expand</span> <span m='2082389'>this</span> <span
  m='2083070'>recurrence</span> <span m='2083590'>out.</span> <span
  m='2084420'>And</span> <span m='2084620'>let's</span> <span
  m='2084820'>do</span> <span m='2084909'>that</span> <span
  m='2085090'>over</span> <span m='2085250'>here.</span> <span
  m='2106830'>So</span> <span m='2106990'>I have</span> <span
  m='2107270'>c</span> <span m='2107550'>of n</span> <span m='2107950'>on</span>
  <span m='2108190'>top.</span> <span m='2110950'>I'm</span> <span
  m='2111090'>going</span> <span m='2111210'>to</span> <span
  m='2111250'>ignore</span> <span m='2113140'>this</span> <span
  m='2113420'>constant</span> <span m='2113810'>factor</span> <span
  m='2114210'>because</span> <span m='2114515'>c</span> <span
  m='2114820'>of</span> <span m='2115170'>n</span> <span
  m='2115850'>dominates.</span> <span m='2116550'>So</span> <span
  m='2116710'>I'll</span> <span m='2116810'>just</span> <span
  m='2116980'>start</span> <span m='2117220'>with</span> <span
  m='2117360'>c</span> <span m='2117530'>of</span> <span m='2117620'>n.</span>
  <span m='2118080'>I</span> <span m='2118170'>want</span> <span
  m='2118280'>to</span> <span m='2118330'>break</span> <span
  m='2118590'>things</span> <span m='2118820'>up,</span> <span
  m='2121660'>as</span> <span m='2122100'>I</span> <span m='2122220'>do</span>
  <span m='2122400'>the</span> <span m='2122560'>recursion.</span> </p><p><span
  m='2123450'>So</span> <span m='2123650'>when</span> <span m='2123760'>I</span>
  <span m='2123810'>go</span> <span m='2124040'>c</span> <span
  m='2124270'>of</span> <span m='2124320'>n,</span> <span m='2125540'>at</span>
  <span m='2125680'>the</span> <span m='2125770'>top</span> <span
  m='2126020'>level--</span> <span m='2126740'>that's</span> <span
  m='2126960'>the</span> <span m='2127060'>work</span> <span
  m='2127310'>I</span> <span m='2127380'>have</span> <span m='2127520'>to</span>
  <span m='2127630'>do</span> <span m='2127770'>at</span> <span
  m='2127900'>the</span> <span m='2127960'>merge, at</span> <span
  m='2128440'>the</span> <span m='2128570'>top</span> <span
  m='2128800'>level.</span> <span m='2129750'>And</span> <span
  m='2129900'>then</span> <span m='2130080'>when</span> <span
  m='2130200'>I</span> <span m='2130260'>go</span> <span m='2130460'>down</span>
  <span m='2130720'>to</span> <span m='2131010'>two smaller</span> <span
  m='2131360'>problems,</span> <span m='2132690'>each</span> <span
  m='2132870'>of</span> <span m='2132950'>them</span> <span
  m='2133110'>is</span> <span m='2133200'>size</span> <span m='2133560'>n</span>
  <span m='2133750'>over</span> <span m='2133940'>2.</span> <span
  m='2134480'>So</span> <span m='2134610'>I</span> <span m='2134690'>do</span>
  <span m='2135450'>c</span> <span m='2135850'>times</span> <span
  m='2136140'>n</span> <span m='2137380'>divided</span> <span
  m='2137680'>by</span> <span m='2137810'>2</span> <span
  m='2138010'>[INAUDIBLE].</span> <span m='2138440'>So</span> <span
  m='2138580'>this</span> <span m='2138660'>is</span> <span
  m='2138760'>just</span> <span m='2138950'>a</span> <span
  m='2138990'>constant</span> <span m='2139470'>c.</span> <span
  m='2141970'>I</span> <span m='2142060'>didn't</span> <span m='2142170'>want
  to</span> <span m='2142290'>write</span> <span m='2142530'>thetas</span> <span
  m='2142850'>up</span> <span m='2142980'>here.</span> <span
  m='2143200'>You</span> <span m='2143320'>could.</span> <span
  m='2144440'>And</span> <span m='2144560'>I'll</span> <span
  m='2145070'>say</span> <span m='2145190'>a</span> <span
  m='2145220'>little</span> <span m='2145340'>bit</span> <span
  m='2145460'>more</span> <span m='2145610'>about</span> <span
  m='2145800'>that</span> <span m='2145940'>later.</span> <span
  m='2146760'>But</span> <span m='2147030'>think</span> <span
  m='2147180'>of</span> <span m='2147290'>this</span> <span
  m='2147400'>cn</span> <span m='2147930'>as</span> <span
  m='2148100'>representing</span> <span m='2148570'>the</span> <span
  m='2148680'>theta n</span> <span m='2149180'>complexity.</span> <span
  m='2150260'>And</span> <span m='2150440'>c</span> <span m='2150610'>is</span>
  <span m='2150920'>this</span> <span m='2151110'>constant.</span> </p><p><span
  m='2152790'>So</span> <span m='2154270'>c</span> <span
  m='2154500'>times</span> <span m='2154760'>n,</span> <span
  m='2154940'>here.</span> <span m='2155220'>c</span> <span
  m='2155600'>times</span> <span m='2155920'>n</span> <span
  m='2156150'>over</span> <span m='2156310'>2,</span> <span
  m='2156510'>here.</span> <span m='2157960'>And</span> <span m='2158120'>then
  when</span> <span m='2158380'>I</span> <span m='2158450'>keep</span> <span
  m='2158650'>going,</span> <span m='2158960'>I have</span> <span
  m='2159880'>c</span> <span m='2160040'>times</span> <span m='2160300'>n</span>
  <span m='2160810'>over</span> <span m='2161020'>4,</span> <span
  m='2161760'>c</span> <span m='2161940'>times</span> <span m='2162180'>n</span>
  <span m='2162300'>over</span> <span m='2162480'>4,</span> <span
  m='2163980'>et</span> <span m='2164110'>cetera,</span> <span
  m='2166920'>and</span> <span m='2167190'>so</span> <span
  m='2167310'>on,</span> <span m='2167420'>and</span> <span
  m='2167510'>so</span> <span m='2167670'>forth.</span> <span
  m='2168910'>And</span> <span m='2169210'>when</span> <span
  m='2169360'>I</span> <span m='2169410'>come</span> <span
  m='2169640'>down</span> <span m='2169830'>all the way</span> <span
  m='2170250'>here,</span> <span m='2170650'>n</span> <span
  m='2170860'>is</span> <span m='2170970'>eventually</span> <span
  m='2171370'>going</span> <span m='2171500'>to</span> <span
  m='2171560'>become</span> <span m='2172350'>1--</span> <span
  m='2174500'>or</span> <span m='2174970'>essentially</span> <span
  m='2175380'>a</span> <span m='2175440'>constant--</span> <span
  m='2176670'>and</span> <span m='2176830'>I'm</span> <span
  m='2176900'>going</span> <span m='2177020'>to</span> <span
  m='2177070'>have</span> <span m='2178200'>a</span> <span
  m='2178300'>bunch</span> <span m='2178550'>of</span> <span
  m='2178630'>c's</span> <span m='2178990'>here.</span> </p><p><span
  m='2180790'>So</span> <span m='2181810'>here's</span> <span
  m='2182140'>another</span> <span m='2183430'>question,</span> <span
  m='2185120'>that</span> <span m='2185500'>I'd</span> <span
  m='2185600'>like</span> <span m='2185780'>you to</span> <span
  m='2185970'>answer.</span> <span m='2187050'>Someone</span> <span
  m='2187400'>tell</span> <span m='2187620'>me</span> <span
  m='2188640'>what</span> <span m='2189020'>the</span> <span
  m='2189150'>number</span> <span m='2189550'>of</span> <span
  m='2189680'>levels</span> <span m='2190240'>in this</span> <span
  m='2190565'>tree</span> <span m='2190890'>are,</span> <span
  m='2191210'>precisely,</span> <span m='2192390'>and</span> <span
  m='2192540'>the</span> <span m='2192610'>number</span> <span
  m='2192830'>of</span> <span m='2192940'>leaves</span> <span m='2193370'>in
  this tree</span> <span m='2193900'>are,</span> <span
  m='2194060'>precisely.</span> </p><p><span m='2195570'>AUDIENCE: The
  number</span> <span m='2196001'>of levels</span> <span m='2196432'>is</span>
  <span m='2196863'>log n</span> <span m='2197294'>plus 1.</span> </p><p><span
  m='2198160'>PROFESSOR: Log n</span> <span m='2198670'>plus</span> <span
  m='2198810'>1.</span> <span m='2199060'>Log to</span> <span
  m='2199250'>the</span> <span m='2199310'>base</span> <span
  m='2199700'>2</span> <span m='2200220'>plus</span> <span m='2200350'>1.</span>
  <span m='2201270'>And</span> <span m='2201440'>the</span> <span
  m='2201490'>number</span> <span m='2201700'>of</span> <span
  m='2201790'>leaves?</span> <span m='2208430'>You raised</span> <span
  m='2208780'>your hand back</span> <span m='2209280'>there,</span> <span
  m='2209950'>first.</span> <span m='2210580'>Number of</span> <span
  m='2210700'>leaves.</span> </p><p><span m='2211430'>AUDIENCE: I think</span>
  <span m='2211923'>n.</span> </p><p><span m='2212910'>PROFESSOR: Yeah,</span>
  <span m='2213230'>you're right.</span> <span m='2214130'>You</span> <span
  m='2214220'>think</span> <span m='2214320'>right.</span> <span
  m='2216210'>So</span> <span m='2216620'>1</span> <span m='2216870'>plus</span>
  <span m='2217130'>log n</span> <span m='2219430'>and</span> <span
  m='2219720'>n</span> <span m='2220010'>leaves.</span> <span
  m='2222520'>When</span> <span m='2222930'>n</span> <span
  m='2223340'>becomes</span> <span m='2223650'>1,</span> <span
  m='2224380'>how</span> <span m='2224620'>many</span> <span
  m='2224780'>of</span> <span m='2224860'>them</span> <span
  m='2224990'>do</span> <span m='2225070'>you</span> <span
  m='2225160'>have?</span> <span m='2225870'>You're</span> <span
  m='2226020'>down</span> <span m='2226180'>to</span> <span m='2226770'>a</span>
  <span m='2226880'>single</span> <span m='2227230'>element,</span> <span
  m='2227770'>which</span> <span m='2227910'>is,</span> <span
  m='2228890'>by</span> <span m='2229010'>definition,</span> <span
  m='2229470'>sorted.</span> <span m='2230580'>And</span> <span
  m='2232120'>you</span> <span m='2232280'>have</span> <span
  m='2232420'>n</span> <span m='2232580'>leaves.</span> </p><p><span
  m='2233730'>So</span> <span m='2233820'>now</span> <span
  m='2233970'>let's</span> <span m='2234220'>add</span> <span
  m='2234470'>up</span> <span m='2234660'>the</span> <span
  m='2234760'>work.</span> <span m='2237020'>I</span> <span
  m='2237160'>really</span> <span m='2237410'>like</span> <span
  m='2237670'>this</span> <span m='2238280'>picture</span> <span
  m='2239460'>because</span> <span m='2239780'>it's</span> <span
  m='2240060'>just</span> <span m='2240230'>so</span> <span
  m='2240750'>intuitive</span> <span m='2241310'>in</span> <span
  m='2241430'>terms</span> <span m='2241660'>of</span> <span
  m='2241750'>getting</span> <span m='2242000'>us</span> <span
  m='2242720'>the</span> <span m='2242990'>result</span> <span
  m='2243450'>that</span> <span m='2243640'>we're</span> <span
  m='2243760'>looking</span> <span m='2244030'>for.</span> <span
  m='2245090'>So</span> <span m='2245160'>you</span> <span
  m='2245300'>add</span> <span m='2245480'>up</span> <span
  m='2245610'>the</span> <span m='2245690'>work</span> <span
  m='2245980'>in</span> <span m='2246080'>each</span> <span
  m='2247560'>of</span> <span m='2247680'>the</span> <span
  m='2248160'>levels</span> <span m='2248690'>of</span> <span
  m='2248820'>this</span> <span m='2248920'>tree.</span> <span
  m='2250080'>So</span> <span m='2250240'>the</span> <span
  m='2250350'>top</span> <span m='2250620'>level</span> <span
  m='2250890'>is</span> <span m='2251000'>cn.</span> <span
  m='2252190'>The</span> <span m='2252300'>second</span> <span
  m='2252610'>level</span> <span m='2252980'>is</span> <span
  m='2253470'>cn</span> <span m='2254400'>because I</span> <span
  m='2254530'>added</span> <span m='2254810'>1/2</span> <span
  m='2255060'>and</span> <span m='2255170'>1/2,</span> <span
  m='2256810'>cn,</span> <span m='2258640'>cn.</span> <span
  m='2259790'>Wow.</span> <span m='2260750'>What</span> <span
  m='2261050'>symmetry.</span> </p><p><span m='2263010'>So</span> <span
  m='2263200'>you're</span> <span m='2263370'>doing</span> <span
  m='2266020'>the</span> <span m='2266170'>same</span> <span
  m='2266470'>amount</span> <span m='2266600'>of</span> <span
  m='2266670'>work</span> <span m='2269500'>modulo</span> <span
  m='2270500'>the</span> <span m='2270570'>constant</span> <span
  m='2270990'>factors,</span> <span m='2271390'>here,</span> <span
  m='2273325'>with</span> <span m='2273800'>what's</span> <span
  m='2274050'>going</span> <span m='2274270'>on</span> <span
  m='2274410'>with</span> <span m='2274610'>the</span> <span
  m='2274730'>c1,</span> <span m='2275180'>which</span> <span
  m='2275340'>we've</span> <span m='2275540'>ignored,</span> <span
  m='2276280'>but</span> <span m='2276480'>roughly</span> <span
  m='2276790'>the</span> <span m='2276870'>same</span> <span
  m='2277110'>amount</span> <span m='2277260'>of</span> <span
  m='2277320'>work</span> <span m='2277890'>in</span> <span
  m='2278040'>each</span> <span m='2278280'>of</span> <span
  m='2278360'>the</span> <span m='2278440'>levels.</span> <span
  m='2279870'>And</span> <span m='2280020'>now,</span> <span
  m='2280360'>you</span> <span m='2280490'>know</span> <span
  m='2280670'>how</span> <span m='2280760'>many</span> <span
  m='2280950'>levels</span> <span m='2281290'>there</span> <span
  m='2281510'>are.</span> <span m='2282570'>It's</span> <span
  m='2283500'>1</span> <span m='2283760'>plus</span> <span m='2284000'>log
  n.</span> </p><p><span m='2284850'>So</span> <span m='2285040'>if</span> <span
  m='2285100'>you</span> <span m='2285220'>want</span> <span
  m='2285370'>to</span> <span m='2285440'>write</span> <span
  m='2287770'>an</span> <span m='2287920'>equation</span> <span
  m='2288480'>for</span> <span m='2290180'>T</span> <span m='2290280'>of
  n,</span> <span m='2291930'>it's</span> <span m='2292910'>1</span> <span
  m='2293300'>plus</span> <span m='2295680'>log n</span> <span
  m='2296890'>times</span> <span m='2299660'>c</span> <span
  m='2299950'>of</span> <span m='2300050'>n,</span> <span
  m='2301320'>which</span> <span m='2301550'>is</span> <span
  m='2301920'>theta</span> <span m='2302370'>of</span> <span m='2302630'>n log
  n.</span> <span m='2306520'>So</span> <span m='2307240'>I've</span> <span
  m='2307330'>mixed</span> <span m='2307730'>in</span> <span
  m='2308320'>constants</span> <span m='2308780'>c</span> <span
  m='2309240'>and</span> <span m='2309380'>thetas.</span> <span
  m='2311080'>For</span> <span m='2311170'>the</span> <span
  m='2311250'>purposes</span> <span m='2311620'>of</span> <span
  m='2311760'>this</span> <span m='2312100'>description,</span> <span
  m='2312590'>they're</span> <span m='2312730'>interchangeable.</span> <span
  m='2313950'>You</span> <span m='2314030'>will</span> <span
  m='2314290'>see</span> <span m='2315130'>recurrences</span> <span
  m='2316430'>that</span> <span m='2316620'>look</span> <span
  m='2316810'>like</span> <span m='2317060'>this,</span> <span
  m='2317520'>in</span> <span m='2317670'>class.</span> <span
  m='2325210'>And</span> <span m='2325380'>things</span> <span
  m='2325570'>like</span> <span m='2325780'>that.</span> </p><p><span
  m='2326860'>Don't</span> <span m='2327040'>get</span> <span
  m='2327150'>confused.</span> <span m='2328370'>It's</span> <span
  m='2328690'>just</span> <span m='2328940'>a</span> <span
  m='2329130'>constant</span> <span m='2329620'>multiplicative</span> <span
  m='2330230'>factor</span> <span m='2331150'>in</span> <span
  m='2331300'>front</span> <span m='2331600'>of</span> <span
  m='2331700'>the</span> <span m='2332160'>function</span> <span
  m='2333220'>that</span> <span m='2333440'>you</span> <span
  m='2333530'>have.</span> <span m='2334510'>And</span> <span
  m='2335030'>it's</span> <span m='2335150'>just</span> <span
  m='2335340'>a</span> <span m='2335380'>little</span> <span
  m='2335560'>easier,</span> <span m='2336030'>I</span> <span
  m='2336130'>think,</span> <span m='2336230'>to</span> <span
  m='2336340'>write</span> <span m='2336550'>down</span> <span
  m='2336790'>these</span> <span m='2336980'>constant</span> <span
  m='2337330'>factors</span> <span m='2338140'>and</span> <span
  m='2338420'>realize</span> <span m='2338850'>that</span> <span
  m='2339080'>the</span> <span m='2339360'>amount</span> <span
  m='2339590'>of</span> <span m='2339650'>work</span> <span
  m='2339880'>done</span> <span m='2340510'>is</span> <span
  m='2341220'>the</span> <span m='2341360'>same</span> <span
  m='2341720'>in</span> <span m='2341810'>each</span> <span
  m='2341960'>of</span> <span m='2342060'>the</span> <span
  m='2342140'>leaves.</span> <span m='2342980'>And</span> <span m='2343710'>once
  you know</span> <span m='2343940'>the</span> <span
  m='2344290'>dimensions</span> <span m='2344850'>of</span> <span
  m='2345030'>this</span> <span m='2345280'>tree,</span> <span
  m='2346010'>in</span> <span m='2346120'>terms</span> <span
  m='2346350'>of</span> <span m='2346430'>levels</span> <span
  m='2346930'>and</span> <span m='2347310'>in</span> <span
  m='2347510'>terms</span> <span m='2347740'>of</span> <span
  m='2347810'>the</span> <span m='2347870'>number</span> <span
  m='2348090'>of</span> <span m='2348180'>leaves,</span> <span
  m='2348930'>you</span> <span m='2349060'>get</span> <span
  m='2349220'>your</span> <span m='2350650'>result.</span> </p><p><span
  m='2354560'>So</span> <span m='2355840'>we've</span> <span
  m='2355980'>looked</span> <span m='2356240'>at two</span> <span
  m='2356570'>algorithm,</span> <span m='2356960'>so</span> <span
  m='2357160'>far.</span> <span m='2366160'>And</span> <span
  m='2366470'>insertion</span> <span m='2366930'>sort,</span> <span
  m='2367690'>if</span> <span m='2367880'>you</span> <span
  m='2368630'>talk</span> <span m='2368850'>about</span> <span
  m='2369070'>numbers,</span> <span m='2369540'>is</span> <span
  m='2369790'>theta n squared</span> <span m='2370740'>for</span> <span
  m='2370970'>swaps.</span> <span m='2372260'>Merge</span> <span
  m='2372680'>sort</span> <span m='2372790'>is</span> <span
  m='2372920'>theta</span> <span m='2372990'>n</span> <span m='2373060'>log
  n.</span> <span m='2376270'>Here's</span> <span m='2376790'>another</span>
  <span m='2377090'>interesting</span> <span m='2377410'>question.</span> <span
  m='2378680'>What</span> <span m='2380270'>is</span> <span
  m='2380470'>one</span> <span m='2380720'>advantage</span> <span
  m='2382010'>of</span> <span m='2382170'>insertion</span> <span
  m='2382730'>sort</span> <span m='2383830'>over</span> <span
  m='2384120'>merge</span> <span m='2384410'>sort?</span> </p><p><span
  m='2390176'>AUDIENCE: [INAUDIBLE]</span> </p><p><span m='2391180'>PROFESSOR:
  What</span> <span m='2391330'>does</span> <span m='2391390'>that</span> <span
  m='2391530'>mean?</span> </p><p><span m='2393072'>AUDIENCE: You don't</span>
  <span m='2393558'>have to move</span> <span m='2394044'>elements</span> <span
  m='2394530'>outside of</span> <span m='2395016'>[INAUDIBLE].</span>
  </p><p><span m='2396960'>PROFESSOR: That's</span> <span
  m='2397446'>exactly</span> <span m='2397932'>right.</span> <span
  m='2398420'>That's</span> <span m='2398720'>exactly</span> <span
  m='2399020'>right.</span> <span m='2401330'>So</span> <span
  m='2401560'>the</span> <span m='2401820'>two</span> <span
  m='2401950'>guys</span> <span m='2402170'>who</span> <span
  m='2402290'>answered</span> <span m='2402580'>the</span> <span
  m='2402650'>questions</span> <span m='2403270'>before</span> <span
  m='2403700'>with</span> <span m='2403840'>the</span> <span
  m='2404090'>levels,</span> <span m='2404600'>and</span> <span
  m='2404690'>you.</span> <span m='2405840'>Come</span> <span
  m='2405980'>to</span> <span m='2406050'>me</span> <span
  m='2406140'>after</span> <span m='2406340'>class.</span> </p><p><span
  m='2407740'>So</span> <span m='2408200'>that's</span> <span
  m='2408360'>a</span> <span m='2408410'>great</span> <span
  m='2408650'>answer.</span> <span m='2409690'>It's</span> <span
  m='2409910'>in-place</span> <span m='2410610'>sorting</span> <span
  m='2411660'>is</span> <span m='2411850'>something</span> <span
  m='2412180'>that</span> <span m='2412340'>has</span> <span
  m='2412580'>to</span> <span m='2412660'>do</span> <span
  m='2412800'>with</span> <span m='2413140'>auxiliary</span> <span
  m='2413680'>space.</span> <span m='2414820'>And</span> <span
  m='2415050'>so</span> <span m='2415440'>what</span> <span
  m='2415610'>you</span> <span m='2415700'>see,</span> <span
  m='2415940'>here--</span> <span m='2416520'>and</span> <span
  m='2416710'>it</span> <span m='2416790'>was</span> <span m='2417090'>a</span>
  <span m='2417150'>bit</span> <span m='2417930'>hidden,</span> <span
  m='2418300'>here.</span> <span m='2419280'>But</span> <span
  m='2419390'>the</span> <span m='2419460'>fact</span> <span
  m='2419720'>of</span> <span m='2419780'>the</span> <span
  m='2419840'>matter</span> <span m='2420140'>is</span> <span
  m='2420360'>that</span> <span m='2421550'>you</span> <span
  m='2421940'>had</span> <span m='2423070'>L</span> <span
  m='2423565'>prime</span> <span m='2424060'>and</span> <span
  m='2424250'>R</span> <span m='2424520'>prime.</span> <span
  m='2425530'>And</span> <span m='2425840'>L</span> <span
  m='2426060'>prime</span> <span m='2426550'>and</span> <span
  m='2426690'>R</span> <span m='2426870'>prime</span> <span
  m='2427260'>are</span> <span m='2427350'>different</span> <span
  m='2428400'>from</span> <span m='2428820'>L and</span> <span
  m='2429240'>R,</span> <span m='2429690'>which</span> <span m='2429910'>were
  the</span> <span m='2430110'>initial</span> <span m='2430690'>halves</span>
  <span m='2431710'>of</span> <span m='2431840'>the</span> <span
  m='2432180'>inputs</span> <span m='2432730'>to</span> <span
  m='2432850'>the</span> <span m='2433180'>sorting</span> <span
  m='2433440'>algorithm.</span> </p><p><span m='2434990'>And</span> <span
  m='2435440'>what</span> <span m='2435590'>I</span> <span
  m='2435660'>said</span> <span m='2435880'>here</span> <span
  m='2436170'>is,</span> <span m='2436500'>we're</span> <span
  m='2436900'>going</span> <span m='2437060'>to</span> <span
  m='2437310'>dump</span> <span m='2437690'>this</span> <span
  m='2437930'>into</span> <span m='2438270'>A.</span> <span
  m='2438630'>That's</span> <span m='2438990'>what</span> <span
  m='2439160'>this</span> <span m='2439330'>picture</span> <span
  m='2439640'>shows.</span> <span m='2440440'>This</span> <span
  m='2440650'>says</span> <span m='2440840'>sorted</span> <span
  m='2441160'>array,</span> <span m='2441800'>A.</span> <span
  m='2442880'>And</span> <span m='2443070'>so</span> <span
  m='2443200'>you</span> <span m='2443340'>had</span> <span
  m='2443580'>to</span> <span m='2443690'>make a</span> <span
  m='2444040'>copy</span> <span m='2445470'>of</span> <span
  m='2445840'>the</span> <span m='2446070'>array--</span> <span
  m='2447790'>the</span> <span m='2447900'>two</span> <span
  m='2448000'>halves</span> <span m='2448480'>L and</span> <span
  m='2448960'>R--</span> <span m='2449720'>in</span> <span
  m='2449920'>order</span> <span m='2450200'>to</span> <span
  m='2451110'>do</span> <span m='2451250'>the</span> <span
  m='2451340'>recursion,</span> <span m='2452270'>and</span> <span
  m='2452420'>then</span> <span m='2452750'>to</span> <span
  m='2453010'>take</span> <span m='2453290'>the</span> <span
  m='2453370'>results</span> <span m='2453950'>and</span> <span
  m='2454160'>put</span> <span m='2454310'>them</span> <span
  m='2454490'>into</span> <span m='2454990'>the</span> <span
  m='2455300'>sorted</span> <span m='2455690'>array,</span> <span
  m='2455970'>A.</span> </p><p><span m='2456790'>So</span> <span
  m='2457030'>you</span> <span m='2457180'>needed--</span> <span
  m='2458000'>in</span> <span m='2458140'>merge</span> <span
  m='2458450'>sort--</span> <span m='2459080'>you</span> <span
  m='2459220'>needed</span> <span m='2459660'>theta n</span> <span
  m='2461600'>auxiliary</span> <span m='2462250'>space.</span> <span
  m='2464060'>So</span> <span m='2464130'>merge</span> <span
  m='2464340'>sort,</span> <span m='2465196'>you</span> <span
  m='2465562'>need</span> <span m='2465930'>theta n</span> <span
  m='2468560'>extra</span> <span m='2468970'>space.</span> <span
  m='2470370'>And</span> <span m='2471050'>the</span> <span
  m='2471180'>definition</span> <span m='2471730'>of</span> <span
  m='2472280'>in-place</span> <span m='2472550'>sorting</span> <span
  m='2477380'>implies</span> <span m='2477900'>that</span> <span
  m='2478060'>you</span> <span m='2478170'>have</span> <span m='2478590'>theta
  1--</span> <span m='2480120'>constant--</span> <span
  m='2480930'>auxiliary</span> <span m='2481310'>space.</span> </p><p><span
  m='2484580'>The</span> <span m='2484780'>auxiliary</span> <span
  m='2485260'>space</span> <span m='2485720'>for</span> <span
  m='2485940'>insertion</span> <span m='2486440'>sort</span> <span
  m='2487330'>is</span> <span m='2487510'>simply</span> <span
  m='2488010'>that</span> <span m='2488740'>temporary</span> <span
  m='2489400'>variable</span> <span m='2490450'>that</span> <span
  m='2490700'>you</span> <span m='2490780'>need</span> <span
  m='2491260'>when</span> <span m='2491430'>you</span> <span
  m='2491550'>swap</span> <span m='2492080'>two</span> <span
  m='2492250'>elements.</span> <span m='2493310'>So</span> <span
  m='2493400'>when you</span> <span m='2493710'>want</span> <span
  m='2493820'>to</span> <span m='2493870'>swap</span> <span m='2494250'>a</span>
  <span m='2494360'>couple of</span> <span m='2494610'>registers,</span> <span
  m='2495520'>you</span> <span m='2495660'>gotta store</span> <span
  m='2496320'>one</span> <span m='2496510'>of</span> <span
  m='2496570'>the</span> <span m='2496610'>values</span> <span
  m='2497000'>in</span> <span m='2497100'>a</span> <span
  m='2497160'>temporary</span> <span m='2497540'>location,</span> <span
  m='2498070'>override the</span> <span m='2498490'>other,</span> <span
  m='2498890'>et</span> <span m='2499090'>cetera.</span> <span
  m='2499600'>And</span> <span m='2499730'>that's</span> <span
  m='2500020'>the</span> <span m='2500320'>theta 1</span> <span
  m='2500750'>auxiliary</span> <span m='2501170'>space</span> <span
  m='2501530'>for</span> <span m='2501660'>insertion</span> <span
  m='2502070'>sort.</span> </p><p><span m='2503190'>So</span> <span
  m='2503340'>there</span> <span m='2503510'>is</span> <span
  m='2503610'>an</span> <span m='2503690'>advantage</span> <span
  m='2504970'>of</span> <span m='2505190'>the</span> <span
  m='2506090'>version</span> <span m='2506440'>of</span> <span
  m='2506650'>insertion</span> <span m='2507060'>sort</span> <span
  m='2507330'>we've</span> <span m='2507470'>talked</span> <span
  m='2507680'>about,</span> <span m='2507870'>today,</span> <span
  m='2508210'>over</span> <span m='2508480'>merge</span> <span
  m='2508810'>sort.</span> <span m='2509140'>And</span> <span
  m='2509380'>if</span> <span m='2509490'>you</span> <span
  m='2509560'>have</span> <span m='2509680'>a</span> <span
  m='2509730'>billion</span> <span m='2510070'>elements,</span> <span
  m='2511160'>that's</span> <span m='2511550'>potentially</span> <span
  m='2512860'>something</span> <span m='2513200'>you</span> <span
  m='2513700'>don't</span> <span m='2513820'>want</span> <span
  m='2513920'>to</span> <span m='2513960'>store</span> <span
  m='2514240'>in</span> <span m='2514320'>memory.</span> <span
  m='2514660'>If</span> <span m='2514730'>you</span> <span
  m='2514800'>want</span> <span m='2514900'>to</span> <span
  m='2514950'>do</span> <span m='2515060'>something</span> <span
  m='2515370'>really</span> <span m='2515610'>fast</span> <span
  m='2516450'>and</span> <span m='2516930'>do</span> <span
  m='2517110'>everything</span> <span m='2517550'>in</span> <span
  m='2518250'>cache</span> <span m='2518710'>or</span> <span
  m='2519020'>main</span> <span m='2519260'>memory,</span> <span
  m='2520020'>and</span> <span m='2520130'>you</span> <span
  m='2520250'>want</span> <span m='2520400'>to</span> <span
  m='2520450'>sort</span> <span m='2521090'>billions</span> <span
  m='2521540'>are</span> <span m='2521940'>maybe</span> <span
  m='2522130'>even</span> <span m='2522330'>trillions</span> <span
  m='2522730'>of</span> <span m='2522830'>items,</span> <span
  m='2523610'>this</span> <span m='2523790'>becomes</span> <span
  m='2525060'>an</span> <span m='2525220'>important</span> <span
  m='2525620'>consideration.</span> </p><p><span m='2527740'>I</span> <span
  m='2527840'>will</span> <span m='2528030'>say</span> <span
  m='2528290'>that</span> <span m='2529100'>you</span> <span
  m='2529280'>can</span> <span m='2531010'>reduce</span> <span
  m='2531330'>the</span> <span m='2531420'>constant</span> <span
  m='2531870'>factor</span> <span m='2532930'>of</span> <span
  m='2533250'>the</span> <span m='2533410'>theta n.</span> <span
  m='2534530'>So</span> <span m='2535280'>in</span> <span m='2535480'>the</span>
  <span m='2535600'>vanilla</span> <span m='2535900'>scheme,</span> <span
  m='2536360'>you</span> <span m='2536510'>could</span> <span
  m='2536590'>imagine</span> <span m='2536920'>that</span> <span
  m='2537020'>you</span> <span m='2537090'>have</span> <span
  m='2537220'>to</span> <span m='2537270'>have</span> <span m='2537390'>a</span>
  <span m='2537480'>copy</span> <span m='2537840'>of</span> <span
  m='2537910'>the</span> <span m='2538010'>array.</span> <span m='2538690'>So
  if</span> <span m='2538730'>you</span> <span m='2538830'>had</span> <span
  m='2539010'>n</span> <span m='2539190'>elements,</span> <span
  m='2539890'>you</span> <span m='2540510'>essentially</span> <span
  m='2540900'>have</span> <span m='2541150'>n</span> <span
  m='2541480'>extra</span> <span m='2543230'>items</span> <span
  m='2543570'>of</span> <span m='2543660'>storage.</span> <span
  m='2544490'>You</span> <span m='2544620'>can</span> <span
  m='2544730'>make</span> <span m='2544920'>that</span> <span
  m='2545090'>n</span> <span m='2545280'>over</span> <span m='2545520'>2</span>
  <span m='2546170'>with</span> <span m='2546260'>a</span> <span
  m='2546500'>simple</span> <span m='2546890'>coding</span> <span
  m='2547210'>trick</span> <span m='2548130'>by</span> <span
  m='2549160'>keeping</span> <span m='2549720'>1/2</span> <span
  m='2550410'>of</span> <span m='2550570'>A.</span> </p><p><span
  m='2552710'>You</span> <span m='2552890'>can</span> <span
  m='2553430'>throw</span> <span m='2553660'>away</span> <span
  m='2553830'>one</span> <span m='2553990'>of</span> <span
  m='2554060'>the</span> <span m='2554140'>L's or</span> <span
  m='2554470'>one</span> <span m='2554690'>of the</span> <span
  m='2554820'>R's.</span> <span m='2555800'>And</span> <span
  m='2556250'>you</span> <span m='2556340'>can</span> <span
  m='2556440'>get</span> <span m='2556560'>it</span> <span
  m='2556650'>down</span> <span m='2556870'>to</span> <span m='2556970'>n</span>
  <span m='2557080'>over</span> <span m='2557260'>2.</span> <span
  m='2557780'>And</span> <span m='2557910'>that</span> <span
  m='2558080'>turns</span> <span m='2558310'>out--</span> <span
  m='2558470'>it's</span> <span m='2558640'>a</span> <span
  m='2558750'>reasonable</span> <span m='2559160'>thing</span> <span
  m='2559470'>to</span> <span m='2559580'>do if</span> <span
  m='2560060'>you</span> <span m='2560200'>have</span> <span
  m='2560340'>a</span> <span m='2560380'>billion</span> <span
  m='2560690'>elements</span> <span m='2561410'>and</span> <span
  m='2561550'>you</span> <span m='2561660'>want</span> <span
  m='2561790'>to</span> <span m='2562290'>reduce</span> <span
  m='2562690'>your</span> <span m='2563540'>storage</span> <span m='2563940'>by
  a</span> <span m='2564080'>constant</span> <span m='2564510'>factor.</span>
  <span m='2565400'>So</span> <span m='2565530'>that's</span> <span
  m='2565720'>one</span> <span m='2566070'>coding</span> <span
  m='2566400'>trick.</span> </p><p><span m='2567130'>Now</span> <span
  m='2567230'>it</span> <span m='2567340'>turns</span> <span
  m='2567600'>out</span> <span m='2567800'>that</span> <span
  m='2567910'>you</span> <span m='2568010'>can</span> <span
  m='2568090'>actually</span> <span m='2568340'>go</span> <span
  m='2568550'>further.</span> <span m='2569630'>And</span> <span
  m='2569990'>there's</span> <span m='2570260'>a</span> <span
  m='2570610'>fairly</span> <span m='2571040'>sophisticated</span> <span
  m='2571700'>algorithm</span> <span m='2572130'>that's</span> <span
  m='2572400'>sort</span> <span m='2572640'>of</span> <span
  m='2572710'>beyond</span> <span m='2573020'>the</span> <span
  m='2573090'>scope</span> <span m='2573360'>of</span> <span
  m='2573460'>6.006</span> <span m='2574740'>that's</span> <span
  m='2574940'>an</span> <span m='2575080'>in-place</span> <span
  m='2575840'>merge</span> <span m='2576160'>sort.</span> <span
  m='2579310'>And</span> <span m='2580720'>this</span> <span
  m='2580890'>in-place</span> <span m='2581360'>merge</span> <span
  m='2581665'>sort</span> <span m='2582480'>is</span> <span
  m='2582880'>kind</span> <span m='2583000'>of</span> <span
  m='2583070'>impractical</span> <span m='2584740'>in</span> <span
  m='2584880'>the</span> <span m='2584970'>sense</span> <span
  m='2585370'>that</span> <span m='2586770'>it</span> <span
  m='2586920'>doesn't</span> <span m='2587220'>do</span> <span
  m='2587350'>very</span> <span m='2587560'>well</span> <span
  m='2588590'>in</span> <span m='2588740'>terms</span> <span
  m='2588960'>of</span> <span m='2589030'>the</span> <span
  m='2589120'>constant</span> <span m='2589670'>factors.</span> </p><p><span
  m='2590140'>So</span> <span m='2590250'>while</span> <span
  m='2590980'>it's</span> <span m='2591180'>in-place</span> <span
  m='2592210'>and</span> <span m='2592370'>it's</span> <span
  m='2592510'>still</span> <span m='2593220'>theta</span> <span
  m='2593310'>n</span> <span m='2593400'>log n.</span> <span
  m='2595120'>The</span> <span m='2595210'>problem</span> <span
  m='2595570'>is</span> <span m='2595730'>that</span> <span
  m='2597030'>the</span> <span m='2597340'>running</span> <span
  m='2597660'>time</span> <span m='2598050'>of</span> <span
  m='2598130'>an</span> <span m='2598220'>in-place</span> <span
  m='2598650'>merge</span> <span m='2598880'>sort</span> <span
  m='2599720'>is</span> <span m='2600110'>much</span> <span
  m='2600410'>worse</span> <span m='2601430'>than</span> <span
  m='2601990'>the</span> <span m='2602230'>regular</span> <span
  m='2602590'>merge</span> <span m='2602770'>sort</span> <span
  m='2603090'>that</span> <span m='2603210'>uses</span> <span m='2603850'>theta
  n</span> <span m='2604290'>auxiliary</span> <span m='2604710'>space.</span>
  </p><p><span m='2605510'>So</span> <span m='2605660'>people</span> <span
  m='2605870'>don't</span> <span m='2606040'>really</span> <span
  m='2606240'>use</span> <span m='2607140'>in-place</span> <span
  m='2607520'>merge</span> <span m='2607990'>sort.</span> <span m='2608100'>It's
  a</span> <span m='2608130'>great</span> <span m='2608380'>paper.</span> <span
  m='2609360'>It's</span> <span m='2610030'>a</span> <span
  m='2610060'>great</span> <span m='2610270'>thing</span> <span
  m='2610430'>to</span> <span m='2610550'>read.</span> <span
  m='2611800'>Its</span> <span m='2612260'>analysis</span> <span
  m='2612710'>is</span> <span m='2614340'>a</span> <span m='2614390'>bit</span>
  <span m='2614550'>sophisticated</span> <span m='2616250'>for</span> <span
  m='2616460'>double</span> <span m='2616850'>0 6.</span> <span
  m='2617080'>So</span> <span m='2617200'>we</span> <span
  m='2617300'>wont</span> <span m='2617930'>go</span> <span
  m='2618060'>there.</span> <span m='2619030'>But</span> <span
  m='2619400'>it</span> <span m='2619510'>does</span> <span
  m='2619700'>exist.</span> <span m='2620330'>So</span> <span
  m='2620480'>you</span> <span m='2620590'>can</span> <span
  m='2620710'>take</span> <span m='2620890'>merge</span> <span
  m='2621080'>sort,</span> <span m='2621760'>and I</span> <span m='2621940'>just
  want to</span> <span m='2622130'>let you know</span> <span
  m='2622210'>that</span> <span m='2623020'>you</span> <span
  m='2623150'>can</span> <span m='2623250'>do</span> <span
  m='2623410'>things</span> <span m='2623640'>in-place.</span> </p><p><span
  m='2625230'>In</span> <span m='2625370'>terms</span> <span
  m='2625580'>of</span> <span m='2625650'>numbers,</span> <span
  m='2627280'>some</span> <span m='2627510'>experiments</span> <span
  m='2628580'>we</span> <span m='2629020'>ran</span> <span m='2629990'>a</span>
  <span m='2630090'>few</span> <span m='2630250'>years</span> <span
  m='2630560'>ago--</span> <span m='2630850'>so</span> <span
  m='2630990'>these</span> <span m='2631210'>may</span> <span
  m='2631300'>not</span> <span m='2631500'>be</span> <span
  m='2632120'>completely</span> <span m='2634280'>valid</span> <span
  m='2634940'>because</span> <span m='2635170'>I'm</span> <span
  m='2635240'>going</span> <span m='2635330'>to</span> <span
  m='2635370'>actually</span> <span m='2635580'>give</span> <span
  m='2635700'>you</span> <span m='2635800'>numbers--</span> <span
  m='2636650'>but</span> <span m='2636820'>merge</span> <span
  m='2637050'>sort</span> <span m='2639020'>in</span> <span
  m='2639160'>Python,</span> <span m='2642980'>if</span> <span
  m='2643110'>you</span> <span m='2643240'>write</span> <span
  m='2646140'>a</span> <span m='2646210'>little</span> <span
  m='2646460'>curve</span> <span m='2646700'>fit</span> <span
  m='2647380'>program</span> <span m='2647930'>to</span> <span
  m='2648040'>do</span> <span m='2648170'>this,</span> <span
  m='2649310'>is</span> <span m='2651060'>2.2n</span> <span
  m='2651536'>log</span> <span m='2652012'>n</span> <span
  m='2654510'>microseconds</span> <span m='2656100'>for</span> <span
  m='2656320'>a</span> <span m='2656350'>given</span> <span
  m='2656600'>n.</span> </p><p><span m='2657790'>So</span> <span
  m='2658360'>this</span> <span m='2658590'>is</span> <span
  m='2658740'>the</span> <span m='2658810'>merge</span> <span
  m='2659000'>sort</span> <span m='2659310'>routine.</span> <span
  m='2662450'>And</span> <span m='2662870'>if</span> <span
  m='2663010'>you</span> <span m='2663110'>look</span> <span
  m='2663300'>at</span> <span m='2664080'>insertion</span> <span
  m='2664570'>sort,</span> <span m='2664990'>in</span> <span
  m='2665120'>Python,</span> <span m='2672230'>that's</span> <span
  m='2672450'>something</span> <span m='2672780'>like</span> <span
  m='2673290'>0.2</span> <span m='2675040'>n</span> <span
  m='2675300'>square</span> <span m='2676700'>microseconds.</span> <span
  m='2679410'>So</span> <span m='2679770'>you</span> <span
  m='2679900'>see</span> <span m='2680070'>the</span> <span
  m='2680660'>constant</span> <span m='2681060'>factors</span> <span
  m='2681540'>here.</span> </p><p><span m='2682700'>If</span> <span
  m='2682800'>you</span> <span m='2682880'>do</span> <span
  m='2683010'>insertion</span> <span m='2683550'>sort in</span> <span
  m='2683830'>C,</span> <span m='2685340'>which</span> <span
  m='2685630'>is</span> <span m='2685920'>a</span> <span
  m='2686130'>compiled</span> <span m='2686520'>language,</span> <span
  m='2688230'>then,</span> <span m='2688960'>it's</span> <span
  m='2689770'>much</span> <span m='2689990'>faster.</span> <span
  m='2690420'>It's</span> <span m='2690520'>about</span> <span
  m='2692000'>20</span> <span m='2692410'>times</span> <span
  m='2692680'>faster.</span> <span m='2695440'>It's</span> <span
  m='2695660'>0.01</span> <span m='2696500'>n</span> <span
  m='2696690'>squared</span> <span m='2697030'>microseconds.</span> <span
  m='2699230'>So</span> <span m='2699410'>a</span> <span
  m='2699560'>little</span> <span m='2699780'>bit</span> <span
  m='2699890'>of</span> <span m='2699960'>practice</span> <span
  m='2700390'>on</span> <span m='2700470'>the</span> <span
  m='2700540'>side.</span> <span m='2700960'>We</span> <span
  m='2701310'>do</span> <span m='2701480'>ask</span> <span
  m='2701670'>you</span> <span m='2701760'>to</span> <span
  m='2701830'>write</span> <span m='2702070'>code.</span> <span
  m='2702840'>And</span> <span m='2702870'>this</span> <span
  m='2702980'>is</span> <span m='2703100'>important.</span> <span
  m='2703630'>The</span> <span m='2703750'>reason</span> <span
  m='2703990'>we're</span> <span m='2704220'>interested in</span> <span
  m='2704520'>algorithms</span> <span m='2704930'>is</span> <span
  m='2705000'>because</span> <span m='2705250'>people</span> <span
  m='2705460'>want</span> <span m='2705610'>to</span> <span
  m='2705670'>run</span> <span m='2705860'>them.</span> </p><p><span
  m='2706770'>And</span> <span m='2707450'>what</span> <span
  m='2707660'>you</span> <span m='2707750'>can</span> <span
  m='2707840'>see</span> <span m='2709000'>is</span> <span
  m='2709370'>that</span> <span m='2710420'>you</span> <span
  m='2710570'>can</span> <span m='2710670'>actually</span> <span
  m='2712220'>find</span> <span m='2712660'>an</span> <span
  m='2712850'>n--</span> <span m='2713730'>so</span> <span
  m='2713860'>regardless</span> <span m='2714290'>of</span> <span
  m='2714360'>whether</span> <span m='2714630'>you're</span> <span
  m='2715040'>Python</span> <span m='2715490'>or</span> <span
  m='2715600'>C,</span> <span m='2716300'>this</span> <span
  m='2716590'>tells</span> <span m='2716860'>you</span> <span
  m='2717030'>that</span> <span m='2717210'>asymptotic</span> <span
  m='2717690'>complexity</span> <span m='2718590'>is</span> <span
  m='2718910'>pretty</span> <span m='2719120'>important</span> <span
  m='2720020'>because,</span> <span m='2720220'>once</span> <span
  m='2720500'>n</span> <span m='2720830'>gets</span> <span
  m='2721080'>beyond</span> <span m='2721510'>about</span> <span
  m='2722240'>4,000,</span> <span m='2724140'>you're</span> <span
  m='2724300'>going</span> <span m='2724460'>to</span> <span
  m='2724550'>see</span> <span m='2724810'>that</span> <span
  m='2725680'>merge</span> <span m='2725850'>sort</span> <span
  m='2726150'>in</span> <span m='2726250'>Python</span> <span
  m='2727260'>beats</span> <span m='2727600'>insertion</span> <span
  m='2728050'>sort</span> <span m='2728340'>in</span> <span
  m='2728490'>C.</span> </p><p><span m='2730350'>So</span> <span
  m='2730520'>the</span> <span m='2730620'>constant</span> <span
  m='2731020'>factors</span> <span m='2732310'>get</span> <span
  m='2733780'>subsumed</span> <span m='2735430'>beyond</span> <span
  m='2736130'>certain</span> <span m='2736460'>values</span> <span
  m='2736820'>of</span> <span m='2736930'>n.</span> <span m='2737160'>So</span>
  <span m='2737280'>that's</span> <span m='2737450'>why</span> <span
  m='2737620'>asymptotic</span> <span m='2738040'>complexity</span> <span
  m='2738770'>is</span> <span m='2738900'>important.</span> <span
  m='2739960'>You</span> <span m='2740050'>do</span> <span
  m='2740150'>have</span> <span m='2740290'>a</span> <span
  m='2740350'>factor</span> <span m='2740610'>of</span> <span
  m='2740680'>20,</span> <span m='2740940'>here,</span> <span
  m='2741210'>but</span> <span m='2741400'>that</span> <span
  m='2741520'>doesn't</span> <span m='2741730'>really</span> <span
  m='2741870'>help</span> <span m='2742060'>you</span> <span
  m='2742760'>in</span> <span m='2743010'>terms</span> <span
  m='2743270'>of</span> <span m='2743760'>keeping</span> <span
  m='2744520'>an</span> <span m='2744690'>n</span> <span
  m='2744900'>square</span> <span m='2745470'>algorithm</span> <span
  m='2746310'>competitive.</span> <span m='2747440'>It</span> <span
  m='2747610'>stays</span> <span m='2747870'>competitive</span> <span
  m='2748300'>for</span> <span m='2748400'>a</span> <span
  m='2748410'>little</span> <span m='2748580'>bit</span> <span
  m='2748700'>longer,</span> <span m='2749400'>but</span> <span
  m='2749520'>then</span> <span m='2749910'>falls</span> <span
  m='2750180'>behind.</span> </p><p><span m='2754520'>That's</span> <span
  m='2755650'>what</span> <span m='2755800'>I</span> <span
  m='2755820'>wanted</span> <span m='2755980'>to</span> <span
  m='2756040'>cover</span> <span m='2756300'>for</span> <span
  m='2756450'>sorting.</span> <span m='2757440'>So</span> <span
  m='2757500'>hopefully,</span> <span m='2757810'>you have</span> <span
  m='2757930'>a</span> <span m='2757990'>sense</span> <span
  m='2758350'>of</span> <span m='2758800'>what</span> <span
  m='2758970'>happens</span> <span m='2759790'>with</span> <span
  m='2760060'>these</span> <span m='2760560'>two</span> <span
  m='2760710'>sorting</span> <span m='2761030'>algorithms.</span> <span
  m='2762040'>We'll</span> <span m='2762140'>look</span> <span
  m='2762350'>at</span> <span m='2762490'>a</span> <span m='2763120'>very</span>
  <span m='2763570'>different</span> <span m='2763860'>sorting</span> <span
  m='2764150'>algorithm</span> <span m='2764460'>next</span> <span
  m='2764730'>time,</span> <span m='2765200'>using</span> <span
  m='2765610'>heaps,</span> <span m='2765960'>which is a</span> <span
  m='2766740'>different</span> <span m='2767010'>data</span> <span
  m='2767210'>structure.</span> </p><p><span m='2768460'>The</span> <span
  m='2768700'>last</span> <span m='2769050'>thing</span> <span
  m='2769180'>I</span> <span m='2769220'>want</span> <span m='2769350'>to</span>
  <span m='2769430'>do</span> <span m='2770090'>in</span> <span
  m='2770200'>the</span> <span m='2770240'>couple</span> <span
  m='2770470'>minutes</span> <span m='2770720'>I</span> <span
  m='2770790'>have</span> <span m='2770940'>left</span> <span
  m='2771330'>is</span> <span m='2771610'>give</span> <span
  m='2771750'>you</span> <span m='2771940'>a</span> <span
  m='2771980'>little</span> <span m='2772380'>more</span> <span
  m='2773390'>intuition</span> <span m='2774050'>as</span> <span
  m='2774270'>to</span> <span m='2774390'>recurrence</span> <span
  m='2774810'>solving</span> <span m='2775760'>based</span> <span
  m='2776230'>on</span> <span m='2776370'>this</span> <span
  m='2776560'>diagram</span> <span m='2777090'>that</span> <span
  m='2777240'>I</span> <span m='2777320'>wrote</span> <span
  m='2777520'>up</span> <span m='2777670'>there.</span> <span
  m='2778680'>And</span> <span m='2778870'>so</span> <span
  m='2779010'>we're</span> <span m='2779110'>going</span> <span
  m='2779220'>to</span> <span m='2779260'>use</span> <span
  m='2779720'>exactly</span> <span m='2780230'>this</span> <span
  m='2780380'>structure.</span> <span m='2781460'>And</span> <span
  m='2781620'>we're</span> <span m='2781690'>going</span> <span
  m='2781810'>to</span> <span m='2781880'>look</span> <span
  m='2782070'>at</span> <span m='2782140'>a</span> <span
  m='2782240'>couple</span> <span m='2782500'>of</span> <span
  m='2782600'>different</span> <span m='2783290'>recurrences</span> <span
  m='2784250'>that</span> <span m='2784350'>I</span> <span
  m='2784380'>won't</span> <span m='2784610'>really</span> <span
  m='2785380'>motivate</span> <span m='2785980'>in</span> <span
  m='2786100'>terms</span> <span m='2786360'>of</span> <span
  m='2786760'>having</span> <span m='2787060'>a</span> <span
  m='2787110'>specific</span> <span m='2787510'>algorithm,</span> <span
  m='2788350'>but</span> <span m='2789110'>I'll</span> <span
  m='2789250'>just</span> <span m='2789420'>write</span> <span
  m='2789620'>out</span> <span m='2789820'>the</span> <span
  m='2790050'>recurrence.</span> <span m='2791150'>And</span> <span
  m='2794400'>we'll</span> <span m='2794520'>look</span> <span
  m='2794670'>at</span> <span m='2794730'>the</span> <span
  m='2794800'>recursion</span> <span m='2795200'>tree</span> <span
  m='2795390'>for</span> <span m='2795500'>that.</span> <span
  m='2796340'>And</span> <span m='2797010'>I'll</span> <span
  m='2797230'>try</span> <span m='2797530'>and</span> <span
  m='2799450'>tease</span> <span m='2799750'>out</span> <span
  m='2799890'>of</span> <span m='2799990'>you</span> <span
  m='2800300'>the</span> <span m='2800780'>complexity</span> <span
  m='2801410'>associated</span> <span m='2801900'>with</span> <span
  m='2802110'>these</span> <span m='2803460'>recurrences</span> <span
  m='2804870'>of</span> <span m='2804950'>the</span> <span
  m='2805010'>overall</span> <span m='2805380'>complexity.</span> </p><p><span
  m='2809480'>So</span> <span m='2809550'>let's</span> <span
  m='2809750'>take</span> <span m='2809900'>a</span> <span
  m='2809950'>look</span> <span m='2810180'>at</span> <span m='2811390'>T</span>
  <span m='2811740'>of</span> <span m='2812090'>n</span> <span
  m='2813580'>equals</span> <span m='2815480'>2</span> <span m='2815790'>T
  of</span> <span m='2816150'>n</span> <span m='2816510'>over</span> <span
  m='2816800'>2</span> <span m='2818000'>plus</span> <span m='2819290'>c</span>
  <span m='2819660'>n</span> <span m='2820030'>squared.</span> <span
  m='2822820'>Let me</span> <span m='2822990'>just</span> <span
  m='2823310'>call</span> <span m='2823460'>that</span> <span
  m='2823630'>c--</span> <span m='2825140'>no</span> <span
  m='2825260'>need</span> <span m='2825430'>for</span> <span
  m='2825500'>the</span> <span m='2825570'>brackets.</span> <span
  m='2828360'>So</span> <span m='2828700'>constant</span> <span
  m='2829180'>c</span> <span m='2829510'>times</span> <span m='2829800'>n</span>
  <span m='2829950'>squared.</span> </p><p><span m='2830970'>So</span> <span
  m='2831020'>if</span> <span m='2831070'>you</span> <span
  m='2831160'>had</span> <span m='2831280'>a</span> <span
  m='2831350'>crummy</span> <span m='2831680'>merge</span> <span
  m='2832150'>routine,</span> <span m='2833200'>and</span> <span
  m='2833600'>it</span> <span m='2833710'>was</span> <span
  m='2833830'>taking</span> <span m='2834140'>n</span> <span
  m='2834300'>square,</span> <span m='2835120'>and</span> <span
  m='2835190'>you</span> <span m='2835290'>coded</span> <span m='2835520'>it
  up</span> <span m='2835850'>wrong.</span> <span m='2838020'>It's</span> <span
  m='2838170'>not</span> <span m='2838290'>a</span> <span
  m='2838330'>great</span> <span m='2838510'>motivation</span> <span
  m='2839030'>for</span> <span m='2839110'>this</span> <span
  m='2839290'>recurrence,</span> <span m='2840050'>but</span> <span
  m='2840250'>it's</span> <span m='2841100'>a</span> <span
  m='2841450'>way</span> <span m='2841760'>this</span> <span
  m='2841950'>recurrence</span> <span m='2842350'>could have</span> <span
  m='2842530'>come</span> <span m='2842680'>up.</span> </p><p><span
  m='2843980'>So</span> <span m='2844200'>what</span> <span
  m='2844340'>does</span> <span m='2844480'>this</span> <span
  m='2845790'>recursive</span> <span m='2846220'>tree</span> <span
  m='2846470'>look</span> <span m='2846650'>like?</span> <span
  m='2847470'>Well</span> <span m='2848010'>it</span> <span
  m='2848170'>looks</span> <span m='2848550'>kind</span> <span m='2848760'>of
  the</span> <span m='2848870'>same,</span> <span m='2849170'>obviously.</span>
  <span m='2849580'>You have c n</span> <span m='2850010'>square;</span> <span
  m='2850870'>you have</span> <span m='2851270'>c n</span> <span
  m='2851590'>square</span> <span m='2851930'>divided</span> <span
  m='2852190'>by</span> <span m='2852340'>4;</span> <span m='2853210'>c n</span>
  <span m='2853570'>square</span> <span m='2853870'>divided</span> <span
  m='2854130'>by</span> <span m='2854270'>4;</span> <span m='2855720'>c</span>
  <span m='2856020'>n</span> <span m='2856120'>square</span> <span
  m='2856370'>divided</span> <span m='2856620'>by</span> <span
  m='2856740'>16,</span> <span m='2858850'>four</span> <span
  m='2859110'>times.</span> <span m='2860620'>Looking</span> <span
  m='2861070'>a</span> <span m='2861130'>little</span> <span
  m='2861310'>bit</span> <span m='2861480'>different</span> <span
  m='2862820'>from</span> <span m='2863060'>the other</span> <span
  m='2863290'>one.</span> </p><p><span m='2864460'>The</span> <span
  m='2864790'>levels</span> <span m='2865350'>and</span> <span
  m='2865500'>the</span> <span m='2865800'>leaves</span> <span
  m='2866240'>are</span> <span m='2866320'>exactly</span> <span
  m='2866730'>the</span> <span m='2866830'>same.</span> <span
  m='2867560'>Eventually</span> <span m='2868020'>n</span> <span
  m='2868210'>is</span> <span m='2868320'>going</span> <span
  m='2868460'>to</span> <span m='2868510'>go</span> <span
  m='2868640'>down</span> <span m='2868860'>to</span> <span
  m='2868950'>1.</span> <span m='2869720'>So</span> <span m='2869880'>you</span>
  <span m='2870020'>will</span> <span m='2870240'>see</span> <span
  m='2871848'>c</span> <span m='2872250'>all</span> <span m='2872390'>the</span>
  <span m='2872460'>way</span> <span m='2872630'>here.</span> <span
  m='2873280'>And</span> <span m='2873590'>you're</span> <span
  m='2873740'>going</span> <span m='2873840'>to</span> <span
  m='2873880'>have</span> <span m='2874090'>n</span> <span
  m='2874370'>leaves.</span> <span m='2877880'>And</span> <span
  m='2878160'>you</span> <span m='2878280'>will</span> <span
  m='2878460'>have,</span> <span m='2879070'>as</span> <span
  m='2879310'>before,</span> <span m='2880170'>1</span> <span
  m='2880470'>plus</span> <span m='2880730'>log</span> <span
  m='2881040'>n</span> <span m='2881180'>levels.</span> <span
  m='2883380'>Everything</span> <span m='2883730'>is</span> <span
  m='2883840'>the</span> <span m='2883910'>same.</span> </p><p><span
  m='2885070'>And</span> <span m='2885190'>this</span> <span
  m='2885350'>is</span> <span m='2885540'>why</span> <span m='2885780'>I</span>
  <span m='2885870'>like</span> <span m='2886160'>this</span> <span
  m='2886300'>recursive</span> <span m='2886710'>tree</span> <span
  m='2886920'>formulation</span> <span m='2887430'>so</span> <span
  m='2887590'>much</span> <span m='2888340'>because,</span> <span
  m='2888610'>now,</span> <span m='2888780'>all</span> <span
  m='2888940'>I</span> <span m='2889000'>have</span> <span m='2889130'>to</span>
  <span m='2889230'>do</span> <span m='2889370'>is</span> <span
  m='2889570'>add</span> <span m='2889800'>up</span> <span
  m='2890630'>the</span> <span m='2890730'>work</span> <span
  m='2891820'>associated</span> <span m='2892410'>with</span> <span
  m='2893530'>each</span> <span m='2893720'>of</span> <span
  m='2893810'>the</span> <span m='2893880'>levels</span> <span
  m='2894710'>to</span> <span m='2894810'>get</span> <span
  m='2895040'>the</span> <span m='2895130'>solution</span> <span
  m='2895540'>to</span> <span m='2895610'>the</span> <span
  m='2895780'>recurrence.</span> <span m='2897100'>Now,</span> <span
  m='2897230'>take</span> <span m='2897390'>a</span> <span
  m='2897440'>look</span> <span m='2897590'>at</span> <span
  m='2897640'>what</span> <span m='2897760'>happens,</span> <span
  m='2898050'>here.</span> <span m='2898770'>c n</span> <span
  m='2899210'>square;</span> <span m='2899710'>c n</span> <span
  m='2900060'>square</span> <span m='2900440'>divided</span> <span
  m='2900720'>by</span> <span m='2900870'>2;</span> <span m='2902430'>c n</span>
  <span m='2902940'>square</span> <span m='2903390'>divided</span> <span
  m='2903730'>by</span> <span m='2903930'>4.</span> <span m='2905350'>And</span>
  <span m='2905680'>this</span> <span m='2905950'>is</span> <span
  m='2906980'>n</span> <span m='2907270'>times</span> <span
  m='2907610'>c.</span> <span m='2910890'>So</span> <span
  m='2911060'>what</span> <span m='2911180'>does</span> <span
  m='2911270'>that</span> <span m='2911430'>add</span> <span
  m='2911600'>up</span> <span m='2911740'>to?</span> </p><p><span
  m='2914316'>AUDIENCE: [INAUDIBLE]</span> </p><p><span m='2916070'>PROFESSOR:
  Yeah,</span> <span m='2916270'>exactly.</span> <span
  m='2916880'>Exactly</span> <span m='2917280'>right.</span> <span
  m='2917920'>So</span> <span m='2918150'>if</span> <span m='2918300'>you</span>
  <span m='2918390'>look</span> <span m='2918550'>at</span> <span
  m='2918610'>what</span> <span m='2918730'>happens,</span> <span
  m='2919030'>here,</span> <span m='2919640'>this</span> <span
  m='2920010'>dominates.</span> <span m='2924340'>All</span> <span
  m='2924590'>of</span> <span m='2924670'>the</span> <span
  m='2924730'>other</span> <span m='2924940'>things are</span> <span
  m='2925200'>actually</span> <span m='2925510'>less</span> <span
  m='2925720'>than</span> <span m='2925860'>that.</span> <span
  m='2927520'>And</span> <span m='2927670'>you</span> <span
  m='2927790'>said</span> <span m='2927970'>bounded</span> <span
  m='2928270'>by</span> <span m='2928390'>two</span> <span m='2928580'>c</span>
  <span m='2928810'>n</span> <span m='2928920'>square</span> <span
  m='2929250'>because</span> <span m='2929780'>this</span> <span
  m='2929990'>part</span> <span m='2930240'>is</span> <span
  m='2930340'>bounded</span> <span m='2930640'>by</span> <span
  m='2930770'>c</span> <span m='2930980'>n</span> <span
  m='2931090'>square</span> <span m='2931420'>and</span> <span
  m='2931570'>I</span> <span m='2931590'>already</span> <span
  m='2931900'>have</span> <span m='2932250'>c</span> <span m='2932430'>n</span>
  <span m='2932550'>square</span> <span m='2933170'>up</span> <span
  m='2933330'>at</span> <span m='2933380'>the</span> <span
  m='2933480'>top.</span> </p><p><span m='2934490'>So</span> <span
  m='2934690'>this</span> <span m='2935250'>particular</span> <span
  m='2936520'>algorithm</span> <span m='2937030'>that corresponds</span> <span
  m='2937200'>to</span> <span m='2937610'>this</span> <span
  m='2937800'>crummy</span> <span m='2938100'>merge</span> <span
  m='2938370'>sort,</span> <span m='2938760'>or</span> <span
  m='2938880'>wherever</span> <span m='2939120'>this</span> <span
  m='2939360'>recurrence</span> <span m='2939820'>came</span> <span
  m='2940060'>from,</span> <span m='2942300'>is</span> <span
  m='2944170'>a</span> <span m='2944310'>theta n squared</span> <span
  m='2945390'>algorithm.</span> <span m='2946700'>And</span> <span
  m='2947180'>in</span> <span m='2947390'>this</span> <span
  m='2947650'>case,</span> <span m='2948450'>all</span> <span
  m='2948730'>of</span> <span m='2948830'>the</span> <span
  m='2948910'>work</span> <span m='2949430'>done</span> <span
  m='2950520'>is</span> <span m='2951120'>at</span> <span m='2951330'>the</span>
  <span m='2951410'>root--</span> <span m='2952390'>at</span> <span
  m='2952510'>the</span> <span m='2952610'>top</span> <span
  m='2952880'>level</span> <span m='2953160'>of</span> <span
  m='2953260'>the</span> <span m='2953340'>recursion.</span> <span
  m='2955360'>Here,</span> <span m='2956310'>there</span> <span
  m='2956450'>was</span> <span m='2956560'>a</span> <span
  m='2956630'>roughly</span> <span m='2957140'>equal</span> <span
  m='2957420'>amount</span> <span m='2957650'>of</span> <span
  m='2957730'>work</span> <span m='2958050'>done</span> <span
  m='2958720'>in</span> <span m='2958900'>each</span> <span
  m='2959230'>of</span> <span m='2959320'>the</span> <span
  m='2959390'>different</span> <span m='2959700'>levels.</span> <span
  m='2961630'>Here,</span> <span m='2963240'>all of</span> <span
  m='2963540'>the</span> <span m='2963640'>work</span> <span
  m='2963850'>was</span> <span m='2964020'>done</span> <span
  m='2964550'>at</span> <span m='2964770'>the</span> <span
  m='2964850'>root.</span> </p><p><span m='2966610'>And</span> <span
  m='2966840'>so</span> <span m='2966940'>to</span> <span
  m='2967330'>close</span> <span m='2967570'>up</span> <span
  m='2967690'>shop,</span> <span m='2968010'>here,</span> <span
  m='2969260'>let</span> <span m='2969460'>me</span> <span
  m='2970710'>just</span> <span m='2971060'>give</span> <span
  m='2971230'>you</span> <span m='2971400'>real</span> <span
  m='2971610'>quick</span> <span m='2972650'>a</span> <span
  m='2972720'>recurrence</span> <span m='2973690'>where</span> <span
  m='2974210'>all</span> <span m='2974430'>of</span> <span
  m='2974530'>the</span> <span m='2974620'>work</span> <span
  m='2975390'>is</span> <span m='2975590'>done</span> <span m='2975880'>at
  the</span> <span m='2976000'>leaves,</span> <span m='2977860'>just</span>
  <span m='2978130'>for</span> <span m='2978970'>closure.</span> <span
  m='2980470'>So</span> <span m='2980820'>if</span> <span m='2981000'>I</span>
  <span m='2981080'>had,</span> <span m='2981310'>magically,</span> <span
  m='2981960'>a</span> <span m='2982760'>merge</span> <span
  m='2983030'>routine</span> <span m='2984240'>that</span> <span
  m='2984780'>actually</span> <span m='2985430'>happened</span> <span
  m='2985770'>in</span> <span m='2985870'>constant</span> <span
  m='2986350'>time,</span> <span m='2987110'>either</span> <span
  m='2987360'>through</span> <span m='2987790'>buggy</span> <span
  m='2988140'>analysis,</span> <span m='2988710'>or</span> <span
  m='2988800'>because</span> <span m='2989030'>of</span> <span m='2989090'>it
  was</span> <span m='2989210'>buggy,</span> <span m='2990680'>then</span> <span
  m='2991670'>what</span> <span m='2991890'>does</span> <span
  m='2992020'>the</span> <span m='2992510'>tree</span> <span
  m='2993700'>look</span> <span m='2993960'>like</span> <span
  m='2994440'>for</span> <span m='2994650'>that?</span> </p><p><span
  m='2995650'>And</span> <span m='2995940'>I</span> <span m='2996000'>can</span>
  <span m='2996140'>think of</span> <span m='2996340'>this</span> <span
  m='2996570'>as</span> <span m='2996690'>being</span> <span m='2997190'>theta
  1.</span> <span m='2998280'>Or</span> <span m='2998500'>I</span> <span
  m='2998550'>can</span> <span m='2998670'>think</span> <span
  m='2998810'>of</span> <span m='2998900'>this</span> <span
  m='2999140'>as</span> <span m='2999290'>being</span> <span
  m='2999630'>just</span> <span m='2999800'>a</span> <span
  m='2999840'>constant</span> <span m='3000310'>c.</span> <span
  m='3001240'>I'll</span> <span m='3001380'>stick</span> <span
  m='3001620'>with</span> <span m='3001750'>that.</span> <span
  m='3002030'>So</span> <span m='3002100'>I</span> <span m='3002170'>have</span>
  <span m='3002300'>c,</span> <span m='3003773'>c,</span> <span
  m='3004755'>c.</span> <span m='3009890'>Woah,</span> <span
  m='3010260'>I</span> <span m='3010350'>tried</span> <span
  m='3010480'>to</span> <span m='3010570'>move</span> <span
  m='3010720'>that</span> <span m='3010830'>up.</span> <span
  m='3011350'>That</span> <span m='3011490'>doesn't</span> <span
  m='3011690'>work.</span> </p><p><span m='3013750'>So</span> <span
  m='3014060'>I</span> <span m='3014210'>have</span> <span m='3014350'>n</span>
  <span m='3014610'>leaves,</span> <span m='3015000'>as</span> <span
  m='3015130'>before.</span> <span m='3018430'>And</span> <span
  m='3018530'>so</span> <span m='3018650'>if</span> <span m='3018730'>I</span>
  <span m='3018790'>look</span> <span m='3019000'>at</span> <span
  m='3019120'>what</span> <span m='3019380'>I have,</span> <span
  m='3019610'>here,</span> <span m='3019940'>I</span> <span
  m='3019980'>have</span> <span m='3020170'>c</span> <span m='3020530'>at</span>
  <span m='3020610'>the</span> <span m='3020700'>top</span> <span
  m='3020930'>level.</span> <span m='3021840'>I</span> <span
  m='3021940'>have</span> <span m='3022160'>2c,</span> <span
  m='3024730'>and</span> <span m='3024950'>so</span> <span m='3025070'>on</span>
  <span m='3025210'>and</span> <span m='3025300'>so</span> <span
  m='3025430'>forth.</span> <span m='3025870'>4c.</span> <span m='3026930'>And
  then</span> <span m='3027330'>I</span> <span m='3027450'>go</span> <span
  m='3027620'>all</span> <span m='3027730'>the</span> <span
  m='3027790'>way</span> <span m='3027900'>down to</span> <span
  m='3028270'>nc.</span> </p><p><span m='3030940'>And</span> <span
  m='3031110'>so</span> <span m='3031670'>what</span> <span
  m='3031840'>happens</span> <span m='3032100'>here</span> <span
  m='3032410'>is</span> <span m='3032730'>this</span> <span
  m='3033000'>dominates.</span> <span m='3036010'>And</span> <span
  m='3036210'>so,</span> <span m='3036320'>in</span> <span
  m='3036430'>this</span> <span m='3036660'>recurrence,</span> <span
  m='3039840'>the</span> <span m='3039980'>whole</span> <span
  m='3040160'>thing</span> <span m='3040300'>runs</span> <span
  m='3040550'>in</span> <span m='3040650'>theta n.</span> <span
  m='3041600'>So</span> <span m='3042630'>the</span> <span
  m='3042830'>solution</span> <span m='3043280'>to</span> <span
  m='3043350'>that</span> <span m='3043610'>is</span> <span m='3043690'>theta
  n.</span> <span m='3046300'>And</span> <span m='3046650'>what</span> <span
  m='3046800'>you</span> <span m='3046880'>have</span> <span
  m='3047090'>here</span> <span m='3047400'>is</span> <span
  m='3050390'>all</span> <span m='3050590'>of</span> <span
  m='3050650'>the</span> <span m='3050740'>work</span> <span
  m='3050970'>being</span> <span m='3051190'>done</span> <span
  m='3051520'>at</span> <span m='3051750'>the leaves.</span> </p><p><span
  m='3054450'>We're not</span> <span m='3054580'>going to</span> <span
  m='3054670'>really</span> <span m='3054890'>cover</span> <span
  m='3055320'>this</span> <span m='3055870'>theorem</span> <span
  m='3056320'>that</span> <span m='3058080'>gives</span> <span
  m='3058250'>you</span> <span m='3058440'>a</span> <span
  m='3058710'>mechanical</span> <span m='3059370'>way</span> <span
  m='3059650'>of</span> <span m='3059790'>figuring</span> <span
  m='3060280'>this</span> <span m='3060510'>out</span> <span
  m='3061180'>because</span> <span m='3061480'>we</span> <span
  m='3061590'>think</span> <span m='3062340'>the</span> <span
  m='3063230'>recursive</span> <span m='3063710'>tree</span> <span
  m='3064300'>is</span> <span m='3064560'>a</span> <span
  m='3064630'>better</span> <span m='3064820'>way</span> <span
  m='3064990'>of</span> <span m='3065060'>looking</span> <span
  m='3065310'>at.</span> <span m='3065780'>But</span> <span
  m='3065890'>you</span> <span m='3065980'>can</span> <span
  m='3066080'>see</span> <span m='3066400'>that,</span> <span
  m='3066940'>depending</span> <span m='3067310'>on</span> <span
  m='3067450'>what</span> <span m='3067680'>that</span> <span
  m='3067870'>function</span> <span m='3068300'>is,</span> <span
  m='3068920'>in</span> <span m='3069060'>terms</span> <span
  m='3069370'>of</span> <span m='3069610'>the</span> <span
  m='3070210'>work</span> <span m='3070580'>being</span> <span
  m='3070770'>done</span> <span m='3070950'>in</span> <span
  m='3071010'>the</span> <span m='3071080'>merge</span> <span
  m='3071480'>routine,</span> <span m='3072130'>you'd</span> <span
  m='3072240'>have</span> <span m='3072450'>different</span> <span
  m='3072790'>versions</span> <span m='3073180'>of</span> <span
  m='3073270'>recurrences.</span> <span m='3074690'>I'll</span> <span
  m='3074860'>stick</span> <span m='3075030'>around,</span> <span
  m='3075390'>and</span> <span m='3075640'>people</span> <span
  m='3075720'>who</span> <span m='3075940'>answered</span> <span
  m='3076160'>questions,</span> <span m='3076780'>please</span> <span
  m='3076990'>pick</span> <span m='3077120'>up</span> <span
  m='3077210'>you</span> <span m='3077450'>cushions.</span> <span
  m='3078270'>See</span> <span m='3078420'>you</span> <span
  m='3078470'>next</span> <span m='3078690'>time.</span> </p>
uid: 24c75ab567c707163ea44a39a97374c8
type: course
layout: video
---
