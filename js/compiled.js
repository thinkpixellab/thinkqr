'use strict';var k=void 0,l=null,o=false,q=this;function aa(a,b,c){return a.call.apply(a.bind,arguments)}function ba(a,b,c){if(!a)throw Error();if(arguments.length>2){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}else return function(){return a.apply(b,arguments)}}
function r(a,b,c){r=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?aa:ba;return r.apply(l,arguments)};function s(a,b){this.x=a!==k?a:0;this.y=b!==k?b:0}s.prototype.toString=function(){return"("+this.x+", "+this.y+")"};function t(a){for(var b=0,c=String(u).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),a=String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),d=Math.max(c.length,a.length),i=0;b==0&&i<d;i++){var e=c[i]||"",f=a[i]||"",h=/(\d*)(\D*)/g,j=/(\d*)(\D*)/g;do{var m=h.exec(e)||["","",""],g=j.exec(f)||["","",""];if(m[0].length==0&&g[0].length==0)break;b=v(m[1].length==0?0:parseInt(m[1],10),g[1].length==0?0:parseInt(g[1],10))||v(m[2].length==0,g[2].length==0)||v(m[2],g[2])}while(b==0)}return b}
function v(a,b){if(a<b)return-1;else if(a>b)return 1;return 0};var w=Array.prototype;function ca(a,b,c,d){w.splice.apply(a,da(arguments,1))}function da(a,b,c){return arguments.length<=2?w.slice.call(a,b):w.slice.call(a,b,c)};function x(a,b){this.x=a;this.y=b}(function(){function a(){}a.prototype=s.prototype;x.J=s.prototype;x.prototype=new a})();function y(a){return Math.sqrt(a.x*a.x+a.y*a.y)}x.prototype.scale=function(a){this.x*=a;this.y*=a;return this};x.prototype.normalize=function(){return this.scale(1/y(this))};x.prototype.add=function(a){this.x+=a.x;this.y+=a.y;return this};function z(a,b){this.f=new s(a||0,b||0);this.target=new s;this.h=new x(0,0);this.z=Math.random()*0.5}z.prototype.update=function(a){var b,c;b=new x(this.target.x-this.f.x,this.target.y-this.f.y);a&&(c=new x(this.f.x-a.x,this.f.y-a.y),a=y(c),c.normalize().scale(1E3/a),b.add(c));this.h.scale(1-ea);this.h.add(b.scale((1+this.z)/fa));y(this.h)>A&&this.h.normalize().scale(A);this.f.x+=this.h.x;this.f.y+=this.h.y};var fa=200,ea=0.08,A=20;var B,C,D,E;function F(){return q.navigator?q.navigator.userAgent:l}E=D=C=B=o;var G;if(G=F()){var ga=q.navigator;B=G.indexOf("Opera")==0;C=!B&&G.indexOf("MSIE")!=-1;D=!B&&G.indexOf("WebKit")!=-1;E=!B&&!D&&ga.product=="Gecko"}var H=C,I=E,ha=D,u;
a:{var J="",K;if(B&&q.opera)var L=q.opera.version,J=typeof L=="function"?L():L;else if(I?K=/rv\:([^\);]+)(\)|;)/:H?K=/MSIE\s+([^\);]+)(\)|;)/:ha&&(K=/WebKit\/(\S+)/),K)var ia=K.exec(F()),J=ia?ia[1]:"";if(H){var M,ja=q.document;M=ja?ja.documentMode:k;if(M>parseFloat(J)){u=String(M);break a}}u=J}var N={},ka={};function la(){return ka[9]||(ka[9]=H&&document.documentMode&&document.documentMode>=9)};!H||la();if(I||H)if(!H||!la())I&&(N["1.9.1"]||(N["1.9.1"]=t("1.9.1")>=0));H&&(N["9"]||(N["9"]=t("9")>=0));function ma(a){(q.requestAnimationFrame||q.webkitRequestAnimationFrame||q.mozRequestAnimationFrame||q.oRequestAnimationFrame||q.msRequestAnimationFrame||function(a){q.setTimeout(a,17)})(a)};function na(){this.buffer={length:0};this.length=0}na.prototype={get:function(a){return(this.buffer[Math.floor(a/8)]>>>7-a%8&1)==1},put:function(a,b){for(var c=0;c<b;c++)this.u((a>>>b-c-1&1)==1)},u:function(a){var b=Math.floor(this.length/8);this.buffer.length<=b&&(this.buffer[this.buffer.length++]=0);a&&(this.buffer[b]|=128>>>this.length%8);this.length++}};function oa(a){this.mode=4;this.data=a}oa.prototype={d:function(){return this.data.length},write:function(a){for(var b=0;b<this.data.length;b++)a.put(this.data.charCodeAt(b),8)}};function pa(a,b){this.v=a;this.q=b}
var O=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,
20],[6,43,15,2,44,16]];function qa(a,b){switch(b){case 1:return O[(a-1)*4+0];case 0:return O[(a-1)*4+1];case 3:return O[(a-1)*4+2];case 2:return O[(a-1)*4+3]}};function P(a){if(a<1)throw Error("glog("+a+")");return ra[a]}function Q(a){for(;a<0;)a+=255;for(;a>=256;)a-=255;return R[a]}var R={length:256},ra={length:256},S;for(S=0;S<8;S++)R[S]=1<<S;for(S=8;S<256;S++)R[S]=R[S-4]^R[S-5]^R[S-6]^R[S-8];for(S=0;S<255;S++)ra[R[S]]=S;function T(a,b){if(a.length==k)throw Error(a.length+"/"+b);for(var c=0;c<a.length&&a[c]==0;)c++;this.l={length:a.length-c+b};for(var d=0;d<a.length-c;d++)this.l[d]=a[d+c]}
T.prototype={get:function(a){return this.l[a]},d:function(){return this.l.length},multiply:function(a){for(var b={length:this.d()+a.d()-1},c=0;c<this.d();c++)for(var d=0;d<a.d();d++)b[c+d]^=Q(P(this.get(c))+P(a.get(d)));return new T(b,0)},t:function(a){if(this.d()-a.d()<0)return this;var b=P(this.get(0))-P(a.get(0)),c={length:this.d()},d;for(d=0;d<this.d();d++)c[d]=this.get(d);for(d=0;d<a.d();d++)c[d]^=Q(P(a.get(d))+b);return(new T(c,0)).t(a)}};var sa=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,
50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]];function U(a){for(var b=0;a!=0;)b++,a>>>=1;return b}function ta(a,b,c){switch(a){case 0:return(b+c)%2==0;case 1:return b%2==0;case 2:return c%3==0;case 3:return(b+c)%3==0;case 4:return(Math.floor(b/2)+Math.floor(c/3))%2==0;case 5:return b*c%2+b*c%3==0;case 6:return(b*c%2+b*c%3)%2==0;case 7:return(b*c%3+(b+c)%2)%2==0;default:throw Error("bad maskPattern:"+a);}}
function ua(a,b){if(1<=b&&b<10)switch(a){case 1:return 10;case 2:return 9;case 4:return 8;case 8:return 8;default:throw Error("mode:"+a);}else if(b<27)switch(a){case 1:return 12;case 2:return 11;case 4:return 16;case 8:return 10;default:throw Error("mode:"+a);}else if(b<41)switch(a){case 1:return 14;case 2:return 13;case 4:return 16;case 8:return 12;default:throw Error("mode:"+a);}else throw Error("type:"+b);};function va(a,b){this.g=a;this.s=b;this.b=this.g*4+17;this.c=[this.b];for(var c=0;c<this.b;c++){this.c[c]=[this.b];for(var d=0;d<this.b;d++)this.c[c][d]=l}this.j=l;this.r=[]}
va.prototype={a:function(a,b){if(a<0||this.b<=a||b<0||this.b<=b)throw Error(a+","+b);return this.c[a][b]},B:function(){wa(this,o,this.A())},m:function(a,b){for(var c=-1;c<=7;c++)if(!(a+c<=-1||this.b<=a+c))for(var d=-1;d<=7;d++)b+d<=-1||this.b<=b+d||(this.c[a+c][b+d]=0<=c&&c<=6&&(d==0||d==6)||0<=d&&d<=6&&(c==0||c==6)||2<=c&&c<=4&&2<=d&&d<=4?true:o)},A:function(){for(var a=0,b=0,c=0;c<8;c++){wa(this,true,c);var d;d=this.b;for(var i=0,e=k,f=k,e=0;e<d;e++)for(f=0;f<d;f++){for(var h=0,j=this.a(e,f),m=
-1;m<=1;m++)if(!(e+m<0||d<=e+m))for(var g=-1;g<=1;g++)f+g<0||d<=f+g||m==0&&g==0||j==this.a(e+m,f+g)&&h++;h>5&&(i+=3+h-5)}for(e=0;e<d-1;e++)for(f=0;f<d-1;f++)if(h=0,this.a(e,f)&&h++,this.a(e+1,f)&&h++,this.a(e,f+1)&&h++,this.a(e+1,f+1)&&h++,h==0||h==4)i+=3;for(e=0;e<d;e++)for(f=0;f<d-6;f++)this.a(e,f)&&!this.a(e,f+1)&&this.a(e,f+2)&&this.a(e,f+3)&&this.a(e,f+4)&&!this.a(e,f+5)&&this.a(e,f+6)&&(i+=40);for(f=0;f<d;f++)for(e=0;e<d-6;e++)this.a(e,f)&&!this.a(e+1,f)&&this.a(e+2,f)&&this.a(e+3,f)&&this.a(e+
4,f)&&!this.a(e+5,f)&&this.a(e+6,f)&&(i+=40);for(f=h=0;f<d;f++)for(e=0;e<d;e++)this.a(e,f)&&h++;i+=Math.abs(100*h/d/d-50)/5*10;d=i;if(c==0||a>d)a=d,b=c}return b},F:function(){for(var a=8;a<this.b-8;a++)this.c[a][6]==l&&(this.c[a][6]=a%2==0);for(a=8;a<this.b-8;a++)this.c[6][a]==l&&(this.c[6][a]=a%2==0)},D:function(){for(var a=sa[this.g-1],b=0;b<a.length;b++)for(var c=0;c<a.length;c++){var d=a[b],i=a[c];if(this.c[d][i]==l)for(var e=-2;e<=2;e++)for(var f=-2;f<=2;f++)this.c[d+e][i+f]=e==-2||e==2||f==
-2||f==2||e==0&&f==0?true:o}},H:function(a){var b;b=this.g;for(var c=b<<12;U(c)-U(7973)>=0;)c^=7973<<U(c)-U(7973);b=b<<12|c;for(var d,c=0;c<18;c++)d=!a&&(b>>c&1)==1,this.c[Math.floor(c/3)][c%3+this.b-8-3]=d;for(c=0;c<18;c++)d=!a&&(b>>c&1)==1,this.c[c%3+this.b-8-3][Math.floor(c/3)]=d},G:function(a,b){var c;c=this.s<<3|b;for(var d=c<<10;U(d)-U(1335)>=0;)d^=1335<<U(d)-U(1335);c=(c<<10|d)^21522;for(var i,d=0;d<15;d++)i=!a&&(c>>d&1)==1,d<6?this.c[d][8]=i:d<8?this.c[d+1][8]=i:this.c[this.b-15+d][8]=i;for(d=
0;d<15;d++)i=!a&&(c>>d&1)==1,d<8?this.c[8][this.b-d-1]=i:d<9?this.c[8][15-d-1+1]=i:this.c[8][15-d-1]=i;this.c[this.b-8][8]=!a},C:function(a,b){for(var c=-1,d=this.b-1,i=7,e=0,f=this.b-1;f>0;f-=2)for(f==6&&f--;;){for(var h=0;h<2;h++)if(this.c[d][f-h]==l){var j=o;e<a.length&&(j=(a[e]>>>i&1)==1);ta(b,d,f-h)&&(j=!j);this.c[d][f-h]=j;i--;i==-1&&(e++,i=7)}d+=c;if(d<0||this.b<=d){d-=c;c=-c;break}}}};
function wa(a,b,c){a.m(0,0);a.m(a.b-7,0);a.m(0,a.b-7);a.D();a.F();a.G(b,c);a.g>=7&&a.H(b);if(a.j==l){var d=a.g,i=a.r,b=a.s,e=qa(d,b);if(e==k)throw Error("bad rs block @ typeNumber:"+d+"/errorCorrectLevel:"+b);for(var f=e.length/3,b={length:0},h=0;h<f;h++)for(var j=e[h*3+0],m=e[h*3+1],g=e[h*3+2],n=0;n<j;n++)b[b.length++]=new pa(m,g);e=new na;for(f=0;f<i.length;f++)h=i[f],e.put(h.mode,4),e.put(h.d(),ua(h.mode,d)),h.write(e);for(f=d=0;f<b.length;f++)d+=b[f].q;if(e.length>d*8)throw Error("code length overflow. ("+
e.length+">"+d*8+")");for(e.length+4<=d*8&&e.put(0,4);e.length%8!=0;)e.u(o);for(;;){if(e.length>=d*8)break;e.put(236,8);if(e.length>=d*8)break;e.put(17,8)}i=d=m=0;f={length:b.length};h={length:b.length};for(j=0;j<b.length;j++){var n=b[j].q,p=b[j].v-n,d=Math.max(d,n),i=Math.max(i,p);f[j]={length:n};for(g=0;g<f[j].length;g++)f[j][g]=255&e.buffer[g+m];m+=n;g=p;n=new T([1],0);for(p=0;p<g;p++)n=n.multiply(new T([1,Q(p)],0));g=n;n=(new T(f[j],g.d()-1)).t(g);h[j]={length:g.d()-1};for(g=0;g<h[j].length;g++)p=
g+n.d()-h[j].length,h[j][g]=p>=0?n.get(p):0}for(g=e=0;g<b.length;g++)e+=b[g].v;e=[];for(g=0;g<d;g++)for(j=0;j<b.length;j++)g<f[j].length&&e.push(f[j][g]);for(g=0;g<i;g++)for(j=0;j<b.length;j++)g<h[j].length&&e.push(h[j][g]);a.j=e}a.C(a.j,c)};function xa(a){var b="_gaq"in q?q._gaq:l;if(!b){var c=b=[];if("_gaq"in q)throw Error('The object already contains the key "_gaq"');q._gaq=c}b.push(a)}function ya(a){var b=document.createElement("script");b.type="text/javascript";b.async=true;b.src=a;a=document.getElementsByTagName("head");if(a.length!=1)throw Error("Couldn't find a single head tag.");var a=a[0],c=a.getElementsByTagName("script");c.length==0?a.appendChild(b):(a=c[0],a.parentNode&&a.parentNode.insertBefore(b,a))};function V(a,b){ya("http://www.google-analytics.com/ga.js");xa(["_setAccount","UA-22691951-1"]);xa(["_trackPageview"]);q.sc_project=6793701;q.sc_security="6b3ec070";q.sc_invisible=1;ya("http://www.statcounter.com/counter/counter_xhtml.js");this.canvas=a;this.input=b;this.g=10;this.size=this.g*4+17;this.scale=5;this.i=(this.size+W*2)*this.scale;$(b).width(this.i).val("Type your message here...").bind("keyup",r(this.n,this));$(this.canvas).attr("width",this.i).attr("height",this.i).mousemove(r(this.w,
this)).mouseout(r(this.k,this)).mouseleave(r(this.k,this)).mouseenter(r(this.k,this));this.context=this.canvas.getContext("2d");this.context.setTransform(1,0,0,1,this.scale*W,this.scale*W);this.e=[];this.n();this.p()}var X="app.Application".split("."),Y=q;!(X[0]in Y)&&Y.execScript&&Y.execScript("var "+X[0]);for(var Z;X.length&&(Z=X.shift());)!X.length&&V!==k?Y[Z]=V:Y=Y[Z]?Y[Z]:Y[Z]={};V.prototype.k=function(){this.o=l};
V.prototype.w=function(a){var b=$(this.canvas).offset();this.o=new s(a.pageX-b.left-(W+0.5)*this.scale,a.pageY-b.top-(W+0.5)*this.scale)};
V.prototype.n=function(){var a,b;b=$(this.input).val();if(this.value!==b){this.value=b;a=new va(this.g,3);a.r.push(new oa(b));a.j=l;a.B();var c,d;b=[];for(d=0;d<this.size;){for(c=0;c<this.size;)a.a(d,c)&&b.push(new s(c*this.scale,d*this.scale)),c++;d++}for(;this.e.length>b.length;)a=Math.floor(Math.random()*this.e.length),w.splice.call(this.e,a,1);for(;this.e.length<b.length;)c=d=(this.size-1)*this.scale/2,c=new z(c,d),a=Math.floor(Math.random()*this.e.length),ca(this.e,a,0,c);a=this.e;c=this.size;
a.length&&(c%=a.length,c>0?w.unshift.apply(a,a.splice(-c,c)):c<0&&w.push.apply(a,a.splice(0,-c)));for(a=0;a<b.length;)this.e[a].target.x=b[a].x,this.e[a].target.y=b[a].y,a++;this.I=o}};V.prototype.p=function(){var a,b;this.context.fillStyle="white";this.context.fillRect(-W*this.scale,-W*this.scale,this.i,this.i);this.context.fillStyle="black";for(a=0;a<this.e.length;)b=this.e[a],b.update(this.o),this.context.fillRect(b.f.x,b.f.y,this.scale,this.scale),a++;ma(r(this.p,this))};var W=10;
