__twttrll([6],{189:function(e,t,i){var n=i(84);e.exports=n.build([i(190),i(194),i(149),i(150),i(100),i(96),i(195),i(196),i(139),i(140),i(135),i(138),i(199),i(200),i(201),i(206),i(208),i(211),i(148),i(212),i(214),i(141),i(142),i(152),i(216)],{pageForAudienceImpression:"timeline",productName:"embeddedtimeline",breakpoints:[330,430,550,660,820,970]})},190:function(e,t,i){function n(e){e.params({dataSource:{required:!0},lang:{required:!0,transform:p.matchLanguage,fallback:"en"},useLegacyDefaults:{required:!0,fallback:!1},width:{validate:m,transform:m},height:{validate:m,transform:m},theme:{fallback:[h(o.val,o,"widgets:theme")],validate:g},tweetLimit:{transform:l.asInt},partner:{fallback:h(o.val,o,"partner")},staticContent:{required:!1,transform:l.asBoolean}}),e.selectors({header:".timeline-Header",footer:".timeline-Footer",viewport:".timeline-Viewport",tweetList:".timeline-TweetList",tweetsInStream:".timeline-Tweet"}),e.around("scribeNamespace",function(e){return u.aug(e(),{page:"timeline"})}),e.around("scribeData",function(e){var t=this.params.dataSource.id;return u.aug(e(),{widget_id:l.isNumber(t)?t:void 0,widget_data_source:t,message:this.params.partner,query:this.el&&this.el.getAttribute("data-search-query"),profile_id:this.el&&this.el.getAttribute("data-profile-id")})}),e.around("widgetDataAttributes",function(e){return u.aug({"widget-id":this.params.dataSource.id,"user-id":this.el&&this.el.getAttribute("data-profile-id"),"search-query":this.el&&this.el.getAttribute("data-search-query")},e())}),e.define("updateViewportHeight",function(){var e,t=this.sandbox,i=this.selectOne("header"),n=this.selectOne("footer"),r=this.selectOne("viewport");return a.read(function(){e=t.height-2*y,e-=i?i.offsetHeight:0,e-=n?n.offsetHeight:0}),a.write(function(){r.style.height=e+"px"})}),e.define("adjustWidgetSize",function(){return this.isFullyExpanded?this.sandbox.matchHeightToContent():this.updateViewportHeight()}),e.define("reconfigureWithServerSideParams",function(e){e=e||{},this.params.linkColor=this.params.linkColor||e.linkColor,this.params.theme=this.params.theme||e.theme||"light",this.params.height=m(this.params.height||e.height),this.isFullyExpanded=this.isStaticTimeline||!this.params.useLegacyDefaults&&!this.params.height,this.isFullyExpanded||this.params.height||(this.params.height=E)}),e.define("scribeImpressionsForInitialTweetSet",function(e){var t=f(this.select("tweetsInStream")),i=Object.keys(t),n=i.length?"results":"no_results",r=this.el.getAttribute("data-collection-id");r&&(i.push(r),t[r]={item_type:w.CUSTOM_TIMELINE}),this.scribe({component:"timeline",element:"initial",action:n},{widget_in_viewport:e,item_ids:i,item_details:t})}),e.override("initialize",function(){this.params.width||(this.params.width=this.params.useLegacyDefaults?I:C),this.isStaticTimeline=this.params.staticContent||this.params.tweetLimit>0}),e.override("hydrate",function(){var e=this;return this.params.dataSource.fetch().then(function(t){e.html=t.html,e.reconfigureWithServerSideParams(t.config),v(e,t,b.INITIAL)})}),e.override("render",function(){var e,t=this;return this.el=this.sandbox.htmlToElement(this.html),this.el?(this.el.lang=this.params.lang,this.isFullyExpanded&&this.sandbox.addRootClass("var-fully-expanded"),this.isStaticTimeline&&this.sandbox.addRootClass("var-static"),e=s.timeline(this.params.lang,this.params.theme),r.all([this.sandbox.appendStyleSheet(e),this.sandbox.styleSelf({display:"inline-block",maxWidth:C,width:this.params.width,minWidth:T,marginTop:0,marginBottom:0})]).then(function(){return t.prepForInsertion(t.el),t.sandbox.injectWidgetEl(t.el)})):r.reject(new Error("unable to render"))}),e.override("show",function(){var e=this.sandbox,t=this;return this.sandbox.makeVisible().then(function(){return e.styleSelf({minHeight:t.isStaticTimeline?void 0:x,height:t.params.height})}).then(function(){return t.adjustWidgetSize()}).then(function(){return a.read(function(){var i=d(e.sandboxEl);t.scribeImpressionsForInitialTweetSet(i)})})}),e.last("resize",function(){return this.adjustWidgetSize()})}var r=i(2),s=i(89),a=i(45),o=i(37),d=i(134),l=i(25),u=i(11),c=i(84),h=i(13),f=i(101),m=i(133),p=i(90),g=i(191),v=i(192),w=i(102),b=i(193),T="180px",C="100%",x="200px",I="520px",E="600px",y=1;e.exports=c.couple(i(98),i(114),n)},191:function(e,t){function i(e){return n.test(e)}var n=/^(dark|light)$/;e.exports=i},192:function(e,t,i){function n(e,t,i){switch(e.cursors=e.cursors||{},e.pollInterval=t.pollInterval,i){case r.INITIAL:e.cursors.min=t.minCursorPosition,e.cursors.max=t.maxCursorPosition;break;case r.NEWER:e.cursors.max=t.maxCursorPosition||e.cursors.max;break;case r.OLDER:e.cursors.min=t.minCursorPosition||e.cursors.min}}var r=i(193);e.exports=n},193:function(e,t){e.exports={INITIAL:1,NEWER:2,OLDER:3}},194:function(e,t,i){function n(e){e.params({chrome:{transform:s,fallback:""}}),e.selectors({streamContainer:".timeline-Viewport",tweetStream:".timeline-TweetList"}),e.before("render",function(){this.params.chrome.transparent&&this.sandbox.addRootClass("var-chromeless"),this.params.chrome.hideBorder&&this.sandbox.addRootClass("var-borderless"),this.params.chrome.hideHeader&&this.sandbox.addRootClass("var-headerless"),this.params.chrome.hideFooter&&this.sandbox.addRootClass("var-footerless")}),e.after("render",function(){if(this.params.chrome.hideScrollBar)return this.hideScrollBar()}),e.after("resize",function(){if(this.params.chrome.hideScrollBar)return this.hideScrollBar()}),e.define("hideScrollBar",function(){var e=this.selectOne("streamContainer"),t=this.selectOne("tweetStream");return r.defer(function(){var i,n;e.style.width="",i=e.offsetWidth-t.offsetWidth,n=e.offsetWidth+i,e.style.width=n+"px"})})}var r=i(45),s=i(155);e.exports=n},195:function(e,t){function i(e){e.params({ariaLive:{fallback:""}}),e.selectors({newTweetsNotifier:".new-tweets-bar"}),e.after("render",function(){var e=this.selectOne("newTweetsNotifier");"assertive"===this.params.ariaLive&&e&&e.setAttribute("aria-live","assertive")})}e.exports=i},196:function(e,t,i){function n(e){e.selectors({fullTimestampToLocalize:".long-permalink time",relativeTimestampToLocalize:".permalink time"}),e.after("prepForInsertion",function(e){var t=o(this.el);t&&(this.select(e,"fullTimestampToLocalize").forEach(function(e){var i=e.getAttribute("datetime"),n=i&&t.localTimeStamp(i);n&&(e.innerHTML=n)}),this.select(e,"relativeTimestampToLocalize").forEach(function(e){var i=e.getAttribute("datetime"),n=i&&t.timeAgo(i);n&&(e.innerHTML=n)}))}),e.define("updateRelativeTimestamps",function(){var e=o(this.el);if(e){var t=this.select("relativeTimestampToLocalize").reduce(function(t,i){var n=i.getAttribute("datetime"),r=n&&e.timeAgo(n);return r&&t.push(function(){i.innerHTML=r}),t},[]);return r.all(t.map(s.write))}}),e.after("render",function(){var e=this;a.setInterval(function(){e.updateRelativeTimestamps()},d)})}var r=i(2),s=i(45),a=i(7),o=i(197),d=6e4;e.exports=n},197:function(e,t,i){function n(e){return new s(r.compact({months:(e.getAttribute("data-dt-months")||"").split("|"),phrases:{AM:e.getAttribute("data-dt-am"),PM:e.getAttribute("data-dt-pm"),now:e.getAttribute("data-dt-now"),s:e.getAttribute("data-dt-s"),m:e.getAttribute("data-dt-m"),h:e.getAttribute("data-dt-h"),second:e.getAttribute("data-dt-second"),seconds:e.getAttribute("data-dt-seconds"),minute:e.getAttribute("data-dt-minute"),minutes:e.getAttribute("data-dt-minutes"),hour:e.getAttribute("data-dt-hour"),hours:e.getAttribute("data-dt-hours")},formats:{full:e.getAttribute("data-dt-full"),abbr:e.getAttribute("data-dt-abbr"),shortdate:e.getAttribute("data-dt-short"),longdate:e.getAttribute("data-dt-long")}}))}var r=i(11),s=i(198);e.exports=n},198:function(e,t){function i(e){return e<10?"0"+e:e}function n(e){function t(e,t){return r&&r[e]&&(e=r[e]),e.replace(/%\{([\w_]+)\}/g,function(e,i){return void 0!==t[i]?t[i]:e})}var r=e&&e.phrases,s=e&&e.months||o,a=e&&e.formats||d;this.timeAgo=function(e){var i,r=n.parseDate(e),o=+new Date,d=o-r;return r?isNaN(d)||d<2*l?t("now"):d<u?(i=Math.floor(d/l),t(a.abbr,{number:i,symbol:t(f,{abbr:t("s"),expanded:t(i>1?"seconds":"second")})})):d<c?(i=Math.floor(d/u),t(a.abbr,{number:i,symbol:t(f,{abbr:t("m"),expanded:t(i>1?"minutes":"minute")})})):d<h?(i=Math.floor(d/c),t(a.abbr,{number:i,symbol:t(f,{abbr:t("h"),expanded:t(i>1?"hours":"hour")})})):d<365*h?t(a.shortdate,{day:r.getDate(),month:t(s[r.getMonth()])}):t(a.longdate,{day:r.getDate(),month:t(s[r.getMonth()]),year:r.getFullYear().toString().slice(2)}):""},this.localTimeStamp=function(e){var r=n.parseDate(e),o=r&&r.getHours();return r?t(a.full,{day:r.getDate(),month:t(s[r.getMonth()]),year:r.getFullYear(),hours24:i(o),hours12:o<13?o?o:"12":o-12,minutes:i(r.getMinutes()),seconds:i(r.getSeconds()),amPm:t(o<12?"AM":"PM")}):""}}var r=/(\d{4})-?(\d{2})-?(\d{2})T(\d{2}):?(\d{2}):?(\d{2})(Z|[\+\-]\d{2}:?\d{2})/,s=/[a-z]{3,4} ([a-z]{3}) (\d{1,2}) (\d{1,2}):(\d{2}):(\d{2}) ([\+\-]\d{2}:?\d{2}) (\d{4})/i,a=/^\d+$/,o=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],d={abbr:"%{number}%{symbol}",shortdate:"%{day} %{month}",longdate:"%{day} %{month} %{year}",full:"%{hours12}:%{minutes} %{amPm} - %{day} %{month} %{year}"},l=1e3,u=60*l,c=60*u,h=24*c,f='<abbr title="%{expanded}">%{abbr}</abbr>';n.parseDate=function(e){var t,i,n=e||"",d=n.toString();return!!(t=function(){var e;return a.test(d)?parseInt(d,10):(e=d.match(s))?Date.UTC(e[7],o.indexOf(e[1]),e[2],e[3],e[4],e[5]):(e=d.match(r))?Date.UTC(e[1],e[2]-1,e[3],e[4],e[5],e[6]):void 0}())&&(i=new Date(t),!isNaN(i.getTime())&&i)},e.exports=n},199:function(e,t,i){function n(e){e.selectors({followButton:".follow-button"}),e.define("handleFollowButtonClick",function(e,t){var i=s.intentForFollowURL(t.href),n=a.asBoolean(t.getAttribute("data-age-gate"));n||r.open(i,this.sandbox.sandboxEl,e)}),e.after("render",function(){this.on("click","followButton",function(e,t){this.handleFollowButtonClick(e,t)})})}var r=i(22),s=i(23),a=i(25);e.exports=n},200:function(e,t,i){function n(e){e.selectors({mediaCard:".MediaCard",mediaCardNsfwDismissalTarget:".MediaCard-dismissNsfw"}),e.define("dismissNsfwWarning",function(e,t){var i=r.closest(this.selectors.mediaCard,t,this.el);i&&s.remove(i,"is-nsfw")}),e.after("render",function(){this.on("click","mediaCardNsfwDismissalTarget",this.dismissNsfwWarning)})}var r=i(21),s=i(20);e.exports=n},201:function(e,t,i){function n(e){function t(e){var t=e.createElement("div");return t.className="MediaCard-mediaAsset",t}function i(e){return h.url(e,p)}e.params({lang:{required:!0,transform:u.matchLanguage,fallback:"en"}}),e.selectors({mediaAsset:".MediaCard-mediaAsset",cardInterstitial:".js-cardPlayerInterstitial",wvpInterstitial:".js-playableMediaInterstitial",tweetIdInfo:".js-tweetIdInfo"}),e.define("replaceInterstitialWithMedia",function(e,t){return m.all([this.restoreLastMediaInterstitial(),c.write(function(){r=e,s=e.parentNode,e.parentNode.replaceChild(t,e)})])}),e.define("restoreLastMediaInterstitial",function(){var e;return r&&s?(e=s.firstElementChild,f.remove(e),c.write(function(){s.replaceChild(r,e)})):m.resolve()}),e.define("playWebVideoPlayerMediaAsset",function(e,t){var i=l.closest(this.selectors.tweetIdInfo,t,this.el),n=i.getAttribute("data-tweet-id");if(!n)return m.reject(new Error("No Tweet ID for player"));e.preventDefault();var r=this.selectOne(i,this.selectors.wvpInterstitial);return this.getConsent(i,r).then(function(){this.displayWebVideoPlayerMediaAsset(i,n)}.bind(this))}),e.define("displayWebVideoPlayerMediaAsset",function(e,i){var n=this.selectOne(e,this.selectors.mediaAsset),r=(this.scribeNamespace()||{}).page,s=(this.scribeData()||{}).widget_origin,a=this.params.lang,o=t(this.sandbox),d=this.sandbox.createElement("div"),l={widgetOrigin:s};return d.className="wvp-player-container",o.appendChild(d),this.replaceInterstitialWithMedia(n,o).then(function(){return f.insertForTweet(o,i,r,a,l)}).then(function(e){e&&e.on("ready",e.play)})}),e.define("displayIframeMediaAsset",function(e,n){var r,s,d=l.closest(this.selectors.mediaAsset,n,this.el),u=l.closest(this.selectors.cardInterstitial,n,this.el),h=u.getAttribute("data-player-src"),f=u.getAttribute("data-player-width"),p=u.getAttribute("data-player-height"),v=u.getAttribute("data-player-title");return h?(e.preventDefault(),h=i(h),r=t(this.sandbox),s=o({src:h,allowfullscreen:"true",width:f,height:p,title:v||""}),s.className="FilledIframe",r.appendChild(s),this.replaceInterstitialWithMedia(d,r).then(function(){s.focus(),c.write(function(){a.add(r,g),a.add(s,g)})})):m.reject(new Error("No Player frame source"))}),e.after("render",function(){this.on("click","cardInterstitial",this.displayIframeMediaAsset),this.on("click","wvpInterstitial",this.playWebVideoPlayerMediaAsset)})}var r,s,a=i(20),o=i(52),d=i(84),l=i(21),u=i(90),c=i(45),h=i(24),f=i(144),m=i(2),p={autoplay:"1"},g="js-forceRedraw";e.exports=d.couple(i(202),n)},202:function(e,t,i){function n(e){e.selectors({cookieConsentButton:".js-cookieConsentButton",interstitial:".js-interstitial"}),e.define("getConsent",function(e,t){var i=this.selectOne(e,this.selectors.interstitial);return i?c.shouldObtainCookieConsent().catch(function(){return u.resolve(!0)}).then(function(e){if(!e)return u.resolve();var n=new a,r=function(){this.handleCookieConsentClick(t,i),n.resolve()}.bind(this);return d.write(function(){this.scribe({component:"cookie_consent",action:"show"}),this.showConsentInterstitial(i,t),this.attachConsentListener(i,r)},this),n.promise}.bind(this)):u.resolve()}),e.define("attachConsentListener",function(e,t){var i=this.selectOne(e,this.selectors.cookieConsentButton);i&&i.addEventListener("click",t,{once:!0})}),e.define("showConsentInterstitial",function(e,t){r.remove(e,"u-hidden"),t&&r.add(t,"is-backgrounded")}),e.define("hideConsentInterstitial",function(e,t){r.add(e,"u-hidden"),t&&r.remove(t,"is-backgrounded")}),e.define("setCookieConsentCookie",function(){return s.request(o.cookieConsent()).catch(function(e){throw new Error("CORS request failed: "+e)})}),e.define("handleCookieConsentClick",function(e,t){return l.allSettled([d.write(this.hideConsentInterstitial.bind(this,t,e)),this.setCookieConsentCookie()])})}var r=i(20),s=i(203),a=i(1),o=i(132),d=i(45),l=i(42),u=i(2),c=i(204);e.exports=n},203:function(e,t,i){function n(e,t){t=h.aug({},m,t||{});var i=c.url(e,t.params),n=f.fetch;return n?n(i,t).then(function(e){if(t.isSuccess(e.status))return e.text().then(function(t){var i=e.headers.get("content-type");return t&&h.contains(i,p.JSON)?u.parse(t):t});throw new Error("Request failed with status: "+e.status)}):r(i,t)}function r(e,t){function i(){var e=r?u.contentType:u.getResponseHeader("content-type"),i=h.contains(e,p.JSON)?a(u.responseText):u.responseText;r||t.isSuccess(u.status)?n.resolve(i):n.reject(i)}var n=new o,r=l.ie9(),s=r?f.XDomainRequest:f.XMLHttpRequest;if(!s)return d.reject(g.NO_XHR);var u=new s;return u.onreadystatechange=function(){4===u.readyState&&i()},u.onload=i,u.onerror=function(){n.reject(g.REQUEST_FAILED)},u.onabort=function(){n.reject(g.REQUEST_ABORTED)},u.ontimeout=function(){n.reject(g.REQUEST_TIMED_OUT)},u.open(t.method,e),"include"===t.credentials&&(u.withCredentials=!0),u.setRequestHeader&&h.forIn(t.headers,function(e){u.setRequestHeader(e,t.headers[e])}),u.send(),n.promise}function s(e){return e>=200&&e<300}function a(e){return e?u.parse(e):e}var o=i(1),d=i(2),l=i(8),u=i(39),c=i(24),h=i(11),f=i(7),m={method:"GET",params:{},headers:{},credentials:"include",isSuccess:s},p={JSON:"application/json",TEXT:"text/plain"},g={NO_XHR:new Error("No suitable XHR implementation available."),REQUEST_FAILED:new Error("XHR request failed."),REQUEST_ABORTED:new Error("XHR request aborted."),REQUEST_TIMED_OUT:new Error("XHR request timed out.")};e.exports={request:n,mimeTypes:p,errors:g}},204:function(e,t,i){function n(e){return r().then(function(t){return t[e]})}var r=i(205);e.exports={shouldObtainCookieConsent:n.bind(null,"should_obtain_cookie_consent")}},205:function(e,t,i){var n=i(203),r=i(132);e.exports=n.request.bind(null,r.settings())},206:function(e,t,i){function n(e){e.override("resizeSandboxDueToCardChange",function(){return this.isFullyExpanded?this.sandbox.matchHeightToContent():r.resolve()})}var r=i(2),s=i(84);e.exports=s.couple(i(207),n)},207:function(e,t,i){function n(e){for(var t="",i=Math.floor(e/h),n=i;n>0;n--)t+="w"+n*h+" ";return t}function r(e){e.selectors({prerenderedCard:".PrerenderedCard",periscopeVideo:".PlayerCard--video",rootCardEl:".TwitterCard .CardContent > *:first-child"}),e.define("scribeCardShown",function(e){var t=2;this.scribe({component:"card",action:"shown"},{items:[{card_name:e.getAttribute("data-card-name")}]},t)}),e.define("resizeSandboxDueToCardChange",function(){return this.sandbox.matchHeightToContent()}),e.define("markCardElAsLoaded",function(e){function t(){n&&i.resizeSandboxDueToCardChange()}var i=this,n=!1;return this.select(e,"img").forEach(function(e){e.addEventListener("load",t,!1)}),this.scribeCardShown(e),a.write(function(){s.add(e,p)}).then(function(){n=!0,i.resizeSandboxDueToCardChange()})}),e.define("updateCardWidthConstraints",function(){var e=this;return l.all(this.select("prerenderedCard").map(function(t){var i=e.selectOne(t,"rootCardEl");return a.defer(function(){var e,r=0;d.ios()?(s.remove(t,g),r=o(t.parentElement).width,t.style.maxWidth=r+"px"):r=o(t.parentElement).width,e=n(r),i.setAttribute(f,e),s.add(t,g)}).then(function(){return e.resizeSandboxDueToCardChange()})}))}),e.define("setCardTheme",function(e){var t=this.selectOne(e,"rootCardEl");this.params.theme&&t.setAttribute(m,this.params.theme)}),e.after("prepForInsertion",function(e){var t=this,i=this.select(e,"prerenderedCard").reduce(function(e,t){var i=t.getAttribute("data-css");return i&&(e[i]=e[i]||[],e[i].push(t)),e},{});u.forIn(i,function(e,i){t.sandbox.prependStyleSheet(e).then(function(){i.forEach(function(e){t.setCardTheme(e),t.markCardElAsLoaded(e)})})})}),e.after("show",function(){var e;return d.anyIE()&&(e=this.selectOne("periscopeVideo"),e&&(e.style.display="none")),this.updateCardWidthConstraints()}),e.after("resize",function(){return this.updateCardWidthConstraints()})}var s=i(20),a=i(45),o=i(69),d=i(8),l=i(2),u=i(11),c=i(84),h=50,f="data-card-breakpoints",m="data-theme",p="is-loaded",g="is-constrainedByMaxWidth";e.exports=c.couple(i(98),r)},208:function(e,t,i){function n(e,t,i){var n={};return e=e||{},i&&e.max?n.minPosition=e.max:!i&&e.min?n.maxPosition=e.min:i?n.sinceId=t:n.maxId=t,n}function r(e){e.params({dataSource:{required:!0},isPreviewTimeline:{required:!1,fallback:!1}}),e.selectors({timelineTweet:".timeline-Tweet",viewport:".timeline-Viewport",tweetList:".timeline-TweetList",tweetsInStream:".timeline-Tweet",newTweetsNotifier:".new-tweets-bar",loadMore:".timeline-LoadMore",loadMoreButton:".timeline-LoadMore-prompt"}),e.define("gcTweetsSync",function(){var e="custom"===this.el.getAttribute("data-timeline-type"),t=this.selectOne("tweetList");return e?a.resolve():void m(t,b)}),e.define("scribeImpressionsForDynamicTweetSet",function(e,t){var i=c.toRealArray(e.querySelectorAll(this.selectors.timelineTweet)),n=f(i),r=Object.keys(n),s=t?"newer":"older",a=t?v.CLIENT_SIDE_APP:v.CLIENT_SIDE_USER;this.scribe({component:"timeline",element:s,action:"results"},{item_ids:r,item_details:n,event_initiator:a})}),e.define("fetchTweets",function(e,t){function i(e){return"404"===e?s.pollInterval=null:"503"===e&&(s.pollInterval*=1.5),a.reject(e)}function r(i){var n,r,a=s.sandbox.createFragment(),o=s.sandbox.createElement("ol"),d=t?w.NEWER:w.OLDER;return p(s,i,d),o.innerHTML=i.html,n=o.firstElementChild,n&&(r=s.selectOne(n,"timelineTweet")),r&&"LI"===n.tagName?(r.getAttribute("data-tweet-id")===e&&o.removeChild(n),s.scribeImpressionsForDynamicTweetSet(o,t),s.prepForInsertion(o),c.toRealArray(o.children).forEach(function(e){a.appendChild(e)}),a):a}var s=this,o=n(this.cursors,e,t);return this.params.dataSource.poll(o,t).then(r,i)}),e.define("loadOldTweets",function(){var e=this,t=this.selectLast("tweetsInStream"),i=t&&t.getAttribute("data-tweet-id");return i?this.fetchTweets(i,!1).then(function(t){var i=e.selectOne("tweetList"),n=e.selectOne("loadMore");return d.write(function(){t.childNodes.length>0?i.appendChild(t):o.add(n,x)})}):a.reject(new Error("unable to load more"))}),e.after("loadOldTweets",function(){return g.trigger("timelineUpdated",{target:this.sandbox.sandboxEl,region:"older"}),this.resize()}),e.define("loadNewTweets",function(){var e=this,t=this.selectOne("tweetsInStream"),i=t&&t.getAttribute("data-tweet-id");return i?this.fetchTweets(i,!0).then(function(t){var i,n,r=e.selectOne("viewport"),s=e.selectOne("tweetList");if(0!==t.childNodes.length)return d.read(function(){i=r.scrollTop,n=r.scrollHeight}),d.defer(function(){var a;s.insertBefore(t,s.firstElementChild),a=i+r.scrollHeight-n,i>40||e.mouseIsOverWidget?(r.scrollTop=a,e.showNewTweetsNotifier()):(r.scrollTop=0,e.gcTweetsSync())})}):a.reject(new Error("unable to load new tweets"))}),e.after("loadNewTweets",function(){return g.trigger("timelineUpdated",{target:this.sandbox.sandboxEl,region:"newer"}),this.resize()}),e.define("showNewTweetsNotifier",function(){var e=this,t=this.selectOne("newTweetsNotifier"),i=t&&t.firstElementChild;return l.setTimeout(function(){e.hideNewTweetsNotifier()},T),d.write(function(){t.removeChild(i),t.appendChild(i),o.add(t,"is-displayed")}),d.defer(function(){o.add(t,"is-opaque")})}),e.define("hideNewTweetsNotifier",function(e){var t=new s,i=this.selectOne("newTweetsNotifier");return e=e||{},!e.force&&this.mouseIsOverNewTweetsNotifier?(t.resolve(),t.promise):(d.write(function(){o.remove(i,"is-opaque")}),l.setTimeout(function(){d.write(function(){o.remove(i,"is-displayed")}).then(t.resolve,t.reject)},C),t.promise)}),e.define("scrollToTopOfViewport",function(){var e=this.selectOne("viewport");return d.write(function(){e.scrollTop=0,e.focus()})}),e.define("schedulePolling",function(){function e(){i.isPollInProgress=!1}function t(){var r=n||i.pollInterval;r&&l.setTimeout(function(){i.isPollInProgress||(i.isPollInProgress=!0,i.loadNewTweets(i.sandbox).then(e,e)),t()},r)}var i=this,n=u.get("timeline.pollInterval");t()}),e.after("initialize",function(){this.isPollInProgress=!1,this.mouseIsOverWidget=!1,this.mouseIsOverNewTweetsNotifier=!1,this.cursors={},this.pollInterval=1e4}),e.after("render",function(){this.isStaticTimeline||this.params.isPreviewTimeline||(this.select("timelineTweet").length>0&&this.schedulePolling(),this.on("mouseover",function(){this.mouseIsOverWidget=!0}),this.on("mouseout",function(){this.mouseIsOverWidget=!1}),this.on("mouseover","newTweetsNotifier",function(){this.mouseIsOverNewTweetsNotifier=!0}),this.on("mouseout","newTweetsNotifier",function(){this.mouseIsOverNewTweetsNotifier=!1}),this.on("click","newTweetsNotifier",function(){this.scrollToTopOfViewport(),this.hideNewTweetsNotifier({force:!0})}),this.on("click","loadMoreButton",function(){this.loadOldTweets()}))})}var s=i(1),a=i(2),o=i(20),d=i(45),l=i(7),u=i(16),c=i(11),h=i(84),f=i(101),m=i(209),p=i(192),g=i(29),v=i(210),w=i(193),b=50,T=5e3,C=500,x="is-atEndOfTimeline";e.exports=h.couple(i(98),r)},209:function(e,t){function i(e,t){var i;if(e)for(;i=e.children[t];)e.removeChild(i)}e.exports=i},210:function(e,t){e.exports={CLIENT_SIDE_USER:0,CLIENT_SIDE_APP:2}},211:function(e,t,i){function n(e){e.selectors({shareMenuOpener:".js-showShareMenu",shareMenu:".timeline-ShareMenu",shareMenuTimelineHeader:".timeline-Header",shareMenuTimelineFooter:".timeline-Footer"}),e.define("getHeaderHeight",function(){var e=this.selectOne("shareMenuTimelineHeader");return e?e.getBoundingClientRect().height:0}),e.define("getFooterHeight",function(){var e=this.selectOne("shareMenuTimelineFooter");return e?e.getBoundingClientRect().height:0}),e.define("getShareMenuPositionClass",function(e){var t=e.getBoundingClientRect(),i=t.top-this.getHeaderHeight(),n=this.sandbox.height-t.bottom-this.getFooterHeight();return n<i?d:l}),e.after("render",function(){this.on("click","shareMenuOpener",function(e,t){function i(){r.remove(l,n),d.el.removeEventListener("click",i,!1),a.removeEventListener("click",i,!1)}var n,d=this,l=s.closest(this.selectors.shareMenu,e.target,this.el);e.preventDefault(),l&&(n=this.getShareMenuPositionClass(t),r.add(l,n),o.async(function(){d.el.addEventListener("click",i,!1),a.addEventListener("click",i,!1)}))})})}var r=i(20),s=i(21),a=i(9),o=i(11),d="is-openedAbove",l="is-openedBelow";e.exports=n},212:function(e,t,i){function n(e){return d+"{border-color:"+e+";}"}function r(e){e.params({borderColor:{fallback:[o(s.val,s,"widgets:border-color")],validate:a}}),e.after("render",function(){var e=this.params.borderColor;e&&this.sandbox.appendCss(n(e))})}var s=i(37),a=i(213),o=i(13),d=".customisable-border";e.exports=r},213:function(e,t){function i(e){return n.test(e)}var n=/^#(?:[a-f\d]{3}){1,2}$/i;e.exports=i},214:function(e,t,i){function n(e){return e.join(",")}function r(e){var t=n(u),i=n(c);return[t+"{color:"+e+";}",i+"{color:"+o.lighten(e,.2)+";}"].join("")}function s(e){e.params({linkColor:{fallback:l(a.val,a,"widgets:link-color"),validate:d}}),e.after("render",function(){var e=this.params.linkColor;e&&this.sandbox.appendCss(r(e))})}var a=i(37),o=i(215),d=i(213),l=i(13),u=[".customisable",".customisable:link",".customisable:visited"],c=[".customisable:hover",".customisable:focus",".customisable:active",".customisable-highlight:hover",".customisable-highlight:focus","a:hover .customisable-highlight","a:focus .customisable-highlight"];e.exports=s},215:function(e,t,i){function n(e){return d.parseInt(e,16)}function r(e){return l.isType("string",e)?(e=e.replace(u,""),e+=3===e.length?e:""):null}function s(e,t){var i,s,a,o;if(e=r(e),t=t||0,e)return i=t<0?0:255,t=t<0?-Math.max(t,-1):Math.min(t,1),s=n(e.substring(0,2)),a=n(e.substring(2,4)),o=n(e.substring(4,6)),"#"+(16777216+65536*(Math.round((i-s)*t)+s)+256*(Math.round((i-a)*t)+a)+(Math.round((i-o)*t)+o)).toString(16).slice(1)}function a(e,t){return s(e,-t)}function o(e,t){return s(e,t)}var d=i(7),l=i(11),u=/^#/;e.exports={darken:a,lighten:o}},216:function(e,t,i){function n(e){e.after("render",function(){var e,t=this.sandbox.sandboxEl,i=t.tagName;if(s(t,"td "+i))return e=r.closest("td",t),this.sandbox.styleSelf({maxWidth:e.clientWidth+"px"})})}var r=i(21),s=i(79);e.exports=n}});