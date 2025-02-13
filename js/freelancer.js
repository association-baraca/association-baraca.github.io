/*!
 * Start Bootstrap - Freelancer Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        var target = $anchor.attr('href');

        // Vérifie si le lien contient une URL complète
        if (target.includes(window.location.hostname)) {
            target = target.split('#')[1]; // Récupère uniquement l’ancre
            target = '#' + target; // Reformate en #id
        }

        if ($(target).length) {
            $('html, body').stop().animate({
                scrollTop: $(target).offset().top
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        }
    });
});

// Floating label headings for the contact form
$(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});

/* Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})*/

$(function() {
    // Corrige les liens du menu pour ScrollSpy
    $('.navbar-fixed-top a').each(function() {
        var href = $(this).attr('href');
        if (href.includes('#')) {
            $(this).attr('href', '#' + href.split('#')[1]); // Garde seulement #id
        }
    });

    // Active ScrollSpy
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 50 // Ajuste si besoin
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});
