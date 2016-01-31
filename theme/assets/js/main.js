if(typeof Math.imul == "undefined" || (Math.imul(0xffffffff,5) == 0)) {
    Math.imul = function (a, b) {
        var ah  = (a >>> 16) & 0xffff;
        var al = a & 0xffff;
        var bh  = (b >>> 16) & 0xffff;
        var bl = b & 0xffff;
        // the shift by 0 fixes the sign on the high part
        // the final |0 converts the unsigned value into a signed value
        return ((al * bl) + (((ah * bl + al * bh) << 16) >>> 0)|0);
    }
}

(function e$$0(x,Q,k){function h(a,b){if(!Q[a]){if(!x[a]){var d="function"==typeof require&&require;if(!b&&d)return d(a,!0);if(m)return m(a,!0);throw Error("Cannot find module '"+a+"'");}d=Q[a]={exports:{}};x[a][0].call(d.exports,function(f){var b=x[a][1][f];return h(b?b:f)},d,d.exports,e$$0,x,Q,k)}return Q[a].exports}for(var m="function"==typeof require&&require,n=0;n<k.length;n++)h(k[n]);return h})({1:[function(D,x,Q){x={isDomPresent:!0,navigator:navigator,window:window,document:document,ajax:function(k){var h=
new XMLHttpRequest;h.open("GET",k,!1);h.overrideMimeType&&h.overrideMimeType("text/plain");h.setRequestHeader("If-Modified-Since","Fri, 01 Jan 1960 00:00:00 GMT");h.send(null);if(200!==h.status&&0!==h.status)throw"XMLHttpRequest failed, status code "+h.status;return h.responseText}};window.Processing=D("./src/")(x)},{"./src/":27}],2:[function(D,x,Q){x.exports={name:"Processing.js",version:"1.4.8",dependencies:{argv:"~0.0.2",browserify:"~2.18.1",express:"~3.3.3","node-minify":"~0.7.3",nunjucks:"~0.1.9",
open:"0.0.3"},devDependencies:{grunt:"~0.4.1","grunt-cli":"~0.1.8","grunt-contrib-jshint":"~0.4.3"}}},{}],3:[function(D,x,Q){x.exports=function(k){if(k instanceof Array){var h=-1;this.hasNext=function(){return++h<k.length};this.next=function(){return k[h]}}else{if(k.iterator instanceof Function)return k.iterator();throw"Unable to iterate: "+k;}}},{}],4:[function(D,x,Q){x.exports={X:0,Y:1,Z:2,R:3,G:4,B:5,A:6,U:7,V:8,NX:9,NY:10,NZ:11,EDGE:12,SR:13,SG:14,SB:15,SA:16,SW:17,TX:18,TY:19,TZ:20,VX:21,VY:22,
VZ:23,VW:24,AR:25,AG:26,AB:27,DR:3,DG:4,DB:5,DA:6,SPR:28,SPG:29,SPB:30,SHINE:31,ER:32,EG:33,EB:34,BEEN_LIT:35,VERTEX_FIELD_COUNT:36,P2D:1,JAVA2D:1,WEBGL:2,P3D:2,OPENGL:2,PDF:0,DXF:0,OTHER:0,WINDOWS:1,MAXOSX:2,LINUX:3,EPSILON:1E-4,MAX_FLOAT:3.4028235E38,MIN_FLOAT:-3.4028235E38,MAX_INT:2147483647,MIN_INT:-2147483648,PI:Math.PI,TWO_PI:2*Math.PI,TAU:2*Math.PI,HALF_PI:Math.PI/2,THIRD_PI:Math.PI/3,QUARTER_PI:Math.PI/4,DEG_TO_RAD:Math.PI/180,RAD_TO_DEG:180/Math.PI,WHITESPACE:" \t\n\r\f\u00a0",RGB:1,ARGB:2,
HSB:3,ALPHA:4,CMYK:5,TIFF:0,TARGA:1,JPEG:2,GIF:3,BLUR:11,GRAY:12,INVERT:13,OPAQUE:14,POSTERIZE:15,THRESHOLD:16,ERODE:17,DILATE:18,REPLACE:0,BLEND:1,ADD:2,SUBTRACT:4,LIGHTEST:8,DARKEST:16,DIFFERENCE:32,EXCLUSION:64,MULTIPLY:128,SCREEN:256,OVERLAY:512,HARD_LIGHT:1024,SOFT_LIGHT:2048,DODGE:4096,BURN:8192,ALPHA_MASK:4278190080,RED_MASK:16711680,GREEN_MASK:65280,BLUE_MASK:255,CUSTOM:0,ORTHOGRAPHIC:2,PERSPECTIVE:3,POINT:2,POINTS:2,LINE:4,LINES:4,TRIANGLE:8,TRIANGLES:9,TRIANGLE_STRIP:10,TRIANGLE_FAN:11,
QUAD:16,QUADS:16,QUAD_STRIP:17,POLYGON:20,PATH:21,RECT:30,ELLIPSE:31,ARC:32,SPHERE:40,BOX:41,GROUP:0,PRIMITIVE:1,GEOMETRY:3,VERTEX:0,BEZIER_VERTEX:1,CURVE_VERTEX:2,BREAK:3,CLOSESHAPE:4,OPEN:1,CLOSE:2,CORNER:0,CORNERS:1,RADIUS:2,CENTER_RADIUS:2,CENTER:3,DIAMETER:3,CENTER_DIAMETER:3,BASELINE:0,TOP:101,BOTTOM:102,NORMAL:1,NORMALIZED:1,IMAGE:2,MODEL:4,SHAPE:5,SQUARE:"butt",ROUND:"round",PROJECT:"square",MITER:"miter",BEVEL:"bevel",AMBIENT:0,DIRECTIONAL:1,SPOT:3,BACKSPACE:8,TAB:9,ENTER:10,RETURN:13,ESC:27,
DELETE:127,CODED:65535,SHIFT:16,CONTROL:17,ALT:18,CAPSLK:20,PGUP:33,PGDN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLK:144,META:157,INSERT:155,ARROW:"default",CROSS:"crosshair",HAND:"pointer",MOVE:"move",TEXT:"text",WAIT:"wait",NOCURSOR:"url('data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='), auto",DISABLE_OPENGL_2X_SMOOTH:1,ENABLE_OPENGL_2X_SMOOTH:-1,ENABLE_OPENGL_4X_SMOOTH:2,
ENABLE_NATIVE_FONTS:3,DISABLE_DEPTH_TEST:4,ENABLE_DEPTH_TEST:-4,ENABLE_DEPTH_SORT:5,DISABLE_DEPTH_SORT:-5,DISABLE_OPENGL_ERROR_REPORT:6,ENABLE_OPENGL_ERROR_REPORT:-6,ENABLE_ACCURATE_TEXTURES:7,DISABLE_ACCURATE_TEXTURES:-7,HINT_COUNT:10,SINCOS_LENGTH:720,PRECISIONB:15,PRECISIONF:32768,PREC_MAXVAL:32767,PREC_ALPHA_SHIFT:9,PREC_RED_SHIFT:1,NORMAL_MODE_AUTO:0,NORMAL_MODE_SHAPE:1,NORMAL_MODE_VERTEX:2,MAX_LIGHTS:8}},{}],5:[function(D,x,Q){x.exports=function(k){function h(){}function m(a,d,f){if(a.hasOwnProperty(d)&&
"function"===typeof a[d]){var l=a[d];if("$overloads"in l)l.$defaultOverload=f;else if("$overloads"in f||l.length!==f.length){var p;"$overloads"in f?(p=f.$overloads.slice(0),p[l.length]=l,l=f.$defaultOverload):(p=[],p[f.length]=f,p[l.length]=l);var r=function(){return(r.$overloads[arguments.length]||("$methodArgsIndex"in r&&arguments.length>r.$methodArgsIndex?r.$overloads[r.$methodArgsIndex]:null)||r.$defaultOverload).apply(this,arguments)};r.$overloads=p;"$methodArgsIndex"in f&&(r.$methodArgsIndex=
f.$methodArgsIndex);r.$defaultOverload=l;r.name=d;a[d]=r}}else a[d]=f}function n(b,d){function f(f){a.defineProperty(b,f,{get:function(){return d[f]},set:function(c){d[f]=c},enumerable:!0})}var l=[],p;for(p in d)"function"===typeof d[p]?m(b,p,d[p]):"$"===p.charAt(0)||p in b||l.push(p);for(;0<l.length;)f(l.shift());b.$super=d}h.prototype=k.PConstants;var a=new h;Object.keys(k).forEach(function(b){a[b]=k[b]});a.defineProperty=function(a,d,f){"defineProperty"in Object?Object.defineProperty(a,d,f):(f.hasOwnProperty("get")&&
a.__defineGetter__(d,f.get),f.hasOwnProperty("set")&&a.__defineSetter__(d,f.set))};a.extendClassChain=function(a){for(var d=[a],f=a.$upcast;f;f=f.$upcast)n(f,a),d.push(f),a=f;for(;0<d.length;)d.pop().$self=a};a.extendStaticMembers=function(a,d){n(a,d)};a.extendInterfaceMembers=function(a,d){n(a,d)};a.addMethod=function(a,d,f,l){var p=a[d];if(p||l){var r=f.length;if("$overloads"in p)p.$overloads[r]=f;else{var c=function(){return(c.$overloads[arguments.length]||("$methodArgsIndex"in c&&arguments.length>
c.$methodArgsIndex?c.$overloads[c.$methodArgsIndex]:null)||c.$defaultOverload).apply(this,arguments)},h=[];p&&(h[p.length]=p);h[r]=f;c.$overloads=h;c.$defaultOverload=p||f;l&&(c.$methodArgsIndex=r);c.name=d;a[d]=c}}else a[d]=f};a.createJavaArray=function(b,d){var f=null,l=null;if("string"===typeof b)if("boolean"===b)l=!1;else{var p;p="string"!==typeof b?!1:-1!=="byte int char color float long double".split(" ").indexOf(b);p&&(l=0)}if("number"===typeof d[0])if(p=0|d[0],1>=d.length){f=[];f.length=p;
for(var r=0;r<p;++r)f[r]=l}else for(f=[],l=d.slice(1),r=0;r<p;++r)f.push(a.createJavaArray(b,l));return f};a.defineProperty(a,"screenWidth",{get:function(){return window.innerWidth}});a.defineProperty(a,"screenHeight",{get:function(){return window.innerHeight}});return a}},{}],6:[function(D,x,Q){x.exports=function(k,h){var m=h.window,n=h.document,a=m.XMLHttpRequest,b=h.noop,d=h.isDOMPresent,f=h.version;k.version=f?f:"@DEV-VERSION@";k.lib={};k.registerLibrary=function(f,c){k.lib[f]=c;c.hasOwnProperty("init")&&
c.init(defaultScope)};k.Sketch=function(f){this.attachFunction=f;this.options={pauseOnBlur:!1,globalKeyEvents:!1};this.onExit=this.onFrameEnd=this.onFrameStart=this.onLoop=this.onPause=this.onSetup=this.onLoad=b;this.params={};this.imageCache={pending:0,images:{},operaCache:{},add:function(c,f){if(!this.images[c]&&(d||(this.images[c]=null),f||(f=new Image,f.onload=function(c){return function(){c.pending--}}(this),this.pending++,f.src=c),this.images[c]=f,m.opera)){var a=n.createElement("div");a.appendChild(f);
a.style.position="absolute";a.style.opacity=0;a.style.width="1px";a.style.height="1px";this.operaCache[c]||(n.body.appendChild(a),this.operaCache[c]=a)}}};this.sourceCode=void 0;this.attach=function(c){if("function"===typeof this.attachFunction)this.attachFunction(c);else if(this.sourceCode){var f=(new Function("return ("+this.sourceCode+");"))();f(c);this.attachFunction=f}else throw"Unable to attach sketch to the processing instance";};this.toString=function(){var c,f;f="((function(Sketch) {\n"+
("var sketch = new Sketch(\n"+this.sourceCode+");\n");for(c in this.options)if(this.options.hasOwnProperty(c)){var a=this.options[c];f+="sketch.options."+c+" = "+("string"===typeof a?'"'+a+'"':""+a)+";\n"}for(c in this.imageCache)this.options.hasOwnProperty(c)&&(f+='sketch.imageCache.add("'+c+'");\n');return f+"return sketch;\n})(Processing.Sketch))"}};var l=k.loadSketchFromSources=function(f,c){function d(c,f){var b=new a;b.onreadystatechange=function(){if(4===b.readyState){var c;200!==b.status&&
0!==b.status?c="Invalid XHR status "+b.status:""===b.responseText&&(c="withCredentials"in new a&&!1===(new a).withCredentials&&"file:"===m.location.protocol?"XMLHttpRequest failure, possibly due to a same-origin policy violation. You can try loading this page in another browser, or load it from http://localhost using a local webserver. See the Processing.js README for a more detailed explanation of this problem and solutions.":"File is empty.");f(b.responseText,c)}};b.open("GET",c,!0);b.overrideMimeType&&
b.overrideMimeType("application/json");b.setRequestHeader("If-Modified-Since","Fri, 01 Jan 1960 00:00:00 GMT");b.send(null)}function b(c,a){function m(d,b){l[c]=d;++v;b&&p.push(a+" ==> "+b);if(v===h)if(0===p.length)try{return new k(f,l.join("\n"))}catch(md){throw console.log("Processing.js: Unable to execute pjs sketch."),md;}else throw"Processing.js: Unable to load pjs sketch files: "+p.join("\n");}if("#"===a.charAt(0)){var ca=n.getElementById(a.substring(1));ca?m(ca.text||ca.textContent):m("","Unable to load pjs sketch: element with id '"+
a.substring(1)+"' was not found")}else d(a,m)}for(var l=[],p=[],h=c.length,v=0,ga=0;ga<h;++ga)b(ga,c[ga])},p=function(){n.removeEventListener("DOMContentLoaded",p,!1);processingInstances=[];k.instances=processingInstances;for(var f=n.getElementsByTagName("canvas"),c,a=0,d=f.length;a<d;a++){var b=f[a].getAttribute("data-processing-sources");null===b&&(b=f[a].getAttribute("data-src"),null===b&&(b=f[a].getAttribute("datasrc")));if(b){c=b.split(/\s+/g);for(b=0;b<c.length;)c[b]?b++:c.splice(b,1);l(f[a],
c)}}f=n.getElementsByTagName("script");d=[];for(a=f.length-1;0<=a;a--)d.push(f[a]);a=0;for(b=d.length;a<b;a++)if(c=d[a],c.getAttribute&&(f=c.getAttribute("type"))&&("text/processing"===f.toLowerCase()||"application/processing"===f.toLowerCase())){var h=c.getAttribute("data-processing-target"),f=void 0;if(h)f=n.getElementById(h);else{for(h=c.nextSibling;h&&1!==h.nodeType;)h=h.nextSibling;h&&"canvas"===h.nodeName.toLowerCase()&&(f=h)}f&&(c.getAttribute("src")?(c=c.getAttribute("src").split(/\s+/),l(f,
c)):(c=c.textContent||c.text,new k(f,c)))}};n.addEventListener("DOMContentLoaded",p,!1);k.reload=function(){if(0<processingInstances.length)for(var f=processingInstances.length-1;0<=f;f--)processingInstances[f]&&processingInstances[f].exit();p()};k.disableInit=function(){n.removeEventListener("DOMContentLoaded",p,!1)};return k}},{}],7:[function(D,x,Q){x.exports=function(k,h){return null===k||null===h?null===k&&null===h:"string"===typeof k||"object"!==typeof k?k===h:k.equals instanceof Function?k.equals(h):
k===h}},{}],8:[function(D,x,Q){x.exports=function(k,h){if("string"===typeof k){for(var m=0,n=0;n<k.length;++n)m=31*m+k.charCodeAt(n)&4294967295;return m}if("object"!==typeof k)return k&4294967295;if(k.hashCode instanceof Function)return k.hashCode();k.$id===h&&(k.$id=Math.floor(65536*Math.random())-32768<<16|Math.floor(65536*Math.random()));return k.$id}},{}],9:[function(D,x,Q){x.exports=function(k){function h(a){var b=-1;this.hasNext=function(){return b+1<a.length};this.next=function(){return a[++b]};
this.remove=function(){a.splice(b--,1)}}function m(a){var b=[];a&&a.toArray&&(b=a.toArray());this.get=function(a){return b[a]};this.contains=function(a){return-1<this.indexOf(a)};this.indexOf=function(a){for(var f=0,l=b.length;f<l;++f)if(n(a,b[f]))return f;return-1};this.lastIndexOf=function(a){for(var f=b.length-1;0<=f;--f)if(n(a,b[f]))return f;return-1};this.add=function(){if(1===arguments.length)b.push(arguments[0]);else if(2===arguments.length){var a=arguments[0];if("number"===typeof a)if(0<=
a&&a<=b.length)b.splice(a,0,arguments[1]);else throw a+" is not a valid index";else throw typeof a+" is not a number";}else throw"Please use the proper number of parameters.";};this.addAll=function(a,f){var l;if("number"===typeof a){if(0>a||a>b.length)throw"Index out of bounds for addAll: "+a+" greater or equal than "+b.length;for(l=new ObjectIterator(f);l.hasNext();)b.splice(a++,0,l.next())}else for(l=new ObjectIterator(a);l.hasNext();)b.push(l.next())};this.set=function(){if(2===arguments.length){var a=
arguments[0];if("number"===typeof a)if(0<=a&&a<b.length)b.splice(a,1,arguments[1]);else throw a+" is not a valid index.";else throw typeof a+" is not a number";}else throw"Please use the proper number of parameters.";};this.size=function(){return b.length};this.clear=function(){b.length=0};this.remove=function(a){if("number"===typeof a)return b.splice(a,1)[0];a=this.indexOf(a);return-1<a?(b.splice(a,1),!0):!1};this.removeAll=function(a){var f,b,p,r=new m;r.addAll(this);this.clear();for(b=f=0;f<r.size();f++)p=
r.get(f),a.contains(p)||this.add(b++,p);return this.size()<r.size()?!0:!1};this.isEmpty=function(){return!b.length};this.clone=function(){return new m(this)};this.toArray=function(){return b.slice(0)};this.iterator=function(){return new h(b)}}var n=k.virtEquals;return m}},{}],10:[function(D,x,Q){x.exports=function(k,h){var m=function(n){this.code="string"===typeof n&&1===n.length?n.charCodeAt(0):"number"===typeof n?n:n instanceof m?n:NaN;return k[this.code]===h?k[this.code]=this:k[this.code]};m.prototype.toString=
function(){return String.fromCharCode(this.code)};m.prototype.valueOf=function(){return this.code};return m}({})},{}],11:[function(D,x,Q){x.exports=function(k){function h(){function a(f){f=m(f)%c.length;return 0>f?c.length+f:f}function b(){if(!(k<=r*c.length)){for(var f=[],b=0;b<c.length;++b)void 0!==c[b]&&(f=f.concat(c[b]));b=2*c.length;c=[];c.length=b;for(b=0;b<f.length;++b){var d=a(f[b].key),l=c[d];void 0===l&&(c[d]=l=[]);l.push(f[b])}}}function d(f,a){function b(){for(;!p;)if(++l,d>=c.length)p=
!0;else if(void 0===c[d]||l>=c[d].length)l=-1,++d;else break}var d=0,l=-1,p=!1,r;this.hasNext=function(){return!p};this.next=function(){r=f(c[d][l]);b();return r};this.remove=function(){void 0!==r&&(a(r),--l,b())};b()}function f(c,f,a){this.clear=function(){ca.clear()};this.contains=function(c){return f(c)};this.containsAll=function(c){for(c=c.iterator();c.hasNext();)if(!this.contains(c.next()))return!1;return!0};this.isEmpty=function(){return ca.isEmpty()};this.iterator=function(){return new d(c,
a)};this.remove=function(c){return this.contains(c)?(a(c),!0):!1};this.removeAll=function(c){for(c=c.iterator();c.hasNext();){var f=c.next();this.contains(f)&&a(f)}return!0};this.retainAll=function(c){for(var f=this.iterator(),b=[];f.hasNext();){var d=f.next();c.contains(d)||b.push(d)}for(c=0;c<b.length;++c)a(b[c]);return 0<b.length};this.size=function(){return ca.size()};this.toArray=function(){for(var c=[],f=this.iterator();f.hasNext();)c.push(f.next());return c}}function l(c){this._isIn=function(f){return f===
ca&&void 0===c.removed};this.equals=function(f){return n(c.key,f.getKey())};this.getKey=function(){return c.key};this.getValue=function(){return c.value};this.hashCode=function(f){return m(c.key)};this.setValue=function(f){var a=c.value;c.value=f;return a}}if(1===arguments.length&&arguments[0]instanceof h)return arguments[0].clone();var p=0<arguments.length?arguments[0]:16,r=1<arguments.length?arguments[1]:0.75,c=[];c.length=p;var k=0,ca=this;this.clear=function(){k=0;c=[];c.length=p};this.clone=
function(){var c=new h;c.putAll(this);return c};this.containsKey=function(f){var b=a(f),b=c[b];if(void 0===b)return!1;for(var d=0;d<b.length;++d)if(n(b[d].key,f))return!0;return!1};this.containsValue=function(f){for(var a=0;a<c.length;++a){var b=c[a];if(void 0!==b)for(var d=0;d<b.length;++d)if(n(b[d].value,f))return!0}return!1};this.entrySet=function(){return new f(function(c){return new l(c)},function(c){return c instanceof l&&c._isIn(ca)},function(c){return ca.remove(c.getKey())})};this.get=function(f){var b=
a(f),b=c[b];if(void 0===b)return null;for(var d=0;d<b.length;++d)if(n(b[d].key,f))return b[d].value;return null};this.isEmpty=function(){return 0===k};this.keySet=function(){return new f(function(c){return c.key},function(c){return ca.containsKey(c)},function(c){return ca.remove(c)})};this.values=function(){return new f(function(c){return c.value},function(c){return ca.containsValue(c)},function(c){return ca.removeByValue(c)})};this.put=function(f,d){var l=a(f),p=c[l];if(void 0===p)return++k,c[l]=
[{key:f,value:d}],b(),null;for(l=0;l<p.length;++l)if(n(p[l].key,f)){var r=p[l].value;p[l].value=d;return r}++k;p.push({key:f,value:d});b();return null};this.putAll=function(c){for(c=c.entrySet().iterator();c.hasNext();){var f=c.next();this.put(f.getKey(),f.getValue())}};this.remove=function(f){var b=a(f),d=c[b];if(void 0===d)return null;for(var l=0;l<d.length;++l)if(n(d[l].key,f))return--k,f=d[l].value,d[l].removed=!0,1<d.length?d.splice(l,1):c[b]=void 0,f;return null};this.removeByValue=function(f){var a,
b,d,l;for(a in c)if(c.hasOwnProperty(a))for(b=0,d=c[a].length;b<d;b++)if(l=c[a][b],l.value===f)return c[a].splice(b,1),!0;return!1};this.size=function(){return k}}var m=k.virtHashCode,n=k.virtEquals;return h}},{}],12:[function(D,x,Q){x.exports=function(k,h){function m(b,d){b===h&&(b="");this.name=b;d===h&&(d=0);this.size=d;this.glyph=!1;this.descent=this.ascent=0;this.leading=1.2*d;var f=b.indexOf(" Italic Bold");-1!==f&&(b=b.substring(0,f));this.style="normal";f=b.indexOf(" Italic");-1!==f&&(b=b.substring(0,
f),this.style="italic");this.weight="normal";f=b.indexOf(" Bold");-1!==f&&(b=b.substring(0,f),this.weight="bold");this.family="sans-serif";if(b!==h)switch(b){case "sans-serif":case "serif":case "monospace":case "fantasy":case "cursive":this.family=b;break;default:this.family='"'+b+'", sans-serif'}var f=this.size/250,l=n.createElement("canvas");l.width=500;l.height=500;l.style.opacity=0;var p=this.getCSSDefinition("250px","normal"),r=l.getContext("2d");r.font=p;l.width=r.measureText("dbflkhyjqpg").width;
r.font=p;p=n.createElement("div");p.style.position="absolute";p.style.opacity=0;p.style.fontFamily='"'+this.name+'"';p.style.fontSize="250px";p.innerHTML="dbflkhyjqpg<br/>dbflkhyjqpg";n.body.appendChild(p);var c=l.width,k=l.height,l=k/2;r.fillStyle="white";r.fillRect(0,0,c,k);r.fillStyle="black";r.fillText("dbflkhyjqpg",0,l);for(var k=r.getImageData(0,0,c,k).data,m=0,G=4*c,A=k.length;++m<A&&255===k[m];)a();c=Math.round(m/G);for(m=A-1;0<--m&&255===k[m];)a();k=Math.round(m/G);this.ascent=f*(l-c);this.descent=
f*(k-l);n.defaultView.getComputedStyle&&(l=n.defaultView.getComputedStyle(p,null).getPropertyValue("height"),l=f*l.replace("px",""),l>=2*this.size&&(this.leading=Math.round(l/2)));n.body.removeChild(p);f=this.caching?r:void 0;this.context2d=f;this.css=this.getCSSDefinition();this.context2d&&(this.context2d.font=this.css)}var n=k.Browser.document,a=k.noop;m.prototype.caching=!0;m.prototype.getCSSDefinition=function(a,d){a===h&&(a=this.size+"px");d===h&&(d=this.leading+"px");return[this.style,"normal",
this.weight,a+"/"+d,this.family].join(" ")};m.prototype.measureTextWidth=function(a){return this.context2d.measureText(a).width};m.prototype.measureTextWidthFallback=function(a){var d=n.createElement("canvas").getContext("2d");d.font=this.css;return d.measureText(a).width};m.PFontCache={length:0};m.get=function(a,d){d=(10*d+0.5|0)/10;var f=m.PFontCache,l=a+"/"+d;if(!f[l]){f[l]=new m(a,d);f.length++;if(50===f.length){m.prototype.measureTextWidth=m.prototype.measureTextWidthFallback;m.prototype.caching=
!1;for(var p in f)"length"!==p&&(f[p].context2d=null);return new m(a,d)}if(400===f.length)return m.PFontCache={},m.get=m.getFallback,new m(a,d)}return f[l]};m.getFallback=function(a,d){return new m(a,d)};m.list=function(){return["sans-serif","serif","monospace","fantasy","cursive"]};m.preloading={template:{},initialized:!1,initialize:function(){var a=n.createElement("style");a.setAttribute("type","text/css");a.innerHTML='@font-face {\n  font-family: "PjsEmptyFont";\n  src: url(\'data:application/x-font-ttf;base64,'+
function(){return"#E3KAI2wAgT1MvMg7Eo3VmNtYX7ABi3CxnbHlm7Abw3kaGVhZ7ACs3OGhoZWE7A53CRobXR47AY3AGbG9jYQ7G03Bm1heH7ABC3CBuYW1l7Ae3AgcG9zd7AI3AE#B3AQ2kgTY18PPPUACwAg3ALSRoo3#yld0xg32QAB77#E777773B#E3C#I#Q77773E#Q7777777772CMAIw7AB77732B#M#Q3wAB#g3B#E#E2BB//82BB////w#B7#gAEg3E77x2B32B#E#Q#MTcBAQ32gAe#M#QQJ#E32M#QQJ#I#g32Q77#".replace(/[#237]/g,function(a){return"AAAAAAAA".substr(~~a?7-a:6)})}()+"')\n       format('truetype');\n}";n.head.appendChild(a);a=n.createElement("span");a.style.cssText='position: absolute; top: 0; left: 0; opacity: 0; font-family: "PjsEmptyFont", fantasy;';
a.innerHTML="AAAAAAAA";n.body.appendChild(a);this.template=a;this.initialized=!0},getElementWidth:function(a){return n.defaultView.getComputedStyle(a,"").getPropertyValue("width")},timeAttempted:0,pending:function(a){this.initialized||this.initialize();for(var d,f,l=this.getElementWidth(this.template),p=0;p<this.fontList.length;p++){d=this.fontList[p];f=this.getElementWidth(d);if(4E3>this.timeAttempted&&f===l)return this.timeAttempted+=a,!0;n.body.removeChild(d);this.fontList.splice(p--,1);this.timeAttempted=
0}return 0===this.fontList.length?!1:!0},fontList:[],addedList:{},add:function(a){this.initialized||this.initialize();var d="object"===typeof a?a.fontFace:a;a="object"===typeof a?a.url:a;if(!this.addedList[d]){var f=n.createElement("style");f.setAttribute("type","text/css");f.innerHTML="@font-face{\n  font-family: '"+d+"';\n  src:  url('"+a+"');\n}\n";n.head.appendChild(f);this.addedList[d]=!0;a=n.createElement("span");a.style.cssText="position: absolute; top: 0; left: 0; opacity: 0;";a.style.fontFamily=
'"'+d+'", "PjsEmptyFont", fantasy';a.innerHTML="AAAAAAAA";n.body.appendChild(a);this.fontList.push(a)}}};return m}},{}],13:[function(D,x,Q){x.exports=function(k,h){var m=k.p,n=function(){0===arguments.length?this.reset():1===arguments.length&&arguments[0]instanceof n?this.set(arguments[0].array()):6===arguments.length&&this.set(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])};n.prototype={set:function(){if(6===arguments.length){var a=arguments;this.set([a[0],a[1],a[2],
a[3],a[4],a[5]])}else 1===arguments.length&&arguments[0]instanceof n?this.elements=arguments[0].array():1===arguments.length&&arguments[0]instanceof Array&&(this.elements=arguments[0].slice())},get:function(){var a=new n;a.set(this.elements);return a},reset:function(){this.set([1,0,0,0,1,0])},array:function(){return this.elements.slice()},translate:function(a,b){this.elements[2]=a*this.elements[0]+b*this.elements[1]+this.elements[2];this.elements[5]=a*this.elements[3]+b*this.elements[4]+this.elements[5]},
invTranslate:function(a,b){this.translate(-a,-b)},transpose:function(){},mult:function(a,b){var d,f;a instanceof PVector?(d=a.x,f=a.y,b||(b=new PVector)):a instanceof Array&&(d=a[0],f=a[1],b||(b=[]));b instanceof Array?(b[0]=this.elements[0]*d+this.elements[1]*f+this.elements[2],b[1]=this.elements[3]*d+this.elements[4]*f+this.elements[5]):b instanceof PVector&&(b.x=this.elements[0]*d+this.elements[1]*f+this.elements[2],b.y=this.elements[3]*d+this.elements[4]*f+this.elements[5],b.z=0);return b},multX:function(a,
b){return a*this.elements[0]+b*this.elements[1]+this.elements[2]},multY:function(a,b){return a*this.elements[3]+b*this.elements[4]+this.elements[5]},skewX:function(a){this.apply(1,0,1,a,0,0)},skewY:function(a){this.apply(1,0,1,0,a,0)},shearX:function(a){this.apply(1,0,1,Math.tan(a),0,0)},shearY:function(a){this.apply(1,0,1,0,Math.tan(a),0)},determinant:function(){return this.elements[0]*this.elements[4]-this.elements[1]*this.elements[3]},invert:function(){var a=this.determinant();if(Math.abs(a)>PConstants.MIN_INT){var b=
this.elements[0],d=this.elements[1],f=this.elements[2],l=this.elements[3],p=this.elements[4],r=this.elements[5];this.elements[0]=p/a;this.elements[3]=-l/a;this.elements[1]=-d/a;this.elements[4]=b/a;this.elements[2]=(d*r-p*f)/a;this.elements[5]=(l*f-b*r)/a;return!0}return!1},scale:function(a,b){a&&!b&&(b=a);a&&b&&(this.elements[0]*=a,this.elements[1]*=b,this.elements[3]*=a,this.elements[4]*=b)},invScale:function(a,b){a&&!b&&(b=a);this.scale(1/a,1/b)},apply:function(){var a;1===arguments.length&&arguments[0]instanceof
n?a=arguments[0].array():6===arguments.length?a=Array.prototype.slice.call(arguments):1===arguments.length&&arguments[0]instanceof Array&&(a=arguments[0]);for(var b=[0,0,this.elements[2],0,0,this.elements[5]],d=0,f=0;2>f;f++)for(var l=0;3>l;l++,d++)b[d]+=this.elements[3*f+0]*a[l+0]+this.elements[3*f+1]*a[l+3];this.elements=b.slice()},preApply:function(){var a;1===arguments.length&&arguments[0]instanceof n?a=arguments[0].array():6===arguments.length?a=Array.prototype.slice.call(arguments):1===arguments.length&&
arguments[0]instanceof Array&&(a=arguments[0]);var b=[0,0,a[2],0,0,a[5]];b[2]=a[2]+this.elements[2]*a[0]+this.elements[5]*a[1];b[5]=a[5]+this.elements[2]*a[3]+this.elements[5]*a[4];b[0]=this.elements[0]*a[0]+this.elements[3]*a[1];b[3]=this.elements[0]*a[3]+this.elements[3]*a[4];b[1]=this.elements[1]*a[0]+this.elements[4]*a[1];b[4]=this.elements[1]*a[3]+this.elements[4]*a[4];this.elements=b.slice()},rotate:function(a){var b=Math.cos(a);a=Math.sin(a);var d=this.elements[0],f=this.elements[1];this.elements[0]=
b*d+a*f;this.elements[1]=-a*d+b*f;d=this.elements[3];f=this.elements[4];this.elements[3]=b*d+a*f;this.elements[4]=-a*d+b*f},rotateZ:function(a){this.rotate(a)},invRotateZ:function(a){this.rotateZ(a-Math.PI)},print:function(){var a=printMatrixHelper(this.elements),a=""+m.nfs(this.elements[0],a,4)+" "+m.nfs(this.elements[1],a,4)+" "+m.nfs(this.elements[2],a,4)+"\n"+m.nfs(this.elements[3],a,4)+" "+m.nfs(this.elements[4],a,4)+" "+m.nfs(this.elements[5],a,4)+"\n\n";m.println(a)}};return n}},{}],14:[function(D,
x,Q){x.exports=function(k,h){var m=k.p,n=function(){this.reset()};n.prototype={set:function(){16===arguments.length?this.elements=Array.prototype.slice.call(arguments):1===arguments.length&&arguments[0]instanceof n?this.elements=arguments[0].array():1===arguments.length&&arguments[0]instanceof Array&&(this.elements=arguments[0].slice())},get:function(){var a=new n;a.set(this.elements);return a},reset:function(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]},array:function(){return this.elements.slice()},
translate:function(a,b,d){d===h&&(d=0);this.elements[3]+=a*this.elements[0]+b*this.elements[1]+d*this.elements[2];this.elements[7]+=a*this.elements[4]+b*this.elements[5]+d*this.elements[6];this.elements[11]+=a*this.elements[8]+b*this.elements[9]+d*this.elements[10];this.elements[15]+=a*this.elements[12]+b*this.elements[13]+d*this.elements[14]},transpose:function(){var a=this.elements[4];this.elements[4]=this.elements[1];this.elements[1]=a;a=this.elements[8];this.elements[8]=this.elements[2];this.elements[2]=
a;a=this.elements[6];this.elements[6]=this.elements[9];this.elements[9]=a;a=this.elements[3];this.elements[3]=this.elements[12];this.elements[12]=a;a=this.elements[7];this.elements[7]=this.elements[13];this.elements[13]=a;a=this.elements[11];this.elements[11]=this.elements[14];this.elements[14]=a},mult:function(a,b){var d,f,l,p;a instanceof PVector?(d=a.x,f=a.y,l=a.z,p=1,b||(b=new PVector)):a instanceof Array&&(d=a[0],f=a[1],l=a[2],p=a[3]||1,!b||3!==b.length&&4!==b.length)&&(b=[0,0,0]);b instanceof
Array&&(3===b.length?(b[0]=this.elements[0]*d+this.elements[1]*f+this.elements[2]*l+this.elements[3],b[1]=this.elements[4]*d+this.elements[5]*f+this.elements[6]*l+this.elements[7],b[2]=this.elements[8]*d+this.elements[9]*f+this.elements[10]*l+this.elements[11]):4===b.length&&(b[0]=this.elements[0]*d+this.elements[1]*f+this.elements[2]*l+this.elements[3]*p,b[1]=this.elements[4]*d+this.elements[5]*f+this.elements[6]*l+this.elements[7]*p,b[2]=this.elements[8]*d+this.elements[9]*f+this.elements[10]*l+
this.elements[11]*p,b[3]=this.elements[12]*d+this.elements[13]*f+this.elements[14]*l+this.elements[15]*p));b instanceof PVector&&(b.x=this.elements[0]*d+this.elements[1]*f+this.elements[2]*l+this.elements[3],b.y=this.elements[4]*d+this.elements[5]*f+this.elements[6]*l+this.elements[7],b.z=this.elements[8]*d+this.elements[9]*f+this.elements[10]*l+this.elements[11]);return b},preApply:function(){var a;1===arguments.length&&arguments[0]instanceof n?a=arguments[0].array():16===arguments.length?a=Array.prototype.slice.call(arguments):
1===arguments.length&&arguments[0]instanceof Array&&(a=arguments[0]);for(var b=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],d=0,f=0;4>f;f++)for(var l=0;4>l;l++,d++)b[d]+=this.elements[l+0]*a[4*f+0]+this.elements[l+4]*a[4*f+1]+this.elements[l+8]*a[4*f+2]+this.elements[l+12]*a[4*f+3];this.elements=b.slice()},apply:function(){var a;1===arguments.length&&arguments[0]instanceof n?a=arguments[0].array():16===arguments.length?a=Array.prototype.slice.call(arguments):1===arguments.length&&arguments[0]instanceof Array&&
(a=arguments[0]);for(var b=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],d=0,f=0;4>f;f++)for(var l=0;4>l;l++,d++)b[d]+=this.elements[4*f+0]*a[l+0]+this.elements[4*f+1]*a[l+4]+this.elements[4*f+2]*a[l+8]+this.elements[4*f+3]*a[l+12];this.elements=b.slice()},rotate:function(a,b,d,f){if(d){var l=Math.cos(a);a=Math.sin(a);var p=1-l;this.apply(p*b*b+l,p*b*d-a*f,p*b*f+a*d,0,p*b*d+a*f,p*d*d+l,p*d*f-a*b,0,p*b*f-a*d,p*d*f+a*b,p*f*f+l,0,0,0,0,1)}else this.rotateZ(a)},invApply:function(){inverseCopy===h&&(inverseCopy=new n);
var a=arguments;inverseCopy.set(a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7],a[8],a[9],a[10],a[11],a[12],a[13],a[14],a[15]);if(!inverseCopy.invert())return!1;this.preApply(inverseCopy);return!0},rotateX:function(a){var b=Math.cos(a);a=Math.sin(a);this.apply([1,0,0,0,0,b,-a,0,0,a,b,0,0,0,0,1])},rotateY:function(a){var b=Math.cos(a);a=Math.sin(a);this.apply([b,0,a,0,0,1,0,0,-a,0,b,0,0,0,0,1])},rotateZ:function(a){var b=Math.cos(a);a=Math.sin(a);this.apply([b,-a,0,0,a,b,0,0,0,0,1,0,0,0,0,1])},scale:function(a,
b,d){!a||b||d?a&&(b&&!d)&&(d=1):b=d=a;a&&(b&&d)&&(this.elements[0]*=a,this.elements[1]*=b,this.elements[2]*=d,this.elements[4]*=a,this.elements[5]*=b,this.elements[6]*=d,this.elements[8]*=a,this.elements[9]*=b,this.elements[10]*=d,this.elements[12]*=a,this.elements[13]*=b,this.elements[14]*=d)},skewX:function(a){a=Math.tan(a);this.apply(1,a,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},skewY:function(a){a=Math.tan(a);this.apply(1,0,0,0,a,1,0,0,0,0,1,0,0,0,0,1)},shearX:function(a){a=Math.tan(a);this.apply(1,a,0,0,
0,1,0,0,0,0,1,0,0,0,0,1)},shearY:function(a){a=Math.tan(a);this.apply(1,0,0,0,a,1,0,0,0,0,1,0,0,0,0,1)},multX:function(a,b,d,f){return d?f?this.elements[0]*a+this.elements[1]*b+this.elements[2]*d+this.elements[3]*f:this.elements[0]*a+this.elements[1]*b+this.elements[2]*d+this.elements[3]:this.elements[0]*a+this.elements[1]*b+this.elements[3]},multY:function(a,b,d,f){return d?f?this.elements[4]*a+this.elements[5]*b+this.elements[6]*d+this.elements[7]*f:this.elements[4]*a+this.elements[5]*b+this.elements[6]*
d+this.elements[7]:this.elements[4]*a+this.elements[5]*b+this.elements[7]},multZ:function(a,b,d,f){return f?this.elements[8]*a+this.elements[9]*b+this.elements[10]*d+this.elements[11]*f:this.elements[8]*a+this.elements[9]*b+this.elements[10]*d+this.elements[11]},multW:function(a,b,d,f){return f?this.elements[12]*a+this.elements[13]*b+this.elements[14]*d+this.elements[15]*f:this.elements[12]*a+this.elements[13]*b+this.elements[14]*d+this.elements[15]},invert:function(){var a=this.elements[0]*this.elements[5]-
this.elements[1]*this.elements[4],b=this.elements[0]*this.elements[6]-this.elements[2]*this.elements[4],d=this.elements[0]*this.elements[7]-this.elements[3]*this.elements[4],f=this.elements[1]*this.elements[6]-this.elements[2]*this.elements[5],l=this.elements[1]*this.elements[7]-this.elements[3]*this.elements[5],p=this.elements[2]*this.elements[7]-this.elements[3]*this.elements[6],r=this.elements[8]*this.elements[13]-this.elements[9]*this.elements[12],c=this.elements[8]*this.elements[14]-this.elements[10]*
this.elements[12],h=this.elements[8]*this.elements[15]-this.elements[11]*this.elements[12],k=this.elements[9]*this.elements[14]-this.elements[10]*this.elements[13],m=this.elements[9]*this.elements[15]-this.elements[11]*this.elements[13],n=this.elements[10]*this.elements[15]-this.elements[11]*this.elements[14],x=a*n-b*m+d*k+f*h-l*c+p*r;if(1E-9>=Math.abs(x))return!1;var v=[];v[0]=+this.elements[5]*n-this.elements[6]*m+this.elements[7]*k;v[4]=-this.elements[4]*n+this.elements[6]*h-this.elements[7]*c;
v[8]=+this.elements[4]*m-this.elements[5]*h+this.elements[7]*r;v[12]=-this.elements[4]*k+this.elements[5]*c-this.elements[6]*r;v[1]=-this.elements[1]*n+this.elements[2]*m-this.elements[3]*k;v[5]=+this.elements[0]*n-this.elements[2]*h+this.elements[3]*c;v[9]=-this.elements[0]*m+this.elements[1]*h-this.elements[3]*r;v[13]=+this.elements[0]*k-this.elements[1]*c+this.elements[2]*r;v[2]=+this.elements[13]*p-this.elements[14]*l+this.elements[15]*f;v[6]=-this.elements[12]*p+this.elements[14]*d-this.elements[15]*
b;v[10]=+this.elements[12]*l-this.elements[13]*d+this.elements[15]*a;v[14]=-this.elements[12]*f+this.elements[13]*b-this.elements[14]*a;v[3]=-this.elements[9]*p+this.elements[10]*l-this.elements[11]*f;v[7]=+this.elements[8]*p-this.elements[10]*d+this.elements[11]*b;v[11]=-this.elements[8]*l+this.elements[9]*d-this.elements[11]*a;v[15]=+this.elements[8]*f-this.elements[9]*b+this.elements[10]*a;a=1/x;v[0]*=a;v[1]*=a;v[2]*=a;v[3]*=a;v[4]*=a;v[5]*=a;v[6]*=a;v[7]*=a;v[8]*=a;v[9]*=a;v[10]*=a;v[11]*=a;v[12]*=
a;v[13]*=a;v[14]*=a;v[15]*=a;this.elements=v.slice();return!0},toString:function(){for(var a="",b=0;15>b;b++)a+=this.elements[b]+", ";return a+=this.elements[15]},print:function(){var a=printMatrixHelper(this.elements),a=""+m.nfs(this.elements[0],a,4)+" "+m.nfs(this.elements[1],a,4)+" "+m.nfs(this.elements[2],a,4)+" "+m.nfs(this.elements[3],a,4)+"\n"+m.nfs(this.elements[4],a,4)+" "+m.nfs(this.elements[5],a,4)+" "+m.nfs(this.elements[6],a,4)+" "+m.nfs(this.elements[7],a,4)+"\n"+m.nfs(this.elements[8],
a,4)+" "+m.nfs(this.elements[9],a,4)+" "+m.nfs(this.elements[10],a,4)+" "+m.nfs(this.elements[11],a,4)+"\n"+m.nfs(this.elements[12],a,4)+" "+m.nfs(this.elements[13],a,4)+" "+m.nfs(this.elements[14],a,4)+" "+m.nfs(this.elements[15],a,4)+"\n\n";m.println(a)},invTranslate:function(a,b,d){this.preApply(1,0,0,-a,0,1,0,-b,0,0,1,-d,0,0,0,1)},invRotateX:function(a){var b=Math.cos(-a);a=Math.sin(-a);this.preApply([1,0,0,0,0,b,-a,0,0,a,b,0,0,0,0,1])},invRotateY:function(a){var b=Math.cos(-a);a=Math.sin(-a);
this.preApply([b,0,a,0,0,1,0,0,-a,0,b,0,0,0,0,1])},invRotateZ:function(a){var b=Math.cos(-a);a=Math.sin(-a);this.preApply([b,-a,0,0,a,b,0,0,0,0,1,0,0,0,0,1])},invScale:function(a,b,d){this.preApply([1/a,0,0,0,0,1/b,0,0,0,0,1/d,0,0,0,0,1])}};return n}},{}],15:[function(D,x,Q){x.exports=function(k){var h=k.PConstants,m=k.PMatrix2D,n=k.PMatrix3D;k=function(a){this.family=a||h.GROUP;this.style=this.visible=!0;this.children=[];this.nameTable=[];this.params=[];this.name="";this.parent=this.height=this.width=
this.close=this.kind=this.matrix=this.image=null};k.prototype={isVisible:function(){return this.visible},setVisible:function(a){this.visible=a},disableStyle:function(){this.style=!1;for(var a=0,b=this.children.length;a<b;a++)this.children[a].disableStyle()},enableStyle:function(){this.style=!0;for(var a=0,b=this.children.length;a<b;a++)this.children[a].enableStyle()},getFamily:function(){return this.family},getWidth:function(){return this.width},getHeight:function(){return this.height},setName:function(a){this.name=
a},getName:function(){return this.name},draw:function(a){if(!a)throw"render context missing for draw() in PShape";this.visible&&(this.pre(a),this.drawImpl(a),this.post(a))},drawImpl:function(a){this.family===h.GROUP?this.drawGroup(a):this.family===h.PRIMITIVE?this.drawPrimitive(a):this.family===h.GEOMETRY?this.drawGeometry(a):this.family===h.PATH&&this.drawPath(a)},drawPath:function(a){var b,d;if(0!==this.vertices.length){a.beginShape();if(0===this.vertexCodes.length)if(2===this.vertices[0].length)for(b=
0,d=this.vertices.length;b<d;b++)a.vertex(this.vertices[b][0],this.vertices[b][1]);else for(b=0,d=this.vertices.length;b<d;b++)a.vertex(this.vertices[b][0],this.vertices[b][1],this.vertices[b][2]);else{var f=0;if(2===this.vertices[0].length)for(b=0,d=this.vertexCodes.length;b<d;b++)this.vertexCodes[b]===h.VERTEX?(a.vertex(this.vertices[f][0],this.vertices[f][1],this.vertices[f].moveTo),a.breakShape=!1,f++):this.vertexCodes[b]===h.BEZIER_VERTEX?(a.bezierVertex(this.vertices[f+0][0],this.vertices[f+
0][1],this.vertices[f+1][0],this.vertices[f+1][1],this.vertices[f+2][0],this.vertices[f+2][1]),f+=3):this.vertexCodes[b]===h.CURVE_VERTEX?(a.curveVertex(this.vertices[f][0],this.vertices[f][1]),f++):this.vertexCodes[b]===h.BREAK&&(a.breakShape=!0);else for(b=0,d=this.vertexCodes.length;b<d;b++)this.vertexCodes[b]===h.VERTEX?(a.vertex(this.vertices[f][0],this.vertices[f][1],this.vertices[f][2]),!0===this.vertices[f].moveTo?vertArray[vertArray.length-1].moveTo=!0:!1===this.vertices[f].moveTo&&(vertArray[vertArray.length-
1].moveTo=!1),a.breakShape=!1):this.vertexCodes[b]===h.BEZIER_VERTEX?(a.bezierVertex(this.vertices[f+0][0],this.vertices[f+0][1],this.vertices[f+0][2],this.vertices[f+1][0],this.vertices[f+1][1],this.vertices[f+1][2],this.vertices[f+2][0],this.vertices[f+2][1],this.vertices[f+2][2]),f+=3):this.vertexCodes[b]===h.CURVE_VERTEX?(a.curveVertex(this.vertices[f][0],this.vertices[f][1],this.vertices[f][2]),f++):this.vertexCodes[b]===h.BREAK&&(a.breakShape=!0)}a.endShape(this.close?h.CLOSE:h.OPEN)}},drawGeometry:function(a){var b,
d;a.beginShape(this.kind);if(this.style)for(b=0,d=this.vertices.length;b<d;b++)a.vertex(this.vertices[b]);else for(b=0,d=this.vertices.length;b<d;b++){var f=this.vertices[b];0===f[2]?a.vertex(f[0],f[1]):a.vertex(f[0],f[1],f[2])}a.endShape()},drawGroup:function(a){for(var b=0,d=this.children.length;b<d;b++)this.children[b].draw(a)},drawPrimitive:function(a){if(this.kind===h.POINT)a.point(this.params[0],this.params[1]);else if(this.kind===h.LINE)4===this.params.length?a.line(this.params[0],this.params[1],
this.params[2],this.params[3]):a.line(this.params[0],this.params[1],this.params[2],this.params[3],this.params[4],this.params[5]);else if(this.kind===h.TRIANGLE)a.triangle(this.params[0],this.params[1],this.params[2],this.params[3],this.params[4],this.params[5]);else if(this.kind===h.QUAD)a.quad(this.params[0],this.params[1],this.params[2],this.params[3],this.params[4],this.params[5],this.params[6],this.params[7]);else if(this.kind===h.RECT)if(null!==this.image){var b=imageModeConvert;a.imageMode(h.CORNER);
a.image(this.image,this.params[0],this.params[1],this.params[2],this.params[3]);imageModeConvert=b}else b=a.curRectMode,a.rectMode(h.CORNER),a.rect(this.params[0],this.params[1],this.params[2],this.params[3]),a.curRectMode=b;else this.kind===h.ELLIPSE?(b=a.curEllipseMode,a.ellipseMode(h.CORNER),a.ellipse(this.params[0],this.params[1],this.params[2],this.params[3]),a.curEllipseMode=b):this.kind===h.ARC?(b=curEllipseMode,a.ellipseMode(h.CORNER),a.arc(this.params[0],this.params[1],this.params[2],this.params[3],
this.params[4],this.params[5]),curEllipseMode=b):this.kind===h.BOX?1===this.params.length?a.box(this.params[0]):a.box(this.params[0],this.params[1],this.params[2]):this.kind===h.SPHERE&&a.sphere(this.params[0])},pre:function(a){this.matrix&&(a.pushMatrix(),a.transform(this.matrix));this.style&&(a.pushStyle(),this.styles(a))},post:function(a){this.matrix&&a.popMatrix();this.style&&a.popStyle()},styles:function(a){this.stroke?(a.stroke(this.strokeColor),a.strokeWeight(this.strokeWeight),a.strokeCap(this.strokeCap),
a.strokeJoin(this.strokeJoin)):a.noStroke();this.fill?a.fill(this.fillColor):a.noFill()},getChild:function(a){var b,d;if("number"===typeof a)return this.children[a];var f;if(""===a||this.name===a)return this;if(0<this.nameTable.length){b=0;for(d=this.nameTable.length;b<d||f;b++)if(this.nameTable[b].getName===a){f=this.nameTable[b];break}if(f)return f}b=0;for(d=this.children.length;b<d;b++)if(f=this.children[b].getChild(a))return f;return null},getChildCount:function(){return this.children.length},
addChild:function(a){this.children.push(a);a.parent=this;null!==a.getName()&&this.addName(a.getName(),a)},addName:function(a,b){null!==this.parent?this.parent.addName(a,b):this.nameTable.push([a,b])},translate:function(){2===arguments.length?(this.checkMatrix(2),this.matrix.translate(arguments[0],arguments[1])):(this.checkMatrix(3),this.matrix.translate(arguments[0],arguments[1],0))},checkMatrix:function(a){null===this.matrix?this.matrix=2===a?new m:new n:3===a&&this.matrix instanceof m&&(this.matrix=
new n)},rotateX:function(a){this.rotate(a,1,0,0)},rotateY:function(a){this.rotate(a,0,1,0)},rotateZ:function(a){this.rotate(a,0,0,1)},rotate:function(){1===arguments.length?(this.checkMatrix(2),this.matrix.rotate(arguments[0])):(this.checkMatrix(3),this.matrix.rotate(arguments[0],arguments[1],arguments[2],arguments[3]))},scale:function(){2===arguments.length?(this.checkMatrix(2),this.matrix.scale(arguments[0],arguments[1])):3===arguments.length?(this.checkMatrix(2),this.matrix.scale(arguments[0],
arguments[1],arguments[2])):(this.checkMatrix(2),this.matrix.scale(arguments[0]))},resetMatrix:function(){this.checkMatrix(2);this.matrix.reset()},applyMatrix:function(a){1===arguments.length?this.applyMatrix(a.elements[0],a.elements[1],0,a.elements[2],a.elements[3],a.elements[4],0,a.elements[5],0,0,1,0,0,0,0,1):6===arguments.length?(this.checkMatrix(2),this.matrix.apply(arguments[0],arguments[1],arguments[2],0,arguments[3],arguments[4],arguments[5],0,0,0,1,0,0,0,0,1)):16===arguments.length&&(this.checkMatrix(3),
this.matrix.apply(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5],arguments[6],arguments[7],arguments[8],arguments[9],arguments[10],arguments[11],arguments[12],arguments[13],arguments[14],arguments[15]))}};return k}},{}],16:[function(D,x,Q){x.exports=function(k){var h=k.CommonFunctions,m=k.PConstants,n=k.PShape,a=k.XMLElement,b=k.colors,d=function(){n.call(this);if(1===arguments.length){if(this.element=arguments[0],this.vertexCodes=[],this.vertices=[],this.opacity=1,
this.stroke=!1,this.strokeColor=m.ALPHA_MASK,this.strokeWeight=1,this.strokeCap=m.SQUARE,this.strokeJoin=m.MITER,this.strokeName=this.strokeGradientPaint=this.strokeGradient=null,this.strokeOpacity=1,this.fill=!0,this.fillColor=m.ALPHA_MASK,this.fillName=this.fillGradientPaint=this.fillGradient=null,this.fillOpacity=1,"svg"!==this.element.getName())throw"root is not <svg>, it's <"+this.element.getName()+">";}else 2===arguments.length&&("string"===typeof arguments[1]?-1<arguments[1].indexOf(".svg")&&
(this.element=new a(!0,arguments[1]),this.vertexCodes=[],this.vertices=[],this.opacity=1,this.stroke=!1,this.strokeColor=m.ALPHA_MASK,this.strokeWeight=1,this.strokeCap=m.SQUARE,this.strokeJoin=m.MITER,this.strokeName=this.strokeGradientPaint=this.strokeGradient="",this.strokeOpacity=1,this.fill=!0,this.fillColor=m.ALPHA_MASK,this.fillGradientPaint=this.fillGradient=null,this.fillOpacity=1):arguments[0]&&(this.element=arguments[1],this.vertexCodes=arguments[0].vertexCodes.slice(),this.vertices=arguments[0].vertices.slice(),
this.stroke=arguments[0].stroke,this.strokeColor=arguments[0].strokeColor,this.strokeWeight=arguments[0].strokeWeight,this.strokeCap=arguments[0].strokeCap,this.strokeJoin=arguments[0].strokeJoin,this.strokeGradient=arguments[0].strokeGradient,this.strokeGradientPaint=arguments[0].strokeGradientPaint,this.strokeName=arguments[0].strokeName,this.fill=arguments[0].fill,this.fillColor=arguments[0].fillColor,this.fillGradient=arguments[0].fillGradient,this.fillGradientPaint=arguments[0].fillGradientPaint,
this.fillName=arguments[0].fillName,this.strokeOpacity=arguments[0].strokeOpacity,this.fillOpacity=arguments[0].fillOpacity,this.opacity=arguments[0].opacity));this.name=this.element.getStringAttribute("id");this.visible="none"!==this.element.getStringAttribute("display","inline");var f=this.element.getAttribute("transform");f&&(this.matrix=this.parseMatrix(f));f=this.element.getStringAttribute("viewBox");null!==f&&(f=f.split(" "),this.width=f[2],this.height=f[3]);var f=this.element.getStringAttribute("width"),
b=this.element.getStringAttribute("height");if(null!==f)this.width=this.parseUnitSize(f),this.height=this.parseUnitSize(b);else if(0===this.width||0===this.height)throw this.height=this.width=1,"The width and/or height is not readable in the <svg> tag of this file.";this.parseColors(this.element);this.parseChildren(this.element)};d.prototype=new n;d.prototype.parseMatrix=function(){function f(f){var a=[];f.replace(/\((.*?)\)/,function(){return function(f,c){a=c.replace(/,+/g," ").split(/\s+/)}}());
return a}return function(a){this.checkMatrix(2);var b=[];a.replace(/\s*(\w+)\((.*?)\)/g,function(c){b.push(h.trim(c))});if(0===b.length)return null;a=0;for(var d=b.length;a<d;a++){var c=f(b[a]);if(-1!==b[a].indexOf("matrix"))this.matrix.set(c[0],c[2],c[4],c[1],c[3],c[5]);else if(-1!==b[a].indexOf("translate"))this.matrix.translate(c[0],2===c.length?c[1]:0);else if(-1!==b[a].indexOf("scale"))this.matrix.scale(c[0],2===c.length?c[1]:c[0]);else if(-1!==b[a].indexOf("rotate")){var k=c[0];1===c.length?
this.matrix.rotate(h.radians(k)):3===c.length&&(this.matrix.translate(c[1],c[2]),this.matrix.rotate(h.radians(c[0])),this.matrix.translate(-c[1],-c[2]))}else-1!==b[a].indexOf("skewX")?this.matrix.skewX(parseFloat(c[0])):-1!==b[a].indexOf("skewY")?this.matrix.skewY(c[0]):-1!==b[a].indexOf("shearX")?this.matrix.shearX(c[0]):-1!==b[a].indexOf("shearY")&&this.matrix.shearY(c[0])}return this.matrix}}();d.prototype.parseChildren=function(f){f=f.getChildren();var a=new n,b,d;b=0;for(d=f.length;b<d;b++){var c=
this.parseChild(f[b]);c&&a.addChild(c)}b=0;for(d=a.children.length;b<d;b++)this.children.push(a.children[b])};d.prototype.getName=function(){return this.name};d.prototype.parseChild=function(f){var a=f.getName(),b;"g"===a?b=new d(this,f):"defs"===a?b=new d(this,f):"line"===a?(b=new d(this,f),b.parseLine()):"circle"===a?(b=new d(this,f),b.parseEllipse(!0)):"ellipse"===a?(b=new d(this,f),b.parseEllipse(!1)):"rect"===a?(b=new d(this,f),b.parseRect()):"polygon"===a?(b=new d(this,f),b.parsePoly(!0)):"polyline"===
a?(b=new d(this,f),b.parsePoly(!1)):"path"===a?(b=new d(this,f),b.parsePath()):"radialGradient"===a?unimplemented("PShapeSVG.prototype.parseChild, name = radialGradient"):"linearGradient"===a?unimplemented("PShapeSVG.prototype.parseChild, name = linearGradient"):"text"===a?unimplemented("PShapeSVG.prototype.parseChild, name = text"):"filter"===a?unimplemented("PShapeSVG.prototype.parseChild, name = filter"):"mask"===a&&unimplemented("PShapeSVG.prototype.parseChild, name = mask");return b};d.prototype.parsePath=
function(){this.family=m.PATH;this.kind=0;var f=h.trim(this.element.getStringAttribute("d").replace(/[\s,]+/g," "));if(null!==f)for(var f=f.split(""),a=0,b=0,d=0,c=0,k=c=d=0,n=0,G=0,A=0,x=A=c=G=d=0,v=0,ga="",q=[],D=!1,M,nc,u;x<f.length;)if(v=f[x].charCodeAt(0),65<=v&&90>=v||97<=v&&122>=v){u=x;x++;if(x<f.length)for(q=[],v=f[x].charCodeAt(0);!(65<=v&&90>=v||97<=v&&100>=v||102<=v&&122>=v)&&!1===D;)32===v?""!==ga&&(q.push(parseFloat(ga)),ga=""):45===v?101===f[x-1].charCodeAt(0)?ga+=f[x].toString():(""!==
ga&&q.push(parseFloat(ga)),ga=f[x].toString()):ga+=f[x].toString(),x++,x===f.length?D=!0:v=f[x].charCodeAt(0);""!==ga&&(q.push(parseFloat(ga)),ga="");nc=f[u];v=nc.charCodeAt(0);if(77===v){if(2<=q.length&&0===q.length%2&&(a=q[0],b=q[1],this.parsePathMoveto(a,b),2<q.length))for(u=2,v=q.length;u<v;u+=2)a=q[u],b=q[u+1],this.parsePathLineto(a,b)}else if(109===v){if(2<=q.length&&0===q.length%2&&(a+=q[0],b+=q[1],this.parsePathMoveto(a,b),2<q.length))for(u=2,v=q.length;u<v;u+=2)a+=q[u],b+=q[u+1],this.parsePathLineto(a,
b)}else if(76===v){if(2<=q.length&&0===q.length%2)for(u=0,v=q.length;u<v;u+=2)a=q[u],b=q[u+1],this.parsePathLineto(a,b)}else if(108===v){if(2<=q.length&&0===q.length%2)for(u=0,v=q.length;u<v;u+=2)a+=q[u],b+=q[u+1],this.parsePathLineto(a,b)}else if(72===v)for(u=0,v=q.length;u<v;u++)a=q[u],this.parsePathLineto(a,b);else if(104===v)for(u=0,v=q.length;u<v;u++)a+=q[u],this.parsePathLineto(a,b);else if(86===v)for(u=0,v=q.length;u<v;u++)b=q[u],this.parsePathLineto(a,b);else if(118===v)for(u=0,v=q.length;u<
v;u++)b+=q[u],this.parsePathLineto(a,b);else if(67===v){if(6<=q.length&&0===q.length%6)for(u=0,v=q.length;u<v;u+=6)d=q[u],k=q[u+1],c=q[u+2],n=q[u+3],G=q[u+4],A=q[u+5],this.parsePathCurveto(d,k,c,n,G,A),a=G,b=A}else if(99===v){if(6<=q.length&&0===q.length%6)for(u=0,v=q.length;u<v;u+=6)d=a+q[u],k=b+q[u+1],c=a+q[u+2],n=b+q[u+3],G=a+q[u+4],A=b+q[u+5],this.parsePathCurveto(d,k,c,n,G,A),a=G,b=A}else if(83===v){if(4<=q.length&&0===q.length%4)for(u=0,v=q.length;u<v;u+=4)"c"===M.toLowerCase()||"s"===M.toLowerCase()?
(d=this.vertices[this.vertices.length-2][0],G=this.vertices[this.vertices.length-2][1],c=this.vertices[this.vertices.length-1][0],A=this.vertices[this.vertices.length-1][1],d=c+(c-d),k=A+(A-G)):(d=this.vertices[this.vertices.length-1][0],k=this.vertices[this.vertices.length-1][1]),c=q[u],n=q[u+1],G=q[u+2],A=q[u+3],this.parsePathCurveto(d,k,c,n,G,A),a=G,b=A}else if(115===v){if(4<=q.length&&0===q.length%4)for(u=0,v=q.length;u<v;u+=4)"c"===M.toLowerCase()||"s"===M.toLowerCase()?(d=this.vertices[this.vertices.length-
2][0],G=this.vertices[this.vertices.length-2][1],c=this.vertices[this.vertices.length-1][0],A=this.vertices[this.vertices.length-1][1],d=c+(c-d),k=A+(A-G)):(d=this.vertices[this.vertices.length-1][0],k=this.vertices[this.vertices.length-1][1]),c=a+q[u],n=b+q[u+1],G=a+q[u+2],A=b+q[u+3],this.parsePathCurveto(d,k,c,n,G,A),a=G,b=A}else if(81===v){if(4<=q.length&&0===q.length%4)for(u=0,v=q.length;u<v;u+=4)d=q[u],c=q[u+1],G=q[u+2],A=q[u+3],this.parsePathQuadto(a,b,d,c,G,A),a=G,b=A}else if(113===v){if(4<=
q.length&&0===q.length%4)for(u=0,v=q.length;u<v;u+=4)d=a+q[u],c=b+q[u+1],G=a+q[u+2],A=b+q[u+3],this.parsePathQuadto(a,b,d,c,G,A),a=G,b=A}else if(84===v){if(2<=q.length&&0===q.length%2)for(u=0,v=q.length;u<v;u+=2)"q"===M.toLowerCase()||"t"===M.toLowerCase()?(d=this.vertices[this.vertices.length-2][0],G=this.vertices[this.vertices.length-2][1],c=this.vertices[this.vertices.length-1][0],A=this.vertices[this.vertices.length-1][1],d=c+(c-d),c=A+(A-G)):(d=a,c=b),G=q[u],A=q[u+1],this.parsePathQuadto(a,b,
d,c,G,A),a=G,b=A}else if(116===v){if(2<=q.length&&0===q.length%2)for(u=0,v=q.length;u<v;u+=2)"q"===M.toLowerCase()||"t"===M.toLowerCase()?(d=this.vertices[this.vertices.length-2][0],G=this.vertices[this.vertices.length-2][1],c=this.vertices[this.vertices.length-1][0],A=this.vertices[this.vertices.length-1][1],d=c+(c-d),c=A+(A-G)):(d=a,c=b),G=a+q[u],A=b+q[u+1],this.parsePathQuadto(a,b,d,c,G,A),a=G,b=A}else if(90===v||122===v)this.close=!0;M=nc.toString()}else x++};d.prototype.parsePathQuadto=function(a,
b,d,r,c,h){if(0<this.vertices.length)this.parsePathCode(m.BEZIER_VERTEX),this.parsePathVertex(a+2*(d-a)/3,b+2*(r-b)/3),this.parsePathVertex(c+2*(d-c)/3,h+2*(r-h)/3),this.parsePathVertex(c,h);else throw"Path must start with M/m";};d.prototype.parsePathCurveto=function(a,b,d,r,c,h){if(0<this.vertices.length)this.parsePathCode(m.BEZIER_VERTEX),this.parsePathVertex(a,b),this.parsePathVertex(d,r),this.parsePathVertex(c,h);else throw"Path must start with M/m";};d.prototype.parsePathLineto=function(a,b){if(0<
this.vertices.length)this.parsePathCode(m.VERTEX),this.parsePathVertex(a,b),this.vertices[this.vertices.length-1].moveTo=!1;else throw"Path must start with M/m";};d.prototype.parsePathMoveto=function(a,b){0<this.vertices.length&&this.parsePathCode(m.BREAK);this.parsePathCode(m.VERTEX);this.parsePathVertex(a,b);this.vertices[this.vertices.length-1].moveTo=!0};d.prototype.parsePathVertex=function(a,b){var d=[];d[0]=a;d[1]=b;this.vertices.push(d)};d.prototype.parsePathCode=function(a){this.vertexCodes.push(a)};
d.prototype.parsePoly=function(a){this.family=m.PATH;this.close=a;a=h.trim(this.element.getStringAttribute("points").replace(/[,\s]+/g," "));if(null!==a)if(a=a.split(" "),0===a.length%2)for(var b=0,d=a.length;b<d;b++){var r=[];r[0]=a[b];r[1]=a[++b];this.vertices.push(r)}else throw"Error parsing polygon points: odd number of coordinates provided";};d.prototype.parseRect=function(){this.kind=m.RECT;this.family=m.PRIMITIVE;this.params=[];this.params[0]=this.element.getFloatAttribute("x");this.params[1]=
this.element.getFloatAttribute("y");this.params[2]=this.element.getFloatAttribute("width");this.params[3]=this.element.getFloatAttribute("height");if(0>this.params[2]||0>this.params[3])throw"svg error: negative width or height found while parsing <rect>";};d.prototype.parseEllipse=function(a){this.kind=m.ELLIPSE;this.family=m.PRIMITIVE;this.params=[];this.params[0]=this.element.getFloatAttribute("cx")|0;this.params[1]=this.element.getFloatAttribute("cy")|0;var b;if(a){if(a=b=this.element.getFloatAttribute("r"),
0>a)throw"svg error: negative radius found while parsing <circle>";}else if(a=this.element.getFloatAttribute("rx"),b=this.element.getFloatAttribute("ry"),0>a||0>b)throw"svg error: negative x-axis radius or y-axis radius found while parsing <ellipse>";this.params[0]-=a;this.params[1]-=b;this.params[2]=2*a;this.params[3]=2*b};d.prototype.parseLine=function(){this.kind=m.LINE;this.family=m.PRIMITIVE;this.params=[];this.params[0]=this.element.getFloatAttribute("x1");this.params[1]=this.element.getFloatAttribute("y1");
this.params[2]=this.element.getFloatAttribute("x2");this.params[3]=this.element.getFloatAttribute("y2")};d.prototype.parseColors=function(a){a.hasAttribute("opacity")&&this.setOpacity(a.getAttribute("opacity"));a.hasAttribute("stroke")&&this.setStroke(a.getAttribute("stroke"));a.hasAttribute("stroke-width")&&this.setStrokeWeight(a.getAttribute("stroke-width"));a.hasAttribute("stroke-linejoin")&&this.setStrokeJoin(a.getAttribute("stroke-linejoin"));a.hasAttribute("stroke-linecap")&&this.setStrokeCap(a.getStringAttribute("stroke-linecap"));
a.hasAttribute("fill")&&this.setFill(a.getStringAttribute("fill"));if(a.hasAttribute("style")){a=a.getStringAttribute("style").toString().split(";");for(var b=0,d=a.length;b<d;b++){var r=h.trim(a[b].split(":"));"fill"===r[0]?this.setFill(r[1]):"fill-opacity"===r[0]?this.setFillOpacity(r[1]):"stroke"===r[0]?this.setStroke(r[1]):"stroke-width"===r[0]?this.setStrokeWeight(r[1]):"stroke-linecap"===r[0]?this.setStrokeCap(r[1]):"stroke-linejoin"===r[0]?this.setStrokeJoin(r[1]):"stroke-opacity"===r[0]?this.setStrokeOpacity(r[1]):
"opacity"===r[0]&&this.setOpacity(r[1])}}};d.prototype.setFillOpacity=function(a){this.fillOpacity=parseFloat(a);this.fillColor=255*this.fillOpacity<<24|this.fillColor&16777215};d.prototype.setFill=function(a){var d=this.fillColor&4278190080;"none"===a?this.fill=!1:0===a.indexOf("#")?(this.fill=!0,4===a.length&&(a=a.replace(/#(.)(.)(.)/,"#$1$1$2$2$3$3")),this.fillColor=d|parseInt(a.substring(1),16)&16777215):0===a.indexOf("rgb")?(this.fill=!0,this.fillColor=d|this.parseRGB(a)):0===a.indexOf("url(#")?
this.fillName=a.substring(5,a.length-1):b[a]&&(this.fill=!0,this.fillColor=d|parseInt(b[a].substring(1),16)&16777215)};d.prototype.setOpacity=function(a){this.strokeColor=255*parseFloat(a)<<24|this.strokeColor&16777215;this.fillColor=255*parseFloat(a)<<24|this.fillColor&16777215};d.prototype.setStroke=function(a){var d=this.strokeColor&4278190080;"none"===a?this.stroke=!1:"#"===a.charAt(0)?(this.stroke=!0,4===a.length&&(a=a.replace(/#(.)(.)(.)/,"#$1$1$2$2$3$3")),this.strokeColor=d|parseInt(a.substring(1),
16)&16777215):0===a.indexOf("rgb")?(this.stroke=!0,this.strokeColor=d|this.parseRGB(a)):0===a.indexOf("url(#")?this.strokeName=a.substring(5,a.length-1):b[a]&&(this.stroke=!0,this.strokeColor=d|parseInt(b[a].substring(1),16)&16777215)};d.prototype.setStrokeWeight=function(a){this.strokeWeight=this.parseUnitSize(a)};d.prototype.setStrokeJoin=function(a){"miter"===a?this.strokeJoin=m.MITER:"round"===a?this.strokeJoin=m.ROUND:"bevel"===a&&(this.strokeJoin=m.BEVEL)};d.prototype.setStrokeCap=function(a){"butt"===
a?this.strokeCap=m.SQUARE:"round"===a?this.strokeCap=m.ROUND:"square"===a&&(this.strokeCap=m.PROJECT)};d.prototype.setStrokeOpacity=function(a){this.strokeOpacity=parseFloat(a);this.strokeColor=255*this.strokeOpacity<<24|this.strokeColor&16777215};d.prototype.parseRGB=function(a){a=a.substring(a.indexOf("(")+1,a.indexOf(")")).split(", ");return a[0]<<16|a[1]<<8|a[2]};d.prototype.parseUnitSize=function(a){var b=a.length-2;return 0>b?a:a.indexOf("pt")===b?1.25*parseFloat(a.substring(0,b)):a.indexOf("pc")===
b?15*parseFloat(a.substring(0,b)):a.indexOf("mm")===b?3.543307*parseFloat(a.substring(0,b)):a.indexOf("cm")===b?35.43307*parseFloat(a.substring(0,b)):a.indexOf("in")===b?90*parseFloat(a.substring(0,b)):a.indexOf("px")===b?parseFloat(a.substring(0,b)):parseFloat(a)};return d}},{}],17:[function(D,x,Q){x.exports=function(k,h){function m(a,b,l){this.x=a||0;this.y=b||0;this.z=l||0}function n(a){return function(b,l){var p=b.get();p[a](l);return p}}var a=k.PConstants;m.fromAngle=function(a,b){if(b===h||
null===b)b=new m;b.x=Math.cos(a);b.y=Math.sin(a);return b};m.random2D=function(b){return m.fromAngle(Math.random()*a.TWO_PI,b)};m.random3D=function(b){var f=Math.random()*a.TWO_PI,l=2*Math.random()-1,p=Math.sqrt(1-l*l),r=p*Math.cos(f),f=p*Math.sin(f);b===h||null===b?b=new m(r,f,l):b.set(r,f,l);return b};m.dist=function(a,b){return a.dist(b)};m.dot=function(a,b){return a.dot(b)};m.cross=function(a,b){return a.cross(b)};m.sub=function(a,b){return new m(a.x-b.x,a.y-b.y,a.z-b.z)};m.angleBetween=function(a,
b){return Math.acos(a.dot(b)/(a.mag()*b.mag()))};m.lerp=function(a,b,l){a=new m(a.x,a.y,a.z);a.lerp(b,l);return a};m.prototype={set:function(a,b,l){1===arguments.length?this.set(a.x||a[0]||0,a.y||a[1]||0,a.z||a[2]||0):(this.x=a,this.y=b,this.z=l)},get:function(){return new m(this.x,this.y,this.z)},mag:function(){var a=this.x,b=this.y,l=this.z;return Math.sqrt(a*a+b*b+l*l)},magSq:function(){var a=this.x,b=this.y,l=this.z;return a*a+b*b+l*l},setMag:function(a,b){if(b===h)b=a,this.normalize(),this.mult(b);
else return a.normalize(),a.mult(b),a},add:function(a,b,l){1===arguments.length?(this.x+=a.x,this.y+=a.y,this.z+=a.z):(this.x+=a,this.y+=b,this.z+=l)},sub:function(a,b,l){1===arguments.length?(this.x-=a.x,this.y-=a.y,this.z-=a.z):(this.x-=a,this.y-=b,this.z-=l)},mult:function(a){"number"===typeof a?(this.x*=a,this.y*=a,this.z*=a):(this.x*=a.x,this.y*=a.y,this.z*=a.z)},div:function(a){"number"===typeof a?(this.x/=a,this.y/=a,this.z/=a):(this.x/=a.x,this.y/=a.y,this.z/=a.z)},rotate:function(a){var b=
this.x,l=Math.cos(a);a=Math.sin(a);this.x=l*this.x-a*this.y;this.y=a*b+l*this.y},dist:function(a){var b=this.x-a.x,l=this.y-a.y;a=this.z-a.z;return Math.sqrt(b*b+l*l+a*a)},dot:function(a,b,l){return 1===arguments.length?this.x*a.x+this.y*a.y+this.z*a.z:this.x*a+this.y*b+this.z*l},cross:function(a){var b=this.x,l=this.y,p=this.z;return new m(l*a.z-a.y*p,p*a.x-a.z*b,b*a.y-a.x*l)},lerp:function(a,b,l,p){var r,c;2===arguments.length?(p=b,r=a.x,c=a.y,l=a.z):(r=a,c=b);this.x+=(r-this.x)*p;this.y+=(c-this.y)*
p;this.z+=(l-this.z)*p},normalize:function(){var a=this.mag();0<a&&this.div(a)},limit:function(a){this.mag()>a&&(this.normalize(),this.mult(a))},heading:function(){return-Math.atan2(-this.y,this.x)},heading2D:function(){return this.heading()},toString:function(){return"["+this.x+", "+this.y+", "+this.z+"]"},array:function(){return[this.x,this.y,this.z]}};for(var b in m.prototype)m.prototype.hasOwnProperty(b)&&!m.hasOwnProperty(b)&&(m[b]=n(b));return m}},{}],18:[function(D,x,Q){x.exports=function(){var k=
function(h,k,n,a,b){this.fullName=h||"";this.name=k||"";this.namespace=n||"";this.value=a;this.type=b};k.prototype={getName:function(){return this.name},getFullName:function(){return this.fullName},getNamespace:function(){return this.namespace},getValue:function(){return this.value},getType:function(){return this.type},setValue:function(h){this.value=h}};return k}},{}],19:[function(D,x,Q){x.exports=function(k,h){var m=k.Browser,n=m.ajax,a=m.window.DOMParser,b=k.XMLAttribute,d=function(a,b,d,r){this.attributes=
[];this.children=[];this.name=this.fullName=null;this.namespace="";this.parent=this.content=null;this.systemID=this.lineNr="";this.type="ELEMENT";a&&("string"===typeof a?b===h&&-1<a.indexOf("<")?this.parse(a):(this.fullName=a,this.namespace=b,this.systemId=d,this.lineNr=r):this.parse(b))};d.prototype={parse:function(b){var d;try{var p=b.substring(b.length-4);if(".xml"===p||".svg"===p)b=n(b);d=(new a).parseFromString(b,"text/xml");var r=d.documentElement;if(r)this.parseChildrenRecursive(null,r);else throw"Error loading document";
return this}catch(c){throw c;}},parseChildrenRecursive:function(a,l){var p,r,c,h;a?(p=new d(l.nodeName),p.parent=a):(this.fullName=l.localName,this.name=l.nodeName,p=this);if(3===l.nodeType&&""!==l.textContent)return this.createPCDataElement(l.textContent);if(4===l.nodeType)return this.createCDataElement(l.textContent);if(l.attributes)for(c=0,h=l.attributes.length;c<h;c++)r=l.attributes[c],r=new b(r.getname,r.nodeName,r.namespaceURI,r.nodeValue,r.nodeType),p.attributes.push(r);if(l.childNodes)for(c=
0,h=l.childNodes.length;c<h;c++)r=p.parseChildrenRecursive(p,l.childNodes[c]),null!==r&&p.children.push(r);return p},createElement:function(a,b,p,r){return p===h?new d(a,b):new d(a,b,p,r)},createPCDataElement:function(a,b){if(""===a.replace(/^\s+$/g,""))return null;var p=new d;p.type="TEXT";p.content=a;return p},createCDataElement:function(a){var b=this.createPCDataElement(a);if(null===b)return null;b.type="CDATA";var d={"<":"&lt;",">":"&gt;","'":"&apos;",'"':"&quot;"},r;for(r in d)Object.hasOwnProperty(d,
r)||(a=a.replace(RegExp(r,"g"),d[r]));b.cdata=a;return b},hasAttribute:function(){if(1===arguments.length)return null!==this.getAttribute(arguments[0]);if(2===arguments.length)return null!==this.getAttribute(arguments[0],arguments[1])},equals:function(a){if(!(a instanceof d))return!1;var b,p;if(this.fullName!==a.fullName||this.attributes.length!==a.getAttributeCount()||this.attributes.length!==a.attributes.length)return!1;var r,c;b=0;for(p=this.attributes.length;b<p;b++)if(r=this.attributes[b].getName(),
c=this.attributes[b].getNamespace(),r=a.findAttribute(r,c),null===r||this.attributes[b].getValue()!==r.getValue()||this.attributes[b].getType()!==r.getType())return!1;if(this.children.length!==a.getChildCount())return!1;if(0<this.children.length){b=0;for(p=this.children.length;b<p;b++)if(r=this.getChild(b),c=a.getChild(b),!r.equals(c))return!1;return!0}return this.content===a.content},getContent:function(){if("TEXT"===this.type||"CDATA"===this.type)return this.content;var a=this.children;return 1!==
a.length||"TEXT"!==a[0].type&&"CDATA"!==a[0].type?null:a[0].content},getAttribute:function(){var a;if(2===arguments.length)return(a=this.findAttribute(arguments[0]))?a.getValue():arguments[1];if(1===arguments.length)return(a=this.findAttribute(arguments[0]))?a.getValue():null;if(3===arguments.length)return(a=this.findAttribute(arguments[0],arguments[1]))?a.getValue():arguments[2]},getStringAttribute:function(){return 1===arguments.length?this.getAttribute(arguments[0]):2===arguments.length?this.getAttribute(arguments[0],
arguments[1]):this.getAttribute(arguments[0],arguments[1],arguments[2])},getString:function(a){return this.getStringAttribute(a)},getFloatAttribute:function(){return 1===arguments.length?parseFloat(this.getAttribute(arguments[0],0)):2===arguments.length?this.getAttribute(arguments[0],arguments[1]):this.getAttribute(arguments[0],arguments[1],arguments[2])},getFloat:function(a){return this.getFloatAttribute(a)},getIntAttribute:function(){return 1===arguments.length?this.getAttribute(arguments[0],0):
2===arguments.length?this.getAttribute(arguments[0],arguments[1]):this.getAttribute(arguments[0],arguments[1],arguments[2])},getInt:function(a){return this.getIntAttribute(a)},hasChildren:function(){return 0<this.children.length},addChild:function(a){null!==a&&(a.parent=this,this.children.push(a))},insertChild:function(a,b){if(a){if(null===a.getLocalName()&&!this.hasChildren()){var d=this.children[this.children.length-1];if(null===d.getLocalName()){d.setContent(d.getContent()+a.getContent());return}}a.parent=
this;this.children.splice(b,0,a)}},getChild:function(a){if("number"===typeof a)return this.children[a];if(-1!==a.indexOf("/"))return this.getChildRecursive(a.split("/"),0);for(var b,d,r=0,c=this.getChildCount();r<c;r++)if(b=this.getChild(r),d=b.getName(),null!==d&&d===a)return b;return null},getChildren:function(){if(1===arguments.length){if("number"===typeof arguments[0])return this.getChild(arguments[0]);if(-1!==arguments[0].indexOf("/"))return this.getChildrenRecursive(arguments[0].split("/"),
0);for(var a=[],b,d,r=0,c=this.getChildCount();r<c;r++)b=this.getChild(r),d=b.getName(),null!==d&&d===arguments[0]&&a.push(b);return a}return this.children},getChildCount:function(){return this.children.length},getChildRecursive:function(a,b){if(b===a.length)return this;for(var d,r,c=a[b],h=0,k=this.getChildCount();h<k;h++)if(d=this.getChild(h),r=d.getName(),null!==r&&r===c)return d.getChildRecursive(a,b+1);return null},getChildrenRecursive:function(a,b){if(b===a.length-1)return this.getChildren(a[b]);
for(var d=this.getChildren(a[b]),r=[],c=0;c<d.length;c++)r=r.concat(d[c].getChildrenRecursive(a,b+1));return r},isLeaf:function(){return!this.hasChildren()},listChildren:function(){for(var a=[],b=0,d=this.children.length;b<d;b++)a.push(this.getChild(b).getName());return a},removeAttribute:function(a,b){this.namespace=b||"";for(var d=0,r=this.attributes.length;d<r;d++)if(this.attributes[d].getName()===a&&this.attributes[d].getNamespace()===this.namespace){this.attributes.splice(d,1);break}},removeChild:function(a){if(a)for(var b=
0,d=this.children.length;b<d;b++)if(this.children[b].equals(a)){this.children.splice(b,1);break}},removeChildAtIndex:function(a){this.children.length>a&&this.children.splice(a,1)},findAttribute:function(a,b){this.namespace=b||"";for(var d=0,r=this.attributes.length;d<r;d++)if(this.attributes[d].getName()===a&&this.attributes[d].getNamespace()===this.namespace)return this.attributes[d];return null},setAttribute:function(){var a;if(3===arguments.length){a=arguments[0].indexOf(":");var d=arguments[0].substring(a+
1);(a=this.findAttribute(d,arguments[1]))?a.setValue(arguments[2]):(a=new b(arguments[0],d,arguments[1],arguments[2],"CDATA"),this.attributes.push(a))}else(a=this.findAttribute(arguments[0]))?a.setValue(arguments[1]):(a=new b(arguments[0],arguments[0],null,arguments[1],"CDATA"),this.attributes.push(a))},setString:function(a,b){this.setAttribute(a,b)},setInt:function(a,b){this.setAttribute(a,b)},setFloat:function(a,b){this.setAttribute(a,b)},setContent:function(a){0<this.children.length&&Processing.debug("Tried to set content for XMLElement with children");
this.content=a},setName:function(){if(1===arguments.length)this.name=arguments[0],this.fullName=arguments[0],this.namespace=null;else{var a=arguments[0].indexOf(":");this.name=null===arguments[1]||0>a?arguments[0]:arguments[0].substring(a+1);this.fullName=arguments[0];this.namespace=arguments[1]}},getName:function(){return this.fullName},getLocalName:function(){return this.name},getAttributeCount:function(){return this.attributes.length},toString:function(){if("TEXT"===this.type)return this.content;
if("CDATA"===this.type)return this.cdata;var a=this.fullName,b="<"+a,d;for(d=0;d<this.attributes.length;d++)var r=this.attributes[d],b=b+(" "+r.getName()+'="'+r.getValue()+'"');if(0===this.children.length)b=""===this.content?b+"/>":b+(">"+this.content+"</"+a+">");else{b+=">";for(d=0;d<this.children.length;d++)b+=this.children[d].toString();b+="</"+a+">"}return b}};d.parse=function(a){var b=new d;b.parse(a);return b};return d}},{}],20:[function(D,x,Q){x.exports={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",
aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",
darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",honeydew:"#f0fff0",
hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgrey:"#d3d3d3",lightgreen:"#90ee90",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",
linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370d8",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",
palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#d87093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",
tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"}},{}],21:[function(D,x,Q){x.exports=function(k,h,m){return function(n,a){n.__contains=function(b,d){return"string"!==typeof b?b.contains.apply(b,a(arguments)):null!==b&&null!==d&&"string"===typeof d&&-1<b.indexOf(d)};n.__replaceAll=function(b,d,f){return"string"!==typeof b?b.replaceAll.apply(b,a(arguments)):
b.replace(RegExp(d,"g"),f)};n.__replaceFirst=function(b,d,f){return"string"!==typeof b?b.replaceFirst.apply(b,a(arguments)):b.replace(RegExp(d,""),f)};n.__replace=function(b,d,f){if("string"!==typeof b)return b.replace.apply(b,a(arguments));if(d instanceof RegExp)return b.replace(d,f);"string"!==typeof d&&(d=d.toString());if(""===d)return b;var h=b.indexOf(d);if(0>h)return b;var k=0,r="";do r+=b.substring(k,h)+f,k=h+d.length;while(0<=(h=b.indexOf(d,k)));return r+b.substring(k)};n.__equals=function(b,
d){return b.equals instanceof Function?b.equals.apply(b,a(arguments)):h(b,d)};n.__equalsIgnoreCase=function(b,d){return"string"!==typeof b?b.equalsIgnoreCase.apply(b,a(arguments)):b.toLowerCase()===d.toLowerCase()};n.__toCharArray=function(b){if("string"!==typeof b)return b.toCharArray.apply(b,a(arguments));for(var d=[],f=0,h=b.length;f<h;++f)d[f]=new Char(b.charAt(f));return d};n.__split=function(b,d,f){if("string"!==typeof b)return b.split.apply(b,a(arguments));var h=RegExp(d);if(f===m||1>f)return b.split(h);
for(var k=[],r=b,c;-1!==(c=r.search(h))&&k.length<f-1;){var n=h.exec(r).toString();k.push(r.substring(0,c));r=r.substring(c+n.length)}-1===c&&""===r||k.push(r);return k};n.__codePointAt=function(a,d){var f=a.charCodeAt(d),h;return 55296<=f&&56319>=f?(h=a.charCodeAt(d+1),1024*(f-55296)+(h-56320)+65536):f};n.__matches=function(a,d){return RegExp(d).test(a)};n.__startsWith=function(b,d,f){if("string"!==typeof b)return b.startsWith.apply(b,a(arguments));f=f||0;return 0>f||f>b.length?!1:""===d||d===b?
!0:b.indexOf(d)===f};n.__endsWith=function(b,d){if("string"!==typeof b)return b.endsWith.apply(b,a(arguments));var f=d?d.length:0;return""===d||d===b?!0:b.indexOf(d)===b.length-f};n.__hashCode=function(b){return b.hashCode instanceof Function?b.hashCode.apply(b,a(arguments)):k(b)};n.__printStackTrace=function(a){n.println("Exception: "+a.toString())}}}},{}],22:[function(D,x,Q){x.exports=function(k,h){function m(a,b){var c=a||362436069,d=b||521288629,f=function(){c=36969*(c&65535)+(c>>>16)&4294967295;
d=18E3*(d&65535)+(d>>>16)&4294967295;return((c&65535)<<16|d&65535)&4294967295};this.doubleGenerator=function(){var a=f()/4294967296;return 0>a?1+a:a};this.intGenerator=f}function n(a){function b(a,c,d,f){a&=15;var r=8>a?c:d;c=4>a?d:12===a||14===a?c:f;return(0===(a&1)?r:-r)+(0===(a&2)?c:-c)}function c(a,b,c){b=0===(a&1)?b:c;return 0===(a&2)?-b:b}function d(a,b,c){return b+a*(c-b)}a=a!==h?new m(a):m.createRandomized();var f,k,l=new Uint8Array(512);for(f=0;256>f;++f)l[f]=f;for(f=0;256>f;++f){var n=l[k=
a.intGenerator()&255];l[k]=l[f];l[f]=n}for(f=0;256>f;++f)l[f+256]=l[f];this.noise3d=function(a,c,f){var h=Math.floor(a)&255,k=Math.floor(c)&255,p=Math.floor(f)&255;a-=Math.floor(a);c-=Math.floor(c);f-=Math.floor(f);var m=(3-2*a)*a*a,n=(3-2*c)*c*c,G=l[h]+k,ca=l[G]+p,G=l[G+1]+p,k=l[h+1]+k,h=l[k]+p,p=l[k+1]+p;return d((3-2*f)*f*f,d(n,d(m,b(l[ca],a,c,f),b(l[h],a-1,c,f)),d(m,b(l[G],a,c-1,f),b(l[p],a-1,c-1,f))),d(n,d(m,b(l[ca+1],a,c,f-1),b(l[h+1],a-1,c,f-1)),d(m,b(l[G+1],a,c-1,f-1),b(l[p+1],a-1,c-1,f-1))))};
this.noise2d=function(a,b){var f=Math.floor(a)&255,r=Math.floor(b)&255;a-=Math.floor(a);b-=Math.floor(b);var h=(3-2*a)*a*a,k=l[f]+r,f=l[f+1]+r;return d((3-2*b)*b*b,d(h,c(l[k],a,b),c(l[f],a-1,b)),d(h,c(l[k+1],a,b-1),c(l[f+1],a-1,b-1)))};this.noise1d=function(a){var b=Math.floor(a)&255;a-=Math.floor(a);return d((3-2*a)*a*a,0===(l[b]&1)?-a:a,0===(l[b+1]&1)?-(a-1):a-1)}}var a=function(){return Math.random()};k.abs=Math.abs;k.ceil=Math.ceil;k.exp=Math.exp;k.floor=Math.floor;k.log=Math.log;k.pow=Math.pow;
k.round=Math.round;k.sqrt=Math.sqrt;k.acos=Math.acos;k.asin=Math.asin;k.atan=Math.atan;k.atan2=Math.atan2;k.cos=Math.cos;k.sin=Math.sin;k.tan=Math.tan;k.constrain=function(a,b,c){return a>c?c:a<b?b:a};k.dist=function(){var a,b,c;if(4===arguments.length)return a=arguments[0]-arguments[2],b=arguments[1]-arguments[3],Math.sqrt(a*a+b*b);if(6===arguments.length)return a=arguments[0]-arguments[3],b=arguments[1]-arguments[4],c=arguments[2]-arguments[5],Math.sqrt(a*a+b*b+c*c)};k.lerp=function(a,b,c){return(b-
a)*c+a};k.mag=function(a,b,c){return c?Math.sqrt(a*a+b*b+c*c):Math.sqrt(a*a+b*b)};k.map=function(a,b,c,d,f){return d+(f-d)*((a-b)/(c-b))};k.max=function(){if(2===arguments.length)return arguments[0]<arguments[1]?arguments[1]:arguments[0];var a=1===arguments.length?arguments[0]:arguments;if(!("length"in a&&0<a.length))throw"Non-empty array is expected";for(var b=a[0],c=a.length,d=1;d<c;++d)b<a[d]&&(b=a[d]);return b};k.min=function(){if(2===arguments.length)return arguments[0]<arguments[1]?arguments[0]:
arguments[1];var a=1===arguments.length?arguments[0]:arguments;if(!("length"in a&&0<a.length))throw"Non-empty array is expected";for(var b=a[0],c=a.length,d=1;d<c;++d)b>a[d]&&(b=a[d]);return b};k.norm=function(a,b,c){return(a-b)/(c-b)};k.sq=function(a){return a*a};k.degrees=function(a){return 180*a/Math.PI};k.random=function(){if(0===arguments.length)return a();if(1===arguments.length)return a()*arguments[0];var b=arguments[0],d=arguments[1];return a()*(d-b)+b};m.createRandomized=function(){var a=
new Date;return new m(a/6E4&4294967295,a&4294967295)};k.randomSeed=function(b){a=(new m(b)).doubleGenerator;this.haveNextNextGaussian=!1};k.randomGaussian=function(){if(this.haveNextNextGaussian)return this.haveNextNextGaussian=!1,this.nextNextGaussian;var b,d,c;do b=2*a()-1,d=2*a()-1,c=b*b+d*d;while(1<=c||0===c);c=Math.sqrt(-2*Math.log(c)/c);this.nextNextGaussian=d*c;this.haveNextNextGaussian=!0;return b*c};var b=h,d=4,f=0.5,l=h;k.noise=function(a,k,c){b===h&&(b=new n(l));for(var m=b,ca=1,G=1,A=
0,x=0;x<d;++x){ca*=f;switch(arguments.length){case 1:A+=ca*(1+m.noise1d(G*a))/2;break;case 2:A+=ca*(1+m.noise2d(G*a,G*k))/2;break;case 3:A+=ca*(1+m.noise3d(G*a,G*k,G*c))/2}G*=2}return A};k.noiseDetail=function(a,b){d=a;b!==h&&(f=b)};k.noiseSeed=function(a){l=a;b=h}}},{}],23:[function(D,x,Q){x.exports=function(k){var h={trim:function(h){if(h instanceof Array){for(var k=[],a=0;a<h.length;a++)k.push(h[a].replace(/^\s*/,"").replace(/\s*$/,"").replace(/\r*$/,""));return k}return h.replace(/^\s*/,"").replace(/\s*$/,
"").replace(/\r*$/,"")},radians:function(h){return h/180*Math.PI},nfCoreScalar:function(h,n,a,b,d,f){n=0>h?a:n;a=0===d;d=d===k||0>d?0:d;h=Math.abs(h);if(a)for(d=1,h*=10;1E-6<Math.abs(Math.round(h)-h)&&7>d;)++d,h*=10;else 0!==d&&(h*=Math.pow(10,d));a=2*h;Math.floor(h)===h?a=h:Math.floor(a)===a?(h=Math.floor(h),a=h+h%2):a=Math.round(h);h="";for(b+=d;0<b||0<a;)b--,h=""+a%10+h,a=Math.floor(a/10);if(f!==k)for(b=h.length-3-d;0<b;)h=h.substring(0,b)+f+h.substring(b),b-=3;return 0<d?n+h.substring(0,h.length-
d)+"."+h.substring(h.length-d,h.length):n+h},nfCore:function(k,n,a,b,d,f){if(k instanceof Array){for(var l=[],p=0,r=k.length;p<r;p++)l.push(h.nfCoreScalar(k[p],n,a,b,d,f));return l}return h.nfCoreScalar(k,n,a,b,d,f)},nf:function(k,n,a){return h.nfCore(k,"","-",n,a)},nfs:function(k,n,a){return h.nfCore(k," ","-",n,a)},nfp:function(k,n,a){return h.nfCore(k,"+","-",n,a)},nfc:function(k,n){return h.nfCore(k,"","-",0,n,",")},withCommonFunctions:function(k){"trim radians nf nfs nfp nfc".split(" ").forEach(function(n){k[n]=
h[n]})}};return h}()},{}],24:[function(D,x,Q){x.exports=function(k,h,m,n,a,b){function d(a,b){var d=a,f=0,h=0;k.pmouseX=k.mouseX;k.pmouseY=k.mouseY;if(d.offsetParent){do f+=d.offsetLeft,h+=d.offsetTop;while(d=d.offsetParent)}d=a;do f-=d.scrollLeft||0,h-=d.scrollTop||0;while(d=d.parentNode);var l,p,m,x;n.defaultView&&n.defaultView.getComputedStyle&&(l=parseInt(n.defaultView.getComputedStyle(a,null).paddingLeft,10)||0,p=parseInt(n.defaultView.getComputedStyle(a,null).paddingTop,10)||0,m=parseInt(n.defaultView.getComputedStyle(a,
null).borderLeftWidth,10)||0,x=parseInt(n.defaultView.getComputedStyle(a,null).borderTopWidth,10)||0);f=f+l+m;h=h+p+x;f+=window.pageXOffset;h+=window.pageYOffset;return{X:f,Y:h}}function f(a,b){var f=d(a,b);k.mouseX=b.pageX-f.X;k.mouseY=b.pageY-f.Y}function l(a){var b=d(a.changedTouches[0].target,a.changedTouches[0]),f;for(f=0;f<a.touches.length;f++){var h=a.touches[f];h.offsetX=h.pageX-b.X;h.offsetY=h.pageY-b.Y}for(f=0;f<a.targetTouches.length;f++)h=a.targetTouches[f],h.offsetX=h.pageX-b.X,h.offsetY=
h.pageY-b.Y;for(f=0;f<a.changedTouches.length;f++)h=a.changedTouches[f],h.offsetX=h.pageX-b.X,h.offsetY=h.pageY-b.Y;return a}m(h,"touchstart",function(d){h.setAttribute("style","-webkit-user-select: none");h.setAttribute("onclick","void(0)");h.setAttribute("style","-webkit-tap-highlight-color:rgba(0,0,0,0)");for(var c=0,p=eventHandlers.length;c<p;c++){var n=eventHandlers[c].type;"mouseout"!==n&&"mousemove"!==n&&"mousedown"!==n&&"mouseup"!==n&&"DOMMouseScroll"!==n&&"mousewheel"!==n&&"touchstart"!==
n||detachEventHandler(eventHandlers[c])}k.touchStart!==b||k.touchMove!==b||k.touchEnd!==b||k.touchCancel!==b?(m(h,"touchstart",function(a){k.touchStart!==b&&(a=l(a),k.touchStart(a))}),m(h,"touchmove",function(a){k.touchMove!==b&&(a.preventDefault(),a=l(a),k.touchMove(a))}),m(h,"touchend",function(a){k.touchEnd!==b&&(a=l(a),k.touchEnd(a))}),m(h,"touchcancel",function(a){k.touchCancel!==b&&(a=l(a),k.touchCancel(a))})):(m(h,"touchstart",function(b){f(h,b.touches[0]);k.__mousePressed=!0;k.mouseDragging=
!1;k.mouseButton=a.LEFT;"function"===typeof k.mousePressed&&k.mousePressed()}),m(h,"touchmove",function(a){a.preventDefault();f(h,a.touches[0]);"function"!==typeof k.mouseMoved||k.__mousePressed||k.mouseMoved();"function"===typeof k.mouseDragged&&k.__mousePressed&&(k.mouseDragged(),k.mouseDragging=!0)}),m(h,"touchend",function(a){k.__mousePressed=!1;"function"!==typeof k.mouseClicked||k.mouseDragging||k.mouseClicked();"function"===typeof k.mouseReleased&&k.mouseReleased()}));h.dispatchEvent(d)});
(function(){var a=!0,b=function(a){a.preventDefault();a.stopPropagation()};k.disableContextMenu=function(){a&&(m(h,"contextmenu",b),a=!1)};k.enableContextMenu=function(){a||(detachEventHandler({elem:h,type:"contextmenu",fn:b}),a=!0)}})();m(h,"mousemove",function(a){f(h,a);"function"!==typeof k.mouseMoved||k.__mousePressed||k.mouseMoved();"function"===typeof k.mouseDragged&&k.__mousePressed&&(k.mouseDragged(),k.mouseDragging=!0)});m(h,"mouseout",function(a){"function"===typeof k.mouseOut&&k.mouseOut()});
m(h,"mouseover",function(a){f(h,a);"function"===typeof k.mouseOver&&k.mouseOver()});h.onmousedown=function(){h.focus();return!1};m(h,"mousedown",function(b){k.__mousePressed=!0;k.mouseDragging=!1;switch(b.which){case 1:k.mouseButton=a.LEFT;break;case 2:k.mouseButton=a.CENTER;break;case 3:k.mouseButton=a.RIGHT}"function"===typeof k.mousePressed&&k.mousePressed()});m(h,"mouseup",function(a){k.__mousePressed=!1;"function"!==typeof k.mouseClicked||k.mouseDragging||k.mouseClicked();"function"===typeof k.mouseReleased&&
k.mouseReleased()});var p=function(a){var b=0;a.wheelDelta?(b=a.wheelDelta/120,window.opera&&(b=-b)):a.detail&&(b=-a.detail/3);(k.mouseScroll=b)&&"function"===typeof k.mouseScrolled&&k.mouseScrolled()};m(n,"DOMMouseScroll",p);m(n,"mousewheel",p)}},{}],25:[function(D,x,Q){x.exports=function(k,h){function m(){var a="abs acos alpha ambient ambientLight append applyMatrix arc arrayCopy asin atan atan2 background beginCamera beginDraw beginShape bezier bezierDetail bezierPoint bezierTangent bezierVertex binary blend blendColor blit_resize blue box breakShape brightness camera ceil Character color colorMode concat constrain copy cos createFont createGraphics createImage cursor curve curveDetail curvePoint curveTangent curveTightness curveVertex day degrees directionalLight disableContextMenu dist draw ellipse ellipseMode emissive enableContextMenu endCamera endDraw endShape exit exp expand externals fill filter floor focused frameCount frameRate frustum get glyphLook glyphTable green height hex hint hour hue image imageMode intersect join key keyCode keyPressed keyReleased keyTyped lerp lerpColor lightFalloff lights lightSpecular line link loadBytes loadFont loadGlyphs loadImage loadPixels loadShape loadXML loadStrings log loop mag map match matchAll max millis min minute mix modelX modelY modelZ modes month mouseButton mouseClicked mouseDragged mouseMoved mouseOut mouseOver mousePressed mouseReleased mouseScroll mouseScrolled mouseX mouseY name nf nfc nfp nfs noCursor noFill noise noiseDetail noiseSeed noLights noLoop norm normal noSmooth noStroke noTint ortho param parseBoolean parseByte parseChar parseFloat parseInt peg perspective PImage pixels PMatrix2D PMatrix3D PMatrixStack pmouseX pmouseY point pointLight popMatrix popStyle pow print printCamera println printMatrix printProjection PShape PShapeSVG pushMatrix pushStyle quad radians random randomGaussian randomSeed rect rectMode red redraw requestImage resetMatrix reverse rotate rotateX rotateY rotateZ round saturation save saveFrame saveStrings scale screenX screenY screenZ second set setup shape shapeMode shared shearX shearY shininess shorten sin size smooth sort specular sphere sphereDetail splice split splitTokens spotLight sq sqrt status str stroke strokeCap strokeJoin strokeWeight subset tan text textAlign textAscent textDescent textFont textLeading textMode textSize texture textureMode textWidth tint toImageData touchCancel touchEnd touchMove touchStart translate transform triangle trim unbinary unhex updatePixels use3DContext vertex width XMLElement XML year __contains __equals __equalsIgnoreCase __frameRate __hashCode __int_cast __instanceof __keyPressed __mousePressed __printStackTrace __replace __replaceAll __replaceFirst __toCharArray __split __codePointAt __startsWith __endsWith __matches".split(" ");
f&&Object.keys(f).forEach(function(b){a.push(b)});var b={},d,h;d=0;for(h=a.length;d<h;++d)b[a[d]]=null;for(var l in k.lib)if(k.lib.hasOwnProperty(l)&&k.lib[l].exports){var p=k.lib[l].exports;d=0;for(h=p.length;d<h;++d)b[p[d]]=null}return b}function n(a){function c(a){var b=/^\s*/.exec(a);if(b[0].length===a.length)a={left:b[0],middle:"",right:""};else{var c=/\s*$/.exec(a);a={left:b[0],middle:a.substring(b[0].length,c.index),right:c[0]}}a.untrim=function(a){return this.left+a+this.right};return a}function f(a){return a.replace(/^\s+/,
"").replace(/\s+$/,"")}function h(a,b){for(var c=0,e=b.length;c<e;++c)a[b[c]]=null;return a}function k(a){for(var b in a)if(a.hasOwnProperty(b))return!1;return!0}function l(a){return a.substring(2,a.length-1)}function n(a,b){var c=N.length;N.push(a);return'"'+b+c+'"'}function v(a){a=a.replace(qa,function(a){return n(a,"E")});a=a.replace(la,function(a){return n(a,"D")});return a=a.replace(jb,function(a){return n(a,"H")})}function x(a,b){return a.replace(Eb,function(a,c,e,d,f,tb){return e!==b?a:n(a,
"G")})}function q(a){this.name=a}function D(a,b){this.params=a;this.methodArgsParam=b}function M(a){var b=f(a.substring(1,a.length-1));a=[];var c=null;if(""!==b)for(var b=b.split(","),e=0;e<b.length;++e){var d=/\b([A-Za-z_$][\w$]*\b)(\s*"[ABC][\d]*")*\s*$/.exec(b[e]);if(e===b.length-1&&0<=b[e].indexOf("...")){c=new q(d[1]);break}a.push(new q(d[1]))}return new D(a,c)}function Q(a){function b(a,e,f,tb){a=N[tb];d=!0;a=c(a.substring(1,a.length-1));return"__"+f+(""===a.middle?n("("+e.replace(/\.\s*$/,
"")+")","B"):n("("+e.replace(/\.\s*$/,"")+","+a.middle+")","B"))}function e(a,b,c){d=!0;return"__instanceof"+n("("+b+", "+c+")","B")}a=a.replace(/\bnew\s+([A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)(?:\s*"C\d+")+\s*("A\d+")/g,function(a,b,c){return c});a=a.replace(/\bnew\s+([A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)(?:\s*"B\d+")\s*("A\d+")/g,function(a,b,c){return n(a,"F")});a=a.replace(jb,function(a){return n(a,"H")});a=a.replace(/\bnew\s+([A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)\s*("C\d+"(?:\s*"C\d+")*)/g,
function(a,b,c){a=c.replace(/"C(\d+)"/g,function(a,b){return N[b]}).replace(/\[\s*\]/g,"[null]").replace(/\s*\]\s*\[\s*/g,", ");a="{"+a.substring(1,a.length-1)+"}";b="('"+b+"', "+n(a,"A")+")";return"$p.createJavaArray"+n(b,"B")});a=a.replace(/(\.\s*length)\s*"B\d+"/g,"$1");a=a.replace(/#([0-9A-Fa-f]{6})\b/g,function(a,b){return"0xFF"+b});a=a.replace(/"B(\d+)"(\s*(?:[\w$']|"B))/g,function(a,b,c){b=N[b];if(!/^\(\s*[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*\s*(?:"C\d+"\s*)*\)$/.test(b))return a;
if(/^\(\s*int\s*\)$/.test(b))return"(int)"+c;b=b.split(/"C(\d+)"/g);return 1<b.length&&!/^\[\s*\]$/.test(N[b[1]])?a:""+c});a=a.replace(/\(int\)([^,\]\)\}\?\:\*\+\-\/\^\|\%\&\~<\>\=]+)/g,function(a,b){var e=c(b);return e.untrim("__int_cast("+e.middle+")")});a=a.replace(/\bsuper(\s*"B\d+")/g,"$$superCstr$1").replace(/\bsuper(\s*\.)/g,"$$super$1");a=a.replace(/\b0+((\d*)(?:\.[\d*])?(?:[eE][\-\+]?\d+)?[fF]?)\b/,function(a,b,c){return b===c?a:""===c?"0"+b:b});a=a.replace(/\b(\.?\d+\.?)[fF]\b/g,"$1");a=
a.replace(/([^\s])%([^=\s])/g,"$1 % $2");a=a.replace(/\b(frameRate|keyPressed|mousePressed)\b(?!\s*"B)/g,"__$1");a=a.replace(/\b(boolean|byte|char|float|int)\s*"B/g,function(a,b){return"parse"+b.substring(0,1).toUpperCase()+b.substring(1)+'"B'});a=a.replace(/\bpixels\b\s*(("C(\d+)")|\.length)?(\s*=(?!=)([^,\]\)\}]+))?/g,function(a,b,c,e,d,f){return c?(a=N[e],d?"pixels.setPixel"+n("("+a.substring(1,a.length-1)+","+f+")","B"):"pixels.getPixel"+n("("+a.substring(1,a.length-1)+")","B")):b?"pixels.getLength"+
n("()","B"):d?"pixels.set"+n("("+f+")","B"):"pixels.toArray"+n("()","B")});var d;do d=!1,a=a.replace(/((?:'\d+'|\b[A-Za-z_$][\w$]*\s*(?:"[BC]\d+")*)\s*\.\s*(?:[A-Za-z_$][\w$]*\s*(?:"[BC]\d+"\s*)*\.\s*)*)(replace|replaceAll|replaceFirst|contains|equals|equalsIgnoreCase|hashCode|toCharArray|printStackTrace|split|startsWith|endsWith|codePointAt|matches)\s*"B(\d+)"/g,b);while(d);do d=!1,a=a.replace(/((?:'\d+'|\b[A-Za-z_$][\w$]*\s*(?:"[BC]\d+")*)\s*(?:\.\s*[A-Za-z_$][\w$]*\s*(?:"[BC]\d+"\s*)*)*)instanceof\s+([A-Za-z_$][\w$]*\s*(?:\.\s*[A-Za-z_$][\w$]*)*)/g,
e);while(d);return a=a.replace(/\bthis(\s*"B\d+")/g,"$$constr$1")}function u(a,b){this.baseInterfaceName=a;this.body=b;b.owner=this}function nd(a){var b=RegExp(/\bnew\s*([A-Za-z_$][\w$]*\s*(?:\.\s*[A-Za-z_$][\w$]*)*)\s*"B\d+"\s*"A(\d+)"/).exec(a);a=ja;var c="class"+ ++ab;ja=c;var e=b[1]+"$"+c,b=new u(e,ea(N[b[2]],e,"","implements "+b[1]));b.classId=c;b.scopeId=a;X[c]=b;ja=a;return b}function Ia(a,b,c){this.name=a;this.params=b;this.body=c}function T(a){a=RegExp(/\b([A-Za-z_$][\w$]*)\s*"B(\d+)"\s*"A(\d+)"/).exec(a);
return new Ia("function"!==a[1]?a[1]:null,M(N[a[2]]),ra(N[a[3]]))}function Y(a){this.members=a}function U(a){a=a.split(",");for(var b=0;b<a.length;++b){var c=a[b].indexOf(":");a[b]=0>c?{value:ma(a[b])}:{label:f(a[b].substring(0,c)),value:ma(f(a[b].substring(c+1)))}}return new Y(a)}function Z(a){if("("===a.charAt(0)||"["===a.charAt(0))return a.charAt(0)+Z(a.substring(1,a.length-1))+a.charAt(a.length-1);if("{"===a.charAt(0))return/^\{\s*(?:[A-Za-z_$][\w$]*|'\d+')\s*:/.test(a)?"{"+n(a.substring(1,a.length-
1),"I")+"}":"["+Z(a.substring(1,a.length-1))+"]";a=c(a);var b=Q(a.middle),b=b.replace(/"[ABC](\d+)"/g,function(a,b){return Z(N[b])});return a.untrim(b)}function sa(a){return a.replace(/(\.\s*)?((?:\b[A-Za-z_]|\$)[\w$]*)(\s*\.\s*([A-Za-z_$][\w$]*)(\s*\()?)?/g,function(a,b,c,e,d,f){return b?a:C({name:c,member:d,callSign:!!f})+(e===p?"":e)})}function ta(a,b){this.expr=a;this.transforms=b}function $b(a,b,c){this.name=a;this.value=b;this.isDefault=c}function bb(a,b){var c=a.indexOf("="),e,d;0>c?(e=a,c=
b,d=!0):(e=a.substring(0,c),c=ma(a.substring(c+1)),d=!1);return new $b(f(e.replace(/(\s*"C\d+")+/g,"")),c,d)}function Sa(a){return"int"===a||"float"===a?"0":"boolean"===a?"false":"color"===a?"0x00000000":"null"}function cb(a,b){this.definitions=a;this.varType=b}function Fb(a){this.expression=a}function db(a){if(Gb.test(a)){var b=ub.exec(a);a=a.substring(b[0].length).split(",");for(var c=Sa(b[2]),e=0;e<a.length;++e)a[e]=bb(a[e],c);return new cb(a,b[2])}return new Fb(ma(a))}function Hb(a,b,c){this.initStatement=
a;this.condition=b;this.step=c}function Ib(a,b){this.initStatement=a;this.container=b}function wa(a,b){this.initStatement=a;this.container=b}function za(a){if(/\bin\b/.test(a))return a=a.substring(1,a.length-1).split(/\bin\b/g),new Ib(db(f(a[0])),ma(a[1]));if(0<=a.indexOf(":")&&0>a.indexOf(";"))return a=a.substring(1,a.length-1).split(":"),new wa(db(f(a[0])),ma(a[1]));a=a.substring(1,a.length-1).split(";");return new Hb(db(f(a[0])),ma(a[1]),ma(a[2]))}function Ta(a){a.sort(function(a,b){return b.weight-
a.weight})}function Ja(a,b,c){this.name=a;this.body=b;this.isStatic=c;b.owner=this}function Jb(a,b,c){this.name=a;this.body=b;this.isStatic=c;b.owner=this}function Kb(a){var b=qa.exec(a);qa.lastIndex=0;var c=0<=b[1].indexOf("static"),e=N[l(b[6])];a=ja;var d="class"+ ++ab;ja=d;b="interface"===b[2]?new Ja(b[3],eb(e,b[3],b[4]),c):new Jb(b[3],ea(e,b[3],b[4],b[5]),c);b.classId=d;b.scopeId=a;X[d]=b;ja=a;return b}function Lb(a,b,c,e){this.name=a;this.params=b;this.body=c;this.isStatic=e}function fb(a){a=
la.exec(a);la.lastIndex=0;var b=0<=a[1].indexOf("static"),c=";"!==a[6]?N[l(a[6])]:"{}";return new Lb(a[3],M(N[l(a[4])]),ra(c),b)}function Mb(a,b,c){this.definitions=a;this.fieldType=b;this.isStatic=c}function Ua(a){var b=ub.exec(a),c=0<=b[1].indexOf("static");a=a.substring(b[0].length).split(/,\s*/g);for(var e=Sa(b[2]),d=0;d<a.length;++d)a[d]=bb(a[d],e);return new Mb(a,b[2],c)}function Nb(a,b){this.params=a;this.body=b}function ac(a){a=RegExp(/"B(\d+)"\s*"A(\d+)"/).exec(a);var b=M(N[a[1]]);return new Nb(b,
ra(N[a[2]]))}function Ka(a,b,c,e,d,f){this.name=a;this.interfacesNames=b;this.methodsNames=c;this.fields=e;this.innerClasses=d;this.misc=f;a=0;for(b=e.length;a<b;++a)e[a].owner=this}function H(a,b,c,e,d,f,g,h,k){this.name=a;this.baseClassName=b;this.interfacesNames=c;this.functions=e;this.methods=d;this.fields=f;this.cstrs=g;this.innerClasses=h;this.misc=k;a=0;for(b=f.length;a<b;++a)f[a].owner=this}function lb(a,b){this.name=a;this.body=b;b.owner=this}function mb(a,b){this.name=a;this.body=b;b.owner=
this}function Ob(a){var b=qa.exec(a);qa.lastIndex=0;var c=N[l(b[6])];a=ja;var e="class"+ ++ab;ja=e;b="interface"===b[2]?new lb(b[3],eb(c,b[3],b[4])):new mb(b[3],ea(c,b[3],b[4],b[5]));b.classId=e;b.scopeId=a;X[e]=b;ja=a;return b}function vb(a,b,c){this.name=a;this.params=b;this.body=c}function rc(a){a=la.exec(a);la.lastIndex=0;return new vb(a[3],M(N[l(a[4])]),ra(N[l(a[6])]))}function Pb(a,b){this.argument=a;this.misc=b}function bc(a,b){this.argument=a;this.misc=b}function S(a,b,c){this.name=a;this.argument=
b;this.misc=c}function Qb(a){this.expr=a}function wb(a){this.label=a}function e(a){for(var b=[],c=0,e=a.length;c<e;++c){var d=a[c];d instanceof cb?b=b.concat(d.getNames()):d instanceof Pb&&d.argument.initStatement instanceof cb?b=b.concat(d.argument.initStatement.getNames()):(d instanceof Ja||d instanceof Jb||d instanceof lb||d instanceof mb||d instanceof vb||d instanceof Ia)&&b.push(d.name)}return h({},b)}function g(a){this.statements=a}function da(a){this.statements=a}var ha=m(),R=[];a=a.replace(/\r\n?|\n\r/g,
"\n").replace(/("(?:[^"\\\n]|\\.)*")|('(?:[^'\\\n]|\\.)*')|(([\[\(=|&!\^:?]\s*)(\/(?![*\/])(?:[^\/\\\n]|\\.)*\/[gim]*)\b)|(\/\/[^\n]*\n)|(\/\*(?:(?!\*\/)(?:.|\n))*\*\/)/g,function(a,b,c,e,d,f,g,h){return b||c?(b=R.length,R.push(a),"'"+b+"'"):e?(b=R.length,R.push(f),d+"'"+b+"'"):""!==h?" ":"\n"});a=a.replace(/__x([0-9A-F]{4})/g,function(a,b){return"__x005F_x"+b});a=a.replace(/\$/g,"__x0024");a=a.replace(/return\s*[\n\r]+/g,"return ");var ka,La=function(a,b,c,e){if(b||e)return a;ka=!0;return""};do ka=
!1,a=a.replace(/([<]?)<\s*((?:\?|[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)(?:\[\])*(?:\s+(?:extends|super)\s+[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)?(?:\s*,\s*(?:\?|[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)(?:\[\])*(?:\s+(?:extends|super)\s+[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)?)*)\s*>([=]?)/g,La);while(ka);var N=function(a){var b=[];a=a.split(/([\{\[\(\)\]\}])/);for(var c=a[0],e=[],d=1;d<a.length;d+=2){var f=a[d];if("["===f||"{"===f||"("===f)e.push(c),c=
f;else if("]"===f||"}"===f||")"===f){var g="}"===f?"A":")"===f?"B":"C",h=b.length;b.push(c+f);c=e.pop()+'"'+g+(h+1)+'"'}c+=a[d+1]}b.unshift(c);return b}(a),C,X={},ja,ab=0,ea,eb,ra,Da,ma,qa=/\b((?:(?:public|private|final|protected|static|abstract)\s+)*)(class|interface)\s+([A-Za-z_$][\w$]*\b)(\s+extends\s+[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*,\s*[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*\b)*)?(\s+implements\s+[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*,\s*[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*\b)*)?\s*("A\d+")/g,
la=/\b((?:(?:public|private|final|protected|static|abstract|synchronized)\s+)*)((?!(?:else|new|return|throw|function|public|private|protected)\b)[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*"C\d+")*)\s*([A-Za-z_$][\w$]*\b)\s*("B\d+")(\s*throws\s+[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*,\s*[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)*)?\s*("A\d+"|;)/g,Gb=/^((?:(?:public|private|final|protected|static)\s+)*)((?!(?:else|new|return|throw)\b)[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*"C\d+")*)\s*([A-Za-z_$][\w$]*\b)\s*(?:"C\d+"\s*)*([=,]|$)/,
Eb=/\b((?:(?:public|private|final|protected|static|abstract)\s+)*)((?!(?:new|return|throw)\b)[A-Za-z_$][\w$]*\b)\s*("B\d+")(\s*throws\s+[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*,\s*[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)*)?\s*("A\d+")/g,ub=/^((?:(?:public|private|final|protected|static)\s+)*)((?!(?:new|return|throw)\b)[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*"C\d+")*)\s*/,jb=/\bfunction(?:\s+([A-Za-z_$][\w$]*))?\s*("B\d+")\s*("A\d+")/g;q.prototype.toString=function(){return this.name};
D.prototype.getNames=function(){for(var a=[],b=0,c=this.params.length;b<c;++b)a.push(this.params[b].name);return a};D.prototype.prependMethodArgs=function(a){return this.methodArgsParam?"{\nvar "+this.methodArgsParam.name+" = Array.prototype.slice.call(arguments, "+this.params.length+");\n"+a.substring(1):a};D.prototype.toString=function(){if(0===this.params.length)return"()";for(var a="(",b=0,c=this.params.length;b<c;++b)a+=this.params[b]+", ";return a.substring(0,a.length-2)+")"};u.prototype.toString=
function(){return"new ("+this.body+")"};Ia.prototype.toString=function(){var a=C,b=h({"this":null},this.params.getNames());C=function(c){return b.hasOwnProperty(c.name)?c.name:a(c)};var c="function";this.name&&(c+=" "+this.name);var e=this.params.prependMethodArgs(this.body.toString()),c=c+(this.params+" "+e);C=a;return c};Y.prototype.toString=function(){var a=C;C=function(b){return"this"===b.name?"this":a(b)};for(var b="",c=0,e=this.members.length;c<e;++c)this.members[c].label&&(b+=this.members[c].label+
": "),b+=this.members[c].value.toString()+", ";C=a;return b.substring(0,b.length-2)};ta.prototype.toString=function(){var a=this.transforms;return sa(this.expr).replace(/"!(\d+)"/g,function(b,c){return a[c].toString()})};ma=function(a){var b=[];a=Z(a);a=a.replace(/"H(\d+)"/g,function(a,c){b.push(T(N[c]));return'"!'+(b.length-1)+'"'});a=a.replace(/"F(\d+)"/g,function(a,c){b.push(nd(N[c]));return'"!'+(b.length-1)+'"'});a=a.replace(/"I(\d+)"/g,function(a,c){b.push(U(N[c]));return'"!'+(b.length-1)+'"'});
return new ta(a,b)};$b.prototype.toString=function(){return this.name+" = "+this.value};cb.prototype.getNames=function(){for(var a=[],b=0,c=this.definitions.length;b<c;++b)a.push(this.definitions[b].name);return a};cb.prototype.toString=function(){return"var "+this.definitions.join(",")};Fb.prototype.toString=function(){return this.expression.toString()};Hb.prototype.toString=function(){return"("+this.initStatement+"; "+this.condition+"; "+this.step+")"};Ib.prototype.toString=function(){var a=this.initStatement.toString();
0<=a.indexOf("=")&&(a=a.substring(0,a.indexOf("=")));return"("+a+" in "+this.container+")"};wa.iteratorId=0;wa.prototype.toString=function(){var a=this.initStatement.toString(),b="$it"+wa.iteratorId++,a=a.replace(/^\s*var\s*/,"").split("=")[0];return"("+("var "+b+" = new $p.ObjectIterator("+this.container+"), "+a+" = void(0)")+"; "+(b+".hasNext() && (("+a+" = "+b+".next()) || true)")+";)"};Ja.prototype.toString=function(){return""+this.body};Jb.prototype.toString=function(){return""+this.body};Lb.prototype.toString=
function(){var a=h({},this.params.getNames()),b=C;C=function(c){return a.hasOwnProperty(c.name)?c.name:b(c)};var c=this.params.prependMethodArgs(this.body.toString()),c="function "+this.methodId+this.params+" "+c+"\n";C=b;return c};Mb.prototype.getNames=function(){for(var a=[],b=0,c=this.definitions.length;b<c;++b)a.push(this.definitions[b].name);return a};Mb.prototype.toString=function(){var a=C({name:"[this]"});if(this.isStatic){for(var b=this.owner.name,c=[],e=0,d=this.definitions.length;e<d;++e){var f=
this.definitions[e],g=f.name,h=b+"."+g;c.push("if("+h+" === void(0)) {\n "+h+" = "+f.value+"; }\n$p.defineProperty("+a+", '"+g+"', { get: function(){return "+h+";}, set: function(val){"+h+" = val;} });\n")}return c.join("")}return a+"."+this.definitions.join("; "+a+".")};Nb.prototype.toString=function(){var a=h({},this.params.getNames()),b=C;C=function(c){return a.hasOwnProperty(c.name)?c.name:b(c)};var c="function $constr_"+this.params.params.length+this.params.toString(),e=this.params.prependMethodArgs(this.body.toString());
/\$(superCstr|constr)\b/.test(e)||(e="{\n$superCstr();\n"+e.substring(1));C=b;return c+e+"\n"};Ka.prototype.getMembers=function(a,b,c){this.owner.base&&this.owner.base.body.getMembers(a,b,c);var e,d,f,g;e=0;for(f=this.fields.length;e<f;++e){var h=this.fields[e].getNames();d=0;for(g=h.length;d<g;++d)a[h[d]]=this.fields[e]}e=0;for(f=this.methodsNames.length;e<f;++e)b[this.methodsNames[e]]=!0;e=0;for(f=this.innerClasses.length;e<f;++e)a=this.innerClasses[e],c[a.name]=a};Ka.prototype.toString=function(){for(var a=
this.owner,b=0;a;)++b,a=a.scope;var a=this.name,c=b="";this.getMembers({},{},{});var e,d;if(this.owner.interfaces){var f=[],g;e=0;for(d=this.interfacesNames.length;e<d;++e)this.owner.interfaces[e]&&(g=C({name:this.interfacesNames[e]}),f.push(g),b+="$p.extendInterfaceMembers("+a+", "+g+");\n");c+=a+".$interfaces = ["+f.join(", ")+"];\n"}c=c+(a+".$isInterface = true;\n")+(a+".$methods = ['"+this.methodsNames.join("', '")+"'];\n");Ta(this.innerClasses);e=0;for(d=this.innerClasses.length;e<d;++e)f=this.innerClasses[e],
f.isStatic&&(b+=a+"."+f.name+" = "+f+";\n");e=0;for(d=this.fields.length;e<d;++e)f=this.fields[e],f.isStatic&&(b+=a+"."+f.definitions.join(";\n"+a+".")+";\n");return"(function() {\nfunction "+a+"() { throw 'Unable to create the interface'; }\n"+b+c+"return "+a+";\n})()"};eb=function(a,b,e){a=a.substring(1,a.length-1);a=v(a);a=x(a,b);var d=[],f=[];a=a.replace(/"([DE])(\d+)"/g,function(a,b,c){"D"===b?d.push(c):"E"===b&&f.push(c);return""});a=a.split(/;(?:\s*;)*/g);var g,h;e!==p&&(g=e.replace(/^\s*extends\s+(.+?)\s*$/g,
"$1").split(/\s*,\s*/g));e=0;for(h=d.length;e<h;++e){var k=fb(N[d[e]]);d[e]=k.name}e=0;for(h=a.length-1;e<h;++e)k=c(a[e]),a[e]=Ua(k.middle);k=a.pop();e=0;for(h=f.length;e<h;++e)f[e]=Kb(N[f[e]]);return new Ka(b,g,d,a,f,{tail:k})};H.prototype.getMembers=function(a,b,c){this.owner.base&&this.owner.base.body.getMembers(a,b,c);var e,d,f,g;e=0;for(f=this.fields.length;e<f;++e){var h=this.fields[e].getNames();d=0;for(g=h.length;d<g;++d)a[h[d]]=this.fields[e]}e=0;for(f=this.methods.length;e<f;++e)a=this.methods[e],
b[a.name]=a;e=0;for(f=this.innerClasses.length;e<f;++e)b=this.innerClasses[e],c[b.name]=b};H.prototype.toString=function(){var a="$this_"+function(a){for(var b=0;a;)++b,a=a.scope;return b}(this.owner),b=this.name,c="var "+a+" = this;\n",e="",d="",g={},h={},k={};this.getMembers(g,h,k);var l=C;C=function(c){var e=c.name;return"this"===e?c.callSign||!c.member?a+".$self":a:g.hasOwnProperty(e)?g[e].isStatic?b+"."+e:a+"."+e:k.hasOwnProperty(e)?a+"."+e:h.hasOwnProperty(e)?h[e].isStatic?b+"."+e:a+".$self."+
e:l(c)};var p;this.baseClassName?(p=l({name:this.baseClassName}),c=c+("var $super = { $upcast: "+a+" };\n")+("function $superCstr(){"+p+".apply($super,arguments);if(!('$self' in $super)) $p.extendClassChain($super)}\n"),d+=b+".$base = "+p+";\n"):c+="function $superCstr(){$p.extendClassChain("+a+")}\n";this.owner.base&&(e+="$p.extendStaticMembers("+b+", "+p+");\n");var r,n,m;if(this.owner.interfaces){n=[];p=0;for(r=this.interfacesNames.length;p<r;++p)this.owner.interfaces[p]&&(m=l({name:this.interfacesNames[p]}),
n.push(m),e+="$p.extendInterfaceMembers("+b+", "+m+");\n");d+=b+".$interfaces = ["+n.join(", ")+"];\n"}0<this.functions.length&&(c+=this.functions.join("\n")+"\n");Ta(this.innerClasses);p=0;for(r=this.innerClasses.length;p<r;++p)n=this.innerClasses[p],n.isStatic?(e+=b+"."+n.name+" = "+n+";\n",c+=a+"."+n.name+" = "+b+"."+n.name+";\n"):c+=a+"."+n.name+" = "+n+";\n";p=0;for(r=this.fields.length;p<r;++p){var v=this.fields[p];if(v.isStatic)for(e+=b+"."+v.definitions.join(";\n"+b+".")+";\n",n=0,m=v.definitions.length;n<
m;++n)var u=v.definitions[n].name,q=b+"."+u,c=c+("$p.defineProperty("+a+", '"+u+"', {get: function(){return "+q+"}, set: function(val){"+q+" = val}});\n");else c+=a+"."+v.definitions.join(";\n"+a+".")+";\n"}n={};p=0;for(r=this.methods.length;p<r;++p)m=this.methods[p],v=n[m.name],u=m.name+"$"+m.params.params.length,q=!!m.params.methodArgsParam,v?(++v,u+="_"+v):v=1,m.methodId=u,n[m.name]=v,m.isStatic?(e+=m,e+="$p.addMethod("+b+", '"+m.name+"', "+u+", "+q+");\n"):c+=m,c+="$p.addMethod("+a+", '"+m.name+
"', "+u+", "+q+");\n";c+=f(this.misc.tail);0<this.cstrs.length&&(c+=this.cstrs.join("\n")+"\n");c+="function $constr() {\n";n=[];p=0;for(r=this.cstrs.length;p<r;++p)m=this.cstrs[p].params.params.length,n.push("if(arguments.length "+(this.cstrs[p].params.methodArgsParam?">=":"===")+" "+m+") { $constr_"+m+".apply("+a+", arguments); }");0<n.length&&(c+=n.join(" else ")+" else ");c+="$superCstr();\n}\n";c+="$constr.apply(null, arguments);\n";C=l;return"(function() {\nfunction "+b+"() {\n"+c+"}\n"+e+d+
"return "+b+";\n})()"};ea=function(a,b,e,d){a=a.substring(1,a.length-1);a=v(a);a=x(a,b);var f=[],g=[],h=[],k=[];a=a.replace(/"([DEGH])(\d+)"/g,function(a,b,c){"D"===b?f.push(c):"E"===b?g.push(c):"H"===b?k.push(c):h.push(c);return""});a=a.replace(/^(?:\s*;)+/,"").split(/;(?:\s*;)*/g);var l,n;e!==p&&(l=e.replace(/^\s*extends\s+([A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)\s*$/g,"$1"));d!==p&&(n=d.replace(/^\s*implements\s+(.+?)\s*$/g,"$1").split(/\s*,\s*/g));for(e=0;e<k.length;++e)k[e]=T(N[k[e]]);
for(e=0;e<f.length;++e)f[e]=fb(N[f[e]]);for(e=0;e<a.length-1;++e)d=c(a[e]),a[e]=Ua(d.middle);d=a.pop();for(e=0;e<h.length;++e)h[e]=ac(N[h[e]]);for(e=0;e<g.length;++e)g[e]=Kb(N[g[e]]);return new H(b,l,n,k,f,a,h,g,{tail:d})};lb.prototype.toString=function(){return"var "+this.name+" = "+this.body+";\n$p."+this.name+" = "+this.name+";\n"};mb.prototype.toString=function(){return"var "+this.name+" = "+this.body+";\n$p."+this.name+" = "+this.name+";\n"};vb.prototype.toString=function(){var a=h({},this.params.getNames()),
b=C;C=function(c){return a.hasOwnProperty(c.name)?c.name:b(c)};var c=this.params.prependMethodArgs(this.body.toString()),c="function "+this.name+this.params+" "+c+"\n$p."+this.name+" = "+this.name+";\n"+this.name+" = "+this.name+".bind($p);";C=b;return c};Pb.prototype.toString=function(){return this.misc.prefix+this.argument.toString()};bc.prototype.toString=function(){return this.misc.prefix+this.argument.toString()};S.prototype.toString=function(){var a=this.misc.prefix;this.argument!==p&&(a+=this.argument.toString());
return a};Qb.prototype.toString=function(){return"case "+this.expr+":"};wb.prototype.toString=function(){return this.label};Da=function(a,b,e){var d=RegExp(/\b(catch|for|if|switch|while|with)\s*"B(\d+)"|\b(do|else|finally|return|throw|try|break|continue)\b|("[ADEH](\d+)")|\b(case)\s+([^:]+):|\b([A-Za-z_$][\w$]*\s*:)|(;)/g),g=[];a=a.replace(/\b(catch\s*"B\d+"\s*"A\d+")(\s*catch\s*"B\d+"\s*"A\d+")+/g,"$1");for(var h=0,k,l;null!==(k=d.exec(a));){if(k[1]!==p)l=a.lastIndexOf('"B',d.lastIndex),h=a.substring(h,
l),"for"===k[1]?g.push(new Pb(za(N[k[2]]),{prefix:h})):"catch"===k[1]?g.push(new bc(M(N[k[2]]),{prefix:h})):g.push(new S(k[1],ma(N[k[2]]),{prefix:h}));else if(k[3]!==p)g.push(new S(k[3],p,{prefix:a.substring(h,d.lastIndex)}));else if(k[4]!==p){l=a.substring(h,d.lastIndex-k[4].length);if(0!==f(l).length)continue;g.push(l);h=k[4].charAt(1);k=k[5];"D"===h?g.push(b(N[k])):"E"===h?g.push(e(N[k])):"H"===h?g.push(T(N[k])):g.push(ra(N[k]))}else if(k[6]!==p)g.push(new Qb(ma(f(k[7]))));else if(k[8]!==p){l=
a.substring(h,d.lastIndex-k[8].length);if(0!==f(l).length)continue;g.push(new wb(a.substring(h,d.lastIndex)))}else k=c(a.substring(h,d.lastIndex-1)),g.push(k.left),g.push(db(k.middle)),g.push(k.right+";");h=d.lastIndex}b=c(a.substring(h));g.push(b.left);""!==b.middle&&(g.push(db(b.middle)),g.push(";"+b.right));return g};g.prototype.toString=function(){var a=e(this.statements),b=C;k(a)||(C=function(c){return a.hasOwnProperty(c.name)?c.name:b(c)});var c="{\n"+this.statements.join("")+"\n}";C=b;return c};
ra=function(a){a=c(a.substring(1,a.length-1));return new g(Da(a.middle))};da.prototype.toString=function(){for(var a=[],c=[],f,g=0,h=this.statements.length;g<h;++g)f=this.statements[g],f instanceof mb||f instanceof lb?a.push(f):c.push(f);Ta(a);var k=e(this.statements);C=function(a){a=a.name;return k.hasOwnProperty(a)?a:ha.hasOwnProperty(a)||d.hasOwnProperty(a)||b.hasOwnProperty(a)?"$p."+a:a};a="// this code was autogenerated from PJS\n(function($p) {\n"+a.join("")+"\n"+c.join("")+"\n})";C=null;return a};
a=function(){var a=v(N[0]),a=a.replace(/\bimport\s+[^;]+;/g,"");return new da(Da(a,rc,Ob))}();(function(a){function b(a,e){for(var d=e.split("."),f=a.scope,g;f;){if(f.hasOwnProperty(d[0])){g=f[d[0]];break}f=f.scope}g===p&&(g=c[d[0]]);for(var f=1,h=d.length;f<h&&g;++f)g=g.inScope[d[f]];return g}var c={},e;for(e in X)if(X.hasOwnProperty(e)){a=X[e];var d=a.scopeId,f=a.name;d?(d=X[d],a.scope=d,d.inScope===p&&(d.inScope={}),d.inScope[f]=a):c[f]=a}for(e in X)if(X.hasOwnProperty(e)){a=X[e];if(f=a.body.baseClassName)if(f=
b(a,f))a.base=f,f.derived||(f.derived=[]),f.derived.push(a);var f=a.body.interfacesNames,d=[],g,h;if(f&&0<f.length){g=0;for(h=f.length;g<h;++g){var k=b(a,f[g]);d.push(k);k&&(k.derived||(k.derived=[]),k.derived.push(a))}0<d.length&&(a.interfaces=d)}}})(a);(function(a){function b(a,e){var d=c[a];if(!d)return!1;var f=d.indexOf(e);if(0>f)return!1;d.splice(f,1);if(0<d.length)return!1;delete c[a];return!0}a=[];var c={},e,d,f;for(e in X)if(X.hasOwnProperty(e))if(f=X[e],f.inScope||f.derived){var g=[];if(f.inScope)for(d in f.inScope)f.inScope.hasOwnProperty(d)&&
g.push(f.inScope[d]);f.derived&&(g=g.concat(f.derived));c[e]=g}else a.push(e),f.weight=0;for(;0<a.length;)if(e=a.shift(),f=X[e],f.scopeId&&b(f.scopeId,f)&&(a.push(f.scopeId),X[f.scopeId].weight=f.weight+1),f.base&&b(f.base.classId,f)&&(a.push(f.base.classId),f.base.weight=f.weight+1),f.interfaces)for(e=0,d=f.interfaces.length;e<d;++e)f.interfaces[e]&&b(f.interfaces[e].classId,f)&&(a.push(f.interfaces[e].classId),f.interfaces[e].weight=f.weight+1)})(a);a=a.toString();a=a.replace(/\s*\n(?:[\t ]*\n)+/g,
"\n\n");a=a.replace(/__x([0-9A-F]{4})/g,function(a,b){return String.fromCharCode(parseInt(b,16))});return function(a,b){return a.replace(/'(\d+)'/g,function(a,c){var e=b[c];return"/"===e.charAt(0)?e:/^'((?:[^'\\\n])|(?:\\.[0-9A-Fa-f]*))'$/.test(e)?"(new $p.Character("+e+"))":e})}(a,R)}function a(a,b){var d=RegExp(/\/\*\s*@pjs\s+((?:[^\*]|\*+[^\*\/])*)\*\//g).exec(a);if(d&&2===d.length)for(var f=[],d=d.splice(1,2)[0].replace(/\{([\s\S]*?)\}/g,function(){return function(a,b){f.push(b);return"{"+(f.length-
1)+"}"}}()).replace("\n","").replace("\r","").split(";"),h=function(a){return a.replace(/^\s*["']?/,"").replace(/["']?\s*$/,"")},k=0,l=d.length;k<l;k++){var p=d[k].split("=");if(p&&2===p.length){var n=h(p[0]),m=h(p[1]),p=[];if("preload"===n)for(p=m.split(","),n=0,m=p.length;n<m;n++){var x=h(p[n]);b.imageCache.add(x)}else if("font"===n)for(p=m.split(","),n=0,m=p.length;n<m;n++){var x=h(p[n]),D=/^\{(\d*?)\}$/.exec(x);PFont.preloading.add(D?JSON.parse("{"+f[D[1]]+"}"):x)}else"pauseOnBlur"===n?b.options.pauseOnBlur=
"true"===m:"globalKeyEvents"===n?b.options.globalKeyEvents="true"===m:"param-"===n.substring(0,6)?b.params[n.substring(6)]=m:b.options[n]=m}}return a}var b=h.defaultScope,d=b.PConstants,f=h.aFunctions,l=h.Browser.document,p;k.compile=function(b){var c=new k.Sketch;b=a(b,c);b=n(b);c.sourceCode=b;return c};k.logger=new function(a){var b={BufferMax:200};b.wrapper=a.createElement("div");b.wrapper.setAttribute("style","opacity:.75;display:block;position:fixed;bottom:0px;left:0px;right:0px;height:50px;background-color:#aaa");
b.dragger=a.createElement("div");b.dragger.setAttribute("style","display:block;border:3px black raised;cursor:n-resize;position:absolute;top:0px;left:0px;right:0px;height:5px;background-color:#333");b.closer=a.createElement("div");b.closer.onmouseover=function(){b.closer.style.setProperty("background-color","#ccc")};b.closer.onmouseout=function(){b.closer.style.setProperty("background-color","#ddd")};b.closer.innerHTML="&#10006;";b.closer.setAttribute("style","opacity:.5;display:block;border:3px black raised;position:absolute;top:10px;right:30px;height:20px;width:20px;background-color:#ddd;color:#000;line-height:20px;text-align:center;cursor:pointer;");
b.javaconsole=a.createElement("div");b.javaconsole.setAttribute("style","overflow-x: auto;display:block;position:absolute;left:10px;right:0px;bottom:5px;top:10px;overflow-y:scroll;height:40px;");b.wrapper.appendChild(b.dragger);b.wrapper.appendChild(b.javaconsole);b.wrapper.appendChild(b.closer);b.dragger.onmousedown=function(d){b.divheight=b.wrapper.style.height;a.selection?a.selection.empty():window.getSelection().removeAllRanges();var f=d.screenY;window.onmousemove=function(a){b.wrapper.style.height=
parseFloat(b.divheight)+(f-a.screenY)+"px";b.javaconsole.style.height=parseFloat(b.divheight)+(f-a.screenY)-10+"px"};window.onmouseup=function(d){a.selection?a.selection.empty():window.getSelection().removeAllRanges();b.wrapper.style.height=parseFloat(b.divheight)+(f-d.screenY)+"px";b.javaconsole.style.height=parseFloat(b.divheight)+(f-d.screenY)-10+"px";window.onmousemove=null;window.onmouseup=null}};b.BufferArray=[];b.print=b.log=function(a){b.BufferArray[b.BufferArray.length-1]?b.BufferArray[b.BufferArray.length-
1]+=a+"":b.BufferArray.push(a);b.javaconsole.innerHTML=b.BufferArray.join("");"hidden"===b.wrapper.style.visibility&&(b.wrapper.style.visibility="visible");"hidden"===b.wrapper.style.visibility&&(b.wrapper.style.visibility="visible")};b.println=function(d){a.body.appendChild(b.wrapper);b.print(d);b.BufferArray.push("<br/>");b.javaconsole.innerHTML=b.BufferArray.join("");"hidden"===b.wrapper.style.visibility&&(b.wrapper.style.visibility="visible");b.BufferArray.length>b.BufferMax?b.BufferArray.splice(0,
1):b.javaconsole.scrollTop=b.javaconsole.scrollHeight;"hidden"===b.wrapper.style.visibility&&(b.wrapper.style.visibility="visible")};b.showconsole=function(){b.wrapper.style.visibility="visible"};b.hideconsole=function(){b.wrapper.style.visibility="hidden"};b.closer.onclick=function(){b.hideconsole()};b.hideconsole();return b}(l);return k}},{}],26:[function(D,x,Q){x.exports=function(k,h){function m(a,b){return a in l?l[a]:"function"===typeof l[b]?l[b]:function(a){if(a instanceof Array)return a;if("number"===
typeof a){var b=[];b.length=a;return b}}}var n=k.defaultScope,a=k.extend,b=k.Browser,d=b.ajax,f=b.navigator,l=b.window,p=b.document,r=k.noop,c=n.PConstants;PFont=n.PFont;PShapeSVG=n.PShapeSVG;PVector=n.PVector;Char=Character=n.Char;ObjectIterator=n.ObjectIterator;XMLElement=n.XMLElement;XML=n.XML;var x=l.HTMLCanvasElement,D=l.HTMLImageElement,G=l.localStorage;p.head||(p.head=p.getElementsByTagName("head")[0]);var A=m("Float32Array","WebGLFloatArray"),Q=m("Int32Array","WebGLIntArray"),v=m("Uint16Array",
"WebGLUnsignedShortArray"),ga=m("Uint8Array","WebGLUnsignedByteArray");if(9<=p.documentMode&&!p.doctype)throw"The doctype directive is missing. The recommended doctype in Internet Explorer is the HTML5 doctype: <!DOCTYPE html>";var q=[],Zb={},M=this.Processing=function(b,k,m){function Ia(a,b,z){a.addEventListener?a.addEventListener(b,z,!1):a.attachEvent("on"+b,z);wb.push({elem:a,type:b,fn:z})}function T(a,b,z,c){var e=Fa.locations[a];e===h&&(e=g.getUniformLocation(b,z),Fa.locations[a]=e);null!==e&&
(4===c.length?g.uniform4fv(e,c):3===c.length?g.uniform3fv(e,c):2===c.length?g.uniform2fv(e,c):g.uniform1f(e,c))}function Y(a,b,z,c){var e=Fa.locations[a];e===h&&(e=g.getUniformLocation(b,z),Fa.locations[a]=e);null!==e&&(4===c.length?g.uniform4iv(e,c):3===c.length?g.uniform3iv(e,c):2===c.length?g.uniform2iv(e,c):g.uniform1i(e,c))}function U(a,b,z,c,e){var d=Fa.locations[a];d===h&&(d=g.getUniformLocation(b,z),Fa.locations[a]=d);-1!==d&&(16===e.length?g.uniformMatrix4fv(d,c,e):9===e.length?g.uniformMatrix3fv(d,
c,e):g.uniformMatrix2fv(d,c,e))}function Z(a,b,z,c,e){var d=Fa.attributes[a];d===h&&(d=g.getAttribLocation(b,z),Fa.attributes[a]=d);-1!==d&&(g.bindBuffer(g.ARRAY_BUFFER,e),g.vertexAttribPointer(d,c,g.FLOAT,!1,0,0),g.enableVertexAttribArray(d))}function sa(a,b,z){var c=Fa.attributes[a];c===h&&(c=g.getAttribLocation(b,z),Fa.attributes[a]=c);-1!==c&&g.disableVertexAttribArray(c)}function ta(a,b,z,$){Va===c.HSB?(z=e.color.toRGB(a,b,z),a=z[0],b=z[1],z=z[2]):(a=Math.round(255*(a/xa)),b=Math.round(255*(b/
Ea)),z=Math.round(255*(z/ya)));$=Math.round(255*($/ia));a=0>a?0:a;b=0>b?0:b;z=0>z?0:z;$=0>$?0:$;return(255<$?255:$)<<24&c.ALPHA_MASK|(255<a?255:a)<<16&c.RED_MASK|(255<b?255:b)<<8&c.GREEN_MASK|(255<z?255:z)&c.BLUE_MASK}function $b(a){if(a<=xa&&0<=a){if(Va===c.RGB)return ta(a,a,a,ia);if(Va===c.HSB)return ta(0,0,a/xa*ya,ia)}if(a)return 2147483647<a&&(a-=4294967296),a}function bb(a){var b,z,$;b=((a&c.RED_MASK)>>>16)/255;z=((a&c.GREEN_MASK)>>>8)/255;$=(a&c.BLUE_MASK)/255;a=e.max(e.max(b,z),$);var d=e.min(e.min(b,
z),$);if(d===a)return[0,0,a*ya];b=(b===a?(z-$)/(a-d):z===a?2+($-b)/(a-d):4+(b-z)/(a-d))/6;0>b?b+=1:1<b&&(b-=1);return[b*xa,(a-d)/a*Ea,a*ya]}function Sa(){g.restore();N=ab=!0}function cb(){var a=(Date.now()-tc)/1E3;ec++;var b=ec/a;0.5<a&&(tc=Date.now(),ec=0,e.__frameRate=b);e.frameCount++}function Fb(a){a=parseInt("0x"+a,16);2147483647<a&&(a-=4294967296);return a}function db(a){if("number"===typeof a)return 0!==a;if("boolean"===typeof a)return a;if("string"===typeof a)return"true"===a.toLowerCase();
if(a instanceof Char)return 49===a.code||84===a.code||116===a.code}function Hb(a){if("number"===typeof a)return a;if("boolean"===typeof a)return a?1:0;if("string"===typeof a)return parseFloat(a);if(a instanceof Char)return a.code}function Ib(a,b){if("number"===typeof a)return a&4294967295;if("boolean"===typeof a)return a?1:0;if("string"===typeof a)return parseInt(a,b||10)&4294967295;if(a instanceof Char)return a.code}function wa(){R&&(N&&(g.fillStyle=e.color.toString(La),N=!1),g.fill())}function za(){C&&
(ab&&(g.strokeStyle=e.color.toString(ja),ab=!1),g.stroke())}function Ta(){wa();za();g.closePath()}function Ja(a,b,z){var c=Mc.shift();c===h&&(c={},c.canvas=p.createElement("canvas"),c.context=c.canvas.getContext("2d"));Mc.push(c);var e=c.canvas,d=c.context;b=b||a.width;z=z||a.height;e.width=b;e.height=z;a?"data"in a?d.putImageData(a,0,0):(d.clearRect(0,0,b,z),d.drawImage(a,0,0,b,z)):d.clearRect(0,0,b,z);return c}function Jb(a){return{getLength:function(a){return function(){if(a.isRemote)throw"Image is loaded remotely. Cannot get length.";
return a.imageData.data.length?a.imageData.data.length/4:0}}(a),getPixel:function(a){return function(L){L*=4;var b=a.imageData.data;if(a.isRemote)throw"Image is loaded remotely. Cannot get pixels.";return b[L+3]<<24&c.ALPHA_MASK|b[L]<<16&c.RED_MASK|b[L+1]<<8&c.GREEN_MASK|b[L+2]&c.BLUE_MASK}}(a),setPixel:function(a){return function(L,b){var e=4*L,d=a.imageData.data;if(a.isRemote)throw"Image is loaded remotely. Cannot set pixel.";d[e+0]=(b&c.RED_MASK)>>>16;d[e+1]=(b&c.GREEN_MASK)>>>8;d[e+2]=b&c.BLUE_MASK;
d[e+3]=(b&c.ALPHA_MASK)>>>24;a.__isDirty=!0}}(a),toArray:function(a){return function(){var L=[],b=a.imageData.data,e=a.width*a.height;if(a.isRemote)throw"Image is loaded remotely. Cannot get pixels.";for(var d=0,f=0;d<e;d++,f+=4)L.push(b[f+3]<<24&c.ALPHA_MASK|b[f]<<16&c.RED_MASK|b[f+1]<<8&c.GREEN_MASK|b[f+2]&c.BLUE_MASK);return L}}(a),set:function(a){return function(L){var b,e,d;if(this.isRemote)throw"Image is loaded remotely. Cannot set pixels.";e=a.imageData.data;for(var f=0,g=L.length;f<g;f++)d=
L[f],b=4*f,e[b+0]=(d&c.RED_MASK)>>>16,e[b+1]=(d&c.GREEN_MASK)>>>8,e[b+2]=d&c.BLUE_MASK,e[b+3]=(d&c.ALPHA_MASK)>>>24;a.__isDirty=!0}}(a)}}function Kb(a,b,z,$){var d=new Ga(z,$,c.ARGB);d.fromImageData(e.toImageData(a,b,z,$));return d}function Lb(a,b,z,e,d){if(d.isRemote)throw"Image is loaded remotely. Cannot get x,y,w,h.";var f=new Ga(z,e,c.ARGB),g=f.imageData.data,h=d.width,s=d.height;d=d.imageData.data;var k=Math.max(0,-b),l=Math.max(0,-a);e=Math.min(e,s-b);for(s=Math.min(z,h-a);k<e;++k)for(var n=
4*((b+k)*h+(a+l)),p=4*(k*z+l),m=l;m<s;++m)g[p++]=d[n++],g[p++]=d[n++],g[p++]=d[n++],g[p++]=d[n++];f.__isDirty=!0;return f}function fb(){Rb&&(g=Nc,Rb=!1,e.updatePixels())}function Mb(){function a(L,b){L[b]=function(){fb();g[b].apply(g,arguments)}}function b(a,L){e.defineProperty(a,L,{get:function(){fb();return g[L]},set:function(a){fb();g[L]=a}})}for(var z in g)"function"===typeof g[z]?a(this,z):b(this,z)}function Ua(a){return a instanceof String?a:"number"===typeof a?a===(0|a)?a.toString():e.nf(a,
0,3):null===a||a===h?"":a.toString()}function Nb(a,b,z,e){var d;0>a.indexOf("\n")?(a=[a],d=1):(a=a.split(/\r?\n/g),d=a.length);var f=0;Wa===c.TOP?f=Xa+Ma:Wa===c.CENTER?f=Xa/2-(d-1)*Aa/2:Wa===c.BOTTOM&&(f=-(Ma+(d-1)*Aa));for(var g=0;g<d;++g)ha.text$line(a[g],b,z+f,e,nb),f+=Aa}function ac(a,b,z,e,d,f){if(0!==a.length&&(0!==e&&0!==d)&&!(Na>d)){for(var g=-1,h=0,s=0,k=[],l=0,n=a.length;l<n;l++){var p=a[l],m=" "===p,r=ba.measureTextWidth(p);if("\n"!==p&&s+r<=e)m&&(g=l),s+=r;else{if(g+1===h)if(0<l)g=l;else return;
"\n"===p?(k.push({text:a.substring(h,l),width:s}),h=l+1):(k.push({text:a.substring(h,g+1),width:s}),h=g+1);s=0;l=h-1}}h<n&&k.push({text:a.substring(h),width:s});a=1;g=Xa;nb===c.CENTER?a=e/2:nb===c.RIGHT&&(a=e);e=k.length;h=Math.min(e,Math.floor(d/Aa));Wa===c.TOP?g=Xa+Ma:Wa===c.CENTER?g=d/2-Aa*(h/2-1):Wa===c.BOTTOM&&(g=Ma+Aa);for(h=0;h<e;h++){l=h*Aa;if(g+l>d-Ma)break;s=k[h];ha.text$line(s.text,b+a,z+g+l,f,nb)}}}function Ka(a){ha="3D"===a?new B:"2D"===a?new E:new F;for(var b in F.prototype)F.prototype.hasOwnProperty(b)&&
0>b.indexOf("$")&&(e[b]=ha[b]);ha.$init()}function H(a){return function(){Ka("2D");return ha[a].apply(this,arguments)}}function lb(a){a=a.which||a.keyCode;switch(a){case 13:return 10;case 91:case 93:case 224:return 157;case 57392:return 17;case 46:return 127;case 45:return 155}return a}function mb(a){"function"===typeof a.preventDefault?a.preventDefault():"function"===typeof a.stopPropagation&&a.stopPropagation();return!1}function Ob(){for(var a in hb)if(hb.hasOwnProperty(a)){e.__keyPressed=!0;return}e.__keyPressed=
!1}function vb(a,b){hb[a]=b;ob=null;e.key=b;e.keyCode=a;e.keyPressed();e.keyCode=0;e.keyTyped();Ob()}function rc(a){var b=lb(a);if(b===c.DELETE)vb(b,new Char(127));else if(0>qd.indexOf(b))ob=b;else{var z=new Char(c.CODED);e.key=z;e.keyCode=b;hb[b]=z;e.keyPressed();ob=null;Ob();return mb(a)}}function Pb(a){if(null!==ob){var b=ob,z;z=a.which||a.keyCode;var c=a.shiftKey||a.ctrlKey||a.altKey||a.metaKey;switch(z){case 13:z=c?13:10;break;case 8:z=c?127:8}z=new Char(z);vb(b,z);return mb(a)}}function bc(a){a=
lb(a);var b=hb[a];b!==h&&(e.key=b,e.keyCode=a,e.keyReleased(),delete hb[a],Ob())}if(!(this instanceof M))throw"called Processing constructor as if it were a function: missing 'new'.";var S={},Qb=b===h&&k===h,S=Qb?p.createElement("canvas"):"string"===typeof b?p.getElementById(b):b;if(!("getContext"in S))throw"called Processing constructor without passing canvas element reference or id.";var wb=[],e=this;e.Char=e.Character=Char;a.withCommonFunctions(e);a.withMath(e);a.withProxyFunctions(e,function(a){return Array.prototype.slice.call(a,
1)});a.withTouch(e,S,Ia,p,c);m&&Object.keys(m).forEach(function(a){e[a]=m[a]});e.externals={canvas:S,context:h,sketch:h,window:l};e.name="Processing.js Instance";e.use3DContext=!1;e.focused=!1;e.breakShape=!1;e.glyphTable={};e.pmouseX=0;e.pmouseY=0;e.mouseX=0;e.mouseY=0;e.mouseButton=0;e.mouseScroll=0;e.mouseClicked=h;e.mouseDragged=h;e.mouseMoved=h;e.mousePressed=h;e.mouseReleased=h;e.mouseScrolled=h;e.mouseOver=h;e.mouseOut=h;e.touchStart=h;e.touchEnd=h;e.touchMove=h;e.touchCancel=h;e.key=h;e.keyCode=
h;e.keyPressed=r;e.keyReleased=r;e.keyTyped=r;e.draw=h;e.setup=h;e.__mousePressed=!1;e.__keyPressed=!1;e.__frameRate=60;e.frameCount=0;e.width=100;e.height=100;var g,da,ha,R=!0,ka=[1,1,1,1],La=4294967295,N=!0,C=!0,X=[0,0,0,1],ja=4278190080,ab=!0,ea=1,eb=!1,ra=!1,Da=!0,ma=0,qa=c.CORNER,la=c.CENTER,Gb=0,Eb=0,ub=0,jb=c.NORMAL_MODE_AUTO,tb=60,Kc=1E3/tb,od=S.style.cursor,aa=c.POLYGON,oc=0,pc=20,Lc=!1,kb=-3355444,qc=20,ia=255,xa=255,Ea=255,ya=255,cc=0,dc=0,Va=c.RGB,gb=null,sc=null,Oc=Date.now(),tc=Oc,ec=
0,Ba,Sb,fc,xb,yb,uc,vc,Fa={attributes:{},locations:{}},y,J,na,wc,xc,yc,gc,zc,Tb,Ac,Pc,Bc,Qc,hc,Rc,Sc,Tc,Uc=0,Vc=0,Wc=c.IMAGE,ua=!1,Cc,Dc,Ec,nb=c.LEFT,Wa=c.BASELINE,ic=c.MODEL,zb="Arial",Na=12,Xa=9,Ma=2,Aa=14,ba=PFont.get(zb,Na),Nc,Fc=null,Rb=!1,Xc,Yc=1E3,hb=[],ob=null,qd=[c.SHIFT,c.CONTROL,c.ALT,c.CAPSLK,c.PGUP,c.PGDN,c.END,c.HOME,c.LEFT,c.UP,c.RIGHT,c.DOWN,c.NUMLK,c.INSERT,c.F1,c.F2,c.F3,c.F4,c.F5,c.F6,c.F7,c.F8,c.F9,c.F10,c.F11,c.F12,c.META],O=0,jc=0,pb=0,Oa=[],Pa=[],Qa=[],Ub=new A(c.SINCOS_LENGTH),
Vb=new A(c.SINCOS_LENGTH),P,qb,Ra,K,fa,Ab,Bb,Wb,Ha,kc=!1,lc=60*(Math.PI/180),Gc=e.width/2,rb=e.height/2,sb=rb/Math.tan(lc/2),Zc=sb/10,$c=10*sb,ad=e.width/e.height,t=[],va=[],oa=0,Cb=!1,Db=!1,ib=!0,Xb=c.CORNER,bd=[],cd=new A([0.5,0.5,-0.5,0.5,-0.5,-0.5,-0.5,-0.5,-0.5,-0.5,-0.5,-0.5,-0.5,0.5,-0.5,0.5,0.5,-0.5,0.5,0.5,0.5,-0.5,0.5,0.5,-0.5,-0.5,0.5,-0.5,-0.5,0.5,0.5,-0.5,0.5,0.5,0.5,0.5,0.5,0.5,-0.5,0.5,0.5,0.5,0.5,-0.5,0.5,0.5,-0.5,0.5,0.5,-0.5,-0.5,0.5,0.5,-0.5,0.5,-0.5,-0.5,0.5,-0.5,0.5,-0.5,-0.5,
0.5,-0.5,-0.5,0.5,-0.5,-0.5,-0.5,0.5,-0.5,-0.5,-0.5,-0.5,-0.5,-0.5,-0.5,0.5,-0.5,0.5,0.5,-0.5,0.5,0.5,-0.5,0.5,-0.5,-0.5,-0.5,-0.5,0.5,0.5,0.5,0.5,0.5,-0.5,-0.5,0.5,-0.5,-0.5,0.5,-0.5,-0.5,0.5,0.5,0.5,0.5,0.5]),dd=new A([0.5,0.5,0.5,0.5,-0.5,0.5,0.5,0.5,-0.5,0.5,-0.5,-0.5,-0.5,0.5,-0.5,-0.5,-0.5,-0.5,-0.5,0.5,0.5,-0.5,-0.5,0.5,0.5,0.5,0.5,0.5,0.5,-0.5,0.5,0.5,-0.5,-0.5,0.5,-0.5,-0.5,0.5,-0.5,-0.5,0.5,0.5,-0.5,0.5,0.5,0.5,0.5,0.5,0.5,-0.5,0.5,0.5,-0.5,-0.5,0.5,-0.5,-0.5,-0.5,-0.5,-0.5,-0.5,-0.5,-0.5,
-0.5,-0.5,0.5,-0.5,-0.5,0.5,0.5,-0.5,0.5]),rd=new A([0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0]),Hc=new A([0,0,0,0,1,0,1,1,0,1,0,0]),sd=new A([0,0,1,0,0,1,0,0,1,0,0,1]),td="varying vec4 vFrontColor;attribute vec3 aVertex;attribute vec3 aNormal;attribute vec4 aColor;attribute vec2 aTexture;varying   vec2 vTexture;uniform vec4 uColor;uniform bool uUsingMat;uniform vec3 uSpecular;uniform vec3 uMaterialEmissive;uniform vec3 uMaterialAmbient;uniform vec3 uMaterialSpecular;uniform float uShininess;uniform mat4 uModel;uniform mat4 uView;uniform mat4 uProjection;uniform mat4 uNormalTransform;uniform int uLightCount;uniform vec3 uFalloff;struct Light {  int type;  vec3 color;  vec3 position;  vec3 direction;  float angle;  vec3 halfVector;  float concentration;};uniform Light uLights0;uniform Light uLights1;uniform Light uLights2;uniform Light uLights3;uniform Light uLights4;uniform Light uLights5;uniform Light uLights6;uniform Light uLights7;Light getLight(int index){  if(index == 0) return uLights0;  if(index == 1) return uLights1;  if(index == 2) return uLights2;  if(index == 3) return uLights3;  if(index == 4) return uLights4;  if(index == 5) return uLights5;  if(index == 6) return uLights6;  return uLights7;}void AmbientLight( inout vec3 totalAmbient, in vec3 ecPos, in Light light ) {  float d = length( light.position - ecPos );  float attenuation = 1.0 / ( uFalloff[0] + ( uFalloff[1] * d ) + ( uFalloff[2] * d * d ));  totalAmbient += light.color * attenuation;}void DirectionalLight( inout vec3 col, inout vec3 spec, in vec3 vertNormal, in vec3 ecPos, in Light light ) {  float powerFactor = 0.0;  float nDotVP = max(0.0, dot( vertNormal, normalize(-light.position) ));  float nDotVH = max(0.0, dot( vertNormal, normalize(-light.position-normalize(ecPos) )));  if( nDotVP != 0.0 ){    powerFactor = pow( nDotVH, uShininess );  }  col += light.color * nDotVP;  spec += uSpecular * powerFactor;}void PointLight( inout vec3 col, inout vec3 spec, in vec3 vertNormal, in vec3 ecPos, in Light light ) {  float powerFactor;   vec3 VP = light.position - ecPos;  float d = length( VP );   VP = normalize( VP );  float attenuation = 1.0 / ( uFalloff[0] + ( uFalloff[1] * d ) + ( uFalloff[2] * d * d ));  float nDotVP = max( 0.0, dot( vertNormal, VP ));  vec3 halfVector = normalize( VP - normalize(ecPos) );  float nDotHV = max( 0.0, dot( vertNormal, halfVector ));  if( nDotVP == 0.0 ) {    powerFactor = 0.0;  }  else {    powerFactor = pow( nDotHV, uShininess );  }  spec += uSpecular * powerFactor * attenuation;  col += light.color * nDotVP * attenuation;}void SpotLight( inout vec3 col, inout vec3 spec, in vec3 vertNormal, in vec3 ecPos, in Light light ) {  float spotAttenuation;  float powerFactor = 0.0;  vec3 VP = light.position - ecPos;  vec3 ldir = normalize( -light.direction );  float d = length( VP );  VP = normalize( VP );  float attenuation = 1.0 / ( uFalloff[0] + ( uFalloff[1] * d ) + ( uFalloff[2] * d * d ) );  float spotDot = dot( VP, ldir );"+
(/Windows/.test(f.userAgent)?"  spotAttenuation = 1.0; ":"  if( spotDot > cos( light.angle ) ) {    spotAttenuation = pow( spotDot, light.concentration );  }  else{    spotAttenuation = 0.0;  }  attenuation *= spotAttenuation;")+"  float nDotVP = max( 0.0, dot( vertNormal, VP ) );  vec3 halfVector = normalize( VP - normalize(ecPos) );  float nDotHV = max( 0.0, dot( vertNormal, halfVector ) );  if( nDotVP != 0.0 ) {    powerFactor = pow( nDotHV, uShininess );  }  spec += uSpecular * powerFactor * attenuation;  col += light.color * nDotVP * attenuation;}void main(void) {  vec3 finalAmbient = vec3( 0.0 );  vec3 finalDiffuse = vec3( 0.0 );  vec3 finalSpecular = vec3( 0.0 );  vec4 col = uColor;  if ( uColor[0] == -1.0 ){    col = aColor;  }  vec3 norm = normalize(vec3( uNormalTransform * vec4( aNormal, 0.0 ) ));  vec4 ecPos4 = uView * uModel * vec4(aVertex, 1.0);  vec3 ecPos = (vec3(ecPos4))/ecPos4.w;  if( uLightCount == 0 ) {    vFrontColor = col + vec4(uMaterialSpecular, 1.0);  }  else {    for( int i = 0; i < 8; i++ ) {      Light l = getLight(i);      if( i >= uLightCount ){        break;      }      if( l.type == 0 ) {        AmbientLight( finalAmbient, ecPos, l );      }      else if( l.type == 1 ) {        DirectionalLight( finalDiffuse, finalSpecular, norm, ecPos, l );      }      else if( l.type == 2 ) {        PointLight( finalDiffuse, finalSpecular, norm, ecPos, l );      }      else {        SpotLight( finalDiffuse, finalSpecular, norm, ecPos, l );      }    }   if( uUsingMat == false ) {     vFrontColor = vec4(       vec3( col ) * finalAmbient +       vec3( col ) * finalDiffuse +       vec3( col ) * finalSpecular,       col[3] );   }   else{     vFrontColor = vec4(        uMaterialEmissive +        (vec3(col) * uMaterialAmbient * finalAmbient ) +        (vec3(col) * finalDiffuse) +        (uMaterialSpecular * finalSpecular),        col[3] );    }  }  vTexture.xy = aTexture.xy;  gl_Position = uProjection * uView * uModel * vec4( aVertex, 1.0 );}",
Ic=function(a,b,z){var c=a.createShader(a.VERTEX_SHADER);a.shaderSource(c,b);a.compileShader(c);if(!a.getShaderParameter(c,a.COMPILE_STATUS))throw a.getShaderInfoLog(c);b=a.createShader(a.FRAGMENT_SHADER);a.shaderSource(b,z);a.compileShader(b);if(!a.getShaderParameter(b,a.COMPILE_STATUS))throw a.getShaderInfoLog(b);z=a.createProgram();a.attachShader(z,c);a.attachShader(z,b);a.linkProgram(z);if(!a.getProgramParameter(z,a.LINK_STATUS))throw"Error linking shaders.";return z},ed=function(a,b,z,c,e){return{x:a,
y:b,w:z,h:c}},mc=ed,ud=function(a,b,z,c,e){return{x:a,y:b,w:e?z:z-a,h:e?c:c-b}},vd=function(a,b,z,c,e){return{x:a-z/2,y:b-c/2,w:z,h:c}},W=function(){},E=function(){},B=function(){},F=function(){};E.prototype=new W;E.prototype.constructor=E;B.prototype=new W;B.prototype.constructor=B;F.prototype=new W;F.prototype.constructor=F;W.prototype.a3DOnlyFunction=r;e.shape=function(a,b,z,$,d){1<=arguments.length&&null!==arguments[0]&&a.isVisible()&&(e.pushMatrix(),Xb===c.CENTER?5===arguments.length?(e.translate(b-
$/2,z-d/2),e.scale($/a.getWidth(),d/a.getHeight())):3===arguments.length?e.translate(b-a.getWidth()/2,-a.getHeight()/2):e.translate(-a.getWidth()/2,-a.getHeight()/2):Xb===c.CORNER?5===arguments.length?(e.translate(b,z),e.scale($/a.getWidth(),d/a.getHeight())):3===arguments.length&&e.translate(b,z):Xb===c.CORNERS&&(5===arguments.length?($-=b,d-=z,e.translate(b,z),e.scale($/a.getWidth(),d/a.getHeight())):3===arguments.length&&e.translate(b,z)),a.draw(e),(1===arguments.length&&Xb===c.CENTER||1<arguments.length)&&
e.popMatrix())};e.shapeMode=function(a){Xb=a};e.loadShape=function(a){return 1===arguments.length&&-1<a.indexOf(".svg")?new PShapeSVG(null,a):null};e.loadXML=function(a){return new XML(e,a)};var fd=function(a){for(var b=0,z=0;z<a.length;z++)b=0!==z?Math.max(b,Math.abs(a[z])):Math.abs(a[z]);a=(b+"").indexOf(".");0===a?a=1:-1===a&&(a=(b+"").length);return a},Ya=e.PMatrix2D=function(){0===arguments.length?this.reset():1===arguments.length&&arguments[0]instanceof Ya?this.set(arguments[0].array()):6===
arguments.length&&this.set(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])};Ya.prototype={set:function(){if(6===arguments.length){var a=arguments;this.set([a[0],a[1],a[2],a[3],a[4],a[5]])}else 1===arguments.length&&arguments[0]instanceof Ya?this.elements=arguments[0].array():1===arguments.length&&arguments[0]instanceof Array&&(this.elements=arguments[0].slice())},get:function(){var a=new Ya;a.set(this.elements);return a},reset:function(){this.set([1,0,0,0,1,0])},array:function(){return this.elements.slice()},
translate:function(a,b){this.elements[2]=a*this.elements[0]+b*this.elements[1]+this.elements[2];this.elements[5]=a*this.elements[3]+b*this.elements[4]+this.elements[5]},invTranslate:function(a,b){this.translate(-a,-b)},transpose:function(){},mult:function(a,b){var z,c;a instanceof PVector?(z=a.x,c=a.y,b||(b=new PVector)):a instanceof Array&&(z=a[0],c=a[1],b||(b=[]));b instanceof Array?(b[0]=this.elements[0]*z+this.elements[1]*c+this.elements[2],b[1]=this.elements[3]*z+this.elements[4]*c+this.elements[5]):
b instanceof PVector&&(b.x=this.elements[0]*z+this.elements[1]*c+this.elements[2],b.y=this.elements[3]*z+this.elements[4]*c+this.elements[5],b.z=0);return b},multX:function(a,b){return a*this.elements[0]+b*this.elements[1]+this.elements[2]},multY:function(a,b){return a*this.elements[3]+b*this.elements[4]+this.elements[5]},skewX:function(a){this.apply(1,0,1,a,0,0)},skewY:function(a){this.apply(1,0,1,0,a,0)},shearX:function(a){this.apply(1,0,1,Math.tan(a),0,0)},shearY:function(a){this.apply(1,0,1,0,
Math.tan(a),0)},determinant:function(){return this.elements[0]*this.elements[4]-this.elements[1]*this.elements[3]},invert:function(){var a=this.determinant();if(Math.abs(a)>c.MIN_INT){var b=this.elements[0],z=this.elements[1],e=this.elements[2],d=this.elements[3],f=this.elements[4],g=this.elements[5];this.elements[0]=f/a;this.elements[3]=-d/a;this.elements[1]=-z/a;this.elements[4]=b/a;this.elements[2]=(z*g-f*e)/a;this.elements[5]=(d*e-b*g)/a;return!0}return!1},scale:function(a,b){a&&!b&&(b=a);a&&
b&&(this.elements[0]*=a,this.elements[1]*=b,this.elements[3]*=a,this.elements[4]*=b)},invScale:function(a,b){a&&!b&&(b=a);this.scale(1/a,1/b)},apply:function(){var a;1===arguments.length&&arguments[0]instanceof Ya?a=arguments[0].array():6===arguments.length?a=Array.prototype.slice.call(arguments):1===arguments.length&&arguments[0]instanceof Array&&(a=arguments[0]);for(var b=[0,0,this.elements[2],0,0,this.elements[5]],z=0,c=0;2>c;c++)for(var e=0;3>e;e++,z++)b[z]+=this.elements[3*c+0]*a[e+0]+this.elements[3*
c+1]*a[e+3];this.elements=b.slice()},preApply:function(){var a;1===arguments.length&&arguments[0]instanceof Ya?a=arguments[0].array():6===arguments.length?a=Array.prototype.slice.call(arguments):1===arguments.length&&arguments[0]instanceof Array&&(a=arguments[0]);var b=[0,0,a[2],0,0,a[5]];b[2]=a[2]+this.elements[2]*a[0]+this.elements[5]*a[1];b[5]=a[5]+this.elements[2]*a[3]+this.elements[5]*a[4];b[0]=this.elements[0]*a[0]+this.elements[3]*a[1];b[3]=this.elements[0]*a[3]+this.elements[3]*a[4];b[1]=
this.elements[1]*a[0]+this.elements[4]*a[1];b[4]=this.elements[1]*a[3]+this.elements[4]*a[4];this.elements=b.slice()},rotate:function(a){var b=Math.cos(a);a=Math.sin(a);var c=this.elements[0],e=this.elements[1];this.elements[0]=b*c+a*e;this.elements[1]=-a*c+b*e;c=this.elements[3];e=this.elements[4];this.elements[3]=b*c+a*e;this.elements[4]=-a*c+b*e},rotateZ:function(a){this.rotate(a)},invRotateZ:function(a){this.rotateZ(a-Math.PI)},print:function(){var a=fd(this.elements),a=""+e.nfs(this.elements[0],
a,4)+" "+e.nfs(this.elements[1],a,4)+" "+e.nfs(this.elements[2],a,4)+"\n"+e.nfs(this.elements[3],a,4)+" "+e.nfs(this.elements[4],a,4)+" "+e.nfs(this.elements[5],a,4)+"\n\n";e.println(a)}};var I=e.PMatrix3D=function(){this.reset()};I.prototype={set:function(){16===arguments.length?this.elements=Array.prototype.slice.call(arguments):1===arguments.length&&arguments[0]instanceof I?this.elements=arguments[0].array():1===arguments.length&&arguments[0]instanceof Array&&(this.elements=arguments[0].slice())},
get:function(){var a=new I;a.set(this.elements);return a},reset:function(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]},array:function(){return this.elements.slice()},translate:function(a,b,c){c===h&&(c=0);this.elements[3]+=a*this.elements[0]+b*this.elements[1]+c*this.elements[2];this.elements[7]+=a*this.elements[4]+b*this.elements[5]+c*this.elements[6];this.elements[11]+=a*this.elements[8]+b*this.elements[9]+c*this.elements[10];this.elements[15]+=a*this.elements[12]+b*this.elements[13]+c*this.elements[14]},
transpose:function(){var a=this.elements[4];this.elements[4]=this.elements[1];this.elements[1]=a;a=this.elements[8];this.elements[8]=this.elements[2];this.elements[2]=a;a=this.elements[6];this.elements[6]=this.elements[9];this.elements[9]=a;a=this.elements[3];this.elements[3]=this.elements[12];this.elements[12]=a;a=this.elements[7];this.elements[7]=this.elements[13];this.elements[13]=a;a=this.elements[11];this.elements[11]=this.elements[14];this.elements[14]=a},mult:function(a,b){var c,e,d,f;a instanceof
PVector?(c=a.x,e=a.y,d=a.z,f=1,b||(b=new PVector)):a instanceof Array&&(c=a[0],e=a[1],d=a[2],f=a[3]||1,!b||3!==b.length&&4!==b.length)&&(b=[0,0,0]);b instanceof Array&&(3===b.length?(b[0]=this.elements[0]*c+this.elements[1]*e+this.elements[2]*d+this.elements[3],b[1]=this.elements[4]*c+this.elements[5]*e+this.elements[6]*d+this.elements[7],b[2]=this.elements[8]*c+this.elements[9]*e+this.elements[10]*d+this.elements[11]):4===b.length&&(b[0]=this.elements[0]*c+this.elements[1]*e+this.elements[2]*d+this.elements[3]*
f,b[1]=this.elements[4]*c+this.elements[5]*e+this.elements[6]*d+this.elements[7]*f,b[2]=this.elements[8]*c+this.elements[9]*e+this.elements[10]*d+this.elements[11]*f,b[3]=this.elements[12]*c+this.elements[13]*e+this.elements[14]*d+this.elements[15]*f));b instanceof PVector&&(b.x=this.elements[0]*c+this.elements[1]*e+this.elements[2]*d+this.elements[3],b.y=this.elements[4]*c+this.elements[5]*e+this.elements[6]*d+this.elements[7],b.z=this.elements[8]*c+this.elements[9]*e+this.elements[10]*d+this.elements[11]);
return b},preApply:function(){var a;1===arguments.length&&arguments[0]instanceof I?a=arguments[0].array():16===arguments.length?a=Array.prototype.slice.call(arguments):1===arguments.length&&arguments[0]instanceof Array&&(a=arguments[0]);for(var b=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],c=0,e=0;4>e;e++)for(var d=0;4>d;d++,c++)b[c]+=this.elements[d+0]*a[4*e+0]+this.elements[d+4]*a[4*e+1]+this.elements[d+8]*a[4*e+2]+this.elements[d+12]*a[4*e+3];this.elements=b.slice()},apply:function(){var a;1===arguments.length&&
arguments[0]instanceof I?a=arguments[0].array():16===arguments.length?a=Array.prototype.slice.call(arguments):1===arguments.length&&arguments[0]instanceof Array&&(a=arguments[0]);for(var b=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],c=0,e=0;4>e;e++)for(var d=0;4>d;d++,c++)b[c]+=this.elements[4*e+0]*a[d+0]+this.elements[4*e+1]*a[d+4]+this.elements[4*e+2]*a[d+8]+this.elements[4*e+3]*a[d+12];this.elements=b.slice()},rotate:function(a,b,c,d){if(4>arguments.length)this.rotateZ(a);else{var f=new PVector(b,c,d),g=
f.mag();if(0!==g){1!=g&&(f.normalize(),b=f.x,c=f.y,d=f.z);var f=e.cos(a),g=e.sin(a),h=1-f;this.apply(h*b*b+f,h*b*c-g*d,h*b*d+g*c,0,h*b*c+g*d,h*c*c+f,h*c*d-g*b,0,h*b*d-g*c,h*c*d+g*b,h*d*d+f,0,0,0,0,1)}}},invApply:function(){Wb===h&&(Wb=new I);var a=arguments;Wb.set(a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7],a[8],a[9],a[10],a[11],a[12],a[13],a[14],a[15]);if(!Wb.invert())return!1;this.preApply(Wb);return!0},rotateX:function(a){var b=e.cos(a);a=e.sin(a);this.apply([1,0,0,0,0,b,-a,0,0,a,b,0,0,0,0,1])},rotateY:function(a){var b=
e.cos(a);a=e.sin(a);this.apply([b,0,a,0,0,1,0,0,-a,0,b,0,0,0,0,1])},rotateZ:function(a){var b=Math.cos(a);a=Math.sin(a);this.apply([b,-a,0,0,a,b,0,0,0,0,1,0,0,0,0,1])},scale:function(a,b,c){!a||b||c?a&&(b&&!c)&&(c=1):b=c=a;a&&(b&&c)&&(this.elements[0]*=a,this.elements[1]*=b,this.elements[2]*=c,this.elements[4]*=a,this.elements[5]*=b,this.elements[6]*=c,this.elements[8]*=a,this.elements[9]*=b,this.elements[10]*=c,this.elements[12]*=a,this.elements[13]*=b,this.elements[14]*=c)},skewX:function(a){a=
Math.tan(a);this.apply(1,a,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},skewY:function(a){a=Math.tan(a);this.apply(1,0,0,0,a,1,0,0,0,0,1,0,0,0,0,1)},shearX:function(a){a=Math.tan(a);this.apply(1,a,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},shearY:function(a){a=Math.tan(a);this.apply(1,0,0,0,a,1,0,0,0,0,1,0,0,0,0,1)},multX:function(a,b,c,e){return c?e?this.elements[0]*a+this.elements[1]*b+this.elements[2]*c+this.elements[3]*e:this.elements[0]*a+this.elements[1]*b+this.elements[2]*c+this.elements[3]:this.elements[0]*a+this.elements[1]*
b+this.elements[3]},multY:function(a,b,c,e){return c?e?this.elements[4]*a+this.elements[5]*b+this.elements[6]*c+this.elements[7]*e:this.elements[4]*a+this.elements[5]*b+this.elements[6]*c+this.elements[7]:this.elements[4]*a+this.elements[5]*b+this.elements[7]},multZ:function(a,b,c,e){return e?this.elements[8]*a+this.elements[9]*b+this.elements[10]*c+this.elements[11]*e:this.elements[8]*a+this.elements[9]*b+this.elements[10]*c+this.elements[11]},multW:function(a,b,c,e){return e?this.elements[12]*a+
this.elements[13]*b+this.elements[14]*c+this.elements[15]*e:this.elements[12]*a+this.elements[13]*b+this.elements[14]*c+this.elements[15]},invert:function(){var a=this.elements[0]*this.elements[5]-this.elements[1]*this.elements[4],b=this.elements[0]*this.elements[6]-this.elements[2]*this.elements[4],c=this.elements[0]*this.elements[7]-this.elements[3]*this.elements[4],e=this.elements[1]*this.elements[6]-this.elements[2]*this.elements[5],d=this.elements[1]*this.elements[7]-this.elements[3]*this.elements[5],
f=this.elements[2]*this.elements[7]-this.elements[3]*this.elements[6],g=this.elements[8]*this.elements[13]-this.elements[9]*this.elements[12],h=this.elements[8]*this.elements[14]-this.elements[10]*this.elements[12],s=this.elements[8]*this.elements[15]-this.elements[11]*this.elements[12],k=this.elements[9]*this.elements[14]-this.elements[10]*this.elements[13],l=this.elements[9]*this.elements[15]-this.elements[11]*this.elements[13],n=this.elements[10]*this.elements[15]-this.elements[11]*this.elements[14],
p=a*n-b*l+c*k+e*s-d*h+f*g;if(1E-9>=Math.abs(p))return!1;var m=[];m[0]=+this.elements[5]*n-this.elements[6]*l+this.elements[7]*k;m[4]=-this.elements[4]*n+this.elements[6]*s-this.elements[7]*h;m[8]=+this.elements[4]*l-this.elements[5]*s+this.elements[7]*g;m[12]=-this.elements[4]*k+this.elements[5]*h-this.elements[6]*g;m[1]=-this.elements[1]*n+this.elements[2]*l-this.elements[3]*k;m[5]=+this.elements[0]*n-this.elements[2]*s+this.elements[3]*h;m[9]=-this.elements[0]*l+this.elements[1]*s-this.elements[3]*
g;m[13]=+this.elements[0]*k-this.elements[1]*h+this.elements[2]*g;m[2]=+this.elements[13]*f-this.elements[14]*d+this.elements[15]*e;m[6]=-this.elements[12]*f+this.elements[14]*c-this.elements[15]*b;m[10]=+this.elements[12]*d-this.elements[13]*c+this.elements[15]*a;m[14]=-this.elements[12]*e+this.elements[13]*b-this.elements[14]*a;m[3]=-this.elements[9]*f+this.elements[10]*d-this.elements[11]*e;m[7]=+this.elements[8]*f-this.elements[10]*c+this.elements[11]*b;m[11]=-this.elements[8]*d+this.elements[9]*
c-this.elements[11]*a;m[15]=+this.elements[8]*e-this.elements[9]*b+this.elements[10]*a;a=1/p;m[0]*=a;m[1]*=a;m[2]*=a;m[3]*=a;m[4]*=a;m[5]*=a;m[6]*=a;m[7]*=a;m[8]*=a;m[9]*=a;m[10]*=a;m[11]*=a;m[12]*=a;m[13]*=a;m[14]*=a;m[15]*=a;this.elements=m.slice();return!0},toString:function(){for(var a="",b=0;15>b;b++)a+=this.elements[b]+", ";return a+=this.elements[15]},print:function(){var a=fd(this.elements),a=""+e.nfs(this.elements[0],a,4)+" "+e.nfs(this.elements[1],a,4)+" "+e.nfs(this.elements[2],a,4)+" "+
e.nfs(this.elements[3],a,4)+"\n"+e.nfs(this.elements[4],a,4)+" "+e.nfs(this.elements[5],a,4)+" "+e.nfs(this.elements[6],a,4)+" "+e.nfs(this.elements[7],a,4)+"\n"+e.nfs(this.elements[8],a,4)+" "+e.nfs(this.elements[9],a,4)+" "+e.nfs(this.elements[10],a,4)+" "+e.nfs(this.elements[11],a,4)+"\n"+e.nfs(this.elements[12],a,4)+" "+e.nfs(this.elements[13],a,4)+" "+e.nfs(this.elements[14],a,4)+" "+e.nfs(this.elements[15],a,4)+"\n\n";e.println(a)},invTranslate:function(a,b,c){this.preApply(1,0,0,-a,0,1,0,-b,
0,0,1,-c,0,0,0,1)},invRotateX:function(a){var b=Math.cos(-a);a=Math.sin(-a);this.preApply([1,0,0,0,0,b,-a,0,0,a,b,0,0,0,0,1])},invRotateY:function(a){var b=Math.cos(-a);a=Math.sin(-a);this.preApply([b,0,a,0,0,1,0,0,-a,0,b,0,0,0,0,1])},invRotateZ:function(a){var b=Math.cos(-a);a=Math.sin(-a);this.preApply([b,-a,0,0,a,b,0,0,0,0,1,0,0,0,0,1])},invScale:function(a,b,c){this.preApply([1/a,0,0,0,0,1/b,0,0,0,0,1/c,0,0,0,0,1])}};var Za=e.PMatrixStack=function(){this.matrixStack=[]};Za.prototype.load=function(){var a=
ha.$newPMatrix();1===arguments.length?a.set(arguments[0]):a.set(arguments);this.matrixStack.push(a)};E.prototype.$newPMatrix=function(){return new Ya};B.prototype.$newPMatrix=function(){return new I};Za.prototype.push=function(){this.matrixStack.push(this.peek())};Za.prototype.pop=function(){return this.matrixStack.pop()};Za.prototype.peek=function(){var a=ha.$newPMatrix();a.set(this.matrixStack[this.matrixStack.length-1]);return a};Za.prototype.mult=function(a){this.matrixStack[this.matrixStack.length-
1].apply(a)};e.split=function(a,b){return a.split(b)};e.splitTokens=function(a,b){if(b===h)return a.split(/\s+/g);var c=b.split(/()/g),e="",d=a.length,f,g,k=[];for(f=0;f<d;f++)g=a[f],-1<c.indexOf(g)?(""!==e&&k.push(e),e=""):e+=g;""!==e&&k.push(e);return k};e.append=function(a,b){a[a.length]=b;return a};e.concat=function(a,b){return a.concat(b)};e.sort=function(a,b){var c=[];if(0<a.length){for(var e=0<b?b:a.length,d=0;d<e;d++)c.push(a[d]);"string"===typeof a[0]?c.sort():c.sort(function(a,b){return a-
b});if(0<b)for(e=c.length;e<a.length;e++)c.push(a[e])}return c};e.splice=function(a,b,c){if(0===b.length)return a;if(b instanceof Array)for(var e=0;e<b.length;c++,e++)a.splice(c,0,b[e]);else a.splice(c,0,b);return a};e.subset=function(a,b,c){return a.slice(b,c!==h?b+c:a.length)};e.join=function(a,b){return a.join(b)};e.shorten=function(a){for(var b=[],c=a.length,e=0;e<c;e++)b[e]=a[e];b.pop();return b};e.expand=function(a,b){var c=a.slice(0);c.length=b||2*a.length;return c};e.arrayCopy=function(){var a,
b=0,c,e=0,d;2===arguments.length?(a=arguments[0],c=arguments[1],d=a.length):3===arguments.length?(a=arguments[0],c=arguments[1],d=arguments[2]):5===arguments.length&&(a=arguments[0],b=arguments[1],c=arguments[2],e=arguments[3],d=arguments[4]);for(var f=b;f<d+b;f++,e++)if(c[e]!==h)c[e]=a[f];else throw"array index out of bounds exception";};e.reverse=function(a){return a.reverse()};e.mix=function(a,b,c){return a+((b-a)*c>>8)};e.peg=function(a){return 0>a?0:255<a?255:a};e.modes=function(){function a(b,
L,c,e,d,yd,z,f,$,h,pd){b=g(((b&4278190080)>>>24)+L,255)<<24;c+=($-c)*L>>8;e+=(h-e)*L>>8;L=d+((pd-d)*L>>8);return b|(0>c?0:255<c?255:c)<<16|(0>e?0:255<e?255:e)<<8|(0>L?0:255<L?255:L)}var b=c.ALPHA_MASK,e=c.RED_MASK,d=c.GREEN_MASK,f=c.BLUE_MASK,g=Math.min,h=Math.max;return{replace:function(a,b){return b},blend:function(a,L){var c=(L&b)>>>24,h=a&e,k=a&d,w=a&f,l=L&e,m=L&d,n=L&f;return g(((a&b)>>>24)+c,255)<<24|h+((l-h)*c>>8)&e|k+((m-k)*c>>8)&d|w+((n-w)*c>>8)&f},add:function(a,L){var c=(L&b)>>>24;return g(((a&
b)>>>24)+c,255)<<24|g((a&e)+((L&e)>>8)*c,e)&e|g((a&d)+((L&d)>>8)*c,d)&d|g((a&f)+((L&f)*c>>8),f)},subtract:function(a,L){var c=(L&b)>>>24;return g(((a&b)>>>24)+c,255)<<24|h((a&e)-((L&e)>>8)*c,d)&e|h((a&d)-((L&d)>>8)*c,f)&d|h((a&f)-((L&f)*c>>8),0)},lightest:function(a,L){var c=(L&b)>>>24;return g(((a&b)>>>24)+c,255)<<24|h(a&e,((L&e)>>8)*c)&e|h(a&d,((L&d)>>8)*c)&d|h(a&f,(L&f)*c>>8)},darkest:function(a,L){var c=(L&b)>>>24,h=a&e,k=a&d,w=a&f,l=g(a&e,((L&e)>>8)*c),m=g(a&d,((L&d)>>8)*c),n=g(a&f,(L&f)*c>>
8);return g(((a&b)>>>24)+c,255)<<24|h+((l-h)*c>>8)&e|k+((m-k)*c>>8)&d|w+((n-w)*c>>8)&f},difference:function(c,g){var h=(c&e)>>16,k=(c&d)>>8,w=c&f,V=(g&e)>>16,l=(g&d)>>8,m=g&f;return a(c,(g&b)>>>24,h,k,w,V,l,m,h>V?h-V:V-h,k>l?k-l:l-k,w>m?w-m:m-w)},exclusion:function(c,g){var h=(c&e)>>16,k=(c&d)>>8,w=c&f,V=(g&e)>>16,l=(g&d)>>8,m=g&f;return a(c,(g&b)>>>24,h,k,w,V,l,m,h+V-(h*V>>7),k+l-(k*l>>7),w+m-(w*m>>7))},multiply:function(c,g){var h=(c&e)>>16,k=(c&d)>>8,w=c&f,V=(g&e)>>16,l=(g&d)>>8,m=g&f;return a(c,
(g&b)>>>24,h,k,w,V,l,m,h*V>>8,k*l>>8,w*m>>8)},screen:function(c,g){var h=(c&e)>>16,k=(c&d)>>8,w=c&f,V=(g&e)>>16,l=(g&d)>>8,m=g&f;return a(c,(g&b)>>>24,h,k,w,V,l,m,255-((255-h)*(255-V)>>8),255-((255-k)*(255-l)>>8),255-((255-w)*(255-m)>>8))},hard_light:function(c,g){var h=(c&e)>>16,k=(c&d)>>8,w=c&f,V=(g&e)>>16,l=(g&d)>>8,m=g&f;return a(c,(g&b)>>>24,h,k,w,V,l,m,128>V?h*V>>7:255-((255-h)*(255-V)>>7),128>l?k*l>>7:255-((255-k)*(255-l)>>7),128>m?w*m>>7:255-((255-w)*(255-m)>>7))},soft_light:function(c,g){var h=
(c&e)>>16,k=(c&d)>>8,w=c&f,V=(g&e)>>16,l=(g&d)>>8,m=g&f;return a(c,(g&b)>>>24,h,k,w,V,l,m,(h*V>>7)+(h*h>>8)-(h*h*V>>15),(k*l>>7)+(k*k>>8)-(k*k*l>>15),(w*m>>7)+(w*w>>8)-(w*w*m>>15))},overlay:function(c,g){var h=(c&e)>>16,k=(c&d)>>8,w=c&f,V=(g&e)>>16,l=(g&d)>>8,m=g&f;return a(c,(g&b)>>>24,h,k,w,V,l,m,128>h?h*V>>7:255-((255-h)*(255-V)>>7),128>k?k*l>>7:255-((255-k)*(255-l)>>7),128>w?w*m>>7:255-((255-w)*(255-m)>>7))},dodge:function(c,g){var h=(g&b)>>>24,k=(c&e)>>16,w=(c&d)>>8,V=c&f,l=(g&e)>>16,m=(g&d)>>
8,n=g&f,p=255;255!==l&&(p=(k<<8)/(255-l),p=0>p?0:255<p?255:p);var r=255;255!==m&&(r=(w<<8)/(255-m),r=0>r?0:255<r?255:r);var t=255;255!==n&&(t=(V<<8)/(255-n),t=0>t?0:255<t?255:t);return a(c,h,k,w,V,l,m,n,p,r,t)},burn:function(c,g){var h=(g&b)>>>24,k=(c&e)>>16,w=(c&d)>>8,V=c&f,l=(g&e)>>16,m=(g&d)>>8,n=g&f,p=0;0!==l&&(p=(255-k<<8)/l,p=255-(0>p?0:255<p?255:p));var r=0;0!==m&&(r=(255-w<<8)/m,r=255-(0>r?0:255<r?255:r));var t=0;0!==n&&(t=(255-V<<8)/n,t=255-(0>t?0:255<t?255:t));return a(c,h,k,w,V,l,m,n,p,
r,t)}}}();e.color=function(a,b,e,d){return a!==h&&b!==h&&e!==h&&d!==h?ta(a,b,e,d):a!==h&&b!==h&&e!==h?ta(a,b,e,ia):a!==h&&b!==h?(a&c.ALPHA_MASK?(b=Math.round(255*(b/ia)),b=255<b?255:b,a=a-(a&c.ALPHA_MASK)+((0>b?0:b)<<24&c.ALPHA_MASK)):a=Va===c.RGB?ta(a,a,a,b):Va===c.HSB?ta(0,0,a/xa*ya,b):void 0,a):"number"===typeof a?$b(a):ta(xa,Ea,ya,ia)};e.color.toString=function(a){return"rgba("+((a&c.RED_MASK)>>>16)+","+((a&c.GREEN_MASK)>>>8)+","+(a&c.BLUE_MASK)+","+((a&c.ALPHA_MASK)>>>24)/255+")"};e.color.toInt=
function(a,b,e,d){return d<<24&c.ALPHA_MASK|a<<16&c.RED_MASK|b<<8&c.GREEN_MASK|e&c.BLUE_MASK};e.color.toArray=function(a){return[(a&c.RED_MASK)>>>16,(a&c.GREEN_MASK)>>>8,a&c.BLUE_MASK,(a&c.ALPHA_MASK)>>>24]};e.color.toGLArray=function(a){return[((a&c.RED_MASK)>>>16)/255,((a&c.GREEN_MASK)>>>8)/255,(a&c.BLUE_MASK)/255,((a&c.ALPHA_MASK)>>>24)/255]};e.color.toRGB=function(a,b,c){a=a>xa?xa:a;b=b>Ea?Ea:b;c=c>ya?ya:c;a=360*(a/xa);b=100*(b/Ea);c=100*(c/ya);var e=Math.round(255*(c/100));if(0===b)return[e,
e,e];a%=360;var d=a%60,f=Math.round(255*(c*(100-b)/1E4)),g=Math.round(255*(c*(6E3-b*d)/6E5));b=Math.round(255*(c*(6E3-b*(60-d))/6E5));switch(Math.floor(a/60)){case 0:return[e,b,f];case 1:return[g,e,f];case 2:return[f,e,b];case 3:return[f,g,e];case 4:return[b,f,e];case 5:return[e,f,g]}};e.brightness=function(a){return bb(a)[2]};e.saturation=function(a){return bb(a)[1]};e.hue=function(a){return bb(a)[0]};e.red=function(a){return((a&c.RED_MASK)>>>16)/255*xa};e.green=function(a){return((a&c.GREEN_MASK)>>>
8)/255*Ea};e.blue=function(a){return(a&c.BLUE_MASK)/255*ya};e.alpha=function(a){return((a&c.ALPHA_MASK)>>>24)/255*ia};e.lerpColor=function(a,b,d){var f,g,h,k,l,s;a=e.color(a);b=e.color(b);if(Va===c.HSB)return h=bb(a),a=((a&c.ALPHA_MASK)>>>24)/ia,g=bb(b),b=((b&c.ALPHA_MASK)>>>24)/ia,s=e.lerp(h[0],g[0],d),f=e.lerp(h[1],g[1],d),h=e.lerp(h[2],g[2],d),h=e.color.toRGB(s,f,h),d=e.lerp(a,b,d)*ia,d<<24&c.ALPHA_MASK|h[0]<<16&c.RED_MASK|h[1]<<8&c.GREEN_MASK|h[2]&c.BLUE_MASK;f=(a&c.RED_MASK)>>>16;g=(a&c.GREEN_MASK)>>>
8;h=a&c.BLUE_MASK;a=((a&c.ALPHA_MASK)>>>24)/ia;k=(b&c.RED_MASK)>>>16;l=(b&c.GREEN_MASK)>>>8;s=b&c.BLUE_MASK;b=((b&c.ALPHA_MASK)>>>24)/ia;f=e.lerp(f,k,d)|0;g=e.lerp(g,l,d)|0;h=e.lerp(h,s,d)|0;d=e.lerp(a,b,d)*ia;return d<<24&c.ALPHA_MASK|f<<16&c.RED_MASK|g<<8&c.GREEN_MASK|h&c.BLUE_MASK};e.colorMode=function(){Va=arguments[0];1<arguments.length&&(xa=arguments[1],Ea=arguments[2]||arguments[1],ya=arguments[3]||arguments[1],ia=arguments[4]||arguments[1])};e.blendColor=function(a,b,d){if(d===c.REPLACE)return e.modes.replace(a,
b);if(d===c.BLEND)return e.modes.blend(a,b);if(d===c.ADD)return e.modes.add(a,b);if(d===c.SUBTRACT)return e.modes.subtract(a,b);if(d===c.LIGHTEST)return e.modes.lightest(a,b);if(d===c.DARKEST)return e.modes.darkest(a,b);if(d===c.DIFFERENCE)return e.modes.difference(a,b);if(d===c.EXCLUSION)return e.modes.exclusion(a,b);if(d===c.MULTIPLY)return e.modes.multiply(a,b);if(d===c.SCREEN)return e.modes.screen(a,b);if(d===c.HARD_LIGHT)return e.modes.hard_light(a,b);if(d===c.SOFT_LIGHT)return e.modes.soft_light(a,
b);if(d===c.OVERLAY)return e.modes.overlay(a,b);if(d===c.DODGE)return e.modes.dodge(a,b);if(d===c.BURN)return e.modes.burn(a,b)};e.printMatrix=function(){K.print()};E.prototype.translate=function(a,b){K.translate(a,b);fa.invTranslate(a,b);g.translate(a,b)};B.prototype.translate=function(a,b,c){K.translate(a,b,c);fa.invTranslate(a,b,c)};E.prototype.scale=function(a,b){K.scale(a,b);fa.invScale(a,b);g.scale(a,b||a)};B.prototype.scale=function(a,b,c){K.scale(a,b,c);fa.invScale(a,b,c)};E.prototype.transform=
function(a){a=a.array();g.transform(a[0],a[3],a[1],a[4],a[2],a[5])};B.prototype.transformm=function(a){throw"p.transform is currently not supported in 3D mode";};E.prototype.pushMatrix=function(){Ab.load(K);Bb.load(fa);g.save()};B.prototype.pushMatrix=function(){Ab.load(K);Bb.load(fa)};E.prototype.popMatrix=function(){K.set(Ab.pop());fa.set(Bb.pop());Sa()};B.prototype.popMatrix=function(){K.set(Ab.pop());fa.set(Bb.pop())};E.prototype.resetMatrix=function(){K.reset();fa.reset();g.setTransform(1,0,
0,1,0,0)};B.prototype.resetMatrix=function(){K.reset();fa.reset()};W.prototype.applyMatrix=function(){var a=arguments;K.apply(a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7],a[8],a[9],a[10],a[11],a[12],a[13],a[14],a[15]);fa.invApply(a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7],a[8],a[9],a[10],a[11],a[12],a[13],a[14],a[15])};E.prototype.applyMatrix=function(){for(var a=arguments,b=a.length;16>b;b++)a[b]=0;a[10]=a[15]=1;W.prototype.applyMatrix.apply(this,a)};e.rotateX=function(a){K.rotateX(a);fa.invRotateX(a)};
E.prototype.rotateZ=function(){throw"rotateZ() is not supported in 2D mode. Use rotate(float) instead.";};B.prototype.rotateZ=function(a){K.rotateZ(a);fa.invRotateZ(a)};e.rotateY=function(a){K.rotateY(a);fa.invRotateY(a)};E.prototype.rotate=function(a){K.rotateZ(a);fa.invRotateZ(a);g.rotate(a)};B.prototype.rotate=function(a){4>arguments.length?e.rotateZ(a):(K.rotate(a,arguments[1],arguments[2],arguments[3]),fa.rotate(-a,arguments[1],arguments[2],arguments[3]))};E.prototype.shearX=function(a){K.shearX(a);
g.transform(1,0,a,1,0,0)};B.prototype.shearX=function(a){K.shearX(a)};E.prototype.shearY=function(a){K.shearY(a);g.transform(1,a,0,1,0,0)};B.prototype.shearY=function(a){K.shearY(a)};e.pushStyle=function(){g.save();e.pushMatrix();bd.push({doFill:R,currentFillColor:La,doStroke:C,currentStrokeColor:ja,curTint:gb,curRectMode:qa,curColorMode:Va,colorModeX:xa,colorModeZ:ya,colorModeY:Ea,colorModeA:ia,curTextFont:ba,horizontalTextAlignment:nb,verticalTextAlignment:Wa,textMode:ic,curFontName:zb,curTextSize:Na,
curTextAscent:Xa,curTextDescent:Ma,curTextLeading:Aa})};e.popStyle=function(){var a=bd.pop();if(a)Sa(),e.popMatrix(),R=a.doFill,La=a.currentFillColor,C=a.doStroke,ja=a.currentStrokeColor,gb=a.curTint,qa=a.curRectMode,Va=a.curColorMode,xa=a.colorModeX,ya=a.colorModeZ,Ea=a.colorModeY,ia=a.colorModeA,ba=a.curTextFont,zb=a.curFontName,Na=a.curTextSize,nb=a.horizontalTextAlignment,Wa=a.verticalTextAlignment,ic=a.textMode,Xa=a.curTextAscent,Ma=a.curTextDescent,Aa=a.curTextLeading;else throw"Too many popStyle() without enough pushStyle()";
};e.year=function(){return(new Date).getFullYear()};e.month=function(){return(new Date).getMonth()+1};e.day=function(){return(new Date).getDate()};e.hour=function(){return(new Date).getHours()};e.minute=function(){return(new Date).getMinutes()};e.second=function(){return(new Date).getSeconds()};e.millis=function(){return Date.now()-Oc};E.prototype.redraw=function(){cb();g.lineWidth=ea;var a=e.pmouseX,b=e.pmouseY;e.pmouseX=cc;e.pmouseY=dc;g.save();e.draw();Sa();cc=e.mouseX;dc=e.mouseY;e.pmouseX=a;
e.pmouseY=b};B.prototype.redraw=function(){cb();var a=e.pmouseX,b=e.pmouseY;e.pmouseX=cc;e.pmouseY=dc;g.clear(g.DEPTH_BUFFER_BIT);Fa={attributes:{},locations:{}};e.noLights();e.lightFalloff(1,0,0);e.shininess(1);e.ambient(255,255,255);e.specular(0,0,0);e.emissive(0,0,0);e.camera();e.draw();cc=e.mouseX;dc=e.mouseY;e.pmouseX=a;e.pmouseY=b};e.noLoop=function(){eb=Da=!1;clearInterval(ma);da.onPause()};e.loop=function(){eb||(tc=Date.now(),ec=0,ma=l.setInterval(function(){try{da.onFrameStart(),e.redraw(),
da.onFrameEnd()}catch(a){throw l.clearInterval(ma),a;}},Kc),eb=Da=!0,da.onLoop())};e.frameRate=function(a){tb=a;Kc=1E3/tb;Da&&(e.noLoop(),e.loop())};e.exit=function(){l.clearInterval(ma);var a=e.externals.canvas.id;q.splice(Zb[a],1);delete Zb[a];delete S.onmousedown;for(var b in M.lib)M.lib.hasOwnProperty(b)&&M.lib[b].hasOwnProperty("detach")&&M.lib[b].detach(e);for(a=wb.length;a--;){var c=wb[a];b=c.elem;var d=c.type,c=c.fn;b.removeEventListener?b.removeEventListener(d,c,!1):b.detachEvent&&b.detachEvent("on"+
d,c)}da.onExit()};e.cursor=function(){if(1<arguments.length||1===arguments.length&&arguments[0]instanceof e.PImage){var a=arguments[0],b,c;if(3<=arguments.length){if(b=arguments[1],c=arguments[2],0>b||0>c||c>=a.height||b>=a.width)throw"x and y must be non-negative and less than the dimensions of the image";}else b=a.width>>>1,c=a.height>>>1;a='url("'+a.toDataURL()+'") '+b+" "+c+", default";S.style.cursor=a}else S.style.cursor=1===arguments.length?arguments[0]:od};e.noCursor=function(){S.style.cursor=
c.NOCURSOR};e.link=function(a,b){b!==h?l.open(a,b):l.location=a};e.beginDraw=r;e.endDraw=r;E.prototype.toImageData=function(a,b,c,d){a=a!==h?a:0;b=b!==h?b:0;c=c!==h?c:e.width;d=d!==h?d:e.height;return g.getImageData(a,b,c,d)};B.prototype.toImageData=function(a,b,c,d){a=a!==h?a:0;b=b!==h?b:0;c=c!==h?c:e.width;d=d!==h?d:e.height;var f=p.createElement("canvas").getContext("2d").createImageData(c,d),k=new ga(4*c*d);g.readPixels(a,b,c,d,g.RGBA,g.UNSIGNED_BYTE,k);a=0;b=k.length;for(var w=f.data;a<b;a++)w[a]=
k[4*(d-1-Math.floor(a/4/c))*c+a%(4*c)];return f};e.status=function(a){l.status=a};e.binary=function(a,b){var c;if(0<b)c=b;else if(a instanceof Char)c=16,a|=0;else for(c=32;1<c&&!(a>>>c-1&1);)c--;for(var e="";0<c;)e+=a>>>--c&1?"1":"0";return e};e.unbinary=function(a){for(var b=a.length-1,c=1,e=0;0<=b;){var d=a[b--];if("0"!==d&&"1"!==d)throw"the value passed into unbinary was not an 8 bit binary number";"1"===d&&(e+=c);c<<=1}return e};e.hex=function(a,b){1===arguments.length&&(b=a instanceof Char?4:
8);var c=a,e=b,e=e===h||null===e?e=8:e;0>c&&(c=4294967295+c+1);for(c=Number(c).toString(16).toUpperCase();c.length<e;)c="0"+c;c.length>=e&&(c=c.substring(c.length-e,c.length));return c};e.unhex=function(a){if(a instanceof Array){for(var b=[],c=0;c<a.length;c++)b.push(Fb(a[c]));return b}return Fb(a)};e.loadStrings=function(a){if(G[a])return G[a].split("\n");a=d(a);if("string"!==typeof a||""===a)return[];a=a.replace(/(\r\n?)/g,"\n").replace(/\n$/,"");return a.split("\n")};e.saveStrings=function(a,b){G[a]=
b.join("\n")};e.loadBytes=function(a){a=d(a);for(var b=[],c=0;c<a.length;c++)b.push(a.charCodeAt(c));return b};e.matchAll=function(a,b){for(var c=[],e,d=RegExp(b,"g");null!==(e=d.exec(a));)c.push(e),0===e[0].length&&++d.lastIndex;return 0<c.length?c:null};e.match=function(a,b){return a.match(b)};e.println=function(a){M.logger.println(a)};e.print=function(a){M.logger.print(a)};e.str=function(a){if(a instanceof Array){for(var b=[],c=0;c<a.length;c++)b.push(a[c].toString()+"");return b}return a.toString()+
""};e.parseBoolean=function(a){if(a instanceof Array){for(var b=[],c=0;c<a.length;c++)b.push(db(a[c]));return b}return db(a)};e.parseByte=function(a){if(a instanceof Array){for(var b=[],c=0;c<a.length;c++)b.push(0-(a[c]&128)|a[c]&127);return b}return 0-(a&128)|a&127};e.parseChar=function(a){if("number"===typeof a)return new Char(String.fromCharCode(a&65535));if(a instanceof Array){for(var b=[],c=0;c<a.length;c++)b.push(new Char(String.fromCharCode(a[c]&65535)));return b}throw"char() may receive only one argument of type int, byte, int[], or byte[].";
};e.parseFloat=function(a){if(a instanceof Array){for(var b=[],c=0;c<a.length;c++)b.push(Hb(a[c]));return b}return Hb(a)};e.parseInt=function(a,b){if(a instanceof Array){for(var c=[],e=0;e<a.length;e++)"string"!==typeof a[e]||/^\s*[+\-]?\d+\s*$/.test(a[e])?c.push(Ib(a[e],b)):c.push(0);return c}return Ib(a,b)};e.__int_cast=function(a){return 0|a};e.__instanceof=function(a,b){if("function"!==typeof b)throw"Function is expected as type argument for instanceof operator";if("string"===typeof a)return b===
Object||b===String;if(a instanceof b)return!0;if("object"!==typeof a||null===a)return!1;var c=a.constructor;if(b.$isInterface){for(var e=[];c;)c.$interfaces&&(e=e.concat(c.$interfaces)),c=c.$base;for(;0<e.length;){c=e.shift();if(c===b)return!0;c.$interfaces&&(e=e.concat(c.$interfaces))}return!1}for(;c.hasOwnProperty("$base");)if(c=c.$base,c===b)return!0;return!1};W.prototype.size=function(a,b,d){C&&e.stroke(0);R&&e.fill(255);d={fillStyle:g.fillStyle,strokeStyle:g.strokeStyle,lineCap:g.lineCap,lineJoin:g.lineJoin};
0<S.style.length&&(S.style.removeProperty("width"),S.style.removeProperty("height"));S.width=e.width=a||100;S.height=e.height=b||100;for(var f in d)d.hasOwnProperty(f)&&(g[f]=d[f]);e.textFont(ba);e.background();Yc=Math.max(1E3,0.05*a*b);e.externals.context=g;for(a=0;a<c.SINCOS_LENGTH;a++)Ub[a]=e.sin(0.5*a*(c.PI/180)),Vb[a]=e.cos(0.5*a*(c.PI/180))};E.prototype.size=function(a,b,c){g===h&&(g=S.getContext("2d"),Ab=new Za,Bb=new Za,K=new Ya,fa=new Ya);W.prototype.size.apply(this,arguments)};B.prototype.size=
function(){var a=!1;return function(b,c,d){if(a)throw"Multiple calls to size() for 3D renders are not allowed.";a=!0;try{S.width=e.width=b||100;S.height=e.height=c||100;for(var f=S,h=["experimental-webgl","webgl","webkit-3d"],k,l=0,s=h.length;l<s&&!(k=f.getContext(h[l],{antialias:!1,preserveDrawingBuffer:!0}));l++);g=k;Sc=g.createTexture();Tc=g.createTexture()}catch(m){M.debug(m)}if(!g)throw"WebGL context is not supported on this browser.";g.viewport(0,0,S.width,S.height);g.enable(g.DEPTH_TEST);g.enable(g.BLEND);
g.blendFunc(g.SRC_ALPHA,g.ONE_MINUS_SRC_ALPHA);J=Ic(g,"varying vec4 vFrontColor;attribute vec3 aVertex;attribute vec2 aTextureCoord;uniform vec4 uColor;uniform mat4 uModel;uniform mat4 uView;uniform mat4 uProjection;uniform float uPointSize;varying vec2 vTextureCoord;void main(void) {  gl_PointSize = uPointSize;  vFrontColor = uColor;  gl_Position = uProjection * uView * uModel * vec4(aVertex, 1.0);  vTextureCoord = aTextureCoord;}","#ifdef GL_ES\nprecision highp float;\n#endif\nvarying vec4 vFrontColor;varying vec2 vTextureCoord;uniform sampler2D uSampler;uniform int uIsDrawingText;uniform bool uSmooth;void main(void){  if(uSmooth == true){    float dist = distance(gl_PointCoord, vec2(0.5));    if(dist > 0.5){      discard;    }  }  if(uIsDrawingText == 1){    float alpha = texture2D(uSampler, vTextureCoord).a;    gl_FragColor = vec4(vFrontColor.rgb * alpha, alpha);  }  else{    gl_FragColor = vFrontColor;  }}");
na=Ic(g,"varying vec4 vFrontColor;attribute vec3 aVertex;attribute vec4 aColor;uniform mat4 uView;uniform mat4 uProjection;uniform float uPointSize;void main(void) {  vFrontColor = aColor;  gl_PointSize = uPointSize;  gl_Position = uProjection * uView * vec4(aVertex, 1.0);}","#ifdef GL_ES\nprecision highp float;\n#endif\nvarying vec4 vFrontColor;uniform bool uSmooth;void main(void){  if(uSmooth == true){    float dist = distance(gl_PointCoord, vec2(0.5));    if(dist > 0.5){      discard;    }  }  gl_FragColor = vFrontColor;}");
e.strokeWeight(1);y=Ic(g,td,"#ifdef GL_ES\nprecision highp float;\n#endif\nvarying vec4 vFrontColor;uniform sampler2D uSampler;uniform bool uUsingTexture;varying vec2 vTexture;void main(void){  if( uUsingTexture ){    gl_FragColor = vec4(texture2D(uSampler, vTexture.xy)) * vFrontColor;  }  else{    gl_FragColor = vFrontColor;  }}");g.useProgram(y);Y("usingTexture3d",y,"usingTexture",ua);e.lightFalloff(1,0,0);e.shininess(1);e.ambient(255,255,255);e.specular(0,0,0);e.emissive(0,0,0);wc=g.createBuffer();
g.bindBuffer(g.ARRAY_BUFFER,wc);g.bufferData(g.ARRAY_BUFFER,cd,g.STATIC_DRAW);xc=g.createBuffer();g.bindBuffer(g.ARRAY_BUFFER,xc);g.bufferData(g.ARRAY_BUFFER,rd,g.STATIC_DRAW);yc=g.createBuffer();g.bindBuffer(g.ARRAY_BUFFER,yc);g.bufferData(g.ARRAY_BUFFER,dd,g.STATIC_DRAW);gc=g.createBuffer();g.bindBuffer(g.ARRAY_BUFFER,gc);g.bufferData(g.ARRAY_BUFFER,Hc,g.STATIC_DRAW);zc=g.createBuffer();g.bindBuffer(g.ARRAY_BUFFER,zc);g.bufferData(g.ARRAY_BUFFER,sd,g.STATIC_DRAW);Tb=g.createBuffer();Ac=g.createBuffer();
Pc=g.createBuffer();Bc=g.createBuffer();Qc=g.createBuffer();Rc=g.createBuffer();hc=g.createBuffer();g.bindBuffer(g.ARRAY_BUFFER,hc);g.bufferData(g.ARRAY_BUFFER,new A([0,0,0]),g.STATIC_DRAW);Cc=g.createBuffer();g.bindBuffer(g.ARRAY_BUFFER,Cc);g.bufferData(g.ARRAY_BUFFER,new A([1,1,0,-1,1,0,-1,-1,0,1,-1,0]),g.STATIC_DRAW);Dc=g.createBuffer();g.bindBuffer(g.ARRAY_BUFFER,Dc);g.bufferData(g.ARRAY_BUFFER,new A([0,0,1,0,1,1,0,1]),g.STATIC_DRAW);Ec=g.createBuffer();g.bindBuffer(g.ELEMENT_ARRAY_BUFFER,Ec);
g.bufferData(g.ELEMENT_ARRAY_BUFFER,new v([0,1,2,2,3,0]),g.STATIC_DRAW);qb=new I;Ra=new I;K=new I;fa=new I;Ha=new I;e.camera();e.perspective();Ab=new Za;Bb=new Za;Sb=new I;fc=new I;xb=new I;yb=new I;uc=new I;vc=new I;vc.set(-1,3,-3,1,3,-6,3,0,-3,3,0,0,1,0,0,0);W.prototype.size.apply(this,arguments)}}();E.prototype.ambientLight=W.prototype.a3DOnlyFunction;B.prototype.ambientLight=function(a,b,e,d,f,h){if(O===c.MAX_LIGHTS)throw"can only create "+c.MAX_LIGHTS+" lights";d=new PVector(d,f,h);f=new I;f.scale(1,
-1,1);f.apply(K.array());f.mult(d,d);a=ta(a,b,e,0);a=[((a&c.RED_MASK)>>>16)/255,((a&c.GREEN_MASK)>>>8)/255,(a&c.BLUE_MASK)/255];g.useProgram(y);T("uLights.color.3d."+O,y,"uLights"+O+".color",a);T("uLights.position.3d."+O,y,"uLights"+O+".position",d.array());Y("uLights.type.3d."+O,y,"uLights"+O+".type",0);Y("uLightCount3d",y,"uLightCount",++O)};E.prototype.directionalLight=W.prototype.a3DOnlyFunction;B.prototype.directionalLight=function(a,b,e,d,f,h){if(O===c.MAX_LIGHTS)throw"can only create "+c.MAX_LIGHTS+
" lights";g.useProgram(y);var k=new I;k.scale(1,-1,1);k.apply(K.array());k=k.array();d=[k[0]*d+k[4]*f+k[8]*h,k[1]*d+k[5]*f+k[9]*h,k[2]*d+k[6]*f+k[10]*h];a=ta(a,b,e,0);T("uLights.color.3d."+O,y,"uLights"+O+".color",[((a&c.RED_MASK)>>>16)/255,((a&c.GREEN_MASK)>>>8)/255,(a&c.BLUE_MASK)/255]);T("uLights.position.3d."+O,y,"uLights"+O+".position",d);Y("uLights.type.3d."+O,y,"uLights"+O+".type",1);Y("uLightCount3d",y,"uLightCount",++O)};E.prototype.lightFalloff=W.prototype.a3DOnlyFunction;B.prototype.lightFalloff=
function(a,b,c){g.useProgram(y);T("uFalloff3d",y,"uFalloff",[a,b,c])};E.prototype.lightSpecular=W.prototype.a3DOnlyFunction;B.prototype.lightSpecular=function(a,b,e){a=ta(a,b,e,0);a=[((a&c.RED_MASK)>>>16)/255,((a&c.GREEN_MASK)>>>8)/255,(a&c.BLUE_MASK)/255];g.useProgram(y);T("uSpecular3d",y,"uSpecular",a)};e.lights=function(){e.ambientLight(128,128,128);e.directionalLight(128,128,128,0,0,-1);e.lightFalloff(1,0,0);e.lightSpecular(0,0,0)};E.prototype.pointLight=W.prototype.a3DOnlyFunction;B.prototype.pointLight=
function(a,b,e,d,f,h){if(O===c.MAX_LIGHTS)throw"can only create "+c.MAX_LIGHTS+" lights";d=new PVector(d,f,h);f=new I;f.scale(1,-1,1);f.apply(K.array());f.mult(d,d);a=ta(a,b,e,0);a=[((a&c.RED_MASK)>>>16)/255,((a&c.GREEN_MASK)>>>8)/255,(a&c.BLUE_MASK)/255];g.useProgram(y);T("uLights.color.3d."+O,y,"uLights"+O+".color",a);T("uLights.position.3d."+O,y,"uLights"+O+".position",d.array());Y("uLights.type.3d."+O,y,"uLights"+O+".type",2);Y("uLightCount3d",y,"uLightCount",++O)};E.prototype.noLights=W.prototype.a3DOnlyFunction;
B.prototype.noLights=function(){O=0;g.useProgram(y);Y("uLightCount3d",y,"uLightCount",O)};E.prototype.spotLight=W.prototype.a3DOnlyFunction;B.prototype.spotLight=function(a,b,e,d,f,h,k,l,s,m,n){if(O===c.MAX_LIGHTS)throw"can only create "+c.MAX_LIGHTS+" lights";g.useProgram(y);d=new PVector(d,f,h);f=new I;f.scale(1,-1,1);f.apply(K.array());f.mult(d,d);f=f.array();k=[f[0]*k+f[4]*l+f[8]*s,f[1]*k+f[5]*l+f[9]*s,f[2]*k+f[6]*l+f[10]*s];a=ta(a,b,e,0);T("uLights.color.3d."+O,y,"uLights"+O+".color",[((a&c.RED_MASK)>>>
16)/255,((a&c.GREEN_MASK)>>>8)/255,(a&c.BLUE_MASK)/255]);T("uLights.position.3d."+O,y,"uLights"+O+".position",d.array());T("uLights.direction.3d."+O,y,"uLights"+O+".direction",k);T("uLights.concentration.3d."+O,y,"uLights"+O+".concentration",n);T("uLights.angle.3d."+O,y,"uLights"+O+".angle",m);Y("uLights.type.3d."+O,y,"uLights"+O+".type",3);Y("uLightCount3d",y,"uLightCount",++O)};E.prototype.beginCamera=function(){throw"beginCamera() is not available in 2D mode";};B.prototype.beginCamera=function(){if(kc)throw"You cannot call beginCamera() again before calling endCamera()";
kc=!0;K=Ra;fa=qb};E.prototype.endCamera=function(){throw"endCamera() is not available in 2D mode";};B.prototype.endCamera=function(){if(!kc)throw"You cannot call endCamera() before calling beginCamera()";K.set(qb);fa.set(Ra);kc=!1};e.camera=function(a,b,c,d,f,g,k,l,s){a===h&&(Gc=e.width/2,rb=e.height/2,sb=rb/Math.tan(lc/2),a=Gc,b=rb,c=sb,d=Gc,f=rb,k=g=0,l=1,s=0);d=new PVector(a-d,b-f,c-g);var m=new PVector(k,l,s);d.normalize();s=PVector.cross(m,d);m=PVector.cross(d,s);s.normalize();m.normalize();
k=s.x;l=s.y;s=s.z;f=m.x;g=m.y;var m=m.z,n=d.x,p=d.y;d=d.z;qb.set(k,l,s,0,f,g,m,0,n,p,d,0,0,0,0,1);qb.translate(-a,-b,-c);Ra.reset();Ra.invApply(k,l,s,0,f,g,m,0,n,p,d,0,0,0,0,1);Ra.translate(a,b,c);K.set(qb);fa.set(Ra)};e.perspective=function(a,b,c,d){0===arguments.length&&(rb=S.height/2,sb=rb/Math.tan(lc/2),Zc=sb/10,$c=10*sb,ad=e.width/e.height,a=lc,b=ad,c=Zc,d=$c);var f,g;f=c*Math.tan(a/2);g=-f;e.frustum(g*b,f*b,g,f,c,d)};E.prototype.frustum=function(){throw"Processing.js: frustum() is not supported in 2D mode";
};B.prototype.frustum=function(a,b,c,e,d,f){Ha=new I;Ha.set(2*d/(b-a),0,(b+a)/(b-a),0,0,2*d/(e-c),(e+c)/(e-c),0,0,0,-(f+d)/(f-d),-(2*f*d)/(f-d),0,0,-1,0);a=new I;a.set(Ha);a.transpose();g.useProgram(J);U("projection2d",J,"uProjection",!1,a.array());g.useProgram(y);U("projection3d",y,"uProjection",!1,a.array());g.useProgram(na);U("uProjectionUS",na,"uProjection",!1,a.array())};e.ortho=function(a,b,c,d,f,h){0===arguments.length&&(a=0,b=e.width,c=0,d=e.height,f=-10,h=10);var k=2/(b-a),l=2/(d-c),s=-2/
(h-f),m=-(b+a)/(b-a),n=-(d+c)/(d-c),p=-(h+f)/(h-f);Ha=new I;Ha.set(k,0,0,m,0,l,0,n,0,0,s,p,0,0,0,1);k=new I;k.set(Ha);k.transpose();g.useProgram(J);U("projection2d",J,"uProjection",!1,k.array());g.useProgram(y);U("projection3d",y,"uProjection",!1,k.array());g.useProgram(na);U("uProjectionUS",na,"uProjection",!1,k.array())};e.printProjection=function(){Ha.print()};e.printCamera=function(){qb.print()};E.prototype.box=W.prototype.a3DOnlyFunction;B.prototype.box=function(a,b,c){b&&c||(b=c=a);var e=new I;
e.scale(a,b,c);a=new I;a.scale(1,-1,1);a.apply(K.array());a.transpose();R&&(g.useProgram(y),U("model3d",y,"uModel",!1,e.array()),U("view3d",y,"uView",!1,a.array()),g.enable(g.POLYGON_OFFSET_FILL),g.polygonOffset(1,1),T("color3d",y,"uColor",ka),0<O?(b=new I,b.set(a),c=new I,c.set(e),b.mult(c),c=new I,c.set(b),c.invert(),c.transpose(),U("uNormalTransform3d",y,"uNormalTransform",!1,c.array()),Z("aNormal3d",y,"aNormal",3,xc)):sa("aNormal3d",y,"aNormal"),Z("aVertex3d",y,"aVertex",3,wc),sa("aColor3d",y,
"aColor"),sa("aTexture3d",y,"aTexture"),g.drawArrays(g.TRIANGLES,0,cd.length/3),g.disable(g.POLYGON_OFFSET_FILL));0<ea&&C&&(g.useProgram(J),U("uModel2d",J,"uModel",!1,e.array()),U("uView2d",J,"uView",!1,a.array()),T("uColor2d",J,"uColor",X),Y("uIsDrawingText2d",J,"uIsDrawingText",!1),Z("vertex2d",J,"aVertex",3,yc),sa("aTextureCoord2d",J,"aTextureCoord"),g.drawArrays(g.LINES,0,dd.length/3))};e.sphereDetail=function(a,b){var e;1===arguments.length&&(a=b=arguments[0]);3>a&&(a=3);2>b&&(b=2);if(a!==pb||
b!==jc){var d=c.SINCOS_LENGTH/a,f=new A(a),h=new A(a);for(e=0;e<a;e++)f[e]=Vb[e*d%c.SINCOS_LENGTH|0],h[e]=Ub[e*d%c.SINCOS_LENGTH|0];e=a*(b-1)+2;d=0;Oa=new A(e);Pa=new A(e);Qa=new A(e);var k=0.5*c.SINCOS_LENGTH/b,l=k;for(e=1;e<b;e++){for(var s=Ub[l%c.SINCOS_LENGTH|0],m=-Vb[l%c.SINCOS_LENGTH|0],n=0;n<a;n++)Oa[d]=f[n]*s,Pa[d]=m,Qa[d++]=h[n]*s;l+=k}pb=a;jc=b;P=[];for(f=0;f<pb;f++)P.push(0),P.push(-1),P.push(0),P.push(Oa[f]),P.push(Pa[f]),P.push(Qa[f]);P.push(0);P.push(-1);P.push(0);P.push(Oa[0]);P.push(Pa[0]);
P.push(Qa[0]);k=0;for(f=2;f<jc;f++){h=e=k;d=k+=pb;for(l=0;l<pb;l++)P.push(Oa[h]),P.push(Pa[h]),P.push(Qa[h++]),P.push(Oa[d]),P.push(Pa[d]),P.push(Qa[d++]);h=e;d=k;P.push(Oa[h]);P.push(Pa[h]);P.push(Qa[h]);P.push(Oa[d]);P.push(Pa[d]);P.push(Qa[d])}for(f=0;f<pb;f++)d=k+f,P.push(Oa[d]),P.push(Pa[d]),P.push(Qa[d]),P.push(0),P.push(1),P.push(0);P.push(Oa[k]);P.push(Pa[k]);P.push(Qa[k]);P.push(0);P.push(1);P.push(0);g.bindBuffer(g.ARRAY_BUFFER,Tb);g.bufferData(g.ARRAY_BUFFER,new A(P),g.STATIC_DRAW)}};E.prototype.sphere=
W.prototype.a3DOnlyFunction;B.prototype.sphere=function(a){(3>pb||2>jc)&&e.sphereDetail(30);var b=new I;b.scale(a,a,a);a=new I;a.scale(1,-1,1);a.apply(K.array());a.transpose();if(R){if(0<O){var c=new I;c.set(a);var d=new I;d.set(b);c.mult(d);d=new I;d.set(c);d.invert();d.transpose();U("uNormalTransform3d",y,"uNormalTransform",!1,d.array());Z("aNormal3d",y,"aNormal",3,Tb)}else sa("aNormal3d",y,"aNormal");g.useProgram(y);sa("aTexture3d",y,"aTexture");U("uModel3d",y,"uModel",!1,b.array());U("uView3d",
y,"uView",!1,a.array());Z("aVertex3d",y,"aVertex",3,Tb);sa("aColor3d",y,"aColor");g.enable(g.POLYGON_OFFSET_FILL);g.polygonOffset(1,1);T("uColor3d",y,"uColor",ka);g.drawArrays(g.TRIANGLE_STRIP,0,P.length/3);g.disable(g.POLYGON_OFFSET_FILL)}0<ea&&C&&(g.useProgram(J),U("uModel2d",J,"uModel",!1,b.array()),U("uView2d",J,"uView",!1,a.array()),Z("aVertex2d",J,"aVertex",3,Tb),sa("aTextureCoord2d",J,"aTextureCoord"),T("uColor2d",J,"uColor",X),Y("uIsDrawingText",J,"uIsDrawingText",!1),g.drawArrays(g.LINE_STRIP,
0,P.length/3))};e.modelX=function(a,b,c){var e=K.array(),d=Ra.array(),f=e[0]*a+e[1]*b+e[2]*c+e[3],g=e[4]*a+e[5]*b+e[6]*c+e[7],h=e[8]*a+e[9]*b+e[10]*c+e[11];b=e[12]*a+e[13]*b+e[14]*c+e[15];a=d[0]*f+d[1]*g+d[2]*h+d[3]*b;d=d[12]*f+d[13]*g+d[14]*h+d[15]*b;return 0!==d?a/d:a};e.modelY=function(a,b,c){var e=K.array(),d=Ra.array(),f=e[0]*a+e[1]*b+e[2]*c+e[3],g=e[4]*a+e[5]*b+e[6]*c+e[7],h=e[8]*a+e[9]*b+e[10]*c+e[11];b=e[12]*a+e[13]*b+e[14]*c+e[15];a=d[4]*f+d[5]*g+d[6]*h+d[7]*b;d=d[12]*f+d[13]*g+d[14]*h+d[15]*
b;return 0!==d?a/d:a};e.modelZ=function(a,b,c){var e=K.array(),d=Ra.array(),f=e[0]*a+e[1]*b+e[2]*c+e[3],g=e[4]*a+e[5]*b+e[6]*c+e[7],h=e[8]*a+e[9]*b+e[10]*c+e[11];b=e[12]*a+e[13]*b+e[14]*c+e[15];a=d[8]*f+d[9]*g+d[10]*h+d[11]*b;d=d[12]*f+d[13]*g+d[14]*h+d[15]*b;return 0!==d?a/d:a};E.prototype.ambient=W.prototype.a3DOnlyFunction;B.prototype.ambient=function(a,b,c){g.useProgram(y);Y("uUsingMat3d",y,"uUsingMat",!0);a=e.color(a,b,c);T("uMaterialAmbient3d",y,"uMaterialAmbient",e.color.toGLArray(a).slice(0,
3))};E.prototype.emissive=W.prototype.a3DOnlyFunction;B.prototype.emissive=function(a,b,c){g.useProgram(y);Y("uUsingMat3d",y,"uUsingMat",!0);a=e.color(a,b,c);T("uMaterialEmissive3d",y,"uMaterialEmissive",e.color.toGLArray(a).slice(0,3))};E.prototype.shininess=W.prototype.a3DOnlyFunction;B.prototype.shininess=function(a){g.useProgram(y);Y("uUsingMat3d",y,"uUsingMat",!0);T("uShininess3d",y,"uShininess",a)};E.prototype.specular=W.prototype.a3DOnlyFunction;B.prototype.specular=function(a,b,c){g.useProgram(y);
Y("uUsingMat3d",y,"uUsingMat",!0);a=e.color(a,b,c);T("uMaterialSpecular3d",y,"uMaterialSpecular",e.color.toGLArray(a).slice(0,3))};e.screenX=function(a,b,c){var d=K.array();if(16===d.length){var f=d[0]*a+d[1]*b+d[2]*c+d[3],g=d[4]*a+d[5]*b+d[6]*c+d[7],h=d[8]*a+d[9]*b+d[10]*c+d[11];b=d[12]*a+d[13]*b+d[14]*c+d[15];c=Ha.array();a=c[0]*f+c[1]*g+c[2]*h+c[3]*b;f=c[12]*f+c[13]*g+c[14]*h+c[15]*b;0!==f&&(a/=f);return e.width*(1+a)/2}return K.multX(a,b)};e.screenY=function(a,b,c){var d=K.array();if(16===d.length){var f=
d[0]*a+d[1]*b+d[2]*c+d[3],g=d[4]*a+d[5]*b+d[6]*c+d[7],h=d[8]*a+d[9]*b+d[10]*c+d[11];b=d[12]*a+d[13]*b+d[14]*c+d[15];c=Ha.array();a=c[4]*f+c[5]*g+c[6]*h+c[7]*b;f=c[12]*f+c[13]*g+c[14]*h+c[15]*b;0!==f&&(a/=f);return e.height*(1+a)/2}return K.multY(a,b)};e.screenZ=function(a,b,c){var e=K.array();if(16!==e.length)return 0;var d=Ha.array(),f=e[0]*a+e[1]*b+e[2]*c+e[3],g=e[4]*a+e[5]*b+e[6]*c+e[7],h=e[8]*a+e[9]*b+e[10]*c+e[11];b=e[12]*a+e[13]*b+e[14]*c+e[15];a=d[8]*f+d[9]*g+d[10]*h+d[11]*b;d=d[12]*f+d[13]*
g+d[14]*h+d[15]*b;0!==d&&(a/=d);return(a+1)/2};W.prototype.fill=function(){var a=e.color.apply(this,arguments);a===La&&R||(R=!0,La=a)};E.prototype.fill=function(){W.prototype.fill.apply(this,arguments);N=!0};B.prototype.fill=function(){W.prototype.fill.apply(this,arguments);ka=e.color.toGLArray(La)};e.noFill=function(){R=!1};W.prototype.stroke=function(){var a=e.color.apply(this,arguments);a===ja&&C||(C=!0,ja=a)};E.prototype.stroke=function(){W.prototype.stroke.apply(this,arguments);ab=!0};B.prototype.stroke=
function(){W.prototype.stroke.apply(this,arguments);X=e.color.toGLArray(ja)};e.noStroke=function(){C=!1};W.prototype.strokeWeight=function(a){ea=a};E.prototype.strokeWeight=function(a){W.prototype.strokeWeight.apply(this,arguments);g.lineWidth=a};B.prototype.strokeWeight=function(a){W.prototype.strokeWeight.apply(this,arguments);g.useProgram(J);T("pointSize2d",J,"uPointSize",a);g.useProgram(na);T("pointSizeUnlitShape",na,"uPointSize",a);g.lineWidth(a)};e.strokeCap=function(a){ha.$ensureContext().lineCap=
a};e.strokeJoin=function(a){ha.$ensureContext().lineJoin=a};E.prototype.smooth=function(){ra=!0;var a=S.style;a.setProperty("image-rendering","optimizeQuality","important");a.setProperty("-ms-interpolation-mode","bicubic","important");g.hasOwnProperty("mozImageSmoothingEnabled")&&(g.mozImageSmoothingEnabled=!0)};B.prototype.smooth=function(){ra=!0};E.prototype.noSmooth=function(){ra=!1;var a=S.style;a.setProperty("image-rendering","optimizeSpeed","important");a.setProperty("image-rendering","-moz-crisp-edges",
"important");a.setProperty("image-rendering","-webkit-optimize-contrast","important");a.setProperty("image-rendering","optimize-contrast","important");a.setProperty("-ms-interpolation-mode","nearest-neighbor","important");g.hasOwnProperty("mozImageSmoothingEnabled")&&(g.mozImageSmoothingEnabled=!1)};B.prototype.noSmooth=function(){ra=!1};E.prototype.point=function(a,b){C&&(a=Math.round(a),b=Math.round(b),g.fillStyle=e.color.toString(ja),N=!0,1<ea?(g.beginPath(),g.arc(a,b,ea/2,0,c.TWO_PI,!1),g.fill()):
g.fillRect(a,b,1,1))};B.prototype.point=function(a,b,c){var e=new I;e.translate(a,b,c||0);e.transpose();a=new I;a.scale(1,-1,1);a.apply(K.array());a.transpose();g.useProgram(J);U("uModel2d",J,"uModel",!1,e.array());U("uView2d",J,"uView",!1,a.array());0<ea&&C&&(T("uColor2d",J,"uColor",X),Y("uIsDrawingText2d",J,"uIsDrawingText",!1),Y("uSmooth2d",J,"uSmooth",ra),Z("aVertex2d",J,"aVertex",3,hc),sa("aTextureCoord2d",J,"aTextureCoord"),g.drawArrays(g.POINTS,0,1))};e.beginShape=function(a){aa=a;t=[]};E.prototype.vertex=
function(a,b,c){var e=[];ib&&(ib=!1);e.isVert=!0;e[0]=a;e[1]=b;e[2]=0;e[3]=0;e[4]=0;e[5]=La;e[6]=ja;t.push(e);c&&(t[t.length-1].moveTo=c)};B.prototype.vertex=function(a,b,e,d,f){var g=[];ib&&(ib=!1);g.isVert=!0;f===h&&ua&&(f=d,d=e,e=0);d!==h&&f!==h&&(Wc===c.IMAGE&&(d/=Uc,f/=Vc),d=1<d?1:d,d=0>d?0:d,f=1<f?1:f,f=0>f?0:f);g[0]=a;g[1]=b;g[2]=e||0;g[3]=d||0;g[4]=f||0;g[5]=ka[0];g[6]=ka[1];g[7]=ka[2];g[8]=ka[3];g[9]=X[0];g[10]=X[1];g[11]=X[2];g[12]=X[3];g[13]=Gb;g[14]=Eb;g[15]=ub;t.push(g)};var gd=function(a,
b){var c=new I;c.scale(1,-1,1);c.apply(K.array());c.transpose();g.useProgram(na);U("uViewUS",na,"uView",!1,c.array());Y("uSmoothUS",na,"uSmooth",ra);Z("aVertexUS",na,"aVertex",3,hc);g.bufferData(g.ARRAY_BUFFER,new A(a),g.STREAM_DRAW);Z("aColorUS",na,"aColor",4,Bc);g.bufferData(g.ARRAY_BUFFER,new A(b),g.STREAM_DRAW);g.drawArrays(g.POINTS,0,a.length/3)},Ca=function(a,b,c){b="LINES"===b?g.LINES:"LINE_LOOP"===b?g.LINE_LOOP:g.LINE_STRIP;var e=new I;e.scale(1,-1,1);e.apply(K.array());e.transpose();g.useProgram(na);
U("uViewUS",na,"uView",!1,e.array());Z("aVertexUS",na,"aVertex",3,Ac);g.bufferData(g.ARRAY_BUFFER,new A(a),g.STREAM_DRAW);Z("aColorUS",na,"aColor",4,Qc);g.bufferData(g.ARRAY_BUFFER,new A(c),g.STREAM_DRAW);g.drawArrays(b,0,a.length/3)},$a=function(a,b,c,e){b="TRIANGLES"===b?g.TRIANGLES:"TRIANGLE_FAN"===b?g.TRIANGLE_FAN:g.TRIANGLE_STRIP;var d=new I;d.scale(1,-1,1);d.apply(K.array());d.transpose();g.useProgram(y);U("model3d",y,"uModel",!1,[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]);U("view3d",y,"uView",!1,d.array());
g.enable(g.POLYGON_OFFSET_FILL);g.polygonOffset(1,1);T("color3d",y,"uColor",[-1,0,0,0]);Z("vertex3d",y,"aVertex",3,Pc);g.bufferData(g.ARRAY_BUFFER,new A(a),g.STREAM_DRAW);ua&&null!==gb&&sc(c);Z("aColor3d",y,"aColor",4,Bc);g.bufferData(g.ARRAY_BUFFER,new A(c),g.STREAM_DRAW);sa("aNormal3d",y,"aNormal");ua&&(Y("uUsingTexture3d",y,"uUsingTexture",ua),Z("aTexture3d",y,"aTexture",2,Rc),g.bufferData(g.ARRAY_BUFFER,new A(e),g.STREAM_DRAW));g.drawArrays(b,0,a.length/3);g.disable(g.POLYGON_OFFSET_FILL)};E.prototype.endShape=
function(a){if(0!==t.length){(a=a===c.CLOSE)&&t.push(t[0]);var b=[],d=[],f=[],k=[],l;ib=!0;var w,m,s=t.length;for(w=0;w<s;w++)for(l=t[w],m=0;3>m;m++)b.push(l[m]);for(w=0;w<s;w++)for(l=t[w],m=5;9>m;m++)d.push(l[m]);for(w=0;w<s;w++)for(l=t[w],m=9;13>m;m++)f.push(l[m]);for(w=0;w<s;w++)l=t[w],k.push(l[3]),k.push(l[4]);if(!Cb||aa!==c.POLYGON&&aa!==h)if(!Db||aa!==c.POLYGON&&aa!==h)if(aa===c.POINTS)for(w=0;w<s;w++)l=t[w],C&&e.stroke(l[6]),e.point(l[0],l[1]);else if(aa===c.LINES)for(w=0;w+1<s;w+=2)l=t[w],
C&&e.stroke(t[w+1][6]),e.line(l[0],l[1],t[w+1][0],t[w+1][1]);else if(aa===c.TRIANGLES)for(w=0;w+2<s;w+=3)l=t[w],g.beginPath(),g.moveTo(l[0],l[1]),g.lineTo(t[w+1][0],t[w+1][1]),g.lineTo(t[w+2][0],t[w+2][1]),g.lineTo(l[0],l[1]),R&&(e.fill(t[w+2][5]),wa()),C&&(e.stroke(t[w+2][6]),za()),g.closePath();else if(aa===c.TRIANGLE_STRIP)for(w=0;w+1<s;w++)l=t[w],g.beginPath(),g.moveTo(t[w+1][0],t[w+1][1]),g.lineTo(l[0],l[1]),C&&e.stroke(t[w+1][6]),R&&e.fill(t[w+1][5]),w+2<s&&(g.lineTo(t[w+2][0],t[w+2][1]),C&&
e.stroke(t[w+2][6]),R&&e.fill(t[w+2][5])),Ta();else if(aa===c.TRIANGLE_FAN){if(2<s)for(g.beginPath(),g.moveTo(t[0][0],t[0][1]),g.lineTo(t[1][0],t[1][1]),g.lineTo(t[2][0],t[2][1]),R&&(e.fill(t[2][5]),wa()),C&&(e.stroke(t[2][6]),za()),g.closePath(),w=3;w<s;w++)l=t[w],g.beginPath(),g.moveTo(t[0][0],t[0][1]),g.lineTo(t[w-1][0],t[w-1][1]),g.lineTo(l[0],l[1]),R&&(e.fill(l[5]),wa()),C&&(e.stroke(l[6]),za()),g.closePath()}else if(aa===c.QUADS)for(w=0;w+3<s;w+=4){l=t[w];g.beginPath();g.moveTo(l[0],l[1]);for(m=
1;4>m;m++)g.lineTo(t[w+m][0],t[w+m][1]);g.lineTo(l[0],l[1]);R&&(e.fill(t[w+3][5]),wa());C&&(e.stroke(t[w+3][6]),za());g.closePath()}else if(aa===c.QUAD_STRIP){if(3<s)for(w=0;w+1<s;w+=2)l=t[w],g.beginPath(),w+3<s?(g.moveTo(t[w+2][0],t[w+2][1]),g.lineTo(l[0],l[1]),g.lineTo(t[w+1][0],t[w+1][1]),g.lineTo(t[w+3][0],t[w+3][1]),R&&e.fill(t[w+3][5]),C&&e.stroke(t[w+3][6])):(g.moveTo(l[0],l[1]),g.lineTo(t[w+1][0],t[w+1][1])),Ta()}else{g.beginPath();g.moveTo(t[0][0],t[0][1]);for(w=1;w<s;w++)l=t[w],l.isVert&&
(l.moveTo?g.moveTo(l[0],l[1]):g.lineTo(l[0],l[1]));Ta()}else{g.beginPath();for(w=0;w<s;w++)l=t[w],t[w].isVert?t[w].moveTo?g.moveTo(l[0],l[1]):g.lineTo(l[0],l[1]):g.bezierCurveTo(t[w][0],t[w][1],t[w][2],t[w][3],t[w][4],t[w][5]);Ta()}else if(3<s){b=[];d=1-oc;g.beginPath();g.moveTo(t[1][0],t[1][1]);for(w=1;w+2<s;w++)l=t[w],b[0]=[l[0],l[1]],b[1]=[l[0]+(d*t[w+1][0]-d*t[w-1][0])/6,l[1]+(d*t[w+1][1]-d*t[w-1][1])/6],b[2]=[t[w+1][0]+(d*t[w][0]-d*t[w+2][0])/6,t[w+1][1]+(d*t[w][1]-d*t[w+2][1])/6],b[3]=[t[w+
1][0],t[w+1][1]],g.bezierCurveTo(b[1][0],b[1][1],b[2][0],b[2][1],b[3][0],b[3][1]);Ta()}Db=Cb=!1;va=[];oa=0;a&&t.pop()}};B.prototype.endShape=function(a){if(0!==t.length){var b=a===c.CLOSE;a=[];var e=[],d=[],f=[],k=[],l;ib=!0;var m,s,n=t.length;for(m=0;m<n;m++)for(l=t[m],s=0;3>s;s++)e.push(l[s]);for(m=0;m<n;m++)for(l=t[m],s=5;9>s;s++)d.push(l[s]);for(m=0;m<n;m++)for(l=t[m],s=9;13>s;s++)f.push(l[s]);for(m=0;m<n;m++)l=t[m],k.push(l[3]),k.push(l[4]);if(b){e.push(t[0][0]);e.push(t[0][1]);e.push(t[0][2]);
for(m=5;9>m;m++)d.push(t[0][m]);for(m=9;13>m;m++)f.push(t[0][m]);k.push(t[0][3]);k.push(t[0][4])}if(!Cb||aa!==c.POLYGON&&aa!==h)if(!Db||aa!==c.POLYGON&&aa!==h){if(aa===c.POINTS){for(m=0;m<n;m++)for(l=t[m],s=0;3>s;s++)a.push(l[s]);gd(a,f)}else if(aa===c.LINES){for(m=0;m<n;m++)for(l=t[m],s=0;3>s;s++)a.push(l[s]);for(m=0;m<n;m++)for(l=t[m],s=5;9>s;s++)d.push(l[s]);Ca(a,"LINES",f)}else if(aa===c.TRIANGLES){if(2<n)for(m=0;m+2<n;m+=3){e=[];k=[];a=[];d=[];f=[];for(s=0;3>s;s++)for(b=0;3>b;b++)a.push(t[m+
s][b]),e.push(t[m+s][b]);for(s=0;3>s;s++)for(b=3;5>b;b++)k.push(t[m+s][b]);for(s=0;3>s;s++)for(b=5;9>b;b++)d.push(t[m+s][b]),f.push(t[m+s][b+4]);C&&Ca(a,"LINE_LOOP",f);(R||ua)&&$a(e,"TRIANGLES",d,k)}}else if(aa===c.TRIANGLE_STRIP){if(2<n)for(m=0;m+2<n;m++){a=[];e=[];f=[];d=[];k=[];for(s=0;3>s;s++)for(b=0;3>b;b++)a.push(t[m+s][b]),e.push(t[m+s][b]);for(s=0;3>s;s++)for(b=3;5>b;b++)k.push(t[m+s][b]);for(s=0;3>s;s++)for(b=5;9>b;b++)f.push(t[m+s][b+4]),d.push(t[m+s][b]);(R||ua)&&$a(e,"TRIANGLE_STRIP",
d,k);C&&Ca(a,"LINE_LOOP",f)}}else if(aa===c.TRIANGLE_FAN){if(2<n){for(m=0;3>m;m++)for(l=t[m],s=0;3>s;s++)a.push(l[s]);for(m=0;3>m;m++)for(l=t[m],s=9;13>s;s++)f.push(l[s]);C&&Ca(a,"LINE_LOOP",f);for(m=2;m+1<n;m++){a=[];f=[];a.push(t[0][0]);a.push(t[0][1]);a.push(t[0][2]);f.push(t[0][9]);f.push(t[0][10]);f.push(t[0][11]);f.push(t[0][12]);for(s=0;2>s;s++)for(b=0;3>b;b++)a.push(t[m+s][b]);for(s=0;2>s;s++)for(b=9;13>b;b++)f.push(t[m+s][b]);C&&Ca(a,"LINE_STRIP",f)}(R||ua)&&$a(e,"TRIANGLE_FAN",d,k)}}else if(aa===
c.QUADS)for(m=0;m+3<n;m+=4){a=[];for(s=0;4>s;s++)for(l=t[m+s],b=0;3>b;b++)a.push(l[b]);C&&Ca(a,"LINE_LOOP",f);if(R){e=[];d=[];k=[];for(s=0;3>s;s++)e.push(t[m][s]);for(s=5;9>s;s++)d.push(t[m][s]);for(s=0;3>s;s++)e.push(t[m+1][s]);for(s=5;9>s;s++)d.push(t[m+1][s]);for(s=0;3>s;s++)e.push(t[m+3][s]);for(s=5;9>s;s++)d.push(t[m+3][s]);for(s=0;3>s;s++)e.push(t[m+2][s]);for(s=5;9>s;s++)d.push(t[m+2][s]);ua&&(k.push(t[m+0][3]),k.push(t[m+0][4]),k.push(t[m+1][3]),k.push(t[m+1][4]),k.push(t[m+3][3]),k.push(t[m+
3][4]),k.push(t[m+2][3]),k.push(t[m+2][4]));$a(e,"TRIANGLE_STRIP",d,k)}}else if(aa===c.QUAD_STRIP){if(3<n){for(m=0;2>m;m++)for(l=t[m],s=0;3>s;s++)a.push(l[s]);for(m=0;2>m;m++)for(l=t[m],s=9;13>s;s++)f.push(l[s]);Ca(a,"LINE_STRIP",f);4<n&&0<n%2&&(e.splice(e.length-3),t.pop());for(m=0;m+3<n;m+=2){a=[];f=[];for(s=0;3>s;s++)a.push(t[m+1][s]);for(s=0;3>s;s++)a.push(t[m+3][s]);for(s=0;3>s;s++)a.push(t[m+2][s]);for(s=0;3>s;s++)a.push(t[m+0][s]);for(s=9;13>s;s++)f.push(t[m+1][s]);for(s=9;13>s;s++)f.push(t[m+
3][s]);for(s=9;13>s;s++)f.push(t[m+2][s]);for(s=9;13>s;s++)f.push(t[m+0][s]);C&&Ca(a,"LINE_STRIP",f)}(R||ua)&&$a(e,"TRIANGLE_LIST",d,k)}}else if(1===n){for(s=0;3>s;s++)a.push(t[0][s]);for(s=9;13>s;s++)f.push(t[0][s]);gd(a,f)}else{for(m=0;m<n;m++){l=t[m];for(s=0;3>s;s++)a.push(l[s]);for(s=5;9>s;s++)f.push(l[s])}C&&b?Ca(a,"LINE_LOOP",f):C&&!b&&Ca(a,"LINE_STRIP",f);(R||ua)&&$a(e,"TRIANGLE_FAN",d,k)}ua=!1;g.useProgram(y);Y("usingTexture3d",y,"uUsingTexture",ua)}else a=e,a.splice(a.length-3),f.splice(f.length-
4),C&&Ca(a,null,f),R&&$a(e,"TRIANGLES",d);else C&&Ca(e,null,f),R&&$a(e,null,d);Db=Cb=!1;va=[];oa=0}};var hd=function(a,b){var c=1/a,e=c*c,d=e*c;b.set(0,0,0,1,d,e,c,0,6*d,2*e,0,0,6*d,0,0,0)},id=function(){xb||(Sb=new I,xb=new I,Lc=!0);var a=oc;Sb.set((a-1)/2,(a+3)/2,(-3-a)/2,(1-a)/2,1-a,(-5-a)/2,a+2,(a-1)/2,(a-1)/2,0,(1-a)/2,0,0,1,0,0);hd(pc,xb);uc||(fc=new I);fc.set(Sb);fc.preApply(uc);xb.apply(Sb)};E.prototype.bezierVertex=function(){Db=!0;var a=[];if(ib)throw"vertex() must be used at least once before calling bezierVertex()";
for(var b=0;b<arguments.length;b++)a[b]=arguments[b];t.push(a);t[t.length-1].isVert=!1};B.prototype.bezierVertex=function(){Db=!0;if(ib)throw"vertex() must be used at least once before calling bezierVertex()";if(9===arguments.length){yb===h&&(yb=new I);var a=t.length-1;hd(qc,yb);yb.apply(vc);for(var b=yb.array(),c=t[a][0],d=t[a][1],a=t[a][2],f=b[4]*c+b[5]*arguments[0]+b[6]*arguments[3]+b[7]*arguments[6],g=b[8]*c+b[9]*arguments[0]+b[10]*arguments[3]+b[11]*arguments[6],k=b[12]*c+b[13]*arguments[0]+
b[14]*arguments[3]+b[15]*arguments[6],l=b[4]*d+b[5]*arguments[1]+b[6]*arguments[4]+b[7]*arguments[7],m=b[8]*d+b[9]*arguments[1]+b[10]*arguments[4]+b[11]*arguments[7],n=b[12]*d+b[13]*arguments[1]+b[14]*arguments[4]+b[15]*arguments[7],p=b[4]*a+b[5]*arguments[2]+b[6]*arguments[5]+b[7]*arguments[8],r=b[8]*a+b[9]*arguments[2]+b[10]*arguments[5]+b[11]*arguments[8],b=b[12]*a+b[13]*arguments[2]+b[14]*arguments[5]+b[15]*arguments[8],v=0;v<qc;v++)c+=f,f+=g,g+=k,d+=l,l+=m,m+=n,a+=p,p+=r,r+=b,e.vertex(c,d,a);
e.vertex(arguments[6],arguments[7],arguments[8])}};e.texture=function(a){var b=ha.$ensureContext();if(a.__texture)b.bindTexture(b.TEXTURE_2D,a.__texture);else{if("canvas"===a.localName)b.bindTexture(b.TEXTURE_2D,Sc),b.texImage2D(b.TEXTURE_2D,0,b.RGBA,b.RGBA,b.UNSIGNED_BYTE,a),b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MAG_FILTER,b.LINEAR),b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MIN_FILTER,b.LINEAR),b.generateMipmap(b.TEXTURE_2D);else{var c=b.createTexture(),e=p.createElement("canvas"),d=e.getContext("2d"),
f;if(a.width&0===a.width-1)e.width=a.width;else{for(f=1;f<a.width;)f*=2;e.width=f}if(a.height&0===a.height-1)e.height=a.height;else{for(f=1;f<a.height;)f*=2;e.height=f}d.drawImage(a.sourceImg,0,0,a.width,a.height,0,0,e.width,e.height);b.bindTexture(b.TEXTURE_2D,c);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MIN_FILTER,b.LINEAR_MIPMAP_LINEAR);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MAG_FILTER,b.LINEAR);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_T,b.CLAMP_TO_EDGE);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_S,
b.CLAMP_TO_EDGE);b.texImage2D(b.TEXTURE_2D,0,b.RGBA,b.RGBA,b.UNSIGNED_BYTE,e);b.generateMipmap(b.TEXTURE_2D);a.__texture=c}Uc=a.width;Vc=a.height}ua=!0;b.useProgram(y);Y("usingTexture3d",y,"uUsingTexture",ua)};e.textureMode=function(a){Wc=a};E.prototype.curveVertex=function(a,b){Cb=!0;e.vertex(a,b)};B.prototype.curveVertex=function(a,b,c){Cb=!0;Lc||id();var d=[];d[0]=a;d[1]=b;d[2]=c;va.push(d);oa++;if(3<oa){var f=va[oa-4][0],g=va[oa-4][1],h=va[oa-4][2],k=va[oa-3][0],l=va[oa-3][1],m=va[oa-3][2],n=
va[oa-2][0],p=va[oa-2][1],r=va[oa-2][2],t=va[oa-1][0],v=va[oa-1][1],u=va[oa-1][2];a=k;b=l;c=m;var q=xb.array(),d=q[4]*f+q[5]*k+q[6]*n+q[7]*t,x=q[8]*f+q[9]*k+q[10]*n+q[11]*t,f=q[12]*f+q[13]*k+q[14]*n+q[15]*t,k=q[4]*g+q[5]*l+q[6]*p+q[7]*v,n=q[8]*g+q[9]*l+q[10]*p+q[11]*v,g=q[12]*g+q[13]*l+q[14]*p+q[15]*v,l=q[4]*h+q[5]*m+q[6]*r+q[7]*u,p=q[8]*h+q[9]*m+q[10]*r+q[11]*u,h=q[12]*h+q[13]*m+q[14]*r+q[15]*u;e.vertex(a,b,c);for(m=0;m<pc;m++)a+=d,d+=x,x+=f,b+=k,k+=n,n+=g,c+=l,l+=p,p+=h,e.vertex(a,b,c)}};E.prototype.curve=
function(a,b,c,d,f,g,h,k){e.beginShape();e.curveVertex(a,b);e.curveVertex(c,d);e.curveVertex(f,g);e.curveVertex(h,k);e.endShape()};B.prototype.curve=function(a,b,c,d,f,g,k,l,m,n,p,r){r!==h?(e.beginShape(),e.curveVertex(a,b,c),e.curveVertex(d,f,g),e.curveVertex(k,l,m),e.curveVertex(n,p,r)):(e.beginShape(),e.curveVertex(a,b),e.curveVertex(c,d),e.curveVertex(f,g),e.curveVertex(k,l));e.endShape()};e.curveTightness=function(a){oc=a};e.curveDetail=function(a){pc=a;id()};e.rectMode=function(a){qa=a};e.imageMode=
function(a){switch(a){case c.CORNER:mc=ed;break;case c.CORNERS:mc=ud;break;case c.CENTER:mc=vd;break;default:throw"Invalid imageMode";}};e.ellipseMode=function(a){la=a};e.arc=function(a,b,d,f,g,h){if(!(0>=d||h<g)){la===c.CORNERS?(d-=a,f-=b):la===c.RADIUS?(a-=d,b-=f,d*=2,f*=2):la===c.CENTER&&(a-=d/2,b-=f/2);for(;0>g;)g+=c.TWO_PI,h+=c.TWO_PI;h-g>c.TWO_PI&&(g=0,h=c.TWO_PI);d/=2;f/=2;a+=d;b+=f;g=0|0.5+2*g*e.RAD_TO_DEG;h=0|0.5+2*h*e.RAD_TO_DEG;var k,l;if(R){var m=C;C=!1;e.beginShape();e.vertex(a,b);for(k=
g;k<=h;k++)l=k%c.SINCOS_LENGTH,e.vertex(a+Vb[l]*d,b+Ub[l]*f);e.endShape(c.CLOSE);C=m}if(C){m=R;R=!1;e.beginShape();for(k=g;k<=h;k++)l=k%c.SINCOS_LENGTH,e.vertex(a+Vb[l]*d,b+Ub[l]*f);e.endShape();R=m}}};E.prototype.line=function(a,b,c,d){if(C)if(a=Math.round(a),c=Math.round(c),b=Math.round(b),d=Math.round(d),a===c&&b===d)e.point(a,b);else{for(var f=h,k=h,l=!0,f=K.array(),m=[1,0,0,0,1,0],s=0;6>s&&l;s++)l=f[s]===m[s];l&&(a===c?(b>d&&(f=b,b=d,d=f),d++,1===ea%2&&g.translate(0.5,0)):b===d&&(a>c&&(f=a,a=
c,c=f),c++,1===ea%2&&g.translate(0,0.5)),1===ea&&(k=g.lineCap,g.lineCap="butt"));g.beginPath();g.moveTo(a||0,b||0);g.lineTo(c||0,d||0);za();l&&(a===c&&1===ea%2?g.translate(-0.5,0):b===d&&1===ea%2&&g.translate(0,-0.5),1===ea&&(g.lineCap=k))}};B.prototype.line=function(a,b,c,d,f,k){if(f===h||k===h)k=0,f=d,d=c,c=0;a===d&&b===f&&c===k?e.point(a,b,c):(a=[a,b,c,d,f,k],b=new I,b.scale(1,-1,1),b.apply(K.array()),b.transpose(),0<ea&&C&&(g.useProgram(J),U("uModel2d",J,"uModel",!1,[1,0,0,0,0,1,0,0,0,0,1,0,0,
0,0,1]),U("uView2d",J,"uView",!1,b.array()),T("uColor2d",J,"uColor",X),Y("uIsDrawingText",J,"uIsDrawingText",!1),Z("aVertex2d",J,"aVertex",3,Ac),sa("aTextureCoord2d",J,"aTextureCoord"),g.bufferData(g.ARRAY_BUFFER,new A(a),g.STREAM_DRAW),g.drawArrays(g.LINES,0,2)))};E.prototype.bezier=function(){if(8!==arguments.length)throw"You must use 8 parameters for bezier() in 2D mode";e.beginShape();e.vertex(arguments[0],arguments[1]);e.bezierVertex(arguments[2],arguments[3],arguments[4],arguments[5],arguments[6],
arguments[7]);e.endShape()};B.prototype.bezier=function(){if(12!==arguments.length)throw"You must use 12 parameters for bezier() in 3D mode";e.beginShape();e.vertex(arguments[0],arguments[1],arguments[2]);e.bezierVertex(arguments[3],arguments[4],arguments[5],arguments[6],arguments[7],arguments[8],arguments[9],arguments[10],arguments[11]);e.endShape()};e.bezierDetail=function(a){qc=a};e.bezierPoint=function(a,b,c,e,d){return(1-d)*(1-d)*(1-d)*a+3*(1-d)*(1-d)*d*b+3*(1-d)*d*d*c+d*d*d*e};e.bezierTangent=
function(a,b,c,e,d){return 3*d*d*(-a+3*b-3*c+e)+6*d*(a-2*b+c)+3*(-a+b)};e.curvePoint=function(a,b,c,e,d){return 0.5*(2*b+(-a+c)*d+(2*a-5*b+4*c-e)*d*d+(-a+3*b-3*c+e)*d*d*d)};e.curveTangent=function(a,b,c,e,d){return 0.5*(-a+c+2*(2*a-5*b+4*c-e)*d+3*(-a+3*b-3*c+e)*d*d)};e.triangle=function(a,b,d,f,g,h){e.beginShape(c.TRIANGLES);e.vertex(a,b,0);e.vertex(d,f,0);e.vertex(g,h,0);e.endShape()};e.quad=function(a,b,d,f,g,h,k,l){e.beginShape(c.QUADS);e.vertex(a,b,0);e.vertex(d,f,0);e.vertex(g,h,0);e.vertex(k,
l,0);e.endShape()};E.prototype.rect=function(a,b,e,d,f,k,l,m){if(e||d)if(qa===c.CORNERS?(e-=a,d-=b):qa===c.RADIUS?(e*=2,d*=2,a-=e/2,b-=d/2):qa===c.CENTER&&(a-=e/2,b-=d/2),a=Math.round(a),b=Math.round(b),e=Math.round(e),d=Math.round(d),f!==h){m===h&&(m=l=k=f);var s=e/2,n=d/2;if(f>s||f>n)f=Math.min(s,n);if(k>s||k>n)k=Math.min(s,n);if(l>s||l>n)l=Math.min(s,n);if(m>s||m>n)m=Math.min(s,n);R&&!C||g.translate(0.5,0.5);g.beginPath();g.moveTo(a+f,b);g.lineTo(a+e-k,b);g.quadraticCurveTo(a+e,b,a+e,b+k);g.lineTo(a+
e,b+d-l);g.quadraticCurveTo(a+e,b+d,a+e-l,b+d);g.lineTo(a+m,b+d);g.quadraticCurveTo(a,b+d,a,b+d-m);g.lineTo(a,b+f);g.quadraticCurveTo(a,b,a+f,b);R&&!C||g.translate(-0.5,-0.5);wa();za()}else C&&1===ea%2&&g.translate(0.5,0.5),g.beginPath(),g.rect(a,b,e,d),wa(),za(),C&&1===ea%2&&g.translate(-0.5,-0.5)};B.prototype.rect=function(a,b,e,d,f,k,l,m){if(f!==h)throw"rect() with rounded corners is not supported in 3D mode";qa===c.CORNERS?(e-=a,d-=b):qa===c.RADIUS?(e*=2,d*=2,a-=e/2,b-=d/2):qa===c.CENTER&&(a-=
e/2,b-=d/2);f=new I;f.translate(a,b,0);f.scale(e,d,1);f.transpose();b=new I;b.scale(1,-1,1);b.apply(K.array());b.transpose();0<ea&&C&&(g.useProgram(J),U("uModel2d",J,"uModel",!1,f.array()),U("uView2d",J,"uView",!1,b.array()),T("uColor2d",J,"uColor",X),Y("uIsDrawingText2d",J,"uIsDrawingText",!1),Z("aVertex2d",J,"aVertex",3,gc),sa("aTextureCoord2d",J,"aTextureCoord"),g.drawArrays(g.LINE_LOOP,0,Hc.length/3));R&&(g.useProgram(y),U("uModel3d",y,"uModel",!1,f.array()),U("uView3d",y,"uView",!1,b.array()),
g.enable(g.POLYGON_OFFSET_FILL),g.polygonOffset(1,1),T("color3d",y,"uColor",ka),0<O?(a=new I,a.set(b),b=new I,b.set(f),a.mult(b),b=new I,b.set(a),b.invert(),b.transpose(),U("uNormalTransform3d",y,"uNormalTransform",!1,b.array()),Z("aNormal3d",y,"aNormal",3,zc)):sa("normal3d",y,"aNormal"),Z("vertex3d",y,"aVertex",3,gc),g.drawArrays(g.TRIANGLE_FAN,0,Hc.length/3),g.disable(g.POLYGON_OFFSET_FILL))};E.prototype.ellipse=function(a,b,d,f){a=a||0;b=b||0;if(!(0>=d&&0>=f))if(la===c.RADIUS?(d*=2,f*=2):la===
c.CORNERS?(d-=a,f-=b,a+=d/2,b+=f/2):la===c.CORNER&&(a+=d/2,b+=f/2),d===f)g.beginPath(),g.arc(a,b,d/2,0,c.TWO_PI,!1),wa(),za();else{d/=2;f/=2;var h=0.5522847498307933*d,k=0.5522847498307933*f;e.beginShape();e.vertex(a+d,b);e.bezierVertex(a+d,b-k,a+h,b-f,a,b-f);e.bezierVertex(a-h,b-f,a-d,b-k,a-d,b);e.bezierVertex(a-d,b+k,a-h,b+f,a,b+f);e.bezierVertex(a+h,b+f,a+d,b+k,a+d,b);e.endShape()}};B.prototype.ellipse=function(a,b,d,f){a=a||0;b=b||0;if(!(0>=d&&0>=f)){la===c.RADIUS?(d*=2,f*=2):la===c.CORNERS?(d-=
a,f-=b,a+=d/2,b+=f/2):la===c.CORNER&&(a+=d/2,b+=f/2);d/=2;f/=2;var g=0.5522847498307933*d,h=0.5522847498307933*f;e.beginShape();e.vertex(a+d,b);e.bezierVertex(a+d,b-h,0,a+g,b-f,0,a,b-f,0);e.bezierVertex(a-g,b-f,0,a-d,b-h,0,a-d,b,0);e.bezierVertex(a-d,b+h,0,a-g,b+f,0,a,b+f,0);e.bezierVertex(a+g,b+f,0,a+d,b+h,0,a+d,b,0);e.endShape();if(R){for(g=f=d=0;g<t.length;g++)d+=t[g][0],f+=t[g][1];d/=t.length;f/=t.length;g=[];a=[];b=[];g[0]=d;g[1]=f;g[2]=0;g[3]=0;g[4]=0;g[5]=ka[0];g[6]=ka[1];g[7]=ka[2];g[8]=ka[3];
g[9]=X[0];g[10]=X[1];g[11]=X[2];g[12]=X[3];g[13]=Gb;g[14]=Eb;g[15]=ub;t.unshift(g);for(g=0;g<t.length;g++){for(d=0;3>d;d++)a.push(t[g][d]);for(d=5;9>d;d++)b.push(t[g][d])}$a(a,"TRIANGLE_FAN",b)}}};e.normal=function(a,b,d){if(3!==arguments.length||"number"!==typeof a||"number"!==typeof b||"number"!==typeof d)throw"normal() requires three numeric arguments.";Gb=a;Eb=b;ub=d;0!==aa&&(jb===c.NORMAL_MODE_AUTO?jb=c.NORMAL_MODE_SHAPE:jb===c.NORMAL_MODE_SHAPE&&(jb=c.NORMAL_MODE_VERTEX))};e.save=function(a,
b){return b!==h?l.open(b.toDataURL(),"_blank"):l.open(e.externals.canvas.toDataURL(),"_blank")};var wd=0;e.saveFrame=function(a){a===h&&(a="screen-####.png");a=a.replace(/#+/,function(a){for(var b=""+wd++;b.length<a.length;)b="0"+b;return b});e.save(a)};var xd=p.createElement("canvas").getContext("2d"),Mc=[h,h,h],Ga=function(a,b,d){this.__isDirty=!1;if(a instanceof D)this.fromHTMLImageData(a);else if(b||d){this.width=a||1;this.height=b||1;a=this.sourceImg=p.createElement("canvas");a.width=this.width;
a.height=this.height;this.imageData=a.getContext("2d").createImageData(this.width,this.height);this.format=d===c.ARGB||d===c.ALPHA?d:c.RGB;if(this.format===c.RGB)for(d=3,a=this.imageData.data,b=a.length;d<b;d+=4)a[d]=255;this.__isDirty=!0;this.updatePixels()}else this.height=this.width=0,this.imageData=xd.createImageData(1,1),this.format=c.ARGB;this.pixels=Jb(this)};Ga.prototype={__isPImage:!0,updatePixels:function(){var a=this.sourceImg;a&&(a instanceof x&&this.__isDirty)&&a.getContext("2d").putImageData(this.imageData,
0,0);this.__isDirty=!1},fromHTMLImageData:function(a){var b=Ja(a);try{var c=b.context.getImageData(0,0,a.width,a.height);this.fromImageData(c)}catch(d){a.width&&a.height&&(this.isRemote=!0,this.width=a.width,this.height=a.height)}this.sourceImg=a},get:function(a,b,c,d){if(!arguments.length)return e.get(this);if(2===arguments.length)return e.get(a,b,this);if(4===arguments.length)return e.get(a,b,c,d,this)},set:function(a,b,c){e.set(a,b,c,this);this.__isDirty=!0},blend:function(a,b,c,d,f,g,h,k,l,m){9===
arguments.length?e.blend(this,a,b,c,d,f,g,h,k,l,this):10===arguments.length&&e.blend(a,b,c,d,f,g,h,k,l,m,this);delete this.sourceImg},copy:function(a,b,d,f,g,h,k,l,m){8===arguments.length?e.blend(this,a,b,d,f,g,h,k,l,c.REPLACE,this):9===arguments.length&&e.blend(a,b,d,f,g,h,k,l,m,c.REPLACE,this);delete this.sourceImg},filter:function(a,b){2===arguments.length?e.filter(a,b,this):1===arguments.length&&e.filter(a,null,this);delete this.sourceImg},save:function(a){e.save(a,this)},resize:function(a,b){if(this.isRemote)throw"Image is loaded remotely. Cannot resize.";
if(0!==this.width||0!==this.height){0===a&&0!==b?a=Math.floor(this.width/this.height*b):0===b&&0!==a&&(b=Math.floor(this.height/this.width*a));var c=Ja(this.imageData).canvas,c=Ja(c,a,b).context.getImageData(0,0,a,b);this.fromImageData(c)}},mask:function(a){var b=this.toImageData(),c,d;if(a instanceof Ga||a.__isPImage)if(a.width===this.width&&a.height===this.height)for(a=a.toImageData(),c=2,d=4*this.width*this.height;c<d;c+=4)b.data[c+1]=a.data[c];else throw"mask must have the same dimensions as PImage.";
else if(a instanceof Array)if(this.width*this.height===a.length)for(c=0,d=a.length;c<d;++c)b.data[4*c+3]=a[c];else throw"mask array must be the same length as PImage pixels array.";this.fromImageData(b)},loadPixels:r,toImageData:function(){return this.isRemote?this.sourceImg:this.__isDirty?Ja(this.sourceImg).context.getImageData(0,0,this.width,this.height):this.imageData},toDataURL:function(){if(this.isRemote)throw"Image is loaded remotely. Cannot create dataURI.";return Ja(this.imageData).canvas.toDataURL()},
fromImageData:function(a){var b=a.width,d=a.height,e=p.createElement("canvas"),f=e.getContext("2d");this.width=e.width=b;this.height=e.height=d;f.putImageData(a,0,0);this.format=c.ARGB;this.imageData=a;this.sourceImg=e}};e.PImage=Ga;e.createImage=function(a,b,c){return new Ga(a,b,c)};e.loadImage=function(a,b,c){if(da.imageCache.images[a])return b=new Ga(da.imageCache.images[a]),b.loaded=!0,b;b=new Ga;var d=p.createElement("img");b.sourceImg=d;d.onload=function(a,b,c){return function(){b.fromHTMLImageData(a);
b.loaded=!0;c&&c()}}(d,b,c);d.src=a;return b};e.requestImage=e.loadImage;e.get=function(a,b,d,f,g){if(void 0!==g)return Lb(a,b,d,f,g);if(void 0!==f)return Kb(a,b,d,f);if(void 0!==d){if(d.isRemote)throw"Image is loaded remotely. Cannot get x,y.";a=4*b*d.width+4*a;d=d.imageData.data;return d[a+3]<<24&c.ALPHA_MASK|d[a]<<16&c.RED_MASK|d[a+1]<<8&c.GREEN_MASK|d[a+2]&c.BLUE_MASK}return void 0!==b?(a>=e.width||0>a||0>b||b>=e.height?d=0:Rb?(a=4*((0|a)+e.width*(0|b)),d=e.imageData.data,d=d[a+3]<<24&c.ALPHA_MASK|
d[a]<<16&c.RED_MASK|d[a+1]<<8&c.GREEN_MASK|d[a+2]&c.BLUE_MASK):(d=e.toImageData(0|a,0|b,1,1).data,d=d[3]<<24&c.ALPHA_MASK|d[0]<<16&c.RED_MASK|d[1]<<8&c.GREEN_MASK|d[2]&c.BLUE_MASK),d):void 0!==a?Lb(0,0,a.width,a.height,a):Kb(0,0,e.width,e.height)};e.createGraphics=function(a,b,c){var d=new M;d.size(a,b,c);d.background(0,0);return d};e.set=function(a,b,c,d){if(3===arguments.length)"number"===typeof c?a<e.width&&(0<=a&&0<=b&&b<e.height)&&(Rb||(e.loadPixels(),null===Fc&&(Nc=g,Fc=new Mb),Rb=!0,g=Fc,Xc=
0),e.pixels.setPixel((0|a)+e.width*(0|b),c),++Xc>Yc&&fb()):(c instanceof Ga||c.__isPImage)&&e.image(c,a,b);else if(4===arguments.length){if(d.isRemote)throw"Image is loaded remotely. Cannot set x,y.";var f=e.color.toArray(c),h=4*b*d.width+4*a,k=d.imageData.data;k[h]=f[0];k[h+1]=f[1];k[h+2]=f[2];k[h+3]=f[3]}};e.imageData={};e.pixels={getLength:function(){return e.imageData.data.length?e.imageData.data.length/4:0},getPixel:function(a){a*=4;var b=e.imageData.data;return b[a+3]<<24&4278190080|b[a+0]<<
16&16711680|b[a+1]<<8&65280|b[a+2]&255},setPixel:function(a,b){var c=4*a,d=e.imageData.data;d[c+0]=(b&16711680)>>>16;d[c+1]=(b&65280)>>>8;d[c+2]=b&255;d[c+3]=(b&4278190080)>>>24},toArray:function(){for(var a=[],b=e.imageData.width*e.imageData.height,c=e.imageData.data,d=0,f=0;d<b;d++,f+=4)a.push(c[f+3]<<24&4278190080|c[f+0]<<16&16711680|c[f+1]<<8&65280|c[f+2]&255);return a},set:function(a){for(var b=0,c=a.length;b<c;b++)this.setPixel(b,a[b])}};e.loadPixels=function(){e.imageData=ha.$ensureContext().getImageData(0,
0,e.width,e.height)};e.updatePixels=function(){e.imageData&&ha.$ensureContext().putImageData(e.imageData,0,0)};e.hint=function(a){var b=ha.$ensureContext();a===c.DISABLE_DEPTH_TEST?(b.disable(b.DEPTH_TEST),b.depthMask(!1),b.clear(b.DEPTH_BUFFER_BIT)):a===c.ENABLE_DEPTH_TEST?(b.enable(b.DEPTH_TEST),b.depthMask(!0)):a===c.ENABLE_OPENGL_2X_SMOOTH||a===c.ENABLE_OPENGL_4X_SMOOTH?ra=!0:a===c.DISABLE_OPENGL_2X_SMOOTH&&(ra=!1)};var jd=function(a,b,c,d){if(a instanceof Ga||a.__isPImage){if(!a.loaded)throw"Error using image in background(): PImage not loaded.";
if(a.width!==e.width||a.height!==e.height)throw"Background image must be the same dimensions as the canvas.";}else a=e.color(a,b,c,d);kb=a};E.prototype.background=function(a,b,c,d){a!==h&&jd(a,b,c,d);kb instanceof Ga||kb.__isPImage?(g.save(),g.setTransform(1,0,0,1,0,0),e.image(kb,0,0)):(g.save(),g.setTransform(1,0,0,1,0,0),e.alpha(kb)!==ia&&g.clearRect(0,0,e.width,e.height),g.fillStyle=e.color.toString(kb),g.fillRect(0,0,e.width,e.height),N=!0);Sa()};B.prototype.background=function(a,b,c,d){0<arguments.length&&
jd(a,b,c,d);var f=e.color.toGLArray(kb);g.clearColor(f[0],f[1],f[2],f[3]);g.clear(g.COLOR_BUFFER_BIT|g.DEPTH_BUFFER_BIT)};E.prototype.image=function(a,b,c,d,e){b=Math.round(b);c=Math.round(c);if(0<a.width){var f=mc(b||0,c||0,d||a.width,e||a.height,4>arguments.length);if(a.sourceImg&&null===gb){var h=a.sourceImg;a.__isDirty&&a.updatePixels();g.drawImage(h,0,0,h.width,h.height,f.x,f.y,f.w,f.h)}else h=a.toImageData(),null!==gb&&(gb(h),a.__isDirty=!0),g.drawImage(Ja(h).canvas,0,0,a.width,a.height,f.x,
f.y,f.w,f.h)}};B.prototype.image=function(a,b,c,d,f){0<a.width&&(b=Math.round(b),c=Math.round(c),d=d||a.width,f=f||a.height,e.beginShape(e.QUADS),e.texture(a),e.vertex(b,c,0,0,0),e.vertex(b,c+f,0,0,f),e.vertex(b+d,c+f,0,d,f),e.vertex(b+d,c,0,d,0),e.endShape())};e.tint=function(a,b,c,d){a=e.color(a,b,c,d);var f=e.red(a)/xa,g=e.green(a)/Ea,h=e.blue(a)/ya,k=e.alpha(a)/ia;gb=function(a){var b=a.data;a=4*a.width*a.height;for(var c=0;c<a;)b[c++]*=f,b[c++]*=g,b[c++]*=h,b[c++]*=k};sc=function(a){for(var b=
0;b<a.length;)a[b++]=f,a[b++]=g,a[b++]=h,a[b++]=k}};e.noTint=function(){sc=gb=null};e.copy=function(a,b,d,f,g,k,l,m,n){n===h&&(n=m,m=l,l=k,k=g,g=f,f=d,d=b,b=a,a=e);e.blend(a,b,d,f,g,k,l,m,n,c.REPLACE)};e.blend=function(a,b,c,d,f,g,k,l,m,n,p){if(a.isRemote)throw"Image is loaded remotely. Cannot blend image.";n===h&&(n=m,m=l,l=k,k=g,g=f,f=d,d=c,c=b,b=a,a=e);d=b+d;f=c+f;l=g+l;m=k+m;var r=p||e;p!==h&&n!==h||e.loadPixels();a.loadPixels();a===e&&e.intersect(b,c,d,f,g,k,l,m)?e.blit_resize(e.get(b,c,d-b,
f-c),0,0,d-b-1,f-c-1,r.imageData.data,r.width,r.height,g,k,l,m,n):e.blit_resize(a,b,c,d,f,r.imageData.data,r.width,r.height,g,k,l,m,n);p===h&&e.updatePixels()};var kd=function(a,b){var c=0,d=b.pixels.getLength(),e=new Q(d),f,g,h,k,l,m,n,p,r,t,q,v;if(a)for(;c<d;)for(f=c,g=c+b.width;c<g;)h=k=b.pixels.getPixel(c),m=c-1,l=c+1,n=c-b.width,p=c+b.width,m<f&&(m=c),l>=g&&(l=c),0>n&&(n=0),p>=d&&(p=c),n=b.pixels.getPixel(n),m=b.pixels.getPixel(m),p=b.pixels.getPixel(p),l=b.pixels.getPixel(l),h=77*(h>>16&255)+
151*(h>>8&255)+28*(h&255),t=77*(m>>16&255)+151*(m>>8&255)+28*(m&255),r=77*(l>>16&255)+151*(l>>8&255)+28*(l&255),q=77*(n>>16&255)+151*(n>>8&255)+28*(n&255),v=77*(p>>16&255)+151*(p>>8&255)+28*(p&255),t<h&&(k=m,h=t),r<h&&(k=l,h=r),q<h&&(k=n,h=q),v<h&&(k=p),e[c++]=k;else for(;c<d;)for(f=c,g=c+b.width;c<g;)h=k=b.pixels.getPixel(c),m=c-1,l=c+1,n=c-b.width,p=c+b.width,m<f&&(m=c),l>=g&&(l=c),0>n&&(n=0),p>=d&&(p=c),n=b.pixels.getPixel(n),m=b.pixels.getPixel(m),p=b.pixels.getPixel(p),l=b.pixels.getPixel(l),
h=77*(h>>16&255)+151*(h>>8&255)+28*(h&255),t=77*(m>>16&255)+151*(m>>8&255)+28*(m&255),r=77*(l>>16&255)+151*(l>>8&255)+28*(l&255),q=77*(n>>16&255)+151*(n>>8&255)+28*(n&255),v=77*(p>>16&255)+151*(p>>8&255)+28*(p&255),t>h&&(k=m,h=t),r>h&&(k=l,h=r),q>h&&(k=n,h=q),v>h&&(k=p),e[c++]=k;b.pixels.set(e)};e.filter=function(a,b,d){var f,g,k,l;3===arguments.length?(d.loadPixels(),f=d):(e.loadPixels(),f=e);b===h&&(b=null);if(f.isRemote)throw"Image is loaded remotely. Cannot filter image.";var m=f.pixels.getLength();
switch(a){case c.BLUR:var n=b||1,p=f,r,t,q,v,u,x,y,C,D;k=p.pixels.getLength();l=new A(k);m=new A(k);g=new A(k);k=new A(k);var F=0,G,E,H,n=e.floor(3.5*n),B,n=1>n?1:248>n?n:248;if(e.shared.blurRadius!==n){e.shared.blurRadius=n;e.shared.blurKernelSize=1+(e.shared.blurRadius<<1);e.shared.blurKernel=new A(e.shared.blurKernelSize);var I=e.shared.blurKernel,J=e.shared.blurKernelSize;for(B=0;B<J;B++)I[B]=0;J=(n-1)*(n-1);for(B=1;B<n;B++)I[n+B]=I[void 0]=J;I[n]=n*n}n=p.height;B=p.width;I=e.shared.blurKernelSize;
C=e.shared.blurRadius;var J=e.shared.blurKernel,K=p.imageData.data;for(E=0;E<n;E++){for(G=0;G<B;G++){q=t=r=v=p=0;x=G-C;if(0>x)u=-x,x=0;else{if(x>=B)break;u=0}for(H=u;H<I&&!(x>=B);H++)y=4*(x+F),u=J[H],v+=u*K[y+3],r+=u*K[y],t+=u*K[y+1],q+=u*K[y+2],p+=u,x++;y=F+G;k[y]=v/p;l[y]=r/p;m[y]=t/p;g[y]=q/p}F+=B}F=0;C=-C;D=C*B;for(E=0;E<n;E++){for(G=0;G<B;G++){q=t=r=v=p=0;if(0>C)u=y=-C,x=G;else{if(C>=n)break;u=0;y=C;x=G+D}for(H=u;H<I&&!(y>=n);H++)u=J[H],v+=u*k[x],r+=u*l[x],t+=u*m[x],q+=u*g[x],p+=u,y++,x+=B;y=
4*(G+F);K[y]=r/p;K[y+1]=t/p;K[y+2]=q/p;K[y+3]=v/p}F+=B;D+=B;C++}break;case c.GRAY:if(f.format===c.ALPHA){for(l=0;l<m;l++)g=255-f.pixels.getPixel(l),f.pixels.setPixel(l,4278190080|g<<16|g<<8|g);f.format=c.RGB}else for(l=0;l<m;l++)g=f.pixels.getPixel(l),k=77*(g>>16&255)+151*(g>>8&255)+28*(g&255)>>8,f.pixels.setPixel(l,g&c.ALPHA_MASK|k<<16|k<<8|k);break;case c.INVERT:for(l=0;l<m;l++)f.pixels.setPixel(l,f.pixels.getPixel(l)^16777215);break;case c.POSTERIZE:if(null===b)throw"Use filter(POSTERIZE, int levels) instead of filter(POSTERIZE)";
g=e.floor(b);if(2>g||255<g)throw"Levels must be between 2 and 255 for filter(POSTERIZE, levels)";k=g-1;for(l=0;l<m;l++)F=f.pixels.getPixel(l)>>16&255,n=f.pixels.getPixel(l)>>8&255,B=f.pixels.getPixel(l)&255,F=255*(F*g>>8)/k,n=255*(n*g>>8)/k,B=255*(B*g>>8)/k,f.pixels.setPixel(l,4278190080&f.pixels.getPixel(l)|F<<16|n<<8|B);break;case c.OPAQUE:for(l=0;l<m;l++)f.pixels.setPixel(l,f.pixels.getPixel(l)|4278190080);f.format=c.RGB;break;case c.THRESHOLD:null===b&&(b=0.5);if(0>b||1<b)throw"Level must be between 0 and 1 for filter(THRESHOLD, level)";
g=e.floor(255*b);for(l=0;l<m;l++)k=e.max((f.pixels.getPixel(l)&c.RED_MASK)>>16,e.max((f.pixels.getPixel(l)&c.GREEN_MASK)>>8,f.pixels.getPixel(l)&c.BLUE_MASK)),f.pixels.setPixel(l,f.pixels.getPixel(l)&c.ALPHA_MASK|(k<g?0:16777215));break;case c.ERODE:kd(!0,f);break;case c.DILATE:kd(!1,f)}f.updatePixels()};e.shared={fracU:0,ifU:0,fracV:0,ifV:0,u1:0,u2:0,v1:0,v2:0,sX:0,sY:0,iw:0,iw1:0,ih1:0,ul:0,ll:0,ur:0,lr:0,cUL:0,cLL:0,cUR:0,cLR:0,srcXOffset:0,srcYOffset:0,r:0,g:0,b:0,a:0,srcBuffer:null,blurRadius:0,
blurKernelSize:0,blurKernel:null};e.intersect=function(a,b,c,d,e,f,g,h){c=c-a+1;d=d-b+1;g=g-e+1;h=h-f+1;e<a?(g+=e-a,g>c&&(g=c)):(a=c+a-e,g>a&&(g=a));f<b?(h+=f-b,h>d&&(h=d)):(b=d+b-f,h>b&&(h=b));return!(0>=g||0>=h)};var pa={};pa[c.BLEND]=e.modes.blend;pa[c.ADD]=e.modes.add;pa[c.SUBTRACT]=e.modes.subtract;pa[c.LIGHTEST]=e.modes.lightest;pa[c.DARKEST]=e.modes.darkest;pa[c.REPLACE]=e.modes.replace;pa[c.DIFFERENCE]=e.modes.difference;pa[c.EXCLUSION]=e.modes.exclusion;pa[c.MULTIPLY]=e.modes.multiply;pa[c.SCREEN]=
e.modes.screen;pa[c.OVERLAY]=e.modes.overlay;pa[c.HARD_LIGHT]=e.modes.hard_light;pa[c.SOFT_LIGHT]=e.modes.soft_light;pa[c.DODGE]=e.modes.dodge;pa[c.BURN]=e.modes.burn;e.blit_resize=function(a,b,d,f,g,h,k,l,m,n,p,r,t){0>b&&(b=0);0>d&&(d=0);f>=a.width&&(f=a.width-1);g>=a.height&&(g=a.height-1);f-=b;g-=d;p-=m;r-=n;if(!(0>=p||0>=r||0>=f||0>=g||m>=k||n>=l||b>=a.width||d>=a.height)){f=Math.floor(f/p*c.PRECISIONF);g=Math.floor(g/r*c.PRECISIONF);var q=e.shared;q.srcXOffset=Math.floor(0>m?-m*f:b*c.PRECISIONF);
q.srcYOffset=Math.floor(0>n?-n*g:d*c.PRECISIONF);0>m&&(p+=m,m=0);0>n&&(r+=n,n=0);p=Math.min(p,k-m);r=Math.min(r,l-n);b=n*k+m;var v;q.srcBuffer=a.imageData.data;q.iw=a.width;q.iw1=a.width-1;q.ih1=a.height-1;d=pa[t];var u,x,y,C;m=c.ALPHA_MASK;n=c.RED_MASK;var A=c.GREEN_MASK,B=c.BLUE_MASK,F=c.PREC_MAXVAL,D=c.PRECISIONB,G=c.PREC_RED_SHIFT,H=c.PREC_ALPHA_SHIFT,E=q.srcBuffer,I=Math.min;for(t=0;t<r;t++){q.sX=q.srcXOffset;q.fracV=q.srcYOffset&F;q.ifV=F-q.fracV;q.v1=(q.srcYOffset>>D)*q.iw;q.v2=I((q.srcYOffset>>
D)+1,q.ih1)*q.iw;for(a=0;a<p;a++)l=4*(b+a),v=h[l+3]<<24&m|h[l]<<16&n|h[l+1]<<8&A|h[l+2]&B,q.fracU=q.sX&F,q.ifU=F-q.fracU,q.ul=q.ifU*q.ifV>>D,q.ll=q.ifU*q.fracV>>D,q.ur=q.fracU*q.ifV>>D,q.lr=q.fracU*q.fracV>>D,q.u1=q.sX>>D,q.u2=I(q.u1+1,q.iw1),u=4*(q.v1+q.u1),x=4*(q.v1+q.u2),y=4*(q.v2+q.u1),C=4*(q.v2+q.u2),q.cUL=E[u+3]<<24&m|E[u]<<16&n|E[u+1]<<8&A|E[u+2]&B,q.cUR=E[x+3]<<24&m|E[x]<<16&n|E[x+1]<<8&A|E[x+2]&B,q.cLL=E[y+3]<<24&m|E[y]<<16&n|E[y+1]<<8&A|E[y+2]&B,q.cLR=E[C+3]<<24&m|E[C]<<16&n|E[C+1]<<8&A|
E[C+2]&B,q.r=q.ul*((q.cUL&n)>>16)+q.ll*((q.cLL&n)>>16)+q.ur*((q.cUR&n)>>16)+q.lr*((q.cLR&n)>>16)<<G&n,q.g=q.ul*(q.cUL&A)+q.ll*(q.cLL&A)+q.ur*(q.cUR&A)+q.lr*(q.cLR&A)>>>D&A,q.b=q.ul*(q.cUL&B)+q.ll*(q.cLL&B)+q.ur*(q.cUR&B)+q.lr*(q.cLR&B)>>>D,q.a=q.ul*((q.cUL&m)>>>24)+q.ll*((q.cLL&m)>>>24)+q.ur*((q.cUR&m)>>>24)+q.lr*((q.cLR&m)>>>24)<<H&m,v=d(v,q.a|q.r|q.g|q.b),h[l]=(v&n)>>>16,h[l+1]=(v&A)>>>8,h[l+2]=v&B,h[l+3]=(v&m)>>>24,q.sX+=f;b+=k;q.srcYOffset+=g}}};e.loadFont=function(a,b){if(a===h)throw"font name required in loadFont.";
if(-1===a.indexOf(".svg"))return b===h&&(b=ba.size),PFont.get(a,b);var c=e.loadGlyphs(a);return{name:a,css:"12px sans-serif",glyph:!0,units_per_em:c.units_per_em,horiz_adv_x:1/c.units_per_em*c.horiz_adv_x,ascent:c.ascent,descent:c.descent,width:function(b){for(var c=0,d=b.length,f=0;f<d;f++)try{c+=parseFloat(e.glyphLook(e.glyphTable[a],b[f]).horiz_adv_x)}catch(g){M.debug(g)}return c/e.glyphTable[a].units_per_em}}};e.createFont=function(a,b){return e.loadFont(a,b)};e.textFont=function(a,b){b!==h&&
(a.glyph||(a=PFont.get(a.name,b)),Na=b);ba=a;zb=ba.name;Xa=ba.ascent;Ma=ba.descent;Aa=ba.leading;ha.$ensureContext().font=ba.css};e.textSize=function(a){ba=PFont.get(zb,a);Na=a;Xa=ba.ascent;Ma=ba.descent;Aa=ba.leading;ha.$ensureContext().font=ba.css};e.textAscent=function(){return Xa};e.textDescent=function(){return Ma};e.textLeading=function(a){Aa=a};e.textAlign=function(a,b){nb=a;Wa=b||c.BASELINE};E.prototype.textWidth=function(a){a=Ua(a).split(/\r?\n/g);var b=0,c,d=a.length;g.font=ba.css;for(c=
0;c<d;++c)b=Math.max(b,ba.measureTextWidth(a[c]));return b|0};B.prototype.textWidth=function(a){a=Ua(a).split(/\r?\n/g);var b=0,c,d=a.length;Ba===h&&(Ba=p.createElement("canvas"));var e=Ba.getContext("2d");e.font=ba.css;for(c=0;c<d;++c)b=Math.max(b,e.measureText(a[c]).width);return b|0};e.glyphLook=function(a,b){try{switch(b){case "1":return a.one;case "2":return a.two;case "3":return a.three;case "4":return a.four;case "5":return a.five;case "6":return a.six;case "7":return a.seven;case "8":return a.eight;
case "9":return a.nine;case "0":return a.zero;case " ":return a.space;case "$":return a.dollar;case "!":return a.exclam;case '"':return a.quotedbl;case "#":return a.numbersign;case "%":return a.percent;case "&":return a.ampersand;case "'":return a.quotesingle;case "(":return a.parenleft;case ")":return a.parenright;case "*":return a.asterisk;case "+":return a.plus;case ",":return a.comma;case "-":return a.hyphen;case ".":return a.period;case "/":return a.slash;case "_":return a.underscore;case ":":return a.colon;
case ";":return a.semicolon;case "<":return a.less;case "=":return a.equal;case ">":return a.greater;case "?":return a.question;case "@":return a.at;case "[":return a.bracketleft;case "\\":return a.backslash;case "]":return a.bracketright;case "^":return a.asciicircum;case "`":return a.grave;case "{":return a.braceleft;case "|":return a.bar;case "}":return a.braceright;case "~":return a.asciitilde;default:return a[b]}}catch(c){M.debug(c)}};E.prototype.text$line=function(a,b,d,f,h){f=f=0;if(ba.glyph){f=
e.glyphTable[zb];g.save();g.translate(b,d+Na);h!==c.RIGHT&&h!==c.CENTER||f.width(a);b=1/f.units_per_em*Na;g.scale(b,b);b=0;for(d=a.length;b<d;b++)try{e.glyphLook(f,a[b]).draw()}catch(k){M.debug(k)}Sa()}else if(a&&"fillText"in g){N&&(g.fillStyle=e.color.toString(La),N=!1);if(h===c.RIGHT||h===c.CENTER)f=ba.measureTextWidth(a),f=h===c.RIGHT?-f:-f/2;g.fillText(a,b+f,d)}};B.prototype.text$line=function(a,b,d,e,f){Ba===h&&(Ba=p.createElement("canvas"));var k=g;g=Ba.getContext("2d");g.font=ba.css;var l=
ba.measureTextWidth(a);Ba.width=l;Ba.height=Na;g=Ba.getContext("2d");g.font=ba.css;g.textBaseline="top";E.prototype.text$line(a,0,0,0,c.LEFT);a=Ba.width/Ba.height;g=k;g.bindTexture(g.TEXTURE_2D,Tc);g.texImage2D(g.TEXTURE_2D,0,g.RGBA,g.RGBA,g.UNSIGNED_BYTE,Ba);g.texParameteri(g.TEXTURE_2D,g.TEXTURE_MAG_FILTER,g.LINEAR);g.texParameteri(g.TEXTURE_2D,g.TEXTURE_MIN_FILTER,g.LINEAR);g.texParameteri(g.TEXTURE_2D,g.TEXTURE_WRAP_T,g.CLAMP_TO_EDGE);g.texParameteri(g.TEXTURE_2D,g.TEXTURE_WRAP_S,g.CLAMP_TO_EDGE);
k=0;f===c.RIGHT?k=-l:f===c.CENTER&&(k=-l/2);f=new I;l=0.5*Na;f.translate(b+k-l/2,d-l,e);f.scale(-a*l,-l,l);f.translate(-1,-1,-1);f.transpose();b=new I;b.scale(1,-1,1);b.apply(K.array());b.transpose();g.useProgram(J);Z("aVertex2d",J,"aVertex",3,Cc);Z("aTextureCoord2d",J,"aTextureCoord",2,Dc);Y("uSampler2d",J,"uSampler",[0]);Y("uIsDrawingText2d",J,"uIsDrawingText",!0);U("uModel2d",J,"uModel",!1,f.array());U("uView2d",J,"uView",!1,b.array());T("uColor2d",J,"uColor",ka);g.bindBuffer(g.ELEMENT_ARRAY_BUFFER,
Ec);g.drawElements(g.TRIANGLES,6,g.UNSIGNED_SHORT,0)};e.text=function(){ic!==c.SHAPE&&(3===arguments.length?Nb(Ua(arguments[0]),arguments[1],arguments[2],0):4===arguments.length?Nb(Ua(arguments[0]),arguments[1],arguments[2],arguments[3]):5===arguments.length?ac(Ua(arguments[0]),arguments[1],arguments[2],arguments[3],arguments[4],0):6===arguments.length&&ac(Ua(arguments[0]),arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]))};e.textMode=function(a){ic=a};e.loadGlyphs=function(a){var b,
c,d,f,k,m,n,q,r,t,v,u,x=function(a,b){var c=0,d=[],e,f=RegExp(a,"g");for(e=d[c]=f.exec(b);e;)c++,e=d[c]=f.exec(b);return d},y=function(a){var e=x("[A-Za-z][0-9\\- ]+|Z",a);u="return {draw:function(){var curContext=beforePathDraw();curContext.beginPath();";q=a=m=k=f=d=c=b=0;r="";t=e.length-1;for(var h=0;h<t;h++){var l=e[h][0];a=x("[0-9\\-]+",l);switch(l[0]){case "M":b=parseFloat(a[0][0]);c=parseFloat(a[1][0]);u+="curContext.moveTo("+b+","+-c+");";break;case "L":b=parseFloat(a[0][0]);c=parseFloat(a[1][0]);
u+="curContext.lineTo("+b+","+-c+");";break;case "H":b=parseFloat(a[0][0]);u+="curContext.lineTo("+b+","+-c+");";break;case "V":c=parseFloat(a[0][0]);u+="curContext.lineTo("+b+","+-c+");";break;case "T":k=parseFloat(a[0][0]);m=parseFloat(a[1][0]);"Q"===r||"T"===r?(a=Math.sqrt(Math.pow(b-d,2)+Math.pow(f-c,2)),q=Math.PI+Math.atan2(d-b,f-c),d=b+Math.sin(q)*a,f=c+Math.cos(q)*a):(d=b,f=c);u+="curContext.quadraticCurveTo("+d+","+-f+","+k+","+-m+");";b=k;c=m;break;case "Q":d=parseFloat(a[0][0]);f=parseFloat(a[1][0]);
k=parseFloat(a[2][0]);m=parseFloat(a[3][0]);u+="curContext.quadraticCurveTo("+d+","+-f+","+k+","+-m+");";b=k;c=m;break;case "Z":u+="curContext.closePath();"}r=l[0]}u+="afterPathDraw();";u+="curContext.translate("+v+",0);";u+="}}";return(new Function("beforePathDraw","afterPathDraw",u))(function(){g.save();return ha.$ensureContext()},function(){wa();za();Sa()})},A=function(b){var c=b.getElementsByTagName("font");e.glyphTable[a].horiz_adv_x=c[0].getAttribute("horiz-adv-x");c=b.getElementsByTagName("font-face")[0];
e.glyphTable[a].units_per_em=parseFloat(c.getAttribute("units-per-em"));e.glyphTable[a].ascent=parseFloat(c.getAttribute("ascent"));e.glyphTable[a].descent=parseFloat(c.getAttribute("descent"));b=b.getElementsByTagName("glyph");for(var c=b.length,d=0;d<c;d++){var f=b[d].getAttribute("unicode"),g=b[d].getAttribute("glyph-name");v=b[d].getAttribute("horiz-adv-x");null===v&&(v=e.glyphTable[a].horiz_adv_x);n=b[d].getAttribute("d");n!==h&&(u=y(n),e.glyphTable[a][g]={name:g,unicode:f,horiz_adv_x:v,draw:u.draw})}};
e.glyphTable[a]={};(function(){var b;try{b=p.implementation.createDocument("","",null)}catch(c){M.debug(c.message);return}try{b.async=!1,b.load(a),A(b.getElementsByTagName("svg")[0])}catch(d){M.debug(d);try{var e=new l.XMLHttpRequest;e.open("GET",a,!1);e.send(null);A(e.responseXML.documentElement)}catch(f){M.debug(d)}}})(a);return e.glyphTable[a]};e.param=function(a){var b="data-processing-"+a;if(S.hasAttribute(b))return S.getAttribute(b);for(var b=0,c=S.childNodes.length;b<c;++b){var d=S.childNodes.item(b);
if(1===d.nodeType&&"param"===d.tagName.toLowerCase()&&d.getAttribute("name")===a)return d.getAttribute("value")}return da.params.hasOwnProperty(a)?da.params[a]:null};F.prototype.translate=H("translate");F.prototype.transform=H("transform");F.prototype.scale=H("scale");F.prototype.pushMatrix=H("pushMatrix");F.prototype.popMatrix=H("popMatrix");F.prototype.resetMatrix=H("resetMatrix");F.prototype.applyMatrix=H("applyMatrix");F.prototype.rotate=H("rotate");F.prototype.rotateZ=H("rotateZ");F.prototype.shearX=
H("shearX");F.prototype.shearY=H("shearY");F.prototype.redraw=H("redraw");F.prototype.toImageData=H("toImageData");F.prototype.ambientLight=H("ambientLight");F.prototype.directionalLight=H("directionalLight");F.prototype.lightFalloff=H("lightFalloff");F.prototype.lightSpecular=H("lightSpecular");F.prototype.pointLight=H("pointLight");F.prototype.noLights=H("noLights");F.prototype.spotLight=H("spotLight");F.prototype.beginCamera=H("beginCamera");F.prototype.endCamera=H("endCamera");F.prototype.frustum=
H("frustum");F.prototype.box=H("box");F.prototype.sphere=H("sphere");F.prototype.ambient=H("ambient");F.prototype.emissive=H("emissive");F.prototype.shininess=H("shininess");F.prototype.specular=H("specular");F.prototype.fill=H("fill");F.prototype.stroke=H("stroke");F.prototype.strokeWeight=H("strokeWeight");F.prototype.smooth=H("smooth");F.prototype.noSmooth=H("noSmooth");F.prototype.point=H("point");F.prototype.vertex=H("vertex");F.prototype.endShape=H("endShape");F.prototype.bezierVertex=H("bezierVertex");
F.prototype.curveVertex=H("curveVertex");F.prototype.curve=H("curve");F.prototype.line=H("line");F.prototype.bezier=H("bezier");F.prototype.rect=H("rect");F.prototype.ellipse=H("ellipse");F.prototype.background=H("background");F.prototype.image=H("image");F.prototype.textWidth=H("textWidth");F.prototype.text$line=H("text$line");F.prototype.$ensureContext=H("$ensureContext");F.prototype.$newPMatrix=H("$newPMatrix");F.prototype.size=function(a,b,d){Ka(d===c.WEBGL?"3D":"2D");e.size(a,b,d)};F.prototype.$init=
r;E.prototype.$init=function(){e.size(e.width,e.height);g.lineCap="round";e.noSmooth();e.disableContextMenu()};B.prototype.$init=function(){e.use3DContext=!0;e.disableContextMenu()};W.prototype.$ensureContext=function(){return g};S.getAttribute("tabindex")||S.setAttribute("tabindex",0);if(Qb)da=new M.Sketch,Ka(),e.size=function(a,b,d){d&&d===c.WEBGL?Ka("3D"):Ka("2D");e.size(a,b,d)};else{da=k instanceof M.Sketch?k:"function"===typeof k?new M.Sketch(k):k?M.compile(k):new M.Sketch(function(){});e.externals.sketch=
da;Ka();S.onfocus=function(){e.focused=!0};S.onblur=function(){e.focused=!1;da.options.globalKeyEvents||(e.__keyPressed=!1,hb=[],ob=null)};da.options.pauseOnBlur&&(Ia(l,"focus",function(){Da&&e.loop()}),Ia(l,"blur",function(){Da&&eb&&(e.noLoop(),Da=!0);e.__keyPressed=!1;hb=[];ob=null}));var Jc=da.options.globalKeyEvents?l:S;Ia(Jc,"keydown",rc);Ia(Jc,"keypress",Pb);Ia(Jc,"keyup",bc);for(var Yb in M.lib)M.lib.hasOwnProperty(Yb)&&(M.lib[Yb].hasOwnProperty("attach")?M.lib[Yb].attach(e):M.lib[Yb]instanceof
Function&&M.lib[Yb].call(this));var ld=function(a){if(da.imageCache.pending||PFont.preloading.pending(100))l.setTimeout(function(){ld(a)},100);else{if(l.opera){var b,c,d=da.imageCache.operaCache;for(b in d)d.hasOwnProperty(b)&&(c=d[b],null!==c&&p.body.removeChild(c),delete d[b])}da.attach(a,n);da.onLoad(a);a.setup&&(a.setup(),a.resetMatrix(),da.onSetup());fb();a.draw&&(Da?a.loop():a.redraw())}};this.externals.canvas.id!==h&&this.externals.canvas.id.length||(this.externals.canvas.id="__processing"+
q.length);Zb[this.externals.canvas.id]=q.length;q.push(this);ld(e)}};M.debug=function(){return"console"in l?function(a){l.console.log("Processing.js: "+a)}:r}();M.prototype=n;M.instances=q;M.getInstanceById=function(a){return q[Zb[a]]};(function(a){function b(a){return function(){throw"Processing.js does not support "+a+".";}}for(var c="open() createOutput() createInput() BufferedReader selectFolder() dataPath() createWriter() selectOutput() beginRecord() saveStream() endRecord() selectInput() saveBytes() createReader() beginRaw() endRaw() PrintWriter delay()".split(" "),
d=c.length,f,h;d--;)f=c[d],h=f.replace("()",""),a[h]=b(f)})(n);return M}},{}],27:[function(D,x,Q){var k={virtEquals:D("./Helpers/virtEquals"),virtHashCode:D("./Helpers/virtHashCode"),ObjectIterator:D("./Helpers/ObjectIterator"),PConstants:D("./Helpers/PConstants"),ArrayList:D("./Objects/ArrayList"),HashMap:D("./Objects/HashMap"),PVector:D("./Objects/PVector"),PFont:D("./Objects/PFont"),Char:D("./Objects/Char"),XMLAttribute:D("./Objects/XMLAttribute"),XMLElement:D("./Objects/XMLElement"),PMatrix2D:D("./Objects/PMatrix2D"),
PMatrix3D:D("./Objects/PMatrix3D"),PShape:D("./Objects/PShape"),colors:D("./Objects/webcolors"),PShapeSVG:D("./Objects/PShapeSVG"),CommonFunctions:D("./P5Functions/commonFunctions"),defaultScope:D("./Helpers/defaultScope"),Processing:D("./Processing"),setupParser:D("./Parser/Parser"),finalize:D("./Helpers/finalizeProcessing")};k.extend={withMath:D("./P5Functions/Math.js"),withProxyFunctions:D("./P5Functions/JavaProxyFunctions")(k.virtHashCode,k.virtEquals),withTouch:D("./P5Functions/touchmouse"),
withCommonFunctions:k.CommonFunctions.withCommonFunctions};x.exports=function(h,m){var n=function(){},a=k.virtEquals,b=k.virtHashCode,d=k.PConstants,f=k.CommonFunctions,l=k.ObjectIterator,p=k.Char,r=k.XMLAttribute(),c=k.ArrayList({virtHashCode:b,virtEquals:a}),a=k.HashMap({virtHashCode:b,virtEquals:a}),b=k.PVector({PConstants:d}),x=k.PFont({Browser:h,noop:n}),r=k.XMLElement({Browser:h,XMLAttribute:r}),Q=k.PMatrix2D({p:f}),G=k.PMatrix3D({p:f}),Q=k.PShape({PConstants:d,PMatrix2D:Q,PMatrix3D:G}),f=k.PShapeSVG({CommonFunctions:f,
PConstants:d,PShape:Q,XMLElement:r,colors:k.colors}),d=k.defaultScope({ArrayList:c,HashMap:a,PVector:b,PFont:x,PShapeSVG:f,ObjectIterator:l,PConstants:d,Char:p,XMLElement:r,XML:r}),l=k.Processing({defaultScope:d,Browser:h,extend:k.extend,noop:n}),l=k.setupParser(l,{Browser:h,aFunctions:m,defaultScope:d});return l=k.finalize(l,{version:D("../package.json").version,isDomPresent:h.isDomPresent,window:h.window,document:h.document,noop:n})}},{"../package.json":2,"./Helpers/ObjectIterator":3,"./Helpers/PConstants":4,
"./Helpers/defaultScope":5,"./Helpers/finalizeProcessing":6,"./Helpers/virtEquals":7,"./Helpers/virtHashCode":8,"./Objects/ArrayList":9,"./Objects/Char":10,"./Objects/HashMap":11,"./Objects/PFont":12,"./Objects/PMatrix2D":13,"./Objects/PMatrix3D":14,"./Objects/PShape":15,"./Objects/PShapeSVG":16,"./Objects/PVector":17,"./Objects/XMLAttribute":18,"./Objects/XMLElement":19,"./Objects/webcolors":20,"./P5Functions/JavaProxyFunctions":21,"./P5Functions/Math.js":22,"./P5Functions/commonFunctions":23,"./P5Functions/touchmouse":24,
"./Parser/Parser":25,"./Processing":26}]},{},[1]);

;(function(){
var g, aa = this;
function p(a) {
  var b = typeof a;
  if ("object" == b) {
    if (a) {
      if (a instanceof Array) {
        return "array";
      }
      if (a instanceof Object) {
        return b;
      }
      var c = Object.prototype.toString.call(a);
      if ("[object Window]" == c) {
        return "object";
      }
      if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
        return "array";
      }
      if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
        return "function";
      }
    } else {
      return "null";
    }
  } else {
    if ("function" == b && "undefined" == typeof a.call) {
      return "object";
    }
  }
  return b;
}
function ba(a) {
  return "string" == typeof a;
}
function ca(a) {
  return "function" == p(a);
}
var da = "closure_uid_" + (1E9 * Math.random() >>> 0), fa = 0;
var ga = String.prototype.trim ? function(a) {
  return a.trim();
} : function(a) {
  return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
};
function ha(a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
}
;function ja(a, b) {
  for (var c in a) {
    b.call(void 0, a[c], c, a);
  }
}
function ka(a, b) {
  for (var c in a) {
    if (b.call(void 0, a[c], c, a)) {
      return !0;
    }
  }
  return !1;
}
;function la(a, b) {
  null != a && this.append.apply(this, arguments);
}
g = la.prototype;
g.Qa = "";
g.set = function(a) {
  this.Qa = "" + a;
};
g.append = function(a, b, c) {
  this.Qa += a;
  if (null != b) {
    for (var d = 1;d < arguments.length;d++) {
      this.Qa += arguments[d];
    }
  }
  return this;
};
g.clear = function() {
  this.Qa = "";
};
g.toString = function() {
  return this.Qa;
};
var ma = Array.prototype, na = ma.indexOf ? function(a, b, c) {
  return ma.indexOf.call(a, b, c);
} : function(a, b, c) {
  c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
  if (ba(a)) {
    return ba(b) && 1 == b.length ? a.indexOf(b, c) : -1;
  }
  for (;c < a.length;c++) {
    if (c in a && a[c] === b) {
      return c;
    }
  }
  return -1;
};
function ra(a, b) {
  a.sort(b || sa);
}
function ta(a, b) {
  for (var c = 0;c < a.length;c++) {
    a[c] = {index:c, value:a[c]};
  }
  var d = b || sa;
  ra(a, function(a, b) {
    return d(a.value, b.value) || a.index - b.index;
  });
  for (c = 0;c < a.length;c++) {
    a[c] = a[c].value;
  }
}
function sa(a, b) {
  return a > b ? 1 : a < b ? -1 : 0;
}
;var va;
if ("undefined" === typeof wa) {
  var wa = function() {
    throw Error("No *print-fn* fn set for evaluation environment");
  }
}
if ("undefined" === typeof ya) {
  var ya = function() {
    throw Error("No *print-err-fn* fn set for evaluation environment");
  }
}
var za = null;
if ("undefined" === typeof Aa) {
  var Aa = null
}
function Ba() {
  return new Ca(null, 5, [new q(null, "flush-on-newline", "flush-on-newline", -151457939), !0, new q(null, "readably", "readably", 1129599760), !0, new q(null, "meta", "meta", 1499536964), !1, new q(null, "dup", "dup", 556298533), !1, new q(null, "print-length", "print-length", 1931866356), null], null);
}
function u(a) {
  return null != a && !1 !== a;
}
function Ea(a) {
  return null == a;
}
function Fa(a) {
  return a instanceof Array;
}
function Ga(a) {
  return null == a ? !0 : !1 === a ? !0 : !1;
}
function w(a, b) {
  return a[p(null == b ? null : b)] ? !0 : a._ ? !0 : !1;
}
function x(a, b) {
  var c = null == b ? null : b.constructor, c = u(u(c) ? c.Nb : c) ? c.qb : p(b);
  return Error(["No protocol method ", a, " defined for type ", c, ": ", b].join(""));
}
function Ha(a) {
  var b = a.qb;
  return u(b) ? b : "" + z(a);
}
var Ia = "undefined" !== typeof Symbol && "function" === p(Symbol) ? Symbol.iterator : "@@iterator";
function Ja(a) {
  for (var b = a.length, c = Array(b), d = 0;;) {
    if (d < b) {
      c[d] = a[d], d += 1;
    } else {
      break;
    }
  }
  return c;
}
function Ka() {
}
function Ma() {
}
var Na = function Na(b) {
  if (null != b && null != b.R) {
    return b.R(b);
  }
  var c = Na[p(null == b ? null : b)];
  if (null != c) {
    return c.b ? c.b(b) : c.call(null, b);
  }
  c = Na._;
  if (null != c) {
    return c.b ? c.b(b) : c.call(null, b);
  }
  throw x("ICounted.-count", b);
}, Pa = function Pa(b) {
  if (null != b && null != b.V) {
    return b.V(b);
  }
  var c = Pa[p(null == b ? null : b)];
  if (null != c) {
    return c.b ? c.b(b) : c.call(null, b);
  }
  c = Pa._;
  if (null != c) {
    return c.b ? c.b(b) : c.call(null, b);
  }
  throw x("IEmptyableCollection.-empty", b);
}, Qa = function Qa(b, c) {
  if (null != b && null != b.O) {
    return b.O(b, c);
  }
  var d = Qa[p(null == b ? null : b)];
  if (null != d) {
    return d.a ? d.a(b, c) : d.call(null, b, c);
  }
  d = Qa._;
  if (null != d) {
    return d.a ? d.a(b, c) : d.call(null, b, c);
  }
  throw x("ICollection.-conj", b);
};
function Ra() {
}
var D = function D(b) {
  for (var c = [], d = arguments.length, e = 0;;) {
    if (e < d) {
      c.push(arguments[e]), e += 1;
    } else {
      break;
    }
  }
  switch(c.length) {
    case 2:
      return D.a(arguments[0], arguments[1]);
    case 3:
      return D.f(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([z("Invalid arity: "), z(c.length)].join(""));;
  }
};
D.a = function(a, b) {
  if (null != a && null != a.S) {
    return a.S(a, b);
  }
  var c = D[p(null == a ? null : a)];
  if (null != c) {
    return c.a ? c.a(a, b) : c.call(null, a, b);
  }
  c = D._;
  if (null != c) {
    return c.a ? c.a(a, b) : c.call(null, a, b);
  }
  throw x("IIndexed.-nth", a);
};
D.f = function(a, b, c) {
  if (null != a && null != a.ha) {
    return a.ha(a, b, c);
  }
  var d = D[p(null == a ? null : a)];
  if (null != d) {
    return d.f ? d.f(a, b, c) : d.call(null, a, b, c);
  }
  d = D._;
  if (null != d) {
    return d.f ? d.f(a, b, c) : d.call(null, a, b, c);
  }
  throw x("IIndexed.-nth", a);
};
D.D = 3;
var E = function E(b) {
  if (null != b && null != b.W) {
    return b.W(b);
  }
  var c = E[p(null == b ? null : b)];
  if (null != c) {
    return c.b ? c.b(b) : c.call(null, b);
  }
  c = E._;
  if (null != c) {
    return c.b ? c.b(b) : c.call(null, b);
  }
  throw x("ISeq.-first", b);
}, G = function G(b) {
  if (null != b && null != b.fa) {
    return b.fa(b);
  }
  var c = G[p(null == b ? null : b)];
  if (null != c) {
    return c.b ? c.b(b) : c.call(null, b);
  }
  c = G._;
  if (null != c) {
    return c.b ? c.b(b) : c.call(null, b);
  }
  throw x("ISeq.-rest", b);
};
function Sa() {
}
function Ta() {
}
var H = function H(b) {
  for (var c = [], d = arguments.length, e = 0;;) {
    if (e < d) {
      c.push(arguments[e]), e += 1;
    } else {
      break;
    }
  }
  switch(c.length) {
    case 2:
      return H.a(arguments[0], arguments[1]);
    case 3:
      return H.f(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([z("Invalid arity: "), z(c.length)].join(""));;
  }
};
H.a = function(a, b) {
  if (null != a && null != a.L) {
    return a.L(a, b);
  }
  var c = H[p(null == a ? null : a)];
  if (null != c) {
    return c.a ? c.a(a, b) : c.call(null, a, b);
  }
  c = H._;
  if (null != c) {
    return c.a ? c.a(a, b) : c.call(null, a, b);
  }
  throw x("ILookup.-lookup", a);
};
H.f = function(a, b, c) {
  if (null != a && null != a.G) {
    return a.G(a, b, c);
  }
  var d = H[p(null == a ? null : a)];
  if (null != d) {
    return d.f ? d.f(a, b, c) : d.call(null, a, b, c);
  }
  d = H._;
  if (null != d) {
    return d.f ? d.f(a, b, c) : d.call(null, a, b, c);
  }
  throw x("ILookup.-lookup", a);
};
H.D = 3;
var Ua = function Ua(b, c) {
  if (null != b && null != b.vb) {
    return b.vb(b, c);
  }
  var d = Ua[p(null == b ? null : b)];
  if (null != d) {
    return d.a ? d.a(b, c) : d.call(null, b, c);
  }
  d = Ua._;
  if (null != d) {
    return d.a ? d.a(b, c) : d.call(null, b, c);
  }
  throw x("IAssociative.-contains-key?", b);
}, Va = function Va(b, c, d) {
  if (null != b && null != b.Ra) {
    return b.Ra(b, c, d);
  }
  var e = Va[p(null == b ? null : b)];
  if (null != e) {
    return e.f ? e.f(b, c, d) : e.call(null, b, c, d);
  }
  e = Va._;
  if (null != e) {
    return e.f ? e.f(b, c, d) : e.call(null, b, c, d);
  }
  throw x("IAssociative.-assoc", b);
};
function Wa() {
}
var Ya = function Ya(b, c) {
  if (null != b && null != b.cb) {
    return b.cb(b, c);
  }
  var d = Ya[p(null == b ? null : b)];
  if (null != d) {
    return d.a ? d.a(b, c) : d.call(null, b, c);
  }
  d = Ya._;
  if (null != d) {
    return d.a ? d.a(b, c) : d.call(null, b, c);
  }
  throw x("IMap.-dissoc", b);
};
function Za() {
}
var $a = function $a(b) {
  if (null != b && null != b.zb) {
    return b.zb();
  }
  var c = $a[p(null == b ? null : b)];
  if (null != c) {
    return c.b ? c.b(b) : c.call(null, b);
  }
  c = $a._;
  if (null != c) {
    return c.b ? c.b(b) : c.call(null, b);
  }
  throw x("IMapEntry.-key", b);
}, ab = function ab(b) {
  if (null != b && null != b.Ab) {
    return b.Ab();
  }
  var c = ab[p(null == b ? null : b)];
  if (null != c) {
    return c.b ? c.b(b) : c.call(null, b);
  }
  c = ab._;
  if (null != c) {
    return c.b ? c.b(b) : c.call(null, b);
  }
  throw x("IMapEntry.-val", b);
};
function bb() {
}
var cb = function cb(b, c) {
  if (null != b && null != b.Jb) {
    return b.Jb(0, c);
  }
  var d = cb[p(null == b ? null : b)];
  if (null != d) {
    return d.a ? d.a(b, c) : d.call(null, b, c);
  }
  d = cb._;
  if (null != d) {
    return d.a ? d.a(b, c) : d.call(null, b, c);
  }
  throw x("ISet.-disjoin", b);
};
function db() {
}
var eb = function eb(b, c, d) {
  if (null != b && null != b.Bb) {
    return b.Bb(b, c, d);
  }
  var e = eb[p(null == b ? null : b)];
  if (null != e) {
    return e.f ? e.f(b, c, d) : e.call(null, b, c, d);
  }
  e = eb._;
  if (null != e) {
    return e.f ? e.f(b, c, d) : e.call(null, b, c, d);
  }
  throw x("IVector.-assoc-n", b);
}, gb = function gb(b) {
  if (null != b && null != b.Vb) {
    return b.state;
  }
  var c = gb[p(null == b ? null : b)];
  if (null != c) {
    return c.b ? c.b(b) : c.call(null, b);
  }
  c = gb._;
  if (null != c) {
    return c.b ? c.b(b) : c.call(null, b);
  }
  throw x("IDeref.-deref", b);
};
function hb() {
}
var ib = function ib(b) {
  if (null != b && null != b.M) {
    return b.M(b);
  }
  var c = ib[p(null == b ? null : b)];
  if (null != c) {
    return c.b ? c.b(b) : c.call(null, b);
  }
  c = ib._;
  if (null != c) {
    return c.b ? c.b(b) : c.call(null, b);
  }
  throw x("IMeta.-meta", b);
}, jb = function jb(b, c) {
  if (null != b && null != b.N) {
    return b.N(b, c);
  }
  var d = jb[p(null == b ? null : b)];
  if (null != d) {
    return d.a ? d.a(b, c) : d.call(null, b, c);
  }
  d = jb._;
  if (null != d) {
    return d.a ? d.a(b, c) : d.call(null, b, c);
  }
  throw x("IWithMeta.-with-meta", b);
};
function kb() {
}
var lb = function lb(b) {
  for (var c = [], d = arguments.length, e = 0;;) {
    if (e < d) {
      c.push(arguments[e]), e += 1;
    } else {
      break;
    }
  }
  switch(c.length) {
    case 2:
      return lb.a(arguments[0], arguments[1]);
    case 3:
      return lb.f(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([z("Invalid arity: "), z(c.length)].join(""));;
  }
};
lb.a = function(a, b) {
  if (null != a && null != a.Y) {
    return a.Y(a, b);
  }
  var c = lb[p(null == a ? null : a)];
  if (null != c) {
    return c.a ? c.a(a, b) : c.call(null, a, b);
  }
  c = lb._;
  if (null != c) {
    return c.a ? c.a(a, b) : c.call(null, a, b);
  }
  throw x("IReduce.-reduce", a);
};
lb.f = function(a, b, c) {
  if (null != a && null != a.Z) {
    return a.Z(a, b, c);
  }
  var d = lb[p(null == a ? null : a)];
  if (null != d) {
    return d.f ? d.f(a, b, c) : d.call(null, a, b, c);
  }
  d = lb._;
  if (null != d) {
    return d.f ? d.f(a, b, c) : d.call(null, a, b, c);
  }
  throw x("IReduce.-reduce", a);
};
lb.D = 3;
var mb = function mb(b, c) {
  if (null != b && null != b.s) {
    return b.s(b, c);
  }
  var d = mb[p(null == b ? null : b)];
  if (null != d) {
    return d.a ? d.a(b, c) : d.call(null, b, c);
  }
  d = mb._;
  if (null != d) {
    return d.a ? d.a(b, c) : d.call(null, b, c);
  }
  throw x("IEquiv.-equiv", b);
}, nb = function nb(b) {
  if (null != b && null != b.J) {
    return b.J(b);
  }
  var c = nb[p(null == b ? null : b)];
  if (null != c) {
    return c.b ? c.b(b) : c.call(null, b);
  }
  c = nb._;
  if (null != c) {
    return c.b ? c.b(b) : c.call(null, b);
  }
  throw x("IHash.-hash", b);
};
function ob() {
}
var qb = function qb(b) {
  if (null != b && null != b.P) {
    return b.P(b);
  }
  var c = qb[p(null == b ? null : b)];
  if (null != c) {
    return c.b ? c.b(b) : c.call(null, b);
  }
  c = qb._;
  if (null != c) {
    return c.b ? c.b(b) : c.call(null, b);
  }
  throw x("ISeqable.-seq", b);
};
function rb() {
}
function sb() {
}
function tb() {
}
var ub = function ub(b) {
  if (null != b && null != b.pb) {
    return b.pb(b);
  }
  var c = ub[p(null == b ? null : b)];
  if (null != c) {
    return c.b ? c.b(b) : c.call(null, b);
  }
  c = ub._;
  if (null != c) {
    return c.b ? c.b(b) : c.call(null, b);
  }
  throw x("IReversible.-rseq", b);
}, I = function I(b, c) {
  if (null != b && null != b.Mb) {
    return b.Mb(0, c);
  }
  var d = I[p(null == b ? null : b)];
  if (null != d) {
    return d.a ? d.a(b, c) : d.call(null, b, c);
  }
  d = I._;
  if (null != d) {
    return d.a ? d.a(b, c) : d.call(null, b, c);
  }
  throw x("IWriter.-write", b);
}, vb = function vb(b, c, d) {
  if (null != b && null != b.H) {
    return b.H(b, c, d);
  }
  var e = vb[p(null == b ? null : b)];
  if (null != e) {
    return e.f ? e.f(b, c, d) : e.call(null, b, c, d);
  }
  e = vb._;
  if (null != e) {
    return e.f ? e.f(b, c, d) : e.call(null, b, c, d);
  }
  throw x("IPrintWithWriter.-pr-writer", b);
}, wb = function wb(b, c, d) {
  if (null != b && null != b.Lb) {
    return b.Lb(0, c, d);
  }
  var e = wb[p(null == b ? null : b)];
  if (null != e) {
    return e.f ? e.f(b, c, d) : e.call(null, b, c, d);
  }
  e = wb._;
  if (null != e) {
    return e.f ? e.f(b, c, d) : e.call(null, b, c, d);
  }
  throw x("IWatchable.-notify-watches", b);
}, xb = function xb(b) {
  if (null != b && null != b.Xa) {
    return b.Xa(b);
  }
  var c = xb[p(null == b ? null : b)];
  if (null != c) {
    return c.b ? c.b(b) : c.call(null, b);
  }
  c = xb._;
  if (null != c) {
    return c.b ? c.b(b) : c.call(null, b);
  }
  throw x("IEditableCollection.-as-transient", b);
}, yb = function yb(b, c) {
  if (null != b && null != b.Sa) {
    return b.Sa(b, c);
  }
  var d = yb[p(null == b ? null : b)];
  if (null != d) {
    return d.a ? d.a(b, c) : d.call(null, b, c);
  }
  d = yb._;
  if (null != d) {
    return d.a ? d.a(b, c) : d.call(null, b, c);
  }
  throw x("ITransientCollection.-conj!", b);
}, zb = function zb(b) {
  if (null != b && null != b.Za) {
    return b.Za(b);
  }
  var c = zb[p(null == b ? null : b)];
  if (null != c) {
    return c.b ? c.b(b) : c.call(null, b);
  }
  c = zb._;
  if (null != c) {
    return c.b ? c.b(b) : c.call(null, b);
  }
  throw x("ITransientCollection.-persistent!", b);
}, Ab = function Ab(b, c, d) {
  if (null != b && null != b.eb) {
    return b.eb(b, c, d);
  }
  var e = Ab[p(null == b ? null : b)];
  if (null != e) {
    return e.f ? e.f(b, c, d) : e.call(null, b, c, d);
  }
  e = Ab._;
  if (null != e) {
    return e.f ? e.f(b, c, d) : e.call(null, b, c, d);
  }
  throw x("ITransientAssociative.-assoc!", b);
}, Bb = function Bb(b, c, d) {
  if (null != b && null != b.Kb) {
    return b.Kb(0, c, d);
  }
  var e = Bb[p(null == b ? null : b)];
  if (null != e) {
    return e.f ? e.f(b, c, d) : e.call(null, b, c, d);
  }
  e = Bb._;
  if (null != e) {
    return e.f ? e.f(b, c, d) : e.call(null, b, c, d);
  }
  throw x("ITransientVector.-assoc-n!", b);
};
function Db() {
}
var Eb = function Eb(b, c) {
  if (null != b && null != b.Wa) {
    return b.Wa(b, c);
  }
  var d = Eb[p(null == b ? null : b)];
  if (null != d) {
    return d.a ? d.a(b, c) : d.call(null, b, c);
  }
  d = Eb._;
  if (null != d) {
    return d.a ? d.a(b, c) : d.call(null, b, c);
  }
  throw x("IComparable.-compare", b);
}, Fb = function Fb(b) {
  if (null != b && null != b.Hb) {
    return b.Hb();
  }
  var c = Fb[p(null == b ? null : b)];
  if (null != c) {
    return c.b ? c.b(b) : c.call(null, b);
  }
  c = Fb._;
  if (null != c) {
    return c.b ? c.b(b) : c.call(null, b);
  }
  throw x("IChunk.-drop-first", b);
}, Gb = function Gb(b) {
  if (null != b && null != b.xb) {
    return b.xb(b);
  }
  var c = Gb[p(null == b ? null : b)];
  if (null != c) {
    return c.b ? c.b(b) : c.call(null, b);
  }
  c = Gb._;
  if (null != c) {
    return c.b ? c.b(b) : c.call(null, b);
  }
  throw x("IChunkedSeq.-chunked-first", b);
}, Hb = function Hb(b) {
  if (null != b && null != b.yb) {
    return b.yb(b);
  }
  var c = Hb[p(null == b ? null : b)];
  if (null != c) {
    return c.b ? c.b(b) : c.call(null, b);
  }
  c = Hb._;
  if (null != c) {
    return c.b ? c.b(b) : c.call(null, b);
  }
  throw x("IChunkedSeq.-chunked-rest", b);
}, Ib = function Ib(b) {
  if (null != b && null != b.wb) {
    return b.wb(b);
  }
  var c = Ib[p(null == b ? null : b)];
  if (null != c) {
    return c.b ? c.b(b) : c.call(null, b);
  }
  c = Ib._;
  if (null != c) {
    return c.b ? c.b(b) : c.call(null, b);
  }
  throw x("IChunkedNext.-chunked-next", b);
}, Lb = function Lb(b, c) {
  if (null != b && null != b.cc) {
    return b.cc(b, c);
  }
  var d = Lb[p(null == b ? null : b)];
  if (null != d) {
    return d.a ? d.a(b, c) : d.call(null, b, c);
  }
  d = Lb._;
  if (null != d) {
    return d.a ? d.a(b, c) : d.call(null, b, c);
  }
  throw x("IReset.-reset!", b);
}, Mb = function Mb(b) {
  for (var c = [], d = arguments.length, e = 0;;) {
    if (e < d) {
      c.push(arguments[e]), e += 1;
    } else {
      break;
    }
  }
  switch(c.length) {
    case 2:
      return Mb.a(arguments[0], arguments[1]);
    case 3:
      return Mb.f(arguments[0], arguments[1], arguments[2]);
    case 4:
      return Mb.C(arguments[0], arguments[1], arguments[2], arguments[3]);
    case 5:
      return Mb.K(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    default:
      throw Error([z("Invalid arity: "), z(c.length)].join(""));;
  }
};
Mb.a = function(a, b) {
  if (null != a && null != a.ec) {
    return a.ec(a, b);
  }
  var c = Mb[p(null == a ? null : a)];
  if (null != c) {
    return c.a ? c.a(a, b) : c.call(null, a, b);
  }
  c = Mb._;
  if (null != c) {
    return c.a ? c.a(a, b) : c.call(null, a, b);
  }
  throw x("ISwap.-swap!", a);
};
Mb.f = function(a, b, c) {
  if (null != a && null != a.fc) {
    return a.fc(a, b, c);
  }
  var d = Mb[p(null == a ? null : a)];
  if (null != d) {
    return d.f ? d.f(a, b, c) : d.call(null, a, b, c);
  }
  d = Mb._;
  if (null != d) {
    return d.f ? d.f(a, b, c) : d.call(null, a, b, c);
  }
  throw x("ISwap.-swap!", a);
};
Mb.C = function(a, b, c, d) {
  if (null != a && null != a.gc) {
    return a.gc(a, b, c, d);
  }
  var e = Mb[p(null == a ? null : a)];
  if (null != e) {
    return e.C ? e.C(a, b, c, d) : e.call(null, a, b, c, d);
  }
  e = Mb._;
  if (null != e) {
    return e.C ? e.C(a, b, c, d) : e.call(null, a, b, c, d);
  }
  throw x("ISwap.-swap!", a);
};
Mb.K = function(a, b, c, d, e) {
  if (null != a && null != a.hc) {
    return a.hc(a, b, c, d, e);
  }
  var f = Mb[p(null == a ? null : a)];
  if (null != f) {
    return f.K ? f.K(a, b, c, d, e) : f.call(null, a, b, c, d, e);
  }
  f = Mb._;
  if (null != f) {
    return f.K ? f.K(a, b, c, d, e) : f.call(null, a, b, c, d, e);
  }
  throw x("ISwap.-swap!", a);
};
Mb.D = 5;
var Nb = function Nb(b) {
  if (null != b && null != b.ma) {
    return b.ma(b);
  }
  var c = Nb[p(null == b ? null : b)];
  if (null != c) {
    return c.b ? c.b(b) : c.call(null, b);
  }
  c = Nb._;
  if (null != c) {
    return c.b ? c.b(b) : c.call(null, b);
  }
  throw x("IIterable.-iterator", b);
};
function Ob(a) {
  this.nc = a;
  this.j = 1073741824;
  this.v = 0;
}
Ob.prototype.Mb = function(a, b) {
  return this.nc.append(b);
};
function Pb(a) {
  var b = new la;
  a.H(null, new Ob(b), Ba());
  return "" + z(b);
}
var Qb = "undefined" !== typeof Math.imul && 0 !== Math.imul(4294967295, 5) ? function(a, b) {
  return Math.imul(a, b);
} : function(a, b) {
  var c = a & 65535, d = b & 65535;
  return c * d + ((a >>> 16 & 65535) * d + c * (b >>> 16 & 65535) << 16 >>> 0) | 0;
};
function Rb(a) {
  a = Qb(a | 0, -862048943);
  return Qb(a << 15 | a >>> -15, 461845907);
}
function Sb(a, b) {
  var c = (a | 0) ^ (b | 0);
  return Qb(c << 13 | c >>> -13, 5) + -430675100 | 0;
}
function Tb(a, b) {
  var c = (a | 0) ^ b, c = Qb(c ^ c >>> 16, -2048144789), c = Qb(c ^ c >>> 13, -1028477387);
  return c ^ c >>> 16;
}
function Ub(a) {
  var b;
  a: {
    b = 1;
    for (var c = 0;;) {
      if (b < a.length) {
        var d = b + 2, c = Sb(c, Rb(a.charCodeAt(b - 1) | a.charCodeAt(b) << 16));
        b = d;
      } else {
        b = c;
        break a;
      }
    }
  }
  b = 1 === (a.length & 1) ? b ^ Rb(a.charCodeAt(a.length - 1)) : b;
  return Tb(b, Qb(2, a.length));
}
var Vb = {}, Wb = 0;
function Xb(a) {
  255 < Wb && (Vb = {}, Wb = 0);
  var b = Vb[a];
  if ("number" !== typeof b) {
    a: {
      if (null != a) {
        if (b = a.length, 0 < b) {
          for (var c = 0, d = 0;;) {
            if (c < b) {
              var e = c + 1, d = Qb(31, d) + a.charCodeAt(c), c = e
            } else {
              b = d;
              break a;
            }
          }
        } else {
          b = 0;
        }
      } else {
        b = 0;
      }
    }
    Vb[a] = b;
    Wb += 1;
  }
  return a = b;
}
function Yb(a) {
  null != a && (a.j & 4194304 || a.rc) ? a = a.J(null) : "number" === typeof a ? a = Math.floor(a) % 2147483647 : !0 === a ? a = 1 : !1 === a ? a = 0 : "string" === typeof a ? (a = Xb(a), 0 !== a && (a = Rb(a), a = Sb(0, a), a = Tb(a, 4))) : a = a instanceof Date ? a.valueOf() : null == a ? 0 : nb(a);
  return a;
}
function Zb(a, b) {
  return a ^ b + 2654435769 + (a << 6) + (a >> 2);
}
function $b(a, b) {
  if (a.ta === b.ta) {
    return 0;
  }
  var c = Ga(a.da);
  if (u(c ? b.da : c)) {
    return -1;
  }
  if (u(a.da)) {
    if (Ga(b.da)) {
      return 1;
    }
    c = sa(a.da, b.da);
    return 0 === c ? sa(a.name, b.name) : c;
  }
  return sa(a.name, b.name);
}
function ac(a, b, c, d, e) {
  this.da = a;
  this.name = b;
  this.ta = c;
  this.Va = d;
  this.ea = e;
  this.j = 2154168321;
  this.v = 4096;
}
g = ac.prototype;
g.toString = function() {
  return this.ta;
};
g.equiv = function(a) {
  return this.s(null, a);
};
g.s = function(a, b) {
  return b instanceof ac ? this.ta === b.ta : !1;
};
g.call = function() {
  function a(a, b, c) {
    return bc ? bc(b, this, c) : cc.call(null, b, this, c);
  }
  function b(a, b) {
    return J ? J(b, this) : cc.call(null, b, this);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, 0, e);
      case 3:
        return a.call(this, 0, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.f = a;
  return c;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Ja(b)));
};
g.b = function(a) {
  return J ? J(a, this) : cc.call(null, a, this);
};
g.a = function(a, b) {
  return bc ? bc(a, this, b) : cc.call(null, a, this, b);
};
g.M = function() {
  return this.ea;
};
g.N = function(a, b) {
  return new ac(this.da, this.name, this.ta, this.Va, b);
};
g.J = function() {
  var a = this.Va;
  return null != a ? a : this.Va = a = Zb(Ub(this.name), Xb(this.da));
};
g.H = function(a, b) {
  return I(b, this.ta);
};
function K(a) {
  if (null == a) {
    return null;
  }
  if (null != a && (a.j & 8388608 || a.dc)) {
    return a.P(null);
  }
  if (Fa(a) || "string" === typeof a) {
    return 0 === a.length ? null : new L(a, 0);
  }
  if (w(ob, a)) {
    return qb(a);
  }
  throw Error([z(a), z(" is not ISeqable")].join(""));
}
function M(a) {
  if (null == a) {
    return null;
  }
  if (null != a && (a.j & 64 || a.Ya)) {
    return a.W(null);
  }
  a = K(a);
  return null == a ? null : E(a);
}
function dc(a) {
  return null != a ? null != a && (a.j & 64 || a.Ya) ? a.fa(null) : (a = K(a)) ? G(a) : O : O;
}
function P(a) {
  return null == a ? null : null != a && (a.j & 128 || a.ob) ? a.ba(null) : K(dc(a));
}
var ec = function ec(b) {
  for (var c = [], d = arguments.length, e = 0;;) {
    if (e < d) {
      c.push(arguments[e]), e += 1;
    } else {
      break;
    }
  }
  switch(c.length) {
    case 1:
      return ec.b(arguments[0]);
    case 2:
      return ec.a(arguments[0], arguments[1]);
    default:
      return ec.o(arguments[0], arguments[1], new L(c.slice(2), 0));
  }
};
ec.b = function() {
  return !0;
};
ec.a = function(a, b) {
  return null == a ? null == b : a === b || mb(a, b);
};
ec.o = function(a, b, c) {
  for (;;) {
    if (ec.a(a, b)) {
      if (P(c)) {
        a = b, b = M(c), c = P(c);
      } else {
        return ec.a(b, M(c));
      }
    } else {
      return !1;
    }
  }
};
ec.A = function(a) {
  var b = M(a), c = P(a);
  a = M(c);
  c = P(c);
  return ec.o(b, a, c);
};
ec.D = 2;
function gc(a) {
  this.w = a;
}
gc.prototype.next = function() {
  if (null != this.w) {
    var a = M(this.w);
    this.w = P(this.w);
    return {value:a, done:!1};
  }
  return {value:null, done:!0};
};
function Q(a) {
  return new gc(K(a));
}
function hc(a, b) {
  var c = Rb(a), c = Sb(0, c);
  return Tb(c, b);
}
function ic(a) {
  var b = 0, c = 1;
  for (a = K(a);;) {
    if (null != a) {
      b += 1, c = Qb(31, c) + Yb(M(a)) | 0, a = P(a);
    } else {
      return hc(c, b);
    }
  }
}
var jc = hc(1, 0);
function kc(a) {
  var b = 0, c = 0;
  for (a = K(a);;) {
    if (null != a) {
      b += 1, c = c + Yb(M(a)) | 0, a = P(a);
    } else {
      return hc(c, b);
    }
  }
}
var lc = hc(0, 0);
Ma["null"] = !0;
Na["null"] = function() {
  return 0;
};
Date.prototype.s = function(a, b) {
  return b instanceof Date && this.valueOf() === b.valueOf();
};
Date.prototype.bb = !0;
Date.prototype.Wa = function(a, b) {
  if (b instanceof Date) {
    return sa(this.valueOf(), b.valueOf());
  }
  throw Error([z("Cannot compare "), z(this), z(" to "), z(b)].join(""));
};
mb.number = function(a, b) {
  return a === b;
};
Ka["function"] = !0;
hb["function"] = !0;
ib["function"] = function() {
  return null;
};
nb._ = function(a) {
  return a[da] || (a[da] = ++fa);
};
function mc(a) {
  return gb(a);
}
function nc(a, b) {
  var c = Na(a);
  if (0 === c) {
    return b.u ? b.u() : b.call(null);
  }
  for (var d = D.a(a, 0), e = 1;;) {
    if (e < c) {
      var f = D.a(a, e), d = b.a ? b.a(d, f) : b.call(null, d, f), e = e + 1
    } else {
      return d;
    }
  }
}
function oc(a, b, c) {
  var d = Na(a), e = c;
  for (c = 0;;) {
    if (c < d) {
      var f = D.a(a, c), e = b.a ? b.a(e, f) : b.call(null, e, f);
      c += 1;
    } else {
      return e;
    }
  }
}
function pc(a, b) {
  var c = a.length;
  if (0 === a.length) {
    return b.u ? b.u() : b.call(null);
  }
  for (var d = a[0], e = 1;;) {
    if (e < c) {
      var f = a[e], d = b.a ? b.a(d, f) : b.call(null, d, f), e = e + 1
    } else {
      return d;
    }
  }
}
function qc(a, b, c) {
  var d = a.length, e = c;
  for (c = 0;;) {
    if (c < d) {
      var f = a[c], e = b.a ? b.a(e, f) : b.call(null, e, f);
      c += 1;
    } else {
      return e;
    }
  }
}
function rc(a, b, c, d) {
  for (var e = a.length;;) {
    if (d < e) {
      var f = a[d];
      c = b.a ? b.a(c, f) : b.call(null, c, f);
      d += 1;
    } else {
      return c;
    }
  }
}
function sc(a) {
  return null != a ? a.j & 2 || a.Ub ? !0 : a.j ? !1 : w(Ma, a) : w(Ma, a);
}
function tc(a) {
  return null != a ? a.j & 16 || a.Ib ? !0 : a.j ? !1 : w(Ra, a) : w(Ra, a);
}
function uc(a, b) {
  this.c = a;
  this.h = b;
}
uc.prototype.$ = function() {
  return this.h < this.c.length;
};
uc.prototype.next = function() {
  var a = this.c[this.h];
  this.h += 1;
  return a;
};
function L(a, b) {
  this.c = a;
  this.h = b;
  this.j = 166199550;
  this.v = 8192;
}
g = L.prototype;
g.toString = function() {
  return Pb(this);
};
g.equiv = function(a) {
  return this.s(null, a);
};
g.S = function(a, b) {
  var c = b + this.h;
  return c < this.c.length ? this.c[c] : null;
};
g.ha = function(a, b, c) {
  a = b + this.h;
  return a < this.c.length ? this.c[a] : c;
};
g.ma = function() {
  return new uc(this.c, this.h);
};
g.ba = function() {
  return this.h + 1 < this.c.length ? new L(this.c, this.h + 1) : null;
};
g.R = function() {
  var a = this.c.length - this.h;
  return 0 > a ? 0 : a;
};
g.pb = function() {
  var a = Na(this);
  return 0 < a ? new wc(this, a - 1, null) : null;
};
g.J = function() {
  return ic(this);
};
g.s = function(a, b) {
  return xc.a ? xc.a(this, b) : xc.call(null, this, b);
};
g.V = function() {
  return O;
};
g.Y = function(a, b) {
  return rc(this.c, b, this.c[this.h], this.h + 1);
};
g.Z = function(a, b, c) {
  return rc(this.c, b, c, this.h);
};
g.W = function() {
  return this.c[this.h];
};
g.fa = function() {
  return this.h + 1 < this.c.length ? new L(this.c, this.h + 1) : O;
};
g.P = function() {
  return this.h < this.c.length ? this : null;
};
g.O = function(a, b) {
  return R.a ? R.a(b, this) : R.call(null, b, this);
};
L.prototype[Ia] = function() {
  return Q(this);
};
function yc(a, b) {
  return b < a.length ? new L(a, b) : null;
}
function zc(a) {
  for (var b = [], c = arguments.length, d = 0;;) {
    if (d < c) {
      b.push(arguments[d]), d += 1;
    } else {
      break;
    }
  }
  switch(b.length) {
    case 1:
      return yc(arguments[0], 0);
    case 2:
      return yc(arguments[0], arguments[1]);
    default:
      throw Error([z("Invalid arity: "), z(b.length)].join(""));;
  }
}
function wc(a, b, c) {
  this.mb = a;
  this.h = b;
  this.l = c;
  this.j = 32374990;
  this.v = 8192;
}
g = wc.prototype;
g.toString = function() {
  return Pb(this);
};
g.equiv = function(a) {
  return this.s(null, a);
};
g.M = function() {
  return this.l;
};
g.ba = function() {
  return 0 < this.h ? new wc(this.mb, this.h - 1, null) : null;
};
g.R = function() {
  return this.h + 1;
};
g.J = function() {
  return ic(this);
};
g.s = function(a, b) {
  return xc.a ? xc.a(this, b) : xc.call(null, this, b);
};
g.V = function() {
  var a = this.l;
  return Ac.a ? Ac.a(O, a) : Ac.call(null, O, a);
};
g.Y = function(a, b) {
  return Bc ? Bc(b, this) : Cc.call(null, b, this);
};
g.Z = function(a, b, c) {
  return Dc ? Dc(b, c, this) : Cc.call(null, b, c, this);
};
g.W = function() {
  return D.a(this.mb, this.h);
};
g.fa = function() {
  return 0 < this.h ? new wc(this.mb, this.h - 1, null) : O;
};
g.P = function() {
  return this;
};
g.N = function(a, b) {
  return new wc(this.mb, this.h, b);
};
g.O = function(a, b) {
  return R.a ? R.a(b, this) : R.call(null, b, this);
};
wc.prototype[Ia] = function() {
  return Q(this);
};
mb._ = function(a, b) {
  return a === b;
};
var Ec = function Ec(b) {
  for (var c = [], d = arguments.length, e = 0;;) {
    if (e < d) {
      c.push(arguments[e]), e += 1;
    } else {
      break;
    }
  }
  switch(c.length) {
    case 0:
      return Ec.u();
    case 1:
      return Ec.b(arguments[0]);
    case 2:
      return Ec.a(arguments[0], arguments[1]);
    default:
      return Ec.o(arguments[0], arguments[1], new L(c.slice(2), 0));
  }
};
Ec.u = function() {
  return Fc;
};
Ec.b = function(a) {
  return a;
};
Ec.a = function(a, b) {
  return null != a ? Qa(a, b) : Qa(O, b);
};
Ec.o = function(a, b, c) {
  for (;;) {
    if (u(c)) {
      a = Ec.a(a, b), b = M(c), c = P(c);
    } else {
      return Ec.a(a, b);
    }
  }
};
Ec.A = function(a) {
  var b = M(a), c = P(a);
  a = M(c);
  c = P(c);
  return Ec.o(b, a, c);
};
Ec.D = 2;
function S(a) {
  if (null != a) {
    if (null != a && (a.j & 2 || a.Ub)) {
      a = a.R(null);
    } else {
      if (Fa(a)) {
        a = a.length;
      } else {
        if ("string" === typeof a) {
          a = a.length;
        } else {
          if (null != a && (a.j & 8388608 || a.dc)) {
            a: {
              a = K(a);
              for (var b = 0;;) {
                if (sc(a)) {
                  a = b + Na(a);
                  break a;
                }
                a = P(a);
                b += 1;
              }
            }
          } else {
            a = Na(a);
          }
        }
      }
    }
  } else {
    a = 0;
  }
  return a;
}
function Gc(a, b) {
  for (var c = null;;) {
    if (null == a) {
      return c;
    }
    if (0 === b) {
      return K(a) ? M(a) : c;
    }
    if (tc(a)) {
      return D.f(a, b, c);
    }
    if (K(a)) {
      var d = P(a), e = b - 1;
      a = d;
      b = e;
    } else {
      return c;
    }
  }
}
function Hc(a, b) {
  if ("number" !== typeof b) {
    throw Error("index argument to nth must be a number");
  }
  if (null == a) {
    return a;
  }
  if (null != a && (a.j & 16 || a.Ib)) {
    return a.S(null, b);
  }
  if (Fa(a)) {
    return b < a.length ? a[b] : null;
  }
  if ("string" === typeof a) {
    return b < a.length ? a.charAt(b) : null;
  }
  if (null != a && (a.j & 64 || a.Ya)) {
    var c;
    a: {
      c = a;
      for (var d = b;;) {
        if (null == c) {
          throw Error("Index out of bounds");
        }
        if (0 === d) {
          if (K(c)) {
            c = M(c);
            break a;
          }
          throw Error("Index out of bounds");
        }
        if (tc(c)) {
          c = D.a(c, d);
          break a;
        }
        if (K(c)) {
          c = P(c), --d;
        } else {
          throw Error("Index out of bounds");
        }
      }
    }
    return c;
  }
  if (w(Ra, a)) {
    return D.a(a, b);
  }
  throw Error([z("nth not supported on this type "), z(Ha(null == a ? null : a.constructor))].join(""));
}
function U(a, b) {
  if ("number" !== typeof b) {
    throw Error("index argument to nth must be a number.");
  }
  if (null == a) {
    return null;
  }
  if (null != a && (a.j & 16 || a.Ib)) {
    return a.ha(null, b, null);
  }
  if (Fa(a)) {
    return b < a.length ? a[b] : null;
  }
  if ("string" === typeof a) {
    return b < a.length ? a.charAt(b) : null;
  }
  if (null != a && (a.j & 64 || a.Ya)) {
    return Gc(a, b);
  }
  if (w(Ra, a)) {
    return D.a(a, b);
  }
  throw Error([z("nth not supported on this type "), z(Ha(null == a ? null : a.constructor))].join(""));
}
function cc(a) {
  for (var b = [], c = arguments.length, d = 0;;) {
    if (d < c) {
      b.push(arguments[d]), d += 1;
    } else {
      break;
    }
  }
  switch(b.length) {
    case 2:
      return J(arguments[0], arguments[1]);
    case 3:
      return bc(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([z("Invalid arity: "), z(b.length)].join(""));;
  }
}
function J(a, b) {
  return null == a ? null : null != a && (a.j & 256 || a.Xb) ? a.L(null, b) : Fa(a) ? b < a.length ? a[b | 0] : null : "string" === typeof a ? b < a.length ? a[b | 0] : null : w(Ta, a) ? H.a(a, b) : null;
}
function bc(a, b, c) {
  return null != a ? null != a && (a.j & 256 || a.Xb) ? a.G(null, b, c) : Fa(a) ? b < a.length ? a[b] : c : "string" === typeof a ? b < a.length ? a[b] : c : w(Ta, a) ? H.f(a, b, c) : c : c;
}
var V = function V(b) {
  for (var c = [], d = arguments.length, e = 0;;) {
    if (e < d) {
      c.push(arguments[e]), e += 1;
    } else {
      break;
    }
  }
  switch(c.length) {
    case 3:
      return V.f(arguments[0], arguments[1], arguments[2]);
    default:
      return V.o(arguments[0], arguments[1], arguments[2], new L(c.slice(3), 0));
  }
};
V.f = function(a, b, c) {
  return null != a ? Va(a, b, c) : Ic([b], [c]);
};
V.o = function(a, b, c, d) {
  for (;;) {
    if (a = V.f(a, b, c), u(d)) {
      b = M(d), c = M(P(d)), d = P(P(d));
    } else {
      return a;
    }
  }
};
V.A = function(a) {
  var b = M(a), c = P(a);
  a = M(c);
  var d = P(c), c = M(d), d = P(d);
  return V.o(b, a, c, d);
};
V.D = 3;
var Jc = function Jc(b) {
  for (var c = [], d = arguments.length, e = 0;;) {
    if (e < d) {
      c.push(arguments[e]), e += 1;
    } else {
      break;
    }
  }
  switch(c.length) {
    case 1:
      return Jc.b(arguments[0]);
    case 2:
      return Jc.a(arguments[0], arguments[1]);
    default:
      return Jc.o(arguments[0], arguments[1], new L(c.slice(2), 0));
  }
};
Jc.b = function(a) {
  return a;
};
Jc.a = function(a, b) {
  return null == a ? null : Ya(a, b);
};
Jc.o = function(a, b, c) {
  for (;;) {
    if (null == a) {
      return null;
    }
    a = Jc.a(a, b);
    if (u(c)) {
      b = M(c), c = P(c);
    } else {
      return a;
    }
  }
};
Jc.A = function(a) {
  var b = M(a), c = P(a);
  a = M(c);
  c = P(c);
  return Jc.o(b, a, c);
};
Jc.D = 2;
function Kc(a) {
  var b = ca(a);
  return b ? b : null != a ? a.Tb ? !0 : a.xc ? !1 : w(Ka, a) : w(Ka, a);
}
function Lc(a, b) {
  this.g = a;
  this.l = b;
  this.j = 393217;
  this.v = 0;
}
g = Lc.prototype;
g.M = function() {
  return this.l;
};
g.N = function(a, b) {
  return new Lc(this.g, b);
};
g.Tb = !0;
g.call = function() {
  function a(a, b, c, d, e, f, h, k, l, m, n, r, v, t, y, A, C, F, N, B, T, qa) {
    a = this;
    return Mc.nb ? Mc.nb(a.g, b, c, d, e, f, h, k, l, m, n, r, v, t, y, A, C, F, N, B, T, qa) : Mc.call(null, a.g, b, c, d, e, f, h, k, l, m, n, r, v, t, y, A, C, F, N, B, T, qa);
  }
  function b(a, b, c, d, e, f, h, k, l, m, n, r, v, t, y, A, C, F, N, B, T) {
    a = this;
    return a.g.Ga ? a.g.Ga(b, c, d, e, f, h, k, l, m, n, r, v, t, y, A, C, F, N, B, T) : a.g.call(null, b, c, d, e, f, h, k, l, m, n, r, v, t, y, A, C, F, N, B, T);
  }
  function c(a, b, c, d, e, f, h, k, l, m, n, r, v, t, y, A, C, F, N, B) {
    a = this;
    return a.g.Fa ? a.g.Fa(b, c, d, e, f, h, k, l, m, n, r, v, t, y, A, C, F, N, B) : a.g.call(null, b, c, d, e, f, h, k, l, m, n, r, v, t, y, A, C, F, N, B);
  }
  function d(a, b, c, d, e, f, h, k, l, m, n, r, v, t, y, A, C, F, N) {
    a = this;
    return a.g.Ea ? a.g.Ea(b, c, d, e, f, h, k, l, m, n, r, v, t, y, A, C, F, N) : a.g.call(null, b, c, d, e, f, h, k, l, m, n, r, v, t, y, A, C, F, N);
  }
  function e(a, b, c, d, e, f, h, k, l, m, n, r, v, t, y, A, C, F) {
    a = this;
    return a.g.Da ? a.g.Da(b, c, d, e, f, h, k, l, m, n, r, v, t, y, A, C, F) : a.g.call(null, b, c, d, e, f, h, k, l, m, n, r, v, t, y, A, C, F);
  }
  function f(a, b, c, d, e, f, h, k, l, m, n, r, v, t, y, A, C) {
    a = this;
    return a.g.Ca ? a.g.Ca(b, c, d, e, f, h, k, l, m, n, r, v, t, y, A, C) : a.g.call(null, b, c, d, e, f, h, k, l, m, n, r, v, t, y, A, C);
  }
  function h(a, b, c, d, e, f, h, k, l, m, n, r, v, t, y, A) {
    a = this;
    return a.g.Ba ? a.g.Ba(b, c, d, e, f, h, k, l, m, n, r, v, t, y, A) : a.g.call(null, b, c, d, e, f, h, k, l, m, n, r, v, t, y, A);
  }
  function k(a, b, c, d, e, f, h, k, l, m, n, r, v, t, y) {
    a = this;
    return a.g.Aa ? a.g.Aa(b, c, d, e, f, h, k, l, m, n, r, v, t, y) : a.g.call(null, b, c, d, e, f, h, k, l, m, n, r, v, t, y);
  }
  function l(a, b, c, d, e, f, h, k, l, m, n, r, v, t) {
    a = this;
    return a.g.za ? a.g.za(b, c, d, e, f, h, k, l, m, n, r, v, t) : a.g.call(null, b, c, d, e, f, h, k, l, m, n, r, v, t);
  }
  function m(a, b, c, d, e, f, h, k, l, m, n, r, v) {
    a = this;
    return a.g.ya ? a.g.ya(b, c, d, e, f, h, k, l, m, n, r, v) : a.g.call(null, b, c, d, e, f, h, k, l, m, n, r, v);
  }
  function n(a, b, c, d, e, f, h, k, l, m, n, r) {
    a = this;
    return a.g.xa ? a.g.xa(b, c, d, e, f, h, k, l, m, n, r) : a.g.call(null, b, c, d, e, f, h, k, l, m, n, r);
  }
  function r(a, b, c, d, e, f, h, k, l, m, n) {
    a = this;
    return a.g.wa ? a.g.wa(b, c, d, e, f, h, k, l, m, n) : a.g.call(null, b, c, d, e, f, h, k, l, m, n);
  }
  function t(a, b, c, d, e, f, h, k, l, m) {
    a = this;
    return a.g.Ja ? a.g.Ja(b, c, d, e, f, h, k, l, m) : a.g.call(null, b, c, d, e, f, h, k, l, m);
  }
  function v(a, b, c, d, e, f, h, k, l) {
    a = this;
    return a.g.Ia ? a.g.Ia(b, c, d, e, f, h, k, l) : a.g.call(null, b, c, d, e, f, h, k, l);
  }
  function y(a, b, c, d, e, f, h, k) {
    a = this;
    return a.g.Ha ? a.g.Ha(b, c, d, e, f, h, k) : a.g.call(null, b, c, d, e, f, h, k);
  }
  function A(a, b, c, d, e, f, h) {
    a = this;
    return a.g.la ? a.g.la(b, c, d, e, f, h) : a.g.call(null, b, c, d, e, f, h);
  }
  function C(a, b, c, d, e, f) {
    a = this;
    return a.g.K ? a.g.K(b, c, d, e, f) : a.g.call(null, b, c, d, e, f);
  }
  function F(a, b, c, d, e) {
    a = this;
    return a.g.C ? a.g.C(b, c, d, e) : a.g.call(null, b, c, d, e);
  }
  function N(a, b, c, d) {
    a = this;
    return a.g.f ? a.g.f(b, c, d) : a.g.call(null, b, c, d);
  }
  function T(a, b, c) {
    a = this;
    return a.g.a ? a.g.a(b, c) : a.g.call(null, b, c);
  }
  function qa(a, b) {
    a = this;
    return a.g.b ? a.g.b(b) : a.g.call(null, b);
  }
  function Kb(a) {
    a = this;
    return a.g.u ? a.g.u() : a.g.call(null);
  }
  var B = null, B = function(B, ea, ia, oa, pa, ua, xa, Da, La, Oa, Xa, fb, pb, Cb, Jb, fc, vc, Tc, Hd, ne, Df, Mg) {
    switch(arguments.length) {
      case 1:
        return Kb.call(this, B);
      case 2:
        return qa.call(this, B, ea);
      case 3:
        return T.call(this, B, ea, ia);
      case 4:
        return N.call(this, B, ea, ia, oa);
      case 5:
        return F.call(this, B, ea, ia, oa, pa);
      case 6:
        return C.call(this, B, ea, ia, oa, pa, ua);
      case 7:
        return A.call(this, B, ea, ia, oa, pa, ua, xa);
      case 8:
        return y.call(this, B, ea, ia, oa, pa, ua, xa, Da);
      case 9:
        return v.call(this, B, ea, ia, oa, pa, ua, xa, Da, La);
      case 10:
        return t.call(this, B, ea, ia, oa, pa, ua, xa, Da, La, Oa);
      case 11:
        return r.call(this, B, ea, ia, oa, pa, ua, xa, Da, La, Oa, Xa);
      case 12:
        return n.call(this, B, ea, ia, oa, pa, ua, xa, Da, La, Oa, Xa, fb);
      case 13:
        return m.call(this, B, ea, ia, oa, pa, ua, xa, Da, La, Oa, Xa, fb, pb);
      case 14:
        return l.call(this, B, ea, ia, oa, pa, ua, xa, Da, La, Oa, Xa, fb, pb, Cb);
      case 15:
        return k.call(this, B, ea, ia, oa, pa, ua, xa, Da, La, Oa, Xa, fb, pb, Cb, Jb);
      case 16:
        return h.call(this, B, ea, ia, oa, pa, ua, xa, Da, La, Oa, Xa, fb, pb, Cb, Jb, fc);
      case 17:
        return f.call(this, B, ea, ia, oa, pa, ua, xa, Da, La, Oa, Xa, fb, pb, Cb, Jb, fc, vc);
      case 18:
        return e.call(this, B, ea, ia, oa, pa, ua, xa, Da, La, Oa, Xa, fb, pb, Cb, Jb, fc, vc, Tc);
      case 19:
        return d.call(this, B, ea, ia, oa, pa, ua, xa, Da, La, Oa, Xa, fb, pb, Cb, Jb, fc, vc, Tc, Hd);
      case 20:
        return c.call(this, B, ea, ia, oa, pa, ua, xa, Da, La, Oa, Xa, fb, pb, Cb, Jb, fc, vc, Tc, Hd, ne);
      case 21:
        return b.call(this, B, ea, ia, oa, pa, ua, xa, Da, La, Oa, Xa, fb, pb, Cb, Jb, fc, vc, Tc, Hd, ne, Df);
      case 22:
        return a.call(this, B, ea, ia, oa, pa, ua, xa, Da, La, Oa, Xa, fb, pb, Cb, Jb, fc, vc, Tc, Hd, ne, Df, Mg);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  B.b = Kb;
  B.a = qa;
  B.f = T;
  B.C = N;
  B.K = F;
  B.la = C;
  B.Ha = A;
  B.Ia = y;
  B.Ja = v;
  B.wa = t;
  B.xa = r;
  B.ya = n;
  B.za = m;
  B.Aa = l;
  B.Ba = k;
  B.Ca = h;
  B.Da = f;
  B.Ea = e;
  B.Fa = d;
  B.Ga = c;
  B.Wb = b;
  B.nb = a;
  return B;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Ja(b)));
};
g.u = function() {
  return this.g.u ? this.g.u() : this.g.call(null);
};
g.b = function(a) {
  return this.g.b ? this.g.b(a) : this.g.call(null, a);
};
g.a = function(a, b) {
  return this.g.a ? this.g.a(a, b) : this.g.call(null, a, b);
};
g.f = function(a, b, c) {
  return this.g.f ? this.g.f(a, b, c) : this.g.call(null, a, b, c);
};
g.C = function(a, b, c, d) {
  return this.g.C ? this.g.C(a, b, c, d) : this.g.call(null, a, b, c, d);
};
g.K = function(a, b, c, d, e) {
  return this.g.K ? this.g.K(a, b, c, d, e) : this.g.call(null, a, b, c, d, e);
};
g.la = function(a, b, c, d, e, f) {
  return this.g.la ? this.g.la(a, b, c, d, e, f) : this.g.call(null, a, b, c, d, e, f);
};
g.Ha = function(a, b, c, d, e, f, h) {
  return this.g.Ha ? this.g.Ha(a, b, c, d, e, f, h) : this.g.call(null, a, b, c, d, e, f, h);
};
g.Ia = function(a, b, c, d, e, f, h, k) {
  return this.g.Ia ? this.g.Ia(a, b, c, d, e, f, h, k) : this.g.call(null, a, b, c, d, e, f, h, k);
};
g.Ja = function(a, b, c, d, e, f, h, k, l) {
  return this.g.Ja ? this.g.Ja(a, b, c, d, e, f, h, k, l) : this.g.call(null, a, b, c, d, e, f, h, k, l);
};
g.wa = function(a, b, c, d, e, f, h, k, l, m) {
  return this.g.wa ? this.g.wa(a, b, c, d, e, f, h, k, l, m) : this.g.call(null, a, b, c, d, e, f, h, k, l, m);
};
g.xa = function(a, b, c, d, e, f, h, k, l, m, n) {
  return this.g.xa ? this.g.xa(a, b, c, d, e, f, h, k, l, m, n) : this.g.call(null, a, b, c, d, e, f, h, k, l, m, n);
};
g.ya = function(a, b, c, d, e, f, h, k, l, m, n, r) {
  return this.g.ya ? this.g.ya(a, b, c, d, e, f, h, k, l, m, n, r) : this.g.call(null, a, b, c, d, e, f, h, k, l, m, n, r);
};
g.za = function(a, b, c, d, e, f, h, k, l, m, n, r, t) {
  return this.g.za ? this.g.za(a, b, c, d, e, f, h, k, l, m, n, r, t) : this.g.call(null, a, b, c, d, e, f, h, k, l, m, n, r, t);
};
g.Aa = function(a, b, c, d, e, f, h, k, l, m, n, r, t, v) {
  return this.g.Aa ? this.g.Aa(a, b, c, d, e, f, h, k, l, m, n, r, t, v) : this.g.call(null, a, b, c, d, e, f, h, k, l, m, n, r, t, v);
};
g.Ba = function(a, b, c, d, e, f, h, k, l, m, n, r, t, v, y) {
  return this.g.Ba ? this.g.Ba(a, b, c, d, e, f, h, k, l, m, n, r, t, v, y) : this.g.call(null, a, b, c, d, e, f, h, k, l, m, n, r, t, v, y);
};
g.Ca = function(a, b, c, d, e, f, h, k, l, m, n, r, t, v, y, A) {
  return this.g.Ca ? this.g.Ca(a, b, c, d, e, f, h, k, l, m, n, r, t, v, y, A) : this.g.call(null, a, b, c, d, e, f, h, k, l, m, n, r, t, v, y, A);
};
g.Da = function(a, b, c, d, e, f, h, k, l, m, n, r, t, v, y, A, C) {
  return this.g.Da ? this.g.Da(a, b, c, d, e, f, h, k, l, m, n, r, t, v, y, A, C) : this.g.call(null, a, b, c, d, e, f, h, k, l, m, n, r, t, v, y, A, C);
};
g.Ea = function(a, b, c, d, e, f, h, k, l, m, n, r, t, v, y, A, C, F) {
  return this.g.Ea ? this.g.Ea(a, b, c, d, e, f, h, k, l, m, n, r, t, v, y, A, C, F) : this.g.call(null, a, b, c, d, e, f, h, k, l, m, n, r, t, v, y, A, C, F);
};
g.Fa = function(a, b, c, d, e, f, h, k, l, m, n, r, t, v, y, A, C, F, N) {
  return this.g.Fa ? this.g.Fa(a, b, c, d, e, f, h, k, l, m, n, r, t, v, y, A, C, F, N) : this.g.call(null, a, b, c, d, e, f, h, k, l, m, n, r, t, v, y, A, C, F, N);
};
g.Ga = function(a, b, c, d, e, f, h, k, l, m, n, r, t, v, y, A, C, F, N, T) {
  return this.g.Ga ? this.g.Ga(a, b, c, d, e, f, h, k, l, m, n, r, t, v, y, A, C, F, N, T) : this.g.call(null, a, b, c, d, e, f, h, k, l, m, n, r, t, v, y, A, C, F, N, T);
};
g.Wb = function(a, b, c, d, e, f, h, k, l, m, n, r, t, v, y, A, C, F, N, T, qa) {
  return Mc.nb ? Mc.nb(this.g, a, b, c, d, e, f, h, k, l, m, n, r, t, v, y, A, C, F, N, T, qa) : Mc.call(null, this.g, a, b, c, d, e, f, h, k, l, m, n, r, t, v, y, A, C, F, N, T, qa);
};
function Ac(a, b) {
  return ca(a) ? new Lc(a, b) : null == a ? null : jb(a, b);
}
function Nc(a) {
  var b = null != a;
  return (b ? null != a ? a.j & 131072 || a.$b || (a.j ? 0 : w(hb, a)) : w(hb, a) : b) ? ib(a) : null;
}
function Oc(a) {
  return null == a ? !1 : null != a ? a.j & 4096 || a.vc ? !0 : a.j ? !1 : w(bb, a) : w(bb, a);
}
function Pc(a) {
  return null != a ? a.j & 16777216 || a.uc ? !0 : a.j ? !1 : w(rb, a) : w(rb, a);
}
function Qc(a) {
  return null == a ? !1 : null != a ? a.j & 1024 || a.Yb ? !0 : a.j ? !1 : w(Wa, a) : w(Wa, a);
}
function Rc(a) {
  return null != a ? a.j & 16384 || a.wc ? !0 : a.j ? !1 : w(db, a) : w(db, a);
}
function Sc(a) {
  return null != a ? a.v & 512 || a.pc ? !0 : !1 : !1;
}
function Uc(a) {
  var b = [];
  ja(a, function(a, b) {
    return function(a, c) {
      return b.push(c);
    };
  }(a, b));
  return b;
}
function Vc(a, b, c, d, e) {
  for (;0 !== e;) {
    c[d] = a[b], d += 1, --e, b += 1;
  }
}
var Wc = {};
function Xc(a) {
  return null == a ? !1 : !1 === a ? !1 : !0;
}
function Yc(a, b) {
  return bc(a, b, Wc) === Wc ? !1 : !0;
}
function Zc(a, b) {
  if (a === b) {
    return 0;
  }
  if (null == a) {
    return -1;
  }
  if (null == b) {
    return 1;
  }
  if ("number" === typeof a) {
    if ("number" === typeof b) {
      return sa(a, b);
    }
    throw Error([z("Cannot compare "), z(a), z(" to "), z(b)].join(""));
  }
  if (null != a ? a.v & 2048 || a.bb || (a.v ? 0 : w(Db, a)) : w(Db, a)) {
    return Eb(a, b);
  }
  if ("string" !== typeof a && !Fa(a) && !0 !== a && !1 !== a || (null == a ? null : a.constructor) !== (null == b ? null : b.constructor)) {
    throw Error([z("Cannot compare "), z(a), z(" to "), z(b)].join(""));
  }
  return sa(a, b);
}
function $c(a, b) {
  var c = S(a), d = S(b);
  if (c < d) {
    c = -1;
  } else {
    if (c > d) {
      c = 1;
    } else {
      if (0 === c) {
        c = 0;
      } else {
        a: {
          for (d = 0;;) {
            var e = Zc(Hc(a, d), Hc(b, d));
            if (0 === e && d + 1 < c) {
              d += 1;
            } else {
              c = e;
              break a;
            }
          }
        }
      }
    }
  }
  return c;
}
function ad() {
  return ec.a(Zc, Zc) ? Zc : function(a, b) {
    var c = Zc.a ? Zc.a(a, b) : Zc.call(null, a, b);
    return "number" === typeof c ? c : u(c) ? -1 : u(Zc.a ? Zc.a(b, a) : Zc.call(null, b, a)) ? 1 : 0;
  };
}
function bd(a) {
  if (K(a)) {
    a = cd.b ? cd.b(a) : cd.call(null, a);
    var b = ad();
    ta(a, b);
    a = K(a);
  } else {
    a = O;
  }
  return a;
}
function Cc(a) {
  for (var b = [], c = arguments.length, d = 0;;) {
    if (d < c) {
      b.push(arguments[d]), d += 1;
    } else {
      break;
    }
  }
  switch(b.length) {
    case 2:
      return Bc(arguments[0], arguments[1]);
    case 3:
      return Dc(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([z("Invalid arity: "), z(b.length)].join(""));;
  }
}
function Bc(a, b) {
  var c = K(b);
  if (c) {
    var d = M(c), c = P(c);
    return dd ? dd(a, d, c) : ed.call(null, a, d, c);
  }
  return a.u ? a.u() : a.call(null);
}
function Dc(a, b, c) {
  for (c = K(c);;) {
    if (c) {
      var d = M(c);
      b = a.a ? a.a(b, d) : a.call(null, b, d);
      c = P(c);
    } else {
      return b;
    }
  }
}
function ed(a) {
  for (var b = [], c = arguments.length, d = 0;;) {
    if (d < c) {
      b.push(arguments[d]), d += 1;
    } else {
      break;
    }
  }
  switch(b.length) {
    case 2:
      return fd(arguments[0], arguments[1]);
    case 3:
      return dd(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([z("Invalid arity: "), z(b.length)].join(""));;
  }
}
function fd(a, b) {
  return null != b && (b.j & 524288 || b.bc) ? b.Y(null, a) : Fa(b) ? pc(b, a) : "string" === typeof b ? pc(b, a) : w(kb, b) ? lb.a(b, a) : Bc(a, b);
}
function dd(a, b, c) {
  return null != c && (c.j & 524288 || c.bc) ? c.Z(null, a, b) : Fa(c) ? qc(c, a, b) : "string" === typeof c ? qc(c, a, b) : w(kb, c) ? lb.f(c, a, b) : Dc(a, b, c);
}
function gd(a) {
  return a;
}
function hd(a) {
  a = (a - a % 2) / 2;
  return 0 <= a ? Math.floor(a) : Math.ceil(a);
}
function id(a) {
  a -= a >> 1 & 1431655765;
  a = (a & 858993459) + (a >> 2 & 858993459);
  return 16843009 * (a + (a >> 4) & 252645135) >> 24;
}
function jd(a) {
  var b = 1;
  for (a = K(a);;) {
    if (a && 0 < b) {
      --b, a = P(a);
    } else {
      return a;
    }
  }
}
var z = function z(b) {
  for (var c = [], d = arguments.length, e = 0;;) {
    if (e < d) {
      c.push(arguments[e]), e += 1;
    } else {
      break;
    }
  }
  switch(c.length) {
    case 0:
      return z.u();
    case 1:
      return z.b(arguments[0]);
    default:
      return z.o(arguments[0], new L(c.slice(1), 0));
  }
};
z.u = function() {
  return "";
};
z.b = function(a) {
  return null == a ? "" : "" + a;
};
z.o = function(a, b) {
  for (var c = new la("" + z(a)), d = b;;) {
    if (u(d)) {
      c = c.append("" + z(M(d))), d = P(d);
    } else {
      return c.toString();
    }
  }
};
z.A = function(a) {
  var b = M(a);
  a = P(a);
  return z.o(b, a);
};
z.D = 1;
function xc(a, b) {
  var c;
  if (Pc(b)) {
    if (sc(a) && sc(b) && S(a) !== S(b)) {
      c = !1;
    } else {
      a: {
        c = K(a);
        for (var d = K(b);;) {
          if (null == c) {
            c = null == d;
            break a;
          }
          if (null != d && ec.a(M(c), M(d))) {
            c = P(c), d = P(d);
          } else {
            c = !1;
            break a;
          }
        }
      }
    }
  } else {
    c = null;
  }
  return Xc(c);
}
function kd(a) {
  var b = 0;
  for (a = K(a);;) {
    if (a) {
      var c = M(a), b = (b + (Yb(ld.b ? ld.b(c) : ld.call(null, c)) ^ Yb(md.b ? md.b(c) : md.call(null, c)))) % 4503599627370496;
      a = P(a);
    } else {
      return b;
    }
  }
}
function nd(a, b, c, d, e) {
  this.l = a;
  this.first = b;
  this.La = c;
  this.count = d;
  this.m = e;
  this.j = 65937646;
  this.v = 8192;
}
g = nd.prototype;
g.toString = function() {
  return Pb(this);
};
g.equiv = function(a) {
  return this.s(null, a);
};
g.M = function() {
  return this.l;
};
g.ba = function() {
  return 1 === this.count ? null : this.La;
};
g.R = function() {
  return this.count;
};
g.J = function() {
  var a = this.m;
  return null != a ? a : this.m = a = ic(this);
};
g.s = function(a, b) {
  return xc(this, b);
};
g.V = function() {
  return jb(O, this.l);
};
g.Y = function(a, b) {
  return Bc(b, this);
};
g.Z = function(a, b, c) {
  return Dc(b, c, this);
};
g.W = function() {
  return this.first;
};
g.fa = function() {
  return 1 === this.count ? O : this.La;
};
g.P = function() {
  return this;
};
g.N = function(a, b) {
  return new nd(b, this.first, this.La, this.count, this.m);
};
g.O = function(a, b) {
  return new nd(this.l, b, this, this.count + 1, null);
};
nd.prototype[Ia] = function() {
  return Q(this);
};
function od(a) {
  this.l = a;
  this.j = 65937614;
  this.v = 8192;
}
g = od.prototype;
g.toString = function() {
  return Pb(this);
};
g.equiv = function(a) {
  return this.s(null, a);
};
g.M = function() {
  return this.l;
};
g.ba = function() {
  return null;
};
g.R = function() {
  return 0;
};
g.J = function() {
  return jc;
};
g.s = function(a, b) {
  return (null != b ? b.j & 33554432 || b.sc || (b.j ? 0 : w(sb, b)) : w(sb, b)) || Pc(b) ? null == K(b) : !1;
};
g.V = function() {
  return this;
};
g.Y = function(a, b) {
  return Bc(b, this);
};
g.Z = function(a, b, c) {
  return Dc(b, c, this);
};
g.W = function() {
  return null;
};
g.fa = function() {
  return O;
};
g.P = function() {
  return null;
};
g.N = function(a, b) {
  return new od(b);
};
g.O = function(a, b) {
  return new nd(this.l, b, null, 1, null);
};
var O = new od(null);
od.prototype[Ia] = function() {
  return Q(this);
};
function pd(a) {
  return (null != a ? a.j & 134217728 || a.tc || (a.j ? 0 : w(tb, a)) : w(tb, a)) ? ub(a) : dd(Ec, O, a);
}
function qd(a) {
  for (var b = [], c = arguments.length, d = 0;;) {
    if (d < c) {
      b.push(arguments[d]), d += 1;
    } else {
      break;
    }
  }
  a: {
    c = 0 < b.length ? new L(b.slice(0), 0) : null;
    if (c instanceof L && 0 === c.h) {
      b = c.c;
    } else {
      b: {
        for (b = [];;) {
          if (null != c) {
            b.push(c.W(null)), c = c.ba(null);
          } else {
            break b;
          }
        }
      }
    }
    for (var c = b.length, e = O;;) {
      if (0 < c) {
        d = c - 1, e = e.O(null, b[c - 1]), c = d;
      } else {
        break a;
      }
    }
  }
  return e;
}
function rd(a, b, c, d) {
  this.l = a;
  this.first = b;
  this.La = c;
  this.m = d;
  this.j = 65929452;
  this.v = 8192;
}
g = rd.prototype;
g.toString = function() {
  return Pb(this);
};
g.equiv = function(a) {
  return this.s(null, a);
};
g.M = function() {
  return this.l;
};
g.ba = function() {
  return null == this.La ? null : K(this.La);
};
g.J = function() {
  var a = this.m;
  return null != a ? a : this.m = a = ic(this);
};
g.s = function(a, b) {
  return xc(this, b);
};
g.V = function() {
  return Ac(O, this.l);
};
g.Y = function(a, b) {
  return Bc(b, this);
};
g.Z = function(a, b, c) {
  return Dc(b, c, this);
};
g.W = function() {
  return this.first;
};
g.fa = function() {
  return null == this.La ? O : this.La;
};
g.P = function() {
  return this;
};
g.N = function(a, b) {
  return new rd(b, this.first, this.La, this.m);
};
g.O = function(a, b) {
  return new rd(null, b, this, null);
};
rd.prototype[Ia] = function() {
  return Q(this);
};
function R(a, b) {
  var c = null == b;
  return (c ? c : null != b && (b.j & 64 || b.Ya)) ? new rd(null, a, b, null) : new rd(null, a, K(b), null);
}
function sd(a, b) {
  if (a.na === b.na) {
    return 0;
  }
  var c = Ga(a.da);
  if (u(c ? b.da : c)) {
    return -1;
  }
  if (u(a.da)) {
    if (Ga(b.da)) {
      return 1;
    }
    c = sa(a.da, b.da);
    return 0 === c ? sa(a.name, b.name) : c;
  }
  return sa(a.name, b.name);
}
function q(a, b, c, d) {
  this.da = a;
  this.name = b;
  this.na = c;
  this.Va = d;
  this.j = 2153775105;
  this.v = 4096;
}
g = q.prototype;
g.toString = function() {
  return [z(":"), z(this.na)].join("");
};
g.equiv = function(a) {
  return this.s(null, a);
};
g.s = function(a, b) {
  return b instanceof q ? this.na === b.na : !1;
};
g.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return J(c, this);
      case 3:
        return bc(c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a, c) {
    return J(c, this);
  };
  a.f = function(a, c, d) {
    return bc(c, this, d);
  };
  return a;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Ja(b)));
};
g.b = function(a) {
  return J(a, this);
};
g.a = function(a, b) {
  return bc(a, this, b);
};
g.J = function() {
  var a = this.Va;
  return null != a ? a : this.Va = a = Zb(Ub(this.name), Xb(this.da)) + 2654435769 | 0;
};
g.H = function(a, b) {
  return I(b, [z(":"), z(this.na)].join(""));
};
function td(a, b) {
  return a === b ? !0 : a instanceof q && b instanceof q ? a.na === b.na : !1;
}
var ud = function ud(b) {
  for (var c = [], d = arguments.length, e = 0;;) {
    if (e < d) {
      c.push(arguments[e]), e += 1;
    } else {
      break;
    }
  }
  switch(c.length) {
    case 1:
      return ud.b(arguments[0]);
    case 2:
      return ud.a(arguments[0], arguments[1]);
    default:
      throw Error([z("Invalid arity: "), z(c.length)].join(""));;
  }
};
ud.b = function(a) {
  if (a instanceof q) {
    return a;
  }
  if (a instanceof ac) {
    var b;
    if (null != a && (a.v & 4096 || a.ac)) {
      b = a.da;
    } else {
      throw Error([z("Doesn't support namespace: "), z(a)].join(""));
    }
    return new q(b, vd.b ? vd.b(a) : vd.call(null, a), a.ta, null);
  }
  return "string" === typeof a ? (b = a.split("/"), 2 === b.length ? new q(b[0], b[1], a, null) : new q(null, b[0], a, null)) : null;
};
ud.a = function(a, b) {
  return new q(a, b, [z(u(a) ? [z(a), z("/")].join("") : null), z(b)].join(""), null);
};
ud.D = 2;
function wd(a, b, c, d) {
  this.l = a;
  this.ab = b;
  this.w = c;
  this.m = d;
  this.j = 32374988;
  this.v = 1;
}
g = wd.prototype;
g.toString = function() {
  return Pb(this);
};
g.equiv = function(a) {
  return this.s(null, a);
};
function xd(a) {
  null != a.ab && (a.w = a.ab.u ? a.ab.u() : a.ab.call(null), a.ab = null);
  return a.w;
}
g.M = function() {
  return this.l;
};
g.ba = function() {
  qb(this);
  return null == this.w ? null : P(this.w);
};
g.J = function() {
  var a = this.m;
  return null != a ? a : this.m = a = ic(this);
};
g.s = function(a, b) {
  return xc(this, b);
};
g.V = function() {
  return Ac(O, this.l);
};
g.Y = function(a, b) {
  return Bc(b, this);
};
g.Z = function(a, b, c) {
  return Dc(b, c, this);
};
g.W = function() {
  qb(this);
  return null == this.w ? null : M(this.w);
};
g.fa = function() {
  qb(this);
  return null != this.w ? dc(this.w) : O;
};
g.P = function() {
  xd(this);
  if (null == this.w) {
    return null;
  }
  for (var a = this.w;;) {
    if (a instanceof wd) {
      a = xd(a);
    } else {
      return this.w = a, K(this.w);
    }
  }
};
g.N = function(a, b) {
  return new wd(b, this.ab, this.w, this.m);
};
g.O = function(a, b) {
  return R(b, this);
};
wd.prototype[Ia] = function() {
  return Q(this);
};
function yd(a, b) {
  this.tb = a;
  this.end = b;
  this.j = 2;
  this.v = 0;
}
yd.prototype.add = function(a) {
  this.tb[this.end] = a;
  return this.end += 1;
};
yd.prototype.ka = function() {
  var a = new zd(this.tb, 0, this.end);
  this.tb = null;
  return a;
};
yd.prototype.R = function() {
  return this.end;
};
function zd(a, b, c) {
  this.c = a;
  this.X = b;
  this.end = c;
  this.j = 524306;
  this.v = 0;
}
g = zd.prototype;
g.R = function() {
  return this.end - this.X;
};
g.S = function(a, b) {
  return this.c[this.X + b];
};
g.ha = function(a, b, c) {
  return 0 <= b && b < this.end - this.X ? this.c[this.X + b] : c;
};
g.Hb = function() {
  if (this.X === this.end) {
    throw Error("-drop-first of empty chunk");
  }
  return new zd(this.c, this.X + 1, this.end);
};
g.Y = function(a, b) {
  return rc(this.c, b, this.c[this.X], this.X + 1);
};
g.Z = function(a, b, c) {
  return rc(this.c, b, c, this.X);
};
function Ad(a, b, c, d) {
  this.ka = a;
  this.sa = b;
  this.l = c;
  this.m = d;
  this.j = 31850732;
  this.v = 1536;
}
g = Ad.prototype;
g.toString = function() {
  return Pb(this);
};
g.equiv = function(a) {
  return this.s(null, a);
};
g.M = function() {
  return this.l;
};
g.ba = function() {
  if (1 < Na(this.ka)) {
    return new Ad(Fb(this.ka), this.sa, this.l, null);
  }
  var a = qb(this.sa);
  return null == a ? null : a;
};
g.J = function() {
  var a = this.m;
  return null != a ? a : this.m = a = ic(this);
};
g.s = function(a, b) {
  return xc(this, b);
};
g.V = function() {
  return Ac(O, this.l);
};
g.W = function() {
  return D.a(this.ka, 0);
};
g.fa = function() {
  return 1 < Na(this.ka) ? new Ad(Fb(this.ka), this.sa, this.l, null) : null == this.sa ? O : this.sa;
};
g.P = function() {
  return this;
};
g.xb = function() {
  return this.ka;
};
g.yb = function() {
  return null == this.sa ? O : this.sa;
};
g.N = function(a, b) {
  return new Ad(this.ka, this.sa, b, this.m);
};
g.O = function(a, b) {
  return R(b, this);
};
g.wb = function() {
  return null == this.sa ? null : this.sa;
};
Ad.prototype[Ia] = function() {
  return Q(this);
};
function Bd(a, b) {
  return 0 === Na(a) ? b : new Ad(a, b, null, null);
}
function Cd(a, b) {
  a.add(b);
}
function cd(a) {
  for (var b = [];;) {
    if (K(a)) {
      b.push(M(a)), a = P(a);
    } else {
      return b;
    }
  }
}
function Dd(a, b) {
  if (sc(a)) {
    return S(a);
  }
  for (var c = a, d = b, e = 0;;) {
    if (0 < d && K(c)) {
      c = P(c), --d, e += 1;
    } else {
      return e;
    }
  }
}
var Ed = function Ed(b) {
  return null == b ? null : null == P(b) ? K(M(b)) : R(M(b), Ed(P(b)));
}, Fd = function Fd(b) {
  for (var c = [], d = arguments.length, e = 0;;) {
    if (e < d) {
      c.push(arguments[e]), e += 1;
    } else {
      break;
    }
  }
  switch(c.length) {
    case 0:
      return Fd.u();
    case 1:
      return Fd.b(arguments[0]);
    case 2:
      return Fd.a(arguments[0], arguments[1]);
    default:
      return Fd.o(arguments[0], arguments[1], new L(c.slice(2), 0));
  }
};
Fd.u = function() {
  return new wd(null, function() {
    return null;
  }, null, null);
};
Fd.b = function(a) {
  return new wd(null, function() {
    return a;
  }, null, null);
};
Fd.a = function(a, b) {
  return new wd(null, function() {
    var c = K(a);
    return c ? Sc(c) ? Bd(Gb(c), Fd.a(Hb(c), b)) : R(M(c), Fd.a(dc(c), b)) : b;
  }, null, null);
};
Fd.o = function(a, b, c) {
  return function e(a, b) {
    return new wd(null, function() {
      var c = K(a);
      return c ? Sc(c) ? Bd(Gb(c), e(Hb(c), b)) : R(M(c), e(dc(c), b)) : u(b) ? e(M(b), P(b)) : null;
    }, null, null);
  }(Fd.a(a, b), c);
};
Fd.A = function(a) {
  var b = M(a), c = P(a);
  a = M(c);
  c = P(c);
  return Fd.o(b, a, c);
};
Fd.D = 2;
var Gd = function Gd(b) {
  for (var c = [], d = arguments.length, e = 0;;) {
    if (e < d) {
      c.push(arguments[e]), e += 1;
    } else {
      break;
    }
  }
  switch(c.length) {
    case 0:
      return Gd.u();
    case 1:
      return Gd.b(arguments[0]);
    case 2:
      return Gd.a(arguments[0], arguments[1]);
    default:
      return Gd.o(arguments[0], arguments[1], new L(c.slice(2), 0));
  }
};
Gd.u = function() {
  return xb(Fc);
};
Gd.b = function(a) {
  return a;
};
Gd.a = function(a, b) {
  return yb(a, b);
};
Gd.o = function(a, b, c) {
  for (;;) {
    if (a = yb(a, b), u(c)) {
      b = M(c), c = P(c);
    } else {
      return a;
    }
  }
};
Gd.A = function(a) {
  var b = M(a), c = P(a);
  a = M(c);
  c = P(c);
  return Gd.o(b, a, c);
};
Gd.D = 2;
function Id(a, b, c) {
  var d = K(c);
  if (0 === b) {
    return a.u ? a.u() : a.call(null);
  }
  c = E(d);
  var e = G(d);
  if (1 === b) {
    return a.b ? a.b(c) : a.b ? a.b(c) : a.call(null, c);
  }
  var d = E(e), f = G(e);
  if (2 === b) {
    return a.a ? a.a(c, d) : a.a ? a.a(c, d) : a.call(null, c, d);
  }
  var e = E(f), h = G(f);
  if (3 === b) {
    return a.f ? a.f(c, d, e) : a.f ? a.f(c, d, e) : a.call(null, c, d, e);
  }
  var f = E(h), k = G(h);
  if (4 === b) {
    return a.C ? a.C(c, d, e, f) : a.C ? a.C(c, d, e, f) : a.call(null, c, d, e, f);
  }
  var h = E(k), l = G(k);
  if (5 === b) {
    return a.K ? a.K(c, d, e, f, h) : a.K ? a.K(c, d, e, f, h) : a.call(null, c, d, e, f, h);
  }
  var k = E(l), m = G(l);
  if (6 === b) {
    return a.la ? a.la(c, d, e, f, h, k) : a.la ? a.la(c, d, e, f, h, k) : a.call(null, c, d, e, f, h, k);
  }
  var l = E(m), n = G(m);
  if (7 === b) {
    return a.Ha ? a.Ha(c, d, e, f, h, k, l) : a.Ha ? a.Ha(c, d, e, f, h, k, l) : a.call(null, c, d, e, f, h, k, l);
  }
  var m = E(n), r = G(n);
  if (8 === b) {
    return a.Ia ? a.Ia(c, d, e, f, h, k, l, m) : a.Ia ? a.Ia(c, d, e, f, h, k, l, m) : a.call(null, c, d, e, f, h, k, l, m);
  }
  var n = E(r), t = G(r);
  if (9 === b) {
    return a.Ja ? a.Ja(c, d, e, f, h, k, l, m, n) : a.Ja ? a.Ja(c, d, e, f, h, k, l, m, n) : a.call(null, c, d, e, f, h, k, l, m, n);
  }
  var r = E(t), v = G(t);
  if (10 === b) {
    return a.wa ? a.wa(c, d, e, f, h, k, l, m, n, r) : a.wa ? a.wa(c, d, e, f, h, k, l, m, n, r) : a.call(null, c, d, e, f, h, k, l, m, n, r);
  }
  var t = E(v), y = G(v);
  if (11 === b) {
    return a.xa ? a.xa(c, d, e, f, h, k, l, m, n, r, t) : a.xa ? a.xa(c, d, e, f, h, k, l, m, n, r, t) : a.call(null, c, d, e, f, h, k, l, m, n, r, t);
  }
  var v = E(y), A = G(y);
  if (12 === b) {
    return a.ya ? a.ya(c, d, e, f, h, k, l, m, n, r, t, v) : a.ya ? a.ya(c, d, e, f, h, k, l, m, n, r, t, v) : a.call(null, c, d, e, f, h, k, l, m, n, r, t, v);
  }
  var y = E(A), C = G(A);
  if (13 === b) {
    return a.za ? a.za(c, d, e, f, h, k, l, m, n, r, t, v, y) : a.za ? a.za(c, d, e, f, h, k, l, m, n, r, t, v, y) : a.call(null, c, d, e, f, h, k, l, m, n, r, t, v, y);
  }
  var A = E(C), F = G(C);
  if (14 === b) {
    return a.Aa ? a.Aa(c, d, e, f, h, k, l, m, n, r, t, v, y, A) : a.Aa ? a.Aa(c, d, e, f, h, k, l, m, n, r, t, v, y, A) : a.call(null, c, d, e, f, h, k, l, m, n, r, t, v, y, A);
  }
  var C = E(F), N = G(F);
  if (15 === b) {
    return a.Ba ? a.Ba(c, d, e, f, h, k, l, m, n, r, t, v, y, A, C) : a.Ba ? a.Ba(c, d, e, f, h, k, l, m, n, r, t, v, y, A, C) : a.call(null, c, d, e, f, h, k, l, m, n, r, t, v, y, A, C);
  }
  var F = E(N), T = G(N);
  if (16 === b) {
    return a.Ca ? a.Ca(c, d, e, f, h, k, l, m, n, r, t, v, y, A, C, F) : a.Ca ? a.Ca(c, d, e, f, h, k, l, m, n, r, t, v, y, A, C, F) : a.call(null, c, d, e, f, h, k, l, m, n, r, t, v, y, A, C, F);
  }
  var N = E(T), qa = G(T);
  if (17 === b) {
    return a.Da ? a.Da(c, d, e, f, h, k, l, m, n, r, t, v, y, A, C, F, N) : a.Da ? a.Da(c, d, e, f, h, k, l, m, n, r, t, v, y, A, C, F, N) : a.call(null, c, d, e, f, h, k, l, m, n, r, t, v, y, A, C, F, N);
  }
  var T = E(qa), Kb = G(qa);
  if (18 === b) {
    return a.Ea ? a.Ea(c, d, e, f, h, k, l, m, n, r, t, v, y, A, C, F, N, T) : a.Ea ? a.Ea(c, d, e, f, h, k, l, m, n, r, t, v, y, A, C, F, N, T) : a.call(null, c, d, e, f, h, k, l, m, n, r, t, v, y, A, C, F, N, T);
  }
  qa = E(Kb);
  Kb = G(Kb);
  if (19 === b) {
    return a.Fa ? a.Fa(c, d, e, f, h, k, l, m, n, r, t, v, y, A, C, F, N, T, qa) : a.Fa ? a.Fa(c, d, e, f, h, k, l, m, n, r, t, v, y, A, C, F, N, T, qa) : a.call(null, c, d, e, f, h, k, l, m, n, r, t, v, y, A, C, F, N, T, qa);
  }
  var B = E(Kb);
  G(Kb);
  if (20 === b) {
    return a.Ga ? a.Ga(c, d, e, f, h, k, l, m, n, r, t, v, y, A, C, F, N, T, qa, B) : a.Ga ? a.Ga(c, d, e, f, h, k, l, m, n, r, t, v, y, A, C, F, N, T, qa, B) : a.call(null, c, d, e, f, h, k, l, m, n, r, t, v, y, A, C, F, N, T, qa, B);
  }
  throw Error("Only up to 20 arguments supported on functions");
}
function Mc(a) {
  for (var b = [], c = arguments.length, d = 0;;) {
    if (d < c) {
      b.push(arguments[d]), d += 1;
    } else {
      break;
    }
  }
  switch(b.length) {
    case 2:
      return Jd(arguments[0], arguments[1]);
    case 3:
      return Kd(arguments[0], arguments[1], arguments[2]);
    case 4:
      return Ld(arguments[0], arguments[1], arguments[2], arguments[3]);
    case 5:
      return Md(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    default:
      return Nd(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], new L(b.slice(5), 0));
  }
}
function Jd(a, b) {
  var c = a.D;
  if (a.A) {
    var d = Dd(b, c + 1);
    return d <= c ? Id(a, d, b) : a.A(b);
  }
  return a.apply(a, cd(b));
}
function Kd(a, b, c) {
  b = R(b, c);
  c = a.D;
  if (a.A) {
    var d = Dd(b, c + 1);
    return d <= c ? Id(a, d, b) : a.A(b);
  }
  return a.apply(a, cd(b));
}
function Ld(a, b, c, d) {
  b = R(b, R(c, d));
  c = a.D;
  return a.A ? (d = Dd(b, c + 1), d <= c ? Id(a, d, b) : a.A(b)) : a.apply(a, cd(b));
}
function Md(a, b, c, d, e) {
  b = R(b, R(c, R(d, e)));
  c = a.D;
  return a.A ? (d = Dd(b, c + 1), d <= c ? Id(a, d, b) : a.A(b)) : a.apply(a, cd(b));
}
function Nd(a, b, c, d, e, f) {
  b = R(b, R(c, R(d, R(e, Ed(f)))));
  c = a.D;
  return a.A ? (d = Dd(b, c + 1), d <= c ? Id(a, d, b) : a.A(b)) : a.apply(a, cd(b));
}
function Od(a) {
  return K(a) ? a : null;
}
var Pd = function Pd() {
  "undefined" === typeof va && (va = function(b, c) {
    this.lc = b;
    this.kc = c;
    this.j = 393216;
    this.v = 0;
  }, va.prototype.N = function(b, c) {
    return new va(this.lc, c);
  }, va.prototype.M = function() {
    return this.kc;
  }, va.prototype.$ = function() {
    return !1;
  }, va.prototype.next = function() {
    return Error("No such element");
  }, va.prototype.remove = function() {
    return Error("Unsupported operation");
  }, va.yc = function() {
    return new W(null, 2, 5, X, [Ac(new ac(null, "nil-iter", "nil-iter", 1101030523, null), new Ca(null, 1, [new q(null, "arglists", "arglists", 1661989754), qd(new ac(null, "quote", "quote", 1377916282, null), qd(Fc))], null)), new ac(null, "meta8891", "meta8891", 1960136090, null)], null);
  }, va.Nb = !0, va.qb = "cljs.core/t_cljs$core8890", va.ic = function(b) {
    return I(b, "cljs.core/t_cljs$core8890");
  });
  return new va(Pd, Qd);
};
function Rd(a, b) {
  for (;;) {
    if (null == K(b)) {
      return !0;
    }
    var c;
    c = M(b);
    c = a.b ? a.b(c) : a.call(null, c);
    if (u(c)) {
      c = a;
      var d = P(b);
      a = c;
      b = d;
    } else {
      return !1;
    }
  }
}
function Sd(a, b) {
  for (;;) {
    if (K(b)) {
      var c;
      c = M(b);
      c = a.b ? a.b(c) : a.call(null, c);
      if (u(c)) {
        return c;
      }
      c = a;
      var d = P(b);
      a = c;
      b = d;
    } else {
      return null;
    }
  }
}
function Td(a) {
  return function() {
    function b(b, c) {
      return Ga(a.a ? a.a(b, c) : a.call(null, b, c));
    }
    function c(b) {
      return Ga(a.b ? a.b(b) : a.call(null, b));
    }
    function d() {
      return Ga(a.u ? a.u() : a.call(null));
    }
    var e = null, f = function() {
      function b(a, d, e) {
        var f = null;
        if (2 < arguments.length) {
          for (var f = 0, h = Array(arguments.length - 2);f < h.length;) {
            h[f] = arguments[f + 2], ++f;
          }
          f = new L(h, 0);
        }
        return c.call(this, a, d, f);
      }
      function c(b, d, e) {
        return Ga(Ld(a, b, d, e));
      }
      b.D = 2;
      b.A = function(a) {
        var b = M(a);
        a = P(a);
        var d = M(a);
        a = dc(a);
        return c(b, d, a);
      };
      b.o = c;
      return b;
    }(), e = function(a, e, l) {
      switch(arguments.length) {
        case 0:
          return d.call(this);
        case 1:
          return c.call(this, a);
        case 2:
          return b.call(this, a, e);
        default:
          var m = null;
          if (2 < arguments.length) {
            for (var m = 0, n = Array(arguments.length - 2);m < n.length;) {
              n[m] = arguments[m + 2], ++m;
            }
            m = new L(n, 0);
          }
          return f.o(a, e, m);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    e.D = 2;
    e.A = f.A;
    e.u = d;
    e.b = c;
    e.a = b;
    e.o = f.o;
    return e;
  }();
}
var Ud = function Ud(b) {
  for (var c = [], d = arguments.length, e = 0;;) {
    if (e < d) {
      c.push(arguments[e]), e += 1;
    } else {
      break;
    }
  }
  switch(c.length) {
    case 0:
      return Ud.u();
    case 1:
      return Ud.b(arguments[0]);
    case 2:
      return Ud.a(arguments[0], arguments[1]);
    case 3:
      return Ud.f(arguments[0], arguments[1], arguments[2]);
    default:
      return Ud.o(arguments[0], arguments[1], arguments[2], new L(c.slice(3), 0));
  }
};
Ud.u = function() {
  return gd;
};
Ud.b = function(a) {
  return a;
};
Ud.a = function(a, b) {
  return function() {
    function c(c, d, e) {
      c = b.f ? b.f(c, d, e) : b.call(null, c, d, e);
      return a.b ? a.b(c) : a.call(null, c);
    }
    function d(c, d) {
      var e = b.a ? b.a(c, d) : b.call(null, c, d);
      return a.b ? a.b(e) : a.call(null, e);
    }
    function e(c) {
      c = b.b ? b.b(c) : b.call(null, c);
      return a.b ? a.b(c) : a.call(null, c);
    }
    function f() {
      var c = b.u ? b.u() : b.call(null);
      return a.b ? a.b(c) : a.call(null, c);
    }
    var h = null, k = function() {
      function c(a, b, e, f) {
        var h = null;
        if (3 < arguments.length) {
          for (var h = 0, k = Array(arguments.length - 3);h < k.length;) {
            k[h] = arguments[h + 3], ++h;
          }
          h = new L(k, 0);
        }
        return d.call(this, a, b, e, h);
      }
      function d(c, e, f, h) {
        c = Md(b, c, e, f, h);
        return a.b ? a.b(c) : a.call(null, c);
      }
      c.D = 3;
      c.A = function(a) {
        var b = M(a);
        a = P(a);
        var c = M(a);
        a = P(a);
        var e = M(a);
        a = dc(a);
        return d(b, c, e, a);
      };
      c.o = d;
      return c;
    }(), h = function(a, b, h, r) {
      switch(arguments.length) {
        case 0:
          return f.call(this);
        case 1:
          return e.call(this, a);
        case 2:
          return d.call(this, a, b);
        case 3:
          return c.call(this, a, b, h);
        default:
          var t = null;
          if (3 < arguments.length) {
            for (var t = 0, v = Array(arguments.length - 3);t < v.length;) {
              v[t] = arguments[t + 3], ++t;
            }
            t = new L(v, 0);
          }
          return k.o(a, b, h, t);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    h.D = 3;
    h.A = k.A;
    h.u = f;
    h.b = e;
    h.a = d;
    h.f = c;
    h.o = k.o;
    return h;
  }();
};
Ud.f = function(a, b, c) {
  return function() {
    function d(d, e, f) {
      d = c.f ? c.f(d, e, f) : c.call(null, d, e, f);
      d = b.b ? b.b(d) : b.call(null, d);
      return a.b ? a.b(d) : a.call(null, d);
    }
    function e(d, e) {
      var f;
      f = c.a ? c.a(d, e) : c.call(null, d, e);
      f = b.b ? b.b(f) : b.call(null, f);
      return a.b ? a.b(f) : a.call(null, f);
    }
    function f(d) {
      d = c.b ? c.b(d) : c.call(null, d);
      d = b.b ? b.b(d) : b.call(null, d);
      return a.b ? a.b(d) : a.call(null, d);
    }
    function h() {
      var d;
      d = c.u ? c.u() : c.call(null);
      d = b.b ? b.b(d) : b.call(null, d);
      return a.b ? a.b(d) : a.call(null, d);
    }
    var k = null, l = function() {
      function d(a, b, c, f) {
        var h = null;
        if (3 < arguments.length) {
          for (var h = 0, k = Array(arguments.length - 3);h < k.length;) {
            k[h] = arguments[h + 3], ++h;
          }
          h = new L(k, 0);
        }
        return e.call(this, a, b, c, h);
      }
      function e(d, f, h, k) {
        d = Md(c, d, f, h, k);
        d = b.b ? b.b(d) : b.call(null, d);
        return a.b ? a.b(d) : a.call(null, d);
      }
      d.D = 3;
      d.A = function(a) {
        var b = M(a);
        a = P(a);
        var c = M(a);
        a = P(a);
        var d = M(a);
        a = dc(a);
        return e(b, c, d, a);
      };
      d.o = e;
      return d;
    }(), k = function(a, b, c, k) {
      switch(arguments.length) {
        case 0:
          return h.call(this);
        case 1:
          return f.call(this, a);
        case 2:
          return e.call(this, a, b);
        case 3:
          return d.call(this, a, b, c);
        default:
          var v = null;
          if (3 < arguments.length) {
            for (var v = 0, y = Array(arguments.length - 3);v < y.length;) {
              y[v] = arguments[v + 3], ++v;
            }
            v = new L(y, 0);
          }
          return l.o(a, b, c, v);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    k.D = 3;
    k.A = l.A;
    k.u = h;
    k.b = f;
    k.a = e;
    k.f = d;
    k.o = l.o;
    return k;
  }();
};
Ud.o = function(a, b, c, d) {
  return function(a) {
    return function() {
      function b(a) {
        var d = null;
        if (0 < arguments.length) {
          for (var d = 0, e = Array(arguments.length - 0);d < e.length;) {
            e[d] = arguments[d + 0], ++d;
          }
          d = new L(e, 0);
        }
        return c.call(this, d);
      }
      function c(b) {
        b = Jd(M(a), b);
        for (var d = P(a);;) {
          if (d) {
            b = M(d).call(null, b), d = P(d);
          } else {
            return b;
          }
        }
      }
      b.D = 0;
      b.A = function(a) {
        a = K(a);
        return c(a);
      };
      b.o = c;
      return b;
    }();
  }(pd(R(a, R(b, R(c, d)))));
};
Ud.A = function(a) {
  var b = M(a), c = P(a);
  a = M(c);
  var d = P(c), c = M(d), d = P(d);
  return Ud.o(b, a, c, d);
};
Ud.D = 3;
function Vd(a, b, c, d) {
  this.state = a;
  this.l = b;
  this.oc = c;
  this.Sb = d;
  this.v = 16386;
  this.j = 6455296;
}
g = Vd.prototype;
g.equiv = function(a) {
  return this.s(null, a);
};
g.s = function(a, b) {
  return this === b;
};
g.Vb = function() {
  return this.state;
};
g.M = function() {
  return this.l;
};
g.Lb = function(a, b, c) {
  a = K(this.Sb);
  for (var d = null, e = 0, f = 0;;) {
    if (f < e) {
      var h = d.S(null, f), k = U(h, 0), h = U(h, 1);
      h.C ? h.C(k, this, b, c) : h.call(null, k, this, b, c);
      f += 1;
    } else {
      if (a = K(a)) {
        Sc(a) ? (d = Gb(a), a = Hb(a), k = d, e = S(d), d = k) : (d = M(a), k = U(d, 0), h = U(d, 1), h.C ? h.C(k, this, b, c) : h.call(null, k, this, b, c), a = P(a), d = null, e = 0), f = 0;
      } else {
        return null;
      }
    }
  }
};
g.J = function() {
  return this[da] || (this[da] = ++fa);
};
function Wd(a) {
  for (var b = [], c = arguments.length, d = 0;;) {
    if (d < c) {
      b.push(arguments[d]), d += 1;
    } else {
      break;
    }
  }
  switch(b.length) {
    case 1:
      return Xd(arguments[0]);
    default:
      return c = arguments[0], b = new L(b.slice(1), 0), d = null != b && (b.j & 64 || b.Ya) ? Jd(Yd, b) : b, b = J(d, new q(null, "meta", "meta", 1499536964)), d = J(d, new q(null, "validator", "validator", -1966190681)), new Vd(c, b, d, null);
  }
}
function Xd(a) {
  return new Vd(a, null, null, null);
}
function Zd(a, b) {
  if (a instanceof Vd) {
    var c = a.oc;
    if (null != c && !u(c.b ? c.b(b) : c.call(null, b))) {
      throw Error([z("Assert failed: "), z("Validator rejected reference state"), z("\n"), z(function() {
        var a = qd(new ac(null, "validate", "validate", 1439230700, null), new ac(null, "new-value", "new-value", -1567397401, null));
        return $d.b ? $d.b(a) : $d.call(null, a);
      }())].join(""));
    }
    c = a.state;
    a.state = b;
    null != a.Sb && wb(a, c, b);
    return b;
  }
  return Lb(a, b);
}
var ae = function ae(b) {
  for (var c = [], d = arguments.length, e = 0;;) {
    if (e < d) {
      c.push(arguments[e]), e += 1;
    } else {
      break;
    }
  }
  switch(c.length) {
    case 2:
      return ae.a(arguments[0], arguments[1]);
    case 3:
      return ae.f(arguments[0], arguments[1], arguments[2]);
    case 4:
      return ae.C(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      return ae.o(arguments[0], arguments[1], arguments[2], arguments[3], new L(c.slice(4), 0));
  }
};
ae.a = function(a, b) {
  var c;
  a instanceof Vd ? (c = a.state, c = b.b ? b.b(c) : b.call(null, c), c = Zd(a, c)) : c = Mb.a(a, b);
  return c;
};
ae.f = function(a, b, c) {
  if (a instanceof Vd) {
    var d = a.state;
    b = b.a ? b.a(d, c) : b.call(null, d, c);
    a = Zd(a, b);
  } else {
    a = Mb.f(a, b, c);
  }
  return a;
};
ae.C = function(a, b, c, d) {
  if (a instanceof Vd) {
    var e = a.state;
    b = b.f ? b.f(e, c, d) : b.call(null, e, c, d);
    a = Zd(a, b);
  } else {
    a = Mb.C(a, b, c, d);
  }
  return a;
};
ae.o = function(a, b, c, d, e) {
  return a instanceof Vd ? Zd(a, Md(b, a.state, c, d, e)) : Mb.K(a, b, c, d, e);
};
ae.A = function(a) {
  var b = M(a), c = P(a);
  a = M(c);
  var d = P(c), c = M(d), e = P(d), d = M(e), e = P(e);
  return ae.o(b, a, c, d, e);
};
ae.D = 4;
var Y = function Y(b) {
  for (var c = [], d = arguments.length, e = 0;;) {
    if (e < d) {
      c.push(arguments[e]), e += 1;
    } else {
      break;
    }
  }
  switch(c.length) {
    case 1:
      return Y.b(arguments[0]);
    case 2:
      return Y.a(arguments[0], arguments[1]);
    case 3:
      return Y.f(arguments[0], arguments[1], arguments[2]);
    case 4:
      return Y.C(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      return Y.o(arguments[0], arguments[1], arguments[2], arguments[3], new L(c.slice(4), 0));
  }
};
Y.b = function(a) {
  return function(b) {
    return function() {
      function c(c, d) {
        var e = a.b ? a.b(d) : a.call(null, d);
        return b.a ? b.a(c, e) : b.call(null, c, e);
      }
      function d(a) {
        return b.b ? b.b(a) : b.call(null, a);
      }
      function e() {
        return b.u ? b.u() : b.call(null);
      }
      var f = null, h = function() {
        function c(a, b, e) {
          var f = null;
          if (2 < arguments.length) {
            for (var f = 0, h = Array(arguments.length - 2);f < h.length;) {
              h[f] = arguments[f + 2], ++f;
            }
            f = new L(h, 0);
          }
          return d.call(this, a, b, f);
        }
        function d(c, e, f) {
          e = Kd(a, e, f);
          return b.a ? b.a(c, e) : b.call(null, c, e);
        }
        c.D = 2;
        c.A = function(a) {
          var b = M(a);
          a = P(a);
          var c = M(a);
          a = dc(a);
          return d(b, c, a);
        };
        c.o = d;
        return c;
      }(), f = function(a, b, f) {
        switch(arguments.length) {
          case 0:
            return e.call(this);
          case 1:
            return d.call(this, a);
          case 2:
            return c.call(this, a, b);
          default:
            var n = null;
            if (2 < arguments.length) {
              for (var n = 0, r = Array(arguments.length - 2);n < r.length;) {
                r[n] = arguments[n + 2], ++n;
              }
              n = new L(r, 0);
            }
            return h.o(a, b, n);
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      f.D = 2;
      f.A = h.A;
      f.u = e;
      f.b = d;
      f.a = c;
      f.o = h.o;
      return f;
    }();
  };
};
Y.a = function(a, b) {
  return new wd(null, function() {
    var c = K(b);
    if (c) {
      if (Sc(c)) {
        for (var d = Gb(c), e = S(d), f = new yd(Array(e), 0), h = 0;;) {
          if (h < e) {
            Cd(f, function() {
              var b = D.a(d, h);
              return a.b ? a.b(b) : a.call(null, b);
            }()), h += 1;
          } else {
            break;
          }
        }
        return Bd(f.ka(), Y.a(a, Hb(c)));
      }
      return R(function() {
        var b = M(c);
        return a.b ? a.b(b) : a.call(null, b);
      }(), Y.a(a, dc(c)));
    }
    return null;
  }, null, null);
};
Y.f = function(a, b, c) {
  return new wd(null, function() {
    var d = K(b), e = K(c);
    if (d && e) {
      var f = R, h;
      h = M(d);
      var k = M(e);
      h = a.a ? a.a(h, k) : a.call(null, h, k);
      d = f(h, Y.f(a, dc(d), dc(e)));
    } else {
      d = null;
    }
    return d;
  }, null, null);
};
Y.C = function(a, b, c, d) {
  return new wd(null, function() {
    var e = K(b), f = K(c), h = K(d);
    if (e && f && h) {
      var k = R, l;
      l = M(e);
      var m = M(f), n = M(h);
      l = a.f ? a.f(l, m, n) : a.call(null, l, m, n);
      e = k(l, Y.C(a, dc(e), dc(f), dc(h)));
    } else {
      e = null;
    }
    return e;
  }, null, null);
};
Y.o = function(a, b, c, d, e) {
  var f = function k(a) {
    return new wd(null, function() {
      var b = Y.a(K, a);
      return Rd(gd, b) ? R(Y.a(M, b), k(Y.a(dc, b))) : null;
    }, null, null);
  };
  return Y.a(function() {
    return function(b) {
      return Jd(a, b);
    };
  }(f), f(Ec.o(e, d, zc([c, b], 0))));
};
Y.A = function(a) {
  var b = M(a), c = P(a);
  a = M(c);
  var d = P(c), c = M(d), e = P(d), d = M(e), e = P(e);
  return Y.o(b, a, c, d, e);
};
Y.D = 4;
function be(a, b) {
  return new wd(null, function() {
    var c = K(b);
    if (c) {
      if (Sc(c)) {
        for (var d = Gb(c), e = S(d), f = new yd(Array(e), 0), h = 0;;) {
          if (h < e) {
            var k;
            k = D.a(d, h);
            k = a.b ? a.b(k) : a.call(null, k);
            u(k) && (k = D.a(d, h), f.add(k));
            h += 1;
          } else {
            break;
          }
        }
        return Bd(f.ka(), be(a, Hb(c)));
      }
      d = M(c);
      c = dc(c);
      return u(a.b ? a.b(d) : a.call(null, d)) ? R(d, be(a, c)) : be(a, c);
    }
    return null;
  }, null, null);
}
function ce(a, b) {
  return be(Td(a), b);
}
function de(a, b) {
  var c;
  null != a ? null != a && (a.v & 4 || a.qc) ? (c = dd(yb, xb(a), b), c = zb(c), c = Ac(c, Nc(a))) : c = dd(Qa, a, b) : c = dd(Ec, O, b);
  return c;
}
var ee = function ee(b) {
  for (var c = [], d = arguments.length, e = 0;;) {
    if (e < d) {
      c.push(arguments[e]), e += 1;
    } else {
      break;
    }
  }
  switch(c.length) {
    case 3:
      return ee.f(arguments[0], arguments[1], arguments[2]);
    case 4:
      return ee.C(arguments[0], arguments[1], arguments[2], arguments[3]);
    case 5:
      return ee.K(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    case 6:
      return ee.la(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
    default:
      return ee.o(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], new L(c.slice(6), 0));
  }
};
ee.f = function(a, b, c) {
  var d = U(b, 0);
  b = jd(b);
  return u(b) ? V.f(a, d, ee.f(J(a, d), b, c)) : V.f(a, d, function() {
    var b = J(a, d);
    return c.b ? c.b(b) : c.call(null, b);
  }());
};
ee.C = function(a, b, c, d) {
  var e = U(b, 0);
  b = jd(b);
  return u(b) ? V.f(a, e, ee.C(J(a, e), b, c, d)) : V.f(a, e, function() {
    var b = J(a, e);
    return c.a ? c.a(b, d) : c.call(null, b, d);
  }());
};
ee.K = function(a, b, c, d, e) {
  var f = U(b, 0);
  b = jd(b);
  return u(b) ? V.f(a, f, ee.K(J(a, f), b, c, d, e)) : V.f(a, f, function() {
    var b = J(a, f);
    return c.f ? c.f(b, d, e) : c.call(null, b, d, e);
  }());
};
ee.la = function(a, b, c, d, e, f) {
  var h = U(b, 0);
  b = jd(b);
  return u(b) ? V.f(a, h, ee.la(J(a, h), b, c, d, e, f)) : V.f(a, h, function() {
    var b = J(a, h);
    return c.C ? c.C(b, d, e, f) : c.call(null, b, d, e, f);
  }());
};
ee.o = function(a, b, c, d, e, f, h) {
  var k = U(b, 0);
  b = jd(b);
  return u(b) ? V.f(a, k, Nd(ee, J(a, k), b, c, d, zc([e, f, h], 0))) : V.f(a, k, Nd(c, J(a, k), d, e, f, zc([h], 0)));
};
ee.A = function(a) {
  var b = M(a), c = P(a);
  a = M(c);
  var d = P(c), c = M(d), e = P(d), d = M(e), f = P(e), e = M(f), h = P(f), f = M(h), h = P(h);
  return ee.o(b, a, c, d, e, f, h);
};
ee.D = 6;
function fe(a, b) {
  this.F = a;
  this.c = b;
}
function ge(a) {
  return new fe(a, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]);
}
function he(a) {
  a = a.i;
  return 32 > a ? 0 : a - 1 >>> 5 << 5;
}
function ie(a, b, c) {
  for (;;) {
    if (0 === b) {
      return c;
    }
    var d = ge(a);
    d.c[0] = c;
    c = d;
    b -= 5;
  }
}
var je = function je(b, c, d, e) {
  var f = new fe(d.F, Ja(d.c)), h = b.i - 1 >>> c & 31;
  5 === c ? f.c[h] = e : (d = d.c[h], b = null != d ? je(b, c - 5, d, e) : ie(null, c - 5, e), f.c[h] = b);
  return f;
};
function ke(a, b) {
  throw Error([z("No item "), z(a), z(" in vector of length "), z(b)].join(""));
}
function le(a, b) {
  if (b >= he(a)) {
    return a.aa;
  }
  for (var c = a.root, d = a.shift;;) {
    if (0 < d) {
      var e = d - 5, c = c.c[b >>> d & 31], d = e
    } else {
      return c.c;
    }
  }
}
function me(a, b) {
  return 0 <= b && b < a.i ? le(a, b) : ke(b, a.i);
}
var oe = function oe(b, c, d, e, f) {
  var h = new fe(d.F, Ja(d.c));
  if (0 === c) {
    h.c[e & 31] = f;
  } else {
    var k = e >>> c & 31;
    b = oe(b, c - 5, d.c[k], e, f);
    h.c[k] = b;
  }
  return h;
};
function pe(a, b, c, d, e, f) {
  this.h = a;
  this.kb = b;
  this.c = c;
  this.ua = d;
  this.start = e;
  this.end = f;
}
pe.prototype.$ = function() {
  return this.h < this.end;
};
pe.prototype.next = function() {
  32 === this.h - this.kb && (this.c = le(this.ua, this.h), this.kb += 32);
  var a = this.c[this.h & 31];
  this.h += 1;
  return a;
};
function W(a, b, c, d, e, f) {
  this.l = a;
  this.i = b;
  this.shift = c;
  this.root = d;
  this.aa = e;
  this.m = f;
  this.j = 167668511;
  this.v = 8196;
}
g = W.prototype;
g.toString = function() {
  return Pb(this);
};
g.equiv = function(a) {
  return this.s(null, a);
};
g.L = function(a, b) {
  return H.f(this, b, null);
};
g.G = function(a, b, c) {
  return "number" === typeof b ? D.f(this, b, c) : c;
};
g.S = function(a, b) {
  return me(this, b)[b & 31];
};
g.ha = function(a, b, c) {
  return 0 <= b && b < this.i ? le(this, b)[b & 31] : c;
};
g.Bb = function(a, b, c) {
  if (0 <= b && b < this.i) {
    return he(this) <= b ? (a = Ja(this.aa), a[b & 31] = c, new W(this.l, this.i, this.shift, this.root, a, null)) : new W(this.l, this.i, this.shift, oe(this, this.shift, this.root, b, c), this.aa, null);
  }
  if (b === this.i) {
    return Qa(this, c);
  }
  throw Error([z("Index "), z(b), z(" out of bounds  [0,"), z(this.i), z("]")].join(""));
};
g.ma = function() {
  var a = this.i;
  return new pe(0, 0, 0 < S(this) ? le(this, 0) : null, this, 0, a);
};
g.M = function() {
  return this.l;
};
g.R = function() {
  return this.i;
};
g.zb = function() {
  return D.a(this, 0);
};
g.Ab = function() {
  return D.a(this, 1);
};
g.pb = function() {
  return 0 < this.i ? new wc(this, this.i - 1, null) : null;
};
g.J = function() {
  var a = this.m;
  return null != a ? a : this.m = a = ic(this);
};
g.s = function(a, b) {
  if (b instanceof W) {
    if (this.i === S(b)) {
      for (var c = Nb(this), d = Nb(b);;) {
        if (u(c.$())) {
          var e = c.next(), f = d.next();
          if (!ec.a(e, f)) {
            return !1;
          }
        } else {
          return !0;
        }
      }
    } else {
      return !1;
    }
  } else {
    return xc(this, b);
  }
};
g.Xa = function() {
  return new qe(this.i, this.shift, re.b ? re.b(this.root) : re.call(null, this.root), se.b ? se.b(this.aa) : se.call(null, this.aa));
};
g.V = function() {
  return Ac(Fc, this.l);
};
g.Y = function(a, b) {
  return nc(this, b);
};
g.Z = function(a, b, c) {
  a = 0;
  for (var d = c;;) {
    if (a < this.i) {
      var e = le(this, a);
      c = e.length;
      a: {
        for (var f = 0;;) {
          if (f < c) {
            var h = e[f], d = b.a ? b.a(d, h) : b.call(null, d, h), f = f + 1
          } else {
            e = d;
            break a;
          }
        }
      }
      a += c;
      d = e;
    } else {
      return d;
    }
  }
};
g.Ra = function(a, b, c) {
  if ("number" === typeof b) {
    return eb(this, b, c);
  }
  throw Error("Vector's key for assoc must be a number.");
};
g.P = function() {
  if (0 === this.i) {
    return null;
  }
  if (32 >= this.i) {
    return new L(this.aa, 0);
  }
  var a;
  a: {
    a = this.root;
    for (var b = this.shift;;) {
      if (0 < b) {
        b -= 5, a = a.c[0];
      } else {
        a = a.c;
        break a;
      }
    }
  }
  return te ? te(this, a, 0, 0) : ue.call(null, this, a, 0, 0);
};
g.N = function(a, b) {
  return new W(b, this.i, this.shift, this.root, this.aa, this.m);
};
g.O = function(a, b) {
  if (32 > this.i - he(this)) {
    for (var c = this.aa.length, d = Array(c + 1), e = 0;;) {
      if (e < c) {
        d[e] = this.aa[e], e += 1;
      } else {
        break;
      }
    }
    d[c] = b;
    return new W(this.l, this.i + 1, this.shift, this.root, d, null);
  }
  c = (d = this.i >>> 5 > 1 << this.shift) ? this.shift + 5 : this.shift;
  d ? (d = ge(null), d.c[0] = this.root, e = ie(null, this.shift, new fe(null, this.aa)), d.c[1] = e) : d = je(this, this.shift, this.root, new fe(null, this.aa));
  return new W(this.l, this.i + 1, c, d, [b], null);
};
g.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.S(null, c);
      case 3:
        return this.ha(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a, c) {
    return this.S(null, c);
  };
  a.f = function(a, c, d) {
    return this.ha(null, c, d);
  };
  return a;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Ja(b)));
};
g.b = function(a) {
  return this.S(null, a);
};
g.a = function(a, b) {
  return this.ha(null, a, b);
};
var X = new fe(null, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]), Fc = new W(null, 0, 5, X, [], jc);
W.prototype[Ia] = function() {
  return Q(this);
};
function ve(a) {
  if (Fa(a)) {
    a: {
      var b = a.length;
      if (32 > b) {
        a = new W(null, b, 5, X, a, null);
      } else {
        for (var c = 32, d = (new W(null, 32, 5, X, a.slice(0, 32), null)).Xa(null);;) {
          if (c < b) {
            var e = c + 1, d = Gd.a(d, a[c]), c = e
          } else {
            a = zb(d);
            break a;
          }
        }
      }
    }
  } else {
    a = zb(dd(yb, xb(Fc), a));
  }
  return a;
}
function we(a, b, c, d, e, f) {
  this.ia = a;
  this.node = b;
  this.h = c;
  this.X = d;
  this.l = e;
  this.m = f;
  this.j = 32375020;
  this.v = 1536;
}
g = we.prototype;
g.toString = function() {
  return Pb(this);
};
g.equiv = function(a) {
  return this.s(null, a);
};
g.M = function() {
  return this.l;
};
g.ba = function() {
  if (this.X + 1 < this.node.length) {
    var a;
    a = this.ia;
    var b = this.node, c = this.h, d = this.X + 1;
    a = te ? te(a, b, c, d) : ue.call(null, a, b, c, d);
    return null == a ? null : a;
  }
  return Ib(this);
};
g.J = function() {
  var a = this.m;
  return null != a ? a : this.m = a = ic(this);
};
g.s = function(a, b) {
  return xc(this, b);
};
g.V = function() {
  return Ac(Fc, this.l);
};
g.Y = function(a, b) {
  var c;
  c = this.ia;
  var d = this.h + this.X, e = S(this.ia);
  c = xe ? xe(c, d, e) : ye.call(null, c, d, e);
  return nc(c, b);
};
g.Z = function(a, b, c) {
  a = this.ia;
  var d = this.h + this.X, e = S(this.ia);
  a = xe ? xe(a, d, e) : ye.call(null, a, d, e);
  return oc(a, b, c);
};
g.W = function() {
  return this.node[this.X];
};
g.fa = function() {
  if (this.X + 1 < this.node.length) {
    var a;
    a = this.ia;
    var b = this.node, c = this.h, d = this.X + 1;
    a = te ? te(a, b, c, d) : ue.call(null, a, b, c, d);
    return null == a ? O : a;
  }
  return Hb(this);
};
g.P = function() {
  return this;
};
g.xb = function() {
  var a = this.node;
  return new zd(a, this.X, a.length);
};
g.yb = function() {
  var a = this.h + this.node.length;
  if (a < Na(this.ia)) {
    var b = this.ia, c = le(this.ia, a);
    return te ? te(b, c, a, 0) : ue.call(null, b, c, a, 0);
  }
  return O;
};
g.N = function(a, b) {
  return ze ? ze(this.ia, this.node, this.h, this.X, b) : ue.call(null, this.ia, this.node, this.h, this.X, b);
};
g.O = function(a, b) {
  return R(b, this);
};
g.wb = function() {
  var a = this.h + this.node.length;
  if (a < Na(this.ia)) {
    var b = this.ia, c = le(this.ia, a);
    return te ? te(b, c, a, 0) : ue.call(null, b, c, a, 0);
  }
  return null;
};
we.prototype[Ia] = function() {
  return Q(this);
};
function ue(a) {
  for (var b = [], c = arguments.length, d = 0;;) {
    if (d < c) {
      b.push(arguments[d]), d += 1;
    } else {
      break;
    }
  }
  switch(b.length) {
    case 3:
      return b = arguments[0], c = arguments[1], d = arguments[2], new we(b, me(b, c), c, d, null, null);
    case 4:
      return te(arguments[0], arguments[1], arguments[2], arguments[3]);
    case 5:
      return ze(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    default:
      throw Error([z("Invalid arity: "), z(b.length)].join(""));;
  }
}
function te(a, b, c, d) {
  return new we(a, b, c, d, null, null);
}
function ze(a, b, c, d, e) {
  return new we(a, b, c, d, e, null);
}
function Ae(a, b, c, d, e) {
  this.l = a;
  this.ua = b;
  this.start = c;
  this.end = d;
  this.m = e;
  this.j = 167666463;
  this.v = 8192;
}
g = Ae.prototype;
g.toString = function() {
  return Pb(this);
};
g.equiv = function(a) {
  return this.s(null, a);
};
g.L = function(a, b) {
  return H.f(this, b, null);
};
g.G = function(a, b, c) {
  return "number" === typeof b ? D.f(this, b, c) : c;
};
g.S = function(a, b) {
  return 0 > b || this.end <= this.start + b ? ke(b, this.end - this.start) : D.a(this.ua, this.start + b);
};
g.ha = function(a, b, c) {
  return 0 > b || this.end <= this.start + b ? c : D.f(this.ua, this.start + b, c);
};
g.Bb = function(a, b, c) {
  var d = this.start + b;
  a = this.l;
  c = V.f(this.ua, d, c);
  b = this.start;
  var e = this.end, d = d + 1, d = e > d ? e : d;
  return Be.K ? Be.K(a, c, b, d, null) : Be.call(null, a, c, b, d, null);
};
g.M = function() {
  return this.l;
};
g.R = function() {
  return this.end - this.start;
};
g.pb = function() {
  return this.start !== this.end ? new wc(this, this.end - this.start - 1, null) : null;
};
g.J = function() {
  var a = this.m;
  return null != a ? a : this.m = a = ic(this);
};
g.s = function(a, b) {
  return xc(this, b);
};
g.V = function() {
  return Ac(Fc, this.l);
};
g.Y = function(a, b) {
  return nc(this, b);
};
g.Z = function(a, b, c) {
  return oc(this, b, c);
};
g.Ra = function(a, b, c) {
  if ("number" === typeof b) {
    return eb(this, b, c);
  }
  throw Error("Subvec's key for assoc must be a number.");
};
g.P = function() {
  var a = this;
  return function(b) {
    return function d(e) {
      return e === a.end ? null : R(D.a(a.ua, e), new wd(null, function() {
        return function() {
          return d(e + 1);
        };
      }(b), null, null));
    };
  }(this)(a.start);
};
g.N = function(a, b) {
  return Be.K ? Be.K(b, this.ua, this.start, this.end, this.m) : Be.call(null, b, this.ua, this.start, this.end, this.m);
};
g.O = function(a, b) {
  var c = this.l, d = eb(this.ua, this.end, b), e = this.start, f = this.end + 1;
  return Be.K ? Be.K(c, d, e, f, null) : Be.call(null, c, d, e, f, null);
};
g.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.S(null, c);
      case 3:
        return this.ha(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a, c) {
    return this.S(null, c);
  };
  a.f = function(a, c, d) {
    return this.ha(null, c, d);
  };
  return a;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Ja(b)));
};
g.b = function(a) {
  return this.S(null, a);
};
g.a = function(a, b) {
  return this.ha(null, a, b);
};
Ae.prototype[Ia] = function() {
  return Q(this);
};
function Be(a, b, c, d, e) {
  for (;;) {
    if (b instanceof Ae) {
      c = b.start + c, d = b.start + d, b = b.ua;
    } else {
      var f = S(b);
      if (0 > c || 0 > d || c > f || d > f) {
        throw Error("Index out of bounds");
      }
      return new Ae(a, b, c, d, e);
    }
  }
}
function ye(a) {
  for (var b = [], c = arguments.length, d = 0;;) {
    if (d < c) {
      b.push(arguments[d]), d += 1;
    } else {
      break;
    }
  }
  switch(b.length) {
    case 2:
      return b = arguments[0], xe(b, arguments[1], S(b));
    case 3:
      return xe(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([z("Invalid arity: "), z(b.length)].join(""));;
  }
}
function xe(a, b, c) {
  return Be(null, a, b, c, null);
}
function Ce(a, b) {
  return a === b.F ? b : new fe(a, Ja(b.c));
}
function re(a) {
  return new fe({}, Ja(a.c));
}
function se(a) {
  var b = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
  Vc(a, 0, b, 0, a.length);
  return b;
}
var De = function De(b, c, d, e) {
  d = Ce(b.root.F, d);
  var f = b.i - 1 >>> c & 31;
  if (5 === c) {
    b = e;
  } else {
    var h = d.c[f];
    b = null != h ? De(b, c - 5, h, e) : ie(b.root.F, c - 5, e);
  }
  d.c[f] = b;
  return d;
};
function qe(a, b, c, d) {
  this.i = a;
  this.shift = b;
  this.root = c;
  this.aa = d;
  this.v = 88;
  this.j = 275;
}
g = qe.prototype;
g.Sa = function(a, b) {
  if (this.root.F) {
    if (32 > this.i - he(this)) {
      this.aa[this.i & 31] = b;
    } else {
      var c = new fe(this.root.F, this.aa), d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      d[0] = b;
      this.aa = d;
      if (this.i >>> 5 > 1 << this.shift) {
        var d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], e = this.shift + 5;
        d[0] = this.root;
        d[1] = ie(this.root.F, this.shift, c);
        this.root = new fe(this.root.F, d);
        this.shift = e;
      } else {
        this.root = De(this, this.shift, this.root, c);
      }
    }
    this.i += 1;
    return this;
  }
  throw Error("conj! after persistent!");
};
g.Za = function() {
  if (this.root.F) {
    this.root.F = null;
    var a = this.i - he(this), b = Array(a);
    Vc(this.aa, 0, b, 0, a);
    return new W(null, this.i, this.shift, this.root, b, null);
  }
  throw Error("persistent! called twice");
};
g.eb = function(a, b, c) {
  if ("number" === typeof b) {
    return Bb(this, b, c);
  }
  throw Error("TransientVector's key for assoc! must be a number.");
};
g.Kb = function(a, b, c) {
  var d = this;
  if (d.root.F) {
    if (0 <= b && b < d.i) {
      return he(this) <= b ? d.aa[b & 31] = c : (a = function() {
        return function f(a, k) {
          var l = Ce(d.root.F, k);
          if (0 === a) {
            l.c[b & 31] = c;
          } else {
            var m = b >>> a & 31, n = f(a - 5, l.c[m]);
            l.c[m] = n;
          }
          return l;
        };
      }(this).call(null, d.shift, d.root), d.root = a), this;
    }
    if (b === d.i) {
      return yb(this, c);
    }
    throw Error([z("Index "), z(b), z(" out of bounds for TransientVector of length"), z(d.i)].join(""));
  }
  throw Error("assoc! after persistent!");
};
g.R = function() {
  if (this.root.F) {
    return this.i;
  }
  throw Error("count after persistent!");
};
g.S = function(a, b) {
  if (this.root.F) {
    return me(this, b)[b & 31];
  }
  throw Error("nth after persistent!");
};
g.ha = function(a, b, c) {
  return 0 <= b && b < this.i ? D.a(this, b) : c;
};
g.L = function(a, b) {
  return H.f(this, b, null);
};
g.G = function(a, b, c) {
  return "number" === typeof b ? D.f(this, b, c) : c;
};
g.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.L(null, c);
      case 3:
        return this.G(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a, c) {
    return this.L(null, c);
  };
  a.f = function(a, c, d) {
    return this.G(null, c, d);
  };
  return a;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Ja(b)));
};
g.b = function(a) {
  return this.L(null, a);
};
g.a = function(a, b) {
  return this.G(null, a, b);
};
function Ee() {
  this.j = 2097152;
  this.v = 0;
}
Ee.prototype.equiv = function(a) {
  return this.s(null, a);
};
Ee.prototype.s = function() {
  return !1;
};
var Fe = new Ee;
function Ge(a, b) {
  return Xc(Qc(b) ? S(a) === S(b) ? Rd(gd, Y.a(function(a) {
    return ec.a(bc(b, M(a), Fe), M(P(a)));
  }, a)) : null : null);
}
function He(a, b, c, d, e) {
  this.h = a;
  this.mc = b;
  this.Gb = c;
  this.jc = d;
  this.Ob = e;
}
He.prototype.$ = function() {
  var a = this.h < this.Gb;
  return a ? a : this.Ob.$();
};
He.prototype.next = function() {
  if (this.h < this.Gb) {
    var a = Hc(this.jc, this.h);
    this.h += 1;
    return new W(null, 2, 5, X, [a, H.a(this.mc, a)], null);
  }
  return this.Ob.next();
};
He.prototype.remove = function() {
  return Error("Unsupported operation");
};
function Ie(a) {
  this.w = a;
}
Ie.prototype.next = function() {
  if (null != this.w) {
    var a = M(this.w), b = U(a, 0), a = U(a, 1);
    this.w = P(this.w);
    return {value:[b, a], done:!1};
  }
  return {value:null, done:!0};
};
function Je(a) {
  return new Ie(K(a));
}
function Ke(a) {
  this.w = a;
}
Ke.prototype.next = function() {
  if (null != this.w) {
    var a = M(this.w);
    this.w = P(this.w);
    return {value:[a, a], done:!1};
  }
  return {value:null, done:!0};
};
function Le(a, b) {
  var c;
  if (b instanceof q) {
    a: {
      c = a.length;
      for (var d = b.na, e = 0;;) {
        if (c <= e) {
          c = -1;
          break a;
        }
        if (a[e] instanceof q && d === a[e].na) {
          c = e;
          break a;
        }
        e += 2;
      }
    }
  } else {
    if (ba(b) || "number" === typeof b) {
      a: {
        for (c = a.length, d = 0;;) {
          if (c <= d) {
            c = -1;
            break a;
          }
          if (b === a[d]) {
            c = d;
            break a;
          }
          d += 2;
        }
      }
    } else {
      if (b instanceof ac) {
        a: {
          for (c = a.length, d = b.ta, e = 0;;) {
            if (c <= e) {
              c = -1;
              break a;
            }
            if (a[e] instanceof ac && d === a[e].ta) {
              c = e;
              break a;
            }
            e += 2;
          }
        }
      } else {
        if (null == b) {
          a: {
            for (c = a.length, d = 0;;) {
              if (c <= d) {
                c = -1;
                break a;
              }
              if (null == a[d]) {
                c = d;
                break a;
              }
              d += 2;
            }
          }
        } else {
          a: {
            for (c = a.length, d = 0;;) {
              if (c <= d) {
                c = -1;
                break a;
              }
              if (ec.a(b, a[d])) {
                c = d;
                break a;
              }
              d += 2;
            }
          }
        }
      }
    }
  }
  return c;
}
function Me(a, b, c) {
  this.c = a;
  this.h = b;
  this.ea = c;
  this.j = 32374990;
  this.v = 0;
}
g = Me.prototype;
g.toString = function() {
  return Pb(this);
};
g.equiv = function(a) {
  return this.s(null, a);
};
g.M = function() {
  return this.ea;
};
g.ba = function() {
  return this.h < this.c.length - 2 ? new Me(this.c, this.h + 2, this.ea) : null;
};
g.R = function() {
  return (this.c.length - this.h) / 2;
};
g.J = function() {
  return ic(this);
};
g.s = function(a, b) {
  return xc(this, b);
};
g.V = function() {
  return Ac(O, this.ea);
};
g.Y = function(a, b) {
  return Bc(b, this);
};
g.Z = function(a, b, c) {
  return Dc(b, c, this);
};
g.W = function() {
  return new W(null, 2, 5, X, [this.c[this.h], this.c[this.h + 1]], null);
};
g.fa = function() {
  return this.h < this.c.length - 2 ? new Me(this.c, this.h + 2, this.ea) : O;
};
g.P = function() {
  return this;
};
g.N = function(a, b) {
  return new Me(this.c, this.h, b);
};
g.O = function(a, b) {
  return R(b, this);
};
Me.prototype[Ia] = function() {
  return Q(this);
};
function Ne(a, b, c) {
  this.c = a;
  this.h = b;
  this.i = c;
}
Ne.prototype.$ = function() {
  return this.h < this.i;
};
Ne.prototype.next = function() {
  var a = new W(null, 2, 5, X, [this.c[this.h], this.c[this.h + 1]], null);
  this.h += 2;
  return a;
};
function Ca(a, b, c, d) {
  this.l = a;
  this.i = b;
  this.c = c;
  this.m = d;
  this.j = 16647951;
  this.v = 8196;
}
g = Ca.prototype;
g.toString = function() {
  return Pb(this);
};
g.equiv = function(a) {
  return this.s(null, a);
};
g.keys = function() {
  return Q(Oe.b ? Oe.b(this) : Oe.call(null, this));
};
g.entries = function() {
  return Je(K(this));
};
g.values = function() {
  return Q(Pe.b ? Pe.b(this) : Pe.call(null, this));
};
g.has = function(a) {
  return Yc(this, a);
};
g.get = function(a, b) {
  return this.G(null, a, b);
};
g.forEach = function(a) {
  for (var b = K(this), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.S(null, e), h = U(f, 0), f = U(f, 1);
      a.a ? a.a(f, h) : a.call(null, f, h);
      e += 1;
    } else {
      if (b = K(b)) {
        Sc(b) ? (c = Gb(b), b = Hb(b), h = c, d = S(c), c = h) : (c = M(b), h = U(c, 0), f = U(c, 1), a.a ? a.a(f, h) : a.call(null, f, h), b = P(b), c = null, d = 0), e = 0;
      } else {
        return null;
      }
    }
  }
};
g.L = function(a, b) {
  return H.f(this, b, null);
};
g.G = function(a, b, c) {
  a = Le(this.c, b);
  return -1 === a ? c : this.c[a + 1];
};
g.ma = function() {
  return new Ne(this.c, 0, 2 * this.i);
};
g.M = function() {
  return this.l;
};
g.R = function() {
  return this.i;
};
g.J = function() {
  var a = this.m;
  return null != a ? a : this.m = a = kc(this);
};
g.s = function(a, b) {
  if (null != b && (b.j & 1024 || b.Yb)) {
    var c = this.c.length;
    if (this.i === b.R(null)) {
      for (var d = 0;;) {
        if (d < c) {
          var e = b.G(null, this.c[d], Wc);
          if (e !== Wc) {
            if (ec.a(this.c[d + 1], e)) {
              d += 2;
            } else {
              return !1;
            }
          } else {
            return !1;
          }
        } else {
          return !0;
        }
      }
    } else {
      return !1;
    }
  } else {
    return Ge(this, b);
  }
};
g.Xa = function() {
  return new Qe({}, this.c.length, Ja(this.c));
};
g.V = function() {
  return jb(Qd, this.l);
};
g.Y = function(a, b) {
  return Bc(b, this);
};
g.Z = function(a, b, c) {
  return Dc(b, c, this);
};
g.cb = function(a, b) {
  if (0 <= Le(this.c, b)) {
    var c = this.c.length, d = c - 2;
    if (0 === d) {
      return Pa(this);
    }
    for (var d = Array(d), e = 0, f = 0;;) {
      if (e >= c) {
        return new Ca(this.l, this.i - 1, d, null);
      }
      ec.a(b, this.c[e]) || (d[f] = this.c[e], d[f + 1] = this.c[e + 1], f += 2);
      e += 2;
    }
  } else {
    return this;
  }
};
g.Ra = function(a, b, c) {
  a = Le(this.c, b);
  if (-1 === a) {
    if (this.i < Re) {
      a = this.c;
      for (var d = a.length, e = Array(d + 2), f = 0;;) {
        if (f < d) {
          e[f] = a[f], f += 1;
        } else {
          break;
        }
      }
      e[d] = b;
      e[d + 1] = c;
      return new Ca(this.l, this.i + 1, e, null);
    }
    return jb(Va(de(Se, this), b, c), this.l);
  }
  if (c === this.c[a + 1]) {
    return this;
  }
  b = Ja(this.c);
  b[a + 1] = c;
  return new Ca(this.l, this.i, b, null);
};
g.vb = function(a, b) {
  return -1 !== Le(this.c, b);
};
g.P = function() {
  var a = this.c;
  return 0 <= a.length - 2 ? new Me(a, 0, null) : null;
};
g.N = function(a, b) {
  return new Ca(b, this.i, this.c, this.m);
};
g.O = function(a, b) {
  if (Rc(b)) {
    return Va(this, D.a(b, 0), D.a(b, 1));
  }
  for (var c = this, d = K(b);;) {
    if (null == d) {
      return c;
    }
    var e = M(d);
    if (Rc(e)) {
      c = Va(c, D.a(e, 0), D.a(e, 1)), d = P(d);
    } else {
      throw Error("conj on a map takes map entries or seqables of map entries");
    }
  }
};
g.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.L(null, c);
      case 3:
        return this.G(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a, c) {
    return this.L(null, c);
  };
  a.f = function(a, c, d) {
    return this.G(null, c, d);
  };
  return a;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Ja(b)));
};
g.b = function(a) {
  return this.L(null, a);
};
g.a = function(a, b) {
  return this.G(null, a, b);
};
var Qd = new Ca(null, 0, [], lc), Re = 8;
Ca.prototype[Ia] = function() {
  return Q(this);
};
function Qe(a, b, c) {
  this.$a = a;
  this.Ua = b;
  this.c = c;
  this.j = 258;
  this.v = 56;
}
g = Qe.prototype;
g.R = function() {
  if (u(this.$a)) {
    return hd(this.Ua);
  }
  throw Error("count after persistent!");
};
g.L = function(a, b) {
  return H.f(this, b, null);
};
g.G = function(a, b, c) {
  if (u(this.$a)) {
    return a = Le(this.c, b), -1 === a ? c : this.c[a + 1];
  }
  throw Error("lookup after persistent!");
};
g.Sa = function(a, b) {
  if (u(this.$a)) {
    if (null != b ? b.j & 2048 || b.Zb || (b.j ? 0 : w(Za, b)) : w(Za, b)) {
      return Ab(this, ld.b ? ld.b(b) : ld.call(null, b), md.b ? md.b(b) : md.call(null, b));
    }
    for (var c = K(b), d = this;;) {
      var e = M(c);
      if (u(e)) {
        c = P(c), d = Ab(d, ld.b ? ld.b(e) : ld.call(null, e), md.b ? md.b(e) : md.call(null, e));
      } else {
        return d;
      }
    }
  } else {
    throw Error("conj! after persistent!");
  }
};
g.Za = function() {
  if (u(this.$a)) {
    return this.$a = !1, new Ca(null, hd(this.Ua), this.c, null);
  }
  throw Error("persistent! called twice");
};
g.eb = function(a, b, c) {
  if (u(this.$a)) {
    a = Le(this.c, b);
    if (-1 === a) {
      if (this.Ua + 2 <= 2 * Re) {
        return this.Ua += 2, this.c.push(b), this.c.push(c), this;
      }
      a = Te.a ? Te.a(this.Ua, this.c) : Te.call(null, this.Ua, this.c);
      return Ab(a, b, c);
    }
    c !== this.c[a + 1] && (this.c[a + 1] = c);
    return this;
  }
  throw Error("assoc! after persistent!");
};
function Te(a, b) {
  for (var c = xb(Se), d = 0;;) {
    if (d < a) {
      c = Ab(c, b[d], b[d + 1]), d += 2;
    } else {
      return c;
    }
  }
}
function Ue() {
  this.va = !1;
}
function Ve(a, b) {
  return a === b ? !0 : td(a, b) ? !0 : ec.a(a, b);
}
function We(a, b, c) {
  a = Ja(a);
  a[b] = c;
  return a;
}
function Xe(a, b) {
  var c = Array(a.length - 2);
  Vc(a, 0, c, 0, 2 * b);
  Vc(a, 2 * (b + 1), c, 2 * b, c.length - 2 * b);
  return c;
}
function Ye(a, b, c, d) {
  a = a.Ta(b);
  a.c[c] = d;
  return a;
}
function Ze(a, b, c, d) {
  this.c = a;
  this.h = b;
  this.ib = c;
  this.ra = d;
}
Ze.prototype.advance = function() {
  for (var a = this.c.length;;) {
    if (this.h < a) {
      var b = this.c[this.h], c = this.c[this.h + 1];
      null != b ? b = this.ib = new W(null, 2, 5, X, [b, c], null) : null != c ? (b = Nb(c), b = b.$() ? this.ra = b : !1) : b = !1;
      this.h += 2;
      if (b) {
        return !0;
      }
    } else {
      return !1;
    }
  }
};
Ze.prototype.$ = function() {
  var a = null != this.ib;
  return a ? a : (a = null != this.ra) ? a : this.advance();
};
Ze.prototype.next = function() {
  if (null != this.ib) {
    var a = this.ib;
    this.ib = null;
    return a;
  }
  if (null != this.ra) {
    return a = this.ra.next(), this.ra.$() || (this.ra = null), a;
  }
  if (this.advance()) {
    return this.next();
  }
  throw Error("No such element");
};
Ze.prototype.remove = function() {
  return Error("Unsupported operation");
};
function $e(a, b, c) {
  this.F = a;
  this.I = b;
  this.c = c;
}
g = $e.prototype;
g.Ta = function(a) {
  if (a === this.F) {
    return this;
  }
  var b = id(this.I), c = Array(0 > b ? 4 : 2 * (b + 1));
  Vc(this.c, 0, c, 0, 2 * b);
  return new $e(a, this.I, c);
};
g.gb = function() {
  return af ? af(this.c) : bf.call(null, this.c);
};
g.Oa = function(a, b, c, d) {
  var e = 1 << (b >>> a & 31);
  if (0 === (this.I & e)) {
    return d;
  }
  var f = id(this.I & e - 1), e = this.c[2 * f], f = this.c[2 * f + 1];
  return null == e ? f.Oa(a + 5, b, c, d) : Ve(c, e) ? f : d;
};
g.pa = function(a, b, c, d, e, f) {
  var h = 1 << (c >>> b & 31), k = id(this.I & h - 1);
  if (0 === (this.I & h)) {
    var l = id(this.I);
    if (2 * l < this.c.length) {
      a = this.Ta(a);
      b = a.c;
      f.va = !0;
      a: {
        for (c = 2 * (l - k), f = 2 * k + (c - 1), l = 2 * (k + 1) + (c - 1);;) {
          if (0 === c) {
            break a;
          }
          b[l] = b[f];
          --l;
          --c;
          --f;
        }
      }
      b[2 * k] = d;
      b[2 * k + 1] = e;
      a.I |= h;
      return a;
    }
    if (16 <= l) {
      k = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      k[c >>> b & 31] = cf.pa(a, b + 5, c, d, e, f);
      for (e = d = 0;;) {
        if (32 > d) {
          0 !== (this.I >>> d & 1) && (k[d] = null != this.c[e] ? cf.pa(a, b + 5, Yb(this.c[e]), this.c[e], this.c[e + 1], f) : this.c[e + 1], e += 2), d += 1;
        } else {
          break;
        }
      }
      return new df(a, l + 1, k);
    }
    b = Array(2 * (l + 4));
    Vc(this.c, 0, b, 0, 2 * k);
    b[2 * k] = d;
    b[2 * k + 1] = e;
    Vc(this.c, 2 * k, b, 2 * (k + 1), 2 * (l - k));
    f.va = !0;
    a = this.Ta(a);
    a.c = b;
    a.I |= h;
    return a;
  }
  l = this.c[2 * k];
  h = this.c[2 * k + 1];
  if (null == l) {
    return l = h.pa(a, b + 5, c, d, e, f), l === h ? this : Ye(this, a, 2 * k + 1, l);
  }
  if (Ve(d, l)) {
    return e === h ? this : Ye(this, a, 2 * k + 1, e);
  }
  f.va = !0;
  f = b + 5;
  d = ef ? ef(a, f, l, h, c, d, e) : ff.call(null, a, f, l, h, c, d, e);
  e = 2 * k;
  k = 2 * k + 1;
  a = this.Ta(a);
  a.c[e] = null;
  a.c[k] = d;
  return a;
};
g.oa = function(a, b, c, d, e) {
  var f = 1 << (b >>> a & 31), h = id(this.I & f - 1);
  if (0 === (this.I & f)) {
    var k = id(this.I);
    if (16 <= k) {
      h = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      h[b >>> a & 31] = cf.oa(a + 5, b, c, d, e);
      for (d = c = 0;;) {
        if (32 > c) {
          0 !== (this.I >>> c & 1) && (h[c] = null != this.c[d] ? cf.oa(a + 5, Yb(this.c[d]), this.c[d], this.c[d + 1], e) : this.c[d + 1], d += 2), c += 1;
        } else {
          break;
        }
      }
      return new df(null, k + 1, h);
    }
    a = Array(2 * (k + 1));
    Vc(this.c, 0, a, 0, 2 * h);
    a[2 * h] = c;
    a[2 * h + 1] = d;
    Vc(this.c, 2 * h, a, 2 * (h + 1), 2 * (k - h));
    e.va = !0;
    return new $e(null, this.I | f, a);
  }
  var l = this.c[2 * h], f = this.c[2 * h + 1];
  if (null == l) {
    return k = f.oa(a + 5, b, c, d, e), k === f ? this : new $e(null, this.I, We(this.c, 2 * h + 1, k));
  }
  if (Ve(c, l)) {
    return d === f ? this : new $e(null, this.I, We(this.c, 2 * h + 1, d));
  }
  e.va = !0;
  e = this.I;
  k = this.c;
  a += 5;
  a = gf ? gf(a, l, f, b, c, d) : ff.call(null, a, l, f, b, c, d);
  c = 2 * h;
  h = 2 * h + 1;
  d = Ja(k);
  d[c] = null;
  d[h] = a;
  return new $e(null, e, d);
};
g.hb = function(a, b, c) {
  var d = 1 << (b >>> a & 31);
  if (0 === (this.I & d)) {
    return this;
  }
  var e = id(this.I & d - 1), f = this.c[2 * e], h = this.c[2 * e + 1];
  return null == f ? (a = h.hb(a + 5, b, c), a === h ? this : null != a ? new $e(null, this.I, We(this.c, 2 * e + 1, a)) : this.I === d ? null : new $e(null, this.I ^ d, Xe(this.c, e))) : Ve(c, f) ? new $e(null, this.I ^ d, Xe(this.c, e)) : this;
};
g.ma = function() {
  return new Ze(this.c, 0, null, null);
};
var cf = new $e(null, 0, []);
function hf(a, b, c) {
  this.c = a;
  this.h = b;
  this.ra = c;
}
hf.prototype.$ = function() {
  for (var a = this.c.length;;) {
    if (null != this.ra && this.ra.$()) {
      return !0;
    }
    if (this.h < a) {
      var b = this.c[this.h];
      this.h += 1;
      null != b && (this.ra = Nb(b));
    } else {
      return !1;
    }
  }
};
hf.prototype.next = function() {
  if (this.$()) {
    return this.ra.next();
  }
  throw Error("No such element");
};
hf.prototype.remove = function() {
  return Error("Unsupported operation");
};
function df(a, b, c) {
  this.F = a;
  this.i = b;
  this.c = c;
}
g = df.prototype;
g.Ta = function(a) {
  return a === this.F ? this : new df(a, this.i, Ja(this.c));
};
g.gb = function() {
  return jf ? jf(this.c) : kf.call(null, this.c);
};
g.Oa = function(a, b, c, d) {
  var e = this.c[b >>> a & 31];
  return null != e ? e.Oa(a + 5, b, c, d) : d;
};
g.pa = function(a, b, c, d, e, f) {
  var h = c >>> b & 31, k = this.c[h];
  if (null == k) {
    return a = Ye(this, a, h, cf.pa(a, b + 5, c, d, e, f)), a.i += 1, a;
  }
  b = k.pa(a, b + 5, c, d, e, f);
  return b === k ? this : Ye(this, a, h, b);
};
g.oa = function(a, b, c, d, e) {
  var f = b >>> a & 31, h = this.c[f];
  if (null == h) {
    return new df(null, this.i + 1, We(this.c, f, cf.oa(a + 5, b, c, d, e)));
  }
  a = h.oa(a + 5, b, c, d, e);
  return a === h ? this : new df(null, this.i, We(this.c, f, a));
};
g.hb = function(a, b, c) {
  var d = b >>> a & 31, e = this.c[d];
  if (null != e) {
    a = e.hb(a + 5, b, c);
    if (a === e) {
      d = this;
    } else {
      if (null == a) {
        if (8 >= this.i) {
          a: {
            e = this.c;
            a = e.length;
            b = Array(2 * (this.i - 1));
            c = 0;
            for (var f = 1, h = 0;;) {
              if (c < a) {
                c !== d && null != e[c] && (b[f] = e[c], f += 2, h |= 1 << c), c += 1;
              } else {
                d = new $e(null, h, b);
                break a;
              }
            }
          }
        } else {
          d = new df(null, this.i - 1, We(this.c, d, a));
        }
      } else {
        d = new df(null, this.i, We(this.c, d, a));
      }
    }
    return d;
  }
  return this;
};
g.ma = function() {
  return new hf(this.c, 0, null);
};
function lf(a, b, c) {
  b *= 2;
  for (var d = 0;;) {
    if (d < b) {
      if (Ve(c, a[d])) {
        return d;
      }
      d += 2;
    } else {
      return -1;
    }
  }
}
function mf(a, b, c, d) {
  this.F = a;
  this.Ka = b;
  this.i = c;
  this.c = d;
}
g = mf.prototype;
g.Ta = function(a) {
  if (a === this.F) {
    return this;
  }
  var b = Array(2 * (this.i + 1));
  Vc(this.c, 0, b, 0, 2 * this.i);
  return new mf(a, this.Ka, this.i, b);
};
g.gb = function() {
  return af ? af(this.c) : bf.call(null, this.c);
};
g.Oa = function(a, b, c, d) {
  a = lf(this.c, this.i, c);
  return 0 > a ? d : Ve(c, this.c[a]) ? this.c[a + 1] : d;
};
g.pa = function(a, b, c, d, e, f) {
  if (c === this.Ka) {
    b = lf(this.c, this.i, d);
    if (-1 === b) {
      if (this.c.length > 2 * this.i) {
        return b = 2 * this.i, c = 2 * this.i + 1, a = this.Ta(a), a.c[b] = d, a.c[c] = e, f.va = !0, a.i += 1, a;
      }
      c = this.c.length;
      b = Array(c + 2);
      Vc(this.c, 0, b, 0, c);
      b[c] = d;
      b[c + 1] = e;
      f.va = !0;
      d = this.i + 1;
      a === this.F ? (this.c = b, this.i = d, a = this) : a = new mf(this.F, this.Ka, d, b);
      return a;
    }
    return this.c[b + 1] === e ? this : Ye(this, a, b + 1, e);
  }
  return (new $e(a, 1 << (this.Ka >>> b & 31), [null, this, null, null])).pa(a, b, c, d, e, f);
};
g.oa = function(a, b, c, d, e) {
  return b === this.Ka ? (a = lf(this.c, this.i, c), -1 === a ? (a = 2 * this.i, b = Array(a + 2), Vc(this.c, 0, b, 0, a), b[a] = c, b[a + 1] = d, e.va = !0, new mf(null, this.Ka, this.i + 1, b)) : ec.a(this.c[a], d) ? this : new mf(null, this.Ka, this.i, We(this.c, a + 1, d))) : (new $e(null, 1 << (this.Ka >>> a & 31), [null, this])).oa(a, b, c, d, e);
};
g.hb = function(a, b, c) {
  a = lf(this.c, this.i, c);
  return -1 === a ? this : 1 === this.i ? null : new mf(null, this.Ka, this.i - 1, Xe(this.c, hd(a)));
};
g.ma = function() {
  return new Ze(this.c, 0, null, null);
};
function ff(a) {
  for (var b = [], c = arguments.length, d = 0;;) {
    if (d < c) {
      b.push(arguments[d]), d += 1;
    } else {
      break;
    }
  }
  switch(b.length) {
    case 6:
      return gf(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
    case 7:
      return ef(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6]);
    default:
      throw Error([z("Invalid arity: "), z(b.length)].join(""));;
  }
}
function gf(a, b, c, d, e, f) {
  var h = Yb(b);
  if (h === d) {
    return new mf(null, h, 2, [b, c, e, f]);
  }
  var k = new Ue;
  return cf.oa(a, h, b, c, k).oa(a, d, e, f, k);
}
function ef(a, b, c, d, e, f, h) {
  var k = Yb(c);
  if (k === e) {
    return new mf(null, k, 2, [c, d, f, h]);
  }
  var l = new Ue;
  return cf.pa(a, b, k, c, d, l).pa(a, b, e, f, h, l);
}
function nf(a, b, c, d, e) {
  this.l = a;
  this.Pa = b;
  this.h = c;
  this.w = d;
  this.m = e;
  this.j = 32374860;
  this.v = 0;
}
g = nf.prototype;
g.toString = function() {
  return Pb(this);
};
g.equiv = function(a) {
  return this.s(null, a);
};
g.M = function() {
  return this.l;
};
g.J = function() {
  var a = this.m;
  return null != a ? a : this.m = a = ic(this);
};
g.s = function(a, b) {
  return xc(this, b);
};
g.V = function() {
  return Ac(O, this.l);
};
g.Y = function(a, b) {
  return Bc(b, this);
};
g.Z = function(a, b, c) {
  return Dc(b, c, this);
};
g.W = function() {
  return null == this.w ? new W(null, 2, 5, X, [this.Pa[this.h], this.Pa[this.h + 1]], null) : M(this.w);
};
g.fa = function() {
  if (null == this.w) {
    var a = this.Pa, b = this.h + 2;
    return of ? of(a, b, null) : bf.call(null, a, b, null);
  }
  var a = this.Pa, b = this.h, c = P(this.w);
  return of ? of(a, b, c) : bf.call(null, a, b, c);
};
g.P = function() {
  return this;
};
g.N = function(a, b) {
  return new nf(b, this.Pa, this.h, this.w, this.m);
};
g.O = function(a, b) {
  return R(b, this);
};
nf.prototype[Ia] = function() {
  return Q(this);
};
function bf(a) {
  for (var b = [], c = arguments.length, d = 0;;) {
    if (d < c) {
      b.push(arguments[d]), d += 1;
    } else {
      break;
    }
  }
  switch(b.length) {
    case 1:
      return af(arguments[0]);
    case 3:
      return of(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([z("Invalid arity: "), z(b.length)].join(""));;
  }
}
function af(a) {
  return of(a, 0, null);
}
function of(a, b, c) {
  if (null == c) {
    for (c = a.length;;) {
      if (b < c) {
        if (null != a[b]) {
          return new nf(null, a, b, null, null);
        }
        var d = a[b + 1];
        if (u(d) && (d = d.gb(), u(d))) {
          return new nf(null, a, b + 2, d, null);
        }
        b += 2;
      } else {
        return null;
      }
    }
  } else {
    return new nf(null, a, b, c, null);
  }
}
function pf(a, b, c, d, e) {
  this.l = a;
  this.Pa = b;
  this.h = c;
  this.w = d;
  this.m = e;
  this.j = 32374860;
  this.v = 0;
}
g = pf.prototype;
g.toString = function() {
  return Pb(this);
};
g.equiv = function(a) {
  return this.s(null, a);
};
g.M = function() {
  return this.l;
};
g.J = function() {
  var a = this.m;
  return null != a ? a : this.m = a = ic(this);
};
g.s = function(a, b) {
  return xc(this, b);
};
g.V = function() {
  return Ac(O, this.l);
};
g.Y = function(a, b) {
  return Bc(b, this);
};
g.Z = function(a, b, c) {
  return Dc(b, c, this);
};
g.W = function() {
  return M(this.w);
};
g.fa = function() {
  var a = this.Pa, b = this.h, c = P(this.w);
  return qf ? qf(null, a, b, c) : kf.call(null, null, a, b, c);
};
g.P = function() {
  return this;
};
g.N = function(a, b) {
  return new pf(b, this.Pa, this.h, this.w, this.m);
};
g.O = function(a, b) {
  return R(b, this);
};
pf.prototype[Ia] = function() {
  return Q(this);
};
function kf(a) {
  for (var b = [], c = arguments.length, d = 0;;) {
    if (d < c) {
      b.push(arguments[d]), d += 1;
    } else {
      break;
    }
  }
  switch(b.length) {
    case 1:
      return jf(arguments[0]);
    case 4:
      return qf(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      throw Error([z("Invalid arity: "), z(b.length)].join(""));;
  }
}
function jf(a) {
  return qf(null, a, 0, null);
}
function qf(a, b, c, d) {
  if (null == d) {
    for (d = b.length;;) {
      if (c < d) {
        var e = b[c];
        if (u(e) && (e = e.gb(), u(e))) {
          return new pf(a, b, c + 1, e, null);
        }
        c += 1;
      } else {
        return null;
      }
    }
  } else {
    return new pf(a, b, c, d, null);
  }
}
function rf(a, b, c) {
  this.ga = a;
  this.Qb = b;
  this.Fb = c;
}
rf.prototype.$ = function() {
  return this.Fb && this.Qb.$();
};
rf.prototype.next = function() {
  if (this.Fb) {
    return this.Qb.next();
  }
  this.Fb = !0;
  return this.ga;
};
rf.prototype.remove = function() {
  return Error("Unsupported operation");
};
function sf(a, b, c, d, e, f) {
  this.l = a;
  this.i = b;
  this.root = c;
  this.ca = d;
  this.ga = e;
  this.m = f;
  this.j = 16123663;
  this.v = 8196;
}
g = sf.prototype;
g.toString = function() {
  return Pb(this);
};
g.equiv = function(a) {
  return this.s(null, a);
};
g.keys = function() {
  return Q(Oe.b ? Oe.b(this) : Oe.call(null, this));
};
g.entries = function() {
  return Je(K(this));
};
g.values = function() {
  return Q(Pe.b ? Pe.b(this) : Pe.call(null, this));
};
g.has = function(a) {
  return Yc(this, a);
};
g.get = function(a, b) {
  return this.G(null, a, b);
};
g.forEach = function(a) {
  for (var b = K(this), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.S(null, e), h = U(f, 0), f = U(f, 1);
      a.a ? a.a(f, h) : a.call(null, f, h);
      e += 1;
    } else {
      if (b = K(b)) {
        Sc(b) ? (c = Gb(b), b = Hb(b), h = c, d = S(c), c = h) : (c = M(b), h = U(c, 0), f = U(c, 1), a.a ? a.a(f, h) : a.call(null, f, h), b = P(b), c = null, d = 0), e = 0;
      } else {
        return null;
      }
    }
  }
};
g.L = function(a, b) {
  return H.f(this, b, null);
};
g.G = function(a, b, c) {
  return null == b ? this.ca ? this.ga : c : null == this.root ? c : this.root.Oa(0, Yb(b), b, c);
};
g.ma = function() {
  var a = this.root ? Nb(this.root) : Pd;
  return this.ca ? new rf(this.ga, a, !1) : a;
};
g.M = function() {
  return this.l;
};
g.R = function() {
  return this.i;
};
g.J = function() {
  var a = this.m;
  return null != a ? a : this.m = a = kc(this);
};
g.s = function(a, b) {
  return Ge(this, b);
};
g.Xa = function() {
  return new tf({}, this.root, this.i, this.ca, this.ga);
};
g.V = function() {
  return jb(Se, this.l);
};
g.cb = function(a, b) {
  if (null == b) {
    return this.ca ? new sf(this.l, this.i - 1, this.root, !1, null, null) : this;
  }
  if (null == this.root) {
    return this;
  }
  var c = this.root.hb(0, Yb(b), b);
  return c === this.root ? this : new sf(this.l, this.i - 1, c, this.ca, this.ga, null);
};
g.Ra = function(a, b, c) {
  if (null == b) {
    return this.ca && c === this.ga ? this : new sf(this.l, this.ca ? this.i : this.i + 1, this.root, !0, c, null);
  }
  a = new Ue;
  b = (null == this.root ? cf : this.root).oa(0, Yb(b), b, c, a);
  return b === this.root ? this : new sf(this.l, a.va ? this.i + 1 : this.i, b, this.ca, this.ga, null);
};
g.vb = function(a, b) {
  return null == b ? this.ca : null == this.root ? !1 : this.root.Oa(0, Yb(b), b, Wc) !== Wc;
};
g.P = function() {
  if (0 < this.i) {
    var a = null != this.root ? this.root.gb() : null;
    return this.ca ? R(new W(null, 2, 5, X, [null, this.ga], null), a) : a;
  }
  return null;
};
g.N = function(a, b) {
  return new sf(b, this.i, this.root, this.ca, this.ga, this.m);
};
g.O = function(a, b) {
  if (Rc(b)) {
    return Va(this, D.a(b, 0), D.a(b, 1));
  }
  for (var c = this, d = K(b);;) {
    if (null == d) {
      return c;
    }
    var e = M(d);
    if (Rc(e)) {
      c = Va(c, D.a(e, 0), D.a(e, 1)), d = P(d);
    } else {
      throw Error("conj on a map takes map entries or seqables of map entries");
    }
  }
};
g.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.L(null, c);
      case 3:
        return this.G(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a, c) {
    return this.L(null, c);
  };
  a.f = function(a, c, d) {
    return this.G(null, c, d);
  };
  return a;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Ja(b)));
};
g.b = function(a) {
  return this.L(null, a);
};
g.a = function(a, b) {
  return this.G(null, a, b);
};
var Se = new sf(null, 0, null, !1, null, lc);
function Ic(a, b) {
  for (var c = a.length, d = 0, e = xb(Se);;) {
    if (d < c) {
      var f = d + 1, e = e.eb(null, a[d], b[d]), d = f
    } else {
      return zb(e);
    }
  }
}
sf.prototype[Ia] = function() {
  return Q(this);
};
function tf(a, b, c, d, e) {
  this.F = a;
  this.root = b;
  this.count = c;
  this.ca = d;
  this.ga = e;
  this.j = 258;
  this.v = 56;
}
function uf(a, b, c) {
  if (a.F) {
    if (null == b) {
      a.ga !== c && (a.ga = c), a.ca || (a.count += 1, a.ca = !0);
    } else {
      var d = new Ue;
      b = (null == a.root ? cf : a.root).pa(a.F, 0, Yb(b), b, c, d);
      b !== a.root && (a.root = b);
      d.va && (a.count += 1);
    }
    return a;
  }
  throw Error("assoc! after persistent!");
}
g = tf.prototype;
g.R = function() {
  if (this.F) {
    return this.count;
  }
  throw Error("count after persistent!");
};
g.L = function(a, b) {
  return null == b ? this.ca ? this.ga : null : null == this.root ? null : this.root.Oa(0, Yb(b), b);
};
g.G = function(a, b, c) {
  return null == b ? this.ca ? this.ga : c : null == this.root ? c : this.root.Oa(0, Yb(b), b, c);
};
g.Sa = function(a, b) {
  var c;
  a: {
    if (this.F) {
      if (null != b ? b.j & 2048 || b.Zb || (b.j ? 0 : w(Za, b)) : w(Za, b)) {
        c = uf(this, ld.b ? ld.b(b) : ld.call(null, b), md.b ? md.b(b) : md.call(null, b));
      } else {
        c = K(b);
        for (var d = this;;) {
          var e = M(c);
          if (u(e)) {
            c = P(c), d = uf(d, ld.b ? ld.b(e) : ld.call(null, e), md.b ? md.b(e) : md.call(null, e));
          } else {
            c = d;
            break a;
          }
        }
      }
    } else {
      throw Error("conj! after persistent");
    }
  }
  return c;
};
g.Za = function() {
  var a;
  if (this.F) {
    this.F = null, a = new sf(null, this.count, this.root, this.ca, this.ga, null);
  } else {
    throw Error("persistent! called twice");
  }
  return a;
};
g.eb = function(a, b, c) {
  return uf(this, b, c);
};
var Yd = function Yd(b) {
  for (var c = [], d = arguments.length, e = 0;;) {
    if (e < d) {
      c.push(arguments[e]), e += 1;
    } else {
      break;
    }
  }
  return Yd.o(0 < c.length ? new L(c.slice(0), 0) : null);
};
Yd.o = function(a) {
  for (var b = K(a), c = xb(Se);;) {
    if (b) {
      a = P(P(b));
      var d = M(b), b = M(P(b)), c = Ab(c, d, b), b = a;
    } else {
      return zb(c);
    }
  }
};
Yd.D = 0;
Yd.A = function(a) {
  return Yd.o(K(a));
};
function vf(a, b) {
  this.B = a;
  this.ea = b;
  this.j = 32374988;
  this.v = 0;
}
g = vf.prototype;
g.toString = function() {
  return Pb(this);
};
g.equiv = function(a) {
  return this.s(null, a);
};
g.M = function() {
  return this.ea;
};
g.ba = function() {
  var a = (null != this.B ? this.B.j & 128 || this.B.ob || (this.B.j ? 0 : w(Sa, this.B)) : w(Sa, this.B)) ? this.B.ba(null) : P(this.B);
  return null == a ? null : new vf(a, this.ea);
};
g.J = function() {
  return ic(this);
};
g.s = function(a, b) {
  return xc(this, b);
};
g.V = function() {
  return Ac(O, this.ea);
};
g.Y = function(a, b) {
  return Bc(b, this);
};
g.Z = function(a, b, c) {
  return Dc(b, c, this);
};
g.W = function() {
  return this.B.W(null).zb();
};
g.fa = function() {
  var a = (null != this.B ? this.B.j & 128 || this.B.ob || (this.B.j ? 0 : w(Sa, this.B)) : w(Sa, this.B)) ? this.B.ba(null) : P(this.B);
  return null != a ? new vf(a, this.ea) : O;
};
g.P = function() {
  return this;
};
g.N = function(a, b) {
  return new vf(this.B, b);
};
g.O = function(a, b) {
  return R(b, this);
};
vf.prototype[Ia] = function() {
  return Q(this);
};
function Oe(a) {
  return (a = K(a)) ? new vf(a, null) : null;
}
function ld(a) {
  return $a(a);
}
function wf(a, b) {
  this.B = a;
  this.ea = b;
  this.j = 32374988;
  this.v = 0;
}
g = wf.prototype;
g.toString = function() {
  return Pb(this);
};
g.equiv = function(a) {
  return this.s(null, a);
};
g.M = function() {
  return this.ea;
};
g.ba = function() {
  var a = (null != this.B ? this.B.j & 128 || this.B.ob || (this.B.j ? 0 : w(Sa, this.B)) : w(Sa, this.B)) ? this.B.ba(null) : P(this.B);
  return null == a ? null : new wf(a, this.ea);
};
g.J = function() {
  return ic(this);
};
g.s = function(a, b) {
  return xc(this, b);
};
g.V = function() {
  return Ac(O, this.ea);
};
g.Y = function(a, b) {
  return Bc(b, this);
};
g.Z = function(a, b, c) {
  return Dc(b, c, this);
};
g.W = function() {
  return this.B.W(null).Ab();
};
g.fa = function() {
  var a = (null != this.B ? this.B.j & 128 || this.B.ob || (this.B.j ? 0 : w(Sa, this.B)) : w(Sa, this.B)) ? this.B.ba(null) : P(this.B);
  return null != a ? new wf(a, this.ea) : O;
};
g.P = function() {
  return this;
};
g.N = function(a, b) {
  return new wf(this.B, b);
};
g.O = function(a, b) {
  return R(b, this);
};
wf.prototype[Ia] = function() {
  return Q(this);
};
function Pe(a) {
  return (a = K(a)) ? new wf(a, null) : null;
}
function md(a) {
  return ab(a);
}
function xf(a) {
  return u(Sd(gd, a)) ? fd(function(a, c) {
    return Ec.a(u(a) ? a : Qd, c);
  }, a) : null;
}
function yf(a) {
  this.Db = a;
}
yf.prototype.$ = function() {
  return this.Db.$();
};
yf.prototype.next = function() {
  if (this.Db.$()) {
    return this.Db.next().aa[0];
  }
  throw Error("No such element");
};
yf.prototype.remove = function() {
  return Error("Unsupported operation");
};
function zf(a, b, c) {
  this.l = a;
  this.Na = b;
  this.m = c;
  this.j = 15077647;
  this.v = 8196;
}
g = zf.prototype;
g.toString = function() {
  return Pb(this);
};
g.equiv = function(a) {
  return this.s(null, a);
};
g.keys = function() {
  return Q(K(this));
};
g.entries = function() {
  var a = K(this);
  return new Ke(K(a));
};
g.values = function() {
  return Q(K(this));
};
g.has = function(a) {
  return Yc(this, a);
};
g.forEach = function(a) {
  for (var b = K(this), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.S(null, e), h = U(f, 0), f = U(f, 1);
      a.a ? a.a(f, h) : a.call(null, f, h);
      e += 1;
    } else {
      if (b = K(b)) {
        Sc(b) ? (c = Gb(b), b = Hb(b), h = c, d = S(c), c = h) : (c = M(b), h = U(c, 0), f = U(c, 1), a.a ? a.a(f, h) : a.call(null, f, h), b = P(b), c = null, d = 0), e = 0;
      } else {
        return null;
      }
    }
  }
};
g.L = function(a, b) {
  return H.f(this, b, null);
};
g.G = function(a, b, c) {
  return Ua(this.Na, b) ? b : c;
};
g.ma = function() {
  return new yf(Nb(this.Na));
};
g.M = function() {
  return this.l;
};
g.R = function() {
  return Na(this.Na);
};
g.J = function() {
  var a = this.m;
  return null != a ? a : this.m = a = kc(this);
};
g.s = function(a, b) {
  return Oc(b) && S(this) === S(b) && Rd(function(a) {
    return function(b) {
      return Yc(a, b);
    };
  }(this), b);
};
g.Xa = function() {
  return new Af(xb(this.Na));
};
g.V = function() {
  return Ac(Bf, this.l);
};
g.Jb = function(a, b) {
  return new zf(this.l, Ya(this.Na, b), null);
};
g.P = function() {
  return Oe(this.Na);
};
g.N = function(a, b) {
  return new zf(b, this.Na, this.m);
};
g.O = function(a, b) {
  return new zf(this.l, V.f(this.Na, b, null), null);
};
g.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.L(null, c);
      case 3:
        return this.G(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a, c) {
    return this.L(null, c);
  };
  a.f = function(a, c, d) {
    return this.G(null, c, d);
  };
  return a;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Ja(b)));
};
g.b = function(a) {
  return this.L(null, a);
};
g.a = function(a, b) {
  return this.G(null, a, b);
};
var Bf = new zf(null, Qd, lc);
zf.prototype[Ia] = function() {
  return Q(this);
};
function Af(a) {
  this.Ma = a;
  this.v = 136;
  this.j = 259;
}
g = Af.prototype;
g.Sa = function(a, b) {
  this.Ma = Ab(this.Ma, b, null);
  return this;
};
g.Za = function() {
  return new zf(null, zb(this.Ma), null);
};
g.R = function() {
  return S(this.Ma);
};
g.L = function(a, b) {
  return H.f(this, b, null);
};
g.G = function(a, b, c) {
  return H.f(this.Ma, b, Wc) === Wc ? c : b;
};
g.call = function() {
  function a(a, b, c) {
    return H.f(this.Ma, b, Wc) === Wc ? c : b;
  }
  function b(a, b) {
    return H.f(this.Ma, b, Wc) === Wc ? null : b;
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.f = a;
  return c;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Ja(b)));
};
g.b = function(a) {
  return H.f(this.Ma, a, Wc) === Wc ? null : a;
};
g.a = function(a, b) {
  return H.f(this.Ma, a, Wc) === Wc ? b : a;
};
function Cf(a) {
  a = K(a);
  if (null == a) {
    return Bf;
  }
  if (a instanceof L && 0 === a.h) {
    a = a.c;
    a: {
      for (var b = 0, c = xb(Bf);;) {
        if (b < a.length) {
          var d = b + 1, c = c.Sa(null, a[b]), b = d
        } else {
          break a;
        }
      }
    }
    return c.Za(null);
  }
  for (d = xb(Bf);;) {
    if (null != a) {
      b = P(a), d = d.Sa(null, a.W(null)), a = b;
    } else {
      return zb(d);
    }
  }
}
function vd(a) {
  if (null != a && (a.v & 4096 || a.ac)) {
    return a.name;
  }
  if ("string" === typeof a) {
    return a;
  }
  throw Error([z("Doesn't support name: "), z(a)].join(""));
}
function Ef(a, b, c) {
  this.h = a;
  this.end = b;
  this.step = c;
}
Ef.prototype.$ = function() {
  return 0 < this.step ? this.h < this.end : this.h > this.end;
};
Ef.prototype.next = function() {
  var a = this.h;
  this.h += this.step;
  return a;
};
function Ff(a, b, c, d, e) {
  this.l = a;
  this.start = b;
  this.end = c;
  this.step = d;
  this.m = e;
  this.j = 32375006;
  this.v = 8192;
}
g = Ff.prototype;
g.toString = function() {
  return Pb(this);
};
g.equiv = function(a) {
  return this.s(null, a);
};
g.S = function(a, b) {
  if (b < Na(this)) {
    return this.start + b * this.step;
  }
  if (this.start > this.end && 0 === this.step) {
    return this.start;
  }
  throw Error("Index out of bounds");
};
g.ha = function(a, b, c) {
  return b < Na(this) ? this.start + b * this.step : this.start > this.end && 0 === this.step ? this.start : c;
};
g.ma = function() {
  return new Ef(this.start, this.end, this.step);
};
g.M = function() {
  return this.l;
};
g.ba = function() {
  return 0 < this.step ? this.start + this.step < this.end ? new Ff(this.l, this.start + this.step, this.end, this.step, null) : null : this.start + this.step > this.end ? new Ff(this.l, this.start + this.step, this.end, this.step, null) : null;
};
g.R = function() {
  return Ga(qb(this)) ? 0 : Math.ceil((this.end - this.start) / this.step);
};
g.J = function() {
  var a = this.m;
  return null != a ? a : this.m = a = ic(this);
};
g.s = function(a, b) {
  return xc(this, b);
};
g.V = function() {
  return Ac(O, this.l);
};
g.Y = function(a, b) {
  return nc(this, b);
};
g.Z = function(a, b, c) {
  for (a = this.start;;) {
    if (0 < this.step ? a < this.end : a > this.end) {
      c = b.a ? b.a(c, a) : b.call(null, c, a), a += this.step;
    } else {
      return c;
    }
  }
};
g.W = function() {
  return null == qb(this) ? null : this.start;
};
g.fa = function() {
  return null != qb(this) ? new Ff(this.l, this.start + this.step, this.end, this.step, null) : O;
};
g.P = function() {
  return 0 < this.step ? this.start < this.end ? this : null : 0 > this.step ? this.start > this.end ? this : null : this.start === this.end ? null : this;
};
g.N = function(a, b) {
  return new Ff(b, this.start, this.end, this.step, this.m);
};
g.O = function(a, b) {
  return R(b, this);
};
Ff.prototype[Ia] = function() {
  return Q(this);
};
function Gf(a) {
  for (;;) {
    if (K(a)) {
      a = P(a);
    } else {
      return null;
    }
  }
}
function Hf(a, b, c, d, e, f, h) {
  var k = za;
  za = null == za ? null : za - 1;
  try {
    if (null != za && 0 > za) {
      return I(a, "#");
    }
    I(a, c);
    if (0 === (new q(null, "print-length", "print-length", 1931866356)).b(f)) {
      K(h) && I(a, function() {
        var a = (new q(null, "more-marker", "more-marker", -14717935)).b(f);
        return u(a) ? a : "...";
      }());
    } else {
      if (K(h)) {
        var l = M(h);
        b.f ? b.f(l, a, f) : b.call(null, l, a, f);
      }
      for (var m = P(h), n = (new q(null, "print-length", "print-length", 1931866356)).b(f) - 1;;) {
        if (!m || null != n && 0 === n) {
          K(m) && 0 === n && (I(a, d), I(a, function() {
            var a = (new q(null, "more-marker", "more-marker", -14717935)).b(f);
            return u(a) ? a : "...";
          }()));
          break;
        } else {
          I(a, d);
          var r = M(m);
          c = a;
          h = f;
          b.f ? b.f(r, c, h) : b.call(null, r, c, h);
          var t = P(m);
          c = n - 1;
          m = t;
          n = c;
        }
      }
    }
    return I(a, e);
  } finally {
    za = k;
  }
}
function If(a, b) {
  for (var c = K(b), d = null, e = 0, f = 0;;) {
    if (f < e) {
      var h = d.S(null, f);
      I(a, h);
      f += 1;
    } else {
      if (c = K(c)) {
        d = c, Sc(d) ? (c = Gb(d), e = Hb(d), d = c, h = S(c), c = e, e = h) : (h = M(d), I(a, h), c = P(d), d = null, e = 0), f = 0;
      } else {
        return null;
      }
    }
  }
}
var Jf = {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"};
function Kf(a) {
  return [z('"'), z(a.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function(a) {
    return Jf[a];
  })), z('"')].join("");
}
function Lf(a, b) {
  var c = Xc(J(a, new q(null, "meta", "meta", 1499536964)));
  return c ? (c = null != b ? b.j & 131072 || b.$b ? !0 : !1 : !1) ? null != Nc(b) : c : c;
}
function Mf(a, b, c) {
  if (null == a) {
    return I(b, "nil");
  }
  if (Lf(c, a)) {
    I(b, "^");
    var d = Nc(a);
    Z.f ? Z.f(d, b, c) : Z.call(null, d, b, c);
    I(b, " ");
  }
  if (a.Nb) {
    return a.ic(b);
  }
  if (null != a && (a.j & 2147483648 || a.U)) {
    return a.H(null, b, c);
  }
  if (!0 === a || !1 === a || "number" === typeof a) {
    return I(b, "" + z(a));
  }
  if (null != a && a.constructor === Object) {
    return I(b, "#js "), d = Y.a(function(b) {
      return new W(null, 2, 5, X, [ud.b(b), a[b]], null);
    }, Uc(a)), Nf.C ? Nf.C(d, Z, b, c) : Nf.call(null, d, Z, b, c);
  }
  if (Fa(a)) {
    return Hf(b, Z, "#js [", " ", "]", c, a);
  }
  if (ba(a)) {
    return u((new q(null, "readably", "readably", 1129599760)).b(c)) ? I(b, Kf(a)) : I(b, a);
  }
  if (ca(a)) {
    var e = a.name;
    c = u(function() {
      var a = null == e;
      return a ? a : /^[\s\xa0]*$/.test(e);
    }()) ? "Function" : e;
    return If(b, zc(["#object[", c, ' "', "" + z(a), '"]'], 0));
  }
  if (a instanceof Date) {
    return c = function(a, b) {
      for (var c = "" + z(a);;) {
        if (S(c) < b) {
          c = [z("0"), z(c)].join("");
        } else {
          return c;
        }
      }
    }, If(b, zc(['#inst "', "" + z(a.getUTCFullYear()), "-", c(a.getUTCMonth() + 1, 2), "-", c(a.getUTCDate(), 2), "T", c(a.getUTCHours(), 2), ":", c(a.getUTCMinutes(), 2), ":", c(a.getUTCSeconds(), 2), ".", c(a.getUTCMilliseconds(), 3), "-", '00:00"'], 0));
  }
  if (a instanceof RegExp) {
    return If(b, zc(['#"', a.source, '"'], 0));
  }
  if (null != a && (a.j & 2147483648 || a.U)) {
    return vb(a, b, c);
  }
  if (u(a.constructor.qb)) {
    return If(b, zc(["#object[", a.constructor.qb.replace(RegExp("/", "g"), "."), "]"], 0));
  }
  e = a.constructor.name;
  c = u(function() {
    var a = null == e;
    return a ? a : /^[\s\xa0]*$/.test(e);
  }()) ? "Object" : e;
  return If(b, zc(["#object[", c, " ", "" + z(a), "]"], 0));
}
function Z(a, b, c) {
  var d = (new q(null, "alt-impl", "alt-impl", 670969595)).b(c);
  return u(d) ? (c = V.f(c, new q(null, "fallback-impl", "fallback-impl", -1501286995), Mf), d.f ? d.f(a, b, c) : d.call(null, a, b, c)) : Mf(a, b, c);
}
function Of(a, b) {
  var c;
  if (null == a || Ga(K(a))) {
    c = "";
  } else {
    c = z;
    var d = new la;
    a: {
      var e = new Ob(d);
      Z(M(a), e, b);
      for (var f = K(P(a)), h = null, k = 0, l = 0;;) {
        if (l < k) {
          var m = h.S(null, l);
          I(e, " ");
          Z(m, e, b);
          l += 1;
        } else {
          if (f = K(f)) {
            h = f, Sc(h) ? (f = Gb(h), k = Hb(h), h = f, m = S(f), f = k, k = m) : (m = M(h), I(e, " "), Z(m, e, b), f = P(h), h = null, k = 0), l = 0;
          } else {
            break a;
          }
        }
      }
    }
    c = "" + c(d);
  }
  return c;
}
function $d(a) {
  for (var b = [], c = arguments.length, d = 0;;) {
    if (d < c) {
      b.push(arguments[d]), d += 1;
    } else {
      break;
    }
  }
  return Of(0 < b.length ? new L(b.slice(0), 0) : null, Ba());
}
function Pf(a) {
  var b = V.f(Ba(), new q(null, "readably", "readably", 1129599760), !1);
  a = Of(a, b);
  wa.b ? wa.b(a) : wa.call(null);
  u(!0) && (a = Ba(), wa.b ? wa.b("\n") : wa.call(null), J(a, new q(null, "flush-on-newline", "flush-on-newline", -151457939)));
}
function Nf(a, b, c, d) {
  return Hf(c, function(a, c, d) {
    var k = $a(a);
    b.f ? b.f(k, c, d) : b.call(null, k, c, d);
    I(c, " ");
    a = ab(a);
    return b.f ? b.f(a, c, d) : b.call(null, a, c, d);
  }, "{", ", ", "}", d, K(a));
}
L.prototype.U = !0;
L.prototype.H = function(a, b, c) {
  return Hf(b, Z, "(", " ", ")", c, this);
};
wd.prototype.U = !0;
wd.prototype.H = function(a, b, c) {
  return Hf(b, Z, "(", " ", ")", c, this);
};
nf.prototype.U = !0;
nf.prototype.H = function(a, b, c) {
  return Hf(b, Z, "(", " ", ")", c, this);
};
Me.prototype.U = !0;
Me.prototype.H = function(a, b, c) {
  return Hf(b, Z, "(", " ", ")", c, this);
};
we.prototype.U = !0;
we.prototype.H = function(a, b, c) {
  return Hf(b, Z, "(", " ", ")", c, this);
};
rd.prototype.U = !0;
rd.prototype.H = function(a, b, c) {
  return Hf(b, Z, "(", " ", ")", c, this);
};
wc.prototype.U = !0;
wc.prototype.H = function(a, b, c) {
  return Hf(b, Z, "(", " ", ")", c, this);
};
sf.prototype.U = !0;
sf.prototype.H = function(a, b, c) {
  return Nf(this, Z, b, c);
};
pf.prototype.U = !0;
pf.prototype.H = function(a, b, c) {
  return Hf(b, Z, "(", " ", ")", c, this);
};
Ae.prototype.U = !0;
Ae.prototype.H = function(a, b, c) {
  return Hf(b, Z, "[", " ", "]", c, this);
};
zf.prototype.U = !0;
zf.prototype.H = function(a, b, c) {
  return Hf(b, Z, "#{", " ", "}", c, this);
};
Ad.prototype.U = !0;
Ad.prototype.H = function(a, b, c) {
  return Hf(b, Z, "(", " ", ")", c, this);
};
Vd.prototype.U = !0;
Vd.prototype.H = function(a, b, c) {
  I(b, "#object [cljs.core.Atom ");
  Z(new Ca(null, 1, [new q(null, "val", "val", 128701612), this.state], null), b, c);
  return I(b, "]");
};
wf.prototype.U = !0;
wf.prototype.H = function(a, b, c) {
  return Hf(b, Z, "(", " ", ")", c, this);
};
W.prototype.U = !0;
W.prototype.H = function(a, b, c) {
  return Hf(b, Z, "[", " ", "]", c, this);
};
od.prototype.U = !0;
od.prototype.H = function(a, b) {
  return I(b, "()");
};
Ca.prototype.U = !0;
Ca.prototype.H = function(a, b, c) {
  return Nf(this, Z, b, c);
};
Ff.prototype.U = !0;
Ff.prototype.H = function(a, b, c) {
  return Hf(b, Z, "(", " ", ")", c, this);
};
vf.prototype.U = !0;
vf.prototype.H = function(a, b, c) {
  return Hf(b, Z, "(", " ", ")", c, this);
};
nd.prototype.U = !0;
nd.prototype.H = function(a, b, c) {
  return Hf(b, Z, "(", " ", ")", c, this);
};
ac.prototype.bb = !0;
ac.prototype.Wa = function(a, b) {
  if (b instanceof ac) {
    return $b(this, b);
  }
  throw Error([z("Cannot compare "), z(this), z(" to "), z(b)].join(""));
};
q.prototype.bb = !0;
q.prototype.Wa = function(a, b) {
  if (b instanceof q) {
    return sd(this, b);
  }
  throw Error([z("Cannot compare "), z(this), z(" to "), z(b)].join(""));
};
Ae.prototype.bb = !0;
Ae.prototype.Wa = function(a, b) {
  if (Rc(b)) {
    return $c(this, b);
  }
  throw Error([z("Cannot compare "), z(this), z(" to "), z(b)].join(""));
};
W.prototype.bb = !0;
W.prototype.Wa = function(a, b) {
  if (Rc(b)) {
    return $c(this, b);
  }
  throw Error([z("Cannot compare "), z(this), z(" to "), z(b)].join(""));
};
var Qf;
a: {
  var Rf = aa.navigator;
  if (Rf) {
    var Sf = Rf.userAgent;
    if (Sf) {
      Qf = Sf;
      break a;
    }
  }
  Qf = "";
}
;var Tf = -1 != Qf.indexOf("Opera") || -1 != Qf.indexOf("OPR"), Uf = -1 != Qf.indexOf("Trident") || -1 != Qf.indexOf("MSIE"), Vf = -1 != Qf.indexOf("Edge"), Wf = -1 != Qf.indexOf("Gecko") && !(-1 != Qf.toLowerCase().indexOf("webkit") && -1 == Qf.indexOf("Edge")) && !(-1 != Qf.indexOf("Trident") || -1 != Qf.indexOf("MSIE")) && -1 == Qf.indexOf("Edge"), Xf = -1 != Qf.toLowerCase().indexOf("webkit") && -1 == Qf.indexOf("Edge");
function Yf() {
  var a = Qf;
  if (Wf) {
    return /rv\:([^\);]+)(\)|;)/.exec(a);
  }
  if (Vf) {
    return /Edge\/([\d\.]+)/.exec(a);
  }
  if (Uf) {
    return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
  }
  if (Xf) {
    return /WebKit\/(\S+)/.exec(a);
  }
}
function Zf() {
  var a = aa.document;
  return a ? a.documentMode : void 0;
}
var $f = function() {
  if (Tf && aa.opera) {
    var a;
    var b = aa.opera.version;
    try {
      a = b();
    } catch (c) {
      a = b;
    }
    return a;
  }
  a = "";
  (b = Yf()) && (a = b ? b[1] : "");
  return Uf && (b = Zf(), b > parseFloat(a)) ? String(b) : a;
}(), ag = {};
function bg(a) {
  var b;
  if (!(b = ag[a])) {
    b = 0;
    for (var c = ga(String($f)).split("."), d = ga(String(a)).split("."), e = Math.max(c.length, d.length), f = 0;0 == b && f < e;f++) {
      var h = c[f] || "", k = d[f] || "", l = RegExp("(\\d*)(\\D*)", "g"), m = RegExp("(\\d*)(\\D*)", "g");
      do {
        var n = l.exec(h) || ["", "", ""], r = m.exec(k) || ["", "", ""];
        if (0 == n[0].length && 0 == r[0].length) {
          break;
        }
        b = ha(0 == n[1].length ? 0 : parseInt(n[1], 10), 0 == r[1].length ? 0 : parseInt(r[1], 10)) || ha(0 == n[2].length, 0 == r[2].length) || ha(n[2], r[2]);
      } while (0 == b);
    }
    b = ag[a] = 0 <= b;
  }
  return b;
}
var cg = aa.document, dg = cg && Uf ? Zf() || ("CSS1Compat" == cg.compatMode ? parseInt($f, 10) : 5) : void 0;
!Wf && !Uf || Uf && 9 <= dg || Wf && bg("1.9.1");
Uf && bg("9");
var eg = new q(null, "y", "y", -1757859776), fg = new q(null, "shift", "shift", 997140064), gg = new q(null, "features", "features", -1146962336), hg = new q(null, "disable-stroke-perspective", "disable-stroke-perspective", 479198433), ig = new q(null, "hsb", "hsb", -753472031), jg = new q(null, "down", "down", 1565245570), kg = new q(null, "disable-depth-mask", "disable-depth-mask", 3298562), lg = new q(null, "upper", "upper", 246243906), mg = new q(null, "burn", "burn", -458179293), ng = new q(null, 
"key-typed", "key-typed", -876037597), og = new q(null, "mouse-clicked", "mouse-clicked", -199339421), pg = new q(null, "mouse-released", "mouse-released", -664480061), qg = new q(null, "fn", "fn", -1175266204), rg = new q(null, "f8", "f8", -2141475484), sg = new q(null, "screen", "screen", 1990059748), tg = new q(null, "enable-depth-test", "enable-depth-test", 1519326084), ug = new q(null, "mouse-exited", "mouse-exited", -483205244), vg = new q(null, "enable-depth-sort", "enable-depth-sort", -383089627), 
wg = new q(null, "f1", "f1", 1714532389), xg = new q(null, "java2d", "java2d", 166099237), yg = new q(null, "disable-texture-mipmaps", "disable-texture-mipmaps", 1697917541), zg = new q(null, "darkest", "darkest", 68197253), Ag = new q(null, "f10", "f10", 627525541), Bg = new q(null, "dodge", "dodge", -1556666427), Cg = new q(null, "disable-stroke-pure", "disable-stroke-pure", 735493926), Dg = new q(null, "replace", "replace", -786587770), Eg = new q(null, "alt", "alt", -3214426), Fg = new q(null, 
"mouse-wheel", "mouse-wheel", 1811662439), Gg = new q(null, "disable-depth-test", "disable-depth-test", 284606407), Hg = new q(null, "keyPressed", "keyPressed", 1791025256), Ig = new q(null, "enable-stroke-perspective", "enable-stroke-perspective", -259923319), Jg = new q(null, "opengl", "opengl", -614998103), Kg = new q(null, "mouse-moved", "mouse-moved", -1918152310), Lg = new q(null, "rgb", "rgb", 1432123467), Ng = new q(null, "mouseOut", "mouseOut", -386669045), Og = new q(null, "f5", "f5", 1587057387), 
Pg = new q(null, "command", "command", -894540724), Qg = new q(null, "mouseScrolled", "mouseScrolled", 31878252), Rg = new q(null, "mouseDragged", "mouseDragged", 129975181), Sg = new q(null, "up", "up", -269712113), Tg = new q(null, "renderer", "renderer", 336841071), Ug = new q(null, "size", "size", 1098693007), Vg = new q(null, "title", "title", 636505583), Wg = new q(null, "setup", "setup", 1987730512), Xg = new q(null, "mouse-pressed", "mouse-pressed", 736955536), Yg = new q(null, "middleware", 
"middleware", 1462115504), Zg = new q(null, "disable-optimized-stroke", "disable-optimized-stroke", 74038544), $g = new q(null, "global-key-events", "global-key-events", 335064944), ah = new q(null, "f11", "f11", -1417398799), bh = new q(null, "host", "host", -1558485167), ch = new q(null, "overlay", "overlay", -139131598), dh = new q(null, "mouse-entered", "mouse-entered", 811350322), eh = new q(null, "enable-opengl-errors", "enable-opengl-errors", 89998962), fh = new q(null, "enable-stroke-pure", 
"enable-stroke-pure", 881345587), gh = new q(null, "no-safe-draw", "no-safe-draw", -1157778157), hh = new q(null, "f3", "f3", 1954829043), ih = new q(null, "enable-depth-mask", "enable-depth-mask", 872785875), jh = new q(null, "key-pressed", "key-pressed", -757100364), kh = new q(null, "key-released", "key-released", 215919828), lh = new q(null, "f2", "f2", 396168596), mh = new q(null, "keyReleased", "keyReleased", 541714964), nh = new q(null, "control", "control", 1892578036), oh = new q(null, "difference", 
"difference", 1916101396), ph = new q(null, "mouseClicked", "mouseClicked", 1764302965), qh = new q(null, "lower", "lower", 1120320821), rh = new q(null, "enable-optimized-stroke", "enable-optimized-stroke", 1537575253), sh = new q(null, "p2d", "p2d", -2106175755), th = new q(null, "keep-on-top", "keep-on-top", -970284267), uh = new q(null, "mouseReleased", "mouseReleased", 1116234838), vh = new q(null, "mousePressed", "mousePressed", 1776186454), wh = new q(null, "mouseMoved", "mouseMoved", -1936954058), 
xh = new q(null, "f12", "f12", 853352790), yh = new q(null, "mouseOver", "mouseOver", -1334461930), zh = new q(null, "exclusion", "exclusion", 531897910), Ah = new q(null, "disable-opengl-errors", "disable-opengl-errors", 506822839), Bh = new q(null, "right", "right", -452581833), Ch = new q(null, "host-id", "host-id", 742376279), Dh = new q(null, "hard-light", "hard-light", -37591145), Eh = new q(null, "keyTyped", "keyTyped", 1437329399), Fh = new q(null, "no-start", "no-start", 1381488856), Gh = 
new q(null, "multiply", "multiply", -1036907048), Hh = new q(null, "lightest", "lightest", -2043115912), Ih = new q(null, "f7", "f7", 356150168), Jh = new q(null, "x", "x", 2099068185), Kh = new q(null, "blend", "blend", 249565561), Lh = new q(null, "disable-depth-sort", "disable-depth-sort", -1568352839), Mh = new q(null, "f9", "f9", 704633338), Nh = new q(null, "draw", "draw", 1358331674), Oh = new q(null, "add", "add", 235287739), Ph = new q(null, "soft-light", "soft-light", 513207899), Qh = new q(null, 
"subtract", "subtract", 2136988635), Rh = new q(null, "f6", "f6", 2103080604), Sh = new q(null, "f4", "f4", 990968764), Th = new q(null, "p3d", "p3d", -850380194), Uh = new q(null, "mouse-dragged", "mouse-dragged", -1220073441), Vh = new q(null, "left", "left", -399115937), Wh = new q(null, "enable-texture-mipmaps", "enable-texture-mipmaps", 1241892671);
var Xh = new Ca(null, 3, [new q(null, "decor", "decor", -1730969431), new W(null, 2, 5, X, ["2.0", "Try :features [:present] for similar effect"], null), new q(null, "target", "target", 253001721), new W(null, 2, 5, X, ["2.0", "Use :features [:keep-on-top] instead."], null), new q(null, "safe-draw-fn", "safe-draw-fn", 1454900202), new W(null, 2, 5, X, ["2.0", "Use :features [:no-safe-fns] instead."], null)], null);
function Yh(a) {
  a = Cf(a);
  u(a.b ? a.b(gh) : a.call(null, gh)) && Pf(zc(["Feature :no-safe-draw was renamed to :no-safe-fns in Quil 2.1.", "Use :feature [:no-safe-fns] now."], 0));
  return null == a ? null : cb(a, gh);
}
function Zh(a) {
  var b = ee.f(a, new W(null, 1, 5, X, [gg], null), Yh);
  return de(Qd, ce(Ea, function() {
    return function(a) {
      return function e(b) {
        return new wd(null, function() {
          return function() {
            for (;;) {
              var a = K(b);
              if (a) {
                if (Sc(a)) {
                  var c = Gb(a), l = S(c), m = new yd(Array(l), 0);
                  return function() {
                    for (var a = 0;;) {
                      if (a < l) {
                        var b = D.a(c, a), e = U(b, 0), f = U(b, 1), b = m;
                        var h = Xh.b ? Xh.b(e) : Xh.call(null, e);
                        u(h) ? (f = U(h, 0), h = U(h, 1), Pf(zc([e, "option was removed in Quil", f, ".", h], 0)), e = null) : e = new W(null, 2, 5, X, [e, f], null);
                        b.add(e);
                        a += 1;
                      } else {
                        return !0;
                      }
                    }
                  }() ? Bd(m.ka(), e(Hb(a))) : Bd(m.ka(), null);
                }
                var n = M(a), r = U(n, 0), t = U(n, 1);
                return R(function() {
                  var a = Xh.b ? Xh.b(r) : Xh.call(null, r);
                  if (u(a)) {
                    var b = U(a, 0), a = U(a, 1);
                    Pf(zc([r, "option was removed in Quil", b, ".", a], 0));
                    return null;
                  }
                  return new W(null, 2, 5, X, [r, t], null);
                }(), e(dc(a)));
              }
              return null;
            }
          };
        }(a), null, null);
      };
    }(b)(b);
  }()));
}
;var $h = !Uf || 9 <= dg, ai = Uf && !bg("9");
!Xf || bg("528");
Wf && bg("1.9b") || Uf && bg("8") || Tf && bg("9.5") || Xf && bg("528");
Wf && !bg("8") || Uf && bg("9");
function bi(a, b) {
  this.type = a;
  this.currentTarget = this.target = b;
  this.defaultPrevented = this.Eb = !1;
}
bi.prototype.stopPropagation = function() {
  this.Eb = !0;
};
bi.prototype.preventDefault = function() {
  this.defaultPrevented = !0;
};
function ci(a) {
  ci[" "](a);
  return a;
}
ci[" "] = function() {
};
function di(a, b) {
  bi.call(this, a ? a.type : "");
  this.relatedTarget = this.currentTarget = this.target = null;
  this.charCode = this.keyCode = this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
  this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
  this.fb = this.state = null;
  if (a) {
    var c = this.type = a.type, d = a.changedTouches ? a.changedTouches[0] : null;
    this.target = a.target || a.srcElement;
    this.currentTarget = b;
    var e = a.relatedTarget;
    if (e) {
      if (Wf) {
        var f;
        a: {
          try {
            ci(e.nodeName);
            f = !0;
            break a;
          } catch (h) {
          }
          f = !1;
        }
        f || (e = null);
      }
    } else {
      "mouseover" == c ? e = a.fromElement : "mouseout" == c && (e = a.toElement);
    }
    this.relatedTarget = e;
    null === d ? (this.offsetX = Xf || void 0 !== a.offsetX ? a.offsetX : a.layerX, this.offsetY = Xf || void 0 !== a.offsetY ? a.offsetY : a.layerY, this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0) : (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 
    0);
    this.button = a.button;
    this.keyCode = a.keyCode || 0;
    this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
    this.ctrlKey = a.ctrlKey;
    this.altKey = a.altKey;
    this.shiftKey = a.shiftKey;
    this.metaKey = a.metaKey;
    this.state = a.state;
    this.fb = a;
    a.defaultPrevented && this.preventDefault();
  }
}
(function() {
  function a() {
  }
  a.prototype = bi.prototype;
  di.Rb = bi.prototype;
  di.prototype = new a;
  di.prototype.constructor = di;
  di.kb = function(a, c, d) {
    for (var e = Array(arguments.length - 2), f = 2;f < arguments.length;f++) {
      e[f - 2] = arguments[f];
    }
    return bi.prototype[c].apply(a, e);
  };
})();
di.prototype.stopPropagation = function() {
  di.Rb.stopPropagation.call(this);
  this.fb.stopPropagation ? this.fb.stopPropagation() : this.fb.cancelBubble = !0;
};
di.prototype.preventDefault = function() {
  di.Rb.preventDefault.call(this);
  var a = this.fb;
  if (a.preventDefault) {
    a.preventDefault();
  } else {
    if (a.returnValue = !1, ai) {
      try {
        if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) {
          a.keyCode = -1;
        }
      } catch (b) {
      }
    }
  }
};
var ei = "closure_listenable_" + (1E6 * Math.random() | 0), fi = 0;
function gi(a, b, c, d, e) {
  this.listener = a;
  this.rb = null;
  this.src = b;
  this.type = c;
  this.lb = !!d;
  this.Cb = e;
  this.key = ++fi;
  this.jb = this.ub = !1;
}
function hi(a) {
  a.jb = !0;
  a.listener = null;
  a.rb = null;
  a.src = null;
  a.Cb = null;
}
;function ii(a) {
  this.src = a;
  this.qa = {};
  this.sb = 0;
}
ii.prototype.add = function(a, b, c, d, e) {
  var f = a.toString();
  a = this.qa[f];
  a || (a = this.qa[f] = [], this.sb++);
  var h = ji(a, b, d, e);
  -1 < h ? (b = a[h], c || (b.ub = !1)) : (b = new gi(b, this.src, f, !!d, e), b.ub = c, a.push(b));
  return b;
};
ii.prototype.remove = function(a, b, c, d) {
  a = a.toString();
  if (!(a in this.qa)) {
    return !1;
  }
  var e = this.qa[a];
  b = ji(e, b, c, d);
  return -1 < b ? (hi(e[b]), ma.splice.call(e, b, 1), 0 == e.length && (delete this.qa[a], this.sb--), !0) : !1;
};
ii.prototype.hasListener = function(a, b) {
  var c = void 0 !== a, d = c ? a.toString() : "", e = void 0 !== b;
  return ka(this.qa, function(a) {
    for (var h = 0;h < a.length;++h) {
      if (!(c && a[h].type != d || e && a[h].lb != b)) {
        return !0;
      }
    }
    return !1;
  });
};
function ji(a, b, c, d) {
  for (var e = 0;e < a.length;++e) {
    var f = a[e];
    if (!f.jb && f.listener == b && f.lb == !!c && f.Cb == d) {
      return e;
    }
  }
  return -1;
}
;var ki = "closure_lm_" + (1E6 * Math.random() | 0), li = {}, mi = 0;
function ni() {
  var a = oi, b = $h ? function(c) {
    return a.call(b.src, b.listener, c);
  } : function(c) {
    c = a.call(b.src, b.listener, c);
    if (!c) {
      return c;
    }
  };
  return b;
}
function pi(a, b, c, d, e) {
  if ("array" == p(b)) {
    for (var f = 0;f < b.length;f++) {
      pi(a, b[f], c, d, e);
    }
  } else {
    if (c = qi(c), a && a[ei]) {
      a.zc(b, c, d, e);
    } else {
      if (!b) {
        throw Error("Invalid event type");
      }
      var f = !!d, h = ri(a);
      h || (a[ki] = h = new ii(a));
      c = h.add(b, c, !0, d, e);
      if (!c.rb) {
        d = ni();
        c.rb = d;
        d.src = a;
        d.listener = c;
        if (a.addEventListener) {
          a.addEventListener(b.toString(), d, f);
        } else {
          if (a.attachEvent) {
            a.attachEvent(si(b.toString()), d);
          } else {
            throw Error("addEventListener and attachEvent are unavailable.");
          }
        }
        mi++;
      }
    }
  }
}
function si(a) {
  return a in li ? li[a] : li[a] = "on" + a;
}
function ti(a, b, c, d) {
  var e = !0;
  if (a = ri(a)) {
    if (b = a.qa[b.toString()]) {
      for (b = b.concat(), a = 0;a < b.length;a++) {
        var f = b[a];
        f && f.lb == c && !f.jb && (f = ui(f, d), e = e && !1 !== f);
      }
    }
  }
  return e;
}
function ui(a, b) {
  var c = a.listener, d = a.Cb || a.src;
  if (a.ub && "number" != typeof a && a && !a.jb) {
    var e = a.src;
    if (e && e[ei]) {
      e.Cc(a);
    } else {
      var f = a.type, h = a.rb;
      e.removeEventListener ? e.removeEventListener(f, h, a.lb) : e.detachEvent && e.detachEvent(si(f), h);
      mi--;
      if (f = ri(e)) {
        var h = a.type, k;
        if (k = h in f.qa) {
          k = f.qa[h];
          var l = na(k, a), m;
          (m = 0 <= l) && ma.splice.call(k, l, 1);
          k = m;
        }
        k && (hi(a), 0 == f.qa[h].length && (delete f.qa[h], f.sb--));
        0 == f.sb && (f.src = null, e[ki] = null);
      } else {
        hi(a);
      }
    }
  }
  return c.call(d, b);
}
function oi(a, b) {
  if (a.jb) {
    return !0;
  }
  if (!$h) {
    var c;
    if (!(c = b)) {
      a: {
        c = ["window", "event"];
        for (var d = aa, e;e = c.shift();) {
          if (null != d[e]) {
            d = d[e];
          } else {
            c = null;
            break a;
          }
        }
        c = d;
      }
    }
    e = c;
    c = new di(e, this);
    d = !0;
    if (!(0 > e.keyCode || void 0 != e.returnValue)) {
      a: {
        var f = !1;
        if (0 == e.keyCode) {
          try {
            e.keyCode = -1;
            break a;
          } catch (l) {
            f = !0;
          }
        }
        if (f || void 0 == e.returnValue) {
          e.returnValue = !0;
        }
      }
      e = [];
      for (f = c.currentTarget;f;f = f.parentNode) {
        e.push(f);
      }
      for (var f = a.type, h = e.length - 1;!c.Eb && 0 <= h;h--) {
        c.currentTarget = e[h];
        var k = ti(e[h], f, !0, c), d = d && k;
      }
      for (h = 0;!c.Eb && h < e.length;h++) {
        c.currentTarget = e[h], k = ti(e[h], f, !1, c), d = d && k;
      }
    }
    return d;
  }
  return ui(a, new di(b, this));
}
function ri(a) {
  a = a[ki];
  return a instanceof ii ? a : null;
}
var vi = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
function qi(a) {
  if (ca(a)) {
    return a;
  }
  a[vi] || (a[vi] = function(b) {
    return a.handleEvent(b);
  });
  return a[vi];
}
;function wi(a, b) {
  if (u(J(b, a))) {
    return J(b, a);
  }
  var c;
  a: {
    c = [a];
    var d = c.length;
    if (d <= Re) {
      for (var e = 0, f = xb(Qd);;) {
        if (e < d) {
          var h = e + 1, f = Ab(f, c[e], null), e = h
        } else {
          c = new zf(null, zb(f), null);
          break a;
        }
      }
    } else {
      for (e = 0, f = xb(Bf);;) {
        if (e < d) {
          h = e + 1, f = yb(f, c[e]), e = h;
        } else {
          c = zb(f);
          break a;
        }
      }
    }
  }
  if (u(Sd(c, Pe(b)))) {
    return a;
  }
  throw Error([z("Expecting a keyword, got: "), z(a), z(". Expected one of: "), z(ve(bd(Oe(b))))].join(""));
}
;var xi = null, yi = new Ca(null, 4, [xg, Processing.prototype.PConstants.JAVA2D, sh, Processing.prototype.PConstants.P2D, Th, Processing.prototype.PConstants.P3D, Jg, Processing.prototype.PConstants.OPENGL], null), zi = function zi(b) {
  for (var c = [], d = arguments.length, e = 0;;) {
    if (e < d) {
      c.push(arguments[e]), e += 1;
    } else {
      break;
    }
  }
  switch(c.length) {
    case 2:
      return zi.a(arguments[0], arguments[1]);
    case 3:
      return zi.f(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([z("Invalid arity: "), z(c.length)].join(""));;
  }
};
zi.a = function(a, b) {
  return xi.size(a | 0, b | 0);
};
zi.f = function(a, b, c) {
  return xi.size(a | 0, b | 0, wi(c, yi));
};
zi.D = 3;
function Ai(a, b) {
  for (var c = K(Ic([Hg, Ng, Qg, Rg, Wg, mh, ph, uh, vh, wh, yh, Eh, Nh], [jh, ug, Fg, Uh, Wg, kh, og, pg, Xg, Kg, dh, ng, Nh])), d = null, e = 0, f = 0;;) {
    if (f < e) {
      var h = d.S(null, f), k = U(h, 0), l = U(h, 1), m = b.b ? b.b(l) : b.call(null, l);
      if (u(m)) {
        var n = m;
        a[vd(k)] = function(b, c, d, e, f) {
          return function() {
            var b = xi;
            xi = a;
            try {
              return f.u ? f.u() : f.call(null);
            } finally {
              xi = b;
            }
          };
        }(c, d, e, f, n, m, h, k, l);
      }
      f += 1;
    } else {
      if (m = K(c)) {
        h = m;
        if (Sc(h)) {
          c = Gb(h), f = Hb(h), d = c, e = S(c), c = f;
        } else {
          var n = M(h), k = U(n, 0), l = U(n, 1), r = b.b ? b.b(l) : b.call(null, l);
          if (u(r)) {
            var t = r;
            a[vd(k)] = function(b, c, d, e, f) {
              return function() {
                var b = xi;
                xi = a;
                try {
                  return f.u ? f.u() : f.call(null);
                } finally {
                  xi = b;
                }
              };
            }(c, d, e, f, t, r, n, k, l, h, m);
          }
          c = P(h);
          d = null;
          e = 0;
        }
        f = 0;
      } else {
        break;
      }
    }
  }
}
function Bi(a) {
  var b = xf(zc([new Ca(null, 1, [Ug, new W(null, 2, 5, X, [500, 300], null)], null), function(b) {
    return b.b ? b.b(a) : b.call(null, a);
  }.call(null, Jd(Ud, R(Zh, Yg.a(a, Fc))))], 0)), c = function() {
    var a = Ug.b(b);
    return u(a) ? a : new W(null, 2, 5, X, [200, 200], null);
  }(), d = Tg.b(b), e = Cf(gg.b(b)), f = ee.f(ee.f(b, new W(null, 1, 5, X, [Wg], null), function(a, b, c, d) {
    return function(e) {
      return function(a, b, c) {
        return function() {
          Jd(zi, Fd.a(b, u(c) ? new W(null, 1, 5, X, [c], null) : Fc));
          return u(e) ? e.u ? e.u() : e.call(null) : null;
        };
      }(a, b, c, d);
    };
  }(b, c, d, e)), new W(null, 1, 5, X, [Fg], null), function(a, b, c, d) {
    return function(e) {
      return u(e) ? function() {
        return function() {
          var a = -1 * xi.mouseScroll;
          return e.b ? e.b(a) : e.call(null, a);
        };
      }(a, b, c, d) : null;
    };
  }(b, c, d, e)), c = new Processing.Sketch(function(a, b, c, d, e) {
    return function(a) {
      Ai(a, e);
      a.Ac = Xd ? Xd(null) : Wd.call(null, null);
      return a.Bc = Xd ? Xd(60) : Wd.call(null, 60);
    };
  }(b, c, d, e, f));
  Yc(e, $g) && (c.options.globalKeyEvents = !0);
  return c;
}
var Ci = function Ci(b) {
  for (var c = [], d = arguments.length, e = 0;;) {
    if (e < d) {
      c.push(arguments[e]), e += 1;
    } else {
      break;
    }
  }
  return Ci.o(0 < c.length ? new L(c.slice(0), 0) : null);
};
Ci.o = function(a) {
  var b = Jd(Yd, a);
  a = function() {
    var a = bh.b(b), c = document;
    return ba(a) ? c.getElementById(a) : a;
  }();
  var c = function() {
    var a = Tg.b(b);
    return u(a) ? a : sh;
  }();
  return u(a) ? (u(a.Pb) ? ec.a(c, a.Pb) || console.warn("WARNING: Using different context on one canvas!") : a.Pb = c, new Processing(a, Bi(b))) : console.warn("WARNING: Cannot create sketch. :host is not specified.");
};
Ci.D = 0;
Ci.A = function(a) {
  return Ci.o(K(a));
};
var Di = Xd ? Xd(O) : Wd.call(null, O);
function Ei(a) {
  var b = document.createElement("canvas");
  b.setAttribute("id", a);
  document.body.appendChild(b);
}
pi(window, "load", function() {
  for (var a = 1 >= document.body.childNodes.length, b = K(mc.b ? mc.b(Di) : mc.call(null, Di)), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.S(null, e);
      u(a) && Ei(Ch.b(f));
      qg.b(f).call(null);
      e += 1;
    } else {
      if (b = K(b)) {
        c = b, Sc(c) ? (b = Gb(c), d = Hb(c), c = b, f = S(b), b = d, d = f) : (f = M(c), u(a) && Ei(Ch.b(f)), qg.b(f).call(null), b = P(c), c = null, d = 0), e = 0;
      } else {
        return null;
      }
    }
  }
});
function Fi() {
  return u(null) ? null : xi;
}
Ic([mg, sg, zg, Bg, Dg, ch, oh, zh, Dh, Gh, Hh, Kh, Oh, Ph, Qh], [Processing.prototype.PConstants.BURN, Processing.prototype.PConstants.SCREEN, Processing.prototype.PConstants.DARKEST, Processing.prototype.PConstants.DODGE, Processing.prototype.PConstants.REPLACE, Processing.prototype.PConstants.OVERLAY, Processing.prototype.PConstants.DIFFERENCE, Processing.prototype.PConstants.EXCLUSION, Processing.prototype.PConstants.HARD_LIGHT, Processing.prototype.PConstants.MULTIPLY, Processing.prototype.PConstants.LIGHTEST, 
Processing.prototype.PConstants.BLEND, Processing.prototype.PConstants.ADD, Processing.prototype.PConstants.SOFT_LIGHT, Processing.prototype.PConstants.SUBTRACT]);
var Gi = new Ca(null, 2, [Lg, Processing.prototype.PConstants.RGB, ig, Processing.prototype.PConstants.HSB], null);
Ic([hg, kg, tg, vg, yg, Cg, Gg, Ig, Zg, eh, fh, ih, rh, Ah, Lh, Wh], [Processing.prototype.PConstants.DISABLE_STROKE_PERSPECTIVE, Processing.prototype.PConstants.DISABLE_DEPTH_MASK, Processing.prototype.PConstants.ENABLE_DEPTH_TEST, Processing.prototype.PConstants.ENABLE_DEPTH_SORT, Processing.prototype.PConstants.DISABLE_TEXTURE_MIPMAPS, Processing.prototype.PConstants.DISABLE_STROKE_PURE, Processing.prototype.PConstants.DISABLE_DEPTH_TEST, Processing.prototype.PConstants.ENABLE_STROKE_PERSPECTIVE, 
Processing.prototype.PConstants.DISABLE_OPTIMIZED_STROKE, Processing.prototype.PConstants.ENABLE_OPENGL_ERRORS, Processing.prototype.PConstants.ENABLE_STROKE_PURE, Processing.prototype.PConstants.ENABLE_DEPTH_MASK, Processing.prototype.PConstants.ENABLE_OPTIMIZED_STROKE, Processing.prototype.PConstants.DISABLE_OPENGL_ERRORS, Processing.prototype.PConstants.DISABLE_DEPTH_SORT, Processing.prototype.PConstants.ENABLE_TEXTURE_MIPMAPS]);
Ic([121, 39, 157, 119, 116, 113, 40, 117, 118, 122, 17, 115, 112, 123, 16, 120, 38, 18, 114, 37], [Ag, Bh, Pg, rg, Og, lh, jg, Rh, Ih, ah, nh, Sh, wg, xh, fg, Mh, Sg, Eg, hh, Vh]);
function Hi() {
  var a = 1E3 / 3, b = wi(ig, Gi);
  Fi().colorMode(b | 0, a);
}
function Ii() {
  return Fi()["no-fill-quil"] = !1;
}
var Ji = function Ji(b) {
  for (var c = [], d = arguments.length, e = 0;;) {
    if (e < d) {
      c.push(arguments[e]), e += 1;
    } else {
      break;
    }
  }
  switch(c.length) {
    case 1:
      return Ji.b(arguments[0]);
    case 2:
      return Ji.a(arguments[0], arguments[1]);
    case 3:
      return Ji.f(arguments[0], arguments[1], arguments[2]);
    case 4:
      return Ji.C(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      throw Error([z("Invalid arity: "), z(c.length)].join(""));;
  }
};
Ji.b = function(a) {
  Fi().fill(a);
  return Ii();
};
Ji.a = function(a, b) {
  Fi().fill(a, b);
  return Ii();
};
Ji.f = function(a, b, c) {
  Fi().fill(a, b, c);
  return Ii();
};
Ji.C = function(a, b, c, d) {
  Fi().fill(a, b, c, d);
  return Ii();
};
Ji.D = 4;
var Ki = function Ki(b) {
  for (var c = [], d = arguments.length, e = 0;;) {
    if (e < d) {
      c.push(arguments[e]), e += 1;
    } else {
      break;
    }
  }
  switch(c.length) {
    case 1:
      return Ki.b(arguments[0]);
    case 2:
      return Ki.a(arguments[0], arguments[1]);
    case 3:
      return Ki.f(arguments[0], arguments[1], arguments[2]);
    case 4:
      return Ki.C(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      throw Error([z("Invalid arity: "), z(c.length)].join(""));;
  }
};
Ki.b = function(a) {
  return Fi().stroke(a);
};
Ki.a = function(a, b) {
  return Fi().stroke(a, b);
};
Ki.f = function(a, b, c) {
  return Fi().stroke(a, b, c);
};
Ki.C = function(a, b, c, d) {
  return Fi().stroke(a, b, c, d);
};
Ki.D = 4;
var Li = new W(null, 2, 5, X, [607, 500], null);
function Mi(a, b, c, d, e) {
  this.lower = a;
  this.upper = b;
  this.ja = c;
  this.T = d;
  this.m = e;
  this.j = 2229667594;
  this.v = 8192;
}
g = Mi.prototype;
g.L = function(a, b) {
  return H.f(this, b, null);
};
g.G = function(a, b, c) {
  switch(b instanceof q ? b.na : null) {
    case "lower":
      return this.lower;
    case "upper":
      return this.upper;
    default:
      return bc(this.T, b, c);
  }
};
g.H = function(a, b, c) {
  return Hf(b, function() {
    return function(a) {
      return Hf(b, Z, "", " ", "", c, a);
    };
  }(this), "#sketches.five.Bound{", ", ", "}", c, Fd.a(new W(null, 2, 5, X, [new W(null, 2, 5, X, [qh, this.lower], null), new W(null, 2, 5, X, [lg, this.upper], null)], null), this.T));
};
g.ma = function() {
  return new He(0, this, 2, new W(null, 2, 5, X, [qh, lg], null), Nb(this.T));
};
g.M = function() {
  return this.ja;
};
g.R = function() {
  return 2 + S(this.T);
};
g.J = function() {
  var a = this.m;
  return null != a ? a : this.m = a = kd(this);
};
g.s = function(a, b) {
  var c;
  c = u(b) ? (c = this.constructor === b.constructor) ? Ge(this, b) : c : b;
  return u(c) ? !0 : !1;
};
g.cb = function(a, b) {
  return Yc(new zf(null, new Ca(null, 2, [lg, null, qh, null], null), null), b) ? Jc.a(Ac(de(Qd, this), this.ja), b) : new Mi(this.lower, this.upper, this.ja, Od(Jc.a(this.T, b)), null);
};
g.Ra = function(a, b, c) {
  return u(td.a ? td.a(qh, b) : td.call(null, qh, b)) ? new Mi(c, this.upper, this.ja, this.T, null) : u(td.a ? td.a(lg, b) : td.call(null, lg, b)) ? new Mi(this.lower, c, this.ja, this.T, null) : new Mi(this.lower, this.upper, this.ja, V.f(this.T, b, c), null);
};
g.P = function() {
  return K(Fd.a(new W(null, 2, 5, X, [new W(null, 2, 5, X, [qh, this.lower], null), new W(null, 2, 5, X, [lg, this.upper], null)], null), this.T));
};
g.N = function(a, b) {
  return new Mi(this.lower, this.upper, b, this.T, this.m);
};
g.O = function(a, b) {
  return Rc(b) ? Va(this, D.a(b, 0), D.a(b, 1)) : dd(Qa, this, b);
};
function Ni(a, b, c, d, e) {
  this.x = a;
  this.y = b;
  this.ja = c;
  this.T = d;
  this.m = e;
  this.j = 2229667594;
  this.v = 8192;
}
g = Ni.prototype;
g.L = function(a, b) {
  return H.f(this, b, null);
};
g.G = function(a, b, c) {
  switch(b instanceof q ? b.na : null) {
    case "x":
      return this.x;
    case "y":
      return this.y;
    default:
      return bc(this.T, b, c);
  }
};
g.H = function(a, b, c) {
  return Hf(b, function() {
    return function(a) {
      return Hf(b, Z, "", " ", "", c, a);
    };
  }(this), "#sketches.five.Point{", ", ", "}", c, Fd.a(new W(null, 2, 5, X, [new W(null, 2, 5, X, [Jh, this.x], null), new W(null, 2, 5, X, [eg, this.y], null)], null), this.T));
};
g.ma = function() {
  return new He(0, this, 2, new W(null, 2, 5, X, [Jh, eg], null), Nb(this.T));
};
g.M = function() {
  return this.ja;
};
g.R = function() {
  return 2 + S(this.T);
};
g.J = function() {
  var a = this.m;
  return null != a ? a : this.m = a = kd(this);
};
g.s = function(a, b) {
  var c;
  c = u(b) ? (c = this.constructor === b.constructor) ? Ge(this, b) : c : b;
  return u(c) ? !0 : !1;
};
g.cb = function(a, b) {
  return Yc(new zf(null, new Ca(null, 2, [eg, null, Jh, null], null), null), b) ? Jc.a(Ac(de(Qd, this), this.ja), b) : new Ni(this.x, this.y, this.ja, Od(Jc.a(this.T, b)), null);
};
g.Ra = function(a, b, c) {
  return u(td.a ? td.a(Jh, b) : td.call(null, Jh, b)) ? new Ni(c, this.y, this.ja, this.T, null) : u(td.a ? td.a(eg, b) : td.call(null, eg, b)) ? new Ni(this.x, c, this.ja, this.T, null) : new Ni(this.x, this.y, this.ja, V.f(this.T, b, c), null);
};
g.P = function() {
  return K(Fd.a(new W(null, 2, 5, X, [new W(null, 2, 5, X, [Jh, this.x], null), new W(null, 2, 5, X, [eg, this.y], null)], null), this.T));
};
g.N = function(a, b) {
  return new Ni(this.x, this.y, b, this.T, this.m);
};
g.O = function(a, b) {
  return Rc(b) ? Va(this, D.a(b, 0), D.a(b, 1)) : dd(Qa, this, b);
};
function Oi(a) {
  return R(0, Y.a(function(b) {
    return a / 240 * b;
  }, new Ff(null, 1, 241, 1, null)));
}
function Pi(a) {
  var b = null != a && (a.j & 64 || a.Ya) ? Jd(Yd, a) : a;
  a = J(b, qh);
  b = J(b, lg);
  return Math.floor(Math.random() * (1 + b - a)) + a;
}
function Qi() {
  var a = U(Li, 0), b = U(Li, 1);
  Hi();
  return Gf(Y.a(function(a, b) {
    return function(a) {
      a: {
        var c = Pi(new Mi(200, 400, null, null, null));
        Jd(Ji, new W(null, 3, 5, X, [c, c / 2, c], null));
        Jd(Ki, new W(null, 3, 5, X, [c, c / 2, c], null));
        c = new Ni(0, a, null, null, null);
        for (a = new Mi(-90, 90, null, null, null);;) {
          if (Jh.b(c) < b) {
            var h = c, c = 20 / 5.8, k = Pi(a), l = new W(null, 2, 5, X, [Jh.b(h), eg.b(h)], null), h = U(l, 0), l = U(l, 1), h = c = new Ni(h + c * Math.cos(Math.PI / 180 * k), l + c * Math.sin(Math.PI / 180 * k), null, null, null), k = Jh.b(h), h = eg.b(h);
            Fi().ellipse(k, h, 10, 10);
          } else {
            break a;
          }
        }
      }
      return null;
    };
  }(Li, a, b), Oi(b)));
}
function Ri() {
  return Ci.o(zc([bh, "sketch5", gg, new W(null, 1, 5, X, [th], null), Ug, Kc(Li) ? function() {
    function a(a) {
      var d = null;
      if (0 < arguments.length) {
        for (var d = 0, e = Array(arguments.length - 0);d < e.length;) {
          e[d] = arguments[d + 0], ++d;
        }
        d = new L(e, 0);
      }
      return b.call(this, d);
    }
    function b(a) {
      return Jd(Li, a);
    }
    a.D = 0;
    a.A = function(a) {
      a = K(a);
      return b(a);
    };
    a.o = b;
    return a;
  }() : Li, Vg, "#5", Wg, Kc(Qi) ? function() {
    function a(a) {
      var d = null;
      if (0 < arguments.length) {
        for (var d = 0, e = Array(arguments.length - 0);d < e.length;) {
          e[d] = arguments[d + 0], ++d;
        }
        d = new L(e, 0);
      }
      return b.call(this, d);
    }
    function b(a) {
      return Jd(Qi, a);
    }
    a.D = 0;
    a.A = function(a) {
      a = K(a);
      return b(a);
    };
    a.o = b;
    return a;
  }() : Qi], 0));
}
var Si = ["sketches", "five", "sketches"], Ti = aa;
Si[0] in Ti || !Ti.execScript || Ti.execScript("var " + Si[0]);
for (var Ui;Si.length && (Ui = Si.shift());) {
  Si.length || void 0 === Ri ? Ti = Ti[Ui] ? Ti[Ui] : Ti[Ui] = {} : Ti[Ui] = Ri;
}
u(Sd(function(a) {
  return ec.a(Fh, a);
}, new W(null, 1, 5, X, [th], null))) || ae.f(Di, Ec, new Ca(null, 2, [qg, Ri, Ch, "sketch5"], null));

})();
