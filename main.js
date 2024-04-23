"use strict";

let actualText = document.getElementById('pass').innerHTML;

let userName = prompt();
let userSurname = prompt();
let userColor = prompt();
let randomN = Math.floor(Math.random() * 100);

console.log(userName);
console.log(userSurname);
console.log(userColor);

actualText += ` ${userName}${userSurname}${userColor}${randomN}`;

console.log(actualText);

document.getElementById('pass').innerHTML = actualText;