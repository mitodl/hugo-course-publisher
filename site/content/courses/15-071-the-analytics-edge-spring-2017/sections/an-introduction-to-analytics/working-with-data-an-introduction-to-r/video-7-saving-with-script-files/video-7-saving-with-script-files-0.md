---
title: 'Video 7: Saving with Script Files'
uid: 6e4647abc18fd7012bbb26dc07ed1fb0
parent_uid: 5b9fe301be29cb46df9fedbbf748fc62
technical_location: >-
  https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/an-introduction-to-analytics/working-with-data-an-introduction-to-r/video-7-saving-with-script-files/video-7-saving-with-script-files-0
short_url: video-7-saving-with-script-files-0
inline_embed_id: 81140519video7savingwithscriptfiles53913053
about_this_resource_text: ''
related_resources_text: ''
transcript: >-
  <p><span m='4490'>After</span> <span m='4798'>working</span> <span
  m='5107'>in</span> <span m='5415'>R,</span> <span m='5724'>you</span> <span
  m='6032'>often</span> <span m='6341'>want</span> <span m='6650'>to</span>
  <span m='6948'>save</span> <span m='7246'>your</span> <span
  m='7544'>work</span> <span m='7842'>so</span> <span m='8140'>that</span> <span
  m='8439'>you</span> <span m='8737'>can</span> <span m='9035'>easily</span>
  <span m='9333'>re-run</span> <span m='9631'>commands</span> <span
  m='9930'>and</span> <span m='10590'>rebuild</span> <span
  m='11250'>models.</span> </p><p><span m='11910'>There</span> <span
  m='12160'>are</span> <span m='12410'>several</span> <span
  m='12660'>ways</span> <span m='12910'>of</span> <span m='13160'>doing</span>
  <span m='13410'>this,</span> <span m='13660'>but</span> <span
  m='13951'>the</span> <span m='14242'>method</span> <span m='14533'>we</span>
  <span m='14825'>recommend</span> <span m='15116'>is</span> <span
  m='15407'>by</span> <span m='15698'>using</span> <span m='15990'>what's</span>
  <span m='16500'>called</span> <span m='17010'>a</span> <span
  m='17520'>script</span> <span m='18030'>file.</span> </p><p><span
  m='18540'>Let's</span> <span m='18896'>open</span> <span m='19253'>a</span>
  <span m='19610'>new</span> <span m='19966'>script</span> <span
  m='20323'>file.</span> </p><p><span m='20680'>Go</span> <span
  m='21088'>to</span> <span m='21496'>File,</span> <span m='21905'>New</span>
  <span m='22313'>Document,</span> <span m='22721'>on</span> <span
  m='23130'>a</span> <span m='23538'>Mac,</span> <span m='23946'>and</span>
  <span m='24355'>File,</span> <span m='24763'>New</span> <span
  m='25171'>Script,</span> <span m='25580'>on</span> <span m='26250'>a</span>
  <span m='26920'>PC.</span> </p><p><span m='27590'>This</span> <span
  m='28033'>will</span> <span m='28477'>pop</span> <span m='28921'>up</span>
  <span m='29365'>a</span> <span m='29808'>blank</span> <span
  m='30252'>script</span> <span m='30696'>file.</span> </p><p><span
  m='31140'>You</span> <span m='31397'>can</span> <span m='31654'>copy</span>
  <span m='31911'>and</span> <span m='32168'>paste</span> <span
  m='32425'>any</span> <span m='32682'>commands</span> <span
  m='32940'>that</span> <span m='33336'>you've</span> <span m='33732'>run</span>
  <span m='34128'>in</span> <span m='34524'>your</span> <span
  m='34920'>console</span> <span m='35316'>into</span> <span
  m='35712'>the</span> <span m='36108'>script</span> <span
  m='36504'>file.</span> </p><p><span m='36900'>For</span> <span
  m='37293'>example,</span> <span m='37686'>say</span> <span m='38080'>we</span>
  <span m='38473'>want</span> <span m='38866'>to</span> <span
  m='39260'>save</span> <span m='39653'>the</span> <span m='40046'>table</span>
  <span m='40440'>commands</span> <span m='40833'>we</span> <span
  m='41226'>ran.</span> </p><p><span m='41620'>Let's</span> <span
  m='42128'>Copy</span> <span m='42636'>the</span> <span m='43145'>first</span>
  <span m='43653'>table</span> <span m='44161'>command</span> <span
  m='44670'>and</span> <span m='45075'>then</span> <span m='45480'>Paste</span>
  <span m='45885'>it</span> <span m='46290'>into</span> <span
  m='46695'>the</span> <span m='47100'>script</span> <span
  m='47505'>file.</span> </p><p><span m='47910'>We</span> <span
  m='48266'>can</span> <span m='48622'>also</span> <span m='48978'>take</span>
  <span m='49335'>the</span> <span m='49691'>first</span> <span
  m='50047'>tapply</span> <span m='50403'>command</span> <span
  m='50760'>we</span> <span m='51382'>ran,</span> <span m='52004'>Copy</span>
  <span m='52626'>and</span> <span m='53248'>Paste</span> <span
  m='53870'>it</span> <span m='54492'>into</span> <span m='55114'>our</span>
  <span m='55736'>script</span> <span m='56358'>file.</span> </p><p><span
  m='56980'>Now,</span> <span m='57287'>if</span> <span m='57595'>you</span>
  <span m='57902'>highlight</span> <span m='58210'>these</span> <span
  m='58517'>lines</span> <span m='58825'>of</span> <span m='59132'>code</span>
  <span m='59440'>in</span> <span m='59963'>the</span> <span
  m='60486'>script</span> <span m='61009'>file</span> <span m='61532'>and</span>
  <span m='62055'>press</span> <span m='62578'>Command-Enter</span> <span
  m='63101'>on</span> <span m='63624'>a</span> <span m='64147'>Mac,</span> <span
  m='64670'>and</span> <span m='65026'>Control-r</span> <span
  m='65383'>on</span> <span m='65740'>a</span> <span m='66096'>PC,</span> <span
  m='66453'>it</span> <span m='66810'>will</span> <span m='67166'>run</span>
  <span m='67523'>these</span> <span m='67880'>lines</span> <span
  m='68236'>of</span> <span m='68593'>code</span> <span m='68950'>in</span>
  <span m='69460'>your</span> <span m='69970'>R</span> <span
  m='70480'>console.</span> </p><p><span m='70990'>So</span> <span
  m='71287'>if</span> <span m='71584'>you</span> <span m='71881'>save</span>
  <span m='72178'>this</span> <span m='72475'>file</span> <span
  m='72772'>and</span> <span m='73069'>then</span> <span m='73366'>reopen</span>
  <span m='73663'>it</span> <span m='73960'>when</span> <span
  m='74320'>you</span> <span m='74680'>start</span> <span m='75040'>R</span>
  <span m='75400'>next</span> <span m='75760'>time,</span> <span
  m='76120'>you</span> <span m='76480'>can</span> <span m='76840'>easily</span>
  <span m='77200'>rerun</span> <span m='77560'>any</span> <span
  m='77920'>commands</span> <span m='78280'>that</span> <span
  m='78634'>you</span> <span m='78988'>ran</span> <span m='79342'>in</span>
  <span m='79697'>this</span> <span m='80051'>R</span> <span
  m='80405'>session.</span> </p><p><span m='80760'>A</span> <span
  m='81037'>lot</span> <span m='81315'>of</span> <span m='81593'>times</span>
  <span m='81871'>it's</span> <span m='82148'>easier</span> <span
  m='82426'>to</span> <span m='82704'>just</span> <span m='82982'>write</span>
  <span m='83260'>commands</span> <span m='83610'>in</span> <span
  m='83961'>your</span> <span m='84312'>script</span> <span
  m='84663'>file</span> <span m='85014'>and</span> <span m='85365'>run</span>
  <span m='85716'>them</span> <span m='86067'>in</span> <span
  m='86418'>your</span> <span m='86769'>console</span> <span
  m='87120'>because</span> <span m='87526'>then</span> <span
  m='87932'>they'll</span> <span m='88338'>always</span> <span
  m='88744'>be</span> <span m='89150'>saved</span> <span m='89556'>in</span>
  <span m='89962'>your</span> <span m='90368'>script</span> <span
  m='90774'>file.</span> </p><p><span m='91180'>You</span> <span
  m='91578'>can</span> <span m='91977'>add</span> <span
  m='92376'>comments</span> <span m='92775'>in</span> <span
  m='93173'>your</span> <span m='93572'>script</span> <span
  m='93971'>file</span> <span m='94370'>by</span> <span m='94696'>using</span>
  <span m='95022'>the</span> <span m='95348'>pound</span> <span
  m='95674'>sign.</span> </p><p><span m='96000'>If</span> <span
  m='96387'>you</span> <span m='96775'>type</span> <span m='97162'>pound,</span>
  <span m='97550'>and</span> <span m='97937'>then</span> <span
  m='98325'>some</span> <span m='98712'>comment</span> <span
  m='99100'>describing</span> <span m='99602'>your</span> <span
  m='100104'>script</span> <span m='100606'>file,</span> <span
  m='101108'>and</span> <span m='101610'>then</span> <span
  m='102112'>highlight</span> <span m='102614'>the</span> <span
  m='103116'>whole</span> <span m='103618'>thing</span> <span
  m='104120'>and</span> <span m='104800'>press</span> <span
  m='105480'>Control-r</span> <span m='106160'>or</span> <span
  m='106840'>Command-Enter,</span> <span m='107520'>you'll</span> <span
  m='107853'>see</span> <span m='108186'>that</span> <span m='108520'>the</span>
  <span m='108853'>comment</span> <span m='109186'>runs</span> <span
  m='109520'>in</span> <span m='109853'>the</span> <span
  m='110186'>console,</span> <span m='110520'>but</span> <span
  m='111016'>nothing</span> <span m='111512'>happens.</span> </p><p><span
  m='112009'>R</span> <span m='112654'>recognizes</span> <span
  m='113299'>this</span> <span m='113944'>as</span> <span m='114589'>a</span>
  <span m='115234'>comment.</span> </p><p><span m='115880'>If</span> <span
  m='116154'>you</span> <span m='116429'>want</span> <span m='116703'>to</span>
  <span m='116978'>save</span> <span m='117252'>the</span> <span
  m='117527'>output</span> <span m='117801'>of</span> <span
  m='118076'>your</span> <span m='118350'>R</span> <span
  m='118625'>session</span> <span m='118900'>in</span> <span
  m='119283'>your</span> <span m='119666'>console,</span> <span
  m='120050'>I</span> <span m='120433'>recommend</span> <span
  m='120816'>just</span> <span m='121200'>saving</span> <span
  m='121583'>it</span> <span m='121966'>as</span> <span m='122350'>a</span>
  <span m='122733'>text</span> <span m='123116'>file.</span> </p><p><span
  m='123500'>In</span> <span m='123887'>your</span> <span
  m='124274'>console,</span> <span m='124661'>you</span> <span
  m='125049'>can</span> <span m='125436'>go</span> <span m='125823'>to</span>
  <span m='126210'>file,</span> <span m='126598'>Save</span> <span
  m='126985'>to</span> <span m='127372'>file,</span> <span m='127760'>and</span>
  <span m='128230'>this</span> <span m='128700'>will</span> <span
  m='129170'>save</span> <span m='129640'>your</span> <span
  m='130110'>output</span> <span m='130580'>as</span> <span m='131050'>a</span>
  <span m='131520'>text</span> <span m='131990'>file.</span> </p><p><span
  m='132460'>You</span> <span m='132747'>won't</span> <span m='133034'>be</span>
  <span m='133321'>able</span> <span m='133608'>to</span> <span
  m='133895'>easily</span> <span m='134182'>rerun</span> <span
  m='134470'>this</span> <span m='134766'>in</span> <span m='135063'>R</span>
  <span m='135360'>like</span> <span m='135656'>the</span> <span
  m='135953'>script</span> <span m='136250'>file,</span> <span
  m='136546'>but</span> <span m='136843'>it</span> <span m='137140'>will</span>
  <span m='137526'>have</span> <span m='137913'>the</span> <span
  m='138300'>summary</span> <span m='138686'>output</span> <span
  m='139073'>of</span> <span m='139460'>what</span> <span m='139846'>you</span>
  <span m='140233'>did.</span> </p><p><span m='140620'>When</span> <span
  m='140877'>you</span> <span m='141135'>close</span> <span m='141392'>R,</span>
  <span m='141650'>it</span> <span m='141907'>will</span> <span
  m='142165'>ask</span> <span m='142422'>you</span> <span m='142680'>if</span>
  <span m='142997'>you</span> <span m='143314'>want</span> <span
  m='143631'>to</span> <span m='143948'>save</span> <span m='144265'>your</span>
  <span m='144582'>workspace.</span> </p><p><span m='144900'>Make</span> <span
  m='145165'>sure</span> <span m='145430'>you</span> <span
  m='145696'>have</span> <span m='145961'>everything</span> <span
  m='146227'>you</span> <span m='146492'>want</span> <span m='146758'>in</span>
  <span m='147023'>a</span> <span m='147289'>script</span> <span
  m='147554'>file</span> <span m='147820'>and</span> <span
  m='148265'>then</span> <span m='148710'>don't</span> <span
  m='149155'>worry</span> <span m='149600'>about</span> <span
  m='150045'>saving</span> <span m='150490'>your</span> <span
  m='150935'>workspace.</span> </p><p><span m='151380'>These</span> <span
  m='151636'>are</span> <span m='151892'>the</span> <span
  m='152148'>basics</span> <span m='152405'>of</span> <span m='152661'>R.</span>
  <span m='152917'>We'll</span> <span m='153173'>see</span> <span
  m='153430'>a</span> <span m='153691'>lot</span> <span m='153952'>more</span>
  <span m='154213'>in</span> <span m='154474'>the</span> <span
  m='154735'>rest</span> <span m='154996'>of</span> <span m='155257'>this</span>
  <span m='155518'>class.</span> </p><p><span m='155780'>But</span> <span
  m='156072'>hopefully</span> <span m='156365'>you've</span> <span
  m='156658'>seen</span> <span m='156950'>in</span> <span m='157243'>this</span>
  <span m='157536'>lecture</span> <span m='157829'>how</span> <span
  m='158255'>powerful</span> <span m='158681'>R</span> <span
  m='159107'>can</span> <span m='159533'>be.</span> </p><p><span
  m='159960'>In</span> <span m='160330'>just</span> <span m='160700'>one</span>
  <span m='161070'>lecture,</span> <span m='161440'>we</span> <span
  m='161810'>performed</span> <span m='162180'>insightful</span> <span
  m='162550'>data</span> <span m='162920'>analysis</span> <span
  m='163493'>on</span> <span m='164066'>an</span> <span
  m='164640'>interesting</span> <span m='165213'>data</span> <span
  m='165786'>set.</span> </p>
