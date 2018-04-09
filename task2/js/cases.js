'use strict'

function caseSwap() {
    let letters = textList.split('');
    for(let i = 0; i < letters.length; i++){
        if(letters[i] == letters[i].toLowerCase()){
            letters[i] = letters[i].toUpperCase(); 
        }
        else{
            letters[i] = letters[i].toLowerCase(); 
        }
    }
    textList = letters.join('');
    return textList;
}

let textList = "Red, Green, White, Black";

console.log(caseSwap(textList));
console.log(caseSwap(textList));
