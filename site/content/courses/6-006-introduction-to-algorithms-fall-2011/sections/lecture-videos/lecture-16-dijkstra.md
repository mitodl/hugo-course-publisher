---
about_this_resource_text: >-
  <p><strong>Description:</strong> This lecture shows how to find shortest paths
  in directed acyclic graphs (DAGs) using topological sort, and in graphs
  without negative edges using Dijkstra's algorithm.</p>
  <p><strong>Instructor:</strong> Srini Devadas</p>
embedded_media:
  - id: Video-YouTube-Stream
    media_location: 2E7MmKv0Y24
    parent_uid: 038a396a88e9e2ec70b26136118f7e00
    title: Video-YouTube-Stream
    type: Video
    uid: 6832a4aebcd3babc31ee9102f96dee0f
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/2E7MmKv0Y24/default.jpg'
    parent_uid: 038a396a88e9e2ec70b26136118f7e00
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 666326dea035d97cde85d55046d46c90
  - id: Video-iTunesU-MP4
    media_location: >-
      https://itunes.apple.com/us/itunes-u/lecture-16-dijkstra/id585700718?i=126127750
    parent_uid: 038a396a88e9e2ec70b26136118f7e00
    title: Video-iTunes U-MP4
    type: Video
    uid: f2e69c9aed18ef2f08c4b9160d7b5b0a
  - id: Video-InternetArchive-MP4
    media_location: 'http://www.archive.org/download/MIT6.006F11/MIT6_006F11_lec16_300k.mp4'
    parent_uid: 038a396a88e9e2ec70b26136118f7e00
    title: Video-Internet Archive-MP4
    type: Video
    uid: fa3c8ed5f1bf4655ec1bb8b621c62a33
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: 2E7MmKv0Y24
    parent_uid: 038a396a88e9e2ec70b26136118f7e00
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 2bc01f5b0102d2930abc129cd2706975
  - id: 2E7MmKv0Y24.srt
    parent_uid: 038a396a88e9e2ec70b26136118f7e00
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/lecture-videos/lecture-16-dijkstra/2E7MmKv0Y24.srt
    title: 3play caption file
    type: null
    uid: c6a4a6dc59c59f69638a0c34f4604497
  - id: 2E7MmKv0Y24.pdf
    parent_uid: 038a396a88e9e2ec70b26136118f7e00
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/lecture-videos/lecture-16-dijkstra/2E7MmKv0Y24.pdf
    title: 3play pdf file
    type: null
    uid: 1c0371bba2bb2cd1485287fc37064e18
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 038a396a88e9e2ec70b26136118f7e00
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: f390bd2e271ebcafead3206406506fe3
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 038a396a88e9e2ec70b26136118f7e00
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: b5011b62ca3bc196d2fa759f803c0a30
inline_embed_id: '35270963lecture16:dijkstra66625151'
order_index: 206
parent_uid: 6af424cb24d70b69cb7c86df8a25a92a
related_resources_text: ''
short_url: lecture-16-dijkstra
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/lecture-videos/lecture-16-dijkstra
title: 'Lecture 16: Dijkstra'
transcript: >-
  <p><span m='80'>The</span> <span m='210'>following</span> <span
  m='650'>content</span> <span m='1240'>is</span> <span m='1350'>provided</span>
  <span m='1800'>under</span> <span m='2080'>a</span> <span
  m='2120'>Creative</span> <span m='2520'>Commons</span> <span
  m='2930'>license.</span> <span m='4040'>Your</span> <span
  m='4220'>support</span> <span m='4730'>will</span> <span m='4890'>help</span>
  <span m='5130'>MIT</span> <span m='5580'>OpenCourseWare</span> <span
  m='6370'>continue</span> <span m='6880'>to</span> <span m='6960'>offer</span>
  <span m='7380'>high</span> <span m='7620'>quality</span> <span
  m='8140'>educational</span> <span m='8760'>resources</span> <span
  m='9390'>for</span> <span m='9540'>free.</span> <span m='10740'>To</span>
  <span m='10750'>make</span> <span m='10950'>a</span> <span
  m='11000'>donation,</span> <span m='11690'>or</span> <span
  m='11950'>view</span> <span m='12400'>additional</span> <span
  m='12820'>materials</span> <span m='13350'>from</span> <span
  m='13500'>hundreds</span> <span m='13940'>of</span> <span m='14050'>MIT</span>
  <span m='14480'>courses,</span> <span m='15580'>visit</span> <span
  m='15800'>MIT</span> <span m='16230'>OpenCourseWare</span> <span
  m='17270'>at</span> <span m='17440'>ocw.mit.edu.</span> </p><p></p><p><span
  m='22460'>PROFESSOR: Good</span> <span m='22630'>morning,</span> <span
  m='22870'>everyone.</span> <span m='24510'>Let's</span> <span
  m='24800'>get</span> <span m='24940'>started</span> <span m='25350'>on</span>
  <span m='26060'>lecture</span> <span m='26430'>number</span> <span
  m='26740'>two</span> <span m='27150'>of</span> <span m='27850'>four</span>
  <span m='28190'>lecture</span> <span m='28530'>sequences</span> <span
  m='28960'>of</span> <span m='29050'>shortest</span> <span
  m='29440'>paths.</span> <span m='30580'>So,</span> <span m='30770'>last</span>
  <span m='31070'>time,</span> <span m='32200'>we</span> <span
  m='32380'>talked</span> <span m='32630'>about</span> <span m='32830'>a</span>
  <span m='32900'>general</span> <span m='33300'>structure</span> <span
  m='34220'>for a</span> <span m='34530'>shortest</span> <span
  m='34900'>path</span> <span m='35230'>algorithm.</span> </p><p><span
  m='37160'>Today,</span> <span m='37490'>we'll</span> <span
  m='37720'>actually</span> <span m='37990'>look</span> <span
  m='38180'>at</span> <span m='38270'>a</span> <span m='38590'>concrete</span>
  <span m='39060'>algorithm</span> <span m='40100'>that's</span> <span
  m='40400'>due</span> <span m='40550'>to</span> <span
  m='40660'>Dijkstra.</span> <span m='43990'>Before</span> <span
  m='44310'>we</span> <span m='44420'>get</span> <span m='44590'>to</span> <span
  m='44660'>that,</span> <span m='45630'>I</span> <span m='45660'>want</span>
  <span m='45810'>to</span> <span m='45870'>do</span> <span m='45960'>a</span>
  <span m='46010'>little</span> <span m='46150'>bit</span> <span
  m='46260'>of</span> <span m='46360'>a</span> <span m='46390'>review</span>
  <span m='46890'>of</span> <span m='47780'>the</span> <span
  m='48000'>concepts</span> <span m='49610'>that</span> <span
  m='50030'>we</span> <span m='50150'>covered</span> <span m='50500'>in</span>
  <span m='50820'>the</span> <span m='51290'>lecture</span> <span
  m='51740'>last</span> <span m='52640'>week.</span> <span m='54450'>In</span>
  <span m='54600'>particular,</span> <span m='55560'>we</span> <span
  m='55730'>talked</span> <span m='55940'>about</span> <span
  m='56130'>this</span> <span m='56260'>notion</span> <span m='56590'>of</span>
  <span m='56830'>relaxation,</span> <span m='58220'>which</span> <span
  m='58410'>is</span> <span m='58530'>a</span> <span
  m='58590'>fundamental</span> <span m='59120'>operation</span> <span
  m='59425'>in</span> <span m='59730'>all</span> <span m='59850'>shortest</span>
  <span m='60380'>path</span> <span m='60650'>algorithms.</span> </p><p><span
  m='61630'>And</span> <span m='61710'>I</span> <span m='61730'>want</span>
  <span m='61880'>to</span> <span m='61920'>go</span> <span
  m='62070'>over</span> <span m='62190'>that</span> <span
  m='62390'>again.</span> <span m='63680'>We</span> <span m='63830'>look</span>
  <span m='64050'>at</span> <span m='64790'>a</span> <span m='64890'>couple
  of</span> <span m='65180'>special</span> <span m='65580'>cases</span> <span
  m='66020'>today,</span> <span m='66960'>with</span> <span
  m='67130'>respect</span> <span m='67560'>to</span> <span
  m='67870'>algorithms</span> <span m='68390'>for</span> <span
  m='68700'>shortest</span> <span m='69050'>paths.</span> <span
  m='70080'>We</span> <span m='70230'>look</span> <span m='70420'>at</span>
  <span m='70470'>a</span> <span m='70830'>Directed</span> <span
  m='71250'>Acyclic</span> <span m='71740'>Graph. </span> <span
  m='73440'>Then</span> <span m='73560'>your</span> <span m='73740'>graph</span>
  <span m='74020'>has</span> <span m='74890'>no</span> <span
  m='75020'>cycles</span> <span m='75490'>in</span> <span m='75590'>it.</span>
  </p><p><span m='77430'>Regardless</span> <span m='77890'>of</span> <span
  m='77950'>whether</span> <span m='78150'>you</span> <span
  m='78270'>have</span> <span m='79400'>negative</span> <span
  m='79820'>edges</span> <span m='81660'>or</span> <span m='81980'>not,</span>
  <span m='82770'>there's</span> <span m='82900'>a</span> <span
  m='83320'>straightforward</span> <span m='83900'>algorithm</span> <span
  m='84440'>that</span> <span m='84600'>we</span> <span m='84730'>look</span>
  <span m='84950'>at</span> <span m='85550'>to find</span> <span
  m='86080'>shortest</span> <span m='86490'>paths</span> <span
  m='86870'>and</span> <span m='87100'>DAGs.</span> <span m='88760'>And</span>
  <span m='89330'>then,</span> <span m='89540'>we'll</span> <span
  m='89670'>focus</span> <span m='89980'>in</span> <span m='90200'>on</span>
  <span m='90370'>the</span> <span m='90470'>case</span> <span
  m='90770'>where</span> <span m='91000'>there</span> <span m='91130'>are</span>
  <span m='91240'>no</span> <span m='91390'>negative</span> <span
  m='91740'>edges.</span> <span m='92660'>And</span> <span m='93170'>talk</span>
  <span m='93370'>about</span> <span m='93790'>Dijkstra's</span> <span
  m='94230'>algorithm.</span> </p><p><span m='95970'>So, to</span> <span
  m='96260'>start</span> <span m='96570'>with</span> <span m='96680'>the</span>
  <span m='96750'>review,</span> <span m='102090'>here's,</span> <span
  m='103190'>really,</span> <span m='103400'>a</span> <span
  m='103480'>trivial</span> <span m='103850'>example</span> <span
  m='104450'>of</span> <span m='105360'>a</span> <span m='105490'>graph</span>
  <span m='106330'>that</span> <span m='106850'>we</span> <span
  m='107010'>want</span> <span m='107170'>to</span> <span
  m='107220'>compute</span> <span m='107840'>the</span> <span
  m='107890'>shortest</span> <span m='108230'>paths</span> <span
  m='108480'>on.</span> <span m='110000'>And</span> <span m='113550'>the</span>
  <span m='113710'>numbers</span> <span m='114130'>that</span> <span
  m='114270'>are</span> <span m='114410'>inside</span> <span
  m='114990'>these</span> <span m='115500'>vertices</span> <span
  m='116780'>are</span> <span m='117090'>our</span> <span
  m='117280'>priority</span> <span m='117800'>values.</span> <span
  m='118320'>So,</span> <span m='118830'>think</span> <span m='119060'>of</span>
  <span m='119220'>d</span> <span m='119420'>of</span> <span m='119650'>v</span>
  <span m='122160'>as</span> <span m='122520'>the</span> <span
  m='122630'>length</span> <span m='126420'>of</span> <span
  m='126600'>the</span> <span m='126740'>current</span> <span
  m='129340'>shortest</span> <span m='129720'>path</span> <span
  m='130710'>from</span> <span m='131740'>the</span> <span
  m='131880'>source,</span> <span m='132730'>s,</span> <span
  m='135180'>to</span> <span m='135290'>v.</span> </p><p><span
  m='136250'>And,</span> <span m='137080'>given</span> <span
  m='137320'>the</span> <span m='137410'>source,</span> <span
  m='137730'>s,</span> <span m='141140'>the</span> <span
  m='141450'>length</span> <span m='141740'>to</span> <span
  m='141860'>the</span> <span m='141980'>source</span> <span
  m='142320'>is</span> <span m='142480'>0.</span> <span m='142900'>So</span>
  <span m='143130'>d</span> <span m='143340'>of</span> <span m='143450'>s</span>
  <span m='143670'>is</span> <span m='143820'>0.</span> <span
  m='144130'>It</span> <span m='144240'>starts</span> <span m='144560'>at</span>
  <span m='144650'>0</span> <span m='144970'>and</span> <span
  m='145070'>ends</span> <span m='145310'>at</span> <span m='145420'>0.</span>
  <span m='146590'>And</span> <span m='146780'>other</span> <span
  m='146970'>ones,</span> <span m='147240'>I</span> <span
  m='147310'>initialized</span> <span m='147940'>to</span> <span
  m='148420'>infinity.</span> </p><p><span m='149940'>And</span> <span
  m='150760'>through</span> <span m='150950'>this</span> <span
  m='151350'>process</span> <span m='152120'>that</span> <span
  m='152240'>we</span> <span m='152340'>call</span> <span
  m='152730'>relaxation,</span> <span m='155180'>we</span> <span
  m='156200'>can</span> <span m='156350'>generally</span> <span
  m='156790'>reduce</span> <span m='158620'>these</span> <span m='159130'>d
  values,</span> <span m='160770'>that</span> <span m='161230'>are the</span>
  <span m='161390'>lengths</span> <span m='161620'>of</span> <span
  m='161700'>the</span> <span m='161780'>current</span> <span
  m='162080'>shortest</span> <span m='162410'>paths,</span> <span
  m='162930'>down</span> <span m='163400'>to</span> <span m='164830'>what</span>
  <span m='165040'>we</span> <span m='165160'>call</span> <span
  m='165970'>the</span> <span m='166190'>delta</span> <span
  m='166670'>values.</span> <span m='169610'>Which</span> <span
  m='171020'>is</span> <span m='171280'>the</span> <span
  m='171380'>length</span> <span m='171600'>of</span> <span
  m='172960'>our</span> <span m='173250'>shortest</span> <span
  m='173500'>path.</span> <span m='177030'>It</span> <span m='177390'>may</span>
  <span m='177610'>be</span> <span m='177730'>unique. It</span> <span
  m='178160'>may</span> <span m='178280'>not</span> <span m='178480'>be</span>
  <span m='178570'>unique.</span> </p><p><span m='179750'>But</span> <span
  m='179960'>you</span> <span m='180070'>have</span> <span m='180210'>to</span>
  <span m='180300'>get</span> <span m='180680'>the</span> <span
  m='180810'>minimum</span> <span m='181110'>value.</span> <span
  m='182280'>And</span> <span m='183010'>then,</span> <span
  m='183330'>all</span> <span m='183640'>of</span> <span m='183760'>the</span>
  <span m='184300'>vertices</span> <span m='186080'>have</span> <span
  m='186710'>convergent</span> <span m='188890'>values</span> <span
  m='189330'>of</span> <span m='189480'>d</span> <span m='189760'>that</span>
  <span m='189930'>converge</span> <span m='190390'>to</span> <span
  m='190520'>delta.</span> <span m='191710'>Then,</span> <span
  m='191820'>your</span> <span m='191960'>algorithm</span> <span
  m='192330'>is</span> <span m='192450'>done.</span> </p><p><span
  m='194120'>And</span> <span m='194310'>one</span> <span m='194450'>last</span>
  <span m='194770'>thing</span> <span m='195040'>that</span> <span
  m='196430'>is</span> <span m='196580'>important</span> <span
  m='198690'>to</span> <span m='198820'>reconstruct</span> <span
  m='199490'>the</span> <span m='199580'>path</span> <span m='200230'>is</span>
  <span m='200430'>the</span> <span m='200500'>notion</span> <span
  m='200820'>of</span> <span m='200960'>a</span> <span
  m='201280'>predecessor</span> <span m='202570'>and</span> <span
  m='202810'>pi</span> <span m='203050'>v</span> <span m='206900'>is</span>
  <span m='207090'>the</span> <span m='207210'>predecessor</span> <span
  m='209026'>of</span> <span m='209410'>v</span> <span m='214790'>in</span>
  <span m='215000'>the</span> <span m='215270'>shortest</span> <span
  m='215670'>path</span> <span m='216010'>from</span> <span m='216260'>s</span>
  <span m='216530'>to v.</span> <span m='220140'>And</span> <span
  m='220410'>you</span> <span m='220510'>can</span> <span
  m='220670'>follow</span> <span m='223390'>this</span> <span
  m='223620'>predecessor</span> <span m='224180'>chain</span> <span
  m='224890'>to</span> <span m='225020'>reconstruct</span> <span
  m='225660'>the</span> <span m='225730'>shortest</span> <span
  m='226100'>path,</span> <span m='226810'>once</span> <span
  m='227120'>you've</span> <span m='229710'>converged,</span> <span
  m='230430'>and</span> <span m='230750'>all</span> <span m='230950'>of</span>
  <span m='231010'>the</span> <span m='231070'>values</span> <span
  m='231560'>are</span> <span m='231930'>down</span> <span m='232200'>to</span>
  <span m='232300'>the</span> <span m='232410'>delta</span> <span
  m='232800'>s</span> <span m='233240'>comma</span> <span m='233500'>v.</span>
  <span m='234480'>So,</span> <span m='234680'>in</span> <span
  m='234790'>this</span> <span m='235570'>trivial</span> <span
  m='235900'>example,</span> <span m='237140'>you</span> <span
  m='237290'>start</span> <span m='237670'>with</span> <span m='238780'>d</span>
  <span m='238980'>of</span> <span m='239080'>s</span> <span
  m='239290'>being</span> <span m='239500'>0,</span> <span m='240330'>d</span>
  <span m='240510'>of</span> <span m='240670'>a</span> <span
  m='241090'>and</span> <span m='241330'>d</span> <span m='241470'>of</span>
  <span m='241590'>b</span> <span m='241800'>being</span> <span
  m='242060'>infinity.</span> </p><p><span m='244580'>Let's</span> <span
  m='244660'>put</span> <span m='244850'>on</span> <span m='245050'>it</span>
  <span m='247980'>a</span> <span m='248090'>few</span> <span
  m='248270'>weights</span> <span m='248620'>here.</span> <span
  m='250560'>And</span> <span m='250910'>what</span> <span m='251050'>you</span>
  <span m='251160'>do</span> <span m='251470'>is</span> <span
  m='251870'>potentially</span> <span m='252860'>relax</span> <span
  m='253520'>the</span> <span m='253660'>edges</span> <span
  m='254690'>that</span> <span m='254920'>go</span> <span m='255140'>out</span>
  <span m='255340'>of</span> <span m='255470'>s.</span> <span
  m='256510'>And</span> <span m='256839'>this</span> <span
  m='257010'>notion</span> <span m='257279'>of</span> <span
  m='257360'>relaxation,</span> <span m='258000'>that</span> <span
  m='258170'>I'll</span> <span m='258459'>write</span> <span
  m='258709'>out</span> <span m='259269'>formally in</span> <span
  m='259709'>a</span> <span m='259760'>minute--</span> <span
  m='260440'>we</span> <span m='260579'>looked</span> <span m='260769'>at</span>
  <span m='260829'>it</span> <span m='260930'>last</span> <span
  m='261190'>time,</span> <span m='261940'>is</span> <span m='262130'>a</span>
  <span m='262190'>process</span> <span m='262630'>of</span> <span
  m='262970'>following</span> <span m='263470'>this</span> <span
  m='263700'>edge,</span> <span m='264180'>and</span> <span
  m='264350'>updating</span> <span m='264980'>the</span> <span
  m='265320'>d</span> <span m='265590'>of a</span> <span
  m='265820'>value.</span> </p><p><span m='266710'>And</span> <span
  m='266860'>this</span> <span m='267030'>infinity</span> <span
  m='267510'>becomes</span> <span m='267850'>1</span> <span
  m='269160'>because</span> <span m='269430'>you</span> <span
  m='269540'>say,</span> <span m='270000'>well, if</span> <span
  m='270280'>I</span> <span m='270340'>start</span> <span m='270600'>here</span>
  <span m='270790'>with</span> <span m='270890'>0 and I</span> <span
  m='271260'>add</span> <span m='271570'>1</span> <span m='271820'>to</span>
  <span m='271950'>it,</span> <span m='272070'>I</span> <span
  m='272120'>get</span> <span m='272290'>1</span> <span m='272540'>here.</span>
  <span m='273590'>Similarly,</span> <span m='273850'>this</span> <span
  m='274040'>infinity</span> <span m='274450'>becomes</span> <span
  m='274820'>3.</span> <span m='275830'>And,</span> <span m='276140'>at</span>
  <span m='276210'>this</span> <span m='276380'>point,</span> <span
  m='276680'>you've</span> <span m='276830'>relaxed</span> <span
  m='277340'>the</span> <span m='277440'>edges</span> <span
  m='278100'>that</span> <span m='278330'>go</span> <span m='278520'>out</span>
  <span m='278710'>of</span> <span m='278860'>s</span> <span
  m='279880'>two</span> <span m='280030'>these</span> <span
  m='280260'>other</span> <span m='280490'>two</span> <span
  m='280640'>nodes,</span> <span m='281500'>a</span> <span m='281630'>and</span>
  <span m='281790'>b.</span> </p><p><span m='283040'>You're</span> <span
  m='283470'>not</span> <span m='283630'>quite</span> <span
  m='283900'>done</span> <span m='284100'>yet.</span> <span m='285532'>At</span>
  <span m='285940'>this</span> <span m='286090'>point,</span> <span
  m='286700'>you</span> <span m='286870'>could</span> <span
  m='286960'>imagine</span> <span m='287320'>that,</span> <span
  m='288380'>at</span> <span m='288510'>least</span> <span m='288670'>in</span>
  <span m='288750'>this</span> <span m='288920'>example,</span> <span
  m='289770'>you</span> <span m='289950'>found</span> <span
  m='290210'>the</span> <span m='290280'>shortest</span> <span
  m='290640'>path</span> <span m='290930'>to</span> <span m='291020'>the</span>
  <span m='291130'>vertex</span> <span m='291510'>a.</span> <span
  m='292350'>But</span> <span m='292520'>it is,</span> <span
  m='292690'>in</span> <span m='292800'>fact,</span> <span m='294440'>a</span>
  <span m='294680'>path</span> <span m='295030'>of</span> <span
  m='295140'>length,</span> <span m='295660'>2,</span> <span
  m='296530'>to</span> <span m='296640'>vertex</span> <span m='297070'>b.</span>
  </p><p><span m='297940'>Right</span> <span m='298190'>now,</span> <span
  m='298370'>we</span> <span m='298500'>think</span> <span
  m='298750'>that</span> <span m='298920'>the</span> <span m='300030'>the</span>
  <span m='300110'>current</span> <span m='300490'>shortest</span> <span
  m='300740'>path</span> <span m='301090'>to</span> <span m='301160'>b,</span>
  <span m='301540'>after</span> <span m='301790'>the</span> <span
  m='301920'>first</span> <span m='302210'>step</span> <span
  m='302480'>of</span> <span m='302780'>relaxing</span> <span
  m='304160'>the</span> <span m='304320'>edges</span> <span
  m='304630'>from</span> <span m='304830'>s,</span> <span
  m='305500'>happens</span> <span m='305830'>to</span> <span
  m='305900'>be</span> <span m='306040'>3.</span> <span m='306720'>But</span>
  <span m='306870'>if</span> <span m='306940'>you</span> <span
  m='307030'>go</span> <span m='307180'>like</span> <span m='307430'>so,</span>
  <span m='308970'>then</span> <span m='309880'>you</span> <span
  m='310040'>end</span> <span m='310240'>up</span> <span m='310440'>with</span>
  <span m='312000'>the</span> <span m='312400'>2.</span> <span
  m='313360'>And,</span> <span m='313660'>at</span> <span m='313730'>this</span>
  <span m='313880'>point,</span> <span m='314380'>you're</span> <span
  m='314580'>done.</span> </p><p><span m='315790'>Now</span> <span
  m='316340'>we</span> <span m='316450'>have</span> <span m='316570'>to</span>
  <span m='316630'>prove</span> <span m='317400'>that</span> <span
  m='318490'>any</span> <span m='318700'>particular</span> <span
  m='319090'>algorithm</span> <span m='319550'>we</span> <span
  m='319580'>put</span> <span m='319730'>up</span> <span m='320380'>is</span>
  <span m='320600'>going</span> <span m='320750'>to</span> <span
  m='320810'>converge</span> <span m='321290'>to</span> <span
  m='321400'>the</span> <span m='321520'>delta</span> <span
  m='321830'>values,</span> <span m='322990'>and</span> <span
  m='324320'>the</span> <span m='324390'>algorithm</span> <span
  m='324760'>to</span> <span m='324870'>terminate.</span> <span
  m='325510'>And</span> <span m='325610'>then,</span> <span m='325740'>we</span>
  <span m='325830'>have</span> <span m='325960'>to</span> <span
  m='326060'>worry</span> <span m='326280'>about</span> <span
  m='326500'>the</span> <span m='326700'>asymptotic</span> <span
  m='327200'>complexity</span> <span m='327790'>of the</span> <span
  m='327910'>algorithm.</span> <span m='328930'>But</span> <span
  m='329090'>that's</span> <span m='329360'>the</span> <span
  m='329490'>general</span> <span m='329930'>overall</span> <span
  m='330290'>flow.</span> </p><p><span m='331060'>And</span> <span
  m='331220'>we</span> <span m='331320'>look</span> <span m='331540'>at,</span>
  <span m='331710'>as</span> <span m='331900'>I</span> <span
  m='331970'>said,</span> <span m='332490'>two</span> <span
  m='332840'>algorithms</span> <span m='333270'>today.</span> <span
  m='334060'>Both</span> <span m='334310'>special</span> <span
  m='334650'>cases.</span> <span m='335520'>One</span> <span
  m='335700'>for</span> <span m='335850'>DAGs</span> <span m='336260'>and</span>
  <span m='336370'>one</span> <span m='336590'>for</span> <span
  m='337030'>non-negative</span> <span m='337560'>edges.</span> <span
  m='338380'>And</span> <span m='338890'>we'll</span> <span m='339100'>go</span>
  <span m='339280'>through,</span> <span m='340040'>and</span> <span
  m='340200'>maybe</span> <span m='340370'>not</span> <span m='340540'>do</span>
  <span m='340650'>a</span> <span m='340720'>formal</span> <span
  m='341070'>proof,</span> <span m='341430'>but</span> <span
  m='342200'>suddenly</span> <span m='342490'>give</span> <span
  m='342610'>you</span> <span m='343010'>a</span> <span m='343390'>strong</span>
  <span m='343800'>intuition</span> <span m='344320'>as</span> <span
  m='344430'>to</span> <span m='344520'>why</span> <span m='344670'>these</span>
  <span m='344880'>algorithms</span> <span m='345290'>work.</span> <span
  m='346990'>Any</span> <span m='347160'>questions</span> <span
  m='349590'>about</span> <span m='349820'>this</span> <span
  m='349950'>material?</span> <span m='352750'>OK.</span> </p><p><span
  m='354920'>So,</span> <span m='355980'>what</span> <span m='356140'>I</span>
  <span m='356160'>want</span> <span m='356330'>to</span> <span
  m='356400'>do</span> <span m='356600'>is</span> <span m='357730'>give</span>
  <span m='357930'>you</span> <span m='358220'>a</span> <span
  m='358280'>sense</span> <span m='358790'>for</span> <span
  m='359080'>why</span> <span m='360310'>this</span> <span
  m='360600'>relaxation</span> <span m='361940'>step</span> <span
  m='363450'>is</span> <span m='363880'>useful.</span> <span
  m='364770'>But</span> <span m='364910'>also,</span> <span
  m='365590'>importantly,</span> <span m='366390'>safe,</span> <span
  m='367100'>or</span> <span m='367270'>correct.</span> <span
  m='368470'>And</span> <span m='370320'>recall</span> <span
  m='370760'>that</span> <span m='372050'>our</span> <span
  m='373070'>basic</span> <span m='373540'>relaxation</span> <span
  m='374140'>operation,</span> <span m='375070'>which</span> <span
  m='375220'>we</span> <span m='375740'>did</span> <span m='375970'>over</span>
  <span m='376140'>here,</span> <span m='376900'>as</span> <span
  m='377120'>we</span> <span m='377250'>updated</span> <span
  m='377760'>the</span> <span m='378010'>infinity</span> <span
  m='378470'>value</span> <span m='378830'>to</span> <span m='378940'>1</span>
  <span m='379740'>and</span> <span m='379910'>the</span> <span
  m='379990'>3</span> <span m='380180'>value</span> <span m='380560'>to</span>
  <span m='380960'>2,</span> <span m='381350'>et cetera,</span> <span
  m='382820'>looks</span> <span m='383070'>like</span> <span
  m='383310'>this.</span> </p><p><span m='384100'>It says,</span> <span
  m='384270'>if</span> <span m='384670'>d</span> <span m='384950'>of</span>
  <span m='385110'>v</span> <span m='386430'>is</span> <span
  m='386670'>greater</span> <span m='387060'>than</span> <span
  m='387840'>d</span> <span m='388130'>of</span> <span m='388230'>u</span> <span
  m='388640'>plus</span> <span m='389120'>w</span> <span m='390710'>u,v.</span>
  <span m='392150'>Then,</span> <span m='393510'>I'm</span> <span
  m='393680'>going</span> <span m='394000'>to</span> <span
  m='394710'>update</span> <span m='395340'>d</span> <span m='395520'>of</span>
  <span m='395590'>v</span> <span m='395970'>to</span> <span
  m='396080'>be</span> <span m='397290'>d</span> <span m='397370'>of</span>
  <span m='397520'>u</span> <span m='398830'>plus</span> <span
  m='399210'>w</span> <span m='399465'>u,</span> <span m='399720'>v.</span>
  <span m='400100'>You</span> <span m='400270'>found</span> <span
  m='400540'>a</span> <span m='400590'>better</span> <span m='400970'>way</span>
  <span m='401580'>of</span> <span m='401760'>reaching</span> <span
  m='402500'>vertex</span> <span m='403010'>v.</span> <span m='404070'>A</span>
  <span m='404160'>shorter</span> <span m='404590'>way.</span> </p><p><span
  m='408560'>And</span> <span m='409060'>this</span> <span m='409340'>way</span>
  <span m='409560'>happens</span> <span m='409920'>to</span> <span
  m='410010'>be</span> <span m='410150'>going</span> <span
  m='410440'>through</span> <span m='410650'>the</span> <span
  m='410750'>vertex,</span> <span m='411180'>u.</span> <span
  m='411920'>So</span> <span m='412130'>you</span> <span
  m='412390'>update</span> <span m='412870'>not</span> <span
  m='413060'>only</span> <span m='413330'>the</span> <span
  m='413500'>priority</span> <span m='414050'>value,</span> <span
  m='414930'>but</span> <span m='415030'>also</span> <span m='415330'>the</span>
  <span m='415460'>predecessor</span> <span m='416110'>relationship.</span>
  <span m='417640'>All</span> <span m='417730'>right?</span> <span
  m='417950'>That's</span> <span m='418260'>the</span> <span
  m='418350'>relaxation</span> <span m='418910'>step.</span> </p><p><span
  m='419940'>Now,</span> <span m='421370'>I</span> <span m='421480'>want</span>
  <span m='421640'>to</span> <span m='421680'>be</span> <span
  m='421770'>able</span> <span m='421920'>to</span> <span m='421990'>show</span>
  <span m='422490'>that</span> <span m='423630'>relaxation</span> <span
  m='424350'>is</span> <span m='424460'>safe.</span> <span
  m='430200'>What</span> <span m='430340'>do</span> <span m='430430'>I</span>
  <span m='430510'>mean</span> <span m='430740'>by</span> <span
  m='430870'>that?</span> <span m='431760'>Well,</span> <span
  m='432630'>I</span> <span m='432710'>want</span> <span m='432830'>to</span>
  <span m='432870'>make</span> <span m='433010'>sure</span> <span
  m='433200'>that</span> <span m='433340'>I</span> <span m='433390'>never</span>
  <span m='434740'>relax</span> <span m='435330'>an</span> <span
  m='435470'>edge</span> <span m='436470'>and</span> <span
  m='436910'>somehow</span> <span m='437230'>do</span> <span
  m='437380'>something</span> <span m='437820'>wrong,</span> <span
  m='438290'>which</span> <span m='438490'>gets</span> <span
  m='438780'>me</span> <span m='439000'>a</span> <span m='439040'>value</span>
  <span m='439570'>that's</span> <span m='439870'>less</span> <span
  m='440450'>than</span> <span m='441370'>delta</span> <span m='441790'>s</span>
  <span m='442040'>v.</span> </p><p><span m='443320'>I</span> <span
  m='443590'>want</span> <span m='443760'>to</span> <span m='443800'>be</span>
  <span m='443910'>able</span> <span m='444060'>to</span> <span
  m='444130'>converge</span> <span m='444630'>from</span> <span
  m='444830'>the</span> <span m='444960'>top.</span> <span m='445880'>I</span>
  <span m='445990'>want</span> <span m='446140'>to</span> <span
  m='446180'>be</span> <span m='446300'>able</span> <span m='446470'>to</span>
  <span m='446620'>start</span> <span m='447090'>with</span> <span
  m='447220'>these</span> <span m='447390'>infinity</span> <span
  m='447880'>values</span> <span m='448840'>because</span> <span
  m='449220'>I</span> <span m='449290'>don't</span> <span m='449450'>have</span>
  <span m='449650'>a</span> <span m='449710'>path</span> <span
  m='450040'>to</span> <span m='450140'>this</span> <span
  m='450310'>particular</span> <span m='450650'>vertex,</span> <span
  m='451660'>and</span> <span m='452080'>continually</span> <span
  m='452670'>reduce</span> <span m='453790'>the</span> <span
  m='453940'>values</span> <span m='454440'>of</span> <span
  m='454570'>the</span> <span m='454650'>priorities.</span> <span
  m='455700'>And</span> <span m='455870'>then</span> <span m='456220'>get</span>
  <span m='456400'>down</span> <span m='456730'>to</span> <span
  m='456850'>delta,</span> <span m='457590'>the</span> <span
  m='458020'>correct</span> <span m='458340'>values,</span> <span
  m='459150'>and</span> <span m='459300'>don't</span> <span
  m='459480'>go,</span> <span m='459660'>I</span> <span m='459790'>don't</span>
  <span m='459910'>want</span> <span m='460010'>to go any</span> <span
  m='460380'>further.</span> <span m='460750'>All</span> <span
  m='461230'>right?</span> </p><p><span m='461470'>Because,</span> <span
  m='461660'>if I</span> <span m='461800'>get</span> <span
  m='461960'>below,</span> <span m='462310'>then</span> <span
  m='462720'>you're</span> <span m='463050'>talking</span> <span
  m='463310'>about,</span> <span m='464130'>essentially,</span> <span
  m='464710'>you</span> <span m='464830'>may be</span> <span m='465030'>able to
  get</span> <span m='465370'>back</span> <span m='465600'>up,</span> <span
  m='466170'>but</span> <span m='466510'>that</span> <span m='467020'>is</span>
  <span m='467480'>not</span> <span m='467760'>the</span> <span
  m='467830'>kind</span> <span m='468020'>of</span> <span
  m='468090'>algorithm</span> <span m='468490'>that</span> <span
  m='468670'>we</span> <span m='468790'>want.</span> <span m='469630'>At</span>
  <span m='469930'>least,</span> <span m='470100'>algorithms</span> <span
  m='470530'>we</span> <span m='470650'>look</span> <span m='470820'>at</span>
  <span m='470950'>here.</span> <span m='471960'>And</span> <span
  m='472450'>that</span> <span m='472630'>is</span> <span
  m='472800'>dangerous.</span> <span m='473930'>So</span> <span
  m='474220'>we</span> <span m='474330'>want</span> <span
  m='474730'>relaxation</span> <span m='475280'>to</span> <span
  m='475360'>be</span> <span m='475840'>safe.</span> </p><p><span
  m='476850'>And</span> <span m='477490'>we</span> <span m='477620'>can</span>
  <span m='477730'>fairly</span> <span m='478700'>easily</span> <span
  m='479150'>prove</span> <span m='481030'>a</span> <span
  m='481110'>simple</span> <span m='481470'>lemma,</span> <span
  m='482510'>using</span> <span m='482880'>induction,</span> <span
  m='484970'>that</span> <span m='485240'>says</span> <span
  m='485620'>that</span> <span m='489202'>the</span> <span
  m='489590'>relaxation</span> <span m='490280'>operation--</span> <span
  m='492290'>and</span> <span m='492420'>it</span> <span
  m='492470'>doesn't</span> <span m='492720'>matter</span> <span
  m='493690'>what</span> <span m='494030'>sequence</span> <span
  m='494580'>you</span> <span m='494720'>relax</span> <span
  m='495180'>things.</span> <span m='495690'>This</span> <span
  m='495740'>is</span> <span m='495890'>a</span> <span m='495960'>fairly</span>
  <span m='496270'>powerful</span> <span m='496660'>lemma</span> <span
  m='497420'>that says</span> <span m='497770'>that</span> <span
  m='498340'>if</span> <span m='498460'>you</span> <span m='498530'>have</span>
  <span m='498620'>an</span> <span m='498690'>algorithm</span> <span
  m='499210'>that</span> <span m='499370'>uses</span> <span
  m='499810'>relaxation,</span> <span m='500850'>and</span> <span
  m='501040'>that's</span> <span m='501360'>the</span> <span
  m='501540'>only</span> <span m='503000'>way</span> <span m='503410'>of</span>
  <span m='503590'>updating</span> <span m='504190'>these</span> <span
  m='504490'>d values,</span> <span m='505850'>then</span> <span
  m='506340'>it's</span> <span m='506580'>safe.</span> </p><p><span
  m='507560'>You're</span> <span m='508050'>not</span> <span
  m='508270'>going</span> <span m='508400'>to</span> <span m='508440'>get</span>
  <span m='509070'>a</span> <span m='509200'>wrong,</span> <span
  m='509770'>shortest</span> <span m='510120'>path</span> <span
  m='510370'>value.</span> <span m='511090'>Either</span> <span
  m='511330'>at</span> <span m='511410'>the</span> <span m='511470'>end</span>
  <span m='511720'>of</span> <span m='511790'>the</span> <span
  m='511860'>algorithm</span> <span m='512350'>or at</span> <span
  m='512549'>any</span> <span m='512809'>time</span> <span
  m='513760'>during</span> <span m='514140'>the</span> <span
  m='514270'>running,</span> <span m='514600'>or</span> <span
  m='514669'>the</span> <span m='514770'>execution,</span> <span
  m='515299'>of</span> <span m='515390'>this</span> <span
  m='515559'>algorithm.</span> <span m='516630'>OK?</span> <span
  m='516909'>So</span> <span m='517039'>the</span> <span
  m='517100'>relaxation</span> <span m='517970'>operation</span> <span
  m='518880'>algorithm</span> <span m='519890'>maintains</span> <span
  m='524039'>the</span> <span m='524320'>invariant</span> <span
  m='529610'>that</span> <span m='531480'>d of</span> <span m='531970'>v</span>
  <span m='533160'>is</span> <span m='533310'>greater</span> <span
  m='533610'>than</span> <span m='533790'>or</span> <span
  m='533920'>equal</span> <span m='534300'>to</span> <span
  m='535540'>delta</span> <span m='535950'>s,</span> <span m='536220'>v</span>
  <span m='539010'>for</span> <span m='539290'>all</span> <span
  m='540620'>vertices.</span> <span m='542310'>OK?</span> </p><p><span
  m='543230'>So</span> <span m='543380'>that's</span> <span m='543830'>a</span>
  <span m='544050'>powerful</span> <span m='545200'>lemma.</span> <span
  m='545380'>It's a</span> <span m='545590'>fairly</span> <span
  m='545870'>straightforward</span> <span m='546380'>lemma</span> <span
  m='546640'>to</span> <span m='546710'>prove.</span> <span
  m='547250'>But</span> <span m='547590'>it's</span> <span m='547700'>an</span>
  <span m='547760'>important</span> <span m='548150'>lemma.</span> <span
  m='549750'>It</span> <span m='550120'>tells</span> <span m='550350'>us</span>
  <span m='550520'>that</span> <span m='550660'>we</span> <span
  m='550820'>can</span> <span m='551640'>create</span> <span
  m='552140'>the</span> <span m='552300'>generic</span> <span
  m='552750'>structure</span> <span m='553330'>of</span> <span
  m='553490'>the</span> <span m='553560'>shortest</span> <span
  m='553860'>path</span> <span m='554100'>algorithm</span> <span
  m='554500'>that</span> <span m='554630'>I</span> <span
  m='554720'>talked</span> <span m='555060'>about</span> <span
  m='555410'>last</span> <span m='555680'>week.</span> </p><p><span
  m='556480'>It</span> <span m='556930'>says,</span> <span
  m='557710'>pick</span> <span m='558090'>an</span> <span
  m='558190'>edge.</span> <span m='559370'>Relax</span> <span
  m='559780'>it.</span> <span m='560390'>Pick</span> <span
  m='560530'>another</span> <span m='560750'>edge.</span> <span
  m='561060'>Relax</span> <span m='561460'>it.</span> <span
  m='562020'>And</span> <span m='562290'>hopefully</span> <span
  m='562770'>everything will</span> <span m='563110'>work</span> <span
  m='563350'>out</span> <span m='563580'>and</span> <span
  m='563680'>you'll</span> <span m='563790'>get</span> <span
  m='563960'>your</span> <span m='564070'>delta</span> <span
  m='564330'>values.</span> </p><p><span m='565480'>And</span> <span
  m='565600'>what</span> <span m='565780'>this</span> <span
  m='565940'>lemma</span> <span m='566210'>says</span> <span
  m='567146'>is,</span> <span m='568890'>you'll</span> <span
  m='569110'>never</span> <span m='569290'>get</span> <span
  m='569510'>something</span> <span m='569860'>in</span> <span
  m='569920'>the</span> <span m='569990'>middle</span> <span
  m='570310'>that</span> <span m='570510'>is</span> <span m='570700'>less</span>
  <span m='570940'>than</span> <span m='571080'>your</span> <span
  m='571200'>shortest</span> <span m='571520'>path</span> <span
  m='571740'>value.</span> <span m='572500'>And</span> <span
  m='572690'>if</span> <span m='572770'>you</span> <span m='572890'>keep</span>
  <span m='573480'>running</span> <span m='573820'>over</span> <span
  m='574290'>for</span> <span m='574450'>long</span> <span
  m='574740'>enough</span> <span m='574920'>time,</span> <span
  m='575780'>depending</span> <span m='576070'>on</span> <span
  m='576280'>the</span> <span m='576520'>particular</span> <span
  m='576920'>heuristic</span> <span m='577440'>that</span> <span
  m='577550'>you</span> <span m='577670'>use</span> <span m='577960'>for</span>
  <span m='578090'>selecting</span> <span m='578490'>the</span> <span
  m='578580'>edges,</span> <span m='579560'>your algorithm</span> <span
  m='580010'>will</span> <span m='580250'>eventually</span> <span
  m='580660'>terminate.</span> <span m='581570'>And,</span> <span
  m='581750'>hopefully,</span> <span m='582390'>it'll</span> <span
  m='582820'>run</span> <span m='583070'>in</span> <span
  m='583460'>polynomial</span> <span m='583970'>time.</span> </p><p><span
  m='586740'>So,</span> <span m='588160'>how</span> <span m='588270'>do</span>
  <span m='588340'>we</span> <span m='588450'>prove</span> <span
  m='588700'>this?</span> <span m='590500'>I'm</span> <span
  m='590650'>going</span> <span m='590780'>to</span> <span m='590890'>do</span>
  <span m='591260'>about</span> <span m='592040'>half</span> <span
  m='592320'>of</span> <span m='592480'>it,</span> <span m='592620'>then</span>
  <span m='593280'>try</span> <span m='593470'>and</span> <span
  m='593550'>get</span> <span m='593690'>you</span> <span m='593900'>to</span>
  <span m='594330'>finish</span> <span m='594910'>it.</span> <span
  m='596160'>So</span> <span m='596550'>it's</span> <span m='597140'>by</span>
  <span m='597420'>induction</span> <span m='599980'>on</span> <span
  m='602390'>the</span> <span m='602510'>number</span> <span
  m='602800'>of</span> <span m='602870'>steps,</span> <span m='604640'>in</span>
  <span m='604780'>the</span> <span m='604900'>sense</span> <span
  m='605210'>that</span> <span m='606610'>we</span> <span m='607700'>are</span>
  <span m='607860'>going</span> <span m='608180'>to</span> <span
  m='609290'>essentially</span> <span m='609770'>assume</span> <span
  m='611450'>that</span> <span m='614630'>d</span> <span m='614920'>of</span>
  <span m='615070'>u</span> <span m='616410'>is</span> <span
  m='616640'>greater</span> <span m='616940'>than</span> <span
  m='617130'>or</span> <span m='617250'>equal</span> <span m='617530'>to</span>
  <span m='621520'>delta</span> <span m='622010'>s,u.</span> </p><p><span
  m='623950'>And</span> <span m='625320'>we're</span> <span
  m='625490'>going</span> <span m='625780'>to</span> <span m='627100'>do</span>
  <span m='627300'>this</span> <span m='627580'>relaxation</span> <span
  m='628220'>operation.</span> <span m='628850'>So</span> <span
  m='629150'>it's</span> <span m='629320'>like</span> <span m='629510'>a</span>
  <span m='629820'>base</span> <span m='630120'>case</span> <span
  m='630460'>is</span> <span m='631380'>that</span> <span m='632130'>this</span>
  <span m='632450'>is</span> <span m='632910'>correct.</span> <span
  m='636680'>And</span> <span m='637590'>now</span> <span m='637790'>we</span>
  <span m='637900'>want</span> <span m='638010'>to</span> <span
  m='638070'>show</span> <span m='638540'>that</span> <span
  m='639320'>the</span> <span m='639710'>relaxation</span> <span
  m='640440'>operation</span> <span m='642080'>doesn't</span> <span
  m='643450'>make</span> <span m='643850'>d</span> <span m='644130'>of</span>
  <span m='644190'>v</span> <span m='644760'>incorrect.</span> <span
  m='647090'>So,</span> <span m='650610'>that's the</span> <span
  m='650970'>inductive</span> <span m='651570'>hypothesis.</span> </p><p><span
  m='654660'>Now,</span> <span m='654800'>we</span> <span m='654900'>can</span>
  <span m='655010'>say</span> <span m='655230'>by</span> <span
  m='655410'>the</span> <span m='655570'>triangle</span> <span
  m='656310'>inequality</span> <span m='660680'>that</span> <span
  m='660820'>I</span> <span m='660900'>talked</span> <span
  m='661180'>about</span> <span m='662260'>late</span> <span
  m='662700'>in</span> <span m='663870'>last</span> <span
  m='664160'>week's</span> <span m='664390'>lecture,</span> <span
  m='665590'>you</span> <span m='665690'>have</span> <span
  m='665830'>delta</span> <span m='666290'>s,</span> <span m='666550'>v</span>
  <span m='668440'>less</span> <span m='668720'>than</span> <span
  m='668890'>or</span> <span m='669010'>equal</span> <span m='669360'>to</span>
  <span m='669930'>delta</span> <span m='670350'>s</span> <span
  m='671780'>comma</span> <span m='672050'>u</span> <span m='673040'>plus</span>
  <span m='673500'>delta</span> <span m='675040'>u</span> <span
  m='675350'>comma</span> <span m='675680'>v.</span> <span m='676820'>And</span>
  <span m='677050'>what</span> <span m='677200'>is</span> <span
  m='677290'>that?</span> <span m='677660'>Well,</span> <span
  m='678290'>that</span> <span m='678480'>just</span> <span
  m='678630'>says,</span> <span m='679260'>if</span> <span m='679450'>I</span>
  <span m='679550'>have</span> <span m='685330'>something</span> <span
  m='685950'>like</span> <span m='686130'>this,</span> <span
  m='686670'>that</span> <span m='686880'>I</span> <span m='686950'>have</span>
  <span m='687630'>s.</span> <span m='690340'>Let's</span> <span
  m='690540'>call</span> <span m='690730'>this</span> <span m='692280'>u</span>
  <span m='693410'>and</span> <span m='693710'>v.</span> </p><p><span
  m='695570'>This</span> <span m='695750'>is</span> <span m='695860'>not</span>
  <span m='696040'>an</span> <span m='696180'>edge</span> <span
  m='697090'>between</span> <span m='697510'>s</span> <span m='697900'>and
  v.</span> <span m='698290'>It's</span> <span m='698470'>a</span> <span
  m='698540'>path.</span> <span m='698970'>It</span> <span
  m='699070'>could</span> <span m='699190'>be</span> <span m='699310'>a</span>
  <span m='699370'>single</span> <span m='699700'>edge.</span> <span
  m='700340'>But</span> <span m='700500'>we</span> <span m='700620'>think</span>
  <span m='700790'>of</span> <span m='700890'>this</span> <span
  m='701140'>as</span> <span m='701640'>a</span> <span m='701700'>path</span>
  <span m='702090'>between</span> <span m='702430'>s and</span> <span
  m='702770'>v.</span> <span m='703660'>This</span> <span m='703960'>is</span>
  <span m='704170'>a</span> <span m='704240'>path</span> <span
  m='704580'>between</span> <span m='704950'>s and</span> <span
  m='705360'>u.</span> <span m='707030'>This</span> <span m='707260'>is</span>
  <span m='707410'>a path</span> <span m='707820'>between</span> <span
  m='708530'>u</span> <span m='708790'>and</span> <span m='708930'>v.</span>
  </p><p><span m='710890'>And,</span> <span m='711350'>in</span> <span
  m='711490'>particular,</span> <span m='714630'>if</span> <span
  m='716090'>there's</span> <span m='716360'>a</span> <span
  m='716440'>way</span> <span m='717780'>of</span> <span
  m='718000'>getting</span> <span m='719190'>from</span> <span
  m='720500'>s</span> <span m='720860'>to</span> <span m='720950'>u</span> <span
  m='721740'>and</span> <span m='721980'>u</span> <span m='722200'>to</span>
  <span m='722310'>v</span> <span m='724460'>that</span> <span
  m='726030'>happens</span> <span m='726340'>to</span> <span
  m='726450'>be</span> <span m='727670'>shorter</span> <span
  m='728640'>then</span> <span m='729260'>the</span> <span
  m='729420'>best</span> <span m='729870'>way</span> <span m='730670'>of</span>
  <span m='730850'>getting</span> <span m='731150'>from</span> <span
  m='731900'>s</span> <span m='732170'>to</span> <span m='732290'>v,</span>
  <span m='732980'>well,</span> <span m='733550'>that's</span> <span
  m='733780'>a</span> <span m='733820'>contradiction.</span> <span
  m='735050'>OK?</span> <span m='735330'>Because</span> <span
  m='737320'>this</span> <span m='738470'>is</span> <span m='738710'>the</span>
  <span m='738800'>shortest</span> <span m='739340'>way</span> <span
  m='739850'>of</span> <span m='740000'>getting</span> <span
  m='740390'>from</span> <span m='740730'>s</span> <span m='740930'>to</span>
  <span m='741040'>v.</span> <span m='741270'>And it</span> <span
  m='741430'>has</span> <span m='741650'>no</span> <span
  m='741820'>constraints</span> <span m='742450'>over</span> <span
  m='742710'>the</span> <span m='742790'>number</span> <span
  m='743020'>of</span> <span m='743110'>edges</span> <span
  m='743600'>that</span> <span m='744941'>it</span> <span
  m='745390'>incorporates.</span> </p><p><span m='746750'>And</span> <span
  m='747040'>so,</span> <span m='747290'>by</span> <span
  m='747460'>definition,</span> <span m='748130'>the</span> <span
  m='748220'>shortest</span> <span m='748570'>way</span> <span
  m='748730'>of</span> <span m='748820'>getting</span> <span
  m='749020'>from</span> <span m='749090'>s</span> <span m='749300'>to</span>
  <span m='749410'>v</span> <span m='749830'>is</span> <span
  m='749970'>either</span> <span m='750250'>some</span> <span
  m='750450'>direct</span> <span m='750820'>way.</span> <span
  m='751140'>Maybe</span> <span m='751330'>there's</span> <span
  m='751490'>a</span> <span m='751580'>single</span> <span
  m='751880'>edge.</span> <span m='752460'>Or</span> <span m='753370'>it</span>
  <span m='753580'>may</span> <span m='754030'>go</span> <span
  m='754250'>through</span> <span m='755240'>this</span> <span
  m='755500'>vertex,</span> <span m='755870'>u.</span> <span
  m='756660'>All</span> <span m='756740'>right?</span> <span
  m='757110'>So</span> <span m='757200'>that's</span> <span
  m='757410'>the</span> <span m='757500'>triangle</span> <span
  m='757880'>inequality.</span> </p><p></p><p><span m='759890'>Notice</span>
  <span m='760240'>that,</span> <span m='760990'>what</span> <span
  m='761180'>I</span> <span m='761240'>have</span> <span m='761470'>here,</span>
  <span m='762790'>is</span> <span m='763720'>something</span> <span
  m='764160'>where</span> <span m='767430'>going</span> <span
  m='767740'>from</span> <span m='767970'>s, to a,</span> <span
  m='768790'>to</span> <span m='768970'>b</span> <span m='769820'>is</span>
  <span m='770000'>actually</span> <span m='770670'>shorter</span> <span
  m='771300'>than</span> <span m='771460'>going</span> <span
  m='771760'>from</span> <span m='772050'>s</span> <span m='772310'>to</span>
  <span m='772410'>b.</span> <span m='773230'>But</span> <span
  m='773390'>these</span> <span m='773560'>are</span> <span
  m='773630'>single</span> <span m='773990'>edges</span> <span
  m='774230'>we're</span> <span m='774370'>talking</span> <span
  m='774640'>about.</span> <span m='775020'>These</span> <span m='775170'>are
  weights</span> <span m='775470'>we're</span> <span m='775680'>talking</span>
  <span m='775940'>about.</span> </p><p><span m='776220'>And</span> <span
  m='776300'>there's</span> <span m='776440'>no</span> <span
  m='776550'>contradiction</span> <span m='777150'>here</span> <span
  m='777880'>because</span> <span m='778040'>all</span> <span
  m='778550'>this</span> <span m='778780'>says</span> <span m='778940'>is</span>
  <span m='779200'>that,</span> <span m='780860'>what</span> <span
  m='781000'>I</span> <span m='781040'>want</span> <span m='781400'>to</span>
  <span m='781500'>see</span> <span m='781610'>here</span> <span
  m='781930'>is</span> <span m='782790'>delta</span> <span m='784080'>s</span>
  <span m='784453'>comma b</span> <span m='785460'>is</span> <span
  m='785640'>going</span> <span m='785810'>to</span> <span m='785860'>be</span>
  <span m='786040'>2.</span> <span m='787470'>OK?</span> <span
  m='788840'>Initially,</span> <span m='789320'>I</span> <span m='789350'>may
  be</span> <span m='789580'>starting</span> <span m='789900'>out</span> <span
  m='790100'>with</span> <span m='790250'>infinity</span> <span
  m='790750'>and</span> <span m='790890'>3</span> <span m='791310'>for</span>
  <span m='791460'>the</span> <span m='791580'>d values.</span> <span
  m='792900'>But</span> <span m='793120'>the</span> <span
  m='793210'>delta</span> <span m='793610'>value,</span> <span
  m='794320'>which</span> <span m='794480'>is</span> <span m='794550'>the</span>
  <span m='794600'>shortest</span> <span m='794990'>way</span> <span
  m='795160'>of</span> <span m='795260'>getting</span> <span
  m='795540'>to</span> <span m='795600'>b,</span> <span
  m='795850'>happens</span> <span m='796170'>to</span> <span
  m='796230'>go</span> <span m='796390'>through</span> <span
  m='796630'>a.</span> </p><p><span m='797510'>And</span> <span
  m='797670'>so,</span> <span m='797790'>if</span> <span m='797850'>you</span>
  <span m='797910'>use</span> <span m='798190'>that,</span> <span
  m='798710'>then</span> <span m='799190'>the</span> <span
  m='799290'>triangle</span> <span m='799650'>inequality</span> <span
  m='800150'>makes</span> <span m='800360'>sense.</span> <span
  m='801060'>So</span> <span m='801180'>don't</span> <span m='801360'>get</span>
  <span m='801490'>confused</span> <span m='802610'>when</span> <span
  m='802810'>you</span> <span m='803340'>see</span> <span
  m='803560'>pictures</span> <span m='803940'>like</span> <span
  m='804180'>this,</span> <span m='804910'>where</span> <span
  m='805110'>the</span> <span m='805250'>weights</span> <span
  m='805730'>don't</span> <span m='808230'>obey</span> <span
  m='808520'>the</span> <span m='808640'>triangle</span> <span
  m='809020'>inequality.</span> <span m='810040'>The</span> <span
  m='810120'>triangle</span> <span m='810420'>inequality</span> <span
  m='811160'>has</span> <span m='811420'>to</span> <span m='811510'>do</span>
  <span m='811660'>with</span> <span m='811790'>the</span> <span
  m='811860'>shortest</span> <span m='812390'>paths,</span> <span
  m='813270'>not</span> <span m='813680'>the</span> <span
  m='813860'>single</span> <span m='814240'>edge ways.</span> <span
  m='815270'>OK?</span> </p><p></p><p><span m='818410'>So,</span> <span
  m='819390'>that's</span> <span m='819610'>half</span> <span
  m='819840'>the</span> <span m='819890'>proof</span> <span
  m='820150'>here.</span> <span m='822320'>What</span> <span
  m='822530'>I've</span> <span m='822600'>done</span> <span m='822800'>is</span>
  <span m='823030'>assumed</span> <span m='823440'>that</span> <span
  m='824420'>d of u</span> <span m='825000'>is</span> <span
  m='825170'>correct.</span> <span m='826790'>And</span> <span
  m='827240'>I've</span> <span m='827380'>used</span> <span
  m='827980'>the</span> <span m='828140'>triangle</span> <span
  m='828550'>inequality.</span> <span m='830060'>And</span> <span
  m='830170'>I've</span> <span m='830210'>just</span> <span
  m='830390'>written</span> <span m='830580'>this</span> <span
  m='830750'>down.</span> <span m='831680'>Now,</span> <span
  m='833710'>someone</span> <span m='836180'>do</span> <span
  m='836320'>the</span> <span m='836500'>last</span> <span
  m='836810'>step,</span> <span m='837150'>or</span> <span m='837240'>the</span>
  <span m='837350'>second</span> <span m='837630'>to</span> <span
  m='837690'>last</span> <span m='837940'>step,</span> <span
  m='838200'>of</span> <span m='838360'>this</span> <span
  m='839060'>proof.</span> <span m='839880'>Anybody?</span> </p><p><span
  m='843100'>What</span> <span m='843280'>can</span> <span m='843400'>I</span>
  <span m='843460'>say</span> <span m='843700'>now,</span> <span
  m='844710'>given</span> <span m='844960'>that</span> <span
  m='845120'>what</span> <span m='845300'>I</span> <span m='845340'>have</span>
  <span m='845550'>here.</span> <span m='845800'>Look</span> <span
  m='845970'>at</span> <span m='846050'>these</span> <span m='846280'>two</span>
  <span m='846450'>values.</span> <span m='849080'>What</span> <span
  m='849300'>can I</span> <span m='849410'>say</span> <span
  m='849610'>about</span> <span m='849840'>these</span> <span
  m='850010'>values?</span> <span m='852620'>How can</span> <span
  m='853020'>I</span> <span m='853470'>prove</span> <span m='853770'>what</span>
  <span m='853880'>I</span> <span m='853920'>want</span> <span
  m='854110'>to</span> <span m='854170'>prove,</span> <span m='854520'>which
  is,</span> <span m='856870'>basically,</span> <span m='857860'>delta</span>
  <span m='858125'>of</span> <span m='858390'>s</span> <span
  m='858590'>comma</span> <span m='858860'>v</span> <span
  m='859050'>should</span> <span m='859240'>be</span> <span
  m='859370'>less</span> <span m='859620'>than</span> <span m='859750'>or</span>
  <span m='859900'>equal</span> <span m='860190'>to</span> <span
  m='860340'>d</span> <span m='860700'>of</span> <span m='861030'>v?</span>
  <span m='861560'>OK.</span> <span m='862190'>That's</span> <span
  m='862520'>what</span> <span m='862630'>I</span> <span m='862660'>want</span>
  <span m='862810'>to</span> <span m='862850'>show.</span> </p><p><span
  m='864680'>I've</span> <span m='864830'>just</span> <span
  m='865030'>written</span> <span m='865250'>another</span> <span
  m='865530'>way</span> <span m='865670'>here.</span> <span
  m='866780'>How</span> <span m='866860'>do</span> <span m='866930'>I</span>
  <span m='867000'>do</span> <span m='867120'>that?</span> <span
  m='870954'>Anyone?</span> <span m='876380'>What</span> <span
  m='876610'>can</span> <span m='876730'>I</span> <span
  m='876840'>substitute</span> <span m='878850'>for--</span> <span
  m='881650'>there's</span> <span m='882280'>a</span> <span
  m='882350'>less</span> <span m='882570'>than</span> <span
  m='882740'>operator,</span> <span m='885810'>which</span> <span
  m='885930'>means</span> <span m='886200'>that</span> <span m='886700'>I</span>
  <span m='886820'>can</span> <span m='886950'>replace</span> <span
  m='887470'>things</span> <span m='887800'>over</span> <span
  m='888020'>here.</span> <span m='888830'>Yeah.</span> </p><p><span
  m='889635'>AUDIENCE: If you,</span> <span m='891120'>like,</span> <span
  m='891615'>you have a</span> <span m='892110'>[INAUDIBLE]?</span> </p><p><span
  m='893100'>PROFESSOR: Ah.</span> <span m='893600'>Excellent.</span> <span
  m='894010'>So</span> <span m='894160'>the</span> <span m='894260'>first</span>
  <span m='894490'>thing</span> <span m='894660'>is,</span> <span
  m='894870'>I</span> <span m='894950'>could</span> <span m='895090'>put</span>
  <span m='895280'>d</span> <span m='895450'>of</span> <span m='895570'>u</span>
  <span m='895760'>over</span> <span m='895940'>here,</span> <span
  m='897020'>right?</span> <span m='899260'>Less</span> <span
  m='899530'>than</span> <span m='899680'>or</span> <span
  m='899780'>equal</span> <span m='900100'>to</span> <span m='902900'>d
  of</span> <span m='903050'>u.</span> <span m='904150'>And</span> <span
  m='904410'>the</span> <span m='904470'>reason</span> <span m='904700'>I</span>
  <span m='904760'>can</span> <span m='904900'>do</span> <span
  m='905010'>that</span> <span m='905750'>is</span> <span
  m='905950'>because</span> <span m='906350'>d</span> <span m='906490'>of</span>
  <span m='906600'>u</span> <span m='906770'>is</span> <span
  m='906920'>greater</span> <span m='907180'>then</span> <span
  m='908150'>delta</span> <span m='908480'>s</span> <span
  m='908750'>comma</span> <span m='908960'>u.</span> </p><p><span
  m='909540'>So</span> <span m='909700'>that's</span> <span
  m='909930'>cool,</span> <span m='910890'>right?</span> <span
  m='913070'>Sorry,</span> <span m='913280'>delta.</span> <span
  m='913690'>Thank</span> <span m='913880'>you.</span> <span
  m='914680'>Delta</span> <span m='914960'>s comma</span> <span
  m='915430'>u.</span> <span m='915900'>Thank</span> <span
  m='916050'>you.</span> <span m='916960'>And</span> <span m='917400'>so,</span>
  <span m='917480'>that's</span> <span m='917650'>what</span> <span
  m='917770'>I</span> <span m='917820'>got</span> <span m='918000'>here.</span>
  <span m='918630'>What</span> <span m='918780'>else?</span> <span
  m='920060'>Yeah?</span> </p><p><span m='920540'>AUDIENCE: You replace
  delta</span> <span m='921020'>u, v</span> <span m='921500'>with</span> <span
  m='921980'>w</span> <span m='922460'>u, v.</span> </p><p><span
  m='924155'>PROFESSOR: I can</span> <span m='924410'>replace</span> <span
  m='924690'>delta</span> <span m='924870'>u,</span> <span m='924980'>v</span>
  <span m='925130'>with</span> <span m='925420'>w,</span> <span
  m='925705'>u,</span> <span m='925990'>v.</span> <span
  m='926190'>Exactly</span> <span m='926670'>right.</span> <span
  m='928710'>Exactly</span> <span m='929250'>right.</span> <span
  m='929720'>Great.</span> <span m='930320'>That</span> <span
  m='930650'>deserves</span> <span m='930990'>a</span> <span
  m='931040'>cushion.</span> <span m='931560'>I</span> <span
  m='931700'>think</span> <span m='931810'>you</span> <span
  m='931910'>already</span> <span m='932110'>have</span> <span
  m='932280'>one.</span> <span m='933420'>Yep.</span> <span m='935260'>Oh,
  man.</span> <span m='935540'>I</span> <span m='935880'>should</span> <span
  m='936020'>have</span> <span m='936550'>not--</span> <span
  m='937040'>so</span> <span m='937160'>you</span> <span m='937280'>get</span>
  <span m='937450'>that</span> <span m='937690'>because</span> <span
  m='937900'>I</span> <span m='937990'>messed</span> <span m='938310'>up.</span>
  </p><p><span m='939030'>Seems</span> <span m='939220'>like</span> <span
  m='939370'>you</span> <span m='939440'>need</span> <span m='939550'>to</span>
  <span m='939610'>get--</span> <span m='940180'>whoa.</span> <span
  m='940930'>Hey.</span> <span m='941510'>OK.</span> <span m='942590'>You</span>
  <span m='942740'>get</span> <span m='942890'>one</span> <span
  m='943110'>because</span> <span m='943340'>I</span> <span
  m='943400'>hit</span> <span m='943600'>you</span> <span m='943720'>on</span>
  <span m='943830'>the</span> <span m='943900'>head.</span> <span
  m='944270'>All</span> <span m='944750'>right.</span> <span
  m='945240'>And</span> <span m='945370'>this</span> <span
  m='945530'>time,</span> <span m='945910'>I'll  just</span> <span
  m='946000'>save.</span> <span m='946440'>I'm</span> <span
  m='946730'>running</span> <span m='946930'>out of cushions</span> <span
  m='947420'>here.</span> <span m='947710'>But</span> <span
  m='948350'>I've</span> <span m='948480'>got</span> <span
  m='948650'>some</span> <span m='948800'>in</span> <span m='948880'>my</span>
  <span m='948970'>office.</span> <span m='951890'>All</span> <span
  m='952020'>right.</span> </p><p><span m='952710'>So</span> <span
  m='952830'>that's it.</span> <span m='953270'>That's</span> <span
  m='953710'>the</span> <span m='953800'>proof.</span> <span
  m='954860'>OK?</span> <span m='956290'>Fairly</span> <span
  m='956620'>straightforward.</span> <span m='959860'>You</span> <span
  m='961020'>get</span> <span m='961210'>to</span> <span m='961280'>the</span>
  <span m='961380'>point</span> <span m='961730'>where</span> <span
  m='963860'>you</span> <span m='964040'>want</span> <span m='964290'>to</span>
  <span m='964500'>apply</span> <span m='964830'>the</span> <span
  m='964930'>triangle</span> <span m='965310'>inequality.</span> <span
  m='967000'>You</span> <span m='967430'>simply</span> <span
  m='967830'>look</span> <span m='968080'>at</span> <span m='968260'>each</span>
  <span m='968530'>of</span> <span m='968660'>these</span> <span
  m='969890'>terms</span> <span m='970780'>and,</span> <span
  m='971650'>by</span> <span m='971850'>induction</span> <span
  m='972990'>hypothesis,</span> <span m='974700'>you</span> <span
  m='974810'>could</span> <span m='974910'>put</span> <span
  m='975060'>d,u</span> <span m='975330'>here.</span> </p><p><span
  m='976350'>And,</span> <span m='976770'>I just</span> <span
  m='977190'>talked</span> <span m='977470'>about</span> <span
  m='977980'>the</span> <span m='978070'>weights,</span> <span
  m='978500'>and</span> <span m='978630'>so</span> <span m='978770'>on,</span>
  <span m='978900'>and</span> <span m='978990'>so</span> <span
  m='979140'>forth.</span> <span m='980480'>And</span> <span
  m='980560'>you</span> <span m='980650'>know</span> <span
  m='980860'>that</span> <span m='981080'>w u,v,</span> <span
  m='982530'>which</span> <span m='982760'>is</span> <span m='982900'>a</span>
  <span m='983010'>direct</span> <span m='983460'>way, a</span> <span
  m='983800'>single</span> <span m='984350'>edge</span> <span
  m='984670'>way,</span> <span m='985420'>of</span> <span
  m='985610'>getting</span> <span m='986750'>to</span> <span m='988660'>a</span>
  <span m='988810'>node,</span> <span m='989640'>has</span> <span
  m='989990'>to</span> <span m='990100'>be</span> <span
  m='991960'>greater</span> <span m='992410'>than</span> <span
  m='992540'>the</span> <span m='992620'>shortest</span> <span
  m='992960'>path.</span> <span m='993550'>Like</span> <span
  m='993720'>here,</span> <span m='994130'>this</span> <span m='994350'>3</span>
  <span m='994620'>value</span> <span m='995520'>is</span> <span
  m='995730'>a</span> <span m='995800'>direct</span> <span m='996100'>way</span>
  <span m='996290'>of</span> <span m='996380'>getting</span> <span
  m='996590'>from</span> <span m='996800'>s</span> <span m='997030'>to</span>
  <span m='997150'>b.</span> </p><p><span m='998520'>And,</span> <span
  m='998780'>in</span> <span m='998840'>this</span> <span
  m='999000'>case,</span> <span m='999220'>it's</span> <span
  m='1000310'>greater</span> <span m='1000640'>than</span> <span
  m='1000800'>the</span> <span m='1000870'>shortest</span> <span
  m='1001210'>path,</span> <span m='1001520'>which</span> <span
  m='1001660'>is</span> <span m='1001760'>of</span> <span
  m='1001810'>length</span> <span m='1002090'>2.</span> <span
  m='1002770'>But</span> <span m='1002970'>it</span> <span
  m='1003050'>can</span> <span m='1003170'>never</span> <span
  m='1003390'>be</span> <span m='1003530'>smaller</span> <span
  m='1004240'>than</span> <span m='1004350'>the</span> <span
  m='1004410'>shortest</span> <span m='1004740'>path.</span> <span
  m='1005710'>And</span> <span m='1005990'>so,</span> <span
  m='1006570'>once</span> <span m='1006800'>we</span> <span
  m='1006890'>have</span> <span m='1007090'>that</span> <span
  m='1007230'>here,</span> <span m='1008310'>we</span> <span
  m='1008460'>can</span> <span m='1010350'>essentially</span> <span
  m='1010800'>say,</span> <span m='1011250'>we</span> <span
  m='1011360'>know</span> <span m='1011510'>that</span> <span
  m='1012050'>delta</span> <span m='1012370'>s,</span> <span
  m='1012630'>v</span> <span m='1012950'>is</span> <span m='1013080'>less than
  or equal</span> <span m='1013580'>to</span> <span m='1013700'>d u</span> <span
  m='1014040'>plus</span> <span m='1014210'>d v.</span> </p><p><span
  m='1015010'>Which</span> <span m='1015150'>implies,</span> <span
  m='1015660'>of</span> <span m='1015770'>course,</span> <span m='1016170'>that
  this</span> <span m='1016520'>is</span> <span m='1016710'>simply--</span>
  <span m='1017530'>once</span> <span m='1017750'>we are</span> <span
  m='1017870'>done</span> <span m='1018100'>with</span> <span
  m='1018230'>the</span> <span m='1018320'>relaxation</span> <span
  m='1018900'>step--</span> <span m='1019790'>that</span> <span
  m='1020040'>equals</span> <span m='1020470'>d v.</span> <span
  m='1021600'>This</span> <span m='1021780'>part</span> <span
  m='1022060'>here</span> <span m='1024480'>equals</span> <span m='1024869'>d
  v.</span> <span m='1025950'>OK?</span> <span m='1027630'>That's</span> <span
  m='1027810'>how</span> <span m='1027900'>that</span> <span
  m='1028050'>works.</span> <span m='1029440'>So</span> <span
  m='1029589'>that's</span> <span m='1029790'>good</span> <span
  m='1029920'>news.</span> </p><p><span m='1031150'>We</span> <span
  m='1031200'>have</span> <span m='1032589'>a</span> <span
  m='1032650'>relaxation</span> <span m='1033300'>algorithm</span> <span
  m='1033790'>that</span> <span m='1034099'>is</span> <span
  m='1034260'>safe.</span> <span m='1035290'>We</span> <span
  m='1035349'>can</span> <span m='1035440'>now</span> <span
  m='1035730'>arbitrarily,</span> <span m='1036460'>and</span> <span
  m='1036560'>we'll</span> <span m='1036650'>do</span> <span
  m='1036800'>this</span> <span m='1037140'>for</span> <span
  m='1038319'>all</span> <span m='1038520'>of</span> <span
  m='1038640'>algorithms</span> <span m='1039069'>we</span> <span
  m='1039180'>look</span> <span m='1039359'>at,</span> <span
  m='1039530'>really.</span> <span m='1041520'>At</span> <span
  m='1041619'>least</span> <span m='1041810'>in</span> <span
  m='1042060'>006,</span> <span m='1042450'>for</span> <span
  m='1042849'>shortest</span> <span m='1043069'>paths.</span> <span
  m='1043980'>Which</span> <span m='1045270'>applies</span> <span
  m='1045609'>some</span> <span m='1045810'>sequence</span> <span
  m='1046190'>of</span> <span m='1046290'>relaxations.</span> <span
  m='1047560'>And,</span> <span m='1048099'>depending</span> <span
  m='1048410'>on</span> <span m='1049790'>the</span> <span
  m='1050150'>special</span> <span m='1050580'>case</span> <span
  m='1050930'>of</span> <span m='1051030'>the</span> <span
  m='1051100'>problem,</span> <span m='1052050'>we're</span> <span
  m='1052180'>going</span> <span m='1052290'>to</span> <span
  m='1052330'>apply</span> <span m='1052570'>these</span> <span
  m='1052760'>things</span> <span m='1052970'>in</span> <span
  m='1053060'>different</span> <span m='1053350'>ways</span> <span
  m='1053640'>to</span> <span m='1053730'>get</span> <span
  m='1054280'>the</span> <span m='1054340'>most</span> <span
  m='1054700'>efficient</span> <span m='1055170'>algorithm.</span> <span
  m='1056310'>All right?</span> </p><p><span m='1057200'>So,</span> <span
  m='1057480'>we</span> <span m='1057590'>can</span> <span
  m='1057710'>now</span> <span m='1057890'>do</span> <span
  m='1058060'>algorithms.</span> <span m='1060890'>Let's</span> <span
  m='1061170'>look</span> <span m='1061380'>at</span> <span
  m='1062970'>DAGs</span> <span m='1063430'>first.</span> <span
  m='1073670'>So,</span> <span m='1073840'>DAG</span> <span
  m='1074180'>stands</span> <span m='1074550'>for</span> <span
  m='1075100'>Directed</span> <span m='1076120'>Acyclic</span> <span
  m='1077180'>Graphs.</span> <span m='1078390'>So</span> <span
  m='1079090'>that</span> <span m='1079310'>means</span> <span
  m='1080290'>we</span> <span m='1080450'>can't</span> <span
  m='1080790'>have</span> <span m='1087900'>cycles.</span> <span
  m='1088430'>So</span> <span m='1088460'>we</span> <span
  m='1088560'>can't</span> <span m='1088760'>have</span> <span
  m='1088910'>negative</span> <span m='1089230'>cycles.</span> </p><p><span
  m='1090310'>So</span> <span m='1090680'>that's</span> <span
  m='1090910'>why</span> <span m='1091110'>this</span> <span
  m='1091290'>is</span> <span m='1091420'>an</span> <span
  m='1091520'>interesting</span> <span m='1091940'>special</span> <span
  m='1092320'>case.</span> <span m='1093410'>It</span> <span
  m='1093540'>makes</span> <span m='1093780'>things</span> <span
  m='1093990'>a</span> <span m='1094040'>little</span> <span
  m='1094160'>bit</span> <span m='1094300'>easier</span> <span
  m='1094660'>for</span> <span m='1094850'>us</span> <span
  m='1095470'>because</span> <span m='1095670'>we</span> <span
  m='1095740'>don't</span> <span m='1095900'>have</span> <span
  m='1096000'>to</span> <span m='1096080'>worry</span> <span
  m='1096300'>about</span> <span m='1096500'>negative</span> <span
  m='1096780'>cycles.</span> <span m='1098390'>We're</span> <span
  m='1098640'>actually</span> <span m='1098970'>going</span> <span
  m='1099100'>to</span> <span m='1099170'>look</span> <span
  m='1099350'>at</span> <span m='1099490'>DAGs</span> <span
  m='1100280'>that</span> <span m='1100440'>have</span> <span
  m='1100720'>negative</span> <span m='1101230'>edges</span> <span
  m='1101670'>in</span> <span m='1101820'>them.</span> <span
  m='1102275'>All</span> <span m='1102550'>right?</span> </p><p><span
  m='1102820'>So,</span> <span m='1102920'>we're</span> <span
  m='1102990'>allowed</span> <span m='1103310'>to</span> <span
  m='1103400'>have</span> <span m='1103600'>negative</span> <span
  m='1103980'>edges</span> <span m='1104820'>in</span> <span
  m='1104960'>these</span> <span m='1105180'>DAGs.</span> <span
  m='1106090'>But</span> <span m='1106520'>we</span> <span
  m='1106650'>don't</span> <span m='1106830'>have</span> <span
  m='1106980'>negative</span> <span m='1107250'>cycles.</span> <span
  m='1107730'>And,</span> <span m='1107840'>as</span> <span m='1107950'>I</span>
  <span m='1108020'>said</span> <span m='1108240'>last</span> <span
  m='1108490'>time,</span> <span m='1109070'>it's</span> <span
  m='1109190'>not</span> <span m='1109340'>the</span> <span
  m='1109410'>negative</span> <span m='1109730'>edges</span> <span
  m='1110090'>that</span> <span m='1110230'>cause</span> <span
  m='1110450'>a</span> <span m='1110520'>problem.</span> <span
  m='1110950'>If</span> <span m='1111030'>you</span> <span
  m='1111130'>only</span> <span m='1111280'>go</span> <span
  m='1111440'>through</span> <span m='1112150'>at</span> <span
  m='1112300'>negative</span> <span m='1112630'>edge</span> <span
  m='1112880'>once,</span> <span m='1114280'>you</span> <span
  m='1114410'>can</span> <span m='1114500'>just</span> <span
  m='1114640'>subtract</span> <span m='1115100'>that</span> <span
  m='1115260'>value.</span> <span m='1115640'>And</span> <span m='1115810'>it's
  cool.</span> </p><p><span m='1116910'>It's</span> <span
  m='1117060'>only</span> <span m='1117290'>when</span> <span
  m='1117450'>you</span> <span m='1117600'>get</span> <span
  m='1117990'>into</span> <span m='1118220'>a</span> <span
  m='1118300'>situation</span> <span m='1118960'>where</span> <span
  m='1120010'>you're</span> <span m='1120230'>going</span> <span
  m='1120440'>through</span> <span m='1120580'>a</span> <span
  m='1120630'>negative</span> <span m='1120940'>edge,</span> <span
  m='1121370'>a</span> <span m='1121610'>negative</span> <span
  m='1121910'>cycle.</span> <span m='1122360'>And</span> <span
  m='1122440'>you</span> <span m='1122530'>can</span> <span
  m='1122620'>just</span> <span m='1123080'>iterate</span> <span
  m='1123300'>through</span> <span m='1123740'>them</span> <span
  m='1124520'>to</span> <span m='1124590'>get</span> <span m='1124740'>to</span>
  <span m='1124800'>minus</span> <span m='1125090'>infinity.</span> <span
  m='1125960'>And</span> <span m='1126090'>you</span> <span
  m='1126170'>have</span> <span m='1126310'>an</span> <span
  m='1126420'>indeterminate</span> <span m='1127140'>shortest</span> <span
  m='1127490'>path</span> <span m='1127770'>value.</span> </p><p><span
  m='1129840'>So</span> <span m='1132390'>the</span> <span
  m='1132500'>way</span> <span m='1132630'>this</span> <span
  m='1132780'>is</span> <span m='1132860'>going</span> <span
  m='1132990'>to</span> <span m='1133060'>work--</span> <span
  m='1133940'>if</span> <span m='1134050'>you</span> <span
  m='1134190'>ever</span> <span m='1134320'>have</span> <span
  m='1134550'>a</span> <span m='1134610'>DAG,</span> <span m='1134900'>by
  the</span> <span m='1135160'>way,</span> <span m='1135510'>the</span> <span
  m='1135800'>first</span> <span m='1136150'>thing</span> <span
  m='1136260'>you</span> <span m='1136340'>want</span> <span
  m='1136460'>to</span> <span m='1136510'>try--</span> <span
  m='1136820'>and</span> <span m='1136970'>this</span> <span
  m='1137100'>is</span> <span m='1137180'>certainly true</span> <span
  m='1137600'>in</span> <span m='1137710'>your</span> <span
  m='1137830'>problem</span> <span m='1138120'>set--</span> <span
  m='1138820'>when</span> <span m='1138930'>there's</span> <span
  m='1139080'>a</span> <span m='1139140'>question,</span> <span
  m='1139850'>try</span> <span m='1140070'>to</span> <span
  m='1140190'>topologically</span> <span m='1140870'>sort it.</span> <span
  m='1141840'>OK?</span> <span m='1142430'>It's</span> <span
  m='1142740'>a</span> <span m='1143060'>fine</span> <span
  m='1143560'>hammer</span> <span m='1143960'>to</span> <span
  m='1144040'>use,</span> <span m='1144430'>when</span> <span
  m='1144550'>you</span> <span m='1144640'>have</span> <span
  m='1144800'>a</span> <span m='1144870'>DAG.</span> </p><p><span
  m='1145550'>And</span> <span m='1147880'>it's</span> <span
  m='1148130'>not</span> <span m='1148420'>an</span> <span
  m='1148490'>exception</span> <span m='1149520'>here.</span> <span
  m='1151690'>To</span> <span m='1152150'>do</span> <span
  m='1152400'>shortest</span> <span m='1152760'>paths,</span> <span
  m='1153280'>we're</span> <span m='1153380'>going</span> <span
  m='1153500'>to</span> <span m='1153550'>topologically</span> <span
  m='1154470'>sort</span> <span m='1154900'>the</span> <span
  m='1155000'>DAG.</span> <span m='1157760'>And</span> <span
  m='1159412'>the</span> <span m='1159890'>path</span> <span
  m='1160380'>from</span> <span m='1163160'>u</span> <span m='1163460'>to</span>
  <span m='1163570'>v</span> <span m='1166770'>implies</span> <span
  m='1171210'>that</span> <span m='1172380'>u</span> <span m='1172770'>is</span>
  <span m='1173010'>before</span> <span m='1173330'>v</span> <span
  m='1176790'>in</span> <span m='1176970'>the</span> <span
  m='1177060'>ordering.</span> </p><p><span m='1181820'>And,</span> <span
  m='1182160'>once</span> <span m='1182360'>you</span> <span
  m='1182450'>do</span> <span m='1182580'>that,</span> <span
  m='1183280'>you</span> <span m='1183390'>have</span> <span
  m='1183540'>this</span> <span m='1183670'>linear. And</span> <span
  m='1184060'>I'll</span> <span m='1184190'>show</span> <span
  m='1184330'>you</span> <span m='1184440'>an</span> <span
  m='1184490'>example.</span> <span m='1184900'>You</span> <span
  m='1184960'>have</span> <span m='1185100'>this</span> <span
  m='1185220'>linear</span> <span m='1185530'>ordering.</span> <span
  m='1186510'>And</span> <span m='1186680'>we're</span> <span
  m='1186760'>just</span> <span m='1186930'>going</span> <span
  m='1187040'>to</span> <span m='1187100'>go</span> <span
  m='1187310'>through,</span> <span m='1188470'>in</span> <span
  m='1188670'>order,</span> <span m='1189080'>from</span> <span
  m='1189300'>left</span> <span m='1189560'>to</span> <span
  m='1189670'>right,</span> <span m='1190150'>relaxing</span> <span
  m='1190660'>these</span> <span m='1190860'>edges.</span> <span
  m='1191630'>And</span> <span m='1191790'>we're</span> <span
  m='1191880'>going</span> <span m='1191980'>to</span> <span
  m='1192020'>get</span> <span m='1192190'>our</span> <span
  m='1192290'>shortest</span> <span m='1192620'>paths</span> <span
  m='1192880'>for</span> <span m='1193060'>all</span> <span
  m='1193180'>the</span> <span m='1193250'>vertices.</span> </p><p><span
  m='1195240'>So,</span> <span m='1196120'>the</span> <span
  m='1196240'>second</span> <span m='1196540'>and</span> <span
  m='1196630'>last</span> <span m='1196890'>step</span> <span
  m='1197160'>is,</span> <span m='1197680'>one</span> <span
  m='1198070'>pass,</span> <span m='1198770'>left</span> <span
  m='1199060'>to</span> <span m='1199130'>right,</span> <span
  m='1201080'>over</span> <span m='1203440'>the</span> <span
  m='1203520'>vertices,</span> <span m='1205580'>in</span> <span
  m='1205760'>topologically</span> <span m='1206660'>sorted</span> <span
  m='1207030'>order.</span> <span m='1217000'>And</span> <span
  m='1217150'>we're</span> <span m='1217230'>going</span> <span
  m='1217360'>to</span> <span m='1217440'>relax</span> <span
  m='1219330'>each</span> <span m='1219740'>edge</span> <span
  m='1220310'>that</span> <span m='1220570'>leaves</span> <span
  m='1221070'>the</span> <span m='1221200'>particular</span> <span
  m='1221570'>vertex</span> <span m='1221980'>we are</span> <span
  m='1222150'>trying</span> <span m='1222330'>to</span> <span
  m='1222390'>process</span> <span m='1222830'>right</span> <span
  m='1223030'>now.</span> <span m='1232940'>And</span> <span
  m='1233180'>so,</span> <span m='1233400'>we</span> <span
  m='1233510'>know</span> <span m='1234100'>topological</span> <span
  m='1234590'>sorting</span> <span m='1234940'>is</span> <span
  m='1235850'>order</span> <span m='1236140'>v</span> <span
  m='1236320'>plus</span> <span m='1236530'>e,</span> <span
  m='1236990'>includes</span> <span m='1237400'>depth-first</span> <span
  m='1237880'>search.</span> </p><p><span m='1238660'>And</span> <span
  m='1238840'>this</span> <span m='1239040'>pass over</span> <span
  m='1239540'>the</span> <span m='1239630'>vertices,</span> <span
  m='1240160'>you're</span> <span m='1240310'>touching</span> <span
  m='1240650'>each</span> <span m='1240810'>vertex.</span> <span
  m='1241460'>And</span> <span m='1241600'>you're</span> <span
  m='1241760'>touching</span> <span m='1242610'>every</span> <span
  m='1242920'>edge</span> <span m='1243300'>a</span> <span
  m='1243380'>constant</span> <span m='1243750'>number</span> <span
  m='1243960'>of</span> <span m='1244030'>times.</span> <span
  m='1244490'>In</span> <span m='1244580'>this</span> <span
  m='1244740'>case,</span> <span m='1245000'>once.</span> <span
  m='1245970'>So</span> <span m='1246170'>this</span> <span
  m='1246950'>is</span> <span m='1247190'>our</span> <span
  m='1247330'>first</span> <span m='1249120'>special</span> <span
  m='1249560'>case</span> <span m='1251330'>shortest</span> <span
  m='1251720'>path</span> <span m='1251970'>algorithm.</span> <span
  m='1253180'>And</span> <span m='1253460'>that</span> <span
  m='1253650'>takes</span> <span m='1253960'>order</span> <span
  m='1254260'>v</span> <span m='1254410'>plus e</span> <span
  m='1254760'>time.</span> </p><p><span m='1255920'>All</span> <span
  m='1255990'>right?</span> <span m='1257010'>Why</span> <span
  m='1257290'>does</span> <span m='1257400'>this</span> <span
  m='1257560'>work?</span> <span m='1258570'>And</span> <span
  m='1259720'>just</span> <span m='1259890'>one</span> <span
  m='1260180'>little</span> <span m='1264360'>interesting</span> <span
  m='1265690'>aspect</span> <span m='1266150'>of</span> <span
  m='1266240'>this,</span> <span m='1266630'>which</span> <span
  m='1266740'>is</span> <span m='1267610'>related</span> <span
  m='1267970'>to</span> <span m='1268540'>a</span> <span m='1268660'>DAG.</span>
  <span m='1269570'>And</span> <span m='1270150'>the</span> <span
  m='1270270'>relationship</span> <span m='1270880'>between</span> <span
  m='1272330'>the</span> <span m='1272420'>DAG</span> <span
  m='1272910'>and</span> <span m='1273200'>the</span> <span
  m='1273300'>particular</span> <span m='1274240'>starting</span> <span
  m='1274810'>vertex</span> <span m='1275010'>that</span> <span
  m='1275490'>we're</span> <span m='1275590'>going</span> <span
  m='1275730'>to</span> <span m='1275770'>be</span> <span
  m='1275890'>looking</span> <span m='1276210'>at.</span> </p><p><span
  m='1277230'>So,</span> <span m='1278900'>this</span> <span
  m='1279100'>is</span> <span m='1279210'>an</span> <span
  m='1279290'>example.</span> <span m='1280500'>Suppose</span> <span
  m='1280740'>I</span> <span m='1280820'>have</span> <span m='1281000'>a</span>
  <span m='1281070'>DAG</span> <span m='1281380'>like</span> <span
  m='1281630'>this.</span> <span m='1283570'>And</span> <span
  m='1284050'>I</span> <span m='1284170'>marked</span> <span
  m='1284630'>this</span> <span m='1284870'>vertex</span> <span
  m='1285420'>as</span> <span m='1285750'>s.</span> <span m='1286720'>And</span>
  <span m='1286840'>I</span> <span m='1286880'>want</span> <span
  m='1287060'>to</span> <span m='1287130'>find</span> <span
  m='1287750'>the</span> <span m='1287830'>shortest</span> <span
  m='1288290'>path</span> <span m='1289040'>from</span> <span
  m='1289520'>s</span> <span m='1290020'>to</span> <span
  m='1290140'>these</span> <span m='1290350'>other</span> <span
  m='1290590'>nodes</span> <span m='1290980'>that</span> <span
  m='1291110'>are</span> <span m='1291270'>a</span> <span m='1291430'>and</span>
  <span m='1291630'>b.</span> </p><p><span m='1293330'>Well,</span> <span
  m='1294390'>they</span> <span m='1294480'>don't</span> <span
  m='1294630'>exist,</span> <span m='1295890'>right?</span> <span
  m='1296280'>So,</span> <span m='1296550'>in</span> <span
  m='1296650'>this</span> <span m='1296830'>case,</span> <span
  m='1298670'>I'm</span> <span m='1298820'>going</span> <span
  m='1298950'>to</span> <span m='1298990'>have</span> <span m='1299360'>a</span>
  <span m='1299840'>shortest</span> <span m='1300170'>path</span> <span
  m='1300400'>to</span> <span m='1300520'>a</span> <span
  m='1300720'>being</span> <span m='1300990'>infinity</span> <span
  m='1301260'>and</span> <span m='1301530'>shortest</span> <span
  m='1301920'>path</span> <span m='1302120'>to</span> <span m='1302210'>b</span>
  <span m='1302410'>being</span> <span m='1302620'>infinity.</span> <span
  m='1303710'>And</span> <span m='1303860'>this</span> <span
  m='1304330'>is</span> <span m='1304640'>a</span> <span
  m='1304730'>trivial</span> <span m='1305040'>example.</span> </p><p><span
  m='1306080'>So,</span> <span m='1306220'>this</span> <span
  m='1306410'>algorithm</span> <span m='1306790'>is</span> <span
  m='1306910'>general.</span> <span m='1308330'>It</span> <span
  m='1308480'>doesn't</span> <span m='1308820'>say</span> <span
  m='1308920'>anything</span> <span m='1309260'>about</span> <span
  m='1309520'>what</span> <span m='1309880'>the</span> <span
  m='1309980'>starting</span> <span m='1310550'>vertex</span> <span
  m='1311160'>is.</span> <span m='1312140'>Right?</span> <span
  m='1312230'>It</span> <span m='1312400'>should</span> <span
  m='1312530'>work</span> <span m='1312810'>for</span> <span
  m='1313040'>any</span> <span m='1313330'>choice</span> <span
  m='1313800'>of</span> <span m='1313890'>starting</span> <span
  m='1314250'>vertex.</span> </p><p><span m='1315300'>The</span> <span
  m='1315410'>nice</span> <span m='1315640'>thing</span> <span
  m='1315830'>is</span> <span m='1315950'>that</span> <span
  m='1316940'>you</span> <span m='1317140'>can</span> <span
  m='1318540'>do</span> <span m='1318740'>the</span> <span
  m='1318870'>topological</span> <span m='1319500'>sort.</span> <span
  m='1320530'>And</span> <span m='1320720'>then</span> <span
  m='1320980'>you</span> <span m='1321120'>can</span> <span
  m='1321410'>commit</span> <span m='1323140'>to</span> <span
  m='1323540'>what</span> <span m='1323780'>the</span> <span
  m='1323850'>starting</span> <span m='1324370'>vertex</span> <span
  m='1324800'>is.</span> <span m='1325460'>And</span> <span
  m='1325660'>you</span> <span m='1325760'>can</span> <span
  m='1325860'>go</span> <span m='1325980'>off,</span> <span
  m='1326220'>and</span> <span m='1326310'>you</span> <span
  m='1326390'>can</span> <span m='1326490'>say,</span> <span
  m='1327010'>from</span> <span m='1327420'>this</span> <span
  m='1327700'>starting</span> <span m='1328040'>vertex,</span> <span
  m='1328890'>I'm</span> <span m='1329050'>going</span> <span
  m='1329220'>to</span> <span m='1329290'>go</span> <span m='1330000'>and</span>
  <span m='1330410'>compute</span> <span m='1330780'>the</span> <span
  m='1330860'>shortest</span> <span m='1331190'>paths</span> <span
  m='1331600'>to</span> <span m='1332920'>the other</span> <span
  m='1333000'>vertices</span> <span m='1333490'>that</span> <span
  m='1333610'>I</span> <span m='1333660'>can</span> <span
  m='1333810'>actually</span> <span m='1334220'>reach.</span> <span
  m='1335340'>OK?</span> </p><p><span m='1336050'>So</span> <span
  m='1336260'>let's</span> <span m='1336460'>say</span> <span
  m='1336610'>that</span> <span m='1336840'>you</span> <span
  m='1336950'>had</span> <span m='1337260'>a DAG</span> <span
  m='1337610'>that</span> <span m='1337770'>looks</span> <span
  m='1337920'>like</span> <span m='1338120'>this.</span> <span m='1339640'>All
  right,</span> <span m='1339770'>once</span> <span m='1340040'>you've</span>
  <span m='1340150'>topologically</span> <span m='1340770'>sorted</span> <span
  m='1341150'>it,</span> <span m='1341640'>you</span> <span
  m='1341720'>can</span> <span m='1341820'>always</span> <span
  m='1342070'>draw</span> <span m='1342290'>a</span> <span
  m='1342340'>DAG</span> <span m='1344070'>in</span> <span
  m='1344300'>linear</span> <span m='1346140'>form.</span> <span
  m='1347220'>That's</span> <span m='1347400'>a</span> <span
  m='1347440'>nice</span> <span m='1347690'>thing.</span> <span
  m='1358270'>I'm</span> <span m='1358390'>going</span> <span
  m='1358490'>to</span> <span m='1358540'>put</span> <span
  m='1358770'>edge</span> <span m='1358960'>weights</span> <span
  m='1359230'>down</span> <span m='1359480'>in</span> <span m='1359570'>a</span>
  <span m='1359610'>minute.</span> </p><p><span m='1368410'>All</span> <span
  m='1368500'>right.</span> <span m='1368650'>So</span> <span
  m='1368750'>that's</span> <span m='1368970'>my</span> <span
  m='1369170'>DAG.</span> <span m='1372880'>Let's see.</span> <span
  m='1373380'>5,</span> <span m='1373880'>3,</span> <span m='1375380'>2,</span>
  <span m='1376380'>6,</span> <span m='1377830'>7,</span> <span
  m='1379180'>4,</span> <span m='1380080'>2,</span> <span
  m='1381660'>minus</span> <span m='1382110'>1,</span> <span
  m='1383280'>minus</span> <span m='1383760'>2.</span> <span
  m='1387970'>So</span> <span m='1388200'>that's</span> <span
  m='1388420'>my</span> <span m='1388540'>DAG.</span> <span
  m='1389240'>And</span> <span m='1389480'>I've</span> <span
  m='1389700'>drawn</span> <span m='1390120'>it</span> <span m='1390390'>in
  topologically</span> <span m='1391170'>sorted</span> <span
  m='1391570'>form.</span> <span m='1392840'>And</span> <span
  m='1392970'>I</span> <span m='1393030'>go</span> <span m='1393190'>left</span>
  <span m='1393420'>to</span> <span m='1393520'>right.</span> </p><p><span
  m='1394300'>Now,</span> <span m='1394440'>let's</span> <span
  m='1394630'>say</span> <span m='1394790'>that,</span> <span
  m='1395150'>at</span> <span m='1395270'>this</span> <span
  m='1395430'>point,</span> <span m='1396400'>I</span> <span
  m='1396540'>get</span> <span m='1396770'>to</span> <span
  m='1397910'>step</span> <span m='1398290'>two.</span> <span
  m='1399080'>And</span> <span m='1399450'>I</span> <span
  m='1399480'>want</span> <span m='1399620'>to</span> <span
  m='1399660'>find</span> <span m='1399950'>shortest</span> <span
  m='1400280'>paths.</span> <span m='1400810'>Now, I have</span> <span
  m='1401040'>to</span> <span m='1401100'>say,</span> <span
  m='1401940'>what</span> <span m='1402010'>is</span> <span
  m='1402090'>my</span> <span m='1402240'>source?</span> </p><p><span
  m='1403490'>And,</span> <span m='1405620'>if</span> <span m='1405850'>I</span>
  <span m='1405940'>just</span> <span m='1406120'>happen</span> <span
  m='1406800'>to</span> <span m='1406940'>have</span> <span
  m='1407230'>this</span> <span m='1407460'>as</span> <span
  m='1407570'>my</span> <span m='1407730'>source,</span> <span
  m='1408850'>well,</span> <span m='1409220'>there's</span> <span
  m='1409380'>nothing</span> <span m='1409640'>to</span> <span
  m='1409710'>do</span> <span m='1409850'>here.</span> <span
  m='1411160'>There's</span> <span m='1411320'>no</span> <span
  m='1411480'>edges</span> <span m='1411850'>that</span> <span
  m='1412030'>go</span> <span m='1412200'>out</span> <span m='1412380'>of</span>
  <span m='1412510'>this.</span> <span m='1413440'>And</span> <span
  m='1413600'>so</span> <span m='1413730'>that</span> <span
  m='1413870'>means</span> <span m='1414150'>that</span> <span
  m='1414410'>everything</span> <span m='1414860'>to</span> <span
  m='1414950'>the</span> <span m='1415020'>left</span> <span
  m='1415320'>of</span> <span m='1415430'>me</span> <span m='1416510'>is</span>
  <span m='1416670'>infinity.</span> <span m='1417930'>OK?</span> </p><p><span
  m='1418740'>So</span> <span m='1419150'>the</span> <span
  m='1419230'>first</span> <span m='1419460'>thing</span> <span m='1419600'>that
  you</span> <span m='1419800'>do</span> <span m='1420060'>is,</span> <span
  m='1420590'>you</span> <span m='1420690'>say,</span> <span
  m='1421490'>find</span> <span m='1421890'>the</span> <span
  m='1421980'>source</span> <span m='1423240'>that</span> <span
  m='1423470'>corresponds</span> <span m='1424180'>to</span> <span
  m='1425240'>the</span> <span m='1425390'>starting</span> <span
  m='1425760'>vertex.</span> <span m='1426790'>And</span> <span
  m='1426940'>let's</span> <span m='1427080'>say,</span> <span
  m='1427280'>this</span> <span m='1427540'>is</span> <span
  m='1427690'>the</span> <span m='1427820'>starting</span> <span
  m='1428150'>vertex,</span> <span m='1428680'>in</span> <span
  m='1428810'>this</span> <span m='1429000'>case.</span> <span m='1430210'>Which
  I'll</span> <span m='1430630'>mark</span> <span m='1431080'>in</span> <span
  m='1431330'>bold.</span> <span m='1433900'>So</span> <span
  m='1434000'>that's</span> <span m='1434220'>my</span> <span
  m='1434350'>starting</span> <span m='1434660'>vertex.</span> </p><p><span
  m='1435120'>I'll</span> <span m='1435230'>take</span> <span
  m='1435370'>a</span> <span m='1435420'>nontrivial</span> <span
  m='1435930'>case.</span> <span m='1437060'>And</span> <span
  m='1437200'>everything</span> <span m='1437660'>to</span> <span
  m='1437740'>the</span> <span m='1437860'>left</span> <span
  m='1439130'>is</span> <span m='1439420'>going</span> <span
  m='1439570'>to</span> <span m='1439610'>get</span> <span
  m='1439770'>marked</span> <span m='1440130'>with</span> <span
  m='1440390'>infinity.</span> <span m='1442980'>And</span> <span
  m='1443140'>now,</span> <span m='1443320'>I've</span> <span
  m='1443440'>got</span> <span m='1443540'>to</span> <span m='1443580'>do</span>
  <span m='1443690'>some</span> <span m='1443850'>work</span> <span
  m='1444610'>on</span> <span m='1445530'>relaxation.</span> </p><p><span
  m='1447020'>And</span> <span m='1447190'>I'm</span> <span
  m='1447530'>not</span> <span m='1447810'>going</span> <span
  m='1447930'>to</span> <span m='1447970'>get</span> <span
  m='1448430'>the</span> <span m='1448520'>shortest</span> <span
  m='1448880'>path</span> <span m='1449450'>instantly</span> <span
  m='1450080'>for</span> <span m='1450350'>a</span> <span
  m='1450410'>particular</span> <span m='1452360'>vertex,</span> <span
  m='1452780'>once</span> <span m='1453080'>I</span> <span
  m='1453140'>get</span> <span m='1453430'>to</span> <span
  m='1453570'>it,</span> <span m='1454220'>because</span> <span
  m='1454460'>there</span> <span m='1454530'>may</span> <span
  m='1454650'>be</span> <span m='1454770'>better</span> <span
  m='1455040'>ways</span> <span m='1455410'>of</span> <span
  m='1455530'>getting</span> <span m='1455760'>there.</span> <span
  m='1456250'>And</span> <span m='1456370'>especially</span> <span
  m='1456750'>if</span> <span m='1456850'>I</span> <span m='1456930'>have</span>
  <span m='1457050'>negative</span> <span m='1457390'>edges.</span> <span
  m='1458350'>And</span> <span m='1458500'>that's</span> <span
  m='1458670'>certainly</span> <span m='1458950'>possible,</span> <span
  m='1459380'>that</span> <span m='1459520'>a</span> <span
  m='1459580'>longer</span> <span m='1460600'>length</span> <span
  m='1461010'>path</span> <span m='1461970'>is</span> <span
  m='1462220'>going</span> <span m='1462390'>to</span> <span
  m='1462450'>be</span> <span m='1462840'>the</span> <span
  m='1462940'>shortest</span> <span m='1463300'>path.</span> </p><p><span
  m='1464230'>But</span> <span m='1464450'>what</span> <span
  m='1464580'>I'll</span> <span m='1464660'>do</span> <span
  m='1465000'>is</span> <span m='1466410'>take</span> <span
  m='1466660'>s.</span> <span m='1467020'>And</span> <span
  m='1467130'>I'm</span> <span m='1467200'>going</span> <span
  m='1467320'>to</span> <span m='1467410'>relax</span> <span
  m='1468040'>edges</span> <span m='1468560'>that</span> <span
  m='1469010'>emanate</span> <span m='1469450'>from</span> <span
  m='1469670'>s.</span> <span m='1470610'>And</span> <span
  m='1470830'>so,</span> <span m='1470950'>step</span> <span
  m='1471690'>one,</span> <span m='1471945'>all</span> <span
  m='1472200'>of</span> <span m='1472270'>these</span> <span
  m='1472470'>are</span> <span m='1472520'>going</span> <span
  m='1472620'>to</span> <span m='1472660'>be</span> <span
  m='1472770'>infinity</span> <span m='1473240'>to</span> <span
  m='1473330'>start</span> <span m='1473630'>with.</span> <span
  m='1474350'>So</span> <span m='1474590'>everything</span> <span
  m='1474930'>is</span> <span m='1475010'>infinity.</span> <span
  m='1475910'>The</span> <span m='1476010'>ones</span> <span
  m='1476230'>to</span> <span m='1476320'>the</span> <span
  m='1476430'>left</span> <span m='1476780'>stay</span> <span
  m='1476930'>infinity.</span> <span m='1477780'>The</span> <span
  m='1477870'>ones</span> <span m='1478110'>to</span> <span
  m='1478200'>the</span> <span m='1478320'>right</span> <span
  m='1478980'>are</span> <span m='1479100'>going</span> <span
  m='1479220'>to</span> <span m='1479260'>be</span> <span
  m='1479390'>reachable.</span> </p><p><span m='1480500'>And</span> <span
  m='1481550'>you're</span> <span m='1481720'>going</span> <span
  m='1481850'>to</span> <span m='1484920'>update</span> <span
  m='1485300'>those</span> <span m='1485490'>values.</span> <span
  m='1487110'>And</span> <span m='1487340'>so,</span> <span
  m='1487810'>when</span> <span m='1487940'>you</span> <span
  m='1488140'>go</span> <span m='1488840'>like</span> <span
  m='1489100'>so,</span> <span m='1489410'>this</span> <span
  m='1489660'>becomes</span> <span m='1490060'>2.</span> <span
  m='1491230'>This</span> <span m='1491440'>becomes</span> <span
  m='1491800'>6.</span> <span m='1492970'>As</span> <span m='1493120'>I</span>
  <span m='1493180'>follow</span> <span m='1493580'>that.</span> <span
  m='1494350'>And</span> <span m='1495620'>I'm</span> <span
  m='1495770'>done</span> <span m='1496580'>with</span> <span
  m='1496860'>this</span> <span m='1497020'>vertex,</span> <span
  m='1497500'>s.</span> <span m='1498940'>And</span> <span
  m='1499070'>this</span> <span m='1499200'>is</span> <span
  m='1499270'>what</span> <span m='1499450'>I</span> <span
  m='1499510'>have.</span> <span m='1500160'>2</span> <span
  m='1500380'>and</span> <span m='1500500'>6.</span> </p><p><span
  m='1501310'>So</span> <span m='1502180'>the</span> <span
  m='1502290'>next</span> <span m='1502480'>step</span> <span
  m='1502740'>is</span> <span m='1502860'>to</span> <span m='1502970'>get</span>
  <span m='1503290'>to</span> <span m='1503790'>this</span> <span
  m='1504030'>vertex.</span> <span m='1504560'>Let's</span> <span
  m='1504640'>call</span> <span m='1504850'>that</span> <span
  m='1505190'>the</span> <span m='1505290'>vertex</span> <span
  m='1505820'>a.</span> <span m='1506770'>And</span> <span
  m='1507300'>I'm</span> <span m='1507410'>going</span> <span
  m='1507510'>relax</span> <span m='1507620'>the</span> <span
  m='1508020'>edges</span> <span m='1508330'>going</span> <span
  m='1508600'>out</span> <span m='1508780'>of</span> <span m='1508860'>a.</span>
  <span m='1509900'>And, when</span> <span m='1510310'>I</span> <span
  m='1510370'>go</span> <span m='1510620'>out</span> <span m='1510770'>of</span>
  <span m='1510900'>a,</span> <span m='1511185'>I</span> <span
  m='1511470'>get</span> <span m='1513880'>2</span> <span
  m='1514040'>plus</span> <span m='1514250'>7</span> <span m='1514560'>is</span>
  <span m='1514860'>9,</span> <span m='1515540'>which</span> <span
  m='1515770'>is</span> <span m='1516170'>greater</span> <span
  m='1516440'>than</span> <span m='1516620'>6.</span> <span
  m='1517010'>So</span> <span m='1517110'>there's</span> <span
  m='1517290'>no</span> <span m='1517400'>reason</span> <span
  m='1517670'>to</span> <span m='1517730'>update</span> <span
  m='1518070'>that.</span> </p><p><span m='1519260'>2</span> <span
  m='1519500'>plus</span> <span m='1519770'>4</span> <span m='1520740'>is</span>
  <span m='1521160'>less</span> <span m='1521410'>than</span> <span
  m='1521540'>infinity.</span> <span m='1522840'>And</span> <span
  m='1523110'>so,</span> <span m='1523730'>that's</span> <span
  m='1524010'>6.</span> <span m='1526750'>2</span> <span m='1527030'>plus</span>
  <span m='1527480'>2</span> <span m='1528510'>gives</span> <span
  m='1528840'>me</span> <span m='1529110'>4</span> <span
  m='1529610'>here.</span> <span m='1531140'>And</span> <span
  m='1531510'>so</span> <span m='1531650'>on</span> <span m='1531800'>and</span>
  <span m='1531890'>so</span> <span m='1532040'>forth.</span> </p><p><span
  m='1532740'>So</span> <span m='1532790'>then, now</span> <span
  m='1532940'>I'm</span> <span m='1533150'>done</span> <span
  m='1533360'>with</span> <span m='1533570'>vertex</span> <span
  m='1534000'>a.</span> <span m='1534710'>If</span> <span
  m='1534850'>this</span> <span m='1535020'>vertex</span> <span
  m='1535450'>is</span> <span m='1535620'>b,</span> <span
  m='1536720'>then</span> <span m='1537150'>I</span> <span
  m='1537300'>have</span> <span m='1537530'>a</span> <span
  m='1537580'>value</span> <span m='1537920'>of</span> <span
  m='1538160'>6</span> <span m='1538550'>for</span> <span
  m='1538710'>this.</span> <span m='1539020'>And</span> <span
  m='1539170'>6</span> <span m='1539600'>minus</span> <span m='1539940'>1</span>
  <span m='1540750'>is</span> <span m='1541470'>less</span> <span
  m='1541740'>than</span> <span m='1541890'>6.</span> <span
  m='1542255'>So</span> <span m='1542620'>this</span> <span
  m='1542850'>becomes</span> <span m='1543260'>5.</span> <span
  m='1544810'>And</span> <span m='1545630'>5</span> <span
  m='1545950'>minus</span> <span m='1546310'>2--</span> <span
  m='1546530'>well,</span> <span m='1546890'>that's</span> <span
  m='1547050'>the</span> <span m='1547120'>next</span> <span
  m='1547300'>step</span> <span m='1547500'>after</span> <span
  m='1547680'>that.</span> <span m='1549930'>I  haven't</span> <span
  m='1550250'>put--</span> <span m='1550750'>this</span> <span
  m='1550920'>is</span> <span m='1551040'>a</span> <span m='1551100'>1.</span>
  </p><p><span m='1552630'>And</span> <span m='1552780'>so</span> <span
  m='1552870'>6</span> <span m='1553150'>plus</span> <span m='1553400'>1</span>
  <span m='1553720'>is</span> <span m='1554530'>7.</span> <span
  m='1555730'>But</span> <span m='1555820'>that's</span> <span
  m='1556000'>greater</span> <span m='1556200'>than</span> <span
  m='1556370'>4.</span> <span m='1556800'>So</span> <span m='1557570'>we</span>
  <span m='1557740'>don't have to</span> <span m='1557860'>anything</span> <span
  m='1558110'>there.</span> <span m='1558870'>So</span> <span
  m='1558990'>the</span> <span m='1559080'>final</span> <span
  m='1559400'>values</span> <span m='1559810'>that I</span> <span
  m='1559920'>end</span> <span m='1560140'>up</span> <span
  m='1560270'>getting</span> <span m='1561320'>are</span> <span
  m='1564070'>3</span> <span m='1564510'>for</span> <span
  m='1564660'>this</span> <span m='1564900'>one.</span> <span
  m='1565410'>So</span> <span m='1565530'>this</span> <span
  m='1565680'>is</span> <span m='1565770'>the</span> <span
  m='1566170'>final</span> <span m='1566460'>value.</span> </p><p><span
  m='1567230'>5</span> <span m='1567850'>is</span> <span m='1568320'>the</span>
  <span m='1568440'>final</span> <span m='1568700'>value</span> <span
  m='1569000'>here.</span> <span m='1569840'>6</span> <span
  m='1570240'>is</span> <span m='1570370'>the</span> <span
  m='1570470'>final</span> <span m='1570720'>value</span> <span
  m='1571020'>here.</span> <span m='1572090'>2</span> <span
  m='1572450'>is</span> <span m='1573090'>the</span> <span
  m='1573200'>final</span> <span m='1573460'>value</span> <span
  m='1573700'>here.</span> <span m='1574020'>And</span> <span
  m='1574120'>that</span> <span m='1574250'>one</span> <span
  m='1574410'>is</span> <span m='1574540'>0.</span> <span m='1575650'>And</span>
  <span m='1575800'>this</span> <span m='1575950'>stays</span> <span
  m='1576190'>infinity.</span> <span m='1577460'>OK?</span> <span
  m='1578470'>So</span> <span m='1578660'>fairly</span> <span
  m='1578950'>straightforward.</span> </p><p></p><p><span m='1580680'>Do</span>
  <span m='1580910'>a</span> <span m='1580980'>topological</span> <span
  m='1581520'>sort.</span> <span m='1582560'>Find</span> <span
  m='1582990'>the</span> <span m='1583070'>starting</span> <span
  m='1583400'>point.</span> <span m='1584180'>And</span> <span
  m='1584360'>then</span> <span m='1584720'>run</span> <span
  m='1585180'>all</span> <span m='1585360'>the</span> <span
  m='1585420'>way</span> <span m='1585530'>to</span> <span
  m='1585590'>the</span> <span m='1585710'>right.</span> <span
  m='1587130'>Interestingly,</span> <span m='1588220'>this</span> <span
  m='1588620'>is</span> <span m='1588770'>actually</span> <span
  m='1589130'>a</span> <span m='1589530'>really</span> <span
  m='1589780'>simple</span> <span m='1590100'>example</span> <span
  m='1590580'>of</span> <span m='1590820'>dynamic</span> <span
  m='1591320'>programming,</span> <span m='1592190'>which</span> <span
  m='1592360'>we'll</span> <span m='1592520'>talk</span> <span
  m='1592710'>about</span> <span m='1593150'>in</span> <span
  m='1593380'>gory</span> <span m='1593730'>detail,</span> <span
  m='1594600'>later</span> <span m='1594880'>in</span> <span
  m='1595010'>November.</span> </p><p><span m='1596460'>But</span> <span
  m='1597870'>what</span> <span m='1598040'>I</span> <span
  m='1598090'>have</span> <span m='1598300'>here</span> <span
  m='1599170'>is</span> <span m='1600310'>the</span> <span
  m='1602640'>simplest</span> <span m='1602970'>special</span> <span
  m='1603310'>case</span> <span m='1604250'>of</span> <span m='1605650'>a</span>
  <span m='1605750'>graph</span> <span m='1606210'>that</span> <span
  m='1606340'>has</span> <span m='1606750'>an</span> <span
  m='1606920'>order</span> <span m='1607190'>of v e</span> <span
  m='1607960'>[INAUDIBLE]</span> <span m='1608160'>shortest</span> <span
  m='1608510'>path</span> <span m='1608750'>algorithm.</span> <span
  m='1609430'>And</span> <span m='1609550'>the</span> <span
  m='1609610'>reason</span> <span m='1609840'>for</span> <span
  m='1609950'>that</span> <span m='1610200'>is</span> <span
  m='1610630'>we</span> <span m='1610740'>don't</span> <span
  m='1610870'>have</span> <span m='1610990'>cycles.</span> <span m='1612120'>All
  right?</span> <span m='1613150'>Any</span> <span m='1613310'>questions</span>
  <span m='1613590'>about</span> <span m='1613790'>this?</span> <span
  m='1615220'>People</span> <span m='1615440'>buy</span> <span
  m='1615590'>this?</span> <span m='1617630'>It</span> <span
  m='1617720'>works?</span> <span m='1618450'>OK.</span> </p><p><span
  m='1619370'>So,</span> <span m='1619440'>we've</span> <span
  m='1619530'>got</span> <span m='1619710'>one</span> <span
  m='1620510'>algorithm</span> <span m='1620980'>under</span> <span
  m='1621280'>our</span> <span m='1621340'>belt.</span> <span
  m='1622260'>And</span> <span m='1622620'>we</span> <span
  m='1622720'>look</span> <span m='1622950'>at,</span> <span
  m='1623830'>really,</span> <span m='1624060'>a</span> <span
  m='1624100'>more</span> <span m='1624330'>interesting</span> <span
  m='1624690'>case</span> <span m='1625080'>because</span> <span
  m='1625280'>most</span> <span m='1625540'>graphs</span> <span
  m='1626390'>are</span> <span m='1626520'>going</span> <span
  m='1626640'>to</span> <span m='1626680'>have</span> <span
  m='1626830'>cycles</span> <span m='1627250'>in</span> <span
  m='1627380'>them.</span> <span m='1628380'>But</span> <span m='1629400'>we
  will</span> <span m='1629630'>stay</span> <span m='1630990'>with</span> <span
  m='1631310'>the</span> <span m='1631430'>special</span> <span
  m='1631770'>case</span> <span m='1632090'>of</span> <span
  m='1632230'>no</span> <span m='1632430'>negative</span> <span
  m='1632790'>edges,</span> <span m='1633140'>now.</span> <span m='1633720'>All
  right?</span> </p><p><span m='1633840'>So</span> <span
  m='1634010'>Dijkstra's</span> <span m='1634420'>algorithm</span> <span
  m='1635420'>doesn't</span> <span m='1635700'>work</span> <span
  m='1636580'>for</span> <span m='1637150'>negative</span> <span
  m='1637540'>edges.</span> <span m='1638720'>So</span> <span
  m='1638750'>it's</span> <span m='1639050'>different.</span> <span
  m='1640070'>This</span> <span m='1640750'>algorithm</span> <span
  m='1641110'>is</span> <span m='1641240'>not</span> <span
  m='1641470'>subsumed</span> <span m='1641970'>by</span> <span
  m='1642150'>Dijkstra.</span> <span m='1643150'>That's</span> <span
  m='1643350'>important</span> <span m='1643690'>to</span> <span
  m='1643740'>understand.</span> <span m='1645100'>So</span> <span
  m='1645230'>Dijkstra's</span> <span m='1645620'>algorithm</span> <span
  m='1645950'>works</span> <span m='1646240'>for</span> <span
  m='1646630'>graphs</span> <span m='1647020'>with</span> <span
  m='1647180'>cycles.</span> <span m='1648340'>But</span> <span
  m='1648790'>all</span> <span m='1649040'>of</span> <span
  m='1649130'>the</span> <span m='1649220'>edge ways</span> <span
  m='1649700'>have</span> <span m='1649890'>to</span> <span
  m='1649950'>be</span> <span m='1650060'>either 0</span> <span
  m='1650260'>or</span> <span m='1650880'>positive.</span> </p><p><span
  m='1652740'>This</span> <span m='1652990'>algorithm</span> <span
  m='1653710'>works</span> <span m='1653960'>for</span> <span
  m='1654090'>DAGs</span> <span m='1654560'>that</span> <span
  m='1654700'>can</span> <span m='1654800'>have</span> <span
  m='1654920'>negative</span> <span m='1655240'>edges.</span> <span
  m='1655740'>But</span> <span m='1655920'>you</span> <span
  m='1656020'>can't</span> <span m='1656180'>have</span> <span
  m='1656310'>cycles.</span> <span m='1657340'>So</span> <span
  m='1657590'>both</span> <span m='1657870'>of</span> <span
  m='1657950'>these</span> <span m='1658170'>algorithms</span> <span
  m='1658620'>have</span> <span m='1659310'>their</span> <span
  m='1659530'>place</span> <span m='1659810'>under</span> <span
  m='1659960'>the</span> <span m='1660090'>sun.</span> </p><p><span
  m='1663330'>So,</span> <span m='1663460'>let's</span> <span
  m='1663620'>take</span> <span m='1663770'>a</span> <span
  m='1663810'>look</span> <span m='1663990'>at</span> <span
  m='1664940'>Dijkstra's</span> <span m='1665390'>algorithm.</span> <span
  m='1666230'>Actually,</span> <span m='1666480'>I</span> <span
  m='1666520'>guess</span> <span m='1666680'>I</span> <span
  m='1666750'>have</span> <span m='1666850'>a</span> <span
  m='1666900'>demo.</span> <span m='1668010'>So,</span> <span
  m='1668510'>the</span> <span m='1669230'>one</span> <span
  m='1669620'>demo</span> <span m='1669930'>we</span> <span m='1670050'>have
  in</span> <span m='1670690'>6006.</span> </p><p><span
  m='1677390'>[INAUDIBLE]</span> <span m='1677930'>Dijkstra</span> <span
  m='1678320'>is</span> <span m='1678420'>a</span> <span m='1678460'>very</span>
  <span m='1678890'>straightforward</span> <span m='1679430'>algorithm.</span>
  <span m='1680460'>It's</span> <span m='1680700'>not</span> <span
  m='1681510'>trivial</span> <span m='1682680'>to</span> <span
  m='1682780'>prove</span> <span m='1683120'>its</span> <span
  m='1683290'>correctness.</span> <span m='1684590'>But</span> <span
  m='1685540'>from</span> <span m='1685810'>a</span> <span
  m='1685910'>standpoint</span> <span m='1686380'>of</span> <span
  m='1686490'>coding,</span> <span m='1687090'>from</span> <span
  m='1687240'>a</span> <span m='1687290'>standpoint</span> <span
  m='1687770'>of</span> <span m='1687890'>understanding</span> <span
  m='1688570'>the</span> <span m='1688680'>flow,</span> <span
  m='1689650'>it's</span> <span m='1689820'>a</span> <span
  m='1689860'>very</span> <span m='1690130'>straightforward</span> <span
  m='1690640'>algorithm.</span> </p><p><span m='1692020'>One</span> <span
  m='1692210'>of</span> <span m='1692260'>the</span> <span
  m='1692330'>reasons</span> <span m='1692650'>why</span> <span
  m='1692890'>that's</span> <span m='1693120'>the</span> <span
  m='1693220'>case</span> <span m='1694060'>is</span> <span
  m='1694250'>because</span> <span m='1694640'>it's</span> <span
  m='1694770'>a</span> <span m='1694860'>greedy</span> <span
  m='1695220'>algorithm.</span> <span m='1697260'>It</span> <span
  m='1697440'>does</span> <span m='1697710'>things</span> <span
  m='1698380'>incrementally,</span> <span m='1700250'>maximizing</span> <span
  m='1701060'>the</span> <span m='1701240'>benefit,</span> <span
  m='1701710'>as</span> <span m='1701820'>you</span> <span
  m='1701940'>will.</span> <span m='1702780'>And</span> <span
  m='1703220'>intuitively</span> <span m='1704150'>builds</span> <span
  m='1704710'>the</span> <span m='1704800'>shortest</span> <span
  m='1705180'>paths.</span> <span m='1706000'>And</span> <span
  m='1706150'>it</span> <span m='1706240'>goes</span> <span
  m='1706460'>vertex</span> <span m='1706900'>by</span> <span
  m='1707020'>vertex.</span> </p><p><span m='1708770'>So</span> <span
  m='1709190'>here's</span> <span m='1709430'>a</span> <span m='1709760'>demo
  of</span> <span m='1710230'>Dijkstra,</span> <span m='1710790'>which,</span>
  <span m='1711410'>the</span> <span m='1711540'>reason</span> <span
  m='1711790'>I</span> <span m='1712280'>want</span> <span m='1712460'>to</span>
  <span m='1712980'>show</span> <span m='1713160'>you</span> <span
  m='1713280'>this,</span> <span m='1713510'>is</span> <span
  m='1713610'>because</span> <span m='1714110'>it</span> <span
  m='1714190'>will</span> <span m='1714260'>give</span> <span
  m='1714380'>you</span> <span m='1714480'>some</span> <span
  m='1714700'>intuition</span> <span m='1715140'>as</span> <span
  m='1715240'>to</span> <span m='1715340'>why</span> <span
  m='1715530'>Dijkstra</span> <span m='1715960'>works.</span> <span
  m='1716753'>Now,</span> <span m='1719590'>some</span> <span
  m='1719790'>points</span> <span m='1720110'>of</span> <span
  m='1720250'>note.</span> <span m='1721040'>I can't</span> <span
  m='1721420'>tilt</span> <span m='1721730'>this</span> <span
  m='1722060'>more</span> <span m='1722270'>than</span> <span
  m='1722410'>about</span> <span m='1722650'>this</span> <span
  m='1722800'>much</span> <span m='1723070'>because</span> <span
  m='1723310'>then</span> <span m='1723440'>these</span> <span
  m='1723590'>balls</span> <span m='1723890'>will</span> <span m='1723990'>fall
  off.</span> <span m='1725150'>So,</span> <span m='1726720'>cameraman,</span>
  <span m='1727240'>can</span> <span m='1727360'>you</span> <span
  m='1727430'>get</span> <span m='1727570'>this?</span> <span
  m='1729240'>All</span> <span m='1729300'>right?</span> <span
  m='1729680'>For</span> <span m='1729870'>posterity.</span> </p><p><span
  m='1732270'>So</span> <span m='1732880'>I</span> <span m='1732970'>got</span>
  <span m='1733130'>an</span> <span m='1733260'>undirected</span> <span
  m='1733960'>graph</span> <span m='1734300'>here,</span> <span
  m='1735210'>right?</span> <span m='1735440'>And</span> <span
  m='1735650'>each</span> <span m='1735830'>of</span> <span
  m='1735920'>these</span> <span m='1736120'>things</span> <span
  m='1736490'>are</span> <span m='1737660'>nodes.</span> <span
  m='1738480'>The</span> <span m='1738820'>balls</span> <span
  m='1739200'>are</span> <span m='1739260'>the</span> <span
  m='1739370'>nodes</span> <span m='1739840'>of</span> <span
  m='1739930'>the</span> <span m='1740020'>vertices.</span> <span
  m='1741200'>And</span> <span m='1741370'>I've</span> <span
  m='1741530'>drawn</span> <span m='1741800'>the</span> <span
  m='1741890'>picture</span> <span m='1742290'>over</span> <span
  m='1742420'>there.</span> <span m='1743010'>And</span> <span
  m='1743200'>G</span> <span m='1743390'>stands</span> <span
  m='1743710'>for</span> <span m='1743830'>green.</span> <span
  m='1744280'>And</span> <span m='1744460'>Y</span> <span
  m='1744660'>stands</span> <span m='1744970'>for</span> <span
  m='1745080'>yellow,</span> <span m='1745390'>et</span> <span
  m='1745490'>cetera.</span> <span m='1746350'>So,</span> <span
  m='1746460'>this</span> <span m='1746810'>graph</span> <span
  m='1747060'>is</span> <span m='1747200'>essentially</span> <span
  m='1747600'>what</span> <span m='1747750'>I</span> <span
  m='1747800'>have</span> <span m='1747990'>up</span> <span
  m='1748130'>there.</span> </p><p><span m='1749080'>And</span> <span
  m='1749750'>I've</span> <span m='1752050'>put</span> <span
  m='1752970'>strings</span> <span m='1753790'>connecting</span> <span
  m='1754300'>these</span> <span m='1754620'>balls,</span> <span
  m='1756000'>associated</span> <span m='1756540'>with</span> <span
  m='1760170'>the</span> <span m='1760290'>weights</span> <span
  m='1760800'>that</span> <span m='1760920'>you</span> <span
  m='1761070'>see</span> <span m='1761240'>up</span> <span
  m='1761370'>there.</span> <span m='1761970'>So,</span> <span
  m='1762690'>if</span> <span m='1762810'>I</span> <span m='1762850'>got</span>
  <span m='1763010'>this</span> <span m='1763150'>right,</span> <span
  m='1764630'>the</span> <span m='1765290'>string</span> <span
  m='1765700'>that's</span> <span m='1765880'>connecting</span> <span
  m='1766940'>the</span> <span m='1767110'>green</span> <span
  m='1767430'>ball</span> <span m='1768340'>to</span> <span
  m='1768420'>the</span> <span m='1768890'>yellow</span> <span
  m='1769190'>ball</span> <span m='1769600'>up</span> <span
  m='1769780'>on</span> <span m='1769920'>top</span> <span m='1770190'>is</span>
  <span m='1770350'>19 centimeters.</span> <span m='1771860'>And</span> <span
  m='1772190'>so</span> <span m='1772310'>on</span> <span m='1772430'>and</span>
  <span m='1772520'>so</span> <span m='1772670'>forth</span> <span
  m='1772900'>for</span> <span m='1773020'>these</span> <span
  m='1773180'>other</span> <span m='1773340'>ones.</span> <span
  m='1773935'>All</span> <span m='1774190'>right?</span> </p><p><span
  m='1775250'>So,</span> <span m='1775980'>that's</span> <span
  m='1776290'>Dijkstra.</span> <span m='1777800'>And</span> <span
  m='1779470'>what</span> <span m='1779640'>do</span> <span
  m='1779680'>you</span> <span m='1779760'>think</span> <span
  m='1780000'>I</span> <span m='1780060'>have</span> <span m='1780250'>to</span>
  <span m='1780380'>do</span> <span m='1781610'>to</span> <span
  m='1781710'>compute</span> <span m='1782090'>shortest</span> <span
  m='1782510'>paths,</span> <span m='1783420'>mechanically</span> <span
  m='1784070'>speaking?</span> <span m='1786500'>What</span> <span
  m='1786640'>do</span> <span m='1786740'>you think I</span> <span
  m='1786850'>have</span> <span m='1787160'>to</span> <span
  m='1787270'>do?</span> <span m='1790248'>Yeah,</span> <span
  m='1790710'>someone.</span> </p><p><span m='1794098'>AUDIENCE: Pick up the
  green</span> <span m='1794576'>ball</span> <span m='1795054'>and just--</span>
  </p><p><span m='1795532'>PROFESSOR: Pick up the ball and</span> <span
  m='1796010'>lift it</span> <span m='1796320'>up.</span> <span
  m='1796630'>That's</span> <span m='1796780'>right.</span> <span
  m='1797140'>Good.</span> <span m='1798020'>It's</span> <span m='1798350'>worth
  a</span> <span m='1798600'>cushion.</span> <span m='1800250'>All</span> <span
  m='1800360'>right,</span> <span m='1800780'>so,</span> <span
  m='1801150'>let's</span> <span m='1801360'>all</span> <span
  m='1801450'>this</span> <span m='1801610'>works.</span> <span
  m='1805760'>So,</span> <span m='1806110'>first,</span> <span m='1807620'>let
  me</span> <span m='1807770'>show</span> <span m='1807930'>you</span> <span
  m='1808100'>by</span> <span m='1808600'>those</span> <span
  m='1808880'>values</span> <span m='1809370'>that</span> <span
  m='1809480'>I</span> <span m='1809520'>have</span> <span
  m='1809740'>there.</span> </p><p><span m='1810720'>If</span> <span
  m='1811040'>the</span> <span m='1811110'>green</span> <span
  m='1812030'>ball</span> <span m='1812460'>is</span> <span
  m='1812740'>the</span> <span m='1814220'>starting</span> <span
  m='1814620'>vertex,</span> <span m='1815590'>then</span> <span
  m='1815730'>the</span> <span m='1815790'>shortest</span> <span
  m='1816220'>path</span> <span m='1817700'>to</span> <span
  m='1817920'>the</span> <span m='1818090'>purple</span> <span
  m='1819210'>vertex,</span> <span m='1819780'>p,</span> <span
  m='1820240'>is</span> <span m='1820420'>7.</span> <span m='1821790'>And</span>
  <span m='1822500'>that's the</span> <span m='1822740'>closest</span> <span
  m='1823140'>node</span> <span m='1823550'>to</span> <span
  m='1823660'>G.</span> <span m='1824530'>And</span> <span
  m='1824690'>then,</span> <span m='1824870'>the</span> <span
  m='1824950'>next</span> <span m='1825200'>closest</span> <span
  m='1825480'>node</span> <span m='1825770'>is</span> <span
  m='1827360'>the</span> <span m='1827610'>blue</span> <span
  m='1827860'>one,</span> <span m='1829050'>which</span> <span
  m='1829320'>is</span> <span m='1829460'>b,</span> <span
  m='1829850'>which</span> <span m='1829980'>is</span> <span
  m='1830110'>12.</span> <span m='1830540'>7</span> <span
  m='1830820'>plus</span> <span m='1831070'>5.</span> <span
  m='1831830'>And</span> <span m='1832010'>so</span> <span m='1832130'>on</span>
  <span m='1832250'>and</span> <span m='1832340'>so</span> <span
  m='1832490'>forth.</span> </p><p><span m='1833210'>And</span> <span
  m='1833360'>so,</span> <span m='1834030'>if</span> <span
  m='1834340'>this</span> <span m='1834640'>all</span> <span
  m='1834780'>works,</span> <span m='1834990'>and</span> <span
  m='1835100'>I</span> <span m='1835180'>haven't</span> <span
  m='1835390'>tried</span> <span m='1835590'>this</span> <span
  m='1835720'>out,</span> <span m='1835890'>because</span> <span
  m='1836110'>this</span> <span m='1836340'>is</span> <span m='1836460'>a</span>
  <span m='1836530'>one</span> <span m='1836780'>use</span> <span
  m='1837140'>demo.</span> <span m='1837930'>Once</span> <span
  m='1838280'>I</span> <span m='1838360'>pull</span> <span
  m='1838540'>this</span> <span m='1838700'>up,</span> <span
  m='1839120'>the</span> <span m='1839350'>strings</span> <span
  m='1839730'>get</span> <span m='1839910'>so</span> <span
  m='1840120'>tangled</span> <span m='1840550'>up,</span> <span
  m='1841780'>it</span> <span m='1841900'>doesn't</span> <span
  m='1842150'>work</span> <span m='1842380'>anymore.</span> <span
  m='1842860'>All right?</span> <span m='1843440'>So</span> <span
  m='1843510'>that's</span> <span m='1843690'>why</span> <span
  m='1843970'>I</span> <span m='1844050'>had</span> <span m='1844190'>to</span>
  <span m='1844250'>do</span> <span m='1844350'>all</span> <span
  m='1844480'>of</span> <span m='1844560'>this,</span> <span
  m='1845380'>lug</span> <span m='1845560'>these</span> <span
  m='1845740'>over.</span> </p><p><span m='1846090'>Otherwise,</span> <span
  m='1846470'>it'd</span> <span m='1846650'>be--</span> <span
  m='1847350'>so</span> <span m='1847450'>this</span> <span
  m='1847540'>is</span> <span m='1847620'>not</span> <span m='1847780'>a</span>
  <span m='1847840'>computer</span> <span m='1848370'>reversible</span> <span
  m='1848940'>kind</span> <span m='1849090'>of</span> <span m='1849150'>thing.
  So,</span> <span m='1849520'>if</span> <span m='1849640'>you</span> <span
  m='1849720'>want</span> <span m='1849840'>to</span> <span
  m='1849920'>code</span> <span m='1850130'>Dijkstra</span> <span
  m='1850680'>up.</span> <span m='1851340'>OK,</span> <span m='1851560'>so
  if</span> <span m='1851730'>I</span> <span m='1851800'>just</span> <span
  m='1851960'>lift</span> <span m='1852180'>it</span> <span
  m='1852270'>up,</span> <span m='1853170'>and</span> <span m='1853310'>if
  I</span> <span m='1853380'>do</span> <span m='1853510'>that,</span> <span
  m='1854670'>and</span> <span m='1854800'>if</span> <span m='1854900'>I</span>
  <span m='1855140'>tilt it</span> <span m='1855550'>in</span> <span
  m='1855620'>the</span> <span m='1855690'>right</span> <span
  m='1855880'>direction.</span> <span m='1856450'>Yeah.</span> <span
  m='1856710'>I</span> <span m='1856790'>want</span> <span m='1856940'>to</span>
  <span m='1857030'>that.</span> </p><p><span m='1857520'>So</span> <span
  m='1857640'>you</span> <span m='1857750'>can</span> <span
  m='1857840'>see</span> <span m='1858050'>that</span> <span
  m='1858220'>this</span> <span m='1858530'>is</span> <span m='1858670'>a</span>
  <span m='1858710'>little</span> <span m='1858810'>bit</span> <span
  m='1858910'>of</span> <span m='1858990'>fudging</span> <span
  m='1859350'>going</span> <span m='1859570'>on</span> <span
  m='1859720'>here,</span> <span m='1860310'>with</span> <span
  m='1860480'>respect</span> <span m='1860760'>to</span> <span
  m='1860830'>getting</span> <span m='1861020'>this</span> <span
  m='1861210'>right.</span> <span m='1861530'>But</span> <span
  m='1861780'>you</span> <span m='1861920'>see</span> <span
  m='1862090'>green</span> <span m='1862370'>is</span> <span
  m='1862470'>up</span> <span m='1862620'>on</span> <span
  m='1862760'>top.</span> <span m='1863300'>And</span> <span
  m='1863480'>what</span> <span m='1863600'>is</span> <span
  m='1863690'>the</span> <span m='1863740'>next</span> <span
  m='1863940'>one</span> <span m='1864100'>you</span> <span
  m='1864170'>see?</span> </p><p><span m='1864490'>AUDIENCE: Purple.</span>
  </p><p><span m='1865010'>PROFESSOR: Purple.</span> <span
  m='1865450'>That's</span> <span m='1865630'>good.</span> <span
  m='1866230'>What's</span> <span m='1866350'>the</span> <span
  m='1866410'>next</span> <span m='1866590'>one</span> <span
  m='1866730'>you</span> <span m='1866820'>see?</span> </p><p><span
  m='1867135'>AUDIENCE: Blue.</span> </p><p><span m='1867450'>PROFESSOR:
  Blue.</span> <span m='1867800'>That's</span> <span m='1868010'>good.</span>
  <span m='1870220'>Y,</span> <span m='1870700'>and</span> <span
  m='1870910'>then</span> <span m='1871180'>R.</span> <span
  m='1872080'>And</span> <span m='1872520'>strings</span> <span
  m='1873000'>that</span> <span m='1873110'>are</span> <span
  m='1873570'>taught,</span> <span m='1874680'>that</span> <span
  m='1874800'>have</span> <span m='1874980'>tension</span> <span
  m='1875450'>in</span> <span m='1875570'>them,</span> <span
  m='1876270'>are</span> <span m='1876440'>the</span> <span
  m='1876570'>predecessor</span> <span m='1877150'>vertices,</span> <span
  m='1878020'>OK?</span> <span m='1878310'>That's</span> <span
  m='1878720'>the</span> <span m='1878810'>pie.</span> <span
  m='1879880'>All</span> <span m='1879990'>right?</span> </p><p><span
  m='1880440'>So, again,</span> <span m='1880960'>I</span> <span
  m='1881290'>computed</span> <span m='1881830'>the</span> <span
  m='1881900'>shortest</span> <span m='1882260'>paths,</span> <span
  m='1883100'>right?</span> <span m='1883350'>Mechanically.</span> <span
  m='1884340'>And,</span> <span m='1885000'>if</span> <span m='1885510'>I</span>
  <span m='1885600'>could</span> <span m='1885870'>have</span> <span
  m='1886250'>a</span> <span m='1886300'>way</span> <span m='1886550'>of</span>
  <span m='1886680'>measuring</span> <span m='1887100'>the</span> <span
  m='1887220'>tension</span> <span m='1887660'>on</span> <span
  m='1887760'>the</span> <span m='1887840'>strings,</span> <span
  m='1888340'>I</span> <span m='1888450'>have</span> <span m='1888670'>my</span>
  <span m='1889330'>pie,</span> <span m='1889910'>my</span> <span
  m='1890240'>predecessor</span> <span m='1890420'>relationship,</span> <span
  m='1891090'>as</span> <span m='1891200'>well.</span> <span
  m='1891420'>All</span> <span m='1891860'>right?</span> </p><p><span
  m='1892060'>Now,</span> <span m='1892300'>let's</span> <span
  m='1892490'>see</span> <span m='1892580'>if</span> <span
  m='1892650'>this</span> <span m='1892800'>works.</span> <span
  m='1893972'>This</span> <span m='1894400'>works,</span> <span
  m='1894670'>right?</span> <span m='1895090'>So,</span> <span
  m='1896340'>if</span> <span m='1896820'>the</span> <span
  m='1896880'>second</span> <span m='1897110'>thing</span> <span
  m='1897230'>doesn't</span> <span m='1897430'>work,</span> <span
  m='1898700'>don't</span> <span m='1898900'>hold</span> <span
  m='1899100'>it</span> <span m='1899150'>against</span> <span
  m='1899500'>me.</span> <span m='1900270'>But,</span> <span
  m='1900620'>let's</span> <span m='1900850'>say</span> <span
  m='1900970'>if</span> <span m='1901080'>I</span> <span m='1901150'>take</span>
  <span m='1901400'>R,</span> <span m='1902220'>and</span> <span
  m='1902360'>I</span> <span m='1902420'>lift</span> <span m='1902660'>it</span>
  <span m='1902750'>up</span> <span m='1902930'>like</span> <span
  m='1903160'>that.</span> <span m='1904950'>Yikes.</span> <span
  m='1906810'>So,</span> <span m='1907180'>R,</span> <span
  m='1907630'>followed</span> <span m='1907930'>by</span> <span
  m='1908160'>Y,</span> <span m='1908680'>followed</span> <span
  m='1908960'>by</span> <span m='1909090'>B,</span> <span
  m='1909500'>followed</span> <span m='1909790'>by</span> <span
  m='1909950'>P,</span> <span m='1910430'>followed</span> <span
  m='1910730'>by</span> <span m='1910870'>G.</span> </p><p><span
  m='1911490'>Hey.</span> <span m='1912820'>Come on.</span> <span
  m='1914560'>All</span> <span m='1914640'>right?</span> <span
  m='1915170'>This</span> <span m='1915470'>works.</span> <span
  m='1915670'>Thank</span> <span m='1915990'>you.</span> <span
  m='1916180'>Thank</span> <span m='1916350'>you.</span> <span m='1917422'>All
  right.</span> <span m='1919290'>So</span> <span m='1921060'>there's</span>
  <span m='1921240'>actually</span> <span m='1921640'>a</span> <span
  m='1923100'>reason</span> <span m='1923490'>why</span> <span
  m='1923810'>I</span> <span m='1924220'>did</span> <span
  m='1924610'>that</span> <span m='1924790'>demo.</span> </p><p><span
  m='1926750'>There's</span> <span m='1927050'>a</span> <span
  m='1927600'>greedy</span> <span m='1927895'>algorithm</span> <span
  m='1928670'>here.</span> <span m='1929600'>And,</span> <span
  m='1929990'>I</span> <span m='1930050'>guess,</span> <span
  m='1930540'>greedy</span> <span m='1930890'>is</span> <span
  m='1931060'>gravity.</span> <span m='1931580'>Right?</span> <span
  m='1931890'>Gravity is</span> <span m='1932420'>greedy.</span> <span
  m='1933830'>So,</span> <span m='1934220'>obviously,</span> <span
  m='1934820'>the</span> <span m='1934970'>reason</span> <span
  m='1935220'>why</span> <span m='1935410'>those</span> <span
  m='1935600'>balls</span> <span m='1936000'>are</span> <span
  m='1936880'>hanging</span> <span m='1937230'>is</span> <span
  m='1937340'>because</span> <span m='1937580'>they</span> <span
  m='1937670'>have</span> <span m='1937820'>weight.</span> <span
  m='1938070'>And</span> <span m='1938160'>they</span> <span
  m='1938240'>have</span> <span m='1938410'>gravity.</span> </p><p><span
  m='1939140'>And</span> <span m='1939250'>you</span> <span
  m='1939310'>can</span> <span m='1939420'>imagine</span> <span
  m='1940100'>that</span> <span m='1940260'>you</span> <span
  m='1940390'>could</span> <span m='1940560'>now--</span> <span
  m='1941310'>people</span> <span m='1941600'>in</span> <span
  m='1941700'>physics.</span> <span m='1942110'>I don't know anybody</span>
  <span m='1942780'>majoring</span> <span m='1943110'>in</span> <span
  m='1943180'>physics.</span> <span m='1943520'>Anyone</span> <span
  m='1943850'>double</span> <span m='1944120'>majoring</span> <span
  m='1944460'>in</span> <span m='1944530'>physics</span> <span
  m='1944900'>or</span> <span m='1944990'>something</span> <span
  m='1945720'>here?</span> <span m='1946300'>All</span> <span
  m='1946450'>right.</span> </p><p><span m='1947980'>So,</span> <span
  m='1948290'>you</span> <span m='1948580'>know</span> <span m='1948710'>your
  Newton's</span> <span m='1949210'>laws</span> <span m='1949460'>of</span>
  <span m='1949530'>mechanics.</span> <span m='1950000'>And</span> <span
  m='1950110'>you</span> <span m='1950170'>know</span> <span
  m='1950280'>about</span> <span m='1950490'>gravity,</span> <span
  m='1951090'>and</span> <span m='1951250'>all</span> <span
  m='1951360'>of</span> <span m='1951440'>that.</span> <span m='1951900'>So you
  can</span> <span m='1952160'>imagine</span> <span m='1952630'>that</span>
  <span m='1953220'>you</span> <span m='1953350'>said,</span> <span
  m='1953740'>you know, the</span> <span m='1953800'>heck</span> <span
  m='1953970'>with</span> <span m='1954100'>all</span> <span
  m='1954350'>this</span> <span m='1954540'>priority</span> <span
  m='1955000'>queue</span> <span m='1955340'>stuff</span> <span
  m='1955720'>in</span> <span m='1955930'>the</span> <span
  m='1956030'>problem</span> <span m='1956320'>set.</span> </p><p><span
  m='1956930'>In</span> <span m='1957130'>the</span> <span
  m='1957420'>algorithm</span> <span m='1957850'>that</span> <span
  m='1957940'>we're</span> <span m='1958040'>going</span> <span
  m='1958150'>to</span> <span m='1958190'>be</span> <span
  m='1958260'>talking</span> <span m='1958510'>about</span> <span
  m='1958750'>for</span> <span m='1958860'>Dijkstra,</span> <span
  m='1959660'>I'm</span> <span m='1959860'>going</span> <span
  m='1960010'>to</span> <span m='1960460'>do</span> <span m='1960640'>a</span>
  <span m='1960720'>kinetic</span> <span m='1961200'>simulation</span> <span
  m='1962420'>of</span> <span m='1962590'>shortest</span> <span
  m='1963180'>paths</span> <span m='1963770'>in</span> <span
  m='1963930'>order</span> <span m='1964100'>to</span> <span
  m='1964170'>get</span> <span m='1965660'>the</span> <span
  m='1965860'>actual</span> <span m='1966270'>values</span> <span
  m='1966710'>of</span> <span m='1966790'>these</span> <span
  m='1966890'>shortest</span> <span m='1967240'>paths.</span> <span
  m='1968020'>OK?</span> <span m='1968290'>Now,</span> <span
  m='1968570'>that</span> <span m='1968720'>would</span> <span
  m='1968860'>be</span> <span m='1969280'>cool.</span> <span
  m='1969790'>But</span> <span m='1969960'>it'd</span> <span
  m='1970060'>be</span> <span m='1970150'>horribly</span> <span
  m='1970510'>slow.</span> </p><p><span m='1971730'>And</span> <span
  m='1972070'>so,</span> <span m='1972630'>the</span> <span
  m='1972780'>Dijkstra</span> <span m='1973030'>algorithm</span> <span
  m='1973480'>we're</span> <span m='1973590'>going</span> <span
  m='1973720'>to</span> <span m='1973760'>be</span> <span
  m='1973850'>talking</span> <span m='1974130'>about</span> <span
  m='1974660'>is</span> <span m='1974860'>going</span> <span
  m='1975050'>to</span> <span m='1975460'>just</span> <span
  m='1975660'>compute</span> <span m='1975990'>the</span> <span
  m='1976070'>steady</span> <span m='1976400'>state,</span> <span
  m='1977470'>corresponding</span> <span m='1977980'>to</span> <span
  m='1978800'>the</span> <span m='1978940'>closest</span> <span
  m='1979470'>vertex</span> <span m='1980690'>that</span> <span
  m='1983160'>is</span> <span m='1983410'>closest</span> <span
  m='1983870'>to</span> <span m='1983970'>G.</span> <span m='1984305'>All</span>
  <span m='1984640'>right?</span> <span m='1984810'>So</span> <span
  m='1984920'>Dijkstra,</span> <span m='1985620'>the</span> <span
  m='1985730'>algorithm,</span> <span m='1986300'>the</span> <span
  m='1986490'>intuition</span> <span m='1986820'>behind</span> <span
  m='1987180'>it,</span> <span m='1987670'>is</span> <span
  m='1987770'>that</span> <span m='1987870'>it's</span> <span
  m='1987970'>going</span> <span m='1988070'>to</span> <span
  m='1988170'>greedily</span> <span m='1988780'>construct</span> <span
  m='1989600'>shortest</span> <span m='1990010'>paths.</span> <span
  m='1990710'>And</span> <span m='1990890'>it's</span> <span
  m='1990990'>going</span> <span m='1991180'>to</span> <span
  m='1991240'>be</span> <span m='1991820'>starting</span> <span
  m='1992220'>with</span> <span m='1992350'>G,</span> <span
  m='1992650'>which</span> <span m='1992790'>is</span> <span
  m='1992890'>your</span> <span m='1993040'>source</span> <span
  m='1993310'>vertex.</span> </p><p><span m='1994110'>And</span> <span
  m='1994240'>then,</span> <span m='1994360'>the</span> <span
  m='1994710'>first</span> <span m='1995040'>thing</span> <span
  m='1995210'>that</span> <span m='1995330'>it's</span> <span
  m='1995440'>going</span> <span m='1995570'>to</span> <span
  m='1995620'>process,</span> <span m='1996190'>and</span> <span
  m='1996320'>find</span> <span m='1996610'>the</span> <span
  m='1996670'>shortest</span> <span m='1997010'>path</span> <span m='1997260'>to
  is</span> <span m='1997650'>going</span> <span m='1997880'>to</span> <span
  m='1997920'>be</span> <span m='1997990'>the</span> <span
  m='1998080'>purple</span> <span m='1998380'>vertex.</span> <span
  m='1999220'>And</span> <span m='1999390'>then</span> <span
  m='1999550'>the</span> <span m='1999640'>blue.</span> <span
  m='2000070'>And</span> <span m='2000160'>then</span> <span
  m='2000300'>the</span> <span m='2000790'>yellow.</span> <span
  m='2001120'>And</span> <span m='2001220'>then</span> <span
  m='2001370'>the</span> <span m='2001470'>red.</span> <span
  m='2002150'>All</span> <span m='2002220'>right?</span> <span
  m='2002440'>So</span> <span m='2002880'>it</span> <span
  m='2002990'>actually</span> <span m='2003260'>mimics,</span> <span
  m='2004030'>to</span> <span m='2004180'>some</span> <span
  m='2004360'>extent,</span> <span m='2005470'>this</span> <span
  m='2006230'>demo.</span> <span m='2006530'>All</span> <span
  m='2007018'>right?</span> </p><p><span m='2009950'>So,</span> <span
  m='2010120'>let's</span> <span m='2010290'>take</span> <span
  m='2010420'>a</span> <span m='2010460'>look</span> <span m='2010610'>at</span>
  <span m='2010960'>the</span> <span m='2011030'>pseudocode</span> <span
  m='2011570'>for</span> <span m='2011660'>Dijkstra.</span> <span
  m='2040090'>So,</span> <span m='2040240'>g</span> <span m='2040440'>is</span>
  <span m='2040520'>your graph.</span> <span m='2041290'>w</span> <span
  m='2041590'>are</span> <span m='2041670'>the</span> <span
  m='2041760'>weights.</span> <span m='2043050'>Small</span> <span
  m='2043380'>s</span> <span m='2043600'>is</span> <span m='2043780'>the</span>
  <span m='2044240'>starting</span> <span m='2044620'>vertex.</span> <span
  m='2046760'>We're</span> <span m='2046820'>going</span> <span
  m='2046910'>to</span> <span m='2046980'>initialize</span> <span
  m='2051949'>g</span> <span m='2052199'>and</span> <span m='2052350'>s,</span>
  <span m='2054120'>which</span> <span m='2054270'>means</span> <span
  m='2054469'>we</span> <span m='2054580'>just</span> <span
  m='2054739'>mark</span> <span m='2056370'>s</span> <span m='2056920'>a</span>
  <span m='2056980'>starting</span> <span m='2057290'>vertex.</span>
  </p><p><span m='2058330'>And</span> <span m='2058550'>we're</span> <span
  m='2058630'>going</span> <span m='2058790'>to</span> <span
  m='2058870'>also</span> <span m='2059199'>have</span> <span
  m='2060449'>this</span> <span m='2060620'>capital</span> <span
  m='2061060'>S,</span> <span m='2062570'>that</span> <span
  m='2062730'>I'll</span> <span m='2062780'>use</span> <span
  m='2063020'>these</span> <span m='2063199'>little</span> <span
  m='2063790'>bars</span> <span m='2065080'>to</span> <span
  m='2065120'>differentiate</span> <span m='2065670'>from</span> <span
  m='2065960'>small s.</span> <span m='2067050'>So</span> <span
  m='2067170'>this</span> <span m='2067340'>is</span> <span m='2067489'>a</span>
  <span m='2067570'>set.</span> <span m='2068199'>Capital</span> <span
  m='2068530'>S</span> <span m='2068710'>is</span> <span m='2068850'>a</span>
  <span m='2068929'>set.</span> <span m='2070880'>And</span> <span
  m='2071320'>we're</span> <span m='2071389'>going</span> <span
  m='2071489'>to</span> <span m='2071530'>initialize</span> <span
  m='2071940'>that</span> <span m='2072139'>to</span> <span
  m='2072239'>null.</span> </p><p><span m='2073590'>And</span> <span
  m='2074159'>there's</span> <span m='2074429'>another</span> <span
  m='2074690'>set</span> <span m='2074989'>called</span> <span
  m='2075250'>Q,</span> <span m='2076170'>which</span> <span
  m='2076630'>is</span> <span m='2076820'>initialized</span> <span
  m='2077469'>to</span> <span m='2078320'>the</span> <span
  m='2078360'>entire</span> <span m='2078710'>set</span> <span
  m='2078889'>of</span> <span m='2078960'>vertices.</span> <span
  m='2080400'>And</span> <span m='2081620'>all</span> <span
  m='2081800'>this</span> <span m='2081929'>means</span> <span
  m='2082190'>is</span> <span m='2082310'>that,</span> <span
  m='2082560'>initially,</span> <span m='2083020'>we</span> <span
  m='2083110'>haven't</span> <span m='2083360'>done</span> <span
  m='2083540'>any</span> <span m='2083710'>processing.</span> <span
  m='2084420'>And</span> <span m='2084540'>we</span> <span
  m='2084639'>don't</span> <span m='2084800'>know</span> <span
  m='2085639'>the</span> <span m='2085719'>shortest</span> <span
  m='2086060'>paths</span> <span m='2086420'>to</span> <span
  m='2086570'>any</span> <span m='2086860'>vertex</span> <span
  m='2089230'>because</span> <span m='2090170'>this</span> <span
  m='2091070'>set</span> <span m='2091310'>of</span> <span
  m='2091380'>vertices</span> <span m='2091800'>is</span> <span
  m='2091960'>null.</span> </p><p><span m='2092860'>And</span> <span
  m='2093080'>Q</span> <span m='2093460'>is</span> <span m='2094370'>the</span>
  <span m='2094480'>set</span> <span m='2094620'>of</span> <span
  m='2094679'>vertices</span> <span m='2095010'>that</span> <span
  m='2095139'>need</span> <span m='2095370'>to</span> <span
  m='2095429'>be</span> <span m='2095550'>processed.</span> <span
  m='2096310'>And,</span> <span m='2096440'>as</span> <span
  m='2096780'>we</span> <span m='2096969'>start</span> <span
  m='2097620'>processing</span> <span m='2098110'>vertices</span> <span
  m='2098570'>from</span> <span m='2098790'>Q,</span> <span
  m='2099560'>we're</span> <span m='2099670'>going</span> <span
  m='2099780'>to</span> <span m='2099820'>move</span> <span
  m='2100090'>them</span> <span m='2100280'>to</span> <span
  m='2100860'>capital</span> <span m='2101310'>S.</span> <span
  m='2101960'>And</span> <span m='2102120'>they're</span> <span
  m='2102250'>going</span> <span m='2102470'>to</span> <span
  m='2102570'>contain</span> <span m='2103540'>the</span> <span
  m='2103690'>set</span> <span m='2103900'>of</span> <span
  m='2103970'>vertices</span> <span m='2104480'>that</span> <span
  m='2104660'>we</span> <span m='2104790'>know</span> <span
  m='2105170'>the</span> <span m='2105290'>shortest</span> <span
  m='2105690'>paths</span> <span m='2106090'>to</span> <span
  m='2107020'>already.</span> </p><p><span m='2108660'>And</span> <span
  m='2108970'>that's</span> <span m='2109170'>the</span> <span
  m='2109370'>invariant</span> <span m='2109780'>in</span> <span
  m='2109870'>this</span> <span m='2110070'>algorithm.</span> <span
  m='2110960'>s</span> <span m='2111370'>is</span> <span
  m='2111550'>going</span> <span m='2111710'>to</span> <span
  m='2111780'>contain</span> <span m='2112670'>the</span> <span
  m='2112780'>set</span> <span m='2112940'>of</span> <span
  m='2113000'>vertices</span> <span m='2113490'>that</span> <span
  m='2113620'>we</span> <span m='2113720'>know</span> <span
  m='2113900'>the</span> <span m='2113990'>shortest</span> <span
  m='2114340'>paths</span> <span m='2114670'>to.</span> <span
  m='2117440'>And</span> <span m='2117710'>so,</span> <span
  m='2117790'>Dijkstra</span> <span m='2118900'>is</span> <span
  m='2120690'>a</span> <span m='2120740'>little</span> <span
  m='2121000'>while</span> <span m='2121350'>loop</span> <span m='2122970'>that
  says,</span> <span m='2123360'>while</span> <span m='2123740'>they're</span>
  <span m='2124130'>vertices</span> <span m='2124740'>that</span> <span
  m='2125850'>need</span> <span m='2126160'>to</span> <span
  m='2126230'>be</span> <span m='2126370'>processed,</span> <span
  m='2128700'>then</span> <span m='2129870'>I'm</span> <span
  m='2130050'>going</span> <span m='2130190'>to</span> <span
  m='2130260'>take</span> <span m='2130620'>u.</span> <span
  m='2132300'>And</span> <span m='2134600'>I'm</span> <span
  m='2134760'>going</span> <span m='2134930'>to</span> <span
  m='2135160'>extract-min</span> <span m='2138430'>from</span> <span
  m='2138880'>Q.</span> </p><p><span m='2146190'>And</span> <span
  m='2146560'>this</span> <span m='2146760'>is</span> <span
  m='2146910'>going</span> <span m='2147110'>to</span> <span
  m='2147230'>delete</span> <span m='2150330'>u</span> <span
  m='2151720'>from</span> <span m='2152040'>Q.</span> <span
  m='2154410'>And</span> <span m='2154610'>this</span> <span
  m='2154810'>initialization--</span> <span m='2158140'>and</span> <span
  m='2158300'>this</span> <span m='2158430'>is</span> <span m='2158520'>a</span>
  <span m='2158590'>small</span> <span m='2158930'>s</span> <span
  m='2159120'>here--</span> <span m='2160290'>is</span> <span
  m='2160500'>going</span> <span m='2160660'>to</span> <span
  m='2160740'>set</span> <span m='2161820'>d</span> <span m='2162160'>of</span>
  <span m='2162300'>s</span> <span m='2163730'>to</span> <span
  m='2163800'>be</span> <span m='2163920'>0.</span> <span
  m='2165240'>That's</span> <span m='2165460'>all</span> <span
  m='2165610'>this</span> <span m='2165750'>initialization</span> <span
  m='2166440'>does.</span> <span m='2167170'>Because</span> <span
  m='2167260'>that's</span> <span m='2167430'>all</span> <span
  m='2167540'>we</span> <span m='2167670'>know.</span> </p><p><span
  m='2168930'>We</span> <span m='2169480'>have</span> <span m='2169660'>a</span>
  <span m='2169710'>starting</span> <span m='2170010'>vertex.</span> <span
  m='2170420'>And</span> <span m='2170500'>we</span> <span
  m='2170580'>know</span> <span m='2170940'>that</span> <span
  m='2171130'>the</span> <span m='2171180'>shortest</span> <span
  m='2171480'>path</span> <span m='2171720'>to</span> <span
  m='2171800'>the</span> <span m='2171980'>starting</span> <span
  m='2172340'>vertex,</span> <span m='2172750'>from</span> <span
  m='2172930'>the</span> <span m='2173020'>starting</span> <span
  m='2173340'>vertex,</span> <span m='2173770'>is</span> <span
  m='2173930'>0.</span> <span m='2175240'>So,</span> <span
  m='2176220'>all</span> <span m='2176400'>that</span> <span
  m='2176510'>means</span> <span m='2176730'>is</span> <span
  m='2176840'>that,</span> <span m='2177530'>all</span> <span
  m='2177700'>of</span> <span m='2177750'>the</span> <span
  m='2177810'>other</span> <span m='2177970'>ones</span> <span
  m='2178150'>have</span> <span m='2178300'>infinity</span> <span
  m='2178730'>values.</span> <span m='2179700'>So,</span> <span
  m='2179930'>at</span> <span m='2180070'>this</span> <span
  m='2180240'>very</span> <span m='2180460'>first</span> <span
  m='2180740'>step,</span> <span m='2181460'>it</span> <span
  m='2181580'>makes</span> <span m='2181780'>sense</span> <span
  m='2182060'>that</span> <span m='2182650'>extract-min</span> <span
  m='2183390'>Q</span> <span m='2184100'>is</span> <span
  m='2184240'>going</span> <span m='2184370'>to</span> <span
  m='2184430'>pull</span> <span m='2184730'>the</span> <span
  m='2184850'>starting</span> <span m='2185420'>vertex,</span> <span
  m='2185840'>small</span> <span m='2186180'>s,</span> <span
  m='2186960'>out.</span> <span m='2187670'>And</span> <span
  m='2187860'>is</span> <span m='2187940'>going</span> <span
  m='2188050'>to</span> <span m='2188090'>assign</span> <span
  m='2188390'>it</span> <span m='2188500'>to</span> <span
  m='2188560'>this</span> <span m='2188660'>u</span> <span
  m='2188910'>value.</span> </p><p><span m='2191660'>And</span> <span
  m='2191990'>we're</span> <span m='2192080'>going</span> <span
  m='2192200'>to</span> <span m='2192260'>set</span> <span m='2193030'>s</span>
  <span m='2193500'>to</span> <span m='2193785'>be--</span> <span
  m='2194690'>capital</span> <span m='2195040'>S--</span> <span
  m='2197030'>to</span> <span m='2197120'>be</span> <span
  m='2197240'>capital</span> <span m='2197880'>S</span> <span
  m='2198440'>union</span> <span m='2200140'>u.</span> <span
  m='2202520'>And</span> <span m='2204930'>then,</span> <span
  m='2205160'>all</span> <span m='2205270'>we</span> <span
  m='2205360'>have</span> <span m='2205500'>to</span> <span
  m='2205580'>do</span> <span m='2205770'>is</span> <span
  m='2206000'>relax</span> <span m='2207402'>the</span> <span
  m='2207760'>edges</span> <span m='2208550'>from</span> <span
  m='2208840'>the</span> <span m='2208920'>vertex</span> <span
  m='2209350'>that</span> <span m='2209430'>we</span> <span
  m='2209540'>just</span> <span m='2209770'>added.</span> <span m='2210640'>So,
  for</span> <span m='2211100'>each</span> <span m='2211440'>vertex,</span>
  <span m='2214070'>v</span> <span m='2216150'>belonging</span> <span
  m='2216670'>to</span> <span m='2216910'>adjacent</span> <span
  m='2217910'>s,</span> <span m='2218340'>so</span> <span
  m='2218640'>that</span> <span m='2218810'>you</span> <span
  m='2218900'>can</span> <span m='2219010'>reach</span> <span
  m='2219290'>from</span> <span m='2219460'>u.</span> <span
  m='2220670'>We</span> <span m='2220840'>relax</span> <span
  m='2223840'>u,</span> <span m='2224300'>v,</span> <span m='2225340'>w.</span>
  <span m='2228476'>All</span> <span m='2228924'>right?</span> <span
  m='2229380'>That's</span> <span m='2229610'>it.</span> <span
  m='2230060'>That's</span> <span m='2230420'>Dijkstra.</span> </p><p><span
  m='2234890'>It's</span> <span m='2235130'>a</span> <span
  m='2235160'>greedy</span> <span m='2235530'>algorithm.</span> <span
  m='2237460'>It's</span> <span m='2237640'>iterative.</span> <span
  m='2238930'>And</span> <span m='2239200'>the</span> <span
  m='2239280'>reason</span> <span m='2239510'>it's</span> <span
  m='2239640'>greedy</span> <span m='2239905'>is</span> <span
  m='2240170'>because</span> <span m='2240390'>of</span> <span
  m='2240480'>this</span> <span m='2240620'>step</span> <span
  m='2240900'>here.</span> <span m='2241690'>It's</span> <span
  m='2241880'>just</span> <span m='2242160'>picking</span> <span
  m='2242500'>the</span> <span m='2242610'>min</span> <span
  m='2244420'>priority</span> <span m='2245590'>from</span> <span
  m='2246430'>the</span> <span m='2246690'>un-processed</span> <span
  m='2247730'>vertices,</span> <span m='2248460'>Q.</span> <span
  m='2249510'>And,</span> <span m='2249930'>essentially,</span> <span
  m='2250760'>claiming</span> <span m='2252280'>that</span> <span
  m='2253680'>this</span> <span m='2254050'>min</span> <span
  m='2254420'>value</span> <span m='2256040'>is</span> <span
  m='2256280'>something</span> <span m='2256770'>that</span> <span
  m='2256910'>you</span> <span m='2257090'>already</span> <span
  m='2257590'>computed</span> <span m='2258380'>the</span> <span
  m='2258520'>shortest</span> <span m='2258910'>paths</span> <span
  m='2259320'>for.</span> </p><p><span m='2260160'>So,</span> <span
  m='2260420'>when</span> <span m='2260560'>you're</span> <span
  m='2260660'>putting</span> <span m='2260940'>something</span> <span
  m='2261350'>into</span> <span m='2261650'>S,</span> <span
  m='2262800'>you're</span> <span m='2263400'>saying,</span> <span
  m='2263700'>I'm</span> <span m='2263870'>done.</span> <span
  m='2265110'>I</span> <span m='2265480'>know</span> <span
  m='2265640'>the</span> <span m='2265730'>shortest</span> <span
  m='2266060'>path</span> <span m='2266440'>to</span> <span
  m='2266530'>this</span> <span m='2266720'>particular</span> <span
  m='2267040'>vertex.</span> <span m='2268220'>And</span> <span
  m='2269100'>I</span> <span m='2269790'>need</span> <span m='2270040'>to</span>
  <span m='2270150'>now</span> <span m='2270330'>process</span> <span
  m='2270790'>it,</span> <span m='2270940'>in</span> <span
  m='2271060'>the</span> <span m='2271150'>sense</span> <span
  m='2271420'>that</span> <span m='2271550'>I</span> <span
  m='2271580'>have</span> <span m='2271730'>to</span> <span
  m='2271830'>relax</span> <span m='2272280'>the</span> <span
  m='2272370'>edges</span> <span m='2272800'>that</span> <span
  m='2272930'>are</span> <span m='2273050'>coming</span> <span
  m='2273420'>out</span> <span m='2273630'>of</span> <span
  m='2273750'>this</span> <span m='2273920'>vertex.</span> </p><p><span
  m='2275250'>And</span> <span m='2275510'>update</span> <span
  m='2276250'>the</span> <span m='2276390'>priority</span> <span
  m='2276870'>values</span> <span m='2277370'>because</span> <span
  m='2277660'>relax</span> <span m='2278610'>is</span> <span
  m='2278800'>going</span> <span m='2279020'>to</span> <span
  m='2279100'>go</span> <span m='2279350'>change</span> <span
  m='2279950'>the</span> <span m='2280050'>d values,</span> <span
  m='2280990'>as</span> <span m='2281150'>we</span> <span
  m='2281280'>know,</span> <span m='2282780'>corresponding</span> <span
  m='2283330'>to</span> <span m='2283820'>the vertex,</span> <span
  m='2284370'>v.</span> <span m='2286010'>It</span> <span
  m='2286140'>might</span> <span m='2286350'>change</span> <span
  m='2286560'>the</span> <span m='2286630'>value.</span> <span
  m='2287280'>It</span> <span m='2287410'>might</span> <span
  m='2287590'>not.</span> <span m='2288310'>But</span> <span
  m='2288750'>there's</span> <span m='2289120'>a</span> <span
  m='2289190'>possibility</span> <span m='2289720'>that</span> <span
  m='2289860'>it</span> <span m='2289970'>would.</span> </p><p><span
  m='2290950'>And</span> <span m='2291360'>you're</span> <span
  m='2291440'>going</span> <span m='2291540'>to</span> <span
  m='2291600'>do</span> <span m='2291730'>this</span> <span
  m='2291960'>for</span> <span m='2292150'>all</span> <span
  m='2292390'>of</span> <span m='2292480'>the</span> <span
  m='2292920'>edges</span> <span m='2293280'>that</span> <span
  m='2293410'>are</span> <span m='2293520'>emanating</span> <span
  m='2294010'>out</span> <span m='2294320'>of</span> <span
  m='2295110'>the</span> <span m='2295210'>vertex,</span> <span
  m='2295620'>u.</span> <span m='2296150'>And</span> <span m='2296300'>so</span>
  <span m='2296390'>you</span> <span m='2296520'>may</span> <span
  m='2296620'>be</span> <span m='2296730'>changing</span> <span
  m='2297260'>a</span> <span m='2297340'>bunch</span> <span
  m='2297580'>of</span> <span m='2297640'>different</span> <span
  m='2297900'>priority</span> <span m='2298270'>values.</span> <span
  m='2298760'>So</span> <span m='2298840'>the</span> <span
  m='2298920'>next</span> <span m='2299200'>time</span> <span
  m='2299410'>around,</span> <span m='2300240'>you</span> <span
  m='2300720'>will</span> <span m='2300940'>get</span> <span
  m='2301400'>a</span> <span m='2301510'>different</span> <span
  m='2304230'>minimum</span> <span m='2304640'>priority</span> <span
  m='2305150'>vertex.</span> </p><p><span m='2307270'>For</span> <span
  m='2307380'>two</span> <span m='2307490'>reasons.</span> <span
  m='2307970'>One</span> <span m='2308060'>is</span> <span
  m='2308160'>that</span> <span m='2308300'>you've</span> <span
  m='2308450'>extracted</span> <span m='2308990'>out</span> <span
  m='2309770'>the</span> <span m='2309930'>minimum</span> <span
  m='2310230'>priority</span> <span m='2310630'>vertex.</span> <span
  m='2311050'>You've</span> <span m='2311190'>deleted</span> <span
  m='2311550'>it</span> <span m='2311670'>from</span> <span
  m='2311860'>Q.</span> <span m='2312590'>And</span> <span
  m='2313000'>the</span> <span m='2313110'>second</span> <span
  m='2313350'>reason</span> <span m='2314150'>is</span> <span
  m='2314440'>that</span> <span m='2314800'>these</span> <span
  m='2314960'>priority</span> <span m='2315290'>values</span> <span
  m='2315720'>change</span> <span m='2316340'>as</span> <span
  m='2316620'>you</span> <span m='2316710'>go</span> <span
  m='2316850'>through</span> <span m='2317010'>the</span> <span
  m='2317110'>loop.</span> <span m='2318200'>All</span> <span
  m='2318280'>right?</span> </p><p><span m='2319110'>And</span> <span
  m='2319300'>so,</span> <span m='2319610'>in</span> <span
  m='2319740'>our</span> <span m='2319840'>demo,</span> <span
  m='2320250'>essentially</span> <span m='2320710'>what</span> <span
  m='2320890'>happened</span> <span m='2321220'>was,</span> <span
  m='2321960'>the</span> <span m='2322140'>first</span> <span
  m='2322450'>time,</span> <span m='2323020'>the</span> <span
  m='2323220'>process</span> <span m='2323620'>of</span> <span
  m='2323760'>lifting</span> <span m='2325040'>the</span> <span
  m='2325330'>green vertex,</span> <span m='2326120'>corresponding</span> <span
  m='2326760'>to</span> <span m='2326910'>choosing</span> <span
  m='2327390'>it</span> <span m='2327540'>as</span> <span m='2327680'>a</span>
  <span m='2327760'>starting</span> <span m='2328130'>vertex.</span> <span
  m='2329220'>And</span> <span m='2330080'>the</span> <span
  m='2330170'>first</span> <span m='2330710'>thing</span> <span
  m='2330950'>that</span> <span m='2331060'>was</span> <span
  m='2331210'>closest</span> <span m='2331570'>to</span> <span
  m='2331680'>it,</span> <span m='2331860'>which</span> <span
  m='2332060'>had</span> <span m='2333340'>the</span> <span
  m='2333500'>taught</span> <span m='2333820'>string</span> <span
  m='2334290'>hanging</span> <span m='2334570'>from</span> <span
  m='2334820'>it,</span> <span m='2335550'>has</span> <span
  m='2335910'>the</span> <span m='2335960'>min</span> <span
  m='2336220'>priority</span> <span m='2336680'>value.</span> <span
  m='2337200'>And</span> <span m='2337330'>you</span> <span
  m='2337440'>pull</span> <span m='2337660'>that</span> <span
  m='2337820'>out.</span> <span m='2338090'>And</span> <span
  m='2338190'>then</span> <span m='2338340'>so</span> <span
  m='2338480'>on</span> <span m='2338620'>and</span> <span m='2338710'>so</span>
  <span m='2338850'>forth,</span> <span m='2339510'>as</span> <span
  m='2339710'>you</span> <span m='2339790'>go</span> <span
  m='2339940'>down.</span> </p><p><span m='2341420'>And</span> <span
  m='2342550'>I'm</span> <span m='2342710'>not</span> <span
  m='2342840'>going</span> <span m='2342930'>to</span> <span
  m='2342980'>go</span> <span m='2343110'>through</span> <span
  m='2343810'>and</span> <span m='2343910'>prove</span> <span
  m='2344280'>this.</span> <span m='2344500'>But</span> <span
  m='2344640'>it's</span> <span m='2344940'>certainly</span> <span
  m='2345230'>something</span> <span m='2345580'>that</span> <span
  m='2345780'>is</span> <span m='2345940'>worth</span> <span
  m='2346190'>reading.</span> <span m='2346570'>It's</span> <span
  m='2347330'>half</span> <span m='2347560'>of</span> <span
  m='2347700'>page</span> <span m='2347950'>proof,</span> <span
  m='2348450'>maybe</span> <span m='2348730'>a</span> <span
  m='2348780'>page</span> <span m='2349160'>in</span> <span
  m='2349320'>CLRS.</span> </p><p><span m='2350610'>And</span> <span
  m='2350860'>you</span> <span m='2350940'>should</span> <span
  m='2351120'>read</span> <span m='2351560'>the</span> <span
  m='2351710'>proof</span> <span m='2351980'>for</span> <span
  m='2352110'>Dijkstra,</span> <span m='2352480'>the</span> <span
  m='2352580'>formal</span> <span m='2352880'>proof</span> <span
  m='2353140'>for</span> <span m='2353200'>Dijkstra.</span> <span
  m='2353990'>Which</span> <span m='2354140'>just,</span> <span
  m='2354530'>essentially,</span> <span m='2354930'>does</span> <span
  m='2355100'>all</span> <span m='2355260'>the</span> <span
  m='2355330'>accounting</span> <span m='2355790'>and</span> <span
  m='2355900'>gets</span> <span m='2356070'>things</span> <span
  m='2356290'>right.</span> <span m='2356940'>And</span> <span
  m='2357110'>uses</span> <span m='2357490'>the</span> <span
  m='2357560'>lemma</span> <span m='2358440'>that</span> <span
  m='2358600'>we</span> <span m='2358710'>have,</span> <span
  m='2358970'>with</span> <span m='2359130'>respect</span> <span
  m='2359450'>to</span> <span m='2359520'>the</span> <span
  m='2359680'>relaxation</span> <span m='2360290'>operation</span> <span
  m='2361400'>being</span> <span m='2363400'>safe.</span> </p><p><span
  m='2364540'>OK?</span> <span m='2365370'>Any</span> <span
  m='2365500'>questions</span> <span m='2365800'>about</span> <span
  m='2365990'>Dijkstra?</span> <span m='2366770'>Or</span> <span
  m='2366970'>about</span> <span m='2367130'>the</span> <span
  m='2367200'>pseudocode,</span> <span m='2367650'>in</span> <span
  m='2367720'>particular?</span> <span m='2369540'>I</span> <span
  m='2369600'>guess</span> <span m='2369730'>you</span> <span
  m='2369810'>guys</span> <span m='2369980'>are</span> <span
  m='2370020'>going</span> <span m='2370120'>to</span> <span
  m='2370220'>code</span> <span m='2370530'>this</span> <span
  m='2370730'>at</span> <span m='2370830'>some</span> <span
  m='2370990'>point.</span> <span m='2371390'>Yeah?</span> </p><p><span
  m='2371600'>AUDIENCE: How are the</span> <span m='2372085'>vertices</span>
  <span m='2372570'>comparable?</span> <span m='2373070'>In what way?</span>
  </p><p><span m='2374250'>PROFESSOR: Oh,</span> <span m='2374690'>so</span>
  <span m='2375390'>that's</span> <span m='2375610'>a</span> <span
  m='2375630'>good</span> <span m='2375750'>question.</span> <span
  m='2376015'>And</span> <span m='2376280'>I</span> <span m='2376380'>should
  have</span> <span m='2376420'>made</span> <span m='2376550'>that</span> <span
  m='2376680'>clearer.</span> <span m='2380810'>So,</span> <span
  m='2381010'>Q</span> <span m='2381290'>is</span> <span m='2381400'>a</span>
  <span m='2381460'>priority</span> <span m='2382010'>queue.</span> <span
  m='2383420'>And</span> <span m='2383840'>the</span> <span
  m='2383920'>priorities</span> <span m='2384620'>of</span> <span
  m='2384810'>the</span> <span m='2384890'>vertices</span> <span
  m='2385820'>are</span> <span m='2386000'>the</span> <span m='2386130'>d
  values,</span> <span m='2387580'>OK?</span> </p><p><span m='2392890'>s</span>
  <span m='2393190'>being</span> <span m='2393800'>null</span> <span
  m='2394125'>is</span> <span m='2394450'>clear,</span> <span
  m='2394730'>I</span> <span m='2394780'>hope.</span> <span
  m='2395900'>That's</span> <span m='2396280'>clear.</span> <span
  m='2396920'>And</span> <span m='2397070'>then</span> <span
  m='2397200'>Q</span> <span m='2397430'>being</span> <span m='2397780'>the
  set</span> <span m='2397990'>of</span> <span m='2398130'>vertices</span> <span
  m='2398560'>are</span> <span m='2398650'>clear,</span> <span
  m='2398880'>as</span> <span m='2398990'>well.</span> <span
  m='2399580'>Now,</span> <span m='2399700'>Q</span> <span m='2399920'>is</span>
  <span m='2400040'>a</span> <span m='2400110'>priority</span> <span
  m='2400670'>queue,</span> <span m='2401620'>OK?</span> </p><p><span
  m='2403030'>And</span> <span m='2404890'>we'll</span> <span
  m='2405020'>talk</span> <span m='2405230'>about</span> <span
  m='2405410'>how</span> <span m='2405540'>we'll</span> <span
  m='2405700'>implement</span> <span m='2406060'>this</span> <span
  m='2406170'>priority</span> <span m='2406530'>queue,</span> <span
  m='2406790'>and</span> <span m='2406870'>the</span> <span
  m='2406940'>complexity</span> <span m='2407550'>of</span> <span
  m='2407650'>Dijkstra,</span> <span m='2408570'>before</span> <span
  m='2408810'>we're</span> <span m='2408940'>done</span> <span
  m='2409140'>here.</span> <span m='2409840'>But,</span> <span
  m='2410240'>as</span> <span m='2410470'>an</span> <span
  m='2410600'>ADT,</span> <span m='2411220'>as</span> <span
  m='2411330'>an</span> <span m='2411420'>Abstract</span> <span
  m='2411840'>Data</span> <span m='2412070'>Type,</span> <span
  m='2412440'>think</span> <span m='2412670'>of</span> <span
  m='2412780'>Q</span> <span m='2413020'>as</span> <span
  m='2413130'>being</span> <span m='2413310'>a</span> <span
  m='2413380'>priority</span> <span m='2413860'>queue.</span> <span
  m='2414230'>And</span> <span m='2414370'>there's</span> <span
  m='2414540'>priorities</span> <span m='2415150'>associated</span> <span
  m='2415650'>with</span> <span m='2415800'>each</span> <span
  m='2416070'>vertex</span> <span m='2416530'>that's</span> <span
  m='2416740'>in</span> <span m='2416980'>Q.</span> <span m='2417820'>And</span>
  <span m='2418030'>these</span> <span m='2418200'>priorities</span> <span
  m='2418740'>change.</span> <span m='2419650'>And</span> <span
  m='2419890'>they're</span> <span m='2420060'>the</span> <span
  m='2420180'>d</span> <span m='2420500'>values.</span> <span
  m='2421380'>All</span> <span m='2421500'>right?</span> </p><p><span
  m='2421710'>So</span> <span m='2421860'>the</span> <span
  m='2421970'>priorities.</span> <span m='2430720'>So,</span> <span
  m='2430900'>initially,</span> <span m='2432090'>d</span> <span
  m='2432390'>of</span> <span m='2432580'>s--</span> <span
  m='2432980'>small</span> <span m='2433310'>s--</span> <span
  m='2433710'>is</span> <span m='2434080'>0.</span> <span m='2434860'>And</span>
  <span m='2435030'>all</span> <span m='2435260'>of</span> <span
  m='2435330'>the</span> <span m='2435400'>other</span> <span
  m='2435600'>ones</span> <span m='2435840'>are</span> <span
  m='2435970'>infinity.</span> <span m='2437280'>So</span> <span
  m='2437550'>it's</span> <span m='2437740'>clear</span> <span
  m='2438070'>that,</span> <span m='2438290'>the</span> <span
  m='2438360'>very</span> <span m='2438560'>first</span> <span
  m='2438850'>time,</span> <span m='2439210'>you're</span> <span
  m='2439350'>going</span> <span m='2439480'>to</span> <span
  m='2439550'>set</span> <span m='2439810'>u</span> <span m='2440040'>to</span>
  <span m='2440140'>be</span> <span m='2440250'>small</span> <span
  m='2440610'>s,</span> <span m='2441180'>which</span> <span
  m='2441330'>is</span> <span m='2441420'>a</span> <span
  m='2441480'>starting</span> <span m='2441780'>vertex.</span> <span
  m='2442590'>And</span> <span m='2442750'>then</span> <span
  m='2442860'>you</span> <span m='2443040'>relax</span> <span
  m='2443480'>the</span> <span m='2443590'>edges</span> <span
  m='2443920'>coming</span> <span m='2444170'>out</span> <span
  m='2444290'>of</span> <span m='2444390'>s,</span> <span
  m='2444980'>potentially</span> <span m='2445520'>change</span> <span
  m='2445860'>some</span> <span m='2446030'>of</span> <span
  m='2446100'>these</span> <span m='2446280'>other</span> <span
  m='2446500'>infinity</span> <span m='2446990'>values</span> <span
  m='2447890'>of</span> <span m='2448200'>the</span> <span
  m='2448340'>vertices</span> <span m='2448800'>that</span> <span
  m='2448980'>you</span> <span m='2449090'>can</span> <span
  m='2449260'>reach</span> <span m='2449530'>from</span> <span
  m='2449720'>s</span> <span m='2449980'>to</span> <span m='2450070'>be</span>
  <span m='2450180'>less</span> <span m='2450400'>than</span> <span
  m='2450540'>infinity.</span> </p><p><span m='2451850'>And</span> <span
  m='2453780'>you're</span> <span m='2453960'>going</span> <span
  m='2454090'>to,</span> <span m='2454740'>essentially,</span> <span
  m='2455420'>change</span> <span m='2456590'>the</span> <span
  m='2456730'>values</span> <span m='2457260'>of</span> <span
  m='2457620'>the</span> <span m='2457710'>priority</span> <span
  m='2458160'>queue.</span> <span m='2458580'>And</span> <span
  m='2458710'>go</span> <span m='2458910'>around.</span> <span
  m='2459260'>And</span> <span m='2459340'>then</span> <span
  m='2459470'>select</span> <span m='2459750'>the</span> <span
  m='2459830'>min</span> <span m='2460120'>value</span> <span
  m='2460410'>the</span> <span m='2460510'>next</span> <span
  m='2460740'>time.</span> <span m='2461020'>And</span> <span
  m='2461120'>so</span> <span m='2461240'>on</span> <span m='2461360'>and</span>
  <span m='2461440'>so</span> <span m='2461590'>forth.</span> <span
  m='2462230'>OK?</span> <span m='2464010'>Thanks</span> <span
  m='2464240'>for</span> <span m='2464280'>the</span> <span
  m='2464360'>question.</span> <span m='2464860'>Any</span> <span
  m='2464970'>other</span> <span m='2465100'>questions?</span> <span
  m='2469320'>OK.</span> </p><p><span m='2470300'>So,</span> <span
  m='2471030'>let's</span> <span m='2471230'>just</span> <span
  m='2472230'>go</span> <span m='2472420'>through</span> <span
  m='2474780'>a</span> <span m='2474870'>couple</span> <span
  m='2475140'>of</span> <span m='2475210'>steps</span> <span
  m='2476140'>in</span> <span m='2477710'>an</span> <span
  m='2477960'>example.</span> <span m='2479350'>I'm</span> <span
  m='2479520'>not</span> <span m='2479660'>going</span> <span
  m='2479750'>to</span> <span m='2479790'>go</span> <span
  m='2479910'>through</span> <span m='2480050'>the</span> <span
  m='2480120'>whole</span> <span m='2480300'>thing.</span> <span
  m='2482700'>But</span> <span m='2482920'>you'll</span> <span
  m='2483300'>see</span> <span m='2483600'>an</span> <span
  m='2483970'>execution</span> <span m='2484550'>of</span> <span
  m='2484650'>Dijkstra</span> <span m='2485210'>in</span> <span
  m='2485380'>the</span> <span m='2485450'>nodes.</span> <span
  m='2487860'>I</span> <span m='2487970'>think</span> <span
  m='2488090'>it's</span> <span m='2488200'>worth</span> <span
  m='2488810'>spending</span> <span m='2489230'>just</span> <span
  m='2489400'>a</span> <span m='2489440'>couple</span> <span
  m='2489670'>of</span> <span m='2489720'>minutes</span> <span
  m='2490570'>going</span> <span m='2490790'>through</span> <span
  m='2492150'>the</span> <span m='2492250'>first</span> <span
  m='2492550'>few</span> <span m='2492730'>steps</span> <span
  m='2493670'>of</span> <span m='2493790'>a</span> <span
  m='2493860'>Dijkstra</span> <span m='2494290'>execution.</span>
  </p><p></p><p><span m='2496300'>Just</span> <span m='2496520'>so</span> <span
  m='2498000'>how</span> <span m='2498210'>this</span> <span
  m='2498340'>priority</span> <span m='2498710'>queue</span> <span
  m='2498900'>works</span> <span m='2499290'>is</span> <span
  m='2499890'>clear,</span> <span m='2505340'>let's</span> <span
  m='2505550'>take</span> <span m='2505710'>a</span> <span
  m='2505740'>look</span> <span m='2505870'>at a</span> <span
  m='2505970'>directed</span> <span m='2506380'>graph</span> <span
  m='2507090'>that</span> <span m='2508100'>has</span> <span
  m='2508350'>five</span> <span m='2508610'>vertices.</span> <span
  m='2522400'>So</span> <span m='2522630'>that's</span> <span
  m='2522850'>7.</span> <span m='2534040'>So</span> <span
  m='2535500'>let's</span> <span m='2535630'>start</span> <span
  m='2535880'>with</span> <span m='2536630'>a</span> <span
  m='2536810'>being</span> <span m='2537030'>the</span> <span
  m='2537140'>starting</span> <span m='2537470'>vertex.</span> <span
  m='2538760'>And</span> <span m='2539030'>so</span> <span m='2539800'>d</span>
  <span m='2540030'>of</span> <span m='2540160'>a</span> <span
  m='2540370'>is</span> <span m='2540670'>0.</span> <span m='2541490'>And</span>
  <span m='2541720'>d</span> <span m='2541870'>of</span> <span
  m='2541970'>b</span> <span m='2542310'>through</span> <span
  m='2543230'>e</span> <span m='2543600'>are</span> <span m='2543760'>all</span>
  <span m='2543920'>infinity.</span> </p><p><span m='2546190'>Your</span> <span
  m='2548430'>s</span> <span m='2548650'>is</span> <span m='2548700'>null</span>
  <span m='2549520'>to</span> <span m='2549910'>begin</span> <span
  m='2550190'>with.</span> <span m='2551580'>And</span> <span
  m='2552650'>Q</span> <span m='2552960'>has</span> <span m='2553250'>all</span>
  <span m='2553470'>of the</span> <span m='2553630'>five</span> <span
  m='2554050'>vertices</span> <span m='2554530'>in</span> <span
  m='2554640'>it.</span> <span m='2559710'>So</span> <span
  m='2560010'>extract-min</span> <span m='2561170'>is</span> <span
  m='2561360'>going</span> <span m='2561520'>to</span> <span
  m='2561590'>select</span> <span m='2562410'>a.</span> <span m='2563721'>That's
  the</span> <span m='2564160'>only</span> <span m='2564370'>one</span> <span
  m='2564650'>that</span> <span m='2565780'>is</span> <span m='2566030'>a</span>
  <span m='2566080'>0.</span> <span m='2566830'>Because</span> <span
  m='2567060'>you've</span> <span m='2567200'>got</span> <span
  m='2567350'>0,</span> <span m='2567710'>infinity,</span> <span
  m='2568360'>infinity,</span> <span m='2568980'>infinity,</span> <span
  m='2570030'>infinity.</span> </p><p><span m='2571550'>And</span> <span
  m='2571770'>so,</span> <span m='2571850'>you</span> <span
  m='2571970'>select</span> <span m='2572300'>that,</span> <span
  m='2572720'>and</span> <span m='2572810'>you</span> <span
  m='2572910'>set</span> <span m='2573230'>s</span> <span m='2573610'>to</span>
  <span m='2573690'>be</span> <span m='2573900'>a.</span> <span
  m='2576130'>And</span> <span m='2576310'>once</span> <span
  m='2576500'>you</span> <span m='2576590'>set</span> <span m='2576770'>s</span>
  <span m='2576970'>to</span> <span m='2577060'>be a,</span> <span
  m='2577430'>you</span> <span m='2577560'>relax</span> <span
  m='2577970'>the</span> <span m='2578070'>edges</span> <span
  m='2578410'>coming</span> <span m='2578660'>out</span> <span
  m='2578820'>of</span> <span m='2578950'>a.</span> <span m='2579640'>And</span>
  <span m='2579780'>there's</span> <span m='2579950'>two</span> <span
  m='2580140'>of</span> <span m='2580230'>them.</span> <span
  m='2581000'>So</span> <span m='2581270'>you</span> <span
  m='2581420'>end</span> <span m='2581620'>up</span> <span
  m='2581760'>with</span> <span m='2581940'>0,</span> <span
  m='2582730'>10,</span> <span m='2583820'>3,</span> <span
  m='2584540'>infinity,</span> <span m='2585620'>infinity.</span> <span
  m='2587010'>And</span> <span m='2587520'>the</span> <span
  m='2587690'>next</span> <span m='2587940'>extract-min</span> <span
  m='2588730'>is</span> <span m='2588850'>going</span> <span
  m='2588990'>to</span> <span m='2589050'>select</span> <span
  m='2589410'>3.</span> <span m='2590410'>And</span> <span
  m='2590760'>you're</span> <span m='2590870'>going</span> <span
  m='2590960'>to</span> <span m='2591360'>set</span> <span m='2591690'>s</span>
  <span m='2591900'>to</span> <span m='2592000'>be</span> <span
  m='2592850'>a</span> <span m='2593050'>comma</span> <span
  m='2593380'>c.</span> </p><p><span m='2594820'>And</span> <span
  m='2595020'>so</span> <span m='2595100'>you're,</span> <span
  m='2595390'>essentially,</span> <span m='2595830'>doing</span> <span
  m='2596570'>kind</span> <span m='2596680'>of</span> <span m='2597570'>a</span>
  <span m='2597660'>breadth-first</span> <span m='2598320'>search.</span> <span
  m='2599290'>But</span> <span m='2599490'>you're</span> <span
  m='2599610'>being</span> <span m='2599860'>greedy.</span> <span
  m='2601100'>It's</span> <span m='2601370'>a</span> <span
  m='2601450'>mixed</span> <span m='2601780'>breadth-first</span> <span
  m='2602330'>depth-first</span> <span m='2602780'>search.</span> </p><p><span
  m='2603230'>You</span> <span m='2603630'>do</span> <span m='2603730'>a</span>
  <span m='2603790'>breadth-first</span> <span m='2604290'>search</span> <span
  m='2604610'>when</span> <span m='2604730'>you're</span> <span
  m='2604820'>given</span> <span m='2605050'>a</span> <span
  m='2605100'>particular</span> <span m='2605490'>vertex,</span> <span
  m='2605950'>and</span> <span m='2606030'>you</span> <span
  m='2606160'>look</span> <span m='2606330'>at</span> <span
  m='2606400'>all</span> <span m='2606620'>of</span> <span
  m='2606700'>the</span> <span m='2606770'>vertices</span> <span
  m='2607270'>that</span> <span m='2607380'>you</span> <span
  m='2607500'>can</span> <span m='2607640'>reach</span> <span
  m='2608060'>from</span> <span m='2608250'>that</span> <span
  m='2608410'>vertex.</span> <span m='2609320'>And</span> <span
  m='2609450'>then</span> <span m='2609660'>you</span> <span
  m='2609770'>say,</span> <span m='2610130'>I'm</span> <span
  m='2610710'>a</span> <span m='2610830'>greedy</span> <span
  m='2611140'>algorithm.</span> <span m='2611810'>I'm</span> <span
  m='2611960'>going</span> <span m='2612090'>to</span> <span
  m='2612150'>pick</span> <span m='2612760'>the</span> <span
  m='2612910'>vertex</span> <span m='2613630'>in</span> <span
  m='2613860'>this</span> <span m='2614110'>frontier</span> <span
  m='2614710'>that</span> <span m='2614870'>I've</span> <span
  m='2614970'>just</span> <span m='2615200'>created,</span> <span
  m='2616100'>that</span> <span m='2616340'>is</span> <span
  m='2616830'>the</span> <span m='2616970'>shortest</span> <span
  m='2617320'>distance</span> <span m='2617660'>away</span> <span
  m='2617850'>from</span> <span m='2618050'>me,</span> <span
  m='2618640'>that</span> <span m='2618750'>has</span> <span
  m='2618930'>the</span> <span m='2619000'>lowest</span> <span
  m='2619270'>priority</span> <span m='2619670'>value.</span> </p><p><span
  m='2620350'>And,</span> <span m='2620460'>in</span> <span
  m='2620520'>this</span> <span m='2620690'>case,</span> <span m='2620880'>it
  would</span> <span m='2621050'>be</span> <span m='2621170'>c</span> <span
  m='2621610'>because</span> <span m='2621940'>this other one is</span> <span
  m='2622380'>10.</span> <span m='2623030'>And</span> <span
  m='2623190'>this</span> <span m='2623330'>is</span> <span
  m='2623440'>shorter.</span> <span m='2624290'>Right?</span> <span
  m='2624610'>So</span> <span m='2624630'>that's</span> <span
  m='2624780'>why</span> <span m='2624890'>we</span> <span
  m='2625020'>pick</span> <span m='2625550'>c</span> <span
  m='2625840'>over</span> <span m='2625990'>here.</span> <span
  m='2626690'>And</span> <span m='2626970'>one</span> <span
  m='2627140'>last</span> <span m='2627420'>one.</span> </p><p><span
  m='2628620'>Once</span> <span m='2628900'>you</span> <span
  m='2629050'>process</span> <span m='2629580'>c,</span> <span
  m='2630900'>you're</span> <span m='2631040'>going</span> <span
  m='2631280'>to</span> <span m='2631390'>end</span> <span m='2631600'>up</span>
  <span m='2632940'>processing</span> <span m='2633430'>this</span> <span
  m='2633660'>edge</span> <span m='2633890'>going</span> <span
  m='2634130'>out</span> <span m='2634320'>here.</span> <span
  m='2634620'>This</span> <span m='2634850'>edge</span> <span
  m='2635040'>going</span> <span m='2635250'>out</span> <span
  m='2635430'>there.</span> <span m='2635840'>This</span> <span
  m='2636020'>edge</span> <span m='2636220'>going</span> <span
  m='2636430'>out</span> <span m='2636600'>this</span> <span
  m='2636770'>way.</span> <span m='2637560'>And</span> <span
  m='2637770'>you're</span> <span m='2637860'>going</span> <span
  m='2638000'>to</span> <span m='2638050'>end</span> <span m='2638220'>up</span>
  <span m='2638390'>with</span> <span m='2639040'>0,</span> <span
  m='2639518'>7,</span> <span m='2641908'>3,</span> <span m='2642864'>11,</span>
  <span m='2643820'>5.</span> </p><p><span m='2645070'>And</span> <span
  m='2645470'>you've</span> <span m='2645590'>processed</span> <span
  m='2646010'>a</span> <span m='2646070'>bunch</span> <span
  m='2646290'>of</span> <span m='2646390'>edges</span> <span
  m='2647140'>coming</span> <span m='2647390'>out</span> <span
  m='2647530'>of</span> <span m='2647600'>c.</span> <span
  m='2648280'>And,</span> <span m='2648570'>at</span> <span
  m='2648640'>this</span> <span m='2648790'>point,</span> <span m='2650370'>0
  is</span> <span m='2650740'>gone</span> <span m='2651010'>and</span> <span
  m='2651120'>3</span> <span m='2651290'>is</span> <span
  m='2651420'>gone.</span> <span m='2651730'>I'm</span> <span
  m='2651800'>just</span> <span m='2651970'>writing</span> <span
  m='2652230'>the</span> <span m='2652320'>values</span> <span
  m='2652730'>here,</span> <span m='2653310'>just</span> <span
  m='2653460'>so</span> <span m='2653530'>you</span> <span
  m='2653610'>know</span> <span m='2653750'>what</span> <span
  m='2653920'>they</span> <span m='2654040'>are.</span> </p><p><span
  m='2654890'>But</span> <span m='2655060'>these</span> <span
  m='2655260'>are</span> <span m='2655350'>out</span> <span
  m='2655600'>of</span> <span m='2655700'>the</span> <span
  m='2655770'>picture</span> <span m='2656150'>because,</span> <span
  m='2656400'>in</span> <span m='2656640'>s,</span> <span
  m='2657090'>those</span> <span m='2657360'>values</span> <span
  m='2657670'>should</span> <span m='2657880'>never</span> <span
  m='2658080'>change.</span> <span m='2658920'>Dijkstra</span> <span
  m='2660066'>essentially</span> <span m='2660450'>guarantees.</span> <span
  m='2661500'>And</span> <span m='2661690'>that's</span> <span
  m='2661940'>the</span> <span m='2662040'>proof</span> <span
  m='2662470'>of</span> <span m='2662580'>correctness</span> <span
  m='2663100'>that</span> <span m='2665530'>takes</span> <span
  m='2665710'>a</span> <span m='2665750'>bit</span> <span m='2665900'>of</span>
  <span m='2666020'>doing,</span> <span m='2667140'>is</span> <span
  m='2667330'>that</span> <span m='2667570'>this</span> <span
  m='2667780'>value</span> <span m='2668110'>is</span> <span
  m='2668220'>never</span> <span m='2668380'>going</span> <span
  m='2668500'>to</span> <span m='2668580'>reduce</span> <span
  m='2668930'>anymore.</span> </p><p><span m='2669620'>The</span> <span
  m='2669770'>pre-value</span> <span m='2670300'>is</span> <span
  m='2670390'>never</span> <span m='2670570'>going</span> <span
  m='2670700'>to</span> <span m='2670770'>reduce.</span> <span
  m='2671810'>And</span> <span m='2672010'>it's</span> <span
  m='2672170'>been</span> <span m='2672440'>put</span> <span
  m='2672690'>into</span> <span m='2672920'>s.</span> <span
  m='2673710'>But</span> <span m='2673870'>what's</span> <span
  m='2674080'>remaining</span> <span m='2674490'>now</span> <span
  m='2674690'>is</span> <span m='2674840'>5.</span> <span m='2675800'>And</span>
  <span m='2676130'>that</span> <span m='2676350'>corresponds</span> <span
  m='2676800'>to</span> <span m='2677220'>the</span> <span m='2677390'>e</span>
  <span m='2678510'>vertex.</span> </p><p><span m='2679090'>So</span> <span
  m='2679330'>s</span> <span m='2679570'>becomes</span> <span
  m='2680730'>a,</span> <span m='2681207'>c,</span> <span m='2682638'>e.</span>
  <span m='2685130'>The</span> <span m='2685300'>5</span> <span
  m='2685620'>gets</span> <span m='2685780'>stuck</span> <span
  m='2686090'>in</span> <span m='2686200'>there.</span> <span
  m='2686970'>And</span> <span m='2687160'>so</span> <span m='2687270'>on</span>
  <span m='2687390'>and</span> <span m='2687470'>so</span> <span
  m='2687600'>forth.</span> <span m='2688580'>All</span> <span
  m='2688640'>right?</span> <span m='2690220'>So,</span> <span
  m='2690360'>that's</span> <span m='2690590'>Dijkstra.</span> <span
  m='2692100'>And</span> <span m='2692260'>now,</span> <span
  m='2692380'>let's</span> <span m='2692640'>start</span> <span
  m='2692740'>complexity.</span> </p><p><span m='2695630'>So, it</span> <span
  m='2695700'>we</span> <span m='2695790'>have</span> <span
  m='2695980'>the</span> <span m='2696060'>code</span> <span
  m='2697060'>for</span> <span m='2697200'>Dijkstra</span> <span
  m='2697570'>on</span> <span m='2697720'>the</span> <span
  m='2697790'>left,</span> <span m='2698640'>we</span> <span
  m='2698730'>have</span> <span m='2698850'>an</span> <span
  m='2698940'>ADT</span> <span m='2700390'>associated</span> <span
  m='2701010'>with</span> <span m='2702010'>the</span> <span
  m='2702130'>priority</span> <span m='2702620'>queue.</span> <span
  m='2703530'>And</span> <span m='2704070'>now,</span> <span
  m='2704290'>we're</span> <span m='2704550'>back</span> <span
  m='2704870'>to</span> <span m='2705990'>talking</span> <span
  m='2706260'>like</span> <span m='2706430'>we</span> <span
  m='2706550'>did</span> <span m='2708100'>early</span> <span
  m='2708360'>on</span> <span m='2708530'>in</span> <span m='2708600'>the</span>
  <span m='2708700'>term,</span> <span m='2709630'>where we</span> <span
  m='2710200'>compared</span> <span m='2710700'>linked</span> <span
  m='2710960'>lists,</span> <span m='2711410'>and</span> <span
  m='2711610'>arrays,</span> <span m='2713020'>and</span> <span
  m='2713170'>heaps,</span> <span m='2713700'>and</span> <span
  m='2714010'>trees.</span> <span m='2715170'>And</span> <span
  m='2715360'>said,</span> <span m='2716130'>for</span> <span
  m='2716540'>a</span> <span m='2716590'>particular</span> <span
  m='2719890'>set</span> <span m='2720150'>of</span> <span
  m='2720260'>operations,</span> <span m='2721580'>which</span> <span
  m='2721820'>one</span> <span m='2722130'>is</span> <span
  m='2722270'>going</span> <span m='2722530'>to</span> <span
  m='2722620'>be</span> <span m='2722790'>the</span> <span
  m='2722880'>best?</span> <span m='2724020'>OK?</span> </p><p><span
  m='2725130'>So, if you</span> <span m='2725470'>analyze</span> <span
  m='2726580'>Dijkstra,</span> <span m='2727740'>and</span> <span
  m='2727890'>you</span> <span m='2728030'>look</span> <span
  m='2728250'>at</span> <span m='2728430'>the</span> <span
  m='2728520'>pseudocode</span> <span m='2729100'>first,</span> <span
  m='2731190'>and</span> <span m='2731320'>you</span> <span
  m='2731430'>say,</span> <span m='2732060'>what</span> <span
  m='2732340'>are</span> <span m='2732370'>the</span> <span
  m='2732460'>operations</span> <span m='2733330'>that</span> <span
  m='2733580'>I'm</span> <span m='2733850'>performing?</span> <span
  m='2737810'>I</span> <span m='2737930'>got</span> <span m='2738610'>an</span>
  <span m='2738750'>operation</span> <span m='2739240'>here,</span> <span
  m='2739620'>corresponding</span> <span m='2740210'>to</span> <span
  m='2741870'>theta</span> <span m='2742200'>v</span> <span
  m='2743440'>inserts</span> <span m='2746430'>into</span> <span
  m='2746760'>the</span> <span m='2746880'>priority</span> <span
  m='2747350'>queue.</span> <span m='2753760'>And</span> <span
  m='2753950'>that's</span> <span m='2754810'>inserting</span> <span
  m='2755210'>things</span> <span m='2755440'>into</span> <span
  m='2755620'>Q.</span> <span m='2757440'>I</span> <span m='2757560'>got</span>
  <span m='2758670'>theta</span> <span m='2758960'>v</span> <span
  m='2761730'>extract-min</span> <span m='2762470'>operations.</span>
  </p><p><span m='2768290'>I'm</span> <span m='2768430'>only</span> <span
  m='2768680'>going</span> <span m='2768780'>to</span> <span
  m='2768880'>delete</span> <span m='2769220'>a</span> <span
  m='2769270'>vertex</span> <span m='2769680'>once,</span> <span
  m='2770260'>process</span> <span m='2770640'>of</span> <span
  m='2770700'>vertex</span> <span m='2771070'>once.</span> <span
  m='2772160'>And</span> <span m='2772850'>that's</span> <span
  m='2773040'>why</span> <span m='2773190'>I</span> <span
  m='2773220'>have</span> <span m='2773360'>theta</span> <span
  m='2773590'>v</span> <span m='2773750'>extract</span> <span
  m='2774110'>operations.</span> <span m='2775780'>And</span> <span
  m='2776140'>I</span> <span m='2776170'>have</span> <span
  m='2776430'>theta</span> <span m='2776780'>e,</span> <span
  m='2781050'>what</span> <span m='2781490'>decrease key or</span> <span
  m='2782440'>update</span> <span m='2782840'>key</span> <span
  m='2783060'>operations</span> <span m='2786900'>because</span> <span
  m='2787150'>when</span> <span m='2787260'>I</span> <span
  m='2787330'>do,</span> <span m='2787510'>I</span> <span
  m='2787590'>relax</span> <span m='2788200'>here.</span> <span
  m='2789690'>I'm</span> <span m='2791250'>decreasing</span> <span
  m='2791770'>the</span> <span m='2791860'>key.</span> </p><p><span
  m='2794960'>It's</span> <span m='2795100'>in</span> <span
  m='2795210'>particular,</span> <span m='2795610'>it's not</span> <span
  m='2795730'>an</span> <span m='2795920'>update</span> <span
  m='2796290'>key.</span> <span m='2796510'>It</span> <span
  m='2796590'>happens</span> <span m='2796830'>to</span> <span
  m='2796900'>be</span> <span m='2796990'>a</span> <span
  m='2797040'>decrease</span> <span m='2797500'>key,</span> <span
  m='2798200'>which</span> <span m='2798380'>is</span> <span
  m='2798470'>not</span> <span m='2798650'>a</span> <span m='2798690'>big</span>
  <span m='2798850'>deal.</span> <span m='2799510'>We</span> <span
  m='2799610'>don't need</span> <span m='2799710'>to</span> <span
  m='2799760'>get</span> <span m='2799890'>into</span> <span
  m='2800040'>that.</span> <span m='2800620'>But</span> <span
  m='2800840'>you</span> <span m='2800980'>are</span> <span
  m='2801180'>reducing</span> <span m='2801630'>the</span> <span
  m='2801720'>d</span> <span m='2801900'>value.</span> <span
  m='2802530'>So</span> <span m='2802760'>it's</span> <span m='2802880'>a</span>
  <span m='2802940'>decrease</span> <span m='2803360'>key</span> <span
  m='2803540'>operation.</span> </p><p><span m='2805040'>And,</span> <span
  m='2805140'>again,</span> <span m='2805480'>it's</span> <span
  m='2805700'>theta</span> <span m='2806020'>e</span> <span
  m='2806850'>because,</span> <span m='2810550'>in</span> <span
  m='2810780'>a</span> <span m='2810840'>directed</span> <span
  m='2811200'>graph,</span> <span m='2811510'>you're</span> <span
  m='2811820'>only</span> <span m='2811950'>going</span> <span
  m='2812040'>to</span> <span m='2812110'>process</span> <span
  m='2812470'>each</span> <span m='2812750'>edge</span> <span
  m='2812990'>that's</span> <span m='2813170'>coming</span> <span
  m='2813410'>out</span> <span m='2813520'>of</span> <span
  m='2813580'>the</span> <span m='2813660'>vertex</span> <span
  m='2814640'>once.</span> <span m='2815540'>Since</span> <span
  m='2815720'>you're</span> <span m='2815810'>processing</span> <span
  m='2816250'>each</span> <span m='2816400'>vertex</span> <span
  m='2816770'>once,</span> <span m='2817220'>and</span> <span
  m='2817370'>you're</span> <span m='2818050'>looking</span> <span
  m='2818340'>at</span> <span m='2818400'>all</span> <span m='2818570'>of</span>
  <span m='2818650'>the</span> <span m='2818750'>outgoing</span> <span
  m='2819170'>edges</span> <span m='2819930'>from</span> <span
  m='2820140'>that</span> <span m='2820310'>vertex.</span> <span
  m='2821470'>OK?</span> <span m='2822530'>So</span> <span
  m='2822710'>that's</span> <span m='2824020'>what</span> <span
  m='2824200'>you</span> <span m='2824300'>can</span> <span
  m='2824420'>get</span> <span m='2824680'>looking</span> <span
  m='2824950'>at</span> <span m='2825030'>the</span> <span
  m='2825110'>pseudocode.</span> </p><p><span m='2826340'>And</span> <span
  m='2826490'>now,</span> <span m='2826700'>you're</span> <span
  m='2826930'>a</span> <span m='2826990'>data</span> <span
  m='2827200'>structure</span> <span m='2827540'>designer.</span> <span
  m='2829230'>And</span> <span m='2829930'>you</span> <span
  m='2830070'>have</span> <span m='2830160'>some</span> <span
  m='2830300'>choices</span> <span m='2830730'>here,</span> <span
  m='2831770'>with</span> <span m='2831940'>respect to</span> <span
  m='2832300'>actually</span> <span m='2832690'>implementing</span> <span
  m='2833230'>the</span> <span m='2833330'>priority</span> <span
  m='2833810'>queue.</span> <span m='2834910'>And</span> <span
  m='2835270'>let's</span> <span m='2835470'>look</span> <span
  m='2835640'>at</span> <span m='2835770'>the</span> <span
  m='2835870'>complexity</span> <span m='2836380'>of</span> <span
  m='2836470'>Dijkstra</span> <span m='2837510'>for</span> <span
  m='2839860'>arrays.</span> </p><p><span m='2841030'>So,</span> <span
  m='2841480'>suppose</span> <span m='2841850'>I</span> <span
  m='2841960'>ended</span> <span m='2842230'>up</span> <span
  m='2843610'>using</span> <span m='2844850'>an</span> <span
  m='2845010'>array</span> <span m='2845420'>structure</span> <span
  m='2845890'>for</span> <span m='2845980'>the</span> <span
  m='2846090'>priority</span> <span m='2846520'>queue.</span> <span
  m='2848040'>But</span> <span m='2848270'>then,</span> <span
  m='2850590'>what</span> <span m='2850720'>do</span> <span m='2850800'>I
  have?</span> <span m='2851800'>I</span> <span m='2852300'>have,</span> <span
  m='2853320'>if I</span> <span m='2853360'>look</span> <span
  m='2853540'>at</span> <span m='2853630'>this,</span> <span
  m='2854790'>my</span> <span m='2856200'>extract-min,</span> <span
  m='2857350'>what</span> <span m='2857570'>is</span> <span
  m='2857690'>the</span> <span m='2858230'>complexity</span> <span
  m='2858690'>of</span> <span m='2858780'>extract-min</span> <span
  m='2859400'>in</span> <span m='2859520'>an array?</span> </p><p><span
  m='2860720'>AUDIENCE: Theta</span> <span m='2861130'>v.</span> </p><p><span
  m='2861540'>PROFESSOR: Theta</span> <span m='2861890'>v.</span> <span
  m='2862610'>And</span> <span m='2862870'>what's</span> <span
  m='2863110'>the</span> <span m='2864160'>complexity</span> <span
  m='2864270'>of </span> <span m='2864360'>a</span> <span
  m='2864430'>decrease</span> <span m='2865000'>key</span> <span
  m='2865400'>in</span> <span m='2865540'>an</span> <span
  m='2865720'>array?</span> <span m='2868290'>I</span> <span
  m='2868420'>just</span> <span m='2868570'>go</span> <span
  m='2869030'>access</span> <span m='2869480'>that</span> <span
  m='2869810'>element.</span> <span m='2870210'>And</span> <span
  m='2870340'>I</span> <span m='2870880'>change</span> <span
  m='2871220'>it.</span> <span m='2871600'>State</span> <span
  m='2871710'>of</span> <span m='2871850'>one,</span> <span
  m='2872270'>right?</span> </p><p><span m='2873140'>So</span> <span
  m='2874000'>I</span> <span m='2874390'>have</span> <span
  m='2874730'>theta</span> <span m='2875005'>v</span> <span
  m='2876610'>for</span> <span m='2877690'>extract-min.</span> <span
  m='2879010'>I'll</span> <span m='2879060'>just</span> <span m='2879190'>call
  it</span> <span m='2879400'>ex-min.</span> <span m='2880810'>Theta</span>
  <span m='2881100'>one</span> <span m='2882490'>for</span> <span
  m='2883410'>decrease</span> <span m='2883930'>key.</span> <span
  m='2886750'>And</span> <span m='2886900'>if</span> <span m='2886990'>I</span>
  <span m='2887040'>go</span> <span m='2887220'>do</span> <span
  m='2887360'>the</span> <span m='2888580'>multiplication,</span> <span
  m='2889890'>I</span> <span m='2889980'>get</span> <span
  m='2890420'>theta</span> <span m='2890950'>v</span> <span
  m='2891260'>times</span> <span m='2891670'>v</span> <span
  m='2892440'>plus</span> <span m='2894540'>e</span> <span
  m='2895060'>times</span> <span m='2895400'>1,</span> <span
  m='2895800'>or</span> <span m='2895910'>a</span> <span
  m='2895950'>constant,</span> <span m='2897290'>which</span> <span
  m='2897390'>is</span> <span m='2897570'>theta</span> <span
  m='2898270'>v</span> <span m='2898490'>squared.</span> </p><p><span
  m='2899860'>Because</span> <span m='2900130'>I</span> <span
  m='2900210'>know</span> <span m='2900490'>that</span> <span
  m='2901370'>e</span> <span m='2901560'>is</span> <span
  m='2902110'>order</span> <span m='2902540'>v</span> <span
  m='2902710'>squared.</span> <span m='2903260'>Right?</span> <span
  m='2903760'>If</span> <span m='2904050'>I</span> <span m='2904120'>have</span>
  <span m='2904240'>a</span> <span m='2904650'>simple</span> <span
  m='2905010'>graph,</span> <span m='2905340'>it</span> <span
  m='2905460'>may</span> <span m='2905580'>be</span> <span m='2905720'>a</span>
  <span m='2905800'>complete</span> <span m='2906210'>graph,</span> <span
  m='2907100'>but--</span> <span m='2907690'>we</span> <span
  m='2907840'>talked</span> <span m='2908040'>about</span> <span
  m='2908220'>this</span> <span m='2908360'>last</span> <span
  m='2908600'>time.</span> <span m='2909460'>e is,</span> <span
  m='2910260'>at</span> <span m='2910440'>most,</span> <span
  m='2910680'>v</span> <span m='2910820'>squared.</span> <span
  m='2911810'>So</span> <span m='2912440'>I</span> <span m='2912540'>can</span>
  <span m='2912650'>just</span> <span m='2912870'>call</span> <span
  m='2913100'>this</span> <span m='2913360'>theta</span> <span
  m='2913590'>v</span> <span m='2913740'>squared.</span> <span
  m='2914445'>All</span> <span m='2914720'>right?</span> </p><p><span
  m='2915340'>So</span> <span m='2915500'>we</span> <span
  m='2915590'>have</span> <span m='2915700'>a</span> <span
  m='2915750'>theta</span> <span m='2916000'>v</span> <span
  m='2916150'>squared</span> <span m='2916770'>Dijkstra</span> <span
  m='2917160'>implementation</span> <span m='2919000'>that</span> <span
  m='2920500'>uses</span> <span m='2920840'>an</span> <span
  m='2920980'>array</span> <span m='2921240'>structure.</span> <span
  m='2922050'>But do</span> <span m='2922230'>we</span> <span
  m='2922370'>want</span> <span m='2922500'>to</span> <span
  m='2922540'>use</span> <span m='2922720'>an</span> <span
  m='2922800'>array</span> <span m='2923000'>structure?</span> <span
  m='2923720'>What</span> <span m='2925800'>data</span> <span
  m='2926020'>structure</span> <span m='2926360'>should</span> <span
  m='2926550'>we</span> <span m='2926680'>use?</span> <span
  m='2929290'>Yeah?</span> </p><p><span m='2930200'>AUDIENCE: Heap.</span>
  </p><p><span m='2931060'>PROFESSOR: You</span> <span m='2931210'>can</span>
  <span m='2931280'>use</span> <span m='2931470'>it</span> <span m='2931630'>a
  min-heap.</span> <span m='2932370'>Exactly</span> <span
  m='2932700'>right.</span> <span m='2933990'>So,</span> <span m='2934090'>if
  you</span> <span m='2934200'>use a</span> <span m='2934500'>binary</span>
  <span m='2934980'>min-heap,</span> <span m='2940840'>then</span> <span
  m='2947520'>my</span> <span m='2947720'>extract-min</span> <span
  m='2953480'>is</span> <span m='2954610'>finding</span> <span
  m='2954910'>the</span> <span m='2954990'>min</span> <span
  m='2955500'>is</span> <span m='2955860'>a</span> <span
  m='2956380'>constant</span> <span m='2956830'>because</span> <span
  m='2957040'>you</span> <span m='2957110'>just</span> <span
  m='2957280'>pick</span> <span m='2957410'>it</span> <span
  m='2957500'>up</span> <span m='2957620'>from</span> <span
  m='2957770'>the</span> <span m='2957860'>top.</span> <span
  m='2958910'>But</span> <span m='2959140'>we</span> <span
  m='2959260'>know</span> <span m='2959550'>that,</span> <span
  m='2960260'>if</span> <span m='2960390'>you</span> <span
  m='2960470'>want</span> <span m='2960600'>to</span> <span
  m='2960640'>update</span> <span m='2961170'>the</span> <span
  m='2961270'>heap,</span> <span m='2962770'>and</span> <span
  m='2963090'>delete</span> <span m='2963420'>it,</span> <span
  m='2964320'>then</span> <span m='2964600'>it's</span> <span
  m='2964710'>going</span> <span m='2964830'>to</span> <span
  m='2964890'>take</span> <span m='2965190'>that</span> <span
  m='2965430'>theta</span> <span m='2965680'>log</span> <span
  m='2965940'>v.</span> </p><p><span m='2968220'>And</span> <span
  m='2968880'>decrease</span> <span m='2969420'>key</span> <span
  m='2970670'>is</span> <span m='2970810'>the</span> <span
  m='2970890'>same</span> <span m='2971110'>thing.</span> <span
  m='2971460'>Theta</span> <span m='2971680'>log</span> <span
  m='2971945'>v.</span> <span m='2974010'>So</span> <span
  m='2974140'>that's</span> <span m='2974330'>worse</span> <span
  m='2974950'>than array.</span> <span m='2977880'>And</span> <span
  m='2978170'>if</span> <span m='2978250'>I</span> <span m='2978320'>go</span>
  <span m='2978920'>do</span> <span m='2979020'>the</span> <span
  m='2979100'>multiplication</span> <span m='2979680'>again,</span> <span
  m='2980000'>I</span> <span m='2980060'>get</span> <span m='2980380'>v</span>
  <span m='2980660'>log</span> <span m='2981040'>v</span> <span
  m='2981910'>plus</span> <span m='2982670'>e</span> <span
  m='2982880'>log</span> <span m='2983180'>v.</span> <span
  m='2984550'>OK?</span> </p><p><span m='2985920'>And</span> <span
  m='2986210'>this</span> <span m='2986330'>is</span> <span
  m='2986430'>not</span> <span m='2986640'>quite</span> <span
  m='2987250'>the</span> <span m='2987340'>complexity</span> <span
  m='2987870'>that</span> <span m='2988000'>I</span> <span
  m='2988050'>put</span> <span m='2988240'>up,</span> <span
  m='2989590'>as</span> <span m='2989940'>some</span> <span
  m='2990190'>of</span> <span m='2990280'>you</span> <span
  m='2990380'>may</span> <span m='2990520'>remember,</span> <span
  m='2991920'>last</span> <span m='2992230'>time.</span> <span
  m='2994330'>This</span> <span m='2994510'>is</span> <span
  m='2994640'>not</span> <span m='2994910'>the</span> <span
  m='2995840'>optimum</span> <span m='2996600'>complexity</span> <span
  m='2997170'>of</span> <span m='2997270'>Dijkstra.</span> <span
  m='2997790'>Or</span> <span m='2998210'>an</span> <span
  m='2998300'>optimal</span> <span m='2998890'>complexity</span> <span
  m='2999460'>of</span> <span m='2999540'>Dijkstra.</span> <span
  m='3001280'>You</span> <span m='3001380'>can</span> <span
  m='3001470'>actually</span> <span m='3001790'>take</span> <span
  m='3002020'>this</span> <span m='3002210'>out</span> <span
  m='3003400'>by</span> <span m='3003630'>using</span> <span
  m='3004180'>a</span> <span m='3004250'>data</span> <span
  m='3004460'>structure</span> <span m='3004890'>that</span> <span
  m='3005800'>we</span> <span m='3005940'>won't</span> <span
  m='3006130'>talk</span> <span m='3006320'>about</span> <span
  m='3006640'>in</span> <span m='3006740'>006.</span> </p><p><span
  m='3008460'>But</span> <span m='3009550'>you</span> <span
  m='3009710'>can</span> <span m='3010080'>read</span> <span
  m='3010270'>about</span> <span m='3010640'>it.</span> <span
  m='3011190'>It's</span> <span m='3011380'>not</span> <span
  m='3012330'>6006</span> <span m='3013200'>level</span> <span
  m='3013520'>material.</span> <span m='3015660'>You're</span> <span
  m='3015780'>not</span> <span m='3015920'>responsible</span> <span
  m='3016650'>for</span> <span m='3017430'>this</span> <span
  m='3017710'>in</span> <span m='3017830'>006.</span> <span
  m='3018410'>But</span> <span m='3018500'>it's</span> <span
  m='3018600'>got</span> <span m='3018750'>a</span> <span
  m='3018810'>Fibonacci</span> <span m='3019500'>heap.</span> <span
  m='3020480'>And</span> <span m='3020620'>you</span> <span
  m='3020700'>might</span> <span m='3020860'>learn</span> <span
  m='3021050'>about</span> <span m='3021250'>it</span> <span
  m='3021350'>in</span> <span m='3021440'>6046.</span> </p><p><span
  m='3022780'>The</span> <span m='3022890'>Fibonacci</span> <span
  m='3023400'>heap</span> <span m='3024310'>is</span> <span
  m='3024890'>an</span> <span m='3025050'>amortized</span> <span
  m='3025510'>data</span> <span m='3025740'>structure</span> <span
  m='3027440'>that</span> <span m='3027600'>has</span> <span
  m='3028280'>theta</span> <span m='3028530'>log</span> <span
  m='3028710'>v</span> <span m='3029160'>for</span> <span
  m='3029520'>extract-min.</span> <span m='3031980'>And</span> <span
  m='3032500'>theta</span> <span m='3032830'>one</span> <span
  m='3034110'>amortized</span> <span m='3034700'>time</span> <span
  m='3038210'>for</span> <span m='3040590'>decrease</span> <span
  m='3041010'>key.</span> <span m='3043090'>And</span> <span
  m='3043400'>what's</span> <span m='3043590'>nice</span> <span
  m='3043800'>about</span> <span m='3044010'>it</span> <span
  m='3044150'>is</span> <span m='3044300'>that,</span> <span
  m='3044890'>once</span> <span m='3045080'>you</span> <span
  m='3045160'>do</span> <span m='3045270'>that,</span> <span
  m='3046260'>you</span> <span m='3046360'>end</span> <span
  m='3046420'>up</span> <span m='3046580'>with</span> <span
  m='3047050'>theta</span> <span m='3048290'>v</span> <span
  m='3048500'>log</span> <span m='3048820'>v</span> <span
  m='3049720'>plus</span> <span m='3050320'>e</span> <span
  m='3051490'>time.</span> </p><p><span m='3052320'>And</span> <span
  m='3052490'>that's</span> <span m='3054220'>the</span> <span
  m='3054340'>complexity</span> <span m='3054830'>I</span> <span
  m='3054920'>put</span> <span m='3055030'>up</span> <span
  m='3055290'>way</span> <span m='3055470'>back,</span> <span
  m='3056580'>I</span> <span m='3056630'>guess,</span> <span
  m='3056850'>last</span> <span m='3057110'>Thursday.</span> <span
  m='3059610'>So</span> <span m='3059770'>that's</span> <span
  m='3060000'>to</span> <span m='3060060'>show you,</span> <span
  m='3060400'>with</span> <span m='3060560'>respect</span> <span
  m='3060870'>to</span> <span m='3061770'>two</span> <span
  m='3062140'>special</span> <span m='3062510'>cases,</span> <span
  m='3064000'>we</span> <span m='3064020'>have</span> <span
  m='3065110'>the</span> <span m='3065580'>DAGs,</span> <span
  m='3066290'>which</span> <span m='3066510'>are</span> <span
  m='3066970'>linear</span> <span m='3067390'>time,</span> <span
  m='3067690'>essentially.</span> <span m='3068930'>And</span> <span
  m='3070550'>Dijkstra,</span> <span m='3071480'>with</span> <span
  m='3071830'>amortized,</span> <span m='3072620'>and</span> <span
  m='3072770'>their</span> <span m='3072890'>proper</span> <span
  m='3073220'>data</span> <span m='3073420'>structure,</span> <span
  m='3074180'>also,</span> <span m='3074640'>essentially,</span> <span
  m='3075120'>linear</span> <span m='3075390'>time.</span> <span
  m='3076145'>Right?</span> </p><p><span m='3076600'>Next</span> <span
  m='3076800'>time,</span> <span m='3077010'>we'll</span> <span
  m='3077080'>look</span> <span m='3077270'>at</span> <span
  m='3077400'>the</span> <span m='3077540'>general</span> <span
  m='3077900'>case</span> <span m='3078210'>where</span> <span
  m='3078330'>we</span> <span m='3078440'>have</span> <span
  m='3078880'>potentially</span> <span m='3079280'>negative</span> <span
  m='3079620'>cycles.</span> <span m='3080550'>And</span> <span
  m='3081040'>we</span> <span m='3081160'>end</span> <span m='3081320'>up</span>
  <span m='3081510'>with</span> <span m='3081760'>algorithms</span> <span
  m='3082210'>that</span> <span m='3082320'>have</span> <span
  m='3082910'>greater</span> <span m='3083170'>complexity.</span> <span
  m='3084070'>See</span> <span m='3084370'>you next</span> <span
  m='3084670'>time.</span> </p>
uid: 038a396a88e9e2ec70b26136118f7e00
type: courses
layout: video
---
