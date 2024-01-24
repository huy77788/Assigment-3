const emailInput = document.querySelector('#email-input');
const loginBtn = document.querySelector('#login-btn');
const resultDiv = document.querySelector('#result');
const infoContainer = document.querySelector('.info-container');
const infoEmail = document.querySelector('.info-email');
const iconDiv = document.querySelector('.icon');
/* Xử lý sự kiện khi nhấn vào nút submit */
loginBtn.addEventListener("click", function(event) {
    event.preventDefault();
    const email = emailInput.value;
    if (validateEmail(email)) {
        infoContainer.style.display = "inline-block";
        infoContainer.style.width = "auto";
        infoContainer.style.padding = "-3px 0 -10px 108px";
        infoEmail.style.display = "none";
        iconDiv.style.display = "block";
    } else {
        resultDiv.textContent = 'Bạn đã nhập sai email định dạng';
    }
});

function validateEmail(email) {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
}
/* Lấy ra tất cả phần tử mà chúng ta sẽ sử dụng */
const Elements = document.querySelectorAll('#job-info .container .exp');
const btn = document.querySelectorAll('#job-info .container .job .view-more');
const text = document.querySelectorAll('#job-info .container .job .job-info-cell-text');
const viewBtn = document.querySelectorAll('#job-info .container .view-more .view-more-btn');
let toggle = true;
/* Dùng vòng lặp để duyệt qua các mảng */
for (let i = 0; i < Elements.length; i++) {
    Elements[i].addEventListener('mouseover', function() { btn[i].style.display = 'block' });
    Elements[i].addEventListener('mouseout', function() { btn[i].style.display = 'none' });
}
for (let i = 0; i < btn.length; i++) {
    /* Xử lý khi người dùng click vào nút view more khi văn bản hiện ra nút view more sẽ chuyển thành nút view less 
    và khi ấn vào nút view less thì ó sẽ ẩn văn bản đi*/
    viewBtn[i].addEventListener('click', () => {
        if (toggle) {
            text[i].classList.remove("hidden");
            text[i].style.display = 'block';
            viewBtn[i].innerHTML = '&#x25B2; VIEW LESS';
        } else {
            text[i].classList.add("hidden");
            text[i].style.display = 'none';
            viewBtn[i].innerHTML = '&#x25BC; VIEW MORE';
        }
        toggle = !toggle;
    });
}