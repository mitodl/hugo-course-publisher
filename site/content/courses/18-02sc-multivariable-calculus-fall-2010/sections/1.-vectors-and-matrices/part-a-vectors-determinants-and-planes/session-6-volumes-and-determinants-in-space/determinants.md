---
title: Determinants
uid: 7be43a00d3c8502c1dbfb6eaa6207974
parent_uid: bb78c434746c4a7d4c1a369991a0b5d2
technical_location: >-
  https://ocw.mit.edu/courses/mathematics/18-02sc-multivariable-calculus-fall-2010/1.-vectors-and-matrices/part-a-vectors-determinants-and-planes/session-6-volumes-and-determinants-in-space/determinants
short_url: determinants
inline_embed_id: 35389535determinants33292101
about_this_resource_text: ''
related_resources_text: ''
transcript: >-
  <p><span m='6520'>DAVID JORDAN: Hello,</span> <span m='7010'>and</span> <span
  m='7157'>welcome</span> <span m='7600'>back</span> <span m='7940'>to</span>
  <span m='8020'>recitation.</span> <span m='9150'>As</span> <span
  m='9290'>a</span> <span m='9350'>warm</span> <span m='9610'>up,</span> <span
  m='9820'>let's</span> <span m='10020'>get</span> <span
  m='10180'>started</span> <span m='10540'>by</span> <span
  m='10680'>computing</span> <span m='11110'>some</span> <span
  m='11290'>determinants</span> <span m='12020'>for</span> <span
  m='12240'>2</span> <span m='12450'>by</span> <span m='12610'>2</span> <span
  m='12920'>and</span> <span m='13150'>3</span> <span m='13330'>by</span> <span
  m='13510'>3</span> <span m='13670'>matrices.</span> <span m='15170'>Why</span>
  <span m='15345'>don't</span> <span m='15520'>you</span> <span
  m='16180'>take</span> <span m='16440'>some</span> <span m='16610'>time</span>
  <span m='16910'>to</span> <span m='17130'>work</span> <span
  m='17420'>on</span> <span m='18380'>computing</span> <span
  m='18810'>these</span> <span m='19050'>two</span> <span
  m='19190'>determinants,</span> <span m='20380'>and</span> <span
  m='21090'>when</span> <span m='21280'>you're</span> <span
  m='21380'>finished,</span> <span m='21740'>check</span> <span
  m='22050'>back</span> <span m='22260'>with</span> <span m='22410'>me</span>
  <span m='22540'>and</span> <span m='22700'>I'll</span> <span
  m='22790'>show</span> <span m='22970'>you</span> <span m='23080'>how</span>
  <span m='23290'>I</span> <span m='23370'>solved</span> <span
  m='23770'>it.</span> </p><p><span m='33480'>Welcome</span> <span
  m='33770'>back.</span> <span m='34690'>So</span> <span m='34850'>why</span>
  <span m='34915'>don't</span> <span m='34980'>we</span> <span
  m='35110'>get</span> <span m='35240'>started</span> <span
  m='35630'>with</span> <span m='35860'>the</span> <span m='35960'>2</span>
  <span m='36130'>by</span> <span m='36280'>2</span> <span
  m='36470'>matrix</span> <span m='36880'>first.</span> <span
  m='38390'>So</span> <span m='38890'>remember,</span> <span
  m='39580'>when</span> <span m='39750'>we</span> <span m='39860'>compute</span>
  <span m='40280'>a</span> <span m='40570'>2</span> <span m='40750'>by</span>
  <span m='40910'>2</span> <span m='41090'>determinant,</span> <span
  m='41680'>we</span> <span m='42360'>multiply</span> <span m='43000'>the</span>
  <span m='43830'>entries</span> <span m='44280'>in</span> <span
  m='44360'>the</span> <span m='44430'>main</span> <span
  m='44740'>diagonal</span> <span m='45620'>and</span> <span m='45760'>we</span>
  <span m='45870'>subtract</span> <span m='46410'>from</span> <span
  m='46550'>that</span> <span m='46770'>the</span> <span
  m='46860'>product</span> <span m='47310'>of</span> <span m='47440'>the</span>
  <span m='47540'>entries</span> <span m='47960'>in</span> <span
  m='48035'>the</span> <span m='48110'>off</span> <span
  m='48280'>diagonal.</span> <span m='49270'>So</span> <span m='49610'>in</span>
  <span m='49710'>this</span> <span m='49980'>case,</span> <span
  m='51090'>we</span> <span m='51210'>have</span> <span m='54330'>3</span> <span
  m='56030'>times</span> <span m='56390'>minus</span> <span m='56800'>2,</span>
  <span m='57990'>minus,</span> <span m='60320'>minus</span> <span
  m='61070'>4</span> <span m='62650'>times</span> <span m='62960'>minus</span>
  <span m='63350'>1.</span> <span m='66310'>So</span> <span m='66500'>we</span>
  <span m='66640'>have</span> <span m='67840'>minus</span> <span
  m='68260'>6</span> <span m='69130'>minus</span> <span m='70710'>4</span> <span
  m='74380'>is</span> <span m='74520'>minus</span> <span m='74860'>10.</span>
  </p><p><span m='76250'>OK,</span> <span m='77370'>now,</span> <span
  m='78360'>the</span> <span m='78610'>3</span> <span m='78810'>by</span> <span
  m='78940'>3</span> <span m='79170'>matrix,</span> <span m='81200'>we're</span>
  <span m='81380'>going</span> <span m='81475'>to</span> <span
  m='81570'>use</span> <span m='81670'>a</span> <span m='81770'>Laplace</span>
  <span m='82220'>expansion,</span> <span m='82790'>which</span> <span
  m='82970'>means</span> <span m='83290'>that</span> <span
  m='85240'>we're</span> <span m='85420'>going</span> <span m='85700'>to</span>
  <span m='86200'>need</span> <span m='86410'>to</span> <span
  m='86490'>choose</span> <span m='86810'>a</span> <span m='86890'>row</span>
  <span m='87220'>or</span> <span m='87340'>a</span> <span
  m='87400'>column</span> <span m='87770'>in</span> <span m='87830'>the</span>
  <span m='87910'>matrix.</span> <span m='88370'>We</span> <span
  m='88450'>can</span> <span m='88550'>choose</span> <span m='88740'>any</span>
  <span m='88960'>row</span> <span m='89190'>or</span> <span
  m='89310'>column,</span> <span m='90695'>but</span> <span m='90980'>as</span>
  <span m='91150'>I</span> <span m='91260'>look</span> <span m='91440'>at</span>
  <span m='91510'>this</span> <span m='91680'>matrix,</span> <span
  m='92180'>I'd</span> <span m='92320'>like</span> <span m='92520'>to</span>
  <span m='92610'>choose</span> <span m='92880'>the</span> <span
  m='92980'>first</span> <span m='93370'>row,</span> <span
  m='93590'>because</span> <span m='93840'>I</span> <span m='93910'>see</span>
  <span m='94080'>this</span> <span m='94190'>0</span> <span
  m='94570'>here,</span> <span m='94980'>which</span> <span m='95170'>is</span>
  <span m='95260'>going</span> <span m='95355'>to</span> <span
  m='95450'>mean</span> <span m='95620'>we</span> <span m='95710'>have</span>
  <span m='95880'>less</span> <span m='96120'>work</span> <span
  m='96370'>to</span> <span m='96490'>do.</span> <span m='97200'>So</span> <span
  m='97400'>let's</span> <span m='97670'>do</span> <span
  m='98200'>Laplace</span> <span m='98680'>expansion</span> <span
  m='99230'>across</span> <span m='99610'>the</span> <span
  m='99710'>first</span> <span m='100120'>row.</span> </p><p><span
  m='100940'>So</span> <span m='101120'>what</span> <span m='101220'>that</span>
  <span m='101420'>means</span> <span m='102080'>is</span> <span
  m='102310'>we</span> <span m='102420'>take</span> <span m='102680'>the</span>
  <span m='102770'>very</span> <span m='103010'>first</span> <span
  m='103320'>entry,</span> <span m='104950'>minus</span> <span
  m='105420'>1,</span> <span m='109560'>and</span> <span m='109780'>now</span>
  <span m='109940'>we</span> <span m='110060'>need</span> <span
  m='110210'>to</span> <span m='110310'>multiply</span> <span
  m='110610'>it</span> <span m='110910'>by</span> <span m='111260'>a</span>
  <span m='111960'>2</span> <span m='112190'>by</span> <span m='112380'>2</span>
  <span m='112730'>determinant,</span> <span m='113700'>which</span> <span
  m='113980'>we</span> <span m='114130'>get</span> <span m='114350'>by</span>
  <span m='114570'>covering</span> <span m='115060'>up</span> <span
  m='115740'>the</span> <span m='115930'>row</span> <span m='116260'>and</span>
  <span m='116450'>the</span> <span m='116520'>column</span> <span
  m='116960'>corresponding</span> <span m='117640'>to</span> <span
  m='117780'>our</span> <span m='117900'>first</span> <span
  m='118240'>entry.</span> <span m='118900'>So</span> <span
  m='119025'>our</span> <span m='119150'>first</span> <span
  m='119450'>entry</span> <span m='119690'>was</span> <span
  m='119880'>minus</span> <span m='120290'>1,</span> <span m='121080'>and</span>
  <span m='121310'>what</span> <span m='121400'>we</span> <span
  m='121510'>need</span> <span m='121670'>to</span> <span m='121760'>do</span>
  <span m='121940'>is</span> <span m='122110'>cover</span> <span
  m='122440'>up</span> <span m='122630'>the</span> <span m='122730'>row</span>
  <span m='123060'>and</span> <span m='123240'>column</span> <span
  m='123680'>containing</span> <span m='124140'>that,</span> <span
  m='124710'>and</span> <span m='125050'>we</span> <span m='125140'>have</span>
  <span m='125340'>this</span> <span m='125510'>little</span> <span
  m='125760'>2</span> <span m='125940'>by</span> <span m='126110'>2</span> <span
  m='126290'>matrix</span> <span m='126710'>here.</span> <span
  m='128090'>And</span> <span m='128350'>so</span> <span m='128490'>we</span>
  <span m='128620'>get</span> <span m='129820'>2,</span> <span
  m='130730'>2;</span> <span m='131620'>minus</span> <span m='132150'>2,</span>
  <span m='132740'>1.</span> <span m='134160'>OK.</span> </p><p><span
  m='135770'>The</span> <span m='135910'>next</span> <span
  m='136620'>entry,</span> <span m='137030'>we</span> <span
  m='137230'>have</span> <span m='137450'>to</span> <span m='137550'>take</span>
  <span m='137910'>negative</span> <span m='138450'>of</span> <span
  m='138570'>this</span> <span m='138700'>entry,</span> <span
  m='139010'>but</span> <span m='139120'>this</span> <span
  m='139200'>entry</span> <span m='139490'>is</span> <span m='139670'>0.</span>
  <span m='140490'>So</span> <span m='141230'>minus</span> <span
  m='141760'>0</span> <span m='142670'>times--</span> <span
  m='144940'>just</span> <span m='145180'>for</span> <span
  m='145280'>practice,</span> <span m='145760'>why</span> <span
  m='145920'>don't</span> <span m='146010'>I</span> <span m='146570'>put</span>
  <span m='146830'>in</span> <span m='146980'>this</span> <span
  m='147360'>cofactor</span> <span m='147780'>here</span> <span
  m='148000'>anyways.</span> <span m='149000'>So</span> <span
  m='149240'>again,</span> <span m='149560'>we</span> <span
  m='149660'>cover</span> <span m='150010'>up</span> <span m='150330'>the</span>
  <span m='150750'>row</span> <span m='151240'>and</span> <span
  m='151490'>the</span> <span m='151570'>column</span> <span
  m='152780'>containing</span> <span m='153170'>the</span> <span
  m='153250'>0,</span> <span m='153870'>and</span> <span m='154080'>we</span>
  <span m='154170'>have</span> <span m='154380'>this</span> <span
  m='154600'>matrix</span> <span m='155340'>1,</span> <span m='155710'>2;</span>
  <span m='156130'>3,</span> <span m='156530'>1.</span> </p><p><span
  m='163360'>Now</span> <span m='163550'>finally,</span> <span
  m='164510'>we</span> <span m='164700'>have</span> <span m='164960'>to</span>
  <span m='165110'>walk</span> <span m='165370'>over</span> <span
  m='165520'>here,</span> <span m='165830'>and</span> <span m='166070'>we</span>
  <span m='166190'>have</span> <span m='166480'>to</span> <span
  m='167950'>take</span> <span m='168950'>4</span> <span m='169940'>times</span>
  <span m='170530'>the</span> <span m='170670'>minor--</span> <span
  m='171320'>which</span> <span m='171530'>we</span> <span m='171650'>get</span>
  <span m='171860'>by</span> <span m='171970'>covering</span> <span
  m='172460'>up</span> <span m='174120'>the</span> <span m='174410'>row</span>
  <span m='174605'>and</span> <span m='174800'>column</span> <span
  m='175140'>containing</span> <span m='175580'>4--</span> <span
  m='182420'>1,</span> <span m='182750'>2;</span> <span m='183560'>3,</span>
  <span m='184850'>minus</span> <span m='185290'>2.</span> </p><p><span
  m='186670'>And</span> <span m='186970'>now</span> <span m='187300'>notice
  that</span> <span m='187640'>these</span> <span m='187900'>are</span> <span
  m='187970'>just</span> <span m='188210'>2</span> <span m='188350'>by</span>
  <span m='188530'>2</span> <span m='188730'>determinants</span> <span
  m='189310'>and</span> <span m='189550'>we</span> <span m='189650'>can</span>
  <span m='189790'>just</span> <span m='189990'>compute</span> <span
  m='190330'>those</span> <span m='190620'>the</span> <span
  m='190710'>same</span> <span m='190930'>way</span> <span m='191030'>we</span>
  <span m='191160'>did</span> <span m='191510'>earlier.</span> <span
  m='192470'>Altogether,</span> <span m='196710'>we</span> <span
  m='196870'>get</span> <span m='197460'>minus</span> <span m='197920'>1,</span>
  <span m='198360'>times</span> <span m='199550'>2</span> <span
  m='200463'>minus</span> <span m='201330'>another</span> <span
  m='202080'>2--</span> <span m='203552'>excuse</span> <span
  m='204014'>me,</span> <span m='205570'>2</span> <span
  m='205970'>minus--</span> <span m='208860'>2</span> <span
  m='209660'>minus</span> <span m='210140'>a</span> <span
  m='210230'>negative</span> <span m='210680'>4,</span> <span
  m='211190'>so</span> <span m='211390'>we</span> <span m='211530'>get</span>
  <span m='211780'>6.</span> <span m='214780'>OK,</span> <span
  m='215180'>this</span> <span m='215450'>one</span> <span
  m='216380'>goes</span> <span m='216660'>away.</span> <span
  m='217750'>And</span> <span m='217900'>then</span> <span m='218020'>we</span>
  <span m='218140'>have</span> <span m='218570'>plus</span> <span
  m='219880'>4,</span> <span m='221310'>times, we have</span> <span
  m='223150'>minus</span> <span m='223700'>2</span> <span
  m='224210'>minus</span> <span m='224630'>another</span> <span
  m='224880'>6,</span> <span m='225430'>so</span> <span m='225505'>it</span>
  <span m='225580'>looks</span> <span m='225810'>to</span> <span
  m='225910'>me</span> <span m='226010'>like</span> <span
  m='226260'>minus</span> <span m='226780'>8.</span> <span
  m='230720'>Altogether,</span> <span m='231350'>we</span> <span
  m='231460'>have</span> <span m='231980'>minus</span> <span
  m='232990'>38.</span> </p><p><span m='238920'>Now</span> <span
  m='239050'>let's</span> <span m='239150'>just</span> <span
  m='239300'>take</span> <span m='239450'>a</span> <span
  m='239510'>moment</span> <span m='239780'>to</span> <span
  m='239860'>see</span> <span m='240030'>what</span> <span m='240150'>we</span>
  <span m='240260'>did</span> <span m='240530'>on</span> <span
  m='240660'>the</span> <span m='240750'>3</span> <span m='240950'>by</span>
  <span m='241070'>3</span> <span m='241290'>matrix.</span> <span
  m='242410'>We</span> <span m='242630'>needed</span> <span m='242870'>to</span>
  <span m='242990'>do</span> <span m='243415'>a</span> <span
  m='243840'>Laplace</span> <span m='244500'>expansion,</span> <span
  m='245560'>which</span> <span m='245760'>means</span> <span
  m='245960'>that</span> <span m='246050'>we</span> <span
  m='246150'>needed</span> <span m='246420'>to</span> <span
  m='246490'>choose</span> <span m='246810'>a</span> <span m='246910'>row</span>
  <span m='247580'>or</span> <span m='247750'>a</span> <span
  m='247810'>column.</span> <span m='248720'>And</span> <span
  m='248900'>we</span> <span m='248980'>needed</span> <span m='249300'>to</span>
  <span m='250030'>take</span> <span m='250320'>the</span> <span
  m='250430'>entries</span> <span m='251090'>of</span> <span
  m='251280'>the</span> <span m='251380'>row</span> <span m='251780'>and</span>
  <span m='251970'>add</span> <span m='252220'>these</span> <span
  m='252470'>up,</span> <span m='253630'>multiplied</span> <span
  m='254360'>by</span> <span m='255110'>the</span> <span
  m='255610'>cofactor</span> <span m='256250'>matrix</span> <span
  m='256760'>we</span> <span m='256910'>got</span> <span m='257200'>by</span>
  <span m='257490'>covering</span> <span m='257990'>up</span> <span
  m='258920'>the</span> <span m='259550'>row</span> <span m='259760'>and</span>
  <span m='259970'>column</span> <span m='260360'>containing</span> <span
  m='260820'>our</span> <span m='261160'>highlighted</span> <span
  m='261640'>entry.</span> <span m='262330'>And</span> <span
  m='262510'>we</span> <span m='262660'>needed</span> <span m='262810'>to</span>
  <span m='262890'>do</span> <span m='263040'>that</span> <span
  m='263230'>alternating</span> <span m='263760'>the</span> <span
  m='263840'>signs.</span> </p><p><span m='265740'>So</span> <span
  m='266560'>we</span> <span m='266740'>got</span> <span m='267830'>minus</span>
  <span m='268320'>1</span> <span m='268780'>times</span> <span
  m='269130'>this</span> <span m='269340'>cofactor,</span> <span
  m='270820'>minus</span> <span m='271690'>0</span> <span
  m='272260'>times</span> <span m='272650'>this</span> <span
  m='272860'>cofactor,</span> <span m='274220'>and</span> <span
  m='274420'>then</span> <span m='274610'>finally,</span> <span
  m='275080'>plus</span> <span m='275530'>4</span> <span m='276090'>times</span>
  <span m='276410'>this</span> <span m='276590'>cofactor.</span> <span
  m='277240'>Altogether,</span> <span m='277740'>we</span> <span
  m='277850'>got</span> <span m='278090'>minus</span> <span
  m='278460'>38.</span> <span m='280790'>OK,</span> <span m='281140'>I'll</span>
  <span m='281280'>leave</span> <span m='281440'>it</span> <span
  m='281520'>at</span> <span m='281650'>that.</span> <span
  m='282300'>Thank</span> <span m='282490'>you.</span> </p>
