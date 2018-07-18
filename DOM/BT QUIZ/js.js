var question1 = {
    question: "Câu 1. Thiết bị nào sau đây dùng để kết nối mạng?",
    answer_A: "A. Ram",
    answer_B: "B. Rom",
    answer_C: "C. Router",
    answer_D: "D. CPU",
    correctAnswer: "C. Router",
};
// "C"

var question2 = {
    question: "Câu 2: Hệ thống nhớ của máy tính bao gồm:",
    answer_A: "A. Bộ nhớ trong, Bộ nhớ ngoài",
    answer_B: "B. Cache, Bộ nhớ ngoài",
    answer_C: "C. Bộ nhớ ngoài, ROM",
    answer_D: "D. Đĩa quang, Bộ nhớ trong",
    correctAnswer: "A. Bộ nhớ trong, Bộ nhớ ngoài",
};
// "A"

var question3 = {
    question: "Câu 3: Trong mạng máy tính, thuật ngữ Share có ý nghĩa gì?",
    answer_A: "A. Chia sẻ tài nguyên",
    answer_B: "B. Nhãn hiệu của một thiết bị kết nối mạng",
    answer_C: "C. Thực hiện lệnh in trong mạng cục bộ",
    answer_D: "D. Một phần mềm hỗ trợ sử dụng mạng cục bộ",
    correctAnswer: "A. Chia sẻ tài nguyên",
};
// "A"

var question4 = {
    question: "Câu 4. Bộ nhớ RAM và ROM là bộ nhớ gì?",
    answer_A: "A. Primary memory",
    answer_B: "B. Receive memory",
    answer_C: "C. Secondary memory",
    answer_D: "D. Random access memory",
    correctAnswer: "A. Primary memory",
};
// "A"

var question5 = {
    question: "Câu 5. Các thiết bị nào thông dụng nhất hiện nay dùng để cung cấp dữ liệu cho máy xử lý?",
    answer_A: "A. Bàn phím (Keyboard), Chuột (Mouse), Máy in (Printer)",
    answer_B: "B. Máy quét ảnh(Scaner)",
    answer_C: "C. Bàn phím (Keyboard), Chuột (Mouse) và Máy quét ảnh (Scaner)",
    answer_D: "D. Máy quét ảnh(Scaner), Chuột(Mouse)",
    correctAnswer: "C. Bàn phím (Keyboard), Chuột (Mouse) và Máy quét ảnh (Scaner)",
};

// "C"

var question6 = {
    question: "Câu 6. Khái niệm hệ điều hành là gì?",
    answer_A: "A. Cung cấp và xử lý các phần cứng và phần mềm",
    answer_B: "B. Nghiên cứu phương pháp, kỹ thuật xử lý thông tin bằng máy tính điện tử",
    answer_C: "C. Nghiên cứu về công nghệ phần cứng và phần mềm",
    answer_D: "D. Là một phần mềm chạy trên máy tính, dùng để điều hành, quản lý các thiết bị phần cứng và các tài nguyên phần mềm trên máy tính",
    correctAnswer: "D. Là một phần mềm chạy trên máy tính, dùng để điều hành, quản lý các thiết bị phần cứng và các tài nguyên phần mềm trên máy tính",
};

// "D"

var question7 = {
    question: "Câu 7. Cho biết cách xóa một tập tin hay thư mục mà không di chuyển vào Recycle Bin:?",
    answer_A: "A. Chọn thư mục hay tâp tin cần xóa - > Delete",
    answer_B: "B. Chọn thư mục hay tâp tin cần xóa - > Ctrl + Delete",
    answer_C: "C. Chọn thư mục hay tâp tin cần xóa - > Alt + Delete",
    answer_D: "D. Chọn thư mục hay tâp tin cần xóa - > Shift + Delete",
    correctAnswer: "D. Chọn thư mục hay tâp tin cần xóa - > Shift + Delete",
};

// "D"

var question8 = {
    question: "Câu 8. Danh sách các mục chọn trong thực đơn gọi là:",
    answer_A: "A. Menu pad",
    answer_B: "B. Menu options",
    answer_C: "C.Menu bar",
    answer_D: "D. Tất cả đều sai",
    correctAnswer: "C.Menu bar",
};

// "C"

var question9 = {
    question: "Câu 9. Công dụng của phím Print Screen là gì ?",
    answer_A: "A. In màn hình hiện hành ra máy in",
    answer_B: "B. Không có công dụng gì khi sử dụng 1 mình nó.",
    answer_C: "C. In văn bản hiện hành ra máy in",
    answer_D: "D. Chụp màn hình hiện hành",
    correctAnswer: "D. Chụp màn hình hiện hành",
};

// "D"

var question10 = {
    question: "Câu 10. Nếu bạn muốn làm cho cửa sổ nhỏ hơn(không kín màn hình), bạn nên sử dụng nút nào?",
    answer_A: "A. Maximum",
    answer_B: "B. Minimum",
    answer_C: "C. Restore down",
    answer_D: "D. Close",
    correctAnswer: "C. Restore down",
};

// "C"

var question = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10];
var Q = document.getElementById("question");
var a = document.getElementById("answer_a");
var b = document.getElementById("answer_b");
var c = document.getElementById("answer_c");
var d = document.getElementById("answer_d");
var x = 1;
var y = question.length;
var score = 0;
Q.innerHTML = question[0].question;
a.innerText = question[0].answer_A;
b.innerText = question[0].answer_B;
c.innerText = question[0].answer_C;
d.innerText = question[0].answer_D;
document.getElementById("footer").innerHTML = "Câu số " + x + "/" + y;
for (var btnAnswer = document.getElementsByClassName("answer"), i = 0; i < btnAnswer.length; i++) btnAnswer[i].addEventListener("click", function() {
    if (this.innerText == arr[x - 1].correctAnswer && (score += 1),
        console.log(this.innerText),
        score < arr.length) Q.innerHTML = "Câu số " + (x + 1) + ":",
        Q.innerHTML = arr[x].question,
        a.innerHTML = arr[x].answer_A,
        b.innerHTML = arr[x].answer_B,
        c.innerHTML = arr[x].answer_C,
        d.innerHTML = arr[x].answer_D,
        document.getElementById("footer").innerHTML = "Câu số " + x + "/" + y;
    else if (10 == score) window.location.href = "win.html";
    else {
        document.getElementById("question").style.display = "none",
            document.getElementById("answer").style.display = "none",
            document.getElementById("footer").style.display = "none",
            document.getElementById("result1").innerHTML = "<h1>You lose!</h1>";
        for (var e = 0; e < score; e++) document.getElementById("result2").innerHTML += "<img src='image/success-icon.png' style='width:50px' />";
        document.getElementById("result3").innerHTML = "<button id='back' onclick='clickBtnBack()'>Play Again</button>"
    }
    temp += 1, console.log(temp)

});

function clickBtnBack() {
    document.getElementById("result1").innerHTML = "",
        document.getElementById("result2").innerHTML = "",
        document.getElementById("result3").innerHTML = "",
        document.getElementById("answer").style.display = "block",
        document.getElementById("footer").style.display = "block",
        x = 1,
        score = 0,
        console.log(x),

        Q.innerHTML = arr[0].question,
        a1.innerHTML = arr[0].choose1,
        a2.innerHTML = arr[0].choose2,
        a3.innerHTML = arr[0].choose3,
        a4.innerHTML = arr[0].choose4,
        foot.innerHTML = "<p class='foot'>Câu số " + temp + " / " + arr.length + "</p>"
}