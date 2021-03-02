let  createCounter = function(counterName){
let counter = 0

return function(){
 console.log(counterName, ++counter)   
}
} //считает сколько раз мы вызвали определённую функцию 

let counterA =createCounter('Counter A')//например если мы вызовем функцию counterA три раза, то нам в консоль выведет три и тд
let counterB =createCounter('Counter B')
//данным функциям я присвоила одинаковые счётчики(один и тот же), однако у них разные области действий


let  createCounter2 = function(counterName2){
    let counter = 0
    
    return {
     increment:function(){
        ++counter
     },
     decrement:function(){
        --counter
     },
     getCounter:function(){
        return counter 
     }

    } 
}

let counterA2 =createCounter2('Counter A')
let counterB2 =createCounter2('Counter B')

counterA2.increment()
counterA2.increment()
counterA2.increment()



counterB2.decrement()
counterB2.decrement()


    