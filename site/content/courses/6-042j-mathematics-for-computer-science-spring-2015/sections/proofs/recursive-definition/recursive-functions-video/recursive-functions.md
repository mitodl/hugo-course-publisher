---
about_this_resource_text: ''
embedded_media:
  - id: background-image-ocw-jpg
    parent_uid: cacb8f2296349b9ed47b38390564e6db
    title: Background Image-OCW-JPG
    type: Background Image
    uid: fdf7c83220a737e901290210dd8d872a
  - id: Video-iTunes U-MP4
    media_location: 'https://itunes.apple.com/us/itunes-u/id1077791636'
    parent_uid: cacb8f2296349b9ed47b38390564e6db
    title: Video-iTunes U-MP4
    type: Video
    uid: 109479898d8c6ff5ff2373189d4ea889
  - id: Video-YouTube-Stream
    media_location: tOsdeaYDCMk
    parent_uid: cacb8f2296349b9ed47b38390564e6db
    title: Video-YouTube-Stream
    type: Video
    uid: 99ae56547e34c83521527aac688212ba
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/tOsdeaYDCMk/default.jpg'
    parent_uid: cacb8f2296349b9ed47b38390564e6db
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: e1bcaaa8a0942a8b6d998f2b803acbd6
  - id: 3Play-3Play YouTube id-Stream
    media_location: tOsdeaYDCMk
    parent_uid: cacb8f2296349b9ed47b38390564e6db
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: c95314dd7f75c3a3ec4ce93c234ec21b
  - id: tOsdeaYDCMk.srt
    parent_uid: cacb8f2296349b9ed47b38390564e6db
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/recursive-definition/recursive-functions-video/recursive-functions/tOsdeaYDCMk.srt
    title: 3play caption file
    type: null
    uid: 55f8dd78ad555f93c4269e887d6e747e
  - id: tOsdeaYDCMk.pdf
    parent_uid: cacb8f2296349b9ed47b38390564e6db
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/recursive-definition/recursive-functions-video/recursive-functions/tOsdeaYDCMk.pdf
    title: 3play pdf file
    type: null
    uid: da0e8a4260bf6dd80f597b6d602ef13e
  - id: Caption-3Play YouTube id-SRT
    parent_uid: cacb8f2296349b9ed47b38390564e6db
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: d41fdb9f0571759e159e213298ca0724
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: cacb8f2296349b9ed47b38390564e6db
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 69bbe13190d9c02d79580f27c455c0bf
  - id: Video-Internet Archive-MP4
    media_location: >-
      https://archive.org/download/MIT6.042JS15/MIT6_042JS15_recursivefunctions_ipod.mp4
    parent_uid: cacb8f2296349b9ed47b38390564e6db
    title: Video-Internet Archive-MP4
    type: Video
    uid: 34fc2ad0660e2821e8c49d12d3512380
