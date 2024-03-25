const container = document.querySelector(".container"),
btn = document.querySelector(".btn"),
input = document.querySelector(".form input"),
qrcode = document.querySelector(".qr-bar img");


let inputval = input.value;

btn.addEventListener('click', function(){
    let inputval = input.value;
    if(!inputval) return;
    btn.innerText = "QR Code Generating...";
    qrcode.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${inputval}`;

    qrcode.addEventListener("load", function(){
    container.classList.add("animate");
    btn.innerText = "Generator QR Code";
    });
});

input.addEventListener("keyup", function(){
    if(!inputval){
    container.classList.remove("animate");
    };
});