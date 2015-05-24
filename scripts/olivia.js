$(document).ready(function () {

    $("#content-home").typed({
    	strings: ["Hi!\nI'm Olivia. \nCheck out my\nwebsite..."],
        typeSpeed: 80,
        showCursor: true,
        // character for cursor
        cursorChar: "|",
        // attribute to type (null == text)
    });

    $(window).resize(function() {
        var width = $(window).width();
        var height = $(window).height();

        if(width <= 650){
            $('#main-menu-bar').hide();
        }else {$('#main-menu-bar').show();}

    });

});



