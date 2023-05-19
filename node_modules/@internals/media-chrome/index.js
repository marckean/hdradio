var MediaChrome=(()=>{var Je=Object.defineProperty;var Fr=Object.getOwnPropertyDescriptor;var Kr=Object.getOwnPropertyNames;var Gr=Object.prototype.hasOwnProperty;var Wr=(i,t,e)=>t in i?Je(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var Kt=(i,t)=>{for(var e in t)Je(i,e,{get:t[e],enumerable:!0})},Yr=(i,t,e,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of Kr(t))!Gr.call(i,s)&&s!==e&&Je(i,s,{get:()=>t[s],enumerable:!(r=Fr(t,s))||r.enumerable});return i};var Qr=i=>Yr(Je({},"__esModule",{value:!0}),i);var ci=(i,t,e)=>(Wr(i,typeof t!="symbol"?t+"":t,e),e),Gt=(i,t,e)=>{if(!t.has(i))throw TypeError("Cannot "+e)};var l=(i,t,e)=>(Gt(i,t,"read from private field"),e?e.call(i):t.get(i)),A=(i,t,e)=>{if(t.has(i))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(i):t.set(i,e)},h=(i,t,e,r)=>(Gt(i,t,"write to private field"),r?r.call(i,e):t.set(i,e),e);var P=(i,t,e)=>(Gt(i,t,"access private method"),e);var Qs={};Kt(Qs,{MediaAirplayButton:()=>_i,MediaCaptionsButton:()=>rr,MediaCastButton:()=>Ti,MediaChromeButton:()=>M,MediaChromeRange:()=>pe,MediaControlBar:()=>Yi,MediaController:()=>Fi,MediaDurationDisplay:()=>qi,MediaFullscreenButton:()=>lr,MediaGestureReceiver:()=>Di,MediaLiveButton:()=>cr,MediaLoadingIndicator:()=>Vr,MediaMuteButton:()=>pr,MediaPipButton:()=>fr,MediaPlayButton:()=>_r,MediaPlaybackRateButton:()=>Sr,MediaPosterImage:()=>Lr,MediaPreviewThumbnail:()=>wr,MediaPreviewTimeDisplay:()=>yr,MediaSeekBackwardButton:()=>Cr,MediaSeekForwardButton:()=>nr,MediaTimeDisplay:()=>Xi,MediaTimeRange:()=>Nr,MediaVolumeRange:()=>Hr,constants:()=>tt,labels:()=>mi,timeUtils:()=>st});var tt={};Kt(tt,{AttributeToStateChangeEventMap:()=>Wt,AvailabilityStates:()=>Q,MediaStateChangeEvents:()=>te,MediaStateReceiverAttributes:()=>g,MediaUIAttributes:()=>a,MediaUIEvents:()=>p,PointerTypes:()=>et,ReadyStates:()=>Zr,StateChangeEventToAttributeMap:()=>qr,StreamTypes:()=>O,TextTrackKinds:()=>ie,TextTrackModes:()=>Te});var p={MEDIA_PLAY_REQUEST:"mediaplayrequest",MEDIA_PAUSE_REQUEST:"mediapauserequest",MEDIA_MUTE_REQUEST:"mediamuterequest",MEDIA_UNMUTE_REQUEST:"mediaunmuterequest",MEDIA_VOLUME_REQUEST:"mediavolumerequest",MEDIA_SEEK_REQUEST:"mediaseekrequest",MEDIA_AIRPLAY_REQUEST:"mediaairplayrequest",MEDIA_ENTER_FULLSCREEN_REQUEST:"mediaenterfullscreenrequest",MEDIA_EXIT_FULLSCREEN_REQUEST:"mediaexitfullscreenrequest",MEDIA_PREVIEW_REQUEST:"mediapreviewrequest",MEDIA_ENTER_PIP_REQUEST:"mediaenterpiprequest",MEDIA_EXIT_PIP_REQUEST:"mediaexitpiprequest",MEDIA_ENTER_CAST_REQUEST:"mediaentercastrequest",MEDIA_EXIT_CAST_REQUEST:"mediaexitcastrequest",MEDIA_SHOW_TEXT_TRACKS_REQUEST:"mediashowtexttracksrequest",MEDIA_HIDE_TEXT_TRACKS_REQUEST:"mediahidetexttracksrequest",MEDIA_SHOW_SUBTITLES_REQUEST:"mediashowsubtitlesrequest",MEDIA_DISABLE_SUBTITLES_REQUEST:"mediadisablesubtitlesrequest",MEDIA_PLAYBACK_RATE_REQUEST:"mediaplaybackraterequest",MEDIA_SEEK_TO_LIVE_REQUEST:"mediaseektoliverequest",REGISTER_MEDIA_STATE_RECEIVER:"registermediastatereceiver",UNREGISTER_MEDIA_STATE_RECEIVER:"unregistermediastatereceiver"},te={MEDIA_AIRPLAY_UNAVAILABLE:"mediaairplayunavailablechange",MEDIA_PIP_UNAVAILABLE:"mediapipunavailablechange",MEDIA_PAUSED:"mediapausedchange",MEDIA_HAS_PLAYED:"mediahasplayedchange",MEDIA_MUTED:"mediamutedchange",MEDIA_VOLUME_LEVEL:"mediavolumelevelchange",MEDIA_VOLUME:"mediavolumechange",MEDIA_VOLUME_UNAVAILABLE:"mediavolumeunavailablechange",MEDIA_IS_PIP:"mediaispipchange",MEDIA_IS_CASTING:"mediaiscastingchange",MEDIA_SUBTITLES_LIST:"mediasubtitleslistchange",MEDIA_SUBTITLES_SHOWING:"mediasubtitlesshowingchange",MEDIA_IS_FULLSCREEN:"mediaisfullscreenchange",MEDIA_PLAYBACK_RATE:"mediaplaybackratechange",MEDIA_CURRENT_TIME:"mediacurrenttimechange",MEDIA_DURATION:"mediadurationchange",MEDIA_SEEKABLE:"mediaseekablechange",MEDIA_PREVIEW_IMAGE:"mediapreviewimagechange",MEDIA_PREVIEW_COORDS:"mediapreviewcoordschange",MEDIA_LOADING:"medialoadingchange",USER_INACTIVE:"userinactivechange",BREAKPOINTS_CHANGE:"breakpointchange"},g={MEDIA_CHROME_ATTRIBUTES:"mediachromeattributes",MEDIA_CONTROLLER:"mediacontroller"},a={MEDIA_AIRPLAY_UNAVAILABLE:"mediaairplayunavailable",MEDIA_FULLSCREEN_UNAVAILABLE:"mediafullscreenunavailable",MEDIA_PIP_UNAVAILABLE:"mediapipunavailable",MEDIA_CAST_UNAVAILABLE:"mediacastunavailable",MEDIA_PAUSED:"mediapaused",MEDIA_HAS_PLAYED:"mediahasplayed",MEDIA_MUTED:"mediamuted",MEDIA_VOLUME_LEVEL:"mediavolumelevel",MEDIA_VOLUME:"mediavolume",MEDIA_VOLUME_UNAVAILABLE:"mediavolumeunavailable",MEDIA_IS_PIP:"mediaispip",MEDIA_IS_CASTING:"mediaiscasting",MEDIA_SUBTITLES_LIST:"mediasubtitleslist",MEDIA_SUBTITLES_SHOWING:"mediasubtitlesshowing",MEDIA_IS_FULLSCREEN:"mediaisfullscreen",MEDIA_PLAYBACK_RATE:"mediaplaybackrate",MEDIA_CURRENT_TIME:"mediacurrenttime",MEDIA_DURATION:"mediaduration",MEDIA_SEEKABLE:"mediaseekable",MEDIA_PREVIEW_TIME:"mediapreviewtime",MEDIA_PREVIEW_IMAGE:"mediapreviewimage",MEDIA_PREVIEW_COORDS:"mediapreviewcoords",MEDIA_LOADING:"medialoading",MEDIA_BUFFERED:"mediabuffered",MEDIA_STREAM_TYPE:"mediastreamtype",MEDIA_TARGET_LIVE_WINDOW:"mediatargetlivewindow",MEDIA_TIME_IS_LIVE:"mediatimeislive"},qr=Object.entries(te).reduce((i,[t,e])=>{let r=a[t];return r&&(i[e]=r),i},{userinactivechange:"userinactive"}),Wt=Object.entries(a).reduce((i,[t,e])=>{let r=te[t];return r&&(i[e]=r),i},{userinactive:"userinactivechange"}),ie={SUBTITLES:"subtitles",CAPTIONS:"captions",DESCRIPTIONS:"descriptions",CHAPTERS:"chapters",METADATA:"metadata"},Te={DISABLED:"disabled",HIDDEN:"hidden",SHOWING:"showing"},Zr={HAVE_NOTHING:0,HAVE_METADATA:1,HAVE_CURRENT_DATA:2,HAVE_FUTURE_DATA:3,HAVE_ENOUGH_DATA:4},et={MOUSE:"mouse",PEN:"pen",TOUCH:"touch"},Q={UNAVAILABLE:"unavailable",UNSUPPORTED:"unsupported"},O={LIVE:"live",ON_DEMAND:"on-demand",UNKNOWN:"unknown"};var U={AUDIO_PLAYER:()=>"audio player",VIDEO_PLAYER:()=>"video player",VOLUME:()=>"volume",SEEK:()=>"seek",CLOSED_CAPTIONS:()=>"closed captions",PLAYBACK_RATE:({playbackRate:i=1}={})=>`current playback rate ${i}`,PLAYBACK_TIME:()=>"playback time",MEDIA_LOADING:()=>"media loading"},v={PLAY:()=>"play",PAUSE:()=>"pause",MUTE:()=>"mute",UNMUTE:()=>"unmute",AIRPLAY:()=>"air play",ENTER_CAST:()=>"start casting",EXIT_CAST:()=>"stop casting",ENTER_FULLSCREEN:()=>"enter fullscreen mode",EXIT_FULLSCREEN:()=>"exit fullscreen mode",ENTER_PIP:()=>"enter picture in picture mode",EXIT_PIP:()=>"exit picture in picture mode",SEEK_FORWARD_N_SECS:({seekOffset:i=30}={})=>`seek forward ${i} seconds`,SEEK_BACK_N_SECS:({seekOffset:i=30}={})=>`seek back ${i} seconds`,SEEK_LIVE:()=>"seek to live",PLAYING_LIVE:()=>"playing live"},mi={...U,...v};var st={};Kt(st,{emptyTimeRanges:()=>pi,formatAsTimePhrase:()=>X,formatTime:()=>$,serializeTimeRanges:()=>Yt});function it(i,t=!1){return i.split("_").map(function(e,r){return(r||t?e[0].toUpperCase():e[0].toLowerCase())+e.slice(1).toLowerCase()}).join("")}function Ei(i){return typeof i=="number"&&!Number.isNaN(i)&&Number.isFinite(i)}var rt=i=>new Promise(t=>setTimeout(t,i));var hi=[{singular:"hour",plural:"hours"},{singular:"minute",plural:"minutes"},{singular:"second",plural:"seconds"}],jr=(i,t)=>{let e=i===1?hi[t].singular:hi[t].plural;return`${i} ${e}`},X=i=>{if(!Ei(i))return"";let t=Math.abs(i),e=t!==i,r=new Date(0,0,0,0,0,t,0);return`${[r.getHours(),r.getMinutes(),r.getSeconds()].map((c,u)=>c&&jr(c,u)).filter(c=>c).join(", ")}${e?" remaining":""}`};function $(i,t){let e=!1;i<0&&(e=!0,i=0-i),i=i<0?0:i;let r=Math.floor(i%60),s=Math.floor(i/60%60),n=Math.floor(i/3600),d=Math.floor(t/60%60),c=Math.floor(t/3600);return(isNaN(i)||i===1/0)&&(n=s=r="-"),n=n>0||c>0?n+":":"",s=((n||d>=10)&&s<10?"0"+s:s)+":",r=r<10?"0"+r:r,(e?"-":"")+n+s+r}var pi=Object.freeze({length:0,start(i){let t=i>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'start' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0},end(i){let t=i>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'end' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0}});function Yt(i=pi){return Array.from(i).map((t,e)=>[Number(i.start(e).toFixed(3)),Number(i.end(e).toFixed(3))].join(":")).join(" ")}var Ai=(i,t,e=".value")=>{let r=i.querySelector(e);!r||(r.textContent=t)},zr=(i,t)=>{let e=`slot[name="${t}"]`,r=i.shadowRoot.querySelector(e);return r?r.children:[]},bi=(i,t)=>zr(i,t)[0],Le=(i,t)=>!i||!t?!1:i.contains(t)?!0:Le(i,t.getRootNode().host),De=(i,t)=>{if(!i)return null;let e=i.closest(t);return e||De(i.getRootNode().host,t)};function S(i,t){var r;let e;for(e of i.querySelectorAll("style")){let s;try{s=(r=e.sheet)==null?void 0:r.cssRules}catch{continue}for(let n of s!=null?s:[])if(n.selectorText===t)return n}return e!=null&&e.sheet?(e.sheet.insertRule(`${t}{}`,e.sheet.cssRules.length),e.sheet.cssRules[e.sheet.cssRules.length-1]):{style:{setProperty:()=>{},removeProperty:()=>{}}}}function T(i,t){let e=i.getAttribute(t);return e!=null?+e:void 0}function D(i,t,e){if(T(i,t)!=e){if(e==null){i.removeAttribute(t);return}i.setAttribute(t,`${+e}`)}}function I(i,t){return i.hasAttribute(t)}function _(i,t,e){if(I(i,t)!=e){if(e==null){i.removeAttribute(t);return}i.toggleAttribute(t,e)}}function R(i,t){var e;return(e=i.getAttribute(t))!=null?e:void 0}function C(i,t,e){if(R(i,t)!=e){if(e==null){i.removeAttribute(t);return}i.setAttribute(t,`${e}`)}}var at=class{addEventListener(){}removeEventListener(){}dispatchEvent(){return!0}},Qt=class{observe(){}},gi={ResizeObserver:Qt,HTMLElement:class extends at{},DocumentFragment:class extends at{},customElements:{get:function(){},define:function(){},whenDefined:function(){}},CustomEvent:function(){},getComputedStyle:function(){}},Xr={createElement:function(){return new gi.HTMLElement},addEventListener(){},removeEventListener(){}},fi=typeof window=="undefined"||typeof window.customElements=="undefined",o=fi?gi:window,E=fi?Xr:window.document;var Ii=E.createElement("template");Ii.innerHTML=`
<style>
  :host {
    font: var(--media-font,
      var(--media-font-weight, bold)
      var(--media-font-size, 14px) /
      var(--media-text-content-height, var(--media-control-height, 24px))
      var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
    color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
    background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
    padding: var(--media-control-padding, 10px);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    box-sizing: border-box;
    transition: background .15s linear;
    pointer-events: auto;
    cursor: pointer;
  }

  
  :host(:focus-visible) {
    box-shadow: inset 0 0 0 2px rgb(27 127 204 / .9);
    outline: 0;
  }
  
  :host(:where(:focus)) {
    box-shadow: none;
    outline: 0;
  }

  :host(:hover) {
    background: var(--media-control-hover-background, rgba(50 50 70 / .7));
  }

  svg, img, ::slotted(svg), ::slotted(img) {
    width: var(--media-button-icon-width);
    height: var(--media-button-icon-height, var(--media-control-height, 24px));
    transform: var(--media-button-icon-transform);
    transition: var(--media-button-icon-transition);
    fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
    vertical-align: middle;
    max-width: 100%;
    max-height: 100%;
    min-width: 100%;
  }
</style>
`;var V,Re,re,Ce,nt=class extends o.HTMLElement{constructor(e={}){super();A(this,V,void 0);ci(this,"preventClick",!1);A(this,Re,e=>{this.preventClick||this.handleClick(e)});A(this,re,e=>{let{key:r}=e;if(!this.keysUsed.includes(r)){this.removeEventListener("keyup",l(this,re));return}this.preventClick||this.handleClick(e)});A(this,Ce,e=>{let{metaKey:r,altKey:s,key:n}=e;if(r||s||!this.keysUsed.includes(n)){this.removeEventListener("keyup",l(this,re));return}this.addEventListener("keyup",l(this,re),{once:!0})});if(!this.shadowRoot){this.attachShadow({mode:"open"});let s=Ii.content.cloneNode(!0);this.nativeEl=s;let n=e.slotTemplate;n||(n=E.createElement("template"),n.innerHTML=`<slot>${e.defaultContent||""}</slot>`),this.nativeEl.appendChild(n.content.cloneNode(!0)),this.shadowRoot.appendChild(s)}let{style:r}=S(this.shadowRoot,":host");r.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`)}static get observedAttributes(){return["disabled",g.MEDIA_CONTROLLER]}enable(){this.addEventListener("click",l(this,Re)),this.addEventListener("keydown",l(this,Ce)),this.tabIndex=0}disable(){this.removeEventListener("click",l(this,Re)),this.removeEventListener("keydown",l(this,Ce)),this.removeEventListener("keyup",l(this,re)),this.tabIndex=-1}attributeChangedCallback(e,r,s){var n,d,c,u,m;e===g.MEDIA_CONTROLLER?(r&&((d=(n=l(this,V))==null?void 0:n.unassociateElement)==null||d.call(n,this),h(this,V,null)),s&&(h(this,V,(c=this.getRootNode())==null?void 0:c.getElementById(s)),(m=(u=l(this,V))==null?void 0:u.associateElement)==null||m.call(u,this))):e==="disabled"&&s!==r&&(s==null?this.enable():this.disable())}connectedCallback(){var r,s,n;this.hasAttribute("disabled")||this.enable(),this.setAttribute("role","button");let e=this.getAttribute(g.MEDIA_CONTROLLER);e&&(h(this,V,(r=this.getRootNode())==null?void 0:r.getElementById(e)),(n=(s=l(this,V))==null?void 0:s.associateElement)==null||n.call(s,this))}disconnectedCallback(){var e,r;this.disable(),(r=(e=l(this,V))==null?void 0:e.unassociateElement)==null||r.call(e,this),h(this,V,null)}get keysUsed(){return["Enter"," "]}handleClick(e){}};V=new WeakMap,Re=new WeakMap,re=new WeakMap,Ce=new WeakMap;o.customElements.get("media-chrome-button")||o.customElements.define("media-chrome-button",nt);var M=nt;var Jr=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.13 3H3.87a.87.87 0 0 0-.87.87v13.26a.87.87 0 0 0 .87.87h3.4L9 16H5V5h16v11h-4l1.72 2h3.4a.87.87 0 0 0 .87-.87V3.87a.87.87 0 0 0-.86-.87Zm-8.75 11.44a.5.5 0 0 0-.76 0l-4.91 5.73a.5.5 0 0 0 .38.83h9.82a.501.501 0 0 0 .38-.83l-4.91-5.73Z"/>
</svg>
`,vi=E.createElement("template");vi.innerHTML=`
  <slot name="airplay">${Jr}</slot>
`;var ot=class extends M{static get observedAttributes(){return[...super.observedAttributes,a.MEDIA_AIRPLAY_UNAVAILABLE]}constructor(t={}){super({slotTemplate:vi,...t})}connectedCallback(){this.setAttribute("aria-label",v.AIRPLAY()),super.connectedCallback()}get mediaAirplayUnavailable(){return R(this,a.MEDIA_AIRPLAY_UNAVAILABLE)}set mediaAirplayUnavailable(t){C(this,a.MEDIA_AIRPLAY_UNAVAILABLE,t)}handleClick(){let t=new o.CustomEvent(p.MEDIA_AIRPLAY_REQUEST,{composed:!0,bubbles:!0});this.dispatchEvent(t)}};o.customElements.get("media-airplay-button")||o.customElements.define("media-airplay-button",ot);var _i=ot;var es='<svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/></g></svg>',ts='<svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/><path class="cast_caf_icon_boxfill" d="M5,7 L5,8.63 C8,8.6 13.37,14 13.37,17 L19,17 L19,7 Z"/></g></svg>',Si=E.createElement("template");Si.innerHTML=`
  <style>
  :host([${a.MEDIA_IS_CASTING}]) slot:not([name=exit]) > *,
  :host([${a.MEDIA_IS_CASTING}]) ::slotted(:not([slot=exit])) {
    display: none !important;
  }

  
  :host(:not([${a.MEDIA_IS_CASTING}])) slot:not([name=enter]) > *,
  :host(:not([${a.MEDIA_IS_CASTING}])) ::slotted(:not([slot=enter])) {
    display: none !important;
  }
  </style>

  <slot name="enter">${es}</slot>
  <slot name="exit">${ts}</slot>
`;var Mi=i=>{let e=i.getAttribute(a.MEDIA_IS_CASTING)!=null?v.EXIT_CAST():v.ENTER_CAST();i.setAttribute("aria-label",e)},dt=class extends M{static get observedAttributes(){return[...super.observedAttributes,a.MEDIA_IS_CASTING,a.MEDIA_CAST_UNAVAILABLE]}constructor(t={}){super({slotTemplate:Si,...t})}connectedCallback(){Mi(this),super.connectedCallback()}attributeChangedCallback(t,e,r){t===a.MEDIA_IS_CASTING&&Mi(this),super.attributeChangedCallback(t,e,r)}get mediaIsCasting(){return I(this,a.MEDIA_IS_CASTING)}set mediaIsCasting(t){_(this,a.MEDIA_IS_CASTING,t)}get mediaCastUnavailable(){return R(this,a.MEDIA_CAST_UNAVAILABLE)}set mediaCastUnavailable(t){C(this,a.MEDIA_CAST_UNAVAILABLE,t)}handleClick(){let t=this.mediaIsCasting?p.MEDIA_EXIT_CAST_REQUEST:p.MEDIA_ENTER_CAST_REQUEST;this.dispatchEvent(new o.CustomEvent(t,{composed:!0,bubbles:!0}))}};o.customElements.get("media-cast-button")||o.customElements.define("media-cast-button",dt);var Ti=dt;var Li=E.createElement("template");Li.innerHTML=`
<style>
  :host {
    display: var(--media-control-display, var(--media-gesture-receiver-display, inline-block));
    box-sizing: border-box;
  }
</style>
`;var w,lt=class extends o.HTMLElement{constructor(e={}){super();A(this,w,void 0);if(!this.shadowRoot){let r=this.attachShadow({mode:"open"}),s=Li.content.cloneNode(!0);this.nativeEl=s;let n=e.slotTemplate;n||(n=E.createElement("template"),n.innerHTML=`<slot>${e.defaultContent||""}</slot>`),this.nativeEl.appendChild(n.content.cloneNode(!0)),r.appendChild(s)}}static get observedAttributes(){return[g.MEDIA_CONTROLLER,a.MEDIA_PAUSED]}attributeChangedCallback(e,r,s){var n,d,c,u,m;e===g.MEDIA_CONTROLLER&&(r&&((d=(n=l(this,w))==null?void 0:n.unassociateElement)==null||d.call(n,this),h(this,w,null)),s&&(h(this,w,(c=this.getRootNode())==null?void 0:c.getElementById(s)),(m=(u=l(this,w))==null?void 0:u.associateElement)==null||m.call(u,this)))}connectedCallback(){var e,r,s,n;this.tabIndex=-1,this.setAttribute("aria-hidden","true"),h(this,w,is(this)),this.getAttribute(g.MEDIA_CONTROLLER)&&((r=(e=l(this,w))==null?void 0:e.associateElement)==null||r.call(e,this)),(s=l(this,w))==null||s.addEventListener("pointerdown",this),(n=l(this,w))==null||n.addEventListener("click",this)}disconnectedCallback(){var e,r,s,n;this.getAttribute(g.MEDIA_CONTROLLER)&&((r=(e=l(this,w))==null?void 0:e.unassociateElement)==null||r.call(e,this)),(s=l(this,w))==null||s.removeEventListener("pointerdown",this),(n=l(this,w))==null||n.removeEventListener("click",this),h(this,w,null)}handleEvent(e){var n;let r=(n=e.composedPath())==null?void 0:n[0];if(!!["video","media-controller"].includes(r==null?void 0:r.localName)){if(e.type==="pointerdown")this._pointerType=e.pointerType;else if(e.type==="click"){let{clientX:d,clientY:c}=e,{left:u,top:m,width:b,height:L}=this.getBoundingClientRect(),N=d-u,B=c-m;if(N<0||B<0||N>b||B>L||b===0&&L===0)return;let{pointerType:Y=this._pointerType}=e;if(this._pointerType=void 0,Y===et.TOUCH){this.handleTap(e);return}else if(Y===et.MOUSE){this.handleMouseClick(e);return}}}}get mediaPaused(){return I(this,a.MEDIA_PAUSED)}set mediaPaused(e){_(this,a.MEDIA_PAUSED,e)}handleTap(e){}handleMouseClick(e){let r=this.mediaPaused?p.MEDIA_PLAY_REQUEST:p.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new o.CustomEvent(r,{composed:!0,bubbles:!0}))}};w=new WeakMap;function is(i){var e;let t=i.getAttribute(g.MEDIA_CONTROLLER);return t?(e=i.getRootNode())==null?void 0:e.getElementById(t):De(i,"media-controller")}o.customElements.get("media-gesture-receiver")||o.customElements.define("media-gesture-receiver",lt);var Di=lt;var f={AUDIO:"audio",AUTOHIDE:"autohide",BREAKPOINTS:"breakpoints",GESTURES_DISABLED:"gesturesdisabled",KEYBOARD_CONTROL:"keyboardcontrol",NO_AUTOHIDE:"noautohide",USER_INACTIVE:"userinactive"},Ri=E.createElement("template");Ri.innerHTML=`
  <style>
    
    :host([${a.MEDIA_IS_FULLSCREEN}]) ::slotted([slot=media]) {
      outline: none;
    }

    :host {
      box-sizing: border-box;
      position: relative;
      display: inline-block;
      line-height: 0;
      background-color: var(--media-background-color, #000);
    }

    :host(:not([${f.AUDIO}])) [part~=layer]:not([part~=media-layer]) {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      display: flex;
      flex-flow: column nowrap;
      align-items: start;
      pointer-events: none;
      background: none;
    }

    
    :host([${f.AUDIO}]) [part~=layer][part~=gesture-layer] {
      height: 0;
      display: block;
    }

    
    :host(:not([${f.AUDIO}])[${f.GESTURES_DISABLED}]) ::slotted([slot=gestures-chrome]),
    :host(:not([${f.AUDIO}])[${f.GESTURES_DISABLED}]) media-gesture-receiver[slot=gestures-chrome] {
      display: none;
    }

    
    ::slotted(:not([slot=media]):not([slot=poster]):not(media-loading-indicator)) {
      pointer-events: auto;
    }

    :host(:not([${f.AUDIO}])) *[part~=layer][part~=centered-layer] {
      align-items: center;
      justify-content: center;
    }

    :host(:not([${f.AUDIO}])) ::slotted(media-gesture-receiver[slot=gestures-chrome]),
    :host(:not([${f.AUDIO}])) media-gesture-receiver[slot=gestures-chrome] {
      align-self: stretch;
      flex-grow: 1;
    }

    slot[name=middle-chrome] {
      display: inline;
      flex-grow: 1;
      pointer-events: none;
      background: none;
    }

    
    ::slotted([slot=media]),
    ::slotted([slot=poster]) {
      width: 100%;
      height: 100%;
    }

    
    :host(:not([${f.AUDIO}])) .spacer {
      flex-grow: 1;
    }

    
    :host(:-webkit-full-screen) {
      
      width: 100% !important;
      height: 100% !important;
    }

    
    ::slotted(:not([slot=media]):not([${f.NO_AUTOHIDE}])) {
      opacity: 1;
      transition: opacity 0.25s;
    }

    
    :host([${f.USER_INACTIVE}]:not([${a.MEDIA_PAUSED}]):not([${a.MEDIA_IS_CASTING}]):not([${f.AUDIO}])) ::slotted(:not([slot=media]):not([${f.NO_AUTOHIDE}])) {
      opacity: 0;
      transition: opacity 1s;
    }

    ::slotted(media-control-bar)  {
      align-self: stretch;
    }

    :host([${a.MEDIA_HAS_PLAYED}]) ::slotted([slot=poster]) {
      display: none;
    }
  </style>

  <slot name="media" part="layer media-layer"></slot>
  <slot name="poster" part="layer poster-layer"></slot>
  <slot name="gestures-chrome" part="layer gesture-layer">
    <media-gesture-receiver slot="gestures-chrome"></media-gesture-receiver>
  </slot>
  <span part="layer vertical-layer">
    <slot name="top-chrome" part="top chrome"></slot>
    <slot name="middle-chrome" part="middle chrome"></slot>
    <slot name="centered-chrome" part="layer centered-layer center centered chrome"></slot>
    
    <slot part="bottom chrome"></slot>
  </span>
`;var rs=Object.values(a),ss="sm:384 md:576 lg:768 xl:960",as=i=>{var t;for(let e of i){let r=e.target;if(!r.isConnected)continue;let s=(t=r.getAttribute(f.BREAKPOINTS))!=null?t:ss,n=ns(s),d=os(n,e.contentRect),c=!1;if(Object.keys(n).forEach(u=>{if(d.includes(u)){r.hasAttribute(`breakpoint${u}`)||(r.setAttribute(`breakpoint${u}`,""),c=!0);return}r.hasAttribute(`breakpoint${u}`)&&(r.removeAttribute(`breakpoint${u}`),c=!0)}),c){let u=new CustomEvent(te.BREAKPOINTS_CHANGE,{detail:d});r.dispatchEvent(u)}}};function ns(i){let t=i.split(/\s+/);return Object.fromEntries(t.map(e=>e.split(":")))}function os(i,t){return Object.keys(i).filter(e=>t.width>=i[e])}var qt=class extends o.HTMLElement{constructor(){super(),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(Ri.content.cloneNode(!0)));let t=d=>{let c=this.media;for(let u of d)u.type==="childList"&&(u.removedNodes.forEach(m=>{if(m.slot=="media"&&u.target==this){let b=u.previousSibling&&u.previousSibling.previousElementSibling;if(!b||!c)this.mediaUnsetCallback(m);else{let L=b.slot!=="media";for(;(b=b.previousSibling)!==null;)b.slot=="media"&&(L=!1);L&&this.mediaUnsetCallback(m)}}}),c&&u.addedNodes.forEach(m=>{m==c&&this.handleMediaUpdated(c).then(b=>this.mediaSetCallback(b))}))};new MutationObserver(t).observe(this,{childList:!0,subtree:!0});let r=new ResizeObserver(as);this.resizeObserver=r,r.observe(this);let s=this.media,n=this.querySelector(":scope > slot[slot=media]");n&&n.addEventListener("slotchange",()=>{if(!n.assignedElements({flatten:!0}).length){this.mediaUnsetCallback(s);return}this.media&&(s=this.media,this.handleMediaUpdated(this.media).then(c=>this.mediaSetCallback(c)))})}static get observedAttributes(){return[f.AUTOHIDE,f.GESTURES_DISABLED].concat(rs)}attributeChangedCallback(t,e,r){t.toLowerCase()==f.AUTOHIDE&&(this.autohide=r)}get media(){let t=this.querySelector(":scope > [slot=media]");return(t==null?void 0:t.nodeName)=="SLOT"&&(t=t.assignedElements({flatten:!0})[0]),t}mediaSetCallback(t){this._mediaClickPlayToggle=()=>{let e=t.paused?p.MEDIA_PLAY_REQUEST:p.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new o.CustomEvent(e,{composed:!0,bubbles:!0}))}}handleMediaUpdated(t){let e=n=>Promise.resolve(n),r=n=>(console.error('<media-chrome>: Media element set with slot="media" does not appear to be compatible.',n),Promise.reject(n));if(!t)return r(t);let s=t.nodeName.toLowerCase();return s.includes("-")?o.customElements.whenDefined(s).then(()=>e(t)):e(t)}mediaUnsetCallback(t){}connectedCallback(){let e=this.getAttribute(f.AUDIO)!=null?U.AUDIO_PLAYER():U.VIDEO_PLAYER();this.setAttribute("role","region"),this.setAttribute("aria-label",e),this.media&&this.handleMediaUpdated(this.media).then(d=>this.mediaSetCallback(d)),this.setAttribute(f.USER_INACTIVE,"");let r=()=>{if(this.autohide<0||this.hasAttribute(f.USER_INACTIVE))return;this.setAttribute(f.USER_INACTIVE,"");let d=new o.CustomEvent(te.USER_INACTIVE,{composed:!0,bubbles:!0,detail:!0});this.dispatchEvent(d)},s=()=>{if(!this.hasAttribute(f.USER_INACTIVE))return;this.removeAttribute(f.USER_INACTIVE);let d=new o.CustomEvent(te.USER_INACTIVE,{composed:!0,bubbles:!0,detail:!1});this.dispatchEvent(d)},n=()=>{s(),o.clearTimeout(this._inactiveTimeout),!(this.autohide<0)&&(this._inactiveTimeout=o.setTimeout(()=>{r()},this.autohide*1e3))};this.addEventListener("keyup",()=>{n()}),this.addEventListener("pointerup",d=>{d.pointerType==="touch"?[this,this.media].includes(d.target)&&!this.hasAttribute(f.USER_INACTIVE)?r():n():d.composedPath().some(c=>{var u;return["media-play-button","media-fullscreen-button"].includes((u=c==null?void 0:c.nodeName)==null?void 0:u.toLowerCase())})&&n()}),this.addEventListener("pointermove",d=>{d.pointerType==="mouse"&&(s(),o.clearTimeout(this._inactiveTimeout),[this,this.media].includes(d.target)&&n())}),this.addEventListener("mouseleave",()=>{r()}),this.addEventListener("keyup",()=>{this.setAttribute(f.KEYBOARD_CONTROL,"")}),o.addEventListener("mouseup",()=>{this.removeAttribute(f.KEYBOARD_CONTROL)})}set autohide(t){t=Number(t),this._autohide=isNaN(t)?0:t}get autohide(){return this._autohide===void 0?2:this._autohide}},Ci=qt;var se,ae,ye,ee,q,J,Ee=class{constructor(t,e,{defaultValue:r}={defaultValue:void 0}){A(this,q);A(this,se,void 0);A(this,ae,void 0);A(this,ye,void 0);A(this,ee,new Set);h(this,se,t),h(this,ae,e),h(this,ye,new Set(r))}[Symbol.iterator](){return l(this,q,J).values()}get length(){return l(this,q,J).size}get value(){var t;return(t=[...l(this,q,J)].join(" "))!=null?t:""}set value(t){var e;t!==this.value&&(h(this,ee,new Set),this.add(...(e=t==null?void 0:t.split(" "))!=null?e:[]))}toString(){return this.value}item(t){return[...l(this,q,J)][t]}values(){return l(this,q,J).values()}forEach(t){l(this,q,J).forEach(t)}add(...t){var e,r;t.forEach(s=>l(this,ee).add(s)),!(this.value===""&&!((e=l(this,se))!=null&&e.hasAttribute(`${l(this,ae)}`)))&&((r=l(this,se))==null||r.setAttribute(`${l(this,ae)}`,`${this.value}`))}remove(...t){var e;t.forEach(r=>l(this,ee).delete(r)),(e=l(this,se))==null||e.setAttribute(`${l(this,ae)}`,`${this.value}`)}contains(t){return l(this,q,J).has(t)}toggle(t,e){return typeof e!="undefined"?e?(this.add(t),!0):(this.remove(t),!1):this.contains(t)?(this.remove(t),!1):(this.add(t),!0)}replace(t,e){return this.remove(t),this.add(e),t===e}};se=new WeakMap,ae=new WeakMap,ye=new WeakMap,ee=new WeakMap,q=new WeakSet,J=function(){return l(this,ee).size?l(this,ee):l(this,ye)};var yi=(i="")=>i.split(/\s+/),Ui=(i="")=>{let[t,e,r]=i.split(":"),s=r?decodeURIComponent(r):void 0;return t=t==="cc"?"captions":"subtitles",{kind:t,language:e,label:s}},Zt=(i="",t={})=>yi(i).map(e=>{let r=Ui(e);return{...t,...r}}),ds=i=>Array.isArray(i)?i.map(t=>typeof t=="string"?Ui(t):t):typeof i=="string"?Zt(i):[i],ls=({kind:i,label:t,language:e}={kind:"subtitles"})=>t?`${i==="captions"?"cc":"sb"}:${e}:${encodeURIComponent(t)}`:e,Ue=(i=[])=>Array.prototype.map.call(i,ls).join(" "),us=(i,t)=>e=>e[i]===t,wi=i=>{let t=Object.entries(i).map(([e,r])=>us(e,r));return e=>t.every(r=>r(e))},jt=(i,t=[],e=[])=>{let r=ds(e).map(wi),s=n=>r.some(d=>d(n));Array.from(t).filter(s).forEach(n=>{n.mode=i})},ut=(i,t=()=>!0)=>{if(!(i!=null&&i.textTracks))return[];let e=typeof t=="function"?t:wi(t);return Array.from(i.textTracks).filter(e)},zt=i=>!!i.getAttribute(a.MEDIA_SUBTITLES_SHOWING),ne=(i,t)=>{var r,s;let e=zt(i);if(e||t===!1){let n=i.getAttribute(a.MEDIA_SUBTITLES_SHOWING);if(n){let d=new window.CustomEvent(p.MEDIA_DISABLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:n});i.dispatchEvent(d)}}else if(!e||t===!0){let[n]=(s=yi((r=i.getAttribute(a.MEDIA_SUBTITLES_LIST))!=null?r:""))!=null?s:[];if(n){let d=new window.CustomEvent(p.MEDIA_SHOW_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:n});i.dispatchEvent(d)}}else console.error("Attempting to enable captions or subtitles but none are available! Please verify your media content if this is unexpected.")};var y={enter:"requestFullscreen",exit:"exitFullscreen",event:"fullscreenchange",element:"fullscreenElement",error:"fullscreenerror",enabled:"fullscreenEnabled"};E.fullscreenElement===void 0&&(y.enter="webkitRequestFullScreen",y.exit=E.webkitExitFullscreen!=null?"webkitExitFullscreen":"webkitCancelFullScreen",y.event="webkitfullscreenchange",y.element="webkitFullscreenElement",y.error="webkitfullscreenerror",y.enabled="webkitFullscreenEnabled");var ct,Xt=()=>{var i,t;return ct||(ct=(t=(i=E)==null?void 0:i.createElement)==null?void 0:t.call(i,"video"),ct)},xi=async(i=Xt())=>{if(!i)return!1;let t=i.volume;return i.volume=t/2+.1,await rt(0),i.volume!==t},cs=(i=Xt())=>typeof(i==null?void 0:i.requestPictureInPicture)=="function",ms=(i=Xt())=>{let t=E[y.enabled];return!t&&i&&(t="webkitSupportsFullscreen"in i),t},Jt=ms(),ki=cs(),Pi=!!o.WebKitPlaybackTargetAvailabilityEvent,Ni=!!o.chrome;var mt,Oi=xi().then(i=>(mt=i,mt)),Es=Object.values(O),ei=i=>ut(i.media,t=>[ie.SUBTITLES,ie.CAPTIONS].includes(t.kind)).sort((t,e)=>t.kind>=e.kind?1:-1),hs=i=>ut(i.media,t=>t.mode===Te.SHOWING&&[ie.SUBTITLES,ie.CAPTIONS].includes(t.kind)),x={MEDIA_PAUSED:{get:function(i){let{media:t}=i;return t?t.paused:!0},mediaEvents:["play","playing","pause","emptied"]},MEDIA_HAS_PLAYED:{get:function(i){let{media:t}=i;return t?!t.paused:!1},mediaEvents:["playing","emptied"]},MEDIA_PLAYBACK_RATE:{get:function(i){let{media:t}=i;return!t||typeof t.playbackRate=="undefined"?1:t.playbackRate},mediaEvents:["ratechange","loadstart"]},MEDIA_MUTED:{get:function(i){let{media:t}=i;return!t||typeof t.muted=="undefined"?!1:t.muted},mediaEvents:["volumechange"]},MEDIA_VOLUME:{get:function(i){let{media:t}=i;return!t||typeof t.volume=="undefined"?1:Number(t.volume)},mediaEvents:["volumechange"]},MEDIA_VOLUME_LEVEL:{get:function(i){let{media:t}=i,e="high";if(!t||typeof t.volume=="undefined")return e;let{muted:r,volume:s}=t;return s===0||r?e="off":s<.5?e="low":s<.75&&(e="medium"),e},mediaEvents:["volumechange"]},MEDIA_CURRENT_TIME:{get:function(i){let{media:t}=i;return!t||typeof t.currentTime=="undefined"?0:t.currentTime},mediaEvents:["timeupdate","loadedmetadata"]},MEDIA_DURATION:{get:function(i){let{media:t}=i;return!t||!Number.isFinite(t.duration)?NaN:t.duration},mediaEvents:["durationchange","loadedmetadata","emptied"]},MEDIA_SEEKABLE:{get:function(i){var s;let{media:t}=i;if(!((s=t==null?void 0:t.seekable)!=null&&s.length))return;let e=t.seekable.start(0),r=t.seekable.end(t.seekable.length-1);if(!(!e&&!r))return[Number(e.toFixed(3)),Number(r.toFixed(3))].join(":")},mediaEvents:["loadedmetadata","emptied","progress"]},MEDIA_LOADING:{get:function(i){var t;return((t=i.media)==null?void 0:t.readyState)<3},mediaEvents:["waiting","playing","emptied"]},MEDIA_BUFFERED:{get:function(i){var t;return Yt((t=i.media)==null?void 0:t.buffered)},mediaEvents:["progress","emptied"]},MEDIA_STREAM_TYPE:{get:function(i){let{media:t}=i;if(!t)return;let{streamType:e}=t;if(Es.includes(e)){if(e===O.UNKNOWN){let s=i.getAttribute("defaultstreamtype");return[O.LIVE,O.ON_DEMAND].includes(s)?s:void 0}return e}let r=t.duration;if(r===1/0)return O.LIVE;if(Number.isFinite(r))return O.ON_DEMAND;{let s=i.getAttribute("defaultstreamtype");if([O.LIVE,O.ON_DEMAND].includes(s))return s}},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange"]},MEDIA_TARGET_LIVE_WINDOW:{get:function(i){let{media:t}=i;if(!t)return Number.NaN;let{targetLiveWindow:e}=t,r=x.MEDIA_STREAM_TYPE.get(i);return(e==null||Number.isNaN(e))&&r===O.LIVE?0:e},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange","targetlivewindowchange"]},MEDIA_TIME_IS_LIVE:{get:function(i){let{media:t}=i;if(!t)return!1;if(typeof t.liveEdgeStart=="number")return Number.isNaN(t.liveEdgeStart)?!1:t.currentTime>=t.liveEdgeStart;if(!(x.MEDIA_STREAM_TYPE.get(i)==="live"))return!1;let r=t.seekable;if(!r)return!0;if(!r.length)return!1;let s=i.hasAttribute("liveedgeoffset")?Number(i.getAttribute("liveedgeoffset")):10,n=r.end(r.length-1)-s;return t.currentTime>=n},mediaEvents:["playing","timeupdate","progress","waiting","emptied"]},MEDIA_IS_FULLSCREEN:{get:function(i,t){let r=!!E[y.element]&&(t==null?void 0:t.target);return Le(i.fullscreenElement,r)},rootEvents:[y.event]},MEDIA_IS_PIP:{get:function(i,t){var r;let e=i.media;if(!e)return!1;if(t)return t.type=="enterpictureinpicture";{let s=(r=i.getRootNode().pictureInPictureElement)!=null?r:E.pictureInPictureElement;return Le(e,s)}},mediaEvents:["enterpictureinpicture","leavepictureinpicture"]},MEDIA_IS_CASTING:{get:function(i,t){var n;let{media:e}=i;if(!e)return!1;let r=(n=globalThis.CastableVideoElement)==null?void 0:n.castElement,s=Le(e,r);return(t==null?void 0:t.type)==="castchange"&&(t==null?void 0:t.detail)==="CONNECTING"&&(s="connecting"),s},mediaEvents:["entercast","leavecast","castchange"]},MEDIA_AIRPLAY_UNAVAILABLE:{get:function(i,t){if(!Pi)return Q.UNSUPPORTED;if(!!t&&t.availability!=="available"&&t.availability==="not-available")return Q.UNAVAILABLE},mediaEvents:["webkitplaybacktargetavailabilitychanged"]},MEDIA_CAST_UNAVAILABLE:{get:function(){var t;let i=(t=globalThis.CastableVideoElement)==null?void 0:t.castState;if(!Ni||!i)return Q.UNSUPPORTED;if(!i.includes("CONNECT"))return Q.UNAVAILABLE},mediaEvents:["castchange"]},MEDIA_FULLSCREEN_UNAVAILABLE:{get:function(){return Jt?void 0:Q.UNAVAILABLE}},MEDIA_PIP_UNAVAILABLE:{get:function(){return ki?void 0:Q.UNSUPPORTED}},MEDIA_VOLUME_UNAVAILABLE:{get:function(i){if(mt!==void 0&&!mt)return Q.UNSUPPORTED;let{media:t}=i;if(t&&typeof t.volume=="undefined")return Q.UNAVAILABLE},mediaEvents:["loadstart"]},MEDIA_SUBTITLES_LIST:{get:function(i){return Ue(ei(i))||void 0},mediaEvents:["loadstart"],trackListEvents:["addtrack","removetrack"]},MEDIA_SUBTITLES_SHOWING:{get:function(i){return i.hasAttribute("defaultsubtitles")&&!i.hasAttribute(a.MEDIA_HAS_PLAYED)&&!i.hasAttribute(a.MEDIA_SUBTITLES_SHOWING)&&ne(i,!0),Ue(hs(i))||void 0},mediaEvents:["loadstart"],trackListEvents:["addtrack","removetrack","change"]}},Et={MEDIA_PLAY_REQUEST:(i,t,e)=>{var n;let r=x.MEDIA_STREAM_TYPE.get(e),s=e.getAttribute("noautoseektolive")===null;r==O.LIVE&&s&&Et.MEDIA_SEEK_TO_LIVE_REQUEST(i),(n=i.play())==null||n.catch(()=>{})},MEDIA_PAUSE_REQUEST:i=>i.pause(),MEDIA_MUTE_REQUEST:i=>i.muted=!0,MEDIA_UNMUTE_REQUEST:i=>{i.muted=!1,i.volume===0&&(i.volume=.25)},MEDIA_VOLUME_REQUEST:(i,t,e)=>{let r=t.detail;if(i.volume=r,r>0&&i.muted&&(i.muted=!1),!e.hasAttribute("novolumepref"))try{o.localStorage.setItem("media-chrome-pref-volume",r.toString())}catch{}},MEDIA_ENTER_FULLSCREEN_REQUEST:(i,t,e)=>{if(!Jt){console.warn("Fullscreen support is unavailable; not entering fullscreen");return}E.pictureInPictureElement&&E.exitPictureInPicture(),e[y.enter]?e.fullscreenElement[y.enter]():i.webkitEnterFullscreen?i.webkitEnterFullscreen():i.requestFullscreen?i.requestFullscreen():console.warn("MediaChrome: Fullscreen not supported")},MEDIA_EXIT_FULLSCREEN_REQUEST:()=>{E[y.exit]()},MEDIA_ENTER_PIP_REQUEST:i=>{if(!E.pictureInPictureEnabled){console.warn("MediaChrome: Picture-in-picture is not enabled");return}if(!i.requestPictureInPicture){console.warn("MediaChrome: The current media does not support picture-in-picture");return}E[y.element]&&E[y.exit]();let t=()=>{console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a readyState > 0.")};i.requestPictureInPicture().catch(e=>{if(e.code===11)if(i.readyState===0&&i.preload==="none"){let r=()=>{i.removeEventListener("loadedmetadata",s),i.preload="none"},s=()=>{i.requestPictureInPicture().catch(t),r()};i.addEventListener("loadedmetadata",s),i.preload="metadata",setTimeout(()=>{i.readyState===0&&t(),r()},1e3)}else throw e;else throw e})},MEDIA_EXIT_PIP_REQUEST:()=>{E.pictureInPictureElement&&E.exitPictureInPicture()},MEDIA_ENTER_CAST_REQUEST:i=>{var t;!((t=globalThis.CastableVideoElement)!=null&&t.castEnabled)||(E[y.element]&&E[y.exit](),i.requestCast())},MEDIA_EXIT_CAST_REQUEST:async()=>{var i;(i=globalThis.CastableVideoElement)!=null&&i.castElement&&globalThis.CastableVideoElement.exitCast()},MEDIA_SEEK_REQUEST:(i,t)=>{let e=t.detail;(i.readyState>0||i.readyState===void 0)&&(i.currentTime=e)},MEDIA_PLAYBACK_RATE_REQUEST:(i,t)=>{i.playbackRate=t.detail},MEDIA_PREVIEW_REQUEST:(i,t,e)=>{var m;if(!i)return;let r=t.detail;r===null&&e.propagateMediaState(a.MEDIA_PREVIEW_TIME,void 0),e.propagateMediaState(a.MEDIA_PREVIEW_TIME,r);let[s]=ut(i,{kind:ie.METADATA,label:"thumbnails"});if(!(s&&s.cues))return;if(r===null){e.propagateMediaState(a.MEDIA_PREVIEW_IMAGE,void 0),e.propagateMediaState(a.MEDIA_PREVIEW_COORDS,void 0);return}let n=Array.prototype.find.call(s.cues,b=>b.startTime>=r);if(!n)return;let d=/'^(?:[a-z]+:)?\/\//i.test(n.text)||(m=i.querySelector('track[label="thumbnails"]'))==null?void 0:m.src,c=new URL(n.text,d),u=new URLSearchParams(c.hash).get("#xywh");e.propagateMediaState(a.MEDIA_PREVIEW_IMAGE,c.href),e.propagateMediaState(a.MEDIA_PREVIEW_COORDS,u.split(",").join(" "))},MEDIA_SHOW_SUBTITLES_REQUEST:(i,t,e)=>{let r=ei(e),{detail:s=[]}=t;jt(Te.SHOWING,r,s)},MEDIA_DISABLE_SUBTITLES_REQUEST:(i,t,e)=>{let r=ei(e),{detail:s=[]}=t;jt(Te.DISABLED,r,s)},MEDIA_AIRPLAY_REQUEST:i=>{if(!!i){if(!(i.webkitShowPlaybackTargetPicker&&o.WebKitPlaybackTargetAvailabilityEvent)){console.warn("received a request to select AirPlay but AirPlay is not supported in this environment");return}i.webkitShowPlaybackTargetPicker()}},MEDIA_SEEK_TO_LIVE_REQUEST:i=>{let t=i.seekable;if(!t){console.warn("MediaController: Media element does not support seeking to live.");return}if(!t.length){console.warn("MediaController: Media is unable to seek to live.");return}i.currentTime=t.end(t.length-1)}};var Bi=["ArrowLeft","ArrowRight","Enter"," ","f","m","k","c"],ps=10,$i=0,k={DEFAULT_SUBTITLES:"defaultsubtitles",DEFAULT_STREAM_TYPE:"defaultstreamtype",FULLSCREEN_ELEMENT:"fullscreenelement",HOTKEYS:"hotkeys",KEYS_USED:"keysused",LIVE_EDGE_OFFSET:"liveedgeoffset",NO_AUTO_SEEK_TO_LIVE:"noautoseektolive",NO_HOTKEYS:"nohotkeys"},j,he,oe,we,ke,ti,ht=class extends Ci{constructor(){super();A(this,oe);A(this,ke);A(this,j,new Ee(this,k.HOTKEYS));A(this,he,void 0);x.MEDIA_VOLUME_UNAVAILABLE.get(this)===void 0&&Oi.then(()=>{this.propagateMediaState(a.MEDIA_VOLUME_UNAVAILABLE,x.MEDIA_VOLUME_UNAVAILABLE.get(this))}),this.mediaStateReceivers=[],this.associatedElementSubscriptions=new Map,this.associateElement(this),Object.keys(Et).forEach(e=>{let r=`_handle${it(e,!0)}`;this[r]=s=>{if(s.stopPropagation(),!this.media){console.warn("MediaController: No media available.");return}Et[e](this.media,s,this)},this.addEventListener(p[e],this[r])}),this._mediaStatePropagators={},Object.keys(x).forEach(e=>{this._mediaStatePropagators[e]=r=>{this.propagateMediaState(a[e],x[e].get(this,r))}}),this.enableHotkeys()}static get observedAttributes(){return super.observedAttributes.concat(k.NO_HOTKEYS,k.HOTKEYS,k.DEFAULT_STREAM_TYPE,k.DEFAULT_SUBTITLES)}get fullscreenElement(){var e;return(e=l(this,he))!=null?e:this}set fullscreenElement(e){this.hasAttribute(k.FULLSCREEN_ELEMENT)&&this.removeAttribute(k.FULLSCREEN_ELEMENT),h(this,he,e)}attributeChangedCallback(e,r,s){var n;if(e===k.NO_HOTKEYS)s!==r&&s===""?(this.hasAttribute(k.HOTKEYS)&&console.warn("Both `hotkeys` and `nohotkeys` have been set. All hotkeys will be disabled."),this.disableHotkeys()):s!==r&&s===null&&this.enableHotkeys();else if(e===k.HOTKEYS)l(this,j).value=s;else if(e===k.DEFAULT_SUBTITLES&&s!==r&&s==="")ne(this,!0);else if(e===k.DEFAULT_STREAM_TYPE)this.propagateMediaState(a.MEDIA_STREAM_TYPE);else if(e===k.FULLSCREEN_ELEMENT){let d=s?(n=this.getRootNode())==null?void 0:n.getElementById(s):void 0;h(this,he,d)}super.attributeChangedCallback(e,r,s)}mediaSetCallback(e){if(super.mediaSetCallback(e),e.hasAttribute("tabindex")||(e.tabIndex=-1),Object.keys(x).forEach(r=>{let{mediaEvents:s,rootEvents:n,trackListEvents:d}=x[r],c=this._mediaStatePropagators[r];s==null||s.forEach(u=>{e.addEventListener(u,c),c()}),n==null||n.forEach(u=>{this.getRootNode().addEventListener(u,c),c()}),d==null||d.forEach(u=>{var m;(m=e.textTracks)==null||m.addEventListener(u,c),c()})}),!this.hasAttribute("novolumepref"))try{let r=o.localStorage.getItem("media-chrome-pref-volume");r!==null&&(e.volume=r)}catch(r){console.debug("Error getting volume pref",r)}}mediaUnsetCallback(e){super.mediaUnsetCallback(e),Object.keys(x).forEach(r=>{let{mediaEvents:s,rootEvents:n,trackListEvents:d}=x[r],c=this._mediaStatePropagators[r];s==null||s.forEach(u=>{e.removeEventListener(u,c)}),n==null||n.forEach(u=>{this.getRootNode().removeEventListener(u,c)}),d==null||d.forEach(u=>{var m;(m=e.textTracks)==null||m.removeEventListener(u,c)})}),this.propagateMediaState(a.MEDIA_PAUSED,!0)}propagateMediaState(e,r){let s=this.getAttribute(e);if(Vi(this.mediaStateReceivers,e,r),s===this.getAttribute(e))return;let n=new o.CustomEvent(Wt[e],{composed:!0,bubbles:!0,detail:r});this.dispatchEvent(n)}associateElement(e){if(!e)return;let{associatedElementSubscriptions:r}=this;if(r.has(e))return;let s=this.registerMediaStateReceiver.bind(this),n=this.unregisterMediaStateReceiver.bind(this),d=fs(e,s,n);Object.keys(p).forEach(c=>{e.addEventListener(p[c],this[`_handle${it(c,!0)}`])}),r.set(e,d)}unassociateElement(e){if(!e)return;let{associatedElementSubscriptions:r}=this;if(!r.has(e))return;r.get(e)(),r.delete(e),Object.keys(p).forEach(n=>{e.removeEventListener(p[n],this[`_handle${it(n,!0)}`])})}registerMediaStateReceiver(e){if(!e)return;let r=this.mediaStateReceivers;r.indexOf(e)>-1||(r.push(e),Object.keys(x).forEach(n=>{let d=x[n];Vi([e],a[n],d.get(this))}))}unregisterMediaStateReceiver(e){let r=this.mediaStateReceivers,s=r.indexOf(e);s<0||r.splice(s,1)}enableHotkeys(){this.addEventListener("keydown",P(this,ke,ti))}disableHotkeys(){this.removeEventListener("keydown",P(this,ke,ti)),this.removeEventListener("keyup",P(this,oe,we))}get hotkeys(){return l(this,j)}keyboardShortcutHandler(e){var b,L,N,B;if(((B=(N=(b=e.target.getAttribute(k.KEYS_USED))==null?void 0:b.split(" "))!=null?N:(L=e.target)==null?void 0:L.keysUsed)!=null?B:[]).map(Y=>Y==="Space"?" ":Y).filter(Boolean).includes(e.key))return;let s,n,d,c,u,m=ps;if(!l(this,j).contains(`no${e.key.toLowerCase()}`)&&!(e.key===" "&&l(this,j).contains("nospace")))switch(e.key){case" ":case"k":s=this.getAttribute(a.MEDIA_PAUSED)!=null?p.MEDIA_PLAY_REQUEST:p.MEDIA_PAUSE_REQUEST,this.dispatchEvent(new o.CustomEvent(s,{composed:!0,bubbles:!0}));break;case"m":s=this.getAttribute(a.MEDIA_VOLUME_LEVEL)==="off"?p.MEDIA_UNMUTE_REQUEST:p.MEDIA_MUTE_REQUEST,this.dispatchEvent(new o.CustomEvent(s,{composed:!0,bubbles:!0}));break;case"f":s=this.getAttribute(a.MEDIA_IS_FULLSCREEN)!=null?p.MEDIA_EXIT_FULLSCREEN_REQUEST:p.MEDIA_ENTER_FULLSCREEN_REQUEST,this.dispatchEvent(new o.CustomEvent(s,{composed:!0,bubbles:!0}));break;case"c":ne(this);break;case"ArrowLeft":n=this.getAttribute(a.MEDIA_CURRENT_TIME),d=n&&!Number.isNaN(+n)?+n:$i,c=Math.max(d-m,0),u=new o.CustomEvent(p.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:c}),this.dispatchEvent(u);break;case"ArrowRight":n=this.getAttribute(a.MEDIA_CURRENT_TIME),d=n&&!Number.isNaN(+n)?+n:$i,c=Math.max(d+m,0),u=new o.CustomEvent(p.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:c}),this.dispatchEvent(u);break;default:break}}};j=new WeakMap,he=new WeakMap,oe=new WeakSet,we=function(e){let{key:r}=e;if(!Bi.includes(r)){this.removeEventListener("keyup",P(this,oe,we));return}this.keyboardShortcutHandler(e)},ke=new WeakSet,ti=function(e){let{metaKey:r,altKey:s,key:n}=e;if(r||s||!Bi.includes(n)){this.removeEventListener("keyup",P(this,oe,we));return}[" ","ArrowLeft","ArrowRight"].includes(n)&&!(l(this,j).contains(`no${n.toLowerCase()}`)||n===" "&&l(this,j).contains("nospace"))&&e.preventDefault(),this.addEventListener("keyup",P(this,oe,we),{once:!0})};var As=Object.values(a),Hi=i=>{var r,s,n,d;let{observedAttributes:t}=i.constructor;!t&&((r=i.nodeName)==null?void 0:r.includes("-"))&&(o.customElements.upgrade(i),{observedAttributes:t}=i.constructor);let e=(d=(n=(s=i==null?void 0:i.getAttribute)==null?void 0:s.call(i,g.MEDIA_CHROME_ATTRIBUTES))==null?void 0:n.split)==null?void 0:d.call(n,/\s+/);return Array.isArray(t||e)?(t||e).filter(c=>As.includes(c)):[]},ii=i=>!!Hi(i).length,bs=async(i,t,e)=>(i.isConnected||await rt(0),e==null?i.removeAttribute(t):typeof e=="boolean"?e?i.setAttribute(t,""):i.removeAttribute(t):Number.isNaN(e)?i.removeAttribute(t):i.setAttribute(t,e)),gs=i=>{var t;return!!((t=i.closest)!=null&&t.call(i,'*[slot="media"]'))},xe=(i,t)=>{if(gs(i))return;let e=(s,n)=>{var m,b;ii(s)&&n(s);let{children:d=[]}=s!=null?s:{},c=(b=(m=s==null?void 0:s.shadowRoot)==null?void 0:m.children)!=null?b:[];[...d,...c].forEach(L=>xe(L,n))},r=i==null?void 0:i.nodeName.toLowerCase();if(r.includes("-")&&!ii(i)){o.customElements.whenDefined(r).then(()=>{e(i,t)});return}e(i,t)},Vi=(i,t,e)=>{i.forEach(r=>{!Hi(r).includes(t)||bs(r,t,e)})},fs=(i,t,e)=>{xe(i,t);let r=u=>{var b;let m=(b=u==null?void 0:u.composedPath()[0])!=null?b:u.target;t(m)},s=u=>{var b;let m=(b=u==null?void 0:u.composedPath()[0])!=null?b:u.target;e(m)};i.addEventListener(p.REGISTER_MEDIA_STATE_RECEIVER,r),i.addEventListener(p.UNREGISTER_MEDIA_STATE_RECEIVER,s);let n=u=>{u.forEach(m=>{let{addedNodes:b=[],removedNodes:L=[],type:N,target:B,attributeName:Y}=m;N==="childList"?(Array.prototype.forEach.call(b,ce=>xe(ce,t)),Array.prototype.forEach.call(L,ce=>xe(ce,e))):N==="attributes"&&Y===g.MEDIA_CHROME_ATTRIBUTES&&(ii(B)?t(B):e(B))})},d=new MutationObserver(n);return d.observe(i,{childList:!0,attributes:!0,subtree:!0}),()=>{xe(i,e),d.disconnect(),i.removeEventListener(p.REGISTER_MEDIA_STATE_RECEIVER,r),i.removeEventListener(p.UNREGISTER_MEDIA_STATE_RECEIVER,s)}};o.customElements.get("media-controller")||o.customElements.define("media-controller",ht);var Fi=ht;var Gi=E.createElement("template"),Ki=`
  height: var(--thumb-height);
  width: var(--media-range-thumb-width, 10px);
  border: var(--media-range-thumb-border, none);
  border-radius: var(--media-range-thumb-border-radius, 10px);
  background: var(--media-range-thumb-background, var(--media-primary-color, rgb(238 238 238)));
  box-shadow: var(--media-range-thumb-box-shadow, 1px 1px 1px transparent);
  cursor: pointer;
  transition: var(--media-range-thumb-transition, none);
  transform: var(--media-range-thumb-transform, none);
  opacity: var(--media-range-thumb-opacity, 1);
`,ri=`
  min-width: 40px;
  height: var(--track-height);
  border: var(--media-range-track-border, none);
  outline: var(--media-range-track-outline);
  outline-offset: var(--media-range-track-outline-offset);
  border-radius: var(--media-range-track-border-radius, 1px);
  background: var(--media-range-track-progress-internal, var(--media-range-track-background, rgb(255 255 255 / .2)));
  box-shadow: var(--media-range-track-box-shadow, none);
  transition: var(--media-range-track-transition, none);
  transform: translate(var(--media-range-track-translate-x, 0), var(--media-range-track-translate-y, 0));
  cursor: pointer;
`;Gi.innerHTML=`
  <style>
    :host {
      --thumb-height: var(--media-range-thumb-height, 10px);
      --track-height: var(--media-range-track-height, 4px);
      --_focus-box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
      --_media-range-padding: var(--media-range-padding, var(--media-control-padding, 10px));

      vertical-align: middle;
      box-sizing: border-box;
      display: inline-block;
      position: relative;
      background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
      transition: background .15s linear;
      width: 100px;
      height: calc(var(--media-control-height, 24px) + 2 * var(--_media-range-padding));
      padding-left: var(--media-range-padding-left, var(--_media-range-padding));
      padding-right: var(--media-range-padding-right, var(--_media-range-padding));
      pointer-events: auto;
      
      font-size: 0;
      box-shadow: var(--_focus-visible-box-shadow, none);
    }

    
    input[type=range]:focus {
      outline: 0;
    }
    input[type=range]:focus::-webkit-slider-runnable-track {
      outline: 0;
    }

    :host(:hover) {
      background: var(--media-control-hover-background, rgb(50 50 70 / .7));
    }

    #container {
      position: relative;
      height: 100%;
    }

    input[type=range] {
      
      -webkit-appearance: none; 
      background: transparent; 

      
      min-height: 100%;
      width: var(--media-range-track-width, 100%); 

      box-sizing: border-box;
      padding: 0;
      margin: 0;
    }

    
    input[type=range]::-webkit-slider-thumb {
      -webkit-appearance: none;
      ${Ki}
      
      margin-top: calc(calc(0px - var(--thumb-height) + var(--track-height)) / 2);
    }

    
    input[type=range]::-moz-range-thumb {
      ${Ki}
      translate: var(--media-range-track-translate-x, 0) var(--media-range-track-translate-y, 0);
    }

    input[type=range]::-webkit-slider-runnable-track { ${ri} }
    input[type=range]::-moz-range-track { ${ri} }
    input[type=range]::-ms-track {
      
      width: 100%;
      cursor: pointer;
      
      background: transparent;
      border-color: transparent;
      color: transparent;

      ${ri}
    }

    #background,
    #pointer {
      min-width: 40px;
      width: var(--media-range-track-width, 100%);
      height: var(--track-height);
      border-radius: var(--media-range-track-border-radius, 1px);
      position: absolute;
      top: 50%;
      transform: translate(var(--media-range-track-translate-x, 0px), calc(var(--media-range-track-translate-y, 0px) - 50%));
      background: var(--media-range-track-background, rgb(255 255 255 / .2));
    }

    #pointer {
      min-width: auto;
      background: var(--media-range-track-pointer-background);
      border-right: var(--media-range-track-pointer-border-right);
      transition: visibility .25s, opacity .25s;
      visibility: hidden;
      opacity: 0;
    }

    :host(:hover) #pointer {
      transition: visibility .5s, opacity .5s;
      visibility: visible;
      opacity: 1;
    }

    #hoverzone {
      
      z-index: 1;
      display: var(--media-time-range-hover-display, none);
      position: absolute;
      width: 100%;
      bottom: var(--media-time-range-hover-bottom, -5px);
      height: var(--media-time-range-hover-height, max(calc(100% + 5px), 20px));
    }

    #range {
      z-index: 2;
      position: relative;
      height: var(--media-range-track-height, 4px);
    }

    input[type=range]:disabled::-webkit-slider-thumb {
      background-color: #777;
    }

    input[type=range]:disabled::-webkit-slider-runnable-track {
      background-color: #777;
    }
  </style>
  <div id="container">
    <div id="background"></div>
    <div id="pointer"></div>
    <div id="hoverzone"></div>
    <input id="range" type="range" min="0" max="1000" step="any" value="0">
  </div>
