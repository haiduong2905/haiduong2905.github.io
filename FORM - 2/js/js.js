//Function lấy ngày tháng năm
$(function() {
    let htmlday = '',
        htmlmonth = '',
        htmlyear = '';

    for (i = 1; i <= 31; i++) {
        htmlday += "<option value =" + i + ">" + i + "</option >";
    }
    $('#birthday').append(htmlday);
    for (j = 1; j <= 12; j++) {
        htmlmonth += "<option value =" + j + ">" + 'Tháng ' + j + "</option >";
    }
    $('#birthmonth').append(htmlmonth);
    for (k = 1990; k <= 2020; k++) {
        htmlyear += "<option value =" + k + ">" + k + "</option >";
    }
    $('#birthyear').append(htmlyear);

});
// chuyển trang đăng ký thành công 

var arrData;
var data = [];
arrData = location.search.substring(1).split("&");
console.log(arrData);
for (var i = 0; i < arrData.length; i++) {
    var index = arrData[i].indexOf('=');
    var temp;
    temp = arrData[i].slice(index + 1);
    data[i] = decodeURIComponent(temp.split('+').join(' '));
}
var success = {
    name: data[0],
    email: data[1],
    Birthday: data[2] + '/' + data[3] + '/' + data[4],
    Gender: data[5],
    Id: data[6],
    Password: data[7],
}

$('.info_user').append('<h4>Name: <span>' + success['name'] + '</span></h4>');
$('.info_user').append('<h4>Email: <span>' + success['email'] + '</span></h4>');
$('.info_user').append('<h4>Ngày sinh: <span>' + success['Birthday'] + '</span></h4>');
$('.info_user').append('<h4>Giới tính: <span>' + success['Gender'] + '</span></h4>');
$('.info_user').append('<h4>Tên đăng nhập: <span>' + success['Id'] + '</span></h4>');
$('.info_user').append('<h4>Mật khẩu: <span>' + success['Password'] + '</span></h4>');

// Validate

$('.form_regestry').on('submit', function() {

});