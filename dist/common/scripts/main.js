window.main=new function(t){function n(){window.focus(),a=io.connect("http://"+window.location.host),a.on("command",function(t){t=t||{},t.api=t.api||"",window.main.apis[t.api]&&window.main.apis[t.api].run(t,a,window.main)})}{var a;!function(){var t=function(){if(document.currentScript)return document.currentScript.src;var t=document.getElementsByTagName("script"),n=t[t.length-1];return n.src?n.src:void 0}();return t=t.replace(/\\/g,"/").replace(/\/[^\/]*\/?$/,"")}()}this.apis=new function(){},t(window).load(function(){n()})}(jQuery),window.main.apis.renderFontList=new function(){this.run=function(t,n,a){function i(t,n){if("string"!=typeof n)return!1;var a=n.toLowerCase().indexOf(t.toLowerCase());return a>=0?!0:!1}var e=t.fontlist,r=twig({data:$("#template-fontlist-listitem").html()}),o={};o.sampleText=""+$("#mainform input[name=sampleText]").val(),o.keywords=""+$("#mainform input[name=keywords]").val(),o.starOnly=$("#mainform input[name=starOnly]").prop("checked");var s=$(".font-list");$(".contents").append(s),Object.keys(e).forEach(function(t){var n=e[t];if(o.sampleText.length||(o.sampleText=n.originalData.family),(!o.starOnly||n.star)&&(!o.keywords.length||i(o.keywords,n.url)||i(o.keywords,n.comment)||i(o.keywords,n.originalData.family)||i(o.keywords,n.originalData.postscriptName)||i(o.keywords,n.originalData.path))){var p=$(r.render({font:n,sampleText:o.sampleText}));p.find(".font-list__family a.font-list__btn-detail").click(function(){$(this).parent().parent().parent().find(".font-list__property").toggle("slow")}),p.find(".font-list__family a.font-list__btn-star").click(function(){var t=$(this),n=t.parent().parent().parent().attr("data-postscriptname");t.hasClass("star__active")?a.uncheckStar(n):a.checkStar(n)}),p.find(".font-list__memo input").change(function(){var t=$(this),n=t.parent().parent().parent().parent().attr("data-postscriptname");a.updateFontInfo(n,t.attr("name"),t.val())}),s.append(p)}})}};