`;var Pe,H,Ne,Oe,pt=class extends o.HTMLElement{constructor(){super();A(this,Pe,void 0);A(this,H,void 0);A(this,Ne,()=>{if(this.range.matches(":focus-visible")){let{style:e}=S(this.shadowRoot,":host");e.setProperty("--_focus-visible-box-shadow","var(--_focus-box-shadow)")}});A(this,Oe,()=>{let{style:e}=S(this.shadowRoot,":host");e.removeProperty("--_focus-visible-box-shadow")});this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(Gi.content.cloneNode(!0)));let{style:e}=S(this.shadowRoot,":host");e.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-block))`),this.container=this.shadowRoot.querySelector("#container"),this.range=this.shadowRoot.querySelector("#range"),this.range.addEventListener("input",this.updateBar.bind(this)),h(this,Pe,parseInt(getComputedStyle(this).getPropertyValue("--media-range-thumb-width")||"10",10))}static get observedAttributes(){return["disabled","aria-disabled",g.MEDIA_CONTROLLER]}attributeChangedCallback(e,r,s){var n,d,c,u,m;e===g.MEDIA_CONTROLLER?(r&&((d=(n=l(this,H))==null?void 0:n.unassociateElement)==null||d.call(n,this),h(this,H,null)),s&&(h(this,H,(c=this.getRootNode())==null?void 0:c.getElementById(s)),(m=(u=l(this,H))==null?void 0:u.associateElement)==null||m.call(u,this))):(e==="disabled"||e==="aria-disabled"&&r!==s)&&(s==null?this.range.removeAttribute(e):this.range.setAttribute(e,s))}connectedCallback(){var r,s,n;let e=this.getAttribute(g.MEDIA_CONTROLLER);e&&(h(this,H,(r=this.getRootNode())==null?void 0:r.getElementById(e)),(n=(s=l(this,H))==null?void 0:s.associateElement)==null||n.call(s,this)),this.updateBar(),this.shadowRoot.addEventListener("focusin",l(this,Ne)),this.shadowRoot.addEventListener("focusout",l(this,Oe))}disconnectedCallback(){var e,r;(r=(e=l(this,H))==null?void 0:e.unassociateElement)==null||r.call(e,this),h(this,H,null),this.shadowRoot.removeEventListener("focusin",l(this,Ne)),this.shadowRoot.removeEventListener("focusout",l(this,Oe))}updatePointerBar(e){let r=this.range.getBoundingClientRect(),s=(e.clientX-r.left)/r.width;s=Math.max(0,Math.min(1,s));let{style:n}=S(this.shadowRoot,"#pointer");n.setProperty("width",`${s*r.width}px`)}updateBar(){let e=this.getBarColors(),r="linear-gradient(to right, ",s=0;e.forEach(d=>{d[1]<s||(r=r+`${d[0]} ${s}%, ${d[0]} ${d[1]}%,`,s=d[1])}),r=r.slice(0,r.length-1)+")";let{style:n}=S(this.shadowRoot,"#range");n.setProperty("--media-range-track-progress-internal",r)}getBarColors(){let e=this.range,r=e.value-e.min,s=e.max-e.min,n=r/s*100,d=0;return e.value>e.min&&e.value<e.max&&(d=l(this,Pe)*(.5-n/100)/e.offsetWidth*100),[["var(--media-range-bar-color, var(--media-primary-color, rgb(238 238 238)))",n+d],["var(--media-range-track-color, transparent)",100]]}get keysUsed(){return["ArrowUp","ArrowRight","ArrowDown","ArrowLeft"]}};Pe=new WeakMap,H=new WeakMap,Ne=new WeakMap,Oe=new WeakMap;o.customElements.get("media-chrome-range")||o.customElements.define("media-chrome-range",pt);var pe=pt;var Wi=E.createElement("template");Wi.innerHTML=`
  <style>
    :host {
      
      box-sizing: border-box;
      display: var(--media-control-display, var(--media-control-bar-display, inline-flex));
      color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
      --media-loading-icon-width: 44px;
    }

    media-time-range,
    ::slotted(media-time-range),
    ::slotted(media-clip-selector) {
      flex-grow: 1;
    }

    media-time-range,
    ::slotted(media-time-range),
    ::slotted(media-clip-selector),
    media-volume-range,
    ::slotted(media-volume-range) {
      height: var(--_range-auto-size, calc(var(--media-control-height, 24px) + 2 * var(--_media-range-padding)));
    }
  </style>

  <slot></slot>
`;var F,At=class extends o.HTMLElement{constructor(){super();A(this,F,void 0);this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(Wi.content.cloneNode(!0))),this.shadowRoot.querySelector("slot").addEventListener("slotchange",({target:e})=>{let r=e.assignedElements({flatten:!0}).every(d=>["media-time-range","media-volume-range"].includes(d.nodeName.toLowerCase())),{style:s}=S(this.shadowRoot,":host"),n=r?"unset":"initial";s.setProperty("--_range-auto-size",n)})}static get observedAttributes(){return[g.MEDIA_CONTROLLER]}attributeChangedCallback(e,r,s){var n,d,c,u,m;e===g.MEDIA_CONTROLLER&&(r&&((d=(n=l(this,F))==null?void 0:n.unassociateElement)==null||d.call(n,this),h(this,F,null)),s&&(h(this,F,(c=this.getRootNode())==null?void 0:c.getElementById(s)),(m=(u=l(this,F))==null?void 0:u.associateElement)==null||m.call(u,this)))}connectedCallback(){var r,s,n;let e=this.getAttribute(g.MEDIA_CONTROLLER);e&&(h(this,F,(r=this.getRootNode())==null?void 0:r.getElementById(e)),(n=(s=l(this,F))==null?void 0:s.associateElement)==null||n.call(s,this))}disconnectedCallback(){var e,r;(r=(e=l(this,F))==null?void 0:e.unassociateElement)==null||r.call(e,this),h(this,F,null)}};F=new WeakMap;o.customElements.get("media-control-bar")||o.customElements.define("media-control-bar",At);var Yi=At;var Qi=E.createElement("template");Qi.innerHTML=`
  <style>
    :host {
      font: var(--media-font,
        var(--media-font-weight, normal)
        var(--media-font-size, 14px) /
        var(--media-text-content-height, var(--media-control-height, 24px))
        var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
      color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
      background: var(--media-text-background, var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7))));
      padding: var(--media-control-padding, 10px);
      display: inline-flex;
      justify-content: center;
      align-items: center;
      vertical-align: middle;
      box-sizing: border-box;
      text-align: center;
      pointer-events: auto;
    }

    
    :host(:focus-visible) {
      box-shadow: inset 0 0 0 2px rgb(27 127 204 / .9);
      outline: 0;
    }

    
    :host(:where(:focus)) {
      box-shadow: none;
      outline: 0;
    }
  </style>
  <slot></slot>
`;var K,bt=class extends o.HTMLElement{constructor(){super();A(this,K,void 0);this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(Qi.content.cloneNode(!0)));let{style:e}=S(this.shadowRoot,":host");e.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`)}static get observedAttributes(){return[g.MEDIA_CONTROLLER]}attributeChangedCallback(e,r,s){var n,d,c,u,m;e===g.MEDIA_CONTROLLER&&(r&&((d=(n=l(this,K))==null?void 0:n.unassociateElement)==null||d.call(n,this),h(this,K,null)),s&&(h(this,K,(c=this.getRootNode())==null?void 0:c.getElementById(s)),(m=(u=l(this,K))==null?void 0:u.associateElement)==null||m.call(u,this)))}connectedCallback(){var r,s,n;let e=this.getAttribute(g.MEDIA_CONTROLLER);e&&(h(this,K,(r=this.getRootNode())==null?void 0:r.getElementById(e)),(n=(s=l(this,K))==null?void 0:s.associateElement)==null||n.call(s,this))}disconnectedCallback(){var e,r;(r=(e=l(this,K))==null?void 0:e.unassociateElement)==null||r.call(e,this),h(this,K,null)}};K=new WeakMap;o.customElements.get("media-text-display")||o.customElements.define("media-text-display",bt);var Ae=bt;var be,gt=class extends Ae{constructor(){super();A(this,be,void 0);h(this,be,this.shadowRoot.querySelector("slot")),l(this,be).textContent=$(0)}static get observedAttributes(){return[...super.observedAttributes,a.MEDIA_DURATION]}attributeChangedCallback(e,r,s){e===a.MEDIA_DURATION&&(l(this,be).textContent=$(s)),super.attributeChangedCallback(e,r,s)}get mediaDuration(){return T(this,a.MEDIA_DURATION)}set mediaDuration(e){D(this,a.MEDIA_DURATION,e)}};be=new WeakMap;o.customElements.get("media-duration-display")||o.customElements.define("media-duration-display",gt);var qi=gt;var z={REMAINING:"remaining",SHOW_DURATION:"showduration"},Zi=[...Object.values(z),a.MEDIA_CURRENT_TIME,a.MEDIA_DURATION,a.MEDIA_SEEKABLE],ji=["Enter"," "],Is="&nbsp;/&nbsp;",zi=(i,{timesSep:t=Is}={})=>{var u,m,b,L;let e=i.hasAttribute(z.REMAINING),r=i.hasAttribute(z.SHOW_DURATION),s=(u=i.mediaCurrentTime)!=null?u:0,[,n]=(m=i.mediaSeekable)!=null?m:[],d=(L=(b=i.mediaDuration)!=null?b:n)!=null?L:0,c=e?$(0-(d-s)):$(s);return r?`${c}${t}${$(d)}`:c},vs="video not loaded, unknown time.",_s=i=>{var m;let t=i.mediaCurrentTime,[,e]=(m=i.mediaSeekable)!=null?m:[],r=i.mediaDuration||e;if(t==null||r==null){i.setAttribute("aria-valuetext",vs);return}let s=i.hasAttribute(z.REMAINING),n=i.hasAttribute(z.SHOW_DURATION),d=s?X(0-(r-t)):X(t);if(!n){i.setAttribute("aria-valuetext",d);return}let c=X(r),u=`${d} of ${c}`;i.setAttribute("aria-valuetext",u)},de,ft=class extends Ae{constructor(){super();A(this,de,void 0);h(this,de,this.shadowRoot.querySelector("slot")),l(this,de).innerHTML=`${zi(this)}`;let{style:e}=S(this.shadowRoot,":host");e.setProperty("cursor","pointer");let{style:r}=S(this.shadowRoot,":host(:hover)");r.setProperty("background","var(--media-control-hover-background, rgba(50 50 70 / .7))")}static get observedAttributes(){return[...super.observedAttributes,...Zi,"disabled"]}connectedCallback(){this.hasAttribute("disabled")||this.enable(),this.setAttribute("role","progressbar"),this.setAttribute("aria-label",U.PLAYBACK_TIME());let e=r=>{let{key:s}=r;if(!ji.includes(s)){this.removeEventListener("keyup",e);return}this.toggleTimeDisplay()};this.addEventListener("keydown",r=>{let{metaKey:s,altKey:n,key:d}=r;if(s||n||!ji.includes(d)){this.removeEventListener("keyup",e);return}this.addEventListener("keyup",e)}),this.addEventListener("click",this.toggleTimeDisplay),super.connectedCallback()}toggleTimeDisplay(){this.hasAttribute("remaining")?this.removeAttribute("remaining"):this.setAttribute("remaining","")}disconnectedCallback(){this.disable(),super.disconnectedCallback()}attributeChangedCallback(e,r,s){Zi.includes(e)?this.update():e==="disabled"&&s!==r&&(s==null?this.enable():this.disable()),super.attributeChangedCallback(e,r,s)}enable(){this.tabIndex=0}disable(){this.tabIndex=-1}get remaining(){return I(this,z.REMAINING)}set remaining(e){_(this,z.REMAINING,e)}get showDuration(){return I(this,z.SHOW_DURATION)}set showDuration(e){_(this,z.SHOW_DURATION,e)}get mediaDuration(){return T(this,a.MEDIA_DURATION)}set mediaDuration(e){D(this,a.MEDIA_DURATION,e)}get mediaCurrentTime(){return T(this,a.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){D(this,a.MEDIA_CURRENT_TIME,e)}get mediaSeekable(){let e=this.getAttribute(a.MEDIA_SEEKABLE);if(!!e)return e.split(":").map(r=>+r)}set mediaSeekable(e){if(e==null){this.removeAttribute(a.MEDIA_SEEKABLE);return}this.setAttribute(a.MEDIA_SEEKABLE,e.join(":"))}update(){let e=zi(this);_s(this),e!==l(this,de).innerHTML&&(l(this,de).innerHTML=e)}};de=new WeakMap;o.customElements.get("media-time-display")||o.customElements.define("media-time-display",ft);var Xi=ft;var Ms=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,Ss=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`,ir=E.createElement("template");ir.innerHTML=`
  <style>
  :host([aria-checked="true"]) slot:not([name=on]) > *,
  :host([aria-checked="true"]) ::slotted(:not([slot=on])) {
    display: none !important;
  }

  
  :host(:not([aria-checked="true"])) slot:not([name=off]) > *,
  :host(:not([aria-checked="true"])) ::slotted(:not([slot=off])) {
    display: none !important;
  }
  </style>

  <slot name="on">${Ms}</slot>
  <slot name="off">${Ss}</slot>
`;var Ji=i=>{i.setAttribute("aria-checked",zt(i))},er=(i,t)=>{let e=i.getAttribute(t);return e?Zt(e):[]},tr=(i,t,e)=>{if(!e){i.removeAttribute(t);return}let r=Ue(e);i.getAttribute(t)!==r&&i.setAttribute(t,r)},It=class extends M{static get observedAttributes(){return[...super.observedAttributes,a.MEDIA_SUBTITLES_LIST,a.MEDIA_SUBTITLES_SHOWING]}constructor(t={}){super({slotTemplate:ir,...t}),this._captionsReady=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","switch"),this.setAttribute("aria-label",U.CLOSED_CAPTIONS()),Ji(this)}attributeChangedCallback(t,e,r){t===a.MEDIA_SUBTITLES_SHOWING&&Ji(this),super.attributeChangedCallback(t,e,r)}get mediaSubtitlesList(){return er(this,a.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(t){tr(this,a.MEDIA_SUBTITLES_LIST,t)}get mediaSubtitlesShowing(){return er(this,a.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(t){tr(this,a.MEDIA_SUBTITLES_SHOWING,t)}handleClick(){ne(this)}};o.customElements.get("media-captions-button")||o.customElements.define("media-captions-button",It);var rr=It;function ge(i){let t=Math.abs(i.seekOffset),e=v.SEEK_BACK_N_SECS({seekOffset:t});i.setAttribute("aria-label",e)}function fe(i,t){let e=bi(i,t),r=i.seekOffset;Ai(e,r)}var vt={SEEK_OFFSET:"seekoffset"},sr=30,Ts=`<svg aria-hidden="true" viewBox="0 0 20 24"><defs><style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style></defs><text class="text value" transform="translate(8.9 19.87)">${sr}</text><path d="M10 6V3l5.61 4L10 10.94V8a5.54 5.54 0 0 0-1.9 10.48v2.12A7.5 7.5 0 0 1 10 6Z"/></svg>`,ar=E.createElement("template");ar.innerHTML=`
  <slot name="forward">${Ts}</slot>
`;var Ls=0,_t=class extends M{static get observedAttributes(){return[...super.observedAttributes,a.MEDIA_CURRENT_TIME,vt.SEEK_OFFSET]}constructor(t={}){super({slotTemplate:ar,...t})}connectedCallback(){ge(this),fe(this,"forward"),super.connectedCallback()}attributeChangedCallback(t,e,r){t===vt.SEEK_OFFSET&&(fe(this,"forward"),ge(this)),super.attributeChangedCallback(t,e,r)}get seekOffset(){var t;return(t=T(this,vt.SEEK_OFFSET))!=null?t:sr}set seekOffset(t){D(this,vt.SEEK_OFFSET,t)}get mediaCurrentTime(){var t;return(t=T(this,a.MEDIA_CURRENT_TIME))!=null?t:Ls}set mediaCurrentTime(t){D(this,a.MEDIA_CURRENT_TIME,t)}handleClick(){let t=this.mediaCurrentTime+this.seekOffset,e=new o.CustomEvent(p.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:t});this.dispatchEvent(e)}};o.customElements.get("media-seek-forward-button")||o.customElements.define("media-seek-forward-button",_t);var nr=_t;var Ds=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M16 3v2.5h3.5V9H22V3h-6ZM4 9h2.5V5.5H10V3H4v6Zm15.5 9.5H16V21h6v-6h-2.5v3.5ZM6.5 15H4v6h6v-2.5H6.5V15Z"/>
</svg>`,Rs=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M18.5 6.5V3H16v6h6V6.5h-3.5ZM16 21h2.5v-3.5H22V15h-6v6ZM4 17.5h3.5V21H10v-6H4v2.5Zm3.5-11H4V9h6V3H7.5v3.5Z"/>
</svg>`,dr=E.createElement("template");dr.innerHTML=`
  <style>
  :host([${a.MEDIA_IS_FULLSCREEN}]) slot:not([name=exit]) > *,
  :host([${a.MEDIA_IS_FULLSCREEN}]) ::slotted(:not([slot=exit])) {
    display: none !important;
  }

  
  :host(:not([${a.MEDIA_IS_FULLSCREEN}])) slot:not([name=enter]) > *,
  :host(:not([${a.MEDIA_IS_FULLSCREEN}])) ::slotted(:not([slot=enter])) {
    display: none !important;
  }
  </style>

  <slot name="enter">${Ds}</slot>
  <slot name="exit">${Rs}</slot>
`;var or=i=>{let t=i.mediaIsFullscreen?v.EXIT_FULLSCREEN():v.ENTER_FULLSCREEN();i.setAttribute("aria-label",t)},Mt=class extends M{static get observedAttributes(){return[...super.observedAttributes,a.MEDIA_IS_FULLSCREEN,a.MEDIA_FULLSCREEN_UNAVAILABLE]}constructor(t={}){super({slotTemplate:dr,...t})}connectedCallback(){or(this),super.connectedCallback()}attributeChangedCallback(t,e,r){t===a.MEDIA_IS_FULLSCREEN&&or(this),super.attributeChangedCallback(t,e,r)}get mediaFullscreenUnavailable(){return R(this,a.MEDIA_FULLSCREEN_UNAVAILABLE)}set mediaFullscreenUnavailable(t){C(this,a.MEDIA_FULLSCREEN_UNAVAILABLE,t)}get mediaIsFullscreen(){return I(this,a.MEDIA_IS_FULLSCREEN)}set mediaIsFullscreen(t){_(this,a.MEDIA_IS_FULLSCREEN,t)}handleClick(){let t=this.mediaIsFullscreen?p.MEDIA_EXIT_FULLSCREEN_REQUEST:p.MEDIA_ENTER_FULLSCREEN_REQUEST;this.dispatchEvent(new o.CustomEvent(t,{composed:!0,bubbles:!0}))}};o.customElements.get("media-fullscreen-button")||o.customElements.define("media-fullscreen-button",Mt);var lr=Mt;var{MEDIA_TIME_IS_LIVE:St,MEDIA_PAUSED:Be}=a,{MEDIA_SEEK_TO_LIVE_REQUEST:Cs,MEDIA_PLAY_REQUEST:ys}=p,Us='<svg viewBox="0 0 6 12"><circle cx="3" cy="6" r="2"></circle></svg>',ur=E.createElement("template");ur.innerHTML=`
  <style>

  slot[name=indicator] > *,
  :host ::slotted([slot=indicator]) {
    
    min-width: auto;
    fill: var(--media-live-button-icon-color, rgb(140, 140, 140));
    color: var(--media-live-button-icon-color, rgb(140, 140, 140));
  }

  :host([${St}]:not([${Be}])) slot[name=indicator] > *,
  :host([${St}]:not([${Be}])) ::slotted([slot=indicator]) {
    fill: var(--media-live-button-indicator-color, rgb(255, 0, 0));
    color: var(--media-live-button-indicator-color, rgb(255, 0, 0));
  }

  :host([${St}]:not([${Be}])) {
    cursor: not-allowed;
  }

  </style>

  <slot name="indicator">${Us}</slot>
  
  <slot name="spacer">&nbsp;</slot><slot name="text">LIVE</slot>
`;var Tt=class extends M{static get observedAttributes(){return[...super.observedAttributes,Be,St]}constructor(t={}){super({slotTemplate:ur,...t}),this.setAttribute("aria-label",v.SEEK_LIVE())}attributeChangedCallback(t,e,r){super.attributeChangedCallback(t,e,r),this.mediaPaused||!this.mediaTimeIsLive?(this.setAttribute("aria-label",v.SEEK_LIVE()),this.removeAttribute("aria-disabled")):(this.setAttribute("aria-label",v.PLAYING_LIVE()),this.setAttribute("aria-disabled","true"))}get mediaPaused(){return I(this,a.MEDIA_PAUSED)}set mediaPaused(t){_(this,a.MEDIA_PAUSED,t)}get mediaTimeIsLive(){return I(this,a.MEDIA_TIME_IS_LIVE)}set mediaTimeIsLive(t){_(this,a.MEDIA_TIME_IS_LIVE,t)}handleClick(){!this.mediaPaused&&this.mediaTimeIsLive||(this.dispatchEvent(new o.CustomEvent(Cs,{composed:!0,bubbles:!0})),this.hasAttribute(Be)&&this.dispatchEvent(new o.CustomEvent(ys,{composed:!0,bubbles:!0})))}};o.customElements.get("media-live-button")||o.customElements.define("media-live-button",Tt);var cr=Tt;var{MEDIA_VOLUME_LEVEL:$e}=a,ws=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M16.5 12A4.5 4.5 0 0 0 14 8v2.18l2.45 2.45a4.22 4.22 0 0 0 .05-.63Zm2.5 0a6.84 6.84 0 0 1-.54 2.64L20 16.15A8.8 8.8 0 0 0 21 12a9 9 0 0 0-7-8.77v2.06A7 7 0 0 1 19 12ZM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25A6.92 6.92 0 0 1 14 18.7v2.06A9 9 0 0 0 17.69 19l2 2.05L21 19.73l-9-9L4.27 3ZM12 4 9.91 6.09 12 8.18V4Z"/>
</svg>`,mr=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4Z"/>
</svg>`,xs=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4ZM14 3.23v2.06a7 7 0 0 1 0 13.42v2.06a9 9 0 0 0 0-17.54Z"/>
</svg>`,hr=E.createElement("template");hr.innerHTML=`
  <style>
  
  :host(:not([${$e}])) slot:not([name=high]):not([name=icon]), 
  :host([${$e}=high]) slot:not([name=high]):not([name=icon]) {
    display: none !important;
  }

  :host([${$e}=off]) slot:not([name=off]):not([name=icon]) {
    display: none !important;
  }

  :host([${$e}=low]) slot:not([name=low]):not([name=icon]) {
    display: none !important;
  }

  :host([${$e}=medium]) slot:not([name=medium]):not([name=icon]) {
    display: none !important;
  }
  </style>

  <slot name="icon">
    <slot name="off">${ws}</slot>
    <slot name="low">${mr}</slot>
    <slot name="medium">${mr}</slot>
    <slot name="high">${xs}</slot>
  </slot>
`;var Er=i=>{let e=i.mediaVolumeLevel==="off"?v.UNMUTE():v.MUTE();i.setAttribute("aria-label",e)},Lt=class extends M{static get observedAttributes(){return[...super.observedAttributes,a.MEDIA_VOLUME_LEVEL]}constructor(t={}){super({slotTemplate:hr,...t})}connectedCallback(){Er(this),super.connectedCallback()}attributeChangedCallback(t,e,r){t===a.MEDIA_VOLUME_LEVEL&&Er(this),super.attributeChangedCallback(t,e,r)}get mediaVolumeLevel(){return R(this,a.MEDIA_VOLUME_LEVEL)}set mediaVolumeLevel(t){C(this,a.MEDIA_VOLUME_LEVEL,t)}handleClick(){let t=this.mediaVolumeLevel==="off"?p.MEDIA_UNMUTE_REQUEST:p.MEDIA_MUTE_REQUEST;this.dispatchEvent(new o.CustomEvent(t,{composed:!0,bubbles:!0}))}};o.customElements.get("media-mute-button")||o.customElements.define("media-mute-button",Lt);var pr=Lt;var Ar=`<svg aria-hidden="true" viewBox="0 0 28 24">
  <path d="M24 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Zm-1 16H5V5h18v14Zm-3-8h-7v5h7v-5Z"/>
</svg>`,gr=E.createElement("template");gr.innerHTML=`
  <style>
  :host([${a.MEDIA_IS_PIP}]) slot:not([name=exit]) > *, 
  :host([${a.MEDIA_IS_PIP}]) ::slotted(:not([slot=exit])) {
    display: none !important;
  }

  
  :host(:not([${a.MEDIA_IS_PIP}])) slot:not([name=enter]) > *, 
  :host(:not([${a.MEDIA_IS_PIP}])) ::slotted(:not([slot=enter])) {
    display: none !important;
  }
  </style>

  <slot name="enter">${Ar}</slot>
  <slot name="exit">${Ar}</slot>
`;var br=i=>{let t=i.mediaIsPip?v.EXIT_PIP():v.ENTER_PIP();i.setAttribute("aria-label",t)},Dt=class extends M{static get observedAttributes(){return[...super.observedAttributes,a.MEDIA_IS_PIP,a.MEDIA_PIP_UNAVAILABLE]}constructor(t={}){super({slotTemplate:gr,...t})}connectedCallback(){br(this),super.connectedCallback()}attributeChangedCallback(t,e,r){t===a.MEDIA_IS_PIP&&br(this),super.attributeChangedCallback(t,e,r)}get mediaPipUnavailable(){return R(this,a.MEDIA_PIP_UNAVAILABLE)}set mediaPipUnavailable(t){C(this,a.MEDIA_PIP_UNAVAILABLE,t)}get mediaIsPip(){return I(this,a.MEDIA_IS_PIP)}set mediaIsPip(t){_(this,a.MEDIA_IS_PIP,t)}handleClick(){let t=this.mediaIsPip?p.MEDIA_EXIT_PIP_REQUEST:p.MEDIA_ENTER_PIP_REQUEST;this.dispatchEvent(new o.CustomEvent(t,{composed:!0,bubbles:!0}))}};o.customElements.get("media-pip-button")||o.customElements.define("media-pip-button",Dt);var fr=Dt;var ks=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="m6 21 15-9L6 3v18Z"/>
</svg>`,Ps=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M6 20h4V4H6v16Zm8-16v16h4V4h-4Z"/>
</svg>`,vr=E.createElement("template");vr.innerHTML=`
  <style>
  :host([${a.MEDIA_PAUSED}]) slot[name=pause] > *, 
  :host([${a.MEDIA_PAUSED}]) ::slotted([slot=pause]) {
    display: none !important;
  }

  :host(:not([${a.MEDIA_PAUSED}])) slot[name=play] > *, 
  :host(:not([${a.MEDIA_PAUSED}])) ::slotted([slot=play]) {
    display: none !important;
  }
  </style>

  <slot name="play">${ks}</slot>
  <slot name="pause">${Ps}</slot>
`;var Ir=i=>{let t=i.mediaPaused?v.PLAY():v.PAUSE();i.setAttribute("aria-label",t)},Rt=class extends M{static get observedAttributes(){return[...super.observedAttributes,a.MEDIA_PAUSED]}constructor(t={}){super({slotTemplate:vr,...t})}connectedCallback(){Ir(this),super.connectedCallback()}attributeChangedCallback(t,e,r){t===a.MEDIA_PAUSED&&Ir(this),super.attributeChangedCallback(t,e,r)}get mediaPaused(){return I(this,a.MEDIA_PAUSED)}set mediaPaused(t){_(this,a.MEDIA_PAUSED,t)}handleClick(){let t=this.mediaPaused?p.MEDIA_PLAY_REQUEST:p.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new o.CustomEvent(t,{composed:!0,bubbles:!0}))}};o.customElements.get("media-play-button")||o.customElements.define("media-play-button",Rt);var _r=Rt;var si={RATES:"rates"},Ns=[1,1.25,1.5,1.75,2],Ct=1,Mr=E.createElement("template");Mr.innerHTML=`
  <span id="container"></span>
`;var le,yt=class extends M{constructor(e={}){super({slotTemplate:Mr,...e});A(this,le,new Ee(this,si.RATES,{defaultValue:Ns}));this.container=this.shadowRoot.querySelector("#container"),this.container.innerHTML=`${Ct}x`}static get observedAttributes(){return[...super.observedAttributes,a.MEDIA_PLAYBACK_RATE,si.RATES]}attributeChangedCallback(e,r,s){if(e===si.RATES&&(l(this,le).value=s),e===a.MEDIA_PLAYBACK_RATE){let n=s?+s:Number.NaN,d=Number.isNaN(n)?Ct:n;this.container.innerHTML=`${d}x`,this.setAttribute("aria-label",U.PLAYBACK_RATE({playbackRate:d}));return}super.attributeChangedCallback(e,r,s)}get rates(){return l(this,le)}set rates(e){e?Array.isArray(e)&&(l(this,le).value=e.join(" ")):l(this,le).value=""}get mediaPlaybackRate(){var e;return(e=T(this,a.MEDIA_PLAYBACK_RATE))!=null?e:Ct}set mediaPlaybackRate(e){D(this,a.MEDIA_PLAYBACK_RATE,e)}handleClick(){var n,d;let e=Array.from(this.rates.values(),c=>+c).sort(),r=(d=(n=e.find(c=>c>this.mediaPlaybackRate))!=null?n:e[0])!=null?d:Ct,s=new o.CustomEvent(p.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:r});this.dispatchEvent(s)}};le=new WeakMap;o.customElements.get("media-playback-rate-button")||o.customElements.define("media-playback-rate-button",yt);var Sr=yt;var Z={PLACEHOLDER_SRC:"placeholdersrc",SRC:"src"},Tr=E.createElement("template");Tr.innerHTML=`
  <style>
    :host {
      pointer-events: none;
      display: var(--media-poster-image-display, inline-block);
      box-sizing: border-box;
    }

    img {
      max-width: 100%;
      max-height: 100%;
      min-width: 100%;
      min-height: 100%;
      background-repeat: no-repeat;
      background-position: var(--media-poster-image-background-position, var(--media-object-position, center));
      background-size: var(--media-poster-image-background-size, var(--media-object-fit, contain));
      object-fit: var(--media-object-fit, contain);
      object-position: var(--media-object-position, center);
    }
  </style>

  <img aria-hidden="true" id="image"/>
`;var Os=i=>{i.style.removeProperty("background-image")},Bs=(i,t)=>{i.style["background-image"]=`url('${t}')`},Ut=class extends o.HTMLElement{static get observedAttributes(){return[Z.PLACEHOLDER_SRC,Z.SRC]}constructor(){super(),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(Tr.content.cloneNode(!0))),this.image=this.shadowRoot.querySelector("#image")}attributeChangedCallback(t,e,r){t===Z.SRC&&(r==null?this.image.removeAttribute(Z.SRC):this.image.setAttribute(Z.SRC,r)),t===Z.PLACEHOLDER_SRC&&(r==null?Os(this.image):Bs(this.image,r))}get placeholderSrc(){return R(this,Z.PLACEHOLDER_SRC)}set placeholderSrc(t){C(this,Z.SRC,t)}get src(){return R(this,Z.SRC)}set src(t){C(this,Z.SRC,t)}};o.customElements.get("media-poster-image")||o.customElements.define("media-poster-image",Ut);var Lr=Ut;var wt={SEEK_OFFSET:"seekoffset"},Dr=30,$s=`<svg aria-hidden="true" viewBox="0 0 20 24"><defs><style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style></defs><text class="text value" transform="translate(2.18 19.87)">${Dr}</text><path d="M10 6V3L4.37 7 10 10.94V8a5.54 5.54 0 0 1 1.9 10.48v2.12A7.5 7.5 0 0 0 10 6Z"/></svg>`,Rr=E.createElement("template");Rr.innerHTML=`
  <slot name="backward">${$s}</slot>
`;var Vs=0,xt=class extends M{static get observedAttributes(){return[...super.observedAttributes,a.MEDIA_CURRENT_TIME,wt.SEEK_OFFSET]}constructor(t={}){super({slotTemplate:Rr,...t})}connectedCallback(){ge(this),fe(this,"backward"),super.connectedCallback()}attributeChangedCallback(t,e,r){t===wt.SEEK_OFFSET&&(fe(this,"backward"),ge(this)),super.attributeChangedCallback(t,e,r)}get seekOffset(){var t;return(t=T(this,wt.SEEK_OFFSET))!=null?t:Dr}set seekOffset(t){D(this,wt.SEEK_OFFSET,t)}get mediaCurrentTime(){var t;return(t=T(this,a.MEDIA_CURRENT_TIME))!=null?t:Vs}set mediaCurrentTime(t){D(this,a.MEDIA_CURRENT_TIME,t)}handleClick(){let t=Math.max(this.mediaCurrentTime-this.seekOffset,0),e=new o.CustomEvent(p.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:t});this.dispatchEvent(e)}};o.customElements.get("media-seek-backward-button")||o.customElements.define("media-seek-backward-button",xt);var Cr=xt;var Ie,kt=class extends Ae{constructor(){super();A(this,Ie,void 0);h(this,Ie,this.shadowRoot.querySelector("slot")),l(this,Ie).textContent=$(0)}static get observedAttributes(){return[...super.observedAttributes,a.MEDIA_PREVIEW_TIME]}attributeChangedCallback(e,r,s){e===a.MEDIA_PREVIEW_TIME&&s!=null&&(l(this,Ie).textContent=$(s)),super.attributeChangedCallback(e,r,s)}get mediaPreviewTime(){return T(this,a.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){D(this,a.MEDIA_PREVIEW_TIME,e)}};Ie=new WeakMap;o.customElements.get("media-preview-time-display")||o.customElements.define("media-preview-time-display",kt);var yr=kt;var Ur=E.createElement("template");Ur.innerHTML=`
  <style>
    :host {
      box-sizing: border-box;
      display: var(--media-control-display, var(--media-preview-thumbnail-display, inline-block));
      overflow: hidden;
    }

    img {
      display: none;
      position: relative;
    }
  </style>
  <img crossorigin loading="eager" decoding="async">
`;var G,Pt=class extends o.HTMLElement{constructor(){super();A(this,G,void 0);this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(Ur.content.cloneNode(!0)))}static get observedAttributes(){return[g.MEDIA_CONTROLLER,a.MEDIA_PREVIEW_IMAGE,a.MEDIA_PREVIEW_COORDS]}connectedCallback(){var r,s,n;let e=this.getAttribute(g.MEDIA_CONTROLLER);e&&(h(this,G,(r=this.getRootNode())==null?void 0:r.getElementById(e)),(n=(s=l(this,G))==null?void 0:s.associateElement)==null||n.call(s,this))}disconnectedCallback(){var e,r;(r=(e=l(this,G))==null?void 0:e.unassociateElement)==null||r.call(e,this),h(this,G,null)}attributeChangedCallback(e,r,s){var n,d,c,u,m;[a.MEDIA_PREVIEW_IMAGE,a.MEDIA_PREVIEW_COORDS].includes(e)&&this.update(),e===g.MEDIA_CONTROLLER&&(r&&((d=(n=l(this,G))==null?void 0:n.unassociateElement)==null||d.call(n,this),h(this,G,null)),s&&(h(this,G,(c=this.getRootNode())==null?void 0:c.getElementById(s)),(m=(u=l(this,G))==null?void 0:u.associateElement)==null||m.call(u,this)))}get mediaPreviewImage(){return R(this,a.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){C(this,a.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewCoords(){let e=this.getAttribute(a.MEDIA_PREVIEW_COORDS);if(!!e)return e.split(/\s+/).map(r=>+r)}set mediaPreviewCoords(e){if(!e){this.removeAttribute(a.MEDIA_PREVIEW_COORDS);return}this.setAttribute(a.MEDIA_PREVIEW_COORDS,e.join(" "))}update(){let e=this.mediaPreviewCoords,r=this.mediaPreviewImage;if(!(e&&r))return;let[s,n,d,c]=e,u=r.split("#")[0],m=getComputedStyle(this),{maxWidth:b,maxHeight:L,minWidth:N,minHeight:B}=m,Y=Math.min(parseInt(b)/d,parseInt(L)/c),ce=Math.max(parseInt(N)/d,parseInt(B)/c),li=Y<1,me=li?Y:ce>1?ce:1,{style:ze}=S(this.shadowRoot,":host"),Xe=S(this.shadowRoot,"img").style,Se=this.shadowRoot.querySelector("img"),ui=li?"min":"max";ze.setProperty(`${ui}-width`,"initial","important"),ze.setProperty(`${ui}-height`,"initial","important"),ze.width=`${d*me}px`,ze.height=`${c*me}px`;let Ft=()=>{Xe.width=`${this.imgWidth*me}px`,Xe.height=`${this.imgHeight*me}px`,Xe.display="block"};Se.src!==u&&(Se.onload=()=>{this.imgWidth=Se.naturalWidth,this.imgHeight=Se.naturalHeight,Ft()},Se.src=u,Ft()),Ft(),Xe.transform=`translate(-${s*me}px, -${n*me}px)`}};G=new WeakMap;o.customElements.get("media-preview-thumbnail")||o.customElements.define("media-preview-thumbnail",Pt);var wr=Pt;var Hs="video not loaded, unknown time.",ai=i=>{let t=i.range,e=X(+t.value),r=X(+t.max),s=e&&r?`${e} of ${r}`:Hs;t.setAttribute("aria-valuetext",s)},xr=E.createElement("template");xr.innerHTML=`
  <style>
    :host {
      --media-preview-border-radius: 3px;
      --media-box-padding-left: 10px;
      --media-box-padding-right: 10px;
    }

    #preview-rail,
    #current-rail {
      
      width: 1%;
      position: absolute;
      left: 0;
      bottom: 100%;
      pointer-events: none;
    }

    [part~="box"] {
      
      position: absolute;
      bottom: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      transform: translateX(-50%);
    }

    [part~="preview-box"] {
      transition-property: var(--media-preview-transition-property, visibility, opacity);
      transition-duration: var(--media-preview-transition-duration-out, .25s);
      transition-delay: var(--media-preview-transition-delay-out, 0s);
      visibility: hidden;
      opacity: 0;
    }

    :host([${a.MEDIA_PREVIEW_IMAGE}]:hover) [part~="preview-box"],
    :host([${a.MEDIA_PREVIEW_TIME}]:hover) [part~="preview-box"] {
      transition-duration: var(--media-preview-transition-duration-in, .5s);
      transition-delay: var(--media-preview-transition-delay-in, .25s);
      visibility: visible;
      opacity: 1;
    }

    media-preview-thumbnail,
    ::slotted(media-preview-thumbnail) {
      visibility: hidden;
      
      transition: visibility 0s .25s;
      transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
      background: var(--media-preview-thumbnail-background, var(--media-preview-background, var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)))));
      box-shadow: var(--media-preview-thumbnail-box-shadow, 0 0 4px rgb(0 0 0 / .2));
      max-width: var(--media-preview-thumbnail-max-width, 180px);
      max-height: var(--media-preview-thumbnail-max-height, 160px);
      min-width: var(--media-preview-thumbnail-min-width, 120px);
      min-height: var(--media-preview-thumbnail-min-height, 80px);
      border: var(--media-preview-thumbnail-border);
      border-radius: var(--media-preview-thumbnail-border-radius,
        var(--media-preview-border-radius) var(--media-preview-border-radius) 0 0);
    }

    :host([${a.MEDIA_PREVIEW_IMAGE}]:hover) media-preview-thumbnail,
    :host([${a.MEDIA_PREVIEW_IMAGE}]:hover) ::slotted(media-preview-thumbnail) {
      transition-delay: var(--media-preview-transition-delay-in, .25s);
      visibility: visible;
    }

    media-preview-time-display,
    ::slotted(media-preview-time-display) {
      min-width: 0;
      
      transition: min-width 0s, border-radius 0s;
      transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
      background: var(--media-preview-time-background, var(--media-preview-background, var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)))));
      border-radius: var(--media-preview-time-border-radius,
        var(--media-preview-border-radius) var(--media-preview-border-radius)
        var(--media-preview-border-radius) var(--media-preview-border-radius));
      padding: var(--media-preview-time-padding, 1px 10px 0);
      margin: var(--media-preview-time-margin, 0 0 10px);
      text-shadow: var(--media-preview-time-text-shadow, 0 0 4px rgb(0 0 0 / .75));
    }

    :host([${a.MEDIA_PREVIEW_IMAGE}]) media-preview-time-display,
    :host([${a.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-time-display) {
      transition-delay: var(--media-preview-transition-delay-in, .25s);
      min-width: 100%;
      border-radius: var(--media-preview-time-border-radius,
        0 0 var(--media-preview-border-radius) var(--media-preview-border-radius));
    }

    :host([${a.MEDIA_PREVIEW_TIME}]:hover) {
      --media-time-range-hover-display: block;
    }
  </style>
  <div id="preview-rail">
    <slot name="preview" part="box preview-box">
      <media-preview-thumbnail></media-preview-thumbnail>
      <media-preview-time-display></media-preview-time-display>
    </slot>
  </div>
  <div id="current-rail">
    <slot name="current" part="box current-box">
      
    </slot>
  </div>
`;var ve,Ve,_e,He,Fe,Ke,ni,Ot,kr,Ge,oi,We,ue,Me,Bt,Ye,Qe,qe,di,$t,Pr,Nt=class extends pe{constructor(){super();A(this,Ke);A(this,Ot);A(this,Ge);A(this,qe);A(this,$t);A(this,ve,void 0);A(this,Ve,void 0);A(this,_e,void 0);A(this,He,void 0);A(this,Fe,void 0);A(this,We,e=>{if([...l(this,ve)].some(b=>e.composedPath().includes(b)))return;this.updatePointerBar(e);let r=this.mediaDuration;if(!r)return;let s=this.range.getBoundingClientRect(),n=(e.clientX-s.left)/s.width;n=Math.max(0,Math.min(1,n));let d=P(this,Ge,oi).call(this,l(this,Ve),n),{style:c}=S(this.shadowRoot,"#preview-rail");c.transform=`translateX(${d})`;let u=n*r,m=new o.CustomEvent(p.MEDIA_PREVIEW_REQUEST,{composed:!0,bubbles:!0,detail:u});this.dispatchEvent(m)});A(this,ue,!1);A(this,Me,e=>{(!e.composedPath().includes(this)||[...l(this,ve)].some(r=>e.composedPath().includes(r)))&&(o.removeEventListener("pointermove",l(this,Me)),h(this,ue,!1),l(this,Ye).call(this))});A(this,Bt,()=>{o.addEventListener("pointermove",l(this,We),!1)});A(this,Ye,()=>{o.removeEventListener("pointermove",l(this,We));let e=new o.CustomEvent(p.MEDIA_PREVIEW_REQUEST,{composed:!0,bubbles:!0,detail:null});this.dispatchEvent(e)});A(this,Qe,()=>{let e=this.getAttribute(a.MEDIA_DURATION);!l(this,ue)&&e&&(h(this,ue,!0),l(this,Bt).call(this),o.addEventListener("pointermove",l(this,Me),!1))});this.container.appendChild(xr.content.cloneNode(!0)),this.range.addEventListener("input",()=>{cancelAnimationFrame(this._refreshId);let s=this.range.value,n=new o.CustomEvent(p.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:s});this.dispatchEvent(n)}),this._refreshBar=()=>{let r=(performance.now()-this._updateTimestamp)/1e3;this.range.value=this.mediaCurrentTime+r*this.mediaPlaybackRate,this.updateBar(),this.updateCurrentBox(),this._refreshId=requestAnimationFrame(this._refreshBar)},h(this,ve,this.shadowRoot.querySelectorAll('[part~="box"]')),h(this,Ve,this.shadowRoot.querySelector('[part~="preview-box"]')),h(this,_e,this.shadowRoot.querySelector('[part~="current-box"]'));let e=getComputedStyle(this);h(this,He,parseInt(e.getPropertyValue("--media-box-padding-left"))),h(this,Fe,parseInt(e.getPropertyValue("--media-box-padding-right"))),P(this,qe,di).call(this)}static get observedAttributes(){return[...super.observedAttributes,a.MEDIA_PAUSED,a.MEDIA_DURATION,a.MEDIA_SEEKABLE,a.MEDIA_CURRENT_TIME,a.MEDIA_PREVIEW_IMAGE,a.MEDIA_PREVIEW_TIME,a.MEDIA_BUFFERED,a.MEDIA_PLAYBACK_RATE,a.MEDIA_LOADING]}connectedCallback(){this.range.setAttribute("aria-label",U.SEEK()),super.connectedCallback()}disconnectedCallback(){cancelAnimationFrame(this._refreshId),super.disconnectedCallback()}attributeChangedCallback(e,r,s){var n,d,c,u,m;(e===a.MEDIA_CURRENT_TIME||e===a.MEDIA_PAUSED||e===a.MEDIA_LOADING)&&(this._updateTimestamp=performance.now(),this.range.value=this.mediaCurrentTime,ai(this),this.updateBar(),this.updateCurrentBox(),cancelAnimationFrame(this._refreshId),!this.mediaPaused&&!this.mediaLoading&&(this._refreshId=requestAnimationFrame(this._refreshBar))),e===a.MEDIA_DURATION&&(this.range.max=(d=(n=l(this,Ke,ni))!=null?n:this.mediaDuration)!=null?d:1e3,ai(this),this.updateBar(),this.updateCurrentBox()),e===a.MEDIA_SEEKABLE&&(this.range.min=(c=l(this,Ot,kr))!=null?c:0,this.range.max=(m=(u=l(this,Ke,ni))!=null?u:this.mediaDuration)!=null?m:1e3,ai(this),this.updateBar()),e===a.MEDIA_BUFFERED&&this.updateBar(),e==="disabled"&&(s==null?P(this,qe,di).call(this):P(this,$t,Pr).call(this)),super.attributeChangedCallback(e,r,s)}get mediaPaused(){return I(this,a.MEDIA_PAUSED)}set mediaPaused(e){_(this,a.MEDIA_PAUSED,e)}get mediaLoading(){return I(this,a.MEDIA_LOADING)}set mediaLoading(e){_(this,a.MEDIA_LOADING,e)}get mediaDuration(){return T(this,a.MEDIA_DURATION)}set mediaDuration(e){D(this,a.MEDIA_DURATION,e)}get mediaCurrentTime(){return T(this,a.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){D(this,a.MEDIA_CURRENT_TIME,e)}get mediaPlaybackRate(){var e;return(e=T(this,a.MEDIA_PLAYBACK_RATE))!=null?e:1}set mediaPlaybackrate(e){D(this,a.MEDIA_PLAYBACK_RATE,e)}get mediaBuffered(){let e=this.getAttribute(a.MEDIA_BUFFERED);return e?e.split(" ").map(r=>r.split(":").map(s=>+s)):[]}set mediaBuffered(e){if(!e){this.removeAttribute(a.MEDIA_BUFFERED);return}let r=e.map((s,n)=>`${s}:${n}`).join(" ");this.setAttribute(a.MEDIA_BUFFERED,r)}get mediaSeekable(){let e=this.getAttribute(a.MEDIA_SEEKABLE);if(!!e)return e.split(":").map(r=>+r)}set mediaSeekable(e){if(e==null){this.removeAttribute(a.MEDIA_SEEKABLE);return}this.setAttribute(a.MEDIA_SEEKABLE,e.join(":"))}get mediaPreviewImage(){return R(this,a.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){C(this,a.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewTime(){return T(this,a.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){D(this,a.MEDIA_PREVIEW_TIME,e)}getBarColors(){var b;let e=super.getBarColors(),{range:r}=this,s=r.max-r.min,n=this.mediaBuffered;if(!n.length||!Number.isFinite(s)||s<=0)return e;let d=this.mediaCurrentTime,[,c=r.min]=(b=n.find(([L,N])=>L<=d&&d<=N))!=null?b:[],m=(c-r.min)/s*100;return e.splice(1,0,["var(--media-time-range-buffered-color, rgb(255 255 255 / .4))",m]),e}updateCurrentBox(){if(!l(this,_e).assignedElements().length)return;let e=this.range.value/(this.range.max-this.range.min),r=P(this,Ge,oi).call(this,l(this,_e),e),{style:s}=S(this.shadowRoot,"#current-rail");s.transform=`translateX(${r})`}};ve=new WeakMap,Ve=new WeakMap,_e=new WeakMap,He=new WeakMap,Fe=new WeakMap,Ke=new WeakSet,ni=function(){var r;let[,e]=(r=this.mediaSeekable)!=null?r:[];return e},Ot=new WeakSet,kr=function(){var r;let[e]=(r=this.mediaSeekable)!=null?r:[];return e},Ge=new WeakSet,oi=function(e,r){var L;let s=`${r*100*100}%`,n=e.offsetWidth;if(!n)return s;let d=(L=this.getAttribute("bounds")?De(this,`#${this.getAttribute("bounds")}`):this.parentElement)!=null?L:this,c=this.range.getBoundingClientRect(),u=d.getBoundingClientRect(),m=(l(this,He)-(c.left-u.left-n/2))/c.width*100,b=(u.right-c.left-n/2-l(this,Fe))/c.width*100;return Number.isNaN(m)||(s=`max(${m*100}%, ${s})`),Number.isNaN(b)||(s=`min(${s}, ${b*100}%)`),s},We=new WeakMap,ue=new WeakMap,Me=new WeakMap,Bt=new WeakMap,Ye=new WeakMap,Qe=new WeakMap,qe=new WeakSet,di=function(){this.addEventListener("pointermove",l(this,Qe),!1)},$t=new WeakSet,Pr=function(){o.removeEventListener("pointermove",l(this,Me)),this.removeEventListener("pointermove",l(this,Qe)),h(this,ue,!1),l(this,Ye).call(this)};o.customElements.get("media-time-range")||o.customElements.define("media-time-range",Nt);var Nr=Nt;var Or={LOADING_DELAY:"loadingdelay"},Br=500,$r=E.createElement("template"),Fs=`
<svg aria-hidden="true" viewBox="0 0 100 100">
  <path d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
    <animateTransform
       attributeName="transform"
       attributeType="XML"
       type="rotate"
       dur="1s"
       from="0 50 50"
       to="360 50 50"
       repeatCount="indefinite" />
  </path>
</svg>
`;$r.innerHTML=`
<style>
:host {
  display: var(--media-control-display, var(--media-loading-indicator-display, inline-block));
  vertical-align: middle;
  box-sizing: border-box;
  --_loading-indicator-delay: var(--media-loading-indicator-transition-delay, ${Br}ms);
}

#status {
  color: rgba(0,0,0,0);
  width: 0px;
  height: 0px;
}

:host slot[name=loading] > *,
:host ::slotted([slot=loading]) {
  opacity: var(--media-loading-indicator-opacity, 0);
  transition: opacity 0.15s;
}

:host([${a.MEDIA_LOADING}]:not([${a.MEDIA_PAUSED}])) slot[name=loading] > *,
:host([${a.MEDIA_LOADING}]:not([${a.MEDIA_PAUSED}])) ::slotted([slot=loading]) {
  opacity: var(--media-loading-indicator-opacity, 1);
  transition: opacity 0.15s var(--_loading-indicator-delay);
}

:host #status {
  visibility: var(--media-loading-indicator-opacity, hidden);
  transition: visibility 0.15s;
}

:host([${a.MEDIA_LOADING}]:not([${a.MEDIA_PAUSED}])) #status {
  visibility: var(--media-loading-indicator-opacity, visible);
  transition: visibility 0.15s var(--_loading-indicator-delay);
}

svg, img, ::slotted(svg), ::slotted(img) {
  width: var(--media-loading-icon-width, 100px);
  height: var(--media-loading-icon-height);
  fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
  vertical-align: middle;
}
</style>

<slot name="loading">${Fs}</slot>
<div id="status" role="status" aria-live="polite">${U.MEDIA_LOADING()}</div>
`;var W,Ze,je,Vt=class extends o.HTMLElement{constructor(){super();A(this,W,void 0);A(this,Ze,Br);A(this,je,void 0);if(!this.shadowRoot){let r=this.attachShadow({mode:"open"}),s=$r.content.cloneNode(!0);r.appendChild(s)}let{style:e}=S(this.shadowRoot,":host");h(this,je,e)}static get observedAttributes(){return[g.MEDIA_CONTROLLER,a.MEDIA_PAUSED,a.MEDIA_LOADING,Or.LOADING_DELAY]}attributeChangedCallback(e,r,s){var n,d,c,u,m;e===Or.LOADING_DELAY&&r!==s?this.loadingDelay=Number(s):e===g.MEDIA_CONTROLLER&&(r&&((d=(n=l(this,W))==null?void 0:n.unassociateElement)==null||d.call(n,this),h(this,W,null)),s&&(h(this,W,(c=this.getRootNode())==null?void 0:c.getElementById(s)),(m=(u=l(this,W))==null?void 0:u.associateElement)==null||m.call(u,this)))}connectedCallback(){var r,s,n;let e=this.getAttribute(g.MEDIA_CONTROLLER);e&&(h(this,W,(r=this.getRootNode())==null?void 0:r.getElementById(e)),(n=(s=l(this,W))==null?void 0:s.associateElement)==null||n.call(s,this))}disconnectedCallback(){var e,r;(r=(e=l(this,W))==null?void 0:e.unassociateElement)==null||r.call(e,this),h(this,W,null)}get loadingDelay(){return l(this,Ze)}set loadingDelay(e){h(this,Ze,e),l(this,je).setProperty("--_loading-indicator-delay",`var(--media-loading-indicator-transition-delay, ${e}ms)`)}get mediaPaused(){return I(this,a.MEDIA_PAUSED)}set mediaPaused(e){_(this,a.MEDIA_PAUSED,e)}get mediaLoading(){return I(this,a.MEDIA_LOADING)}set mediaLoading(e){_(this,a.MEDIA_LOADING,e)}};W=new WeakMap,Ze=new WeakMap,je=new WeakMap;o.customElements.get("media-loading-indicator")||o.customElements.define("media-loading-indicator",Vt);var Vr=Vt;var Ks=100,Gs=1,Ws=i=>i.mediaMuted?0:Math.round(i.mediaVolume*i.range.max),Ys=({value:i,max:t})=>`${Math.round(i/t*100)}%`,Ht=class extends pe{static get observedAttributes(){return[...super.observedAttributes,a.MEDIA_VOLUME,a.MEDIA_MUTED,a.MEDIA_VOLUME_UNAVAILABLE]}constructor(){super(),this.range.max=Ks,this.range.addEventListener("input",()=>{let e=this.range.value/this.range.max,r=new o.CustomEvent(p.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(r)})}connectedCallback(){this.range.setAttribute("aria-label",U.VOLUME()),super.connectedCallback()}attributeChangedCallback(t,e,r){if(t===a.MEDIA_VOLUME||t===a.MEDIA_MUTED){let s=Ws(this);this.range.value=s,this.range.setAttribute("aria-valuetext",Ys(this.range)),this.updateBar()}super.attributeChangedCallback(t,e,r)}get mediaVolume(){var t;return(t=T(this,a.MEDIA_VOLUME))!=null?t:Gs}set mediaVolume(t){D(this,a.MEDIA_VOLUME,t)}get mediaMuted(){return I(this,a.MEDIA_MUTED)}set mediaMuted(t){_(this,a.MEDIA_MUTED,t)}get mediaVolumeUnavailable(){return R(this,a.MEDIA_VOLUME_UNAVAILABLE)}set mediaVolumeUnavailable(t){C(this,a.MEDIA_VOLUME_UNAVAILABLE,t)}};o.customElements.get("media-volume-range")||o.customElements.define("media-volume-range",Ht);var Hr=Ht;return Qr(Qs);})();
//# sourceMappingURL=index.js.map
