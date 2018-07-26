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

    // Validate

    $('#form_regestry').on('submit', function() {
        var isValid = true;
        // var check = null;
        //Name
        if ($('#name').val().match(/^[a-zA-Z]+(([\'\,\.\- ][a-zA-Z ])?[a-zA-Z]*)*$/) == null) {
            $('#name').next('span').text('Điền tên của bạn');
            isValid = false;
        } else {
            $('#name').next('span').text('');
        }

        // Number phone
        if ($('#number_phone').val().match(/^0[1-9]\w{8,9}$/) == null) {
            $('#number_phone').next('span').text('Điền số điện thoại của bạn');
            isValid = false;
        } else {
            $('#number_phone').next('span').text('');
        }
        // Facebook
        if ($('#facebook').val().match(/(?:www.)?facebook.com\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[\w\-]*\/)*([\w\-]*)/) == null) {
            $('#facebook').next('span').text('Điền địa chỉ Facebook của bạn');
            isValid = false;
        } else {
            $('#facebook').next('span').text('');
        }
        // Email
        if ($('#email').val().match(/[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm) == null) {
            $('#email').next('span').text('Nhập email của bạn');
            isValid = false;
        } else {
            $('#email').next('span').text('');
        }
        // Birth day
        if ($('#birthday').val() == 'Ngày' || $('#birthmonth').val() == 'Tháng' || $('#birthyear').val() == 'Năm') {
            $('#birthday~span').text('Chọn ngày sinh của bạn');

        } else {
            $('#birthday~span').text('');
        }
        // Gender

        if ($("input[name='gender']:checked").val() == null) {
            $('#male~span').text('Chọn giới tính của bạn');
            isValid = false;
        } else {
            $('#male~span').text('');
        }

        // Id
        if ($('#id').val().match(/(?=^.{6,51}$)([A-Za-z]{1})([A-Za-z0-9_\^\&amp;\-\.\?]{5,49})$/) == null) {
            $('#id').next('span').text('Tên đăng nhập từ 6 đến 50 ký tự, không có ký tự đặc biệt.');
            isValid = false;
        } else {
            $('#id').next('span').text('');
        }
        // Passwword
        if ($('#password').val().match(/^(?=.*[0-9]+.*)(?=.*[A-zA-Z]+.*)[0-9a-zA-Z]{6,32}$/) == null) {
            $('#password').next('span').text('Chữ hoa, chữ thường và số.');
            isValid = false;
        } else {
            $('#password').next('span').text('');
        }
        //Repeat-password
        if ($('#repeat-password').val() != $('#password').val()) {
            $('#repeat-password').next('span').text('Mật khẩu nhập lại không khớp');
            isValid = false;
        } else {
            $('#repeat-password').next('span').text('');
        }
        return isValid;
    });
});