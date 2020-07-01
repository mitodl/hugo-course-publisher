---
about_this_resource_text: >-
  <p><strong>Description:</strong> A unit step function jumps from 0 to 1. Its
  slope is a delta function: Zero everywhere except infinite at the jump.</p>
  <p>Related section in <a
  href="http://www-math.mit.edu/~gs/dela/">textbook</a>: 1.4e</p>
  <p><strong>Instructor: </strong>Prof. Gilbert Strang</p>
embedded_media:
  - id: Video-YouTube-Stream
    media_location: ECslmuGlu-U
    parent_uid: 22c5af9b27e0a9efdffecd25991207b6
    title: Video-YouTube-Stream
    type: Video
    uid: bca07e98a86e5f3cd1805b3974c09db5
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/ECslmuGlu-U/default.jpg'
    parent_uid: 22c5af9b27e0a9efdffecd25991207b6
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: a41e98a55cef5582a6cd0c917ba1cb7c
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: ECslmuGlu-U
    parent_uid: 22c5af9b27e0a9efdffecd25991207b6
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 9db040a328ee09de28d309c8f31d878d
  - id: ECslmuGlu-U.srt
    parent_uid: 22c5af9b27e0a9efdffecd25991207b6
    technical_location: >-
      https://ocw.mit.edu/resources/res-18-009-learn-differential-equations-up-close-with-gilbert-strang-and-cleve-moler-fall-2015/differential-equations-and-linear-algebra/first-order-equations/step-function-and-delta-function/ECslmuGlu-U.srt
    title: 3play caption file
    type: null
    uid: 7098d4e0127e89e338fe377c72b72cbb
  - id: ECslmuGlu-U.pdf
    parent_uid: 22c5af9b27e0a9efdffecd25991207b6
    technical_location: >-
      https://ocw.mit.edu/resources/res-18-009-learn-differential-equations-up-close-with-gilbert-strang-and-cleve-moler-fall-2015/differential-equations-and-linear-algebra/first-order-equations/step-function-and-delta-function/ECslmuGlu-U.pdf
    title: 3play pdf file
    type: null
    uid: 5f5ad565f60b4a4d3136bc33c844286c
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 22c5af9b27e0a9efdffecd25991207b6
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 89cbce01ffed027ad294577204e521d2
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 22c5af9b27e0a9efdffecd25991207b6
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 8e433ac55d93f477f0d970b0fde2bd3e
  - id: Video-iTunesU-MP4
    media_location: 'https://itunes.apple.com/us/itunes-u/id1102923623'
    parent_uid: 22c5af9b27e0a9efdffecd25991207b6
    title: Video-iTunes U-MP4
    type: Video
    uid: 3f98ccdccc655ce6a5dbffadf4f61f45
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES18-009F15/MITRES18-009F15_1_4e_Step_Function_and_Delta_Function_300k.mp4
    parent_uid: 22c5af9b27e0a9efdffecd25991207b6
    title: Video-Internet Archive-MP4
    type: Video
    uid: 63987cf3390d759b81e7d24c90730f87
inline_embed_id: 35132915stepfunctionanddeltafunction66152880
order_index: 67
parent_uid: 0f5c00c53cd1aaf2cb7bc1d5deaba2a9
related_resources_text: ''
short_url: step-function-and-delta-function
technical_location: >-
  https://ocw.mit.edu/resources/res-18-009-learn-differential-equations-up-close-with-gilbert-strang-and-cleve-moler-fall-2015/differential-equations-and-linear-algebra/first-order-equations/step-function-and-delta-function
