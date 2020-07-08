---
about_this_resource_text: ''
embedded_media:
  - id: Video-YouTube-Stream
    media_location: cllmFIIbzrc
    parent_uid: 070b68f3638b910196a177c831982623
    title: Video-YouTube-Stream
    type: Video
    uid: d215dc0cd4b8ff617d15d0cd51eb52a6
  - id: 3Play-3Play YouTube id-Stream
    media_location: cllmFIIbzrc
    parent_uid: 070b68f3638b910196a177c831982623
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 51223d80f3df571a37c67edbebb18f87
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/cllmFIIbzrc/default.jpg'
    parent_uid: 070b68f3638b910196a177c831982623
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: d8969c35e031362b820c1e7263c37647
  - id: cllmFIIbzrc.srt
    parent_uid: 070b68f3638b910196a177c831982623
    technical_location: >-
      https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/trees/location-location-location-regression-trees-for-housing-data-recitation/video-5-putting-it-all-together/video-5-putting-it-all-together-0/cllmFIIbzrc.srt
    title: 3play caption file
    type: null
    uid: 3c97d1e10c6be11488c9c334e2573081
  - id: cllmFIIbzrc.pdf
    parent_uid: 070b68f3638b910196a177c831982623
    technical_location: >-
      https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/trees/location-location-location-regression-trees-for-housing-data-recitation/video-5-putting-it-all-together/video-5-putting-it-all-together-0/cllmFIIbzrc.pdf
    title: 3play pdf file
    type: null
    uid: 3d33c73056853b59d8d349647b69a786
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 070b68f3638b910196a177c831982623
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 9820523e1f6b0c2cee6874c90ac100b3
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 070b68f3638b910196a177c831982623
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 4adcefa22f352d39e6527974c0cc8b6f
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MIT15.071S17/MIT15_071S17_Session_4.4.06_300k.mp4
    parent_uid: 070b68f3638b910196a177c831982623
    title: Video-Internet Archive-MP4
    type: Video
    uid: e3c2331f1f65fee8081d218e89646f0e
inline_embed_id: 55313628video5puttingitalltogether36854245
order_index: 996
parent_uid: aad83d5378a1ef15e27fe7684e1f8761
related_resources_text: ''
short_url: video-5-putting-it-all-together-0
technical_location: >-
  https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/trees/location-location-location-regression-trees-for-housing-data-recitation/video-5-putting-it-all-together/video-5-putting-it-all-together-0
