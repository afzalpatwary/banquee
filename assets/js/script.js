/**
 * @Script js for (Template/Project Name)
 *
 * @project     - Project Name
 * @author      - 
 * @created_by  - 
 * @created_at  - 
 * @modified_by -
 */


/**
 * ========================================================
 * this function execute when window properly loaded
 * ===========================================================
 */

$(window).on('load', function () {

    // code should be execute here

});



/**
 * ========================================================
 * this function execute when DOM element ready 
 * ===========================================================
 */

$(document).ready(function () {

    // navbar

    // $(window).scroll(function () {
    //     if ($(window).scrollTop() >= 200) {
    //         $(".navbar").addClass("stickyHeader");
    //     } else {
    //         $(".navbar").removeClass("stickyHeader");
    //     }
    // });

    // testimonial-active
    $(function () {
        if ($('.testimonials-active').length) {
            $(".testimonials-active").owlCarousel({
                items: 3,
                margin: 30,
                nav: true,
                loop: true,
                autoplay: true,
                autoplayTimeout: 2500,
                animateOut: 'fadeOut',
                smartSpeed: 2500,
                navText: ["<img src='assets/img/arrow-left.svg' class='img-fluid' />", "<img src='assets/img/arrow-right-s.svg' class='img-fluid' />"],
                dots: false,
                autoplayHoverPause: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    767: {
                        items: 2
                    },
                    1200: {
                        items: 3
                    }
                }
            });
        }
    });



    // wow js init
    $(function () {
        var wow = new WOW({
            animateClass: 'animated',
            mobile: true
        });
        wow.init();
    });


        // FAQ
        $(function () {
            if ($('.faq-list').length) {
                $('.faq-list').on('click', '.faq-title', function (e) {
                    e.preventDefault();
                    // remove siblings activities
                    $(this).closest('.faq-list-item').siblings().removeClass('open').find('.faq-desc').slideUp();
                    $(this).closest('.faq-list-item').siblings().find('.ni').addClass('ni-plus').removeClass('ni-cross');
    
                    // add slideToggle into this
                    $(this).closest('.faq-list-item').toggleClass('open').find('.faq-desc').slideToggle();
                    $(this).find('.ni').toggleClass('ni-plus ni-cross');
                });
            }
        });

});
