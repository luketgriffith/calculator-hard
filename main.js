
//event listener on each math function, returns to window
//event listener on equals button, runs math function with both numbers
//put elements in vars
var c = document.querySelector('#clearbutton');
var answer = document.querySelector('#answerwindow');
var num7 = document.querySelector('#seven');
var num8 = document.querySelector('#eight');
var num9 = document.querySelector('#nine');
var num6 = document.querySelector('#six');
var num5 = document.querySelector('#five');
var num4 = document.querySelector('#four');
var num1 = document.querySelector('#one');
var num2 = document.querySelector('#two');
var num3 = document.querySelector('#three');
var num0 = document.querySelector('#zero');
//math functions in vars
var divide = document.querySelector('#divide');
var times = document.querySelector('#times');
var minus = document.querySelector('#minus');
var plus = document.querySelector('#plus');
var equals = document.querySelector('#equals');
var point = document.querySelector('#point');
var clear = function (){
};
var response2 = Number(answer.textContent);
var response3 = Number(answer.textContent);

var response= function () {
  
    var response2 = this.textContent;
    answer.textContent= response2;
    console.log(response2);
};
  



c.addEventListener('click', clear); //MAKE CLEAR Func
answer.addEventListener('click', response); //Make response func
num7.addEventListener('click', response);
num8.addEventListener('click', response);
num9.addEventListener('click', response);
num6.addEventListener('click', response);
num5.addEventListener('click', response);
num4.addEventListener('click', response);
num3.addEventListener('click', response);
num2.addEventListener('click', response);
num1.addEventListener('click', response);
num0.addEventListener('click', response);
divide.addEventListener('click', response);
times.addEventListener('click', response);
minus.addEventListener('click', response);
plus.addEventListener('click', response);
equals.addEventListener('click', response);
point.addEventListener('click', response);
console.log('hello');