title: 'Video 5: Putting it all Together'
transcript: >-
  <p><span m='4500'>In</span> <span m='4789'>the</span> <span
  m='5078'>previous</span> <span m='5367'>video,</span> <span m='5656'>we</span>
  <span m='5945'>got</span> <span m='6235'>a</span> <span m='6524'>feel</span>
  <span m='6813'>for</span> <span m='7102'>how</span> <span
  m='7391'>regression</span> <span m='7680'>trees</span> <span
  m='7970'>can</span> <span m='8470'>do</span> <span m='8970'>things</span>
  <span m='9470'>linear</span> <span m='9970'>regression</span> <span
  m='10470'>cannot.</span> </p><p><span m='10970'>But</span> <span
  m='11202'>what</span> <span m='11434'>really</span> <span
  m='11666'>matters</span> <span m='11898'>at</span> <span m='12130'>the</span>
  <span m='12362'>end</span> <span m='12594'>of</span> <span
  m='12826'>the</span> <span m='13058'>day</span> <span m='13290'>is</span>
  <span m='13640'>whether</span> <span m='13990'>it</span> <span
  m='14340'>can</span> <span m='14690'>predict</span> <span
  m='15040'>things</span> <span m='15390'>better</span> <span
  m='15740'>than</span> <span m='16090'>linear</span> <span
  m='16440'>regression.</span> </p><p><span m='16790'>And</span> <span
  m='17165'>so</span> <span m='17541'>let's</span> <span m='17917'>try</span>
  <span m='18292'>that</span> <span m='18668'>right</span> <span
  m='19044'>now.</span> </p><p><span m='19420'>We're</span> <span
  m='19642'>going</span> <span m='19864'>to</span> <span m='20086'>try</span>
  <span m='20308'>to</span> <span m='20531'>predict</span> <span
  m='20753'>house</span> <span m='20975'>prices</span> <span
  m='21197'>using</span> <span m='21420'>all</span> <span m='21750'>the</span>
  <span m='22080'>variables</span> <span m='22410'>we</span> <span
  m='22740'>have</span> <span m='23070'>available</span> <span
  m='23400'>to</span> <span m='23730'>us.</span> </p><p><span
  m='24060'>So</span> <span m='24881'>we'll</span> <span m='25703'>load</span>
  <span m='26525'>the</span> <span m='27346'>caTools</span> <span
  m='28168'>library.</span> </p><p><span m='28990'>That</span> <span
  m='29408'>will</span> <span m='29826'>help</span> <span m='30244'>us</span>
  <span m='30662'>do</span> <span m='31080'>a</span> <span
  m='31498'>split</span> <span m='31916'>on</span> <span m='32334'>the</span>
  <span m='32752'>data.</span> </p><p><span m='33170'>We'll</span> <span
  m='33608'>set</span> <span m='34047'>the</span> <span m='34486'>seed</span>
  <span m='34925'>so</span> <span m='35364'>our</span> <span
  m='35803'>results</span> <span m='36242'>are</span> <span
  m='36681'>reproducible.</span> </p><p><span m='37120'>And</span> <span
  m='37827'>we'll</span> <span m='38535'>say</span> <span m='39242'>our</span>
  <span m='39950'>split</span> <span m='40657'>will</span> <span
  m='41365'>be</span> <span m='42072'>on</span> <span m='42780'>the</span> <span
  m='43487'>Boston</span> <span m='44195'>house</span> <span
  m='44902'>prices</span> <span m='45610'>and</span> <span
  m='46361'>we'll</span> <span m='47112'>split</span> <span m='47863'>it</span>
  <span m='48615'>70%</span> <span m='49366'>training,</span> <span
  m='50117'>30%</span> <span m='50868'>test.</span> </p><p><span
  m='51620'>So</span> <span m='52085'>our</span> <span m='52550'>training</span>
  <span m='53016'>data</span> <span m='53481'>is</span> <span m='53947'>a</span>
  <span m='54412'>subset</span> <span m='54878'>of</span> <span
  m='55343'>the</span> <span m='55809'>Boston</span> <span m='56274'>data</span>
  <span m='56740'>where</span> <span m='57312'>the</span> <span
  m='57884'>split</span> <span m='58456'>is</span> <span m='59028'>TRUE.</span>
  </p><p><span m='59600'>And</span> <span m='60042'>the</span> <span
  m='60485'>testing</span> <span m='60928'>data</span> <span m='61370'>is</span>
  <span m='61813'>the</span> <span m='62256'>subset</span> <span
  m='62699'>of</span> <span m='63141'>the</span> <span m='63584'>Boston</span>
  <span m='64027'>data</span> <span m='64470'>where</span> <span
  m='65050'>the</span> <span m='65630'>split</span> <span m='66210'>is</span>
  <span m='66790'>FALSE.</span> </p><p><span m='67370'>OK,</span> <span
  m='67758'>first</span> <span m='68146'>of</span> <span m='68534'>all,</span>
  <span m='68922'>let's</span> <span m='69310'>make</span> <span
  m='69698'>a</span> <span m='70086'>linear</span> <span
  m='70474'>regression</span> <span m='70862'>model,</span> <span
  m='71250'>nice</span> <span m='71780'>and</span> <span m='72310'>easy.</span>
  </p><p><span m='72840'>It's</span> <span m='73505'>a</span> <span
  m='74171'>linear</span> <span m='74837'>model</span> <span
  m='75502'>and</span> <span m='76168'>the</span> <span
  m='76834'>variables</span> <span m='77500'>are</span> <span
  m='78921'>latitude,</span> <span m='80342'>longitude,</span> <span
  m='81763'>crime,</span> <span m='83185'>zoning,</span> <span
  m='84606'>industry,</span> <span m='86027'>whether</span> <span
  m='87448'>it's</span> <span m='88870'>on</span> <span m='89688'>the</span>
  <span m='90506'>Charles</span> <span m='91324'>River</span> <span
  m='92142'>or</span> <span m='92960'>not,</span> <span m='93778'>air</span>
  <span m='94596'>pollution,</span> <span m='95414'>rooms,</span> <span
  m='96232'>age,</span> <span m='97050'>distance,</span> <span
  m='98058'>another</span> <span m='99067'>form</span> <span
  m='100075'>of</span> <span m='101084'>distance,</span> <span
  m='102092'>tax</span> <span m='103101'>rates,</span> <span
  m='104110'>and</span> <span m='104987'>the</span> <span
  m='105865'>pupil-teacher</span> <span m='106742'>ratio.</span> </p><p><span
  m='107620'>The</span> <span m='108450'>data</span> <span m='109280'>is</span>
  <span m='110110'>training</span> <span m='110940'>data.</span> </p><p><span
  m='111770'>OK,</span> <span m='112411'>let's</span> <span
  m='113052'>see</span> <span m='113693'>what</span> <span m='114334'>our</span>
  <span m='114975'>linear</span> <span m='115616'>regression</span> <span
  m='116257'>looks</span> <span m='116898'>like.</span> </p><p><span
  m='117539'>So</span> <span m='117889'>we</span> <span m='118239'>see</span>
  <span m='118589'>that</span> <span m='118939'>the</span> <span
  m='119289'>latitude</span> <span m='119639'>and</span> <span
  m='119989'>longitude</span> <span m='120339'>are</span> <span
  m='120689'>not</span> <span m='121040'>significant</span> <span
  m='121361'>for</span> <span m='121682'>a</span> <span m='122003'>linear</span>
  <span m='122325'>regression,</span> <span m='122646'>which</span> <span
  m='122967'>is</span> <span m='123288'>perhaps</span> <span
  m='123610'>not</span> <span m='123948'>surprising</span> <span
  m='124287'>because</span> <span m='124625'>linear</span> <span
  m='124964'>regression</span> <span m='125302'>didn't</span> <span
  m='125641'>seem</span> <span m='125980'>to</span> <span m='126315'>be</span>
  <span m='126650'>able</span> <span m='126985'>to</span> <span
  m='127320'>take</span> <span m='127655'>advantage</span> <span
  m='127990'>of</span> <span m='128325'>them.</span> </p><p><span
  m='128660'>Crime</span> <span m='129357'>is</span> <span
  m='130055'>very</span> <span m='130752'>important.</span> </p><p><span
  m='131450'>The</span> <span m='131911'>residential</span> <span
  m='132373'>zoning</span> <span m='132835'>might</span> <span
  m='133296'>be</span> <span m='133758'>important.</span> </p><p><span
  m='134220'>Whether</span> <span m='134450'>it's</span> <span
  m='134680'>on</span> <span m='134910'>the</span> <span
  m='135140'>Charles</span> <span m='135370'>River</span> <span
  m='135600'>or</span> <span m='136138'>not</span> <span m='136676'>is</span>
  <span m='137214'>a</span> <span m='137752'>useful</span> <span
  m='138290'>factor.</span> </p><p><span m='138829'>Air</span> <span
  m='139100'>pollution</span> <span m='139372'>does</span> <span
  m='139644'>seem</span> <span m='139916'>to</span> <span
  m='140188'>matter--</span> <span m='140460'>the</span> <span
  m='140932'>coefficient</span> <span m='141405'>is</span> <span
  m='141878'>negative,</span> <span m='142351'>as</span> <span
  m='142824'>you'd</span> <span m='143297'>expect.</span> </p><p><span
  m='143770'>The</span> <span m='144190'>average</span> <span
  m='144610'>number</span> <span m='145030'>of</span> <span
  m='145450'>rooms</span> <span m='145870'>is</span> <span
  m='146290'>significant.</span> </p><p><span m='146710'>The</span> <span
  m='147196'>age</span> <span m='147682'>is</span> <span
  m='148168'>somewhat</span> <span m='148654'>important.</span> </p><p><span
  m='149140'>Distance</span> <span m='149645'>to</span> <span
  m='150150'>centers</span> <span m='150655'>of</span> <span
  m='151160'>employment</span> <span m='151665'>(DIS),</span> <span
  m='152170'>is</span> <span m='152790'>very</span> <span
  m='153410'>important.</span> </p><p><span m='154030'>Distance</span> <span
  m='154456'>to</span> <span m='154882'>highways</span> <span
  m='155308'>and</span> <span m='155735'>tax</span> <span m='156161'>is</span>
  <span m='156587'>somewhat</span> <span m='157013'>important,</span> <span
  m='157440'>and</span> <span m='158000'>the</span> <span
  m='158560'>pupil-teacher</span> <span m='159120'>ratio</span> <span
  m='159680'>is</span> <span m='160240'>also</span> <span m='160800'>very</span>
  <span m='161360'>significant.</span> </p><p><span m='161920'>Some</span> <span
  m='162156'>of</span> <span m='162393'>these</span> <span
  m='162630'>might</span> <span m='162866'>be</span> <span
  m='163103'>correlated,</span> <span m='163340'>so</span> <span
  m='163626'>we</span> <span m='163912'>can't</span> <span m='164198'>put</span>
  <span m='164484'>too</span> <span m='164770'>much</span> <span
  m='165056'>stock</span> <span m='165342'>in</span> <span
  m='165628'>necessarily</span> <span m='165914'>interpreting</span> <span
  m='166200'>them</span> <span m='166678'>directly,</span> <span
  m='167156'>but</span> <span m='167634'>it's</span> <span
  m='168112'>interesting.</span> </p><p><span m='168590'>The</span> <span
  m='169244'>adjusted</span> <span m='169898'>R</span> <span
  m='170552'>squared</span> <span m='171206'>is</span> <span
  m='171860'>0.65,</span> <span m='172514'>which</span> <span
  m='173168'>is</span> <span m='173822'>pretty</span> <span
  m='174476'>good.</span> </p><p><span m='175130'>So</span> <span
  m='175635'>because</span> <span m='176141'>it's</span> <span
  m='176646'>kind</span> <span m='177152'>of</span> <span m='177657'>hard</span>
  <span m='178163'>to</span> <span m='178668'>compare</span> <span
  m='179174'>out</span> <span m='179680'>of</span> <span
  m='180212'>sample</span> <span m='180744'>accuracy</span> <span
  m='181276'>for</span> <span m='181808'>regression,</span> <span
  m='182340'>we</span> <span m='182518'>need</span> <span m='182696'>to</span>
  <span m='182874'>think</span> <span m='183052'>of</span> <span
  m='183230'>how</span> <span m='183409'>we're</span> <span
  m='183587'>going</span> <span m='183765'>to</span> <span m='183943'>do</span>
  <span m='184121'>that.</span> </p><p><span m='184300'>With</span> <span
  m='184682'>classification,</span> <span m='185064'>we</span> <span
  m='185446'>just</span> <span m='185828'>say,</span> <span
  m='186210'>this</span> <span m='186592'>method</span> <span
  m='186974'>got</span> <span m='187356'>X%</span> <span
  m='187738'>correct</span> <span m='188120'>and</span> <span
  m='188513'>this</span> <span m='188906'>method</span> <span
  m='189300'>got</span> <span m='189693'>Y%</span> <span
  m='190086'>correct.</span> </p><p><span m='190480'>Well,</span> <span
  m='190931'>since</span> <span m='191383'>we're</span> <span
  m='191835'>doing</span> <span m='192286'>continuous</span> <span
  m='192738'>variables,</span> <span m='193190'>let's</span> <span
  m='193557'>calculate</span> <span m='193925'>the</span> <span
  m='194292'>sum</span> <span m='194660'>of</span> <span
  m='195027'>squared</span> <span m='195395'>error,</span> <span
  m='195762'>which</span> <span m='196130'>we</span> <span
  m='196533'>discussed</span> <span m='196937'>in</span> <span
  m='197341'>the</span> <span m='197745'>original</span> <span
  m='198148'>linear</span> <span m='198552'>regression</span> <span
  m='198956'>video.</span> </p><p><span m='199360'>So</span> <span
  m='199995'>let's</span> <span m='200630'>say</span> <span
  m='201265'>the</span> <span m='201900'>linear</span> <span
  m='202535'>regression's</span> <span m='203170'>predictions</span> <span
  m='203805'>are</span> <span m='204440'>predict(linreg,</span> <span
  m='205771'>newdata=test)</span> <span m='207102'>and</span> <span
  m='208434'>the</span> <span m='209765'>linear</span> <span
  m='211097'>regression</span> <span m='212428'>sum</span> <span
  m='213760'>of</span> <span m='214421'>squared</span> <span
  m='215083'>errors</span> <span m='215745'>is</span> <span
  m='216407'>simply</span> <span m='217069'>the</span> <span
  m='217730'>sum</span> <span m='218392'>of</span> <span m='219054'>the</span>
  <span m='219716'>predicted</span> <span m='220378'>values</span> <span
  m='221040'>versus</span> <span m='222000'>the</span> <span
  m='222960'>actual</span> <span m='223920'>values</span> <span
  m='224880'>squared.</span> </p><p><span m='225840'>So</span> <span
  m='227015'>let's</span> <span m='228190'>see</span> <span
  m='229365'>what</span> <span m='230540'>that</span> <span
  m='231715'>number</span> <span m='232890'>is--</span> <span
  m='234065'>3,037.008.</span> </p><p><span m='235240'>OK,</span> <span
  m='235576'>so</span> <span m='235913'>you</span> <span m='236250'>know</span>
  <span m='236586'>what</span> <span m='236923'>we're</span> <span
  m='237260'>interested</span> <span m='237596'>to</span> <span
  m='237933'>see</span> <span m='238270'>now</span> <span m='238788'>is,</span>
  <span m='239307'>can</span> <span m='239826'>we</span> <span
  m='240345'>beat</span> <span m='240864'>this</span> <span
  m='241383'>using</span> <span m='241902'>regression</span> <span
  m='242421'>trees?</span> </p><p><span m='242940'>So</span> <span
  m='243520'>let's</span> <span m='244100'>build</span> <span
  m='244680'>a</span> <span m='245260'>tree.</span> </p><p><span
  m='245840'>The</span> <span m='246464'>tree</span> <span
  m='247088'>rpart</span> <span m='247712'>command</span> <span
  m='248336'>again.</span> </p><p><span m='248960'>Actually</span> <span
  m='249233'>to</span> <span m='249506'>save</span> <span
  m='249779'>myself</span> <span m='250052'>from</span> <span
  m='250325'>typing</span> <span m='250598'>it</span> <span
  m='250871'>all</span> <span m='251144'>up</span> <span
  m='251417'>again,</span> <span m='251690'>I'm</span> <span
  m='252124'>going</span> <span m='252558'>to</span> <span m='252993'>go</span>
  <span m='253427'>back</span> <span m='253862'>to</span> <span
  m='254296'>the</span> <span m='254731'>regression</span> <span
  m='255165'>command</span> <span m='255600'>and</span> <span
  m='256433'>just</span> <span m='257267'>change</span> <span
  m='258101'>"lm"</span> <span m='258935'>to</span> <span
  m='259768'>"rpart"</span> <span m='260602'>and</span> <span
  m='261436'>change</span> <span m='262270'>"linreg"</span> <span
  m='262816'>to</span> <span m='263362'>"tree"--</span> <span
  m='263908'>much</span> <span m='264454'>easier.</span> </p><p><span
  m='265000'>All</span> <span m='266105'>right.</span> </p><p><span
  m='267210'>So</span> <span m='267456'>we've</span> <span
  m='267703'>built</span> <span m='267950'>our</span> <span
  m='268196'>tree--</span> <span m='268443'>let's</span> <span
  m='268690'>have</span> <span m='268936'>a</span> <span m='269183'>look</span>
  <span m='269430'>at</span> <span m='269676'>it</span> <span
  m='269923'>using</span> <span m='270170'>the</span> <span
  m='271308'>"prp"</span> <span m='272446'>command</span> <span
  m='273584'>from</span> <span m='274722'>"rpart.plot."</span> <span
  m='275860'>And</span> <span m='276252'>here</span> <span m='276645'>we</span>
  <span m='277037'>go.</span> </p><p><span m='277430'>So</span> <span
  m='278103'>again,</span> <span m='278777'>latitude</span> <span
  m='279451'>and</span> <span m='280125'>longitude</span> <span
  m='280798'>aren't</span> <span m='281472'>really</span> <span
  m='282146'>important</span> <span m='282820'>as</span> <span
  m='283268'>far</span> <span m='283716'>as</span> <span m='284165'>the</span>
  <span m='284613'>tree's</span> <span m='285061'>concerned.</span> </p><p><span
  m='285510'>The</span> <span m='285925'>rooms</span> <span
  m='286341'>aren't</span> <span m='286757'>the</span> <span
  m='287172'>most</span> <span m='287588'>important</span> <span
  m='288004'>split.</span> </p><p><span m='288420'>Pollution</span> <span
  m='288726'>appears</span> <span m='289032'>in</span> <span
  m='289338'>there</span> <span m='289644'>twice,</span> <span
  m='289950'>so</span> <span m='290256'>it's,</span> <span m='290562'>in</span>
  <span m='290868'>some</span> <span m='291174'>sense,</span> <span
  m='291480'>nonlinear</span> <span m='291743'>on</span> <span
  m='292006'>the</span> <span m='292270'>amount</span> <span
  m='292533'>of</span> <span m='292796'>pollution--</span> <span
  m='293060'>if</span> <span m='293347'>it's</span> <span
  m='293634'>greater</span> <span m='293921'>than</span> <span
  m='294208'>a</span> <span m='294495'>certain</span> <span
  m='294782'>amount</span> <span m='295070'>or</span> <span
  m='295349'>less</span> <span m='295628'>than</span> <span m='295907'>a</span>
  <span m='296186'>certain</span> <span m='296465'>amount,</span> <span
  m='296744'>it</span> <span m='297023'>does</span> <span
  m='297302'>different</span> <span m='297581'>things.</span> </p><p><span
  m='297860'>Crime</span> <span m='298188'>is</span> <span m='298517'>in</span>
  <span m='298846'>there,</span> <span m='299175'>age</span> <span
  m='299503'>is</span> <span m='299832'>in</span> <span m='300161'>there.</span>
  </p><p><span m='300490'>Room</span> <span m='300906'>appears</span> <span
  m='301323'>three</span> <span m='301740'>times,</span> <span
  m='302156'>actually--</span> <span m='302573'>sorry.</span> </p><p><span
  m='302990'>That's</span> <span m='303755'>interesting.</span> </p><p><span
  m='304520'>So</span> <span m='304915'>it's</span> <span m='305311'>very</span>
  <span m='305706'>nonlinear</span> <span m='306102'>on</span> <span
  m='306497'>the</span> <span m='306893'>number</span> <span
  m='307288'>of</span> <span m='307684'>rooms.</span> </p><p><span
  m='308080'>Things</span> <span m='308358'>that</span> <span
  m='308637'>were</span> <span m='308916'>important</span> <span
  m='309195'>for</span> <span m='309474'>the</span> <span
  m='309753'>linear</span> <span m='310032'>regression</span> <span
  m='310311'>that</span> <span m='310590'>don't</span> <span
  m='311262'>appear</span> <span m='311935'>in</span> <span
  m='312608'>ours</span> <span m='313281'>include</span> <span
  m='313954'>pupil-teacher</span> <span m='314627'>ratio.</span> </p><p><span
  m='315300'>The</span> <span m='315550'>DIS</span> <span
  m='315801'>variable</span> <span m='316052'>doesn't</span> <span
  m='316303'>appear</span> <span m='316554'>in</span> <span
  m='316805'>our</span> <span m='317056'>regression</span> <span
  m='317307'>tree</span> <span m='317558'>at</span> <span m='317809'>all,</span>
  <span m='318060'>either.</span> </p><p><span m='319540'>So</span> <span
  m='319925'>they're</span> <span m='320310'>definitely</span> <span
  m='320695'>doing</span> <span m='321080'>different</span> <span
  m='321465'>things,</span> <span m='321850'>but</span> <span
  m='322388'>how</span> <span m='322926'>do</span> <span m='323464'>they</span>
  <span m='324002'>compare?</span> </p><p><span m='324540'>So</span> <span
  m='325074'>we'll</span> <span m='325608'>predict,</span> <span
  m='326142'>again,</span> <span m='326677'>from</span> <span
  m='327211'>a</span> <span m='327745'>tree.</span> </p><p><span
  m='328280'>"tree.pred"</span> <span m='328907'>is</span> <span
  m='329534'>the</span> <span m='330161'>prediction</span> <span
  m='330789'>of</span> <span m='331416'>the</span> <span m='332043'>tree</span>
  <span m='332670'>on</span> <span m='333298'>the</span> <span
  m='333925'>new</span> <span m='334552'>data.</span> </p><p><span
  m='339440'>And</span> <span m='339851'>the</span> <span m='340262'>tree</span>
  <span m='340674'>sum</span> <span m='341085'>of</span> <span
  m='341497'>squared</span> <span m='341908'>errors</span> <span
  m='342320'>is</span> <span m='342981'>the</span> <span m='343642'>sum</span>
  <span m='344304'>of</span> <span m='344965'>the</span> <span
  m='345627'>tree's</span> <span m='346288'>predictions</span> <span
  m='346950'>versus</span> <span m='347846'>what</span> <span
  m='348743'>they</span> <span m='349640'>really</span> <span
  m='350536'>should</span> <span m='351433'>be.</span> </p><p><span
  m='352330'>And</span> <span m='353222'>then</span> <span m='354115'>the</span>
  <span m='355008'>moment</span> <span m='355901'>of</span> <span
  m='356794'>truth--</span> <span m='357687'>4,328.</span> </p><p><span
  m='358580'>So,</span> <span m='358971'>simply</span> <span
  m='359362'>put,</span> <span m='359753'>regression</span> <span
  m='360144'>trees</span> <span m='360535'>are</span> <span
  m='360926'>not</span> <span m='361317'>as</span> <span m='361708'>good</span>
  <span m='362100'>as</span> <span m='362578'>linear</span> <span
  m='363056'>regression</span> <span m='363535'>for</span> <span
  m='364013'>this</span> <span m='364491'>problem.</span> </p><p><span
  m='364970'>What</span> <span m='365240'>this</span> <span
  m='365511'>says</span> <span m='365782'>to</span> <span m='366053'>us,</span>
  <span m='366324'>given</span> <span m='366595'>what</span> <span
  m='366865'>we</span> <span m='367136'>saw</span> <span m='367407'>with</span>
  <span m='367678'>the</span> <span m='367949'>latitude</span> <span
  m='368220'>and</span> <span m='368530'>longitude,</span> <span
  m='368840'>is</span> <span m='369150'>that</span> <span
  m='369460'>latitude</span> <span m='369770'>and</span> <span
  m='370080'>longitude</span> <span m='370390'>are</span> <span
  m='370700'>nowhere</span> <span m='371010'>near</span> <span
  m='371320'>as</span> <span m='371828'>useful</span> <span
  m='372336'>for</span> <span m='372844'>predicting,</span> <span
  m='373352'>apparently,</span> <span m='373860'>as</span> <span
  m='374384'>these</span> <span m='374908'>other</span> <span
  m='375432'>variables</span> <span m='375956'>are.</span> </p><p><span
  m='376480'>That's</span> <span m='376742'>just</span> <span
  m='377005'>the</span> <span m='377267'>way</span> <span m='377530'>it</span>
  <span m='377792'>goes,</span> <span m='378055'>I</span> <span
  m='378317'>guess.</span> </p><p><span m='378580'>It's</span> <span
  m='378797'>always</span> <span m='379015'>nice</span> <span
  m='379233'>when</span> <span m='379451'>a</span> <span m='379668'>new</span>
  <span m='379886'>method</span> <span m='380104'>does</span> <span
  m='380322'>better,</span> <span m='380540'>but</span> <span
  m='380788'>there's</span> <span m='381037'>no</span> <span
  m='381286'>guarantee</span> <span m='381535'>that's</span> <span
  m='381783'>going</span> <span m='382032'>to</span> <span
  m='382281'>happen.</span> </p><p><span m='382530'>We</span> <span
  m='382832'>need</span> <span m='383134'>a</span> <span
  m='383436'>special</span> <span m='383738'>structure</span> <span
  m='384041'>to</span> <span m='384343'>really</span> <span m='384645'>be</span>
  <span m='384947'>useful.</span> </p><p><span m='385250'>Let's</span> <span
  m='385535'>stop</span> <span m='385821'>here</span> <span
  m='386107'>with</span> <span m='386393'>the</span> <span m='386679'>R</span>
  <span m='386965'>and</span> <span m='387250'>go</span> <span
  m='387536'>back</span> <span m='387822'>to</span> <span m='388108'>the</span>
  <span m='388394'>slides</span> <span m='388680'>and</span> <span
  m='389037'>discuss</span> <span m='389395'>how</span> <span
  m='389752'>CP</span> <span m='390110'>works</span> <span m='390467'>and</span>
  <span m='390825'>then</span> <span m='391182'>we'll</span> <span
  m='391540'>apply</span> <span m='391875'>cross</span> <span
  m='392210'>validation</span> <span m='392545'>to</span> <span
  m='392880'>our</span> <span m='393215'>tree.</span> </p><p><span
  m='393550'>And</span> <span m='393850'>we'll</span> <span
  m='394150'>see</span> <span m='394450'>if</span> <span m='394750'>maybe</span>
  <span m='395050'>we</span> <span m='395350'>can</span> <span
  m='395650'>improve</span> <span m='395950'>in</span> <span
  m='396250'>our</span> <span m='396550'>results.</span> </p>
uid: 070b68f3638b910196a177c831982623
type: courses
layout: video
---
