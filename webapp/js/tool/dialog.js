/**
 * 1 文本
 * 2 变量
 * 3 组块
 * 注意：每个弹出窗口 都要配置一下css  .m-dialog{position:flexd; opacity:0; top:0;
 * left:0;}
 */
define('dialog',['jquery'],function() {
	(function($){
		var defaults = {
			'container':'#container',
			'ease':'middle',  //middle scale
			'css3Style':'active'  //这里主要是用来渲染页面效果  后面的值是class
		};

		var win = $(window),container,opts;

		$.fn.dialog = function(options){
			opts = $.extend({}, defaults , options||{});
			container = $(opts.container);
			var windowHeight=$(window).height(),
		        windowWidth=$(window).width(),
		        popHeight=container.height(),
		        popWidth=container.width(),
		        popY=(windowHeight-popHeight)/2,
		        popX=(windowWidth-popWidth)/2;

			return this.each(function(){
				switch(opts.ease){
					case 'middle':
						middle();
					break;
					case 'scale':
						scale();
					break;
				};
			});

			//显示的位置
			function middle(){
				container.css('left',popX);
				container.animate({
					top:popY,
					opacity:1
				},300);
			};
			//显示的动画
			function scale(){
				
			};
			//是否支持css的某个属性
			function isSuportCss(property){
				var body = $("body")[0];
				for(var i=0; i<property.length;i++){
					if(property[i] in body.style){
						return true;
					}
				}
				return false;
			};
		};
	})(jQuery);
});