/* http://lorem.in  @author Loeify@gmail.com */ 
var API={section_height:0,section_pos:"#home",scroll_mark:!0,slider_pos:0,work_pos:"#00",setSize:function(a){$(a).css("height",window.innerHeight),$(a).css("width",window.innerWidth)},loadImage:function(a,b){$('<img class="db abs" src="/static/image/works/'+a+"/"+b+'.jpg" />').css({opacity:0}).appendTo("#"+a+b).load(function(){$(this).css({opacity:1,marginLeft:-$(this).width()/2+"px",marginTop:-$(this).height()/2+"px"})})},touchDevice:function(){return!!("ontouchstart"in window)}};API.doAction=function(a,b){if(a){var b="#"+$("#"+b).next()[0].id;if("#pot"==b)return}else{if(!$(API.section_pos).prev()[0])return;var b="#"+$(API.section_pos).prev()[0].id}var c=API.getPorperty(b);API.sectionMove(c.pos*API.section_height),API.section_pos=b,API.pushUrl(c.title,c.url,c.pos),API.touchDevice()&&(API.section_height=window.innerHeight,API.setSize("#home, #portfolio, #about"))},API.getPorperty=function(a){var b,c,d;switch(a){case"#home":b=0,c="Lorem Ipsum 2014",d="/";break;case"#portfolio":b=1,c="Portfolio | Lorem Ipsum 2014",d="/portfolio/";break;case"#about":b=2,c="About | Lorem Ipsum 2014",d="/about/"}return{pos:b,title:c,url:d}},API.pushUrl=function(a,b,c){history.pushState({pos:c,title:a},a,b),document.title=a},API.sectionMove=function(a,b){var b=b||function(){};$("body, html").animate({scrollTop:a},700,"easeInOutQuint",function(){b()})},API.tapPlot=function(a,b,c){$(a).hammer({prevent_default:!0}).on("tap",function(a){var d=a.position[0].x,e=a.position[0].y;$(b).css({visibility:"visible",width:"30px",height:"30px",left:d-15+"px",top:e-15+"px",opacity:.4}).animate({height:"40px",width:"40px",opacity:0,left:"-=5px",top:"-=5px"},300,function(){$(b).css("visibility","hidden")}),c(a.target.id,d)})},API.sliderMove=function(a,b){$(a).animate({left:-b*window.innerWidth},700,"easeInOutQuint",function(){0==b&&$(a).css("left",0)})},API.sliderAction=function(a,b){b?API.slider_pos++:API.slider_pos--;var c=$(a).length;return API.slider_pos>c-1?void(API.slider_pos=c-1):API.slider_pos<0?void(API.slider_pos=0):void API.sliderMove("#slider",API.slider_pos)},API.sliderInfo=function(a){var b,c,d;switch(a){case 0:b="Guo.Lu — Website",c="A WordPress theme for picture showcase. use Isotope for magical layouts. use basket.js for caching & loading scripts with localStorage. use history API & ajax for page jump without refreshing",url="http://guo.lu",d=4;break;case 1:b="Jaku — Icon",c="Jaku Icon showcase, all icons via http://jakurepo.com/ All icons are the property of their respective artists and may not be modified, sold, or redistributed without their consent",url="http://jaku.guo.lu",d=5}return{title:b,content:c,url:url,sum:d}},$(function(){function a(a,b){for(var c='<div class="info item bb w h rel"><div class="infoinner w h bb abs"><h3>'+a.title+"</h3><p>"+a.content+'</p><a class="abs" href="'+a.url+'">'+a.url+"</a></div></div>",d=0;d<a.sum;d++)c+='<div id="'+b+d+'" class="item image w h rel"></div>';$("#slider").append(c)}function b(a,b){for(var c=0;b>c;c++)API.loadImage(a,c)}function c(){API.section_height=window.innerHeight,API.setSize("#home, #portfolio, #about"),""!=API.section_pos&&(API.sectionMove(API.getPorperty(API.section_pos).pos*API.section_height),$("#slider").css("width",$(".item").length*window.innerWidth),API.sliderMove("#slider",API.slider_pos),$(".item").each(function(){$(this).css("width",window.innerWidth).find("img").css({marginLeft:-$(this).find("img").width()/2+"px",marginTop:-$(this).find("img").height()/2+"px"})}))}var d=API.sliderInfo(0);work_1=API.sliderInfo(1),a(d,0),a(work_1,1),c(),$(window).on("resize orientationchange",function(){setTimeout(c,0)}),setTimeout(function(){c(),b(0,d.sum),b(1,work_1.sum)},0),window.scrollTo(0,0),$("#home").css("top",0),API.tapPlot("#home, #portfolio, #about","#pot",function(a,b){"portfolio"==a?API.slider_pos<$(".item").length-1&&b/window.innerWidth>.5?API.sliderAction(".item",!0):API.slider_pos>0&&b/window.innerWidth<.5?API.sliderAction(".item",!1):API.doAction(!0,a):API.doAction(!0,a)}),$(document).keydown(function(a){40==a.keyCode&&API.doAction(!0,API.section_pos.split("#")[1]),38==a.keyCode&&API.doAction(!1,API.section_pos.split("#")[1]);var b=window.location.pathname;-1!=b.indexOf("portfolio")&&(39==a.keyCode&&API.sliderAction(".item",!0),37==a.keyCode&&API.sliderAction(".item",!1))}),$("#home, #portfolio, #about").on("mousewheel DOMMouseScroll",function(a){a.preventDefault();var b=a.originalEvent.wheelDelta||-1*a.originalEvent.detail;API.scroll_mark&&(API.scroll_mark=!1,0>b&&API.doAction(!0,API.section_pos.split("#")[1]),b>0&&API.doAction(!1,API.section_pos.split("#")[1]),setTimeout(function(){API.scroll_mark=!0},1e3))}),window.addEventListener("popstate",function(){var a=window.location.pathname;a=a.substring(1,a.length-1),"/"==a&&(a="home");var b=API.getPorperty("#"+a);API.sectionMove(b.pos*API.section_height,function(){document.title=b.title})}),$("html").hammer({prevent_default:!0}).on("swipe",function(a){"up"==a.direction&&API.doAction(!0,API.section_pos.split("#")[1]),"down"==a.direction&&API.doAction(!1,API.section_pos.split("#")[1]),-1!=window.location.pathname.indexOf("portfolio")&&("left"==a.direction&&API.sliderAction(".item",!0),"right"==a.direction&&API.sliderAction(".item",!1))})});