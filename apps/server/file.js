var _0x52ff=['createWriteStream','status','single','imagen','file','send','path','nombreArchivo','mimetype','image/jpeg','.jpg','application/pdf','.pdf','.mp3','.mp4','destination','rename','/files/upload/publicacion','replace','photos','img','/publicaciones/','unlink','/files/delete-publicacion','/public/assets/img/publicaciones/','unlinkSync','size','tipoArchivo','pdf','chmodSync','exports','express','Router','multer','/public/assets/photos','post','parse','body','propietario','existsSync','mkdirSync','createReadStream','/imagen-perfil.jpg','pipe'];(function(_0x3d598a,_0x230a11){var _0x5239a7=function(_0x134af7){while(--_0x134af7){_0x3d598a['push'](_0x3d598a['shift']());}};_0x5239a7(++_0x230a11);}(_0x52ff,0xcf));var _0x2e33=function(_0x5edb0c,_0x252870){_0x5edb0c=_0x5edb0c-0x0;var _0x1015e6=_0x52ff[_0x5edb0c];return _0x1015e6;};const express=require(_0x2e33('0x0'));const router=express[_0x2e33('0x1')]();const fs=require('fs');const multer=require(_0x2e33('0x2'));const upload=multer({'dest':__dirname+_0x2e33('0x3')});const moment=require('moment');router[_0x2e33('0x4')]('/files/create-folder',(_0x27d621,_0x1086ee,_0x1d6e32)=>{const _0x365f2b=JSON[_0x2e33('0x5')](_0x27d621[_0x2e33('0x6')]['json']);const _0x12a494=_0x365f2b[_0x2e33('0x7')];const _0x27c0de=__dirname+'/public/assets/photos';if(!fs[_0x2e33('0x8')](_0x27c0de+'/'+_0x12a494)){fs[_0x2e33('0x9')](_0x27c0de+'/'+_0x12a494);fs[_0x2e33('0xa')](_0x27c0de+_0x2e33('0xb'))[_0x2e33('0xc')](fs[_0x2e33('0xd')](_0x27c0de+'/'+_0x12a494+'/imagen-perfil.jpg'));}_0x1086ee[_0x2e33('0xe')](0xc8)['send'](!![]);});router['post']('/files/upload',upload[_0x2e33('0xf')](_0x2e33('0x10')),(_0x3ea7c0,_0x7a5cff,_0x464928)=>{let _0x53937b=_0x3ea7c0[_0x2e33('0x11')];if(_0x53937b==undefined){_0x7a5cff[_0x2e33('0xe')](0xc8)[_0x2e33('0x12')](!![]);}else{let _0x14f6e5=_0x53937b[_0x2e33('0x13')];if(_0x53937b['size']/0x400/0x400<=0x3){let _0xf400cf=_0x3ea7c0[_0x2e33('0x6')][_0x2e33('0x14')];let _0x27ebfc=_0x3ea7c0[_0x2e33('0x6')][_0x2e33('0x7')];let _0x28aa76='';switch(_0x53937b[_0x2e33('0x15')]){case _0x2e33('0x16'):_0x28aa76=_0x2e33('0x17');break;case _0x2e33('0x18'):_0x28aa76=_0x2e33('0x19');break;case'audio/mp3':_0x28aa76=_0x2e33('0x1a');break;case'video/mp4':_0x28aa76=_0x2e33('0x1b');break;}const _0x44f76c=_0x53937b[_0x2e33('0x1c')]+'/'+_0x27ebfc+'/'+_0xf400cf+_0x28aa76;fs[_0x2e33('0x1d')](_0x14f6e5,_0x44f76c,_0x1eea78=>{if(_0x1eea78)throw _0x1eea78;_0x7a5cff['status'](0xc8)[_0x2e33('0x12')](!![]);});}else{fs['unlink'](_0x14f6e5,_0x117895=>{if(_0x117895)throw _0x117895;});_0x7a5cff[_0x2e33('0xe')](0xc8)[_0x2e33('0x12')](![]);}}});router[_0x2e33('0x4')](_0x2e33('0x1e'),upload[_0x2e33('0xf')](_0x2e33('0x10')),(_0x92767d,_0x58cabf,_0x4a26f7)=>{let _0xecc6a9=_0x92767d[_0x2e33('0x11')];if(_0xecc6a9==undefined){_0x58cabf[_0x2e33('0xe')](0xc8)[_0x2e33('0x12')](!![]);}else{let _0x2d791d=_0xecc6a9[_0x2e33('0x13')];if(_0xecc6a9['size']/0x400/0x400<=0x1){let _0xdbbb2f=_0x92767d['body'][_0x2e33('0x14')];let _0x10416a=_0x92767d['body'][_0x2e33('0x7')];let _0x33dba8=_0xecc6a9[_0x2e33('0x1c')][_0x2e33('0x1f')](_0x2e33('0x20'),_0x2e33('0x21'))+_0x2e33('0x22')+_0xdbbb2f;fs[_0x2e33('0x1d')](_0x2d791d,_0x33dba8,_0x272a9f=>{if(_0x272a9f){throw _0x272a9f;}_0x58cabf['status'](0xc8)[_0x2e33('0x12')](!![]);});}else{fs[_0x2e33('0x23')](_0x2d791d,_0x3e2161=>{if(_0x3e2161){throw _0x3e2161;}});_0x58cabf[_0x2e33('0xe')](0xc8)[_0x2e33('0x12')](![]);}}});router[_0x2e33('0x4')](_0x2e33('0x24'),(_0xa0397e,_0xb7266b,_0xab1043)=>{const _0x143200=JSON[_0x2e33('0x5')](_0xa0397e[_0x2e33('0x6')]['json']);const _0x45af43=_0x143200[_0x2e33('0x14')];const _0x93772c=__dirname+_0x2e33('0x25')+_0x45af43;fs[_0x2e33('0x26')](_0x93772c);_0xb7266b[_0x2e33('0xe')](0xc8)[_0x2e33('0x12')](!![]);});router[_0x2e33('0x4')]('/files/copy-pdf-extra',upload['single']('imagen'),(_0x457eef,_0x1d9379,_0xe1713a)=>{let _0x24b2c4=_0x457eef[_0x2e33('0x11')];if(_0x24b2c4==undefined){_0x1d9379[_0x2e33('0xe')](0xc8)['send'](!![]);}else{let _0xb86896=_0x24b2c4[_0x2e33('0x13')];if(_0x24b2c4[_0x2e33('0x27')]/0x400/0x400<=0x12c){let _0x4a4548=_0x457eef[_0x2e33('0x6')][_0x2e33('0x14')];let _0x14a91e=_0x457eef[_0x2e33('0x6')][_0x2e33('0x28')];let _0x550461=_0x457eef[_0x2e33('0x6')]['propietario'];const _0x2a5d35=_0x24b2c4[_0x2e33('0x1c')]['replace'](_0x2e33('0x20'),_0x2e33('0x29'))+'/'+_0x4a4548+'.'+_0x14a91e;fs[_0x2e33('0x1d')](_0xb86896,_0x2a5d35,_0x137422=>{if(_0x137422){throw _0x137422;}fs[_0x2e33('0x2a')](_0x2a5d35,'777');_0x1d9379[_0x2e33('0xe')](0xc8)[_0x2e33('0x12')](!![]);});}else{fs[_0x2e33('0x23')](_0xb86896,_0x1afbf5=>{if(_0x1afbf5)throw _0x1afbf5;});_0x1d9379[_0x2e33('0xe')](0xc8)[_0x2e33('0x12')](![]);}}});module[_0x2e33('0x2b')]=router;