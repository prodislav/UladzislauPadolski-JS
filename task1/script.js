console.log("1" + 2 + 0);
console.log("1" - 1 + 2);
console.log(true +  false);
console.log(10 / "5");
console.log("2" * "3");
console.log(4 + 5 + "px");
console.log("$" + 4 + 5);
console.log("42" - 2);
console.log("4px" - 2); //NaN, строку нельзя преобр в число
console.log(7 / 0); // Infinity, деление на ноль
console.log("-9 \n" + 5); 
console.log("-9 \n" - 5); // строку можно преобр число
console.log(5 && 2); // 5 не равно false след вернет 2
console.log(2 && 5); // 2 не равно false след вернет 5
console.log(5 || 0); //5 не равно true след вернет 0
console.log(0 || 5); //0 не равно true след вернет 5
console.log(null + 1); // null равен 0 при преобр => 0 + 1 = 1
console.log(undefined + 1); // undefined равен NaN => NaN
console.log(null == "\n0\n"); // false,  null == null || null == undefined
console.log(+null == +"\n0\n"); // преобр в строку а после в число, получим 0 == 0
