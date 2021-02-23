let divs = document.querySelectorAll('.divs')


for(let i=0;i<divs.length;i++){
    divs[i].addEventListener('click',function(event){
        let newID = divs[i].setAttribute('id','newColor')
        if(newId=true){
            divs[i].style.borderColor='red' 
            event.stopPropagation()
        }

       

    })
}

// for(let i=0;i<divs.length;i++){
//     divs[i].addEventListener('click',function(event){
//         let counter=0
//         counter++
//         if(counter<1){
//             divs[i].style.borderColor='red'
//         }else{
//             event.stopPropagation()
//         }
//     } )
// }