embedded_media:
  - uid: 3856ce8ba60a04543f161f6d32d7aab4
    parent_uid: 7be43a00d3c8502c1dbfb6eaa6207974
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: PxkEoEbCJT8
  - uid: 47193b19a35fe8210491007b77d8dd9a
    parent_uid: 7be43a00d3c8502c1dbfb6eaa6207974
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/PxkEoEbCJT8/default.jpg'
  - uid: 199849a8900daa0f18376b05e8c3e764
    parent_uid: 7be43a00d3c8502c1dbfb6eaa6207974
    id: 3Play-3PlayYouTubeid-MP4
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: PxkEoEbCJT8
  - uid: d01274e1a80abaed2b16b588e740ea78
    parent_uid: 7be43a00d3c8502c1dbfb6eaa6207974
    id: PxkEoEbCJT8.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-02sc-multivariable-calculus-fall-2010/1.-vectors-and-matrices/part-a-vectors-determinants-and-planes/session-6-volumes-and-determinants-in-space/determinants/PxkEoEbCJT8.srt
  - uid: 0863fab6b2912df5f3658f5289b5b886
    parent_uid: 7be43a00d3c8502c1dbfb6eaa6207974
    id: PxkEoEbCJT8.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-02sc-multivariable-calculus-fall-2010/1.-vectors-and-matrices/part-a-vectors-determinants-and-planes/session-6-volumes-and-determinants-in-space/determinants/PxkEoEbCJT8.pdf
  - uid: 78bc99d462e8744bc4f902fe0380eb44
    parent_uid: 7be43a00d3c8502c1dbfb6eaa6207974
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: 1fd5d1f3533c23027ec98870de038872
    parent_uid: 7be43a00d3c8502c1dbfb6eaa6207974
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
  - uid: d3a2b7ac6d3888179bf9f71e9ec550a9
    parent_uid: 7be43a00d3c8502c1dbfb6eaa6207974
    id: Video-iTunesU-MP4
    title: Video-iTunes U-MP4
    type: Video
    media_location: 'http://itunes.apple.com/us/podcast/determinants/id414355340?i=90322818'
  - uid: b6114c1e9f8cffc46c0bcb49ffcdeca6
    parent_uid: 7be43a00d3c8502c1dbfb6eaa6207974
    id: Video-InternetArchive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: 'http://www.archive.org/download/MIT18_02SCF10/MIT18_02SCF10Rec_05_300k.mp4'
type: courses
layout: video
---
