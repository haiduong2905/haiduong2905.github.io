$(function() {
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

    function flip(card) {
        $(cards).toggleClass('flipped');
    };
    $(function loadCard(arr) {
        cards = cards.concat(cards);
        cards = shuffle(cards);
        let html = '';
        for (let i = 0; i < cards.length; i++) {
            html += '<div class = "grid">' + '<div class = "card" data-name="' + cards[i] + '">' + '<div class = "front">' +
                '<img src = "../image/7/' + cards[i] + '.jpg">' + '</div> ' + '<div class = "back">' + '<img src = "../image/7/back3.jpg ">' + '</div></div> </div >';
        }
        $('.content').html(html);
        $(".card").on("click", function() { $(this).addClass("flipped"), console.log($(this)) });
    });



});