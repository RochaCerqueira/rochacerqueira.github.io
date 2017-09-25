window.Modernizr=function(a,b,c){function d(a,b){var c=a.charAt(0).toUpperCase()+a.substr(1),d=(a+" "+v.join(c+" ")+c).split(" ");return e(d,b)}function e(a,b){for(var d in a)if(s[a[d]]!==c)return"pfx"==b?a[d]:!0;return!1}function f(a,b){return!!~(""+a).indexOf(b)}function g(a,b){return typeof a===b}function h(a,b){return i(u.join(a+";")+(b||""))}function i(a){s.cssText=a}var j,k,l,m="2.0.6",n={},o=!0,p=b.documentElement,q=(b.head||b.getElementsByTagName("head")[0],"modernizr"),r=b.createElement(q),s=r.style,t=":)",u=(Object.prototype.toString," -webkit- -moz- -o- -ms- -khtml- ".split(" ")),v="Webkit Moz O ms Khtml".split(" "),w={},x=[],y=function(a,c,d,e){var f,g,h,i=b.createElement("div");if(parseInt(d,10))for(;d--;)h=b.createElement("div"),h.id=e?e[d]:q+(d+1),i.appendChild(h);return f=["&shy;","<style>",a,"</style>"].join(""),i.id=q,i.innerHTML+=f,p.appendChild(i),g=c(i,a),i.parentNode.removeChild(i),!!g},z=function(){function a(a,e){e=e||b.createElement(d[a]||"div"),a="on"+a;var f=a in e;return f||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(a,""),f=g(e[a],"function"),g(e[a],c)||(e[a]=c),e.removeAttribute(a))),e=null,f}var d={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return a}(),A={}.hasOwnProperty;l=g(A,c)||g(A.call,c)?function(a,b){return b in a&&g(a.constructor.prototype[b],c)}:function(a,b){return A.call(a,b)},function(a,c){var d=a.join(""),e=c.length;y(d,function(a,c){for(var d=b.styleSheets[b.styleSheets.length-1],f=d.cssRules&&d.cssRules[0]?d.cssRules[0].cssText:d.cssText||"",g=a.childNodes,h={};e--;)h[g[e].id]=g[e];n.csstransforms3d=9===h.csstransforms3d.offsetLeft,n.generatedcontent=h.generatedcontent.offsetHeight>=1,n.fontface=/src/i.test(f)&&0===f.indexOf(c.split(" ")[0])},e,c)}(['@font-face {font-family:"font";src:url("https://")}',["@media (",u.join("transform-3d),("),q,")","{#csstransforms3d{left:9px;position:absolute}}"].join(""),['#generatedcontent:after{content:"',t,'";visibility:hidden}'].join("")],["fontface","csstransforms3d","generatedcontent"]),w.flexbox=function(){function a(a,b,c,d){a.style.cssText=u.join(b+":"+c+";")+(d||"")}function c(a,b,c,d){b+=":",a.style.cssText=(b+u.join(c+";"+b)).slice(0,-b.length)+(d||"")}var d=b.createElement("div"),e=b.createElement("div");c(d,"display","box","width:42px;padding:0;"),a(e,"box-flex","1","width:10px;"),d.appendChild(e),p.appendChild(d);var f=42===e.offsetWidth;return d.removeChild(e),p.removeChild(d),f},w.rgba=function(){return i("background-color:rgba(150,255,150,.5)"),f(s.backgroundColor,"rgba")},w.hsla=function(){return i("background-color:hsla(120,40%,100%,.5)"),f(s.backgroundColor,"rgba")||f(s.backgroundColor,"hsla")},w.multiplebgs=function(){return i("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(s.background)},w.backgroundsize=function(){return d("backgroundSize")},w.borderimage=function(){return d("borderImage")},w.borderradius=function(){return d("borderRadius")},w.boxshadow=function(){return d("boxShadow")},w.textshadow=function(){return""===b.createElement("div").style.textShadow},w.opacity=function(){return h("opacity:.55"),/^0.55$/.test(s.opacity)},w.cssanimations=function(){return d("animationName")},w.csscolumns=function(){return d("columnCount")},w.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";return i((a+u.join(b+a)+u.join(c+a)).slice(0,-a.length)),f(s.backgroundImage,"gradient")},w.cssreflections=function(){return d("boxReflect")},w.csstransforms=function(){return!!e(["transformProperty","WebkitTransform","MozTransform","OTransform","msTransform"])},w.csstransforms3d=function(){var a=!!e(["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"]);return a&&"webkitPerspective"in p.style&&(a=n.csstransforms3d),a},w.csstransitions=function(){return d("transitionProperty")},w.fontface=function(){return n.fontface},w.generatedcontent=function(){return n.generatedcontent};for(var B in w)l(w,B)&&(k=B.toLowerCase(),n[k]=w[B](),x.push((n[k]?"":"no-")+k));return i(""),r=j=null,a.attachEvent&&function(){var a=b.createElement("div");return a.innerHTML="<elem></elem>",1!==a.childNodes.length}()&&function(a,b){function d(a){for(var b=-1;++b<i;)a.createElement(h[b])}a.iepp=a.iepp||{};var e,f=a.iepp,g=f.html5elements||"abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",h=g.split("|"),i=h.length,j=new RegExp("(^|\\s)("+g+")","gi"),k=new RegExp("<(/*)("+g+")","gi"),l=/^\s*[\{\}]\s*$/,m=new RegExp("(^|[^\\n]*?\\s)("+g+")([^\\n]*)({[\\n\\w\\W]*?})","gi"),n=b.createDocumentFragment(),o=b.documentElement,p=o.firstChild,q=b.createElement("body"),r=b.createElement("style"),s=/print|all/;f.getCSS=function(a,b){if(a+""===c)return"";for(var d,e=-1,g=a.length,h=[];++e<g;)d=a[e],d.disabled||(b=d.media||b,s.test(b)&&h.push(f.getCSS(d.imports,b),d.cssText),b="all");return h.join("")},f.parseCSS=function(a){for(var b,c=[];null!=(b=m.exec(a));)c.push(((l.exec(b[1])?"\n":b[1])+b[2]+b[3]).replace(j,"$1.iepp_$2")+b[4]);return c.join("\n")},f.writeHTML=function(){var a=-1;for(e=e||b.body;++a<i;)for(var c=b.getElementsByTagName(h[a]),d=c.length,f=-1;++f<d;)c[f].className.indexOf("iepp_")<0&&(c[f].className+=" iepp_"+h[a]);n.appendChild(e),o.appendChild(q),q.className=e.className,q.id=e.id,q.innerHTML=e.innerHTML.replace(k,"<$1font")},f._beforePrint=function(){r.styleSheet.cssText=f.parseCSS(f.getCSS(b.styleSheets,"all")),f.writeHTML()},f.restoreHTML=function(){q.innerHTML="",o.removeChild(q),o.appendChild(e)},f._afterPrint=function(){f.restoreHTML(),r.styleSheet.cssText=""},d(b),d(n),f.disablePP||(p.insertBefore(r,p.firstChild),r.media="print",r.className="iepp-printshim",a.attachEvent("onbeforeprint",f._beforePrint),a.attachEvent("onafterprint",f._afterPrint))}(a,b),n._version=m,n._prefixes=u,n._domPrefixes=v,n.hasEvent=z,n.testProp=function(a){return e([a])},n.testAllProps=d,n.testStyles=y,p.className=p.className.replace(/\bno-js\b/,"")+(o?" js "+x.join(" "):""),n}(this,this.document),function(a,b,c){function d(a){return!a||"loaded"==a||"complete"==a}function e(){for(var a=1,b=-1;r.length-++b&&(!r[b].s||(a=r[b].r)););a&&h()}function f(a){var c,f=b.createElement("script");f.src=a.s,f.onreadystatechange=f.onload=function(){!c&&d(f.readyState)&&(c=1,e(),f.onload=f.onreadystatechange=null)},o(function(){c||(c=1,e())},m.errorTimeout),a.e?f.onload():p.parentNode.insertBefore(f,p)}function g(a){var c,d=b.createElement("link");if(d.href=a.s,d.rel="stylesheet",d.type="text/css",a.e||!x&&!t)d.onload=function(){c||(c=1,o(function(){e()},0))},a.e&&d.onload();else{var f=function(a){o(function(){if(!c)try{a.sheet.cssRules.length?(c=1,e()):f(a)}catch(b){1e3==b.code||"security"==b.message||"denied"==b.message?(c=1,o(function(){e()},0)):f(a)}},0)};f(d)}o(function(){c||(c=1,e())},m.errorTimeout),!a.e&&p.parentNode.insertBefore(d,p)}function h(){var a=r.shift();s=1,a?a.t?o(function(){"c"==a.t?g(a):f(a)},0):(a(),e()):s=0}function i(a,c,f,g,i,j){function k(){!n&&d(l.readyState)&&(q.r=n=1,!s&&e(),l.onload=l.onreadystatechange=null,o(function(){v.removeChild(l)},0))}var l=b.createElement(a),n=0,q={t:f,s:c,e:j};l.src=l.data=c,!u&&(l.style.display="none"),l.width=l.height="0","object"!=a&&(l.type=f),l.onload=l.onreadystatechange=k,"img"==a?l.onerror=k:"script"==a&&(l.onerror=function(){q.e=q.r=1,h()}),r.splice(g,0,q),v.insertBefore(l,u?null:p),o(function(){n||(v.removeChild(l),q.r=q.e=n=1,e())},m.errorTimeout)}function j(a,b,c){var d="c"==b?A:z;return s=0,b=b||"j",D(a)?i(d,a,b,this.i++,n,c):(r.splice(this.i++,0,a),1==r.length&&h()),this}function k(){var a=m;return a.loader={load:j,i:0},a}var l,m,n=b.documentElement,o=a.setTimeout,p=b.getElementsByTagName("script")[0],q={}.toString,r=[],s=0,t="MozAppearance"in n.style,u=t&&!!b.createRange().compareNode,v=u?n:p.parentNode,w=a.opera&&"[object Opera]"==q.call(a.opera),x="webkitAppearance"in n.style,y=x&&"async"in b.createElement("script"),z=t?"object":w||y?"img":"script",A=x?"img":z,B=Array.isArray||function(a){return"[object Array]"==q.call(a)},C=function(a){return Object(a)===a},D=function(a){return"string"==typeof a},E=function(a){return"[object Function]"==q.call(a)},F=[],G={};m=function(a){function b(a){var b,c,d=a.split("!"),e=F.length,f=d.pop(),g=d.length,h={url:f,origUrl:f,prefixes:d};for(c=0;g>c;c++)b=G[d[c]],b&&(h=b(h));for(c=0;e>c;c++)h=F[c](h);return h}function d(a,d,e,f,g){var h=b(a),i=h.autoCallback;if(!h.bypass){if(d&&(d=E(d)?d:d[a]||d[f]||d[a.split("/").pop().split("?")[0]]),h.instead)return h.instead(a,d,e,f,g);e.load(h.url,h.forceCSS||!h.forceJS&&/css$/.test(h.url)?"c":c,h.noexec),(E(d)||E(i))&&e.load(function(){k(),d&&d(h.origUrl,g,f),i&&i(h.origUrl,g,f)})}}function e(a,b){function c(a){if(D(a))d(a,i,b,0,f);else if(C(a))for(e in a)a.hasOwnProperty(e)&&d(a[e],i,b,e,f)}var e,f=!!a.test,g=f?a.yep:a.nope,h=a.load||a.both,i=a.callback;c(g),c(h),a.complete&&b.load(a.complete)}var f,g,h=this.yepnope.loader;if(D(a))d(a,0,h,0);else if(B(a))for(f=0;f<a.length;f++)g=a[f],D(g)?d(g,0,h,0):B(g)?m(g):C(g)&&e(g,h);else C(a)&&e(a,h)},m.addPrefix=function(a,b){G[a]=b},m.addFilter=function(a){F.push(a)},m.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",l=function(){b.removeEventListener("DOMContentLoaded",l,0),b.readyState="complete"},0)),a.yepnope=k()}(this,this.document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))},function(a,b,c){var d=function(d,e){this.elem=d,this.$elem=a(d),this.options=e,this.metadata=this.$elem.data("plugin-options"),this.$nav=this.$elem.find("a"),this.$win=a(b),this.sections={},this.didScroll=!1,this.$doc=a(c),this.docHeight=this.$doc.height()};d.prototype={defaults:{currentClass:"current",changeHash:!1,easing:"swing",filter:"",scrollSpeed:750,scrollOffset:0,scrollThreshold:.5,begin:!1,end:!1,scrollChange:!1},init:function(){var b=this;return b.config=a.extend({},b.defaults,b.options,b.metadata),""!==b.config.filter&&(b.$nav=b.$nav.filter(b.config.filter)),b.$nav.on("click.onePageNav",a.proxy(b.handleClick,b)),b.getPositions(),b.bindInterval(),b.$win.on("resize.onePageNav",a.proxy(b.getPositions,b)),this},adjustNav:function(a,b){a.$elem.find("."+a.config.currentClass).removeClass(a.config.currentClass),b.addClass(a.config.currentClass)},bindInterval:function(){var a,b=this;b.$win.on("scroll.onePageNav",function(){b.didScroll=!0}),b.t=setInterval(function(){a=b.$doc.height(),b.didScroll&&(b.didScroll=!1,b.scrollChange()),a!==b.docHeight&&(b.docHeight=a,b.getPositions())},250)},getHash:function(a){return a.attr("href").split("#")[1]},getPositions:function(){var b,c,d,e=this;e.$nav.each(function(){b=e.getHash(a(this)),d=a("#"+b),d.length&&(c=d.offset().top,e.sections[b]=Math.round(c)-e.config.scrollOffset)})},getSection:function(a){var b=null,c=Math.round(this.$win.height()*this.config.scrollThreshold);for(var d in this.sections)this.sections[d]-c<a&&(b=d);return b},handleClick:function(c){var d=this,e=a(c.currentTarget),f=e.parent(),g="#"+d.getHash(e);f.hasClass(d.config.currentClass)||(d.config.begin&&d.config.begin(),d.adjustNav(d,f),d.unbindInterval(),a.scrollTo(g,d.config.scrollSpeed,{axis:"y",easing:d.config.easing,offset:{top:-d.config.scrollOffset},onAfter:function(){d.config.changeHash&&(b.location.hash=g),d.bindInterval(),d.config.end&&d.config.end()}})),c.preventDefault()},scrollChange:function(){var a,b=this.$win.scrollTop(),c=this.getSection(b);null!==c&&(a=this.$elem.find('a[href$="#'+c+'"]').parent(),a.hasClass(this.config.currentClass)||(this.adjustNav(this,a),this.config.scrollChange&&this.config.scrollChange(a)))},unbindInterval:function(){clearInterval(this.t),this.$win.unbind("scroll.onePageNav")}},d.defaults=d.prototype.defaults,a.fn.onePageNav=function(a){return this.each(function(){new d(this,a).init()})}}(jQuery,window,document),jQuery(document).ready(function(a){function b(){var b=a(this);b.hasClass("close-current-post")&&g.addClass("closed-project"),a(".blocked-project-overlay").removeClass("overlay-active"),g.find("#portfolio-item-meta, #single-item").stop().animate({opacity:0},200),g.stop().animate({height:0},600,"easeOutQuart",function(){a(this).css("overflow","hidden"),b.hasClass("close-current-post")&&a(this).empty()})}function c(){var b=0,c=a("#single-item img:first-child").length?a("#single-item img:first-child").outerHeight():a("#single-item iframe").outerHeight(),d=a("#portfolio-item-meta").outerHeight(!0);a("#single-item img:first-child").length||a("#single-item iframe").length||(c=a("#single-item *[height]:first-child").outerHeight()),c+=a("#single-item .slider").length?40:43,c+=a("#single-item .item-description").outerHeight(!0),g.hasClass("closed-project")&&g.removeClass("closed-project"),b=c>=d?c:d,b+=a(".portfolio-border").outerHeight(!0),g.animate({height:b},800,"easeOutQuart",function(){a(this).css({overflow:"visible",height:"auto"})})}function d(){jQuery().slides&&a("#slides").slides({preload:!0,preloadImage:headJS.templateurl+"/images/layout/loading.gif",play:0,pause:2500,slideEasing:"easeOutSine",fadeEasing:"easeOutSine",hoverPause:!0,container:"slides-container",pagination:!0,generatePagination:!0,fadeSpeed:350,slideSpeed:350,autoHeight:!0,autoHeightSpeed:350,effect:"slide",crossfade:!0,randomize:!1,start:1})}function e(){a("#overlay").css("visibility","visible"),a("#overlay").fadeIn(500)}function f(){var b=a("#slides #next-prev-links img"),c=function(){a("body").hasClass("ie8")?b.css("visibility","visible"):b.stop().animate({opacity:.5},200,"easeInOutExpo")},d=function(){a("body").hasClass("ie8")?b.css("visibility","hidden"):b.stop().animate({opacity:0},450,"easeInOutCubic")};a(".slider").hover(c,d)}current_post_id="";var g=a("#project-wrapper");if(eQgetProjectViaAjax=function(h){var i=a(this).attr("data-post_id");current_post_id=i;var j=a(this).attr("data-nonce"),k=a('.quick-portfolio-details[data-post_id="'+i+'"]').parent().parent().prev(".portfolio-item"),l=a('.quick-portfolio-details[data-post_id="'+i+'"]').parent().parent().next(".portfolio-item"),m="",n="";0!==k.length&&0!==l.length?(m=k.find(".quick-portfolio-details").attr("data-post_id"),n=l.find(".quick-portfolio-details").attr("data-post_id")):0!==k.length?m=k.find(".quick-portfolio-details").attr("data-post_id"):0!==l.length&&(n=l.find(".quick-portfolio-details").attr("data-post_id")),a(".single-img-loader").css("opacity",1),b(),a.ajax({type:"post",context:this,dataType:"json",url:headJS.ajaxurl,data:{action:"aw_get_ajax_project",post_id:i,nonce:j,prev_post_id:m,next_post_id:n},beforeSend:function(){a('.quick-portfolio-details[data-post_id="'+i+'"]').next(".blocked-project-overlay").addClass("overlay-active"),a.browser.opera?a.scrollTo(0,300,{easing:"easeOutCubic"}):a.scrollTo(0,500,{easing:"easeOutCubic"})},success:function(b){g.html(b.html),g.find("#portfolio-item-meta, #single-item").css("opacity",0),a("#single-item .single-img").load(function(){a(this).stop().animate({opacity:1},300),a(".single-img-loader").stop().animate({opacity:0},300)})},complete:function(){d(),f(),c(),a(".prev-portfolio-post, .next-portfolio-post").click(eQgetProjectViaAjax),a(".prev-portfolio-post, .next-portfolio-post").click(e),a(".close-current-post").click(b),a("#overlay").fadeOut(500),g.find("#portfolio-item-meta, #single-item").stop().animate({opacity:1},400)}}),h.preventDefault()},a("body").hasClass("ie8")||(a(".quick-portfolio-details").click(eQgetProjectViaAjax),a("#flickr .flickr_badge_image:nth-child(3n)").css({marginRight:"0px"})),jQuery().scrollTop){var h=a("#dropdown-wrapper");h.length&&(a("#dropdown-trigger").click(function(){var b=a(".dropdown-page").height()+60,c=h.height();0==c?(a(".drop-down-arrows").css("backgroundPosition","left top"),h.animate({height:b},700,"easeOutCubic",function(){a(this).css("height","auto")})):(a(".drop-down-arrows").css("backgroundPosition","0px -13px"),h.animate({height:0},500,"easeOutCubic")),a("body, html").animate({scrollTop:0},200,"easeOutCubic")}),a("#dropdown-wrapper .loading-img").length&&a("#dropdown-wrapper .loading-img").attr("src",headJS.themePath+"/images/layout/ajax-loader.gif"))}a('.quick-portfolio-details, .project-title a, .share-this a[rel="next"], .share-this a[rel="prev"]').click(e);var i=".project-overlay";jQuery().scrollTop&&(Modernizr.csstransitions||(i=".project-overlay, .view-button, .project-caption"),Modernizr.csstransitions||(oyItemHoverEffectInit=function(){var b=function(){var b=a(this);b.is("h3")&&(b=a(this).prev()),a("body").hasClass("ie8")?b.find(i).stop().animate({opacity:.92},300,"easeInOutExpo"):b.find(i).stop().animate({opacity:1},300,"easeInOutExpo")},c=function(){var b=a(this);b.is("h3")&&(b=a(this).prev()),b.find(i).stop().animate({opacity:0},500,"easeInOutCubic")};a(".quick-portfolio-details, .quick-portfolio-details + h3").hover(b,c)},oyItemHoverEffectInit())),d(),f(),a(".close-current-post, .prev-portfolio-post, .next-portfolio-post").click(function(){if(!a("body").hasClass("ie8")){var b=a(this);b.hasClass("close-current-post")&&g.addClass("closed-project"),a(".blocked-project-overlay").css("display","none"),g.find("#portfolio-item-meta, #single-item").stop().animate({opacity:0},200),g.stop().animate({height:0},600,"easeOutQuart",function(){a(this).css("overflow","hidden"),b.hasClass("close-current-post")&&a(this).empty()})}}),a("body").hasClass("ie8")||a(".prev-portfolio-post, .next-portfolio-post").click(eQgetProjectViaAjax),a(".prev-portfolio-post, .next-portfolio-post").click(e),a('.share-this a[rel="next"]').attr("title",headJS.prevPost),a('.share-this a[rel="prev"]').attr("title",headJS.nextPost)}),function(a){a.fn.meanmenu=function(b){var c={meanMenuTarget:jQuery(this),meanMenuClose:"X",meanMenuCloseSize:"18px",meanMenuOpen:"<span /><span /><span />",meanRevealPosition:"right",meanRevealPositionDistance:"0",meanRevealColour:"",meanRevealHoverColour:"",meanScreenWidth:"480",meanNavPush:"",meanShowChildren:!0,meanExpandableChildren:!0,meanExpand:"+",meanContract:"-",meanRemoveAttrs:!1},b=a.extend(c,b);return currentWidth=window.innerWidth||document.documentElement.clientWidth,this.each(function(){function a(){if("center"==j){var a=window.innerWidth||document.documentElement.clientWidth,b=a/2-22+"px";meanRevealPos="left:"+b+";right:auto;",s?jQuery(".meanmenu-reveal").animate({left:b}):jQuery(".meanmenu-reveal").css("left",b)}}function c(){jQuery($navreveal).is(".meanmenu-reveal.meanclose")?$navreveal.html(g):$navreveal.html(i)}function d(){jQuery(".mean-bar,.mean-push").remove(),jQuery("body").removeClass("mean-container"),jQuery(f).show(),menuOn=!1,meanMenuExist=!1}function e(){if(m>=currentWidth){meanMenuExist=!0,jQuery("body").addClass("mean-container"),jQuery(".mean-container").prepend('<div class="mean-bar"><a href="#nav" class="meanmenu-reveal" style="'+meanStyles+'">Show Navigation</a><nav class="mean-nav"></nav></div>');var a=jQuery(f).html();jQuery(".mean-nav").html(a),r&&jQuery("nav.mean-nav *").each(function(){jQuery(this).removeAttr("class"),jQuery(this).removeAttr("id")}),jQuery(f).before('<div class="mean-push" />'),jQuery(".mean-push").css("margin-top",n),jQuery(f).hide(),jQuery(".meanmenu-reveal").show(),jQuery(o).html(i),$navreveal=jQuery(o),jQuery(".mean-nav ul").hide(),meanShowChildren?meanExpandableChildren?(jQuery(".mean-nav ul ul").each(function(){jQuery(this).children().length&&jQuery(this,"li:first").parent().append('<a class="mean-expand" href="#" style="font-size: '+h+'">'+p+"</a>")}),jQuery(".mean-expand").on("click",function(a){a.preventDefault(),jQuery(this).hasClass("mean-clicked")?(jQuery(this).text(p),console.log("Been clicked"),jQuery(this).prev("ul").slideUp(300,function(){})):(jQuery(this).text(q),jQuery(this).prev("ul").slideDown(300,function(){})),jQuery(this).toggleClass("mean-clicked")})):jQuery(".mean-nav ul ul").show():jQuery(".mean-nav ul ul").hide(),jQuery(".mean-nav ul li").last().addClass("mean-last"),$navreveal.removeClass("meanclose"),jQuery($navreveal).click(function(a){a.preventDefault(),0==menuOn?($navreveal.css("text-align","center"),$navreveal.css("text-indent","0"),$navreveal.css("font-size",h),jQuery(".mean-nav ul:first").slideDown(),menuOn=!0):(jQuery(".mean-nav ul:first").slideUp(),menuOn=!1),$navreveal.toggleClass("meanclose"),c()})}else d()}var f=b.meanMenuTarget;b.meanReveal;var g=b.meanMenuClose,h=b.meanMenuCloseSize,i=b.meanMenuOpen,j=b.meanRevealPosition,k=b.meanRevealPositionDistance,l=b.meanRevealColour;b.meanRevealHoverColour;var m=b.meanScreenWidth,n=b.meanNavPush,o=".meanmenu-reveal";meanShowChildren=b.meanShowChildren,meanExpandableChildren=b.meanExpandableChildren;var p=b.meanExpand,q=b.meanContract,r=b.meanRemoveAttrs;if(navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/Blackberry/i)||navigator.userAgent.match(/Windows Phone/i))var s=!0;(navigator.userAgent.match(/MSIE 8/i)||navigator.userAgent.match(/MSIE 7/i))&&jQuery("html").css("overflow-y","scroll"),menuOn=!1,meanMenuExist=!1,"right"==j&&(meanRevealPos="right:"+k+";left:auto;"),"left"==j&&(meanRevealPos="left:"+k+";right:auto;"),a(),meanStyles="background:"+l+";color:"+l+";"+meanRevealPos,s||jQuery(window).resize(function(){currentWidth=window.innerWidth||document.documentElement.clientWidth,currentWidth>m?d():d(),m>=currentWidth?(e(),a()):d()}),window.onorientationchange=function(){a(),currentWidth=window.innerWidth||document.documentElement.clientWidth,currentWidth>=m&&d(),m>=currentWidth&&0==meanMenuExist&&e()},e()})}}(jQuery),jQuery(document).ready(function(a){jQuery("div.top-nav").meanmenu({meanScreenWidth:"767",meanRevealPosition:"right"}),a("#tabnav").idTabs(),a(".nav-menu").onePageNav({filter:":not(.external a)"})});