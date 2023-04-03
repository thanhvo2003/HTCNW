var keys = document.querySelectorAll('.number-key:not([equal])');
var keyEqual = document.querySelector('.equal-key');

var keyRemove = document.querySelector('.calc-key-remove');
var keyDivide = document.querySelector('.calc-key-divide');
var keyMultiply = document.querySelector('.calc-key-multiply');
var keySubtract = document.querySelector('.calc-key-subtract');
var keyAdd = document.querySelector('.calc-key-add');


var mainScreen = document.querySelector('.main-screen');
var subScreen = document.querySelector('.sub-screen');
var numberString = '';

for (var key of keys) {
    key.onclick = function() {
        if (mainScreen.innerText === '0') {
            mainScreen.innerText = '';
        }
        if (keyRemove.innerText === 'AC') {
            subScreen.innerText = '';
            mainScreen.innerText = '0';
            numberString = '';
            keyRemove.innerHTML = '<i class="ti-angle-left"></i>';
        }
        if (!numberString.includes('.') || this.innerText !== '.') {
            numberString += this.innerText;
            mainScreen.innerText = numberString;
        }
    }
}

keyRemove.onclick = function() {
    if (numberString !== '') {
        numberString = numberString.slice(0, -1);
        mainScreen.innerText = numberString;
    }
    if (mainScreen.innerText.length === 0){
        numberString = '';
        mainScreen.innerText = '0';
    }

    if (keyRemove.innerText === 'AC') {
        subScreen.innerText = '';
        mainScreen.innerText = '0';
        numberString = '';
        keyRemove.innerHTML = '<i class="ti-angle-left"></i>';
    }
}



keyAdd.onclick = function() {
    if (numberString !== '') {
        subScreen.innerText += numberString;
        if (eval(subScreen.innerText) !== Math.round(eval(subScreen.innerText))) {
            mainScreen.innerText = eval(subScreen.innerText).toFixed(4);
        }
        else {
            mainScreen.innerText = eval(subScreen.innerText);
        }
        subScreen.innerText += this.innerText;
        numberString = '';
    }
    else if (subScreen.innerText !== ''){
        subScreen.innerText = subScreen.innerText.slice(0, -1) + this.innerText;  
    }

    if (keyRemove.innerText === 'AC') {
        keyRemove.innerHTML = '<i class="ti-angle-left"></i>';
    }  
}

keySubtract.onclick = function() {
    if (numberString !== '') {
        subScreen.innerText += numberString;
        if (eval(subScreen.innerText) !== Math.round(eval(subScreen.innerText))) {
            mainScreen.innerText = eval(subScreen.innerText).toFixed(4);
        }
        else {
            mainScreen.innerText = eval(subScreen.innerText);
        }
        subScreen.innerText += this.innerText;
        numberString = '';
    }
    else if (subScreen.innerText !== ''){
        subScreen.innerText = subScreen.innerText.slice(0, -1) + this.innerText;  
    }

    if (keyRemove.innerText = 'AC') {
        keyRemove.innerHTML = '<i class="ti-angle-left"></i>';
    }
}

keyMultiply.onclick = function() {
    if (numberString !== '') {
        subScreen.innerText += numberString;
        if (eval(subScreen.innerText) !== Math.round(eval(subScreen.innerText))) {
            mainScreen.innerText = eval(subScreen.innerText).toFixed(4);
        }
        else {
            mainScreen.innerText = eval(subScreen.innerText);
        }
        subScreen.innerText += this.innerText;
        numberString = '';
    }
    else if (subScreen.innerText !== ''){
        subScreen.innerText = subScreen.innerText.slice(0, -1) + this.innerText;  
    }

    if (keyRemove.innerText === 'AC') {
        keyRemove.innerHTML = '<i class="ti-angle-left"></i>';
    }
}


keyDivide.onclick = function() {
    if (numberString !== '') {
        subScreen.innerText += numberString;
        if (eval(subScreen.innerText) !== Math.round(eval(subScreen.innerText))) {
            mainScreen.innerText = eval(subScreen.innerText).toFixed(4);
        }
        else {
            mainScreen.innerText = eval(subScreen.innerText);
        }
        subScreen.innerText += this.innerText;
        numberString = '';
    }
    else if (subScreen.innerText !== ''){
        subScreen.innerText = subScreen.innerText.slice(0, -1) + this.innerText;  
    }

    if (keyRemove.innerText === 'AC') {
        keyRemove.innerHTML = '<i class="ti-angle-left"></i>';
    }
}


keyEqual.onclick = function() {
    if (subScreen.innerText !== '' && numberString !== '') {
        subScreen.innerText += numberString;
        if (eval(subScreen.innerText) !== Math.round(eval(subScreen.innerText))) {
            mainScreen.innerText = eval(subScreen.innerText).toFixed(4);
        }
        else {
            mainScreen.innerText = eval(subScreen.innerText);
        }
        numberString = mainScreen.innerText;
        subScreen.innerText = '';
        keyRemove.innerText = 'AC';
    }
}