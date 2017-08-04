jQuery(function(){	
	
	/*-------------------------------------------------*/
    /* =  preloader
    /*-------------------------------------------------*/
	$(window).on('load', function () {
		var $preloader = $('.b-preloader'),
			$spinner   = $preloader.find('.b-preloader__spinner');
			$spinner.fadeOut();
			$preloader.delay(350).fadeOut('slow');
	});
		
	/*-------------------------------------------------*/
    /* =  fonts
    /*-------------------------------------------------*/
	$("head").append("<link href='http://fonts.googleapis.com/css?family=PT+Serif:400,700,400italic,700italic|Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800|Roboto+Slab:300,700,100,400&subset=latin,cyrillic-ext,cyrillic' rel='stylesheet' type='text/css'>");
			
	
	/*-------------------------------------------------*/
    /* =  placeholder
    /*-------------------------------------------------*/
	if($('input[placeholder], textarea[placeholder]').length){
		jQuery('input[placeholder], textarea[placeholder]').placeholder();
	}			
	
	/*-------------------------------------------------*/
    /* =  placeholder
    /*-------------------------------------------------*/
	/*$('.js-submit').click(function() {
		if ($('#input-radio-1a').is(':checked')) {
			window.open('https://auth.robokassa.ru/Merchant/Index.aspx?MerchantLogin=needstyle&OutSum=3500&Description=Консультация онлайн&SignatureValue=4e0e599e7643931618da9daa9529797d', '_blank');
			
		} else if ($('#input-radio-1b').is(':checked')) {
			window.open('https://auth.robokassa.ru/Merchant/Index.aspx?MerchantLogin=needstyle&OutSum=5500&Description=Консультация онлайн + шоппинг сопровождение&SignatureValue=bd49d1ca30a86ad2fa115c4d536b8db4', '_blank');
		}
	});		
	$('.js-submit-2').click(function() {
		if ($('#input-radio-2a').is(':checked')) {
			window.open('https://auth.robokassa.ru/Merchant/Index.aspx?MerchantLogin=needstyle&OutSum=3500&Description=Консультация онлайн&SignatureValue=4e0e599e7643931618da9daa9529797d', '_blank');
		} else if ($('#input-radio-2b').is(':checked')) {
			window.open('https://auth.robokassa.ru/Merchant/Index.aspx?MerchantLogin=needstyle&OutSum=5500&Description=Консультация онлайн + шоппинг сопровождение&SignatureValue=bd49d1ca30a86ad2fa115c4d536b8db4', '_blank');
		}
	});	
	$('.js-submit-3').click(function() {
		if ($('#input-radio-3a').is(':checked')) {
			window.open('https://auth.robokassa.ru/Merchant/Index.aspx?MerchantLogin=needstyle&OutSum=3500&Description=Консультация онлайн&SignatureValue=4e0e599e7643931618da9daa9529797d', '_blank');
		} else if ($('#input-radio-3b').is(':checked')) {
			window.open('https://auth.robokassa.ru/Merchant/Index.aspx?MerchantLogin=needstyle&OutSum=5500&Description=Консультация онлайн + шоппинг сопровождение&SignatureValue=bd49d1ca30a86ad2fa115c4d536b8db4', '_blank');
		}
	});   
	$('.js-submit-4').click(function() {
		if ($('#input-radio-4a').is(':checked')) {
			window.open('https://auth.robokassa.ru/Merchant/Index.aspx?MerchantLogin=needstyle&OutSum=3500&Description=Консультация онлайн&SignatureValue=4e0e599e7643931618da9daa9529797d', '_blank');
		} else if ($('#input-radio-4b').is(':checked')) {
			window.open('https://auth.robokassa.ru/Merchant/Index.aspx?MerchantLogin=needstyle&OutSum=5500&Description=Консультация онлайн + шоппинг сопровождение&SignatureValue=bd49d1ca30a86ad2fa115c4d536b8db4', '_blank');
		}
	});	*/		
		
		
	$('.b-team-content').first().addClass('b-team-content-active');	
		
	$('.b-team-list li').click(function() {
		var $this = $(this);
		
		$this.siblings().removeClass('b-team-li-active').end().addClass('b-team-li-active');
		
		$('.b-team-content').removeClass('b-team-content-active').eq($this.index()).addClass('b-team-content-active');
	});	
		
		
		
	var sync1 = $("#sync1");
	var sync2 = $("#sync2");

	sync1.owlCarousel({
		singleItem: true,
		slideSpeed: 1000,
		navigation: false,
		pagination: true,
		afterAction: syncPosition,
		responsiveRefreshRate: 200,
		autoHeight : true
	});

	sync2.owlCarousel({
		items: 3,
		itemsDesktop: [1199, 3],
		itemsDesktopSmall: [979, 3],
		itemsTablet: [768, 2],
		itemsMobile: [479, 1],
		pagination: false,
		navigation: true,
		responsiveRefreshRate: 100,
		afterInit: function(el) {
			el.find(".owl-item").eq(0).addClass("synced");
		}
	});

	function syncPosition(el) {
		var current = this.currentItem;
		$("#sync2")
			.find(".owl-item")
			.removeClass("synced")
			.eq(current)
			.addClass("synced")
		if ($("#sync2").data("owlCarousel") !== undefined) {
			center(current)
		}
	}	
	

	$("#sync2").on("click", ".owl-item", function(e) {
		e.preventDefault();
		var number = $(this).data("owlItem");
		sync1.trigger("owl.goTo", number);
	});

	function center(number) {
		var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
		var num = number;
		var found = false;
		for (var i in sync2visible) {
			if (num === sync2visible[i]) {
				var found = true;
			}
		}

		if (found === false) {
			if (num > sync2visible[sync2visible.length - 1]) {
				sync2.trigger("owl.goTo", num - sync2visible.length + 2)
			} else {
				if (num - 1 === -1) {
					num = 0;
				}
				sync2.trigger("owl.goTo", num);
			}
		} else if (num === sync2visible[sync2visible.length - 1]) {
			sync2.trigger("owl.goTo", sync2visible[1])
		} else if (num === sync2visible[0]) {
			sync2.trigger("owl.goTo", num - 1)
		}

	};	
		
		
	$(".slider-reviews-after").owlCarousel({
		items: 1,
		navigation : true, 
		slideSpeed : 300,
		paginationSpeed : 400,	
		itemsDesktopSmall: [979, 1],
		itemsTablet: [768, 1],
		itemsMobile: [479, 1],				
		singleItem : true,
		pagination: false		    
	});	
	
	$(".slider-reviews-video").owlCarousel({
		items: 1,
		navigation : true, 
		slideSpeed : 300,
		paginationSpeed : 400,	
		itemsDesktopSmall: [979, 1],
		itemsTablet: [768, 1],
		itemsMobile: [479, 1],				
		singleItem : true,
		pagination: false		    
	});	
		
	$(".iframe").fancybox({ 
		'type': 'iframe',
		padding 	: 10,
		maxWidth	: '700',
		maxHeight	: '450',
		width 		: '80%',		 		
		autoSize	: false,
		helpers: {
            overlay: {
                locked: false
            }
        }
	});	
		
	jQuery(".modalbox").fancybox({				
		padding: 0,
		maxWidth: 1000,		
        maxHeight: 600,
		width: '90%',        
        centerOnScroll: true,
		autoCenter: true,		
		fitToView: false,
		autoDimensions: true,
		helpers: {
            overlay: {
                locked: false
            }
        }
	});	
	
	$(".modalbox-2").fancybox({
        padding: 0,
        fitToView: false,
        maxWidth: 600,
        maxHeight: 9999,
        width: '96%',
        height: '85%',
        autoSize: false,
        helpers: {
            overlay: {
                locked: false
            }
        }
    });
		
	
	$(".fancybox-iframe").fancybox({
		'type': 'iframe',
        padding: 0,
		maxWidth: 1000,		
        maxHeight: 900,
		width: '90%',        
        centerOnScroll: true,
		autoCenter: true,		
		fitToView: false,
		autoDimensions: true,
		helpers: {
            overlay: {
                locked: false
            }
        }
    });
	
});