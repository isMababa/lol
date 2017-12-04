/**
 * Created by Administrator on 2017/8/28.
 */
/*----开始的模态框----*/
var indexN=9;
var myTimesN=setInterval(function () {
    indexN--;
    if(indexN<0){
        $(".loading_modal1").css("display","none");
        clearInterval(myTimesN);
    }
    var posi="0"+" "+(-indexN*73)+"px";
    $(".loading .loading_number").css("background-position",posi);
},200);
var loadingWidth=parseInt($(".loading_modal1").css("width"))/2-188;
window.onload=function () {
    $(".left_line").animate({"width":loadingWidth+'px'},1800);
    $(".right_line").animate({"width":loadingWidth+'px'},1800);
};
function show() {
    $(".firstPage").css("opacity","1");
    change3();
    change1();
    setTimeout(
        function(){
            change2();
            $(".first_hero").css("opacity","1");
            setTimeout(function () {
                $(".firstHeader").css({"top":"20px","opacity":"1"});
                $(".final2017").css({"margin-left":"-256px","opacity":"1"});
                $(".open_legend").css({"margin-left":"195px","opacity":"1"});
                $(".first_footer").css({"top":"50%","opacity":"1"});
            },1000);
        },800);
}
setTimeout(show,2200);
/*--头部线条--*/
var lineTimes1;
var lineTimes2;
var lineTimes3;
var lineTimes4;
var lineTimes5;
function line1() {
    $(".allLine .lineY").eq(0).animate({
        "height":"20px"
    },200).animate({
        "height":"0"
    },200,function () {
        lineTimes1=setTimeout(line1,0)
    });
}
function line2() {
    $(".allLine .lineY").eq(1).animate({
        "height":"20px"
    },180).animate({
        "height":"0"
    },180,function () {
        lineTimes2=setTimeout(line2,0)
    });
}
function line3() {
    $(".allLine .lineY").eq(2).animate({
        "height":"20px"
    },210).animate({
        "height":"0"
    },210,function () {
        lineTimes3=setTimeout(line3,0)
    });
}
function line4() {
    $(".allLine .lineY").eq(3).animate({
        "height":"20px"
    },190).animate({
        "height":"0"
    },190,function () {
        lineTimes4=setTimeout(line4,0)
    });
}
function line5() {
    $(".allLine .lineY").eq(4).animate({
        "height":"20px"
    },220).animate({
        "height":"0"
    },220,function () {
        lineTimes5=setTimeout(line5,0)
    });
}
function lineChange() {
    line1();
    setTimeout(function () {
        line2();
        setTimeout(function () {
            line3();
            setTimeout(function () {
                line4();
                setTimeout(function () {
                    line5();
                },50)
            },50);
        },50);
    },50);
}
lineChange();
var clickN=0;
$(".allLine").click(function () {
    if(clickN==0){
        clearTimeout(lineTimes1);
        clearTimeout(lineTimes2);
        clearTimeout(lineTimes3);
        clearTimeout(lineTimes4);
        clearTimeout(lineTimes5);
        $(".allLine .lineY").animate().stop().animate().stop();
        clickN=1;
    }else{
        clickN=0;
        lineChange();
    }
});
/*--开启传奇---*/
$(".open_legend").hover(function () {
    $(this).find("span").stop().animate({"fontSize":"16px"},300);
    $(this).find(".legend_left").stop().animate({"left":"-13px","opacity":"0.7"},300);
    $(this).find(".legend_right").stop().animate({"right":"-13px","opacity":"0.7"},300);
    $(this).find("b").stop().animate({"left":"85%","opacity":"0"},500,function () {
        $(this).css({"left":"15%","opacity":"0"});
    }).animate({"left":"50%","opacity":"1"},500);
},function () {
    $(this).find(".legend_left").stop().animate({"left":"0","opacity":"0"},300);
    $(this).find(".legend_right").stop().animate({"right":"0","opacity":"0"},300);
    $(this).find("span").stop().animate({"fontSize":"14px"},300);
});
/*开启传奇的水波纹效果*/
var myTimes1;
function enlarge() {
    $(".open_legend").find(".legend_enlarge").animate({
        "width":"118%","height":"118%","left":"-9%","top":"-9%","opacity":"0"
    },1000).animate({
        "width":"100%","height":"100%","left":"0","top":"0","opacity":"0"
    },1000,function(){
        $(this).css({"opacity":"0.5"});
        myTimes1=setTimeout(enlarge,0)
    });
}
enlarge();
$(".open_legend").hover(function () {
    clearTimeout(myTimes1);
    $(".open_legend").find(".legend_enlarge").animate().stop().css("opacity","0");
},function () {
    enlarge();
});
/*--倒计时--*/
var date1=new Date("2017/12/11 16:00:00");
function countdown() {
    var date=new Date();
    var times=parseInt((date1-date)/1000);
    var num8=parseInt((times%60)%10);
    var num7=parseInt((times%60)/10);
    var num6=parseInt(((times/60)%60)%10);
    var num5=parseInt(((times/60)%60)/10);
    var num4=parseInt(((times/3600)%24)%10);
    var num3=parseInt(((times/3600)%24)/10);
    var num2=parseInt(((times/3600)/24)%10);
    var num1=parseInt(((times/3600)/24)/10);
    var arr=[num1,num2,num3,num4,num5,num6,num7,num8];
    $(".clearfix").find("span").each(function (i) {
        if(arr[i]<=4){
            var j=arr[i];
            var wid1=(-136-j*15)+"px"+" "+"-404px";
            $(this).css({"background":"url('../images/2017world/index-sprites.png') no-repeat","background-position":wid1});
        }else if(arr[i]==5){
            $(this).css("background","url('../images/2017world/index-sprites.png') no-repeat -137px -427px");
        }else if(arr[i]>5){
            var j=arr[i];
            j-=5;
            var wid2=(-140-j*14)+"px"+" "+"-427px";
            $(this).css({"background":"url('../images/2017world/index-sprites.png') no-repeat","background-position":wid2});
        }

    });
}
countdown();
var myTimes2;
myTimes2=setInterval(countdown,1000);

