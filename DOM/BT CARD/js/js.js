let imgArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15'];
imgArr = imgArr.concat(imgArr);
shuffle(imgArr);

let html = '';
for (let i = 0; i < imgArr.length; i++) {
    html += '<div class = "card_item">' + '<div class="card__inner" data-name = "' + imgArr[i] + '">' + '<div class = "front"><img src = "../image/7/' + imgArr[i] + '.jpg"></div>' +
        '<div class="back"><img src="../image/7/back3.jpg"></div>' + '</div></div>'
}
$('.card').html(html);