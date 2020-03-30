---
title: 'Video 8: The Analytics Edge of Recommendation Systems'
uid: cf64e584327667aadaf2c2990defe523
parent_uid: 9e0e5a2571bbafdaded101bdcdce7158
technical_location: >-
  https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/clustering/recommendations-worth-a-million-an-introduction-to-clustering/video-8-the-analytics-edge-of-recommendation-systems/video-8-the-analytics-edge-of-recommendation-systems-0
short_url: video-8-the-analytics-edge-of-recommendation-systems-0
inline_embed_id: 78148057video8theanalyticsedgeofrecommendationsystems68737656
about_this_resource_text: ''
related_resources_text: ''
transcript: >-
  <p><span m='9580'>Recommendation</span> <span m='10042'>systems</span> <span
  m='10505'>are</span> <span m='10967'>used</span> <span m='11430'>in</span>
  <span m='11892'>many</span> <span m='12355'>different</span> <span
  m='12817'>areas</span> <span m='13280'>other</span> <span
  m='13903'>than</span> <span m='14526'>movies.</span> </p><p><span
  m='15150'>Jeff</span> <span m='15694'>Bezos,</span> <span m='16238'>the</span>
  <span m='16782'>CEO</span> <span m='17327'>of</span> <span
  m='17871'>Amazon,</span> <span m='18415'>said</span> <span
  m='18960'>that,</span> <span m='19275'>"If</span> <span m='19590'>I</span>
  <span m='19905'>have</span> <span m='20220'>3</span> <span
  m='20535'>million</span> <span m='20850'>customers</span> <span
  m='21165'>on</span> <span m='21480'>the</span> <span m='21795'>web,</span>
  <span m='22110'>I</span> <span m='22478'>should</span> <span
  m='22847'>have</span> <span m='23216'>3</span> <span m='23585'>million</span>
  <span m='23954'>stores</span> <span m='24323'>on</span> <span
  m='24692'>the</span> <span m='25061'>web."</span> <span m='25430'>The</span>
  <span m='25975'>internet</span> <span m='26520'>allows</span> <span
  m='27065'>for</span> <span m='27610'>mass</span> <span
  m='28155'>personalization,</span> <span m='28700'>and</span> <span
  m='29115'>recommendation</span> <span m='29530'>systems</span> <span
  m='29946'>are</span> <span m='30361'>a</span> <span m='30777'>key</span> <span
  m='31192'>part</span> <span m='31608'>of</span> <span m='32023'>that.</span>
  </p><p><span m='32439'>Recommendation</span> <span m='32969'>systems</span>
  <span m='33499'>build</span> <span m='34029'>models</span> <span
  m='34560'>about</span> <span m='35050'>users'</span> <span
  m='35540'>preferences</span> <span m='36030'>to</span> <span
  m='36520'>personalize</span> <span m='37010'>the</span> <span
  m='37500'>user</span> <span m='37990'>experience.</span> </p><p><span
  m='39620'>This</span> <span m='39958'>helps</span> <span
  m='40296'>users</span> <span m='40634'>find</span> <span
  m='40972'>items</span> <span m='41310'>they</span> <span
  m='41649'>might</span> <span m='41987'>not</span> <span m='42325'>have</span>
  <span m='42663'>searched</span> <span m='43001'>for,</span> <span
  m='43340'>like</span> <span m='43634'>a</span> <span m='43928'>new</span>
  <span m='44223'>favorite</span> <span m='44517'>band,</span> <span
  m='44812'>an</span> <span m='45106'>old</span> <span m='45401'>friend</span>
  <span m='45695'>who</span> <span m='45990'>uses</span> <span
  m='46330'>the</span> <span m='46671'>same</span> <span m='47012'>social</span>
  <span m='47353'>media</span> <span m='47694'>network,</span> <span
  m='48035'>or</span> <span m='48376'>a</span> <span m='48717'>book</span> <span
  m='49058'>or</span> <span m='49399'>song</span> <span m='49740'>that</span>
  <span m='50338'>they're</span> <span m='50936'>likely</span> <span
  m='51534'>to</span> <span m='52132'>enjoy.</span> </p><p><span
  m='52730'>Recommendation</span> <span m='53236'>systems</span> <span
  m='53742'>are</span> <span m='54248'>a</span> <span
  m='54754'>cornerstone</span> <span m='55260'>of</span> <span
  m='55807'>these</span> <span m='56355'>top</span> <span
  m='56902'>businesses.</span> </p><p><span m='57450'>Social</span> <span
  m='57994'>networking</span> <span m='58538'>sites,</span> <span
  m='59082'>like</span> <span m='59626'>Facebook,</span> <span
  m='60170'>music</span> <span m='60667'>streaming</span> <span
  m='61165'>sites,</span> <span m='61662'>like</span> <span
  m='62160'>Pandora,</span> <span m='62657'>and</span> <span
  m='63155'>retail</span> <span m='63652'>companies,</span> <span
  m='64150'>like</span> <span m='64726'>Amazon,</span> <span
  m='65303'>all</span> <span m='65880'>provide</span> <span
  m='66456'>recommendation</span> <span m='67033'>systems</span> <span
  m='67610'>for</span> <span m='68360'>their</span> <span
  m='69110'>users.</span> </p><p><span m='69860'>Both</span> <span
  m='70356'>collaborative</span> <span m='70853'>filtering</span> <span
  m='71350'>and</span> <span m='71846'>content</span> <span
  m='72343'>filtering</span> <span m='72840'>are</span> <span
  m='73315'>used</span> <span m='73790'>in</span> <span
  m='74265'>practice.</span> </p><p><span m='74740'>Collaborative</span> <span
  m='75155'>filtering</span> <span m='75570'>is</span> <span
  m='75985'>used</span> <span m='76400'>by</span> <span
  m='76815'>companies</span> <span m='77230'>like</span> <span
  m='77833'>Amazon,</span> <span m='78436'>Facebook,</span> <span
  m='79040'>and</span> <span m='79643'>Google</span> <span
  m='80246'>News.</span> </p><p><span m='80850'>Content</span> <span
  m='81221'>filtering</span> <span m='81593'>is</span> <span
  m='81965'>used</span> <span m='82336'>by</span> <span
  m='82708'>companies</span> <span m='83080'>like</span> <span
  m='83617'>Pandora,</span> <span m='84155'>Rotten</span> <span
  m='84692'>Tomatoes,</span> <span m='85230'>and</span> <span
  m='85767'>See</span> <span m='86305'>This</span> <span m='86842'>Next.</span>
  </p><p><span m='87380'>And</span> <span m='87886'>Netflix</span> <span
  m='88393'>uses</span> <span m='88900'>both</span> <span
  m='89406'>collaborative</span> <span m='89913'>filtering</span> <span
  m='90420'>and</span> <span m='91576'>content</span> <span
  m='92733'>filtering.</span> </p><p><span m='93890'>So</span> <span
  m='94248'>now</span> <span m='94607'>let's</span> <span m='94966'>go</span>
  <span m='95325'>back</span> <span m='95684'>to</span> <span
  m='96043'>the</span> <span m='96402'>Netflix</span> <span
  m='96761'>prize.</span> </p><p><span m='97120'>29</span> <span
  m='97635'>days</span> <span m='98150'>after</span> <span m='98666'>last</span>
  <span m='99181'>call</span> <span m='99696'>was</span> <span
  m='100212'>announced,</span> <span m='100727'>on</span> <span
  m='101242'>July</span> <span m='101758'>25,</span> <span
  m='102273'>2009,</span> <span m='102789'>the</span> <span
  m='103481'>team</span> <span m='104173'>The</span> <span
  m='104866'>Ensemble</span> <span m='105558'>submitted</span> <span
  m='106250'>a</span> <span m='106943'>10.09%</span> <span
  m='107635'>improvement,</span> <span m='108327'>beating</span> <span
  m='109020'>the</span> <span m='109480'>10.05%</span> <span
  m='109940'>improvement</span> <span m='110400'>that</span> <span
  m='110860'>was</span> <span m='111320'>submitted</span> <span
  m='111780'>by</span> <span m='112240'>Bellkor's</span> <span
  m='112700'>Pragmatic</span> <span m='113281'>Chaos</span> <span
  m='113863'>to</span> <span m='114445'>signal</span> <span
  m='115026'>last</span> <span m='115608'>call.</span> </p><p><span
  m='116190'>But</span> <span m='116539'>by</span> <span m='116888'>the</span>
  <span m='117237'>time</span> <span m='117586'>Netflix</span> <span
  m='117935'>stopped</span> <span m='118284'>accepting</span> <span
  m='118633'>submissions</span> <span m='118982'>the</span> <span
  m='119331'>next</span> <span m='119680'>day,</span> <span
  m='120252'>Bellkor's</span> <span m='120824'>Pragmatic</span> <span
  m='121396'>Chaos</span> <span m='121968'>had</span> <span
  m='122541'>also</span> <span m='123113'>submitted</span> <span
  m='123685'>a</span> <span m='124257'>10.09%</span> <span
  m='124830'>improvement,</span> <span m='125342'>and</span> <span
  m='125855'>The</span> <span m='126367'>Ensemble</span> <span
  m='126880'>had</span> <span m='127392'>submitted</span> <span
  m='127905'>a</span> <span m='128417'>10.10%</span> <span
  m='128930'>improvement.</span> </p><p><span m='130620'>To</span> <span
  m='131073'>really</span> <span m='131526'>test</span> <span
  m='131980'>the</span> <span m='132433'>algorithms,</span> <span
  m='132886'>Netflix</span> <span m='133340'>tested</span> <span
  m='133644'>them</span> <span m='133948'>on</span> <span m='134252'>a</span>
  <span m='134557'>private</span> <span m='134861'>test</span> <span
  m='135165'>set</span> <span m='135470'>that</span> <span m='135802'>the</span>
  <span m='136135'>teams</span> <span m='136468'>had</span> <span
  m='136801'>never</span> <span m='137134'>seen</span> <span
  m='137467'>before.</span> </p><p><span m='137800'>This</span> <span
  m='138305'>is</span> <span m='138810'>the</span> <span m='139315'>true</span>
  <span m='139820'>test</span> <span m='140325'>of</span> <span
  m='140830'>predictive</span> <span m='141335'>ability.</span> </p><p><span
  m='141840'>On</span> <span m='142304'>September</span> <span
  m='142768'>18,</span> <span m='143232'>2009,</span> <span
  m='143696'>Netflix</span> <span m='144160'>announced</span> <span
  m='144624'>that</span> <span m='145088'>the</span> <span
  m='145552'>winning</span> <span m='146016'>team</span> <span
  m='146480'>was</span> <span m='147160'>Bellkor's</span> <span
  m='147840'>Pragmatic</span> <span m='148520'>Chaos.</span> </p><p><span
  m='149200'>They</span> <span m='149729'>won</span> <span m='150258'>the</span>
  <span m='150787'>competition</span> <span m='151316'>and</span> <span
  m='151845'>the</span> <span m='152374'>$1</span> <span
  m='152903'>million</span> <span m='153432'>grand</span> <span
  m='153961'>prize.</span> </p><p><span m='154490'>Recommendation</span> <span
  m='154986'>systems</span> <span m='155483'>provide</span> <span
  m='155980'>a</span> <span m='156476'>significant</span> <span
  m='156973'>edge</span> <span m='157470'>to</span> <span m='158083'>many</span>
  <span m='158696'>companies.</span> </p><p><span m='159310'>In</span> <span
  m='159753'>today's</span> <span m='160197'>digital</span> <span
  m='160641'>age,</span> <span m='161085'>businesses</span> <span
  m='161528'>often</span> <span m='161972'>have</span> <span
  m='162416'>hundreds</span> <span m='162860'>of</span> <span
  m='163250'>thousands</span> <span m='163640'>of</span> <span
  m='164030'>items</span> <span m='164420'>to</span> <span
  m='164810'>offer</span> <span m='165200'>their</span> <span
  m='165590'>customers,</span> <span m='165980'>whether</span> <span
  m='166346'>they're</span> <span m='166712'>movies,</span> <span
  m='167078'>songs</span> <span m='167444'>,</span> <span m='167810'>or</span>
  <span m='168176'>people</span> <span m='168542'>they</span> <span
  m='168908'>might</span> <span m='169274'>know</span> <span
  m='169640'>on</span> <span m='170490'>Facebook.</span> </p><p><span
  m='171340'>Excellent</span> <span m='171742'>recommendation</span> <span
  m='172145'>systems</span> <span m='172548'>can</span> <span
  m='172951'>make</span> <span m='173354'>or</span> <span
  m='173757'>break</span> <span m='174160'>these</span> <span
  m='175150'>businesses.</span> </p><p><span m='176140'>Clustering</span> <span
  m='176598'>algorithms,</span> <span m='177056'>which</span> <span
  m='177514'>are</span> <span m='177972'>tailored</span> <span
  m='178430'>to</span> <span m='178935'>find</span> <span
  m='179441'>similar</span> <span m='179947'>customers</span> <span
  m='180452'>or</span> <span m='180958'>similar</span> <span
  m='181464'>items,</span> <span m='181970'>form</span> <span
  m='182421'>the</span> <span m='182872'>backbone</span> <span
  m='183323'>of</span> <span m='183774'>many</span> <span m='184225'>of</span>
  <span m='184676'>these</span> <span m='185127'>recommendation</span> <span
  m='185578'>systems.</span> </p><p><span m='186030'>Clustering</span> <span
  m='186604'>also</span> <span m='187178'>has</span> <span
  m='187752'>many</span> <span m='188327'>other</span> <span
  m='188901'>interesting</span> <span m='189475'>applications.</span>
  </p><p><span m='190050'>In</span> <span m='190383'>the</span> <span
  m='190717'>next</span> <span m='191051'>lecture,</span> <span
  m='191385'>we'll</span> <span m='191718'>see</span> <span
  m='192052'>how</span> <span m='192386'>clustering</span> <span
  m='192720'>can</span> <span m='193137'>be</span> <span m='193555'>used</span>
  <span m='193972'>to</span> <span m='194390'>improve</span> <span
  m='194807'>the</span> <span m='195225'>predictive</span> <span
  m='195642'>ability</span> <span m='196060'>of</span> <span
  m='196923'>classification</span> <span m='197786'>methods.</span> </p>