//改变窗口大小
//两条龙的响应式
function change1() {
    var winWidth = parseInt($(window).width());
    if (winWidth >= 1578) {
        $(".dragon1").css("left", "-15px");
        $(".dragon2").css("right", "-15px");
    } else {
        $(".dragon1").css("left", "-15%");
        $(".dragon2").css("right", "-15%");
    }
}
//中间三部分的响应式
function change2() {
    var winHeight=parseInt($(window).height());
    var n=winHeight/982;
    if(n>=0.6){
        $(".first_hero").css({
            "-webkit-transform":"scale("+n+")",
            "-o-transform":"scale("+n+")",
            "-ms-transform":"scale("+n+")",
            "-moz-transform":"scale("+n+")",
            "transform":"scale("+n+")"
        });
        $(".open_legend").css({
            "-webkit-transform":"scale("+n+")",
            "-o-transform":"scale("+n+")",
            "-ms-transform":"scale("+n+")",
            "-moz-transform":"scale("+n+")",
            "transform":"scale("+n+")"
        });
        $(".final2017").css({
            "-webkit-transform":"scale("+n+")",
            "-o-transform":"scale("+n+")",
            "-ms-transform":"scale("+n+")",
            "-moz-transform":"scale("+n+")",
            "transform":"scale("+n+")"
        });
    }
}
//底部倒计时的响应式
function change3() {
    var winHeight=parseInt($(window).height());
    var n=winHeight/982;
    if(n>=0.6) {
        var mTop = n * 310 + "px";
        $(".first_footer").css("margin-top", mTop);
    }
}
//头部的响应式
function change4() {
    var winWidth=parseInt($(window).width());
    var n=winWidth/1366;
    if(n<=1){
        $(".first_logo").css({
            "-webkit-transform":"scale("+n+")",
            "-o-transform":"scale("+n+")",
            "-ms-transform":"scale("+n+")",
            "-moz-transform":"scale("+n+")",
            "transform":"scale("+n+")"
        });
        $(".first_right").css({
            "-webkit-transform":"scale("+n+")",
            "-o-transform":"scale("+n+")",
            "-ms-transform":"scale("+n+")",
            "-moz-transform":"scale("+n+")",
            "transform":"scale("+n+")"
        });
    }
}
$(window).resize(change1);
$(window).resize(change2);
$(window).resize(change3);
$(window).resize(change4);

// 两个龙左右滑动的动画效果
var flag=0;
$(document).mousemove(function(e) {
    var winWidth=parseInt($(window).width())/2;
    var draLeft=parseInt($(".dragon1").css("left"));
    var draRight=parseInt($(".dragon2").css("right"));
    if(e.clientX<(winWidth-30)){
        if(flag<=0){
            flag=1;
            draLeft=(draLeft-15)+"px";
            draRight=(draRight+15)+"px";
            $(".dragon1").css("left",draLeft);
            $(".dragon2").css("right",draRight);
        }
    }else if(e.clientX>(winWidth+30)){
        if(flag>=0){
            flag=-1;
            draLeft=(draLeft+15)+"px";
            draRight=(draRight-15)+"px";
            $(".dragon1").css("left",draLeft);
            $(".dragon2").css("right",draRight);
        }
    }else{
        if(flag>0){
            flag=0;
            draLeft=(draLeft+15)+"px";
            draRight=(draRight-15)+"px";
            $(".dragon1").css("left",draLeft);
            $(".dragon2").css("right",draRight);
        }else if(flag>0){
            flag=0;
            draLeft=(draLeft-15)+"px";
            draRight=(draRight+15)+"px";
            $(".dragon1").css("left",draLeft);
            $(".dragon2").css("right",draRight);
        }
    }
});
/*两条龙上下晃动*/
function animate1() {
    $(".dragon1").animate({
        "top":"49.5%"
    },500).animate({
        "top": "50.5%"
    },1000).animate({
        "top":"50%"
    },500,function () {
        setTimeout(animate1,0)
    });
}
animate1();
function animate2() {
    $(".dragon2").animate({
        "top":"49.5%"
    },500).animate({
        "top": "50.5%"
    },1000).animate({
        "top":"50%"
    },500,function () {
        setTimeout(animate2,0)
    });
}
animate2();
/*切换界面*/
function Hidden() {
    $(".firstPage").css("opacity","0");
    $(".first_hero").css({
        "-webkit-transform":"scale(1.6,1.6)",
        "-o-transform":"scale(1.6,1.6)",
        "-ms-transform":"scale(1.6,1.6)",
        "-moz-transform":"scale(1.6,1.6)",
        "transform":"scale(1.6,1.6)",
        "opacity":"0"
    });
    $(".final2017").css({"margin-left":"-350px","opacity":"0"});
    $(".open_legend").css({"margin-left":"260px","opacity":"0"});
    $(".dragon1").css("left", "-610px");
    $(".dragon2").css("right", "-610px");
    $(".first_footer").css({"top":"100%","opacity":"0"});
}


