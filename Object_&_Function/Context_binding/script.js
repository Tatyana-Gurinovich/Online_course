function printObject(objName){
    console.log('Printing object:', objName)
 for(let key in this){
     if(this.hasOwnProperty(key)){
         console.log('['+key+']', this[key])
     }
 }
}//функция выводит ключи и значения объекта

let person = {
    firstName:'Max',
    job:'Backend',
    age:29,
    friends:['Elena','Igor']
}

let car ={
    name:'Ford',
    model:'Focus',
    year:2017
}

let printPerson = printObject.bind(person)//метод bind создаёт новую функцию
printPerson('Person')

printObject.call(car, 'Car')//метод call делает тоже самое, что и bind , только ещё сразу вызывает новую функцию
//первый параметр это контекст(то что заменяет this, второй параметр название объекта)

printObject.apply(person,['Person'])//первый параметр контекст, разу вызывает функцию,второй парметр это массив
// в который мы передаём аргументы(переменные)

//Суть: мы создаём уникальную функцию с this и дальше привязывая какой-либо контекст
//мы можем пользоваться данной функцией в любых целях