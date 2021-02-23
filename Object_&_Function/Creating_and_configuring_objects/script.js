let ford = Object.create({},{
    name:{value: 'ford'},
    model:{value:'Focus'},
    year:{value:2015},
    distance:{value:120500}
})//Object -- глобальный класс. create его метод, который создаёт объекты
//В create можно передавать два параметра. ПЕрвый отвечает за прототип данного объекта. Второй отвечает за свойства данного объекта

console.log(ford)