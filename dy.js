// JavaScript Document
$
(document).ready(function () {
	initRadius();
});
 
var number = 1;  //设置为全局变量
 
//轮播图图片主体
function startSlide() {
	dealRadius(number);
	if(number == 4) {		//此处为4,因为5张图片,如果为其他的减1即可
		number = 0;
		$('#slide_img1').css({left: '0px'});  //处理无缝衔接图
		 dealRadius(0); // 处理无缝衔接小圆点的跳转
	}
	number++;
	var imageLeft = -1200 * number;  //1366是移动的距离,根据自己图片的大小更改
	$('#slide_img1').animate({left: imageLeft});
}	
var timer = setInterval(startSlide,3000);//3000是3秒,每次间隔3秒钟滑动一次
 
 
 
//小圆点的轮播实现
function dealRadius(num) {
	var lis = $('#num li');
	lis.eq(num).css('background-color', 'red');
	for(var i = 0; i < num; i++) {
		lis.eq(i).css('background-color','white');
	}
	for(var i = num + 1; i < 4; i++) {
		lis.eq(i).css('background-color','white');
	}
}
//初始化小圆点
function initRadius() {
	var lis = $('#num li');
	lis.eq(0).css('background-color', 'red');
}
//左右按钮的实现
$('#left').mousedown (function() {
	clearInterval(timer);
	if(number == 0) {
		$('#slide_img1').css({left: '-4000px'}); 
		number = 4;
	}
	var imageLeft = -1200 * (number-1);
	$('#slide_img1').animate({left: imageLeft});
	number--;
	if(number == 0) {
		dealRadius(3);
	} else {
			dealRadius(number-1);
	}
});
$('#left').mouseup(function() {
	timer = setInterval(startSlide,3000);
});
$('#right').mousedown (function() {
	clearInterval(timer);
	if(number == 4) {
		number = 0;
		$('#slide_img1').css({left: '0px'});  //处理无缝衔接图
	}
	var imageLeft = -1200 * (number+1);
	$('#slide_img1').animate({left: imageLeft});
	dealRadius(number);
	number++;
});
$('#right').mouseup(function() {
	timer = setInterval(startSlide,3000);
});
//小圆点的点击实现
$('#num').on('click','li',function(){
	clearInterval(timer);
	var _number = $(this).index() + 1;
	number = _number
	dealRadius(number-1);
	var imageLeft = -1200 * number;
	$('#slide_img1').animate({left: imageLeft});
	timer = setInterval(startSlide,3000);
});

        var obox = document.getElementById("box");
        var odown = document.getElementById("down");
        var oli = document.querySelectorAll("li");
        console.log(oli);
        var timer;
        //当点击obox时，呈现出下拉列表的内容，给个延时效果
        obox.onclick = function(){
            clearInterval(timer);
            timer = setInterval(function(){
                odown.style.display = "block";
            },300)
            ///选中列表中的某一项并将其呈现在box中,隐藏下拉列表
            for(var i=0;i<oli.length;i++){
                oli[i].n = i;
                oli[i].onclick = function(){
                    obox.innerHTML = this.innerHTML;
                    odown.style.display = "none";
                    clearInterval(timer);
                }
            }
        }

