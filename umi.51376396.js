!(function(){var mf=Object.defineProperty,yf=Object.defineProperties;var Ef=Object.getOwnPropertyDescriptors;var $c=Object.getOwnPropertySymbols;var Sf=Object.prototype.hasOwnProperty,bf=Object.prototype.propertyIsEnumerable;var Hc=(s,v,e)=>v in s?mf(s,v,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[v]=e,Zc=(s,v)=>{for(var e in v||(v={}))Sf.call(v,e)&&Hc(s,e,v[e]);if($c)for(var e of $c(v))bf.call(v,e)&&Hc(s,e,v[e]);return s},Wc=(s,v)=>yf(s,Ef(v));(function(){var __webpack_modules__={47187:function(s,v,e){"use strict";e.d(v,{kG:function(){return p}});function o(m){return Math.floor(Math.log(m)*Math.LOG10E)}function a(m,E){if(typeof m.repeat=="function")return m.repeat(E);for(var b=new Array(E),w=0;w<b.length;w++)b[w]=m;return b.join("")}function r(m,E,b,w){m.get(E)||m.set(E,Object.create(null));var x=m.get(E);x[b]=w}function l(m,E,b){for(var w=0,x=Object.keys(b);w<x.length;w++){var R=x[w];r(m,E,R,b[R])}}function i(m,E,b){return d(m,E,b)[b]}function d(m,E){for(var b=[],w=2;w<arguments.length;w++)b[w-2]=arguments[w];var x=m.get(E);if(!x)throw new TypeError("".concat(E," InternalSlot has not been initialized"));return b.reduce(function(R,P){return R[P]=x[P],R},Object.create(null))}function f(m){return m.type==="literal"}function g(m,E,b){var w=b.value;Object.defineProperty(m,E,{configurable:!0,enumerable:!1,writable:!0,value:w})}var h=/-u(?:-[0-9a-z]{2,8})+/gi;function p(m,E,b){if(b===void 0&&(b=Error),!m)throw new b(E)}},27017:function(s,v,e){"use strict";e.d(v,{A:function(){return E},H:function(){return o}});function o(b,w){var x=w&&w.cache?w.cache:m,R=w&&w.serializer?w.serializer:h,P=w&&w.strategy?w.strategy:d;return P(b,{cache:x,serializer:R})}function a(b){return b==null||typeof b=="number"||typeof b=="boolean"}function r(b,w,x,R){var P=a(R)?R:x(R),j=w.get(P);return typeof j=="undefined"&&(j=b.call(this,R),w.set(P,j)),j}function l(b,w,x){var R=Array.prototype.slice.call(arguments,3),P=x(R),j=w.get(P);return typeof j=="undefined"&&(j=b.apply(this,R),w.set(P,j)),j}function i(b,w,x,R,P){return x.bind(w,b,R,P)}function d(b,w){var x=b.length===1?r:l;return i(b,this,x,w.cache.create(),w.serializer)}function f(b,w){return i(b,this,l,w.cache.create(),w.serializer)}function g(b,w){return i(b,this,r,w.cache.create(),w.serializer)}var h=function(){return JSON.stringify(arguments)};function p(){this.cache=Object.create(null)}p.prototype.get=function(b){return this.cache[b]},p.prototype.set=function(b,w){this.cache[b]=w};var m={create:function(){return new p}},E={variadic:f,monadic:g}},66190:function(s,v,e){"use strict";e.d(v,{wD:function(){return r},VG:function(){return d},rp:function(){return g},Ii:function(){return x},O4:function(){return i},uf:function(){return f},Wh:function(){return w},Jo:function(){return m},yx:function(){return E},Wi:function(){return p},HI:function(){return b},pe:function(){return h},Qc:function(){return He}});var o=e(32290),a;(function(y){y[y.EXPECT_ARGUMENT_CLOSING_BRACE=1]="EXPECT_ARGUMENT_CLOSING_BRACE",y[y.EMPTY_ARGUMENT=2]="EMPTY_ARGUMENT",y[y.MALFORMED_ARGUMENT=3]="MALFORMED_ARGUMENT",y[y.EXPECT_ARGUMENT_TYPE=4]="EXPECT_ARGUMENT_TYPE",y[y.INVALID_ARGUMENT_TYPE=5]="INVALID_ARGUMENT_TYPE",y[y.EXPECT_ARGUMENT_STYLE=6]="EXPECT_ARGUMENT_STYLE",y[y.INVALID_NUMBER_SKELETON=7]="INVALID_NUMBER_SKELETON",y[y.INVALID_DATE_TIME_SKELETON=8]="INVALID_DATE_TIME_SKELETON",y[y.EXPECT_NUMBER_SKELETON=9]="EXPECT_NUMBER_SKELETON",y[y.EXPECT_DATE_TIME_SKELETON=10]="EXPECT_DATE_TIME_SKELETON",y[y.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE=11]="UNCLOSED_QUOTE_IN_ARGUMENT_STYLE",y[y.EXPECT_SELECT_ARGUMENT_OPTIONS=12]="EXPECT_SELECT_ARGUMENT_OPTIONS",y[y.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE=13]="EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE",y[y.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE=14]="INVALID_PLURAL_ARGUMENT_OFFSET_VALUE",y[y.EXPECT_SELECT_ARGUMENT_SELECTOR=15]="EXPECT_SELECT_ARGUMENT_SELECTOR",y[y.EXPECT_PLURAL_ARGUMENT_SELECTOR=16]="EXPECT_PLURAL_ARGUMENT_SELECTOR",y[y.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT=17]="EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT",y[y.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT=18]="EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT",y[y.INVALID_PLURAL_ARGUMENT_SELECTOR=19]="INVALID_PLURAL_ARGUMENT_SELECTOR",y[y.DUPLICATE_PLURAL_ARGUMENT_SELECTOR=20]="DUPLICATE_PLURAL_ARGUMENT_SELECTOR",y[y.DUPLICATE_SELECT_ARGUMENT_SELECTOR=21]="DUPLICATE_SELECT_ARGUMENT_SELECTOR",y[y.MISSING_OTHER_CLAUSE=22]="MISSING_OTHER_CLAUSE",y[y.INVALID_TAG=23]="INVALID_TAG",y[y.INVALID_TAG_NAME=25]="INVALID_TAG_NAME",y[y.UNMATCHED_CLOSING_TAG=26]="UNMATCHED_CLOSING_TAG",y[y.UNCLOSED_TAG=27]="UNCLOSED_TAG"})(a||(a={}));var r;(function(y){y[y.literal=0]="literal",y[y.argument=1]="argument",y[y.number=2]="number",y[y.date=3]="date",y[y.time=4]="time",y[y.select=5]="select",y[y.plural=6]="plural",y[y.pound=7]="pound",y[y.tag=8]="tag"})(r||(r={}));var l;(function(y){y[y.number=0]="number",y[y.dateTime=1]="dateTime"})(l||(l={}));function i(y){return y.type===r.literal}function d(y){return y.type===r.argument}function f(y){return y.type===r.number}function g(y){return y.type===r.date}function h(y){return y.type===r.time}function p(y){return y.type===r.select}function m(y){return y.type===r.plural}function E(y){return y.type===r.pound}function b(y){return y.type===r.tag}function w(y){return!!(y&&typeof y=="object"&&y.type===l.number)}function x(y){return!!(y&&typeof y=="object"&&y.type===l.dateTime)}function R(y){return{type:r.literal,value:y}}function P(y,Q){return{type:r.number,value:y,style:Q}}var j=/[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,N=/[\t-\r \x85\u200E\u200F\u2028\u2029]/,F=/(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;function A(y){var Q={};return y.replace(F,function(be){var we=be.length;switch(be[0]){case"G":Q.era=we===4?"long":we===5?"narrow":"short";break;case"y":Q.year=we===2?"2-digit":"numeric";break;case"Y":case"u":case"U":case"r":throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");case"q":case"Q":throw new RangeError("`q/Q` (quarter) patterns are not supported");case"M":case"L":Q.month=["numeric","2-digit","short","long","narrow"][we-1];break;case"w":case"W":throw new RangeError("`w/W` (week) patterns are not supported");case"d":Q.day=["numeric","2-digit"][we-1];break;case"D":case"F":case"g":throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");case"E":Q.weekday=we===4?"long":we===5?"narrow":"short";break;case"e":if(we<4)throw new RangeError("`e..eee` (weekday) patterns are not supported");Q.weekday=["short","long","narrow","short"][we-4];break;case"c":if(we<4)throw new RangeError("`c..ccc` (weekday) patterns are not supported");Q.weekday=["short","long","narrow","short"][we-4];break;case"a":Q.hour12=!0;break;case"b":case"B":throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");case"h":Q.hourCycle="h12",Q.hour=["numeric","2-digit"][we-1];break;case"H":Q.hourCycle="h23",Q.hour=["numeric","2-digit"][we-1];break;case"K":Q.hourCycle="h11",Q.hour=["numeric","2-digit"][we-1];break;case"k":Q.hourCycle="h24",Q.hour=["numeric","2-digit"][we-1];break;case"j":case"J":case"C":throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");case"m":Q.minute=["numeric","2-digit"][we-1];break;case"s":Q.second=["numeric","2-digit"][we-1];break;case"S":case"A":throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");case"z":Q.timeZoneName=we<4?"short":"long";break;case"Z":case"O":case"v":case"V":case"X":case"x":throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")}return""}),Q}var k=/[\t-\r \x85\u200E\u200F\u2028\u2029]/i;function z(y){if(y.length===0)throw new Error("Number skeleton cannot be empty");for(var Q=y.split(k).filter(function(tt){return tt.length>0}),be=[],we=0,ze=Q;we<ze.length;we++){var We=ze[we],Pe=We.split("/");if(Pe.length===0)throw new Error("Invalid number skeleton");for(var Xe=Pe[0],ct=Pe.slice(1),Ve=0,Pt=ct;Ve<Pt.length;Ve++){var xe=Pt[Ve];if(xe.length===0)throw new Error("Invalid number skeleton")}be.push({stem:Xe,options:ct})}return be}function K(y){return y.replace(/^(.*?)-/,"")}var ee=/^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,J=/^(@+)?(\+|#+)?[rs]?$/g,ce=/(\*)(0+)|(#+)(0+)|(0+)/g,Te=/^(0+)$/;function Oe(y){var Q={};return y[y.length-1]==="r"?Q.roundingPriority="morePrecision":y[y.length-1]==="s"&&(Q.roundingPriority="lessPrecision"),y.replace(J,function(be,we,ze){return typeof ze!="string"?(Q.minimumSignificantDigits=we.length,Q.maximumSignificantDigits=we.length):ze==="+"?Q.minimumSignificantDigits=we.length:we[0]==="#"?Q.maximumSignificantDigits=we.length:(Q.minimumSignificantDigits=we.length,Q.maximumSignificantDigits=we.length+(typeof ze=="string"?ze.length:0)),""}),Q}function Ne(y){switch(y){case"sign-auto":return{signDisplay:"auto"};case"sign-accounting":case"()":return{currencySign:"accounting"};case"sign-always":case"+!":return{signDisplay:"always"};case"sign-accounting-always":case"()!":return{signDisplay:"always",currencySign:"accounting"};case"sign-except-zero":case"+?":return{signDisplay:"exceptZero"};case"sign-accounting-except-zero":case"()?":return{signDisplay:"exceptZero",currencySign:"accounting"};case"sign-never":case"+_":return{signDisplay:"never"}}}function _e(y){var Q;if(y[0]==="E"&&y[1]==="E"?(Q={notation:"engineering"},y=y.slice(2)):y[0]==="E"&&(Q={notation:"scientific"},y=y.slice(1)),Q){var be=y.slice(0,2);if(be==="+!"?(Q.signDisplay="always",y=y.slice(2)):be==="+?"&&(Q.signDisplay="exceptZero",y=y.slice(2)),!Te.test(y))throw new Error("Malformed concise eng/scientific notation");Q.minimumIntegerDigits=y.length}return Q}function je(y){var Q={},be=Ne(y);return be||Q}function q(y){for(var Q={},be=0,we=y;be<we.length;be++){var ze=we[be];switch(ze.stem){case"percent":case"%":Q.style="percent";continue;case"%x100":Q.style="percent",Q.scale=100;continue;case"currency":Q.style="currency",Q.currency=ze.options[0];continue;case"group-off":case",_":Q.useGrouping=!1;continue;case"precision-integer":case".":Q.maximumFractionDigits=0;continue;case"measure-unit":case"unit":Q.style="unit",Q.unit=K(ze.options[0]);continue;case"compact-short":case"K":Q.notation="compact",Q.compactDisplay="short";continue;case"compact-long":case"KK":Q.notation="compact",Q.compactDisplay="long";continue;case"scientific":Q=(0,o.pi)((0,o.pi)((0,o.pi)({},Q),{notation:"scientific"}),ze.options.reduce(function(ct,Ve){return(0,o.pi)((0,o.pi)({},ct),je(Ve))},{}));continue;case"engineering":Q=(0,o.pi)((0,o.pi)((0,o.pi)({},Q),{notation:"engineering"}),ze.options.reduce(function(ct,Ve){return(0,o.pi)((0,o.pi)({},ct),je(Ve))},{}));continue;case"notation-simple":Q.notation="standard";continue;case"unit-width-narrow":Q.currencyDisplay="narrowSymbol",Q.unitDisplay="narrow";continue;case"unit-width-short":Q.currencyDisplay="code",Q.unitDisplay="short";continue;case"unit-width-full-name":Q.currencyDisplay="name",Q.unitDisplay="long";continue;case"unit-width-iso-code":Q.currencyDisplay="symbol";continue;case"scale":Q.scale=parseFloat(ze.options[0]);continue;case"integer-width":if(ze.options.length>1)throw new RangeError("integer-width stems only accept a single optional option");ze.options[0].replace(ce,function(ct,Ve,Pt,xe,tt,Ze){if(Ve)Q.minimumIntegerDigits=Pt.length;else{if(xe&&tt)throw new Error("We currently do not support maximum integer digits");if(Ze)throw new Error("We currently do not support exact integer digits")}return""});continue}if(Te.test(ze.stem)){Q.minimumIntegerDigits=ze.stem.length;continue}if(ee.test(ze.stem)){if(ze.options.length>1)throw new RangeError("Fraction-precision stems only accept a single optional option");ze.stem.replace(ee,function(ct,Ve,Pt,xe,tt,Ze){return Pt==="*"?Q.minimumFractionDigits=Ve.length:xe&&xe[0]==="#"?Q.maximumFractionDigits=xe.length:tt&&Ze?(Q.minimumFractionDigits=tt.length,Q.maximumFractionDigits=tt.length+Ze.length):(Q.minimumFractionDigits=Ve.length,Q.maximumFractionDigits=Ve.length),""});var We=ze.options[0];We==="w"?Q=(0,o.pi)((0,o.pi)({},Q),{trailingZeroDisplay:"stripIfInteger"}):We&&(Q=(0,o.pi)((0,o.pi)({},Q),Oe(We)));continue}if(J.test(ze.stem)){Q=(0,o.pi)((0,o.pi)({},Q),Oe(ze.stem));continue}var Pe=Ne(ze.stem);Pe&&(Q=(0,o.pi)((0,o.pi)({},Q),Pe));var Xe=_e(ze.stem);Xe&&(Q=(0,o.pi)((0,o.pi)({},Q),Xe))}return Q}var re={"001":["H","h"],AC:["H","h","hb","hB"],AD:["H","hB"],AE:["h","hB","hb","H"],AF:["H","hb","hB","h"],AG:["h","hb","H","hB"],AI:["H","h","hb","hB"],AL:["h","H","hB"],AM:["H","hB"],AO:["H","hB"],AR:["H","h","hB","hb"],AS:["h","H"],AT:["H","hB"],AU:["h","hb","H","hB"],AW:["H","hB"],AX:["H"],AZ:["H","hB","h"],BA:["H","hB","h"],BB:["h","hb","H","hB"],BD:["h","hB","H"],BE:["H","hB"],BF:["H","hB"],BG:["H","hB","h"],BH:["h","hB","hb","H"],BI:["H","h"],BJ:["H","hB"],BL:["H","hB"],BM:["h","hb","H","hB"],BN:["hb","hB","h","H"],BO:["H","hB","h","hb"],BQ:["H"],BR:["H","hB"],BS:["h","hb","H","hB"],BT:["h","H"],BW:["H","h","hb","hB"],BY:["H","h"],BZ:["H","h","hb","hB"],CA:["h","hb","H","hB"],CC:["H","h","hb","hB"],CD:["hB","H"],CF:["H","h","hB"],CG:["H","hB"],CH:["H","hB","h"],CI:["H","hB"],CK:["H","h","hb","hB"],CL:["H","h","hB","hb"],CM:["H","h","hB"],CN:["H","hB","hb","h"],CO:["h","H","hB","hb"],CP:["H"],CR:["H","h","hB","hb"],CU:["H","h","hB","hb"],CV:["H","hB"],CW:["H","hB"],CX:["H","h","hb","hB"],CY:["h","H","hb","hB"],CZ:["H"],DE:["H","hB"],DG:["H","h","hb","hB"],DJ:["h","H"],DK:["H"],DM:["h","hb","H","hB"],DO:["h","H","hB","hb"],DZ:["h","hB","hb","H"],EA:["H","h","hB","hb"],EC:["H","hB","h","hb"],EE:["H","hB"],EG:["h","hB","hb","H"],EH:["h","hB","hb","H"],ER:["h","H"],ES:["H","hB","h","hb"],ET:["hB","hb","h","H"],FI:["H"],FJ:["h","hb","H","hB"],FK:["H","h","hb","hB"],FM:["h","hb","H","hB"],FO:["H","h"],FR:["H","hB"],GA:["H","hB"],GB:["H","h","hb","hB"],GD:["h","hb","H","hB"],GE:["H","hB","h"],GF:["H","hB"],GG:["H","h","hb","hB"],GH:["h","H"],GI:["H","h","hb","hB"],GL:["H","h"],GM:["h","hb","H","hB"],GN:["H","hB"],GP:["H","hB"],GQ:["H","hB","h","hb"],GR:["h","H","hb","hB"],GT:["H","h","hB","hb"],GU:["h","hb","H","hB"],GW:["H","hB"],GY:["h","hb","H","hB"],HK:["h","hB","hb","H"],HN:["H","h","hB","hb"],HR:["H","hB"],HU:["H","h"],IC:["H","h","hB","hb"],ID:["H"],IE:["H","h","hb","hB"],IL:["H","hB"],IM:["H","h","hb","hB"],IN:["h","H"],IO:["H","h","hb","hB"],IQ:["h","hB","hb","H"],IR:["hB","H"],IS:["H"],IT:["H","hB"],JE:["H","h","hb","hB"],JM:["h","hb","H","hB"],JO:["h","hB","hb","H"],JP:["H","K","h"],KE:["hB","hb","H","h"],KG:["H","h","hB","hb"],KH:["hB","h","H","hb"],KI:["h","hb","H","hB"],KM:["H","h","hB","hb"],KN:["h","hb","H","hB"],KP:["h","H","hB","hb"],KR:["h","H","hB","hb"],KW:["h","hB","hb","H"],KY:["h","hb","H","hB"],KZ:["H","hB"],LA:["H","hb","hB","h"],LB:["h","hB","hb","H"],LC:["h","hb","H","hB"],LI:["H","hB","h"],LK:["H","h","hB","hb"],LR:["h","hb","H","hB"],LS:["h","H"],LT:["H","h","hb","hB"],LU:["H","h","hB"],LV:["H","hB","hb","h"],LY:["h","hB","hb","H"],MA:["H","h","hB","hb"],MC:["H","hB"],MD:["H","hB"],ME:["H","hB","h"],MF:["H","hB"],MG:["H","h"],MH:["h","hb","H","hB"],MK:["H","h","hb","hB"],ML:["H"],MM:["hB","hb","H","h"],MN:["H","h","hb","hB"],MO:["h","hB","hb","H"],MP:["h","hb","H","hB"],MQ:["H","hB"],MR:["h","hB","hb","H"],MS:["H","h","hb","hB"],MT:["H","h"],MU:["H","h"],MV:["H","h"],MW:["h","hb","H","hB"],MX:["H","h","hB","hb"],MY:["hb","hB","h","H"],MZ:["H","hB"],NA:["h","H","hB","hb"],NC:["H","hB"],NE:["H"],NF:["H","h","hb","hB"],NG:["H","h","hb","hB"],NI:["H","h","hB","hb"],NL:["H","hB"],NO:["H","h"],NP:["H","h","hB"],NR:["H","h","hb","hB"],NU:["H","h","hb","hB"],NZ:["h","hb","H","hB"],OM:["h","hB","hb","H"],PA:["h","H","hB","hb"],PE:["H","hB","h","hb"],PF:["H","h","hB"],PG:["h","H"],PH:["h","hB","hb","H"],PK:["h","hB","H"],PL:["H","h"],PM:["H","hB"],PN:["H","h","hb","hB"],PR:["h","H","hB","hb"],PS:["h","hB","hb","H"],PT:["H","hB"],PW:["h","H"],PY:["H","h","hB","hb"],QA:["h","hB","hb","H"],RE:["H","hB"],RO:["H","hB"],RS:["H","hB","h"],RU:["H"],RW:["H","h"],SA:["h","hB","hb","H"],SB:["h","hb","H","hB"],SC:["H","h","hB"],SD:["h","hB","hb","H"],SE:["H"],SG:["h","hb","H","hB"],SH:["H","h","hb","hB"],SI:["H","hB"],SJ:["H"],SK:["H"],SL:["h","hb","H","hB"],SM:["H","h","hB"],SN:["H","h","hB"],SO:["h","H"],SR:["H","hB"],SS:["h","hb","H","hB"],ST:["H","hB"],SV:["H","h","hB","hb"],SX:["H","h","hb","hB"],SY:["h","hB","hb","H"],SZ:["h","hb","H","hB"],TA:["H","h","hb","hB"],TC:["h","hb","H","hB"],TD:["h","H","hB"],TF:["H","h","hB"],TG:["H","hB"],TH:["H","h"],TJ:["H","h"],TL:["H","hB","hb","h"],TM:["H","h"],TN:["h","hB","hb","H"],TO:["h","H"],TR:["H","hB"],TT:["h","hb","H","hB"],TW:["hB","hb","h","H"],TZ:["hB","hb","H","h"],UA:["H","hB","h"],UG:["hB","hb","H","h"],UM:["h","hb","H","hB"],US:["h","hb","H","hB"],UY:["H","h","hB","hb"],UZ:["H","hB","h"],VA:["H","h","hB"],VC:["h","hb","H","hB"],VE:["h","H","hB","hb"],VG:["h","hb","H","hB"],VI:["h","hb","H","hB"],VN:["H","h"],VU:["h","H"],WF:["H","hB"],WS:["h","H"],XK:["H","hB","h"],YE:["h","hB","hb","H"],YT:["H","hB"],ZA:["H","h","hb","hB"],ZM:["h","hb","H","hB"],ZW:["H","h"],"af-ZA":["H","h","hB","hb"],"ar-001":["h","hB","hb","H"],"ca-ES":["H","h","hB"],"en-001":["h","hb","H","hB"],"es-BO":["H","h","hB","hb"],"es-BR":["H","h","hB","hb"],"es-EC":["H","h","hB","hb"],"es-ES":["H","h","hB","hb"],"es-GQ":["H","h","hB","hb"],"es-PE":["H","h","hB","hb"],"fr-CA":["H","h","hB"],"gl-ES":["H","h","hB"],"gu-IN":["hB","hb","h","H"],"hi-IN":["hB","h","H"],"it-CH":["H","h","hB"],"it-IT":["H","h","hB"],"kn-IN":["hB","h","H"],"ml-IN":["hB","h","H"],"mr-IN":["hB","hb","h","H"],"pa-IN":["hB","hb","h","H"],"ta-IN":["hB","h","hb","H"],"te-IN":["hB","h","H"],"zu-ZA":["H","hB","hb","h"]};function ae(y,Q){for(var be="",we=0;we<y.length;we++){var ze=y.charAt(we);if(ze==="j"){for(var We=0;we+1<y.length&&y.charAt(we+1)===ze;)We++,we++;var Pe=1+(We&1),Xe=We<2?1:3+(We>>1),ct="a",Ve=O(Q);for((Ve=="H"||Ve=="k")&&(Xe=0);Xe-- >0;)be+=ct;for(;Pe-- >0;)be=Ve+be}else ze==="J"?be+="H":be+=ze}return be}function O(y){var Q=y.hourCycle;if(Q===void 0&&y.hourCycles&&y.hourCycles.length&&(Q=y.hourCycles[0]),Q)switch(Q){case"h24":return"k";case"h23":return"H";case"h12":return"h";case"h11":return"K";default:throw new Error("Invalid hourCycle")}var be=y.language,we;be!=="root"&&(we=y.maximize().region);var ze=re[we||""]||re[be||""]||re["".concat(be,"-001")]||re["001"];return ze[0]}var L,W=new RegExp("^".concat(j.source,"*")),V=new RegExp("".concat(j.source,"*$"));function G(y,Q){return{start:y,end:Q}}var I=!!String.prototype.startsWith&&"_a".startsWith("a",1),H=!!String.fromCodePoint,$=!!Object.fromEntries,Y=!!String.prototype.codePointAt,X=!!String.prototype.trimStart,Re=!!String.prototype.trimEnd,Fe=!!Number.isSafeInteger,at=Fe?Number.isSafeInteger:function(y){return typeof y=="number"&&isFinite(y)&&Math.floor(y)===y&&Math.abs(y)<=9007199254740991},et=!0;try{var Ke=ue("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");et=((L=Ke.exec("a"))===null||L===void 0?void 0:L[0])==="a"}catch(y){et=!1}var ot=I?function(Q,be,we){return Q.startsWith(be,we)}:function(Q,be,we){return Q.slice(we,we+be.length)===be},te=H?String.fromCodePoint:function(){for(var Q=[],be=0;be<arguments.length;be++)Q[be]=arguments[be];for(var we="",ze=Q.length,We=0,Pe;ze>We;){if(Pe=Q[We++],Pe>1114111)throw RangeError(Pe+" is not a valid code point");we+=Pe<65536?String.fromCharCode(Pe):String.fromCharCode(((Pe-=65536)>>10)+55296,Pe%1024+56320)}return we},fe=$?Object.fromEntries:function(Q){for(var be={},we=0,ze=Q;we<ze.length;we++){var We=ze[we],Pe=We[0],Xe=We[1];be[Pe]=Xe}return be},pe=Y?function(Q,be){return Q.codePointAt(be)}:function(Q,be){var we=Q.length;if(!(be<0||be>=we)){var ze=Q.charCodeAt(be),We;return ze<55296||ze>56319||be+1===we||(We=Q.charCodeAt(be+1))<56320||We>57343?ze:(ze-55296<<10)+(We-56320)+65536}},me=X?function(Q){return Q.trimStart()}:function(Q){return Q.replace(W,"")},Ie=Re?function(Q){return Q.trimEnd()}:function(Q){return Q.replace(V,"")};function ue(y,Q){return new RegExp(y,Q)}var ve;if(et){var Ee=ue("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");ve=function(Q,be){var we;Ee.lastIndex=be;var ze=Ee.exec(Q);return(we=ze[1])!==null&&we!==void 0?we:""}}else ve=function(Q,be){for(var we=[];;){var ze=pe(Q,be);if(ze===void 0||he(ze)||Ae(ze))break;we.push(ze),be+=ze>=65536?2:1}return te.apply(void 0,we)};var le=function(){function y(Q,be){be===void 0&&(be={}),this.message=Q,this.position={offset:0,line:1,column:1},this.ignoreTag=!!be.ignoreTag,this.locale=be.locale,this.requiresOtherClause=!!be.requiresOtherClause,this.shouldParseSkeletons=!!be.shouldParseSkeletons}return y.prototype.parse=function(){if(this.offset()!==0)throw Error("parser can only be used once");return this.parseMessage(0,"",!1)},y.prototype.parseMessage=function(Q,be,we){for(var ze=[];!this.isEOF();){var We=this.char();if(We===123){var Pe=this.parseArgument(Q,we);if(Pe.err)return Pe;ze.push(Pe.val)}else{if(We===125&&Q>0)break;if(We===35&&(be==="plural"||be==="selectordinal")){var Xe=this.clonePosition();this.bump(),ze.push({type:r.pound,location:G(Xe,this.clonePosition())})}else if(We===60&&!this.ignoreTag&&this.peek()===47){if(we)break;return this.error(a.UNMATCHED_CLOSING_TAG,G(this.clonePosition(),this.clonePosition()))}else if(We===60&&!this.ignoreTag&&ye(this.peek()||0)){var Pe=this.parseTag(Q,be);if(Pe.err)return Pe;ze.push(Pe.val)}else{var Pe=this.parseLiteral(Q,be);if(Pe.err)return Pe;ze.push(Pe.val)}}}return{val:ze,err:null}},y.prototype.parseTag=function(Q,be){var we=this.clonePosition();this.bump();var ze=this.parseTagName();if(this.bumpSpace(),this.bumpIf("/>"))return{val:{type:r.literal,value:"<".concat(ze,"/>"),location:G(we,this.clonePosition())},err:null};if(this.bumpIf(">")){var We=this.parseMessage(Q+1,be,!0);if(We.err)return We;var Pe=We.val,Xe=this.clonePosition();if(this.bumpIf("</")){if(this.isEOF()||!ye(this.char()))return this.error(a.INVALID_TAG,G(Xe,this.clonePosition()));var ct=this.clonePosition(),Ve=this.parseTagName();return ze!==Ve?this.error(a.UNMATCHED_CLOSING_TAG,G(ct,this.clonePosition())):(this.bumpSpace(),this.bumpIf(">")?{val:{type:r.tag,value:ze,children:Pe,location:G(we,this.clonePosition())},err:null}:this.error(a.INVALID_TAG,G(Xe,this.clonePosition())))}else return this.error(a.UNCLOSED_TAG,G(we,this.clonePosition()))}else return this.error(a.INVALID_TAG,G(we,this.clonePosition()))},y.prototype.parseTagName=function(){var Q=this.offset();for(this.bump();!this.isEOF()&&oe(this.char());)this.bump();return this.message.slice(Q,this.offset())},y.prototype.parseLiteral=function(Q,be){for(var we=this.clonePosition(),ze="";;){var We=this.tryParseQuote(be);if(We){ze+=We;continue}var Pe=this.tryParseUnquoted(Q,be);if(Pe){ze+=Pe;continue}var Xe=this.tryParseLeftAngleBracket();if(Xe){ze+=Xe;continue}break}var ct=G(we,this.clonePosition());return{val:{type:r.literal,value:ze,location:ct},err:null}},y.prototype.tryParseLeftAngleBracket=function(){return!this.isEOF()&&this.char()===60&&(this.ignoreTag||!Be(this.peek()||0))?(this.bump(),"<"):null},y.prototype.tryParseQuote=function(Q){if(this.isEOF()||this.char()!==39)return null;switch(this.peek()){case 39:return this.bump(),this.bump(),"'";case 123:case 60:case 62:case 125:break;case 35:if(Q==="plural"||Q==="selectordinal")break;return null;default:return null}this.bump();var be=[this.char()];for(this.bump();!this.isEOF();){var we=this.char();if(we===39)if(this.peek()===39)be.push(39),this.bump();else{this.bump();break}else be.push(we);this.bump()}return te.apply(void 0,be)},y.prototype.tryParseUnquoted=function(Q,be){if(this.isEOF())return null;var we=this.char();return we===60||we===123||we===35&&(be==="plural"||be==="selectordinal")||we===125&&Q>0?null:(this.bump(),te(we))},y.prototype.parseArgument=function(Q,be){var we=this.clonePosition();if(this.bump(),this.bumpSpace(),this.isEOF())return this.error(a.EXPECT_ARGUMENT_CLOSING_BRACE,G(we,this.clonePosition()));if(this.char()===125)return this.bump(),this.error(a.EMPTY_ARGUMENT,G(we,this.clonePosition()));var ze=this.parseIdentifierIfPossible().value;if(!ze)return this.error(a.MALFORMED_ARGUMENT,G(we,this.clonePosition()));if(this.bumpSpace(),this.isEOF())return this.error(a.EXPECT_ARGUMENT_CLOSING_BRACE,G(we,this.clonePosition()));switch(this.char()){case 125:return this.bump(),{val:{type:r.argument,value:ze,location:G(we,this.clonePosition())},err:null};case 44:return this.bump(),this.bumpSpace(),this.isEOF()?this.error(a.EXPECT_ARGUMENT_CLOSING_BRACE,G(we,this.clonePosition())):this.parseArgumentOptions(Q,be,ze,we);default:return this.error(a.MALFORMED_ARGUMENT,G(we,this.clonePosition()))}},y.prototype.parseIdentifierIfPossible=function(){var Q=this.clonePosition(),be=this.offset(),we=ve(this.message,be),ze=be+we.length;this.bumpTo(ze);var We=this.clonePosition(),Pe=G(Q,We);return{value:we,location:Pe}},y.prototype.parseArgumentOptions=function(Q,be,we,ze){var We,Pe=this.clonePosition(),Xe=this.parseIdentifierIfPossible().value,ct=this.clonePosition();switch(Xe){case"":return this.error(a.EXPECT_ARGUMENT_TYPE,G(Pe,ct));case"number":case"date":case"time":{this.bumpSpace();var Ve=null;if(this.bumpIf(",")){this.bumpSpace();var Pt=this.clonePosition(),xe=this.parseSimpleArgStyleIfPossible();if(xe.err)return xe;var tt=Ie(xe.val);if(tt.length===0)return this.error(a.EXPECT_ARGUMENT_STYLE,G(this.clonePosition(),this.clonePosition()));var Ze=G(Pt,this.clonePosition());Ve={style:tt,styleLocation:Ze}}var Le=this.tryParseArgumentClose(ze);if(Le.err)return Le;var ut=G(ze,this.clonePosition());if(Ve&&ot(Ve==null?void 0:Ve.style,"::",0)){var st=me(Ve.style.slice(2));if(Xe==="number"){var xe=this.parseNumberSkeletonFromString(st,Ve.styleLocation);return xe.err?xe:{val:{type:r.number,value:we,location:ut,style:xe.val},err:null}}else{if(st.length===0)return this.error(a.EXPECT_DATE_TIME_SKELETON,ut);var bt=st;this.locale&&(bt=ae(st,this.locale));var tt={type:l.dateTime,pattern:bt,location:Ve.styleLocation,parsedOptions:this.shouldParseSkeletons?A(bt):{}},kt=Xe==="date"?r.date:r.time;return{val:{type:kt,value:we,location:ut,style:tt},err:null}}}return{val:{type:Xe==="number"?r.number:Xe==="date"?r.date:r.time,value:we,location:ut,style:(We=Ve==null?void 0:Ve.style)!==null&&We!==void 0?We:null},err:null}}case"plural":case"selectordinal":case"select":{var Kt=this.clonePosition();if(this.bumpSpace(),!this.bumpIf(","))return this.error(a.EXPECT_SELECT_ARGUMENT_OPTIONS,G(Kt,(0,o.pi)({},Kt)));this.bumpSpace();var xn=this.parseIdentifierIfPossible(),dn=0;if(Xe!=="select"&&xn.value==="offset"){if(!this.bumpIf(":"))return this.error(a.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,G(this.clonePosition(),this.clonePosition()));this.bumpSpace();var xe=this.tryParseDecimalInteger(a.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,a.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);if(xe.err)return xe;this.bumpSpace(),xn=this.parseIdentifierIfPossible(),dn=xe.val}var In=this.tryParsePluralOrSelectOptions(Q,Xe,be,xn);if(In.err)return In;var Le=this.tryParseArgumentClose(ze);if(Le.err)return Le;var Bn=G(ze,this.clonePosition());return Xe==="select"?{val:{type:r.select,value:we,options:fe(In.val),location:Bn},err:null}:{val:{type:r.plural,value:we,options:fe(In.val),offset:dn,pluralType:Xe==="plural"?"cardinal":"ordinal",location:Bn},err:null}}default:return this.error(a.INVALID_ARGUMENT_TYPE,G(Pe,ct))}},y.prototype.tryParseArgumentClose=function(Q){return this.isEOF()||this.char()!==125?this.error(a.EXPECT_ARGUMENT_CLOSING_BRACE,G(Q,this.clonePosition())):(this.bump(),{val:!0,err:null})},y.prototype.parseSimpleArgStyleIfPossible=function(){for(var Q=0,be=this.clonePosition();!this.isEOF();){var we=this.char();switch(we){case 39:{this.bump();var ze=this.clonePosition();if(!this.bumpUntil("'"))return this.error(a.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,G(ze,this.clonePosition()));this.bump();break}case 123:{Q+=1,this.bump();break}case 125:{if(Q>0)Q-=1;else return{val:this.message.slice(be.offset,this.offset()),err:null};break}default:this.bump();break}}return{val:this.message.slice(be.offset,this.offset()),err:null}},y.prototype.parseNumberSkeletonFromString=function(Q,be){var we=[];try{we=z(Q)}catch(ze){return this.error(a.INVALID_NUMBER_SKELETON,be)}return{val:{type:l.number,tokens:we,location:be,parsedOptions:this.shouldParseSkeletons?q(we):{}},err:null}},y.prototype.tryParsePluralOrSelectOptions=function(Q,be,we,ze){for(var We,Pe=!1,Xe=[],ct=new Set,Ve=ze.value,Pt=ze.location;;){if(Ve.length===0){var xe=this.clonePosition();if(be!=="select"&&this.bumpIf("=")){var tt=this.tryParseDecimalInteger(a.EXPECT_PLURAL_ARGUMENT_SELECTOR,a.INVALID_PLURAL_ARGUMENT_SELECTOR);if(tt.err)return tt;Pt=G(xe,this.clonePosition()),Ve=this.message.slice(xe.offset,this.offset())}else break}if(ct.has(Ve))return this.error(be==="select"?a.DUPLICATE_SELECT_ARGUMENT_SELECTOR:a.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,Pt);Ve==="other"&&(Pe=!0),this.bumpSpace();var Ze=this.clonePosition();if(!this.bumpIf("{"))return this.error(be==="select"?a.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT:a.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,G(this.clonePosition(),this.clonePosition()));var Le=this.parseMessage(Q+1,be,we);if(Le.err)return Le;var ut=this.tryParseArgumentClose(Ze);if(ut.err)return ut;Xe.push([Ve,{value:Le.val,location:G(Ze,this.clonePosition())}]),ct.add(Ve),this.bumpSpace(),We=this.parseIdentifierIfPossible(),Ve=We.value,Pt=We.location}return Xe.length===0?this.error(be==="select"?a.EXPECT_SELECT_ARGUMENT_SELECTOR:a.EXPECT_PLURAL_ARGUMENT_SELECTOR,G(this.clonePosition(),this.clonePosition())):this.requiresOtherClause&&!Pe?this.error(a.MISSING_OTHER_CLAUSE,G(this.clonePosition(),this.clonePosition())):{val:Xe,err:null}},y.prototype.tryParseDecimalInteger=function(Q,be){var we=1,ze=this.clonePosition();this.bumpIf("+")||this.bumpIf("-")&&(we=-1);for(var We=!1,Pe=0;!this.isEOF();){var Xe=this.char();if(Xe>=48&&Xe<=57)We=!0,Pe=Pe*10+(Xe-48),this.bump();else break}var ct=G(ze,this.clonePosition());return We?(Pe*=we,at(Pe)?{val:Pe,err:null}:this.error(be,ct)):this.error(Q,ct)},y.prototype.offset=function(){return this.position.offset},y.prototype.isEOF=function(){return this.offset()===this.message.length},y.prototype.clonePosition=function(){return{offset:this.position.offset,line:this.position.line,column:this.position.column}},y.prototype.char=function(){var Q=this.position.offset;if(Q>=this.message.length)throw Error("out of bound");var be=pe(this.message,Q);if(be===void 0)throw Error("Offset ".concat(Q," is at invalid UTF-16 code unit boundary"));return be},y.prototype.error=function(Q,be){return{val:null,err:{kind:Q,message:this.message,location:be}}},y.prototype.bump=function(){if(!this.isEOF()){var Q=this.char();Q===10?(this.position.line+=1,this.position.column=1,this.position.offset+=1):(this.position.column+=1,this.position.offset+=Q<65536?1:2)}},y.prototype.bumpIf=function(Q){if(ot(this.message,Q,this.offset())){for(var be=0;be<Q.length;be++)this.bump();return!0}return!1},y.prototype.bumpUntil=function(Q){var be=this.offset(),we=this.message.indexOf(Q,be);return we>=0?(this.bumpTo(we),!0):(this.bumpTo(this.message.length),!1)},y.prototype.bumpTo=function(Q){if(this.offset()>Q)throw Error("targetOffset ".concat(Q," must be greater than or equal to the current offset ").concat(this.offset()));for(Q=Math.min(Q,this.message.length);;){var be=this.offset();if(be===Q)break;if(be>Q)throw Error("targetOffset ".concat(Q," is at invalid UTF-16 code unit boundary"));if(this.bump(),this.isEOF())break}},y.prototype.bumpSpace=function(){for(;!this.isEOF()&&he(this.char());)this.bump()},y.prototype.peek=function(){if(this.isEOF())return null;var Q=this.char(),be=this.offset(),we=this.message.charCodeAt(be+(Q>=65536?2:1));return we!=null?we:null},y}();function ye(y){return y>=97&&y<=122||y>=65&&y<=90}function Be(y){return ye(y)||y===47}function oe(y){return y===45||y===46||y>=48&&y<=57||y===95||y>=97&&y<=122||y>=65&&y<=90||y==183||y>=192&&y<=214||y>=216&&y<=246||y>=248&&y<=893||y>=895&&y<=8191||y>=8204&&y<=8205||y>=8255&&y<=8256||y>=8304&&y<=8591||y>=11264&&y<=12271||y>=12289&&y<=55295||y>=63744&&y<=64975||y>=65008&&y<=65533||y>=65536&&y<=983039}function he(y){return y>=9&&y<=13||y===32||y===133||y>=8206&&y<=8207||y===8232||y===8233}function Ae(y){return y>=33&&y<=35||y===36||y>=37&&y<=39||y===40||y===41||y===42||y===43||y===44||y===45||y>=46&&y<=47||y>=58&&y<=59||y>=60&&y<=62||y>=63&&y<=64||y===91||y===92||y===93||y===94||y===96||y===123||y===124||y===125||y===126||y===161||y>=162&&y<=165||y===166||y===167||y===169||y===171||y===172||y===174||y===176||y===177||y===182||y===187||y===191||y===215||y===247||y>=8208&&y<=8213||y>=8214&&y<=8215||y===8216||y===8217||y===8218||y>=8219&&y<=8220||y===8221||y===8222||y===8223||y>=8224&&y<=8231||y>=8240&&y<=8248||y===8249||y===8250||y>=8251&&y<=8254||y>=8257&&y<=8259||y===8260||y===8261||y===8262||y>=8263&&y<=8273||y===8274||y===8275||y>=8277&&y<=8286||y>=8592&&y<=8596||y>=8597&&y<=8601||y>=8602&&y<=8603||y>=8604&&y<=8607||y===8608||y>=8609&&y<=8610||y===8611||y>=8612&&y<=8613||y===8614||y>=8615&&y<=8621||y===8622||y>=8623&&y<=8653||y>=8654&&y<=8655||y>=8656&&y<=8657||y===8658||y===8659||y===8660||y>=8661&&y<=8691||y>=8692&&y<=8959||y>=8960&&y<=8967||y===8968||y===8969||y===8970||y===8971||y>=8972&&y<=8991||y>=8992&&y<=8993||y>=8994&&y<=9e3||y===9001||y===9002||y>=9003&&y<=9083||y===9084||y>=9085&&y<=9114||y>=9115&&y<=9139||y>=9140&&y<=9179||y>=9180&&y<=9185||y>=9186&&y<=9254||y>=9255&&y<=9279||y>=9280&&y<=9290||y>=9291&&y<=9311||y>=9472&&y<=9654||y===9655||y>=9656&&y<=9664||y===9665||y>=9666&&y<=9719||y>=9720&&y<=9727||y>=9728&&y<=9838||y===9839||y>=9840&&y<=10087||y===10088||y===10089||y===10090||y===10091||y===10092||y===10093||y===10094||y===10095||y===10096||y===10097||y===10098||y===10099||y===10100||y===10101||y>=10132&&y<=10175||y>=10176&&y<=10180||y===10181||y===10182||y>=10183&&y<=10213||y===10214||y===10215||y===10216||y===10217||y===10218||y===10219||y===10220||y===10221||y===10222||y===10223||y>=10224&&y<=10239||y>=10240&&y<=10495||y>=10496&&y<=10626||y===10627||y===10628||y===10629||y===10630||y===10631||y===10632||y===10633||y===10634||y===10635||y===10636||y===10637||y===10638||y===10639||y===10640||y===10641||y===10642||y===10643||y===10644||y===10645||y===10646||y===10647||y===10648||y>=10649&&y<=10711||y===10712||y===10713||y===10714||y===10715||y>=10716&&y<=10747||y===10748||y===10749||y>=10750&&y<=11007||y>=11008&&y<=11055||y>=11056&&y<=11076||y>=11077&&y<=11078||y>=11079&&y<=11084||y>=11085&&y<=11123||y>=11124&&y<=11125||y>=11126&&y<=11157||y===11158||y>=11159&&y<=11263||y>=11776&&y<=11777||y===11778||y===11779||y===11780||y===11781||y>=11782&&y<=11784||y===11785||y===11786||y===11787||y===11788||y===11789||y>=11790&&y<=11798||y===11799||y>=11800&&y<=11801||y===11802||y===11803||y===11804||y===11805||y>=11806&&y<=11807||y===11808||y===11809||y===11810||y===11811||y===11812||y===11813||y===11814||y===11815||y===11816||y===11817||y>=11818&&y<=11822||y===11823||y>=11824&&y<=11833||y>=11834&&y<=11835||y>=11836&&y<=11839||y===11840||y===11841||y===11842||y>=11843&&y<=11855||y>=11856&&y<=11857||y===11858||y>=11859&&y<=11903||y>=12289&&y<=12291||y===12296||y===12297||y===12298||y===12299||y===12300||y===12301||y===12302||y===12303||y===12304||y===12305||y>=12306&&y<=12307||y===12308||y===12309||y===12310||y===12311||y===12312||y===12313||y===12314||y===12315||y===12316||y===12317||y>=12318&&y<=12319||y===12320||y===12336||y===64830||y===64831||y>=65093&&y<=65094}function Ue(y){y.forEach(function(Q){if(delete Q.location,p(Q)||m(Q))for(var be in Q.options)delete Q.options[be].location,Ue(Q.options[be].value);else f(Q)&&w(Q.style)||(g(Q)||h(Q))&&x(Q.style)?delete Q.style.location:b(Q)&&Ue(Q.children)})}function He(y,Q){Q===void 0&&(Q={}),Q=(0,o.pi)({shouldParseSkeletons:!0,requiresOtherClause:!0},Q);var be=new le(y,Q).parse();if(be.err){var we=SyntaxError(a[be.err.kind]);throw we.location=be.err.location,we.originalMessage=be.err.message,we}return Q!=null&&Q.captureLocation||Ue(be.val),be.val}var it=null},34320:function(s,v,e){"use strict";e.d(v,{$6:function(){return h},OV:function(){return i},Qe:function(){return f},X9:function(){return g},gb:function(){return d},wI:function(){return l}});var o=e(32290),a;(function(p){p.FORMAT_ERROR="FORMAT_ERROR",p.UNSUPPORTED_FORMATTER="UNSUPPORTED_FORMATTER",p.INVALID_CONFIG="INVALID_CONFIG",p.MISSING_DATA="MISSING_DATA",p.MISSING_TRANSLATION="MISSING_TRANSLATION"})(a||(a={}));var r=function(p){(0,o.ZT)(m,p);function m(E,b,w){var x=this,R=w?w instanceof Error?w:new Error(String(w)):void 0;return x=p.call(this,"[@formatjs/intl Error ".concat(E,"] ").concat(b,`
`).concat(R?`
`.concat(R.message,`
`).concat(R.stack):""))||this,x.code=E,typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(x,m),x}return m}(Error),l=function(p){(0,o.ZT)(m,p);function m(E,b){return p.call(this,a.UNSUPPORTED_FORMATTER,E,b)||this}return m}(r),i=function(p){(0,o.ZT)(m,p);function m(E,b){return p.call(this,a.INVALID_CONFIG,E,b)||this}return m}(r),d=function(p){(0,o.ZT)(m,p);function m(E,b){return p.call(this,a.MISSING_DATA,E,b)||this}return m}(r),f=function(p){(0,o.ZT)(m,p);function m(E,b,w){var x=p.call(this,a.FORMAT_ERROR,"".concat(E,`
Locale: `).concat(b,`
`),w)||this;return x.locale=b,x}return m}(r),g=function(p){(0,o.ZT)(m,p);function m(E,b,w,x){var R=p.call(this,"".concat(E,`
MessageID: `).concat(w==null?void 0:w.id,`
Default Message: `).concat(w==null?void 0:w.defaultMessage,`
Description: `).concat(w==null?void 0:w.description,`
`),b,x)||this;return R.descriptor=w,R.locale=b,R}return m}(f),h=function(p){(0,o.ZT)(m,p);function m(E,b){var w=p.call(this,a.MISSING_TRANSLATION,'Missing message: "'.concat(E.id,'" for locale "').concat(b,'", using ').concat(E.defaultMessage?"default message (".concat(typeof E.defaultMessage=="string"?E.defaultMessage:E.defaultMessage.map(function(x){var R;return(R=x.value)!==null&&R!==void 0?R:JSON.stringify(x)}).join(),")"):"id"," as fallback."))||this;return w.descriptor=E,w}return m}(r)},44301:function(s,v,e){"use strict";e.d(v,{L6:function(){return i},Sn:function(){return h},TB:function(){return E},Z0:function(){return g},ax:function(){return m}});var o=e(32290),a=e(62376),r=e(27017),l=e(34320);function i(b,w,x){return x===void 0&&(x={}),w.reduce(function(R,P){return P in b?R[P]=b[P]:P in x&&(R[P]=x[P]),R},{})}var d=function(b){},f=function(b){},g={formats:{},messages:{},timeZone:void 0,defaultLocale:"en",defaultFormats:{},fallbackOnEmptyString:!0,onError:d,onWarn:f};function h(){return{dateTime:{},number:{},message:{},relativeTime:{},pluralRules:{},list:{},displayNames:{}}}function p(b){return{create:function(){return{get:function(w){return b[w]},set:function(w,x){b[w]=x}}}}}function m(b){b===void 0&&(b=h());var w=Intl.RelativeTimeFormat,x=Intl.ListFormat,R=Intl.DisplayNames,P=(0,r.H)(function(){for(var F,A=[],k=0;k<arguments.length;k++)A[k]=arguments[k];return new((F=Intl.DateTimeFormat).bind.apply(F,(0,o.ev)([void 0],A,!1)))},{cache:p(b.dateTime),strategy:r.A.variadic}),j=(0,r.H)(function(){for(var F,A=[],k=0;k<arguments.length;k++)A[k]=arguments[k];return new((F=Intl.NumberFormat).bind.apply(F,(0,o.ev)([void 0],A,!1)))},{cache:p(b.number),strategy:r.A.variadic}),N=(0,r.H)(function(){for(var F,A=[],k=0;k<arguments.length;k++)A[k]=arguments[k];return new((F=Intl.PluralRules).bind.apply(F,(0,o.ev)([void 0],A,!1)))},{cache:p(b.pluralRules),strategy:r.A.variadic});return{getDateTimeFormat:P,getNumberFormat:j,getMessageFormat:(0,r.H)(function(F,A,k,z){return new a.C(F,A,k,(0,o.pi)({formatters:{getNumberFormat:j,getDateTimeFormat:P,getPluralRules:N}},z||{}))},{cache:p(b.message),strategy:r.A.variadic}),getRelativeTimeFormat:(0,r.H)(function(){for(var F=[],A=0;A<arguments.length;A++)F[A]=arguments[A];return new(w.bind.apply(w,(0,o.ev)([void 0],F,!1)))},{cache:p(b.relativeTime),strategy:r.A.variadic}),getPluralRules:N,getListFormat:(0,r.H)(function(){for(var F=[],A=0;A<arguments.length;A++)F[A]=arguments[A];return new(x.bind.apply(x,(0,o.ev)([void 0],F,!1)))},{cache:p(b.list),strategy:r.A.variadic}),getDisplayNames:(0,r.H)(function(){for(var F=[],A=0;A<arguments.length;A++)F[A]=arguments[A];return new(R.bind.apply(R,(0,o.ev)([void 0],F,!1)))},{cache:p(b.displayNames),strategy:r.A.variadic})}}function E(b,w,x,R){var P=b&&b[w],j;if(P&&(j=P[x]),j)return j;R(new l.wI("No ".concat(w," format named: ").concat(x)))}},50058:function(s,v,e){"use strict";e.d(v,{f:function(){return g},m:function(){return d}});var o=e(5773),a=e.n(o),r=e(26801),l=e.n(r),i=e(19340),d,f="/";function g(m){var E;return m.type==="hash"?E=(0,i.q_)():m.type==="memory"?E=(0,i.PP)(m):E=(0,i.lX)(),m.basename&&(f=m.basename),d=l()(l()({},E),{},{push:function(w,x){E.push(h(w,E),x)},replace:function(w,x){E.replace(h(w,E),x)},get location(){return E.location},get action(){return E.action}}),E}function h(m,E){if(typeof m=="string")return"".concat(p(f)).concat(m);if(a()(m)==="object"){var b=E.location.pathname;return l()(l()({},m),{},{pathname:m.pathname?"".concat(p(f)).concat(m.pathname):b})}else throw new Error("Unexpected to: ".concat(m))}function p(m){return m.slice(-1)==="/"?m.slice(0,-1):m}},77622:function(s,v,e){"use strict";e.d(v,{gD:function(){return Ve},We:function(){return Pt}});var o={};e.r(o),e.d(o,{modifyClientRenderOpts:function(){return g}});var a={};e.r(a),e.d(a,{innerProvider:function(){return E}});var r={};e.r(r),e.d(r,{patchRoutes:function(){return R}});var l={};e.r(l),e.d(l,{i18nProvider:function(){return be}});var i={};e.r(i),e.d(i,{modifyClientRenderOpts:function(){return we}});var d=e(26801),f=e.n(d);function g(xe){var tt=xe.history,Ze=xe.hydrate;return f()(f()({},xe),{},{hydrate:Ze&&!["/~demos/:id"].includes(tt.location.pathname)})}var h=e(71062),p=e(55200),m={},E=function(tt){return h.createElement(p.B6,{context:m},tt)},b=e(81717),w=e(2120),x=e.n(w),R=function(tt){var Ze=tt.routes;Object.values(Ze).forEach(function(Le){if(b.C3[Le.id]){var ut;if((ut=Le.meta)!==null&&ut!==void 0&&(ut=ut.frontmatter)!==null&&ut!==void 0&&ut.debug||b.C3[Le.id].frontmatter.debug)delete Ze[Le.id];else{var st;Le.meta=x()(Le.meta,b.C3[Le.id]),Le.meta.tabs=(st=Le.meta.tabs)===null||st===void 0?void 0:st.map(function(bt){var kt={frontmatter:{title:b.eA[bt].title},toc:[],texts:[]};return f()(f()({},b.eA[bt]),{},{meta:b.C3[bt]||kt})})}}})},P=e(11006),j=e.n(P),N=e(57296),F=e(44301),A=e(32290),k=e(47187),z=e(62376),K=e(34320),ee=e(66190);function J(xe,tt){return Object.keys(xe).reduce(function(Ze,Le){return Ze[Le]=(0,A.pi)({timeZone:tt},xe[Le]),Ze},{})}function ce(xe,tt){var Ze=Object.keys((0,A.pi)((0,A.pi)({},xe),tt));return Ze.reduce(function(Le,ut){return Le[ut]=(0,A.pi)((0,A.pi)({},xe[ut]||{}),tt[ut]||{}),Le},{})}function Te(xe,tt){if(!tt)return xe;var Ze=z.C.formats;return(0,A.pi)((0,A.pi)((0,A.pi)({},Ze),xe),{date:ce(J(Ze.date,tt),J(xe.date||{},tt)),time:ce(J(Ze.time,tt),J(xe.time||{},tt))})}var Oe=function(xe,tt,Ze,Le,ut){var st=xe.locale,bt=xe.formats,kt=xe.messages,Kt=xe.defaultLocale,xn=xe.defaultFormats,dn=xe.fallbackOnEmptyString,In=xe.onError,Bn=xe.timeZone,Ar=xe.defaultRichTextElements;Ze===void 0&&(Ze={id:""});var Br=Ze.id,wt=Ze.defaultMessage;(0,k.kG)(!!Br,"[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue");var dt=String(Br),pt=kt&&Object.prototype.hasOwnProperty.call(kt,dt)&&kt[dt];if(Array.isArray(pt)&&pt.length===1&&pt[0].type===ee.wD.literal)return pt[0].value;if(!Le&&pt&&typeof pt=="string"&&!Ar)return pt.replace(/'\{(.*?)\}'/gi,"{$1}");if(Le=(0,A.pi)((0,A.pi)({},Ar),Le||{}),bt=Te(bt,Bn),xn=Te(xn,Bn),!pt){if(dn===!1&&pt==="")return pt;if((!wt||st&&st.toLowerCase()!==Kt.toLowerCase())&&In(new K.$6(Ze,st)),wt)try{var Ut=tt.getMessageFormat(wt,Kt,xn,ut);return Ut.format(Le)}catch(on){return In(new K.X9('Error formatting default message for: "'.concat(dt,'", rendering default message verbatim'),st,Ze,on)),typeof wt=="string"?wt:dt}return dt}try{var Ut=tt.getMessageFormat(pt,st,bt,(0,A.pi)({formatters:tt},ut||{}));return Ut.format(Le)}catch(on){In(new K.X9('Error formatting message: "'.concat(dt,'", using ').concat(wt?"default message":"id"," as fallback."),st,Ze,on))}if(wt)try{var Ut=tt.getMessageFormat(wt,Kt,xn,ut);return Ut.format(Le)}catch(on){In(new K.X9('Error formatting the default message for: "'.concat(dt,'", rendering message verbatim'),st,Ze,on))}return typeof pt=="string"?pt:typeof wt=="string"?wt:dt},Ne=["style","currency","currencyDisplay","unit","unitDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","currencyDisplay","currencySign","notation","signDisplay","unit","unitDisplay","numberingSystem"];function _e(xe,tt,Ze){var Le=xe.locale,ut=xe.formats,st=xe.onError;Ze===void 0&&(Ze={});var bt=Ze.format,kt=bt&&(0,F.TB)(ut,"number",bt,st)||{},Kt=(0,F.L6)(Ze,Ne,kt);return tt(Le,Kt)}function je(xe,tt,Ze,Le){Le===void 0&&(Le={});try{return _e(xe,tt,Le).format(Ze)}catch(ut){xe.onError(new K.Qe("Error formatting number.",xe.locale,ut))}return String(Ze)}function q(xe,tt,Ze,Le){Le===void 0&&(Le={});try{return _e(xe,tt,Le).formatToParts(Ze)}catch(ut){xe.onError(new K.Qe("Error formatting number.",xe.locale,ut))}return[]}var re=e(25610),ae=["numeric","style"];function O(xe,tt,Ze){var Le=xe.locale,ut=xe.formats,st=xe.onError;Ze===void 0&&(Ze={});var bt=Ze.format,kt=!!bt&&(0,F.TB)(ut,"relative",bt,st)||{},Kt=(0,F.L6)(Ze,ae,kt);return tt(Le,Kt)}function L(xe,tt,Ze,Le,ut){ut===void 0&&(ut={}),Le||(Le="second");var st=Intl.RelativeTimeFormat;st||xe.onError(new re.u_(`Intl.RelativeTimeFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-relativetimeformat"
`,re.jK.MISSING_INTL_API));try{return O(xe,tt,ut).format(Ze,Le)}catch(bt){xe.onError(new K.Qe("Error formatting relative time.",xe.locale,bt))}return String(Ze)}var W=["formatMatcher","timeZone","hour12","weekday","era","year","month","day","hour","minute","second","timeZoneName","hourCycle","dateStyle","timeStyle","calendar","numberingSystem","fractionalSecondDigits"];function V(xe,tt,Ze,Le){var ut=xe.locale,st=xe.formats,bt=xe.onError,kt=xe.timeZone;Le===void 0&&(Le={});var Kt=Le.format,xn=(0,A.pi)((0,A.pi)({},kt&&{timeZone:kt}),Kt&&(0,F.TB)(st,tt,Kt,bt)),dn=(0,F.L6)(Le,W,xn);return tt==="time"&&!dn.hour&&!dn.minute&&!dn.second&&!dn.timeStyle&&!dn.dateStyle&&(dn=(0,A.pi)((0,A.pi)({},dn),{hour:"numeric",minute:"numeric"})),Ze(ut,dn)}function G(xe,tt){for(var Ze=[],Le=2;Le<arguments.length;Le++)Ze[Le-2]=arguments[Le];var ut=Ze[0],st=Ze[1],bt=st===void 0?{}:st,kt=typeof ut=="string"?new Date(ut||0):ut;try{return V(xe,"date",tt,bt).format(kt)}catch(Kt){xe.onError(new K.Qe("Error formatting date.",xe.locale,Kt))}return String(kt)}function I(xe,tt){for(var Ze=[],Le=2;Le<arguments.length;Le++)Ze[Le-2]=arguments[Le];var ut=Ze[0],st=Ze[1],bt=st===void 0?{}:st,kt=typeof ut=="string"?new Date(ut||0):ut;try{return V(xe,"time",tt,bt).format(kt)}catch(Kt){xe.onError(new K.Qe("Error formatting time.",xe.locale,Kt))}return String(kt)}function H(xe,tt){for(var Ze=[],Le=2;Le<arguments.length;Le++)Ze[Le-2]=arguments[Le];var ut=Ze[0],st=Ze[1],bt=Ze[2],kt=bt===void 0?{}:bt,Kt=xe.timeZone,xn=xe.locale,dn=xe.onError,In=(0,F.L6)(kt,W,Kt?{timeZone:Kt}:{});try{return tt(xn,In).formatRange(ut,st)}catch(Bn){dn(new K.Qe("Error formatting date time range.",xe.locale,Bn))}return String(ut)}function $(xe,tt){for(var Ze=[],Le=2;Le<arguments.length;Le++)Ze[Le-2]=arguments[Le];var ut=Ze[0],st=Ze[1],bt=st===void 0?{}:st,kt=typeof ut=="string"?new Date(ut||0):ut;try{return V(xe,"date",tt,bt).formatToParts(kt)}catch(Kt){xe.onError(new K.Qe("Error formatting date.",xe.locale,Kt))}return[]}function Y(xe,tt){for(var Ze=[],Le=2;Le<arguments.length;Le++)Ze[Le-2]=arguments[Le];var ut=Ze[0],st=Ze[1],bt=st===void 0?{}:st,kt=typeof ut=="string"?new Date(ut||0):ut;try{return V(xe,"time",tt,bt).formatToParts(kt)}catch(Kt){xe.onError(new K.Qe("Error formatting time.",xe.locale,Kt))}return[]}var X=["type"];function Re(xe,tt,Ze,Le){var ut=xe.locale,st=xe.onError;Le===void 0&&(Le={}),Intl.PluralRules||st(new re.u_(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,re.jK.MISSING_INTL_API));var bt=(0,F.L6)(Le,X);try{return tt(ut,bt).select(Ze)}catch(kt){st(new K.Qe("Error formatting plural.",ut,kt))}return"other"}var Fe=["type","style"],at=Date.now();function et(xe){return"".concat(at,"_").concat(xe,"_").concat(at)}function Ke(xe,tt,Ze,Le){Le===void 0&&(Le={});var ut=ot(xe,tt,Ze,Le).reduce(function(st,bt){var kt=bt.value;return typeof kt!="string"?st.push(kt):typeof st[st.length-1]=="string"?st[st.length-1]+=kt:st.push(kt),st},[]);return ut.length===1?ut[0]:ut.length===0?"":ut}function ot(xe,tt,Ze,Le){var ut=xe.locale,st=xe.onError;Le===void 0&&(Le={});var bt=Intl.ListFormat;bt||st(new re.u_(`Intl.ListFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-listformat"
`,re.jK.MISSING_INTL_API));var kt=(0,F.L6)(Le,Fe);try{var Kt={},xn=Ze.map(function(dn,In){if(typeof dn=="object"){var Bn=et(In);return Kt[Bn]=dn,Bn}return String(dn)});return tt(ut,kt).formatToParts(xn).map(function(dn){return dn.type==="literal"?dn:(0,A.pi)((0,A.pi)({},dn),{value:Kt[dn.value]||dn.value})})}catch(dn){st(new K.Qe("Error formatting list.",ut,dn))}return Ze}var te=["style","type","fallback","languageDisplay"];function fe(xe,tt,Ze,Le){var ut=xe.locale,st=xe.onError,bt=Intl.DisplayNames;bt||st(new re.u_(`Intl.DisplayNames is not available in this environment.
Try polyfilling it using "@formatjs/intl-displaynames"
`,re.jK.MISSING_INTL_API));var kt=(0,F.L6)(Le,te);try{return tt(ut,kt).of(Ze)}catch(Kt){st(new K.Qe("Error formatting display name.",ut,Kt))}}function pe(xe){var tt=xe?xe[Object.keys(xe)[0]]:void 0;return typeof tt=="string"}function me(xe){xe.onWarn&&xe.defaultRichTextElements&&pe(xe.messages||{})&&xe.onWarn(`[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. 
Please consider using "@formatjs/cli" to pre-compile your messages for performance.
For more details see https://formatjs.io/docs/getting-started/message-distribution`)}function Ie(xe,tt){var Ze=(0,F.ax)(tt),Le=(0,A.pi)((0,A.pi)({},F.Z0),xe),ut=Le.locale,st=Le.defaultLocale,bt=Le.onError;return ut?!Intl.NumberFormat.supportedLocalesOf(ut).length&&bt?bt(new K.gb('Missing locale data for locale: "'.concat(ut,'" in Intl.NumberFormat. Using default locale: "').concat(st,'" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))):!Intl.DateTimeFormat.supportedLocalesOf(ut).length&&bt&&bt(new K.gb('Missing locale data for locale: "'.concat(ut,'" in Intl.DateTimeFormat. Using default locale: "').concat(st,'" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))):(bt&&bt(new K.OV('"locale" was not configured, using "'.concat(st,'" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details'))),Le.locale=Le.defaultLocale||"en"),me(Le),(0,A.pi)((0,A.pi)({},Le),{formatters:Ze,formatNumber:je.bind(null,Le,Ze.getNumberFormat),formatNumberToParts:q.bind(null,Le,Ze.getNumberFormat),formatRelativeTime:L.bind(null,Le,Ze.getRelativeTimeFormat),formatDate:G.bind(null,Le,Ze.getDateTimeFormat),formatDateToParts:$.bind(null,Le,Ze.getDateTimeFormat),formatTime:I.bind(null,Le,Ze.getDateTimeFormat),formatDateTimeRange:H.bind(null,Le,Ze.getDateTimeFormat),formatTimeToParts:Y.bind(null,Le,Ze.getDateTimeFormat),formatPlural:Re.bind(null,Le,Ze.getPluralRules),formatMessage:Oe.bind(null,Le,Ze),$t:Oe.bind(null,Le,Ze),formatList:Ke.bind(null,Le,Ze.getListFormat),formatListToParts:ot.bind(null,Le,Ze.getListFormat),formatDisplayName:fe.bind(null,Le,Ze.getDisplayNames)})}var ue=e(48057),ve=e(23278),Ee=e(41555);function le(xe){return{locale:xe.locale,timeZone:xe.timeZone,fallbackOnEmptyString:xe.fallbackOnEmptyString,formats:xe.formats,textComponent:xe.textComponent,messages:xe.messages,defaultLocale:xe.defaultLocale,defaultFormats:xe.defaultFormats,onError:xe.onError,onWarn:xe.onWarn,wrapRichTextChunksInFragment:xe.wrapRichTextChunksInFragment,defaultRichTextElements:xe.defaultRichTextElements}}function ye(xe){return xe&&Object.keys(xe).reduce(function(tt,Ze){var Le=xe[Ze];return tt[Ze]=(0,Ee.Gt)(Le)?(0,ue.dt)(Le):Le,tt},{})}var Be=function(xe,tt,Ze,Le){for(var ut=[],st=4;st<arguments.length;st++)ut[st-4]=arguments[st];var bt=ye(Le),kt=Oe.apply(void 0,(0,A.ev)([xe,tt,Ze,bt],ut,!1));return Array.isArray(kt)?h.Children.toArray(kt):kt},oe=function(xe,tt){var Ze=xe.defaultRichTextElements,Le=(0,A._T)(xe,["defaultRichTextElements"]),ut=ye(Ze),st=Ie((0,A.pi)((0,A.pi)((0,A.pi)({},ue.Z0),Le),{defaultRichTextElements:ut}),tt),bt={locale:st.locale,timeZone:st.timeZone,fallbackOnEmptyString:st.fallbackOnEmptyString,formats:st.formats,defaultLocale:st.defaultLocale,defaultFormats:st.defaultFormats,messages:st.messages,onError:st.onError,defaultRichTextElements:ut};return(0,A.pi)((0,A.pi)({},st),{formatMessage:Be.bind(null,bt,st.formatters),$t:Be.bind(null,bt,st.formatters)})},he=function(xe){(0,A.ZT)(tt,xe);function tt(){var Ze=xe!==null&&xe.apply(this,arguments)||this;return Ze.cache=(0,F.Sn)(),Ze.state={cache:Ze.cache,intl:oe(le(Ze.props),Ze.cache),prevConfig:le(Ze.props)},Ze}return tt.getDerivedStateFromProps=function(Ze,Le){var ut=Le.prevConfig,st=Le.cache,bt=le(Ze);return(0,ue.wU)(ut,bt)?null:{intl:oe(bt,st),prevConfig:bt}},tt.prototype.render=function(){return(0,ue.lq)(this.state.intl),h.createElement(ve.zt,{value:this.state.intl},this.props.children)},tt.displayName="IntlProvider",tt.defaultProps=ue.Z0,tt}(h.PureComponent),Ae=null,Ue=e(10603),He=e(71566),it=e(99678),y=(0,F.Sn)(),Q=function(tt){var Ze=(0,h.useCallback)(function(){var kt="/cruise-car-map",Kt=He.k.slice().reverse().find(function(Bn){return"suffix"in Bn?N.m8.location.pathname.replace(/([^/])\/$/,"$1").endsWith(Bn.suffix):N.m8.location.pathname.replace(/([^/])\/$/,"$1").startsWith(kt+Bn.base)}),xn=Kt?Kt.id:He.k[0].id;if(N.m8.location.pathname.startsWith(kt+"/~demos")){var dn=new URLSearchParams(N.m8.location.search);dn.get("locale")&&(xn=dn.get("locale"))}var In=He.s[xn]||{};return In["$internal.edit.link"]=void 0,oe({locale:xn,messages:In},y)},[]),Le=(0,h.useState)(function(){return Ze()}),ut=j()(Le,2),st=ut[0],bt=ut[1];return(0,Ue.LI)(function(){return N.m8.listen(function(){bt(Ze())})},[]),(0,it.jsx)(ve.zt,{value:st,children:tt.children},st.locale)};function be(xe){return h.createElement(Q,null,xe)}function we(xe){var tt=xe.history,Ze=xe.hydrate;return f()(f()({},xe),{},{hydrate:Ze&&!tt.location.pathname.startsWith("/~demos")})}var ze=e(11372);function We(xe){return xe.default?typeof xe.default=="function"?xe.default():xe.default:xe}function Pe(){return[{apply:o,path:void 0},{apply:a,path:void 0},{apply:r,path:void 0},{apply:l,path:void 0},{apply:i,path:void 0}]}function Xe(){return["patchRoutes","patchClientRoutes","modifyContextOpts","modifyClientRenderOpts","rootContainer","innerProvider","i18nProvider","accessProvider","dataflowProvider","outerProvider","render","onRouteChange","modifyCodeSandboxData","modifyStackBlitzData"]}var ct=null;function Ve(){return ct=ze.Q$.create({plugins:Pe(),validKeys:Xe()}),ct}function Pt(){return ct}},57296:function(s,v,e){"use strict";e.d(v,{Ac:function(){return o.Ac},Dl:function(){return K},dY:function(){return Ke},_H:function(){return h},ql:function(){return o.ql},rU:function(){return o.rU},OL:function(){return o.OL},p6:function(){return o.p6},m8:function(){return o.m8},fp:function(){return o.fp},il:function(){return ye},Sc:function(){return Hi},Ov:function(){return o.Ov},yh:function(){return Ha},YB:function(){return l.Z},bU:function(){return $a.b},TH:function(){return o.TH},OK:function(){return Gi},pC:function(){return o.pC},UO:function(){return o.UO},OI:function(){return gu},Qt:function(){return o.Qt},eL:function(){return Ri},lr:function(){return o.lr},tx:function(){return co},WF:function(){return m.W},OO:function(){return $o},zh:function(){return $}});var o=e(11372),a=e(32290),r=e(71062),l=e(55661),i=e(48057);function d(M,D){var _=M.values,se=(0,a._T)(M,["values"]),Ce=D.values,Qe=(0,a._T)(D,["values"]);return(0,i.wU)(Ce,_)&&(0,i.wU)(se,Qe)}function f(M){var D=(0,l.Z)(),_=D.formatMessage,se=D.textComponent,Ce=se===void 0?r.Fragment:se,Qe=M.id,Je=M.description,lt=M.defaultMessage,ft=M.values,gt=M.children,jt=M.tagName,ln=jt===void 0?Ce:jt,Gt=M.ignoreTag,Zt={id:Qe,description:Je,defaultMessage:lt},pn=_(Zt,ft,{ignoreTag:Gt});return typeof gt=="function"?gt(Array.isArray(pn)?pn:[pn]):ln?r.createElement(ln,null,r.Children.toArray(pn)):r.createElement(r.Fragment,null,pn)}f.displayName="FormattedMessage";var g=r.memo(f,d);g.displayName="MemoizedFormattedMessage";var h=g,p=e(93122),m=e(52003),E=e(62727),b=e(91428),w=e(62025);const x=(0,r.createContext)(null),R={didCatch:!1,error:null};class P extends r.Component{constructor(D){super(D),this.resetErrorBoundary=this.resetErrorBoundary.bind(this),this.state=R}static getDerivedStateFromError(D){return{didCatch:!0,error:D}}resetErrorBoundary(){const{error:D}=this.state;if(D!==null){for(var _,se,Ce=arguments.length,Qe=new Array(Ce),Je=0;Je<Ce;Je++)Qe[Je]=arguments[Je];(_=(se=this.props).onReset)===null||_===void 0||_.call(se,{args:Qe,reason:"imperative-api"}),this.setState(R)}}componentDidCatch(D,_){var se,Ce;(se=(Ce=this.props).onError)===null||se===void 0||se.call(Ce,D,_)}componentDidUpdate(D,_){const{didCatch:se}=this.state,{resetKeys:Ce}=this.props;if(se&&_.error!==null&&j(D.resetKeys,Ce)){var Qe,Je;(Qe=(Je=this.props).onReset)===null||Qe===void 0||Qe.call(Je,{next:Ce,prev:D.resetKeys,reason:"keys"}),this.setState(R)}}render(){const{children:D,fallbackRender:_,FallbackComponent:se,fallback:Ce}=this.props,{didCatch:Qe,error:Je}=this.state;let lt=D;if(Qe){const ft={error:Je,resetErrorBoundary:this.resetErrorBoundary};if((0,r.isValidElement)(Ce))lt=Ce;else if(typeof _=="function")lt=_(ft);else if(se)lt=(0,r.createElement)(se,ft);else throw Je}return(0,r.createElement)(x.Provider,{value:{didCatch:Qe,error:Je,resetErrorBoundary:this.resetErrorBoundary}},lt)}}function j(){let M=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],D=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return M.length!==D.length||M.some((_,se)=>!Object.is(_,D[se]))}function N(M){if(M==null||typeof M.didCatch!="boolean"||typeof M.resetErrorBoundary!="function")throw new Error("ErrorBoundaryContext not found");return!0}function F(){const M=useContext(x);N(M);const[D,_]=useState({error:null,hasError:!1}),se=useMemo(()=>({resetBoundary:()=>{M==null||M.resetErrorBoundary(),_({error:null,hasError:!1})},showBoundary:Ce=>_({error:Ce,hasError:!0})}),[M==null?void 0:M.resetErrorBoundary]);if(D.hasError)throw D.error;return se}function A(M,D){const _=forwardRef((Ce,Qe)=>createElement(P,D,createElement(M,Wc(Zc({},Ce),{ref:Qe})))),se=M.displayName||M.name||"Unknown";return _.displayName="withErrorBoundary(".concat(se,")"),_}function k(){return k=Object.assign?Object.assign.bind():function(M){for(var D=1;D<arguments.length;D++){var _=arguments[D];for(var se in _)Object.prototype.hasOwnProperty.call(_,se)&&(M[se]=_[se])}return M},k.apply(this,arguments)}var z=function(D){return r.createElement(P,{fallbackRender:function(se){var Ce=se.error;return r.createElement(b.Z,{type:"error"},r.createElement("p",null,r.createElement("strong",null,Ce.message||"This demo has been crashed.")),Ce.stack&&r.createElement("p",null,r.createElement("details",{open:!0},r.createElement("summary",null,"Error stack"),r.createElement("pre",null,Ce.stack))))}},D.children)},K=r.memo(function(M){var D=(0,m.W)(),_=D.demos,se=D.historyType,Ce=(0,o.Ov)(),Qe=Ce.basename,Je=_[M.demo.id],lt=Je.component,ft=Je.asset;if(M.previewerProps.debug)return null;if(M.demo.inline)return r.createElement(z,null,(0,r.createElement)(lt));var gt=se==="hash";return r.createElement(w.Z,k({asset:ft,demoUrl:M.previewerProps.demoUrl||"".concat(gt?"#":"").concat(Qe).concat(E.SP_ROUTE_PREFIX,"demos/").concat(M.demo.id)},M.previewerProps),M.previewerProps.iframe?null:r.createElement(z,null,(0,r.createElement)(lt)))},function(M,D){return JSON.stringify(M).length===JSON.stringify(D).length});function ee(){return ee=Object.assign?Object.assign.bind():function(M){for(var D=1;D<arguments.length;D++){var _=arguments[D];for(var se in _)Object.prototype.hasOwnProperty.call(_,se)&&(M[se]=_[se])}return M},ee.apply(this,arguments)}function J(M,D){return _e(M)||Ne(M,D)||Te(M,D)||ce()}function ce(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Te(M,D){if(M){if(typeof M=="string")return Oe(M,D);var _=Object.prototype.toString.call(M).slice(8,-1);if(_==="Object"&&M.constructor&&(_=M.constructor.name),_==="Map"||_==="Set")return Array.from(M);if(_==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_))return Oe(M,D)}}function Oe(M,D){(D==null||D>M.length)&&(D=M.length);for(var _=0,se=new Array(D);_<D;_++)se[_]=M[_];return se}function Ne(M,D){var _=M==null?null:typeof Symbol!="undefined"&&M[Symbol.iterator]||M["@@iterator"];if(_!=null){var se,Ce,Qe,Je,lt=[],ft=!0,gt=!1;try{if(Qe=(_=_.call(M)).next,D===0){if(Object(_)!==_)return;ft=!1}else for(;!(ft=(se=Qe.call(_)).done)&&(lt.push(se.value),lt.length!==D);ft=!0);}catch(jt){gt=!0,Ce=jt}finally{try{if(!ft&&_.return!=null&&(Je=_.return(),Object(Je)!==Je))return}finally{if(gt)throw Ce}}return lt}}function _e(M){if(Array.isArray(M))return M}var je=function(D){var _=useRouteMeta(),se=_.frontmatter,Ce=useCallback(function(gt,jt){var ln,Gt=[],Zt=jt.filter(function(Un){return!Un.previewerProps.debug});if((ln=gt.demo)!==null&&ln!==void 0&&ln.cols&&gt.demo.cols>1&&(typeof window=="undefined"||window.innerWidth>1024)){for(var pn=0;pn<Zt.length;pn+=gt.demo.cols)Zt.slice(pn,pn+gt.demo.cols).forEach(function(Un,_n){var Vn;(Vn=Gt[_n])!==null&&Vn!==void 0||(Gt[_n]=[]),Gt[_n].push(Un)});return Gt}else Gt.push(Zt);return Gt},[]),Qe=useState(function(){return Ce(se,D.items)}),Je=J(Qe,2),lt=Je[0],ft=Je[1];return useEffect(function(){var gt=function(){return ft(Ce(se,D.items))};return window.addEventListener("resize",gt),gt(),function(){return window.removeEventListener("resize",gt)}},[D.items,se.demo]),React.createElement("div",{style:{display:"flex",margin:-8},"data-dumi-demo-grid":!0},lt.map(function(gt,jt){return React.createElement("section",{style:{flex:1,padding:8,width:0},key:String(jt)},gt.map(function(ln){return React.createElement(DumiDemo,ee({key:ln.demo.id},ln))}))}))},q=function(D){var _=D.tabs,se=D.tabKey,Ce=D.onChange,Qe=(0,l.Z)();return _!=null&&_.length?r.createElement("ul",{className:"dumi-default-content-tabs"},r.createElement("li",{onClick:function(){return Ce()},"data-active":!se||void 0},r.createElement("button",{type:"button"},Qe.formatMessage({id:"content.tabs.default"}))),_.map(function(Je){return r.createElement("li",{key:Je.key,onClick:function(){return Ce(Je)},"data-active":se===Je.key||void 0},r.createElement("button",{type:"button"},Je.titleIntlId?Qe.formatMessage({id:Je.titleIntlId}):Je.meta.frontmatter.title))})):null},re=q;function ae(M,D){return G(M)||V(M,D)||L(M,D)||O()}function O(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function L(M,D){if(M){if(typeof M=="string")return W(M,D);var _=Object.prototype.toString.call(M).slice(8,-1);if(_==="Object"&&M.constructor&&(_=M.constructor.name),_==="Map"||_==="Set")return Array.from(M);if(_==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_))return W(M,D)}}function W(M,D){(D==null||D>M.length)&&(D=M.length);for(var _=0,se=new Array(D);_<D;_++)se[_]=M[_];return se}function V(M,D){var _=M==null?null:typeof Symbol!="undefined"&&M[Symbol.iterator]||M["@@iterator"];if(_!=null){var se,Ce,Qe,Je,lt=[],ft=!0,gt=!1;try{if(Qe=(_=_.call(M)).next,D===0){if(Object(_)!==_)return;ft=!1}else for(;!(ft=(se=Qe.call(_)).done)&&(lt.push(se.value),lt.length!==D);ft=!0);}catch(jt){gt=!0,Ce=jt}finally{try{if(!ft&&_.return!=null&&(Je=_.return(),Object(Je)!==Je))return}finally{if(gt)throw Ce}}return lt}}function G(M){if(Array.isArray(M))return M}var I="tab",H=function(){var D=(0,o.TH)(),_=D.pathname,se=(0,o.lr)(),Ce=ae(se,1),Qe=Ce[0],Je=(0,r.useCallback)(function(lt){lt?Qe.set(I,lt):Qe.delete(I),o.m8.push({pathname:_,search:"?".concat(Qe.toString())})},[Qe]);return[Qe.get(I),Je]},$=function(){var D,_=Ri(),se=_.tabs,Ce=H(),Qe=ae(Ce,1),Je=Qe[0];return se==null||(D=se.find(function(lt){var ft=lt.key;return Je===ft}))===null||D===void 0?void 0:D.meta};function Y(M,D){return et(M)||at(M,D)||Re(M,D)||X()}function X(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Re(M,D){if(M){if(typeof M=="string")return Fe(M,D);var _=Object.prototype.toString.call(M).slice(8,-1);if(_==="Object"&&M.constructor&&(_=M.constructor.name),_==="Map"||_==="Set")return Array.from(M);if(_==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_))return Fe(M,D)}}function Fe(M,D){(D==null||D>M.length)&&(D=M.length);for(var _=0,se=new Array(D);_<D;_++)se[_]=M[_];return se}function at(M,D){var _=M==null?null:typeof Symbol!="undefined"&&M[Symbol.iterator]||M["@@iterator"];if(_!=null){var se,Ce,Qe,Je,lt=[],ft=!0,gt=!1;try{if(Qe=(_=_.call(M)).next,D===0){if(Object(_)!==_)return;ft=!1}else for(;!(ft=(se=Qe.call(_)).done)&&(lt.push(se.value),lt.length!==D);ft=!0);}catch(jt){gt=!0,Ce=jt}finally{try{if(!ft&&_.return!=null&&(Je=_.return(),Object(Je)!==Je))return}finally{if(gt)throw Ce}}return lt}}function et(M){if(Array.isArray(M))return M}var Ke=function(D){var _=Ri(),se=_.tabs,Ce=H(),Qe=Y(Ce,2),Je=Qe[0],lt=Qe[1],ft=(0,r.useState)(function(){return se==null?void 0:se.find(function(Gt){var Zt=Gt.key;return Zt===Je})}),gt=Y(ft,2),jt=gt[0],ln=gt[1];return r.createElement(r.Fragment,null,r.createElement(re,{tabs:se,tabKey:Je,onChange:function(Zt){ln(Zt),lt(Zt==null?void 0:Zt.key)}}),jt?r.createElement(jt.components.default):D.children)},ot=e(20551),te=e(10603);function fe(M,D){return ve(M)||ue(M,D)||me(M,D)||pe()}function pe(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function me(M,D){if(M){if(typeof M=="string")return Ie(M,D);var _=Object.prototype.toString.call(M).slice(8,-1);if(_==="Object"&&M.constructor&&(_=M.constructor.name),_==="Map"||_==="Set")return Array.from(M);if(_==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_))return Ie(M,D)}}function Ie(M,D){(D==null||D>M.length)&&(D=M.length);for(var _=0,se=new Array(D);_<D;_++)se[_]=M[_];return se}function ue(M,D){var _=M==null?null:typeof Symbol!="undefined"&&M[Symbol.iterator]||M["@@iterator"];if(_!=null){var se,Ce,Qe,Je,lt=[],ft=!0,gt=!1;try{if(Qe=(_=_.call(M)).next,D===0){if(Object(_)!==_)return;ft=!1}else for(;!(ft=(se=Qe.call(_)).done)&&(lt.push(se.value),lt.length!==D);ft=!0);}catch(jt){gt=!0,Ce=jt}finally{try{if(!ft&&_.return!=null&&(Je=_.return(),Object(Je)!==Je))return}finally{if(gt)throw Ce}}return lt}}function ve(M){if(Array.isArray(M))return M}var Ee="https://codesandbox.io/api/v1/sandboxes/define";function le(M){var D,_,se,Ce,Qe,Je=!!(!((D=M.asset.dependencies)===null||D===void 0)&&D["index.tsx"]),lt=Je?".tsx":".jsx",ft={},gt={},jt="index".concat(lt);Object.entries(M.asset.dependencies).forEach(function(Gt){var Zt=fe(Gt,2),pn=Zt[0],Un=Zt[1],_n=Un.type,Vn=Un.value;_n==="NPM"?gt[pn]=Vn:ft[pn===jt?"App".concat(lt):pn]={content:Vn,isBinary:!1}}),(se=gt[_="react"])!==null&&se!==void 0||(gt[_]="latest"),(Qe=gt[Ce="react-dom"])!==null&&Qe!==void 0||(gt[Ce]=gt.react),ft["sandbox.config.json"]={content:JSON.stringify({template:"create-react-app"},null,2),isBinary:!1},ft["package.json"]={content:JSON.stringify({name:M.title,description:M.description||"An auto-generated demo by dumi",main:jt,dependencies:gt,devDependencies:Je?{typescript:"^4"}:{}},null,2),isBinary:!1},ft["index.html"]={content:'<div style="margin: 16px;" id="root"></div>',isBinary:!1},ft[jt]={content:(0,te.AM)(gt.react),isBinary:!1};var ln=te.EV.applyPlugins({type:o.Ac.modify,key:"modifyCodeSandboxData",initialValue:{files:ft},args:M});return(0,ot.Z)(ln)}var ye=function(D,_){var se,Ce=document.createElement("form"),Qe=document.createElement("input"),Je=le(D);Ce.method="POST",Ce.target="_blank",Ce.style.display="none",Ce.action=(_==null?void 0:_.api)||Ee,Ce.appendChild(Qe),Ce.setAttribute("data-demo",((se=D.assets)===null||se===void 0?void 0:se.id)||""),Qe.name="parameters",Qe.value=Je,document.body.appendChild(Ce),Ce.submit(),Ce.remove()},Be=e(26801),oe=e.n(Be),he=e(94312),Ae=e.n(he),Ue=e(24127),He=e.n(Ue),it=e(5773),y=e.n(it),Q=e(11006),be=e.n(Q),we=500,ze=20,We=300,Pe="https://stackblitz.com",Xe=["angular-cli","create-react-app","html","javascript","node","polymer","typescript","vue"],ct=["project","search","ports","settings"],Ve=["light","dark"],Pt=["editor","preview"],xe={clickToLoad:function(D){return Ze("ctl",D)},devToolsHeight:function(D){return ut("devtoolsheight",D)},forceEmbedLayout:function(D){return Ze("embed",D)},hideDevTools:function(D){return Ze("hidedevtools",D)},hideExplorer:function(D){return Ze("hideExplorer",D)},hideNavigation:function(D){return Ze("hideNavigation",D)},openFile:function(D){return bt("file",D)},showSidebar:function(D){return Le("showSidebar",D)},sidebarView:function(D){return st("sidebarView",D,ct)},startScript:function(D){return bt("startScript",D)},terminalHeight:function(D){return ut("terminalHeight",D)},theme:function(D){return st("theme",D,Ve)},view:function(D){return st("view",D,Pt)},zenMode:function(D){return Ze("zenMode",D)}};function tt(){var M=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},D=Object.entries(M).map(function(_){var se=be()(_,2),Ce=se[0],Qe=se[1];return Qe!=null&&xe.hasOwnProperty(Ce)?xe[Ce](Qe):""}).filter(Boolean);return D.length?"?".concat(D.join("&")):""}function Ze(M,D){return D===!0?"".concat(M,"=1"):""}function Le(M,D){return typeof D=="boolean"?"".concat(M,"=").concat(D?"1":"0"):""}function ut(M,D){if(typeof D=="number"&&!Number.isNaN(D)){var _=Math.min(100,Math.max(0,D));return"".concat(M,"=").concat(encodeURIComponent(Math.round(_)))}return""}function st(M){var D=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",_=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];return _.includes(D)?"".concat(M,"=").concat(encodeURIComponent(D)):""}function bt(M,D){var _=Array.isArray(D)?D:[D];return _.filter(function(se){return typeof se=="string"&&se.trim()!==""}).map(function(se){return"".concat(M,"=").concat(encodeURIComponent(se))}).join("&")}function kt(){return Math.random().toString(36).slice(2,6)+Math.random().toString(36).slice(2,6)}function Kt(M,D){return"".concat(dn(D)).concat(M).concat(tt(D))}function xn(M,D){var _={forceEmbedLayout:!0};return D&&y()(D)==="object"&&Object.assign(_,D),"".concat(dn(_)).concat(M).concat(tt(_))}function dn(){var M=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},D=typeof M.origin=="string"?M.origin:Pe;return D.replace(/\/$/,"")}function In(M,D,_){if(!D||!M||!M.parentNode)throw new Error("Invalid Element");M.id&&(D.id=M.id),M.className&&(D.className=M.className),Br(D,_),M.replaceWith(D)}function Bn(M){if(typeof M=="string"){var D=document.getElementById(M);if(!D)throw new Error("Could not find element with id '".concat(M,"'"));return D}else if(M instanceof HTMLElement)return M;throw new Error("Invalid element: ".concat(M))}function Ar(M){return M&&M.newWindow===!1?"_self":"_blank"}function Br(M){var D=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},_=Object.hasOwnProperty.call(D,"height")?"".concat(D.height):"".concat(We),se=Object.hasOwnProperty.call(D,"width")?"".concat(D.width):void 0;M.setAttribute("height",_),se?M.setAttribute("width",se):M.setAttribute("style","width:100%;")}var wt=function(){function M(D){Ae()(this,M),this.pending={},this.port=D,this.port.onmessage=this.messageListener.bind(this)}return He()(M,[{key:"request",value:function(_){var se=this,Ce=_.type,Qe=_.payload;return new Promise(function(Je,lt){var ft=kt();se.pending[ft]={resolve:Je,reject:lt},se.port.postMessage({type:Ce,payload:oe()(oe()({},Qe),{},{__reqid:ft})})})}},{key:"messageListener",value:function(_){var se;if(typeof((se=_.data.payload)===null||se===void 0?void 0:se.__reqid)=="string"){var Ce=_.data,Qe=Ce.type,Je=Ce.payload,lt=Je.__reqid,ft=Je.__success,gt=Je.__error;this.pending[lt]&&(ft?this.pending[lt].resolve(this.cleanResult(Je)):this.pending[lt].reject(gt?"".concat(Qe,": ").concat(gt):Qe),delete this.pending[lt])}}},{key:"cleanResult",value:function(_){var se=oe()({},_);return delete se.__reqid,delete se.__success,delete se.__error,Object.keys(se).length?se:null}}]),M}(),dt=function(){function M(D,_){var se=this;Ae()(this,M),this.editor={openFile:function(Qe){return se._rdc.request({type:"SDK_OPEN_FILE",payload:{path:Qe}})},setCurrentFile:function(Qe){return se._rdc.request({type:"SDK_SET_CURRENT_FILE",payload:{path:Qe}})},setTheme:function(Qe){return se._rdc.request({type:"SDK_SET_UI_THEME",payload:{theme:Qe}})},setView:function(Qe){return se._rdc.request({type:"SDK_SET_UI_VIEW",payload:{view:Qe}})},showSidebar:function(){var Qe=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return se._rdc.request({type:"SDK_TOGGLE_SIDEBAR",payload:{visible:Qe}})}},this.preview={origin:"",getUrl:function(){return se._rdc.request({type:"SDK_GET_PREVIEW_URL",payload:{}}).then(function(Qe){var Je;return(Je=Qe==null?void 0:Qe.url)!==null&&Je!==void 0?Je:null})},setUrl:function(){var Qe=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"/";if(typeof Qe!="string"||!Qe.startsWith("/"))throw new Error("Invalid argument: expected a path starting with '/', got '".concat(Qe,"'"));return se._rdc.request({type:"SDK_SET_PREVIEW_URL",payload:{path:Qe}})}},this._rdc=new wt(D),Object.defineProperty(this.preview,"origin",{value:typeof _.previewOrigin=="string"?_.previewOrigin:null,writable:!1})}return He()(M,[{key:"applyFsDiff",value:function(_){var se=function(Qe){return Qe!==null&&y()(Qe)==="object"};if(!se(_)||!se(_.create))throw new Error("Invalid diff object: expected diff.create to be an object.");if(!Array.isArray(_.destroy))throw new Error("Invalid diff object: expected diff.destroy to be an array.");return this._rdc.request({type:"SDK_APPLY_FS_DIFF",payload:_})}},{key:"getDependencies",value:function(){return this._rdc.request({type:"SDK_GET_DEPS_SNAPSHOT",payload:{}})}},{key:"getFsSnapshot",value:function(){return this._rdc.request({type:"SDK_GET_FS_SNAPSHOT",payload:{}})}}]),M}(),pt=[],Ut=He()(function M(D){var _=this;Ae()(this,M),this.id=kt(),this.element=D,this.pending=new Promise(function(se,Ce){var Qe=function(ln){var Gt=ln.data,Zt=ln.ports;(Gt==null?void 0:Gt.action)==="SDK_INIT_SUCCESS"&&Gt.id===_.id&&(_.vm=new dt(Zt[0],Gt.payload),se(_.vm),lt())},Je=function(){var ln;(ln=_.element.contentWindow)===null||ln===void 0||ln.postMessage({action:"SDK_INIT",id:_.id},"*")};function lt(){window.clearInterval(gt),window.removeEventListener("message",Qe)}window.addEventListener("message",Qe),Je();var ft=0,gt=window.setInterval(function(){if(_.vm){lt();return}if(ft>=ze){lt(),Ce("Timeout: Unable to establish a connection with the StackBlitz VM"),pt.forEach(function(jt,ln){jt.id===_.id&&pt.splice(ln,1)});return}ft++,Je()},we)}),pt.push(this)}),on=function(D){var _,se=D instanceof Element?"element":"id";return(_=pt.find(function(Ce){return Ce[se]===D}))!==null&&_!==void 0?_:null};function qt(M,D){var _=document.createElement("input");return _.type="hidden",_.name=M,_.value=D,_}function Ln(M){return M.replace(/\[/g,"%5B").replace(/\]/g,"%5D")}function ar(M){var D=M.template,_=M.title,se=M.description,Ce=M.dependencies,Qe=M.files,Je=M.settings;if(!Xe.includes(D)){var lt=Xe.map(function(ln){return"'".concat(ln,"'")}).join(", ");console.warn("Unsupported project.template: must be one of ".concat(lt))}var ft=[],gt=function(Gt,Zt){var pn=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"";ft.push(qt(Gt,typeof Zt=="string"?Zt:pn))};gt("project[title]",_),typeof se=="string"&&se.length>0&&gt("project[description]",se),gt("project[template]",D,"javascript"),Ce&&(D==="node"?console.warn("Invalid project.dependencies: dependencies must be provided as a 'package.json' file when using the 'node' template."):gt("project[dependencies]",JSON.stringify(Ce))),Je&&gt("project[settings]",JSON.stringify(Je)),Object.entries(Qe).forEach(function(ln){var Gt=be()(ln,2),Zt=Gt[0],pn=Gt[1];gt("project[files][".concat(Ln(Zt),"]"),pn)});var jt=document.createElement("form");return jt.method="POST",jt.setAttribute("style","display:none!important;"),jt.append.apply(jt,ft),jt}function Gn(M,D){var _=ar(M);_.action=xn("/run",D),_.id="sb_run";var se=`<!doctype html>
<html>
<head><title></title></head>
<body>
  `.concat(_.outerHTML,`
  <script>document.getElementById('`).concat(_.id,`').submit();<\/script>
</body>
</html>`);return se}function Gr(M,D){var _=ar(M);_.action=Kt("/run",D),_.target=Ar(D),document.body.appendChild(_),_.submit(),document.body.removeChild(_)}function Fn(M){var D;if(!(M!=null&&M.contentWindow))return Promise.reject("Provided element is not an iframe.");var _=(D=on(M))!==null&&D!==void 0?D:new Ut(M);return _.pending}function Dr(M,D){Gr(M,D)}function ni(M,D){var _=Kt("/edit/".concat(M),D),se=Ar(D);window.open(_,se)}function sr(M,D){var _=Kt("/github/".concat(M),D),se=Ar(D);window.open(_,se)}function wi(M,D,_){var se,Ce=Bn(M),Qe=Gn(D,_),Je=document.createElement("iframe");return In(Ce,Je,_),(se=Je.contentDocument)===null||se===void 0||se.write(Qe),Fn(Je)}function za(M,D,_){var se=Bn(M),Ce=document.createElement("iframe");return Ce.src=xn("/edit/".concat(D),_),In(se,Ce,_),Fn(Ce)}function ri(M,D,_){var se=Bn(M),Ce=document.createElement("iframe");return Ce.src=xn("/github/".concat(D),_),In(se,Ce,_),Fn(Ce)}var bo={connect:Fn,embedGithubProject:ri,embedProject:wi,embedProjectId:za,openGithubProject:sr,openProject:Dr,openProjectId:ni};function _o(M,D){return wa(M)||Ii(M,D)||xo(M,D)||jo()}function jo(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function xo(M,D){if(M){if(typeof M=="string")return pa(M,D);var _=Object.prototype.toString.call(M).slice(8,-1);if(_==="Object"&&M.constructor&&(_=M.constructor.name),_==="Map"||_==="Set")return Array.from(M);if(_==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_))return pa(M,D)}}function pa(M,D){(D==null||D>M.length)&&(D=M.length);for(var _=0,se=new Array(D);_<D;_++)se[_]=M[_];return se}function Ii(M,D){var _=M==null?null:typeof Symbol!="undefined"&&M[Symbol.iterator]||M["@@iterator"];if(_!=null){var se,Ce,Qe,Je,lt=[],ft=!0,gt=!1;try{if(Qe=(_=_.call(M)).next,D===0){if(Object(_)!==_)return;ft=!1}else for(;!(ft=(se=Qe.call(_)).done)&&(lt.push(se.value),lt.length!==D);ft=!0);}catch(jt){gt=!0,Ce=jt}finally{try{if(!ft&&_.return!=null&&(Je=_.return(),Object(Je)!==Je))return}finally{if(gt)throw Ce}}return lt}}function wa(M){if(Array.isArray(M))return M}var Hi=function(D){var _,se,Ce,Qe,Je,lt=!!(!((_=D.asset.dependencies)===null||_===void 0)&&_["index.tsx"]),ft=lt?".tsx":".jsx",gt={},jt="index".concat(ft),ln={"index.html":'<div style="margin: 16px;" id="root"></div>'},Gt={title:D.title||"",description:D.description||"An auto-generated demo by dumi",template:"create-react-app",files:{}};Object.entries(D.asset.dependencies).forEach(function(pn){var Un=_o(pn,2),_n=Un[0],Vn=Un[1],Ir=Vn.type,kr=Vn.value;Ir==="NPM"?gt[_n]=kr:ln[_n===jt?"App".concat(ft):_n]=kr}),(Ce=gt[se="react"])!==null&&Ce!==void 0||(gt[se]="latest"),(Je=gt[Qe="react-dom"])!==null&&Je!==void 0||(gt[Qe]=gt.react),ln["package.json"]=JSON.stringify({name:D.title,description:D.description||"An auto-generated demo by dumi",dependencies:gt,devDependencies:lt?{typescript:"^4"}:{}},null,2),ln[jt]=(0,te.AM)(gt.react),Gt.files=ln;var Zt=te.EV.applyPlugins({type:o.Ac.modify,key:"modifyStackBlitzData",initialValue:Gt,args:D});bo.openProject(Zt)},Qu=function(){var D=useSiteData(),_=D.components;return{components:_}},$a=e(34203);function to(M){"@babel/helpers - typeof";return to=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(D){return typeof D}:function(D){return D&&typeof Symbol=="function"&&D.constructor===Symbol&&D!==Symbol.prototype?"symbol":typeof D},to(M)}function wo(M,D){var _=Object.keys(M);if(Object.getOwnPropertySymbols){var se=Object.getOwnPropertySymbols(M);D&&(se=se.filter(function(Ce){return Object.getOwnPropertyDescriptor(M,Ce).enumerable})),_.push.apply(_,se)}return _}function Io(M){for(var D=1;D<arguments.length;D++){var _=arguments[D]!=null?arguments[D]:{};D%2?wo(Object(_),!0).forEach(function(se){_a(M,se,_[se])}):Object.getOwnPropertyDescriptors?Object.defineProperties(M,Object.getOwnPropertyDescriptors(_)):wo(Object(_)).forEach(function(se){Object.defineProperty(M,se,Object.getOwnPropertyDescriptor(_,se))})}return M}function _a(M,D,_){return D=du(D),D in M?Object.defineProperty(M,D,{value:_,enumerable:!0,configurable:!0,writable:!0}):M[D]=_,M}function du(M){var D=Ti(M,"string");return to(D)==="symbol"?D:String(D)}function Ti(M,D){if(to(M)!=="object"||M===null)return M;var _=M[Symbol.toPrimitive];if(_!==void 0){var se=_.call(M,D||"default");if(to(se)!=="object")return se;throw new TypeError("@@toPrimitive must return a primitive value.")}return(D==="string"?String:Number)(M)}function To(M,D){var _=typeof Symbol!="undefined"&&M[Symbol.iterator]||M["@@iterator"];if(!_){if(Array.isArray(M)||(_=Oi(M))||D&&M&&typeof M.length=="number"){_&&(M=_);var se=0,Ce=function(){};return{s:Ce,n:function(){return se>=M.length?{done:!0}:{done:!1,value:M[se++]}},e:function(gt){throw gt},f:Ce}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Qe=!0,Je=!1,lt;return{s:function(){_=_.call(M)},n:function(){var gt=_.next();return Qe=gt.done,gt},e:function(gt){Je=!0,lt=gt},f:function(){try{!Qe&&_.return!=null&&_.return()}finally{if(Je)throw lt}}}}function Kr(M){return Ia(M)||Pr(M)||Oi(M)||Fr()}function Fr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Pr(M){if(typeof Symbol!="undefined"&&M[Symbol.iterator]!=null||M["@@iterator"]!=null)return Array.from(M)}function Ia(M){if(Array.isArray(M))return Zi(M)}function Ta(M,D){return pu(M)||vu(M,D)||Oi(M,D)||nr()}function nr(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Oi(M,D){if(M){if(typeof M=="string")return Zi(M,D);var _=Object.prototype.toString.call(M).slice(8,-1);if(_==="Object"&&M.constructor&&(_=M.constructor.name),_==="Map"||_==="Set")return Array.from(M);if(_==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_))return Zi(M,D)}}function Zi(M,D){(D==null||D>M.length)&&(D=M.length);for(var _=0,se=new Array(D);_<D;_++)se[_]=M[_];return se}function vu(M,D){var _=M==null?null:typeof Symbol!="undefined"&&M[Symbol.iterator]||M["@@iterator"];if(_!=null){var se,Ce,Qe,Je,lt=[],ft=!0,gt=!1;try{if(Qe=(_=_.call(M)).next,D===0){if(Object(_)!==_)return;ft=!1}else for(;!(ft=(se=Qe.call(_)).done)&&(lt.push(se.value),lt.length!==D);ft=!0);}catch(jt){gt=!0,Ce=jt}finally{try{if(!ft&&_.return!=null&&(Je=_.return(),Object(Je)!==Je))return}finally{if(gt)throw Ce}}return lt}}function pu(M){if(Array.isArray(M))return M}var ai="$default-group-title",oi=function(D,_){return"base"in _?D.replace(_.base.slice(1),"").replace(/^\//,""):D};function so(M,D){var _=D.meta,se=D.is2LevelNav,Ce=D.locale,Qe=new RegExp("/index(\\.".concat(Ce.id,")?.md$")),Je=(_==null?void 0:_.frontmatter.filename)&&Qe.test(_.frontmatter.filename)&&!_._atom_route&&se,lt=M.split("/").filter(Boolean),ft=Math.min(Math.max(Je?lt.length:lt.length-1,1),se?2:1/0);return lt.slice(0,ft).join("/")}var Ha=function(){var D=(0,$a.b)(),_=(0,te.RX)(),se=(0,m.W)(),Ce=se.themeConfig,Qe=se._2_level_nav_available,Je=(0,te.M7)(),lt=(0,r.useState)(function(){var jt=Object.values(_).reduce(function(Gt,Zt){var pn=oi(Zt.path,D);if(pn&&Zt.meta){var Un,_n,Vn,Ir="/".concat(Zt.path.replace(pn,function(Ba){return so(Ba,{is2LevelNav:Qe,meta:Zt.meta,locale:D})})),kr=(0,te.qu)({order:0},"group",Zt.meta.frontmatter),Oa=kr.title,ja=kr.order,ea=Oa||ai;(Un=Gt[Ir])!==null&&Un!==void 0||(Gt[Ir]={}),Gt[Ir][ea]={title:Oa,order:((_n=Gt[Ir][ea])===null||_n===void 0?void 0:_n.order)||ja,children:[].concat(Kr(((Vn=Gt[Ir][ea])===null||Vn===void 0?void 0:Vn.children)||[]),[{title:Zt.meta.frontmatter.title,link:"/".concat(Zt.path),order:Zt.meta.frontmatter.order||0,frontmatter:Zt.meta.frontmatter}])}}return Gt},{}),ln=Object.entries(jt).reduce(function(Gt,Zt){var pn=Ta(Zt,2),Un=pn[0],_n=pn[1];return Gt[Un]=Object.values(_n).sort(Je),Gt[Un].forEach(function(Vn){return Vn.children.sort(Je)}),Gt},{});return Object.assign(ln,Ce.sidebar)}),ft=Ta(lt,1),gt=ft[0];return gt};function no(M){var D={order:0,title:""},_=To(M),se;try{for(_.s();!(se=_.n()).done;){var Ce=se.value,Qe=To(Ce.children),Je;try{for(Qe.s();!(Je=Qe.n()).done;){var lt=Je.value;"frontmatter"in lt&&pickRouteSortMeta(D,"nav",lt.frontmatter)}}catch(ft){Qe.e(ft)}finally{Qe.f()}}}catch(ft){_.e(ft)}finally{_.f()}return D}var Oo=function(){var D=Ha(),_=useRouteDataComparer(),se=useState(function(){var Je=Object.entries(D).sort(function(lt,ft){return ft[0].split("/").length-lt[0].split("/").length}).reduce(function(lt,ft){var gt=Ta(ft,2),jt=gt[0],ln=gt[1],Gt=jt.replace(/\/[^/]+$/,"");if(Gt){var Zt;if((Zt=lt[Gt])!==null&&Zt!==void 0||(lt[Gt]=Io({path:Gt,children:D[Gt]||[]},no(D[Gt]||[]))),lt[jt])lt[jt].children.sort(_),lt[Gt].children.push(lt[jt]),delete lt[jt];else{var pn;(pn=lt[Gt].children).push.apply(pn,Kr(ln))}}else ln.sort(_),lt[jt]=Io({path:jt,children:ln},no(ln));return lt},{});return Object.values(Je)}),Ce=Ta(se,1),Qe=Ce[0];return Qe},co=function(){var D=(0,$a.b)(),_=Ha(),se=(0,m.W)(),Ce=se._2_level_nav_available,Qe=(0,o.TH)(),Je=Qe.pathname,lt=Ri(),ft=oi(Je.slice(1),D),gt=ft?Je.replace(ft,function(jt){return so(jt,{is2LevelNav:Ce,meta:lt,locale:D})}):Je;return gt?_[gt]:[]};function ro(M){"@babel/helpers - typeof";return ro=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(D){return typeof D}:function(D){return D&&typeof Symbol=="function"&&D.constructor===Symbol&&D!==Symbol.prototype?"symbol":typeof D},ro(M)}function Za(M){return Xu(M)||El(M)||hu(M)||sa()}function sa(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function El(M){if(typeof Symbol!="undefined"&&M[Symbol.iterator]!=null||M["@@iterator"]!=null)return Array.from(M)}function Xu(M){if(Array.isArray(M))return Bo(M)}function fo(M,D){return bl(M)||Mr(M,D)||hu(M,D)||Sl()}function Sl(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function hu(M,D){if(M){if(typeof M=="string")return Bo(M,D);var _=Object.prototype.toString.call(M).slice(8,-1);if(_==="Object"&&M.constructor&&(_=M.constructor.name),_==="Map"||_==="Set")return Array.from(M);if(_==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_))return Bo(M,D)}}function Bo(M,D){(D==null||D>M.length)&&(D=M.length);for(var _=0,se=new Array(D);_<D;_++)se[_]=M[_];return se}function Mr(M,D){var _=M==null?null:typeof Symbol!="undefined"&&M[Symbol.iterator]||M["@@iterator"];if(_!=null){var se,Ce,Qe,Je,lt=[],ft=!0,gt=!1;try{if(Qe=(_=_.call(M)).next,D===0){if(Object(_)!==_)return;ft=!1}else for(;!(ft=(se=Qe.call(_)).done)&&(lt.push(se.value),lt.length!==D);ft=!0);}catch(jt){gt=!0,Ce=jt}finally{try{if(!ft&&_.return!=null&&(Je=_.return(),Object(Je)!==Je))return}finally{if(gt)throw Ce}}return lt}}function bl(M){if(Array.isArray(M))return M}function ii(M,D){var _=Object.keys(M);if(Object.getOwnPropertySymbols){var se=Object.getOwnPropertySymbols(M);D&&(se=se.filter(function(Ce){return Object.getOwnPropertyDescriptor(M,Ce).enumerable})),_.push.apply(_,se)}return _}function Ci(M){for(var D=1;D<arguments.length;D++){var _=arguments[D]!=null?arguments[D]:{};D%2?ii(Object(_),!0).forEach(function(se){ui(M,se,_[se])}):Object.getOwnPropertyDescriptors?Object.defineProperties(M,Object.getOwnPropertyDescriptors(_)):ii(Object(_)).forEach(function(se){Object.defineProperty(M,se,Object.getOwnPropertyDescriptor(_,se))})}return M}function ui(M,D,_){return D=Wi(D),D in M?Object.defineProperty(M,D,{value:_,enumerable:!0,configurable:!0,writable:!0}):M[D]=_,M}function Wi(M){var D=li(M,"string");return ro(D)==="symbol"?D:String(D)}function li(M,D){if(ro(M)!=="object"||M===null)return M;var _=M[Symbol.toPrimitive];if(_!==void 0){var se=_.call(M,D||"default");if(ro(se)!=="object")return se;throw new TypeError("@@toPrimitive must return a primitive value.")}return(D==="string"?String:Number)(M)}function Co(M,D,_,se){return Ci({title:M.title||D[0].title||D[0].children[0].title,order:M.order||0,activePath:_},se?{link:se}:{})}var Gi=function(){var D=(0,$a.b)(),_=(0,te.RX)(),se=(0,m.W)(),Ce=se.themeConfig,Qe=se._2_level_nav_available,Je=Ha(),lt=(0,te.M7)(),ft=(0,r.useState)(function(){var ln=[],Gt;if(Ce.nav&&("mode"in Ce.nav&&typeof Ce.nav.mode=="string"?(Gt=Ce.nav.mode,ln=(0,te.m7)(Ce.nav.value,D)):"mode"in Ce.nav||(ln=(0,te.m7)(Ce.nav,D)),!Gt||Gt==="override"))return ln;var Zt=Object.values(Object.entries(Je).sort(function(pn,Un){var _n=fo(pn,1),Vn=_n[0],Ir=fo(Un,1),kr=Ir[0];return Vn.split("/").length-kr.split("/").length}).reduce(function(pn,Un){var _n=fo(Un,2),Vn=_n[0],Ir=_n[1],kr=oi(Vn.replace(/^\//,""),D),Oa=Vn.replace(kr,function(ao){return so(ao,{is2LevelNav:Qe,locale:D})}),ja=Vn.length>Oa.length&&Qe,ea=Object.values(_).reduce(function(ao,Wo){return Wo.path.startsWith(Vn.slice(1))&&((0,te.qu)(ao[0],"nav",Wo.meta.frontmatter),ja&&(0,te.qu)(ao[1],"nav.second",Wo.meta.frontmatter)),ao},[{},{}]),Ba=fo(ea,2),Mo=Ba[0],Ho=Ba[1];if(ja){var di,Ro,Zo;(di=Mo.title)!==null&&di!==void 0||(Mo.title=Oa.split("/").pop().replace(/^[a-z]/,function(ao){return ao.toUpperCase()}));var vi=(Ro=pn[Oa])!==null&&Ro!==void 0?Ro:pn[Oa]=Co(Mo,Ir,Oa);(Zo=vi.children)!==null&&Zo!==void 0||(vi.children=[]),vi.children.push(Co(Ho,Ir,Vn,Ir[0].children[0].link))}else pn[Vn]=Co(Mo,Ir,Vn,Ir[0].children[0].link);return pn},{}));return Zt.forEach(function(pn,Un){var _n;!pn.link&&((_n=pn.children)===null||_n===void 0?void 0:_n.length)===1?Zt[Un]=pn.children[0]:pn.children&&pn.children.sort(lt)}),Zt.sort(lt),Gt==="prepend"?Zt.unshift.apply(Zt,Za(ln)):Gt==="append"&&Zt.push.apply(Zt,Za(ln)),Zt}),gt=fo(ft,1),jt=gt[0];return jt};function Ao(M){"@babel/helpers - typeof";return Ao=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(D){return typeof D}:function(D){return D&&typeof Symbol=="function"&&D.constructor===Symbol&&D!==Symbol.prototype?"symbol":typeof D},Ao(M)}function Ki(M,D){return Fo(M)||Yi(M,D)||Po(M,D)||Ju()}function Ju(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Po(M,D){if(M){if(typeof M=="string")return Vi(M,D);var _=Object.prototype.toString.call(M).slice(8,-1);if(_==="Object"&&M.constructor&&(_=M.constructor.name),_==="Map"||_==="Set")return Array.from(M);if(_==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_))return Vi(M,D)}}function Vi(M,D){(D==null||D>M.length)&&(D=M.length);for(var _=0,se=new Array(D);_<D;_++)se[_]=M[_];return se}function Yi(M,D){var _=M==null?null:typeof Symbol!="undefined"&&M[Symbol.iterator]||M["@@iterator"];if(_!=null){var se,Ce,Qe,Je,lt=[],ft=!0,gt=!1;try{if(Qe=(_=_.call(M)).next,D===0){if(Object(_)!==_)return;ft=!1}else for(;!(ft=(se=Qe.call(_)).done)&&(lt.push(se.value),lt.length!==D);ft=!0);}catch(jt){gt=!0,Ce=jt}finally{try{if(!ft&&_.return!=null&&(Je=_.return(),Object(Je)!==Je))return}finally{if(gt)throw Ce}}return lt}}function Fo(M){if(Array.isArray(M))return M}function Qi(M,D){if(!(M instanceof D))throw new TypeError("Cannot call a class as a function")}function si(M,D){for(var _=0;_<D.length;_++){var se=D[_];se.enumerable=se.enumerable||!1,se.configurable=!0,"value"in se&&(se.writable=!0),Object.defineProperty(M,Uo(se.key),se)}}function Ai(M,D,_){return D&&si(M.prototype,D),_&&si(M,_),Object.defineProperty(M,"prototype",{writable:!1}),M}function ca(M,D,_){return D=Uo(D),D in M?Object.defineProperty(M,D,{value:_,enumerable:!0,configurable:!0,writable:!0}):M[D]=_,M}function Uo(M){var D=zo(M,"string");return Ao(D)==="symbol"?D:String(D)}function zo(M,D){if(Ao(M)!=="object"||M===null)return M;var _=M[Symbol.toPrimitive];if(_!==void 0){var se=_.call(M,D||"default");if(Ao(se)!=="object")return se;throw new TypeError("@@toPrimitive must return a primitive value.")}return(D==="string"?String:Number)(M)}var ha,xl=function(){function M(D){var _=this;Qi(this,M),ca(this,"color",void 0),ca(this,"prefersColor",void 0),ca(this,"callbacks",[]),this.prefersColor=navigator.cookieEnabled&&localStorage.getItem(E.PREFERS_COLOR_LS_KEY)||D.default,this.color=document.documentElement.getAttribute(E.PREFERS_COLOR_ATTR),["light","dark"].forEach(function(se){var Ce=_.getColorMedia(se),Qe=function(lt){lt.matches&&_.prefersColor==="auto"&&(_.color=se,document.documentElement.setAttribute(E.PREFERS_COLOR_ATTR,se),_.applyCallbacks())};Ce.addEventListener?Ce.addEventListener("change",Qe):Ce.addListener&&Ce.addListener(Qe)})}return Ai(M,[{key:"getColorMedia",value:function(_){return window.matchMedia("(prefers-color-scheme: ".concat(_,")"))}},{key:"isColorMode",value:function(_){return this.getColorMedia(_).matches}},{key:"applyCallbacks",value:function(){var _=this;this.callbacks.forEach(function(se){return se({color:_.color,prefersColor:_.prefersColor})})}},{key:"listen",value:function(_){this.callbacks.push(_)}},{key:"unlisten",value:function(_){this.callbacks.splice(this.callbacks.indexOf(_),1)}},{key:"tryPrefersColor",value:function(_){return navigator.cookieEnabled&&localStorage.setItem(E.PREFERS_COLOR_LS_KEY,_),this.prefersColor=_,this.color=_==="auto"?this.isColorMode("dark")?"dark":"light":_,document.documentElement.setAttribute(E.PREFERS_COLOR_ATTR,_),this.applyCallbacks(),_}}]),M}(),gu=function(){var D=(0,m.W)(),_=D.themeConfig,se=(0,r.useState)(),Ce=Ki(se,2),Qe=Ce[0],Je=Ce[1],lt=(0,r.useState)(),ft=Ki(lt,2),gt=ft[0],jt=ft[1],ln=(0,r.useCallback)(function(Zt){ha.tryPrefersColor(Zt)},[]),Gt=(0,r.useCallback)(function(Zt){Je(Zt.color),jt(Zt.prefersColor)},[]);return(0,r.useEffect)(function(){var Zt;return(Zt=ha)!==null&&Zt!==void 0||(ha=new xl({default:_.prefersColor.default})),ha.listen(Gt),Je(ha.color),jt(ha.prefersColor),function(){return ha.unlisten(Gt)}},[]),[Qe,gt,ln]};function mu(M,D){return qu(M)||wl(M,D)||Mi(M,D)||Pi()}function Pi(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Mi(M,D){if(M){if(typeof M=="string")return yu(M,D);var _=Object.prototype.toString.call(M).slice(8,-1);if(_==="Object"&&M.constructor&&(_=M.constructor.name),_==="Map"||_==="Set")return Array.from(M);if(_==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_))return yu(M,D)}}function yu(M,D){(D==null||D>M.length)&&(D=M.length);for(var _=0,se=new Array(D);_<D;_++)se[_]=M[_];return se}function wl(M,D){var _=M==null?null:typeof Symbol!="undefined"&&M[Symbol.iterator]||M["@@iterator"];if(_!=null){var se,Ce,Qe,Je,lt=[],ft=!0,gt=!1;try{if(Qe=(_=_.call(M)).next,D===0){if(Object(_)!==_)return;ft=!1}else for(;!(ft=(se=Qe.call(_)).done)&&(lt.push(se.value),lt.length!==D);ft=!0);}catch(jt){gt=!0,Ce=jt}finally{try{if(!ft&&_.return!=null&&(Je=_.return(),Object(Je)!==Je))return}finally{if(gt)throw Ce}}return lt}}function qu(M){if(Array.isArray(M))return M}var Ri=function(){var D=(0,o.Qt)(),_=D.route,se=(0,o.TH)(),Ce=se.pathname,Qe=(0,o.Ov)(),Je=Qe.clientRoutes,lt=(0,r.useCallback)(function(){var Gt;if(_.path===Ce&&!("isLayout"in _))Gt=_.meta;else{var Zt,pn,Un=(Zt=(0,o.fp)(Je,Ce))===null||Zt===void 0?void 0:Zt.pop();Gt=Un==null||(pn=Un.route)===null||pn===void 0?void 0:pn.meta}return Gt||{frontmatter:{},toc:[],texts:[]}},[Je.length,Ce]),ft=(0,r.useState)(lt),gt=mu(ft,2),jt=gt[0],ln=gt[1];return(0,te.LI)(function(){ln(lt)},[Je.length,Ce]),jt},Eu='"use strict";(()=>{var P=Object.create;var I=Object.defineProperty;var z=Object.getOwnPropertyDescriptor;var D=Object.getOwnPropertyNames,R=Object.getOwnPropertySymbols,B=Object.getPrototypeOf,E=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var O=(e,t,i)=>t in e?I(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,M=(e,t)=>{for(var i in t||(t={}))E.call(t,i)&&O(e,i,t[i]);if(R)for(var i of R(t))L.call(t,i)&&O(e,i,t[i]);return e};var F=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var N=(e,t,i,h)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of D(t))!E.call(e,a)&&a!==i&&I(e,a,{get:()=>t[a],enumerable:!(h=z(t,a))||h.enumerable});return e};var W=(e,t,i)=>(i=e!=null?P(B(e)):{},N(t||!e||!e.__esModule?I(i,"default",{value:e,enumerable:!0}):i,e));var j=F((K,w)=>{w.exports=function(e){var t={};function i(h){if(t[h])return t[h].exports;var a=t[h]={exports:{},id:h,loaded:!1};return e[h].call(a.exports,a,a.exports,i),a.loaded=!0,a.exports}return i.m=e,i.c=t,i.p="",i(0)}([function(e,t,i){e.exports=i(1)},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var h=i(2);Object.defineProperty(t,"combineChunks",{enumerable:!0,get:function(){return h.combineChunks}}),Object.defineProperty(t,"fillInChunks",{enumerable:!0,get:function(){return h.fillInChunks}}),Object.defineProperty(t,"findAll",{enumerable:!0,get:function(){return h.findAll}}),Object.defineProperty(t,"findChunks",{enumerable:!0,get:function(){return h.findChunks}})},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=t.findAll=function(s){var n=s.autoEscape,g=s.caseSensitive,f=g===void 0?!1:g,p=s.findChunks,u=p===void 0?a:p,c=s.sanitize,v=s.searchWords,T=s.textToHighlight;return l({chunksToHighlight:h({chunks:u({autoEscape:n,caseSensitive:f,sanitize:c,searchWords:v,textToHighlight:T})}),totalLength:T?T.length:0})},h=t.combineChunks=function(s){var n=s.chunks;return n=n.sort(function(g,f){return g.start-f.start}).reduce(function(g,f){if(g.length===0)return[f];var p=g.pop();if(f.start<=p.end){var u=Math.max(p.end,f.end);g.push({highlight:!1,start:p.start,end:u})}else g.push(p,f);return g},[]),n},a=function(s){var n=s.autoEscape,g=s.caseSensitive,f=s.sanitize,p=f===void 0?d:f,u=s.searchWords,c=s.textToHighlight;return c=p(c),u.filter(function(v){return v}).reduce(function(v,T){T=p(T),n&&(T=r(T));for(var m=new RegExp(T,g?"g":"gi"),x=void 0;x=m.exec(c);){var S=x.index,$=m.lastIndex;$>S&&v.push({highlight:!1,start:S,end:$}),x.index===m.lastIndex&&m.lastIndex++}return v},[])};t.findChunks=a;var l=t.fillInChunks=function(s){var n=s.chunksToHighlight,g=s.totalLength,f=[],p=function(v,T,m){T-v>0&&f.push({start:v,end:T,highlight:m})};if(n.length===0)p(0,g,!1);else{var u=0;n.forEach(function(c){p(u,c.start,!1),p(c.start,c.end,!0),u=c.end}),p(u,g,!1)}return f};function d(o){return o}function r(o){return o.replace(/[\\-\\[\\]\\/\\{\\}\\(\\)\\*\\+\\?\\.\\\\\\^\\$\\|]/g,"\\\\$&")}}])});var C=W(j());var H="tab";function k(e,t,i,h,a){let l=a!==void 0;return h.reduce((r,o)=>(o.tocIndex===a&&(r[o.paraId]=(r[o.paraId]||"").concat(o.value)),r),[]).filter(Boolean).length||l?{rawTitle:e,title:t,link:i,paragraphs:h.reduce((r,o)=>{var s,n;return o.tocIndex===a&&((n=r[s=o.paraId])!=null||(r[s]=""),r[o.paraId]+=o.value),r},[]).filter(Boolean)}:null}function y(e){return[e.title,e.subtitle].filter(Boolean).join(" ")}function _(e,t,i){let h=[],a=Object.values(t).reduce((l,d)=>{var r,o;return d.asset&&((o=l[r=d.routeId])!=null||(l[r]=[]),l[d.routeId].push(d)),l},{});return Object.values(e).forEach(l=>{var d;if("meta"in l&&!("isLayout"in l)){let r=l.meta,o=l.path.replace(/^([^/])/,"/$1")||"/",s=i.find(u=>o===u.link||o.startsWith(`${u.activePath}/`)),n=(a[l.id]||[]).map(u=>{var c;return(c=u.asset)==null?void 0:c.id}),g=k("",y(r.frontmatter),o,r.texts),f=r.toc.reduce((u,c,v)=>{if(!n.includes(c.id)&&c.depth>=1){let T=y(r.frontmatter);c.depth!==1&&(T=`${T} - ${c.title}`),u.push(k(c.title,T,`${o}#${c.id}`,r.texts,v))}return u},[]),p=(r.tabs||[]).reduce((u,{key:c,meta:v})=>{let T=k("",`${y(r.frontmatter)} - ${v.frontmatter.title}`,`${o}?${H}=${c}`,v.texts);return T&&u.push(T),u.push(...v.toc.map((m,x)=>k(m.title,`${y(r.frontmatter)} - ${v.frontmatter.title} - ${m.title}`,`${o}?${H}=${c}#${m.id}`,v.texts,x))),u},[]);h.push({navTitle:s==null?void 0:s.title,navOrder:s?i.indexOf(s):1/0,title:y(r.frontmatter),link:o,sections:[...g?[g]:[],...f,...p],demos:((d=a[l.id])==null?void 0:d.map(u=>({link:`${o}#${u.asset.id}`,rawTitle:u.asset.title||"",title:u.asset.title||y(r.frontmatter),description:u.asset.description||"",keywords:u.asset.keywords||[]})))||[]})}}),h}function b(e="",t,i=1){let h=(0,C.findAll)({textToHighlight:e,searchWords:t,autoEscape:!0}),a={};return[h.map(({start:l,end:d,highlight:r},o)=>{let s={text:e.slice(l,d)};return o===0&&!r&&h.length>1&&s.text.length>20&&(s.text=`...${s.text.slice(-20)}`),r&&(s.highlighted=!0,a[t.find(n=>s.text.includes(n))]=i),s}),a]}function Y(e,t){let i=t.split(" "),h=new RegExp(t.replace(/[.*+?^${}()|[\\]\\\\]/g,"\\\\$&").replace(/\\s+/g,"|"),"i"),a={};return e.forEach(l=>{var o,s;let d=l.title,r=[];if(l.sections.forEach(n=>{for(let g of n.paragraphs)if(h.test(g)){let[f,p]=b(n.title,i,10),[u,c]=b(g,i);r.push({type:"content",link:n.link,priority:Object.values(M(M({},c),p)).reduce((v,T)=>v+T,0),highlightTitleTexts:f,highlightTexts:u,pageTitle:d});return}if(h.test(n.rawTitle)&&!h.test(l.title)){let[g,f]=b(n.title,i,10);r.push({type:"title",link:n.link,priority:Object.values(f).reduce((p,u)=>p+u,0),highlightTitleTexts:g,highlightTexts:b(n.paragraphs[0]||"",i)[0],pageTitle:d})}}),l.demos.forEach(n=>{if(h.test(n.rawTitle)||h.test(n.description)){let[g,f]=b(n.title,i,10),[p,u]=b(n.description,i);r.push({type:"demo",link:n.link,priority:Object.values(M(M({},u),f)).reduce((c,v)=>c+v,0),highlightTitleTexts:g,highlightTexts:p,pageTitle:d})}}),h.test(l.title)){let[n,g]=b(l.title,i,100);r.push({type:"page",link:l.link,priority:Object.values(g).reduce((f,p)=>f+p,0),highlightTitleTexts:n,highlightTexts:b(((o=l.sections[0])==null?void 0:o.paragraphs[0])||"",i)[0],pageTitle:d})}if(r.length){let n=l.navTitle||"$ROOT";(s=a[n])!=null||(a[n]={title:l.navTitle,priority:l.navOrder*1e3,hints:[]}),a[n].hints.push(...r)}}),Object.values(a).forEach(({hints:l})=>{l.sort((d,r)=>r.priority-d.priority)}),Object.values(a).sort((l,d)=>d.priority-l.priority)}var A;self.onmessage=({data:e})=>{switch(e.action){case"generate-metadata":A=_(e.args.routes,e.args.demos,e.args.nav);break;case"get-search-result":self.postMessage(Y(A,e.args.keywords));break;default:}};})();\n';function Li(M){"@babel/helpers - typeof";return Li=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(D){return typeof D}:function(D){return D&&typeof Symbol=="function"&&D.constructor===Symbol&&D!==Symbol.prototype?"symbol":typeof D},Li(M)}function ci(M,D){var _=Object.keys(M);if(Object.getOwnPropertySymbols){var se=Object.getOwnPropertySymbols(M);D&&(se=se.filter(function(Ce){return Object.getOwnPropertyDescriptor(M,Ce).enumerable})),_.push.apply(_,se)}return _}function el(M){for(var D=1;D<arguments.length;D++){var _=arguments[D]!=null?arguments[D]:{};D%2?ci(Object(_),!0).forEach(function(se){fi(M,se,_[se])}):Object.getOwnPropertyDescriptors?Object.defineProperties(M,Object.getOwnPropertyDescriptors(_)):ci(Object(_)).forEach(function(se){Object.defineProperty(M,se,Object.getOwnPropertyDescriptor(_,se))})}return M}function fi(M,D,_){return D=Il(D),D in M?Object.defineProperty(M,D,{value:_,enumerable:!0,configurable:!0,writable:!0}):M[D]=_,M}function Il(M){var D=Su(M,"string");return Li(D)==="symbol"?D:String(D)}function Su(M,D){if(Li(M)!=="object"||M===null)return M;var _=M[Symbol.toPrimitive];if(_!==void 0){var se=_.call(M,D||"default");if(Li(se)!=="object")return se;throw new TypeError("@@toPrimitive must return a primitive value.")}return(D==="string"?String:Number)(M)}function Ni(M,D){return Wa(M)||xu(M,D)||tl(M,D)||bu()}function bu(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function tl(M,D){if(M){if(typeof M=="string")return nl(M,D);var _=Object.prototype.toString.call(M).slice(8,-1);if(_==="Object"&&M.constructor&&(_=M.constructor.name),_==="Map"||_==="Set")return Array.from(M);if(_==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_))return nl(M,D)}}function nl(M,D){(D==null||D>M.length)&&(D=M.length);for(var _=0,se=new Array(D);_<D;_++)se[_]=M[_];return se}function xu(M,D){var _=M==null?null:typeof Symbol!="undefined"&&M[Symbol.iterator]||M["@@iterator"];if(_!=null){var se,Ce,Qe,Je,lt=[],ft=!0,gt=!1;try{if(Qe=(_=_.call(M)).next,D===0){if(Object(_)!==_)return;ft=!1}else for(;!(ft=(se=Qe.call(_)).done)&&(lt.push(se.value),lt.length!==D);ft=!0);}catch(jt){gt=!0,Ce=jt}finally{try{if(!ft&&_.return!=null&&(Je=_.return(),Object(Je)!==Je))return}finally{if(gt)throw Ce}}return lt}}function Wa(M){if(Array.isArray(M))return M}var Xi;typeof window!="undefined"&&(Xi=new Worker(URL.createObjectURL(new Blob([Eu],{type:"application/javascript"}))));var $o=function(){var D=(0,r.useRef)(),_=(0,te.RX)(),se=(0,m.W)(),Ce=se.demos,Qe=(0,r.useState)(!1),Je=Ni(Qe,2),lt=Je[0],ft=Je[1],gt=(0,r.useState)(""),jt=Ni(gt,2),ln=jt[0],Gt=jt[1],Zt=Gi(),pn=(0,r.useState)([]),Un=Ni(pn,2),_n=Un[0],Vn=Un[1],Ir=(0,r.useCallback)(function(kr){ft(!0),Gt(kr)},[]);return(0,r.useEffect)(function(){Xi.onmessage=function(kr){Vn(kr.data),ft(!1)}},[]),(0,r.useEffect)(function(){var kr=Object.entries(Ce).reduce(function(Oa,ja){var ea=Ni(ja,2),Ba=ea[0],Mo=ea[1],Ho=Mo.asset,di=Mo.routeId;return el(el({},Oa),{},fi({},Ba,{asset:Ho,routeId:di}))},{});Xi.postMessage({action:"generate-metadata",args:{routes:JSON.parse(JSON.stringify(_)),nav:Zt,demos:kr}})},[_,Ce,Zt]),(0,r.useEffect)(function(){var kr=ln.trim();kr?(clearTimeout(D.current),D.current=window.setTimeout(function(){Xi.postMessage({action:"get-search-result",args:{keywords:kr}})},200)):Vn([])},[ln]),{keywords:ln,setKeywords:Ir,result:_n,loading:lt}}},71566:function(s,v,e){"use strict";e.d(v,{k:function(){return o},s:function(){return a}});var o=[{id:"zh-CN",name:"\u4E2D\u6587",base:"/"}],a={"en-US":{"header.search.placeholder":"Type keywords...","header.color.mode.light":"Light Mode","header.color.mode.dark":"Dark Mode","header.color.mode.auto":"Follow System","header.social.github":"GitHub","header.social.weibo":"Weibo","header.social.twitter":"Twitter","header.social.gitlab":"GitLab","header.social.facebook":"Facebook","header.social.zhihu":"Zhihu","header.social.yuque":"Yuque","header.social.linkedin":"Linkedin","previewer.actions.code.expand":"Show Code","previewer.actions.code.shrink":"Hide Code","previewer.actions.sketch":"Copy to Sketch app","previewer.actions.sketch.group":"Copy as Sketch Group","previewer.actions.sketch.symbol":"Copy as Sketch Symbol","previewer.actions.sketch.divider":"------------------------","previewer.actions.sketch.guide":"How to paste to Sketch?","previewer.actions.codesandbox":"Open in CodeSandbox","previewer.actions.codepen":"Open in CodePen (Not implemented)","previewer.actions.stackblitz":"Open in StackBlitz","previewer.actions.separate":"Open in separate page","404.title":"PAGE NOT FOUND","404.back":"Back to homepage","api.component.name":"Name","api.component.description":"Description","api.component.type":"Type","api.component.default":"Default","api.component.required":"(required)","api.component.unavailable":"apiParser must be enabled to use auto-generated API","api.component.loading":"Properties definition is resolving, wait a moment...","api.component.not.found":"Properties definition not found for {id} component","content.tabs.default":"Doc","content.footer.last.updated":"Last updated: ","content.footer.actions.edit":"Improve this documentation","content.footer.actions.previous":"PREV","content.footer.actions.next":"NEXT","search.not.found":"No content was found","layout.sidebar.btn":"Sidebar"},"zh-CN":{"header.search.placeholder":"\u8F93\u5165\u5173\u952E\u5B57\u641C\u7D22...","header.color.mode.light":"\u4EAE\u8272\u6A21\u5F0F","header.color.mode.dark":"\u6697\u8272\u6A21\u5F0F","header.color.mode.auto":"\u8DDF\u968F\u7CFB\u7EDF","header.social.github":"GitHub","header.social.weibo":"\u5FAE\u535A","header.social.twitter":"Twitter","header.social.gitlab":"GitLab","header.social.facebook":"Facebook","header.social.zhihu":"\u77E5\u4E4E","header.social.yuque":"\u8BED\u96C0","header.social.linkedin":"Linkedin","previewer.actions.code.expand":"\u5C55\u5F00\u4EE3\u7801","previewer.actions.code.shrink":"\u6536\u8D77\u4EE3\u7801","previewer.actions.codesandbox":"\u5728 CodeSandbox \u4E2D\u6253\u5F00","previewer.actions.sketch":"\u62F7\u8D1D\u5230 Sketch","previewer.actions.sketch.group":"\u62F7\u8D1D\u4E3A Sketch Group","previewer.actions.sketch.symbol":"\u62F7\u8D1D\u4E3A Sketch Symbol","previewer.actions.sketch.divider":"----------------------","previewer.actions.sketch.guide":"\u5982\u4F55\u7C98\u8D34\u5230 SKetch\uFF1F","previewer.actions.stackblitz":"\u5728 StackBlitz \u4E2D\u6253\u5F00","previewer.actions.separate":"\u5728\u72EC\u7ACB\u9875\u9762\u4E2D\u6253\u5F00","404.title":"\u9875\u9762\u672A\u627E\u5230","404.back":"\u8FD4\u56DE\u9996\u9875","api.component.name":"\u5C5E\u6027\u540D","api.component.description":"\u63CF\u8FF0","api.component.type":"\u7C7B\u578B","api.component.default":"\u9ED8\u8BA4\u503C","api.component.required":"(\u5FC5\u9009)","api.component.unavailable":"\u5FC5\u987B\u542F\u7528 apiParser \u624D\u80FD\u4F7F\u7528\u81EA\u52A8 API \u7279\u6027","api.component.loading":"\u5C5E\u6027\u5B9A\u4E49\u6B63\u5728\u89E3\u6790\u4E2D\uFF0C\u7A0D\u7B49\u7247\u523B...","api.component.not.found":"\u672A\u627E\u5230 {id} \u7EC4\u4EF6\u7684\u5C5E\u6027\u5B9A\u4E49","content.tabs.default":"\u6587\u6863","content.footer.last.updated":"\u6700\u540E\u66F4\u65B0\u65F6\u95F4\uFF1A","content.footer.actions.edit":"\u5E2E\u52A9\u6539\u8FDB\u6B64\u6587\u6863","content.footer.actions.previous":"\u4E0A\u4E00\u7BC7","content.footer.actions.next":"\u4E0B\u4E00\u7BC7","search.not.found":"\u672A\u627E\u5230\u76F8\u5173\u5185\u5BB9","layout.sidebar.btn":"\u4FA7\u8FB9\u83DC\u5355"}}},81717:function(s,v,e){"use strict";e.d(v,{wx:function(){return Te},DE:function(){return _e},C3:function(){return Ne},eA:function(){return Oe}});var o=e(11006),a=e.n(o),r=e(71062),l={"docs-home-polygon-layer-demo-polygonlayer":{component:r.memo(r.lazy(function(){return Promise.all([e.e(395),e.e(433)]).then(e.bind(e,7747))})),asset:{type:"BLOCK",id:"docs-home-polygon-layer-demo-polygonlayer",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(42943).Z},"@antv/l7":{type:"NPM",value:"2.20.0"},react:{type:"NPM",value:"18.2.0"},"newMock.ts":{type:"FILE",value:e(57525).Z}}}}},i={title:"\u70ED\u70B9\u533A\u57DF\u56FE\u5C42",toc:"menu",filename:"docs/home/polygonLayer.md",lastUpdated:1699607262e3,order:3,nav:{title:"\u9996\u9875",path:"/"},description:"\u70ED\u70B9\u533A\u57DF\u56FE\u5C42\u662F\u901A\u8FC7 L7 \u7684 PolygonLayer \u56FE\u5C42\u53BB\u6E32\u67D3\u5B8C\u6210\u7684\uFF0C\u901A\u8FC7\u4F20\u5165\u5B57\u6BB5\u6765\u663E\u793A\u5F53\u524D\u533A\u57DF\u4E58\u5EA7\u70ED\u5EA6"},d=[{id:"\u7B80\u4ECB",depth:3,title:"\u7B80\u4ECB"},{id:"\u793A\u4F8B",depth:3,title:"\u793A\u4F8B"}],f=[{value:"\u70ED\u70B9\u533A\u57DF\u56FE\u5C42\u662F\u901A\u8FC7 L7 \u7684 PolygonLayer \u56FE\u5C42\u53BB\u6E32\u67D3\u5B8C\u6210\u7684\uFF0C\u901A\u8FC7\u4F20\u5165\u5B57\u6BB5\u6765\u663E\u793A\u5F53\u524D\u533A\u57DF\u4E58\u5EA7\u70ED\u5EA6",paraId:0,tocIndex:0},{value:"\u7528\u6237\u53EF\u4EE5\u901A\u8FC7\u914D\u7F6E ",paraId:1,tocIndex:0},{value:"shape",paraId:1,tocIndex:0},{value:" \u53C2\u6570\u6765\u9009\u62E9\u591A\u8FB9\u5F62\u7684\u6570\u636E\u7684\u7C7B\u578B\uFF0C\u4E5F\u53EF\u901A\u8FC7\u5176\u4ED6 API \u53BB\u914D\u7F6E\u70ED\u70B9\u533A\u57DF\u56FE\u5C42\u6837\u5F0F\u7B49\u3002",paraId:1,tocIndex:0},{value:"\u8BE6\u60C5\u53EF\u89C1",paraId:2,tocIndex:0},{value:"L7 PolygonLayer",paraId:2,tocIndex:0}],g={"docs-home-marker-layer-demo-markerlayer":{component:r.memo(r.lazy(function(){return Promise.all([e.e(395),e.e(433)]).then(e.bind(e,16979))})),asset:{type:"BLOCK",id:"docs-home-marker-layer-demo-markerlayer",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(40640).Z},"@antv/l7":{type:"NPM",value:"2.20.0"},"lodash-es":{type:"NPM",value:"4.17.21"},react:{type:"NPM",value:"18.2.0"}}}}},h={title:"\u7A7A\u8F66\u805A\u5408\u56FE\u5C42",toc:"menu",filename:"docs/home/markerLayer.md",lastUpdated:1699959034e3,order:4,nav:{title:"\u9996\u9875",path:"/"}},p=[{id:"\u793A\u4F8B",depth:3,title:"\u793A\u4F8B"}],m=[],E={"docs-home-point-layer-demo-pointlayer":{component:r.memo(r.lazy(function(){return Promise.all([e.e(395),e.e(433)]).then(e.bind(e,82774))})),asset:{type:"BLOCK",id:"docs-home-point-layer-demo-pointlayer",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(93783).Z},"@antv/l7":{type:"NPM",value:"2.20.0"},react:{type:"NPM",value:"18.2.0"},"newMock.ts":{type:"FILE",value:e(57525).Z}}}}},b={title:"\u6253\u8F66\u6563\u70B9\u56FE\u5C42",toc:"menu",filename:"docs/home/pointLayer.md",lastUpdated:1699607262e3,order:2,nav:{title:"\u9996\u9875",path:"/"},description:"\u6253\u8F66\u6563\u70B9\u56FE\u5C42\u662F\u901A\u8FC7 L7 \u7684 pointLayer \u56FE\u5C42\u53BB\u6E32\u67D3\u5B8C\u6210\u7684\u3002"},w=[{id:"\u7B80\u4ECB",depth:3,title:"\u7B80\u4ECB"},{id:"\u793A\u4F8B",depth:3,title:"\u793A\u4F8B"}],x=[{value:"\u6253\u8F66\u6563\u70B9\u56FE\u5C42\u662F\u901A\u8FC7 L7 \u7684 pointLayer \u56FE\u5C42\u53BB\u6E32\u67D3\u5B8C\u6210\u7684\u3002",paraId:0,tocIndex:0},{value:"\u7528\u6237\u53EF\u4EE5\u901A\u8FC7\u914D\u7F6E ",paraId:1,tocIndex:0},{value:"shape",paraId:1,tocIndex:0},{value:" \u53C2\u6570\u6765\u9009\u62E9\u70B9\u7684\u7C7B\u578B\uFF0C\u4E5F\u53EF\u901A\u8FC7\u5176\u4ED6 API \u53BB\u914D\u7F6E\u6253\u8F66\u6563\u70B9\u6837\u5F0F\u7B49\u3002",paraId:1,tocIndex:0},{value:"\u8BE6\u60C5\u53EF\u89C1",paraId:2,tocIndex:0},{value:"L7 PointLayer",paraId:2,tocIndex:0}],R={"docs-home-demo-default":{component:r.memo(r.lazy(function(){return Promise.all([e.e(395),e.e(433)]).then(e.bind(e,55088))})),asset:{type:"BLOCK",id:"docs-home-demo-default",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(70462).Z},"@antv/l7":{type:"NPM",value:"2.20.0"},react:{type:"NPM",value:"18.2.0"},"newMock.ts":{type:"FILE",value:e(57525).Z}}}}},P={title:"demo",toc:"menu",filename:"docs/home/index.md",lastUpdated:1699607262e3,order:0,nav:{title:"\u9996\u9875",path:"/"},description:"\u901A\u8FC7\u4F7F\u7528h3-js\u548Cturf.js\u7684\u65B9\u6CD5\u4E0EPolygonLayer\u56FE\u5C42\u6765\u521B\u5EFA\u51FA Hex \u56FE\u5C42"},j=[{id:"hex-\u56FE\u5C42",depth:2,title:"Hex \u56FE\u5C42"},{id:"\u4ECB\u7ECD",depth:3,title:"\u4ECB\u7ECD"},{id:"\u4EE3\u7801\u6F14\u793A",depth:3,title:"\u4EE3\u7801\u6F14\u793A"}],N=[{value:"\u901A\u8FC7\u4F7F\u7528",paraId:0,tocIndex:1},{value:"h3-js",paraId:0,tocIndex:1},{value:"\u548C",paraId:0,tocIndex:1},{value:"turf.js",paraId:0,tocIndex:1},{value:"\u7684\u65B9\u6CD5\u4E0E",paraId:0,tocIndex:1},{value:"PolygonLayer",paraId:0,tocIndex:1},{value:"\u56FE\u5C42\u6765\u521B\u5EFA\u51FA Hex \u56FE\u5C42",paraId:0,tocIndex:1}],F={"docs-home-map-demo-map":{component:r.memo(r.lazy(function(){return Promise.all([e.e(395),e.e(433)]).then(e.bind(e,22018))})),asset:{type:"BLOCK",id:"docs-home-map-demo-map",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(57775).Z},"@antv/l7":{type:"NPM",value:"2.20.0"},react:{type:"NPM",value:"18.2.0"}}}}},A={title:"\u5730\u56FE\u4F7F\u7528",toc:"menu",filename:"docs/home/map.md",lastUpdated:1699607262e3,order:1,nav:{title:"\u9996\u9875",path:"/"},description:"\u9996\u5148\uFF0C\u6CE8\u518C\u5F00\u53D1\u8005\u8D26\u53F7\uFF0C\u6210\u4E3A\u9AD8\u5FB7\u5F00\u653E\u5E73\u53F0\u5F00\u53D1\u8005"},k=[{id:"\u9AD8\u5FB7\u5730\u56FE",depth:1,title:"\u9AD8\u5FB7\u5730\u56FE"},{id:"\u4F7F\u7528\u9AD8\u5FB7\u5730\u56FE",depth:2,title:"\u4F7F\u7528\u9AD8\u5FB7\u5730\u56FE"},{id:"\u6CE8\u518C\u8D26\u53F7\u5E76\u7533\u8BF7-key",depth:3,title:"\u6CE8\u518C\u8D26\u53F7\u5E76\u7533\u8BF7 Key"},{id:"\u5F15\u5165-l7",depth:3,title:"\u5F15\u5165 L7"},{id:"\u6DFB\u52A0-div-\u6807\u7B7E\u6307\u5B9A\u5730\u56FE\u5BB9\u5668",depth:4,title:"\u6DFB\u52A0 div \u6807\u7B7E\u6307\u5B9A\u5730\u56FE\u5BB9\u5668"},{id:"\u521D\u59CB\u5316-l7-scene",depth:4,title:"\u521D\u59CB\u5316 L7 Scene"},{id:"scene-\u7684\u4F7F\u7528",depth:3,title:"Scene \u7684\u4F7F\u7528"}],z=[{value:"\u9996\u5148\uFF0C",paraId:0,tocIndex:2},{value:"\u6CE8\u518C\u5F00\u53D1\u8005\u8D26\u53F7",paraId:0,tocIndex:2},{value:"\uFF0C\u6210\u4E3A\u9AD8\u5FB7\u5F00\u653E\u5E73\u53F0\u5F00\u53D1\u8005",paraId:0,tocIndex:2},{value:"\u767B\u9646\u4E4B\u540E\uFF0C\u5728\u8FDB\u5165\u300C\u5E94\u7528\u7BA1\u7406\u300D \u9875\u9762\u300C\u521B\u5EFA\u65B0\u5E94\u7528\u300D",paraId:1,tocIndex:2},{value:"\u4E3A\u5E94\u7528",paraId:2,tocIndex:2},{value:"\u6DFB\u52A0 Key",paraId:2,tocIndex:2},{value:"\uFF0C\u300C\u670D\u52A1\u5E73\u53F0\u300D\u4E00\u9879\u8BF7\u9009\u62E9\u300C Web \u7AEF ( JSAPI ) \u300D",paraId:2,tocIndex:2},{value:`<div id="map"></div>
`,paraId:3,tocIndex:4},{value:`const scene = new Scene({
  id: 'map',
  map: new GaodeMap({
    center: [121.438579, 31.246384],
    pitch: 0,
    zoom: 10,
    token: '\u9AD8\u5FB7\u5730\u56FEtoken',
  }),
});
`,paraId:4,tocIndex:5},{value:"token \u4E0D\u6DFB\u52A0\u53EF\u80FD\u4F1A\u5BFC\u81F4\u5730\u56FE\u5E95\u56FE\u767D\u5C4F \u63A7\u5236\u53F0\u62A5",paraId:5},{value:"<AMap JSAPI> KEY \u5F02\u5E38\uFF0C\u9519\u8BEF\u4FE1\u606F\uFF1AINVALID_USER_DOMAIN \u9519\u8BEF",paraId:5},{value:"scene",paraId:6,tocIndex:6},{value:"\u662F\u5305\u542B\u5730\u56FE\u3001\u5730\u56FE\u63A7\u4EF6\u3001\u7EC4\u4EF6\u3001\u52A0\u8F7D\u8D44\u6E90\u7684\u5168\u5C40\u5BF9\u8C61\uFF0C\u901A\u8FC7 ",paraId:6,tocIndex:6},{value:"scene",paraId:6,tocIndex:6},{value:" \u573A\u666F\u5BF9\u8C61\uFF0C\u6211\u4EEC\u53EF\u4EE5\u83B7\u53D6\u5230\u64CD\u4F5C\u5730\u56FE\u9700\u8981\u7684\u6240\u6709\u5185\u5BB9\u3002",paraId:6,tocIndex:6},{value:"\u5177\u4F53 API \u8BF7\u524D\u5F80 ",paraId:7,tocIndex:6},{value:"L7",paraId:7,tocIndex:6},{value:" \u5B98\u7F51\u67E5\u770B",paraId:7,tocIndex:6}],K={"docs-demo-default":{component:r.memo(r.lazy(function(){return Promise.all([e.e(395),e.e(433)]).then(e.bind(e,2385))})),asset:{type:"BLOCK",id:"docs-demo-default",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(28332).Z},"@antv/l7":{type:"NPM",value:"2.20.0"},"h3-js":{type:"NPM",value:"4.1.0"},react:{type:"NPM",value:"18.2.0"},"mock.ts":{type:"FILE",value:e(67895).Z}}}}},ee={title:"Hex\u56FE\u5C42",toc:"menu",filename:"docs/index.md",lastUpdated:1699520099e3,description:"\u901A\u8FC7\u4F7F\u7528h3-js\u548Cturf.js\u7684\u65B9\u6CD5\u4E0EPolygonLayer\u56FE\u5C42\u6765\u521B\u5EFA\u51FA Hex \u56FE\u5C42"},J=[{id:"hex-\u56FE\u5C42",depth:2,title:"Hex \u56FE\u5C42"},{id:"\u4ECB\u7ECD",depth:3,title:"\u4ECB\u7ECD"},{id:"\u4EE3\u7801\u6F14\u793A",depth:3,title:"\u4EE3\u7801\u6F14\u793A"}],ce=[{value:"\u901A\u8FC7\u4F7F\u7528",paraId:0,tocIndex:1},{value:"h3-js",paraId:0,tocIndex:1},{value:"\u548C",paraId:0,tocIndex:1},{value:"turf.js",paraId:0,tocIndex:1},{value:"\u7684\u65B9\u6CD5\u4E0E",paraId:0,tocIndex:1},{value:"PolygonLayer",paraId:0,tocIndex:1},{value:"\u56FE\u5C42\u6765\u521B\u5EFA\u51FA Hex \u56FE\u5C42",paraId:0,tocIndex:1}],Te=null,Oe={},Ne={"docs/home/polygonLayer":{frontmatter:i,toc:d,texts:f,demos:l},"docs/home/markerLayer":{frontmatter:h,toc:p,texts:m,demos:g},"docs/home/pointLayer":{frontmatter:b,toc:w,texts:x,demos:E},"docs/home/index":{frontmatter:P,toc:j,texts:N,demos:R},"docs/home/map":{frontmatter:A,toc:k,texts:z,demos:F},"docs/index":{frontmatter:ee,toc:J,texts:ce,demos:K}},_e=Object.entries(Ne).reduce(function(je,q){var re=a()(q,2),ae=re[0],O=re[1];return Object.values(O.demos).forEach(function(L){L.routeId=ae}),Object.assign(je,O.demos),delete O.demos,je},{})},11372:function(s,v,e){"use strict";e.d(v,{Ac:function(){return I},ql:function(){return z.ql},rU:function(){return k},OL:function(){return w},Q$:function(){return H},p6:function(){return ye},m8:function(){return $.m},fp:function(){return a.fp},Ov:function(){return F.Ov},TH:function(){return a.TH},pC:function(){return a.pC},UO:function(){return a.UO},Qt:function(){return K.Q},lr:function(){return R}});var o=e(71062),a=e(35338),r=e(19340);function l(){return l=Object.assign||function(oe){for(var he=1;he<arguments.length;he++){var Ae=arguments[he];for(var Ue in Ae)Object.prototype.hasOwnProperty.call(Ae,Ue)&&(oe[Ue]=Ae[Ue])}return oe},l.apply(this,arguments)}function i(oe,he){if(oe==null)return{};var Ae={},Ue=Object.keys(oe),He,it;for(it=0;it<Ue.length;it++)He=Ue[it],!(he.indexOf(He)>=0)&&(Ae[He]=oe[He]);return Ae}const d=["onClick","reloadDocument","replace","state","target","to"],f=["aria-current","caseSensitive","className","end","style","to","children"];function g(oe,he){if(!oe){typeof console!="undefined"&&console.warn(he);try{throw new Error(he)}catch(Ae){}}}function h(oe){let{basename:he,children:Ae,window:Ue}=oe,He=useRef();He.current==null&&(He.current=createBrowserHistory({window:Ue}));let it=He.current,[y,Q]=useState({action:it.action,location:it.location});return useLayoutEffect(()=>it.listen(Q),[it]),createElement(Router,{basename:he,children:Ae,location:y.location,navigationType:y.action,navigator:it})}function p(oe){let{basename:he,children:Ae,window:Ue}=oe,He=useRef();He.current==null&&(He.current=createHashHistory({window:Ue}));let it=He.current,[y,Q]=useState({action:it.action,location:it.location});return useLayoutEffect(()=>it.listen(Q),[it]),createElement(Router,{basename:he,children:Ae,location:y.location,navigationType:y.action,navigator:it})}function m(oe){let{basename:he,children:Ae,history:Ue}=oe;const[He,it]=useState({action:Ue.action,location:Ue.location});return useLayoutEffect(()=>Ue.listen(it),[Ue]),createElement(Router,{basename:he,children:Ae,location:He.location,navigationType:He.action,navigator:Ue})}function E(oe){return!!(oe.metaKey||oe.altKey||oe.ctrlKey||oe.shiftKey)}const b=(0,o.forwardRef)(function(he,Ae){let{onClick:Ue,reloadDocument:He,replace:it=!1,state:y,target:Q,to:be}=he,we=i(he,d),ze=(0,a.oQ)(be),We=x(be,{replace:it,state:y,target:Q});function Pe(Xe){Ue&&Ue(Xe),!Xe.defaultPrevented&&!He&&We(Xe)}return(0,o.createElement)("a",l({},we,{href:ze,onClick:Pe,ref:Ae,target:Q}))}),w=(0,o.forwardRef)(function(he,Ae){let{"aria-current":Ue="page",caseSensitive:He=!1,className:it="",end:y=!1,style:Q,to:be,children:we}=he,ze=i(he,f),We=(0,a.TH)(),Pe=(0,a.WU)(be),Xe=We.pathname,ct=Pe.pathname;He||(Xe=Xe.toLowerCase(),ct=ct.toLowerCase());let Ve=Xe===ct||!y&&Xe.startsWith(ct)&&Xe.charAt(ct.length)==="/",Pt=Ve?Ue:void 0,xe;typeof it=="function"?xe=it({isActive:Ve}):xe=[it,Ve?"active":null].filter(Boolean).join(" ");let tt=typeof Q=="function"?Q({isActive:Ve}):Q;return(0,o.createElement)(b,l({},ze,{"aria-current":Pt,className:xe,ref:Ae,style:tt,to:be}),typeof we=="function"?we({isActive:Ve}):we)});function x(oe,he){let{target:Ae,replace:Ue,state:He}=he===void 0?{}:he,it=(0,a.s0)(),y=(0,a.TH)(),Q=(0,a.WU)(oe);return(0,o.useCallback)(be=>{if(be.button===0&&(!Ae||Ae==="_self")&&!E(be)){be.preventDefault();let we=!!Ue||(0,r.Ep)(y)===(0,r.Ep)(Q);it(oe,{replace:we,state:He})}},[y,it,Q,Ue,He,Ae,oe])}function R(oe){let he=(0,o.useRef)(P(oe)),Ae=(0,a.TH)(),Ue=(0,o.useMemo)(()=>{let y=P(Ae.search);for(let Q of he.current.keys())y.has(Q)||he.current.getAll(Q).forEach(be=>{y.append(Q,be)});return y},[Ae.search]),He=(0,a.s0)(),it=(0,o.useCallback)((y,Q)=>{He("?"+P(y),Q)},[He]);return[Ue,it]}function P(oe){return oe===void 0&&(oe=""),new URLSearchParams(typeof oe=="string"||Array.isArray(oe)||oe instanceof URLSearchParams?oe:Object.keys(oe).reduce((he,Ae)=>{let Ue=oe[Ae];return he.concat(Array.isArray(Ue)?Ue.map(He=>[Ae,He]):[[Ae,Ue]])},[]))}var j=e(26508),N=e(52528),F=e(13291),A=["prefetch"];function k(oe){var he,Ae=oe.prefetch,Ue=(0,N.Z)(oe,A),He=(0,F.Ov)(),it=typeof oe.to=="string"?oe.to:(he=oe.to)===null||he===void 0?void 0:he.pathname;return it?o.createElement(b,(0,j.Z)({onMouseEnter:function(){var Q;return Ae&&it&&((Q=He.preloadRoute)===null||Q===void 0?void 0:Q.call(He,it))}},Ue),oe.children):null}var z=e(55200),K=e(68472),ee=e(91002);function J(){"use strict";J=function(){return he};var oe,he={},Ae=Object.prototype,Ue=Ae.hasOwnProperty,He=Object.defineProperty||function(wt,dt,pt){wt[dt]=pt.value},it=typeof Symbol=="function"?Symbol:{},y=it.iterator||"@@iterator",Q=it.asyncIterator||"@@asyncIterator",be=it.toStringTag||"@@toStringTag";function we(wt,dt,pt){return Object.defineProperty(wt,dt,{value:pt,enumerable:!0,configurable:!0,writable:!0}),wt[dt]}try{we({},"")}catch(wt){we=function(pt,Ut,on){return pt[Ut]=on}}function ze(wt,dt,pt,Ut){var on=dt&&dt.prototype instanceof xe?dt:xe,qt=Object.create(on.prototype),Ln=new Ar(Ut||[]);return He(qt,"_invoke",{value:xn(wt,pt,Ln)}),qt}function We(wt,dt,pt){try{return{type:"normal",arg:wt.call(dt,pt)}}catch(Ut){return{type:"throw",arg:Ut}}}he.wrap=ze;var Pe="suspendedStart",Xe="suspendedYield",ct="executing",Ve="completed",Pt={};function xe(){}function tt(){}function Ze(){}var Le={};we(Le,y,function(){return this});var ut=Object.getPrototypeOf,st=ut&&ut(ut(Br([])));st&&st!==Ae&&Ue.call(st,y)&&(Le=st);var bt=Ze.prototype=xe.prototype=Object.create(Le);function kt(wt){["next","throw","return"].forEach(function(dt){we(wt,dt,function(pt){return this._invoke(dt,pt)})})}function Kt(wt,dt){function pt(on,qt,Ln,ar){var Gn=We(wt[on],wt,qt);if(Gn.type!=="throw"){var Gr=Gn.arg,Fn=Gr.value;return Fn&&(0,ee.Z)(Fn)=="object"&&Ue.call(Fn,"__await")?dt.resolve(Fn.__await).then(function(Dr){pt("next",Dr,Ln,ar)},function(Dr){pt("throw",Dr,Ln,ar)}):dt.resolve(Fn).then(function(Dr){Gr.value=Dr,Ln(Gr)},function(Dr){return pt("throw",Dr,Ln,ar)})}ar(Gn.arg)}var Ut;He(this,"_invoke",{value:function(qt,Ln){function ar(){return new dt(function(Gn,Gr){pt(qt,Ln,Gn,Gr)})}return Ut=Ut?Ut.then(ar,ar):ar()}})}function xn(wt,dt,pt){var Ut=Pe;return function(on,qt){if(Ut===ct)throw new Error("Generator is already running");if(Ut===Ve){if(on==="throw")throw qt;return{value:oe,done:!0}}for(pt.method=on,pt.arg=qt;;){var Ln=pt.delegate;if(Ln){var ar=dn(Ln,pt);if(ar){if(ar===Pt)continue;return ar}}if(pt.method==="next")pt.sent=pt._sent=pt.arg;else if(pt.method==="throw"){if(Ut===Pe)throw Ut=Ve,pt.arg;pt.dispatchException(pt.arg)}else pt.method==="return"&&pt.abrupt("return",pt.arg);Ut=ct;var Gn=We(wt,dt,pt);if(Gn.type==="normal"){if(Ut=pt.done?Ve:Xe,Gn.arg===Pt)continue;return{value:Gn.arg,done:pt.done}}Gn.type==="throw"&&(Ut=Ve,pt.method="throw",pt.arg=Gn.arg)}}}function dn(wt,dt){var pt=dt.method,Ut=wt.iterator[pt];if(Ut===oe)return dt.delegate=null,pt==="throw"&&wt.iterator.return&&(dt.method="return",dt.arg=oe,dn(wt,dt),dt.method==="throw")||pt!=="return"&&(dt.method="throw",dt.arg=new TypeError("The iterator does not provide a '"+pt+"' method")),Pt;var on=We(Ut,wt.iterator,dt.arg);if(on.type==="throw")return dt.method="throw",dt.arg=on.arg,dt.delegate=null,Pt;var qt=on.arg;return qt?qt.done?(dt[wt.resultName]=qt.value,dt.next=wt.nextLoc,dt.method!=="return"&&(dt.method="next",dt.arg=oe),dt.delegate=null,Pt):qt:(dt.method="throw",dt.arg=new TypeError("iterator result is not an object"),dt.delegate=null,Pt)}function In(wt){var dt={tryLoc:wt[0]};1 in wt&&(dt.catchLoc=wt[1]),2 in wt&&(dt.finallyLoc=wt[2],dt.afterLoc=wt[3]),this.tryEntries.push(dt)}function Bn(wt){var dt=wt.completion||{};dt.type="normal",delete dt.arg,wt.completion=dt}function Ar(wt){this.tryEntries=[{tryLoc:"root"}],wt.forEach(In,this),this.reset(!0)}function Br(wt){if(wt||wt===""){var dt=wt[y];if(dt)return dt.call(wt);if(typeof wt.next=="function")return wt;if(!isNaN(wt.length)){var pt=-1,Ut=function on(){for(;++pt<wt.length;)if(Ue.call(wt,pt))return on.value=wt[pt],on.done=!1,on;return on.value=oe,on.done=!0,on};return Ut.next=Ut}}throw new TypeError((0,ee.Z)(wt)+" is not iterable")}return tt.prototype=Ze,He(bt,"constructor",{value:Ze,configurable:!0}),He(Ze,"constructor",{value:tt,configurable:!0}),tt.displayName=we(Ze,be,"GeneratorFunction"),he.isGeneratorFunction=function(wt){var dt=typeof wt=="function"&&wt.constructor;return!!dt&&(dt===tt||(dt.displayName||dt.name)==="GeneratorFunction")},he.mark=function(wt){return Object.setPrototypeOf?Object.setPrototypeOf(wt,Ze):(wt.__proto__=Ze,we(wt,be,"GeneratorFunction")),wt.prototype=Object.create(bt),wt},he.awrap=function(wt){return{__await:wt}},kt(Kt.prototype),we(Kt.prototype,Q,function(){return this}),he.AsyncIterator=Kt,he.async=function(wt,dt,pt,Ut,on){on===void 0&&(on=Promise);var qt=new Kt(ze(wt,dt,pt,Ut),on);return he.isGeneratorFunction(dt)?qt:qt.next().then(function(Ln){return Ln.done?Ln.value:qt.next()})},kt(bt),we(bt,be,"Generator"),we(bt,y,function(){return this}),we(bt,"toString",function(){return"[object Generator]"}),he.keys=function(wt){var dt=Object(wt),pt=[];for(var Ut in dt)pt.push(Ut);return pt.reverse(),function on(){for(;pt.length;){var qt=pt.pop();if(qt in dt)return on.value=qt,on.done=!1,on}return on.done=!0,on}},he.values=Br,Ar.prototype={constructor:Ar,reset:function(dt){if(this.prev=0,this.next=0,this.sent=this._sent=oe,this.done=!1,this.delegate=null,this.method="next",this.arg=oe,this.tryEntries.forEach(Bn),!dt)for(var pt in this)pt.charAt(0)==="t"&&Ue.call(this,pt)&&!isNaN(+pt.slice(1))&&(this[pt]=oe)},stop:function(){this.done=!0;var dt=this.tryEntries[0].completion;if(dt.type==="throw")throw dt.arg;return this.rval},dispatchException:function(dt){if(this.done)throw dt;var pt=this;function Ut(Gr,Fn){return Ln.type="throw",Ln.arg=dt,pt.next=Gr,Fn&&(pt.method="next",pt.arg=oe),!!Fn}for(var on=this.tryEntries.length-1;on>=0;--on){var qt=this.tryEntries[on],Ln=qt.completion;if(qt.tryLoc==="root")return Ut("end");if(qt.tryLoc<=this.prev){var ar=Ue.call(qt,"catchLoc"),Gn=Ue.call(qt,"finallyLoc");if(ar&&Gn){if(this.prev<qt.catchLoc)return Ut(qt.catchLoc,!0);if(this.prev<qt.finallyLoc)return Ut(qt.finallyLoc)}else if(ar){if(this.prev<qt.catchLoc)return Ut(qt.catchLoc,!0)}else{if(!Gn)throw new Error("try statement without catch or finally");if(this.prev<qt.finallyLoc)return Ut(qt.finallyLoc)}}}},abrupt:function(dt,pt){for(var Ut=this.tryEntries.length-1;Ut>=0;--Ut){var on=this.tryEntries[Ut];if(on.tryLoc<=this.prev&&Ue.call(on,"finallyLoc")&&this.prev<on.finallyLoc){var qt=on;break}}qt&&(dt==="break"||dt==="continue")&&qt.tryLoc<=pt&&pt<=qt.finallyLoc&&(qt=null);var Ln=qt?qt.completion:{};return Ln.type=dt,Ln.arg=pt,qt?(this.method="next",this.next=qt.finallyLoc,Pt):this.complete(Ln)},complete:function(dt,pt){if(dt.type==="throw")throw dt.arg;return dt.type==="break"||dt.type==="continue"?this.next=dt.arg:dt.type==="return"?(this.rval=this.arg=dt.arg,this.method="return",this.next="end"):dt.type==="normal"&&pt&&(this.next=pt),Pt},finish:function(dt){for(var pt=this.tryEntries.length-1;pt>=0;--pt){var Ut=this.tryEntries[pt];if(Ut.finallyLoc===dt)return this.complete(Ut.completion,Ut.afterLoc),Bn(Ut),Pt}},catch:function(dt){for(var pt=this.tryEntries.length-1;pt>=0;--pt){var Ut=this.tryEntries[pt];if(Ut.tryLoc===dt){var on=Ut.completion;if(on.type==="throw"){var qt=on.arg;Bn(Ut)}return qt}}throw new Error("illegal catch attempt")},delegateYield:function(dt,pt,Ut){return this.delegate={iterator:Br(dt),resultName:pt,nextLoc:Ut},this.method==="next"&&(this.arg=oe),Pt}},he}var ce=e(74710),Te=e(97100),Oe=e(91710);function Ne(oe,he){var Ae=typeof Symbol!="undefined"&&oe[Symbol.iterator]||oe["@@iterator"];if(!Ae){if(Array.isArray(oe)||(Ae=(0,Oe.Z)(oe))||he&&oe&&typeof oe.length=="number"){Ae&&(oe=Ae);var Ue=0,He=function(){};return{s:He,n:function(){return Ue>=oe.length?{done:!0}:{done:!1,value:oe[Ue++]}},e:function(we){throw we},f:He}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var it=!0,y=!1,Q;return{s:function(){Ae=Ae.call(oe)},n:function(){var we=Ae.next();return it=we.done,we},e:function(we){y=!0,Q=we},f:function(){try{!it&&Ae.return!=null&&Ae.return()}finally{if(y)throw Q}}}}var _e=e(56712),je=e(60960),q=e(51054);function re(oe){return(0,_e.Z)(oe)||(0,je.Z)(oe)||(0,Oe.Z)(oe)||(0,q.Z)()}var ae=e(74809),O=e(57338),L=e(80268);function W(oe,he){if(!oe)throw new Error(he)}function V(oe){var he=oe.fns,Ae=oe.args;if(he.length===1)return he[0];var Ue=he.pop();return he.reduce(function(He,it){return function(){return it(He,Ae)}},Ue)}function G(oe){return!!oe&&(0,ee.Z)(oe)==="object"&&typeof oe.then=="function"}var I=function(oe){return oe.compose="compose",oe.modify="modify",oe.event="event",oe}({}),H=function(){function oe(he){(0,ae.Z)(this,oe),(0,L.Z)(this,"opts",void 0),(0,L.Z)(this,"hooks",{}),this.opts=he}return(0,O.Z)(oe,[{key:"register",value:function(Ae){var Ue=this;W(Ae.apply,"plugin register failed, apply must supplied"),Object.keys(Ae.apply).forEach(function(He){W(Ue.opts.validKeys.indexOf(He)>-1,"register failed, invalid key ".concat(He," ").concat(Ae.path?"from plugin ".concat(Ae.path):"",".")),Ue.hooks[He]=(Ue.hooks[He]||[]).concat(Ae.apply[He])})}},{key:"getHooks",value:function(Ae){var Ue=Ae.split("."),He=re(Ue),it=He[0],y=He.slice(1),Q=this.hooks[it]||[];return y.length&&(Q=Q.map(function(be){try{var we=be,ze=Ne(y),We;try{for(ze.s();!(We=ze.n()).done;){var Pe=We.value;we=we[Pe]}}catch(Xe){ze.e(Xe)}finally{ze.f()}return we}catch(Xe){return null}}).filter(Boolean)),Q}},{key:"applyPlugins",value:function(Ae){var Ue=Ae.key,He=Ae.type,it=Ae.initialValue,y=Ae.args,Q=Ae.async,be=this.getHooks(Ue)||[];switch(y&&W((0,ee.Z)(y)==="object","applyPlugins failed, args must be plain object."),Q&&W(He===I.modify||He===I.event,"async only works with modify and event type."),He){case I.modify:return Q?be.reduce(function(){var we=(0,Te.Z)(J().mark(function ze(We,Pe){var Xe;return J().wrap(function(Ve){for(;;)switch(Ve.prev=Ve.next){case 0:if(W(typeof Pe=="function"||(0,ee.Z)(Pe)==="object"||G(Pe),"applyPlugins failed, all hooks for key ".concat(Ue," must be function, plain object or Promise.")),!G(We)){Ve.next=5;break}return Ve.next=4,We;case 4:We=Ve.sent;case 5:if(typeof Pe!="function"){Ve.next=16;break}if(Xe=Pe(We,y),!G(Xe)){Ve.next=13;break}return Ve.next=10,Xe;case 10:return Ve.abrupt("return",Ve.sent);case 13:return Ve.abrupt("return",Xe);case 14:Ve.next=21;break;case 16:if(!G(Pe)){Ve.next=20;break}return Ve.next=19,Pe;case 19:Pe=Ve.sent;case 20:return Ve.abrupt("return",(0,ce.Z)((0,ce.Z)({},We),Pe));case 21:case"end":return Ve.stop()}},ze)}));return function(ze,We){return we.apply(this,arguments)}}(),G(it)?it:Promise.resolve(it)):be.reduce(function(we,ze){return W(typeof ze=="function"||(0,ee.Z)(ze)==="object","applyPlugins failed, all hooks for key ".concat(Ue," must be function or plain object.")),typeof ze=="function"?ze(we,y):(0,ce.Z)((0,ce.Z)({},we),ze)},it);case I.event:return(0,Te.Z)(J().mark(function we(){var ze,We,Pe,Xe;return J().wrap(function(Ve){for(;;)switch(Ve.prev=Ve.next){case 0:ze=Ne(be),Ve.prev=1,ze.s();case 3:if((We=ze.n()).done){Ve.next=12;break}if(Pe=We.value,W(typeof Pe=="function","applyPlugins failed, all hooks for key ".concat(Ue," must be function.")),Xe=Pe(y),!(Q&&G(Xe))){Ve.next=10;break}return Ve.next=10,Xe;case 10:Ve.next=3;break;case 12:Ve.next=17;break;case 14:Ve.prev=14,Ve.t0=Ve.catch(1),ze.e(Ve.t0);case 17:return Ve.prev=17,ze.f(),Ve.finish(17);case 20:case"end":return Ve.stop()}},we,null,[[1,14,17,20]])}))();case I.compose:return function(){return V({fns:be.concat(it),args:y})()}}}}],[{key:"create",value:function(Ae){var Ue=new oe({validKeys:Ae.validKeys});return Ae.plugins.forEach(function(He){Ue.register(He)}),Ue}}]),oe}(),$=e(50058),Y=e(5773),X=e.n(Y),Re=0,Fe=0;function at(oe,he){if(!1)var Ae}function et(oe){return JSON.stringify(oe,null,2)}function Ke(oe){var he=oe.length>1?oe.map(ot).join(" "):oe[0];return X()(he)==="object"?"".concat(et(he)):he.toString()}function ot(oe){return X()(oe)==="object"?"".concat(JSON.stringify(oe)):oe.toString()}var te={log:function(){for(var he=arguments.length,Ae=new Array(he),Ue=0;Ue<he;Ue++)Ae[Ue]=arguments[Ue];at("log",Ke(Ae))},info:function(){for(var he=arguments.length,Ae=new Array(he),Ue=0;Ue<he;Ue++)Ae[Ue]=arguments[Ue];at("info",Ke(Ae))},warn:function(){for(var he=arguments.length,Ae=new Array(he),Ue=0;Ue<he;Ue++)Ae[Ue]=arguments[Ue];at("warn",Ke(Ae))},error:function(){for(var he=arguments.length,Ae=new Array(he),Ue=0;Ue<he;Ue++)Ae[Ue]=arguments[Ue];at("error",Ke(Ae))},group:function(){Fe++},groupCollapsed:function(){Fe++},groupEnd:function(){Fe&&--Fe},clear:function(){at("clear")},trace:function(){var he;(he=console).trace.apply(he,arguments)},profile:function(){var he;(he=console).profile.apply(he,arguments)},profileEnd:function(){var he;(he=console).profileEnd.apply(he,arguments)}},fe=e(10574),pe=e(39343),me=e(57296),Ie=e(77622),ue=typeof window!="undefined"?window.html2sketch:null;function ve(oe,he){return Ee.apply(this,arguments)}function Ee(){return Ee=_asyncToGenerator(_regeneratorRuntime().mark(function oe(he,Ae){return _regeneratorRuntime().wrap(function(He){for(;;)switch(He.prev=He.next){case 0:if(Ae.type!=="group"){He.next=6;break}return He.next=3,ue.nodeToGroup(he);case 3:He.t0=He.sent.toSketchJSON(),He.next=9;break;case 6:return He.next=8,ue.nodeToSymbol(he);case 8:He.t0=He.sent.toSketchJSON();case 9:return He.abrupt("return",He.t0);case 10:case"end":return He.stop()}},oe)})),Ee.apply(this,arguments)}function le(oe,he){return getPluginManager().applyPlugins({key:"toSketchJSON",type:ApplyPluginsType.modify,initialValue:null,args:{target:oe,opts:he},async:!0})}var ye=null,Be=function(){}},93122:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var dumi__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(57296),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(71062);function ownKeys(s,v){var e=Object.keys(s);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(s);v&&(o=o.filter(function(a){return Object.getOwnPropertyDescriptor(s,a).enumerable})),e.push.apply(e,o)}return e}function _objectSpread(s){for(var v=1;v<arguments.length;v++){var e=arguments[v]!=null?arguments[v]:{};v%2?ownKeys(Object(e),!0).forEach(function(o){_defineProperty(s,o,e[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(e)):ownKeys(Object(e)).forEach(function(o){Object.defineProperty(s,o,Object.getOwnPropertyDescriptor(e,o))})}return s}function _defineProperty(s,v,e){return v=_toPropertyKey(v),v in s?Object.defineProperty(s,v,{value:e,enumerable:!0,configurable:!0,writable:!0}):s[v]=e,s}function _toPropertyKey(s){var v=_toPrimitive(s,"string");return _typeof(v)==="symbol"?v:String(v)}function _toPrimitive(s,v){if(_typeof(s)!=="object"||s===null)return s;var e=s[Symbol.toPrimitive];if(e!==void 0){var o=e.call(s,v||"default");if(_typeof(o)!=="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(v==="string"?String:Number)(s)}function _slicedToArray(s,v){return _arrayWithHoles(s)||_iterableToArrayLimit(s,v)||_unsupportedIterableToArray(s,v)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _unsupportedIterableToArray(s,v){if(s){if(typeof s=="string")return _arrayLikeToArray(s,v);var e=Object.prototype.toString.call(s).slice(8,-1);if(e==="Object"&&s.constructor&&(e=s.constructor.name),e==="Map"||e==="Set")return Array.from(s);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return _arrayLikeToArray(s,v)}}function _arrayLikeToArray(s,v){(v==null||v>s.length)&&(v=s.length);for(var e=0,o=new Array(v);e<v;e++)o[e]=s[e];return o}function _iterableToArrayLimit(s,v){var e=s==null?null:typeof Symbol!="undefined"&&s[Symbol.iterator]||s["@@iterator"];if(e!=null){var o,a,r,l,i=[],d=!0,f=!1;try{if(r=(e=e.call(s)).next,v===0){if(Object(e)!==e)return;d=!1}else for(;!(d=(o=r.call(e)).done)&&(i.push(o.value),i.length!==v);d=!0);}catch(g){f=!0,a=g}finally{try{if(!d&&e.return!=null&&(l=e.return(),Object(l)!==l))return}finally{if(f)throw a}}return i}}function _arrayWithHoles(s){if(Array.isArray(s))return s}function _typeof(s){"@babel/helpers - typeof";return _typeof=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(v){return typeof v}:function(v){return v&&typeof Symbol=="function"&&v.constructor===Symbol&&v!==Symbol.prototype?"symbol":typeof v},_typeof(s)}function builtInProcessor(entity,entryExports){var mod;switch(entity.$$__type){case"function":return eval(entity.$$__body.sourceCode);case"element":return mod=entity.$$__body.componentName.split(".").reduce(function(s,v){return s[v]},entryExports),mod===void 0?entity.$$__body.componentName:"_InternalPanelDoNotUseOrYouWillBeFired"in mod?mod._InternalPanelDoNotUseOrYouWillBeFired:mod}}function deepReplace(s,v){return Array.isArray(s)?s.map(function(e){return deepReplace(e,v)}):_typeof(s)==="object"&&(s==null?void 0:s.$$__type)==="element"?translatePresetToReact(s.$$__body,v):_typeof(s)==="object"&&Object.prototype.toString.call(s)==="[object Object]"?Object.entries(s).reduce(function(e,o){var a=_slicedToArray(o,2),r=a[0],l=a[1];return _objectSpread(_objectSpread({},e),{},_defineProperty({},r,deepReplace(l,v)))},{}):s}function translatePresetToReact(s,v){var e=s.props,o=s.size,a=v({$$__type:"element",$$__body:s});return React.createElement(a,deepReplace(_objectSpread(_objectSpread({},e),{},{style:_objectSpread(_objectSpread({},e.style),o)}),v))}var AtomRenderer=function s(v){var e=useSiteData(),o=e.entryExports;switch(v.type){case"COMPONENT":return translatePresetToReact(v.value,function(a){var r,l;return(r=(l=v.processor)===null||l===void 0?void 0:l.call(v,a,o))!==null&&r!==void 0?r:builtInProcessor(a,o)});default:return React.createElement(React.Fragment,null,v.type," atom is not supported.")}}},52003:function(s,v,e){"use strict";e.d(v,{D:function(){return a},W:function(){return r}});var o=e(71062),a=(0,o.createContext)({pkg:{},historyType:"browser",entryExports:{},demos:{},components:{},locales:[],themeConfig:{},loading:!1,setLoading:function(){},_2_level_nav_available:!0}),r=function(){return(0,o.useContext)(a)}},34203:function(s,v,e){"use strict";e.d(v,{b:function(){return h}});var o=e(57296),a=e(71062);function r(p,m){return g(p)||f(p,m)||i(p,m)||l()}function l(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function i(p,m){if(p){if(typeof p=="string")return d(p,m);var E=Object.prototype.toString.call(p).slice(8,-1);if(E==="Object"&&p.constructor&&(E=p.constructor.name),E==="Map"||E==="Set")return Array.from(p);if(E==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(E))return d(p,m)}}function d(p,m){(m==null||m>p.length)&&(m=p.length);for(var E=0,b=new Array(m);E<m;E++)b[E]=p[E];return b}function f(p,m){var E=p==null?null:typeof Symbol!="undefined"&&p[Symbol.iterator]||p["@@iterator"];if(E!=null){var b,w,x,R,P=[],j=!0,N=!1;try{if(x=(E=E.call(p)).next,m===0){if(Object(E)!==E)return;j=!1}else for(;!(j=(b=x.call(E)).done)&&(P.push(b.value),P.length!==m);j=!0);}catch(F){N=!0,w=F}finally{try{if(!j&&E.return!=null&&(R=E.return(),Object(R)!==R))return}finally{if(N)throw w}}return P}}function g(p){if(Array.isArray(p))return p}var h=function(){var m=(0,o.YB)(),E=(0,o.WF)(),b=E.locales,w=(0,a.useState)(function(){return b.find(function(P){var j=P.id;return j===m.locale})}),x=r(w,1),R=x[0];return R}},10603:function(s,v,e){"use strict";e.d(v,{AM:function(){return w},EV:function(){return m},LI:function(){return x},M7:function(){return R},RX:function(){return b},m7:function(){return j},qu:function(){return P},rl:function(){return E}});var o=e(57296),a=e(71062),r=e(34203);function l(N){"@babel/helpers - typeof";return l=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(F){return typeof F}:function(F){return F&&typeof Symbol=="function"&&F.constructor===Symbol&&F!==Symbol.prototype?"symbol":typeof F},l(N)}function i(N,F){return p(N)||h(N,F)||f(N,F)||d()}function d(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function f(N,F){if(N){if(typeof N=="string")return g(N,F);var A=Object.prototype.toString.call(N).slice(8,-1);if(A==="Object"&&N.constructor&&(A=N.constructor.name),A==="Map"||A==="Set")return Array.from(N);if(A==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(A))return g(N,F)}}function g(N,F){(F==null||F>N.length)&&(F=N.length);for(var A=0,k=new Array(F);A<F;A++)k[A]=N[A];return k}function h(N,F){var A=N==null?null:typeof Symbol!="undefined"&&N[Symbol.iterator]||N["@@iterator"];if(A!=null){var k,z,K,ee,J=[],ce=!0,Te=!1;try{if(K=(A=A.call(N)).next,F===0){if(Object(A)!==A)return;ce=!1}else for(;!(ce=(k=K.call(A)).done)&&(J.push(k.value),J.length!==F);ce=!0);}catch(Oe){Te=!0,z=Oe}finally{try{if(!ce&&A.return!=null&&(ee=A.return(),Object(ee)!==ee))return}finally{if(Te)throw z}}return J}}function p(N){if(Array.isArray(N))return N}var m,E=function(F){m=F},b=function(){var F=(0,o.YB)(),A=(0,o.Ov)(),k=A.routes,z=(0,o.WF)(),K=z.locales,ee=(0,a.useState)(function(){var Te=K.slice().reverse();return Object.values(k).reduce(function(Oe,Ne){var _e=Te.find(function(je){return"suffix"in je?Ne.path.endsWith(je.suffix):Ne.path.startsWith(je.base.slice(1))});return Ne.parentId==="DocLayout"&&_e.id===F.locale&&(Oe[Ne.id]=Ne),Oe},{})}),J=i(ee,1),ce=J[0];return ce},w=function(F){var A=`/**
 * This is an auto-generated demo by dumi
 * if you think it is not working as expected,
 * please report the issue at
 * https://github.com/umijs/dumi/issues
 */`;return F.startsWith("18.")||F==="latest"?"".concat(A,`

import React from 'react';
import { createRoot } from "react-dom/client";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App />);`):"".concat(A,`

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);`)},x=typeof window!="undefined"?a.useLayoutEffect:a.useEffect,R=function(){var F=(0,r.b)();return(0,a.useCallback)(function(A,k){return("order"in A&&"order"in k?A.order-k.order:0)||("link"in A&&"link"in k?A.link.split("/").length-k.link.split("/").length:0)||("path"in A&&"path"in k?A.path.split("/").length-k.path.split("/").length:0)||(A.title?A.title.localeCompare(k.title||"",F.id):-1)},[])},P=function(F,A,k){var z,K=A==="nav.second"?l(k.nav)==="object"?k.nav.second:{}:k[A];switch(l(K)){case"object":F.title=K.title||F.title,F.order=(z=K.order)!==null&&z!==void 0?z:F.order;break;case"string":F.title=K||F.title;break;default:}return F};function j(N,F){return Array.isArray(N)?N:N[F.id]}},91428:function(s,v,e){"use strict";e.d(v,{Z:function(){return H}});var o=e(71062),a=Object.defineProperty,r=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,d=($,Y,X)=>Y in $?a($,Y,{enumerable:!0,configurable:!0,writable:!0,value:X}):$[Y]=X,f=($,Y)=>{for(var X in Y||(Y={}))l.call(Y,X)&&d($,X,Y[X]);if(r)for(var X of r(Y))i.call(Y,X)&&d($,X,Y[X]);return $};const g=$=>o.createElement("svg",f({viewBox:"64 64 896 896"},$),o.createElement("path",{d:"M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"}),o.createElement("path",{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}));var h="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNNjk5IDM1M2gtNDYuOWMtMTAuMiAwLTE5LjkgNC45LTI1LjkgMTMuM0w0NjkgNTg0LjNsLTcxLjItOTguOGMtNi04LjMtMTUuNi0xMy4zLTI1LjktMTMuM0gzMjVjLTYuNSAwLTEwLjMgNy40LTYuNSAxMi43bDEyNC42IDE3Mi44YTMxLjggMzEuOCAwIDAgMCA1MS43IDBsMjEwLjYtMjkyYzMuOS01LjMuMS0xMi43LTYuNC0xMi43eiIvPjxwYXRoIGQ9Ik01MTIgNjRDMjY0LjYgNjQgNjQgMjY0LjYgNjQgNTEyczIwMC42IDQ0OCA0NDggNDQ4IDQ0OC0yMDAuNiA0NDgtNDQ4Uzc1OS40IDY0IDUxMiA2NHptMCA4MjBjLTIwNS40IDAtMzcyLTE2Ni42LTM3Mi0zNzJzMTY2LjYtMzcyIDM3Mi0zNzIgMzcyIDE2Ni42IDM3MiAzNzItMTY2LjYgMzcyLTM3MiAzNzJ6Ii8+PC9zdmc+",p=Object.defineProperty,m=Object.getOwnPropertySymbols,E=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,w=($,Y,X)=>Y in $?p($,Y,{enumerable:!0,configurable:!0,writable:!0,value:X}):$[Y]=X,x=($,Y)=>{for(var X in Y||(Y={}))E.call(Y,X)&&w($,X,Y[X]);if(m)for(var X of m(Y))b.call(Y,X)&&w($,X,Y[X]);return $};const R=$=>o.createElement("svg",x({fillRule:"evenodd",viewBox:"64 64 896 896"},$),o.createElement("path",{d:"M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm0 76c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm128.01 198.83c.03 0 .05.01.09.06l45.02 45.01a.2.2 0 0 1 .05.09.12.12 0 0 1 0 .07c0 .02-.01.04-.05.08L557.25 512l127.87 127.86a.27.27 0 0 1 .05.06v.02a.12.12 0 0 1 0 .07c0 .03-.01.05-.05.09l-45.02 45.02a.2.2 0 0 1-.09.05.12.12 0 0 1-.07 0c-.02 0-.04-.01-.08-.05L512 557.25 384.14 685.12c-.04.04-.06.05-.08.05a.12.12 0 0 1-.07 0c-.03 0-.05-.01-.09-.05l-45.02-45.02a.2.2 0 0 1-.05-.09.12.12 0 0 1 0-.07c0-.02.01-.04.06-.08L466.75 512 338.88 384.14a.27.27 0 0 1-.05-.06l-.01-.02a.12.12 0 0 1 0-.07c0-.03.01-.05.05-.09l45.02-45.02a.2.2 0 0 1 .09-.05.12.12 0 0 1 .07 0c.02 0 .04.01.08.06L512 466.75l127.86-127.86c.04-.05.06-.06.08-.06a.12.12 0 0 1 .07 0z"}));var P="data:image/svg+xml;base64,PHN2ZyBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHZpZXdCb3g9IjY0IDY0IDg5NiA4OTYiPjxwYXRoIGQ9Ik01MTIgNjRjMjQ3LjQgMCA0NDggMjAwLjYgNDQ4IDQ0OFM3NTkuNCA5NjAgNTEyIDk2MCA2NCA3NTkuNCA2NCA1MTIgMjY0LjYgNjQgNTEyIDY0em0wIDc2Yy0yMDUuNCAwLTM3MiAxNjYuNi0zNzIgMzcyczE2Ni42IDM3MiAzNzIgMzcyIDM3Mi0xNjYuNiAzNzItMzcyLTE2Ni42LTM3Mi0zNzItMzcyem0xMjguMDEgMTk4LjgzYy4wMyAwIC4wNS4wMS4wOS4wNmw0NS4wMiA0NS4wMWEuMi4yIDAgMCAxIC4wNS4wOS4xMi4xMiAwIDAgMSAwIC4wN2MwIC4wMi0uMDEuMDQtLjA1LjA4TDU1Ny4yNSA1MTJsMTI3Ljg3IDEyNy44NmEuMjcuMjcgMCAwIDEgLjA1LjA2di4wMmEuMTIuMTIgMCAwIDEgMCAuMDdjMCAuMDMtLjAxLjA1LS4wNS4wOWwtNDUuMDIgNDUuMDJhLjIuMiAwIDAgMS0uMDkuMDUuMTIuMTIgMCAwIDEtLjA3IDBjLS4wMiAwLS4wNC0uMDEtLjA4LS4wNUw1MTIgNTU3LjI1IDM4NC4xNCA2ODUuMTJjLS4wNC4wNC0uMDYuMDUtLjA4LjA1YS4xMi4xMiAwIDAgMS0uMDcgMGMtLjAzIDAtLjA1LS4wMS0uMDktLjA1bC00NS4wMi00NS4wMmEuMi4yIDAgMCAxLS4wNS0uMDkuMTIuMTIgMCAwIDEgMC0uMDdjMC0uMDIuMDEtLjA0LjA2LS4wOEw0NjYuNzUgNTEyIDMzOC44OCAzODQuMTRhLjI3LjI3IDAgMCAxLS4wNS0uMDZsLS4wMS0uMDJhLjEyLjEyIDAgMCAxIDAtLjA3YzAtLjAzLjAxLS4wNS4wNS0uMDlsNDUuMDItNDUuMDJhLjIuMiAwIDAgMSAuMDktLjA1LjEyLjEyIDAgMCAxIC4wNyAwYy4wMiAwIC4wNC4wMS4wOC4wNkw1MTIgNDY2Ljc1bDEyNy44Ni0xMjcuODZjLjA0LS4wNS4wNi0uMDYuMDgtLjA2YS4xMi4xMiAwIDAgMSAuMDcgMHoiLz48L3N2Zz4=",j=Object.defineProperty,N=Object.getOwnPropertySymbols,F=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable,k=($,Y,X)=>Y in $?j($,Y,{enumerable:!0,configurable:!0,writable:!0,value:X}):$[Y]=X,z=($,Y)=>{for(var X in Y||(Y={}))F.call(Y,X)&&k($,X,Y[X]);if(N)for(var X of N(Y))A.call(Y,X)&&k($,X,Y[X]);return $};const K=$=>o.createElement("svg",z({viewBox:"64 64 896 896"},$),o.createElement("path",{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}),o.createElement("path",{d:"M464 336a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z"}));var ee="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNNTEyIDY0QzI2NC42IDY0IDY0IDI2NC42IDY0IDUxMnMyMDAuNiA0NDggNDQ4IDQ0OCA0NDgtMjAwLjYgNDQ4LTQ0OFM3NTkuNCA2NCA1MTIgNjR6bTAgODIwYy0yMDUuNCAwLTM3Mi0xNjYuNi0zNzItMzcyczE2Ni42LTM3MiAzNzItMzcyIDM3MiAxNjYuNiAzNzIgMzcyLTE2Ni42IDM3Mi0zNzIgMzcyeiIvPjxwYXRoIGQ9Ik00NjQgMzM2YTQ4IDQ4IDAgMSAwIDk2IDAgNDggNDggMCAxIDAtOTYgMHptNzIgMTEyaC00OGMtNC40IDAtOCAzLjYtOCA4djI3MmMwIDQuNCAzLjYgOCA4IDhoNDhjNC40IDAgOC0zLjYgOC04VjQ1NmMwLTQuNC0zLjYtOC04LTh6Ii8+PC9zdmc+",J=Object.defineProperty,ce=Object.getOwnPropertySymbols,Te=Object.prototype.hasOwnProperty,Oe=Object.prototype.propertyIsEnumerable,Ne=($,Y,X)=>Y in $?J($,Y,{enumerable:!0,configurable:!0,writable:!0,value:X}):$[Y]=X,_e=($,Y)=>{for(var X in Y||(Y={}))Te.call(Y,X)&&Ne($,X,Y[X]);if(ce)for(var X of ce(Y))Oe.call(Y,X)&&Ne($,X,Y[X]);return $};const je=$=>o.createElement("svg",_e({viewBox:"64 64 896 896"},$),o.createElement("path",{d:"M464 720a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm16-304v184c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V416c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8zm475.7 440-416-720c-6.2-10.7-16.9-16-27.7-16s-21.6 5.3-27.7 16l-416 720C56 877.4 71.4 904 96 904h832c24.6 0 40-26.6 27.7-48zm-783.5-27.9L512 239.9l339.8 588.2H172.2z"}));var q="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNNDY0IDcyMGE0OCA0OCAwIDEgMCA5NiAwIDQ4IDQ4IDAgMSAwLTk2IDB6bTE2LTMwNHYxODRjMCA0LjQgMy42IDggOCA4aDQ4YzQuNCAwIDgtMy42IDgtOFY0MTZjMC00LjQtMy42LTgtOC04aC00OGMtNC40IDAtOCAzLjYtOCA4em00NzUuNyA0NDAtNDE2LTcyMGMtNi4yLTEwLjctMTYuOS0xNi0yNy43LTE2cy0yMS42IDUuMy0yNy43IDE2bC00MTYgNzIwQzU2IDg3Ny40IDcxLjQgOTA0IDk2IDkwNGg4MzJjMjQuNiAwIDQwLTI2LjYgMjcuNy00OHptLTc4My41LTI3LjlMNTEyIDIzOS45bDMzOS44IDU4OC4ySDE3Mi4yeiIvPjwvc3ZnPg==";function re($,Y){return V($)||W($,Y)||O($,Y)||ae()}function ae(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function O($,Y){if($){if(typeof $=="string")return L($,Y);var X=Object.prototype.toString.call($).slice(8,-1);if(X==="Object"&&$.constructor&&(X=$.constructor.name),X==="Map"||X==="Set")return Array.from($);if(X==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(X))return L($,Y)}}function L($,Y){(Y==null||Y>$.length)&&(Y=$.length);for(var X=0,Re=new Array(Y);X<Y;X++)Re[X]=$[X];return Re}function W($,Y){var X=$==null?null:typeof Symbol!="undefined"&&$[Symbol.iterator]||$["@@iterator"];if(X!=null){var Re,Fe,at,et,Ke=[],ot=!0,te=!1;try{if(at=(X=X.call($)).next,Y===0){if(Object(X)!==X)return;ot=!1}else for(;!(ot=(Re=at.call(X)).done)&&(Ke.push(Re.value),Ke.length!==Y);ot=!0);}catch(fe){te=!0,Fe=fe}finally{try{if(!ot&&X.return!=null&&(et=X.return(),Object(et)!==et))return}finally{if(te)throw Fe}}return Ke}}function V($){if(Array.isArray($))return $}var G={info:K,warning:je,success:g,error:R},I=function(Y){var X=(0,o.useState)(function(){return G[Y.type]}),Re=re(X,1),Fe=Re[0];return o.createElement("div",{className:"dumi-default-container markdown","data-type":Y.type},o.createElement(Fe,null),o.createElement("h4",null,Y.title||Y.type.toUpperCase()),o.createElement("section",null,Y.children))},H=I},62025:function(s,v,e){"use strict";e.d(v,{Z:function(){return cs}});var o=e(12124),a=e.n(o),r=e(57296),l=e(49558),i=e(71062),d=e.t(i,2),f=Object.defineProperty,g=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(T,B,U)=>B in T?f(T,B,{enumerable:!0,configurable:!0,writable:!0,value:U}):T[B]=U,E=(T,B)=>{for(var U in B||(B={}))h.call(B,U)&&m(T,U,B[U]);if(g)for(var U of g(B))p.call(B,U)&&m(T,U,B[U]);return T};const b=T=>i.createElement("svg",E({viewBox:"64 64 896 896"},T),i.createElement("path",{d:"m709.6 210 .4-.2h.2L512 96 313.9 209.8h-.2l.7.3L151.5 304v416L512 928l360.5-208V304l-162.9-94zM482.7 843.6 339.6 761V621.4L210 547.8V372.9l272.7 157.3v313.4zM238.2 321.5l134.7-77.8 138.9 79.7 139.1-79.9 135.2 78-273.9 158-274-158zM814 548.3l-128.8 73.1v139.1l-143.9 83V530.4L814 373.1v175.2z"}));var w="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJtNzA5LjYgMjEwIC40LS4yaC4yTDUxMiA5NiAzMTMuOSAyMDkuOGgtLjJsLjcuM0wxNTEuNSAzMDR2NDE2TDUxMiA5MjhsMzYwLjUtMjA4VjMwNGwtMTYyLjktOTR6TTQ4Mi43IDg0My42IDMzOS42IDc2MVY2MjEuNEwyMTAgNTQ3LjhWMzcyLjlsMjcyLjcgMTU3LjN2MzEzLjR6TTIzOC4yIDMyMS41bDEzNC43LTc3LjggMTM4LjkgNzkuNyAxMzkuMS03OS45IDEzNS4yIDc4LTI3My45IDE1OC0yNzQtMTU4ek04MTQgNTQ4LjNsLTEyOC44IDczLjF2MTM5LjFsLTE0My45IDgzVjUzMC40TDgxNCAzNzMuMXYxNzUuMnoiLz48L3N2Zz4=",x=Object.defineProperty,R=Object.getOwnPropertySymbols,P=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable,N=(T,B,U)=>B in T?x(T,B,{enumerable:!0,configurable:!0,writable:!0,value:U}):T[B]=U,F=(T,B)=>{for(var U in B||(B={}))P.call(B,U)&&N(T,U,B[U]);if(R)for(var U of R(B))j.call(B,U)&&N(T,U,B[U]);return T};const A=T=>i.createElement("svg",F({viewBox:"64 64 896 896"},T),i.createElement("path",{d:"m925.6 405.1-203-253.7a6.5 6.5 0 0 0-5-2.4H306.4c-1.9 0-3.8.9-5 2.4l-203 253.7a6.5 6.5 0 0 0 .2 8.3l408.6 459.5c1.2 1.4 3 2.1 4.8 2.1 1.8 0 3.5-.8 4.8-2.1l408.6-459.5a6.5 6.5 0 0 0 .2-8.3zM645.2 206.4l34.4 133.9-132.5-133.9h98.1zm8.2 178.5H370.6L512 242l141.4 142.9zM378.8 206.4h98.1L344.3 340.3l34.5-133.9zm-53.4 7-44.1 171.5h-93.1l137.2-171.5zM194.6 434.9H289l125.8 247.7-220.2-247.7zM512 763.4 345.1 434.9h333.7L512 763.4zm97.1-80.8L735 434.9h94.4L609.1 682.6zm133.6-297.7-44.1-171.5 137.2 171.5h-93.1z"}));var k="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJtOTI1LjYgNDA1LjEtMjAzLTI1My43YTYuNSA2LjUgMCAwIDAtNS0yLjRIMzA2LjRjLTEuOSAwLTMuOC45LTUgMi40bC0yMDMgMjUzLjdhNi41IDYuNSAwIDAgMCAuMiA4LjNsNDA4LjYgNDU5LjVjMS4yIDEuNCAzIDIuMSA0LjggMi4xIDEuOCAwIDMuNS0uOCA0LjgtMi4xbDQwOC42LTQ1OS41YTYuNSA2LjUgMCAwIDAgLjItOC4zek02NDUuMiAyMDYuNGwzNC40IDEzMy45LTEzMi41LTEzMy45aDk4LjF6bTguMiAxNzguNUgzNzAuNkw1MTIgMjQybDE0MS40IDE0Mi45ek0zNzguOCAyMDYuNGg5OC4xTDM0NC4zIDM0MC4zbDM0LjUtMTMzLjl6bS01My40IDctNDQuMSAxNzEuNWgtOTMuMWwxMzcuMi0xNzEuNXpNMTk0LjYgNDM0LjlIMjg5bDEyNS44IDI0Ny43LTIyMC4yLTI0Ny43ek01MTIgNzYzLjQgMzQ1LjEgNDM0LjloMzMzLjdMNTEyIDc2My40em05Ny4xLTgwLjhMNzM1IDQzNC45aDk0LjRMNjA5LjEgNjgyLjZ6bTEzMy42LTI5Ny43LTQ0LjEtMTcxLjUgMTM3LjIgMTcxLjVoLTkzLjF6Ii8+PC9zdmc+",z=Object.defineProperty,K=Object.getOwnPropertySymbols,ee=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable,ce=(T,B,U)=>B in T?z(T,B,{enumerable:!0,configurable:!0,writable:!0,value:U}):T[B]=U,Te=(T,B)=>{for(var U in B||(B={}))ee.call(B,U)&&ce(T,U,B[U]);if(K)for(var U of K(B))J.call(B,U)&&ce(T,U,B[U]);return T};const Oe=T=>i.createElement("svg",Te({viewBox:"64 64 896 896"},T),i.createElement("path",{d:"M848 359.3H627.7L825.8 109c4.1-5.3.4-13-6.3-13H436c-2.8 0-5.5 1.5-6.9 4L170 547.5c-3.1 5.3.7 12 6.9 12h174.4l-89.4 357.6c-1.9 7.8 7.5 13.3 13.3 7.7L853.5 373c5.2-4.9 1.7-13.7-5.5-13.7zM378.2 732.5l60.3-241H281.1l189.6-327.4h224.6L487 427.4h211L378.2 732.5z"}));var Ne="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNODQ4IDM1OS4zSDYyNy43TDgyNS44IDEwOWM0LjEtNS4zLjQtMTMtNi4zLTEzSDQzNmMtMi44IDAtNS41IDEuNS02LjkgNEwxNzAgNTQ3LjVjLTMuMSA1LjMuNyAxMiA2LjkgMTJoMTc0LjRsLTg5LjQgMzU3LjZjLTEuOSA3LjggNy41IDEzLjMgMTMuMyA3LjdMODUzLjUgMzczYzUuMi00LjkgMS43LTEzLjctNS41LTEzLjd6TTM3OC4yIDczMi41bDYwLjMtMjQxSDI4MS4xbDE4OS42LTMyNy40aDIyNC42TDQ4NyA0MjcuNGgyMTFMMzc4LjIgNzMyLjV6Ii8+PC9zdmc+",_e=e(25769),je=e.n(_e),q=e(9428),re=function(){return i.createElement(i.Fragment,null)},ae=re,O=e(26508),L=e(80268),W=e(74710),V=e(39718),G=e(91002),I=e(52528),H=function(){if(typeof navigator=="undefined"||typeof window=="undefined")return!1;var T=navigator.userAgent||navigator.vendor||window.opera;return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(T)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(T==null?void 0:T.substr(0,4))},$=e(84381),Y=e(44516),X=(0,i.createContext)(null),Re=i.forwardRef(function(T,B){var U=T.prefixCls,ie=T.className,ne=T.style,de=T.id,Se=T.active,De=T.tabKey,$e=T.children;return i.createElement("div",{id:de&&"".concat(de,"-panel-").concat(De),role:"tabpanel",tabIndex:Se?0:-1,"aria-labelledby":de&&"".concat(de,"-tab-").concat(De),"aria-hidden":!Se,style:ne,className:a()(U,Se&&"".concat(U,"-active"),ie),ref:B},$e)}),Fe=Re,at=["key","forceRender","style","className","destroyInactiveTabPane"];function et(T){var B=T.id,U=T.activeKey,ie=T.animated,ne=T.tabPosition,de=T.destroyInactiveTabPane,Se=i.useContext(X),De=Se.prefixCls,$e=Se.tabs,nt=ie.tabPane,yt="".concat(De,"-tabpane");return i.createElement("div",{className:a()("".concat(De,"-content-holder"))},i.createElement("div",{className:a()("".concat(De,"-content"),"".concat(De,"-content-").concat(ne),(0,L.Z)({},"".concat(De,"-content-animated"),nt))},$e.map(function(rt){var mt=rt.key,vt=rt.forceRender,Et=rt.style,Ot=rt.className,Ct=rt.destroyInactiveTabPane,_t=(0,I.Z)(rt,at),Mt=mt===U;return i.createElement(Y.ZP,(0,O.Z)({key:mt,visible:Mt,forceRender:vt,removeOnLeave:!!(de||Ct),leavedClassName:"".concat(yt,"-hidden")},ie.tabPaneMotion),function(It,ht){var Dt=It.style,At=It.className;return i.createElement(Fe,(0,O.Z)({},_t,{prefixCls:yt,id:B,tabKey:mt,animated:nt,active:Mt,style:(0,W.Z)((0,W.Z)({},Et),Dt),className:a()(Ot,At),ref:ht}))})})))}var Ke=e(42371),ot=e(10933),te=e(60402),fe=e(88831),pe=e(90571),me=function(B){var U=B.activeTabOffset,ie=B.horizontal,ne=B.rtl,de=B.indicatorSize,Se=(0,i.useState)(),De=(0,V.Z)(Se,2),$e=De[0],nt=De[1],yt=(0,i.useRef)(),rt=function(Et){return typeof de=="function"?de(Et):typeof de=="number"?de:Et};function mt(){pe.Z.cancel(yt.current)}return(0,i.useEffect)(function(){var vt={};return U&&(ie?(ne?(vt.right=U.right+U.width/2,vt.transform="translateX(50%)"):(vt.left=U.left+U.width/2,vt.transform="translateX(-50%)"),vt.width=rt(U.width)):(vt.top=U.top+U.height/2,vt.transform="translateY(-50%)",vt.height=rt(U.height))),mt(),yt.current=(0,pe.Z)(function(){nt(vt)}),mt},[U,ie,ne,de]),{style:$e}},Ie=me,ue={width:0,height:0,left:0,top:0};function ve(T,B,U){return(0,i.useMemo)(function(){for(var ie,ne=new Map,de=B.get((ie=T[0])===null||ie===void 0?void 0:ie.key)||ue,Se=de.left+de.width,De=0;De<T.length;De+=1){var $e=T[De].key,nt=B.get($e);if(!nt){var yt;nt=B.get((yt=T[De-1])===null||yt===void 0?void 0:yt.key)||ue}var rt=ne.get($e)||(0,W.Z)({},nt);rt.right=Se-rt.left-rt.width,ne.set($e,rt)}return ne},[T.map(function(ie){return ie.key}).join("_"),B,U])}function Ee(T,B){var U=i.useRef(T),ie=i.useState({}),ne=(0,V.Z)(ie,2),de=ne[1];function Se(De){var $e=typeof De=="function"?De(U.current):De;$e!==U.current&&B($e,U.current),U.current=$e,de({})}return[U.current,Se]}var le=.1,ye=.01,Be=20,oe=Math.pow(.995,Be);function he(T,B){var U=(0,i.useState)(),ie=(0,V.Z)(U,2),ne=ie[0],de=ie[1],Se=(0,i.useState)(0),De=(0,V.Z)(Se,2),$e=De[0],nt=De[1],yt=(0,i.useState)(0),rt=(0,V.Z)(yt,2),mt=rt[0],vt=rt[1],Et=(0,i.useState)(),Ot=(0,V.Z)(Et,2),Ct=Ot[0],_t=Ot[1],Mt=(0,i.useRef)();function It(Ht){var Bt=Ht.touches[0],Qt=Bt.screenX,zt=Bt.screenY;de({x:Qt,y:zt}),window.clearInterval(Mt.current)}function ht(Ht){if(ne){Ht.preventDefault();var Bt=Ht.touches[0],Qt=Bt.screenX,zt=Bt.screenY;de({x:Qt,y:zt});var Xt=Qt-ne.x,nn=zt-ne.y;B(Xt,nn);var en=Date.now();nt(en),vt(en-$e),_t({x:Xt,y:nn})}}function Dt(){if(ne&&(de(null),_t(null),Ct)){var Ht=Ct.x/mt,Bt=Ct.y/mt,Qt=Math.abs(Ht),zt=Math.abs(Bt);if(Math.max(Qt,zt)<le)return;var Xt=Ht,nn=Bt;Mt.current=window.setInterval(function(){if(Math.abs(Xt)<ye&&Math.abs(nn)<ye){window.clearInterval(Mt.current);return}Xt*=oe,nn*=oe,B(Xt*Be,nn*Be)},Be)}}var At=(0,i.useRef)();function Rt(Ht){var Bt=Ht.deltaX,Qt=Ht.deltaY,zt=0,Xt=Math.abs(Bt),nn=Math.abs(Qt);Xt===nn?zt=At.current==="x"?Bt:Qt:Xt>nn?(zt=Bt,At.current="x"):(zt=Qt,At.current="y"),B(-zt,-zt)&&Ht.preventDefault()}var Lt=(0,i.useRef)(null);Lt.current={onTouchStart:It,onTouchMove:ht,onTouchEnd:Dt,onWheel:Rt},i.useEffect(function(){function Ht(Xt){Lt.current.onTouchStart(Xt)}function Bt(Xt){Lt.current.onTouchMove(Xt)}function Qt(Xt){Lt.current.onTouchEnd(Xt)}function zt(Xt){Lt.current.onWheel(Xt)}return document.addEventListener("touchmove",Bt,{passive:!1}),document.addEventListener("touchend",Qt,{passive:!1}),T.current.addEventListener("touchstart",Ht,{passive:!1}),T.current.addEventListener("wheel",zt),function(){document.removeEventListener("touchmove",Bt),document.removeEventListener("touchend",Qt)}},[])}var Ae=e(70658);function Ue(T){var B=(0,i.useState)(0),U=(0,V.Z)(B,2),ie=U[0],ne=U[1],de=(0,i.useRef)(0),Se=(0,i.useRef)();return Se.current=T,(0,Ae.o)(function(){var De;(De=Se.current)===null||De===void 0||De.call(Se)},[ie]),function(){de.current===ie&&(de.current+=1,ne(de.current))}}function He(T){var B=(0,i.useRef)([]),U=(0,i.useState)({}),ie=(0,V.Z)(U,2),ne=ie[1],de=(0,i.useRef)(typeof T=="function"?T():T),Se=Ue(function(){var $e=de.current;B.current.forEach(function(nt){$e=nt($e)}),B.current=[],de.current=$e,ne({})});function De($e){B.current.push($e),Se()}return[de.current,De]}var it={width:0,height:0,left:0,top:0,right:0};function y(T,B,U,ie,ne,de,Se){var De=Se.tabs,$e=Se.tabPosition,nt=Se.rtl,yt,rt,mt;return["top","bottom"].includes($e)?(yt="width",rt=nt?"right":"left",mt=Math.abs(U)):(yt="height",rt="top",mt=-U),(0,i.useMemo)(function(){if(!De.length)return[0,0];for(var vt=De.length,Et=vt,Ot=0;Ot<vt;Ot+=1){var Ct=T.get(De[Ot].key)||it;if(Ct[rt]+Ct[yt]>mt+B){Et=Ot-1;break}}for(var _t=0,Mt=vt-1;Mt>=0;Mt-=1){var It=T.get(De[Mt].key)||it;if(It[rt]<mt){_t=Mt+1;break}}return _t>=Et?[0,0]:[_t,Et]},[T,B,ie,ne,de,mt,$e,De.map(function(vt){return vt.key}).join("_"),nt])}function Q(T){var B;return T instanceof Map?(B={},T.forEach(function(U,ie){B[ie]=U})):B=T,JSON.stringify(B)}var be="TABS_DQ";function we(T){return String(T).replace(/"/g,be)}function ze(T,B,U,ie){return!(!U||ie||T===!1||T===void 0&&(B===!1||B===null))}function We(T,B){var U=T.prefixCls,ie=T.editable,ne=T.locale,de=T.style;return!ie||ie.showAdd===!1?null:i.createElement("button",{ref:B,type:"button",className:"".concat(U,"-nav-add"),style:de,"aria-label":(ne==null?void 0:ne.addAriaLabel)||"Add tab",onClick:function(De){ie.onEdit("add",{event:De})}},ie.addIcon||"+")}var Pe=i.forwardRef(We),Xe=i.forwardRef(function(T,B){var U=T.position,ie=T.prefixCls,ne=T.extra;if(!ne)return null;var de,Se={};return(0,G.Z)(ne)==="object"&&!i.isValidElement(ne)?Se=ne:Se.right=ne,U==="right"&&(de=Se.right),U==="left"&&(de=Se.left),de?i.createElement("div",{className:"".concat(ie,"-extra-content"),ref:B},de):null}),ct=Xe,Ve=e(57160),Pt=e(42871),xe=e(36014),tt=i.createContext(null),Ze=tt,Le=[];function ut(T,B){var U=i.useState(function(){if(!(0,Pt.Z)())return null;var Et=document.createElement("div");return Et}),ie=(0,V.Z)(U,1),ne=ie[0],de=i.useRef(!1),Se=i.useContext(Ze),De=i.useState(Le),$e=(0,V.Z)(De,2),nt=$e[0],yt=$e[1],rt=Se||(de.current?void 0:function(Et){yt(function(Ot){var Ct=[Et].concat((0,Ke.Z)(Ot));return Ct})});function mt(){ne.parentElement||document.body.appendChild(ne),de.current=!0}function vt(){var Et;(Et=ne.parentElement)===null||Et===void 0||Et.removeChild(ne),de.current=!1}return(0,Ae.Z)(function(){return T?Se?Se(mt):mt():vt(),vt},[T]),(0,Ae.Z)(function(){nt.length&&(nt.forEach(function(Et){return Et()}),yt(Le))},[nt]),[ne,rt]}function st(T,B){if(!T)return!1;if(T.contains)return T.contains(B);for(var U=B;U;){if(U===T)return!0;U=U.parentNode}return!1}var bt="data-rc-order",kt="data-rc-priority",Kt="rc-util-key",xn=new Map;function dn(){var T=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},B=T.mark;return B?B.startsWith("data-")?B:"data-".concat(B):Kt}function In(T){if(T.attachTo)return T.attachTo;var B=document.querySelector("head");return B||document.body}function Bn(T){return T==="queue"?"prependQueue":T?"prepend":"append"}function Ar(T){return Array.from((xn.get(T)||T).children).filter(function(B){return B.tagName==="STYLE"})}function Br(T){var B=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!(0,Pt.Z)())return null;var U=B.csp,ie=B.prepend,ne=B.priority,de=ne===void 0?0:ne,Se=Bn(ie),De=Se==="prependQueue",$e=document.createElement("style");$e.setAttribute(bt,Se),De&&de&&$e.setAttribute(kt,"".concat(de)),U!=null&&U.nonce&&($e.nonce=U==null?void 0:U.nonce),$e.innerHTML=T;var nt=In(B),yt=nt.firstChild;if(ie){if(De){var rt=Ar(nt).filter(function(mt){if(!["prepend","prependQueue"].includes(mt.getAttribute(bt)))return!1;var vt=Number(mt.getAttribute(kt)||0);return de>=vt});if(rt.length)return nt.insertBefore($e,rt[rt.length-1].nextSibling),$e}nt.insertBefore($e,yt)}else nt.appendChild($e);return $e}function wt(T){var B=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},U=In(B);return Ar(U).find(function(ie){return ie.getAttribute(dn(B))===T})}function dt(T){var B=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},U=wt(T,B);if(U){var ie=In(B);ie.removeChild(U)}}function pt(T,B){var U=xn.get(T);if(!U||!st(document,U)){var ie=Br("",B),ne=ie.parentNode;xn.set(T,ne),T.removeChild(ie)}}function Ut(){xn.clear()}function on(T,B){var U=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},ie=In(U);pt(ie,U);var ne=wt(B,U);if(ne){var de,Se;if((de=U.csp)!==null&&de!==void 0&&de.nonce&&ne.nonce!==((Se=U.csp)===null||Se===void 0?void 0:Se.nonce)){var De;ne.nonce=(De=U.csp)===null||De===void 0?void 0:De.nonce}return ne.innerHTML!==T&&(ne.innerHTML=T),ne}var $e=Br(T,U);return $e.setAttribute(dn(U),B),$e}var qt;function Ln(T){if(typeof document=="undefined")return 0;if(T||qt===void 0){var B=document.createElement("div");B.style.width="100%",B.style.height="200px";var U=document.createElement("div"),ie=U.style;ie.position="absolute",ie.top="0",ie.left="0",ie.pointerEvents="none",ie.visibility="hidden",ie.width="200px",ie.height="150px",ie.overflow="hidden",U.appendChild(B),document.body.appendChild(U);var ne=B.offsetWidth;U.style.overflow="scroll";var de=B.offsetWidth;ne===de&&(de=U.clientWidth),document.body.removeChild(U),qt=ne-de}return qt}function ar(T){var B=T.match(/^(.*)px$/),U=Number(B==null?void 0:B[1]);return Number.isNaN(U)?Ln():U}function Gn(T){if(typeof document=="undefined"||!T||!(T instanceof Element))return{width:0,height:0};var B=getComputedStyle(T,"::-webkit-scrollbar"),U=B.width,ie=B.height;return{width:ar(U),height:ar(ie)}}function Gr(){return document.body.scrollHeight>(window.innerHeight||document.documentElement.clientHeight)&&window.innerWidth>document.body.offsetWidth}var Fn="rc-util-locker-".concat(Date.now()),Dr=0;function ni(T){var B=!!T,U=i.useState(function(){return Dr+=1,"".concat(Fn,"_").concat(Dr)}),ie=(0,V.Z)(U,1),ne=ie[0];(0,Ae.Z)(function(){if(B){var de=Gn(document.body).width,Se=Gr();on(`
html body {
  overflow-y: hidden;
  `.concat(Se?"width: calc(100% - ".concat(de,"px);"):"",`
}`),ne)}else dt(ne);return function(){dt(ne)}},[B,ne])}var sr=!1;function wi(T){return typeof T=="boolean"&&(sr=T),sr}var za=function(B){return B===!1?!1:!(0,Pt.Z)()||!B?null:typeof B=="string"?document.querySelector(B):typeof B=="function"?B():B},ri=i.forwardRef(function(T,B){var U=T.open,ie=T.autoLock,ne=T.getContainer,de=T.debug,Se=T.autoDestroy,De=Se===void 0?!0:Se,$e=T.children,nt=i.useState(U),yt=(0,V.Z)(nt,2),rt=yt[0],mt=yt[1],vt=rt||U;i.useEffect(function(){(De||U)&&mt(U)},[U,De]);var Et=i.useState(function(){return za(ne)}),Ot=(0,V.Z)(Et,2),Ct=Ot[0],_t=Ot[1];i.useEffect(function(){var zt=za(ne);_t(zt!=null?zt:null)});var Mt=ut(vt&&!Ct,de),It=(0,V.Z)(Mt,2),ht=It[0],Dt=It[1],At=Ct!=null?Ct:ht;ni(ie&&U&&(0,Pt.Z)()&&(At===ht||At===document.body));var Rt=null;if($e&&(0,fe.Yr)($e)&&B){var Lt=$e;Rt=Lt.ref}var Ht=(0,fe.x1)(Rt,B);if(!vt||!(0,Pt.Z)()||Ct===void 0)return null;var Bt=At===!1||wi(),Qt=$e;return B&&(Qt=i.cloneElement($e,{ref:Ht})),i.createElement(Ze.Provider,{value:Dt},Bt?Qt:(0,Ve.createPortal)(Qt,At))}),bo=ri,_o=bo,jo=e(58035);function xo(T){var B;return T==null||(B=T.getRootNode)===null||B===void 0?void 0:B.call(T)}function pa(T){return xo(T)instanceof ShadowRoot}function Ii(T){return pa(T)?xo(T):null}function wa(){var T=(0,W.Z)({},d);return T.useId}var Hi=0;function Qu(){}var $a=wa(),to=$a?function(B){var U=$a();return B||U}:function(B){var U=i.useState("ssr-id"),ie=(0,V.Z)(U,2),ne=ie[0],de=ie[1];return i.useEffect(function(){var Se=Hi;Hi+=1,de("rc_unique_".concat(Se))},[]),B||ne};function wo(T){var B=T.prefixCls,U=T.align,ie=T.arrow,ne=T.arrowPos,de=ie||{},Se=de.className,De=de.content,$e=ne.x,nt=$e===void 0?0:$e,yt=ne.y,rt=yt===void 0?0:yt,mt=i.useRef();if(!U||!U.points)return null;var vt={position:"absolute"};if(U.autoArrow!==!1){var Et=U.points[0],Ot=U.points[1],Ct=Et[0],_t=Et[1],Mt=Ot[0],It=Ot[1];Ct===Mt||!["t","b"].includes(Ct)?vt.top=rt:Ct==="t"?vt.top=0:vt.bottom=0,_t===It||!["l","r"].includes(_t)?vt.left=nt:_t==="l"?vt.left=0:vt.right=0}return i.createElement("div",{ref:mt,className:a()("".concat(B,"-arrow"),Se),style:vt},De)}function Io(T){var B=T.prefixCls,U=T.open,ie=T.zIndex,ne=T.mask,de=T.motion;return ne?i.createElement(Y.ZP,(0,O.Z)({},de,{motionAppear:!0,visible:U,removeOnLeave:!0}),function(Se){var De=Se.className;return i.createElement("div",{style:{zIndex:ie},className:a()("".concat(B,"-mask"),De)})}):null}var _a=i.memo(function(T){var B=T.children;return B},function(T,B){return B.cache}),du=_a,Ti=i.forwardRef(function(T,B){var U=T.popup,ie=T.className,ne=T.prefixCls,de=T.style,Se=T.target,De=T.onVisibleChanged,$e=T.open,nt=T.keepDom,yt=T.fresh,rt=T.onClick,mt=T.mask,vt=T.arrow,Et=T.arrowPos,Ot=T.align,Ct=T.motion,_t=T.maskMotion,Mt=T.forceRender,It=T.getPopupContainer,ht=T.autoDestroy,Dt=T.portal,At=T.zIndex,Rt=T.onMouseEnter,Lt=T.onMouseLeave,Ht=T.onPointerEnter,Bt=T.ready,Qt=T.offsetX,zt=T.offsetY,Xt=T.offsetR,nn=T.offsetB,en=T.onAlign,cn=T.onPrepare,gn=T.stretch,hn=T.targetWidth,mn=T.targetHeight,wn=typeof U=="function"?U():U,rr=$e||nt,sn=(It==null?void 0:It.length)>0,Pn=i.useState(!It||!sn),jn=(0,V.Z)(Pn,2),zn=jn[0],Mn=jn[1];if((0,Ae.Z)(function(){!zn&&sn&&Se&&Mn(!0)},[zn,sn,Se]),!zn)return null;var bn="auto",tn={left:"-1000vw",top:"-1000vh",right:bn,bottom:bn};if(Bt||!$e){var Nn,or=Ot.points,Yn=Ot.dynamicInset||((Nn=Ot._experimental)===null||Nn===void 0?void 0:Nn.dynamicInset),Jn=Yn&&or[0][1]==="r",Er=Yn&&or[0][0]==="b";Jn?(tn.right=Xt,tn.left=bn):(tn.left=Qt,tn.right=bn),Er?(tn.bottom=nn,tn.top=bn):(tn.top=zt,tn.bottom=bn)}var ir={};return gn&&(gn.includes("height")&&mn?ir.height=mn:gn.includes("minHeight")&&mn&&(ir.minHeight=mn),gn.includes("width")&&hn?ir.width=hn:gn.includes("minWidth")&&hn&&(ir.minWidth=hn)),$e||(ir.pointerEvents="none"),i.createElement(Dt,{open:Mt||rr,getContainer:It&&function(){return It(Se)},autoDestroy:ht},i.createElement(Io,{prefixCls:ne,open:$e,zIndex:At,mask:mt,motion:_t}),i.createElement(ot.Z,{onResize:en,disabled:!$e},function(Vr){return i.createElement(Y.ZP,(0,O.Z)({motionAppear:!0,motionEnter:!0,motionLeave:!0,removeOnLeave:!1,forceRender:Mt,leavedClassName:"".concat(ne,"-hidden")},Ct,{onAppearPrepare:cn,onEnterPrepare:cn,visible:$e,onVisibleChanged:function(Qn){var hr;Ct==null||(hr=Ct.onVisibleChanged)===null||hr===void 0||hr.call(Ct,Qn),De(Qn)}}),function(vn,Qn){var hr=vn.className,$n=vn.style,Yr=a()(ne,hr,ie);return i.createElement("div",{ref:(0,fe.sQ)(Vr,B,Qn),className:Yr,style:(0,W.Z)((0,W.Z)((0,W.Z)((0,W.Z)({"--arrow-x":"".concat(Et.x||0,"px"),"--arrow-y":"".concat(Et.y||0,"px")},tn),ir),$n),{},{boxSizing:"border-box",zIndex:At},de),onMouseEnter:Rt,onMouseLeave:Lt,onPointerEnter:Ht,onClick:rt},vt&&i.createElement(wo,{prefixCls:ne,arrow:vt,arrowPos:Et,align:Ot}),i.createElement(du,{cache:!$e&&!yt},wn))})}))}),To=Ti,Kr=i.forwardRef(function(T,B){var U=T.children,ie=T.getTriggerDOMNode,ne=(0,fe.Yr)(U),de=i.useCallback(function(De){(0,fe.mH)(B,ie?ie(De):De)},[ie]),Se=(0,fe.x1)(de,U.ref);return ne?i.cloneElement(U,{ref:Se}):U}),Fr=Kr,Pr=i.createContext(null),Ia=Pr;function Ta(T){return T?Array.isArray(T)?T:[T]:[]}function nr(T,B,U,ie){return i.useMemo(function(){var ne=Ta(U!=null?U:B),de=Ta(ie!=null?ie:B),Se=new Set(ne),De=new Set(de);return T&&(Se.has("hover")&&(Se.delete("hover"),Se.add("click")),De.has("hover")&&(De.delete("hover"),De.add("click"))),[Se,De]},[T,B,U,ie])}var Oi=function(T){if(!T)return!1;if(T instanceof Element){if(T.offsetParent)return!0;if(T.getBBox){var B=T.getBBox(),U=B.width,ie=B.height;if(U||ie)return!0}if(T.getBoundingClientRect){var ne=T.getBoundingClientRect(),de=ne.width,Se=ne.height;if(de||Se)return!0}}return!1};function Zi(){var T=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],B=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],U=arguments.length>2?arguments[2]:void 0;return U?T[0]===B[0]:T[0]===B[0]&&T[1]===B[1]}function vu(T,B,U,ie){for(var ne=U.points,de=Object.keys(T),Se=0;Se<de.length;Se+=1){var De,$e=de[Se];if(Zi((De=T[$e])===null||De===void 0?void 0:De.points,ne,ie))return"".concat(B,"-placement-").concat($e)}return""}function pu(T,B,U,ie){return B||(U?{motionName:"".concat(T,"-").concat(U)}:ie?{motionName:ie}:null)}function ai(T){return T.ownerDocument.defaultView}function oi(T){for(var B=[],U=T==null?void 0:T.parentElement,ie=["hidden","scroll","clip","auto"];U;){var ne=ai(U).getComputedStyle(U),de=ne.overflowX,Se=ne.overflowY,De=ne.overflow;[de,Se,De].some(function($e){return ie.includes($e)})&&B.push(U),U=U.parentElement}return B}function so(T){var B=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;return Number.isNaN(T)?B:T}function Ha(T){return so(parseFloat(T),0)}function no(T,B){var U=(0,W.Z)({},T);return(B||[]).forEach(function(ie){if(!(ie instanceof HTMLBodyElement||ie instanceof HTMLHtmlElement)){var ne=ai(ie).getComputedStyle(ie),de=ne.overflow,Se=ne.overflowClipMargin,De=ne.borderTopWidth,$e=ne.borderBottomWidth,nt=ne.borderLeftWidth,yt=ne.borderRightWidth,rt=ie.getBoundingClientRect(),mt=ie.offsetHeight,vt=ie.clientHeight,Et=ie.offsetWidth,Ot=ie.clientWidth,Ct=Ha(De),_t=Ha($e),Mt=Ha(nt),It=Ha(yt),ht=so(Math.round(rt.width/Et*1e3)/1e3),Dt=so(Math.round(rt.height/mt*1e3)/1e3),At=(Et-Ot-Mt-It)*ht,Rt=(mt-vt-Ct-_t)*Dt,Lt=Ct*Dt,Ht=_t*Dt,Bt=Mt*ht,Qt=It*ht,zt=0,Xt=0;if(de==="clip"){var nn=Ha(Se);zt=nn*ht,Xt=nn*Dt}var en=rt.x+Bt-zt,cn=rt.y+Lt-Xt,gn=en+rt.width+2*zt-Bt-Qt-At,hn=cn+rt.height+2*Xt-Lt-Ht-Rt;U.left=Math.max(U.left,en),U.top=Math.max(U.top,cn),U.right=Math.min(U.right,gn),U.bottom=Math.min(U.bottom,hn)}}),U}function Oo(T){var B=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,U="".concat(B),ie=U.match(/^(.*)\%$/);return ie?T*(parseFloat(ie[1])/100):parseFloat(U)}function co(T,B){var U=B||[],ie=(0,V.Z)(U,2),ne=ie[0],de=ie[1];return[Oo(T.width,ne),Oo(T.height,de)]}function ro(){var T=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return[T[0],T[1]]}function Za(T,B){var U=B[0],ie=B[1],ne,de;return U==="t"?de=T.y:U==="b"?de=T.y+T.height:de=T.y+T.height/2,ie==="l"?ne=T.x:ie==="r"?ne=T.x+T.width:ne=T.x+T.width/2,{x:ne,y:de}}function sa(T,B){var U={t:"b",b:"t",l:"r",r:"l"};return T.map(function(ie,ne){return ne===B?U[ie]||"c":ie}).join("")}function El(T,B,U,ie,ne,de,Se){var De=i.useState({ready:!1,offsetX:0,offsetY:0,offsetR:0,offsetB:0,arrowX:0,arrowY:0,scaleX:1,scaleY:1,align:ne[ie]||{}}),$e=(0,V.Z)(De,2),nt=$e[0],yt=$e[1],rt=i.useRef(0),mt=i.useMemo(function(){return B?oi(B):[]},[B]),vt=i.useRef({}),Et=function(){vt.current={}};T||Et();var Ot=(0,te.Z)(function(){if(B&&U&&T){let yo=function(Ja,Ei){var zi=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Yr,Fu=wn.x+Ja,Uu=wn.y+Ei,zu=Fu+Nn,fl=Uu+tn,Dl=Math.max(Fu,zi.left),kl=Math.max(Uu,zi.top),Jl=Math.min(zu,zi.right),Na=Math.min(fl,zi.bottom);return Math.max(0,(Jl-Dl)*(Na-kl))},Nl=function(){vr=wn.y+An,Jr=vr+tn,Zn=wn.x+fn,Tn=Zn+Nn};var Mt,It,ht=B,Dt=ht.ownerDocument,At=ai(ht),Rt=At.getComputedStyle(ht),Lt=Rt.width,Ht=Rt.height,Bt=Rt.position,Qt=ht.style.left,zt=ht.style.top,Xt=ht.style.right,nn=ht.style.bottom,en=ht.style.overflow,cn=(0,W.Z)((0,W.Z)({},ne[ie]),de),gn=Dt.createElement("div");(Mt=ht.parentElement)===null||Mt===void 0||Mt.appendChild(gn),gn.style.left="".concat(ht.offsetLeft,"px"),gn.style.top="".concat(ht.offsetTop,"px"),gn.style.position=Bt,gn.style.height="".concat(ht.offsetHeight,"px"),gn.style.width="".concat(ht.offsetWidth,"px"),ht.style.left="0",ht.style.top="0",ht.style.right="auto",ht.style.bottom="auto",ht.style.overflow="hidden";var hn;if(Array.isArray(U))hn={x:U[0],y:U[1],width:0,height:0};else{var mn=U.getBoundingClientRect();hn={x:mn.x,y:mn.y,width:mn.width,height:mn.height}}var wn=ht.getBoundingClientRect(),rr=Dt.documentElement,sn=rr.clientWidth,Pn=rr.clientHeight,jn=rr.scrollWidth,zn=rr.scrollHeight,Mn=rr.scrollTop,bn=rr.scrollLeft,tn=wn.height,Nn=wn.width,or=hn.height,Yn=hn.width,Jn={left:0,top:0,right:sn,bottom:Pn},Er={left:-bn,top:-Mn,right:jn-bn,bottom:zn-Mn},ir=cn.htmlRegion,Vr="visible",vn="visibleFirst";ir!=="scroll"&&ir!==vn&&(ir=Vr);var Qn=ir===vn,hr=no(Er,mt),$n=no(Jn,mt),Yr=ir===Vr?$n:hr,Lr=Qn?$n:Yr;ht.style.left="auto",ht.style.top="auto",ht.style.right="0",ht.style.bottom="0";var Ra=ht.getBoundingClientRect();ht.style.left=Qt,ht.style.top=zt,ht.style.right=Xt,ht.style.bottom=nn,ht.style.overflow=en,(It=ht.parentElement)===null||It===void 0||It.removeChild(gn);var cr=so(Math.round(Nn/parseFloat(Lt)*1e3)/1e3),Qr=so(Math.round(tn/parseFloat(Ht)*1e3)/1e3);if(cr===0||Qr===0||(0,jo.S)(U)&&!Oi(U))return;var fa=cn.offset,fr=cn.targetOffset,Hr=co(wn,fa),ya=(0,V.Z)(Hr,2),Dn=ya[0],qn=ya[1],Or=co(hn,fr),Ea=(0,V.Z)(Or,2),gr=Ea[0],La=Ea[1];hn.x-=gr,hn.y-=La;var Cr=cn.points||[],kn=(0,V.Z)(Cr,2),ur=kn[0],Sa=kn[1],Zr=ro(Sa),Nr=ro(ur),oa=Za(hn,Zr),oo=Za(wn,Nr),Wr=(0,W.Z)({},cn),fn=oa.x-oo.x+Dn,An=oa.y-oo.y+qn,Xr=yo(fn,An),an=yo(fn,An,$n),yn=Za(hn,["t","l"]),dr=Za(wn,["t","l"]),xr=Za(hn,["b","r"]),Rn=Za(wn,["b","r"]),Hn=cn.overflow||{},jr=Hn.adjustX,po=Hn.adjustY,ia=Hn.shiftX,da=Hn.shiftY,Vo=function(Ei){return typeof Ei=="boolean"?Ei:Ei>=0},vr,Jr,Zn,Tn;Nl();var Wn=Vo(po),er=Nr[0]===Zr[0];if(Wn&&Nr[0]==="t"&&(Jr>Lr.bottom||vt.current.bt)){var qr=An;er?qr-=tn-or:qr=yn.y-Rn.y-qn;var na=yo(fn,qr),ho=yo(fn,qr,$n);na>Xr||na===Xr&&(!Qn||ho>=an)?(vt.current.bt=!0,An=qr,qn=-qn,Wr.points=[sa(Nr,0),sa(Zr,0)]):vt.current.bt=!1}if(Wn&&Nr[0]==="b"&&(vr<Lr.top||vt.current.tb)){var Ur=An;er?Ur+=tn-or:Ur=xr.y-dr.y-qn;var mi=yo(fn,Ur),Lo=yo(fn,Ur,$n);mi>Xr||mi===Xr&&(!Qn||Lo>=an)?(vt.current.tb=!0,An=Ur,qn=-qn,Wr.points=[sa(Nr,0),sa(Zr,0)]):vt.current.tb=!1}var Yo=Vo(jr),io=Nr[1]===Zr[1];if(Yo&&Nr[1]==="l"&&(Tn>Lr.right||vt.current.rl)){var Ya=fn;io?Ya-=Nn-Yn:Ya=yn.x-Rn.x-Dn;var yi=yo(Ya,An),ju=yo(Ya,An,$n);yi>Xr||yi===Xr&&(!Qn||ju>=an)?(vt.current.rl=!0,fn=Ya,Dn=-Dn,Wr.points=[sa(Nr,1),sa(Zr,1)]):vt.current.rl=!1}if(Yo&&Nr[1]==="r"&&(Zn<Lr.left||vt.current.lr)){var uo=fn;io?uo+=Nn-Yn:uo=xr.x-dr.x-Dn;var Ui=yo(uo,An),Qa=yo(uo,An,$n);Ui>Xr||Ui===Xr&&(!Qn||Qa>=an)?(vt.current.lr=!0,fn=uo,Dn=-Dn,Wr.points=[sa(Nr,1),sa(Zr,1)]):vt.current.lr=!1}Nl();var Xa=ia===!0?0:ia;typeof Xa=="number"&&(Zn<$n.left&&(fn-=Zn-$n.left-Dn,hn.x+Yn<$n.left+Xa&&(fn+=hn.x-$n.left+Yn-Xa)),Tn>$n.right&&(fn-=Tn-$n.right-Dn,hn.x>$n.right-Xa&&(fn+=hn.x-$n.right+Xa)));var Qo=da===!0?0:da;typeof Qo=="number"&&(vr<$n.top&&(An-=vr-$n.top-qn,hn.y+or<$n.top+Qo&&(An+=hn.y-$n.top+or-Qo)),Jr>$n.bottom&&(An-=Jr-$n.bottom-qn,hn.y>$n.bottom-Qo&&(An+=hn.y-$n.bottom+Qo)));var Xo=wn.x+fn,Jo=Xo+Nn,go=wn.y+An,uu=go+tn,qo=hn.x,mo=qo+Yn,lu=hn.y,wr=lu+or,tr=Math.max(Xo,qo),mr=Math.min(Jo,mo),ua=(tr+mr)/2,ba=ua-Xo,No=Math.max(go,lu),Do=Math.min(uu,wr),Bu=(No+Do)/2,Ll=Bu-go;Se==null||Se(B,Wr);var su=Ra.right-wn.x-(fn+wn.width),Xl=Ra.bottom-wn.y-(An+wn.height);yt({ready:!0,offsetX:fn/cr,offsetY:An/Qr,offsetR:su/cr,offsetB:Xl/Qr,arrowX:ba/cr,arrowY:Ll/Qr,scaleX:cr,scaleY:Qr,align:Wr})}}),Ct=function(){rt.current+=1;var It=rt.current;Promise.resolve().then(function(){rt.current===It&&Ot()})},_t=function(){yt(function(It){return(0,W.Z)((0,W.Z)({},It),{},{ready:!1})})};return(0,Ae.Z)(_t,[ie]),(0,Ae.Z)(function(){T||_t()},[T]),[nt.ready,nt.offsetX,nt.offsetY,nt.offsetR,nt.offsetB,nt.arrowX,nt.arrowY,nt.scaleX,nt.scaleY,nt.align,Ct]}function Xu(T,B,U,ie,ne){(0,Ae.Z)(function(){if(T&&B&&U){let rt=function(){ie(),ne()};var de=B,Se=U,De=oi(de),$e=oi(Se),nt=ai(Se),yt=new Set([nt].concat((0,Ke.Z)(De),(0,Ke.Z)($e)));return yt.forEach(function(mt){mt.addEventListener("scroll",rt,{passive:!0})}),nt.addEventListener("resize",rt,{passive:!0}),ie(),function(){yt.forEach(function(mt){mt.removeEventListener("scroll",rt),nt.removeEventListener("resize",rt)})}}},[T,B,U])}function fo(T,B,U,ie,ne,de,Se,De){var $e=i.useRef(T),nt=i.useRef(!1);$e.current!==T&&(nt.current=!0,$e.current=T),i.useEffect(function(){var yt=(0,pe.Z)(function(){nt.current=!1});return function(){pe.Z.cancel(yt)}},[T]),i.useEffect(function(){if(B&&ie&&(!ne||de)){var yt=function(){var Bt=!1,Qt=function(nn){var en=nn.target;Bt=Se(en)},zt=function(nn){var en=nn.target;!nt.current&&$e.current&&!Bt&&!Se(en)&&De(!1)};return[Qt,zt]},rt=yt(),mt=(0,V.Z)(rt,2),vt=mt[0],Et=mt[1],Ot=yt(),Ct=(0,V.Z)(Ot,2),_t=Ct[0],Mt=Ct[1],It=ai(ie);It.addEventListener("mousedown",vt,!0),It.addEventListener("click",Et,!0),It.addEventListener("contextmenu",Et,!0);var ht=Ii(U);if(ht&&(ht.addEventListener("mousedown",_t,!0),ht.addEventListener("click",Mt,!0),ht.addEventListener("contextmenu",Mt,!0)),!1)var Dt,At,Rt,Lt;return function(){It.removeEventListener("mousedown",vt,!0),It.removeEventListener("click",Et,!0),It.removeEventListener("contextmenu",Et,!0),ht&&(ht.removeEventListener("mousedown",_t,!0),ht.removeEventListener("click",Mt,!0),ht.removeEventListener("contextmenu",Mt,!0))}}},[B,U,ie,ne,de])}var Sl=["prefixCls","children","action","showAction","hideAction","popupVisible","defaultPopupVisible","onPopupVisibleChange","afterPopupVisibleChange","mouseEnterDelay","mouseLeaveDelay","focusDelay","blurDelay","mask","maskClosable","getPopupContainer","forceRender","autoDestroy","destroyPopupOnHide","popup","popupClassName","popupStyle","popupPlacement","builtinPlacements","popupAlign","zIndex","stretch","getPopupClassNameFromAlign","fresh","alignPoint","onPopupClick","onPopupAlign","arrow","popupMotion","maskMotion","popupTransitionName","popupAnimation","maskTransitionName","maskAnimation","className","getTriggerDOMNode"];function hu(){var T=arguments.length>0&&arguments[0]!==void 0?arguments[0]:_o,B=i.forwardRef(function(U,ie){var ne=U.prefixCls,de=ne===void 0?"rc-trigger-popup":ne,Se=U.children,De=U.action,$e=De===void 0?"hover":De,nt=U.showAction,yt=U.hideAction,rt=U.popupVisible,mt=U.defaultPopupVisible,vt=U.onPopupVisibleChange,Et=U.afterPopupVisibleChange,Ot=U.mouseEnterDelay,Ct=U.mouseLeaveDelay,_t=Ct===void 0?.1:Ct,Mt=U.focusDelay,It=U.blurDelay,ht=U.mask,Dt=U.maskClosable,At=Dt===void 0?!0:Dt,Rt=U.getPopupContainer,Lt=U.forceRender,Ht=U.autoDestroy,Bt=U.destroyPopupOnHide,Qt=U.popup,zt=U.popupClassName,Xt=U.popupStyle,nn=U.popupPlacement,en=U.builtinPlacements,cn=en===void 0?{}:en,gn=U.popupAlign,hn=U.zIndex,mn=U.stretch,wn=U.getPopupClassNameFromAlign,rr=U.fresh,sn=U.alignPoint,Pn=U.onPopupClick,jn=U.onPopupAlign,zn=U.arrow,Mn=U.popupMotion,bn=U.maskMotion,tn=U.popupTransitionName,Nn=U.popupAnimation,or=U.maskTransitionName,Yn=U.maskAnimation,Jn=U.className,Er=U.getTriggerDOMNode,ir=(0,I.Z)(U,Sl),Vr=Ht||Bt||!1,vn=i.useState(!1),Qn=(0,V.Z)(vn,2),hr=Qn[0],$n=Qn[1];(0,Ae.Z)(function(){$n(H())},[]);var Yr=i.useRef({}),Lr=i.useContext(Ia),Ra=i.useMemo(function(){return{registerSubPopup:function(On,zr){Yr.current[On]=zr,Lr==null||Lr.registerSubPopup(On,zr)}}},[Lr]),cr=to(),Qr=i.useState(null),fa=(0,V.Z)(Qr,2),fr=fa[0],Hr=fa[1],ya=(0,te.Z)(function(Ft){(0,jo.S)(Ft)&&fr!==Ft&&Hr(Ft),Lr==null||Lr.registerSubPopup(cr,Ft)}),Dn=i.useState(null),qn=(0,V.Z)(Dn,2),Or=qn[0],Ea=qn[1],gr=i.useRef(null),La=(0,te.Z)(function(Ft){(0,jo.S)(Ft)&&Or!==Ft&&(Ea(Ft),gr.current=Ft)}),Cr=i.Children.only(Se),kn=(Cr==null?void 0:Cr.props)||{},ur={},Sa=(0,te.Z)(function(Ft){var On,zr,ra=Or;return(ra==null?void 0:ra.contains(Ft))||((On=Ii(ra))===null||On===void 0?void 0:On.host)===Ft||Ft===ra||(fr==null?void 0:fr.contains(Ft))||((zr=Ii(fr))===null||zr===void 0?void 0:zr.host)===Ft||Ft===fr||Object.values(Yr.current).some(function($r){return($r==null?void 0:$r.contains(Ft))||Ft===$r})}),Zr=pu(de,Mn,Nn,tn),Nr=pu(de,bn,Yn,or),oa=i.useState(mt||!1),oo=(0,V.Z)(oa,2),Wr=oo[0],fn=oo[1],An=rt!=null?rt:Wr,Xr=(0,te.Z)(function(Ft){rt===void 0&&fn(Ft)});(0,Ae.Z)(function(){fn(rt||!1)},[rt]);var an=i.useRef(An);an.current=An;var yn=i.useRef([]);yn.current=[];var dr=(0,te.Z)(function(Ft){var On;Xr(Ft),((On=yn.current[yn.current.length-1])!==null&&On!==void 0?On:An)!==Ft&&(yn.current.push(Ft),vt==null||vt(Ft))}),xr=i.useRef(),Rn=function(){clearTimeout(xr.current)},Hn=function(On){var zr=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;Rn(),zr===0?dr(On):xr.current=setTimeout(function(){dr(On)},zr*1e3)};i.useEffect(function(){return Rn},[]);var jr=i.useState(!1),po=(0,V.Z)(jr,2),ia=po[0],da=po[1];(0,Ae.Z)(function(Ft){(!Ft||An)&&da(!0)},[An]);var Vo=i.useState(null),vr=(0,V.Z)(Vo,2),Jr=vr[0],Zn=vr[1],Tn=i.useState([0,0]),Wn=(0,V.Z)(Tn,2),er=Wn[0],qr=Wn[1],na=function(On){qr([On.clientX,On.clientY])},ho=El(An,fr,sn?er:Or,nn,cn,gn,jn),Ur=(0,V.Z)(ho,11),mi=Ur[0],Lo=Ur[1],Yo=Ur[2],io=Ur[3],Ya=Ur[4],yi=Ur[5],ju=Ur[6],uo=Ur[7],Ui=Ur[8],Qa=Ur[9],Xa=Ur[10],Qo=nr(hr,$e,nt,yt),Xo=(0,V.Z)(Qo,2),Jo=Xo[0],go=Xo[1],uu=Jo.has("click"),qo=go.has("click")||go.has("contextMenu"),mo=(0,te.Z)(function(){ia||Xa()}),lu=function(){an.current&&sn&&qo&&Hn(!1)};Xu(An,Or,fr,mo,lu),(0,Ae.Z)(function(){mo()},[er,nn]),(0,Ae.Z)(function(){An&&!(cn!=null&&cn[nn])&&mo()},[JSON.stringify(gn)]);var wr=i.useMemo(function(){var Ft=vu(cn,de,Qa,sn);return a()(Ft,wn==null?void 0:wn(Qa))},[Qa,wn,cn,de,sn]);i.useImperativeHandle(ie,function(){return{nativeElement:gr.current,forceAlign:mo}});var tr=i.useState(0),mr=(0,V.Z)(tr,2),ua=mr[0],ba=mr[1],No=i.useState(0),Do=(0,V.Z)(No,2),Bu=Do[0],Ll=Do[1],su=function(){if(mn&&Or){var On=Or.getBoundingClientRect();ba(On.width),Ll(On.height)}},Xl=function(){su(),mo()},yo=function(On){da(!1),Xa(),Et==null||Et(On)},Nl=function(){return new Promise(function(On){su(),Zn(function(){return On})})};(0,Ae.Z)(function(){Jr&&(Xa(),Jr(),Zn(null))},[Jr]);function Ja(Ft,On,zr,ra){ur[Ft]=function($r){var dl;ra==null||ra($r),Hn(On,zr);for(var vl=arguments.length,ql=new Array(vl>1?vl-1:0),$u=1;$u<vl;$u++)ql[$u-1]=arguments[$u];(dl=kn[Ft])===null||dl===void 0||dl.call.apply(dl,[kn,$r].concat(ql))}}(uu||qo)&&(ur.onClick=function(Ft){var On;an.current&&qo?Hn(!1):!an.current&&uu&&(na(Ft),Hn(!0));for(var zr=arguments.length,ra=new Array(zr>1?zr-1:0),$r=1;$r<zr;$r++)ra[$r-1]=arguments[$r];(On=kn.onClick)===null||On===void 0||On.call.apply(On,[kn,Ft].concat(ra))}),fo(An,qo,Or,fr,ht,At,Sa,Hn);var Ei=Jo.has("hover"),zi=go.has("hover"),Fu,Uu;Ei&&(Ja("onMouseEnter",!0,Ot,function(Ft){na(Ft)}),Ja("onPointerEnter",!0,Ot,function(Ft){na(Ft)}),Fu=function(){(An||ia)&&Hn(!0,Ot)},sn&&(ur.onMouseMove=function(Ft){var On;(On=kn.onMouseMove)===null||On===void 0||On.call(kn,Ft)})),zi&&(Ja("onMouseLeave",!1,_t),Ja("onPointerLeave",!1,_t),Uu=function(){Hn(!1,_t)}),Jo.has("focus")&&Ja("onFocus",!0,Mt),go.has("focus")&&Ja("onBlur",!1,It),Jo.has("contextMenu")&&(ur.onContextMenu=function(Ft){var On;an.current&&go.has("contextMenu")?Hn(!1):(na(Ft),Hn(!0)),Ft.preventDefault();for(var zr=arguments.length,ra=new Array(zr>1?zr-1:0),$r=1;$r<zr;$r++)ra[$r-1]=arguments[$r];(On=kn.onContextMenu)===null||On===void 0||On.call.apply(On,[kn,Ft].concat(ra))}),Jn&&(ur.className=a()(kn.className,Jn));var zu=(0,W.Z)((0,W.Z)({},kn),ur),fl={},Dl=["onContextMenu","onClick","onMouseDown","onTouchStart","onMouseEnter","onMouseLeave","onFocus","onBlur"];Dl.forEach(function(Ft){ir[Ft]&&(fl[Ft]=function(){for(var On,zr=arguments.length,ra=new Array(zr),$r=0;$r<zr;$r++)ra[$r]=arguments[$r];(On=zu[Ft])===null||On===void 0||On.call.apply(On,[zu].concat(ra)),ir[Ft].apply(ir,ra)})});var kl=i.cloneElement(Cr,(0,W.Z)((0,W.Z)({},zu),fl)),Jl={x:yi,y:ju},Na=zn?(0,W.Z)({},zn!==!0?zn:{}):null;return i.createElement(i.Fragment,null,i.createElement(ot.Z,{disabled:!An,ref:La,onResize:Xl},i.createElement(Fr,{getTriggerDOMNode:Er},kl)),i.createElement(Ia.Provider,{value:Ra},i.createElement(To,{portal:T,ref:ya,prefixCls:de,popup:Qt,className:a()(zt,wr),style:Xt,target:Or,onMouseEnter:Fu,onMouseLeave:Uu,onPointerEnter:Fu,zIndex:hn,open:An,keepDom:ia,fresh:rr,onClick:Pn,mask:ht,motion:Zr,maskMotion:Nr,onVisibleChanged:yo,onPrepare:Nl,forceRender:Lt,autoDestroy:Vr,getPopupContainer:Rt,align:Qa,arrow:Na,arrowPos:Jl,ready:mi,offsetX:Lo,offsetY:Yo,offsetR:io,offsetB:Ya,onAlign:mo,stretch:mn,targetWidth:ua/uo,targetHeight:Bu/Ui})))});return B}var Bo=hu(_o),Mr=e(84821),bl=Mr.Z.ESC,ii=Mr.Z.TAB;function Ci(T){var B=T.visible,U=T.triggerRef,ie=T.onVisibleChange,ne=T.autoFocus,de=T.overlayRef,Se=i.useRef(!1),De=function(){if(B){var rt,mt;(rt=U.current)===null||rt===void 0||(mt=rt.focus)===null||mt===void 0||mt.call(rt),ie==null||ie(!1)}},$e=function(){var rt;return(rt=de.current)!==null&&rt!==void 0&&rt.focus?(de.current.focus(),Se.current=!0,!0):!1},nt=function(rt){switch(rt.keyCode){case bl:De();break;case ii:{var mt=!1;Se.current||(mt=$e()),mt?rt.preventDefault():De();break}}};i.useEffect(function(){return B?(window.addEventListener("keydown",nt),ne&&(0,pe.Z)($e,3),function(){window.removeEventListener("keydown",nt),Se.current=!1}):function(){Se.current=!1}},[B])}var ui=(0,i.forwardRef)(function(T,B){var U=T.overlay,ie=T.arrow,ne=T.prefixCls,de=(0,i.useMemo)(function(){var De;return typeof U=="function"?De=U():De=U,De},[U]),Se=(0,fe.sQ)(B,de==null?void 0:de.ref);return i.createElement(i.Fragment,null,ie&&i.createElement("div",{className:"".concat(ne,"-arrow")}),i.cloneElement(de,{ref:(0,fe.Yr)(de)?Se:void 0}))}),Wi=ui,li={adjustX:1,adjustY:1},Co=[0,0],Gi={topLeft:{points:["bl","tl"],overflow:li,offset:[0,-4],targetOffset:Co},top:{points:["bc","tc"],overflow:li,offset:[0,-4],targetOffset:Co},topRight:{points:["br","tr"],overflow:li,offset:[0,-4],targetOffset:Co},bottomLeft:{points:["tl","bl"],overflow:li,offset:[0,4],targetOffset:Co},bottom:{points:["tc","bc"],overflow:li,offset:[0,4],targetOffset:Co},bottomRight:{points:["tr","br"],overflow:li,offset:[0,4],targetOffset:Co}},Ao=Gi,Ki=["arrow","prefixCls","transitionName","animation","align","placement","placements","getPopupContainer","showAction","hideAction","overlayClassName","overlayStyle","visible","trigger","autoFocus","overlay","children","onVisibleChange"];function Ju(T,B){var U,ie=T.arrow,ne=ie===void 0?!1:ie,de=T.prefixCls,Se=de===void 0?"rc-dropdown":de,De=T.transitionName,$e=T.animation,nt=T.align,yt=T.placement,rt=yt===void 0?"bottomLeft":yt,mt=T.placements,vt=mt===void 0?Ao:mt,Et=T.getPopupContainer,Ot=T.showAction,Ct=T.hideAction,_t=T.overlayClassName,Mt=T.overlayStyle,It=T.visible,ht=T.trigger,Dt=ht===void 0?["hover"]:ht,At=T.autoFocus,Rt=T.overlay,Lt=T.children,Ht=T.onVisibleChange,Bt=(0,I.Z)(T,Ki),Qt=i.useState(),zt=(0,V.Z)(Qt,2),Xt=zt[0],nn=zt[1],en="visible"in T?It:Xt,cn=i.useRef(null),gn=i.useRef(null),hn=i.useRef(null);i.useImperativeHandle(B,function(){return cn.current});var mn=function(tn){nn(tn),Ht==null||Ht(tn)};Ci({visible:en,triggerRef:hn,onVisibleChange:mn,autoFocus:At,overlayRef:gn});var wn=function(tn){var Nn=T.onOverlayClick;nn(!1),Nn&&Nn(tn)},rr=function(){return i.createElement(Wi,{ref:gn,overlay:Rt,prefixCls:Se,arrow:ne})},sn=function(){return typeof Rt=="function"?rr:rr()},Pn=function(){var tn=T.minOverlayWidthMatchTrigger,Nn=T.alignPoint;return"minOverlayWidthMatchTrigger"in T?tn:!Nn},jn=function(){var tn=T.openClassName;return tn!==void 0?tn:"".concat(Se,"-open")},zn=i.cloneElement(Lt,{className:a()((U=Lt.props)===null||U===void 0?void 0:U.className,en&&jn()),ref:(0,fe.Yr)(Lt)?(0,fe.sQ)(hn,Lt.ref):void 0}),Mn=Ct;return!Mn&&Dt.indexOf("contextMenu")!==-1&&(Mn=["click"]),i.createElement(Bo,(0,O.Z)({builtinPlacements:vt},Bt,{prefixCls:Se,ref:cn,popupClassName:a()(_t,(0,L.Z)({},"".concat(Se,"-show-arrow"),ne)),popupStyle:Mt,action:Dt,showAction:Ot,hideAction:Mn,popupPlacement:rt,popupAlign:nt,popupTransitionName:De,popupAnimation:$e,popupVisible:en,stretch:Pn()?"minWidth":"",popup:sn(),onPopupVisibleChange:mn,onPopupClick:wn,getPopupContainer:Et}),zn)}var Po=i.forwardRef(Ju),Vi=Po,Yi=["prefixCls","invalidate","item","renderItem","responsive","responsiveDisabled","registerSize","itemKey","className","style","children","display","order","component"],Fo=void 0;function Qi(T,B){var U=T.prefixCls,ie=T.invalidate,ne=T.item,de=T.renderItem,Se=T.responsive,De=T.responsiveDisabled,$e=T.registerSize,nt=T.itemKey,yt=T.className,rt=T.style,mt=T.children,vt=T.display,Et=T.order,Ot=T.component,Ct=Ot===void 0?"div":Ot,_t=(0,I.Z)(T,Yi),Mt=Se&&!vt;function It(Lt){$e(nt,Lt)}i.useEffect(function(){return function(){It(null)}},[]);var ht=de&&ne!==Fo?de(ne):mt,Dt;ie||(Dt={opacity:Mt?0:1,height:Mt?0:Fo,overflowY:Mt?"hidden":Fo,order:Se?Et:Fo,pointerEvents:Mt?"none":Fo,position:Mt?"absolute":Fo});var At={};Mt&&(At["aria-hidden"]=!0);var Rt=i.createElement(Ct,(0,O.Z)({className:a()(!ie&&U,yt),style:(0,W.Z)((0,W.Z)({},Dt),rt)},At,_t,{ref:B}),ht);return Se&&(Rt=i.createElement(ot.Z,{onResize:function(Ht){var Bt=Ht.offsetWidth;It(Bt)},disabled:De},Rt)),Rt}var si=i.forwardRef(Qi);si.displayName="Item";var Ai=si;function ca(T){if(typeof MessageChannel=="undefined")(0,pe.Z)(T);else{var B=new MessageChannel;B.port1.onmessage=function(){return T()},B.port2.postMessage(void 0)}}function Uo(){var T=i.useRef(null),B=function(ie){T.current||(T.current=[],ca(function(){(0,Ve.unstable_batchedUpdates)(function(){T.current.forEach(function(ne){ne()}),T.current=null})})),T.current.push(ie)};return B}function zo(T,B){var U=i.useState(B),ie=(0,V.Z)(U,2),ne=ie[0],de=ie[1],Se=(0,te.Z)(function(De){T(function(){de(De)})});return[ne,Se]}var ha=i.createContext(null),xl=["component"],gu=["className"],mu=["className"],Pi=function(B,U){var ie=i.useContext(ha);if(!ie){var ne=B.component,de=ne===void 0?"div":ne,Se=(0,I.Z)(B,xl);return i.createElement(de,(0,O.Z)({},Se,{ref:U}))}var De=ie.className,$e=(0,I.Z)(ie,gu),nt=B.className,yt=(0,I.Z)(B,mu);return i.createElement(ha.Provider,{value:null},i.createElement(Ai,(0,O.Z)({ref:U,className:a()(De,nt)},$e,yt)))},Mi=i.forwardRef(Pi);Mi.displayName="RawItem";var yu=Mi,wl=["prefixCls","data","renderItem","renderRawItem","itemKey","itemWidth","ssr","style","className","maxCount","renderRest","renderRawRest","suffix","component","itemComponent","onVisibleChange"],qu="responsive",Ri="invalidate";function Eu(T){return"+ ".concat(T.length," ...")}function Li(T,B){var U=T.prefixCls,ie=U===void 0?"rc-overflow":U,ne=T.data,de=ne===void 0?[]:ne,Se=T.renderItem,De=T.renderRawItem,$e=T.itemKey,nt=T.itemWidth,yt=nt===void 0?10:nt,rt=T.ssr,mt=T.style,vt=T.className,Et=T.maxCount,Ot=T.renderRest,Ct=T.renderRawRest,_t=T.suffix,Mt=T.component,It=Mt===void 0?"div":Mt,ht=T.itemComponent,Dt=T.onVisibleChange,At=(0,I.Z)(T,wl),Rt=rt==="full",Lt=Uo(),Ht=zo(Lt,null),Bt=(0,V.Z)(Ht,2),Qt=Bt[0],zt=Bt[1],Xt=Qt||0,nn=zo(Lt,new Map),en=(0,V.Z)(nn,2),cn=en[0],gn=en[1],hn=zo(Lt,0),mn=(0,V.Z)(hn,2),wn=mn[0],rr=mn[1],sn=zo(Lt,0),Pn=(0,V.Z)(sn,2),jn=Pn[0],zn=Pn[1],Mn=zo(Lt,0),bn=(0,V.Z)(Mn,2),tn=bn[0],Nn=bn[1],or=(0,i.useState)(null),Yn=(0,V.Z)(or,2),Jn=Yn[0],Er=Yn[1],ir=(0,i.useState)(null),Vr=(0,V.Z)(ir,2),vn=Vr[0],Qn=Vr[1],hr=i.useMemo(function(){return vn===null&&Rt?Number.MAX_SAFE_INTEGER:vn||0},[vn,Qt]),$n=(0,i.useState)(!1),Yr=(0,V.Z)($n,2),Lr=Yr[0],Ra=Yr[1],cr="".concat(ie,"-item"),Qr=Math.max(wn,jn),fa=Et===qu,fr=de.length&&fa,Hr=Et===Ri,ya=fr||typeof Et=="number"&&de.length>Et,Dn=(0,i.useMemo)(function(){var an=de;return fr?Qt===null&&Rt?an=de:an=de.slice(0,Math.min(de.length,Xt/yt)):typeof Et=="number"&&(an=de.slice(0,Et)),an},[de,yt,Qt,Et,fr]),qn=(0,i.useMemo)(function(){return fr?de.slice(hr+1):de.slice(Dn.length)},[de,Dn,fr,hr]),Or=(0,i.useCallback)(function(an,yn){var dr;return typeof $e=="function"?$e(an):(dr=$e&&(an==null?void 0:an[$e]))!==null&&dr!==void 0?dr:yn},[$e]),Ea=(0,i.useCallback)(Se||function(an){return an},[Se]);function gr(an,yn,dr){vn===an&&(yn===void 0||yn===Jn)||(Qn(an),dr||(Ra(an<de.length-1),Dt==null||Dt(an)),yn!==void 0&&Er(yn))}function La(an,yn){zt(yn.clientWidth)}function Cr(an,yn){gn(function(dr){var xr=new Map(dr);return yn===null?xr.delete(an):xr.set(an,yn),xr})}function kn(an,yn){zn(yn),rr(jn)}function ur(an,yn){Nn(yn)}function Sa(an){return cn.get(Or(Dn[an],an))}(0,Ae.Z)(function(){if(Xt&&typeof Qr=="number"&&Dn){var an=tn,yn=Dn.length,dr=yn-1;if(!yn){gr(0,null);return}for(var xr=0;xr<yn;xr+=1){var Rn=Sa(xr);if(Rt&&(Rn=Rn||0),Rn===void 0){gr(xr-1,void 0,!0);break}if(an+=Rn,dr===0&&an<=Xt||xr===dr-1&&an+Sa(dr)<=Xt){gr(dr,null);break}else if(an+Qr>Xt){gr(xr-1,an-Rn-tn+jn);break}}_t&&Sa(0)+tn>Xt&&Er(null)}},[Xt,cn,jn,tn,Or,Dn]);var Zr=Lr&&!!qn.length,Nr={};Jn!==null&&fr&&(Nr={position:"absolute",left:Jn,top:0});var oa={prefixCls:cr,responsive:fr,component:ht,invalidate:Hr},oo=De?function(an,yn){var dr=Or(an,yn);return i.createElement(ha.Provider,{key:dr,value:(0,W.Z)((0,W.Z)({},oa),{},{order:yn,item:an,itemKey:dr,registerSize:Cr,display:yn<=hr})},De(an,yn))}:function(an,yn){var dr=Or(an,yn);return i.createElement(Ai,(0,O.Z)({},oa,{order:yn,key:dr,item:an,renderItem:Ea,itemKey:dr,registerSize:Cr,display:yn<=hr}))},Wr,fn={order:Zr?hr:Number.MAX_SAFE_INTEGER,className:"".concat(cr,"-rest"),registerSize:kn,display:Zr};if(Ct)Ct&&(Wr=i.createElement(ha.Provider,{value:(0,W.Z)((0,W.Z)({},oa),fn)},Ct(qn)));else{var An=Ot||Eu;Wr=i.createElement(Ai,(0,O.Z)({},oa,fn),typeof An=="function"?An(qn):An)}var Xr=i.createElement(It,(0,O.Z)({className:a()(!Hr&&ie,vt),style:mt,ref:B},At),Dn.map(oo),ya?Wr:null,_t&&i.createElement(Ai,(0,O.Z)({},oa,{responsive:fa,responsiveDisabled:!fr,order:hr,className:"".concat(cr,"-suffix"),registerSize:ur,display:!0,style:Nr}),_t));return fa&&(Xr=i.createElement(ot.Z,{onResize:La,disabled:!fr},Xr)),Xr}var ci=i.forwardRef(Li);ci.displayName="Overflow",ci.Item=yu,ci.RESPONSIVE=qu,ci.INVALIDATE=Ri;var el=ci,fi=el;function Il(T,B){var U=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,ie=new Set;function ne(de,Se){var De=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,$e=ie.has(de);if((0,xe.ZP)(!$e,"Warning: There may be circular references"),$e)return!1;if(de===Se)return!0;if(U&&De>1)return!1;ie.add(de);var nt=De+1;if(Array.isArray(de)){if(!Array.isArray(Se)||de.length!==Se.length)return!1;for(var yt=0;yt<de.length;yt++)if(!ne(de[yt],Se[yt],nt))return!1;return!0}if(de&&Se&&(0,G.Z)(de)==="object"&&(0,G.Z)(Se)==="object"){var rt=Object.keys(de);return rt.length!==Object.keys(Se).length?!1:rt.every(function(mt){return ne(de[mt],Se[mt],nt)})}return!1}return ne(T,B)}var Su=Il,Ni=i.createContext(null);function bu(T,B){return T===void 0?null:"".concat(T,"-").concat(B)}function tl(T){var B=i.useContext(Ni);return bu(B,T)}var nl=e(4065),xu=["children","locked"],Wa=i.createContext(null);function Xi(T,B){var U=(0,W.Z)({},T);return Object.keys(B).forEach(function(ie){var ne=B[ie];ne!==void 0&&(U[ie]=ne)}),U}function $o(T){var B=T.children,U=T.locked,ie=(0,I.Z)(T,xu),ne=i.useContext(Wa),de=(0,nl.Z)(function(){return Xi(ne,ie)},[ne,ie],function(Se,De){return!U&&(Se[0]!==De[0]||!Su(Se[1],De[1],!0))});return i.createElement(Wa.Provider,{value:de},B)}var M=[],D=i.createContext(null);function _(){return i.useContext(D)}var se=i.createContext(M);function Ce(T){var B=i.useContext(se);return i.useMemo(function(){return T!==void 0?[].concat((0,Ke.Z)(B),[T]):B},[B,T])}var Qe=i.createContext(null),Je=i.createContext({}),lt=Je;function ft(T){var B=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(Oi(T)){var U=T.nodeName.toLowerCase(),ie=["input","select","textarea","button"].includes(U)||T.isContentEditable||U==="a"&&!!T.getAttribute("href"),ne=T.getAttribute("tabindex"),de=Number(ne),Se=null;return ne&&!Number.isNaN(de)?Se=de:ie&&Se===null&&(Se=0),ie&&T.disabled&&(Se=null),Se!==null&&(Se>=0||B&&Se<0)}return!1}function gt(T){var B=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,U=(0,Ke.Z)(T.querySelectorAll("*")).filter(function(ie){return ft(ie,B)});return ft(T,B)&&U.unshift(T),U}var jt=null;function ln(){jt=document.activeElement}function Gt(){jt=null}function Zt(){if(jt)try{jt.focus()}catch(T){}}function pn(T,B){if(B.keyCode===9){var U=gt(T),ie=U[B.shiftKey?0:U.length-1],ne=ie===document.activeElement||T===document.activeElement;if(ne){var de=U[B.shiftKey?U.length-1:0];de.focus(),B.preventDefault()}}}var Un=Mr.Z.LEFT,_n=Mr.Z.RIGHT,Vn=Mr.Z.UP,Ir=Mr.Z.DOWN,kr=Mr.Z.ENTER,Oa=Mr.Z.ESC,ja=Mr.Z.HOME,ea=Mr.Z.END,Ba=[Vn,Ir,Un,_n];function Mo(T,B,U,ie){var ne,de,Se,De,$e="prev",nt="next",yt="children",rt="parent";if(T==="inline"&&ie===kr)return{inlineTrigger:!0};var mt=(ne={},(0,L.Z)(ne,Vn,$e),(0,L.Z)(ne,Ir,nt),ne),vt=(de={},(0,L.Z)(de,Un,U?nt:$e),(0,L.Z)(de,_n,U?$e:nt),(0,L.Z)(de,Ir,yt),(0,L.Z)(de,kr,yt),de),Et=(Se={},(0,L.Z)(Se,Vn,$e),(0,L.Z)(Se,Ir,nt),(0,L.Z)(Se,kr,yt),(0,L.Z)(Se,Oa,rt),(0,L.Z)(Se,Un,U?yt:rt),(0,L.Z)(Se,_n,U?rt:yt),Se),Ot={inline:mt,horizontal:vt,vertical:Et,inlineSub:mt,horizontalSub:Et,verticalSub:Et},Ct=(De=Ot["".concat(T).concat(B?"":"Sub")])===null||De===void 0?void 0:De[ie];switch(Ct){case $e:return{offset:-1,sibling:!0};case nt:return{offset:1,sibling:!0};case rt:return{offset:-1,sibling:!1};case yt:return{offset:1,sibling:!1};default:return null}}function Ho(T){for(var B=T;B;){if(B.getAttribute("data-menu-list"))return B;B=B.parentElement}return null}function di(T,B){for(var U=T||document.activeElement;U;){if(B.has(U))return U;U=U.parentElement}return null}function Ro(T,B){var U=gt(T,!0);return U.filter(function(ie){return B.has(ie)})}function Zo(T,B,U){var ie=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1;if(!T)return null;var ne=Ro(T,B),de=ne.length,Se=ne.findIndex(function(De){return U===De});return ie<0?Se===-1?Se=de-1:Se-=1:ie>0&&(Se+=1),Se=(Se+de)%de,ne[Se]}function vi(T,B,U,ie,ne,de,Se,De,$e,nt){var yt=i.useRef(),rt=i.useRef();rt.current=B;var mt=function(){pe.Z.cancel(yt.current)};return i.useEffect(function(){return function(){mt()}},[]),function(vt){var Et=vt.which;if([].concat(Ba,[kr,Oa,ja,ea]).includes(Et)){var Ot,Ct,_t,Mt=function(){Ot=new Set,Ct=new Map,_t=new Map;var en=de();return en.forEach(function(cn){var gn=document.querySelector("[data-menu-id='".concat(bu(ie,cn),"']"));gn&&(Ot.add(gn),_t.set(gn,cn),Ct.set(cn,gn))}),Ot};Mt();var It=Ct.get(B),ht=di(It,Ot),Dt=_t.get(ht),At=Mo(T,Se(Dt,!0).length===1,U,Et);if(!At&&Et!==ja&&Et!==ea)return;(Ba.includes(Et)||[ja,ea].includes(Et))&&vt.preventDefault();var Rt=function(en){if(en){var cn=en,gn=en.querySelector("a");gn!=null&&gn.getAttribute("href")&&(cn=gn);var hn=_t.get(en);De(hn),mt(),yt.current=(0,pe.Z)(function(){rt.current===hn&&cn.focus()})}};if([ja,ea].includes(Et)||At.sibling||!ht){var Lt;!ht||T==="inline"?Lt=ne.current:Lt=Ho(ht);var Ht,Bt=Ro(Lt,Ot);Et===ja?Ht=Bt[0]:Et===ea?Ht=Bt[Bt.length-1]:Ht=Zo(Lt,Ot,ht,At.offset),Rt(Ht)}else if(At.inlineTrigger)$e(Dt);else if(At.offset>0)$e(Dt,!0),mt(),yt.current=(0,pe.Z)(function(){Mt();var nn=ht.getAttribute("aria-controls"),en=document.getElementById(nn),cn=Zo(en,Ot);Rt(cn)},5);else if(At.offset<0){var Qt=Se(Dt,!0),zt=Qt[Qt.length-2],Xt=Ct.get(zt);$e(zt,!1),Rt(Xt)}}nt==null||nt(vt)}}function ao(T){Promise.resolve().then(T)}var Wo="__RC_UTIL_PATH_SPLIT__",rl=function(B){return B.join(Wo)},Ul=function(B){return B.split(Wo)},Di="rc-menu-more";function zl(){var T=i.useState({}),B=(0,V.Z)(T,2),U=B[1],ie=(0,i.useRef)(new Map),ne=(0,i.useRef)(new Map),de=i.useState([]),Se=(0,V.Z)(de,2),De=Se[0],$e=Se[1],nt=(0,i.useRef)(0),yt=(0,i.useRef)(!1),rt=function(){yt.current||U({})},mt=(0,i.useCallback)(function(It,ht){var Dt=rl(ht);ne.current.set(Dt,It),ie.current.set(It,Dt),nt.current+=1;var At=nt.current;ao(function(){At===nt.current&&rt()})},[]),vt=(0,i.useCallback)(function(It,ht){var Dt=rl(ht);ne.current.delete(Dt),ie.current.delete(It)},[]),Et=(0,i.useCallback)(function(It){$e(It)},[]),Ot=(0,i.useCallback)(function(It,ht){var Dt=ie.current.get(It)||"",At=Ul(Dt);return ht&&De.includes(At[0])&&At.unshift(Di),At},[De]),Ct=(0,i.useCallback)(function(It,ht){return It.some(function(Dt){var At=Ot(Dt,!0);return At.includes(ht)})},[Ot]),_t=function(){var ht=(0,Ke.Z)(ie.current.keys());return De.length&&ht.push(Di),ht},Mt=(0,i.useCallback)(function(It){var ht="".concat(ie.current.get(It)).concat(Wo),Dt=new Set;return(0,Ke.Z)(ne.current.keys()).forEach(function(At){At.startsWith(ht)&&Dt.add(ne.current.get(At))}),Dt},[]);return i.useEffect(function(){return function(){yt.current=!0}},[]),{registerPath:mt,unregisterPath:vt,refreshOverflowKeys:Et,isSubPathKey:Ct,getKeyPath:Ot,getKeys:_t,getSubPathKeys:Mt}}function Ji(T){var B=i.useRef(T);B.current=T;var U=i.useCallback(function(){for(var ie,ne=arguments.length,de=new Array(ne),Se=0;Se<ne;Se++)de[Se]=arguments[Se];return(ie=B.current)===null||ie===void 0?void 0:ie.call.apply(ie,[B].concat(de))},[]);return T?U:void 0}var $l=Math.random().toFixed(5).toString().slice(2),Ca=0;function Yt(T){var B=(0,$.Z)(T,{value:T}),U=(0,V.Z)(B,2),ie=U[0],ne=U[1];return i.useEffect(function(){Ca+=1;var de="".concat($l,"-").concat(Ca);ne("rc-menu-uuid-".concat(de))},[]),ie}var $t=e(74809),Kn=e(57338),Sr=e(29161),br=e(12826),_r=e(99468);function ta(T,B,U,ie){var ne=i.useContext(Wa),de=ne.activeKey,Se=ne.onActive,De=ne.onInactive,$e={active:de===T};return B||($e.onMouseEnter=function(nt){U==null||U({key:T,domEvent:nt}),Se(T)},$e.onMouseLeave=function(nt){ie==null||ie({key:T,domEvent:nt}),De(T)}),$e}function ga(T){var B=i.useContext(Wa),U=B.mode,ie=B.rtl,ne=B.inlineIndent;if(U!=="inline")return null;var de=T;return ie?{paddingRight:de*ne}:{paddingLeft:de*ne}}function Ga(T){var B=T.icon,U=T.props,ie=T.children,ne;return B===null||B===!1?null:(typeof B=="function"?ne=i.createElement(B,(0,W.Z)({},U)):typeof B!="boolean"&&(ne=B),ne||ie||null)}var wu=["item"];function ma(T){var B=T.item,U=(0,I.Z)(T,wu);return Object.defineProperty(U,"item",{get:function(){return(0,xe.ZP)(!1,"`info.item` is deprecated since we will move to function component that not provides React Node instance in future."),B}}),U}var Iu=["title","attribute","elementRef"],qi=["style","className","eventKey","warnKey","disabled","itemIcon","children","role","onMouseEnter","onMouseLeave","onClick","onKeyDown","onFocus"],Go=["active"],ki=function(T){(0,Sr.Z)(U,T);var B=(0,br.Z)(U);function U(){return(0,$t.Z)(this,U),B.apply(this,arguments)}return(0,Kn.Z)(U,[{key:"render",value:function(){var ne=this.props,de=ne.title,Se=ne.attribute,De=ne.elementRef,$e=(0,I.Z)(ne,Iu),nt=(0,_r.Z)($e,["eventKey","popupClassName","popupOffset","onTitleClick"]);return(0,xe.ZP)(!Se,"`attribute` of Menu.Item is deprecated. Please pass attribute directly."),i.createElement(fi.Item,(0,O.Z)({},Se,{title:typeof de=="string"?de:void 0},nt,{ref:De}))}}]),U}(i.Component),al=i.forwardRef(function(T,B){var U,ie=T.style,ne=T.className,de=T.eventKey,Se=T.warnKey,De=T.disabled,$e=T.itemIcon,nt=T.children,yt=T.role,rt=T.onMouseEnter,mt=T.onMouseLeave,vt=T.onClick,Et=T.onKeyDown,Ot=T.onFocus,Ct=(0,I.Z)(T,qi),_t=tl(de),Mt=i.useContext(Wa),It=Mt.prefixCls,ht=Mt.onItemClick,Dt=Mt.disabled,At=Mt.overflowDisabled,Rt=Mt.itemIcon,Lt=Mt.selectedKeys,Ht=Mt.onActive,Bt=i.useContext(lt),Qt=Bt._internalRenderMenuItem,zt="".concat(It,"-item"),Xt=i.useRef(),nn=i.useRef(),en=Dt||De,cn=(0,fe.x1)(B,nn),gn=Ce(de),hn=function(Yn){return{key:de,keyPath:(0,Ke.Z)(gn).reverse(),item:Xt.current,domEvent:Yn}},mn=$e||Rt,wn=ta(de,en,rt,mt),rr=wn.active,sn=(0,I.Z)(wn,Go),Pn=Lt.includes(de),jn=ga(gn.length),zn=function(Yn){if(!en){var Jn=hn(Yn);vt==null||vt(ma(Jn)),ht(Jn)}},Mn=function(Yn){if(Et==null||Et(Yn),Yn.which===Mr.Z.ENTER){var Jn=hn(Yn);vt==null||vt(ma(Jn)),ht(Jn)}},bn=function(Yn){Ht(de),Ot==null||Ot(Yn)},tn={};T.role==="option"&&(tn["aria-selected"]=Pn);var Nn=i.createElement(ki,(0,O.Z)({ref:Xt,elementRef:cn,role:yt===null?"none":yt||"menuitem",tabIndex:De?null:-1,"data-menu-id":At&&_t?null:_t},Ct,sn,tn,{component:"li","aria-disabled":De,style:(0,W.Z)((0,W.Z)({},jn),ie),className:a()(zt,(U={},(0,L.Z)(U,"".concat(zt,"-active"),rr),(0,L.Z)(U,"".concat(zt,"-selected"),Pn),(0,L.Z)(U,"".concat(zt,"-disabled"),en),U),ne),onClick:zn,onKeyDown:Mn,onFocus:bn}),nt,i.createElement(Ga,{props:(0,W.Z)((0,W.Z)({},T),{},{isSelected:Pn}),icon:mn}));return Qt&&(Nn=Qt(Nn,T,{selected:Pn})),Nn});function ol(T,B){var U=T.eventKey,ie=_(),ne=Ce(U);return i.useEffect(function(){if(ie)return ie.registerPath(U,ne),function(){ie.unregisterPath(U,ne)}},[ne]),ie?null:i.createElement(al,(0,O.Z)({},T,{ref:B}))}var pi=i.forwardRef(ol),Tl=["className","children"],Tu=function(B,U){var ie=B.className,ne=B.children,de=(0,I.Z)(B,Tl),Se=i.useContext(Wa),De=Se.prefixCls,$e=Se.mode,nt=Se.rtl;return i.createElement("ul",(0,O.Z)({className:a()(De,nt&&"".concat(De,"-rtl"),"".concat(De,"-sub"),"".concat(De,"-").concat($e==="inline"?"inline":"vertical"),ie),role:"menu"},de,{"data-menu-list":!0,ref:U}),ne)},eu=i.forwardRef(Tu);eu.displayName="SubMenuList";var il=eu,Ou=e(45659);function Cu(T,B){return(0,Ou.Z)(T).map(function(U,ie){if(i.isValidElement(U)){var ne,de,Se=U.key,De=(ne=(de=U.props)===null||de===void 0?void 0:de.eventKey)!==null&&ne!==void 0?ne:Se,$e=De==null;$e&&(De="tmp_key-".concat([].concat((0,Ke.Z)(B),[ie]).join("-")));var nt={key:De,eventKey:De};return i.cloneElement(U,nt)}return U})}var Xn={adjustX:1,adjustY:1},tu={topLeft:{points:["bl","tl"],overflow:Xn},topRight:{points:["br","tr"],overflow:Xn},bottomLeft:{points:["tl","bl"],overflow:Xn},bottomRight:{points:["tr","br"],overflow:Xn},leftTop:{points:["tr","tl"],overflow:Xn},leftBottom:{points:["br","bl"],overflow:Xn},rightTop:{points:["tl","tr"],overflow:Xn},rightBottom:{points:["bl","br"],overflow:Xn}},nu={topLeft:{points:["bl","tl"],overflow:Xn},topRight:{points:["br","tr"],overflow:Xn},bottomLeft:{points:["tl","bl"],overflow:Xn},bottomRight:{points:["tr","br"],overflow:Xn},rightTop:{points:["tr","tl"],overflow:Xn},rightBottom:{points:["br","bl"],overflow:Xn},leftTop:{points:["tl","tr"],overflow:Xn},leftBottom:{points:["bl","br"],overflow:Xn}},Ol=null;function ul(T,B,U){if(B)return B;if(U)return U[T]||U.other}var _i={horizontal:"bottomLeft",vertical:"rightTop","vertical-left":"rightTop","vertical-right":"leftTop"};function Hl(T){var B=T.prefixCls,U=T.visible,ie=T.children,ne=T.popup,de=T.popupStyle,Se=T.popupClassName,De=T.popupOffset,$e=T.disabled,nt=T.mode,yt=T.onVisibleChange,rt=i.useContext(Wa),mt=rt.getPopupContainer,vt=rt.rtl,Et=rt.subMenuOpenDelay,Ot=rt.subMenuCloseDelay,Ct=rt.builtinPlacements,_t=rt.triggerSubMenuAction,Mt=rt.forceSubMenuRender,It=rt.rootClassName,ht=rt.motion,Dt=rt.defaultMotions,At=i.useState(!1),Rt=(0,V.Z)(At,2),Lt=Rt[0],Ht=Rt[1],Bt=vt?(0,W.Z)((0,W.Z)({},nu),Ct):(0,W.Z)((0,W.Z)({},tu),Ct),Qt=_i[nt],zt=ul(nt,ht,Dt),Xt=i.useRef(zt);nt!=="inline"&&(Xt.current=zt);var nn=(0,W.Z)((0,W.Z)({},Xt.current),{},{leavedClassName:"".concat(B,"-hidden"),removeOnLeave:!1,motionAppear:!0}),en=i.useRef();return i.useEffect(function(){return en.current=(0,pe.Z)(function(){Ht(U)}),function(){pe.Z.cancel(en.current)}},[U]),i.createElement(Bo,{prefixCls:B,popupClassName:a()("".concat(B,"-popup"),(0,L.Z)({},"".concat(B,"-rtl"),vt),Se,It),stretch:nt==="horizontal"?"minWidth":null,getPopupContainer:mt,builtinPlacements:Bt,popupPlacement:Qt,popupVisible:Lt,popup:ne,popupStyle:de,popupAlign:De&&{offset:De},action:$e?[]:[_t],mouseEnterDelay:Et,mouseLeaveDelay:Ot,onPopupVisibleChange:yt,forceRender:Mt,popupMotion:nn,fresh:!0},ie)}function Cl(T){var B=T.id,U=T.open,ie=T.keyPath,ne=T.children,de="inline",Se=i.useContext(Wa),De=Se.prefixCls,$e=Se.forceSubMenuRender,nt=Se.motion,yt=Se.defaultMotions,rt=Se.mode,mt=i.useRef(!1);mt.current=rt===de;var vt=i.useState(!mt.current),Et=(0,V.Z)(vt,2),Ot=Et[0],Ct=Et[1],_t=mt.current?U:!1;i.useEffect(function(){mt.current&&Ct(!1)},[rt]);var Mt=(0,W.Z)({},ul(de,nt,yt));ie.length>1&&(Mt.motionAppear=!1);var It=Mt.onVisibleChanged;return Mt.onVisibleChanged=function(ht){return!mt.current&&!ht&&Ct(!0),It==null?void 0:It(ht)},Ot?null:i.createElement($o,{mode:de,locked:!mt.current},i.createElement(Y.ZP,(0,O.Z)({visible:_t},Mt,{forceRender:$e,removeOnLeave:!1,leavedClassName:"".concat(De,"-hidden")}),function(ht){var Dt=ht.className,At=ht.style;return i.createElement(il,{id:B,className:Dt,style:At},ne)}))}var Al=["style","className","title","eventKey","warnKey","disabled","internalPopupClose","children","itemIcon","expandIcon","popupClassName","popupOffset","popupStyle","onClick","onMouseEnter","onMouseLeave","onTitleClick","onTitleMouseEnter","onTitleMouseLeave"],yr=["active"],Aa=function(B){var U,ie=B.style,ne=B.className,de=B.title,Se=B.eventKey,De=B.warnKey,$e=B.disabled,nt=B.internalPopupClose,yt=B.children,rt=B.itemIcon,mt=B.expandIcon,vt=B.popupClassName,Et=B.popupOffset,Ot=B.popupStyle,Ct=B.onClick,_t=B.onMouseEnter,Mt=B.onMouseLeave,It=B.onTitleClick,ht=B.onTitleMouseEnter,Dt=B.onTitleMouseLeave,At=(0,I.Z)(B,Al),Rt=tl(Se),Lt=i.useContext(Wa),Ht=Lt.prefixCls,Bt=Lt.mode,Qt=Lt.openKeys,zt=Lt.disabled,Xt=Lt.overflowDisabled,nn=Lt.activeKey,en=Lt.selectedKeys,cn=Lt.itemIcon,gn=Lt.expandIcon,hn=Lt.onItemClick,mn=Lt.onOpenChange,wn=Lt.onActive,rr=i.useContext(lt),sn=rr._internalRenderSubMenuItem,Pn=i.useContext(Qe),jn=Pn.isSubPathKey,zn=Ce(),Mn="".concat(Ht,"-submenu"),bn=zt||$e,tn=i.useRef(),Nn=i.useRef(),or=rt!=null?rt:cn,Yn=mt!=null?mt:gn,Jn=Qt.includes(Se),Er=!Xt&&Jn,ir=jn(en,Se),Vr=ta(Se,bn,ht,Dt),vn=Vr.active,Qn=(0,I.Z)(Vr,yr),hr=i.useState(!1),$n=(0,V.Z)(hr,2),Yr=$n[0],Lr=$n[1],Ra=function(ur){bn||Lr(ur)},cr=function(ur){Ra(!0),_t==null||_t({key:Se,domEvent:ur})},Qr=function(ur){Ra(!1),Mt==null||Mt({key:Se,domEvent:ur})},fa=i.useMemo(function(){return vn||(Bt!=="inline"?Yr||jn([nn],Se):!1)},[Bt,vn,nn,Yr,Se,jn]),fr=ga(zn.length),Hr=function(ur){bn||(It==null||It({key:Se,domEvent:ur}),Bt==="inline"&&mn(Se,!Jn))},ya=Ji(function(kn){Ct==null||Ct(ma(kn)),hn(kn)}),Dn=function(ur){Bt!=="inline"&&mn(Se,ur)},qn=function(){wn(Se)},Or=Rt&&"".concat(Rt,"-popup"),Ea=i.createElement("div",(0,O.Z)({role:"menuitem",style:fr,className:"".concat(Mn,"-title"),tabIndex:bn?null:-1,ref:tn,title:typeof de=="string"?de:null,"data-menu-id":Xt&&Rt?null:Rt,"aria-expanded":Er,"aria-haspopup":!0,"aria-controls":Or,"aria-disabled":bn,onClick:Hr,onFocus:qn},Qn),de,i.createElement(Ga,{icon:Bt!=="horizontal"?Yn:void 0,props:(0,W.Z)((0,W.Z)({},B),{},{isOpen:Er,isSubMenu:!0})},i.createElement("i",{className:"".concat(Mn,"-arrow")}))),gr=i.useRef(Bt);if(Bt!=="inline"&&zn.length>1?gr.current="vertical":gr.current=Bt,!Xt){var La=gr.current;Ea=i.createElement(Hl,{mode:La,prefixCls:Mn,visible:!nt&&Er&&Bt!=="inline",popupClassName:vt,popupOffset:Et,popupStyle:Ot,popup:i.createElement($o,{mode:La==="horizontal"?"vertical":La},i.createElement(il,{id:Or,ref:Nn},yt)),disabled:bn,onVisibleChange:Dn},Ea)}var Cr=i.createElement(fi.Item,(0,O.Z)({role:"none"},At,{component:"li",style:ie,className:a()(Mn,"".concat(Mn,"-").concat(Bt),ne,(U={},(0,L.Z)(U,"".concat(Mn,"-open"),Er),(0,L.Z)(U,"".concat(Mn,"-active"),fa),(0,L.Z)(U,"".concat(Mn,"-selected"),ir),(0,L.Z)(U,"".concat(Mn,"-disabled"),bn),U)),onMouseEnter:cr,onMouseLeave:Qr}),Ea,!Xt&&i.createElement(Cl,{id:Or,open:Er,keyPath:zn},yt));return sn&&(Cr=sn(Cr,B,{selected:ir,active:fa,open:Er,disabled:bn})),i.createElement($o,{onItemClick:ya,mode:Bt==="horizontal"?"vertical":Bt,itemIcon:or,expandIcon:Yn},Cr)};function Ka(T){var B=T.eventKey,U=T.children,ie=Ce(B),ne=Cu(U,ie),de=_();i.useEffect(function(){if(de)return de.registerPath(B,ie),function(){de.unregisterPath(B,ie)}},[ie]);var Se;return de?Se=ne:Se=i.createElement(Aa,T,ne),i.createElement(se.Provider,{value:ie},Se)}var vo=["className","title","eventKey","children"],is=["children"],Zl=function(B){var U=B.className,ie=B.title,ne=B.eventKey,de=B.children,Se=(0,I.Z)(B,vo),De=i.useContext(Wa),$e=De.prefixCls,nt="".concat($e,"-item-group");return i.createElement("li",(0,O.Z)({role:"presentation"},Se,{onClick:function(rt){return rt.stopPropagation()},className:a()(nt,U)}),i.createElement("div",{role:"presentation",className:"".concat(nt,"-title"),title:typeof ie=="string"?ie:void 0},ie),i.createElement("ul",{role:"group",className:"".concat(nt,"-list")},de))};function Au(T){var B=T.children,U=(0,I.Z)(T,is),ie=Ce(U.eventKey),ne=Cu(B,ie),de=_();return de?ne:i.createElement(Zl,(0,_r.Z)(U,["warnKey"]),ne)}function ll(T){var B=T.className,U=T.style,ie=i.useContext(Wa),ne=ie.prefixCls,de=_();return de?null:i.createElement("li",{role:"separator",className:a()("".concat(ne,"-item-divider"),B),style:U})}var Pu=["label","children","key","type"];function Pl(T){return(T||[]).map(function(B,U){if(B&&(0,G.Z)(B)==="object"){var ie=B,ne=ie.label,de=ie.children,Se=ie.key,De=ie.type,$e=(0,I.Z)(ie,Pu),nt=Se!=null?Se:"tmp-".concat(U);return de||De==="group"?De==="group"?i.createElement(Au,(0,O.Z)({key:nt},$e,{title:ne}),Pl(de)):i.createElement(Ka,(0,O.Z)({key:nt},$e,{title:ne}),Pl(de)):De==="divider"?i.createElement(ll,(0,O.Z)({key:nt},$e)):i.createElement(pi,(0,O.Z)({key:nt},$e),ne)}return null}).filter(function(B){return B})}function Rs(T,B,U){var ie=T;return B&&(ie=Pl(B)),Cu(ie,U)}var Ls=["prefixCls","rootClassName","style","className","tabIndex","items","children","direction","id","mode","inlineCollapsed","disabled","disabledOverflow","subMenuOpenDelay","subMenuCloseDelay","forceSubMenuRender","defaultOpenKeys","openKeys","activeKey","defaultActiveFirst","selectable","multiple","defaultSelectedKeys","selectedKeys","onSelect","onDeselect","inlineIndent","motion","defaultMotions","triggerSubMenuAction","builtinPlacements","itemIcon","expandIcon","overflowedIndicator","overflowedIndicatorPopupClassName","getPopupContainer","onClick","onOpenChange","onKeyDown","openAnimation","openTransitionName","_internalRenderMenuItem","_internalRenderSubMenuItem"],ru=[],Ml=i.forwardRef(function(T,B){var U,ie,ne=T,de=ne.prefixCls,Se=de===void 0?"rc-menu":de,De=ne.rootClassName,$e=ne.style,nt=ne.className,yt=ne.tabIndex,rt=yt===void 0?0:yt,mt=ne.items,vt=ne.children,Et=ne.direction,Ot=ne.id,Ct=ne.mode,_t=Ct===void 0?"vertical":Ct,Mt=ne.inlineCollapsed,It=ne.disabled,ht=ne.disabledOverflow,Dt=ne.subMenuOpenDelay,At=Dt===void 0?.1:Dt,Rt=ne.subMenuCloseDelay,Lt=Rt===void 0?.1:Rt,Ht=ne.forceSubMenuRender,Bt=ne.defaultOpenKeys,Qt=ne.openKeys,zt=ne.activeKey,Xt=ne.defaultActiveFirst,nn=ne.selectable,en=nn===void 0?!0:nn,cn=ne.multiple,gn=cn===void 0?!1:cn,hn=ne.defaultSelectedKeys,mn=ne.selectedKeys,wn=ne.onSelect,rr=ne.onDeselect,sn=ne.inlineIndent,Pn=sn===void 0?24:sn,jn=ne.motion,zn=ne.defaultMotions,Mn=ne.triggerSubMenuAction,bn=Mn===void 0?"hover":Mn,tn=ne.builtinPlacements,Nn=ne.itemIcon,or=ne.expandIcon,Yn=ne.overflowedIndicator,Jn=Yn===void 0?"...":Yn,Er=ne.overflowedIndicatorPopupClassName,ir=ne.getPopupContainer,Vr=ne.onClick,vn=ne.onOpenChange,Qn=ne.onKeyDown,hr=ne.openAnimation,$n=ne.openTransitionName,Yr=ne._internalRenderMenuItem,Lr=ne._internalRenderSubMenuItem,Ra=(0,I.Z)(ne,Ls),cr=i.useMemo(function(){return Rs(vt,mt,ru)},[vt,mt]),Qr=i.useState(!1),fa=(0,V.Z)(Qr,2),fr=fa[0],Hr=fa[1],ya=i.useRef(),Dn=Yt(Ot),qn=Et==="rtl",Or=(0,$.Z)(Bt,{value:Qt,postState:function(tr){return tr||ru}}),Ea=(0,V.Z)(Or,2),gr=Ea[0],La=Ea[1],Cr=function(tr){var mr=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;function ua(){La(tr),vn==null||vn(tr)}mr?(0,Ve.flushSync)(ua):ua()},kn=i.useState(gr),ur=(0,V.Z)(kn,2),Sa=ur[0],Zr=ur[1],Nr=i.useRef(!1),oa=i.useMemo(function(){return(_t==="inline"||_t==="vertical")&&Mt?["vertical",Mt]:[_t,!1]},[_t,Mt]),oo=(0,V.Z)(oa,2),Wr=oo[0],fn=oo[1],An=Wr==="inline",Xr=i.useState(Wr),an=(0,V.Z)(Xr,2),yn=an[0],dr=an[1],xr=i.useState(fn),Rn=(0,V.Z)(xr,2),Hn=Rn[0],jr=Rn[1];i.useEffect(function(){dr(Wr),jr(fn),Nr.current&&(An?La(Sa):Cr(ru))},[Wr,fn]);var po=i.useState(0),ia=(0,V.Z)(po,2),da=ia[0],Vo=ia[1],vr=da>=cr.length-1||yn!=="horizontal"||ht;i.useEffect(function(){An&&Zr(gr)},[gr]),i.useEffect(function(){return Nr.current=!0,function(){Nr.current=!1}},[]);var Jr=zl(),Zn=Jr.registerPath,Tn=Jr.unregisterPath,Wn=Jr.refreshOverflowKeys,er=Jr.isSubPathKey,qr=Jr.getKeyPath,na=Jr.getKeys,ho=Jr.getSubPathKeys,Ur=i.useMemo(function(){return{registerPath:Zn,unregisterPath:Tn}},[Zn,Tn]),mi=i.useMemo(function(){return{isSubPathKey:er}},[er]);i.useEffect(function(){Wn(vr?ru:cr.slice(da+1).map(function(wr){return wr.key}))},[da,vr]);var Lo=(0,$.Z)(zt||Xt&&((U=cr[0])===null||U===void 0?void 0:U.key),{value:zt}),Yo=(0,V.Z)(Lo,2),io=Yo[0],Ya=Yo[1],yi=Ji(function(wr){Ya(wr)}),ju=Ji(function(){Ya(void 0)});(0,i.useImperativeHandle)(B,function(){return{list:ya.current,focus:function(tr){var mr,ua=io!=null?io:(mr=cr.find(function(Bu){return!Bu.props.disabled}))===null||mr===void 0?void 0:mr.key;if(ua){var ba,No,Do;(ba=ya.current)===null||ba===void 0||(No=ba.querySelector("li[data-menu-id='".concat(bu(Dn,ua),"']")))===null||No===void 0||(Do=No.focus)===null||Do===void 0||Do.call(No,tr)}}}});var uo=(0,$.Z)(hn||[],{value:mn,postState:function(tr){return Array.isArray(tr)?tr:tr==null?ru:[tr]}}),Ui=(0,V.Z)(uo,2),Qa=Ui[0],Xa=Ui[1],Qo=function(tr){if(en){var mr=tr.key,ua=Qa.includes(mr),ba;gn?ua?ba=Qa.filter(function(Do){return Do!==mr}):ba=[].concat((0,Ke.Z)(Qa),[mr]):ba=[mr],Xa(ba);var No=(0,W.Z)((0,W.Z)({},tr),{},{selectedKeys:ba});ua?rr==null||rr(No):wn==null||wn(No)}!gn&&gr.length&&yn!=="inline"&&Cr(ru)},Xo=Ji(function(wr){Vr==null||Vr(ma(wr)),Qo(wr)}),Jo=Ji(function(wr,tr){var mr=gr.filter(function(ba){return ba!==wr});if(tr)mr.push(wr);else if(yn!=="inline"){var ua=ho(wr);mr=mr.filter(function(ba){return!ua.has(ba)})}Su(gr,mr,!0)||Cr(mr,!0)}),go=function(tr,mr){var ua=mr!=null?mr:!gr.includes(tr);Jo(tr,ua)},uu=vi(yn,io,qn,Dn,ya,na,qr,Ya,go,Qn);i.useEffect(function(){Hr(!0)},[]);var qo=i.useMemo(function(){return{_internalRenderMenuItem:Yr,_internalRenderSubMenuItem:Lr}},[Yr,Lr]),mo=yn!=="horizontal"||ht?cr:cr.map(function(wr,tr){return i.createElement($o,{key:wr.key,overflowDisabled:tr>da},wr)}),lu=i.createElement(fi,(0,O.Z)({id:Ot,ref:ya,prefixCls:"".concat(Se,"-overflow"),component:"ul",itemComponent:pi,className:a()(Se,"".concat(Se,"-root"),"".concat(Se,"-").concat(yn),nt,(ie={},(0,L.Z)(ie,"".concat(Se,"-inline-collapsed"),Hn),(0,L.Z)(ie,"".concat(Se,"-rtl"),qn),ie),De),dir:Et,style:$e,role:"menu",tabIndex:rt,data:mo,renderRawItem:function(tr){return tr},renderRawRest:function(tr){var mr=tr.length,ua=mr?cr.slice(-mr):null;return i.createElement(Ka,{eventKey:Di,title:Jn,disabled:vr,internalPopupClose:mr===0,popupClassName:Er},ua)},maxCount:yn!=="horizontal"||ht?fi.INVALIDATE:fi.RESPONSIVE,ssr:"full","data-menu-list":!0,onVisibleChange:function(tr){Vo(tr)},onKeyDown:uu},Ra));return i.createElement(lt.Provider,{value:qo},i.createElement(Ni.Provider,{value:Dn},i.createElement($o,{prefixCls:Se,rootClassName:De,mode:yn,openKeys:gr,rtl:qn,disabled:It,motion:fr?jn:null,defaultMotions:fr?zn:null,activeKey:io,onActive:yi,onInactive:ju,selectedKeys:Qa,inlineIndent:Pn,subMenuOpenDelay:At,subMenuCloseDelay:Lt,forceSubMenuRender:Ht,builtinPlacements:tn,triggerSubMenuAction:bn,getPopupContainer:ir,itemIcon:Nn,expandIcon:or,onItemClick:Xo,onOpenChange:Jo},i.createElement(Qe.Provider,{value:mi},lu),i.createElement("div",{style:{display:"none"},"aria-hidden":!0},i.createElement(D.Provider,{value:Ur},cr)))))}),Rl=Ml,au=Rl;au.Item=pi,au.SubMenu=Ka,au.ItemGroup=Au,au.Divider=ll;var Wl=au;function Gl(T,B){var U=T.prefixCls,ie=T.id,ne=T.tabs,de=T.locale,Se=T.mobile,De=T.moreIcon,$e=De===void 0?"More":De,nt=T.moreTransitionName,yt=T.style,rt=T.className,mt=T.editable,vt=T.tabBarGutter,Et=T.rtl,Ot=T.removeAriaLabel,Ct=T.onTabClick,_t=T.getPopupContainer,Mt=T.popupClassName,It=(0,i.useState)(!1),ht=(0,V.Z)(It,2),Dt=ht[0],At=ht[1],Rt=(0,i.useState)(null),Lt=(0,V.Z)(Rt,2),Ht=Lt[0],Bt=Lt[1],Qt="".concat(ie,"-more-popup"),zt="".concat(U,"-dropdown"),Xt=Ht!==null?"".concat(Qt,"-").concat(Ht):null,nn=de==null?void 0:de.dropdownAriaLabel;function en(sn,Pn){sn.preventDefault(),sn.stopPropagation(),mt.onEdit("remove",{key:Pn,event:sn})}var cn=i.createElement(Wl,{onClick:function(Pn){var jn=Pn.key,zn=Pn.domEvent;Ct(jn,zn),At(!1)},prefixCls:"".concat(zt,"-menu"),id:Qt,tabIndex:-1,role:"listbox","aria-activedescendant":Xt,selectedKeys:[Ht],"aria-label":nn!==void 0?nn:"expanded dropdown"},ne.map(function(sn){var Pn=sn.closable,jn=sn.disabled,zn=sn.closeIcon,Mn=sn.key,bn=sn.label,tn=ze(Pn,zn,mt,jn);return i.createElement(pi,{key:Mn,id:"".concat(Qt,"-").concat(Mn),role:"option","aria-controls":ie&&"".concat(ie,"-panel-").concat(Mn),disabled:jn},i.createElement("span",null,bn),tn&&i.createElement("button",{type:"button","aria-label":Ot||"remove",tabIndex:0,className:"".concat(zt,"-menu-item-remove"),onClick:function(or){or.stopPropagation(),en(or,Mn)}},zn||mt.removeIcon||"\xD7"))}));function gn(sn){for(var Pn=ne.filter(function(tn){return!tn.disabled}),jn=Pn.findIndex(function(tn){return tn.key===Ht})||0,zn=Pn.length,Mn=0;Mn<zn;Mn+=1){jn=(jn+sn+zn)%zn;var bn=Pn[jn];if(!bn.disabled){Bt(bn.key);return}}}function hn(sn){var Pn=sn.which;if(!Dt){[Mr.Z.DOWN,Mr.Z.SPACE,Mr.Z.ENTER].includes(Pn)&&(At(!0),sn.preventDefault());return}switch(Pn){case Mr.Z.UP:gn(-1),sn.preventDefault();break;case Mr.Z.DOWN:gn(1),sn.preventDefault();break;case Mr.Z.ESC:At(!1);break;case Mr.Z.SPACE:case Mr.Z.ENTER:Ht!==null&&Ct(Ht,sn);break}}(0,i.useEffect)(function(){var sn=document.getElementById(Xt);sn&&sn.scrollIntoView&&sn.scrollIntoView(!1)},[Ht]),(0,i.useEffect)(function(){Dt||Bt(null)},[Dt]);var mn=(0,L.Z)({},Et?"marginRight":"marginLeft",vt);ne.length||(mn.visibility="hidden",mn.order=1);var wn=a()((0,L.Z)({},"".concat(zt,"-rtl"),Et)),rr=Se?null:i.createElement(Vi,{prefixCls:zt,overlay:cn,trigger:["hover"],visible:ne.length?Dt:!1,transitionName:nt,onVisibleChange:At,overlayClassName:a()(wn,Mt),mouseEnterDelay:.1,mouseLeaveDelay:.1,getPopupContainer:_t},i.createElement("button",{type:"button",className:"".concat(U,"-nav-more"),style:mn,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":Qt,id:"".concat(ie,"-more"),"aria-expanded":Dt,onKeyDown:hn},$e));return i.createElement("div",{className:a()("".concat(U,"-nav-operations"),rt),style:yt,ref:B},rr,i.createElement(Pe,{prefixCls:U,locale:de,editable:mt}))}var Kl=i.memo(i.forwardRef(Gl),function(T,B){return B.tabMoving});function Ns(T){var B,U=T.prefixCls,ie=T.id,ne=T.active,de=T.tab,Se=de.key,De=de.label,$e=de.disabled,nt=de.closeIcon,yt=T.closable,rt=T.renderWrapper,mt=T.removeAriaLabel,vt=T.editable,Et=T.onClick,Ot=T.onFocus,Ct=T.style,_t="".concat(U,"-tab"),Mt=ze(yt,nt,vt,$e);function It(At){$e||Et(At)}function ht(At){At.preventDefault(),At.stopPropagation(),vt.onEdit("remove",{key:Se,event:At})}var Dt=i.createElement("div",{key:Se,"data-node-key":we(Se),className:a()(_t,(B={},(0,L.Z)(B,"".concat(_t,"-with-remove"),Mt),(0,L.Z)(B,"".concat(_t,"-active"),ne),(0,L.Z)(B,"".concat(_t,"-disabled"),$e),B)),style:Ct,onClick:It},i.createElement("div",{role:"tab","aria-selected":ne,id:ie&&"".concat(ie,"-tab-").concat(Se),className:"".concat(_t,"-btn"),"aria-controls":ie&&"".concat(ie,"-panel-").concat(Se),"aria-disabled":$e,tabIndex:$e?null:0,onClick:function(Rt){Rt.stopPropagation(),It(Rt)},onKeyDown:function(Rt){[Mr.Z.SPACE,Mr.Z.ENTER].includes(Rt.which)&&(Rt.preventDefault(),It(Rt))},onFocus:Ot},De),Mt&&i.createElement("button",{type:"button","aria-label":mt||"remove",tabIndex:0,className:"".concat(_t,"-remove"),onClick:function(Rt){Rt.stopPropagation(),ht(Rt)}},nt||vt.removeIcon||"\xD7"));return rt?rt(Dt):Dt}var us=Ns,Ds=function(B,U){var ie=B.offsetWidth,ne=B.offsetHeight,de=B.offsetTop,Se=B.offsetLeft,De=B.getBoundingClientRect(),$e=De.width,nt=De.height,yt=De.x,rt=De.y;return Math.abs($e-ie)<1?[$e,nt,yt-U.x,rt-U.y]:[ie,ne,Se,de]},Mu=function(B){var U=B.current||{},ie=U.offsetWidth,ne=ie===void 0?0:ie,de=U.offsetHeight,Se=de===void 0?0:de;if(B.current){var De=B.current.getBoundingClientRect(),$e=De.width,nt=De.height;if(Math.abs($e-ne)<1)return[$e,nt]}return[ne,Se]},Ru=function(B,U){return B[U?0:1]};function ji(T,B){var U,ie=i.useContext(X),ne=ie.prefixCls,de=ie.tabs,Se=T.className,De=T.style,$e=T.id,nt=T.animated,yt=T.activeKey,rt=T.rtl,mt=T.extra,vt=T.editable,Et=T.locale,Ot=T.tabPosition,Ct=T.tabBarGutter,_t=T.children,Mt=T.onTabClick,It=T.onTabScroll,ht=T.indicatorSize,Dt=(0,i.useRef)(),At=(0,i.useRef)(),Rt=(0,i.useRef)(),Lt=(0,i.useRef)(),Ht=(0,i.useRef)(),Bt=(0,i.useRef)(),Qt=(0,i.useRef)(),zt=Ot==="top"||Ot==="bottom",Xt=Ee(0,function(Zn,Tn){zt&&It&&It({direction:Zn>Tn?"left":"right"})}),nn=(0,V.Z)(Xt,2),en=nn[0],cn=nn[1],gn=Ee(0,function(Zn,Tn){!zt&&It&&It({direction:Zn>Tn?"top":"bottom"})}),hn=(0,V.Z)(gn,2),mn=hn[0],wn=hn[1],rr=(0,i.useState)([0,0]),sn=(0,V.Z)(rr,2),Pn=sn[0],jn=sn[1],zn=(0,i.useState)([0,0]),Mn=(0,V.Z)(zn,2),bn=Mn[0],tn=Mn[1],Nn=(0,i.useState)([0,0]),or=(0,V.Z)(Nn,2),Yn=or[0],Jn=or[1],Er=(0,i.useState)([0,0]),ir=(0,V.Z)(Er,2),Vr=ir[0],vn=ir[1],Qn=He(new Map),hr=(0,V.Z)(Qn,2),$n=hr[0],Yr=hr[1],Lr=ve(de,$n,bn[0]),Ra=Ru(Pn,zt),cr=Ru(bn,zt),Qr=Ru(Yn,zt),fa=Ru(Vr,zt),fr=Ra<cr+Qr,Hr=fr?Ra-fa:Ra-Qr,ya="".concat(ne,"-nav-operations-hidden"),Dn=0,qn=0;zt&&rt?(Dn=0,qn=Math.max(0,cr-Hr)):(Dn=Math.min(0,Hr-cr),qn=0);function Or(Zn){return Zn<Dn?Dn:Zn>qn?qn:Zn}var Ea=(0,i.useRef)(),gr=(0,i.useState)(),La=(0,V.Z)(gr,2),Cr=La[0],kn=La[1];function ur(){kn(Date.now())}function Sa(){window.clearTimeout(Ea.current)}he(Lt,function(Zn,Tn){function Wn(er,qr){er(function(na){var ho=Or(na+qr);return ho})}return fr?(zt?Wn(cn,Zn):Wn(wn,Tn),Sa(),ur(),!0):!1}),(0,i.useEffect)(function(){return Sa(),Cr&&(Ea.current=window.setTimeout(function(){kn(0)},100)),Sa},[Cr]);var Zr=y(Lr,Hr,zt?en:mn,cr,Qr,fa,(0,W.Z)((0,W.Z)({},T),{},{tabs:de})),Nr=(0,V.Z)(Zr,2),oa=Nr[0],oo=Nr[1],Wr=(0,te.Z)(function(){var Zn=arguments.length>0&&arguments[0]!==void 0?arguments[0]:yt,Tn=Lr.get(Zn)||{width:0,height:0,left:0,right:0,top:0};if(zt){var Wn=en;rt?Tn.right<en?Wn=Tn.right:Tn.right+Tn.width>en+Hr&&(Wn=Tn.right+Tn.width-Hr):Tn.left<-en?Wn=-Tn.left:Tn.left+Tn.width>-en+Hr&&(Wn=-(Tn.left+Tn.width-Hr)),wn(0),cn(Or(Wn))}else{var er=mn;Tn.top<-mn?er=-Tn.top:Tn.top+Tn.height>-mn+Hr&&(er=-(Tn.top+Tn.height-Hr)),cn(0),wn(Or(er))}}),fn={};Ot==="top"||Ot==="bottom"?fn[rt?"marginRight":"marginLeft"]=Ct:fn.marginTop=Ct;var An=de.map(function(Zn,Tn){var Wn=Zn.key;return i.createElement(us,{id:$e,prefixCls:ne,key:Wn,tab:Zn,style:Tn===0?void 0:fn,closable:Zn.closable,editable:vt,active:Wn===yt,renderWrapper:_t,removeAriaLabel:Et==null?void 0:Et.removeAriaLabel,onClick:function(qr){Mt(Wn,qr)},onFocus:function(){Wr(Wn),ur(),Lt.current&&(rt||(Lt.current.scrollLeft=0),Lt.current.scrollTop=0)}})}),Xr=function(){return Yr(function(){var Tn,Wn=new Map,er=(Tn=Ht.current)===null||Tn===void 0?void 0:Tn.getBoundingClientRect();return de.forEach(function(qr){var na,ho=qr.key,Ur=(na=Ht.current)===null||na===void 0?void 0:na.querySelector('[data-node-key="'.concat(we(ho),'"]'));if(Ur){var mi=Ds(Ur,er),Lo=(0,V.Z)(mi,4),Yo=Lo[0],io=Lo[1],Ya=Lo[2],yi=Lo[3];Wn.set(ho,{width:Yo,height:io,left:Ya,top:yi})}}),Wn})};(0,i.useEffect)(function(){Xr()},[de.map(function(Zn){return Zn.key}).join("_")]);var an=Ue(function(){var Zn=Mu(Dt),Tn=Mu(At),Wn=Mu(Rt);jn([Zn[0]-Tn[0]-Wn[0],Zn[1]-Tn[1]-Wn[1]]);var er=Mu(Qt);Jn(er);var qr=Mu(Bt);vn(qr);var na=Mu(Ht);tn([na[0]-er[0],na[1]-er[1]]),Xr()}),yn=de.slice(0,oa),dr=de.slice(oo+1),xr=[].concat((0,Ke.Z)(yn),(0,Ke.Z)(dr)),Rn=Lr.get(yt),Hn=Ie({activeTabOffset:Rn,horizontal:zt,rtl:rt,indicatorSize:ht}),jr=Hn.style;(0,i.useEffect)(function(){Wr()},[yt,Dn,qn,Q(Rn),Q(Lr),zt]),(0,i.useEffect)(function(){an()},[rt]);var po=!!xr.length,ia="".concat(ne,"-nav-wrap"),da,Vo,vr,Jr;return zt?rt?(Vo=en>0,da=en!==qn):(da=en<0,Vo=en!==Dn):(vr=mn<0,Jr=mn!==Dn),i.createElement(ot.Z,{onResize:an},i.createElement("div",{ref:(0,fe.x1)(B,Dt),role:"tablist",className:a()("".concat(ne,"-nav"),Se),style:De,onKeyDown:function(){ur()}},i.createElement(ct,{ref:At,position:"left",extra:mt,prefixCls:ne}),i.createElement(ot.Z,{onResize:an},i.createElement("div",{className:a()(ia,(U={},(0,L.Z)(U,"".concat(ia,"-ping-left"),da),(0,L.Z)(U,"".concat(ia,"-ping-right"),Vo),(0,L.Z)(U,"".concat(ia,"-ping-top"),vr),(0,L.Z)(U,"".concat(ia,"-ping-bottom"),Jr),U)),ref:Lt},i.createElement(ot.Z,{onResize:an},i.createElement("div",{ref:Ht,className:"".concat(ne,"-nav-list"),style:{transform:"translate(".concat(en,"px, ").concat(mn,"px)"),transition:Cr?"none":void 0}},An,i.createElement(Pe,{ref:Qt,prefixCls:ne,locale:Et,editable:vt,style:(0,W.Z)((0,W.Z)({},An.length===0?void 0:fn),{},{visibility:po?"hidden":null})}),i.createElement("div",{className:a()("".concat(ne,"-ink-bar"),(0,L.Z)({},"".concat(ne,"-ink-bar-animated"),nt.inkBar)),style:jr}))))),i.createElement(Kl,(0,O.Z)({},T,{removeAriaLabel:Et==null?void 0:Et.removeAriaLabel,ref:Bt,prefixCls:ne,tabs:xr,className:!po&&ya,tabMoving:!!Cr})),i.createElement(ct,{ref:Rt,position:"right",extra:mt,prefixCls:ne})))}var Vl=i.forwardRef(ji),Lu=["renderTabBar"],Ko=["label","key"];function sl(T){var B=T.renderTabBar,U=(0,I.Z)(T,Lu),ie=i.useContext(X),ne=ie.tabs;if(B){var de=(0,W.Z)((0,W.Z)({},U),{},{panes:ne.map(function(Se){var De=Se.label,$e=Se.key,nt=(0,I.Z)(Se,Ko);return i.createElement(Fe,(0,O.Z)({tab:De,key:$e,tabKey:$e},nt))})});return B(de,Vl)}return i.createElement(Vl,U)}function hi(){var T=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{inkBar:!0,tabPane:!1},B;return T===!1?B={inkBar:!1,tabPane:!1}:T===!0?B={inkBar:!0,tabPane:!1}:B=(0,W.Z)({inkBar:!0},(0,G.Z)(T)==="object"?T:{}),B.tabPaneMotion&&B.tabPane===void 0&&(B.tabPane=!0),!B.tabPaneMotion&&B.tabPane&&(B.tabPane=!1),B}var Yl=["id","prefixCls","className","items","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll","getPopupContainer","popupClassName","indicatorSize"],ls=0;function ks(T,B){var U,ie=T.id,ne=T.prefixCls,de=ne===void 0?"rc-tabs":ne,Se=T.className,De=T.items,$e=T.direction,nt=T.activeKey,yt=T.defaultActiveKey,rt=T.editable,mt=T.animated,vt=T.tabPosition,Et=vt===void 0?"top":vt,Ot=T.tabBarGutter,Ct=T.tabBarStyle,_t=T.tabBarExtraContent,Mt=T.locale,It=T.moreIcon,ht=T.moreTransitionName,Dt=T.destroyInactiveTabPane,At=T.renderTabBar,Rt=T.onChange,Lt=T.onTabClick,Ht=T.onTabScroll,Bt=T.getPopupContainer,Qt=T.popupClassName,zt=T.indicatorSize,Xt=(0,I.Z)(T,Yl),nn=i.useMemo(function(){return(De||[]).filter(function(vn){return vn&&(0,G.Z)(vn)==="object"&&"key"in vn})},[De]),en=$e==="rtl",cn=hi(mt),gn=(0,i.useState)(!1),hn=(0,V.Z)(gn,2),mn=hn[0],wn=hn[1];(0,i.useEffect)(function(){wn(H())},[]);var rr=(0,$.Z)(function(){var vn;return(vn=nn[0])===null||vn===void 0?void 0:vn.key},{value:nt,defaultValue:yt}),sn=(0,V.Z)(rr,2),Pn=sn[0],jn=sn[1],zn=(0,i.useState)(function(){return nn.findIndex(function(vn){return vn.key===Pn})}),Mn=(0,V.Z)(zn,2),bn=Mn[0],tn=Mn[1];(0,i.useEffect)(function(){var vn=nn.findIndex(function(hr){return hr.key===Pn});if(vn===-1){var Qn;vn=Math.max(0,Math.min(bn,nn.length-1)),jn((Qn=nn[vn])===null||Qn===void 0?void 0:Qn.key)}tn(vn)},[nn.map(function(vn){return vn.key}).join("_"),Pn,bn]);var Nn=(0,$.Z)(null,{value:ie}),or=(0,V.Z)(Nn,2),Yn=or[0],Jn=or[1];(0,i.useEffect)(function(){ie||(Jn("rc-tabs-".concat(ls)),ls+=1)},[]);function Er(vn,Qn){Lt==null||Lt(vn,Qn);var hr=vn!==Pn;jn(vn),hr&&(Rt==null||Rt(vn))}var ir={id:Yn,activeKey:Pn,animated:cn,tabPosition:Et,rtl:en,mobile:mn},Vr=(0,W.Z)((0,W.Z)({},ir),{},{editable:rt,locale:Mt,moreIcon:It,moreTransitionName:ht,tabBarGutter:Ot,onTabClick:Er,onTabScroll:Ht,extra:_t,style:Ct,panes:null,getPopupContainer:Bt,popupClassName:Qt,indicatorSize:zt});return i.createElement(X.Provider,{value:{tabs:nn,prefixCls:de}},i.createElement("div",(0,O.Z)({ref:B,id:ie,className:a()(de,"".concat(de,"-").concat(Et),(U={},(0,L.Z)(U,"".concat(de,"-mobile"),mn),(0,L.Z)(U,"".concat(de,"-editable"),rt),(0,L.Z)(U,"".concat(de,"-rtl"),en),U),Se)},Xt),i.createElement(sl,(0,O.Z)({},Vr,{renderTabBar:At})),i.createElement(et,(0,O.Z)({destroyInactiveTabPane:Dt},ir,{animated:cn}))))}var ou=i.forwardRef(ks),cl=ou,Nu=cl;function Bi(T,B){return Tr(T)||Rr(T,B)||Du(T,B)||Ql()}function Ql(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Du(T,B){if(T){if(typeof T=="string")return gi(T,B);var U=Object.prototype.toString.call(T).slice(8,-1);if(U==="Object"&&T.constructor&&(U=T.constructor.name),U==="Map"||U==="Set")return Array.from(T);if(U==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(U))return gi(T,B)}}function gi(T,B){(B==null||B>T.length)&&(B=T.length);for(var U=0,ie=new Array(B);U<B;U++)ie[U]=T[U];return ie}function Rr(T,B){var U=T==null?null:typeof Symbol!="undefined"&&T[Symbol.iterator]||T["@@iterator"];if(U!=null){var ie,ne,de,Se,De=[],$e=!0,nt=!1;try{if(de=(U=U.call(T)).next,B===0){if(Object(U)!==U)return;$e=!1}else for(;!($e=(ie=de.call(U)).done)&&(De.push(ie.value),De.length!==B);$e=!0);}catch(yt){nt=!0,ne=yt}finally{try{if(!$e&&U.return!=null&&(Se=U.return(),Object(Se)!==Se))return}finally{if(nt)throw ne}}return De}}function Tr(T){if(Array.isArray(T))return T}var Fi=function(){return i.createElement("svg",{viewBox:"0 0 200 117"},i.createElement("path",{d:"M59.688 2.578c-3.438-3.437-8.438-3.437-11.563 0L3.75 48.516c-5 5.937-5 14.062 0 19.062l44.063 45.938c1.562 1.562 4.062 2.5 5.937 2.5s4.063-.938 5.938-2.5c3.437-3.438 3.437-8.438 0-11.563l-42.5-43.437 42.5-44.063c3.437-3.437 3.437-8.437 0-11.875Zm135.937 45.938L151.25 2.578c-3.438-3.437-8.438-3.437-11.563 0-3.125 3.438-3.437 8.438 0 11.563l42.5 44.375-42.5 44.062c-3.437 3.438-3.437 8.438 0 11.563 1.563 1.562 3.438 2.5 5.938 2.5 2.5 0 4.063-.938 5.938-2.5l44.062-45.938c5.625-5.625 5.625-13.75 0-19.687Zm-75.938-45c-4.062-1.563-9.062.937-10.937 5l-34.063 95c-1.562 4.062.938 9.062 5 10.937.938 0 1.563.938 2.5.938 3.438 0 6.563-2.5 7.5-5.938l35-95.937c1.563-4.063-.937-9.063-5-10Z"}))},Pa=function(){return i.createElement("svg",{viewBox:"0 0 200 117"},i.createElement("path",{d:"M59.688 2.578c-3.438-3.437-8.438-3.437-11.563 0L3.75 48.516c-5 5.937-5 14.062 0 19.062l44.063 45.938c1.562 1.562 4.062 2.5 5.937 2.5s4.063-.938 5.938-2.5c3.437-3.438 3.437-8.438 0-11.563l-42.5-43.437 42.5-44.063c3.437-3.437 3.437-8.437 0-11.875Zm135.937 45.938L151.25 2.578c-3.438-3.437-8.438-3.437-11.563 0-3.125 3.438-3.437 8.438 0 11.563l42.5 44.375-42.5 44.062c-3.437 3.438-3.437 8.438 0 11.563 1.563 1.562 3.438 2.5 5.938 2.5 2.5 0 4.063-.938 5.938-2.5l44.062-45.938c5.625-5.625 5.625-13.75 0-19.687Z"}))},Va=function(){return i.createElement("svg",{viewBox:"0 0 1024 1024"},i.createElement("path",{d:"M853.333 469.333A42.667 42.667 0 0 0 810.667 512v256A42.667 42.667 0 0 1 768 810.667H256A42.667 42.667 0 0 1 213.333 768V256A42.667 42.667 0 0 1 256 213.333h256A42.667 42.667 0 0 0 512 128H256a128 128 0 0 0-128 128v512a128 128 0 0 0 128 128h512a128 128 0 0 0 128-128V512a42.667 42.667 0 0 0-42.667-42.667z"}),i.createElement("path",{d:"M682.667 213.333h67.413L481.707 481.28a42.667 42.667 0 0 0 0 60.587 42.667 42.667 0 0 0 60.586 0L810.667 273.92v67.413A42.667 42.667 0 0 0 853.333 384 42.667 42.667 0 0 0 896 341.333V170.667A42.667 42.667 0 0 0 853.333 128H682.667a42.667 42.667 0 0 0 0 85.333z"}))},iu=function(B){var U,ie,ne,de,Se,De=(0,r.YB)(),$e=Object.entries(B.asset.dependencies).filter(function(Lt){var Ht=Bi(Lt,2),Bt=Ht[1].type;return Bt==="FILE"}),nt=(0,i.useState)(0),yt=Bi(nt,2),rt=yt[0],mt=yt[1],vt=(0,i.useState)(B.forceShowCode||B.defaultShowCode),Et=Bi(vt,2),Ot=Et[0],Ct=Et[1],_t=(0,i.useRef)(),Mt=(0,i.useState)(!1),It=Bi(Mt,2),ht=It[0],Dt=It[1],At=$e.length===1,Rt=((U=$e[rt][0].match(/\.([^.]+)$/))===null||U===void 0?void 0:U[1])||"text";return i.createElement(i.Fragment,null,i.createElement("div",{className:"dumi-default-previewer-actions"},!((ie=B.disabledActions)!==null&&ie!==void 0&&ie.includes("CSB"))&&i.createElement("button",{className:"dumi-default-previewer-action-btn",type:"button","data-dumi-tooltip":De.formatMessage({id:"previewer.actions.codesandbox"}),onClick:function(){return(0,r.il)(B)}},i.createElement(b,null)),!((ne=B.disabledActions)!==null&&ne!==void 0&&ne.includes("STACKBLITZ"))&&i.createElement("button",{className:"dumi-default-previewer-action-btn",type:"button","data-dumi-tooltip":De.formatMessage({id:"previewer.actions.stackblitz"}),onClick:function(){return(0,r.Sc)(B)}},i.createElement(Oe,null)),!((de=B.disabledActions)!==null&&de!==void 0&&de.includes("HTML2SKETCH"))&&r.p6&&i.createElement("span",{className:"dumi-default-previewer-action-btn dumi-default-previewer-action-sketch","data-dumi-tooltip":De.formatMessage({id:"previewer.actions.sketch"}),"data-copied":ht||void 0},ht?i.createElement(l.r,null):i.createElement(A,null),i.createElement("select",{value:"",onChange:function(Ht){var Bt=Ht.target.value;switch(Bt){case"group":case"symbol":(0,r.p6)(B.demoContainer,{type:Bt}).then(function(Qt){je()(JSON.stringify(Qt)),Dt(!0),clearTimeout(_t.current),_t.current=window.setTimeout(function(){return Dt(!1)},2e3)});break;case"guide":window.open("https://d.umijs.org/config#html2sketch");break;default:}}},i.createElement("option",{value:"",hidden:!0}),i.createElement("option",{value:"group"},De.formatMessage({id:"previewer.actions.sketch.group"})),i.createElement("option",{value:"symbol"},De.formatMessage({id:"previewer.actions.sketch.symbol"})),i.createElement("option",{value:"-",disabled:!0},De.formatMessage({id:"previewer.actions.sketch.divider"})),i.createElement("option",{value:"guide"},De.formatMessage({id:"previewer.actions.sketch.guide"})))),!((Se=B.disabledActions)!==null&&Se!==void 0&&Se.includes("EXTERNAL"))&&i.createElement("a",{target:"_blank",rel:"noreferrer",href:B.demoUrl,className:"dumi-default-previewer-action-btn","data-dumi-tooltip":De.formatMessage({id:"previewer.actions.separate"})},i.createElement(Va,null)),B.extra,i.createElement(ae,B),!B.forceShowCode&&i.createElement("button",{className:"dumi-default-previewer-action-btn",type:"button",onClick:function(){return Ct(function(Ht){return!Ht})},"data-dumi-tooltip":De.formatMessage({id:"previewer.actions.code.".concat(Ot?"shrink":"expand")})},Ot?i.createElement(Pa,null):i.createElement(Fi,null))),Ot&&i.createElement(i.Fragment,null,i.createElement("div",{className:"dumi-default-previewer-sources"},!At&&i.createElement(Nu,{className:"dumi-default-previewer-tabs",prefixCls:"dumi-default-tabs",moreIcon:"\xB7\xB7\xB7",defaultActiveKey:String(rt),onChange:function(Ht){return mt(Number(Ht))},items:$e.map(function(Lt,Ht){var Bt=Bi(Lt,1),Qt=Bt[0];return{key:String(Ht),label:Qt}})})),i.createElement(q.Z,{lang:Rt},$e[rt][1].value)))},ku=iu;function Ma(){return Ma=Object.assign?Object.assign.bind():function(T){for(var B=1;B<arguments.length;B++){var U=arguments[B];for(var ie in U)Object.prototype.hasOwnProperty.call(U,ie)&&(T[ie]=U[ie])}return T},Ma.apply(this,arguments)}function _u(T){"@babel/helpers - typeof";return _u=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(B){return typeof B}:function(B){return B&&typeof Symbol=="function"&&B.constructor===Symbol&&B!==Symbol.prototype?"symbol":typeof B},_u(T)}var ss=function(B){var U,ie=(0,i.useRef)(null),ne=(0,r.TH)(),de=ne.hash,Se="#".concat(B.asset.id);return i.createElement("div",{id:B.asset.id,className:a()("dumi-default-previewer",B.className),style:B.style,"data-debug":B.debug,"data-active":de===Se||void 0},i.createElement("div",{className:"dumi-default-previewer-demo",style:{background:B.background},"data-compact":B.compact||void 0,"data-transform":B.transform||void 0,"data-iframe":B.iframe||void 0,ref:ie},B.iframe?i.createElement("iframe",{style:["string","number"].includes(_u(B.iframe))?{height:Number(B.iframe)}:{},src:B.demoUrl}):B.children),i.createElement("div",{className:"dumi-default-previewer-meta"},(B.title||B.debug)&&i.createElement("div",{className:"dumi-default-previewer-desc"},i.createElement("h5",null,i.createElement("a",{href:Se},B.debug&&i.createElement("strong",null,"DEV ONLY"),B.title)),B.description&&i.createElement("div",{className:"markdown",dangerouslySetInnerHTML:{__html:B.description}})),i.createElement(ku,Ma({},B,{demoContainer:B.iframe?(U=ie.current)===null||U===void 0?void 0:U.firstElementChild:ie.current}))))},cs=ss},9428:function(s,v,e){"use strict";e.d(v,{Z:function(){return G}});var o=e(49558),a=e(71062),r=Object.defineProperty,l=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,f=(I,H,$)=>H in I?r(I,H,{enumerable:!0,configurable:!0,writable:!0,value:$}):I[H]=$,g=(I,H)=>{for(var $ in H||(H={}))i.call(H,$)&&f(I,$,H[$]);if(l)for(var $ of l(H))d.call(H,$)&&f(I,$,H[$]);return I};const h=I=>a.createElement("svg",g({viewBox:"64 64 896 896"},I),a.createElement("path",{d:"M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2 263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"}));var p="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNODMyIDY0SDI5NmMtNC40IDAtOCAzLjYtOCA4djU2YzAgNC40IDMuNiA4IDggOGg0OTZ2Njg4YzAgNC40IDMuNiA4IDggOGg1NmM0LjQgMCA4LTMuNiA4LThWOTZjMC0xNy43LTE0LjMtMzItMzItMzJ6TTcwNCAxOTJIMTkyYy0xNy43IDAtMzIgMTQuMy0zMiAzMnY1MzAuN2MwIDguNSAzLjQgMTYuNiA5LjQgMjIuNmwxNzMuMyAxNzMuM2MyLjIgMi4yIDQuNyA0IDcuNCA1LjV2MS45aDQuMmMzLjUgMS4zIDcuMiAyIDExIDJINzA0YzE3LjcgMCAzMi0xNC4zIDMyLTMyVjIyNGMwLTE3LjctMTQuMy0zMi0zMi0zMnpNMzUwIDg1Ni4yIDI2My45IDc3MEgzNTB2ODYuMnpNNjY0IDg4OEg0MTRWNzQ2YzAtMjIuMS0xNy45LTQwLTQwLTQwSDIzMlYyNjRoNDMydjYyNHoiLz48L3N2Zz4=",m=e(12124),E=e.n(m),b=e(57296);var w=function(){var I=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,H=0,$={},Y={util:{encode:function te(fe){return fe instanceof X?new X(fe.type,te(fe.content),fe.alias):Array.isArray(fe)?fe.map(te):fe.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(te){return Object.prototype.toString.call(te).slice(8,-1)},objId:function(te){return te.__id||Object.defineProperty(te,"__id",{value:++H}),te.__id},clone:function te(fe,pe){pe=pe||{};var me,Ie;switch(Y.util.type(fe)){case"Object":if(Ie=Y.util.objId(fe),pe[Ie])return pe[Ie];me={},pe[Ie]=me;for(var ue in fe)fe.hasOwnProperty(ue)&&(me[ue]=te(fe[ue],pe));return me;case"Array":return Ie=Y.util.objId(fe),pe[Ie]?pe[Ie]:(me=[],pe[Ie]=me,fe.forEach(function(ve,Ee){me[Ee]=te(ve,pe)}),me);default:return fe}},getLanguage:function(te){for(;te;){var fe=I.exec(te.className);if(fe)return fe[1].toLowerCase();te=te.parentElement}return"none"},setLanguage:function(te,fe){te.className=te.className.replace(RegExp(I,"gi"),""),te.classList.add("language-"+fe)},isActive:function(te,fe,pe){for(var me="no-"+fe;te;){var Ie=te.classList;if(Ie.contains(fe))return!0;if(Ie.contains(me))return!1;te=te.parentElement}return!!pe}},languages:{plain:$,plaintext:$,text:$,txt:$,extend:function(te,fe){var pe=Y.util.clone(Y.languages[te]);for(var me in fe)pe[me]=fe[me];return pe},insertBefore:function(te,fe,pe,me){me=me||Y.languages;var Ie=me[te],ue={};for(var ve in Ie)if(Ie.hasOwnProperty(ve)){if(ve==fe)for(var Ee in pe)pe.hasOwnProperty(Ee)&&(ue[Ee]=pe[Ee]);pe.hasOwnProperty(ve)||(ue[ve]=Ie[ve])}var le=me[te];return me[te]=ue,Y.languages.DFS(Y.languages,function(ye,Be){Be===le&&ye!=te&&(this[ye]=ue)}),ue},DFS:function te(fe,pe,me,Ie){Ie=Ie||{};var ue=Y.util.objId;for(var ve in fe)if(fe.hasOwnProperty(ve)){pe.call(fe,ve,fe[ve],me||ve);var Ee=fe[ve],le=Y.util.type(Ee);le==="Object"&&!Ie[ue(Ee)]?(Ie[ue(Ee)]=!0,te(Ee,pe,null,Ie)):le==="Array"&&!Ie[ue(Ee)]&&(Ie[ue(Ee)]=!0,te(Ee,pe,ve,Ie))}}},plugins:{},highlight:function(te,fe,pe){var me={code:te,grammar:fe,language:pe};return Y.hooks.run("before-tokenize",me),me.tokens=Y.tokenize(me.code,me.grammar),Y.hooks.run("after-tokenize",me),X.stringify(Y.util.encode(me.tokens),me.language)},tokenize:function(te,fe){var pe=fe.rest;if(pe){for(var me in pe)fe[me]=pe[me];delete fe.rest}var Ie=new at;return et(Ie,Ie.head,te),Fe(te,Ie,fe,Ie.head,0),ot(Ie)},hooks:{all:{},add:function(te,fe){var pe=Y.hooks.all;pe[te]=pe[te]||[],pe[te].push(fe)},run:function(te,fe){var pe=Y.hooks.all[te];if(!(!pe||!pe.length))for(var me=0,Ie;Ie=pe[me++];)Ie(fe)}},Token:X};function X(te,fe,pe,me){this.type=te,this.content=fe,this.alias=pe,this.length=(me||"").length|0}X.stringify=function te(fe,pe){if(typeof fe=="string")return fe;if(Array.isArray(fe)){var me="";return fe.forEach(function(le){me+=te(le,pe)}),me}var Ie={type:fe.type,content:te(fe.content,pe),tag:"span",classes:["token",fe.type],attributes:{},language:pe},ue=fe.alias;ue&&(Array.isArray(ue)?Array.prototype.push.apply(Ie.classes,ue):Ie.classes.push(ue)),Y.hooks.run("wrap",Ie);var ve="";for(var Ee in Ie.attributes)ve+=" "+Ee+'="'+(Ie.attributes[Ee]||"").replace(/"/g,"&quot;")+'"';return"<"+Ie.tag+' class="'+Ie.classes.join(" ")+'"'+ve+">"+Ie.content+"</"+Ie.tag+">"};function Re(te,fe,pe,me){te.lastIndex=fe;var Ie=te.exec(pe);if(Ie&&me&&Ie[1]){var ue=Ie[1].length;Ie.index+=ue,Ie[0]=Ie[0].slice(ue)}return Ie}function Fe(te,fe,pe,me,Ie,ue){for(var ve in pe)if(!(!pe.hasOwnProperty(ve)||!pe[ve])){var Ee=pe[ve];Ee=Array.isArray(Ee)?Ee:[Ee];for(var le=0;le<Ee.length;++le){if(ue&&ue.cause==ve+","+le)return;var ye=Ee[le],Be=ye.inside,oe=!!ye.lookbehind,he=!!ye.greedy,Ae=ye.alias;if(he&&!ye.pattern.global){var Ue=ye.pattern.toString().match(/[imsuy]*$/)[0];ye.pattern=RegExp(ye.pattern.source,Ue+"g")}for(var He=ye.pattern||ye,it=me.next,y=Ie;it!==fe.tail&&!(ue&&y>=ue.reach);y+=it.value.length,it=it.next){var Q=it.value;if(fe.length>te.length)return;if(!(Q instanceof X)){var be=1,we;if(he){if(we=Re(He,y,te,oe),!we||we.index>=te.length)break;var Xe=we.index,ze=we.index+we[0].length,We=y;for(We+=it.value.length;Xe>=We;)it=it.next,We+=it.value.length;if(We-=it.value.length,y=We,it.value instanceof X)continue;for(var Pe=it;Pe!==fe.tail&&(We<ze||typeof Pe.value=="string");Pe=Pe.next)be++,We+=Pe.value.length;be--,Q=te.slice(y,We),we.index-=y}else if(we=Re(He,0,Q,oe),!we)continue;var Xe=we.index,ct=we[0],Ve=Q.slice(0,Xe),Pt=Q.slice(Xe+ct.length),xe=y+Q.length;ue&&xe>ue.reach&&(ue.reach=xe);var tt=it.prev;Ve&&(tt=et(fe,tt,Ve),y+=Ve.length),Ke(fe,tt,be);var Ze=new X(ve,Be?Y.tokenize(ct,Be):ct,Ae,ct);if(it=et(fe,tt,Ze),Pt&&et(fe,it,Pt),be>1){var Le={cause:ve+","+le,reach:xe};Fe(te,fe,pe,it.prev,y,Le),ue&&Le.reach>ue.reach&&(ue.reach=Le.reach)}}}}}}function at(){var te={value:null,prev:null,next:null},fe={value:null,prev:te,next:null};te.next=fe,this.head=te,this.tail=fe,this.length=0}function et(te,fe,pe){var me=fe.next,Ie={value:pe,prev:fe,next:me};return fe.next=Ie,me.prev=Ie,te.length++,Ie}function Ke(te,fe,pe){for(var me=fe.next,Ie=0;Ie<pe&&me!==te.tail;Ie++)me=me.next;fe.next=me,me.prev=fe,te.length-=Ie}function ot(te){for(var fe=[],pe=te.head.next;pe!==te.tail;)fe.push(pe.value),pe=pe.next;return fe}return Y}(),x=w;w.default=w,x.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},x.languages.markup.tag.inside["attr-value"].inside.entity=x.languages.markup.entity,x.languages.markup.doctype.inside["internal-subset"].inside=x.languages.markup,x.hooks.add("wrap",function(I){I.type==="entity"&&(I.attributes.title=I.content.replace(/&amp;/,"&"))}),Object.defineProperty(x.languages.markup.tag,"addInlined",{value:function(H,$){var Y={};Y["language-"+$]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:x.languages[$]},Y.cdata=/^<!\[CDATA\[|\]\]>$/i;var X={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:Y}};X["language-"+$]={pattern:/[\s\S]+/,inside:x.languages[$]};var Re={};Re[H]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return H}),"i"),lookbehind:!0,greedy:!0,inside:X},x.languages.insertBefore("markup","cdata",Re)}}),Object.defineProperty(x.languages.markup.tag,"addAttribute",{value:function(I,H){x.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+I+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[H,"language-"+H],inside:x.languages[H]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),x.languages.html=x.languages.markup,x.languages.mathml=x.languages.markup,x.languages.svg=x.languages.markup,x.languages.xml=x.languages.extend("markup",{}),x.languages.ssml=x.languages.xml,x.languages.atom=x.languages.xml,x.languages.rss=x.languages.xml,function(I){var H="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",$={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},Y={bash:$,environment:{pattern:RegExp("\\$"+H),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+H),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};I.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+H),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:Y},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:$}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:Y},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:Y.entity}}],environment:{pattern:RegExp("\\$?"+H),alias:"constant"},variable:Y.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},$.inside=I.languages.bash;for(var X=["comment","function-name","for-or-select","assign-left","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],Re=Y.variable[1].inside,Fe=0;Fe<X.length;Fe++)Re[X[Fe]]=I.languages.bash[X[Fe]];I.languages.shell=I.languages.bash}(x),x.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},x.languages.c=x.languages.extend("clike",{comment:{pattern:/\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},string:{pattern:/"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,greedy:!0},"class-name":{pattern:/(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,lookbehind:!0},keyword:/\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,function:/\b[a-z_]\w*(?=\s*\()/i,number:/(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,operator:/>>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/}),x.languages.insertBefore("c","string",{char:{pattern:/'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,greedy:!0}}),x.languages.insertBefore("c","string",{macro:{pattern:/(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,lookbehind:!0,greedy:!0,alias:"property",inside:{string:[{pattern:/^(#\s*include\s*)<[^>]+>/,lookbehind:!0},x.languages.c.string],char:x.languages.c.char,comment:x.languages.c.comment,"macro-name":[{pattern:/(^#\s*define\s+)\w+\b(?!\()/i,lookbehind:!0},{pattern:/(^#\s*define\s+)\w+\b(?=\()/i,lookbehind:!0,alias:"function"}],directive:{pattern:/^(#\s*)[a-z]+/,lookbehind:!0,alias:"keyword"},"directive-hash":/^#/,punctuation:/##|\\(?=[\r\n])/,expression:{pattern:/\S[\s\S]*/,inside:x.languages.c}}}}),x.languages.insertBefore("c","function",{constant:/\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/}),delete x.languages.c.boolean,function(I){var H=/\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,$=/\b(?!<keyword>)\w+(?:\s*\.\s*\w+)*\b/.source.replace(/<keyword>/g,function(){return H.source});I.languages.cpp=I.languages.extend("c",{"class-name":[{pattern:RegExp(/(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(/<keyword>/g,function(){return H.source})),lookbehind:!0},/\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/,/\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i,/\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/],keyword:H,number:{pattern:/(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,greedy:!0},operator:/>>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,boolean:/\b(?:false|true)\b/}),I.languages.insertBefore("cpp","string",{module:{pattern:RegExp(/(\b(?:import|module)\s+)/.source+"(?:"+/"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|<[^<>\r\n]*>/.source+"|"+/<mod-name>(?:\s*:\s*<mod-name>)?|:\s*<mod-name>/.source.replace(/<mod-name>/g,function(){return $})+")"),lookbehind:!0,greedy:!0,inside:{string:/^[<"][\s\S]+/,operator:/:/,punctuation:/\./}},"raw-string":{pattern:/R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,alias:"string",greedy:!0}}),I.languages.insertBefore("cpp","keyword",{"generic-function":{pattern:/\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,inside:{function:/^\w+/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:I.languages.cpp}}}}),I.languages.insertBefore("cpp","operator",{"double-colon":{pattern:/::/,alias:"punctuation"}}),I.languages.insertBefore("cpp","class-name",{"base-clause":{pattern:/(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,lookbehind:!0,greedy:!0,inside:I.languages.extend("cpp",{})}}),I.languages.insertBefore("inside","double-colon",{"class-name":/\b[a-z_]\w*\b(?!\s*::)/i},I.languages.cpp["base-clause"])}(x),function(I){var H=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;I.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+H.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+H.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+H.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:H,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},I.languages.css.atrule.inside.rest=I.languages.css;var $=I.languages.markup;$&&($.tag.addInlined("style","css"),$.tag.addAttribute("style","css"))}(x),function(I){var H=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,$;I.languages.css.selector={pattern:I.languages.css.selector.pattern,lookbehind:!0,inside:$={"pseudo-element":/:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,"pseudo-class":/:[-\w]+/,class:/\.[-\w]+/,id:/#[-\w]+/,attribute:{pattern:RegExp(`\\[(?:[^[\\]"']|`+H.source+")*\\]"),greedy:!0,inside:{punctuation:/^\[|\]$/,"case-sensitivity":{pattern:/(\s)[si]$/i,lookbehind:!0,alias:"keyword"},namespace:{pattern:/^(\s*)(?:(?!\s)[-*\w\xA0-\uFFFF])*\|(?!=)/,lookbehind:!0,inside:{punctuation:/\|$/}},"attr-name":{pattern:/^(\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+/,lookbehind:!0},"attr-value":[H,{pattern:/(=\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+(?=\s*$)/,lookbehind:!0}],operator:/[|~*^$]?=/}},"n-th":[{pattern:/(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,lookbehind:!0,inside:{number:/[\dn]+/,operator:/[+-]/}},{pattern:/(\(\s*)(?:even|odd)(?=\s*\))/i,lookbehind:!0}],combinator:/>|\+|~|\|\|/,punctuation:/[(),]/}},I.languages.css.atrule.inside["selector-function-argument"].inside=$,I.languages.insertBefore("css","property",{variable:{pattern:/(^|[^-\w\xA0-\uFFFF])--(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*/i,lookbehind:!0}});var Y={pattern:/(\b\d+)(?:%|[a-z]+(?![\w-]))/,lookbehind:!0},X={pattern:/(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,lookbehind:!0};I.languages.insertBefore("css","function",{operator:{pattern:/(\s)[+\-*\/](?=\s)/,lookbehind:!0},hexcode:{pattern:/\B#[\da-f]{3,8}\b/i,alias:"color"},color:[{pattern:/(^|[^\w-])(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)(?![\w-])/i,lookbehind:!0},{pattern:/\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,inside:{unit:Y,number:X,function:/[\w-]+(?=\()/,punctuation:/[(),]/}}],entity:/\\[\da-f]{1,8}/i,unit:Y,number:X})}(x),x.languages.javascript=x.languages.extend("clike",{"class-name":[x.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),x.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,x.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:x.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:x.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:x.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:x.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:x.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),x.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:x.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),x.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),x.languages.markup&&(x.languages.markup.tag.addInlined("script","javascript"),x.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),x.languages.js=x.languages.javascript,function(I){var H=/#(?!\{).+/,$={pattern:/#\{[^}]+\}/,alias:"variable"};I.languages.coffeescript=I.languages.extend("javascript",{comment:H,string:[{pattern:/'(?:\\[\s\S]|[^\\'])*'/,greedy:!0},{pattern:/"(?:\\[\s\S]|[^\\"])*"/,greedy:!0,inside:{interpolation:$}}],keyword:/\b(?:and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/,"class-member":{pattern:/@(?!\d)\w+/,alias:"variable"}}),I.languages.insertBefore("coffeescript","comment",{"multiline-comment":{pattern:/###[\s\S]+?###/,alias:"comment"},"block-regex":{pattern:/\/{3}[\s\S]*?\/{3}/,alias:"regex",inside:{comment:H,interpolation:$}}}),I.languages.insertBefore("coffeescript","string",{"inline-javascript":{pattern:/`(?:\\[\s\S]|[^\\`])*`/,inside:{delimiter:{pattern:/^`|`$/,alias:"punctuation"},script:{pattern:/[\s\S]+/,alias:"language-javascript",inside:I.languages.javascript}}},"multiline-string":[{pattern:/'''[\s\S]*?'''/,greedy:!0,alias:"string"},{pattern:/"""[\s\S]*?"""/,greedy:!0,alias:"string",inside:{interpolation:$}}]}),I.languages.insertBefore("coffeescript","keyword",{property:/(?!\d)\w+(?=\s*:(?!:))/}),delete I.languages.coffeescript["template-string"],I.languages.coffee=I.languages.coffeescript}(x),function(I){var H=/[*&][^\s[\]{},]+/,$=/!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,Y="(?:"+$.source+"(?:[ 	]+"+H.source+")?|"+H.source+"(?:[ 	]+"+$.source+")?)",X=/(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g,function(){return/[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source}),Re=/"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;function Fe(at,et){et=(et||"").replace(/m/g,"")+"m";var Ke=/([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g,function(){return Y}).replace(/<<value>>/g,function(){return at});return RegExp(Ke,et)}I.languages.yaml={scalar:{pattern:RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g,function(){return Y})),lookbehind:!0,alias:"string"},comment:/#.*/,key:{pattern:RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g,function(){return Y}).replace(/<<key>>/g,function(){return"(?:"+X+"|"+Re+")"})),lookbehind:!0,greedy:!0,alias:"atrule"},directive:{pattern:/(^[ \t]*)%.+/m,lookbehind:!0,alias:"important"},datetime:{pattern:Fe(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source),lookbehind:!0,alias:"number"},boolean:{pattern:Fe(/false|true/.source,"i"),lookbehind:!0,alias:"important"},null:{pattern:Fe(/null|~/.source,"i"),lookbehind:!0,alias:"important"},string:{pattern:Fe(Re),lookbehind:!0,greedy:!0},number:{pattern:Fe(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source,"i"),lookbehind:!0},tag:$,important:H,punctuation:/---|[:[\]{}\-,|>?]|\.\.\./},I.languages.yml=I.languages.yaml}(x),function(I){var H=/(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;function $(ot){return ot=ot.replace(/<inner>/g,function(){return H}),RegExp(/((?:^|[^\\])(?:\\{2})*)/.source+"(?:"+ot+")")}var Y=/(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source,X=/\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(/__/g,function(){return Y}),Re=/\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source;I.languages.markdown=I.languages.extend("markup",{}),I.languages.insertBefore("markdown","prolog",{"front-matter-block":{pattern:/(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,lookbehind:!0,greedy:!0,inside:{punctuation:/^---|---$/,"front-matter":{pattern:/\S+(?:\s+\S+)*/,alias:["yaml","language-yaml"],inside:I.languages.yaml}}},blockquote:{pattern:/^>(?:[\t ]*>)*/m,alias:"punctuation"},table:{pattern:RegExp("^"+X+Re+"(?:"+X+")*","m"),inside:{"table-data-rows":{pattern:RegExp("^("+X+Re+")(?:"+X+")*$"),lookbehind:!0,inside:{"table-data":{pattern:RegExp(Y),inside:I.languages.markdown},punctuation:/\|/}},"table-line":{pattern:RegExp("^("+X+")"+Re+"$"),lookbehind:!0,inside:{punctuation:/\||:?-{3,}:?/}},"table-header-row":{pattern:RegExp("^"+X+"$"),inside:{"table-header":{pattern:RegExp(Y),alias:"important",inside:I.languages.markdown},punctuation:/\|/}}}},code:[{pattern:/((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,lookbehind:!0,alias:"keyword"},{pattern:/^```[\s\S]*?^```$/m,greedy:!0,inside:{"code-block":{pattern:/^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,lookbehind:!0},"code-language":{pattern:/^(```).+/,lookbehind:!0},punctuation:/```/}}],title:[{pattern:/\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,alias:"important",inside:{punctuation:/==+$|--+$/}},{pattern:/(^\s*)#.+/m,lookbehind:!0,alias:"important",inside:{punctuation:/^#+|#+$/}}],hr:{pattern:/(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,lookbehind:!0,alias:"punctuation"},list:{pattern:/(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,lookbehind:!0,alias:"punctuation"},"url-reference":{pattern:/!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,inside:{variable:{pattern:/^(!?\[)[^\]]+/,lookbehind:!0},string:/(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,punctuation:/^[\[\]!:]|[<>]/},alias:"url"},bold:{pattern:$(/\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^..)[\s\S]+(?=..$)/,lookbehind:!0,inside:{}},punctuation:/\*\*|__/}},italic:{pattern:$(/\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^.)[\s\S]+(?=.$)/,lookbehind:!0,inside:{}},punctuation:/[*_]/}},strike:{pattern:$(/(~~?)(?:(?!~)<inner>)+\2/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^~~?)[\s\S]+(?=\1$)/,lookbehind:!0,inside:{}},punctuation:/~~?/}},"code-snippet":{pattern:/(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,lookbehind:!0,greedy:!0,alias:["code","keyword"]},url:{pattern:$(/!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/.source),lookbehind:!0,greedy:!0,inside:{operator:/^!/,content:{pattern:/(^\[)[^\]]+(?=\])/,lookbehind:!0,inside:{}},variable:{pattern:/(^\][ \t]?\[)[^\]]+(?=\]$)/,lookbehind:!0},url:{pattern:/(^\]\()[^\s)]+/,lookbehind:!0},string:{pattern:/(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,lookbehind:!0}}}}),["url","bold","italic","strike"].forEach(function(ot){["url","bold","italic","strike","code-snippet"].forEach(function(te){ot!==te&&(I.languages.markdown[ot].inside.content.inside[te]=I.languages.markdown[te])})}),I.hooks.add("after-tokenize",function(ot){if(ot.language!=="markdown"&&ot.language!=="md")return;function te(fe){if(!(!fe||typeof fe=="string"))for(var pe=0,me=fe.length;pe<me;pe++){var Ie=fe[pe];if(Ie.type!=="code"){te(Ie.content);continue}var ue=Ie.content[1],ve=Ie.content[3];if(ue&&ve&&ue.type==="code-language"&&ve.type==="code-block"&&typeof ue.content=="string"){var Ee=ue.content.replace(/\b#/g,"sharp").replace(/\b\+\+/g,"pp");Ee=(/[a-z][\w-]*/i.exec(Ee)||[""])[0].toLowerCase();var le="language-"+Ee;ve.alias?typeof ve.alias=="string"?ve.alias=[ve.alias,le]:ve.alias.push(le):ve.alias=[le]}}}te(ot.tokens)}),I.hooks.add("wrap",function(ot){if(ot.type==="code-block"){for(var te="",fe=0,pe=ot.classes.length;fe<pe;fe++){var me=ot.classes[fe],Ie=/language-(.+)/.exec(me);if(Ie){te=Ie[1];break}}var ue=I.languages[te];if(ue)ot.content=I.highlight(Ke(ot.content),ue,te);else if(te&&te!=="none"&&I.plugins.autoloader){var ve="md-"+new Date().valueOf()+"-"+Math.floor(Math.random()*1e16);ot.attributes.id=ve,I.plugins.autoloader.loadLanguages(te,function(){var Ee=document.getElementById(ve);Ee&&(Ee.innerHTML=I.highlight(Ee.textContent,I.languages[te],te))})}}});var Fe=RegExp(I.languages.markup.tag.pattern.source,"gi"),at={amp:"&",lt:"<",gt:">",quot:'"'},et=String.fromCodePoint||String.fromCharCode;function Ke(ot){var te=ot.replace(Fe,"");return te=te.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi,function(fe,pe){if(pe=pe.toLowerCase(),pe[0]==="#"){var me;return pe[1]==="x"?me=parseInt(pe.slice(2),16):me=Number(pe.slice(1)),et(me)}else{var Ie=at[pe];return Ie||fe}}),te}I.languages.md=I.languages.markdown}(x),x.languages.graphql={comment:/#.*/,description:{pattern:/(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,greedy:!0,alias:"string",inside:{"language-markdown":{pattern:/(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,lookbehind:!0,inside:x.languages.markdown}}},string:{pattern:/"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/,greedy:!0},number:/(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,boolean:/\b(?:false|true)\b/,variable:/\$[a-z_]\w*/i,directive:{pattern:/@[a-z_]\w*/i,alias:"function"},"attr-name":{pattern:/\b[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,greedy:!0},"atom-input":{pattern:/\b[A-Z]\w*Input\b/,alias:"class-name"},scalar:/\b(?:Boolean|Float|ID|Int|String)\b/,constant:/\b[A-Z][A-Z_\d]*\b/,"class-name":{pattern:/(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/,lookbehind:!0},fragment:{pattern:/(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,lookbehind:!0,alias:"function"},"definition-mutation":{pattern:/(\bmutation\s+)[a-zA-Z_]\w*/,lookbehind:!0,alias:"function"},"definition-query":{pattern:/(\bquery\s+)[a-zA-Z_]\w*/,lookbehind:!0,alias:"function"},keyword:/\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/,operator:/[!=|&]|\.{3}/,"property-query":/\w+(?=\s*\()/,object:/\w+(?=\s*\{)/,punctuation:/[!(){}\[\]:=,]/,property:/\w+/},x.hooks.add("after-tokenize",function(H){if(H.language!=="graphql")return;var $=H.tokens.filter(function(Ie){return typeof Ie!="string"&&Ie.type!=="comment"&&Ie.type!=="scalar"}),Y=0;function X(Ie){return $[Y+Ie]}function Re(Ie,ue){ue=ue||0;for(var ve=0;ve<Ie.length;ve++){var Ee=X(ve+ue);if(!Ee||Ee.type!==Ie[ve])return!1}return!0}function Fe(Ie,ue){for(var ve=1,Ee=Y;Ee<$.length;Ee++){var le=$[Ee],ye=le.content;if(le.type==="punctuation"&&typeof ye=="string"){if(Ie.test(ye))ve++;else if(ue.test(ye)&&(ve--,ve===0))return Ee}}return-1}function at(Ie,ue){var ve=Ie.alias;ve?Array.isArray(ve)||(Ie.alias=ve=[ve]):Ie.alias=ve=[],ve.push(ue)}for(;Y<$.length;){var et=$[Y++];if(et.type==="keyword"&&et.content==="mutation"){var Ke=[];if(Re(["definition-mutation","punctuation"])&&X(1).content==="("){Y+=2;var ot=Fe(/^\($/,/^\)$/);if(ot===-1)continue;for(;Y<ot;Y++){var te=X(0);te.type==="variable"&&(at(te,"variable-input"),Ke.push(te.content))}Y=ot+1}if(Re(["punctuation","property-query"])&&X(0).content==="{"&&(Y++,at(X(0),"property-mutation"),Ke.length>0)){var fe=Fe(/^\{$/,/^\}$/);if(fe===-1)continue;for(var pe=Y;pe<fe;pe++){var me=$[pe];me.type==="variable"&&Ke.indexOf(me.content)>=0&&at(me,"variable-input")}}}}}),x.languages.sql={comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,lookbehind:!0},variable:[{pattern:/@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,greedy:!0},/@[\w.$]+/],string:{pattern:/(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,greedy:!0,lookbehind:!0},identifier:{pattern:/(^|[^@\\])`(?:\\[\s\S]|[^`\\]|``)*`/,greedy:!0,lookbehind:!0,inside:{punctuation:/^`|`$/}},function:/\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,keyword:/\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:COL|_INSERT)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:ING|S)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,boolean:/\b(?:FALSE|NULL|TRUE)\b/i,number:/\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,operator:/[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|ILIKE|IN|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,punctuation:/[;[\]()`,.]/},function(I){var H=I.languages.javascript["template-string"],$=H.pattern.source,Y=H.inside.interpolation,X=Y.inside["interpolation-punctuation"],Re=Y.pattern.source;function Fe(pe,me){if(I.languages[pe])return{pattern:RegExp("((?:"+me+")\\s*)"+$),lookbehind:!0,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},"embedded-code":{pattern:/[\s\S]+/,alias:pe}}}}I.languages.javascript["template-string"]=[Fe("css",/\b(?:styled(?:\([^)]*\))?(?:\s*\.\s*\w+(?:\([^)]*\))*)*|css(?:\s*\.\s*(?:global|resolve))?|createGlobalStyle|keyframes)/.source),Fe("html",/\bhtml|\.\s*(?:inner|outer)HTML\s*\+?=/.source),Fe("svg",/\bsvg/.source),Fe("markdown",/\b(?:markdown|md)/.source),Fe("graphql",/\b(?:gql|graphql(?:\s*\.\s*experimental)?)/.source),Fe("sql",/\bsql/.source),H].filter(Boolean);function at(pe,me){return"___"+me.toUpperCase()+"_"+pe+"___"}function et(pe,me,Ie){var ue={code:pe,grammar:me,language:Ie};return I.hooks.run("before-tokenize",ue),ue.tokens=I.tokenize(ue.code,ue.grammar),I.hooks.run("after-tokenize",ue),ue.tokens}function Ke(pe){var me={};me["interpolation-punctuation"]=X;var Ie=I.tokenize(pe,me);if(Ie.length===3){var ue=[1,1];ue.push.apply(ue,et(Ie[1],I.languages.javascript,"javascript")),Ie.splice.apply(Ie,ue)}return new I.Token("interpolation",Ie,Y.alias,pe)}function ot(pe,me,Ie){var ue=I.tokenize(pe,{interpolation:{pattern:RegExp(Re),lookbehind:!0}}),ve=0,Ee={},le=ue.map(function(he){if(typeof he=="string")return he;for(var Ae=he.content,Ue;pe.indexOf(Ue=at(ve++,Ie))!==-1;);return Ee[Ue]=Ae,Ue}).join(""),ye=et(le,me,Ie),Be=Object.keys(Ee);ve=0;function oe(he){for(var Ae=0;Ae<he.length;Ae++){if(ve>=Be.length)return;var Ue=he[Ae];if(typeof Ue=="string"||typeof Ue.content=="string"){var He=Be[ve],it=typeof Ue=="string"?Ue:Ue.content,y=it.indexOf(He);if(y!==-1){++ve;var Q=it.substring(0,y),be=Ke(Ee[He]),we=it.substring(y+He.length),ze=[];if(Q&&ze.push(Q),ze.push(be),we){var We=[we];oe(We),ze.push.apply(ze,We)}typeof Ue=="string"?(he.splice.apply(he,[Ae,1].concat(ze)),Ae+=ze.length-1):Ue.content=ze}}else{var Pe=Ue.content;Array.isArray(Pe)?oe(Pe):oe([Pe])}}}return oe(ye),new I.Token(Ie,ye,"language-"+Ie,pe)}var te={javascript:!0,js:!0,typescript:!0,ts:!0,jsx:!0,tsx:!0};I.hooks.add("after-tokenize",function(pe){if(!(pe.language in te))return;function me(Ie){for(var ue=0,ve=Ie.length;ue<ve;ue++){var Ee=Ie[ue];if(typeof Ee!="string"){var le=Ee.content;if(!Array.isArray(le)){typeof le!="string"&&me([le]);continue}if(Ee.type==="template-string"){var ye=le[1];if(le.length===3&&typeof ye!="string"&&ye.type==="embedded-code"){var Be=fe(ye),oe=ye.alias,he=Array.isArray(oe)?oe[0]:oe,Ae=I.languages[he];if(!Ae)continue;le[1]=ot(Be,Ae,he)}}else me(le)}}}me(pe.tokens)});function fe(pe){return typeof pe=="string"?pe:Array.isArray(pe)?pe.map(fe).join(""):fe(pe.content)}}(x),function(I){I.languages.typescript=I.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/}),I.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete I.languages.typescript.parameter,delete I.languages.typescript["literal-property"];var H=I.languages.extend("typescript",{});delete H["class-name"],I.languages.typescript["class-name"].inside=H,I.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:H}}}}),I.languages.ts=I.languages.typescript}(x),function(I){I.languages.insertBefore("javascript","function-variable",{"method-variable":{pattern:RegExp("(\\.\\s*)"+I.languages.javascript["function-variable"].pattern.source),lookbehind:!0,alias:["function-variable","method","function","property-access"]}}),I.languages.insertBefore("javascript","function",{method:{pattern:RegExp("(\\.\\s*)"+I.languages.javascript.function.source),lookbehind:!0,alias:["function","property-access"]}}),I.languages.insertBefore("javascript","constant",{"known-class-name":[{pattern:/\b(?:(?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|(?:Weak)?(?:Map|Set)|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|WebAssembly)\b/,alias:"class-name"},{pattern:/\b(?:[A-Z]\w*)Error\b/,alias:"class-name"}]});function H(at,et){return RegExp(at.replace(/<ID>/g,function(){return/(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/.source}),et)}I.languages.insertBefore("javascript","keyword",{imports:{pattern:H(/(\bimport\b\s*)(?:<ID>(?:\s*,\s*(?:\*\s*as\s+<ID>|\{[^{}]*\}))?|\*\s*as\s+<ID>|\{[^{}]*\})(?=\s*\bfrom\b)/.source),lookbehind:!0,inside:I.languages.javascript},exports:{pattern:H(/(\bexport\b\s*)(?:\*(?:\s*as\s+<ID>)?(?=\s*\bfrom\b)|\{[^{}]*\})/.source),lookbehind:!0,inside:I.languages.javascript}}),I.languages.javascript.keyword.unshift({pattern:/\b(?:as|default|export|from|import)\b/,alias:"module"},{pattern:/\b(?:await|break|catch|continue|do|else|finally|for|if|return|switch|throw|try|while|yield)\b/,alias:"control-flow"},{pattern:/\bnull\b/,alias:["null","nil"]},{pattern:/\bundefined\b/,alias:"nil"}),I.languages.insertBefore("javascript","operator",{spread:{pattern:/\.{3}/,alias:"operator"},arrow:{pattern:/=>/,alias:"operator"}}),I.languages.insertBefore("javascript","punctuation",{"property-access":{pattern:H(/(\.\s*)#?<ID>/.source),lookbehind:!0},"maybe-class-name":{pattern:/(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,lookbehind:!0},dom:{pattern:/\b(?:document|(?:local|session)Storage|location|navigator|performance|window)\b/,alias:"variable"},console:{pattern:/\bconsole(?=\s*\.)/,alias:"class-name"}});for(var $=["function","function-variable","method","method-variable","property-access"],Y=0;Y<$.length;Y++){var X=$[Y],Re=I.languages.javascript[X];I.util.type(Re)==="RegExp"&&(Re=I.languages.javascript[X]={pattern:Re});var Fe=Re.inside||{};Re.inside=Fe,Fe["maybe-class-name"]=/^[A-Z][\s\S]*/}}(x),function(I){var H=I.util.clone(I.languages.javascript),$=/(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,Y=/(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,X=/(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;function Re(et,Ke){return et=et.replace(/<S>/g,function(){return $}).replace(/<BRACES>/g,function(){return Y}).replace(/<SPREAD>/g,function(){return X}),RegExp(et,Ke)}X=Re(X).source,I.languages.jsx=I.languages.extend("markup",H),I.languages.jsx.tag.pattern=Re(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source),I.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,I.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,I.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,I.languages.jsx.tag.inside.comment=H.comment,I.languages.insertBefore("inside","attr-name",{spread:{pattern:Re(/<SPREAD>/.source),inside:I.languages.jsx}},I.languages.jsx.tag),I.languages.insertBefore("inside","special-attr",{script:{pattern:Re(/=<BRACES>/.source),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:I.languages.jsx}}},I.languages.jsx.tag);var Fe=function(et){return et?typeof et=="string"?et:typeof et.content=="string"?et.content:et.content.map(Fe).join(""):""},at=function(et){for(var Ke=[],ot=0;ot<et.length;ot++){var te=et[ot],fe=!1;if(typeof te!="string"&&(te.type==="tag"&&te.content[0]&&te.content[0].type==="tag"?te.content[0].content[0].content==="</"?Ke.length>0&&Ke[Ke.length-1].tagName===Fe(te.content[0].content[1])&&Ke.pop():te.content[te.content.length-1].content==="/>"||Ke.push({tagName:Fe(te.content[0].content[1]),openedBraces:0}):Ke.length>0&&te.type==="punctuation"&&te.content==="{"?Ke[Ke.length-1].openedBraces++:Ke.length>0&&Ke[Ke.length-1].openedBraces>0&&te.type==="punctuation"&&te.content==="}"?Ke[Ke.length-1].openedBraces--:fe=!0),(fe||typeof te=="string")&&Ke.length>0&&Ke[Ke.length-1].openedBraces===0){var pe=Fe(te);ot<et.length-1&&(typeof et[ot+1]=="string"||et[ot+1].type==="plain-text")&&(pe+=Fe(et[ot+1]),et.splice(ot+1,1)),ot>0&&(typeof et[ot-1]=="string"||et[ot-1].type==="plain-text")&&(pe=Fe(et[ot-1])+pe,et.splice(ot-1,1),ot--),et[ot]=new I.Token("plain-text",pe,null,pe)}te.content&&typeof te.content!="string"&&at(te.content)}};I.hooks.add("after-tokenize",function(et){et.language!=="jsx"&&et.language!=="tsx"||at(et.tokens)})}(x),function(I){I.languages.diff={coord:[/^(?:\*{3}|-{3}|\+{3}).*$/m,/^@@.*@@$/m,/^\d.*$/m]};var H={"deleted-sign":"-","deleted-arrow":"<","inserted-sign":"+","inserted-arrow":">",unchanged:" ",diff:"!"};Object.keys(H).forEach(function($){var Y=H[$],X=[];/^\w+$/.test($)||X.push(/\w+/.exec($)[0]),$==="diff"&&X.push("bold"),I.languages.diff[$]={pattern:RegExp("^(?:["+Y+`].*(?:\r
?|
|(?![\\s\\S])))+`,"m"),alias:X,inside:{line:{pattern:/(.)(?=[\s\S]).*(?:\r\n?|\n)?/,lookbehind:!0},prefix:{pattern:/[\s\S]/,alias:/\w+/.exec($)[0]}}}}),Object.defineProperty(I.languages.diff,"PREFIXES",{value:H})}(x),x.languages.git={comment:/^#.*/m,deleted:/^[-–].*/m,inserted:/^\+.*/m,string:/("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,command:{pattern:/^.*\$ git .*$/m,inside:{parameter:/\s--?\w+/}},coord:/^@@.*@@$/m,"commit-sha1":/^commit \w{40}$/m},x.languages.go=x.languages.extend("clike",{string:{pattern:/(^|[^\\])"(?:\\.|[^"\\\r\n])*"|`[^`]*`/,lookbehind:!0,greedy:!0},keyword:/\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,boolean:/\b(?:_|false|iota|nil|true)\b/,number:[/\b0(?:b[01_]+|o[0-7_]+)i?\b/i,/\b0x(?:[a-f\d_]+(?:\.[a-f\d_]*)?|\.[a-f\d_]+)(?:p[+-]?\d+(?:_\d+)*)?i?(?!\w)/i,/(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?[\d_]+)?i?(?!\w)/i],operator:/[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,builtin:/\b(?:append|bool|byte|cap|close|complex|complex(?:64|128)|copy|delete|error|float(?:32|64)|u?int(?:8|16|32|64)?|imag|len|make|new|panic|print(?:ln)?|real|recover|rune|string|uintptr)\b/}),x.languages.insertBefore("go","string",{char:{pattern:/'(?:\\.|[^'\\\r\n]){0,10}'/,greedy:!0}}),delete x.languages.go["class-name"],function(I){function H($,Y){return"___"+$.toUpperCase()+Y+"___"}Object.defineProperties(I.languages["markup-templating"]={},{buildPlaceholders:{value:function($,Y,X,Re){if($.language===Y){var Fe=$.tokenStack=[];$.code=$.code.replace(X,function(at){if(typeof Re=="function"&&!Re(at))return at;for(var et=Fe.length,Ke;$.code.indexOf(Ke=H(Y,et))!==-1;)++et;return Fe[et]=at,Ke}),$.grammar=I.languages.markup}}},tokenizePlaceholders:{value:function($,Y){if($.language!==Y||!$.tokenStack)return;$.grammar=I.languages[Y];var X=0,Re=Object.keys($.tokenStack);function Fe(at){for(var et=0;et<at.length&&!(X>=Re.length);et++){var Ke=at[et];if(typeof Ke=="string"||Ke.content&&typeof Ke.content=="string"){var ot=Re[X],te=$.tokenStack[ot],fe=typeof Ke=="string"?Ke:Ke.content,pe=H(Y,ot),me=fe.indexOf(pe);if(me>-1){++X;var Ie=fe.substring(0,me),ue=new I.Token(Y,I.tokenize(te,$.grammar),"language-"+Y,te),ve=fe.substring(me+pe.length),Ee=[];Ie&&Ee.push.apply(Ee,Fe([Ie])),Ee.push(ue),ve&&Ee.push.apply(Ee,Fe([ve])),typeof Ke=="string"?at.splice.apply(at,[et,1].concat(Ee)):Ke.content=Ee}}else Ke.content&&Fe(Ke.content)}return at}Fe($.tokens)}}})}(x),function(I){I.languages.handlebars={comment:/\{\{![\s\S]*?\}\}/,delimiter:{pattern:/^\{\{\{?|\}\}\}?$/,alias:"punctuation"},string:/(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee][+-]?\d+)?/,boolean:/\b(?:false|true)\b/,block:{pattern:/^(\s*(?:~\s*)?)[#\/]\S+?(?=\s*(?:~\s*)?$|\s)/,lookbehind:!0,alias:"keyword"},brackets:{pattern:/\[[^\]]+\]/,inside:{punctuation:/\[|\]/,variable:/[\s\S]+/}},punctuation:/[!"#%&':()*+,.\/;<=>@\[\\\]^`{|}~]/,variable:/[^!"#%&'()*+,\/;<=>@\[\\\]^`{|}~\s]+/},I.hooks.add("before-tokenize",function(H){var $=/\{\{\{[\s\S]+?\}\}\}|\{\{[\s\S]+?\}\}/g;I.languages["markup-templating"].buildPlaceholders(H,"handlebars",$)}),I.hooks.add("after-tokenize",function(H){I.languages["markup-templating"].tokenizePlaceholders(H,"handlebars")}),I.languages.hbs=I.languages.handlebars}(x),x.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}},x.languages.webmanifest=x.languages.json,x.languages.less=x.languages.extend("css",{comment:[/\/\*[\s\S]*?\*\//,{pattern:/(^|[^\\])\/\/.*/,lookbehind:!0}],atrule:{pattern:/@[\w-](?:\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};\s]|\s+(?!\s))*?(?=\s*\{)/,inside:{punctuation:/[:()]/}},selector:{pattern:/(?:@\{[\w-]+\}|[^{};\s@])(?:@\{[\w-]+\}|\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};@\s]|\s+(?!\s))*?(?=\s*\{)/,inside:{variable:/@+[\w-]+/}},property:/(?:@\{[\w-]+\}|[\w-])+(?:\+_?)?(?=\s*:)/,operator:/[+\-*\/]/}),x.languages.insertBefore("less","property",{variable:[{pattern:/@[\w-]+\s*:/,inside:{punctuation:/:/}},/@@?[\w-]+/],"mixin-usage":{pattern:/([{;]\s*)[.#](?!\d)[\w-].*?(?=[(;])/,lookbehind:!0,alias:"function"}}),x.languages.makefile={comment:{pattern:/(^|[^\\])#(?:\\(?:\r\n|[\s\S])|[^\\\r\n])*/,lookbehind:!0},string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"builtin-target":{pattern:/\.[A-Z][^:#=\s]+(?=\s*:(?!=))/,alias:"builtin"},target:{pattern:/^(?:[^:=\s]|[ \t]+(?![\s:]))+(?=\s*:(?!=))/m,alias:"symbol",inside:{variable:/\$+(?:(?!\$)[^(){}:#=\s]+|(?=[({]))/}},variable:/\$+(?:(?!\$)[^(){}:#=\s]+|\([@*%<^+?][DF]\)|(?=[({]))/,keyword:/-include\b|\b(?:define|else|endef|endif|export|ifn?def|ifn?eq|include|override|private|sinclude|undefine|unexport|vpath)\b/,function:{pattern:/(\()(?:abspath|addsuffix|and|basename|call|dir|error|eval|file|filter(?:-out)?|findstring|firstword|flavor|foreach|guile|if|info|join|lastword|load|notdir|or|origin|patsubst|realpath|shell|sort|strip|subst|suffix|value|warning|wildcard|word(?:list|s)?)(?=[ \t])/,lookbehind:!0},operator:/(?:::|[?:+!])?=|[|@]/,punctuation:/[:;(){}]/},x.languages.objectivec=x.languages.extend("c",{string:{pattern:/@?"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,greedy:!0},keyword:/\b(?:asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|in|inline|int|long|register|return|self|short|signed|sizeof|static|struct|super|switch|typedef|typeof|union|unsigned|void|volatile|while)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,operator:/-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/}),delete x.languages.objectivec["class-name"],x.languages.objc=x.languages.objectivec,x.languages.ocaml={comment:{pattern:/\(\*[\s\S]*?\*\)/,greedy:!0},char:{pattern:/'(?:[^\\\r\n']|\\(?:.|[ox]?[0-9a-f]{1,3}))'/i,greedy:!0},string:[{pattern:/"(?:\\(?:[\s\S]|\r\n)|[^\\\r\n"])*"/,greedy:!0},{pattern:/\{([a-z_]*)\|[\s\S]*?\|\1\}/,greedy:!0}],number:[/\b(?:0b[01][01_]*|0o[0-7][0-7_]*)\b/i,/\b0x[a-f0-9][a-f0-9_]*(?:\.[a-f0-9_]*)?(?:p[+-]?\d[\d_]*)?(?!\w)/i,/\b\d[\d_]*(?:\.[\d_]*)?(?:e[+-]?\d[\d_]*)?(?!\w)/i],directive:{pattern:/\B#\w+/,alias:"property"},label:{pattern:/\B~\w+/,alias:"property"},"type-variable":{pattern:/\B'\w+/,alias:"function"},variant:{pattern:/`\w+/,alias:"symbol"},keyword:/\b(?:as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|match|method|module|mutable|new|nonrec|object|of|open|private|rec|sig|struct|then|to|try|type|val|value|virtual|when|where|while|with)\b/,boolean:/\b(?:false|true)\b/,"operator-like-punctuation":{pattern:/\[[<>|]|[>|]\]|\{<|>\}/,alias:"punctuation"},operator:/\.[.~]|:[=>]|[=<>@^|&+\-*\/$%!?~][!$%&*+\-.\/:<=>?@^|~]*|\b(?:and|asr|land|lor|lsl|lsr|lxor|mod|or)\b/,punctuation:/;;|::|[(){}\[\].,:;#]|\b_\b/},x.languages.python={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0,greedy:!0},"string-interpolation":{pattern:/(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,lookbehind:!0,inside:{"format-spec":{pattern:/(:)[^:(){}]+(?=\}$)/,lookbehind:!0},"conversion-option":{pattern:/![sra](?=[:}]$)/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}},"triple-quoted-string":{pattern:/(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,greedy:!0,alias:"string"},string:{pattern:/(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,greedy:!0},function:{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)\w+/i,lookbehind:!0},decorator:{pattern:/(^[\t ]*)@\w+(?:\.\w+)*/m,lookbehind:!0,alias:["annotation","punctuation"],inside:{punctuation:/\./}},keyword:/\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,builtin:/\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,boolean:/\b(?:False|None|True)\b/,number:/\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,operator:/[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,punctuation:/[{}[\];(),.:]/},x.languages.python["string-interpolation"].inside.interpolation.inside.rest=x.languages.python,x.languages.py=x.languages.python,x.languages.reason=x.languages.extend("clike",{string:{pattern:/"(?:\\(?:\r\n|[\s\S])|[^\\\r\n"])*"/,greedy:!0},"class-name":/\b[A-Z]\w*/,keyword:/\b(?:and|as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|method|module|mutable|new|nonrec|object|of|open|or|private|rec|sig|struct|switch|then|to|try|type|val|virtual|when|while|with)\b/,operator:/\.{3}|:[:=]|\|>|->|=(?:==?|>)?|<=?|>=?|[|^?'#!~`]|[+\-*\/]\.?|\b(?:asr|land|lor|lsl|lsr|lxor|mod)\b/}),x.languages.insertBefore("reason","class-name",{char:{pattern:/'(?:\\x[\da-f]{2}|\\o[0-3][0-7][0-7]|\\\d{3}|\\.|[^'\\\r\n])'/,greedy:!0},constructor:/\b[A-Z]\w*\b(?!\s*\.)/,label:{pattern:/\b[a-z]\w*(?=::)/,alias:"symbol"}}),delete x.languages.reason.function,function(I){I.languages.sass=I.languages.extend("css",{comment:{pattern:/^([ \t]*)\/[\/*].*(?:(?:\r?\n|\r)\1[ \t].+)*/m,lookbehind:!0,greedy:!0}}),I.languages.insertBefore("sass","atrule",{"atrule-line":{pattern:/^(?:[ \t]*)[@+=].+/m,greedy:!0,inside:{atrule:/(?:@[\w-]+|[+=])/}}}),delete I.languages.sass.atrule;var H=/\$[-\w]+|#\{\$[-\w]+\}/,$=[/[+*\/%]|[=!]=|<=?|>=?|\b(?:and|not|or)\b/,{pattern:/(\s)-(?=\s)/,lookbehind:!0}];I.languages.insertBefore("sass","property",{"variable-line":{pattern:/^[ \t]*\$.+/m,greedy:!0,inside:{punctuation:/:/,variable:H,operator:$}},"property-line":{pattern:/^[ \t]*(?:[^:\s]+ *:.*|:[^:\s].*)/m,greedy:!0,inside:{property:[/[^:\s]+(?=\s*:)/,{pattern:/(:)[^:\s]+/,lookbehind:!0}],punctuation:/:/,variable:H,operator:$,important:I.languages.sass.important}}}),delete I.languages.sass.property,delete I.languages.sass.important,I.languages.insertBefore("sass","punctuation",{selector:{pattern:/^([ \t]*)\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*(?:,(?:\r?\n|\r)\1[ \t]+\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*)*/m,lookbehind:!0,greedy:!0}})}(x),x.languages.scss=x.languages.extend("css",{comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,lookbehind:!0},atrule:{pattern:/@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/,inside:{rule:/@[\w-]+/}},url:/(?:[-a-z]+-)?url(?=\()/i,selector:{pattern:/(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]))/,inside:{parent:{pattern:/&/,alias:"important"},placeholder:/%[-\w]+/,variable:/\$[-\w]+|#\{\$[-\w]+\}/}},property:{pattern:/(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/,inside:{variable:/\$[-\w]+|#\{\$[-\w]+\}/}}}),x.languages.insertBefore("scss","atrule",{keyword:[/@(?:content|debug|each|else(?: if)?|extend|for|forward|function|if|import|include|mixin|return|use|warn|while)\b/i,{pattern:/( )(?:from|through)(?= )/,lookbehind:!0}]}),x.languages.insertBefore("scss","important",{variable:/\$[-\w]+|#\{\$[-\w]+\}/}),x.languages.insertBefore("scss","function",{"module-modifier":{pattern:/\b(?:as|hide|show|with)\b/i,alias:"keyword"},placeholder:{pattern:/%[-\w]+/,alias:"selector"},statement:{pattern:/\B!(?:default|optional)\b/i,alias:"keyword"},boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"},operator:{pattern:/(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|not|or)(?=\s)/,lookbehind:!0}}),x.languages.scss.atrule.inside.rest=x.languages.scss,function(I){var H={pattern:/(\b\d+)(?:%|[a-z]+)/,lookbehind:!0},$={pattern:/(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,lookbehind:!0},Y={comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,lookbehind:!0},url:{pattern:/\burl\((["']?).*?\1\)/i,greedy:!0},string:{pattern:/("|')(?:(?!\1)[^\\\r\n]|\\(?:\r\n|[\s\S]))*\1/,greedy:!0},interpolation:null,func:null,important:/\B!(?:important|optional)\b/i,keyword:{pattern:/(^|\s+)(?:(?:else|for|if|return|unless)(?=\s|$)|@[\w-]+)/,lookbehind:!0},hexcode:/#[\da-f]{3,6}/i,color:[/\b(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)\b/i,{pattern:/\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,inside:{unit:H,number:$,function:/[\w-]+(?=\()/,punctuation:/[(),]/}}],entity:/\\[\da-f]{1,8}/i,unit:H,boolean:/\b(?:false|true)\b/,operator:[/~|[+!\/%<>?=]=?|[-:]=|\*[*=]?|\.{2,3}|&&|\|\||\B-\B|\b(?:and|in|is(?: a| defined| not|nt)?|not|or)\b/],number:$,punctuation:/[{}()\[\];:,]/};Y.interpolation={pattern:/\{[^\r\n}:]+\}/,alias:"variable",inside:{delimiter:{pattern:/^\{|\}$/,alias:"punctuation"},rest:Y}},Y.func={pattern:/[\w-]+\([^)]*\).*/,inside:{function:/^[^(]+/,rest:Y}},I.languages.stylus={"atrule-declaration":{pattern:/(^[ \t]*)@.+/m,lookbehind:!0,inside:{atrule:/^@[\w-]+/,rest:Y}},"variable-declaration":{pattern:/(^[ \t]*)[\w$-]+\s*.?=[ \t]*(?:\{[^{}]*\}|\S.*|$)/m,lookbehind:!0,inside:{variable:/^\S+/,rest:Y}},statement:{pattern:/(^[ \t]*)(?:else|for|if|return|unless)[ \t].+/m,lookbehind:!0,inside:{keyword:/^\S+/,rest:Y}},"property-declaration":{pattern:/((?:^|\{)([ \t]*))(?:[\w-]|\{[^}\r\n]+\})+(?:\s*:\s*|[ \t]+)(?!\s)[^{\r\n]*(?:;|[^{\r\n,]$(?!(?:\r?\n|\r)(?:\{|\2[ \t])))/m,lookbehind:!0,inside:{property:{pattern:/^[^\s:]+/,inside:{interpolation:Y.interpolation}},rest:Y}},selector:{pattern:/(^[ \t]*)(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\)|(?![\w-]))|\{[^}\r\n]+\})+)(?:(?:\r?\n|\r)(?:\1(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\)|(?![\w-]))|\{[^}\r\n]+\})+)))*(?:,$|\{|(?=(?:\r?\n|\r)(?:\{|\1[ \t])))/m,lookbehind:!0,inside:{interpolation:Y.interpolation,comment:Y.comment,punctuation:/[{},]/}},func:Y.func,string:Y.string,comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,lookbehind:!0,greedy:!0},interpolation:Y.interpolation,punctuation:/[{}()\[\];:.]/}}(x),function(I){var H=I.util.clone(I.languages.typescript);I.languages.tsx=I.languages.extend("jsx",H),delete I.languages.tsx.parameter,delete I.languages.tsx["literal-property"];var $=I.languages.tsx.tag;$.pattern=RegExp(/(^|[^\w$]|(?=<\/))/.source+"(?:"+$.pattern.source+")",$.pattern.flags),$.lookbehind=!0}(x),x.languages.wasm={comment:[/\(;[\s\S]*?;\)/,{pattern:/;;.*/,greedy:!0}],string:{pattern:/"(?:\\[\s\S]|[^"\\])*"/,greedy:!0},keyword:[{pattern:/\b(?:align|offset)=/,inside:{operator:/=/}},{pattern:/\b(?:(?:f32|f64|i32|i64)(?:\.(?:abs|add|and|ceil|clz|const|convert_[su]\/i(?:32|64)|copysign|ctz|demote\/f64|div(?:_[su])?|eqz?|extend_[su]\/i32|floor|ge(?:_[su])?|gt(?:_[su])?|le(?:_[su])?|load(?:(?:8|16|32)_[su])?|lt(?:_[su])?|max|min|mul|neg?|nearest|or|popcnt|promote\/f32|reinterpret\/[fi](?:32|64)|rem_[su]|rot[lr]|shl|shr_[su]|sqrt|store(?:8|16|32)?|sub|trunc(?:_[su]\/f(?:32|64))?|wrap\/i64|xor))?|memory\.(?:grow|size))\b/,inside:{punctuation:/\./}},/\b(?:anyfunc|block|br(?:_if|_table)?|call(?:_indirect)?|data|drop|elem|else|end|export|func|get_(?:global|local)|global|if|import|local|loop|memory|module|mut|nop|offset|param|result|return|select|set_(?:global|local)|start|table|tee_local|then|type|unreachable)\b/],variable:/\$[\w!#$%&'*+\-./:<=>?@\\^`|~]+/,number:/[+-]?\b(?:\d(?:_?\d)*(?:\.\d(?:_?\d)*)?(?:[eE][+-]?\d(?:_?\d)*)?|0x[\da-fA-F](?:_?[\da-fA-F])*(?:\.[\da-fA-F](?:_?[\da-fA-D])*)?(?:[pP][+-]?\d(?:_?\d)*)?)\b|\binf\b|\bnan(?::0x[\da-fA-F](?:_?[\da-fA-D])*)?\b/,punctuation:/[()]/};var R=x,P={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},j=P,N={Prism:R,theme:j};function F(I,H,$){return H in I?Object.defineProperty(I,H,{value:$,enumerable:!0,configurable:!0,writable:!0}):I[H]=$,I}function A(){return A=Object.assign||function(I){for(var H=1;H<arguments.length;H++){var $=arguments[H];for(var Y in $)Object.prototype.hasOwnProperty.call($,Y)&&(I[Y]=$[Y])}return I},A.apply(this,arguments)}var k=/\r\n|\r|\n/,z=function(I){I.length===0?I.push({types:["plain"],content:`
`,empty:!0}):I.length===1&&I[0].content===""&&(I[0].content=`
`,I[0].empty=!0)},K=function(I,H){var $=I.length;return $>0&&I[$-1]===H?I:I.concat(H)},ee=function(I){for(var H=[[]],$=[I],Y=[0],X=[I.length],Re=0,Fe=0,at=[],et=[at];Fe>-1;){for(;(Re=Y[Fe]++)<X[Fe];){var Ke=void 0,ot=H[Fe],te=$[Fe],fe=te[Re];if(typeof fe=="string"?(ot=Fe>0?ot:["plain"],Ke=fe):(ot=K(ot,fe.type),fe.alias&&(ot=K(ot,fe.alias)),Ke=fe.content),typeof Ke!="string"){Fe++,H.push(ot),$.push(Ke),Y.push(0),X.push(Ke.length);continue}var pe=Ke.split(k),me=pe.length;at.push({types:ot,content:pe[0]});for(var Ie=1;Ie<me;Ie++)z(at),et.push(at=[]),at.push({types:ot,content:pe[Ie]})}Fe--,H.pop(),$.pop(),Y.pop(),X.pop()}return z(at),et},J=function(I,H){var $=I.plain,Y=Object.create(null),X=I.styles.reduce(function(Re,Fe){var at=Fe.languages,et=Fe.style;return at&&!at.includes(H)||Fe.types.forEach(function(Ke){var ot=A({},Re[Ke],et);Re[Ke]=ot}),Re},Y);return X.root=$,X.plain=A({},$,{backgroundColor:null}),X};function ce(I,H){var $={};for(var Y in I)Object.prototype.hasOwnProperty.call(I,Y)&&H.indexOf(Y)===-1&&($[Y]=I[Y]);return $}var Te=function(I){function H(){for(var $=this,Y=[],X=arguments.length;X--;)Y[X]=arguments[X];I.apply(this,Y),F(this,"getThemeDict",function(Re){if($.themeDict!==void 0&&Re.theme===$.prevTheme&&Re.language===$.prevLanguage)return $.themeDict;$.prevTheme=Re.theme,$.prevLanguage=Re.language;var Fe=Re.theme?J(Re.theme,Re.language):void 0;return $.themeDict=Fe}),F(this,"getLineProps",function(Re){var Fe=Re.key,at=Re.className,et=Re.style,Ke=ce(Re,["key","className","style","line"]),ot=Ke,te=A({},ot,{className:"token-line",style:void 0,key:void 0}),fe=$.getThemeDict($.props);return fe!==void 0&&(te.style=fe.plain),et!==void 0&&(te.style=te.style!==void 0?A({},te.style,et):et),Fe!==void 0&&(te.key=Fe),at&&(te.className+=" "+at),te}),F(this,"getStyleForToken",function(Re){var Fe=Re.types,at=Re.empty,et=Fe.length,Ke=$.getThemeDict($.props);if(Ke!==void 0){{if(et===1&&Fe[0]==="plain")return at?{display:"inline-block"}:void 0;if(et===1&&!at)return Ke[Fe[0]]}var ot=at?{display:"inline-block"}:{},te=Fe.map(function(fe){return Ke[fe]});return Object.assign.apply(Object,[ot].concat(te))}}),F(this,"getTokenProps",function(Re){var Fe=Re.key,at=Re.className,et=Re.style,Ke=Re.token,ot=ce(Re,["key","className","style","token"]),te=ot,fe=A({},te,{className:"token "+Ke.types.join(" "),children:Ke.content,style:$.getStyleForToken(Ke),key:void 0});return et!==void 0&&(fe.style=fe.style!==void 0?A({},fe.style,et):et),Fe!==void 0&&(fe.key=Fe),at&&(fe.className+=" "+at),fe}),F(this,"tokenize",function(Re,Fe,at,et){var Ke={code:Fe,grammar:at,language:et,tokens:[]};Re.hooks.run("before-tokenize",Ke);var ot=Ke.tokens=Re.tokenize(Ke.code,Ke.grammar,Ke.language);return Re.hooks.run("after-tokenize",Ke),ot})}return I&&(H.__proto__=I),H.prototype=Object.create(I&&I.prototype),H.prototype.constructor=H,H.prototype.render=function(){var Y=this.props,X=Y.Prism,Re=Y.language,Fe=Y.code,at=Y.children,et=this.getThemeDict(this.props),Ke=X.languages[Re],ot=Ke!==void 0?this.tokenize(X,Fe,Ke,Re):[Fe],te=ee(ot);return at({tokens:te,className:"prism-code language-"+Re,style:et!==void 0?et.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},H}(a.Component),Oe=Te,Ne=e(116);function _e(){return _e=Object.assign?Object.assign.bind():function(I){for(var H=1;H<arguments.length;H++){var $=arguments[H];for(var Y in $)Object.prototype.hasOwnProperty.call($,Y)&&(I[Y]=$[Y])}return I},_e.apply(this,arguments)}function je(I,H){return L(I)||O(I,H)||re(I,H)||q()}function q(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function re(I,H){if(I){if(typeof I=="string")return ae(I,H);var $=Object.prototype.toString.call(I).slice(8,-1);if($==="Object"&&I.constructor&&($=I.constructor.name),$==="Map"||$==="Set")return Array.from(I);if($==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test($))return ae(I,H)}}function ae(I,H){(H==null||H>I.length)&&(H=I.length);for(var $=0,Y=new Array(H);$<H;$++)Y[$]=I[$];return Y}function O(I,H){var $=I==null?null:typeof Symbol!="undefined"&&I[Symbol.iterator]||I["@@iterator"];if($!=null){var Y,X,Re,Fe,at=[],et=!0,Ke=!1;try{if(Re=($=$.call(I)).next,H===0){if(Object($)!==$)return;et=!1}else for(;!(et=(Y=Re.call($)).done)&&(at.push(Y.value),at.length!==H);et=!0);}catch(ot){Ke=!0,X=ot}finally{try{if(!et&&$.return!=null&&(Fe=$.return(),Object(Fe)!==Fe))return}finally{if(Ke)throw X}}return at}}function L(I){if(Array.isArray(I))return I}var W={acss:"css",axml:"markup"},V=function(H){var $=H.children,Y=$===void 0?"":$,X=H.lang,Re=H.highlightLines,Fe=Re===void 0?[]:Re,at=(0,a.useRef)(),et=(0,a.useState)(!1),Ke=je(et,2),ot=Ke[0],te=Ke[1],fe=(0,a.useState)(Y),pe=je(fe,2),me=pe[0],Ie=pe[1],ue=(0,b.WF)(),ve=ue.themeConfig;return(0,a.useEffect)(function(){var Ee=/shellscript|shell|bash|sh|zsh/.test(X);if(Ee){var le=Y.replace(/^(\$|>)\s/gm,"");Ie(le)}},[X,Y]),a.createElement("div",{className:"dumi-default-source-code"},a.createElement(Ne.CopyToClipboard,{text:me,onCopy:function(){te(!0),clearTimeout(at.current),at.current=window.setTimeout(function(){return te(!1)},2e3)}},a.createElement("button",{type:"button",className:"dumi-default-source-code-copy","data-copied":ot||void 0},ot?a.createElement(o.r,null):a.createElement(h,null))),a.createElement(Oe,_e({},N,{code:Y.trim(),language:W[X]||X,theme:void 0}),function(Ee){var le=Ee.className,ye=Ee.style,Be=Ee.tokens,oe=Ee.getLineProps,he=Ee.getTokenProps;return a.createElement("pre",{className:le,style:ye},Be.map(function(Ae,Ue){return a.createElement("div",{key:String(Ue),className:E()({highlighted:Fe.includes(Ue+1),wrap:ve.showLineNum})},ve.showLineNum&&a.createElement("span",{className:"token-line-num"},Ue+1),a.createElement("div",_e({},oe({line:Ae,key:Ue}),{className:E()({"line-cell":ve.showLineNum})}),Ae.map(function(He,it){return a.createElement("span",he({token:He,key:it}))})))}))}))},G=V},49558:function(s,v,e){"use strict";e.d(v,{r:function(){return g}});var o=e(71062),a=Object.defineProperty,r=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,d=(p,m,E)=>m in p?a(p,m,{enumerable:!0,configurable:!0,writable:!0,value:E}):p[m]=E,f=(p,m)=>{for(var E in m||(m={}))l.call(m,E)&&d(p,E,m[E]);if(r)for(var E of r(m))i.call(m,E)&&d(p,E,m[E]);return p};const g=p=>o.createElement("svg",f({viewBox:"64 64 896 896"},p),o.createElement("path",{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"}));var h="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNOTEyIDE5MGgtNjkuOWMtOS44IDAtMTkuMSA0LjUtMjUuMSAxMi4yTDQwNC43IDcyNC41IDIwNyA0NzRhMzIgMzIgMCAwIDAtMjUuMS0xMi4ySDExMmMtNi43IDAtMTAuNCA3LjctNi4zIDEyLjlsMjczLjkgMzQ3YzEyLjggMTYuMiAzNy40IDE2LjIgNTAuMyAwbDQ4OC40LTYxOC45YzQuMS01LjEuNC0xMi44LTYuMy0xMi44eiIvPjwvc3ZnPg=="},13291:function(s,v,e){"use strict";e.d(v,{Il:function(){return r},Ov:function(){return l}});var o=e(71062),a=null,r=o.createContext({});function l(){return o.useContext(r)}function i(){var h=useLocation(),p=l(),m=p.clientRoutes,E=matchRoutes(m,h.pathname);return E||[]}function d(){var h,p=i().slice(-1),m=((h=p[0])===null||h===void 0?void 0:h.route)||{},E=m.element,b=_objectWithoutProperties(m,a);return b}function f(){var h=useRouteData(),p=l();return{data:p.serverLoaderData[h.route.id]}}function g(){var h=useRouteData(),p=l();return{data:p.clientLoaderData[h.route.id]}}},68472:function(s,v,e){"use strict";e.d(v,{Q:function(){return r},X:function(){return a}});var o=e(71062),a=o.createContext(void 0);function r(){return o.useContext(a)}},12124:function(s,v){var e,o;(function(){"use strict";var a={}.hasOwnProperty,r="[native code]";function l(){for(var i=[],d=0;d<arguments.length;d++){var f=arguments[d];if(f){var g=typeof f;if(g==="string"||g==="number")i.push(f);else if(Array.isArray(f)){if(f.length){var h=l.apply(null,f);h&&i.push(h)}}else if(g==="object"){if(f.toString!==Object.prototype.toString&&!f.toString.toString().includes("[native code]")){i.push(f.toString());continue}for(var p in f)a.call(f,p)&&f[p]&&i.push(p)}}}return i.join(" ")}s.exports?(l.default=l,s.exports=l):(e=[],o=function(){return l}.apply(v,e),o!==void 0&&(s.exports=o))})()},17469:function(s,v,e){"use strict";Object.defineProperty(v,"__esModule",{value:!0}),v.getParameters=void 0;var o=e(88211);function a(l){return o.compressToBase64(l).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}function r(l){return a(JSON.stringify(l))}v.getParameters=r},20551:function(s,v,e){"use strict";var o;o=!0,v.Z=void 0;var a=e(17469);v.Z=a.getParameters},25769:function(s,v,e){"use strict";var o=e(98040),a={"text/plain":"Text","text/html":"Url",default:"Text"},r="Copy to clipboard: #{key}, Enter";function l(d){var f=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return d.replace(/#{\s*key\s*}/g,f)}function i(d,f){var g,h,p,m,E,b,w=!1;f||(f={}),g=f.debug||!1;try{p=o(),m=document.createRange(),E=document.getSelection(),b=document.createElement("span"),b.textContent=d,b.ariaHidden="true",b.style.all="unset",b.style.position="fixed",b.style.top=0,b.style.clip="rect(0, 0, 0, 0)",b.style.whiteSpace="pre",b.style.webkitUserSelect="text",b.style.MozUserSelect="text",b.style.msUserSelect="text",b.style.userSelect="text",b.addEventListener("copy",function(R){if(R.stopPropagation(),f.format)if(R.preventDefault(),typeof R.clipboardData=="undefined"){g&&console.warn("unable to use e.clipboardData"),g&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var P=a[f.format]||a.default;window.clipboardData.setData(P,d)}else R.clipboardData.clearData(),R.clipboardData.setData(f.format,d);f.onCopy&&(R.preventDefault(),f.onCopy(R.clipboardData))}),document.body.appendChild(b),m.selectNodeContents(b),E.addRange(m);var x=document.execCommand("copy");if(!x)throw new Error("copy command was unsuccessful");w=!0}catch(R){g&&console.error("unable to copy using execCommand: ",R),g&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(f.format||"text",d),f.onCopy&&f.onCopy(window.clipboardData),w=!0}catch(P){g&&console.error("unable to copy using clipboardData: ",P),g&&console.error("falling back to prompt"),h=l("message"in f?f.message:r),window.prompt(h,d)}}finally{E&&(typeof E.removeRange=="function"?E.removeRange(m):E.removeAllRanges()),b&&document.body.removeChild(b),p()}return w}s.exports=i},81820:function(s,v,e){var o=e(80754),a=e(3129),r=TypeError;s.exports=function(l){if(o(l))return l;throw r(a(l)+" is not a function")}},10388:function(s,v,e){var o=e(33590),a=e(3129),r=TypeError;s.exports=function(l){if(o(l))return l;throw r(a(l)+" is not a constructor")}},12789:function(s,v,e){var o=e(52483).has;s.exports=function(a){return o(a),a}},44493:function(s,v,e){var o=e(80754),a=String,r=TypeError;s.exports=function(l){if(typeof l=="object"||o(l))return l;throw r("Can't set "+a(l)+" as a prototype")}},36006:function(s,v,e){var o=e(2320).has;s.exports=function(a){return o(a),a}},54310:function(s,v,e){var o=e(8803).has;s.exports=function(a){return o(a),a}},8207:function(s,v,e){var o=e(15764).has;s.exports=function(a){return o(a),a}},82205:function(s,v,e){var o=e(62515),a=e(57369),r=e(88483),l=e(5734),i=e(57619),d=e(29502),f=d("asyncDispose"),g=d("dispose"),h=o([].push),p=function(E,b){return b=="async-dispose"&&i(E,f)||i(E,g)},m=function(E,b,w){return a(w||p(E,b),E)};s.exports=function(E,b,w,x){var R;if(x)l(b)?R=m(void 0,w,x):R=m(r(b),w,x);else{if(l(b))return;R=m(b,w)}h(E.stack,R)}},64748:function(s,v,e){var o=e(29502),a=e(64847),r=e(9227).f,l=o("unscopables"),i=Array.prototype;i[l]==null&&r(i,l,{configurable:!0,value:a(null)}),s.exports=function(d){i[l][d]=!0}},22275:function(s,v,e){var o=e(34684),a=TypeError;s.exports=function(r,l){if(o(l,r))return r;throw a("Incorrect invocation")}},88483:function(s,v,e){var o=e(28180),a=String,r=TypeError;s.exports=function(l){if(o(l))return l;throw r(a(l)+" is not an object")}},55920:function(s){s.exports=typeof ArrayBuffer!="undefined"&&typeof DataView!="undefined"},86874:function(s,v,e){var o=e(56561),a=e(30667),r=TypeError;s.exports=o(ArrayBuffer.prototype,"byteLength","get")||function(l){if(a(l)!="ArrayBuffer")throw r("ArrayBuffer expected");return l.byteLength}},3766:function(s,v,e){var o=e(62515),a=e(86874),r=o(ArrayBuffer.prototype.slice);s.exports=function(l){if(a(l)!==0)return!1;try{return r(l,0,0),!1}catch(i){return!0}}},8930:function(s,v,e){var o=e(50486);s.exports=o(function(){if(typeof ArrayBuffer=="function"){var a=new ArrayBuffer(8);Object.isExtensible(a)&&Object.defineProperty(a,"a",{value:8})}})},74380:function(s,v,e){var o=e(95098),a=e(62515),r=e(56561),l=e(41122),i=e(3766),d=e(86874),f=e(12411),g=o.TypeError,h=o.structuredClone,p=o.ArrayBuffer,m=o.DataView,E=Math.min,b=p.prototype,w=m.prototype,x=a(b.slice),R=r(b,"resizable","get"),P=r(b,"maxByteLength","get"),j=a(w.getInt8),N=a(w.setInt8);s.exports=f&&function(F,A,k){var z=d(F),K=A===void 0?z:E(l(A),z),ee=!R||!R(F);if(i(F))throw g("ArrayBuffer is detached");var J=h(F,{transfer:[F]});if(z==K&&(k||ee))return J;if(!k||ee)return x(J,0,K);for(var ce=new p(K,P&&{maxByteLength:P(J)}),Te=new m(J),Oe=new m(ce),Ne=0;Ne<K;Ne++)N(Oe,Ne,j(Te,Ne));return ce}},32124:function(s,v,e){"use strict";var o=e(55920),a=e(75903),r=e(95098),l=e(80754),i=e(28180),d=e(15415),f=e(29087),g=e(3129),h=e(78401),p=e(90014),m=e(75678),E=e(34684),b=e(91476),w=e(12147),x=e(29502),R=e(50147),P=e(39675),j=P.enforce,N=P.get,F=r.Int8Array,A=F&&F.prototype,k=r.Uint8ClampedArray,z=k&&k.prototype,K=F&&b(F),ee=A&&b(A),J=Object.prototype,ce=r.TypeError,Te=x("toStringTag"),Oe=R("TYPED_ARRAY_TAG"),Ne="TypedArrayConstructor",_e=o&&!!w&&f(r.opera)!=="Opera",je=!1,q,re,ae,O={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},L={BigInt64Array:8,BigUint64Array:8},W=function(Re){if(!i(Re))return!1;var Fe=f(Re);return Fe==="DataView"||d(O,Fe)||d(L,Fe)},V=function(X){var Re=b(X);if(i(Re)){var Fe=N(Re);return Fe&&d(Fe,Ne)?Fe[Ne]:V(Re)}},G=function(X){if(!i(X))return!1;var Re=f(X);return d(O,Re)||d(L,Re)},I=function(X){if(G(X))return X;throw ce("Target is not a typed array")},H=function(X){if(l(X)&&(!w||E(K,X)))return X;throw ce(g(X)+" is not a typed array constructor")},$=function(X,Re,Fe,at){if(a){if(Fe)for(var et in O){var Ke=r[et];if(Ke&&d(Ke.prototype,X))try{delete Ke.prototype[X]}catch(ot){try{Ke.prototype[X]=Re}catch(te){}}}(!ee[X]||Fe)&&p(ee,X,Fe?Re:_e&&A[X]||Re,at)}},Y=function(X,Re,Fe){var at,et;if(a){if(w){if(Fe){for(at in O)if(et=r[at],et&&d(et,X))try{delete et[X]}catch(Ke){}}if(!K[X]||Fe)try{return p(K,X,Fe?Re:_e&&K[X]||Re)}catch(Ke){}else return}for(at in O)et=r[at],et&&(!et[X]||Fe)&&p(et,X,Re)}};for(q in O)re=r[q],ae=re&&re.prototype,ae?j(ae)[Ne]=re:_e=!1;for(q in L)re=r[q],ae=re&&re.prototype,ae&&(j(ae)[Ne]=re);if((!_e||!l(K)||K===Function.prototype)&&(K=function(){throw ce("Incorrect invocation")},_e))for(q in O)r[q]&&w(r[q],K);if((!_e||!ee||ee===J)&&(ee=K.prototype,_e))for(q in O)r[q]&&w(r[q].prototype,ee);if(_e&&b(z)!==ee&&w(z,ee),a&&!d(ee,Te)){je=!0,m(ee,Te,{configurable:!0,get:function(){return i(this)?this[Oe]:void 0}});for(q in O)r[q]&&h(r[q],Oe,q)}s.exports={NATIVE_ARRAY_BUFFER_VIEWS:_e,TYPED_ARRAY_TAG:je&&Oe,aTypedArray:I,aTypedArrayConstructor:H,exportTypedArrayMethod:$,exportTypedArrayStaticMethod:Y,getTypedArrayConstructor:V,isView:W,isTypedArray:G,TypedArray:K,TypedArrayPrototype:ee}},72986:function(s,v,e){"use strict";var o=e(57369),a=e(62515),r=e(32331),l=e(33590),i=e(53630),d=e(29290),f=e(27642),g=e(71253),h=e(57619),p=e(86351),m=e(33577),E=e(29502),b=e(73121),w=e(3714).toArray,x=E("asyncIterator"),R=a(p("Array").values),P=a(R([]).next),j=function(){return new N(this)},N=function(F){this.iterator=R(F)};N.prototype.next=function(){return P(this.iterator)},s.exports=function(A){var k=this,z=arguments.length,K=z>1?arguments[1]:void 0,ee=z>2?arguments[2]:void 0;return new(m("Promise"))(function(J){var ce=r(A);K!==void 0&&(K=o(K,ee));var Te=h(ce,x),Oe=Te?void 0:g(ce)||j,Ne=l(k)?new k:[],_e=Te?i(ce,Te):new b(f(d(ce,Oe)));J(w(_e,K,Ne))})}},85117:function(s,v,e){var o=e(69703);s.exports=function(a,r){for(var l=0,i=o(r),d=new a(i);i>l;)d[l]=r[l++];return d}},66795:function(s,v,e){"use strict";var o=e(57369),a=e(62515),r=e(46858),l=e(32331),i=e(69703),d=e(52483),f=d.Map,g=d.get,h=d.has,p=d.set,m=a([].push);s.exports=function(b){for(var w=l(this),x=r(w),R=o(b,arguments.length>1?arguments[1]:void 0),P=new f,j=i(x),N=0,F,A;j>N;N++)A=x[N],F=R(A,N,w),h(P,F)?m(g(P,F),A):p(P,F,[A]);return P}},86198:function(s,v,e){var o=e(57369),a=e(62515),r=e(46858),l=e(32331),i=e(45265),d=e(69703),f=e(64847),g=e(85117),h=Array,p=a([].push);s.exports=function(m,E,b,w){for(var x=l(m),R=r(x),P=o(E,b),j=f(null),N=d(R),F=0,A,k,z;N>F;F++)z=R[F],k=i(P(z,F,x)),k in j?p(j[k],z):j[k]=[z];if(w&&(A=w(x),A!==h))for(k in j)j[k]=g(A,j[k]);return j}},16377:function(s,v,e){var o=e(38805),a=e(68512),r=e(69703),l=function(i){return function(d,f,g){var h=o(d),p=r(h),m=a(g,p),E;if(i&&f!=f){for(;p>m;)if(E=h[m++],E!=E)return!0}else for(;p>m;m++)if((i||m in h)&&h[m]===f)return i||m||0;return!i&&-1}};s.exports={includes:l(!0),indexOf:l(!1)}},95562:function(s,v,e){var o=e(57369),a=e(46858),r=e(32331),l=e(69703),i=function(d){var f=d==1;return function(g,h,p){for(var m=r(g),E=a(m),b=o(h,p),w=l(E),x,R;w-- >0;)if(x=E[w],R=b(x,w,m),R)switch(d){case 0:return x;case 1:return w}return f?-1:void 0}};s.exports={findLast:i(0),findLastIndex:i(1)}},31171:function(s,v,e){var o=e(57369),a=e(62515),r=e(46858),l=e(32331),i=e(69703),d=e(55361),f=a([].push),g=function(h){var p=h==1,m=h==2,E=h==3,b=h==4,w=h==6,x=h==7,R=h==5||w;return function(P,j,N,F){for(var A=l(P),k=r(A),z=o(j,N),K=i(k),ee=0,J=F||d,ce=p?J(P,K):m||x?J(P,0):void 0,Te,Oe;K>ee;ee++)if((R||ee in k)&&(Te=k[ee],Oe=z(Te,ee,A),h))if(p)ce[ee]=Oe;else if(Oe)switch(h){case 3:return!0;case 5:return Te;case 6:return ee;case 2:f(ce,Te)}else switch(h){case 4:return!1;case 7:f(ce,Te)}return w?-1:E||b?b:ce}};s.exports={forEach:g(0),map:g(1),filter:g(2),some:g(3),every:g(4),find:g(5),findIndex:g(6),filterReject:g(7)}},44962:function(s,v,e){"use strict";var o=e(50486);s.exports=function(a,r){var l=[][a];return!!l&&o(function(){l.call(null,r||function(){return 1},1)})}},35659:function(s,v,e){var o=e(81820),a=e(32331),r=e(46858),l=e(69703),i=TypeError,d=function(f){return function(g,h,p,m){o(h);var E=a(g),b=r(E),w=l(E),x=f?w-1:0,R=f?-1:1;if(p<2)for(;;){if(x in b){m=b[x],x+=R;break}if(x+=R,f?x<0:w<=x)throw i("Reduce of empty array with no initial value")}for(;f?x>=0:w>x;x+=R)x in b&&(m=h(m,b[x],x,E));return m}};s.exports={left:d(!1),right:d(!0)}},35172:function(s,v,e){"use strict";var o=e(75903),a=e(45399),r=TypeError,l=Object.getOwnPropertyDescriptor,i=o&&!function(){if(this!==void 0)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(d){return d instanceof TypeError}}();s.exports=i?function(d,f){if(a(d)&&!l(d,"length").writable)throw r("Cannot set read only .length");return d.length=f}:function(d,f){return d.length=f}},51557:function(s,v,e){var o=e(68512),a=e(69703),r=e(31019),l=Array,i=Math.max;s.exports=function(d,f,g){for(var h=a(d),p=o(f,h),m=o(g===void 0?h:g,h),E=l(i(m-p,0)),b=0;p<m;p++,b++)r(E,b,d[p]);return E.length=b,E}},78477:function(s,v,e){var o=e(62515);s.exports=o([].slice)},1534:function(s,v,e){var o=e(45399),a=e(33590),r=e(28180),l=e(29502),i=l("species"),d=Array;s.exports=function(f){var g;return o(f)&&(g=f.constructor,a(g)&&(g===d||o(g.prototype))?g=void 0:r(g)&&(g=g[i],g===null&&(g=void 0))),g===void 0?d:g}},55361:function(s,v,e){var o=e(1534);s.exports=function(a,r){return new(o(a))(r===0?0:r)}},2950:function(s,v,e){var o=e(69703);s.exports=function(a,r){for(var l=o(a),i=new r(l),d=0;d<l;d++)i[d]=a[l-d-1];return i}},20001:function(s,v,e){"use strict";var o=e(62515),a=e(81820),r=e(5734),l=e(69703),i=e(32331),d=e(52483),f=e(66262),g=d.Map,h=d.has,p=d.set,m=o([].push);s.exports=function(b){var w=i(this),x=l(w),R=[],P=new g,j=r(b)?function(k){return k}:a(b),N,F,A;for(N=0;N<x;N++)F=w[N],A=j(F),h(P,A)||p(P,A,F);return f(P,function(k){m(R,k)}),R}},61510:function(s,v,e){var o=e(69703),a=e(1758),r=RangeError;s.exports=function(l,i,d,f){var g=o(l),h=a(d),p=h<0?g+h:h;if(p>=g||p<0)throw r("Incorrect index");for(var m=new i(g),E=0;E<g;E++)m[E]=E===p?f:l[E];return m}},73121:function(s,v,e){"use strict";var o=e(1060),a=e(88483),r=e(64847),l=e(57619),i=e(85231),d=e(39675),f=e(33577),g=e(13488),h=e(489),p=f("Promise"),m="AsyncFromSyncIterator",E=d.set,b=d.getterFor(m),w=function(R,P,j){var N=R.done;p.resolve(R.value).then(function(F){P(h(F,N))},j)},x=function(P){P.type=m,E(this,P)};x.prototype=i(r(g),{next:function(){var P=b(this);return new p(function(j,N){var F=a(o(P.next,P.iterator));w(F,j,N)})},return:function(){var R=b(this).iterator;return new p(function(P,j){var N=l(R,"return");if(N===void 0)return P(h(void 0,!0));var F=a(o(N,R));w(F,P,j)})}}),s.exports=x},39492:function(s,v,e){var o=e(1060),a=e(33577),r=e(57619);s.exports=function(l,i,d,f){try{var g=r(l,"return");if(g)return a("Promise").resolve(o(g,l)).then(function(){i(d)},function(h){f(h)})}catch(h){return f(h)}i(d)}},33270:function(s,v,e){"use strict";var o=e(1060),a=e(1101),r=e(88483),l=e(64847),i=e(78401),d=e(85231),f=e(29502),g=e(39675),h=e(33577),p=e(57619),m=e(13488),E=e(489),b=e(63215),w=h("Promise"),x=f("toStringTag"),R="AsyncIteratorHelper",P="WrapForValidAsyncIterator",j=g.set,N=function(k){var z=!k,K=g.getterFor(k?P:R),ee=function(J){var ce=a(function(){return K(J)}),Te=ce.error,Oe=ce.value;return Te||z&&Oe.done?{exit:!0,value:Te?w.reject(Oe):w.resolve(E(void 0,!0))}:{exit:!1,value:Oe}};return d(l(m),{next:function(){var ce=ee(this),Te=ce.value;if(ce.exit)return Te;var Oe=a(function(){return r(Te.nextHandler(w))}),Ne=Oe.error,_e=Oe.value;return Ne&&(Te.done=!0),Ne?w.reject(_e):w.resolve(_e)},return:function(){var J=ee(this),ce=J.value;if(J.exit)return ce;ce.done=!0;var Te=ce.iterator,Oe,Ne,_e=a(function(){if(ce.inner)try{b(ce.inner.iterator,"normal")}catch(je){return b(Te,"throw",je)}return p(Te,"return")});return Oe=Ne=_e.value,_e.error?w.reject(Ne):Oe===void 0?w.resolve(E(void 0,!0)):(_e=a(function(){return o(Oe,Te)}),Ne=_e.value,_e.error?w.reject(Ne):k?w.resolve(Ne):w.resolve(Ne).then(function(je){return r(je),E(void 0,!0)}))}})},F=N(!0),A=N(!1);i(A,x,"Async Iterator Helper"),s.exports=function(k,z){var K=function(J,ce){ce?(ce.iterator=J.iterator,ce.next=J.next):ce=J,ce.type=z?P:R,ce.nextHandler=k,ce.counter=0,ce.done=!1,j(this,ce)};return K.prototype=z?F:A,K}},39233:function(s,v,e){"use strict";var o=e(1060),a=e(94786),r=function(l,i){return[i,l]};s.exports=function(){return o(a,this,r)}},3714:function(s,v,e){"use strict";var o=e(1060),a=e(81820),r=e(88483),l=e(28180),i=e(64484),d=e(33577),f=e(27642),g=e(39492),h=function(p){var m=p==0,E=p==1,b=p==2,w=p==3;return function(x,R,P){var j=f(x),N=d("Promise"),F=j.iterator,A=j.next,k=0,z=R!==void 0;return(z||!m)&&a(R),new N(function(K,ee){var J=function(Te){g(F,ee,Te,ee)},ce=function(){try{if(z)try{i(k)}catch(Te){J(Te)}N.resolve(r(o(A,F))).then(function(Te){try{if(r(Te).done)m?(P.length=k,K(P)):K(w?!1:b||void 0);else{var Oe=Te.value;try{if(z){var Ne=R(Oe,k),_e=function(je){if(E)ce();else if(b)je?ce():g(F,K,!1,ee);else if(m)try{P[k++]=je,ce()}catch(q){J(q)}else je?g(F,K,w||Oe,ee):ce()};l(Ne)?N.resolve(Ne).then(_e,J):_e(Ne)}else P[k++]=Oe,ce()}catch(je){J(je)}}}catch(je){ee(je)}},ee)}catch(Te){ee(Te)}};ce()})}};s.exports={toArray:h(0),forEach:h(1),every:h(2),some:h(3),find:h(4)}},94786:function(s,v,e){"use strict";var o=e(1060),a=e(81820),r=e(88483),l=e(28180),i=e(27642),d=e(33270),f=e(489),g=e(39492),h=d(function(p){var m=this,E=m.iterator,b=m.mapper;return new p(function(w,x){var R=function(j){m.done=!0,x(j)},P=function(j){g(E,R,j,R)};p.resolve(r(o(m.next,E))).then(function(j){try{if(r(j).done)m.done=!0,w(f(void 0,!0));else{var N=j.value;try{var F=b(N,m.counter++),A=function(k){w(f(k,!1))};l(F)?p.resolve(F).then(A,P):A(F)}catch(k){P(k)}}}catch(k){R(k)}},R)})});s.exports=function(m){return new h(i(this),{mapper:a(m)})}},13488:function(s,v,e){var o=e(95098),a=e(53139),r=e(80754),l=e(64847),i=e(91476),d=e(90014),f=e(29502),g=e(79766),h="USE_FUNCTION_CONSTRUCTOR",p=f("asyncIterator"),m=o.AsyncIterator,E=a.AsyncIteratorPrototype,b,w;if(E)b=E;else if(r(m))b=m.prototype;else if(a[h]||o[h])try{w=i(i(i(Function("return async function*(){}()")()))),i(w)===Object.prototype&&(b=w)}catch(x){}b?g&&(b=l(b)):b={},r(b[p])||d(b,p,function(){return this}),s.exports=b},63590:function(s,v,e){var o=e(1060),a=e(33270);s.exports=a(function(){return o(this.next,this.iterator)},!0)},49429:function(s,v,e){var o=e(88483),a=e(63215);s.exports=function(r,l,i,d){try{return d?l(o(i)[0],i[1]):l(i)}catch(f){a(r,"throw",f)}}},40072:function(s,v,e){var o=e(29502),a=o("iterator"),r=!1;try{var l=0,i={next:function(){return{done:!!l++}},return:function(){r=!0}};i[a]=function(){return this},Array.from(i,function(){throw 2})}catch(d){}s.exports=function(d,f){if(!f&&!r)return!1;var g=!1;try{var h={};h[a]=function(){return{next:function(){return{done:g=!0}}}},d(h)}catch(p){}return g}},30667:function(s,v,e){var o=e(62515),a=o({}.toString),r=o("".slice);s.exports=function(l){return r(a(l),8,-1)}},29087:function(s,v,e){var o=e(16681),a=e(80754),r=e(30667),l=e(29502),i=l("toStringTag"),d=Object,f=r(function(){return arguments}())=="Arguments",g=function(h,p){try{return h[p]}catch(m){}};s.exports=o?r:function(h){var p,m,E;return h===void 0?"Undefined":h===null?"Null":typeof(m=g(p=d(h),i))=="string"?m:f?r(p):(E=r(p))=="Object"&&a(p.callee)?"Arguments":E}},54799:function(s,v,e){"use strict";var o=e(57369),a=e(1060),r=e(81820),l=e(10388),i=e(5734),d=e(60980),f=[].push;s.exports=function(h){var p=arguments.length,m=p>1?arguments[1]:void 0,E,b,w,x;return l(this),E=m!==void 0,E&&r(m),i(h)?new this:(b=[],E?(w=0,x=o(m,p>2?arguments[2]:void 0),d(h,function(R){a(f,b,x(R,w++))})):d(h,f,{that:b}),new this(b))}},37824:function(s,v,e){"use strict";var o=e(78477);s.exports=function(){return new this(o(arguments))}},3889:function(s,v,e){"use strict";var o=e(64847),a=e(75678),r=e(85231),l=e(57369),i=e(22275),d=e(5734),f=e(60980),g=e(54795),h=e(489),p=e(29177),m=e(75903),E=e(49407).fastKey,b=e(39675),w=b.set,x=b.getterFor;s.exports={getConstructor:function(R,P,j,N){var F=R(function(ee,J){i(ee,A),w(ee,{type:P,index:o(null),first:void 0,last:void 0,size:0}),m||(ee.size=0),d(J)||f(J,ee[N],{that:ee,AS_ENTRIES:j})}),A=F.prototype,k=x(P),z=function(ee,J,ce){var Te=k(ee),Oe=K(ee,J),Ne,_e;return Oe?Oe.value=ce:(Te.last=Oe={index:_e=E(J,!0),key:J,value:ce,previous:Ne=Te.last,next:void 0,removed:!1},Te.first||(Te.first=Oe),Ne&&(Ne.next=Oe),m?Te.size++:ee.size++,_e!=="F"&&(Te.index[_e]=Oe)),ee},K=function(ee,J){var ce=k(ee),Te=E(J),Oe;if(Te!=="F")return ce.index[Te];for(Oe=ce.first;Oe;Oe=Oe.next)if(Oe.key==J)return Oe};return r(A,{clear:function(){for(var J=this,ce=k(J),Te=ce.index,Oe=ce.first;Oe;)Oe.removed=!0,Oe.previous&&(Oe.previous=Oe.previous.next=void 0),delete Te[Oe.index],Oe=Oe.next;ce.first=ce.last=void 0,m?ce.size=0:J.size=0},delete:function(ee){var J=this,ce=k(J),Te=K(J,ee);if(Te){var Oe=Te.next,Ne=Te.previous;delete ce.index[Te.index],Te.removed=!0,Ne&&(Ne.next=Oe),Oe&&(Oe.previous=Ne),ce.first==Te&&(ce.first=Oe),ce.last==Te&&(ce.last=Ne),m?ce.size--:J.size--}return!!Te},forEach:function(J){for(var ce=k(this),Te=l(J,arguments.length>1?arguments[1]:void 0),Oe;Oe=Oe?Oe.next:ce.first;)for(Te(Oe.value,Oe.key,this);Oe&&Oe.removed;)Oe=Oe.previous},has:function(J){return!!K(this,J)}}),r(A,j?{get:function(J){var ce=K(this,J);return ce&&ce.value},set:function(J,ce){return z(this,J===0?0:J,ce)}}:{add:function(J){return z(this,J=J===0?0:J,J)}}),m&&a(A,"size",{configurable:!0,get:function(){return k(this).size}}),F},setStrong:function(R,P,j){var N=P+" Iterator",F=x(P),A=x(N);g(R,P,function(k,z){w(this,{type:N,target:k,state:F(k),kind:z,last:void 0})},function(){for(var k=A(this),z=k.kind,K=k.last;K&&K.removed;)K=K.previous;return!k.target||!(k.last=K=K?K.next:k.state.first)?(k.target=void 0,h(void 0,!0)):z=="keys"?h(K.key,!1):z=="values"?h(K.value,!1):h([K.key,K.value],!1)},j?"entries":"values",!j,!0),p(P)}}},68407:function(s,v,e){"use strict";var o=e(62515),a=e(85231),r=e(49407).getWeakData,l=e(22275),i=e(88483),d=e(5734),f=e(28180),g=e(60980),h=e(31171),p=e(15415),m=e(39675),E=m.set,b=m.getterFor,w=h.find,x=h.findIndex,R=o([].splice),P=0,j=function(A){return A.frozen||(A.frozen=new N)},N=function(){this.entries=[]},F=function(A,k){return w(A.entries,function(z){return z[0]===k})};N.prototype={get:function(A){var k=F(this,A);if(k)return k[1]},has:function(A){return!!F(this,A)},set:function(A,k){var z=F(this,A);z?z[1]=k:this.entries.push([A,k])},delete:function(A){var k=x(this.entries,function(z){return z[0]===A});return~k&&R(this.entries,k,1),!!~k}},s.exports={getConstructor:function(A,k,z,K){var ee=A(function(Oe,Ne){l(Oe,J),E(Oe,{type:k,id:P++,frozen:void 0}),d(Ne)||g(Ne,Oe[K],{that:Oe,AS_ENTRIES:z})}),J=ee.prototype,ce=b(k),Te=function(Oe,Ne,_e){var je=ce(Oe),q=r(i(Ne),!0);return q===!0?j(je).set(Ne,_e):q[je.id]=_e,Oe};return a(J,{delete:function(Oe){var Ne=ce(this);if(!f(Oe))return!1;var _e=r(Oe);return _e===!0?j(Ne).delete(Oe):_e&&p(_e,Ne.id)&&delete _e[Ne.id]},has:function(Ne){var _e=ce(this);if(!f(Ne))return!1;var je=r(Ne);return je===!0?j(_e).has(Ne):je&&p(je,_e.id)}}),a(J,z?{get:function(Ne){var _e=ce(this);if(f(Ne)){var je=r(Ne);return je===!0?j(_e).get(Ne):je?je[_e.id]:void 0}},set:function(Ne,_e){return Te(this,Ne,_e)}}:{add:function(Ne){return Te(this,Ne,!0)}}),ee}}},48362:function(s,v,e){"use strict";var o=e(78170),a=e(95098),r=e(62515),l=e(78067),i=e(90014),d=e(49407),f=e(60980),g=e(22275),h=e(80754),p=e(5734),m=e(28180),E=e(50486),b=e(40072),w=e(30544),x=e(94054);s.exports=function(R,P,j){var N=R.indexOf("Map")!==-1,F=R.indexOf("Weak")!==-1,A=N?"set":"add",k=a[R],z=k&&k.prototype,K=k,ee={},J=function(q){var re=r(z[q]);i(z,q,q=="add"?function(O){return re(this,O===0?0:O),this}:q=="delete"?function(ae){return F&&!m(ae)?!1:re(this,ae===0?0:ae)}:q=="get"?function(O){return F&&!m(O)?void 0:re(this,O===0?0:O)}:q=="has"?function(O){return F&&!m(O)?!1:re(this,O===0?0:O)}:function(O,L){return re(this,O===0?0:O,L),this})},ce=l(R,!h(k)||!(F||z.forEach&&!E(function(){new k().entries().next()})));if(ce)K=j.getConstructor(P,R,N,A),d.enable();else if(l(R,!0)){var Te=new K,Oe=Te[A](F?{}:-0,1)!=Te,Ne=E(function(){Te.has(1)}),_e=b(function(q){new k(q)}),je=!F&&E(function(){for(var q=new k,re=5;re--;)q[A](re,re);return!q.has(-0)});_e||(K=P(function(q,re){g(q,z);var ae=x(new k,q,K);return p(re)||f(re,ae[A],{that:ae,AS_ENTRIES:N}),ae}),K.prototype=z,z.constructor=K),(Ne||je)&&(J("delete"),J("has"),N&&J("get")),(je||Oe)&&J(A),F&&z.clear&&delete z.clear}return ee[R]=K,o({global:!0,constructor:!0,forced:K!=k},ee),w(K,R),F||j.setStrong(K,R,N),K}},40768:function(s,v,e){e(20288),e(20404);var o=e(33577),a=e(64847),r=e(28180),l=Object,i=TypeError,d=o("Map"),f=o("WeakMap"),g=function(){this.object=null,this.symbol=null,this.primitives=null,this.objectsByIndex=a(null)};g.prototype.get=function(p,m){return this[p]||(this[p]=m())},g.prototype.next=function(p,m,E){var b=E?this.objectsByIndex[p]||(this.objectsByIndex[p]=new f):this.primitives||(this.primitives=new d),w=b.get(m);return w||b.set(m,w=new g),w};var h=new g;s.exports=function(){var p=h,m=arguments.length,E,b;for(E=0;E<m;E++)r(b=arguments[E])&&(p=p.next(E,b,!0));if(this===l&&p===h)throw i("Composite keys must contain a non-primitive component");for(E=0;E<m;E++)r(b=arguments[E])||(p=p.next(E,b,!1));return p}},11260:function(s,v,e){var o=e(15415),a=e(34801),r=e(48456),l=e(9227);s.exports=function(i,d,f){for(var g=a(d),h=l.f,p=r.f,m=0;m<g.length;m++){var E=g[m];!o(i,E)&&!(f&&o(f,E))&&h(i,E,p(d,E))}}},36311:function(s,v,e){var o=e(50486);s.exports=!o(function(){function a(){}return a.prototype.constructor=null,Object.getPrototypeOf(new a)!==a.prototype})},489:function(s){s.exports=function(v,e){return{value:v,done:e}}},78401:function(s,v,e){var o=e(75903),a=e(9227),r=e(31623);s.exports=o?function(l,i,d){return a.f(l,i,r(1,d))}:function(l,i,d){return l[i]=d,l}},31623:function(s){s.exports=function(v,e){return{enumerable:!(v&1),configurable:!(v&2),writable:!(v&4),value:e}}},31019:function(s,v,e){"use strict";var o=e(45265),a=e(9227),r=e(31623);s.exports=function(l,i,d){var f=o(i);f in l?a.f(l,f,r(0,d)):l[f]=d}},75678:function(s,v,e){var o=e(91538),a=e(9227);s.exports=function(r,l,i){return i.get&&o(i.get,l,{getter:!0}),i.set&&o(i.set,l,{setter:!0}),a.f(r,l,i)}},90014:function(s,v,e){var o=e(80754),a=e(9227),r=e(91538),l=e(48109);s.exports=function(i,d,f,g){g||(g={});var h=g.enumerable,p=g.name!==void 0?g.name:d;if(o(f)&&r(f,p,g),g.global)h?i[d]=f:l(d,f);else{try{g.unsafe?i[d]&&(h=!0):delete i[d]}catch(m){}h?i[d]=f:a.f(i,d,{value:f,enumerable:!1,configurable:!g.nonConfigurable,writable:!g.nonWritable})}return i}},85231:function(s,v,e){var o=e(90014);s.exports=function(a,r,l){for(var i in r)o(a,i,r[i],l);return a}},48109:function(s,v,e){var o=e(95098),a=Object.defineProperty;s.exports=function(r,l){try{a(o,r,{value:l,configurable:!0,writable:!0})}catch(i){o[r]=l}return l}},75903:function(s,v,e){var o=e(50486);s.exports=!o(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!=7})},3629:function(s){var v=typeof document=="object"&&document.all,e=typeof v=="undefined"&&v!==void 0;s.exports={all:v,IS_HTMLDDA:e}},67337:function(s,v,e){var o=e(95098),a=e(28180),r=o.document,l=a(r)&&a(r.createElement);s.exports=function(i){return l?r.createElement(i):{}}},64484:function(s){var v=TypeError,e=9007199254740991;s.exports=function(o){if(o>e)throw v("Maximum allowed index exceeded");return o}},30825:function(s){s.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},37915:function(s,v,e){var o=e(1569),a=e(75773);s.exports=!o&&!a&&typeof window=="object"&&typeof document=="object"},31612:function(s){s.exports=typeof Bun=="function"&&Bun&&typeof Bun.version=="string"},1569:function(s){s.exports=typeof Deno=="object"&&Deno&&typeof Deno.version=="object"},56594:function(s,v,e){var o=e(7755);s.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(o)},75773:function(s,v,e){var o=e(97671),a=e(30667);s.exports=typeof o!="undefined"&&a(o)=="process"},7755:function(s){s.exports=typeof navigator!="undefined"&&String(navigator.userAgent)||""},87540:function(s,v,e){var o=e(95098),a=e(7755),r=o.process,l=o.Deno,i=r&&r.versions||l&&l.version,d=i&&i.v8,f,g;d&&(f=d.split("."),g=f[0]>0&&f[0]<4?1:+(f[0]+f[1])),!g&&a&&(f=a.match(/Edge\/(\d+)/),(!f||f[1]>=74)&&(f=a.match(/Chrome\/(\d+)/),f&&(g=+f[1]))),s.exports=g},86351:function(s,v,e){var o=e(95098);s.exports=function(a){return o[a].prototype}},98879:function(s){s.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},25705:function(s,v,e){var o=e(62515),a=Error,r=o("".replace),l=function(f){return String(a(f).stack)}("zxcasd"),i=/\n\s*at [^:]*:[^\n]*/,d=i.test(l);s.exports=function(f,g){if(d&&typeof f=="string"&&!a.prepareStackTrace)for(;g--;)f=r(f,i,"");return f}},57370:function(s,v,e){var o=e(78401),a=e(25705),r=e(11204),l=Error.captureStackTrace;s.exports=function(i,d,f,g){r&&(l?l(i,d):o(i,"stack",a(f,g)))}},11204:function(s,v,e){var o=e(50486),a=e(31623);s.exports=!o(function(){var r=Error("a");return"stack"in r?(Object.defineProperty(r,"stack",a(1,7)),r.stack!==7):!0})},78170:function(s,v,e){var o=e(95098),a=e(48456).f,r=e(78401),l=e(90014),i=e(48109),d=e(11260),f=e(78067);s.exports=function(g,h){var p=g.target,m=g.global,E=g.stat,b,w,x,R,P,j;if(m?w=o:E?w=o[p]||i(p,{}):w=(o[p]||{}).prototype,w)for(x in h){if(P=h[x],g.dontCallGetSet?(j=a(w,x),R=j&&j.value):R=w[x],b=f(m?x:p+(E?".":"#")+x,g.forced),!b&&R!==void 0){if(typeof P==typeof R)continue;d(P,R)}(g.sham||R&&R.sham)&&r(P,"sham",!0),l(w,x,P,g)}}},50486:function(s){s.exports=function(v){try{return!!v()}catch(e){return!0}}},54339:function(s,v,e){var o=e(50486);s.exports=!o(function(){return Object.isExtensible(Object.preventExtensions({}))})},44912:function(s,v,e){var o=e(4917),a=Function.prototype,r=a.apply,l=a.call;s.exports=typeof Reflect=="object"&&Reflect.apply||(o?l.bind(r):function(){return l.apply(r,arguments)})},57369:function(s,v,e){var o=e(27970),a=e(81820),r=e(4917),l=o(o.bind);s.exports=function(i,d){return a(i),d===void 0?i:r?l(i,d):function(){return i.apply(d,arguments)}}},4917:function(s,v,e){var o=e(50486);s.exports=!o(function(){var a=function(){}.bind();return typeof a!="function"||a.hasOwnProperty("prototype")})},1060:function(s,v,e){var o=e(4917),a=Function.prototype.call;s.exports=o?a.bind(a):function(){return a.apply(a,arguments)}},40492:function(s,v,e){"use strict";var o=e(62515),a=e(81820);s.exports=function(){return o(a(this))}},87218:function(s,v,e){var o=e(75903),a=e(15415),r=Function.prototype,l=o&&Object.getOwnPropertyDescriptor,i=a(r,"name"),d=i&&function(){}.name==="something",f=i&&(!o||o&&l(r,"name").configurable);s.exports={EXISTS:i,PROPER:d,CONFIGURABLE:f}},56561:function(s,v,e){var o=e(62515),a=e(81820);s.exports=function(r,l,i){try{return o(a(Object.getOwnPropertyDescriptor(r,l)[i]))}catch(d){}}},27970:function(s,v,e){var o=e(30667),a=e(62515);s.exports=function(r){if(o(r)==="Function")return a(r)}},62515:function(s,v,e){var o=e(4917),a=Function.prototype,r=a.call,l=o&&a.bind.bind(r,r);s.exports=o?l:function(i){return function(){return r.apply(i,arguments)}}},30896:function(s,v,e){var o=e(1060),a=e(80754),r=e(88483),l=e(27642),i=e(71253),d=e(57619),f=e(29502),g=e(73121),h=f("asyncIterator");s.exports=function(m){var E=r(m),b=!0,w=d(E,h),x;return a(w)||(w=i(E),b=!1),a(w)?x=o(w,E):(x=E,b=!0),r(x),l(b?x:new g(l(x)))}},53630:function(s,v,e){var o=e(1060),a=e(73121),r=e(88483),l=e(29290),i=e(27642),d=e(57619),f=e(29502),g=f("asyncIterator");s.exports=function(h,p){var m=arguments.length<2?d(h,g):p;return m?r(o(m,h)):new a(i(l(h)))}},33577:function(s,v,e){var o=e(95098),a=e(80754),r=function(l){return a(l)?l:void 0};s.exports=function(l,i){return arguments.length<2?r(o[l]):o[l]&&o[l][i]}},27642:function(s,v,e){var o=e(81820),a=e(88483);s.exports=function(r){return{iterator:r,next:o(a(r).next)}}},11383:function(s,v,e){var o=e(1060),a=e(80754),r=e(88483),l=e(27642),i=e(71253);s.exports=function(d){var f=r(d),g=i(f);return l(r(a(g)?o(g,f):f))}},71253:function(s,v,e){var o=e(29087),a=e(57619),r=e(5734),l=e(57022),i=e(29502),d=i("iterator");s.exports=function(f){if(!r(f))return a(f,d)||a(f,"@@iterator")||l[o(f)]}},29290:function(s,v,e){var o=e(1060),a=e(81820),r=e(88483),l=e(3129),i=e(71253),d=TypeError;s.exports=function(f,g){var h=arguments.length<2?i(f):g;if(a(h))return r(o(h,f));throw d(l(f)+" is not iterable")}},66380:function(s,v,e){var o=e(62515),a=e(45399),r=e(80754),l=e(30667),i=e(92898),d=o([].push);s.exports=function(f){if(r(f))return f;if(a(f)){for(var g=f.length,h=[],p=0;p<g;p++){var m=f[p];typeof m=="string"?d(h,m):(typeof m=="number"||l(m)=="Number"||l(m)=="String")&&d(h,i(m))}var E=h.length,b=!0;return function(w,x){if(b)return b=!1,x;if(a(this))return x;for(var R=0;R<E;R++)if(h[R]===w)return x}}}},57619:function(s,v,e){var o=e(81820),a=e(5734);s.exports=function(r,l){var i=r[l];return a(i)?void 0:o(i)}},51446:function(s,v,e){var o=e(81820),a=e(88483),r=e(1060),l=e(1758),i=TypeError,d=Math.max,f=function(g,h,p,m){this.set=g,this.size=h,this.has=p,this.keys=m};f.prototype={getIterator:function(){return a(r(this.keys,this.set))},includes:function(g){return r(this.has,this.set,g)}},s.exports=function(g){a(g);var h=+g.size;if(h!=h)throw i("Invalid size");return new f(g,d(l(h),0),o(g.has),o(g.keys))}},10704:function(s,v,e){var o=e(62515),a=e(32331),r=Math.floor,l=o("".charAt),i=o("".replace),d=o("".slice),f=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,g=/\$([$&'`]|\d{1,2})/g;s.exports=function(h,p,m,E,b,w){var x=m+h.length,R=E.length,P=g;return b!==void 0&&(b=a(b),P=f),i(w,P,function(j,N){var F;switch(l(N,0)){case"$":return"$";case"&":return h;case"`":return d(p,0,m);case"'":return d(p,x);case"<":F=b[d(N,1,-1)];break;default:var A=+N;if(A===0)return j;if(A>R){var k=r(A/10);return k===0?j:k<=R?E[k-1]===void 0?l(N,1):E[k-1]+l(N,1):j}F=E[A-1]}return F===void 0?"":F})}},95098:function(s,v,e){var o=function(a){return a&&a.Math==Math&&a};s.exports=o(typeof globalThis=="object"&&globalThis)||o(typeof window=="object"&&window)||o(typeof self=="object"&&self)||o(typeof e.g=="object"&&e.g)||function(){return this}()||Function("return this")()},15415:function(s,v,e){var o=e(62515),a=e(32331),r=o({}.hasOwnProperty);s.exports=Object.hasOwn||function(i,d){return r(a(i),d)}},63340:function(s){s.exports={}},4055:function(s){s.exports=function(v,e){try{arguments.length==1?console.error(v):console.error(v,e)}catch(o){}}},62064:function(s,v,e){var o=e(33577);s.exports=o("document","documentElement")},98135:function(s,v,e){var o=e(75903),a=e(50486),r=e(67337);s.exports=!o&&!a(function(){return Object.defineProperty(r("div"),"a",{get:function(){return 7}}).a!=7})},46858:function(s,v,e){var o=e(62515),a=e(50486),r=e(30667),l=Object,i=o("".split);s.exports=a(function(){return!l("z").propertyIsEnumerable(0)})?function(d){return r(d)=="String"?i(d,""):l(d)}:l},94054:function(s,v,e){var o=e(80754),a=e(28180),r=e(12147);s.exports=function(l,i,d){var f,g;return r&&o(f=i.constructor)&&f!==d&&a(g=f.prototype)&&g!==d.prototype&&r(l,g),l}},27820:function(s,v,e){var o=e(62515),a=e(80754),r=e(53139),l=o(Function.toString);a(r.inspectSource)||(r.inspectSource=function(i){return l(i)}),s.exports=r.inspectSource},93695:function(s,v,e){var o=e(28180),a=e(78401);s.exports=function(r,l){o(l)&&"cause"in l&&a(r,"cause",l.cause)}},49407:function(s,v,e){var o=e(78170),a=e(62515),r=e(63340),l=e(28180),i=e(15415),d=e(9227).f,f=e(78880),g=e(87761),h=e(32529),p=e(50147),m=e(54339),E=!1,b=p("meta"),w=0,x=function(A){d(A,b,{value:{objectID:"O"+w++,weakData:{}}})},R=function(A,k){if(!l(A))return typeof A=="symbol"?A:(typeof A=="string"?"S":"P")+A;if(!i(A,b)){if(!h(A))return"F";if(!k)return"E";x(A)}return A[b].objectID},P=function(A,k){if(!i(A,b)){if(!h(A))return!0;if(!k)return!1;x(A)}return A[b].weakData},j=function(A){return m&&E&&h(A)&&!i(A,b)&&x(A),A},N=function(){F.enable=function(){},E=!0;var A=f.f,k=a([].splice),z={};z[b]=1,A(z).length&&(f.f=function(K){for(var ee=A(K),J=0,ce=ee.length;J<ce;J++)if(ee[J]===b){k(ee,J,1);break}return ee},o({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:g.f}))},F=s.exports={enable:N,fastKey:R,getWeakData:P,onFreeze:j};r[b]=!0},39675:function(s,v,e){var o=e(56343),a=e(95098),r=e(28180),l=e(78401),i=e(15415),d=e(53139),f=e(36220),g=e(63340),h="Object already initialized",p=a.TypeError,m=a.WeakMap,E,b,w,x=function(N){return w(N)?b(N):E(N,{})},R=function(N){return function(F){var A;if(!r(F)||(A=b(F)).type!==N)throw p("Incompatible receiver, "+N+" required");return A}};if(o||d.state){var P=d.state||(d.state=new m);P.get=P.get,P.has=P.has,P.set=P.set,E=function(N,F){if(P.has(N))throw p(h);return F.facade=N,P.set(N,F),F},b=function(N){return P.get(N)||{}},w=function(N){return P.has(N)}}else{var j=f("state");g[j]=!0,E=function(N,F){if(i(N,j))throw p(h);return F.facade=N,l(N,j,F),F},b=function(N){return i(N,j)?N[j]:{}},w=function(N){return i(N,j)}}s.exports={set:E,get:b,has:w,enforce:x,getterFor:R}},12584:function(s,v,e){var o=e(29502),a=e(57022),r=o("iterator"),l=Array.prototype;s.exports=function(i){return i!==void 0&&(a.Array===i||l[r]===i)}},45399:function(s,v,e){var o=e(30667);s.exports=Array.isArray||function(r){return o(r)=="Array"}},76193:function(s,v,e){var o=e(29087);s.exports=function(a){var r=o(a);return r=="BigInt64Array"||r=="BigUint64Array"}},80754:function(s,v,e){var o=e(3629),a=o.all;s.exports=o.IS_HTMLDDA?function(r){return typeof r=="function"||r===a}:function(r){return typeof r=="function"}},33590:function(s,v,e){var o=e(62515),a=e(50486),r=e(80754),l=e(29087),i=e(33577),d=e(27820),f=function(){},g=[],h=i("Reflect","construct"),p=/^\s*(?:class|function)\b/,m=o(p.exec),E=!p.exec(f),b=function(R){if(!r(R))return!1;try{return h(f,g,R),!0}catch(P){return!1}},w=function(R){if(!r(R))return!1;switch(l(R)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return E||!!m(p,d(R))}catch(P){return!0}};w.sham=!0,s.exports=!h||a(function(){var x;return b(b.call)||!b(Object)||!b(function(){x=!0})||x})?w:b},78067:function(s,v,e){var o=e(50486),a=e(80754),r=/#|\.prototype\./,l=function(h,p){var m=d[i(h)];return m==g?!0:m==f?!1:a(p)?o(p):!!p},i=l.normalize=function(h){return String(h).replace(r,".").toLowerCase()},d=l.data={},f=l.NATIVE="N",g=l.POLYFILL="P";s.exports=l},74219:function(s,v,e){var o=e(29087),a=e(15415),r=e(5734),l=e(29502),i=e(57022),d=l("iterator"),f=Object;s.exports=function(g){if(r(g))return!1;var h=f(g);return h[d]!==void 0||"@@iterator"in h||a(i,o(h))}},5734:function(s){s.exports=function(v){return v==null}},28180:function(s,v,e){var o=e(80754),a=e(3629),r=a.all;s.exports=a.IS_HTMLDDA?function(l){return typeof l=="object"?l!==null:o(l)||l===r}:function(l){return typeof l=="object"?l!==null:o(l)}},79766:function(s){s.exports=!1},62567:function(s,v,e){var o=e(28180),a=e(39675).get;s.exports=function(l){if(!o(l))return!1;var i=a(l);return!!i&&i.type==="RawJSON"}},21220:function(s,v,e){var o=e(28180),a=e(30667),r=e(29502),l=r("match");s.exports=function(i){var d;return o(i)&&((d=i[l])!==void 0?!!d:a(i)=="RegExp")}},19369:function(s,v,e){var o=e(33577),a=e(80754),r=e(34684),l=e(6511),i=Object;s.exports=l?function(d){return typeof d=="symbol"}:function(d){var f=o("Symbol");return a(f)&&r(f.prototype,i(d))}},76973:function(s,v,e){var o=e(1060);s.exports=function(a,r,l){for(var i=l||a.next,d,f;!(d=o(i,a)).done;)if(f=r(d.value),f!==void 0)return f}},60980:function(s,v,e){var o=e(57369),a=e(1060),r=e(88483),l=e(3129),i=e(12584),d=e(69703),f=e(34684),g=e(29290),h=e(71253),p=e(63215),m=TypeError,E=function(w,x){this.stopped=w,this.result=x},b=E.prototype;s.exports=function(w,x,R){var P=R&&R.that,j=!!(R&&R.AS_ENTRIES),N=!!(R&&R.IS_RECORD),F=!!(R&&R.IS_ITERATOR),A=!!(R&&R.INTERRUPTED),k=o(x,P),z,K,ee,J,ce,Te,Oe,Ne=function(je){return z&&p(z,"normal",je),new E(!0,je)},_e=function(je){return j?(r(je),A?k(je[0],je[1],Ne):k(je[0],je[1])):A?k(je,Ne):k(je)};if(N)z=w.iterator;else if(F)z=w;else{if(K=h(w),!K)throw m(l(w)+" is not iterable");if(i(K)){for(ee=0,J=d(w);J>ee;ee++)if(ce=_e(w[ee]),ce&&f(b,ce))return ce;return new E(!1)}z=g(w,K)}for(Te=N?w.next:z.next;!(Oe=a(Te,z)).done;){try{ce=_e(Oe.value)}catch(je){p(z,"throw",je)}if(typeof ce=="object"&&ce&&f(b,ce))return ce}return new E(!1)}},63215:function(s,v,e){var o=e(1060),a=e(88483),r=e(57619);s.exports=function(l,i,d){var f,g;a(l);try{if(f=r(l,"return"),!f){if(i==="throw")throw d;return d}f=o(f,l)}catch(h){g=!0,f=h}if(i==="throw")throw d;if(g)throw f;return a(f),d}},26290:function(s,v,e){"use strict";var o=e(52253).IteratorPrototype,a=e(64847),r=e(31623),l=e(30544),i=e(57022),d=function(){return this};s.exports=function(f,g,h,p){var m=g+" Iterator";return f.prototype=a(o,{next:r(+!p,h)}),l(f,m,!1,!0),i[m]=d,f}},93501:function(s,v,e){"use strict";var o=e(1060),a=e(64847),r=e(78401),l=e(85231),i=e(29502),d=e(39675),f=e(57619),g=e(52253).IteratorPrototype,h=e(489),p=e(63215),m=i("toStringTag"),E="IteratorHelper",b="WrapForValidIterator",w=d.set,x=function(j){var N=d.getterFor(j?b:E);return l(a(g),{next:function(){var A=N(this);if(j)return A.nextHandler();try{var k=A.done?void 0:A.nextHandler();return h(k,A.done)}catch(z){throw A.done=!0,z}},return:function(){var F=N(this),A=F.iterator;if(F.done=!0,j){var k=f(A,"return");return k?o(k,A):h(void 0,!0)}if(F.inner)try{p(F.inner.iterator,"normal")}catch(z){return p(A,"throw",z)}return p(A,"normal"),h(void 0,!0)}})},R=x(!0),P=x(!1);r(P,m,"Iterator Helper"),s.exports=function(j,N){var F=function(k,z){z?(z.iterator=k.iterator,z.next=k.next):z=k,z.type=N?b:E,z.nextHandler=j,z.counter=0,z.done=!1,w(this,z)};return F.prototype=N?R:P,F}},54795:function(s,v,e){"use strict";var o=e(78170),a=e(1060),r=e(79766),l=e(87218),i=e(80754),d=e(26290),f=e(91476),g=e(12147),h=e(30544),p=e(78401),m=e(90014),E=e(29502),b=e(57022),w=e(52253),x=l.PROPER,R=l.CONFIGURABLE,P=w.IteratorPrototype,j=w.BUGGY_SAFARI_ITERATORS,N=E("iterator"),F="keys",A="values",k="entries",z=function(){return this};s.exports=function(K,ee,J,ce,Te,Oe,Ne){d(J,ee,ce);var _e=function(I){if(I===Te&&O)return O;if(!j&&I in re)return re[I];switch(I){case F:return function(){return new J(this,I)};case A:return function(){return new J(this,I)};case k:return function(){return new J(this,I)}}return function(){return new J(this)}},je=ee+" Iterator",q=!1,re=K.prototype,ae=re[N]||re["@@iterator"]||Te&&re[Te],O=!j&&ae||_e(Te),L=ee=="Array"&&re.entries||ae,W,V,G;if(L&&(W=f(L.call(new K)),W!==Object.prototype&&W.next&&(!r&&f(W)!==P&&(g?g(W,P):i(W[N])||m(W,N,z)),h(W,je,!0,!0),r&&(b[je]=z))),x&&Te==A&&ae&&ae.name!==A&&(!r&&R?p(re,"name",A):(q=!0,O=function(){return a(ae,this)})),Te)if(V={values:_e(A),keys:Oe?O:_e(F),entries:_e(k)},Ne)for(G in V)(j||q||!(G in re))&&m(re,G,V[G]);else o({target:ee,proto:!0,forced:j||q},V);return(!r||Ne)&&re[N]!==O&&m(re,N,O,{name:Te}),b[ee]=O,V}},53519:function(s,v,e){"use strict";var o=e(1060),a=e(92551),r=function(l,i){return[i,l]};s.exports=function(){return o(a,this,r)}},92551:function(s,v,e){"use strict";var o=e(1060),a=e(81820),r=e(88483),l=e(27642),i=e(93501),d=e(49429),f=i(function(){var g=this.iterator,h=r(o(this.next,g)),p=this.done=!!h.done;if(!p)return d(g,this.mapper,[h.value,this.counter++],!0)});s.exports=function(h){return new f(l(this),{mapper:a(h)})}},52253:function(s,v,e){"use strict";var o=e(50486),a=e(80754),r=e(28180),l=e(64847),i=e(91476),d=e(90014),f=e(29502),g=e(79766),h=f("iterator"),p=!1,m,E,b;[].keys&&(b=[].keys(),"next"in b?(E=i(i(b)),E!==Object.prototype&&(m=E)):p=!0);var w=!r(m)||o(function(){var x={};return m[h].call(x)!==x});w?m={}:g&&(m=l(m)),a(m[h])||d(m,h,function(){return this}),s.exports={IteratorPrototype:m,BUGGY_SAFARI_ITERATORS:p}},57022:function(s){s.exports={}},69703:function(s,v,e){var o=e(733);s.exports=function(a){return o(a.length)}},91538:function(s,v,e){var o=e(62515),a=e(50486),r=e(80754),l=e(15415),i=e(75903),d=e(87218).CONFIGURABLE,f=e(27820),g=e(39675),h=g.enforce,p=g.get,m=String,E=Object.defineProperty,b=o("".slice),w=o("".replace),x=o([].join),R=i&&!a(function(){return E(function(){},"length",{value:8}).length!==8}),P=String(String).split("String"),j=s.exports=function(N,F,A){b(m(F),0,7)==="Symbol("&&(F="["+w(m(F),/^Symbol\(([^)]*)\)/,"$1")+"]"),A&&A.getter&&(F="get "+F),A&&A.setter&&(F="set "+F),(!l(N,"name")||d&&N.name!==F)&&(i?E(N,"name",{value:F,configurable:!0}):N.name=F),R&&A&&l(A,"arity")&&N.length!==A.arity&&E(N,"length",{value:A.arity});try{A&&l(A,"constructor")&&A.constructor?i&&E(N,"prototype",{writable:!1}):N.prototype&&(N.prototype=void 0)}catch(z){}var k=h(N);return l(k,"source")||(k.source=x(P,typeof F=="string"?F:"")),N};Function.prototype.toString=j(function(){return r(this)&&p(this).source||f(this)},"toString")},52483:function(s,v,e){var o=e(62515),a=Map.prototype;s.exports={Map,set:o(a.set),get:o(a.get),has:o(a.has),remove:o(a.delete),proto:a}},66262:function(s,v,e){var o=e(62515),a=e(76973),r=e(52483),l=r.Map,i=r.proto,d=o(i.forEach),f=o(i.entries),g=f(new l).next;s.exports=function(h,p,m){return m?a(f(h),function(E){return p(E[1],E[0])},g):d(h,p)}},99846:function(s,v,e){"use strict";var o=e(1060),a=e(81820),r=e(80754),l=e(88483),i=TypeError;s.exports=function(f,g){var h=l(this),p=a(h.get),m=a(h.has),E=a(h.set),b=arguments.length>2?arguments[2]:void 0,w;if(!r(g)&&!r(b))throw i("At least one callback required");return o(m,h,f)?(w=o(p,h,f),r(g)&&(w=g(w),o(E,h,f,w))):r(b)&&(w=b(),o(E,h,f,w)),w}},58428:function(s,v,e){var o=e(46864),a=Math.abs,r=Math.pow,l=r(2,-52),i=r(2,-23),d=r(2,127)*(2-i),f=r(2,-126),g=function(h){return h+1/l-1/l};s.exports=Math.fround||function(p){var m=+p,E=a(m),b=o(m),w,x;return E<f?b*g(E/f/i)*f*i:(w=(1+i/l)*E,x=w-(w-E),x>d||x!=x?b*(1/0):b*x)}},42318:function(s){s.exports=Math.scale||function(e,o,a,r,l){var i=+e,d=+o,f=+a,g=+r,h=+l;return i!=i||d!=d||f!=f||g!=g||h!=h?NaN:i===1/0||i===-1/0?i:(i-d)*(h-g)/(f-d)+g}},46864:function(s){s.exports=Math.sign||function(e){var o=+e;return o==0||o!=o?o:o<0?-1:1}},19763:function(s){var v=Math.ceil,e=Math.floor;s.exports=Math.trunc||function(a){var r=+a;return(r>0?e:v)(r)}},69336:function(s,v,e){var o=e(50486);s.exports=!o(function(){var a="9007199254740993",r=JSON.rawJSON(a);return!JSON.isRawJSON(r)||JSON.stringify(r)!==a})},76393:function(s,v,e){"use strict";var o=e(81820),a=TypeError,r=function(l){var i,d;this.promise=new l(function(f,g){if(i!==void 0||d!==void 0)throw a("Bad Promise constructor");i=f,d=g}),this.resolve=o(i),this.reject=o(d)};s.exports.f=function(l){return new r(l)}},45989:function(s,v,e){var o=e(92898);s.exports=function(a,r){return a===void 0?arguments.length<2?"":r:o(a)}},89595:function(s){var v=RangeError;s.exports=function(e){if(e===e)return e;throw v("NaN is not allowed")}},54683:function(s,v,e){var o=e(95098),a=o.isFinite;s.exports=Number.isFinite||function(l){return typeof l=="number"&&a(l)}},40541:function(s,v,e){var o=e(95098),a=e(50486),r=e(62515),l=e(92898),i=e(63726).trim,d=e(59732),f=o.parseInt,g=o.Symbol,h=g&&g.iterator,p=/^[+-]?0x/i,m=r(p.exec),E=f(d+"08")!==8||f(d+"0x16")!==22||h&&!a(function(){f(Object(h))});s.exports=E?function(w,x){var R=i(l(w));return f(R,x>>>0||(m(p,R)?16:10))}:f},65939:function(s,v,e){"use strict";var o=e(39675),a=e(26290),r=e(489),l=e(5734),i=e(28180),d=e(14592).f,f=e(75903),g="Incorrect Iterator.range arguments",h="NumericRangeIterator",p=o.set,m=o.getterFor(h),E=RangeError,b=TypeError,w=a(function(P,j,N,F,A,k){if(typeof P!=F||j!==1/0&&j!==-1/0&&typeof j!=F)throw b(g);if(P===1/0||P===-1/0)throw E(g);var z=j>P,K=!1,ee;if(N===void 0)ee=void 0;else if(i(N))ee=N.step,K=!!N.inclusive;else if(typeof N==F)ee=N;else throw b(g);if(l(ee)&&(ee=z?k:-k),typeof ee!=F)throw b(g);if(ee===1/0||ee===-1/0||ee===A&&P!==j)throw E(g);var J=P!=P||j!=j||ee!=ee||j>P!=ee>A;p(this,{type:h,start:P,end:j,step:ee,inclusiveEnd:K,hitsEnd:J,currentCount:A,zero:A}),f||(this.start=P,this.end=j,this.step=ee,this.inclusive=K)},h,function(){var P=m(this);if(P.hitsEnd)return r(void 0,!0);var j=P.start,N=P.end,F=P.step,A=j+F*P.currentCount++;A===N&&(P.hitsEnd=!0);var k=P.inclusiveEnd,z;return N>j?z=k?A>N:A>=N:z=k?N>A:N>=A,z?(P.hitsEnd=!0,r(void 0,!0)):r(A,!1)}),x=function(R){return{get:R,set:function(){},configurable:!0,enumerable:!1}};f&&d(w.prototype,{start:x(function(){return m(this).start}),end:x(function(){return m(this).end}),inclusive:x(function(){return m(this).inclusiveEnd}),step:x(function(){return m(this).step})}),s.exports=w},64847:function(s,v,e){var o=e(88483),a=e(14592),r=e(98879),l=e(63340),i=e(62064),d=e(67337),f=e(36220),g=">",h="<",p="prototype",m="script",E=f("IE_PROTO"),b=function(){},w=function(N){return h+m+g+N+h+"/"+m+g},x=function(N){N.write(w("")),N.close();var F=N.parentWindow.Object;return N=null,F},R=function(){var N=d("iframe"),F="java"+m+":",A;return N.style.display="none",i.appendChild(N),N.src=String(F),A=N.contentWindow.document,A.open(),A.write(w("document.F=Object")),A.close(),A.F},P,j=function(){try{P=new ActiveXObject("htmlfile")}catch(F){}j=typeof document!="undefined"?document.domain&&P?x(P):R():x(P);for(var N=r.length;N--;)delete j[p][r[N]];return j()};l[E]=!0,s.exports=Object.create||function(F,A){var k;return F!==null?(b[p]=o(F),k=new b,b[p]=null,k[E]=F):k=j(),A===void 0?k:a.f(k,A)}},14592:function(s,v,e){var o=e(75903),a=e(90910),r=e(9227),l=e(88483),i=e(38805),d=e(27846);v.f=o&&!a?Object.defineProperties:function(g,h){l(g);for(var p=i(h),m=d(h),E=m.length,b=0,w;E>b;)r.f(g,w=m[b++],p[w]);return g}},9227:function(s,v,e){var o=e(75903),a=e(98135),r=e(90910),l=e(88483),i=e(45265),d=TypeError,f=Object.defineProperty,g=Object.getOwnPropertyDescriptor,h="enumerable",p="configurable",m="writable";v.f=o?r?function(b,w,x){if(l(b),w=i(w),l(x),typeof b=="function"&&w==="prototype"&&"value"in x&&m in x&&!x[m]){var R=g(b,w);R&&R[m]&&(b[w]=x.value,x={configurable:p in x?x[p]:R[p],enumerable:h in x?x[h]:R[h],writable:!1})}return f(b,w,x)}:f:function(b,w,x){if(l(b),w=i(w),l(x),a)try{return f(b,w,x)}catch(R){}if("get"in x||"set"in x)throw d("Accessors not supported");return"value"in x&&(b[w]=x.value),b}},48456:function(s,v,e){var o=e(75903),a=e(1060),r=e(94931),l=e(31623),i=e(38805),d=e(45265),f=e(15415),g=e(98135),h=Object.getOwnPropertyDescriptor;v.f=o?h:function(m,E){if(m=i(m),E=d(E),g)try{return h(m,E)}catch(b){}if(f(m,E))return l(!a(r.f,m,E),m[E])}},87761:function(s,v,e){var o=e(30667),a=e(38805),r=e(78880).f,l=e(51557),i=typeof window=="object"&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],d=function(f){try{return r(f)}catch(g){return l(i)}};s.exports.f=function(g){return i&&o(g)=="Window"?d(g):r(a(g))}},78880:function(s,v,e){var o=e(24301),a=e(98879),r=a.concat("length","prototype");v.f=Object.getOwnPropertyNames||function(i){return o(i,r)}},30292:function(s,v){v.f=Object.getOwnPropertySymbols},91476:function(s,v,e){var o=e(15415),a=e(80754),r=e(32331),l=e(36220),i=e(36311),d=l("IE_PROTO"),f=Object,g=f.prototype;s.exports=i?f.getPrototypeOf:function(h){var p=r(h);if(o(p,d))return p[d];var m=p.constructor;return a(m)&&p instanceof m?m.prototype:p instanceof f?g:null}},32529:function(s,v,e){var o=e(50486),a=e(28180),r=e(30667),l=e(8930),i=Object.isExtensible,d=o(function(){i(1)});s.exports=d||l?function(g){return!a(g)||l&&r(g)=="ArrayBuffer"?!1:i?i(g):!0}:i},34684:function(s,v,e){var o=e(62515);s.exports=o({}.isPrototypeOf)},6481:function(s,v,e){"use strict";var o=e(39675),a=e(26290),r=e(489),l=e(15415),i=e(27846),d=e(32331),f="Object Iterator",g=o.set,h=o.getterFor(f);s.exports=a(function(m,E){var b=d(m);g(this,{type:f,mode:E,object:b,keys:i(b),index:0})},"Object",function(){for(var m=h(this),E=m.keys;;){if(E===null||m.index>=E.length)return m.object=m.keys=null,r(void 0,!0);var b=E[m.index++],w=m.object;if(l(w,b)){switch(m.mode){case"keys":return r(b,!1);case"values":return r(w[b],!1)}return r([b,w[b]],!1)}}})},24301:function(s,v,e){var o=e(62515),a=e(15415),r=e(38805),l=e(16377).indexOf,i=e(63340),d=o([].push);s.exports=function(f,g){var h=r(f),p=0,m=[],E;for(E in h)!a(i,E)&&a(h,E)&&d(m,E);for(;g.length>p;)a(h,E=g[p++])&&(~l(m,E)||d(m,E));return m}},27846:function(s,v,e){var o=e(24301),a=e(98879);s.exports=Object.keys||function(l){return o(l,a)}},94931:function(s,v){"use strict";var e={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,a=o&&!e.call({1:2},1);v.f=a?function(l){var i=o(this,l);return!!i&&i.enumerable}:e},12147:function(s,v,e){var o=e(56561),a=e(88483),r=e(44493);s.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var l=!1,i={},d;try{d=o(Object.prototype,"__proto__","set"),d(i,[]),l=i instanceof Array}catch(f){}return function(g,h){return a(g),r(h),l?d(g,h):g.__proto__=h,g}}():void 0)},22008:function(s,v,e){var o=e(95098),a=e(80754),r=e(29502),l=r("observable"),i=o.Observable,d=i&&i.prototype;s.exports=!a(i)||!a(i.from)||!a(i.of)||!a(d.subscribe)||!a(d[l])},64208:function(s,v,e){var o=e(1060),a=e(80754),r=e(28180),l=TypeError;s.exports=function(i,d){var f,g;if(d==="string"&&a(f=i.toString)&&!r(g=o(f,i))||a(f=i.valueOf)&&!r(g=o(f,i))||d!=="string"&&a(f=i.toString)&&!r(g=o(f,i)))return g;throw l("Can't convert object to primitive value")}},34801:function(s,v,e){var o=e(33577),a=e(62515),r=e(78880),l=e(30292),i=e(88483),d=a([].concat);s.exports=o("Reflect","ownKeys")||function(g){var h=r.f(i(g)),p=l.f;return p?d(h,p(g)):h}},3554:function(s,v,e){var o=e(62515),a=e(15415),r=SyntaxError,l=parseInt,i=String.fromCharCode,d=o("".charAt),f=o("".slice),g=o(/./.exec),h={'\\"':'"',"\\\\":"\\","\\/":"/","\\b":"\b","\\f":"\f","\\n":`
`,"\\r":"\r","\\t":"	"},p=/^[\da-f]{4}$/i,m=/^[\u0000-\u001F]$/;s.exports=function(E,b){for(var w=!0,x="";b<E.length;){var R=d(E,b);if(R=="\\"){var P=f(E,b,b+2);if(a(h,P))x+=h[P],b+=2;else if(P=="\\u"){b+=2;var j=f(E,b,b+4);if(!g(p,j))throw r("Bad Unicode escape at: "+b);x+=i(l(j,16)),b+=4}else throw r('Unknown escape sequence: "'+P+'"')}else if(R=='"'){w=!1,b++;break}else{if(g(m,R))throw r("Bad control character in string literal at: "+b);x+=R,b++}}if(w)throw r("Unterminated string at: "+b);return{value:x,end:b}}},36416:function(s,v,e){var o=e(95098);s.exports=o},1101:function(s){s.exports=function(v){try{return{error:!1,value:v()}}catch(e){return{error:!0,value:e}}}},42357:function(s,v,e){var o=e(95098),a=e(43243),r=e(80754),l=e(78067),i=e(27820),d=e(29502),f=e(37915),g=e(1569),h=e(79766),p=e(87540),m=a&&a.prototype,E=d("species"),b=!1,w=r(o.PromiseRejectionEvent),x=l("Promise",function(){var R=i(a),P=R!==String(a);if(!P&&p===66||h&&!(m.catch&&m.finally))return!0;if(!p||p<51||!/native code/.test(R)){var j=new a(function(A){A(1)}),N=function(A){A(function(){},function(){})},F=j.constructor={};if(F[E]=N,b=j.then(function(){})instanceof N,!b)return!0}return!P&&(f||g)&&!w});s.exports={CONSTRUCTOR:x,REJECTION_EVENT:w,SUBCLASSING:b}},43243:function(s,v,e){var o=e(95098);s.exports=o.Promise},86514:function(s,v,e){var o=e(43243),a=e(40072),r=e(42357).CONSTRUCTOR;s.exports=r||!a(function(l){o.all(l).then(void 0,function(){})})},64475:function(s,v,e){var o=e(9227).f;s.exports=function(a,r,l){l in a||o(a,l,{configurable:!0,get:function(){return r[l]},set:function(i){r[l]=i}})}},80359:function(s,v,e){e(20288),e(20404);var o=e(33577),a=e(62515),r=e(36386),l=o("Map"),i=o("WeakMap"),d=a([].push),f=r("metadata"),g=f.store||(f.store=new i),h=function(x,R,P){var j=g.get(x);if(!j){if(!P)return;g.set(x,j=new l)}var N=j.get(R);if(!N){if(!P)return;j.set(R,N=new l)}return N},p=function(x,R,P){var j=h(R,P,!1);return j===void 0?!1:j.has(x)},m=function(x,R,P){var j=h(R,P,!1);return j===void 0?void 0:j.get(x)},E=function(x,R,P,j){h(P,j,!0).set(x,R)},b=function(x,R){var P=h(x,R,!1),j=[];return P&&P.forEach(function(N,F){d(j,F)}),j},w=function(x){return x===void 0||typeof x=="symbol"?x:String(x)};s.exports={store:g,getMap:h,has:p,get:m,set:E,keys:b,toKey:w}},92248:function(s,v,e){"use strict";var o=e(88483);s.exports=function(){var a=o(this),r="";return a.hasIndices&&(r+="d"),a.global&&(r+="g"),a.ignoreCase&&(r+="i"),a.multiline&&(r+="m"),a.dotAll&&(r+="s"),a.unicode&&(r+="u"),a.unicodeSets&&(r+="v"),a.sticky&&(r+="y"),r}},46277:function(s,v,e){var o=e(1060),a=e(15415),r=e(34684),l=e(92248),i=RegExp.prototype;s.exports=function(d){var f=d.flags;return f===void 0&&!("flags"in i)&&!a(d,"flags")&&r(i,d)?o(l,d):f}},23009:function(s,v,e){var o=e(5734),a=TypeError;s.exports=function(r){if(o(r))throw a("Can't call method on "+r);return r}},45976:function(s){s.exports=function(v,e){return v===e||v!=v&&e!=e}},35807:function(s,v,e){"use strict";var o=e(95098),a=e(44912),r=e(80754),l=e(31612),i=e(7755),d=e(78477),f=e(95106),g=o.Function,h=/MSIE .\./.test(i)||l&&function(){var p=o.Bun.version.split(".");return p.length<3||p[0]==0&&(p[1]<3||p[1]==3&&p[2]==0)}();s.exports=function(p,m){var E=m?2:1;return h?function(b,w){var x=f(arguments.length,1)>E,R=r(b)?b:g(b),P=x?d(arguments,E):[],j=x?function(){a(R,this,P)}:R;return m?p(j,w):p(j)}:p}},65368:function(s,v,e){var o=e(2320),a=e(78963),r=o.Set,l=o.add;s.exports=function(i){var d=new r;return a(i,function(f){l(d,f)}),d}},68333:function(s,v,e){"use strict";var o=e(36006),a=e(2320),r=e(65368),l=e(12827),i=e(51446),d=e(78963),f=e(76973),g=a.has,h=a.remove;s.exports=function(m){var E=o(this),b=i(m),w=r(E);return l(E)<=b.size?d(E,function(x){b.includes(x)&&h(w,x)}):f(b.getIterator(),function(x){g(E,x)&&h(w,x)}),w}},2320:function(s,v,e){var o=e(62515),a=Set.prototype;s.exports={Set,add:o(a.add),has:o(a.has),remove:o(a.delete),proto:a,$has:a.has,$keys:a.keys}},75576:function(s,v,e){"use strict";var o=e(36006),a=e(2320),r=e(12827),l=e(51446),i=e(78963),d=e(76973),f=a.Set,g=a.add,h=a.has,p=a.$has,m=a.$keys,E=function(b){return b.has===p&&b.keys===m};s.exports=function(w){var x=o(this),R=l(w),P=new f;if(!E(R)&&r(x)>R.size){if(d(R.getIterator(),function(N){h(x,N)&&g(P,N)}),r(P)<2)return P;var j=P;P=new f,i(x,function(N){h(j,N)&&g(P,N)})}else i(x,function(N){R.includes(N)&&g(P,N)});return P}},53668:function(s,v,e){"use strict";var o=e(36006),a=e(2320).has,r=e(12827),l=e(51446),i=e(78963),d=e(76973),f=e(63215);s.exports=function(h){var p=o(this),m=l(h);if(r(p)<=m.size)return i(p,function(b){if(m.includes(b))return!1},!0)!==!1;var E=m.getIterator();return d(E,function(b){if(a(p,b))return f(E,"normal",!1)})!==!1}},46703:function(s,v,e){"use strict";var o=e(36006),a=e(12827),r=e(78963),l=e(51446);s.exports=function(d){var f=o(this),g=l(d);return a(f)>g.size?!1:r(f,function(h){if(!g.includes(h))return!1},!0)!==!1}},17657:function(s,v,e){"use strict";var o=e(36006),a=e(2320).has,r=e(12827),l=e(51446),i=e(76973),d=e(63215);s.exports=function(g){var h=o(this),p=l(g);if(r(h)<p.size)return!1;var m=p.getIterator();return i(m,function(E){if(!a(h,E))return d(m,"normal",!1)})!==!1}},78963:function(s,v,e){var o=e(62515),a=e(76973),r=e(2320),l=r.Set,i=r.proto,d=o(i.forEach),f=o(i.keys),g=f(new l).next;s.exports=function(h,p,m){return m?a(f(h),p,g):d(h,p)}},42535:function(s,v,e){var o=e(33577),a=function(){return{size:0,has:function(){return!1},keys:function(){return{next:function(){return{done:!0}}}}}};s.exports=function(r){try{var l=o("Set");return new l()[r](a()),!0}catch(i){return!1}}},12827:function(s,v,e){var o=e(56561),a=e(2320);s.exports=o(a.proto,"size","get")||function(r){return r.size}},29177:function(s,v,e){"use strict";var o=e(33577),a=e(75678),r=e(29502),l=e(75903),i=r("species");s.exports=function(d){var f=o(d);l&&f&&!f[i]&&a(f,i,{configurable:!0,get:function(){return this}})}},538:function(s,v,e){"use strict";var o=e(36006),a=e(2320),r=e(65368),l=e(51446),i=e(76973),d=a.add,f=a.has,g=a.remove;s.exports=function(p){var m=o(this),E=l(p).getIterator(),b=r(m);return i(E,function(w){f(m,w)?g(b,w):d(b,w)}),b}},30544:function(s,v,e){var o=e(9227).f,a=e(15415),r=e(29502),l=r("toStringTag");s.exports=function(i,d,f){i&&!f&&(i=i.prototype),i&&!a(i,l)&&o(i,l,{configurable:!0,value:d})}},25793:function(s,v,e){"use strict";var o=e(36006),a=e(2320).add,r=e(65368),l=e(51446),i=e(76973);s.exports=function(f){var g=o(this),h=l(f).getIterator(),p=r(g);return i(h,function(m){a(p,m)}),p}},36220:function(s,v,e){var o=e(36386),a=e(50147),r=o("keys");s.exports=function(l){return r[l]||(r[l]=a(l))}},53139:function(s,v,e){var o=e(95098),a=e(48109),r="__core-js_shared__",l=o[r]||a(r,{});s.exports=l},36386:function(s,v,e){var o=e(79766),a=e(53139);(s.exports=function(r,l){return a[r]||(a[r]=l!==void 0?l:{})})("versions",[]).push({version:"3.28.0",mode:o?"pure":"global",copyright:"\xA9 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.28.0/LICENSE",source:"https://github.com/zloirock/core-js"})},38709:function(s,v,e){var o=e(88483),a=e(10388),r=e(5734),l=e(29502),i=l("species");s.exports=function(d,f){var g=o(d).constructor,h;return g===void 0||r(h=o(g)[i])?f:a(h)}},23809:function(s,v,e){var o=e(62515),a=e(38805),r=e(92898),l=e(69703),i=TypeError,d=o([].push),f=o([].join);s.exports=function(h){var p=a(h),m=l(p);if(!m)return"";for(var E=arguments.length,b=[],w=0;;){var x=p[w++];if(x===void 0)throw i("Incorrect template");if(d(b,r(x)),w===m)return f(b,"");w<E&&d(b,r(arguments[w]))}}},10260:function(s,v,e){var o=e(62515),a=e(1758),r=e(92898),l=e(23009),i=o("".charAt),d=o("".charCodeAt),f=o("".slice),g=function(h){return function(p,m){var E=r(l(p)),b=a(m),w=E.length,x,R;return b<0||b>=w?h?"":void 0:(x=d(E,b),x<55296||x>56319||b+1===w||(R=d(E,b+1))<56320||R>57343?h?i(E,b):x:h?f(E,b,b+2):(x-55296<<10)+(R-56320)+65536)}};s.exports={codeAt:g(!1),charAt:g(!0)}},7149:function(s,v,e){var o=e(33577),a=e(62515),r=String.fromCharCode,l=o("String","fromCodePoint"),i=a("".charAt),d=a("".charCodeAt),f=a("".indexOf),g=a("".slice),h=48,p=57,m=97,E=102,b=65,w=70,x=function(j,N){var F=d(j,N);return F>=h&&F<=p},R=function(j,N,F){if(F>=j.length)return-1;for(var A=0;N<F;N++){var k=P(d(j,N));if(k===-1)return-1;A=A*16+k}return A},P=function(j){return j>=h&&j<=p?j-h:j>=m&&j<=E?j-m+10:j>=b&&j<=w?j-b+10:-1};s.exports=function(j){for(var N="",F=0,A=0,k;(A=f(j,"\\",A))>-1;){if(N+=g(j,F,A),++A===j.length)return;var z=i(j,A++);switch(z){case"b":N+="\b";break;case"t":N+="	";break;case"n":N+=`
`;break;case"v":N+="\v";break;case"f":N+="\f";break;case"r":N+="\r";break;case"\r":A<j.length&&i(j,A)===`
`&&++A;case`
`:case"\u2028":case"\u2029":break;case"0":if(x(j,A))return;N+="\0";break;case"x":if(k=R(j,A,A+2),k===-1)return;A+=2,N+=r(k);break;case"u":if(A<j.length&&i(j,A)==="{"){var K=f(j,"}",++A);if(K===-1)return;k=R(j,A,K),A=K+1}else k=R(j,A,A+4),A+=4;if(k===-1||k>1114111)return;N+=l(k);break;default:if(x(z,0))return;N+=z}F=A}return N+g(j,F)}},63726:function(s,v,e){var o=e(62515),a=e(23009),r=e(92898),l=e(59732),i=o("".replace),d=RegExp("^["+l+"]+"),f=RegExp("(^|[^"+l+"])["+l+"]+$"),g=function(h){return function(p){var m=r(a(p));return h&1&&(m=i(m,d,"")),h&2&&(m=i(m,f,"$1")),m}};s.exports={start:g(1),end:g(2),trim:g(3)}},12411:function(s,v,e){var o=e(95098),a=e(50486),r=e(87540),l=e(37915),i=e(1569),d=e(75773),f=o.structuredClone;s.exports=!!f&&!a(function(){if(i&&r>92||d&&r>94||l&&r>97)return!1;var g=new ArrayBuffer(8),h=f(g,{transfer:[g]});return g.byteLength!=0||h.byteLength!=8})},82436:function(s,v,e){var o=e(87540),a=e(50486);s.exports=!!Object.getOwnPropertySymbols&&!a(function(){var r=Symbol();return!String(r)||!(Object(r)instanceof Symbol)||!Symbol.sham&&o&&o<41})},77446:function(s,v,e){var o=e(95098),a=e(44912),r=e(57369),l=e(80754),i=e(15415),d=e(50486),f=e(62064),g=e(78477),h=e(67337),p=e(95106),m=e(56594),E=e(75773),b=o.setImmediate,w=o.clearImmediate,x=o.process,R=o.Dispatch,P=o.Function,j=o.MessageChannel,N=o.String,F=0,A={},k="onreadystatechange",z,K,ee,J;d(function(){z=o.location});var ce=function(_e){if(i(A,_e)){var je=A[_e];delete A[_e],je()}},Te=function(_e){return function(){ce(_e)}},Oe=function(_e){ce(_e.data)},Ne=function(_e){o.postMessage(N(_e),z.protocol+"//"+z.host)};(!b||!w)&&(b=function(je){p(arguments.length,1);var q=l(je)?je:P(je),re=g(arguments,1);return A[++F]=function(){a(q,void 0,re)},K(F),F},w=function(je){delete A[je]},E?K=function(_e){x.nextTick(Te(_e))}:R&&R.now?K=function(_e){R.now(Te(_e))}:j&&!m?(ee=new j,J=ee.port2,ee.port1.onmessage=Oe,K=r(J.postMessage,J)):o.addEventListener&&l(o.postMessage)&&!o.importScripts&&z&&z.protocol!=="file:"&&!d(Ne)?(K=Ne,o.addEventListener("message",Oe,!1)):k in h("script")?K=function(_e){f.appendChild(h("script"))[k]=function(){f.removeChild(this),ce(_e)}}:K=function(_e){setTimeout(Te(_e),0)}),s.exports={set:b,clear:w}},68512:function(s,v,e){var o=e(1758),a=Math.max,r=Math.min;s.exports=function(l,i){var d=o(l);return d<0?a(d+i,0):r(d,i)}},42348:function(s,v,e){var o=e(87773),a=TypeError;s.exports=function(r){var l=o(r,"number");if(typeof l=="number")throw a("Can't convert number to bigint");return BigInt(l)}},41122:function(s,v,e){var o=e(1758),a=e(733),r=RangeError;s.exports=function(l){if(l===void 0)return 0;var i=o(l),d=a(i);if(i!==d)throw r("Wrong length or index");return d}},38805:function(s,v,e){var o=e(46858),a=e(23009);s.exports=function(r){return o(a(r))}},1758:function(s,v,e){var o=e(19763);s.exports=function(a){var r=+a;return r!==r||r===0?0:o(r)}},733:function(s,v,e){var o=e(1758),a=Math.min;s.exports=function(r){return r>0?a(o(r),9007199254740991):0}},32331:function(s,v,e){var o=e(23009),a=Object;s.exports=function(r){return a(o(r))}},36026:function(s,v,e){var o=e(14884),a=RangeError;s.exports=function(r,l){var i=o(r);if(i%l)throw a("Wrong offset");return i}},14884:function(s,v,e){var o=e(1758),a=RangeError;s.exports=function(r){var l=o(r);if(l<0)throw a("The argument can't be less than 0");return l}},87773:function(s,v,e){var o=e(1060),a=e(28180),r=e(19369),l=e(57619),i=e(64208),d=e(29502),f=TypeError,g=d("toPrimitive");s.exports=function(h,p){if(!a(h)||r(h))return h;var m=l(h,g),E;if(m){if(p===void 0&&(p="default"),E=o(m,h,p),!a(E)||r(E))return E;throw f("Can't convert object to primitive value")}return p===void 0&&(p="number"),i(h,p)}},45265:function(s,v,e){var o=e(87773),a=e(19369);s.exports=function(r){var l=o(r,"string");return a(l)?l:l+""}},55607:function(s,v,e){var o=e(33577),a=e(80754),r=e(74219),l=e(28180),i=o("Set"),d=function(f){return l(f)&&typeof f.size=="number"&&a(f.has)&&a(f.keys)};s.exports=function(f){if(d(f))return f;if(r(f))return new i(f)}},16681:function(s,v,e){var o=e(29502),a=o("toStringTag"),r={};r[a]="z",s.exports=String(r)==="[object z]"},92898:function(s,v,e){var o=e(29087),a=String;s.exports=function(r){if(o(r)==="Symbol")throw TypeError("Cannot convert a Symbol value to a string");return a(r)}},3129:function(s){var v=String;s.exports=function(e){try{return v(e)}catch(o){return"Object"}}},18483:function(s,v,e){var o=e(85117),a=e(42132);s.exports=function(r,l){return o(a(r),l)}},42132:function(s,v,e){var o=e(32124),a=e(38709),r=o.aTypedArrayConstructor,l=o.getTypedArrayConstructor;s.exports=function(i){return r(a(i,l(i)))}},50147:function(s,v,e){var o=e(62515),a=0,r=Math.random(),l=o(1 .toString);s.exports=function(i){return"Symbol("+(i===void 0?"":i)+")_"+l(++a+r,36)}},6511:function(s,v,e){var o=e(82436);s.exports=o&&!Symbol.sham&&typeof Symbol.iterator=="symbol"},90910:function(s,v,e){var o=e(75903),a=e(50486);s.exports=o&&a(function(){return Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype!=42})},95106:function(s){var v=TypeError;s.exports=function(e,o){if(e<o)throw v("Not enough arguments");return e}},56343:function(s,v,e){var o=e(95098),a=e(80754),r=o.WeakMap;s.exports=a(r)&&/native code/.test(String(r))},8803:function(s,v,e){var o=e(62515),a=WeakMap.prototype;s.exports={WeakMap,set:o(a.set),get:o(a.get),has:o(a.has),remove:o(a.delete)}},15764:function(s,v,e){var o=e(62515),a=WeakSet.prototype;s.exports={WeakSet,add:o(a.add),has:o(a.has),remove:o(a.delete)}},61238:function(s,v,e){var o=e(36416),a=e(15415),r=e(50412),l=e(9227).f;s.exports=function(i){var d=o.Symbol||(o.Symbol={});a(d,i)||l(d,i,{value:r.f(i)})}},50412:function(s,v,e){var o=e(29502);v.f=o},29502:function(s,v,e){var o=e(95098),a=e(36386),r=e(15415),l=e(50147),i=e(82436),d=e(6511),f=o.Symbol,g=a("wks"),h=d?f.for||f:f&&f.withoutSetter||l;s.exports=function(p){return r(g,p)||(g[p]=i&&r(f,p)?f[p]:h("Symbol."+p)),g[p]}},59732:function(s){s.exports=`	
\v\f\r \xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF`},80003:function(s,v,e){"use strict";var o=e(33577),a=e(15415),r=e(78401),l=e(34684),i=e(12147),d=e(11260),f=e(64475),g=e(94054),h=e(45989),p=e(93695),m=e(57370),E=e(75903),b=e(79766);s.exports=function(w,x,R,P){var j="stackTraceLimit",N=P?2:1,F=w.split("."),A=F[F.length-1],k=o.apply(null,F);if(k){var z=k.prototype;if(!b&&a(z,"cause")&&delete z.cause,!R)return k;var K=o("Error"),ee=x(function(J,ce){var Te=h(P?ce:J,void 0),Oe=P?new k(J):new k;return Te!==void 0&&r(Oe,"message",Te),m(Oe,ee,Oe.stack,2),this&&l(z,this)&&g(Oe,this,ee),arguments.length>N&&p(Oe,arguments[N]),Oe});if(ee.prototype=z,A!=="Error"?i?i(ee,K):d(ee,K,{name:!0}):E&&j in k&&(f(ee,k,j),f(ee,k,"prepareStackTrace")),d(ee,k),!b)try{z.name!==A&&r(z,"name",A),z.constructor=ee}catch(J){}return ee}}},53612:function(s,v,e){var o=e(78170),a=e(33577),r=e(44912),l=e(50486),i=e(80003),d="AggregateError",f=a(d),g=!l(function(){return f([1]).errors[0]!==1})&&l(function(){return f([1],d,{cause:7}).cause!==7});o({global:!0,constructor:!0,arity:2,forced:g},{AggregateError:i(d,function(h){return function(m,E){return r(h,this,arguments)}},g,!0)})},10403:function(s,v,e){"use strict";var o=e(78170),a=e(34684),r=e(91476),l=e(12147),i=e(11260),d=e(64847),f=e(78401),g=e(31623),h=e(93695),p=e(57370),m=e(60980),E=e(45989),b=e(29502),w=b("toStringTag"),x=Error,R=[].push,P=function(F,A){var k=a(j,this),z;l?z=l(x(),k?r(this):j):(z=k?this:d(j),f(z,w,"Error")),A!==void 0&&f(z,"message",E(A)),p(z,P,z.stack,1),arguments.length>2&&h(z,arguments[2]);var K=[];return m(F,R,{that:K}),f(z,"errors",K),z};l?l(P,x):i(P,x,{name:!0});var j=P.prototype=d(x.prototype,{constructor:g(1,P),message:g(1,""),name:g(1,"AggregateError")});o({global:!0,constructor:!0,arity:2},{AggregateError:P})},67029:function(s,v,e){e(10403)},87499:function(s,v,e){"use strict";var o=e(78170),a=e(32331),r=e(69703),l=e(1758),i=e(64748);o({target:"Array",proto:!0},{at:function(f){var g=a(this),h=r(g),p=l(f),m=p>=0?p:h+p;return m<0||m>=h?void 0:g[m]}}),i("at")},4018:function(s,v,e){"use strict";var o=e(78170),a=e(95562).findLastIndex,r=e(64748);o({target:"Array",proto:!0},{findLastIndex:function(i){return a(this,i,arguments.length>1?arguments[1]:void 0)}}),r("findLastIndex")},30692:function(s,v,e){"use strict";var o=e(78170),a=e(95562).findLast,r=e(64748);o({target:"Array",proto:!0},{findLast:function(i){return a(this,i,arguments.length>1?arguments[1]:void 0)}}),r("findLast")},25096:function(s,v,e){"use strict";var o=e(78170),a=e(32331),r=e(69703),l=e(35172),i=e(64484),d=e(50486),f=d(function(){return[].push.call({length:4294967296},1)!==4294967297}),g=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(p){return p instanceof TypeError}},h=f||!g();o({target:"Array",proto:!0,arity:1,forced:h},{push:function(m){var E=a(this),b=r(E),w=arguments.length;i(b+w);for(var x=0;x<w;x++)E[b]=arguments[x],b++;return l(E,b),b}})},19701:function(s,v,e){"use strict";var o=e(78170),a=e(35659).right,r=e(44962),l=e(87540),i=e(75773),d=!i&&l>79&&l<83,f=d||!r("reduceRight");o({target:"Array",proto:!0,forced:f},{reduceRight:function(h){return a(this,h,arguments.length,arguments.length>1?arguments[1]:void 0)}})},56096:function(s,v,e){"use strict";var o=e(78170),a=e(35659).left,r=e(44962),l=e(87540),i=e(75773),d=!i&&l>79&&l<83,f=d||!r("reduce");o({target:"Array",proto:!0,forced:f},{reduce:function(h){var p=arguments.length;return a(this,h,p,p>1?arguments[1]:void 0)}})},2443:function(s,v,e){"use strict";var o=e(78170),a=e(2950),r=e(38805),l=e(64748),i=Array;o({target:"Array",proto:!0},{toReversed:function(){return a(r(this),i)}}),l("toReversed")},96542:function(s,v,e){"use strict";var o=e(78170),a=e(62515),r=e(81820),l=e(38805),i=e(85117),d=e(86351),f=e(64748),g=Array,h=a(d("Array").sort);o({target:"Array",proto:!0},{toSorted:function(m){m!==void 0&&r(m);var E=l(this),b=i(g,E);return h(b,m)}}),f("toSorted")},33768:function(s,v,e){"use strict";var o=e(78170),a=e(64748),r=e(64484),l=e(69703),i=e(68512),d=e(38805),f=e(1758),g=Array,h=Math.max,p=Math.min;o({target:"Array",proto:!0},{toSpliced:function(E,b){var w=d(this),x=l(w),R=i(E,x),P=arguments.length,j=0,N,F,A,k;for(P===0?N=F=0:P===1?(N=0,F=x-R):(N=P-2,F=p(h(f(b),0),x-R)),A=r(x+N-F),k=g(A);j<R;j++)k[j]=w[j];for(;j<R+N;j++)k[j]=arguments[j-R+2];for(;j<A;j++)k[j]=w[j+F-N];return k}}),a("toSpliced")},78716:function(s,v,e){"use strict";var o=e(78170),a=e(61510),r=e(38805),l=Array;o({target:"Array",proto:!0},{with:function(i,d){return a(r(this),l,i,d)}})},73700:function(s,v,e){var o=e(78170),a=e(95098),r=e(44912),l=e(80003),i="WebAssembly",d=a[i],f=Error("e",{cause:7}).cause!==7,g=function(p,m){var E={};E[p]=l(p,m,f),o({global:!0,constructor:!0,arity:1,forced:f},E)},h=function(p,m){if(d&&d[p]){var E={};E[p]=l(i+"."+p,m,f),o({target:i,stat:!0,constructor:!0,arity:1,forced:f},E)}};g("Error",function(p){return function(E){return r(p,this,arguments)}}),g("EvalError",function(p){return function(E){return r(p,this,arguments)}}),g("RangeError",function(p){return function(E){return r(p,this,arguments)}}),g("ReferenceError",function(p){return function(E){return r(p,this,arguments)}}),g("SyntaxError",function(p){return function(E){return r(p,this,arguments)}}),g("TypeError",function(p){return function(E){return r(p,this,arguments)}}),g("URIError",function(p){return function(E){return r(p,this,arguments)}}),h("CompileError",function(p){return function(E){return r(p,this,arguments)}}),h("LinkError",function(p){return function(E){return r(p,this,arguments)}}),h("RuntimeError",function(p){return function(E){return r(p,this,arguments)}})},9579:function(s,v,e){"use strict";var o=e(48362),a=e(3889);o("Map",function(r){return function(){return r(this,arguments.length?arguments[0]:void 0)}},a)},20288:function(s,v,e){e(9579)},8968:function(s,v,e){var o=e(78170),a=e(15415);o({target:"Object",stat:!0},{hasOwn:a})},32002:function(s,v,e){"use strict";var o=e(78170),a=e(1060),r=e(81820),l=e(33577),i=e(76393),d=e(1101),f=e(60980),g=e(86514),h="No one promise resolved";o({target:"Promise",stat:!0,forced:g},{any:function(m){var E=this,b=l("AggregateError"),w=i.f(E),x=w.resolve,R=w.reject,P=d(function(){var j=r(E.resolve),N=[],F=0,A=1,k=!1;f(m,function(z){var K=F++,ee=!1;A++,a(j,E,z).then(function(J){ee||k||(k=!0,x(J))},function(J){ee||k||(ee=!0,N[K]=J,--A||R(new b(N,h)))})}),--A||R(new b(N,h))});return P.error&&R(P.value),w.promise}})},50735:function(s,v,e){var o=e(78170),a=e(95098),r=e(30544);o({global:!0},{Reflect:{}}),r(a.Reflect,"Reflect",!0)},49276:function(s,v,e){var o=e(95098),a=e(75903),r=e(75678),l=e(92248),i=e(50486),d=o.RegExp,f=d.prototype,g=a&&i(function(){var h=!0;try{d(".","d")}catch(P){h=!1}var p={},m="",E=h?"dgimsy":"gimsy",b=function(P,j){Object.defineProperty(p,P,{get:function(){return m+=j,!0}})},w={dotAll:"s",global:"g",ignoreCase:"i",multiline:"m",sticky:"y"};h&&(w.hasIndices="d");for(var x in w)b(x,w[x]);var R=Object.getOwnPropertyDescriptor(f,"flags").get.call(p);return R!==E||m!==E});g&&r(f,"flags",{configurable:!0,get:l})},99597:function(s,v,e){"use strict";var o=e(78170),a=e(62515),r=e(23009),l=e(1758),i=e(92898),d=e(50486),f=a("".charAt),g=d(function(){return"\u{20BB7}".at(-2)!=="\uD842"});o({target:"String",proto:!0,forced:g},{at:function(p){var m=i(r(this)),E=m.length,b=l(p),w=b>=0?b:E+b;return w<0||w>=E?void 0:f(m,w)}})},79475:function(s,v,e){"use strict";var o=e(78170),a=e(1060),r=e(62515),l=e(23009),i=e(80754),d=e(5734),f=e(21220),g=e(92898),h=e(57619),p=e(46277),m=e(10704),E=e(29502),b=e(79766),w=E("replace"),x=TypeError,R=r("".indexOf),P=r("".replace),j=r("".slice),N=Math.max,F=function(A,k,z){return z>A.length?-1:k===""?z:R(A,k,z)};o({target:"String",proto:!0},{replaceAll:function(k,z){var K=l(this),ee,J,ce,Te,Oe,Ne,_e,je,q,re=0,ae=0,O="";if(!d(k)){if(ee=f(k),ee&&(J=g(l(p(k))),!~R(J,"g")))throw x("`.replaceAll` does not allow non-global regexes");if(ce=h(k,w),ce)return a(ce,k,K,z);if(b&&ee)return P(g(K),k,z)}for(Te=g(K),Oe=g(k),Ne=i(z),Ne||(z=g(z)),_e=Oe.length,je=N(1,_e),re=F(Te,Oe,0);re!==-1;)q=Ne?g(z(Oe,re,Te)):m(Oe,Te,re,[],void 0,z),O+=j(Te,ae,re)+q,ae=re+_e,re=F(Te,Oe,re+je);return ae<Te.length&&(O+=j(Te,ae)),O}})},16181:function(s,v,e){"use strict";var o=e(32124),a=e(69703),r=e(1758),l=o.aTypedArray,i=o.exportTypedArrayMethod;i("at",function(f){var g=l(this),h=a(g),p=r(f),m=p>=0?p:h+p;return m<0||m>=h?void 0:g[m]})},56960:function(s,v,e){"use strict";var o=e(32124),a=e(95562).findLastIndex,r=o.aTypedArray,l=o.exportTypedArrayMethod;l("findLastIndex",function(d){return a(r(this),d,arguments.length>1?arguments[1]:void 0)})},20207:function(s,v,e){"use strict";var o=e(32124),a=e(95562).findLast,r=o.aTypedArray,l=o.exportTypedArrayMethod;l("findLast",function(d){return a(r(this),d,arguments.length>1?arguments[1]:void 0)})},60205:function(s,v,e){"use strict";var o=e(95098),a=e(1060),r=e(32124),l=e(69703),i=e(36026),d=e(32331),f=e(50486),g=o.RangeError,h=o.Int8Array,p=h&&h.prototype,m=p&&p.set,E=r.aTypedArray,b=r.exportTypedArrayMethod,w=!f(function(){var R=new Uint8ClampedArray(2);return a(m,R,{length:1,0:3},1),R[1]!==3}),x=w&&r.NATIVE_ARRAY_BUFFER_VIEWS&&f(function(){var R=new h(2);return R.set(1),R.set("2",1),R[0]!==0||R[1]!==2});b("set",function(P){E(this);var j=i(arguments.length>1?arguments[1]:void 0,1),N=d(P);if(w)return a(m,this,N,j);var F=this.length,A=l(N),k=0;if(A+j>F)throw g("Wrong length");for(;k<A;)this[j+k]=N[k++]},!w||x)},30089:function(s,v,e){"use strict";var o=e(2950),a=e(32124),r=a.aTypedArray,l=a.exportTypedArrayMethod,i=a.getTypedArrayConstructor;l("toReversed",function(){return o(r(this),i(this))})},94897:function(s,v,e){"use strict";var o=e(32124),a=e(62515),r=e(81820),l=e(85117),i=o.aTypedArray,d=o.getTypedArrayConstructor,f=o.exportTypedArrayMethod,g=a(o.TypedArrayPrototype.sort);f("toSorted",function(p){p!==void 0&&r(p);var m=i(this),E=l(d(m),m);return g(E,p)})},41088:function(s,v,e){"use strict";var o=e(61510),a=e(32124),r=e(76193),l=e(1758),i=e(42348),d=a.aTypedArray,f=a.getTypedArrayConstructor,g=a.exportTypedArrayMethod,h=!!function(){try{new Int8Array(1).with(2,{valueOf:function(){throw 8}})}catch(p){return p===8}}();g("with",function(p,m){var E=d(this),b=l(p),w=r(E)?i(m):+m;return o(E,f(E),b,w)},!h)},88054:function(s,v,e){"use strict";var o=e(54339),a=e(95098),r=e(62515),l=e(85231),i=e(49407),d=e(48362),f=e(68407),g=e(28180),h=e(39675).enforce,p=e(50486),m=e(56343),E=Object,b=Array.isArray,w=E.isExtensible,x=E.isFrozen,R=E.isSealed,P=E.freeze,j=E.seal,N={},F={},A=!a.ActiveXObject&&"ActiveXObject"in a,k,z=function(_e){return function(){return _e(this,arguments.length?arguments[0]:void 0)}},K=d("WeakMap",z,f),ee=K.prototype,J=r(ee.set),ce=function(){return o&&p(function(){var _e=P([]);return J(new K,_e,1),!x(_e)})};if(m)if(A){k=f.getConstructor(z,"WeakMap",!0),i.enable();var Te=r(ee.delete),Oe=r(ee.has),Ne=r(ee.get);l(ee,{delete:function(_e){if(g(_e)&&!w(_e)){var je=h(this);return je.frozen||(je.frozen=new k),Te(this,_e)||je.frozen.delete(_e)}return Te(this,_e)},has:function(je){if(g(je)&&!w(je)){var q=h(this);return q.frozen||(q.frozen=new k),Oe(this,je)||q.frozen.has(je)}return Oe(this,je)},get:function(je){if(g(je)&&!w(je)){var q=h(this);return q.frozen||(q.frozen=new k),Oe(this,je)?Ne(this,je):q.frozen.get(je)}return Ne(this,je)},set:function(je,q){if(g(je)&&!w(je)){var re=h(this);re.frozen||(re.frozen=new k),Oe(this,je)?J(this,je,q):re.frozen.set(je,q)}else J(this,je,q);return this}})}else ce()&&l(ee,{set:function(je,q){var re;return b(je)&&(x(je)?re=N:R(je)&&(re=F)),J(this,je,q),re==N&&P(je),re==F&&j(je),this}})},20404:function(s,v,e){e(88054)},29950:function(s,v,e){"use strict";var o=e(75903),a=e(75678),r=e(3766),l=ArrayBuffer.prototype;o&&!("detached"in l)&&a(l,"detached",{configurable:!0,get:function(){return r(this)}})},51889:function(s,v,e){"use strict";var o=e(78170),a=e(74380);a&&o({target:"ArrayBuffer",proto:!0},{transferToFixedLength:function(){return a(this,arguments.length?arguments[0]:void 0,!1)}})},94977:function(s,v,e){"use strict";var o=e(78170),a=e(74380);a&&o({target:"ArrayBuffer",proto:!0},{transfer:function(){return a(this,arguments.length?arguments[0]:void 0,!0)}})},51644:function(s,v,e){"use strict";var o=e(78170),a=e(31171).filterReject,r=e(64748);o({target:"Array",proto:!0,forced:!0},{filterOut:function(i){return a(this,i,arguments.length>1?arguments[1]:void 0)}}),r("filterOut")},22099:function(s,v,e){"use strict";var o=e(78170),a=e(31171).filterReject,r=e(64748);o({target:"Array",proto:!0,forced:!0},{filterReject:function(i){return a(this,i,arguments.length>1?arguments[1]:void 0)}}),r("filterReject")},72182:function(s,v,e){var o=e(78170),a=e(72986);o({target:"Array",stat:!0},{fromAsync:a})},95374:function(s,v,e){var o=e(78170),a=e(44962),r=e(64748),l=e(66795),i=e(79766);o({target:"Array",proto:!0,name:"groupToMap",forced:i||!a("groupByToMap")},{groupByToMap:l}),r("groupByToMap")},31735:function(s,v,e){"use strict";var o=e(78170),a=e(86198),r=e(44962),l=e(64748);o({target:"Array",proto:!0,forced:!r("groupBy")},{groupBy:function(d){var f=arguments.length>1?arguments[1]:void 0;return a(this,d,f)}}),l("groupBy")},15919:function(s,v,e){var o=e(78170),a=e(64748),r=e(66795),l=e(79766);o({target:"Array",proto:!0,forced:l},{groupToMap:r}),a("groupToMap")},92826:function(s,v,e){"use strict";var o=e(78170),a=e(86198),r=e(64748);o({target:"Array",proto:!0},{group:function(i){var d=arguments.length>1?arguments[1]:void 0;return a(this,i,d)}}),r("group")},49979:function(s,v,e){var o=e(78170),a=e(45399),r=Object.isFrozen,l=function(i,d){if(!r||!a(i)||!r(i))return!1;for(var f=0,g=i.length,h;f<g;)if(h=i[f++],!(typeof h=="string"||d&&h===void 0))return!1;return g!==0};o({target:"Array",stat:!0,sham:!0,forced:!0},{isTemplateObject:function(d){if(!l(d,!0))return!1;var f=d.raw;return f.length===d.length&&l(f,!1)}})},55806:function(s,v,e){"use strict";var o=e(75903),a=e(64748),r=e(32331),l=e(69703),i=e(75678);o&&(i(Array.prototype,"lastIndex",{configurable:!0,get:function(){var f=r(this),g=l(f);return g==0?0:g-1}}),a("lastIndex"))},89046:function(s,v,e){"use strict";var o=e(75903),a=e(64748),r=e(32331),l=e(69703),i=e(75678);o&&(i(Array.prototype,"lastItem",{configurable:!0,get:function(){var f=r(this),g=l(f);return g==0?void 0:f[g-1]},set:function(f){var g=r(this),h=l(g);return g[h==0?0:h-1]=f}}),a("lastItem"))},63162:function(s,v,e){"use strict";var o=e(78170),a=e(64748),r=e(20001);o({target:"Array",proto:!0,forced:!0},{uniqueBy:r}),a("uniqueBy")},73223:function(s,v,e){"use strict";var o=e(78170),a=e(75903),r=e(33577),l=e(81820),i=e(22275),d=e(90014),f=e(85231),g=e(75678),h=e(29502),p=e(39675),m=e(82205),E=r("Promise"),b=r("SuppressedError"),w=ReferenceError,x=h("asyncDispose"),R=h("toStringTag"),P="AsyncDisposableStack",j=p.set,N=p.getterFor(P),F="async-dispose",A="disposed",k="pending",z=P+" already disposed",K=function(){j(i(this,ee),{type:P,state:k,stack:[]}),a||(this.disposed=!1)},ee=K.prototype;f(ee,{disposeAsync:function(){var ce=this;return new E(function(Te,Oe){var Ne=N(ce);if(Ne.state==A)return Te(void 0);Ne.state=A,a||(ce.disposed=!0);var _e=Ne.stack,je=_e.length,q=!1,re,ae=function(L){q?re=new b(L,re):(q=!0,re=L),O()},O=function(){if(je){var L=_e[--je];_e[je]=null;try{E.resolve(L()).then(O,ae)}catch(W){ae(W)}}else Ne.stack=null,q?Oe(re):Te(void 0)};O()})},use:function(ce){var Te=N(this);if(Te.state==A)throw w(z);return m(Te,ce,F),ce},adopt:function(ce,Te){var Oe=N(this);if(Oe.state==A)throw w(z);return l(Te),m(Oe,void 0,F,function(){Te(ce)}),ce},defer:function(ce){var Te=N(this);if(Te.state==A)throw w(z);l(ce),m(Te,void 0,F,ce)},move:function(){var ce=N(this);if(ce.state==A)throw w(z);var Te=new K;return N(Te).stack=ce.stack,ce.stack=[],Te}}),a&&g(ee,"disposed",{configurable:!0,get:function(){return N(this).state==A}}),d(ee,x,ee.disposeAsync,{name:"disposeAsync"}),d(ee,R,P,{nonWritable:!0}),o({global:!0,constructor:!0,forced:!0},{AsyncDisposableStack:K})},52274:function(s,v,e){var o=e(78170),a=e(39233);o({target:"AsyncIterator",name:"indexed",proto:!0,real:!0,forced:!0},{asIndexedPairs:a})},96301:function(s,v,e){"use strict";var o=e(1060),a=e(90014),r=e(33577),l=e(57619),i=e(15415),d=e(29502),f=e(13488),g=d("asyncDispose"),h=r("Promise");i(f,g)||a(f,g,function(){var p=this;return new h(function(m,E){var b=l(p,"return");b?h.resolve(o(b,p)).then(function(){m(void 0)},E):m(void 0)})})},11397:function(s,v,e){"use strict";var o=e(78170),a=e(22275),r=e(78401),l=e(15415),i=e(29502),d=e(13488),f=e(79766),g=i("toStringTag"),h=function(){a(this,d)};h.prototype=d,l(d,g)||r(d,g,"AsyncIterator"),(f||!l(d,"constructor")||d.constructor===Object)&&r(d,"constructor",h),o({global:!0,constructor:!0,forced:f},{AsyncIterator:h})},91793:function(s,v,e){"use strict";var o=e(78170),a=e(1060),r=e(88483),l=e(27642),i=e(89595),d=e(14884),f=e(33270),g=e(489),h=f(function(p){var m=this;return new p(function(E,b){var w=function(R){m.done=!0,b(R)},x=function(){try{p.resolve(r(a(m.next,m.iterator))).then(function(R){try{r(R).done?(m.done=!0,E(g(void 0,!0))):m.remaining?(m.remaining--,x()):E(g(R.value,!1))}catch(P){w(P)}},w)}catch(R){w(R)}};x()})});o({target:"AsyncIterator",proto:!0,real:!0},{drop:function(m){return new h(l(this),{remaining:d(i(+m))})}})},39086:function(s,v,e){"use strict";var o=e(78170),a=e(3714).every;o({target:"AsyncIterator",proto:!0,real:!0},{every:function(l){return a(this,l)}})},81135:function(s,v,e){"use strict";var o=e(78170),a=e(1060),r=e(81820),l=e(88483),i=e(28180),d=e(27642),f=e(33270),g=e(489),h=e(39492),p=f(function(m){var E=this,b=E.iterator,w=E.predicate;return new m(function(x,R){var P=function(F){E.done=!0,R(F)},j=function(F){h(b,P,F,P)},N=function(){try{m.resolve(l(a(E.next,b))).then(function(F){try{if(l(F).done)E.done=!0,x(g(void 0,!0));else{var A=F.value;try{var k=w(A,E.counter++),z=function(K){K?x(g(A,!1)):N()};i(k)?m.resolve(k).then(z,j):z(k)}catch(K){j(K)}}}catch(K){P(K)}},P)}catch(F){P(F)}};N()})});o({target:"AsyncIterator",proto:!0,real:!0},{filter:function(E){return new p(d(this),{predicate:r(E)})}})},38137:function(s,v,e){"use strict";var o=e(78170),a=e(3714).find;o({target:"AsyncIterator",proto:!0,real:!0},{find:function(l){return a(this,l)}})},11770:function(s,v,e){"use strict";var o=e(78170),a=e(1060),r=e(81820),l=e(88483),i=e(28180),d=e(27642),f=e(33270),g=e(489),h=e(30896),p=e(39492),m=f(function(E){var b=this,w=b.iterator,x=b.mapper;return new E(function(R,P){var j=function(k){b.done=!0,P(k)},N=function(k){p(w,j,k,j)},F=function(){try{E.resolve(l(a(b.next,w))).then(function(k){try{if(l(k).done)b.done=!0,R(g(void 0,!0));else{var z=k.value;try{var K=x(z,b.counter++),ee=function(J){try{b.inner=h(J),A()}catch(ce){N(ce)}};i(K)?E.resolve(K).then(ee,N):ee(K)}catch(J){N(J)}}}catch(J){j(J)}},j)}catch(k){j(k)}},A=function(){var k=b.inner;if(k)try{E.resolve(l(a(k.next,k.iterator))).then(function(z){try{l(z).done?(b.inner=null,F()):R(g(z.value,!1))}catch(K){N(K)}},N)}catch(z){N(z)}else F()};A()})});o({target:"AsyncIterator",proto:!0,real:!0},{flatMap:function(b){return new m(d(this),{mapper:r(b),inner:null})}})},47165:function(s,v,e){"use strict";var o=e(78170),a=e(3714).forEach;o({target:"AsyncIterator",proto:!0,real:!0},{forEach:function(l){return a(this,l)}})},43583:function(s,v,e){var o=e(78170),a=e(32331),r=e(34684),l=e(30896),i=e(13488),d=e(63590);o({target:"AsyncIterator",stat:!0},{from:function(g){var h=l(typeof g=="string"?a(g):g);return r(i,h.iterator)?h.iterator:new d(h)}})},36825:function(s,v,e){var o=e(78170),a=e(39233);o({target:"AsyncIterator",proto:!0,real:!0,forced:!0},{indexed:a})},99378:function(s,v,e){var o=e(78170),a=e(94786);o({target:"AsyncIterator",proto:!0,real:!0},{map:a})},35048:function(s,v,e){"use strict";var o=e(78170),a=e(1060),r=e(81820),l=e(88483),i=e(28180),d=e(33577),f=e(27642),g=e(39492),h=d("Promise"),p=TypeError;o({target:"AsyncIterator",proto:!0,real:!0},{reduce:function(E){var b=f(this),w=b.iterator,x=b.next,R=arguments.length<2,P=R?void 0:arguments[1],j=0;return r(E),new h(function(N,F){var A=function(z){g(w,F,z,F)},k=function(){try{h.resolve(l(a(x,w))).then(function(z){try{if(l(z).done)R?F(p("Reduce of empty iterator with no initial value")):N(P);else{var K=z.value;if(R)R=!1,P=K,k();else try{var ee=E(P,K,j),J=function(ce){P=ce,k()};i(ee)?h.resolve(ee).then(J,A):J(ee)}catch(ce){A(ce)}}j++}catch(ce){F(ce)}},F)}catch(z){F(z)}};k()})}})},84798:function(s,v,e){"use strict";var o=e(78170),a=e(3714).some;o({target:"AsyncIterator",proto:!0,real:!0},{some:function(l){return a(this,l)}})},77021:function(s,v,e){"use strict";var o=e(78170),a=e(1060),r=e(88483),l=e(27642),i=e(89595),d=e(14884),f=e(33270),g=e(489),h=f(function(p){var m=this,E=m.iterator,b;if(!m.remaining--){var w=g(void 0,!0);return m.done=!0,b=E.return,b!==void 0?p.resolve(a(b,E,void 0)).then(function(){return w}):w}return p.resolve(a(m.next,E)).then(function(x){return r(x).done?(m.done=!0,g(void 0,!0)):g(x.value,!1)}).then(null,function(x){throw m.done=!0,x})});o({target:"AsyncIterator",proto:!0,real:!0},{take:function(m){return new h(l(this),{remaining:d(i(+m))})}})},15088:function(s,v,e){"use strict";var o=e(78170),a=e(3714).toArray;o({target:"AsyncIterator",proto:!0,real:!0},{toArray:function(){return a(this,void 0,[])}})},48081:function(s,v,e){"use strict";var o=e(78170),a=e(65939);typeof BigInt=="function"&&o({target:"BigInt",stat:!0,forced:!0},{range:function(l,i,d){return new a(l,i,d,"bigint",BigInt(0),BigInt(1))}})},97516:function(s,v,e){var o=e(78170),a=e(44912),r=e(40768),l=e(33577),i=e(64847),d=Object,f=function(){var g=l("Object","freeze");return g?g(i(null)):i(null)};o({global:!0,forced:!0},{compositeKey:function(){return a(r,d,arguments).get("object",f)}})},74807:function(s,v,e){var o=e(78170),a=e(40768),r=e(33577),l=e(44912);o({global:!0,forced:!0},{compositeSymbol:function(){return arguments.length==1&&typeof arguments[0]=="string"?r("Symbol").for(arguments[0]):l(a,null,arguments).get("symbol",r("Symbol"))}})},57303:function(s,v,e){"use strict";var o=e(78170),a=e(75903),r=e(33577),l=e(81820),i=e(22275),d=e(90014),f=e(85231),g=e(75678),h=e(29502),p=e(39675),m=e(82205),E=r("SuppressedError"),b=ReferenceError,w=h("dispose"),x=h("toStringTag"),R="DisposableStack",P=p.set,j=p.getterFor(R),N="sync-dispose",F="disposed",A="pending",k=R+" already disposed",z=function(){P(i(this,K),{type:R,state:A,stack:[]}),a||(this.disposed=!1)},K=z.prototype;f(K,{dispose:function(){var J=j(this);if(J.state!=F){J.state=F,a||(this.disposed=!0);for(var ce=J.stack,Te=ce.length,Oe=!1,Ne;Te;){var _e=ce[--Te];ce[Te]=null;try{_e()}catch(je){Oe?Ne=new E(je,Ne):(Oe=!0,Ne=je)}}if(J.stack=null,Oe)throw Ne}},use:function(J){var ce=j(this);if(ce.state==F)throw b(k);return m(ce,J,N),J},adopt:function(J,ce){var Te=j(this);if(Te.state==F)throw b(k);return l(ce),m(Te,void 0,N,function(){ce(J)}),J},defer:function(J){var ce=j(this);if(ce.state==F)throw b(k);l(J),m(ce,void 0,N,J)},move:function(){var J=j(this);if(J.state==F)throw b(k);var ce=new z;return j(ce).stack=J.stack,J.stack=[],ce}}),a&&g(K,"disposed",{configurable:!0,get:function(){return j(this).state==F}}),d(K,w,K.dispose,{name:"dispose"}),d(K,x,R,{nonWritable:!0}),o({global:!0,constructor:!0},{DisposableStack:z})},71416:function(s,v,e){var o=e(78170),a=e(40492);o({target:"Function",proto:!0,forced:!0},{demethodize:a})},30537:function(s,v,e){var o=e(78170),a=e(62515),r=e(80754),l=e(27820),i=e(15415),d=e(75903),f=Object.getOwnPropertyDescriptor,g=/^\s*class\b/,h=a(g.exec),p=function(m){try{if(!d||!h(g,l(m)))return!1}catch(b){}var E=f(m,"prototype");return!!E&&i(E,"writable")&&!E.writable};o({target:"Function",stat:!0,sham:!0,forced:!0},{isCallable:function(E){return r(E)&&!p(E)}})},15805:function(s,v,e){var o=e(78170),a=e(33590);o({target:"Function",stat:!0,forced:!0},{isConstructor:a})},31434:function(s,v,e){var o=e(78170),a=e(40492);o({target:"Function",proto:!0,forced:!0,name:"demethodize"},{unThis:a})},44938:function(s,v,e){var o=e(78170),a=e(53519);o({target:"Iterator",name:"indexed",proto:!0,real:!0,forced:!0},{asIndexedPairs:a})},86528:function(s,v,e){"use strict";var o=e(78170),a=e(95098),r=e(22275),l=e(80754),i=e(78401),d=e(50486),f=e(15415),g=e(29502),h=e(52253).IteratorPrototype,p=e(79766),m=g("toStringTag"),E=a.Iterator,b=p||!l(E)||E.prototype!==h||!d(function(){E({})}),w=function(){r(this,h)};f(h,m)||i(h,m,"Iterator"),(b||!f(h,"constructor")||h.constructor===Object)&&i(h,"constructor",w),w.prototype=h,o({global:!0,constructor:!0,forced:b},{Iterator:w})},14266:function(s,v,e){"use strict";var o=e(1060),a=e(90014),r=e(57619),l=e(15415),i=e(29502),d=e(52253).IteratorPrototype,f=i("dispose");l(d,f)||a(d,f,function(){var g=r(this,"return");g&&o(g,this)})},91:function(s,v,e){"use strict";var o=e(78170),a=e(1060),r=e(88483),l=e(27642),i=e(89595),d=e(14884),f=e(93501),g=f(function(){for(var h=this.iterator,p=this.next,m,E;this.remaining;)if(this.remaining--,m=r(a(p,h)),E=this.done=!!m.done,E)return;if(m=r(a(p,h)),E=this.done=!!m.done,!E)return m.value});o({target:"Iterator",proto:!0,real:!0},{drop:function(p){return new g(l(this),{remaining:d(i(+p))})}})},67153:function(s,v,e){"use strict";var o=e(78170),a=e(60980),r=e(81820),l=e(27642);o({target:"Iterator",proto:!0,real:!0},{every:function(d){var f=l(this),g=0;return r(d),!a(f,function(h,p){if(!d(h,g++))return p()},{IS_RECORD:!0,INTERRUPTED:!0}).stopped}})},86985:function(s,v,e){"use strict";var o=e(78170),a=e(1060),r=e(81820),l=e(88483),i=e(27642),d=e(93501),f=e(49429),g=d(function(){for(var h=this.iterator,p=this.predicate,m=this.next,E,b,w;;){if(E=l(a(m,h)),b=this.done=!!E.done,b)return;if(w=E.value,f(h,p,[w,this.counter++],!0))return w}});o({target:"Iterator",proto:!0,real:!0},{filter:function(p){return new g(i(this),{predicate:r(p)})}})},30932:function(s,v,e){"use strict";var o=e(78170),a=e(60980),r=e(81820),l=e(27642);o({target:"Iterator",proto:!0,real:!0},{find:function(d){var f=l(this),g=0;return r(d),a(f,function(h,p){if(d(h,g++))return p(h)},{IS_RECORD:!0,INTERRUPTED:!0}).result}})},95422:function(s,v,e){"use strict";var o=e(78170),a=e(1060),r=e(81820),l=e(88483),i=e(27642),d=e(11383),f=e(93501),g=e(63215),h=f(function(){for(var p=this.iterator,m=this.mapper,E,b;;){if(b=this.inner)try{if(E=l(a(b.next,b.iterator)),!E.done)return E.value;this.inner=null}catch(w){g(p,"throw",w)}if(E=l(a(this.next,p)),this.done=!!E.done)return;try{this.inner=d(m(E.value,this.counter++))}catch(w){g(p,"throw",w)}}});o({target:"Iterator",proto:!0,real:!0},{flatMap:function(m){return new h(i(this),{mapper:r(m),inner:null})}})},74062:function(s,v,e){"use strict";var o=e(78170),a=e(60980),r=e(81820),l=e(27642);o({target:"Iterator",proto:!0,real:!0},{forEach:function(d){var f=l(this),g=0;r(d),a(f,function(h){d(h,g++)},{IS_RECORD:!0})}})},64409:function(s,v,e){var o=e(78170),a=e(1060),r=e(32331),l=e(34684),i=e(52253).IteratorPrototype,d=e(93501),f=e(11383),g=d(function(){return a(this.next,this.iterator)},!0);o({target:"Iterator",stat:!0},{from:function(p){var m=f(typeof p=="string"?r(p):p);return l(i,m.iterator)?m.iterator:new g(m)}})},66408:function(s,v,e){var o=e(78170),a=e(53519);o({target:"Iterator",proto:!0,real:!0,forced:!0},{indexed:a})},24606:function(s,v,e){var o=e(78170),a=e(92551);o({target:"Iterator",proto:!0,real:!0},{map:a})},55152:function(s,v,e){"use strict";var o=e(78170),a=e(65939),r=TypeError;o({target:"Iterator",stat:!0,forced:!0},{range:function(i,d,f){if(typeof i=="number")return new a(i,d,f,"number",0,1);if(typeof i=="bigint")return new a(i,d,f,"bigint",BigInt(0),BigInt(1));throw r("Incorrect Iterator.range arguments")}})},32372:function(s,v,e){"use strict";var o=e(78170),a=e(60980),r=e(81820),l=e(27642),i=TypeError;o({target:"Iterator",proto:!0,real:!0},{reduce:function(f){var g=l(this);r(f);var h=arguments.length<2,p=h?void 0:arguments[1],m=0;if(a(g,function(E){h?(h=!1,p=E):p=f(p,E,m),m++},{IS_RECORD:!0}),h)throw i("Reduce of empty iterator with no initial value");return p}})},28311:function(s,v,e){"use strict";var o=e(78170),a=e(60980),r=e(81820),l=e(27642);o({target:"Iterator",proto:!0,real:!0},{some:function(d){var f=l(this),g=0;return r(d),a(f,function(h,p){if(d(h,g++))return p()},{IS_RECORD:!0,INTERRUPTED:!0}).stopped}})},15378:function(s,v,e){"use strict";var o=e(78170),a=e(1060),r=e(88483),l=e(27642),i=e(89595),d=e(14884),f=e(93501),g=e(63215),h=f(function(){var p=this.iterator;if(!this.remaining--)return this.done=!0,g(p,"normal",void 0);var m=r(a(this.next,p)),E=this.done=!!m.done;if(!E)return m.value});o({target:"Iterator",proto:!0,real:!0},{take:function(m){return new h(l(this),{remaining:d(i(+m))})}})},91421:function(s,v,e){"use strict";var o=e(78170),a=e(60980),r=e(27642),l=[].push;o({target:"Iterator",proto:!0,real:!0},{toArray:function(){var d=[];return a(r(this),l,{that:d,IS_RECORD:!0}),d}})},64722:function(s,v,e){"use strict";var o=e(78170),a=e(73121),r=e(63590),l=e(27642);o({target:"Iterator",proto:!0,real:!0},{toAsync:function(){return new r(l(new a(l(this))))}})},85320:function(s,v,e){var o=e(78170),a=e(69336),r=e(62567);o({target:"JSON",stat:!0,forced:!a},{isRawJSON:r})},34433:function(s,v,e){"use strict";var o=e(78170),a=e(75903),r=e(95098),l=e(33577),i=e(62515),d=e(1060),f=e(80754),g=e(28180),h=e(45399),p=e(15415),m=e(92898),E=e(69703),b=e(31019),w=e(50486),x=e(3554),R=e(82436),P=r.JSON,j=r.Number,N=r.SyntaxError,F=P&&P.parse,A=l("Object","keys"),k=Object.getOwnPropertyDescriptor,z=i("".charAt),K=i("".slice),ee=i(/./.exec),J=i([].push),ce=/^\d$/,Te=/^[1-9]$/,Oe=/^(-|\d)$/,Ne=/^[\t\n\r ]$/,_e=0,je=1,q=function(G,I){G=m(G);var H=new L(G,0,""),$=H.parse(),Y=$.value,X=H.skip(Ne,$.end);if(X<G.length)throw N('Unexpected extra character: "'+z(G,X)+'" after the parsed data at: '+X);return f(I)?re({"":Y},"",I,$):Y},re=function(G,I,H,$){var Y=G[I],X=$&&Y===$.value,Re=X&&typeof $.source=="string"?{source:$.source}:{},Fe,at,et,Ke,ot;if(g(Y)){var te=h(Y),fe=X?$.nodes:te?[]:{};if(te)for(Fe=fe.length,et=E(Y),Ke=0;Ke<et;Ke++)ae(Y,Ke,re(Y,""+Ke,H,Ke<Fe?fe[Ke]:void 0));else for(at=A(Y),et=E(at),Ke=0;Ke<et;Ke++)ot=at[Ke],ae(Y,ot,re(Y,ot,H,p(fe,ot)?fe[ot]:void 0))}return d(H,G,I,Y,Re)},ae=function(G,I,H){if(a){var $=k(G,I);if($&&!$.configurable)return}H===void 0?delete G[I]:b(G,I,H)},O=function(G,I,H,$){this.value=G,this.end=I,this.source=H,this.nodes=$},L=function(G,I){this.source=G,this.index=I};L.prototype={fork:function(G){return new L(this.source,G)},parse:function(){var G=this.source,I=this.skip(Ne,this.index),H=this.fork(I),$=z(G,I),Y;if(ee(Oe,$))Y=H.number();else switch($){case"{":Y=H.object();break;case"[":Y=H.array();break;case'"':Y=H.string();break;case"t":Y=H.keyword(!0);break;case"f":Y=H.keyword(!1);break;case"n":Y=H.keyword(null);break;default:throw N('Unexpected character: "'+$+'" at: '+I)}return Y},node:function(G,I,H,$,Y){return new O(I,$,G?null:K(this.source,H,$),Y)},object:function(){for(var G=this.source,I=this.index+1,H=!1,$={},Y={};I<G.length;){if(I=this.until(['"',"}"],I),z(G,I)=="}"&&!H){I++;break}var X=this.fork(I).string(),Re=X.value;I=X.end,I=this.until([":"],I)+1,I=this.skip(Ne,I),X=this.fork(I).parse(),b(Y,Re,X),b($,Re,X.value),I=this.until([",","}"],X.end);var Fe=z(G,I);if(Fe==",")H=!0,I++;else if(Fe=="}"){I++;break}}return this.node(je,$,this.index,I,Y)},array:function(){for(var G=this.source,I=this.index+1,H=!1,$=[],Y=[];I<G.length;){if(I=this.skip(Ne,I),z(G,I)=="]"&&!H){I++;break}var X=this.fork(I).parse();if(J(Y,X),J($,X.value),I=this.until([",","]"],X.end),z(G,I)==",")H=!0,I++;else if(z(G,I)=="]"){I++;break}}return this.node(je,$,this.index,I,Y)},string:function(){var G=this.index,I=x(this.source,this.index+1);return this.node(_e,I.value,G,I.end)},number:function(){var G=this.source,I=this.index,H=I;if(z(G,H)=="-"&&H++,z(G,H)=="0")H++;else if(ee(Te,z(G,H)))H=this.skip(ce,++H);else throw N("Failed to parse number at: "+H);if(z(G,H)=="."&&(H=this.skip(ce,++H)),z(G,H)=="e"||z(G,H)=="E"){H++,(z(G,H)=="+"||z(G,H)=="-")&&H++;var $=H;if(H=this.skip(ce,H),$==H)throw N("Failed to parse number's exponent value at: "+H)}return this.node(_e,j(K(G,I,H)),I,H)},keyword:function(G){var I=""+G,H=this.index,$=H+I.length;if(K(this.source,H,$)!=I)throw N("Failed to parse value at: "+H);return this.node(_e,G,H,$)},skip:function(G,I){for(var H=this.source;I<H.length&&ee(G,z(H,I));I++);return I},until:function(G,I){I=this.skip(Ne,I);for(var H=z(this.source,I),$=0;$<G.length;$++)if(G[$]==H)return I;throw N('Unexpected character: "'+H+'" at: '+I)}};var W=w(function(){var G="9007199254740993",I;return F(G,function(H,$,Y){I=Y.source}),I!==G}),V=R&&!w(function(){return 1/F("-0 	")!==-1/0});o({target:"JSON",stat:!0,forced:W},{parse:function(I,H){return V&&!f(H)?F(I):q(I,H)}})},97560:function(s,v,e){"use strict";var o=e(78170),a=e(54339),r=e(69336),l=e(33577),i=e(1060),d=e(62515),f=e(80754),g=e(62567),h=e(92898),p=e(31019),m=e(3554),E=e(66380),b=e(50147),w=e(39675).set,x=String,R=SyntaxError,P=l("JSON","parse"),j=l("JSON","stringify"),N=l("Object","create"),F=l("Object","freeze"),A=d("".charAt),k=d("".slice),z=d(/./.exec),K=d([].push),ee=b(),J=ee.length,ce="Unacceptable as raw JSON",Te=/^[\t\n\r ]$/;o({target:"JSON",stat:!0,forced:!r},{rawJSON:function(Ne){var _e=h(Ne);if(_e==""||z(Te,A(_e,0))||z(Te,A(_e,_e.length-1)))throw R(ce);var je=P(_e);if(typeof je=="object"&&je!==null)throw R(ce);var q=N(null);return w(q,{type:"RawJSON"}),p(q,"rawJSON",_e),a?F(q):q}}),j&&o({target:"JSON",stat:!0,arity:3,forced:!r},{stringify:function(Ne,_e,je){var q=E(_e),re=[],ae=j(Ne,function(H,$){var Y=f(q)?i(q,this,x(H),$):$;return g(Y)?ee+(K(re,Y.rawJSON)-1):Y},je);if(typeof ae!="string")return ae;for(var O="",L=ae.length,W=0;W<L;W++){var V=A(ae,W);if(V=='"'){var G=m(ae,++W).end-1,I=k(ae,W,G);O+=k(I,0,J)==ee?re[k(I,J)]:'"'+I+'"',W=G}else O+=V}return O}})},24675:function(s,v,e){"use strict";var o=e(78170),a=e(12789),r=e(52483).remove;o({target:"Map",proto:!0,real:!0,forced:!0},{deleteAll:function(){for(var i=a(this),d=!0,f,g=0,h=arguments.length;g<h;g++)f=r(i,arguments[g]),d=d&&f;return!!d}})},42929:function(s,v,e){"use strict";var o=e(78170),a=e(12789),r=e(52483),l=r.get,i=r.has,d=r.set;o({target:"Map",proto:!0,real:!0,forced:!0},{emplace:function(g,h){var p=a(this),m,E;return i(p,g)?(m=l(p,g),"update"in h&&(m=h.update(m,g,p),d(p,g,m)),m):(E=h.insert(g,p),d(p,g,E),E)}})},12767:function(s,v,e){"use strict";var o=e(78170),a=e(57369),r=e(12789),l=e(66262);o({target:"Map",proto:!0,real:!0,forced:!0},{every:function(d){var f=r(this),g=a(d,arguments.length>1?arguments[1]:void 0);return l(f,function(h,p){if(!g(h,p,f))return!1},!0)!==!1}})},34670:function(s,v,e){"use strict";var o=e(78170),a=e(57369),r=e(12789),l=e(52483),i=e(66262),d=l.Map,f=l.set;o({target:"Map",proto:!0,real:!0,forced:!0},{filter:function(h){var p=r(this),m=a(h,arguments.length>1?arguments[1]:void 0),E=new d;return i(p,function(b,w){m(b,w,p)&&f(E,w,b)}),E}})},41728:function(s,v,e){"use strict";var o=e(78170),a=e(57369),r=e(12789),l=e(66262);o({target:"Map",proto:!0,real:!0,forced:!0},{findKey:function(d){var f=r(this),g=a(d,arguments.length>1?arguments[1]:void 0),h=l(f,function(p,m){if(g(p,m,f))return{key:m}},!0);return h&&h.key}})},31212:function(s,v,e){"use strict";var o=e(78170),a=e(57369),r=e(12789),l=e(66262);o({target:"Map",proto:!0,real:!0,forced:!0},{find:function(d){var f=r(this),g=a(d,arguments.length>1?arguments[1]:void 0),h=l(f,function(p,m){if(g(p,m,f))return{value:p}},!0);return h&&h.value}})},9056:function(s,v,e){var o=e(78170),a=e(54799);o({target:"Map",stat:!0,forced:!0},{from:a})},63915:function(s,v,e){"use strict";var o=e(78170),a=e(1060),r=e(62515),l=e(80754),i=e(81820),d=e(60980),f=e(52483).Map,g=r([].push);o({target:"Map",stat:!0,forced:!0},{groupBy:function(p,m){var E=l(this)?this:f,b=new E;i(m);var w=i(b.has),x=i(b.get),R=i(b.set);return d(p,function(P){var j=m(P);a(w,b,j)?g(a(x,b,j),P):a(R,b,j,[P])}),b}})},83750:function(s,v,e){"use strict";var o=e(78170),a=e(45976),r=e(12789),l=e(66262);o({target:"Map",proto:!0,real:!0,forced:!0},{includes:function(d){return l(r(this),function(f){if(a(f,d))return!0},!0)===!0}})},23144:function(s,v,e){"use strict";var o=e(78170),a=e(1060),r=e(60980),l=e(80754),i=e(81820),d=e(52483).Map;o({target:"Map",stat:!0,forced:!0},{keyBy:function(g,h){var p=l(this)?this:d,m=new p;i(h);var E=i(m.set);return r(g,function(b){a(E,m,h(b),b)}),m}})},45519:function(s,v,e){"use strict";var o=e(78170),a=e(12789),r=e(66262);o({target:"Map",proto:!0,real:!0,forced:!0},{keyOf:function(i){var d=r(a(this),function(f,g){if(f===i)return{key:g}},!0);return d&&d.key}})},44705:function(s,v,e){"use strict";var o=e(78170),a=e(57369),r=e(12789),l=e(52483),i=e(66262),d=l.Map,f=l.set;o({target:"Map",proto:!0,real:!0,forced:!0},{mapKeys:function(h){var p=r(this),m=a(h,arguments.length>1?arguments[1]:void 0),E=new d;return i(p,function(b,w){f(E,m(b,w,p),b)}),E}})},11592:function(s,v,e){"use strict";var o=e(78170),a=e(57369),r=e(12789),l=e(52483),i=e(66262),d=l.Map,f=l.set;o({target:"Map",proto:!0,real:!0,forced:!0},{mapValues:function(h){var p=r(this),m=a(h,arguments.length>1?arguments[1]:void 0),E=new d;return i(p,function(b,w){f(E,w,m(b,w,p))}),E}})},17918:function(s,v,e){"use strict";var o=e(78170),a=e(12789),r=e(60980),l=e(52483).set;o({target:"Map",proto:!0,real:!0,arity:1,forced:!0},{merge:function(d){for(var f=a(this),g=arguments.length,h=0;h<g;)r(arguments[h++],function(p,m){l(f,p,m)},{AS_ENTRIES:!0});return f}})},71793:function(s,v,e){var o=e(78170),a=e(37824);o({target:"Map",stat:!0,forced:!0},{of:a})},55731:function(s,v,e){"use strict";var o=e(78170),a=e(81820),r=e(12789),l=e(66262),i=TypeError;o({target:"Map",proto:!0,real:!0,forced:!0},{reduce:function(f){var g=r(this),h=arguments.length<2,p=h?void 0:arguments[1];if(a(f),l(g,function(m,E){h?(h=!1,p=m):p=f(p,m,E,g)}),h)throw i("Reduce of empty map with no initial value");return p}})},14679:function(s,v,e){"use strict";var o=e(78170),a=e(57369),r=e(12789),l=e(66262);o({target:"Map",proto:!0,real:!0,forced:!0},{some:function(d){var f=r(this),g=a(d,arguments.length>1?arguments[1]:void 0);return l(f,function(h,p){if(g(h,p,f))return!0},!0)===!0}})},51368:function(s,v,e){"use strict";var o=e(78170),a=e(99846);o({target:"Map",proto:!0,real:!0,name:"upsert",forced:!0},{updateOrInsert:a})},46155:function(s,v,e){"use strict";var o=e(78170),a=e(81820),r=e(12789),l=e(52483),i=TypeError,d=l.get,f=l.has,g=l.set;o({target:"Map",proto:!0,real:!0,forced:!0},{update:function(p,m){var E=r(this),b=arguments.length;a(m);var w=f(E,p);if(!w&&b<3)throw i("Updating absent value");var x=w?d(E,p):a(b>2?arguments[2]:void 0)(p,E);return g(E,p,m(x,p,E)),E}})},26653:function(s,v,e){"use strict";var o=e(78170),a=e(99846);o({target:"Map",proto:!0,real:!0,forced:!0},{upsert:a})},28298:function(s,v,e){var o=e(78170),a=Math.min,r=Math.max;o({target:"Math",stat:!0,forced:!0},{clamp:function(i,d,f){return a(f,r(d,i))}})},39775:function(s,v,e){var o=e(78170);o({target:"Math",stat:!0,nonConfigurable:!0,nonWritable:!0},{DEG_PER_RAD:Math.PI/180})},54399:function(s,v,e){var o=e(78170),a=180/Math.PI;o({target:"Math",stat:!0,forced:!0},{degrees:function(l){return l*a}})},4006:function(s,v,e){var o=e(78170),a=e(42318),r=e(58428);o({target:"Math",stat:!0,forced:!0},{fscale:function(i,d,f,g,h){return r(a(i,d,f,g,h))}})},74659:function(s,v,e){var o=e(78170);o({target:"Math",stat:!0,forced:!0},{iaddh:function(r,l,i,d){var f=r>>>0,g=l>>>0,h=i>>>0;return g+(d>>>0)+((f&h|(f|h)&~(f+h>>>0))>>>31)|0}})},93982:function(s,v,e){var o=e(78170);o({target:"Math",stat:!0,forced:!0},{imulh:function(r,l){var i=65535,d=+r,f=+l,g=d&i,h=f&i,p=d>>16,m=f>>16,E=(p*h>>>0)+(g*h>>>16);return p*m+(E>>16)+((g*m>>>0)+(E&i)>>16)}})},85218:function(s,v,e){var o=e(78170);o({target:"Math",stat:!0,forced:!0},{isubh:function(r,l,i,d){var f=r>>>0,g=l>>>0,h=i>>>0;return g-(d>>>0)-((~f&h|~(f^h)&f-h>>>0)>>>31)|0}})},8453:function(s,v,e){var o=e(78170);o({target:"Math",stat:!0,nonConfigurable:!0,nonWritable:!0},{RAD_PER_DEG:180/Math.PI})},68286:function(s,v,e){var o=e(78170),a=Math.PI/180;o({target:"Math",stat:!0,forced:!0},{radians:function(l){return l*a}})},7560:function(s,v,e){var o=e(78170),a=e(42318);o({target:"Math",stat:!0,forced:!0},{scale:a})},40460:function(s,v,e){var o=e(78170),a=e(88483),r=e(54683),l=e(26290),i=e(489),d=e(39675),f="Seeded Random",g=f+" Generator",h='Math.seededPRNG() argument should have a "seed" field with a finite value.',p=d.set,m=d.getterFor(g),E=TypeError,b=l(function(x){p(this,{type:g,seed:x%2147483647})},f,function(){var x=m(this),R=x.seed=(x.seed*1103515245+12345)%2147483647;return i((R&1073741823)/1073741823,!1)});o({target:"Math",stat:!0,forced:!0},{seededPRNG:function(x){var R=a(x).seed;if(!r(R))throw E(h);return new b(R)}})},43809:function(s,v,e){var o=e(78170);o({target:"Math",stat:!0,forced:!0},{signbit:function(r){var l=+r;return l==l&&l==0?1/l==-1/0:l<0}})},3390:function(s,v,e){var o=e(78170);o({target:"Math",stat:!0,forced:!0},{umulh:function(r,l){var i=65535,d=+r,f=+l,g=d&i,h=f&i,p=d>>>16,m=f>>>16,E=(p*h>>>0)+(g*h>>>16);return p*m+(E>>>16)+((g*m>>>0)+(E&i)>>>16)}})},14514:function(s,v,e){"use strict";var o=e(78170),a=e(62515),r=e(1758),l=e(40541),i="Invalid number representation",d="Invalid radix",f=RangeError,g=SyntaxError,h=TypeError,p=/^[\da-z]+$/,m=a("".charAt),E=a(p.exec),b=a(1 .toString),w=a("".slice);o({target:"Number",stat:!0,forced:!0},{fromString:function(R,P){var j=1,N,F;if(typeof R!="string")throw h(i);if(!R.length||m(R,0)=="-"&&(j=-1,R=w(R,1),!R.length))throw g(i);if(N=P===void 0?10:r(P),N<2||N>36)throw f(d);if(!E(p,R)||b(F=l(R,N),N)!==R)throw g(i);return j*F}})},97461:function(s,v,e){"use strict";var o=e(78170),a=e(65939);o({target:"Number",stat:!0,forced:!0},{range:function(l,i,d){return new a(l,i,d,"number",0,1)}})},41299:function(s,v,e){"use strict";var o=e(78170),a=e(6481);o({target:"Object",stat:!0,forced:!0},{iterateEntries:function(l){return new a(l,"entries")}})},71841:function(s,v,e){"use strict";var o=e(78170),a=e(6481);o({target:"Object",stat:!0,forced:!0},{iterateKeys:function(l){return new a(l,"keys")}})},92416:function(s,v,e){"use strict";var o=e(78170),a=e(6481);o({target:"Object",stat:!0,forced:!0},{iterateValues:function(l){return new a(l,"values")}})},68978:function(s,v,e){"use strict";var o=e(78170),a=e(1060),r=e(75903),l=e(29177),i=e(81820),d=e(88483),f=e(22275),g=e(80754),h=e(5734),p=e(28180),m=e(57619),E=e(90014),b=e(85231),w=e(75678),x=e(4055),R=e(29502),P=e(39675),j=e(22008),N=R("observable"),F="Observable",A="Subscription",k="SubscriptionObserver",z=P.getterFor,K=P.set,ee=z(F),J=z(A),ce=z(k),Te=function(q){this.observer=d(q),this.cleanup=void 0,this.subscriptionObserver=void 0};Te.prototype={type:A,clean:function(){var q=this.cleanup;if(q){this.cleanup=void 0;try{q()}catch(re){x(re)}}},close:function(){if(!r){var q=this.facade,re=this.subscriptionObserver;q.closed=!0,re&&(re.closed=!0)}this.observer=void 0},isClosed:function(){return this.observer===void 0}};var Oe=function(q,re){var ae=K(this,new Te(q)),O;r||(this.closed=!1);try{(O=m(q,"start"))&&a(O,q,this)}catch(G){x(G)}if(!ae.isClosed()){var L=ae.subscriptionObserver=new Ne(ae);try{var W=re(L),V=W;h(W)||(ae.cleanup=g(W.unsubscribe)?function(){V.unsubscribe()}:i(W))}catch(G){L.error(G);return}ae.isClosed()&&ae.clean()}};Oe.prototype=b({},{unsubscribe:function(){var re=J(this);re.isClosed()||(re.close(),re.clean())}}),r&&w(Oe.prototype,"closed",{configurable:!0,get:function(){return J(this).isClosed()}});var Ne=function(q){K(this,{type:k,subscriptionState:q}),r||(this.closed=!1)};Ne.prototype=b({},{next:function(re){var ae=ce(this).subscriptionState;if(!ae.isClosed()){var O=ae.observer;try{var L=m(O,"next");L&&a(L,O,re)}catch(W){x(W)}}},error:function(re){var ae=ce(this).subscriptionState;if(!ae.isClosed()){var O=ae.observer;ae.close();try{var L=m(O,"error");L?a(L,O,re):x(re)}catch(W){x(W)}ae.clean()}},complete:function(){var re=ce(this).subscriptionState;if(!re.isClosed()){var ae=re.observer;re.close();try{var O=m(ae,"complete");O&&a(O,ae)}catch(L){x(L)}re.clean()}}}),r&&w(Ne.prototype,"closed",{configurable:!0,get:function(){return ce(this).subscriptionState.isClosed()}});var _e=function(re){f(this,je),K(this,{type:F,subscriber:i(re)})},je=_e.prototype;b(je,{subscribe:function(re){var ae=arguments.length;return new Oe(g(re)?{next:re,error:ae>1?arguments[1]:void 0,complete:ae>2?arguments[2]:void 0}:p(re)?re:{},ee(this).subscriber)}}),E(je,N,function(){return this}),o({global:!0,constructor:!0,forced:j},{Observable:_e}),l(F)},35892:function(s,v,e){"use strict";var o=e(78170),a=e(33577),r=e(1060),l=e(88483),i=e(33590),d=e(29290),f=e(57619),g=e(60980),h=e(29502),p=e(22008),m=h("observable");o({target:"Observable",stat:!0,forced:p},{from:function(b){var w=i(this)?this:a("Observable"),x=f(l(b),m);if(x){var R=l(r(x,b));return R.constructor===w?R:new w(function(j){return R.subscribe(j)})}var P=d(b);return new w(function(j){g(P,function(N,F){if(j.next(N),j.closed)return F()},{IS_ITERATOR:!0,INTERRUPTED:!0}),j.complete()})}})},65655:function(s,v,e){e(68978),e(35892),e(52670)},52670:function(s,v,e){"use strict";var o=e(78170),a=e(33577),r=e(33590),l=e(22008),i=a("Array");o({target:"Observable",stat:!0,forced:l},{of:function(){for(var f=r(this)?this:a("Observable"),g=arguments.length,h=i(g),p=0;p<g;)h[p]=arguments[p++];return new f(function(m){for(var E=0;E<g;E++)if(m.next(h[E]),m.closed)return;m.complete()})}})},85179:function(s,v,e){"use strict";var o=e(78170),a=e(76393),r=e(1101);o({target:"Promise",stat:!0,forced:!0},{try:function(l){var i=a.f(this),d=r(l);return(d.error?i.reject:i.resolve)(d.value),i.promise}})},85954:function(s,v,e){var o=e(78170),a=e(80359),r=e(88483),l=a.toKey,i=a.set;o({target:"Reflect",stat:!0},{defineMetadata:function(f,g,h){var p=arguments.length<4?void 0:l(arguments[3]);i(f,g,r(h),p)}})},75936:function(s,v,e){var o=e(78170),a=e(80359),r=e(88483),l=a.toKey,i=a.getMap,d=a.store;o({target:"Reflect",stat:!0},{deleteMetadata:function(g,h){var p=arguments.length<3?void 0:l(arguments[2]),m=i(r(h),p,!1);if(m===void 0||!m.delete(g))return!1;if(m.size)return!0;var E=d.get(h);return E.delete(p),!!E.size||d.delete(h)}})},28786:function(s,v,e){var o=e(78170),a=e(62515),r=e(80359),l=e(88483),i=e(91476),d=e(20001),f=a(d),g=a([].concat),h=r.keys,p=r.toKey,m=function(E,b){var w=h(E,b),x=i(E);if(x===null)return w;var R=m(x,b);return R.length?w.length?f(g(w,R)):R:w};o({target:"Reflect",stat:!0},{getMetadataKeys:function(b){var w=arguments.length<2?void 0:p(arguments[1]);return m(l(b),w)}})},453:function(s,v,e){var o=e(78170),a=e(80359),r=e(88483),l=e(91476),i=a.has,d=a.get,f=a.toKey,g=function(h,p,m){var E=i(h,p,m);if(E)return d(h,p,m);var b=l(p);return b!==null?g(h,b,m):void 0};o({target:"Reflect",stat:!0},{getMetadata:function(p,m){var E=arguments.length<3?void 0:f(arguments[2]);return g(p,r(m),E)}})},75462:function(s,v,e){var o=e(78170),a=e(80359),r=e(88483),l=a.keys,i=a.toKey;o({target:"Reflect",stat:!0},{getOwnMetadataKeys:function(f){var g=arguments.length<2?void 0:i(arguments[1]);return l(r(f),g)}})},90526:function(s,v,e){var o=e(78170),a=e(80359),r=e(88483),l=a.get,i=a.toKey;o({target:"Reflect",stat:!0},{getOwnMetadata:function(f,g){var h=arguments.length<3?void 0:i(arguments[2]);return l(f,r(g),h)}})},11984:function(s,v,e){var o=e(78170),a=e(80359),r=e(88483),l=e(91476),i=a.has,d=a.toKey,f=function(g,h,p){var m=i(g,h,p);if(m)return!0;var E=l(h);return E!==null?f(g,E,p):!1};o({target:"Reflect",stat:!0},{hasMetadata:function(h,p){var m=arguments.length<3?void 0:d(arguments[2]);return f(h,r(p),m)}})},66350:function(s,v,e){var o=e(78170),a=e(80359),r=e(88483),l=a.has,i=a.toKey;o({target:"Reflect",stat:!0},{hasOwnMetadata:function(f,g){var h=arguments.length<3?void 0:i(arguments[2]);return l(f,r(g),h)}})},70003:function(s,v,e){var o=e(78170),a=e(80359),r=e(88483),l=a.toKey,i=a.set;o({target:"Reflect",stat:!0},{metadata:function(f,g){return function(p,m){i(f,g,r(p),l(m))}}})},6138:function(s,v,e){"use strict";var o=e(78170),a=e(36006),r=e(2320).add;o({target:"Set",proto:!0,real:!0,forced:!0},{addAll:function(){for(var i=a(this),d=0,f=arguments.length;d<f;d++)r(i,arguments[d]);return i}})},79263:function(s,v,e){"use strict";var o=e(78170),a=e(36006),r=e(2320).remove;o({target:"Set",proto:!0,real:!0,forced:!0},{deleteAll:function(){for(var i=a(this),d=!0,f,g=0,h=arguments.length;g<h;g++)f=r(i,arguments[g]),d=d&&f;return!!d}})},36875:function(s,v,e){"use strict";var o=e(78170),a=e(1060),r=e(55607),l=e(68333);o({target:"Set",proto:!0,real:!0,forced:!0},{difference:function(d){return a(l,this,r(d))}})},83958:function(s,v,e){var o=e(78170),a=e(68333),r=e(42535);o({target:"Set",proto:!0,real:!0,forced:!r("difference")},{difference:a})},44965:function(s,v,e){"use strict";var o=e(78170),a=e(57369),r=e(36006),l=e(78963);o({target:"Set",proto:!0,real:!0,forced:!0},{every:function(d){var f=r(this),g=a(d,arguments.length>1?arguments[1]:void 0);return l(f,function(h){if(!g(h,h,f))return!1},!0)!==!1}})},40217:function(s,v,e){"use strict";var o=e(78170),a=e(57369),r=e(36006),l=e(2320),i=e(78963),d=l.Set,f=l.add;o({target:"Set",proto:!0,real:!0,forced:!0},{filter:function(h){var p=r(this),m=a(h,arguments.length>1?arguments[1]:void 0),E=new d;return i(p,function(b){m(b,b,p)&&f(E,b)}),E}})},2039:function(s,v,e){"use strict";var o=e(78170),a=e(57369),r=e(36006),l=e(78963);o({target:"Set",proto:!0,real:!0,forced:!0},{find:function(d){var f=r(this),g=a(d,arguments.length>1?arguments[1]:void 0),h=l(f,function(p){if(g(p,p,f))return{value:p}},!0);return h&&h.value}})},76366:function(s,v,e){var o=e(78170),a=e(54799);o({target:"Set",stat:!0,forced:!0},{from:a})},80246:function(s,v,e){"use strict";var o=e(78170),a=e(1060),r=e(55607),l=e(75576);o({target:"Set",proto:!0,real:!0,forced:!0},{intersection:function(d){return a(l,this,r(d))}})},73083:function(s,v,e){var o=e(78170),a=e(75576),r=e(42535);o({target:"Set",proto:!0,real:!0,forced:!r("intersection")},{intersection:a})},99512:function(s,v,e){"use strict";var o=e(78170),a=e(1060),r=e(55607),l=e(53668);o({target:"Set",proto:!0,real:!0,forced:!0},{isDisjointFrom:function(d){return a(l,this,r(d))}})},1367:function(s,v,e){var o=e(78170),a=e(53668),r=e(42535);o({target:"Set",proto:!0,real:!0,forced:!r("isDisjointFrom")},{isDisjointFrom:a})},99455:function(s,v,e){"use strict";var o=e(78170),a=e(1060),r=e(55607),l=e(46703);o({target:"Set",proto:!0,real:!0,forced:!0},{isSubsetOf:function(d){return a(l,this,r(d))}})},82790:function(s,v,e){var o=e(78170),a=e(46703),r=e(42535);o({target:"Set",proto:!0,real:!0,forced:!r("isSubsetOf")},{isSubsetOf:a})},99103:function(s,v,e){"use strict";var o=e(78170),a=e(1060),r=e(55607),l=e(17657);o({target:"Set",proto:!0,real:!0,forced:!0},{isSupersetOf:function(d){return a(l,this,r(d))}})},78881:function(s,v,e){var o=e(78170),a=e(17657),r=e(42535);o({target:"Set",proto:!0,real:!0,forced:!r("isSupersetOf")},{isSupersetOf:a})},90111:function(s,v,e){"use strict";var o=e(78170),a=e(62515),r=e(36006),l=e(78963),i=e(92898),d=a([].join),f=a([].push);o({target:"Set",proto:!0,real:!0,forced:!0},{join:function(h){var p=r(this),m=h===void 0?",":i(h),E=[];return l(p,function(b){f(E,b)}),d(E,m)}})},33908:function(s,v,e){"use strict";var o=e(78170),a=e(57369),r=e(36006),l=e(2320),i=e(78963),d=l.Set,f=l.add;o({target:"Set",proto:!0,real:!0,forced:!0},{map:function(h){var p=r(this),m=a(h,arguments.length>1?arguments[1]:void 0),E=new d;return i(p,function(b){f(E,m(b,b,p))}),E}})},15311:function(s,v,e){var o=e(78170),a=e(37824);o({target:"Set",stat:!0,forced:!0},{of:a})},76302:function(s,v,e){"use strict";var o=e(78170),a=e(81820),r=e(36006),l=e(78963),i=TypeError;o({target:"Set",proto:!0,real:!0,forced:!0},{reduce:function(f){var g=r(this),h=arguments.length<2,p=h?void 0:arguments[1];if(a(f),l(g,function(m){h?(h=!1,p=m):p=f(p,m,m,g)}),h)throw i("Reduce of empty set with no initial value");return p}})},77757:function(s,v,e){"use strict";var o=e(78170),a=e(57369),r=e(36006),l=e(78963);o({target:"Set",proto:!0,real:!0,forced:!0},{some:function(d){var f=r(this),g=a(d,arguments.length>1?arguments[1]:void 0);return l(f,function(h){if(g(h,h,f))return!0},!0)===!0}})},44981:function(s,v,e){"use strict";var o=e(78170),a=e(1060),r=e(55607),l=e(538);o({target:"Set",proto:!0,real:!0,forced:!0},{symmetricDifference:function(d){return a(l,this,r(d))}})},90056:function(s,v,e){var o=e(78170),a=e(538),r=e(42535);o({target:"Set",proto:!0,real:!0,forced:!r("symmetricDifference")},{symmetricDifference:a})},29230:function(s,v,e){"use strict";var o=e(78170),a=e(1060),r=e(55607),l=e(25793);o({target:"Set",proto:!0,real:!0,forced:!0},{union:function(d){return a(l,this,r(d))}})},20654:function(s,v,e){var o=e(78170),a=e(25793),r=e(42535);o({target:"Set",proto:!0,real:!0,forced:!r("union")},{union:a})},66225:function(s,v,e){"use strict";var o=e(78170),a=e(10260).charAt,r=e(23009),l=e(1758),i=e(92898);o({target:"String",proto:!0,forced:!0},{at:function(f){var g=i(r(this)),h=g.length,p=l(f),m=p>=0?p:h+p;return m<0||m>=h?void 0:a(g,m)}})},72963:function(s,v,e){"use strict";var o=e(78170),a=e(26290),r=e(489),l=e(23009),i=e(92898),d=e(39675),f=e(10260),g=f.codeAt,h=f.charAt,p="String Iterator",m=d.set,E=d.getterFor(p),b=a(function(x){m(this,{type:p,string:x,index:0})},"String",function(){var x=E(this),R=x.string,P=x.index,j;return P>=R.length?r(void 0,!0):(j=h(R,P),x.index+=j.length,r({codePoint:g(j,0),position:P},!1))});o({target:"String",proto:!0,forced:!0},{codePoints:function(){return new b(i(l(this)))}})},2890:function(s,v,e){var o=e(78170),a=e(23809);o({target:"String",stat:!0,forced:!0},{cooked:a})},89273:function(s,v,e){"use strict";var o=e(54339),a=e(78170),r=e(36386),l=e(33577),i=e(91538),d=e(62515),f=e(44912),g=e(88483),h=e(32331),p=e(80754),m=e(69703),E=e(9227).f,b=e(51557),w=e(23809),x=e(7149),R=e(59732),P=l("WeakMap"),j=r("GlobalDedentRegistry",new P);j.has=j.has,j.get=j.get,j.set=j.set;var N=Array,F=TypeError,A=Object.freeze||Object,k=Object.isFrozen,z=Math.min,K=d("".charAt),ee=d("".slice),J=d("".split),ce=d(/./.exec),Te=/([\n\u2028\u2029]|\r\n?)/g,Oe=RegExp("^["+R+"]*"),Ne=RegExp("[^"+R+"]"),_e="Invalid tag",je="Invalid opening line",q="Invalid closing line",re=function(G){var I=G.raw;if(o&&!k(I))throw F("Raw template should be frozen");if(j.has(I))return j.get(I);var H=ae(I),$=L(H);return E($,"raw",{value:A(H)}),A($),j.set(I,$),$},ae=function(G){var I=h(G),H=m(I),$=N(H),Y=N(H),X=0,Re,Fe;if(!H)throw F(_e);for(;X<H;X++){var at=I[X];if(typeof at=="string")$[X]=J(at,Te);else throw F(_e)}for(X=0;X<H;X++){var et=X+1===H;if(Re=$[X],X===0){if(Re.length===1||Re[0].length>0)throw F(je);Re[1]=""}if(et){if(Re.length===1||ce(Ne,Re[Re.length-1]))throw F(q);Re[Re.length-2]="",Re[Re.length-1]=""}for(var Ke=2;Ke<Re.length;Ke+=2){var ot=Re[Ke],te=Ke+1===Re.length&&!et,fe=ce(Oe,ot)[0];if(!te&&fe.length===ot.length){Re[Ke]="";continue}Fe=O(fe,Fe)}}var pe=Fe?Fe.length:0;for(X=0;X<H;X++){Re=$[X];for(var me=Re[0],Ie=1;Ie<Re.length;Ie+=2)me+=Re[Ie]+ee(Re[Ie+1],pe);Y[X]=me}return Y},O=function(G,I){if(I===void 0||G===I)return G;for(var H=0,$=z(G.length,I.length);H<$&&K(G,H)===K(I,H);H++);return ee(G,0,H)},L=function(G){for(var I=0,H=G.length,$=N(H);I<H;I++)$[I]=x(G[I]);return $},W=function(G){return i(function(I){var H=b(arguments);return H[0]=re(g(I)),f(G,this,H)},"")},V=W(w);a({target:"String",stat:!0,forced:!0},{dedent:function(I){return g(I),p(I)?W(I):f(V,this,arguments)}})},94250:function(s,v,e){"use strict";var o=e(78170),a=e(62515),r=e(23009),l=e(92898),i=a("".charCodeAt);o({target:"String",proto:!0},{isWellFormed:function(){for(var f=l(r(this)),g=f.length,h=0;h<g;h++){var p=i(f,h);if((p&63488)==55296&&(p>=56320||++h>=g||(i(f,h)&64512)!=56320))return!1}return!0}})},1396:function(s,v,e){"use strict";var o=e(78170),a=e(1060),r=e(62515),l=e(23009),i=e(92898),d=e(50486),f=Array,g=r("".charAt),h=r("".charCodeAt),p=r([].join),m="".toWellFormed,E="\uFFFD",b=m&&d(function(){return a(m,1)!=="1"});o({target:"String",proto:!0,forced:b},{toWellFormed:function(){var x=i(l(this));if(b)return a(m,x);for(var R=x.length,P=f(R),j=0;j<R;j++){var N=h(x,j);(N&63488)!=55296?P[j]=g(x,j):N>=56320||j+1>=R||(h(x,j+1)&64512)!=56320?P[j]=E:(P[j]=g(x,j),P[++j]=g(x,j))}return p(P,"")}})},24506:function(s,v,e){"use strict";var o=e(78170),a=e(34684),r=e(91476),l=e(12147),i=e(11260),d=e(64847),f=e(78401),g=e(31623),h=e(57370),p=e(45989),m=e(29502),E=m("toStringTag"),b=Error,w=function(P,j,N){var F=a(x,this),A;return l?A=l(b(),F?r(this):x):(A=F?this:d(x),f(A,E,"Error")),N!==void 0&&f(A,"message",p(N)),h(A,w,A.stack,1),f(A,"error",P),f(A,"suppressed",j),A};l?l(w,b):i(w,b,{name:!0});var x=w.prototype=d(b.prototype,{constructor:g(1,w),message:g(1,""),name:g(1,"SuppressedError")});o({global:!0,constructor:!0,arity:3},{SuppressedError:w})},65798:function(s,v,e){var o=e(61238);o("asyncDispose")},73480:function(s,v,e){var o=e(61238);o("dispose")},56450:function(s,v,e){var o=e(78170),a=e(33577),r=e(62515),l=a("Symbol"),i=l.keyFor,d=r(l.prototype.valueOf);o({target:"Symbol",stat:!0},{isRegistered:function(g){try{return i(d(g))!==void 0}catch(h){return!1}}})},99037:function(s,v,e){for(var o=e(78170),a=e(36386),r=e(33577),l=e(62515),i=e(19369),d=e(29502),f=r("Symbol"),g=f.isWellKnown,h=r("Object","getOwnPropertyNames"),p=l(f.prototype.valueOf),m=a("wks"),E=0,b=h(f),w=b.length;E<w;E++)try{var x=b[E];i(f[x])&&d(x)}catch(R){}o({target:"Symbol",stat:!0,forced:!0},{isWellKnown:function(P){if(g&&g(P))return!0;try{for(var j=p(P),N=0,F=h(m),A=F.length;N<A;N++)if(m[F[N]]==j)return!0}catch(k){}return!1}})},62112:function(s,v,e){var o=e(61238);o("matcher")},72790:function(s,v,e){var o=e(61238);o("metadataKey")},4035:function(s,v,e){var o=e(61238);o("metadata")},5307:function(s,v,e){var o=e(61238);o("observable")},30643:function(s,v,e){var o=e(61238);o("patternMatch")},45526:function(s,v,e){var o=e(61238);o("replaceAll")},71846:function(s,v,e){"use strict";var o=e(32124),a=e(31171).filterReject,r=e(18483),l=o.aTypedArray,i=o.exportTypedArrayMethod;i("filterOut",function(f){var g=a(l(this),f,arguments.length>1?arguments[1]:void 0);return r(this,g)},!0)},69585:function(s,v,e){"use strict";var o=e(32124),a=e(31171).filterReject,r=e(18483),l=o.aTypedArray,i=o.exportTypedArrayMethod;i("filterReject",function(f){var g=a(l(this),f,arguments.length>1?arguments[1]:void 0);return r(this,g)},!0)},22160:function(s,v,e){"use strict";var o=e(33577),a=e(10388),r=e(72986),l=e(32124),i=e(85117),d=l.aTypedArrayConstructor,f=l.exportTypedArrayStaticMethod;f("fromAsync",function(h){var p=this,m=arguments.length,E=m>1?arguments[1]:void 0,b=m>2?arguments[2]:void 0;return new(o("Promise"))(function(w){a(p),w(r(h,E,b))}).then(function(w){return i(d(p),w)})},!0)},14767:function(s,v,e){"use strict";var o=e(32124),a=e(86198),r=e(42132),l=o.aTypedArray,i=o.exportTypedArrayMethod;i("groupBy",function(f){var g=arguments.length>1?arguments[1]:void 0;return a(l(this),f,g,r)},!0)},1529:function(s,v,e){"use strict";var o=e(32124),a=e(69703),r=e(76193),l=e(68512),i=e(42348),d=e(1758),f=e(50486),g=o.aTypedArray,h=o.getTypedArrayConstructor,p=o.exportTypedArrayMethod,m=Math.max,E=Math.min,b=!f(function(){var w=new Int8Array([1]),x=w.toSpliced(1,0,{valueOf:function(){return w[0]=2,3}});return x[0]!==2||x[1]!==3});p("toSpliced",function(x,R){var P=g(this),j=h(P),N=a(P),F=l(x,N),A=arguments.length,k=0,z,K,ee,J,ce,Te,Oe;if(A===0)z=K=0;else if(A===1)z=0,K=N-F;else if(K=E(m(d(R),0),N-F),z=A-2,z){J=new j(z),ee=r(J);for(var Ne=2;Ne<A;Ne++)ce=arguments[Ne],J[Ne-2]=ee?i(ce):+ce}for(Te=N+z-K,Oe=new j(Te);k<F;k++)Oe[k]=P[k];for(;k<F+z;k++)Oe[k]=J[k-F];for(;k<Te;k++)Oe[k]=P[k+K-z];return Oe},!b)},7405:function(s,v,e){"use strict";var o=e(62515),a=e(32124),r=e(85117),l=e(20001),i=a.aTypedArray,d=a.getTypedArrayConstructor,f=a.exportTypedArrayMethod,g=o(l);f("uniqueBy",function(p){return i(this),r(d(this),g(this,p))},!0)},88782:function(s,v,e){"use strict";var o=e(78170),a=e(54310),r=e(8803).remove;o({target:"WeakMap",proto:!0,real:!0,forced:!0},{deleteAll:function(){for(var i=a(this),d=!0,f,g=0,h=arguments.length;g<h;g++)f=r(i,arguments[g]),d=d&&f;return!!d}})},50554:function(s,v,e){"use strict";var o=e(78170),a=e(54310),r=e(8803),l=r.get,i=r.has,d=r.set;o({target:"WeakMap",proto:!0,real:!0,forced:!0},{emplace:function(g,h){var p=a(this),m,E;return i(p,g)?(m=l(p,g),"update"in h&&(m=h.update(m,g,p),d(p,g,m)),m):(E=h.insert(g,p),d(p,g,E),E)}})},65958:function(s,v,e){var o=e(78170),a=e(54799);o({target:"WeakMap",stat:!0,forced:!0},{from:a})},91390:function(s,v,e){var o=e(78170),a=e(37824);o({target:"WeakMap",stat:!0,forced:!0},{of:a})},67504:function(s,v,e){"use strict";var o=e(78170),a=e(99846);o({target:"WeakMap",proto:!0,real:!0,forced:!0},{upsert:a})},93380:function(s,v,e){"use strict";var o=e(78170),a=e(8207),r=e(15764).add;o({target:"WeakSet",proto:!0,real:!0,forced:!0},{addAll:function(){for(var i=a(this),d=0,f=arguments.length;d<f;d++)r(i,arguments[d]);return i}})},29188:function(s,v,e){"use strict";var o=e(78170),a=e(8207),r=e(15764).remove;o({target:"WeakSet",proto:!0,real:!0,forced:!0},{deleteAll:function(){for(var i=a(this),d=!0,f,g=0,h=arguments.length;g<h;g++)f=r(i,arguments[g]),d=d&&f;return!!d}})},35377:function(s,v,e){var o=e(78170),a=e(54799);o({target:"WeakSet",stat:!0,forced:!0},{from:a})},69751:function(s,v,e){var o=e(78170),a=e(37824);o({target:"WeakSet",stat:!0,forced:!0},{of:a})},19127:function(s,v,e){var o=e(78170),a=e(95098),r=e(77446).clear;o({global:!0,bind:!0,enumerable:!0,forced:a.clearImmediate!==r},{clearImmediate:r})},78162:function(s,v,e){"use strict";var o=e(78170),a=e(95098),r=e(33577),l=e(31623),i=e(9227).f,d=e(15415),f=e(22275),g=e(94054),h=e(45989),p=e(30825),m=e(25705),E=e(75903),b=e(79766),w="DOMException",x=r("Error"),R=r(w),P=function(){f(this,j);var Ne=arguments.length,_e=h(Ne<1?void 0:arguments[0]),je=h(Ne<2?void 0:arguments[1],"Error"),q=new R(_e,je),re=x(_e);return re.name=w,i(q,"stack",l(1,m(re.stack,1))),g(q,this,P),q},j=P.prototype=R.prototype,N="stack"in x(w),F="stack"in new R(1,2),A=R&&E&&Object.getOwnPropertyDescriptor(a,w),k=!!A&&!(A.writable&&A.configurable),z=N&&!k&&!F;o({global:!0,constructor:!0,forced:b||z},{DOMException:z?P:R});var K=r(w),ee=K.prototype;if(ee.constructor!==K){b||i(ee,"constructor",l(1,K));for(var J in p)if(d(p,J)){var ce=p[J],Te=ce.s;d(K,Te)||i(K,Te,l(6,ce.c))}}},98666:function(s,v,e){e(19127),e(12494)},138:function(s,v,e){"use strict";var o=e(78170),a=e(95098),r=e(75678),l=e(75903),i=TypeError,d=Object.defineProperty,f=a.self!==a;try{if(l){var g=Object.getOwnPropertyDescriptor(a,"self");(f||!g||!g.get||!g.enumerable)&&r(a,"self",{get:function(){return a},set:function(p){if(this!==a)throw i("Illegal invocation");d(a,"self",{value:p,writable:!0,configurable:!0,enumerable:!0})},configurable:!0,enumerable:!0})}else o({global:!0,simple:!0,forced:f},{self:a})}catch(h){}},12494:function(s,v,e){var o=e(78170),a=e(95098),r=e(77446).set,l=e(35807),i=a.setImmediate?l(r,!1):r;o({global:!0,bind:!0,enumerable:!0,forced:a.setImmediate!==i},{setImmediate:i})},26742:function(s,v,e){var o=e(79766),a=e(78170),r=e(95098),l=e(33577),i=e(62515),d=e(50486),f=e(50147),g=e(80754),h=e(33590),p=e(5734),m=e(28180),E=e(19369),b=e(60980),w=e(88483),x=e(29087),R=e(15415),P=e(31019),j=e(78401),N=e(69703),F=e(95106),A=e(46277),k=e(52483),z=e(2320),K=e(11204),ee=e(12411),J=r.Object,ce=r.Array,Te=r.Date,Oe=r.Error,Ne=r.EvalError,_e=r.RangeError,je=r.ReferenceError,q=r.SyntaxError,re=r.TypeError,ae=r.URIError,O=r.PerformanceMark,L=r.WebAssembly,W=L&&L.CompileError||Oe,V=L&&L.LinkError||Oe,G=L&&L.RuntimeError||Oe,I=l("DOMException"),H=k.Map,$=k.has,Y=k.get,X=k.set,Re=z.Set,Fe=z.add,at=l("Object","keys"),et=i([].push),Ke=i((!0).valueOf),ot=i(1 .valueOf),te=i("".valueOf),fe=i(Te.prototype.getTime),pe=f("structuredClone"),me="DataCloneError",Ie="Transferring",ue=function(y){return!d(function(){var Q=new r.Set([7]),be=y(Q),we=y(J(7));return be==Q||!be.has(7)||typeof we!="object"||we!=7})&&y},ve=function(y,Q){return!d(function(){var be=new Q,we=y({a:be,b:be});return!(we&&we.a===we.b&&we.a instanceof Q&&we.a.stack===be.stack)})},Ee=function(y){return!d(function(){var Q=y(new r.AggregateError([1],pe,{cause:3}));return Q.name!="AggregateError"||Q.errors[0]!=1||Q.message!=pe||Q.cause!=3})},le=r.structuredClone,ye=o||!ve(le,Oe)||!ve(le,I)||!Ee(le),Be=!le&&ue(function(y){return new O(pe,{detail:y}).detail}),oe=ue(le)||Be,he=function(y){throw new I("Uncloneable type: "+y,me)},Ae=function(y,Q){throw new I((Q||"Cloning")+" of "+y+" cannot be properly polyfilled in this engine",me)},Ue=function(){var y;try{y=new r.DataTransfer}catch(Q){try{y=new r.ClipboardEvent("").clipboardData}catch(be){}}return y&&y.items&&y.files?y:null},He=function(y,Q){if(E(y)&&he("Symbol"),!m(y))return y;if(Q){if($(Q,y))return Y(Q,y)}else Q=new H;var be=x(y),we=!1,ze,We,Pe,Xe,ct,Ve,Pt,xe,tt,Ze;switch(be){case"Array":Pe=ce(N(y)),we=!0;break;case"Object":Pe={},we=!0;break;case"Map":Pe=new H,we=!0;break;case"Set":Pe=new Re,we=!0;break;case"RegExp":Pe=new RegExp(y.source,A(y));break;case"Error":switch(We=y.name,We){case"AggregateError":Pe=l("AggregateError")([]);break;case"EvalError":Pe=Ne();break;case"RangeError":Pe=_e();break;case"ReferenceError":Pe=je();break;case"SyntaxError":Pe=q();break;case"TypeError":Pe=re();break;case"URIError":Pe=ae();break;case"CompileError":Pe=W();break;case"LinkError":Pe=V();break;case"RuntimeError":Pe=G();break;default:Pe=Oe()}we=!0;break;case"DOMException":Pe=new I(y.message,y.name),we=!0;break;case"DataView":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":ze=r[be],m(ze)||Ae(be),Pe=new ze(He(y.buffer,Q),y.byteOffset,be==="DataView"?y.byteLength:y.length);break;case"DOMQuad":try{Pe=new DOMQuad(He(y.p1,Q),He(y.p2,Q),He(y.p3,Q),He(y.p4,Q))}catch(Le){oe?Pe=oe(y):Ae(be)}break;case"FileList":if(Xe=Ue(),Xe){for(ct=0,Ve=N(y);ct<Ve;ct++)Xe.items.add(He(y[ct],Q));Pe=Xe.files}else oe?Pe=oe(y):Ae(be);break;case"ImageData":try{Pe=new ImageData(He(y.data,Q),y.width,y.height,{colorSpace:y.colorSpace})}catch(Le){oe?Pe=oe(y):Ae(be)}break;default:if(oe)Pe=oe(y);else switch(be){case"BigInt":Pe=J(y.valueOf());break;case"Boolean":Pe=J(Ke(y));break;case"Number":Pe=J(ot(y));break;case"String":Pe=J(te(y));break;case"Date":Pe=new Te(fe(y));break;case"ArrayBuffer":ze=r.DataView,!ze&&typeof y.slice!="function"&&Ae(be);try{if(typeof y.slice=="function")Pe=y.slice(0);else for(Ve=y.byteLength,Pe=new ArrayBuffer(Ve),tt=new ze(y),Ze=new ze(Pe),ct=0;ct<Ve;ct++)Ze.setUint8(ct,tt.getUint8(ct))}catch(Le){throw new I("ArrayBuffer is detached",me)}break;case"SharedArrayBuffer":Pe=y;break;case"Blob":try{Pe=y.slice(0,y.size,y.type)}catch(Le){Ae(be)}break;case"DOMPoint":case"DOMPointReadOnly":ze=r[be];try{Pe=ze.fromPoint?ze.fromPoint(y):new ze(y.x,y.y,y.z,y.w)}catch(Le){Ae(be)}break;case"DOMRect":case"DOMRectReadOnly":ze=r[be];try{Pe=ze.fromRect?ze.fromRect(y):new ze(y.x,y.y,y.width,y.height)}catch(Le){Ae(be)}break;case"DOMMatrix":case"DOMMatrixReadOnly":ze=r[be];try{Pe=ze.fromMatrix?ze.fromMatrix(y):new ze(y)}catch(Le){Ae(be)}break;case"AudioData":case"VideoFrame":g(y.clone)||Ae(be);try{Pe=y.clone()}catch(Le){he(be)}break;case"File":try{Pe=new File([y],y.name,y)}catch(Le){Ae(be)}break;case"CropTarget":case"CryptoKey":case"FileSystemDirectoryHandle":case"FileSystemFileHandle":case"FileSystemHandle":case"GPUCompilationInfo":case"GPUCompilationMessage":case"ImageBitmap":case"RTCCertificate":case"WebAssembly.Module":Ae(be);default:he(be)}}if(X(Q,y,Pe),we)switch(be){case"Array":case"Object":for(Pt=at(y),ct=0,Ve=N(Pt);ct<Ve;ct++)xe=Pt[ct],P(Pe,xe,He(y[xe],Q));break;case"Map":y.forEach(function(Le,ut){X(Pe,He(ut,Q),He(Le,Q))});break;case"Set":y.forEach(function(Le){Fe(Pe,He(Le,Q))});break;case"Error":j(Pe,"message",He(y.message,Q)),R(y,"cause")&&j(Pe,"cause",He(y.cause,Q)),We=="AggregateError"&&(Pe.errors=He(y.errors,Q));case"DOMException":K&&j(Pe,"stack",He(y.stack,Q))}return Pe},it=function(y,Q){if(!m(y))throw re("Transfer option cannot be converted to a sequence");var be=[];b(y,function(tt){et(be,w(tt))});var we=0,ze=N(be),We,Pe,Xe,ct,Ve,Pt,xe;if(ee)for(ct=le(be,{transfer:be});we<ze;)X(Q,be[we],ct[we++]);else for(;we<ze;){if(We=be[we++],$(Q,We))throw new I("Duplicate transferable",me);switch(Pe=x(We),Pe){case"ImageBitmap":Xe=r.OffscreenCanvas,h(Xe)||Ae(Pe,Ie);try{Pt=new Xe(We.width,We.height),xe=Pt.getContext("bitmaprenderer"),xe.transferFromImageBitmap(We),Ve=Pt.transferToImageBitmap()}catch(tt){}break;case"AudioData":case"VideoFrame":(!g(We.clone)||!g(We.close))&&Ae(Pe,Ie);try{Ve=We.clone(),We.close()}catch(tt){}break;case"ArrayBuffer":g(We.transfer)||Ae(Pe,Ie),Ve=We.transfer();break;case"MediaSourceHandle":case"MessagePort":case"OffscreenCanvas":case"ReadableStream":case"TransformStream":case"WritableStream":Ae(Pe,Ie)}if(Ve===void 0)throw new I("This object cannot be transferred: "+Pe,me);X(Q,We,Ve)}};a({global:!0,enumerable:!0,sham:!ee,forced:ye},{structuredClone:function(Q){var be=F(arguments.length,1)>1&&!p(arguments[1])?w(arguments[1]):void 0,we=be?be.transfer:void 0,ze;return we!==void 0&&(ze=new H,it(we,ze)),He(Q,ze)}})},2120:function(s){"use strict";var v=function(P){return e(P)&&!o(P)};function e(R){return!!R&&typeof R=="object"}function o(R){var P=Object.prototype.toString.call(R);return P==="[object RegExp]"||P==="[object Date]"||l(R)}var a=typeof Symbol=="function"&&Symbol.for,r=a?Symbol.for("react.element"):60103;function l(R){return R.$$typeof===r}function i(R){return Array.isArray(R)?[]:{}}function d(R,P){return P.clone!==!1&&P.isMergeableObject(R)?w(i(R),R,P):R}function f(R,P,j){return R.concat(P).map(function(N){return d(N,j)})}function g(R,P){if(!P.customMerge)return w;var j=P.customMerge(R);return typeof j=="function"?j:w}function h(R){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(R).filter(function(P){return Object.propertyIsEnumerable.call(R,P)}):[]}function p(R){return Object.keys(R).concat(h(R))}function m(R,P){try{return P in R}catch(j){return!1}}function E(R,P){return m(R,P)&&!(Object.hasOwnProperty.call(R,P)&&Object.propertyIsEnumerable.call(R,P))}function b(R,P,j){var N={};return j.isMergeableObject(R)&&p(R).forEach(function(F){N[F]=d(R[F],j)}),p(P).forEach(function(F){E(R,F)||(m(R,F)&&j.isMergeableObject(P[F])?N[F]=g(F,j)(R[F],P[F],j):N[F]=d(P[F],j))}),N}function w(R,P,j){j=j||{},j.arrayMerge=j.arrayMerge||f,j.isMergeableObject=j.isMergeableObject||v,j.cloneUnlessOtherwiseSpecified=d;var N=Array.isArray(P),F=Array.isArray(R),A=N===F;return A?N?j.arrayMerge(R,P,j):b(R,P,j):d(P,j)}w.all=function(P,j){if(!Array.isArray(P))throw new Error("first argument should be an array");return P.reduce(function(N,F){return w(N,F,j)},{})};var x=w;s.exports=x},62727:function(s){var v=Object.defineProperty,e=Object.getOwnPropertyDescriptor,o=Object.getOwnPropertyNames,a=Object.prototype.hasOwnProperty,r=(j,N)=>{for(var F in N)v(j,F,{get:N[F],enumerable:!0})},l=(j,N,F,A)=>{if(N&&typeof N=="object"||typeof N=="function")for(let k of o(N))!a.call(j,k)&&k!==F&&v(j,k,{get:()=>N[k],enumerable:!(A=e(N,k))||A.enumerable});return j},i=j=>l(v({},"__esModule",{value:!0}),j),d={};r(d,{LOCAL_DUMI_DIR:()=>f,LOCAL_PAGES_DIR:()=>h,LOCAL_THEME_DIR:()=>g,PICKED_PKG_FIELDS:()=>w,PREFERS_COLOR_ATTR:()=>E,PREFERS_COLOR_LS_KEY:()=>b,SP_ROUTE_PREFIX:()=>m,THEME_PREFIX:()=>p,USELESS_TMP_FILES:()=>x,VERSION_2_DEPRECATE_SOFT_BREAKS:()=>P,VERSION_2_LEVEL_NAV:()=>R}),s.exports=i(d);var f=".dumi",g=`${f}/theme`,h=`${f}/pages`,p="dumi-theme-",m="~",E="data-prefers-color",b="dumi:prefers-color",w={name:"",description:"",version:"",license:"",repository:"",author:"",authors:""},x=["tsconfig.json","typings.d.ts"],R="^2.2.0",P="^2.2.0"},19340:function(s,v,e){"use strict";e.d(v,{Ep:function(){return x},PP:function(){return p},aU:function(){return a},cP:function(){return R},lX:function(){return g},q_:function(){return h}});var o=e(26508),a;(function(P){P.Pop="POP",P.Push="PUSH",P.Replace="REPLACE"})(a||(a={}));var r=function(P){return P};function l(P,j){if(!P){typeof console!="undefined"&&console.warn(j);try{throw new Error(j)}catch(N){}}}var i="beforeunload",d="hashchange",f="popstate";function g(P){P===void 0&&(P={});var j=P,N=j.window,F=N===void 0?document.defaultView:N,A=F.history;function k(){var G=F.location,I=G.pathname,H=G.search,$=G.hash,Y=A.state||{};return[Y.idx,r({pathname:I,search:H,hash:$,state:Y.usr||null,key:Y.key||"default"})]}var z=null;function K(){if(z)Ne.call(z),z=null;else{var G=a.Pop,I=k(),H=I[0],$=I[1];if(Ne.length){if(H!=null){var Y=ce-H;Y&&(z={action:G,location:$,retry:function(){W(Y*-1)}},W(Y))}}else ae(G)}}F.addEventListener(f,K);var ee=a.Pop,J=k(),ce=J[0],Te=J[1],Oe=b(),Ne=b();ce==null&&(ce=0,A.replaceState((0,o.Z)({},A.state,{idx:ce}),""));function _e(G){return typeof G=="string"?G:x(G)}function je(G,I){return I===void 0&&(I=null),r((0,o.Z)({pathname:Te.pathname,hash:"",search:""},typeof G=="string"?R(G):G,{state:I,key:w()}))}function q(G,I){return[{usr:G.state,key:G.key,idx:I},_e(G)]}function re(G,I,H){return!Ne.length||(Ne.call({action:G,location:I,retry:H}),!1)}function ae(G){ee=G;var I=k();ce=I[0],Te=I[1],Oe.call({action:ee,location:Te})}function O(G,I){var H=a.Push,$=je(G,I);function Y(){O(G,I)}if(re(H,$,Y)){var X=q($,ce+1),Re=X[0],Fe=X[1];try{A.pushState(Re,"",Fe)}catch(at){F.location.assign(Fe)}ae(H)}}function L(G,I){var H=a.Replace,$=je(G,I);function Y(){L(G,I)}if(re(H,$,Y)){var X=q($,ce),Re=X[0],Fe=X[1];A.replaceState(Re,"",Fe),ae(H)}}function W(G){A.go(G)}var V={get action(){return ee},get location(){return Te},createHref:_e,push:O,replace:L,go:W,back:function(){W(-1)},forward:function(){W(1)},listen:function(I){return Oe.push(I)},block:function(I){var H=Ne.push(I);return Ne.length===1&&F.addEventListener(i,E),function(){H(),Ne.length||F.removeEventListener(i,E)}}};return V}function h(P){P===void 0&&(P={});var j=P,N=j.window,F=N===void 0?document.defaultView:N,A=F.history;function k(){var I=R(F.location.hash.substr(1)),H=I.pathname,$=H===void 0?"/":H,Y=I.search,X=Y===void 0?"":Y,Re=I.hash,Fe=Re===void 0?"":Re,at=A.state||{};return[at.idx,r({pathname:$,search:X,hash:Fe,state:at.usr||null,key:at.key||"default"})]}var z=null;function K(){if(z)Ne.call(z),z=null;else{var I=a.Pop,H=k(),$=H[0],Y=H[1];if(Ne.length){if($!=null){var X=ce-$;X&&(z={action:I,location:Y,retry:function(){V(X*-1)}},V(X))}}else O(I)}}F.addEventListener(f,K),F.addEventListener(d,function(){var I=k(),H=I[1];x(H)!==x(Te)&&K()});var ee=a.Pop,J=k(),ce=J[0],Te=J[1],Oe=b(),Ne=b();ce==null&&(ce=0,A.replaceState((0,o.Z)({},A.state,{idx:ce}),""));function _e(){var I=document.querySelector("base"),H="";if(I&&I.getAttribute("href")){var $=F.location.href,Y=$.indexOf("#");H=Y===-1?$:$.slice(0,Y)}return H}function je(I){return _e()+"#"+(typeof I=="string"?I:x(I))}function q(I,H){return H===void 0&&(H=null),r((0,o.Z)({pathname:Te.pathname,hash:"",search:""},typeof I=="string"?R(I):I,{state:H,key:w()}))}function re(I,H){return[{usr:I.state,key:I.key,idx:H},je(I)]}function ae(I,H,$){return!Ne.length||(Ne.call({action:I,location:H,retry:$}),!1)}function O(I){ee=I;var H=k();ce=H[0],Te=H[1],Oe.call({action:ee,location:Te})}function L(I,H){var $=a.Push,Y=q(I,H);function X(){L(I,H)}if(ae($,Y,X)){var Re=re(Y,ce+1),Fe=Re[0],at=Re[1];try{A.pushState(Fe,"",at)}catch(et){F.location.assign(at)}O($)}}function W(I,H){var $=a.Replace,Y=q(I,H);function X(){W(I,H)}if(ae($,Y,X)){var Re=re(Y,ce),Fe=Re[0],at=Re[1];A.replaceState(Fe,"",at),O($)}}function V(I){A.go(I)}var G={get action(){return ee},get location(){return Te},createHref:je,push:L,replace:W,go:V,back:function(){V(-1)},forward:function(){V(1)},listen:function(H){return Oe.push(H)},block:function(H){var $=Ne.push(H);return Ne.length===1&&F.addEventListener(i,E),function(){$(),Ne.length||F.removeEventListener(i,E)}}};return G}function p(P){P===void 0&&(P={});var j=P,N=j.initialEntries,F=N===void 0?["/"]:N,A=j.initialIndex,k=F.map(function(O){var L=r((0,o.Z)({pathname:"/",search:"",hash:"",state:null,key:w()},typeof O=="string"?R(O):O));return L}),z=m(A==null?k.length-1:A,0,k.length-1),K=a.Pop,ee=k[z],J=b(),ce=b();function Te(O){return typeof O=="string"?O:x(O)}function Oe(O,L){return L===void 0&&(L=null),r((0,o.Z)({pathname:ee.pathname,search:"",hash:""},typeof O=="string"?R(O):O,{state:L,key:w()}))}function Ne(O,L,W){return!ce.length||(ce.call({action:O,location:L,retry:W}),!1)}function _e(O,L){K=O,ee=L,J.call({action:K,location:ee})}function je(O,L){var W=a.Push,V=Oe(O,L);function G(){je(O,L)}Ne(W,V,G)&&(z+=1,k.splice(z,k.length,V),_e(W,V))}function q(O,L){var W=a.Replace,V=Oe(O,L);function G(){q(O,L)}Ne(W,V,G)&&(k[z]=V,_e(W,V))}function re(O){var L=m(z+O,0,k.length-1),W=a.Pop,V=k[L];function G(){re(O)}Ne(W,V,G)&&(z=L,_e(W,V))}var ae={get index(){return z},get action(){return K},get location(){return ee},createHref:Te,push:je,replace:q,go:re,back:function(){re(-1)},forward:function(){re(1)},listen:function(L){return J.push(L)},block:function(L){return ce.push(L)}};return ae}function m(P,j,N){return Math.min(Math.max(P,j),N)}function E(P){P.preventDefault(),P.returnValue=""}function b(){var P=[];return{get length(){return P.length},push:function(N){return P.push(N),function(){P=P.filter(function(F){return F!==N})}},call:function(N){P.forEach(function(F){return F&&F(N)})}}}function w(){return Math.random().toString(36).substr(2,8)}function x(P){var j=P.pathname,N=j===void 0?"/":j,F=P.search,A=F===void 0?"":F,k=P.hash,z=k===void 0?"":k;return A&&A!=="?"&&(N+=A.charAt(0)==="?"?A:"?"+A),z&&z!=="#"&&(N+=z.charAt(0)==="#"?z:"#"+z),N}function R(P){var j={};if(P){var N=P.indexOf("#");N>=0&&(j.hash=P.substr(N),P=P.substr(0,N));var F=P.indexOf("?");F>=0&&(j.search=P.substr(F),P=P.substr(0,F)),P&&(j.pathname=P)}return j}},94266:function(s,v,e){"use strict";var o=e(99234),a={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},r={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},l={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},i={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},d={};d[o.ForwardRef]=l,d[o.Memo]=i;function f(x){return o.isMemo(x)?i:d[x.$$typeof]||a}var g=Object.defineProperty,h=Object.getOwnPropertyNames,p=Object.getOwnPropertySymbols,m=Object.getOwnPropertyDescriptor,E=Object.getPrototypeOf,b=Object.prototype;function w(x,R,P){if(typeof R!="string"){if(b){var j=E(R);j&&j!==b&&w(x,j,P)}var N=h(R);p&&(N=N.concat(p(R)));for(var F=f(x),A=f(R),k=0;k<N.length;++k){var z=N[k];if(!r[z]&&!(P&&P[z])&&!(A&&A[z])&&!(F&&F[z])){var K=m(R,z);try{g(x,z,K)}catch(ee){}}}}return x}s.exports=w},62376:function(s,v,e){"use strict";e.d(v,{C:function(){return h}});var o=e(32290),a=e(66190),r=e(27017),l=e(41555);function i(p,m){return m?(0,o.pi)((0,o.pi)((0,o.pi)({},p||{}),m||{}),Object.keys(p).reduce(function(E,b){return E[b]=(0,o.pi)((0,o.pi)({},p[b]),m[b]||{}),E},{})):p}function d(p,m){return m?Object.keys(p).reduce(function(E,b){return E[b]=i(p[b],m[b]),E},(0,o.pi)({},p)):p}function f(p){return{create:function(){return{get:function(m){return p[m]},set:function(m,E){p[m]=E}}}}}function g(p){return p===void 0&&(p={number:{},dateTime:{},pluralRules:{}}),{getNumberFormat:(0,r.H)(function(){for(var m,E=[],b=0;b<arguments.length;b++)E[b]=arguments[b];return new((m=Intl.NumberFormat).bind.apply(m,(0,o.ev)([void 0],E,!1)))},{cache:f(p.number),strategy:r.A.variadic}),getDateTimeFormat:(0,r.H)(function(){for(var m,E=[],b=0;b<arguments.length;b++)E[b]=arguments[b];return new((m=Intl.DateTimeFormat).bind.apply(m,(0,o.ev)([void 0],E,!1)))},{cache:f(p.dateTime),strategy:r.A.variadic}),getPluralRules:(0,r.H)(function(){for(var m,E=[],b=0;b<arguments.length;b++)E[b]=arguments[b];return new((m=Intl.PluralRules).bind.apply(m,(0,o.ev)([void 0],E,!1)))},{cache:f(p.pluralRules),strategy:r.A.variadic})}}var h=function(){function p(m,E,b,w){var x=this;if(E===void 0&&(E=p.defaultLocale),this.formatterCache={number:{},dateTime:{},pluralRules:{}},this.format=function(N){var F=x.formatToParts(N);if(F.length===1)return F[0].value;var A=F.reduce(function(k,z){return!k.length||z.type!==l.du.literal||typeof k[k.length-1]!="string"?k.push(z.value):k[k.length-1]+=z.value,k},[]);return A.length<=1?A[0]||"":A},this.formatToParts=function(N){return(0,l.FK)(x.ast,x.locales,x.formatters,x.formats,N,void 0,x.message)},this.resolvedOptions=function(){var N;return{locale:((N=x.resolvedLocale)===null||N===void 0?void 0:N.toString())||Intl.NumberFormat.supportedLocalesOf(x.locales)[0]}},this.getAst=function(){return x.ast},this.locales=E,this.resolvedLocale=p.resolveLocale(E),typeof m=="string"){if(this.message=m,!p.__parse)throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");var R=w||{},P=R.formatters,j=(0,o._T)(R,["formatters"]);this.ast=p.__parse(m,(0,o.pi)((0,o.pi)({},j),{locale:this.resolvedLocale}))}else this.ast=m;if(!Array.isArray(this.ast))throw new TypeError("A message must be provided as a String or AST.");this.formats=d(p.formats,b),this.formatters=w&&w.formatters||g(this.formatterCache)}return Object.defineProperty(p,"defaultLocale",{get:function(){return p.memoizedDefaultLocale||(p.memoizedDefaultLocale=new Intl.NumberFormat().resolvedOptions().locale),p.memoizedDefaultLocale},enumerable:!1,configurable:!0}),p.memoizedDefaultLocale=null,p.resolveLocale=function(m){if(typeof Intl.Locale!="undefined"){var E=Intl.NumberFormat.supportedLocalesOf(m);return E.length>0?new Intl.Locale(E[0]):new Intl.Locale(typeof m=="string"?m:m[0])}},p.__parse=a.Qc,p.formats={number:{integer:{maximumFractionDigits:0},currency:{style:"currency"},percent:{style:"percent"}},date:{short:{month:"numeric",day:"numeric",year:"2-digit"},medium:{month:"short",day:"numeric",year:"numeric"},long:{month:"long",day:"numeric",year:"numeric"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}},time:{short:{hour:"numeric",minute:"numeric"},medium:{hour:"numeric",minute:"numeric",second:"numeric"},long:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},full:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"}}},p}()},25610:function(s,v,e){"use strict";e.d(v,{C8:function(){return l},HR:function(){return d},YR:function(){return i},jK:function(){return a},u_:function(){return r}});var o=e(32290),a;(function(f){f.MISSING_VALUE="MISSING_VALUE",f.INVALID_VALUE="INVALID_VALUE",f.MISSING_INTL_API="MISSING_INTL_API"})(a||(a={}));var r=function(f){(0,o.ZT)(g,f);function g(h,p,m){var E=f.call(this,h)||this;return E.code=p,E.originalMessage=m,E}return g.prototype.toString=function(){return"[formatjs Error: ".concat(this.code,"] ").concat(this.message)},g}(Error),l=function(f){(0,o.ZT)(g,f);function g(h,p,m,E){return f.call(this,'Invalid values for "'.concat(h,'": "').concat(p,'". Options are "').concat(Object.keys(m).join('", "'),'"'),a.INVALID_VALUE,E)||this}return g}(r),i=function(f){(0,o.ZT)(g,f);function g(h,p,m){return f.call(this,'Value for "'.concat(h,'" must be of type ').concat(p),a.INVALID_VALUE,m)||this}return g}(r),d=function(f){(0,o.ZT)(g,f);function g(h,p){return f.call(this,'The intl string context variable "'.concat(h,'" was not provided to the string "').concat(p,'"'),a.MISSING_VALUE,p)||this}return g}(r)},41555:function(s,v,e){"use strict";e.d(v,{FK:function(){return d},Gt:function(){return i},du:function(){return r}});var o=e(66190),a=e(25610),r;(function(f){f[f.literal=0]="literal",f[f.object=1]="object"})(r||(r={}));function l(f){return f.length<2?f:f.reduce(function(g,h){var p=g[g.length-1];return!p||p.type!==r.literal||h.type!==r.literal?g.push(h):p.value+=h.value,g},[])}function i(f){return typeof f=="function"}function d(f,g,h,p,m,E,b){if(f.length===1&&(0,o.O4)(f[0]))return[{type:r.literal,value:f[0].value}];for(var w=[],x=0,R=f;x<R.length;x++){var P=R[x];if((0,o.O4)(P)){w.push({type:r.literal,value:P.value});continue}if((0,o.yx)(P)){typeof E=="number"&&w.push({type:r.literal,value:h.getNumberFormat(g).format(E)});continue}var j=P.value;if(!(m&&j in m))throw new a.HR(j,b);var N=m[j];if((0,o.VG)(P)){(!N||typeof N=="string"||typeof N=="number")&&(N=typeof N=="string"||typeof N=="number"?String(N):""),w.push({type:typeof N=="string"?r.literal:r.object,value:N});continue}if((0,o.rp)(P)){var F=typeof P.style=="string"?p.date[P.style]:(0,o.Ii)(P.style)?P.style.parsedOptions:void 0;w.push({type:r.literal,value:h.getDateTimeFormat(g,F).format(N)});continue}if((0,o.pe)(P)){var F=typeof P.style=="string"?p.time[P.style]:(0,o.Ii)(P.style)?P.style.parsedOptions:p.time.medium;w.push({type:r.literal,value:h.getDateTimeFormat(g,F).format(N)});continue}if((0,o.uf)(P)){var F=typeof P.style=="string"?p.number[P.style]:(0,o.Wh)(P.style)?P.style.parsedOptions:void 0;F&&F.scale&&(N=N*(F.scale||1)),w.push({type:r.literal,value:h.getNumberFormat(g,F).format(N)});continue}if((0,o.HI)(P)){var A=P.children,k=P.value,z=m[k];if(!i(z))throw new a.YR(k,"function",b);var K=d(A,g,h,p,m,E),ee=z(K.map(function(Te){return Te.value}));Array.isArray(ee)||(ee=[ee]),w.push.apply(w,ee.map(function(Te){return{type:typeof Te=="string"?r.literal:r.object,value:Te}}))}if((0,o.Wi)(P)){var J=P.options[N]||P.options.other;if(!J)throw new a.C8(P.value,N,Object.keys(P.options),b);w.push.apply(w,d(J.value,g,h,p,m));continue}if((0,o.Jo)(P)){var J=P.options["=".concat(N)];if(!J){if(!Intl.PluralRules)throw new a.u_(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,a.jK.MISSING_INTL_API,b);var ce=h.getPluralRules(g,{type:P.pluralType}).select(N-(P.offset||0));J=P.options[ce]||P.options.other}if(!J)throw new a.C8(P.value,N,Object.keys(P.options),b);w.push.apply(w,d(J.value,g,h,p,m,N-(P.offset||0)));continue}}return l(w)}},44520:function(s){"use strict";var v=function(e,o,a,r,l,i,d,f){if(!e){var g;if(o===void 0)g=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var h=[a,r,l,i,d,f],p=0;g=new Error(o.replace(/%s/g,function(){return h[p++]})),g.name="Invariant Violation"}throw g.framesToPop=1,g}};s.exports=v},88211:function(s,v,e){var o,a=function(){var r=String.fromCharCode,l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",d={};function f(h,p){if(!d[h]){d[h]={};for(var m=0;m<h.length;m++)d[h][h.charAt(m)]=m}return d[h][p]}var g={compressToBase64:function(h){if(h==null)return"";var p=g._compress(h,6,function(m){return l.charAt(m)});switch(p.length%4){default:case 0:return p;case 1:return p+"===";case 2:return p+"==";case 3:return p+"="}},decompressFromBase64:function(h){return h==null?"":h==""?null:g._decompress(h.length,32,function(p){return f(l,h.charAt(p))})},compressToUTF16:function(h){return h==null?"":g._compress(h,15,function(p){return r(p+32)})+" "},decompressFromUTF16:function(h){return h==null?"":h==""?null:g._decompress(h.length,16384,function(p){return h.charCodeAt(p)-32})},compressToUint8Array:function(h){for(var p=g.compress(h),m=new Uint8Array(p.length*2),E=0,b=p.length;E<b;E++){var w=p.charCodeAt(E);m[E*2]=w>>>8,m[E*2+1]=w%256}return m},decompressFromUint8Array:function(h){if(h==null)return g.decompress(h);for(var p=new Array(h.length/2),m=0,E=p.length;m<E;m++)p[m]=h[m*2]*256+h[m*2+1];var b=[];return p.forEach(function(w){b.push(r(w))}),g.decompress(b.join(""))},compressToEncodedURIComponent:function(h){return h==null?"":g._compress(h,6,function(p){return i.charAt(p)})},decompressFromEncodedURIComponent:function(h){return h==null?"":h==""?null:(h=h.replace(/ /g,"+"),g._decompress(h.length,32,function(p){return f(i,h.charAt(p))}))},compress:function(h){return g._compress(h,16,function(p){return r(p)})},_compress:function(h,p,m){if(h==null)return"";var E,b,w={},x={},R="",P="",j="",N=2,F=3,A=2,k=[],z=0,K=0,ee;for(ee=0;ee<h.length;ee+=1)if(R=h.charAt(ee),Object.prototype.hasOwnProperty.call(w,R)||(w[R]=F++,x[R]=!0),P=j+R,Object.prototype.hasOwnProperty.call(w,P))j=P;else{if(Object.prototype.hasOwnProperty.call(x,j)){if(j.charCodeAt(0)<256){for(E=0;E<A;E++)z=z<<1,K==p-1?(K=0,k.push(m(z)),z=0):K++;for(b=j.charCodeAt(0),E=0;E<8;E++)z=z<<1|b&1,K==p-1?(K=0,k.push(m(z)),z=0):K++,b=b>>1}else{for(b=1,E=0;E<A;E++)z=z<<1|b,K==p-1?(K=0,k.push(m(z)),z=0):K++,b=0;for(b=j.charCodeAt(0),E=0;E<16;E++)z=z<<1|b&1,K==p-1?(K=0,k.push(m(z)),z=0):K++,b=b>>1}N--,N==0&&(N=Math.pow(2,A),A++),delete x[j]}else for(b=w[j],E=0;E<A;E++)z=z<<1|b&1,K==p-1?(K=0,k.push(m(z)),z=0):K++,b=b>>1;N--,N==0&&(N=Math.pow(2,A),A++),w[P]=F++,j=String(R)}if(j!==""){if(Object.prototype.hasOwnProperty.call(x,j)){if(j.charCodeAt(0)<256){for(E=0;E<A;E++)z=z<<1,K==p-1?(K=0,k.push(m(z)),z=0):K++;for(b=j.charCodeAt(0),E=0;E<8;E++)z=z<<1|b&1,K==p-1?(K=0,k.push(m(z)),z=0):K++,b=b>>1}else{for(b=1,E=0;E<A;E++)z=z<<1|b,K==p-1?(K=0,k.push(m(z)),z=0):K++,b=0;for(b=j.charCodeAt(0),E=0;E<16;E++)z=z<<1|b&1,K==p-1?(K=0,k.push(m(z)),z=0):K++,b=b>>1}N--,N==0&&(N=Math.pow(2,A),A++),delete x[j]}else for(b=w[j],E=0;E<A;E++)z=z<<1|b&1,K==p-1?(K=0,k.push(m(z)),z=0):K++,b=b>>1;N--,N==0&&(N=Math.pow(2,A),A++)}for(b=2,E=0;E<A;E++)z=z<<1|b&1,K==p-1?(K=0,k.push(m(z)),z=0):K++,b=b>>1;for(;;)if(z=z<<1,K==p-1){k.push(m(z));break}else K++;return k.join("")},decompress:function(h){return h==null?"":h==""?null:g._decompress(h.length,32768,function(p){return h.charCodeAt(p)})},_decompress:function(h,p,m){var E=[],b,w=4,x=4,R=3,P="",j=[],N,F,A,k,z,K,ee,J={val:m(0),position:p,index:1};for(N=0;N<3;N+=1)E[N]=N;for(A=0,z=Math.pow(2,2),K=1;K!=z;)k=J.val&J.position,J.position>>=1,J.position==0&&(J.position=p,J.val=m(J.index++)),A|=(k>0?1:0)*K,K<<=1;switch(b=A){case 0:for(A=0,z=Math.pow(2,8),K=1;K!=z;)k=J.val&J.position,J.position>>=1,J.position==0&&(J.position=p,J.val=m(J.index++)),A|=(k>0?1:0)*K,K<<=1;ee=r(A);break;case 1:for(A=0,z=Math.pow(2,16),K=1;K!=z;)k=J.val&J.position,J.position>>=1,J.position==0&&(J.position=p,J.val=m(J.index++)),A|=(k>0?1:0)*K,K<<=1;ee=r(A);break;case 2:return""}for(E[3]=ee,F=ee,j.push(ee);;){if(J.index>h)return"";for(A=0,z=Math.pow(2,R),K=1;K!=z;)k=J.val&J.position,J.position>>=1,J.position==0&&(J.position=p,J.val=m(J.index++)),A|=(k>0?1:0)*K,K<<=1;switch(ee=A){case 0:for(A=0,z=Math.pow(2,8),K=1;K!=z;)k=J.val&J.position,J.position>>=1,J.position==0&&(J.position=p,J.val=m(J.index++)),A|=(k>0?1:0)*K,K<<=1;E[x++]=r(A),ee=x-1,w--;break;case 1:for(A=0,z=Math.pow(2,16),K=1;K!=z;)k=J.val&J.position,J.position>>=1,J.position==0&&(J.position=p,J.val=m(J.index++)),A|=(k>0?1:0)*K,K<<=1;E[x++]=r(A),ee=x-1,w--;break;case 2:return j.join("")}if(w==0&&(w=Math.pow(2,R),R++),E[ee])P=E[ee];else if(ee===x)P=F+F.charAt(0);else return null;j.push(P),E[x++]=F+P.charAt(0),w--,F=P,w==0&&(w=Math.pow(2,R),R++)}}};return g}();o=function(){return a}.call(v,e,v,s),o!==void 0&&(s.exports=o)},65345:function(s,v,e){var o,a;(function(r,l){o=l,a=typeof o=="function"?o.call(v,e,v,s):o,a!==void 0&&(s.exports=a)})(this,function(){var r={};r.version="0.2.0";var l=r.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};r.configure=function(x){var R,P;for(R in x)P=x[R],P!==void 0&&x.hasOwnProperty(R)&&(l[R]=P);return this},r.status=null,r.set=function(x){var R=r.isStarted();x=i(x,l.minimum,1),r.status=x===1?null:x;var P=r.render(!R),j=P.querySelector(l.barSelector),N=l.speed,F=l.easing;return P.offsetWidth,g(function(A){l.positionUsing===""&&(l.positionUsing=r.getPositioningCSS()),h(j,f(x,N,F)),x===1?(h(P,{transition:"none",opacity:1}),P.offsetWidth,setTimeout(function(){h(P,{transition:"all "+N+"ms linear",opacity:0}),setTimeout(function(){r.remove(),A()},N)},N)):setTimeout(A,N)}),this},r.isStarted=function(){return typeof r.status=="number"},r.start=function(){r.status||r.set(0);var x=function(){setTimeout(function(){r.status&&(r.trickle(),x())},l.trickleSpeed)};return l.trickle&&x(),this},r.done=function(x){return!x&&!r.status?this:r.inc(.3+.5*Math.random()).set(1)},r.inc=function(x){var R=r.status;return R?(typeof x!="number"&&(x=(1-R)*i(Math.random()*R,.1,.95)),R=i(R+x,0,.994),r.set(R)):r.start()},r.trickle=function(){return r.inc(Math.random()*l.trickleRate)},function(){var x=0,R=0;r.promise=function(P){return!P||P.state()==="resolved"?this:(R===0&&r.start(),x++,R++,P.always(function(){R--,R===0?(x=0,r.done()):r.set((x-R)/x)}),this)}}(),r.render=function(x){if(r.isRendered())return document.getElementById("nprogress");m(document.documentElement,"nprogress-busy");var R=document.createElement("div");R.id="nprogress",R.innerHTML=l.template;var P=R.querySelector(l.barSelector),j=x?"-100":d(r.status||0),N=document.querySelector(l.parent),F;return h(P,{transition:"all 0 linear",transform:"translate3d("+j+"%,0,0)"}),l.showSpinner||(F=R.querySelector(l.spinnerSelector),F&&w(F)),N!=document.body&&m(N,"nprogress-custom-parent"),N.appendChild(R),R},r.remove=function(){E(document.documentElement,"nprogress-busy"),E(document.querySelector(l.parent),"nprogress-custom-parent");var x=document.getElementById("nprogress");x&&w(x)},r.isRendered=function(){return!!document.getElementById("nprogress")},r.getPositioningCSS=function(){var x=document.body.style,R="WebkitTransform"in x?"Webkit":"MozTransform"in x?"Moz":"msTransform"in x?"ms":"OTransform"in x?"O":"";return R+"Perspective"in x?"translate3d":R+"Transform"in x?"translate":"margin"};function i(x,R,P){return x<R?R:x>P?P:x}function d(x){return(-1+x)*100}function f(x,R,P){var j;return l.positionUsing==="translate3d"?j={transform:"translate3d("+d(x)+"%,0,0)"}:l.positionUsing==="translate"?j={transform:"translate("+d(x)+"%,0)"}:j={"margin-left":d(x)+"%"},j.transition="all "+R+"ms "+P,j}var g=function(){var x=[];function R(){var P=x.shift();P&&P(R)}return function(P){x.push(P),x.length==1&&R()}}(),h=function(){var x=["Webkit","O","Moz","ms"],R={};function P(A){return A.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(k,z){return z.toUpperCase()})}function j(A){var k=document.body.style;if(A in k)return A;for(var z=x.length,K=A.charAt(0).toUpperCase()+A.slice(1),ee;z--;)if(ee=x[z]+K,ee in k)return ee;return A}function N(A){return A=P(A),R[A]||(R[A]=j(A))}function F(A,k,z){k=N(k),A.style[k]=z}return function(A,k){var z=arguments,K,ee;if(z.length==2)for(K in k)ee=k[K],ee!==void 0&&k.hasOwnProperty(K)&&F(A,K,ee);else F(A,z[1],z[2])}}();function p(x,R){var P=typeof x=="string"?x:b(x);return P.indexOf(" "+R+" ")>=0}function m(x,R){var P=b(x),j=P+R;p(P,R)||(x.className=j.substring(1))}function E(x,R){var P=b(x),j;p(x,R)&&(j=P.replace(" "+R+" "," "),x.className=j.substring(1,j.length-1))}function b(x){return(" "+(x.className||"")+" ").replace(/\s+/gi," ")}function w(x){x&&x.parentNode&&x.parentNode.removeChild(x)}return r})},97671:function(s){var v=s.exports={},e,o;function a(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?e=setTimeout:e=a}catch(w){e=a}try{typeof clearTimeout=="function"?o=clearTimeout:o=r}catch(w){o=r}})();function l(w){if(e===setTimeout)return setTimeout(w,0);if((e===a||!e)&&setTimeout)return e=setTimeout,setTimeout(w,0);try{return e(w,0)}catch(x){try{return e.call(null,w,0)}catch(R){return e.call(this,w,0)}}}function i(w){if(o===clearTimeout)return clearTimeout(w);if((o===r||!o)&&clearTimeout)return o=clearTimeout,clearTimeout(w);try{return o(w)}catch(x){try{return o.call(null,w)}catch(R){return o.call(this,w)}}}var d=[],f=!1,g,h=-1;function p(){!f||!g||(f=!1,g.length?d=g.concat(d):h=-1,d.length&&m())}function m(){if(!f){var w=l(p);f=!0;for(var x=d.length;x;){for(g=d,d=[];++h<x;)g&&g[h].run();h=-1,x=d.length}g=null,f=!1,i(w)}}v.nextTick=function(w){var x=new Array(arguments.length-1);if(arguments.length>1)for(var R=1;R<arguments.length;R++)x[R-1]=arguments[R];d.push(new E(w,x)),d.length===1&&!f&&l(m)};function E(w,x){this.fun=w,this.array=x}E.prototype.run=function(){this.fun.apply(null,this.array)},v.title="browser",v.browser=!0,v.env={},v.argv=[],v.version="",v.versions={};function b(){}v.on=b,v.addListener=b,v.once=b,v.off=b,v.removeListener=b,v.removeAllListeners=b,v.emit=b,v.prependListener=b,v.prependOnceListener=b,v.listeners=function(w){return[]},v.binding=function(w){throw new Error("process.binding is not supported")},v.cwd=function(){return"/"},v.chdir=function(w){throw new Error("process.chdir is not supported")},v.umask=function(){return 0}},79442:function(s,v,e){"use strict";var o=e(97825);function a(){}function r(){}r.resetWarningCache=a,s.exports=function(){function l(f,g,h,p,m,E){if(E!==o){var b=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw b.name="Invariant Violation",b}}l.isRequired=l;function i(){return l}var d={array:l,bigint:l,bool:l,func:l,number:l,object:l,string:l,symbol:l,any:l,arrayOf:i,element:l,elementType:l,instanceOf:i,node:l,objectOf:i,oneOf:i,oneOfType:i,shape:i,exact:i,checkPropTypes:r,resetWarningCache:a};return d.PropTypes=d,d}},12708:function(s,v,e){if(!1)var o,a;else s.exports=e(79442)()},97825:function(s){"use strict";var v="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";s.exports=v},28332:function(s,v){"use strict";v.Z=`import { GaodeMap, LineLayer, PointLayer, PolygonLayer, Scene } from '@antv/l7';
import { featureCollection, polygon } from '@turf/turf';
import { cellToBoundary, latLngToCell } from 'h3-js';
import React, { useEffect } from 'react';
import { data } from './mock';

const jsonToHex = (json: any, hexId: string, lat: string, lon: string) => {
  const hexIndexList = json
    .map((item: any) => {
      return {
        ...item,
        hexIndex: latLngToCell(+item[lat], +item[lon], +item[hexId]),
      };
    })
    .filter((item: { hexIndex: string }, index: number, arr: any[]) => {
      return arr.findIndex((t) => t.hexIndex === item.hexIndex) === index;
    });

  const hexBoundaryList = hexIndexList.map((item: any) => {
    return { ...item, hexBoundary: cellToBoundary(item.hexIndex, true) };
  });

  const features = hexBoundaryList.map((item: any) => {
    return polygon([item.hexBoundary], { ...item });
  });

  return featureCollection(features);
};

export default () => {
  useEffect(() => {
    const scene = new Scene({
      id: 'map',
      map: new GaodeMap({
        center: [121.438579, 31.246384],
        pitch: 0,
        zoom: 10,
        token: '5ae4492ef912cbbc93034fea0e66ff2a',
      }),
    });
    scene.on('loaded', () => {
      const hexLayer = new PolygonLayer({})
        .source(jsonToHex(data, 'odCnt', 'fLat', 'fLon'))
        .color('count', [
          'rgb(253,204,138)',
          'rgb(252,141,89)',
          'rgb(227,74,51)',
          'rgb(179,0,0)',
        ])
        .shape('fill')
        .active(true)
        .style({
          opacity: 0.6,
        });

      const lineLayer = new LineLayer({
        zIndex: 2,
      })
        .source(jsonToHex(data, 'odCnt', 'fLat', 'fLon'))
        .color('#fff')
        .size(0.8);

      const pointLayer = new PointLayer({})
        .source(data, {
          parser: {
            type: 'json',
            x: 'fLon',
            y: 'fLat',
          },
        })
        .shape('circle')
        .size(5)
        .color('#0f9960');

      scene.addLayer(hexLayer);
      scene.addLayer(lineLayer);
      scene.addLayer(pointLayer);
    });
  }, []);

  return (
    <div>
      <div id={'map'} style={{ height: 400, position: 'relative' }} />
    </div>
  );
};
`},67895:function(s,v){"use strict";v.Z=`export const data = [
  {
    fLat: 31.246384,
    fLon: 121.438579,
    odCnt: 7,
    count: 27,
  },
  {
    fLat: 31.232293,
    fLon: 121.464098,
    odCnt: 7,
    count: 4,
  },
  {
    fLat: 31.217744,
    fLon: 121.429541,
    odCnt: 7,
    count: 8,
  },
  {
    fLat: 31.215925,
    fLon: 121.515138,
    odCnt: 7,
    count: 1,
  },
  {
    fLat: 31.178634,
    fLon: 121.472073,
    odCnt: 7,
    count: 39,
  },
  {
    fLat: 31.206831,
    fLon: 121.473668,
    odCnt: 7,
    count: 16,
  },
  {
    fLat: 31.17363,
    fLon: 121.435389,
    odCnt: 7,
    count: 8,
  },
  {
    fLat: 31.202739,
    fLon: 121.404553,
    odCnt: 7,
    count: 29,
  },
  {
    fLat: 31.165442,
    fLon: 121.535341,
    odCnt: 7,
    count: 4,
  },
  {
    fLat: 31.247748,
    fLon: 121.492276,
    odCnt: 7,
    count: 1,
  },
  {
    fLat: 31.235929,
    fLon: 121.355108,
    odCnt: 7,
    count: 21,
  },
  {
    fLat: 31.152248,
    fLon: 121.381691,
    odCnt: 7,
    count: 2,
  },
  {
    fLat: 31.300459,
    fLon: 121.447085,
    odCnt: 7,
    count: 34,
  },
  {
    fLat: 31.220472,
    fLon: 121.550227,
    odCnt: 7,
    count: 5,
  },
  {
    fLat: 31.292282,
    fLon: 121.485365,
    odCnt: 7,
    count: 28,
  },
  {
    fLat: 31.270472,
    fLon: 121.501314,
    odCnt: 7,
    count: 22,
  },
  {
    fLat: 31.270017,
    fLon: 121.465162,
    odCnt: 7,
    count: 14,
  },
  {
    fLat: 31.241839,
    fLon: 121.382755,
    odCnt: 7,
    count: 8,
  },
  {
    fLat: 31.264564,
    fLon: 121.410932,
    odCnt: 7,
    count: 2,
  },
  {
    fLat: 31.278651,
    fLon: 121.440174,
    odCnt: 7,
    count: 10,
  },
  {
    fLat: 31.266836,
    fLon: 121.520454,
    odCnt: 7,
    count: 6,
  },
  {
    fLat: 31.234669,
    fLon: 121.433343,
    odCnt: 7,
    count: 34,
  },
  {
    fLat: 31.230289,
    fLon: 121.483659,
    odCnt: 7,
    count: 38,
  },
  {
    fLat: 31.203233,
    fLon: 121.492095,
    odCnt: 7,
    count: 33,
  },
  {
    fLat: 31.210707,
    fLon: 121.437561,
    odCnt: 7,
    count: 34,
  },
  {
    fLat: 31.229774,
    fLon: 121.44901,
    odCnt: 7,
    count: 11,
  },
  {
    fLat: 31.200399,
    fLon: 121.448106,
    odCnt: 7,
    count: 38,
  },
  {
    fLat: 31.218695,
    fLon: 121.460761,
    odCnt: 7,
    count: 13,
  },
  {
    fLat: 31.199883,
    fLon: 121.463171,
    odCnt: 7,
    count: 28,
  },
  {
    fLat: 31.197048,
    fLon: 121.499929,
    odCnt: 7,
    count: 28,
  },
  {
    fLat: 31.182872,
    fLon: 121.502641,
    odCnt: 7,
    count: 25,
  },
  {
    fLat: 31.19911,
    fLon: 121.515596,
    odCnt: 7,
    count: 28,
  },
  {
    fLat: 31.223088,
    fLon: 121.495208,
    odCnt: 7,
    count: 30,
  },
  {
    fLat: 31.240688,
    fLon: 121.499641,
    odCnt: 7,
    count: 37,
  },
  {
    fLat: 31.251517,
    fLon: 121.468291,
    odCnt: 7,
    count: 37,
  },
  {
    fLat: 31.243666,
    fLon: 121.478425,
    odCnt: 7,
    count: 3,
  },
  {
    fLat: 31.258767,
    fLon: 121.478425,
    odCnt: 7,
    count: 5,
  },
  {
    fLat: 31.266347,
    fLon: 121.489191,
    odCnt: 7,
    count: 17,
  },
  {
    fLat: 31.275278,
    fLon: 121.478741,
    odCnt: 7,
    count: 35,
  },
  {
    fLat: 31.282585,
    fLon: 121.489824,
    odCnt: 7,
    count: 35,
  },
  {
    fLat: 31.286915,
    fLon: 121.475258,
    odCnt: 7,
    count: 7,
  },
  {
    fLat: 31.28448,
    fLon: 121.468291,
    odCnt: 7,
    count: 13,
  },
  {
    fLat: 31.262557,
    fLon: 121.458158,
    odCnt: 7,
    count: 27,
  },
  {
    fLat: 31.261474,
    fLon: 121.448025,
    odCnt: 7,
    count: 40,
  },
  {
    fLat: 31.276631,
    fLon: 121.453092,
    odCnt: 7,
    count: 6,
  },
  {
    fLat: 31.28908,
    fLon: 121.458158,
    odCnt: 7,
    count: 14,
  },
  {
    fLat: 31.300986,
    fLon: 121.467025,
    odCnt: 7,
    count: 33,
  },
  {
    fLat: 31.231153,
    fLon: 121.508191,
    odCnt: 7,
    count: 4,
  },
  {
    fLat: 31.246044,
    fLon: 121.513891,
    odCnt: 7,
    count: 30,
  },
  {
    fLat: 31.217343,
    fLon: 121.484758,
    odCnt: 7,
    count: 3,
  },
  {
    fLat: 31.23007,
    fLon: 121.471775,
    odCnt: 7,
    count: 8,
  },
  {
    fLat: 31.221675,
    fLon: 121.473358,
    odCnt: 7,
    count: 19,
  },
  {
    fLat: 31.214364,
    fLon: 121.526874,
    odCnt: 7,
    count: 7,
  },
  {
    fLat: 31.212468,
    fLon: 121.505341,
    odCnt: 7,
    count: 4,
  },
  {
    fLat: 31.227091,
    fLon: 121.502807,
    odCnt: 7,
    count: 29,
  },
  {
    fLat: 31.235485,
    fLon: 121.528774,
    odCnt: 7,
    count: 29,
  },
  {
    fLat: 31.20353,
    fLon: 121.532574,
    odCnt: 7,
    count: 10,
  },
  {
    fLat: 31.191814,
    fLon: 121.529455,
    odCnt: 7,
    count: 8,
  },
  {
    fLat: 31.257386,
    fLon: 121.502068,
    odCnt: 7,
    count: 25,
  },
];
`},70462:function(s,v){"use strict";v.Z=`import { GaodeMap, LineLayer, PointLayer, PolygonLayer, Scene } from '@antv/l7';
import { featureCollection, point, polygon } from '@turf/turf';
import React, { useEffect } from 'react';
import { newData } from './newMock';

const jsonToPolygon = (json: any) => {
  const data = json.heatmap_data.fences.map((item) => {
    const newPoints = item.points.map((point) => {
      return [+point.longitude, +point.latitude];
    });
    const polygonData = polygon([[...newPoints, [...newPoints[0]]]], {
      ...item,
    });
    return polygonData;
  });
  return featureCollection(data);
};

const jsonToPoint = (json: any) => {
  const geoJsonFeatures = json.heatmap_data.fences.map((fence) => {
    // \u901A\u8FC7his_order\u521B\u5EFA\u70B9\u7279\u5F81
    const pointFeatures = fence.his_order.map((order) => {
      // \u521B\u5EFAGeoJSON\u70B9\u7279\u5F81
      const pointFeature = point(
        [parseFloat(order.longitude), parseFloat(order.latitude)],
        {
          hex_id: fence.hex_id,
          order_count: fence.order_count,
          rank: fence.rank,
          // \u6DFB\u52A0\u66F4\u591A\u5C5E\u6027...
        },
      );
      return pointFeature;
    });

    // \u5C06\u6240\u6709\u70B9\u7279\u5F81\u5408\u5E76\u4E3A\u4E00\u4E2A\u7279\u5F81\u96C6
    return pointFeatures;
  });

  return featureCollection(geoJsonFeatures.flat());
};

export default () => {
  useEffect(() => {
    console.log();
    const scene = new Scene({
      id: 'map',
      map: new GaodeMap({
        center: [113.2493444306987, 23.13099578261949],
        pitch: 0,
        zoom: 10,
        token: '5ae4492ef912cbbc93034fea0e66ff2a',
      }),
    });
    scene.on('loaded', () => {
      const hexLayer = new PolygonLayer({})
        .source(jsonToPolygon(newData))
        .color('order_count', [
          'rgb(253,204,138)',
          'rgb(252,141,89)',
          'rgb(227,74,51)',
          'rgb(179,0,0)',
        ])
        .shape('fill')
        .active(true)
        .style({
          opacity: 0.6,
        });

      const lineLayer = new LineLayer({
        zIndex: 2,
      })
        .source(jsonToPolygon(newData))
        .color('#fff')
        .size(0.8);

      const pointLayer = new PointLayer({})
        .source(jsonToPoint(newData))
        .shape('circle')
        .size(5)
        .color('#0f9960');

      scene.addLayer(hexLayer);
      scene.addLayer(lineLayer);
      scene.addLayer(pointLayer);
    });
  }, []);

  return (
    <div>
      <div id={'map'} style={{ height: 400, position: 'relative' }} />
    </div>
  );
};
`},57775:function(s,v){"use strict";v.Z=`import { GaodeMap, Scene } from '@antv/l7';
import React, { useEffect } from 'react';

export default () => {
  useEffect(() => {
    new Scene({
      id: 'map',
      map: new GaodeMap({
        center: [121.438579, 31.246384],
        pitch: 0,
        zoom: 10,
        token: '5ae4492ef912cbbc93034fea0e66ff2a',
      }),
    });
  }, []);

  return (
    <div>
      <div id={'map'} style={{ height: 400, position: 'relative' }} />
    </div>
  );
};
`},40640:function(s,v){"use strict";v.Z=`import { GaodeMap, Marker, MarkerLayer, Scene } from '@antv/l7';
import { randomPoint } from '@turf/turf';
import { mean } from 'lodash-es';
import React, { useEffect, useState } from 'react';

export default () => {
  const [scene, setScene] = useState<Scene | undefined>(undefined);
  const [markerLayer, setMarkerLayer] = useState<MarkerLayer | undefined>(
    undefined,
  );

  useEffect(() => {
    const scene = new Scene({
      id: 'map',
      map: new GaodeMap({
        center: [121.438579, 31.246384],
        pitch: 0,
        zoom: 10,
        style: 'normal',
      }),
    });
    setScene(scene);

    scene.on('loaded', () => {
      const markerLayer = new MarkerLayer({
        cluster: true,
        clusterOption: {
          element: (cars) => {
            const rotation =
              cars.properties.rotation ||
              mean(
                cars.properties.clusterData?.map(
                  (item) => item.properties.rotation,
                ),
              ) ||
              0;
            const el = document.createElement('div');
            el.className = \`markerDivClass\`;
            el.innerHTML = \`<div>
              <img 
                style="width: 20px; height:30px; transform: rotate(\${rotation}deg);" 
                src="https://mdn.alipayobjects.com/huamei_k6sfo0/afts/img/A*lFnGQae3LtkAAAAAAAAAAAAADjWqAQ/original"
              />
            </div>\`;
            return el;
          },
          // \u89E6\u53D1\u805A\u5408\u7684\u8303\u56F4
          radius: 40,
        },
      });
      const bounds = scene.getBounds();

      randomPoint(100, {
        bbox: [bounds[0][0], bounds[0][1], bounds[1][0], bounds[1][1]],
      }).features.forEach((point) => {
        const coordinates = point.geometry.coordinates;
        const marker = new Marker({}).setLnglat({
          lng: coordinates[0],
          lat: coordinates[1],
        });
        marker.setExtData({
          rotation: Math.round(Math.random() * 360),
        });
        markerLayer.addMarker(marker);
      });
      scene.addMarkerLayer(markerLayer);
      setMarkerLayer(markerLayer);
    });
  }, []);

  const onAddMarker = () => {
    const bounds = scene?.getBounds();
    if (bounds && markerLayer && scene) {
      const point = randomPoint(1, {
        bbox: [bounds[0][0], bounds[0][1], bounds[1][0], bounds[1][1]],
      });
      const coordinates = point.features[0].geometry.coordinates;
      const marker = new Marker({}).setLnglat({
        lng: coordinates[0],
        lat: coordinates[1],
      });
      markerLayer.addMarker(marker);
    }
  };

  const onRemoveMarker = () => {
    const markers = markerLayer?.getOriginMarkers();
    if (markers) {
      markerLayer?.removeMarker(markers[markers.length - 1]);
    }
  };

  return (
    <div>
      <button type="button" onClick={onAddMarker}>
        \u8F66\u8F86+1
      </button>
      <button type="button" onClick={onRemoveMarker}>
        \u8F66\u8F86-1
      </button>
      <div id={'map'} style={{ height: 400, position: 'relative' }} />
    </div>
  );
};
`},57525:function(s,v){"use strict";v.Z=`export const newData = {
  heatmap_data: {
    end_time: '2023-12-28 16:45:00',
    city_code: '440100',
    start_time: '2023-12-28 16:30:00',
    fences: [
      {
        hex_id: '88411d4da7fffff',
        his_order: [
          {
            latitude: '23.120489002975035',
            longitude: '113.25303649318535',
          },
          {
            latitude: '23.116286216614178',
            longitude: '113.25479129121422',
          },
          {
            latitude: '23.121254317636314',
            longitude: '113.2529755439059',
          },
        ],
        order_count: '14',
        points: [
          {
            latitude: '23.115534701120904',
            longitude: '113.25719862290897',
          },
          {
            latitude: '23.120246170866896',
            longitude: '113.25784981785871',
          },
          {
            latitude: '23.123400673187884',
            longitude: '113.25378434607416',
          },
          {
            latitude: '23.12184368208484',
            longitude: '113.24906749177242',
          },
          {
            latitude: '23.11713203489629',
            longitude: '113.24841638080898',
          },
          {
            latitude: '23.1139775562468',
            longitude: '113.25248204014827',
          },
        ],
        rank: '21',
      },
      {
        hex_id: '884118b2c7fffff',
        his_order: [
          {
            latitude: '23.123535969619954',
            longitude: '113.30201083725181',
          },
          {
            latitude: '23.12657134753062',
            longitude: '113.29596023647618',
          },
          {
            latitude: '23.123028984894972',
            longitude: '113.3021540460462',
          },
        ],
        order_count: '13',
        points: [
          {
            latitude: '23.121673658568604',
            longitude: '113.30305172191859',
          },
          {
            latitude: '23.126383613365597',
            longitude: '113.30370338768553',
          },
          {
            latitude: '23.129538539913895',
            longitude: '113.2996401941529',
          },
          {
            latitude: '23.12798348806331',
            longitude: '113.2949251467683',
          },
          {
            latitude: '23.1232733555032',
            longitude: '113.29427356473327',
          },
          {
            latitude: '23.12011845255029',
            longitude: '113.29833694633822',
          },
        ],
        rank: '24',
      },
      {
        hex_id: '884118b2e9fffff',
        his_order: [
          {
            latitude: '23.129283977416815',
            longitude: '113.31277967271066',
          },
          {
            latitude: '23.12834092552385',
            longitude: '113.30887229643238',
          },
          {
            latitude: '23.126663693292926',
            longitude: '113.31090595710167',
          },
        ],
        order_count: '13',
        points: [
          {
            latitude: '23.126337881498237',
            longitude: '113.31719502304674',
          },
          {
            latitude: '23.13104725609715',
            longitude: '113.31784684013716',
          },
          {
            latitude: '23.134202300093015',
            longitude: '113.31378431086598',
          },
          {
            latitude: '23.13264794592939',
            longitude: '113.30906977625628',
          },
          {
            latitude: '23.127938393485035',
            longitude: '113.30841804282085',
          },
          {
            latitude: '23.124783373043236',
            longitude: '113.3124807603274',
          },
        ],
        rank: '25',
      },
      {
        hex_id: '88411d4de9fffff',
        his_order: [
          {
            latitude: '23.08944196882928',
            longitude: '113.27555264132666',
          },
          {
            latitude: '23.088677707779848',
            longitude: '113.27426648185867',
          },
          {
            latitude: '23.08838558578952',
            longitude: '113.27426646228525',
          },
        ],
        order_count: '7',
        points: [
          {
            latitude: '23.08247049775296',
            longitude: '113.27963182998543',
          },
          {
            latitude: '23.087182686721885',
            longitude: '113.2802831733135',
          },
          {
            latitude: '23.090337564906363',
            longitude: '113.27621932781827',
          },
          {
            latitude: '23.088780230250357',
            longitude: '113.27150395122146',
          },
          {
            latitude: '23.084067863469496',
            longitude: '113.27085269173409',
          },
          {
            latitude: '23.08091300915006',
            longitude: '113.2749167249901',
          },
        ],
        rank: '44',
      },
      {
        hex_id: '88411d4d21fffff',
        his_order: [
          {
            latitude: '23.096141858965524',
            longitude: '113.32026306280491',
          },
          {
            latitude: '23.103402190270227',
            longitude: '113.31880264570309',
          },
          {
            latitude: '23.101335277130275',
            longitude: '113.31543689910224',
          },
        ],
        order_count: '6',
        points: [
          {
            latitude: '23.096477438411537',
            longitude: '113.32206009182306',
          },
          {
            latitude: '23.10118788788591',
            longitude: '113.32271188925037',
          },
          {
            latitude: '23.104343118185692',
            longitude: '113.31865003536358',
          },
          {
            latitude: '23.102787875263427',
            longitude: '113.31393619578674',
          },
          {
            latitude: '23.098077247729627',
            longitude: '113.31328448196957',
          },
          {
            latitude: '23.09492204117102',
            longitude: '113.3173465241064',
          },
        ],
        rank: '52',
      },
      {
        hex_id: '884118b207fffff',
        his_order: [
          {
            latitude: '23.127320483166677',
            longitude: '113.34352954329293',
          },
          {
            latitude: '23.128120370479195',
            longitude: '113.34329713287731',
          },
          {
            latitude: '23.132711571746004',
            longitude: '113.34295676310369',
          },
        ],
        order_count: '6',
        points: [
          {
            latitude: '23.127796262773703',
            longitude: '113.34888578145582',
          },
          {
            latitude: '23.132504700898618',
            longitude: '113.34953791675879',
          },
          {
            latitude: '23.135660049237053',
            longitude: '113.34547700513748',
          },
          {
            latitude: '23.13410693592532',
            longitude: '113.34076376961205',
          },
          {
            latitude: '23.12939831971779',
            longitude: '113.34011171778654',
          },
          {
            latitude: '23.126242994898117',
            longitude: '113.3441728179963',
          },
        ],
        rank: '54',
      },
      {
        hex_id: '884118b20dfffff',
        his_order: [
          {
            latitude: '23.11970297212717',
            longitude: '113.35726819194801',
          },
          {
            latitude: '23.12393906233121',
            longitude: '113.35808893812134',
          },
          {
            latitude: '23.117040906993477',
            longitude: '113.35668596801486',
          },
        ],
        order_count: '6',
        points: [
          {
            latitude: '23.118329845582505',
            longitude: '113.36106688764738',
          },
          {
            latitude: '23.123038329791346',
            longitude: '113.36171912225785',
          },
          {
            latitude: '23.126193841105348',
            longitude: '113.35765897533577',
          },
          {
            latitude: '23.124640844634715',
            longitude: '113.35294640507968',
          },
          {
            latitude: '23.119932182192912',
            longitude: '113.35229425387254',
          },
          {
            latitude: '23.116776694448234',
            longitude: '113.35635458950544',
          },
        ],
        rank: '56',
      },
      {
        hex_id: '884118b29bfffff',
        his_order: [
          {
            latitude: '23.125246102851776',
            longitude: '113.25883354232784',
          },
          {
            latitude: '23.12427746861946',
            longitude: '113.26244760967795',
          },
          {
            latitude: '23.12519483092981',
            longitude: '113.255856996385',
          },
        ],
        order_count: '5',
        points: [
          {
            latitude: '23.12180288998825',
            longitude: '113.26256628082345',
          },
          {
            latitude: '23.126513957603777',
            longitude: '113.26321754357338',
          },
          {
            latitude: '23.129668483551946',
            longitude: '113.2591522594115',
          },
          {
            latitude: '23.12811191825088',
            longitude: '113.25443552486429',
          },
          {
            latitude: '23.123400673187884',
            longitude: '113.25378434607416',
          },
          {
            latitude: '23.120246170866896',
            longitude: '113.25784981785871',
          },
        ],
        rank: '65',
      },
      {
        hex_id: '884118b0d9fffff',
        his_order: [
          {
            latitude: '23.158113892474056',
            longitude: '113.25733042805274',
          },
          {
            latitude: '23.157235575058447',
            longitude: '113.25756941367902',
          },
          {
            latitude: '23.161142431588164',
            longitude: '113.26008828376973',
          },
        ],
        order_count: '5',
        points: [
          {
            latitude: '23.157930403435948',
            longitude: '113.26305999733324',
          },
          {
            latitude: '23.162639991058505',
            longitude: '113.26371134725986',
          },
          {
            latitude: '23.165794350161597',
            longitude: '113.259645575106',
          },
          {
            latitude: '23.164239098239307',
            longitude: '113.25492826533728',
          },
          {
            latitude: '23.15952933337827',
            longitude: '113.25427699938888',
          },
          {
            latitude: '23.156374997671453',
            longitude: '113.25834295921828',
          },
        ],
        rank: '71',
      },
      {
        hex_id: '88411d4dabfffff',
        his_order: [
          {
            latitude: '23.106943732181875',
            longitude: '113.25090965401488',
          },
          {
            latitude: '23.107068029965923',
            longitude: '113.24957679678825',
          },
          {
            latitude: '23.102497677806895',
            longitude: '113.25268528701909',
          },
        ],
        order_count: '4',
        points: [
          {
            latitude: '23.10139903888898',
            longitude: '113.25524514136016',
          },
          {
            latitude: '23.106111135080276',
            longitude: '113.25589628466021',
          },
          {
            latitude: '23.109265684472017',
            longitude: '113.25183091301147',
          },
          {
            latitude: '23.107708113902543',
            longitude: '113.24711421053551',
          },
          {
            latitude: '23.102995840200723',
            longitude: '113.24646315122445',
          },
          {
            latitude: '23.099841314572366',
            longitude: '113.25052871038767',
          },
        ],
        rank: '82',
      },
      {
        hex_id: '88411d49bbfffff',
        his_order: [
          {
            latitude: '23.124668215161247',
            longitude: '113.3926770417371',
          },
          {
            latitude: '23.12492825455084',
            longitude: '113.39106904832744',
          },
          {
            latitude: '23.1194108383608',
            longitude: '113.39080349232101',
          },
        ],
        order_count: '4',
        points: [
          {
            latitude: '23.11978051141283',
            longitude: '113.39274304732528',
          },
          {
            latitude: '23.124488057963557',
            longitude: '113.39339559926054',
          },
          {
            latitude: '23.127643871470585',
            longitude: '113.3893370722007',
          },
          {
            latitude: '23.126092114886703',
            longitude: '113.38462580413002',
          },
          {
            latitude: '23.121384389866424',
            longitude: '113.38397333542056',
          },
          {
            latitude: '23.118228599893126',
            longitude: '113.38803205154326',
          },
        ],
        rank: '102',
      },
      {
        hex_id: '884118b087fffff',
        his_order: [
          {
            latitude: '23.19511619620368',
            longitude: '113.26064673400684',
          },
          {
            latitude: '23.195429957874087',
            longitude: '113.2631706727524',
          },
          {
            latitude: '23.198633136095175',
            longitude: '113.25878045419125',
          },
        ],
        order_count: '3',
        points: [
          {
            latitude: '23.194047379912686',
            longitude: '113.26355383613604',
          },
          {
            latitude: '23.19875548445522',
            longitude: '113.26420527326246',
          },
          {
            latitude: '23.20190967421363',
            longitude: '113.26013901300018',
          },
          {
            latitude: '23.20035573625711',
            longitude: '113.25542112787035',
          },
          {
            latitude: '23.195647454685297',
            longitude: '113.2547697747406',
          },
          {
            latitude: '23.192493288092713',
            longitude: '113.25883622273129',
          },
        ],
        rank: '108',
      },
      {
        hex_id: '884118b2e7fffff',
        his_order: [
          {
            latitude: '23.146642958284126',
            longitude: '113.30692498729093',
          },
          {
            latitude: '23.146228600345086',
            longitude: '113.3074148436846',
          },
          {
            latitude: '23.143525771606825',
            longitude: '113.30255310500603',
          },
        ],
        order_count: '3',
        points: [
          {
            latitude: '23.142066423689307',
            longitude: '113.31037329477242',
          },
          {
            latitude: '23.146775348901805',
            longitude: '113.31102507985416',
          },
          {
            latitude: '23.1499302519228',
            longitude: '113.30696197474963',
          },
          {
            latitude: '23.148376206265663',
            longitude: '113.30224689637025',
          },
          {
            latitude: '23.143667103353522',
            longitude: '113.30159519499114',
          },
          {
            latitude: '23.140512223791653',
            longitude: '113.30565848827605',
          },
        ],
        rank: '117',
      },
      {
        hex_id: '884118b765fffff',
        his_order: [
          {
            latitude: '23.15366448586774',
            longitude: '113.25050281928617',
          },
          {
            latitude: '23.155990012862606',
            longitude: '113.2538208937462',
          },
          {
            latitude: '23.158141810771696',
            longitude: '113.25515912952143',
          },
        ],
        order_count: '3',
        points: [
          {
            latitude: '23.151665007425624',
            longitude: '113.25769167710753',
          },
          {
            latitude: '23.156374997671453',
            longitude: '113.25834295921828',
          },
          {
            latitude: '23.15952933337827',
            longitude: '113.25427699938888',
          },
          {
            latitude: '23.1579736553922',
            longitude: '113.24955956982843',
          },
          {
            latitude: '23.153263487912753',
            longitude: '113.24890837172242',
          },
          {
            latitude: '23.15010917564645',
            longitude: '113.2529745191594',
          },
        ],
        rank: '118',
      },
      {
        hex_id: '884118b239fffff',
        his_order: [
          {
            latitude: '23.13159297645212',
            longitude: '113.33337217518064',
          },
          {
            latitude: '23.129429835764725',
            longitude: '113.33795842462477',
          },
          {
            latitude: '23.134874705420955',
            longitude: '113.33201761381869',
          },
        ],
        order_count: '34',
        points: [
          {
            latitude: '23.12939831971779',
            longitude: '113.34011171778654',
          },
          {
            latitude: '23.13410693592532',
            longitude: '113.34076376961205',
          },
          {
            latitude: '23.13726219079712',
            longitude: '113.33670238142578',
          },
          {
            latitude: '23.135708805939142',
            longitude: '113.33198875290788',
          },
          {
            latitude: '23.13100001172646',
            longitude: '113.33133678461016',
          },
          {
            latitude: '23.127844780370403',
            longitude: '113.33539836128983',
          },
        ],
        rank: '4',
      },
      {
        hex_id: '884118b29dfffff',
        his_order: [
          {
            latitude: '23.129167077658607',
            longitude: '113.2690493305325',
          },
          {
            latitude: '23.13101801851725',
            longitude: '113.27277811224087',
          },
          {
            latitude: '23.128561455804327',
            longitude: '113.27482763029687',
          },
        ],
        order_count: '25',
        points: [
          {
            latitude: '23.126471651887396',
            longitude: '113.27671464682105',
          },
          {
            latitude: '23.131182139740783',
            longitude: '113.2773660612413',
          },
          {
            latitude: '23.13433678374263',
            longitude: '113.27330144032958',
          },
          {
            latitude: '23.13278091629856',
            longitude: '113.2685852171988',
          },
          {
            latitude: '23.128070250915094',
            longitude: '113.26793388666148',
          },
          {
            latitude: '23.12491563049925',
            longitude: '113.2719986953593',
          },
        ],
        rank: '8',
      },
      {
        hex_id: '884118b233fffff',
        his_order: [
          {
            latitude: '23.146236835142126',
            longitude: '113.3238937582827',
          },
          {
            latitude: '23.14618367950697',
            longitude: '113.32382160836642',
          },
          {
            latitude: '23.139001149624445',
            longitude: '113.3218321030854',
          },
        ],
        order_count: '20',
        points: [
          {
            latitude: '23.13886396719996',
            longitude: '113.32792688827263',
          },
          {
            latitude: '23.143572536780514',
            longitude: '113.32857884060856',
          },
          {
            latitude: '23.146727627751247',
            longitude: '113.32451668801131',
          },
          {
            latitude: '23.1451741256697',
            longitude: '113.3198023946946',
          },
          {
            latitude: '23.140465378234406',
            longitude: '113.31915052596058',
          },
          {
            latitude: '23.137310310728896',
            longitude: '113.32321286692866',
          },
        ],
        rank: '13',
      },
      {
        hex_id: '884118b23dfffff',
        his_order: [
          {
            latitude: '23.140373932327034',
            longitude: '113.34527690667522',
          },
          {
            latitude: '23.13734066151294',
            longitude: '113.34308934313582',
          },
          {
            latitude: '23.139128755687477',
            longitude: '113.34436901966231',
          },
        ],
        order_count: '19',
        points: [
          {
            latitude: '23.135660049237053',
            longitude: '113.34547700513748',
          },
          {
            latitude: '23.14036826287564',
            longitude: '113.34612912452626',
          },
          {
            latitude: '23.143523541218713',
            longitude: '113.34206792490104',
          },
          {
            latitude: '23.14197058244543',
            longitude: '113.3373544173133',
          },
          {
            latitude: '23.13726219079712',
            longitude: '113.33670238142578',
          },
          {
            latitude: '23.13410693592532',
            longitude: '113.34076376961205',
          },
        ],
        rank: '14',
      },
      {
        hex_id: '884118b2edfffff',
        his_order: [
          {
            latitude: '23.137130801957948',
            longitude: '113.32150431745913',
          },
          {
            latitude: '23.13363297962138',
            longitude: '113.32072852469231',
          },
          {
            latitude: '23.134288390257293',
            longitude: '113.32135181900962',
          },
        ],
        order_count: '19',
        points: [
          {
            latitude: '23.13260133858857',
            longitude: '113.32256098220908',
          },
          {
            latitude: '23.137310310728896',
            longitude: '113.32321286692866',
          },
          {
            latitude: '23.140465378234406',
            longitude: '113.31915052596058',
          },
          {
            latitude: '23.138911450083448',
            longitude: '113.3144361119571',
          },
          {
            latitude: '23.134202300093015',
            longitude: '113.31378431086598',
          },
          {
            latitude: '23.13104725609715',
            longitude: '113.31784684013716',
          },
        ],
        rank: '15',
      },
      {
        hex_id: '884118b2b3fffff',
        his_order: [
          {
            latitude: '23.150723944067977',
            longitude: '113.26240836764173',
          },
          {
            latitude: '23.149482453783275',
            longitude: '113.26238527552715',
          },
          {
            latitude: '23.15632650234147',
            longitude: '113.26369326853904',
          },
        ],
        order_count: '12',
        points: [
          {
            latitude: '23.150066159881327',
            longitude: '113.26647411560202',
          },
          {
            latitude: '23.154775972815788',
            longitude: '113.26712548166716',
          },
          {
            latitude: '23.157930403435948',
            longitude: '113.26305999733324',
          },
          {
            latitude: '23.156374997671453',
            longitude: '113.25834295921828',
          },
          {
            latitude: '23.151665007425624',
            longitude: '113.25769167710753',
          },
          {
            latitude: '23.148510600249114',
            longitude: '113.26175734914464',
          },
        ],
        rank: '27',
      },
      {
        hex_id: '884118b28bfffff',
        his_order: [
          {
            latitude: '23.13132481929815',
            longitude: '113.28315020327727',
          },
          {
            latitude: '23.131024470973394',
            longitude: '113.27863432831167',
          },
          {
            latitude: '23.127044619246032',
            longitude: '113.28058507190215',
          },
        ],
        order_count: '11',
        points: [
          {
            latitude: '23.12487268667978',
            longitude: '113.28549453960625',
          },
          {
            latitude: '23.129582996925375',
            longitude: '113.28614603785906',
          },
          {
            latitude: '23.13273773525371',
            longitude: '113.28208189262371',
          },
          {
            latitude: '23.131182139740783',
            longitude: '113.2773660612413',
          },
          {
            latitude: '23.126471651887396',
            longitude: '113.27671464682105',
          },
          {
            latitude: '23.123316937148203',
            longitude: '113.28077897993795',
          },
        ],
        rank: '30',
      },
      {
        hex_id: '884118b291fffff',
        his_order: [
          {
            latitude: '23.128128725304762',
            longitude: '113.26130445365477',
          },
          {
            latitude: '23.1292103649006',
            longitude: '113.26757542909722',
          },
          {
            latitude: '23.131498573646514',
            longitude: '113.26315737668477',
          },
        ],
        order_count: '10',
        points: [
          {
            latitude: '23.128070250915094',
            longitude: '113.26793388666148',
          },
          {
            latitude: '23.13278091629856',
            longitude: '113.2685852171988',
          },
          {
            latitude: '23.135935465829593',
            longitude: '113.2645201207275',
          },
          {
            latitude: '23.134379326387762',
            longitude: '113.25980350601557',
          },
          {
            latitude: '23.129668483551946',
            longitude: '113.2591522594115',
          },
          {
            latitude: '23.126513957603777',
            longitude: '113.26321754357338',
          },
        ],
        rank: '31',
      },
      {
        hex_id: '884118b74dfffff',
        his_order: [
          {
            latitude: '23.125403025237834',
            longitude: '113.2526018217323',
          },
          {
            latitude: '23.122233176504526',
            longitude: '113.24973679285168',
          },
          {
            latitude: '23.129775888339857',
            longitude: '113.25166013907807',
          },
        ],
        order_count: '8',
        points: [
          {
            latitude: '23.123400673187884',
            longitude: '113.25378434607416',
          },
          {
            latitude: '23.12811191825088',
            longitude: '113.25443552486429',
          },
          {
            latitude: '23.13126634958705',
            longitude: '113.2503697653553',
          },
          {
            latitude: '23.12970951222968',
            longitude: '113.24565263951638',
          },
          {
            latitude: '23.124998089797014',
            longitude: '113.24500154473635',
          },
          {
            latitude: '23.12184368208484',
            longitude: '113.24906749177242',
          },
        ],
        rank: '39',
      },
      {
        hex_id: '884118b249fffff',
        his_order: [
          {
            latitude: '23.100247699262216',
            longitude: '113.36322609506456',
          },
          {
            latitude: '23.098531376305257',
            longitude: '113.3628353336172',
          },
          {
            latitude: '23.1006414743946',
            longitude: '113.36361876557797',
          },
        ],
        order_count: '7',
        points: [
          {
            latitude: '23.09473609927425',
            longitude: '113.37128880135549',
          },
          {
            latitude: '23.09944525519794',
            longitude: '113.3719410835469',
          },
          {
            latitude: '23.10260097430255',
            longitude: '113.3678818006407',
          },
          {
            latitude: '23.10104751376497',
            longitude: '113.36317004673768',
          },
          {
            latitude: '23.096338179389637',
            longitude: '113.3625178478783',
          },
          {
            latitude: '23.093182483997076',
            longitude: '113.36657731957722',
          },
        ],
        rank: '41',
      },
      {
        hex_id: '884118b005fffff',
        his_order: [
          {
            latitude: '23.18570564361377',
            longitude: '113.32645264149285',
          },
          {
            latitude: '23.186245667506608',
            longitude: '113.32741965614602',
          },
          {
            latitude: '23.181490099399415',
            longitude: '113.33015494544264',
          },
        ],
        order_count: '6',
        points: [
          {
            latitude: '23.1812335602492',
            longitude: '113.33379507906595',
          },
          {
            latitude: '23.185940245764385',
            longitude: '113.33444718635205',
          },
          {
            latitude: '23.189095194398636',
            longitude: '113.33038473510233',
          },
          {
            latitude: '23.187543434321295',
            longitude: '113.32566998806206',
          },
          {
            latitude: '23.182836571156408',
            longitude: '113.32501796436961',
          },
          {
            latitude: '23.179681645712037',
            longitude: '113.32908060411107',
          },
        ],
        rank: '53',
      },
      {
        hex_id: '884118b2dbfffff',
        his_order: [
          {
            latitude: '23.106308299500732',
            longitude: '113.26998341506315',
          },
          {
            latitude: '23.105886179021354',
            longitude: '113.27007845134705',
          },
          {
            latitude: '23.107615605799264',
            longitude: '113.27698116044701',
          },
        ],
        order_count: '6',
        points: [
          {
            latitude: '23.10447283408029',
            longitude: '113.27817336115564',
          },
          {
            latitude: '23.109184173075302',
            longitude: '113.27882474002885',
          },
          {
            latitude: '23.11233893467581',
            longitude: '113.27476050685921',
          },
          {
            latitude: '23.11078233354934',
            longitude: '113.2700447070302',
          },
          {
            latitude: '23.10607081688329',
            longitude: '113.26939341201879',
          },
          {
            latitude: '23.102916079008214',
            longitude: '113.27345783296187',
          },
        ],
        rank: '60',
      },
      {
        hex_id: '88411d4dadfffff',
        his_order: [
          {
            latitude: '23.10644550129917',
            longitude: '113.26836137562339',
          },
          {
            latitude: '23.11089171165354',
            longitude: '113.26911915079472',
          },
          {
            latitude: '23.112168589374633',
            longitude: '113.2625758481574',
          },
        ],
        order_count: '6',
        points: [
          {
            latitude: '23.10607081688329',
            longitude: '113.26939341201879',
          },
          {
            latitude: '23.11078233354934',
            longitude: '113.2700447070302',
          },
          {
            latitude: '23.113937000977142',
            longitude: '113.26597999835379',
          },
          {
            latitude: '23.112380128010113',
            longitude: '113.26126380697531',
          },
          {
            latitude: '23.107668433750803',
            longitude: '113.26061259587604',
          },
          {
            latitude: '23.10451379004524',
            longitude: '113.26467749223039',
          },
        ],
        rank: '62',
      },
      {
        hex_id: '884118b295fffff',
        his_order: [
          {
            latitude: '23.13504851703411',
            longitude: '113.26922183613854',
          },
          {
            latitude: '23.134513722401287',
            longitude: '113.27169452018072',
          },
          {
            latitude: '23.13512201246878',
            longitude: '113.27007841056584',
          },
        ],
        order_count: '5',
        points: [
          {
            latitude: '23.13433678374263',
            longitude: '113.27330144032958',
          },
          {
            latitude: '23.139047046792538',
            longitude: '113.27395283864152',
          },
          {
            latitude: '23.142201619862096',
            longitude: '113.26988792992867',
          },
          {
            latitude: '23.14064590633668',
            longitude: '113.2651714351327',
          },
          {
            latitude: '23.135935465829593',
            longitude: '113.2645201207275',
          },
          {
            latitude: '23.13278091629856',
            longitude: '113.2685852171988',
          },
        ],
        rank: '63',
      },
      {
        hex_id: '88411d4d39fffff',
        his_order: [
          {
            latitude: '23.091030936033643',
            longitude: '113.29887645899399',
          },
          {
            latitude: '23.090900191148897',
            longitude: '113.29840168472845',
          },
          {
            latitude: '23.090975553953808',
            longitude: '113.29863005728484',
          },
        ],
        order_count: '5',
        points: [
          {
            latitude: '23.08554302383915',
            longitude: '113.30255321648895',
          },
          {
            latitude: '23.090254455193296',
            longitude: '113.30320479501316',
          },
          {
            latitude: '23.093409544521194',
            longitude: '113.29914208879508',
          },
          {
            latitude: '23.091853178661477',
            longitude: '113.29442761602081',
          },
          {
            latitude: '23.087141569335078',
            longitude: '113.29377612121017',
          },
          {
            latitude: '23.083986503834154',
            longitude: '113.29783901544752',
          },
        ],
        rank: '75',
      },
      {
        hex_id: '884118b023fffff',
        his_order: [
          {
            latitude: '23.197726523090967',
            longitude: '113.32619392800785',
          },
          {
            latitude: '23.197425511235803',
            longitude: '113.32624501193285',
          },
          {
            latitude: '23.197823620254535',
            longitude: '113.32622700214493',
          },
        ],
        order_count: '4',
        points: [
          {
            latitude: '23.19695653173854',
            longitude: '113.32697408710797',
          },
          {
            latitude: '23.201662765888216',
            longitude: '113.32762616246245',
          },
          {
            latitude: '23.204817571905167',
            longitude: '113.32356313506635',
          },
          {
            latitude: '23.203266120670623',
            longitude: '113.31884784386618',
          },
          {
            latitude: '23.198559709017093',
            longitude: '113.31819585215297',
          },
          {
            latitude: '23.19540492609543',
            longitude: '113.32225906798591',
          },
        ],
        rank: '81',
      },
      {
        hex_id: '88411d4d3bfffff',
        his_order: [
          {
            latitude: '23.092914290324803',
            longitude: '113.28875359724304',
          },
          {
            latitude: '23.09281045339513',
            longitude: '113.29057506945327',
          },
          {
            latitude: '23.087661814360732',
            longitude: '113.2867736668876',
          },
        ],
        order_count: '4',
        points: [
          {
            latitude: '23.087141569335078',
            longitude: '113.29377612121017',
          },
          {
            latitude: '23.091853178661477',
            longitude: '113.29442761602081',
          },
          {
            latitude: '23.095008174400107',
            longitude: '113.29036443402019',
          },
          {
            latitude: '23.093451536982013',
            longitude: '113.28564956927224',
          },
          {
            latitude: '23.08873974976106',
            longitude: '113.28499815822546',
          },
          {
            latitude: '23.085584777846243',
            longitude: '113.28906152815004',
          },
        ],
        rank: '86',
      },
      {
        hex_id: '884118b769fffff',
        his_order: [
          {
            latitude: '23.138126351428518',
            longitude: '113.25074675618991',
          },
          {
            latitude: '23.140107777425523',
            longitude: '113.2556609726519',
          },
          {
            latitude: '23.143259248873754',
            longitude: '113.25161404515957',
          },
        ],
        order_count: '4',
        points: [
          {
            latitude: '23.13753378130362',
            longitude: '113.25573793410156',
          },
          {
            latitude: '23.14224439919015',
            longitude: '113.25638916454969',
          },
          {
            latitude: '23.14539878287871',
            longitude: '113.2523233048773',
          },
          {
            latitude: '23.143842525141977',
            longitude: '113.24760602717674',
          },
          {
            latitude: '23.13913172995377',
            longitude: '113.24695488073607',
          },
          {
            latitude: '23.13597736979744',
            longitude: '113.25102092797576',
          },
        ],
        rank: '87',
      },
      {
        hex_id: '884118b743fffff',
        his_order: [
          {
            latitude: '23.133103428853428',
            longitude: '113.23034114286551',
          },
          {
            latitude: '23.13228944834616',
            longitude: '113.22889336437372',
          },
          {
            latitude: '23.12836698001329',
            longitude: '113.22985224763792',
          },
        ],
        order_count: '4',
        points: [
          {
            latitude: '23.126595139604795',
            longitude: '113.23621787709457',
          },
          {
            latitude: '23.131306739329304',
            longitude: '113.23686888781411',
          },
          {
            latitude: '23.134460981008424',
            longitude: '113.23280217796217',
          },
          {
            latitude: '23.13290359933889',
            longitude: '113.22808427004227',
          },
          {
            latitude: '23.12819182240039',
            longitude: '113.22743334343355',
          },
          {
            latitude: '23.12503760433886',
            longitude: '113.23150024062117',
          },
        ],
        rank: '92',
      },
      {
        hex_id: '884118b209fffff',
        his_order: [
          {
            latitude: '23.112571900980768',
            longitude: '113.35540634786749',
          },
          {
            latitude: '23.11694678328272',
            longitude: '113.34923405253902',
          },
          {
            latitude: '23.117428222285486',
            longitude: '113.34881627827761',
          },
        ],
        order_count: '4',
        points: [
          {
            latitude: '23.112067807859034',
            longitude: '113.35570242240418',
          },
          {
            latitude: '23.116776694448234',
            longitude: '113.35635458950544',
          },
          {
            latitude: '23.119932182192912',
            longitude: '113.35229425387254',
          },
          {
            latitude: '23.118378759728095',
            longitude: '113.34758156248252',
          },
          {
            latitude: '23.11366969491049',
            longitude: '113.34692947881116',
          },
          {
            latitude: '23.110514230779643',
            longitude: '113.35099000308723',
          },
        ],
        rank: '96',
      },
      {
        hex_id: '884118b08bfffff',
        his_order: [
          {
            latitude: '23.181897190559763',
            longitude: '113.25974457922135',
          },
          {
            latitude: '23.182731119037943',
            longitude: '113.25397269558594',
          },
          {
            latitude: '23.181426329216826',
            longitude: '113.26127701992966',
          },
        ],
        order_count: '3',
        points: [
          {
            latitude: '23.179921808120515',
            longitude: '113.26159962811086',
          },
          {
            latitude: '23.184630541693917',
            longitude: '113.26225101356076',
          },
          {
            latitude: '23.187784780435507',
            longitude: '113.25818485343642',
          },
          {
            latitude: '23.186230262339826',
            longitude: '113.25346712016132',
          },
          {
            latitude: '23.181521351668994',
            longitude: '113.25281581871077',
          },
          {
            latitude: '23.17836713618472',
            longitude: '113.25688216652327',
          },
        ],
        rank: '103',
      },
      {
        hex_id: '884118b0d7fffff',
        his_order: [
          {
            latitude: '23.175412877278525',
            longitude: '113.24996333379525',
          },
          {
            latitude: '23.181131689228245',
            longitude: '113.25198457238811',
          },
          {
            latitude: '23.173597040316565',
            longitude: '113.25083312934203',
          },
        ],
        order_count: '3',
        points: [
          {
            latitude: '23.173657999694015',
            longitude: '113.25623084890397',
          },
          {
            latitude: '23.17836713618472',
            longitude: '113.25688216652327',
          },
          {
            latitude: '23.181521351668994',
            longitude: '113.25281581871077',
          },
          {
            latitude: '23.179966407354453',
            longitude: '113.24809796564607',
          },
          {
            latitude: '23.175257093771112',
            longitude: '113.24744673205262',
          },
          {
            latitude: '23.172102901588385',
            longitude: '113.25151326748532',
          },
        ],
        rank: '109',
      },
      {
        hex_id: '884118b76bfffff',
        his_order: [
          {
            latitude: '23.142544001873603',
            longitude: '113.24197128314785',
          },
          {
            latitude: '23.13921596819804',
            longitude: '113.24608263802719',
          },
          {
            latitude: '23.14475630967043',
            longitude: '113.24563413268008',
          },
        ],
        order_count: '3',
        points: [
          {
            latitude: '23.13913172995377',
            longitude: '113.24695488073607',
          },
          {
            latitude: '23.143842525141977',
            longitude: '113.24760602717674',
          },
          {
            latitude: '23.146996813923487',
            longitude: '113.24353969220013',
          },
          {
            latitude: '23.14544028398118',
            longitude: '113.23882202329844',
          },
          {
            latitude: '23.140729311569117',
            longitude: '113.23817096091554',
          },
          {
            latitude: '23.137575046316652',
            longitude: '113.24223748336381',
          },
        ],
        rank: '119',
      },
      {
        hex_id: '88411d4d35fffff',
        his_order: [
          {
            latitude: '23.102567888850217',
            longitude: '113.30424126243146',
          },
          {
            latitude: '23.102703327438253',
            longitude: '113.30448269328156',
          },
          {
            latitude: '23.10278179806818',
            longitude: '113.30412807953756',
          },
        ],
        order_count: '2',
        points: [
          {
            latitude: '23.09967669216641',
            longitude: '113.30450800369299',
          },
          {
            latitude: '23.104387497682023',
            longitude: '113.30515963384966',
          },
          {
            latitude: '23.10754254093492',
            longitude: '113.30109682790034',
          },
          {
            latitude: '23.105986754930786',
            longitude: '113.29638220372212',
          },
          {
            latitude: '23.101275771511013',
            longitude: '113.2957306572763',
          },
          {
            latitude: '23.098120751993026',
            longitude: '113.29979365128514',
          },
        ],
        rank: '122',
      },
      {
        hex_id: '88411d4d0dfffff',
        his_order: [
          {
            latitude: '23.07809709597937',
            longitude: '113.31904942929204',
          },
          {
            latitude: '23.077807686969887',
            longitude: '113.32107344834925',
          },
          {
            latitude: '23.078079943557636',
            longitude: '113.32006344639262',
          },
        ],
        order_count: '2',
        points: [
          {
            latitude: '23.07447819434327',
            longitude: '113.32351450749638',
          },
          {
            latitude: '23.079189493086673',
            longitude: '113.32416626927326',
          },
          {
            latitude: '23.08234483848055',
            longitude: '113.32010480279607',
          },
          {
            latitude: '23.080788861243597',
            longitude: '113.31539138629213',
          },
          {
            latitude: '23.076077384299733',
            longitude: '113.3147397081044',
          },
          {
            latitude: '23.072922062786823',
            longitude: '113.31880136281876',
          },
        ],
        rank: '123',
      },
      {
        hex_id: '884118b22dfffff',
        his_order: [
          {
            latitude: '23.140714616628145',
            longitude: '113.35981610078775',
          },
          {
            latitude: '23.14132073719728',
            longitude: '113.36159618153955',
          },
          {
            latitude: '23.141505002091193',
            longitude: '113.36171639661737',
          },
        ],
        order_count: '2',
        points: [
          {
            latitude: '23.138714673189426',
            longitude: '113.36838825709461',
          },
          {
            latitude: '23.143422127897285',
            longitude: '113.36904061083216',
          },
          {
            latitude: '23.146577616468125',
            longitude: '113.36498055346154',
          },
          {
            latitude: '23.145025626891847',
            longitude: '113.36026795352198',
          },
          {
            latitude: '23.140317994014925',
            longitude: '113.35961568315844',
          },
          {
            latitude: '23.13716252887687',
            longitude: '113.36367592934775',
          },
        ],
        rank: '126',
      },
      {
        hex_id: '884118b365fffff',
        his_order: [
          {
            latitude: '23.172089605526395',
            longitude: '113.41438420703237',
          },
          {
            latitude: '23.175179398952288',
            longitude: '113.41552988248405',
          },
          {
            latitude: '23.17528905247185',
            longitude: '113.41657634182428',
          },
        ],
        order_count: '0',
        points: [
          {
            latitude: '23.173044141456458',
            longitude: '113.41811361173767',
          },
          {
            latitude: '23.177748821352345',
            longitude: '113.41876653646769',
          },
          {
            latitude: '23.180904635843763',
            longitude: '113.41470856865425',
          },
          {
            latitude: '23.17935574726134',
            longitude: '113.40999748668456',
          },
          {
            latitude: '23.174650889015794',
            longitude: '113.40934464506842',
          },
          {
            latitude: '23.17149509769587',
            longitude: '113.41340280229535',
          },
        ],
        rank: '133',
      },
      {
        hex_id: '884118b203fffff',
        his_order: [
          {
            latitude: '23.126794897402068',
            longitude: '113.33749429857252',
          },
          {
            latitude: '23.12653021696585',
            longitude: '113.34248740176426',
          },
          {
            latitude: '23.125737976117527',
            longitude: '113.3382868439442',
          },
        ],
        order_count: '75',
        points: [
          {
            latitude: '23.1215341543008',
            longitude: '113.34352075024285',
          },
          {
            latitude: '23.126242994898117',
            longitude: '113.3441728179963',
          },
          {
            latitude: '23.12939831971779',
            longitude: '113.34011171778654',
          },
          {
            latitude: '23.127844780370403',
            longitude: '113.33539836128983',
          },
          {
            latitude: '23.123135761695043',
            longitude: '113.33474637704037',
          },
          {
            latitude: '23.119980460438622',
            longitude: '113.33880766577091',
          },
        ],
        rank: '1',
      },
      {
        hex_id: '884118b23bfffff',
        his_order: [
          {
            latitude: '23.133284342485144',
            longitude: '113.32529673393299',
          },
          {
            latitude: '23.13316982816727',
            longitude: '113.33138820471262',
          },
          {
            latitude: '23.133260602304137',
            longitude: '113.33019876690912',
          },
        ],
        order_count: '57',
        points: [
          {
            latitude: '23.13100001172646',
            longitude: '113.33133678461016',
          },
          {
            latitude: '23.135708805939142',
            longitude: '113.33198875290788',
          },
          {
            latitude: '23.13886396719996',
            longitude: '113.32792688827263',
          },
          {
            latitude: '23.137310310728896',
            longitude: '113.32321286692866',
          },
          {
            latitude: '23.13260133858857',
            longitude: '113.32256098220908',
          },
          {
            latitude: '23.129446200840455',
            longitude: '113.32662303524259',
          },
        ],
        rank: '2',
      },
      {
        hex_id: '884118b213fffff',
        his_order: [
          {
            latitude: '23.118916599120144',
            longitude: '113.31494412904408',
          },
          {
            latitude: '23.117681901687703',
            longitude: '113.31707319646438',
          },
          {
            latitude: '23.120133293421738',
            longitude: '113.31729379521236',
          },
        ],
        order_count: '42',
        points: [
          {
            latitude: '23.11847316826936',
            longitude: '113.3206054313311',
          },
          {
            latitude: '23.12318276730725',
            longitude: '113.3212572644108',
          },
          {
            latitude: '23.126337881498237',
            longitude: '113.31719502304674',
          },
          {
            latitude: '23.124783373043236',
            longitude: '113.3124807603274',
          },
          {
            latitude: '23.120073596087',
            longitude: '113.31182901087891',
          },
          {
            latitude: '23.116918505497612',
            longitude: '113.31589144050584',
          },
        ],
        rank: '3',
      },
      {
        hex_id: '884118b217fffff',
        his_order: [
          {
            latitude: '23.130443212180126',
            longitude: '113.321544947225',
          },
          {
            latitude: '23.127458737561074',
            longitude: '113.32139444319517',
          },
          {
            latitude: '23.127162604814163',
            longitude: '113.32620717638038',
          },
        ],
        order_count: '33',
        points: [
          {
            latitude: '23.124737004164547',
            longitude: '113.32597113454749',
          },
          {
            latitude: '23.129446200840455',
            longitude: '113.32662303524259',
          },
          {
            latitude: '23.13260133858857',
            longitude: '113.32256098220908',
          },
          {
            latitude: '23.13104725609715',
            longitude: '113.31784684013716',
          },
          {
            latitude: '23.126337881498237',
            longitude: '113.31719502304674',
          },
          {
            latitude: '23.12318276730725',
            longitude: '113.3212572644108',
          },
        ],
        rank: '5',
      },
      {
        hex_id: '884118b211fffff',
        his_order: [
          {
            latitude: '23.118081003899764',
            longitude: '113.32571155128079',
          },
          {
            latitude: '23.11965625239816',
            longitude: '113.32815365008437',
          },
          {
            latitude: '23.11872181795947',
            longitude: '113.32333777175286',
          },
        ],
        order_count: '32',
        points: [
          {
            latitude: '23.116872375326707',
            longitude: '113.32938098299229',
          },
          {
            latitude: '23.12158179636869',
            longitude: '113.33003289965288',
          },
          {
            latitude: '23.124737004164547',
            longitude: '113.32597113454749',
          },
          {
            latitude: '23.12318276730725',
            longitude: '113.3212572644108',
          },
          {
            latitude: '23.11847316826936',
            longitude: '113.3206054313311',
          },
          {
            latitude: '23.115317984078168',
            longitude: '113.32466738479448',
          },
        ],
        rank: '6',
      },
      {
        hex_id: '884118b281fffff',
        his_order: [
          {
            latitude: '23.135525962309952',
            longitude: '113.28901680914802',
          },
          {
            latitude: '23.136941970519505',
            longitude: '113.28499075787695',
          },
          {
            latitude: '23.133902411174862',
            longitude: '113.28466115561147',
          },
        ],
        order_count: '29',
        points: [
          {
            latitude: '23.131138320573793',
            longitude: '113.29086147732603',
          },
          {
            latitude: '23.13584822847623',
            longitude: '113.29151304330041',
          },
          {
            latitude: '23.13900299034935',
            longitude: '113.28744908601448',
          },
          {
            latitude: '23.137447820768717',
            longitude: '113.28273337479204',
          },
          {
            latitude: '23.13273773525371',
            longitude: '113.28208189262371',
          },
          {
            latitude: '23.129582996925375',
            longitude: '113.28614603785906',
          },
        ],
        rank: '7',
      },
      {
        hex_id: '884118b237fffff',
        his_order: [
          {
            latitude: '23.149118033302965',
            longitude: '113.32553228503744',
          },
          {
            latitude: '23.149285179224517',
            longitude: '113.33295952632098',
          },
          {
            latitude: '23.147588959307114',
            longitude: '113.3284581646603',
          },
        ],
        order_count: '25',
        points: [
          {
            latitude: '23.145125767174502',
            longitude: '113.33329274114405',
          },
          {
            latitude: '23.149833934094183',
            longitude: '113.33394476108352',
          },
          {
            latitude: '23.152989048485715',
            longitude: '113.32988279692485',
          },
          {
            latitude: '23.15143597253027',
            longitude: '113.32516862437541',
          },
          {
            latitude: '23.146727627751247',
            longitude: '113.32451668801131',
          },
          {
            latitude: '23.143572536780514',
            longitude: '113.32857884060856',
          },
        ],
        rank: '9',
      },
      {
        hex_id: '884118b289fffff',
        his_order: [
          {
            latitude: '23.123820894576706',
            longitude: '113.29348832232935',
          },
          {
            latitude: '23.124933326334574',
            longitude: '113.29114502193364',
          },
          {
            latitude: '23.124973351252933',
            longitude: '113.2911520344824',
          },
        ],
        order_count: '23',
        points: [
          {
            latitude: '23.1232733555032',
            longitude: '113.29427356473327',
          },
          {
            latitude: '23.12798348806331',
            longitude: '113.2949251467683',
          },
          {
            latitude: '23.131138320573793',
            longitude: '113.29086147732603',
          },
          {
            latitude: '23.129582996925375',
            longitude: '113.28614603785906',
          },
          {
            latitude: '23.12487268667978',
            longitude: '113.28549453960625',
          },
          {
            latitude: '23.12171787776158',
            longitude: '113.28955839702546',
          },
        ],
        rank: '10',
      },
      {
        hex_id: '884118b283fffff',
        his_order: [
          {
            latitude: '23.13991606071874',
            longitude: '113.2775108278714',
          },
          {
            latitude: '23.136254909665297',
            longitude: '113.28123639074698',
          },
          {
            latitude: '23.137991320777452',
            longitude: '113.28198833458765',
          },
        ],
        order_count: '23',
        points: [
          {
            latitude: '23.13273773525371',
            longitude: '113.28208189262371',
          },
          {
            latitude: '23.137447820768717',
            longitude: '113.28273337479204',
          },
          {
            latitude: '23.14060248831223',
            longitude: '113.2786689417343',
          },
          {
            latitude: '23.139047046792538',
            longitude: '113.27395283864152',
          },
          {
            latitude: '23.13433678374263',
            longitude: '113.27330144032958',
          },
          {
            latitude: '23.131182139740783',
            longitude: '113.2773660612413',
          },
        ],
        rank: '11',
      },
      {
        hex_id: '884118b299fffff',
        his_order: [
          {
            latitude: '23.125475455171276',
            longitude: '113.2666686640508',
          },
          {
            latitude: '23.12557584990693',
            longitude: '113.26745711652848',
          },
          {
            latitude: '23.120277189393097',
            longitude: '113.26845035713579',
          },
        ],
        order_count: '22',
        points: [
          {
            latitude: '23.12020474040897',
            longitude: '113.27134734869995',
          },
          {
            latitude: '23.12491563049925',
            longitude: '113.2719986953593',
          },
          {
            latitude: '23.128070250915094',
            longitude: '113.26793388666148',
          },
          {
            latitude: '23.126513957603777',
            longitude: '113.26321754357338',
          },
          {
            latitude: '23.12180288998825',
            longitude: '113.26256628082345',
          },
          {
            latitude: '23.118648293202764',
            longitude: '113.2666312772395',
          },
        ],
        rank: '12',
      },
      {
        hex_id: '884118b2ebfffff',
        his_order: [
          {
            latitude: '23.12995538300231',
            longitude: '113.3044664986637',
          },
          {
            latitude: '23.127841979385536',
            longitude: '113.30782334572942',
          },
          {
            latitude: '23.127421086971125',
            longitude: '113.3067754232265',
          },
        ],
        order_count: '18',
        points: [
          {
            latitude: '23.127938393485035',
            longitude: '113.30841804282085',
          },
          {
            latitude: '23.13264794592939',
            longitude: '113.30906977625628',
          },
          {
            latitude: '23.135802896028675',
            longitude: '113.30500677086374',
          },
          {
            latitude: '23.134248270126108',
            longitude: '113.30029184388296',
          },
          {
            latitude: '23.129538539913895',
            longitude: '113.2996401941529',
          },
          {
            latitude: '23.126383613365597',
            longitude: '113.30370338768553',
          },
        ],
        rank: '16',
      },
      {
        hex_id: '884118b293fffff',
        his_order: [
          {
            latitude: '23.131273444855246',
            longitude: '113.25824381072114',
          },
          {
            latitude: '23.131150400792077',
            longitude: '113.25828681188884',
          },
          {
            latitude: '23.13312616106372',
            longitude: '113.25220834521265',
          },
        ],
        order_count: '18',
        points: [
          {
            latitude: '23.129668483551946',
            longitude: '113.2591522594115',
          },
          {
            latitude: '23.134379326387762',
            longitude: '113.25980350601557',
          },
          {
            latitude: '23.13753378130362',
            longitude: '113.25573793410156',
          },
          {
            latitude: '23.13597736979744',
            longitude: '113.25102092797576',
          },
          {
            latitude: '23.13126634958705',
            longitude: '113.2503697653553',
          },
          {
            latitude: '23.12811191825088',
            longitude: '113.25443552486429',
          },
        ],
        rank: '17',
      },
      {
        hex_id: '884118b76dfffff',
        his_order: [
          {
            latitude: '23.14668639200775',
            longitude: '113.25383827038823',
          },
          {
            latitude: '23.146069569098955',
            longitude: '113.25999324511648',
          },
          {
            latitude: '23.14695050473968',
            longitude: '113.25366028120621',
          },
        ],
        order_count: '18',
        points: [
          {
            latitude: '23.14380038478793',
            longitude: '113.26110605088162',
          },
          {
            latitude: '23.148510600249114',
            longitude: '113.26175734914464',
          },
          {
            latitude: '23.151665007425624',
            longitude: '113.25769167710753',
          },
          {
            latitude: '23.15010917564645',
            longitude: '113.2529745191594',
          },
          {
            latitude: '23.14539878287871',
            longitude: '113.2523233048773',
          },
          {
            latitude: '23.14224439919015',
            longitude: '113.25638916454969',
          },
        ],
        rank: '18',
      },
      {
        hex_id: '884118b28dfffff',
        his_order: [
          {
            latitude: '23.136979215533273',
            longitude: '113.29502149993746',
          },
          {
            latitude: '23.131049247338904',
            longitude: '113.29229907508883',
          },
          {
            latitude: '23.13532231410345',
            longitude: '113.29410000226873',
          },
        ],
        order_count: '15',
        points: [
          {
            latitude: '23.129538539913895',
            longitude: '113.2996401941529',
          },
          {
            latitude: '23.134248270126108',
            longitude: '113.30029184388296',
          },
          {
            latitude: '23.137403126184477',
            longitude: '113.29622836248546',
          },
          {
            latitude: '23.13584822847623',
            longitude: '113.29151304330041',
          },
          {
            latitude: '23.131138320573793',
            longitude: '113.29086147732603',
          },
          {
            latitude: '23.12798348806331',
            longitude: '113.2949251467683',
          },
        ],
        rank: '19',
      },
      {
        hex_id: '884118b05bfffff',
        his_order: [
          {
            latitude: '23.15065055407736',
            longitude: '113.31342835243935',
          },
          {
            latitude: '23.151445632317706',
            longitude: '113.31329615321539',
          },
          {
            latitude: '23.15060403285426',
            longitude: '113.30964722665556',
          },
        ],
        order_count: '14',
        points: [
          {
            latitude: '23.148329122737746',
            longitude: '113.31573976578555',
          },
          {
            latitude: '23.153037645298593',
            longitude: '113.31639161852394',
          },
          {
            latitude: '23.156192571734323',
            longitude: '113.31232870166754',
          },
          {
            latitude: '23.154638952187945',
            longitude: '113.30761374381191',
          },
          {
            latitude: '23.1499302519228',
            longitude: '113.30696197474963',
          },
          {
            latitude: '23.146775348901805',
            longitude: '113.31102507985416',
          },
        ],
        rank: '20',
      },
      {
        hex_id: '884118b231fffff',
        his_order: [
          {
            latitude: '23.140373271858486',
            longitude: '113.3327454823665',
          },
          {
            latitude: '23.140506123548192',
            longitude: '113.33579074293456',
          },
          {
            latitude: '23.14351665090984',
            longitude: '113.33281884617531',
          },
        ],
        order_count: '14',
        points: [
          {
            latitude: '23.13726219079712',
            longitude: '113.33670238142578',
          },
          {
            latitude: '23.14197058244543',
            longitude: '113.3373544173133',
          },
          {
            latitude: '23.145125767174502',
            longitude: '113.33329274114405',
          },
          {
            latitude: '23.143572536780514',
            longitude: '113.32857884060856',
          },
          {
            latitude: '23.13886396719996',
            longitude: '113.32792688827263',
          },
          {
            latitude: '23.135708805939142',
            longitude: '113.33198875290788',
          },
        ],
        rank: '22',
      },
      {
        hex_id: '884118b2d5fffff',
        his_order: [
          {
            latitude: '23.118415559449527',
            longitude: '113.28771393870358',
          },
          {
            latitude: '23.117167164665567',
            longitude: '113.28603972140505',
          },
          {
            latitude: '23.12257535337526',
            longitude: '113.28319967321202',
          },
        ],
        order_count: '13',
        points: [
          {
            latitude: '23.117007342954963',
            longitude: '113.28890688269824',
          },
          {
            latitude: '23.12171787776158',
            longitude: '113.28955839702546',
          },
          {
            latitude: '23.12487268667978',
            longitude: '113.28549453960625',
          },
          {
            latitude: '23.123316937148203',
            longitude: '113.28077897993795',
          },
          {
            latitude: '23.1186062246609',
            longitude: '113.28012754941949',
          },
          {
            latitude: '23.11545143937936',
            longitude: '113.28419159474785',
          },
        ],
        rank: '23',
      },
      {
        hex_id: '884118b21dfffff',
        his_order: [
          {
            latitude: '23.120632339119076',
            longitude: '113.33377726478788',
          },
          {
            latitude: '23.116774087970136',
            longitude: '113.33289218531235',
          },
          {
            latitude: '23.116708805679373',
            longitude: '113.33275790497896',
          },
        ],
        order_count: '13',
        points: [
          {
            latitude: '23.11527121747007',
            longitude: '113.33815566557978',
          },
          {
            latitude: '23.119980460438622',
            longitude: '113.33880766577091',
          },
          {
            latitude: '23.123135761695043',
            longitude: '113.33474637704037',
          },
          {
            latitude: '23.12158179636869',
            longitude: '113.33003289965288',
          },
          {
            latitude: '23.116872375326707',
            longitude: '113.32938098299229',
          },
          {
            latitude: '23.11371709767802',
            longitude: '113.33344246017593',
          },
        ],
        rank: '26',
      },
      {
        hex_id: '884118b761fffff',
        his_order: [
          {
            latitude: '23.148199610986165',
            longitude: '113.24923459960482',
          },
          {
            latitude: '23.14790251146064',
            longitude: '113.2491605902215',
          },
          {
            latitude: '23.146585909581297',
            longitude: '113.24955644802449',
          },
        ],
        order_count: '11',
        points: [
          {
            latitude: '23.14539878287871',
            longitude: '113.2523233048773',
          },
          {
            latitude: '23.15010917564645',
            longitude: '113.2529745191594',
          },
          {
            latitude: '23.153263487912753',
            longitude: '113.24890837172242',
          },
          {
            latitude: '23.15170738391998',
            longitude: '113.24419082245097',
          },
          {
            latitude: '23.146996813923487',
            longitude: '113.24353969220013',
          },
          {
            latitude: '23.143842525141977',
            longitude: '113.24760602717674',
          },
        ],
        rank: '28',
      },
      {
        hex_id: '884118b215fffff',
        his_order: [
          {
            latitude: '23.128459514867505',
            longitude: '113.32800193476827',
          },
          {
            latitude: '23.128215870515714',
            longitude: '113.32824140897662',
          },
          {
            latitude: '23.125479225812345',
            longitude: '113.32795363419281',
          },
        ],
        order_count: '11',
        points: [
          {
            latitude: '23.123135761695043',
            longitude: '113.33474637704037',
          },
          {
            latitude: '23.127844780370403',
            longitude: '113.33539836128983',
          },
          {
            latitude: '23.13100001172646',
            longitude: '113.33133678461016',
          },
          {
            latitude: '23.129446200840455',
            longitude: '113.32662303524259',
          },
          {
            latitude: '23.124737004164547',
            longitude: '113.32597113454749',
          },
          {
            latitude: '23.12158179636869',
            longitude: '113.33003289965288',
          },
        ],
        rank: '29',
      },
      {
        hex_id: '884118b287fffff',
        his_order: [
          {
            latitude: '23.141207940658678',
            longitude: '113.28525336415099',
          },
          {
            latitude: '23.143502914490565',
            longitude: '113.28437846154267',
          },
          {
            latitude: '23.14004768265549',
            longitude: '113.28045580708404',
          },
        ],
        order_count: '10',
        points: [
          {
            latitude: '23.13900299034935',
            longitude: '113.28744908601448',
          },
          {
            latitude: '23.143712673424602',
            longitude: '113.28810063591811',
          },
          {
            latitude: '23.146867364465425',
            longitude: '113.28403639078219',
          },
          {
            latitude: '23.14531234892716',
            longitude: '113.27932040780809',
          },
          {
            latitude: '23.14060248831223',
            longitude: '113.2786689417343',
          },
          {
            latitude: '23.137447820768717',
            longitude: '113.28273337479204',
          },
        ],
        rank: '32',
      },
      {
        hex_id: '88411d4da5fffff',
        his_order: [
          {
            latitude: '23.116912176699074',
            longitude: '113.2646170436603',
          },
          {
            latitude: '23.11654112110122',
            longitude: '113.26487914335623',
          },
          {
            latitude: '23.11362892336742',
            longitude: '113.26158057749596',
          },
        ],
        order_count: '10',
        points: [
          {
            latitude: '23.113937000977142',
            longitude: '113.26597999835379',
          },
          {
            latitude: '23.118648293202764',
            longitude: '113.2666312772395',
          },
          {
            latitude: '23.12180288998825',
            longitude: '113.26256628082345',
          },
          {
            latitude: '23.120246170866896',
            longitude: '113.25784981785871',
          },
          {
            latitude: '23.115534701120904',
            longitude: '113.25719862290897',
          },
          {
            latitude: '23.112380128010113',
            longitude: '113.26126380697531',
          },
        ],
        rank: '33',
      },
      {
        hex_id: '884118b2d3fffff',
        his_order: [
          {
            latitude: '23.118783388418173',
            longitude: '113.26997324392906',
          },
          {
            latitude: '23.11865318893545',
            longitude: '113.27300746388936',
          },
          {
            latitude: '23.11551064706657',
            longitude: '113.27099773827928',
          },
        ],
        order_count: '9',
        points: [
          {
            latitude: '23.11233893467581',
            longitude: '113.27476050685921',
          },
          {
            latitude: '23.11705004930329',
            longitude: '113.27541186963052',
          },
          {
            latitude: '23.12020474040897',
            longitude: '113.27134734869995',
          },
          {
            latitude: '23.118648293202764',
            longitude: '113.2666312772395',
          },
          {
            latitude: '23.113937000977142',
            longitude: '113.26597999835379',
          },
          {
            latitude: '23.11078233354934',
            longitude: '113.2700447070302',
          },
        ],
        rank: '34',
      },
      {
        hex_id: '884118b2b9fffff',
        his_order: [
          {
            latitude: '23.145428732386343',
            longitude: '113.27561244717779',
          },
          {
            latitude: '23.143511053347954',
            longitude: '113.27819973646876',
          },
          {
            latitude: '23.141133115504147',
            longitude: '113.27131668631033',
          },
        ],
        order_count: '8',
        points: [
          {
            latitude: '23.14060248831223',
            longitude: '113.2786689417343',
          },
          {
            latitude: '23.14531234892716',
            longitude: '113.27932040780809',
          },
          {
            latitude: '23.148466945490913',
            longitude: '113.2752556869216',
          },
          {
            latitude: '23.14691165793901',
            longitude: '113.27053931212227',
          },
          {
            latitude: '23.142201619862096',
            longitude: '113.26988792992867',
          },
          {
            latitude: '23.139047046792538',
            longitude: '113.27395283864152',
          },
        ],
        rank: '35',
      },
      {
        hex_id: '884118b21bfffff',
        his_order: [
          {
            latitude: '23.115973824080744',
            longitude: '113.32232854731976',
          },
          {
            latitude: '23.11384813406588',
            longitude: '113.32134342154525',
          },
          {
            latitude: '23.11517747470168',
            longitude: '113.31905494077374',
          },
        ],
        order_count: '8',
        points: [
          {
            latitude: '23.110608160770845',
            longitude: '113.32401553573557',
          },
          {
            latitude: '23.115317984078168',
            longitude: '113.32466738479448',
          },
          {
            latitude: '23.11847316826936',
            longitude: '113.3206054313311',
          },
          {
            latitude: '23.116918505497612',
            longitude: '113.31589144050584',
          },
          {
            latitude: '23.112208504199046',
            longitude: '113.31523967505434',
          },
          {
            latitude: '23.10905334365698',
            longitude: '113.319301816808',
          },
        ],
        rank: '36',
      },
      {
        hex_id: '884118b059fffff',
        his_order: [
          {
            latitude: '23.14906769983822',
            longitude: '113.3242987718089',
          },
          {
            latitude: '23.14980144983367',
            longitude: '113.32240198157298',
          },
          {
            latitude: '23.14933839873245',
            longitude: '113.32408134869803',
          },
        ],
        order_count: '8',
        points: [
          {
            latitude: '23.146727627751247',
            longitude: '113.32451668801131',
          },
          {
            latitude: '23.15143597253027',
            longitude: '113.32516862437541',
          },
          {
            latitude: '23.154590993016082',
            longitude: '113.32110618380977',
          },
          {
            latitude: '23.153037645298593',
            longitude: '113.31639161852394',
          },
          {
            latitude: '23.148329122737746',
            longitude: '113.31573976578555',
          },
          {
            latitude: '23.1451741256697',
            longitude: '113.3198023946946',
          },
        ],
        rank: '37',
      },
      {
        hex_id: '884118b741fffff',
        his_order: [
          {
            latitude: '23.126591412300982',
            longitude: '113.24246300855062',
          },
          {
            latitude: '23.125692237035828',
            longitude: '113.2384798724197',
          },
          {
            latitude: '23.125572108280117',
            longitude: '113.23860979206725',
          },
        ],
        order_count: '8',
        points: [
          {
            latitude: '23.124998089797014',
            longitude: '113.24500154473635',
          },
          {
            latitude: '23.12970951222968',
            longitude: '113.24565263951638',
          },
          {
            latitude: '23.132863848809503',
            longitude: '113.24158640477731',
          },
          {
            latitude: '23.131306739329304',
            longitude: '113.23686888781411',
          },
          {
            latitude: '23.126595139604795',
            longitude: '113.23621787709457',
          },
          {
            latitude: '23.12344082664577',
            longitude: '113.24028429926503',
          },
        ],
        rank: '38',
      },
      {
        hex_id: '884118b26bfffff',
        his_order: [
          {
            latitude: '23.12214969899775',
            longitude: '113.36653187950884',
          },
          {
            latitude: '23.119708290375442',
            longitude: '113.3629850245548',
          },
          {
            latitude: '23.122748306542316',
            longitude: '113.36814639388294',
          },
        ],
        order_count: '8',
        points: [
          {
            latitude: '23.116727144680713',
            longitude: '113.36983865128542',
          },
          {
            latitude: '23.121435450579167',
            longitude: '113.37049096924892',
          },
          {
            latitude: '23.124591054923883',
            longitude: '113.36643129914434',
          },
          {
            latitude: '23.123038329791346',
            longitude: '113.36171912225785',
          },
          {
            latitude: '23.118329845582505',
            longitude: '113.36106688764738',
          },
          {
            latitude: '23.11517426481012',
            longitude: '113.36512674655766',
          },
        ],
        rank: '40',
      },
      {
        hex_id: '88411d4de1fffff',
        his_order: [
          {
            latitude: '23.093463981653954',
            longitude: '113.26805131748837',
          },
          {
            latitude: '23.096320803357006',
            longitude: '113.27414589283163',
          },
          {
            latitude: '23.09666691236471',
            longitude: '113.27409687519078',
          },
        ],
        order_count: '7',
        points: [
          {
            latitude: '23.090337564906363',
            longitude: '113.27621932781827',
          },
          {
            latitude: '23.095049529944117',
            longitude: '113.27687065505084',
          },
          {
            latitude: '23.09820433807143',
            longitude: '113.27280652183484',
          },
          {
            latitude: '23.096647157337046',
            longitude: '113.26809087364033',
          },
          {
            latitude: '23.091935014560246',
            longitude: '113.26743963027226',
          },
          {
            latitude: '23.088780230250357',
            longitude: '113.27150395122146',
          },
        ],
        rank: '42',
      },
      {
        hex_id: '88411d4d05fffff',
        his_order: [
          {
            latitude: '23.08234539710192',
            longitude: '113.31545164839433',
          },
          {
            latitude: '23.089153750052276',
            longitude: '113.31573465707017',
          },
          {
            latitude: '23.084252755587432',
            longitude: '113.31576538673',
          },
        ],
        order_count: '7',
        points: [
          {
            latitude: '23.08234483848055',
            longitude: '113.32010480279607',
          },
          {
            latitude: '23.08705591365718',
            longitude: '113.32075654859642',
          },
          {
            latitude: '23.090211189730933',
            longitude: '113.31669479429262',
          },
          {
            latitude: '23.088655366788263',
            longitude: '113.31198110596604',
          },
          {
            latitude: '23.08394411348405',
            longitude: '113.3113294437786',
          },
          {
            latitude: '23.080788861243597',
            longitude: '113.31539138629213',
          },
        ],
        rank: '43',
      },
      {
        hex_id: '88411d4dedfffff',
        his_order: [
          {
            latitude: '23.092846638732983',
            longitude: '113.28166194563548',
          },
          {
            latitude: '23.08965058811487',
            longitude: '113.27749544366856',
          },
          {
            latitude: '23.091710388279356',
            longitude: '113.27861467345603',
          },
        ],
        order_count: '7',
        points: [
          {
            latitude: '23.08873974976106',
            longitude: '113.28499815822546',
          },
          {
            latitude: '23.093451536982013',
            longitude: '113.28564956927224',
          },
          {
            latitude: '23.096606438987102',
            longitude: '113.2815859116056',
          },
          {
            latitude: '23.095049529944117',
            longitude: '113.27687065505084',
          },
          {
            latitude: '23.090337564906363',
            longitude: '113.27621932781827',
          },
          {
            latitude: '23.087182686721885',
            longitude: '113.2802831733135',
          },
        ],
        rank: '45',
      },
      {
        hex_id: '88411d4da1fffff',
        his_order: [
          {
            latitude: '23.109881780532042',
            longitude: '113.25820236857449',
          },
          {
            latitude: '23.112487687519994',
            longitude: '113.25618318732631',
          },
          {
            latitude: '23.11165236858051',
            longitude: '113.25360391353415',
          },
        ],
        order_count: '7',
        points: [
          {
            latitude: '23.107668433750803',
            longitude: '113.26061259587604',
          },
          {
            latitude: '23.112380128010113',
            longitude: '113.26126380697531',
          },
          {
            latitude: '23.115534701120904',
            longitude: '113.25719862290897',
          },
          {
            latitude: '23.1139775562468',
            longitude: '113.25248204014827',
          },
          {
            latitude: '23.109265684472017',
            longitude: '113.25183091301147',
          },
          {
            latitude: '23.106111135080276',
            longitude: '113.25589628466021',
          },
        ],
        rank: '46',
      },
      {
        hex_id: '884118b201fffff',
        his_order: [
          {
            latitude: '23.119364203916952',
            longitude: '113.34837355195292',
          },
          {
            latitude: '23.120684310559778',
            longitude: '113.34868825179386',
          },
          {
            latitude: '23.126045290218368',
            longitude: '113.34803735275429',
          },
        ],
        order_count: '7',
        points: [
          {
            latitude: '23.119932182192912',
            longitude: '113.35229425387254',
          },
          {
            latitude: '23.124640844634715',
            longitude: '113.35294640507968',
          },
          {
            latitude: '23.127796262773703',
            longitude: '113.34888578145582',
          },
          {
            latitude: '23.126242994898117',
            longitude: '113.3441728179963',
          },
          {
            latitude: '23.1215341543008',
            longitude: '113.34352075024285',
          },
          {
            latitude: '23.118378759728095',
            longitude: '113.34758156248252',
          },
        ],
        rank: '47',
      },
      {
        hex_id: '884118b219fffff',
        his_order: [
          {
            latitude: '23.11553965060509',
            longitude: '113.32766236545737',
          },
          {
            latitude: '23.11580127970291',
            longitude: '113.3274098663301',
          },
          {
            latitude: '23.11390282318673',
            longitude: '113.33021448905055',
          },
        ],
        order_count: '7',
        points: [
          {
            latitude: '23.109007452439492',
            longitude: '113.33279052755994',
          },
          {
            latitude: '23.11371709767802',
            longitude: '113.33344246017593',
          },
          {
            latitude: '23.116872375326707',
            longitude: '113.32938098299229',
          },
          {
            latitude: '23.115317984078168',
            longitude: '113.32466738479448',
          },
          {
            latitude: '23.110608160770845',
            longitude: '113.32401553573557',
          },
          {
            latitude: '23.107452906774373',
            longitude: '113.32807720130465',
          },
        ],
        rank: '48',
      },
      {
        hex_id: '884118b297fffff',
        his_order: [
          {
            latitude: '23.141771167985805',
            longitude: '113.26136538893992',
          },
          {
            latitude: '23.139835045262064',
            longitude: '113.25960371802205',
          },
          {
            latitude: '23.139588308198835',
            longitude: '113.26137524595347',
          },
        ],
        order_count: '7',
        points: [
          {
            latitude: '23.135935465829593',
            longitude: '113.2645201207275',
          },
          {
            latitude: '23.14064590633668',
            longitude: '113.2651714351327',
          },
          {
            latitude: '23.14380038478793',
            longitude: '113.26110605088162',
          },
          {
            latitude: '23.14224439919015',
            longitude: '113.25638916454969',
          },
          {
            latitude: '23.13753378130362',
            longitude: '113.25573793410156',
          },
          {
            latitude: '23.134379326387762',
            longitude: '113.25980350601557',
          },
        ],
        rank: '49',
      },
      {
        hex_id: '88411d4de3fffff',
        his_order: [
          {
            latitude: '23.095708779980438',
            longitude: '113.26546203495285',
          },
          {
            latitude: '23.0923295290924',
            longitude: '113.26584900635797',
          },
          {
            latitude: '23.097909502729824',
            longitude: '113.26175358619777',
          },
        ],
        order_count: '7',
        points: [
          {
            latitude: '23.091935014560246',
            longitude: '113.26743963027226',
          },
          {
            latitude: '23.096647157337046',
            longitude: '113.26809087364033',
          },
          {
            latitude: '23.099801871442303',
            longitude: '113.2640262649917',
          },
          {
            latitude: '23.09824441895004',
            longitude: '113.25931022532457',
          },
          {
            latitude: '23.093532098511993',
            longitude: '113.25865906587134',
          },
          {
            latitude: '23.090377408220935',
            longitude: '113.26272386215769',
          },
        ],
        rank: '50',
      },
      {
        hex_id: '88411d4da9fffff',
        his_order: [
          {
            latitude: '23.103168572773345',
            longitude: '113.26132879001197',
          },
          {
            latitude: '23.107193064509076',
            longitude: '113.26058681766699',
          },
          {
            latitude: '23.1065786873839',
            longitude: '113.25994758570435',
          },
        ],
        order_count: '6',
        points: [
          {
            latitude: '23.099801871442303',
            longitude: '113.2640262649917',
          },
          {
            latitude: '23.10451379004524',
            longitude: '113.26467749223039',
          },
          {
            latitude: '23.107668433750803',
            longitude: '113.26061259587604',
          },
          {
            latitude: '23.106111135080276',
            longitude: '113.25589628466021',
          },
          {
            latitude: '23.10139903888898',
            longitude: '113.25524514136016',
          },
          {
            latitude: '23.09824441895004',
            longitude: '113.25931022532457',
          },
        ],
        rank: '51',
      },
      {
        hex_id: '884118b20bfffff',
        his_order: [
          {
            latitude: '23.1170432567124',
            longitude: '113.34618611691768',
          },
          {
            latitude: '23.118050536629507',
            longitude: '113.33969618940276',
          },
          {
            latitude: '23.115508737865703',
            longitude: '113.34088041580796',
          },
        ],
        order_count: '6',
        points: [
          {
            latitude: '23.11366969491049',
            longitude: '113.34692947881116',
          },
          {
            latitude: '23.118378759728095',
            longitude: '113.34758156248252',
          },
          {
            latitude: '23.1215341543008',
            longitude: '113.34352075024285',
          },
          {
            latitude: '23.119980460438622',
            longitude: '113.33880766577091',
          },
          {
            latitude: '23.11527121747007',
            longitude: '113.33815566557978',
          },
          {
            latitude: '23.11211584650816',
            longitude: '113.34221666636763',
          },
        ],
        rank: '55',
      },
      {
        hex_id: '884118b25bfffff',
        his_order: [
          {
            latitude: '23.095586170013767',
            longitude: '113.33383168096701',
          },
          {
            latitude: '23.100839422079037',
            longitude: '113.33544735131723',
          },
          {
            latitude: '23.094838716263443',
            longitude: '113.33323139761171',
          },
        ],
        order_count: '6',
        points: [
          {
            latitude: '23.093276725974995',
            longitude: '113.33960870512973',
          },
          {
            latitude: '23.097986819097766',
            longitude: '113.34026066962643',
          },
          {
            latitude: '23.1011422358674',
            longitude: '113.33619976826694',
          },
          {
            latitude: '23.099587535760378',
            longitude: '113.33148671395779',
          },
          {
            latitude: '23.094877264423022',
            longitude: '113.33083483297062',
          },
          {
            latitude: '23.091721871400782',
            longitude: '113.33489592277034',
          },
        ],
        rank: '57',
      },
      {
        hex_id: '884118b26dfffff',
        his_order: [
          {
            latitude: '23.12591224203896',
            longitude: '113.38049377447301',
          },
          {
            latitude: '23.125945127889384',
            longitude: '113.38037564736784',
          },
          {
            latitude: '23.12629402401012',
            longitude: '113.37836038448418',
          },
        ],
        order_count: '6',
        points: [
          {
            latitude: '23.121384389866424',
            longitude: '113.38397333542056',
          },
          {
            latitude: '23.126092114886703',
            longitude: '113.38462580413002',
          },
          {
            latitude: '23.129247835648606',
            longitude: '113.38056679992673',
          },
          {
            latitude: '23.127695807853005',
            longitude: '113.37585513803312',
          },
          {
            latitude: '23.12298790444051',
            longitude: '113.37520275259979',
          },
          {
            latitude: '23.119832207209363',
            longitude: '113.3792619457712',
          },
        ],
        rank: '58',
      },
      {
        hex_id: '884118b2c5fffff',
        his_order: [
          {
            latitude: '23.119767039250274',
            longitude: '113.31039553843351',
          },
          {
            latitude: '23.11974447543681',
            longitude: '113.31006892888024',
          },
          {
            latitude: '23.12652114713459',
            longitude: '113.30518252556143',
          },
        ],
        order_count: '6',
        points: [
          {
            latitude: '23.120073596087',
            longitude: '113.31182901087891',
          },
          {
            latitude: '23.124783373043236',
            longitude: '113.3124807603274',
          },
          {
            latitude: '23.127938393485035',
            longitude: '113.30841804282085',
          },
          {
            latitude: '23.126383613365597',
            longitude: '113.30370338768553',
          },
          {
            latitude: '23.121673658568604',
            longitude: '113.30305172191859',
          },
          {
            latitude: '23.118518661725307',
            longitude: '113.30711462759274',
          },
        ],
        rank: '59',
      },
      {
        hex_id: '884118b2e1fffff',
        his_order: [
          {
            latitude: '23.134689914917256',
            longitude: '113.30794302476166',
          },
          {
            latitude: '23.134227049786098',
            longitude: '113.3110988285807',
          },
          {
            latitude: '23.134366929641835',
            longitude: '113.3092273560625',
          },
        ],
        order_count: '6',
        points: [
          {
            latitude: '23.134202300093015',
            longitude: '113.31378431086598',
          },
          {
            latitude: '23.138911450083448',
            longitude: '113.3144361119571',
          },
          {
            latitude: '23.142066423689307',
            longitude: '113.31037329477242',
          },
          {
            latitude: '23.140512223791653',
            longitude: '113.30565848827605',
          },
          {
            latitude: '23.135802896028675',
            longitude: '113.30500677086374',
          },
          {
            latitude: '23.13264794592939',
            longitude: '113.30906977625628',
          },
        ],
        rank: '61',
      },
      {
        hex_id: '884118b261fffff',
        his_order: [
          {
            latitude: '23.128603944936874',
            longitude: '113.37345036362336',
          },
          {
            latitude: '23.12339967845106',
            longitude: '113.37409286348216',
          },
          {
            latitude: '23.123580168819082',
            longitude: '113.36851200025988',
          },
        ],
        order_count: '5',
        points: [
          {
            latitude: '23.12298790444051',
            longitude: '113.37520275259979',
          },
          {
            latitude: '23.127695807853005',
            longitude: '113.37585513803312',
          },
          {
            latitude: '23.130851435725496',
            longitude: '113.37179565680184',
          },
          {
            latitude: '23.129299136651248',
            longitude: '113.36708360125122',
          },
          {
            latitude: '23.124591054923883',
            longitude: '113.36643129914434',
          },
          {
            latitude: '23.121435450579167',
            longitude: '113.37049096924892',
          },
        ],
        rank: '64',
      },
      {
        hex_id: '88411d4dc5fffff',
        his_order: [
          {
            latitude: '23.08065189382591',
            longitude: '113.26859179183364',
          },
          {
            latitude: '23.08101849438228',
            longitude: '113.26944836507782',
          },
          {
            latitude: '23.081121799340906',
            longitude: '113.26992769128232',
          },
        ],
        order_count: '5',
        points: [
          {
            latitude: '23.076200418534984',
            longitude: '113.27426544939351',
          },
          {
            latitude: '23.08091300915006',
            longitude: '113.2749167249901',
          },
          {
            latitude: '23.084067863469496',
            longitude: '113.27085269173409',
          },
          {
            latitude: '23.082510103257885',
            longitude: '113.26613719517584',
          },
          {
            latitude: '23.077797334835783',
            longitude: '113.26548600344645',
          },
          {
            latitude: '23.074642504425825',
            longitude: '113.26955022439542',
          },
        ],
        rank: '66',
      },
      {
        hex_id: '88411d4de5fffff',
        his_order: [
          {
            latitude: '23.100423455361803',
            longitude: '113.27913477969506',
          },
          {
            latitude: '23.09951734295277',
            longitude: '113.27300117687915',
          },
          {
            latitude: '23.097301119080935',
            longitude: '113.27401685121424',
          },
        ],
        order_count: '5',
        points: [
          {
            latitude: '23.096606438987102',
            longitude: '113.2815859116056',
          },
          {
            latitude: '23.101318002179962',
            longitude: '113.28223730657062',
          },
          {
            latitude: '23.10447283408029',
            longitude: '113.27817336115564',
          },
          {
            latitude: '23.102916079008214',
            longitude: '113.27345783296187',
          },
          {
            latitude: '23.09820433807143',
            longitude: '113.27280652183484',
          },
          {
            latitude: '23.095049529944117',
            longitude: '113.27687065505084',
          },
        ],
        rank: '67',
      },
      {
        hex_id: '884118b229fffff',
        his_order: [
          {
            latitude: '23.133458880522312',
            longitude: '113.35868964450128',
          },
          {
            latitude: '23.137891300558028',
            longitude: '113.35848358476159',
          },
          {
            latitude: '23.133398088771337',
            longitude: '113.35882988612255',
          },
        ],
        order_count: '5',
        points: [
          {
            latitude: '23.132454671490038',
            longitude: '113.36302364310752',
          },
          {
            latitude: '23.13716252887687',
            longitude: '113.36367592934775',
          },
          {
            latitude: '23.140317994014925',
            longitude: '113.35961568315844',
          },
          {
            latitude: '23.13876557828238',
            longitude: '113.3549029619651',
          },
          {
            latitude: '23.13405754273095',
            longitude: '113.35425075912545',
          },
          {
            latitude: '23.130902101070195',
            longitude: '113.35831119406585',
          },
        ],
        rank: '68',
      },
      {
        hex_id: '88411d4d23fffff',
        his_order: [
          {
            latitude: '23.09789547607676',
            longitude: '113.30825611797333',
          },
          {
            latitude: '23.102233773391767',
            longitude: '113.30915606038013',
          },
          {
            latitude: '23.100824510421635',
            longitude: '113.31342198040961',
          },
        ],
        order_count: '5',
        points: [
          {
            latitude: '23.098077247729627',
            longitude: '113.31328448196957',
          },
          {
            latitude: '23.102787875263427',
            longitude: '113.31393619578674',
          },
          {
            latitude: '23.1059430121119',
            longitude: '113.30987386581052',
          },
          {
            latitude: '23.104387497682023',
            longitude: '113.30515963384966',
          },
          {
            latitude: '23.09967669216641',
            longitude: '113.30450800369299',
          },
          {
            latitude: '23.096521579055988',
            longitude: '113.30857052182401',
          },
        ],
        rank: '69',
      },
      {
        hex_id: '884118b2c9fffff',
        his_order: [
          {
            latitude: '23.107389260465794',
            longitude: '113.3025717052079',
          },
          {
            latitude: '23.108297720406373',
            longitude: '113.31001706151869',
          },
          {
            latitude: '23.10761916438308',
            longitude: '113.30499392109986',
          },
        ],
        order_count: '5',
        points: [
          {
            latitude: '23.1059430121119',
            longitude: '113.30987386581052',
          },
          {
            latitude: '23.110653415569736',
            longitude: '113.31052556362098',
          },
          {
            latitude: '23.113808482513097',
            longitude: '113.306462945799',
          },
          {
            latitude: '23.112253122301663',
            longitude: '113.30174844202652',
          },
          {
            latitude: '23.10754254093492',
            longitude: '113.30109682790034',
          },
          {
            latitude: '23.104387497682023',
            longitude: '113.30515963384966',
          },
        ],
        rank: '70',
      },
      {
        hex_id: '884118b2d7fffff',
        his_order: [
          {
            latitude: '23.124774878590927',
            longitude: '113.27853681212969',
          },
          {
            latitude: '23.124789862318796',
            longitude: '113.27851078730735',
          },
          {
            latitude: '23.122120549355724',
            longitude: '113.2793874915173',
          },
        ],
        order_count: '5',
        points: [
          {
            latitude: '23.1186062246609',
            longitude: '113.28012754941949',
          },
          {
            latitude: '23.123316937148203',
            longitude: '113.28077897993795',
          },
          {
            latitude: '23.126471651887396',
            longitude: '113.27671464682105',
          },
          {
            latitude: '23.12491563049925',
            longitude: '113.2719986953593',
          },
          {
            latitude: '23.12020474040897',
            longitude: '113.27134734869995',
          },
          {
            latitude: '23.11705004930329',
            longitude: '113.27541186963052',
          },
        ],
        rank: '72',
      },
      {
        hex_id: '88411d4d8dfffff',
        his_order: [
          {
            latitude: '23.089096469691448',
            longitude: '113.26007745297305',
          },
          {
            latitude: '23.091269934837538',
            longitude: '113.2539715637957',
          },
          {
            latitude: '23.091336140522813',
            longitude: '113.25839216887428',
          },
        ],
        order_count: '5',
        points: [
          {
            latitude: '23.08566486370594',
            longitude: '113.26207268656132',
          },
          {
            latitude: '23.090377408220935',
            longitude: '113.26272386215769',
          },
          {
            latitude: '23.093532098511993',
            longitude: '113.25865906587134',
          },
          {
            latitude: '23.09197422042294',
            longitude: '113.25394290640615',
          },
          {
            latitude: '23.087261498251642',
            longitude: '113.25329181475117',
          },
          {
            latitude: '23.08410683181918',
            longitude: '113.25735679860729',
          },
        ],
        rank: '73',
      },
      {
        hex_id: '884118b2e5fffff',
        his_order: [
          {
            latitude: '23.140517976685636',
            longitude: '113.31365510298836',
          },
          {
            latitude: '23.145309820083565',
            longitude: '113.3141994722145',
          },
          {
            latitude: '23.14086962356574',
            longitude: '113.31786632251732',
          },
        ],
        order_count: '5',
        points: [
          {
            latitude: '23.140465378234406',
            longitude: '113.31915052596058',
          },
          {
            latitude: '23.1451741256697',
            longitude: '113.3198023946946',
          },
          {
            latitude: '23.148329122737746',
            longitude: '113.31573976578555',
          },
          {
            latitude: '23.146775348901805',
            longitude: '113.31102507985416',
          },
          {
            latitude: '23.142066423689307',
            longitude: '113.31037329477242',
          },
          {
            latitude: '23.138911450083448',
            longitude: '113.3144361119571',
          },
        ],
        rank: '74',
      },
      {
        hex_id: '88411d4d33fffff',
        his_order: [
          {
            latitude: '23.09914073834916',
            longitude: '113.28216492583918',
          },
          {
            latitude: '23.100911110293044',
            longitude: '113.28379691543277',
          },
          {
            latitude: '23.099871094719823',
            longitude: '113.28605958604106',
          },
        ],
        order_count: '5',
        points: [
          {
            latitude: '23.095008174400107',
            longitude: '113.29036443402019',
          },
          {
            latitude: '23.0997195597713',
            longitude: '113.2910159127729',
          },
          {
            latitude: '23.102874485552586',
            longitude: '113.28695244300269',
          },
          {
            latitude: '23.101318002179962',
            longitude: '113.28223730657062',
          },
          {
            latitude: '23.096606438987102',
            longitude: '113.2815859116056',
          },
          {
            latitude: '23.093451536982013',
            longitude: '113.28564956927224',
          },
        ],
        rank: '76',
      },
      {
        hex_id: '88411d4d2dfffff',
        his_order: [
          {
            latitude: '23.096330178447538',
            longitude: '113.32255868532577',
          },
          {
            latitude: '23.0963919430885',
            longitude: '113.32985857400392',
          },
          {
            latitude: '23.096174613390314',
            longitude: '113.32336430284391',
          },
        ],
        order_count: '5',
        points: [
          {
            latitude: '23.094877264423022',
            longitude: '113.33083483297062',
          },
          {
            latitude: '23.099587535760378',
            longitude: '113.33148671395779',
          },
          {
            latitude: '23.10274285936721',
            longitude: '113.3274253362766',
          },
          {
            latitude: '23.10118788788591',
            longitude: '113.32271188925037',
          },
          {
            latitude: '23.096477438411537',
            longitude: '113.32206009182306',
          },
          {
            latitude: '23.09332213854899',
            longitude: '113.3261216578494',
          },
        ],
        rank: '77',
      },
      {
        hex_id: '884118b285fffff',
        his_order: [
          {
            latitude: '23.144172808001265',
            longitude: '113.2910041167736',
          },
          {
            latitude: '23.14296743467051',
            longitude: '113.29491273774362',
          },
          {
            latitude: '23.140848588392416',
            longitude: '113.29107599420362',
          },
        ],
        order_count: '5',
        points: [
          {
            latitude: '23.137403126184477',
            longitude: '113.29622836248546',
          },
          {
            latitude: '23.14211263164241',
            longitude: '113.29687999616861',
          },
          {
            latitude: '23.145267417015933',
            longitude: '113.29281622689992',
          },
          {
            latitude: '23.143712673424602',
            longitude: '113.28810063591811',
          },
          {
            latitude: '23.13900299034935',
            longitude: '113.28744908601448',
          },
          {
            latitude: '23.13584822847623',
            longitude: '113.29151304330041',
          },
        ],
        rank: '78',
      },
      {
        hex_id: '884118b269fffff',
        his_order: [
          {
            latitude: '23.119599549886534',
            longitude: '113.37684811341548',
          },
          {
            latitude: '23.12043945813867',
            longitude: '113.37178953084563',
          },
          {
            latitude: '23.116598342768825',
            longitude: '113.37064665169822',
          },
        ],
        order_count: '5',
        points: [
          {
            latitude: '23.115124079698674',
            longitude: '113.37860954450504',
          },
          {
            latitude: '23.119832207209363',
            longitude: '113.3792619457712',
          },
          {
            latitude: '23.12298790444051',
            longitude: '113.37520275259979',
          },
          {
            latitude: '23.121435450579167',
            longitude: '113.37049096924892',
          },
          {
            latitude: '23.116727144680713',
            longitude: '113.36983865128542',
          },
          {
            latitude: '23.113571471024898',
            longitude: '113.37389803335742',
          },
        ],
        rank: '79',
      },
      {
        hex_id: '884118b265fffff',
        his_order: [
          {
            latitude: '23.134280708229372',
            longitude: '113.3787874281618',
          },
          {
            latitude: '23.133866284788912',
            longitude: '113.37856013603937',
          },
          {
            latitude: '23.134314206811453',
            longitude: '113.37833590464852',
          },
        ],
        order_count: '4',
        points: [
          {
            latitude: '23.129247835648606',
            longitude: '113.38056679992673',
          },
          {
            latitude: '23.133955336474145',
            longitude: '113.38121925281706',
          },
          {
            latitude: '23.13711098782989',
            longitude: '113.37715996052665',
          },
          {
            latitude: '23.13555911487037',
            longitude: '113.37244802639229',
          },
          {
            latitude: '23.130851435725496',
            longitude: '113.37179565680184',
          },
          {
            latitude: '23.127695807853005',
            longitude: '113.37585513803312',
          },
        ],
        rank: '80',
      },
      {
        hex_id: '88411d4d2bfffff',
        his_order: [
          {
            latitude: '23.092481067452358',
            longitude: '113.31569580565284',
          },
          {
            latitude: '23.09051555772139',
            longitude: '113.3158690103417',
          },
          {
            latitude: '23.09318429761647',
            longitude: '113.31566078491946',
          },
        ],
        order_count: '4',
        points: [
          {
            latitude: '23.090211189730933',
            longitude: '113.31669479429262',
          },
          {
            latitude: '23.09492204117102',
            longitude: '113.3173465241064',
          },
          {
            latitude: '23.098077247729627',
            longitude: '113.31328448196957',
          },
          {
            latitude: '23.096521579055988',
            longitude: '113.30857052182401',
          },
          {
            latitude: '23.091810549561202',
            longitude: '113.30791887564693',
          },
          {
            latitude: '23.088655366788263',
            longitude: '113.31198110596604',
          },
        ],
        rank: '83',
      },
      {
        hex_id: '88411d4d25fffff',
        his_order: [
          {
            latitude: '23.107358224889968',
            longitude: '113.32282496736322',
          },
          {
            latitude: '23.10250449441002',
            longitude: '113.32135067039455',
          },
          {
            latitude: '23.106034059287474',
            longitude: '113.32623079633062',
          },
        ],
        order_count: '4',
        points: [
          {
            latitude: '23.10274285936721',
            longitude: '113.3274253362766',
          },
          {
            latitude: '23.107452906774373',
            longitude: '113.32807720130465',
          },
          {
            latitude: '23.110608160770845',
            longitude: '113.32401553573557',
          },
          {
            latitude: '23.10905334365698',
            longitude: '113.319301816808',
          },
          {
            latitude: '23.104343118185692',
            longitude: '113.31865003536358',
          },
          {
            latitude: '23.10118788788591',
            longitude: '113.32271188925037',
          },
        ],
        rank: '84',
      },
      {
        hex_id: '88411d4d57fffff',
        his_order: [
          {
            latitude: '23.069250564730716',
            longitude: '113.29662742273068',
          },
          {
            latitude: '23.06423153158097',
            longitude: '113.30277615513961',
          },
          {
            latitude: '23.068886654485304',
            longitude: '113.30157242423927',
          },
        ],
        order_count: '4',
        points: [
          {
            latitude: '23.06353999431339',
            longitude: '113.30400935997876',
          },
          {
            latitude: '23.068252274486447',
            longitude: '113.30466090290288',
          },
          {
            latitude: '23.071407478926798',
            longitude: '113.30059858417306',
          },
          {
            latitude: '23.06985037922078',
            longitude: '113.29588453449983',
          },
          {
            latitude: '23.065137920934532',
            longitude: '113.29523307526819',
          },
          {
            latitude: '23.061982740461',
            longitude: '113.29929558200456',
          },
        ],
        rank: '85',
      },
      {
        hex_id: '88411d4da3fffff',
        his_order: [
          {
            latitude: '23.116407357426578',
            longitude: '113.24752876633283',
          },
          {
            latitude: '23.11402819307358',
            longitude: '113.24824146840578',
          },
          {
            latitude: '23.10863806225538',
            longitude: '113.24796515865748',
          },
        ],
        order_count: '4',
        points: [
          {
            latitude: '23.109265684472017',
            longitude: '113.25183091301147',
          },
          {
            latitude: '23.1139775562468',
            longitude: '113.25248204014827',
          },
          {
            latitude: '23.11713203489629',
            longitude: '113.24841638080898',
          },
          {
            latitude: '23.11557461804861',
            longitude: '113.2436994068334',
          },
          {
            latitude: '23.11086256883619',
            longitude: '113.24304836370942',
          },
          {
            latitude: '23.107708113902543',
            longitude: '113.24711421053551',
          },
        ],
        rank: '88',
      },
      {
        hex_id: '88411d4987fffff',
        his_order: [
          {
            latitude: '23.118298684206703',
            longitude: '113.40169612018349',
          },
          {
            latitude: '23.121749635638416',
            longitude: '113.40441367216862',
          },
          {
            latitude: '23.122525735091724',
            longitude: '113.40316662462943',
          },
        ],
        order_count: '4',
        points: [
          {
            latitude: '23.11657166371212',
            longitude: '113.4102798572623',
          },
          {
            latitude: '23.12127885309188',
            longitude: '113.4109325754982',
          },
          {
            latitude: '23.12443485165629',
            longitude: '113.40687500307129',
          },
          {
            latitude: '23.12288363729486',
            longitude: '113.40216452314355',
          },
          {
            latitude: '23.118176269290984',
            longitude: '113.40151188803283',
          },
          {
            latitude: '23.115020294266213',
            longitude: '113.40556964971195',
          },
        ],
        rank: '89',
      },
      {
        hex_id: '88411d4dbdfffff',
        his_order: [
          {
            latitude: '23.107044090626662',
            longitude: '113.24327638057352',
          },
          {
            latitude: '23.108896948929498',
            longitude: '113.2410244473187',
          },
          {
            latitude: '23.10612381201716',
            longitude: '113.24550058118521',
          },
        ],
        order_count: '4',
        points: [
          {
            latitude: '23.102995840200723',
            longitude: '113.24646315122445',
          },
          {
            latitude: '23.107708113902543',
            longitude: '113.24711421053551',
          },
          {
            latitude: '23.11086256883619',
            longitude: '113.24304836370942',
          },
          {
            latitude: '23.10930472630131',
            longitude: '113.23833127014072',
          },
          {
            latitude: '23.104592275166812',
            longitude: '113.23768029486898',
          },
          {
            latitude: '23.10143784399333',
            longitude: '113.24174632911391',
          },
        ],
        rank: '90',
      },
      {
        hex_id: '884118b267fffff',
        his_order: [
          {
            latitude: '23.132749918472832',
            longitude: '113.36718260926752',
          },
          {
            latitude: '23.13360105191886',
            longitude: '113.3677254974446',
          },
          {
            latitude: '23.13346780085081',
            longitude: '113.36361099158725',
          },
        ],
        order_count: '4',
        points: [
          {
            latitude: '23.130851435725496',
            longitude: '113.37179565680184',
          },
          {
            latitude: '23.13555911487037',
            longitude: '113.37244802639229',
          },
          {
            latitude: '23.138714673189426',
            longitude: '113.36838825709461',
          },
          {
            latitude: '23.13716252887687',
            longitude: '113.36367592934775',
          },
          {
            latitude: '23.132454671490038',
            longitude: '113.36302364310752',
          },
          {
            latitude: '23.129299136651248',
            longitude: '113.36708360125122',
          },
        ],
        rank: '91',
      },
      {
        hex_id: '88411d4de7fffff',
        his_order: [
          {
            latitude: '23.100015273814485',
            longitude: '113.2725828825428',
          },
          {
            latitude: '23.10527502510945',
            longitude: '113.27025152886493',
          },
          {
            latitude: '23.101882442090538',
            longitude: '113.27163028579075',
          },
        ],
        order_count: '4',
        points: [
          {
            latitude: '23.09820433807143',
            longitude: '113.27280652183484',
          },
          {
            latitude: '23.102916079008214',
            longitude: '113.27345783296187',
          },
          {
            latitude: '23.10607081688329',
            longitude: '113.26939341201879',
          },
          {
            latitude: '23.10451379004524',
            longitude: '113.26467749223039',
          },
          {
            latitude: '23.099801871442303',
            longitude: '113.2640262649917',
          },
          {
            latitude: '23.096647157337046',
            longitude: '113.26809087364033',
          },
        ],
        rank: '93',
      },
      {
        hex_id: '884118b2c3fffff',
        his_order: [
          {
            latitude: '23.12118495343719',
            longitude: '113.29651874018549',
          },
          {
            latitude: '23.11789930086591',
            longitude: '113.29628916251175',
          },
          {
            latitude: '23.12224508408097',
            longitude: '113.29485225323941',
          },
        ],
        order_count: '4',
        points: [
          {
            latitude: '23.115408095502055',
            longitude: '113.29768534825257',
          },
          {
            latitude: '23.12011845255029',
            longitude: '113.29833694633822',
          },
          {
            latitude: '23.1232733555032',
            longitude: '113.29427356473327',
          },
          {
            latitude: '23.12171787776158',
            longitude: '113.28955839702546',
          },
          {
            latitude: '23.117007342954963',
            longitude: '113.28890688269824',
          },
          {
            latitude: '23.113852463641848',
            longitude: '113.2929704523077',
          },
        ],
        rank: '94',
      },
      {
        hex_id: '884118b745fffff',
        his_order: [
          {
            latitude: '23.13350969893797',
            longitude: '113.24975854604804',
          },
          {
            latitude: '23.13099578261949',
            longitude: '113.2493444306987',
          },
          {
            latitude: '23.133348507900582',
            longitude: '113.25042246419541',
          },
        ],
        order_count: '4',
        points: [
          {
            latitude: '23.13126634958705',
            longitude: '113.2503697653553',
          },
          {
            latitude: '23.13597736979744',
            longitude: '113.25102092797576',
          },
          {
            latitude: '23.13913172995377',
            longitude: '113.24695488073607',
          },
          {
            latitude: '23.137575046316652',
            longitude: '113.24223748336381',
          },
          {
            latitude: '23.132863848809503',
            longitude: '113.24158640477731',
          },
          {
            latitude: '23.12970951222968',
            longitude: '113.24565263951638',
          },
        ],
        rank: '95',
      },
      {
        hex_id: '884118b749fffff',
        his_order: [
          {
            latitude: '23.119041522721922',
            longitude: '113.24720401261645',
          },
          {
            latitude: '23.124376095956126',
            longitude: '113.24338750066352',
          },
          {
            latitude: '23.117105625583267',
            longitude: '113.24758380170636',
          },
        ],
        order_count: '4',
        points: [
          {
            latitude: '23.11713203489629',
            longitude: '113.24841638080898',
          },
          {
            latitude: '23.12184368208484',
            longitude: '113.24906749177242',
          },
          {
            latitude: '23.124998089797014',
            longitude: '113.24500154473635',
          },
          {
            latitude: '23.12344082664577',
            longitude: '113.24028429926503',
          },
          {
            latitude: '23.118729002092476',
            longitude: '113.23963327233822',
          },
          {
            latitude: '23.11557461804861',
            longitude: '113.2436994068334',
          },
        ],
        rank: '97',
      },
      {
        hex_id: '884118b2cdfffff',
        his_order: [
          {
            latitude: '23.119735824363527',
            longitude: '113.31086341055216',
          },
          {
            latitude: '23.11970418349787',
            longitude: '113.31108081591006',
          },
          {
            latitude: '23.11486380332863',
            longitude: '113.31542378563573',
          },
        ],
        order_count: '4',
        points: [
          {
            latitude: '23.112208504199046',
            longitude: '113.31523967505434',
          },
          {
            latitude: '23.116918505497612',
            longitude: '113.31589144050584',
          },
          {
            latitude: '23.120073596087',
            longitude: '113.31182901087891',
          },
          {
            latitude: '23.118518661725307',
            longitude: '113.30711462759274',
          },
          {
            latitude: '23.113808482513097',
            longitude: '113.306462945799',
          },
          {
            latitude: '23.110653415569736',
            longitude: '113.31052556362098',
          },
        ],
        rank: '98',
      },
      {
        hex_id: '884118b2d1fffff',
        his_order: [
          {
            latitude: '23.115320237903312',
            longitude: '113.27875639702066',
          },
          {
            latitude: '23.115439525067554',
            longitude: '113.27786052285653',
          },
          {
            latitude: '23.116063921441835',
            longitude: '113.27919288699555',
          },
        ],
        order_count: '4',
        points: [
          {
            latitude: '23.11074050242775',
            longitude: '113.28354014814124',
          },
          {
            latitude: '23.11545143937936',
            longitude: '113.28419159474785',
          },
          {
            latitude: '23.1186062246609',
            longitude: '113.28012754941949',
          },
          {
            latitude: '23.11705004930329',
            longitude: '113.27541186963052',
          },
          {
            latitude: '23.11233893467581',
            longitude: '113.27476050685921',
          },
          {
            latitude: '23.109184173075302',
            longitude: '113.27882474002885',
          },
        ],
        rank: '99',
      },
      {
        hex_id: '884118b74bfffff',
        his_order: [
          {
            latitude: '23.125195497646345',
            longitude: '113.23626916647443',
          },
          {
            latitude: '23.121986105846435',
            longitude: '113.23640786256234',
          },
          {
            latitude: '23.120567734843448',
            longitude: '113.23919214028155',
          },
        ],
        order_count: '4',
        points: [
          {
            latitude: '23.118729002092476',
            longitude: '113.23963327233822',
          },
          {
            latitude: '23.12344082664577',
            longitude: '113.24028429926503',
          },
          {
            latitude: '23.126595139604795',
            longitude: '113.23621787709457',
          },
          {
            latitude: '23.12503760433886',
            longitude: '113.23150024062117',
          },
          {
            latitude: '23.120325602498678',
            longitude: '113.23084929778135',
          },
          {
            latitude: '23.117171313204754',
            longitude: '113.23491590731523',
          },
        ],
        rank: '100',
      },
      {
        hex_id: '884118b0d1fffff',
        his_order: [
          {
            latitude: '23.16596685102597',
            longitude: '113.2535885546659',
          },
          {
            latitude: '23.17271041439577',
            longitude: '113.25685832636758',
          },
          {
            latitude: '23.168226015308104',
            longitude: '113.2594255747437',
          },
        ],
        order_count: '4',
        points: [
          {
            latitude: '23.165794350161597',
            longitude: '113.259645575106',
          },
          {
            latitude: '23.170503712302896',
            longitude: '113.260296908884',
          },
          {
            latitude: '23.173657999694015',
            longitude: '113.25623084890397',
          },
          {
            latitude: '23.172102901588385',
            longitude: '113.25151326748532',
          },
          {
            latitude: '23.167393362281533',
            longitude: '113.25086201770937',
          },
          {
            latitude: '23.164239098239307',
            longitude: '113.25492826533728',
          },
        ],
        rank: '101',
      },
      {
        hex_id: '884118b043fffff',
        his_order: [
          {
            latitude: '23.16025157102121',
            longitude: '113.32777361936216',
          },
          {
            latitude: '23.161790468884384',
            longitude: '113.3305714654596',
          },
          {
            latitude: '23.16019128630542',
            longitude: '113.3276353320477',
          },
        ],
        order_count: '3',
        points: [
          {
            latitude: '23.159249640280162',
            longitude: '113.3352488526078',
          },
          {
            latitude: '23.16395717944357',
            longitude: '113.33590092419367',
          },
          {
            latitude: '23.167112246631728',
            longitude: '113.331838860518',
          },
          {
            latitude: '23.165559751321005',
            longitude: '113.32712453676494',
          },
          {
            latitude: '23.1608520343666',
            longitude: '113.32647254875172',
          },
          {
            latitude: '23.15769699050741',
            longitude: '113.33053480090622',
          },
        ],
        rank: '104',
      },
      {
        hex_id: '884118b04bfffff',
        his_order: [
          {
            latitude: '23.151134549100057',
            longitude: '113.33645181794998',
          },
          {
            latitude: '23.15443445480746',
            longitude: '113.33310317066537',
          },
          {
            latitude: '23.15063489874285',
            longitude: '113.33411098353072',
          },
        ],
        order_count: '3',
        points: [
          {
            latitude: '23.151386738354464',
            longitude: '113.33865854072998',
          },
          {
            latitude: '23.156094502512254',
            longitude: '113.33931062826018',
          },
          {
            latitude: '23.159249640280162',
            longitude: '113.3352488526078',
          },
          {
            latitude: '23.15769699050741',
            longitude: '113.33053480090622',
          },
          {
            latitude: '23.152989048485715',
            longitude: '113.32988279692485',
          },
          {
            latitude: '23.149833934094183',
            longitude: '113.33394476108352',
          },
        ],
        rank: '105',
      },
      {
        hex_id: '884118b051fffff',
        his_order: [
          {
            latitude: '23.159952064733464',
            longitude: '113.31787062023302',
          },
          {
            latitude: '23.15621239335016',
            longitude: '113.31438556678756',
          },
          {
            latitude: '23.158273421475254',
            longitude: '113.31731841897046',
          },
        ],
        order_count: '3',
        points: [
          {
            latitude: '23.154590993016082',
            longitude: '113.32110618380977',
          },
          {
            latitude: '23.15929911282421',
            longitude: '113.321758104192',
          },
          {
            latitude: '23.16245406263028',
            longitude: '113.31769537565152',
          },
          {
            latitude: '23.160900869251382',
            longitude: '113.31298053840023',
          },
          {
            latitude: '23.156192571734323',
            longitude: '113.31232870166754',
          },
          {
            latitude: '23.153037645298593',
            longitude: '113.31639161852394',
          },
        ],
        rank: '106',
      },
      {
        hex_id: '884118b05dfffff',
        his_order: [
          {
            latitude: '23.156614986496166',
            longitude: '113.32925941986419',
          },
          {
            latitude: '23.157332986290026',
            longitude: '113.32805800432237',
          },
          {
            latitude: '23.157153492014736',
            longitude: '113.32836161449919',
          },
        ],
        order_count: '3',
        points: [
          {
            latitude: '23.152989048485715',
            longitude: '113.32988279692485',
          },
          {
            latitude: '23.15769699050741',
            longitude: '113.33053480090622',
          },
          {
            latitude: '23.1608520343666',
            longitude: '113.32647254875172',
          },
          {
            latitude: '23.15929911282421',
            longitude: '113.321758104192',
          },
          {
            latitude: '23.154590993016082',
            longitude: '113.32110618380977',
          },
          {
            latitude: '23.15143597253027',
            longitude: '113.32516862437541',
          },
        ],
        rank: '107',
      },
      {
        hex_id: '884118b223fffff',
        his_order: [
          {
            latitude: '23.14935973873374',
            longitude: '113.34760209006525',
          },
          {
            latitude: '23.141862921593386',
            longitude: '113.34603550681578',
          },
          {
            latitude: '23.14902566139281',
            longitude: '113.34763112400114',
          },
        ],
        order_count: '3',
        points: [
          {
            latitude: '23.141920950095106',
            longitude: '113.35084223899992',
          },
          {
            latitude: '23.14662876106371',
            longitude: '113.35149442593912',
          },
          {
            latitude: '23.149784062833604',
            longitude: '113.34743341494267',
          },
          {
            latitude: '23.148231530201574',
            longitude: '113.34272002836556',
          },
          {
            latitude: '23.143523541218713',
            longitude: '113.34206792490104',
          },
          {
            latitude: '23.14036826287564',
            longitude: '113.34612912452626',
          },
        ],
        rank: '110',
      },
      {
        hex_id: '884118b235fffff',
        his_order: [
          {
            latitude: '23.14972722420425',
            longitude: '113.33394257610024',
          },
          {
            latitude: '23.150334556399606',
            longitude: '113.33767225892691',
          },
          {
            latitude: '23.143106968519607',
            longitude: '113.33885517997189',
          },
        ],
        order_count: '3',
        points: [
          {
            latitude: '23.143523541218713',
            longitude: '113.34206792490104',
          },
          {
            latitude: '23.148231530201574',
            longitude: '113.34272002836556',
          },
          {
            latitude: '23.151386738354464',
            longitude: '113.33865854072998',
          },
          {
            latitude: '23.149833934094183',
            longitude: '113.33394476108352',
          },
          {
            latitude: '23.145125767174502',
            longitude: '113.33329274114405',
          },
          {
            latitude: '23.14197058244543',
            longitude: '113.3373544173133',
          },
        ],
        rank: '111',
      },
      {
        hex_id: '884118b257fffff',
        his_order: [
          {
            latitude: '23.11205098357934',
            longitude: '113.34016773888959',
          },
          {
            latitude: '23.114054572090993',
            longitude: '113.33793333096557',
          },
          {
            latitude: '23.114196296342',
            longitude: '113.33617875433289',
          },
        ],
        order_count: '3',
        points: [
          {
            latitude: '23.10740637941597',
            longitude: '113.34156465024486',
          },
          {
            latitude: '23.11211584650816',
            longitude: '113.34221666636763',
          },
          {
            latitude: '23.11527121747007',
            longitude: '113.33815566557978',
          },
          {
            latitude: '23.11371709767802',
            longitude: '113.33344246017593',
          },
          {
            latitude: '23.109007452439492',
            longitude: '113.33279052755994',
          },
          {
            latitude: '23.105852105132872',
            longitude: '113.3368517168283',
          },
        ],
        rank: '112',
      },
      {
        hex_id: '884118b263fffff',
        his_order: [
          {
            latitude: '23.128899781438484',
            longitude: '113.35973515516554',
          },
          {
            latitude: '23.1288642870678',
            longitude: '113.35944264566253',
          },
          {
            latitude: '23.128873047253485',
            longitude: '113.36176060925227',
          },
        ],
        order_count: '3',
        points: [
          {
            latitude: '23.124591054923883',
            longitude: '113.36643129914434',
          },
          {
            latitude: '23.129299136651248',
            longitude: '113.36708360125122',
          },
          {
            latitude: '23.132454671490038',
            longitude: '113.36302364310752',
          },
          {
            latitude: '23.130902101070195',
            longitude: '113.35831119406585',
          },
          {
            latitude: '23.126193841105348',
            longitude: '113.35765897533577',
          },
          {
            latitude: '23.123038329791346',
            longitude: '113.36171912225785',
          },
        ],
        rank: '113',
      },
      {
        hex_id: '884118b2b7fffff',
        his_order: [
          {
            latitude: '23.159919233925695',
            longitude: '113.2671612496862',
          },
          {
            latitude: '23.158410040509107',
            longitude: '113.26798763201948',
          },
          {
            latitude: '23.16334717859306',
            longitude: '113.26631901405422',
          },
        ],
        order_count: '3',
        points: [
          {
            latitude: '23.156331106425377',
            longitude: '113.27184212816928',
          },
          {
            latitude: '23.161040516731767',
            longitude: '113.27249356202374',
          },
          {
            latitude: '23.16419497075129',
            longitude: '113.26842826546094',
          },
          {
            latitude: '23.162639991058505',
            longitude: '113.26371134725986',
          },
          {
            latitude: '23.157930403435948',
            longitude: '113.26305999733324',
          },
          {
            latitude: '23.154775972815788',
            longitude: '113.26712548166716',
          },
        ],
        rank: '114',
      },
      {
        hex_id: '884118b2ddfffff',
        his_order: [
          {
            latitude: '23.116598923621584',
            longitude: '113.28865805896723',
          },
          {
            latitude: '23.115438095286862',
            longitude: '113.28835558005521',
          },
          {
            latitude: '23.113866367708045',
            longitude: '113.28562598657759',
          },
        ],
        order_count: '3',
        points: [
          {
            latitude: '23.109141704443836',
            longitude: '113.29231892191613',
          },
          {
            latitude: '23.113852463641848',
            longitude: '113.2929704523077',
          },
          {
            latitude: '23.117007342954963',
            longitude: '113.28890688269824',
          },
          {
            latitude: '23.11545143937936',
            longitude: '113.28419159474785',
          },
          {
            latitude: '23.11074050242775',
            longitude: '113.28354014814124',
          },
          {
            latitude: '23.10758564679884',
            longitude: '113.28760390568738',
          },
        ],
        rank: '115',
      },
      {
        hex_id: '884118b2e3fffff',
        his_order: [
          {
            latitude: '23.134702465142674',
            longitude: '113.30070739974634',
          },
          {
            latitude: '23.138901559439784',
            longitude: '113.29688450283433',
          },
          {
            latitude: '23.13454177091423',
            longitude: '113.30095279796417',
          },
        ],
        order_count: '3',
        points: [
          {
            latitude: '23.135802896028675',
            longitude: '113.30500677086374',
          },
          {
            latitude: '23.140512223791653',
            longitude: '113.30565848827605',
          },
          {
            latitude: '23.143667103353522',
            longitude: '113.30159519499114',
          },
          {
            latitude: '23.14211263164241',
            longitude: '113.29687999616861',
          },
          {
            latitude: '23.137403126184477',
            longitude: '113.29622836248546',
          },
          {
            latitude: '23.134248270126108',
            longitude: '113.30029184388296',
          },
        ],
        rank: '116',
      },
      {
        hex_id: '88411d4db5fffff',
        his_order: [
          {
            latitude: '23.11671152886442',
            longitude: '113.23860020324034',
          },
          {
            latitude: '23.117554316206277',
            longitude: '113.23639857126518',
          },
          {
            latitude: '23.110758580881466',
            longitude: '113.23946433933776',
          },
        ],
        order_count: '3',
        points: [
          {
            latitude: '23.11086256883619',
            longitude: '113.24304836370942',
          },
          {
            latitude: '23.11557461804861',
            longitude: '113.2436994068334',
          },
          {
            latitude: '23.118729002092476',
            longitude: '113.23963327233822',
          },
          {
            latitude: '23.117171313204754',
            longitude: '113.23491590731523',
          },
          {
            latitude: '23.112459086632555',
            longitude: '113.2342649482544',
          },
          {
            latitude: '23.10930472630131',
            longitude: '113.23833127014072',
          },
        ],
        rank: '120',
      },
      {
        hex_id: '88411d4ee9fffff',
        his_order: [
          {
            latitude: '22.987924971637913',
            longitude: '113.26602612525998',
          },
          {
            latitude: '22.98833209171796',
            longitude: '113.26589008136192',
          },
          {
            latitude: '22.987983999580326',
            longitude: '113.26603213234782',
          },
        ],
        order_count: '3',
        points: [
          {
            latitude: '22.983466448357273',
            longitude: '113.2659575951124',
          },
          {
            latitude: '22.98818300469743',
            longitude: '113.26660857711128',
          },
          {
            latitude: '22.99133819748892',
            longitude: '113.26254543123274',
          },
          {
            latitude: '22.989776809422636',
            longitude: '113.25783111586345',
          },
          {
            latitude: '22.985060074795612',
            longitude: '113.25718021772418',
          },
          {
            latitude: '22.981904906515254',
            longitude: '113.26124355108188',
          },
        ],
        rank: '121',
      },
      {
        hex_id: '88411d48a5fffff',
        his_order: [
          {
            latitude: '23.097967417464382',
            longitude: '113.3840324889261',
          },
          {
            latitude: '23.097558486186717',
            longitude: '113.38536269693913',
          },
          {
            latitude: '23.09796827891573',
            longitude: '113.38388734985574',
          },
        ],
        order_count: '2',
        points: [
          {
            latitude: '23.09153084837536',
            longitude: '113.38882809703021',
          },
          {
            latitude: '23.09623964716356',
            longitude: '113.38948054573474',
          },
          {
            latitude: '23.09939555130171',
            longitude: '113.38542221670366',
          },
          {
            latitude: '23.09784263292711',
            longitude: '113.38071124997305',
          },
          {
            latitude: '23.093133655532476',
            longitude: '113.38005888449992',
          },
          {
            latitude: '23.08997777511243',
            longitude: '113.38411740251331',
          },
        ],
        rank: '124',
      },
      {
        hex_id: '884118b253fffff',
        his_order: [
          {
            latitude: '23.101882157946665',
            longitude: '113.33035496447154',
          },
          {
            latitude: '23.10162073012966',
            longitude: '113.33071268153022',
          },
          {
            latitude: '23.1017360104616',
            longitude: '113.32978277971702',
          },
        ],
        order_count: '2',
        points: [
          {
            latitude: '23.1011422358674',
            longitude: '113.33619976826694',
          },
          {
            latitude: '23.105852105132872',
            longitude: '113.3368517168283',
          },
          {
            latitude: '23.109007452439492',
            longitude: '113.33279052755994',
          },
          {
            latitude: '23.107452906774373',
            longitude: '113.32807720130465',
          },
          {
            latitude: '23.10274285936721',
            longitude: '113.3274253362766',
          },
          {
            latitude: '23.099587535760378',
            longitude: '113.33148671395779',
          },
        ],
        rank: '125',
      },
      {
        hex_id: '884118b001fffff',
        his_order: [
          {
            latitude: '23.175651682022067',
            longitude: '113.32738887495961',
          },
          {
            latitude: '23.175896749125',
            longitude: '113.3273758649353',
          },
          {
            latitude: '23.175527967765817',
            longitude: '113.32437672129471',
          },
        ],
        order_count: '2',
        points: [
          {
            latitude: '23.17497455704513',
            longitude: '113.32842856444411',
          },
          {
            latitude: '23.179681645712037',
            longitude: '113.32908060411107',
          },
          {
            latitude: '23.182836571156408',
            longitude: '113.32501796436961',
          },
          {
            latitude: '23.181284384693125',
            longitude: '113.32030309652448',
          },
          {
            latitude: '23.17657711838104',
            longitude: '113.31965114047773',
          },
          {
            latitude: '23.173422216170902',
            longitude: '113.32371396864319',
          },
        ],
        rank: '127',
      },
      {
        hex_id: '88411d4d3dfffff',
        his_order: [
          {
            latitude: '23.09235135131379',
            longitude: '113.30146882574547',
          },
          {
            latitude: '23.09537539828446',
            longitude: '113.30763281426093',
          },
          {
            latitude: '23.09619318835297',
            longitude: '113.30790536429463',
          },
        ],
        order_count: '2',
        points: [
          {
            latitude: '23.091810549561202',
            longitude: '113.30791887564693',
          },
          {
            latitude: '23.096521579055988',
            longitude: '113.30857052182401',
          },
          {
            latitude: '23.09967669216641',
            longitude: '113.30450800369299',
          },
          {
            latitude: '23.098120751993026',
            longitude: '113.29979365128514',
          },
          {
            latitude: '23.093409544521194',
            longitude: '113.29914208879508',
          },
          {
            latitude: '23.090254455193296',
            longitude: '113.30320479501316',
          },
        ],
        rank: '128',
      },
      {
        hex_id: '88411d4d37fffff',
        his_order: [
          {
            latitude: '23.101487030283952',
            longitude: '113.29368010571584',
          },
          {
            latitude: '23.103214587949505',
            longitude: '113.28961544861383',
          },
          {
            latitude: '23.10350968797122',
            longitude: '113.29278392715328',
          },
        ],
        order_count: '2',
        points: [
          {
            latitude: '23.101275771511013',
            longitude: '113.2957306572763',
          },
          {
            latitude: '23.105986754930786',
            longitude: '113.29638220372212',
          },
          {
            latitude: '23.109141704443836',
            longitude: '113.29231892191613',
          },
          {
            latitude: '23.10758564679884',
            longitude: '113.28760390568738',
          },
          {
            latitude: '23.102874485552586',
            longitude: '113.28695244300269',
          },
          {
            latitude: '23.0997195597713',
            longitude: '113.2910159127729',
          },
        ],
        rank: '129',
      },
      {
        hex_id: '884118b2a1fffff',
        his_order: [
          {
            latitude: '23.154646013279866',
            longitude: '113.29029383251246',
          },
          {
            latitude: '23.15675671439735',
            longitude: '113.2955736722008',
          },
          {
            latitude: '23.154509557566474',
            longitude: '113.29312585278262',
          },
        ],
        order_count: '1',
        points: [
          {
            latitude: '23.15153101509524',
            longitude: '113.2981833151866',
          },
          {
            latitude: '23.156239892987124',
            longitude: '113.29883500052247',
          },
          {
            latitude: '23.15939463088954',
            longitude: '113.29477113143375',
          },
          {
            latitude: '23.157840467484927',
            longitude: '113.29005538893891',
          },
          {
            latitude: '23.15313141204391',
            longitude: '113.28940378737983',
          },
          {
            latitude: '23.14997669755011',
            longitude: '113.29346784452606',
          },
        ],
        rank: '130',
      },
      {
        hex_id: '884118b227fffff',
        his_order: [
          {
            latitude: '23.15056592801758',
            longitude: '113.34965014069468',
          },
          {
            latitude: '23.152253968896307',
            longitude: '113.35210292531276',
          },
          {
            latitude: '23.148845999687566',
            longitude: '113.35401526358957',
          },
        ],
        order_count: '1',
        points: [
          {
            latitude: '23.148181022134388',
            longitude: '113.35620741928055',
          },
          {
            latitude: '23.152888430332037',
            longitude: '113.35685967375734',
          },
          {
            latitude: '23.15604375548428',
            longitude: '113.3527988514573',
          },
          {
            latitude: '23.154491649050026',
            longitude: '113.34808558597135',
          },
          {
            latitude: '23.149784062833604',
            longitude: '113.34743341494267',
          },
          {
            latitude: '23.14662876106371',
            longitude: '113.35149442593912',
          },
        ],
        rank: '131',
      },
      {
        hex_id: '884118b241fffff',
        his_order: [
          {
            latitude: '23.104021275783698',
            longitude: '113.36323837243069',
          },
          {
            latitude: '23.10124068591148',
            longitude: '113.36295571720431',
          },
          {
            latitude: '23.10404349930473',
            longitude: '113.36337559931033',
          },
        ],
        order_count: '0',
        points: [
          {
            latitude: '23.10260097430255',
            longitude: '113.3678818006407',
          },
          {
            latitude: '23.107309906490855',
            longitude: '113.36853406698182',
          },
          {
            latitude: '23.110465556526783',
            longitude: '113.36447449607685',
          },
          {
            latitude: '23.108912250703515',
            longitude: '113.35976247005259',
          },
          {
            latitude: '23.104203140136462',
            longitude: '113.35911028706725',
          },
          {
            latitude: '23.10104751376497',
            longitude: '113.36317004673768',
          },
        ],
        rank: '132',
      },
      {
        hex_id: '88411886b3fffff',
        his_order: [
          {
            latitude: '23.17160910926187',
            longitude: '113.42452512356365',
          },
          {
            latitude: '23.171651093442698',
            longitude: '113.42456708650988',
          },
          {
            latitude: '23.174702304869687',
            longitude: '113.42156493013158',
          },
        ],
        order_count: '0',
        points: [
          {
            latitude: '23.171437029725137',
            longitude: '113.42688170604414',
          },
          {
            latitude: '23.17614153119424',
            longitude: '113.42753471383767',
          },
          {
            latitude: '23.179297438598233',
            longitude: '113.42347722380987',
          },
          {
            latitude: '23.177748821352345',
            longitude: '113.41876653646769',
          },
          {
            latitude: '23.173044141456458',
            longitude: '113.41811361173767',
          },
          {
            latitude: '23.16988825722678',
            longitude: '113.4221712912736',
          },
        ],
        rank: '134',
      },
      {
        hex_id: '88411d4033fffff',
        his_order: [
          {
            latitude: '22.93671125635949',
            longitude: '113.35673181454555',
          },
          {
            latitude: '22.93671125635949',
            longitude: '113.35673181454555',
          },
          {
            latitude: '22.93671125635949',
            longitude: '113.35673181454555',
          },
        ],
        order_count: '0',
        points: [
          {
            latitude: '22.929748308693668',
            longitude: '113.36194608650874',
          },
          {
            latitude: '22.934464361406555',
            longitude: '113.3625979003682',
          },
          {
            latitude: '22.937620715312857',
            longitude: '113.35854047242002',
          },
          {
            latitude: '22.936060991718143',
            longitude: '113.35383104212762',
          },
          {
            latitude: '22.931344759653648',
            longitude: '113.35317931155677',
          },
          {
            latitude: '22.928188430529083',
            longitude: '113.35723692797703',
          },
        ],
        rank: '135',
      },
      {
        hex_id: '884118b24bfffff',
        his_order: [
          {
            latitude: '23.098934624478566',
            longitude: '113.35796000736077',
          },
          {
            latitude: '23.097632766716103',
            longitude: '113.35599740506723',
          },
          {
            latitude: '23.101293509405668',
            longitude: '113.36282951220034',
          },
        ],
        order_count: '0',
        points: [
          {
            latitude: '23.096338179389637',
            longitude: '113.3625178478783',
          },
          {
            latitude: '23.10104751376497',
            longitude: '113.36317004673768',
          },
          {
            latitude: '23.104203140136462',
            longitude: '113.35911028706725',
          },
          {
            latitude: '23.102649408417154',
            longitude: '113.35439813982693',
          },
          {
            latitude: '23.097939895667636',
            longitude: '113.3537460243499',
          },
          {
            latitude: '23.094784293005148',
            longitude: '113.35780597271815',
          },
        ],
        rank: '136',
      },
    ],
  },
};
`},93783:function(s,v){"use strict";v.Z=`import { GaodeMap, PointLayer, Scene } from '@antv/l7';
import { featureCollection, point } from '@turf/turf';
import React, { useEffect } from 'react';
import { newData } from './newMock';

const jsonToPoint = (json: any) => {
  const geoJsonFeatures = json.heatmap_data.fences.map((fence) => {
    // \u901A\u8FC7his_order\u521B\u5EFA\u70B9\u7279\u5F81
    const pointFeatures = fence.his_order.map((order) => {
      // \u521B\u5EFAGeoJSON\u70B9\u7279\u5F81
      const pointFeature = point(
        [parseFloat(order.longitude), parseFloat(order.latitude)],
        {
          hex_id: fence.hex_id,
          order_count: fence.order_count,
          rank: fence.rank,
          // \u6DFB\u52A0\u66F4\u591A\u5C5E\u6027...
        },
      );
      return pointFeature;
    });

    // \u5C06\u6240\u6709\u70B9\u7279\u5F81\u5408\u5E76\u4E3A\u4E00\u4E2A\u7279\u5F81\u96C6
    return pointFeatures;
  });

  return featureCollection(geoJsonFeatures.flat());
};

export default () => {
  useEffect(() => {
    const scene = new Scene({
      id: 'map',
      map: new GaodeMap({
        center: [113.2493444306987, 23.13099578261949],
        pitch: 0,
        zoom: 10,
        token: '5ae4492ef912cbbc93034fea0e66ff2a',
      }),
    });
    scene.on('loaded', () => {
      const pointLayer = new PointLayer({})
        .source(jsonToPoint(newData))
        .shape('circle')
        .size(5)
        .color('#0f9960');
      scene.addLayer(pointLayer);
    });
  }, []);

  return (
    <div>
      <div id={'map'} style={{ height: 400, position: 'relative' }} />
    </div>
  );
};
`},42943:function(s,v){"use strict";v.Z=`import { GaodeMap, LineLayer, PolygonLayer, Scene } from '@antv/l7';
import { featureCollection, polygon } from '@turf/turf';
import React, { useEffect } from 'react';
import { newData } from './newMock';

const jsonToPolygon = (json: any) => {
  const data = json.heatmap_data.fences.map((item) => {
    const newPoints = item.points.map((point) => {
      return [+point.longitude, +point.latitude];
    });
    const polygonData = polygon([[...newPoints, [...newPoints[0]]]], {
      ...item,
    });
    return polygonData;
  });
  return featureCollection(data);
};

export default () => {
  useEffect(() => {
    const scene = new Scene({
      id: 'map',
      map: new GaodeMap({
        center: [113.2493444306987, 23.13099578261949],
        pitch: 0,
        zoom: 10,
        token: '5ae4492ef912cbbc93034fea0e66ff2a',
      }),
    });
    scene.on('loaded', () => {
      const hexLayer = new PolygonLayer({})
        .source(jsonToPolygon(newData))
        .color('order_count', [
          'rgb(253,204,138)',
          'rgb(252,141,89)',
          'rgb(227,74,51)',
          'rgb(179,0,0)',
        ])
        .shape('fill')
        .active(true)
        .style({
          opacity: 0.6,
        });

      const lineLayer = new LineLayer({
        zIndex: 2,
      })
        .source(jsonToPolygon(newData))
        .color('#fff')
        .size(0.8);

      scene.addLayer(hexLayer);
      scene.addLayer(lineLayer);
    });
  }, []);

  return (
    <div>
      <div id={'map'} style={{ height: 400, position: 'relative' }} />
    </div>
  );
};
`},44516:function(s,v,e){"use strict";e.d(v,{ZP:function(){return ze}});var o=e(80268),a=e(74710),r=e(39718),l=e(91002),i=e(12124),d=e.n(i),f=e(58035),g=e(88831),h=e(71062),p=null,m=h.createContext({});function E(We){var Pe=We.children,Xe=_objectWithoutProperties(We,p);return React.createElement(m.Provider,{value:Xe},Pe)}var b=e(74809),w=e(57338),x=e(29161),R=e(12826),P=function(We){(0,x.Z)(Xe,We);var Pe=(0,R.Z)(Xe);function Xe(){return(0,b.Z)(this,Xe),Pe.apply(this,arguments)}return(0,w.Z)(Xe,[{key:"render",value:function(){return this.props.children}}]),Xe}(h.Component),j=P,N=e(30462),F="none",A="appear",k="enter",z="leave",K="none",ee="prepare",J="start",ce="active",Te="end",Oe="prepared",Ne=e(42871);function _e(We,Pe){var Xe={};return Xe[We.toLowerCase()]=Pe.toLowerCase(),Xe["Webkit".concat(We)]="webkit".concat(Pe),Xe["Moz".concat(We)]="moz".concat(Pe),Xe["ms".concat(We)]="MS".concat(Pe),Xe["O".concat(We)]="o".concat(Pe.toLowerCase()),Xe}function je(We,Pe){var Xe={animationend:_e("Animation","AnimationEnd"),transitionend:_e("Transition","TransitionEnd")};return We&&("AnimationEvent"in Pe||delete Xe.animationend.animation,"TransitionEvent"in Pe||delete Xe.transitionend.transition),Xe}var q=je((0,Ne.Z)(),typeof window!="undefined"?window:{}),re={};if((0,Ne.Z)()){var ae=document.createElement("div");re=ae.style}var O={};function L(We){if(O[We])return O[We];var Pe=q[We];if(Pe)for(var Xe=Object.keys(Pe),ct=Xe.length,Ve=0;Ve<ct;Ve+=1){var Pt=Xe[Ve];if(Object.prototype.hasOwnProperty.call(Pe,Pt)&&Pt in re)return O[We]=Pe[Pt],O[We]}return""}var W=L("animationend"),V=L("transitionend"),G=!!(W&&V),I=W||"animationend",H=V||"transitionend";function $(We,Pe){if(!We)return null;if((0,l.Z)(We)==="object"){var Xe=Pe.replace(/-\w/g,function(ct){return ct[1].toUpperCase()});return We[Xe]}return"".concat(We,"-").concat(Pe)}var Y=function(We){var Pe=(0,h.useRef)(),Xe=(0,h.useRef)(We);Xe.current=We;var ct=h.useCallback(function(xe){Xe.current(xe)},[]);function Ve(xe){xe&&(xe.removeEventListener(H,ct),xe.removeEventListener(I,ct))}function Pt(xe){Pe.current&&Pe.current!==xe&&Ve(Pe.current),xe&&xe!==Pe.current&&(xe.addEventListener(H,ct),xe.addEventListener(I,ct),Pe.current=xe)}return h.useEffect(function(){return function(){Ve(Pe.current)}},[]),[Pt,Ve]},X=(0,Ne.Z)()?h.useLayoutEffect:h.useEffect,Re=X,Fe=e(90571),at=function(){var We=h.useRef(null);function Pe(){Fe.Z.cancel(We.current)}function Xe(ct){var Ve=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2;Pe();var Pt=(0,Fe.Z)(function(){Ve<=1?ct({isCanceled:function(){return Pt!==We.current}}):Xe(ct,Ve-1)});We.current=Pt}return h.useEffect(function(){return function(){Pe()}},[]),[Xe,Pe]},et=[ee,J,ce,Te],Ke=[ee,Oe],ot=!1,te=!0;function fe(We){return We===ce||We===Te}var pe=function(We,Pe,Xe){var ct=(0,N.Z)(K),Ve=(0,r.Z)(ct,2),Pt=Ve[0],xe=Ve[1],tt=at(),Ze=(0,r.Z)(tt,2),Le=Ze[0],ut=Ze[1];function st(){xe(ee,!0)}var bt=Pe?Ke:et;return Re(function(){if(Pt!==K&&Pt!==Te){var kt=bt.indexOf(Pt),Kt=bt[kt+1],xn=Xe(Pt);xn===ot?xe(Kt,!0):Kt&&Le(function(dn){function In(){dn.isCanceled()||xe(Kt,!0)}xn===!0?In():Promise.resolve(xn).then(In)})}},[We,Pt]),h.useEffect(function(){return function(){ut()}},[]),[st,Pt]};function me(We,Pe,Xe,ct){var Ve=ct.motionEnter,Pt=Ve===void 0?!0:Ve,xe=ct.motionAppear,tt=xe===void 0?!0:xe,Ze=ct.motionLeave,Le=Ze===void 0?!0:Ze,ut=ct.motionDeadline,st=ct.motionLeaveImmediately,bt=ct.onAppearPrepare,kt=ct.onEnterPrepare,Kt=ct.onLeavePrepare,xn=ct.onAppearStart,dn=ct.onEnterStart,In=ct.onLeaveStart,Bn=ct.onAppearActive,Ar=ct.onEnterActive,Br=ct.onLeaveActive,wt=ct.onAppearEnd,dt=ct.onEnterEnd,pt=ct.onLeaveEnd,Ut=ct.onVisibleChanged,on=(0,N.Z)(),qt=(0,r.Z)(on,2),Ln=qt[0],ar=qt[1],Gn=(0,N.Z)(F),Gr=(0,r.Z)(Gn,2),Fn=Gr[0],Dr=Gr[1],ni=(0,N.Z)(null),sr=(0,r.Z)(ni,2),wi=sr[0],za=sr[1],ri=(0,h.useRef)(!1),bo=(0,h.useRef)(null);function _o(){return Xe()}var jo=(0,h.useRef)(!1);function xo(){Dr(F,!0),za(null,!0)}function pa(Kr){var Fr=_o();if(!(Kr&&!Kr.deadline&&Kr.target!==Fr)){var Pr=jo.current,Ia;Fn===A&&Pr?Ia=wt==null?void 0:wt(Fr,Kr):Fn===k&&Pr?Ia=dt==null?void 0:dt(Fr,Kr):Fn===z&&Pr&&(Ia=pt==null?void 0:pt(Fr,Kr)),Fn!==F&&Pr&&Ia!==!1&&xo()}}var Ii=Y(pa),wa=(0,r.Z)(Ii,1),Hi=wa[0],Qu=function(Fr){var Pr,Ia,Ta;switch(Fr){case A:return Pr={},(0,o.Z)(Pr,ee,bt),(0,o.Z)(Pr,J,xn),(0,o.Z)(Pr,ce,Bn),Pr;case k:return Ia={},(0,o.Z)(Ia,ee,kt),(0,o.Z)(Ia,J,dn),(0,o.Z)(Ia,ce,Ar),Ia;case z:return Ta={},(0,o.Z)(Ta,ee,Kt),(0,o.Z)(Ta,J,In),(0,o.Z)(Ta,ce,Br),Ta;default:return{}}},$a=h.useMemo(function(){return Qu(Fn)},[Fn]),to=pe(Fn,!We,function(Kr){if(Kr===ee){var Fr=$a[ee];return Fr?Fr(_o()):ot}if(_a in $a){var Pr;za(((Pr=$a[_a])===null||Pr===void 0?void 0:Pr.call($a,_o(),null))||null)}return _a===ce&&(Hi(_o()),ut>0&&(clearTimeout(bo.current),bo.current=setTimeout(function(){pa({deadline:!0})},ut))),_a===Oe&&xo(),te}),wo=(0,r.Z)(to,2),Io=wo[0],_a=wo[1],du=fe(_a);jo.current=du,Re(function(){ar(Pe);var Kr=ri.current;ri.current=!0;var Fr;!Kr&&Pe&&tt&&(Fr=A),Kr&&Pe&&Pt&&(Fr=k),(Kr&&!Pe&&Le||!Kr&&st&&!Pe&&Le)&&(Fr=z);var Pr=Qu(Fr);Fr&&(We||Pr[ee])?(Dr(Fr),Io()):Dr(F)},[Pe]),(0,h.useEffect)(function(){(Fn===A&&!tt||Fn===k&&!Pt||Fn===z&&!Le)&&Dr(F)},[tt,Pt,Le]),(0,h.useEffect)(function(){return function(){ri.current=!1,clearTimeout(bo.current)}},[]);var Ti=h.useRef(!1);(0,h.useEffect)(function(){Ln&&(Ti.current=!0),Ln!==void 0&&Fn===F&&((Ti.current||Ln)&&(Ut==null||Ut(Ln)),Ti.current=!0)},[Ln,Fn]);var To=wi;return $a[ee]&&_a===J&&(To=(0,a.Z)({transition:"none"},To)),[Fn,_a,To,Ln!=null?Ln:Pe]}function Ie(We){var Pe=We;(0,l.Z)(We)==="object"&&(Pe=We.transitionSupport);function Xe(Ve,Pt){return!!(Ve.motionName&&Pe&&Pt!==!1)}var ct=h.forwardRef(function(Ve,Pt){var xe=Ve.visible,tt=xe===void 0?!0:xe,Ze=Ve.removeOnLeave,Le=Ze===void 0?!0:Ze,ut=Ve.forceRender,st=Ve.children,bt=Ve.motionName,kt=Ve.leavedClassName,Kt=Ve.eventProps,xn=h.useContext(m),dn=xn.motion,In=Xe(Ve,dn),Bn=(0,h.useRef)(),Ar=(0,h.useRef)();function Br(){try{return Bn.current instanceof HTMLElement?Bn.current:(0,f.Z)(Ar.current)}catch(za){return null}}var wt=me(In,tt,Br,Ve),dt=(0,r.Z)(wt,4),pt=dt[0],Ut=dt[1],on=dt[2],qt=dt[3],Ln=h.useRef(qt);qt&&(Ln.current=!0);var ar=h.useCallback(function(za){Bn.current=za,(0,g.mH)(Pt,za)},[Pt]),Gn,Gr=(0,a.Z)((0,a.Z)({},Kt),{},{visible:tt});if(!st)Gn=null;else if(pt===F)qt?Gn=st((0,a.Z)({},Gr),ar):!Le&&Ln.current&&kt?Gn=st((0,a.Z)((0,a.Z)({},Gr),{},{className:kt}),ar):ut||!Le&&!kt?Gn=st((0,a.Z)((0,a.Z)({},Gr),{},{style:{display:"none"}}),ar):Gn=null;else{var Fn,Dr;Ut===ee?Dr="prepare":fe(Ut)?Dr="active":Ut===J&&(Dr="start");var ni=$(bt,"".concat(pt,"-").concat(Dr));Gn=st((0,a.Z)((0,a.Z)({},Gr),{},{className:d()($(bt,pt),(Fn={},(0,o.Z)(Fn,ni,ni&&Dr),(0,o.Z)(Fn,bt,typeof bt=="string"),Fn)),style:on}),ar)}if(h.isValidElement(Gn)&&(0,g.Yr)(Gn)){var sr=Gn,wi=sr.ref;wi||(Gn=h.cloneElement(Gn,{ref:ar}))}return h.createElement(j,{ref:Ar},Gn)});return ct.displayName="CSSMotion",ct}var ue=Ie(G),ve=e(26508),Ee=e(52528),le=e(9967),ye="add",Be="keep",oe="remove",he="removed";function Ae(We){var Pe;return We&&(0,l.Z)(We)==="object"&&"key"in We?Pe=We:Pe={key:We},(0,a.Z)((0,a.Z)({},Pe),{},{key:String(Pe.key)})}function Ue(){var We=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return We.map(Ae)}function He(){var We=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],Pe=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],Xe=[],ct=0,Ve=Pe.length,Pt=Ue(We),xe=Ue(Pe);Pt.forEach(function(Le){for(var ut=!1,st=ct;st<Ve;st+=1){var bt=xe[st];if(bt.key===Le.key){ct<st&&(Xe=Xe.concat(xe.slice(ct,st).map(function(kt){return(0,a.Z)((0,a.Z)({},kt),{},{status:ye})})),ct=st),Xe.push((0,a.Z)((0,a.Z)({},bt),{},{status:Be})),ct+=1,ut=!0;break}}ut||Xe.push((0,a.Z)((0,a.Z)({},Le),{},{status:oe}))}),ct<Ve&&(Xe=Xe.concat(xe.slice(ct).map(function(Le){return(0,a.Z)((0,a.Z)({},Le),{},{status:ye})})));var tt={};Xe.forEach(function(Le){var ut=Le.key;tt[ut]=(tt[ut]||0)+1});var Ze=Object.keys(tt).filter(function(Le){return tt[Le]>1});return Ze.forEach(function(Le){Xe=Xe.filter(function(ut){var st=ut.key,bt=ut.status;return st!==Le||bt!==oe}),Xe.forEach(function(ut){ut.key===Le&&(ut.status=Be)})}),Xe}var it=["component","children","onVisibleChanged","onAllRemoved"],y=["status"],Q=["eventProps","visible","children","motionName","motionAppear","motionEnter","motionLeave","motionLeaveImmediately","motionDeadline","removeOnLeave","leavedClassName","onAppearPrepare","onAppearStart","onAppearActive","onAppearEnd","onEnterStart","onEnterActive","onEnterEnd","onLeaveStart","onLeaveActive","onLeaveEnd"];function be(We){var Pe=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ue,Xe=function(ct){(0,x.Z)(Pt,ct);var Ve=(0,R.Z)(Pt);function Pt(){var xe;(0,b.Z)(this,Pt);for(var tt=arguments.length,Ze=new Array(tt),Le=0;Le<tt;Le++)Ze[Le]=arguments[Le];return xe=Ve.call.apply(Ve,[this].concat(Ze)),(0,o.Z)((0,le.Z)(xe),"state",{keyEntities:[]}),(0,o.Z)((0,le.Z)(xe),"removeKey",function(ut){var st=xe.state.keyEntities,bt=st.map(function(kt){return kt.key!==ut?kt:(0,a.Z)((0,a.Z)({},kt),{},{status:he})});return xe.setState({keyEntities:bt}),bt.filter(function(kt){var Kt=kt.status;return Kt!==he}).length}),xe}return(0,w.Z)(Pt,[{key:"render",value:function(){var tt=this,Ze=this.state.keyEntities,Le=this.props,ut=Le.component,st=Le.children,bt=Le.onVisibleChanged,kt=Le.onAllRemoved,Kt=(0,Ee.Z)(Le,it),xn=ut||h.Fragment,dn={};return Q.forEach(function(In){dn[In]=Kt[In],delete Kt[In]}),delete Kt.keys,h.createElement(xn,Kt,Ze.map(function(In,Bn){var Ar=In.status,Br=(0,Ee.Z)(In,y),wt=Ar===ye||Ar===Be;return h.createElement(Pe,(0,ve.Z)({},dn,{key:Br.key,visible:wt,eventProps:Br,onVisibleChanged:function(pt){if(bt==null||bt(pt,{key:Br.key}),!pt){var Ut=tt.removeKey(Br.key);Ut===0&&kt&&kt()}}}),function(dt,pt){return st((0,a.Z)((0,a.Z)({},dt),{},{index:Bn}),pt)})}))}}],[{key:"getDerivedStateFromProps",value:function(tt,Ze){var Le=tt.keys,ut=Ze.keyEntities,st=Ue(Le),bt=He(ut,st);return{keyEntities:bt.filter(function(kt){var Kt=ut.find(function(xn){var dn=xn.key;return kt.key===dn});return!(Kt&&Kt.status===he&&kt.status===oe)})}}}]),Pt}(h.Component);return(0,o.Z)(Xe,"defaultProps",{component:"div"}),Xe}var we=be(G),ze=ue},10933:function(s,v,e){"use strict";e.d(v,{Z:function(){return Ee}});var o=e(26508),a=e(71062),r=e(45659),l=e(36014),i=e(74710),d=e(91002),f=e(58035),g=e(88831),h=a.createContext(null);function p(le){var ye=le.children,Be=le.onBatchResize,oe=a.useRef(0),he=a.useRef([]),Ae=a.useContext(h),Ue=a.useCallback(function(He,it,y){oe.current+=1;var Q=oe.current;he.current.push({size:He,element:it,data:y}),Promise.resolve().then(function(){Q===oe.current&&(Be==null||Be(he.current),he.current=[])}),Ae==null||Ae(He,it,y)},[Be,Ae]);return a.createElement(h.Provider,{value:Ue},ye)}var m=function(){if(typeof Map!="undefined")return Map;function le(ye,Be){var oe=-1;return ye.some(function(he,Ae){return he[0]===Be?(oe=Ae,!0):!1}),oe}return function(){function ye(){this.__entries__=[]}return Object.defineProperty(ye.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),ye.prototype.get=function(Be){var oe=le(this.__entries__,Be),he=this.__entries__[oe];return he&&he[1]},ye.prototype.set=function(Be,oe){var he=le(this.__entries__,Be);~he?this.__entries__[he][1]=oe:this.__entries__.push([Be,oe])},ye.prototype.delete=function(Be){var oe=this.__entries__,he=le(oe,Be);~he&&oe.splice(he,1)},ye.prototype.has=function(Be){return!!~le(this.__entries__,Be)},ye.prototype.clear=function(){this.__entries__.splice(0)},ye.prototype.forEach=function(Be,oe){oe===void 0&&(oe=null);for(var he=0,Ae=this.__entries__;he<Ae.length;he++){var Ue=Ae[he];Be.call(oe,Ue[1],Ue[0])}},ye}()}(),E=typeof window!="undefined"&&typeof document!="undefined"&&window.document===document,b=function(){return typeof e.g!="undefined"&&e.g.Math===Math?e.g:typeof self!="undefined"&&self.Math===Math?self:typeof window!="undefined"&&window.Math===Math?window:Function("return this")()}(),w=function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(b):function(le){return setTimeout(function(){return le(Date.now())},1e3/60)}}(),x=2;function R(le,ye){var Be=!1,oe=!1,he=0;function Ae(){Be&&(Be=!1,le()),oe&&He()}function Ue(){w(Ae)}function He(){var it=Date.now();if(Be){if(it-he<x)return;oe=!0}else Be=!0,oe=!1,setTimeout(Ue,ye);he=it}return He}var P=20,j=["top","right","bottom","left","width","height","size","weight"],N=typeof MutationObserver!="undefined",F=function(){function le(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=R(this.refresh.bind(this),P)}return le.prototype.addObserver=function(ye){~this.observers_.indexOf(ye)||this.observers_.push(ye),this.connected_||this.connect_()},le.prototype.removeObserver=function(ye){var Be=this.observers_,oe=Be.indexOf(ye);~oe&&Be.splice(oe,1),!Be.length&&this.connected_&&this.disconnect_()},le.prototype.refresh=function(){var ye=this.updateObservers_();ye&&this.refresh()},le.prototype.updateObservers_=function(){var ye=this.observers_.filter(function(Be){return Be.gatherActive(),Be.hasActive()});return ye.forEach(function(Be){return Be.broadcastActive()}),ye.length>0},le.prototype.connect_=function(){!E||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),N?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},le.prototype.disconnect_=function(){!E||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},le.prototype.onTransitionEnd_=function(ye){var Be=ye.propertyName,oe=Be===void 0?"":Be,he=j.some(function(Ae){return!!~oe.indexOf(Ae)});he&&this.refresh()},le.getInstance=function(){return this.instance_||(this.instance_=new le),this.instance_},le.instance_=null,le}(),A=function(le,ye){for(var Be=0,oe=Object.keys(ye);Be<oe.length;Be++){var he=oe[Be];Object.defineProperty(le,he,{value:ye[he],enumerable:!1,writable:!1,configurable:!0})}return le},k=function(le){var ye=le&&le.ownerDocument&&le.ownerDocument.defaultView;return ye||b},z=q(0,0,0,0);function K(le){return parseFloat(le)||0}function ee(le){for(var ye=[],Be=1;Be<arguments.length;Be++)ye[Be-1]=arguments[Be];return ye.reduce(function(oe,he){var Ae=le["border-"+he+"-width"];return oe+K(Ae)},0)}function J(le){for(var ye=["top","right","bottom","left"],Be={},oe=0,he=ye;oe<he.length;oe++){var Ae=he[oe],Ue=le["padding-"+Ae];Be[Ae]=K(Ue)}return Be}function ce(le){var ye=le.getBBox();return q(0,0,ye.width,ye.height)}function Te(le){var ye=le.clientWidth,Be=le.clientHeight;if(!ye&&!Be)return z;var oe=k(le).getComputedStyle(le),he=J(oe),Ae=he.left+he.right,Ue=he.top+he.bottom,He=K(oe.width),it=K(oe.height);if(oe.boxSizing==="border-box"&&(Math.round(He+Ae)!==ye&&(He-=ee(oe,"left","right")+Ae),Math.round(it+Ue)!==Be&&(it-=ee(oe,"top","bottom")+Ue)),!Ne(le)){var y=Math.round(He+Ae)-ye,Q=Math.round(it+Ue)-Be;Math.abs(y)!==1&&(He-=y),Math.abs(Q)!==1&&(it-=Q)}return q(he.left,he.top,He,it)}var Oe=function(){return typeof SVGGraphicsElement!="undefined"?function(le){return le instanceof k(le).SVGGraphicsElement}:function(le){return le instanceof k(le).SVGElement&&typeof le.getBBox=="function"}}();function Ne(le){return le===k(le).document.documentElement}function _e(le){return E?Oe(le)?ce(le):Te(le):z}function je(le){var ye=le.x,Be=le.y,oe=le.width,he=le.height,Ae=typeof DOMRectReadOnly!="undefined"?DOMRectReadOnly:Object,Ue=Object.create(Ae.prototype);return A(Ue,{x:ye,y:Be,width:oe,height:he,top:Be,right:ye+oe,bottom:he+Be,left:ye}),Ue}function q(le,ye,Be,oe){return{x:le,y:ye,width:Be,height:oe}}var re=function(){function le(ye){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=q(0,0,0,0),this.target=ye}return le.prototype.isActive=function(){var ye=_e(this.target);return this.contentRect_=ye,ye.width!==this.broadcastWidth||ye.height!==this.broadcastHeight},le.prototype.broadcastRect=function(){var ye=this.contentRect_;return this.broadcastWidth=ye.width,this.broadcastHeight=ye.height,ye},le}(),ae=function(){function le(ye,Be){var oe=je(Be);A(this,{target:ye,contentRect:oe})}return le}(),O=function(){function le(ye,Be,oe){if(this.activeObservations_=[],this.observations_=new m,typeof ye!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=ye,this.controller_=Be,this.callbackCtx_=oe}return le.prototype.observe=function(ye){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element=="undefined"||!(Element instanceof Object))){if(!(ye instanceof k(ye).Element))throw new TypeError('parameter 1 is not of type "Element".');var Be=this.observations_;Be.has(ye)||(Be.set(ye,new re(ye)),this.controller_.addObserver(this),this.controller_.refresh())}},le.prototype.unobserve=function(ye){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element=="undefined"||!(Element instanceof Object))){if(!(ye instanceof k(ye).Element))throw new TypeError('parameter 1 is not of type "Element".');var Be=this.observations_;Be.has(ye)&&(Be.delete(ye),Be.size||this.controller_.removeObserver(this))}},le.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},le.prototype.gatherActive=function(){var ye=this;this.clearActive(),this.observations_.forEach(function(Be){Be.isActive()&&ye.activeObservations_.push(Be)})},le.prototype.broadcastActive=function(){if(this.hasActive()){var ye=this.callbackCtx_,Be=this.activeObservations_.map(function(oe){return new ae(oe.target,oe.broadcastRect())});this.callback_.call(ye,Be,ye),this.clearActive()}},le.prototype.clearActive=function(){this.activeObservations_.splice(0)},le.prototype.hasActive=function(){return this.activeObservations_.length>0},le}(),L=typeof WeakMap!="undefined"?new WeakMap:new m,W=function(){function le(ye){if(!(this instanceof le))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var Be=F.getInstance(),oe=new O(ye,Be,this);L.set(this,oe)}return le}();["observe","unobserve","disconnect"].forEach(function(le){W.prototype[le]=function(){var ye;return(ye=L.get(this))[le].apply(ye,arguments)}});var V=function(){return typeof b.ResizeObserver!="undefined"?b.ResizeObserver:W}(),G=V,I=new Map;function H(le){le.forEach(function(ye){var Be,oe=ye.target;(Be=I.get(oe))===null||Be===void 0||Be.forEach(function(he){return he(oe)})})}var $=new G(H),Y=null,X=null;function Re(le,ye){I.has(le)||(I.set(le,new Set),$.observe(le)),I.get(le).add(ye)}function Fe(le,ye){I.has(le)&&(I.get(le).delete(ye),I.get(le).size||($.unobserve(le),I.delete(le)))}var at=e(74809),et=e(57338),Ke=e(29161),ot=e(12826),te=function(le){(0,Ke.Z)(Be,le);var ye=(0,ot.Z)(Be);function Be(){return(0,at.Z)(this,Be),ye.apply(this,arguments)}return(0,et.Z)(Be,[{key:"render",value:function(){return this.props.children}}]),Be}(a.Component);function fe(le,ye){var Be=le.children,oe=le.disabled,he=a.useRef(null),Ae=a.useRef(null),Ue=a.useContext(h),He=typeof Be=="function",it=He?Be(he):Be,y=a.useRef({width:-1,height:-1,offsetWidth:-1,offsetHeight:-1}),Q=!He&&a.isValidElement(it)&&(0,g.Yr)(it),be=Q?it.ref:null,we=(0,g.x1)(be,he),ze=function(){var ct;return(0,f.Z)(he.current)||(he.current&&(0,d.Z)(he.current)==="object"?(0,f.Z)((ct=he.current)===null||ct===void 0?void 0:ct.nativeElement):null)||(0,f.Z)(Ae.current)};a.useImperativeHandle(ye,function(){return ze()});var We=a.useRef(le);We.current=le;var Pe=a.useCallback(function(Xe){var ct=We.current,Ve=ct.onResize,Pt=ct.data,xe=Xe.getBoundingClientRect(),tt=xe.width,Ze=xe.height,Le=Xe.offsetWidth,ut=Xe.offsetHeight,st=Math.floor(tt),bt=Math.floor(Ze);if(y.current.width!==st||y.current.height!==bt||y.current.offsetWidth!==Le||y.current.offsetHeight!==ut){var kt={width:st,height:bt,offsetWidth:Le,offsetHeight:ut};y.current=kt;var Kt=Le===Math.round(tt)?tt:Le,xn=ut===Math.round(Ze)?Ze:ut,dn=(0,i.Z)((0,i.Z)({},kt),{},{offsetWidth:Kt,offsetHeight:xn});Ue==null||Ue(dn,Xe,Pt),Ve&&Promise.resolve().then(function(){Ve(dn,Xe)})}},[]);return a.useEffect(function(){var Xe=ze();return Xe&&!oe&&Re(Xe,Pe),function(){return Fe(Xe,Pe)}},[he.current,oe]),a.createElement(te,{ref:Ae},Q?a.cloneElement(it,{ref:we}):it)}var pe=a.forwardRef(fe),me=pe,Ie="rc-observer-key";function ue(le,ye){var Be=le.children,oe=typeof Be=="function"?[Be]:(0,r.Z)(Be);return oe.map(function(he,Ae){var Ue=(he==null?void 0:he.key)||"".concat(Ie,"-").concat(Ae);return a.createElement(me,(0,o.Z)({},le,{key:Ue,ref:Ae===0?ye:void 0}),he)})}var ve=a.forwardRef(ue);ve.Collection=p;var Ee=ve},45659:function(s,v,e){"use strict";e.d(v,{Z:function(){return r}});var o=e(71062),a=e(92888);function r(l){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},d=[];return o.Children.forEach(l,function(f){f==null&&!i.keepEmpty||(Array.isArray(f)?d=d.concat(r(f)):(0,a.isFragment)(f)&&f.props?d=d.concat(r(f.props.children,i)):d.push(f))}),d}},42871:function(s,v,e){"use strict";e.d(v,{Z:function(){return o}});function o(){return!!(typeof window!="undefined"&&window.document&&window.document.createElement)}},58035:function(s,v,e){"use strict";e.d(v,{S:function(){return r},Z:function(){return l}});var o=e(71062),a=e(57160);function r(i){return i instanceof HTMLElement||i instanceof SVGElement}function l(i){return r(i)?i:i instanceof o.Component?a.findDOMNode(i):null}},84821:function(s,v){"use strict";var e={MAC_ENTER:3,BACKSPACE:8,TAB:9,NUM_CENTER:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,PRINT_SCREEN:44,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,QUESTION_MARK:63,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,META:91,WIN_KEY_RIGHT:92,CONTEXT_MENU:93,NUM_ZERO:96,NUM_ONE:97,NUM_TWO:98,NUM_THREE:99,NUM_FOUR:100,NUM_FIVE:101,NUM_SIX:102,NUM_SEVEN:103,NUM_EIGHT:104,NUM_NINE:105,NUM_MULTIPLY:106,NUM_PLUS:107,NUM_MINUS:109,NUM_PERIOD:110,NUM_DIVISION:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLOCK:144,SEMICOLON:186,DASH:189,EQUALS:187,COMMA:188,PERIOD:190,SLASH:191,APOSTROPHE:192,SINGLE_QUOTE:222,OPEN_SQUARE_BRACKET:219,BACKSLASH:220,CLOSE_SQUARE_BRACKET:221,WIN_KEY:224,MAC_FF_META:224,WIN_IME:229,isTextModifyingKeyEvent:function(a){var r=a.keyCode;if(a.altKey&&!a.ctrlKey||a.metaKey||r>=e.F1&&r<=e.F12)return!1;switch(r){case e.ALT:case e.CAPS_LOCK:case e.CONTEXT_MENU:case e.CTRL:case e.DOWN:case e.END:case e.ESC:case e.HOME:case e.INSERT:case e.LEFT:case e.MAC_FF_META:case e.META:case e.NUMLOCK:case e.NUM_CENTER:case e.PAGE_DOWN:case e.PAGE_UP:case e.PAUSE:case e.PRINT_SCREEN:case e.RIGHT:case e.SHIFT:case e.UP:case e.WIN_KEY:case e.WIN_KEY_RIGHT:return!1;default:return!0}},isCharacterKey:function(a){if(a>=e.ZERO&&a<=e.NINE||a>=e.NUM_ZERO&&a<=e.NUM_MULTIPLY||a>=e.A&&a<=e.Z||window.navigator.userAgent.indexOf("WebKit")!==-1&&a===0)return!0;switch(a){case e.SPACE:case e.QUESTION_MARK:case e.NUM_PLUS:case e.NUM_MINUS:case e.NUM_PERIOD:case e.NUM_DIVISION:case e.SEMICOLON:case e.DASH:case e.EQUALS:case e.COMMA:case e.PERIOD:case e.SLASH:case e.APOSTROPHE:case e.SINGLE_QUOTE:case e.OPEN_SQUARE_BRACKET:case e.BACKSLASH:case e.CLOSE_SQUARE_BRACKET:return!0;default:return!1}}};v.Z=e},60402:function(s,v,e){"use strict";e.d(v,{Z:function(){return a}});var o=e(71062);function a(r){var l=o.useRef();l.current=r;var i=o.useCallback(function(){for(var d,f=arguments.length,g=new Array(f),h=0;h<f;h++)g[h]=arguments[h];return(d=l.current)===null||d===void 0?void 0:d.call.apply(d,[l].concat(g))},[]);return i}},70658:function(s,v,e){"use strict";e.d(v,{o:function(){return i}});var o=e(71062),a=e(42871),r=(0,a.Z)()?o.useLayoutEffect:o.useEffect,l=function(f,g){var h=o.useRef(!0);r(function(){return f(h.current)},g),r(function(){return h.current=!1,function(){h.current=!0}},[])},i=function(f,g){l(function(h){if(!h)return f()},g)};v.Z=l},4065:function(s,v,e){"use strict";e.d(v,{Z:function(){return a}});var o=e(71062);function a(r,l,i){var d=o.useRef({});return(!("value"in d.current)||i(d.current.condition,l))&&(d.current.value=r(),d.current.condition=l),d.current.value}},84381:function(s,v,e){"use strict";e.d(v,{Z:function(){return d}});var o=e(39718),a=e(60402),r=e(70658),l=e(30462);function i(f){return f!==void 0}function d(f,g){var h=g||{},p=h.defaultValue,m=h.value,E=h.onChange,b=h.postState,w=(0,l.Z)(function(){return i(m)?m:i(p)?typeof p=="function"?p():p:typeof f=="function"?f():f}),x=(0,o.Z)(w,2),R=x[0],P=x[1],j=m!==void 0?m:R,N=b?b(j):j,F=(0,a.Z)(E),A=(0,l.Z)([j]),k=(0,o.Z)(A,2),z=k[0],K=k[1];(0,r.o)(function(){var J=z[0];R!==J&&F(R,J)},[z]),(0,r.o)(function(){i(m)||P(m)},[m]);var ee=(0,a.Z)(function(J,ce){P(J,ce),K([j],ce)});return[N,ee]}},30462:function(s,v,e){"use strict";e.d(v,{Z:function(){return r}});var o=e(39718),a=e(71062);function r(l){var i=a.useRef(!1),d=a.useState(l),f=(0,o.Z)(d,2),g=f[0],h=f[1];a.useEffect(function(){return i.current=!1,function(){i.current=!0}},[]);function p(m,E){E&&i.current||h(m)}return[g,p]}},99468:function(s,v,e){"use strict";e.d(v,{Z:function(){return a}});var o=e(74710);function a(r,l){var i=(0,o.Z)({},r);return Array.isArray(l)&&l.forEach(function(d){delete i[d]}),i}},90571:function(s,v){"use strict";var e=function(f){return+setTimeout(f,16)},o=function(f){return clearTimeout(f)};typeof window!="undefined"&&"requestAnimationFrame"in window&&(e=function(f){return window.requestAnimationFrame(f)},o=function(f){return window.cancelAnimationFrame(f)});var a=0,r=new Map;function l(d){r.delete(d)}var i=function(f){var g=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;a+=1;var h=a;function p(m){if(m===0)l(h),f();else{var E=e(function(){p(m-1)});r.set(h,E)}}return p(g),h};i.cancel=function(d){var f=r.get(d);return l(d),o(f)},v.Z=i},88831:function(s,v,e){"use strict";e.d(v,{Yr:function(){return g},mH:function(){return i},sQ:function(){return d},x1:function(){return f}});var o=e(91002),a=e(71062),r=e(92888),l=e(4065);function i(p,m){typeof p=="function"?p(m):(0,o.Z)(p)==="object"&&p&&"current"in p&&(p.current=m)}function d(){for(var p=arguments.length,m=new Array(p),E=0;E<p;E++)m[E]=arguments[E];var b=m.filter(function(w){return w});return b.length<=1?b[0]:function(w){m.forEach(function(x){i(x,w)})}}function f(){for(var p=arguments.length,m=new Array(p),E=0;E<p;E++)m[E]=arguments[E];return(0,l.Z)(function(){return d.apply(void 0,m)},m,function(b,w){return b.length!==w.length||b.every(function(x,R){return x!==w[R]})})}function g(p){var m,E,b=(0,r.isMemo)(p)?p.type.type:p.type;return!(typeof b=="function"&&!((m=b.prototype)!==null&&m!==void 0&&m.render)||typeof p=="function"&&!((E=p.prototype)!==null&&E!==void 0&&E.render))}function h(p){return!isValidElement(p)||isFragment(p)?!1:g(p)}},36014:function(s,v,e){"use strict";var o={},a=[],r=function(m){a.push(m)};function l(p,m){if(!1)var E}function i(p,m){if(!1)var E}function d(){o={}}function f(p,m,E){!m&&!o[E]&&(p(!1,E),o[E]=!0)}function g(p,m){f(l,p,m)}function h(p,m){f(i,p,m)}g.preMessage=r,g.resetWarned=d,g.noteOnce=h,v.ZP=g},54892:function(s,v,e){"use strict";function o(k){"@babel/helpers - typeof";return o=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(z){return typeof z}:function(z){return z&&typeof Symbol=="function"&&z.constructor===Symbol&&z!==Symbol.prototype?"symbol":typeof z},o(k)}Object.defineProperty(v,"__esModule",{value:!0}),v.CopyToClipboard=void 0;var a=i(e(71062)),r=i(e(25769)),l=["text","onCopy","options","children"];function i(k){return k&&k.__esModule?k:{default:k}}function d(k,z){var K=Object.keys(k);if(Object.getOwnPropertySymbols){var ee=Object.getOwnPropertySymbols(k);z&&(ee=ee.filter(function(J){return Object.getOwnPropertyDescriptor(k,J).enumerable})),K.push.apply(K,ee)}return K}function f(k){for(var z=1;z<arguments.length;z++){var K=arguments[z]!=null?arguments[z]:{};z%2?d(Object(K),!0).forEach(function(ee){F(k,ee,K[ee])}):Object.getOwnPropertyDescriptors?Object.defineProperties(k,Object.getOwnPropertyDescriptors(K)):d(Object(K)).forEach(function(ee){Object.defineProperty(k,ee,Object.getOwnPropertyDescriptor(K,ee))})}return k}function g(k,z){if(k==null)return{};var K=h(k,z),ee,J;if(Object.getOwnPropertySymbols){var ce=Object.getOwnPropertySymbols(k);for(J=0;J<ce.length;J++)ee=ce[J],!(z.indexOf(ee)>=0)&&Object.prototype.propertyIsEnumerable.call(k,ee)&&(K[ee]=k[ee])}return K}function h(k,z){if(k==null)return{};var K={},ee=Object.keys(k),J,ce;for(ce=0;ce<ee.length;ce++)J=ee[ce],!(z.indexOf(J)>=0)&&(K[J]=k[J]);return K}function p(k,z){if(!(k instanceof z))throw new TypeError("Cannot call a class as a function")}function m(k,z){for(var K=0;K<z.length;K++){var ee=z[K];ee.enumerable=ee.enumerable||!1,ee.configurable=!0,"value"in ee&&(ee.writable=!0),Object.defineProperty(k,ee.key,ee)}}function E(k,z,K){return z&&m(k.prototype,z),K&&m(k,K),Object.defineProperty(k,"prototype",{writable:!1}),k}function b(k,z){if(typeof z!="function"&&z!==null)throw new TypeError("Super expression must either be null or a function");k.prototype=Object.create(z&&z.prototype,{constructor:{value:k,writable:!0,configurable:!0}}),Object.defineProperty(k,"prototype",{writable:!1}),z&&w(k,z)}function w(k,z){return w=Object.setPrototypeOf||function(ee,J){return ee.__proto__=J,ee},w(k,z)}function x(k){var z=j();return function(){var ee=N(k),J;if(z){var ce=N(this).constructor;J=Reflect.construct(ee,arguments,ce)}else J=ee.apply(this,arguments);return R(this,J)}}function R(k,z){if(z&&(o(z)==="object"||typeof z=="function"))return z;if(z!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return P(k)}function P(k){if(k===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return k}function j(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(k){return!1}}function N(k){return N=Object.setPrototypeOf?Object.getPrototypeOf:function(K){return K.__proto__||Object.getPrototypeOf(K)},N(k)}function F(k,z,K){return z in k?Object.defineProperty(k,z,{value:K,enumerable:!0,configurable:!0,writable:!0}):k[z]=K,k}var A=function(k){b(K,k);var z=x(K);function K(){var ee;p(this,K);for(var J=arguments.length,ce=new Array(J),Te=0;Te<J;Te++)ce[Te]=arguments[Te];return ee=z.call.apply(z,[this].concat(ce)),F(P(ee),"onClick",function(Oe){var Ne=ee.props,_e=Ne.text,je=Ne.onCopy,q=Ne.children,re=Ne.options,ae=a.default.Children.only(q),O=(0,r.default)(_e,re);je&&je(_e,O),ae&&ae.props&&typeof ae.props.onClick=="function"&&ae.props.onClick(Oe)}),ee}return E(K,[{key:"render",value:function(){var J=this.props,ce=J.text,Te=J.onCopy,Oe=J.options,Ne=J.children,_e=g(J,l),je=a.default.Children.only(Ne);return a.default.cloneElement(je,f(f({},_e),{},{onClick:this.onClick}))}}]),K}(a.default.PureComponent);v.CopyToClipboard=A,F(A,"defaultProps",{onCopy:void 0,options:void 0})},116:function(s,v,e){"use strict";var o=e(54892),a=o.CopyToClipboard;a.CopyToClipboard=a,s.exports=a},10251:function(s,v,e){"use strict";var o=e(71062),a=e(90904);function r(t){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+t,u=1;u<arguments.length;u++)n+="&args[]="+encodeURIComponent(arguments[u]);return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var l=new Set,i={};function d(t,n){f(t,n),f(t+"Capture",n)}function f(t,n){for(i[t]=n,t=0;t<n.length;t++)l.add(n[t])}var g=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),h=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},E={};function b(t){return h.call(E,t)?!0:h.call(m,t)?!1:p.test(t)?E[t]=!0:(m[t]=!0,!1)}function w(t,n,u,c){if(u!==null&&u.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return c?!1:u!==null?!u.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function x(t,n,u,c){if(n===null||typeof n=="undefined"||w(t,n,u,c))return!0;if(c)return!1;if(u!==null)switch(u.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function R(t,n,u,c,S,C,Z){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=c,this.attributeNamespace=S,this.mustUseProperty=u,this.propertyName=t,this.type=n,this.sanitizeURL=C,this.removeEmptyString=Z}var P={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){P[t]=new R(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var n=t[0];P[n]=new R(n,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){P[t]=new R(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){P[t]=new R(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){P[t]=new R(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){P[t]=new R(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){P[t]=new R(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){P[t]=new R(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){P[t]=new R(t,5,!1,t.toLowerCase(),null,!1,!1)});var j=/[\-:]([a-z])/g;function N(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var n=t.replace(j,N);P[n]=new R(n,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var n=t.replace(j,N);P[n]=new R(n,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var n=t.replace(j,N);P[n]=new R(n,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){P[t]=new R(t,1,!1,t.toLowerCase(),null,!1,!1)}),P.xlinkHref=new R("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){P[t]=new R(t,1,!1,t.toLowerCase(),null,!0,!0)});function F(t,n,u,c){var S=P.hasOwnProperty(n)?P[n]:null;(S!==null?S.type!==0:c||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(x(n,u,S,c)&&(u=null),c||S===null?b(n)&&(u===null?t.removeAttribute(n):t.setAttribute(n,""+u)):S.mustUseProperty?t[S.propertyName]=u===null?S.type===3?!1:"":u:(n=S.attributeName,c=S.attributeNamespace,u===null?t.removeAttribute(n):(S=S.type,u=S===3||S===4&&u===!0?"":""+u,c?t.setAttributeNS(c,n,u):t.setAttribute(n,u))))}var A=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,k=Symbol.for("react.element"),z=Symbol.for("react.portal"),K=Symbol.for("react.fragment"),ee=Symbol.for("react.strict_mode"),J=Symbol.for("react.profiler"),ce=Symbol.for("react.provider"),Te=Symbol.for("react.context"),Oe=Symbol.for("react.forward_ref"),Ne=Symbol.for("react.suspense"),_e=Symbol.for("react.suspense_list"),je=Symbol.for("react.memo"),q=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var re=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var ae=Symbol.iterator;function O(t){return t===null||typeof t!="object"?null:(t=ae&&t[ae]||t["@@iterator"],typeof t=="function"?t:null)}var L=Object.assign,W;function V(t){if(W===void 0)try{throw Error()}catch(u){var n=u.stack.trim().match(/\n( *(at )?)/);W=n&&n[1]||""}return`
`+W+t}var G=!1;function I(t,n){if(!t||G)return"";G=!0;var u=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(qe){var c=qe}Reflect.construct(t,[],n)}else{try{n.call()}catch(qe){c=qe}t.call(n.prototype)}else{try{throw Error()}catch(qe){c=qe}t()}}catch(qe){if(qe&&c&&typeof qe.stack=="string"){for(var S=qe.stack.split(`
`),C=c.stack.split(`
`),Z=S.length-1,ge=C.length-1;1<=Z&&0<=ge&&S[Z]!==C[ge];)ge--;for(;1<=Z&&0<=ge;Z--,ge--)if(S[Z]!==C[ge]){if(Z!==1||ge!==1)do if(Z--,ge--,0>ge||S[Z]!==C[ge]){var Me=`
`+S[Z].replace(" at new "," at ");return t.displayName&&Me.includes("<anonymous>")&&(Me=Me.replace("<anonymous>",t.displayName)),Me}while(1<=Z&&0<=ge);break}}}finally{G=!1,Error.prepareStackTrace=u}return(t=t?t.displayName||t.name:"")?V(t):""}function H(t){switch(t.tag){case 5:return V(t.type);case 16:return V("Lazy");case 13:return V("Suspense");case 19:return V("SuspenseList");case 0:case 2:case 15:return t=I(t.type,!1),t;case 11:return t=I(t.type.render,!1),t;case 1:return t=I(t.type,!0),t;default:return""}}function $(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case K:return"Fragment";case z:return"Portal";case J:return"Profiler";case ee:return"StrictMode";case Ne:return"Suspense";case _e:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Te:return(t.displayName||"Context")+".Consumer";case ce:return(t._context.displayName||"Context")+".Provider";case Oe:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case je:return n=t.displayName||null,n!==null?n:$(t.type)||"Memo";case q:n=t._payload,t=t._init;try{return $(t(n))}catch(u){}}return null}function Y(t){var n=t.type;switch(t.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=n.render,t=t.displayName||t.name||"",n.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return $(n);case 8:return n===ee?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function X(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Re(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Fe(t){var n=Re(t)?"checked":"value",u=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),c=""+t[n];if(!t.hasOwnProperty(n)&&typeof u!="undefined"&&typeof u.get=="function"&&typeof u.set=="function"){var S=u.get,C=u.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return S.call(this)},set:function(Z){c=""+Z,C.call(this,Z)}}),Object.defineProperty(t,n,{enumerable:u.enumerable}),{getValue:function(){return c},setValue:function(Z){c=""+Z},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function at(t){t._valueTracker||(t._valueTracker=Fe(t))}function et(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var u=n.getValue(),c="";return t&&(c=Re(t)?t.checked?"true":"false":t.value),t=c,t!==u?(n.setValue(t),!0):!1}function Ke(t){if(t=t||(typeof document!="undefined"?document:void 0),typeof t=="undefined")return null;try{return t.activeElement||t.body}catch(n){return t.body}}function ot(t,n){var u=n.checked;return L({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:u!=null?u:t._wrapperState.initialChecked})}function te(t,n){var u=n.defaultValue==null?"":n.defaultValue,c=n.checked!=null?n.checked:n.defaultChecked;u=X(n.value!=null?n.value:u),t._wrapperState={initialChecked:c,initialValue:u,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function fe(t,n){n=n.checked,n!=null&&F(t,"checked",n,!1)}function pe(t,n){fe(t,n);var u=X(n.value),c=n.type;if(u!=null)c==="number"?(u===0&&t.value===""||t.value!=u)&&(t.value=""+u):t.value!==""+u&&(t.value=""+u);else if(c==="submit"||c==="reset"){t.removeAttribute("value");return}n.hasOwnProperty("value")?Ie(t,n.type,u):n.hasOwnProperty("defaultValue")&&Ie(t,n.type,X(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(t.defaultChecked=!!n.defaultChecked)}function me(t,n,u){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var c=n.type;if(!(c!=="submit"&&c!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+t._wrapperState.initialValue,u||n===t.value||(t.value=n),t.defaultValue=n}u=t.name,u!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,u!==""&&(t.name=u)}function Ie(t,n,u){(n!=="number"||Ke(t.ownerDocument)!==t)&&(u==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+u&&(t.defaultValue=""+u))}var ue=Array.isArray;function ve(t,n,u,c){if(t=t.options,n){n={};for(var S=0;S<u.length;S++)n["$"+u[S]]=!0;for(u=0;u<t.length;u++)S=n.hasOwnProperty("$"+t[u].value),t[u].selected!==S&&(t[u].selected=S),S&&c&&(t[u].defaultSelected=!0)}else{for(u=""+X(u),n=null,S=0;S<t.length;S++){if(t[S].value===u){t[S].selected=!0,c&&(t[S].defaultSelected=!0);return}n!==null||t[S].disabled||(n=t[S])}n!==null&&(n.selected=!0)}}function Ee(t,n){if(n.dangerouslySetInnerHTML!=null)throw Error(r(91));return L({},n,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function le(t,n){var u=n.value;if(u==null){if(u=n.children,n=n.defaultValue,u!=null){if(n!=null)throw Error(r(92));if(ue(u)){if(1<u.length)throw Error(r(93));u=u[0]}n=u}n==null&&(n=""),u=n}t._wrapperState={initialValue:X(u)}}function ye(t,n){var u=X(n.value),c=X(n.defaultValue);u!=null&&(u=""+u,u!==t.value&&(t.value=u),n.defaultValue==null&&t.defaultValue!==u&&(t.defaultValue=u)),c!=null&&(t.defaultValue=""+c)}function Be(t){var n=t.textContent;n===t._wrapperState.initialValue&&n!==""&&n!==null&&(t.value=n)}function oe(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function he(t,n){return t==null||t==="http://www.w3.org/1999/xhtml"?oe(n):t==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ae,Ue=function(t){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(n,u,c,S){MSApp.execUnsafeLocalFunction(function(){return t(n,u,c,S)})}:t}(function(t,n){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=n;else{for(Ae=Ae||document.createElement("div"),Ae.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Ae.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;n.firstChild;)t.appendChild(n.firstChild)}});function He(t,n){if(n){var u=t.firstChild;if(u&&u===t.lastChild&&u.nodeType===3){u.nodeValue=n;return}}t.textContent=n}var it={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},y=["Webkit","ms","Moz","O"];Object.keys(it).forEach(function(t){y.forEach(function(n){n=n+t.charAt(0).toUpperCase()+t.substring(1),it[n]=it[t]})});function Q(t,n,u){return n==null||typeof n=="boolean"||n===""?"":u||typeof n!="number"||n===0||it.hasOwnProperty(t)&&it[t]?(""+n).trim():n+"px"}function be(t,n){t=t.style;for(var u in n)if(n.hasOwnProperty(u)){var c=u.indexOf("--")===0,S=Q(u,n[u],c);u==="float"&&(u="cssFloat"),c?t.setProperty(u,S):t[u]=S}}var we=L({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ze(t,n){if(n){if(we[t]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(r(137,t));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(r(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(r(61))}if(n.style!=null&&typeof n.style!="object")throw Error(r(62))}}function We(t,n){if(t.indexOf("-")===-1)return typeof n.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pe=null;function Xe(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ct=null,Ve=null,Pt=null;function xe(t){if(t=cl(t)){if(typeof ct!="function")throw Error(r(280));var n=t.stateNode;n&&(n=Bi(n),ct(t.stateNode,t.type,n))}}function tt(t){Ve?Pt?Pt.push(t):Pt=[t]:Ve=t}function Ze(){if(Ve){var t=Ve,n=Pt;if(Pt=Ve=null,xe(t),n)for(t=0;t<n.length;t++)xe(n[t])}}function Le(t,n){return t(n)}function ut(){}var st=!1;function bt(t,n,u){if(st)return t(n,u);st=!0;try{return Le(t,n,u)}finally{st=!1,(Ve!==null||Pt!==null)&&(ut(),Ze())}}function kt(t,n){var u=t.stateNode;if(u===null)return null;var c=Bi(u);if(c===null)return null;u=c[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(t=t.type,c=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!c;break e;default:t=!1}if(t)return null;if(u&&typeof u!="function")throw Error(r(231,n,typeof u));return u}var Kt=!1;if(g)try{var xn={};Object.defineProperty(xn,"passive",{get:function(){Kt=!0}}),window.addEventListener("test",xn,xn),window.removeEventListener("test",xn,xn)}catch(t){Kt=!1}function dn(t,n,u,c,S,C,Z,ge,Me){var qe=Array.prototype.slice.call(arguments,3);try{n.apply(u,qe)}catch(xt){this.onError(xt)}}var In=!1,Bn=null,Ar=!1,Br=null,wt={onError:function(t){In=!0,Bn=t}};function dt(t,n,u,c,S,C,Z,ge,Me){In=!1,Bn=null,dn.apply(wt,arguments)}function pt(t,n,u,c,S,C,Z,ge,Me){if(dt.apply(this,arguments),In){if(In){var qe=Bn;In=!1,Bn=null}else throw Error(r(198));Ar||(Ar=!0,Br=qe)}}function Ut(t){var n=t,u=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,n.flags&4098&&(u=n.return),t=n.return;while(t)}return n.tag===3?u:null}function on(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function qt(t){if(Ut(t)!==t)throw Error(r(188))}function Ln(t){var n=t.alternate;if(!n){if(n=Ut(t),n===null)throw Error(r(188));return n!==t?null:t}for(var u=t,c=n;;){var S=u.return;if(S===null)break;var C=S.alternate;if(C===null){if(c=S.return,c!==null){u=c;continue}break}if(S.child===C.child){for(C=S.child;C;){if(C===u)return qt(S),t;if(C===c)return qt(S),n;C=C.sibling}throw Error(r(188))}if(u.return!==c.return)u=S,c=C;else{for(var Z=!1,ge=S.child;ge;){if(ge===u){Z=!0,u=S,c=C;break}if(ge===c){Z=!0,c=S,u=C;break}ge=ge.sibling}if(!Z){for(ge=C.child;ge;){if(ge===u){Z=!0,u=C,c=S;break}if(ge===c){Z=!0,c=C,u=S;break}ge=ge.sibling}if(!Z)throw Error(r(189))}}if(u.alternate!==c)throw Error(r(190))}if(u.tag!==3)throw Error(r(188));return u.stateNode.current===u?t:n}function ar(t){return t=Ln(t),t!==null?Gn(t):null}function Gn(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var n=Gn(t);if(n!==null)return n;t=t.sibling}return null}var Gr=a.unstable_scheduleCallback,Fn=a.unstable_cancelCallback,Dr=a.unstable_shouldYield,ni=a.unstable_requestPaint,sr=a.unstable_now,wi=a.unstable_getCurrentPriorityLevel,za=a.unstable_ImmediatePriority,ri=a.unstable_UserBlockingPriority,bo=a.unstable_NormalPriority,_o=a.unstable_LowPriority,jo=a.unstable_IdlePriority,xo=null,pa=null;function Ii(t){if(pa&&typeof pa.onCommitFiberRoot=="function")try{pa.onCommitFiberRoot(xo,t,void 0,(t.current.flags&128)===128)}catch(n){}}var wa=Math.clz32?Math.clz32:$a,Hi=Math.log,Qu=Math.LN2;function $a(t){return t>>>=0,t===0?32:31-(Hi(t)/Qu|0)|0}var to=64,wo=4194304;function Io(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function _a(t,n){var u=t.pendingLanes;if(u===0)return 0;var c=0,S=t.suspendedLanes,C=t.pingedLanes,Z=u&268435455;if(Z!==0){var ge=Z&~S;ge!==0?c=Io(ge):(C&=Z,C!==0&&(c=Io(C)))}else Z=u&~S,Z!==0?c=Io(Z):C!==0&&(c=Io(C));if(c===0)return 0;if(n!==0&&n!==c&&!(n&S)&&(S=c&-c,C=n&-n,S>=C||S===16&&(C&4194240)!==0))return n;if(c&4&&(c|=u&16),n=t.entangledLanes,n!==0)for(t=t.entanglements,n&=c;0<n;)u=31-wa(n),S=1<<u,c|=t[u],n&=~S;return c}function du(t,n){switch(t){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ti(t,n){for(var u=t.suspendedLanes,c=t.pingedLanes,S=t.expirationTimes,C=t.pendingLanes;0<C;){var Z=31-wa(C),ge=1<<Z,Me=S[Z];Me===-1?(!(ge&u)||ge&c)&&(S[Z]=du(ge,n)):Me<=n&&(t.expiredLanes|=ge),C&=~ge}}function To(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Kr(){var t=to;return to<<=1,!(to&4194240)&&(to=64),t}function Fr(t){for(var n=[],u=0;31>u;u++)n.push(t);return n}function Pr(t,n,u){t.pendingLanes|=n,n!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,n=31-wa(n),t[n]=u}function Ia(t,n){var u=t.pendingLanes&~n;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=n,t.mutableReadLanes&=n,t.entangledLanes&=n,n=t.entanglements;var c=t.eventTimes;for(t=t.expirationTimes;0<u;){var S=31-wa(u),C=1<<S;n[S]=0,c[S]=-1,t[S]=-1,u&=~C}}function Ta(t,n){var u=t.entangledLanes|=n;for(t=t.entanglements;u;){var c=31-wa(u),S=1<<c;S&n|t[c]&n&&(t[c]|=n),u&=~S}}var nr=0;function Oi(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Zi,vu,pu,ai,oi,so=!1,Ha=[],no=null,Oo=null,co=null,ro=new Map,Za=new Map,sa=[],El="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Xu(t,n){switch(t){case"focusin":case"focusout":no=null;break;case"dragenter":case"dragleave":Oo=null;break;case"mouseover":case"mouseout":co=null;break;case"pointerover":case"pointerout":ro.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Za.delete(n.pointerId)}}function fo(t,n,u,c,S,C){return t===null||t.nativeEvent!==C?(t={blockedOn:n,domEventName:u,eventSystemFlags:c,nativeEvent:C,targetContainers:[S]},n!==null&&(n=cl(n),n!==null&&vu(n)),t):(t.eventSystemFlags|=c,n=t.targetContainers,S!==null&&n.indexOf(S)===-1&&n.push(S),t)}function Sl(t,n,u,c,S){switch(n){case"focusin":return no=fo(no,t,n,u,c,S),!0;case"dragenter":return Oo=fo(Oo,t,n,u,c,S),!0;case"mouseover":return co=fo(co,t,n,u,c,S),!0;case"pointerover":var C=S.pointerId;return ro.set(C,fo(ro.get(C)||null,t,n,u,c,S)),!0;case"gotpointercapture":return C=S.pointerId,Za.set(C,fo(Za.get(C)||null,t,n,u,c,S)),!0}return!1}function hu(t){var n=ou(t.target);if(n!==null){var u=Ut(n);if(u!==null){if(n=u.tag,n===13){if(n=on(u),n!==null){t.blockedOn=n,oi(t.priority,function(){pu(u)});return}}else if(n===3&&u.stateNode.current.memoizedState.isDehydrated){t.blockedOn=u.tag===3?u.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Bo(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var u=Ki(t.domEventName,t.eventSystemFlags,n[0],t.nativeEvent);if(u===null){u=t.nativeEvent;var c=new u.constructor(u.type,u);Pe=c,u.target.dispatchEvent(c),Pe=null}else return n=cl(u),n!==null&&vu(n),t.blockedOn=u,!1;n.shift()}return!0}function Mr(t,n,u){Bo(t)&&u.delete(n)}function bl(){so=!1,no!==null&&Bo(no)&&(no=null),Oo!==null&&Bo(Oo)&&(Oo=null),co!==null&&Bo(co)&&(co=null),ro.forEach(Mr),Za.forEach(Mr)}function ii(t,n){t.blockedOn===n&&(t.blockedOn=null,so||(so=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,bl)))}function Ci(t){function n(S){return ii(S,t)}if(0<Ha.length){ii(Ha[0],t);for(var u=1;u<Ha.length;u++){var c=Ha[u];c.blockedOn===t&&(c.blockedOn=null)}}for(no!==null&&ii(no,t),Oo!==null&&ii(Oo,t),co!==null&&ii(co,t),ro.forEach(n),Za.forEach(n),u=0;u<sa.length;u++)c=sa[u],c.blockedOn===t&&(c.blockedOn=null);for(;0<sa.length&&(u=sa[0],u.blockedOn===null);)hu(u),u.blockedOn===null&&sa.shift()}var ui=A.ReactCurrentBatchConfig,Wi=!0;function li(t,n,u,c){var S=nr,C=ui.transition;ui.transition=null;try{nr=1,Gi(t,n,u,c)}finally{nr=S,ui.transition=C}}function Co(t,n,u,c){var S=nr,C=ui.transition;ui.transition=null;try{nr=4,Gi(t,n,u,c)}finally{nr=S,ui.transition=C}}function Gi(t,n,u,c){if(Wi){var S=Ki(t,n,u,c);if(S===null)Zl(t,n,c,Ao,u),Xu(t,c);else if(Sl(S,t,n,u,c))c.stopPropagation();else if(Xu(t,c),n&4&&-1<El.indexOf(t)){for(;S!==null;){var C=cl(S);if(C!==null&&Zi(C),C=Ki(t,n,u,c),C===null&&Zl(t,n,c,Ao,u),C===S)break;S=C}S!==null&&c.stopPropagation()}else Zl(t,n,c,null,u)}}var Ao=null;function Ki(t,n,u,c){if(Ao=null,t=Xe(c),t=ou(t),t!==null)if(n=Ut(t),n===null)t=null;else if(u=n.tag,u===13){if(t=on(n),t!==null)return t;t=null}else if(u===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null);return Ao=t,null}function Ju(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(wi()){case za:return 1;case ri:return 4;case bo:case _o:return 16;case jo:return 536870912;default:return 16}default:return 16}}var Po=null,Vi=null,Yi=null;function Fo(){if(Yi)return Yi;var t,n=Vi,u=n.length,c,S="value"in Po?Po.value:Po.textContent,C=S.length;for(t=0;t<u&&n[t]===S[t];t++);var Z=u-t;for(c=1;c<=Z&&n[u-c]===S[C-c];c++);return Yi=S.slice(t,1<c?1-c:void 0)}function Qi(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function si(){return!0}function Ai(){return!1}function ca(t){function n(u,c,S,C,Z){this._reactName=u,this._targetInst=S,this.type=c,this.nativeEvent=C,this.target=Z,this.currentTarget=null;for(var ge in t)t.hasOwnProperty(ge)&&(u=t[ge],this[ge]=u?u(C):C[ge]);return this.isDefaultPrevented=(C.defaultPrevented!=null?C.defaultPrevented:C.returnValue===!1)?si:Ai,this.isPropagationStopped=Ai,this}return L(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var u=this.nativeEvent;u&&(u.preventDefault?u.preventDefault():typeof u.returnValue!="unknown"&&(u.returnValue=!1),this.isDefaultPrevented=si)},stopPropagation:function(){var u=this.nativeEvent;u&&(u.stopPropagation?u.stopPropagation():typeof u.cancelBubble!="unknown"&&(u.cancelBubble=!0),this.isPropagationStopped=si)},persist:function(){},isPersistent:si}),n}var Uo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zo=ca(Uo),ha=L({},Uo,{view:0,detail:0}),xl=ca(ha),gu,mu,Pi,Mi=L({},ha,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Pi&&(Pi&&t.type==="mousemove"?(gu=t.screenX-Pi.screenX,mu=t.screenY-Pi.screenY):mu=gu=0,Pi=t),gu)},movementY:function(t){return"movementY"in t?t.movementY:mu}}),yu=ca(Mi),wl=L({},Mi,{dataTransfer:0}),qu=ca(wl),Ri=L({},ha,{relatedTarget:0}),Eu=ca(Ri),Li=L({},Uo,{animationName:0,elapsedTime:0,pseudoElement:0}),ci=ca(Li),el=L({},Uo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),fi=ca(el),Il=L({},Uo,{data:0}),Su=ca(Il),Ni={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bu={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},tl={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function nl(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=tl[t])?!!n[t]:!1}function xu(){return nl}var Wa=L({},ha,{key:function(t){if(t.key){var n=Ni[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Qi(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?bu[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xu,charCode:function(t){return t.type==="keypress"?Qi(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Qi(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Xi=ca(Wa),$o=L({},Mi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),M=ca($o),D=L({},ha,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xu}),_=ca(D),se=L({},Uo,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ce=ca(se),Qe=L({},Mi,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Je=ca(Qe),lt=[9,13,27,32],ft=g&&"CompositionEvent"in window,gt=null;g&&"documentMode"in document&&(gt=document.documentMode);var jt=g&&"TextEvent"in window&&!gt,ln=g&&(!ft||gt&&8<gt&&11>=gt),Gt=String.fromCharCode(32),Zt=!1;function pn(t,n){switch(t){case"keyup":return lt.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Un(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var _n=!1;function Vn(t,n){switch(t){case"compositionend":return Un(n);case"keypress":return n.which!==32?null:(Zt=!0,Gt);case"textInput":return t=n.data,t===Gt&&Zt?null:t;default:return null}}function Ir(t,n){if(_n)return t==="compositionend"||!ft&&pn(t,n)?(t=Fo(),Yi=Vi=Po=null,_n=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return ln&&n.locale!=="ko"?null:n.data;default:return null}}var kr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Oa(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!kr[t.type]:n==="textarea"}function ja(t,n,u,c){tt(c),n=ll(n,"onChange"),0<n.length&&(u=new zo("onChange","change",null,u,c),t.push({event:u,listeners:n}))}var ea=null,Ba=null;function Mo(t){Al(t,0)}function Ho(t){var n=Nu(t);if(et(n))return t}function di(t,n){if(t==="change")return n}var Ro=!1;if(g){var Zo;if(g){var vi="oninput"in document;if(!vi){var ao=document.createElement("div");ao.setAttribute("oninput","return;"),vi=typeof ao.oninput=="function"}Zo=vi}else Zo=!1;Ro=Zo&&(!document.documentMode||9<document.documentMode)}function Wo(){ea&&(ea.detachEvent("onpropertychange",rl),Ba=ea=null)}function rl(t){if(t.propertyName==="value"&&Ho(Ba)){var n=[];ja(n,Ba,t,Xe(t)),bt(Mo,n)}}function Ul(t,n,u){t==="focusin"?(Wo(),ea=n,Ba=u,ea.attachEvent("onpropertychange",rl)):t==="focusout"&&Wo()}function Di(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ho(Ba)}function zl(t,n){if(t==="click")return Ho(n)}function Ji(t,n){if(t==="input"||t==="change")return Ho(n)}function $l(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Ca=typeof Object.is=="function"?Object.is:$l;function Yt(t,n){if(Ca(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var u=Object.keys(t),c=Object.keys(n);if(u.length!==c.length)return!1;for(c=0;c<u.length;c++){var S=u[c];if(!h.call(n,S)||!Ca(t[S],n[S]))return!1}return!0}function $t(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Kn(t,n){var u=$t(t);t=0;for(var c;u;){if(u.nodeType===3){if(c=t+u.textContent.length,t<=n&&c>=n)return{node:u,offset:n-t};t=c}e:{for(;u;){if(u.nextSibling){u=u.nextSibling;break e}u=u.parentNode}u=void 0}u=$t(u)}}function Sr(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Sr(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function br(){for(var t=window,n=Ke();n instanceof t.HTMLIFrameElement;){try{var u=typeof n.contentWindow.location.href=="string"}catch(c){u=!1}if(u)t=n.contentWindow;else break;n=Ke(t.document)}return n}function _r(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}function ta(t){var n=br(),u=t.focusedElem,c=t.selectionRange;if(n!==u&&u&&u.ownerDocument&&Sr(u.ownerDocument.documentElement,u)){if(c!==null&&_r(u)){if(n=c.start,t=c.end,t===void 0&&(t=n),"selectionStart"in u)u.selectionStart=n,u.selectionEnd=Math.min(t,u.value.length);else if(t=(n=u.ownerDocument||document)&&n.defaultView||window,t.getSelection){t=t.getSelection();var S=u.textContent.length,C=Math.min(c.start,S);c=c.end===void 0?C:Math.min(c.end,S),!t.extend&&C>c&&(S=c,c=C,C=S),S=Kn(u,C);var Z=Kn(u,c);S&&Z&&(t.rangeCount!==1||t.anchorNode!==S.node||t.anchorOffset!==S.offset||t.focusNode!==Z.node||t.focusOffset!==Z.offset)&&(n=n.createRange(),n.setStart(S.node,S.offset),t.removeAllRanges(),C>c?(t.addRange(n),t.extend(Z.node,Z.offset)):(n.setEnd(Z.node,Z.offset),t.addRange(n)))}}for(n=[],t=u;t=t.parentNode;)t.nodeType===1&&n.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof u.focus=="function"&&u.focus(),u=0;u<n.length;u++)t=n[u],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var ga=g&&"documentMode"in document&&11>=document.documentMode,Ga=null,wu=null,ma=null,Iu=!1;function qi(t,n,u){var c=u.window===u?u.document:u.nodeType===9?u:u.ownerDocument;Iu||Ga==null||Ga!==Ke(c)||(c=Ga,"selectionStart"in c&&_r(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),ma&&Yt(ma,c)||(ma=c,c=ll(wu,"onSelect"),0<c.length&&(n=new zo("onSelect","select",null,n,u),t.push({event:n,listeners:c}),n.target=Ga)))}function Go(t,n){var u={};return u[t.toLowerCase()]=n.toLowerCase(),u["Webkit"+t]="webkit"+n,u["Moz"+t]="moz"+n,u}var ki={animationend:Go("Animation","AnimationEnd"),animationiteration:Go("Animation","AnimationIteration"),animationstart:Go("Animation","AnimationStart"),transitionend:Go("Transition","TransitionEnd")},al={},ol={};g&&(ol=document.createElement("div").style,"AnimationEvent"in window||(delete ki.animationend.animation,delete ki.animationiteration.animation,delete ki.animationstart.animation),"TransitionEvent"in window||delete ki.transitionend.transition);function pi(t){if(al[t])return al[t];if(!ki[t])return t;var n=ki[t],u;for(u in n)if(n.hasOwnProperty(u)&&u in ol)return al[t]=n[u];return t}var Tl=pi("animationend"),Tu=pi("animationiteration"),eu=pi("animationstart"),il=pi("transitionend"),Ou=new Map,Cu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Xn(t,n){Ou.set(t,n),d(n,[t])}for(var tu=0;tu<Cu.length;tu++){var nu=Cu[tu],Ol=nu.toLowerCase(),ul=nu[0].toUpperCase()+nu.slice(1);Xn(Ol,"on"+ul)}Xn(Tl,"onAnimationEnd"),Xn(Tu,"onAnimationIteration"),Xn(eu,"onAnimationStart"),Xn("dblclick","onDoubleClick"),Xn("focusin","onFocus"),Xn("focusout","onBlur"),Xn(il,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),d("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),d("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),d("onBeforeInput",["compositionend","keypress","textInput","paste"]),d("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),d("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),d("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _i="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Hl=new Set("cancel close invalid load scroll toggle".split(" ").concat(_i));function Cl(t,n,u){var c=t.type||"unknown-event";t.currentTarget=u,pt(c,n,void 0,t),t.currentTarget=null}function Al(t,n){n=(n&4)!==0;for(var u=0;u<t.length;u++){var c=t[u],S=c.event;c=c.listeners;e:{var C=void 0;if(n)for(var Z=c.length-1;0<=Z;Z--){var ge=c[Z],Me=ge.instance,qe=ge.currentTarget;if(ge=ge.listener,Me!==C&&S.isPropagationStopped())break e;Cl(S,ge,qe),C=Me}else for(Z=0;Z<c.length;Z++){if(ge=c[Z],Me=ge.instance,qe=ge.currentTarget,ge=ge.listener,Me!==C&&S.isPropagationStopped())break e;Cl(S,ge,qe),C=Me}}}if(Ar)throw t=Br,Ar=!1,Br=null,t}function yr(t,n){var u=n[Yl];u===void 0&&(u=n[Yl]=new Set);var c=t+"__bubble";u.has(c)||(is(n,t,2,!1),u.add(c))}function Aa(t,n,u){var c=0;n&&(c|=4),is(u,t,c,n)}var Ka="_reactListening"+Math.random().toString(36).slice(2);function vo(t){if(!t[Ka]){t[Ka]=!0,l.forEach(function(u){u!=="selectionchange"&&(Hl.has(u)||Aa(u,!1,t),Aa(u,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Ka]||(n[Ka]=!0,Aa("selectionchange",!1,n))}}function is(t,n,u,c){switch(Ju(n)){case 1:var S=li;break;case 4:S=Co;break;default:S=Gi}u=S.bind(null,n,u,t),S=void 0,!Kt||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(S=!0),c?S!==void 0?t.addEventListener(n,u,{capture:!0,passive:S}):t.addEventListener(n,u,!0):S!==void 0?t.addEventListener(n,u,{passive:S}):t.addEventListener(n,u,!1)}function Zl(t,n,u,c,S){var C=c;if(!(n&1)&&!(n&2)&&c!==null)e:for(;;){if(c===null)return;var Z=c.tag;if(Z===3||Z===4){var ge=c.stateNode.containerInfo;if(ge===S||ge.nodeType===8&&ge.parentNode===S)break;if(Z===4)for(Z=c.return;Z!==null;){var Me=Z.tag;if((Me===3||Me===4)&&(Me=Z.stateNode.containerInfo,Me===S||Me.nodeType===8&&Me.parentNode===S))return;Z=Z.return}for(;ge!==null;){if(Z=ou(ge),Z===null)return;if(Me=Z.tag,Me===5||Me===6){c=C=Z;continue e}ge=ge.parentNode}}c=c.return}bt(function(){var qe=C,xt=Xe(u),Tt=[];e:{var St=Ou.get(t);if(St!==void 0){var Wt=zo,Jt=t;switch(t){case"keypress":if(Qi(u)===0)break e;case"keydown":case"keyup":Wt=Xi;break;case"focusin":Jt="focus",Wt=Eu;break;case"focusout":Jt="blur",Wt=Eu;break;case"beforeblur":case"afterblur":Wt=Eu;break;case"click":if(u.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Wt=yu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Wt=qu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Wt=_;break;case Tl:case Tu:case eu:Wt=ci;break;case il:Wt=Ce;break;case"scroll":Wt=xl;break;case"wheel":Wt=Je;break;case"copy":case"cut":case"paste":Wt=fi;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Wt=M}var rn=(n&4)!==0,la=!rn&&t==="scroll",Ge=rn?St!==null?St+"Capture":null:St;rn=[];for(var ke=qe,Ye;ke!==null;){Ye=ke;var Nt=Ye.stateNode;if(Ye.tag===5&&Nt!==null&&(Ye=Nt,Ge!==null&&(Nt=kt(ke,Ge),Nt!=null&&rn.push(Au(ke,Nt,Ye)))),la)break;ke=ke.return}0<rn.length&&(St=new Wt(St,Jt,null,u,xt),Tt.push({event:St,listeners:rn}))}}if(!(n&7)){e:{if(St=t==="mouseover"||t==="pointerover",Wt=t==="mouseout"||t==="pointerout",St&&u!==Pe&&(Jt=u.relatedTarget||u.fromElement)&&(ou(Jt)||Jt[hi]))break e;if((Wt||St)&&(St=xt.window===xt?xt:(St=xt.ownerDocument)?St.defaultView||St.parentWindow:window,Wt?(Jt=u.relatedTarget||u.toElement,Wt=qe,Jt=Jt?ou(Jt):null,Jt!==null&&(la=Ut(Jt),Jt!==la||Jt.tag!==5&&Jt.tag!==6)&&(Jt=null)):(Wt=null,Jt=qe),Wt!==Jt)){if(rn=yu,Nt="onMouseLeave",Ge="onMouseEnter",ke="mouse",(t==="pointerout"||t==="pointerover")&&(rn=M,Nt="onPointerLeave",Ge="onPointerEnter",ke="pointer"),la=Wt==null?St:Nu(Wt),Ye=Jt==null?St:Nu(Jt),St=new rn(Nt,ke+"leave",Wt,u,xt),St.target=la,St.relatedTarget=Ye,Nt=null,ou(xt)===qe&&(rn=new rn(Ge,ke+"enter",Jt,u,xt),rn.target=Ye,rn.relatedTarget=la,Nt=rn),la=Nt,Wt&&Jt)t:{for(rn=Wt,Ge=Jt,ke=0,Ye=rn;Ye;Ye=Pu(Ye))ke++;for(Ye=0,Nt=Ge;Nt;Nt=Pu(Nt))Ye++;for(;0<ke-Ye;)rn=Pu(rn),ke--;for(;0<Ye-ke;)Ge=Pu(Ge),Ye--;for(;ke--;){if(rn===Ge||Ge!==null&&rn===Ge.alternate)break t;rn=Pu(rn),Ge=Pu(Ge)}rn=null}else rn=null;Wt!==null&&Pl(Tt,St,Wt,rn,!1),Jt!==null&&la!==null&&Pl(Tt,la,Jt,rn,!0)}}e:{if(St=qe?Nu(qe):window,Wt=St.nodeName&&St.nodeName.toLowerCase(),Wt==="select"||Wt==="input"&&St.type==="file")var un=di;else if(Oa(St))if(Ro)un=Ji;else{un=Di;var En=Ul}else(Wt=St.nodeName)&&Wt.toLowerCase()==="input"&&(St.type==="checkbox"||St.type==="radio")&&(un=zl);if(un&&(un=un(t,qe))){ja(Tt,un,u,xt);break e}En&&En(t,St,qe),t==="focusout"&&(En=St._wrapperState)&&En.controlled&&St.type==="number"&&Ie(St,"number",St.value)}switch(En=qe?Nu(qe):window,t){case"focusin":(Oa(En)||En.contentEditable==="true")&&(Ga=En,wu=qe,ma=null);break;case"focusout":ma=wu=Ga=null;break;case"mousedown":Iu=!0;break;case"contextmenu":case"mouseup":case"dragend":Iu=!1,qi(Tt,u,xt);break;case"selectionchange":if(ga)break;case"keydown":case"keyup":qi(Tt,u,xt)}var Sn;if(ft)e:{switch(t){case"compositionstart":var Cn="onCompositionStart";break e;case"compositionend":Cn="onCompositionEnd";break e;case"compositionupdate":Cn="onCompositionUpdate";break e}Cn=void 0}else _n?pn(t,u)&&(Cn="onCompositionEnd"):t==="keydown"&&u.keyCode===229&&(Cn="onCompositionStart");Cn&&(ln&&u.locale!=="ko"&&(_n||Cn!=="onCompositionStart"?Cn==="onCompositionEnd"&&_n&&(Sn=Fo()):(Po=xt,Vi="value"in Po?Po.value:Po.textContent,_n=!0)),En=ll(qe,Cn),0<En.length&&(Cn=new Su(Cn,t,null,u,xt),Tt.push({event:Cn,listeners:En}),Sn?Cn.data=Sn:(Sn=Un(u),Sn!==null&&(Cn.data=Sn)))),(Sn=jt?Vn(t,u):Ir(t,u))&&(qe=ll(qe,"onBeforeInput"),0<qe.length&&(xt=new Su("onBeforeInput","beforeinput",null,u,xt),Tt.push({event:xt,listeners:qe}),xt.data=Sn))}Al(Tt,n)})}function Au(t,n,u){return{instance:t,listener:n,currentTarget:u}}function ll(t,n){for(var u=n+"Capture",c=[];t!==null;){var S=t,C=S.stateNode;S.tag===5&&C!==null&&(S=C,C=kt(t,u),C!=null&&c.unshift(Au(t,C,S)),C=kt(t,n),C!=null&&c.push(Au(t,C,S))),t=t.return}return c}function Pu(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Pl(t,n,u,c,S){for(var C=n._reactName,Z=[];u!==null&&u!==c;){var ge=u,Me=ge.alternate,qe=ge.stateNode;if(Me!==null&&Me===c)break;ge.tag===5&&qe!==null&&(ge=qe,S?(Me=kt(u,C),Me!=null&&Z.unshift(Au(u,Me,ge))):S||(Me=kt(u,C),Me!=null&&Z.push(Au(u,Me,ge)))),u=u.return}Z.length!==0&&t.push({event:n,listeners:Z})}var Rs=/\r\n?/g,Ls=/\u0000|\uFFFD/g;function ru(t){return(typeof t=="string"?t:""+t).replace(Rs,`
`).replace(Ls,"")}function Ml(t,n,u){if(n=ru(n),ru(t)!==n&&u)throw Error(r(425))}function Rl(){}var au=null,Wl=null;function Gl(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Kl=typeof setTimeout=="function"?setTimeout:void 0,Ns=typeof clearTimeout=="function"?clearTimeout:void 0,us=typeof Promise=="function"?Promise:void 0,Ds=typeof queueMicrotask=="function"?queueMicrotask:typeof us!="undefined"?function(t){return us.resolve(null).then(t).catch(Mu)}:Kl;function Mu(t){setTimeout(function(){throw t})}function Ru(t,n){var u=n,c=0;do{var S=u.nextSibling;if(t.removeChild(u),S&&S.nodeType===8)if(u=S.data,u==="/$"){if(c===0){t.removeChild(S),Ci(n);return}c--}else u!=="$"&&u!=="$?"&&u!=="$!"||c++;u=S}while(u);Ci(n)}function ji(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return t}function Vl(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var u=t.data;if(u==="$"||u==="$!"||u==="$?"){if(n===0)return t;n--}else u==="/$"&&n++}t=t.previousSibling}return null}var Lu=Math.random().toString(36).slice(2),Ko="__reactFiber$"+Lu,sl="__reactProps$"+Lu,hi="__reactContainer$"+Lu,Yl="__reactEvents$"+Lu,ls="__reactListeners$"+Lu,ks="__reactHandles$"+Lu;function ou(t){var n=t[Ko];if(n)return n;for(var u=t.parentNode;u;){if(n=u[hi]||u[Ko]){if(u=n.alternate,n.child!==null||u!==null&&u.child!==null)for(t=Vl(t);t!==null;){if(u=t[Ko])return u;t=Vl(t)}return n}t=u,u=t.parentNode}return null}function cl(t){return t=t[Ko]||t[hi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Nu(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(r(33))}function Bi(t){return t[sl]||null}var Ql=[],Du=-1;function gi(t){return{current:t}}function Rr(t){0>Du||(t.current=Ql[Du],Ql[Du]=null,Du--)}function Tr(t,n){Du++,Ql[Du]=t.current,t.current=n}var Fi={},Pa=gi(Fi),Va=gi(!1),iu=Fi;function ku(t,n){var u=t.type.contextTypes;if(!u)return Fi;var c=t.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===n)return c.__reactInternalMemoizedMaskedChildContext;var S={},C;for(C in u)S[C]=n[C];return c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=n,t.__reactInternalMemoizedMaskedChildContext=S),S}function Ma(t){return t=t.childContextTypes,t!=null}function _u(){Rr(Va),Rr(Pa)}function ss(t,n,u){if(Pa.current!==Fi)throw Error(r(168));Tr(Pa,n),Tr(Va,u)}function cs(t,n,u){var c=t.stateNode;if(n=n.childContextTypes,typeof c.getChildContext!="function")return u;c=c.getChildContext();for(var S in c)if(!(S in n))throw Error(r(108,Y(t)||"Unknown",S));return L({},u,c)}function T(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Fi,iu=Pa.current,Tr(Pa,t),Tr(Va,Va.current),!0}function B(t,n,u){var c=t.stateNode;if(!c)throw Error(r(169));u?(t=cs(t,n,iu),c.__reactInternalMemoizedMergedChildContext=t,Rr(Va),Rr(Pa),Tr(Pa,t)):Rr(Va),Tr(Va,u)}var U=null,ie=!1,ne=!1;function de(t){U===null?U=[t]:U.push(t)}function Se(t){ie=!0,de(t)}function De(){if(!ne&&U!==null){ne=!0;var t=0,n=nr;try{var u=U;for(nr=1;t<u.length;t++){var c=u[t];do c=c(!0);while(c!==null)}U=null,ie=!1}catch(S){throw U!==null&&(U=U.slice(t+1)),Gr(za,De),S}finally{nr=n,ne=!1}}return null}var $e=[],nt=0,yt=null,rt=0,mt=[],vt=0,Et=null,Ot=1,Ct="";function _t(t,n){$e[nt++]=rt,$e[nt++]=yt,yt=t,rt=n}function Mt(t,n,u){mt[vt++]=Ot,mt[vt++]=Ct,mt[vt++]=Et,Et=t;var c=Ot;t=Ct;var S=32-wa(c)-1;c&=~(1<<S),u+=1;var C=32-wa(n)+S;if(30<C){var Z=S-S%5;C=(c&(1<<Z)-1).toString(32),c>>=Z,S-=Z,Ot=1<<32-wa(n)+S|u<<S|c,Ct=C+t}else Ot=1<<C|u<<S|c,Ct=t}function It(t){t.return!==null&&(_t(t,1),Mt(t,1,0))}function ht(t){for(;t===yt;)yt=$e[--nt],$e[nt]=null,rt=$e[--nt],$e[nt]=null;for(;t===Et;)Et=mt[--vt],mt[vt]=null,Ct=mt[--vt],mt[vt]=null,Ot=mt[--vt],mt[vt]=null}var Dt=null,At=null,Rt=!1,Lt=null;function Ht(t,n){var u=ti(5,null,null,0);u.elementType="DELETED",u.stateNode=n,u.return=t,n=t.deletions,n===null?(t.deletions=[u],t.flags|=16):n.push(u)}function Bt(t,n){switch(t.tag){case 5:var u=t.type;return n=n.nodeType!==1||u.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(t.stateNode=n,Dt=t,At=ji(n.firstChild),!0):!1;case 6:return n=t.pendingProps===""||n.nodeType!==3?null:n,n!==null?(t.stateNode=n,Dt=t,At=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(u=Et!==null?{id:Ot,overflow:Ct}:null,t.memoizedState={dehydrated:n,treeContext:u,retryLane:1073741824},u=ti(18,null,null,0),u.stateNode=n,u.return=t,t.child=u,Dt=t,At=null,!0):!1;default:return!1}}function Qt(t){return(t.mode&1)!==0&&(t.flags&128)===0}function zt(t){if(Rt){var n=At;if(n){var u=n;if(!Bt(t,n)){if(Qt(t))throw Error(r(418));n=ji(u.nextSibling);var c=Dt;n&&Bt(t,n)?Ht(c,u):(t.flags=t.flags&-4097|2,Rt=!1,Dt=t)}}else{if(Qt(t))throw Error(r(418));t.flags=t.flags&-4097|2,Rt=!1,Dt=t}}}function Xt(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Dt=t}function nn(t){if(t!==Dt)return!1;if(!Rt)return Xt(t),Rt=!0,!1;var n;if((n=t.tag!==3)&&!(n=t.tag!==5)&&(n=t.type,n=n!=="head"&&n!=="body"&&!Gl(t.type,t.memoizedProps)),n&&(n=At)){if(Qt(t))throw en(),Error(r(418));for(;n;)Ht(t,n),n=ji(n.nextSibling)}if(Xt(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));e:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8){var u=t.data;if(u==="/$"){if(n===0){At=ji(t.nextSibling);break e}n--}else u!=="$"&&u!=="$!"&&u!=="$?"||n++}t=t.nextSibling}At=null}}else At=Dt?ji(t.stateNode.nextSibling):null;return!0}function en(){for(var t=At;t;)t=ji(t.nextSibling)}function cn(){At=Dt=null,Rt=!1}function gn(t){Lt===null?Lt=[t]:Lt.push(t)}var hn=A.ReactCurrentBatchConfig;function mn(t,n){if(t&&t.defaultProps){n=L({},n),t=t.defaultProps;for(var u in t)n[u]===void 0&&(n[u]=t[u]);return n}return n}var wn=gi(null),rr=null,sn=null,Pn=null;function jn(){Pn=sn=rr=null}function zn(t){var n=wn.current;Rr(wn),t._currentValue=n}function Mn(t,n,u){for(;t!==null;){var c=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,c!==null&&(c.childLanes|=n)):c!==null&&(c.childLanes&n)!==n&&(c.childLanes|=n),t===u)break;t=t.return}}function bn(t,n){rr=t,Pn=sn=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&n&&(Na=!0),t.firstContext=null)}function tn(t){var n=t._currentValue;if(Pn!==t)if(t={context:t,memoizedValue:n,next:null},sn===null){if(rr===null)throw Error(r(308));sn=t,rr.dependencies={lanes:0,firstContext:t}}else sn=sn.next=t;return n}var Nn=null;function or(t){Nn===null?Nn=[t]:Nn.push(t)}function Yn(t,n,u,c){var S=n.interleaved;return S===null?(u.next=u,or(n)):(u.next=S.next,S.next=u),n.interleaved=u,Jn(t,c)}function Jn(t,n){t.lanes|=n;var u=t.alternate;for(u!==null&&(u.lanes|=n),u=t,t=t.return;t!==null;)t.childLanes|=n,u=t.alternate,u!==null&&(u.childLanes|=n),u=t,t=t.return;return u.tag===3?u.stateNode:null}var Er=!1;function ir(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Vr(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function vn(t,n){return{eventTime:t,lane:n,tag:0,payload:null,callback:null,next:null}}function Qn(t,n,u){var c=t.updateQueue;if(c===null)return null;if(c=c.shared,lr&2){var S=c.pending;return S===null?n.next=n:(n.next=S.next,S.next=n),c.pending=n,Jn(t,u)}return S=c.interleaved,S===null?(n.next=n,or(c)):(n.next=S.next,S.next=n),c.interleaved=n,Jn(t,u)}function hr(t,n,u){if(n=n.updateQueue,n!==null&&(n=n.shared,(u&4194240)!==0)){var c=n.lanes;c&=t.pendingLanes,u|=c,n.lanes=u,Ta(t,u)}}function $n(t,n){var u=t.updateQueue,c=t.alternate;if(c!==null&&(c=c.updateQueue,u===c)){var S=null,C=null;if(u=u.firstBaseUpdate,u!==null){do{var Z={eventTime:u.eventTime,lane:u.lane,tag:u.tag,payload:u.payload,callback:u.callback,next:null};C===null?S=C=Z:C=C.next=Z,u=u.next}while(u!==null);C===null?S=C=n:C=C.next=n}else S=C=n;u={baseState:c.baseState,firstBaseUpdate:S,lastBaseUpdate:C,shared:c.shared,effects:c.effects},t.updateQueue=u;return}t=u.lastBaseUpdate,t===null?u.firstBaseUpdate=n:t.next=n,u.lastBaseUpdate=n}function Yr(t,n,u,c){var S=t.updateQueue;Er=!1;var C=S.firstBaseUpdate,Z=S.lastBaseUpdate,ge=S.shared.pending;if(ge!==null){S.shared.pending=null;var Me=ge,qe=Me.next;Me.next=null,Z===null?C=qe:Z.next=qe,Z=Me;var xt=t.alternate;xt!==null&&(xt=xt.updateQueue,ge=xt.lastBaseUpdate,ge!==Z&&(ge===null?xt.firstBaseUpdate=qe:ge.next=qe,xt.lastBaseUpdate=Me))}if(C!==null){var Tt=S.baseState;Z=0,xt=qe=Me=null,ge=C;do{var St=ge.lane,Wt=ge.eventTime;if((c&St)===St){xt!==null&&(xt=xt.next={eventTime:Wt,lane:0,tag:ge.tag,payload:ge.payload,callback:ge.callback,next:null});e:{var Jt=t,rn=ge;switch(St=n,Wt=u,rn.tag){case 1:if(Jt=rn.payload,typeof Jt=="function"){Tt=Jt.call(Wt,Tt,St);break e}Tt=Jt;break e;case 3:Jt.flags=Jt.flags&-65537|128;case 0:if(Jt=rn.payload,St=typeof Jt=="function"?Jt.call(Wt,Tt,St):Jt,St==null)break e;Tt=L({},Tt,St);break e;case 2:Er=!0}}ge.callback!==null&&ge.lane!==0&&(t.flags|=64,St=S.effects,St===null?S.effects=[ge]:St.push(ge))}else Wt={eventTime:Wt,lane:St,tag:ge.tag,payload:ge.payload,callback:ge.callback,next:null},xt===null?(qe=xt=Wt,Me=Tt):xt=xt.next=Wt,Z|=St;if(ge=ge.next,ge===null){if(ge=S.shared.pending,ge===null)break;St=ge,ge=St.next,St.next=null,S.lastBaseUpdate=St,S.shared.pending=null}}while(1);if(xt===null&&(Me=Tt),S.baseState=Me,S.firstBaseUpdate=qe,S.lastBaseUpdate=xt,n=S.shared.interleaved,n!==null){S=n;do Z|=S.lane,S=S.next;while(S!==n)}else C===null&&(S.shared.lanes=0);pl|=Z,t.lanes=Z,t.memoizedState=Tt}}function Lr(t,n,u){if(t=n.effects,n.effects=null,t!==null)for(n=0;n<t.length;n++){var c=t[n],S=c.callback;if(S!==null){if(c.callback=null,c=u,typeof S!="function")throw Error(r(191,S));S.call(c)}}}var Ra=new o.Component().refs;function cr(t,n,u,c){n=t.memoizedState,u=u(c,n),u=u==null?n:L({},n,u),t.memoizedState=u,t.lanes===0&&(t.updateQueue.baseState=u)}var Qr={isMounted:function(t){return(t=t._reactInternals)?Ut(t)===t:!1},enqueueSetState:function(t,n,u){t=t._reactInternals;var c=lo(),S=Gu(t),C=vn(c,S);C.payload=n,u!=null&&(C.callback=u),n=Qn(t,C,S),n!==null&&(xi(n,t,S,c),hr(n,t,S))},enqueueReplaceState:function(t,n,u){t=t._reactInternals;var c=lo(),S=Gu(t),C=vn(c,S);C.tag=1,C.payload=n,u!=null&&(C.callback=u),n=Qn(t,C,S),n!==null&&(xi(n,t,S,c),hr(n,t,S))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var u=lo(),c=Gu(t),S=vn(u,c);S.tag=2,n!=null&&(S.callback=n),n=Qn(t,S,c),n!==null&&(xi(n,t,c,u),hr(n,t,c))}};function fa(t,n,u,c,S,C,Z){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(c,C,Z):n.prototype&&n.prototype.isPureReactComponent?!Yt(u,c)||!Yt(S,C):!0}function fr(t,n,u){var c=!1,S=Fi,C=n.contextType;return typeof C=="object"&&C!==null?C=tn(C):(S=Ma(n)?iu:Pa.current,c=n.contextTypes,C=(c=c!=null)?ku(t,S):Fi),n=new n(u,C),t.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Qr,t.stateNode=n,n._reactInternals=t,c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=S,t.__reactInternalMemoizedMaskedChildContext=C),n}function Hr(t,n,u,c){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(u,c),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(u,c),n.state!==t&&Qr.enqueueReplaceState(n,n.state,null)}function ya(t,n,u,c){var S=t.stateNode;S.props=u,S.state=t.memoizedState,S.refs=Ra,ir(t);var C=n.contextType;typeof C=="object"&&C!==null?S.context=tn(C):(C=Ma(n)?iu:Pa.current,S.context=ku(t,C)),S.state=t.memoizedState,C=n.getDerivedStateFromProps,typeof C=="function"&&(cr(t,n,C,u),S.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof S.getSnapshotBeforeUpdate=="function"||typeof S.UNSAFE_componentWillMount!="function"&&typeof S.componentWillMount!="function"||(n=S.state,typeof S.componentWillMount=="function"&&S.componentWillMount(),typeof S.UNSAFE_componentWillMount=="function"&&S.UNSAFE_componentWillMount(),n!==S.state&&Qr.enqueueReplaceState(S,S.state,null),Yr(t,u,S,c),S.state=t.memoizedState),typeof S.componentDidMount=="function"&&(t.flags|=4194308)}function Dn(t,n,u){if(t=u.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(u._owner){if(u=u._owner,u){if(u.tag!==1)throw Error(r(309));var c=u.stateNode}if(!c)throw Error(r(147,t));var S=c,C=""+t;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===C?n.ref:(n=function(Z){var ge=S.refs;ge===Ra&&(ge=S.refs={}),Z===null?delete ge[C]:ge[C]=Z},n._stringRef=C,n)}if(typeof t!="string")throw Error(r(284));if(!u._owner)throw Error(r(290,t))}return t}function qn(t,n){throw t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t))}function Or(t){var n=t._init;return n(t._payload)}function Ea(t){function n(Ge,ke){if(t){var Ye=Ge.deletions;Ye===null?(Ge.deletions=[ke],Ge.flags|=16):Ye.push(ke)}}function u(Ge,ke){if(!t)return null;for(;ke!==null;)n(Ge,ke),ke=ke.sibling;return null}function c(Ge,ke){for(Ge=new Map;ke!==null;)ke.key!==null?Ge.set(ke.key,ke):Ge.set(ke.index,ke),ke=ke.sibling;return Ge}function S(Ge,ke){return Ge=Vu(Ge,ke),Ge.index=0,Ge.sibling=null,Ge}function C(Ge,ke,Ye){return Ge.index=Ye,t?(Ye=Ge.alternate,Ye!==null?(Ye=Ye.index,Ye<ke?(Ge.flags|=2,ke):Ye):(Ge.flags|=2,ke)):(Ge.flags|=1048576,ke)}function Z(Ge){return t&&Ge.alternate===null&&(Ge.flags|=2),Ge}function ge(Ge,ke,Ye,Nt){return ke===null||ke.tag!==6?(ke=nc(Ye,Ge.mode,Nt),ke.return=Ge,ke):(ke=S(ke,Ye),ke.return=Ge,ke)}function Me(Ge,ke,Ye,Nt){var un=Ye.type;return un===K?xt(Ge,ke,Ye.props.children,Nt,Ye.key):ke!==null&&(ke.elementType===un||typeof un=="object"&&un!==null&&un.$$typeof===q&&Or(un)===ke.type)?(Nt=S(ke,Ye.props),Nt.ref=Dn(Ge,ke,Ye),Nt.return=Ge,Nt):(Nt=ws(Ye.type,Ye.key,Ye.props,null,Ge.mode,Nt),Nt.ref=Dn(Ge,ke,Ye),Nt.return=Ge,Nt)}function qe(Ge,ke,Ye,Nt){return ke===null||ke.tag!==4||ke.stateNode.containerInfo!==Ye.containerInfo||ke.stateNode.implementation!==Ye.implementation?(ke=rc(Ye,Ge.mode,Nt),ke.return=Ge,ke):(ke=S(ke,Ye.children||[]),ke.return=Ge,ke)}function xt(Ge,ke,Ye,Nt,un){return ke===null||ke.tag!==7?(ke=yl(Ye,Ge.mode,Nt,un),ke.return=Ge,ke):(ke=S(ke,Ye),ke.return=Ge,ke)}function Tt(Ge,ke,Ye){if(typeof ke=="string"&&ke!==""||typeof ke=="number")return ke=nc(""+ke,Ge.mode,Ye),ke.return=Ge,ke;if(typeof ke=="object"&&ke!==null){switch(ke.$$typeof){case k:return Ye=ws(ke.type,ke.key,ke.props,null,Ge.mode,Ye),Ye.ref=Dn(Ge,null,ke),Ye.return=Ge,Ye;case z:return ke=rc(ke,Ge.mode,Ye),ke.return=Ge,ke;case q:var Nt=ke._init;return Tt(Ge,Nt(ke._payload),Ye)}if(ue(ke)||O(ke))return ke=yl(ke,Ge.mode,Ye,null),ke.return=Ge,ke;qn(Ge,ke)}return null}function St(Ge,ke,Ye,Nt){var un=ke!==null?ke.key:null;if(typeof Ye=="string"&&Ye!==""||typeof Ye=="number")return un!==null?null:ge(Ge,ke,""+Ye,Nt);if(typeof Ye=="object"&&Ye!==null){switch(Ye.$$typeof){case k:return Ye.key===un?Me(Ge,ke,Ye,Nt):null;case z:return Ye.key===un?qe(Ge,ke,Ye,Nt):null;case q:return un=Ye._init,St(Ge,ke,un(Ye._payload),Nt)}if(ue(Ye)||O(Ye))return un!==null?null:xt(Ge,ke,Ye,Nt,null);qn(Ge,Ye)}return null}function Wt(Ge,ke,Ye,Nt,un){if(typeof Nt=="string"&&Nt!==""||typeof Nt=="number")return Ge=Ge.get(Ye)||null,ge(ke,Ge,""+Nt,un);if(typeof Nt=="object"&&Nt!==null){switch(Nt.$$typeof){case k:return Ge=Ge.get(Nt.key===null?Ye:Nt.key)||null,Me(ke,Ge,Nt,un);case z:return Ge=Ge.get(Nt.key===null?Ye:Nt.key)||null,qe(ke,Ge,Nt,un);case q:var En=Nt._init;return Wt(Ge,ke,Ye,En(Nt._payload),un)}if(ue(Nt)||O(Nt))return Ge=Ge.get(Ye)||null,xt(ke,Ge,Nt,un,null);qn(ke,Nt)}return null}function Jt(Ge,ke,Ye,Nt){for(var un=null,En=null,Sn=ke,Cn=ke=0,ka=null;Sn!==null&&Cn<Ye.length;Cn++){Sn.index>Cn?(ka=Sn,Sn=null):ka=Sn.sibling;var pr=St(Ge,Sn,Ye[Cn],Nt);if(pr===null){Sn===null&&(Sn=ka);break}t&&Sn&&pr.alternate===null&&n(Ge,Sn),ke=C(pr,ke,Cn),En===null?un=pr:En.sibling=pr,En=pr,Sn=ka}if(Cn===Ye.length)return u(Ge,Sn),Rt&&_t(Ge,Cn),un;if(Sn===null){for(;Cn<Ye.length;Cn++)Sn=Tt(Ge,Ye[Cn],Nt),Sn!==null&&(ke=C(Sn,ke,Cn),En===null?un=Sn:En.sibling=Sn,En=Sn);return Rt&&_t(Ge,Cn),un}for(Sn=c(Ge,Sn);Cn<Ye.length;Cn++)ka=Wt(Sn,Ge,Cn,Ye[Cn],Nt),ka!==null&&(t&&ka.alternate!==null&&Sn.delete(ka.key===null?Cn:ka.key),ke=C(ka,ke,Cn),En===null?un=ka:En.sibling=ka,En=ka);return t&&Sn.forEach(function(Yu){return n(Ge,Yu)}),Rt&&_t(Ge,Cn),un}function rn(Ge,ke,Ye,Nt){var un=O(Ye);if(typeof un!="function")throw Error(r(150));if(Ye=un.call(Ye),Ye==null)throw Error(r(151));for(var En=un=null,Sn=ke,Cn=ke=0,ka=null,pr=Ye.next();Sn!==null&&!pr.done;Cn++,pr=Ye.next()){Sn.index>Cn?(ka=Sn,Sn=null):ka=Sn.sibling;var Yu=St(Ge,Sn,pr.value,Nt);if(Yu===null){Sn===null&&(Sn=ka);break}t&&Sn&&Yu.alternate===null&&n(Ge,Sn),ke=C(Yu,ke,Cn),En===null?un=Yu:En.sibling=Yu,En=Yu,Sn=ka}if(pr.done)return u(Ge,Sn),Rt&&_t(Ge,Cn),un;if(Sn===null){for(;!pr.done;Cn++,pr=Ye.next())pr=Tt(Ge,pr.value,Nt),pr!==null&&(ke=C(pr,ke,Cn),En===null?un=pr:En.sibling=pr,En=pr);return Rt&&_t(Ge,Cn),un}for(Sn=c(Ge,Sn);!pr.done;Cn++,pr=Ye.next())pr=Wt(Sn,Ge,Cn,pr.value,Nt),pr!==null&&(t&&pr.alternate!==null&&Sn.delete(pr.key===null?Cn:pr.key),ke=C(pr,ke,Cn),En===null?un=pr:En.sibling=pr,En=pr);return t&&Sn.forEach(function(gf){return n(Ge,gf)}),Rt&&_t(Ge,Cn),un}function la(Ge,ke,Ye,Nt){if(typeof Ye=="object"&&Ye!==null&&Ye.type===K&&Ye.key===null&&(Ye=Ye.props.children),typeof Ye=="object"&&Ye!==null){switch(Ye.$$typeof){case k:e:{for(var un=Ye.key,En=ke;En!==null;){if(En.key===un){if(un=Ye.type,un===K){if(En.tag===7){u(Ge,En.sibling),ke=S(En,Ye.props.children),ke.return=Ge,Ge=ke;break e}}else if(En.elementType===un||typeof un=="object"&&un!==null&&un.$$typeof===q&&Or(un)===En.type){u(Ge,En.sibling),ke=S(En,Ye.props),ke.ref=Dn(Ge,En,Ye),ke.return=Ge,Ge=ke;break e}u(Ge,En);break}else n(Ge,En);En=En.sibling}Ye.type===K?(ke=yl(Ye.props.children,Ge.mode,Nt,Ye.key),ke.return=Ge,Ge=ke):(Nt=ws(Ye.type,Ye.key,Ye.props,null,Ge.mode,Nt),Nt.ref=Dn(Ge,ke,Ye),Nt.return=Ge,Ge=Nt)}return Z(Ge);case z:e:{for(En=Ye.key;ke!==null;){if(ke.key===En)if(ke.tag===4&&ke.stateNode.containerInfo===Ye.containerInfo&&ke.stateNode.implementation===Ye.implementation){u(Ge,ke.sibling),ke=S(ke,Ye.children||[]),ke.return=Ge,Ge=ke;break e}else{u(Ge,ke);break}else n(Ge,ke);ke=ke.sibling}ke=rc(Ye,Ge.mode,Nt),ke.return=Ge,Ge=ke}return Z(Ge);case q:return En=Ye._init,la(Ge,ke,En(Ye._payload),Nt)}if(ue(Ye))return Jt(Ge,ke,Ye,Nt);if(O(Ye))return rn(Ge,ke,Ye,Nt);qn(Ge,Ye)}return typeof Ye=="string"&&Ye!==""||typeof Ye=="number"?(Ye=""+Ye,ke!==null&&ke.tag===6?(u(Ge,ke.sibling),ke=S(ke,Ye),ke.return=Ge,Ge=ke):(u(Ge,ke),ke=nc(Ye,Ge.mode,Nt),ke.return=Ge,Ge=ke),Z(Ge)):u(Ge,ke)}return la}var gr=Ea(!0),La=Ea(!1),Cr={},kn=gi(Cr),ur=gi(Cr),Sa=gi(Cr);function Zr(t){if(t===Cr)throw Error(r(174));return t}function Nr(t,n){switch(Tr(Sa,n),Tr(ur,t),Tr(kn,Cr),t=n.nodeType,t){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:he(null,"");break;default:t=t===8?n.parentNode:n,n=t.namespaceURI||null,t=t.tagName,n=he(n,t)}Rr(kn),Tr(kn,n)}function oa(){Rr(kn),Rr(ur),Rr(Sa)}function oo(t){Zr(Sa.current);var n=Zr(kn.current),u=he(n,t.type);n!==u&&(Tr(ur,t),Tr(kn,u))}function Wr(t){ur.current===t&&(Rr(kn),Rr(ur))}var fn=gi(0);function An(t){for(var n=t;n!==null;){if(n.tag===13){var u=n.memoizedState;if(u!==null&&(u=u.dehydrated,u===null||u.data==="$?"||u.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Xr=[];function an(){for(var t=0;t<Xr.length;t++)Xr[t]._workInProgressVersionPrimary=null;Xr.length=0}var yn=A.ReactCurrentDispatcher,dr=A.ReactCurrentBatchConfig,xr=0,Rn=null,Hn=null,jr=null,po=!1,ia=!1,da=0,Vo=0;function vr(){throw Error(r(321))}function Jr(t,n){if(n===null)return!1;for(var u=0;u<n.length&&u<t.length;u++)if(!Ca(t[u],n[u]))return!1;return!0}function Zn(t,n,u,c,S,C){if(xr=C,Rn=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,yn.current=t===null||t.memoizedState===null?Xl:yo,t=u(c,S),ia){C=0;do{if(ia=!1,da=0,25<=C)throw Error(r(301));C+=1,jr=Hn=null,n.updateQueue=null,yn.current=Nl,t=u(c,S)}while(ia)}if(yn.current=su,n=Hn!==null&&Hn.next!==null,xr=0,jr=Hn=Rn=null,po=!1,n)throw Error(r(300));return t}function Tn(){var t=da!==0;return da=0,t}function Wn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return jr===null?Rn.memoizedState=jr=t:jr=jr.next=t,jr}function er(){if(Hn===null){var t=Rn.alternate;t=t!==null?t.memoizedState:null}else t=Hn.next;var n=jr===null?Rn.memoizedState:jr.next;if(n!==null)jr=n,Hn=t;else{if(t===null)throw Error(r(310));Hn=t,t={memoizedState:Hn.memoizedState,baseState:Hn.baseState,baseQueue:Hn.baseQueue,queue:Hn.queue,next:null},jr===null?Rn.memoizedState=jr=t:jr=jr.next=t}return jr}function qr(t,n){return typeof n=="function"?n(t):n}function na(t){var n=er(),u=n.queue;if(u===null)throw Error(r(311));u.lastRenderedReducer=t;var c=Hn,S=c.baseQueue,C=u.pending;if(C!==null){if(S!==null){var Z=S.next;S.next=C.next,C.next=Z}c.baseQueue=S=C,u.pending=null}if(S!==null){C=S.next,c=c.baseState;var ge=Z=null,Me=null,qe=C;do{var xt=qe.lane;if((xr&xt)===xt)Me!==null&&(Me=Me.next={lane:0,action:qe.action,hasEagerState:qe.hasEagerState,eagerState:qe.eagerState,next:null}),c=qe.hasEagerState?qe.eagerState:t(c,qe.action);else{var Tt={lane:xt,action:qe.action,hasEagerState:qe.hasEagerState,eagerState:qe.eagerState,next:null};Me===null?(ge=Me=Tt,Z=c):Me=Me.next=Tt,Rn.lanes|=xt,pl|=xt}qe=qe.next}while(qe!==null&&qe!==C);Me===null?Z=c:Me.next=ge,Ca(c,n.memoizedState)||(Na=!0),n.memoizedState=c,n.baseState=Z,n.baseQueue=Me,u.lastRenderedState=c}if(t=u.interleaved,t!==null){S=t;do C=S.lane,Rn.lanes|=C,pl|=C,S=S.next;while(S!==t)}else S===null&&(u.lanes=0);return[n.memoizedState,u.dispatch]}function ho(t){var n=er(),u=n.queue;if(u===null)throw Error(r(311));u.lastRenderedReducer=t;var c=u.dispatch,S=u.pending,C=n.memoizedState;if(S!==null){u.pending=null;var Z=S=S.next;do C=t(C,Z.action),Z=Z.next;while(Z!==S);Ca(C,n.memoizedState)||(Na=!0),n.memoizedState=C,n.baseQueue===null&&(n.baseState=C),u.lastRenderedState=C}return[C,c]}function Ur(){}function mi(t,n){var u=Rn,c=er(),S=n(),C=!Ca(c.memoizedState,S);if(C&&(c.memoizedState=S,Na=!0),c=c.queue,Xo(io.bind(null,u,c,t),[t]),c.getSnapshot!==n||C||jr!==null&&jr.memoizedState.tag&1){if(u.flags|=2048,uo(9,Yo.bind(null,u,c,S,n),void 0,null),Da===null)throw Error(r(349));xr&30||Lo(u,n,S)}return S}function Lo(t,n,u){t.flags|=16384,t={getSnapshot:n,value:u},n=Rn.updateQueue,n===null?(n={lastEffect:null,stores:null},Rn.updateQueue=n,n.stores=[t]):(u=n.stores,u===null?n.stores=[t]:u.push(t))}function Yo(t,n,u,c){n.value=u,n.getSnapshot=c,Ya(n)&&yi(t)}function io(t,n,u){return u(function(){Ya(n)&&yi(t)})}function Ya(t){var n=t.getSnapshot;t=t.value;try{var u=n();return!Ca(t,u)}catch(c){return!0}}function yi(t){var n=Jn(t,1);n!==null&&xi(n,t,1,-1)}function ju(t){var n=Wn();return typeof t=="function"&&(t=t()),n.memoizedState=n.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:qr,lastRenderedState:t},n.queue=t,t=t.dispatch=No.bind(null,Rn,t),[n.memoizedState,t]}function uo(t,n,u,c){return t={tag:t,create:n,destroy:u,deps:c,next:null},n=Rn.updateQueue,n===null?(n={lastEffect:null,stores:null},Rn.updateQueue=n,n.lastEffect=t.next=t):(u=n.lastEffect,u===null?n.lastEffect=t.next=t:(c=u.next,u.next=t,t.next=c,n.lastEffect=t)),t}function Ui(){return er().memoizedState}function Qa(t,n,u,c){var S=Wn();Rn.flags|=t,S.memoizedState=uo(1|n,u,void 0,c===void 0?null:c)}function Xa(t,n,u,c){var S=er();c=c===void 0?null:c;var C=void 0;if(Hn!==null){var Z=Hn.memoizedState;if(C=Z.destroy,c!==null&&Jr(c,Z.deps)){S.memoizedState=uo(n,u,C,c);return}}Rn.flags|=t,S.memoizedState=uo(1|n,u,C,c)}function Qo(t,n){return Qa(8390656,8,t,n)}function Xo(t,n){return Xa(2048,8,t,n)}function Jo(t,n){return Xa(4,2,t,n)}function go(t,n){return Xa(4,4,t,n)}function uu(t,n){if(typeof n=="function")return t=t(),n(t),function(){n(null)};if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function qo(t,n,u){return u=u!=null?u.concat([t]):null,Xa(4,4,uu.bind(null,n,t),u)}function mo(){}function lu(t,n){var u=er();n=n===void 0?null:n;var c=u.memoizedState;return c!==null&&n!==null&&Jr(n,c[1])?c[0]:(u.memoizedState=[t,n],t)}function wr(t,n){var u=er();n=n===void 0?null:n;var c=u.memoizedState;return c!==null&&n!==null&&Jr(n,c[1])?c[0]:(t=t(),u.memoizedState=[t,n],t)}function tr(t,n,u){return xr&21?(Ca(u,n)||(u=Kr(),Rn.lanes|=u,pl|=u,t.baseState=!0),n):(t.baseState&&(t.baseState=!1,Na=!0),t.memoizedState=u)}function mr(t,n){var u=nr;nr=u!==0&&4>u?u:4,t(!0);var c=dr.transition;dr.transition={};try{t(!1),n()}finally{nr=u,dr.transition=c}}function ua(){return er().memoizedState}function ba(t,n,u){var c=Gu(t);if(u={lane:c,action:u,hasEagerState:!1,eagerState:null,next:null},Do(t))Bu(n,u);else if(u=Yn(t,n,u,c),u!==null){var S=lo();xi(u,t,c,S),Ll(u,n,c)}}function No(t,n,u){var c=Gu(t),S={lane:c,action:u,hasEagerState:!1,eagerState:null,next:null};if(Do(t))Bu(n,S);else{var C=t.alternate;if(t.lanes===0&&(C===null||C.lanes===0)&&(C=n.lastRenderedReducer,C!==null))try{var Z=n.lastRenderedState,ge=C(Z,u);if(S.hasEagerState=!0,S.eagerState=ge,Ca(ge,Z)){var Me=n.interleaved;Me===null?(S.next=S,or(n)):(S.next=Me.next,Me.next=S),n.interleaved=S;return}}catch(qe){}finally{}u=Yn(t,n,S,c),u!==null&&(S=lo(),xi(u,t,c,S),Ll(u,n,c))}}function Do(t){var n=t.alternate;return t===Rn||n!==null&&n===Rn}function Bu(t,n){ia=po=!0;var u=t.pending;u===null?n.next=n:(n.next=u.next,u.next=n),t.pending=n}function Ll(t,n,u){if(u&4194240){var c=n.lanes;c&=t.pendingLanes,u|=c,n.lanes=u,Ta(t,u)}}var su={readContext:tn,useCallback:vr,useContext:vr,useEffect:vr,useImperativeHandle:vr,useInsertionEffect:vr,useLayoutEffect:vr,useMemo:vr,useReducer:vr,useRef:vr,useState:vr,useDebugValue:vr,useDeferredValue:vr,useTransition:vr,useMutableSource:vr,useSyncExternalStore:vr,useId:vr,unstable_isNewReconciler:!1},Xl={readContext:tn,useCallback:function(t,n){return Wn().memoizedState=[t,n===void 0?null:n],t},useContext:tn,useEffect:Qo,useImperativeHandle:function(t,n,u){return u=u!=null?u.concat([t]):null,Qa(4194308,4,uu.bind(null,n,t),u)},useLayoutEffect:function(t,n){return Qa(4194308,4,t,n)},useInsertionEffect:function(t,n){return Qa(4,2,t,n)},useMemo:function(t,n){var u=Wn();return n=n===void 0?null:n,t=t(),u.memoizedState=[t,n],t},useReducer:function(t,n,u){var c=Wn();return n=u!==void 0?u(n):n,c.memoizedState=c.baseState=n,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:n},c.queue=t,t=t.dispatch=ba.bind(null,Rn,t),[c.memoizedState,t]},useRef:function(t){var n=Wn();return t={current:t},n.memoizedState=t},useState:ju,useDebugValue:mo,useDeferredValue:function(t){return Wn().memoizedState=t},useTransition:function(){var t=ju(!1),n=t[0];return t=mr.bind(null,t[1]),Wn().memoizedState=t,[n,t]},useMutableSource:function(){},useSyncExternalStore:function(t,n,u){var c=Rn,S=Wn();if(Rt){if(u===void 0)throw Error(r(407));u=u()}else{if(u=n(),Da===null)throw Error(r(349));xr&30||Lo(c,n,u)}S.memoizedState=u;var C={value:u,getSnapshot:n};return S.queue=C,Qo(io.bind(null,c,C,t),[t]),c.flags|=2048,uo(9,Yo.bind(null,c,C,u,n),void 0,null),u},useId:function(){var t=Wn(),n=Da.identifierPrefix;if(Rt){var u=Ct,c=Ot;u=(c&~(1<<32-wa(c)-1)).toString(32)+u,n=":"+n+"R"+u,u=da++,0<u&&(n+="H"+u.toString(32)),n+=":"}else u=Vo++,n=":"+n+"r"+u.toString(32)+":";return t.memoizedState=n},unstable_isNewReconciler:!1},yo={readContext:tn,useCallback:lu,useContext:tn,useEffect:Xo,useImperativeHandle:qo,useInsertionEffect:Jo,useLayoutEffect:go,useMemo:wr,useReducer:na,useRef:Ui,useState:function(){return na(qr)},useDebugValue:mo,useDeferredValue:function(t){var n=er();return tr(n,Hn.memoizedState,t)},useTransition:function(){var t=na(qr)[0],n=er().memoizedState;return[t,n]},useMutableSource:Ur,useSyncExternalStore:mi,useId:ua,unstable_isNewReconciler:!1},Nl={readContext:tn,useCallback:lu,useContext:tn,useEffect:Xo,useImperativeHandle:qo,useInsertionEffect:Jo,useLayoutEffect:go,useMemo:wr,useReducer:ho,useRef:Ui,useState:function(){return ho(qr)},useDebugValue:mo,useDeferredValue:function(t){var n=er();return Hn===null?n.memoizedState=t:tr(n,Hn.memoizedState,t)},useTransition:function(){var t=ho(qr)[0],n=er().memoizedState;return[t,n]},useMutableSource:Ur,useSyncExternalStore:mi,useId:ua,unstable_isNewReconciler:!1};function Ja(t,n){try{var u="",c=n;do u+=H(c),c=c.return;while(c);var S=u}catch(C){S=`
Error generating stack: `+C.message+`
`+C.stack}return{value:t,source:n,stack:S,digest:null}}function Ei(t,n,u){return{value:t,source:null,stack:u!=null?u:null,digest:n!=null?n:null}}function zi(t,n){try{console.error(n.value)}catch(u){setTimeout(function(){throw u})}}var Fu=typeof WeakMap=="function"?WeakMap:Map;function Uu(t,n,u){u=vn(-1,u),u.tag=3,u.payload={element:null};var c=n.value;return u.callback=function(){ms||(ms=!0,Vs=c),zi(t,n)},u}function zu(t,n,u){u=vn(-1,u),u.tag=3;var c=t.type.getDerivedStateFromError;if(typeof c=="function"){var S=n.value;u.payload=function(){return c(S)},u.callback=function(){zi(t,n)}}var C=t.stateNode;return C!==null&&typeof C.componentDidCatch=="function"&&(u.callback=function(){zi(t,n),typeof c!="function"&&(Zu===null?Zu=new Set([this]):Zu.add(this));var Z=n.stack;this.componentDidCatch(n.value,{componentStack:Z!==null?Z:""})}),u}function fl(t,n,u){var c=t.pingCache;if(c===null){c=t.pingCache=new Fu;var S=new Set;c.set(n,S)}else S=c.get(n),S===void 0&&(S=new Set,c.set(n,S));S.has(u)||(S.add(u),t=af.bind(null,t,n,u),n.then(t,t))}function Dl(t){do{var n;if((n=t.tag===13)&&(n=t.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return t;t=t.return}while(t!==null);return null}function kl(t,n,u,c,S){return t.mode&1?(t.flags|=65536,t.lanes=S,t):(t===n?t.flags|=65536:(t.flags|=128,u.flags|=131072,u.flags&=-52805,u.tag===1&&(u.alternate===null?u.tag=17:(n=vn(-1,1),n.tag=2,Qn(u,n,1))),u.lanes|=1),t)}var Jl=A.ReactCurrentOwner,Na=!1;function Ft(t,n,u,c){n.child=t===null?La(n,null,u,c):gr(n,t.child,u,c)}function On(t,n,u,c,S){u=u.render;var C=n.ref;return bn(n,S),c=Zn(t,n,u,c,C,S),u=Tn(),t!==null&&!Na?(n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~S,cu(t,n,S)):(Rt&&u&&It(n),n.flags|=1,Ft(t,n,c,S),n.child)}function zr(t,n,u,c,S){if(t===null){var C=u.type;return typeof C=="function"&&!tc(C)&&C.defaultProps===void 0&&u.compare===null&&u.defaultProps===void 0?(n.tag=15,n.type=C,ra(t,n,C,c,S)):(t=ws(u.type,null,c,n,n.mode,S),t.ref=n.ref,t.return=n,n.child=t)}if(C=t.child,!(t.lanes&S)){var Z=C.memoizedProps;if(u=u.compare,u=u!==null?u:Yt,u(Z,c)&&t.ref===n.ref)return cu(t,n,S)}return n.flags|=1,t=Vu(C,c),t.ref=n.ref,t.return=n,n.child=t}function ra(t,n,u,c,S){if(t!==null){var C=t.memoizedProps;if(Yt(C,c)&&t.ref===n.ref)if(Na=!1,n.pendingProps=c=C,(t.lanes&S)!==0)t.flags&131072&&(Na=!0);else return n.lanes=t.lanes,cu(t,n,S)}return vl(t,n,u,c,S)}function $r(t,n,u){var c=n.pendingProps,S=c.children,C=t!==null?t.memoizedState:null;if(c.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},Tr(jl,ko),ko|=u;else{if(!(u&1073741824))return t=C!==null?C.baseLanes|u:u,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:t,cachePool:null,transitions:null},n.updateQueue=null,Tr(jl,ko),ko|=t,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=C!==null?C.baseLanes:u,Tr(jl,ko),ko|=c}else C!==null?(c=C.baseLanes|u,n.memoizedState=null):c=u,Tr(jl,ko),ko|=c;return Ft(t,n,S,u),n.child}function dl(t,n){var u=n.ref;(t===null&&u!==null||t!==null&&t.ref!==u)&&(n.flags|=512,n.flags|=2097152)}function vl(t,n,u,c,S){var C=Ma(u)?iu:Pa.current;return C=ku(n,C),bn(n,S),u=Zn(t,n,u,c,C,S),c=Tn(),t!==null&&!Na?(n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~S,cu(t,n,S)):(Rt&&c&&It(n),n.flags|=1,Ft(t,n,u,S),n.child)}function ql(t,n,u,c,S){if(Ma(u)){var C=!0;T(n)}else C=!1;if(bn(n,S),n.stateNode===null)ds(t,n),fr(n,u,c),ya(n,u,c,S),c=!0;else if(t===null){var Z=n.stateNode,ge=n.memoizedProps;Z.props=ge;var Me=Z.context,qe=u.contextType;typeof qe=="object"&&qe!==null?qe=tn(qe):(qe=Ma(u)?iu:Pa.current,qe=ku(n,qe));var xt=u.getDerivedStateFromProps,Tt=typeof xt=="function"||typeof Z.getSnapshotBeforeUpdate=="function";Tt||typeof Z.UNSAFE_componentWillReceiveProps!="function"&&typeof Z.componentWillReceiveProps!="function"||(ge!==c||Me!==qe)&&Hr(n,Z,c,qe),Er=!1;var St=n.memoizedState;Z.state=St,Yr(n,c,Z,S),Me=n.memoizedState,ge!==c||St!==Me||Va.current||Er?(typeof xt=="function"&&(cr(n,u,xt,c),Me=n.memoizedState),(ge=Er||fa(n,u,ge,c,St,Me,qe))?(Tt||typeof Z.UNSAFE_componentWillMount!="function"&&typeof Z.componentWillMount!="function"||(typeof Z.componentWillMount=="function"&&Z.componentWillMount(),typeof Z.UNSAFE_componentWillMount=="function"&&Z.UNSAFE_componentWillMount()),typeof Z.componentDidMount=="function"&&(n.flags|=4194308)):(typeof Z.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=c,n.memoizedState=Me),Z.props=c,Z.state=Me,Z.context=qe,c=ge):(typeof Z.componentDidMount=="function"&&(n.flags|=4194308),c=!1)}else{Z=n.stateNode,Vr(t,n),ge=n.memoizedProps,qe=n.type===n.elementType?ge:mn(n.type,ge),Z.props=qe,Tt=n.pendingProps,St=Z.context,Me=u.contextType,typeof Me=="object"&&Me!==null?Me=tn(Me):(Me=Ma(u)?iu:Pa.current,Me=ku(n,Me));var Wt=u.getDerivedStateFromProps;(xt=typeof Wt=="function"||typeof Z.getSnapshotBeforeUpdate=="function")||typeof Z.UNSAFE_componentWillReceiveProps!="function"&&typeof Z.componentWillReceiveProps!="function"||(ge!==Tt||St!==Me)&&Hr(n,Z,c,Me),Er=!1,St=n.memoizedState,Z.state=St,Yr(n,c,Z,S);var Jt=n.memoizedState;ge!==Tt||St!==Jt||Va.current||Er?(typeof Wt=="function"&&(cr(n,u,Wt,c),Jt=n.memoizedState),(qe=Er||fa(n,u,qe,c,St,Jt,Me)||!1)?(xt||typeof Z.UNSAFE_componentWillUpdate!="function"&&typeof Z.componentWillUpdate!="function"||(typeof Z.componentWillUpdate=="function"&&Z.componentWillUpdate(c,Jt,Me),typeof Z.UNSAFE_componentWillUpdate=="function"&&Z.UNSAFE_componentWillUpdate(c,Jt,Me)),typeof Z.componentDidUpdate=="function"&&(n.flags|=4),typeof Z.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof Z.componentDidUpdate!="function"||ge===t.memoizedProps&&St===t.memoizedState||(n.flags|=4),typeof Z.getSnapshotBeforeUpdate!="function"||ge===t.memoizedProps&&St===t.memoizedState||(n.flags|=1024),n.memoizedProps=c,n.memoizedState=Jt),Z.props=c,Z.state=Jt,Z.context=Me,c=qe):(typeof Z.componentDidUpdate!="function"||ge===t.memoizedProps&&St===t.memoizedState||(n.flags|=4),typeof Z.getSnapshotBeforeUpdate!="function"||ge===t.memoizedProps&&St===t.memoizedState||(n.flags|=1024),c=!1)}return $u(t,n,u,c,C,S)}function $u(t,n,u,c,S,C){dl(t,n);var Z=(n.flags&128)!==0;if(!c&&!Z)return S&&B(n,u,!1),cu(t,n,C);c=n.stateNode,Jl.current=n;var ge=Z&&typeof u.getDerivedStateFromError!="function"?null:c.render();return n.flags|=1,t!==null&&Z?(n.child=gr(n,t.child,null,C),n.child=gr(n,null,ge,C)):Ft(t,n,ge,C),n.memoizedState=c.state,S&&B(n,u,!0),n.child}function lc(t){var n=t.stateNode;n.pendingContext?ss(t,n.pendingContext,n.pendingContext!==n.context):n.context&&ss(t,n.context,!1),Nr(t,n.containerInfo)}function sc(t,n,u,c,S){return cn(),gn(S),n.flags|=256,Ft(t,n,u,c),n.child}var _s={dehydrated:null,treeContext:null,retryLane:0};function js(t){return{baseLanes:t,cachePool:null,transitions:null}}function cc(t,n,u){var c=n.pendingProps,S=fn.current,C=!1,Z=(n.flags&128)!==0,ge;if((ge=Z)||(ge=t!==null&&t.memoizedState===null?!1:(S&2)!==0),ge?(C=!0,n.flags&=-129):(t===null||t.memoizedState!==null)&&(S|=1),Tr(fn,S&1),t===null)return zt(n),t=n.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(n.mode&1?t.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(Z=c.children,t=c.fallback,C?(c=n.mode,C=n.child,Z={mode:"hidden",children:Z},!(c&1)&&C!==null?(C.childLanes=0,C.pendingProps=Z):C=Is(Z,c,0,null),t=yl(t,c,u,null),C.return=n,t.return=n,C.sibling=t,n.child=C,n.child.memoizedState=js(u),n.memoizedState=_s,t):Bs(n,Z));if(S=t.memoizedState,S!==null&&(ge=S.dehydrated,ge!==null))return Gc(t,n,Z,c,ge,S,u);if(C){C=c.fallback,Z=n.mode,S=t.child,ge=S.sibling;var Me={mode:"hidden",children:c.children};return!(Z&1)&&n.child!==S?(c=n.child,c.childLanes=0,c.pendingProps=Me,n.deletions=null):(c=Vu(S,Me),c.subtreeFlags=S.subtreeFlags&14680064),ge!==null?C=Vu(ge,C):(C=yl(C,Z,u,null),C.flags|=2),C.return=n,c.return=n,c.sibling=C,n.child=c,c=C,C=n.child,Z=t.child.memoizedState,Z=Z===null?js(u):{baseLanes:Z.baseLanes|u,cachePool:null,transitions:Z.transitions},C.memoizedState=Z,C.childLanes=t.childLanes&~u,n.memoizedState=_s,c}return C=t.child,t=C.sibling,c=Vu(C,{mode:"visible",children:c.children}),!(n.mode&1)&&(c.lanes=u),c.return=n,c.sibling=null,t!==null&&(u=n.deletions,u===null?(n.deletions=[t],n.flags|=16):u.push(t)),n.child=c,n.memoizedState=null,c}function Bs(t,n){return n=Is({mode:"visible",children:n},t.mode,0,null),n.return=t,t.child=n}function fs(t,n,u,c){return c!==null&&gn(c),gr(n,t.child,null,u),t=Bs(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Gc(t,n,u,c,S,C,Z){if(u)return n.flags&256?(n.flags&=-257,c=Ei(Error(r(422))),fs(t,n,Z,c)):n.memoizedState!==null?(n.child=t.child,n.flags|=128,null):(C=c.fallback,S=n.mode,c=Is({mode:"visible",children:c.children},S,0,null),C=yl(C,S,Z,null),C.flags|=2,c.return=n,C.return=n,c.sibling=C,n.child=c,n.mode&1&&gr(n,t.child,null,Z),n.child.memoizedState=js(Z),n.memoizedState=_s,C);if(!(n.mode&1))return fs(t,n,Z,null);if(S.data==="$!"){if(c=S.nextSibling&&S.nextSibling.dataset,c)var ge=c.dgst;return c=ge,C=Error(r(419)),c=Ei(C,c,void 0),fs(t,n,Z,c)}if(ge=(Z&t.childLanes)!==0,Na||ge){if(c=Da,c!==null){switch(Z&-Z){case 4:S=2;break;case 16:S=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:S=32;break;case 536870912:S=268435456;break;default:S=0}S=S&(c.suspendedLanes|Z)?0:S,S!==0&&S!==C.retryLane&&(C.retryLane=S,Jn(t,S),xi(c,t,S,-1))}return ec(),c=Ei(Error(r(421))),fs(t,n,Z,c)}return S.data==="$?"?(n.flags|=128,n.child=t.child,n=of.bind(null,t),S._reactRetry=n,null):(t=C.treeContext,At=ji(S.nextSibling),Dt=n,Rt=!0,Lt=null,t!==null&&(mt[vt++]=Ot,mt[vt++]=Ct,mt[vt++]=Et,Ot=t.id,Ct=t.overflow,Et=n),n=Bs(n,c.children),n.flags|=4096,n)}function fc(t,n,u){t.lanes|=n;var c=t.alternate;c!==null&&(c.lanes|=n),Mn(t.return,n,u)}function Fs(t,n,u,c,S){var C=t.memoizedState;C===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:c,tail:u,tailMode:S}:(C.isBackwards=n,C.rendering=null,C.renderingStartTime=0,C.last=c,C.tail=u,C.tailMode=S)}function dc(t,n,u){var c=n.pendingProps,S=c.revealOrder,C=c.tail;if(Ft(t,n,c.children,u),c=fn.current,c&2)c=c&1|2,n.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&fc(t,u,n);else if(t.tag===19)fc(t,u,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}c&=1}if(Tr(fn,c),!(n.mode&1))n.memoizedState=null;else switch(S){case"forwards":for(u=n.child,S=null;u!==null;)t=u.alternate,t!==null&&An(t)===null&&(S=u),u=u.sibling;u=S,u===null?(S=n.child,n.child=null):(S=u.sibling,u.sibling=null),Fs(n,!1,S,u,C);break;case"backwards":for(u=null,S=n.child,n.child=null;S!==null;){if(t=S.alternate,t!==null&&An(t)===null){n.child=S;break}t=S.sibling,S.sibling=u,u=S,S=t}Fs(n,!0,u,null,C);break;case"together":Fs(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function ds(t,n){!(n.mode&1)&&t!==null&&(t.alternate=null,n.alternate=null,n.flags|=2)}function cu(t,n,u){if(t!==null&&(n.dependencies=t.dependencies),pl|=n.lanes,!(u&n.childLanes))return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,u=Vu(t,t.pendingProps),n.child=u,u.return=n;t.sibling!==null;)t=t.sibling,u=u.sibling=Vu(t,t.pendingProps),u.return=n;u.sibling=null}return n.child}function Kc(t,n,u){switch(n.tag){case 3:lc(n),cn();break;case 5:oo(n);break;case 1:Ma(n.type)&&T(n);break;case 4:Nr(n,n.stateNode.containerInfo);break;case 10:var c=n.type._context,S=n.memoizedProps.value;Tr(wn,c._currentValue),c._currentValue=S;break;case 13:if(c=n.memoizedState,c!==null)return c.dehydrated!==null?(Tr(fn,fn.current&1),n.flags|=128,null):u&n.child.childLanes?cc(t,n,u):(Tr(fn,fn.current&1),t=cu(t,n,u),t!==null?t.sibling:null);Tr(fn,fn.current&1);break;case 19:if(c=(u&n.childLanes)!==0,t.flags&128){if(c)return dc(t,n,u);n.flags|=128}if(S=n.memoizedState,S!==null&&(S.rendering=null,S.tail=null,S.lastEffect=null),Tr(fn,fn.current),c)break;return null;case 22:case 23:return n.lanes=0,$r(t,n,u)}return cu(t,n,u)}var vc,Us,pc,hc;vc=function(t,n){for(var u=n.child;u!==null;){if(u.tag===5||u.tag===6)t.appendChild(u.stateNode);else if(u.tag!==4&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break;for(;u.sibling===null;){if(u.return===null||u.return===n)return;u=u.return}u.sibling.return=u.return,u=u.sibling}},Us=function(){},pc=function(t,n,u,c){var S=t.memoizedProps;if(S!==c){t=n.stateNode,Zr(kn.current);var C=null;switch(u){case"input":S=ot(t,S),c=ot(t,c),C=[];break;case"select":S=L({},S,{value:void 0}),c=L({},c,{value:void 0}),C=[];break;case"textarea":S=Ee(t,S),c=Ee(t,c),C=[];break;default:typeof S.onClick!="function"&&typeof c.onClick=="function"&&(t.onclick=Rl)}ze(u,c);var Z;u=null;for(qe in S)if(!c.hasOwnProperty(qe)&&S.hasOwnProperty(qe)&&S[qe]!=null)if(qe==="style"){var ge=S[qe];for(Z in ge)ge.hasOwnProperty(Z)&&(u||(u={}),u[Z]="")}else qe!=="dangerouslySetInnerHTML"&&qe!=="children"&&qe!=="suppressContentEditableWarning"&&qe!=="suppressHydrationWarning"&&qe!=="autoFocus"&&(i.hasOwnProperty(qe)?C||(C=[]):(C=C||[]).push(qe,null));for(qe in c){var Me=c[qe];if(ge=S!=null?S[qe]:void 0,c.hasOwnProperty(qe)&&Me!==ge&&(Me!=null||ge!=null))if(qe==="style")if(ge){for(Z in ge)!ge.hasOwnProperty(Z)||Me&&Me.hasOwnProperty(Z)||(u||(u={}),u[Z]="");for(Z in Me)Me.hasOwnProperty(Z)&&ge[Z]!==Me[Z]&&(u||(u={}),u[Z]=Me[Z])}else u||(C||(C=[]),C.push(qe,u)),u=Me;else qe==="dangerouslySetInnerHTML"?(Me=Me?Me.__html:void 0,ge=ge?ge.__html:void 0,Me!=null&&ge!==Me&&(C=C||[]).push(qe,Me)):qe==="children"?typeof Me!="string"&&typeof Me!="number"||(C=C||[]).push(qe,""+Me):qe!=="suppressContentEditableWarning"&&qe!=="suppressHydrationWarning"&&(i.hasOwnProperty(qe)?(Me!=null&&qe==="onScroll"&&yr("scroll",t),C||ge===Me||(C=[])):(C=C||[]).push(qe,Me))}u&&(C=C||[]).push("style",u);var qe=C;(n.updateQueue=qe)&&(n.flags|=4)}},hc=function(t,n,u,c){u!==c&&(n.flags|=4)};function es(t,n){if(!Rt)switch(t.tailMode){case"hidden":n=t.tail;for(var u=null;n!==null;)n.alternate!==null&&(u=n),n=n.sibling;u===null?t.tail=null:u.sibling=null;break;case"collapsed":u=t.tail;for(var c=null;u!==null;)u.alternate!==null&&(c=u),u=u.sibling;c===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:c.sibling=null}}function qa(t){var n=t.alternate!==null&&t.alternate.child===t.child,u=0,c=0;if(n)for(var S=t.child;S!==null;)u|=S.lanes|S.childLanes,c|=S.subtreeFlags&14680064,c|=S.flags&14680064,S.return=t,S=S.sibling;else for(S=t.child;S!==null;)u|=S.lanes|S.childLanes,c|=S.subtreeFlags,c|=S.flags,S.return=t,S=S.sibling;return t.subtreeFlags|=c,t.childLanes=u,n}function Vc(t,n,u){var c=n.pendingProps;switch(ht(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qa(n),null;case 1:return Ma(n.type)&&_u(),qa(n),null;case 3:return c=n.stateNode,oa(),Rr(Va),Rr(Pa),an(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(t===null||t.child===null)&&(nn(n)?n.flags|=4:t===null||t.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Lt!==null&&(Xs(Lt),Lt=null))),Us(t,n),qa(n),null;case 5:Wr(n);var S=Zr(Sa.current);if(u=n.type,t!==null&&n.stateNode!=null)pc(t,n,u,c,S),t.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!c){if(n.stateNode===null)throw Error(r(166));return qa(n),null}if(t=Zr(kn.current),nn(n)){c=n.stateNode,u=n.type;var C=n.memoizedProps;switch(c[Ko]=n,c[sl]=C,t=(n.mode&1)!==0,u){case"dialog":yr("cancel",c),yr("close",c);break;case"iframe":case"object":case"embed":yr("load",c);break;case"video":case"audio":for(S=0;S<_i.length;S++)yr(_i[S],c);break;case"source":yr("error",c);break;case"img":case"image":case"link":yr("error",c),yr("load",c);break;case"details":yr("toggle",c);break;case"input":te(c,C),yr("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!C.multiple},yr("invalid",c);break;case"textarea":le(c,C),yr("invalid",c)}ze(u,C),S=null;for(var Z in C)if(C.hasOwnProperty(Z)){var ge=C[Z];Z==="children"?typeof ge=="string"?c.textContent!==ge&&(C.suppressHydrationWarning!==!0&&Ml(c.textContent,ge,t),S=["children",ge]):typeof ge=="number"&&c.textContent!==""+ge&&(C.suppressHydrationWarning!==!0&&Ml(c.textContent,ge,t),S=["children",""+ge]):i.hasOwnProperty(Z)&&ge!=null&&Z==="onScroll"&&yr("scroll",c)}switch(u){case"input":at(c),me(c,C,!0);break;case"textarea":at(c),Be(c);break;case"select":case"option":break;default:typeof C.onClick=="function"&&(c.onclick=Rl)}c=S,n.updateQueue=c,c!==null&&(n.flags|=4)}else{Z=S.nodeType===9?S:S.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=oe(u)),t==="http://www.w3.org/1999/xhtml"?u==="script"?(t=Z.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof c.is=="string"?t=Z.createElement(u,{is:c.is}):(t=Z.createElement(u),u==="select"&&(Z=t,c.multiple?Z.multiple=!0:c.size&&(Z.size=c.size))):t=Z.createElementNS(t,u),t[Ko]=n,t[sl]=c,vc(t,n,!1,!1),n.stateNode=t;e:{switch(Z=We(u,c),u){case"dialog":yr("cancel",t),yr("close",t),S=c;break;case"iframe":case"object":case"embed":yr("load",t),S=c;break;case"video":case"audio":for(S=0;S<_i.length;S++)yr(_i[S],t);S=c;break;case"source":yr("error",t),S=c;break;case"img":case"image":case"link":yr("error",t),yr("load",t),S=c;break;case"details":yr("toggle",t),S=c;break;case"input":te(t,c),S=ot(t,c),yr("invalid",t);break;case"option":S=c;break;case"select":t._wrapperState={wasMultiple:!!c.multiple},S=L({},c,{value:void 0}),yr("invalid",t);break;case"textarea":le(t,c),S=Ee(t,c),yr("invalid",t);break;default:S=c}ze(u,S),ge=S;for(C in ge)if(ge.hasOwnProperty(C)){var Me=ge[C];C==="style"?be(t,Me):C==="dangerouslySetInnerHTML"?(Me=Me?Me.__html:void 0,Me!=null&&Ue(t,Me)):C==="children"?typeof Me=="string"?(u!=="textarea"||Me!=="")&&He(t,Me):typeof Me=="number"&&He(t,""+Me):C!=="suppressContentEditableWarning"&&C!=="suppressHydrationWarning"&&C!=="autoFocus"&&(i.hasOwnProperty(C)?Me!=null&&C==="onScroll"&&yr("scroll",t):Me!=null&&F(t,C,Me,Z))}switch(u){case"input":at(t),me(t,c,!1);break;case"textarea":at(t),Be(t);break;case"option":c.value!=null&&t.setAttribute("value",""+X(c.value));break;case"select":t.multiple=!!c.multiple,C=c.value,C!=null?ve(t,!!c.multiple,C,!1):c.defaultValue!=null&&ve(t,!!c.multiple,c.defaultValue,!0);break;default:typeof S.onClick=="function"&&(t.onclick=Rl)}switch(u){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return qa(n),null;case 6:if(t&&n.stateNode!=null)hc(t,n,t.memoizedProps,c);else{if(typeof c!="string"&&n.stateNode===null)throw Error(r(166));if(u=Zr(Sa.current),Zr(kn.current),nn(n)){if(c=n.stateNode,u=n.memoizedProps,c[Ko]=n,(C=c.nodeValue!==u)&&(t=Dt,t!==null))switch(t.tag){case 3:Ml(c.nodeValue,u,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ml(c.nodeValue,u,(t.mode&1)!==0)}C&&(n.flags|=4)}else c=(u.nodeType===9?u:u.ownerDocument).createTextNode(c),c[Ko]=n,n.stateNode=c}return qa(n),null;case 13:if(Rr(fn),c=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Rt&&At!==null&&n.mode&1&&!(n.flags&128))en(),cn(),n.flags|=98560,C=!1;else if(C=nn(n),c!==null&&c.dehydrated!==null){if(t===null){if(!C)throw Error(r(318));if(C=n.memoizedState,C=C!==null?C.dehydrated:null,!C)throw Error(r(317));C[Ko]=n}else cn(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;qa(n),C=!1}else Lt!==null&&(Xs(Lt),Lt=null),C=!0;if(!C)return n.flags&65536?n:null}return n.flags&128?(n.lanes=u,n):(c=c!==null,c!==(t!==null&&t.memoizedState!==null)&&c&&(n.child.flags|=8192,n.mode&1&&(t===null||fn.current&1?xa===0&&(xa=3):ec())),n.updateQueue!==null&&(n.flags|=4),qa(n),null);case 4:return oa(),Us(t,n),t===null&&vo(n.stateNode.containerInfo),qa(n),null;case 10:return zn(n.type._context),qa(n),null;case 17:return Ma(n.type)&&_u(),qa(n),null;case 19:if(Rr(fn),C=n.memoizedState,C===null)return qa(n),null;if(c=(n.flags&128)!==0,Z=C.rendering,Z===null)if(c)es(C,!1);else{if(xa!==0||t!==null&&t.flags&128)for(t=n.child;t!==null;){if(Z=An(t),Z!==null){for(n.flags|=128,es(C,!1),c=Z.updateQueue,c!==null&&(n.updateQueue=c,n.flags|=4),n.subtreeFlags=0,c=u,u=n.child;u!==null;)C=u,t=c,C.flags&=14680066,Z=C.alternate,Z===null?(C.childLanes=0,C.lanes=t,C.child=null,C.subtreeFlags=0,C.memoizedProps=null,C.memoizedState=null,C.updateQueue=null,C.dependencies=null,C.stateNode=null):(C.childLanes=Z.childLanes,C.lanes=Z.lanes,C.child=Z.child,C.subtreeFlags=0,C.deletions=null,C.memoizedProps=Z.memoizedProps,C.memoizedState=Z.memoizedState,C.updateQueue=Z.updateQueue,C.type=Z.type,t=Z.dependencies,C.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),u=u.sibling;return Tr(fn,fn.current&1|2),n.child}t=t.sibling}C.tail!==null&&sr()>Bl&&(n.flags|=128,c=!0,es(C,!1),n.lanes=4194304)}else{if(!c)if(t=An(Z),t!==null){if(n.flags|=128,c=!0,u=t.updateQueue,u!==null&&(n.updateQueue=u,n.flags|=4),es(C,!0),C.tail===null&&C.tailMode==="hidden"&&!Z.alternate&&!Rt)return qa(n),null}else 2*sr()-C.renderingStartTime>Bl&&u!==1073741824&&(n.flags|=128,c=!0,es(C,!1),n.lanes=4194304);C.isBackwards?(Z.sibling=n.child,n.child=Z):(u=C.last,u!==null?u.sibling=Z:n.child=Z,C.last=Z)}return C.tail!==null?(n=C.tail,C.rendering=n,C.tail=n.sibling,C.renderingStartTime=sr(),n.sibling=null,u=fn.current,Tr(fn,c?u&1|2:u&1),n):(qa(n),null);case 22:case 23:return qs(),c=n.memoizedState!==null,t!==null&&t.memoizedState!==null!==c&&(n.flags|=8192),c&&n.mode&1?ko&1073741824&&(qa(n),n.subtreeFlags&6&&(n.flags|=8192)):qa(n),null;case 24:return null;case 25:return null}throw Error(r(156,n.tag))}function Yc(t,n){switch(ht(n),n.tag){case 1:return Ma(n.type)&&_u(),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return oa(),Rr(Va),Rr(Pa),an(),t=n.flags,t&65536&&!(t&128)?(n.flags=t&-65537|128,n):null;case 5:return Wr(n),null;case 13:if(Rr(fn),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));cn()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Rr(fn),null;case 4:return oa(),null;case 10:return zn(n.type._context),null;case 22:case 23:return qs(),null;case 24:return null;default:return null}}var vs=!1,eo=!1,Qc=typeof WeakSet=="function"?WeakSet:Set,Vt=null;function _l(t,n){var u=t.ref;if(u!==null)if(typeof u=="function")try{u(null)}catch(c){aa(t,n,c)}else u.current=null}function zs(t,n,u){try{u()}catch(c){aa(t,n,c)}}var gc=!1;function Xc(t,n){if(au=Wi,t=br(),_r(t)){if("selectionStart"in t)var u={start:t.selectionStart,end:t.selectionEnd};else e:{u=(u=t.ownerDocument)&&u.defaultView||window;var c=u.getSelection&&u.getSelection();if(c&&c.rangeCount!==0){u=c.anchorNode;var S=c.anchorOffset,C=c.focusNode;c=c.focusOffset;try{u.nodeType,C.nodeType}catch(Nt){u=null;break e}var Z=0,ge=-1,Me=-1,qe=0,xt=0,Tt=t,St=null;t:for(;;){for(var Wt;Tt!==u||S!==0&&Tt.nodeType!==3||(ge=Z+S),Tt!==C||c!==0&&Tt.nodeType!==3||(Me=Z+c),Tt.nodeType===3&&(Z+=Tt.nodeValue.length),(Wt=Tt.firstChild)!==null;)St=Tt,Tt=Wt;for(;;){if(Tt===t)break t;if(St===u&&++qe===S&&(ge=Z),St===C&&++xt===c&&(Me=Z),(Wt=Tt.nextSibling)!==null)break;Tt=St,St=Tt.parentNode}Tt=Wt}u=ge===-1||Me===-1?null:{start:ge,end:Me}}else u=null}u=u||{start:0,end:0}}else u=null;for(Wl={focusedElem:t,selectionRange:u},Wi=!1,Vt=n;Vt!==null;)if(n=Vt,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,Vt=t;else for(;Vt!==null;){n=Vt;try{var Jt=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(Jt!==null){var rn=Jt.memoizedProps,la=Jt.memoizedState,Ge=n.stateNode,ke=Ge.getSnapshotBeforeUpdate(n.elementType===n.type?rn:mn(n.type,rn),la);Ge.__reactInternalSnapshotBeforeUpdate=ke}break;case 3:var Ye=n.stateNode.containerInfo;Ye.nodeType===1?Ye.textContent="":Ye.nodeType===9&&Ye.documentElement&&Ye.removeChild(Ye.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(r(163))}}catch(Nt){aa(n,n.return,Nt)}if(t=n.sibling,t!==null){t.return=n.return,Vt=t;break}Vt=n.return}return Jt=gc,gc=!1,Jt}function ts(t,n,u){var c=n.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var S=c=c.next;do{if((S.tag&t)===t){var C=S.destroy;S.destroy=void 0,C!==void 0&&zs(n,u,C)}S=S.next}while(S!==c)}}function ps(t,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var u=n=n.next;do{if((u.tag&t)===t){var c=u.create;u.destroy=c()}u=u.next}while(u!==n)}}function $s(t){var n=t.ref;if(n!==null){var u=t.stateNode;switch(t.tag){case 5:t=u;break;default:t=u}typeof n=="function"?n(t):n.current=t}}function mc(t){var n=t.alternate;n!==null&&(t.alternate=null,mc(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&(delete n[Ko],delete n[sl],delete n[Yl],delete n[ls],delete n[ks])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function yc(t){return t.tag===5||t.tag===3||t.tag===4}function Ec(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||yc(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Hs(t,n,u){var c=t.tag;if(c===5||c===6)t=t.stateNode,n?u.nodeType===8?u.parentNode.insertBefore(t,n):u.insertBefore(t,n):(u.nodeType===8?(n=u.parentNode,n.insertBefore(t,u)):(n=u,n.appendChild(t)),u=u._reactRootContainer,u!=null||n.onclick!==null||(n.onclick=Rl));else if(c!==4&&(t=t.child,t!==null))for(Hs(t,n,u),t=t.sibling;t!==null;)Hs(t,n,u),t=t.sibling}function Zs(t,n,u){var c=t.tag;if(c===5||c===6)t=t.stateNode,n?u.insertBefore(t,n):u.appendChild(t);else if(c!==4&&(t=t.child,t!==null))for(Zs(t,n,u),t=t.sibling;t!==null;)Zs(t,n,u),t=t.sibling}var Fa=null,Si=!1;function Hu(t,n,u){for(u=u.child;u!==null;)Sc(t,n,u),u=u.sibling}function Sc(t,n,u){if(pa&&typeof pa.onCommitFiberUnmount=="function")try{pa.onCommitFiberUnmount(xo,u)}catch(ge){}switch(u.tag){case 5:eo||_l(u,n);case 6:var c=Fa,S=Si;Fa=null,Hu(t,n,u),Fa=c,Si=S,Fa!==null&&(Si?(t=Fa,u=u.stateNode,t.nodeType===8?t.parentNode.removeChild(u):t.removeChild(u)):Fa.removeChild(u.stateNode));break;case 18:Fa!==null&&(Si?(t=Fa,u=u.stateNode,t.nodeType===8?Ru(t.parentNode,u):t.nodeType===1&&Ru(t,u),Ci(t)):Ru(Fa,u.stateNode));break;case 4:c=Fa,S=Si,Fa=u.stateNode.containerInfo,Si=!0,Hu(t,n,u),Fa=c,Si=S;break;case 0:case 11:case 14:case 15:if(!eo&&(c=u.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){S=c=c.next;do{var C=S,Z=C.destroy;C=C.tag,Z!==void 0&&(C&2||C&4)&&zs(u,n,Z),S=S.next}while(S!==c)}Hu(t,n,u);break;case 1:if(!eo&&(_l(u,n),c=u.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=u.memoizedProps,c.state=u.memoizedState,c.componentWillUnmount()}catch(ge){aa(u,n,ge)}Hu(t,n,u);break;case 21:Hu(t,n,u);break;case 22:u.mode&1?(eo=(c=eo)||u.memoizedState!==null,Hu(t,n,u),eo=c):Hu(t,n,u);break;default:Hu(t,n,u)}}function bc(t){var n=t.updateQueue;if(n!==null){t.updateQueue=null;var u=t.stateNode;u===null&&(u=t.stateNode=new Qc),n.forEach(function(c){var S=uf.bind(null,t,c);u.has(c)||(u.add(c),c.then(S,S))})}}function bi(t,n){var u=n.deletions;if(u!==null)for(var c=0;c<u.length;c++){var S=u[c];try{var C=t,Z=n,ge=Z;e:for(;ge!==null;){switch(ge.tag){case 5:Fa=ge.stateNode,Si=!1;break e;case 3:Fa=ge.stateNode.containerInfo,Si=!0;break e;case 4:Fa=ge.stateNode.containerInfo,Si=!0;break e}ge=ge.return}if(Fa===null)throw Error(r(160));Sc(C,Z,S),Fa=null,Si=!1;var Me=S.alternate;Me!==null&&(Me.return=null),S.return=null}catch(qe){aa(S,n,qe)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)xc(n,t),n=n.sibling}function xc(t,n){var u=t.alternate,c=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(bi(n,t),$i(t),c&4){try{ts(3,t,t.return),ps(3,t)}catch(rn){aa(t,t.return,rn)}try{ts(5,t,t.return)}catch(rn){aa(t,t.return,rn)}}break;case 1:bi(n,t),$i(t),c&512&&u!==null&&_l(u,u.return);break;case 5:if(bi(n,t),$i(t),c&512&&u!==null&&_l(u,u.return),t.flags&32){var S=t.stateNode;try{He(S,"")}catch(rn){aa(t,t.return,rn)}}if(c&4&&(S=t.stateNode,S!=null)){var C=t.memoizedProps,Z=u!==null?u.memoizedProps:C,ge=t.type,Me=t.updateQueue;if(t.updateQueue=null,Me!==null)try{ge==="input"&&C.type==="radio"&&C.name!=null&&fe(S,C),We(ge,Z);var qe=We(ge,C);for(Z=0;Z<Me.length;Z+=2){var xt=Me[Z],Tt=Me[Z+1];xt==="style"?be(S,Tt):xt==="dangerouslySetInnerHTML"?Ue(S,Tt):xt==="children"?He(S,Tt):F(S,xt,Tt,qe)}switch(ge){case"input":pe(S,C);break;case"textarea":ye(S,C);break;case"select":var St=S._wrapperState.wasMultiple;S._wrapperState.wasMultiple=!!C.multiple;var Wt=C.value;Wt!=null?ve(S,!!C.multiple,Wt,!1):St!==!!C.multiple&&(C.defaultValue!=null?ve(S,!!C.multiple,C.defaultValue,!0):ve(S,!!C.multiple,C.multiple?[]:"",!1))}S[sl]=C}catch(rn){aa(t,t.return,rn)}}break;case 6:if(bi(n,t),$i(t),c&4){if(t.stateNode===null)throw Error(r(162));S=t.stateNode,C=t.memoizedProps;try{S.nodeValue=C}catch(rn){aa(t,t.return,rn)}}break;case 3:if(bi(n,t),$i(t),c&4&&u!==null&&u.memoizedState.isDehydrated)try{Ci(n.containerInfo)}catch(rn){aa(t,t.return,rn)}break;case 4:bi(n,t),$i(t);break;case 13:bi(n,t),$i(t),S=t.child,S.flags&8192&&(C=S.memoizedState!==null,S.stateNode.isHidden=C,!C||S.alternate!==null&&S.alternate.memoizedState!==null||(Ks=sr())),c&4&&bc(t);break;case 22:if(xt=u!==null&&u.memoizedState!==null,t.mode&1?(eo=(qe=eo)||xt,bi(n,t),eo=qe):bi(n,t),$i(t),c&8192){if(qe=t.memoizedState!==null,(t.stateNode.isHidden=qe)&&!xt&&t.mode&1)for(Vt=t,xt=t.child;xt!==null;){for(Tt=Vt=xt;Vt!==null;){switch(St=Vt,Wt=St.child,St.tag){case 0:case 11:case 14:case 15:ts(4,St,St.return);break;case 1:_l(St,St.return);var Jt=St.stateNode;if(typeof Jt.componentWillUnmount=="function"){c=St,u=St.return;try{n=c,Jt.props=n.memoizedProps,Jt.state=n.memoizedState,Jt.componentWillUnmount()}catch(rn){aa(c,u,rn)}}break;case 5:_l(St,St.return);break;case 22:if(St.memoizedState!==null){Tc(Tt);continue}}Wt!==null?(Wt.return=St,Vt=Wt):Tc(Tt)}xt=xt.sibling}e:for(xt=null,Tt=t;;){if(Tt.tag===5){if(xt===null){xt=Tt;try{S=Tt.stateNode,qe?(C=S.style,typeof C.setProperty=="function"?C.setProperty("display","none","important"):C.display="none"):(ge=Tt.stateNode,Me=Tt.memoizedProps.style,Z=Me!=null&&Me.hasOwnProperty("display")?Me.display:null,ge.style.display=Q("display",Z))}catch(rn){aa(t,t.return,rn)}}}else if(Tt.tag===6){if(xt===null)try{Tt.stateNode.nodeValue=qe?"":Tt.memoizedProps}catch(rn){aa(t,t.return,rn)}}else if((Tt.tag!==22&&Tt.tag!==23||Tt.memoizedState===null||Tt===t)&&Tt.child!==null){Tt.child.return=Tt,Tt=Tt.child;continue}if(Tt===t)break e;for(;Tt.sibling===null;){if(Tt.return===null||Tt.return===t)break e;xt===Tt&&(xt=null),Tt=Tt.return}xt===Tt&&(xt=null),Tt.sibling.return=Tt.return,Tt=Tt.sibling}}break;case 19:bi(n,t),$i(t),c&4&&bc(t);break;case 21:break;default:bi(n,t),$i(t)}}function $i(t){var n=t.flags;if(n&2){try{e:{for(var u=t.return;u!==null;){if(yc(u)){var c=u;break e}u=u.return}throw Error(r(160))}switch(c.tag){case 5:var S=c.stateNode;c.flags&32&&(He(S,""),c.flags&=-33);var C=Ec(t);Zs(t,C,S);break;case 3:case 4:var Z=c.stateNode.containerInfo,ge=Ec(t);Hs(t,ge,Z);break;default:throw Error(r(161))}}catch(Me){aa(t,t.return,Me)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Jc(t,n,u){Vt=t,wc(t,n,u)}function wc(t,n,u){for(var c=(t.mode&1)!==0;Vt!==null;){var S=Vt,C=S.child;if(S.tag===22&&c){var Z=S.memoizedState!==null||vs;if(!Z){var ge=S.alternate,Me=ge!==null&&ge.memoizedState!==null||eo;ge=vs;var qe=eo;if(vs=Z,(eo=Me)&&!qe)for(Vt=S;Vt!==null;)Z=Vt,Me=Z.child,Z.tag===22&&Z.memoizedState!==null?Oc(S):Me!==null?(Me.return=Z,Vt=Me):Oc(S);for(;C!==null;)Vt=C,wc(C,n,u),C=C.sibling;Vt=S,vs=ge,eo=qe}Ic(t,n,u)}else S.subtreeFlags&8772&&C!==null?(C.return=S,Vt=C):Ic(t,n,u)}}function Ic(t){for(;Vt!==null;){var n=Vt;if(n.flags&8772){var u=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:eo||ps(5,n);break;case 1:var c=n.stateNode;if(n.flags&4&&!eo)if(u===null)c.componentDidMount();else{var S=n.elementType===n.type?u.memoizedProps:mn(n.type,u.memoizedProps);c.componentDidUpdate(S,u.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var C=n.updateQueue;C!==null&&Lr(n,C,c);break;case 3:var Z=n.updateQueue;if(Z!==null){if(u=null,n.child!==null)switch(n.child.tag){case 5:u=n.child.stateNode;break;case 1:u=n.child.stateNode}Lr(n,Z,u)}break;case 5:var ge=n.stateNode;if(u===null&&n.flags&4){u=ge;var Me=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":Me.autoFocus&&u.focus();break;case"img":Me.src&&(u.src=Me.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var qe=n.alternate;if(qe!==null){var xt=qe.memoizedState;if(xt!==null){var Tt=xt.dehydrated;Tt!==null&&Ci(Tt)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(r(163))}eo||n.flags&512&&$s(n)}catch(St){aa(n,n.return,St)}}if(n===t){Vt=null;break}if(u=n.sibling,u!==null){u.return=n.return,Vt=u;break}Vt=n.return}}function Tc(t){for(;Vt!==null;){var n=Vt;if(n===t){Vt=null;break}var u=n.sibling;if(u!==null){u.return=n.return,Vt=u;break}Vt=n.return}}function Oc(t){for(;Vt!==null;){var n=Vt;try{switch(n.tag){case 0:case 11:case 15:var u=n.return;try{ps(4,n)}catch(Me){aa(n,u,Me)}break;case 1:var c=n.stateNode;if(typeof c.componentDidMount=="function"){var S=n.return;try{c.componentDidMount()}catch(Me){aa(n,S,Me)}}var C=n.return;try{$s(n)}catch(Me){aa(n,C,Me)}break;case 5:var Z=n.return;try{$s(n)}catch(Me){aa(n,Z,Me)}}}catch(Me){aa(n,n.return,Me)}if(n===t){Vt=null;break}var ge=n.sibling;if(ge!==null){ge.return=n.return,Vt=ge;break}Vt=n.return}}var qc=Math.ceil,hs=A.ReactCurrentDispatcher,Ws=A.ReactCurrentOwner,ei=A.ReactCurrentBatchConfig,lr=0,Da=null,va=null,Ua=0,ko=0,jl=gi(0),xa=0,ns=null,pl=0,gs=0,Gs=0,rs=null,Eo=null,Ks=0,Bl=1/0,fu=null,ms=!1,Vs=null,Zu=null,ys=!1,Wu=null,Es=0,as=0,Ys=null,Ss=-1,bs=0;function lo(){return lr&6?sr():Ss!==-1?Ss:Ss=sr()}function Gu(t){return t.mode&1?lr&2&&Ua!==0?Ua&-Ua:hn.transition!==null?(bs===0&&(bs=Kr()),bs):(t=nr,t!==0||(t=window.event,t=t===void 0?16:Ju(t.type)),t):1}function xi(t,n,u,c){if(50<as)throw as=0,Ys=null,Error(r(185));Pr(t,u,c),(!(lr&2)||t!==Da)&&(t===Da&&(!(lr&2)&&(gs|=u),xa===4&&Ku(t,Ua)),So(t,c),u===1&&lr===0&&!(n.mode&1)&&(Bl=sr()+500,ie&&De()))}function So(t,n){var u=t.callbackNode;Ti(t,n);var c=_a(t,t===Da?Ua:0);if(c===0)u!==null&&Fn(u),t.callbackNode=null,t.callbackPriority=0;else if(n=c&-c,t.callbackPriority!==n){if(u!=null&&Fn(u),n===1)t.tag===0?Se(Ac.bind(null,t)):de(Ac.bind(null,t)),Ds(function(){!(lr&6)&&De()}),u=null;else{switch(Oi(c)){case 1:u=za;break;case 4:u=ri;break;case 16:u=bo;break;case 536870912:u=jo;break;default:u=bo}u=_c(u,Cc.bind(null,t))}t.callbackPriority=n,t.callbackNode=u}}function Cc(t,n){if(Ss=-1,bs=0,lr&6)throw Error(r(327));var u=t.callbackNode;if(Fl()&&t.callbackNode!==u)return null;var c=_a(t,t===Da?Ua:0);if(c===0)return null;if(c&30||c&t.expiredLanes||n)n=xs(t,c);else{n=c;var S=lr;lr|=2;var C=Mc();(Da!==t||Ua!==n)&&(fu=null,Bl=sr()+500,gl(t,n));do try{nf();break}catch(ge){Pc(t,ge)}while(1);jn(),hs.current=C,lr=S,va!==null?n=0:(Da=null,Ua=0,n=xa)}if(n!==0){if(n===2&&(S=To(t),S!==0&&(c=S,n=Qs(t,S))),n===1)throw u=ns,gl(t,0),Ku(t,c),So(t,sr()),u;if(n===6)Ku(t,c);else{if(S=t.current.alternate,!(c&30)&&!ef(S)&&(n=xs(t,c),n===2&&(C=To(t),C!==0&&(c=C,n=Qs(t,C))),n===1))throw u=ns,gl(t,0),Ku(t,c),So(t,sr()),u;switch(t.finishedWork=S,t.finishedLanes=c,n){case 0:case 1:throw Error(r(345));case 2:ml(t,Eo,fu);break;case 3:if(Ku(t,c),(c&130023424)===c&&(n=Ks+500-sr(),10<n)){if(_a(t,0)!==0)break;if(S=t.suspendedLanes,(S&c)!==c){lo(),t.pingedLanes|=t.suspendedLanes&S;break}t.timeoutHandle=Kl(ml.bind(null,t,Eo,fu),n);break}ml(t,Eo,fu);break;case 4:if(Ku(t,c),(c&4194240)===c)break;for(n=t.eventTimes,S=-1;0<c;){var Z=31-wa(c);C=1<<Z,Z=n[Z],Z>S&&(S=Z),c&=~C}if(c=S,c=sr()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*qc(c/1960))-c,10<c){t.timeoutHandle=Kl(ml.bind(null,t,Eo,fu),c);break}ml(t,Eo,fu);break;case 5:ml(t,Eo,fu);break;default:throw Error(r(329))}}}return So(t,sr()),t.callbackNode===u?Cc.bind(null,t):null}function Qs(t,n){var u=rs;return t.current.memoizedState.isDehydrated&&(gl(t,n).flags|=256),t=xs(t,n),t!==2&&(n=Eo,Eo=u,n!==null&&Xs(n)),t}function Xs(t){Eo===null?Eo=t:Eo.push.apply(Eo,t)}function ef(t){for(var n=t;;){if(n.flags&16384){var u=n.updateQueue;if(u!==null&&(u=u.stores,u!==null))for(var c=0;c<u.length;c++){var S=u[c],C=S.getSnapshot;S=S.value;try{if(!Ca(C(),S))return!1}catch(Z){return!1}}}if(u=n.child,n.subtreeFlags&16384&&u!==null)u.return=n,n=u;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ku(t,n){for(n&=~Gs,n&=~gs,t.suspendedLanes|=n,t.pingedLanes&=~n,t=t.expirationTimes;0<n;){var u=31-wa(n),c=1<<u;t[u]=-1,n&=~c}}function Ac(t){if(lr&6)throw Error(r(327));Fl();var n=_a(t,0);if(!(n&1))return So(t,sr()),null;var u=xs(t,n);if(t.tag!==0&&u===2){var c=To(t);c!==0&&(n=c,u=Qs(t,c))}if(u===1)throw u=ns,gl(t,0),Ku(t,n),So(t,sr()),u;if(u===6)throw Error(r(345));return t.finishedWork=t.current.alternate,t.finishedLanes=n,ml(t,Eo,fu),So(t,sr()),null}function Js(t,n){var u=lr;lr|=1;try{return t(n)}finally{lr=u,lr===0&&(Bl=sr()+500,ie&&De())}}function hl(t){Wu!==null&&Wu.tag===0&&!(lr&6)&&Fl();var n=lr;lr|=1;var u=ei.transition,c=nr;try{if(ei.transition=null,nr=1,t)return t()}finally{nr=c,ei.transition=u,lr=n,!(lr&6)&&De()}}function qs(){ko=jl.current,Rr(jl)}function gl(t,n){t.finishedWork=null,t.finishedLanes=0;var u=t.timeoutHandle;if(u!==-1&&(t.timeoutHandle=-1,Ns(u)),va!==null)for(u=va.return;u!==null;){var c=u;switch(ht(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&_u();break;case 3:oa(),Rr(Va),Rr(Pa),an();break;case 5:Wr(c);break;case 4:oa();break;case 13:Rr(fn);break;case 19:Rr(fn);break;case 10:zn(c.type._context);break;case 22:case 23:qs()}u=u.return}if(Da=t,va=t=Vu(t.current,null),Ua=ko=n,xa=0,ns=null,Gs=gs=pl=0,Eo=rs=null,Nn!==null){for(n=0;n<Nn.length;n++)if(u=Nn[n],c=u.interleaved,c!==null){u.interleaved=null;var S=c.next,C=u.pending;if(C!==null){var Z=C.next;C.next=S,c.next=Z}u.pending=c}Nn=null}return t}function Pc(t,n){do{var u=va;try{if(jn(),yn.current=su,po){for(var c=Rn.memoizedState;c!==null;){var S=c.queue;S!==null&&(S.pending=null),c=c.next}po=!1}if(xr=0,jr=Hn=Rn=null,ia=!1,da=0,Ws.current=null,u===null||u.return===null){xa=1,ns=n,va=null;break}e:{var C=t,Z=u.return,ge=u,Me=n;if(n=Ua,ge.flags|=32768,Me!==null&&typeof Me=="object"&&typeof Me.then=="function"){var qe=Me,xt=ge,Tt=xt.tag;if(!(xt.mode&1)&&(Tt===0||Tt===11||Tt===15)){var St=xt.alternate;St?(xt.updateQueue=St.updateQueue,xt.memoizedState=St.memoizedState,xt.lanes=St.lanes):(xt.updateQueue=null,xt.memoizedState=null)}var Wt=Dl(Z);if(Wt!==null){Wt.flags&=-257,kl(Wt,Z,ge,C,n),Wt.mode&1&&fl(C,qe,n),n=Wt,Me=qe;var Jt=n.updateQueue;if(Jt===null){var rn=new Set;rn.add(Me),n.updateQueue=rn}else Jt.add(Me);break e}else{if(!(n&1)){fl(C,qe,n),ec();break e}Me=Error(r(426))}}else if(Rt&&ge.mode&1){var la=Dl(Z);if(la!==null){!(la.flags&65536)&&(la.flags|=256),kl(la,Z,ge,C,n),gn(Ja(Me,ge));break e}}C=Me=Ja(Me,ge),xa!==4&&(xa=2),rs===null?rs=[C]:rs.push(C),C=Z;do{switch(C.tag){case 3:C.flags|=65536,n&=-n,C.lanes|=n;var Ge=Uu(C,Me,n);$n(C,Ge);break e;case 1:ge=Me;var ke=C.type,Ye=C.stateNode;if(!(C.flags&128)&&(typeof ke.getDerivedStateFromError=="function"||Ye!==null&&typeof Ye.componentDidCatch=="function"&&(Zu===null||!Zu.has(Ye)))){C.flags|=65536,n&=-n,C.lanes|=n;var Nt=zu(C,ge,n);$n(C,Nt);break e}}C=C.return}while(C!==null)}Lc(u)}catch(un){n=un,va===u&&u!==null&&(va=u=u.return);continue}break}while(1)}function Mc(){var t=hs.current;return hs.current=su,t===null?su:t}function ec(){(xa===0||xa===3||xa===2)&&(xa=4),Da===null||!(pl&268435455)&&!(gs&268435455)||Ku(Da,Ua)}function xs(t,n){var u=lr;lr|=2;var c=Mc();(Da!==t||Ua!==n)&&(fu=null,gl(t,n));do try{tf();break}catch(S){Pc(t,S)}while(1);if(jn(),lr=u,hs.current=c,va!==null)throw Error(r(261));return Da=null,Ua=0,xa}function tf(){for(;va!==null;)Rc(va)}function nf(){for(;va!==null&&!Dr();)Rc(va)}function Rc(t){var n=kc(t.alternate,t,ko);t.memoizedProps=t.pendingProps,n===null?Lc(t):va=n,Ws.current=null}function Lc(t){var n=t;do{var u=n.alternate;if(t=n.return,n.flags&32768){if(u=Yc(u,n),u!==null){u.flags&=32767,va=u;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{xa=6,va=null;return}}else if(u=Vc(u,n,ko),u!==null){va=u;return}if(n=n.sibling,n!==null){va=n;return}va=n=t}while(n!==null);xa===0&&(xa=5)}function ml(t,n,u){var c=nr,S=ei.transition;try{ei.transition=null,nr=1,rf(t,n,u,c)}finally{ei.transition=S,nr=c}return null}function rf(t,n,u,c){do Fl();while(Wu!==null);if(lr&6)throw Error(r(327));u=t.finishedWork;var S=t.finishedLanes;if(u===null)return null;if(t.finishedWork=null,t.finishedLanes=0,u===t.current)throw Error(r(177));t.callbackNode=null,t.callbackPriority=0;var C=u.lanes|u.childLanes;if(Ia(t,C),t===Da&&(va=Da=null,Ua=0),!(u.subtreeFlags&2064)&&!(u.flags&2064)||ys||(ys=!0,_c(bo,function(){return Fl(),null})),C=(u.flags&15990)!==0,u.subtreeFlags&15990||C){C=ei.transition,ei.transition=null;var Z=nr;nr=1;var ge=lr;lr|=4,Ws.current=null,Xc(t,u),xc(u,t),ta(Wl),Wi=!!au,Wl=au=null,t.current=u,Jc(u,t,S),ni(),lr=ge,nr=Z,ei.transition=C}else t.current=u;if(ys&&(ys=!1,Wu=t,Es=S),C=t.pendingLanes,C===0&&(Zu=null),Ii(u.stateNode,c),So(t,sr()),n!==null)for(c=t.onRecoverableError,u=0;u<n.length;u++)S=n[u],c(S.value,{componentStack:S.stack,digest:S.digest});if(ms)throw ms=!1,t=Vs,Vs=null,t;return Es&1&&t.tag!==0&&Fl(),C=t.pendingLanes,C&1?t===Ys?as++:(as=0,Ys=t):as=0,De(),null}function Fl(){if(Wu!==null){var t=Oi(Es),n=ei.transition,u=nr;try{if(ei.transition=null,nr=16>t?16:t,Wu===null)var c=!1;else{if(t=Wu,Wu=null,Es=0,lr&6)throw Error(r(331));var S=lr;for(lr|=4,Vt=t.current;Vt!==null;){var C=Vt,Z=C.child;if(Vt.flags&16){var ge=C.deletions;if(ge!==null){for(var Me=0;Me<ge.length;Me++){var qe=ge[Me];for(Vt=qe;Vt!==null;){var xt=Vt;switch(xt.tag){case 0:case 11:case 15:ts(8,xt,C)}var Tt=xt.child;if(Tt!==null)Tt.return=xt,Vt=Tt;else for(;Vt!==null;){xt=Vt;var St=xt.sibling,Wt=xt.return;if(mc(xt),xt===qe){Vt=null;break}if(St!==null){St.return=Wt,Vt=St;break}Vt=Wt}}}var Jt=C.alternate;if(Jt!==null){var rn=Jt.child;if(rn!==null){Jt.child=null;do{var la=rn.sibling;rn.sibling=null,rn=la}while(rn!==null)}}Vt=C}}if(C.subtreeFlags&2064&&Z!==null)Z.return=C,Vt=Z;else e:for(;Vt!==null;){if(C=Vt,C.flags&2048)switch(C.tag){case 0:case 11:case 15:ts(9,C,C.return)}var Ge=C.sibling;if(Ge!==null){Ge.return=C.return,Vt=Ge;break e}Vt=C.return}}var ke=t.current;for(Vt=ke;Vt!==null;){Z=Vt;var Ye=Z.child;if(Z.subtreeFlags&2064&&Ye!==null)Ye.return=Z,Vt=Ye;else e:for(Z=ke;Vt!==null;){if(ge=Vt,ge.flags&2048)try{switch(ge.tag){case 0:case 11:case 15:ps(9,ge)}}catch(un){aa(ge,ge.return,un)}if(ge===Z){Vt=null;break e}var Nt=ge.sibling;if(Nt!==null){Nt.return=ge.return,Vt=Nt;break e}Vt=ge.return}}if(lr=S,De(),pa&&typeof pa.onPostCommitFiberRoot=="function")try{pa.onPostCommitFiberRoot(xo,t)}catch(un){}c=!0}return c}finally{nr=u,ei.transition=n}}return!1}function Nc(t,n,u){n=Ja(u,n),n=Uu(t,n,1),t=Qn(t,n,1),n=lo(),t!==null&&(Pr(t,1,n),So(t,n))}function aa(t,n,u){if(t.tag===3)Nc(t,t,u);else for(;n!==null;){if(n.tag===3){Nc(n,t,u);break}else if(n.tag===1){var c=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Zu===null||!Zu.has(c))){t=Ja(u,t),t=zu(n,t,1),n=Qn(n,t,1),t=lo(),n!==null&&(Pr(n,1,t),So(n,t));break}}n=n.return}}function af(t,n,u){var c=t.pingCache;c!==null&&c.delete(n),n=lo(),t.pingedLanes|=t.suspendedLanes&u,Da===t&&(Ua&u)===u&&(xa===4||xa===3&&(Ua&130023424)===Ua&&500>sr()-Ks?gl(t,0):Gs|=u),So(t,n)}function Dc(t,n){n===0&&(t.mode&1?(n=wo,wo<<=1,!(wo&130023424)&&(wo=4194304)):n=1);var u=lo();t=Jn(t,n),t!==null&&(Pr(t,n,u),So(t,u))}function of(t){var n=t.memoizedState,u=0;n!==null&&(u=n.retryLane),Dc(t,u)}function uf(t,n){var u=0;switch(t.tag){case 13:var c=t.stateNode,S=t.memoizedState;S!==null&&(u=S.retryLane);break;case 19:c=t.stateNode;break;default:throw Error(r(314))}c!==null&&c.delete(n),Dc(t,u)}var kc;kc=function(t,n,u){if(t!==null)if(t.memoizedProps!==n.pendingProps||Va.current)Na=!0;else{if(!(t.lanes&u)&&!(n.flags&128))return Na=!1,Kc(t,n,u);Na=!!(t.flags&131072)}else Na=!1,Rt&&n.flags&1048576&&Mt(n,rt,n.index);switch(n.lanes=0,n.tag){case 2:var c=n.type;ds(t,n),t=n.pendingProps;var S=ku(n,Pa.current);bn(n,u),S=Zn(null,n,c,t,S,u);var C=Tn();return n.flags|=1,typeof S=="object"&&S!==null&&typeof S.render=="function"&&S.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Ma(c)?(C=!0,T(n)):C=!1,n.memoizedState=S.state!==null&&S.state!==void 0?S.state:null,ir(n),S.updater=Qr,n.stateNode=S,S._reactInternals=n,ya(n,c,t,u),n=$u(null,n,c,!0,C,u)):(n.tag=0,Rt&&C&&It(n),Ft(null,n,S,u),n=n.child),n;case 16:c=n.elementType;e:{switch(ds(t,n),t=n.pendingProps,S=c._init,c=S(c._payload),n.type=c,S=n.tag=sf(c),t=mn(c,t),S){case 0:n=vl(null,n,c,t,u);break e;case 1:n=ql(null,n,c,t,u);break e;case 11:n=On(null,n,c,t,u);break e;case 14:n=zr(null,n,c,mn(c.type,t),u);break e}throw Error(r(306,c,""))}return n;case 0:return c=n.type,S=n.pendingProps,S=n.elementType===c?S:mn(c,S),vl(t,n,c,S,u);case 1:return c=n.type,S=n.pendingProps,S=n.elementType===c?S:mn(c,S),ql(t,n,c,S,u);case 3:e:{if(lc(n),t===null)throw Error(r(387));c=n.pendingProps,C=n.memoizedState,S=C.element,Vr(t,n),Yr(n,c,null,u);var Z=n.memoizedState;if(c=Z.element,C.isDehydrated)if(C={element:c,isDehydrated:!1,cache:Z.cache,pendingSuspenseBoundaries:Z.pendingSuspenseBoundaries,transitions:Z.transitions},n.updateQueue.baseState=C,n.memoizedState=C,n.flags&256){S=Ja(Error(r(423)),n),n=sc(t,n,c,u,S);break e}else if(c!==S){S=Ja(Error(r(424)),n),n=sc(t,n,c,u,S);break e}else for(At=ji(n.stateNode.containerInfo.firstChild),Dt=n,Rt=!0,Lt=null,u=La(n,null,c,u),n.child=u;u;)u.flags=u.flags&-3|4096,u=u.sibling;else{if(cn(),c===S){n=cu(t,n,u);break e}Ft(t,n,c,u)}n=n.child}return n;case 5:return oo(n),t===null&&zt(n),c=n.type,S=n.pendingProps,C=t!==null?t.memoizedProps:null,Z=S.children,Gl(c,S)?Z=null:C!==null&&Gl(c,C)&&(n.flags|=32),dl(t,n),Ft(t,n,Z,u),n.child;case 6:return t===null&&zt(n),null;case 13:return cc(t,n,u);case 4:return Nr(n,n.stateNode.containerInfo),c=n.pendingProps,t===null?n.child=gr(n,null,c,u):Ft(t,n,c,u),n.child;case 11:return c=n.type,S=n.pendingProps,S=n.elementType===c?S:mn(c,S),On(t,n,c,S,u);case 7:return Ft(t,n,n.pendingProps,u),n.child;case 8:return Ft(t,n,n.pendingProps.children,u),n.child;case 12:return Ft(t,n,n.pendingProps.children,u),n.child;case 10:e:{if(c=n.type._context,S=n.pendingProps,C=n.memoizedProps,Z=S.value,Tr(wn,c._currentValue),c._currentValue=Z,C!==null)if(Ca(C.value,Z)){if(C.children===S.children&&!Va.current){n=cu(t,n,u);break e}}else for(C=n.child,C!==null&&(C.return=n);C!==null;){var ge=C.dependencies;if(ge!==null){Z=C.child;for(var Me=ge.firstContext;Me!==null;){if(Me.context===c){if(C.tag===1){Me=vn(-1,u&-u),Me.tag=2;var qe=C.updateQueue;if(qe!==null){qe=qe.shared;var xt=qe.pending;xt===null?Me.next=Me:(Me.next=xt.next,xt.next=Me),qe.pending=Me}}C.lanes|=u,Me=C.alternate,Me!==null&&(Me.lanes|=u),Mn(C.return,u,n),ge.lanes|=u;break}Me=Me.next}}else if(C.tag===10)Z=C.type===n.type?null:C.child;else if(C.tag===18){if(Z=C.return,Z===null)throw Error(r(341));Z.lanes|=u,ge=Z.alternate,ge!==null&&(ge.lanes|=u),Mn(Z,u,n),Z=C.sibling}else Z=C.child;if(Z!==null)Z.return=C;else for(Z=C;Z!==null;){if(Z===n){Z=null;break}if(C=Z.sibling,C!==null){C.return=Z.return,Z=C;break}Z=Z.return}C=Z}Ft(t,n,S.children,u),n=n.child}return n;case 9:return S=n.type,c=n.pendingProps.children,bn(n,u),S=tn(S),c=c(S),n.flags|=1,Ft(t,n,c,u),n.child;case 14:return c=n.type,S=mn(c,n.pendingProps),S=mn(c.type,S),zr(t,n,c,S,u);case 15:return ra(t,n,n.type,n.pendingProps,u);case 17:return c=n.type,S=n.pendingProps,S=n.elementType===c?S:mn(c,S),ds(t,n),n.tag=1,Ma(c)?(t=!0,T(n)):t=!1,bn(n,u),fr(n,c,S),ya(n,c,S,u),$u(null,n,c,!0,t,u);case 19:return dc(t,n,u);case 22:return $r(t,n,u)}throw Error(r(156,n.tag))};function _c(t,n){return Gr(t,n)}function lf(t,n,u,c){this.tag=t,this.key=u,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ti(t,n,u,c){return new lf(t,n,u,c)}function tc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function sf(t){if(typeof t=="function")return tc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Oe)return 11;if(t===je)return 14}return 2}function Vu(t,n){var u=t.alternate;return u===null?(u=ti(t.tag,n,t.key,t.mode),u.elementType=t.elementType,u.type=t.type,u.stateNode=t.stateNode,u.alternate=t,t.alternate=u):(u.pendingProps=n,u.type=t.type,u.flags=0,u.subtreeFlags=0,u.deletions=null),u.flags=t.flags&14680064,u.childLanes=t.childLanes,u.lanes=t.lanes,u.child=t.child,u.memoizedProps=t.memoizedProps,u.memoizedState=t.memoizedState,u.updateQueue=t.updateQueue,n=t.dependencies,u.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},u.sibling=t.sibling,u.index=t.index,u.ref=t.ref,u}function ws(t,n,u,c,S,C){var Z=2;if(c=t,typeof t=="function")tc(t)&&(Z=1);else if(typeof t=="string")Z=5;else e:switch(t){case K:return yl(u.children,S,C,n);case ee:Z=8,S|=8;break;case J:return t=ti(12,u,n,S|2),t.elementType=J,t.lanes=C,t;case Ne:return t=ti(13,u,n,S),t.elementType=Ne,t.lanes=C,t;case _e:return t=ti(19,u,n,S),t.elementType=_e,t.lanes=C,t;case re:return Is(u,S,C,n);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case ce:Z=10;break e;case Te:Z=9;break e;case Oe:Z=11;break e;case je:Z=14;break e;case q:Z=16,c=null;break e}throw Error(r(130,t==null?t:typeof t,""))}return n=ti(Z,u,n,S),n.elementType=t,n.type=c,n.lanes=C,n}function yl(t,n,u,c){return t=ti(7,t,c,n),t.lanes=u,t}function Is(t,n,u,c){return t=ti(22,t,c,n),t.elementType=re,t.lanes=u,t.stateNode={isHidden:!1},t}function nc(t,n,u){return t=ti(6,t,null,n),t.lanes=u,t}function rc(t,n,u){return n=ti(4,t.children!==null?t.children:[],t.key,n),n.lanes=u,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}function cf(t,n,u,c,S){this.tag=n,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Fr(0),this.expirationTimes=Fr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fr(0),this.identifierPrefix=c,this.onRecoverableError=S,this.mutableSourceEagerHydrationData=null}function ac(t,n,u,c,S,C,Z,ge,Me){return t=new cf(t,n,u,ge,Me),n===1?(n=1,C===!0&&(n|=8)):n=0,C=ti(3,null,null,n),t.current=C,C.stateNode=t,C.memoizedState={element:c,isDehydrated:u,cache:null,transitions:null,pendingSuspenseBoundaries:null},ir(C),t}function ff(t,n,u){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:z,key:c==null?null:""+c,children:t,containerInfo:n,implementation:u}}function jc(t){if(!t)return Fi;t=t._reactInternals;e:{if(Ut(t)!==t||t.tag!==1)throw Error(r(170));var n=t;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Ma(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(r(171))}if(t.tag===1){var u=t.type;if(Ma(u))return cs(t,u,n)}return n}function Bc(t,n,u,c,S,C,Z,ge,Me){return t=ac(u,c,!0,t,S,C,Z,ge,Me),t.context=jc(null),u=t.current,c=lo(),S=Gu(u),C=vn(c,S),C.callback=n!=null?n:null,Qn(u,C,S),t.current.lanes=S,Pr(t,S,c),So(t,c),t}function Ts(t,n,u,c){var S=n.current,C=lo(),Z=Gu(S);return u=jc(u),n.context===null?n.context=u:n.pendingContext=u,n=vn(C,Z),n.payload={element:t},c=c===void 0?null:c,c!==null&&(n.callback=c),t=Qn(S,n,Z),t!==null&&(xi(t,S,Z,C),hr(t,S,Z)),Z}function Os(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Fc(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var u=t.retryLane;t.retryLane=u!==0&&u<n?u:n}}function oc(t,n){Fc(t,n),(t=t.alternate)&&Fc(t,n)}function df(){return null}var Uc=typeof reportError=="function"?reportError:function(t){console.error(t)};function ic(t){this._internalRoot=t}Cs.prototype.render=ic.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));Ts(t,n,null,null)},Cs.prototype.unmount=ic.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;hl(function(){Ts(null,t,null,null)}),n[hi]=null}};function Cs(t){this._internalRoot=t}Cs.prototype.unstable_scheduleHydration=function(t){if(t){var n=ai();t={blockedOn:null,target:t,priority:n};for(var u=0;u<sa.length&&n!==0&&n<sa[u].priority;u++);sa.splice(u,0,t),u===0&&hu(t)}};function uc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function As(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function zc(){}function vf(t,n,u,c,S){if(S){if(typeof c=="function"){var C=c;c=function(){var qe=Os(Z);C.call(qe)}}var Z=Bc(n,c,t,0,null,!1,!1,"",zc);return t._reactRootContainer=Z,t[hi]=Z.current,vo(t.nodeType===8?t.parentNode:t),hl(),Z}for(;S=t.lastChild;)t.removeChild(S);if(typeof c=="function"){var ge=c;c=function(){var qe=Os(Me);ge.call(qe)}}var Me=ac(t,0,!1,null,null,!1,!1,"",zc);return t._reactRootContainer=Me,t[hi]=Me.current,vo(t.nodeType===8?t.parentNode:t),hl(function(){Ts(n,Me,u,c)}),Me}function Ps(t,n,u,c,S){var C=u._reactRootContainer;if(C){var Z=C;if(typeof S=="function"){var ge=S;S=function(){var Me=Os(Z);ge.call(Me)}}Ts(n,Z,t,S)}else Z=vf(u,n,t,S,c);return Os(Z)}Zi=function(t){switch(t.tag){case 3:var n=t.stateNode;if(n.current.memoizedState.isDehydrated){var u=Io(n.pendingLanes);u!==0&&(Ta(n,u|1),So(n,sr()),!(lr&6)&&(Bl=sr()+500,De()))}break;case 13:hl(function(){var c=Jn(t,1);if(c!==null){var S=lo();xi(c,t,1,S)}}),oc(t,1)}},vu=function(t){if(t.tag===13){var n=Jn(t,134217728);if(n!==null){var u=lo();xi(n,t,134217728,u)}oc(t,134217728)}},pu=function(t){if(t.tag===13){var n=Gu(t),u=Jn(t,n);if(u!==null){var c=lo();xi(u,t,n,c)}oc(t,n)}},ai=function(){return nr},oi=function(t,n){var u=nr;try{return nr=t,n()}finally{nr=u}},ct=function(t,n,u){switch(n){case"input":if(pe(t,u),n=u.name,u.type==="radio"&&n!=null){for(u=t;u.parentNode;)u=u.parentNode;for(u=u.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<u.length;n++){var c=u[n];if(c!==t&&c.form===t.form){var S=Bi(c);if(!S)throw Error(r(90));et(c),pe(c,S)}}}break;case"textarea":ye(t,u);break;case"select":n=u.value,n!=null&&ve(t,!!u.multiple,n,!1)}},Le=Js,ut=hl;var pf={usingClientEntryPoint:!1,Events:[cl,Nu,Bi,tt,Ze,Js]},os={findFiberByHostInstance:ou,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},hf={bundleType:os.bundleType,version:os.version,rendererPackageName:os.rendererPackageName,rendererConfig:os.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:A.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=ar(t),t===null?null:t.stateNode},findFiberByHostInstance:os.findFiberByHostInstance||df,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var Ms=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ms.isDisabled&&Ms.supportsFiber)try{xo=Ms.inject(hf),pa=Ms}catch(t){}}v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pf,v.createPortal=function(t,n){var u=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!uc(n))throw Error(r(200));return ff(t,n,null,u)},v.createRoot=function(t,n){if(!uc(t))throw Error(r(299));var u=!1,c="",S=Uc;return n!=null&&(n.unstable_strictMode===!0&&(u=!0),n.identifierPrefix!==void 0&&(c=n.identifierPrefix),n.onRecoverableError!==void 0&&(S=n.onRecoverableError)),n=ac(t,1,!1,null,null,u,!1,c,S),t[hi]=n.current,vo(t.nodeType===8?t.parentNode:t),new ic(n)},v.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=ar(n),t=t===null?null:t.stateNode,t},v.flushSync=function(t){return hl(t)},v.hydrate=function(t,n,u){if(!As(n))throw Error(r(200));return Ps(null,t,n,!0,u)},v.hydrateRoot=function(t,n,u){if(!uc(t))throw Error(r(405));var c=u!=null&&u.hydratedSources||null,S=!1,C="",Z=Uc;if(u!=null&&(u.unstable_strictMode===!0&&(S=!0),u.identifierPrefix!==void 0&&(C=u.identifierPrefix),u.onRecoverableError!==void 0&&(Z=u.onRecoverableError)),n=Bc(n,null,t,1,u!=null?u:null,S,!1,C,Z),t[hi]=n.current,vo(t),c)for(t=0;t<c.length;t++)u=c[t],S=u._getVersion,S=S(u._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[u,S]:n.mutableSourceEagerHydrationData.push(u,S);return new Cs(n)},v.render=function(t,n,u){if(!As(n))throw Error(r(200));return Ps(null,t,n,!1,u)},v.unmountComponentAtNode=function(t){if(!As(t))throw Error(r(40));return t._reactRootContainer?(hl(function(){Ps(null,null,t,!1,function(){t._reactRootContainer=null,t[hi]=null})}),!0):!1},v.unstable_batchedUpdates=Js,v.unstable_renderSubtreeIntoContainer=function(t,n,u,c){if(!As(u))throw Error(r(200));if(t==null||t._reactInternals===void 0)throw Error(r(38));return Ps(t,n,u,!1,c)},v.version="18.2.0-next-9e3b772b8-20220608"},55862:function(s,v,e){"use strict";var o=e(57160);if(!0)v.createRoot=o.createRoot,v.hydrateRoot=o.hydrateRoot;else var a},57160:function(s,v,e){"use strict";function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(a){console.error(a)}}o(),s.exports=e(10251)},12373:function(s){var v=typeof Element!="undefined",e=typeof Map=="function",o=typeof Set=="function",a=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function r(l,i){if(l===i)return!0;if(l&&i&&typeof l=="object"&&typeof i=="object"){if(l.constructor!==i.constructor)return!1;var d,f,g;if(Array.isArray(l)){if(d=l.length,d!=i.length)return!1;for(f=d;f--!==0;)if(!r(l[f],i[f]))return!1;return!0}var h;if(e&&l instanceof Map&&i instanceof Map){if(l.size!==i.size)return!1;for(h=l.entries();!(f=h.next()).done;)if(!i.has(f.value[0]))return!1;for(h=l.entries();!(f=h.next()).done;)if(!r(f.value[1],i.get(f.value[0])))return!1;return!0}if(o&&l instanceof Set&&i instanceof Set){if(l.size!==i.size)return!1;for(h=l.entries();!(f=h.next()).done;)if(!i.has(f.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(l)&&ArrayBuffer.isView(i)){if(d=l.length,d!=i.length)return!1;for(f=d;f--!==0;)if(l[f]!==i[f])return!1;return!0}if(l.constructor===RegExp)return l.source===i.source&&l.flags===i.flags;if(l.valueOf!==Object.prototype.valueOf&&typeof l.valueOf=="function"&&typeof i.valueOf=="function")return l.valueOf()===i.valueOf();if(l.toString!==Object.prototype.toString&&typeof l.toString=="function"&&typeof i.toString=="function")return l.toString()===i.toString();if(g=Object.keys(l),d=g.length,d!==Object.keys(i).length)return!1;for(f=d;f--!==0;)if(!Object.prototype.hasOwnProperty.call(i,g[f]))return!1;if(v&&l instanceof Element)return!1;for(f=d;f--!==0;)if(!((g[f]==="_owner"||g[f]==="__v"||g[f]==="__o")&&l.$$typeof)&&!r(l[g[f]],i[g[f]]))return!1;return!0}return l!==l&&i!==i}s.exports=function(i,d){try{return r(i,d)}catch(f){if((f.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw f}}},55200:function(s,v,e){"use strict";e.d(v,{B6:function(){return $},ql:function(){return ot}});var o=e(71062),a=e(12708),r=e.n(a),l=e(12373),i=e.n(l),d=e(44520),f=e.n(d),g=e(19747),h=e.n(g);function p(){return p=Object.assign||function(te){for(var fe=1;fe<arguments.length;fe++){var pe=arguments[fe];for(var me in pe)Object.prototype.hasOwnProperty.call(pe,me)&&(te[me]=pe[me])}return te},p.apply(this,arguments)}function m(te,fe){te.prototype=Object.create(fe.prototype),te.prototype.constructor=te,E(te,fe)}function E(te,fe){return E=Object.setPrototypeOf||function(pe,me){return pe.__proto__=me,pe},E(te,fe)}function b(te,fe){if(te==null)return{};var pe,me,Ie={},ue=Object.keys(te);for(me=0;me<ue.length;me++)fe.indexOf(pe=ue[me])>=0||(Ie[pe]=te[pe]);return Ie}var w={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title",FRAGMENT:"Symbol(react.fragment)"},x={rel:["amphtml","canonical","alternate"]},R={type:["application/ld+json"]},P={charset:"",name:["robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]},j=Object.keys(w).map(function(te){return w[te]}),N={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},F=Object.keys(N).reduce(function(te,fe){return te[N[fe]]=fe,te},{}),A=function(te,fe){for(var pe=te.length-1;pe>=0;pe-=1){var me=te[pe];if(Object.prototype.hasOwnProperty.call(me,fe))return me[fe]}return null},k=function(te){var fe=A(te,w.TITLE),pe=A(te,"titleTemplate");if(Array.isArray(fe)&&(fe=fe.join("")),pe&&fe)return pe.replace(/%s/g,function(){return fe});var me=A(te,"defaultTitle");return fe||me||void 0},z=function(te){return A(te,"onChangeClientState")||function(){}},K=function(te,fe){return fe.filter(function(pe){return pe[te]!==void 0}).map(function(pe){return pe[te]}).reduce(function(pe,me){return p({},pe,me)},{})},ee=function(te,fe){return fe.filter(function(pe){return pe[w.BASE]!==void 0}).map(function(pe){return pe[w.BASE]}).reverse().reduce(function(pe,me){if(!pe.length)for(var Ie=Object.keys(me),ue=0;ue<Ie.length;ue+=1){var ve=Ie[ue].toLowerCase();if(te.indexOf(ve)!==-1&&me[ve])return pe.concat(me)}return pe},[])},J=function(te,fe,pe){var me={};return pe.filter(function(Ie){return!!Array.isArray(Ie[te])||(Ie[te]!==void 0&&console&&typeof console.warn=="function"&&console.warn("Helmet: "+te+' should be of type "Array". Instead found type "'+typeof Ie[te]+'"'),!1)}).map(function(Ie){return Ie[te]}).reverse().reduce(function(Ie,ue){var ve={};ue.filter(function(oe){for(var he,Ae=Object.keys(oe),Ue=0;Ue<Ae.length;Ue+=1){var He=Ae[Ue],it=He.toLowerCase();fe.indexOf(it)===-1||he==="rel"&&oe[he].toLowerCase()==="canonical"||it==="rel"&&oe[it].toLowerCase()==="stylesheet"||(he=it),fe.indexOf(He)===-1||He!=="innerHTML"&&He!=="cssText"&&He!=="itemprop"||(he=He)}if(!he||!oe[he])return!1;var y=oe[he].toLowerCase();return me[he]||(me[he]={}),ve[he]||(ve[he]={}),!me[he][y]&&(ve[he][y]=!0,!0)}).reverse().forEach(function(oe){return Ie.push(oe)});for(var Ee=Object.keys(ve),le=0;le<Ee.length;le+=1){var ye=Ee[le],Be=p({},me[ye],ve[ye]);me[ye]=Be}return Ie},[]).reverse()},ce=function(te,fe){if(Array.isArray(te)&&te.length){for(var pe=0;pe<te.length;pe+=1)if(te[pe][fe])return!0}return!1},Te=function(te){return Array.isArray(te)?te.join(""):te},Oe=function(te,fe){return Array.isArray(te)?te.reduce(function(pe,me){return function(Ie,ue){for(var ve=Object.keys(Ie),Ee=0;Ee<ve.length;Ee+=1)if(ue[ve[Ee]]&&ue[ve[Ee]].includes(Ie[ve[Ee]]))return!0;return!1}(me,fe)?pe.priority.push(me):pe.default.push(me),pe},{priority:[],default:[]}):{default:te}},Ne=function(te,fe){var pe;return p({},te,((pe={})[fe]=void 0,pe))},_e=[w.NOSCRIPT,w.SCRIPT,w.STYLE],je=function(te,fe){return fe===void 0&&(fe=!0),fe===!1?String(te):String(te).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},q=function(te){return Object.keys(te).reduce(function(fe,pe){var me=te[pe]!==void 0?pe+'="'+te[pe]+'"':""+pe;return fe?fe+" "+me:me},"")},re=function(te,fe){return fe===void 0&&(fe={}),Object.keys(te).reduce(function(pe,me){return pe[N[me]||me]=te[me],pe},fe)},ae=function(te,fe){return fe.map(function(pe,me){var Ie,ue=((Ie={key:me})["data-rh"]=!0,Ie);return Object.keys(pe).forEach(function(ve){var Ee=N[ve]||ve;Ee==="innerHTML"||Ee==="cssText"?ue.dangerouslySetInnerHTML={__html:pe.innerHTML||pe.cssText}:ue[Ee]=pe[ve]}),o.createElement(te,ue)})},O=function(te,fe,pe){switch(te){case w.TITLE:return{toComponent:function(){return Ie=fe.titleAttributes,(ue={key:me=fe.title})["data-rh"]=!0,ve=re(Ie,ue),[o.createElement(w.TITLE,ve,me)];var me,Ie,ue,ve},toString:function(){return function(me,Ie,ue,ve){var Ee=q(ue),le=Te(Ie);return Ee?"<"+me+' data-rh="true" '+Ee+">"+je(le,ve)+"</"+me+">":"<"+me+' data-rh="true">'+je(le,ve)+"</"+me+">"}(te,fe.title,fe.titleAttributes,pe)}};case"bodyAttributes":case"htmlAttributes":return{toComponent:function(){return re(fe)},toString:function(){return q(fe)}};default:return{toComponent:function(){return ae(te,fe)},toString:function(){return function(me,Ie,ue){return Ie.reduce(function(ve,Ee){var le=Object.keys(Ee).filter(function(oe){return!(oe==="innerHTML"||oe==="cssText")}).reduce(function(oe,he){var Ae=Ee[he]===void 0?he:he+'="'+je(Ee[he],ue)+'"';return oe?oe+" "+Ae:Ae},""),ye=Ee.innerHTML||Ee.cssText||"",Be=_e.indexOf(me)===-1;return ve+"<"+me+' data-rh="true" '+le+(Be?"/>":">"+ye+"</"+me+">")},"")}(te,fe,pe)}}}},L=function(te){var fe=te.baseTag,pe=te.bodyAttributes,me=te.encode,Ie=te.htmlAttributes,ue=te.noscriptTags,ve=te.styleTags,Ee=te.title,le=Ee===void 0?"":Ee,ye=te.titleAttributes,Be=te.linkTags,oe=te.metaTags,he=te.scriptTags,Ae={toComponent:function(){},toString:function(){return""}};if(te.prioritizeSeoTags){var Ue=function(He){var it=He.linkTags,y=He.scriptTags,Q=He.encode,be=Oe(He.metaTags,P),we=Oe(it,x),ze=Oe(y,R);return{priorityMethods:{toComponent:function(){return[].concat(ae(w.META,be.priority),ae(w.LINK,we.priority),ae(w.SCRIPT,ze.priority))},toString:function(){return O(w.META,be.priority,Q)+" "+O(w.LINK,we.priority,Q)+" "+O(w.SCRIPT,ze.priority,Q)}},metaTags:be.default,linkTags:we.default,scriptTags:ze.default}}(te);Ae=Ue.priorityMethods,Be=Ue.linkTags,oe=Ue.metaTags,he=Ue.scriptTags}return{priority:Ae,base:O(w.BASE,fe,me),bodyAttributes:O("bodyAttributes",pe,me),htmlAttributes:O("htmlAttributes",Ie,me),link:O(w.LINK,Be,me),meta:O(w.META,oe,me),noscript:O(w.NOSCRIPT,ue,me),script:O(w.SCRIPT,he,me),style:O(w.STYLE,ve,me),title:O(w.TITLE,{title:le,titleAttributes:ye},me)}},W=[],V=function(te,fe){var pe=this;fe===void 0&&(fe=typeof document!="undefined"),this.instances=[],this.value={setHelmet:function(me){pe.context.helmet=me},helmetInstances:{get:function(){return pe.canUseDOM?W:pe.instances},add:function(me){(pe.canUseDOM?W:pe.instances).push(me)},remove:function(me){var Ie=(pe.canUseDOM?W:pe.instances).indexOf(me);(pe.canUseDOM?W:pe.instances).splice(Ie,1)}}},this.context=te,this.canUseDOM=fe,fe||(te.helmet=L({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))},G=o.createContext({}),I=r().shape({setHelmet:r().func,helmetInstances:r().shape({get:r().func,add:r().func,remove:r().func})}),H=typeof document!="undefined",$=function(te){function fe(pe){var me;return(me=te.call(this,pe)||this).helmetData=new V(me.props.context,fe.canUseDOM),me}return m(fe,te),fe.prototype.render=function(){return o.createElement(G.Provider,{value:this.helmetData.value},this.props.children)},fe}(o.Component);$.canUseDOM=H,$.propTypes={context:r().shape({helmet:r().shape()}),children:r().node.isRequired},$.defaultProps={context:{}},$.displayName="HelmetProvider";var Y=function(te,fe){var pe,me=document.head||document.querySelector(w.HEAD),Ie=me.querySelectorAll(te+"[data-rh]"),ue=[].slice.call(Ie),ve=[];return fe&&fe.length&&fe.forEach(function(Ee){var le=document.createElement(te);for(var ye in Ee)Object.prototype.hasOwnProperty.call(Ee,ye)&&(ye==="innerHTML"?le.innerHTML=Ee.innerHTML:ye==="cssText"?le.styleSheet?le.styleSheet.cssText=Ee.cssText:le.appendChild(document.createTextNode(Ee.cssText)):le.setAttribute(ye,Ee[ye]===void 0?"":Ee[ye]));le.setAttribute("data-rh","true"),ue.some(function(Be,oe){return pe=oe,le.isEqualNode(Be)})?ue.splice(pe,1):ve.push(le)}),ue.forEach(function(Ee){return Ee.parentNode.removeChild(Ee)}),ve.forEach(function(Ee){return me.appendChild(Ee)}),{oldTags:ue,newTags:ve}},X=function(te,fe){var pe=document.getElementsByTagName(te)[0];if(pe){for(var me=pe.getAttribute("data-rh"),Ie=me?me.split(","):[],ue=[].concat(Ie),ve=Object.keys(fe),Ee=0;Ee<ve.length;Ee+=1){var le=ve[Ee],ye=fe[le]||"";pe.getAttribute(le)!==ye&&pe.setAttribute(le,ye),Ie.indexOf(le)===-1&&Ie.push(le);var Be=ue.indexOf(le);Be!==-1&&ue.splice(Be,1)}for(var oe=ue.length-1;oe>=0;oe-=1)pe.removeAttribute(ue[oe]);Ie.length===ue.length?pe.removeAttribute("data-rh"):pe.getAttribute("data-rh")!==ve.join(",")&&pe.setAttribute("data-rh",ve.join(","))}},Re=function(te,fe){var pe=te.baseTag,me=te.htmlAttributes,Ie=te.linkTags,ue=te.metaTags,ve=te.noscriptTags,Ee=te.onChangeClientState,le=te.scriptTags,ye=te.styleTags,Be=te.title,oe=te.titleAttributes;X(w.BODY,te.bodyAttributes),X(w.HTML,me),function(He,it){He!==void 0&&document.title!==He&&(document.title=Te(He)),X(w.TITLE,it)}(Be,oe);var he={baseTag:Y(w.BASE,pe),linkTags:Y(w.LINK,Ie),metaTags:Y(w.META,ue),noscriptTags:Y(w.NOSCRIPT,ve),scriptTags:Y(w.SCRIPT,le),styleTags:Y(w.STYLE,ye)},Ae={},Ue={};Object.keys(he).forEach(function(He){var it=he[He],y=it.newTags,Q=it.oldTags;y.length&&(Ae[He]=y),Q.length&&(Ue[He]=he[He].oldTags)}),fe&&fe(),Ee(te,Ae,Ue)},Fe=null,at=function(te){function fe(){for(var me,Ie=arguments.length,ue=new Array(Ie),ve=0;ve<Ie;ve++)ue[ve]=arguments[ve];return(me=te.call.apply(te,[this].concat(ue))||this).rendered=!1,me}m(fe,te);var pe=fe.prototype;return pe.shouldComponentUpdate=function(me){return!h()(me,this.props)},pe.componentDidUpdate=function(){this.emitChange()},pe.componentWillUnmount=function(){this.props.context.helmetInstances.remove(this),this.emitChange()},pe.emitChange=function(){var me,Ie,ue=this.props.context,ve=ue.setHelmet,Ee=null,le=(me=ue.helmetInstances.get().map(function(ye){var Be=p({},ye.props);return delete Be.context,Be}),{baseTag:ee(["href"],me),bodyAttributes:K("bodyAttributes",me),defer:A(me,"defer"),encode:A(me,"encodeSpecialCharacters"),htmlAttributes:K("htmlAttributes",me),linkTags:J(w.LINK,["rel","href"],me),metaTags:J(w.META,["name","charset","http-equiv","property","itemprop"],me),noscriptTags:J(w.NOSCRIPT,["innerHTML"],me),onChangeClientState:z(me),scriptTags:J(w.SCRIPT,["src","innerHTML"],me),styleTags:J(w.STYLE,["cssText"],me),title:k(me),titleAttributes:K("titleAttributes",me),prioritizeSeoTags:ce(me,"prioritizeSeoTags")});$.canUseDOM?(Ie=le,Fe&&cancelAnimationFrame(Fe),Ie.defer?Fe=requestAnimationFrame(function(){Re(Ie,function(){Fe=null})}):(Re(Ie),Fe=null)):L&&(Ee=L(le)),ve(Ee)},pe.init=function(){this.rendered||(this.rendered=!0,this.props.context.helmetInstances.add(this),this.emitChange())},pe.render=function(){return this.init(),null},fe}(o.Component);at.propTypes={context:I.isRequired},at.displayName="HelmetDispatcher";var et=["children"],Ke=["children"],ot=function(te){function fe(){return te.apply(this,arguments)||this}m(fe,te);var pe=fe.prototype;return pe.shouldComponentUpdate=function(me){return!i()(Ne(this.props,"helmetData"),Ne(me,"helmetData"))},pe.mapNestedChildrenToProps=function(me,Ie){if(!Ie)return null;switch(me.type){case w.SCRIPT:case w.NOSCRIPT:return{innerHTML:Ie};case w.STYLE:return{cssText:Ie};default:throw new Error("<"+me.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")}},pe.flattenArrayTypeChildren=function(me){var Ie,ue=me.child,ve=me.arrayTypeChildren;return p({},ve,((Ie={})[ue.type]=[].concat(ve[ue.type]||[],[p({},me.newChildProps,this.mapNestedChildrenToProps(ue,me.nestedChildren))]),Ie))},pe.mapObjectTypeChildren=function(me){var Ie,ue,ve=me.child,Ee=me.newProps,le=me.newChildProps,ye=me.nestedChildren;switch(ve.type){case w.TITLE:return p({},Ee,((Ie={})[ve.type]=ye,Ie.titleAttributes=p({},le),Ie));case w.BODY:return p({},Ee,{bodyAttributes:p({},le)});case w.HTML:return p({},Ee,{htmlAttributes:p({},le)});default:return p({},Ee,((ue={})[ve.type]=p({},le),ue))}},pe.mapArrayTypeChildrenToProps=function(me,Ie){var ue=p({},Ie);return Object.keys(me).forEach(function(ve){var Ee;ue=p({},ue,((Ee={})[ve]=me[ve],Ee))}),ue},pe.warnOnInvalidChildren=function(me,Ie){return f()(j.some(function(ue){return me.type===ue}),typeof me.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":"Only elements types "+j.join(", ")+" are allowed. Helmet does not support rendering <"+me.type+"> elements. Refer to our API for more information."),f()(!Ie||typeof Ie=="string"||Array.isArray(Ie)&&!Ie.some(function(ue){return typeof ue!="string"}),"Helmet expects a string as a child of <"+me.type+">. Did you forget to wrap your children in braces? ( <"+me.type+">{``}</"+me.type+"> ) Refer to our API for more information."),!0},pe.mapChildrenToProps=function(me,Ie){var ue=this,ve={};return o.Children.forEach(me,function(Ee){if(Ee&&Ee.props){var le=Ee.props,ye=le.children,Be=b(le,et),oe=Object.keys(Be).reduce(function(Ae,Ue){return Ae[F[Ue]||Ue]=Be[Ue],Ae},{}),he=Ee.type;switch(typeof he=="symbol"?he=he.toString():ue.warnOnInvalidChildren(Ee,ye),he){case w.FRAGMENT:Ie=ue.mapChildrenToProps(ye,Ie);break;case w.LINK:case w.META:case w.NOSCRIPT:case w.SCRIPT:case w.STYLE:ve=ue.flattenArrayTypeChildren({child:Ee,arrayTypeChildren:ve,newChildProps:oe,nestedChildren:ye});break;default:Ie=ue.mapObjectTypeChildren({child:Ee,newProps:Ie,newChildProps:oe,nestedChildren:ye})}}}),this.mapArrayTypeChildrenToProps(ve,Ie)},pe.render=function(){var me=this.props,Ie=me.children,ue=b(me,Ke),ve=p({},ue),Ee=ue.helmetData;return Ie&&(ve=this.mapChildrenToProps(Ie,ve)),!Ee||Ee instanceof V||(Ee=new V(Ee.context,Ee.instances)),Ee?o.createElement(at,p({},ve,{context:Ee.value,helmetData:void 0})):o.createElement(G.Consumer,null,function(le){return o.createElement(at,p({},ve,{context:le}))})},fe}(o.Component);ot.propTypes={base:r().object,bodyAttributes:r().object,children:r().oneOfType([r().arrayOf(r().node),r().node]),defaultTitle:r().string,defer:r().bool,encodeSpecialCharacters:r().bool,htmlAttributes:r().object,link:r().arrayOf(r().object),meta:r().arrayOf(r().object),noscript:r().arrayOf(r().object),onChangeClientState:r().func,script:r().arrayOf(r().object),style:r().arrayOf(r().object),title:r().string,titleAttributes:r().object,titleTemplate:r().string,prioritizeSeoTags:r().bool,helmetData:r().object},ot.defaultProps={defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1},ot.displayName="Helmet"},23278:function(s,v,e){"use strict";e.d(v,{_y:function(){return h},zt:function(){return g}});var o=e(71062),a=e(94266),r=e.n(a);function l(m){return m.displayName||m.name||"Component"}var i=typeof window!="undefined"&&!window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__?window.__REACT_INTL_CONTEXT__||(window.__REACT_INTL_CONTEXT__=o.createContext(null)):o.createContext(null),d=i.Consumer,f=i.Provider,g=f,h=i;function p(m,E){var b=E||{},w=b.intlPropName,x=w===void 0?"intl":w,R=b.forwardRef,P=R===void 0?!1:R,j=b.enforceContext,N=j===void 0?!0:j,F=function(A){return React.createElement(d,null,function(k){var z;N&&invariantIntlContext(k);var K=(z={},z[x]=k,z);return React.createElement(m,__assign({},A,K,{ref:P?A.forwardedRef:null}))})};return F.displayName="injectIntl(".concat(l(m),")"),F.WrappedComponent=m,P?hoistNonReactStatics(React.forwardRef(function(A,k){return React.createElement(F,__assign({},A,{forwardedRef:k}))}),m):hoistNonReactStatics(F,m)}},55661:function(s,v,e){"use strict";e.d(v,{Z:function(){return l}});var o=e(71062),a=e(23278),r=e(48057);function l(){var i=o.useContext(a._y);return(0,r.lq)(i),i}},48057:function(s,v,e){"use strict";e.d(v,{Z0:function(){return d},dt:function(){return f},lq:function(){return i},wU:function(){return g}});var o=e(32290),a=e(71062),r=e(47187),l=e(44301);function i(h){(0,r.kG)(h,"[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")}var d=(0,o.pi)((0,o.pi)({},l.Z0),{textComponent:a.Fragment});function f(h){return function(p){return h(a.Children.toArray(p))}}function g(h,p){if(h===p)return!0;if(!h||!p)return!1;var m=Object.keys(h),E=Object.keys(p),b=m.length;if(E.length!==b)return!1;for(var w=0;w<b;w++){var x=m[w];if(h[x]!==p[x]||!Object.prototype.hasOwnProperty.call(p,x))return!1}return!0}},30508:function(s,v){"use strict";var e=typeof Symbol=="function"&&Symbol.for,o=e?Symbol.for("react.element"):60103,a=e?Symbol.for("react.portal"):60106,r=e?Symbol.for("react.fragment"):60107,l=e?Symbol.for("react.strict_mode"):60108,i=e?Symbol.for("react.profiler"):60114,d=e?Symbol.for("react.provider"):60109,f=e?Symbol.for("react.context"):60110,g=e?Symbol.for("react.async_mode"):60111,h=e?Symbol.for("react.concurrent_mode"):60111,p=e?Symbol.for("react.forward_ref"):60112,m=e?Symbol.for("react.suspense"):60113,E=e?Symbol.for("react.suspense_list"):60120,b=e?Symbol.for("react.memo"):60115,w=e?Symbol.for("react.lazy"):60116,x=e?Symbol.for("react.block"):60121,R=e?Symbol.for("react.fundamental"):60117,P=e?Symbol.for("react.responder"):60118,j=e?Symbol.for("react.scope"):60119;function N(A){if(typeof A=="object"&&A!==null){var k=A.$$typeof;switch(k){case o:switch(A=A.type,A){case g:case h:case r:case i:case l:case m:return A;default:switch(A=A&&A.$$typeof,A){case f:case p:case w:case b:case d:return A;default:return k}}case a:return k}}}function F(A){return N(A)===h}v.AsyncMode=g,v.ConcurrentMode=h,v.ContextConsumer=f,v.ContextProvider=d,v.Element=o,v.ForwardRef=p,v.Fragment=r,v.Lazy=w,v.Memo=b,v.Portal=a,v.Profiler=i,v.StrictMode=l,v.Suspense=m,v.isAsyncMode=function(A){return F(A)||N(A)===g},v.isConcurrentMode=F,v.isContextConsumer=function(A){return N(A)===f},v.isContextProvider=function(A){return N(A)===d},v.isElement=function(A){return typeof A=="object"&&A!==null&&A.$$typeof===o},v.isForwardRef=function(A){return N(A)===p},v.isFragment=function(A){return N(A)===r},v.isLazy=function(A){return N(A)===w},v.isMemo=function(A){return N(A)===b},v.isPortal=function(A){return N(A)===a},v.isProfiler=function(A){return N(A)===i},v.isStrictMode=function(A){return N(A)===l},v.isSuspense=function(A){return N(A)===m},v.isValidElementType=function(A){return typeof A=="string"||typeof A=="function"||A===r||A===h||A===i||A===l||A===m||A===E||typeof A=="object"&&A!==null&&(A.$$typeof===w||A.$$typeof===b||A.$$typeof===d||A.$$typeof===f||A.$$typeof===p||A.$$typeof===R||A.$$typeof===P||A.$$typeof===j||A.$$typeof===x)},v.typeOf=N},99234:function(s,v,e){"use strict";s.exports=e(30508)},9022:function(s,v){"use strict";var e;var o=Symbol.for("react.element"),a=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),d=Symbol.for("react.provider"),f=Symbol.for("react.context"),g=Symbol.for("react.server_context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.suspense_list"),E=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),w=Symbol.for("react.offscreen"),x;x=Symbol.for("react.module.reference");function R(P){if(typeof P=="object"&&P!==null){var j=P.$$typeof;switch(j){case o:switch(P=P.type,P){case r:case i:case l:case p:case m:return P;default:switch(P=P&&P.$$typeof,P){case g:case f:case h:case b:case E:case d:return P;default:return j}}case a:return j}}}e=f,e=d,e=o,e=h,e=r,e=b,e=E,e=a,e=i,e=l,e=p,e=m,e=function(){return!1},e=function(){return!1},e=function(P){return R(P)===f},e=function(P){return R(P)===d},e=function(P){return typeof P=="object"&&P!==null&&P.$$typeof===o},e=function(P){return R(P)===h},v.isFragment=function(P){return R(P)===r},e=function(P){return R(P)===b},v.isMemo=function(P){return R(P)===E},e=function(P){return R(P)===a},e=function(P){return R(P)===i},e=function(P){return R(P)===l},e=function(P){return R(P)===p},e=function(P){return R(P)===m},e=function(P){return typeof P=="string"||typeof P=="function"||P===r||P===i||P===l||P===p||P===m||P===w||typeof P=="object"&&P!==null&&(P.$$typeof===b||P.$$typeof===E||P.$$typeof===d||P.$$typeof===f||P.$$typeof===h||P.$$typeof===x||P.getModuleId!==void 0)},e=R},92888:function(s,v,e){"use strict";s.exports=e(9022)},35338:function(s,v,e){"use strict";e.d(v,{F0:function(){return fe},Fg:function(){return Ke},Gn:function(){return p},TH:function(){return W},UO:function(){return X},V$:function(){return Fe},WU:function(){return Re},fp:function(){return m},j3:function(){return ot},oQ:function(){return O},pC:function(){return Y},s0:function(){return I}});var o=e(19340),a=e(71062);const r=(0,a.createContext)(null),l=(0,a.createContext)(null),i=(0,a.createContext)({outlet:null,matches:[]});function d(ue,ve){if(!ue)throw new Error(ve)}function f(ue,ve){if(!ue){typeof console!="undefined"&&console.warn(ve);try{throw new Error(ve)}catch(Ee){}}}const g={};function h(ue,ve,Ee){!ve&&!g[ue]&&(g[ue]=!0)}function p(ue,ve){return ve===void 0&&(ve={}),ue.replace(/:(\w+)/g,(Ee,le)=>(ve[le]==null&&d(!1),ve[le])).replace(/\/*\*$/,Ee=>ve["*"]==null?"":ve["*"].replace(/^\/*/,"/"))}function m(ue,ve,Ee){Ee===void 0&&(Ee="/");let le=typeof ve=="string"?(0,o.cP)(ve):ve,ye=_e(le.pathname||"/",Ee);if(ye==null)return null;let Be=E(ue);b(Be);let oe=null;for(let he=0;oe==null&&he<Be.length;++he)oe=z(Be[he],ye);return oe}function E(ue,ve,Ee,le){return ve===void 0&&(ve=[]),Ee===void 0&&(Ee=[]),le===void 0&&(le=""),ue.forEach((ye,Be)=>{let oe={relativePath:ye.path||"",caseSensitive:ye.caseSensitive===!0,childrenIndex:Be,route:ye};oe.relativePath.startsWith("/")&&(oe.relativePath.startsWith(le)||d(!1),oe.relativePath=oe.relativePath.slice(le.length));let he=je([le,oe.relativePath]),Ae=Ee.concat(oe);ye.children&&ye.children.length>0&&(ye.index===!0&&d(!1),E(ye.children,ve,Ae,he)),!(ye.path==null&&!ye.index)&&ve.push({path:he,score:A(he,ye.index),routesMeta:Ae})}),ve}function b(ue){ue.sort((ve,Ee)=>ve.score!==Ee.score?Ee.score-ve.score:k(ve.routesMeta.map(le=>le.childrenIndex),Ee.routesMeta.map(le=>le.childrenIndex)))}const w=/^:\w+$/,x=3,R=2,P=1,j=10,N=-2,F=ue=>ue==="*";function A(ue,ve){let Ee=ue.split("/"),le=Ee.length;return Ee.some(F)&&(le+=N),ve&&(le+=R),Ee.filter(ye=>!F(ye)).reduce((ye,Be)=>ye+(w.test(Be)?x:Be===""?P:j),le)}function k(ue,ve){return ue.length===ve.length&&ue.slice(0,-1).every((le,ye)=>le===ve[ye])?ue[ue.length-1]-ve[ve.length-1]:0}function z(ue,ve){let{routesMeta:Ee}=ue,le={},ye="/",Be=[];for(let oe=0;oe<Ee.length;++oe){let he=Ee[oe],Ae=oe===Ee.length-1,Ue=ye==="/"?ve:ve.slice(ye.length)||"/",He=K({path:he.relativePath,caseSensitive:he.caseSensitive,end:Ae},Ue);if(!He)return null;Object.assign(le,He.params);let it=he.route;Be.push({params:le,pathname:je([ye,He.pathname]),pathnameBase:q(je([ye,He.pathnameBase])),route:it}),He.pathnameBase!=="/"&&(ye=je([ye,He.pathnameBase]))}return Be}function K(ue,ve){typeof ue=="string"&&(ue={path:ue,caseSensitive:!1,end:!0});let[Ee,le]=ee(ue.path,ue.caseSensitive,ue.end),ye=ve.match(Ee);if(!ye)return null;let Be=ye[0],oe=Be.replace(/(.)\/+$/,"$1"),he=ye.slice(1);return{params:le.reduce((Ue,He,it)=>{if(He==="*"){let y=he[it]||"";oe=Be.slice(0,Be.length-y.length).replace(/(.)\/+$/,"$1")}return Ue[He]=J(he[it]||"",He),Ue},{}),pathname:Be,pathnameBase:oe,pattern:ue}}function ee(ue,ve,Ee){ve===void 0&&(ve=!1),Ee===void 0&&(Ee=!0);let le=[],ye="^"+ue.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(oe,he)=>(le.push(he),"([^\\/]+)"));return ue.endsWith("*")?(le.push("*"),ye+=ue==="*"||ue==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):ye+=Ee?"\\/*$":"(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)",[new RegExp(ye,ve?void 0:"i"),le]}function J(ue,ve){try{return decodeURIComponent(ue)}catch(Ee){return ue}}function ce(ue,ve){ve===void 0&&(ve="/");let{pathname:Ee,search:le="",hash:ye=""}=typeof ue=="string"?(0,o.cP)(ue):ue;return{pathname:Ee?Ee.startsWith("/")?Ee:Te(Ee,ve):ve,search:re(le),hash:ae(ye)}}function Te(ue,ve){let Ee=ve.replace(/\/+$/,"").split("/");return ue.split("/").forEach(ye=>{ye===".."?Ee.length>1&&Ee.pop():ye!=="."&&Ee.push(ye)}),Ee.length>1?Ee.join("/"):"/"}function Oe(ue,ve,Ee){let le=typeof ue=="string"?(0,o.cP)(ue):ue,ye=ue===""||le.pathname===""?"/":le.pathname,Be;if(ye==null)Be=Ee;else{let he=ve.length-1;if(ye.startsWith("..")){let Ae=ye.split("/");for(;Ae[0]==="..";)Ae.shift(),he-=1;le.pathname=Ae.join("/")}Be=he>=0?ve[he]:"/"}let oe=ce(le,Be);return ye&&ye!=="/"&&ye.endsWith("/")&&!oe.pathname.endsWith("/")&&(oe.pathname+="/"),oe}function Ne(ue){return ue===""||ue.pathname===""?"/":typeof ue=="string"?(0,o.cP)(ue).pathname:ue.pathname}function _e(ue,ve){if(ve==="/")return ue;if(!ue.toLowerCase().startsWith(ve.toLowerCase()))return null;let Ee=ue.charAt(ve.length);return Ee&&Ee!=="/"?null:ue.slice(ve.length)||"/"}const je=ue=>ue.join("/").replace(/\/\/+/g,"/"),q=ue=>ue.replace(/\/+$/,"").replace(/^\/*/,"/"),re=ue=>!ue||ue==="?"?"":ue.startsWith("?")?ue:"?"+ue,ae=ue=>!ue||ue==="#"?"":ue.startsWith("#")?ue:"#"+ue;function O(ue){L()||d(!1);let{basename:ve,navigator:Ee}=(0,a.useContext)(r),{hash:le,pathname:ye,search:Be}=Re(ue),oe=ye;if(ve!=="/"){let he=Ne(ue),Ae=he!=null&&he.endsWith("/");oe=ye==="/"?ve+(Ae?"/":""):je([ve,ye])}return Ee.createHref({pathname:oe,search:Be,hash:le})}function L(){return(0,a.useContext)(l)!=null}function W(){return L()||d(!1),(0,a.useContext)(l).location}function V(){return useContext(l).navigationType}function G(ue){L()||d(!1);let{pathname:ve}=W();return useMemo(()=>K(ue,ve),[ve,ue])}function I(){L()||d(!1);let{basename:ue,navigator:ve}=(0,a.useContext)(r),{matches:Ee}=(0,a.useContext)(i),{pathname:le}=W(),ye=JSON.stringify(Ee.map(he=>he.pathnameBase)),Be=(0,a.useRef)(!1);return(0,a.useEffect)(()=>{Be.current=!0}),(0,a.useCallback)(function(he,Ae){if(Ae===void 0&&(Ae={}),!Be.current)return;if(typeof he=="number"){ve.go(he);return}let Ue=Oe(he,JSON.parse(ye),le);ue!=="/"&&(Ue.pathname=je([ue,Ue.pathname])),(Ae.replace?ve.replace:ve.push)(Ue,Ae.state)},[ue,ve,ye,le])}const H=(0,a.createContext)(null);function $(){return useContext(H)}function Y(ue){let ve=(0,a.useContext)(i).outlet;return ve&&(0,a.createElement)(H.Provider,{value:ue},ve)}function X(){let{matches:ue}=(0,a.useContext)(i),ve=ue[ue.length-1];return ve?ve.params:{}}function Re(ue){let{matches:ve}=(0,a.useContext)(i),{pathname:Ee}=W(),le=JSON.stringify(ve.map(ye=>ye.pathnameBase));return(0,a.useMemo)(()=>Oe(ue,JSON.parse(le),Ee),[ue,le,Ee])}function Fe(ue,ve){L()||d(!1);let{matches:Ee}=(0,a.useContext)(i),le=Ee[Ee.length-1],ye=le?le.params:{},Be=le?le.pathname:"/",oe=le?le.pathnameBase:"/",he=le&&le.route,Ae=W(),Ue;if(ve){var He;let be=typeof ve=="string"?(0,o.cP)(ve):ve;oe==="/"||(He=be.pathname)!=null&&He.startsWith(oe)||d(!1),Ue=be}else Ue=Ae;let it=Ue.pathname||"/",y=oe==="/"?it:it.slice(oe.length)||"/",Q=m(ue,{pathname:y});return at(Q&&Q.map(be=>Object.assign({},be,{params:Object.assign({},ye,be.params),pathname:je([oe,be.pathname]),pathnameBase:be.pathnameBase==="/"?oe:je([oe,be.pathnameBase])})),Ee)}function at(ue,ve){return ve===void 0&&(ve=[]),ue==null?null:ue.reduceRight((Ee,le,ye)=>(0,a.createElement)(i.Provider,{children:le.route.element!==void 0?le.route.element:Ee,value:{outlet:Ee,matches:ve.concat(ue.slice(0,ye+1))}}),null)}function et(ue){let{basename:ve,children:Ee,initialEntries:le,initialIndex:ye}=ue,Be=useRef();Be.current==null&&(Be.current=createMemoryHistory({initialEntries:le,initialIndex:ye}));let oe=Be.current,[he,Ae]=useState({action:oe.action,location:oe.location});return useLayoutEffect(()=>oe.listen(Ae),[oe]),createElement(fe,{basename:ve,children:Ee,location:he.location,navigationType:he.action,navigator:oe})}function Ke(ue){let{to:ve,replace:Ee,state:le}=ue;L()||d(!1);let ye=I();return(0,a.useEffect)(()=>{ye(ve,{replace:Ee,state:le})}),null}function ot(ue){return Y(ue.context)}function te(ue){d(!1)}function fe(ue){let{basename:ve="/",children:Ee=null,location:le,navigationType:ye=o.aU.Pop,navigator:Be,static:oe=!1}=ue;L()&&d(!1);let he=q(ve),Ae=(0,a.useMemo)(()=>({basename:he,navigator:Be,static:oe}),[he,Be,oe]);typeof le=="string"&&(le=(0,o.cP)(le));let{pathname:Ue="/",search:He="",hash:it="",state:y=null,key:Q="default"}=le,be=(0,a.useMemo)(()=>{let we=_e(Ue,he);return we==null?null:{pathname:we,search:He,hash:it,state:y,key:Q}},[he,Ue,He,it,y,Q]);return be==null?null:(0,a.createElement)(r.Provider,{value:Ae},(0,a.createElement)(l.Provider,{children:Ee,value:{location:be,navigationType:ye}}))}function pe(ue){let{children:ve,location:Ee}=ue;return Fe(me(ve),Ee)}function me(ue){let ve=[];return Children.forEach(ue,Ee=>{if(!isValidElement(Ee))return;if(Ee.type===Fragment){ve.push.apply(ve,me(Ee.props.children));return}Ee.type!==te&&d(!1);let le={caseSensitive:Ee.props.caseSensitive,element:Ee.props.element,index:Ee.props.index,path:Ee.props.path};Ee.props.children&&(le.children=me(Ee.props.children)),ve.push(le)}),ve}function Ie(ue){return at(ue)}},29880:function(s,v,e){"use strict";var o=e(71062),a=Symbol.for("react.element"),r=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,i=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function f(g,h,p){var m,E={},b=null,w=null;p!==void 0&&(b=""+p),h.key!==void 0&&(b=""+h.key),h.ref!==void 0&&(w=h.ref);for(m in h)l.call(h,m)&&!d.hasOwnProperty(m)&&(E[m]=h[m]);if(g&&g.defaultProps)for(m in h=g.defaultProps,h)E[m]===void 0&&(E[m]=h[m]);return{$$typeof:a,type:g,key:b,ref:w,props:E,_owner:i.current}}v.Fragment=r,v.jsx=f,v.jsxs=f},5154:function(s,v){"use strict";var e=Symbol.for("react.element"),o=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),d=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),m=Symbol.iterator;function E(O){return O===null||typeof O!="object"?null:(O=m&&O[m]||O["@@iterator"],typeof O=="function"?O:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,x={};function R(O,L,W){this.props=O,this.context=L,this.refs=x,this.updater=W||b}R.prototype.isReactComponent={},R.prototype.setState=function(O,L){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,L,"setState")},R.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function P(){}P.prototype=R.prototype;function j(O,L,W){this.props=O,this.context=L,this.refs=x,this.updater=W||b}var N=j.prototype=new P;N.constructor=j,w(N,R.prototype),N.isPureReactComponent=!0;var F=Array.isArray,A=Object.prototype.hasOwnProperty,k={current:null},z={key:!0,ref:!0,__self:!0,__source:!0};function K(O,L,W){var V,G={},I=null,H=null;if(L!=null)for(V in L.ref!==void 0&&(H=L.ref),L.key!==void 0&&(I=""+L.key),L)A.call(L,V)&&!z.hasOwnProperty(V)&&(G[V]=L[V]);var $=arguments.length-2;if($===1)G.children=W;else if(1<$){for(var Y=Array($),X=0;X<$;X++)Y[X]=arguments[X+2];G.children=Y}if(O&&O.defaultProps)for(V in $=O.defaultProps,$)G[V]===void 0&&(G[V]=$[V]);return{$$typeof:e,type:O,key:I,ref:H,props:G,_owner:k.current}}function ee(O,L){return{$$typeof:e,type:O.type,key:L,ref:O.ref,props:O.props,_owner:O._owner}}function J(O){return typeof O=="object"&&O!==null&&O.$$typeof===e}function ce(O){var L={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(W){return L[W]})}var Te=/\/+/g;function Oe(O,L){return typeof O=="object"&&O!==null&&O.key!=null?ce(""+O.key):L.toString(36)}function Ne(O,L,W,V,G){var I=typeof O;(I==="undefined"||I==="boolean")&&(O=null);var H=!1;if(O===null)H=!0;else switch(I){case"string":case"number":H=!0;break;case"object":switch(O.$$typeof){case e:case o:H=!0}}if(H)return H=O,G=G(H),O=V===""?"."+Oe(H,0):V,F(G)?(W="",O!=null&&(W=O.replace(Te,"$&/")+"/"),Ne(G,L,W,"",function(X){return X})):G!=null&&(J(G)&&(G=ee(G,W+(!G.key||H&&H.key===G.key?"":(""+G.key).replace(Te,"$&/")+"/")+O)),L.push(G)),1;if(H=0,V=V===""?".":V+":",F(O))for(var $=0;$<O.length;$++){I=O[$];var Y=V+Oe(I,$);H+=Ne(I,L,W,Y,G)}else if(Y=E(O),typeof Y=="function")for(O=Y.call(O),$=0;!(I=O.next()).done;)I=I.value,Y=V+Oe(I,$++),H+=Ne(I,L,W,Y,G);else if(I==="object")throw L=String(O),Error("Objects are not valid as a React child (found: "+(L==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":L)+"). If you meant to render a collection of children, use an array instead.");return H}function _e(O,L,W){if(O==null)return O;var V=[],G=0;return Ne(O,V,"","",function(I){return L.call(W,I,G++)}),V}function je(O){if(O._status===-1){var L=O._result;L=L(),L.then(function(W){(O._status===0||O._status===-1)&&(O._status=1,O._result=W)},function(W){(O._status===0||O._status===-1)&&(O._status=2,O._result=W)}),O._status===-1&&(O._status=0,O._result=L)}if(O._status===1)return O._result.default;throw O._result}var q={current:null},re={transition:null},ae={ReactCurrentDispatcher:q,ReactCurrentBatchConfig:re,ReactCurrentOwner:k};v.Children={map:_e,forEach:function(O,L,W){_e(O,function(){L.apply(this,arguments)},W)},count:function(O){var L=0;return _e(O,function(){L++}),L},toArray:function(O){return _e(O,function(L){return L})||[]},only:function(O){if(!J(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},v.Component=R,v.Fragment=a,v.Profiler=l,v.PureComponent=j,v.StrictMode=r,v.Suspense=g,v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ae,v.cloneElement=function(O,L,W){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var V=w({},O.props),G=O.key,I=O.ref,H=O._owner;if(L!=null){if(L.ref!==void 0&&(I=L.ref,H=k.current),L.key!==void 0&&(G=""+L.key),O.type&&O.type.defaultProps)var $=O.type.defaultProps;for(Y in L)A.call(L,Y)&&!z.hasOwnProperty(Y)&&(V[Y]=L[Y]===void 0&&$!==void 0?$[Y]:L[Y])}var Y=arguments.length-2;if(Y===1)V.children=W;else if(1<Y){$=Array(Y);for(var X=0;X<Y;X++)$[X]=arguments[X+2];V.children=$}return{$$typeof:e,type:O.type,key:G,ref:I,props:V,_owner:H}},v.createContext=function(O){return O={$$typeof:d,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:i,_context:O},O.Consumer=O},v.createElement=K,v.createFactory=function(O){var L=K.bind(null,O);return L.type=O,L},v.createRef=function(){return{current:null}},v.forwardRef=function(O){return{$$typeof:f,render:O}},v.isValidElement=J,v.lazy=function(O){return{$$typeof:p,_payload:{_status:-1,_result:O},_init:je}},v.memo=function(O,L){return{$$typeof:h,type:O,compare:L===void 0?null:L}},v.startTransition=function(O){var L=re.transition;re.transition={};try{O()}finally{re.transition=L}},v.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},v.useCallback=function(O,L){return q.current.useCallback(O,L)},v.useContext=function(O){return q.current.useContext(O)},v.useDebugValue=function(){},v.useDeferredValue=function(O){return q.current.useDeferredValue(O)},v.useEffect=function(O,L){return q.current.useEffect(O,L)},v.useId=function(){return q.current.useId()},v.useImperativeHandle=function(O,L,W){return q.current.useImperativeHandle(O,L,W)},v.useInsertionEffect=function(O,L){return q.current.useInsertionEffect(O,L)},v.useLayoutEffect=function(O,L){return q.current.useLayoutEffect(O,L)},v.useMemo=function(O,L){return q.current.useMemo(O,L)},v.useReducer=function(O,L,W){return q.current.useReducer(O,L,W)},v.useRef=function(O){return q.current.useRef(O)},v.useState=function(O){return q.current.useState(O)},v.useSyncExternalStore=function(O,L,W){return q.current.useSyncExternalStore(O,L,W)},v.useTransition=function(){return q.current.useTransition()},v.version="18.2.0"},71062:function(s,v,e){"use strict";s.exports=e(5154)},99678:function(s,v,e){"use strict";s.exports=e(29880)},58246:function(s){var v=function(e){"use strict";var o=Object.prototype,a=o.hasOwnProperty,r=Object.defineProperty||function(q,re,ae){q[re]=ae.value},l,i=typeof Symbol=="function"?Symbol:{},d=i.iterator||"@@iterator",f=i.asyncIterator||"@@asyncIterator",g=i.toStringTag||"@@toStringTag";function h(q,re,ae){return Object.defineProperty(q,re,{value:ae,enumerable:!0,configurable:!0,writable:!0}),q[re]}try{h({},"")}catch(q){h=function(re,ae,O){return re[ae]=O}}function p(q,re,ae,O){var L=re&&re.prototype instanceof P?re:P,W=Object.create(L.prototype),V=new Ne(O||[]);return r(W,"_invoke",{value:J(q,ae,V)}),W}e.wrap=p;function m(q,re,ae){try{return{type:"normal",arg:q.call(re,ae)}}catch(O){return{type:"throw",arg:O}}}var E="suspendedStart",b="suspendedYield",w="executing",x="completed",R={};function P(){}function j(){}function N(){}var F={};h(F,d,function(){return this});var A=Object.getPrototypeOf,k=A&&A(A(_e([])));k&&k!==o&&a.call(k,d)&&(F=k);var z=N.prototype=P.prototype=Object.create(F);j.prototype=N,r(z,"constructor",{value:N,configurable:!0}),r(N,"constructor",{value:j,configurable:!0}),j.displayName=h(N,g,"GeneratorFunction");function K(q){["next","throw","return"].forEach(function(re){h(q,re,function(ae){return this._invoke(re,ae)})})}e.isGeneratorFunction=function(q){var re=typeof q=="function"&&q.constructor;return re?re===j||(re.displayName||re.name)==="GeneratorFunction":!1},e.mark=function(q){return Object.setPrototypeOf?Object.setPrototypeOf(q,N):(q.__proto__=N,h(q,g,"GeneratorFunction")),q.prototype=Object.create(z),q},e.awrap=function(q){return{__await:q}};function ee(q,re){function ae(W,V,G,I){var H=m(q[W],q,V);if(H.type==="throw")I(H.arg);else{var $=H.arg,Y=$.value;return Y&&typeof Y=="object"&&a.call(Y,"__await")?re.resolve(Y.__await).then(function(X){ae("next",X,G,I)},function(X){ae("throw",X,G,I)}):re.resolve(Y).then(function(X){$.value=X,G($)},function(X){return ae("throw",X,G,I)})}}var O;function L(W,V){function G(){return new re(function(I,H){ae(W,V,I,H)})}return O=O?O.then(G,G):G()}r(this,"_invoke",{value:L})}K(ee.prototype),h(ee.prototype,f,function(){return this}),e.AsyncIterator=ee,e.async=function(q,re,ae,O,L){L===void 0&&(L=Promise);var W=new ee(p(q,re,ae,O),L);return e.isGeneratorFunction(re)?W:W.next().then(function(V){return V.done?V.value:W.next()})};function J(q,re,ae){var O=E;return function(W,V){if(O===w)throw new Error("Generator is already running");if(O===x){if(W==="throw")throw V;return je()}for(ae.method=W,ae.arg=V;;){var G=ae.delegate;if(G){var I=ce(G,ae);if(I){if(I===R)continue;return I}}if(ae.method==="next")ae.sent=ae._sent=ae.arg;else if(ae.method==="throw"){if(O===E)throw O=x,ae.arg;ae.dispatchException(ae.arg)}else ae.method==="return"&&ae.abrupt("return",ae.arg);O=w;var H=m(q,re,ae);if(H.type==="normal"){if(O=ae.done?x:b,H.arg===R)continue;return{value:H.arg,done:ae.done}}else H.type==="throw"&&(O=x,ae.method="throw",ae.arg=H.arg)}}}function ce(q,re){var ae=re.method,O=q.iterator[ae];if(O===l)return re.delegate=null,ae==="throw"&&q.iterator.return&&(re.method="return",re.arg=l,ce(q,re),re.method==="throw")||ae!=="return"&&(re.method="throw",re.arg=new TypeError("The iterator does not provide a '"+ae+"' method")),R;var L=m(O,q.iterator,re.arg);if(L.type==="throw")return re.method="throw",re.arg=L.arg,re.delegate=null,R;var W=L.arg;if(!W)return re.method="throw",re.arg=new TypeError("iterator result is not an object"),re.delegate=null,R;if(W.done)re[q.resultName]=W.value,re.next=q.nextLoc,re.method!=="return"&&(re.method="next",re.arg=l);else return W;return re.delegate=null,R}K(z),h(z,g,"Generator"),h(z,d,function(){return this}),h(z,"toString",function(){return"[object Generator]"});function Te(q){var re={tryLoc:q[0]};1 in q&&(re.catchLoc=q[1]),2 in q&&(re.finallyLoc=q[2],re.afterLoc=q[3]),this.tryEntries.push(re)}function Oe(q){var re=q.completion||{};re.type="normal",delete re.arg,q.completion=re}function Ne(q){this.tryEntries=[{tryLoc:"root"}],q.forEach(Te,this),this.reset(!0)}e.keys=function(q){var re=Object(q),ae=[];for(var O in re)ae.push(O);return ae.reverse(),function L(){for(;ae.length;){var W=ae.pop();if(W in re)return L.value=W,L.done=!1,L}return L.done=!0,L}};function _e(q){if(q){var re=q[d];if(re)return re.call(q);if(typeof q.next=="function")return q;if(!isNaN(q.length)){var ae=-1,O=function L(){for(;++ae<q.length;)if(a.call(q,ae))return L.value=q[ae],L.done=!1,L;return L.value=l,L.done=!0,L};return O.next=O}}return{next:je}}e.values=_e;function je(){return{value:l,done:!0}}return Ne.prototype={constructor:Ne,reset:function(q){if(this.prev=0,this.next=0,this.sent=this._sent=l,this.done=!1,this.delegate=null,this.method="next",this.arg=l,this.tryEntries.forEach(Oe),!q)for(var re in this)re.charAt(0)==="t"&&a.call(this,re)&&!isNaN(+re.slice(1))&&(this[re]=l)},stop:function(){this.done=!0;var q=this.tryEntries[0],re=q.completion;if(re.type==="throw")throw re.arg;return this.rval},dispatchException:function(q){if(this.done)throw q;var re=this;function ae(I,H){return W.type="throw",W.arg=q,re.next=I,H&&(re.method="next",re.arg=l),!!H}for(var O=this.tryEntries.length-1;O>=0;--O){var L=this.tryEntries[O],W=L.completion;if(L.tryLoc==="root")return ae("end");if(L.tryLoc<=this.prev){var V=a.call(L,"catchLoc"),G=a.call(L,"finallyLoc");if(V&&G){if(this.prev<L.catchLoc)return ae(L.catchLoc,!0);if(this.prev<L.finallyLoc)return ae(L.finallyLoc)}else if(V){if(this.prev<L.catchLoc)return ae(L.catchLoc,!0)}else if(G){if(this.prev<L.finallyLoc)return ae(L.finallyLoc)}else throw new Error("try statement without catch or finally")}}},abrupt:function(q,re){for(var ae=this.tryEntries.length-1;ae>=0;--ae){var O=this.tryEntries[ae];if(O.tryLoc<=this.prev&&a.call(O,"finallyLoc")&&this.prev<O.finallyLoc){var L=O;break}}L&&(q==="break"||q==="continue")&&L.tryLoc<=re&&re<=L.finallyLoc&&(L=null);var W=L?L.completion:{};return W.type=q,W.arg=re,L?(this.method="next",this.next=L.finallyLoc,R):this.complete(W)},complete:function(q,re){if(q.type==="throw")throw q.arg;return q.type==="break"||q.type==="continue"?this.next=q.arg:q.type==="return"?(this.rval=this.arg=q.arg,this.method="return",this.next="end"):q.type==="normal"&&re&&(this.next=re),R},finish:function(q){for(var re=this.tryEntries.length-1;re>=0;--re){var ae=this.tryEntries[re];if(ae.finallyLoc===q)return this.complete(ae.completion,ae.afterLoc),Oe(ae),R}},catch:function(q){for(var re=this.tryEntries.length-1;re>=0;--re){var ae=this.tryEntries[re];if(ae.tryLoc===q){var O=ae.completion;if(O.type==="throw"){var L=O.arg;Oe(ae)}return L}}throw new Error("illegal catch attempt")},delegateYield:function(q,re,ae){return this.delegate={iterator:_e(q),resultName:re,nextLoc:ae},this.method==="next"&&(this.arg=l),R}},e}(s.exports);try{regeneratorRuntime=v}catch(e){typeof globalThis=="object"?globalThis.regeneratorRuntime=v:Function("r","regeneratorRuntime = r")(v)}},67483:function(s,v){"use strict";function e(q,re){var ae=q.length;q.push(re);e:for(;0<ae;){var O=ae-1>>>1,L=q[O];if(0<r(L,re))q[O]=re,q[ae]=L,ae=O;else break e}}function o(q){return q.length===0?null:q[0]}function a(q){if(q.length===0)return null;var re=q[0],ae=q.pop();if(ae!==re){q[0]=ae;e:for(var O=0,L=q.length,W=L>>>1;O<W;){var V=2*(O+1)-1,G=q[V],I=V+1,H=q[I];if(0>r(G,ae))I<L&&0>r(H,G)?(q[O]=H,q[I]=ae,O=I):(q[O]=G,q[V]=ae,O=V);else if(I<L&&0>r(H,ae))q[O]=H,q[I]=ae,O=I;else break e}}return re}function r(q,re){var ae=q.sortIndex-re.sortIndex;return ae!==0?ae:q.id-re.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;v.unstable_now=function(){return l.now()}}else{var i=Date,d=i.now();v.unstable_now=function(){return i.now()-d}}var f=[],g=[],h=1,p=null,m=3,E=!1,b=!1,w=!1,x=typeof setTimeout=="function"?setTimeout:null,R=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function j(q){for(var re=o(g);re!==null;){if(re.callback===null)a(g);else if(re.startTime<=q)a(g),re.sortIndex=re.expirationTime,e(f,re);else break;re=o(g)}}function N(q){if(w=!1,j(q),!b)if(o(f)!==null)b=!0,_e(F);else{var re=o(g);re!==null&&je(N,re.startTime-q)}}function F(q,re){b=!1,w&&(w=!1,R(z),z=-1),E=!0;var ae=m;try{for(j(re),p=o(f);p!==null&&(!(p.expirationTime>re)||q&&!J());){var O=p.callback;if(typeof O=="function"){p.callback=null,m=p.priorityLevel;var L=O(p.expirationTime<=re);re=v.unstable_now(),typeof L=="function"?p.callback=L:p===o(f)&&a(f),j(re)}else a(f);p=o(f)}if(p!==null)var W=!0;else{var V=o(g);V!==null&&je(N,V.startTime-re),W=!1}return W}finally{p=null,m=ae,E=!1}}var A=!1,k=null,z=-1,K=5,ee=-1;function J(){return!(v.unstable_now()-ee<K)}function ce(){if(k!==null){var q=v.unstable_now();ee=q;var re=!0;try{re=k(!0,q)}finally{re?Te():(A=!1,k=null)}}else A=!1}var Te;if(typeof P=="function")Te=function(){P(ce)};else if(typeof MessageChannel!="undefined"){var Oe=new MessageChannel,Ne=Oe.port2;Oe.port1.onmessage=ce,Te=function(){Ne.postMessage(null)}}else Te=function(){x(ce,0)};function _e(q){k=q,A||(A=!0,Te())}function je(q,re){z=x(function(){q(v.unstable_now())},re)}v.unstable_IdlePriority=5,v.unstable_ImmediatePriority=1,v.unstable_LowPriority=4,v.unstable_NormalPriority=3,v.unstable_Profiling=null,v.unstable_UserBlockingPriority=2,v.unstable_cancelCallback=function(q){q.callback=null},v.unstable_continueExecution=function(){b||E||(b=!0,_e(F))},v.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<q?Math.floor(1e3/q):5},v.unstable_getCurrentPriorityLevel=function(){return m},v.unstable_getFirstCallbackNode=function(){return o(f)},v.unstable_next=function(q){switch(m){case 1:case 2:case 3:var re=3;break;default:re=m}var ae=m;m=re;try{return q()}finally{m=ae}},v.unstable_pauseExecution=function(){},v.unstable_requestPaint=function(){},v.unstable_runWithPriority=function(q,re){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var ae=m;m=q;try{return re()}finally{m=ae}},v.unstable_scheduleCallback=function(q,re,ae){var O=v.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?O+ae:O):ae=O,q){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=ae+L,q={id:h++,callback:re,priorityLevel:q,startTime:ae,expirationTime:L,sortIndex:-1},ae>O?(q.sortIndex=ae,e(g,q),o(f)===null&&q===o(g)&&(w?(R(z),z=-1):w=!0,je(N,ae-O))):(q.sortIndex=L,e(f,q),b||E||(b=!0,_e(F))),q},v.unstable_shouldYield=J,v.unstable_wrapCallback=function(q){var re=m;return function(){var ae=m;m=re;try{return q.apply(this,arguments)}finally{m=ae}}}},90904:function(s,v,e){"use strict";s.exports=e(67483)},19747:function(s){s.exports=function(e,o,a,r){var l=a?a.call(r,e,o):void 0;if(l!==void 0)return!!l;if(e===o)return!0;if(typeof e!="object"||!e||typeof o!="object"||!o)return!1;var i=Object.keys(e),d=Object.keys(o);if(i.length!==d.length)return!1;for(var f=Object.prototype.hasOwnProperty.bind(o),g=0;g<i.length;g++){var h=i[g];if(!f(h))return!1;var p=e[h],m=o[h];if(l=a?a.call(r,p,m,h):void 0,l===!1||l===void 0&&p!==m)return!1}return!0}},98040:function(s){s.exports=function(){var v=document.getSelection();if(!v.rangeCount)return function(){};for(var e=document.activeElement,o=[],a=0;a<v.rangeCount;a++)o.push(v.getRangeAt(a));switch(e.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":e.blur();break;default:e=null;break}return v.removeAllRanges(),function(){v.type==="Caret"&&v.removeAllRanges(),v.rangeCount||o.forEach(function(r){v.addRange(r)}),e&&e.focus()}}},67501:function(s){function v(e,o){(o==null||o>e.length)&&(o=e.length);for(var a=0,r=new Array(o);a<o;a++)r[a]=e[a];return r}s.exports=v,s.exports.__esModule=!0,s.exports.default=s.exports},63618:function(s){function v(e){if(Array.isArray(e))return e}s.exports=v,s.exports.__esModule=!0,s.exports.default=s.exports},39343:function(s){function v(o,a,r,l,i,d,f){try{var g=o[d](f),h=g.value}catch(p){r(p);return}g.done?a(h):Promise.resolve(h).then(l,i)}function e(o){return function(){var a=this,r=arguments;return new Promise(function(l,i){var d=o.apply(a,r);function f(h){v(d,l,i,f,g,"next",h)}function g(h){v(d,l,i,f,g,"throw",h)}f(void 0)})}}s.exports=e,s.exports.__esModule=!0,s.exports.default=s.exports},94312:function(s){function v(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}s.exports=v,s.exports.__esModule=!0,s.exports.default=s.exports},24127:function(s,v,e){var o=e(1700);function a(l,i){for(var d=0;d<i.length;d++){var f=i[d];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(l,o(f.key),f)}}function r(l,i,d){return i&&a(l.prototype,i),d&&a(l,d),Object.defineProperty(l,"prototype",{writable:!1}),l}s.exports=r,s.exports.__esModule=!0,s.exports.default=s.exports},22060:function(s,v,e){var o=e(1700);function a(r,l,i){return l=o(l),l in r?Object.defineProperty(r,l,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[l]=i,r}s.exports=a,s.exports.__esModule=!0,s.exports.default=s.exports},95743:function(s){function v(e,o){var a=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(a!=null){var r,l,i,d,f=[],g=!0,h=!1;try{if(i=(a=a.call(e)).next,o===0){if(Object(a)!==a)return;g=!1}else for(;!(g=(r=i.call(a)).done)&&(f.push(r.value),f.length!==o);g=!0);}catch(p){h=!0,l=p}finally{try{if(!g&&a.return!=null&&(d=a.return(),Object(d)!==d))return}finally{if(h)throw l}}return f}}s.exports=v,s.exports.__esModule=!0,s.exports.default=s.exports},60727:function(s){function v(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}s.exports=v,s.exports.__esModule=!0,s.exports.default=s.exports},26801:function(s,v,e){var o=e(22060);function a(l,i){var d=Object.keys(l);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(l);i&&(f=f.filter(function(g){return Object.getOwnPropertyDescriptor(l,g).enumerable})),d.push.apply(d,f)}return d}function r(l){for(var i=1;i<arguments.length;i++){var d=arguments[i]!=null?arguments[i]:{};i%2?a(Object(d),!0).forEach(function(f){o(l,f,d[f])}):Object.getOwnPropertyDescriptors?Object.defineProperties(l,Object.getOwnPropertyDescriptors(d)):a(Object(d)).forEach(function(f){Object.defineProperty(l,f,Object.getOwnPropertyDescriptor(d,f))})}return l}s.exports=r,s.exports.__esModule=!0,s.exports.default=s.exports},10574:function(s,v,e){var o=e(5773).default;function a(){"use strict";s.exports=a=function(){return l},s.exports.__esModule=!0,s.exports.default=s.exports;var r,l={},i=Object.prototype,d=i.hasOwnProperty,f=Object.defineProperty||function(ae,O,L){ae[O]=L.value},g=typeof Symbol=="function"?Symbol:{},h=g.iterator||"@@iterator",p=g.asyncIterator||"@@asyncIterator",m=g.toStringTag||"@@toStringTag";function E(ae,O,L){return Object.defineProperty(ae,O,{value:L,enumerable:!0,configurable:!0,writable:!0}),ae[O]}try{E({},"")}catch(ae){E=function(L,W,V){return L[W]=V}}function b(ae,O,L,W){var V=O&&O.prototype instanceof F?O:F,G=Object.create(V.prototype),I=new q(W||[]);return f(G,"_invoke",{value:Oe(ae,L,I)}),G}function w(ae,O,L){try{return{type:"normal",arg:ae.call(O,L)}}catch(W){return{type:"throw",arg:W}}}l.wrap=b;var x="suspendedStart",R="suspendedYield",P="executing",j="completed",N={};function F(){}function A(){}function k(){}var z={};E(z,h,function(){return this});var K=Object.getPrototypeOf,ee=K&&K(K(re([])));ee&&ee!==i&&d.call(ee,h)&&(z=ee);var J=k.prototype=F.prototype=Object.create(z);function ce(ae){["next","throw","return"].forEach(function(O){E(ae,O,function(L){return this._invoke(O,L)})})}function Te(ae,O){function L(V,G,I,H){var $=w(ae[V],ae,G);if($.type!=="throw"){var Y=$.arg,X=Y.value;return X&&o(X)=="object"&&d.call(X,"__await")?O.resolve(X.__await).then(function(Re){L("next",Re,I,H)},function(Re){L("throw",Re,I,H)}):O.resolve(X).then(function(Re){Y.value=Re,I(Y)},function(Re){return L("throw",Re,I,H)})}H($.arg)}var W;f(this,"_invoke",{value:function(G,I){function H(){return new O(function($,Y){L(G,I,$,Y)})}return W=W?W.then(H,H):H()}})}function Oe(ae,O,L){var W=x;return function(V,G){if(W===P)throw new Error("Generator is already running");if(W===j){if(V==="throw")throw G;return{value:r,done:!0}}for(L.method=V,L.arg=G;;){var I=L.delegate;if(I){var H=Ne(I,L);if(H){if(H===N)continue;return H}}if(L.method==="next")L.sent=L._sent=L.arg;else if(L.method==="throw"){if(W===x)throw W=j,L.arg;L.dispatchException(L.arg)}else L.method==="return"&&L.abrupt("return",L.arg);W=P;var $=w(ae,O,L);if($.type==="normal"){if(W=L.done?j:R,$.arg===N)continue;return{value:$.arg,done:L.done}}$.type==="throw"&&(W=j,L.method="throw",L.arg=$.arg)}}}function Ne(ae,O){var L=O.method,W=ae.iterator[L];if(W===r)return O.delegate=null,L==="throw"&&ae.iterator.return&&(O.method="return",O.arg=r,Ne(ae,O),O.method==="throw")||L!=="return"&&(O.method="throw",O.arg=new TypeError("The iterator does not provide a '"+L+"' method")),N;var V=w(W,ae.iterator,O.arg);if(V.type==="throw")return O.method="throw",O.arg=V.arg,O.delegate=null,N;var G=V.arg;return G?G.done?(O[ae.resultName]=G.value,O.next=ae.nextLoc,O.method!=="return"&&(O.method="next",O.arg=r),O.delegate=null,N):G:(O.method="throw",O.arg=new TypeError("iterator result is not an object"),O.delegate=null,N)}function _e(ae){var O={tryLoc:ae[0]};1 in ae&&(O.catchLoc=ae[1]),2 in ae&&(O.finallyLoc=ae[2],O.afterLoc=ae[3]),this.tryEntries.push(O)}function je(ae){var O=ae.completion||{};O.type="normal",delete O.arg,ae.completion=O}function q(ae){this.tryEntries=[{tryLoc:"root"}],ae.forEach(_e,this),this.reset(!0)}function re(ae){if(ae||ae===""){var O=ae[h];if(O)return O.call(ae);if(typeof ae.next=="function")return ae;if(!isNaN(ae.length)){var L=-1,W=function V(){for(;++L<ae.length;)if(d.call(ae,L))return V.value=ae[L],V.done=!1,V;return V.value=r,V.done=!0,V};return W.next=W}}throw new TypeError(o(ae)+" is not iterable")}return A.prototype=k,f(J,"constructor",{value:k,configurable:!0}),f(k,"constructor",{value:A,configurable:!0}),A.displayName=E(k,m,"GeneratorFunction"),l.isGeneratorFunction=function(ae){var O=typeof ae=="function"&&ae.constructor;return!!O&&(O===A||(O.displayName||O.name)==="GeneratorFunction")},l.mark=function(ae){return Object.setPrototypeOf?Object.setPrototypeOf(ae,k):(ae.__proto__=k,E(ae,m,"GeneratorFunction")),ae.prototype=Object.create(J),ae},l.awrap=function(ae){return{__await:ae}},ce(Te.prototype),E(Te.prototype,p,function(){return this}),l.AsyncIterator=Te,l.async=function(ae,O,L,W,V){V===void 0&&(V=Promise);var G=new Te(b(ae,O,L,W),V);return l.isGeneratorFunction(O)?G:G.next().then(function(I){return I.done?I.value:G.next()})},ce(J),E(J,m,"Generator"),E(J,h,function(){return this}),E(J,"toString",function(){return"[object Generator]"}),l.keys=function(ae){var O=Object(ae),L=[];for(var W in O)L.push(W);return L.reverse(),function V(){for(;L.length;){var G=L.pop();if(G in O)return V.value=G,V.done=!1,V}return V.done=!0,V}},l.values=re,q.prototype={constructor:q,reset:function(O){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(je),!O)for(var L in this)L.charAt(0)==="t"&&d.call(this,L)&&!isNaN(+L.slice(1))&&(this[L]=r)},stop:function(){this.done=!0;var O=this.tryEntries[0].completion;if(O.type==="throw")throw O.arg;return this.rval},dispatchException:function(O){if(this.done)throw O;var L=this;function W(Y,X){return I.type="throw",I.arg=O,L.next=Y,X&&(L.method="next",L.arg=r),!!X}for(var V=this.tryEntries.length-1;V>=0;--V){var G=this.tryEntries[V],I=G.completion;if(G.tryLoc==="root")return W("end");if(G.tryLoc<=this.prev){var H=d.call(G,"catchLoc"),$=d.call(G,"finallyLoc");if(H&&$){if(this.prev<G.catchLoc)return W(G.catchLoc,!0);if(this.prev<G.finallyLoc)return W(G.finallyLoc)}else if(H){if(this.prev<G.catchLoc)return W(G.catchLoc,!0)}else{if(!$)throw new Error("try statement without catch or finally");if(this.prev<G.finallyLoc)return W(G.finallyLoc)}}}},abrupt:function(O,L){for(var W=this.tryEntries.length-1;W>=0;--W){var V=this.tryEntries[W];if(V.tryLoc<=this.prev&&d.call(V,"finallyLoc")&&this.prev<V.finallyLoc){var G=V;break}}G&&(O==="break"||O==="continue")&&G.tryLoc<=L&&L<=G.finallyLoc&&(G=null);var I=G?G.completion:{};return I.type=O,I.arg=L,G?(this.method="next",this.next=G.finallyLoc,N):this.complete(I)},complete:function(O,L){if(O.type==="throw")throw O.arg;return O.type==="break"||O.type==="continue"?this.next=O.arg:O.type==="return"?(this.rval=this.arg=O.arg,this.method="return",this.next="end"):O.type==="normal"&&L&&(this.next=L),N},finish:function(O){for(var L=this.tryEntries.length-1;L>=0;--L){var W=this.tryEntries[L];if(W.finallyLoc===O)return this.complete(W.completion,W.afterLoc),je(W),N}},catch:function(O){for(var L=this.tryEntries.length-1;L>=0;--L){var W=this.tryEntries[L];if(W.tryLoc===O){var V=W.completion;if(V.type==="throw"){var G=V.arg;je(W)}return G}}throw new Error("illegal catch attempt")},delegateYield:function(O,L,W){return this.delegate={iterator:re(O),resultName:L,nextLoc:W},this.method==="next"&&(this.arg=r),N}},l}s.exports=a,s.exports.__esModule=!0,s.exports.default=s.exports},11006:function(s,v,e){var o=e(63618),a=e(95743),r=e(35962),l=e(60727);function i(d,f){return o(d)||a(d,f)||r(d,f)||l()}s.exports=i,s.exports.__esModule=!0,s.exports.default=s.exports},76897:function(s,v,e){var o=e(5773).default;function a(r,l){if(o(r)!=="object"||r===null)return r;var i=r[Symbol.toPrimitive];if(i!==void 0){var d=i.call(r,l||"default");if(o(d)!=="object")return d;throw new TypeError("@@toPrimitive must return a primitive value.")}return(l==="string"?String:Number)(r)}s.exports=a,s.exports.__esModule=!0,s.exports.default=s.exports},1700:function(s,v,e){var o=e(5773).default,a=e(76897);function r(l){var i=a(l,"string");return o(i)==="symbol"?i:String(i)}s.exports=r,s.exports.__esModule=!0,s.exports.default=s.exports},5773:function(s){function v(e){"@babel/helpers - typeof";return s.exports=v=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},s.exports.__esModule=!0,s.exports.default=s.exports,v(e)}s.exports=v,s.exports.__esModule=!0,s.exports.default=s.exports},35962:function(s,v,e){var o=e(67501);function a(r,l){if(r){if(typeof r=="string")return o(r,l);var i=Object.prototype.toString.call(r).slice(8,-1);if(i==="Object"&&r.constructor&&(i=r.constructor.name),i==="Map"||i==="Set")return Array.from(r);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return o(r,l)}}s.exports=a,s.exports.__esModule=!0,s.exports.default=s.exports},72302:function(s,v,e){"use strict";e.d(v,{Z:function(){return o}});function o(a,r){(r==null||r>a.length)&&(r=a.length);for(var l=0,i=new Array(r);l<r;l++)i[l]=a[l];return i}},56712:function(s,v,e){"use strict";e.d(v,{Z:function(){return o}});function o(a){if(Array.isArray(a))return a}},9967:function(s,v,e){"use strict";e.d(v,{Z:function(){return o}});function o(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}},97100:function(s,v,e){"use strict";e.d(v,{Z:function(){return a}});function o(r,l,i,d,f,g,h){try{var p=r[g](h),m=p.value}catch(E){i(E);return}p.done?l(m):Promise.resolve(m).then(d,f)}function a(r){return function(){var l=this,i=arguments;return new Promise(function(d,f){var g=r.apply(l,i);function h(m){o(g,d,f,h,p,"next",m)}function p(m){o(g,d,f,h,p,"throw",m)}h(void 0)})}}},74809:function(s,v,e){"use strict";e.d(v,{Z:function(){return o}});function o(a,r){if(!(a instanceof r))throw new TypeError("Cannot call a class as a function")}},57338:function(s,v,e){"use strict";e.d(v,{Z:function(){return r}});var o=e(43155);function a(l,i){for(var d=0;d<i.length;d++){var f=i[d];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(l,(0,o.Z)(f.key),f)}}function r(l,i,d){return i&&a(l.prototype,i),d&&a(l,d),Object.defineProperty(l,"prototype",{writable:!1}),l}},12826:function(s,v,e){"use strict";e.d(v,{Z:function(){return l}});var o=e(4014),a=e(25807),r=e(69984);function l(i){var d=(0,a.Z)();return function(){var g=(0,o.Z)(i),h;if(d){var p=(0,o.Z)(this).constructor;h=Reflect.construct(g,arguments,p)}else h=g.apply(this,arguments);return(0,r.Z)(this,h)}}},80268:function(s,v,e){"use strict";e.d(v,{Z:function(){return a}});var o=e(43155);function a(r,l,i){return l=(0,o.Z)(l),l in r?Object.defineProperty(r,l,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[l]=i,r}},26508:function(s,v,e){"use strict";e.d(v,{Z:function(){return o}});function o(){return o=Object.assign?Object.assign.bind():function(a){for(var r=1;r<arguments.length;r++){var l=arguments[r];for(var i in l)Object.prototype.hasOwnProperty.call(l,i)&&(a[i]=l[i])}return a},o.apply(this,arguments)}},4014:function(s,v,e){"use strict";e.d(v,{Z:function(){return o}});function o(a){return o=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(l){return l.__proto__||Object.getPrototypeOf(l)},o(a)}},29161:function(s,v,e){"use strict";e.d(v,{Z:function(){return a}});var o=e(7953);function a(r,l){if(typeof l!="function"&&l!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(l&&l.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),Object.defineProperty(r,"prototype",{writable:!1}),l&&(0,o.Z)(r,l)}},25807:function(s,v,e){"use strict";e.d(v,{Z:function(){return o}});function o(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(a){return!1}}},60960:function(s,v,e){"use strict";e.d(v,{Z:function(){return o}});function o(a){if(typeof Symbol!="undefined"&&a[Symbol.iterator]!=null||a["@@iterator"]!=null)return Array.from(a)}},51054:function(s,v,e){"use strict";e.d(v,{Z:function(){return o}});function o(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}},74710:function(s,v,e){"use strict";e.d(v,{Z:function(){return r}});var o=e(80268);function a(l,i){var d=Object.keys(l);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(l);i&&(f=f.filter(function(g){return Object.getOwnPropertyDescriptor(l,g).enumerable})),d.push.apply(d,f)}return d}function r(l){for(var i=1;i<arguments.length;i++){var d=arguments[i]!=null?arguments[i]:{};i%2?a(Object(d),!0).forEach(function(f){(0,o.Z)(l,f,d[f])}):Object.getOwnPropertyDescriptors?Object.defineProperties(l,Object.getOwnPropertyDescriptors(d)):a(Object(d)).forEach(function(f){Object.defineProperty(l,f,Object.getOwnPropertyDescriptor(d,f))})}return l}},52528:function(s,v,e){"use strict";e.d(v,{Z:function(){return a}});function o(r,l){if(r==null)return{};var i={},d=Object.keys(r),f,g;for(g=0;g<d.length;g++)f=d[g],!(l.indexOf(f)>=0)&&(i[f]=r[f]);return i}function a(r,l){if(r==null)return{};var i=o(r,l),d,f;if(Object.getOwnPropertySymbols){var g=Object.getOwnPropertySymbols(r);for(f=0;f<g.length;f++)d=g[f],!(l.indexOf(d)>=0)&&Object.prototype.propertyIsEnumerable.call(r,d)&&(i[d]=r[d])}return i}},69984:function(s,v,e){"use strict";e.d(v,{Z:function(){return r}});var o=e(91002),a=e(9967);function r(l,i){if(i&&((0,o.Z)(i)==="object"||typeof i=="function"))return i;if(i!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return(0,a.Z)(l)}},7953:function(s,v,e){"use strict";e.d(v,{Z:function(){return o}});function o(a,r){return o=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,d){return i.__proto__=d,i},o(a,r)}},39718:function(s,v,e){"use strict";e.d(v,{Z:function(){return i}});var o=e(56712);function a(d,f){var g=d==null?null:typeof Symbol!="undefined"&&d[Symbol.iterator]||d["@@iterator"];if(g!=null){var h,p,m,E,b=[],w=!0,x=!1;try{if(m=(g=g.call(d)).next,f===0){if(Object(g)!==g)return;w=!1}else for(;!(w=(h=m.call(g)).done)&&(b.push(h.value),b.length!==f);w=!0);}catch(R){x=!0,p=R}finally{try{if(!w&&g.return!=null&&(E=g.return(),Object(E)!==E))return}finally{if(x)throw p}}return b}}var r=e(91710),l=e(51054);function i(d,f){return(0,o.Z)(d)||a(d,f)||(0,r.Z)(d,f)||(0,l.Z)()}},42371:function(s,v,e){"use strict";e.d(v,{Z:function(){return d}});var o=e(72302);function a(f){if(Array.isArray(f))return(0,o.Z)(f)}var r=e(60960),l=e(91710);function i(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function d(f){return a(f)||(0,r.Z)(f)||(0,l.Z)(f)||i()}},43155:function(s,v,e){"use strict";e.d(v,{Z:function(){return r}});var o=e(91002);function a(l,i){if((0,o.Z)(l)!=="object"||l===null)return l;var d=l[Symbol.toPrimitive];if(d!==void 0){var f=d.call(l,i||"default");if((0,o.Z)(f)!=="object")return f;throw new TypeError("@@toPrimitive must return a primitive value.")}return(i==="string"?String:Number)(l)}function r(l){var i=a(l,"string");return(0,o.Z)(i)==="symbol"?i:String(i)}},91002:function(s,v,e){"use strict";e.d(v,{Z:function(){return o}});function o(a){"@babel/helpers - typeof";return o=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},o(a)}},91710:function(s,v,e){"use strict";e.d(v,{Z:function(){return a}});var o=e(72302);function a(r,l){if(r){if(typeof r=="string")return(0,o.Z)(r,l);var i=Object.prototype.toString.call(r).slice(8,-1);if(i==="Object"&&r.constructor&&(i=r.constructor.name),i==="Map"||i==="Set")return Array.from(r);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return(0,o.Z)(r,l)}}},32290:function(s,v,e){"use strict";e.d(v,{CR:function(){return P},Jh:function(){return b},XA:function(){return R},ZT:function(){return a},_T:function(){return l},ev:function(){return F},mG:function(){return E},pi:function(){return r}});var o=function(O,L){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(W,V){W.__proto__=V}||function(W,V){for(var G in V)Object.prototype.hasOwnProperty.call(V,G)&&(W[G]=V[G])},o(O,L)};function a(O,L){if(typeof L!="function"&&L!==null)throw new TypeError("Class extends value "+String(L)+" is not a constructor or null");o(O,L);function W(){this.constructor=O}O.prototype=L===null?Object.create(L):(W.prototype=L.prototype,new W)}var r=function(){return r=Object.assign||function(L){for(var W,V=1,G=arguments.length;V<G;V++){W=arguments[V];for(var I in W)Object.prototype.hasOwnProperty.call(W,I)&&(L[I]=W[I])}return L},r.apply(this,arguments)};function l(O,L){var W={};for(var V in O)Object.prototype.hasOwnProperty.call(O,V)&&L.indexOf(V)<0&&(W[V]=O[V]);if(O!=null&&typeof Object.getOwnPropertySymbols=="function")for(var G=0,V=Object.getOwnPropertySymbols(O);G<V.length;G++)L.indexOf(V[G])<0&&Object.prototype.propertyIsEnumerable.call(O,V[G])&&(W[V[G]]=O[V[G]]);return W}function i(O,L,W,V){var G=arguments.length,I=G<3?L:V===null?V=Object.getOwnPropertyDescriptor(L,W):V,H;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")I=Reflect.decorate(O,L,W,V);else for(var $=O.length-1;$>=0;$--)(H=O[$])&&(I=(G<3?H(I):G>3?H(L,W,I):H(L,W))||I);return G>3&&I&&Object.defineProperty(L,W,I),I}function d(O,L){return function(W,V){L(W,V,O)}}function f(O,L,W,V,G,I){function H(fe){if(fe!==void 0&&typeof fe!="function")throw new TypeError("Function expected");return fe}for(var $=V.kind,Y=$==="getter"?"get":$==="setter"?"set":"value",X=!L&&O?V.static?O:O.prototype:null,Re=L||(X?Object.getOwnPropertyDescriptor(X,V.name):{}),Fe,at=!1,et=W.length-1;et>=0;et--){var Ke={};for(var ot in V)Ke[ot]=ot==="access"?{}:V[ot];for(var ot in V.access)Ke.access[ot]=V.access[ot];Ke.addInitializer=function(fe){if(at)throw new TypeError("Cannot add initializers after decoration has completed");I.push(H(fe||null))};var te=(0,W[et])($==="accessor"?{get:Re.get,set:Re.set}:Re[Y],Ke);if($==="accessor"){if(te===void 0)continue;if(te===null||typeof te!="object")throw new TypeError("Object expected");(Fe=H(te.get))&&(Re.get=Fe),(Fe=H(te.set))&&(Re.set=Fe),(Fe=H(te.init))&&G.unshift(Fe)}else(Fe=H(te))&&($==="field"?G.unshift(Fe):Re[Y]=Fe)}X&&Object.defineProperty(X,V.name,Re),at=!0}function g(O,L,W){for(var V=arguments.length>2,G=0;G<L.length;G++)W=V?L[G].call(O,W):L[G].call(O);return V?W:void 0}function h(O){return typeof O=="symbol"?O:"".concat(O)}function p(O,L,W){return typeof L=="symbol"&&(L=L.description?"[".concat(L.description,"]"):""),Object.defineProperty(O,"name",{configurable:!0,value:W?"".concat(W," ",L):L})}function m(O,L){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(O,L)}function E(O,L,W,V){function G(I){return I instanceof W?I:new W(function(H){H(I)})}return new(W||(W=Promise))(function(I,H){function $(Re){try{X(V.next(Re))}catch(Fe){H(Fe)}}function Y(Re){try{X(V.throw(Re))}catch(Fe){H(Fe)}}function X(Re){Re.done?I(Re.value):G(Re.value).then($,Y)}X((V=V.apply(O,L||[])).next())})}function b(O,L){var W={label:0,sent:function(){if(I[0]&1)throw I[1];return I[1]},trys:[],ops:[]},V,G,I,H;return H={next:$(0),throw:$(1),return:$(2)},typeof Symbol=="function"&&(H[Symbol.iterator]=function(){return this}),H;function $(X){return function(Re){return Y([X,Re])}}function Y(X){if(V)throw new TypeError("Generator is already executing.");for(;H&&(H=0,X[0]&&(W=0)),W;)try{if(V=1,G&&(I=X[0]&2?G.return:X[0]?G.throw||((I=G.return)&&I.call(G),0):G.next)&&!(I=I.call(G,X[1])).done)return I;switch(G=0,I&&(X=[X[0]&2,I.value]),X[0]){case 0:case 1:I=X;break;case 4:return W.label++,{value:X[1],done:!1};case 5:W.label++,G=X[1],X=[0];continue;case 7:X=W.ops.pop(),W.trys.pop();continue;default:if(I=W.trys,!(I=I.length>0&&I[I.length-1])&&(X[0]===6||X[0]===2)){W=0;continue}if(X[0]===3&&(!I||X[1]>I[0]&&X[1]<I[3])){W.label=X[1];break}if(X[0]===6&&W.label<I[1]){W.label=I[1],I=X;break}if(I&&W.label<I[2]){W.label=I[2],W.ops.push(X);break}I[2]&&W.ops.pop(),W.trys.pop();continue}X=L.call(O,W)}catch(Re){X=[6,Re],G=0}finally{V=I=0}if(X[0]&5)throw X[1];return{value:X[0]?X[1]:void 0,done:!0}}}var w=Object.create?function(O,L,W,V){V===void 0&&(V=W);var G=Object.getOwnPropertyDescriptor(L,W);(!G||("get"in G?!L.__esModule:G.writable||G.configurable))&&(G={enumerable:!0,get:function(){return L[W]}}),Object.defineProperty(O,V,G)}:function(O,L,W,V){V===void 0&&(V=W),O[V]=L[W]};function x(O,L){for(var W in O)W!=="default"&&!Object.prototype.hasOwnProperty.call(L,W)&&w(L,O,W)}function R(O){var L=typeof Symbol=="function"&&Symbol.iterator,W=L&&O[L],V=0;if(W)return W.call(O);if(O&&typeof O.length=="number")return{next:function(){return O&&V>=O.length&&(O=void 0),{value:O&&O[V++],done:!O}}};throw new TypeError(L?"Object is not iterable.":"Symbol.iterator is not defined.")}function P(O,L){var W=typeof Symbol=="function"&&O[Symbol.iterator];if(!W)return O;var V=W.call(O),G,I=[],H;try{for(;(L===void 0||L-- >0)&&!(G=V.next()).done;)I.push(G.value)}catch($){H={error:$}}finally{try{G&&!G.done&&(W=V.return)&&W.call(V)}finally{if(H)throw H.error}}return I}function j(){for(var O=[],L=0;L<arguments.length;L++)O=O.concat(P(arguments[L]));return O}function N(){for(var O=0,L=0,W=arguments.length;L<W;L++)O+=arguments[L].length;for(var V=Array(O),G=0,L=0;L<W;L++)for(var I=arguments[L],H=0,$=I.length;H<$;H++,G++)V[G]=I[H];return V}function F(O,L,W){if(W||arguments.length===2)for(var V=0,G=L.length,I;V<G;V++)(I||!(V in L))&&(I||(I=Array.prototype.slice.call(L,0,V)),I[V]=L[V]);return O.concat(I||Array.prototype.slice.call(L))}function A(O){return this instanceof A?(this.v=O,this):new A(O)}function k(O,L,W){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var V=W.apply(O,L||[]),G,I=[];return G={},H("next"),H("throw"),H("return"),G[Symbol.asyncIterator]=function(){return this},G;function H(at){V[at]&&(G[at]=function(et){return new Promise(function(Ke,ot){I.push([at,et,Ke,ot])>1||$(at,et)})})}function $(at,et){try{Y(V[at](et))}catch(Ke){Fe(I[0][3],Ke)}}function Y(at){at.value instanceof A?Promise.resolve(at.value.v).then(X,Re):Fe(I[0][2],at)}function X(at){$("next",at)}function Re(at){$("throw",at)}function Fe(at,et){at(et),I.shift(),I.length&&$(I[0][0],I[0][1])}}function z(O){var L,W;return L={},V("next"),V("throw",function(G){throw G}),V("return"),L[Symbol.iterator]=function(){return this},L;function V(G,I){L[G]=O[G]?function(H){return(W=!W)?{value:A(O[G](H)),done:!1}:I?I(H):H}:I}}function K(O){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var L=O[Symbol.asyncIterator],W;return L?L.call(O):(O=typeof R=="function"?R(O):O[Symbol.iterator](),W={},V("next"),V("throw"),V("return"),W[Symbol.asyncIterator]=function(){return this},W);function V(I){W[I]=O[I]&&function(H){return new Promise(function($,Y){H=O[I](H),G($,Y,H.done,H.value)})}}function G(I,H,$,Y){Promise.resolve(Y).then(function(X){I({value:X,done:$})},H)}}function ee(O,L){return Object.defineProperty?Object.defineProperty(O,"raw",{value:L}):O.raw=L,O}var J=Object.create?function(O,L){Object.defineProperty(O,"default",{enumerable:!0,value:L})}:function(O,L){O.default=L};function ce(O){if(O&&O.__esModule)return O;var L={};if(O!=null)for(var W in O)W!=="default"&&Object.prototype.hasOwnProperty.call(O,W)&&w(L,O,W);return J(L,O),L}function Te(O){return O&&O.__esModule?O:{default:O}}function Oe(O,L,W,V){if(W==="a"&&!V)throw new TypeError("Private accessor was defined without a getter");if(typeof L=="function"?O!==L||!V:!L.has(O))throw new TypeError("Cannot read private member from an object whose class did not declare it");return W==="m"?V:W==="a"?V.call(O):V?V.value:L.get(O)}function Ne(O,L,W,V,G){if(V==="m")throw new TypeError("Private method is not writable");if(V==="a"&&!G)throw new TypeError("Private accessor was defined without a setter");if(typeof L=="function"?O!==L||!G:!L.has(O))throw new TypeError("Cannot write private member to an object whose class did not declare it");return V==="a"?G.call(O,W):G?G.value=W:L.set(O,W),W}function _e(O,L){if(L===null||typeof L!="object"&&typeof L!="function")throw new TypeError("Cannot use 'in' operator on non-object");return typeof O=="function"?L===O:O.has(L)}function je(O,L,W){if(L!=null){if(typeof L!="object"&&typeof L!="function")throw new TypeError("Object expected.");var V;if(W){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");V=L[Symbol.asyncDispose]}if(V===void 0){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");V=L[Symbol.dispose]}if(typeof V!="function")throw new TypeError("Object not disposable.");O.stack.push({value:L,dispose:V,async:W})}else W&&O.stack.push({async:!0});return L}var q=typeof SuppressedError=="function"?SuppressedError:function(O,L,W){var V=new Error(W);return V.name="SuppressedError",V.error=O,V.suppressed=L,V};function re(O){function L(V){O.error=O.hasError?new q(V,O.error,"An error was suppressed during disposal."):V,O.hasError=!0}function W(){for(;O.stack.length;){var V=O.stack.pop();try{var G=V.dispose&&V.dispose.call(V.value);if(V.async)return Promise.resolve(G).then(W,function(I){return L(I),W()})}catch(I){L(I)}}if(O.hasError)throw O.error}return W()}var ae={__extends:a,__assign:r,__rest:l,__decorate:i,__param:d,__metadata:m,__awaiter:E,__generator:b,__createBinding:w,__exportStar:x,__values:R,__read:P,__spread:j,__spreadArrays:N,__spreadArray:F,__await:A,__asyncGenerator:k,__asyncDelegator:z,__asyncValues:K,__makeTemplateObject:ee,__importStar:ce,__importDefault:Te,__classPrivateFieldGet:Oe,__classPrivateFieldSet:Ne,__classPrivateFieldIn:_e,__addDisposableResource:je,__disposeResources:re}}},__webpack_module_cache__={};function __webpack_require__(s){var v=__webpack_module_cache__[s];if(v!==void 0)return v.exports;var e=__webpack_module_cache__[s]={id:s,loaded:!1,exports:{}};return __webpack_modules__[s].call(e.exports,e,e.exports,__webpack_require__),e.loaded=!0,e.exports}__webpack_require__.m=__webpack_modules__,function(){__webpack_require__.n=function(s){var v=s&&s.__esModule?function(){return s.default}:function(){return s};return __webpack_require__.d(v,{a:v}),v}}(),function(){var s=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},v;__webpack_require__.t=function(e,o){if(o&1&&(e=this(e)),o&8||typeof e=="object"&&e&&(o&4&&e.__esModule||o&16&&typeof e.then=="function"))return e;var a=Object.create(null);__webpack_require__.r(a);var r={};v=v||[null,s({}),s([]),s(s)];for(var l=o&2&&e;typeof l=="object"&&!~v.indexOf(l);l=s(l))Object.getOwnPropertyNames(l).forEach(function(i){r[i]=function(){return e[i]}});return r.default=function(){return e},__webpack_require__.d(a,r),a}}(),function(){__webpack_require__.d=function(s,v){for(var e in v)__webpack_require__.o(v,e)&&!__webpack_require__.o(s,e)&&Object.defineProperty(s,e,{enumerable:!0,get:v[e]})}}(),function(){__webpack_require__.f={},__webpack_require__.e=function(s){return Promise.all(Object.keys(__webpack_require__.f).reduce(function(v,e){return __webpack_require__.f[e](s,v),v},[]))}}(),function(){__webpack_require__.u=function(s){return""+({9:"nm__dumi__dist__client__pages__Demo__index",64:"docs__home__markerLayer.md",65:"nm__dumi__dist__client__pages__404",299:"docs__home__map.md",433:"demos",519:"nm__dumi__theme-default__layouts__DocLayout__index",640:"docs__home__polygonLayer.md",874:"docs__home__index.md",915:"docs__home__pointLayer.md",923:"dumi__tmp-production__dumi__theme__ContextWrapper",935:"docs__index.md"}[s]||s)+"."+{9:"f1110cbd",64:"4d387c18",65:"4b54f967",88:"f0258233",299:"7a94e360",395:"522a4ba8",433:"b470b683",519:"f758b4f4",640:"ec2f2cbc",827:"3b901102",874:"aab99e29",915:"a72d2a3b",923:"3c181b1c",935:"2ad54eb4"}[s]+".async.js"}}(),function(){__webpack_require__.miniCssF=function(s){return""+({9:"nm__dumi__dist__client__pages__Demo__index",64:"docs__home__markerLayer.md",65:"nm__dumi__dist__client__pages__404",299:"docs__home__map.md",640:"docs__home__polygonLayer.md",874:"docs__home__index.md",915:"docs__home__pointLayer.md",935:"docs__index.md"}[s]||s)+"."+{9:"578aa5c0",64:"778c6473",65:"8b85f2d9",88:"dec64465",299:"778c6473",640:"778c6473",874:"778c6473",915:"778c6473",935:"778c6473"}[s]+".chunk.css"}}(),function(){__webpack_require__.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch(s){if(typeof window=="object")return window}}()}(),function(){__webpack_require__.o=function(s,v){return Object.prototype.hasOwnProperty.call(s,v)}}(),function(){var s={},v="cruise-car-map:";__webpack_require__.l=function(e,o,a,r){if(s[e]){s[e].push(o);return}var l,i;if(a!==void 0)for(var d=document.getElementsByTagName("script"),f=0;f<d.length;f++){var g=d[f];if(g.getAttribute("src")==e||g.getAttribute("data-webpack")==v+a){l=g;break}}l||(i=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,__webpack_require__.nc&&l.setAttribute("nonce",__webpack_require__.nc),l.setAttribute("data-webpack",v+a),l.src=e),s[e]=[o];var h=function(m,E){l.onerror=l.onload=null,clearTimeout(p);var b=s[e];if(delete s[e],l.parentNode&&l.parentNode.removeChild(l),b&&b.forEach(function(w){return w(E)}),m)return m(E)},p=setTimeout(h.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=h.bind(null,l.onerror),l.onload=h.bind(null,l.onload),i&&document.head.appendChild(l)}}(),function(){__webpack_require__.r=function(s){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})}}(),function(){__webpack_require__.nmd=function(s){return s.paths=[],s.children||(s.children=[]),s}}(),function(){__webpack_require__.p="/cruise-car-map/"}(),function(){if(typeof document!="undefined"){var s=function(a,r,l,i,d){var f=document.createElement("link");f.rel="stylesheet",f.type="text/css";var g=function(h){if(f.onerror=f.onload=null,h.type==="load")i();else{var p=h&&(h.type==="load"?"missing":h.type),m=h&&h.target&&h.target.href||r,E=new Error("Loading CSS chunk "+a+` failed.
(`+m+")");E.code="CSS_CHUNK_LOAD_FAILED",E.type=p,E.request=m,f.parentNode.removeChild(f),d(E)}};return f.onerror=f.onload=g,f.href=r,l?l.parentNode.insertBefore(f,l.nextSibling):document.head.appendChild(f),f},v=function(a,r){for(var l=document.getElementsByTagName("link"),i=0;i<l.length;i++){var d=l[i],f=d.getAttribute("data-href")||d.getAttribute("href");if(d.rel==="stylesheet"&&(f===a||f===r))return d}for(var g=document.getElementsByTagName("style"),i=0;i<g.length;i++){var d=g[i],f=d.getAttribute("data-href");if(f===a||f===r)return d}},e=function(a){return new Promise(function(r,l){var i=__webpack_require__.miniCssF(a),d=__webpack_require__.p+i;if(v(i,d))return r();s(a,d,null,r,l)})},o={620:0};__webpack_require__.f.miniCss=function(a,r){var l={9:1,64:1,65:1,88:1,299:1,640:1,874:1,915:1,935:1};o[a]?r.push(o[a]):o[a]!==0&&l[a]&&r.push(o[a]=e(a).then(function(){o[a]=0},function(i){throw delete o[a],i}))}}}(),function(){var s={620:0};__webpack_require__.f.j=function(o,a){var r=__webpack_require__.o(s,o)?s[o]:void 0;if(r!==0)if(r)a.push(r[2]);else{var l=new Promise(function(g,h){r=s[o]=[g,h]});a.push(r[2]=l);var i=__webpack_require__.p+__webpack_require__.u(o),d=new Error,f=function(g){if(__webpack_require__.o(s,o)&&(r=s[o],r!==0&&(s[o]=void 0),r)){var h=g&&(g.type==="load"?"missing":g.type),p=g&&g.target&&g.target.src;d.message="Loading chunk "+o+` failed.
(`+h+": "+p+")",d.name="ChunkLoadError",d.type=h,d.request=p,r[1](d)}};__webpack_require__.l(i,f,"chunk-"+o,o)}};var v=function(o,a){var r=a[0],l=a[1],i=a[2],d,f,g=0;if(r.some(function(p){return s[p]!==0})){for(d in l)__webpack_require__.o(l,d)&&(__webpack_require__.m[d]=l[d]);if(i)var h=i(__webpack_require__)}for(o&&o(a);g<r.length;g++)f=r[g],__webpack_require__.o(s,f)&&s[f]&&s[f][0](),s[f]=0},e=self.webpackChunkcruise_car_map=self.webpackChunkcruise_car_map||[];e.forEach(v.bind(null,0)),e.push=v.bind(null,e.push.bind(e))}();var __webpack_exports__={};(function(){"use strict";var s=__webpack_require__(10574),v=__webpack_require__.n(s),e=__webpack_require__(26801),o=__webpack_require__.n(e),a=__webpack_require__(39343),r=__webpack_require__.n(a),l=__webpack_require__(73700),i=__webpack_require__(67029),d=__webpack_require__(53612),f=__webpack_require__(87499),g=__webpack_require__(30692),h=__webpack_require__(4018),p=__webpack_require__(25096),m=__webpack_require__(56096),E=__webpack_require__(19701),b=__webpack_require__(2443),w=__webpack_require__(96542),x=__webpack_require__(33768),R=__webpack_require__(78716),P=__webpack_require__(8968),j=__webpack_require__(32002),N=__webpack_require__(50735),F=__webpack_require__(49276),A=__webpack_require__(99597),k=__webpack_require__(79475),z=__webpack_require__(16181),K=__webpack_require__(20207),ee=__webpack_require__(56960),J=__webpack_require__(60205),ce=__webpack_require__(30089),Te=__webpack_require__(94897),Oe=__webpack_require__(41088),Ne=__webpack_require__(24506),_e=__webpack_require__(72182),je=__webpack_require__(51644),q=__webpack_require__(22099),re=__webpack_require__(92826),ae=__webpack_require__(31735),O=__webpack_require__(95374),L=__webpack_require__(15919),W=__webpack_require__(49979),V=__webpack_require__(55806),G=__webpack_require__(89046),I=__webpack_require__(63162),H=__webpack_require__(29950),$=__webpack_require__(94977),Y=__webpack_require__(51889),X=__webpack_require__(73223),Re=__webpack_require__(11397),Fe=__webpack_require__(52274),at=__webpack_require__(96301),et=__webpack_require__(91793),Ke=__webpack_require__(39086),ot=__webpack_require__(81135),te=__webpack_require__(38137),fe=__webpack_require__(11770),pe=__webpack_require__(47165),me=__webpack_require__(43583),Ie=__webpack_require__(36825),ue=__webpack_require__(99378),ve=__webpack_require__(35048),Ee=__webpack_require__(84798),le=__webpack_require__(77021),ye=__webpack_require__(15088),Be=__webpack_require__(48081),oe=__webpack_require__(97516),he=__webpack_require__(74807),Ae=__webpack_require__(57303),Ue=__webpack_require__(71416),He=__webpack_require__(30537),it=__webpack_require__(15805),y=__webpack_require__(31434),Q=__webpack_require__(86528),be=__webpack_require__(44938),we=__webpack_require__(14266),ze=__webpack_require__(91),We=__webpack_require__(67153),Pe=__webpack_require__(86985),Xe=__webpack_require__(30932),ct=__webpack_require__(95422),Ve=__webpack_require__(74062),Pt=__webpack_require__(64409),xe=__webpack_require__(66408),tt=__webpack_require__(24606),Ze=__webpack_require__(55152),Le=__webpack_require__(32372),ut=__webpack_require__(28311),st=__webpack_require__(15378),bt=__webpack_require__(91421),kt=__webpack_require__(64722),Kt=__webpack_require__(85320),xn=__webpack_require__(34433),dn=__webpack_require__(97560),In=__webpack_require__(24675),Bn=__webpack_require__(42929),Ar=__webpack_require__(12767),Br=__webpack_require__(34670),wt=__webpack_require__(31212),dt=__webpack_require__(41728),pt=__webpack_require__(9056),Ut=__webpack_require__(63915),on=__webpack_require__(83750),qt=__webpack_require__(23144),Ln=__webpack_require__(45519),ar=__webpack_require__(44705),Gn=__webpack_require__(11592),Gr=__webpack_require__(17918),Fn=__webpack_require__(71793),Dr=__webpack_require__(55731),ni=__webpack_require__(14679),sr=__webpack_require__(46155),wi=__webpack_require__(51368),za=__webpack_require__(26653),ri=__webpack_require__(28298),bo=__webpack_require__(39775),_o=__webpack_require__(54399),jo=__webpack_require__(4006),xo=__webpack_require__(74659),pa=__webpack_require__(93982),Ii=__webpack_require__(85218),wa=__webpack_require__(8453),Hi=__webpack_require__(68286),Qu=__webpack_require__(7560),$a=__webpack_require__(40460),to=__webpack_require__(43809),wo=__webpack_require__(3390),Io=__webpack_require__(14514),_a=__webpack_require__(97461),du=__webpack_require__(41299),Ti=__webpack_require__(71841),To=__webpack_require__(92416),Kr=__webpack_require__(65655),Fr=__webpack_require__(85179),Pr=__webpack_require__(85954),Ia=__webpack_require__(75936),Ta=__webpack_require__(453),nr=__webpack_require__(28786),Oi=__webpack_require__(90526),Zi=__webpack_require__(75462),vu=__webpack_require__(11984),pu=__webpack_require__(66350),ai=__webpack_require__(70003),oi=__webpack_require__(6138),so=__webpack_require__(79263),Ha=__webpack_require__(83958),no=__webpack_require__(36875),Oo=__webpack_require__(44965),co=__webpack_require__(40217),ro=__webpack_require__(2039),Za=__webpack_require__(76366),sa=__webpack_require__(73083),El=__webpack_require__(80246),Xu=__webpack_require__(1367),fo=__webpack_require__(99512),Sl=__webpack_require__(82790),hu=__webpack_require__(99455),Bo=__webpack_require__(78881),Mr=__webpack_require__(99103),bl=__webpack_require__(90111),ii=__webpack_require__(33908),Ci=__webpack_require__(15311),ui=__webpack_require__(76302),Wi=__webpack_require__(77757),li=__webpack_require__(90056),Co=__webpack_require__(44981),Gi=__webpack_require__(20654),Ao=__webpack_require__(29230),Ki=__webpack_require__(66225),Ju=__webpack_require__(2890),Po=__webpack_require__(72963),Vi=__webpack_require__(89273),Yi=__webpack_require__(94250),Fo=__webpack_require__(1396),Qi=__webpack_require__(65798),si=__webpack_require__(73480),Ai=__webpack_require__(56450),ca=__webpack_require__(99037),Uo=__webpack_require__(62112),zo=__webpack_require__(4035),ha=__webpack_require__(72790),xl=__webpack_require__(5307),gu=__webpack_require__(30643),mu=__webpack_require__(45526),Pi=__webpack_require__(22160),Mi=__webpack_require__(71846),yu=__webpack_require__(69585),wl=__webpack_require__(14767),qu=__webpack_require__(1529),Ri=__webpack_require__(7405),Eu=__webpack_require__(88782),Li=__webpack_require__(65958),ci=__webpack_require__(91390),el=__webpack_require__(50554),fi=__webpack_require__(67504),Il=__webpack_require__(93380),Su=__webpack_require__(29188),Ni=__webpack_require__(35377),bu=__webpack_require__(69751),tl=__webpack_require__(78162),nl=__webpack_require__(98666),xu=__webpack_require__(138),Wa=__webpack_require__(26742),Xi=__webpack_require__(58246),$o=__webpack_require__(77622),M=__webpack_require__(10603),D=__webpack_require__(80268),_=__webpack_require__(74710),se=__webpack_require__(39718),Ce=__webpack_require__(71062),Qe=__webpack_require__(55862),Je=__webpack_require__(35338),lt=__webpack_require__(13291),ft=__webpack_require__(52528),gt=__webpack_require__(26508),jt=__webpack_require__(68472),ln=["redirect"];function Gt(Yt){var $t=Yt.routesById,Kn=Yt.parentId,Sr=Yt.routeComponents;return Object.keys($t).filter(function(br){return $t[br].parentId===Kn}).map(function(br){var _r=pn((0,_.Z)({route:$t[br],routeComponent:Sr[br],loadingComponent:Yt.loadingComponent,reactRouter5Compat:Yt.reactRouter5Compat},Yt.reactRouter5Compat&&{hasChildren:Object.keys($t).filter(function(ga){return $t[ga].parentId===br}).length>0})),ta=Gt({routesById:$t,routeComponents:Sr,parentId:_r.id,loadingComponent:Yt.loadingComponent,reactRouter5Compat:Yt.reactRouter5Compat});return ta.length>0&&(_r.children=ta,_r.routes=ta),_r})}function Zt(Yt){var $t=(0,Je.UO)(),Kn=(0,_.Z)((0,_.Z)({},Yt),{},{to:(0,Je.Gn)(Yt.to,$t)});return Ce.createElement(Je.Fg,(0,gt.Z)({replace:!0},Kn))}function pn(Yt){var $t=Yt.route,Kn=$t.redirect,Sr=(0,ft.Z)($t,ln),br=Yt.reactRouter5Compat?_n:Vn;return(0,_.Z)({element:Kn?Ce.createElement(Zt,{to:Kn}):Ce.createElement(jt.X.Provider,{value:{route:Yt.route}},Ce.createElement(br,{loader:Ce.memo(Yt.routeComponent),loadingComponent:Yt.loadingComponent||Un,hasChildren:Yt.hasChildren}))},Sr)}function Un(){return Ce.createElement("div",null)}function _n(Yt){var $t=(0,jt.Q)(),Kn=$t.route,Sr=(0,lt.Ov)(),br=Sr.history,_r=Sr.clientRoutes,ta=(0,Je.UO)(),ga={params:ta,isExact:!0,path:Kn.path,url:br.location.pathname},Ga=Yt.loader;return Ce.createElement(Ce.Suspense,{fallback:Ce.createElement(Yt.loadingComponent,null)},Ce.createElement(Ga,{location:br.location,match:ga,history:br,params:ta,route:Kn,routes:_r},Yt.hasChildren&&Ce.createElement(Je.j3,null)))}function Vn(Yt){var $t=Yt.loader;return Ce.createElement(Ce.Suspense,{fallback:Ce.createElement(Yt.loadingComponent,null)},Ce.createElement($t,null))}var Ir=null;function kr(){return Ir}function Oa(Yt){var $t=Yt.history,Kn=Ce.useState({action:$t.action,location:$t.location}),Sr=(0,se.Z)(Kn,2),br=Sr[0],_r=Sr[1];return(0,Ce.useLayoutEffect)(function(){return $t.listen(_r)},[$t]),(0,Ce.useLayoutEffect)(function(){function ta(ga){Yt.pluginManager.applyPlugins({key:"onRouteChange",type:"event",args:{routes:Yt.routes,clientRoutes:Yt.clientRoutes,location:ga.location,action:ga.action,basename:Yt.basename,isFirst:!!ga.isFirst}})}return ta({location:br.location,action:br.action,isFirst:!0}),$t.listen(ta)},[$t,Yt.routes,Yt.clientRoutes]),Ce.createElement(Je.F0,{navigator:$t,location:br.location,basename:Yt.basename},Yt.children)}function ja(){var Yt=(0,lt.Ov)(),$t=Yt.clientRoutes;return(0,Je.V$)($t)}var ea=["innerProvider","i18nProvider","accessProvider","dataflowProvider","outerProvider","rootContainer"],Ba=function($t,Kn){var Sr=$t.basename||"/",br=Gt({routesById:$t.routes,routeComponents:$t.routeComponents,loadingComponent:$t.loadingComponent,reactRouter5Compat:$t.reactRouter5Compat});$t.pluginManager.applyPlugins({key:"patchClientRoutes",type:"event",args:{routes:br}});for(var _r=Ce.createElement(Oa,{basename:Sr,pluginManager:$t.pluginManager,routes:$t.routes,clientRoutes:br,history:$t.history},Kn),ta=0,ga=ea;ta<ga.length;ta++){var Ga=ga[ta];_r=$t.pluginManager.applyPlugins({type:"modify",key:Ga,initialValue:_r,args:{routes:$t.routes,history:$t.history,plugin:$t.pluginManager}})}var wu=function(){var Iu=(0,Ce.useState)({}),qi=(0,se.Z)(Iu,2),Go=qi[0],ki=qi[1],al=(0,Ce.useState)(window.__UMI_LOADER_DATA__||{}),ol=(0,se.Z)(al,2),pi=ol[0],Tl=ol[1],Tu=(0,Ce.useCallback)(function(eu,il){var Ou,Cu=(((Ou=(0,Je.fp)(br,eu,Sr))===null||Ou===void 0?void 0:Ou.map(function(Xn){return Xn.route.id}))||[]).filter(Boolean);Cu.forEach(function(Xn){var tu,nu,Ol=window.__umi_manifest__;if(Ol){var ul=Xn.replace(/[\/\-]/g,"_"),_i="preload-".concat(ul,".js");if(!document.getElementById(_i)){var Hl=Object.keys(Ol).filter(function(Aa){return Aa.startsWith(ul+".")});Hl.forEach(function(Aa){if(!/\.(js|css)$/.test(Aa))throw Error("preload not support ".concat(Aa," file"));var Ka=Ol[Aa],vo=document.createElement("link");vo.rel="preload",vo.as="style",Aa.endsWith(".js")&&(vo.as="script",vo.id=_i),$t.runtimePublicPath&&(Ka=Ka.replace(new RegExp("^".concat($t.publicPath)),window.publicPath)),vo.href=Ka,document.head.appendChild(vo)})}}if(!il&&(tu=$t.routes[Xn])!==null&&tu!==void 0&&tu.hasServerLoader){var Cl=new URLSearchParams({route:Xn,url:window.location.href}).toString(),Al="".concat(Ho(Sr),"__serverLoader?").concat(Cl);fetch(Al,{credentials:"include"}).then(function(Aa){return Aa.json()}).then(function(Aa){Ce.startTransition(function(){Tl(function(Ka){return(0,_.Z)((0,_.Z)({},Ka),{},(0,D.Z)({},Xn,Aa))})})}).catch(console.error)}var yr=(nu=$t.routes[Xn])===null||nu===void 0?void 0:nu.clientLoader;yr&&!Go[Xn]&&yr().then(function(Aa){ki(function(Ka){return(0,_.Z)((0,_.Z)({},Ka),{},(0,D.Z)({},Xn,Aa))})})})},[Go]);return(0,Ce.useEffect)(function(){return Tu(window.location.pathname,!0),$t.history.listen(function(eu){Tu(eu.location.pathname)})},[]),(0,Ce.useLayoutEffect)(function(){typeof $t.callback=="function"&&$t.callback()},[]),Ce.createElement(lt.Il.Provider,{value:{routes:$t.routes,routeComponents:$t.routeComponents,clientRoutes:br,pluginManager:$t.pluginManager,rootElement:$t.rootElement,basename:Sr,clientLoaderData:Go,serverLoaderData:pi,preloadRoute:Tu,history:$t.history}},_r)};return wu};function Mo(Yt){var $t=Yt.rootElement||document.getElementById("root"),Kn=Ba(Yt,Ce.createElement(ja,null));if(Yt.components)return Kn;if(Yt.hydrate){Qe.hydrateRoot($t,Ce.createElement(Kn,null));return}if(Qe.createRoot){Ir=Qe.createRoot($t),Ir.render(Ce.createElement(Kn,null));return}Qe.render(Ce.createElement(Kn,null),$t)}function Ho(Yt){return Yt.endsWith("/")?Yt:"".concat(Yt,"/")}function di(){return Ro.apply(this,arguments)}function Ro(){return Ro=r()(v()().mark(function Yt(){var $t;return v()().wrap(function(Sr){for(;;)switch(Sr.prev=Sr.next){case 0:return $t={404:{id:"404",path:"*",parentId:"DocLayout"},"dumi-context-layout":{id:"dumi-context-layout",path:"/",isLayout:!0},DocLayout:{id:"DocLayout",path:"/",parentId:"dumi-context-layout",isLayout:!0},"docs/home/polygonLayer":{path:"home/polygon-layer",id:"docs/home/polygonLayer",parentId:"DocLayout"},"docs/home/markerLayer":{path:"home/marker-layer",id:"docs/home/markerLayer",parentId:"DocLayout"},"docs/home/pointLayer":{path:"home/point-layer",id:"docs/home/pointLayer",parentId:"DocLayout"},"docs/home/index":{path:"home",id:"docs/home/index",parentId:"DocLayout"},"docs/home/map":{path:"home/map",id:"docs/home/map",parentId:"DocLayout"},"docs/index":{path:"",id:"docs/index",parentId:"DocLayout"},"demo-render":{id:"demo-render",path:"~demos/:id",parentId:"dumi-context-layout",prerender:!1}},Sr.abrupt("return",{routes:$t,routeComponents:{404:Ce.lazy(function(){return __webpack_require__.e(65).then(__webpack_require__.bind(__webpack_require__,369))}),"dumi-context-layout":Ce.lazy(function(){return __webpack_require__.e(923).then(__webpack_require__.bind(__webpack_require__,68914))}),DocLayout:Ce.lazy(function(){return Promise.all([__webpack_require__.e(88),__webpack_require__.e(519)]).then(__webpack_require__.bind(__webpack_require__,982))}),"docs/home/polygonLayer":Ce.lazy(function(){return Promise.all([__webpack_require__.e(827),__webpack_require__.e(640)]).then(__webpack_require__.bind(__webpack_require__,62895))}),"docs/home/markerLayer":Ce.lazy(function(){return Promise.all([__webpack_require__.e(827),__webpack_require__.e(64)]).then(__webpack_require__.bind(__webpack_require__,74599))}),"docs/home/pointLayer":Ce.lazy(function(){return Promise.all([__webpack_require__.e(827),__webpack_require__.e(915)]).then(__webpack_require__.bind(__webpack_require__,27784))}),"docs/home/index":Ce.lazy(function(){return Promise.all([__webpack_require__.e(827),__webpack_require__.e(874)]).then(__webpack_require__.bind(__webpack_require__,33429))}),"docs/home/map":Ce.lazy(function(){return Promise.all([__webpack_require__.e(827),__webpack_require__.e(299)]).then(__webpack_require__.bind(__webpack_require__,8692))}),"docs/index":Ce.lazy(function(){return Promise.all([__webpack_require__.e(827),__webpack_require__.e(935)]).then(__webpack_require__.bind(__webpack_require__,21392))}),"demo-render":Ce.lazy(function(){return __webpack_require__.e(9).then(__webpack_require__.bind(__webpack_require__,36212))})}});case 2:case"end":return Sr.stop()}},Yt)})),Ro.apply(this,arguments)}var Zo=__webpack_require__(50058),vi=__webpack_require__(65345),ao=__webpack_require__.n(vi),Wo=__webpack_require__(57296),rl=function(){var $t=(0,Wo.WF)(),Kn=$t.setLoading;return(0,Ce.useLayoutEffect)(function(){return Kn(!0),ao().start(),function(){Kn(!1),ao().done()}},[]),null},Ul=rl,Di=__webpack_require__(11372),zl="/cruise-car-map/",Ji=!1;function $l(){return Ca.apply(this,arguments)}function Ca(){return Ca=r()(v()().mark(function Yt(){var $t,Kn,Sr,br,_r,ta,ga,Ga;return v()().wrap(function(ma){for(;;)switch(ma.prev=ma.next){case 0:return $t=(0,$o.gD)(),ma.next=3,di($t);case 3:return Kn=ma.sent,Sr=Kn.routes,br=Kn.routeComponents,ma.next=8,$t.applyPlugins({key:"patchRoutes",type:Di.Ac.event,args:{routes:Sr,routeComponents:br}});case 8:return _r=$t.applyPlugins({key:"modifyContextOpts",type:Di.Ac.modify,initialValue:{}}),ta=_r.basename||"/cruise-car-map",ga=_r.historyType||"browser",Ga=(0,Zo.f)(o()({type:ga,basename:ta},_r.historyOpts)),ma.abrupt("return",$t.applyPlugins({key:"render",type:Di.Ac.compose,initialValue:function(){var qi={routes:Sr,routeComponents:br,pluginManager:$t,rootElement:_r.rootElement||document.getElementById("root"),loadingComponent:Ul,publicPath:zl,runtimePublicPath:Ji,history:Ga,historyType:ga,basename:ta,callback:_r.callback},Go=$t.applyPlugins({key:"modifyClientRenderOpts",type:Di.Ac.modify,initialValue:qi});return Mo(Go)}})());case 13:case"end":return ma.stop()}},Yt)})),Ca.apply(this,arguments)}typeof history!="undefined"&&location.pathname.length>1&&location.pathname.endsWith("/")&&history.replaceState({},"",location.pathname.slice(0,-1)+location.search+location.hash),function(){var Yt=typeof navigator!="undefined"&&navigator.cookieEnabled&&typeof window.localStorage!="undefined"&&localStorage.getItem("dumi:prefers-color")||"light",$t=window.matchMedia("(prefers-color-scheme: dark)").matches,Kn=["light","dark","auto"];document.documentElement.setAttribute("data-prefers-color",Yt===Kn[2]?$t?Kn[1]:Kn[0]:Kn.indexOf(Yt)>-1?Yt:Kn[0])}(),$l(),window.g_umi={version:"4.0.88"},(0,M.rl)((0,$o.We)())})()})();
}());