
$(document).ready(function() {

    $(".typed-greeting").typed({
    	strings: ["Hi! I'm Olivia.", "I study Mechatronics engineering.", "I develop software."],
        typeSpeed: 80,
        showCursor: true,
        cursorChar: "|",
        backDelay: 1000,
    });

    $(".home-link").click(function() {
    	var clicked = "";
    	switch($(this).prop("id")){
    		case "projects-link":
    			clicked = $("#projects-container");
    			break;
    		case "work-link":
    			clicked = $("#work-container");
    			break;
    		case "contact-link":
    			clicked = $("#contact-container");
    			break;
    		case "chevron-link":
    			clicked = $("#about-container");
    			break;
    	}
    	$("html, body").animate({
		    scrollTop: clicked.offset().top
		}, 1000);
    })

});



