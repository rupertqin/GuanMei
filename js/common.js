var browser={
    versions:function(){
        var u = navigator.userAgent, app = navigator.appVersion;
        return {
            trident: u.indexOf('Trident') > -1, //IE内核
            presto: u.indexOf('Presto') > -1, //opera内核
            webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,//火狐内核
            mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
            iPhone: u.indexOf('iPhone') > -1 , //是否为iPhone或者QQHD浏览器
            iPad: u.indexOf('iPad') > -1, //是否iPad
            webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
            weixin: u.indexOf('MicroMessenger') > -1, //是否微信 （2015-01-22新增）
            qq: u.match(/\sQQ/i) == " qq" //是否QQ
        };
    }(),
    language:(navigator.browserLanguage || navigator.language).toLowerCase()
}
$(function () {
	var $toggle = $('.menu-toggle')
	var $menu = $('.navigation ul')
	$('.menu-toggle').on('touchstart', function (e) {
		e.stopPropagation()
		$menu.toggle()
	})
	$(document).on('touchstart', function () {
		if($menu.is(':visible')) $menu.fadeOut(600)
	})
})

// modal
var tpl = "<div id='myModal' class='modal fade'>" +
                "<div class='modal-dialog'>" +
                    "<div class='modal-content'>" +
                    "</div>" +
                "</div>" +
            "</div>";

$modal = $(tpl)
$modalContent = $modal.find(".modal-content")
$modal.click(function() { 
    $modal.hide(); 
    $('body').css("overflow","auto")
});
$('body').append($modal);