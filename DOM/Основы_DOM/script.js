<<<<<<< HEAD
// let div = document.getElementById('playground') возвращает элемент через id
// let p = document.getElementsByClassName('text') возвращает элемент через class
// let h1 = document.getElementsByTagName('h1') возвращает элемент через tag
// console.log(div)
// console.log(p)
// console.log(h1)

// Более простой и современный способ это использовать querySelector  или querySelectorAll. 
//Если необходимо вызвать через id -> #
// Если необходимо вызвать через class -> .CLASS_NAME
//Если через тег, то ничего не надо

let div =document.querySelector('#playground') // возвращает только ОДИН элемент. 
let p = document.querySelectorAll('.class') // возврвщвет НЕСКОЛЬКО  элементов.
let h1 = document.querySelectorAll('h1')
// let ul = document.querySelector('div#playground ul') // элемент внутри div, принцип такой же как в CSS
// console.log(div.innerHTML) // выводит содержимое элемента в строковом формате
console.log(p)
console.log(h1)
// console.log(ul)

div.innerHTML= '<h2 style="color: red;">From javascript</h2>' // добавляет элемент в код
console.log(div.innerHTML) 

h1.textContent='Changed from js'
console.log(h1.textContent) // выводит содержимое тега , в данном случае тескт. Почему то не работает((

let input = document.querySelector('input')
=======
// let div = document.getElementById('playground') возвращает элемент через id
// let p = document.getElementsByClassName('text') возвращает элемент через class
// let h1 = document.getElementsByTagName('h1') возвращает элемент через tag
// console.log(div)
// console.log(p)
// console.log(h1)

// Более простой и современный способ это использовать querySelector  или querySelectorAll. 
//Если необходимо вызвать через id -> #
// Если необходимо вызвать через class -> .CLASS_NAME
//Если через тег, то ничего не надо

let div =document.querySelector('#playground') // возвращает только ОДИН элемент. 
let p = document.querySelectorAll('.class') // возврвщвет НЕСКОЛЬКО  элементов.
let h1 = document.querySelectorAll('h1')
// let ul = document.querySelector('div#playground ul') // элемент внутри div, принцип такой же как в CSS
// console.log(div.innerHTML) // выводит содержимое элемента в строковом формате
console.log(p)
console.log(h1)
// console.log(ul)

div.innerHTML= '<h2 style="color: red;">From javascript</h2>' // добавляет элемент в код
console.log(div.innerHTML) 

h1.textContent='Changed from js'
console.log(h1.textContent) // выводит содержимое тега , в данном случае тескт. Почему то не работает((

let input = document.querySelector('input')
>>>>>>> 79a0be033e3a9e7fc2b4e14208a1f6ba6b9dcf29
console.log(input.value) // получили содержимое input