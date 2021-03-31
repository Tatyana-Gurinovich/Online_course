//Обычная функция:

// function getAge(year){
//     const current = new Date().getFullYear()
//     return current - year
// }

// console.log(getAge(2005)) 



//Пример стрелочной функции:

// const calculateAge = (year) => {
//     const current = new Date().getFullYear()
//     return current - year
// }

// console.log(calculateAge(2005)) 

// Результаты в консоли будут одинаковые 



// const getAge = year => {
//     const current = new Date().getFullYear()
//     return current - year
// }
// параметр в стрелочной функции можно указывать без скобочек, если он один
 // можно не создавать переменную current ( return new Date().getFullYear - year)
// console.log(getAge(2000))


const getAge = year => new Date().getFullYear() - year
console.log(getAge(2000))//можно записывть без {}, если у нас нет других переменных. И без return, тк значиние возвращается автоматически


const person ={
    age:25,
    firstName:'Maxim',
    logNameWithTimeout: function(){
        setTimeout(function(){
            console.log(this.firstName)
        }.bind(this),1000)
    }
}

/*Метод bind() создаёт новую функцию,
 которая при вызове устанавливает в качестве контекста выполнения this предоставленное значение.
 В метод также передаётся набор аргументов,
  которые будут установлены перед переданными в привязанную функцию аргументами при её вызове. */

  // !!! Метод bind не работает со стрелочной функцией, тк стрелочные функции не создают контекст





