'use strict'

function removeElemts(arrays) {
    let newArr = [];
    for(let i = 0; i < arrays.length; i++) {
        if(arrays[i]) {
            newArr[newArr.length] = arrays[i];
        }
    }
    return newArr;
}

let arrays = [NaN, 0, 15, false, -22, '', undefined, 47, null];

console.log(removeElemts(arrays));
