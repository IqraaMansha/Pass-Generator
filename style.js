var chars = "qwertyuiopasdfghjklzxcvbnm1234567890[]{}!@#$%^&*()-=+ohdghituiru()874j8(*&^%$#364bdnvjfueg";
var passlength = 16;

const field = document.querySelector("#rnd_field");
const btn = document.querySelector("#rnd_password");
btn.addEventListener('click', function () {
    message.style.transform = "translateX(25px)";
    message.style.opacity = "0";
    var rndpass = "";
    for (let i = 0; i < passlength; i++) {
        const rndvalue = Math.floor(Math.random() * chars.length);
        rndpass += chars.substring(rndvalue, rndvalue + 1);
    }
    field.value = rndpass;
});
const message = document.querySelector("#rnd_message");
field.addEventListener('click', function () {
    field.select();
    field.setSelectionRange(0, 99999);
    document.execCommand("copy");
    if (field.value !== "") {
        message.style.transform = "translateX(0)";
        message.style.opacity = "1";
    }
});
//