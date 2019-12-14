;(function($){
	"use strict";
	
	$.fn.banner2 = function(options){
//		功能...
//		1.默认参数的处理
//		console.log(this)
//		this.left = options.left;		×
		this._obj_ = {
			list:options.list===false ? false : true,
			index:options.index || 0,
			autoPlay:options.autoPlay===false ? false : true,
			delayTime:options.delayTime || 2000,
			moveTime:options.moveTime || 200,
//			假设上一张是最后一个索引
			iPrev:options.items.length-1
		};
		
	
		var that = this;
//		2.初始化布局
		this._obj_.init = function(){
//			给大框加溢出隐藏
			that.css({
				overflow:"hidden"
			});
			
//			每张图片的定位位置
			options.items.css({
				position:"absolute",
				left:options.items.eq(0).width(),
				top:0
			}).eq(this.index).css({
				left:0
			})
		}
		this._obj_.init();
		
		
		function btnLeft(){
//			3-2-1.计算索引
			if(that._obj_.index == 0){
				that._obj_.index = options.items.length-1;
				that._obj_.iPrev = 0;
			}else{
				that._obj_.index--;
				that._obj_.iPrev = that._obj_.index+1;
			}
//			3-3-1.开始移动动画
			that._obj_.btnMove(1);
		}
		
		function btnRight(){
//			3-2-2.计算索引
			if(that._obj_.index == options.items.length-1){
				that._obj_.index = 0;
				that._obj_.iPrev = options.items.length-1
			}else{
				that._obj_.index++;
				that._obj_.iPrev = that._obj_.index-1;
			}
//			3-3-2.开始移动动画
			that._obj_.btnMove(-1);
		}
		
//		移动动画功能的定义
		this._obj_.btnMove = function(type){
			options.items.eq(that._obj_.iPrev).css({
				left:0
			}).stop().animate({
				left:options.items.eq(0).width() * type
			},that._obj_.moveTime).end().eq(that._obj_.index).css({
				left:-options.items.eq(0).width() * type
			}).stop().animate({
				left:0
			},that._obj_.moveTime);
			
			
//			当list没有的时候,在左右按钮中,不应该操作list的样式
			if(!that._obj_.list) return;
			that.find(".list").children().css({
				background:"rgba(200,200,200,0.6)"
			}).eq(that._obj_.index).css({
				background:"red"
			})
		}
		
//		3.判断是否传入左右按钮，有就做功能，没有就跳过
		if(options.left != undefined && options.left.length > 0 && options.right != undefined && options.right.length > 0 ){
//			3-1-1.绑定事件
			options.left.click(btnLeft)
//			3-1-2.绑定事件
			options.right.click(btnRight);
		}
			
//		5.autoPlay为true，有自动轮播
		if(this._obj_.autoPlay){
			
			this._obj_.t = setInterval(()=>{
//				手动执行右按钮的事件处理函数,但是前提得先把右按钮的事件处理函数和相关功能单独封装出来
				btnRight()
				
			},this._obj_.delayTime);
			
			
			this.hover(function(){
				clearInterval(that._obj_.t);
			},function(){
				that._obj_.t = setInterval(()=>{
					
					btnRight();
					
				},that._obj_.delayTime)
			})
		}
		
//		封装思想
	}
})(jQuery);

