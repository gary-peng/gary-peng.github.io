const shuffSpeed = 25;
const loadShuff = 1000;
const charList = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
const eleList = document.getElementsByClassName('glitch');

function shuffle(element) {
    const textLength = element.innerHTML.length;
    var ranText = '';
    for (let i = 0; i < textLength; i++) {
        const ranChar = charList.charAt(Math.floor(Math.random() * 36));
        ranText += ranChar;
    }
    element.innerHTML = ranText;
}

function whileHover(element) {
    var interval = null;
    const curText = element.innerHTML;

    element.addEventListener('mouseover', () => {
        interval = setInterval(() => {
            shuffle(element);
        }, shuffSpeed);
    });

    element.addEventListener('mouseout', () => {
        clearInterval(interval);
        element.innerHTML = curText;
    });
}

window.addEventListener('load', () => {
    console.log('page loaded');
    for (let i = 0; i < eleList.length; i++) {
        const ele = document.getElementsByClassName('glitch')[i];
        const curText = ele.innerHTML;
        
        const interval = setInterval(() => {
            shuffle(ele);
        }, shuffSpeed);

        setTimeout(() => {
            clearInterval(interval);
            ele.innerHTML = curText;
        }, loadShuff);

        whileHover(ele);
    }
});