inline_embed_id: 77860156recursivefunctions5004533
parent_uid: 80a90ec9826e9f3696ce5b09a2a47a1d
related_resources_text: ''
short_url: recursive-functions
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/recursive-definition/recursive-functions-video/recursive-functions
title: Recursive Functions
transcript: >-
  <p><span m='1890'>PROFESSOR: Now,</span> <span m='2029'>the</span> <span
  m='2140'>standard</span> <span m='2560'>thing</span> <span m='2780'>you</span>
  <span m='2860'>do</span> <span m='3410'>with</span> <span m='3700'>a</span>
  <span m='3830'>recursive</span> <span m='4310'>data</span> <span
  m='4620'>type</span> <span m='5070'>in</span> <span
  m='5180'>programming</span> <span m='5770'>is</span> <span m='5870'>you</span>
  <span m='5970'>define</span> <span m='6320'>recursive</span> <span
  m='6750'>procedures</span> <span m='7340'>on</span> <span
  m='7520'>them,</span> <span m='8500'>so</span> <span m='9690'>let's</span>
  <span m='11160'>look</span> <span m='11350'>at</span> <span
  m='11400'>how</span> <span m='11570'>that</span> <span m='11810'>works.</span>
  </p><p><span m='12670'>I'm</span> <span m='12720'>going</span> <span
  m='12870'>to</span> <span m='12970'>define</span> <span m='13620'>a</span>
  <span m='13960'>function</span> <span m='14470'>f</span> <span
  m='15050'>on</span> <span m='15190'>a</span> <span
  m='15230'>recursively</span> <span m='15840'>defined</span> <span
  m='16850'>data</span> <span m='17130'>type</span> <span m='17460'>R,</span>
  <span m='18550'>and</span> <span m='18606'>the</span> <span
  m='18663'>way</span> <span m='18720'>I'm</span> <span m='18790'>going</span>
  <span m='18930'>to</span> <span m='19020'>do</span> <span m='19240'>it</span>
  <span m='19470'>is</span> <span m='19670'>I'm</span> <span
  m='19790'>going</span> <span m='19930'>to</span> <span m='20030'>define</span>
  <span m='20560'>f</span> <span m='20790'>of</span> <span m='21020'>b</span>
  <span m='21700'>explicitly</span> <span m='23050'>in</span> <span
  m='23250'>terms</span> <span m='23750'>of</span> <span m='24030'>b</span>
  <span m='24420'>and</span> <span m='24640'>operations</span> <span
  m='25230'>that are</span> <span m='25600'>already</span> <span
  m='25850'>understood</span> <span m='26780'>for</span> <span
  m='27110'>all</span> <span m='27680'>of</span> <span m='28020'>the</span>
  <span m='28160'>base</span> <span m='28900'>cases</span> <span
  m='30340'>of</span> <span m='30730'>b</span> <span m='31240'>in</span> <span
  m='31660'>R.</span> <span m='32430'>And</span> <span m='32689'>then</span>
  <span m='34210'>I'm</span> <span m='34390'>going</span> <span
  m='34560'>to</span> <span m='34660'>define</span> <span m='35230'>f</span>
  <span m='35590'>of</span> <span m='35770'>a</span> <span
  m='35850'>constructor</span> <span m='36830'>applied</span> <span
  m='37350'>to</span> <span m='37450'>x</span> <span m='38980'>in</span> <span
  m='39210'>terms</span> <span m='40010'>of</span> <span m='40550'>x</span>
  <span m='41010'>and</span> <span m='41450'>f</span> <span m='41700'>of</span>
  <span m='41860'>x.</span> <span m='43090'>And</span> <span m='43280'>if</span>
  <span m='43460'>I</span> <span m='43520'>keep</span> <span m='43790'>to</span>
  <span m='43880'>that</span> <span m='44120'>structure,</span> <span
  m='44670'>that</span> <span m='44910'>gives</span> <span m='45130'>me</span>
  <span m='45750'>a</span> <span m='45860'>recursive</span> <span
  m='46470'>definition</span> <span m='47260'>of</span> <span
  m='47440'>the</span> <span m='47520'>function</span> <span m='48020'>f</span>
  <span m='49000'>on</span> <span m='49400'>the</span> <span
  m='49930'>recursively</span> <span m='50600'>defined</span> <span
  m='50990'>data</span> <span m='51240'>set</span> <span m='51530'>R.</span>
  </p><p><span m='51920'>Let's</span> <span m='52150'>look</span> <span
  m='52300'>at</span> <span m='52340'>an</span> <span m='52400'>example</span>
  <span m='52830'>to</span> <span m='52930'>make</span> <span
  m='53160'>this</span> <span m='53510'>recipe</span> <span
  m='54540'>explicit</span> <span m='54885'>and</span> <span
  m='55230'>clearer.</span> <span m='56840'>Let's</span> <span
  m='57060'>think</span> <span m='57220'>about</span> <span m='57440'>a</span>
  <span m='57490'>recursive</span> <span m='57930'>function</span> <span
  m='58510'>on</span> <span m='58910'>a</span> <span m='59020'>set</span> <span
  m='59340'>of</span> <span m='59510'>matched</span> <span
  m='59900'>brackets.</span> <span m='60980'>This</span> <span
  m='61110'>is</span> <span m='61270'>a</span> <span m='61530'>somewhat</span>
  <span m='61870'>interesting</span> <span m='62300'>one.</span> <span
  m='63900'>Let's</span> <span m='64160'>define</span> <span
  m='64610'>the</span> <span m='64720'>depth</span> <span m='65500'>of</span>
  <span m='65660'>a</span> <span m='65720'>string</span> <span
  m='66540'>as</span> <span m='66790'>follows,</span> <span m='67250'>and</span>
  <span m='67320'>the</span> <span m='67430'>idea</span> <span
  m='67630'>is</span> <span m='67830'>it's</span> <span m='68100'>how</span>
  <span m='68300'>deeply</span> <span m='68740'>nested</span> <span
  m='69180'>are</span> <span m='69390'>the</span> <span
  m='69980'>successive</span> <span m='71680'>pairs</span> <span
  m='72050'>of</span> <span m='72170'>left</span> <span m='72440'>and</span>
  <span m='72520'>right</span> <span m='72770'>brackets.</span> </p><p><span
  m='74100'>Well,</span> <span m='74440'>the</span> <span m='74580'>depth</span>
  <span m='75250'>of</span> <span m='75610'>the</span> <span
  m='75790'>empty</span> <span m='76080'>string</span> <span m='76410'>is</span>
  <span m='76540'>0.</span> <span m='77280'>You</span> <span
  m='77590'>got</span> <span m='77715'>to</span> <span m='77840'>start</span>
  <span m='78110'>somewhere,</span> <span m='78780'>and</span> <span
  m='79390'>it's</span> <span m='79590'>got</span> <span m='80150'>no</span>
  <span m='80720'>brackets,</span> <span m='81220'>we'll</span> <span
  m='81390'>call</span> <span m='81720'>it</span> <span m='81825'>depth</span>
  <span m='81930'>0.</span> </p><p><span m='83780'>Now,</span> <span
  m='83890'>what</span> <span m='84070'>about</span> <span m='84410'>the</span>
  <span m='84510'>depth</span> <span m='85290'>of</span> <span
  m='85650'>the</span> <span m='85760'>constructor</span> <span
  m='87870'>putting</span> <span m='88220'>brackets</span> <span
  m='88690'>around</span> <span m='89040'>s</span> <span m='89850'>and</span>
  <span m='90050'>then</span> <span m='90200'>following</span> <span
  m='90700'>it</span> <span m='90830'>by</span> <span m='90990'>t?</span> <span
  m='91690'>Well,</span> <span m='92410'>putting</span> <span
  m='92700'>brackets</span> <span m='93230'>around</span> <span
  m='93580'>s</span> <span m='94400'>gives</span> <span m='94630'>you</span>
  <span m='95140'>a</span> <span m='95240'>string</span> <span
  m='95670'>that's</span> <span m='95970'>1</span> <span m='96480'>deeper</span>
  <span m='96940'>than</span> <span m='97180'>s</span> <span
  m='97460'>is,</span> <span m='98410'>and</span> <span m='98590'>then</span>
  <span m='98710'>you</span> <span m='98810'>follow</span> <span
  m='99200'>it</span> <span m='99340'>by</span> <span m='99490'>t,</span> <span
  m='100170'>and</span> <span m='100460'>it's</span> <span m='100660'>as</span>
  <span m='100790'>deep</span> <span m='101010'>as</span> <span
  m='101150'>t</span> <span m='101290'>is.</span> <span m='102130'>So</span>
  <span m='102320'>the</span> <span m='102450'>result</span> <span
  m='102870'>is</span> <span m='103040'>that</span> <span m='103230'>the</span>
  <span m='103320'>depth</span> <span m='103810'>of</span> <span
  m='103990'>the</span> <span m='104110'>constructor</span> <span
  m='105600'>is</span> <span m='105810'>a</span> <span m='105910'>string</span>
  <span m='108390'>which</span> <span m='108710'>is</span> <span
  m='109210'>a</span> <span m='109420'>number</span> <span
  m='109840'>which</span> <span m='110060'>is</span> <span
  m='110160'>equal</span> <span m='110530'>to</span> <span m='110960'>1</span>
  <span m='111460'>plus</span> <span m='112000'>the</span> <span
  m='112110'>depth</span> <span m='112450'>of</span> <span m='112640'>s</span>
  <span m='113830'>and</span> <span m='114080'>the</span> <span
  m='114150'>depth</span> <span m='114550'>of</span> <span m='114690'>t,</span>
  <span m='115480'>whichever</span> <span m='115950'>is</span> <span
  m='116090'>larger.</span> <span m='116610'>The</span> <span
  m='116730'>max</span> <span m='117230'>of</span> <span m='117390'>1</span>
  <span m='117590'>plus</span> <span m='117940'>depth</span> <span
  m='118200'>of</span> <span m='118330'>s</span> <span m='119110'>and</span>
  <span m='119320'>depth</span> <span m='119620'>of</span> <span
  m='119760'>t,</span> <span m='120410'>and</span> <span
  m='120530'>that's</span> <span m='120890'>our</span> <span
  m='121150'>recursive</span> <span m='121660'>definition</span> <span
  m='122910'>of</span> <span m='123040'>depth.</span> </p><p><span
  m='125330'>Let's</span> <span m='125390'>look</span> <span
  m='125550'>at</span> <span m='125620'>maybe</span> <span
  m='125880'>another</span> <span m='126170'>even</span> <span
  m='126420'>more</span> <span m='126570'>familiar</span> <span
  m='126990'>example</span> <span m='127410'>of</span> <span
  m='127510'>recursive</span> <span m='127950'>definition.</span> <span
  m='128430'>Let's</span> <span m='128660'>define</span> <span
  m='129350'>the</span> <span m='129500'>nth</span> <span
  m='129789'>power</span> <span m='130889'>of</span> <span m='131740'>an</span>
  <span m='132170'>integer</span> <span m='132680'>or</span> <span
  m='132870'>real</span> <span m='133060'>number</span> <span
  m='133390'>k.</span> <span m='135310'>The</span> <span
  m='135430'>zeroth</span> <span m='135890'>power</span> <span
  m='136200'>k</span> <span m='136480'>is</span> <span m='136630'>defined</span>
  <span m='136970'>to</span> <span m='137040'>be</span> <span
  m='137160'>1,</span> <span m='138610'>and</span> <span m='138820'>the</span>
  <span m='138950'>n</span> <span m='139090'>plus</span> <span
  m='139360'>first</span> <span m='139640'>power</span> <span
  m='139950'>of</span> <span m='140215'>k</span> <span m='140740'>is</span>
  <span m='140960'>defined</span> <span m='141340'>to</span> <span
  m='141420'>be</span> <span m='141620'>k</span> <span m='142440'>times</span>
  <span m='143430'>the</span> <span m='143790'>nth</span> <span
  m='144200'>power</span> <span m='144515'>of</span> <span m='144830'>k,</span>
  <span m='146260'>and</span> <span m='146420'>this</span> <span
  m='146570'>would</span> <span m='146830'>be</span> <span m='147040'>an</span>
  <span m='147310'>executable</span> <span m='148460'>definition</span> <span
  m='149110'>of</span> <span m='149250'>the</span> <span
  m='149750'>exponentiation</span> <span m='150640'>function</span> <span
  m='151200'>in</span> <span m='151860'>a</span> <span m='151950'>lot</span>
  <span m='152130'>of</span> <span m='152200'>programming</span> <span
  m='152680'>languages.</span> <span m='155080'>And</span> <span
  m='155520'>my</span> <span m='155670'>point</span> <span
  m='156030'>here</span> <span m='156410'>is</span> <span m='156650'>that</span>
  <span m='156800'>this</span> <span m='156980'>familiar</span> <span
  m='157770'>definition,</span> <span m='159130'>recursive</span> <span
  m='159550'>definition</span> <span m='160090'>on</span> <span
  m='160590'>a</span> <span m='160670'>nonnegative</span> <span
  m='161190'>integer</span> <span m='161590'>n,</span> <span
  m='161780'>is</span> <span m='161920'>in</span> <span m='162030'>fact</span>
  <span m='163020'>a</span> <span m='163170'>structural</span> <span
  m='163610'>induction</span> <span m='164850'>using</span> <span
  m='165300'>the</span> <span m='165400'>fact</span> <span
  m='165730'>that</span> <span m='167330'>the</span> <span
  m='167420'>nonnegative</span> <span m='167960'>integers</span> <span
  m='170380'>can</span> <span m='170550'>be</span> <span
  m='170670'>defined</span> <span m='170980'>recursively</span> <span
  m='171530'>as</span> <span m='171670'>follows.</span> </p><p><span
  m='172760'>0</span> <span m='173300'>is</span> <span m='173450'>a</span> <span
  m='173510'>nonnegative</span> <span m='174050'>integer,</span> <span
  m='175290'>and</span> <span m='175490'>if</span> <span m='175660'>n</span>
  <span m='175890'>is</span> <span m='176000'>a</span> <span
  m='176050'>nonnegative</span> <span m='176660'>integer,</span> <span
  m='177700'>then</span> <span m='178250'>n</span> <span m='178480'>plus</span>
  <span m='178850'>1</span> <span m='179740'>is</span> <span m='179930'>a</span>
  <span m='179990'>nonnegative</span> <span m='180610'>integer.</span> <span
  m='182100'>So</span> <span m='182680'>to</span> <span
  m='182760'>summarize,</span> <span m='183320'>the</span> <span
  m='183430'>recipe</span> <span m='183920'>for</span> <span m='183995'>a</span>
  <span m='184070'>recursive</span> <span m='184680'>function</span> <span
  m='185040'>definition</span> <span m='185650'>is</span> <span
  m='186430'>you</span> <span m='186540'>define</span> <span m='187090'>f</span>
  <span m='188350'>going</span> <span m='188640'>from</span> <span
  m='188900'>the</span> <span m='189030'>recursive</span> <span
  m='189520'>data</span> <span m='189830'>type</span> <span m='190110'>to</span>
  <span m='190230'>values--</span> <span m='190720'>whatever</span> <span
  m='191110'>kind</span> <span m='191300'>of</span> <span
  m='191370'>values</span> <span m='191730'>you</span> <span
  m='191850'>want</span> <span m='191990'>to</span> <span
  m='192080'>assign</span> <span m='192440'>to</span> <span
  m='192540'>these</span> <span m='192730'>recursive</span> <span
  m='193160'>data--</span> <span m='194830'>f</span> <span m='195030'>of</span>
  <span m='195140'>b</span> <span m='195340'>is</span> <span
  m='195460'>defined</span> <span m='195830'>directly</span> <span
  m='196310'>for</span> <span m='196400'>the</span> <span m='196510'>base</span>
  <span m='196800'>case</span> <span m='197150'>b,</span> <span
  m='197920'>of</span> <span m='198100'>base</span> <span
  m='198420'>cases</span> <span m='198820'>b,</span> <span m='199200'>and</span>
  <span m='199450'>f</span> <span m='199770'>of</span> <span
  m='199880'>the</span> <span m='200030'>constructor</span> <span
  m='200550'>of</span> <span m='200650'>x</span> <span m='201010'>is</span>
  <span m='201200'>defined</span> <span m='201700'>using</span> <span
  m='202210'>f</span> <span m='202430'>of</span> <span m='202580'>x</span> <span
  m='203790'>and</span> <span m='204000'>x.</span> </p><p><span
  m='206330'>Now,</span> <span m='206660'>once</span> <span
  m='207020'>you've</span> <span m='208530'>gotten</span> <span
  m='209500'>a</span> <span m='209580'>function</span> <span
  m='209960'>defined</span> <span m='210280'>recursively,</span> <span
  m='211210'>you</span> <span m='211310'>can</span> <span
  m='211330'>start</span> <span m='211580'>proving</span> <span
  m='211980'>things</span> <span m='212300'>about</span> <span
  m='212670'>it</span> <span m='213640'>by</span> <span
  m='214520'>structural</span> <span m='215030'>induction</span> <span
  m='215610'>or</span> <span m='215800'>by</span> <span
  m='216050'>induction</span> <span m='216670'>on</span> <span
  m='216960'>its</span> <span m='217200'>own</span> <span
  m='217640'>definition,</span> <span m='219650'>its</span> <span
  m='219860'>own</span> <span m='220000'>recursive</span> <span
  m='220460'>definition.</span> <span m='221000'>So</span> <span
  m='221130'>let's</span> <span m='221350'>look</span> <span
  m='221540'>at</span> <span m='221580'>an</span> <span
  m='221680'>example</span> <span m='222150'>of</span> <span
  m='222260'>that.</span> </p><p><span m='223930'>I</span> <span
  m='224050'>want</span> <span m='224280'>to</span> <span
  m='224350'>prove</span> <span m='224640'>the</span> <span
  m='224720'>following</span> <span m='225230'>property</span> <span
  m='226050'>of</span> <span m='226320'>the</span> <span m='226400'>depth</span>
  <span m='227170'>of</span> <span m='228020'>strings</span> <span
  m='228940'>in</span> <span m='229170'>M,</span> <span m='230500'>namely</span>
  <span m='231430'>that</span> <span m='231650'>if</span> <span
  m='231860'>I</span> <span m='231930'>look</span> <span m='232250'>at</span>
  <span m='232670'>the</span> <span m='233120'>length</span> <span
  m='233850'>of</span> <span m='234160'>a</span> <span m='234260'>string</span>
  <span m='234620'>r</span> <span m='235010'>plus</span> <span
  m='235430'>2--</span> <span m='236740'>so</span> <span m='240820'>the</span>
  <span m='241100'>vertical</span> <span m='241440'>bars</span> <span
  m='241660'>around</span> <span m='242010'>r</span> <span
  m='242240'>mean</span> <span m='242460'>the</span> <span
  m='242530'>number</span> <span m='242850'>of</span> <span
  m='242980'>brackets</span> <span m='243450'>in</span> <span
  m='243538'>the</span> <span m='243626'>string</span> <span m='243980'>r</span>
  <span m='244750'>plus</span> <span m='245110'>2</span> <span
  m='245630'>is</span> <span m='245870'>less</span> <span m='246160'>than</span>
  <span m='246280'>or</span> <span m='246420'>equal</span> <span
  m='246800'>to</span> <span m='247710'>2</span> <span m='248030'>to</span>
  <span m='248160'>the</span> <span m='248330'>power</span> <span
  m='248750'>of</span> <span m='248810'>depth</span> <span
  m='249160'>plus</span> <span m='249450'>1--</span> <span
  m='249770'>twice</span> <span m='250270'>the</span> <span m='250470'>2</span>
  <span m='250770'>to</span> <span m='250970'>of</span> <span
  m='251070'>the</span> <span m='251170'>depth</span> <span m='251810'>of</span>
  <span m='252200'>the</span> <span m='253530'>string.</span> <span
  m='254330'>And</span> <span m='254560'>I</span> <span m='254690'>want</span>
  <span m='254890'>to</span> <span m='254960'>prove</span> <span
  m='255230'>that</span> <span m='255350'>this</span> <span
  m='255470'>holds</span> <span m='255810'>for</span> <span
  m='256029'>all</span> <span m='256829'>strings</span> <span
  m='257370'>r</span> <span m='257910'>of</span> <span m='258070'>matched</span>
  <span m='258529'>brackets,</span> <span m='259339'>and</span> <span
  m='259529'>I'm</span> <span m='259579'>going</span> <span m='259700'>to</span>
  <span m='259779'>prove</span> <span m='260040'>it</span> <span
  m='260140'>by</span> <span m='260240'>structural</span> <span
  m='260790'>induction.</span> <span m='262110'>And</span> <span
  m='262460'>just</span> <span m='262680'>as</span> <span m='262780'>a</span>
  <span m='262860'>walk-through,</span> <span m='263390'>here's</span> <span
  m='263660'>how</span> <span m='263760'>the</span> <span
  m='263880'>proof</span> <span m='264140'>is</span> <span
  m='264250'>going</span> <span m='264370'>to</span> <span m='264420'>go.</span>
  </p><p><span m='265230'>Let's</span> <span m='265780'>suppose</span> <span
  m='266300'>that</span> <span m='266450'>r</span> <span m='266710'>is</span>
  <span m='266790'>the</span> <span m='266850'>base</span> <span
  m='267100'>case.</span> <span m='268080'>Is</span> <span m='268320'>it</span>
  <span m='268430'>the</span> <span m='268520'>case</span> <span
  m='268940'>that</span> <span m='269120'>this</span> <span
  m='270030'>inequality</span> <span m='270700'>holds</span> <span
  m='271210'>for</span> <span m='271460'>the</span> <span
  m='271650'>empty</span> <span m='271910'>string?</span> <span
  m='272460'>Well,</span> <span m='273260'>the</span> <span
  m='273390'>length</span> <span m='273740'>of</span> <span m='273870'>r</span>
  <span m='275030'>is</span> <span m='276030'>0,</span> <span
  m='276530'>so</span> <span m='277130'>length</span> <span m='277400'>of</span>
  <span m='277530'>r</span> <span m='277710'>plus</span> <span
  m='278030'>2</span> <span m='278690'>is</span> <span m='278820'>0</span> <span
  m='279050'>plus</span> <span m='279260'>2,</span> <span m='279360'>or</span>
  <span m='279510'>2,</span> <span m='280280'>which</span> <span
  m='280470'>is</span> <span m='280580'>the</span> <span m='280660'>same</span>
  <span m='280950'>as</span> <span m='281070'>2</span> <span
  m='281260'>to</span> <span m='281330'>the</span> <span m='281440'>0</span>
  <span m='281760'>plus</span> <span m='282040'>1,</span> <span
  m='282770'>which</span> <span m='283100'>is</span> <span m='283220'>in</span>
  <span m='283330'>fact</span> <span m='283820'>equal</span> <span
  m='284210'>to</span> <span m='284380'>2</span> <span m='284660'>to</span>
  <span m='284820'>the</span> <span m='284950'>depth</span> <span
  m='285380'>of</span> <span m='285510'>the</span> <span m='285670'>empty</span>
  <span m='285910'>string</span> <span m='286190'>plus</span> <span
  m='286460'>1.</span> <span m='287050'>So</span> <span m='287470'>this</span>
  <span m='287640'>inequality</span> <span m='288180'>actually</span> <span
  m='288510'>holds</span> <span m='288790'>as</span> <span m='288910'>an</span>
  <span m='289040'>equality</span> <span m='289740'>in</span> <span
  m='289850'>the</span> <span m='289930'>base</span> <span
  m='290250'>case,</span> <span m='291050'>and</span> <span
  m='291860'>we're</span> <span m='292080'>good</span> <span
  m='292360'>there.</span> </p><p><span m='293866'>What</span> <span
  m='294260'>we</span> <span m='294380'>next</span> <span m='294700'>need</span>
  <span m='294880'>to</span> <span m='294960'>show</span> <span
  m='295380'>is</span> <span m='295850'>that</span> <span m='296270'>this</span>
  <span m='296540'>inequality</span> <span m='297200'>holds</span> <span
  m='297610'>in</span> <span m='297700'>the</span> <span
  m='297810'>constructor</span> <span m='298400'>case.</span> <span
  m='298860'>So</span> <span m='299080'>we're</span> <span
  m='299180'>looking</span> <span m='299600'>at</span> <span
  m='301106'>an</span> <span m='301550'>arbitrary</span> <span
  m='301960'>string</span> <span m='302270'>r</span> <span
  m='303360'>that's</span> <span m='303620'>built</span> <span
  m='303910'>out</span> <span m='304130'>of</span> <span m='304240'>s</span>
  <span m='304590'>and</span> <span m='304940'>t,</span> <span
  m='305970'>and</span> <span m='306160'>r</span> <span m='306570'>is</span>
  <span m='306860'>left</span> <span m='307160'>bracket,</span> <span
  m='307810'>s</span> <span m='308370'>right</span> <span
  m='308610'>bracket,</span> <span m='309180'>t,</span> <span
  m='310100'>and</span> <span m='310850'>I</span> <span m='311070'>want</span>
  <span m='311370'>to</span> <span m='311420'>show</span> <span
  m='312030'>that</span> <span m='312600'>r</span> <span
  m='312970'>satisfies</span> <span m='313610'>this</span> <span
  m='313770'>inequality.</span> </p><p><span m='315070'>Well,</span> <span
  m='315170'>by</span> <span m='315330'>induction</span> <span
  m='315870'>hypothesis,</span> <span m='316640'>I</span> <span
  m='316710'>can</span> <span m='316920'>assume</span> <span
  m='317290'>that</span> <span m='317420'>s</span> <span m='317680'>and</span>
  <span m='317820'>t</span> <span m='318040'>satisfy</span> <span
  m='318630'>the</span> <span m='318750'>inequality.</span> <span
  m='319450'>So</span> <span m='319530'>I</span> <span m='319630'>have</span>
  <span m='319900'>that</span> <span m='320350'>the</span> <span
  m='320440'>length</span> <span m='320720'>of</span> <span m='320820'>s</span>
  <span m='321020'>plus</span> <span m='321320'>2</span> <span
  m='321590'>is</span> <span m='321720'>at</span> <span m='321860'>most</span>
  <span m='322290'>2</span> <span m='322690'>to</span> <span
  m='322950'>the</span> <span m='323090'>depth</span> <span m='323440'>of</span>
  <span m='323570'>s</span> <span m='323760'>plus</span> <span
  m='324020'>1</span> <span m='324290'>and</span> <span m='324430'>the</span>
  <span m='324720'>length</span> <span m='324940'>of</span> <span
  m='325040'>t</span> <span m='325240'>plus</span> <span m='325510'>2</span>
  <span m='325750'>is</span> <span m='325880'>at</span> <span
  m='325970'>most</span> <span m='326260'>2 to</span> <span
  m='326470'>the</span> <span m='326580'>depth</span> <span m='326880'>of</span>
  <span m='326980'>t</span> <span m='327200'>plus</span> <span
  m='327490'>1,</span> <span m='328240'>and</span> <span m='328840'>let's</span>
  <span m='329180'>just</span> <span m='329440'>walk</span> <span
  m='329760'>through</span> <span m='329910'>the</span> <span
  m='330040'>proof.</span> </p><p><span m='331870'>You</span> <span
  m='332060'>can</span> <span m='332240'>slow</span> <span
  m='332490'>this</span> <span m='332680'>down</span> <span
  m='332870'>and</span> <span m='332940'>replay</span> <span
  m='333300'>it</span> <span m='333410'>if</span> <span m='333520'>need</span>
  <span m='333730'>be,</span> <span m='333890'>so</span> <span
  m='334010'>I'm</span> <span m='334120'>just</span> <span
  m='334370'>going</span> <span m='334480'>to</span> <span m='334530'>go</span>
  <span m='334670'>through</span> <span m='334850'>it</span> <span
  m='334950'>quickly.</span> <span m='336700'>The</span> <span
  m='337010'>length</span> <span m='337600'>of</span> <span m='338110'>r</span>
  <span m='338520'>plus</span> <span m='338870'>2--</span> <span
  m='339260'>r</span> <span m='339650'>is,</span> <span m='339840'>after</span>
  <span m='340020'>all,</span> <span m='340530'>brackets</span> <span
  m='340960'>s,</span> <span m='341255'>t,</span> <span m='341980'>so</span>
  <span m='342330'>it's</span> <span m='342550'>simply</span> <span
  m='342820'>the</span> <span m='342930'>length</span> <span
  m='343180'>of</span> <span m='343310'>that</span> <span
  m='343480'>string</span> <span m='343650'>plus</span> <span
  m='343870'>2</span> <span m='343990'>by</span> <span m='344100'>the</span>
  <span m='344200'>definition</span> <span m='344670'>of</span> <span
  m='344950'>r.</span> <span m='346180'>The</span> <span
  m='346330'>length</span> <span m='346860'>of</span> <span
  m='347330'>brackets</span> <span m='348110'>s,</span> <span
  m='348415'>t</span> <span m='348720'>is</span> <span m='348860'>the</span>
  <span m='348950'>length</span> <span m='349210'>of</span> <span
  m='349340'>t</span> <span m='350380'>plus</span> <span m='350620'>the</span>
  <span m='350710'>length</span> <span m='350950'>of</span> <span
  m='351060'>s</span> <span m='351270'>plus</span> <span m='351610'>the</span>
  <span m='351990'>2</span> <span m='352370'>for</span> <span
  m='352750'>the</span> <span m='353120'>2</span> <span
  m='353400'>brackets</span> <span m='353850'>that</span> <span
  m='353950'>we've</span> <span m='354130'>added,</span> <span
  m='355260'>and</span> <span m='355490'>so</span> <span m='355650'>we're</span>
  <span m='355790'>plugging</span> <span m='356180'>that</span> <span
  m='356410'>into</span> <span m='356930'>the</span> <span
  m='357070'>previous</span> <span m='357570'>term</span> <span
  m='357880'>and</span> <span m='358010'>getting</span> <span
  m='358280'>that</span> <span m='358520'>plus</span> <span m='358830'>2.</span>
  </p><p><span m='360420'>Then</span> <span m='360870'>just</span> <span
  m='361070'>rearrange</span> <span m='361540'>the</span> <span
  m='361650'>terms.</span> <span m='362050'>It's</span> <span
  m='362250'>the</span> <span m='362340'>same</span> <span m='362640'>as</span>
  <span m='362890'>the</span> <span m='362970'>size</span> <span
  m='363260'>of</span> <span m='363360'>s</span> <span m='363540'>plus</span>
  <span m='363800'>2</span> <span m='364690'>plus</span> <span
  m='365000'>the</span> <span m='365080'>size</span> <span m='365390'>of</span>
  <span m='365500'>t</span> <span m='365710'>plus</span> <span
  m='366040'>2.</span> <span m='366270'>And</span> <span m='366380'>I</span>
  <span m='366420'>arranged</span> <span m='366830'>it</span> <span
  m='366940'>that</span> <span m='367150'>way</span> <span
  m='367280'>because</span> <span m='368280'>by</span> <span
  m='368450'>induction</span> <span m='368980'>hypothesis,</span> <span
  m='370250'>I</span> <span m='370410'>know</span> <span m='370950'>that</span>
  <span m='371180'>the</span> <span m='371270'>size</span> <span
  m='371640'>of</span> <span m='371760'>s</span> <span m='371990'>plus</span>
  <span m='372310'>2</span> <span m='372730'>is</span> <span
  m='372870'>less</span> <span m='373110'>than</span> <span m='373220'>or</span>
  <span m='373300'>equal</span> <span m='373520'>to</span> <span
  m='373650'>2</span> <span m='373830'>to</span> <span m='373910'>the</span>
  <span m='374030'>depth</span> <span m='374370'>of</span> <span
  m='374480'>s</span> <span m='374720'>plus</span> <span m='375000'>1,</span>
  <span m='375770'>and</span> <span m='376110'>likewise</span> <span
  m='376620'>for</span> <span m='376760'>t.</span> </p><p><span
  m='378030'>Now</span> <span m='378270'>I</span> <span m='378370'>just</span>
  <span m='378600'>play</span> <span m='378830'>a</span> <span
  m='378880'>nice</span> <span m='379150'>trick</span> <span
  m='379460'>to</span> <span m='380320'>get</span> <span m='380510'>these</span>
  <span m='380720'>2</span> <span m='380880'>exponents</span> <span
  m='381420'>to</span> <span m='381520'>look</span> <span
  m='381700'>alike.</span> <span m='383750'>I</span> <span m='383960'>say</span>
  <span m='384290'>that</span> <span m='385750'>the</span> <span
  m='385940'>depth</span> <span m='386430'>of</span> <span m='386640'>s</span>
  <span m='387180'>is</span> <span m='387540'>less</span> <span
  m='387810'>than</span> <span m='387930'>or</span> <span
  m='388030'>equal</span> <span m='388310'>to</span> <span m='388450'>the</span>
  <span m='388610'>max</span> <span m='389040'>of</span> <span
  m='389130'>the</span> <span m='389250'>depth</span> <span m='389550'>of</span>
  <span m='389680'>s</span> <span m='389910'>and</span> <span
  m='390020'>the</span> <span m='390090'>depth</span> <span m='390390'>of</span>
  <span m='390520'>t,</span> <span m='390660'>and</span> <span
  m='390800'>likewise</span> <span m='391240'>for</span> <span
  m='391330'>the</span> <span m='391420'>depth</span> <span m='391770'>of</span>
  <span m='391880'>t.</span> <span m='392560'>So</span> <span
  m='392860'>in</span> <span m='393020'>both</span> <span m='393360'>of</span>
  <span m='393490'>those</span> <span m='394220'>terms</span> <span
  m='395110'>here,</span> <span m='395720'>I</span> <span m='395840'>can</span>
  <span m='396040'>replace</span> <span m='396680'>the</span> <span
  m='396860'>exponent</span> <span m='398100'>or</span> <span
  m='398380'>replace</span> <span m='398750'>the</span> <span
  m='398850'>depth</span> <span m='399130'>of</span> <span m='399260'>s</span>
  <span m='399600'>by</span> <span m='399840'>the</span> <span
  m='399980'>max</span> <span m='400910'>of</span> <span m='401230'>depth</span>
  <span m='401940'>s</span> <span m='402190'>and</span> <span
  m='402340'>t,</span> <span m='402780'>and</span> <span
  m='402960'>likewise</span> <span m='403480'>here.</span> </p><p><span
  m='404160'>Now</span> <span m='404390'>I've</span> <span m='404610'>got</span>
  <span m='405090'>the</span> <span m='405220'>same</span> <span
  m='405560'>term</span> <span m='405900'>twice,</span> <span
  m='406930'>so</span> <span m='407800'>I</span> <span m='407940'>can</span>
  <span m='409290'>say</span> <span m='409590'>that</span> <span
  m='409750'>it's</span> <span m='409920'>simply</span> <span
  m='410270'>twice</span> <span m='411350'>the</span> <span
  m='411950'>max</span> <span m='412680'>depth.</span> <span
  m='413580'>And</span> <span m='413770'>of</span> <span
  m='413860'>course,</span> <span m='414870'>that</span> <span
  m='416150'>is</span> <span m='416440'>equal</span> <span m='416840'>to,</span>
  <span m='417560'>by</span> <span m='417580'>definition</span> <span
  m='418210'>of</span> <span m='418370'>the</span> <span m='418470'>depth</span>
  <span m='418800'>of</span> <span m='418940'>r,</span> <span
  m='419350'>twice</span> <span m='419610'>2</span> <span m='419870'>to</span>
  <span m='420130'>the</span> <span m='420230'>depth</span> <span
  m='420580'>of</span> <span m='420730'>r,</span> <span m='421090'>which</span>
  <span m='421230'>is</span> <span m='421370'>of</span> <span
  m='421440'>course</span> <span m='421810'>2</span> <span m='422175'>to</span>
  <span m='422540'>the</span> <span m='422680'>depth</span> <span
  m='422980'>of</span> <span m='423070'>r</span> <span m='423290'>plus</span>
  <span m='423610'>1.</span> <span m='424180'>And</span> <span
  m='424490'>I</span> <span m='424550'>have</span> <span m='425000'>by</span>
  <span m='426330'>more</span> <span m='426510'>or</span> <span
  m='426635'>less</span> <span m='426760'>automatically</span> <span
  m='427570'>plugging</span> <span m='428070'>into</span> <span
  m='428300'>the</span> <span m='428420'>definitions</span> <span
  m='430600'>and</span> <span m='430980'>a</span> <span
  m='431080'>structural</span> <span m='431530'>induction,</span> <span
  m='432000'>I've</span> <span m='432210'>proved</span> <span
  m='432630'>that</span> <span m='432800'>this</span> <span
  m='433000'>inequality</span> <span m='433640'>holds</span> <span
  m='434460'>for</span> <span m='435100'>the</span> <span
  m='435270'>recursively</span> <span m='435940'>defined</span> <span
  m='437120'>depth</span> <span m='437910'>function,</span> <span
  m='440190'>and</span> <span m='440370'>we're</span> <span
  m='440480'>done.</span> </p><p><span m='442070'>Let's</span> <span
  m='442250'>look</span> <span m='442420'>at</span> <span m='442500'>one</span>
  <span m='442700'>more</span> <span m='442900'>familiar</span> <span
  m='443380'>example.</span> <span m='444310'>I</span> <span
  m='444660'>want</span> <span m='444870'>to</span> <span m='445020'>give</span>
  <span m='445180'>[? the ?]</span> <span m='445240'>recursive</span> <span
  m='445700'>definition</span> <span m='446360'>of</span> <span
  m='446580'>the</span> <span m='446680'>positive</span> <span
  m='447250'>powers</span> <span m='447740'>of</span> <span m='447890'>2.</span>
  <span m='449350'>So</span> <span m='450890'>the</span> <span
  m='450990'>base</span> <span m='451230'>case</span> <span m='451500'>is</span>
  <span m='451650'>the</span> <span m='451770'>2</span> <span
  m='452010'>is</span> <span m='452120'>a</span> <span
  m='452190'>positive</span> <span m='452640'>power</span> <span
  m='452990'>of</span> <span m='453100'>2,</span> <span m='454010'>and</span>
  <span m='454460'>the</span> <span m='454630'>constructor</span> <span
  m='455630'>is</span> <span m='456120'>just</span> <span m='456510'>one</span>
  <span m='456840'>constructor</span> <span m='457330'>I'm</span> <span
  m='457440'>going</span> <span m='457570'>to</span> <span
  m='457620'>use--</span> <span m='457970'>that</span> <span
  m='458090'>if</span> <span m='458210'>x</span> <span m='458500'>and</span>
  <span m='458600'>y</span> <span m='458850'>are</span> <span
  m='458980'>positive</span> <span m='459470'>powers</span> <span
  m='459830'>of</span> <span m='459950'>2,</span> <span m='460510'>then</span>
  <span m='460710'>their</span> <span m='460910'>product</span> <span
  m='461720'>is</span> <span m='461890'>a</span> <span
  m='461950'>positive</span> <span m='462430'>power</span> <span
  m='462800'>of</span> <span m='462920'>2.</span> <span m='463950'>So</span>
  <span m='464180'>let's</span> <span m='464410'>look</span> <span
  m='464550'>at</span> <span m='464630'>some</span> <span
  m='464810'>examples.</span> </p><p><span m='466140'>I</span> <span
  m='466260'>can</span> <span m='466420'>start</span> <span
  m='466630'>with</span> <span m='466760'>2</span> <span m='467130'>and</span>
  <span m='467250'>then</span> <span m='467430'>the</span> <span
  m='467580'>only</span> <span m='467850'>thing</span> <span m='468050'>I</span>
  <span m='468110'>can</span> <span m='468450'>do</span> <span
  m='468690'>as</span> <span m='468800'>a</span> <span
  m='468870'>constructor</span> <span m='469200'>is</span> <span
  m='469530'>multiply</span> <span m='470010'>2</span> <span
  m='470200'>by</span> <span m='470360'>2</span> <span m='470530'>to</span>
  <span m='470650'>get</span> <span m='470830'>4.</span> <span
  m='471500'>Once</span> <span m='471760'>I</span> <span m='471790'>got</span>
  <span m='471990'>4,</span> <span m='472470'>I</span> <span
  m='472530'>can</span> <span m='472720'>do</span> <span m='472880'>4</span>
  <span m='473160'>times</span> <span m='473460'>2</span> <span
  m='474175'>to</span> <span m='474450'>get</span> <span m='474700'>8,</span>
  <span m='475115'>and</span> <span m='475322'>I</span> <span
  m='475530'>can</span> <span m='475680'>do</span> <span m='475780'>4</span>
  <span m='476020'>times</span> <span m='476270'>4</span> <span
  m='476660'>to</span> <span m='476720'>get</span> <span m='476910'>16,</span>
  <span m='477480'>and</span> <span m='477590'>I</span> <span
  m='477650'>can</span> <span m='477810'>do</span> <span m='478040'>4</span>
  <span m='478380'>times</span> <span m='478760'>8</span> <span
  m='479350'>to</span> <span m='479450'>get</span> <span m='479650'>32,</span>
  <span m='481400'>and</span> <span m='481980'>all</span> <span
  m='482170'>of</span> <span m='482290'>these</span> <span m='482690'>are</span>
  <span m='483050'>positive</span> <span m='483620'>powers</span> <span
  m='484070'>of</span> <span m='484220'>2.</span> </p><p><span
  m='487600'>Now</span> <span m='487750'>let's</span> <span
  m='488040'>define</span> <span m='489160'>the</span> <span
  m='489360'>log</span> <span m='489840'>to</span> <span m='489960'>the</span>
  <span m='490080'>base</span> <span m='490380'>2</span> <span
  m='491210'>of</span> <span m='491400'>a</span> <span
  m='491470'>positive</span> <span m='491990'>power</span> <span
  m='492540'>of</span> <span m='492715'>2</span> <span
  m='492890'>recursively.</span> <span m='494150'>Well,</span> <span
  m='494580'>the</span> <span m='494720'>log</span> <span m='495070'>to</span>
  <span m='495180'>the</span> <span m='495280'>base</span> <span
  m='495580'>2</span> <span m='495780'>of</span> <span m='495920'>2</span> <span
  m='496530'>is</span> <span m='496960'>1.</span> <span m='497720'>I'd</span>
  <span m='497980'>have</span> <span m='498150'>to</span> <span
  m='498290'>define</span> <span m='498950'>log</span> <span
  m='499220'>to</span> <span m='499320'>the</span> <span m='499420'>base</span>
  <span m='499700'>2</span> <span m='499850'>in</span> <span
  m='499930'>the</span> <span m='500010'>base</span> <span
  m='500280'>case,</span> <span m='501200'>and</span> <span
  m='501300'>that's</span> <span m='501420'>easy</span> <span
  m='501680'>to</span> <span m='501760'>do.</span> </p><p><span
  m='502770'>What</span> <span m='502990'>about</span> <span
  m='503290'>in</span> <span m='503400'>the</span> <span
  m='503510'>constructor</span> <span m='504140'>case?</span> <span
  m='504730'>Well,</span> <span m='505260'>the</span> <span
  m='505360'>log</span> <span m='505680'>to</span> <span m='505800'>the</span>
  <span m='505900'>base</span> <span m='506210'>2</span> <span
  m='506400'>of</span> <span m='506510'>x,</span> <span m='506610'>y</span>
  <span m='507530'>is</span> <span m='507730'>equal</span> <span
  m='508220'>to</span> <span m='508370'>the</span> <span m='508480'>log</span>
  <span m='508760'>to</span> <span m='508870'>the</span> <span
  m='508960'>base</span> <span m='509240'>2</span> <span m='509400'>of</span>
  <span m='509520'>x</span> <span m='510430'>plus</span> <span
  m='510780'>the</span> <span m='510870'>log</span> <span m='511160'>to</span>
  <span m='511270'>the</span> <span m='511370'>base</span> <span
  m='511660'>2</span> <span m='511970'>of</span> <span m='512070'>y</span> <span
  m='513030'>for</span> <span m='513289'>all</span> <span m='513510'>the</span>
  <span m='513659'>x,</span> <span m='513959'>y's</span> <span
  m='514260'>that</span> <span m='514350'>are</span> <span
  m='514440'>positive</span> <span m='514890'>powers</span> <span
  m='515250'>of</span> <span m='515370'>2,</span> <span m='516260'>and</span>
  <span m='516600'>so</span> <span m='516890'>I</span> <span
  m='517030'>have</span> <span m='517240'>defined</span> <span
  m='518260'>a</span> <span m='518490'>log</span> <span m='518960'>of</span>
  <span m='519130'>the</span> <span m='519230'>constructor</span> <span
  m='519840'>x,</span> <span m='520230'>y</span> <span m='521490'>in</span>
  <span m='521679'>terms</span> <span m='522140'>of</span> <span
  m='522770'>the</span> <span m='522929'>function</span> <span
  m='523390'>log</span> <span m='523760'>of</span> <span m='523909'>x</span>
  <span m='524410'>and</span> <span m='524610'>the</span> <span
  m='524680'>function</span> <span m='525080'>log</span> <span
  m='525410'>applied</span> <span m='525710'>to</span> <span
  m='525890'>y.</span> <span m='526320'>It</span> <span
  m='526480'>conforms</span> <span m='527150'>to</span> <span
  m='528080'>the</span> <span m='528440'>standard</span> <span
  m='529110'>definition</span> <span m='529950'>of</span> <span
  m='530150'>a</span> <span m='530930'>recursive</span> <span
  m='531400'>function</span> <span m='532650'>on</span> <span
  m='532920'>a</span> <span m='533000'>recursively</span> <span
  m='533520'>defined</span> <span m='533870'>data</span> <span
  m='534150'>type,</span> <span m='535010'>[INAUDIBLE]</span> <span
  m='535130'>positive</span> <span m='535680'>powers</span> <span
  m='536070'>of</span> <span m='536200'>2.</span> </p><p><span
  m='536840'>Now,</span> <span m='536950'>this</span> <span
  m='537130'>looks</span> <span m='537390'>OK.</span> <span
  m='538185'>Well,</span> <span m='538540'>let's</span> <span
  m='538740'>just</span> <span m='538920'>check</span> <span
  m='539150'>it</span> <span m='539230'>out.</span> <span m='539920'>So</span>
  <span m='540700'>log</span> <span m='540980'>of</span> <span
  m='541090'>4</span> <span m='541830'>is</span> <span m='542330'>log</span>
  <span m='542560'>of</span> <span m='542650'>2</span> <span
  m='542810'>times</span> <span m='543150'>2,</span> <span
  m='544060'>which</span> <span m='544360'>is</span> <span m='546720'>by</span>
  <span m='546960'>the</span> <span m='547370'>definition</span> <span
  m='548010'>of</span> <span m='549840'>the</span> <span m='550630'>log</span>
  <span m='550970'>of</span> <span m='551070'>2</span> <span
  m='551270'>plus</span> <span m='551560'>the</span> <span m='551640'>log</span>
  <span m='551890'>of</span> <span m='552000'>2,</span> <span
  m='552190'>which</span> <span m='552380'>is</span> <span m='552460'>1</span>
  <span m='552710'>plus</span> <span m='553010'>1,</span> <span
  m='554010'>which</span> <span m='554160'>is</span> <span
  m='554230'>equal</span> <span m='554460'>to</span> <span m='554590'>2,</span>
  <span m='554930'>and</span> <span m='555070'>guess</span> <span
  m='555250'>what?</span> <span m='555460'>That's</span> <span
  m='555670'>correct.</span> </p><p><span m='556640'>The</span> <span
  m='556730'>log</span> <span m='557040'>of</span> <span m='557190'>8--</span>
  <span m='557660'>well,</span> <span m='558020'>8</span> <span
  m='558180'>is</span> <span m='558340'>2</span> <span m='558540'>times</span>
  <span m='558890'>4,</span> <span m='559570'>so</span> <span
  m='560650'>by</span> <span m='561580'>the</span> <span
  m='561910'>recursive</span> <span m='562400'>definition,</span> <span
  m='563020'>that's</span> <span m='563250'>the</span> <span
  m='563330'>log</span> <span m='563620'>of</span> <span m='563730'>2</span>
  <span m='563990'>plus</span> <span m='564310'>the</span> <span
  m='564390'>log</span> <span m='564650'>of</span> <span m='564970'>4,</span>
  <span m='566080'>which</span> <span m='566780'>we</span> <span
  m='566930'>previously</span> <span m='567490'>figured</span> <span
  m='567790'>out</span> <span m='568050'>log</span> <span m='568320'>of</span>
  <span m='568410'>4</span> <span m='568590'>was</span> <span
  m='568780'>2,</span> <span m='569030'>so</span> <span m='569230'>we</span>
  <span m='569340'>get</span> <span m='569570'>3</span> <span
  m='570070'>and</span> <span m='570300'>the</span> <span
  m='570440'>answer</span> <span m='570680'>comes</span> <span
  m='570970'>out</span> <span m='571120'>right.</span> <span
  m='571670'>Now,</span> <span m='571830'>remember,</span> <span
  m='573080'>you're</span> <span m='573230'>not</span> <span
  m='573430'>supposed</span> <span m='573810'>to</span> <span
  m='573860'>in</span> <span m='574070'>this</span> <span
  m='574250'>reasoning</span> <span m='575110'>use</span> <span
  m='575800'>the</span> <span m='575960'>properties</span> <span
  m='576460'>that</span> <span m='576600'>you</span> <span
  m='576690'>know</span> <span m='576930'>that</span> <span
  m='577090'>log</span> <span m='577370'>to</span> <span m='577470'>the</span>
  <span m='577570'>base</span> <span m='577860'>2</span> <span
  m='578040'>has</span> <span m='578870'>because</span> <span
  m='579250'>we're</span> <span m='579480'>defining</span> <span
  m='580590'>this</span> <span m='580990'>function</span> <span
  m='582030'>which</span> <span m='582120'>we're</span> <span
  m='582310'>calling</span> <span m='582710'>log</span> <span
  m='582950'>to</span> <span m='583050'>the</span> <span m='583160'>base</span>
  <span m='583470'>2</span> <span m='583790'>and</span> <span
  m='584020'>implicitly</span> <span m='584620'>claiming</span> <span
  m='585010'>that</span> <span m='585160'>it's</span> <span
  m='585370'>right.</span> </p><p><span m='586050'>But</span> <span
  m='587210'>in</span> <span m='587360'>order</span> <span m='587570'>to</span>
  <span m='587890'>prove</span> <span m='588200'>that</span> <span
  m='588325'>it's</span> <span m='588450'>right,</span> <span
  m='588650'>we</span> <span m='588750'>need</span> <span m='588970'>to</span>
  <span m='589060'>be</span> <span m='589190'>using</span> <span
  m='589590'>just</span> <span m='589900'>see</span> <span m='590460'>the</span>
  <span m='590800'>structural</span> <span m='591380'>definition</span> <span
  m='592380'>of</span> <span m='592610'>log</span> <span m='592870'>to</span>
  <span m='592980'>the</span> <span m='593080'>base</span> <span
  m='593350'>2</span> <span m='593530'>to</span> <span m='593630'>prove</span>
  <span m='593920'>its</span> <span m='594070'>properties.</span> <span
  m='594950'>So</span> <span m='595120'>that</span> <span m='595350'>was</span>
  <span m='595480'>what</span> <span m='595660'>I</span> <span
  m='595690'>was</span> <span m='595880'>illustrating</span> <span
  m='596630'>with</span> <span m='596870'>this</span> <span
  m='597070'>reasoning,</span> <span m='598030'>that</span> <span
  m='598980'>just</span> <span m='599300'>plugging</span> <span
  m='599690'>in</span> <span m='600140'>the</span> <span
  m='601240'>constructor</span> <span m='601780'>case</span> <span
  m='602170'>of</span> <span m='602380'>log</span> <span m='602710'>of</span>
  <span m='602820'>x,</span> <span m='603065'>y</span> <span
  m='603310'>is</span> <span m='603450'>log</span> <span m='603660'>of</span>
  <span m='603750'>x</span> <span m='603930'>plus</span> <span
  m='604160'>log</span> <span m='604370'>of</span> <span m='604450'>y,</span>
  <span m='604700'>I</span> <span m='604760'>can</span> <span
  m='604980'>get</span> <span m='605130'>these</span> <span
  m='605370'>numbers</span> <span m='605820'>out.</span> <span
  m='607300'>So</span> <span m='607440'>the</span> <span m='607540'>point</span>
  <span m='607860'>of</span> <span m='607980'>this</span> <span
  m='608240'>is</span> <span m='608420'>just</span> <span m='608700'>to</span>
  <span m='608790'>make</span> <span m='609190'>the</span> <span
  m='609290'>following</span> <span m='609820'>definition</span> <span
  m='610400'>look</span> <span m='610670'>reasonable.</span> </p><p><span
  m='611200'>I'm</span> <span m='611310'>going</span> <span m='611420'>to</span>
  <span m='611500'>define</span> <span m='611910'>a</span> <span
  m='611940'>new</span> <span m='612190'>function</span> <span
  m='612540'>which</span> <span m='612710'>I'm</span> <span
  m='612760'>going</span> <span m='612870'>to</span> <span
  m='612930'>call</span> <span m='613080'>the</span> <span m='613200'>log</span>
  <span m='613405'>e</span> <span m='613610'>function,</span> <span
  m='614050'>and</span> <span m='614470'>it's</span> <span
  m='614600'>another</span> <span m='614970'>function</span> <span
  m='615430'>on</span> <span m='615520'>the</span> <span
  m='615620'>positive</span> <span m='616060'>powers</span> <span
  m='616440'>of</span> <span m='616560'>2,</span> <span m='617340'>and</span>
  <span m='617520'>here's</span> <span m='617800'>the</span> <span
  m='617900'>definition</span> <span m='618460'>of</span> <span
  m='618550'>the</span> <span m='618610'>log</span> <span m='618840'>e</span>
  <span m='619030'>function.</span> <span m='620060'>The</span> <span
  m='620160'>log</span> <span m='620395'>e</span> <span m='620630'>of</span>
  <span m='620740'>2</span> <span m='621050'>is</span> <span
  m='621190'>going</span> <span m='621330'>to</span> <span m='621380'>be</span>
  <span m='621540'>1,</span> <span m='621940'>just</span> <span
  m='622220'>as</span> <span m='622390'>the</span> <span m='622490'>log</span>
  <span m='622950'>is,</span> <span m='623980'>but</span> <span
  m='624220'>the</span> <span m='624320'>log</span> <span m='624700'>e</span>
  <span m='624860'>of</span> <span m='624950'>x,</span> <span
  m='625170'>y</span> <span m='625830'>is</span> <span m='626060'>going</span>
  <span m='626230'>to</span> <span m='626320'>be</span> <span
  m='626720'>x</span> <span m='627180'>plus</span> <span m='627520'>the</span>
  <span m='627610'>log</span> <span m='628060'>e</span> <span
  m='628105'>of</span> <span m='628150'>y</span> <span m='629130'>for</span>
  <span m='629450'>all</span> <span m='630220'>x,</span> <span
  m='630397'>y</span> <span m='630930'>and</span> <span
  m='631530'>positive</span> <span m='631950'>powers</span> <span
  m='632310'>of</span> <span m='632430'>2.</span> <span m='633110'>Well,</span>
  <span m='633270'>let's</span> <span m='633470'>try</span> <span
  m='633660'>that</span> <span m='633920'>definition.</span> </p><p><span
  m='635920'>Log</span> <span m='636155'>e</span> <span m='636390'>of</span>
  <span m='636500'>4</span> <span m='637840'>is</span> <span
  m='638190'>log</span> <span m='638490'>e</span> <span m='638550'>of</span>
  <span m='638610'>2</span> <span m='638860'>times</span> <span
  m='639140'>2,</span> <span m='639920'>which</span> <span
  m='640490'>according</span> <span m='640960'>to</span> <span
  m='641090'>the</span> <span m='641740'>recursive</span> <span
  m='642320'>definition</span> <span m='642970'>is</span> <span
  m='644750'>2</span> <span m='645550'>plus</span> <span m='645960'>the</span>
  <span m='646060'>log</span> <span m='646530'>e</span> <span
  m='646590'>of</span> <span m='646650'>2,</span> <span m='647270'>which</span>
  <span m='647580'>is</span> <span m='647680'>1--</span> <span
  m='648230'>namely,</span> <span m='648590'>it's</span> <span
  m='648880'>3.</span> </p><p><span m='651200'>Log</span> <span
  m='651415'>e</span> <span m='651630'>of</span> <span m='651810'>8--</span>
  <span m='652810'>well,</span> <span m='653290'>8</span> <span
  m='653560'>is</span> <span m='653820'>2</span> <span m='654040'>times</span>
  <span m='654400'>4,</span> <span m='655310'>so</span> <span
  m='655770'>the</span> <span m='655840'>log</span> <span m='656080'>e</span>
  <span m='656320'>of</span> <span m='656480'>8</span> <span
  m='656940'>is</span> <span m='657410'>2</span> <span m='657730'>plus</span>
  <span m='658080'>the</span> <span m='658160'>log</span> <span
  m='658430'>e</span> <span m='658561'>of</span> <span m='658693'>4.</span>
  <span m='659420'>We</span> <span m='659570'>just</span> <span
  m='659760'>figured</span> <span m='660050'>out</span> <span
  m='660190'>that</span> <span m='660260'>the</span> <span m='660390'>log</span>
  <span m='660660'>e of</span> <span m='660800'>4</span> <span
  m='661030'>was</span> <span m='661240'>3,</span> <span m='661620'>so</span>
  <span m='661870'>it's</span> <span m='662020'>2</span> <span
  m='662150'>plus</span> <span m='662400'>3</span> <span m='662570'>is</span>
  <span m='662710'>5.</span> <span m='663480'>Log</span> <span
  m='663705'>e</span> <span m='663930'>of</span> <span m='664070'>8</span> <span
  m='664620'>is</span> <span m='664780'>5.</span> </p><p><span
  m='666620'>And</span> <span m='667000'>finally,</span> <span
  m='667880'>log</span> <span m='668060'>e  of</span> <span
  m='668240'>16--</span> <span m='669730'>well,</span> <span
  m='670100'>16</span> <span m='670490'>is</span> <span m='670600'>8</span>
  <span m='670800'>times</span> <span m='671070'>2,</span> <span
  m='671830'>so</span> <span m='672530'>the</span> <span m='672690'>log</span>
  <span m='672900'>e</span> <span m='673130'>of</span> <span m='673230'>8</span>
  <span m='673450'>times</span> <span m='673710'>2</span> <span
  m='673920'>is</span> <span m='674060'>8</span> <span m='674270'>plus</span>
  <span m='674530'>the</span> <span m='674610'>log</span> <span
  m='675000'>e</span> <span m='675045'>of</span> <span m='675090'>2,</span>
  <span m='675250'>which</span> <span m='675430'>we</span> <span
  m='675540'>know</span> <span m='675740'>is</span> <span m='675850'>1.</span>
  <span m='676230'>It's</span> <span m='676450'>9.</span> <span
  m='679900'>So</span> <span m='680180'>we've</span> <span
  m='680310'>just</span> <span m='680500'>figured</span> <span
  m='680750'>out</span> <span m='680930'>the</span> <span m='681030'>log</span>
  <span m='681340'>e</span> <span m='681385'>of</span> <span
  m='681430'>16</span> <span m='681890'>is</span> <span m='682030'>9,</span>
  <span m='683070'>but</span> <span m='683380'>now</span> <span
  m='683600'>comes</span> <span m='683940'>the</span> <span
  m='684180'>problem.</span> </p><p><span m='686600'>16,</span> <span
  m='687110'>of</span> <span m='687180'>course,</span> <span
  m='687510'>is</span> <span m='687650'>not</span> <span m='687800'>only</span>
  <span m='688100'>8</span> <span m='688300'>times</span> <span
  m='688550'>2,</span> <span m='688780'>but</span> <span m='688920'>it's</span>
  <span m='689040'>2</span> <span m='689180'>times</span> <span
  m='689460'>8,</span> <span m='690960'>and</span> <span m='691200'>so</span>
  <span m='691380'>the</span> <span m='691520'>log e</span> <span
  m='691960'>of</span> <span m='692050'>2</span> <span m='692230'>times</span>
  <span m='692560'>8</span> <span m='693080'>is</span> <span m='693440'>2</span>
  <span m='693940'>plus</span> <span m='694220'>the</span> <span
  m='694310'>log</span> <span m='694437'>e</span> <span m='694820'>of</span>
  <span m='694920'>8.</span> <span m='695410'>Log</span> <span
  m='695545'>e</span> <span m='695680'>of</span> <span m='695835'>8</span> <span
  m='695990'>we</span> <span m='696110'>previously</span> <span
  m='696630'>figured</span> <span m='696900'>out</span> <span
  m='697080'>was</span> <span m='697210'>5,</span> <span m='698040'>so</span>
  <span m='698370'>the</span> <span m='698425'>log</span> <span
  m='698480'>e</span> <span m='698585'>of</span> <span m='698690'>16</span>
  <span m='699150'>is</span> <span m='699285'>7,</span> <span
  m='700630'>and</span> <span m='700840'>now</span> <span m='701010'>I</span>
  <span m='701110'>have</span> <span m='701990'>an</span> <span
  m='702140'>inconsistency.</span> <span m='703220'>I</span> <span
  m='703380'>have</span> <span m='703620'>used</span> <span
  m='703970'>this</span> <span m='704700'>recursive</span> <span
  m='705240'>definition</span> <span m='705800'>of</span> <span
  m='705900'>log</span> <span m='706180'>e</span> <span m='706760'>to</span>
  <span m='706930'>conclude</span> <span m='707490'>that</span> <span
  m='707650'>the</span> <span m='707730'>log e</span> <span m='708130'>of</span>
  <span m='708200'>16</span> <span m='708780'>is</span> <span
  m='708900'>both</span> <span m='709190'>9</span> <span m='709530'>and</span>
  <span m='709680'>7,</span> <span m='710620'>and</span> <span
  m='711150'>we</span> <span m='711280'>got</span> <span m='711460'>a</span>
  <span m='711500'>problem.</span> <span m='712190'>It's</span> <span
  m='712370'>not</span> <span m='712600'>a</span> <span m='712650'>good</span>
  <span m='712890'>definition</span> <span m='713370'>of</span> <span
  m='713470'>a</span> <span m='713520'>function.</span> </p><p><span
  m='714690'>The</span> <span m='714810'>problem</span> <span
  m='715230'>is</span> <span m='715390'>a</span> <span m='715450'>simple</span>
  <span m='715840'>one</span> <span m='716050'>called</span> <span
  m='716300'>ambiguity.</span> <span m='718090'>There's</span> <span
  m='718380'>more</span> <span m='718630'>than</span> <span
  m='718810'>one</span> <span m='719110'>way</span> <span m='719330'>to</span>
  <span m='719450'>construct</span> <span m='719900'>the</span> <span
  m='720020'>elements</span> <span m='720880'>of</span> <span
  m='721170'>PP2,</span> <span m='721880'>of</span> <span
  m='722000'>positive</span> <span m='722460'>powers</span> <span
  m='722820'>of</span> <span m='722940'>2,</span> <span m='723110'>from</span>
  <span m='723290'>the</span> <span m='723390'>constructor</span> <span
  m='723960'>x</span> <span m='724170'>times</span> <span m='724470'>y.</span>
  <span m='727050'>16</span> <span m='727920'>was</span> <span
  m='728480'>8</span> <span m='728690'>times</span> <span m='728940'>2,</span>
  <span m='729630'>but</span> <span m='729780'>it's</span> <span
  m='729960'>also</span> <span m='730540'>2</span> <span m='730700'>times</span>
  <span m='730990'>8,</span> <span m='731180'>and</span> <span
  m='731270'>of</span> <span m='731330'>course,</span> <span
  m='731560'>it's</span> <span m='731700'>also</span> <span m='731970'>4</span>
  <span m='732260'>times</span> <span m='732550'>4.</span> <span
  m='733590'>And</span> <span m='735520'>depending</span> <span
  m='736150'>on</span> <span m='736360'>which</span> <span
  m='736780'>constructor</span> <span m='737460'>you</span> <span
  m='737700'>use</span> <span m='738280'>to</span> <span
  m='738420'>construct</span> <span m='738900'>16,</span> <span
  m='739590'>you're</span> <span m='739780'>going</span> <span
  m='739960'>to</span> <span m='740010'>get</span> <span m='740330'>out</span>
  <span m='741090'>different</span> <span m='742070'>values</span> <span
  m='742690'>assigned</span> <span m='743640'>to</span> <span
  m='743970'>the</span> <span m='744050'>log</span> <span m='744260'>e</span>
  <span m='744470'>function.</span> </p><p><span m='747690'>So</span> <span
  m='748240'>when</span> <span m='748530'>you</span> <span
  m='748640'>have</span> <span m='749320'>an</span> <span
  m='749500'>ambiguously</span> <span m='750700'>defined</span> <span
  m='751250'>recursive</span> <span m='752000'>data</span> <span
  m='752240'>structure--</span> <span m='753280'>for</span> <span
  m='753530'>example</span> <span m='753970'>F18</span> <span
  m='754620'>is</span> <span m='754890'>very</span> <span
  m='755200'>ambiguous--</span> <span m='756810'>then</span> <span
  m='760250'>defining</span> <span m='760620'>recursive</span> <span
  m='761100'>functions</span> <span m='761520'>on</span> <span
  m='761620'>that</span> <span m='761810'>definition</span> <span
  m='762670'>is</span> <span m='763100'>not</span> <span m='763280'>going</span>
  <span m='763390'>to</span> <span m='763460'>work</span> <span
  m='763730'>well,</span> <span m='764290'>and</span> <span
  m='764610'>you</span> <span m='764710'>have</span> <span m='764930'>to</span>
  <span m='765060'>very</span> <span m='765360'>carefully</span> <span
  m='765900'>prove</span> <span m='767500'>that</span> <span m='767660'>a</span>
  <span m='767740'>recursive</span> <span m='768610'>definition</span> <span
  m='769150'>actually</span> <span m='769550'>works</span> <span
  m='769900'>in</span> <span m='770020'>a</span> <span m='770100'>single</span>
  <span m='770470'>value.</span> <span m='770950'>So</span> <span
  m='771120'>for</span> <span m='771230'>example,</span> <span
  m='771610'>log</span> <span m='771840'>to</span> <span m='771940'>the</span>
  <span m='772040'>base</span> <span m='772320'>2</span> <span
  m='772490'>does</span> <span m='772810'>work,</span> <span
  m='774070'>but</span> <span m='774270'>that</span> <span
  m='774460'>would</span> <span m='774600'>require</span> <span
  m='775110'>proof</span> <span m='775370'>it</span> <span
  m='775480'>doesn't</span> <span m='775800'>follow</span> <span
  m='776120'>on</span> <span m='776280'>general</span> <span
  m='776690'>principles</span> <span m='777680'>[INAUDIBLE]</span> <span
  m='778040'>you</span> <span m='778530'>define</span> <span m='778980'>a</span>
  <span m='779070'>recursive</span> <span m='779580'>function</span> <span
  m='780620'>on</span> <span m='781490'>an</span> <span
  m='781840'>ambiguous</span> <span m='782730'>data</span> <span
  m='783010'>type.</span> </p><p><span m='783890'>On the</span> <span
  m='784210'>other hand,</span> <span m='784470'>the</span> <span
  m='784590'>reason</span> <span m='784920'>why</span> <span
  m='785130'>we</span> <span m='785330'>chose</span> <span
  m='785830'>that</span> <span m='787490'>somewhat</span> <span
  m='788190'>unexpected</span> <span m='788890'>single</span> <span
  m='789330'>constructor</span> <span m='790160'>for</span> <span
  m='790860'>the</span> <span m='791000'>balanced</span> <span
  m='791480'>strings</span> <span m='791970'>M,</span> <span
  m='793050'>the</span> <span m='793310'>balanced</span> <span
  m='794180'>bracket</span> <span m='794690'>strings,</span> <span
  m='795630'>was</span> <span m='796140'>that</span> <span m='796370'>it</span>
  <span m='796550'>turns</span> <span m='796830'>out</span> <span
  m='797020'>to</span> <span m='797090'>be</span> <span
  m='797280'>unambiguous.</span> <span m='798190'>And</span> <span
  m='798410'>so</span> <span m='798620'>that</span> <span
  m='798900'>definition</span> <span m='799540'>of</span> <span
  m='799730'>depth</span> <span m='800750'>is</span> <span m='800990'>a</span>
  <span m='801060'>good</span> <span m='801290'>definition,</span> <span
  m='801980'>as</span> <span m='802300'>is</span> <span m='802520'>any</span>
  <span m='803090'>definition</span> <span m='804190'>based</span> <span
  m='804750'>on</span> <span m='805620'>the</span> <span
  m='806620'>recursive</span> <span m='807120'>definition</span> <span
  m='807710'>of</span> <span m='807800'>the</span> <span m='807890'>set</span>
  <span m='808200'>M.</span> </p><p><span m='809140'>So</span> <span
  m='809350'>the</span> <span m='809470'>general</span> <span
  m='809810'>problem</span> <span m='810050'>we</span> <span
  m='810150'>have</span> <span m='810290'>to</span> <span
  m='810410'>watch</span> <span m='810680'>out</span> <span
  m='810860'>for--</span> </p><p><span m='811540'>[AUDIO OUT]</span>
  </p><p></p><p><span m='818590'>Constructor</span> <span
  m='819390'>created</span> <span m='820040'>the</span> <span
  m='820130'>datum</span> <span m='820500'>e.</span> <span m='821530'>If</span>
  <span m='821860'>there's</span> <span m='822070'>more</span> <span
  m='822300'>than</span> <span m='822460'>one</span> <span m='822750'>way</span>
  <span m='822920'>to</span> <span m='823070'>construct</span> <span
  m='823620'>e,</span> <span m='824330'>then</span> <span
  m='824930'>you're</span> <span m='825640'>not</span> <span
  m='825960'>quite</span> <span m='826240'>sure</span> <span
  m='826890'>which</span> <span m='827850'>case</span> <span
  m='829070'>to</span> <span m='829150'>use</span> <span m='829680'>to</span>
  <span m='829800'>define</span> <span m='830160'>the</span> <span
  m='830240'>function</span> <span m='830650'>f,</span> <span
  m='831420'>and</span> <span m='832630'>that's</span> <span
  m='833130'>why</span> <span m='834010'>this</span> <span
  m='834450'>issue</span> <span m='834830'>of</span> <span
  m='835060'>whether</span> <span m='835350'>or</span> <span
  m='835410'>not</span> <span m='835680'>the</span> <span m='836160'>data</span>
  <span m='836360'>structure's</span> <span m='836770'>ambiguous</span> <span
  m='837430'>is</span> <span m='837660'>critical</span> <span
  m='838620'>to</span> <span m='838930'>getting</span> <span
  m='839280'>good</span> <span m='839510'>definitions</span> <span
  m='840270'>of</span> <span m='840590'>recursive</span> <span
  m='841090'>functions.</span> </p>
uid: cacb8f2296349b9ed47b38390564e6db
type: courses
layout: video
---
