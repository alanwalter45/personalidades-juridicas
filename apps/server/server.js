var _0x5052=['./server/routes','forEach','./routes/','get','whatPathFileConfig','js-yaml','safeLoad','readFileSync','parse','stringify','network','port','\x0a\x20PERFIL\x201\x20\x20\x20\x20\x20\x20\x20\x20\x20:\x20\x20\x20\x20SERVIDOR\x20PÚBLICO\x20STANDARD\x0a+++++++++++++++++++++++++++++++++++++++++++++++++++\x0a\x20DIRECCIÓN\x20\x20\x20\x20\x20\x20\x20\x20:\x20\x20\x20\x20','app','\x0a\x20PLATAFORMA\x20\x20\x20\x20\x20\x20\x20:\x20\x20\x20\x20','platform','\x0a\x20PID\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20:\x20\x20\x20\x20','pid','\x0a\x20INICIADO\x20\x20\x20\x20\x20\x20\x20\x20\x20:\x20\x20\x20\x20','now','format','YYYY-MM-DD\x20hh:mm:ss','\x0a\x20AUTOR\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20:\x20\x20\x20\x20alanwalter45@gmail.com','body-parser','cors','path','express','http','createServer','enable','trust\x20proxy','use','json','urlencoded','join','static','/public','Access-Control-Allow-Headers','setHeader','Access-Control-Allow-Credentials','/api','./file.js','readdirSync'];(function(_0x2e3e6e,_0x30015b){var _0x13a23a=function(_0x492f3d){while(--_0x492f3d){_0x2e3e6e['push'](_0x2e3e6e['shift']());}};_0x13a23a(++_0x30015b);}(_0x5052,0x1c5));var _0x5614=function(_0x56166b,_0x179b77){_0x56166b=_0x56166b-0x0;var _0xfbfe86=_0x5052[_0x56166b];return _0xfbfe86;};const fs=require('fs');const bodyParser=require(_0x5614('0x0'));const cors=require(_0x5614('0x1'));const moment=require('moment');const path=require(_0x5614('0x2'));const express=require(_0x5614('0x3'));const app=express();const Server=require(_0x5614('0x4'))[_0x5614('0x5')](app);app[_0x5614('0x6')](_0x5614('0x7'));app[_0x5614('0x8')](cors());app[_0x5614('0x8')](bodyParser[_0x5614('0x9')]());app[_0x5614('0x8')](bodyParser({'limit':'10mb'}));app[_0x5614('0x8')](bodyParser[_0x5614('0xa')]({'extended':![]}));app[_0x5614('0x8')](express['static'](path[_0x5614('0xb')](__dirname,'./../dist')));app[_0x5614('0x8')](express[_0x5614('0xc')](path[_0x5614('0xb')](__dirname,_0x5614('0xd'))));app[_0x5614('0x8')]((_0x29b44a,_0xddcb24,_0x120326)=>{_0xddcb24['setHeader']('Access-Control-Allow-Origin','*');_0xddcb24['setHeader'](_0x5614('0xe'),'X-Requested-With,content-type');_0xddcb24[_0x5614('0xf')](_0x5614('0x10'),!![]);_0x120326();});app[_0x5614('0x8')](_0x5614('0x11'),require(_0x5614('0x12')));fs[_0x5614('0x13')](_0x5614('0x14'))[_0x5614('0x15')](_0x3edeb5=>{app['use']('/api',require(_0x5614('0x16')+_0x3edeb5+'/'+_0x3edeb5));});app[_0x5614('0x17')]('*',(_0x33a655,_0x4cbe15)=>{_0x4cbe15['sendFile'](path[_0x5614('0xb')](__dirname,'./../dist/index.html'));});let pathFileConfig=require('./os');var path_file=pathFileConfig[_0x5614('0x18')]();const yaml=require(_0x5614('0x19'));const docYML=yaml[_0x5614('0x1a')](fs[_0x5614('0x1b')](path_file,'utf-8'));var congigYML=JSON[_0x5614('0x1c')](JSON[_0x5614('0x1d')](docYML));let port=congigYML['app'][_0x5614('0x1e')][_0x5614('0x1f')]||0xbb8;Server['listen'](port,()=>{console['log'](_0x5614('0x20')+(congigYML[_0x5614('0x21')]['gral']['production']?congigYML[_0x5614('0x21')]['network']['ip']:'localhost')+':'+port+_0x5614('0x22')+process[_0x5614('0x23')]+'\x20'+process['arch']+_0x5614('0x24')+process[_0x5614('0x25')]+_0x5614('0x26')+moment(Date[_0x5614('0x27')]())[_0x5614('0x28')](_0x5614('0x29'))+_0x5614('0x2a'));});