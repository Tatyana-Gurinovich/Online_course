let a = document.querySelector('a')
let oldHref = a.getAttribute('href') // присвоила переменной значение атрибута (ссылку)
console.log(a.getAttribute('href')) // позволяет узнать совйство атрибутаю В данном случае можно узнать куда ведёт ссылка
console.log(oldHref)

console.log(a.getAttribute('title')) //вернула значение атрибута  title

// console.log(a.attributes) // выводит объект NamedNodeMap, который показывает нам все атрибуты 'a'

a.setAttribute('href', 'https://ya.ru') //  изменяет значение атрибута 
a.textContent = 'Yandex' // изменяет содержимое ссылки (текст, в данном случае Google->Yandex) 

a.setAttribute('title', 'Go to Yandex')

let box1=document.querySelector('#box1')
let box2=document.querySelector('#box2')

box1.classList.add('red') // добавляет класс элементу
box2.classList.remove('blue')//удаляет класс элемента
let hasClass=box2.classList.contains('blue')// проверяет, есть ли определённый класс у элемента
console.log(hasClass)

if(hasClass==true){
    box2.classList.remove('blue')
}else{
    box2.classList.add('blue')
}
