let divs = document.querySelectorAll('div')

// for(let i=0;i<divs.length;i++){
// divs[1].addEventListener('click',function(){
// console.log(this.getAttribute('id'))}, true)//теперь порядок событий из-за true зменился. До этого при нажатии на синий квадрат сначала происходило событие
// //с синим квадратом, а потом с красным(погружение). Теперь сначала происходит событие с красным, потом с синим(всплытие)
// }

for(let i=0;i<divs.length;i++){
    divs[i].addEventListener('click', function(event){
        // console.log(event)
        event.stopPropagation()//останавливает событие на котором произошёл данный клик
        console.log(this.getAttribute('id'))
    })
}

let link = document.querySelector('a')
function HandleLinkClick(event){
  event.preventDefault() // отменяет действие при нажатии. В данном случае мы не сможем перейти по ссылке
  let div =divs[0]

  if(div.style.display==='none'){
  div.style.display='flex'
  }else{
      div.style.display='none'
  }
}
link.addEventListener('click', HandleLinkClick) //теперь при нажатии на ссылку блок исчезает, а при потворном нажатии появляется