
/*global $, alert, console*/


//////////////////////////*nice scroll*///////////////////////////////

$(function () {
    'use strict';
    $('html').niceScroll();
});

    ///////////////////*smoth scroll to section*//////////////////////////


$('nav ul li a img').click(function () {
	'use strict';
	$('nav ul li a img').removeClass("active");
	$(this).addClass("active");

});


 ///////////////////*smoth scroll to section*//////////////////////////

$('nav li a img').click(function () {
	'use strict';
	$('html, body').animate({
        scrollTop: $('#' + $(this).data('value')).offset().top
    }, 1000);
});

// active link when scroll
$(window).on('scroll', function () {
    "use strict";
	scrNav();
});


function scrNav() {
	"use strict";
    var sTop = $(window).scrollTop();
    $('section, header').each(function () {
        var id = $(this).attr('id'),
		    link = $('nav ul li a img'),
		    offset = $(this).offset().top - 1,
		    height = $(this).height();
        if (sTop >= offset && sTop < offset + height) {
            link.removeClass('active');
            $('nav').find('[data-value="' + id + '"]').addClass('active');
        }
    });
}
scrNav();


///////////////////*Typed H2 Skill Section*//////////////////////////
$(function () {
	"use strict";
	$(".skill .butmore-skill .bolit:first-child").click(function () {
		$(".skill .skillprgress").slideDown("slow");
		$(".skill .more-skill").slideUp();
        $(this).addClass('active').siblings().removeClass("active");
    });
    $(".skill .butmore-skill .bolit:last-child").click(function () {
        $(".skill .skillprgress").slideUp();
		$(".skill .more-skill").slideDown("slow");
        $(this).addClass('active').siblings().removeClass("active");
		$(".holder-moreskill  h2").typed({
			strings: ["Im a fast learner<br>  good work with team as indvidule,<br>work perfectly,<br>Passionate,flixible & So organized."],
			startDelay: 800,
			showCursor: false,
			typeSpeed: 20
        });
    });
});
