//歌单推荐滚动
var pic_index = 0;

$('.playlist .btn_slide_right').on('click',function(){
    pic_index = (pic_index + 1) % 2;
    $('.slide_action ul').css('transform','translateX(-' + pic_index * 8 + '%)');
    $('.playlist_switch a').find('span').removeClass('active');
    $('.playlist_switch a').eq(pic_index).find('span').addClass('active');
})
$('.playlist .btn_slide_left').on('click',function(){
    pic_index = (pic_index + 1) % 2;
    $('.slide_action ul').css('transform','translateX(-' + pic_index * 8 + '%)');
    $('.playlist_switch a').find('span').removeClass('active');
    $('.playlist_switch a').eq(pic_index).find('span').addClass('active');
})


$('.playlist_switch a').on('click',function(){
    $(this).find('span').addClass("active").parent().siblings().children().removeClass("active");
    pic_index = $(this).index();
    $('.slide_action ul').css('transform','translateX(-' + pic_index * 8 + '%');
})

//新歌首发滚动

var $a=$(".newsong_playlist_switch a");
var $s=$(".newsong_playlist_switch span");
var cArr=["p5","p4","p3","p2","p1"];
var index=0;
$(".newsong .btn_slide_right").click(
    function(){
    nextimg();
    }
)
$(".newsong .btn_slide_left").click(
    function(){
    previmg();
    }
)
//上一张
function previmg(){
    cArr.unshift(cArr[3]);
    cArr.pop();
    $(".newsong_scroll ul li").each(function(i,e){
        $(e).removeClass().addClass(cArr[i]);
    })
    index--;
    if (index<0) {
        index=4;
    }
    show();
}

//下一张
function nextimg(){
    cArr.push(cArr[0]);
    cArr.shift();
    $(".newsong_scroll ul li").each(function(i,e){
        $(e).removeClass().addClass(cArr[i]);
    })
    index++;
    if (index>4) {
        index=0;
    }
    show();
}

//通过底下按钮点击切换
$a.each(function(){
    $(this).click(function(){
        var myindex=$(this).index();
        var b=myindex-index;
        if(b==0){
            return;
        }
        else if(b>0) {

            var newarr=cArr.splice(0,b);
            cArr=$.merge(cArr,newarr);
            $(".newsong_scroll ul li").each(function(i,e){
            $(e).removeClass().addClass(cArr[i]);
            })
            index=myindex;
            show();
        }
        else if(b<0){

            cArr.reverse();
            var oldarr=cArr.splice(0,-b)
            cArr=$.merge(cArr,oldarr);
            cArr.reverse();
            $(".newsong_scroll ul li").each(function(i,e){
            $(e).removeClass().addClass(cArr[i]);
            })
            index=myindex;
            show();
        }
    })
})

//改变底下按钮的背景色
function show(){
        $($s).eq(index).addClass("active").parent().siblings().children().removeClass("active");
}

//点击class为p2的元素触发上一张照片的函数
$(document).on("click",".p2",function(){
    previmg();
    return false;//返回一个false值，让a标签不跳转
});

//点击class为p4的元素触发下一张照片的函数
$(document).on("click",".p4",function(){
    nextimg();
    return false;
});

//			鼠标移入box时清除定时器
$(".newsong").mouseover(function(){
    clearInterval(timer);
})

//			鼠标移出box时开始定时器
$(".newsong").mouseleave(function(){
    timer=setInterval(nextimg,4000);
})

//			进入页面自动开始定时器
timer=setInterval(nextimg,4000);




	// 点击切换
/* 	$('.btn-scroll-right').on('click',function(){
		pic_index = (pic_index + 1) % 4;
		$('.scroll-pics ul').css('transform','translateX(-' + pic_index * 25 + '%)');
		$('.scroll-index ul li').removeClass('active');
		$('.scroll-index ul li').eq(pic_index).addClass('active');
	})
	$('.btn-scroll-left').on('click',function(){
		pic_index = (pic_index + 3) % 4;
		$('.scroll-pics ul').css('transform','translateX(-' + pic_index * 25 + '%)');
		$('.scroll-index ul li').removeClass('active');
		$('.scroll-index ul li').eq(pic_index).addClass('active');
	})
	$('.scroll-index ul li').on('click',function(){
		$(this).addClass('active').siblings().removeClass('active');
		pic_index = $(this).index();
		$('.scroll-pics ul').css('transform','translateX(-' + pic_index * 25 + '%');
	})
 */
/* $('.newsong .btn_slide_right').on('click',function(){
    pic_index = (pic_index + 1) % 2;
    $('.slide_action ul').css('transform','translateX(-' + pic_index * 25 + '%)');
    $('.playlist_switch a').removeClass('active');
    $('.playlist_switch a').eq(pic_index).addClass('active');
})
$('.newsong .btn_slide_left').on('click',function(){
    pic_index = (pic_index + 1) % 2;
    $('.slide_action ul').css('transform','translateX(-' + pic_index * 25 + '%)');
    $('.playlist_switch a').removeClass('active');
    $('.playlist_switch a').eq(pic_index).addClass('active');
}) */







