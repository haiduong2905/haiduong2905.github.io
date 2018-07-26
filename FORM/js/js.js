//Function lấy ngày tháng năm
$(function() {
    let htmlday = '',
        htmlmonth = '',
        htmlyear = '',
        d = "<option value = 'Ngày'>Ngày</option>",
        m = "<option value = 'Tháng'>Tháng</option>",
        y = "<option value = 'Năm'>Năm</option>";

    for (i = 1; i <= 31; i++) {
        htmlday += "<option id = 'day' value =" + i + ">" + i + "</option >";
    }
    $('#birthday').append(d + htmlday);
    for (j = 1; j <= 12; j++) {
        htmlmonth += "<option id = 'month' value =" + j + ">" + j + "</option >";
    }
    $('#birthmonth').append(m + htmlmonth);
    for (k = 1950; k <= 2020; k++) {
        htmlyear += "<option id = 'year' value =" + k + ">" + k + "</option >";
    }
    $('#birthyear').append(y + htmlyear);
    // chuyển trang đăng ký thành công 

    var arrData;
    var data = [];
    arrData = location.search.substring(1).split("&");
    for (var i = 0; i < arrData.length; i++) {
        var index = arrData[i].indexOf('=');
        var temp;
        temp = arrData[i].slice(index + 1);
        data[i] = decodeURIComponent(temp.split('+').join(' '));
    }
    var success = {
        name: data[0],
        numberphone: data[1],
        facebook: data[2],
        email: data[3],
        Birthday: data[4] + '/' + data[5] + '/' + data[6],
        Gender: data[7],
        Id: data[8],
        Password: data[9],
    }

    $('.info_user').append('<h4>Tên bạn: <span>' + success['name'] + '</span></h4>');
    $('.info_user').append('<h4>Số điện thoại: <span>' + success['name'] + '</span></h4>');
    $('.info_user').append('<h4>Facebook: <span>' + success['numberphone'] + '</span></h4>');
    $('.info_user').append('<h4>Email: <span>' + success['email'] + '</span></h4>');
    $('.info_user').append('<h4>Ngày sinh: <span>' + success['Birthday'] + '</span></h4>');
    $('.info_user').append('<h4>Giới tính: <span>' + success['Gender'] + '</span></h4>');
    $('.info_user').append('<h4>Tên đăng nhập: <span>' + success['Id'] + '</span></h4>');
    $('.info_user').append('<h4>Mật khẩu: <span>' + success['Password'] + '</span></h4>');

});