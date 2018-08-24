$(function() {
    $(window).scroll(function() {
        if ($('html').scrollTop() > 80) {
            $('.menu-top-outside').addClass('fixmenu')
        } else {
            $('.menu-top-outside').removeClass('fixmenu')
        }

        if ($('html').scrollTop() > 800) {
            $('.back-to-top').css('opacity', '1')
        } else {
            $('.back-to-top').css('opacity', '0')
        }
        if ($('html').scrollTop() > 1200) {
            $('.back-to-top').css('background-color', 'rgba(227, 227, 227, 0.411)')
        } else {
            $('.back-to-top').css('background-color', 'rgba(27, 27, 27, 0.411)')
        }
        if ($('html').scrollTop() >= 250) {
            $('.service-row-1-col:nth-child(4)').addClass('fade-serviceout-14');
            $('.service-row-1-col:nth-child(3)').addClass('fade-serviceout-13');
            $('.service-row-1-col:nth-child(2)').addClass('fade-serviceout-12');
            $('.service-row-1-col:nth-child(1)').addClass('fade-serviceout-11');
        }
        if ($('html').scrollTop() >= 550) {
            $('.service-row-2-col:nth-child(1)').addClass('fade-serviceout-21');
            $('.service-row-2-col:nth-child(2)').addClass('fade-serviceout-22');
            $('.service-row-2-col:nth-child(3)').addClass('fade-serviceout-23');
            $('.service-row-2-col:nth-child(4)').addClass('fade-serviceout-24');
        }
    })
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


});