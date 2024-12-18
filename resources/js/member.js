$(document).ready(function () {

	//비밀번호 보기
	$(".btn_pw_view").on("click", function(){
		$(this).toggleClass(AC);
	});
	//올림픽공원 관심분야 등록여부
	$(".olpark_plus input[type=radio]").click(function(){
		if($('#olparkJoinY').is(":checked") == true){
			$('.interest_area').show();
		}else{
			$('.interest_area').hide();
		}
	});
	
    // 탭메뉴     
    $(".tabs .tab_nav").on("click", function () {
        tabs(this, ".tab_cont")
    })

    //아코디언    
    $(".btn_view").on("click", function(){
        active(this, "accordion") 
		var $txt = $(this).find("span").text();
		if($txt == "내용보기") $txt = "내용닫기";
		else $txt = "내용보기";
		$(this).find("span").text($txt);
    })  

    // web accessibility
    $("[class*='xi-'], [class*='icon_']").attr("aria-hidden", "true")
    $("a[target='_blank']").attr("title", "새창으로 열림")

    //팝업레이어
    var $wrap = $("#wrap");
    $(".btn_popopen").on("click", function(){
        var obj = $(this).data('id');
            $obj = $("."+obj);
            $obj.fadeIn();
        $wrap.addClass("dimm");
        if($obj.height() % 2 != 0){
            $obj.css("height",""+ ($obj.height()+1) +"px");
        }
    })
    $(".modal_close, .btn_cancel").on("click", function(){
        $(".modal_popup_wrap").fadeOut();
    })

	// footer
    $(".relate_site .title").on("click", function () {
        active(this, "toggle", 1)
    })


})

