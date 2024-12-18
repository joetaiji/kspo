$(document).ready(function () { 

/* issue */
	const $visualIssue = $(".issue .list")
	$visualIssue.slick({
        slidesToShow: 1,
        slidesToScroll: 1,        
		vertical: true,
        autoplay: true,         
        dots:false   
    })
	$(".control_pause").on("click", function () {
        $(this).removeClass(AC).siblings("button").addClass(AC)
        $visualIssue.slick("slickPause")
    })
    $(".control_play").on("click", function () {
        $(this).removeClass(AC).siblings("button").addClass(AC)
        $visualIssue.slick("slickPlay")
    });


//section active
$(window).on("load scroll", function () {
	$(".section").each(function (i) {
		contTop = $(this)[0].getBoundingClientRect().top
		//콘텐츠 active
		if (contTop < $(window).height()/2) {
			//$(this).addClass(AC)
			$(".section_nav").find("li").eq(i).addClass(AC).siblings().removeClass(AC)
		}else{
			$(this).removeClass(AC)
		}
	})
})
$(".section_nav").find("li>a").on("click", function (e) {
	$("html,body").stop().animate({
		scrollTop: $(this.hash).offset().top
	}, 800)
	e.preventDefault()
})



/* visual */
	const $visual = $(".visual_section .list");
    $visual.on('init', function (event, slick) {
        setTimeout( function() {
            $('.visual_section .slick-dots').addClass("video");
        });			
    }).slick({
        slidesToScroll: 1,
        infinite: true,        
        arrows: false,
		fade: true,
        slidesToShow: 1,
		autoplay: true,
		pauseOnHover: false,
		speed: 500,
		dots: true,
		autoplaySpeed: 29300,
		customPaging: function(slider, i) { 
			var dotNumber = $(slider.$slides[i]).data('dot-number');
			return '<button class="tab">' + dotNumber + '</button>';            
        }
    }).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
		$('.visual_section .slick-dots').removeClass("active video");	
		$("#video").get(0).pause();	
		$("#video").get(0).currentTime = 0;

	}).on('afterChange', function (event, slick, currentSlide, nextSlide) {		
		var vid = $(slick.$slides[currentSlide]).find('video');		
        if (vid.length > 0) {	
			$visual.slick('slickPause');			
          	vid.get(0).play();
			vid.on('ended', function() {				
				$visual.slick('slickSetOption', 'autoplaySpeed', 0);
				$visual.slick('slickPlay');
			});
			$('.visual_section .slick-dots').addClass("video");
        }else{
			$visual.slick('slickSetOption', 'autoplaySpeed', 4000); 	
			$('.visual_section .slick-dots').addClass(AC);
			
		}
	})		
	
	$(".control_pause").on("click", function () {
        $(this).removeClass(AC).siblings("button").addClass(AC)
        $visual.slick("slickPause")
    })
    $(".control_play").on("click", function () {
        $(this).removeClass(AC).siblings("button").addClass(AC)
        $visual.slick("slickPlay")
    });


	
    
	
/* section1 */
    $(".acctoggle_contrast").on("click", function(){
        $("body").toggleClass("contrast");
    });
	

    const $sect01Sports = $(".section01 .sports_center .item_list")
    $sect01Sports.on('init', function (event, slick) {
        $(this).append('<div class="slick-counter"><span class="current"></span> <i></i> <span class="total"></span></div>');
        $(this).find('.current').text(slick.currentSlide + 1);
        $(this).find('.total').text(slick.slideCount);
    }).slick({
        slidesToShow: 1,
        slidesToScroll: 1,        
        autoplay: false,         
        dots:false        
    }).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
		$(this).find('.current').text(nextSlide + 1);
	})
	$(".control_pause").on("click", function () {
        $(this).removeClass(AC).siblings("button").addClass(AC)
        $sect01Sports.slick("slickPause")
    })
    $(".control_play").on("click", function () {
        $(this).removeClass(AC).siblings("button").addClass(AC)
        $sect01Sports.slick("slickPlay")
    });

	//announce
    $(".announce .tabs .tab_nav, .sns .tabs .tab_nav").on("click", function () {
        active(this)
    })  
	const $sect01media = $(".section01 .media_data .item_list")
    $sect01media.slick({
        slidesToShow: 1,
        slidesToScroll: 1,        
        autoplay: false, 
		arrows: false,        
        dots:true        
    });

	const $sect01Popupzone = $(".section01 .popupzone .item_list")
    $sect01Popupzone.on('init', function (event, slick) {
        $(this).append('<div class="slick-counter"><span class="current"></span> <i></i> <span class="total"></span></div>');
        $(this).find('.current').text(slick.currentSlide + 1);
        $(this).find('.total').text(slick.slideCount);
    }).slick({
        slidesToShow: 1,
        slidesToScroll: 1,        
        autoplay: false,         
        dots:false        
    }).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
		$(this).find('.current').text(nextSlide + 1);
	})
	$(".control_pause").on("click", function () {
        $(this).removeClass(AC).siblings("button").addClass(AC)
        $sect01Popupzone.slick("slickPause")
    })
    $(".control_play").on("click", function () {
        $(this).removeClass(AC).siblings("button").addClass(AC)
        $sect01Popupzone.slick("slickPlay")
    });

/* section2 */

    const $sect02biz = $(".section02 .item_list")
    $sect02biz.on('init', function (event, slick) {
        $(this).append('<div class="slick-counter"><span class="current"></span> <i></i> <span class="total"></span></div>');
        $(this).find('.current').text(slick.currentSlide + 1);
        $(this).find('.total').text(slick.slideCount);
    }).slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, 
        dots:false,
		speed: 500,
		autoplaySpeed: 10000    
    }).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
		$(this).find('.current').text(nextSlide + 1);
	})
	$(".control_pause").on("click", function () {
        $(this).removeClass(AC).siblings("button").addClass(AC)
        $sect02biz.slick("slickPause")
    })
    $(".control_play").on("click", function () {
        $(this).removeClass(AC).siblings("button").addClass(AC)
        $sect02biz.slick("slickPlay")
    });
	

/* section3 */
const $sect03Contribute = $(".section03 .contribute .item_list")
$sect03Contribute.on('init', function (event, slick) {
	$(this).append('<div class="slick-counter"><span class="current"></span> <i></i> <span class="total"></span></div>');
	$(this).find('.current').text(slick.currentSlide + 1);
	$(this).find('.total').text(slick.slideCount);
}).slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,         
    dots:false,
    responsive: [       
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1
            }
        }
    ]
}).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
	$(this).find('.current').text(nextSlide + 1);
})
$(".control_pause").on("click", function () {
	$(this).removeClass(AC).siblings("button").addClass(AC)
	$sect03Contribute.slick("slickPause")
})
$(".control_play").on("click", function () {
	$(this).removeClass(AC).siblings("button").addClass(AC)
	$sect03Contribute.slick("slickPlay")
});


//setTimeout(function(){$(".section").addClass(AC)},100)


  
/*	
   $(".section02 .select .title").on("click", function () {
        active(this, "active")
    })      

   
    
*/
})

