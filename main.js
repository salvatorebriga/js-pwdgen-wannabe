"use strict"

let actualText = document.getElementById('pass').innerHTML;

function myFunction(){
    let newText = actualText;
    let userName = document.getElementById('name').value;
    console.log(userName);
    let userSurname = document.getElementById('surname').value;
    console.log(userSurname);
    let userColor = document.getElementById('color').value;
    console.log(userColor);
    for(let i = 0; i < 10; i++){
        let randomN = Math.floor(Math.random() * 100);
        if(i <= 8){
            newText += ` ${userName}${userSurname}${userColor}${randomN} ,`;
            document.getElementById('pass').innerHTML = newText;
        }
        else{
            newText += ` ${userName}${userSurname}${userColor}${randomN}`;
            document.getElementById('pass').innerHTML = newText;
        }
        console.log(newText);
    }
}

function myReset(){
    document.getElementById('pass').innerHTML = actualText;
}
