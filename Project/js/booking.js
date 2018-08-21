$(function() {
    $(window).scroll(function() {
            if ($('html').scrollTop() > 80) {
                $('.menu-top-outside').addClass('fixmenu')
            } else {
                $('.menu-top-outside').removeClass('fixmenu')
            }

            if ($('html').scrollTop() > 150) {
                $('.back-to-top').css('opacity', '1')
            } else {
                $('.back-to-top').css('opacity', '0')
            }
            if ($('html').scrollTop() > 550) {
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

    $('.select_item').click(function() {
        $(':radio').on('click');
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
    // Menu scroll
    $('#openMenu').click(function() {
        $('.underlist-lv2-res').toggle();
    });
    $('.top_menu-icon').click(function() {
        $('.menu-detail').toggle();
        $('.underlist-lv2-res').hide();
    });

    // Form regestry
    let htmlday = '',
        htmlmonth = '',
        htmlyear = '',
        d = "<option value = 'Ngày'>Ngày</option>",
        m = "<option value = 'Tháng'>Tháng</option>",
        y = "<option value = 'Năm'>Năm</option>";

    for (i = 1; i <= 31; i++) {
        htmlday += "<option id = 'day' value =" + i + ">" + i + "</option >";
    }
    $('#day').append(d + htmlday);
    for (j = 1; j <= 12; j++) {
        htmlmonth += "<option id = 'month' value =" + j + ">" + j + "</option >";
    }
    $('#month').append(m + htmlmonth);
    for (k = 2018; k <= 2020; k++) {
        htmlyear += "<option id = 'year' value =" + k + ">" + k + "</option >";
    }
    $('#year').append(y + htmlyear);

    // Đặt chỗ thành công
    let arrData;
    let data = [];
    arrData = location.search.substring(1).split("&");
    for (let i = 0; i < arrData.length; i++) {
        let index = arrData[i].indexOf('=');
        let temp;
        temp = arrData[i].slice(index + 1);
        data[i] = decodeURIComponent(temp.split('+').join(' '));
    };
    let success = {
        Name: data[0],
        Numberphone: data[1],
        Email: data[2],
        Day: data[3] + '/' + data[4] + '/' + data[5],
        Select_service: data[6],
    };
    $('.info_user').append('<h4>Tên bạn: <span>' + success['Name'] + '</span></h4>');
    $('.info_user').append('<h4>Số điện thoại: <span>' + success['Numberphone'] + '</span></h4>');
    $('.info_user').append('<h4>Email: <span>' + success['Email'] + '</span></h4>');
    $('.info_user').append('<h4>Ngày bắt đầu: <span>' + success['Day'] + '</span></h4>');
    $('.info_user').append('<h4>Gói đăng ký: <span>' + success['Select_service'] + '</span></h4>');


    // Validate

    $('#form_regestry').on('submit', function() {
        var isValid = true;
        // var check = null;
        //Name
        if ($('#name').val().match(/^[a-zA-Z]+(([\'\,\.\- ][a-zA-Z ])?[a-zA-Z]*)*$/) == null) {
            $('#name').next('span').text('Nhập tên của bạn');
            isValid = false;
        } else {
            $('#name').next('span').text('');
        }

        // Number phone
        if ($('#number_phone').val().match(/^0[1-9]\w{8,9}$/) == null) {
            $('#number_phone').next('span').text('Nhập số điện thoại của bạn');
            isValid = false;
        } else {
            $('#number_phone').next('span').text('');
        }
        // Email
        if ($('#email').val().match(/[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm) == null) {
            $('#email').next('span').text('Nhập email của bạn');
            isValid = false;
        } else {
            $('#email').next('span').text('');
        }
        // Birth day
        if ($('#day').val() == 'Ngày' || $('#month').val() == 'Tháng' || $('#year').val() == 'Năm') {
            $('#day~span').text('Chọn ngày tháng bắt đầu');

        } else {
            $('#day~span').text('');
        }
        // Gender

        if ($(".select_item input[type='radio']:checked").val() == null) {
            $('.error').text('Bạn chưa chọn gói dịch vụ');
            isValid = false;
        } else {
            $('.error').text('');
        }
        return isValid;
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