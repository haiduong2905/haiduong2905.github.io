$(document).ready(function() {
    let cards = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', ];
    let current = null;

    function shuffle(cards) {
        var currentIndex = cards.length;
        var temporaryValue;
        var randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex)
            currentIndex = currentIndex - 1;
            temporaryValue = cards[currentIndex];
            cards[currentIndex] = cards[randomIndex];
            cards[randomIndex] = temporaryValue;
        }
        return cards;
    }


    $(function() {
        cards = cards.concat(cards);
        cards = shuffle(cards);
        let html = '';
        for (let i = 0; i < cards.length; i++) {
            html += '<div class = "grid">' + '<div class = "card" data-name="' + cards[i] + '">' +
                '<div class = "front">' +
                '<img src = "../image/7/' + cards[i] + '.jpg">' + '</div> ' + '<div class = "back">' + '<img src = "../image/7/back3.jpg ">' + '</div></div> </div >';
        }
        $('.content').html(html);
        $(".card").on("click", function() { $(this).addClass("flipped") });
        // playSound('start');
        // setTimeout(function() {
        //     playSound('music');
        // }, 300)
        // $('start').volume = 0.5;
        // $('correct').volume = 0.4;
        // $('wrong').volume = 0.4;
        // $('flip').volume = 0.5;
        $('.card').on('click', function() {
            // playSound('flip');
            $(this).css('pointer-events', 'none');
            $(this).addClass('openned');
            var m = $(this).attr('data-name');
            console.log($(this));
            console.log(m);
            $(this).toggleClass('flipped');
            if (!current) {
                current = m;
            } else if (current != m) {
                // playSound('wrong');
                $('.card').css('pointer-events', 'none');
                var correctImg = '[data-name=' + current + ']';
                console.log("Khác nhau");
                setTimeout(function() {
                    $('.openned').toggleClass('flipped');
                    $('.openned').removeClass('openned');
                    setTimeout(function() {
                        $('.card').css('pointer-events', 'auto');
                    }, 200);
                }, 500);
                current = null;
            } else {
                // playSound('correct');
                console.log('Giống nhau');
                var correctImg = '[data-name=' + current + ']';
                console.log(correctImg);
                setTimeout(function() {
                    $(correctImg).css('opacity', '0');
                }, 500);
                current = null;

            }
        });
    });
});