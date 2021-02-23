let button = document.querySelector('button')
let h1 = document.querySelector('h1')

function ButtonHandler(){
    console.log('Click on!')
    h1.textContent = input.value // input.value возвращает текст которые мы ввели в input 
}

button.addEventListener('click', ButtonHandler) //добавляет событие для элемента
//(в данном случае при нажатии происходит действие (в консли появляется Click On!, в h1 меняется текст))

let input = document.querySelector('input')

h1.addEventListener('mouseenter',function(){
// console.log('Mouse has entered h1')
h1.textContent = 'Лена ЛОХ'
this.style.color='red'
this.style.textAlign='right'
}) // содержимое элемента изменяется при наведении

h1.addEventListener('mouseleave',function(){
    // console.log('Mouse has left h1')
    h1.textContent = 'Но я её лублу'
    this.style.color='green'
    this.style.textAlign='left'
    }) //содержимое элемента изменяется после тогда, как мышь больше не наводят
