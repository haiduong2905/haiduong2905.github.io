$(function() {
    $(window).scroll(function() {
            if ($('html').scrollTop() > 80) {
                $('.menu-top-outside').addClass('fixmenu')
            } else {
                $('.menu-top-outside').removeClass('fixmenu')
            }

            if ($('html').scrollTop() > 200) {
                $('.back-to-top').css('opacity', '1')
            } else {
                $('.back-to-top').css('opacity', '0')
            }
            if ($('html').scrollTop() > 650) {
                $('.back-to-top').css('background-color', 'rgba(227, 227, 227, 0.411)')
            } else {
                $('.back-to-top').css('background-color', 'rgba(27, 27, 27, 0.411)')
            }
        })
        // Back to top ==0
    $('.back-to-top').click(function() {
        $('html').animate({ scrollTop: 0 }, 1000);
    });


    $('.hotline-tag').click(function() {
        $('.hotline').toggle();
        $('.hotline-tag').addClass('rotate');
    });
    // Menu scroll
    $('#openMenu').click(function() {
        $('.underlist-lv2-res').toggle();
    });
    $('.top_menu-icon').click(function() {
        $('.menu-detail').toggle();
        $('.underlist-lv2-res').hide();
    });

    // Strim length
    $('.news-title a').html(function() {
        let str = $('.news-title a').html();
        if (str.length <= 15) {
            $('.news-title a').html(str);
        } else $('.news-title a').html(str.substring(0, 15) + '...');
    });
    $('.news-detail').html(function() {
        let str = $('.news-detail').html();
        if (str.length <= 35) {
            $('.news-detail').html(str);
        } else $('.news-detail').html(str.substring(0, 35) + '...');
    });
    // Live chat
    function detectmob() {
        if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
            return true;
        } else {
            return false;
        }
    }
    var t = {
        delay: 125,
        overlay: $(".fb-overlay"),
        widget: $(".fb-widget"),
        button: $(".fb-button")
    };
    setTimeout(function() {
        $("div.fb-livechat").fadeIn()
    }, 8 * t.delay);
    if (!detectmob()) {
        $(".ctrlq").on("click", function(e) {
            e.preventDefault(), t.overlay.is(":visible") ? (t.overlay.fadeOut(t.delay), t.widget.stop().animate({
                bottom: 0,
                opacity: 0
            }, 2 * t.delay, function() {
                $(this).hide("slow"), t.button.show()
            })) : t.button.fadeOut("medium", function() {
                t.widget.stop().show().animate({
                    bottom: "30px",
                    opacity: 1
                }, 2 * t.delay), t.overlay.fadeIn(t.delay)
            })
        })
    }

});