const shuffSpeed = 25;
const loadShuff = 1000;
const charList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
var eleList = document.getElementsByClassName("glitch");

function shuffle(element) {
    var textLength = element.innerHTML.length;
    var ranText = "";
    for (let i = 0; i < textLength; i++) {
        let ranChar = charList.charAt(Math.floor(Math.random() * 36));
        ranText += ranChar;
    }
    element.innerHTML = ranText;
}

function whileHover(element) {
    var interval = null;
    var curText = element.innerHTML;

    element.addEventListener("mouseover", function() {
        interval = setInterval(function () {
            shuffle(element);
        }, shuffSpeed);
    });

    element.addEventListener("mouseout", function() {
        clearInterval(interval);
        element.innerHTML = curText;
    });
}

window.addEventListener("load", function() {
    console.log("page loaded");
    for (let i = 0; i < eleList.length; i++) {
        let ele = document.getElementsByClassName("glitch")[i];
        let interval = null;
        let curText = ele.innerHTML;
        
        interval = setInterval(function() {
            shuffle(ele);
        }, shuffSpeed);

        setTimeout(function() {
            clearInterval(interval);
            ele.innerHTML = curText;
        }, loadShuff);

        whileHover(ele);
    }
});