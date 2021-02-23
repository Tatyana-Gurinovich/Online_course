let str='1,2,3,4,5,6,7,8'
let array = str.split(',')// метод split делает из строки массив. В скобках указывается то, что разделяет строку на
// элементы массива
console.log(array)
// console.log(array.join(';'))//делает из массива строку. В скобках то, что будет разделять строку.
// console.log(array.reverse())//меняет порядок элементов в массиве

array.splice(1,2,'11','12')/*метод splice удаляети добавляет элементы массива. Первый параметр в скобках это индекс элемента с которого
мы хотим начать удалять элементы, второй это количество элементов, которые мы хотим удалить, третий это элементы, которые мы 
хотим добавить на место удалённых элементов */

let newArray = array.concat([1,2])//Копирует старый массив в новый, при этом в скобках мы можем добавить новые элементы для нового массива

console.log(array)
console.log(newArray)

let objArr =[
    {name:'Max',age:28},
    {name:'Elena',age:18},
    {name:'Victor', age:20}
]

let foundPerson = objArr.find(function(person){
    return person.age===20
}) // метод find ноходит нужный элемент массива с поиощью function
console.log(foundPerson)

let oddArray =[1,2,3,4,5,6,7,8,9].filter(function(i){
    return i%2 !== 0
})//фильтрует массив с помощью function
console.log(oddArray)

let numArray = array.map(function(i){
    return parseInt(i)
}) //метод map используется для трансформации определённых данных

console.log(numArray)

