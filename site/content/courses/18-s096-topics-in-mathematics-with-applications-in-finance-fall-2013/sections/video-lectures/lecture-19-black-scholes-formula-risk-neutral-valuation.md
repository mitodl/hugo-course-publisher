---
about_this_resource_text: >-
  <p><strong>Description:</strong> This is a lecture on risk-neutral pricing,
  featuring the Black-Scholes formula and risk-neutral valuation.</p>
  <p><strong>Instructor:</strong> Dr. Vasily Strela</p>
embedded_media:
  - id: Video-YouTube-Stream
    media_location: TnS8kI_KuJc
    parent_uid: 9b6e0e7955ed6dede9cb1596c955d5c7
    title: Video-YouTube-Stream
    type: Video
    uid: 8530489a5f059a09d7293fd2a4c2f77a
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/TnS8kI_KuJc/default.jpg'
    parent_uid: 9b6e0e7955ed6dede9cb1596c955d5c7
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 092f71b08159dc73248807bc28741426
  - id: Video-iTunesU-MP4
    media_location: 'https://itunes.apple.com/us/itunes-u/id954073595'
    parent_uid: 9b6e0e7955ed6dede9cb1596c955d5c7
    title: Video-iTunes U-MP4
    type: Video
    uid: 1288cf726b08a7ce70f802d4cba018f6
  - id: Video-InternetArchive-MP4
    media_location: 'http://www.archive.org/download/MIT18.S096F13/MIT18_S096F13_lec19_300k.mp4'
    parent_uid: 9b6e0e7955ed6dede9cb1596c955d5c7
    title: Video-Internet Archive-MP4
    type: Video
    uid: 17304b78310bc709629ba9fe409c23cd
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: TnS8kI_KuJc
    parent_uid: 9b6e0e7955ed6dede9cb1596c955d5c7
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: a9adb817d378a5216c8c7813504e7df8
  - id: TnS8kI_KuJc.srt
    parent_uid: 9b6e0e7955ed6dede9cb1596c955d5c7
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-s096-topics-in-mathematics-with-applications-in-finance-fall-2013/video-lectures/lecture-19-black-scholes-formula-risk-neutral-valuation/TnS8kI_KuJc.srt
    title: 3play caption file
    type: null
    uid: d0e437a0d18d3b5f69e4bea95ac627b7
  - id: TnS8kI_KuJc.pdf
    parent_uid: 9b6e0e7955ed6dede9cb1596c955d5c7
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-s096-topics-in-mathematics-with-applications-in-finance-fall-2013/video-lectures/lecture-19-black-scholes-formula-risk-neutral-valuation/TnS8kI_KuJc.pdf
    title: 3play pdf file
    type: null
    uid: e7f5a44f61593657a8215a9b824a705b
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 9b6e0e7955ed6dede9cb1596c955d5c7
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: df5835be909cb0e438953ea483a420cf
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 9b6e0e7955ed6dede9cb1596c955d5c7
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 3217306b129204aaaf8dda7719b958ad
inline_embed_id: '65182823lecture19:black-scholesformula,risk-neutralvaluation12721025'
parent_uid: d23a85587c0c7524ea054e655c999532
related_resources_text: ''
short_url: lecture-19-black-scholes-formula-risk-neutral-valuation
technical_location: >-
  https://ocw.mit.edu/courses/mathematics/18-s096-topics-in-mathematics-with-applications-in-finance-fall-2013/video-lectures/lecture-19-black-scholes-formula-risk-neutral-valuation
