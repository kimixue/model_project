/************************************************************
* Project:         webShare
* Author:          KIMI
* Date:            2015-08-05
* Desc:            webShare多功能分享插件基于jquery
* Copyright:       NetEase.com Inc. All rights reserved.
************************************************************/
/**
 * 1 分为3种情况  数组的时候  对象的时候  字符串的时候
 * 
 * 
 */
(function($){
	var defaults = {
		'url':'',
		'title':'webShare',
		'description':'多功能分享插件基于jquery 还在持续更新中~~~',
		'img':'',
		'shareType' : ['sina','zone']
	};
	var win = $(window),opts;
	
	var SP = $.fn.webShare = function(options){
		opts = $.extend({}, defaults , options||{});
		return this.each(function(){
			$(this).find('.j-share').click(function(){
				var $dataType = $(this).attr('data-type');
				shareTextTitle();
				$.each(opts.shareType,function(i,v){
					shareInit($dataType,v);
				});
			})
		});
	};
	//管理分享
	function shareInit(type,val){
		if(type == val && val == 'sina'){
			sina();
		};
		if(type == val && val == 'zone'){
			zone();
		}
	};
	//分享文案
	// function shareTextTitle(){
	// 	var title = opts.title;
	// 	alert(typeof title);
	// 	if(typeof title == 'object'){
	// 		// if()
	// 	}
	// 	return title;
	// };
	//新浪
	function sina(){
		var p = {
            url: opts.url,
            title: opts.description,
            appkey: 2526354894,
            pic: opts.pic
        };
        var s = [];
        for (var i in p) {
            s.push(i + '=' + encodeURIComponent(p[i] || ''));
        };
		shareOpen("http://v.t.sina.com.cn/share/share.php?" + s.join('&'));
	};
	//qq空间
	function zone(){
		var p = {
	            url: opts.url,
	            desc: opts.description,
	            /*默认分享理由(可选)*/
	            summary: "",
	            /*摘要(可选)*/
	            title: opts.title,
	            /*分享标题(可选)*/
	            site: "网易",
	            /*分享来源 如：腾讯网(可选)*/
	            pics: opts.pic /*分享图片的路径(可选)*/
	        };
	    var s = [];
        for (var i in p) {
            s.push(i + '=' + encodeURIComponent(p[i] || ''));
        };
        shareOpen("http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?" + s.join('&'));
	};


	function shareOpen(linkUrl){
		window.open(linkUrl, "分享", 'width=700,height=680,top=0,left=0,toolbar=no,menubar=no,scrollbars=no,location=yes,resizable=no,status=no');
	};

})(jQuery);