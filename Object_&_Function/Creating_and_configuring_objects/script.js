let ford = Object.create({
    calculateDistancePerYear:function(){
       Object.defineProperty(this, 'distancePerYear',{
           value:  this.distance / this.age,
           enumerable:true,
           writable:false ,
           configurable:false
       })//задаёт новые поля.Первое значение показывает к какому объекту добавляем поле.
       // второе название ключа
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
        configurable:false},
    age:{
        enumerable:true,
        //get будет возвращать в тот момент, когда мы будем обращаться к полю age
        get :function(){
           console.log('Получает возвраст')
           return new Date().getFullYear() - this.year
        },
        set: function(){
           console.log('Устанавлеваем значение')
        }

    }
})//Object -- глобальный класс. create его метод, который создаёт объекты
//В create можно передавать два параметра. ПЕрвый отвечает за прототип данного объекта. Второй отвечает за свойства данного объекта

console.log(ford)

//свойство writable позволяет(или нет) изменять значения в объекте
// свойство configurable позволяет(или нет) удалять ключиы
//свойство enumerable позволяет открыть область видимости для определённых свойств

for(let key in ford ){
    if(ford.hasOwnProperty(key)){
    console.log(key, ford[key])
    }
}