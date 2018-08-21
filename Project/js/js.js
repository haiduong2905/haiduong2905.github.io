$(function() {
    $(window).scroll(function() {
        if ($('html').scrollTop() > 80) {
            $('.menu-top-outside').addClass('fixmenu')
        } else {
            $('.menu-top-outside').removeClass('fixmenu')
        }

        if ($('html').scrollTop() > 1000) {
            $('.back-to-top').css('opacity', '1')
        } else {
            $('.back-to-top').css('opacity', '0')
        }
        if ($('html').scrollTop() > 3100) {
            $('.back-to-top').css('background-color', 'rgba(227, 227, 227, 0.411)')
        } else {
            $('.back-to-top').css('background-color', 'rgba(27, 27, 27, 0.411)')
        }

        if ($('html').scrollTop() >= 500) {
            $('.main-content-col-11').addClass('fade-out-11');
            $('.main-content-col-12').addClass('fade-out-12');
            $('.main-content-col-13').addClass('fade-out-13');
            $('.main-content-col-21').addClass('fade-out-21');
            $('.main-content-col-22').addClass('fade-out-21');
        }

        if ($('html').scrollTop() >= 1250) {
            $('.choice-outside-1:nth-child(1)').addClass('fade-choiceout-11');
            $('.choice-outside-1:nth-child(2)').addClass('fade-choiceout-12');
            $('.choice-outside-1:nth-child(3)').addClass('fade-choiceout-13');
            $('.choice-outside-1:nth-child(4)').addClass('fade-choiceout-14');
        }
        if ($('html').scrollTop() >= 1450) {

            $('.choice-outside-2:nth-child(1)').addClass('fade-choiceout-21');
            $('.choice-outside-2:nth-child(2)').addClass('fade-choiceout-22');
            $('.choice-outside-2:nth-child(3)').addClass('fade-choiceout-23');
        }

        if ($('html').scrollTop() >= 2200) {
            $('.service-row-1-col:nth-child(4)').addClass('fade-serviceout-14');
            $('.service-row-1-col:nth-child(3)').addClass('fade-serviceout-13');
            $('.service-row-1-col:nth-child(2)').addClass('fade-serviceout-12');
            $('.service-row-1-col:nth-child(1)').addClass('fade-serviceout-11');
        }
        if ($('html').scrollTop() >= 2500) {
            $('.service-row-2-col:nth-child(1)').addClass('fade-serviceout-21');
            $('.service-row-2-col:nth-child(2)').addClass('fade-serviceout-22');
            $('.service-row-2-col:nth-child(3)').addClass('fade-serviceout-23');
            $('.service-row-2-col:nth-child(4)').addClass('fade-serviceout-24');
        }


    })

    $('.back-to-top').click(function() {
        $('html').animate({ scrollTop: 0 },1000);
    });


    $('.hotline-tag').click(function() {
        $('.hotline').toggle();

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
            });
        });
    };
    // Menu scroll
    $('#openMenu').click(function() {
        $('.underlist-lv2-res').toggle();
    });
    $('.top_menu-icon').click(function() {
        $('.menu-detail').toggle();
        $('.underlist-lv2-res').hide();
    });

});
// Slide Banner
var slideIndex = 0;
showSlides();

function plusSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
}

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 5000);
}
// Tab
function openRoom(evt, roomName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(roomName).style.display = "block";
    evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();