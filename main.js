
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
var equalsBtn;
var clear = function (){
  answer.textContent = '';
};


var response= function () {
    var response2 = this.textContent;
    answer.textContent= answer.innerHTML+response2;
    console.log(response2);
};
var responseAdd = function(){
  var num1 = answer.innerHTML;
  answer.textContent= '';
  var unit= this.innerHTML;
  answer.textContent= '';
  var response= function () {
    var num2 = this.textContent;
    answer.textContent= answer.innerHTML+num2;}
  answer.textContent = num1 + unit + num2;
  };
  // var equalsBtn = function(){
  //   var answerFinal = Number(addNum) + Number(addNum2);
  //   answer.textContent = answerFinal;
  // }
  

//Things i tried that worked even less well
// var response = function (){
//   var equation= answer.innerHTML;
//   if (equation = '=') {
//     equation
//   }
//   answer.textContent = answer.innerHTML + response2;
//   var num1= answer.textContent;
// }



c.addEventListener('click', response); //MAKE CLEAR Func
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
plus.addEventListener('click', responseAdd);
equals.addEventListener('click', response);
point.addEventListener('click', response);
console.log('hello');






