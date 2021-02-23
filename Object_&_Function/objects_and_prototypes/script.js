// let car={
//     name:'ford',
//     year:2015,
//     person:{

//     }
// }
// car.__proto__=> Object.prototype
// []=> Array => Object

// console.log(car)


// ещё один способ создания объектов
function Car(name,year){
this.name =name
this.year =year
}//сначала создаём функцию

let ford = new Car('Ford',2015)// потом с помощью New создаём новые объекты
let bmw = new Car('BMW', 2019)
console.log(bmw)
console.log(ford)

Car.prototype.getAge = function(){
    return new Date().getFullYear()-this.year
}


