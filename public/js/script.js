// jQuery

// MINIFY HERE: https://javascript-minifier.com/

// Use ready() to make a function available after the document is loaded
$(document).ready(function() {

    // reload the page
    // remove # url
    $(".js--reload").click(function () { 
        if (window.location.href.indexOf('#') > -1, !window.location.href.indexOf('#') > -1) {
            window.location.href = window.location.pathname;
        }
    });

    // scroll from header
    $(".js--scroll-from-header").click(function() {
        // html animation
        $("html, body").animate({scrollTop: $("#section-dorms").offset().top}, 1000);
    });

    // dynamic copyright
    $(".copyright").append("Copyright &copy; " + (new Date).getFullYear() + " by Kim Phung. All rights reserved."); 
    
    // clone the title once
    $flag = true;
    if($flag) {  
        $name = document.title; 
        $flag=false;  
    }

    $(window).focus(function() {
        document.title = $name;
    });
    
    // change title after delay and when tab is not focused
    $(window).blur(function() {
        setTimeout(function() { document.title = "Forgetting your dorm? | " + $name; }, 15000);
    });


    // sticky plugin waypoint
    // use direction to decide if user is scrolling up or down
    // back to top
    $(".header").waypoint(function(direction) {
        // if user scrolls down/up the section
        if (direction == "down") {
            // add class btt__sticky (back to top) with fade
            $(".js--wp-back").fadeIn("fast", function() {
                $(this).addClass("btt__sticky");
                // reapply animation, because other wp
                $(".btt__sticky").css("animation", "moveInbtt 2s ease");
            });

            $(".js--wp-git").fadeIn("fast", function() {
                $(".github").css("display", "inherit");
                // reapply animation, because other wp
                $(".github").css("animation", "moveInbtt 2s ease");
            });
        } else {
            // remove the class when back on top with fade
            $(".js--wp-back").fadeOut("slow", function() {
                $(this).removeClass("btt__sticky");
                $(".btt__sticky").css("animation", "moveInbtt 2s ease");
            });

            $(".js--wp-git").fadeOut("slow", function() {
                $(".github").css("display", "none");
                $(".github").css("animation", "moveInbtt 2s ease");
            });
        }
    }, {
        // delay
        offset: "0rem"
    });

    // scroll to header
    $(".js--scroll-to-header").click(function() {
        // html animation
        $("html, body").animate({scrollTop: $("body").offset().top}, 1000);
    });

});