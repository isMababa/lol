/**
 * Created by Administrator on 2017/8/29.
 */

/*进入下一界面*/
var start=0;
var pageFlag=0;
$(".open_legend").click(function () {
    $(".firstBg").css("display","none");
    $(".secondPage").css("display","block");
    Hidden();
    <!--头部logo插入-->
    $(".first_logo").append("<a href='' class='logo3'></a>");
    index=6;
    start=0;
    prSlideActive(index);
});
/*进入上一界面*/
$(".homeBd").click(function () {
    $(".secondPage").css("display","none");
    $(".logo3").remove();
    $(".firstBg").css("display","block");
    $(".firstPage").css("display","block");
    $(".firstHeader").css({"top":"-70px","opacity":"0"});
    show();
    index=0;
    prSlideActive(index);
});
/*--第二部分页面--*/
/*背景*/
function pageBd(index) {
    var po=-index*700+"px";
    $(".secondPage").css({
        "backgroundPositionX":po,
        "-ms-backgroundPositionX":po
    });
}

/*底部滚动标志栏*/
$(".back_first").hover(function () {
    $(this).find(".homeBd").toggleClass("homeBdHover");
});
$(".prSlide").hover(function () {
    $(this).find(".lineSlide").toggleClass("transLineSlide");
    $(this).find(".dotSlide").toggleClass("transDotSlide");
    $(this).find(".numDate").toggleClass("transNumDate");
    $(this).find(".text").toggleClass("transText");
});
/*点击滚动条轮播*/
var index=0;
function prSlideActive(index) {
    if(start==0) {
        start=1;
        pageBd(index);
        $(".roundSlide1").removeClass("roundChange1");
        $(".roundSlide2").removeClass("roundChange1");
        $(".lineSlide").removeClass("transLineSlide1");
        $(".dotSlide").removeClass("transDotSlide1");
        $(".numDate").removeClass("transNumDate1");
        $(".text").removeClass("transText1");
        $(".prSlide").eq(index).find(".roundSlide1").addClass("roundChange1 roundChange2");
        $(".prSlide").eq(index).find(".roundSlide2").addClass("roundChange1 roundChange2");
        $(".prSlide").eq(index).find(".lineSlide").addClass("transLineSlide1");
        $(".prSlide").eq(index).find(".dotSlide").addClass("transDotSlide1");
        $(".prSlide").eq(index).find(".numDate").addClass("transNumDate1");
        $(".prSlide").eq(index).find(".text").addClass("transText1");
        $(".rightDate").text($(".prSlide").eq(index).find(".numDate").text());
        if (index == 6) {
            $(".rightBtn").css("display", "none");
            $(".lastBtn").css("display", "block");
        } else {
            $(".rightBtn").css("display", "block");
            $(".lastBtn").css("display", "none");
        }
        if(index == 0){
            $(".leftBtn").css("display", "none");
        }else{
            $(".leftBtn").css("display", "block");
        }
        pageFlag = index;
        lunDiv1Show();
        lunDiv2Show();
        lunDiv3Show();
        lunDiv4Show();
        lunDiv5Show();
        lunDiv6Show();
        lunDiv7Show();
        /*$(".lunDiv").each(function (i) {
         console.log($(this).index());
         });*/
    }
}
$(".prSlide").click(function(){
    if(start==0) {
        index = $(this).index() - 1;
        prSlideActive(index);
        $(this).find(".roundSlide1").removeClass("roundChange2");
        $(this).find(".roundSlide2").removeClass("roundChange2");
    }
});
$(".prSlide").hover(function () {
    if($(this).index()-1==index){
        $(".roundSlide1").removeClass("roundChange2");
        $(".roundSlide2").removeClass("roundChange2");
    }
},function () {
    if($(this).index()-1==index){
        $(this).find(".roundSlide1").addClass("roundChange2");
        $(this).find(".roundSlide2").addClass("roundChange2");
    }
});
/*左右侧滚动按钮*/
function leftBtnChange(Btn) {
    $(Btn).css({
        "-webkit-transform":"scale(1.05)",
        "-o-transform":"scale(1.05)",
        "-ms-transform":"scale(1.05)",
        "-moz-transform":"scale(1.05)",
        "transform":"scale(1.05)"
    });
    setTimeout(function () {
        $(Btn).css({
            "-webkit-transform":"scale(1)",
            "-o-transform":"scale(1)",
            "-ms-transform":"scale(1)",
            "-moz-transform":"scale(1)",
            "transform":"scale(1)"
        });
    },1500);
}
var myTimesBtn1;
var myTimesBtn2;
var myTimesBtn3;
leftBtnChange(".leftBtn");
myTimesBtn1=setInterval("leftBtnChange('.leftBtn')",3000);
leftBtnChange(".rightBtn");
myTimesBtn2=setInterval("leftBtnChange('.rightBtn')",3000);
leftBtnChange(".lastBtn");
myTimesBtn3=setInterval("leftBtnChange('.lastBtn')",3000);
/*左右侧滚动按钮hover事件*/
$(".leftBtn").hover(function () {
    $(".leftSpr").toggleClass("btnHover1");
    $(".leftBd").toggleClass("btnHover1");
    $(".leftLine").toggleClass("btnHover2");
});
$(".leftBtn").hover(function () {
    clearInterval(myTimesBtn1);
},function () {
    leftBtnChange(".leftBtn");
    myTimesBtn1=setInterval("leftBtnChange('.leftBtn')",3000);
});
$(".rightBtn").hover(function () {
    $(".rightSpr").toggleClass("rightSprHover");
    $(".rightBd").toggleClass("rightHover rightBdHover");
    $(".rightLine").toggleClass("rightHover rightLineHover");
    $(".rightDate").toggleClass("rightDateHover");
});
$(".rightBtn").hover(function () {
    clearInterval(myTimesBtn2);
},function () {
    leftBtnChange(".rightBtn");
    myTimesBtn2=setInterval("leftBtnChange('.rightBtn')",3000);
});
$(".lastBtn").hover(function () {
    clearInterval(myTimesBtn3);
},function () {
    leftBtnChange(".lastBtn");
    myTimesBtn3=setInterval("leftBtnChange('.lastBtn')",3000);
});
$(".leftBtn").click(function () {
    if(start==0) {
        index--;
        if (index <= 0) {
            index = 0;
        }
        prSlideActive(index);
    }
});
$(".rightBtn").click(function () {
    if(start==0) {
        index++;
        if (index >= 6) {
            index = 6;
        }
        prSlideActive(index);
    }
});
/*滚轮滚动事件*/
$(window).mousewheel(function (e,delta) {
    if(delta<0){
        $(".rightBtn").click();
    }else if(delta>0){
        $(".leftBtn").click();
    }
});
/*轮播效果*/
$(".lunDiv .more-btn").hover(function () {
    $(this).find("path").attr("d","M25,72.5 L25,72 A58,58 200 1,1 25,72.5 z");
},function () {
    $(this).find("path").attr("d","M41,72.5 L41,0.3,103.5,36.4,166,72.5,103.5,108.6,41,144.7,41,72.5z");
});
/*第一副页面*/
function lunDiv1Show() {
    var num=0;
    if(pageFlag==0){
        $(".lunDiv1").addClass("lunActive");
        setTimeout(function () {
            $(".lunDiv1 .pic-box").removeClass("DivHid1 DivHid2");
            $(".lunDiv1 .subtit").removeClass("DivHid1 DivHid2");
            setTimeout(function () {
                $(".lunDiv1 .title").removeClass("DivHid1 DivHid2");
                $(".lunDiv1 .text").removeClass("DivHid1 DivHid2");
                setTimeout(function () {
                    $(".lunDiv1 .more-btn").removeClass("DivHid1 DivHid2");
                    $(".lunDiv1 .skew-img").removeClass("DivHid3");
                    start=0;
                },400);
            },400);
        },400);
    }else if(pageFlag>0){
        num++;
        if(num==1){
            $(".lunDiv1 .pic-box").removeClass("DivHid1");
            $(".lunDiv1 .subtit").removeClass("DivHid1");
            $(".lunDiv1 .title").removeClass("DivHid1");
            $(".lunDiv1 .text").removeClass("DivHid1");
            $(".lunDiv1 .more-btn").removeClass("DivHid1");
            $(".lunDiv1 .subtit").addClass("DivHid2");
            $(".lunDiv1 .title").addClass("DivHid2");
            setTimeout(function () {
                if(num==1) {
                    $(".lunDiv1 .text").addClass("DivHid2");
                    $(".lunDiv1 .more-btn").addClass("DivHid2");
                    setTimeout(function () {
                        if(num==1) {
                            $(".lunDiv1 .pic-box").addClass("DivHid2");
                            setTimeout(function () {
                                if(num==1) {
                                    $(".lunDiv1 .skew-img").addClass("DivHid3");
                                    $(".lunDiv1").removeClass("lunActive");
                                }
                            }, 400);
                        }
                    }, 400)
                }
            },400);
        }
    }
}
/*第二副页面*/
function lunDiv2Show() {
    var num=0;
    if(pageFlag==1){
        $(".lunDiv2").addClass("lunActive");
        setTimeout(function () {
            $(".lunDiv2 .pic-box").removeClass("DivHid1 DivHid2");
            $(".lunDiv2 .subtit").removeClass("DivHid1 DivHid2");
            setTimeout(function () {
                $(".lunDiv2 .title").removeClass("DivHid1 DivHid2");
                $(".lunDiv2 .text").removeClass("DivHid1 DivHid2");
                setTimeout(function () {
                    $(".lunDiv2 .more-btn").removeClass("DivHid1 DivHid2");
                    $(".lunDiv2 .min-pic-box").removeClass("DivHid1 DivHid2");
                    $(".lunDiv2 .skew-img").removeClass("DivHid3");
                    start=0;
                },400);
            },400);
        },400);
    }else if(pageFlag<1){
        num++;
        if(num==1){
            $(".lunDiv2 .pic-box").removeClass("DivHid2");
            $(".lunDiv2 .subtit").removeClass("DivHid2");
            $(".lunDiv2 .title").removeClass("DivHid2");
            $(".lunDiv2 .text").removeClass("DivHid2");
            $(".lunDiv2 .more-btn").removeClass("DivHid2");
            $(".lunDiv2 .min-pic-box").removeClass("DivHid2");
            $(".lunDiv2 .pic-box").addClass("DivHid1");
            $(".lunDiv2 .subtit").addClass("DivHid1");
            setTimeout(function () {
                if(num==1) {
                    $(".lunDiv2 .title").addClass("DivHid1");
                    $(".lunDiv2 .text").addClass("DivHid1");
                    setTimeout(function () {
                        if(num==1) {
                            $(".lunDiv2 .more-btn").addClass("DivHid1");
                            $(".lunDiv2 .min-pic-box").addClass("DivHid1");
                            setTimeout(function () {
                                if(num==1) {
                                    $(".lunDiv2 .skew-img").addClass("DivHid3");
                                    $(".lunDiv2").removeClass("lunActive");
                                }
                            }, 400);
                        }
                    }, 400)
                }
            },400);
        }
    }else if(pageFlag>1){
        num++;
        if(num==1){
            $(".lunDiv2 .pic-box").removeClass("DivHid1");
            $(".lunDiv2 .subtit").removeClass("DivHid1");
            $(".lunDiv2 .title").removeClass("DivHid1");
            $(".lunDiv2 .text").removeClass("DivHid1");
            $(".lunDiv2 .more-btn").removeClass("DivHid1");
            $(".lunDiv2 .min-pic-box").removeClass("DivHid1");
            $(".lunDiv2 .subtit").addClass("DivHid2");
            $(".lunDiv2 .title").addClass("DivHid2");
            setTimeout(function () {
                if(num==1) {
                    $(".lunDiv2 .text").addClass("DivHid2");
                    $(".lunDiv2 .more-btn").addClass("DivHid2");
                    setTimeout(function () {
                        if(num==1) {
                            $(".lunDiv2 .min-pic-box").addClass("DivHid2");
                            $(".lunDiv2 .pic-box").addClass("DivHid2");
                            setTimeout(function () {
                                if(num==1) {
                                    $(".lunDiv2 .skew-img").addClass("DivHid3");
                                    $(".lunDiv2").removeClass("lunActive");
                                }
                            }, 400);
                        }
                    }, 400)
                }
            },400);
        }
    }
}
/*第三副页面*/
$(".lunDiv3 .pic-change li").click(function () {
    var m=$(this).index();
    console.log(m);
    $(".lunDiv3 .pic-change li").removeClass("current");
    $(this).addClass("current");
    $("#pic-box-change .pic-img").addClass("DivHid3");
    $("#pic-box-change .pic").removeClass("pic-1");
    $("#pic-box-change .pic").eq(m).addClass("pic-1");
    $("#pic-box-change .pic-img").eq(m).removeClass("DivHid3");
});
function scaleImg(num) {
    $("#pic-box-change .pic").each(function (i) {
        if(num==0){
            if($(this).hasClass("pic-1")){
                $(this).find(".pic-img").removeClass("DivHid3");
            }
        }else if(num==1){
            if($(this).hasClass("pic-1")){
                $(this).find(".pic-img").addClass("DivHid3");
            }
        }
    });

}
function lunDiv3Show() {
    var num=0;
    if(pageFlag==2){
        $(".lunDiv3").addClass("lunActive");
        setTimeout(function () {
            $(".lunDiv3 .pic-box").removeClass("DivHid1 DivHid2");
            $(".lunDiv3 .subtit").removeClass("DivHid1 DivHid2");
            $(".lunDiv3 .change-1").removeClass("DivHid1 DivHid2");
            setTimeout(function () {
                $(".lunDiv3 .title").removeClass("DivHid1 DivHid2");
                $(".lunDiv3 .text").removeClass("DivHid1 DivHid2");
                $(".lunDiv3 .more-btn").removeClass("DivHid1 DivHid2");
                $(".lunDiv3 .change-2").removeClass("DivHid1 DivHid2");
                scaleImg(num);
                setTimeout(function () {
                    $(".lunDiv3 .change-3").removeClass("DivHid1 DivHid2");
                    start=0;
                },400);
            },400);
        },400);
    }else if(pageFlag<2){
        num++;
        if(num==1){
            $(".lunDiv3 .pic-box").removeClass("DivHid2");
            $(".lunDiv3 .subtit").removeClass("DivHid2");
            $(".lunDiv3 .title").removeClass("DivHid2");
            $(".lunDiv3 .text").removeClass("DivHid2");
            $(".lunDiv3 .more-btn").removeClass("DivHid2");
            $(".lunDiv3 .change-1").removeClass("DivHid2");
            $(".lunDiv3 .change-2").removeClass("DivHid2");
            $(".lunDiv3 .change-3").removeClass("DivHid2");
            $(".lunDiv3 .change-1").addClass("DivHid1");
            setTimeout(function () {
                if(num==1) {
                    $(".lunDiv3 .pic-box").addClass("DivHid1");
                    $(".lunDiv3 .subtit").addClass("DivHid1");
                    $(".lunDiv3 .change-2").addClass("DivHid1");
                    $(".lunDiv3 .change-3").addClass("DivHid1");
                    scaleImg(num);
                    setTimeout(function () {
                        if(num==1) {
                            $(".lunDiv3 .title").addClass("DivHid1");
                            $(".lunDiv3 .text").addClass("DivHid1");
                            $(".lunDiv3 .more-btn").addClass("DivHid1");
                            setTimeout(function () {
                                if(num==1) {
                                    $(".lunDiv3").removeClass("lunActive");
                                }
                            }, 400);
                        }
                    }, 400)
                }
            },400);
        }
    }else if(pageFlag>2){
        num++;
        if(num==1){
            $(".lunDiv3 .pic-box").removeClass("DivHid1");
            $(".lunDiv3 .subtit").removeClass("DivHid1");
            $(".lunDiv3 .title").removeClass("DivHid1");
            $(".lunDiv3 .text").removeClass("DivHid1");
            $(".lunDiv3 .more-btn").removeClass("DivHid1");
            $(".lunDiv3 .change-1").removeClass("DivHid1");
            $(".lunDiv3 .change-2").removeClass("DivHid1");
            $(".lunDiv3 .change-3").removeClass("DivHid1");
            $(".lunDiv3 .pic-box").addClass("DivHid2");
            $(".lunDiv3 .subtit").addClass("DivHid2");
            $(".lunDiv3 .change-1").addClass("DivHid2");
            setTimeout(function () {
                if(num==1) {
                    $(".lunDiv3 .title").addClass("DivHid2");
                    $(".lunDiv3 .change-2").addClass("DivHid2");
                    $(".lunDiv3 .change-3").addClass("DivHid2");
                    scaleImg(num);
                    setTimeout(function () {
                        if(num==1) {
                            $(".lunDiv3 .text").addClass("DivHid2");
                            $(".lunDiv3 .more-btn").addClass("DivHid2");
                            setTimeout(function () {
                                if(num==1) {
                                    $(".lunDiv3").removeClass("lunActive");
                                }
                            }, 400);
                        }
                    }, 400)
                }
            },400);
        }
    }
}
/*第四副页面*/
function lunDiv4Show() {
    var num=0;
    if(pageFlag==3){
        $(".lunDiv4").addClass("lunActive");
        setTimeout(function () {
            $(".lunDiv4 .pic-box").removeClass("DivHid1 DivHid2");
            $(".lunDiv4 .sub").removeClass("DivHid1 DivHid2");
            setTimeout(function () {
                $(".lunDiv4 .title").removeClass("DivHid1 DivHid2");
                $(".lunDiv4 .text4").removeClass("DivHid1 DivHid2");
                setTimeout(function () {
                    $(".lunDiv4 .btns").removeClass("DivHid1 DivHid2");
                    $(".lunDiv4 .skew-img").removeClass("DivHid3");
                    start=0;
                },400);
            },400);
        },400);
    }else if(pageFlag<3){
        num++;
        if(num==1){
            $(".lunDiv4 .pic-box").removeClass("DivHid2");
            $(".lunDiv4 .sub").removeClass("DivHid2");
            $(".lunDiv4 .title").removeClass("DivHid2");
            $(".lunDiv4 .text4").removeClass("DivHid2");
            $(".lunDiv4 .btns").removeClass("DivHid2");
            $(".lunDiv4 .pic-box").addClass("DivHid1");
            $(".lunDiv4 .sub").addClass("DivHid1");
            setTimeout(function () {
                if(num==1) {
                    $(".lunDiv4 .title").addClass("DivHid1");
                    $(".lunDiv4 .text4").addClass("DivHid1");
                    setTimeout(function () {
                        if(num==1) {
                            $(".lunDiv4 .btns").addClass("DivHid1");
                            setTimeout(function () {
                                if(num==1) {
                                    $(".lunDiv4 .skew-img").addClass("DivHid3");
                                    $(".lunDiv4").removeClass("lunActive");
                                }
                            }, 400);
                        }
                    }, 400)
                }
            },400);
        }
    }else if(pageFlag>3){
        num++;
        if(num==1){
            $(".lunDiv4 .pic-box").removeClass("DivHid1");
            $(".lunDiv4 .sub").removeClass("DivHid1");
            $(".lunDiv4 .title").removeClass("DivHid1");
            $(".lunDiv4 .text4").removeClass("DivHid1");
            $(".lunDiv4 .btns").removeClass("DivHid1");
            $(".lunDiv4 .sub").addClass("DivHid2");
            $(".lunDiv4 .title").addClass("DivHid2");
            setTimeout(function () {
                if(num==1) {
                    $(".lunDiv4 .text4").addClass("DivHid2");
                    $(".lunDiv4 .btns").addClass("DivHid2");
                    setTimeout(function () {
                        if(num==1) {
                            $(".lunDiv4 .pic-box").addClass("DivHid2");
                            setTimeout(function () {
                                if(num==1) {
                                    $(".lunDiv4 .skew-img").addClass("DivHid3");
                                    $(".lunDiv4").removeClass("lunActive");
                                }
                            }, 400);
                        }
                    }, 400)
                }
            },400);
        }
    }
}
/*第五副页面*/
function lunDiv5Show() {
    var num=0;
    if(pageFlag==4){
        $(".lunDiv5").addClass("lunActive");
        setTimeout(function () {
            $(".link-btn-1 img").removeClass("DivHid1 DivHid2");
            $(".link-btn-2 img").removeClass("DivHid1 DivHid2");
            setTimeout(function () {
                $(".link-btn-1 span").removeClass("DivHid1 DivHid2");
                $(".link-btn-2 em").removeClass("DivHid1 DivHid2");
                setTimeout(function () {
                    $(".link-btn-1 em").removeClass("DivHid1 DivHid2");
                    $(".link-btn-2 span").removeClass("DivHid1 DivHid2");
                    start=0;
                },400);
            },400);
        },400);
    }else if(pageFlag<4){
        num++;
        if(num==1){
            $(".link-btn-1 img").removeClass("DivHid2");
            $(".link-btn-2 img").removeClass("DivHid2");
            $(".link-btn-1 span").removeClass("DivHid2");
            $(".link-btn-2 em").removeClass("DivHid2");
            $(".link-btn-1 em").removeClass("DivHid2");
            $(".link-btn-2 span").removeClass("DivHid2");
            $(".link-btn-2 em").addClass("DivHid1");
            setTimeout(function () {
                if(num==1) {
                    $(".link-btn-2 img").addClass("DivHid1");
                    setTimeout(function () {
                        if(num==1) {
                            $(".link-btn-1 img").addClass("DivHid1");
                            $(".link-btn-1 span").addClass("DivHid1");
                            $(".link-btn-1 em").addClass("DivHid1");
                            $(".link-btn-2 span").addClass("DivHid1");
                            setTimeout(function () {
                                if(num==1) {
                                    $(".lunDiv5").removeClass("lunActive");
                                }
                            }, 400);
                        }
                    }, 400)
                }
            },400);
        }
    }else if(pageFlag>4){
        num++;
        if(num==1){
            $(".link-btn-1 img").removeClass("DivHid1");
            $(".link-btn-2 img").removeClass("DivHid1");
            $(".link-btn-1 span").removeClass("DivHid1");
            $(".link-btn-2 em").removeClass("DivHid1");
            $(".link-btn-1 em").removeClass("DivHid1");
            $(".link-btn-2 span").removeClass("DivHid1");
            $(".link-btn-1 img").addClass("DivHid2");
            setTimeout(function () {
                if(num==1) {
                    $(".link-btn-2 img").addClass("DivHid2");
                    $(".link-btn-1 span").addClass("DivHid2");
                    setTimeout(function () {
                        if(num==1) {
                            $(".link-btn-2 em").addClass("DivHid2");
                            $(".link-btn-2 span").addClass("DivHid2");
                            $(".link-btn-1 em").addClass("DivHid2");
                            setTimeout(function () {
                                if(num==1) {
                                    $(".lunDiv5").removeClass("lunActive");
                                }
                            }, 400);
                        }
                    }, 400)
                }
            },400);
        }
    }
}
/*第六副页面*/
function lunDiv6Show() {
    var num=0;
    if(pageFlag==5){
        $(".lunDiv6").addClass("lunActive");
        setTimeout(function () {
            $(".lunDiv6 .subtit").removeClass("DivHid1 DivHid2");
            $(".event-1").removeClass("DivHid1 DivHid2");
            $(".event-3").removeClass("DivHid1 DivHid2");
            setTimeout(function () {
                $(".event-2").removeClass("DivHid1 DivHid2");
                $(".event-4").removeClass("DivHid1 DivHid2");
                setTimeout(function () {
                    $(".event-5").removeClass("DivHid1 DivHid2");
                    $(".brand").removeClass("DivHid1 DivHid2");
                    $(".main-pic").removeClass("DivHid1 DivHid2");
                    $(".act-time-1").removeClass("DivHid2");
                    $(".act-time-2").removeClass("DivHid1");
                    start=0;
                },400);
            },400);
        },400);
    }else if(pageFlag<5){
        num++;
        if(num==1){
            $(".lunDiv6 .subtit").removeClass("DivHid2");
            $(".event-1").removeClass("DivHid2");
            $(".event-3").removeClass("DivHid2");
            $(".event-2").removeClass("DivHid2");
            $(".event-4").removeClass("DivHid2");
            $(".event-5").removeClass("DivHid2");
            $(".brand").removeClass("DivHid2");
            $(".main-pic").removeClass("DivHid2");
            $(".event-5").addClass("DivHid1");
            $(".brand").addClass("DivHid1");
            $(".main-pic").addClass("DivHid1");
            setTimeout(function () {
                if(num==1) {
                    $(".event-2").addClass("DivHid1");
                    $(".event-4").addClass("DivHid1");
                    setTimeout(function () {
                        if(num==1) {
                            $(".lunDiv6 .subtit").addClass("DivHid1");
                            $(".event-1").addClass("DivHid1");
                            $(".event-3").addClass("DivHid1");
                            $(".act-time-1").addClass("DivHid2");
                            $(".act-time-2").addClass("DivHid1");
                            setTimeout(function () {
                                if(num==1) {
                                    $(".lunDiv6").removeClass("lunActive");
                                }
                            }, 400);
                        }
                    }, 400)
                }
            },400);
        }
    }else if(pageFlag>5){
        num++;
        if(num==1){
            $(".lunDiv6 .subtit").removeClass("DivHid1");
            $(".event-1").removeClass("DivHid1");
            $(".event-3").removeClass("DivHid1");
            $(".event-2").removeClass("DivHid1");
            $(".event-4").removeClass("DivHid1");
            $(".event-5").removeClass("DivHid1");
            $(".brand").removeClass("DivHid1");
            $(".main-pic").removeClass("DivHid1");
            $(".event-5").addClass("DivHid2");
            $(".brand").addClass("DivHid2");
            $(".main-pic").addClass("DivHid2");
            setTimeout(function () {
                if(num==1) {
                    $(".event-2").addClass("DivHid2");
                    $(".event-4").addClass("DivHid2");
                    setTimeout(function () {
                        if(num==1) {
                            $(".lunDiv6 .subtit").addClass("DivHid2");
                            $(".event-1").addClass("DivHid2");
                            $(".event-3").addClass("DivHid2");
                            $(".act-time-1").addClass("DivHid2");
                            $(".act-time-2").addClass("DivHid1");
                            setTimeout(function () {
                                if(num==1) {
                                    $(".lunDiv6").removeClass("lunActive");
                                }
                            }, 400);
                        }
                    }, 400)
                }
            },400);
        }
    }
}
/*第七副页面*/
function lunDiv7Show() {
    var num=0;
    if(pageFlag==6){
        $(".lunDiv7").addClass("lunActive");
        setTimeout(function () {
            $(".con8-tit").removeClass("DivHid1");
            setTimeout(function () {
                $(".con8-tab").removeClass("DivHid1");
                setTimeout(function () {
                    $(".team").removeClass("DivHid1");
                    start=0;
                    setTimeout(hid,400);
                },400);
            },400);
        },400);
    }else if(pageFlag<6){
        num++;
        if(num==1){
            $(".con8-tit").addClass("DivHid1");
            setTimeout(function () {
                if(num==1) {
                    $(".con8-tab").addClass("DivHid1");
                    setTimeout(function () {
                        if(num==1) {
                            $(".team").addClass("DivHid1");
                            setTimeout(function () {
                                if(num==1) {
                                    $(".lunDiv7").removeClass("lunActive");
                                    $(".team-con").css("opacity", "0");
                                }
                            }, 400);
                        }
                    }, 400)
                }
            },400);
        }
    }
}
/*第七副页面*/
/*战队logo的渐隐渐现*/
function hid() {
    if(teamFlag==0) {
        $(".team-con:eq(1)").stop().animate({"opacity": "1"}, 100, function () {
            if(teamFlag==0) {
                $(".team-con:eq(7)").stop().animate({"opacity": "1"}, 100, function () {
                    if(teamFlag==0) {
                        $(".team-con:eq(2)").stop().animate({"opacity": "1"}, 100, function () {
                            if(teamFlag==0) {
                                $(".team-con:eq(8)").stop().animate({"opacity": "1"}, 100, function () {
                                    if(teamFlag==0) {
                                        $(".team-con:eq(10)").stop().animate({"opacity": "1"}, 100, function () {
                                            if(teamFlag==0) {
                                                $(".team-con:eq(3)").stop().animate({"opacity": "1"}, 100, function () {
                                                    if(teamFlag==0) {
                                                        $(".team-con:eq(4)").stop().animate({"opacity": "1"}, 100, function () {
                                                            if(teamFlag==0) {
                                                                $(".team-con:eq(9)").stop().animate({"opacity": "1"}, 100, function () {
                                                                    if(teamFlag==0) {
                                                                        $(".team-con:eq(6)").stop().animate({"opacity": "1"}, 100, function () {
                                                                            if(teamFlag==0) {
                                                                                $(".team-con:eq(11)").stop().animate({"opacity": "1"}, 100, function () {
                                                                                    if(teamFlag==0) {
                                                                                        $(".team-con:eq(5)").stop().animate({"opacity": "1"}, 100, function () {
                                                                                            if(teamFlag==0) {
                                                                                                $(".team-con:eq(12)").stop().animate({"opacity": "1"}, 100, function () {
                                                                                                    if(teamFlag==0) {
                                                                                                        $(".team-con:eq(14)").stop().animate({"opacity": "1"}, 100, function () {
                                                                                                            if(teamFlag==0) {
                                                                                                                $(".team-con:eq(13)").stop().animate({"opacity": "1"}, 100, function () {
                                                                                                                    if(teamFlag==0) {
                                                                                                                        $(".team-con:eq(15)").stop().animate({"opacity": "1"}, 100, function () {
                                                                                                                            if(teamFlag==0) {
                                                                                                                                $(".team-con:eq(17)").stop().animate({"opacity": "1"}, 100, function () {
                                                                                                                                    if(teamFlag==0) {
                                                                                                                                        $(".team-con:eq(16)").stop().animate({"opacity": "1"}, 100);
                                                                                                                                    }
                                                                                                                                });
                                                                                                                            }
                                                                                                                        });
                                                                                                                    }
                                                                                                                });
                                                                                                            }
                                                                                                        });
                                                                                                    }
                                                                                                });
                                                                                            }
                                                                                        });
                                                                                    }
                                                                                });
                                                                            }
                                                                        });
                                                                    }
                                                                });
                                                            }
                                                        });
                                                    }
                                                });
                                            }
                                        });
                                    }
                                });
                            }
                        });
                    }
                });
            }
        });
    }
}
/*战队菜单分组*/
var teamFlag=0;
$(".con8-li1").hover(function () {
    teamFlag=1;
    $(".team-con").css("opacity","0");
    $(".team-con").each(function () {
        if($(this).hasClass("team-con-rw")){
            $(this).css("opacity","1");
        }
    });
},function () {
    teamFlag=0;
    setTimeout(hid,800);
});
$(".con8-li2").hover(function () {
    teamFlag=1;
    $(".team-con").css("opacity","0");
    $(".team-con").each(function () {
        if($(this).hasClass("team-con-xz")){
            $(this).css("opacity","1");
        }
    });
},function () {
    teamFlag=0;
    setTimeout(hid,800);
});


