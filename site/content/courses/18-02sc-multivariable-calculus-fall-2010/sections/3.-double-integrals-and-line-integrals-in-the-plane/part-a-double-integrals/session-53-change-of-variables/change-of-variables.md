---
title: Change of Variables
uid: 4d0c19be3665ac689c77336ae614fb1c
parent_uid: efa093dc347fd4af527f1b857bb14f2c
technical_location: >-
  https://ocw.mit.edu/courses/mathematics/18-02sc-multivariable-calculus-fall-2010/3.-double-integrals-and-line-integrals-in-the-plane/part-a-double-integrals/session-53-change-of-variables/change-of-variables
short_url: change-of-variables
inline_embed_id: 38113867changeofvariables89504605
about_this_resource_text: ''
related_resources_text: ''
transcript: >-
  <p><span m='0'>CHRISTINE BREINER:</span> <span m='7050'>Welcome</span> <span
  m='7450'>back to</span> <span m='7660'>recitation.</span> <span m='8810'>In
  this</span> <span m='9100'>video,</span> <span m='9390'>I'd</span> <span
  m='9550'>like</span> <span m='9760'>us</span> <span m='9910'>to</span> <span
  m='10040'>work</span> <span m='10330'>on</span> <span m='10610'>the</span>
  <span m='10700'>following</span> <span m='11050'>problem:</span> <span
  m='12100'>So</span> <span m='12250'>given</span> <span m='12540'>the</span>
  <span m='12610'>region</span> <span m='12940'>R</span> <span
  m='13310'>shown</span> <span m='13630'>below,</span> <span
  m='14030'>which</span> <span m='14230'>I'll</span> <span
  m='14570'>mention</span> <span m='14980'>more</span> <span m='15210'>of</span>
  <span m='15300'>in</span> <span m='15380'>a</span> <span
  m='15430'>moment,</span> <span m='16190'>compute</span> <span
  m='16630'>the</span> <span m='16770'>integral</span> <span
  m='17190'>double</span> <span m='17440'>integral</span> <span
  m='17740'>over</span> <span m='17970'>R</span> <span m='18460'>of</span> <span
  m='18620'>the</span> <span m='18710'>quantity</span> <span m='19170'>4</span>
  <span m='19410'>x</span> <span m='19640'>squared</span> <span
  m='19910'>minus</span> <span m='20950'>y</span> <span m='21210'>squared</span>
  <span m='21990'>to</span> <span m='22130'>the</span> <span
  m='22230'>fourth</span> <span m='22900'>dx</span> <span m='23360'>dy,</span>
  <span m='24040'>and</span> <span m='24310'>I</span> <span
  m='24340'>want</span> <span m='24530'>you</span> <span m='24600'>to</span>
  <span m='24680'>do</span> <span m='24830'>it</span> <span m='24920'>by</span>
  <span m='25030'>changing</span> <span m='25440'>variables</span> <span
  m='26580'>to</span> <span m='26910'>u</span> <span m='27230'>is</span> <span
  m='27390'>equal</span> <span m='27690'>2x</span> <span m='28090'>minus</span>
  <span m='28500'>y</span> <span m='29160'>and</span> <span m='29480'>v</span>
  <span m='29710'>is</span> <span m='29870'>equal</span> <span
  m='29950'>to</span> <span m='30200'>2x</span> <span m='30600'>plus</span>
  <span m='30960'>y.</span> </p><p><span m='31930'>And</span> <span
  m='32620'>the</span> <span m='32770'>region,</span> <span
  m='33470'>defined</span> <span m='34060'>down</span> <span
  m='34320'>here,</span> <span m='35080'>is</span> <span m='36270'>just</span>
  <span m='36830'>these</span> <span m='37060'>three</span> <span
  m='37750'>line</span> <span m='38120'>segments</span> <span
  m='38720'>and</span> <span m='39230'>the</span> <span
  m='39350'>intersection</span> <span m='39950'>of</span> <span
  m='40630'>the</span> <span m='40750'>region</span> <span
  m='42640'>bounded</span> <span m='43040'>by</span> <span
  m='43180'>these</span> <span m='43450'>three line</span> <span
  m='43810'>segments.</span> <span m='44490'>So</span> <span
  m='44720'>one</span> <span m='44960'>of</span> <span m='45060'>them</span>
  <span m='45330'>is</span> <span m='45760'>a</span> <span
  m='45890'>portion</span> <span m='46390'>of</span> <span m='46480'>the</span>
  <span m='46570'>y-axis,</span> <span m='47240'>one</span> <span
  m='47480'>of</span> <span m='47590'>the</span> <span m='47790'>them</span>
  <span m='48040'>is</span> <span m='48180'>a</span> <span
  m='48250'>portion</span> <span m='48580'>of</span> <span m='48680'>the</span>
  <span m='48790'>line</span> <span m='49970'>defined</span> <span
  m='50330'>by</span> <span m='50470'>2x</span> <span m='50850'>minus</span>
  <span m='51190'>y</span> <span m='51530'>equals</span> <span
  m='51670'>0,</span> <span m='52300'>and</span> <span m='52530'>one</span>
  <span m='52660'>of</span> <span m='52750'>them</span> <span
  m='52910'>is</span> <span m='52990'>a</span> <span m='53050'>portion</span>
  <span m='53310'>of</span> <span m='53400'>the</span> <span
  m='53510'>line</span> <span m='53780'>defined</span> <span m='54120'>by</span>
  <span m='54260'>2x</span> <span m='54720'>plus</span> <span m='54940'>y</span>
  <span m='55120'>equals</span> <span m='55610'>2.</span> <span
  m='56690'>So</span> <span m='58520'>why</span> <span m='58720'>don't</span>
  <span m='58860'>you</span> <span m='59000'>do</span> <span
  m='59150'>this,</span> <span m='59770'>make</span> <span m='59980'>sure</span>
  <span m='60150'>you</span> <span m='60320'>use</span> <span
  m='60580'>this</span> <span m='60710'>change</span> <span m='61080'>of</span>
  <span m='61150'>variables,</span> <span m='62340'>and</span> <span
  m='62520'>then</span> <span m='62650'>I'll</span> <span m='62770'>come</span>
  <span m='63000'>back,</span> <span m='63810'>and</span> <span
  m='64020'>I'll</span> <span m='64180'>draw</span> <span m='65290'>the</span>
  <span m='65410'>accompanying</span> <span m='65930'>region</span> <span
  m='66460'>in</span> <span m='66600'>the</span> <span m='66710'>u,</span> <span
  m='66900'>v</span> <span m='67090'>plane,</span> <span m='67600'>and</span>
  <span m='67750'>then</span> <span m='67950'>we'll</span> <span
  m='68120'>see</span> <span m='69410'>how</span> <span m='70110'>I</span> <span
  m='70210'>set</span> <span m='70500'>it</span> <span m='70620'>up.</span>
  </p><p><span m='80430'>OK,</span> <span m='80660'>welcome</span> <span
  m='80970'>back.</span> <span m='81720'>Well,</span> <span m='82110'>the</span>
  <span m='82220'>first</span> <span m='82480'>thing</span> <span
  m='82620'>I'm</span> <span m='82730'>going</span> <span m='82960'>to</span>
  <span m='83080'>do</span> <span m='83360'>is</span> <span m='83490'>I'm</span>
  <span m='83630'>going</span> <span m='83830'>to</span> <span
  m='83980'>draw</span> <span m='84410'>the</span> <span m='84520'>region</span>
  <span m='85000'>in</span> <span m='85140'>the</span> <span m='85250'>u,</span>
  <span m='85390'>v</span> <span m='85630'>plane</span> <span
  m='86470'>that</span> <span m='86630'>is</span> <span
  m='86760'>determined</span> <span m='87250'>by</span> <span
  m='87390'>this</span> <span m='87680'>region</span> <span m='88070'>in</span>
  <span m='88150'>the</span> <span m='88460'>x, y</span> <span
  m='88710'>plane</span> <span m='89290'>and</span> <span m='89680'>the</span>
  <span m='89750'>change</span> <span m='90020'>of</span> <span
  m='90090'>variables.</span> <span m='91090'>Now,</span> <span
  m='91390'>as</span> <span m='91580'>was</span> <span
  m='91710'>mentioned</span> <span m='92120'>in</span> <span
  m='92370'>the</span> <span m='92530'>lecture,</span> <span
  m='93480'>all</span> <span m='93750'>of</span> <span m='93910'>the</span>
  <span m='94050'>changes</span> <span m='94710'>are</span> <span
  m='95070'>linear,</span> <span m='95880'>and</span> <span m='96250'>so</span>
  <span m='96480'>I'm</span> <span m='96650'>going</span> <span
  m='96860'>to</span> <span m='96940'>be</span> <span m='97060'>taking</span>
  <span m='97420'>lines</span> <span m='97910'>to</span> <span
  m='98040'>lines.</span> <span m='99010'>So</span> <span m='99240'>what</span>
  <span m='99400'>I'm</span> <span m='99520'>going</span> <span
  m='99710'>to</span> <span m='99800'>do</span> <span m='100110'>is</span> <span
  m='100290'>determine</span> <span m='101450'>at</span> <span
  m='101660'>each</span> <span m='101900'>endpoint</span> <span
  m='102550'>here</span> <span m='103010'>where</span> <span
  m='103170'>that</span> <span m='103390'>endpoint</span> <span
  m='103830'>goes</span> <span m='104220'>under</span> <span
  m='104400'>the</span> <span m='104500'>transformation,</span> <span
  m='105350'>and</span> <span m='105570'>then</span> <span m='105780'>I</span>
  <span m='105870'>will</span> <span m='106030'>connect</span> <span
  m='106370'>the</span> <span m='106430'>dots.</span> </p><p><span
  m='107230'>So</span> <span m='107460'>what</span> <span m='107600'>do</span>
  <span m='107660'>I</span> <span m='107750'>get?</span> <span
  m='107980'>Well,</span> <span m='108100'>this</span> <span
  m='108300'>first</span> <span m='108670'>one</span> <span m='108850'>is</span>
  <span m='108980'>(0,</span> <span m='109360'>0)</span> <span
  m='109800'>for</span> <span m='109940'>x</span> <span m='110180'>and</span>
  <span m='110300'>y,</span> <span m='110950'>and</span> <span
  m='111140'>so</span> <span m='111230'>that</span> <span
  m='111400'>corresponds</span> <span m='112040'>to</span> <span
  m='112790'>x</span> <span m='113270'>and</span> <span m='113460'>y</span>
  <span m='113720'>are</span> <span m='113980'>0</span> <span
  m='115460'>here,</span> <span m='115890'>so</span> <span m='116040'>u</span>
  <span m='116300'>is</span> <span m='116430'>0,</span> <span
  m='116830'>and</span> <span m='116980'>x and</span> <span m='117240'>y
  are</span> <span m='117600'>0</span> <span m='117870'>here,</span> <span
  m='118120'>so</span> <span m='118330'>it would be a</span> <span
  m='118580'>0,</span> <span m='118960'>so</span> <span m='119130'>that's</span>
  <span m='119360'>the</span> <span m='119430'>point</span> <span
  m='119700'>(0,</span> <span m='120010'>0)</span> <span m='121140'>on</span>
  <span m='121300'>the</span> <span m='121390'>u,</span> <span
  m='121560'>v</span> <span m='121780'>plane.</span> </p><p><span
  m='123300'>Now,</span> <span m='123450'>I want</span> <span
  m='123580'>to</span> <span m='123620'>mention</span> <span
  m='124130'>something</span> <span m='124440'>here</span> <span
  m='124750'>is</span> <span m='124900'>that</span> <span
  m='125500'>based</span> <span m='125860'>on</span> <span m='126050'>how</span>
  <span m='126200'>these</span> <span m='126610'>lines</span> <span
  m='127060'>were</span> <span m='127160'>defined,</span> <span
  m='127690'>this</span> <span m='127900'>is</span> <span
  m='128030'>telling</span> <span m='128340'>you</span> <span
  m='128460'>that</span> <span m='128640'>all</span> <span
  m='128880'>along</span> <span m='129190'>this</span> <span
  m='129370'>line</span> <span m='129690'>2x</span> <span
  m='130050'>minus</span> <span m='130250'>y</span> <span
  m='130360'>equals</span> <span m='130770'>0,</span> <span
  m='131750'>that</span> <span m='131980'>means</span> <span m='132550'>u
  is</span> <span m='132850'>equal</span> <span m='133130'>to</span> <span
  m='133310'>0</span> <span m='133830'>all</span> <span m='134100'>along</span>
  <span m='134380'>that</span> <span m='134570'>segment.</span> <span
  m='135640'>And</span> <span m='135820'>if</span> <span
  m='135910'>you'll</span> <span m='136040'>notice</span> <span
  m='136320'>also,</span> <span m='136740'>2x</span> <span
  m='137220'>plus</span> <span m='137485'>y is</span> <span
  m='137750'>equal</span> <span m='137940'>to</span> <span m='138020'>2</span>
  <span m='138310'>here,</span> <span m='139310'>so</span> <span
  m='139550'>v</span> <span m='139960'>is</span> <span m='140150'>equal</span>
  <span m='140470'>to</span> <span m='141170'>2</span> <span
  m='141600'>all</span> <span m='141850'>along</span> <span
  m='142150'>this</span> <span m='142260'>segment.</span> <span
  m='143020'>So</span> <span m='143230'>we</span> <span m='143360'>should</span>
  <span m='143520'>expect</span> <span m='143890'>whatever</span> <span
  m='144230'>u</span> <span m='144500'>is,</span> <span m='144760'>v's</span>
  <span m='144970'>going</span> <span m='145150'>to</span> <span
  m='145210'>be</span> <span m='145390'>2</span> <span m='145660'>here,</span>
  <span m='146250'>and</span> <span m='146510'>whatever</span> <span
  m='146840'>v</span> <span m='147120'>is</span> <span m='147340'>here,</span>
  <span m='147580'>u</span> <span m='147770'>is</span> <span
  m='147930'>going</span> <span m='148150'>to</span> <span m='148220'>be</span>
  <span m='148360'>0.</span> <span m='149580'>OK,</span> <span
  m='150420'>so</span> <span m='150650'>I'm</span> <span m='150740'>going
  to</span> <span m='150940'>have</span> <span m='151080'>something</span> <span
  m='151440'>with</span> <span m='151580'>u,</span> <span m='151840'>0</span>
  <span m='152610'>initially,</span> <span m='153220'>and</span> <span
  m='153450'>then</span> <span m='153600'>v,</span> <span m='153830'>2,</span>
  <span m='154120'>I</span> <span m='154220'>can</span> <span
  m='154360'>already</span> <span m='154570'>expect,</span> <span
  m='155050'>it's</span> <span m='155160'>going</span> <span
  m='155340'>to</span> <span m='155420'>come</span> <span m='155600'>up</span>
  <span m='155740'>here</span> <span m='155960'>and</span> <span
  m='156080'>move</span> <span m='156270'>over</span> <span
  m='156530'>that</span> <span m='156800'>way.</span> <span
  m='157290'>But</span> <span m='157530'>let's</span> <span
  m='157720'>just</span> <span m='157950'>check.</span> </p><p><span
  m='158570'>So</span> <span m='158800'>this</span> <span m='159040'>is</span>
  <span m='159210'>the</span> <span m='159280'>point</span> <span
  m='159790'>(0,</span> <span m='160190'>2),</span> <span m='160830'>0</span>
  <span m='161280'>for</span> <span m='161710'>x</span> <span m='162080'>and
  2</span> <span m='162380'>for</span> <span m='162560'>y.</span> <span
  m='163210'>Let's</span> <span m='163420'>see</span> <span
  m='163550'>what</span> <span m='163750'>it</span> <span m='163850'>is</span>
  <span m='164120'>in</span> <span m='164900'>the</span> <span
  m='165870'>u,</span> <span m='166170'>v</span> <span
  m='166420'>variables.</span> <span m='167400'>So</span> <span
  m='167710'>u</span> <span m='168200'>in</span> <span m='168340'>that</span>
  <span m='168520'>case</span> <span m='168930'>is</span> <span
  m='169120'>negative</span> <span m='169620'>2</span> <span
  m='169985'>and</span> <span m='170350'>v</span> <span m='171030'>in</span>
  <span m='171180'>that</span> <span m='171360'>case</span> <span
  m='171760'>is</span> <span m='171980'>2,</span> <span m='172850'>and</span>
  <span m='173030'>so</span> <span m='173170'>I'm</span> <span
  m='173300'>going</span> <span m='173480'>to</span> <span m='173540'>go</span>
  <span m='173670'>left</span> <span m='174020'>2</span> <span
  m='174850'>and</span> <span m='175050'>up</span> <span m='175300'>2.</span>
  <span m='177340'>This</span> <span m='177500'>might</span> <span
  m='177690'>not</span> <span m='177830'>be</span> <span m='177920'>drawn</span>
  <span m='178190'>to</span> <span m='178280'>scale,</span> <span
  m='178740'>but</span> <span m='178880'>this</span> <span m='179040'>is</span>
  <span m='179140'>negative</span> <span m='179560'>2,</span> <span
  m='181210'>and</span> <span m='181390'>this</span> <span m='181550'>is</span>
  <span m='181700'>up</span> <span m='181990'>2</span> <span
  m='182270'>here,</span> <span m='183600'>and</span> <span m='183810'>so</span>
  <span m='183910'>that's</span> <span m='184140'>where</span> <span
  m='184310'>this</span> <span m='184590'>point</span> <span
  m='184810'>goes</span> <span m='185040'>in</span> <span m='185220'>the</span>
  <span m='185280'>transformation.</span> <span m='185920'>This</span> <span
  m='186110'>point</span> <span m='186350'>is</span> <span m='186480'>1/2</span>
  <span m='187650'>comma</span> <span m='189510'>1.</span> <span
  m='190560'>You</span> <span m='190660'>can</span> <span
  m='190790'>actually</span> <span m='191270'>check</span> <span
  m='191550'>what</span> <span m='191700'>it</span> <span m='191810'>is.</span>
  <span m='192460'>But</span> <span m='192670'>actually,</span> <span
  m='193080'>as</span> <span m='193190'>I</span> <span
  m='193280'>mentioned,</span> <span m='193680'>you</span> <span
  m='193770'>already</span> <span m='194050'>know</span> <span
  m='194380'>what</span> <span m='194550'>has</span> <span m='194790'>to</span>
  <span m='194880'>happen,</span> <span m='195680'>because</span> <span
  m='196690'>this</span> <span m='197060'>segment</span> <span
  m='197530'>is</span> <span m='197680'>connected</span> <span
  m='198560'>right</span> <span m='198800'>here,</span> <span
  m='202500'>and</span> <span m='202670'>then we</span> <span
  m='202780'>said</span> <span m='203220'>all</span> <span
  m='203470'>along</span> <span m='203810'>this</span> <span
  m='204010'>line,</span> <span m='204960'>v</span> <span m='205520'>is</span>
  <span m='205790'>2,</span> <span m='210330'>and</span> <span
  m='210500'>all</span> <span m='210750'>along</span> <span
  m='211040'>this</span> <span m='211250'>line,</span> <span m='211820'>u</span>
  <span m='212110'>is</span> <span m='212270'>0,</span> <span
  m='213490'>and</span> <span m='213630'>so</span> <span m='213710'>that</span>
  <span m='213870'>actually</span> <span m='214120'>carves</span> <span
  m='214420'>out</span> <span m='214610'>that</span> <span
  m='214800'>rectangle.</span> <span m='215290'>So</span> <span
  m='216110'>if</span> <span m='216280'>you</span> <span m='216390'>were</span>
  <span m='216570'>worried</span> <span m='216970'>and</span> <span
  m='217070'>you</span> <span m='217610'>weren't</span> <span
  m='217830'>able</span> <span m='218050'>to</span> <span m='218150'>do</span>
  <span m='218270'>it</span> <span m='218370'>that</span> <span
  m='218570'>way,</span> <span m='218720'>what</span> <span
  m='218870'>you</span> <span m='218950'>could</span> <span
  m='219140'>actually</span> <span m='219430'>do</span> <span
  m='219630'>is</span> <span m='219770'>say, well,</span> <span
  m='219930'>where</span> <span m='220270'>does</span> <span
  m='220430'>the</span> <span m='220500'>point</span> <span
  m='220770'>(1/2,</span> <span m='221170'>1)</span> <span m='221580'>go?</span>
  <span m='222170'>If</span> <span m='222420'>I</span> <span
  m='222520'>plug</span> <span m='222830'>in</span> <span m='222920'>1/2</span>
  <span m='223360'>for</span> <span m='223460'>x</span> <span
  m='223750'>and</span> <span m='223880'>1</span> <span m='224070'>for</span>
  <span m='224200'>y,</span> <span m='224950'>I</span> <span
  m='225190'>notice</span> <span m='225600'>that</span> <span
  m='225730'>I</span> <span m='225820'>get</span> <span m='226310'>u</span>
  <span m='226640'>equals</span> <span m='227020'>0</span> <span
  m='227890'>and</span> <span m='228320'>v</span> <span m='228530'>equals</span>
  <span m='228890'>2,</span> <span m='229240'>and</span> <span
  m='229390'>that's</span> <span m='229580'>this</span> <span
  m='229790'>point.</span> </p><p><span m='230480'>And</span> <span
  m='230720'>so</span> <span m='230820'>now,</span> <span m='231000'>I'm</span>
  <span m='231100'>looking</span> <span m='231340'>at</span> <span
  m='231440'>this</span> <span m='231600'>region.</span> <span
  m='232950'>Now,</span> <span m='233140'>these</span> <span
  m='233390'>two</span> <span m='233550'>things</span> <span
  m='233820'>are</span> <span m='233900'>not</span> <span
  m='234090'>drawn</span> <span m='234180'>to</span> <span
  m='234380'>scale,</span> <span m='234780'>because</span> <span
  m='235060'>what</span> <span m='235210'>I</span> <span m='235260'>want</span>
  <span m='235400'>to</span> <span m='235460'>point</span> <span
  m='235700'>out</span> <span m='235970'>is</span> <span
  m='236240'>they're</span> <span m='236460'>both</span> <span
  m='236680'>triangles.</span> <span m='237150'>It's</span> <span
  m='237370'>easy</span> <span m='237590'>to</span> <span m='237670'>find
  the</span> <span m='237920'>area</span> <span m='238340'>based</span> <span
  m='238650'>on</span> <span m='238780'>how</span> <span
  m='238970'>they're</span> <span m='239750'>sitting</span> <span
  m='240160'>in</span> <span m='240490'>two-dimensional</span> <span
  m='241050'>space.</span> <span m='241400'>So</span> <span
  m='241520'>what</span> <span m='241660'>we</span> <span m='241800'>see</span>
  <span m='242030'>here</span> <span m='242720'>is</span> <span
  m='242990'>if</span> <span m='243140'>I</span> <span m='243250'>wanted</span>
  <span m='243510'>to</span> <span m='243580'>find</span> <span
  m='243830'>the</span> <span m='243930'>area</span> <span m='244310'>of</span>
  <span m='244430'>this</span> <span m='244650'>triangle,</span> <span
  m='245730'>let's</span> <span m='245950'>make</span> <span
  m='246160'>this</span> <span m='246360'>the</span> <span
  m='246450'>base.</span> <span m='246830'>The</span> <span m='246990'>base
  is</span> <span m='247430'>2</span> <span m='248040'>and</span> <span
  m='248240'>the</span> <span m='248300'>height</span> <span
  m='248570'>is</span> <span m='248680'>1/2,</span> <span m='249300'>so</span>
  <span m='249410'>1/2</span> <span m='249920'>of</span> <span
  m='250070'>base</span> <span m='250400'>times</span> <span
  m='250620'>height</span> <span m='250940'>is--</span> <span
  m='251470'>that</span> <span m='251770'>area</span> <span m='252060'>is</span>
  <span m='252170'>equal</span> <span m='252410'>to</span> <span
  m='252530'>1/2.</span> <span m='253510'>So</span> <span m='253760'>the</span>
  <span m='253860'>area</span> <span m='254145'>of</span> <span
  m='254430'>R</span> <span m='254830'>is</span> <span m='255200'>1/2,</span>
  <span m='256240'>and</span> <span m='256430'>what's</span> <span
  m='256580'>the</span> <span m='256720'>area</span> <span m='257050'>of</span>
  <span m='257160'>this</span> <span m='257380'>one?</span> <span
  m='257570'>The</span> <span m='257650'>area</span> <span
  m='257890'>this</span> <span m='258080'>one</span> <span
  m='258320'>is--</span> <span m='258810'>well,</span> <span
  m='259330'>I've</span> <span m='259510'>got</span> <span
  m='260350'>base</span> <span m='260880'>2</span> <span m='261200'>and</span>
  <span m='261360'>height</span> <span m='261700'>2,</span> <span
  m='262650'>and</span> <span m='262840'>so</span> <span m='262980'>it's</span>
  <span m='263330'>1/2</span> <span m='264140'>of</span> <span
  m='264420'>2</span> <span m='264630'>times</span> <span m='264940'>2,</span>
  <span m='265600'>and</span> <span m='265840'>so</span> <span
  m='265930'>that</span> <span m='266070'>gives</span> <span
  m='266260'>me</span> <span m='266400'>area</span> <span m='266780'>as</span>
  <span m='266910'>2.</span> </p><p><span m='267140'>So</span> <span
  m='267310'>here</span> <span m='267560'>the</span> <span m='267640'>area
  is</span> <span m='268000'>1/2,</span> <span m='268970'>here</span> <span
  m='269290'>the</span> <span m='269380'>area is</span> <span
  m='269730'>2,</span> <span m='270390'>and</span> <span m='270700'>so</span>
  <span m='270810'>notice</span> <span m='271230'>that</span> <span
  m='271710'>I've</span> <span m='272050'>multiplied</span> <span
  m='272580'>by</span> <span m='272730'>4</span> <span m='273140'>to</span>
  <span m='273250'>get</span> <span m='273410'>from</span> <span
  m='273560'>here</span> <span m='273720'>to</span> <span
  m='273800'>here.</span> <span m='274730'>So</span> <span m='274940'>I</span>
  <span m='275050'>can</span> <span m='275240'>anticipate</span> <span
  m='276350'>that</span> <span m='276530'>I</span> <span
  m='276590'>should</span> <span m='276760'>have--</span> <span
  m='277050'>based</span> <span m='277420'>on</span> <span m='277660'>the</span>
  <span m='278020'>principle</span> <span m='278410'>you saw</span> <span
  m='278630'>in</span> <span m='278830'>lecture,</span> <span
  m='279230'>I</span> <span m='279320'>should</span> <span
  m='279480'>have</span> <span m='279690'>something</span> <span
  m='279950'>like</span> <span m='280700'>du</span> <span m='281040'>dv</span>
  <span m='281900'>is</span> <span m='282030'>going</span> <span m='282220'>to
  be</span> <span m='282280'>equal to</span> <span m='282530'>4</span> <span
  m='282990'>times</span> <span m='283340'>dx</span> <span m='283470'>dy.</span>
  <span m='285660'>That</span> <span m='285840'>is</span> <span
  m='285940'>what</span> <span m='286080'>I</span> <span
  m='286140'>expect</span> <span m='286610'>to</span> <span
  m='286690'>get.</span> <span m='287250'>Now</span> <span
  m='287380'>let's</span> <span m='287600'>see</span> <span m='287760'>if</span>
  <span m='287910'>when</span> <span m='288050'>we</span> <span
  m='288160'>do</span> <span m='288960'>the</span> <span
  m='289030'>Jacobian,</span> <span m='289500'>we</span> <span
  m='289580'>get</span> <span m='289750'>the</span> <span m='289850'>same</span>
  <span m='290110'>thing.</span> <span m='290710'>Let</span> <span
  m='290830'>me</span> <span m='290920'>double</span> <span
  m='291170'>check,</span> <span m='291450'>right?</span> <span
  m='291640'>This</span> <span m='291830'>is</span> <span m='292540'>area</span>
  <span m='292910'>2,</span> <span m='293670'>this</span> <span
  m='293830'>is</span> <span m='293950'>area</span> <span m='294260'>1/2,</span>
  <span m='295280'>so</span> <span m='295470'>I</span> <span
  m='295520'>have</span> <span m='295730'>1/2</span> <span
  m='296280'>times</span> <span m='296540'>4</span> <span m='296830'>is</span>
  <span m='296920'>going</span> <span m='297040'>to</span> <span
  m='297100'>give</span> <span m='297200'>me</span> <span m='297340'>2.</span>
  <span m='297530'>Yeah,</span> <span m='297720'>that's</span> <span
  m='297940'>what</span> <span m='298050'>I</span> <span
  m='298120'>should</span> <span m='298310'>get.</span> </p><p><span
  m='301310'>Oops!</span> <span m='301510'>That</span> <span
  m='301700'>sticks</span> <span m='301990'>out</span> <span m='302150'>a</span>
  <span m='302210'>little.</span> <span m='303100'>So</span> <span
  m='303330'>now</span> <span m='303570'>let's</span> <span
  m='303800'>just</span> <span m='304020'>check</span> <span
  m='304290'>our</span> <span m='304690'>Jacobian</span> <span
  m='305580'>and</span> <span m='305720'>see</span> <span m='305880'>if</span>
  <span m='305990'>that</span> <span m='306170'>is</span> <span
  m='306340'>indeed</span> <span m='306710'>what</span> <span
  m='306880'>we</span> <span m='306990'>get.</span> <span m='307990'>So</span>
  <span m='308180'>I'm</span> <span m='308330'>going to</span> <span
  m='308480'>look</span> <span m='308670'>at</span> <span m='309070'>u</span>
  <span m='309440'>sub</span> <span m='309520'>x,</span> <span
  m='311220'>u</span> <span m='311410'>sub</span> <span m='311825'>y,</span>
  <span m='313130'>v</span> <span m='313450'>sub</span> <span
  m='313510'>x,</span> <span m='314450'>v</span> <span m='314650'>sub</span>
  <span m='314950'>y,</span> <span m='316100'>right?</span> <span
  m='316350'>So</span> <span m='316470'>u</span> <span m='316730'>sub</span>
  <span m='316820'>x</span> <span m='317510'>is</span> <span
  m='317740'>2,</span> <span m='318110'>u</span> <span m='318340'>sub</span>
  <span m='318430'>y</span> <span m='318710'>is</span> <span
  m='318990'>negative</span> <span m='319370'>1,</span> <span
  m='320860'>so</span> <span m='321260'>I</span> <span m='321580'>get</span>
  <span m='321770'>2,</span> <span m='321840'>negative</span> <span
  m='321950'>1.</span> <span m='323050'>v</span> <span m='323450'>sub</span>
  <span m='323530'>x</span> <span m='323990'>is 2,</span> <span
  m='324340'>v</span> <span m='324520'>sub</span> <span m='324640'>y</span>
  <span m='324870'>is</span> <span m='324990'>1,</span> <span
  m='325760'>so</span> <span m='325950'>I</span> <span m='326030'>get</span>
  <span m='326400'>2,</span> <span m='326720'>1.</span> <span
  m='328130'>2</span> <span m='328290'>times</span> <span m='328530'>1</span>
  <span m='328700'>is</span> <span m='328870'>2,</span> <span
  m='330240'>minus</span> <span m='330740'>negative</span> <span
  m='331120'>2</span> <span m='331350'>gives</span> <span m='331550'>me,</span>
  <span m='331680'>indeed,</span> <span m='332050'>4.</span> <span
  m='332860'>So</span> <span m='333120'>I</span> <span m='333230'>do</span>
  <span m='333470'>get,</span> <span m='333670'>in</span> <span
  m='333800'>fact,</span> <span m='334300'>du</span> <span m='334880'>dv</span>
  <span m='335310'>is</span> <span m='335450'>equal</span> <span
  m='335690'>to</span> <span m='335770'>4</span> <span m='336070'>dx</span>
  <span m='336380'>dy.</span> <span m='337930'>So</span> <span
  m='338150'>I</span> <span m='338250'>know</span> <span m='338560'>that</span>
  <span m='338720'>I'm</span> <span m='338830'>going to</span> <span
  m='339000'>have</span> <span m='339180'>to--</span> <span
  m='339400'>because</span> <span m='339700'>I'm</span> <span
  m='339830'>changing</span> <span m='340200'>variables,</span> <span
  m='340780'>though,</span> <span m='341000'>from</span> <span
  m='341230'>dx</span> <span m='341690'>dy</span> <span m='342030'>to</span>
  <span m='342190'>du</span> <span m='342490'>dv,</span> <span
  m='343310'>I'm</span> <span m='343450'>going</span> <span m='343630'>to</span>
  <span m='343710'>divide</span> <span m='344090'>by</span> <span
  m='344300'>4,</span> <span m='344550'>obviously,</span> <span
  m='345000'>when</span> <span m='345130'>I</span> <span m='345180'>do</span>
  <span m='345310'>the</span> <span m='345420'>substitution.</span> <span
  m='346570'>The</span> <span m='346740'>substitution</span> <span
  m='347310'>will</span> <span m='347470'>be</span> <span
  m='347600'>replacing</span> <span m='348230'>just</span> <span
  m='348440'>dx</span> <span m='348750'>dy.</span> <span m='349850'>So</span>
  <span m='350190'>I</span> <span m='350360'>just</span> <span
  m='350590'>mention</span> <span m='350890'>that,</span> <span
  m='351370'>but</span> <span m='351650'>notice:</span> <span
  m='352240'>Again,</span> <span m='352560'>we</span> <span
  m='352670'>get</span> <span m='352860'>what</span> <span m='352960'>we</span>
  <span m='353070'>expect</span> <span m='353380'>to</span> <span
  m='353450'>get.</span> <span m='353640'>We</span> <span m='353720'>got
  a</span> <span m='353880'>4</span> <span m='354250'>based</span> <span
  m='354590'>on</span> <span m='354760'>the</span> <span
  m='355740'>picture</span> <span m='356270'>and</span> <span
  m='356400'>we</span> <span m='356480'>got a</span> <span m='356640'>4</span>
  <span m='356900'>based</span> <span m='357190'>on</span> <span
  m='357290'>the</span> <span m='357430'>Jacobian.</span> </p><p><span
  m='358950'>And</span> <span m='359250'>so</span> <span m='359340'>now,</span>
  <span m='359610'>we</span> <span m='360030'>need</span> <span
  m='360180'>to</span> <span m='360250'>finish</span> <span m='360630'>up</span>
  <span m='360800'>the</span> <span m='360890'>process.</span> <span
  m='361420'>We</span> <span m='361520'>need</span> <span m='361650'>to</span>
  <span m='361710'>figure</span> <span m='361990'>out</span> <span
  m='362110'>how</span> <span m='362210'>to</span> <span m='362290'>write</span>
  <span m='362840'>this</span> <span m='363250'>in</span> <span
  m='363380'>terms</span> <span m='363640'>of</span> <span m='363720'>u</span>
  <span m='363880'>and v</span> <span m='364530'>and</span> <span
  m='364840'>then</span> <span m='365010'>figure</span> <span
  m='365270'>out</span> <span m='365400'>our</span> <span
  m='365510'>bounds</span> <span m='365890'>in</span> <span
  m='366000'>terms</span> <span m='366300'>of</span> <span m='366370'>u
  and</span> <span m='366650'>v,</span> <span m='366910'>and then</span> <span
  m='367030'>we're</span> <span m='367140'>done.</span> <span
  m='368720'>So</span> <span m='368910'>let</span> <span m='369110'>me</span>
  <span m='369720'>mention,</span> <span m='370620'>one</span> <span
  m='371070'>thing</span> <span m='371270'>you</span> <span
  m='371410'>should</span> <span m='371590'>notice</span> <span
  m='372090'>is</span> <span m='372240'>that</span> <span m='372410'>u</span>
  <span m='372720'>times</span> <span m='373080'>v</span> <span
  m='374370'>is</span> <span m='374610'>equal</span> <span m='374960'>to</span>
  <span m='375330'>exactly--</span> <span m='375930'>this</span> <span
  m='376110'>is</span> <span m='376790'>going</span> <span m='376970'>to</span>
  <span m='377030'>be</span> <span m='377110'>a</span> <span
  m='377150'>difference</span> <span m='377460'>of</span> <span
  m='377550'>two</span> <span m='377740'>squares,</span> <span
  m='378160'>and</span> <span m='378250'>it</span> <span m='378370'>is</span>
  <span m='378500'>precisely</span> <span m='379480'>4</span> <span
  m='380060'>x</span> <span m='380320'>squared</span> <span
  m='381040'>minus</span> <span m='381460'>y</span> <span
  m='381730'>squared.</span> <span m='382410'>If</span> <span
  m='382700'>you</span> <span m='382800'>need</span> <span m='383010'>to</span>
  <span m='383190'>multiply</span> <span m='383380'>it</span> <span
  m='383670'>out</span> <span m='383850'>to</span> <span
  m='383960'>check,</span> <span m='384610'>you</span> <span
  m='384770'>can</span> <span m='384910'>check</span> <span
  m='385170'>it,</span> <span m='385300'>but</span> <span
  m='385390'>that's</span> <span m='385550'>indeed</span> <span
  m='385760'>what</span> <span m='385980'>it</span> <span m='386070'>is,</span>
  <span m='386320'>which</span> <span m='386460'>is</span> <span
  m='386580'>why</span> <span m='386840'>this</span> <span
  m='387850'>particular</span> <span m='388410'>substitution</span> <span
  m='389000'>is</span> <span m='389120'>quite</span> <span
  m='389360'>nice,</span> <span m='390190'>because</span> <span
  m='390490'>that</span> <span m='390720'>means</span> <span
  m='391020'>this</span> <span m='391260'>function</span> <span
  m='392170'>I'm</span> <span m='392740'>supposed</span> <span
  m='393030'>to</span> <span m='393090'>be</span> <span
  m='393230'>integrating</span> <span m='393720'>is</span> <span
  m='393810'>just</span> <span m='394060'>u*v</span> <span
  m='395020'>raised</span> <span m='395420'>to</span> <span
  m='395520'>the</span> <span m='395620'>fourth.</span> <span
  m='397030'>So</span> <span m='397250'>I'm</span> <span
  m='397390'>almost</span> <span m='397740'>done.</span> <span
  m='398370'>So</span> <span m='398580'>let</span> <span m='398690'>me</span>
  <span m='398780'>write</span> <span m='399040'>in</span> <span
  m='399140'>the</span> <span m='399210'>pieces</span> <span m='399570'>I</span>
  <span m='399700'>know,</span> <span m='400340'>and</span> <span
  m='400620'>then</span> <span m='400760'>we'll</span> <span
  m='400890'>fill</span> <span m='401150'>in</span> <span m='401270'>the</span>
  <span m='401380'>last</span> <span m='402800'>two spots, or four</span> <span
  m='403250'>spots,</span> <span m='403640'>which</span> <span
  m='403780'>will</span> <span m='403900'>be</span> <span m='404110'>all</span>
  <span m='404280'>the</span> <span m='404380'>bounds</span> <span
  m='405160'>on</span> <span m='405320'>the</span> <span
  m='405410'>integral.</span> </p><p><span m='406360'>So</span> <span
  m='406710'>I'm</span> <span m='406950'>going to</span> <span m='407440'>write
  it</span> <span m='407760'>here,</span> <span m='408200'>give</span> <span
  m='408330'>myself</span> <span m='408750'>some</span> <span
  m='408830'>space</span> <span m='409190'>to</span> <span
  m='409300'>write</span> <span m='409510'>the</span> <span
  m='409600'>bounds.</span> <span m='410960'>So</span> <span
  m='411120'>I'm</span> <span m='411250'>replacing</span> <span
  m='411780'>the</span> <span m='411880'>4</span> <span m='412360'>x
  squared</span> <span m='412570'>minus</span> <span m='412850'>y</span> <span
  m='413120'>squared</span> <span m='413530'>by a</span> <span
  m='413680'>u*v,</span> <span m='414720'>so</span> <span m='414890'>I'm</span>
  <span m='414960'>going to</span> <span m='415140'>get</span> <span
  m='415290'>u</span> <span m='415480'>times</span> <span m='415780'>v,</span>
  <span m='416240'>and</span> <span m='416760'>then</span> <span
  m='416880'>the</span> <span m='416960'>function,</span> <span m='417450'>that
  is</span> <span m='417580'>raised</span> <span m='417900'>to</span> <span
  m='418600'>the</span> <span m='418670'>fourth</span> <span
  m='419340'>in</span> <span m='419530'>the</span> <span
  m='420020'>initial</span> <span m='420370'>problem, so</span> <span
  m='420800'>I</span> <span m='420910'>raise</span> <span m='421180'>that</span>
  <span m='421360'>to</span> <span m='421440'>the</span> <span
  m='421530'>fourth.</span> <span m='422450'>Then</span> <span
  m='422680'>dx</span> <span m='423180'>dy,</span> <span m='423530'>as</span>
  <span m='423640'>I</span> <span m='423720'>mentioned,</span> <span
  m='424180'>will</span> <span m='424300'>be</span> <span
  m='424420'>replaced</span> <span m='424970'>by</span> <span
  m='425560'>a</span> <span m='425860'>du</span> <span m='426220'>dv</span>
  <span m='426660'>divided</span> <span m='427030'>by</span> <span
  m='427170'>4.</span> <span m='428190'>And</span> <span m='428340'>so</span>
  <span m='428470'>I</span> <span m='428560'>can</span> <span
  m='428720'>just</span> <span m='428870'>put</span> <span
  m='429010'>this</span> <span m='429230'>over</span> <span m='429460'>4</span>
  <span m='430250'>and</span> <span m='430400'>write</span> <span
  m='431370'>du</span> <span m='431510'>dv.</span> <span m='432010'>I
  should</span> <span m='432180'>be</span> <span m='432260'>careful</span> <span
  m='432580'>which</span> <span m='432760'>order</span> <span
  m='433030'>I</span> <span m='433110'>want</span> <span m='433310'>to</span>
  <span m='433390'>do.</span> <span m='433780'>It</span> <span
  m='434170'>doesn't</span> <span m='434440'>really</span> <span
  m='434640'>matter.</span> <span m='434960'>I</span> <span
  m='435020'>can</span> <span m='435190'>do</span> <span
  m='435330'>either</span> <span m='435560'>one.</span> <span
  m='437250'>du</span> <span m='437570'>dv,</span> <span m='438160'>OK?</span>
  </p><p><span m='438990'>And</span> <span m='439190'>so</span> <span
  m='439290'>now</span> <span m='439530'>I</span> <span m='439600'>want</span>
  <span m='439810'>to</span> <span m='439890'>know</span> <span
  m='440040'>what</span> <span m='440250'>u</span> <span m='440510'>goes</span>
  <span m='440820'>from</span> <span m='441240'>and</span> <span
  m='441490'>to</span> <span m='442010'>and</span> <span m='442190'>then</span>
  <span m='442380'>what</span> <span m='442590'>v</span> <span
  m='442840'>has</span> <span m='443000'>to</span> <span m='443090'>go</span>
  <span m='443200'>from</span> <span m='443390'>and</span> <span
  m='443480'>to.</span> <span m='443600'>So if I</span> <span
  m='443890'>come</span> <span m='444050'>over</span> <span
  m='444260'>here,</span> <span m='445690'>you'll</span> <span
  m='445890'>see</span> <span m='446060'>it</span> <span
  m='446140'>didn't</span> <span m='446360'>matter,</span> <span
  m='446630'>because</span> <span m='446780'>I</span> <span
  m='446870'>could</span> <span m='447030'>have</span> <span
  m='447250'>picked</span> <span m='447470'>either</span> <span
  m='447700'>direction</span> <span m='448160'>to</span> <span
  m='448260'>go.</span> <span m='448540'>But</span> <span m='448750'>if</span>
  <span m='448870'>I'm</span> <span m='449000'>going</span> <span
  m='449210'>to</span> <span m='449270'>go</span> <span m='449850'>with</span>
  <span m='450110'>u,</span> <span m='450490'>I'm</span> <span
  m='450710'>coming</span> <span m='451400'>from</span> <span
  m='451680'>whatever</span> <span m='452010'>this</span> <span
  m='452210'>function</span> <span m='452560'>is</span> <span
  m='452800'>over</span> <span m='453070'>to</span> <span
  m='453150'>here,</span> <span m='454300'>right?</span> <span
  m='454790'>And</span> <span m='455050'>this</span> <span
  m='455230'>value</span> <span m='455630'>here</span> <span
  m='455900'>is</span> <span m='456030'>easy.</span> <span
  m='456330'>That's</span> <span m='456560'>u</span> <span
  m='456710'>equals</span> <span m='457040'>0.</span> <span m='457930'>So</span>
  <span m='458120'>the</span> <span m='458240'>top</span> <span
  m='458650'>bound</span> <span m='458950'>for</span> <span m='459110'>u</span>
  <span m='459390'>is</span> <span m='459570'>0,</span> <span
  m='460280'>and</span> <span m='460500'>the</span> <span
  m='460580'>bottom</span> <span m='460950'>bound</span> <span
  m='461210'>for</span> <span m='461330'>u,</span> <span m='461560'>this</span>
  <span m='461790'>is</span> <span m='462400'>v</span> <span
  m='462665'>is</span> <span m='462930'>equal</span> <span m='463100'>to</span>
  <span m='463210'>minus</span> <span m='463460'>u,</span> <span
  m='464460'>so</span> <span m='464600'>the</span> <span
  m='464680'>bottom</span> <span m='465010'>bound</span> <span
  m='465250'>for</span> <span m='465380'>u</span> <span m='465650'>is</span>
  <span m='466400'>when</span> <span m='466700'>u</span> <span
  m='466910'>is</span> <span m='467050'>equal</span> <span m='467150'>to</span>
  <span m='467380'>negative</span> <span m='467800'>v.</span> <span
  m='468690'>So</span> <span m='468870'>I'm</span> <span
  m='469010'>running</span> <span m='469340'>from--</span> <span
  m='470510'>because</span> <span m='470790'>I</span> <span
  m='470850'>put</span> <span m='471030'>the</span> <span m='471110'>du</span>
  <span m='471460'>on</span> <span m='471560'>the</span> <span
  m='471660'>inside,</span> <span m='472150'>my</span> <span
  m='472320'>first</span> <span m='472690'>one</span> <span m='472860'>is</span>
  <span m='473020'>running</span> <span m='473300'>from</span> <span
  m='473570'>minus</span> <span m='473960'>v</span> <span m='475320'>to--</span>
  <span m='475530'>what</span> <span m='475710'>did</span> <span
  m='475820'>I</span> <span m='475890'>say--</span> <span m='476140'>0,</span>
  <span m='477470'>and</span> <span m='477670'>then</span> <span
  m='477790'>the</span> <span m='478150'>v-values</span> <span
  m='478960'>from</span> <span m='479220'>there</span> <span
  m='479420'>go</span> <span m='479660'>between</span> <span m='480610'>0</span>
  <span m='480975'>and</span> <span m='481340'>2.</span> <span
  m='481940'>You</span> <span m='482070'>can</span> <span m='482230'>see</span>
  <span m='482380'>this</span> <span m='482550'>easily</span> <span
  m='483490'>from</span> <span m='483730'>the</span> <span
  m='483800'>picture.</span> <span m='485320'>So</span> <span
  m='485490'>they</span> <span m='485590'>go</span> <span
  m='485720'>between</span> <span m='486060'>0</span> <span
  m='486250'>and</span> <span m='486380'>2.</span> </p><p><span
  m='488370'>And</span> <span m='488570'>I</span> <span m='488770'>am</span>
  <span m='488910'>not</span> <span m='489110'>going</span> <span
  m='489310'>to</span> <span m='489390'>finish</span> <span m='489680'>it</span>
  <span m='489750'>off</span> <span m='489970'>from</span> <span
  m='490120'>here,</span> <span m='490870'>because</span> <span
  m='491180'>it</span> <span m='491290'>would</span> <span
  m='491440'>require</span> <span m='492220'>not</span> <span
  m='492660'>too</span> <span m='492830'>much</span> <span
  m='493080'>work.</span> <span m='493480'>It's</span> <span
  m='493540'>actually</span> <span m='493830'>quite</span> <span
  m='494080'>simple,</span> <span m='494410'>because</span> <span
  m='494690'>it's</span> <span m='494820'>just</span> <span m='495750'>a</span>
  <span m='495900'>polynomial</span> <span m='496430'>and</span> <span
  m='496650'>u</span> <span m='496830'>and a</span> <span
  m='496950'>polynomial</span> <span m='497570'>and</span> <span
  m='497710'>v,</span> <span m='498310'>but</span> <span m='498570'>there</span>
  <span m='498680'>are</span> <span m='498740'>a</span> <span
  m='498800'>lot</span> <span m='499000'>of</span> <span
  m='499100'>powers</span> <span m='499600'>and</span> <span
  m='499690'>there</span> <span m='499800'>will</span> <span
  m='499900'>be</span> <span m='500000'>big</span> <span
  m='500230'>powers</span> <span m='500560'>of</span> <span m='500620'>2.</span>
  <span m='501300'>So</span> <span m='502020'>suffice</span> <span
  m='502440'>it</span> <span m='502520'>to</span> <span m='502640'>say,
  at</span> <span m='502960'>this</span> <span m='503250'>point,</span> <span
  m='503760'>we</span> <span m='503990'>can</span> <span
  m='504120'>evaluate</span> <span m='504570'>this</span> <span
  m='504730'>integral</span> <span m='505390'>and</span> <span
  m='505530'>it's</span> <span m='505660'>quite</span> <span
  m='505900'>easy</span> <span m='506120'>to</span> <span
  m='506270'>evaluate.</span> </p><p><span m='506850'>And</span> <span
  m='507010'>the</span> <span m='507070'>main</span> <span
  m='507410'>point</span> <span m='507710'>I</span> <span
  m='507770'>think</span> <span m='507970'>we</span> <span
  m='508070'>should</span> <span m='508230'>make</span> <span
  m='508530'>is</span> <span m='508690'>how</span> <span m='508960'>did</span>
  <span m='509120'>it</span> <span m='509210'>make</span> <span
  m='509380'>it</span> <span m='509500'>simpler?</span> <span
  m='510320'>I</span> <span m='510530'>mean,</span> <span m='511320'>the</span>
  <span m='511810'>initial</span> <span m='512120'>problem,</span> <span
  m='512470'>if</span> <span m='512570'>we</span> <span m='512670'>come</span>
  <span m='512840'>over</span> <span m='513030'>here,</span> <span
  m='514940'>this</span> <span m='515180'>is</span> <span
  m='515300'>annoying</span> <span m='515870'>to</span> <span
  m='516780'>find</span> <span m='517100'>an</span> <span
  m='517340'>anti-derivative,</span> <span m='517900'>but</span> <span
  m='518030'>not</span> <span m='518250'>impossible.</span> <span
  m='519350'>But</span> <span m='519590'>the</span> <span
  m='519680'>really</span> <span m='519980'>annoying</span> <span
  m='520360'>part</span> <span m='520670'>is</span> <span m='521480'>I</span>
  <span m='521730'>would</span> <span m='521860'>have</span> <span
  m='522000'>to</span> <span m='522100'>take</span> <span m='522330'>this</span>
  <span m='522490'>region</span> <span m='522860'>and</span> <span
  m='522990'>split</span> <span m='523300'>it</span> <span
  m='523430'>into</span> <span m='523690'>a</span> <span m='523750'>bunch</span>
  <span m='523990'>of</span> <span m='524100'>pieces,</span> <span
  m='524900'>or</span> <span m='525160'>at</span> <span m='525340'>least</span>
  <span m='525680'>two</span> <span m='525830'>pieces,</span> <span
  m='526570'>to</span> <span m='527380'>evaluate</span> <span
  m='527920'>the</span> <span m='528020'>integral in</span> <span
  m='528400'>a</span> <span m='528440'>reasonable</span> <span
  m='528820'>way</span> <span m='529100'>or</span> <span m='530060'>my</span>
  <span m='530210'>y-values</span> <span m='530600'>would</span> <span
  m='530860'>go</span> <span m='531070'>from</span> <span m='531320'>this</span>
  <span m='531480'>line</span> <span m='531730'>here</span> <span
  m='531970'>up</span> <span m='532090'>to</span> <span m='532170'>this</span>
  <span m='532300'>line</span> <span m='532530'>here.</span> <span
  m='532690'>It</span> <span m='532780'>could</span> <span m='532930'>be</span>
  <span m='533020'>complicated.</span> </p><p><span m='534170'>So</span> <span
  m='534340'>what</span> <span m='534460'>we've</span> <span
  m='534590'>really</span> <span m='534960'>done</span> <span
  m='535260'>is</span> <span m='535420'>we've</span> <span
  m='535550'>simplified</span> <span m='536100'>the</span> <span
  m='536250'>region.</span> <span m='537260'>That's</span> <span
  m='537520'>the</span> <span m='537960'>easiest</span> <span
  m='538340'>thing.</span> <span m='542870'>I mean, we</span> <span
  m='543060'>also</span> <span m='543330'>simplified</span> <span
  m='543770'>the</span> <span m='543910'>function,</span> <span
  m='544680'>but</span> <span m='544880'>we've</span> <span
  m='545710'>really</span> <span m='546100'>simplified</span> <span
  m='546500'>the</span> <span m='546640'>region</span> <span
  m='546930'>we're</span> <span m='547040'>integrating</span> <span
  m='547480'>over.</span> <span m='548350'>And</span> <span m='548540'>so</span>
  <span m='548660'>we</span> <span m='548770'>only</span> <span
  m='548980'>have--</span> <span m='549230'>one</span> <span
  m='549510'>is</span> <span m='550040'>a</span> <span
  m='550220'>function</span> <span m='550640'>and</span> <span
  m='550740'>one</span> <span m='550900'>is</span> <span m='550990'>a</span>
  <span m='551060'>constant,</span> <span m='551540'>and that's</span> <span
  m='551830'>quite</span> <span m='552060'>nice</span> <span
  m='552590'>to</span> <span m='552700'>have</span> <span m='552970'>on</span>
  <span m='553090'>the</span> <span m='553200'>inside.</span> <span
  m='554530'>So</span> <span m='554790'>I</span> <span m='554940'>think</span>
  <span m='555180'>that's</span> <span m='555380'>where</span> <span
  m='555490'>I'll</span> <span m='555630'>stop.</span> </p>
