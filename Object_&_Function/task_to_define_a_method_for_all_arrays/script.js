/*Реализуйте возмозможность используя прототип,чтоюы у каждого массива был новый метод,
позволяющий удваивать значения каждого элемента с учётом типа данных таким образом чтобы:
1. Для числе это возведение в квадрат
2. Для строк это удваивание строки
3.Метод не изменял существующий массив и возвращал новый

пример:
[1,2,3] => [1,4,9]
[5, 'Hello' , 6] => [25, 'HelloHello', 36]*/

let a = [1,2,3]
let b = [5, 'Hello' , 6]

Array.prototype.double = function(){
 let newArray = this.map(function(item){
  if(typeof item === 'number'){
      return item *= item
  }

  if(typeof item === 'string'){
      return item += item
  }
 })//возвращает новый массив

 return newArray
}

let newA = a.double()
let newB = b.double()

console.log('A', newA.double())
console.log('B',newB)