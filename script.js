let keys = document.querySelectorAll('.keys');
let spaceKey = document.querySelector('.space-key');
let shiftLeft = document.querySelector('.shift-left');
let shiftRight = document.querySelector('.shift-right');
let ctrlLeft = document.querySelector('.ctrl-left');
let ctrlRight = document.querySelector('.ctrl-right');
let capsLockKey = document.querySelector('.caps-lock-key');
let toggleCircle = document.querySelector('.toggle-circle');
let nightMode = document.querySelector('.night-mode');
let body = document.querySelector('body');
let textInput = document.querySelector('.text');
let changeColor = document.querySelector('.change-light-color');
let colorInput = document.querySelector('.colors-input');
let keybordLight = document.querySelector('.keyboard-lights');
let keyboradWrapp = document.querySelector('.keyboard-wrapp');

for(let i = 0; i < keys.length; i++) {
    keys[i].setAttribute('keyname', keys[i].innerText);
    keys[i].setAttribute('lowerCaseName', keys[i].innerText.toLowerCase());
}

window.addEventListener('keydown', function(e) {
    for(let i = 0; i < keys.length; i++) {
        if(e.key == keys[i].getAttribute('keyname' ) || e.key == keys[i].getAttribute('lowerCaseName')) {
            keys[i].classList.add('active')
        }
        if(e.code == 'Space') {
            spaceKey.classList.add('active')
        }
        if(e.code == 'ShiftLeft') {
            shiftRight.classList.remove('active')
        }
        if(e.code == 'ShiftRight') {
            shiftLeft.classList.remove('active')
        }
       
        if(e.code == 'CapsLock') {
            capsLockKey.classList.toggle('active');
        }
    }
})

window.addEventListener('keyup', function(e) {
    for(let i = 0; i < keys.length; i++) {
        if(e.key == keys[i].getAttribute('keyname' ) || e.key == keys[i].getAttribute('lowerCaseName')) {
            keys[i].classList.remove('active')
            keys[i].classList.add('remove')
        }
        if(e.code == 'Space') {
            spaceKey.classList.remove('active');
            spaceKey.classList.add('remove');
        }
        if(e.code == 'ShiftLeft') {
            shiftRight.classList.remove('active')
            shiftRight.classList.remove('remove')
        }
        if(e.code == 'ShiftRight') {
            shiftLeft.classList.remove('active')
            shiftLeft.classList.remove('remove')
        }
        setTimeout(()=> {
            keys[i].classList.remove('remove')
        },200)
    }
})


nightMode.addEventListener('click',function() {
    toggleCircle.classList.toggle('active');
    body.classList.toggle('active');
    nightMode.classList.toggle('active');
    keyboradWrapp.classList.toggle('active');
    textInput.classList.toggle('active');
    changeColor.classList.toggle('active');
    for(let i = 0; i < keys.length; i++) {
        keys[i].classList.toggle('keys_night')
    }
})

colorInput.addEventListener('input',function() {
    for(let i = 0; i < keys.length; i++) {
        keys[i].style.color = colorInput.value
    }
    keybordLight.style.background = colorInput.value;
})