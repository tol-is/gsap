/*!
 * VERSION: 0.2.2
 * DATE: 2014-12-31
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
 * ScrambleTextPlugin is a Club GreenSock membership benefit; You must have a valid membership to use
 * this code without violating the terms of use. Visit http://greensock.com/club/ to sign up or get more details.
 * This work is subject to the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";var t=function(e){var i=e.nodeType,r="";if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)r+=t(e)}else if(3===i||4===i)return e.nodeValue;return r},e=function(t,e){for(var i=e.length,r="";--t>-1;)r+=e[0|Math.random()*i];return r},i=function(t){this.chars=t.split(""),this.sets=[],this.length=50;var i;for(i=0;20>i;i++)this.sets[i]=e(80,this.chars);this.grow=function(t){for(i=0;20>i;i++)this.sets[i]+=e(t-this.length,this.chars);this.length=t}},r="ABCDEFGHIJKLMNOPQRSTUVWXYZ",s=r.toLowerCase(),n={upperCase:new i(r),lowerCase:new i(s),upperAndLowerCase:new i(r+s)},a=_gsScope._gsDefine.plugin({propName:"scrambleText",version:"0.2.2",API:2,overwriteProps:["scrambleText","text"],init:function(e,r,s){if(this._prop="innerHTML"in e?"innerHTML":"textContent"in e?"textContent":0,!this._prop)return!1;this._target=e,"object"!=typeof r&&(r={text:r});var a,o,l,h;return this._delimiter=a=r.delimiter||"",this._original=t(e).replace(/\s+/g," ").split("&nbsp;").join("").split(a),this._text=(r.text||r.value||"").replace(/\s+/g," ").split(a),this._hasClass=!1,"string"==typeof r.newClass&&(this._newClass=r.newClass,this._hasClass=!0),"string"==typeof r.oldClass&&(this._oldClass=r.oldClass,this._hasClass=!0),o=this._text.length-this._original.length,this._length=this._original.join(a).length,this._lengthDif=this._text.join(a).length-this._length,this._fillChar=r.fillChar||r.chars&&-1!==r.chars.indexOf(" ")?"&nbsp;":"",this._charSet=h=n[r.chars||"upperCase"]||new i(r.chars),this._speed=.016/(r.speed||1),this._prevScrambleTime=0,this._setIndex=0|20*Math.random(),l=this._length+Math.max(this._lengthDif,0),l>h.length&&h.grow(l),this._chars=h.sets[this._setIndex],this._revealDelay=r.revealDelay||0,this._tweenLength=r.tweenLength!==!1,this._tween=s,!0},set:function(t){var e,i,r,s,n,a,o=this._text.length,l=this._delimiter,h=this._tween._time,u=h-this._prevScrambleTime;this._revealDelay&&(this._tween.vars.runBackwards&&(h=this._tween._duration-h),t=0===h?0:this._revealDelay>h?1e-6:h===this._tween._duration?1:this._tween._ease.getRatio((h-this._revealDelay)/(this._tween._duration-this._revealDelay))),0>t?t=0:t>1&&(t=1),e=0|t*o+.5,i=this._text.slice(0,e).join(l),r=this._original.slice(e).join(l),t&&((u>this._speed||-this._speed>u)&&(this._setIndex=(this._setIndex+(0|19*Math.random()))%20,this._chars=this._charSet.sets[this._setIndex],this._prevScrambleTime+=u),r=this._chars.substr(i.length,0|this._length+(this._tweenLength?1-(t=1-t)*t*t*t:1)*this._lengthDif-i.length+.5)),this._hasClass?(s=this._newClass&&0!==e,n=this._oldClass&&e!==o,a=(s?"<span class='"+this._newClass+"'>":"")+i+(s?"</span>":"")+(n?"<span class='"+this._oldClass+"'>":"")+l+r+(n?"</span>":"")):a=i+l+r,this._target[this._prop]="&nbsp;"===this._fillChar&&-1!==a.indexOf("  ")?a.split("  ").join("&nbsp;&nbsp;"):a}}),o=a.prototype;o._newClass=o._oldClass="";for(o in n)n[o.toLowerCase()]=n[o],n[o.toUpperCase()]=n[o]}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()();