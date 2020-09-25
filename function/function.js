'use strict';

/**
   Exercice 1
 */

 var myPutStr = function myPutStr(value){
      if (typeof value === 'string'){
          return "c'est un string"
      }

      if(typeof value === 'number'){
          return "et pourquoi pas 42 ?"
      }
  }
    myPutStr(50);
    
/**
   Exercice 2 
 */

/**
 * Compute surface M2
 * @param {number} Length
 * @param {number} width
 * @return {number} totalM2
 */ 

   var computeSurfaceM2 = function computeSurfaceM2(width, length){
          return width * length;
   }

    computeSurfaceM2(2,4);

/**
 * Exercice 2
 */

 /**
 * Compute Surface M2
 * @param {number} length
 * @param {number} width
 * @return {number} totalM2
 */

var computeSurfaceM2 = function computeSurfaceM2(length, width) {
    if ((typeof length !== 'number') || (typeof width !== 'number')) {
        return new Error('this is not a number');
    }
    return length * width;
};
console.log(computeSurfaceM2(24, 30));
console.log(computeSurfaceM2(24, 'toto'));

/**
   Exercice 3 
 */

/**
  * Create my button
  * @param {string} selector
  */

var createMyButton = function createMyButton(selector) {
    var targetEl = document.querySelector(selector);
    var el = document.createElement('button');
    el.textContent = 'My Button';
    targetEl.appendChild(el);
}

/**
 * Detect My Age By Night
 * @param {string} selectorButton
 */

var detectMyAgeByNight = function detectMyAgeByNight(selectorButton) {
  var btn = document.querySelector(selectorButton);
  btn.addEventListener('click', function() {
    var age = prompt('Entrez votre age :');
    if (typeof parseInt(age) !== 'number') {
      return new Error('Not is a number');
    }
    if (parseInt(age) <= 17) {
      alert('Vous n\'avez pas le droit de rentrer dans le club');
      return;
    }
    alert('Vous êtes majeur vous pouvez entrer dans le club');
  });
}
createMyButton('#app');
detectMyAgeByNight('button');


/* MatrixGenerator - generates a matrix and displays it on page
 * @param {(string|string[])} [somebody=John Doe] - Somebody's name, or an array of names.
 */

function matrixGenerator(array){
    var matrix = document.createElement("table");
    for (var i=0;i<array.length;i++){
        var tr = document.createElement("tr");
        for(var j=0;j<array[i].length;j++){
          var td = document.createElement("td");
          td.insertAdjacentHTML("beforeend","<span>"+array[i][j]+"</span>");
          tr.appendChild(td);
        }
        matrix.appendChild(tr);
    }
    document.querySelector("body").appendChild(matrix);
}
matrixGenerator(
[[1, 1, 1, 1, 1], [0, 1, 0, 1, 0], [1, 0, 0, 1, 1]]
);

/**
 * Numerical Clock - Display a numerical clock
 */

var numericalClock = function numericalClock() {
    var clock = document.querySelector('.clock');
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (hours < 10) {
        hours = '0' + hours;
    }
    if (!clock) {
        clock = document.createElement('div');
        clock.classList.add('clock');
        document.body.appendChild(clock);
    }
    clock.textContent = hours + ':' + minutes + ':' + seconds;
};
setInterval(numericalClock, 1000);