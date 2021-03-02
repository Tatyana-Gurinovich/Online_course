let person={
    name:'Max',
    age:28,
    job:'Frontend'
}

//воводит значения положенные в ячейуи объекта
for(let key in person){
    if(person.hasOwnProperty(key))//чтобы выводились только значения данного объекта
    console.log(person[key])
}


let keys =Object.keys(person)//более современный способ получения значений из объекта. Вернёт массив ключей данного объекта
console.log(keys)

//способ для вывода значений в ячейках. Object.keys не идёт по прототипу,а затрагивает только собственные ключи у объекта
Object.keys(person).forEach(function(key){
console.log(person[key])
})//в forEach() мы передаём функцию, которая будет вызываться на каждой итерации массива
