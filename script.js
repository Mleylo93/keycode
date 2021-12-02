
const pressCode = document.getElementById("code");
const pressCharCode = document.getElementById("charCode");
const pressKey = document.getElementById("key");

document.addEventListener('keypress', (event)=> {
    pressCode.textContent = event.code
    pressCharCode.textContent = event.charCode
    pressKey.textContent = event.key

})