embedded_media:
  - uid: 28c397bda00babc2de3eab72e0902ce6
    parent_uid: 4d0c19be3665ac689c77336ae614fb1c
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: lCKxeRiBdjQ
  - uid: 58c0f16ffed47bcf708a52b930ac331e
    parent_uid: 4d0c19be3665ac689c77336ae614fb1c
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/lCKxeRiBdjQ/default.jpg'
  - uid: 3b02dd5a36e2da1d6f9fe798e8d4a7c0
    parent_uid: 4d0c19be3665ac689c77336ae614fb1c
    id: Video-iTunesU-MP4
    title: Video-iTunes U-MP4
    type: Video
    media_location: >-
      http://itunes.apple.com/us/podcast/change-of-variables/id414355340?i=90322812
  - uid: 710ba2e7b551bd0f78f938f67c1114b9
    parent_uid: 4d0c19be3665ac689c77336ae614fb1c
    id: Video-InternetArchive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: 'http://www.archive.org/download/MIT18_02SCF10/MIT18_02SCF10Rec_36_300k.mp4'
  - uid: bdde1df053b3abd4cf3eb2cf48b8dbdb
    parent_uid: 4d0c19be3665ac689c77336ae614fb1c
    id: 3Play-3PlayYouTubeid-PDF
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: lCKxeRiBdjQ
  - uid: c7cefa880ec86d1200d7b9230d5e1866
    parent_uid: 4d0c19be3665ac689c77336ae614fb1c
    id: lCKxeRiBdjQ.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-02sc-multivariable-calculus-fall-2010/3.-double-integrals-and-line-integrals-in-the-plane/part-a-double-integrals/session-53-change-of-variables/change-of-variables/lCKxeRiBdjQ.srt
  - uid: 3832b4f553cb0ffb4b8ced09cc06289b
    parent_uid: 4d0c19be3665ac689c77336ae614fb1c
    id: lCKxeRiBdjQ.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-02sc-multivariable-calculus-fall-2010/3.-double-integrals-and-line-integrals-in-the-plane/part-a-double-integrals/session-53-change-of-variables/change-of-variables/lCKxeRiBdjQ.pdf
  - uid: 6b9e5881c8cd89a43a385a1288e7cf5c
    parent_uid: 4d0c19be3665ac689c77336ae614fb1c
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: dd97f86bf832a1468146a2cab0e77368
    parent_uid: 4d0c19be3665ac689c77336ae614fb1c
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
type: courses
layout: video
---