title: 'Lecture  19: Black-Scholes Formula, Risk-neutral Valuation'
transcript: >-
  <p><span m='60'>The</span> <span m='190'>following</span> <span
  m='630'>content</span> <span m='1220'>is</span> <span m='1340'>provided</span>
  <span m='1780'>under</span> <span m='2060'>a</span> <span
  m='2100'>Creative</span> <span m='2500'>Commons</span> <span
  m='2910'>license.</span> <span m='4019'>Your</span> <span
  m='4210'>support</span> <span m='4710'>will</span> <span m='4870'>help</span>
  <span m='5110'>MIT</span> <span m='5570'>OpenCourseWare</span> <span
  m='6360'>continue</span> <span m='6870'>to</span> <span m='6950'>offer</span>
  <span m='7360'>high</span> <span m='7600'>quality</span> <span
  m='8119'>educational</span> <span m='8750'>resources</span> <span
  m='9370'>for</span> <span m='9520'>free.</span> <span m='10730'>To</span>
  <span m='10830'>make</span> <span m='10940'>a</span> <span
  m='10980'>donation</span> <span m='11670'>or</span> <span
  m='11940'>view</span> <span m='12380'>additional</span> <span
  m='12800'>materials</span> <span m='13340'>from</span> <span
  m='13490'>hundreds</span> <span m='13920'>of</span> <span m='14030'>MIT</span>
  <span m='14460'>courses,</span> <span m='15580'>visit</span> <span
  m='15780'>MIT</span> <span m='16210'>OpenCourseWare</span> <span
  m='17250'>at</span> <span m='17420'>ocw.mit.edu.</span> </p><p><span
  m='22190'>PROFESSOR: So</span> <span m='22440'>let's</span> <span
  m='22700'>start</span> <span m='23825'>with</span> <span m='24090'>a</span>
  <span m='24180'>simple</span> <span m='24680'>but</span> <span
  m='25060'>quite</span> <span m='25370'>illustrative</span> <span
  m='26310'>example.</span> <span m='27520'>So</span> <span
  m='28620'>suppose</span> <span m='28930'>you're a</span> <span
  m='29130'>bookie.</span> <span m='30010'>And</span> <span
  m='30190'>what</span> <span m='30400'>a bookie</span> <span
  m='30720'>does--</span> <span m='32509'>he</span> <span m='33315'>sets</span>
  <span m='34150'>bets</span> <span m='35850'>on</span> <span
  m='36020'>the</span> <span m='36100'>horses,</span> <span
  m='36550'>sets</span> <span m='37500'>the</span> <span m='37690'>odds,</span>
  <span m='38660'>and</span> <span m='38860'>then</span> <span
  m='39040'>pays</span> <span m='39480'>money</span> <span
  m='39780'>back.</span> <span m='40330'>Probably</span> <span
  m='40780'>collects</span> <span m='41280'>a</span> <span m='41380'>fee</span>
  <span m='42740'>somewhere</span> <span m='43100'>in</span> <span
  m='43180'>between.</span> </p><p><span m='46050'>So</span> <span
  m='46710'>suppose</span> <span m='47890'>he</span> <span m='48120'>is</span>
  <span m='48250'>a</span> <span m='48350'>good</span> <span
  m='48560'>bookie</span> <span m='48780'>and</span> <span m='49890'>he</span>
  <span m='50400'>knows</span> <span m='50730'>quite</span> <span
  m='50990'>well</span> <span m='51170'>the</span> <span
  m='51250'>horses,</span> <span m='51710'>and</span> <span
  m='51840'>there</span> <span m='52000'>are</span> <span m='52070'>two</span>
  <span m='52210'>horses.</span> <span m='54370'>He</span> <span
  m='54570'>knows</span> <span m='54875'>that</span> <span m='55180'>for</span>
  <span m='55370'>sure</span> <span m='55710'>one</span> <span
  m='55890'>horse</span> <span m='56230'>has</span> <span m='56470'>20%</span>
  <span m='57090'>chance</span> <span m='57350'>of</span> <span
  m='57420'>winning and</span> <span m='57670'>another</span> <span
  m='58210'>horse has</span> <span m='59040'>80%</span> <span
  m='59680'>chance</span> <span m='59930'>of</span> <span
  m='60060'>winning.</span> <span m='61360'>Obviously,</span> <span
  m='61740'>the</span> <span m='61850'>general</span> <span
  m='62210'>public</span> <span m='62530'>doesn't</span> <span
  m='62870'>have</span> <span m='63960'>all of</span> <span
  m='64209'>this</span> <span m='64390'>information.</span> <span
  m='65019'>So</span> <span m='65470'>they</span> <span m='65690'>place</span>
  <span m='66090'>a</span> <span m='66160'>bet</span> <span
  m='66450'>slightly</span> <span m='66870'>differently.</span> <span
  m='67940'>And</span> <span m='68320'>then</span> <span m='68630'>there</span>
  <span m='68860'>is</span> <span m='69060'>$10,000</span> <span
  m='69730'>bet</span> <span m='70000'>on</span> <span m='71230'>one</span>
  <span m='71440'>horse</span> <span m='71950'>and</span> <span
  m='72210'>$50,000</span> <span m='72960'>bet</span> <span m='73180'>on</span>
  <span m='73660'>another</span> <span m='73980'>horse.</span> </p><p><span
  m='76250'>Well,</span> <span m='76540'>bookie</span> <span m='77110'>is</span>
  <span m='77380'>sure</span> <span m='77830'>that</span> <span
  m='77980'>he</span> <span m='78370'>possesses</span> <span
  m='79180'>good</span> <span m='79390'>information.</span> <span
  m='80040'>So</span> <span m='80370'>he--</span> <span m='80990'>suppose</span>
  <span m='81400'>he</span> <span m='81530'>sets</span> <span
  m='82230'>the</span> <span m='82430'>odds</span> <span
  m='83200'>according</span> <span m='83860'>to</span> <span
  m='85150'>real</span> <span m='85460'>life</span> <span
  m='85790'>probability.</span> <span m='86450'>So</span> <span
  m='86570'>he</span> <span m='86770'>sets</span> <span m='87050'>it</span>
  <span m='87160'>four</span> <span m='87380'>to</span> <span
  m='87470'>one.</span> <span m='89570'>What</span> <span m='89820'>would</span>
  <span m='89990'>be</span> <span m='90640'>possible</span> <span
  m='91140'>outcomes</span> <span m='91630'>of</span> <span m='91790'>the</span>
  <span m='91850'>race</span> <span m='92810'>for</span> <span
  m='93010'>him?</span> <span m='94660'>Monetary.</span> </p><p><span
  m='95500'>So</span> <span m='96540'>suppose</span> <span m='97030'>the</span>
  <span m='97130'>first</span> <span m='97360'>horse</span> <span
  m='97670'>wins.</span> <span m='98820'>Then</span> <span m='99000'>what</span>
  <span m='99150'>happens?</span> <span m='100420'>He</span> <span
  m='101280'>has</span> <span m='101640'>to</span> <span m='101770'>pay</span>
  <span m='101970'>back</span> <span m='102710'>$10,000</span> <span
  m='103220'>and</span> <span m='103770'>four</span> <span
  m='104010'>times</span> <span m='104320'>more.</span> <span
  m='105280'>So</span> <span m='105660'>he</span> <span m='105890'>pays</span>
  <span m='106120'>out</span> <span m='106710'>$50,000.</span> <span
  m='108130'>And</span> <span m='108320'>he receives</span> <span
  m='108920'>$60,000,</span> <span m='109280'>right?</span> <span
  m='110510'>So</span> <span m='110910'>he</span> <span m='113060'>can</span>
  <span m='113290'>keep</span> <span m='113770'>$10,000</span> <span
  m='114200'>out of it.</span> <span m='115640'>OK.</span> </p><p><span
  m='116780'>So</span> <span m='117020'>what</span> <span
  m='117270'>happens</span> <span m='117640'>is</span> <span
  m='118190'>the</span> <span m='118420'>other</span> <span
  m='119000'>more</span> <span m='119220'>probable</span> <span
  m='119630'>horse</span> <span m='120040'>wins.</span> <span
  m='121360'>Well,</span> <span m='122280'>he'll</span> <span
  m='122520'>have</span> <span m='122760'>to</span> <span m='122870'>pay</span>
  <span m='123040'>back</span> <span m='123600'>the</span> <span
  m='123720'>$50,000</span> <span m='124896'>and one</span> <span
  m='125290'>quarter</span> <span m='125590'>of</span> <span
  m='125700'>it,</span> <span m='126240'>which</span> <span m='126410'>is</span>
  <span m='127586'>$12.25.</span> <span m='130139'>So</span> <span
  m='130720'>at</span> <span m='130889'>the</span> <span m='131000'>end,</span>
  <span m='131210'>he'll</span> <span m='131450'>pay</span> <span m='132270'>62
  1/2</span> <span m='133600'>thousand,</span> <span m='134366'>while</span>
  <span m='134750'>he</span> <span m='134910'>collected</span> <span
  m='135165'>$60,000,</span> <span m='135840'>out</span> <span
  m='136100'>right?</span> </p><p><span m='136690'>So</span> <span
  m='136940'>he</span> <span m='137100'>will--</span> <span m='137320'>in</span>
  <span m='137470'>this</span> <span m='137650'>situation,</span> <span
  m='137920'>he will</span> <span m='138190'>lose</span> <span
  m='140990'>$2,500.</span> <span m='143630'>Well,</span> <span
  m='144250'>all</span> <span m='144460'>in</span> <span m='144580'>all,</span>
  <span m='144970'>he</span> <span m='145180'>expects</span> <span
  m='145630'>to</span> <span m='146040'>make</span> <span
  m='146280'>nothing.</span> <span m='146720'>So</span> <span
  m='147230'>he</span> <span m='147440'>probably</span> <span
  m='147920'>could</span> <span m='148110'>collect</span> <span
  m='148480'>enough</span> <span m='148760'>fees</span> <span
  m='149690'>to</span> <span m='149830'>cover</span> <span m='150580'>his</span>
  <span m='150830'>potential</span> <span m='151370'>loss.</span> <span
  m='152560'>But</span> <span m='152750'>there is</span> <span
  m='153050'>certainly</span> <span m='153360'>a</span> <span
  m='153880'>variability</span> <span m='154205'>in outcomes.</span> <span
  m='155380'>He</span> <span m='155510'>can</span> <span m='155790'>win</span>
  <span m='156060'>a</span> <span m='156120'>lot.</span> <span
  m='156460'>He</span> <span m='156580'>can</span> <span m='156750'>lose</span>
  <span m='157090'>some.</span> </p><p><span m='159090'>Now,</span> <span
  m='160350'>what</span> <span m='160630'>if</span> <span m='160870'>he</span>
  <span m='161620'>forgets</span> <span m='162170'>about</span> <span
  m='162450'>his</span> <span m='162650'>knowledge</span> <span
  m='162980'>about</span> <span m='164000'>the</span> <span
  m='164573'>real</span> <span m='165380'>life</span> <span
  m='165750'>probabilities</span> <span m='166340'>of</span> <span
  m='166500'>horses</span> <span m='167060'>winning</span> <span
  m='167330'>or</span> <span m='167410'>losing</span> <span
  m='168390'>and</span> <span m='168590'>instead</span> <span
  m='169180'>sets</span> <span m='169560'>bets</span> <span
  m='170220'>according</span> <span m='171150'>to</span> <span
  m='171550'>the</span> <span m='171930'>amount</span> <span
  m='172340'>which</span> <span m='172520'>we are</span> <span
  m='172780'>already</span> <span m='173140'>bet.</span> <span
  m='173870'>According</span> <span m='174280'>to</span> <span
  m='174370'>the</span> <span m='174470'>market,</span> <span
  m='175050'>effectively.</span> <span m='176190'>So</span> <span
  m='176740'>what</span> <span m='176990'>if</span> <span m='177110'>he</span>
  <span m='177280'>sets</span> <span m='178942'>the</span> <span
  m='179330'>odds</span> <span m='179680'>five</span> <span m='180000'>to</span>
  <span m='180100'>one,</span> <span m='180970'>according</span> <span
  m='181430'>to</span> <span m='181510'>the</span> <span m='182220'>bets</span>
  <span m='182660'>placed?</span> </p><p><span m='183910'>Well,</span> <span
  m='184200'>in</span> <span m='184340'>this</span> <span
  m='184510'>situation,</span> <span m='184880'>if</span> <span
  m='185010'>the</span> <span m='185080'>first</span> <span
  m='185430'>horse</span> <span m='185800'>wins,</span> <span
  m='186210'>he</span> <span m='186450'>pays</span> <span m='187260'>back</span>
  <span m='187950'>10</span> <span m='188620'>plus</span> <span
  m='189400'>5</span> <span m='189770'>times</span> <span m='190180'>10,</span>
  <span m='190590'>so</span> <span m='190830'>60.</span> <span
  m='192790'>He</span> <span m='193020'>is</span> <span m='193160'>0.</span>
  <span m='193950'>And</span> <span m='194150'>if the</span> <span
  m='194400'>second</span> <span m='194770'>horse</span> <span
  m='195150'>wins,</span> <span m='195830'>he</span> <span
  m='196110'>pays</span> <span m='196440'>back</span> <span m='197460'>50</span>
  <span m='198020'>plus</span> <span m='198450'>1/5</span> <span
  m='198970'>of</span> <span m='199180'>50,</span> <span m='199710'>plus</span>
  <span m='200020'>another</span> <span m='200320'>10.</span> <span
  m='200950'>Again</span> <span m='201290'>60.</span> </p><p><span
  m='202460'>So</span> <span m='202610'>no</span> <span m='202820'>matter</span>
  <span m='203140'>which</span> <span m='203570'>horse</span> <span
  m='203910'>wins,</span> <span m='205390'>he</span> <span
  m='205910'>will</span> <span m='206200'>get</span> <span m='206420'>0.</span>
  <span m='206850'>We're</span> <span m='207440'>100%</span> <span
  m='208290'>sure.</span> <span m='209250'>And if</span> <span
  m='209340'>he</span> <span m='210740'>collects</span> <span
  m='211200'>some</span> <span m='211770'>fee</span> <span m='212090'>on</span>
  <span m='212250'>top of it,</span> <span m='213030'>he</span> <span
  m='213180'>will</span> <span m='213320'>make</span> <span m='213600'>a</span>
  <span m='214120'>riskless</span> <span m='214500'>profit.</span> <span
  m='215940'>And</span> <span m='216070'>that's</span> <span
  m='216240'>how,</span> <span m='216540'>actually,</span> <span
  m='217010'>bookies</span> <span m='217660'>are</span> <span
  m='217920'>operating.</span> </p><p><span m='220300'>So</span> <span
  m='221280'>it's</span> <span m='221530'>a</span> <span
  m='221590'>simple</span> <span m='221870'>example.</span> <span
  m='222270'>But</span> <span m='222600'>it</span> <span m='222860'>gives</span>
  <span m='223250'>us</span> <span m='223730'>a</span> <span
  m='223900'>first</span> <span m='224180'>idea</span> <span
  m='224310'>of</span> <span m='224530'>how a</span> <span
  m='224830'>risk-neutral</span> <span m='226190'>framework</span> <span
  m='226730'>and</span> <span m='226850'>risk-neutral</span> <span
  m='227420'>pricing</span> <span m='228410'>works.</span> <span
  m='230670'>So</span> <span m='230980'>we</span> <span m='231130'>are,</span>
  <span m='231240'>here,</span> <span m='231520'>not</span> <span
  m='231910'>in</span> <span m='232030'>the</span> <span
  m='232140'>business</span> <span m='232530'>of</span> <span
  m='233290'>making</span> <span m='233480'>bets</span> <span
  m='233860'>on</span> <span m='233920'>horses.</span> <span m='234850'>We
  are</span> <span m='235080'>actually in</span> <span m='235440'>the</span>
  <span m='235520'>business</span> <span m='235900'>of</span> <span
  m='236520'>pricing</span> <span m='236940'>derivatives.</span> <span
  m='238860'>So</span> <span m='239490'>we</span> <span m='239680'>will</span>
  <span m='239900'>talk</span> <span m='240070'>about</span> <span
  m='240330'>the</span> <span m='240420'>simplest</span> <span
  m='240790'>possible</span> <span m='241080'>derivatives--</span> <span
  m='241900'>mostly</span> <span m='243250'>derivatives</span> <span
  m='244700'>on</span> <span m='244970'>stocks.</span> <span
  m='246160'>But</span> <span m='246470'>there</span> <span
  m='247120'>are</span> <span m='247220'>more</span> <span
  m='247490'>complicated</span> <span m='247980'>derivatives</span> <span
  m='248500'>which</span> <span m='250470'>underline</span> <span
  m='251020'>for</span> <span m='251210'>which</span> <span
  m='251830'>could</span> <span m='251950'>be</span> <span
  m='252290'>interest</span> <span m='252760'>rates,</span> <span
  m='253090'>bonds,</span> <span m='253550'>swaps,</span> <span
  m='254720'>commodities,</span> <span m='255860'>whatever.</span> </p><p><span
  m='257950'>So a</span> <span m='258149'>derivative</span> <span
  m='258620'>contract</span> <span m='259120'>is</span> <span
  m='260420'>some--</span> <span m='262540'>in</span> <span
  m='263330'>general</span> <span m='263620'>speaking,</span> <span
  m='264000'>a</span> <span m='264150'>formal</span> <span
  m='264730'>pay-out</span> <span m='266340'>connected</span> <span
  m='266840'>to</span> <span m='266920'>underline.</span> <span
  m='267810'>Usually,</span> <span m='268330'>the</span> <span
  m='268420'>underline</span> <span m='268900'>is</span> <span
  m='269030'>a</span> <span m='269080'>liquid</span> <span
  m='269430'>instrument</span> <span m='269900'>which</span> <span
  m='270010'>is</span> <span m='271120'>traded</span> <span m='271510'>on</span>
  <span m='271640'>exchanges.</span> <span m='272610'>And</span> <span
  m='272790'>derivative</span> <span m='273820'>may be</span> <span
  m='274140'>traded</span> <span m='274500'>on</span> <span
  m='274630'>exchanges.</span> <span m='275600'>Actually,</span> <span
  m='276880'>quite</span> <span m='277140'>a</span> <span m='277180'>few</span>
  <span m='277460'>equity</span> <span m='277840'>options</span> <span
  m='278300'>are</span> <span m='278490'>traded on</span> <span
  m='278920'>exchanges.</span> <span m='279250'>But</span> <span
  m='279450'>in</span> <span m='279530'>general,</span> <span m='279860'>they
  are</span> <span m='281840'>over-the-counter</span> <span
  m='282460'>contracts</span> <span m='283170'>where</span> <span
  m='283480'>two</span> <span m='283640'>counter parties</span> <span
  m='284560'>just</span> <span m='284840'>agree</span> <span
  m='285610'>on</span> <span m='285750'>some</span> <span m='285980'>kind</span>
  <span m='286230'>of</span> <span m='286340'>pay-out.</span> </p><p><span
  m='288420'>One</span> <span m='288720'>of</span> <span m='288900'>the</span>
  <span m='289000'>simpler</span> <span m='290610'>derivatives</span> <span
  m='291120'>is</span> <span m='291720'>a</span> <span m='291790'>forward</span>
  <span m='292230'>contract.</span> <span m='293540'>So</span> <span
  m='293730'>what</span> <span m='293910'>is</span> <span m='294050'>a</span>
  <span m='294120'>forward</span> <span m='294460'>contract?</span> <span
  m='294960'>A forward</span> <span m='295280'>contract</span> <span
  m='295730'>is</span> <span m='297300'>a</span> <span
  m='297400'>contract</span> <span m='297890'>where</span> <span
  m='299210'>one</span> <span m='299510'>party</span> <span
  m='300420'>agrees</span> <span m='301300'>to</span> <span
  m='301440'>buy</span> <span m='301780'>an</span> <span m='301950'>asset</span>
  <span m='302240'>from</span> <span m='302460'>another</span> <span
  m='303100'>party</span> <span m='303990'>for</span> <span m='304280'>a</span>
  <span m='304330'>price</span> <span m='304710'>which</span> <span
  m='304850'>is</span> <span m='304950'>agreed</span> <span
  m='305300'>today.</span> <span m='307030'>Usually,</span> <span
  m='311025'>this</span> <span m='311420'>forward</span> <span
  m='311850'>price</span> <span m='312330'>is</span> <span m='312940'>set</span>
  <span m='313220'>in</span> <span m='313320'>such</span> <span
  m='313580'>a</span> <span m='313660'>way</span> <span m='313890'>that</span>
  <span m='314380'>right</span> <span m='314660'>now,</span> <span
  m='315400'>no</span> <span m='315610'>money</span> <span
  m='315910'>changes</span> <span m='316270'>hands.</span> <span
  m='317187'>Right?</span> </p><p><span m='320040'>And</span> <span
  m='320580'>here</span> <span m='320810'>is</span> <span m='320910'>an</span>
  <span m='321000'>example.</span> <span m='322600'>Well,</span> <span
  m='322810'>suppose</span> <span m='323140'>there is</span> <span
  m='323380'>a</span> <span m='323450'>stock</span> <span
  m='323750'>which,</span> <span m='324450'>right</span> <span
  m='324730'>now,</span> <span m='325130'>is</span> <span
  m='325330'>priced</span> <span m='325700'>at</span> <span
  m='325910'>$80.</span> <span m='327020'>And</span> <span
  m='327360'>this</span> <span m='327540'>is</span> <span m='327910'>the</span>
  <span m='328040'>forward</span> <span m='328860'>for</span> <span
  m='329100'>two</span> <span m='329220'>years.</span> <span
  m='329560'>So</span> <span m='329780'>somebody</span> <span
  m='330250'>agrees</span> <span m='330870'>to</span> <span
  m='331190'>buy</span> <span m='331620'>the</span> <span
  m='331730'>stock</span> <span m='332580'>in</span> <span m='332770'>two</span>
  <span m='332890'>years</span> <span m='333350'>for</span> <span
  m='333520'>this</span> <span m='333730'>price.</span> <span
  m='335790'>And</span> <span m='336130'>not</span> <span
  m='336310'>surprisingly,</span> <span m='337090'>I</span> <span
  m='337280'>somehow</span> <span m='337770'>set this</span> <span
  m='338240'>price</span> <span m='339010'>such</span> <span
  m='339380'>that</span> <span m='339940'>currently</span> <span
  m='341870'>the</span> <span m='342020'>value</span> <span m='342180'>of</span>
  <span m='342370'>the</span> <span m='342470'>contract</span> <span
  m='342920'>is</span> <span m='343140'>0.</span> </p><p><span
  m='344660'>And</span> <span m='344820'>we'll</span> <span
  m='344960'>see</span> <span m='345160'>how</span> <span m='345630'>I'll
  come</span> <span m='345830'>up</span> <span m='346010'>with</span> <span
  m='346140'>the</span> <span m='346240'>price.</span> <span
  m='346910'>So</span> <span m='347110'>this</span> <span m='347690'>blue</span>
  <span m='347950'>line</span> <span m='348280'>is</span> <span
  m='348460'>actually</span> <span m='348730'>the</span> <span
  m='348810'>pay-out</span> <span m='349340'>what will</span> <span
  m='349590'>happen</span> <span m='349910'>at</span> <span
  m='350230'>the</span> <span m='350360'>end.</span> <span
  m='351055'>Right?</span> <span m='352450'>The</span> <span
  m='353200'>pay-out,</span> <span m='353540'>depending--</span> <span
  m='354220'>the</span> <span m='355150'>graph</span> <span m='355990'>of</span>
  <span m='356220'>F</span> <span m='357100'>at</span> <span
  m='357400'>time</span> <span m='357640'>T</span> <span m='357900'>to</span>
  <span m='358370'>a</span> <span m='358520'>determination</span> <span
  m='359240'>time</span> <span m='359520'>or</span> <span
  m='359730'>expiry--</span> <span m='362330'>how</span> <span
  m='362560'>it</span> <span m='362660'>depends</span> <span
  m='363110'>on</span> <span m='363260'>the</span> <span m='363350'>stock</span>
  <span m='363610'>price.</span> <span m='364350'>Right?</span> </p><p><span
  m='364630'>So</span> <span m='365010'>obviously,</span> <span
  m='365620'>the</span> <span m='365780'>pay-out</span> <span
  m='366200'>is</span> <span m='366340'>S</span> <span m='366590'>minus</span>
  <span m='366950'>K,</span> <span m='367170'>where</span> <span
  m='368260'>S</span> <span m='368760'>is</span> <span m='369180'>the</span>
  <span m='369270'>stock</span> <span m='369540'>price,</span> <span
  m='369820'>so</span> <span m='369970'>it's</span> <span m='370140'>a</span>
  <span m='370190'>linear</span> <span m='370520'>function.</span> <span
  m='372030'>It</span> <span m='372160'>turns</span> <span m='372380'>out</span>
  <span m='372590'>that</span> <span m='372710'>the</span> <span
  m='372840'>counter</span> <span m='373140'>price</span> <span
  m='373400'>is</span> <span m='373530'>also</span> <span m='373930'>a
  linear</span> <span m='374270'>function</span> <span m='374710'>but</span>
  <span m='375030'>slightly</span> <span m='375380'>shifted.</span> <span
  m='375840'>And</span> <span m='376000'>we'll</span> <span
  m='376180'>see</span> <span m='377310'>how</span> <span m='377630'>come
  it's</span> <span m='377910'>slightly</span> <span m='378060'>shifted</span>
  <span m='378830'>and</span> <span m='378980'>how</span> <span
  m='379150'>much</span> <span m='379420'>it</span> <span
  m='379500'>should</span> <span m='379830'>be</span> <span
  m='380310'>shifted.</span> <span m='382410'>And</span> <span
  m='382660'>K</span> <span m='383070'>is</span> <span m='384400'>usually</span>
  <span m='385030'>referred</span> <span m='385460'>to</span> <span
  m='385500'>as</span> <span m='385590'>a</span> <span m='385650'>strike</span>
  <span m='386040'>price.</span> </p><p><span m='388090'>Another</span> <span
  m='388470'>slightly</span> <span m='388890'>more</span> <span
  m='389100'>complicated</span> <span m='389700'>contract</span> <span
  m='390400'>is</span> <span m='390630'>called</span> <span m='391130'>a</span>
  <span m='391260'>Call</span> <span m='391630'>option.</span> <span
  m='393200'>So</span> <span m='393410'>if</span> <span
  m='393620'>previously</span> <span m='394150'>the</span> <span
  m='394280'>forward</span> <span m='396350'>is</span> <span
  m='396770'>an</span> <span m='396870'>obligation</span> <span
  m='397570'>to</span> <span m='397670'>buy</span> <span m='398180'>the</span>
  <span m='398490'>asset</span> <span m='398900'>for</span> <span
  m='399500'>an</span> <span m='399600'>agreed</span> <span
  m='399970'>price,</span> <span m='400990'>Call</span> <span
  m='401260'>option</span> <span m='401680'>is</span> <span
  m='401890'>actually</span> <span m='402740'>an</span> <span
  m='402990'>option</span> <span m='404460'>to</span> <span
  m='404610'>buy</span> <span m='405020'>an</span> <span m='405270'>asset</span>
  <span m='406570'>at</span> <span m='406770'>the</span> <span
  m='406870'>agreed</span> <span m='407210'>price</span> <span
  m='407630'>today.</span> <span m='409110'>You</span> <span
  m='409260'>can</span> <span m='409550'>view</span> <span
  m='409710'>it--</span> <span m='410090'>a</span> <span m='410470'>Call</span>
  <span m='410740'>option</span> <span m='410970'>can</span> <span
  m='411130'>be</span> <span m='411210'>viewed</span> <span m='411490'>as</span>
  <span m='411730'>kind</span> <span m='411980'>of</span> <span
  m='412140'>insurance</span> <span m='413070'>that</span> <span
  m='413530'>the--</span> <span m='414760'>against</span> <span m='415280'>the
  asset</span> <span m='415890'>going</span> <span m='416200'>down.</span>
  </p><p><span m='418170'>Basically</span> <span m='419530'>the</span> <span
  m='419690'>pay-out</span> <span m='420050'>is</span> <span
  m='420140'>always</span> <span m='420430'>positive.</span> <span
  m='421090'>You</span> <span m='421220'>can</span> <span
  m='421420'>never</span> <span m='421570'>lose</span> <span
  m='421860'>money.</span> <span m='422100'>On</span> <span
  m='422430'>the</span> <span m='422530'>forward,</span> <span
  m='422810'>you</span> <span m='422940'>can</span> <span m='423160'>lose</span>
  <span m='423360'>money.</span> <span m='423660'>You</span> <span
  m='423760'>agree</span> <span m='423890'>on</span> <span m='424000'>the</span>
  <span m='424070'>price.</span> <span m='425240'>The</span> <span
  m='425380'>asset</span> <span m='425890'>ends</span> <span
  m='426090'>up</span> <span m='426250'>being</span> <span
  m='426510'>lower</span> <span m='426930'>than</span> <span
  m='427100'>this</span> <span m='427310'>price,</span> <span
  m='427540'>but</span> <span m='427670'>you</span> <span
  m='427790'>still</span> <span m='428200'>have</span> <span
  m='428410'>to</span> <span m='428510'>buy</span> <span m='428760'>it.</span>
  <span m='429320'>Right?</span> </p><p><span m='429770'>Here,</span> <span
  m='430690'>if</span> <span m='432540'>the</span> <span m='432700'>asset</span>
  <span m='433140'>ends</span> <span m='433410'>up</span> <span
  m='433700'>at</span> <span m='434130'>expiry</span> <span
  m='434720'>below</span> <span m='435140'>strike</span> <span
  m='435550'>price</span> <span m='436470'>or</span> <span m='437220'>out</span>
  <span m='437440'>of the</span> <span m='437640'>money,</span> <span
  m='438760'>then</span> <span m='439620'>the</span> <span
  m='439790'>pay-out</span> <span m='440150'>will</span> <span
  m='440280'>be</span> <span m='440350'>0.</span> <span m='441720'>If,</span>
  <span m='442820'>on</span> <span m='442970'>the</span> <span
  m='443030'>other</span> <span m='443150'>hand,</span> <span
  m='444010'>it</span> <span m='444330'>ends</span> <span m='444640'>up</span>
  <span m='445160'>being</span> <span m='445540'>above</span> <span
  m='446030'>the</span> <span m='446130'>strike</span> <span
  m='446480'>price</span> <span m='446880'>or</span> <span
  m='447230'>it's</span> <span m='447480'>called,</span> <span
  m='448170'>the</span> <span m='448380'>option</span> <span
  m='448730'>is</span> <span m='449000'>in</span> <span m='449190'>the</span>
  <span m='449330'>money.</span> <span m='450580'>Then</span> <span
  m='451820'>the</span> <span m='451990'>pay-out</span> <span
  m='452380'>will</span> <span m='452560'>be</span> <span m='453710'>S</span>
  <span m='454000'>minus</span> <span m='454370'>K</span> <span
  m='455470'>as</span> <span m='455860'>before.</span> </p><p><span
  m='457530'>So</span> <span m='458280'>in</span> <span
  m='458570'>mathematical</span> <span m='459110'>terms,</span> <span
  m='460752'>the</span> <span m='461210'>pay-out</span> <span
  m='461590'>is</span> <span m='461760'>maximum</span> <span
  m='462570'>of</span> <span m='462810'>S</span> <span m='463100'>minus</span>
  <span m='463460'>K</span> <span m='463720'>and</span> <span
  m='463900'>0.</span> <span m='464430'>Right?</span> <span
  m='464990'>And</span> <span m='465200'>that's</span> <span
  m='465400'>what</span> <span m='465540'>happens</span> <span
  m='466910'>at</span> <span m='467080'>expiry</span> <span
  m='467520'>time--</span> <span m='467740'>this</span> <span
  m='467990'>blue</span> <span m='468220'>line.</span> <span
  m='469730'>So</span> <span m='469800'>what</span> <span m='470040'>is</span>
  <span m='470220'>the</span> <span m='470290'>price</span> <span
  m='470830'>of</span> <span m='471030'>this</span> <span
  m='471260'>option</span> <span m='471650'>now?</span> <span
  m='473350'>Well,</span> <span m='473550'>obviously</span> <span
  m='475710'>it</span> <span m='475860'>should</span> <span m='476090'>be</span>
  <span m='476360'>slightly</span> <span m='476780'>above</span> <span
  m='477250'>because</span> <span m='479160'>even</span> <span
  m='479600'>if</span> <span m='479950'>now</span> <span m='480605'>the</span>
  <span m='480980'>asset</span> <span m='481280'>is</span> <span
  m='481430'>slightly</span> <span m='481810'>out</span> <span
  m='482050'>of</span> <span m='482140'>the</span> <span
  m='482210'>money--</span> <span m='482450'>below</span> <span
  m='482750'>strike</span> <span m='483050'>price--</span> <span
  m='484050'>there</span> <span m='484300'>is</span> <span
  m='484380'>some</span> <span m='484610'>volatility</span> <span
  m='485080'>to</span> <span m='485240'>it,</span> <span m='485430'>and</span>
  <span m='485570'>there</span> <span m='485830'>is</span> <span
  m='486230'>a</span> <span m='486310'>probability</span> <span
  m='487030'>that</span> <span m='487240'>we</span> <span m='487480'>will</span>
  <span m='487720'>still</span> <span m='488050'>end</span> <span
  m='488270'>up</span> <span m='488500'>in</span> <span m='488660'>the</span>
  <span m='488790'>money</span> <span m='489320'>at</span> <span
  m='489470'>expiry.</span> <span m='490270'>So</span> <span
  m='491050'>you</span> <span m='491430'>would</span> <span m='492200'>be</span>
  <span m='492410'>willing--</span> <span m='492750'>you</span> <span
  m='492900'>should</span> <span m='493170'>be</span> <span
  m='493300'>willing</span> <span m='493660'>to</span> <span
  m='493760'>pay</span> <span m='493970'>something</span> <span
  m='494790'>for</span> <span m='495010'>this.</span> </p><p><span
  m='496190'>Obviously,</span> <span m='496730'>if</span> <span
  m='496830'>it's</span> <span m='497220'>way</span> <span m='497830'>out</span>
  <span m='498090'>of</span> <span m='498180'>the</span> <span
  m='498260'>money,</span> <span m='498530'>it should</span> <span
  m='498740'>be</span> <span m='498820'>0.</span> <span m='499250'>Right?</span>
  <span m='500020'>On</span> <span m='500110'>the</span> <span
  m='500180'>other</span> <span m='500340'>hand,</span> <span
  m='501300'>if</span> <span m='501460'>it's</span> <span m='501770'>way</span>
  <span m='502150'>in</span> <span m='502370'>the</span> <span
  m='502490'>money,</span> <span m='503450'>in</span> <span
  m='503610'>fact,</span> <span m='503900'>it</span> <span
  m='503990'>should</span> <span m='504160'>be</span> <span
  m='504640'>just</span> <span m='504960'>as</span> <span
  m='505100'>forward.</span> <span m='506240'>And</span> <span m='506410'>in
  fact,</span> <span m='506680'>it is.</span> <span m='507120'>We'll</span>
  <span m='507840'>see</span> <span m='508520'>because</span> <span
  m='509380'>the</span> <span m='509520'>probability</span> <span
  m='510170'>for</span> <span m='510370'>the</span> <span
  m='510840'>asset</span> <span m='511580'>going</span> <span
  m='511880'>back</span> <span m='512970'>to</span> <span m='513320'>the</span>
  <span m='513789'>strike</span> <span m='514090'>price</span> <span
  m='514370'>and</span> <span m='514520'>below</span> <span
  m='514850'>will</span> <span m='515000'>be low.</span> <span
  m='516940'>And</span> <span m='517610'>the</span> <span
  m='517840'>Black-Scholes</span> <span m='518460'>equation</span> <span
  m='518850'>and</span> <span m='518980'>Black-Scholes</span> <span
  m='519460'>formula</span> <span m='519880'>is</span> <span
  m='520200'>exactly</span> <span m='520659'>the</span> <span
  m='520780'>solution</span> <span m='521549'>for</span> <span
  m='522049'>this</span> <span m='522500'>curved</span> <span
  m='522799'>line,</span> <span m='523240'>which</span> <span
  m='523490'>we'll</span> <span m='523650'>see</span> <span m='523940'>in</span>
  <span m='524039'>a</span> <span m='524100'>second.</span> </p><p><span
  m='526690'>Another</span> <span m='527980'>simple</span> <span
  m='528350'>contract,</span> <span m='529190'>which</span> <span
  m='529370'>is</span> <span m='529490'>kind</span> <span m='529710'>of</span>
  <span m='529820'>dual</span> <span m='530180'>to</span> <span
  m='530290'>Call</span> <span m='531340'>option,</span> <span
  m='531710'>is</span> <span m='531840'>a</span> <span m='531940'>Put</span>
  <span m='532230'>option.</span> <span m='534110'>So</span> <span
  m='534290'>Put</span> <span m='534520'>option,</span> <span
  m='535290'>on</span> <span m='535470'>the</span> <span
  m='535580'>contrary,</span> <span m='536160'>is</span> <span
  m='537230'>a</span> <span m='537370'>bet</span> <span m='538340'>on</span>
  <span m='538560'>the</span> <span m='538970'>asset</span> <span
  m='539290'>going</span> <span m='539650'>down,</span> <span
  m='540060'>rather</span> <span m='540350'>than</span> <span
  m='540570'>up.</span> <span m='541650'>Right?</span> <span
  m='541890'>So</span> <span m='542100'>the</span> <span
  m='542230'>pay-out</span> <span m='542680'>is</span> <span
  m='543490'>maximum</span> <span m='543890'>of</span> <span m='544290'>K</span>
  <span m='544520'>minus</span> <span m='544990'>S</span> <span
  m='545570'>and</span> <span m='545770'>0.</span> <span m='547290'>So</span>
  <span m='547570'>it's</span> <span m='548490'>kind</span> <span
  m='548710'>of</span> <span m='548750'>reversed.</span> </p><p><span
  m='550490'>Also</span> <span m='550940'>a ramp</span> <span
  m='551160'>function,</span> <span m='552185'>at</span> <span
  m='552590'>maturity.</span> <span m='554730'>And</span> <span
  m='556130'>here</span> <span m='556500'>is</span> <span m='556820'>the</span>
  <span m='556980'>current</span> <span m='557280'>price.</span> <span
  m='559590'>Again,</span> <span m='560460'>even</span> <span
  m='560820'>if</span> <span m='561040'>it's</span> <span m='561320'>in</span>
  <span m='561510'>the</span> <span m='561620'>money--</span> <span
  m='562220'>if</span> <span m='562430'>it's</span> <span m='562620'>way</span>
  <span m='562980'>in</span> <span m='563120'>the</span> <span
  m='563220'>money,</span> <span m='564000'>we</span> <span
  m='564370'>expect</span> <span m='564970'>it</span> <span m='565450'>to</span>
  <span m='565560'>be</span> <span m='565670'>0.</span> <span m='566190'>If
  it's</span> <span m='567680'>way</span> <span m='568270'>in</span> <span
  m='568430'>the</span> <span m='568530'>money,</span> <span
  m='569700'>we</span> <span m='570190'>expect it</span> <span
  m='570630'>to</span> <span m='570710'>be</span> <span
  m='570900'>slightly</span> <span m='572070'>below</span> <span
  m='572450'>forward,</span> <span m='573430'>just</span> <span
  m='573630'>because</span> <span m='573930'>of</span> <span
  m='574040'>this</span> <span m='574180'>counting.</span> </p><p><span
  m='577270'>OK.</span> <span m='578500'>So</span> <span m='580920'>and</span>
  <span m='581340'>here</span> <span m='581615'>are</span> <span
  m='581890'>a</span> <span m='581930'>few--</span> <span
  m='582890'>three</span> <span m='583410'>main</span> <span
  m='583670'>points,</span> <span m='584780'>which we'll</span> <span
  m='585040'>try</span> <span m='585330'>to</span> <span
  m='585850'>follow,</span> <span m='586200'>through</span> <span
  m='587110'>the</span> <span m='587300'>class.</span> <span
  m='589140'>So</span> <span m='589350'>first</span> <span m='589660'>of</span>
  <span m='589710'>all,</span> <span m='590850'>what</span> <span
  m='591080'>we'll</span> <span m='591300'>see--</span> <span
  m='592220'>that</span> <span m='593050'>if</span> <span m='593780'>we</span>
  <span m='593910'>have</span> <span m='594460'>current</span> <span
  m='594750'>price</span> <span m='595090'>of</span> <span m='595200'>the</span>
  <span m='595270'>underline</span> <span m='596570'>and</span> <span
  m='596820'>some</span> <span m='597790'>assumptions</span> <span
  m='599155'>on</span> <span m='599590'>how</span> <span m='600390'>the</span>
  <span m='600860'>market</span> <span m='601430'>or</span> <span
  m='601670'>the</span> <span m='602720'>underline</span> <span
  m='603310'>behaves,</span> <span m='604950'>there</span> <span
  m='605200'>is</span> <span m='605360'>actually</span> <span
  m='606380'>no</span> <span m='606710'>uncertainty</span> <span
  m='608040'>in</span> <span m='608190'>the</span> <span m='608310'>price</span>
  <span m='608630'>of</span> <span m='608710'>the option,</span> <span
  m='610430'>obviously,</span> <span m='611040'>if</span> <span
  m='611230'>we</span> <span m='611340'>fix</span> <span m='611580'>the</span>
  <span m='611680'>pay-out.</span> <span m='612140'>Right?</span> </p><p><span
  m='613380'>So</span> <span m='613550'>somehow</span> <span
  m='613920'>there</span> <span m='614160'>is</span> <span m='614270'>no</span>
  <span m='614410'>uncertainty.</span> <span m='614980'>It's</span> <span
  m='615220'>completely</span> <span m='615660'>deterministic,</span> <span
  m='617710'>once</span> <span m='617980'>we</span> <span m='618270'>know</span>
  <span m='618500'>the</span> <span m='618620'>price</span> <span
  m='619020'>of</span> <span m='619170'>underline.</span> <span
  m='622960'>The</span> <span m='623130'>other</span> <span
  m='625870'>interesting</span> <span m='626310'>fact,</span> <span
  m='626740'>which</span> <span m='626830'>we'll</span> <span
  m='627130'>find</span> <span m='627420'>out,</span> <span m='627660'>is
  actually</span> <span m='628290'>risk-neutrality,</span> <span
  m='629130'>meaning</span> <span m='629450'>that</span> <span
  m='630430'>in</span> <span m='630600'>fact,</span> <span m='631150'>the</span>
  <span m='631340'>price</span> <span m='631790'>of</span> <span
  m='631920'>the</span> <span m='632090'>option</span> <span
  m='632930'>has</span> <span m='633150'>nothing</span> <span
  m='633580'>to</span> <span m='633700'>do</span> <span m='633860'>with</span>
  <span m='634900'>the</span> <span m='635060'>risk</span> <span
  m='635310'>preferences</span> <span m='635970'>of</span> <span
  m='636110'>market</span> <span m='636480'>participants</span> <span
  m='639005'>or counter-parties.</span> <span m='640840'>It</span> <span
  m='641210'>actually</span> <span m='642140'>only</span> <span
  m='642530'>depends</span> <span m='643020'>on</span> <span
  m='643150'>the</span> <span m='643260'>dynamics</span> <span m='644110'>of the
  stock,</span> <span m='644610'>only</span> <span m='645000'>depends</span>
  <span m='645370'>on</span> <span m='645470'>the</span> <span
  m='645550'>volatility</span> <span m='646310'>of</span> <span
  m='646650'>the</span> <span m='646780'>stock.</span> <span
  m='648470'>And</span> <span m='648720'>finally,</span> <span
  m='649460'>the</span> <span m='649630'>most</span> <span
  m='649920'>important</span> <span m='650780'>idea of</span> <span
  m='651350'>this</span> <span m='651550'>class--</span> <span
  m='651960'>that</span> <span m='652630'>mathematical</span> <span
  m='653280'>apparatus</span> <span m='653740'>allows</span> <span
  m='654170'>you</span> <span m='654360'>to</span> <span
  m='655100'>figure</span> <span m='655420'>out</span> <span
  m='655630'>how</span> <span m='655850'>much</span> <span
  m='656200'>this</span> <span m='656660'>deterministic</span> <span
  m='657460'>option</span> <span m='657750'>price</span> <span
  m='658060'>is</span> <span m='658531'>now.</span> </p><p><span
  m='662770'>So</span> <span m='662870'>let's</span> <span
  m='663060'>consider</span> <span m='663610'>a</span> <span
  m='663630'>very</span> <span m='664020'>simple</span> <span
  m='666260'>example,</span> <span m='667460'>a very</span> <span
  m='667880'>simple</span> <span m='668370'>market,</span> <span
  m='669830'>two-period.</span> <span m='670880'>So</span> <span
  m='671120'>suppose</span> <span m='672710'>our</span> <span
  m='672900'>time</span> <span m='673170'>is</span> <span
  m='673250'>discrete,</span> <span m='673760'>and</span> <span
  m='673950'>we</span> <span m='674100'>are</span> <span m='674710'>one</span>
  <span m='675050'>step</span> <span m='675710'>before</span> <span
  m='676150'>the</span> <span m='676260'>maturity.</span> <span
  m='677990'>So</span> <span m='678250'>right</span> <span
  m='678510'>now,</span> <span m='679350'>our</span> <span
  m='679630'>stock</span> <span m='680210'>has</span> <span
  m='680420'>price</span> <span m='681240'>at</span> <span m='681470'>0.</span>
  <span m='682800'>And</span> <span m='683420'>there</span> <span
  m='683700'>is</span> <span m='683780'>some</span> <span
  m='684070'>derivative</span> <span m='684940'>of</span> <span
  m='685150'>0</span> <span m='686850'>with</span> <span m='686960'>some</span>
  <span m='687220'>pay-out.</span> <span m='687990'>We'll</span> <span
  m='688480'>consider</span> <span m='688850'>a</span> <span
  m='688890'>few</span> <span m='689100'>of</span> <span
  m='689200'>those.</span> <span m='689440'>Right?</span> </p><p><span
  m='690370'>Also,</span> <span m='690750'>we'll</span> <span
  m='691810'>add</span> <span m='692100'>to the</span> <span
  m='692320'>mix</span> <span m='693010'>a</span> <span m='693100'>bit</span>
  <span m='693310'>of</span> <span m='693430'>cash.</span> <span
  m='694220'>Right?</span> <span m='697380'>Some</span> <span
  m='697600'>amount</span> <span m='697970'>of</span> <span
  m='698090'>riskless</span> <span m='698520'>cash would</span> <span
  m='698810'>be</span> <span m='698980'>0.</span> <span m='700000'>And</span>
  <span m='701110'>riskless</span> <span m='701650'>meaning</span> <span
  m='702000'>that</span> <span m='702610'>it</span> <span
  m='702790'>grows</span> <span m='704100'>exponentially</span> <span
  m='705700'>with</span> <span m='705890'>some</span> <span
  m='706220'>interest</span> <span m='706650'>rate</span> <span
  m='706880'>R.</span> <span m='707800'>And</span> <span m='708030'>there</span>
  <span m='708400'>is</span> <span m='708630'>no</span> <span
  m='708790'>uncertainty.</span> <span m='709360'>It's</span> <span
  m='709600'>completely--</span> <span m='710330'>if</span> <span
  m='710500'>you</span> <span m='710660'>have</span> <span m='711670'>now</span>
  <span m='711960'>the</span> <span m='712100'>0,</span> <span
  m='712530'>we</span> <span m='712700'>know</span> <span
  m='713420'>then,</span> <span m='713820'>in</span> <span
  m='714520'>time</span> <span m='714940'>dt,</span> <span m='716060'>our</span>
  <span m='717190'>B0</span> <span m='717770'>will</span> <span
  m='718710'>grow</span> <span m='718940'>exponentially.</span> <span
  m='719950'>It will</span> <span m='720220'>become</span> <span
  m='720510'>B</span> <span m='720880'>equals</span> <span m='721650'>RT.</span>
  <span m='722080'>So</span> <span m='722540'>at 1,</span> <span
  m='722975'>basically,</span> <span m='723410'>0</span> <span
  m='723845'>[INAUDIBLE]--</span> <span m='725620'>money</span> <span
  m='725930'>market</span> <span m='726260'>account,</span> <span
  m='726555'>rather.</span> <span m='727835'>If</span> <span
  m='728200'>you</span> <span m='728340'>go</span> <span m='728620'>to</span>
  <span m='729840'>Cambridge</span> <span m='730290'>Savings</span> <span
  m='730700'>Bank,</span> <span m='731580'>put</span> <span m='732840'>$1</span>
  <span m='734460'>in</span> <span m='734660'>today,</span> <span
  m='734980'>then</span> <span m='736220'>in</span> <span m='736340'>a</span>
  <span m='736440'>year,</span> <span m='736720'>you'll</span> <span
  m='736960'>get</span> <span m='737370'>$1 and</span> <span
  m='739440'>basically</span> <span m='739780'>nothing</span> <span
  m='740270'>because</span> <span m='740730'>interest</span> <span
  m='741040'>rates</span> <span m='741350'>are 0.</span> </p><p><span
  m='742900'>So</span> <span m='743580'>in</span> <span m='743840'>time,</span>
  <span m='744090'>dt,</span> <span m='745060'>we</span> <span
  m='745290'>will</span> <span m='745520'>assume</span> <span
  m='745870'>with</span> <span m='745960'>some</span> <span
  m='746200'>probability,</span> <span m='746800'>P,</span> <span
  m='747115'>our</span> <span m='747430'>market</span> <span
  m='747820'>can</span> <span m='748030'>go</span> <span m='748530'>to</span>
  <span m='748650'>the</span> <span m='748770'>state</span> <span
  m='749060'>where</span> <span m='749530'>stock</span> <span
  m='749880'>becomes</span> <span m='750860'>S1--</span> <span
  m='751370'>the</span> <span m='751520'>price</span> <span m='751810'>of</span>
  <span m='751890'>stock</span> <span m='752130'>becomes</span> <span
  m='752490'>S1.</span> <span m='753370'>Our</span> <span m='753820'>bond</span>
  <span m='754140'>grows</span> <span m='754710'>exponentially--</span> <span
  m='755790'>no</span> <span m='755950'>uncertainty.</span> <span
  m='756580'>And</span> <span m='757470'>our</span> <span
  m='757740'>derivative</span> <span m='758710'>becomes</span> <span
  m='759110'>f1.</span> <span m='760210'>Or</span> <span m='760720'>with</span>
  <span m='760930'>probability</span> <span m='761450'>1</span> <span
  m='761660'>minus</span> <span m='761970'>P,</span> <span
  m='762130'>only</span> <span m='762440'>two</span> <span
  m='762580'>states.</span> <span m='763530'>So</span> <span
  m='763980'>our</span> <span m='764270'>stock</span> <span
  m='764550'>becomes</span> <span m='765160'>S2.</span> <span
  m='766200'>Bond</span> <span m='766490'>stays</span> <span
  m='766800'>the</span> <span m='766880'>same.</span> <span
  m='767200'>And</span> <span m='767590'>the</span> <span
  m='768100'>derivative</span> <span m='768830'>is</span> <span
  m='769300'>some</span> <span m='769710'>f2.</span> </p><p><span
  m='771870'>So</span> <span m='772120'>let's</span> <span
  m='772400'>start</span> <span m='774540'>with</span> <span
  m='774880'>our</span> <span m='775110'>simple</span> <span
  m='775490'>contract,</span> <span m='775850'>the</span> <span
  m='775940'>Forward</span> <span m='776340'>contract.</span> <span
  m='778870'>So</span> <span m='779090'>one</span> <span m='780000'>can</span>
  <span m='780260'>naively</span> <span m='782130'>approach</span> <span
  m='783120'>a</span> <span m='783190'>problem,</span> <span
  m='784300'>trying</span> <span m='784670'>to</span> <span
  m='784940'>get</span> <span m='785170'>the</span> <span
  m='785280'>price</span> <span m='787450'>of</span> <span m='787990'>the</span>
  <span m='788070'>derivative,</span> <span m='788500'>using</span> <span
  m='788850'>the</span> <span m='789090'>real</span> <span
  m='789370'>world</span> <span m='789760'>probabilities,</span> <span
  m='790110'>P</span> <span m='790740'>and</span> <span m='791460'>1</span>
  <span m='791670'>minus</span> <span m='792000'>P.</span> <span
  m='792826'>Right?</span> </p><p><span m='793240'>So</span> <span
  m='794100'>we</span> <span m='794220'>know</span> <span m='794460'>that</span>
  <span m='794640'>the</span> <span m='794750'>pay-out</span> <span
  m='795200'>is</span> <span m='795370'>S</span> <span m='795600'>minus</span>
  <span m='795930'>K.</span> <span m='796120'>That's</span> <span
  m='796890'>given.</span> <span m='798030'>So</span> <span
  m='798120'>one</span> <span m='798370'>would</span> <span
  m='798540'>say</span> <span m='798800'>that</span> <span m='799630'>if</span>
  <span m='800752'>we</span> <span m='801150'>know</span> <span m='801310'>we
  are</span> <span m='801595'>one</span> <span m='801880'>step</span> <span
  m='802650'>before</span> <span m='803050'>the</span> <span
  m='803190'>pay-out,</span> <span m='803600'>so</span> <span
  m='803810'>let's</span> <span m='804080'>just</span> <span
  m='804290'>compute</span> <span m='804630'>expected</span> <span
  m='805140'>value</span> <span m='805900'>of</span> <span m='806030'>the</span>
  <span m='806150'>pay-out,</span> <span m='806590'>using</span> <span
  m='808150'>real</span> <span m='808450'>world</span> <span
  m='808690'>probabilities,</span> <span m='810400'>get</span> <span
  m='811150'>this</span> <span m='811270'>value.</span> <span
  m='812080'>And</span> <span m='812230'>actually,</span> <span
  m='812510'>what</span> <span m='812680'>we</span> <span m='812780'>are</span>
  <span m='812870'>looking</span> <span m='813140'>here</span> <span
  m='813380'>is</span> <span m='813550'>to</span> <span m='813690'>set</span>
  <span m='814040'>K</span> <span m='814310'>such</span> <span
  m='814650'>that</span> <span m='814860'>the</span> <span
  m='814950'>price</span> <span m='815300'>now</span> <span m='815980'>at</span>
  <span m='816950'>time</span> <span m='817640'>T</span> <span
  m='817850'>is</span> <span m='817980'>0.</span> <span m='818340'>That's</span>
  <span m='818840'>usual</span> <span m='819400'>convention.</span> </p><p><span
  m='819840'>So</span> <span m='820080'>we'll</span> <span
  m='820860'>then</span> <span m='821420'>set</span> <span m='821770'>K</span>
  <span m='822330'>to</span> <span m='822800'>this</span> <span
  m='824800'>probability,</span> <span m='828500'>to</span> <span
  m='828620'>this</span> <span m='828850'>number,</span> <span
  m='829930'>which</span> <span m='830060'>depends</span> <span
  m='830500'>on</span> <span m='830700'>real</span> <span
  m='830930'>world</span> <span m='831190'>probability</span> <span
  m='831760'>and</span> <span m='831900'>obviously</span> <span
  m='832330'>depends</span> <span m='832760'>on</span> <span
  m='833000'>the</span> <span m='833210'>stock</span> <span
  m='833440'>price</span> <span m='833790'>at</span> <span
  m='834200'>expiry.</span> <span m='837450'>But</span> <span
  m='837850'>obviously,</span> <span m='838560'>we</span> <span m='838690'>don't
  know</span> <span m='838890'>real</span> <span m='839360'>world</span> <span
  m='839540'>probabilities.</span> <span m='840130'>We</span> <span
  m='840270'>can</span> <span m='840470'>guess.</span> <span
  m='840830'>We</span> <span m='840930'>can</span> <span m='841070'>say,</span>
  <span m='841210'>oh,</span> <span m='842450'>this</span> <span
  m='842700'>stock</span> <span m='843070'>is</span> <span m='843370'>as</span>
  <span m='843570'>likely</span> <span m='843970'>to</span> <span
  m='844080'>go</span> <span m='844230'>up</span> <span m='845290'>then</span>
  <span m='845500'>down.</span> <span m='846860'>Then</span> <span
  m='847130'>it's</span> <span m='847330'>just</span> <span m='847590'>an</span>
  <span m='847700'>average</span> <span m='848780'>of</span> <span
  m='848960'>a</span> <span m='849530'>end</span> <span m='849830'>stock</span>
  <span m='850100'>prices</span> <span m='850880'>or</span> <span
  m='851020'>something</span> <span m='851410'>else.</span> <span
  m='852560'>But</span> <span m='852810'>it's</span> <span m='853220'>all</span>
  <span m='853520'>[INAUDIBLE]</span> <span m='853770'>wavy.</span> <span
  m='854280'>And</span> <span m='855080'>actually,</span> <span
  m='855460'>we</span> <span m='855610'>never</span> <span
  m='855890'>will</span> <span m='856060'>be</span> <span
  m='856160'>right.</span> </p><p><span m='857630'>Instead</span> <span
  m='858880'>of</span> <span m='859050'>doing</span> <span
  m='859350'>this--</span> <span m='860810'>we're</span> <span
  m='861030'>kind</span> <span m='861320'>of</span> <span
  m='861780'>following</span> <span m='862250'>bookie</span> <span
  m='862750'>example--</span> <span m='863780'>let's</span> <span
  m='863980'>try</span> <span m='864170'>to</span> <span m='864280'>do</span>
  <span m='864380'>something</span> <span m='864700'>else.</span> <span
  m='866270'>Let's</span> <span m='866540'>think</span> <span
  m='866750'>a</span> <span m='866810'>little</span> <span
  m='867010'>bit.</span> <span m='867920'>So</span> <span m='869890'>we</span>
  <span m='870050'>have</span> <span m='870340'>a</span> <span
  m='870490'>stock</span> <span m='870760'>which</span> <span
  m='870980'>is</span> <span m='871070'>trading</span> <span
  m='871580'>at</span> <span m='871950'>market</span> <span
  m='872370'>now</span> <span m='873120'>for</span> <span m='873310'>the</span>
  <span m='873440'>price</span> <span m='873850'>of</span> <span
  m='874080'>0.</span> <span m='876070'>How</span> <span m='876260'>about</span>
  <span m='876650'>we</span> <span m='876810'>go</span> <span
  m='876980'>to</span> <span m='877080'>the</span> <span m='877160'>bank</span>
  <span m='878050'>and</span> <span m='878350'>borrow</span> <span
  m='879080'>$S0</span> <span m='880290'>right</span> <span
  m='880570'>now</span> <span m='881740'>and</span> <span
  m='882040'>immediately</span> <span m='882460'>go</span> <span
  m='882670'>to</span> <span m='882790'>the</span> <span
  m='882900'>market</span> <span m='883330'>and</span> <span
  m='883490'>buy</span> <span m='883740'>the</span> <span
  m='883790'>stock.</span> </p><p><span m='884810'>So</span> <span
  m='885000'>right</span> <span m='885230'>now</span> <span m='886340'>we</span>
  <span m='886550'>are</span> <span m='887310'>not</span> <span
  m='887560'>0.</span> <span m='887910'>We</span> <span
  m='888070'>borrowed</span> <span m='888720'>at</span> <span
  m='888860'>0.</span> <span m='889330'>We</span> <span m='889490'>paid</span>
  <span m='889770'>it</span> <span m='890320'>immediately</span> <span
  m='891190'>to</span> <span m='891280'>buy</span> <span m='891460'>the</span>
  <span m='891580'>stock.</span> <span m='891910'>So</span> <span
  m='892030'>we</span> <span m='892130'>have</span> <span
  m='892390'>stock</span> <span m='892630'>at hand.</span> <span
  m='893990'>Then</span> <span m='894200'>we'll</span> <span
  m='894410'>wait</span> <span m='895480'>for</span> <span m='895680'>one</span>
  <span m='895860'>period.</span> <span m='897830'>And</span> <span
  m='898450'>at</span> <span m='898570'>the</span> <span m='898660'>same</span>
  <span m='898860'>time--</span> <span m='899130'>sorry--</span> <span
  m='900730'>we</span> <span m='900910'>enter</span> <span m='901320'>on</span>
  <span m='901470'>the</span> <span m='901550'>short</span> <span
  m='901910'>side</span> <span m='902660'>of</span> <span m='902960'>the</span>
  <span m='903160'>Forward</span> <span m='903500'>contract.</span> <span
  m='903970'>So</span> <span m='904760'>we</span> <span m='905120'>agree</span>
  <span m='905440'>to</span> <span m='905550'>sell</span> <span
  m='905940'>the</span> <span m='906040'>stock</span> <span
  m='907290'>for</span> <span m='908170'>some</span> <span
  m='908690'>price,</span> <span m='909060'>K0.</span> </p><p><span
  m='910830'>So</span> <span m='911200'>in</span> <span m='911820'>dt,</span>
  <span m='912440'>in</span> <span m='912710'>a</span> <span
  m='912790'>month</span> <span m='913000'>period</span> <span
  m='913260'>of</span> <span m='913690'>time,</span> <span m='914870'>the</span>
  <span m='915370'>contract</span> <span m='915760'>expires.</span> <span
  m='916290'>We</span> <span m='916470'>already</span> <span
  m='916690'>have</span> <span m='916880'>stock.</span> <span
  m='917640'>So</span> <span m='917880'>we</span> <span m='917990'>just</span>
  <span m='918240'>go</span> <span m='918590'>and</span> <span
  m='918770'>exchange</span> <span m='919140'>it</span> <span
  m='919220'>for</span> <span m='920800'>$K0.</span> <span
  m='921540'>Right?</span> <span m='923870'>But</span> <span
  m='924540'>at</span> <span m='924670'>the</span> <span m='924760'>same</span>
  <span m='925040'>time,</span> <span m='925340'>we</span> <span
  m='925440'>need</span> <span m='925640'>to</span> <span
  m='925720'>repay</span> <span m='926110'>our</span> <span
  m='926320'>loan</span> <span m='927630'>which</span> <span
  m='928570'>now</span> <span m='929090'>have</span> <span
  m='929310'>become</span> <span m='930370'>S0</span> <span
  m='932100'>times</span> <span m='932830'>e to the</span> <span
  m='933150'>rdt.</span> <span m='934170'>This</span> <span m='934380'>is</span>
  <span m='934480'>deterministic,</span> <span m='935140'>right?</span> <span
  m='935330'>We</span> <span m='935490'>bought it</span> <span
  m='935780'>at</span> <span m='935860'>0.</span> <span m='936640'>In</span>
  <span m='936840'>time,</span> <span m='937060'>dt, it</span> <span
  m='937470'>became</span> <span m='938140'>S</span> <span
  m='938410'>times</span> <span m='939070'>e to the</span> <span
  m='939400'>rdt.</span> </p><p><span m='941360'>So</span> <span
  m='942370'>what's</span> <span m='943330'>our</span> <span
  m='943610'>net?</span> <span m='944320'>The net</span> <span
  m='944590'>is</span> <span m='946410'>K0</span> <span m='947120'>minus</span>
  <span m='948660'>S</span> <span m='949190'>times</span> <span m='949710'>e
  rdt.</span> <span m='951560'>So</span> <span m='951720'>suppose</span> <span
  m='952500'>K0</span> <span m='953040'>is</span> <span
  m='953300'>greater</span> <span m='954900'>than</span> <span
  m='954970'>this</span> <span m='955180'>value.</span> <span
  m='956490'>Then</span> <span m='956670'>we</span> <span m='956840'>made</span>
  <span m='957220'>riskless</span> <span m='958030'>profit.</span> <span
  m='958750'>There</span> <span m='959150'>is</span> <span m='959260'>no</span>
  <span m='959480'>risk</span> <span m='961315'>in</span> <span
  m='961780'>the</span> <span m='961940'>strategy</span> <span
  m='963680'>which</span> <span m='963980'>we</span> <span
  m='964260'>proposed.</span> <span m='966200'>So</span> <span
  m='967070'>this</span> <span m='967280'>is</span> <span
  m='967410'>good.</span> <span m='967740'>But</span> <span
  m='968270'>why</span> <span m='968540'>wouldn't</span> <span
  m='968960'>everybody</span> <span m='969520'>do</span> <span
  m='969640'>it</span> <span m='969750'>all</span> <span m='969930'>day</span>
  <span m='970050'>long?</span> </p><p><span m='971410'>On</span> <span
  m='971520'>the</span> <span m='971580'>other</span> <span
  m='971730'>hand,</span> <span m='972130'>if</span> <span m='972360'>K0</span>
  <span m='972950'>is</span> <span m='973820'>less</span> <span
  m='974180'>than</span> <span m='974395'>S0,</span> <span
  m='974910'>that's</span> <span m='976770'>a</span> <span
  m='976830'>loss</span> <span m='977090'>for</span> <span
  m='977230'>sure.</span> <span m='978200'>And</span> <span m='978790'>if
  anybody</span> <span m='979340'>thinks,</span> <span m='979910'>as</span>
  <span m='980120'>we</span> <span m='980260'>did--</span> <span
  m='980600'>and</span> <span m='980950'>we</span> <span
  m='981160'>assume</span> <span m='981540'>that</span> <span
  m='981700'>everybody</span> <span m='982150'>can</span> <span
  m='982360'>do</span> <span m='982490'>it--</span> <span m='983190'>then</span>
  <span m='983750'>nobody</span> <span m='984060'>you</span> <span
  m='984390'>would</span> <span m='984680'>want</span> <span
  m='984900'>to</span> <span m='984940'>enter</span> <span m='985290'>it,</span>
  <span m='985860'>which</span> <span m='986020'>means</span> <span
  m='987220'>that</span> <span m='987840'>in</span> <span
  m='988010'>order</span> <span m='988820'>for</span> <span m='989183'>our
  forward</span> <span m='990810'>to</span> <span m='990960'>be</span> <span
  m='991110'>price</span> <span m='991520'>0</span> <span m='991840'>now,</span>
  <span m='994130'>the</span> <span m='994300'>strike</span> <span
  m='994710'>price</span> <span m='995130'>has</span> <span m='995280'>to</span>
  <span m='995370'>be</span> <span m='995520'>equal</span> <span m='997355'>to
  this</span> <span m='997840'>amount.</span> <span m='998580'>And</span> <span
  m='998750'>there</span> <span m='998950'>is</span> <span m='999060'>no</span>
  <span m='999180'>uncertainty</span> <span m='999740'>about</span> <span
  m='1000220'>it.</span> </p><p><span m='1002550'>So</span> <span
  m='1004270'>let's</span> <span m='1004570'>stop</span> <span
  m='1004810'>and</span> <span m='1004970'>think</span> <span
  m='1006520'>a</span> <span m='1006620'>little</span> <span
  m='1006860'>bit.</span> <span m='1008690'>Well,</span> <span
  m='1008910'>actually,</span> <span m='1015880'>just</span> <span
  m='1016150'>to</span> <span m='1016360'>see</span> <span
  m='1017580'>how</span> <span m='1017780'>it</span> <span
  m='1017870'>works.</span> <span m='1018450'>And</span> <span
  m='1018980'>that's</span> <span m='1019220'>exactly</span> <span
  m='1020556'>why</span> <span m='1020990'>I</span> <span m='1021060'>set</span>
  <span m='1022360'>this</span> <span m='1022610'>K</span> <span
  m='1023060'>to</span> <span m='1023160'>this</span> <span
  m='1023360'>number.</span> <span m='1024530'>So</span> <span
  m='1025099'>by</span> <span m='1025280'>the</span> <span
  m='1025380'>way,</span> <span m='1025520'>who</span> <span
  m='1025780'>can</span> <span m='1025980'>tell</span> <span
  m='1026150'>me</span> <span m='1026670'>which</span> <span
  m='1027140'>interest</span> <span m='1027520'>rate</span> <span
  m='1028024'>does</span> <span m='1028176'>it</span> <span
  m='1028329'>imply?</span> <span m='1035599'>If</span> <span
  m='1035980'>our</span> <span m='1036130'>strike--</span> <span
  m='1037040'>our</span> <span m='1037250'>stock</span> <span
  m='1037530'>price</span> <span m='1037839'>is</span> <span
  m='1039329'>$80,</span> <span m='1040490'>our</span> <span
  m='1040750'>strike</span> <span m='1041210'>is</span> <span
  m='1041410'>88.41.</span> <span m='1044020'>And</span> <span
  m='1044275'>the</span> <span m='1044530'>expiry is</span> <span
  m='1045050'>in</span> <span m='1045190'>two</span> <span
  m='1045329'>years,</span> <span m='1048490'>approximately.</span> </p><p><span
  m='1049604'>AUDIENCE: 2.5?</span> </p><p><span m='1051460'>PROFESSOR:
  2.5.</span> <span m='1053120'>So</span> <span m='1053330'>in</span> <span
  m='1053570'>two</span> <span m='1053710'>years,</span> <span m='1054100'>it
  will</span> <span m='1054420'>be</span> <span m='1054800'>5%.</span> <span
  m='1057530'>So</span> <span m='1057980'>roughly</span> <span
  m='1058330'>speaking,</span> <span m='1058850'>without</span> <span
  m='1059180'>compounding,</span> <span m='1059760'>it</span> <span
  m='1059920'>should</span> <span m='1060130'>be</span> <span
  m='1060340'>5%</span> <span m='1060960'>of</span> <span m='1061240'>80</span>
  <span m='1061580'>plus</span> <span m='1061850'>5%.</span> <span
  m='1063110'>It</span> <span m='1063460'>would</span> <span
  m='1063600'>be</span> <span m='1063820'>84.</span> <span m='1067800'>So</span>
  <span m='1067930'>10%</span> <span m='1068330'>for</span> <span
  m='1068480'>two</span> <span m='1068580'>years.</span> <span
  m='1068940'>So</span> <span m='1069200'>the</span> <span
  m='1069300'>interest</span> <span m='1069650'>rate</span> <span
  m='1069790'>is</span> <span m='1070940'>5%.</span> <span
  m='1071250'>Yeah.</span> <span m='1071745'>So yeah.</span> <span
  m='1072240'>That's</span> <span m='1072500'>actually</span> <span
  m='1072810'>exactly</span> <span m='1073200'>5</span> <span
  m='1074680'>with</span> <span m='1075320'>exponential</span> <span
  m='1076100'>component.</span> </p><p><span m='1078270'>Yeah.</span> <span
  m='1078850'>Well,</span> <span m='1079110'>in</span> <span
  m='1079300'>a</span> <span m='1079740'>good</span> <span
  m='1079960'>world--</span> <span m='1080640'>probably</span> <span
  m='1080915'>five</span> <span m='1081190'>years</span> <span
  m='1081410'>ago,</span> <span m='1081690'>that's</span> <span m='1081910'>how
  it</span> <span m='1082270'>would work.</span> <span m='1083190'>The</span>
  <span m='1083590'>two</span> <span m='1083750'>years</span> <span
  m='1084150'>interest</span> <span m='1084510'>rates</span> <span
  m='1084770'>now,</span> <span m='1085720'>the</span> <span
  m='1085790'>last</span> <span m='1086040'>time</span> <span
  m='1086230'>I</span> <span m='1086340'>checked,</span> <span
  m='1086840'>was,</span> <span m='1087280'>I</span> <span
  m='1087370'>think,</span> <span m='1087700'>30</span> <span
  m='1087960'>[INAUDIBLE].</span> <span m='1088520'>We</span> <span
  m='1088680'>can</span> <span m='1088860'>check</span> <span
  m='1089750'>where</span> <span m='1090190'>the</span> <span
  m='1090310'>bond</span> <span m='1090590'>is</span> <span
  m='1090670'>trading</span> <span m='1091160'>now.</span> </p><p><span
  m='1093855'>All right.</span> <span m='1094790'>Give</span> <span
  m='1095010'>me</span> <span m='1095180'>a</span> <span m='1095240'>sec.</span>
  <span m='1096240'>Now.</span> <span m='1102208'>Yep.</span> <span
  m='1103080'>32 1/2</span> <span m='1104615'>basis</span> <span
  m='1104890'>points.</span> <span m='1106920'>1.6</span> <span
  m='1107620'>basis</span> <span m='1107940'>points</span> <span
  m='1108290'>up,</span> <span m='1108560'>since the</span> <span
  m='1108850'>morning.</span> <span m='1110220'>Quite</span> <span
  m='1110430'>a</span> <span m='1110470'>bit,</span> <span m='1110650'>by the
  way.</span> <span m='1111370'>So</span> <span m='1111810'>yeah.</span> <span
  m='1112300'>So</span> <span m='1112730'>right</span> <span
  m='1112930'>now</span> <span m='1113220'>interest</span> <span
  m='1113480'>rates</span> <span m='1113690'>are</span> <span
  m='1113800'>basically</span> <span m='1114220'>0.</span> <span
  m='1114480'>So</span> <span m='1115990'>these</span> <span
  m='1116280'>two</span> <span m='1116410'>lines</span> <span
  m='1116700'>would</span> <span m='1116840'>be</span> <span
  m='1117240'>very</span> <span m='1117480'>close</span> <span
  m='1117780'>right</span> <span m='1118010'>now</span> <span
  m='1118260'>if</span> <span m='1118700'>we were for</span> <span
  m='1118960'>two</span> <span m='1119090'>years,</span> <span
  m='1121210'>in</span> <span m='1121410'>that case.</span> </p><p><span
  m='1122460'>So</span> <span m='1123640'>coming</span> <span
  m='1123970'>back</span> <span m='1126780'>to</span> <span
  m='1126920'>our</span> <span m='1127130'>example.</span> <span
  m='1129920'>So</span> <span m='1131080'>what's</span> <span
  m='1131380'>important</span> <span m='1131790'>here?</span> <span
  m='1132710'>How</span> <span m='1132970'>did</span> <span
  m='1133150'>we</span> <span m='1133260'>arrive</span> <span
  m='1134420'>to</span> <span m='1134560'>this</span> <span m='1134830'>strike
  price,</span> <span m='1135220'>or</span> <span m='1135550'>to</span> <span
  m='1135670'>this</span> <span m='1136600'>price</span> <span
  m='1136990'>of</span> <span m='1137090'>the</span> <span
  m='1137210'>Forward</span> <span m='1137530'>contract?</span> <span
  m='1138430'>We,</span> <span m='1138650'>in</span> <span
  m='1138810'>fact,</span> <span m='1141100'>tried--</span> <span
  m='1141880'>we</span> <span m='1142250'>took</span> <span
  m='1142450'>some</span> <span m='1143100'>amount</span> <span
  m='1143380'>of</span> <span m='1143460'>stock.</span> <span
  m='1143810'>In</span> <span m='1143930'>this</span> <span
  m='1144100'>particular</span> <span m='1144430'>case,</span> <span
  m='1144990'>it was</span> <span m='1145340'>the</span> <span
  m='1145720'>whole</span> <span m='1145990'>price</span> <span
  m='1146270'>of</span> <span m='1146350'>stock.</span> <span
  m='1146650'>We</span> <span m='1146810'>took</span> <span
  m='1147030'>some</span> <span m='1147210'>amount</span> <span
  m='1147480'>of</span> <span m='1147590'>cash,</span> <span
  m='1149480'>and</span> <span m='1149720'>by</span> <span
  m='1149870'>combining</span> <span m='1150430'>these</span> <span
  m='1150630'>two</span> <span m='1150730'>pieces,</span> <span
  m='1151690'>we</span> <span m='1151930'>somehow</span> <span
  m='1152420'>replicated</span> <span m='1153070'>the</span> <span
  m='1153170'>final</span> <span m='1153540'>pay-off.</span> <span
  m='1154664'>Right?</span> </p><p><span m='1155510'>And</span> <span
  m='1155710'>that's</span> <span m='1156110'>the</span> <span
  m='1156320'>general</span> <span m='1156760'>idea</span> <span
  m='1157960'>of</span> <span m='1158810'>risk</span> <span
  m='1159160'>neutral</span> <span m='1160050'>pricing</span> <span
  m='1160490'>and</span> <span m='1160610'>replicating</span> <span
  m='1161190'>portfolio.</span> <span m='1162560'>What</span> <span
  m='1162820'>we</span> <span m='1162960'>will</span> <span
  m='1163130'>try</span> <span m='1163400'>to</span> <span
  m='1163550'>do,</span> <span m='1164130'>in</span> <span
  m='1164270'>the</span> <span m='1164400'>rest</span> <span
  m='1164660'>of</span> <span m='1164750'>the</span> <span
  m='1164850'>class,</span> <span m='1165410'>is</span> <span
  m='1167040'>take</span> <span m='1167190'>a</span> <span
  m='1167380'>pay-off</span> <span m='1169070'>and</span> <span
  m='1169300'>try</span> <span m='1169660'>to</span> <span
  m='1169830'>find</span> <span m='1170380'>a</span> <span
  m='1170440'>replicating</span> <span m='1171010'>portfolio,</span> <span
  m='1171640'>maybe</span> <span m='1171930'>more</span> <span
  m='1172150'>complicated,</span> <span m='1172700'>maybe</span> <span
  m='1173950'>a</span> <span m='1174140'>dynamic</span> <span
  m='1174650'>such</span> <span m='1174970'>that</span> <span
  m='1175250'>at</span> <span m='1175410'>the</span> <span
  m='1175530'>end,</span> <span m='1175910'>this</span> <span
  m='1176150'>replicating</span> <span m='1176670'>portfolio</span> <span
  m='1176940'>will</span> <span m='1177210'>be</span> <span
  m='1177390'>exactly</span> <span m='1177910'>our</span> <span
  m='1178150'>pay-off.</span> <span m='1178510'>Right?</span> </p><p><span
  m='1179420'>And</span> <span m='1179590'>what</span> <span m='1180080'>would
  it</span> <span m='1180380'>mean?</span> <span m='1180890'>Well,</span> <span
  m='1181050'>obviously</span> <span m='1181450'>it</span> <span
  m='1181560'>would</span> <span m='1181740'>mean</span> <span
  m='1182240'>that</span> <span m='1185450'>the</span> <span
  m='1185800'>current</span> <span m='1186110'>price</span> <span
  m='1186380'>of</span> <span m='1186480'>the</span> <span
  m='1186570'>derivative</span> <span m='1187140'>should</span> <span
  m='1187370'>be</span> <span m='1187470'>the</span> <span
  m='1187610'>price</span> <span m='1188020'>of</span> <span
  m='1188130'>our</span> <span m='1188380'>replicating</span> <span
  m='1188880'>portfolio</span> <span m='1189390'>right</span> <span
  m='1189660'>now.</span> <span m='1190472'>Right?</span> <span
  m='1191950'>And</span> <span m='1192100'>that's</span> <span
  m='1192320'>how</span> <span m='1193974'>the</span> <span
  m='1195310'>risk</span> <span m='1195550'>neutral</span> <span
  m='1195800'>pricing</span> <span m='1196160'>works.</span> </p><p><span
  m='1198060'>So</span> <span m='1198630'>we</span> <span m='1198800'>are</span>
  <span m='1198900'>still</span> <span m='1199230'>in</span> <span
  m='1199380'>this</span> <span m='1200120'>simple</span> <span
  m='1200590'>situation.</span> <span m='1201180'>But</span> <span
  m='1201440'>we</span> <span m='1201660'>will</span> <span
  m='1201880'>try</span> <span m='1202140'>to</span> <span
  m='1202290'>price</span> <span m='1202800'>a</span> <span
  m='1202900'>general</span> <span m='1203670'>pay-off,</span> <span
  m='1204360'>F1--</span> <span m='1205760'>a</span> <span
  m='1206620'>general</span> <span m='1206920'>pay-off,</span> <span
  m='1207310'>F.</span> <span m='1207850'>Right?</span> <span
  m='1208820'>And</span> <span m='1208960'>here's</span> <span
  m='1209600'>how</span> <span m='1209770'>it</span> <span
  m='1209880'>goes.</span> <span m='1210650'>So</span> <span
  m='1211450'>we</span> <span m='1211650'>still</span> <span
  m='1212860'>will</span> <span m='1213100'>try</span> <span
  m='1213990'>to</span> <span m='1214100'>form</span> <span
  m='1214400'>our</span> <span m='1214620'>replicating</span> <span
  m='1215130'>portfolio</span> <span m='1216500'>out</span> <span
  m='1216760'>of</span> <span m='1216890'>the</span> <span m='1217000'>bond
  of</span> <span m='1217480'>some</span> <span m='1217740'>amount</span> <span
  m='1218030'>of</span> <span m='1218130'>bond</span> <span
  m='1219190'>and</span> <span m='1219660'>some</span> <span
  m='1220160'>amount</span> <span m='1220520'>of</span> <span
  m='1220610'>stock.</span> </p><p><span m='1221930'>And</span> <span
  m='1222220'>we'll</span> <span m='1222450'>say</span> <span
  m='1222640'>that</span> <span m='1223090'>we</span> <span
  m='1223480'>will</span> <span m='1223700'>need</span> <span
  m='1223990'>a,</span> <span m='1224452'>S1,</span> <span
  m='1225376'>and</span> <span m='1226100'>b</span> <span m='1226795'>of
  the</span> <span m='1227140'>bond.</span> <span m='1228690'>Right?</span>
  <span m='1229730'>And</span> <span m='1231310'>we'll</span> <span
  m='1231530'>try</span> <span m='1231730'>to</span> <span
  m='1231840'>find</span> <span m='1232140'>a</span> <span
  m='1232280'>and</span> <span m='1232470'>B</span> <span
  m='1232610'>such</span> <span m='1233920'>that</span> <span
  m='1235150'>no</span> <span m='1235350'>matter</span> <span
  m='1235590'>what</span> <span m='1235860'>the</span> <span
  m='1235930'>real</span> <span m='1236140'>world</span> <span
  m='1236440'>probability</span> <span m='1237700'>is,</span> <span
  m='1240170'>at</span> <span m='1240500'>one</span> <span
  m='1240720'>step</span> <span m='1241030'>maturity,</span> <span
  m='1241940'>we'll</span> <span m='1242280'>replicate</span> <span
  m='1242780'>our</span> <span m='1242990'>pay-off</span> <span
  m='1243320'>exactly.</span> </p><p><span m='1244370'>And fortunately,</span>
  <span m='1245050'>in</span> <span m='1245130'>this</span> <span
  m='1245300'>particular</span> <span m='1245630'>case,</span> <span
  m='1245910'>it's</span> <span m='1246190'>very doable.</span> <span
  m='1246810'>It's</span> <span m='1246950'>just</span> <span
  m='1247630'>two</span> <span m='1247770'>equations.</span> <span
  m='1248310'>We</span> <span m='1248580'>use</span> <span
  m='1248810'>two</span> <span m='1249140'>variables.</span> <span
  m='1249620'>We</span> <span m='1249980'>should</span> <span
  m='1250250'>be</span> <span m='1250390'>able</span> <span
  m='1250570'>to</span> <span m='1250680'>do</span> <span m='1250800'>it.</span>
  <span m='1251510'>And</span> <span m='1251670'>we</span> <span m='1251770'>can
  solve</span> <span m='1252250'>it</span> <span m='1252400'>and</span> <span
  m='1252560'>find</span> <span m='1252890'>this</span> <span
  m='1253120'>a</span> <span m='1253270'>and</span> <span m='1253450'>b.</span>
  </p><p><span m='1255290'>Then</span> <span m='1256320'>we'll</span> <span
  m='1256860'>substitute</span> <span m='1257550'>them</span> <span
  m='1257750'>in</span> <span m='1257920'>the</span> <span
  m='1258110'>formula.</span> <span m='1258780'>Right?</span> <span
  m='1259350'>Take</span> <span m='1259680'>the</span> <span
  m='1259840'>current</span> <span m='1260210'>price</span> <span
  m='1260520'>of</span> <span m='1260620'>the</span> <span
  m='1260710'>stock,</span> <span m='1261250'>which</span> <span
  m='1261360'>we</span> <span m='1261450'>know,</span> <span
  m='1262860'>and</span> <span m='1264330'>some</span> <span
  m='1264590'>cash,</span> <span m='1265810'>and</span> <span
  m='1266140'>find</span> <span m='1266620'>the</span> <span m='1269590'>current
  price</span> <span m='1271010'>of the</span> <span
  m='1271510'>derivative.</span> <span m='1273086'>Right?</span> </p><p><span
  m='1273500'>And</span> <span m='1273860'>this</span> <span
  m='1274050'>works--</span> <span m='1274440'>it</span> <span
  m='1274540'>should</span> <span m='1274740'>work</span> <span
  m='1274940'>for</span> <span m='1275110'>any</span> <span
  m='1275310'>derivative.</span> <span m='1275730'>It</span> <span
  m='1275870'>doesn't</span> <span m='1276120'>matter</span> <span
  m='1276340'>is</span> <span m='1276430'>it</span> <span
  m='1276550'>Forward,</span> <span m='1276890'>Call,</span> <span
  m='1277540'>Put,</span> <span m='1278000'>or</span> <span
  m='1278230'>some</span> <span m='1279950'>complicated</span> <span
  m='1280470'>option,</span> <span m='1280820'>as</span> <span
  m='1280980'>long</span> <span m='1281250'>as</span> <span
  m='1281470'>it</span> <span m='1281680'>is</span> <span
  m='1282060'>deterministic</span> <span m='1282710'>at</span> <span
  m='1282810'>expiry.</span> <span m='1286040'>An</span> <span
  m='1286270'>interesting</span> <span m='1286740'>way,</span> <span
  m='1287160'>though,</span> <span m='1287430'>to</span> <span
  m='1287560'>look</span> <span m='1287780'>at</span> <span
  m='1287880'>it</span> <span m='1289040'>is</span> <span m='1289510'>to</span>
  <span m='1289600'>rewrite</span> <span m='1290120'>this</span> <span
  m='1290290'>formula</span> <span m='1290890'>slightly,</span> <span
  m='1292750'>in</span> <span m='1292850'>such</span> <span m='1293190'>a</span>
  <span m='1293260'>way,</span> <span m='1295450'>which</span> <span
  m='1295730'>does</span> <span m='1296000'>remind</span> <span
  m='1296480'>us,</span> <span m='1297190'>taking</span> <span
  m='1299560'>an</span> <span m='1299720'>expected</span> <span
  m='1300190'>value,</span> <span m='1300760'>maybe</span> <span
  m='1301120'>discounting</span> <span m='1301450'>it</span> <span
  m='1302500'>because</span> <span m='1302900'>this</span> <span
  m='1303100'>is</span> <span m='1303190'>expected</span> <span
  m='1303640'>value,</span> <span m='1304050'>at some time</span> <span
  m='1304440'>in</span> <span m='1304500'>the</span> <span
  m='1304610'>future.</span> </p><p><span m='1306090'>But</span> <span
  m='1306370'>this</span> <span m='1306640'>probability--</span> <span
  m='1307640'>and</span> <span m='1307860'>it</span> <span m='1308020'>is</span>
  <span m='1308150'>a</span> <span m='1308220'>probability</span> <span
  m='1308770'>because</span> <span m='1309110'>this</span> <span
  m='1309300'>number</span> <span m='1309590'>q,</span> <span
  m='1309860'>here,</span> <span m='1310440'>is</span> <span
  m='1310680'>between</span> <span m='1311020'>0</span> <span
  m='1311290'>and</span> <span m='1311420'>1.</span> <span
  m='1313620'>But</span> <span m='1313840'>this</span> <span
  m='1314010'>probability</span> <span m='1314760'>has</span> <span
  m='1315920'>little</span> <span m='1316270'>to</span> <span
  m='1316390'>do</span> <span m='1316660'>with</span> <span
  m='1318601'>real</span> <span m='1319060'>world.</span> <span
  m='1319470'>Right?</span> <span m='1320000'>In</span> <span
  m='1320200'>fact,</span> <span m='1321860'>it's</span> <span
  m='1322110'>something</span> <span m='1322480'>different.</span> </p><p><span
  m='1323960'>But</span> <span m='1324180'>that</span> <span
  m='1324340'>probability</span> <span m='1325020'>exists.</span> <span
  m='1326230'>And</span> <span m='1326440'>it's</span> <span
  m='1326660'>called--</span> <span m='1327320'>the</span> <span
  m='1327660'>measure</span> <span m='1328140'>where</span> <span
  m='1328580'>our</span> <span m='1328860'>stock</span> <span
  m='1329360'>behaves</span> <span m='1330680'>like</span> <span
  m='1330960'>this</span> <span m='1331220'>is</span> <span
  m='1331380'>called</span> <span m='1331660'>a</span> <span
  m='1331720'>risk</span> <span m='1331980'>neutral</span> <span
  m='1332250'>measure</span> <span m='1332590'>or</span> <span
  m='1332720'>martingale</span> <span m='1333700'>measure.</span> <span
  m='1336080'>And</span> <span m='1336390'>in</span> <span
  m='1336570'>this</span> <span m='1336820'>measure,</span> <span
  m='1337110'>as</span> <span m='1337230'>we</span> <span
  m='1337320'>will</span> <span m='1337450'>see,</span> <span m='1338690'>the
  value</span> <span m='1339280'>of the</span> <span
  m='1339460'>derivative</span> <span m='1339950'>will</span> <span
  m='1340140'>be</span> <span m='1340230'>just</span> <span
  m='1340530'>expected</span> <span m='1340890'>value</span> <span
  m='1342700'>of</span> <span m='1342980'>our</span> <span
  m='1343180'>pay-out.</span> <span m='1344820'>And</span> <span
  m='1345020'>that's--</span> <span m='1345380'>yeah.</span> <span
  m='1345740'>That's</span> <span m='1347450'>what</span> <span
  m='1347770'>I'm</span> <span m='1347890'>trying</span> <span
  m='1348190'>to</span> <span m='1348290'>say,</span> <span
  m='1348480'>here.</span> </p><p><span m='1353200'>So</span> <span
  m='1353510'>now</span> <span m='1353960'>let's</span> <span
  m='1354990'>get</span> <span m='1355600'>into</span> <span
  m='1356810'>continuous</span> <span m='1357350'>world.</span> <span
  m='1357850'>Right?</span> <span m='1360260'>In</span> <span
  m='1360430'>continuous</span> <span m='1360860'>world,</span> <span
  m='1361150'>we'll</span> <span m='1361540'>need</span> <span
  m='1361800'>some</span> <span m='1361980'>assumptions</span> <span
  m='1363000'>on</span> <span m='1363170'>the</span> <span
  m='1363270'>dynamics</span> <span m='1364530'>of</span> <span
  m='1364660'>our</span> <span m='1364920'>stock</span> <span
  m='1366390'>underline.</span> <span m='1366930'>And</span> <span
  m='1368190'>let's</span> <span m='1368570'>make</span> <span
  m='1368840'>an</span> <span m='1368930'>assumption</span> <span
  m='1369500'>that</span> <span m='1372680'>it</span> <span
  m='1372860'>is</span> <span m='1372990'>log</span> <span
  m='1373220'>normal.</span> <span m='1374660'>What</span> <span
  m='1375050'>does</span> <span m='1375240'>it</span> <span
  m='1375310'>mean</span> <span m='1375440'>that</span> <span
  m='1375770'>it's</span> <span m='1375930'>log</span> <span
  m='1376260'>normal?</span> <span m='1376630'>It</span> <span
  m='1376760'>means</span> <span m='1377090'>that</span> <span
  m='1379280'>the</span> <span m='1381400'>proportional</span> <span
  m='1383150'>change</span> <span m='1383600'>of</span> <span
  m='1383740'>the</span> <span m='1383830'>stock,</span> <span
  m='1384250'>over</span> <span m='1385490'>infinitely</span> <span
  m='1385930'>small</span> <span m='1386690'>amount</span> <span
  m='1387070'>of</span> <span m='1387180'>time,</span> <span
  m='1387420'>dt,</span> <span m='1388970'>has</span> <span
  m='1389270'>some</span> <span m='1389470'>drift,</span> <span
  m='1389830'>mu,</span> <span m='1391080'>and</span> <span
  m='1392080'>some</span> <span m='1392160'>stochastic</span> <span
  m='1392890'>component,</span> <span m='1393780'>which</span> <span
  m='1394090'>is</span> <span m='1394400'>just</span> <span
  m='1395150'>Brownian</span> <span m='1395440'>Motion.</span> <span
  m='1395910'>Right?</span> </p><p><span m='1396950'>So</span> <span
  m='1397200'>this</span> <span m='1397480'>DW</span> <span
  m='1398120'>is</span> <span m='1399620'>distributed</span> <span
  m='1400510'>normally</span> <span m='1401130'>with</span> <span
  m='1404190'>mean</span> <span m='1404760'>0</span> <span
  m='1405520'>and</span> <span m='1405720'>standard</span> <span
  m='1406090'>deviation,</span> <span m='1406800'>which</span> <span
  m='1406920'>is</span> <span m='1407230'>actually</span> <span
  m='1407700'>square</span> <span m='1408000'>root of</span> <span
  m='1408210'>dt.</span> <span m='1408480'>That's</span> <span
  m='1408690'>how</span> <span m='1410110'>Brownian</span> <span
  m='1410480'>Motion</span> <span m='1410860'>works.</span> <span
  m='1411140'>And</span> <span m='1411280'>that's</span> <span
  m='1412020'>extremely</span> <span m='1412340'>important,</span> <span
  m='1412770'>that</span> <span m='1412860'>the</span> <span
  m='1412980'>standard</span> <span m='1413320'>deviation</span> <span
  m='1413720'>of</span> <span m='1414000'>Brownian</span> <span
  m='1414480'>Motion</span> <span m='1414735'>is</span> <span
  m='1414990'>square</span> <span m='1415360'>root</span> <span
  m='1416200'>of</span> <span m='1416980'>Delta</span> <span
  m='1417400'>t.</span> <span m='1419180'>And</span> <span
  m='1419370'>that's</span> <span m='1419600'>how it</span> <span
  m='1419870'>works.</span> </p><p><span m='1422990'>And</span> <span
  m='1423880'>again,</span> <span m='1424550'>we</span> <span
  m='1424610'>will</span> <span m='1424810'>use</span> <span
  m='1425160'>this</span> <span m='1425600'>idea</span> <span
  m='1426160'>of</span> <span m='1427590'>replicating</span> <span
  m='1428190'>portfolio.</span> <span m='1429520'>What</span> <span
  m='1429830'>would</span> <span m='1430000'>it</span> <span
  m='1430120'>mean</span> <span m='1430380'>in</span> <span
  m='1431460'>this</span> <span m='1431660'>case?</span> <span
  m='1432650'>Well,</span> <span m='1434450'>we</span> <span
  m='1435370'>would</span> <span m='1435580'>like</span> <span
  m='1435940'>to</span> <span m='1436050'>find</span> <span
  m='1436490'>such</span> <span m='1436830'>[? Confucians, ?]</span> <span
  m='1437980'>a</span> <span m='1438110'>and</span> <span m='1438310'>b,</span>
  <span m='1438880'>on</span> <span m='1439060'>this</span> <span
  m='1439600'>infinitely</span> <span m='1440160'>small</span> <span
  m='1440440'>period</span> <span m='1440760'>of</span> <span
  m='1440870'>time,</span> <span m='1441120'>dt,</span> <span
  m='1442580'>such</span> <span m='1443050'>that</span> <span
  m='1443690'>by</span> <span m='1444180'>combining</span> <span
  m='1445310'>small</span> <span m='1445690'>changes</span> <span
  m='1446140'>in</span> <span m='1446300'>stock,</span> <span
  m='1446670'>with</span> <span m='1446860'>[? Confucian ?]</span> <span
  m='1447380'>A,</span> <span m='1447690'>and</span> <span
  m='1448100'>small</span> <span m='1448520'>changes</span> <span
  m='1449200'>in</span> <span m='1449870'>bond,</span> <span
  m='1450380'>with</span> <span m='1450980'>[? Confucian ?]</span> <span
  m='1451530'>B,</span> <span m='1452480'>will</span> <span
  m='1452920'>exactly</span> <span m='1453590'>replicate</span> <span
  m='1454120'>the</span> <span m='1454230'>change</span> <span
  m='1454650'>in</span> <span m='1454800'>the</span> <span
  m='1454920'>derivative--</span> <span m='1455500'>in the</span> <span
  m='1455620'>pay-out</span> <span m='1456010'>of</span> <span
  m='1456140'>derivative--</span> <span m='1458030'>not</span> <span
  m='1458360'>pay-out.</span> <span m='1458630'>In</span> <span
  m='1458950'>the</span> <span m='1459060'>derivative.</span> <span
  m='1459590'>In</span> <span m='1459640'>the</span> <span
  m='1459740'>change</span> <span m='1460050'>of</span> <span
  m='1460140'>the</span> <span m='1460250'>derivative,</span> <span
  m='1461390'>over</span> <span m='1461660'>this</span> <span
  m='1461970'>infinitely</span> <span m='1462840'>small</span> <span
  m='1463220'>time,</span> <span m='1463570'>t.</span> </p><p><span
  m='1467240'>Well,</span> <span m='1467580'>to</span> <span
  m='1467680'>do</span> <span m='1467800'>this,</span> <span
  m='1468050'>we'll</span> <span m='1468800'>need</span> <span
  m='1469040'>to</span> <span m='1469140'>use</span> <span
  m='1469610'>Ito's</span> <span m='1469770'>formula.</span> <span
  m='1471170'>Did</span> <span m='1471560'>you</span> <span
  m='1472060'>talk</span> <span m='1472300'>about</span> <span
  m='1472590'>Ito</span> <span m='1472930'>already?</span> <span
  m='1473300'>OK.</span> <span m='1473540'>Cool.</span> <span
  m='1474020'>That's</span> <span m='1474500'>great.</span> </p><p><span
  m='1475320'>So</span> <span m='1476370'>just</span> <span
  m='1476610'>to</span> <span m='1476670'>remind</span> <span
  m='1477000'>you</span> <span m='1477310'>that</span> <span
  m='1477860'>Ito's</span> <span m='1478080'>formula</span> <span
  m='1478480'>is</span> <span m='1478640'>nothing</span> <span
  m='1478960'>more</span> <span m='1479210'>than</span> <span
  m='1479360'>the</span> <span m='1479570'>Taylor</span> <span
  m='1480180'>rule,</span> <span m='1480540'>actually--</span> <span
  m='1481580'>the</span> <span m='1481930'>first</span> <span
  m='1482340'>approximation</span> <span m='1483290'>up to</span> <span
  m='1484020'>dt.</span> <span m='1485560'>But</span> <span
  m='1486220'>because</span> <span m='1488500'>of</span> <span
  m='1488630'>the</span> <span m='1488720'>standard</span> <span
  m='1489100'>deviation</span> <span m='1489630'>of the</span> <span
  m='1489710'>Brownian</span> <span m='1490080'>Motion</span> <span
  m='1490450'>being</span> <span m='1491450'>on</span> <span
  m='1491620'>the</span> <span m='1491750'>scale</span> <span
  m='1492120'>of</span> <span m='1492210'>square</span> <span
  m='1492560'>root</span> <span m='1492770'>of</span> <span
  m='1492900'>t,</span> <span m='1493680'>we</span> <span
  m='1493830'>will</span> <span m='1493980'>need</span> <span
  m='1494450'>one</span> <span m='1494700'>more</span> <span
  m='1494920'>term</span> <span m='1495320'>there.</span> <span
  m='1495650'>Right?</span> </p><p><span m='1495910'>So</span> <span
  m='1496670'>one</span> <span m='1496920'>term</span> <span
  m='1497190'>is</span> <span m='1497460'>dfdt</span> <span
  m='1498200'>by</span> <span m='1498460'>dt.</span> <span
  m='1499130'>Another</span> <span m='1499770'>is df</span> <span
  m='1500150'>by</span> <span m='1500320'>dS</span> <span m='1500490'>by</span>
  <span m='1500630'>dS.</span> <span m='1501480'>And</span> <span
  m='1502670'>the</span> <span m='1502850'>square</span> <span
  m='1503400'>of</span> <span m='1503540'>dS</span> <span m='1504190'>now</span>
  <span m='1505060'>is</span> <span m='1505240'>actually</span> <span
  m='1505560'>of</span> <span m='1505680'>order</span> <span
  m='1506000'>of</span> <span m='1506190'>magnitude</span> <span
  m='1506810'>of</span> <span m='1506980'>dt.</span> <span m='1507740'>So</span>
  <span m='1507990'>we'll</span> <span m='1508250'>need</span> <span
  m='1508450'>a</span> <span m='1508510'>quadratic</span> <span
  m='1509060'>term</span> <span m='1509340'>there.</span> <span
  m='1512130'>All</span> <span m='1512220'>right.</span> </p><p><span
  m='1512500'>So</span> <span m='1512880'>if this</span> <span
  m='1513250'>is</span> <span m='1513380'>our df,</span> <span
  m='1516690'>so</span> <span m='1516950'>what</span> <span
  m='1517170'>we'll</span> <span m='1517390'>do--</span> <span
  m='1518460'>we'll</span> <span m='1518890'>differentiate.</span> <span
  m='1521290'>We'll</span> <span m='1522060'>just</span> <span
  m='1522930'>substitute</span> <span m='1523270'>it</span> <span
  m='1523610'>here.</span> <span m='1524000'>Right?</span> </p><p><span
  m='1525960'>We'll</span> <span m='1526160'>substitute</span> <span
  m='1526455'>it</span> <span m='1526750'>here.</span> <span
  m='1527110'>We'll</span> <span m='1527240'>substitute</span> <span
  m='1527770'>df</span> <span m='1529080'>taken</span> <span
  m='1529370'>from</span> <span m='1530760'>our dS,</span> <span
  m='1531980'>which is</span> <span m='1532410'>like</span> <span
  m='1532620'>this</span> <span m='1533690'>ndB.</span> <span
  m='1540380'>Let's</span> <span m='1540690'>not</span> <span
  m='1540920'>forget</span> <span m='1541450'>that</span> <span
  m='1542650'>dB--</span> <span m='1543130'>that B</span> <span
  m='1543610'>is</span> <span m='1544230'>deterministic.</span> <span
  m='1545030'>Right?</span> <span m='1545660'>There</span> <span
  m='1545910'>is</span> <span m='1546080'>nothing</span> <span
  m='1546490'>uncertain</span> <span m='1546960'>about</span> <span
  m='1547260'>it.</span> <span m='1547390'>So</span> <span m='1548380'>dB</span>
  <span m='1548810'>is</span> <span m='1548990'>actually</span> <span
  m='1549370'>rBdt.</span> <span m='1551464'>All right?</span> <span
  m='1552330'>Because</span> <span m='1552850'>our</span> <span
  m='1554500'>B</span> <span m='1554790'>grows</span> <span
  m='1555130'>exponentially</span> <span m='1557900'>with</span> <span
  m='1558090'>interest</span> <span m='1558430'>rate,</span> <span
  m='1558620'>r.</span> </p><p><span m='1560120'>So</span> <span
  m='1560220'>we</span> <span m='1560350'>substitute</span> <span
  m='1561310'>everything</span> <span m='1561920'>into</span> <span
  m='1562350'>the</span> <span m='1562490'>formula</span> <span
  m='1562890'>above.</span> <span m='1564850'>This is</span> <span
  m='1564990'>just</span> <span m='1565410'>our</span> <span
  m='1565750'>df</span> <span m='1568470'>with</span> <span
  m='1569050'>dS</span> <span m='1569200'>expanded</span> <span
  m='1569970'>and</span> <span m='1570160'>everything.</span> <span
  m='1570630'>And</span> <span m='1570770'>then</span> <span
  m='1570960'>when</span> <span m='1571220'>we</span> <span
  m='1571330'>start</span> <span m='1572130'>comparing</span> <span
  m='1572590'>the</span> <span m='1572720'>terms.</span> <span
  m='1573940'>One</span> <span m='1575116'>immediate</span> <span
  m='1575990'>thing</span> <span m='1576590'>to</span> <span
  m='1576750'>notice--</span> <span m='1577460'>that</span> <span
  m='1579480'>a</span> <span m='1580970'>has</span> <span m='1581220'>to</span>
  <span m='1581280'>be</span> <span m='1581390'>equal</span> <span
  m='1581670'>to</span> <span m='1582530'>df</span> <span m='1582930'>or</span>
  <span m='1583350'>dS,</span> <span m='1583980'>for</span> <span
  m='1585410'>this</span> <span m='1585600'>to</span> <span
  m='1585700'>hold.</span> <span m='1585990'>Right?</span> </p><p><span
  m='1587360'>And</span> <span m='1587650'>if</span> <span
  m='1587750'>you</span> <span m='1587850'>compare</span> <span
  m='1588430'>the</span> <span m='1589140'>terms,</span> <span
  m='1589800'>dt,</span> <span m='1590510'>we'll</span> <span
  m='1590720'>get</span> <span m='1591030'>this</span> <span
  m='1591300'>expression</span> <span m='1591850'>here.</span> <span
  m='1592560'>But</span> <span m='1592790'>that's</span> <span
  m='1593050'>actually</span> <span m='1593440'>even</span> <span
  m='1593660'>more</span> <span m='1594500'>the</span> <span
  m='1594580'>most</span> <span m='1594830'>important</span> <span
  m='1595260'>part.</span> <span m='1597660'>Then</span> <span
  m='1598870'>we'll</span> <span m='1599590'>go</span> <span
  m='1599960'>and</span> <span m='1600160'>use</span> <span
  m='1601790'>our</span> <span m='1602290'>knowledge</span> <span
  m='1603330'>that</span> <span m='1604580'>some</span> <span
  m='1604890'>part</span> <span m='1605340'>of</span> <span
  m='1605500'>our</span> <span m='1605850'>equation</span> <span
  m='1606430'>is</span> <span m='1606600'>deterministic</span> <span
  m='1609050'>and</span> <span m='1609420'>basically</span> <span
  m='1611510'>take</span> <span m='1612010'>f</span> <span m='1612230'>and
  aS</span> <span m='1612555'>on</span> <span m='1612880'>one</span> <span
  m='1613070'>side</span> <span m='1613600'>and</span> <span
  m='1613760'>leave</span> <span m='1614090'>the</span> <span
  m='1614400'>deterministic</span> <span m='1615070'>part,</span> <span
  m='1615330'>on</span> <span m='1615440'>the</span> <span
  m='1615520'>other</span> <span m='1615680'>side,</span> <span
  m='1617060'>differentiated</span> <span m='1618810'>once</span> <span
  m='1619110'>again.</span> <span m='1620000'>And</span> <span
  m='1620260'>left</span> <span m='1621020'>side</span> <span
  m='1621360'>will</span> <span m='1621540'>be</span> <span
  m='1621720'>just</span> <span m='1622780'>[? rBdt. ?]</span> <span
  m='1624940'>And</span> <span m='1625960'>if</span> <span m='1626720'>we</span>
  <span m='1626930'>substitute</span> <span m='1627430'>once</span> <span
  m='1627690'>again</span> <span m='1628480'>df.</span> <span
  m='1628870'>And</span> <span m='1629810'>don't</span> <span
  m='1630080'>forget</span> <span m='1630420'>that</span> <span
  m='1630630'>what</span> <span m='1630860'>we</span> <span
  m='1631070'>learned</span> <span m='1631430'>is</span> <span
  m='1631660'>that</span> <span m='1631900'>a</span> <span m='1632050'>is</span>
  <span m='1632500'>equal</span> <span m='1632790'>to</span> <span
  m='1633070'>df</span> <span m='1633490'>by</span> <span m='1633670'>dS.</span>
  </p><p><span m='1635530'>Then</span> <span m='1635700'>we</span> <span
  m='1635850'>collect</span> <span m='1636270'>all of</span> <span
  m='1636400'>the</span> <span m='1636510'>terms</span> <span
  m='1637340'>and</span> <span m='1637850'>arrive</span> <span m='1639780'>to
  this</span> <span m='1640320'>partial</span> <span
  m='1640680'>differential</span> <span m='1641160'>equation</span> <span
  m='1644450'>which</span> <span m='1644750'>connects--</span> <span
  m='1645970'>which</span> <span m='1646180'>basically</span> <span
  m='1646570'>is</span> <span m='1646680'>a</span> <span
  m='1646750'>partial</span> <span m='1647060'>differential</span> <span
  m='1647540'>equation</span> <span m='1647820'>for</span> <span
  m='1648000'>the</span> <span m='1648180'>current</span> <span
  m='1648560'>price</span> <span m='1649430'>of</span> <span
  m='1649590'>a</span> <span m='1649650'>derivative--</span> <span
  m='1651920'>of</span> <span m='1652090'>any</span> <span
  m='1652160'>derivative.</span> <span m='1654480'>And</span> <span
  m='1654640'>how</span> <span m='1655480'>if</span> <span m='1655730'>we</span>
  <span m='1655840'>solve</span> <span m='1656270'>it,</span> <span
  m='1657090'>then</span> <span m='1657410'>we</span> <span
  m='1657710'>should</span> <span m='1658230'>actually</span> <span
  m='1658480'>be</span> <span m='1658670'>able</span> <span
  m='1659480'>to</span> <span m='1659680'>know</span> <span
  m='1659920'>the</span> <span m='1660030'>price</span> <span m='1660870'>of
  the</span> <span m='1661240'>derivative.</span> </p><p><span
  m='1661980'>So</span> <span m='1662240'>now</span> <span
  m='1663100'>how</span> <span m='1663340'>do</span> <span m='1663450'>we</span>
  <span m='1663540'>solve</span> <span m='1663820'>this</span> <span
  m='1664390'>partial</span> <span m='1664710'>differential</span> <span
  m='1665180'>equation?</span> <span m='1665850'>Well,</span> <span
  m='1666070'>for--</span> <span m='1666250'>yeah.</span> <span
  m='1667000'>So</span> <span m='1667720'>a</span> <span m='1667890'>few</span>
  <span m='1668050'>observations</span> <span m='1668740'>about</span> <span
  m='1669240'>this equation.</span> <span m='1671330'>Well,</span> <span
  m='1675770'>the</span> <span m='1676000'>first</span> <span
  m='1677020'>observation</span> <span m='1677620'>is</span> <span
  m='1677860'>that</span> <span m='1679210'>any</span> <span
  m='1679510'>tradable</span> <span m='1679930'>derivative--</span> <span
  m='1680600'>we</span> <span m='1681400'>made</span> <span
  m='1681870'>no</span> <span m='1682170'>assumptions</span> <span
  m='1682700'>about</span> <span m='1682980'>the</span> <span
  m='1683080'>pay-off.</span> <span m='1684330'>So</span> <span
  m='1685050'>any</span> <span m='1685320'>tradable</span> <span
  m='1685770'>derivative</span> <span m='1686260'>as</span> <span
  m='1686420'>any</span> <span m='1686670'>pay-off</span> <span
  m='1687080'>should</span> <span m='1687470'>satisfy</span> <span
  m='1688060'>this</span> <span m='1688370'>equation.</span> </p><p><span
  m='1690780'>The</span> <span m='1690850'>other</span> <span
  m='1691840'>observation</span> <span m='1692440'>is</span> <span
  m='1692790'>as</span> <span m='1693020'>we</span> <span
  m='1693160'>expected,</span> <span m='1694890'>there</span> <span
  m='1695240'>is</span> <span m='1695810'>no</span> <span
  m='1696960'>dependency</span> <span m='1697540'>on</span> <span
  m='1697690'>real</span> <span m='1697960'>world</span> <span
  m='1698620'>drift</span> <span m='1699050'>or</span> <span
  m='1699310'>any</span> <span m='1700550'>probability</span> <span
  m='1701050'>of it</span> <span m='1701140'>going</span> <span
  m='1701610'>up</span> <span m='1702350'>or</span> <span
  m='1702590'>down.</span> <span m='1703445'>The</span> <span
  m='1703900'>only</span> <span m='1705180'>dependence</span> <span
  m='1705625'>is</span> <span m='1706070'>on</span> <span m='1706300'>the</span>
  <span m='1706400'>volatility</span> <span m='1706970'>of the stock.</span>
  <span m='1707590'>Right?</span> <span m='1711110'>Not</span> <span
  m='1711440'>only</span> <span m='1712450'>we</span> <span
  m='1712860'>found</span> <span m='1713230'>the</span> <span
  m='1713320'>value</span> <span m='1713620'>of</span> <span
  m='1713730'>the</span> <span m='1713830'>derivative--</span> <span
  m='1714400'>most</span> <span m='1714910'>importantly,</span> <span
  m='1716030'>we</span> <span m='1716270'>actually</span> <span
  m='1718290'>were</span> <span m='1718620'>able</span> <span
  m='1719030'>to</span> <span m='1719500'>come</span> <span
  m='1719730'>up</span> <span m='1721090'>with a</span> <span
  m='1721360'>hedging</span> <span m='1721670'>strategy.</span> </p><p><span
  m='1722760'>And</span> <span m='1722950'>what</span> <span
  m='1723250'>does</span> <span m='1723350'>it</span> <span
  m='1723500'>mean,</span> <span m='1723790'>we</span> <span
  m='1723940'>came</span> <span m='1724200'>up</span> <span
  m='1724370'>with</span> <span m='1724480'>a</span> <span
  m='1724530'>hedging</span> <span m='1724850'>strategy?</span> <span
  m='1725810'>Well,</span> <span m='1726060'>we</span> <span
  m='1726220'>found</span> <span m='1726630'>coefficients--</span> <span
  m='1727400'>for</span> <span m='1727800'>any</span> <span
  m='1728350'>time,</span> <span m='1729490'>we</span> <span
  m='1729750'>found</span> <span m='1730040'>the</span> <span
  m='1730140'>coefficients,</span> <span m='1730770'>a</span> <span
  m='1730890'>and</span> <span m='1731090'>b,</span> <span
  m='1731960'>such</span> <span m='1732560'>that</span> <span
  m='1733040'>we</span> <span m='1733220'>have a</span> <span
  m='1733370'>replicating</span> <span m='1734000'>portfolio.</span> <span
  m='1735460'>So</span> <span m='1735650'>what</span> <span
  m='1735870'>we</span> <span m='1736140'>could</span> <span
  m='1736450'>do,</span> <span m='1736740'>at</span> <span
  m='1736950'>any</span> <span m='1737160'>point</span> <span
  m='1737390'>of</span> <span m='1737500'>time,</span> <span
  m='1738090'>we</span> <span m='1738220'>can</span> <span
  m='1738380'>hold</span> <span m='1740270'>the</span> <span
  m='1740740'>short</span> <span m='1740970'>derivative</span> <span
  m='1741990'>and</span> <span m='1742200'>long</span> <span
  m='1742560'>the</span> <span m='1742630'>portfolio</span> <span
  m='1743310'>of</span> <span m='1743440'>stock,</span> <span
  m='1743860'>itself,</span> <span m='1744480'>and</span> <span
  m='1744690'>some</span> <span m='1744990'>cash,</span> <span
  m='1746010'>and</span> <span m='1746150'>then</span> <span
  m='1746220'>know</span> <span m='1746430'>how</span> <span
  m='1746590'>much</span> <span m='1746890'>it</span> <span
  m='1747190'>should</span> <span m='1747370'>be.</span> </p><p><span
  m='1747810'>Here,</span> <span m='1748060'>it's</span> <span
  m='1748200'>more</span> <span m='1748380'>complicated.</span> <span
  m='1748870'>We</span> <span m='1748980'>have</span> <span
  m='1749230'>to</span> <span m='1749720'>dynamically</span> <span
  m='1750620'>change</span> <span m='1750970'>these</span> <span
  m='1751180'>numbers,</span> <span m='1751510'>as time</span> <span
  m='1752290'>develops.</span> <span m='1752760'>Every</span> <span
  m='1753120'>time,</span> <span m='1753380'>dt</span> <span
  m='1754370'>will</span> <span m='1754620'>have</span> <span m='1754830'>to
  rebalance.</span> <span m='1755890'>But</span> <span m='1756460'>both</span>
  <span m='1757320'>parts</span> <span m='1757580'>will replicate</span> <span
  m='1758330'>each</span> <span m='1758570'>other</span> <span
  m='1759420'>perfectly.</span> </p><p><span m='1760480'>It's</span> <span
  m='1760620'>like</span> <span m='1761070'>in a bookie's</span> <span
  m='1761780'>example.</span> <span m='1762590'>We</span> <span
  m='1762710'>can</span> <span m='1765100'>go</span> <span m='1767010'>to
  a</span> <span m='1767300'>counterparty,</span> <span m='1767960'>agree</span>
  <span m='1769470'>for</span> <span m='1770010'>some</span> <span
  m='1770280'>derivative</span> <span m='1770690'>contract.</span> <span
  m='1772030'>For all, there</span> <span m='1772320'>will be</span> <span
  m='1772450'>some</span> <span m='1772760'>fee.</span> <span
  m='1773810'>And</span> <span m='1773980'>then</span> <span
  m='1774150'>we'll</span> <span m='1774400'>go</span> <span
  m='1774640'>to</span> <span m='1774810'>exchange</span> <span
  m='1775320'>and</span> <span m='1775440'>buy</span> <span
  m='1775680'>the</span> <span m='1775760'>stock,</span> <span
  m='1777040'>and</span> <span m='1777300'>we</span> <span
  m='1777510'>will</span> <span m='1777730'>get</span> <span
  m='1777980'>just</span> <span m='1778250'>cash</span> <span
  m='1778480'>from</span> <span m='1778670'>the</span> <span
  m='1778760'>bank.</span> <span m='1779475'>And we'll</span> <span
  m='1779820'>maintain</span> <span m='1780460'>this</span> <span
  m='1780780'>at</span> <span m='1781040'>some</span> <span
  m='1781240'>amount</span> <span m='1781570'>of</span> <span
  m='1781640'>stock</span> <span m='1781990'>and</span> <span
  m='1782130'>some</span> <span m='1782570'>amount</span> <span
  m='1782990'>of</span> <span m='1783140'>cash.</span> </p><p><span
  m='1783800'>And</span> <span m='1784300'>we'll</span> <span
  m='1784580'>be</span> <span m='1784670'>sure</span> <span
  m='1785090'>that</span> <span m='1786030'>we</span> <span
  m='1786160'>are</span> <span m='1786260'>hedged.</span> <span
  m='1786610'>There</span> <span m='1786850'>is</span> <span
  m='1786950'>no</span> <span m='1787120'>risk</span> <span
  m='1787540'>in</span> <span m='1788040'>this</span> <span
  m='1788560'>combination</span> <span m='1788890'>of</span> <span
  m='1789220'>the</span> <span m='1789330'>derivative</span> <span
  m='1790570'>and</span> <span m='1790760'>our</span> <span
  m='1790970'>hedge.</span> <span m='1792100'>So</span> <span
  m='1793180'>we</span> <span m='1793380'>will</span> <span
  m='1793630'>just</span> <span m='1793920'>collect</span> <span
  m='1794360'>a</span> <span m='1794420'>fee</span> <span m='1794740'>on</span>
  <span m='1794820'>the</span> <span m='1794920'>transaction.</span>
  </p><p><span m='1796040'>So</span> <span m='1797040'>that's</span> <span
  m='1797360'>what</span> <span m='1797570'>actually--</span> <span
  m='1798140'>how</span> <span m='1798410'>the</span> <span
  m='1798520'>business</span> <span m='1798950'>is</span> <span
  m='1799080'>working.</span> <span m='1801280'>Traders</span> <span
  m='1801690'>are</span> <span m='1801810'>trading</span> <span
  m='1802250'>and</span> <span m='1802390'>hedging</span> <span
  m='1802910'>their</span> <span m='1803330'>positions</span> <span
  m='1804410'>immediately.</span> <span m='1805180'>I</span> <span
  m='1805260'>mean,</span> <span m='1805410'>they</span> <span
  m='1805560'>do</span> <span m='1806060'>take</span> <span
  m='1806350'>some</span> <span m='1806590'>market</span> <span
  m='1806970'>risks.</span> <span m='1807590'>But</span> <span
  m='1808240'>you</span> <span m='1808420'>want</span> <span
  m='1808640'>to</span> <span m='1808730'>take</span> <span
  m='1809460'>very</span> <span m='1809780'>little</span> <span
  m='1810130'>and</span> <span m='1810260'>very</span> <span
  m='1810500'>directional,</span> <span m='1811410'>very</span> <span
  m='1811850'>specific</span> <span m='1812420'>market</span> <span
  m='1812780'>risks</span> <span m='1813020'>and</span> <span
  m='1813160'>not</span> <span m='1813910'>everything.</span> </p><p><span
  m='1816890'>So</span> <span m='1818230'>our</span> <span
  m='1818480'>strategy</span> <span m='1818920'>allows</span> <span
  m='1819350'>us</span> <span m='1819960'>to</span> <span
  m='1820120'>have</span> <span m='1820370'>a</span> <span
  m='1820620'>hedging</span> <span m='1820760'>portfolio</span> <span
  m='1821180'>at</span> <span m='1821450'>the</span> <span
  m='1821570'>same</span> <span m='1821840'>time--</span> <span
  m='1822560'>hedging</span> <span m='1822880'>strategy.</span> <span
  m='1824910'>And</span> <span m='1825050'>now</span> <span m='1825310'>there
  are</span> <span m='1825720'>more</span> <span m='1825930'>mathematical</span>
  <span m='1826520'>but</span> <span m='1826870'>practical</span> <span
  m='1829400'>consequences</span> <span m='1830160'>that</span> <span
  m='1830390'>actually,</span> <span m='1831480'>by</span> <span
  m='1832260'>certain--</span> <span m='1833300'>not</span> <span
  m='1833620'>very</span> <span m='1833940'>easy--</span> <span
  m='1834790'>change</span> <span m='1835100'>of</span> <span
  m='1835240'>variables,</span> <span m='1836240'>we</span> <span
  m='1836390'>can</span> <span m='1836650'>take</span> <span
  m='1836940'>the</span> <span m='1837130'>Black-Scholes</span> <span
  m='1837630'>equation</span> <span m='1838080'>and</span> <span
  m='1838220'>put</span> <span m='1838400'>it</span> <span
  m='1838520'>back</span> <span m='1838730'>to</span> <span
  m='1838840'>heat</span> <span m='1839120'>equation.</span> </p><p><span
  m='1840350'>Actually,</span> <span m='1841280'>I</span> <span
  m='1841510'>suggest,</span> <span m='1842560'>as</span> <span
  m='1842820'>one</span> <span m='1843020'>of</span> <span
  m='1843140'>the</span> <span m='1843240'>topics</span> <span
  m='1844220'>for</span> <span m='1844360'>the</span> <span
  m='1844480'>final</span> <span m='1844780'>paper,</span> <span
  m='1845710'>for</span> <span m='1845890'>you</span> <span
  m='1846490'>to</span> <span m='1846580'>do</span> <span m='1846710'>it</span>
  <span m='1846850'>or</span> <span m='1847800'>check it</span> <span
  m='1847920'>out</span> <span m='1849620'>in</span> <span
  m='1849760'>the</span> <span m='1849860'>books.</span> <span
  m='1850320'>Go</span> <span m='1850590'>and</span> <span
  m='1850710'>understand</span> <span m='1851140'>it.</span> <span
  m='1852990'>But</span> <span m='1853880'>the</span> <span
  m='1853960'>good</span> <span m='1854200'>part</span> <span
  m='1854410'>of</span> <span m='1854520'>it--</span> <span
  m='1854680'>that</span> <span m='1854850'>heat</span> <span
  m='1855080'>equation</span> <span m='1855500'>is</span> <span
  m='1855630'>well</span> <span m='1855840'>known</span> <span
  m='1856250'>and</span> <span m='1856690'>well</span> <span
  m='1856860'>understood.</span> <span m='1857400'>There</span> <span
  m='1857900'>are</span> <span m='1858080'>many,</span> <span
  m='1860150'>many</span> <span m='1860380'>ways</span> <span
  m='1860710'>to</span> <span m='1860850'>solve it</span> <span
  m='1861220'>numerically</span> <span m='1861790'>for</span> <span
  m='1862520'>simple</span> <span m='1863010'>pay-outs</span> <span
  m='1864215'>for</span> <span m='1864710'>Calls and</span> <span
  m='1865190'>Puts.</span> <span m='1866070'>We</span> <span
  m='1866160'>don't</span> <span m='1866380'>have</span> <span
  m='1866620'>to</span> <span m='1866730'>do</span> <span m='1866860'>it</span>
  <span m='1866960'>numerically,</span> <span m='1867470'>but</span> <span
  m='1868230'>if the</span> <span m='1868360'>pay-outs</span> <span
  m='1869190'>are</span> <span m='1869320'>more</span> <span
  m='1869550'>complicated</span> <span m='1870320'>or</span> <span
  m='1871770'>the</span> <span m='1872790'>dynamics</span> <span
  m='1874930'>is</span> <span m='1875100'>different,</span> <span
  m='1877040'>then</span> <span m='1877880'>numerical</span> <span
  m='1878320'>methods</span> <span m='1878730'>will</span> <span
  m='1878920'>be</span> <span m='1879020'>needed,</span> <span
  m='1879410'>for</span> <span m='1879580'>sure.</span> </p><p><span
  m='1882180'>So</span> <span m='1883200'>again,</span> <span
  m='1883700'>to</span> <span m='1883860'>solve</span> <span
  m='1884130'>this</span> <span m='1884290'>equation,</span> <span
  m='1884770'>we'll</span> <span m='1884980'>need,</span> <span
  m='1886070'>as</span> <span m='1886290'>for</span> <span
  m='1886540'>any</span> <span m='1887540'>partial</span> <span
  m='1887910'>differential</span> <span m='1888440'>equation,</span> <span
  m='1889090'>we'll</span> <span m='1889310'>need</span> <span
  m='1889590'>some</span> <span m='1889840'>boundary</span> <span
  m='1890400'>and</span> <span m='1890550'>initial</span> <span
  m='1890910'>conditions.</span> <span m='1892290'>And</span> <span
  m='1892730'>these</span> <span m='1893120'>come</span> <span
  m='1894020'>from</span> <span m='1894450'>our</span> <span
  m='1894780'>final</span> <span m='1895210'>pay-out</span> <span
  m='1896665'>of</span> <span m='1896940'>the</span> <span
  m='1897090'>option,</span> <span m='1897980'>which</span> <span
  m='1898210'>we</span> <span m='1899370'>know.</span> <span m='1899600'>We will
  know what</span> <span m='1899990'>happens at</span> <span
  m='1900410'>expiry.</span> </p><p><span m='1901750'>And</span> <span
  m='1902100'>some</span> <span m='1902350'>boundary</span> <span
  m='1902720'>conditions</span> <span m='1904110'>for Call</span> <span
  m='1905370'>and</span> <span m='1905570'>Put,</span> <span
  m='1907120'>the</span> <span m='1907240'>final</span> <span
  m='1907920'>pay-out</span> <span m='1908370'>is</span> <span
  m='1909150'>we</span> <span m='1909320'>know.</span> <span
  m='1909670'>Right?</span> <span m='1910510'>So</span> <span
  m='1910700'>at</span> <span m='1910930'>time,</span> <span
  m='1911230'>t.</span> <span m='1913370'>And</span> <span
  m='1913930'>the</span> <span m='1914080'>boundary</span> <span
  m='1914460'>conditions</span> <span m='1916090'>we</span> <span
  m='1916200'>discussed,</span> <span m='1917360'>we</span> <span
  m='1917580'>can</span> <span m='1918300'>observe</span> <span
  m='1918830'>them</span> <span m='1920570'>graphically.</span> </p><p><span
  m='1921830'>So</span> <span m='1922080'>basically</span> <span
  m='1923010'>for</span> <span m='1923300'>Call,</span> <span
  m='1925300'>as</span> <span m='1925480'>we</span> <span
  m='1925590'>said,</span> <span m='1927950'>at</span> <span
  m='1928790'>current</span> <span m='1929140'>time,</span> <span
  m='1929390'>t,</span> <span m='1929850'>and</span> <span
  m='1930400'>boundary</span> <span m='1930910'>0,</span> <span
  m='1931400'>it</span> <span m='1931540'>should</span> <span
  m='1931730'>be</span> <span m='1931820'>0.</span> <span m='1932930'>The</span>
  <span m='1933380'>price</span> <span m='1933810'>should</span> <span
  m='1933940'>be</span> <span m='1934000'>0.</span> <span m='1934400'>And</span>
  <span m='1936760'>at</span> <span m='1938450'>infinity,</span> <span
  m='1939300'>it</span> <span m='1939420'>should</span> <span
  m='1939630'>be</span> <span m='1939760'>actually</span> <span
  m='1940040'>the</span> <span m='1940150'>Forward</span> <span
  m='1940510'>price.</span> <span m='1940700'>So</span> <span
  m='1941150'>it</span> <span m='1941700'>should</span> <span
  m='1941900'>be</span> <span m='1941980'>just</span> <span
  m='1946210'>discounted</span> <span m='1946920'>S</span> <span
  m='1947190'>minus</span> <span m='1947530'>K.</span> <span
  m='1947850'>Discounted</span> <span m='1948450'>pay-out.</span> <span
  m='1948945'>Right?</span> <span m='1952910'>And</span> <span
  m='1953190'>similarly</span> <span m='1953860'>for</span> <span
  m='1954180'>Put.</span> </p><p><span m='1960190'>So</span> <span
  m='1960470'>given</span> <span m='1960810'>these</span> <span
  m='1961380'>conditions,</span> <span m='1966390'>we</span> <span
  m='1966510'>can</span> <span m='1966690'>solve</span> <span
  m='1966940'>the</span> <span m='1967010'>equation.</span> <span
  m='1967500'>And</span> <span m='1967820'>as</span> <span m='1967990'>I</span>
  <span m='1968070'>said,</span> <span m='1968470'>for</span> <span
  m='1969460'>Call and</span> <span m='1969870'>Put</span> <span
  m='1970880'>and</span> <span m='1971230'>for</span> <span
  m='1971450'>simple</span> <span m='1971810'>dynamics--</span> <span
  m='1972670'>Black-Scholes</span> <span m='1973180'>dynamical</span> <span
  m='1973920'>or</span> <span m='1974000'>log normal</span> <span
  m='1974300'>dynamics--</span> <span m='1975620'>actually,</span> <span
  m='1978090'>these</span> <span m='1979590'>equations</span> <span
  m='1980020'>can</span> <span m='1980210'>be</span> <span
  m='1980310'>solved</span> <span m='1980650'>exactly--</span> <span
  m='1981480'>exactly</span> <span m='1982050'>meaning</span> <span
  m='1982450'>up</span> <span m='1983670'>to</span> <span
  m='1983760'>this</span> <span m='1983970'>term,</span> <span
  m='1984630'>the</span> <span m='1984710'>normal</span> <span
  m='1986480'>distribution,</span> <span m='1987080'>which</span> <span
  m='1987170'>still</span> <span m='1987480'>has</span> <span
  m='1987720'>to</span> <span m='1987820'>be</span> <span
  m='1988310'>computed</span> <span m='1988810'>numerically,</span> <span
  m='1989890'>obviously.</span> <span m='1990610'>But</span> <span
  m='1990850'>here</span> <span m='1991150'>are</span> <span
  m='1991240'>the</span> <span m='1991290'>formulas.</span> </p><p><span
  m='1993200'>They</span> <span m='1993350'>do</span> <span
  m='1993780'>kind</span> <span m='1994070'>of</span> <span
  m='1994150'>look</span> <span m='1994700'>a</span> <span
  m='1994810'>little</span> <span m='1995010'>bit--</span> <span
  m='1995210'>and</span> <span m='1995360'>we'll see</span> <span
  m='1996470'>about</span> <span m='1996810'>it--</span> <span
  m='1997640'>there</span> <span m='1997870'>is</span> <span
  m='1997950'>some</span> <span m='1998420'>kind</span> <span
  m='1998690'>of</span> <span m='1998850'>expected</span> <span
  m='1999300'>volume</span> <span m='1999670'>going</span> <span
  m='1999890'>on.</span> <span m='2000270'>Right?</span> <span
  m='2001030'>One</span> <span m='2001410'>probability</span> <span
  m='2003140'>times</span> <span m='2003380'>another.</span> <span
  m='2005130'>But</span> <span m='2005340'>these</span> <span
  m='2005780'>are</span> <span m='2005880'>the</span> <span
  m='2006010'>formulas.</span> <span m='2006600'>And</span> <span
  m='2006760'>that's</span> <span m='2006970'>how</span> <span
  m='2007170'>I</span> <span m='2007290'>drew</span> <span
  m='2007680'>the</span> <span m='2008020'>lines</span> <span
  m='2008870'>on</span> <span m='2009050'>the</span> <span
  m='2009140'>graphs.</span> </p><p><span m='2014440'>And</span> <span
  m='2014730'>as</span> <span m='2014880'>I</span> <span
  m='2015000'>said,</span> <span m='2020090'>in</span> <span
  m='2020270'>fact,</span> <span m='2023230'>the</span> <span
  m='2023340'>whole</span> <span m='2023660'>world,</span> <span
  m='2025420'>instead</span> <span m='2025790'>of</span> <span
  m='2025880'>solving</span> <span m='2026550'>the</span> <span
  m='2027800'>whole</span> <span m='2028090'>partial</span> <span
  m='2028440'>differential</span> <span m='2028910'>equation,</span> <span
  m='2029900'>we</span> <span m='2030040'>can</span> <span
  m='2030360'>approach</span> <span m='2030920'>it</span> <span
  m='2031420'>from</span> <span m='2031710'>a</span> <span
  m='2034322'>risk</span> <span m='2034750'>neutral</span> <span
  m='2035030'>position</span> <span m='2035450'>and</span> <span
  m='2035600'>say</span> <span m='2035830'>that,</span> <span
  m='2036070'>in</span> <span m='2036250'>fact,</span> <span
  m='2037220'>the</span> <span m='2037350'>price</span> <span
  m='2038010'>of</span> <span m='2038170'>our</span> <span
  m='2038440'>derivative</span> <span m='2038970'>now</span> <span
  m='2040010'>is</span> <span m='2040700'>just</span> <span
  m='2041390'>expected</span> <span m='2042020'>value</span> <span
  m='2042390'>of</span> <span m='2043280'>pay-out,</span> <span
  m='2044140'>discounted,</span> <span m='2044350'>probably,</span> <span
  m='2046310'>from</span> <span m='2049040'>the</span> <span
  m='2049130'>maturity.</span> <span m='2050429'>But</span> <span
  m='2050969'>not</span> <span m='2051250'>in</span> <span
  m='2051469'>real</span> <span m='2051770'>time</span> <span
  m='2052179'>or</span> <span m='2052500'>real</span> <span
  m='2053030'>world</span> <span m='2053350'>measure,</span> <span
  m='2053679'>but</span> <span m='2053880'>in</span> <span
  m='2053989'>some</span> <span m='2054250'>specific</span> <span
  m='2054940'>risk</span> <span m='2055199'>neutral</span> <span
  m='2055510'>measure.</span> </p><p><span m='2056179'>And</span> <span
  m='2056310'>how</span> <span m='2056810'>do</span> <span m='2057070'>we</span>
  <span m='2057219'>find</span> <span m='2057510'>this</span> <span
  m='2057730'>risk</span> <span m='2057989'>neutral</span> <span
  m='2058230'>measure?</span> <span m='2058790'>Well,</span> <span
  m='2059679'>the</span> <span m='2059830'>risk</span> <span
  m='2060120'>neutral</span> <span m='2060420'>measure</span> <span
  m='2060989'>is</span> <span m='2061150'>such</span> <span m='2061980'>that
  the</span> <span m='2062370'>drift</span> <span m='2062790'>of</span> <span
  m='2062960'>our</span> <span m='2063219'>stock</span> <span
  m='2063500'>is</span> <span m='2063830'>actually</span> <span
  m='2064239'>interest</span> <span m='2064650'>rate.</span> <span
  m='2064909'>It's</span> <span m='2065159'>riskless.</span> <span
  m='2066500'>That's</span> <span m='2066710'>exactly</span> <span
  m='2067499'>how</span> <span m='2070505'>we</span> <span
  m='2070920'>saw</span> <span m='2071179'>it in</span> <span
  m='2071370'>our</span> <span m='2071920'>binary</span> <span
  m='2072420'>example.</span> <span m='2076263'>All right?</span> </p><p><span
  m='2076739'>So</span> <span m='2077730'>even</span> <span
  m='2078040'>in</span> <span m='2078330'>our</span> <span
  m='2078530'>binary</span> <span m='2079659'>example,</span> <span
  m='2080570'>our</span> <span m='2081929'>expected</span> <span
  m='2082460'>value of</span> <span m='2082760'>our</span> <span
  m='2083050'>stock,</span> <span m='2083380'>under</span> <span
  m='2083659'>risk</span> <span m='2083920'>neutral</span> <span
  m='2084389'>measure,</span> <span m='2084730'>meaning</span> <span
  m='2085620'>using</span> <span m='2086060'>the</span> <span
  m='2086659'>risk</span> <span m='2086940'>neutral</span> <span
  m='2087219'>probability,</span> <span m='2090159'>was</span> <span
  m='2090449'>drifting</span> <span m='2092060'>with</span> <span
  m='2092330'>interest</span> <span m='2092790'>rate,</span> <span
  m='2093070'>r.</span> <span m='2094429'>So</span> <span
  m='2094690'>they're</span> <span m='2094840'>the</span> <span
  m='2094960'>same.</span> <span m='2095230'>It</span> <span
  m='2095520'>happens</span> <span m='2095969'>in</span> <span
  m='2096750'>continuous</span> <span m='2097270'>case.</span> </p><p><span
  m='2099540'>And</span> <span m='2100290'>that's</span> <span
  m='2100640'>another</span> <span m='2100970'>good</span> <span
  m='2101160'>exercise--</span> <span m='2101950'>and</span> <span
  m='2102180'>I</span> <span m='2102210'>would</span> <span
  m='2102440'>accept</span> <span m='2102840'>it</span> <span
  m='2103230'>as</span> <span m='2103380'>a</span> <span
  m='2103450'>final</span> <span m='2103790'>paper--</span> <span
  m='2104910'>is</span> <span m='2110460'>deriving</span> <span
  m='2110900'>the</span> <span m='2111020'>Black-Scholes</span> <span
  m='2111510'>formula</span> <span m='2112170'>just</span> <span
  m='2114700'>by</span> <span m='2115550'>the</span> <span
  m='2115850'>expected</span> <span m='2116280'>value</span> <span
  m='2116600'>of</span> <span m='2116800'>the</span> <span
  m='2117740'>Call</span> <span m='2117950'>and</span> <span
  m='2118090'>Put</span> <span m='2118690'>pay-out</span> <span
  m='2120250'>with</span> <span m='2120730'>the</span> <span
  m='2121990'>log</span> <span m='2122260'>normal</span> <span
  m='2122540'>distribution--</span> <span m='2123290'>terminal</span> <span
  m='2123640'>distribution.</span> <span m='2128180'>All</span> <span
  m='2128290'>right.</span> </p><p><span m='2128950'>So</span> <span
  m='2130330'>for</span> <span m='2130550'>more</span> <span
  m='2130770'>complicated</span> <span m='2132520'>pay-offs,</span> <span
  m='2136835'>the</span> <span m='2137260'>life</span> <span
  m='2137710'>becomes</span> <span m='2138090'>more</span> <span
  m='2138330'>complicated.</span> <span m='2139960'>And</span> <span
  m='2140340'>some</span> <span m='2141300'>finite</span> <span
  m='2141790'>differences</span> <span m='2142910'>should</span> <span
  m='2143180'>be</span> <span m='2143290'>used</span> <span
  m='2143960'>for</span> <span m='2144190'>more</span> <span
  m='2144410'>complicated</span> <span m='2145980'>pay-offs</span> <span
  m='2146510'>or</span> <span m='2148260'>American</span> <span
  m='2148535'>pay-offs</span> <span m='2149070'>or</span> <span
  m='2150210'>past-dependent</span> <span m='2150760'>pay-offs,</span> <span
  m='2151950'>tree</span> <span m='2152130'>methods</span> <span
  m='2152710'>or</span> <span m='2152910'>Monte-Carlo</span> <span
  m='2153960'>simulations.</span> <span m='2154510'>And</span> <span
  m='2154660'>that's</span> <span m='2154880'>what</span> <span
  m='2155540'>was</span> <span m='2156060'>happening</span> <span
  m='2156450'>in</span> <span m='2156570'>real</span> <span
  m='2156800'>life.</span> <span m='2163770'>Yeah.</span> </p><p><span
  m='2168200'>Now,</span> <span m='2171070'>since</span> <span
  m='2171380'>we</span> <span m='2171500'>have,</span> <span
  m='2171720'>actually,</span> <span m='2172060'>plenty</span> <span
  m='2172390'>of</span> <span m='2172520'>time,</span> <span
  m='2173640'>I</span> <span m='2174830'>would</span> <span
  m='2175630'>like</span> <span m='2175950'>to</span> <span
  m='2176060'>give</span> <span m='2176870'>an</span> <span
  m='2176980'>example</span> <span m='2177760'>of</span> <span
  m='2178850'>how</span> <span m='2179180'>replicating--</span> <span
  m='2181190'>idea</span> <span m='2181620'>of</span> <span
  m='2181760'>replicating</span> <span m='2182290'>portfolio</span> <span
  m='2182760'>works.</span> <span m='2184960'>I</span> <span
  m='2185240'>give</span> <span m='2185720'>a</span> <span
  m='2185850'>couple</span> <span m='2186200'>more</span> <span
  m='2186420'>examples.</span> </p><p><span m='2194670'>So</span> <span
  m='2195220'>OK.</span> <span m='2195430'>Here</span> <span
  m='2195700'>is</span> <span m='2195900'>a</span> <span
  m='2195970'>Bloomberg</span> <span m='2196330'>screen</span> <span
  m='2197120'>for</span> <span m='2197540'>foreign</span> <span
  m='2197850'>options--</span> <span m='2198600'>Call</span> <span
  m='2198850'>options</span> <span m='2199550'>on</span> <span
  m='2200250'>IBM</span> <span m='2200530'>stock.</span> <span
  m='2200910'>It</span> <span m='2201100'>actually</span> <span
  m='2201790'>was</span> <span m='2202040'>taken</span> <span
  m='2202340'>a</span> <span m='2202410'>while</span> <span
  m='2202620'>ago--</span> <span m='2202875'>a</span> <span
  m='2203130'>few</span> <span m='2203280'>years</span> <span
  m='2203500'>ago.</span> </p><p><span m='2205280'>And</span> <span
  m='2205480'>so</span> <span m='2205700'>here</span> <span
  m='2206240'>are</span> <span m='2206810'>different</span> <span
  m='2207140'>strikes</span> <span m='2208990'>for a Call</span> <span
  m='2209420'>option.</span> <span m='2209820'>The</span> <span
  m='2210440'>current</span> <span m='2210820'>price</span> <span
  m='2211140'>of</span> <span m='2211230'>the</span> <span
  m='2211310'>stock</span> <span m='2211570'>is</span> <span
  m='2211810'>$81.14.</span> <span m='2215350'>And</span> <span
  m='2215950'>here</span> <span m='2216250'>are</span> <span
  m='2216340'>the</span> <span m='2216470'>strikes</span> <span
  m='2217780'>of</span> <span m='2218300'>the</span> <span
  m='2218400'>Call.</span> <span m='2218650'>So</span> <span
  m='2218830'>obviously,</span> <span m='2221820'>if</span> <span
  m='2221980'>the</span> <span m='2222420'>option</span> <span
  m='2222900'>is</span> <span m='2223070'>way</span> <span
  m='2223750'>out</span> <span m='2223970'>of</span> <span
  m='2224070'>the</span> <span m='2224150'>money,</span> <span
  m='2224470'>meaning</span> <span m='2224730'>the</span> <span
  m='2224900'>strike</span> <span m='2225300'>is</span> <span
  m='2225460'>very</span> <span m='2225670'>high</span> <span
  m='2225990'>compared</span> <span m='2227640'>to</span> <span
  m='2230360'>the</span> <span m='2230510'>stock</span> <span
  m='2230800'>price,</span> <span m='2231490'>the</span> <span
  m='2231680'>value</span> <span m='2232030'>of</span> <span
  m='2232130'>the</span> <span m='2232200'>option</span> <span
  m='2232480'>is</span> <span m='2232610'>0.</span> </p><p><span
  m='2233470'>If</span> <span m='2233620'>it's</span> <span
  m='2233840'>way</span> <span m='2234470'>in</span> <span
  m='2234660'>the</span> <span m='2234770'>money,</span> <span
  m='2235920'>in</span> <span m='2236130'>fact,</span> <span
  m='2237065'>it</span> <span m='2237330'>is</span> <span
  m='2238070'>just</span> <span m='2238780'>S</span> <span
  m='2239050'>minus</span> <span m='2239460'>K.</span> <span
  m='2240900'>So</span> <span m='2241850'>S</span> <span
  m='2242740'>being</span> <span m='2243410'>$81.</span> <span
  m='2244240'>And</span> <span m='2244790'>say,</span> <span
  m='2245660'>the</span> <span m='2245820'>strike</span> <span
  m='2246060'>being</span> <span m='2246340'>$55.</span> <span
  m='2247040'>So</span> <span m='2247290'>it's</span> <span
  m='2248020'>$26.</span> <span m='2248740'>Right?</span> </p><p><span
  m='2249360'>So</span> <span m='2249610'>there</span> <span
  m='2249870'>is</span> <span m='2249980'>some</span> <span
  m='2250150'>difference.</span> <span m='2250900'>But</span> <span
  m='2251140'>actually,</span> <span m='2251460'>here</span> <span
  m='2252060'>it's</span> <span m='2252250'>a</span> <span
  m='2252290'>bit</span> <span m='2252480'>small</span> <span
  m='2252780'>because</span> <span m='2253090'>the</span> <span
  m='2253180'>difference</span> <span m='2253570'>should</span> <span
  m='2253680'>be</span> <span m='2253760'>just</span> <span
  m='2253950'>discounting,</span> <span m='2254540'>as we</span> <span
  m='2254780'>know.</span> <span m='2255410'>Right?</span> <span
  m='2255860'>But</span> <span m='2256040'>it's</span> <span
  m='2256230'>pretty</span> <span m='2256460'>short-dated</span> <span
  m='2257810'>options.</span> <span m='2258460'>They</span> <span
  m='2258660'>are</span> <span m='2259450'>probably</span> <span
  m='2260720'>months</span> <span m='2261020'>long,</span> <span
  m='2261320'>so</span> <span m='2261810'>there is</span> <span
  m='2262290'>not</span> <span m='2262460'>much</span> <span
  m='2262670'>discounting.</span> </p><p><span m='2264990'>So</span> <span
  m='2265450'>it</span> <span m='2265660'>becomes</span> <span
  m='2266150'>pretty</span> <span m='2266800'>parallel.</span> <span
  m='2267400'>It's</span> <span m='2267640'>similar</span> <span
  m='2268400'>here,</span> <span m='2268810'>right?</span> <span
  m='2269040'>So</span> <span m='2272026'>I mean,</span> <span
  m='2272520'>this</span> <span m='2272750'>changes</span> <span
  m='2273060'>by</span> <span m='2273210'>5.</span> <span
  m='2273530'>This</span> <span m='2273700'>changes</span> <span
  m='2274000'>by</span> <span m='2274160'>5.</span> <span
  m='2276400'>It's</span> <span m='2276570'>pretty linear.</span> <span
  m='2277030'>But</span> <span m='2277100'>it</span> <span
  m='2277490'>becomes</span> <span m='2277950'>non-linear</span> <span
  m='2278500'>around</span> <span m='2278870'>the</span> <span
  m='2278950'>money,</span> <span m='2279620'>around</span> <span
  m='2280910'>current</span> <span m='2281260'>stock</span> <span
  m='2281610'>price.</span> <span m='2282040'>Right?</span> <span
  m='2282270'>So</span> <span m='2282500'>we</span> <span m='2282860'>do</span>
  <span m='2283060'>observe</span> <span m='2284940'>this</span> <span
  m='2285200'>behavior.</span> </p><p><span m='2287640'>But</span> <span
  m='2288320'>to</span> <span m='2288420'>tell you</span> <span
  m='2288780'>the</span> <span m='2288870'>truth,</span> <span
  m='2290410'>if</span> <span m='2290590'>you</span> <span
  m='2290780'>were</span> <span m='2291300'>to--</span> <span
  m='2292460'>I</span> <span m='2292580'>didn't</span> <span
  m='2293100'>put</span> <span m='2295040'>implied</span> <span
  m='2295410'>volatilities</span> <span m='2295990'>here.</span> <span
  m='2298040'>But</span> <span m='2299640'>actually,</span> <span
  m='2300420'>you</span> <span m='2300530'>would</span> <span
  m='2300650'>observe</span> <span m='2301030'>that</span> <span
  m='2301220'>the</span> <span m='2301500'>world</span> <span
  m='2301820'>is</span> <span m='2301940'>not</span> <span
  m='2302150'>Black-Scholes,</span> <span m='2303620'>meaning</span> <span
  m='2304110'>that--</span> <span m='2305120'>what's the</span> <span
  m='2305330'>assumption</span> <span m='2305625'>of Black-Scholes.</span> <span
  m='2306840'>The assumption of</span> <span m='2307150'>Black-Scholes</span>
  <span m='2307700'>is</span> <span m='2307850'>that</span> <span
  m='2308580'>every</span> <span m='2308860'>option,</span> <span
  m='2310020'>for</span> <span m='2310250'>any</span> <span
  m='2310450'>strike,</span> <span m='2311310'>on</span> <span
  m='2311450'>a</span> <span m='2311490'>given</span> <span
  m='2311690'>stock,</span> <span m='2311960'>on a given</span> <span
  m='2312350'>expiry,</span> <span m='2312740'>would</span> <span
  m='2313000'>have</span> <span m='2313120'>the</span> <span m='2313200'>same
  volatility.</span> <span m='2313890'>Right?</span> </p><p><span
  m='2315150'>So</span> <span m='2315310'>if</span> <span m='2315520'>we</span>
  <span m='2315610'>went</span> <span m='2315900'>through</span> <span
  m='2316080'>exercise</span> <span m='2316660'>of</span> <span
  m='2316790'>implying</span> <span m='2317390'>the volatility</span> <span
  m='2318000'>according</span> <span m='2318440'>to</span> <span
  m='2318550'>Black-Scholes</span> <span m='2319110'>formula,</span> <span
  m='2319940'>from</span> <span m='2320670'>the</span> <span
  m='2320940'>option</span> <span m='2321300'>price</span> <span
  m='2321670'>which</span> <span m='2321840'>is</span> <span
  m='2321930'>traded</span> <span m='2322260'>on</span> <span
  m='2322360'>the</span> <span m='2322440'>market</span> <span
  m='2324230'>and</span> <span m='2324490'>the</span> <span
  m='2324580'>current</span> <span m='2324940'>price,</span> <span
  m='2326130'>we</span> <span m='2326240'>would</span> <span
  m='2326430'>find</span> <span m='2326740'>out</span> <span
  m='2326990'>that,</span> <span m='2327170'>actually,</span> <span
  m='2328130'>the</span> <span m='2329770'>volatility</span> <span
  m='2331442'>is</span> <span m='2331890'>not</span> <span
  m='2332130'>constant</span> <span m='2332425'>with</span> <span
  m='2332720'>strike.</span> <span m='2337146'>Well,</span> <span
  m='2337640'>it's</span> <span m='2337950'>actually</span> <span
  m='2338340'>skewed.</span> <span m='2340430'>Well,</span> <span
  m='2340570'>actually</span> <span m='2341900'>it</span> <span
  m='2342060'>is</span> <span m='2342110'>smiled.</span> <span
  m='2343230'>They</span> <span m='2343780'>would</span> <span
  m='2343950'>find</span> <span m='2344280'>something</span> <span
  m='2344610'>like</span> <span m='2344810'>this,</span> <span
  m='2348140'>which</span> <span m='2348370'>means</span> <span
  m='2348570'>that</span> <span m='2348760'>Black-Scholes</span> <span
  m='2349260'>theory</span> <span m='2349970'>is</span> <span
  m='2350290'>not</span> <span m='2351010'>perfectly</span> <span
  m='2351880'>good.</span> <span m='2352250'>Right?</span> <span
  m='2352480'>So</span> <span m='2352760'>something</span> <span
  m='2353170'>more</span> <span m='2353360'>complicated</span> <span
  m='2354700'>should be</span> <span m='2355000'>done.</span> </p><p><span
  m='2356340'>But</span> <span m='2357000'>in</span> <span
  m='2357150'>some</span> <span m='2357390'>cases,</span> <span
  m='2357860'>we</span> <span m='2357970'>even</span> <span
  m='2358240'>don't</span> <span m='2358590'>need</span> <span
  m='2358820'>to</span> <span m='2358920'>do</span> <span
  m='2359500'>something</span> <span m='2359860'>more</span> <span
  m='2360050'>complicated.</span> <span m='2361130'>One</span> <span
  m='2361330'>example,</span> <span m='2362520'>being</span> <span
  m='2364070'>so-called</span> <span m='2365930'>put-call</span> <span
  m='2366140'>parity.</span> <span m='2367230'>Right?</span> </p><p><span
  m='2368690'>So</span> <span m='2369940'>let's</span> <span
  m='2370260'>see.</span> <span m='2371040'>Suppose</span> <span
  m='2371410'>we</span> <span m='2371540'>look</span> <span
  m='2371760'>at</span> <span m='2371850'>the</span> <span
  m='2371960'>screen.</span> <span m='2372490'>So</span> <span
  m='2372630'>we</span> <span m='2372740'>know</span> <span
  m='2373380'>all</span> <span m='2374630'>prices</span> <span
  m='2375070'>for</span> <span m='2375250'>all</span> <span
  m='2375600'>Call</span> <span m='2375860'>options</span> <span
  m='2376430'>for</span> <span m='2376590'>all</span> <span
  m='2376800'>strikes.</span> <span m='2377790'>Well,</span> <span
  m='2378040'>probably</span> <span m='2378480'>will be some</span> <span
  m='2378780'>granularity,</span> <span m='2379410'>but</span> <span
  m='2379670'>we</span> <span m='2379750'>know</span> <span
  m='2379970'>those.</span> <span m='2380700'>But</span> <span
  m='2380870'>instead</span> <span m='2381240'>of</span> <span
  m='2381390'>pricing</span> <span m='2381830'>a</span> <span
  m='2381930'>Call,</span> <span m='2382150'>we</span> <span
  m='2382270'>need</span> <span m='2382490'>to</span> <span
  m='2382570'>price</span> <span m='2382840'>a Put.</span> </p><p><span
  m='2385470'>Somehow,</span> <span m='2385900'>we</span> <span
  m='2386020'>don't</span> <span m='2386230'>know</span> <span
  m='2386490'>how</span> <span m='2386950'>the</span> <span
  m='2387230'>dynamics</span> <span m='2387820'>of</span> <span
  m='2387950'>our</span> <span m='2388150'>stock</span> <span
  m='2388470'>looks</span> <span m='2388720'>like.</span> <span
  m='2389040'>So</span> <span m='2389750'>we</span> <span
  m='2390160'>have</span> <span m='2390670'>strong</span> <span
  m='2391020'>suspicion</span> <span m='2391280'>that</span> <span
  m='2391540'>it's</span> <span m='2391820'>not</span> <span
  m='2392010'>exactly</span> <span m='2393180'>log</span> <span
  m='2393520'>normal.</span> <span m='2394540'>So</span> <span
  m='2394840'>there</span> <span m='2395110'>is</span> <span
  m='2395220'>some</span> <span m='2395510'>volatility</span> <span
  m='2396160'>smile.</span> <span m='2396710'>It's</span> <span
  m='2396990'>not</span> <span m='2397160'>constant.</span> <span
  m='2397540'>The</span> <span m='2397850'>world</span> <span
  m='2398120'>is</span> <span m='2398190'>slightly</span> <span m='2398660'>not
  Black-Scholes.</span> </p><p><span m='2400230'>So</span> <span
  m='2400875'>how</span> <span m='2401240'>do</span> <span m='2401410'>we</span>
  <span m='2401560'>price</span> <span m='2402500'>Put?</span> <span
  m='2404600'>Well,</span> <span m='2404840'>let's</span> <span
  m='2405070'>see.</span> <span m='2408910'>We'll</span> <span
  m='2409440'>stare</span> <span m='2410230'>long</span> <span
  m='2410500'>enough</span> <span m='2411120'>at</span> <span
  m='2411350'>the</span> <span m='2411470'>pay-outs</span> <span m='2412140'>of
  the Call</span> <span m='2412445'>and</span> <span m='2412750'>Put.</span>
  <span m='2414330'>So</span> <span m='2414560'>what's</span> <span
  m='2414760'>the</span> <span m='2414860'>pay-out</span> <span
  m='2416580'>of</span> <span m='2416660'>a</span> <span m='2416750'>Call</span>
  <span m='2417550'>with</span> <span m='2417700'>some</span> <span
  m='2417920'>strike?</span> <span m='2419162'>It</span> <span
  m='2419530'>looks</span> <span m='2419810'>like</span> <span
  m='2420010'>this.</span> <span m='2420250'>Right?</span> </p><p><span
  m='2421740'>The</span> <span m='2421860'>pay-out</span> <span
  m='2422240'>of</span> <span m='2422430'>the Put,</span> <span
  m='2422720'>with</span> <span m='2422830'>the</span> <span
  m='2422980'>same</span> <span m='2423210'>strike,</span> <span
  m='2425390'>would look</span> <span m='2425830'>like</span> <span
  m='2426040'>this.</span> <span m='2427860'>So</span> <span
  m='2428310'>what</span> <span m='2428660'>if</span> <span
  m='2429000'>we</span> <span m='2429340'>take,</span> <span
  m='2430660'>we</span> <span m='2430800'>buy a</span> <span
  m='2431135'>Call</span> <span m='2433390'>and</span> <span
  m='2434640'>sell</span> <span m='2434970'>a</span> <span
  m='2435050'>Put?</span> <span m='2445230'>So</span> <span
  m='2445760'>this</span> <span m='2446670'>would</span> <span
  m='2446820'>go</span> <span m='2447010'>like</span> <span
  m='2447200'>this.</span> <span m='2447480'>Right?</span> </p><p><span
  m='2449900'>Straight</span> <span m='2450340'>line.</span> <span
  m='2451680'>Looks</span> <span m='2452180'>very</span> <span
  m='2452470'>much</span> <span m='2453760'>like</span> <span
  m='2454000'>Forward,</span> <span m='2454450'>right?</span> <span
  m='2455000'>So</span> <span m='2455270'>if</span> <span m='2455500'>we</span>
  <span m='2455760'>actually</span> <span m='2456180'>subtract</span> <span
  m='2458690'>the</span> <span m='2458860'>stock</span> <span
  m='2459210'>from</span> <span m='2459380'>here,</span> <span m='2460830'>move
  it</span> <span m='2461110'>from</span> <span m='2461290'>here,</span> <span
  m='2461630'>then</span> <span m='2471970'>it</span> <span
  m='2472280'>should</span> <span m='2472570'>be--</span> <span
  m='2472920'>yeah--</span> <span m='2476040'>minus</span> <span
  m='2476200'>K.</span> <span m='2476560'>Yeah.</span> </p><p><span
  m='2479830'>I</span> <span m='2479990'>think</span> <span m='2480300'>I</span>
  <span m='2480820'>got</span> <span m='2481120'>the signs</span> <span
  m='2481790'>correct.</span> <span m='2482100'>Right?</span> <span
  m='2482800'>And</span> <span m='2483310'>this</span> <span
  m='2483490'>is</span> <span m='2483620'>just</span> <span m='2483860'>a</span>
  <span m='2483890'>number.</span> <span m='2484210'>Right?</span> </p><p><span
  m='2485170'>And</span> <span m='2485200'>that's</span> <span
  m='2485480'>what</span> <span m='2485690'>happens</span> <span
  m='2486010'>at</span> <span m='2486140'>pay-out.</span> <span
  m='2486610'>So</span> <span m='2486790'>if</span> <span m='2487000'>we</span>
  <span m='2487160'>take</span> <span m='2487420'>this</span> <span
  m='2487580'>portfolio,</span> <span m='2488060'>if</span> <span
  m='2488290'>we</span> <span m='2488430'>action</span> <span
  m='2488820'>now,</span> <span m='2489820'>buy a</span> <span
  m='2490120'>Call,</span> <span m='2490480'>sell a Put,</span> <span
  m='2491110'>and</span> <span m='2491290'>sell</span> <span
  m='2491470'>a</span> <span m='2491530'>stock,</span> <span
  m='2492750'>we</span> <span m='2492860'>know</span> <span
  m='2493260'>that</span> <span m='2493570'>at</span> <span
  m='2493740'>the</span> <span m='2493860'>end,</span> <span m='2494320'>we'll
  for</span> <span m='2494790'>sure</span> <span m='2495210'>get</span> <span
  m='2495510'>the</span> <span m='2495780'>K</span> <span m='2497000'>in</span>
  <span m='2497190'>money.</span> <span m='2497410'>Right?</span> </p><p><span
  m='2499890'>So</span> <span m='2500190'>which</span> <span
  m='2500370'>means</span> <span m='2500630'>that</span> <span
  m='2500870'>now--</span> <span m='2503340'>so</span> <span m='2503910'>this
  is</span> <span m='2504120'>at</span> <span m='2504670'>time,</span> <span
  m='2504980'>t.</span> <span m='2510340'>So</span> <span
  m='2510670'>right</span> <span m='2510940'>now,</span> <span
  m='2511930'>it</span> <span m='2512200'>looks,</span> <span
  m='2512750'>to</span> <span m='2512910'>me,</span> <span
  m='2513150'>that</span> <span m='2513390'>if</span> <span
  m='2513650'>we</span> <span m='2513820'>do</span> <span
  m='2516440'>write</span> <span m='2516700'>this,</span> <span
  m='2522780'>and</span> <span m='2522880'>that's</span> <span
  m='2523100'>just</span> <span m='2523320'>the</span> <span
  m='2523410'>current</span> <span m='2523730'>price</span> <span
  m='2524030'>of</span> <span m='2524100'>the</span> <span
  m='2524200'>stock,</span> <span m='2525470'>this</span> <span
  m='2525730'>should</span> <span m='2525990'>be--</span> <span
  m='2531380'>right?</span> <span m='2531880'>We</span> <span
  m='2532040'>just</span> <span m='2532310'>need</span> <span
  m='2532500'>to</span> <span m='2532590'>discount</span> <span
  m='2533140'>this</span> <span m='2533320'>price</span> <span
  m='2534255'>to</span> <span m='2534520'>now,</span> <span
  m='2535395'>in</span> <span m='2535850'>this</span> <span
  m='2536110'>amount</span> <span m='2536440'>of</span> <span
  m='2536540'>cash,</span> <span m='2538420'>which</span> <span
  m='2538630'>means</span> <span m='2539120'>that</span> <span
  m='2539590'>our</span> <span m='2539970'>Put,</span> <span
  m='2542010'>at</span> <span m='2542500'>any</span> <span
  m='2542770'>time,</span> <span m='2543060'>t,</span> <span
  m='2543400'>is</span> <span m='2547120'>stock</span> <span
  m='2547730'>minus</span> <span m='2548600'>K.</span> <span
  m='2554672'>Right?</span> </p><p><span m='2556130'>So</span> <span
  m='2556340'>if</span> <span m='2556590'>we</span> <span
  m='2556680'>know</span> <span m='2557050'>all of the</span> <span
  m='2557160'>prices</span> <span m='2557830'>for</span> <span
  m='2558060'>any</span> <span m='2558520'>strike,</span> <span
  m='2558970'>K--</span> <span m='2559810'>if</span> <span m='2560690'>we</span>
  <span m='2560790'>know</span> <span m='2561060'>price</span> <span
  m='2561490'>of a</span> <span m='2561780'>Call,</span> <span
  m='2562700'>we</span> <span m='2562790'>don't</span> <span
  m='2562990'>need</span> <span m='2563220'>any Black-Scholes</span> <span
  m='2564170'>or</span> <span m='2564680'>anything.</span> <span
  m='2565690'>We</span> <span m='2565880'>can</span> <span
  m='2566320'>immediately</span> <span m='2567140'>tell</span> <span
  m='2567670'>everybody</span> <span m='2568470'>how</span> <span
  m='2568650'>much</span> <span m='2569300'>is a</span> <span
  m='2569702'>Put.</span> <span m='2570910'>Right?</span> <span
  m='2571200'>So</span> <span m='2571490'>then</span> <span
  m='2572350'>this</span> <span m='2573210'>relationship</span> <span
  m='2573780'>is</span> <span m='2573920'>actually</span> <span
  m='2574700'>a</span> <span m='2574910'>call-put</span> <span
  m='2575350'>parity.</span> </p><p><span m='2577570'>And</span> <span
  m='2577720'>that's,</span> <span m='2577910'>again--</span> <span
  m='2578820'>that's</span> <span m='2579050'>a</span> <span
  m='2579160'>replicating</span> <span m='2579710'>portfolio.</span> <span
  m='2580690'>It's</span> <span m='2580860'>a</span> <span
  m='2580930'>simple</span> <span m='2581270'>replicating portfolio.</span>
  <span m='2581860'>It's</span> <span m='2582130'>static,</span> <span
  m='2583140'>meaning</span> <span m='2583470'>that</span> <span
  m='2583810'>we</span> <span m='2584020'>fixed</span> <span
  m='2584320'>it</span> <span m='2584450'>now</span> <span
  m='2584750'>and</span> <span m='2584850'>we</span> <span
  m='2584960'>don't</span> <span m='2585250'>change</span> <span
  m='2585630'>it</span> <span m='2586700'>to</span> <span
  m='2586880'>expiry.</span> <span m='2587360'>So</span> <span
  m='2587510'>it's</span> <span m='2588170'>quite good</span> <span
  m='2588660'>this</span> <span m='2588940'>way.</span> <span
  m='2590130'>But</span> <span m='2594095'>that's</span> <span
  m='2594580'>how</span> <span m='2594760'>it</span> <span
  m='2594890'>works.</span> </p><p><span m='2596863'>Another</span> <span
  m='2597304'>example.</span> <span m='2599070'>So</span> <span
  m='2600125'>for</span> <span m='2600540'>this,</span> <span m='2600860'>I
  have,</span> <span m='2602270'>actually,</span> <span m='2602860'>a</span>
  <span m='2604140'>picture.</span> <span m='2604520'>So</span> <span
  m='2605270'>again,</span> <span m='2605740'>we</span> <span
  m='2606210'>have</span> <span m='2606770'>the</span> <span
  m='2606940'>same</span> <span m='2609070'>situation.</span> <span
  m='2610540'>We</span> <span m='2610670'>have</span> <span
  m='2611450'>prices</span> <span m='2611890'>of</span> <span
  m='2612060'>Calls.</span> <span m='2613030'>But</span> <span
  m='2613300'>instead</span> <span m='2613730'>of</span> <span
  m='2613860'>pricing</span> <span m='2614270'>a</span> <span
  m='2614360'>Call,</span> <span m='2614630'>we</span> <span
  m='2614750'>want</span> <span m='2614980'>to</span> <span
  m='2615060'>price</span> <span m='2615340'>a</span> <span
  m='2615390'>Digital.</span> </p><p><span m='2616490'>So</span> <span
  m='2616660'>what</span> <span m='2616890'>is</span> <span
  m='2617060'>Digital?</span> <span m='2618290'>Digital</span> <span
  m='2618700'>is</span> <span m='2618870'>such</span> <span m='2619270'>a</span>
  <span m='2619360'>weird</span> <span m='2619760'>contract,</span> <span
  m='2621130'>which</span> <span m='2621700'>pay-out</span> <span
  m='2622130'>is</span> <span m='2622380'>just</span> <span m='2622800'>a</span>
  <span m='2623140'>function.</span> <span m='2623560'>Basically,</span> <span
  m='2623815'>it's</span> <span m='2624070'>a bet</span> <span
  m='2625820'>on</span> <span m='2625980'>the</span> <span
  m='2626060'>stock</span> <span m='2627230'>to</span> <span
  m='2627380'>finish</span> <span m='2627770'>above</span> <span
  m='2628090'>strike</span> <span m='2628470'>price,</span> <span
  m='2629050'>K.</span> <span m='2630026'>Right?</span> </p><p><span
  m='2630380'>If</span> <span m='2631440'>at</span> <span
  m='2631620'>expiry,</span> <span m='2632170'>the</span> <span
  m='2632320'>stock</span> <span m='2633040'>is</span> <span
  m='2633220'>above</span> <span m='2633560'>K,</span> <span
  m='2635290'>you</span> <span m='2635440'>get</span> <span
  m='2635630'>1.</span> <span m='2636280'>You'd</span> <span
  m='2636460'>get</span> <span m='2636650'>$1.</span> <span
  m='2638030'>If</span> <span m='2638150'>it's</span> <span
  m='2638280'>below,</span> <span m='2638640'>you'd</span> <span
  m='2638720'>get</span> <span m='2638940'>nothing--</span> <span
  m='2639480'>0.</span> <span m='2641752'>Right?</span> <span
  m='2642230'>So</span> </p><p><span m='2643950'>So</span> <span
  m='2644200'>such</span> <span m='2644670'>an</span> <span
  m='2645120'>interesting</span> <span m='2645550'>contract.</span> <span
  m='2647110'>The</span> <span m='2647240'>question</span> <span
  m='2647690'>is,</span> <span m='2648420'>can</span> <span
  m='2648580'>we</span> <span m='2648700'>price it,</span> <span
  m='2650310'>given</span> <span m='2651020'>that</span> <span m='2651670'>we
  know</span> <span m='2652000'>the</span> <span m='2652570'>prices</span> <span
  m='2652980'>of</span> <span m='2653120'>Calls?</span> <span
  m='2657040'>And</span> <span m='2657270'>I</span> <span
  m='2657360'>suggest</span> <span m='2658160'>we</span> <span
  m='2658290'>use</span> <span m='2658730'>the</span> <span
  m='2658850'>idea</span> <span m='2659230'>of</span> <span
  m='2659330'>replicating</span> <span m='2659780'>portfolio.</span> <span
  m='2660400'>Any</span> <span m='2660560'>ideas</span> <span
  m='2663410'>how</span> <span m='2663570'>to</span> <span m='2663723'>do</span>
  <span m='2663876'>it?</span> </p><p><span m='2665305'>It's</span> <span
  m='2665730'>my</span> <span m='2668065'>typical</span> <span
  m='2669570'>interview</span> <span m='2669980'>question.</span> <span
  m='2671600'>So</span> <span m='2671730'>just</span> <span
  m='2671960'>pretend</span> <span m='2672070'>that you</span> <span
  m='2672310'>are</span> <span m='2672450'>interviewing.</span> <span
  m='2681640'>Yep?</span> </p><p><span m='2682330'>AUDIENCE: You</span> <span
  m='2682610'>[INAUDIBLE]</span> <span m='2682980'>the call,</span> <span
  m='2683470'>and then</span> <span m='2683960'>you</span> <span
  m='2684450'>short</span> <span m='2684940'>the call,</span> <span
  m='2685430'>just</span> <span m='2685920'>like</span> <span
  m='2686410'>smaller</span> <span m='2686900'>or</span> <span m='2688860'>the
  higher strike.</span> </p><p><span m='2689350'>PROFESSOR: Yep.</span> <span
  m='2689880'>The</span> <span m='2690250'>call strike.</span> <span
  m='2690510'>Yeah,</span> <span m='2691000'>you're</span> <span
  m='2691230'>absolutely</span> <span m='2691600'>right.</span> <span
  m='2693190'>Good.</span> <span m='2694390'>You've</span> <span
  m='2694550'>got</span> <span m='2694700'>an offer.</span> </p><p><span
  m='2697040'>Yeah.</span> <span m='2697820'>So</span> <span
  m='2698070'>here's</span> <span m='2698370'>how</span> <span
  m='2698760'>it</span> <span m='2698920'>goes.</span> <span
  m='2699120'>So</span> <span m='2699600'>this</span> <span
  m='2699760'>is</span> <span m='2700400'>a</span> <span
  m='2700570'>strike</span> <span m='2700875'>K.</span> <span
  m='2701480'>Right?</span> <span m='2702660'>So</span> <span
  m='2704330'>let's</span> <span m='2708190'>buy a Call</span> <span
  m='2709620'>with</span> <span m='2710070'>strike</span> <span
  m='2712760'>K</span> <span m='2713000'>minus</span> <span
  m='2713420'>1/2</span> <span m='2716070'>and</span> <span
  m='2716370'>sell</span> <span m='2716860'>a</span> <span
  m='2716910'>Call</span> <span m='2717310'>with</span> <span
  m='2718030'>strike</span> <span m='2719210'>K</span> <span
  m='2719570'>plus</span> <span m='2719950'>1/2.</span> <span
  m='2721890'>Right?</span> <span m='2723070'>We</span> <span
  m='2723230'>just</span> <span m='2723490'>sold.</span> <span
  m='2725420'>So</span> <span m='2726410'>if</span> <span m='2726840'>we</span>
  <span m='2726960'>combine</span> <span m='2727450'>these</span> <span
  m='2727670'>two--</span> <span m='2728890'>well,</span> <span
  m='2729070'>actually,</span> <span m='2730020'>if</span> <span
  m='2730220'>this</span> <span m='2730420'>is</span> <span
  m='2730530'>1--</span> <span m='2731858'>yeah.</span> <span m='2738150'>If
  this is</span> <span m='2738634'>1,</span> <span m='2739118'>it should</span>
  <span m='2739602'>look</span> <span m='2740086'>something</span> <span
  m='2740570'>like this.</span> <span m='2745910'>Great.</span> </p><p><span
  m='2748080'>So</span> <span m='2748430'>how</span> <span m='2749180'>will
  it</span> <span m='2749410'>look</span> <span m='2749610'>like?</span> <span
  m='2750380'>So</span> <span m='2750610'>obviously,</span> <span
  m='2751020'>here,</span> <span m='2751320'>it's</span> <span
  m='2751410'>0.</span> <span m='2751675'>Right?</span> <span
  m='2753030'>Then</span> <span m='2753390'>it</span> <span
  m='2753540'>will</span> <span m='2754350'>be</span> <span
  m='2754510'>like</span> <span m='2754830'>this.</span> <span
  m='2755290'>Right?</span> <span m='2756210'>And</span> <span
  m='2756380'>after</span> <span m='2756610'>that,</span> <span m='2757055'>it
  will be what?</span> </p><p><span m='2758390'>AUDIENCE: Constant.</span>
  </p><p><span m='2759280'>PROFESSOR: It will be</span> <span
  m='2759730'>constant.</span> <span m='2760000'>Right?</span> <span
  m='2760430'>And</span> <span m='2760600'>because</span> <span
  m='2761050'>this</span> <span m='2761290'>is</span> <span m='2761450'>K</span>
  <span m='2761630'>minus</span> <span m='2762070'>1/2</span> <span
  m='2762560'>and</span> <span m='2762720'>this</span> <span
  m='2762890'>is</span> <span m='2763010'>K</span> <span m='2763300'>plus</span>
  <span m='2763680'>1/2,</span> <span m='2764170'>it</span> <span
  m='2764370'>will</span> <span m='2764490'>be</span> <span
  m='2764590'>exactly</span> <span m='2765000'>1.</span> <span
  m='2765300'>Right?</span> <span m='2767010'>Good.</span> <span
  m='2767320'>So</span> <span m='2769250'>our</span> <span
  m='2769510'>pay-out,</span> <span m='2770250'>at</span> <span
  m='2770390'>the</span> <span m='2770480'>end,</span> <span
  m='2770730'>will</span> <span m='2770880'>be</span> <span
  m='2770960'>like</span> <span m='2771200'>this.</span> </p><p><span
  m='2776230'>So</span> <span m='2776930'>that's</span> <span
  m='2777200'>good.</span> <span m='2777520'>But</span> <span
  m='2777990'>there</span> <span m='2778410'>is</span> <span
  m='2778550'>quite</span> <span m='2778870'>a</span> <span
  m='2778930'>bit</span> <span m='2779780'>of</span> <span
  m='2780220'>slope</span> <span m='2780650'>here.</span> <span
  m='2781270'>So</span> <span m='2782090'>how</span> <span
  m='2782410'>can</span> <span m='2782590'>we</span> <span m='2782690'>do</span>
  <span m='2782840'>better</span> <span m='2783250'>than</span> <span
  m='2783450'>this?</span> <span m='2785330'>Well,</span> <span
  m='2785620'>if</span> <span m='2785840'>we</span> <span m='2788790'>buy</span>
  <span m='2789250'>it at</span> <span m='2789460'>K</span> <span
  m='2789980'>minus</span> <span m='2790300'>1/4,</span> <span
  m='2792110'>and</span> <span m='2792320'>sell</span> <span
  m='2792570'>it</span> <span m='2793115'>at</span> <span m='2793450'>K</span>
  <span m='2795220'>plus</span> <span m='2795570'>1/4,</span> <span
  m='2797770'>and</span> <span m='2798400'>just</span> <span
  m='2798680'>combine</span> <span m='2799050'>those,</span> <span
  m='2799985'>it</span> <span m='2800420'>will</span> <span
  m='2800560'>be</span> <span m='2800660'>exactly</span> <span
  m='2801000'>the</span> <span m='2801070'>same,</span> <span
  m='2801380'>but</span> <span m='2802260'>the</span> <span
  m='2802820'>level</span> <span m='2803170'>will</span> <span
  m='2803290'>be</span> <span m='2803510'>1/2.</span> <span
  m='2803940'>So</span> <span m='2804190'>we</span> <span
  m='2804300'>need</span> <span m='2805490'>to</span> <span
  m='2805590'>buy</span> <span m='2805770'>two</span> <span
  m='2806050'>of</span> <span m='2806200'>those</span> <span
  m='2806800'>and</span> <span m='2807020'>to</span> <span
  m='2807110'>sell</span> <span m='2807530'>two</span> <span m='2807840'>of
  those.</span> <span m='2808200'>Right?</span> </p><p><span
  m='2810510'>Well,</span> <span m='2810910'>we</span> <span
  m='2811160'>might</span> <span m='2811410'>as</span> <span
  m='2811520'>well</span> <span m='2811840'>go</span> <span m='2812850'>K</span>
  <span m='2813050'>minus</span> <span m='2813460'>Epsilon</span> <span
  m='2813930'>and</span> <span m='2814130'>K</span> <span
  m='2814470'>plus</span> <span m='2814900'>Epsilon,</span> <span
  m='2815640'>so</span> <span m='2815880'>it'll</span> <span
  m='2816170'>be</span> <span m='2818040'>Call</span> <span
  m='2818350'>price</span> <span m='2819420'>at</span> <span
  m='2819660'>strike,</span> <span m='2821460'>K,</span> <span
  m='2822140'>minus</span> <span m='2823370'>Epsilon,</span> <span
  m='2824910'>minus</span> <span m='2825840'>Call</span> <span
  m='2826140'>price</span> <span m='2826850'>at</span> <span
  m='2827870'>K,</span> <span m='2828850'>plus</span> <span
  m='2829370'>Epsilon,</span> <span m='2831940'>divided</span> <span
  m='2832490'>by</span> <span m='2832630'>2</span> <span
  m='2832910'>Epsilon.</span> <span m='2833640'>Right?</span> <span
  m='2835310'>These</span> <span m='2836140'>two</span> <span
  m='2836340'>Epsilon</span> <span m='2836740'>[? Confucian ?]</span> <span
  m='2837260'>needed</span> <span m='2838910'>rescale</span> <span
  m='2839300'>it</span> <span m='2839610'>back</span> <span
  m='2840500'>to</span> <span m='2840590'>1.</span> <span
  m='2840940'>Right?</span> </p><p><span m='2842310'>So</span> <span
  m='2842470'>in</span> <span m='2842630'>fact,</span> <span
  m='2843080'>if</span> <span m='2843250'>we</span> <span m='2843360'>go</span>
  <span m='2843640'>small Epsilon,</span> <span m='2844260'>we</span> <span
  m='2844370'>need</span> <span m='2844600'>a</span> <span
  m='2844680'>lot</span> <span m='2845000'>of</span> <span
  m='2845120'>both.</span> <span m='2847960'>Right?</span> <span
  m='2850680'>And</span> <span m='2850860'>that's</span> <span
  m='2851060'>how--</span> <span m='2854975'>that's</span> <span
  m='2855430'>the</span> <span m='2855590'>approximation</span> <span
  m='2857320'>of our</span> <span m='2857670'>Digital</span> <span
  m='2858090'>price.</span> <span m='2859050'>And</span> <span
  m='2859160'>that's</span> <span m='2859350'>actually</span> <span
  m='2860020'>how</span> <span m='2860340'>people</span> <span
  m='2860810'>on</span> <span m='2860900'>the</span> <span
  m='2860980'>market</span> <span m='2863340'>do</span> <span
  m='2863830'>price</span> <span m='2864320'>and</span> <span
  m='2864470'>hedge,</span> <span m='2865540'>most</span> <span
  m='2866040'>importantly,</span> <span m='2866750'>the</span> <span
  m='2867500'>Digital</span> <span m='2868120'>contracts,</span> <span
  m='2871392'>because</span> <span m='2872780'>Call</span> <span
  m='2873280'>contracts</span> <span m='2873720'>are</span> <span
  m='2873820'>liquid,</span> <span m='2874340'>and</span> <span
  m='2874510'>they</span> <span m='2874680'>are</span> <span
  m='2874730'>traded</span> <span m='2875240'>on</span> <span
  m='2875710'>exchanges</span> <span m='2876260'>while</span> <span
  m='2877160'>Digitals</span> <span m='2877710'>are</span> <span
  m='2878170'>way</span> <span m='2878570'>less</span> <span
  m='2878850'>liquid.</span> </p><p><span m='2879420'>So</span> <span
  m='2879650'>somebody</span> <span m='2879990'>would</span> <span
  m='2880140'>Call</span> <span m='2880430'>again</span> <span
  m='2880830'>to</span> <span m='2880980'>counterparty,</span> <span
  m='2882030'>enter</span> <span m='2882300'>into</span> <span
  m='2882530'>Digital,</span> <span m='2883000'>and</span> <span
  m='2883210'>hedge it</span> <span m='2885220'>on</span> <span
  m='2885360'>the</span> <span m='2885460'>exchange.</span> <span
  m='2886910'>These</span> <span m='2887080'>two</span> <span
  m='2887220'>Calls</span> <span m='2887460'>is a Call</span> <span
  m='2887920'>spread.</span> <span m='2888650'>But</span> <span
  m='2890630'>now</span> <span m='2890860'>tell</span> <span
  m='2891060'>me,</span> <span m='2891240'>is</span> <span m='2891370'>it</span>
  <span m='2891480'>surprising</span> <span m='2892200'>that--</span> <span
  m='2893983'>I mean,</span> <span m='2895810'>what</span> <span
  m='2896300'>does</span> <span m='2896440'>it</span> <span
  m='2896580'>remind</span> <span m='2896860'>you?</span> </p><p><span
  m='2898486'>Yeah.</span> <span m='2898980'>So</span> <span
  m='2899290'>it's</span> <span m='2905230'>derivative</span> <span
  m='2905490'>of</span> <span m='2905750'>the</span> <span
  m='2905890'>Call</span> <span m='2906090'>price</span> <span
  m='2906600'>but</span> <span m='2906960'>with</span> <span
  m='2907170'>respect</span> <span m='2908300'>to</span> <span
  m='2908420'>strike.</span> <span m='2908840'>Right?</span> <span
  m='2911150'>Is it</span> <span m='2911240'>surprising?</span> </p><p><span
  m='2918280'>How</span> <span m='2918500'>did</span> <span
  m='2918730'>our</span> <span m='2919870'>Call</span> <span
  m='2920100'>price</span> <span m='2920526'>look like?</span> <span
  m='2921380'>It's a ramp.</span> <span m='2921850'>Right?</span> <span
  m='2924580'>If</span> <span m='2924780'>we</span> <span
  m='2924890'>take</span> <span m='2925120'>a</span> <span
  m='2925180'>derivative</span> <span m='2925700'>of</span> <span
  m='2925760'>this,</span> <span m='2926680'>what</span> <span
  m='2926850'>will</span> <span m='2926930'>we get?</span> <span
  m='2928970'>Yeah.</span> </p><p><span m='2929425'>AUDIENCE:
  [INAUDIBLE].</span> </p><p><span m='2929880'>PROFESSOR: Right. So</span> <span
  m='2932130'>in</span> <span m='2932290'>fact,</span> <span
  m='2932750'>if</span> <span m='2932870'>we</span> <span m='2933030'>do</span>
  <span m='2933230'>something</span> <span m='2933560'>even</span> <span
  m='2933850'>more</span> <span m='2934080'>weird</span> <span
  m='2934260'>with</span> <span m='2934370'>this,</span> <span
  m='2934790'>and</span> <span m='2934870'>then</span> <span
  m='2934980'>I'll</span> <span m='2935260'>take</span> <span
  m='2935480'>a</span> <span m='2935530'>square</span> <span
  m='2937520'>or</span> <span m='2938130'>something</span> <span
  m='2938560'>else,</span> <span m='2939990'>the</span> <span
  m='2940490'>same</span> <span m='2940720'>will</span> <span
  m='2940880'>apply.</span> <span m='2943930'>So</span> <span
  m='2944000'>it's</span> <span m='2944380'>not</span> <span
  m='2944600'>surprising</span> <span m='2945070'>at</span> <span
  m='2945160'>all.</span> <span m='2948364'>All right.</span> </p><p><span
  m='2949790'>So</span> <span m='2950330'>that's</span> <span
  m='2950650'>basically</span> <span m='2951832'>how</span> <span
  m='2953860'>the</span> <span m='2954030'>replicate--</span> <span
  m='2954400'>this</span> <span m='2954840'>idea</span> <span m='2955390'>of
  replicating</span> <span m='2955990'>portfolios</span> <span
  m='2959730'>is</span> <span m='2959970'>extremely</span> <span
  m='2960420'>powerful.</span> <span m='2961050'>And</span> <span
  m='2961300'>in</span> <span m='2961420'>fact,</span> <span
  m='2962780'>that's</span> <span m='2963050'>what</span> <span
  m='2963410'>happens</span> <span m='2963930'>in</span> <span
  m='2964300'>real</span> <span m='2964550'>life.</span> <span
  m='2964790'>In</span> <span m='2965240'>real</span> <span
  m='2965520'>life,</span> <span m='2965880'>you</span> <span
  m='2965920'>have</span> <span m='2966120'>some</span> <span
  m='2967140'>complicated</span> <span m='2967670'>derivative</span> <span
  m='2969480'>which</span> <span m='2969690'>you</span> <span
  m='2969760'>need</span> <span m='2969960'>to</span> <span
  m='2970040'>hedge.</span> </p><p><span m='2970830'>And</span> <span
  m='2970980'>how</span> <span m='2971180'>to</span> <span
  m='2971320'>hedge--</span> <span m='2971525'>you'll</span> <span
  m='2971730'>find</span> <span m='2972430'>something</span> <span
  m='2972910'>else</span> <span m='2973300'>which</span> <span
  m='2974070'>replicates--</span> <span m='2975970'>to</span> <span
  m='2976090'>a</span> <span m='2976190'>certain</span> <span
  m='2976450'>extent,</span> <span m='2976900'>replicates</span> <span
  m='2977460'>your pay-off.</span> <span m='2978140'>That's</span> <span
  m='2978350'>what</span> <span m='2978870'>you'll</span> <span
  m='2979200'>try</span> <span m='2979790'>to</span> <span
  m='2979900'>do.</span> <span m='2980110'>And</span> <span
  m='2980490'>this</span> <span m='2980750'>will</span> <span
  m='2980860'>be</span> <span m='2981010'>your</span> <span
  m='2981070'>hedge</span> <span m='2981330'>portfolio.</span> <span
  m='2982180'>Usually,</span> <span m='2982610'>it's</span> <span
  m='2982830'>dynamic.</span> <span m='2983310'>So</span> <span
  m='2983460'>you'll</span> <span m='2984060'>have</span> <span
  m='2984300'>to</span> <span m='2984490'>rebalance.</span> <span
  m='2985720'>And</span> <span m='2985910'>that's</span> <span
  m='2986410'>how</span> <span m='2986985'>you</span> <span
  m='2987300'>basically</span> <span m='2989790'>reduce</span> <span
  m='2990020'>the risks.</span> </p>
uid: 9b6e0e7955ed6dede9cb1596c955d5c7
type: courses
layout: video
---
