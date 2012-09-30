/** @license
 *
 * SoundManager 2: JavaScript Sound for the Web
 * ----------------------------------------------
 * http://schillmania.com/projects/soundmanager2/
 *
 * Copyright (c) 2007, Scott Schiller. All rights reserved.
 * Code provided under the BSD License:
 * http://schillmania.com/projects/soundmanager2/license.txt
 *
 * V2.97a.20120916+DEV
 */
(function(fa){function R(R,ea){function S(b){return c.preferFlash&&y&&!c.ignoreFlash&&"undefined"!==typeof c.flash[b]&&c.flash[b]}function l(b){return function(c){var d=this._s;return!d||!d._a?null:b.call(this,c)}}this.setupOptions={url:R||null,flashVersion:8,debugMode:!0,debugFlash:!1,useConsole:!0,consoleOnly:!0,waitForWindowLoad:!1,bgColor:"#ffffff",useHighPerformance:!1,flashPollingInterval:null,html5PollingInterval:null,flashLoadTimeout:1E3,wmode:null,allowScriptAccess:"always",useFlashBlock:!1,
useHTML5Audio:!0,html5Test:/^(probably|maybe)$/i,preferFlash:!0,noSWFCache:!1};this.defaultOptions={autoLoad:!1,autoPlay:!1,from:null,loops:1,onid3:null,onload:null,whileloading:null,onplay:null,onpause:null,onresume:null,whileplaying:null,onposition:null,onstop:null,onfailure:null,onfinish:null,multiShot:!0,multiShotEvents:!1,position:null,pan:0,stream:!0,to:null,type:null,usePolicyFile:!1,volume:100};this.flash9Options={isMovieStar:null,usePeakData:!1,useWaveformData:!1,useEQData:!1,onbufferchange:null,
ondataerror:null};this.movieStarOptions={bufferTime:3,serverURL:null,onconnect:null,duration:null};this.audioFormats={mp3:{type:['audio/mpeg; codecs="mp3"',"audio/mpeg","audio/mp3","audio/MPA","audio/mpa-robust"],required:!0},mp4:{related:["aac","m4a","m4b"],type:['audio/mp4; codecs="mp4a.40.2"',"audio/aac","audio/x-m4a","audio/MP4A-LATM","audio/mpeg4-generic"],required:!1},ogg:{type:["audio/ogg; codecs=vorbis"],required:!1},wav:{type:['audio/wav; codecs="1"',"audio/wav","audio/wave","audio/x-wav"],
required:!1}};this.movieID="sm2-container";this.id=ea||"sm2movie";this.debugID="soundmanager-debug";this.debugURLParam=/([#?&])debug=1/i;this.versionNumber="V2.97a.20120916+DEV";this.altURL=this.movieURL=this.version=null;this.enabled=this.swfLoaded=!1;this.oMC=null;this.sounds={};this.soundIDs=[];this.didFlashBlock=this.muted=!1;this.filePattern=null;this.filePatterns={flash8:/\.mp3(\?.*)?$/i,flash9:/\.mp3(\?.*)?$/i};this.features={buffering:!1,peakData:!1,waveformData:!1,eqData:!1,movieStar:!1};
this.sandbox={};var ga;try{ga="undefined"!==typeof Audio&&"undefined"!==typeof(ha&&10>opera.version()?new Audio(null):new Audio).canPlayType}catch($a){ga=!1}this.hasHTML5=ga;this.html5={usingFlash:null};this.flash={};this.ignoreFlash=this.html5Only=!1;var Da,c=this,g=null,T,q=navigator.userAgent,h=fa,ia=h.location.href.toString(),m=document,ja,Ea,ka,j,v=[],J=!1,K=!1,k=!1,s=!1,la=!1,L,r,ma,U,na,A,B,C,Fa,oa,V,W,D,pa,M,qa,X,E,Ga,ra,Ha,Y,Ia,N=null,sa=null,t,ta,F,Z,$,G,o,O=!1,ua=!1,Ja,Ka,La,aa=0,P=null,
ba,p=null,Ma,ca,Q,w,va,wa,Na,n,Xa=Array.prototype.slice,z=!1,Oa,y,xa,Pa,u,Qa,ya=q.match(/(ipad|iphone|ipod)/i),x=q.match(/msie/i),Ya=q.match(/webkit/i),za=q.match(/safari/i)&&!q.match(/chrome/i),ha=q.match(/opera/i),Aa=q.match(/(mobile|pre\/|xoom)/i)||ya,Ra=!ia.match(/usehtml5audio/i)&&!ia.match(/sm2\-ignorebadua/i)&&za&&!q.match(/silk/i)&&q.match(/OS X 10_6_([3-7])/i),Ba="undefined"!==typeof m.hasFocus?m.hasFocus():null,da=za&&("undefined"===typeof m.hasFocus||!m.hasFocus()),Sa=!da,Ta=/(mp3|mp4|mpa|m4a|m4b)/i,
Ca=m.location?m.location.protocol.match(/http/i):null,Ua=!Ca?"http://":"",Va=/^\s*audio\/(?:x-)?(?:mpeg4|aac|flv|mov|mp4||m4v|m4a|m4b|mp4v|3gp|3g2)\s*(?:$|;)/i,Wa="mpeg4,aac,flv,mov,mp4,m4v,f4v,m4a,m4b,mp4v,3gp,3g2".split(","),Za=RegExp("\\.("+Wa.join("|")+")(\\?.*)?$","i");this.mimePattern=/^\s*audio\/(?:x-)?(?:mp(?:eg|3))\s*(?:$|;)/i;this.useAltURL=!Ca;this._global_a=null;if(Aa&&(c.useHTML5Audio=!0,c.preferFlash=!1,ya))z=c.ignoreFlash=!0;this.setup=function(b){var e=!c.url;"undefined"!==typeof b&&
k&&p&&c.ok()&&("undefined"!==typeof b.flashVersion||"undefined"!==typeof b.url)&&G(t("setupLate"));ma(b);e&&M&&"undefined"!==typeof b.url&&c.beginDelayedInit();!M&&"undefined"!==typeof b.url&&"complete"===m.readyState&&setTimeout(D,1);return c};this.supported=this.ok=function(){return p?k&&!s:c.useHTML5Audio&&c.hasHTML5};this.getMovie=function(b){return T(b)||m[b]||h[b]};this.createSound=function(b,e){function d(){a=Z(a);c.sounds[a.id]=new Da(a);c.soundIDs.push(a.id);return c.sounds[a.id]}var a,f=
null;if(!k||!c.ok())return G(void 0),!1;"undefined"!==typeof e&&(b={id:b,url:e});a=r(b);a.url=ba(a.url);if(o(a.id,!0))return c.sounds[a.id];if(ca(a))f=d(),f._setup_html5(a);else{if(8<j&&null===a.isMovieStar)a.isMovieStar=!(!a.serverURL&&!(a.type&&a.type.match(Va)||a.url.match(Za)));a=$(a,void 0);f=d();if(8===j)g._createSound(a.id,a.loops||1,a.usePolicyFile);else if(g._createSound(a.id,a.url,a.usePeakData,a.useWaveformData,a.useEQData,a.isMovieStar,a.isMovieStar?a.bufferTime:!1,a.loops||1,a.serverURL,
a.duration||null,a.autoPlay,!0,a.autoLoad,a.usePolicyFile),!a.serverURL)f.connected=!0,a.onconnect&&a.onconnect.apply(f);!a.serverURL&&(a.autoLoad||a.autoPlay)&&f.load(a)}!a.serverURL&&a.autoPlay&&f.play();return f};this.destroySound=function(b,e){if(!o(b))return!1;var d=c.sounds[b],a;d._iO={};d.stop();d.unload();for(a=0;a<c.soundIDs.length;a++)if(c.soundIDs[a]===b){c.soundIDs.splice(a,1);break}e||d.destruct(!0);delete c.sounds[b];return!0};this.load=function(b,e){return!o(b)?!1:c.sounds[b].load(e)};
this.unload=function(b){return!o(b)?!1:c.sounds[b].unload()};this.onposition=this.onPosition=function(b,e,d,a){return!o(b)?!1:c.sounds[b].onposition(e,d,a)};this.clearOnPosition=function(b,e,d){return!o(b)?!1:c.sounds[b].clearOnPosition(e,d)};this.start=this.play=function(b,e){var d=!1;if(!k||!c.ok())return G("soundManager.play(): "+t(!k?"notReady":"notOK")),d;if(!o(b)){e instanceof Object||(e={url:e});if(e&&e.url)e.id=b,d=c.createSound(e).play();return d}return c.sounds[b].play(e)};this.setPosition=
function(b,e){return!o(b)?!1:c.sounds[b].setPosition(e)};this.stop=function(b){return!o(b)?!1:c.sounds[b].stop()};this.stopAll=function(){for(var b in c.sounds)c.sounds.hasOwnProperty(b)&&c.sounds[b].stop()};this.pause=function(b){return!o(b)?!1:c.sounds[b].pause()};this.pauseAll=function(){var b;for(b=c.soundIDs.length-1;0<=b;b--)c.sounds[c.soundIDs[b]].pause()};this.resume=function(b){return!o(b)?!1:c.sounds[b].resume()};this.resumeAll=function(){var b;for(b=c.soundIDs.length-1;0<=b;b--)c.sounds[c.soundIDs[b]].resume()};
this.togglePause=function(b){return!o(b)?!1:c.sounds[b].togglePause()};this.setPan=function(b,e){return!o(b)?!1:c.sounds[b].setPan(e)};this.setVolume=function(b,e){return!o(b)?!1:c.sounds[b].setVolume(e)};this.mute=function(b){var e=0;"string"!==typeof b&&(b=null);if(b)return!o(b)?!1:c.sounds[b].mute();for(e=c.soundIDs.length-1;0<=e;e--)c.sounds[c.soundIDs[e]].mute();return c.muted=!0};this.muteAll=function(){c.mute()};this.unmute=function(b){"string"!==typeof b&&(b=null);if(b)return!o(b)?!1:c.sounds[b].unmute();
for(b=c.soundIDs.length-1;0<=b;b--)c.sounds[c.soundIDs[b]].unmute();c.muted=!1;return!0};this.unmuteAll=function(){c.unmute()};this.toggleMute=function(b){return!o(b)?!1:c.sounds[b].toggleMute()};this.getMemoryUse=function(){var b=0;g&&8!==j&&(b=parseInt(g._getMemoryUse(),10));return b};this.disable=function(b){var e;"undefined"===typeof b&&(b=!1);if(s)return!1;s=!0;for(e=c.soundIDs.length-1;0<=e;e--)Ha(c.sounds[c.soundIDs[e]]);L(b);n.remove(h,"load",B);return!0};this.canPlayMIME=function(b){var e;
c.hasHTML5&&(e=Q({type:b}));!e&&p&&(e=b&&c.ok()?!!(8<j&&b.match(Va)||b.match(c.mimePattern)):null);return e};this.canPlayURL=function(b){var e;c.hasHTML5&&(e=Q({url:b}));!e&&p&&(e=b&&c.ok()?!!b.match(c.filePattern):null);return e};this.canPlayLink=function(b){return"undefined"!==typeof b.type&&b.type&&c.canPlayMIME(b.type)?!0:c.canPlayURL(b.href)};this.getSoundById=function(b){if(!b)throw Error("soundManager.getSoundById(): sID is null/undefined");return c.sounds[b]};this.onready=function(b,c){var d=
!1;if("function"===typeof b)c||(c=h),na("onready",b,c),A();else throw t("needFunction","onready");return!0};this.ontimeout=function(b,c){var d=!1;if("function"===typeof b)c||(c=h),na("ontimeout",b,c),A({type:"ontimeout"});else throw t("needFunction","ontimeout");return!0};this._wD=this._writeDebug=function(){return!0};this._debug=function(){};this.reboot=function(){var b,e;for(b=c.soundIDs.length-1;0<=b;b--)c.sounds[c.soundIDs[b]].destruct();if(g)try{if(x)sa=g.innerHTML;N=g.parentNode.removeChild(g)}catch(d){}sa=
N=p=null;c.enabled=M=k=O=ua=J=K=s=c.swfLoaded=!1;c.soundIDs=[];c.sounds={};g=null;for(b in v)if(v.hasOwnProperty(b))for(e=v[b].length-1;0<=e;e--)v[b][e].fired=!1;h.setTimeout(c.beginDelayedInit,20)};this.getMoviePercent=function(){return g&&"undefined"!==typeof g.PercentLoaded?g.PercentLoaded():null};this.beginDelayedInit=function(){la=!0;D();setTimeout(function(){if(ua)return!1;X();W();return ua=!0},20);C()};this.destruct=function(){c.disable(!0)};Da=function(b){var e,d,a=this,f,i,H,I,h,m,l=!1,k=
[],n=0,q,s,p=null;e=null;d=null;this.sID=this.id=b.id;this.url=b.url;this._iO=this.instanceOptions=this.options=r(b);this.pan=this.options.pan;this.volume=this.options.volume;this.isHTML5=!1;this._a=null;this.id3={};this._debug=function(){};this.load=function(b){var c=null;if("undefined"!==typeof b)a._iO=r(b,a.options),a.instanceOptions=a._iO;else if(b=a.options,a._iO=b,a.instanceOptions=a._iO,p&&p!==a.url)a._iO.url=a.url,a.url=null;if(!a._iO.url)a._iO.url=a.url;a._iO.url=ba(a._iO.url);if(a._iO.url===
a.url&&0!==a.readyState&&2!==a.readyState)return 3===a.readyState&&a._iO.onload&&a._iO.onload.apply(a,[!!a.duration]),a;b=a._iO;a.loaded=!1;a.readyState=1;a.playState=0;a.id3={};if(ca(b)){if(c=a._setup_html5(b),!c._called_load){a._html5_canplay=!1;if(a.url!==b.url)a._a.src=b.url,a.setPosition(0);a._a.autobuffer="auto";a._a.preload="auto";c._called_load=!0;b.autoPlay&&a.play()}}else try{a.isHTML5=!1,a._iO=$(Z(b)),b=a._iO,8===j?g._load(a.id,b.url,b.stream,b.autoPlay,b.usePolicyFile):g._load(a.id,b.url,
!!b.stream,!!b.autoPlay,b.loops||1,!!b.autoLoad,b.usePolicyFile)}catch(e){E({type:"SMSOUND_LOAD_JS_EXCEPTION",fatal:!0})}a.url=b.url;return a};this.unload=function(){0!==a.readyState&&(a.isHTML5?(I(),a._a&&(a._a.pause(),va(a._a,"about:blank"),p="about:blank")):8===j?g._unload(a.id,"about:blank"):g._unload(a.id),f());return a};this.destruct=function(b){if(a.isHTML5){if(I(),a._a)a._a.pause(),va(a._a),z||H(),a._a._s=null,a._a=null}else a._iO.onfailure=null,g._destroySound(a.id);b||c.destroySound(a.id,
!0)};this.start=this.play=function(b,c){var e,d;d=!0;d=null;c="undefined"===typeof c?!0:c;b||(b={});if(a.url)a._iO.url=a.url;a._iO=r(a._iO,a.options);a._iO=r(b,a._iO);a._iO.url=ba(a._iO.url);a.instanceOptions=a._iO;if(a._iO.serverURL&&!a.connected)return a.getAutoPlay()||a.setAutoPlay(!0),a;ca(a._iO)&&(a._setup_html5(a._iO),h());if(1===a.playState&&!a.paused)(e=a._iO.multiShot)||(d=a);if(null!==d)return d;b.url&&b.url!==a.url&&a.load(a._iO);if(!a.loaded)if(0===a.readyState){if(!a.isHTML5)a._iO.autoPlay=
!0;a.load(a._iO);a.instanceOptions=a._iO}else 2===a.readyState&&(d=a);if(null!==d)return d;if(!a.isHTML5&&9===j&&0<a.position&&a.position===a.duration)b.position=0;if(a.paused&&0<=a.position&&(!a._iO.serverURL||0<a.position))a.resume();else{a._iO=r(b,a._iO);if(null!==a._iO.from&&null!==a._iO.to&&0===a.instanceCount&&0===a.playState&&!a._iO.serverURL){e=function(){a._iO=r(b,a._iO);a.play(a._iO)};if(a.isHTML5&&!a._html5_canplay)a.load({_oncanplay:e}),d=!1;else if(!a.isHTML5&&!a.loaded&&(!a.readyState||
2!==a.readyState))a.load({onload:e}),d=!1;if(null!==d)return d;a._iO=s()}(!a.instanceCount||a._iO.multiShotEvents||!a.isHTML5&&8<j&&!a.getAutoPlay())&&a.instanceCount++;a._iO.onposition&&0===a.playState&&m(a);a.playState=1;a.paused=!1;a.position="undefined"!==typeof a._iO.position&&!isNaN(a._iO.position)?a._iO.position:0;if(!a.isHTML5)a._iO=$(Z(a._iO));a._iO.onplay&&c&&(a._iO.onplay.apply(a),l=!0);a.setVolume(a._iO.volume,!0);a.setPan(a._iO.pan,!0);a.isHTML5?(h(),d=a._setup_html5(),a.setPosition(a._iO.position),
d.play()):(d=g._start(a.id,a._iO.loops||1,9===j?a._iO.position:a._iO.position/1E3,a._iO.multiShot),9===j&&!d&&a._iO.onplayerror&&a._iO.onplayerror.apply(a))}return a};this.stop=function(b){var c=a._iO;if(1===a.playState){a._onbufferchange(0);a._resetOnPosition(0);a.paused=!1;if(!a.isHTML5)a.playState=0;q();c.to&&a.clearOnPosition(c.to);if(a.isHTML5){if(a._a)b=a.position,a.setPosition(0),a.position=b,a._a.pause(),a.playState=0,a._onTimer(),I()}else g._stop(a.id,b),c.serverURL&&a.unload();a.instanceCount=
0;a._iO={};c.onstop&&c.onstop.apply(a)}return a};this.setAutoPlay=function(b){a._iO.autoPlay=b;a.isHTML5||(g._setAutoPlay(a.id,b),b&&!a.instanceCount&&1===a.readyState&&a.instanceCount++)};this.getAutoPlay=function(){return a._iO.autoPlay};this.setPosition=function(b){"undefined"===typeof b&&(b=0);var c=a.isHTML5?Math.max(b,0):Math.min(a.duration||a._iO.duration,Math.max(b,0));a.position=c;b=a.position/1E3;a._resetOnPosition(a.position);a._iO.position=c;if(a.isHTML5){if(a._a&&a._html5_canplay&&a._a.currentTime!==
b)try{a._a.currentTime=b,(0===a.playState||a.paused)&&a._a.pause()}catch(e){}}else b=9===j?a.position:b,a.readyState&&2!==a.readyState&&g._setPosition(a.id,b,a.paused||!a.playState,a._iO.multiShot);a.isHTML5&&a.paused&&a._onTimer(!0);return a};this.pause=function(b){if(a.paused||0===a.playState&&1!==a.readyState)return a;a.paused=!0;a.isHTML5?(a._setup_html5().pause(),I()):(b||"undefined"===typeof b)&&g._pause(a.id,a._iO.multiShot);a._iO.onpause&&a._iO.onpause.apply(a);return a};this.resume=function(){var b=
a._iO;if(!a.paused)return a;a.paused=!1;a.playState=1;a.isHTML5?(a._setup_html5().play(),h()):(b.isMovieStar&&!b.serverURL&&a.setPosition(a.position),g._pause(a.id,b.multiShot));!l&&b.onplay?(b.onplay.apply(a),l=!0):b.onresume&&b.onresume.apply(a);return a};this.togglePause=function(){if(0===a.playState)return a.play({position:9===j&&!a.isHTML5?a.position:a.position/1E3}),a;a.paused?a.resume():a.pause();return a};this.setPan=function(b,c){"undefined"===typeof b&&(b=0);"undefined"===typeof c&&(c=!1);
a.isHTML5||g._setPan(a.id,b);a._iO.pan=b;if(!c)a.pan=b,a.options.pan=b;return a};this.setVolume=function(b,e){"undefined"===typeof b&&(b=100);"undefined"===typeof e&&(e=!1);if(a.isHTML5){if(a._a)a._a.volume=Math.max(0,Math.min(1,b/100))}else g._setVolume(a.id,c.muted&&!a.muted||a.muted?0:b);a._iO.volume=b;if(!e)a.volume=b,a.options.volume=b;return a};this.mute=function(){a.muted=!0;if(a.isHTML5){if(a._a)a._a.muted=!0}else g._setVolume(a.id,0);return a};this.unmute=function(){a.muted=!1;var b="undefined"!==
typeof a._iO.volume;if(a.isHTML5){if(a._a)a._a.muted=!1}else g._setVolume(a.id,b?a._iO.volume:a.options.volume);return a};this.toggleMute=function(){return a.muted?a.unmute():a.mute()};this.onposition=this.onPosition=function(b,c,e){k.push({position:parseInt(b,10),method:c,scope:"undefined"!==typeof e?e:a,fired:!1});return a};this.clearOnPosition=function(a,b){var c,a=parseInt(a,10);if(isNaN(a))return!1;for(c=0;c<k.length;c++)if(a===k[c].position&&(!b||b===k[c].method))k[c].fired&&n--,k.splice(c,
1)};this._processOnPosition=function(){var b,c;b=k.length;if(!b||!a.playState||n>=b)return!1;for(b-=1;0<=b;b--)if(c=k[b],!c.fired&&a.position>=c.position)c.fired=!0,n++,c.method.apply(c.scope,[c.position]);return!0};this._resetOnPosition=function(a){var b,c;b=k.length;if(!b)return!1;for(b-=1;0<=b;b--)if(c=k[b],c.fired&&a<=c.position)c.fired=!1,n--;return!0};s=function(){var b=a._iO,c=b.from,e=b.to,d,f;f=function(){a.clearOnPosition(e,f);a.stop()};d=function(){if(null!==e&&!isNaN(e))a.onPosition(e,
f)};if(null!==c&&!isNaN(c))b.position=c,b.multiShot=!1,d();return b};m=function(){var b,c=a._iO.onposition;if(c)for(b in c)if(c.hasOwnProperty(b))a.onPosition(parseInt(b,10),c[b])};q=function(){var b,c=a._iO.onposition;if(c)for(b in c)c.hasOwnProperty(b)&&a.clearOnPosition(parseInt(b,10))};h=function(){a.isHTML5&&Ja(a)};I=function(){a.isHTML5&&Ka(a)};f=function(b){b||(k=[],n=0);l=!1;a._hasTimer=null;a._a=null;a._html5_canplay=!1;a.bytesLoaded=null;a.bytesTotal=null;a.duration=a._iO&&a._iO.duration?
a._iO.duration:null;a.durationEstimate=null;a.buffered=[];a.eqData=[];a.eqData.left=[];a.eqData.right=[];a.failures=0;a.isBuffering=!1;a.instanceOptions={};a.instanceCount=0;a.loaded=!1;a.metadata={};a.readyState=0;a.muted=!1;a.paused=!1;a.peakData={left:0,right:0};a.waveformData={left:[],right:[]};a.playState=0;a.position=null;a.id3={}};f();this._onTimer=function(b){var c,f=!1,i={};if(a._hasTimer||b){if(a._a&&(b||(0<a.playState||1===a.readyState)&&!a.paused)){c=a._get_html5_duration();if(c!==e)e=
c,a.duration=c,f=!0;a.durationEstimate=a.duration;c=1E3*a._a.currentTime||0;c!==d&&(d=c,f=!0);(f||b)&&a._whileplaying(c,i,i,i,i)}return f}};this._get_html5_duration=function(){var b=a._iO;return(b=a._a&&a._a.duration?1E3*a._a.duration:b&&b.duration?b.duration:null)&&!isNaN(b)&&Infinity!==b?b:null};this._apply_loop=function(a,b){a.loop=1<b?"loop":""};this._setup_html5=function(b){var b=r(a._iO,b),e=decodeURI,d=z?c._global_a:a._a,g=e(b.url),h,H;z?g===Oa&&(h=!0):g===p&&(h=!0);if(d){if(d._s&&(z?(_result=
d,d._s&&d._s.playState&&!h&&d._s.stop()):!z&&g===e(p)&&(H=d),H))return a._apply_loop(d,b.loops),H;if(!h)f(!1),d.src=b.url,Oa=p=a.url=b.url,d._called_load=!1}else if(a._a=b.autoLoad||b.autoPlay?new Audio(b.url):ha&&10>opera.version()?new Audio(null):new Audio,d=a._a,d._called_load=!1,z)c._global_a=d;a.isHTML5=!0;a._a=d;d._s=a;i();a._apply_loop(d,b.loops);b.autoLoad||b.autoPlay?a.load():(d.autobuffer=!1,d.preload="auto");return d};i=function(){if(a._a._added_events)return!1;var b;a._a._added_events=
!0;for(b in u)u.hasOwnProperty(b)&&a._a&&a._a.addEventListener(b,u[b],!1);return!0};H=function(){var b;a._a._added_events=!1;for(b in u)u.hasOwnProperty(b)&&a._a&&a._a.removeEventListener(b,u[b],!1)};this._onload=function(b){b=!!b||!a.isHTML5&&8===j&&a.duration;a.loaded=b;a.readyState=b?3:2;a._onbufferchange(0);a._iO.onload&&a._iO.onload.apply(a,[b]);return!0};this._onbufferchange=function(b){if(0===a.playState||b&&a.isBuffering||!b&&!a.isBuffering)return!1;a.isBuffering=1===b;a._iO.onbufferchange&&
a._iO.onbufferchange.apply(a);return!0};this._onsuspend=function(){a._iO.onsuspend&&a._iO.onsuspend.apply(a);return!0};this._onfailure=function(b,c,e){a.failures++;if(a._iO.onfailure&&1===a.failures)a._iO.onfailure(a,b,c,e)};this._onfinish=function(){var b=a._iO.onfinish;a._onbufferchange(0);a._resetOnPosition(0);if(a.instanceCount){a.instanceCount--;if(!a.instanceCount&&(q(),a.playState=0,a.paused=!1,a.instanceCount=0,a.instanceOptions={},a._iO={},I(),a.isHTML5))a.position=0;(!a.instanceCount||a._iO.multiShotEvents)&&
b&&b.apply(a)}};this._whileloading=function(b,c,e,d){var f=a._iO;a.bytesLoaded=b;a.bytesTotal=c;a.duration=Math.floor(e);a.bufferLength=d;a.durationEstimate=!a.isHTML5&&!f.isMovieStar?f.duration?a.duration>f.duration?a.duration:f.duration:parseInt(a.bytesTotal/a.bytesLoaded*a.duration,10):a.duration;if(!a.isHTML5)a.buffered=[{start:0,end:a.duration}];(3!==a.readyState||a.isHTML5)&&f.whileloading&&f.whileloading.apply(a)};this._whileplaying=function(b,c,e,d,f){var i=a._iO;if(isNaN(b)||null===b)return!1;
a.position=Math.max(0,b);a._processOnPosition();if(!a.isHTML5&&8<j){if(i.usePeakData&&"undefined"!==typeof c&&c)a.peakData={left:c.leftPeak,right:c.rightPeak};if(i.useWaveformData&&"undefined"!==typeof e&&e)a.waveformData={left:e.split(","),right:d.split(",")};if(i.useEQData&&"undefined"!==typeof f&&f&&f.leftEQ&&(b=f.leftEQ.split(","),a.eqData=b,a.eqData.left=b,"undefined"!==typeof f.rightEQ&&f.rightEQ))a.eqData.right=f.rightEQ.split(",")}1===a.playState&&(!a.isHTML5&&8===j&&!a.position&&a.isBuffering&&
a._onbufferchange(0),i.whileplaying&&i.whileplaying.apply(a));return!0};this._oncaptiondata=function(b){a.captiondata=b;a._iO.oncaptiondata&&a._iO.oncaptiondata.apply(a,[b])};this._onmetadata=function(b,c){var e={},d,f;for(d=0,f=b.length;d<f;d++)e[b[d]]=c[d];a.metadata=e;a._iO.onmetadata&&a._iO.onmetadata.apply(a)};this._onid3=function(b,c){var e=[],d,f;for(d=0,f=b.length;d<f;d++)e[b[d]]=c[d];a.id3=r(a.id3,e);a._iO.onid3&&a._iO.onid3.apply(a)};this._onconnect=function(b){b=1===b;if(a.connected=b)a.failures=
0,o(a.id)&&(a.getAutoPlay()?a.play(void 0,a.getAutoPlay()):a._iO.autoLoad&&a.load()),a._iO.onconnect&&a._iO.onconnect.apply(a,[b])};this._ondataerror=function(){0<a.playState&&a._iO.ondataerror&&a._iO.ondataerror.apply(a)}};qa=function(){return m.body||m._docElement||m.getElementsByTagName("div")[0]};T=function(b){return m.getElementById(b)};r=function(b,e){var d=b||{},a,f;a="undefined"===typeof e?c.defaultOptions:e;for(f in a)a.hasOwnProperty(f)&&"undefined"===typeof d[f]&&(d[f]="object"!==typeof a[f]||
null===a[f]?a[f]:r(d[f],a[f]));return d};U={onready:1,ontimeout:1,defaultOptions:1,flash9Options:1,movieStarOptions:1};ma=function(b,e){var d,a=!0,f="undefined"!==typeof e,i=c.setupOptions;for(d in b)if(b.hasOwnProperty(d))if("object"!==typeof b[d]||null===b[d]||b[d]instanceof Array)f&&"undefined"!==typeof U[e]?c[e][d]=b[d]:"undefined"!==typeof i[d]?(c.setupOptions[d]=b[d],c[d]=b[d]):"undefined"===typeof U[d]?(G(t("undefined"===typeof c[d]?"setupUndef":"setupError",d),2),a=!1):c[d]instanceof Function?
c[d].apply(c,b[d]instanceof Array?b[d]:[b[d]]):c[d]=b[d];else if("undefined"===typeof U[d])G(t("undefined"===typeof c[d]?"setupUndef":"setupError",d),2),a=!1;else return ma(b[d],d);return a};n=function(){function b(a){var a=Xa.call(a),b=a.length;d?(a[1]="on"+a[1],3<b&&a.pop()):3===b&&a.push(!1);return a}function c(b,e){var g=b.shift(),h=[a[e]];if(d)g[h](b[0],b[1]);else g[h].apply(g,b)}var d=h.attachEvent,a={add:d?"attachEvent":"addEventListener",remove:d?"detachEvent":"removeEventListener"};return{add:function(){c(b(arguments),
"add")},remove:function(){c(b(arguments),"remove")}}}();u={abort:l(function(){}),canplay:l(function(){var b=this._s,c;if(b._html5_canplay)return!0;b._html5_canplay=!0;b._onbufferchange(0);c="undefined"!==typeof b._iO.position&&!isNaN(b._iO.position)?b._iO.position/1E3:null;if(b.position&&this.currentTime!==c)try{this.currentTime=c}catch(d){}b._iO._oncanplay&&b._iO._oncanplay()}),canplaythrough:l(function(){var b=this._s;b.loaded||(b._onbufferchange(0),b._whileloading(b.bytesLoaded,b.bytesTotal,b._get_html5_duration()),
b._onload(!0))}),ended:l(function(){this._s._onfinish()}),error:l(function(){this._s._onload(!1)}),loadeddata:l(function(){var b=this._s;if(!b._loaded&&!za)b.duration=b._get_html5_duration()}),loadedmetadata:l(function(){}),loadstart:l(function(){this._s._onbufferchange(1)}),play:l(function(){this._s._onbufferchange(0)}),playing:l(function(){this._s._onbufferchange(0)}),progress:l(function(b){var c=this._s,d,a,f=0,f=b.target.buffered;d=b.loaded||0;var i=b.total||1;c.buffered=[];if(f&&f.length){for(d=
0,a=f.length;d<a;d++)c.buffered.push({start:1E3*f.start(d),end:1E3*f.end(d)});f=1E3*(f.end(0)-f.start(0));d=f/(1E3*b.target.duration)}isNaN(d)||(c._onbufferchange(0),c._whileloading(d,i,c._get_html5_duration()),d&&i&&d===i&&u.canplaythrough.call(this,b))}),ratechange:l(function(){}),suspend:l(function(b){var c=this._s;u.progress.call(this,b);c._onsuspend()}),stalled:l(function(){}),timeupdate:l(function(){this._s._onTimer()}),waiting:l(function(){this._s._onbufferchange(1)})};ca=function(b){return b.serverURL||
b.type&&S(b.type)?!1:b.type?Q({type:b.type}):Q({url:b.url})||c.html5Only};va=function(b,c){if(b)b.src=c};Q=function(b){if(!c.useHTML5Audio||!c.hasHTML5)return!1;var e=b.url||null,b=b.type||null,d=c.audioFormats,a;if(b&&"undefined"!==typeof c.html5[b])return c.html5[b]&&!S(b);if(!w){w=[];for(a in d)d.hasOwnProperty(a)&&(w.push(a),d[a].related&&(w=w.concat(d[a].related)));w=RegExp("\\.("+w.join("|")+")(\\?.*)?$","i")}a=e?e.toLowerCase().match(w):null;!a||!a.length?b&&(e=b.indexOf(";"),a=(-1!==e?b.substr(0,
e):b).substr(6)):a=a[1];a&&"undefined"!==typeof c.html5[a]?e=c.html5[a]&&!S(a):(b="audio/"+a,e=c.html5.canPlayType({type:b}),e=(c.html5[a]=e)&&c.html5[b]&&!S(b));return e};Na=function(){function b(a){var b,d,f=b=!1;if(!e||"function"!==typeof e.canPlayType)return b;if(a instanceof Array){for(b=0,d=a.length;b<d;b++)if(c.html5[a[b]]||e.canPlayType(a[b]).match(c.html5Test))f=!0,c.html5[a[b]]=!0,c.flash[a[b]]=!!a[b].match(Ta);b=f}else a=e&&"function"===typeof e.canPlayType?e.canPlayType(a):!1,b=!(!a||
!a.match(c.html5Test));return b}if(!c.useHTML5Audio||!c.hasHTML5)return!1;var e="undefined"!==typeof Audio?ha&&10>opera.version()?new Audio(null):new Audio:null,d,a,f={},i;i=c.audioFormats;for(d in i)if(i.hasOwnProperty(d)&&(a="audio/"+d,f[d]=b(i[d].type),f[a]=f[d],d.match(Ta)?(c.flash[d]=!0,c.flash[a]=!0):(c.flash[d]=!1,c.flash[a]=!1),i[d]&&i[d].related))for(a=i[d].related.length-1;0<=a;a--)f["audio/"+i[d].related[a]]=f[d],c.html5[i[d].related[a]]=f[d],c.flash[i[d].related[a]]=f[d];f.canPlayType=
e?b:null;c.html5=r(c.html5,f);return!0};t=function(){};Z=function(b){if(8===j&&1<b.loops&&b.stream)b.stream=!1;return b};$=function(b){if(b&&!b.usePolicyFile&&(b.onid3||b.usePeakData||b.useWaveformData||b.useEQData))b.usePolicyFile=!0;return b};G=function(){};ja=function(){return!1};Ha=function(b){for(var c in b)b.hasOwnProperty(c)&&"function"===typeof b[c]&&(b[c]=ja)};Y=function(b){"undefined"===typeof b&&(b=!1);(s||b)&&c.disable(b)};Ia=function(b){var e=null;if(b)if(b.match(/\.swf(\?.*)?$/i)){if(e=
b.substr(b.toLowerCase().lastIndexOf(".swf?")+4))return b}else b.lastIndexOf("/")!==b.length-1&&(b+="/");b=(b&&-1!==b.lastIndexOf("/")?b.substr(0,b.lastIndexOf("/")+1):"./")+c.movieURL;c.noSWFCache&&(b+="?ts="+(new Date).getTime());return b};oa=function(){j=parseInt(c.flashVersion,10);if(8!==j&&9!==j)c.flashVersion=j=8;var b=c.debugMode||c.debugFlash?"_debug.swf":".swf";if(c.useHTML5Audio&&!c.html5Only&&c.audioFormats.mp4.required&&9>j)c.flashVersion=j=9;c.version=c.versionNumber+(c.html5Only?" (HTML5-only mode)":
9===j?" (AS3/Flash 9)":" (AS2/Flash 8)");8<j?(c.defaultOptions=r(c.defaultOptions,c.flash9Options),c.features.buffering=!0,c.defaultOptions=r(c.defaultOptions,c.movieStarOptions),c.filePatterns.flash9=RegExp("\\.(mp3|"+Wa.join("|")+")(\\?.*)?$","i"),c.features.movieStar=!0):c.features.movieStar=!1;c.filePattern=c.filePatterns[8!==j?"flash9":"flash8"];c.movieURL=(8===j?"soundmanager2.swf":"soundmanager2_flash9.swf").replace(".swf",b);c.features.peakData=c.features.waveformData=c.features.eqData=8<
j};Ga=function(b,c){if(!g)return!1;g._setPolling(b,c)};ra=function(){if(c.debugURLParam.test(ia))c.debugMode=!0};o=this.getSoundById;F=function(){var b=[];c.debugMode&&b.push("sm2_debug");c.debugFlash&&b.push("flash_debug");c.useHighPerformance&&b.push("high_performance");return b.join(" ")};ta=function(){t("fbHandler");var b=c.getMoviePercent(),e={type:"FLASHBLOCK"};if(c.html5Only)return!1;if(c.ok()){if(c.oMC)c.oMC.className=[F(),"movieContainer","swf_loaded"+(c.didFlashBlock?" swf_unblocked":"")].join(" ")}else{if(p)c.oMC.className=
F()+" movieContainer "+(null===b?"swf_timedout":"swf_error");c.didFlashBlock=!0;A({type:"ontimeout",ignoreInit:!0,error:e});E(e)}};na=function(b,c,d){"undefined"===typeof v[b]&&(v[b]=[]);v[b].push({method:c,scope:d||null,fired:!1})};A=function(b){b||(b={type:c.ok()?"onready":"ontimeout"});if(!k&&b&&!b.ignoreInit||"ontimeout"===b.type&&(c.ok()||s&&!b.ignoreInit))return!1;var e={success:b&&b.ignoreInit?c.ok():!s},d=b&&b.type?v[b.type]||[]:[],a=[],f,e=[e],i=p&&c.useFlashBlock&&!c.ok();if(b.error)e[0].error=
b.error;for(b=0,f=d.length;b<f;b++)!0!==d[b].fired&&a.push(d[b]);if(a.length)for(b=0,f=a.length;b<f;b++)if(a[b].scope?a[b].method.apply(a[b].scope,e):a[b].method.apply(this,e),!i)a[b].fired=!0;return!0};B=function(){h.setTimeout(function(){c.useFlashBlock&&ta();A();"function"===typeof c.onload&&c.onload.apply(h);c.waitForWindowLoad&&n.add(h,"load",B)},1)};xa=function(){if("undefined"!==typeof y)return y;var b=!1,c=navigator,d=c.plugins,a,f=h.ActiveXObject;if(d&&d.length)(c=c.mimeTypes)&&c["application/x-shockwave-flash"]&&
c["application/x-shockwave-flash"].enabledPlugin&&c["application/x-shockwave-flash"].enabledPlugin.description&&(b=!0);else if("undefined"!==typeof f&&!q.match(/MSAppHost/i)){try{a=new f("ShockwaveFlash.ShockwaveFlash")}catch(i){}b=!!a}return y=b};Ma=function(){var b,e,d=c.audioFormats;if(ya&&q.match(/os (1|2|3_0|3_1)/i)){if(c.hasHTML5=!1,c.html5Only=!0,c.oMC)c.oMC.style.display="none"}else if(c.useHTML5Audio&&(!c.html5||!c.html5.canPlayType))c.hasHTML5=!1;if(c.useHTML5Audio&&c.hasHTML5)for(e in d)if(d.hasOwnProperty(e)&&
(d[e].required&&!c.html5.canPlayType(d[e].type)||c.preferFlash&&(c.flash[e]||c.flash[d[e].type])))b=!0;c.ignoreFlash&&(b=!1);c.html5Only=c.hasHTML5&&c.useHTML5Audio&&!b;return!c.html5Only};ba=function(b){var e,d,a=0;if(b instanceof Array){for(e=0,d=b.length;e<d;e++)if(b[e]instanceof Object){if(c.canPlayMIME(b[e].type)){a=e;break}}else if(c.canPlayURL(b[e])){a=e;break}if(b[a].url)b[a]=b[a].url;b=b[a]}return b};Ja=function(b){if(!b._hasTimer)b._hasTimer=!0,!Aa&&c.html5PollingInterval&&(null===P&&0===
aa&&(P=h.setInterval(La,c.html5PollingInterval)),aa++)};Ka=function(b){if(b._hasTimer)b._hasTimer=!1,!Aa&&c.html5PollingInterval&&aa--};La=function(){var b;if(null!==P&&!aa)return h.clearInterval(P),P=null,!1;for(b=c.soundIDs.length-1;0<=b;b--)c.sounds[c.soundIDs[b]].isHTML5&&c.sounds[c.soundIDs[b]]._hasTimer&&c.sounds[c.soundIDs[b]]._onTimer()};E=function(b){b="undefined"!==typeof b?b:{};"function"===typeof c.onerror&&c.onerror.apply(h,[{type:"undefined"!==typeof b.type?b.type:null}]);"undefined"!==
typeof b.fatal&&b.fatal&&c.disable()};Pa=function(){if(!Ra||!xa())return!1;var b=c.audioFormats,e,d;for(d in b)if(b.hasOwnProperty(d)&&("mp3"===d||"mp4"===d))if(c.html5[d]=!1,b[d]&&b[d].related)for(e=b[d].related.length-1;0<=e;e--)c.html5[b[d].related[e]]=!1};this._setSandboxType=function(){};this._externalInterfaceOK=function(){if(c.swfLoaded)return!1;(new Date).getTime();c.swfLoaded=!0;da=!1;Ra&&Pa();setTimeout(ka,x?100:1)};X=function(b,e){function d(a,b){return'<param name="'+a+'" value="'+b+'" />'}
if(J&&K)return!1;if(c.html5Only)return oa(),c.oMC=T(c.movieID),ka(),K=J=!0,!1;var a=e||c.url,f=c.altURL||a,i=qa(),g=F(),h=null,h=m.getElementsByTagName("html")[0],j,k,l,h=h&&h.dir&&h.dir.match(/rtl/i),b="undefined"===typeof b?c.id:b;oa();c.url=Ia(Ca?a:f);e=c.url;c.wmode=!c.wmode&&c.useHighPerformance?"transparent":c.wmode;if(null!==c.wmode&&(q.match(/msie 8/i)||!x&&!c.useHighPerformance)&&navigator.platform.match(/win32|win64/i))c.wmode=null;i={name:b,id:b,src:e,quality:"high",allowScriptAccess:c.allowScriptAccess,
bgcolor:c.bgColor,pluginspage:Ua+"www.macromedia.com/go/getflashplayer",title:"JS/Flash audio component (SoundManager 2)",type:"application/x-shockwave-flash",wmode:c.wmode,hasPriority:"true"};if(c.debugFlash)i.FlashVars="debug=1";c.wmode||delete i.wmode;if(x)a=m.createElement("div"),k=['<object id="'+b+'" data="'+e+'" type="'+i.type+'" title="'+i.title+'" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="'+Ua+'download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0">',
d("movie",e),d("AllowScriptAccess",c.allowScriptAccess),d("quality",i.quality),c.wmode?d("wmode",c.wmode):"",d("bgcolor",c.bgColor),d("hasPriority","true"),c.debugFlash?d("FlashVars",i.FlashVars):"","</object>"].join("");else for(j in a=m.createElement("embed"),i)i.hasOwnProperty(j)&&a.setAttribute(j,i[j]);ra();g=F();if(i=qa())if(c.oMC=T(c.movieID)||m.createElement("div"),c.oMC.id){l=c.oMC.className;c.oMC.className=(l?l+" ":"movieContainer")+(g?" "+g:"");c.oMC.appendChild(a);if(x)j=c.oMC.appendChild(m.createElement("div")),
j.className="sm2-object-box",j.innerHTML=k;K=!0}else{c.oMC.id=c.movieID;c.oMC.className="movieContainer "+g;j=g=null;if(!c.useFlashBlock)if(c.useHighPerformance)g={position:"fixed",width:"8px",height:"8px",bottom:"0px",left:"0px",overflow:"hidden"};else if(g={position:"absolute",width:"6px",height:"6px",top:"-9999px",left:"-9999px"},h)g.left=Math.abs(parseInt(g.left,10))+"px";if(Ya)c.oMC.style.zIndex=1E4;if(!c.debugFlash)for(l in g)g.hasOwnProperty(l)&&(c.oMC.style[l]=g[l]);try{x||c.oMC.appendChild(a);
i.appendChild(c.oMC);if(x)j=c.oMC.appendChild(m.createElement("div")),j.className="sm2-object-box",j.innerHTML=k;K=!0}catch(n){throw Error(t("domError")+" \n"+n.toString());}}return J=!0};W=function(){if(c.html5Only)return X(),!1;if(g||!c.url)return!1;g=c.getMovie(c.id);if(!g)N?(x?c.oMC.innerHTML=sa:c.oMC.appendChild(N),N=null,J=!0):X(c.id,c.url),g=c.getMovie(c.id);"function"===typeof c.oninitmovie&&setTimeout(c.oninitmovie,1);return!0};C=function(){setTimeout(Fa,1E3)};Fa=function(){var b,e=!1;if(!c.url||
O)return!1;O=!0;n.remove(h,"load",C);if(da&&!Ba)return!1;k||(b=c.getMoviePercent(),0<b&&100>b&&(e=!0));setTimeout(function(){b=c.getMoviePercent();if(e)return O=!1,h.setTimeout(C,1),!1;!k&&Sa&&(null===b?c.useFlashBlock||0===c.flashLoadTimeout?c.useFlashBlock&&ta():Y(!0):0!==c.flashLoadTimeout&&Y(!0))},c.flashLoadTimeout)};V=function(){if(Ba||!da)return n.remove(h,"focus",V),!0;Ba=Sa=!0;O=!1;C();n.remove(h,"focus",V);return!0};Qa=function(){};L=function(b){if(k)return!1;if(c.html5Only)return k=!0,
B(),!0;var e=!0,d;if(!c.useFlashBlock||!c.flashLoadTimeout||c.getMoviePercent())k=!0,s&&(d={type:!y&&p?"NO_FLASH":"INIT_TIMEOUT"});if(s||b){if(c.useFlashBlock&&c.oMC)c.oMC.className=F()+" "+(null===c.getMoviePercent()?"swf_timedout":"swf_error");A({type:"ontimeout",error:d,ignoreInit:!0});E(d);e=!1}s||(c.waitForWindowLoad&&!la?n.add(h,"load",B):B());return e};Ea=function(){var b,e=c.setupOptions;for(b in e)e.hasOwnProperty(b)&&("undefined"===typeof c[b]?c[b]=e[b]:c[b]!==e[b]&&(c.setupOptions[b]=c[b]))};
ka=function(){if(k)return!1;if(c.html5Only){if(!k)n.remove(h,"load",c.beginDelayedInit),c.enabled=!0,L();return!0}W();try{g._externalInterfaceTest(!1),Ga(!0,c.flashPollingInterval||(c.useHighPerformance?10:50)),c.debugMode||g._disableDebug(),c.enabled=!0,c.html5Only||n.add(h,"unload",ja)}catch(b){return E({type:"JS_TO_FLASH_EXCEPTION",fatal:!0}),Y(!0),L(),!1}L();n.remove(h,"load",c.beginDelayedInit);return!0};D=function(){if(M)return!1;M=!0;Ea();ra();!y&&c.hasHTML5&&c.setup({useHTML5Audio:!0,preferFlash:!1});
Na();c.html5.usingFlash=Ma();p=c.html5.usingFlash;Qa();!y&&p&&c.setup({flashLoadTimeout:1});m.removeEventListener&&m.removeEventListener("DOMContentLoaded",D,!1);W();return!0};wa=function(){"complete"===m.readyState&&(D(),m.detachEvent("onreadystatechange",wa));return!0};pa=function(){la=!0;n.remove(h,"load",pa)};xa();n.add(h,"focus",V);n.add(h,"load",C);n.add(h,"load",pa);m.addEventListener?m.addEventListener("DOMContentLoaded",D,!1):m.attachEvent?m.attachEvent("onreadystatechange",wa):E({type:"NO_DOM2_EVENTS",
fatal:!0})}var ea=null;if("undefined"===typeof SM2_DEFER||!SM2_DEFER)ea=new R;fa.SoundManager=R;fa.soundManager=ea})(window);