var _0x53ab=['Sheets','getTime','format','YYYY-MM-DD\x20HH:mm:ss','indexOf','COMUNIDAD','VECINAL','JUNTA\x20VECINAL','SUB\x20CENTRALIA','SUBCENTRALIA','CENTRALIA','(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x27','\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x27','toString','YYYY-MM-DD',',\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x27','\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x208\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20),','log','replace','INSERT\x20INTO\x20registros(ruos,tipo,comunidad,fecha_acta,responsable,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20municipio_id,fecha_modificacion,distrito)\x20VALUES\x20','status','send','stringify','affectedRows','split','getCell','alignment','left','center','thin','font','Times\x20New\x20Roman','fill','pattern','mediumGray','/tools/export-xlsx-personalidades','ensureAuthenticated','results','Workbook','creator','alanwalter45\x20recursos-humanos','lastModifiedBy','alanwalter45','created','modified','lastPrinted','addWorksheet','pageSetup','margins','Número','nur','ruos','Ruos','region','Region','tipo','organizacion','fecha_sistema','responsable','forEach','addRow','numero_personalidad_juridica','tipo_personalidad_juridica','lastRow','height','printArea','length','xlsx','writeFile','then','exports','express','Router','./../../databaseMysql','moment','./../../middleware','post','/tools/import-xlsx','parse','body','json','index','getPathSO','/personalidades_juridicas/','.xlsx','readFile','SheetNames'];(function(_0x5d9d97,_0x3e02f8){var _0x472db2=function(_0x3501ee){while(--_0x3501ee){_0x5d9d97['push'](_0x5d9d97['shift']());}};_0x472db2(++_0x3e02f8);}(_0x53ab,0x14c));var _0x2592=function(_0x10c278,_0x5d05ac){_0x10c278=_0x10c278-0x0;var _0x170522=_0x53ab[_0x10c278];return _0x170522;};const express=require(_0x2592('0x0'));const router=express[_0x2592('0x1')]();const os=require('os');const Excel=require('exceljs');const XLSX=require('xlsx');const mysqldb=require(_0x2592('0x2'));const tools_global=require('./tools-global');const moment=require(_0x2592('0x3'));const middleware=require(_0x2592('0x4'));router[_0x2592('0x5')](_0x2592('0x6'),(_0x480e42,_0x5d2574,_0x420fa4)=>{let _0x32c107=JSON[_0x2592('0x7')](_0x480e42[_0x2592('0x8')][_0x2592('0x9')]);let _0x213a7a=_0x32c107['nombre'];let _0x460141=_0x32c107[_0x2592('0xa')];const _0x1dcbb8=tools_global[_0x2592('0xb')]();const _0x4ad4eb=_0x1dcbb8['replace']('\x20','\x20')+_0x2592('0xc')+_0x213a7a+_0x2592('0xd');const _0x170976=XLSX[_0x2592('0xe')](_0x4ad4eb);const _0xbfd308=_0x170976[_0x2592('0xf')][_0x460141];const _0x3b531c=_0x170976[_0x2592('0x10')][_0xbfd308];let _0x3375ea=0x0;row=0x1b3;const _0x353b8b=moment(new Date()[_0x2592('0x11')]())[_0x2592('0x12')](_0x2592('0x13'));let _0x127816='';while(_0x3b531c['B'+row]!==undefined){let _0x1cec7e=_0x3b531c['C'+row]?_0x3b531c['C'+row]['v']:'';let _0x2f9861=_0x1cec7e[_0x2592('0x14')](_0x2592('0x15'))!==-0x1?_0x2592('0x15'):_0x1cec7e[_0x2592('0x14')](_0x2592('0x16'))!==-0x1?_0x2592('0x17'):_0x1cec7e[_0x2592('0x14')](_0x2592('0x18'))!==-0x1?_0x2592('0x18'):_0x1cec7e[_0x2592('0x14')](_0x2592('0x19'))!==-0x1?_0x2592('0x18'):_0x1cec7e[_0x2592('0x14')](_0x2592('0x18'))!==-0x1?_0x2592('0x18'):_0x1cec7e[_0x2592('0x14')](_0x2592('0x1a'))!==-0x1?_0x2592('0x1a'):'-';_0x127816+=_0x2592('0x1b')+(_0x3b531c['B'+row]?_0x3b531c['B'+row]['v']:'')+'\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x27'+_0x2f9861+_0x2592('0x1c')+_0x1cec7e+_0x2592('0x1c')+(_0x3b531c['E'+row]?moment(typeof _0x3b531c['E'+row]['v']=='string'?convertir(_0x3b531c['E'+row]['v'][_0x2592('0x1d')]()):new Date((_0x3b531c['E'+row]['v']-(0x63df+0x1))*0x15180*0x3e8))['format'](_0x2592('0x1e')):moment(new Date())[_0x2592('0x12')](_0x2592('0x1e')))+_0x2592('0x1c')+(_0x3b531c['F'+row]?_0x3b531c['F'+row]['v']:'')+'\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'+(_0x460141+0xf)+_0x2592('0x1f')+_0x353b8b+_0x2592('0x20');console[_0x2592('0x21')](row==0x1b?_0x3b531c['E'+row]['v']:'');row++;_0x3375ea++;if(_0x3375ea>=0x3e8){break;}};_0x127816=_0x127816[_0x2592('0x22')](/.$/,';');mysqldb['query'](_0x2592('0x23')+_0x127816,(_0x18c6ca,_0x2eb41a)=>{if(_0x18c6ca)throw _0x18c6ca;_0x5d2574[_0x2592('0x24')](0xc8)[_0x2592('0x25')](JSON[_0x2592('0x26')]({'result':_0x2eb41a[_0x2592('0x27')]?!![]:![],'rowLength':_0x3375ea}));});});function convertir(_0x22cc69){let _0xee9805='';if(!_0x22cc69)return null;if(_0x22cc69['indexOf']('/')!==-0x1){_0xee9805=_0x22cc69[_0x2592('0x28')]('/');}else{_0xee9805=_0x22cc69['split']('-');}console[_0x2592('0x21')](_0x22cc69,_0xee9805[0x2]+'/'+_0xee9805[0x1]+'/'+_0xee9805[0x0]);return _0xee9805[0x2]+'/'+_0xee9805[0x1]+'/'+_0xee9805[0x0];}function alineando_celda(_0x18a0c4,_0x28a4b3,_0x47f785=undefined){_0x18a0c4[_0x2592('0x29')](_0x28a4b3)[_0x2592('0x2a')]={'wrapText':!![],'vertical':'middle','horizontal':_0x28a4b3[_0x2592('0x14')]('C')!==-0x1?_0x2592('0x2b'):_0x2592('0x2c')};_0x18a0c4[_0x2592('0x29')](_0x28a4b3)['border']={'top':{'style':'thin'},'left':{'style':'thin'},'bottom':{'style':_0x2592('0x2d')},'right':{'style':_0x2592('0x2d')}};_0x18a0c4[_0x2592('0x29')](_0x28a4b3)[_0x2592('0x2e')]={'name':_0x2592('0x2f'),'family':0x4,'size':0x9,'underline':![],'bold':![]};}function aplicando_estilo_celda(_0x5e16a2,_0x1cafca,_0xc37ef5){alineando_celda(_0x5e16a2,_0x1cafca,_0xc37ef5);_0x5e16a2[_0x2592('0x29')](_0x1cafca)[_0x2592('0x30')]={'type':_0x2592('0x31'),'pattern':_0x2592('0x32'),'bgColor':{'argb':_0xc37ef5}};}router[_0x2592('0x5')](_0x2592('0x33'),middleware[_0x2592('0x34')],(_0x4d4213,_0x3fec85,_0x44d0a4)=>{let _0x40c469=JSON[_0x2592('0x7')](_0x4d4213[_0x2592('0x8')][_0x2592('0x9')]);let _0x1cbe75=_0x40c469['nombre'];let _0x289cf3=_0x40c469[_0x2592('0x35')];let _0x5730f3=tools_global['getPathSO']();var _0x1f4a4a=new Excel[(_0x2592('0x36'))]();_0x1f4a4a[_0x2592('0x37')]=_0x2592('0x38');_0x1f4a4a[_0x2592('0x39')]=_0x2592('0x3a');_0x1f4a4a[_0x2592('0x3b')]=new Date();_0x1f4a4a[_0x2592('0x3c')]=new Date();_0x1f4a4a[_0x2592('0x3d')]=new Date();let _0x1b71ff=_0x1f4a4a[_0x2592('0x3e')](_0x1cbe75,{'pageSetup':{'paperSize':undefined,'orientation':'landscape'}});_0x1b71ff[_0x2592('0x3f')][_0x2592('0x40')]={'left':0.5,'right':0.5,'top':0.5,'bottom':0.5,'header':0.5,'footer':0.5};_0x1b71ff['columns']=[{'header':'N°','key':_0x2592('0x41'),'width':0xa},{'header':_0x2592('0x42'),'key':'Nur','width':0xf},{'header':_0x2592('0x43'),'key':_0x2592('0x44'),'width':0xf},{'header':_0x2592('0x45'),'key':_0x2592('0x46'),'width':0xf},{'header':'municipio','key':'Municipio','width':0xf},{'header':_0x2592('0x47'),'key':'tipo','width':0x1e},{'header':_0x2592('0x48'),'key':_0x2592('0x48'),'width':0x3c},{'header':'fecha\x20de\x20sistema','key':_0x2592('0x49'),'width':0xa},{'header':'reponsable','key':_0x2592('0x4a'),'width':0x28}];_0x289cf3[_0x2592('0x4b')]((_0x23a6f6,_0x4136ab)=>{_0x1b71ff[_0x2592('0x4c')]([_0x4136ab+0x1,_0x23a6f6[_0x2592('0x4d')],_0x23a6f6[_0x2592('0x43')],_0x23a6f6[_0x2592('0x45')],_0x23a6f6['municipio'],_0x23a6f6[_0x2592('0x4e')],_0x23a6f6[_0x2592('0x48')],moment(_0x23a6f6[_0x2592('0x49')])['format']('DD-MM-YYYY'),_0x23a6f6[_0x2592('0x4a')]]);alineando_celda(_0x1b71ff,'A'+(_0x4136ab+0x2));alineando_celda(_0x1b71ff,'B'+(_0x4136ab+0x2));alineando_celda(_0x1b71ff,'C'+(_0x4136ab+0x2));alineando_celda(_0x1b71ff,'D'+(_0x4136ab+0x2));alineando_celda(_0x1b71ff,'E'+(_0x4136ab+0x2));alineando_celda(_0x1b71ff,'F'+(_0x4136ab+0x2));alineando_celda(_0x1b71ff,'G'+(_0x4136ab+0x2));alineando_celda(_0x1b71ff,'H'+(_0x4136ab+0x2));alineando_celda(_0x1b71ff,'I'+(_0x4136ab+0x2));_0x1b71ff[_0x2592('0x4f')][_0x2592('0x50')]=0x14;});_0x1b71ff[_0x2592('0x3f')][_0x2592('0x51')]='A1:N'+_0x289cf3[_0x2592('0x52')];_0x1f4a4a[_0x2592('0x53')][_0x2592('0x54')](_0x5730f3+'/personalidades_juridicas/'+_0x1cbe75+'.xlsx')[_0x2592('0x55')](()=>{_0x3fec85['status'](0xc8)[_0x2592('0x25')]({'result':!![],'dataArr':JSON[_0x2592('0x26')](_0x289cf3)});});});module[_0x2592('0x56')]=router;