embedded_media:
  - uid: c238ac129e78628bc8b9b338240c7c33
    parent_uid: 6e4647abc18fd7012bbb26dc07ed1fb0
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: dDHsLmwd9No
  - uid: 60bc4eb8871718664f9031744397b40f
    parent_uid: 6e4647abc18fd7012bbb26dc07ed1fb0
    id: 3Play-3Play YouTube id-Stream
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: dDHsLmwd9No
  - uid: f03bc135d6d62a0c32ffcc0d41269181
    parent_uid: 6e4647abc18fd7012bbb26dc07ed1fb0
    id: dDHsLmwd9No.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/an-introduction-to-analytics/working-with-data-an-introduction-to-r/video-7-saving-with-script-files/video-7-saving-with-script-files-0/dDHsLmwd9No.srt
  - uid: 8b1c0cb88f0f2d0891c8dfb54ea94777
    parent_uid: 6e4647abc18fd7012bbb26dc07ed1fb0
    id: dDHsLmwd9No.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/an-introduction-to-analytics/working-with-data-an-introduction-to-r/video-7-saving-with-script-files/video-7-saving-with-script-files-0/dDHsLmwd9No.pdf
  - uid: cac1fa288d8d203692fa5e2998219b24
    parent_uid: 6e4647abc18fd7012bbb26dc07ed1fb0
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: d3baff1c38ac05cbe4752eb4f01ce67b
    parent_uid: 6e4647abc18fd7012bbb26dc07ed1fb0
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
  - uid: b1b54b4c861f228fee7cd80e43dd686d
    parent_uid: 6e4647abc18fd7012bbb26dc07ed1fb0
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/dDHsLmwd9No/default.jpg'
  - uid: 9ca8371c1faeb9ea54c2ec7435037397
    parent_uid: 6e4647abc18fd7012bbb26dc07ed1fb0
    id: Video-InternetArchive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: >-
      https://archive.org/download/MIT15.071S17/MIT15_071S17_Session_1.3.14_300k.mp4
type: courses
layout: video
---
