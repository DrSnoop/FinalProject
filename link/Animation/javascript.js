let hero = document.querySelector("img.hero");
let shakeButton = document.querySelector("#shake");
shakeButton.addEventListener("click", makeshake);

function makeshake() {
    console.log("make shake")
    hero.classList.toggle("makeshake");
}



let jumpButton = document.querySelector("#jump");
jumpButton.addEventListener("click", makejump);

function makejump() {
    console.log("make jump")
    hero.classList.toggle("makejump");
}

let moveButton = document.querySelector("#move");
moveButton.addEventListener("click", makemove);

function makemove() {
    console.log("make move")
    hero.classList.toggle("makemove");
}

let downButton = document.querySelector("#down");
downButton.addEventListener("click", makedown);

function makedown() {
    console.log("make down")
    hero.classList.toggle("makedown");
}

let fadeButton = document.querySelector("#fade");
fadeButton.addEventListener("click", makefade);

function makefade() {
    console.log("make fade")
    hero.classList.toggle("makefade");
}

let flashButton = document.querySelector("#flash");
flashButton.addEventListener("click", makeflash);

function makeflash() {
    console.log("make flash")
    hero.classList.toggle("makeflash");
}
let pulseButton = document.querySelector("#pulse");
pulseButton.addEventListener("click", makepulse);

function makepulse() {
    console.log("make pulse")
    hero.classList.toggle("makepulse");
}
let mirrorButton = document.querySelector("#mirror");
mirrorButton.addEventListener("click", makemirror);

function makemirror() {
    console.log("make mirror")
    hero.classList.toggle("makemirror");
}
let glowButton = document.querySelector("#glow");
glowButton.addEventListener("click", makeglow);

function makeglow() {
    console.log("make glow")
    hero.classList.toggle("makeglow");
}
let hitButton = document.querySelector("#hit");
hitButton.addEventListener("click", makehit);

function makehit() {
    console.log("make hit")
    hero.classList.toggle("makehit");
}
