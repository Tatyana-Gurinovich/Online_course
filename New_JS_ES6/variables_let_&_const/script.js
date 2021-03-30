/*Вместо var в ES6 используются let  и const.
У let такие же свойства как у var (можно задавать переменную и вследствии её изменять ).
Однако когда мы создаём переменную через var мы сохдаём её всего один раз
Например:
*/
for(var i = 0;i<5; i++){
    setTimeout(function(){ 
        console.log(i)
    }, 2000) // в консоли вместо 0 1 2 3 4 мы получим пять 5 . 
    //Сначала браузер читает шестую строку и запоминает последнее действие с переменной, а потом выполняет функцию

}
// Однако если мы используем let 
for(var i = 0;i<5; i++){
    setTimeout(function(){
        console.log(i)
    }, 2000) // то в консоли будет 0 1 2 3 4. Здесь браузер запоминает все действия с переменной

}
//если задаём переменную через const, то её нельзя изменить
// Однако если мы задаём массив или объект через const, то мы можем изменять их ВНУТРЕННЕЕ состояние 

// !!!! Больше const в коде - это считается хорошо.
