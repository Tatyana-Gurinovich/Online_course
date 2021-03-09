let person = {
    age:28,
    name:'Max',
    job:'Frontend',
    displayInfo: function(ms){
        let self = this//использовали замыкание
        setTimeout(function(){//выводит всё в консоль через определённое время
            // debugger//служит для того, чтобы мы могли дебажить код
        console.log('Name: ',self.name)
        console.log('Age:',self.age)
        console.log('Job:',self.job)
        },ms)
    }//код не работает так как функция создаёт свою собственную область видимости (скоуп), т.е. внутри функции присутствует своё this(Если вызываем функцию через function и используем this )
}// или можно использовать метод .bind(какой-то контекст, в данном случае this)
person.displayInfo(5000)