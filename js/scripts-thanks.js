jQuery(function(){		
		
	/*-------------------------------------------------*/
    /* =  fonts
    /*-------------------------------------------------*/
	$("head").append("<link href='http://fonts.googleapis.com/css?family=PT+Serif:400,700,400italic,700italic|Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800|Roboto+Slab:300,700,100,400&subset=latin,cyrillic-ext,cyrillic' rel='stylesheet' type='text/css'>");
		
	
	$(".modal-thanks").fancybox({
        padding: [0, 0, 0, 0],
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
    }).trigger("click");
	
	
	$.fancybox({
        "content": $(".modal-thanks").clone()
    });		
    setTimeout(function() {
        $.fancybox.close();
		window.location.replace("http://стилист-онлайн.рф/");
    }, 5000);	
	
	
});