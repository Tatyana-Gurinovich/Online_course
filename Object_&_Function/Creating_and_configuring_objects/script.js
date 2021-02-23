let ford = Object.create({
    calculateDistancePerYear:function(){
        console.log('calculate')
    }
},{
    name:{
        value: 'ford',
        enumerable:true,
        writable:false,
        configurable:false},
    model:{
        value:'Focus',
        enumerable:true,
        writable:false,
        configurable:false},
    year:{
        value:2015,
        enumerable:true,
        writable:false,
        configurable:false},
    distance:{
        value:120500,
        enumerable:true,
        writable:true,
        configurable:false}
})//Object -- глобальный класс. create его метод, который создаёт объекты
//В create можно передавать два параметра. ПЕрвый отвечает за прототип данного объекта. Второй отвечает за свойства данного объекта

console.log(ford)

//свойство writable позволяет(или нет) изменять значения в объекте
// свойство configurable позволяет(или нет) удалять ключиы
//свойство enumerable позволяет открыть область видимости для определённых свойств