title: Step Function and Delta Function
transcript: >-
  <p><span m='1480'>GILBERT STRANG: OK,</span> <span m='2040'>this</span> <span
  m='2270'>is</span> <span m='2450'>the</span> <span m='2560'>video</span> <span
  m='2940'>about</span> <span m='3340'>two</span> <span m='3770'>neat</span>
  <span m='4070'>functions--</span> <span m='4750'>the</span> <span
  m='4920'>step</span> <span m='5230'>function</span> <span m='6350'>and</span>
  <span m='6690'>its</span> <span m='6920'>derivative</span> <span
  m='7730'>the</span> <span m='7870'>delta</span> <span
  m='8280'>function.</span> <span m='9430'>So</span> <span m='9500'>if</span>
  <span m='9590'>I</span> <span m='9700'>can</span> <span m='9840'>just</span>
  <span m='10090'>introduce</span> <span m='10395'>you</span> <span
  m='10700'>to</span> <span m='10890'>those</span> <span
  m='11200'>functions</span> <span m='11840'>and</span> <span
  m='12210'>show</span> <span m='12490'>you</span> <span m='13000'>that</span>
  <span m='13190'>they're</span> <span m='13470'>very</span> <span
  m='13820'>natural</span> <span m='15130'>inputs</span> <span
  m='15930'>to</span> <span m='16129'>a</span> <span
  m='16730'>differential</span> <span m='17280'>equation.</span> <span
  m='18700'>They</span> <span m='18870'>happen</span> <span m='20030'>all</span>
  <span m='20270'>the</span> <span m='20390'>time</span> <span
  m='20780'>in</span> <span m='21080'>real</span> <span m='21370'>life.</span>
  <span m='22290'>And</span> <span m='22500'>so</span> <span m='22680'>we</span>
  <span m='22850'>need</span> <span m='23180'>to</span> <span
  m='23370'>understand</span> <span m='24180'>how</span> <span
  m='24400'>to</span> <span m='25080'>compute</span> <span
  m='26370'>these</span> <span m='26690'>formulas</span> <span
  m='27340'>and</span> <span m='27540'>compute</span> <span
  m='27920'>with</span> <span m='28050'>them.</span> </p><p><span
  m='28830'>OK,</span> <span m='29430'>so</span> <span m='29620'>the</span>
  <span m='29760'>first</span> <span m='30130'>one</span> <span
  m='30340'>is</span> <span m='30530'>the</span> <span m='30660'>step</span>
  <span m='31020'>function</span> <span m='32189'>and</span> <span
  m='32509'>it's--</span> <span m='33230'>I'll</span> <span
  m='33410'>call</span> <span m='33650'>it</span> <span m='33790'>h</span> <span
  m='34460'>after</span> <span m='35060'>its</span> <span
  m='35300'>inventor</span> <span m='36440'>who</span> <span
  m='36610'>was</span> <span m='36800'>an</span> <span m='36940'>engineer</span>
  <span m='37430'>named</span> <span m='37710'>Heaviside,</span> <span
  m='38600'>started</span> <span m='38990'>with</span> <span m='39160'>an</span>
  <span m='39310'>H.</span> <span m='40140'>And</span> <span
  m='40270'>the</span> <span m='40380'>step</span> <span
  m='40700'>function,</span> <span m='41940'>let</span> <span
  m='42460'>me</span> <span m='42610'>write</span> <span m='42880'>the</span>
  <span m='43000'>formula.</span> <span m='43790'>h</span> <span
  m='44330'>of</span> <span m='44560'>t</span> <span m='46130'>is</span> <span
  m='47100'>0</span> <span m='48160'>for</span> <span m='48470'>t</span> <span
  m='49010'>negative</span> <span m='50490'>and</span> <span m='50790'>1</span>
  <span m='52050'>for t</span> <span m='52780'>greater</span> <span
  m='53080'>or</span> <span m='53140'>equal</span> <span m='53450'>to</span>
  <span m='53510'>0.</span> <span m='54990'>OK.</span> <span
  m='56260'>So,</span> <span m='56840'>that's</span> <span m='57310'>the</span>
  <span m='57490'>step</span> <span m='57790'>function.</span> <span
  m='58200'>It just</span> <span m='58440'>has</span> <span m='58650'>two</span>
  <span m='58860'>values</span> <span m='60290'>and</span> <span
  m='60550'>it</span> <span m='60640'>has</span> <span m='60880'>a</span> <span
  m='60950'>jump.</span> <span m='61450'>You</span> <span m='61640'>could</span>
  <span m='61830'>say</span> <span m='62040'>jump</span> <span
  m='62410'>function</span> <span m='62745'>also.</span> <span
  m='63740'>Jump</span> <span m='64050'>function,</span> <span
  m='64530'>step</span> <span m='64890'>function.</span> <span
  m='66050'>All</span> <span m='66230'>right.</span> </p><p><span
  m='66840'>And</span> <span m='67100'>notice</span> <span m='68080'>I've</span>
  <span m='68320'>also</span> <span m='68890'>graphed</span> <span
  m='69990'>the</span> <span m='70630'>shifted</span> <span
  m='71260'>step</span> <span m='71590'>function.</span> <span
  m='72680'>What</span> <span m='73700'>happens</span> <span m='74270'>to</span>
  <span m='74430'>any</span> <span m='74690'>function</span> <span
  m='75220'>including</span> <span m='75730'>this</span> <span
  m='75930'>one</span> <span m='76580'>if</span> <span m='76780'>I</span> <span
  m='76930'>change</span> <span m='77450'>from</span> <span m='77720'>t,</span>
  <span m='78830'>which</span> <span m='79340'>jumps</span> <span
  m='79740'>at</span> <span m='79890'>0,</span> <span m='80770'>to</span> <span
  m='81470'>h</span> <span m='81913'>of</span> <span m='82356'>t</span> <span
  m='83230'>minus</span> <span m='83510'>t?</span> <span m='83670'>If I</span>
  <span m='83760'>put</span> <span m='84060'>in</span> <span m='85530'>t</span>
  <span m='85820'>minus</span> <span m='86430'>some</span> <span
  m='86750'>fixed</span> <span m='87400'>number</span> <span m='87850'>t</span>
  <span m='88640'>as</span> <span m='90070'>the</span> <span
  m='91350'>variable,</span> <span m='92710'>then</span> <span
  m='93400'>the</span> <span m='93540'>jump</span> <span
  m='94140'>happens.</span> <span m='95940'>So</span> <span m='96150'>the</span>
  <span m='96290'>jump</span> <span m='96560'>will</span> <span
  m='96750'>happen</span> <span m='97200'>when</span> <span
  m='97580'>this</span> <span m='97860'>is</span> <span m='97990'>0.</span>
  <span m='98930'>Step</span> <span m='99210'>functions</span> <span
  m='99710'>jump</span> <span m='100140'>when</span> <span
  m='100280'>that's</span> <span m='100560'>0.</span> <span
  m='101210'>And</span> <span m='101410'>that's</span> <span m='101630'>0</span>
  <span m='103640'>at</span> <span m='104070'>t equal to t.</span> <span
  m='104500'>So</span> <span m='104700'>the</span> <span m='104850'>jump</span>
  <span m='105400'>in</span> <span m='105660'>dotted</span> <span
  m='106070'>line.</span> <span m='106470'>So</span> <span m='108250'>the</span>
  <span m='108690'>shifted</span> <span m='110330'>step</span> <span
  m='110700'>function</span> <span m='111140'>will</span> <span
  m='112000'>just</span> <span m='112380'>shift</span> <span
  m='112860'>over.</span> <span m='114140'>That's</span> <span
  m='114390'>the</span> <span m='114500'>complete</span> <span
  m='114920'>effect</span> <span m='115430'>of</span> <span
  m='116010'>changing</span> <span m='116590'>from</span> <span
  m='116820'>t</span> <span m='117360'>to</span> <span m='117820'>t</span> <span
  m='118070'>minus</span> <span m='118480'>a</span> <span
  m='118550'>capital</span> <span m='119010'>T,</span> <span
  m='119600'>is</span> <span m='119790'>just</span> <span m='120070'>to</span>
  <span m='120140'>shift</span> <span m='120600'>the</span> <span
  m='120720'>whole</span> <span m='120950'>thing</span> <span
  m='121260'>by</span> <span m='121470'>capital</span> <span
  m='122020'>T.</span> <span m='122774'>OK.</span> <span m='123740'>So</span>
  <span m='124350'>you</span> <span m='124440'>keep</span> <span
  m='124680'>your</span> <span m='124830'>eye</span> <span m='125140'>on</span>
  <span m='125530'>the</span> <span m='127330'>standard</span> <span
  m='128060'>step</span> <span m='128370'>function,</span> <span
  m='129250'>which</span> <span m='129520'>jumps</span> <span
  m='129990'>at</span> <span m='130860'>t</span> <span m='131020'>equals</span>
  <span m='131320'>0. It</span> <span m='131590'>jumps</span> <span
  m='132010'>by</span> <span m='132210'>1.</span> <span m='133750'>And</span>
  <span m='133950'>take</span> <span m='134200'>its</span> <span
  m='134400'>derivative.</span> </p><p><span m='136120'>So</span> <span
  m='136180'>what's</span> <span m='136450'>the</span> <span
  m='136580'>derivative</span> <span m='137160'>of</span> <span
  m='137270'>this</span> <span m='137490'>step</span> <span
  m='137770'>function?</span> <span m='138490'>Well,</span> <span
  m='139330'>the</span> <span m='139480'>function</span> <span
  m='139890'>is</span> <span m='140040'>0</span> <span m='140530'>along</span>
  <span m='140740'>there,</span> <span m='141090'>so</span> <span
  m='141270'>the</span> <span m='141420'>derivative</span> <span
  m='141910'>is</span> <span m='142040'>0.</span> <span m='142760'>The</span>
  <span m='142900'>function</span> <span m='143350'>is</span> <span
  m='143540'>constant</span> <span m='144130'>along</span> <span
  m='144470'>here,</span> <span m='145390'>so</span> <span m='145470'>the</span>
  <span m='145640'>derivative</span> <span m='146130'>is</span> <span
  m='146280'>again</span> <span m='146630'>0.</span> <span
  m='147640'>It's</span> <span m='147960'>just</span> <span m='148440'>at</span>
  <span m='148630'>this</span> <span m='148820'>one</span> <span
  m='149270'>point</span> <span m='149650'>everything</span> <span
  m='150070'>happens.</span> <span m='151470'>So</span> <span
  m='151950'>now</span> <span m='152220'>this</span> <span m='152880'>is</span>
  <span m='153050'>the</span> <span m='153180'>delta</span> <span
  m='153550'>function.</span> <span m='154700'>The</span> <span
  m='154830'>delta</span> <span m='155230'>function</span> <span
  m='156890'>runs</span> <span m='157290'>along</span> <span
  m='157670'>at</span> <span m='157810'>0,</span> <span
  m='160840'>continues</span> <span m='161540'>at</span> <span
  m='161680'>0,</span> <span m='163190'>but</span> <span m='163960'>at</span>
  <span m='164390'>t</span> <span m='164820'>at</span> <span
  m='165240'>0,</span> <span m='167300'>the</span> <span m='167810'>whole</span>
  <span m='168020'>thing</span> <span m='168470'>explodes.</span> <span
  m='169440'>The</span> <span m='171390'>derivative</span> <span
  m='172000'>is</span> <span m='172140'>infinite.</span> <span
  m='172590'>You</span> <span m='172770'>see</span> <span m='173070'>an</span>
  <span m='173190'>infinite</span> <span m='173710'>slope</span> <span
  m='174090'>there.</span> <span m='174710'>And</span> <span
  m='175400'>the</span> <span m='175540'>point</span> <span m='175830'>is</span>
  <span m='176990'>infinity</span> <span m='177800'>is</span> <span
  m='177980'>not</span> <span m='179360'>a</span> <span
  m='179710'>sufficiently</span> <span m='180360'>precise</span> <span
  m='180950'>word</span> <span m='181410'>to</span> <span m='181520'>tell</span>
  <span m='181760'>you</span> <span m='181910'>exactly</span> <span
  m='182510'>what's</span> <span m='182770'>happening.</span> </p><p><span
  m='183940'>So</span> <span m='184020'>we</span> <span m='184190'>don't</span>
  <span m='184550'>have</span> <span m='184920'>really--</span> <span
  m='185750'>this</span> <span m='186040'>graph</span> <span
  m='186480'>of</span> <span m='186600'>a</span> <span m='186710'>delta</span>
  <span m='187080'>function</span> <span m='187840'>is</span> <span
  m='188190'>not</span> <span m='188960'>fully</span> <span
  m='189290'>satisfactory.</span> <span m='191180'>It's</span> <span
  m='191430'>perfect</span> <span m='192040'>for</span> <span
  m='192700'>all</span> <span m='192940'>the</span> <span
  m='193200'>uninteresting</span> <span m='194010'>boring</span> <span
  m='194430'>part.</span> <span m='195220'>But</span> <span m='195610'>at</span>
  <span m='195950'>the</span> <span m='196340'>moment</span> <span
  m='196830'>of</span> <span m='197340'>truth,</span> <span
  m='198280'>when</span> <span m='198800'>something</span> <span
  m='199310'>happens</span> <span m='199770'>in</span> <span
  m='199910'>an</span> <span m='200060'>instant,</span> <span
  m='203880'>we</span> <span m='204060'>need</span> <span m='204270'>to</span>
  <span m='204370'>say</span> <span m='204590'>more.</span> <span
  m='205490'>We</span> <span m='205650'>need</span> <span m='205850'>to</span>
  <span m='205980'>say</span> <span m='206160'>more,</span> <span
  m='206580'>not</span> <span m='206870'>just</span> <span m='207410'>its</span>
  <span m='207640'>infinite.</span> <span m='208500'>And</span> <span
  m='208710'>again,</span> <span m='209400'>if</span> <span
  m='209580'>it's</span> <span m='209740'>shifted,</span> <span
  m='210600'>then</span> <span m='211090'>the</span> <span
  m='211630'>infinite</span> <span m='212170'>slope</span> <span
  m='212560'>happens</span> <span m='213090'>at</span> <span m='213320'>t</span>
  <span m='213540'>equal</span> <span m='213870'>a</span> <span
  m='213980'>capital</span> <span m='214470'>T.</span> <span
  m='215160'>So</span> <span m='215460'>the</span> <span
  m='215900'>infinity</span> <span m='217310'>is</span> <span
  m='217480'>just</span> <span m='217700'>shifted</span> <span
  m='218170'>over.</span> <span m='219230'>And</span> <span
  m='219530'>that'd</span> <span m='219630'>be</span> <span
  m='219780'>the</span> <span m='219920'>delta</span> <span
  m='220260'>function</span> <span m='220680'>there.</span> <span
  m='221200'>So</span> <span m='221370'>this</span> <span m='221680'>is</span>
  <span m='221860'>what</span> <span m='222120'>I</span> <span
  m='222260'>would</span> <span m='222490'>use.</span> </p><p><span
  m='223410'>If</span> <span m='223610'>that</span> <span m='223850'>was</span>
  <span m='224160'>the</span> <span m='224800'>source</span> <span
  m='225300'>term</span> <span m='225620'>in</span> <span m='225740'>my</span>
  <span m='225920'>differential</span> <span m='226550'>equation,</span> <span
  m='227160'>what</span> <span m='227380'>would</span> <span
  m='227560'>that</span> <span m='227790'>mean?</span> <span
  m='228700'>If</span> <span m='228900'>this</span> <span m='229200'>was</span>
  <span m='229460'>the</span> <span m='229610'>q of t</span> <span
  m='231180'>in</span> <span m='231370'>the</span> <span
  m='231490'>differential</span> <span m='232020'>equation</span> <span
  m='232940'>reflecting</span> <span m='234060'>input</span> <span
  m='235790'>at</span> <span m='236050'>different</span> <span
  m='236420'>times,</span> <span m='238870'>that</span> <span
  m='239150'>function</span> <span m='239750'>would</span> <span
  m='240040'>say</span> <span m='240600'>no</span> <span m='240970'>input</span>
  <span m='242130'>except</span> <span m='242590'>at</span> <span
  m='242730'>one</span> <span m='243070'>moment</span> <span
  m='243375'>and</span> <span m='243680'>one</span> <span
  m='244150'>instant,</span> <span m='245310'>capital</span> <span
  m='245900'>T.</span> <span m='246550'>At</span> <span m='246710'>that</span>
  <span m='246930'>instant</span> <span m='247320'>of</span> <span
  m='247440'>time,</span> <span m='248890'>you</span> <span
  m='248940'>put</span> <span m='249170'>1</span> <span m='249490'>in,</span>
  <span m='250390'>over</span> <span m='250670'>in</span> <span
  m='250860'>an</span> <span m='251020'>instant.</span> <span
  m='252050'>And</span> <span m='252440'>remember,</span> <span
  m='252970'>that</span> <span m='253820'>otherwise</span> <span
  m='254370'>q</span> <span m='254650'>of</span> <span m='254790'>t</span> <span
  m='255020'>has</span> <span m='255250'>been</span> <span m='255530'>a</span>
  <span m='256100'>continuous</span> <span m='257040'>input.</span> <span
  m='258000'>Put</span> <span m='258209'>in</span> <span m='258810'>$1.00</span>
  <span m='260060'>per</span> <span m='260470'>year</span> <span
  m='261630'>over</span> <span m='261910'>the</span> <span
  m='262070'>whole</span> <span m='262340'>year.</span> <span
  m='264020'>This</span> <span m='264190'>one</span> <span
  m='264470'>puts</span> <span m='264820'>in</span> <span
  m='265120'>$1.00</span> <span m='266630'>at</span> <span m='266770'>one</span>
  <span m='266990'>moment.</span> <span m='267980'>But</span> <span
  m='268160'>of</span> <span m='268320'>course,</span> <span
  m='268570'>you</span> <span m='268700'>see</span> <span m='268970'>that</span>
  <span m='269130'>that's</span> <span m='269450'>really</span> <span
  m='269750'>what</span> <span m='269980'>we</span> <span m='270100'>do.</span>
  <span m='270880'>So,</span> <span m='272010'>you</span> <span
  m='272250'>see</span> <span m='272460'>that</span> <span
  m='272640'>that's</span> <span m='273540'>a</span> <span
  m='273620'>function</span> <span m='274050'>we</span> <span
  m='274210'>need</span> <span m='275070'>to</span> <span m='275510'>do</span>
  <span m='275880'>things</span> <span m='276300'>in</span> <span
  m='276440'>an</span> <span m='276580'>instant.</span> </p><p><span
  m='277450'>And</span> <span m='279740'>as</span> <span m='280020'>I</span>
  <span m='280660'>took</span> <span m='280900'>the</span> <span
  m='280990'>example</span> <span m='281460'>of</span> <span m='281590'>a</span>
  <span m='282420'>golf</span> <span m='282680'>club</span> <span
  m='282940'>hitting</span> <span m='283230'>a</span> <span
  m='283320'>golf</span> <span m='283710'>ball,</span> <span
  m='284910'>well,</span> <span m='285580'>it's</span> <span
  m='285770'>not</span> <span m='286010'>quite</span> <span m='286690'>0</span>
  <span m='287150'>time.</span> <span m='287590'>But</span> <span
  m='287750'>it's</span> <span m='287940'>so</span> <span
  m='288190'>close</span> <span m='288610'>to</span> <span
  m='288710'>zero</span> <span m='289100'>time</span> <span
  m='289810'>that</span> <span m='290020'>the</span> <span m='290170'>two</span>
  <span m='290490'>are</span> <span m='291020'>connected.</span> <span
  m='291790'>And</span> <span m='291950'>then</span> <span m='292100'>the</span>
  <span m='292180'>ball</span> <span m='292500'>takes</span> <span
  m='292830'>off.</span> <span m='293680'>And</span> <span m='294130'>so</span>
  <span m='294330'>a</span> <span m='294740'>simple</span> <span
  m='295180'>model,</span> <span m='295700'>a</span> <span
  m='295950'>workable</span> <span m='296550'>model</span> <span
  m='297300'>is</span> <span m='297520'>to</span> <span m='297670'>say</span>
  <span m='297940'>it</span> <span m='298060'>happens</span> <span
  m='298580'>in</span> <span m='299120'>0</span> <span m='299510'>time</span>
  <span m='300280'>with</span> <span m='300570'>a</span> <span
  m='300920'>delta</span> <span m='301310'>function.</span> <span
  m='302660'>So</span> <span m='302950'>I</span> <span m='303120'>really</span>
  <span m='304210'>want</span> <span m='304510'>to</span> <span
  m='305380'>use</span> <span m='305850'>delta</span> <span
  m='306180'>functions.</span> <span m='307230'>And</span> <span
  m='307850'>they're</span> <span m='308070'>not</span> <span
  m='308300'>difficult</span> <span m='308750'>to</span> <span
  m='308850'>use.</span> <span m='310070'>They're</span> <span
  m='310440'>just</span> <span m='310690'>not</span> <span
  m='310920'>quite</span> <span m='311490'>perfect</span> <span
  m='311910'>for</span> <span m='312060'>calculus</span> <span
  m='313010'>because</span> <span m='314100'>the</span> <span
  m='314820'>derivative</span> <span m='316250'>of</span> <span
  m='316410'>the</span> <span m='316530'>step</span> <span
  m='316860'>function</span> <span m='318530'>is</span> <span
  m='319150'>not</span> <span m='319500'>quite</span> <span
  m='320080'>legitimate</span> <span m='321496'>at</span> <span
  m='322250'>the</span> <span m='322920'>jump.</span> </p><p><span
  m='324670'>OK.</span> <span m='325590'>But</span> <span m='325850'>what</span>
  <span m='326080'>you</span> <span m='326210'>can</span> <span
  m='326600'>do,</span> <span m='327700'>the</span> <span m='327810'>part</span>
  <span m='328080'>of</span> <span m='328220'>calculus</span> <span
  m='329010'>that</span> <span m='330400'>works</span> <span
  m='331790'>correctly</span> <span m='333350'>is</span> <span
  m='333610'>integration.</span> <span m='334990'>Integration</span> <span
  m='335680'>tends</span> <span m='336030'>to</span> <span
  m='336140'>make</span> <span m='336400'>things</span> <span
  m='336710'>smoother.</span> <span m='338360'>The</span> <span
  m='338530'>delta</span> <span m='338930'>function--</span> <span
  m='340430'>sorry,</span> <span m='340870'>the</span> <span
  m='340970'>step</span> <span m='341280'>function</span> <span
  m='342210'>is</span> <span m='342450'>the</span> <span
  m='342640'>integral</span> <span m='343140'>of</span> <span
  m='343220'>the</span> <span m='343330'>delta</span> <span
  m='343680'>function.</span> <span m='344120'>Right?</span> <span
  m='345040'>We're</span> <span m='345140'>going</span> <span
  m='345450'>in</span> <span m='345540'>the</span> <span
  m='345870'>opposite</span> <span m='346280'>direction.</span> <span
  m='347020'>We</span> <span m='347220'>take</span> <span
  m='347450'>derivatives,</span> <span m='348120'>we</span> <span
  m='348270'>get</span> <span m='348990'>craziness.</span> <span
  m='350890'>If</span> <span m='351070'>we</span> <span m='351270'>take</span>
  <span m='351970'>integrals</span> <span m='352560'>to</span> <span
  m='352900'>go</span> <span m='353230'>from</span> <span
  m='353530'>delta--</span> <span m='354420'>so</span> <span
  m='354510'>the</span> <span m='354670'>integral</span> <span
  m='355110'>of</span> <span m='355230'>the</span> <span m='355350'>delta</span>
  <span m='355730'>is</span> <span m='355940'>the</span> <span
  m='356050'>step</span> <span m='356390'>function.</span> <span
  m='357120'>And</span> <span m='357500'>that's</span> <span
  m='357830'>really</span> <span m='358130'>how</span> <span m='358320'>you know
  a</span> <span m='358800'>delta</span> <span m='359150'>function.</span> <span
  m='359820'>That's</span> <span m='360150'>the</span> <span
  m='360260'>math</span> <span m='360690'>way</span> <span m='361530'>to</span>
  <span m='361780'>describe</span> <span m='362680'>more</span> <span
  m='363160'>exactly</span> <span m='363860'>than</span> <span
  m='364110'>this</span> <span m='365010'>arrow</span> <span m='365640'>that
  just</span> <span m='365810'>fires</span> <span m='366220'>off</span> <span
  m='367220'>what</span> <span m='367610'>the</span> <span
  m='367730'>delta</span> <span m='368030'>function</span> <span
  m='368430'>is</span> <span m='368540'>doing.</span> </p><p><span
  m='369250'>So</span> <span m='369440'>the</span> <span m='369610'>key</span>
  <span m='370120'>property</span> <span m='370590'>of</span> <span
  m='370680'>the</span> <span m='370790'>delta</span> <span
  m='371110'>function</span> <span m='371750'>is</span> <span
  m='371990'>to</span> <span m='372130'>know</span> <span m='372330'>what</span>
  <span m='372500'>it's</span> <span m='372650'>integral</span> <span
  m='373080'>is.</span> <span m='373920'>The</span> <span
  m='374030'>integral</span> <span m='374470'>of</span> <span
  m='374600'>the</span> <span m='374710'>delta</span> <span
  m='375100'>function</span> <span m='379520'>is</span> <span
  m='379740'>the</span> <span m='379880'>total</span> <span
  m='380240'>deposit</span> <span m='381680'>over,</span> <span
  m='382230'>let's</span> <span m='382540'>say,</span> <span
  m='382910'>it</span> <span m='382930'>started--</span> <span
  m='383850'>time</span> <span m='384290'>could</span> <span
  m='384480'>have</span> <span m='384630'>started</span> <span m='385100'>even
  at</span> <span m='385520'>minus</span> <span m='385940'>infinity,</span>
  <span m='387090'>and</span> <span m='387260'>it</span> <span
  m='387330'>could</span> <span m='387550'>go</span> <span m='387750'>on</span>
  <span m='388030'>forever</span> <span m='388490'>to</span> <span
  m='388610'>plus</span> <span m='388950'>infinity.</span> <span
  m='390560'>So</span> <span m='390640'>that's</span> <span
  m='390940'>the</span> <span m='391110'>total</span> <span
  m='391590'>deposit,</span> <span m='392160'>the</span> <span
  m='392320'>total</span> <span m='393330'>input</span> <span
  m='393900'>coming</span> <span m='394340'>from</span> <span
  m='395160'>this</span> <span m='395370'>source</span> <span
  m='395830'>term</span> <span m='396090'>delta of</span> <span
  m='396540'>t.</span> <span m='397330'>And</span> <span m='397530'>what</span>
  <span m='397730'>is</span> <span m='397870'>the</span> <span
  m='397990'>answer?</span> <span m='399330'>Well,</span> <span
  m='400770'>the</span> <span m='401380'>integral</span> <span
  m='401860'>of</span> <span m='401980'>delta</span> <span
  m='402420'>should</span> <span m='402720'>be</span> <span
  m='403610'>the</span> <span m='403710'>step</span> <span
  m='404030'>function.</span> <span m='405080'>The</span> <span
  m='405190'>step</span> <span m='405480'>function</span> <span
  m='405940'>out</span> <span m='406160'>in</span> <span
  m='406310'>infinity</span> <span m='406940'>is</span> <span
  m='407070'>1.</span> <span m='407820'>Back</span> <span m='408110'>at</span>
  <span m='408240'>minus</span> <span m='408620'>infinity</span> <span
  m='409280'>it's</span> <span m='409460'>0.</span> <span m='410100'>Do</span>
  <span m='410360'>you</span> <span m='410470'>see</span> <span
  m='410660'>what</span> <span m='410820'>I'm</span> <span
  m='410940'>saying</span> <span m='411240'>here?</span> </p><p><span
  m='411850'>This</span> <span m='412080'>would</span> <span
  m='412290'>be</span> <span m='413770'>h of</span> <span m='414080'>t</span>
  <span m='415100'>evaluated</span> <span m='415970'>between</span> <span
  m='416950'>t</span> <span m='417390'>equal</span> <span
  m='417800'>minus</span> <span m='418300'>infinity</span> <span
  m='419450'>and</span> <span m='419670'>plus</span> <span
  m='420000'>infinity</span> <span m='421750'>because</span> <span
  m='422010'>those</span> <span m='422270'>are</span> <span
  m='422320'>the</span> <span m='422500'>limits</span> <span
  m='422900'>of</span> <span m='423000'>integration.</span> <span
  m='424400'>And</span> <span m='425380'>what</span> <span m='425750'>do</span>
  <span m='425840'>I</span> <span m='425910'>get?</span> <span
  m='427220'>At</span> <span m='427380'>plus</span> <span
  m='427670'>infinity</span> <span m='428290'>the</span> <span
  m='428480'>step</span> <span m='428650'>function</span> <span
  m='429140'>is</span> <span m='429430'>1.</span> <span m='430900'>This</span>
  <span m='431170'>is</span> <span m='431570'>0.</span> <span
  m='432440'>So</span> <span m='432620'>I</span> <span m='432740'>get</span>
  <span m='433010'>1.</span> <span m='434120'>And</span> <span
  m='434380'>everybody</span> <span m='435960'>catches</span> <span
  m='436400'>on</span> <span m='436620'>to</span> <span m='436740'>that</span>
  <span m='437100'>key</span> <span m='437440'>fact</span> <span
  m='437900'>that</span> <span m='438050'>the</span> <span
  m='438590'>total</span> <span m='439100'>integral</span> <span
  m='439580'>of</span> <span m='439750'>the</span> <span m='439870'>delta</span>
  <span m='440230'>function</span> <span m='440950'>is</span> <span
  m='441170'>1.</span> <span m='442960'>Again,</span> <span
  m='443490'>you</span> <span m='443690'>only</span> <span
  m='443910'>made</span> <span m='444180'>the</span> <span
  m='444280'>deposit</span> <span m='444830'>at</span> <span
  m='444960'>one</span> <span m='445280'>moment,</span> <span
  m='445750'>but</span> <span m='445910'>that</span> <span
  m='446120'>deposit</span> <span m='446610'>was</span> <span
  m='446830'>a</span> <span m='446910'>full</span> <span
  m='448200'>dollar.</span> <span m='449560'>And</span> <span
  m='450160'>that,</span> <span m='451380'>adding</span> <span
  m='451720'>up</span> <span m='451870'>all</span> <span
  m='452110'>deposits</span> <span m='452780'>is</span> <span
  m='453000'>just</span> <span m='453340'>that</span> <span
  m='453860'>$1.00.</span> </p><p><span m='455880'>So,</span> <span
  m='456760'>that's</span> <span m='457160'>the</span> <span
  m='458660'>integral</span> <span m='459130'>of</span> <span
  m='459240'>the</span> <span m='459360'>delta</span> <span
  m='459730'>function.</span> <span m='461330'>Now</span> <span
  m='461490'>actually,</span> <span m='461940'>to use</span> <span
  m='462330'>delta</span> <span m='462660'>functions</span> <span
  m='463640'>I</span> <span m='463740'>need</span> <span m='464000'>to</span>
  <span m='464160'>give</span> <span m='464400'>you</span> <span
  m='465770'>a</span> <span m='465880'>slight</span> <span
  m='466530'>generalization</span> <span m='467360'>of</span> <span
  m='467460'>that.</span> <span m='468520'>So</span> <span m='470300'>as</span>
  <span m='470760'>I</span> <span m='470830'>say,</span> <span
  m='471310'>delta</span> <span m='471660'>functions</span> <span
  m='472110'>are</span> <span m='472280'>really</span> <span
  m='472640'>known--</span> <span m='473910'>we</span> <span
  m='474040'>don't</span> <span m='474210'>like</span> <span
  m='474400'>to</span> <span m='474530'>take</span> <span
  m='474780'>their</span> <span m='474930'>derivative.</span> <span
  m='475510'>The</span> <span m='475630'>derivative</span> <span
  m='476170'>of</span> <span m='476290'>a</span> <span m='476380'>delta</span>
  <span m='476750'>function</span> <span m='477490'>is</span> <span
  m='477670'>a</span> <span m='477770'>truly</span> <span
  m='479120'>crazy</span> <span m='479600'>function.</span> <span
  m='480515'>It</span> <span m='480930'>shoots</span> <span m='481380'>up</span>
  <span m='481570'>to</span> <span m='482240'>infinity</span> <span
  m='483010'>and</span> <span m='483130'>then it</span> <span
  m='483200'>shoots</span> <span m='483590'>down</span> <span
  m='483850'>the</span> <span m='483930'>minus</span> <span
  m='484310'>infinity,</span> <span m='484920'>the</span> <span
  m='485060'>slope</span> <span m='485420'>of</span> <span
  m='486420'>that</span> <span m='486630'>arrow.</span> <span
  m='487650'>But</span> <span m='489320'>it's</span> <span
  m='490560'>integrals</span> <span m='490855'>that</span> <span
  m='491150'>we</span> <span m='491330'>want.</span> </p><p><span
  m='492010'>So</span> <span m='492210'>now</span> <span m='492450'>let</span>
  <span m='492650'>me</span> <span m='492810'>integrate</span> <span
  m='494060'>from</span> <span m='494220'>minus</span> <span
  m='494620'>infinity</span> <span m='495780'>to</span> <span
  m='495870'>infinity</span> <span m='496650'>my</span> <span
  m='496840'>delta</span> <span m='497280'>function</span> <span
  m='498980'>times</span> <span m='499370'>any</span> <span
  m='499710'>other</span> <span m='499960'>function,</span> <span
  m='500850'>say</span> <span m='501310'>f</span> <span m='501590'>of</span>
  <span m='501800'>t</span> <span m='503190'>dt.</span> <span
  m='506970'>That's</span> <span m='507200'>something</span> <span
  m='507580'>we'll</span> <span m='507750'>need</span> <span
  m='507990'>to</span> <span m='508070'>be</span> <span m='508260'>able</span>
  <span m='508450'>to</span> <span m='508550'>compute.</span> <span
  m='509670'>What's</span> <span m='510300'>the</span> <span
  m='510440'>right</span> <span m='511700'>integral</span> <span
  m='512140'>for</span> <span m='512299'>that?</span> <span
  m='512840'>And</span> <span m='512890'>again,</span> <span
  m='514059'>delta</span> <span m='514470'>is</span> <span
  m='514750'>doing</span> <span m='515090'>everything</span> <span
  m='515659'>at</span> <span m='515880'>one</span> <span
  m='516190'>moment</span> <span m='516640'>at</span> <span m='516830'>t</span>
  <span m='517039'>equals</span> <span m='517350'>0.</span> <span
  m='518730'>At</span> <span m='518940'>that</span> <span
  m='519140'>moment</span> <span m='519580'>t</span> <span
  m='519770'>equals</span> <span m='520059'>0,</span> <span m='521059'>at</span>
  <span m='521270'>that</span> <span m='521520'>moment</span> <span
  m='521909'>when</span> <span m='522090'>t</span> <span m='522320'>is</span>
  <span m='522450'>0</span> <span m='522750'>and</span> <span
  m='522840'>that's</span> <span m='523039'>the</span> <span
  m='523159'>only</span> <span m='523409'>place</span> <span
  m='523710'>any</span> <span m='523950'>action</span> <span
  m='524360'>is</span> <span m='524480'>happening,</span> <span
  m='525350'>f</span> <span m='525630'>of</span> <span m='525810'>t</span> <span
  m='526510'>is</span> <span m='527380'>f</span> <span m='527620'>of</span>
  <span m='527740'>0.</span> <span m='528230'>It's</span> <span
  m='528830'>whatever</span> <span m='529310'>value</span> <span
  m='529700'>it</span> <span m='529830'>has</span> <span m='530610'>at</span>
  <span m='530900'>that</span> <span m='531190'>point</span> <span
  m='531600'>t</span> <span m='531780'>equals</span> <span m='532080'>0.</span>
  <span m='532910'>And</span> <span m='533590'>that's</span> <span
  m='533830'>the</span> <span m='534010'>answer.</span> <span
  m='534870'>f</span> <span m='535040'>of</span> <span m='535498'>0.</span>
  </p><p><span m='538250'>So</span> <span m='538460'>if</span> <span
  m='538610'>f</span> <span m='538790'>of</span> <span m='538930'>t</span> <span
  m='539160'>was</span> <span m='539400'>the</span> <span
  m='539510'>constant</span> <span m='540080'>function</span> <span
  m='540510'>1,</span> <span m='541810'>then</span> <span
  m='542020'>we're</span> <span m='542170'>back</span> <span
  m='542490'>to</span> <span m='542630'>our</span> <span
  m='543550'>integral</span> <span m='543940'>up</span> <span
  m='544090'>there.</span> <span m='544770'>If</span> <span
  m='544930'>that's</span> <span m='545260'>just</span> <span
  m='545470'>1,</span> <span m='545990'>I'm</span> <span
  m='546180'>integrating</span> <span m='546720'>delta</span> <span
  m='547070'>of</span> <span m='547210'>t.</span> <span m='547770'>My</span>
  <span m='547940'>function</span> <span m='548390'>is</span> <span
  m='548500'>1,</span> <span m='549190'>I</span> <span m='549280'>get</span>
  <span m='549480'>1.</span> <span m='550670'>But</span> <span
  m='550900'>if</span> <span m='551060'>that</span> <span
  m='551370'>function</span> <span m='551890'>is,</span> <span
  m='553970'>suppose</span> <span m='554360'>that</span> <span
  m='554570'>function</span> <span m='555040'>is</span> <span
  m='555310'>sine</span> <span m='555780'>t.</span> <span
  m='556990'>What's</span> <span m='557260'>the</span> <span
  m='557410'>integral</span> <span m='557870'>of</span> <span
  m='558020'>delta</span> <span m='558420'>of</span> <span m='558540'>t</span>
  <span m='558950'>times</span> <span m='559340'>sine</span> <span
  m='559900'>t</span> <span m='560280'>dt?</span> <span m='561820'>Well,</span>
  <span m='562610'>sine</span> <span m='563030'>t</span> <span
  m='564360'>happens</span> <span m='564790'>to</span> <span
  m='565180'>disappear</span> <span m='566340'>just</span> <span
  m='566870'>at</span> <span m='567030'>the</span> <span
  m='567140'>moment</span> <span m='567650'>when</span> <span
  m='567980'>the</span> <span m='568090'>delta</span> <span
  m='568410'>function</span> <span m='568840'>is</span> <span
  m='568980'>ready</span> <span m='569300'>to</span> <span
  m='569460'>turn</span> <span m='569980'>on</span> <span m='570960'>at</span>
  <span m='571150'>t</span> <span m='571310'>equals</span> <span
  m='571610'>0.</span> <span m='572460'>So</span> <span m='572660'>the</span>
  <span m='572790'>integral</span> <span m='573210'>of</span> <span
  m='573370'>delta</span> <span m='573750'>of</span> <span m='573900'>t</span>
  <span m='574530'>sine</span> <span m='575000'>t</span> <span
  m='577200'>is</span> <span m='577690'>sine</span> <span m='578180'>of</span>
  <span m='578290'>0</span> <span m='578760'>is</span> <span
  m='578940'>0.</span> <span m='581300'>You have</span> <span
  m='582620'>one</span> <span m='583040'>term</span> <span
  m='584700'>turned</span> <span m='584980'>on,</span> <span
  m='585350'>but</span> <span m='585550'>the</span> <span
  m='585680'>other</span> <span m='585920'>term</span> <span
  m='586490'>turned</span> <span m='586840'>off.</span> <span
  m='587440'>So</span> <span m='588250'>nothing</span> <span
  m='588690'>happened</span> <span m='589070'>altogether.</span> </p><p><span
  m='589990'>Whereas</span> <span m='590630'>the</span> <span
  m='590730'>integral</span> <span m='591100'>of</span> <span
  m='591240'>delta</span> <span m='591700'>t</span> <span m='592080'>e</span>
  <span m='592460'>to</span> <span m='592560'>the</span> <span
  m='592710'>t--</span> <span m='593030'>yeah,</span> <span m='593240'>tell
  me</span> <span m='593610'>that one.</span> <span m='594340'>The</span> <span
  m='594420'>integral</span> <span m='594830'>of</span> <span
  m='594960'>delta</span> <span m='595380'>t</span> <span m='595705'>e</span>
  <span m='596030'>to</span> <span m='596110'>the</span> <span
  m='596290'>t</span> <span m='596830'>dt</span> <span m='597920'>is--</span>
  <span m='598460'>well</span> <span m='598760'>e</span> <span
  m='598910'>to</span> <span m='599010'>the</span> <span m='599160'>t</span>
  <span m='599450'>is</span> <span m='599770'>doing</span> <span
  m='600040'>all</span> <span m='600190'>sorts</span> <span m='600470'>of</span>
  <span m='600590'>stuff</span> <span m='600930'>for</span> <span
  m='601110'>all</span> <span m='601350'>time.</span> <span
  m='602230'>But</span> <span m='602560'>the</span> <span
  m='602690'>delta</span> <span m='603090'>function</span> <span
  m='603540'>is</span> <span m='603710'>0</span> <span m='603850'>all</span>
  <span m='604220'>that</span> <span m='604460'>time,</span> <span
  m='605470'>except</span> <span m='605910'>at</span> <span m='606150'>t</span>
  <span m='606330'>equals</span> <span m='606630'>0.</span> <span
  m='607390'>So,</span> <span m='607700'>the</span> <span m='608010'>integral
  of</span> <span m='608440'>delta</span> <span m='608900'>t</span> <span
  m='609355'>e to</span> <span m='609810'>the</span> <span m='610000'>t</span>
  <span m='610330'>dt</span> <span m='610960'>would</span> <span
  m='611300'>be</span> <span m='612790'>1</span> <span m='613640'>because</span>
  <span m='614680'>at</span> <span m='614920'>that</span> <span
  m='615150'>moment,</span> <span m='615650'>t</span> <span
  m='615830'>equals</span> <span m='616100'>0,</span> <span
  m='616380'>the</span> <span m='616530'>only</span> <span
  m='616790'>important</span> <span m='617210'>moment</span> <span
  m='618320'>would</span> <span m='618610'>be</span> <span m='622100'>e</span>
  <span m='622170'>to</span> <span m='622260'>the</span> <span
  m='622400'>t</span> <span m='622640'>function</span> <span
  m='623080'>is</span> <span m='623210'>e</span> <span m='623460'>to the</span>
  <span m='623600'>0,</span> <span m='624040'>and it's</span> <span
  m='624270'>just</span> <span m='624520'>1.</span> </p><p><span
  m='625360'>Let</span> <span m='625710'>me</span> <span m='625870'>ask</span>
  <span m='626110'>you</span> <span m='626230'>for</span> <span
  m='626380'>another</span> <span m='627070'>example.</span> <span
  m='628210'>The</span> <span m='628310'>integral</span> <span
  m='628740'>of</span> <span m='629170'>minus</span> <span
  m='629620'>infinity</span> <span m='630330'>to</span> <span
  m='630370'>infinity</span> <span m='631300'>of</span> <span
  m='631560'>delta--</span> <span m='632200'>let</span> <span
  m='632320'>me</span> <span m='632560'>use</span> <span m='632810'>the</span>
  <span m='633020'>shifted</span> <span m='633650'>delta</span> <span
  m='635020'>e</span> <span m='635320'>to</span> <span m='635430'>the</span>
  <span m='635850'>t</span> <span m='636670'>dt.</span> <span
  m='638930'>Can</span> <span m='639110'>you</span> <span
  m='639230'>compute</span> <span m='639630'>that</span> <span
  m='639850'>integral.</span> <span m='641430'>Well</span> <span
  m='641610'>again,</span> <span m='642370'>that</span> <span
  m='642650'>function</span> <span m='643990'>is</span> <span
  m='644210'>0</span> <span m='644990'>almost</span> <span m='645370'>all</span>
  <span m='645540'>the</span> <span m='645650'>time.</span> <span
  m='646790'>The</span> <span m='646920'>only</span> <span
  m='647150'>time</span> <span m='647460'>that</span> <span
  m='647650'>impulse,</span> <span m='648110'>the</span> <span
  m='648200'>moment</span> <span m='648610'>that</span> <span
  m='648800'>impulse</span> <span m='649280'>hits</span> <span
  m='649670'>is</span> <span m='650570'>t</span> <span m='650990'>equals</span>
  <span m='651310'>capital</span> <span m='651870'>T.</span> <span
  m='652910'>At</span> <span m='653130'>that</span> <span
  m='653430'>moment,</span> <span m='654560'>this</span> <span
  m='654840'>is</span> <span m='655000'>equal</span> <span m='655330'>to</span>
  <span m='655460'>e</span> <span m='655740'>to</span> <span
  m='655840'>the</span> <span m='655970'>capital</span> <span
  m='656500'>T.</span> <span m='657320'>And</span> <span
  m='657500'>that's</span> <span m='657770'>all</span> <span
  m='657980'>that</span> <span m='658140'>matters.</span> <span
  m='660260'>OK.</span> </p><p><span m='661480'>So</span> <span
  m='665070'>now,</span> <span m='665550'>let</span> <span m='665710'>me</span>
  <span m='666230'>use a</span> <span m='666320'>delta</span> <span
  m='666700'>function</span> <span m='667260'>as</span> <span
  m='667620'>the</span> <span m='667750'>source</span> <span
  m='668180'>term</span> <span m='669290'>in</span> <span m='670230'>our</span>
  <span m='670480'>differential</span> <span m='671030'>equation.</span> <span
  m='671690'>So</span> <span m='671770'>we</span> <span m='671880'>are</span>
  <span m='672100'>seeing</span> <span m='672510'>one</span> <span
  m='673010'>last</span> <span m='673430'>time</span> <span
  m='674290'>one</span> <span m='674670'>more--</span> <span m='674990'>I</span>
  <span m='675170'>still</span> <span m='675500'>call</span> <span
  m='675780'>it</span> <span m='675890'>a</span> <span m='675970'>nice</span>
  <span m='676370'>function,</span> <span m='677940'>even</span> <span
  m='678200'>though</span> <span m='678370'>it's</span> <span
  m='678520'>not</span> <span m='678830'>legitimately</span> <span
  m='679620'>a</span> <span m='679680'>function</span> <span
  m='680170'>at</span> <span m='680280'>all,</span> <span m='680630'>the</span>
  <span m='680780'>delta.</span> <span m='681710'>But</span> <span
  m='682120'>let</span> <span m='682360'>me</span> <span m='682540'>solve</span>
  <span m='682960'>the</span> <span m='683080'>equation</span> <span
  m='683950'>dy</span> <span m='684270'>dt</span> <span m='687250'>equals</span>
  <span m='687760'>ay</span> <span m='689520'>plus</span> <span
  m='690430'>the</span> <span m='690570'>delta</span> <span
  m='691000'>function</span> <span m='692220'>turned</span> <span
  m='692690'>on</span> <span m='693160'>at</span> <span
  m='693390'>capital</span> <span m='693940'>T.</span> <span
  m='695120'>And</span> <span m='695270'>let</span> <span m='695440'>me</span>
  <span m='695590'>start</span> <span m='696010'>it</span> <span
  m='696210'>from</span> <span m='697640'>0.</span> <span m='701280'>So</span>
  <span m='701490'>I</span> <span m='701570'>don't</span> <span
  m='701810'>make</span> <span m='702030'>an</span> <span
  m='702160'>initial</span> <span m='702650'>deposit</span> <span
  m='703270'>to</span> <span m='703370'>my</span> <span
  m='703580'>account.</span> <span m='704810'>I</span> <span
  m='704930'>don't</span> <span m='705190'>make</span> <span
  m='705420'>any</span> <span m='705660'>deposit</span> <span
  m='706200'>at</span> <span m='706400'>all,</span> <span
  m='707390'>except</span> <span m='707810'>at</span> <span
  m='707980'>one</span> <span m='708290'>moment</span> <span m='708810'>t</span>
  <span m='709100'>equal</span> <span m='709380'>capital</span> <span
  m='709780'>T.</span> <span m='710115'>And</span> <span m='710450'>in</span>
  <span m='710650'>that</span> <span m='710860'>moment,</span> <span
  m='711380'>I</span> <span m='711500'>deposit</span> <span
  m='712040'>$1.00</span> <span m='713360'>because</span> <span
  m='713630'>delta--</span> <span m='714180'>this</span> <span
  m='714400'>is</span> <span m='714560'>the</span> <span m='714730'>unit</span>
  <span m='715130'>delta.</span> <span m='715490'>If</span> <span
  m='715680'>I</span> <span m='715770'>was</span> <span
  m='716000'>depositing</span> <span m='716720'>$10,</span> <span
  m='717440'>I</span> <span m='717510'>would</span> <span m='717710'>make</span>
  <span m='717930'>it</span> <span m='718170'>10</span> <span
  m='718430'>delta.</span> </p><p><span m='719610'>OK.</span> <span
  m='720410'>So</span> <span m='720760'>we</span> <span m='721050'>know</span>
  <span m='721270'>what</span> <span m='721500'>the</span> <span
  m='721630'>solution</span> <span m='722170'>is</span> <span
  m='723690'>from</span> <span m='723930'>a</span> <span
  m='724010'>deposit</span> <span m='725080'>of</span> <span
  m='725250'>$1.00</span> <span m='726760'>made</span> <span
  m='727290'>at</span> <span m='727800'>one</span> <span m='728220'>time,</span>
  <span m='728970'>t</span> <span m='729140'>equal</span> <span
  m='729390'>to</span> <span m='729480'>capital</span> <span
  m='729940'>T.</span> <span m='730345'>What</span> <span m='730750'>is</span>
  <span m='730930'>the</span> <span m='731070'>solution?</span> <span
  m='731980'>y</span> <span m='732260'>of</span> <span m='732420'>t,</span>
  <span m='733970'>we</span> <span m='734210'>have</span> <span
  m='735640'>0</span> <span m='736872'>up</span> <span m='737210'>to</span>
  <span m='739400'>t</span> <span m='739690'>equal</span> <span
  m='740030'>to</span> <span m='740180'>T.</span> <span
  m='742750'>Nothing</span> <span m='743100'>whatever</span> <span
  m='743405'>has</span> <span m='743710'>happened.</span> <span
  m='745530'>And</span> <span m='745790'>at</span> <span
  m='747030'>capital</span> <span m='747410'>T</span> <span
  m='747930'>time</span> <span m='748270'>t,</span> <span m='749220'>in</span>
  <span m='749450'>goes</span> <span m='749680'>the</span> <span
  m='749800'>$1.00</span> <span m='750730'>and</span> <span m='750930'>it</span>
  <span m='751070'>grows.</span> <span m='752540'>It</span> <span
  m='752610'>grows</span> <span m='753430'>so</span> <span
  m='753710'>that</span> <span m='754060'>it</span> <span
  m='754260'>grows</span> <span m='756870'>over</span> <span
  m='757200'>the</span> <span m='757460'>remaining</span> <span
  m='758120'>time</span> <span m='759210'>e</span> <span m='759740'>to</span>
  <span m='759920'>the</span> <span m='760100'>t</span> <span
  m='760620'>minus</span> <span m='761230'>capital</span> <span
  m='761720'>T.</span> <span m='763180'>This</span> <span m='763430'>is</span>
  <span m='763590'>for</span> <span m='763840'>t</span> <span
  m='764480'>larger</span> <span m='764930'>than</span> <span
  m='765640'>T.</span> <span m='768010'>t</span> <span m='768250'>larger</span>
  <span m='768620'>than</span> <span m='768810'>or</span> <span
  m='768890'>equal</span> <span m='769540'>I</span> <span m='769680'>could
  say.</span> <span m='770420'>When</span> <span m='770790'>t</span> <span
  m='771350'>and</span> <span m='771490'>capital</span> <span m='771920'>T
  are</span> <span m='772300'>equal,</span> <span m='773140'>that's</span> <span
  m='773380'>e</span> <span m='773550'>to</span> <span m='773630'>the</span>
  <span m='773730'>0.</span> <span m='774060'>That's</span> <span
  m='774330'>our</span> <span m='774450'>$1.00</span> <span
  m='774880'>just</span> <span m='775190'>gone</span> <span
  m='775450'>in.</span> </p><p><span m='778470'>When</span> <span
  m='780450'>t</span> <span m='780760'>minus</span> <span
  m='781130'>capital</span> <span m='781530'>T</span> <span m='781750'>is</span>
  <span m='782070'>a</span> <span m='782170'>year</span> <span
  m='782460'>later,</span> <span m='783920'>our</span> <span
  m='784060'>dollar</span> <span m='784530'>is</span> <span
  m='784680'>worth</span> <span m='785520'>e.</span> <span
  m='786670'>When</span> <span m='786940'>t</span> <span m='787250'>minus</span>
  <span m='787650'>capital</span> <span m='788070'>T,</span> <span
  m='788330'>when</span> <span m='788560'>it's</span> <span
  m='788740'>been</span> <span m='788960'>in</span> <span
  m='789110'>there</span> <span m='789290'>for</span> <span m='789470'>a</span>
  <span m='789520'>year,</span> <span m='791120'>that</span> <span
  m='791360'>$1.00</span> <span m='792380'>has</span> <span
  m='792570'>increased</span> <span m='793220'>to--</span> <span
  m='794690'>well,</span> <span m='795050'>that</span> <span
  m='795210'>was</span> <span m='795390'>if</span> <span m='795560'>the</span>
  <span m='795710'>interest</span> <span m='796110'>rate</span> <span
  m='796290'>was</span> <span m='796430'>100%</span> <span m='797280'>you</span>
  <span m='797450'>may</span> <span m='797640'>feel.</span> <span
  m='798880'>You'd</span> <span m='799020'>be</span> <span
  m='799200'>fortunate</span> <span m='799710'>to</span> <span
  m='799780'>get</span> <span m='800020'>that.</span> <span
  m='800800'>But</span> <span m='800920'>let's</span> <span
  m='801160'>suppose</span> <span m='801530'>you</span> <span
  m='801650'>do.</span> <span m='802330'>At</span> <span m='802460'>100%</span>
  <span m='803340'>interest,</span> <span m='804950'>after</span> <span
  m='805400'>one</span> <span m='805680'>year,</span> <span
  m='807410'>you</span> <span m='807520'>might</span> <span
  m='807780'>say,</span> <span m='808220'>well,</span> <span
  m='808410'>my</span> <span m='808540'>money</span> <span
  m='808890'>just</span> <span m='809130'>doubled</span> <span
  m='810270'>because</span> <span m='810500'>I</span> <span
  m='810570'>got</span> <span m='810990'>the</span> <span
  m='811200'>interest</span> <span m='811920'>equaled</span> <span
  m='812340'>the</span> <span m='812500'>original.</span> <span
  m='812970'>So</span> <span m='813090'>I</span> <span m='813170'>got</span>
  <span m='813320'>twice</span> <span m='813710'>it.</span> <span
  m='813860'>But</span> <span m='814030'>not</span> <span m='814250'>true</span>
  <span m='814880'>because</span> <span m='815210'>that</span> <span
  m='815420'>money</span> <span m='815760'>went</span> <span
  m='816060'>in--</span> <span m='817370'>was</span> <span
  m='817630'>growing.</span> <span m='818610'>Interest</span> <span
  m='819090'>was</span> <span m='819330'>being</span> <span
  m='819610'>added,</span> <span m='820380'>compounded</span> <span
  m='821180'>through</span> <span m='821410'>the</span> <span
  m='821510'>whole</span> <span m='821790'>year</span> <span
  m='822620'>so</span> <span m='822870'>that</span> <span
  m='823060'>after</span> <span m='823440'>one</span> <span
  m='823760'>year,</span> <span m='824970'>starting</span> <span
  m='825380'>with</span> <span m='825540'>1,</span> <span m='826630'>you</span>
  <span m='826760'>have</span> <span m='826990'>e</span> <span
  m='828240'>at</span> <span m='829650'>a</span> <span m='829930'>is</span>
  <span m='830110'>100%.</span> </p><p><span m='830980'>Oh,</span> <span
  m='831820'>OK.</span> <span m='832280'>My</span> <span
  m='832490'>formula</span> <span m='833000'>isn't</span> <span
  m='833170'>incorrect</span> <span m='833740'>here</span> <span
  m='833900'>because</span> <span m='835780'>I</span> <span
  m='835990'>had</span> <span m='836160'>an</span> <span m='836360'>a
  here</span> <span m='837630'>and</span> <span m='838080'>it</span> <span
  m='838190'>belongs</span> <span m='838610'>here.</span> <span
  m='838860'>So</span> <span m='839060'>let</span> <span m='839200'>me</span>
  <span m='839360'>fix</span> <span m='839650'>that.</span> <span
  m='840940'>It's</span> <span m='841220'>e</span> <span m='841590'>to</span>
  <span m='841760'>the</span> <span m='842030'>a</span> <span
  m='845880'>t</span> <span m='846230'>minus</span> <span m='846610'>T.</span>
  <span m='847390'>That's</span> <span m='847720'>the</span> <span
  m='847860'>growth</span> <span m='848150'>factor.</span> <span
  m='849270'>That's</span> <span m='849540'>the</span> <span
  m='849660'>growth</span> <span m='849960'>factor</span> <span
  m='850480'>up</span> <span m='850700'>to</span> <span m='850860'>time</span>
  <span m='851190'>t</span> <span m='851780'>starting</span> <span
  m='852230'>from</span> <span m='853390'>the</span> <span
  m='853550'>earlier</span> <span m='853980'>time</span> <span
  m='854370'>capital</span> <span m='854870'>T.</span> <span
  m='855940'>So</span> <span m='856120'>you</span> <span m='856320'>see</span>
  <span m='856660'>that</span> <span m='857170'>we</span> <span
  m='857350'>were</span> <span m='857730'>able</span> <span
  m='857980'>just</span> <span m='858210'>to</span> <span
  m='858320'>write</span> <span m='858560'>down</span> <span
  m='858820'>the</span> <span m='859230'>solution</span> <span
  m='859860'>to</span> <span m='860510'>the</span> <span
  m='860670'>differential</span> <span m='861190'>equation</span> <span
  m='862580'>even</span> <span m='862850'>though</span> <span
  m='863060'>it's</span> <span m='864580'>entirely</span> <span
  m='865350'>new</span> <span m='866630'>or</span> <span
  m='866880'>different</span> <span m='867810'>or</span> <span
  m='868260'>non-standard</span> <span m='869900'>input.</span> </p><p><span
  m='871620'>The</span> <span m='873790'>step</span> <span
  m='874070'>function</span> <span m='874530'>input--</span> <span
  m='875590'>so</span> <span m='875970'>we're</span> <span
  m='876150'>finding</span> <span m='876550'>here</span> <span
  m='876780'>the</span> <span m='877030'>impulse</span> <span
  m='877870'>response.</span> <span m='879440'>That's</span> <span
  m='879580'>a</span> <span m='879650'>very,</span> <span m='880250'>very</span>
  <span m='880540'>important</span> <span m='881020'>concept</span> <span
  m='881800'>in</span> <span m='882600'>engineering,</span> <span
  m='883890'>the</span> <span m='884080'>impulse</span> <span
  m='884610'>response,</span> <span m='885410'>the</span> <span
  m='885540'>response</span> <span m='886350'>to</span> <span
  m='886560'>an</span> <span m='886690'>impulse.</span> <span
  m='888020'>And</span> <span m='889360'>for</span> <span
  m='889630'>second</span> <span m='890050'>order</span> <span
  m='890330'>differential</span> <span m='890830'>equations,</span> <span
  m='891420'>this</span> <span m='891610'>is</span> <span
  m='891790'>going</span> <span m='891970'>to</span> <span
  m='892030'>be--</span> <span m='893700'>it's</span> <span
  m='893970'>really</span> <span m='894970'>a</span> <span
  m='895370'>crucial</span> <span m='895780'>function</span> <span
  m='896100'>in</span> <span m='896420'>the</span> <span
  m='896810'>subject.</span> <span m='898300'>So</span> <span
  m='898510'>this</span> <span m='898770'>is</span> <span m='899040'>the</span>
  <span m='899920'>response</span> <span m='900640'>to</span> <span
  m='902370'>an</span> <span m='902480'>impulse.</span> <span
  m='903540'>It's</span> <span m='903960'>the</span> <span
  m='904120'>impulse</span> <span m='904660'>response</span> <span
  m='905690'>from</span> <span m='905970'>our</span> <span
  m='906280'>standard</span> <span m='907420'>first</span> <span
  m='907770'>order</span> <span m='908140'>equation</span> <span
  m='908680'>that</span> <span m='908850'>we've</span> <span
  m='909110'>been</span> <span m='909400'>dealing</span> <span
  m='909820'>with.</span> </p><p><span m='910700'>Now</span> <span
  m='911010'>we've</span> <span m='911210'>got</span> <span m='912180'>just
  to</span> <span m='912480'>remember</span> <span m='913480'>one</span> <span
  m='913770'>more</span> <span m='914020'>step</span> <span m='914540'>is</span>
  <span m='915810'>still</span> <span m='916140'>linear</span> <span
  m='916640'>would</span> <span m='916850'>be</span> <span m='917050'>to</span>
  <span m='917120'>allow</span> <span m='917650'>the</span> <span
  m='917740'>interest</span> <span m='918230'>rate</span> <span
  m='918500'>to</span> <span m='918640'>change.</span> <span
  m='919780'>That's</span> <span m='920070'>one</span> <span
  m='920910'>lecture,</span> <span m='921640'>the</span> <span
  m='921780'>next</span> <span m='922130'>one.</span> <span
  m='922920'>And</span> <span m='923200'>then</span> <span m='923610'>we</span>
  <span m='923850'>get</span> <span m='924620'>non-linear</span> <span
  m='925005'>equations.</span> <span m='926220'>So</span> <span
  m='926360'>that's</span> <span m='926630'>what's</span> <span
  m='926880'>coming.</span> <span m='927630'>But</span> <span
  m='928660'>here</span> <span m='928890'>is</span> <span
  m='929320'>delta</span> <span m='929690'>functions</span> <span
  m='930200'>for</span> <span m='930340'>the</span> <span
  m='930480'>first</span> <span m='930790'>time</span> <span
  m='931560'>and</span> <span m='931970'>not</span> <span m='932340'>for</span>
  <span m='932450'>the</span> <span m='932600'>last</span> <span
  m='933090'>time.</span> <span m='934250'>Thank</span> <span
  m='934450'>you.</span> </p>
uid: 22c5af9b27e0a9efdffecd25991207b6
type: courses
layout: video
---
