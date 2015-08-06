// $(function(){
// 	$('#j-share-box').webShare({
// 		'url':'',
// 		'title':'',
// 		'description':'',
// 		'img':'',
// 		'shareType':['sina','zone']
// 	});

// 	$('.j-showBox').click(function(){
// 		$('#container').dialog({
// 			'ease':'middle'
// 		})
// 	})
// })

requirejs.config({
    baseUrl: 'js/tool',
    paths: {
        app: '../app'
    }
});


requirejs(['jquery','dialog'],
function($,dialog) {
    $('.j-showBox').click(function(){
		$('#container').dialog({
			'ease':'middle'
		})
	})
});