embedded_media:
  - uid: b2b2ae424626e5f5a770467e1a793140
    parent_uid: cf64e584327667aadaf2c2990defe523
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: sJalJ1A9NDg
  - uid: b3bc0b9bb3aa5577b9bebda7ba85e541
    parent_uid: cf64e584327667aadaf2c2990defe523
    id: 3Play-3Play YouTube id-Stream
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: sJalJ1A9NDg
  - uid: 3b6bf17faae3eeb00ae2fb8fa95b4b22
    parent_uid: cf64e584327667aadaf2c2990defe523
    id: Thumbnail-YouTube-JPG_1
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/sJalJ1A9NDg/default.jpg'
  - uid: 275f503a4e9a5938d82b2392eccc848f
    parent_uid: cf64e584327667aadaf2c2990defe523
    id: sJalJ1A9NDg.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/clustering/recommendations-worth-a-million-an-introduction-to-clustering/video-8-the-analytics-edge-of-recommendation-systems/video-8-the-analytics-edge-of-recommendation-systems-0/sJalJ1A9NDg.srt
  - uid: 8b8c8c3a7eb8764bfa0a3586da6fb7da
    parent_uid: cf64e584327667aadaf2c2990defe523
    id: sJalJ1A9NDg.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/clustering/recommendations-worth-a-million-an-introduction-to-clustering/video-8-the-analytics-edge-of-recommendation-systems/video-8-the-analytics-edge-of-recommendation-systems-0/sJalJ1A9NDg.pdf
  - uid: 905ec65a5c4ed826cc886d5a305ae149
    parent_uid: cf64e584327667aadaf2c2990defe523
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: a886176d132355793eeecdee65fbce14
    parent_uid: cf64e584327667aadaf2c2990defe523
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
  - uid: d319908825b6634b86273e1670e939b1
    parent_uid: cf64e584327667aadaf2c2990defe523
    id: Video-InternetArchive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: >-
      https://archive.org/download/MIT15.071S17/MIT15_071S17_Session_6.2.15_300k.mp4
type: courses
layout: video
---
